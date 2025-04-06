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
    "4tdUeZ1C3s66aYpqvSzrjKbkXRTuUeYYWRtthQCbfLqaBzudVWcAgXd9d1rYXT5rtxNoMxNANbaSHRvJGfvgiLim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gwppy2WAqj98CAnzmZsjYZSjP2rBNwryM68JgkbjHovAkzGGs71LZkQezBV5FJAipGqyTZKAwMXgBkr9qeBF9Bt",
  "key1": "yivTxZcbeepJJ1KxFsioeDHvdCfuuoawkyc8T1SWmxduHf8YehAdvBRUvdLn1TUkhh665khfyEq1QcSDfS3nZf9",
  "key2": "3Dcvw4ZryVePL2sGkqURszLPhGGkSAxC6FfBbLnFug6pbLsFzDcsdk8AkqgdkWnfLLzmpMq9NUCVS5UBgEmtSBZD",
  "key3": "63hWSCYTiyWfwTrR5oqR9BS1JWvAtb2P8CUPedR7k4yrWrEJRpBS5NYxdRk8pk9Bp1Tmqa6t89YNZ5Lpf3iqC8Mc",
  "key4": "TS2jpppUFTJNMFCcdYkitBzVPeXCScNArnXDvpD1ndpeTdsZCRkeTQBtG6CscFHYxXcMhK3AJGWNgBGYypNB5ox",
  "key5": "2Wf7b2DA49BXJierBFUcaxNDdnKgaTDpqSZ31a7XoVbb2qovJyDfdX8kTxXpxPjEoFZiHjwUA3VU8caSbBAnPF16",
  "key6": "5uYJbbzMNeZr1nVWb1Vizj8iMX9QmN7fgFeVqqErb5BoGiqzzhbwti3Zpdnn1Fmr8KPaU7YGTJBW1m3AekxmSaLL",
  "key7": "P4ojuVceLv6jc7hjT2vnj3FQvm7wzQKAYfyypY1xcduAhnGiZ5EhCPXEQKxo9wR8s8LgyaSZg5rodcBzqARfd9W",
  "key8": "4VSN4pZF77zX1CfwbWrKaCiyqtp49g71aPuJAxXp4pzomNYTzLa47dnYw8eAUK6ZBHhmEhpvjA5VWbXdT2vCG2F",
  "key9": "461Lo2surJF1F1cKmvgjE67rV1dNXweFDexm5rS7MxfFE49JrgwVMv6wkz7GTzgwHGm56XJUi8G3HL6DPF4BWU1h",
  "key10": "511c9hqDQspte9fdtUzoqGCYVjaFtzctEVmipKJoy7xNmHdLFNKd8LJATMUBYs26KjydqXbZd6Tvw8YH1LY2sz57",
  "key11": "45xwboJZkHWbXPaPZBAvaSj7jz5BKMhbjkLngzNUVdhNyar8e3EwXahaa1zZ9Rb7sej8PpDnNJ5txA2ja11Skxmh",
  "key12": "5XDNCHNskA1bqK1xYfKAMBnvcppmHPU4FGb7VFbamy2cwUtpETsTXrdRkjahaKFEaY6962i1HTjTpQyX4YSvHqPR",
  "key13": "3xRrSp712hRHpHC6X1xWTHxYfE7a5EzPrcfZqmU1prwJZxX5gxDFFJ7e9iVSsGJFC9jsevxH88yfmyQzcAHQS2HQ",
  "key14": "3DZaDfZ4QHxYrT9yN7kNgZtqKL9uNiLKP5xLSz8bY2r4nxA3mjMDt3oU1xmnX3NesGTiiEZPAxHgwiUt7iqFWwEE",
  "key15": "3Q9ZKWteinpk7q1hAGAd4CrxH2DGuURr8G1Yb55ToRobatLmpX5v1quuQ6D2MK1z88qb7xXrw3xS7rBGe7X5P7At",
  "key16": "2q7GdsJupyhy833sUjF8KvKdyaPcL32MkbAjvVmRYFuewKTK2cTVwgxuJPd34JxExUZXX5mLbvCZAoaH5Lyr4NcQ",
  "key17": "45DpaFXbrerqoSGXFTRkHSDhDRkccKLGUGgEPJWS9qcAa9WEFYJSHDrSaQettCrNSKogttcFtcTThixqXC4xoSoT",
  "key18": "4RtEkRuYAhuMUZxPo9cRKTX16SeLc5wdCxvCXp7ueCNEurXpfQwSmGhef44kYyKZM849M6xDpAW9BfvgRrAFP26h",
  "key19": "5gXp98Jy3qefdhhp3YDfAEBLAT5rm69qKQxBhSqbJyMMN8aVTwdSn9aV7KPsKrHSVUuo5UkviCfcKvtsGpgxqvdM",
  "key20": "4MejycQwWBC9EpydVh9BcT5fVSnczJByKMEkPAZnfC2Lqg8Lpw8mK567Heq3ZvdsNKUbaiZS82q92qdpKLL3Sfbk",
  "key21": "2WyMD6V1tNZ1KhN1ugLmAhtbxvsWCJu599kmWVpNfbkjXrRw7qxggeVHBxMTGn1Hu6cjnRC15Aaepc7GeEHaYaAZ",
  "key22": "2h7wJ52BbXKnougPPi3h28FUXM9hZLLqSUThmhf5FaXxwPht6r6YQUBY6tDU1zo2r73J7tJddhc1hmRLxQ8Uyq5Q",
  "key23": "3W8fpuRGiry29eRQFE1qLHhCdbWdqwcnoC2useytdSi8WDDzaUxRAP2wtSqyVgkmVRyjPjFdd8SgR8Bfw4vqeVEE",
  "key24": "4guEuw3tUBEJtn84RU5qhan5hsGjGYa1jiKUFUrebmHcfg1GuHwDftL79amz4F1p2i8CEoMpnxumfif9N3GkbY6S",
  "key25": "3HJY5NLvf5Y2xp4GexS6Z5iTxAgvpZmmm3CRDc2mfxr2vtXtrqhs1ECxiJkg4bPdmHLEQWY3RAFhYdAAqW7QP3uT",
  "key26": "4uRrUi5gq15Gj85CQmr5sqr7grDpumZje46tKmiVnKb4Ac7FckS2AMajRFbtxXsuoDwtfxWLFrsfF9gvgvGiRy1L",
  "key27": "hKCjZdQMuZgwDPWjBDVCiL4ZfkCqBrUmoxo9bhdAcWtejYPiRuaFt3aziGRgpQUBStfiHRc5tyiB2ruXKsbrqv4",
  "key28": "2Zreq37P9hAGxqhH5mtHUnGj9psAwY9hE1gRtq6KCt4txQzJ8q8HGNL9iSbkhRUPKsCTL8FX1qE3k6jMASY4JB2h",
  "key29": "vr4hcoiB82ubzQS1ixPaMn1P6qgJVG45zCbAnu74cE3hquPqLg67WydzaBivhj8U61jfaNQH4iERbXEweSgSnFe",
  "key30": "3mWyZpMyaErQ9dH9BAEhau8rHZfCoiCxnjXbu6E2NmzYRFdrP4j8xUv3nzf8w2P1Rr9yhZa3wExm8386UybMpxtF",
  "key31": "MEM5GwH9K8WrgCbEqHPTapxWkfWsgjxtH67o34qtiGFYNmgGKUTme1oEEztBazHkafTNQatkswGGX7S2qiPUGTv",
  "key32": "2nhc9QoUDp1CqCNnC7uCNsZM9xKZjp3SDKP6zDm84cJVyQ3vtjQp4a3X42anGwqTsD95BJTeaQ9UGmDfwugvh2qy",
  "key33": "bKLXscL7MTfnf9W2SdHYaifpHFrhjCxnBvHjt4BXT5eWVTpx95z4VZBDjN25qvs9fjRcxz9T9kzsAoVZV4QK9p7"
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
