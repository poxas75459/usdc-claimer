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
    "ZSPpBDBYgXeZsLPiGVrsEHewmfdaX5Kd2tfKdZrP9cvoRPtgcYrkLsE2BfBza45C9UzcWBzv743eucB5EUGuTnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32sjee1KvCKqBxGbUTwV8L7KrF3wYfL1VZXUBobVh7eBNgJK3cJ6ftGX2PkT4nQ4nx1acAnhxgAZrZUrCbcv46eN",
  "key1": "4pWbpWXDVVcfJSfEHve49iBGEHNe6LWA9zDveDMtEvFLh4awaaohuiqGYX6rRo5YuYtaXncDi7fUfwZRZTst2mYE",
  "key2": "4c7Ki35diXdZvcZsb3EqUMTWSqJ7uWwcXVwMKywGXyAXU5jXbxJaYvqs42vm2s8W4z9hDCQQ3PtC443i8927oXnN",
  "key3": "2eVFsbWx6MdYorJ3Di5j4NwL4JEKnkGFficJQeQ81248daWbNJYjiUEyR2536hT7wADDPyAYWzkC82jvLjdTiMtW",
  "key4": "45SGmNQgMcms3FRUfEEMNgnd9s8UzbXvARY8pV1cRf3MudktB6GDX7dLm8nmzipwi6k5AuFR8RBXxP2dBBZLr8BY",
  "key5": "3kVpk4iB3xAgg91DV5FNbnU22W4mB9wFFxYnfZHK7fWUn4vwGTjHyRHLbPwf7CkyZq9u9SPCGL9xdQQm3C6HLabE",
  "key6": "46HANEA1KqEtiQBG4GnWvx2GZYfGzgoojSAjvZ3Rs6NMKRBo4qnoCG6irhgKEVKxQpVkhzwRHHhFHBPNweC4pMgJ",
  "key7": "3cCNkFyvhGtYTDeLXXtfXJWWqG9ANqVaL3u9iFnWMB5enWk51nYx2BRiDPfyfsjVe8J2kEHuhLBgSnEqSuPY4Jkx",
  "key8": "65EcnJcNxwALTJC5TgaCo8n8m9VDCddVGhmr7gMXtb4qKmp4pc8qjHZdDdNurBhgz2ggCcC7WuAPoxfwdndduwZw",
  "key9": "UcP5gNJ61x4xLD8paGMvAEW7xmszXcErTioqSMgMnun1DvoRWo13uwob3LFEzPe9YyitkcuTdWCK1cPUFrDZS2N",
  "key10": "4L2xBw8yjSw5smJMg4DqMLw2mwCRq6WwmHaXr8FDakkVhL3EdfoP88xmt2J9mmdgZZYPjiytP57PSAnNDhdnPNrt",
  "key11": "3sRECjLNbLRyUpoz3BmmxECPWX2miQDsN1KH3MvAisNECdnxEo5GaBifC434gDDQjvKLjS3JvVxXbz8vTV2YsKib",
  "key12": "wkTSFi1ecJpyGSYRcFaN6MC4UKxTcJvzNUCVhqVJHjBunu4jrnBBMpLvoFAEhUpvz3y9JC1TbHq618hqYdmpTqQ",
  "key13": "2vHWRrdMs3x6rfyGd9NuQfoPW454kwdm8KsQFAX2H8NaRjdQvPMvCRHS1Pfk19awyXCJ5YVWiJM1Dez1Hiu1mLnw",
  "key14": "4wS7Gjj6iu4sxmjgonzzSXmpaH6srfT7UrCirVrDBT9eodkm8XGXgQBdqBuWDYVMNH6suZz69W9BKFe9DzLuh9cw",
  "key15": "hFFWnijKXo6w8vgwicyhiw1DxoZjQGGR9tdHk7LhHkdvFz7W3VcnJRpyvmGDUcBSyc4M9RZuX5wZA1aid8uPmKT",
  "key16": "3urDAU4kzJbbXHZVKPkCNCFJu7WeLMbMikfywaAWsnP9TipcudMZ8TNdqQNarnoicTdK3d5Qs1MaQ2aeYXvfgDJX",
  "key17": "5HEBsqjAXpUuRb7gvzAzuEK4tuhGCbkZWMKVbP6d2uGiyoSfXwS4sqcxbqodX5WHd8B2MVpwGAB37GveWhfRrT5f",
  "key18": "3ox8L9XmaNNTRqA7zuG9wznHMQkMqNrWheXtrpAb5vtpef1P24bbKGKnGDNNoYxERcqffjXLisU6WqXCiR5cNw8S",
  "key19": "3n5gPSyTcxYHv8FWZDfVaPeUcPEamvTxATkPEtpVcrYdhcJNtPcoxgMEjTSEAAPkgoiHzGhdTH8Y8vVbXf46u1JH",
  "key20": "4XaMyMYEKpcYU3H7mLFRy5un2vb3Vqt2kJ7nGRWRcEyZMeAJJbEpPE8coLqv9YtQ1K212xYByeUyYnTxYhCa35by",
  "key21": "21XzTFLg4HVr9MGJtZWST75WGfd6hwusetzY6daddKCQGS2fnZMKRA7b1xZHyaqKrgWbtU3CSZcdvgFFk5oJgJNV",
  "key22": "2kchPMxyVVPY8nuiEbGDMkFEAhtDsc8Zqhosm79Kec9SZPn46HjYURXxk39A43dS2T2CPJxHw8xarTydu3xXUy9M",
  "key23": "3DXSP3J79MqoNm75gwc7KY1vhRUtmVwkzxP3BcmgWyFGFx19RLgZo4m5FwRFVbHDjrfdzTWroG6ujB4F77Mg8Ztb",
  "key24": "4rZktgzjhcrnF4SrneY8AKFhgVPwMRzjxicBZMspb3kM7sGu4Q9aLry6eVtQxomuTyMUXwpCvVexAoGVmnmLxW8H",
  "key25": "49tjuezoLgbUR2SWCuirMd2YnjkKL1jrSiQ5curJ8kymDroVrW47uadwrE1HQh9QFE8nXTRpBuNqK3QyKkycuabL",
  "key26": "5As784N9sU7nGbfdSaiHf6ir63muLCknr4GDh8AWwsxUSZrqDZFgPmvau74oCcFni5iFYhqBdcXCNtq1T4bmeLqc",
  "key27": "63FjJxRYVtXVnqsS5c5AXAzQiyWDfJVs7mRmHiCEvUcxEtMy9rNLxyWf7DLunZx7EZ4my6TngVtSDGnfFV1EBjEg",
  "key28": "5K8EBqox7of5oiSKfridanoxGntf9Jb4898zjFBvmgnXz1aWbbocxEZUuivswmP5ZooiWqg4tk2wT3KPFMxigjZU",
  "key29": "1f9sLytSDQjux8f2Q5UqWkbBr7mb1hUVPnBUtLEAdqGJFx8jcttvCcd892E5RtAMbAruEFH8YHNKK1Umz8c6Xqa",
  "key30": "3g3wTqLaZsJxFK6QXvitedDocsE4z5E8tcvhxi5t84V24W4M1qpzD4WWtZQHCdjRf2MeZ3pGuXH8P1JyLwc7Q8dY",
  "key31": "2xEuJp8ME1jrfckxvsrYcuzYLskcAhN3Ha1SdmgCnsSQhEWTcaCMeBpoK4Bb8FLWEVPprfR4Q4htEP4iaEG3GKd9",
  "key32": "3D17KC8cYGVAgRhpKmSJdMJmPvVx8TX7XmRtao7rWhdKvqQVFhXhcPMPn7s3AGD4RKX8U2uSqGGafrJSJ2Vq4DMe"
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
