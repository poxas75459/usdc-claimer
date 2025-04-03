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
    "469vNL3moutXk7zLTrfuQ6qcMxc2QubGtvb8oGKXULUERR6ZnNJnYtmEquM9Um6dNd6myWShpkRCgpw6f5b5dmfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hmM4nUde4qTLxKvhXHZdD5dLSwkE3JHK8ZtiXMFodewZq4Avva9TdQfHjXpczLmAAZi7xDW27CRUsW5BA9mo1RD",
  "key1": "3pnAtmrrJTCbbR5Lh5jDNKro2AmdnTAmC7vt8ZMtpyWKPdmZc4XzsMKKL7coAYwb8Jw7614sHY6xrsVESb373CeV",
  "key2": "3wvUkYEiXbGwzB4jsszcqcHc8kC72pfQtxGToEfBvgxhNcLsPBCE9UXtfzFasVteamgcPDx9NBPramjAQDP1uZ9X",
  "key3": "4DnyMBCYXEw6vQSiSwx3uJLLz7ocqNntHAf6wqLVgWhUA7dyc8Ek93tjyKLV4e8h2fuTAWEra1ZkJ6XSMMkzouXi",
  "key4": "RuPPgzPZSkSAiYyk7ENb9vcoheN1Feh8D42cnZJ9TSeEWLr8nYPQzzaZYtQBJmoqGaqsagxNPtQveXejEFuYhLf",
  "key5": "34iS7pyrfipcffwVszuPs5tvhcEdxSu3ErLxFux4Feuoqi2vzuTHxTKjDyWTXUvoVvzPW3cZHyoGEhN4fqPB7af9",
  "key6": "5jgczT1REh8YeEfDuCRQ6iAY9goGJeNXurLxwCSX4SZuJbogThq7HcxHr1canWXvKZyJr5sq9ARnunAPApX8u37r",
  "key7": "64CrG7t6UuyGxPjic1eW47us6mZCGxDjQr6GJMSDwhZ9Us1vSBmrcLhFvshXgtJhR6c5D6snCyfXeqp8utncSBHA",
  "key8": "bagZyDPXCjMn1ZvkSeBKva9U4EnpgbVK1v7FktPziEiv7Dusxp2HiRd2wC7o6ndNXzRvHHFAYtYqKZSCN7CFtf2",
  "key9": "54QRRBNWSTxYcajaZi6ApKz6ekYD6h3JVfRKtNZUq9E2aL2znGycPQgTaWtjWxTXL81fDhV2qc5wU9dznv71T7qF",
  "key10": "4f67jE5R8LYTm8V8RXFCJE3iZnaQwrLHZdCYneZd8yz284G82D2m1GA5ikocYjxoSnXEkePvxRxPx73z7tRLc8NT",
  "key11": "44sabBDYLc6PNQn6X3vLQQbjpBvFX3UTmu9UN33cp2CsBUPvYhStktqGG2s5aRrnc1AjfLr42pCP29FrpdYAvUQa",
  "key12": "2mEfrwXAD5j59p5uQpPgpqCWWqqq5auFf425tzwhmeAHWbQhygq4czosL75oDMdwNtf5HUWzfuzsD9U3Qkuyf1di",
  "key13": "3YscveF8DKsZoDRCedh7xhsm68tXqKG9QATzNL57n65LddMZYorHztt6Gmz5xCgD2EzXTUKWH3VyJ1kdeQ7dNyYr",
  "key14": "4He1iMu2JsPmvEMysy8zNMhYisozMstMw5Z3wvwuoNRgBjrHpu1KooYGWXK4QobYJxKPSz9JNQWGaC9AbUDaQvKM",
  "key15": "5przxFq6rAPHnCwBCedv9BXGu1wkb2JcFS93916mjybDeNpz1fAXsFoqtqiBYdNZxBTFBvKvepbfqqK8ueDmT86y",
  "key16": "rPrzGCaqsJ1xMMzBoHfCdKUvnXCGkbiuY62gChZ8jRZ4czy9vu2SGuxDn3zuuxmLQWDiAAHJ3ETtmYv2rB2sbcq",
  "key17": "5eiA11rCRQXBy6Uf4mJjniX3CnbGMBPVXqhUnzjyAD45oSiaQPPDvypyctTcUo9R6FFhsXhChq5JkLMsVBbUBaPs",
  "key18": "4Uw7ZAVaZp3r4WZMfrFGumPUdwtM2D5KAYUoYS7zSPUwop7bvWRWNqd265V1MD2owKGYsujRoBVvfxUd3LfxFL3Q",
  "key19": "55C3e5pjzC7QRwqbb5f4ut511sw5N26HU2Luqr3UvcfE8YByPEZLBiGEKHn53GDXqHeumbaxprnPCWM5E3rbMHRt",
  "key20": "5HzJW561rNUCUpPCNZy258p9RFVwAUi68UtE8uCsnQhu73QR57yJS6vZ3NMzJBLhdoWpYxiYoEAGdt19rhBMbufd",
  "key21": "3oZWgiCfHep4RRYYw2sk6yJqYveJC1VEnX74BJ5D4kbrmsrfjUh7WWiUnRnC7yXjXfwWXMHEvST8ZZWav2yrY5cv",
  "key22": "LXw6RBsTp2DoHGzfzLdeGgoyoBWhgRKfdAKtxPRD8QqK7e2KHbS672ctAypb5AFj3pJsgoCdP3Aau8ZcuzQHVqS",
  "key23": "4Q1CNwMTRob8jRwuhoPwYpuwx7qP2A9V2DH6C2v6pa3hF9Yej7fbUGAUDiG3VBenSPsminXDzpJCMAVk3r1tX3RJ",
  "key24": "5HmwWSxCySnuG5B3Bn5N7HGZZTuZtuhDcXei8dqV12Vq54nnwFq7zn3vmcWbnRyhqvFCrGUrRNSUq8YRJJNezSBn",
  "key25": "3h3meLUpj4HJVdWEZW3V7vW9erXJSPXgC7RHWicJUQqNNoFen7ZgzjsU8CAmEVakkQjvznjRuYwPqd36NFbMgXCp",
  "key26": "2e9gsHRDjYyNoMT5s8jeue1bRqqiTKwSVQf3amTgjBhAivkxJ8ckxA4X9WqUbg3X3K7LvCWC11C3pp7Td2akn8b4",
  "key27": "3UfauzevQTEu2AoZQj11C1Sy8DFEvW52sZEmyXSeJLrTo9s3evhdXv8JL2K4GW2sRBLSbnLqJLv26EASy3hL7rk5",
  "key28": "3iA1WPHBwiKtwqQ8BtWEAJvJ1EPLdTwXVuhKMpre4tfxWWWNk9MGDRyBYYv4YZ36XQ3yEBBdExnTLziRpdyCwaW1",
  "key29": "2YtFsNUQ7EZbjHJ1fyWUqeyYK8zNpcN7q48xHVoGkYFK4mS5tGQEsVreyaMwppE9LGWdFUgpz8XnU2Rrhc5LET1",
  "key30": "3bWgGXMxCuhXAAsSDdXeGmLfAkh8Ygfzb7mR7Tv1P6PCMzYyFUYZtnWBejqEbbL6PVjXnn1davsawzv41UfpoCQm",
  "key31": "3tMiXmyjR4FXhK3kGMdmbFs6QQNQkR3C2avPxTCJqqxtv7xtDHNZmYQSz3DP8rcbe9dvumRDZLcqdkftGuAPf8da",
  "key32": "4sqLr1CLn4NAmBcpcYRJpinNVhPZB12AdZpKNXENjz8F1m8FrTkrJZVv1NTdzpbhtDyns5kxi231CSw9hSajNtC4",
  "key33": "53R6REAExEDKfjq2FDCMr3fMuGMWhdFSQugMAuTr5yb3hurGzi1tnd5bZFqH749YRku4FhrCTNeKYfwZA35Di2rw",
  "key34": "4b3eKhdjC7qPwLoG21BQ7dtNAdFTwZcsKxGKDHQ94QXVVu2zLbWdrv324BkGusGFgM3YrbseByyphMPz5UthVGwK",
  "key35": "3Q1e1uXT6Pd1NxJQBxMwinG973UYnGCmJ3DZa95eGQPZzmmp6S9v2AbzLtTFcKdUXcKW6vvk1RfGxrprrggvemhe",
  "key36": "3JbzQEcBoG58WQBCvuzrYMPcbgHeNerEsRs69FgWmE7NJccUZ7wcGm7An5mBLrJ81M8rMbVMmBfxkLXUqUTrSLJS",
  "key37": "4HkpNBVxYc8b8qBjZLQzU7MYiqF3PQySHqt9Ezuf3T4ao8As5sezUdhgkmGpgNMQjZCkKfuVZuetN63WGd9nZUTV",
  "key38": "Nwq4nfSNoQ3JGKfPRGjpY9F5uusQdynx8x6Tch3udCxKEwFzvdJngGZ9XsyFA5HaRjXUBzbkxifVW5gmtTaxywN",
  "key39": "598KEy6L6BWsU1KLPguWgRGmxbXNdZW2UqBnsNdyPQ1S3H5o4BpMxqQY7EaTFG5tJdiAT2CBnx5Yz5NU1PmptFjE",
  "key40": "5W6idfofNXbSUyw2E2Denw7x8NAeaKoLJb7LegYhz5eHBkmzdrvUU1CGrWd9z8bZVtksdzK3yj3zmecRncH3zYKn",
  "key41": "5DPo3y81s8s2MB57WfaV3chtHfs8UNWfNxVB84pxb9E7GryEpqtPVdWVE3YjY2a5UPbZ7ZW7DD63JVi2KxME1RdU",
  "key42": "61aGDCeSMnyUgB5gwWvwsPw4KC15XNZ7zwiDFiP9iNiEX1juuTgjE2RC3dgGb7AbD5bBoR9Tpx9kbD9zZNUbSiM5",
  "key43": "4xZYxaMks3o9xNQnQ9z51MhVrkMrvtV3M9Bd8iQ9SC3pXwDsAVMPB3tKJd5mFNxE9MuEzGDPFysM1idf8DrNaCqp",
  "key44": "eNeu1EpEZejEydeNxKByYY97PjChLbiVh9BGYsHRedixChopLe1TvLVL7tyYf28bQeMQEGexCgzzETPvESsThHs"
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
