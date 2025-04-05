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
    "2DS7jbiPs676AjLNh9rym4LG2t7fKjFj8qUYKAzGQq7N9hSQfu5biP3bXqipeGp3wGEc5DPexmoA2ni8c2Y3PkXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HohCQaU1SoFvU6JEcRTgttzGvWUKg93tFUetSYDQMzyacPsT7QwTLJJFZWYHdzakBA2xX59BD7kziWYcLvkZd22",
  "key1": "5krazewdjz7u1bXQ2B18Q531SbbKg4BpgpPBQkqi7euG8TiqWMkqLQcYVQqxQ16HDtR13tFAxbUDQhGp9SL9gEXp",
  "key2": "5J5uoeuJ3qEGDtWcGvqvHpoM7hH2jMUo2MHsGmcDB45cxaLPW3RNtbLaPG535QJxTWDGjBp5nMcFVERCFWepx1ra",
  "key3": "5vCH9Jmi1V3b3sEUYts5N3SaF5Aba64tVZv5kLNbKp5Ahg4CaD8WbUszskP5v5om8NVQ2DbDCJ5Rg9FQ2dtpnbCa",
  "key4": "44xieSaSSebHuYDtdLs6axPQCpzcR6LASdeMuRFCgwUTuv9hBS4Xtt5kLWZQptLXcbEyoqNt2WHxfeLj6MHsv67b",
  "key5": "317zen8d9N25defZhFo8fwmHV8ojg9QC1ViJLcWHiBm1uNX9rUoerEH6gXv1pULTCuHFC9bnVR42ZosKi2hSBqsS",
  "key6": "RmWnMni7kLtCgWYF7vdFpeSsWH9FAFgHW4D7sNJDkiiN7a7FXTe2BLeYhgCiPHTCuSBnHFuoMUkoCwtSPpHBLKi",
  "key7": "5a732ev8vgDkXQ1sHJh6VmHUQW3efg5kmNxdgvB1YLu7PVgDEaVvUQZTnFWvDnWbPW5PoAB3BbHKJpjUPLQvzbHP",
  "key8": "3a3qc5qvkXpaVhBrdCNDNNHzkdc14ZN3UNE48tizZCvqZ2EoZkAoGQP9aFgxhWYo56GM1gqFA25PQKvNKjdHuQGy",
  "key9": "3pUpxotwoxXVoHWGrS3gSyydw7hUVZ3GirqEJro5RMb59BcJ3fAL5LeKSEwTfzCxtkMysFgBMr2wkg6ynqCpWsAz",
  "key10": "qaUsSw5akeUApP5Xz2ApXRmqhoZ3i2f9sSRjjPnenuqKLQ8HaiBc2VtFGAcR8USnrpBGPiVEftCNEF63xa99XmX",
  "key11": "2z8MSZtdbF5fUB7PHWm4vyiEssMqQnT2WZmduBTzkdznMypRgvzmxDeD7FAFKt2M9yz2aDLzHnK5NwPqtuLkhNaJ",
  "key12": "4cqLrmZekqFjJrmBJEcvbcnwY52jKsNdFdrZM1q2z4vzJuCp3KR2HQ8Evwyjdrvd677z7YZK73htifp9fRzwtPe9",
  "key13": "63tBgGq1djaHVicUog3a8MWEFhLgq8qHpgAPu33h1PGoPtDMc1DrF2UbktMkF4nsXppCyu5HZEuYAbjLgXLV33Uq",
  "key14": "2cYb7Seuz5kXgwuGtLeKhm2GyLnj3gWAh9qWYQg6LLcTAcjvHLisKeMz5UYcuco2J1z9ZBR7miUQdXB8FRtPBxDu",
  "key15": "3va2Gr4xYFreBMbszzxThZWXQGhNsgvSAJi328kKsDHZ5MQhpoSyV6VdCsDVgr3pkgw9vh7fipmjMMu7evCZCC3g",
  "key16": "4dcnexfd6KbwxpSezu3QqDdADubNTz4RYysQbbAn9a6h2GtduLvYB2SptZqEVuQCAxSEab9yfkdRrh3nab155C6x",
  "key17": "32eaLB2MXhRrMWVEoFEnXdFujomTZ8fH2SXBsHgdV2aPNS8chmuRamaHPu18GDCMVBZuws3wKa77AEen6uH5QBV8",
  "key18": "4f5XqcwpemN8RsvsYWSBcnPpB3tNCGMwjNtBcVYBTaMTd4cVBYPQT2zLLmbXCvkU41W88cxx8fsKg1coJAWvWZok",
  "key19": "oyT7PAeeJyzToYi8dReDUacAJfzJpqJMRuoEntdbJ7jPqH4LgTcYtKXfja3grZNDy3E1XNBEsQDJvXDQ9tsotnT",
  "key20": "4nhpM4BBgfXiwU5ZwVUGHiC2NQLCSaSjDKYnQYC65zH8ejp58M4DPxuaNN6iFahfRMRjLcnzcDq1Bi4CuPy5L4Cw",
  "key21": "3sEWYHiE6dAhxn6wC18HZSviXpyWnAq2ppnojPVtMNFezzote5NK6mTZp6UHDcxGwXZxwnEgCebpEqxiang5Yuq7",
  "key22": "4E6h6NU7DoF1gFLKn4nJcTdKtrkfbNyWGdUGVGQ7yYnShjVeGYoLcDfZfApBXL6Qpk2jWQT4w4qyD4A514F9VYhW",
  "key23": "4VAgAb3SHYHsFKnj6TLjoMhewua5QHWNQPUtnRHtsgrEk6vVsEUCVN5VuVkso7sBT1L2RqGoAZDLbxUpUvNNYJMc",
  "key24": "4henKVEB5W6tYCHVBmQyyH2j7zhmwPYbzZGavykGRtzouAkUtg1ndtQVEWZ2KrucyB2eyRSKUWyVzB6t31j2xSF6",
  "key25": "2JEPxhTMKpuSs1S8iqGJnKDiQeY9Ddd17ZXH1MurEuuqLWdxeXak12toKCXKJ3FT7mPk3vM56VXrwMMjzvxJ9SaA",
  "key26": "534XjkeMYMbZodNnGthvRcFtn9wWUnHYzNJVNxSKhEztf2cJwi8aWybY69c5Fqu9SFhRsED68rgEKD7yFb7ybwSt",
  "key27": "61TjmqZ8VoptZ2wNkNcg8L5N4epz1xGT6xnR4aahTLz335NtCVrWpFykPQjzKsggdHpGLcCcz9spiKEzF64ZgK8p",
  "key28": "3ZoHDQtmQPR1G6MSFGByEG4ye7p9ZvQdffjb6twA89oSsRmAuSBYM6jtuSxSoGp9HeiKmtBHR9ctUFAwPdg4KzSK",
  "key29": "3imWD168chpjqxVcC4tUpGxaAiSjijmfbx3jcxGDACsnfypa6QLnqy9XThh5Y52nxhrZ9kT9oRMPf6tanS1ZAU5q",
  "key30": "2RD3GcXcCRUFtdk8F5dnqx4aWB2QFAXnAXsqdB3Sj96brV2kgN3MHuwKkVHsangQNMC35jUYwoCM5Xjnu23qr3mW",
  "key31": "5viqbsEXRxBMLKJkxXS3j2GMdmtwogwNwowEE6s7WkHgFLqAG4KHPnpbWVb8BccWukZkai3McVdj3Q7rL3egRsdv",
  "key32": "62i19Gh6SJgCHC6EG71STrMKnN6XuKYcjDooEW1aiUgbuwvBwpbZfn5PiuknfSX43jHYGUQPUcZpZ851fyU2GX6e",
  "key33": "4fd1t9n4weoWAQ3JsZSydXVQv7e74gigxgkhjHS6ebHy5U5386P3CiUhoAFHPuT9BHW5CZBhSVGjGW5f8Y5JXE2x",
  "key34": "5n7x7eZfKZmgXsETNnPZXr2Ez8gTZbiDsAXyzy6BoTLYAn1jSSCJm3gVUhTpbvzbuSjB1r94KBgHEhN8oFg6NZUt",
  "key35": "ks6JrhUUK5wVABZsynUJGbjxCkV6XEyGUP8dQdTxnuB6kd2TRRFbWfyU3Tu2Q5FXSn5SMf2Zqi5P2sAmcfpgi23",
  "key36": "4jV1rBsEiJHuTwwQftiUrBGv2WwcZnkvHTujm3cUv91i5DzqpKWVfKztWSQU6x218dhH7552frvJhr5MaHb84sfK",
  "key37": "26HyLQkMLtK2u9juDsdjkimg43QTihV2eXmz7TxbeQxVTcEbtMtFmyGGL4ezMqzUp2hYEJpCN3zgRzPeSoZ8wgig",
  "key38": "VRt2ahE7c2wqAhrV97A3E7Lag9eFgVAqgfyXECPHXcwQZM7xtqW9UaWRvJagA4KkMxmdKcd9AhCRHubYi9NFf57",
  "key39": "4rJbwgDJkkXwaW3D1NdTe13yuWi8pYgshvAkDU8GK6zxa4ydFdGYhSek1XFFyFfijecTuPDhwZGJsYjwsGaWG2bW",
  "key40": "3XQ5NjHGpAfJ1YfQFNSEpvrV5EYTUDLUJqRXCxA3f1zFif31DXd9wkme6yYfZoENTqWTTgq48MJnBLUxj58PyqYc",
  "key41": "2wwRBLPvZY4FfFcgnb9nviTCL9T13UXvD7FJzWPrDSsuJQwYu6b7CHnudXnPPE4gGt4oY7np3KVxXdScV6cgJ2qG",
  "key42": "4yFD7mfbg9W52Q9rKJ5zqe7KPgGVxAgwX5wGskgSKqk1nkhod7hsSxD4ZHYPCdwwjss6a1vvCe8CPT8CBCSkXGEY",
  "key43": "3EqxkAKnFCGb2WpyhSefQt9JtezfEyHYEjo3E7oyB2ravQFFC7zqr6fwWPCTzaWGEcwxqxyLF3Z4gVmdbdwBrjZ7",
  "key44": "4SbBXUAzm5mToc12X4yJAWX3QLuEWqAr96mCEPjaNi8429EptM8NWqSYoNjEg851RNKhGtnKHsYjrJVfUrrGF5kC",
  "key45": "4kTvQF2MiAQthdsuDaYpM568XqfQCh3Tm45GcnmcBGwAfSaWeBNG3kT2YUj71xAhzEJnDTnwRs7GnxnPAXpHQyPY",
  "key46": "3WR2NMdS8UbihHFRzwqBUcgavc3wUEB8PQZxpZSg5F9kry9qtZfVureXg2Vgtm79EoWNvsGe7UrruysYR9bJFVN"
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
