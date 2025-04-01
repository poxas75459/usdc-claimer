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
    "4wsn3UWzgMVbfaRWAu2dp5Vh9WjPjKFgrBYisigRrUugDrKkbdpD4RsYXMsYGWpaxHFhCiU8NL26ykhwYsYaspb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vnc2cPEUFoUkKjgAnibAvhYWXa1to6edLCQxhDLBrygSWooGTp1chZ6pwf2NDPZ4KSJ7Z8yVMEhuQmyGFiKvkkY",
  "key1": "5o64Ji2m9NZGXbikDrDYEwoEWrjJE1wndSZHZiaisUiZfvpLW3patwCniW7r3rntB5puYZPxKy2eUrDnUoWd94WA",
  "key2": "xadgAWzVZAkRsP6H6zf1JUme3KMng8MBBpSRK5sYsb87McT7VSp2BW7xG8XUydVjX86tM7Mbqx3NJLtC3b6NfsE",
  "key3": "2a5gmmDqSSkqDG4JvL1rWUV5Z9aWUCchRPQujN1vQJsTTpPYwMXCyYnDk8RyV9x3BXHiAa16narJ4XDY8zhzo9sx",
  "key4": "2hJfxRNGimwytJtjRH9UjMLAz1BSfqfeF9X7TiwgDxamK3NsFkTJF6yPwr1KCNUESjuSuHYpkGejSgJ5SyRqATDQ",
  "key5": "4UdneSwcuPPa1kG3X6CQJyS1QH9CXdoLTMx56zvQ7ZkDkqp5chrKZrWvEQCUwU7rkWLJBrFVsgt9QfJUT12SBQnW",
  "key6": "39FZFqYCoCzu7ASQnFkMjsyahTtdaDYjZFCWzFdWd12bfe7yLXzt62cSZax2DgPBem9tHYoXgtEHQ3VXAtKdyRBC",
  "key7": "4vXSCKgUdUbcfD9d69gYnX1WZu639j6nBUs5SiHFwnh7khbQAem8qb9SPsNppLEnb47jWQGJRxn6WT2fsNXeFxCA",
  "key8": "3LjNxLToBVaPcq4WJ81XbQoYUnLzpcCuTW8Abr4eHuve7YEorNHA5Eg5XmsjRJjsksdHa8sZjDzpN19o6UUajuF2",
  "key9": "q3gBdGGvH3ArWBHVLcf4md33GsAWM8ew6htgRB95TDeVrtks9CnAgRVSVhfwUnYXwEe2xJmE4q7WCWSxXF1iBTs",
  "key10": "5j4PqkUvi23ZPMS2BPn13CRZ6K5HYBGgYEUymELspDosmEDfadpnf6RKfE84pSjut4fDV9xaAUuyqCuyn1ie95Lr",
  "key11": "2psgTS4N3MPSiDaYrDBERhhYZfywoVGQsgAMdEPU16eAFBm3kiF5rriwhLz6LdHSXXJ8gRZF7PGQPbiVznQ2y7dH",
  "key12": "5JE2ECmzbJJzoZoy7efoxSNptWwLzmBmy9rDwbo31P9xSwwyspfZhJz5w51NdqveiUmrJNy7dEoVSNwWuT4tsN74",
  "key13": "4tPEJrMcHbZnyNHfJhNcnCBjMsyjTSfmp1TSSrb9oZVeDr1akKn53YJNUYAu3YZwvkeSuEMUwd6EsTc1Y5e1SmBL",
  "key14": "3x6FXkuexzjwiWwMyx27bCUeg8UKKUJQcQUKCbQoDsPEjxHCu7wjYum6GU9bC3wRFEg8w8n1ywo1bp5F8ZVEKJr9",
  "key15": "3gjPeRjfDD9Rekr8PYCWt2bqiBmaHcjG8MnCVzcbughqdRdbf63xhngxR2oknu1FSFWPQBF18hEnsFG4sMUEbYjx",
  "key16": "3bVWnwnXrHqvB2R2QzyskR4ZpCcmRXEt6g4cgg4RkF64uFWCs2BSZxyBnFheC7VmcMUDSf4FJKDLSuecpZs5tjJj",
  "key17": "4vuSxDcDc4aJDhGz2yWVAZ49ocdUbyuSyd8JwrJWkn5xZvEqDJyPbmuRvCBYA1acqN8BuUqs83u1rnh6sYdcfPHo",
  "key18": "2aiB6isR3V29aEgpPCTipBrSizPA5w47TLeCF5dFQhqpPD6dMZsphZTCxFAqwWtnYgPKNscyVExrHLNsbbTgzj5V",
  "key19": "5ug2ixcA97FrHG28cpcqowxPgrgSamWLauqMoBp19TfUavD4y1uAZCU9Sdof83eAXn6HSBncFHdSCCYreSSQJLSi",
  "key20": "4qyZMFJmDeJX7o8wwSqXwgBhPnwNyKZ8fxjaCGFKStaein3cMDJTfCgYafKaCc9TyogcNervoBynUiWsvzM7fbEw",
  "key21": "2sG8rmEEo5bHZPZbeGtVmRskX3BvtQq7EWumhfhbFfxbsHF7ApkgSARfoMQ3UA6VK8Ubb5kTDow1VSrTxMmCW11S",
  "key22": "39xwns7ip4gq55FydCF1CjHPtrznx1TcBTy9JbNEj8gbGjTZ11P2CtdpQU36CawrPVLnuVFQuWQnjE6dx7MngikA",
  "key23": "2t8XbPRCv7tNpo9ThYSbQyJthxAJdx4PpygG3mH7xxJUgST15hisx9frMroFeNPQD3LydQUrZe6aMKG5h6gGhAKG",
  "key24": "4ET86xaLRcC8aZtcVY4NcNp532iDLmQfSnHXGkUGjBn4fhFLQTmbjU6iztFJoSnjxEhPo2WQJufZVuRpvFfP2e18",
  "key25": "2exMHDjQcdNiycMWKVmdWd6gqE13EuaMNqoRszZD6nH5SkJe1HQkKmuJPbd6fTet8GL7ypMUXPEJx9nQRNduE8yT",
  "key26": "2GH1GnjTMcmwpWm9KQhKAXWLHYGiLFF8MLfkNmorLfG813TC7TKadYEEu6apY7KgC7J5ya4TiACAdqeSrxikQuob",
  "key27": "T1qbiuWESsEZugZe5rTxrL6yy9w3MtVvhW3UzaC1RVQYeW29ERH9EKZxqU8PygkoXuA1TRL8ZCXysfoMSMhMuc3",
  "key28": "36HAtotJi4yPiFcXXG2BDMoTqchPgzzf7SfDZ67ry2JaDUeVA7qQwSmgDPTf8QZUYtNMXgmqt8taeH9ukzGmQSp9",
  "key29": "4uA6dp9caaYdjtJECVGvW5wqWTPbd5MyGvaNH9h1UZ5GnexSKP4Ya2mtmAPM6onjqqXRAa3ZYgPcNzrRq9V6dsnh",
  "key30": "kQtm9GvYdRq7ARaGLNqF4o9uXThZJwrZWeeCm8GXNRNoDRi9UNzzh115LpdjtNBme3u1PZAXdV8HMhn25fsfSu5",
  "key31": "gsrK14CSK3GXNmBLa6hKvxbBnzTS2TzgnABfR9o6bfbN8cqN3HEiPfQV1cY1QcRCbFmxFxZpi2SdMo4TnynMPFt",
  "key32": "56FHfj56k8G9QLveMvMsKUHfcGa6R8aetAx5PQkqSjVYSbdt3Tym2PGZsvhTLQtgMzVcPga6G54kRutxaG9VEjzD",
  "key33": "3mxZEG54AVYDx2GPPpdfoBdDiFw3QZgmfy7AhyphQrLT7UZhu46T6LJqzfy4mwmUbea52xM33MuC3dyG7Zu51jAT",
  "key34": "5kbGhGt4RTMoDeYo1USjxVQD3gPN3rwpwDsbgdC8aK2hqvBnm58qa8GHM29u1eKiMLkxFSuv1Sz5hF7Vyh7DY7CA",
  "key35": "5aKYDgLtSbPqP8Spq34pay6FPXWzCQykGfWZvb6FhHHCn5jjewusPNGQxR8Ju7As7DRfANHEuSYfuMqn5RTsn8Zw",
  "key36": "37m13Ar1Fu93o6HWvtsVgnPzH112A5Yzi7qEcGG2RwNh3ZKTKTZu93V9sXxnQL1U4iKdKwWH5WLoWFDgFdA3ML3q"
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
