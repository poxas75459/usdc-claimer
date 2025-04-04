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
    "33HdFr4spi9yjnif5Bdn3HtBV7oBANj6L7qAzp5rsd1gefSSRpNeYRvkJzc6e4X7XxzisTpr7MYojNAbXFQbnpFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Hyg6dKB9Nqq1xmFGeQDwNno3pyjgJd3Vti9DadJVxRaqGHV1Cuyp2qK1YB4FmDjC8sdCT89sdtxVq3N6edhMdY",
  "key1": "4rVxTZwbnUqrMxPF2SYEnjb2v4ncL5gWraRvg8BxM1Gpx5ekzTEBpQCVQZTfborbCaqXZwxxhbF8B93jVc5c6XM",
  "key2": "jtyDteTcfabgWDkCUxo9tn1ocMHDKBDjREJpBJZiMwyMerENpLiKouGF7gkVp9NhGWL7tBYctaP71kf1vtYSzPV",
  "key3": "4bYPdYPck4REKGWybDHRD6Jyx1aJ353Na6w5NFqS9VKKruv1o63xteKaq9dCrP5ZMdzdd5JbQBvXaW8TrLp7AgRC",
  "key4": "3upE8UNwzrL2NZ7e1VRwFU2g5s5qwC3LtSCjqrGrVCtTifXTC8dRJ1iEyT2G1cWbijwMdx71TEraRPHWXvBziytx",
  "key5": "5vrmhoh2NJ1Pvio2vxqxmW2ZmE7t1Cq5EkNTqcJKRBw2k7HCWXYAf4d1yo7PsXYAnX95sfWF7N9QS8rH5HRyTTmN",
  "key6": "514JFdK3tiGVSNESt68DqgeM6X9yDBYBsfEDfddxhYQdagBwKNSeHXsWfSNgf2NT3nCXXLps46QRR4xWwRFveG5v",
  "key7": "2XRDsWVni1RC5g59kNR6owDZChYNTkzW8GBozUuUSR77vcio8L5P7eGvAxfNzFSfWzRSJbFtBnwMyjdJAJMpnuGa",
  "key8": "3Z8JoWo5D87YL2dihJttJGkJhLL7QFjmFpbS7fwJyQEE6QwiQDMWLp7tENpzXVaNJYstfBqZKjFZynupgXBbFDyx",
  "key9": "5fbhL2gd2Eq31S2wUQPKHRsnYWm3ToP8LCPkPsDawjouYyv7rRbVo7VmZMns9TQWTEKJojrEN2JnPF1cEtsGVvAe",
  "key10": "zUdWu8uMkPNZpuxCTTkSLHhCJfyzrKGTqsjx4rgjtqgga3pJGNsqENNYcQ1sjr74Xr9ojSGWzz4d6PjrJiqR6hv",
  "key11": "C6dkg2B7hpyiqbYMKyDy5fFX3M657dMcv4wxD3dTFwKpKqCYdM7eMRjW5Hm5gFuzScybYc2vDFQ2sFPjTbDyTa3",
  "key12": "4f8BcDz13Qz9iPwzEaWHJe832PovGCreAKzmmbnF9CSFSR5Ty3R7crx4sysveXuWth8VzTsbxVQWtMRVoWXiYiAS",
  "key13": "3K4fyY9gB6jiywPrSh4DEka7cn3n3Bfeug9ey88ZpMT9jiqXp76AW2Mfa39wC4V1rC2wy2X3J44iPFjHaVAEptAF",
  "key14": "37TUYCD3tV2jytTkn7T6oUQ4Tw3SUXn3afNRRZK6qRDFQ7kgWtBg7bLXyXKepEVTDczbeRxLZCFitksvjNMdNhrW",
  "key15": "3va5tAV7q6EbKF1Wvyf7FcU4eNneU1uS7Q8L8A38bSunqy6VLtFqotrB89FztSsNCXXjNTgexWHmnW4jBATH4Wck",
  "key16": "kUkYXm24FQXKCz7Q5MwyjsyX7kP7257SQPtwm6znpYcuqJCx3KP47yd7Vm5DfHRT6juq78YoxP1y23LRaAihJ8w",
  "key17": "2ASsiK4toMWa1cbSPdCYpjFMstz6VTfgh4XySPMbuCse5VQRMuiuLQXaqmMUkVcKrPFiZ5j8F1RCAn3Z3ZgTTveZ",
  "key18": "5ScoxKj5Q14zWbbPY84C34hGc34tKYUhzgNjrbEDhM8Mw6Fp9zZpDdw2WT9GRxPGNTDX7kPciryeyJER4oVAAuMa",
  "key19": "2St8F2dqwxcfbJrPVkqqq1VYMMwKRFAN4H4p6Q2aFAcnebzcJrXmHWbgFq2pYJs7pijDFa89exZ2G5pDjUwXZ2Sb",
  "key20": "53jcLVt5iUt9ecTmaCaiofgfy2y3satCBxKEaxC6FtWWvRfXH81kADYu6qq3pibEh9GThceZBdZVJSSeuPSdqMmx",
  "key21": "5RkV3akuZFgKcHp9t56HGwZf9Jh7TEUcPwMraMY51kZeiQBng9zN13VChds9kPuTCqZNd5bgwQ1fThbqSxRpuVqW",
  "key22": "3cgMGt28BovUk8yzhwD15H7ZLZEsN4o69NxcPaswZWhxxKGEKuB9qPdaRASemJCmgAnRCqrnS6rAHCqiJ8tmLUCp",
  "key23": "y9zTTRRiBEECn7teTYLFMqTrauuNW7TZYsPnudgPpPnZLWFkUwRaBAURARxLWw4jYpigz2kSpbdKcu69oZR8kgo",
  "key24": "jxFefmhc6roeC5n19Q7XVZfTejeJiL4w1fr27NPEMUQzRzhULQn5dMBjtd7ZWYgMaB7SXSzGiKSAXchyMESkF54",
  "key25": "2mzUAcdnUqi6cxVLCTE8S67wxCjmwDW3K9m6mUYV9FjGtS22KirNXJ5sYE5WKFcqnZG77ZTwf6fs7NouyMEQEX3",
  "key26": "3CCupFkpBbwbLgreazXh91yRyZ7c1F9S2tATc33JpMWxJF4dWCQ5W5z5FCz63bT9hrLP9ewWBukHwhBJiTvUe5Ra",
  "key27": "QRnWkTa4RXmx43p2DA5fipz6A4JzssjVXU9v8TPkCCSgYsdpQzQNxfx2vSR8V9U7cwaVtgsketXdY1Zymk8FaVW",
  "key28": "2MncyGZyJhGMJ1Mp5tYEoZoBzXmDjcSkydXsmPoBm6PZp64czexkGN7qYvKYFuZUn5wj7z8mU1qBsDAusVBhF9Fi",
  "key29": "5Sg4GmYDkDsEuAqVBnXhMRRDWLmNbSfVPHPedWV7FzsU2512VA3joAEZqjQmALnRGCkp5Ps1s1ahroXg54W5F1FB",
  "key30": "3GfwcN3k4RBtnqrTnKKVxi43vdAijqpUPuSpKsuWy3TEsakMSr4MVFe8xzgrUuzkD5zLBW5cVturMHQPdygAnsNr",
  "key31": "4umtKX71BpDT8GyfPGSaoTdt23VKxwur8FpCkpHceRfWaTKpm4HpzB8LtcXWkNCZuAZRykk38Vi81croNqMEjcFC",
  "key32": "26zum2vjtjZ6TFErwd4gWBDa3wvrSx7bZkSSsFPCo8msfh4pqK6VDYE4NeLYvoVGpJ7DoHMeWVuudKQJCWe1Bwyx",
  "key33": "2zU8tAmjN5Q2VpMBpcKPw1iYmd9vRNxMotfnTfLzg9JG4DYxpadBBFEXoELJrMA1j6cYR5k8tQeX1BDUDq28cwih",
  "key34": "DtC4n2B8DgDYVyWEjjtNXzXgya69sJGhJdDJEuMTp8tGccxbZMa5HvJ5vPfr9EUcVENkPSfiAFL2xe4KkrQkEtx",
  "key35": "PnNYVfYAucbYvpU5GStzgFTqXTgnh9fPuCRoGnVjM8kgvMNa5a6ScShSUgWaRBoF7ZCZr51S8xeb32wiRopLhyx",
  "key36": "U762erN8oY1KR6T5ymTjS6Ztim3uoWge9Ludpd2j3HSmnm42YZxWEotVjuVxcnmjp6QjtmxoanxxTpckSE5A6sa",
  "key37": "4s7tfg153NwZ1u3nighLZniNXYK7MbgKXq7rmbACy85h9qoCbQcC6CPVCvT6tuKFrptS9cckEQjGeEDV7X7biW7i",
  "key38": "5FYuz2Pe7SMfdDBG2SQD3sMRfBphTc6dsBhG7v7bNpDuYMbxUJMzmEi6Ynnyfk2RycUd3NfhZdSfZQaaWXf6i9Vp",
  "key39": "M1rZsXh46CrDMW7ZQH7yKAzWBxkHWDoEshtcWr4MBey4b1WX13YxkLq1yVqmD6eKGRLoMwx2oc5UJy5HwJRXUTv"
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
