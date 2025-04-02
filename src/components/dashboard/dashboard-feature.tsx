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
    "n3GMJTSqtp36oZy8tvfVk864CrJy7R9QyYrAtctwFfEXABqnGQba967KBpuWUhiVoUam6TiBFFVgP1UdPB1LvB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aggF54GUgimBX2aHmaFs2kWmor1VxsrUzD1befXRPtqYEawLByYjtYUAVnfDonep4NZ2pDxZ8jd9DzcLVFghWZ",
  "key1": "41Qhk3UqVN2iVP1hkTdCM7wtBKbWBSN9zEzUW67pRDc9YtLkrVkJFxY1St6D6yz1YZHzPrSwNSUq929k4euEdQZT",
  "key2": "3iUHk4przssK7vm8Q4hh5BVV3TXLDDDYtot6z2YzyEjamQMBb6nQQZMgPfQzASycz9MwwRmi3FFs3ERqcNBF2j9",
  "key3": "1XPB1U65MSuQ9vNa2F2FmPHTTN6ufqT7zceuoZ2oBfhHZaSK97Kntg1AUPrD3KAxH8U6N5UwMsiEMTdAzVhZYub",
  "key4": "2QiUi59fo9pmS36Dc3az2PvaFjcbVxXNRa957odUzkx2zxjy7WiqzxC16P3RJkAc5n69yr68CFZpch2cG3FdbSKR",
  "key5": "2FGeXVEzB645vEGNfKo1Sb2RXaHrVs1EuJeQkiSCaKgCmpUcm15H6dKBXSXvwdN7J1hmfkHbNjRhXurfm2obchhP",
  "key6": "4GdeKHjgmWTuFcbVBqG5TJiQbXGikhCDiUjAQeGTmV3FzHkJ7vi5owFWM1K3VNKp6dk16Lh47Md7obBs9rQkhuh5",
  "key7": "U4eunFteAhXJUE5KPJqthuH8fDkqdwo2wzSkBAWCb1AYAxSbNJo8zg3rPDRDPm7TeeERL62sfrfWyqva5WyEY4F",
  "key8": "vyi6NCQJjaDdx2qqC7gd8GSQ1EAr7nt3D1s3B4H89e5tg6QRFhbJqmBgMsq3Cz8uZy94Du8EdVovJaDTLDJd57h",
  "key9": "LbpXBUThcqAJH1opA8hew9NXKyqtYkrbkEqRnfiZZsDM6BaDjj1CszCRoHQVg5CAjvmVFFMZL3j2NZZkW1us3ae",
  "key10": "4FaH5RBHTx6WX4uVTZoEe4Rxi6tgJ6LFk3QQhv1bMkEdQ2QbYRouNQkUvGkp69Yx55bJpn1N7r4pPqy1sBTBpHVe",
  "key11": "GwPTi2GwmZeRQYNaT93CZRdFx4DcmPgNmWpASkJ9bB3DpJDV1Q5dQ1AKFff9YZv7j9Ro7bStjB83qKUDZk7X3Bf",
  "key12": "hX7sxkc4zi3nW6rqae96KjSCuUtJMAErVPhgJWPKzNwGCskLL8fnCkuH4ULejE8nwTrvqgJkBmSRWrnfmvMoMYU",
  "key13": "2MTTgN7MA9a68dE4QgFNVjoJ4BpPSFGPxCCMF8gTkFjfiJoi3PZRmMKwcHdonjJw3v7Q41sH1pReZctP3Ta2BzmG",
  "key14": "XLhteS14q4CRCAfnsTNswimGU3nZXA3WaZhqReh1CnVqhGhW5tzA3tsP2SUeBVubuNt8GTYebReACYAhL4wWj5g",
  "key15": "5ci8mu2GkcnNG9DAewQ667w9A9F5i5VNTxXwrs9asD4DsSgjko6dTq7Px4sFTUtjmfthDapWfCZy4LLKzWTrMhnA",
  "key16": "FFtbZFHmDvcKWLmeFWe71qw8p5tpU9BcqV3FE8X7eFZESt12QmTgoDXyXyc3hERctrP7RGbRBeVRV85GFrdesFh",
  "key17": "2bzG3PCccvAjiHzu7cSVSabuVLHYoaP5rZEV3KBGmvkUXGEteDLbEM8tUBkfgGqkSytgpHvR3VuX5mkAbsoufV3G",
  "key18": "64AX266uBowsDB7jw2Cu4oJgRkRxL7FnDEZ1RGArEfLkL2TNrDuAP9JsrWKEJ1xgpsYFGoYuMsZVVGb3YbbmHM9n",
  "key19": "4ZRpB5Z4ENuypQ4tGdz1XPGcXU8ix2fjKS6VZsDb27qNC4kT3qML6gqcSh8YewbTiYojqgViSm1WdVCans2wnoGS",
  "key20": "4jZz3rfd473tpjcHDmackPG6kwZheV5ETpeZCrEfbwTnXjgjP2pWkT2xZuUtKcvr8JdMaYtCjfFu5BxAH2ZUYRfk",
  "key21": "5qX25scSH2JQEMA3kYXjCmpTe7JfmBqbz9eNhxvo6ynXQ6t9zbo2ShR2W7NZpxmEzU6LjYsZPHLEtCwsb1LJqd1d",
  "key22": "4iac4B2KLLLddedZtC69jrtArScoXibpRNsH1ZDadAyDc1NQWF9GmcLy3BP3RTsCx33edFVkQutYSpRPhAmbnd5o",
  "key23": "4EnFkGvUVgp62G5akZZcuyRgj2cKf9HvaMik1DZmu7ToJ1nizZk2Np2h8FwQXJRVFGF1T1TdqjdW39vtov7AWdBs",
  "key24": "4SNSESGqvvJWnqw9tL5nVeroQhYVr6L2LF1dpkkFvCtbCDsjG3yKGLYsTwvXeQkGbLkS51uXYyKJzRSRB4HnWjf2",
  "key25": "4ih4pQcg3ks6GsN9fiQo8vdkxDRpP8b8sYLv74LDJZAzSkE4TDE8EUFARhEkdVWryMgZRNpE7H6cT7kUjNXgfNtF",
  "key26": "3XBkn3CojtnxVU2aZCLo4MjbfXMx4EcbWdtMH9ELXGT2XKCcHQzSQxpSg5sq5zLNjmyT8ouAhz5J1NhxPrmLyZZi",
  "key27": "3axvHBAuiecSmvKcgDPn8hFLbq8MSiMYGe5nyVMiZSGFxFYj16jFYBceen2zd3eernsaT3hLEbhxJxuqf9o3ZQ4V",
  "key28": "3uuhqTwjZDNJukoV2gnucj5bQmtc6MaHBhrYwEhrBgiQwQFf7fPhDRGKwjA6kApkZnKTXE7nuAmUJ3UELZJYFqDw",
  "key29": "Zyfoi7wEbGJPaXFHJ9XX6jDi141FXRPfTDmwfqBetBBrNrS1VbiCts3GFfAz4EyukMEQER12JKakTZrrrJN3Ei5",
  "key30": "iWmRCqXoGq3TwnP73c4bzjFTatZdEVDKtv6sRg7ynXbDbCyBrgvRFKeJKe72nreXnjbqefnV4xv4shEthsVdVrZ",
  "key31": "4bwLx2tQ8ADu1tEqHDJfXL18qsk9tsigeoNE6pAzd7mfD8hDG9ieLVbhZ4RBzfXfa8S94Xx78JCZ9tKd1CCxT89Q"
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
