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
    "DktbAad9JP7GEjgeHXwF2oT9HKsGrZfT9TvQmnnx7y8NkzQDFhDXpbmEz4b9p5zuBGquCqMu1Ehk93NFfh7SQgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xCE8UfxKhPgqZBAxwAau2817BkctAEr6pwJgpBEUAFm7VsDTnJQsxcPPEvLiidCuCPcyxvQnJNVzS68V8m8Bk3E",
  "key1": "4TUVZZ1ErXj4giHcpcR7ZjBmrAWJWWQisL1nC2Xp56Ng2mpuv5DUAk3JgB3atVxBK78E3U9Q1ZtU8xhYSMmMykvk",
  "key2": "5M6htr9tv36WVDQ13xqrqF1NskBK4ABmMWiLMyfWfgeWbjK1wwvCb3o9JPD9SxykAZ7c7Eeary3ZST4DnHAKSMbr",
  "key3": "eXXjvA9jAqqCWUWGLGNz4VwcCfNdFV8agRmRV5neaaEj8bn55rBeieckpzrgiPV9jFXXQSvy5K4A1vLyYemVsdc",
  "key4": "q47sJnoH9FMVhfZ9V1J9Z1kvWSSJLg91Z1mr1WhtdjAAmH4pstx7t6PxVnjfY5JJicHtSDTP2kLp3AtasxmJKAd",
  "key5": "3SvALfkeAbi3jVtEfaspXbKGzntDpr9qydLuCydCvkUht4mqqBp1idip4GtwKDCAn6M58pRccmkdnZ8ZZ8iVY2WW",
  "key6": "4rZTnTdW7MzHSxwzsDfx5mmH1vWpEn3CmNTJRDJ5FTUvB69Q5HBKTrnr2hhknEw93FwkmFWtwa3BvSvXok7G1YuD",
  "key7": "3LMnGW2ThRUXCS6hQacYoCEdhQNNV2NYTsAof9H8obPbvoCJtmvTk7tFn9dBi1YtZV4PjJfyyAcsNbv9TzqSiMap",
  "key8": "5iFF6oxAVLo1saEYaEmuf3iV6zP21BbKqyiGDDVAagTnad98QQqqF8HYK4Dkn9MhYFoP2Ppemo8wQK4P9tGYNY4k",
  "key9": "5xcncdpqA35TdtSzcSDyeDEGdCzMEb9jArrxDwtzRyc49JcRhvvseq2UFSSvNuAYMopcmsVG6zZ1JQLYv98BgWxE",
  "key10": "3a3AyAqhYkDFEcoUFTGQSa8iPnPoQ4xzg7sfhAmax9wArkS7C4xeiwAdkVDqPHSe7oTDoRgGR3FE8U5pUU4FsMKP",
  "key11": "4iv2eNhCUo1LbCnHfcE4rbGP8zuJwCURgTfv8LQEJLUUmitH5YMkcY3XacYPcShg6sXFf76caZa2jy7dyyUU6SFu",
  "key12": "Jt4TgJw88bcRgKwUmAiBzHE8C7RqDqriLau3TEc3dmdeAitzj9T6SsGuiG8MCH6Hm81HyS5a6gzpiyceiv6g6fx",
  "key13": "4BvoEXxSwPoF8gUWpuXbTWUHkv6f2gucMFUPLmomgZVnknMD2tJpeY1C7ELSqaaPx3mgRxmDG3H9THdnh8zJ47Ja",
  "key14": "3QL2i6ynyPz2nrcvjpzikx2vHdx66HPT2of4X5pkZvt3QbYf9PmYh8PmbHJX7JKWcQ6H7qaN56TgZ7EsADC8URY3",
  "key15": "mWEThxq6srpvrpXC7ZMVPBLs1wTTF2VBFiuBAwLXsXDGWwW23n6EExnAc7uhGAuupRf4QPxnErRYZBoya2XyTyP",
  "key16": "4CpQkcCNtzQtogYynwFZZHnq2n2K64JSBuG8drk5vtRaEikpu3TkTfEjAeC4dqhizCEuvJZnMUdUodTG1yGUNpVL",
  "key17": "3yvvsfz1P3YmdV3TRKdSpgHp7aoYovxCymKhXSVAbx67PJssLzACU5VtqEQrmgZupTUgLjZtL8Q45FdXwk1rzimt",
  "key18": "5eGeFatFecXBJb5kE7G5XMUuSA1ySVDo1Be1sMWPUdt2BRWVepy2qVb43cG2Ypi1928K2DNRfvdd17AbEN5pTVMY",
  "key19": "4Z9CuMmgG5DLnJVRocQjFMUNVBsgLFymhW1wGVEtauZrHe7JEv5yFRFhNpncLUBEaBPWoPMMPgZbqVhrHe7D9Pge",
  "key20": "3P5zmRPEG6JSAAJPBAcvV4N68SVktrEZAi7FkQeE76jVEX8UytEjdH3un2XD7Jx9ygm46wttGLj2X9D3WUDgiqvf",
  "key21": "5J9CGDvX7HYdKXv3gXaE741WZqhDSdH8kT6ZyuMDjK8pYw6ugaxffShGHjmTUYi87MUV43LB4KSubZGBfavY1vau",
  "key22": "3JieqytwbUzBsd1soqeKEo7Nb3q37w4PumRVDMgFtWGxmqEcNsPF6Wdo1W1kqXZB6Koygwy83z9g3T2i7UZVH9xK",
  "key23": "2b6xthEunAGoHUvgHCp8ZVNHHSfxH1Z6AFa2gwFiKJ3ZqRJKmPB66hfMdMHsknAGD6gd3n2qHEwmyxxGFvVSNni7",
  "key24": "39SZ84tjRriWBayww5SJ3Mv4VrvJvJJQsJWbjmAhZW5jdW74xPAhKNgCRpKJRPKweCHtvihWoGmKApLzoRwzkNFc",
  "key25": "4tZRdWQyJSbP45u6UN6DQt1ZwQzNsRn3XdnjEgLEkMFSsLeNwSqpf7pXvjeA3wDXUmZm1shw9HQsKXPhwmL292et",
  "key26": "EwtZLmbQLrFXzTS5vYMXRdvKkXFAJHFubHALX1SwQWsWwXuZCYfnFf7bqUZe1qEkXJxFCpmmRAHzGdHCfykvAft",
  "key27": "3Wk7ZjU4KS2yuHKCEFAoAKJ3JYDFkLnTHb7SPCaCMimtB9M6hyNPnjiZbJ4iDXS54koE1K7zasmg8WUTJjm1HC7",
  "key28": "3cKHAhGcDAHuFgkZqxJYvjWhPWceiAPuQWc76rpBPNsqYYfmp7DKVP48TD2ddBHpUziA6TjFNzBZTDQzWBB8qZyS",
  "key29": "4p3g9siDwNsCTFD64ByyzcMpQ6yYqyGz5sWMWRwUSkmYavBPtpBhk7rxcBcmQqaqETEHeuTZzH9cayV6ep7Hsed2",
  "key30": "eGa4ddR5ViYetWBM9ozBRv2SBmvSRa4XodG7wvGrS1fGaFVwvtYXtkdGJCkpB6KMqGpHBQkG3L5NKDmhyMwFd8g",
  "key31": "gM38Y3qTpyvmaMKyeK4vJv5wwGLKDqLMDcpN8wUBu8VkPWq9qBHudoZY7SsgA225aG3duNNdCWBC8jtqWjzqsgs",
  "key32": "4dJwTwe8Wrkz8NZwfQh45CaJpwTwvvKqjUaAUdSQMo1CnKAYK4VfQ8fwQEdkMPHaDcuA41WS9KMwen46KDCDqkrQ",
  "key33": "3Hg3dRzWeBRSoEB9HgWwqJnjkYwfjU7BxrTCu6WV3Ngd737rxZGH3qwiLvMKbZN6ULrdHYstzqKBhE8usT3NYsdV",
  "key34": "2LEpcmHLF4QwmRRZctH7NTvsA67RMgsW1bdYX2cKFcZSyULGGZ5y1Qpfh8CSo3xQPT92pQyk5FGktGTnxu2GSXU7",
  "key35": "7pZoGBQYsY4pnRAmM6RHqgg9Wn8A6fDvAKNjKoYDCNSe8jZSQRoF2dmwRdT3dVputJeP9M1xSauqBdTJkyZkxvt",
  "key36": "2YR9tPhL6Fi344ovKZS8YhN4h2doANNuKcToAujNSWKvviNG965doMqNhnWdpxcGArS9zpkvV8SHPuskUxKZYGnb",
  "key37": "4CHQdzBxbMCh1LZGLYBzG6ea7zmbStFTKuA78V9TwPBpAwJgdBYvvy5qhBsAwRRykLPbiwSv2aAbSyNjPdE2KhGB",
  "key38": "5ovXx8GdhXMGb5duihrXihTPwk8LHqpuHqVBhvieUAqjKsGCurq3z5KpGmG6f34EH5buG7ZY4X6U3pxCpExn2KtQ"
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
