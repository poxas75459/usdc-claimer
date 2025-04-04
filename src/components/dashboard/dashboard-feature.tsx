/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "HFp7PYTN81G8s2uirUrVXGVVYNCQSqcprvi7ycMbrHZumWWcJDAthftdhMv119A6512TkKLFAKPFiHAt37v3b5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SohAY9naiuNVURWMNyftbGen7o4kFGqEDeJa1JrhUuZuDH9hLQjytwHPE4wvGAoAyFUSLs3dkEKd48c14zuLRnQ",
  "key1": "2SbybFCvBv7aA93TR3o5E2BdaAT1eLRBWbzSFAbpeWxU74bcUvQxbme3Sb6Kj9G486yKx1JQdrmxAk6XNEanZ7pb",
  "key2": "3TQrp1tsGiDdscWLxa9JyYLaTwdXUNuLtXsm7UucdoZSwMwH5jLwvxN9CQTuk3MTqBjaYDmqjBRwspUFc59jMfky",
  "key3": "53w5sD841RAXmM3iZCZqP7tXNAFiXpPHRoydUsh7WGSv4yGNxqG7mkeHLZ8FBkjQ1yrM7vonSvWqHsPrhc174SMd",
  "key4": "46pebpk7C8mcvAsDEahmreeaAT4JPFEtzhFFJDZ6eqfJ3mRbJvy5RGDPsBJbNM8KNRVeKVh2FNUradn2PDnE4SaU",
  "key5": "5HxGXZfNLcGqkE1X4jm7zi1kZnKbUdUWq3cpURbKCExSragYTcxkY3EzAxoXgZ8k9oKQTsCDCqEEwfHngyy8StCJ",
  "key6": "4hYf1gpv2CBGrJyZd9LtKjFRgtJRe4LaXXYSUz7MMdHfNTpJWEpJZ37Pdz9i3U3cYFM5KZwMTUQB67mM6QfjckfQ",
  "key7": "4y2jWcNc1ibRAfEPzWb3VNskRM33ao6SiNJu4SdBgnK2fxGsJNHJacaiSEHbJL3qjFd3ei4jDSyiQS4EDSnwbiY5",
  "key8": "3U6q4kLGXavxpSZ58712UYVjsC3vG16jGCpXVWmHw5sp3bKg87Rpj4duza9jGyQKzqKvtH3VfFYstiaggZ1JeJiK",
  "key9": "4Yy5cReGHpsAGBT6zoYQmUDeiqFWKGnGSU4wP2mps4AvkybBZWhyww2nnk1EL3sQaSuziDzkW52e5piAkJ3zVso9",
  "key10": "4ckoEbsdMLbsZ9AUBtAjh5nvXQ87GbuQVvvRY36HZAjFxQT8X2i2VhmToymiKzG41DqAgTLHDURdR6ypQyMJrRPv",
  "key11": "5bzC3sL2HeudqkXQAUeJhQjHQYkhm9tsvbrE4uQJUzARuWaFLDSnivbKzFTD2KW9n8mN78QwBBvmsrSdfNUBtAr4",
  "key12": "36SjSoSHi6CCtx7vzfrK72Qy7z3HykajCuEkskup11t6jDfwn9mgFe915KLWpE2vf4mYVbMa9GJMqrcKmwgVU6c5",
  "key13": "4KwDoow1B5uDg65KxpNF33LPfrXrYy51yZEK1K3nCF1DgUDXeHk2Xzr4jQtvgyEDtbYsxWABiwGe624J6NYiZurR",
  "key14": "3oQ7BijQfRtv2GyVaahqipD8GFBm5KB2Fryf8Cd4PbuyZ4yiR6f4BUWpS1S3NWSjh3Zxpvmddb9Tx5gYkZ8oGPeg",
  "key15": "5qvqLHv92mo8ucVme5uFZiyzHNGn6mzV3CoM5uiHbpzve1mp3TYM52PXVC722kqS7nvRVQHRpkE1SdCbyiszAfQL",
  "key16": "2MfbkjJaY1ML6PetyPWAapp9P5UybmZqrThGzPCsZJDmmhHSaCCyo5TtHzaCbgnhR3EqNjcgyxEfvUkNEdEKBpHb",
  "key17": "2ziXXQV5dd75qmJpXN9CEE9dLogCfAsmMFrZ4WFUa67cC2WiU7564Rcz3zGPv8RPxEw6dBm3or7TnkcaTa6JiFW2",
  "key18": "3ZypazgAWmeAFaEhzYWVr4D6atNTNdfyv94URkCUcXa1T2tYwNCeyZVrBVFywGE5dXMPXB8s5GBhQDhXZgEpKSei",
  "key19": "2K9Bomfy5Ltx8qdjwUBEGJo7gBpuDfewjFXKcDLfZNKUZ2qZoeMyc1kdiWZUKPuQDAJ6iNVzKyZ2srPpwcA1fNwU",
  "key20": "2GwbGhzBwuxEtQKWzAA3jgZfy25hdcLNTPgamPqRzAxt3Xf2KkCgig1Q1wGx6k4CpJV5uL6h1kqDh99AcnkssrMd",
  "key21": "4iwYcoDmpGjcAzZquTtFKoDbrQMQmojiNWxwFnrpNMxQSUmLhzc76w5TpXNjrw1zTTz8gSQ5J87ouKVw4DxtLH1E",
  "key22": "61pfL9cUfH5fvNpsEuvcwRkTxgZSbLwu1xpE7KEkKW61KbTH8sBmpFt3ZV3GN1G5twGeCgJFaZrpNFYUbLvwHD4h",
  "key23": "33vAFJVdLw9RCkH2o7r3QYctZaV3dwm3Z7ixv54JqP3XWt2HRip7vyeGs5wJv5pMqdJM1tkdDkbkebQnXSso3vgT",
  "key24": "2u2FBEvNvYZXLShxKU9FnP5xV6S9VwMyTeG7PEqHMxZyerd4wMivurFSsexRAweLsm16cHyc62YGbVhek1MEsJBu",
  "key25": "Wv7yAMQ7vttWBZWoZn4kakFUFHPUMuR8gXbVxHVejQhZ6EbXu1KAS4cABTP6m5WBW3NQ8h5bCj63hDzUvDxjtGZ",
  "key26": "EVpfaEkFrXJz6ZSypkti18cKzCJTJ9wUWv8Wb4gGwpi26eGWJJRCgHfyqaVKpAAAwxKNBKAzdWHWbX3yktpaam9",
  "key27": "2uQYYcPAjbTH6MV1FYrdrG1dQWCPAdEd2j6cHNx7SHWZ6RZX9AdSnC9C1bbuLAUVzyzhwPdiFANoePVaqsxgGPGY"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
