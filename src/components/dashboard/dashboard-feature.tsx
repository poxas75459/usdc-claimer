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
    "3zya93gKbTMNSZBFrxLErcEG6zRUQXvWDSc7Ax3weV79jjrjEBWtM3Pj2fJnax33C9g87XqAXgstAKc3xF78xFj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UgmPaRt5vYYkfBXHkszaMwVaZANjwqSw3ESxcUiicGmbRdVLhjPe3nYWdCdHGo9xBo5VogEyQac8vrFMUM4ddHE",
  "key1": "5XiZ3Cm8juQvJQbfVc3e1QGAU9MSEx11jLDnpTu1FkQZtrRBs7bGGxohVoKn834jycQdkY4xS2FwdcRatDM6Rcjc",
  "key2": "3dC8Zycu177ZRM7u6F5j7GAbuJuLiifL7WZCsPSqJSogxSium24Ehzd9mZzLTra7hnzuMxiQae7W9W5bpbLGUJR7",
  "key3": "2k5xtzbrV6LNDgxWw3BhNXhf8kuk7SQfXfYKpVvsoDKARPycvrr9wRp82CbQfhi5KreTcqTS4eQ19E4jhJC1zm9K",
  "key4": "2ifKG4JadUnuVDTf9TcSiPYBeHU8m4fBRrTNXbc5vAfhpErsgahj3PVcexeVKXEWoVoWsXT7Wf7w6aoCEkHPxKf6",
  "key5": "CqYdrFA22n8K54FJTdsDusCofmtdKi1xFNtnPRTqKeDpcseZzqMz9isvS5yNkQ8dDHugdR9mi4W6BN4vR8zXh5n",
  "key6": "4jTEkGmXodrNj9jQoEfyhV3CeNnq7je9DzjiPW6RvVim36NgZMuxMUMcqMU5iwXjyCqrFg4cYaYmFM2ajg7VqsHQ",
  "key7": "4ZTNRyWCFwpnV7VmXVZgE2fktovyMBMiHMfSWkLhmqEzFXSkwH549gRhaCrzc1q6uwwscErarTiXzdoVp1QWj6qw",
  "key8": "2Jvm8hoE1SNbr7nQCTJz9NYuq2bRnn6cSMoAaPTPNRjjTE57CaHRRME6i9H1MqXAweb5d5BP7fmVbEeRDgCamJVj",
  "key9": "3CjCzGT7G5atHfcs8pzZYjYa7vJBNdVQF6tQeZ8dni4ueHE8htXcRoy8eAvk3d5ehJPF87VSXfTnV1fBFQZVqpQR",
  "key10": "5bHv9Gnc3Ae9eDQuiVgTrbMnnfyugCVxfuqhF5ojxXvuwdaMNPjT6zoUkxLoweTTCmJC4gVVa3MDqELQT7gznU5d",
  "key11": "4X9kSJUhHomFpbvW5qd5v6jthQdyMgep8TL7KJCb869XTvydas4FSkmUS36uzEYHVWUafMQ9tov75hcXgKnhzXiZ",
  "key12": "21wubLv7Hc2z4ALLHtmFoJPGYoK4Hk3GcqM2Bz9wS5pjFz7JyLkDnDiXGRB5Pv8V2BK6F4QK2mbLF6qshPbPUHa8",
  "key13": "4gdmJXKsoRYkSpat34WZb2R77fQ6vkhT864SQ6UfL1fLw61thigfEbkNJ7s4jMESkndXe3Y3LmBwMin7G3FqPuvT",
  "key14": "5fNDpG733cuvCCUfvyiNTmyzfghMEQvejvMrUzW8F3NKCB2Egt2ePMZ72ftAz6Qs81ebbS1DA5bd2cedfyLEej8m",
  "key15": "4WPN9qTmUXLKqLfcTT3iU7aB6XrSefYNRiiK5hYveEhsvJeCFTbdHBWBT1KSFmWHVAMkGQTdWFc4ERGPtLPPXmYc",
  "key16": "3vRQwGCc4zc4aGgrzgk8e3vPNjesbQrYx4Pd8jn68czgZWKneWtJpweka99kA1yZuUiqyrw3EdSm9yAVaCS4mU9o",
  "key17": "4f6VxreZPoQmfvSuFNTdMo83YpcQTN5jUWxmT1kzcgTypohkBhJoK6C4LYKiGgrXiEbdyn7q57H22m76BkDpXsMm",
  "key18": "47cBV8Xzepwq9pHxXGbF6piJqJgVvbytzNYgpSEJ6tCN6X7pgBHXq9BMixqijDTCVUYzJnsbu8Gpize2C5akbZeg",
  "key19": "66emgvUbsTtkHQLdRFut9dN61PPY4Fx4hkviBU7F5v8pcXyJ88kaZFFcEhsXyJCJv8YTaqodju1sJG9ZQvFEKmrP",
  "key20": "4hxyca59Pem5NkNGFwoPEVfmXoAsQiLnBTPoaoB9c4yZ6H7dfXUt2cbs1hbMNLREC682oRY7KdjK1h4jkZJQYSAH",
  "key21": "2mf8NrxiFWeckVMgUzrMNQCzeWNWdABaomSx24jev1RT5gVzZ7wegHSNpZRfBnki3WoBkjhxUmpfvC23CzN2j6n1",
  "key22": "2huHg5dUMSRZGmqzw2MtH2caGzVQVNaajEf1sHgqWgJy5Cw5SkcvBMeGHe41zDjN24V27ZnaRQ7cRCjkxV3ZdByo",
  "key23": "2wBDuvepCTnkGsBL33fxcWVkTbKJGJhtCAPdQN96hQk6HhEYrayg3PVJxT4qqviahhULN3jQNRxLeFAf4MvZamAZ",
  "key24": "4LooZpS9sG9iKUv3aZPZNuzRHFeFuJoCvjDBAPq6H4kByY7XncGrt65ev3rYyc5t3WLcjfbcayeRBKpfimikpwrc",
  "key25": "2mTeWG9nWvSJv4XEtJ2vDsc1ZpQSZNThTAjJa65dmPYMYKS8kTxzAw2QvWoxwBemdQhiKrcDfyerfFsU5Vx7QGd8",
  "key26": "22syCcvkwgWrtw5oWTL9j3kLUCoujgUnyUdXSEA52NuknhAc4Y8qNUWXMxpKP6epbrq6sqBfrv3WyCfSZa3L8Mgg"
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
