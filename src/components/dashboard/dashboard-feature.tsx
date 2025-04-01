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
    "5Nim8WkFUpqF1cg3fjJwerZguXiG3Qof4sFAJnB5jnXVcQ8LcoTdRWxg56iatgsxMASv8ftvbHFNaFsoShBsHyH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A34G5vVGpENdx1uyTno6rDbxAB3irUNojD4aYZNGhWEempYSTi4Fm7bQFUVRra53Hbtq4LLyrxzPbJA7guL1JiG",
  "key1": "2Waf3aZ7yVDijkxjBgkuEDBkCoM3NayGB7wAw5JLLe1nyYQ4oPRNCTufPVDTrqiG941T2ZJxFSZMJ76hxLbWpkSY",
  "key2": "9tSx2VsJRzKpW2kMnTwVoAtNFgjWDAKB8Qwuy2r8fVtwh2QdN4uZkGWJ4ZsSNutuUtXuf3AQY6a9rmUovu2remJ",
  "key3": "5LJRDDkHdCxCnZp7ee3N9JuRsdMqCs5wQLB2MbavBq4AyxFT9HKw3DhpyqY7NDSyUGV15V3xZgVuJCV9pPxigjq2",
  "key4": "2J22QuMdZEZZhicvFjuMvE9cAj6wuTyVWJokwVLwCLBdy8TTGhgAaVJECqqzYCg4iHuz9fzW8uFkkz3GjAwiqWwE",
  "key5": "42cc5vmkLPwqop7CHQAiYCgmm4YD8j8wZG9gEmTd7N43yYxZrDU3r7hhNieyZRughRcQHdU9WQMYwVmfMVZCVHW1",
  "key6": "5o7GvSeBdNkEamq7PabtLY28bk2xCvjDGjssXrSQo5rQdN2g9J79yyWRGrtDrXBXUW761F9mafBUNYwaTih1mN4a",
  "key7": "9jxMjWF9Ng548qRgLY1Zy1Wuj4ZP1UTHNKRqVgdoobp3vPJQLEoQBpzcruwLK1xbVn9uF6bGhXYdJdAhqKLBZa1",
  "key8": "44FTqexxNB4i4ngNp495Eb7p2f4D78tN3dVDSEKXkp5htE6tmoEnFXo33FYA6nNJmA4XMU57d9ekMmkXdAivjuds",
  "key9": "4XBMmTZTNaqhCPuFvJuHFfyGXJMmoHW82Gyq4y9teYUMurFukNvgUVxr7bAr4hdf2wsnyGZxLqdPc1C3uxGuThKs",
  "key10": "2fFVW1VBRZwCGYdF2iK8ahz6QRZ2mmcpkhTBvGgiyqbqP3y4iBNgJWoqLCDMFjv2kr7dE7ue5TvXi3Rh4msLZz2Z",
  "key11": "3tKvmRHiBmNtcyjDuy3pj3hRtW6Bz6ZyPAJuxTjGrQiSa893ZfekVpZXV9Jx9t9R96f3j966pix7zp2bmQaMcLN7",
  "key12": "58E2fbkwZNqra5bj7i4dPVBJ5NHjpvrP7ew6JyA5B5u9wobwnrEoyJf6tzTGJubooghKVhMmjFHiwZGz5QEAmZuM",
  "key13": "4HMgwJuy7PWCVF7nTVutSYWxuzqfSQRHfBNRz3KdfQf2ih5MhwRSjrr2owRRvNNTGNqajoWC129JgnMh89LjS3xd",
  "key14": "2RJ9sYcShQ91yDJqnmrsibv6JhTjgfE9aik8qEimCrfiAScNwVPmzqwqDDx6qbDGMQrGfoViWfzsNjueCpbn4Yzx",
  "key15": "2ZUWfoxevA3NDqJe3SCUarSqxzmeyWP77GL57PecjHvC38uEEqRn8TDFvmaYmX51MrgrvGGDfGM2teGa7tCKsweH",
  "key16": "4Z5Q8zh4fmxexrEjtGYDqwquAo6794XgVeG7SuqzHv73skRdhVYqPKkaMc3nwFNSCvhFxPdMin7kUsAw19MhrPFH",
  "key17": "39ht78f37x2D1xubZ1ZJaXsnpKCakhQmaMM2jCm31paYsXBFNMaFAV2X72U9pqtrS564rx3SoHfaX4akwKtoTKRF",
  "key18": "4kA7acHYonsVW1YsvgyGGGnyWg5Le1amDBqEaNx7fCE1DkCHJNiw53PzTpaerJRcgEtCMKNukTsXZqVx8fErUs5Q",
  "key19": "46icovAaq5zwN2HkwbYKgTfYT2J3QhmADD8vJKh1Ci8Hirn74KBUVoBg6Pw4WM4z23rsvmVg8tKWF5Zzw7XRtarN",
  "key20": "2zYQ1v4JK8a5wFmg2LYkRuPjYxVtbVFERm3HNbheYSiw9WpzfPcknuVLQzoUYFnrhYQoRX7aGPYNjo4fJgF3NcKc",
  "key21": "3SAT8FsPArrXTBUeELtnhxYAswKcfr5sAbfbM2nbPQJ9mokS8QHDF4QvkpghoWFQWnS6nSf5EzJXM5tKVvNd9TN2",
  "key22": "4kVV4YRzBqhVdUrR5vqcHyuRpjVyunYmyhnVU4VgzHJWWvUdXybHkJXJJjjUFqTi1MZKukcnDDiauMhc1Bh1YXq1",
  "key23": "61jjafwE1W4yDAvzBJhixz3uYQg7dR2AKLPEy2au1fA3KHWbWyBUWP1sBJtgPp8WKr2LGDeQLrvDWHqraeeQnYUv",
  "key24": "4BqHo6pr7wyAXkAMXJhKifENzGKRpMSf6pN76t2C2HfPQNdBEjjxWXB1rzGB8PKkUJ5qQ9QgnaJrcvk8HsZkCd8L",
  "key25": "2aj1z1MevkE6LqJJgb3HFiSqHfSwqYRPf6M8HLTX8aXxSybzVzi4kHmCmwjr3mh6NSbXm1hdQBc81CYgAXr4gfS8",
  "key26": "5LntA9jkeZ2uGqHhXqJuNvwZryktx8pwmQzuUmJXTD1FNLxHjN3kc9ewriRZ3bU4NbMVJYNppSauNJhux5BJzcZC",
  "key27": "Gr1T1qSDEtdzJfLByMtCUJ4HjDFawAfFeg9pLK5LAn5Jzuq6uHd6oegEJRmHP7puMnv75xinjA43p9mLqSw9ZYX",
  "key28": "3tB4rJbaeghE1XDQrSW5n7XqM3ckwabKz4cNgM3YUsXCdkFa1LzDRciXAVD8jE9Eou6cwXEEfEG6hq79QHRgKUwz",
  "key29": "4HH7nnGSuHqk25xF2RVReB2LWuAg2oWTSJcyvqMtUSn5W8VdpzTCYBC9YrXdK8HXrCn2TNg5phNjvzsPL1oagCNA",
  "key30": "3Egp9wtfK1UT2MpTrZT3FaZvQaNMTADScYcTTKYPqHeUVwhDCRXs25W2zin8hLcykGyMD2aiaPDiref6gfaz79L1",
  "key31": "5hgxqy7yTJsBFucxzsfsDFbR4CtyYT8VfR46ERAmNoJpHbZb6GHmUQTwVpiWuts5JemMZZzQGVp3umHEq91J1Bsk",
  "key32": "3mpFognEn6Ah23wE7YyPZDohgT3oLjfHKrSGKfMbj5VJB3pcP99H1Sdio8JCskit5u78XQpBjEDjdwghMepJVdmr",
  "key33": "25F9z5Kp25ddSuf3UkS37KfNsC9KCHAKiuPyiqHrJGaqa9o56M6YD5NtKqV7wurLZHNWihnu7hyaxGwkedYEpro7",
  "key34": "2jqRcb4rrLvPbWwvMykVTkDkmnT589G11i1UMYGSH9AS9yGdgK3NURiBYKKdkyqD4kjYUU86BcH7jeavBpBGiM4s",
  "key35": "4XR2syLvppj1xLvt7tfXJ3zmB32JsDzcRXQQuHuv6CEQEdKw7PMP5SSUDA9ERCQLZZiecx1vrse7ZyXZCAMqRCh5",
  "key36": "27ZkxcS5bHbcRAtFeuR99SfxZ6hJmxYkubBuTSRFtAUX9k42H5XK6MJDjebALfGVcwoAdGtWU3jbBoq8d3MZzjfM",
  "key37": "3hZ5bMrW9enhXawR8tYuFiBLFcB2o9kWFTmeKX5b8iYBKA9WqeF3JvC2tKxrx3nwZb17o1BaLFAwKmKe9TMLa5Wv",
  "key38": "2iECnDYwKhPvY61QPBbkrHWJpNK1fZzMc7mem9EWBGk93L8ZDxmmjopM5hbvgd2EwhxY22aT2ATQG6nySNe2LGg7",
  "key39": "xMQNUvxReQtAWusYkZG1zSbwRDsS53b5GqtuUsJWpU5s2ifAWAmFMrDxJ8rj5P646MngWd5zU5SLJMNAbJRKg91"
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
