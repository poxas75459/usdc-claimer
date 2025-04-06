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
    "2ng2dkqzyNNYw4QycX7w1eyQAZAqfDAPkB4xvL4bdfBj5cmf9iYMgpfYoiDXW25WRBKgWQsNWPB4ZnunsdxJ3moZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vwfVhQAMktNww9GZjSigCGjhXMA6ZrzsJ5Eh9LSGz7r1AnVd3pAEZwgEpSUmxy4YgGmJoxq3nBLPABvMUApQu2f",
  "key1": "neEV4jP8gK4J7DByAAqiTdwq469ToUggy5JVky6CBbHu9cpPLxT4jodGz94bz8ZPYUHLkRsWqwr8Ha1chHC3W89",
  "key2": "5ckEtrxspjR1Ka8t7NXr7vA8T7wVGJewLzru51D4HHfpCMzqW3U7XnZBGJsfpKNSjcZ8xdzR2m91zATjQH2BC5jn",
  "key3": "4c81Up8XDmHVBFdXTGZby1G16zgifLiJH3Uk145Zx7kVtYdy6jeoMtgHm4eZ78wThYrn8ZDvvqRvzyt3g3GMF9BF",
  "key4": "oFAWdeJG7QvJe9EgB2o2S5mUZRhmnrP94LJdQ8jDj1pqBWo2rygJDE6967w2qjWHetQ2AkFXCpKT2MxLgHx2ApW",
  "key5": "4SmocV2Cu23zLrYA4CQsVxVcYynjC4S6Gw1aTsst7prFuvYTNLH3hBf5Tb66Zo54Khf6uNwbtDoSg9PeNqHzNiXv",
  "key6": "2uZLQJyoZUd9kTd6vAHHo1djnd2jquW2hx64xcNJA4PBvgGsbZQ8eH7K1XxwSbZ8knPxzgr4HpNZ3d76E6wrawN7",
  "key7": "48bfD6c9wYEi45XQAZgMQyf46XzGyQZRYUXEQ71fQqxemca3cPez9MzuCJuvV5Mpx1CNixVUgkG89vN3oUpYX4sj",
  "key8": "4jCeGMxyaEBB1regjc8Z7JQtr71hX8QHS4ogrYMS3BGbxqKGDP5RmjzMqfpua4KShtGZaG2FvdhycEc3KE5g5hZv",
  "key9": "4TxP7nrhdsgTjt6nUmuU9dJp2Nb7aT4rVZ3YLLts7S55CRinN5imzWde6WVpvsVoQA4VPZNFP3UKhFywxNcYNsia",
  "key10": "2KYcY5QKFWUUHY5LvmL2po5jzmrWBjn8r6nbqLe3BdE962PttB7MuS1tAZun3vVvocGb1tsHmDP1k73CA6rrnTwz",
  "key11": "5jHRPeGFMjtmHNza8cJ3pxcMeBdRKH4UkGpQhFUJ91S7145sqaBGMizxVHsxeNSqEmt1iZya5GCi5bU5xm1RKcGR",
  "key12": "4MgDZL3EmdniKfAN4H4G8Qgx8jekmvrMaLYv2XRR5eocfrz34Y3BcX4fgzGExcotpZwfgkf6EtJLpKwhfP6M7iDp",
  "key13": "3BdsSUL2WVwiYrwE35P4oPFqUh15QcTvWTBRGA1csJoVbM8a8aHGHHWGFq4NniRFF53ktbH7AayVFdBuSxdHVCSy",
  "key14": "2LajX7xzCVtpoRGN5bKVJjPnQ79FwjuRhCGjoD2KtCovv3aRzyAFXgTXzuMv5xWxWTA2yEE4UoU5GNihKGzonhu4",
  "key15": "2jee8Psv4c6PZeCY78mVaEN9jgVDzf8ghT4HGjCJ91xx9NoG1z98hh7FrjAFg1A8zU9Vb6tCUxjjMkGGx5phVUYr",
  "key16": "fPJnny4sLn97Uhd8L3mjg5i6SSHDLGUA2tVbk1HgN9KNyuV5ojTVkB7LxwVdUDsXMPeU7jry2L7cQK9iKWiJFsW",
  "key17": "62HYq2th1MzSUrssEnv2ZrV3xnyDktrwP9Gb6fqphSXLUDWZNd44d8YBRxiSbqjargoY7TkKUTMdhZ5P5eKaEwoa",
  "key18": "3rup1Fu7pDzGpqrQWXVETrbhZiVZCCumf2U2hGRXWJLKutgoP7aKEGpAv2TbasKWCL3Cz97urHfF5taPD4g4Hus3",
  "key19": "3n2u1YgTiaNPMVnrLwYqUS2nN8uMKH64UD1nZTQWeqM8rojDtdTjebHw3Vf2qhEPQK1eMF9dTi223upw3zoXzine",
  "key20": "2m5BqHtBp6WqGeU79UXbncf1r8ufozMbdj4MJfHoQxRwTEgJCTTJi8ceT6NdWZtypY4KJDN4ngKGXG3w9VDhmkvn",
  "key21": "5re8aEUDtYjDYRQVNYBNkvzbd1wRjRYStf7DHidmUFNN3bft4XJkro8MVkho2Z3vQXBhmr3bKct4AghiiLHaNXeS",
  "key22": "K7NwMkn3pDauNdo5NXsd1TDvkvx58g3TdEHSJEfYe6NX4NKAUubXesvJNoTNbP54EP6jyf4MVuY6hYGHhEMwCTf",
  "key23": "DogM1mhiY11p3WzR6YGZuvNkGmHn2Yazn9HDgBvmi4hupSVU1NHEAUeatRzapzwpvnALygzYuSXJReG7n7t9gWs",
  "key24": "26LxF9XbDqTAVia4WimFVPgVJ6GTChkvWttA4piXAJFdS6Lyj5vDLVAV7JJNZGMvJNgJHfHjKrrCvoRPjoHC7Gdv",
  "key25": "4H3GpB2B1Jpcx84JeP8GsdSLBN1JntNRoxESBnqMMiHZ3ywVPcw3t4ZuKLue6QCxQvbamcpyFxbJxXPWvwWw6oiD",
  "key26": "4D7VcvBXfBMffFsYMmbTykCMzioi5X66zYGsHnNN56doqzRf4ujLXcXdq1bQjAt1g4iF3viXHvuTx58jjrSnANMW",
  "key27": "nEu9swQkVrsidNkSuipvdKXRcN9dxQEsprhoQN7p5V4q2eXaf3fDnFTuafgECCwsmJ4tpmcESDGSvUyHShMWZCN",
  "key28": "ccJwrcN2ohVcbvpfjh4oPeVQW1a7WS9RFhnuvN76rxR5ZPvY7U9Agy3sdkNC82cygN1ZdPCcEyb19veF9aMeP3K",
  "key29": "ofDSoRRNTRZ1wS3Tzivg7fhDPPeZ74vNWzc7w4Q5Fpme5vT1pfCxdftro8Hs6WZtrwEc25DuJ6aqEzBowCtYGiG",
  "key30": "4KS3LsCWtdfZvYXH6Kaw92Sxy53dMUrAErMmTim41mSYvPeHNCFs4psUkEYLq8LtFVXcUZE3UXxJxSmxAL1eZA7B",
  "key31": "3AHfQnTQqienNDwVxbVETSafLJXbkpY5cUWG5mtXPZZwoZ35L4CxGHbVvkasfuEiEnNcGtm583De3Rnh6cfFv6HH",
  "key32": "3DNKFTKhF5zytvKjNHtZkaieiwZmPUmu7D8zviBYyBzLr3Wv2VvyrjoCgWuuzzXtY6q9VU2Dp1veYbvRhsNr14wP",
  "key33": "3oixcvR1PwgKK6J9W3WPVxhiK9gh9DeFjDSQAVm3HKHhwsNQSKmt7SQBH72UeAswzmidWVndVP6z1SQrQLe3rTGJ",
  "key34": "yF25Snoa829aZP65bfXwakY7suUrUvnTGUSkwsbGnFZGm5zBxng3sHrzsKhsc6oMqchGybrN7d19RTNQzCMLpNa",
  "key35": "2X8bPqe8c5EpLpccaL3wc1Bu7JP7NSbEoJgwAufc3Y8HKuw7VZXSDKZfA4ZEM6iouTtDY8BVVwSc65VmBi8SWZ2o",
  "key36": "34D7LksZn4MGzi2QRWUGNWmfgsBCHWhN1muCzdbWjxNfKaYF9z2r8AggA4DSgRSeRKoubYQtJFeqrkbkYMQJu91T",
  "key37": "AsKW4KHTKAQzEJKLhLNokjDo1bf4byNQin4T1MVoeTBSowZ9Y2wBoQGi5eYDJJmfGwjYAJtpe37dyAz3oKHfpBu",
  "key38": "B6QaJsTnfCyKw4M9Wu5JUrqnkSEqPXW7Q1SQLv7hbqozRXvtFLTtGw53QUvyFymTbuTfhnEY6zr4ZSzJ94bShi6"
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
