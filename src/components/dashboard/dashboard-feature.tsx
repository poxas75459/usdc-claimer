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
    "4vg61uQ4f7EN7Zr1BicZkc8SpUjQMjS735BKSNEP8BpQkS266eZyYmYHGfqSiQxRcrDgAsrGtChTjfc5fpuu5jor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RHwtA1ZrFoKwgh35jtDYiFHznQgP6pWur9jxXdcUKSfwEBQ1ZBdVBsEQ5fTtWce1EXYrNrTw9NkYPxvDqdrp39X",
  "key1": "35E2RYam5K7q7twWfPb9hfD5rAAkNTaZc57Dtc42xCoZoZGca5xr6zgyrjuatkbxUcjBKKdRpSJuYTLcStgPEUDU",
  "key2": "9wjvbr6gfDF7mVsF63cYUShwY3dHpsa5hXvyp8BzWBtsxqRD6FN4MCHUU15LJPCd8HXTgxphEmL77xuUskgamo3",
  "key3": "2XyWz6vwmQLyL1pgNCMgzkMLYH1njAAEnQTEvbwEqrftdBWmUwQwHozF8DWyZvq8pg8nLgh3Uc3ej8cLxPrxvKb1",
  "key4": "4cKdHEvYn6FZ75qgDkgRRqCQqZ9Pk3GZKzUjz1JPkRpGghXBZGCJp5iwZ1QRqXLLpJU1jYuF3NjmSePhvHZMaxhN",
  "key5": "5zXJ3pJHs3Cy5o8DxY8NmpFgGfZxvSty4F9Jjs3xjrgq6AVqN6t247koQPEx7GAhAtAtQfddt8GDT2xGxGLVcHhk",
  "key6": "5UPHZDhtP9yLspjyH8xomzMLFhvSZmrtMm6BMSqgSz5toSzSK6K2u1FRXjpNQRbuqKyS8Yq2vgfofPUtmts37w82",
  "key7": "4sRDKWbzPN8zGsQjNzAUsJW4ZifWViM5umoCPqhbfLwFvN4s3usiggMfhThNee6BJUcmkjJrnXQ27j994u7seSv6",
  "key8": "2ezk9dM15FcvUwYnoCCMD1zUAwX2qHS8miDRdvS5WmCJJwFjJVkyDkT6JDgYogGdqy2rpnBXBQuc8HRWQX45BvK8",
  "key9": "nLrrxanhbwZLyRqzjvMAfi4khyAMeqXY2ZbgM3TkkiuiBNaMYoTezcnGNs6zdqbG9wHCBqDdLQfhk3mtpk1EiGs",
  "key10": "2LyjvfeDFPGyWYWybmn1sjsa77QZteKMi74ZAmNJ5KZhuXA6uxBs3fnrfccKnfHt1YGqP5BCAHaRFj4aNACrMtkx",
  "key11": "2uSzpHu18aNRYv5XLF4yvVjUZi4pfh2EKozvmKgC9deNAEqB19H2KHAzyQXU7RUUk9pA16UYUmHwa2jt8tvzaYua",
  "key12": "63SvBTLZE1SZkN5fNHSe7Zb5jRV6cReXKYX4fAMeY436MuAWZfebjAA5PdRSZKmC9H7ZvoamJQv2g5fauVfn4o7F",
  "key13": "2PNiNMukN8kXRVEnkKjv3DdhDrk4zyJCeBEF4B6zQhBFUEMUATqDPK57brAvSjxeFpZ627xcFLT3KzodNgamyNGR",
  "key14": "WE8kaswp2ck4HFRK58iWNJT7uQfRYqFMbg4EKg1oY1DgUYoS7FaHygUcFng6vDmstLbMkmzUsYDay93G2kp7F1q",
  "key15": "3vVTyVewtSzYJKKxtn7HbfXhrvNtHs38rq8sWHuDioAtxgeR5fPt8VdGQPogqL3QZHRAksftndLRDrrwT2E3tr8a",
  "key16": "4Pje7HLZMYp3k1k18K8vMbEupUnya6KBunLVcasJLgf5teV9ECkU6cTe1FtrWw2YmLJqfWPwU4EuqkDYbdd8qeEv",
  "key17": "4UxuZYYD7bTgQm2zpBKWuA5kxoZ4s1Nnmu7BT7KtXXQh1ExZGTSpB9NWJ7nnPq7e5rjSFk6qRZjVsYF9U1zuCxnQ",
  "key18": "2wR59Hb7cPCp8yW5x1kJZMo6aH3BT7LRhZpsJr2LQKswSgiwUFLhv1VX1QSXNmVwBV2Jh2huNX3FpYY293iupWJr",
  "key19": "2pAAXWwPzxhtxStHFSiZNnEvkRPtwFgouAxybKAkn54vHEfFZhgqLVYRtry1y71DZkTvkyUkwD1hr24tG5ADbCwJ",
  "key20": "548nC74SCeCE68AQZigRuD4xYXCBUuMQ3a5BLEWGFDdS1oVuwkFJGLxRbrg7sYsxc9Vgp7zYUGsddjBFhC4Qj3pG",
  "key21": "5hqAmK3sVVhhRXNvuwikJa9JsE6UrADdXD4tsCCn4c1cHBpL8DNdKAX7QPSL8Etq48NJKiDyDwDKrWR2Yuo6E4nq",
  "key22": "25aDvyE9T5vKcwjqRW4FA4KiZbBobWauEdc3JHWzF9N5mexsGJEmpi4njDa1k88Af6372J5mAQ3GBXGc46HV6gLC",
  "key23": "2AF7khAt5bnvyg6gCGXNujbyZnsKNHLkLm3Rdpm8ipvJR4yv83KqzALvsA86nmTmn5jjVueH9keBPtSmrQt6UgTF",
  "key24": "5vvvQ2VbdaztDFgfLQdZU8PSXR15REbmCk8B8YpRCmDpp6HZq4V6GMoyCvdSepP7DpK2zx544Q8n9ftnKhUWQc21",
  "key25": "5J3CnWcWjbAqpNiWQrqbnyhqFfLhUsmDZZ2YRitqx8MfYt1ERHb5ZWNwHU4DKqrTbdbYfuYVopsEumMCtdWd9rmy",
  "key26": "3dL4n2Zi5Y38XXjDEZwAinzoCbEMheFMgpMLkEpXCx65E4cgkEhPLCtkJA7zTSaPszFph9XwmMjPFKM8yegfZSEC",
  "key27": "5uF78K9guR8N9DZ21Rr6wJXEQvMxccKc2qcm2CURd6Nc1XKxrR153x2ZJ7pvFWL5mRECsQP9bBNL2cBvyriuc8iL",
  "key28": "3LnUK2nu5XkWiRshvxumcBHTTJfKU1pLUNAHuSXmbiSKMFjhGRE8Jf6bHNkHDihuFPu59nk9mv39ZpCT4hoJgVBe",
  "key29": "3dSijq3usmtnY7pDdiztAhYY4uaV2oakcbvBFWEcQJd2Ag51tZ443k9R7FQJhMtPr5hvUM9X9h9f7ygS89uxpGdn",
  "key30": "3mc3xjNgqqDv5gnpwe6Zjiv1MWqEhA2nYiGNPNdk9F5rKgDZfUXM4NVH2UuR86tWUdjmjGquqwuyWsb6pHw8nzvv"
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
