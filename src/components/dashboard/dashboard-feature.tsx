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
    "2DQF4BG8ghowHzWm9gihrDMZq1nf8LUk6qZEuRRLzVBCeLeZEX7gdaPpB2ALH5TdcGaNHyTXNFiY9SiWEXG2MNv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3acZrR8Lv2nBfqH1rWKH5S7s8uBk31hCWgyemzggbQki4S3TYwD4KyqUunNEyefMsK3szbZ5pk2YjerAPivoGWFW",
  "key1": "9YvWmtECMgg3bLP5JktFZLgNHnkTr7viUTv1W6JoeJoXW2EiTACgrEVuwivqPYabtWkQ3XRZSPE4xdSJdmVYjPY",
  "key2": "2dbeN7nEtdUyWDQb9egLDZFcbicygJKRwBk7C7Hivyd7NDmpQgbj7AS2GYCR8iiFUtp4ybDxbtiukJ9xxnan4FmW",
  "key3": "8aQ6P9woricFnGA786qn4RrSHNaya56hDS2wCyRQqyQb6n7T83u7YZmsdEMpm3x7bdarTGR7fjLCYfwuad7yYGN",
  "key4": "5bVdgdrRN9uHdRWV3higARJYFqTZ8oyN7WMJTWr3h5PNZyj1MPCUPuc1LskyY6vsWZUBABN7XWzmzpnMGKVX2yNQ",
  "key5": "yv4APrEQ37ekWJZojuJy3oeTanfPYRqJGfqkV1ZEmGpeNTRCVQ9uYppJr1mSfZJzuf8ut8BgCJNnikDT8YWYaR7",
  "key6": "53ZWw6oxvmNk8NBjMnQFJsi7aX3a19X4iQvwJWxb24nrHVVgY8XYUwf7MPEojyQscxSvUmegZDAzU7bQxV4q1Dge",
  "key7": "W85KFsCdPxc7ae67fC97CwjNRa4jMCDDEacWYLAX2CGGE8LXGaTzD9A7bUCJ1uGVRRdqpegnvShy1i8CqCg3mRo",
  "key8": "cNWnsYgnDeSp1F93DH7GMGJsdjbKh8ZNyQFraFbQUUKfpLdBeiXK4V31h8G3GwGHY75diE6dhMH4zjGKoFh3VKS",
  "key9": "w8rB5TiV4SEjbJJhCiNbUo4TWDMkM5a1HcYDvrYppxwdJKyWfGRgkB45LHHBh43GkciVSVDpjiKQhJXXDQWBhPe",
  "key10": "4aBZjaxFpdC5NJh2NjTze9TUxiAYyBZswhtYE6edSdxb63duR3uFkD6sHWKHZjqntHMdxkCBwYkJm7gFKsHPK9HH",
  "key11": "3tX1ZaVnBSQsrFiRa8h4QvJUbNkKVEbtdC1C5jwZJwkKBGE1VycxF21V6WhMAMkTqpPSE17LML19C4k7ZPBrPuLn",
  "key12": "25PvhMoKjfRcdc1vDceZy2FqTrcGYW5hy7QyiwdSh2JSA1rkktKmFZLqW4eEBDsf7ffnVwjdE3TrsKtYvRiE75Ry",
  "key13": "37BHufRkWjJsJc9TcWMyY9n1ma3Q8NprL9Ejobcmfuw48gzqTB8pzVPpVzyCs8w6Kx9Ti88Nhm6tHb333W6bch3f",
  "key14": "4qpA63gJq6EhULoWrFwxNTs51hrHfx2JdYMD7fjZMpg3gBrXdxeqjByEGxdDVxc1sTNASC4hYjhAPxHjs59kcXiZ",
  "key15": "2Fo4ZK7kfbgaHq4yDf3peW3wAr7G5jP53LjwUhyS1CfyqbrcHvbNR5eGoTLYEWvBueD61tYkY8qenL4cfUaJfRUb",
  "key16": "123XC2VTZoNmTopmyrqSWSZdbKcoEDY4g3njafGryhX73fNVzXaw6xpRhbELGyzzTXHhpc1NmM6FDwmsvZc9kmML",
  "key17": "5JFdfJfcvYS1oHExPFM9kceKFaLVZioz7Sb4nreWkJ2xaGzx2xZA1AR4n1MoVi5YwSgJpB4TQa4e6mTakBKcAeAp",
  "key18": "2g8azcV3xJW5ugcmovcFvWgtDd9PLLA1t2qsf8pYULJSFoh3uS1torayM6Ys8h3ZXPpGU2rVEUZAVLRxiMnSXHUV",
  "key19": "4WYZTn8wqPWCooPBbvK172uYMCrRTDbgKNrVkzrfA4QhauNxgVQwvgw2eMDYAjL9AV8vsgmzJ5nUZeZn2rQX4bEN",
  "key20": "sLBSzkskqYZxtmkKRKmqgbmdLKnnxxpC9zMtLn5N5G9hs5iib1RBUXo255y51Dm9YTy26n6sG87Pcuj5rkwf57z",
  "key21": "3RjGxngCPoYX1yqVfzTypGJANJs23vz33Gc69r9murW16a1QVVeSGSsyrago4sA4PPvZb7ZEqYE4hGD4UqUGcfAT",
  "key22": "3kmAn89QPpioNznQk7bJLQCyeunRLbNgKWsQja7FcVV56Wz2zzTSZXP5uZsFGfFkn4b6Gjm77L8YPFHhH8hJbyNU",
  "key23": "4zAZATkwmE9chtYfwYu9xExgNBrswVAzmphZ4g9pZu8SesyUXRjPVTMNP48GzTkifxDpWFUYEw2x3UhHZRNvCkPV",
  "key24": "5igJtZpQSwbq2CXXR5W9BATXMECoEowfbLY3gnx74CbwWNvRgG9xQTqHGpDY8rRvCrxr84H3CCL2RurPv8uQUTF2",
  "key25": "4hRxaS3xVQE5MTs9NrtrWV9Xynhix1YLQhPUt9mAWyV8snALEGDc95q5vik8LVzrL6QqqNVw2qX4uPT3UaKHiQp4",
  "key26": "57PANHu7vPT9ateHv4CZQ4BTQ2gpGsdcLUucPgtMtETcrBG5vqpworTZDLsTTFBfDxGtnDQH4cGGUqvVNUJbqAT2",
  "key27": "3WTtErxZKHDZeGKDkdjrmahtrfBxCNKgtKddMfu1mxetwvNiXH9JrjETdNDSQ7qNYErb2phwroQp1Z4JqfzRbrUZ",
  "key28": "GwTWpHadKpzPtnzPvJNkrbUj7bEFZ2U11opyzDuuMLB9evtiQC6tijxnTEtuYS1uyExPkiZqihE2LdHGL9tPxvB",
  "key29": "5ghbYA95vjxQ5cciXg6oU95qQ11zKrpqQ9TRB8UHtwvZYCZEZjsBBYKrQnKG6MGdZJiZbtVPhhwPz14mdJP8mUgv",
  "key30": "5jz4vLVyoc2Jwp4bdEzfwTorayVYYskdrPgQEwupSfGZNM51LXsZs3YqNmp1arzVYffcLATc3xjxh71tRKAiHU8k"
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
