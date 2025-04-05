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
    "678vp2bAEZYorwuxjuGAjdzpst1FSnoGSM5UjJBGpC7Gn6BM5VD1fPNyaLi5cEZeSukZBDenFFGHYr3kSsEAHuug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UrqwVRFPfz9bnfsjuh9GuEKPyYVHprh5UUwCDFoikiLVEHXq4ckJsmH1pEEHkv1eQ3Tu7skxTkS5Vp9TDKWjLDU",
  "key1": "5tNwvhD4hZTcNbeWgCswMba95iHzU1gfFUWMn4XDueHYetwB88owpiaCDpxMg4AoytcZdMosDmQ5bEGAvFuV3w4Y",
  "key2": "2RNRQgzVK3wiHZEY1zp3LJap3mx9aVwmiDkxtHf9Dh3QycUzhTJdyWCbUCcqBPMn2E9jhSUAtNNbLjPFTZv8FCZA",
  "key3": "3xCpCUChvyu232MVFBpHGgJYi2NKkQvLWwcFLLW8WeycnARDgwcCf4d5R1uPQmAVS9A94buhcKD5TDkUyuqKvgR",
  "key4": "2dRwo5eodtDgcG83dsFForPHAQECX6Nwqkf1jbMJifepkTNky37q1BBi2RgYGfCdLACyCEoHpuSb11uqP1nza3z9",
  "key5": "jFi7wXKRtaQ1aKPBcAsLk1XESFoUaL9p1F5dzArT67sxKGe7BGzWPF2HHzHdZYTpT2B1fMUPuE4k5saRznVPoF2",
  "key6": "3w8VG9YoMKeggjpyH97YCpAo2qiXCYAZkyLrF9PtYVr8T9ssF9un94FdFPB7rv26W6C7X818a74AtbdjnkqjMLpi",
  "key7": "2YDvvwzMviSeGpJxXuisM7EfZt7EH69QG9H6HvgoV9EcKsXCYo3c72ma8eZuSQnULdALMhAyV1wVu6A3vDA1UCe3",
  "key8": "3nYN2fFm918r2gfdLVHg8RMkjFor9Wa3ArHQii1BZsyi7dhyesYVYo49PrHAuad87ZkHin4RStihZGTr4jvacztf",
  "key9": "43JEEYsMbvGJHeVXpc2uaZoWfSe3ZvYyLhUhP3zw9QZDtvTNoqUPd76ezLQ6BFSrYSAcnnkW59PaS9FxV4Wf4qQD",
  "key10": "5Di6Xqeuu7efBUAggS556S7Uc8bVHDeuJS6RCtnB7nXi5r8MdmwnQ8shuKMXk3VNHwWSsJoVeduLsEE1mBAVjrwD",
  "key11": "55MYKcBXL1iiVZdYpXJQ7BBinCCAD1wh9A8rxzJyFPGy57RymtknqhTnUF5yUtFy2jKWrwPWH8Uboiuu3tToCVan",
  "key12": "2A1qJqhybkS2yuyJvWPjSCpGT6VF19vArH7rZdgg5CESKjKSe1FJB68Y3jJ1oes1zHihhf3YztNxthGxcLbhGigb",
  "key13": "RYfyZM8te7W1XxebeX71Hroj2VyYoNugcCCdFdexpKhPcrH9hE98QmPFGeGUxxks9N5ksZSz4PpUHHRNutDutnE",
  "key14": "3H84veftGJq9wnMcj1nrqyCC9ombX7kM47wqhxxc6tBtJozTJ96gPPqXTsJFaUZihV2zk2odEkFj9gDNMhXs8HN9",
  "key15": "jrFwVG3GNqvdczJrp1UiWB7pWqV9Y51k1VQ5EgffVEbzCxzADPTE87HL7nr4CDhmLH4aV7We5yEA35piBfxsMVK",
  "key16": "WHoRBD7fqttArJKTj2D4xwJZUXQMprD9VwWkv4YwJ4bKwocpxDWRxzRXcUSBXJznR6ESTzkZ7mkYWTHSWxYbS2x",
  "key17": "4uWtVjeNj2H9dk4EPwsoZPj3ytzwUTxys4Zz4jronNqSMZb3TCNHaHhvzo6y5ayQUgaEyB6qZXJpfH5hsxp7z1jz",
  "key18": "4JorzVtLGcK6x9vMqeSJhjRs2ud9wcb5B1eJRUZbSudSpW6uatHKHBBTDQBu4gX5ooYcxaf5GBMjqB9JwkKCuRn2",
  "key19": "5kqJLx9a8ai4HNzFXXgMiusArKckGjs5Kz6EKCiHfHZboccaaBzNjXaTZHhwBKHb2oRWs7ammFPWuKQT5wdeUqgv",
  "key20": "5X1uyJGDeTEYxVPyWn1HPpLgjp3E6kcRdEDynpp3SQwQxs2nYMsSyxa8KLkDLGqM9j3kVNmBsBUgBEwN5B5EYeoK",
  "key21": "3qCCm7qdE7uLsPQYwqqZKzjhxwKnoLw4qsVH2Mv8EpLEjrKpJN8G8rjFH6Wd56kTwazkJfbL9rGEYCwVtzc96UvJ",
  "key22": "536turz6m56VnTbmnbZc3jjq2ubj2K3uJSLmPpQSCf4SjUP5uagakxDS9NyHgLiFv2bjEYAFNQrFAaid1VVvTu6e",
  "key23": "5XjUu6gbERz4uzAy3Jz9WNd1KXUpPS6RXQTeaHJbHcrJtJGciLHCmK412heDYJSQnLMTcw7bRFkewDDu1LgYodZd",
  "key24": "4cXLhUJaRKppDBpZbeb4jQrFgSX6DQSu7uX3Jek5z1CiXBra9veQ4E5o4YgFDsDF11v7P5PrTRfvitip7AhK5rg4",
  "key25": "3HZWAKecRM4gQuWPuAk7Yu83UFGSypxN1X2MFBhMTSD3B8aBbKD88y3SF551EPdAvcdrAL34EhmG4xrCVyQDZTvs",
  "key26": "2DxJFbrmZPFt6ivJdd7JfSGd3UnFp5bEPH5pUzcBeNk1szLoby4yueKDgtUKv7kaLX3R1Ri4NarMxvWcFz2DMu37",
  "key27": "3LTrsF8oz7y68u1VbrjmAyHyCeZkh8Cpsu49J242CyBv7jvSzENfdGBMHhy6vM1aHVBrz1LtHFtibTXFj6oSEDry"
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
