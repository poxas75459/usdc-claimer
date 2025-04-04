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
    "KXMBUbwXt3FjKUkdNvbUtb28PnPB5NopMgvDhE5gD7soWPzyowyXFcR55nFP2jRrVfvo7t2RMzTcBF7SMgj1ypq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qocnHuVBvGgPRNKfVFwu2D5t54ChpjMkMH3EWb5DgDwpf3CyV81WMb5uRnuwKTLWqwm8PL2egSmwwupj8Lpi2VD",
  "key1": "5mcysJKAuTZok74V8qnnMBaVqKfBq5RTgex2b3sTDwxzZJ615Km7h8V2MpkjZu5rRhN66YiYzJDVSTEkh8XaubyA",
  "key2": "r84QuYKfacDcmMS6AfRKhCoSdx1cpk7qzNGBAsnPqrVb2R3CFuJguYb62LRZ9QMnDTqdT5Wni4anYn7mvau39Be",
  "key3": "8YD45RT8unNcgMiZ3DBdqPKoMKJjWc8MLLTVhvKVohCnUVxM6G3JNZ9cK12HXjyTg8gsSpr77MXpoaFoX3Q5DW8",
  "key4": "FCSxSeAqsQiTSwLiukqZJ5L1Eqgvzn7v9MwfLax6Zvb1h7t8yu9SaVxeeLFAXe5nZpgmmax6FrjesM3ufaZQonB",
  "key5": "2djYi5KUXRWiWh5bxxZme7j9YDRSkh52PsbWngFfpFiWhVyBTKvV89kdYxHVcoJgcGSdtFZ4yTFvWjAmunTWZLe",
  "key6": "5c3WLNt6zbGs6JV5hTDRpDMd76yEtsLCEXZ4S8rE6jbkzcTuHvY51ywmaun4hKRVDg6ZR4hum4MJrc5uFFwJAtaG",
  "key7": "3egka4LR1spde5Tjd49FgeByfAEN9TBVRJ4p4uuKzoK4pXqttHAXoYDoSwQJm6WpWANeBMQdpuX6MfoaV5LzxE15",
  "key8": "4nuwesHcYPtKATKidPLUg6283Jqmkc1ujLqHBbqNyRvcBsUojiunFdRFaw53SZqtArquJBmDYdRhxxLNWKdDcqx1",
  "key9": "58jHzgjh2rfVVpUDjcRpg7D7fiob5DDxbyDCKHHPT2YjfB6cq1Tdq8PhC9HKSQB5MzbjzPdCf1zDyQ5bJL3RHEKH",
  "key10": "2D1cJHDhm2mDSThKFTXp32MY9W5Vk61zFT3Di4iph4AcxJPU6SF46vxoDF81mwazdpKiRQm6bm593VmZQSZ9KUsC",
  "key11": "4mZVqmurNv5kgZ1JFcaDhUe1WtsJ5yErYVYiKWVZXiGbHZ9Wt6nJpDurQ5bXYoh7ZpJR2ZGenUoP2ucPGtDofe19",
  "key12": "2p5maVojGB22rEAdTFci56Xc4WT982u6R1F2PCaCKh2cpefyFMrNGXapbmstkHBBWZhL8bXduHEsAtPUTFGhBek2",
  "key13": "4dAmXe5Si12jAESibCQKZDjRZ8ZLC2LL3TVMMuUoCHp1nwtagfvJjZGdHXJc1SpGQXuAJARo4wcaUPVUx8foeGv1",
  "key14": "39x7Xyek1FNUiWXGYfoQLYJYnW91oMYv7pZBHkcKBbYj6pdsPCGMcjjEfETC5KrW4vcn9SArSdLB7Ex2rPzg7nQk",
  "key15": "2PJJVJ1bGXvT78HFcRfXH4KFWP2ySNUeGcR8vRtDTheKaEh29GVGBnnG24y2H741LMC4aDi8xzdH7ehb7xg3ZQs8",
  "key16": "43SJ1P35qt9TEpzYSeP81N3EXBSd4gPdG2pvi9nysZ7qNJakWJgxM3kYLUAe8fowi1HC6YYX9gAaSJdRywBinNo3",
  "key17": "39gYx1fSJwjWwuLbGwLaLXDpqXe3orniPqzBQ8xaTLNdiCaZ2X33T6PEjAfaByLtW2byiHMxPYZLh6m22TjkvgpR",
  "key18": "2TdXZdSe3V3Ub7WUjWpfNaZ9Uxw63GtoMHMZP4ThskNnq5THet26ogLrp8yefezHJbGpno4N5cPH22CQvwvuWjmw",
  "key19": "4DNZ5UET59ZUgqFPxy4SgSAk48vv7uZwZL9RGWPzwyFB5wmSy8amfAqSjDy4KXYVowUoZA3dT47JZZ7Mc1dis5Tc",
  "key20": "2TAimtfTFVyUZ5PTXtYQWi2Xd9t9FAWZL68zS8x1S6USkPYc9JJK7WFMgKtV78uM5a9n8EsEtQ2FmtvmpHrn1ktE",
  "key21": "4hsBDE2y5mU2EyF6d4h4CNgN6uVFuDEVyDfkyTiaGsbUxVXDueBSgi2p8ceRKMgY2GttLuDXxDA3nWYeCJPwjGvV",
  "key22": "3tVtfFfPjWNPRk37u2HoiFEtY9Mm1v8qi3aZw6qgvWz79qVFcm9hcDnabJzhrUR9nA2cNGYT9KpBzinXq2nntX8A",
  "key23": "4n7kkdC1QMhebNQFw4JbjryZmrBE8thkQ9ATKZ54Z8Rx2m1MKZ6RT7ddDBAug7KWGAhgs5eCQgMm2DhTeuhprLA3",
  "key24": "3qiRLR3HACkQCR6QxLasN74hapP7UXg4QDGa8eQN3FAv8s4EuDCDG534QU2sqyLDqw678nCjNsyciE2uMntCqgBv",
  "key25": "4gGGe1K5QXi9UuMvNmS3LvETqsYFpWLStWkeKhBmm8N5n7nTHN2RhTCSPYAdnwE4rkqp2vQs4MZcwNhum6Xk9J2Y",
  "key26": "2ucZBCAAwfrniLdCKfXuNfHiuvLyKAspCAm4CTdgEbiQncBwTT73DxvSXg3J3W1rCRsuvMfWbFmDuWygV2hWAGku",
  "key27": "5JWA9TpAHDirQHh1SN3NYA3zABU3jfcthRD8Bx8yXYTci8xxkwerxxRyZRtQWUBCDVyDRCqx4rwB9cfDe9WJQ1YP",
  "key28": "4edLMeuKmTuLkYRyPBrBMhaFti9iaKsydqXpCUL2qD8Uucpp5HwumUCiD5VwY1QvLdPiu4eHFXdGKSz3i49GcwoU",
  "key29": "65kunj3Liu4NqCTi1UZTy6Ayh17wD8pCZ7SHEP2Y9YRmW4yaDSZQdRToAqf3ay7ZjKVyqoq9ZqQYPDFAW9vHsgy8",
  "key30": "Ssmehj3WaeoM8fPT8uReA7byZzv5G4eA1YTAjBnnVQuTkyKNxbmvUc4ugXXestFGBVpEqL1Y1P5XLHUaoFkd5HC",
  "key31": "33kwM8dHLCHtGCXicM24bb1ejNtPuf8j9m2mDEesk5Keh9hhfMXXHyZiD7TWfFnKX6vA8KYVyWorXtHWiBZ79EqX",
  "key32": "5tWDrm5EaSj6Mrwi27jNwhw5xL6ciHnxG45UphGFgZ4MHTAtGagqjWffJNyAEn85K8h3F6v4UNeNJ5XJXUjt7M1A",
  "key33": "2Fbjn1yF4MUS5FaAAw9xoqsmxMnsHev68H8TfZvFvKCKWtmk8TAkXVupbHrmd3hEUtLX4x2uHPpfLtPd3nJWuk9D",
  "key34": "5FY3zatwgbAN1MU2PkS8WhqX6b55cxf8E44DHQUPWSs4GE3vSmX4ZmmgqkQW37bqTXm797jqztoV99xGwWBKqH5n",
  "key35": "6445ShBfBmYsy8UxLZ5UwJGwK9VKwznddeQ62NW9yZQT6Mdrdjc322B2kr7ZD3oQjqtF2bnLZ6HFEfuVXpWXJ9t2",
  "key36": "57psuAbRBxBkjX2CgPdYewwy5QqxqymUuN62SFnZsQ223CM2ysRVit6MjcLcBQtT1m6DStBPvsy8wQFYvb2z2XQG",
  "key37": "4QM9jwtAJTXmgyiZiY3p32gGHTQaXEEbRgAes8vtKnMd1AaZ89KwpDak9tTivWsCCE7iYqhbn89aWkpd5peLNCWk",
  "key38": "5As5cPDDatfDsgABHb9vc66rmzpXxpuPxbLfgXBGCaPxotfJxQAYyxYyPLAXF5NR8b3HhTRdrHYzWJf99xJXSshv",
  "key39": "BBhK9EU1LWLB1i1ajdEWx7Qtw67ySxPRzqBr93HuVe4DMaXNKdiGcpbwMg3DC3E2zv7aDHjU4rGnB8scG3rThEc",
  "key40": "3e7F7RDBCC2W1dwJ3JgMUJ6gF8nprgiuGN5s6YnfLS77or2i1KjnGQyaD4NbJ9UGpbWVB8UnPSWeZadnifL6WZHa",
  "key41": "4A2TNNuuuRKzqUXFTjrPhbLYqqBMpnfpp4GiDSiNCok88A9vgJmxMwtr9bFoet5Jv6mWTRc8qsNKKrpeCopLTEZv",
  "key42": "4vELTQPRdZ4teMh3rrS6KptcTGM6hNzNz3LZXbSRSWumRkoq96DQCtzqgoc8i16tENyYc6xb9yHVQ2uGgTaJ8Kzf",
  "key43": "45TSRwbHAEuiBSSQkUW568JJH62caHrryTUUx9mfXP3E8YhYcwKPMJqmGAu8gjMPtLfR8pTwyypHsVC7psmn9u8R",
  "key44": "5rQRV5EG4HVUkSY386LL9M5z6f8jJ4HQsiUdy6iwFY7kVdTQ2NZc4EkFgLeybX7BkVwJ89yYyNXr37Ra23i7YGLb",
  "key45": "HbB8Xz8jPa4eXN1153HrdAnkaKRzF6tJZjAj7D7UEwGLLZtd6ticiPUww96gEvAmD3nVEZTaRce97HnociwDVnr",
  "key46": "28GHyyNkBBssgNoQajUyuxFEo1e5zPmGypoURTuQe6wVP136zEedgzHRLwwpDyGZf1W2DQB1gxjY8GU7CLGzek2M",
  "key47": "61oggiaD2MFNFpn1wzUGnxitMVVsAcfm37QrPCNJFm8D2nSRq4QLQKPxsc9KbrDf8WfmyeQ3LLaD17MgC2eidocZ",
  "key48": "EABenudYQxshJ9bAT5B6yZHjTTj2X5pocreDUzgYj3zAThE3zvhmaCBYJSX5Dujd9TrsKcBeJNnXXCxa7DQj6dA",
  "key49": "2EeVjWnp64rpP8iG9DZAZB4ZWBpFcJL2N1YQJ8zjeRob3VtG9cdRzj1SPyWgQm28AkWMMesSPuP6bFkA38cJG9d8"
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
