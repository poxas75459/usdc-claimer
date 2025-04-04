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
    "49o8g9y5K8roZ4cfCnUNpHcYPke2nBzJZi1vVfA9hmhrYteCKnJYqtC7oGRSEPBi3wwUSkzVei9zxQep8myw1U9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RxmeH3pLZSCfXpsUk2aAiuwkcVQGPP1FiU7mEEkxWXZ5xHJNQEWwD2H6RAcDoxKV6Kp4XrW7DHtxRMRWWaS2JGt",
  "key1": "5gLgB1zDCXdFKVMN97YjpGrQGf2mF8YxkR1zm4s3BMcDdcoE1UsNBRGLnN3KnxyWPv71zX5fXod2D92QV2Gvtb7F",
  "key2": "5MKzdbEnnh3S6kafev8CyH6CBhUpu8VY5j5cv3P7D4naQcm14nEqabMXWFNQ92xjFGd4VWuZCZ7g7GJxUkD1jW84",
  "key3": "3CiznzNFkEnSr9PrckhbhAcWUjyMmHVRree3m68ukbNtFXQDrJGstN7YX72y58u5YLUFEBHdmjLQjUm1WFRdkm3r",
  "key4": "4dS4LueXwqVdFMJSBaYd9uezRvi2XrzVBVkSwePAmH2AjDmmNmnn5TzZWeRXRn8LxZ4JKJWYmgVhjyVrS9yZWKhy",
  "key5": "4zDk2aPQvKgBcTXAENsCr9HTt31hfiktWvauuG644nNqHY7p579ggnNZTBk3qq89cyR7mVUj8UXf87xjxx3gGU9P",
  "key6": "2QzpMnYwyxPELByy7vCRQpEt3QKpPZ61ZTJ1QLk62tEjxaUwKdV42D8294gaJ5hru9M6hkZLHFu5gaKMaQ8TUwc1",
  "key7": "5RnSs1qSLRgL9oKzue5FKBa7a3EnSpFHS7tmMiXDPziR2RufyrQFhjZWvs7sWj9eH6EyNpFgvJbgPoqWaEnY1CgP",
  "key8": "5rGyUxHUMdTfSY2DS4YgSywjnEyvdN8CQfGjnntaApBXcb2CFSHJSQgTKipMbydYNf98oaCjvRN4qWoeAqfSGCBn",
  "key9": "xaPcycABn2duTfpbQq63nMGG6mu5JSR9b7FZjZcs3iyPDfRf38j1pF8J8LCbEm3K5wN2PKLXfoDFHSX3rhdpP4a",
  "key10": "2pT4rwbAxNHxwQwLLLDwCFruvkQcARogURptkG9QxFgKwtJykBvKUw52mX5WPyTA2SiYccAPea41nXfo93RTYsku",
  "key11": "5tV477nT56K2RjUVvratSWL3RYBDR2B1CGqYRhEy1t1QMXtcAiMrZtAS3gw6K89mggBr1TRxcBdunZb8Rg2R9VFm",
  "key12": "38uzR1yEqRM952cX68EaMp3TngvvGZyRXCL9n4NkDzCKnZNMVSgZXHBAqSFhzKpfqJePnmuZ3UopHjJFyGWqoRNm",
  "key13": "4SgS1KARjGfPrPMTuynAqFv5NYM4NpSGLWw5hajLTLGv9XevrwgH25Asi5MjGyMYwDeLyCAFhSBv3tvNjZYqFpJj",
  "key14": "4GKhwiJcU9DKer8pjki7yzbSvF2Wg8BbfKjkEm6QP8PNXfQm1y6za5zmCq4TpCqyHqjmhYowD34KtSs5ZNVxvivY",
  "key15": "2ECvxqSLaQYdTE7b9QuuLVQgpWaALrbMYUCpAgVTHEwjdSKzWiv3Y9iwkQNLmk6riJqbe82eHkvdRyywg4VnneZ8",
  "key16": "KGxoGrEbwhkPFC1NuyZ4xvzGw8oi1wrtpQgfhwjPwnnQPFcxXww5HZEPmxJjZ6iKBgorud7dP1ozeAsLmrhvMkW",
  "key17": "2PAcb5EqqLa3qjDwgpJNUXzgof9H6dj2VcsGs7Yo63cm2vG3i5QmqzgECsbrjy2CBqnyaJ4DLXWs2zZat94XbCwJ",
  "key18": "3xktA3isgHyayg2k3pgkpCsc9xQ4AHQEFJGLbCuJH7pKt8S2KoFqp7vzCMqKtf6RbN9u1apj2NKyFvHSoRSqhujT",
  "key19": "2TsuraD2taRtqU1CJMuN7bAsY6L92Qv93Hkx6GwCZWzUXbNJSQRT3Y8hzf6NaUApMnYv9QdRBBLkBN4qKtrdXT6C",
  "key20": "4TTbxbgbbfcFRcnfedcB8gsVs1ijFyDtNzDrmz4Dbks1ofoNtdQVb1yEiGcpGCpp1dvrqhAYFLTh2x9dk2cECgpS",
  "key21": "44wXEJ3KWRUxXxAqLvp9ckgPyQvf8k7kE2K3cGt7fReMKNauJ4w8zc5X4e53u7kvGH877WYzw9mXGNh2VKUYLe3N",
  "key22": "SfTF7bqEYRjpdcZwkPbUwfz882NgvfYwWHkhjzQdH5mbnJgAfq9WUbJaDRusys3zxu27k5CRsEgpHWNnnjTL6Eh",
  "key23": "2f8FVSwq9rnuhgjfErc3NkHJPQHwJLsZvZT4Yiy2RHe7JLLZKSHDWv7yqMBcisG1Jz2BRVimqWAgzPaTUD7F8X5m",
  "key24": "3jvaoAr4WowZKLG6Rbo9R5mf7mu9JdnPWrNc7e8B9W7tHjHExSqqTVMZFgrqykCCvJywabsPmQersBSBU53qZVTY",
  "key25": "3XtFu2sH3C1oTH5ekc3tqorh7xGV1VKQKC4gvnyVhemDvtwpni3uNdKPLn6nyQPRTAZVsSGxrqXuhCTDL889KdNs",
  "key26": "2ksBWzcqZinu5moaZHruHY2WutmwxW9VCK8DdxjVYVuKqPguRmcTchTxcVdsCf5BXBXw78kYK3qqXp5TgCD3mVkN",
  "key27": "5ffdaQPqkxaHtg7UZeCxDxvnpVtUkrUfARf9peMsb7UMMVRLTe5UXggEB7w8ug8xrtDga11Pn4c2NquhxCQKNddU",
  "key28": "3K3Ma2yK9ZeYt7Mk2K3oNcZ2ckN6cbkqZxQM3KPxX4665Hvi8ccsHosn7dvGpp7ujWQGVyuRwPymnsyGRamyQTt9",
  "key29": "5yaXKQQr9NM8TJqRVddHLQmeoCzauhBvpznpDnMqSofwJbYxWZ9kejDuixUnx8VYPDZmj6bST2YKaUrPX5T5Bga7",
  "key30": "65a87Kbk365RWNBWLj749Ms3wehbvGPQxMW3VSVw3MhsY4Tf2KKag5sphzUoTkv7gRXRhK6PctpSApMZ2aCB2ruw"
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
