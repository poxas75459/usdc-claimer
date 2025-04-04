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
    "2sESWofVFciECwYNXzNvVoc94gTGNutSjocre6yx8kxtfmBtwAsoo9EaGwtzAVCnMa7JCNL5vRzHtkixKJajeJqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3253NFu6hhXxw58iwTANvHh8bx3hdbdFg9r5J9qN1aBd39GAvvgDJgxTrGafuLMFYbhzKTEYGSW8R69cz8v2wuWA",
  "key1": "5qkThHny6nB8R3Xnkf4eM9Qp4LRhxei8FxHK1NZ39KTQMHN9jKEDmXSo7DUGX43Za9dApmf5m9gjGzHrnrwsrntk",
  "key2": "c1qfR1H6iy1sAmChoR8MN5vTLy4MQoAHrWUfnnPZkP9vNKKFPTPCrFZUC41KWdSWUS2vX6wKRHRhNyTBY4oe9kR",
  "key3": "2LbE4mdjm5oHaDrsX93c8Ux3UwrpoGg3SmjMY6qjpRJNh7BY9kBqiuxo9i3Vnf19BPdm2RLFF4bN4Md8xCRrzCow",
  "key4": "4BBJFAAyLuSFgSuwsGetkt7KgMrd93YSPpoi3WiFV7hM4QRDY3EAS3WC3MHmbPmBwgaSAKQvSnrY53qtbDkLjYLD",
  "key5": "4tTsdJF62Z8P827wZg3hEKJGKXhwWLU2CEPtabdkL3Uw2exyhx3kqqtufG1Go6QbU1r1pHML7f28M8bVcCfFngx6",
  "key6": "VExV1QUTrTrUACxQ7iBE7U9nwNsvNMSiCuuGHS91pEm9xbFNQFW9Sp3gacNQGnV7EnojQEjsjYv19zRbTfEECYk",
  "key7": "3i3NQmRWHhjPGFPW6peYjGrkHDTQXZ3BJucgA3XVBeMEmiSmcD1SGkdoiL1tTFobaQiCxS5SdsoXxLP953jpdpuq",
  "key8": "5BqwPGiFkfLdsad2CUWT11iC8Wu2Ys8XMxTsv4kLMedQs1G1AyEsfuEKQs6amAFzFFhF7DfKivQGt5vEzeScZ22i",
  "key9": "2aZofK7EPPL2EcnyF5dcgy8BPx5ZdNN8kk1TzyZVhpDnsUpord4znsLTptFUwczzrBHuKWFp1Us38jrAoynwYs86",
  "key10": "5dM6nvkcRbCN7vZDUvCZZ57azXdKRr7ofsPC8oxgWxjdRQwYB4DoBffUa4Nb6UQgSVHd8eFfLFZgudxkCpuUAqo2",
  "key11": "3iVKfP6NnpmFUckGunAXayszo5jYhsyQ3kB5iTbzEAyFxAt1MEuK5kfZaptf2EmE2kcm212oNKdCrMF4NgQ8UYtW",
  "key12": "3J4syvDKo4hWM7EsPsD6xdKMyY7XBCXNuc7kvYkg9Y9DW7AaKYVCCf8KVkKJXt6HAYmTnE24K2BbbtsrjtcxRh8b",
  "key13": "2aUcAKyEDmmWxPVUi6FjJ1jaFEXDKjJCF4rErQe7pBD5SNGpMKe9yWHBQRRZVLRta1Q6WKPEkCSsAMChZGFHsERF",
  "key14": "5TdJ4Y5BgRRxAFtDRxn7hWVwEhq84BimkvbsHw57s2tPj8SN6cwWFdwjoEqctjpH4y8cK9h9tc1jDx2GcUUJXhzm",
  "key15": "37MntyprUxkCWGbcdCBE14KqEgDAC6UPSaWr4HaxpoiK4CV4XEG5LavcMDUm2AFaL5npMYnrtQib7tLweFc9FyLf",
  "key16": "4Tfcxc8L2NZ3jLkv9GfjxtVsgireGnTnaKcugDZPocRipPseicW8sD5YxMDAQhZUrPvXtHEdu15ANVMQjYHfYpBR",
  "key17": "mSf6Aw6ggozG7RSJhuAGZ5NHEce2qmRrNpPqj9X11ujrdcKsogCNtrD78aXM1aZUtL2Rr8KRM9U4ifQm3iCxmZ3",
  "key18": "VWSWquzz9qaq4KMUWnDmwpp8oHC3t2jzXm2CPvjoQhfyvpZuni8KNNeirukbiD8FFNVffyfc934WYAg6EtLWzSP",
  "key19": "9zas2DtFSUCUWztCM7ywASRGmiVRBzCMWbNBJm5mBd3en1VUBH15CgW6PzBwmRovwWF7eU8ELn1ywoKcUND33Fs",
  "key20": "4wAB3SG1Hea8SJ8HC1XhrMTu37PX6ozTMSQ3cTik1oscRDzB8LN3K4oFFpQRPi5BnLfe7JR7RFnC5nJoKFm6iacF",
  "key21": "BuyfDWJSjDLx4oCf4m77LpkZpZFfAw8Rw5ptdqV36JYp87oraP3gYwDbJYPRGS8esAm9edUUiV22uyhKp8cTtCa",
  "key22": "4L5i3qS78wMtjKtVoPd1U92PtCHD8aSvcquWpczTYJ9R4xerAbMKAMVDP78PVAegx1GHxYYesCC3fAgSsjJGUWyQ",
  "key23": "2hrEEuCDBB5tYcmzd5Viaqjz6yzQbpW33CCCQeJGGq1LY6MeoC1ex9UuWCMCPjEtGoozZKFNwPu3zGawZsJ6dzC6",
  "key24": "3HmykV9s2TpMhhufMrFVEsLK5Yo1hs7KA5hcx4miXn5AbkcXmzTcw4qJKV6f5zoUJCtganh2mupY2v7xJMRTaEmL",
  "key25": "4xfRpKVw4HFxbuXm2XEHKtFaP1BhoYNJjufdLb896hx1781p58nKcGJNUnz8r6YPLZyXHiREsF1W5bk8bemjhgxx"
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
