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
    "kCYKoD7szJC8ebjAYCufsMgHNPmdMMYYXBZjsGUTHAKU2ZjBK9tyUVAfJa6gk9sfe1h7LsYEpW3Su6Uuu7eMWCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dXH8mLhs2jDGeVqNJGbiauY5QjWh5J9seGbpnHTKmLMgUamC55BMsJJqVAyobXW3tWh82rjswNvVQCg8NXowLDj",
  "key1": "2ULZWPwBePE3P2jrTNhtCDFWbTHc9fE8GCmhyuP78iKUVctR5sMFbVdxnCFKovLT86uANFLuLPQqNj6xF4Mw2Unn",
  "key2": "FY1A3rEgr95WDCLiBtv5jEWi9dMaxHqX22WySX51fbdiwsh8ZStniodG9XijDG2q7sVMraJTsBSkPuugdxzERXx",
  "key3": "5MWmd5vFb9D4JZAxyY5x3CZfLyqeqmcyNfmMpG66hR77fnRXpYuMuMGDXsuSFevbn6Xe1hmmRbAEm4W9ZmtrUhfk",
  "key4": "55VaVyvcy8wBqadkYCNNKbv33rJAmxGaUEPuvEQyU6QKDR8JGMfmHSw7HiXe1EZJuX7K1QdryjCWvBi6rVqaJKXS",
  "key5": "5FGFNqEhJqftUT9jXoddW86XHTDXQcJM78SDhZYXjiTA9GrKqfeJcFnQGodgKWarbh5hp5kps5raanF9ErxD1hkT",
  "key6": "3bNCcR5m9A1gXKPBQV4nmAngpyNzbZxe1TGmvR1RbffPt9B7kke8yWFdswx3fZX6ZZ12Z1VoUU4M3EbmtwxyEa6J",
  "key7": "2FYTeTpBQEsysW2sxZiJh5XcvNs8DJiquq2YeKmjVAYU3V7cpdRGzr6iEKC1cJJz22szjRXRD6QCsSTLnQxEwfUH",
  "key8": "53rhw9rUoq7FBasKWAkd53z5fWe2zazzKnmdqARaBD15FP6C76SogCdKwNiZRYA8mTvb6oShwokiw6yfqPvBUM7h",
  "key9": "5my4PfKWUhi3exRoL2RZfGJ1EryoYiuXsz5seHMt8o6pP7oRWfei78t4UNQHwd8EqYVNh1ti9ZC7Gzsfa7Q7qLgr",
  "key10": "3KJog2fDgspztKdBv4i2SP3VWMiPbZnYDhXgqyCRx61pTu2Gy3G7nEVKtv6FRyLc1BXCUr988X98bKCSxhbFcH8B",
  "key11": "2evJHm1dij1FvLNpY4kzWUVyGFg3YmzTUPvP82tkG8hR1dpXNuZPvzkPw1N8XEa2xCZ2sfQ5dW1K4ynnCF9pADwM",
  "key12": "3DtzJA5me6uwooeRnPnCrLRU5JaNJie79CFakp5aav6zAJ2YzyLRR6x5tfUk31dBecKPxmZ2BuUwPdpa2UEhqTPm",
  "key13": "YEPW2Hf2dDyhhi6QN32Xacvn5LM5CU9KELXZd9wT5Aa4agaNUMm3kHamz9pgZjsAhhtSccwM8BXMXeq1woLAFq4",
  "key14": "5WUU6zrYdPW7i46aZrbMC4wqfDR6ABrrkePT9VUHn7RDzJSLQpxjxX1M4XnjS8bwLxQVss2bcr1w1iwmWjEEWLU4",
  "key15": "5dQMrWwxgtCuGsUXmR4VTMrGhQLNrSkgGwFJdDm7Lt7W1XUBseuyrUdrf66eRVYPrmbobv1kgxwf2XtVwF9Y7sUd",
  "key16": "SHmZrbvVmRzUML4HnpvoWP6n2bY28mnZ26jx2sH5bkkEog9G3uiNKMDMvdbhYxNCVH9vxBjepbqqKLj8Zrms9dd",
  "key17": "4Es28pavZgyDaeeFy1zNrPCyYnxu6iAougjpezqaTiFt51GLtXmBAZNjw1vR5jFR4eh9P1LpVFXEv8aNzdTmma5U",
  "key18": "aYaBcTdjXv2nAHqBiu2xRfhGZCy61xxMTVE7rPLWgDujuAdK9fcUMwmEyPkAy2QzdiBS84eDJagPFa5c5LEM6wy",
  "key19": "5NCypHLiDextT88tUACtAVJuhSmrf6toGThgEMKShU8qGfTBv5FR4wz56VjdY4S5HM5nAJ48BxJjXZ7GeQ7NgPmS",
  "key20": "yWktmrUDvMHu4AKaYi7pFWpXChxn2sPwKmUhmbDJE71pDXkbYKr9rHZLU5NuDT32cPHTjCDbJ3eTmLxrnLVLcek",
  "key21": "XemZAkebypw4p9tqPSssS28kogTSwyYTWNDQ3HCpeARyteKJcHkRSmnC4FVV5FDfXPmYFFLDsaWR1mX5T3uw1uc",
  "key22": "s9Q1Dbmu2Gfv59KvYrdUStgQnFnEoDWsfA7prH2SsXecEjbqwoB8PsV65M1iqFMNq68H57fBAYqr6sEUPgX4scr",
  "key23": "2P6qWmAzyiktFcRa7xP7c3RTEZni23ea5sovUC5huSq2y9wgeQDfmMAtN7m37QSKdpZXe714Yb6cTBhtCM9zYp3G",
  "key24": "5Wq8qM1TvTqeViqCfwwQ92p5W6m4r6uVhyR8Re4eexkERn8YLo2NF9DUyLydt5yXnmPGmi6YrCyeL48HVQtjnSbg",
  "key25": "gGYaQwVBA9QSZCXyt9xVahuSHqfGGfUGTyLrue2eTnM5L8YCPoB6wHtYPTeuLtnxCHefV5BaKeE5GKrcAavwNaH",
  "key26": "4Vic4Fqvk2eFTw2x6XANFNzAn9ogvMG6Mm7v8swhMHH2Z51VHDVLXVCJsJ5PBS3KSA1LWBAMkr45mNMa82HAZaEM",
  "key27": "2AANeKEe92kE3WJn6qotAWcuwRhNE6S5WthkJqv2qU3xNAmA3qZ8J31N5UwqxXkScupjqH2y4hWW2zrGFUc3Q9vA",
  "key28": "5hkv2cx8trvesrfDciQuuugGwA231kpf9VYmx59E6yRegMsCCfw5MQHSrEtehrdXv8hpb3Hf9JBe76C4vKriw9dG",
  "key29": "2ZNcyn7Nge8rqoZKdaitgpW25bsbmbrZxwFhVY1kAxfP9RWoQy9czPqKUPPE3N9MQksZae43MU4ER2h8j813FUFa",
  "key30": "2ZViezjCm15rpS6ZPVDRyw1YdYpxq6W5kTBwJoJDudxdBk326fjuoPDDXGk1wZiMVfnqsh7ZsuN19r5HYds2ibwF",
  "key31": "3WbQdkMBfYMucvnQPfMtFs8861iKq2EUtaBuTpKYCmSQ5YdNAYUhR23jCuxQas3pN78AH8hs5JUSHc2k6ZoHRLoy",
  "key32": "2p4U5USbxzuyjHPv5kfoaTwmkNv8PgYfjwDXBjiHyN6fedmAQhGiHSzHbJRnGtcVjT9aE5izAH7hdMuKTaQmDNai",
  "key33": "eUToR6NdicPBEctm1b2swT4fynPx3XGaBGdRRppW7QUvQZp26QhsqZzDxdjSSdWyS1sbcwUsgURYQVrn2He4G86",
  "key34": "2RWwB5azGXfujKMFuEUiwGVxgKjxZaKCRzBKmBp5SSwY5YnhRWgH1J7RF5yFcoGub3MyquzXKfCt63E8nNgtNh3C",
  "key35": "qf72bxLQD1RFw5fg68vMhPGvX4s9Lbb7GYWsLKa3rACzeTtFwUmRNsXvCEwYZHp5irrQLoqr7jXCbqcksBsdVUZ",
  "key36": "2WZG7hhQNuni2Qu25QE81BYw5AKJsntmBpK6UNpJvHhykUt8ozK8uXY4JEUtLqbRM8YfWwsMccJ4ApBwDpct9pzj",
  "key37": "24SAD5GgbUTnyeE8VnzqpEcmCZpP41yNhX8U4Peiv4ew19ggPXkFToSPtZhT5AftRp3zvGoDV2vvGVXwfm9drNUh",
  "key38": "4pwqiuge57oFS93LUqkn7YHi19vuv6gAkbUhAjADgryk3CMiQ4u5miGxJTAaPX8vFofjYVMqhdU8aVxbdmp14WVu",
  "key39": "CJbLaoykY9rFpohsF1CHV8Bwc2XT99nVfDbUE8seZWvGDTAevn9UY1Aw67eE5aJU8ZXobE8hBr93c8kHSQdwa2D",
  "key40": "5dQargmZRihb71wswsgmz1HHiw7xMnKNRo987anmrVAzPbNzr61Nk7tb9jhXq73iMgCQ5jdAz4eo4rqko5N4mP2R",
  "key41": "5CQ23UrGmHxY2v5AT9PXVXnmZ7kP6aT79eBpaiJJ99X6ry3ncj97caMPtFenZiMNq7jMNzwL93MNowGELDyE4HFW",
  "key42": "v1F3YTSAk7pibtWJaReSKMkGDQNiARXtZe8xJLK1EjLcWH9BEJ7UyNwcKmycRArEjvUsAppVXmchr164n6i6Req",
  "key43": "3VdQZiu4DijY69QrKbHPVdvebxgG5Mi1NUvZKKr6SPmzxgRC36jkxXZq6bzb7bv5mRtVg5DgKmEiJRChqRvBiW6i",
  "key44": "4rLTcxnJKPziK3raWwoDCcrK7odo2EWJRU4dyRZ6g2EHSAXWcbTuiMxUoLp7jVGiT3mtDVt5Xs52G7PAYt3aYXDQ",
  "key45": "35UdCMUMY4f54RgCrfdduEhbvsKqcxUjGLrFHZGJaFxfSif8GJpXGsPLRv57C7suEp2bQKRE4RHTHmNcrHtiDiVt",
  "key46": "4aaLgPmoQ2E44zR63AZmQWrqZwjbmvmzAo9Ut9NM4ut7icYQsa9j2WwayE5sehoy3BJBvxyKTmF41bFgTMJLyrjx"
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
