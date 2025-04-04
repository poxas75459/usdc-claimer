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
    "2nvQUNHQPCcngRmPpUN35ohsypogqvCeAfi1QMAAB2E74cJzysgDPQCpuGRLhfAbwS3jftRLyTNjPfiNXLJGsU2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WDxv51UuLTYQ86ur7zS8BRFArt5goKawVnCuEiPLdCAtSj1AspCTV2tXDRwvPuKGDaFjdqE1KezPFRrrDvzS7VA",
  "key1": "2CqFqUW9ocDHPKM9AHyn2uyH9WAYAdzej7mvk7HTNukbhjnTPRwuwRTgNaMwi7Xhgt3sWzxY5YBMLweNeSqvabkd",
  "key2": "4QsrUFLYhTcHzHLufmeYugtNyLKhMBYTHnsQceGAtMxB3YkcMAJKeF2Hpi8FyBLhSGpyVLxDiqC5y2DaDuDoQgMw",
  "key3": "2kHZd93YVRQrJhfSasTGFoEw4rAARK5W12qJhnrft7UoNz4gfrZSfH36quVit3s1cTg1DbKiFBN3RgbM6QVaZhbT",
  "key4": "3GcxbFJ8sXjSuxj8EZdqHqQsjWKCckz4XAbCncsozZXSXH5E3adzdRiX7SndEnKagmeJZEbBsQpXBzNLQRKTfBt2",
  "key5": "5MtYjmcpTipZaoK6E7CKBfYAPwksKvk1M7rwkpoT8Usay8xiF6Q4iKGDx1Pxm3AjYvnxeVauZiY6VSgYyCgGurUP",
  "key6": "2rpqyCm2F1Bs9fnosDPtCPTqRfiXedXn2Ci42oM6Z4rQLbUx5czCg7A38G1AVY1CtiCStyb16P2wz9uDrosa6Cxk",
  "key7": "ZCD7vaQ6ByRRsgw229FZBXb29PQETW5LQHX65ecsDUo2K6RKWqYx12wePXU4xmZsfcCfknVtFxyTL2mvE3KT6X5",
  "key8": "5yoZqWogqeL7r9vKH4GXn2Y5QzRdG4MSYhR6GZgBXdpu5mkDtujSpxYwvfBzb2j1qEi63LRMq3A9aRmao1Zq6aji",
  "key9": "42EQ39Whzid1mX77a6WqnmQcuWGqghhE96MkyMnmGwcPtz6Nj3sbNRpoqN7qigMQpSex54wzqh3PgFtB78k5CGEL",
  "key10": "2KmQxEwaQBY38UY6RLfaDgSn9qRWwFNdQXemw5BkjMNRJc7UoLKUdFnA8nL1Q72fJ7HhpmdTxtCxViCHzcdMVQdh",
  "key11": "2DHgb3pbRkgaFAXbVqRCziqV6FXWY3EUQH34GvEyLdNqJsJfxZwPDKPbD7EzxxJFG2XDAd9W1a1m3YsLC2WSByuV",
  "key12": "3cy1r692iuatopcDcHPQWP28Vi3ZmYW72Fzen7nN5EKCE1QvNWnGtc3EQ1TTzvNEcTtnUqunVmTWYp54nVAxj21E",
  "key13": "bMo6nDi4EQSeupCaNYWvfkWphg31ZVtsTq7oLrxAUdgZZMteDrhYZ3QU2WhhDemkdJwh7L71nP3JEYofkWCmkNH",
  "key14": "3a9LfWy69zA2tJXWgUtBS8uQUsYettEpxhuiZXzmaNKk83q3xCMLotFpNYU6vQVDHMZNHj2ho5PiaGfyKPD9JczE",
  "key15": "67TDjJTEUn4G6kP74XppWSWYfcjfbgJddphmwM2FVKDtYjKECwFbgJTpFUqGT5KK31LDRXmx1fDEd8T7uTSQL2RC",
  "key16": "3DJmubEwAeWVmHL4evTVcdCh72ur578fgmxUZTeLy9TKwsJhHSK13yED4RHpcYcTozuBA3BN4dYD4B9EUhWve88p",
  "key17": "3SyJHu8zJD483PWPQBsU2QrmYJBtzeyKfsbM64eK92AVQR5XQwXcNFfJ2ggHVq8RZvjHSYP9r3VPDtJZYCE5BkW8",
  "key18": "23f5wE6LELpvPkm8kJpBXfBKbCW3RGmQFhB1aDhrrnqWC18cwKRShVAG3pgERpAj3nEg2LpwKh4pB5fBjjQsudAu",
  "key19": "2KT4mt8rTNBdzFRbSzHzSGMABmRqwfeYYYHwK3T6RRY7dHoYgjwfwfsvWFDsy8se4kz77RWuGWapZywg4xfxBwLP",
  "key20": "3Ei8gGF39zBzZ4LaqVzywB2NCpaGfZEcLjjNPsBZUaggtzuiWNXH26ph2DyHR4M2T674WGMygP7CyBa57ebsno5f",
  "key21": "3cGWgy4fTjohms4j7YqeRwSwf5VH1akcH3eoUajkfqtHLgZXCf2wgGvfpRjWHr5GKVCjnFsYuvhtkgTMeyFGCps8",
  "key22": "Kkq6A5JwkXHtTDkS8wNKxEDXwApuzonYYU5jJN7bJMzZAnu4DBFnHVSCK6zDf5qzf2miAmeGMqJ11nA2TcqTWRL",
  "key23": "4XkyMhvCvpntDeQY5mP4x4YK11W69k7Ujz4aRYbSCbk9cMRT6Q8dV3293ckPq4hmG91xyHbQTHCe7cHGSyq2Ub7X",
  "key24": "2rcV5sMufobezVLd85kaK9kzY9tA83NAHyi3WLDoKrxHsPRGYJgZfbayHQTfh3NmUMD2yoWZXAQbptbZYqSUzGyN",
  "key25": "2dmunM8CX4BqGFiFQXBupRk1Jz1Rw3mJfk4ayagUYCJRjL6nkN8Czanc8QPCyCdLtuxQAZnmg2oXtHfrVD4e68dG",
  "key26": "5LNDWT5ptDZ6Zhvk7hqnAQM9NUKDLWHXzNMBQziUPCF2areDjhaHupShH3HrSn3zAFwpPpFVDe6jrctzv3Smr4qV",
  "key27": "2uw3ETpjk26dSnWSuRZcPkGZLAeBEuT923cjBSLpeo9va8JGk5aULYXUE3guYA1nSP7uQUbSyFByEbcWEWpVw14B",
  "key28": "2XSwK2w6Z1DvR5HkkBtFmpCoq8srxfve7593SjzPavpRbjJ7nWRTNf52worF3b9nc83FLmSMbEvp2ZsiMUSUwNaU",
  "key29": "UKySJsisRygqJnfwdNFGxqPRDn2aw9CSsYoz6iDHsuksHR4C7DtKjYR881HTKKm2bz9NVoQS1Dc88ZfE6yYt2cM",
  "key30": "2mMco3fBFiLavZgcU1zLdCb4k1tDoR9mERj2wrbUco6toDe9bFXP3VVYBHdCrQy9z6nvFYjWLyoxyMxGxoY2tbDg",
  "key31": "4acuFeDExpqHhgXy9sspW7z1c8xrhrV8avvHYXZGNnRGY6MUpuH8WoGbKrX1eRVbQDpbbuht2EpVmwV1kD3mGy76",
  "key32": "gHXHM85JKTFicLpJPKpJ5pSzfY7ZBojD3jZgx2SeWpXkDMyGjSQVcteXZKPi9joGSdar9SZCZ6yq4NRBBryhtzK",
  "key33": "3TJqFoHLYT8TgzjR775HMeh3Ymarj5TEnqMNRhdw9aKVDWzr7MGbWuD6zVRDGd11tpp9fYbEHwaScfnnL9LFHJHC",
  "key34": "jTtGKUcLvrGSgfKYw1w4oJzdSfbx8zhPvTau2eNietVEDgzPFjKricupYTMrnuG3AtmFwKEVj5SX1hK4UEEaHTK",
  "key35": "5EWYQXNHSa2HxmiHjykuvqwqtSmFoxBQKNRce4zD5vadczZ3HJwkJkT3HT4Ea1K9Dzv1c4ruuNgjAgajUUzTPeJF",
  "key36": "bJTshJyXELxyByhozJ1Q9SZZnQA3PUmAf6Cs4VpDyCKGg8PvYLfGL8yTi8LJfNUK7TNzTvpd5tE2kqg25m9nqCT",
  "key37": "3rUKTAZyLByM3sr8zgqA5YRKU3TvFiARiTLPn73BkmG7d7QUofgye3HCkdq9YDfThtzeWKXvDT9oFfhWbrSC3fd9",
  "key38": "3mr2EVCZtY5XMTz1VwuP6pXeWQHjfmU4kVVVtWoRHneTZV6TvhExorhhEPvAE2ZbBPgeUCYRo6GKK25DrBnsWKgH"
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
