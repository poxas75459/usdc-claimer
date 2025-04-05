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
    "2nszjGVCwRSHmhLGVdLzS9s6FegU6dy4DVmzzsoGQ38qsQq1j2Jx6Gss4w4T5BDjFt2QYvFvX4WKKMnpTcMx6oYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ozhBZTKVA388ipNdajsLuXJ7my7c9Cgmeo1bAhKXBxRRkB7kersGd8f4U8gLXDkGcvNi8YXNxZG68UiaLEH8eWJ",
  "key1": "5YNYk1cFQL9G61P6tPugErwHXFG3kU8JC3RJsH9pqkutXsijHPVCCpodWiUM17NbLrvhnHSLzGfMbzL4ptfmEGqR",
  "key2": "3a2sXQLKsGmFqL2eFKHQdAc3uMe6SvwQTcHvQZjrg91Kkj1feY2J93mmGeg8DobN52rfTNiSUYxfxETTi57bsV6j",
  "key3": "2XDo6wJrB1jr9DcT13Pwbe1vtc7Ta4TmR2CMLv4WMRQypdtjQSuerg6LSjCcksd6Y4wd63HVM76PZmeXC3ftz8an",
  "key4": "59En8ucbxLmVZKtrQE4ctMbxQJQtiLPY2gFZEq228kKjNMYCu34iJUgchpSeorHj3C7oadTmhkLbT9eerNHfcjqf",
  "key5": "2Lr9vQfgs9VhtCSENVBm36qaQUVKN6M3Fcwq4aabJ2zNkFFmz47pcWNmzBK7XUWmDMk7PqDv44qCLVqpebMzuVfr",
  "key6": "3vJjhm7zZR5f4xTXLxz9DRbHJ7Zu9kMnUT5CM7N9E5qLxvXTsgsJRCW7Cx4UvfCFzsfk7xY1dziM6cwcFw2kZf4",
  "key7": "394VHvFqAhwHqniyHzMDBWerq23pVhffph69vEwhFk97huD1xrp8AoCd9NZTDERvCt7k8U6TZATH6DnS9hTu7uWK",
  "key8": "1rvzk4WycH68q3abX7fiaEvDQdVKYswm8jQAUKGv47ACBXFtxMRjD1xtWApRDufUU5xkyd32itUFZMsPM6mC8K6",
  "key9": "2YasZBmBjtknZQWVSzv1aDrCcVAe3VdXd7KPzw6b8mZ6bWYW5ZrABT83HfURUD6PkZ1kTJcKo7FmsmhEXgDipNUm",
  "key10": "9LGDFnmX7JBKL9qt8MNs83HgHNorG6TEEPySYP89mANfmkLZEfJexu5TfEk2xZ1vefEDcyQGrk4szcs28dgrPTy",
  "key11": "5VeMKmA5Pg2GYVaCqw71nr3Na8tohA6tmFGcBJaxvMPcqHX4dPVUUrftHf24k7tianyN4yvzzPjLRTfNuJHGfpc3",
  "key12": "esEvQyMTu2Dobjdo1DQkeL7CVzqjZZhWiVZ8wPeZaLzUVjUFoADg8thBS3Sg4usN7W97Pe6wyFVWbLRMT3mWQNW",
  "key13": "2T92T1AiWsDbBZVECgsCdd45ZQHBGSNeYLddt1n6EcRRNv44ezaGcyTeAML5ANSHfUGGhmKfC87oeuBd9sesCZVJ",
  "key14": "Fh89LRuc66brusejRzBYDfmq5f22X9jb7b1Uet1igzRP7fQzeoJhScQLjs712Asari8QYk1W3SaeP82xPKPmF7C",
  "key15": "d6tMXV51f4qmHvoSeU7G6hKyGWr8n2rCdibWrnXT4S3RujJcP3g5mzYT1pUrCBFWQSDY1HhEZjd7umSVfbW9PK5",
  "key16": "5rDKwBLkuNzqsNwRTThBTrsoUQVrj98DGXg2XZyWrR8ELtGLusFxvcEY3NsLHJV2Lmx6TLW14BhAxEPXdtzBGTMH",
  "key17": "2epwa9RUx32Dpx8raBoNcGJE3Dq8heKvnHeKo7orndgyJNHRY2YPn2t4RNFZFK8CFwjKu9yP2s4sVbrxqKjwhpo3",
  "key18": "2f6trZwyUngcDzXVx38FRkSQBdKQ9aGMoDNmZNbwsBkkGFZE7hoiQ26LeK8uoCGVEuvj1rnEwwZ31fYT54QLQKrg",
  "key19": "4ueFbaJpuVL6F3xouWsirQ679nAfxpKt8gwFMmtykssgME4cYPvpbpgLynFLHuZmXtn9CvHMBPwHMqGRbAWpuWuq",
  "key20": "4v56JMiAqgeN8cdCNEZJfNGvYcVgF8457h5oBGDSQdFUrUqxnxsd51BgVLebZ6Fw99HbMWVgyf3CYv8iLatkTois",
  "key21": "3uYCHnNnabkeCxF7MddEzKGtwDnEHY5bp6Yu3r3Kbwyxtf2zsKkSuhf7fUX85auxTdZTGRx85eonZTA6n5Z6TmLZ",
  "key22": "3Rj2oLUuRXTLiFmYaRhvwLzVSyir3siH74Cna7VuZrNR3QZNXNK7PmgAEWJGRSb61cTCFFFA6EtnTCSFzLy1DRkP",
  "key23": "5b5LKfguM8gwZjN9Vi1oihTPHNPNwLMgTDqsc8Ng7MH3tN5vTvLcyDaAg7ea6vhCGXKKfH119tpCp4dQ9TUuPTLw",
  "key24": "5Ze2P3sYWXEZ3DXEiRCR2vFkBLCJWS4YrxfUNHqQ7SZRm4Wxwvinipzr4fnGxNZ3oYoWN6sLmmujU5LYKeDiLt6t",
  "key25": "34Cad8Lk2YVBd4RC9r4vvM7FjcduF92ZnEvWVheuZUwWHs1zagKaF1yDBkdd66dahrpZV7kMWZG7heGpp2bB4V8y",
  "key26": "3fAppkQTpokLGKfdVuRvh41MPAREt3ZbwYNUHuhJxWxCQ1GbXveoAfjZUbSE3HBPpTRJ5PMtSW1Mp5HiFd5x448N",
  "key27": "2sYDGbHp1XUNFM7Xvd9qWg67tKD333LwUKE4JHjm1Ndbdez2MutwsCD7ReY55sqyHWNxACTc6nbtsed15kSL6V7V",
  "key28": "qVTaymizFbK66PdPnY5FP7y5EqjC5yjixzugUE2ufBUNX5vKJ6MnL9s8qwyprYeTuYmB2k6tsRt5EyJUPTAv9N2",
  "key29": "5RWixu2MczrjmUtcK9YvU6ae9i9wZsicAfmdhKPgJNnjC1f4aXohVa3emonveEpQZZPTy9KofeAPBmJxFMx5mxRq",
  "key30": "4JWRkTPmFEEsy8nzcFRGUaK3eBUeKkWY9fwVeGRXnckTG59p9D6o5CQ9vw1uNtKBYsBWBjJuPchTFBAYLx1TESH",
  "key31": "5kvRamWK1hhaKjYm9e7Z9XxTAP1V374h2sjVH9qdvXX4s9P3VP2pPgKG3ve4XG3wJ2CR63qCJVDCjhMfvjN2SUjh",
  "key32": "4WW3eTg4qhZrPSJnBN61RaqVBkLDfxLgfQYTPH1pjqQbRnXsYTz1UJXTJapyVvLdNQALoQbLRPNhALCgSBd5q8nR",
  "key33": "4tLjD89fxQzEjG4oDVRgeTM4PZE4eWwX7VpNtSJGe7WUCXdfo9x5T81Ftrh7CcxD62LeKzXKB7thE4Xo8Kqf36mi",
  "key34": "hHvjviRciHtueYeX3bn2ZoebFvNbMGW6UrE4sJjwHxtNw7tFzcWzWyTUK4TnfzeceyThbujkKGzZBGSmT1q3YkU",
  "key35": "5vzKwqKrLYHHYWDJd8ayqpwtugyDqHR4RSb35kkwzn2QUb2fXq5kD6pYAwiR3nh2XNEc4Bu1r4HkwdzLUZMnPT8k",
  "key36": "5tGt9T2z5h4bVNBvjRhv47M9xRunKZ6oqHYZL8iw5yCMFPTR8shXNTw6vzKxTBHRjMinuEdxa592FRzJBXcNk6Pf",
  "key37": "5kKByWXwrq2jJPZS5aCaurTEyhyeaCWcAPgN1ZCZDhapB8XViKoE6KxmNTjKogEYu3tLBW1XBkunC4nNys3D7W3W",
  "key38": "65zkyiXuA5Bjd589HPovUy9KGt8JnSmdegu5F8Tx9CDgZoCgxASZp5C7VtrLDZasxuu1N2gmFkxTzLvgv1RHS19p",
  "key39": "3DyeDqdNMnZNajEbMHnmBwUdeF3MPR1naZzvMv8KLvCb7RfF2X1NTgcusZzynQtXzHmCWvCagspgNvTTLnSgP5N",
  "key40": "3Fzyks2hHJaWoHZ1itC1jw5Q8r3PwfK5TxM7oZS4HLA2aSYD52zk3NJBNwyvzPgNn5ascBs4sfxa8n5bxAf9vJFp",
  "key41": "5rewQD3tuQLsPsVu9KtRja6zRXfoNsX16UyntKRYZMcLfeXvr4ZYCnUgjQZD2WT3iW4eLQNjvucrydpEzPQLn4pN"
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
