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
    "4wL3tcmhm3SJSWPD5SBjbPqsA92g8uQa9ci84oLtsDvY8zUF3BRir1SUYK4boSHBecTHYRN3yuSUmLHFtCXnwzAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RUfFxddDRGwcrDseGf4fnf5RdJpTSXTcwF3UfHihCEB96nnzmPvRor387pWArjkwK5s47TypWLwiNiegT6FVJ3y",
  "key1": "KVhxRwuPSLAXKzZbziJYcr7g97KGobJYYYQyRFv4AB9y9TEX8ZgE5XwLm1ir7bnCCqkoqzF66gambWU4T3jtH1b",
  "key2": "5Q5H4rogLK6pBbsth4ngoB5mdEepwa9HkpdsxYdoKeGUz8LKLRhfLSk15snK5N8cRfNiCjdtuDHPVZzfswwsNyf1",
  "key3": "3MaT1JKjPYZkm3jUXQsrbWejPqXQAQSdZtcDJdgumofxvNiHqxn2jbraAX7of6pqG3Rqfudt1z4cKRnVAtB9bAGe",
  "key4": "54ez5mVjrrxHMiw93Sz7KmPVUz5GJSKrcLYmJTKWEPD8GdZ9ZhZniyevt1CnUY53VWxr6cT3jd3YC917xVey7KtE",
  "key5": "5yvbk1SLyp31Xrxwg4huSJkrmUzycg9Sypf8o5Xe94NeFmJn7xMiUMnQQLfx79vWF7qkEWMmbvdS5f5eKUYvFtG5",
  "key6": "45dej8Q5aAbqR9LTa8fu2bvx5FD1PcEgPUhkytXKzJnAitP1XUxYy41upSphyaS5UGGKeumogF5MWNRhF2f6Di96",
  "key7": "2fLRtCG29c2GQ3VLcrrbQDQtSYXWDfx2aD8PqjM8XvUpS7dS36FGggWKdXksYKWbUPBdp8beFs97kMGd8ujFNBkv",
  "key8": "3qzUMkkWEEA6sc9jfniRxqEppBgLVFWMvrZBp21GNSmVdr6JKo6MxkskLPYY2Vb5NoC5BhabZJ1A3CTYbUnomcSg",
  "key9": "375V89MhtohpFzCG7roG9jLk2aEKZM2KB6y3ABPjpFJgaQF3qx4QcK6vB76zG3sJTK7PC7v6VV2sc7z7Kye468eJ",
  "key10": "2BJ676ESjmsGr8uren5APuFVTf9ok288EHbA1ePcJCb1PEXuNku4KGJtmyTcbyLrAnVVybJp15rFrx3g3nMceVGk",
  "key11": "2n7osozB4r5rnJRMsfCoYRTWEt1vNLBxb1hHHqHNFbjjybrGgz2pb3znw2HNZwStaaB1pHVieLwYgB6hd2x8bsxY",
  "key12": "4gxqaKrjpyiHgYkwoxUUFCGFm5RK5yHmDuzwfP7VEPYmTEz58RMUoyvN7HUJ6RBojSbsmqgYesJRzZqJGo49sCvV",
  "key13": "554orgD9Qo4MZQw8CFZpA5Jsm2N6AkVRdieyeppQLHLpn2UUzqY4FKkCSmnwV8a9XujwJ1KDedUwhtsca83x3deB",
  "key14": "3kXqkgw1AANDdYeaP69cCm7saCYGCSncJoxnzBUy45nHGJhuuDgHW1kv6Y4wRASFhrudQaaVcjwVei86uQryNfuo",
  "key15": "3ccKQ8MM9yUK9wQBf5VkcfckH5YTK737WLSNJGGCd9ZHxcdy6kRUs8XxSRtRRjuc4R5voYB5aYQp4XYdMjNT7ae9",
  "key16": "41B6VPjWuztPhNiSdLGoVN2Eo1NGkhytAVDdobsJb8U6QJ2epQXJ7eEapd9Zr4cJgxhnxroftFFPtx6PgKtds89t",
  "key17": "246mzi31h1mFBdPTX4t5NvoLsArSPp6LzRj9WshFKVoFY4tVYJfacz4jDZocas6i3u1Zf8BLPxwiUKgB9y5bwauG",
  "key18": "KKQrgcDvPF9xSApSLnm5siTBWDaHn88ANYsQ1aRkjwWAStM2Xe7Sf9cYXTNUY1BFj9gLCqZ7RiTZa4FCk3wJNgC",
  "key19": "3in76nvsLwq3uze55Pw93N1xkwRpSFgPgNQ879Roh1iiwkRUVPKysLRy91xpVwzZsUSokkHYqNKwbjrgQ27zyaCj",
  "key20": "2H3VzfyWW4hNzDWfRKh1qP8UwfNdKD6K7Tg4bxHU3j7dm6571jWBwQkWRka3RhkdtvZtJRQ1shLXhnLz4zWm89uD",
  "key21": "2jsfsfrSHHm1rqkgSv2MkwewmqHUTbqQ7cPog2fNqmAvuFw7iiymhs6ovk1STat5PCqUwKbBb2x5JQzaDe4VA7pk",
  "key22": "47A8e75vcbJcsqJ9NVJdKS3mEcQ4tocTPNGDsJ9LUWy9bhjjYhafK9PSoouky9SiaRWC6FpQLNiGhBDG2Bt616ht",
  "key23": "3BytqaZe8pRx5LRyE1UjDivYtL1Gibq4GUtMbj9Vr3pd4BUC3sHFq8E1D9mWMhAH6xqqXRAFRPPLBLRNin6ejXXG",
  "key24": "2pPDkfs5VVRhKDuoXRhALkP7gpgTgfzdF3oKnENaXGV1fb28YxiL7SfLscuz6VutoY9idyshSbUDCCHLnp871Azk",
  "key25": "34ryJ85KZo7b29vYnvRH2ULMbTLVmm9UPBpGarMYL1REG1dXgteM1oih6sxqdso38d1QPjFytf8V7FHmg3gwwByS",
  "key26": "3JfbzwsvUwcWMZvWXX1aVAsevB3hd7iwq4QKuDitN7RipBoKwwPebTC8Skd6rZpx9fmEEgiWyehXgjpG4XKgcMFx",
  "key27": "MDiWDor1qjR25dAX941KkwytqdxcVkdw6kvkifn3Joe4rpHPkukpEDawFWVdCYfFL4wewP8BkjvfPtFZJKSpb2U",
  "key28": "2eYURj6Xr5tckCmhVWZuoRsvy4vNZL8XHT68q5mzvxqB71zPN1trNR2n5ZVS4JwVmcVPMuw9wZCHAZEnpnsJBraK",
  "key29": "4by2oE9k8L7tCMjVTjKieEAU848uAfjkS772YFXa7BiLBDCLmfsMaGJ1UJQnH2kcoZNUJe4xgb5PRBC8a4dT1Sob",
  "key30": "59f2CrkTcPeacEBznabj4jN63PMT9qohtHyyAr3a6hhBmo1GELu1Z2Mceh2xhkrMYZ9vt6QWD49zUuqrjU4ht1gW",
  "key31": "3AxwmyhEo3EjgBqohSHMSyPfwYcooBKoTpYH2qqpgvPgGMKRsrTFu7KwPLEx3dYupPHE4nrr18R4iAZP8V4Fp6Zs"
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
