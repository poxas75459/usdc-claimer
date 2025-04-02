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
    "5UEgkTNtWyb5TgSfsLqLtde5PGhdJPmc8Da9ELsqbosrxLHzdY1Z7Cc4aQp9H6AjEgY4VgMXh6y445p9um2bti9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WKbMsdc4P3ChPJVBaPyqcagN6HbXgpLeJzj1HCFhqCDg5PPy8oXN9K1ZA5Fo4jyj3p8nRLQ1868i4Mg9rGEMh1k",
  "key1": "4E7dgGFdCrmiyGht8TryPirNioCM36LmuFcjiCqyFbYPmmM2WGGV4s18sRbgmKKuHvWeFZ6KieipqEsPCvaz1Tba",
  "key2": "4XnMesC1dKg57mMGkpom7WbqmdJaBPoFMnpsp31zUyqK9oiREXWZiKDKyKAxv9r35kGdSAFLn2tGHUzz3M5VT2c",
  "key3": "WXxWNxRfZYoXcLJrzLmaob1r92omvrXuERBz5mFPZJiqXYAJ6eNoMNxrErumChnKzhfcXsn5ibATtmrB81aKbPS",
  "key4": "ZsCdW1A5ZamiF52bjae3KHYmzaZhZagAT15SwNKH6JSzxvkSUoD9wQZSRZVmDBCUDGpTFQeoopcGEmmqZwBip5f",
  "key5": "5oksgAhe8UCedotREjtaDNoDiKEaqsAefQnmD5vvd4xcEGqG8tKfAWijK88dKtrrvURbx4bUMNMfihutTBc2ptM3",
  "key6": "5Ccv1tgKxuHWCxv9LSymEQvkjKAQT2LEJMro785stp2catdm8hY2Z8EQCXBodRxjXpSKVWh2ZDvzsbkZvVwzpDLC",
  "key7": "3XVkVcDrvRAsB9qh32bJUJ7j1nNwvV9squ3eSjag3idPsKiW2n6rpjYm5gGhHuMcUQPJqgeLtGxXkuuYwuQb8YuH",
  "key8": "4NeQKmGcxEPHHdYpZigv1d3c6QEFu38mJt6XNymYRU5fZnonYowYMe2XaU3MNvZtmtBS38DfWSnUXLvQgZQPTiD5",
  "key9": "4LHhbAmSzBcCZkwGBnevcsdtfBQed6K3FxS2Nhi9WJUxk3DBQViqbP7kWwFa6GJWYhttqifE9vJHsdWeFbm2j9GM",
  "key10": "5zvvuvE1xBn2Yr6U9PWN5FsJX2P8MGTBcWXVupQsCEaQYctCxPmzKYGdE7M7B1p1s4Fe6w9KFZuHRgRvYDto1GEp",
  "key11": "3tE5Y1m7M852PdZLq3rHe9jXCMFM3jn3S2CrgFqVgx15MVLHQSzPUixDExAWL1WqWb1aTdRtJcHVC12KP54ksFrR",
  "key12": "5zeSV1n2XRP84Ldn6u662QojH1mhJ9PAmpJpW4km6tio2MJWv5sXJgcH41Sop5VdiQjfpE35bv3fnNQz62TgyEsS",
  "key13": "5QUCFfDJRuLPJzxQrDkkxURSjs74SRLWghEN8zo2jHLGtjAqcXULAisQmQeBjxarsesw5Hch8iGpBs6K6quz5qSR",
  "key14": "3Gy1fVASz3DNDbk3SgokFxg86NRFqC7bXYz6Eq4F2acvyGCarDiTWxhNJD4R99x4XTurLGAZoqsdu77BLdDfKJ8P",
  "key15": "kQ3VdKrP4uC4XwL6GHUYjAyUL2tFMS1R37B5HwJiN5HiBiqJ8CvQejk6yvtLuf5jBqno143nSqCQhpSfXiV533u",
  "key16": "5QhhNtM1BeueutzKdMcgTeWy69uSa2zXymtT3Qt9rKyYys2cVgohcwxA5NPiL36TrdU8w4qMBFSpEhaUZSbD9ZPc",
  "key17": "MSP9Fq2U1ik9K5Y6zhLXEBqpYu49AJShdEwKyrWThbiyWmnfnvCG6cj4Y1FtRrVExp9uJeMcvJtvfzA6w1rxpd7",
  "key18": "5mRkj4Y2kXq4Vig1FkQsvXDUPknsj88V1LeLTY1vf1vRhGMY6XzkscNwccipsxpTugPZ5sqPuvSWzPqLc4sWbawa",
  "key19": "45PVmQkAPMuwjaVNnaBi1xGB9Gsp59dxRTyNL5DfkYLrfYtvpuonaWkEAVxYcuBJcHWQ64vWp6acNPHGsWVYECaB",
  "key20": "4yc5eHp44YrBPsrPTY1GpHsVCV7X55pUqxSyaB2oJn1Dt4vkVXCozJwGgNpybi72ZxWCPCiEdigPzhXUwkWmMFqE",
  "key21": "4iLuZY7KZ9iAcDRM78zTgFVyto5TfhJDK6e71YpLKK4aZg6n7DUuTHmB3wQ5k17scMH9gtS3Q1oAiEAk7Y6iMWcx",
  "key22": "4fwxChB1dVXQDRNUxfDBrXk2ymwZSp4XncY3Hx5bQUnRyTeMcfFtKL19tFdTp4428nUMq3cMdtTALL44ix7PGqCD",
  "key23": "YNThttebJWQPi5RAJPH8VPBfR8sv1FDHp1yvJW1ScFuu6Rwxft8c9h2npdjbEmcxDjTc4mcMFiP2zwmCBttGKRX",
  "key24": "qktQTbrpcVpDz7jC6USzRpYZ8dcX6xEkPt9CP9uv2U9dFiMLKyAPC8tAPTeYzo9ei9zwkGyu4ayGz1VN3Eb7Tfb",
  "key25": "4RjgjKwH6KcYu4qyRVoniQhi8tHn8kQr9sEKr7M25rnPfZynvHmKwJ2FqeBtUgrmpMMtUVzNZ8v2Xu1yoQEYR8Bt",
  "key26": "2D3bNuVFJhgoXgd7iakPDne1vNDhRSjWrjvGGy8a5kYtkvBcT8LghKnHC2envNivsYtvEMcziCmXRCs9AzeZGkL7",
  "key27": "3YzcrunbQJr9M7H87KhUnyGwsgPS24NsteZvYf3EregakFqYHFjbmPGbugAH8jM3uzdDPC1Xr9Ja2VDuGgnZdFrz",
  "key28": "5BCG9KqYcMqDVxdrAoec4xEVWYqtB75Vv9UY2WLaDfhT1iUTAJ1MGCL1Lbzx4A78Evw9p2vzmeHjVQcRHY2AoGC8",
  "key29": "4jAiUrW5a1KqpHtFF4vbu2oimVevPidxLPfX2VUuRGw235GRBnG9HiDx3strvXnYN88SUbFPrCYYarrwN1mxZE1B",
  "key30": "54kzgZ3Ffhf4KxJU7XQ4hYMgBt1GC79Fsk7meea99FViVYcrhEJLJWiij8pHN9oVSfMNU81j1WMaGTdpEJY14KsQ",
  "key31": "4mMAKXeCvk7hGRRFGFQHYk9NemPaD98woZEQf41F7eUx97M6WV7K5eJ7yhYB8GM6R8BEYp1ocX4rosXcKLjWgnEL",
  "key32": "5kgvmBpxr2tqx1jqp1RyP6WDcGL1ZfAS1AB3NqmvEkb3iwzhSLdUnGaGNNVQ4ZA4P4m9g33c8FpXBJYECV4x115U",
  "key33": "3he3koV9YtDY95RFW4cWR6ZXDUbhV2RmrgUXicj5HkeWUUUgUWYUHzf1jE3PP3WuxNAZV9Ra47E3YQMnQJBhwEAt",
  "key34": "5cKmynqYS897xxKWZbN15tQ2jvfZQDJE6bg4kQUSYActxVS65JYbc7VFi8jMKqog6ZTBvg3sMzwSNJre7LpcsY8L",
  "key35": "21PaTwn9F4Mm2kyfKmB6pcmWPcxwk3kYsJ7o3KvsvTuyf3sZWtoUBrrBMyekas5Hs15JFZY3BmN3WVN26yTQEaYs",
  "key36": "28mV1PZXaa9oUihqVsPTWznmVdiiRMGagrxtgf89GcCoqPCcvbxWP9TWiCscEtFWMzFZUbQ6qWVoDjXG5Jc3J45o",
  "key37": "44JgQtey1TxP2d8fUrraEH1oFoUZwymfhjCHpL7nqPGhrqdY2R5FvmKRDBk2amjg48VZsDhXNw7H5NQkdtqxiD4r",
  "key38": "3z2HgrimBhoTfgZQNsUjLYHJzexQHKhroirPQ3ArmXvh9FRqQ8Lui2Mr3FvV38vGX6hUCVLGhtP94W21pQrhqBx3",
  "key39": "Y9XMz2Z9TeucFMueE15Ujw87ivuKby27dGf82QjyBhDXcX9UKoH27hMZfx1S4kv5fG7W9XvuVgs3GExwCFKUAxM"
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
