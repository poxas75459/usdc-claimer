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
    "3Pn5yuAR7BGfxx7BBbdQDULNbGXh9o6aiAbtoFx4fVEmgabbh2sVSBHLhbjeHtf9gyvVMDYBHwGeGvTuv8abgH9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qjf5fcLBwZRWDNRwS1hU6eVSGPVx5P2tPFCHnq5hkn7C7cfYDcxTUm1mFpN5xLHe8s9YoPWR8Sor687rXnF1p4M",
  "key1": "4i4YdQmN3Rpdzp6DwwuXdr1vneiUGrasYpdhB18wAKrY2bpqfyFiuPGSFCHHnfmLyz2S1bAQevwyLbMEsz5CGCXK",
  "key2": "2rcuV8FHgNwHDA8Y5apkzxgCpcdP6X35S5ucrgASjxEbtHroUo2MZKktLYq9g3vTytApqPC7iQowJPanMudmJTBF",
  "key3": "3YgarHG7XJLmFtme1voMGk2tATn9231wvp5krYhiAjcunUELyJ7PqpUqv4NFo3UvqifZW9sBH2WtQVnCPWUL8PQ7",
  "key4": "RWT5qyfT3wArJJ7BNhsdmGVXV17B6QfcuJEbtMe79y7tn1SsBM9QAGJzWYtzzJrDCH2qLHFKAWsWb8wKavp6zy2",
  "key5": "66c9FYssGM8KqRGyfDfDwYmomS7mfSvnvQTJCbGhqRiv6CrzoDv5mXHAPaXc58jW6Z39dSYHY37eBGSpqiixCjbA",
  "key6": "21sUgePNAERR9cH5jPRjdtmx1Gyyf67zG1nuzidu2HdA1Axqaih2p35HyqVquWb8pCi2yprjySzhxGnC1fdFXwob",
  "key7": "4J8BjPF4QnFv2LVzTyrQogJBst8pBqQ6Y47ucHZ2oaLKnMxdviBgYXaD2CY6TcUz158MUMuGiEpKLX81XghB2Qxe",
  "key8": "Jq7Be1ZdVUmoGZXsG4cdaooDivJCYpSeTzBfvqGJTfTS5Cfyg2VY9ZpKWnyd6zSo73mP6N87ZEAPujkPLid1yGP",
  "key9": "5DwZPwhXsMQe121iei4eQEyhpwfSgczTeFepAmLw6b5MjCy1DvzFvHAkj3iB5QfpE48KXRXq3DQ8diXAswVNJAs1",
  "key10": "54Jvba5HzHBoWejgRjhMJjrRo5Y9PZ3hL1XG8egivpgC6WYzZYoKb4hkGzCPDZ2xjTNYPfgakfAaUNBbTAVosz1W",
  "key11": "29iwsKB9Vg8sy8RnDqHDJ6LPDzY4DwX8Tsq84zJCXrEgCaHxiuhWVVx7TkeFJpkAe2ohDuBGPVNuLXpZt7LZ93h7",
  "key12": "46n6EYFbdjdtGDuXdS8WC8EKEJv5aXqZgEtoYpFgseKMembQJv67T5X3RTwL38ruzS2UQYkt7J457eHpryFoPCGR",
  "key13": "DiakF4XhzHHvvMAMHc46yYAqw7ZLCG47sUSZwZfbALwbUyhQyAgGxuEx95oMBgVovE6odyPLRNYWqLjoUpzStfL",
  "key14": "5oBscjY1yv114rgfuwCLhQePzkgUCEEpNdgrxsDgM6PzKT6wyqv8KFNnUiYarNQ3xCVKCvnrDSVMpxmCPntFsCPs",
  "key15": "2h2pmuN1U2xshy1ZbTnEDjekjvQsgZxPX63FNyyEsymhq5EvAdoM4fy4Xfc4arDTEhFwMPD79kvXQ5QefxAc9iTW",
  "key16": "5aHNtFZobtdcs8NFGNighr9YnGDG3rgMnXrHJQ74cjCEekEUaZLiwNk4XRvVuiLe3SHCUajynk5Q2zdsiutUQSaL",
  "key17": "4N7yXDGtAm9mfP3ygLEDLwrfyiSD9cPtrVpyuGVv51xmFmArhZtQCPuaR7LBtrKMeuKLywuRPU8r3E8xjZTL1Yh8",
  "key18": "4yLiR3yNVJRkvRJbn1iC85pMjD1xnob4TrnZAnb7evwoWD7qFBXqGWpusVjaWjdwt8WSpwL4dj2o3Jbi44J32ju2",
  "key19": "TCr9Az9io3xieCGh2MaFogBJrLud99BQCrURYv2v6p5DzqSE6S9jzcJGfU47Ust7qu33uukFTVfrHNCFBJa4xAM",
  "key20": "4rvpAWmYwrqySkLoiyk2GDWv4EJGb37vHYqEq9znmnXs3fAdub3ghEm5QGFssTeRg91462rtHKzwTAsG3VeA2YWV",
  "key21": "34QxpHEXwmVb1cnf5Y95D6jvHnSQMvNooAEt5T4pSmQAbiUS5cQRQ9hKYoQMVfgaSdAF7tBfT1jy8HATWY5c8kMS",
  "key22": "481dqcMAZ2xWCjToN63iT6doCBY3tgCwsyNzkPcv7abiVsGdgNQj7gCGSrcyrS7aG9w1mLg65ghHqBTqToCkSqib",
  "key23": "42DhHbrwS3Kr6wtep8V8AH5BoEB3jjcoeDQaTu3PZWpFdwLyk1XivRJyCkwwp9AqKDsSGY8CQRrdcDd4d7hk2Pfk",
  "key24": "3KoU5oJAjBCBdErWVCBctyGMfvC12aRkEg8gWtu91MYR5pqQ5toCtUKqF8MgtTaREadmxZh55Ao9tXZAoHWCjnvV"
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
