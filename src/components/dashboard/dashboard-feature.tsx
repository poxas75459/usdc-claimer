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
    "dmcvsRLem1SjPnet2V9tt9kgsNgJcsm6ydHq56a2sM9uFmNKMJ5KETrgGhwHGshquU5e8MdHjtGT4jfVqYyKH4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z8fZSKo8h7pXJMs7RAnNczGXCqk5MGM3iqgTdoaXeLfQZ3t2ZYVCVg4iFW6V4MvnvKw53UwqX18L4H4LaVzhtzv",
  "key1": "ZZUCc3nmDdQDaNACCMwYag5FGQFCZqFs8uFknQsRm9XEuWH2xurJC6snNCSP2E5iD7zQxDFZQpzt8NviR8ATQxQ",
  "key2": "4wMsxr1UDoBdTsG7vhK1RoNCwc5QQRxfnfYcqE3diQzxooou5tfdq5i9bdWCeYCyvgJ9yypwpF7HoArEC4C2gjcZ",
  "key3": "BTfqKR4355niknUumrbeCFQ6BRPTVt4qxVuDgRmNTUVjhzZdFwAePDRB6jBHZinHGET3xPjQZqMJFvbW5BnaQoa",
  "key4": "5hPc6DeRj6gKoZmTqVRtF6eEkqDqQ6eN1WPPrj2Z5MdDtb5yroW3YVsQkLG8GLXBcCZfbRBEzSAEUPBYCtzrLw7m",
  "key5": "eU8Sgtr7YNfkAX8Ln65vnPrhpzscYzsgrMpUnQT1kgJWqw4jyKNQB16E3RorXbi5fx7JH3kMgPJ4jsF8U8WiXzw",
  "key6": "4HBdouKeQ3kGKiEaWqtBV19XCkGmBDHQkFXqyVjPPXgZnWBFfYRgFGD6MumEzuPj8LwqZCL1d8ywbTD7XwY82J43",
  "key7": "2s2bj6PVbo8QECrUEcdLcdaj1V9zxcWpGtpqUbK3tBsms4rQ7VAZrqFGPRDKbbev6fe4BvWAWAp9SsXFfxcv2P7M",
  "key8": "3moEi5v1dR99mkv52CQrzLKGBmxhDCpeT1CEj427HVd8VWRbMwHfupXoJecyjKxnZs82noPZqqEMiyA9cThnukKp",
  "key9": "4JpKvGEqxfXx5jqqeJZLmBqGuZLPMKpyxuPPzfDeK3V2yppqTDuqPpXr1LB6LaAyAxfiKe4hv9fmM2ZcHYKugkqS",
  "key10": "39zZx4X4VgbRerwyCYK9BZ1K5QZkL96AEY83MkhoxqGpSmJvUenueEBPq1VWv9CovaQVer8A7fsAe5i1oqXtiW2z",
  "key11": "2KbhDB2Z9y3g4Q42k6csziWVCXimpk1sLoMfH8FwgzktKrz3o8odbxZPotQnWx371FBymAQToBFGCZr7x3aXqTgD",
  "key12": "2Aw7rEBdrYHyVwtRCspLwtw7XDN4FpVxouVaAC7ryr5QKsZqzfJ5FSBFXxehtscpEayLkK3o1F9iMD7RLZnbuQkr",
  "key13": "289YeSbBRqPppQ4Z1quoHCTTPENkpx5jSmdkUqP56qaQ59BhrnrM6QKzHxU4zGWsix8rif71cDnL929DdWEXjBwS",
  "key14": "3vDSMg1JWRHiEBoDdoZetqpmxjVFyVuGdZC7buC2GZHvjLE3j2onJTg3zTfFQXpCUEVzdfjRgr7h8gGWYvh6nFT1",
  "key15": "FJK2UQDfdZTxFzaGAY7MXswjEHtDdcUtBuDHFukMKRT5p2xiJAmzuKRAneosyqh8Fti5sx9zYDQRC3EhFNXGpMk",
  "key16": "22XDgdLgPYqrN7ydeaPQjiSN4b9e6hdyciiHETDwpPHT9LUvxRKQGEoKM3zVQe1WGowUCXz8mwXgGfxkMSdk4kD8",
  "key17": "4VV6je4oBfsg6GjGKBRqHyczCtwYG5Wr3sqY36ig1J6dgu8fyXaD86TdkXR58QAH8FCoF73Gkp6mNBS2FaLdeKV",
  "key18": "599ZRNpFfs1RzivP1gmidWv8mfo96wrwNmSNYXcqdETEnk6WPhL7x6KMjaZR1kGHnSkam9RqL587wiCSLkUoptcN",
  "key19": "2GFXuRN4ZRxsZ6f5BDebpXrfdqBsTjD3zBnHU3T9BU9ciUag321kRT6PMiMf2MtAu7pfgC7CQFEAnwmrh25ZBhwb",
  "key20": "51JCCmTYbio3JdR2DnWfpFiZtn8nvVZoT5UrfiKUqrmTpCpgxc1nYTSXcmtZc2fkaWjTkGdD9UqUCLSh5yGtc37Z",
  "key21": "4RUeodiYqsp8HzuEkuyTbTqAsTmDWpcxoN4qUv5aRTd3onHvGXBTw9dVPerZLJ6eTQFjTmWZSSpfSHc9beckVQZG",
  "key22": "2HpcYLnK7AcxfAs2GYxY4TFsNrJFAwBE2Vie2FRF9gjSHxy2ZTBdvtkpHJiTZZcM2tWJZYwHxPrev6t2UXtV4gUJ",
  "key23": "5ikzWbCq7AKEXsWUV9xHXzSFnNupHrjVvdPp4F1DWUE5BuEH8HeyWrB4ciqksA6S4SDmBztpx7YDJgqFhjjhFe1C",
  "key24": "5dQcPE3SKVPyz4amJ49QcPnLYJnGNfgQt7s5w5eKAa9Pcx3NbVUA9ZkUtrU5sTjRFKqpVrBJpg2ARQo64nZf1n4j",
  "key25": "4u3VgT8Pde8YS8mmLtJE9UvwKMCBpzPGHR9Z9FPdaD2n2d7PPg7wxS5rv5jgYJycS7uHQHdiUHvewepjGt2khufN",
  "key26": "4UE7LYTicfzHruFVRz7t2wBHNwrc8kd1x1ggsiFsG2k3DPbtPvYMUBreP4rNj6txBYZNw2U5QS2UWhFx4fUWMGSb",
  "key27": "4mB9ApBfR9NnLsR5K676CAQA7NcWQVgCejKCowEr6mcw3oYyDduK5BqziWhA6bgz54RyTwgkyXVnU9CwfU7SLDZ3",
  "key28": "5XZXw2hVLUbsABZxmGhW8j98SiLrA1vcRGWCW44H1QSRqtN1jsjLAKpkSbKXVWr2uhWLRUx2Tryh9pFJCzCtEdH7",
  "key29": "3dWaZ85zvu3ZCu8GMezoWTQNZ2ETXJPpuxSZBNgsza6ySSAjTCi7MEBtnA6USrBvUrS3seLVWXyhFnYMFRvHJ5A2",
  "key30": "5KdDnQ2EhQVwUk2PTZj32LtjdmpkpW22wyVVPeadT4UbktkL3iFWq7KB3irMAKkNaC2f3dYgtugfdz7ivTvPaWnG",
  "key31": "2i6Qg1qmfD3x6qMq8xaHs3KSLFx5GAaZrmEEFYoKKwVbPiCoXZLmw29DBuTHDsonEYnvHXPgNVvNzzhU2NdoQGFV",
  "key32": "3U6jm9PXUZRwQ5tijWgZ5QbeL8cbHC1SF9d8Pahh5EJqp9t4jR3yWQ239f5VbkK73WLfhcLnRg7rTLyfjDgZUyhr",
  "key33": "5RCs673k2brfyoLDWQL85t5QFNnpNzpY3XyuvhCuj9UxuZsHcEarHhhrtYSubwwFzsMUjNZHdwTiohaxMnCZSqAM"
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
