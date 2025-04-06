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
    "Yx6WSAcFc9xd5jDgNLBnMEwZJtLQctYDCdYor6EJSSpvDyFdgcp18oPVjMmQ4kEpUQq19HBozF6CrzhCwBzSJpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g3KGHfLHfNzaKKZMQxh6ToDVj1u3by6Hv7SsuJ1cyobGWhUXS93TzeboPVVpwnLHJkek2URrVeq9PEtcQGbkfVm",
  "key1": "2VtGHCTsPT6msdXx8PmFAiGE2V76KpzenaMWkjakjYEbWhUBtdA3sLApi3hESJau4PUW28CeSStc3x5MKXv4QhSU",
  "key2": "3rJjUPXqstXS3MxGwX3MPEZxfJARStEisP7tu5Ed8yg4Lde6kbPsH6GfkzaFteU2txLaqSwERma52UPSnXyCAcws",
  "key3": "53uoq5JeTC4DKRmVRFMHfuXgG5U2rYhKUrgxERfrUNuo9BMPd9tnbWxdKXdAWzrMSPtWFvK76xDC6CRofnCv2t2m",
  "key4": "2wHN3srx1aeq6yUvxZang3b6LWU2FAEEQ7zt8o6x9HtRX4PNHmSbVeTFVC1YNyJt4V4CQsZhQpc4yBG3ydEWdV2a",
  "key5": "2XbS3Udsrpka5FRcLAtYxk8N718MCjq2KScX6qxtBtPM99GCkzfkBUcUXoadAUPF3AnL2kcPGkhTw3pCSXqeWruy",
  "key6": "3XXJiFrzmee5Ssv9VdzU4hmv1JzZG8CLXRZkvzwoPzJYeZWj8VadJ4X1f7HdkpasjwjoM3HVKfMjjC4Vxc3T2FH7",
  "key7": "4Ahm8V88i28qfvpfHzE6gU6oxY9bpY6bM3gTgK2NzfwWuMH5V2J7ByDXhf9hoHsVY789ty72ycaWMo4zgYby69Qc",
  "key8": "4pW7ZKdMazYRX53nKUDSaM9qXohrvcLDFZpjqgkVfYHWrwWJp6bnakmjHrR4YjpUBDuYUCqxfSrpeTVdLB5epmTC",
  "key9": "2qTPywbHbfNPTQEWZHnucfu9ka6k4Ny3K15ptCc79pHHrMtCUvAKU2ZRHQKRb8tJojsaALvHcfLQq2374jxyNgj1",
  "key10": "2qp3UUY6wbg3M1cWrQnb5JqVxK2h6swqaizT1gfqYzQsMDq88bggrUShr1zLwgt9pnTWz3mL94zM5xrHcfhGyBJu",
  "key11": "32kYD9a6z9deyKmTtFuCcfqFFcMxJ2L9FakapNNwqWYUe1k31uZFA4xbymHf2cohxur4AHZ2pEugBGGxc2Nmc7pg",
  "key12": "x7f3JgLbahKVT6NzZTSkcS73kEQ4rwswsJ7Qm2fbRWcxV12ThhjPVtXVvsNiRS2tkWtErg1baiAmUrZpo2yFs8h",
  "key13": "3y9Abxm8iJ2UAERoaZ6PCSqLyCLRV286TGEWNZV1b1pn2ehGsZB7anbWJNF9HBfat5smAKpTcV6Krh8WFP9hxhoG",
  "key14": "5EPuFzRgjQQWQTWWHcCtqQEbGt4gTYbfCz7Wpf8GXDwJmBLAfnstcnVwAc3sfHowdayjWyxCNjGWWP5hAsdP913C",
  "key15": "2nZELzWmVrftDjZ2yKD485ssvuR4m1TAgLne1nKdqtidMBQDwNSzKrEGUsEQ3PuAbuJkT2ZnCfc6J8uy6SRtYkwW",
  "key16": "34ETtDrwy8wsYGTp2iZgR1Ua7zr1qCYoR5fdZNLnJV5Jx49A37pCq3MdfdUn7PKhJTdZvRP5PGVJ7T41H3ii1PSs",
  "key17": "i5KHiYa43teyvTWebKUtqCR8qsjicqhdy1LY8NuZrJPMftxZ3QvyPV3e94dH5xMYNdbAN1BJL7bsFo7Hz7mH54E",
  "key18": "4EyqwRnoNe1g4WQkDqMDJbdsdtxz7sx5xAqmjd2hVPmQ5mCUfct6n6vGGnVk9tJjk4SPKsoaZJjf8qLuWG535vtT",
  "key19": "5GJupV2cNWfjSp1To6EuwTZWE7dt9Nih9pPrGb2cb3ipdZ9MqzmwcvGJAe1fTmNS2eWGiv95LKk2sFhQDhLp9aF9",
  "key20": "4RSLhZ5KNFBQx98jyagESc3wSNg2e9LYg83CCEgTfhcwMLZmjr8Fx8VN3BUzgCkXDAUH1YJCUPHBsTaeFDZ5ZeA4",
  "key21": "3dGM6uuu463XoBST7UU52MtttGUmoiwtZ1qdXnXynA8LNdShD61WGJK15FJ54A9XFKiSbQCFtx1y9dxwVi52BBs2",
  "key22": "3TRs3wDZ8nx4cJEXthZ4FjB7qSkEuHdX5MBYLCFABZoWhwiVn4GsuN6xMkajEhTkGCV55XRevgyWXUfq3s5KwwDW",
  "key23": "3ch6nwFsay3WXCKrHAzDRAighr6GAZsbSBmPM4ZuoshftMxUrBspUeZWrzYwfCLC6au2yMtGXzHGxfg9rrCcNb91",
  "key24": "2DKvSiccPgGmth9nczZkfBKU1q1rB6x6MLJEktEitXfhNcLJCEnoc5NSFwEPXCKjqkCVesGazFYSTtvqkow7rpqs",
  "key25": "5wcfKvQmzyHxmYkJGxYfSd6HCwD56jrzHZJt6awT6QeoAhdhSDESWHa4RMrZkk7AX6FSH4p6paKb86sJ8z8FWRmb",
  "key26": "FBPHWtixvLzCTydnzmEhv1yiYYNWP7kFH5V4Nvv7YUHoQ2r8esQJ6knwuWz9jQBXFdVYcKmWgoSp8CJBEp2jSmm",
  "key27": "5A1jZGAJTEY5jWgFFphQj3fFpQid1hhUhuDKP2QXsKwgTGC3YkHGY9ndPS1choBnM8fmJqWQvia55QDDRfeEn1Go",
  "key28": "4AGTPN9R1U7vTvRGLP9BafZNvRDzwb6LEFFuQJEgPWHBduMPW7LpWuoBzFfJdk7JDBwo6kcE5XdE9hkYpBkS7Cvr",
  "key29": "5PJ9YE8nuxVQz8jCWJzmvLrtaMXunzu2n6vAvwet2Jq7cd5pRjmugCpr4bk7SZgJixKRjXtxP3LdNPr5uts96Cga",
  "key30": "61sJH2VwKvGwRApQiBji8MEWr6kPbFhJsdUBpc17FY5WcFmNy2vGGpR5Ww7nismf4xhmasAMMFZkzUcagQnEEZs2",
  "key31": "5DxLZU8hEPpsW4jGBHwnwQMG27ofYEyGrXeGeDYLvWBtMrfuhpYCP1ddf6D8ocA99EzX1MZegT7WwE2FwwmriMLf",
  "key32": "5Z4z7mLH9PWH9VikPYNRa3SyLxdL5RPzFT1DDwWzX3buU42jrmbMd4hKU4CsM1hcK4jJcQX6vKRmemYqZNjYzZL8",
  "key33": "5E418ASquF3Wp7Bm38gwpT1X71QqZNaBXmrWLt1u7x1jMLMCu61FYTcpjuCcWVpU1or24JpHbxFAXGyQbJuQFCMQ",
  "key34": "VSNyrTjBfBHmwEDpGnBp65p74FpQa5v69t5nvRCYbRGV1CPoD6g4jcCnp4NoHi8cLVvWRHCo7tUu623UPUWw1d9"
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
