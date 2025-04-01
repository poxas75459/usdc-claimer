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
    "4o2dxn5Jrr5zP61fhYGpGqwVwBJ2AXCPVmV6wdYn1GUEzkdhUmZncdnJgA6jJrBexdwiPqaM6PiB5s47Jdgoshrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m82D5oGjUpghM6iaRciELJvJZwFRZiur5vkq1JhA375HvXhwsm6r5hku7vdSqzbe71CA3fryeqJN8tSQhFbwbgi",
  "key1": "Lkq4rDHA4JEE1rof6pRrLFcar9JZsCb2UvfnfcWk7thna7a2HMzsjv2BXfy7Kka3BLXmv7HExkbVswJNMnhPTHQ",
  "key2": "Nau94PwaFTy3z8rdXgrgkb2ftN7MTBHrPbxiuiM8SHN1UMd3jsqQaR5tbxWXhm4kfMTPqpQAMcJ2c4WwmFFNFkk",
  "key3": "cwVEquaMzcHXPhn6fPAjxCvubn6vViZeNVitLfen43HHZBpPEtNBT8D2psfjByzpM3umNJR3KTxw1fACD2LAcB6",
  "key4": "5jAjFDSyzZSNkWkD6EYdV4sfNhqQ2t6rA8dJqF7kkGh6kdUHyNN5M4ZiQ3fWWybeDDCCQXTc3xV5mq1ffbzG7oVw",
  "key5": "5CbPCjLsRGmwgK9k8vw8pzNTZV3fMF8WXHHYd8HTvkjQDPeGw6wSXzzhvVWBqQSP32CdQKCvzTX7DAW8CmCoiQWp",
  "key6": "2wJ8Y1jJ6cak6jBPRH8JNwuf3tA6PL7MGNJ13Gh4W5uvntczbwvkAqAC5AwJ1SwxDAVzEFdKEf9mG4mPdqe86b3C",
  "key7": "22jEcT3zkyDEZRg97EohHwsAwen5qoBzZoUquPkcKfTiosuaBCS822taxDwbuEwU3bGTx9me7PFr4LkxARnUJvZv",
  "key8": "5K5UznKntrMu1gRJ5Uy5XFRd6Wi5jAzM8w9dbtwEFGuSWM54kaFEPYUi4kCBrMUPLkT18urFoxGhhhy1CXxReFX7",
  "key9": "2KKyc98xv2uVKicx2R1VB8Ji77SpgyrCXtJoHNNV2tad19Pn4GE51ZvDgMtjbFNbJEJcH4REVAMcGS7rDo96gDdU",
  "key10": "3HZ7en1XuyBaggP8YAAu33RLEDPfHWAYeh43jiMRAxwwU91AbvBSyTkrWmYtShqt23KV9bPN6WGRqZbmRuT2M3BA",
  "key11": "2HtCJTDRSNnz5Bc2HreJkJQJNryVbH3oa6QgMBGq8VRHxw3dyJBj4iTp9jb7PskoK4qCTJPMVX6FTxmPL66wfmhg",
  "key12": "292qvbPtW5kWiiMbDWtiUN1gwCHSG36s5yxVBDScaGGYfq3AaYEd5cYkoiGvWKuLWSGwjMr3z7kKwu46cfGVqK6d",
  "key13": "4xmnAz2jNBFqdVm7Y1RaFBN7dj3tWX37RTshQp3firnJpv5KjfVdkzZFEkorihXjm1iNP4sBztDMm46BqAyhRRDH",
  "key14": "4ETnW7vMirRep66ZQ6yMhpKAFGF7SNvUM8Ej2SsoWVvX1BJ93gLStjnV7SyfKVc7BPb1jdXdqNdG3X2PdhXmHzDV",
  "key15": "24ZSqC2meiW4gbRJVtysvics3ron3Qm2UDzvHzu5gUgGUFiK9poqJnKk6wEqsLtWR8spQPwrKW7PNykW8zKYzPJW",
  "key16": "4PygnfUmsE38PkLKCzEbC9KGcr3pNN4wrS3cM1iGxs7GgeF5zK6PoGGiwyANvUqZfyg1tqkXiR2kArTYJH2z5PM2",
  "key17": "N4D8xoH2y8TRWi6kdKTUdG9iHupPJo8ZK58X6V9BCK8cFicn5sxUr6R3wCwTtcAiguTGqRnSPqBL4zWPmVd5AHY",
  "key18": "4zF5ixChgsiJT7oiZQVzWiXp99Eit4WkSsMVF8DP8FofmJLaUmuJecnYEJbwQEhj3X1f7eLcghuQ4Pxmnk3B29qG",
  "key19": "T6EL8i5ZquUcvJSkLWf14nFuEA12pVkNpuF6PT5jK5vMmXJym99gU6yLiNxxXX4NL5heyZqksGwUuU4toZ814zh",
  "key20": "4sBZ7nQd2zVPDUqzgguPzuYQWaU6tZaKyPCbX6k3i3rrmYdsLD4Z8kaPQPKg54Hw3w5Lg1LW1Z7BqjiRwbZmAvMV",
  "key21": "3KP6zA2Bgn9Dimd32Pfxu35cNGNx3TWkQvAmTbdWjpkG1GMbBQEmuTa2Gb6ibsEVGBXTH2BZva2roeeenAqZseE3",
  "key22": "3uVwwUGaC49QceVtLyoaxkhjDiJtfFNjydhTi9JJME7Ag1h2YNyBuRrv2JnHrFBoSSdacm9tKRMjAJsmefF1CCrK",
  "key23": "AtQBkRD2cxQ3xsqza4Ff5fMfpc5rPP5LdPLnococbXrBoMwhv4aCqQGkhW1JAZWHfpsnSjuHpRbC5Kaqm8LLUL6",
  "key24": "463amsmonAwogRq3n4yr1yb2QFMfgUCpSrGRM7XLtuj5sez2m1HdUSTmXeewLiNbAuQesBjKE633G5CE3F9jEqcC",
  "key25": "2oJvEYTytvVB7fjrS14uyXPNwoyAX7cYmZWCBdQCQ2LQQ8WJCQWu5R1VUskYvKbhnnoCvid9eXRGGZkqh7KMnRai"
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
