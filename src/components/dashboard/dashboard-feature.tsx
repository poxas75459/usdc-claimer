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
    "beiW634soAatFkYdZEyu5uUaUT1chBu1ogpsMHASKVwU67btT5vijDwj2dLsTusjXo98e2yeytHUxPvu7sHWa29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46q7wXNbJkHp65EPY7UE7Hq2UajuSM1ar6nVsdyyWMmYsQoN8jMGw1XXZJJ8NyeEiJTWDfbi9aFzK4H5oXFRZc6V",
  "key1": "3tgQMgtwAZbyPXbgYy6ifGj8ohvtpe3uH3VJa4u7MDFWUiFmLcydQDaJHstXf35SJau9Gxm2f8b2FMo3tzDzTf6w",
  "key2": "4bCAP1ViuQ1jQAChc3U76ZJnecCekGA3xCvKzR2p54jZeUpXDR1Svx7rhNgF8dw3houoM2DugSXLugQY6sAc38DB",
  "key3": "2CWpZDsQFgxAzbGR7CyLyWYD1UFeynkjRTzTo19o7UKtbiY889yPSbhqu2xcUgd46qTJyQpFzSi2bvrnA1qNGT7W",
  "key4": "4ejd73Pu8PHRbPQK1si5F8qXAyAnVgzsEwGMr9d2xhsyaRT247KVugQ66byu1z7VfAWZELesiHryULrL5ZanMkHL",
  "key5": "4iRp8h82gY5xcck2zpWuEVwJMCcLJMbNsW5GB4UzFQWupoCDQuYRcNww8SpCkoqx9iQ4zNZqB8mZsftvXt1MEXnG",
  "key6": "3Hph32sDvsbWKd49fjoR6963f9bXJWvffHrtmjy1qD53B5feh9rhxj2RDFxoVrquMVTMmqawH8xyMCkYnuoxCPmF",
  "key7": "3F1AtnaXMB6NcK6ydAHvhQJBCY42NQEbzrcjLBLTuV5TUvwbtp9XkxMroD2BAwuD2AMkFcDWeFxE8RCYHJsbn4Ws",
  "key8": "2Znfc159LavGa1Q1qWWDNpmzL8o6pjwHTm49wVvhBC6NsyenkD4pnAVYHxu2DsLwMrjuhsBCTCxiEwcci6txHND5",
  "key9": "4ouXkFemff8rufeaShntoePN6gL14ULbGa5XFVLRXbybDHaPPuCdMG7zqsX7QwwkeBe8nvu5YBDyHBfHVLDdUSav",
  "key10": "5eMVe1K8asX7R3rKMb3neXTMtW7LA5iAhRmT4fctcNXfAPELhf3HJDXCAYZC59TBm3JaBQWeeju9eprxCGWYMSSu",
  "key11": "B2CtjsSQG4b1Wf3gtM3MNBAckWEYWzSzudgJKawUNfPYHjqFweaFFUE39Gw916mYWrgNNGRnCsni4BtVANCzNUC",
  "key12": "5M4YnYPnr6WocqdHKiRAwFTsYHnT8nFrjCKzoi4aG3jFKayVCaMPx5SJrYoqn2yXiMVw7swehgQFT4TgzrooqPTG",
  "key13": "3ojkQcoeFWqPpG7UeYDawswM5GLgn1qMYpVxvN8878vzWJLGZtfTxsaZqMuqQMyeuwJuyhrXypL13SCrNZsXpy4N",
  "key14": "2yihNRPCdAWVZJEPQeT2ZEPUAxfzvgEW2LsE8DZDqrELuoXLbhZ8jRpyx5Fn4B3gJrzc2a1rGmjgEATPrtvUMgD2",
  "key15": "2Py4SM4PBrdBe7mCsPbXX6L3KLwYG7DXQSozV5CsiXiNy2469qXFVWp2WRJ9AAxQZr9jd79nyREs2FUaPL82efLd",
  "key16": "4ovbgdbfJaxortgAE3jfff4y8DmYUWFkGQX6QHJchLQZyWwcgja2KMvsGihAWgcGAeJpd2DvPu54zPVC1x3jpFFT",
  "key17": "5fSjBsJ9jRV9nUGwPJR7jcdCnob512SDesTRKPWwFh4hWK2SBDkg8LG9wuWnwmwKuVe5cZrgvpetRyKmrDv52HRw",
  "key18": "22Q2bkURNyRvCVN8gg6DA3iiFwHfQzYWymiCm5XHhMjXFUPTD3vae2kX5ujekZjtYtwbr9ZVUinpe2DK7rdQqMH3",
  "key19": "N524EJNuXAaAxGKecKkj62a7UhNXnwHxZRnwa82yRLGywStfTVo7ZxuU3HJ7SVCttExMRPxDZaxZ9M9ucWVYdWS",
  "key20": "3bNZguQ3dX6RFBH8XMtAaLJkPJJ21NE2GfVGGggADLrj4sJuH4CKT4SX8cFLBLqfyhxcN7Dwb5Fewk4pxTFPRvUD",
  "key21": "3eYYXyNXJCooWPnWz1PZjgaAXMqCmyk3d63jVq8bthykPsWJzGcwRrZb3j63k4aouHcRyde6XrR9csthV3NEjxW4",
  "key22": "2Nmi4cKMBg82Q6NyuZgCQQ85p6UrP8FnQQRkefuTj76hLSeFyNs4c9JUKyT6woYEitm94WHAs2YUmZmW2bZ2FGPi",
  "key23": "3WnYXG8rxHzhCr9KkU1fJNQnySsWLqHaCdrm7ifwabPTE2jVxtZCvsjLnTMXN8M3jL5A2YwLWFoDsXEedkPzeu5q",
  "key24": "4oToJUXMht5tA17Y9LarVga2R2tsZXrfhCCwGEv6TqTCeKZrQjPqx64A1eJGrrei54qvV3r4yQZZf6WNwT45t2oA",
  "key25": "485gHfwog3WJyydQcy7XHXCqJQ9j1HmSiwp77sNaUfqeAjG51jSSuAf97raWmupJ7w8q8cyT3iQtJStdTwu3NbM4",
  "key26": "3MVpGp8ZRFVnfAYkGtXM7eH1fbF5UFUD4oNRyb1pAr9a9bXact4ciPPThg4KX6syHS7UDmT949nGhVVkW2WHbdga"
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
