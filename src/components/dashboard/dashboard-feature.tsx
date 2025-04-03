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
    "2GQyUDHCC3qwBmyenRMkRmR5t9JVKjLR8Ko2ZQSKmtsp8Zg5Ss4BnZW6M33VsUgdWns6K2J3Kpp9oRaLnvifSq79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s2HawTmwh1taVxWaPfwifm3mXVBncnRZHmUVwh2QwJQqDDv7jMkZ1ZeWeBo3vZaJGXa7NqtkBxgNa74cNwyLAYw",
  "key1": "53HjouGo6X4zP1Rr8rSHamA9iK1d13J5dehQfU5AsY9fsRCMkeCiq3xo7C8E1HzYkx1tLpHHMwKkc9NRGqxXJz27",
  "key2": "4yvdVkt11mi4ZNZYi32uhd9cKvr79X57a9euWbDpcnMCBeMgy9Hp4vurSf38WpSpJdy2yBnQSW1BDph8xdzUrvVY",
  "key3": "3RmGdVcbN4PfsQmLbq3TN4BBfTUhP5fNRr3kHSdaJvqQ2c9MonBx86sn3FkQtYo6z5JYDxv53TcoBLqojFicj7gi",
  "key4": "3Q6jdznbwtodFyoNLJL1MDNiHiob4QQqLWDB5AcqjjwqCkc9Cg7fUKhyHWuc3HJS9qwjVDNomUUqupfDDFM5Fi6Q",
  "key5": "4HwE3EdzhJxubR3Z4rwD7jpoi4JccVGFjUTDx5K1QTXG84pvYZQzCeG4EBNNbZFcEoATvs7nATfNL6KBeH1GEuH3",
  "key6": "sW85EoPDnPjAiiXyiSrfwew4tD8cJRnUykVbuVfbRd3yx5vRue9wXVehjQnkuW9tVvyBq67XvfuiV12awfiG5Jv",
  "key7": "4zuU48fg1LavU2rXDjxNFbApiaidgEDDTMfMRbq3rxqMxXcCXLr9azYmwk8LkrLRtB29yMUY7vstyipTvMCrykDz",
  "key8": "3nSPtQtHS5yns9Kr59tX5Sut6k12dBYN36JC1TzMEkANZhXXwBRYXYXnYQ3zpchMsT4pho9Jbq4e4XbA9HwqJWVb",
  "key9": "595KPNfj492yrJFBPouAxUJox8Ve5NXrL3mgmw3vgxqvTAjzt8qqLbKgTcMs584WXEFZ7xs5xp7zLC3zHUti1Wfr",
  "key10": "593sxpVCon2gGyR4uRK5SSqK29kpCs362amJoxsZzoAsW5ccBhAFiToWXpESx573Ybg4Ae2zZTYgD8ZVdZKMwYsE",
  "key11": "3HJeUZk8DHvTMsSr9fFM6STmUWojWqQVxexhsUjtkvLX3iJp6nJazh3sfotgxqufaLDdeey5tycYExUNdK2qMGCy",
  "key12": "49F1HSidRjUVM9Yer8b5G7TZFMeQzMM2JcJKJqhWF8epCnSwhwLP1d6PHTd4FdPYkUJu2jzSqfFzMx4KrwzZii9S",
  "key13": "4E5V6g89y1eknPZgabXvoqLPJEnwGto1pMExt63TxWuUsDUdPqe1GFptnEVU4Xcfw9hbgcv4daykxuy621fFw8wA",
  "key14": "2Q44LyAJu8Yvb2rp71fYKRqRPWtGDfVGpUG4D44ghTJ2hhj1vpPFrXtFMBy532Bi1gJYxRGXhX6WKDpr2iUBitif",
  "key15": "5n7LVf3u5fyop8LCuVAu6NpyLYa4ib8onoFKv14WxQnLXSi6rijC9GJKMkSp65EuXHR27E4mt3XUZpgEw7fxxEDn",
  "key16": "66u32eYvB3eZV6KjFDJK9RWMd96R2bd2Lkuw6t7q6p3VwS3bqnWiEv3xPNvZ5YQzBHy8BhekXM6G5eKaeJFrL481",
  "key17": "31nKrbW88ZYmrHgoPm7D45L8X6GdHBbLakqqHMouTzpvNYLppvWAVV7DryQdSPnjbyD59JNBqEepWoeyL6izvgFm",
  "key18": "4yf6yhwrY78MTj2sV6qATjf5h6PqevXfw6JcR6bYSjfRUDVBnxFao9z2UcBX81fT1GJfbHjpREjCV7rQjmmSVGUd",
  "key19": "5N8LrjFawE2xiMBUz2ohigqYQU2BZZ6JAWQsQnmw7xdZn15M9amQSD7W9jNYUZg62L7yMseyJfkqxbXbTPMPRyaX",
  "key20": "4vKCQrrNV2dFN4eDMfe4EAz78NNnHFpK7WBHVK7SnvXf6zYtgJvktPY4nNez6ULTbC9W69sYZJu46zrmruavcNcv",
  "key21": "23YoHKpinkiBBS56S36HXYaYaZF78GnCdjiqZpvEuUBmBCNTMe2GwYCca3mTdCQ45XYsMvpd2vXYKFPPDBh5quha",
  "key22": "3B6jKGcUVHs1rxUxHRFm9Xk4NWZQjeQ5CGNR6nMDfF6CRvzystFVwdFaToJXYp6XXipNLdRBidkkQ9eLiWztbyoh",
  "key23": "2JD5wPP81sFQq857T5gdHMkfNSB2iNNRHhGfoFHZrdAzFg4qK7KBECcMTK9TxWXnrVdHkALve7jMjMKcghdvuFkZ",
  "key24": "4A75V1nsEHoaCxCcbyywHVasxp9op6dhQ3NPiNo3xBiGKAPZLuqS8pZf7eRoWsvRNBmYoVRAM5RxuusNEodJ7zmi",
  "key25": "57kLXQYb6nJUTEF8p67qzzbuEZgZY7CYVqQSG66kLzyAs4iShxhfc1PHGrZUBRpsDsMpGnFZ5FCiUv6f5Qf8ZrRE",
  "key26": "4Cmb9fruTNnR4Hsndcp6ANkxKuFzkwnnGDXqZBRm2EoWSFifHkUf3iRshCBf8nKMTgGXwEgzPSRC7iRLkWzuiRTr",
  "key27": "3sBN8Cqg6GhSmvmr96Rw1pH61oQ5rvTgxzxUSfJEvY7xzV6C8YpJka7hJXAytDkwFYZcanq7dTLToiBrdLDHjgfa",
  "key28": "2nE7HvsLTDnPphbznNG8u8FgKGPvYQXDRjmFHmDxiYiTLYNoN3t4Dr5b4ANkhq25vgiTMnLxE8AyGat1MNmfWgVU",
  "key29": "2mn7gQDyXKVmzNA7JZzHnEGegjdS1DQSBuWrwWFcds9QqWqf5Ty6soXMgphCyVt9Nw3BNJR9Wc2HUBnkk4dT7cQt"
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
