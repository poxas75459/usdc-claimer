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
    "4WRFVdbBimweWr6UwhcDHp2p9oiJMnATzeFQeEZfSZXcAXRMZdqm6KYBVNotHAWNLMvNuKbMUuriVchiPw3Xxd4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o67HLQf15QYgr29hej4LM1E1EXmZDTY6abePtvsXeLaDdCeUyUSApGLESaTuFANmFcw27NE3anwkz5NVkBR2BXm",
  "key1": "62b9x1XTdNcF57XnRfsrUd57R1Yk5iv47PPHUWc6ceo8swHJDymyXpNvzuPuU7WzqvTFXsV39Y9QvYWiVz7pPb1H",
  "key2": "2kVPM3Kxqrb7afYPJ9z6ZSFWgQV7WzX77TeVUGMBJyLK6E4QvVzx1V3YQoo2gBVdB1zq1576iWRnUCWkte92951b",
  "key3": "3ZhoyvB5TquGUU16bhUcLL7GsYaVntuy1N7PBZSXySUuNUUF8FeTwvRU1Z5Rbcw9SLwK3EfDZSYPQkU91D1mFjFW",
  "key4": "2oV1aYfSJdwika7z3W7K35iamW4FcjNLpFuaiCttjecUwSNQU1F9jCAeuGH3BJbBL2pG8RbuN5eUqivYMfAWRgJb",
  "key5": "2Mmt9kRt1uJ6N7WGvLzxwoEsY4UGtZSpPtWh8XgoujznmoLa3MsgdrmTFE8nZdnQTWz4t3Xd5FvbWPDXtbS6bCSL",
  "key6": "5DtC24Q4D9giPGgP8H2dyE45jcEdeB2hW9GUza7jp9UbfZMZi4uZZyi5PAgCdv3HabmbYD8dLGJPxbQnW2YBCkxA",
  "key7": "4KoWG4pTmZYNWdnHLDHzjxXQiqwqBY8HhJKT44d5ybfqGE7i5a4GTJrYfK6B8ho6zeqCjCQnt5V6P5AKc8m6xGax",
  "key8": "3qyU9j44QZAta52FsHwPxz7r9msVLyt47ErRe9VNREQ5s2AVqj1GXzwEdqY3qfLSUzYnMMU7J24iF7sRjDU9ji8q",
  "key9": "3txAXgVF3neHXMJ4zrziQSd1Arw8UrePgSDsYrv7wU13GpJ3kukQK2As5EMEX73DsaWXSYuUxiSxz6fvrgc19MMH",
  "key10": "5GpuSbB68UqFskGfBG5htGKfAsuPhDx535zmWXJhtnsHkeFEcP9oZ5FJuToVJaoWF4F8M6ZjTp1Y2JP6P2nYgGpG",
  "key11": "4GeC51BjtVwNBxSV86p4v8DTMJwxhAVrcS76bTqBPqRjrECaRNcJ2JEvid2121Zc78nfcU6vyMTX5TZXEdFRdnfY",
  "key12": "2tFYmXiSTG2PKK6yW96mFUrk6VtpExvFkSAyUxhAfsuahtj2BWZZNKDtFgAxrodh7DYUjT8J7hAM7U5qrA8LdDok",
  "key13": "59z1d4zikasBXwgVoXnWDcL6hKxYoyEKoomuR1SNFtjCeSNwJbkcWqh9MSR5HrdiPkAUY2TJxLQJ2Gi26aKdP6vo",
  "key14": "3g6bbcbRsmbctd3ZeL9xn82GAaCvnC5KePfo5JxiVEFTxJ4grorGBRW7PwdbRGqpHE6ypsQkgmyH6EfuQDAB9ULk",
  "key15": "4PbavQ94rzV9fFvPWhTRzHuSfEEGaPMDiyQqLuse2TYoKfh1oR9FVHZ1AuzbiUwJUq8U3aEBoRb3ra4G5hpKonbU",
  "key16": "5KWainkTFr7WSjNkJh5J37H3kyDjZhRXZQjd3KYDahAsYNBSMLfWhhugEEdMoPUMNAXk77QDzkq5NHW67s46a5Xt",
  "key17": "X1BRPAHJ2Swotc1nfvygaqLY7ogbvazauJwT2wXiYmypM6tMnGqQQfrces6xoj3DHthV4ewHx3QzRLRRFZ7eUCE",
  "key18": "2iGWhXpwu4yLHFLPB9TN1RPivyqrjdn4iCpwf4LN49m4TFL8QCqT747W4pkTTy3i827qSGWYdSMLpVbZVnJM7hqG",
  "key19": "4Qqs6gY2Vd2vwvtzBx4GeFDQnMpoGgrZhEDLza7hct4zRTbG5auLUYTaQ1EbHXmNZRYAfnYtmjbsob1r5CnNXSCS",
  "key20": "2nb2s38rx88MiP4ycPDF1WGJfcGQPZZMk2UGZzbDSbs9SSkQPVR3W2pGG9DsRPJUWBu5jEm6dbse5EW5HdWPNiDU",
  "key21": "5atpH6mptkTnTCpaArCZ8NRpWes3nYw1ECjkCs1XHiLCkLffgLpHPb2SdHWcrgMNQnADEjgoATiwc6pxTj44hih8",
  "key22": "54JqrukHuDeNZeVumd74sW2DVQ7SwWo2ZXumEXbKMopSjJdtP4TJqPm9SAD13ex8QVxJzubNUQSKhCbeSshDjd6M",
  "key23": "LsUA9JkugRxHLAr5orkPRVqkU2LwU7VABdKw6PrMReBDeTRtfoq1JG3JPkMbvXQqTShqUJ5VxaTvNCR9whf6CYA",
  "key24": "22ewxVtxoT81YQbZFZgM3Vs39HT4wmarGoHwKdqaNE1zbgcHa6owUKTK7hkaR4gWfpXgTGQvnb2KFPAscwnQGBCp",
  "key25": "38ivfuiXtDbMszG4AVGmkVMFUFsPn2Y5bvN1F5QDkHWQ3kZhJuPPFNyitP2E47NKfBoMd3wemSnyDpKNRkYFHtTZ"
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
