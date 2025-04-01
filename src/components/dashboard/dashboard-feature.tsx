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
    "5AqRmwZ1JCwKMHAQ9sup2DBb17nyubymEsqMU1HaMzJWUFNbNe3DjJvrBGsE3GNwakdGAitWP3nZWAwAH1si7Xgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VrHCR7UKBS7TBiyVMbxjUQjQ8MTJ3TkQrbHoK7bL2Rt7yxA6G9gAiqc3gxCEbcSzWScN5NnAeiDWh86fQu5ZKrT",
  "key1": "3ceEBWHv9Ns6zMwamFGkDjoKxecPJc5T9VkhqUSFydppkcj2WWtmsxyojL1eoxbLtptPL9FqwBcVyqrj61dT4tNG",
  "key2": "437eDTXv4VFYzr27qvWNQunx2yRENaBcak33Qk5QqJ1zZ4c1ccCwUXhK5noLfLi6K8GyWiHv1qFKuyNvmzGBipfT",
  "key3": "5LKUHuGM1PWbYAShwYfcQAyZSs96Cx7tnmuAdPnbAChxb87B1jREHS7TPxyT2X6KTqu9B39YUxy1gAt33ViixJnA",
  "key4": "5pADKBLvtt3izMSm4Ugs38ufzWHz2GdzpG4wTRJLLGV6J5Fjrib4yJstWv7g5JJ7zB5gu49J3C5tghferkQaiGfL",
  "key5": "g538LER9maVH3hAn3HrqMmQTA6nhxU9yGC8ndGH3HWFPYnSWQ2vcLYQA5ewhYLFuZFyjLkosfX5Kb1yjX1AwY12",
  "key6": "5ZYQEzuHwV3bWKzKwoAmuJ3SDojQpbvPgPwwtXQmYpZ5bSWT1uLnha2V2vEgCzGDyRsHkSC7sdb2sG7nacAwWnne",
  "key7": "5VZ5Ka2tgFeyHY2EszbHFkynQmZbKfJDCJSAtAJW4yq4xkRQpkhMVimjpab4f7EgRRuSbjibircpBVBqh57R1Zsg",
  "key8": "26V3qt6VzzcTD18VoRKL8CSqEWx136CZCtTDB9p37AyAMff5upvf3BWyHDXcgEbubXGJPP92v5vPuUL9icA8Wiwk",
  "key9": "3F2HiRNhknGQUXj2adNNhTorp3U57hF9FJ6nNs9jnXUgxMUsQDGVH1GcZwo2CPxAYqoATUqLVLJcrh2XCqXWrhr5",
  "key10": "7EzvTXNgbqJTXXENXysGejx62T9yCVK1PMDWedmNek6JPUDBTJiRXGtFDqp3XvLC8yPbPWGRPKb16ZzWg8fviay",
  "key11": "4FyMQXbacSSgm6ojmiz3mC2nnhTVE2ZzwskJynhee9WERK6KtcsTWSqdhDZGJXyBd2NtXq1HcEVZbkQQk2L3k5ow",
  "key12": "QVE6nfDDv2b8bNsq9GeFATck9vMEXEF7e429uYsyitiprMHFHzmfFAqTFABkH466VtpeVwqcSp2At9xTL2ordvb",
  "key13": "4m7XPyqc6F2AoxFaVuN7eb23iS58xYsh6qcak1ANBijD63t56qArsoP9zU2Y18Fxt7jJ2CKCwVtdL6Y8U37qDAGZ",
  "key14": "315i92pNhFtYBPvsyYV6VUEDTvq9DgiwPEtwfaLG81ZfZHCSVWobgQBqzJdSDkT43pGyGmLMjZqjKXFNPT8Q3sWh",
  "key15": "3TKqx8YekBJKiC8zUtpzEHXpMtK7AdAz2J9kzD9ntX8uDfvr9bj3nvzNGWkA6pYa4W8uN6qbL1fu6k68GhxyNBQi",
  "key16": "3sXyCG8niTBo5KHgapn2b4nb5E4nyA2Uj967opjc1qGET2WSUB3hreotxmxf8VNjxZwdW2mStbu6ziR2jSr4bdEY",
  "key17": "46PrWnkahVrcUPuj5iMyxqY4G3k37naA93wGGVhcPQh4W1Sdv3KW9CUCnn6MkV5CEkoisfwku9vyE8xHs15GBTu3",
  "key18": "2cxQ2D8x3wJgzCKtLQPrNnet3VNGpLdfs8i1E8eRx7sSpvaokkeoEe7vCQ1NdZsbgnPJif3BPr8iZknqV6LAiutf",
  "key19": "3XrUmo66QuVvEn1GFTQ2QsHxncnbZCmmTFrju41ABUqAwXELpafewZrKDtu5mypJNSLKLb4n1bt6sAg91in9onTQ",
  "key20": "3TUdu8RMkpC6nhc38Dn7bBUqiUuZf9h9DGfjTtkz6vKMheBC87goi7BdquYJBGHbLjHsnoLM8uXFUKoYEPiKAYSx",
  "key21": "5mPcFeyTpmMHZFWq2Bd19FZ6nPwmLVzH3JGfwRnKghX2snnS2yGqx5Tuu1sEVrR3igCmXqXU1q1WjUjeZG5HcVcX",
  "key22": "25GRDxKMtcLqNueocsj84d4UK9yExNLfVacmuvutEKtXLxMDKH8CMXeY6q2xvxMNfhRcam2mw8gdFTv1NsnYbEvR",
  "key23": "2bCfyuVmpRsiwJFrHGbdL5K4CDs3uBUnFwrW4wd4VzcYX5VrBXMHn8e3wLe23j7jip5JGTKy1KP8NrRBAR4QUNHc",
  "key24": "4inz4h5nQ5Yh8VZbc6DpeMRNAXUHQ3BZDJbwoDztgWFyP9w14vY5ex4PN31ae7aNZfNt4Zf3vMRjWGfMjjVSJ2jg",
  "key25": "3MYWNaJ9PEotz3wAVLZvxLFVKwhuWurGvVYvHHMzUdu8NQYohRZmM6nkLysZfzVU8QYjmTho8HRseYerZm6vBDMK",
  "key26": "3YTwcHSVKaaGKMuzuZ2e6dweRQLHKYukuodyqUcKePP3WATY6wULmNPXkBBH1QXdCATdDiKDjMoRCpVf3fcfM3Np"
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
