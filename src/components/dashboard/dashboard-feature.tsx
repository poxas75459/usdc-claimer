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
    "56btTwZrKyi8a8duVEpS83mqrv3ALsRW7K2VxpHk33BuUR1zt9Xq1hnKy1wxGWCgPpaSd8ro7eVfZxoBR3viQiYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BiK8aUp8odqDNv685B48nqV8R7LSZWgpJuDy8tiuNBu7nKAMu7USdQSPQvd79BRMfqjCCGea1ncDmnBP4zbdQah",
  "key1": "4naXCEjtDhnTb4KNJZHSPP8ZJtGM7QmpsTzJYPDw6XPk9rWGJorVyfdgLGrscq8d6sfP6iYMHPMMp2Xf7exn618J",
  "key2": "2hyf41t4zZaQQVUtTBqVZwjEXhCNWuRa9niSWfzmwKsh3LjA4bycxDAkRs4oyQ4rTvdMnXVxRuVz76VLoaHfYshH",
  "key3": "B93WJTKeggpy3xKW8VZJ7ZFVc47RnnDKRrfsmsYeC8Q3rwgvzdLxDKgi6TRYK22AEgn5fDMmNoJRD7bUSFANHJx",
  "key4": "3wTB2h1DVzQ58ZABw2H1VQgvUVXVN646633LEWZf78hKq77ya2tRim8grrugtAQ27Cha9EgQKNADECYhQxBefbdz",
  "key5": "ovy1SZsnbsounj3YJL6XaUxAvWDjYupKC6LBjVW7Vz2eJGMhRtvytLvm5WcbUFZuSXnAQ7m9qEJZL22TpVTFXfj",
  "key6": "4Rm3q5Un8brTXGYVzhdtMXCVvRDH9XRF97ZacVYCEzkkoqUQYE7fq88a5UoNbucqV2Ruuo7CBMFMDTwQE37Qt8as",
  "key7": "qGgheGVnB4NmJU1aufcCkfzD16PgXHsgK23X8GP7Ci4eaRwo7Ud1NqyvSmUpQCm2Zc6ZZwRgord7Hc8e3BtzRT8",
  "key8": "2vdGKzTusgho49ntDpDJiZVCJLKPD86PNmEcnAcQ4CthA5JXQx1VQj6D9eQRf51HCgVPxTe9heB1EbWTy2Kgxhad",
  "key9": "65Q14H3rhJuDqSokuXkDZiQNFXmkuUKNswvbgJEu57phgdKNhHYm8L9iHFz3KCESMhTHryRQ2rGEUJzFUYDRxqgN",
  "key10": "3HNuoFqYNhHbbx5WswtDzbrHdRibuqdZKaKXvRWhipT7cqKmZNkdZUUwYvge8uhDaF8VBaS1tEcrsNZq8xrDkhSB",
  "key11": "2dP3z8YUAboTZ2ep1zHJnb8KAGr9zbk6eSETdRy5Rkz7Tn6ZigapapgTRGTnfbmYBH5CJsCKd5NaYBut77hiSC2P",
  "key12": "3afdnwzKZEnbC3VCXnS9fdMUrqwNovGankLgCGRfHLwoBdJwGBJ9Asqdrjhksdr4poFoEackcCP1U3bN2TfdmPLG",
  "key13": "4rVg7dCRw8UTqT132sRgHyKDaYWnknuuxaActJTgpkgmmv32N3qNeSo6eLaAhDnonv4imavD4nVrS1R8nHk5vh4g",
  "key14": "52bnmgyexdgN5pdcoCXPX7RquHQXgyPaD4tnY1KKPw9neDf13jKdvdSr4suE9acQte4sWvcYU9Dg6FVxP38K8Kkn",
  "key15": "ttAJrScLNrieYniG1TjLvuRSmHg9G13CK8WdMMNdbhqFqKaU8nw9WzegK88bvCdmDeVP71BYih67YEMuntLqFYD",
  "key16": "5twpdWZq52UtE7iwQm9mW1dxravuLootsujNcpyfJRdhsBUueSZmhoUzYNAPT1rcBecqtB5q9tm7TgEeMrUjmuiw",
  "key17": "X9nogaWyN6VkznNyaekExpUUPyQuUnHsziNfwBM5NwPwGPCj3WpFoyJXLDcJGkzq2QJbcHZCDuhU4v9r6Bz3o7u",
  "key18": "bhxcNkAt3qJaqNRKQ9pWRfSRmACYcv1syF9ACu6NUht65vZc9qTPwyzsYTGhRnpEHni35v28oEebCSBcxs8Ehs9",
  "key19": "4sERYYgZ1BZkunQd9yEUWsZXbNZ5jb1Qa6woc6QP43h8f9uhaGLgeKJDpX5xpMkKf7r21Rmohmn4mGdMnfwaJXYS",
  "key20": "RKFfrquhDHeFkvz4cNBpUjMBE51HmYpYWHiayDtiKLSNkHiworuVUuXvUtgDLKKXtuuqS2ufygQvSQ7uQJ9cVcE",
  "key21": "4s8q8xBjnnqsL7PEEXLPMizkVjDj3vUQVU9GPP3KR7n4PTyqez9j4iCt9QKn2HUNcB4UpxA3fcJFSUFv7MVZe43s",
  "key22": "NvFgyStctkCC1hu2GvC6GTJJb3vb6xysEQniia8ewftpFxHdwnDe55Ef9HMKpm3UYC4uSruNe237f3x5r5MdR8y",
  "key23": "3P666iLUxgRFYH8Ba6vCr5aFabdQkbnKjTP7kBFTgekcySEpvZ3iU761FDAVyLdL993Bxa9pWAs6ajD8SNzQ3CKK",
  "key24": "3vM6gqRRZ7Eo14uXhscbygrePQB5S5yW2ceckc3eBDhw93hRBUxHp4AcFTuQQZU19S4S8EWRwVmuhNjYN5pZsjhm",
  "key25": "5XLYbpbbjyM5jiSiY84vg57g61vdVGS64axFJ8Ug7kmBkhMiEgrDodMARTumQhDNfaKsnbfqvZ1uu2NsiEyNERcC",
  "key26": "3uGTR5gBZVaqfihbDp4mFo8fXB4j9jCi1igpT4mPcuqSjLyWHA9LQ9NLDQ9TEcxrXxkPURJNdSkcmJkw8sga1PDG"
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
