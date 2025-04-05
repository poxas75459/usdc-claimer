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
    "261QAPu4rFRUVX5idy3tazXVS4Qf5ZR6gWs38869kEtYDpC1WMNFcnBnLbq5phkVmigULKFbxUMTNNQip6hgEkyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "229sJ52rEB49mgXCAgyt1xqURUn6pXgPjZfpNkoRZEiF3UYpPBnb9WnLkY3Nz2P8jvqo2ZNSv6Z5fqmxBxdAEC83",
  "key1": "GCScE7v4rdgzCuwN7zZGF585qAEBQdk6FqvgFgABZnP8qZaYRTdFHYPJ9Um62uttmmLqemTTRvUcrJVQqJTFMo4",
  "key2": "3WnDE9hKWUDLQzPkU1fR3D6oH3sksMWrZ3T3KL4ZxFviar1deMrmgoawHLPn1ctF4PQ2g1LvTHaZqTLDZJBiEQey",
  "key3": "KyczhTicMY7JKKAjL2hi2STYYBkVSaAuayHPRUD7DbFaDrgVHCia3kiTE6aVE1GerBbmvQDJRYDFiqS2M2Na6RZ",
  "key4": "3grrubTZoHrfKL2abYqh5ws5pEfmVZHkRLmQ1fQzsPcP3T1WXnzPhiu1QMaeJ5WrubrfE7EJy2RxMppWv1g2SVA2",
  "key5": "38L3wP4LHVXFmRnTnbPUF2Dmvp8URwyVuo1vSMrsKTxTC9rbg4EMobFsS3AVFf1xT98Yjf9x21AB7MMBb3m3muvB",
  "key6": "4iYQ7EsxWCfwQhVTnGN14e6V5bdc4pDr8VRHTVGCEDtJAa6XNi3fsTv1Q8xm956o78YzWZ6GR8DHAMNRPArKhb7",
  "key7": "4ojbw3zsaXGppBQraTbgYfCykndDL7pxXnf7QMRbotvWrb9DCLT5zNyLHLjvMhnnWJADF11bqpdCubPGzibTYu5o",
  "key8": "4P3yLNQMXGrBu45NgWUpj3A6akcbzXMpJQuQT8bxshgkvNHshU9eNoHtfCQhaVXnB2KdhEo9wd4E2eDnsTBv2W3k",
  "key9": "4gNY5w1npZyymUZc4wHWrgiXwRcDAPJgoH1o6QTH9SsL3u8U8rx9cxCNLtZxL68C6wp4hsfEKSVEaF1rVvwJVs3d",
  "key10": "2PoCxk54i3Qvk36C5uNRH4jJZLfhJTgZTy73He9838RjYakdKJChBSMeSCH6ZbwdnLgbGBFauVtTFX3Mpb76HMJj",
  "key11": "4tiHiapGvH79fbdLpoAbmArTsprhic4GFqM7nGvMh9hDAHcTVB4mN8WrfnVVEJAkswgvvcBCAzVEz5jYwYr2UGCw",
  "key12": "5qW69o2Zbf91Ly7E6GVSnjvr1xvq4M6NJnbwztTLSFQz3awa7NmpyRC8YpRmbzQfZbwJiYKxBpDHJGQiymDYcENQ",
  "key13": "4yKSaxWGeNcoogEMC11vmm8MzgAYxjThLfdVFWPNQnXXgKYGPGP8HiGMWSPHBkH6os6p1SjujmGEeCyTLMG5wojy",
  "key14": "4CasowdjUNc6pdxRm2fwvpw3zyTAf5YdQ2EYJ3tRaqom5o1fu2NdKQR4nfvjyGk6ieDg7zy3mwgtcmEDRGcTNtcq",
  "key15": "487fD6F9D7VaEuhPRfyBMRkfDEFaifmH1LzXLxgVobLYJALhEhkqHxWEzUzC8sPFE5HhEphu56GJxmxRpLeiDWCT",
  "key16": "4WA9EKufFMXj5Fxz2U5RmCQ8N2ki1MQCLzY3p3iVSEXBhZd369dTtrPcF5vhMwg6DoHmuVJU71ed2WeYV84wnR5M",
  "key17": "2vjCjhwBcaDVw3tnWkYtsjKGay5kSwTuJqfG585HYu7VqzQDMLvKx7bts7xBZc5u7aR4hBmWWpgZ4p1M7pgvmRL7",
  "key18": "3RXQRDBpRTRcauFCVm5gw5jp4DSPp4svDjKkn2kxF8VzbJX95ExD1ckJRegZeFbHq7WtWdek7o9D7DjzwTp5qh9q",
  "key19": "4hpnd53JB5HA8SrwYTCmxVaA8BjAtjN73sg2hJEUX6pdTEBTohYvnCpkTaZJxG9MPGu1xYAYKLU8HxBXCmAptTXY",
  "key20": "PfHqzrh2outgTUqUV2NpbB4cFiKsofvRFnqYusJcMYRC4ZZpUiLrpGS5ZVQkRWUyhKFcvrB9WGAx79mvGhkBHMK",
  "key21": "2yCRNxgCSE9dw5MBgjRop6uXwAoT3SWJ331X4fqh6yET3jrPLVhuf668hNfcLgk3fh3bDvBwtyzuHLKrQtd7vSa9",
  "key22": "3Kq5DQwwxXsc6BzuqQEDujo7vB2Bfc3SFPTScruXmcRgDSAWhN893892edpesx5Qs1qrxWLkvLeTqf5Cz4kGDsL6",
  "key23": "5EJZfQNG77ZCbXu2xZaHUig2BobGNxkrCvSw82Sw3ygmdA1kL6BBhisNXD7S3Hoq7mruyezusF97YBkGUBkTTszP",
  "key24": "uD2vXYy32donzVocqtV2NJLAFeZapuNyiadJk5xAF7sYums2TV6TNvzDHwUjgW5XV4oZRRWXnfAsgVX5woFSR4Z",
  "key25": "67Pt4FkrSyoe38Va3y57fLTJi7tDUAsvs2avsd5zm6vEF6j887Sjhi7fbTqv4RPQx2LuSABV8ryEvAYk69cK68G6",
  "key26": "66z6NJeywPoiDuBSTxnbsuoW6UJPfBV1G1M3UMCQJmbmbcErp47NmtnNXx6zP399eQoAHstKLszVbhudV6vJ7M6u"
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
