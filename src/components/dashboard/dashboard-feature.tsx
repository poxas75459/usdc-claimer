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
    "ka9JFvx14UcoikfwfHB2cqM3TL3wGB8YUam6dj5s16pBVjCfc46gi5a4HSTEhRMHRnPXyJw1RpkrMUQpe8EzBD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XqJLrGiDHZuwc14fX5miSctrYeVyg5NdSoeQNUUGHkLdstnDQHmhd4tYpBvCH62Zyo3w9vPY1yyYfwFpHX6dLvg",
  "key1": "4nMg8kiE51QfLEbgzuBVMN54NCxuT3iURSVRXLF3MYW1MxczBhrCQxvWeKLEk33VFfpKnEAvnwhTMzHvRR512K7o",
  "key2": "ZofR4NJ2uTL68Q2sg5qfesdxZ9iZbLEYRc8j2poq6REGeEsh2iadnvz9DfN2rqZeqo7uYZh3w7Mgmy8TosjdJkZ",
  "key3": "5GproxY7dL71hazqHtYdKaYd59V1p9FrLXKidYUoVeFWMtPjSsazhykp1VNw58o7AMhoMvgxbsr45GySiFny36NB",
  "key4": "EgW4C3HnGrn19UQnEY1oduUHYeo9KBCFjoCDiCXaF5sMaaqMNfzv9bGcjnhKDQsjLBxLkawihFE8FkFzUF1ELSk",
  "key5": "3voJw8d6WUn8kpnvfBSzHg7WMPu4koRZNfDrfLdQVxfHmTkZKT73f5KLMEPEytCN93onF7BJpt737KNJ9857BJbR",
  "key6": "4jFH12BKZUmUUTPhfVk2XUaAaDWr3btKEzXyZuGWGTDbUaUbCwvyUvCq7n7AkMcu9fZKHJVKJK4VkkUezw2vrxAs",
  "key7": "9R8CG36eXNghP3TzTpXp1Yesy3h9VC54ps5H9fuZFfurWDF4VUEmNwMZvnMeyULbdTorEim8UoLT3dcLJpmz3Xv",
  "key8": "2iPsjUo1Q46aHxxjFEMsvMhyW1wVqeisTxYDGWUzDJDx27pkh14wvKXSMGMeZZN1ryVPmcVhqggkbiwXdhudpXrt",
  "key9": "4M5BMKDdyQwoNNw4E6eJzEPr3XfLJCBxyvGR4iVe5vMS2FMPv5sFaiU7QWvhWCVN6tANiaUERju3HbRqyzSBZPrc",
  "key10": "4GrveLdTLL7DmWwZbJ8K46zVdQVmLySm7TFZPdNDweXSdd4jqtN8rxVMfpjWuPHkRDzdc7fbd9M4dJ6kRD7Rsa3b",
  "key11": "5jyT26tZNL4NmnJYnDrqaP1iCysgXwjtjhefCVQ2uqP32Voj4pWsZUAQP8xX2bcBFg8MkDLFvTi8mYAf4kwzSy4w",
  "key12": "57qcbJeWz1fdUD4KybHWktUycGZTKzd3zRrjYExXXWAHAmyCqnuKX6yvKL42NGgo1KMsoCruJmcZFdyZ5bErkrmC",
  "key13": "3w6oP7RCF9u742GAPALo3EzXSHVmKrCFUkG2PYSpvB2aJaCupPBVpBtEqTkpLCjWp9vi5KQvpNXAKEVsmfTp6CNQ",
  "key14": "5Y9JZMsLjsBkkcjDiC57LoMwGexDVAZBALtHAzfn4yNAJn798HxtQdQ6xjLCyW5CtZmqN8cSAcXYnY4sY4BnyoR9",
  "key15": "5U9oHfsQ3EiZvuRRmHxEHHdrDmZ8Y4SpYQdfssxLWfrNgsnf8i8qWMFYfH5Nq1e6kK1N3iHYADrAzvViBiM5K7jX",
  "key16": "4fAVRHg4sd1kJiN4rzwY7JfERkLzj1RkcxLay5TNiFRhMpfB85f2fEbn9EsGVZZW3sURB592TdY86dKVueTwsge2",
  "key17": "6115Lvfx1AwupQiLD2VWa3mQVdwSCGGNsundasHVf8VXfLRtrkw8pUWc4QbFvawrS43EwMUjXiG8goEWD7ymnATo",
  "key18": "2Rm3nPkzkAMj4M4M19qWRvRChWXzkLMusEzHqRQJH1aRg5iZ3PGmeUCuzAfnBJphF41dLqsZyCqVTQB1SD66cCph",
  "key19": "5BiwwUDa7TnkrPsWSPrFDB4RCXNu1Cz1Xfjvzud6EEqgXbyKu7SSx52wwWQXoxgWG94bo7Fb4T9K8rn41DLRS1oL",
  "key20": "3r8Zv7Zw5jKyw6yPViARkVwfTp52M6hhA7e5pTEVVG9syxm56Ko2bW2eRmbYYXfeeWk7746vKxPMwi5kzxVGMAxN",
  "key21": "2TvygX4LPcdnv71G8DnJcDpp75efb3DLjZWLC2P88hBhfRdjYoy34PLLaZVT2ANvrxYajrHUmyoPw6GXLcim8jD9",
  "key22": "DoA2mmtTWtxTUbcsC3C2ebQ2PybkBbjA7XHoUZTNRQgJgVqeJoqbM4hdSjHNojVbFoD63JJGDQLNgRbKHS7KuqU",
  "key23": "3m6rz5VJt26U1sA8ED8bkL52UYMGawVNRNdDnYhHZMXJiMuuCKPYK41yNpncNoNP76NwWwuWQJuaHPMKK73KAioP",
  "key24": "43yvEnKfdAhrDwxhTvpjKL78Rvmv9pj3YQgig2BQ8uNQZyyZbLmL2MXqn4y8mYnAcD8E78R8Vt2QZSv2Ry8poFu7",
  "key25": "dwxRcFfcFwjWHfwd2ZVo2uPQW5LH4JgGMVsGvfkQRxt8ss3Z56wE6mgwzfjykrx1V4M6k7Jk5JsC23vJ6uiDqSf",
  "key26": "5VZaCbWFexAkKNwxyPFMk7ztNNC1ArHMKWda4anik4VAxQPFf7wjCNPvwUbY1r2PdH2PN5ZF44nLHfrCECWKLhbE",
  "key27": "45MjiUBFreHKDr4eCvWBEMBH5acmgs77P1nBrkvoSm2AdLfyeWNvvz6Da9VsPY4x3oM2NqBEzdyZnLbcn68GnVpa",
  "key28": "3Eq5he4EqxG8s9zjqyGvsGnrFRiT2b5RjZFfsNVBUQvgbnKMF7rsCenjLTNR7sWK6wTHhNjYMV576Rc58KfSdQuu",
  "key29": "MKv2PsrfgA9qL9QSLCCdkkyjrShKc97Saqp3BBcQ9yTf4uPFQteoHyq9nghGNS6PAMrtAGdTnyPbZZmWmieT5iC",
  "key30": "mQeqx4ERpLQS6Qegc2nXkvhKxGoXsJSfjmfeg3HR7J7fGLJRKJwzVf7mbekmjeiUTBDDM7gbYRFqb4D8NNVLT7d",
  "key31": "2tsAeSW63w9ZgnuTixcBgkKKdokuZwRXoACstXMjSPHApzxfHSmdNCp9yPdSz7abzkPdPJ4W17Kt8uuK3WhUUSWD",
  "key32": "6LKwvUqchayFuMW2bj6BTxB5VrMWVDQfNn5W1BT81R6EtkmoKoA4PqJb6os6GjLG5cBs6br6EC9ZEKcaPxjrFpe",
  "key33": "2CdZfEMsMxAFtvKGJ617dXEheFiGsi9rnhFqyFDvt1tfWKojc3yBWxwBg2gZY8a92VCFCmR12LH1YDPndMH2U6ea",
  "key34": "35HNbhqdUuiyanSgcnwaaMN3ZWRKVxavfsDqwAE8yWfVwoXMfEnoFhpQXS9TxoFoL5r6bPYSSWeY3KsRVK1Xy2LT",
  "key35": "4F2LWX6UbXDZX9vNMmJYpbq1SDXe8UW1Du3kraE6gm2pbTfUUqFbRhKgweCjXJYY3i6F5mSayUBGuDJDAe8aAqck",
  "key36": "3dTonZGFfNVx9wP8ma6etS2v3FtXqmrx5btoJ3PnCVTVTFDiQQuuRg7eh6efQN8nLsY5g6DE1VNXKTNjq88SdrXg",
  "key37": "5QBwhUdzmiYjR8fEztemai2WdcjFTyZkyHZEadZN1m4RMfJUnhm6JTht6hH3ZgZ1qJYGewMxinB5aKMU5nJWnYcD",
  "key38": "5MixgB9DwqZi2wCzSXmhXJzxCpUrYWHx1YHbmqdjcYvpCC9oUZ8Sagk56NazG3nc5x1xVdoV5ZDuAsq1ETixm7KN",
  "key39": "4JsBYdrmm4myr9xrVjddXeUanWZQsjRJUVURq3MzuHG2A7snmNrSoc6CVXojXzWukFo4X6xj1Ax8uGVv9iG8eYyb",
  "key40": "rwFSEMjugmXeocU4UayV6YNQqQYD7XMdmBbAxR8MyGF3tagpHEmkuuFwt91S6PsGyz5YbZwryEnropReK9AYmrZ",
  "key41": "3ShDBCuXXC5Msovn9qvMrru3wKAM2TNqFT12vtorWuHCiJLWU14S6WdChnpPYhKL8hL2TzdkuD58eHbCJ57c83Cg",
  "key42": "4hKd4dctFVCKbhX4HrjyXriE81DkJAmB9H8jYJdyH7iBss17hgtGrGiMur99cWhkRE4gG3zwNmBcYYwbhwoEaygo",
  "key43": "49KvoCATETgqChdn31RvbNLyTyhQUKZoRmBZXD1azhYQEPH21eKULSWLJyZrvZxNGyA3XPQ2XCiRwACZ1VoneuQb",
  "key44": "54wiq2dpi3Kga4bCWcVwnPsR9NpXe5ww8cPLZZw3k7h9p7eykywp7gSyCpiJAGPc69zd7seN1nNAgVVwZtYzhKhT",
  "key45": "64m77VxyH4si4gqs7BJRZstCE2n5trHBgeBCsVjkvpniCuVuWB7DLa9HaFSjBF6Ltgkgde4gBtrVXVMHy545jxNG",
  "key46": "gAmQ96tNWHe1QXMxJDuy8Pr4sy4pas6W222oA8EKfSeyGXv4gpvE1gNrFMpYXdWp2tPZVweHdZEkLgosVofKGrR",
  "key47": "5CLvux2TegEkvNEWGfhKnKuAdVZZTYkjJKiQgV1eitDgBZMsq9E8SGR42CFaheFczXfK9F4a3xMiyFbmW2CKJJxU"
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
