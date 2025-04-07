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
    "4U4mBBxLLYK79nhqGQrVghn9QiE1zbVyGYSZd8Sj6F9G3DGRKCs1d9MSNjTgPThnPLsMFY4oDsDkydviouBxCvfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dEcXCi7fipKnPanaEA2TCxRBgUuu9kwpDPUBaJewSUFzAChGLyExWiBNrur2PHFaVCu5Rywq1NyRGnAunZ3FBsQ",
  "key1": "5kuKD8hjDthQweGrZV5qFRkfz3tJzQnH3amQxVNaLU2wZGxTWjwvjsTcUtVQDK17umgAEQwKgyRAxaxXrKpGyiJ1",
  "key2": "5kYbstxdwrGFSbiYvgNNRf3oFB2RteGP59i9PfbwocUeSd2sUyyp5gsFBpu2pNUTCpV8v1x8thdZkuasvpkamgNa",
  "key3": "3ENz6t2fLwj4f1tuwfoexGb7pjhpAPqCTk8nQqjDZY2pc7RLYk2dhcRHw5sLUdTrd9iKKPKaR6J54X2VfZf684w8",
  "key4": "2KhNC2PQP4jaf5wycod19dVj71exgTube8jKPfvzVMjHyjWqF3YKavVudtsykXF5sFnHqbCWEpVJmaumHCkp6Poo",
  "key5": "sqxKJhWr2EyqEJ81QtzwJjGkPcbshwJMHya4jN8hrB4NG7hKpfRRckbVQhMQjNk3bD3MT523Az1ydKPQTNtbL6s",
  "key6": "3aeGHjHbFC2S6t49PXxh9DBHKbu51nqmkTyaM3abaXD3K8hCSTYLHnTATobrC1y1j3DzYMQ6MRpyra3EfscHDUSc",
  "key7": "anSWftePRv9otP1v5uDtmzN8cYY2M58cqiB8C6WruZf3LNkmvbjzYyuRbm3FxvWqwFpDckuB7JoUQXrQDJ83bQs",
  "key8": "2G7H6Ud5PGWJRfmXYKMePrW9vQX66YKWkgCDAoiw5V3ADVjaU3FHzoZjnRJq9Ab6DTK8gFb8wGA7Z1bybrrmoM4u",
  "key9": "4gzn8kG2g7VftqA7jbPGiVuc3JFujabWjw3S2Zu8q9KDRr1GXV65PdeXcksjQvzQNweigT82rKAe5Wtp9BctDYw4",
  "key10": "4ZjR4XmwoNqoroCJ6iRNskAkG2aYSifscpHPdrBYZGwGECdoppS827o4sNku3Ptfe58ChxQiZNBdt7mfZn7xRjZG",
  "key11": "2dZMURzo5BPM4n44TiDqyHc5s72BnUyK8FDMR7E2XSkDYzWCSLKeBSt2VUVofJnxV2Ldb5K12A8R6fZn11DtvGRr",
  "key12": "5rfcPCJR9QchV54CNvoek3uhpgdB3vsMuLPvKEhDma2mWGv31By7h428w18EsPejTUSnZVBRfRpZq4xgNujPxp4F",
  "key13": "4HFFwSn1W9RrLWUWg7dV1mzpWSYzxq1eaBycWAuZcCer2qLts1WfzAwhoUfB96KNYe9V1ucQpcJbvjLcAqEcz3qm",
  "key14": "2vQA9hoWeu2sCYdVsc9eExsBrDbycDoA9GvpR1jbFaQm98M3bnsJxa8i7rcj5G5ewJ8yc5frkHKyA4X7UJbWcZrD",
  "key15": "2NDHBhZDhvECTWLZSJGuSe5CmDaikkQcUyyzJXps9Erp3ZQ3uewKzDJZb15GvS3d622mLPXY4LcRP96paECihVvM",
  "key16": "7vW1yad3SzDrxyogeqkDVGnP2g3ETcaTNuiN7jiXdDP148cWaj7A1aM1zVVCmhCgVLdEPJT5ZuyCFAZD17VmZVS",
  "key17": "5NXMdNzJzAHwqf5oYonpM7oDoemj38zt5BANbL3BWEWeRKRvcE2U4gjFQYk3XfcAdXjxyLTSNP5wsGEsmnRFLyLA",
  "key18": "3nmaCnAYNy6HtkoVy97Xbo6FLSKV411prhUKphjbgo5UNadNLYTykVUNeXV4CgGZSj7arLRZJAv1hCz7xSZiFrdF",
  "key19": "2SS5qbkJG7NTUvf1AVXY2Qu41YfBaGTr817RRMpzBRV7bo4gpPhw5F3YmkVEWfwTPocwjVYnT2SNKHTjvA9sco46",
  "key20": "TtT3qgyfAdCDzak1RQXSHnqvHUp1tJL3MqMzQPNHJKPRdpUoT8ytpxNPzzbS6gU9VfgBxRwndrCe2kCCM7WzHgT",
  "key21": "33CLhGUAbshtQLKap8ZBoq3gkZwjtdTPEAZ5RdCTozd88THATQNFc8eZRSHtyT5ci5WEsTYKsU5dAF2zxWZgBQN5",
  "key22": "3kiJqjGkREH8iHSsVd3dSddEpKpZ5XaJGigtfzjep9wNvnhBdNaZ8sp1oR3pe6zdeQvjBv6sijQ2yH3GMjXe7XDW",
  "key23": "5QWeVf4dE7iHzbF84Sw6ZmJJbSEHqBePkpGSdPTfR6BALc4SkTQwgkuMZX4ZgyfdwHuSmmA9bftmAavGuyUbwna2",
  "key24": "3Re7j2LvrCHAtjx2BB8HhXSZPtmFbEt4uw4nXt2EexCvVFVFqbfTYXsU3RaY5Ddvf2bNNqxubPeu4mcJzUnH6HDE",
  "key25": "5HavSVRenTh738Z9SN6dZj6CcYYLqdZ6Cfasddd6i57novReS4iXb8CKipuQdwihiCocQBnzygtpMZvpmJPyNXYS",
  "key26": "33mWxk7rEh5on3X5ZtLDFoRheQWPYbq6RcC3ea6Br6PMRXshNpmzj5JGkpjwsa1Bb3ztr25tCWuFwTdHaY27FQhq"
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
