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
    "61AAuKpHz1bJjQRXFN2VjSx6xMVuizvquPc7xey5AA1D1XxdiYdYp11CLZSmy8WBViHy4PzopWdcn9wTHgD8GwRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ohUYfu4RxpvTZeCESsA99kKQdKK53uqLsH9a9diSjKzK5rVzGLqLZnRUaPML2Kr8V2hY9BZqLJXqrfhjYMstNGv",
  "key1": "4LixEjko7oPWwcz1fwK9hFTsfYBr3xiS5v9KQJ4Km6wqqw4yLpMMwS2cYQvkDFpKk7MsvFagfzLVeg5fuyVK94XT",
  "key2": "3gyYsFNZxpDAhgEzzTL9yFTVrtUuJr9phsjp5bEhd28eiXmNgzNSMkj41o18aQN4AJdyQ1YVtLp73YG1ZfjCAdkB",
  "key3": "4KpzyhSxBQeKdi3Uy985ZV9EDR17Tw881Sc6r1Dyt5yzVcjBrZd7WYQE6GsDuS5n8cK3YFQRJyNyuPpfuPQ2ooCk",
  "key4": "4j5L66UFEfKf7Jzg2hDUWJngntDRCBM3jK7SdWBDQLKFLpMsBgeircqNjUzJqz4BdPCzbGfuVbTBXaTbeXzYE4sh",
  "key5": "SuWtmHn3gzJ3xU9ahvz59U4KoxgqXeks9BGEfTEbSdnrvRfPQQBAQ1w8RR47VV2GF9uyuHS862mNPjZoUThgMty",
  "key6": "2XhNdjzF9stLdiawTuyjTtGLsbkqLbF6tZ8WEHeQmW2dcZei7HXWxXPTj5HjgpXbYpkzUSXYBsyxzjKsKXiMcWsx",
  "key7": "YfJ1BPhUuBus5n1JUxNHt8Ho3xodYFnszp1Wug1XEMUJmhUFBnvKzhkVaTd7UCQyt5biTEcHFXhauYRP1DbRhQn",
  "key8": "9cDSJy6DynZEBBaYNBFYNKo1vLDdfX2CKm6sYieBL3hnnMV66aY5VVf6zFY55F1tokvmopKkjtz9SVTpJBh7k7s",
  "key9": "3F6nCWBGwQJkzioGYrxeogsgUj5h57raUkNEuaTPVHWBnBT4t5HVEAYCW2oERwhxqG4XTYd4Y5H5eMf7DJi4RKDL",
  "key10": "2R5CeECqtKKGejf7WKBX8gMhnJcHHFcUX1zxpgtxmriyooc2tQxoQjo2a7RVp5465wNLvaVnPYrNHodeNhGX8hjb",
  "key11": "3XD52CNfYT1zzy3QDFuiUxCR43aUuX6fxzcF9Ar3VP6oHVLuSrqpFH9DD2cvaTTcF1vneJ8PpEW1S6xPx9DC5RvW",
  "key12": "5Q8wkCPxBUm8MMHpDCgmy1nkg2zTk14weE3aKAG2UeVwRBcXVVt2drAcBKaoUakWNkANvtDPTYFk34pBZtvXAMwx",
  "key13": "UrXytfd969GtbhCkf2jjYoFyfJ1BcQLUb9Z3pFzzan5ZSrehMw7BfB6CjugTeN4um4YXeYq4c783ZYRbUVWsobs",
  "key14": "9XWmgbmuCgQj3qtjKr45fqpqihPHetnQYG4kgZ6ibU62fSMAdqyzCXTrT33YHmq5eko5tdjGRSjQgryuFUjQb1X",
  "key15": "4ePXw9DinBD3Y6qDbqVMH4CQNfcYmShPKhbPxUUZ1spvKFgtjqc1VcwPKFkCjixWqUcFjdRHXZk3TRUHuKEJdeeW",
  "key16": "3F8jYBh1a88CyvfVhWFS9WKxBGQkVjcScdQjfP64xX4uKTTRHPNNpWfbyAyoAx5t26wxsMEsE9nfLH4V5fs3x9bq",
  "key17": "4pDBcWv4845tpbK1RyTnJnJvidoogSgdhBsQCbrdkp97QgBsBvTGwNeaE98anzZvfunqfh352zz8kDLWro23RFYc",
  "key18": "61BzFShBbRHkpVVz7bMxd5MvZr1asLDtjoVY8jcokRGBj8zvH485wCs7hkYpPd1iuV2qVkCWQw4mLt33uNN1dyfL",
  "key19": "2q55ceDko3wbi2TmGAe6UAbYHUUNqRdNSMGrG9p9pWcVrNCUZrUhW9KFk8NokJ4njNmiySg5ytYDaR91oLogZyhM",
  "key20": "57D2Lj6eQmRymarbwwM6Co186Pr2tNgRbrbs1kVPa44HPfrEfuzmqSP6d1vSzhfvn7N5yRtYUhdtVfciyqwRsRbd",
  "key21": "5W5xHMecSoxN5sXVdrikb7VacFTaCU8ugHm55Xhuf2aSWqtqExVABAzdBdXPYohzTzcG11Ep1hbzmtaFtmvCHbiE",
  "key22": "2qrAj9JDKmj5kPZn3PTf4mSKEtQuAzCnY9JesPHBU3c4kKPKWrBmnRHARrsgUCb5hHbpx1FHy8t5kJJNpy1iZmdU",
  "key23": "64vPm2S357hN5FchmAfTtiutUAYc3zKhevb56LiJnbgaoZVrVQLoTPeTvy2KE6jcfDVoPiA1qYrAqLD5GowTFopd",
  "key24": "5rspfggZKeqFBG2RcdrHrVpGWcNyay33yJmgEyFBu1xqTeomMW9Jvn4vwvDAkU7Wsh2EPbbgmrpq76jLggm8d3YQ",
  "key25": "41TN884PzTgpVangopQotMxXsWQp2fQKuzV4q3pRzmNmcxhraTzCsoxKZcdLPEfpSp3j34TmV4shRYVYxiQfWU22",
  "key26": "HaZt6mPWC4aRd9Djx8cbtQUw9bjXczSn4x2qx83TgWNCiHGvhyXLtmn3SeyTjeTLKTU9ncfzeDqTi5732UZYrdD",
  "key27": "Tbi39LZ1bSKmFHNB8jAgGfGfBEWyMLubk8srCo9K6xmQYNyPZJHU7WmbghrjzL6TzHeiuqscmXhnh1SyuvHXKWJ",
  "key28": "7H3UNn61rc9MDsecXU7Th39h84zuER495bqd6FHeaV9U7EZ91wzLPj46hzjctnhZ4oFgD5HrwG7RBrhgfgU9Uxi",
  "key29": "2Hxs2D3hW59BCiGDGPranJouzvX81m33jbC7VUhkzL5DNzbgunCvMEzxp4CdLYjgdFxSzEW9oPp3vpCXw4eSNAks",
  "key30": "n63qs1zpiH7TGxkjYVzYWSP7ndwDCzAWPppszwaLnqvjN7Mag3EgdQN8mjimwVaV5x9cMcotXsMyYRTFXxCeDEP",
  "key31": "66nQCuUciU2Ljt4STFYg239ZyR28inYrWhwX94c9ZCeXsy1NjsyvksfanXDZpdNAbHZYSPQV2Mvp3F3XZU3cJWix",
  "key32": "57q58c59jmz9N1YzMHbt8KW3BsujC9RjLowi1a8kWKG3AFDZ2Cb4WMfGvFpSs75J2x3cpcaoPhahDeayCvwnjm9n"
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
