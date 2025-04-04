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
    "4xLeVoFNDCuXrAx2TAvPTJvP63sxiMEJpJqF4hQQUpeuBpnuV4m1PRBbgg9VA5SFQs1ybomVQ4M7jvSpJRRC49Tt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xCqLruPXsqxdoif1UppDytaqw3suJTyWaTHRTK7KpKUV7C76mt6ckVtWdUtRWmjuhtrN949zrkCpJHLiTEHEbTg",
  "key1": "2H4VaDQGQqwbnT96WYQSBrhZNdviTNAuz4y9xeKYzJR4JCzkB4cQwFA3iDFYeJT9wvv8tVvFdCGaS8gDKggDRzw1",
  "key2": "44s3XFKCRiSRfpYFmXcDNJBkJDkmPCyTRV95j12nFpN3E9rh7Qd3MMYq5zhaXBRHytwqExbQhXj83yeKAwCgU61n",
  "key3": "Zdtra9fyBQFpkkBaWPYTA7DsWjD7TUQeuExMauxrDZ9TiCbDNeNtcdnfrLToYgVzrQKoGrty8XoU4thMPRR8MpU",
  "key4": "3izZezYsYsoMHebEkc929xQo133oWBJkQPABNgjr3DPtQEs4QQWLJVTyngbPjR6mewdu7QaWSzqDxy5DeK3DXydy",
  "key5": "539D1jZ1JW5Cx8BKgb8j1zydZMQbLxyLecS9pAmdPdH9gz1AJeuD4TmKgxgsFz1vwyfKvQb4uCEebJQuNpdmXKX2",
  "key6": "48bsqFDbkEZoQQBkN9oc1cfQdqdYpHxF1AB9n5vhzBxdS77UNE289g5D8PrdENEewbadt2Fs33Ad2P4cUDAHwkv4",
  "key7": "2J3BFLykUdjQKujWxy2Z4aEgqJpx8pgiukCu5Ue693o3k6pQcdtE3oG7TBGJMtc1EoThu8WNgHbpZmnHGGLJByYd",
  "key8": "2GnURU4uWKh24LgknDMVj6LHXvVuTXDWHxv1Dsj94wmnB8urzPHaEs9f9DJWkJV9mJDqdFwsx67QVzLb1RFSMofS",
  "key9": "3xR6tT5x7omcZ2Znw7B2TeV3WMeEKm1SYnfUFC5y2hj15Lwz2DWzYiUtWUbvKdpnUpM2YrRm6w1JnRfAjB4Z8hct",
  "key10": "5voaPdKLbycSxPZwu3tSJFbBopTCt3daSEnzXZCKmE8jjMLj6xw1tYrQozDPanMeVfudBBeQKFTczf2cNQJj968s",
  "key11": "PYxJ8dFH2vtxRgpWngr9aBctwRNNfydmdXsCZgU1b9UdP6GDicVGx5yUDCyG7t7bNvMK5Xb4ZA9wekdE91s9mJ4",
  "key12": "3dbXCFbH4wx8a753UP8tp46XLQ1v4vAX9dRC7nBtbDBR8EiUgjHBPPRYXNMTuuWhR9uYNpcv8QMv2yc2DbcbQWrC",
  "key13": "65ueDpDnwTSmDXDjdtH4ca37qicV95RajqGJh5EqkmSzwf9QchUhWrCJwi6qoDDYZiJhqJbBKLzvF6M297TBmKLN",
  "key14": "9ccQTV9q5Rci4gxcZ3tLYruZySAYKWe5s8yj4XdkWRo65dh2ktkoFwJTH8JnfV1YSVS9c6BmyHoXparrkvmb4vy",
  "key15": "3SRyhCrLieLc9hSvUq4Ew3UergMxcmNY4udTRQdcDb7rA4f1j5ifThLodJM21NgvxwWDGCgAD1kJoVHPhinsXNgu",
  "key16": "3dr7HckgT3iZNxaeYsv8n66wwucCop8pxzscNp3KbT2Dns58T8siVXy6wwsS1Tk1SKzZe2ossVrBDxvTPVKeXcuN",
  "key17": "NzkBvwMphhmSCLxinD74aqDdAnpEacFen1ZgPPzwMg2C1BeMhzhKMd7Y7mWXrghFfMdEk2AaUekr57QiTX3nS9v",
  "key18": "4RhN1wVYotjR8TRugTR3jLPkLmhMwfQ2gG9NZvjEAKwDGDibZW9inNbh9egLZzg3w9eASiCHJWc2zjjGZGz8omoD",
  "key19": "5MPDY8GTKf8Bmj5fprYtkno55JbHmCtBQjecdEEeJNk4dVSazhHjEbNaK1NkTLzVaP8CeyKt89DTNxcG3vNQXCsr",
  "key20": "3eCnsHyRnSgQPrGe9PVpNNTpmY9SpwgjZSSdXB484e7ySB4dpZB1e2iZLkVt8ix69jJGxft4DpsbSBeZ9nxYAZHx",
  "key21": "4BWM4jkRHjpufHZgaHqt1Adt8nCoeLDaYyyxQkxtrj7VAw5WWhqYX8zNrX37P8Dc8iM1M67Emze3pqCktq2iieiy",
  "key22": "59VSYkRYsKSVPSYcvBAt5hFwo9bj6n6vhwPhf2YjuShWMmhQN4Lr4jUyB1mKbsApKiSkc1oEMRWxXJYh95skrZak",
  "key23": "4BXyyQUtGgaJLNB5RWisJ4utm7hSfakzidMPvxEVPPE6rh4YxdfW71zNwTdxe1eU7gb61k15WuxJtwB7iyRbTsHo",
  "key24": "5UjLaU13oLjfwbQW4zm7NaabFZsDKKSUKrtVM6pt1GpZoEsrgtMBTNjP674hn2FXchs3PGxoUBiWJzYucAvhaiw4",
  "key25": "2mBvWYttvaxmax9KK6XScG24pSajEEiopwaFi97iXq8PsP9bNGk7pKLsSDpKfdFHTtQEdqj2mhSaxwVY4mywjJKp",
  "key26": "YpKiHuvxpVLgNZ8GQPVxWJdwF4Sde5Myd96ecfpuuFHac9awR5kHxtgvoWTW71WPBGzupT5XafLjYjuCaiKQ5co",
  "key27": "3sSdZtm5eASpUHiJv4UbwehxkhpYLmZJZus1Qu4E3eo1xGjQh9frsvgS63ASDjoiTHypLtAd8gGoZufJnoTWKQW",
  "key28": "2fWDScJPXTsE3gNc1QQneFwCmN1X5yahuojjJBQZfyovKFVLmPeYas5DXdYGLRqQefcaBxgSRrfSuM6p3aPJxxwP",
  "key29": "3fEcJnZ16ou6AToTyk24R7n7tH6Qif4NHgFbg1Na9wLSEgmmAnyHRr7m8asLgEJaHGiDM7QsfDnkwe9F1yUmeXsM",
  "key30": "33Z4kofcwYuZ1FQt9he69qy73qiVkJA92Zn6G9VUp4i6rGh1aai8rhJJYEdWn2NKkMR5ZyJYDSHwo8Zdpmdsgifi",
  "key31": "4FPtHkm4EhjhAA7DKXzvp8jPse8B5GJ4MAGuDjynQ9HrL8oU5sP16AeqYRSWWgHHbjdZdkdLB1H8XEWUdeUrKqEm",
  "key32": "4fv5os86kLeBcQ1TUeQf7LgG2KCzUa5y2hpHjzxt6hXDzPoENeikyDB2rnhPnbE3B4mZJgbd82p7mGdWRY5cCJ3q",
  "key33": "3ZwWxRBnoDMSAVMKC6uhNfbN8euBHsUQZueQKCUn9mPxKtjkJYZXQ2DNJ41meGZeeAniaEjVCYdtESKLM3wCTzWF",
  "key34": "56UTRHvyycyMTdrQZGC1gvBbBaoQYxZ97uyatj2hSpNqFoWXMUJvHjjZs3bE1qL5NXDehDJ5rqH8LwnDeRu1fufF"
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
