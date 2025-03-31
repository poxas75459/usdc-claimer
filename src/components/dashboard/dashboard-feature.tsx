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
    "4oEHg8PHcya4og8j23UQsN9WtXEiTcjFeHcTc3iCKDAmh8og2XUhCeuRu7EAyDakD7Z2vscjFazi8mwiA1kaEbVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QdhSMmXN6ZAB1jP9x6CLRYYf75UCkZNSvktZ7NjNHM9vxqhXB6gwR31aFJboUnqA9mJBy34NTQVHqZPcUtzSq83",
  "key1": "5jLSJSQ5PSbjeL3o2PrMw787NRt9idmiUkQFXMeeXetHDSnCWt6BgezuwhojXvkxHhdQUAg4noHSTTTZJctG6VYh",
  "key2": "2LWFppP2xkQBxVswW7HGF4AJUnemcjq4sXotQFGdm1uwxC8Ex5Z5egBn4aQeNr7qREPA2WyvnNxn98MuLBSvcgYG",
  "key3": "2CnBJj6Yc7vHcAjfwKc2eMpib46kF78VPQ6BhyJPf9kTz66ytWe2bW47aWTLMJn29pbyQQRhK1ZWBvMFPUHr5qA8",
  "key4": "2TRWUJiaM3d67kXwqgct428x4V2tTnhNwsiApyYHADU1GPbPEHsdfQ9kzxssvDsD7VnswFTUUP8rYe99bCwfgixu",
  "key5": "2xXNRdn4z7rp2BC7a31QYrKDCU8KvycsGnvYeUuvXkCa3RoLc1TQKHWxd4Fq6bXmPA2Y4MVh2RgMNfteqpmm1dAk",
  "key6": "2veniTnY3jmTksiobTxTYVXdGoYqyHpLyEkJ2WhVPKYoz7PTP7wSXr37iUTLkYrB1MkvJJknuAX7JHdVjt9khFq2",
  "key7": "4PoBDJb3CV4PFLEdoxBfE5ci13Yt7ZgmbosRdvFHGygDNu3jaqjy4NWz97cFYjoiVtydgmZ2ecMF7B1n2NS2q11F",
  "key8": "4PHRZTLCgbZKR3To1qstrkWa1MDJnrVhETzVcjk77rXXmrvfxWaPPZtmDZudHatHi2MmA9LESkYi3yNXj13EsNYr",
  "key9": "mc2aKv8HPfFBHoxbPm4ZpXgTNbeAYNhZT8HnMRWwTF2vMASj26qb7A84uD5NtnFQTxX5MU9Bsd1NMtDyn8SrQMk",
  "key10": "27y8jryi2r6ct9hCuXanCEJW8HPxjcX4ojNMUUSsbJXb4ucBci1PAmpFQoZqTi2s1PknaYmykHsjv2fnw35EQn2Z",
  "key11": "4MynBLHrTt1PsjpFLSzMGtGo75Qk6Xyns2GxU4X93dEguT6bGbYJGtUW8pDLJXxhsV7LhVcRueeLfDHGNJDuJZST",
  "key12": "5W74F4Qcw2UoMWwEAquxWqvPPMUQoyRSYfugKBPthzbEhL8cqu3cpaoGSUmKg5AEi1ZNRN39VxsWWCcbinf9KwNB",
  "key13": "5dfGczpx9aPtCZVqsQfcKfTuQXjerPbKtD5RAuYwEdmeZabVaZc9MmLqBH3fu9damvP3vCr9jfimN9bJhQhNxg3v",
  "key14": "2HGEDHdp2ZqEZRJYqjuMWZxAPDaBPK7ZRK4otsb2PmdD9qbiS5feW7mhoiZwSWWBP8up5TDtPeMq6uQLnJaPjYUF",
  "key15": "YKMjgZxEAyrEY15psddHc15tGXTBY5Rz2nXdW2QcGPywpzXGrUdGy1o4ZB9RJTZU1ec3CCrRLcZbsXzjnGorgS2",
  "key16": "3ScS9KW3yhYs7uHt85hCWaYBRKy5eqzy1VTxoDMkHKyqN6ZfWJZh5F2CKv43RdCAh6ZAZSTE7joJ6KZKeAJfDLbf",
  "key17": "AuFyYXR8TNceZQsZCVSjAZm9q5APXYciz8WbNRmGtWTJ69fGLEVbakhXCLNHMabmn2NBAt8pAcakNN877UENawh",
  "key18": "45AHDCoLRx6wn2tzQCuGrvNGiKATjy85kxxpcRDV4sZsRuSoDVjEyqFmENGreXnbe1vX3r8t3y6CxWsEnKzdaXJ5",
  "key19": "3GzzWaiXgCXCWQFuzyCzXamPw3sgF8TbQQHw8morVVxyLtWx1HtMet6pSYeQE76kqrHnrKeZGTHZZ41JbHhq87GG",
  "key20": "3g5jtzopNKHvY8yvUcwyziV8YYr6Ff5g5UZdrkdaHT1rv5QHpk9TdFWNBQkdLcrqZmx3oeZzA6K8385VaFqcAWNg",
  "key21": "4BHLRsjtxarvzufjkHf3jPYospA6cZyfYX9APTCm465imcB8LcuLcW3jX5EaGcZm48JpUef5J4HGvmM26q3nLSxM",
  "key22": "4atLr5FpFHUAo237iHGESSM33iHkmzKr3ou6NPWfVHSeFXzhHFJy3U3qmdN2jVYQkKaQBNJ3kaWFYxWPWU2ajPu7",
  "key23": "S3gH4sbQqZT36kDDRa2xZfMbVVY8ND8uA7yRiDeFb1xcfxG2vvGopZFw64TX3qD2RCEkFYBf513AajB89apSx3B",
  "key24": "5yys7ZNPsSPWo345UBWBBP3p59EJTJtQuLspkNtnxexGLZKbJQSwk5VMCmaRkWStjLKK6hgCX9ti1RWNaJbQbrLK",
  "key25": "4qLSRo613hy17toqT7uRbNPhfYcqXcULYR7Nn9H1hoTRU34A41RXjsgV8MfzHiuHfCg17onQXVwdibhbCaxbbDvs",
  "key26": "3pT9r2nMkzK9UUiQfvynK8wn2J8JqvPFgk8iRJVbDs2YbmhPHU7GY1D8Pq9mRkQCoG4ZjKXNznh6ZmCrWVnc3mLR",
  "key27": "2MoEUe4f6TzHhJnhBghCoDXkjuVPAiouNYPCRm8n5t87NMUZw5cZdze8D8s2F2pPh8ScTzUJLgsKzgxAdePkeAfE",
  "key28": "4xZWndrRMFYJRhrKc5HEeFXwaYzZKntM4Xyu5GpCtMVpL8H21raeLt6b776ExiqykxpDMeJvg6nHcajVErgztnox",
  "key29": "3E1xYjZ66h1jwsPC1eEkJPPrNbW3djxMJgRtsnYTdHJK4QauQYVLNHAykp1GZbpeLkshPqr3gTkkW799dJP6TtJ7",
  "key30": "5DDN5zJGgdx9TnYm7tXNKU6oFKLfUNvMQAqSTRdQtSBsuBams9WRWw6ckZnjSwkFAzXEC74D6ZgS3LujgxQoqwBz",
  "key31": "7NEYjxiHNhDTY1AAQ7189SEhaE2h3rAVZjDNeZygRHntxGyVtvUoNdprvzTG3L8sXthj574cGgdQdxgAfBW35gJ",
  "key32": "4bJBvzBBj8UpYgDy9c6pTPTa2HqNzyecMgTudcPd1np24CEuA1xBpth7iD32F8iAa8fvYEaqoKwuuxwnT6DcKgwM",
  "key33": "3CqoNeavdtn9m9TZ3u3k3ziZqxQpzZWhNBNMVpbKMfWXSRLxZKgTfGYyp5fBv7uhJBBSFwPD5HkJzRfupqt3cTEF",
  "key34": "2yZqtxsh3h28GS4azSCoCDf5NX2ChogGZDWSutzmzQH85Sd9JZDmoVYi8jfanX6DjrMUvgzw6JL8hYz6kzqpkmtx",
  "key35": "3f8FWqubFYmQ7n4mTWasiMAt6dMAT6nZDLN4gVqvbFqVi3yEiWmV9JVC3FX61msrcfPqW5nRaaqTFfttJyp9J651",
  "key36": "5y1yWLAcTeR4xDRgUUM9VRwM7X6cCFNjsntiPQjzpBfUovacWJKHSUasvjsCq5F8onX2FXkEoPtkcZUfqfA4Tuok",
  "key37": "5ATsWaeGjFhYLop9YhD6WFP3oRrJNouhdfuem1GksoW5oZ5ncCeDKJoMyeDGaP6Fn7Wu5kYSr3BroE6mRtd81PK1",
  "key38": "21vBc2kqdzDTxPNd3ii3pJM6VxVmaoMsMmje1DjNguvMQMebfv517gBQJVZoUk8KfhMUxESozHgkGpVcgEiQk4cA"
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
