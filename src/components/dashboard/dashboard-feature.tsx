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
    "39u869wP1FV38siN6PCU7R5Dx4DuY1m9y75XjUypCXiRTq8r8ERTpryqPjWN5yqUHFgfbBsYLjw5p57Pg8YvgtRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zbA2GKonDRcfpLY36XrUZ3QbMdePCfFoRfqBRUbLciYmQfMiQuHy1y457AmXdMasQgVM6qXkiZp5GxEG6GbgeaQ",
  "key1": "2WdcNnhiJWKMB8cqHHDdVvNxp2j5qEWXTu79itFUBu3Mcqs57BoWXswCaTRhpUvJfL2veXUZq4WHqNXTRjnaTyc3",
  "key2": "9qRdpKA1fKUBuaHTbWHS7wWRHuUnqgL94NHVpCLh69aonmXbEiHdXHHCYVjHJxr1RXeqUUMQ4biNC5BJEkoJjoy",
  "key3": "5U3PCoxrnXhVY9Ukh9ioNMdZRiUjupKxhXE11uAMfXWz1MfUi9692XcJB8uGgp3XAFis76f9qwfX3fLqL6XH4seF",
  "key4": "4fNo2buWxcMXJ4vBq3pQ3JPCBFEW863wxEyHUEfYQHgjzD132eCAHKT6qXBBsJXEpN2eoCZhBcEs79QJitBqWzVR",
  "key5": "Y9kAN8mwao77c38VN4TGnCxpQmMZ1mRyp8TM3jubiorpCyNb8CUgK7iarDXQCmvhpy8ntH3uUnGzkATGUjugKyd",
  "key6": "DsRi5JaVVN2J1mgr1qa2gWadw7mMrAjsxL24azdpLY6Avqs3RE14Lxi4xEnGqpJpVGZ8tc2MZ4KsjfwCbXj1fKL",
  "key7": "2MMMzrkFWCi88Be2thtTDNG9Zy6yvUxJ2XForgN9EQiLDqH6bDxW5UDhwwpcqHP7xdViggrcoZcTvfBJb2WqrUjw",
  "key8": "4W4GZx5H1sHkcFAEpuJLgWp8KsNg5NZ16hk8WQSJy3dqSujAYtR5hShvA6JTYZSBL2fJbg6Bf1FRmoeYjsuYf5D4",
  "key9": "2pnLEuT5AL3QNw5dvz8MFZFiW92gDayYmZzvv4jvBxUQ78kitWtWk14vtkBdPooeaSnt4oWJHEFhvApSnEYCxRir",
  "key10": "5iccY5u9QYiBHNWbJminJhErYq5v72UraNWfCzYACK1hEsZgn5gAccq3asFcMPWRGPjFFAVti8UUxH7MX3WQiHjU",
  "key11": "23sB266SEbCBZ7Kz1euu6tmoaBbTNEkmMKnZXj3HjBH9eAwrnnANdcnskFtrcPZGVkbERoaHgfVkKQrMQ8PfmeN5",
  "key12": "2JBNQ6ZBGy6YsThzhV3ygv6tnQC6w8SRaBLYo2HypeqFPpmRvKQKzMoGqiykaSpRb8eNRKmyoYhubHhVEHWMbHUL",
  "key13": "61fgiv9ofz5F8UYMuGYQLPXH8EaaizbragHvurymnozGSk1m8Usqh4NMW8RxXYeQTGgVWqBP62mwLmDQDijcdmvN",
  "key14": "ZD6FAiH4HHP2RdWxGnayFsh3TSAKc9cjzMtVShYUkWCpDLLBraH51f2QKkd8GnYUrPpMtLjnbrwEJMfVXizqt2Z",
  "key15": "643T4bGR4enm8fkVcEW7iemLx9u6UVLQdRWtSn6p1q7KLvy3DwvMYBGiDv8TuoLjYuJHVBnQYTRW5vUA1YSRsn29",
  "key16": "2PGQBDFzDhNy6XQP814ttMauxTgZ8xxRJvRr9h52kNEdDdLXFG6z1vdBr4yKafzCzZB685jbkNUwsvK65vbWWM3L",
  "key17": "3AZpRQkdfpPoALCnaiGQ41AJyfvjPbqESJZEEmZtN9kQmn8YzbjSPo4YGDphf5pHU1CZ5rvDpqCztNTkjX4yrmSV",
  "key18": "575hkq2sVRu42EJJzHbBb7iLqGGADn9NjafyvmMZGgWyckTPzWLwfjymT5D6qkKq7TNtsEmhXde1adkV44TTKfKZ",
  "key19": "4BperTXTY8xLdFD5dnDVbH5Eu4VSwyPxY591j91U7a8p561wNWqy8zgTiptSpg2hUpoKCA1TP8Gtyeh1nLrNjBzq",
  "key20": "iYP8SFWQWrm43BCaoM68pzDcjSNg8LWBZ4NaL1reLGaKpvnUcMtUoHrA3279Wfv46Md31nvn5V5DGV3p3JmhCrZ",
  "key21": "XDRKCdsCxF9xFZpb5aWS62ygk7twmxrwVTMjzgySnUNWKgn9MCmuA5Le4NT1FHE5oQi5x8Ukx49EJAtJujkvWdS",
  "key22": "42i5RPaP2oTSkoDSDKx6x2qdUnPtR8auF5ukc9YLsWbPm1RKSR7i339kwDn2dqhsQBBrFU3Dk7ZxMmYZgHD3qUmF",
  "key23": "5XPvbMGapdzJrxUhy4LdVYZgCpsKXrcLG51db2kYLPHn8VMBNC4gXgbSm2gYZCqNXk8vfQwXrkhwvyBThdV3tz6s",
  "key24": "2Yb7eYM1kGjH35oGacpUmo6bHnU5SqN7UxZbLfaHc7C5oKQeaeNHbCSF9Da3XCTvxVQBLK2tzyZUpYimyx9iBnSS",
  "key25": "tNj2qoLUMm6EULjerDKYgCYqFndzWXJ6DZL6v3fCVkowP9bSpu3dyhw2anNSzmaqX5RSjozmMDcmdmukdZ5tJwz",
  "key26": "3MSy6jSbCe5y16DWYQmz3aPGBcZKd61Ekh5cJ4KqkivwodPW2wdsJn2j9TE8qiHUEyY6T2UoRbR4p1oWuGagm1K7",
  "key27": "UjoYTTCNLTeSCABHcoeZBXHMDiufTLAE9a7MpSeVEgovCPxwvf6Rgize636QLQ4LCSjufPdbK2zzkrkQvx57U8Z",
  "key28": "5g6kr2EQoXV1PQTDQdvfqUs3oD1CytPfeFxfZKwGEbxuwNFDHoUsQvvSmWevZpdqFPyGSM6jpZjQ1YaBA1pPFdSX",
  "key29": "CiFa92J8nZDDFxtFV4qKwCgkyermDKkQpwjoaD2EEAiDt6HBrjZpHqVBEwQDuK698aJvuaj2ScLcVW9P2hrbSUC",
  "key30": "2nR6vuxdkjJtnG8qYCbeBWTUkoPYkTJQvrj6PamEDUpTZAeMhTvm3VTUFPaJgickuM47QTrfEzJVxNYqLc5d4zjm",
  "key31": "2WskirbW1KbtRU77duGHmCdwoeWdt3ouHje37W3HEbHCT1Ye92GyA8evLeHqbxg91Pe1aPz9KpAQ617NqYWddxjP",
  "key32": "Jb6Pi6V3ru6JstrCVerUnfaa66CQco7ocmMGZokekziATuBL6Z7XF5nh4mpxRZ1HzYSKYc47KbRMmt4QYxxjf79",
  "key33": "54XTecDrk4oY43RejYRJFGT9t9u5yeybA6yXMJH2yCW9rrLCfPmycdE54iR7HYoyVLtJRVWQXJmdYgFFiygtRGAh",
  "key34": "3Lea3Rtyy3WEHzKDa6f53agosVXqfaTjduXHYSnRdtFW5q3t5to82P2kNLQ8qbcYA4e6SHuNn7WnR3yW9n8ymNwU",
  "key35": "Vq2ANn5WLjTkoZsDSUsxN6v6d6GRqKTyLNTVQAP57gSMY6jSs7a4knvKY8iv943WAdyrt5o9YoXFmiDbcwX2Pko",
  "key36": "3ujp7g4APqY44KzNo1FiFifFUP1HFTB6JkCprbkdNRgkFFPPDsUyRkF2Fsyx7exqLBDgKMfup8YjCyJtJR8YgUpq",
  "key37": "5BGV3BeWJL7jE2mHDgntKL2fbTFpPtnoU2AwUJcvaKMntmztagUid9e7VK1fXwsirMvZabDpt1JrrR8DTLGaMDsT",
  "key38": "HHWBMMyqSBCjvZp7XuNbyXp9YScq7TwoRpnWZu6XnsVZovEo7DXLT5fZNBhxohwMSue7egAS5za55ULoSRhzXu6",
  "key39": "vK543GDvS7XVo2cUEiCycsJWExiiULxtxXB91h1NhyX4w5LhZFgc6ppYfZxWMFMcR26v18CgDGCFH7sHJYHKN5t",
  "key40": "3Y78vMY4rW7vinGv9vGwbBKUNNuniX8pCesAUcrQ1HDYFm8B8hagEWQYB1twGyErLTspD7F2EXi2m21duYARv5Y4"
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
