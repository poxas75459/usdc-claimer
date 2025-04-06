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
    "5HFmpyc8RyL1RrUftL2jwA5ws48Wg2Cf5PHWkAJV6ZGYn3tMZxyKeZVpMjK7bLZ1Rn18GDgw8kT4mXBoeV3na3sA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63sjsoX6hgaus2vAkBZUyrevFeJRWKJVGR68KW1eMfsjN1P22bCoc3rKw5zT8BwJT6hCs4rjRnvQDmebbBUR7wZQ",
  "key1": "36trdvTtyV68An1EPMHhTQn9seiknzcX1ZkgULAfEJ47hRsLPbdRnBpnMrmedXXdiVyLqv8WivNodp2MZhn2B7op",
  "key2": "5hq1iJ24HkJ1z1vzQ9xkpvxpqf36WUjdHHc9N4DxFhofhCHVuoaJRhNahQF42XuHcxGEqfWgnoa7P7R54qgMThSX",
  "key3": "2kLtqnJQczdC3EEPmngUAQcStuKp3ci4x9TRfRMBeRb1BfoZNDWzz85XNQsCzUPXy3KHh4AwsF6eC8opfJpTZ1xV",
  "key4": "gHbsnhCfjHzCCfFzskFvCvgJ6f4AsEvPqtSYZdZj64xevS4jEuZ6gMAj67FtDR3Y1JtVxajA9X1gWVj8jgyeFtp",
  "key5": "3h3NjzhzXJXAgsV9Gq7o1MAPdnL7LULgQgmaMGNM8u8pfvusk9YVd6pdtCfkbKPyWgccMVsEdJxZbh89Scm7TTUg",
  "key6": "4KwpEgfaEYuSqy7qR3pmhsLw9mfsE4uV7pbXLqh2QP2ZSDx5A6GLko84E5TGnJbAF8CMn9m7wx6aMovk3KXTpwc7",
  "key7": "2f57QENBzmUVQ3ovBSRQ7TzwMPJnisjDr1AsEEXUhT21taUG1hRzyt7f58x4e1cGDi75sAdJYiTrENbL2KBgJuV2",
  "key8": "5YHB2fsyiRehiZjvTbqHkPkCsyEmrE9UJhmY9tEh1v1wyzwFTM9KsXtrtu6MRMVzCfLYLu5WKL2GxxaARrmzV6MJ",
  "key9": "2bBkdE6uSpQNcmrQmvqwCKPcqw7Fi1CMZCdCAYcFWPjrYSnYc1CVeBpHoJuikEtNZq7K3ZmC93uKS5o4LA4kMaAX",
  "key10": "3gR3Cpn8kt3YZ9JwY9eCrmjpPQxPe3QoaDSVJ6J3M3bPhYQ7EQJnbw14EUus8zDL5nVbcnE8xnKn9MNDiG7rdnME",
  "key11": "ayCK3UAGMTLiWmEYMy6bcWxFcVn4Si2M3uW6CPCyVoapTXhZrw3PtmSDphJTPwL3WT2nFLmG3gQfmY4ovTiNTBj",
  "key12": "2uLL2HTfmbibwfRkdrwUeibBPCk68FmTidWDsahh6V9um7NDKnP8mJgSaToQpfMu9Rt4ZD48Yv2SusojvbMsvoKG",
  "key13": "3q2AKj4TJAVN5YKqpf5hY69LXbVrTsFPn41ZwXMc3ouz5SZszeJZERujKeHvcD2X3h7SypPf3u2zfbRvbjKezBgp",
  "key14": "5CVkJ2o1ACEsDPWxEaTYvnrrZPU46cMMDbr17hwWbVLTk7Arm2NNRAQYP6cATyBYg7PTqCVNYCuNX4sj9safGPZ5",
  "key15": "4nh7no5aaZtfpMHgpiir5dk7dXRYuwQYNbzcuFzGQQC4rZaGZTSac7iVw5vyA1kAmFWjcQtNo3qKSSENfzqPqmmn",
  "key16": "2RKFVrACBUM4XwaCtRQ2bz8mZgaGpvJJq2342XfmPBaqQD94asSJEbhcdTVX1zm2UoFmB1Qi8qY4U75Zyc5tiANS",
  "key17": "2RePzFKVZhJ2gLLS3ML3GwGUF9H75WhrLW95VY3B15Cu89kXLkeguU1SfUB1iMbHLLLPLyQKEBZfbDrqQGtmNc23",
  "key18": "26GFLEJZxQXef3xmjDFyiwa5JGMaovQn817x3kFJowhSCcNNCEEmj7SRL2tNfhZXRgFSHvuckfiV8HqiuvBQtqcR",
  "key19": "5VLgPvPabDNGKrxyyrnszzJsJofBZL6deYRo5CX71g8fydapdsZF9uBiZbSMbeQPGyFnKAjy3VG8na3pUWkBBSjj",
  "key20": "2UVizt2fbFNBebRWU59ZiqMPQQwTW2Ged47QtdoWDZ6ZbfykBkyxVBtipH2T2N8B4WsLYPevqabi4M2QaLmSUmBz",
  "key21": "26wYVdzdoDuob173bdb65P2FMpxQbm4Sem5wtensbYnowa4SqdQuWuZfUTNs5f5tw69gXuDGxDzE9tLbFANkcdj7",
  "key22": "6t35YSTcSCBwdy9u5ESEH18jvYeLx94XF3kbgRRypKaSH34gPy2xFUQgZ1NbE3GMMKhrXdhgpo5YE1v1dGGSeU6",
  "key23": "3ZFopXwjKcVBBHqNTeMhwj322XEhADp6m45TqyobNRGzZ5T31gxkE5aNHnSuxrt8L8KxbmuiRhqko6L2VRvi7ZUW",
  "key24": "26A7PyS3F6Q5wBazee9eWcUaMLoa3Rk1hE5erXy4BxCLpmi9zDJQYdSqDA3gYGTkHWMoh2JXkJPkn5KAD6JrNkkM",
  "key25": "2J4FM2X8EJzeHBaQnJqLYLtQnLwdMQgQ8gL4fNtfYUcV2szSvr5bhkAuaDkCayj47SDpSurJir8wDNxbFU4L3fTr",
  "key26": "4WVnM6fRxJvZ2L1mzFSjonWLi6Kg9xDVNCDWJcTCGGwhpYwq2ibH5PLHd2asaT4N2ukyTYHNNreWfNg2mnzRbMWT",
  "key27": "2JuFvVG5GQoCj6m1nvvx7szaJxFbbdZDxqGFULNfTdDyyUTwwrLW7Wp83Vfd7UjmMAen42usLhjuHK8SFfajYfyf",
  "key28": "CcsLWVE7uGWmLkXfo67RjjkJKpbhfmCcGcAzAG3QEBiZpzNxjhCSzZdxQHEc4HS4Hnvs1JTnf9JBeryk2GDYc9m",
  "key29": "LeoGCzsBbGwk5ejnQv5rnhJy3yDpbiHjNm8qqqq1RxuMYzxxZk2uyexR4FJ16otWMeXPMSNJuC2oypbwqTr45hp",
  "key30": "5X7ePW1xivJrDqXxPXQkwx5ndDuDUVPoPdrtqaS8YaQ9XsNJr3pwoVP6qwVxvbKdZGBLFG9e36BLzEr7xzZ8oyab",
  "key31": "tkZW9T6MRF5F5h5YSoAV4BjGTKob4kiWRPijgQLhX9y7e3PL3BHm8E61mPtncptr2d9TTX6eLNYbPnXww76KBgD",
  "key32": "8hiAtCbthZQbHYkESaCzooXocNTUKbamPyY86DiBNnPJC5r9bPGx1cJ2otrchTgnjAm63QqqRogNSsZGmd5tYoj",
  "key33": "3TFQoKy555WzpKGkaTiygFFhXuvimsbkvp1y4hrF8LjgNQe7hQ5No9GfttXwXy63212kgqG4UaKgZXcVd5Ruwteh",
  "key34": "336TGhPSig3Z2ZmEq4NxH5bV61hof424oYr6EEht5Mt3QSuCq8K7LvGdjB9KiNCVozLS25uCWQG3SjkRMq4hPaAq",
  "key35": "2f7YjKk7wdaytssUzpmvWARdEPXSKeBfVr9iQKtCv6P1VBJZ2wzFYKF1d1dugoBJSTHVWyopHhQw5NqQsZkZErJk"
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
