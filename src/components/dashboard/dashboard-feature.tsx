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
    "3RFSVqdMp32fXjpnHfYXt6XzZkMK6oFfn8RrBP5BqP2i9rh7rx9qnB9WbkEPuU7oRT52Meqipmtp5FbV4CRdCjed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mvCAnUJ2saMTQxFXszPrYxHhver4K9ZpcnzG1Fk7jhfRpSBqTMoC9W7wHerPZQQPj2dm2wAXanq2ShJnGiVHpQu",
  "key1": "5cG8tX2Z1WDy9dQQZJ4C7oTHVompf8hVrjhvqsZyp5LrbeenUkUviTnkGggRE5snfVnrQerqkXiV4Ckzkxkar3BS",
  "key2": "2bh2oH5DE4Kpm4zwejUmij8bwPjymVpwaFMF8kiPnBdqDmZY3S9AL96wHBfAja6eXiJ8mDrmMmN6aBMeggryeYjH",
  "key3": "45NHGg9c3SuHBjBWPn9Xd9JoQDZKLStxiwJ8piV84FAXqBHUp2M2CwsuXuWJvQ5EKXq5Db2Hw42P9XFwyFjyqmoi",
  "key4": "2a1Msibj2XKMU4Pyo4aJa8q3Ksh8xBVY8CgxDGvdbJEd2uaoC2umf6ZFGdkZdvyR2GL7XEQhYJ63wsQyu3kDmPM5",
  "key5": "dK3P53sYobQFFFFLP77HXSAXwUv45qDwtdzCV6TtrxGcPLnLEk8MS9BmktWkQzJyNdXi4pJ8gbxsRC7eV5ZLHUv",
  "key6": "43HPgA7ksPiM9LvzHThf7sbV866YjjuoNdJayvSoCYaxyh8Bun4TSaFhixQJeNWnjDQzdxmAHmxFwe4NeTBUAmR1",
  "key7": "4y5Ev64EZbSmKgykvdCmRxvQv7W2WinyCGSLGxsFJdmUtSFFfiUdUvcmb1YDCZqPbdvTJxaVT8E5VKkjCGkkdFzv",
  "key8": "2DnmGXPFwzYLGSJUVawxtuTs1SNz5hnMtPWZbFT1CHkNEqL5pgxTVnL9JpfT4Nu2k5BeffqqvfM2NvHzXQgtSQEK",
  "key9": "fcca3QfFWkjY2xiXpJbqF3ges9F5EpLPm1AkKnJddnRUB5myyoVtPmMQh1DLUbs3dEXWbjZSNA9Unyjte9iK8qF",
  "key10": "4VVvb3v2iSgFnKqnkSNa2KNV2t2ZVwjLJc5UQM6iRG9ME5jnoLsg18uv9nob9YcAEKDDrSNqKF61UfJzD1Hjm9do",
  "key11": "5api1xqBRahg6bt7w8jcsibMgzamHVkhcJEqf8iaoe61mEmPFgxc8t9xqoqvS5Cz8cxdpp4StTeYgwQqwNy1jsK9",
  "key12": "3pnegua5oNdgCUHpXgTetuQ29PoHbLPbVYpeA5TL44XZ9mKFfMJk6dNWmzGxWxYk2Bw2torXENUbYDczdgTFfrAc",
  "key13": "2RbLwgjTK9DYHi9CzJcizWJGABiEKNK3MfdwToe4j7eAnCApfvui1U4rDzZG2rvELnM5zaJ8TBB42napkhyrHGfy",
  "key14": "2ofyJzuPFzXQQvkS7aMA6cNRGA6RfkT6DrMsoegvq4x5HNjhBvWsED4gz6xi97DMmCVVS6zU5CVhYDRrZGH5tsNo",
  "key15": "5sitnSq2ozHcUsTorNCSJHBTuyV4uWbfXiVxg1NFTj8SGo8kcEHjFpFPxDbkXWFo2HiQMMxsu2BQHQYtHAr4aRkd",
  "key16": "2RVhmeevQGNAEnCLBRC9pc729uXv7Re3QCZjjyP7zVUPmfsnFGVPPkfaYcPTe4ogurxFkmwrULw7UYBoqmZHRBhU",
  "key17": "3KSYN1hT8vG1kcBbkYEPFStJkBLwB5FiquF8GApwQ2uZY2gf1DNSPqWXCbtFDbZLFFnb9Yh3LwNYymXSotnQEKnV",
  "key18": "2EDeR6dYHE3rxRtyNo7KnPsBBXzgsUwcerufg7GAL1Ms1hYrJBAU3BfjeB8VGjMUwrhndUXK3kPRmGUBNCwPpKVj",
  "key19": "6nLvw84Q9fTaZnCpmMt8WmXccvMtbJBnVPyHB2AyNSo6HnPeM2NzfJTXcHYArKDzQQorDRNhUgTPmtG9hFhWe6Y",
  "key20": "BvdMP7MneqD5X3Cg8KcuZMc2YkEQwV3nMdhzyP276NkNLSuBzqnTtVT8uytP5xL8bQD8Ywwa1ECcTZhouKKWtBf",
  "key21": "4TjWrPVQRApoxDT3nhLp9SSx45Ch3stiX4Vehh9hHC7bNB8hVsAzs1KmoEPDLuQg9BBxhnTiCMJ9w4pWidUiZzU9",
  "key22": "4PQWe4VFQZCvVt5LMtZdWmdWq6WNx8p5gj8ECGs6mifQ3kYDcNVYHVGhgAFpwinnFWVG6jcAey2NVY5hEvHeYLoo",
  "key23": "3TuW9advkhEF1oNSW8ezNzsArsJ8G4pg3AG2o9vuEhXyRXaxmiX7VuNVWs1CzqhwpdRFaYUXH3jbyvXEQePREs1a",
  "key24": "JmSRngSoHkncFJkuLA7mjHKsSz17AZrktK8dtSKDwkysNY7hWUMFVzFXGHh1pRdo8gFi2DSu5pPoXtiBuhgQMAC",
  "key25": "5wSjvPJsftKAiHAUsWQi7tAYvCzV66qERghGAA5m94FvoNMzedgCpvPpUo5oTzvoyegcgymLD3ztvsxWxyMmUxbV",
  "key26": "5nekfjVwzRWMQCPdqqq8HhHXBmMKWF179wwhTL24xEqsSt9E8pUS55NoCnXf4S3kBHKVSuFeKBLkG5i983TH4fww",
  "key27": "2SumSLj4xWEg2FsSiRxkHUEkmm5mSMvvg6MgZGDaLjexHbbUwhWK2sDpnNnPq8RwpLjsXMWATS7yTQST1KamnXPd",
  "key28": "bdpwkfPUUSWmFuWwqXYJdZC7ZHG7Crr9uUKfmJoBTSykdUCJtDYPn6CuTTEaaFnYCNqJD4xviCkVRABErssGKL6"
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
