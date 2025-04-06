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
    "3m7sCN6v5hGEro5HqWVPCZH7GqaHBrBryzCfFJHwXtidcN6yBBcEHtZKMEzc3hrB7eDmHTLiAFwUkEQsouxYqH8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35KruUt6itXhefYuxbjdYkZdr1RGEtS832jZTYckHKPWVHhyujDoLEDFMy8XddgYPRvAtPB1DbVkMoWnwHbGXPDf",
  "key1": "4C9Cti7qbuFkvmQnyFYmY9a7suyCE4uBS2fPz6o9HpeF4bQph95hDSp85mHvASij1g7AYnc4oJit718aMyGEHcon",
  "key2": "2vrWeBNp3PwAJs4fdaRuMeqAqQ1EK8oZpXsJP4nnGzUmRu7zQ4ZxfLYqLB4K4KJraVUCioRTwebDd8LAL6SKPsnL",
  "key3": "5wsuAnLixSUXnGsLyJ93V1AUqibijFMxbgP8aGBjjaek8Z7sXkFrCVQ8oiMVwmmieg5RjacDukEDKDwwTkSjkQQP",
  "key4": "3QsUSwyg7z9kitdSTxoxiuGwMLmQFDGWHZX65W54myv29F4ZXjtFkZH58V6V8BTNQtdxeKwFT8F4vdGhLE1tMnsf",
  "key5": "3iQgDuyNav6U9dsC3BRDzwQYyABod32F1Z8Pwu39q2qAL1kL7Reawnz4DsbNgJ7GUuFAKX65asvvUnbfH73i3SKx",
  "key6": "3HQt9cZFF1UyBaceH8Kxc4fEPc1WQrxQuoktrUc4Wph6wPaJcnvktx3yi7PnTasiHhGPHgHGeq6SnaFGp7DYQFGN",
  "key7": "5Gbcdu6kFFL1JLm7AUeSKVN5W9aNCUqvhb23KTJGmunDniZsZNApCpczLfeC6KZAzymafRngJiytjXCtgosQckwU",
  "key8": "5cu8zemazHqgo2BzCHPkApxJj3UQDSL4s9S4E3rbk4svMWuvYxNd3MrjTWsUhzCmBzJFBjyoDdzVPthzRJW8dayT",
  "key9": "H9wP5Qinnrw8b8KCN1PDM9PAH3VXq2Xr5edopmmvK6YGwccdCnymxBMiW7zrBARmwh64Sdq3ySjdNECH2d6sc3e",
  "key10": "3bgW5LLBcdQzTriGiDigtZP6hi1nr98dzpCSaqffbdHxCcjWJ3SBbc87BYHVECwffeJRvx3s9H8oERw2ybMjdo1i",
  "key11": "3Ax7nyJUxiosJPrcK7VKad4cVEBCogZdN1WfSvsEW6EhYhgtEYtRyducfvLjvQbhYkM1oTrwHKzhR3L4yhoQ2jJF",
  "key12": "wqaHADUFSPdtRgcGshxEmgxU7SizkkBfLDSFXESiUA5XUssRZ9gEGZt55X5UhTWTYuynHcnFJwEEcyfcxbKcas8",
  "key13": "57wj3QMMesFngkBm8zZy8wSPHfwmQCFxrUeLrsHjhxekmAHveRwPWAGTeMee7q76NMYgAWzZb4EZRMiuwAipnkH9",
  "key14": "Xj17WMRigdV5KSjLuM23Xsu9j2rr5V2krPJ9B2P6SYLh9qCEvirR2umjyGw73jKQQeYhtF7PoAVdPN5uE4ka6rd",
  "key15": "48RNepM7vjeAV1s5YR3GsXNYBJFS2hPRMk5X3Gr6HrYsbpJv8kaDxHdaHRWQSj5r68jLPJgjD2yZEfXAnebB4JtX",
  "key16": "4EsSLZ9nyk9jG65tvqjnxDywnDwB4JJVmvC6bhg2GhiW6W165w1H71LygUTjUstcpWsQnEGMMoXrKMBfzQVxiG7r",
  "key17": "67d79gfQQUcYiKeaX7v3cu2PT6ct9HK8pDVzupdvzgeXiSYAyc6Fjw3Yy7aqVZvqJk4dndiRQD9ZZKrcTqzer7pC",
  "key18": "2PN3uMtb1RUBTW6R8dmrUUWs2sxrKmvNz71aMX2WA6cUxjN1toxsnrqwkbR2tqW5H4rsy1oDa7BTQ6KVJHuzZiVe",
  "key19": "BuYbcLm8yUV1CaxRiR1d1Rmu2rQgZzyjf5K1csSW4vziBxWiSpYK3JvM82HHucXiYDMEUjvCMAzVHYw9NJEcngS",
  "key20": "4pnRyDQPrgxxK45mMxKTxJ4MZihhpHatzaUavj1Mg3Ro2sqkqrhANKd5iRMw726eDwH9vuyVDdNd63hZR8TPTTmt",
  "key21": "2FGmX3uUYJ21FF9P4ptcSkKSMh9JtxdPuQZrtj8BG23NHcrEXukt5VeJdAFHyaBUPzKjKhy1qG8Ho6KMYErqU35F",
  "key22": "2aBPXfYkFPP8YSHd7oarqHmMDTs9GEu34vZ8assoKgSgQWdpYABNEE1FZyNQGqiC5V5TtVHgvDUVz6RaFHAYp6RN",
  "key23": "3m3TP4MSdGswpVHNcPm2ZBP64hUPcNxhP7Hc5bvwcu8b8YZ5axopNZhTyXqgJL7QTdSzaPWE2BcErtPd62g8ozxT",
  "key24": "4eCc9Was7nSZkhpbbhMr5nWZ93WsACo2zyizXsA7oEpFTEmUN24btSUXqBMZyWkKhqSKQ6FQe48eQJbuDHANfpYE",
  "key25": "YzgQaEU5nZrk2y9CzxaDsrcoJcm1sxu75QdybUiY4jWk4UYWHSaumc49cQHLjm8yoTP5rsTpZYjYznnSYrxrzph"
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
