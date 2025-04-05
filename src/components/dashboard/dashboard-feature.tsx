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
    "5iwxf4xnMXmr7Uyq8QuWe9itxgZg2K2dG8b9R3fLhtoXnhaCsFcJeGzWziJ8XdDrs2CWWEHRWvQSgTaJFj5YydVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XU3cKZajJU1uWdskDXzyFEe6FWWM2mJSSBDekzSVWSHxT5AVxJ3KvXzXowpt9pq94pwVsCt1fZLPtHUSXGH9sVd",
  "key1": "32X6sVMrceHG23ASP4HUbufZqoVBPGypYqRAMXPGjvEcpkahC2ZJFF8zsU3MoaBNnYANphEq9zGFbhymcVwXgESE",
  "key2": "5wHBnYhG6MJGzA3hNvhZ2LDAzzPQQ77yStnayp2wuw6JMtaQwGbCZyt8FYey9vwoUfziB3hcjPyEB5syshjieyCE",
  "key3": "3hP43Xq285cwbYHb4nWLDWzQua3Eoc3i7dHQm9Uaa2ft4ooLf95vJFcp2mc6i3QewpjDvs5FWqWuorXJPB5n6ZpK",
  "key4": "jRLZNg9ewuyowd5foznv19VEbS7GRGph5iYz49sHyCFAJFLNiNnAZjyPsdEYJA96Fyd8cJvZ4gvUba7ckqe2Vyg",
  "key5": "3fhrx8oTa1bf2iX3xwpXHXSBhet5mjitcMiydmFq8qB7x5F4WruTozEam6TKyyP8h2qzJSPftMFdyuTKJ7MSKazq",
  "key6": "3n3p4FZBoXiY1yfjsmqEE4xupgoj4JWtKHFrbnp373ezV4zPQzM1nBe7E3fCo8HsAa5TPGgexfyMgtoVjbDkNFGr",
  "key7": "2yqZFruSUh1kWKbVeXz6iu3LZtth3WuXYYNTW3VnrVmh9MMjvn48kmizRWvme752o714foxXoGUcPoj5jDtp7bRM",
  "key8": "3xSsp9R9Pm4pPGdeMrSskFVH69xyQBGB7TRt4rNvMsrgmRUbzSosCt66cKM8SwZvfV7qp9jzhbR9m4evLBaTT129",
  "key9": "2WkwVGodX9qFFT5Kvch7MtRrvfVfRMwq29hBReFwJimJB4YTEiRKca64efppjofWmMLrBL4YFceYpyvpr9rNcCMJ",
  "key10": "3oEWLpjVJkGzBjME3oy43WjxdKMS3xHZ1eoRWCt16MEEx9P5MTsDswryE4Cj1h4oeXmtPCofGZmLg1jsorU9Tu7u",
  "key11": "5oxXc3Ua7n6KLRbhEdNpMtRHYv7Tof717KBRRKesQTWKzx4c9mzgDWDHjLENx29c9KJtan7wrJY4b3ZUwu1qdbNG",
  "key12": "2N44A3wmGJ4gti9bjWPYz4wx729Z5FLbGbVALPcooTMAnjLZ5PmW68RpHdTLBtADtBqxBx7dk8QxsZVXyCjHQDsA",
  "key13": "2sw6eobEX5FkkMjiXFSzHGwsEtJW9c1pCk8o4cyEfHjqSnicmtMMswjY8asg58y6vBmy3A2NKyXgS5qEfTJh8Pn3",
  "key14": "4YdWHETgWJ2GJ6SGc1CcCpLeS5GUHYrW8YvQL2wwLAMXo9hnr1yP8QiGgmo3CFrXP851EFTWN6Sc7dGEMPQPwMtk",
  "key15": "4ZdBtGXYV1FoUYpUAzERd1zVi4mf4BJhJxFrJn9tmfFP5hSbeboXHGyBYmktU8DfmBCCfBJAfSHfZ8vk8AYZnPZW",
  "key16": "2SuxsS9UnCv6HMvxqbVh9MLnxd2pDaJJpUpyzypAHwUuVihk64AeGgz5U8M8xUa8eE5aA4ecrnz1qgTEPrPa8dfb",
  "key17": "5aFEQWdrf4Yg1jYAvwzFz1p2UhM5wpN5Ece8B19edLQdeEQj6jpaNEk94o7QUmmLmbAMdcBLdZuhQXJxYNTjjJoj",
  "key18": "4gnqrf9MdHfWVP3HjWUY3YkQCTZxKwbnBCSrj6aLVuF7A2CMzdKa84bUfgrepaX7sRFGQjqnDDaXUtd2k6PMzsZo",
  "key19": "23DwxfyWPajtKMcZqQV1rnctfte2WtS7bNHivzEjxFQiqAoMN3ydeDeYheUVryDzxA3ppQzp2oW1ZMBHvDzkrHoZ",
  "key20": "FiduaAHXB3JasYh23VmfqT8xG7jGbwXQSq4aXz4JTRQqTMbPtPpjDAfGCpki769kYxP4YQa7u7JYNq86VLsp8MX",
  "key21": "2wZRXykYcL4V2kG5EEF1asXVzayU5VEQjXJ6NaGgdZ3CThYPqa4pV2rAV7QcBxgBBBkBwSf8yxPauBbVzYnQQKVv",
  "key22": "4TJMvrbMTyHbQrnT3GvSiUHrt8fqFaureV9dFLJMeAv458g2KMSDpA3y3Msiwc36xhUZdPzjS27YKEyUYJWYWWvK",
  "key23": "5qMjArVqrdJkkG3oZRpJ7xuoUrCmFjfF6qNZ6eFWzKoAdSaaGNFT3bk2aNidyQ6TCaCqHrX2uU9EATmnPKeNnJsw",
  "key24": "5k8iiS4wSJCi5BVDCkkZckQQ2EB97bYebaSaE5LmUkEMAxfBbJUahKxqewKpiYwoV37vJ7Rqi6nx63QGY5SKdady",
  "key25": "3CZ89dQfVi92CZRS1EmcXCeHcrgGDFpqZpMZdiMzinE38GE9X2BkT4mpZ9Lw3TuWcqooBv5tkuWWoNRKu1TXXxKg",
  "key26": "9wjeuRkpeSVn5ypUmYvUnJ6ZACzyhfJUhFmGAUsH71XUiP4Yn7v7vCiRqfERskTX1Lw4bfYHrV27Sn6eV1JEoHv",
  "key27": "FrQrjPKXD5JThDb77Caa7SHZxgF6DPKoJXpPiqLZ1jFFFfQ8yVT2kbzwULHwNafwoq7NEeVQ89MCDJQN8KABHLT",
  "key28": "4GMkY5YujC13e7DR9rYxnoJSE7MXcbH8SqxnHL7j8VwXYYi74ZMsPbCAvbXN3ydhPbMdV6bsA4pjxbuA9Qy8TGJD",
  "key29": "6445VsyYNMEmpSZd6ZNuhyAcNuqUxhiVPYKB9et3tihkTaqZBDaQRAHW1mdnaTzCbUhzDkbooe4g15fqj6cVVsZa",
  "key30": "5qg4AZnkGMYbrERrP8B21D7UvLr7NEqotzk2B1QMtpeuhmJYvDL9WYKvtN9TqfdYCPSsPyoHreYWhUScJ9P6ooDy",
  "key31": "eSjWS5RzL6CG9XVkoR869DN6PWZZXuUQUQrZGmBrMnQJX4GMt5WToUoN1ViPKwBLJH8J5NskdMvp5r5x5fRWnB6"
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
