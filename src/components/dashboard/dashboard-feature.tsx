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
    "311vHLoJLojC8Afsrihsf9F7Hm1z54tUS3ZZNjtZ4dDVD2oE3LnSzZjKkGy25ddBSTvHtn7AHCzuw24DqYqo6BxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48qoWvAyCQRruAnTpVoZEjchRNzCabj7AokcpBce3TShs8of6dZUw6HLFyTmLVCqDrqX1pdgaAcTxwVM1nPcZuxB",
  "key1": "3Q97itfzmr5bX9P5J44DXKterfy7TXEdbZFMAFWj8nQ2EkZK1cNXpx9QSCv4YtPqHGRm9Qq4XEowkJD5byQ1CTe1",
  "key2": "5TTkYeQiW4zMCENjULBaQ8aN7LSf1Nz3njKR64n2nAHmzr7jBhgmoA5xtcX5LSZCpBkrAC2oCvN6MzYyK2nRaBcs",
  "key3": "4fBR9QHFPEx6yrsv5f8eQgfDx7huoRdi7GydemArtyD2T8bvKmPnBy6KYQ5pttjJtW84d9mc88CpUbzcFiNyrVHD",
  "key4": "2gkzjEH2BDoTfQngVbq2ySzsb1jVYZoKPPiKXX7ug8wxFAYgPt4FG1q9VXGtikttULVMo4pDXyLL39ZY6gftyf3i",
  "key5": "5joWGMprfUinjxvYVCjqW2hbb2v72va5QbKXZm1PGTZVJeSbBUdZxryTaQvrdNoDma5VESsnMaZt2969zSammAZC",
  "key6": "2pocySVzDanN5Cq1HuRzpsvezhf9bgApmvUWTiRTCkmo8AiyWAdXq2dkvpsbKTv2n4rMGyUSrRJbFvH8e3iotG6G",
  "key7": "34GuvPzR1jjysDkpiSKyoHQx1Kiu6KEXSBcmshqF8zbUzBMSbY3FiHfsTrh6kyGB9XofKG9miu32QuL23xGFV7ko",
  "key8": "273r8gCLXTeDFNfB2paSLJWFwDjmFsbxCGRamsxoyyb37BjxQL9tYs7hUqfpy2uJmmBNdPVtZZWrnyeqAaXFBoho",
  "key9": "2j1MTavh5H7rsac9yaJF8UheHk2Mc11EnxFMcmvBpZ5eodtBVS23r184WxLSwPkx4ZUrmqLDbLMZPRQtFVM5jtiJ",
  "key10": "487GJj8WFdHMLLTA6Hyia7NRNLQrHcPEBm2zXch8JMNCrnFaLHqB2KQCQ6FguzFpB2K2MxyUJJRHnYty5bXZSs6d",
  "key11": "2PgnBZqextnCAiaE8giyqPBvrmPxuj2eFebix1jFFC5eDYtKQw9rcw6snG7AhFwDq4jcxTBuNp11ZMgGFXVk1tUR",
  "key12": "NJtQWurX13G9P7h5NWCgZ5ZHY8ET93WFX2ooYhHKAPvCvs6RsKCDSupwSLbqf5KNLv9JSZZLPtgnnHUjZhsxGcv",
  "key13": "5EvcWAwcRJykRZ5Kn2aWNr2FS4s8tfr1tb4rg5ZrW3wjR7fYEmLqKSYjU8rnEAgvdH6JFwbuGzAZzDQQj5esV2He",
  "key14": "4ukySV5rjMLApDNzDJP7NDYSwmZX3LULVp9yZD7F5ow9fVKFzFTnz11XiutEX5yo4b1i9gGtb53Q6han8z2a26kv",
  "key15": "Xwx1DQiMknAconnsJqajrAGY6n9y3c3ciiToR8CePB7QFC9LArj5CiFgXoRMePDzgem7joJn9VyhDsHWE6JpzEW",
  "key16": "2Np8Ru1zxMPKcojLHQFneS346H8wxfTx5tksvccMYiuKhBGjeaorQyb3pscfTZhghaPHgzewAp66YpjdpauxYZVT",
  "key17": "47t6dysmVDwqsZCNe3kkeSRF5VVR73HfGgP7XVC6Nw8E9Jhx76ysPZiD1NnFCwa951MWnJjGCavx3kxsbzFTaiZF",
  "key18": "2PUcY4PiHnLXCN5TJJwWZ9eSu8krpvWvu9wf7GrQSaZDUCgjUxzkyTZ5pTpgQHWm6Pd4GzFF51wd8V1JXUKHpyjt",
  "key19": "5mnxWS3vn22mr87XMwc9e6xxBekemCfDJN527n3TmA8dTVDFqXpxDKmWSf1pJ5NiyWzsJuyJ81Th1wTJxeWsbgfs",
  "key20": "5LKhMvxANk52iKKt5cMkowZRnoyxM1sxLymaEPxsqLNjjmDTvgmZbjBEKDSfZ51m3DmaHxRDtRbJ2eLuKzLsSkbR",
  "key21": "uNTYgX8mPGzrXrAaSfaex4jMCfyhHB7RsQPFiGjvumaVrLXFwQPn6ErUsUk8Wq7cjDLHdK6ZQENFtkvp8NeVuYM",
  "key22": "2wZsmWuu1UhCYGYUyr7k54icGSM7XNUa4Yp7mJ67pcKXs8xgcaktZMtqk53gmyXQrcs1F68nHtxZuMRRSQeHdzAY",
  "key23": "65bcGXXUn1tGf1yFmJ9SPCZHb4VRWxo1DrTNJDb59SLzWJ5u1oLjQjRJUsZsRCb4bvoNiRJ54i8vAu9WAADWjCCC",
  "key24": "2WWSALj3XKQCNe554XVRWwoGztX69FBw9NzWNNeQPgi5BBc8RfnRodgXTsDj8b9q7ehtpwCQL17gJVEEvB8Qf7FC",
  "key25": "4kPzEkX3v7ehaWn5VBtZ5YEsHh3gQ6isJdzX6v2aEUdYc8SJ4gmq4ozQQ1S1kcLJPPC3VkEy6CD7LYiPutXK9ut3",
  "key26": "2cqdTcnxVYUa579ct6EAWuwEWk127t9CrqReTgaKxQAyMnhJcyoowx8yvEWxjwZp3L4HkFwVVZSiFPhiJeaERUy5"
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
