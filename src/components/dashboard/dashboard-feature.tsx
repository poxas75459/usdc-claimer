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
    "5Xof1ymbSFb6Rg7gRUecqM2dUi8xzM3HLRG8HxbJYYybSgF9h8YEazQSWHreddbWuUV3dm5qLMtrFbSBJgayzSGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mCnhK9JhaWEUWjsfAFV4JZKmz9h3Si4JqW72FirXiDFLmtVa7WS3dJ3TxMmHxHMRE1LptgtmDSt2FevXqKjuuzg",
  "key1": "2LtEkULZ2k6HTXBthZs6sfr6baysgoPSM4VCiUjgRzYWjUN7brHv7B5eJ9yyZu2CKqpGihsz3GdxbSp766i7Vcxe",
  "key2": "4gtnYb2jMxC4RkrpaCks9QhKd5HzMgqD4GaZwaRREKYoiRyZbfDU5sx1xL8t9GUXLfyZ2ccCsY1SjErc54FM1eFJ",
  "key3": "3pB3etuVQhFVAa8fHcqaR2G2oZyn5bm8h8kqT89BeLBq6YUdzL5CADiUyLfbBb1AtJjJfY5P8AJBLNsZL4QPxU8t",
  "key4": "5PHiSxadYZeyBiskNieWpXkTTptprpKDvoNC3GuhbL57greSvkMzvfBZamDtz7eAWnXaEQnKJjZZjYQZ66yNvevb",
  "key5": "3dcbdv4vDzi5o5581uTJyVEkvZjVyd8vrzKXQHorJEsoU1k84YEtb77LntGbSbE7oqmhnmDkz5BS9PMd9e8wan9F",
  "key6": "wLPzJ4npfqAJ61jk5BTQ6v5TPYtae9oRck5JvyHsSaWBehG352chwqGmCTxKyNrVHegdsEcngEVSBZ5Dwfrmbe4",
  "key7": "3sUsZqqg4RgCT8xLpFMP219HUnj6DStY8PCrtxPiLQq4EfQgtSfsYna9fct8AdnwkMzUs7JZdzaVYjHddkaNF1xL",
  "key8": "248sWJ3b6h5rdiT4vKCkRwXqRsdpG2cyqdYvWe1JUXVCTQQMf2QLCkJd7zXDGHK3goVyQK7bUA9saX1sHqJ2Tuec",
  "key9": "3HbWquK4WoFyJQe3cf1ZawGAbTUuX64LVPtyoRo8Tds6kJR6b1oZPwMwqfttNhnctBrzHdsPf4Pm9xb4fJQ7DCYJ",
  "key10": "36Mz3cUt3X9D3HCqgpskTw2Q3PUtwnhip7YqVsrrZmCgP71jijz8BmS33So6ewyjfEVevwLdM9tt3Hhx1ERCJw1s",
  "key11": "3t6ki2N5Yx75tD8WSS6FDgYmZiX5jXgKCKmffd6uFJrcaZaoufdGkMVffWxoRDUzV3nNLGqQRwKcPwSQ6rGogQ1N",
  "key12": "3ySLkh6xN4dmmEnufyyap1aCt9BeNqNkLDNejgXG89PeSc9akPGMdmdWwVtBDaCvVaFMBviMCJoSYBC5DCDK9wpj",
  "key13": "4DCKszyET3mYX3uBRQSmRBJATvWTndGtMZXPisY4Bu7FVdA7fukDmmf5AMPt8oGEhuChWnPwtFBfz4KEY4ihPZg4",
  "key14": "jhAv4C7F4FjdHLBH5jk65Zjcsxgov7zCJoVF46SRJp87HwB4FoFpHC8AxxjRZrSPnSDUzHJZfioKFnbtGHxUHPq",
  "key15": "h7i3uXE93anjXASdxiZ754RuXuLmQ6SL6oAxj2WffT17fosuTgoSgpneLgjybobh4TVi9WPupz58nrG55wx26s5",
  "key16": "4ybZk2tZNwzsKoruMw8HAHBR4si2mdrQWG3Hw3kwgs1ZUaLHJBnsFyPRmwBCkEPnQUdAxwmiM47FXRqMrjWd7prW",
  "key17": "3csKYQwH5uudxCTv1mzpeX8DE9f3A7pfYn9aDd2LkHKkFj6Q1NxkkzvbwrsH6GLng7R3f3MdLvESm2nX9WLYAY1T",
  "key18": "2LohWUVqLBMtZo2bs8iaCxscMdkGLVfk7aVzNyxtTi2nTN4QERMFt7VWPamnoEEhcFxdqGFacAfu5Bgn6VwBaEp3",
  "key19": "5Q51DBQn36LiZaJ5QNwxgAnRBUugB7KdKX1Hc3VY8CmajxRHdAtpT5V3oPkpEPDzeJ2vaFdW8dAK1eBzuejH18zk",
  "key20": "2BekhkudNrKrVPPNnjmvX42UkqDYhsAGd5w54YTKMN1bSAE3oeYfCb9XcLG34ymgWhHP2vR4WwYqNS8LuKXBmZqL",
  "key21": "5crjNfaohMfxUFUBFmPtuGWCfAfYPj5ALZzUB3JHyE4anFGhbhS3M6WYYUhgrKaGWPeib5dpaidJWFNKq6WkoNxe",
  "key22": "3s7WAnJxXXUaHCrMsBQccAQdjRL8f6QsRRwZCJH12duPgG6Pcr473pgFsmwM7wAEJX5zAXGPqC1JyyshS55qkiZ6",
  "key23": "5gTJZDQV93976ZAtLgupmMgrQTBExpJVeqYXpsCwyULsUWJYUhJmjTdv7YaUyRDYSTYZV4zTgdhCpenwwsj2TXbk",
  "key24": "3jwmfiJ9WA1np9gGHBaz9inR4FxhVhtEWMFzfPBdjsRqw52dHQFxvApgA5VUDJrS7Cryt49YRdkYfs62cscrqxS1",
  "key25": "3Dd9fHA18sFQ6WpVA3xRNYZvgkguuwPaozrPnUiDqgYWUmyVfnbSgAeqL4ph4cgTxEPst8gM2iJkswmrARmkxMcW",
  "key26": "cBBEeWihmRCBw5tWYMkEnHM6R1h8cooScN8D5rF43SJc9r2SRwe2hYSwB746gy8r6gs1UDtdRxu42yqmapG64iG",
  "key27": "3XNZQurHvEdZYrisneawzr8oVKS7ZzdxemZsCfX9oJLjUaYC8kN9kq3WY3jHkR1wfKKEbodiAZaxeddApv1DmaGE",
  "key28": "58Y8KpQeA4AhW3RkEp9dqFY3d74AEtAqW7wvLj6onPiS7z6zfA5N9rBDVXeDvBpdwhe2PeUAo5bbfbnerYCUyzK6",
  "key29": "3NQNNUkdgkNAZHjvwLsiDGh5V6AxjKeyvwvn9Qq9jaLXrnqvCZBe6cJjLsCe4p7829Zd4UAweVJnvnd9iJh3apfS",
  "key30": "5SWPgo8vpzqCt4jSznkE5WMPY77PZQe3hKbnEvN2hevrvssjWmbKHwtxr3aioJEfJxBxP4TvYXQuYxPrb1CRgoe4",
  "key31": "x9JRuaVrQhdKzgzZG3ZRggKpj3oPYfDvYtrTBYdmS4aUW69u99aKKuweBvFtePXkUNh7w5aNEGh9uipHrKFUaGA",
  "key32": "7bWT9XpSH1fzodao6wdTixFyvhjqRN2KcGj5wBipKcAm4mrgyaQu2eoR2yW5rP9gS3MENShNfb3vEnGbRosFPAR",
  "key33": "59p8pf6dtNwUScte8FBAgLeH9CKcobP4LTE4i9XfMWiCtCTo4RFKRByawG8nmMGnyArpVHVoLxLaK1ebFRmudnta",
  "key34": "3185Tm53SetuGFfiLwjWEhgSYLkrpUPL8EidJSNhRvffr3W9Ss7nU1B7e3u3dQP1kRjm8R7f16UuFceJ5QjgjxAv"
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
