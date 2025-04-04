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
    "3SjppNqKGU4iUGwVP6WCratshYRskTygzpdgbfC6FYAZr4sFSp3q9AcFjK1bgkidVqA94ACctzv1riBeY1ZZPw95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YLP2r76mxtDnjPYzBdkztERkUT57qFpDNNBTiJWQcQ4LMw6tGpPyA82hp8aoMAY7se6iSLNPf6NdzdJgAphpa3M",
  "key1": "eAEq4829rFF8VqHooyhhLoRqLZc8ALcXVTNczhSuF4mxNG6HnP7cPSiS7nwGCtqKGaE1xwQC9p2K1UaZEGY1FeN",
  "key2": "2EHz31kF7iF9TnX6VvmN2tpKBQzUSJs5VKoHWmn2RpNZUhu1eJPvqKyvm32JuYMJApUh7GrndnQir2HjbahHCyZn",
  "key3": "9D8RvPvXrLM8vsKvXrGfmuSW8f5AjCUHGBBwzh3dnshLUMNBwp75xGftUbwqPE4cqiw1pXvLKnw3EQcExb1kvR2",
  "key4": "HTxxGe6ydYXWMsF2ZPnjCnUEi8GQeEeFaet1DN6aVPQKXgEc8FGrBC7S9DidTAqcsEhT7sTcXW3jEkbpdmL5BAi",
  "key5": "5FjbK3oYcFvQDcuC2ZoHWrpP3H8uYJ8bY4JE2tHL2XdNTfGepcbeMYTzUM487sggBdh3mWWNN9WFQhrLh3xiqPe9",
  "key6": "3D7b7XBkbh5DQf5KdbrUtz7GdsqP4c85uFkdsDYgeYMkRyxnmAhfHNdM8xb2R8LB11UdwukzxXkA8F8LmdFyu4fX",
  "key7": "2FwYBVhs4igD8gSfM7FYgaY7HsjnSQo9z4VGJv8RM82zpeFTFQuTHda2GzmZWLeUP6fh5uqTHJug9LPc87VQAGxv",
  "key8": "tuPQP4zeLAjKqdKnsXci9RTw3wB9pFQzqTrCVW6YvC68rFccR7CvHbCqeXaVJbXYbZXzLrQXhkgzC3DdgWCk9FZ",
  "key9": "5m4w6HeFYYL2GZFYAsXU9u1KmyS1Jk9WVQNjFmSstAeUBKy3AFsuTiS1uLipcvXYoVJ6zyp2nzJ5LweH5ARQGdGL",
  "key10": "61pKJ7X9ZGATCczWkkZAurtKuHqfDqwWmUyBiGxunoZ1FMU98BcV8yAPKdGmvHSR8rUfiQTPPR5Jq6Rf3C2ADkcJ",
  "key11": "3gC6s2DV4vR6MGMBrg74dGnL2iLmMoVab7LYE6p5oDmqbf7xhAQmhGLKhhNvKkdTKJyiqPtTVsVjuSwRcyuLSvx7",
  "key12": "gyxGETuRvm2txWFKE3nM2zp8ZGnQy2R5yaXc5Z1EdYMRz6gTjS5nCakUwj8PCg3vDmMhywpyLtdSdanwFpxqmWF",
  "key13": "5xG6ZfbTXwavifQgsHwMV6Ye68gZmWChDpgvpXj31fWjb45vZQxbh2EtGN6vRruDGU7uuJxCgSL42XS1wVsJ9Buj",
  "key14": "3z1aR3KzS6mkSXDG7kRmtuBgbhG91ERnq4jAEAi1cWMWqqG4f5y6JQ6uicJU4GzKs5xXcUunETFJHgeTfeHZ7g9F",
  "key15": "2aJQw49Rh1cAze27FQUkaZ7XYPTR2fEA41ezvuV61joiwW8bkzs9ag1F67YF6EdTsieij3fcmks5QYE68WBJ5eAe",
  "key16": "57tXsmmduErVzX3x4JaGCe1VhjujWaLqYGRqPnGDmwS8wAfGQxJwVeXQP3fos3ocy68z2a9YhM64tdPYuBEGv67E",
  "key17": "3QtLMDzvwM5T29FRDXQBPifaQtXz23qni7WkBaGTjYrezrZUiZHcfptQvuYN9LBAhqRMQtpZzdcQGjY7gYHCQUgP",
  "key18": "5pqyhXDjNcCQJQN8XRe1gPjDd5zNvE6mZtwJmzXfwbx2Xwkp68djPdprTDn3GSx9htpadJ9pm6cKwkLgbAd29h7Y",
  "key19": "2VwTmBhR5k3GpaJeLiSGdsax4h4RqxoLmKprBNkMr45Tgk4GcysP5HqSd6i5Ps9vGysnGzHj3hQG2i2NDaivhYST",
  "key20": "2aJWMziDitvQPDQACgDDUsFRF16C7BcD7UiDFoEpuEZPMT74xYqfuYDc5CpvHXc328rn1MC2uRixPH8bY1RPtack",
  "key21": "2tz98PWTGppFqnGBsxj7A7o5HoviEHreU1GmhKMJ2d1VwwhyZRBx8p66GrAB6UNVKSR67o7NHSDwfCHy6xvYqY3D",
  "key22": "5rc6KWQkmgdZffSpvuTnjAxMu1eb6QW39xWrXUuzaeAmSBzvjKHySmtBNSbu4sBk34nsXMVP5RNybg7GYGBdKqdx",
  "key23": "FDwFELksT736m3Va7yRSdAycoWrpJMfjyfxEKRW3sRExNNk8hMEuC6V1uEr4M12QJV6Yz2rLTt97LmCzrDqAEpS",
  "key24": "4rMqbW2b21TabyWnetmUww63xMLq3C3oCStBp334hSsXUGjhgr3CAvGpAPBWVBrotiuDeMV1VavLPtcqyg1G6rQ2",
  "key25": "2X1v7Zrt2nWaKpdzDmMTfE3ChkzjGQqceBiBf5ui9ZmPBFefBxchFxbiybC1jNoYydujciNDbBrf864qYqfUV6tF",
  "key26": "2AGoC9Q6EHjPZUctqfwGTgLG69UGKguq7covgJ8wfHMpDLMLBYdLnBaTaL3PYcjcWGPNuh2GzK7j9JtYtsq1mgrN",
  "key27": "2SJADyk6GKvzQL5Zzf8JMZ7Kj39T3Eig8QtdbW8KJEhqNNwAzyxwfZvt8qH5fo8dAJwkFLQcfCvma3EKj1oAUe7m",
  "key28": "67KWTfxYyw46KJ4G3WSArPVe74gn7B2jSJBXy4BayYKQBdVkGuvcgnhFAyGAybf6RPFc8D2CkdssJ6DTBCuPKfkV",
  "key29": "4HdDCZZVhpvcoePHS6yqLSsJzzUhpQsvYB3wL6GzJDtT78UkyTQK5s36UZV98SddQS9pUijXUrNgJzptmt4T1bKg",
  "key30": "36Q2MVKwyoLgEBvQ1SSZ1nPGHYTbNqJMYtSQdZTqXfsjTG9RBq9SrHrPLWALrdfoMzxHxPJbS5qJusPJmGJ3qbiE",
  "key31": "a4PprdkXSDVfMVUGYbwyukf871iaDJrWMJNL2PF3EUPQFMh59T4wun6dEPipLhne3JvkweBUxdvphgLp88D9Euc",
  "key32": "3s1ucmncTmFFcFbBnGvPLHagkAQuf3NgwifBWWJPSZ3TaGRB16ZCECSLSMQFC5oUt9LsvTS13cecN5hetADqJx7G",
  "key33": "5ip3cfX2GZvegkmq2NWQztBG5Nf915hjaZfKLELicadUd63biefQaAYmotqpjdbgg79g4pogahoFgirtMk7hEu9T",
  "key34": "4WobmjPaAJiWRRnTsWCdRoDJVJaLmdzYbKGHC7x9FkzAQWbNBuqLoPzkYsGoDxtf31rV6ohN3aAtcWSAP4oMuMSX",
  "key35": "5ksJFjF6TpB2FhwfdjZGLL8iMJuvse9pfPfboQtqELu29JjanbaJyHH1vfKjsYvV9CbzDn6gGrWB1rY3NiZFd8Lg",
  "key36": "2JgfJpYnekLJxVUY9o3XadjnAePmB5MMyNyZ8hFsJ7JQZifJQA2kQCCMmoSjN4mXu4GgtX4JYFGdiT43vnFRKiQb",
  "key37": "2eBtdBS5DZdnBTJDPqsSdDk994f6Ui7maoALi1RLPLMPzzUackJxbkeKw83kFv5mfYfELd9odYendeNgd6bGBEgi",
  "key38": "4eM2XHD9E6VTxLfZLN6iawran5ifirTMQe7sP6nSQBvfqyQeSUMzp77BzEWdWMPreXV45uWmnKG7rWvwZkE8VLiw",
  "key39": "4DFxKdSTmGSNsF1XhiPx4goZT8reqJkAK6FPdzSMJx2b1XTDWqX88yCNH9RErLpwQpEQuGHUEioFW2v9PqJdiLCH",
  "key40": "2NynSUwegKJrmW8z2EgcJoWnnBqVTMDPALdUuwkF6GdXabjxN1BAHDXF92SXyEHXmoE258yAz2GuFYvxCZFVhY3a",
  "key41": "2ng6kTf9RAvyqDLnjeKqQJMUfmHusy73FaywP8YSKB4dhNgn6b819pESSX1yUVDtHiw6pFEfAbM4cT3BFjFtmwS5",
  "key42": "jjAnuxUVh8sPNKX4tbxu7bj6jU4pvZq8dHreffv3SCAQ3K9kX5THL4fGkWbm1oaPw2EDY4UhExAb1cssM6dC2xi",
  "key43": "5BNeYDcc9qBJ4NxqrXN8pR7dRYjUdSHCmucGXhEXabYBJ5DspZXfDTiHhVbDwkXPbAmufgncSBw37bZ1qdyWdU5K",
  "key44": "4ijCN1brr56cXbt4BrJWaCBM2c8U92hbcg7Y9Aj2pT39WXz1ydak4ZiNotxe9Tv3aDkyM5Vvb6PEXVFRVHj4Sm6s"
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
