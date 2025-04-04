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
    "2AmxfB8upW8s7Tp1NYLmLiqmQrRk3TWrcBd7a4R2ZDM23whQGPyryWSZKF24wmPiun68BnmUaLPNoPJHfgQbbCLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FqC3Pyqz6z9HYEgSSejomsJ74nq6C34mFfsfL4Am2RiprduqmmiPx8jH575JfMCUGh2AovHaHZGdaw4AvoTkXj4",
  "key1": "3h9RB2xq5MrgmQTibJysLS9XuS2VVn8AbLhER277w2DEbPtUDs3pe1A44ubSwLMSUTkEb122u5B6GqXyGX26mH7n",
  "key2": "3hVoQBirBqB6E52F3XLaEmPFLkJSryhNW4FU9aHYQtgpKMi7hezC4EUWj6n9s5bTopAQ8m1E3hgq7F2bYm3ts58W",
  "key3": "2cfv9NjUZxt83oXz1j82XuHZumpbXc5GvqrQErrYqNeXxAyWcMC7YwZdJBd3jpJ85YrdcyZC3mK56jfRCy9hFQg",
  "key4": "5z3T4waNrnG9Haz4R7p34onWYmzkmzsBxQfE56iq787s1qSL4fAFVPNRCpEMFWrxN71yTQPzNjCGh8SjRBaX9DZw",
  "key5": "4pGfG2azzASunRqcAvWmgtsaV3Apq2RUKHddRUtTo4H2EirWiJczWuZBbMvPAgHrkLoK4ekQoy3onnoK5SpPsfmc",
  "key6": "2UJq4voCY8rbm5YwdQY8WubP3K8Ko9Fa7jRuvPeyLu8ovBXFLrbuataf2vRcJdgi8wFMUZeTtNHeqAVKgAJm7JBn",
  "key7": "qdzeaXk5otPr8GeVGT3k2Z7ujH5ehyDhLUMwV52aEotnvx7ods2fY975iqYv9GjHumba1uUyJiARehfwASQ2MkU",
  "key8": "oCRs19NFSUyvaUcwLkQW65tzuEYAmv71ohYHF1Ex6UZXYcnbE4YSYeiav9dKkxSpji1kmBZj2gC9j9JJVqSCFW6",
  "key9": "4gTDDGfnJCy7YQSbwJcLevzNyewJsRo4bcVgDpxwD7nczJD8CdawEcb3BC5gYxBrTTZQB6jtWtrdx1A8vXR7HJiU",
  "key10": "4gbBNnZi9V8PxA8dKiKgGZWDjtk89EYVoYcHmBM4QyjU9xWvPHsd9ywRVbWevTh7NycyTZ923TiwzRM9QbPSXyrz",
  "key11": "4Yo65qbZSSTUTJwGBkvDVDqRV6VbxTWbPTkMPL6q7ojBc3iLJ7RA3prfSEwMgco9Rogq6oaciPvBbeD62nzBSGr2",
  "key12": "vXhrfnDimCoqRn8TauhtPHZxNzsV5YdkS5ULifCEhK7XMg3Qs1nEArfMzgSZg7Pyy8Es2LnWgG2gjemTVVGd4gj",
  "key13": "pAaNZBe1rmntwWx8N6hSrRNapmatqwDwvPh324eE5QiMXK1KGMxoKgFfBRVRo9Sncz1ZGXuqqKHg6tBqgAxfoSY",
  "key14": "5wsxdCP88xd5Y3PxEFxoqbKY6mgc8Ceobp6VnuW2G4yTStbLbUXWPAcyFdENeXMFVct3virF6vZsnCRmdmVmxDre",
  "key15": "3AmYRDUKasU3uMkEAD928z2um8fkuJkNLERGn4Nfz7uHdWzM1snx9MM6z4kDPqrHBPtFURoRSm3iMdHTBNUY7K9s",
  "key16": "2dfmT7V6wxbfWta2qaVTRFfMGK75Zshrb5L7Uv1fhAVAtpNgj2YMRjNkNi96eQzKvTX1G7mkdz5qAKNN8Jese2Ce",
  "key17": "4zk6EuronQXeGZaSPYqYKQiNMvoCFFvkUKG6tLhu9duNc6tWTVxG74K274pSksbjWxhrJfL4sD3dxk2gUbkH3rtH",
  "key18": "3BbNXTpZJaqqgHtpmfQjEu3NK1psFDFLnNFJXqggBHaqVWeSyXEzZ5KEnLM9An5AFSEFo3sdXxmQGkBgCSWfVZ11",
  "key19": "y56v4PCds8rAm4WiPBXKGgbAWAKjeWAm5YwLB491gYKiusFdXhLT1ir4eXFYeNfhawhN1eibfQ7JqN5tfA3TJ4F",
  "key20": "3374TAL6BJx4byNaxmZRZv8pUN87x43Yhqp3AzhfxZuj64tzfbziuM9Nzcp3sE32prx6xPVG71kw59Vgn2CzCvDH",
  "key21": "2uCTvFwj1QxWPCL2pCRr6dATAHKgYPSdPPgp6dC9xVyZxFZgAcBuLGiJQyPekKrzM8RwXoqDrzYdjAPoaDoHxDKq",
  "key22": "3nEHTMT8okxf6hsg91XENHomwY75orxcUbUwBnsD5Zs71BpzQFe98tUB1FvspKzDLameAVoLovRBSb87d4xk41Tn",
  "key23": "35wwJSB6vnCWLH2dUMBwTZY5qMCkZFZsifyxEDpK493KiqspwCfYrxXsKLMiePKws3Gus4Qat6jbuqP3WYFpXbTr",
  "key24": "4kjF8yND6Ns3y882ft1Uvn2wAwBLdKdCDs25MuEouHHiE3wGAm2ZGPUz7ETdHbe1BYRkmK4hLPCuwoaipDs6jBWJ",
  "key25": "4Z4GUsSCkTxBxnVJykJbT1z1N31p2HPwbnzEhhRBDe4q7mzqZU1g9kPDRvbZd3S9bR27M1neMEkc4Lgw5jhmMhV9",
  "key26": "kcMbH6JKXFkYoi4kuDosdnewC2gVYGZQ1zfKeZj7rtQvZb8cYkjVkjmduoiAGD8KqDNVspygxi6LWTeTq2SGXD8",
  "key27": "29jxoo4mjv4Sd9Eo977oW524o8wNwxXbh2a3TkKjSimguv7EWJX8V4ubdpRFLdvdgLvzYEHuoDnAqL3Gx2UngKGF",
  "key28": "5FSop5tTFKu64ij6NBx1kmsQzqjV25fKeXf6oiMHn3dN6E5GWf6cZ11pYNrNNsA17kL4YRJJHaAxp6U9HXbFe9GU",
  "key29": "5a8PfHQXjKfuEtDXv5jbssRGp9zFsmhTcp6d2PiWEWrRec8Tx7huQyMMk6E2n7yAMQnSZbmejT1hB4piUE7yJitE",
  "key30": "27YXkVtVrsqNnj2TmXoBMt5ZmySMXyWyPNqqPiF6w9RMUho7auPiDfP5r2odb3rKS76MeM7Ap6sQyP3gioUPY65F",
  "key31": "5yaxRDMRqeQTaPZVvS2waZEis4W4A3MMvVjaTFgMCvPzcgNL3vtaMHqSHHuEiiTDWiZfiADbpnmiqZz1kKjv3raS",
  "key32": "mq2AbohFtiAuPpvbdjBVWprab7AHGJGFFimK1dSHFHnXP2WEkVKhhaCyUS3sTNHviYypyxeb8jP6FR363Sr6BJg",
  "key33": "1vK68SGS7TSLysicEcCJVwPuAPkbT9W7dNTAGNfqbs1Ri9KjHCjejPFbmWVJHTHTVmdL4dVYZ4NTe7srjAbCxAZ",
  "key34": "2PSATsQvnMcayGPnKB25eSg6c5mYUjrXqQB9g8N14taWPZDfrT4ruPxWLZJvDX5wbUfUwz5ED2m8MAH6muhfokJV"
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
