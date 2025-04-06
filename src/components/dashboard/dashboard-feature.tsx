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
    "51ToLF8zX7z7YoueffVHCwb56VSHHBA5fPsD3cSaCGtHSWBYic8k98TNjk5E2QXrAyTdRMrEYG3maDKmtHXuzbJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cdw87oTgaEzpCGwjM9stGkVPAfQ1SmTuaxK3kZYLt9C6nWnM756bUqcJE5v211S7rSAS8BfqRJ7ua1UMZfjo9ED",
  "key1": "2E8eD5QyHCzN1xvyr66MNpi483AQjtByUSbXrs2Cxc3hdVN8PzyWpTCEKY3jizGx4D6CbcN9fABLjvPHEm6XjgK2",
  "key2": "3a79W6R9DHq5pF3J8oDRJcWTRkZpAjcJWTWMQwYrYsnpxtGoFd5YuAv2zkwhWk7nuawP7YZGKiyJjQmKXzjsnHNj",
  "key3": "hnhHMQJ8LoP8teLbrrtA1fVNyKa6QzwKVVJJtyWRrJpupfTMStMNHCc7bG4PhJfArcKSt9AvtNFpvPkfUk1qnLn",
  "key4": "37Ze3miSVb1hb3fbQnykufHXttPW1qKa8BsmUf6zqDP34prxMi8V74SmVzJdwNjoLwmufDSYjYqoKNm2FcTAviZF",
  "key5": "3fL59AxHi5Zm5os9ecqMEQELMTu25wckdPGrMPaEFQS8cK5L7z7XKGzHpPhRFM39sqnKfvyvuXkzuzggxgqK4Eyg",
  "key6": "3Mg5pqRdjoM7ae2HmtEzi74q7Zyc3VrzWz1pvgwipydpjgUnHLQbvo43pp1dU5ouek4jadUxt8PT4JhXb3b6NzQu",
  "key7": "2pcYGvxKkVdGZfhYhXo6X14Ct196S6f9Sa7obXUwu6ae29TKcNsXw2ijGfLkP66jirR45bUYs4CakPyHe2yp9D2z",
  "key8": "5d1ZXdx2fhda8R4cbN7iFfDYajwxXBfFqoeCFSAzb7yFEe3zyLxDDccL9qVEoA6FDTNqaSfWXKUz2CS6GS8egNNY",
  "key9": "2dLq1U3TZZhirZ6wGZsT9faB1D1un8HWjjFEV9RVCB6oB7Pnn6nvKpqtWR12BDDw3nU97ZgHinH5PQipJu6XczmB",
  "key10": "2tPWhKCv1mtzNB2pJm2EsNW3Qj28UrcVm8MqcdZMTxKgnJ7kJHwVXNEDhhKC1ZQVwcXUPGNLMgaAC4eixqJTayGF",
  "key11": "4EyxraD36e781W2mWMDmuwbcFpurSu4bS1XEvZqcZfndfWXvx8zhD12CXR4VmrMMUJa8N6PG1JTFyg9bwp8L2qW8",
  "key12": "66PhnYnDFh1LJ6PNp8rwQiaJxDZhdr8ULrH4VYv8Nd8ph1Fj2obxMKRVPiFdUkH4es8i16xvfMQoVn5u9XmPRwCa",
  "key13": "3HjDhuhqXUry4qDGhQQtkpqsGmBXKQTLYnYF9X6iekP83nqhxqtoC7P8rmYjSECsHB9viziKLWi6P6fUx6D6epPZ",
  "key14": "5iF87x3BubPJLsnmatazQmTCfEY9LiDNi2NqbM99Q8NKcEbaTa3ULDxjjmJXm9Ln3MN5voK6A6od8iyoAcqFfMk8",
  "key15": "ibBVspRrGxJJf8vh7HfehhEZEvQwnXy4K1Aqei48VjA6F7AdNs5uX1y6Q5GTfHqKshpgE2iQXeZR1u21xmszUoX",
  "key16": "4Rhc5wiB9NZoH5p566JbPmnwcizTjddK5iBS5CNwLRgu23i6iLhiUXQJyMkyJk2BgFBJomCYfRxHPA6mx8LRoEGt",
  "key17": "5vy6CQyuc6njKRUnzAyVZBXPvZrQJoQx62wfjNzC9fVNXVKyA7MvHsQCUAwJkreuk6a53GWe6669CSysr1Z5bgVm",
  "key18": "2URaZS9bESKLrVzrkWbyLqsUFkkGPuc3753w5xV2vdEZ7pJZx4u1xmgpHCrPkbTLwWP9XYhSroTr9RrGKn1Ric1w",
  "key19": "3jxt8uqpwbqSRAPoJ7v2usk16mCNm6BEJ3W8rJmvVwMkAZfkQ7bfDMfuxDj1dCDYWjf1bLMtAdLMCsqkN7Uvw1s4",
  "key20": "3s81qqDiLCKfs7WVnxUPny9Zb7eszXr6dCQfLqMQtjykk93ZXExkLjFfdjXmDHP2srWoXxmVgvfohh6GJL6fToGc",
  "key21": "CMu7f4jnLezVAhy7FuABjnpW1dwwMWjZBhp5Q3fyFddDPfcmuPvEf4K7k7vi7m2HLLmEXUhEGuoFhNKkyaiLDKG",
  "key22": "3nBBHxsY2rehaZkUn8t2qJ19TWXTnpLS4ENYqVQcdzd3fnSpTWXqgqwnFnoHtrAW2sm7WfNirdt81X1XaFP4hon1",
  "key23": "39Xka55StjxM6bScJ3ym1vU79siDWjhJYXHnCoiaT6ekaezQgaQBrUAAy3Y4CCUTuZxQX8PgndSrN3o6J2zULYqU",
  "key24": "5E6XarxH25TWA3nk8pYtwMGzXjyFBo5XtkkdCksTQB7r34P6RuBL8ABp8okCHkKHEvfGrBtaNw9pdnnv76EMNQ88",
  "key25": "3DBsqSK8WZRdWzkBaVTxXgcAdS1EMHAHTqwm3LcoJZsRc4h6GDjVF8WPxtNEQzwHM2woSDT455CocNkETQVnbeHH",
  "key26": "5SvbR2uJK4RCN7C7nQqJKddN1YxxQiGzSVgiesXgys7CgLNyxKpXsopxj8ZKhE9RYD1PHddD6kcavWByEsiNi32",
  "key27": "3TF665BoMWb9zfQoW9EcXbN9yRCmMTA9qR7TxtfqzK8zHk3uAE5hGnDSLGQW2mGrmYCsdqGwcbbqVsPjccs1vA7J",
  "key28": "2mbw99zGy82b1S6xw6FKrhXHmq6uaTqWcQphwuma7qZj7HndQsPQLna142iHNkV9ijh1KmTj3quVxEvuab3jsgcS",
  "key29": "5MBxwrDZBgiopqmd1JjtJkP8Ezo7tpwJkJkoxHGumi85NNs9fbSky3q1nZzrehWs9wK8D3gmWgg7RFPB3vcG8EAt",
  "key30": "4SsrNX88P3mjFFnqJmy9XrqURLqSiy9mftbLQ55umzia5ehrCJmZbFHWwyVcw7bRz5gY9sHZBE4webfeegtR6gkq",
  "key31": "3n3JcEwM7GSSHda5tC4zrTR7R4DhQxro4tGRmTmMbXGQg8yRqqnjCKmtjN5fgUxbL9MXgtKDtk8PSMwGeUsm6Bca",
  "key32": "5Eoq1G6YjAQcJQwxYM5qHirT3hNeHDAmhUXkM2imd5KRkWTnJmFkzSC8pnn3pR5kZcDSP41fvs7YoQQzHw819J6k",
  "key33": "344SEC8Eew54M66ziXNuxRBDiJPfbUsdmnSiKqMSawjofLce9LA7q8ceiomqYrL4kFo9v8QCCAhJV3JhmyJiGuLu",
  "key34": "3jxeJTKHEQQQJeLggZCCsgfDkHo9ycM6NrADccr9sVsZEktMuvQeN7tXhaCD7Ahe3L6iQXW7TqSTASmxnsVVFC8K",
  "key35": "3qQ4HywpEs9D7GrANrzGzNu6SNTwQFy5b2QhVe4aYdicqYPY1qJhHhHwFrpkstqaRz8yCCGw6XdHQMtgVjYR5vgB",
  "key36": "5hN7Yo4FivvRXNs6AuW3WSEPttncFYxa87DjzvgF8WexaYbA1FajGxweFT3SeAJX1NBCPjdsxQz5bhyaECxL5pmY",
  "key37": "8UgRnE3j5ZtYtjoFiKB7ddTzfYdp3TwKVLU3miSskRaqwcK7XJNBcnhZwUrVyXbgPve3bRxPYxjuukzNTSWVRRB",
  "key38": "Wo2mk8ip6DEu3SDa2t1m69hVqZTv8Gu96Gng8ZQNWveo41sm7oNDbpeKGd8xFcaCDs8BRBA4KPUoJgfQYv4L7AQ",
  "key39": "iyoEb54GZhFhQwKnAcW9pK7LSXnYY95ZXzqAfNXnXvo2yqRgZLSRtB5fJVo11DrmysrPQkbqdBsjKiPZR9NsNCd",
  "key40": "65gsf5hC6EoQXcwkUmJde7uhUzXEtV6FVAnyB9BgE9Xn5RMMVsb7LQ8Ej5UaWATrm2XM7yB5CStuPaX8hGo3emDy",
  "key41": "4S1jnUha5hQMy5MzJ9yzf1KqdACeq7aKVcGYv5J8EkyZzvASLQojqQCnhmiqFM1ScB1j1QishDNyUjYxtCxWx8W",
  "key42": "2eEkoDvnsAciSjYJNMyAnY12sttJUDt7t2xvEH2PdcQpn2NTU1Rk69BmbiEhPZ7fVKRpYC64bSwZQgLbDACneFuR",
  "key43": "cJH5WQ6GvyhBrrSwYYVorvnbUF1qErpgbFX2BZs96zUu8hMF3Dx9xEX3uzN6uVfGtRdnDKCaZA6hJsn8Sw8VxZX",
  "key44": "3rRaQEqb7cz6YGNwwRd9Kfxt7VtLrAZZH1ppTaxuQYY2Qc21JvRdrTQLHvgR5oquJbkGVCmJ3JqnEB19VJfJQVnv",
  "key45": "MjTphfNWLHWQwcFrPHp6XnRfPQSo1AatzQePCJTSbVcnBxghrVybuTJsLfiMdKi9GX7Wxhqx2K8tP48rYeC8hj7"
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
