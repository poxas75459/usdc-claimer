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
    "1kj9XrKnFH7V5h7qA2QUKBi397XK4jic2RFb8fbCD857FRPw7GWHdGC79AAzCzmMBTUgG8tmNGDX2GNkUvUm6Dc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EuRv2iPtsiphtuGxbsTxYmTh8YLNn7VSNEE3LESqdHDng3q8aWVKzn1ptMStKksvd6RpTMz7NuM3HN3FWGTkEVe",
  "key1": "5PBsaBgXazncdBXFupp4MjiDiEkqsLUVVG3wWFFyFc5Kkzdhot8KTzXNkCaiHgsCqYvHKAaLJhVJti2KkvaVKsZm",
  "key2": "3h2Zjo7qc7xdbvqzLJLFWDK846NP5dDdLr8A3rPNS9mfXPYMZiVqcRyhkm7cxiL2M1tpDArQ1nZKAakNwZhg3ZkR",
  "key3": "2dsDbLXbZaJHwvtTfAakoXJeTMYWRT3idDd4HU7QzztUAoUgJp9V548cmSFeD9u2mH1M5BKJEPZrFwwmE1RV9dxy",
  "key4": "2JFnf2WcVTrWRaHV5Jnk1ta86AHqPsteYvt8ruNT28W1vRPM4a4EH2QFnnpi3fZDqqZfeRRUpJepGqsSkY7Gfd3j",
  "key5": "MbmMPXPzAnD6UDte75iNNBo4vo38nYg8s5xDmzttCC3JyMLSaLQ9hoS2jDk5J7sf2JoVJFo9LveG2Apqjw2XodT",
  "key6": "2tMy3ue2LZNBFvJEckzfh3sbh2ujM7KLvkxy1UAxCEqe8Lsrv5tKR5gHNFFQ5TBeT8hAhLrpGp8mw2LLEggFUckY",
  "key7": "5CZpa1avuMtJaNdM2qAKBjtw1Vc8bL4W1JwXMn5FWzQ9bJ3RCBxbwetcvwQcT61fxHFDpef2ZfW6BwXusSjFj1yy",
  "key8": "HJLRChDsY8tuE7YNzznyBYH64wgCujDoW69gJr31UxkhuN2BEzpNPBTjFyJ4bewEiBRnP7uGodVPNoxQrBEcgau",
  "key9": "3enh93XD932WN3GZGcuS46ZuRAGv7hT6azdjtxBEd8qTHAkeTbg5wZvn7NzguDrYyq7RyHkNMz2uj8A3fTeerqaC",
  "key10": "5ikZbjECZZBdknX8qwJ5WTs9RmUPtTqGYD8mm2kQG8Q7gaQLnRXwWEhmSCwryNkUWMg4doycTERSfZziNAJ438S6",
  "key11": "U27pGjYyG7frj8DwTVQAbfXTEVnyZF57zZmi8nY6Z5hDPpz4hwAu6Xm4PuvwaHTWh8roujxg5CzpV4R1zASxiH4",
  "key12": "5tB2EuS1Smhbq6sNQmbKoDs4KC4VzahHb9brnu9FRFwAgPj4BHsBNGuHeaXBE73cf6E6T1uzcHrvRAUojrEusjCe",
  "key13": "QWCkYwesthr8pdbqeib8B5LMaH7p4M3492xLUjfms2NM2YW55KxAdCav1A2xsSsfvF3NdS8jDPVAcMsWuqMQdfh",
  "key14": "2h1NbYP8USoUvQNjGavr59KKjWu3GrJ12wejqcRbA8chNsvSFv7wZoLvncaKuwQpF6rcxqJ3FvGL395TDE5Gr4Rh",
  "key15": "3MFSgpGWC2eXNWFEzG51kx6ZksVWBYrr3KHuxx5Rd9V8urEiKhVfqY5iTKtpXFBFNSBpXqm6e2YBun4Sf1gswT4L",
  "key16": "3n1DfrHHehujmAMiuXdAYZzy7PxsWV6xrjSRtF4tHWzQ9xmccK6si6f9vC9ZRwtLj1N3daQNEfaetdreJaamBnmb",
  "key17": "2XnJ8xBJTtjQgYwH3wn9UvDUAEff7Jo7BsTwE5ihMi4QfbAsmPvKMwQJhBMiVKwSRNQ5T1b4C3Nu16crPoAofkeU",
  "key18": "tLAdtWpzNBn4d2NPcAQ86ker5EeEPk9ch1PL1taPAjrwQaPDKerCevUmA5MTAFi7V7RSUnKzuEKGixaNUCSGWwb",
  "key19": "4AJaoCkCsHu3HZF6zN8zM6GTwmopruwukjXvSgCDv4RJAXfPEhNLM915hmWoDpR2nD8mmjsSGZPy6qwzNPVMPzHX",
  "key20": "kNE3a2a84FnZVKMi12qngj6KeNXVLud1qZ92JeVubcSe8tznNvth8agQbCFsawUNbTh1FiXyV9q42va5KFvr2LB",
  "key21": "49epNWY6vHb271Xfub4ZyGXtEAVByZa4EKnJHyhxh24ty9Dt8biEqqw3VxLsSVZNonJu5xC4EQS9W6SXBfEdsKsc",
  "key22": "2g6e3hu1QUdHW1ofu1G8kA9pS6tz2NK6Pj3zs3cybiYpoVUhz1rdMzMvSaGZWgWg3fEdnLXz6uYmXoKiQjVrWAZT",
  "key23": "MUP5KCzBhcGmYnK62ACkFs7Vj2xvqdapTQxPrUGGdLFX1r9rEcQAMgfirqCaKViM6mvEa5UwLRiBEB7g9jBj3vp",
  "key24": "2EYaGkjBgKDn7T2qmukAgm4Nd5SkhR3M1KXT9kdak5PvhM48mNK8c5bX9WV8LHYnphBhcpzZghLVTApyYHPvUtpC"
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
