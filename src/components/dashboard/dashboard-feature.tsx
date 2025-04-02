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
    "FFkcy3G71hWmqic6xZC5mZszQTqDav3riYU5AgZ3nwcBHt44ZXgBkkvMkFd4aobPuPF2oGNMsMfFDumuhP7LGDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58W9T7soucJXaem4HNK5yjirEHAuW3FSyNrkKwGPRscmJfz4Wa5P8TeqB4LvzPGS6z9aumTTjybxMunrgF2VBXXb",
  "key1": "gszCQtHzqtMm9vwQTjFBB1ZbrSxfv8Rurkj7up8tth27wxn9nQ5FgpPuBLoEvXcrPRtQTQVBMxCUdMYLhYQat9i",
  "key2": "5BP8RbP5BmPTXC9fBoG7PuVrKHPuFGVzQhsYubYDLUGeEnCtmr6Vr6miRzfqoSWVEP2Mx3YqmCU6o8d5aXBRukz4",
  "key3": "4k3i9J6VHDjQFPiKfb3hZbtZKjpCG8i1zbeQe3NKNiTuxgkS4rTaNDHcWqCKMVAGJ5ds8HgT8kWZPbtKQSs4LGBD",
  "key4": "2bpjKRbbZbfBgJha2AfDb1dXgBKFq5hfwHvuvirE578dnVkKCNcpwmvp5aDTNPHhwfhfrTnNvQXJS5vtuRt4aYBV",
  "key5": "Zuy5UGtarkquK6dYTC4Q6UiT3QYbKaqRq4uy7sxW7YEgywxuJvujBvEJa6AqXawV87Ap1dFzLxjK57gGsLkjHbS",
  "key6": "hRTBh1SPKQAVnvUqQ1ai8yzz41qKg9KqhXC7pTzqCQ8inixjsxjDFBsaZc5Hrq5KipCDkde7jS6GPzGV88okyvy",
  "key7": "3gFeLHzym36waJPfV2xYUpbTk74w6NfSEzTzoDV3QSjs9DWhbgq3ovMyjBJhBFugaXaaV33TndCkUxumAiQRCVWb",
  "key8": "4czAf6k7rbTs9tQbrjmEqw7r3GvYKdHu5sCxn2PYkQirjuPhgkeQ6yodyxdt8eZL5HAk3CkzkGgkbcFjuxxEm982",
  "key9": "21ZKCmF7mbPtWM5D5eqkoBZNuCEQvdr2p9un2eyvqaH7FMM9EBYUVfiaA9SoHo2BLudQaphvzV8zsWmeQ7E5aGnr",
  "key10": "sEcPvfscBPQ2zRa5kDgd67UJdGHsHaBsgjJxuHY64EeCySo42tUUf4m3ssu6hmK1mua2RTaaqbys1qpzBgV1Swo",
  "key11": "3HMStNtwp3WA7LvWgKrqeNaeCtBn6cemzRKKme9fYGwo41JPFVYCzsdFqDTq6gPVhSm7sGffoU4bnX9jNQimn3ie",
  "key12": "3pbVFXWk7ky8PoSoZMjkZa7UCzL9ubjzGAPkMW92RqnGzweb9eFaD8ZeYPietV5bFG5ZX74edB6vqnCqihMW47eV",
  "key13": "DiUSBpSJJXtqp8wEtF3JLDwpWBY88F4Mwct4L3ULvEETPZhNDpJyonQL6xBfQW6sBmdMLdEsNDjc1TS7SqV3hsL",
  "key14": "5CmpKNDDHHRDJEurDxTgfR73nQ2b6Ju9EsmkrjYagJffbea37pquJrkrenNzshsePshPvSctnSLiHka53kqBdp7K",
  "key15": "3KM2pBWqUSWaMH5HKtJ1CptS17qxcTgGzppnbWTgGkf2kAthkg9qSYEPuGimhAtfZaRe4mmUYKLA1PA43N22o6AT",
  "key16": "2xewm1fvMrba85PabJgL4nzAPvskcD4PM2kPuRsoERcsGirYoRBHZXZ9qSWAiMPBLi7H41nF6EZaBFidLcGnEuQy",
  "key17": "3w3xD3Tk4ADMmLuaWFQyynZ3Lau6nQdGubduc1LTbfWFDxcUSjktksRL4Q8kQZSpvvqLddGYuYSAeCoYTaLfvA16",
  "key18": "5QtGeF34k7MzNbSuqJFge1ExPJCpe4JndqghYj8kFr1xxWqUPZaGvC4Z3vCL6tXNZvcye4HPdViiN1d2nGp8YhN3",
  "key19": "5rxDy6qyqdsYz5PF4xuJCiDZB3458W8LF1X1bLNvoELpExcbaDtZGxnzQGrzigF6y8bMRqfVgHDWXYYVcDa2vtch",
  "key20": "5nq6Wf3EeTHgHcJGxDQf3wXSu5whNjRybuAQPjjPrSAdb9TUBkoPVAGvDDMksfGVnZprxAVUMYxKesFgAe4kXNGM",
  "key21": "TM5bp5JrcfZv6LoNkkJpAF9zZkNdVevFwVUffm2jxhb4cvwCqQFtDzofRkzXWDxvGNmxozNt3XQahmTxSKoUZ7G",
  "key22": "5X1Uae856p4PxNyZY8W1nGwxcYhYGyaViGXPjVvtzJ6ioCVwM44osjRuwDqHqDdfWesvydfCxQEfiggd7yeRuRP9",
  "key23": "uGutHH7xgXY426m3Dpjz1E9msALgTsiZYQZgtReqkWjjZpw7GyYLqyP6SvzK34n7vU2dTACvbb8jjZwaD1MCDXG",
  "key24": "2U18L9D9aewtweSSGjQ3xHE4j3mKeKbxUyQNBoBXCJJR7hp2WwHU1bssH8be8CxfbBqJwZYhoxzLx5gXJyLvzJV8",
  "key25": "4FwDzWuHmH6CLdbxrdYn9cLnipVwY71T4cZw73q1g2EFWosRraoeScm9VyjCNn5ymQfKYhwoTdjzjCr6j8KWRsye",
  "key26": "47CSdCpJtthMzXo34SBbDHfrRNojSFrbD6B5Lew41t8oLq2dVrvoSGVAyD4r2Rz39jpLtZKwBaemRWextia8uEJE",
  "key27": "4C59czdJTRKLe4mdZ8LKaKjhMn4WfPouZvUCErAEzNC4JjMYCBaeYCFrSqh7SF33snMHnntUxeH6LPD33s6kS4sA",
  "key28": "3vV4HkK1i45j2RVnYZ691NV1cik7eLhGJg4wjoZkqhskc4r1wxbFpRt1q87u1Qtn2LDHW6c26byzdQMr4EcUCdKW",
  "key29": "4LyYqaRcGqQDxdCm7CVA6ARLhvgXqv6QBBXWL59BU1tW69ahvjsnaShiNh6CiV3bwPML6RSJqz1bH1qnAoDtVxAp",
  "key30": "3r2S1WQvV3HEmXk9M2tyBPjbwBDQ1FSqEW4SXo15e2kgL2FcQKVQYUK1x2nZF7DhCzEJfjx12ToixqMfao6F5xee",
  "key31": "Ndjcy1JaujRrkfER1CCeUZTV8nGr1cEjRsGGwLkkuPzoVHdepWR5p4RqsD7sWueYw9AJn4QxqWgYQx2FDc7TmLD",
  "key32": "2xj2TGzpCTP2bJNkn44zfuoQuqBDwYhmFHgDgDe1GCdLfX5q3KekxXfPTyFSKcPc92TKkKhUCXisvBBD57Rh6cnE",
  "key33": "4VcVfHKQEYQApb58qV8i4Xaht7tcLjNC7EEXu5xwSaazMXMxkXvAqJKVaYzEXttZrPPsg1jdenkNNYpqo8MbDptX",
  "key34": "5JSmf3g9wXY5SLqaXASoU9gt1YCo6aDcsC1vFiH1diGaakbhqFPxewdxsVufSLmpJBUYkGmaMjteYab3LHk6AQVN",
  "key35": "2ZgAzYvtUfdu4uLtUMgYSPj4nUzdXz939dZz5X6etNP9A7j4uX86rDCkpx2ia3gRijzUYfpMp4Yfj3YpNz13vn7m",
  "key36": "5ChdwPv6FHGkFY57xVasWAZZHSfJfFg4VqK33YAaQEAnbUSQ4WYH5gTHwe1Hcbvay2SM6GadBnUZHoRn75T8ntgA",
  "key37": "4ebsSyVw57cGw2Y5bmMgqKd46cVzKcYcdKMtNeSQZhUfztgGTnT8DWARg67Ufb4nqTaEfU5JLviQ6nFRmN55BH1H",
  "key38": "eDMcSpvUJ1sBPZsbUfXe6u4MtQqkmbZQ22zM7KT3qPxmWSfNqHwPW4ybatRCupkc4iUzEBy38uFUTQv4yMpMewv",
  "key39": "2yN8LEWVf5sRTSPz8ASGC6N7Jz91G8yjGXTTVVvytSezrxgCrrvvwcEGEDqWJNBdatdDfZ18g1uvs8J1kjmBakZh",
  "key40": "4S7FaCdEKNgzzUStWSp5Nydrq3dcvGWAmZVi9jhAixjJt4pfUmS7Koe6wos4zhn6AjjgGgZAE117fL8NGngcB4ow",
  "key41": "2czDEbLNvjWurFa6g97KW3MxdR6WD8mAy8vMg38CcPPtjfDaqosM6UBKAnLEDnT6cGDNCdYkDUy2vJmMuN2qr39R"
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
