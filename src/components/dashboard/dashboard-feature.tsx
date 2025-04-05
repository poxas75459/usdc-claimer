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
    "5ynkp9cXP8sqoTfQghPg8TTQb1TptoEFXUFwn9snuVBPuBDFu9HvXmGmDWZNcyeRpSTAVWsLgEHByPf82jEnbfaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w2oxAWU5T8ig4Bv5BzcUGY21odkwMmAyRieqJDvPsumE9YdWEubipb21m73iE6JGiU8i8jRoYMLUnf5YaTnB5mc",
  "key1": "RqTzHHtRf4KKDmEevvqbu6bJevqJ3mQ9tUkG7L8HVpE7kJbKUqxp2GWUaBKdUvJ7cEEq5k4joBhBQ214bmc8Ys7",
  "key2": "5e2XsjrwL4F6e9yK9qGz5XPKuDtx5P8sXwhRroDUE7Ei5wd3dsiXb3TCZfgnWGoijGhRo9rb7WSj1ULbVf7pNaoJ",
  "key3": "wr4mthj5NiAEeuDjxa2yyE9kgoMZ9LEzQBSygZJXiSWppN82v91KkA77rMVtRBxQDthLh3gDaTaUVZ1JWv7y3vj",
  "key4": "hWh3CSjTGfwA2piLr5pYQ85LQfKE5SjDsN1M643CgN957FcttGA2TgcB5D1DDbLkMVnxEG5XHjs6uXGJEYhgUow",
  "key5": "3yegdXzuEfKPUcsog7NkZMx6NejKQWiBpByrC86ijXNBk5dd7YxfDov3ZQBHnjbcHWdXLmHYp2qP9nKLqRAptwZB",
  "key6": "36hfuEEVXgsRdwDE4EkTiCTNkiNY4a5BpF4Y7C52MDGtRpd7cgvjAa417aKyNdyUKyWDBaaBUVZVtme8qTVUa1da",
  "key7": "3r9Rwvg2Roj3JbNbnV5wPyAkTCqZe6p6Vn2jZYhvhtf7kkfrA8JbvhDQLrJdziW339NmjNvCX2m3my4PXfNeQbv1",
  "key8": "DHd2haLyzBTqZrS3Z6iejqgEARvcweE1f3baeWzTQP1P8qgyGqFuZMpzu3FpwqUJE3yyEuzZqf1XohB3ZWjkTME",
  "key9": "31J69ixFfG5mePLmerybF4jNVwYGWoiocDLLSbR4fCw2LFEHLhfNFCR77nLa1CfpB6rBX1mxwvF6DWKb8L9aQpFK",
  "key10": "4sCxZf6D4TwgPd8XFHYaNsgfoAxWh62DuQ6DJ6UeN7b9YnRWW2mQoVaghVBXR6XF2YyJ6MeL19AkL7SJrhXoBXhc",
  "key11": "kUZnm3Mw36iGHD8HQrQb2nSoRqkT5L6pgiqWAMZoHcDBSWiG2GXeBBGgnnJ7gU9fxtQ8VHe1V7dQEoQGQbKaceB",
  "key12": "5z9rSYBKsfBg1tphY9PicseyBMiqAENCRxPyj7AmNBx9sGfiPX362SoPpgMJAPFNNQ4W4oFjhj9e3U3uEY44Xa5z",
  "key13": "26iptLZWyuyLsBMToy5NmoXDndD5pbxxmXPnQpCqqWMhmabFFsXZxV6BPqP2bvmDnjxz2Lo6Jpo2156qGCRgnJAo",
  "key14": "5WoekBAcjZWq7j3rP878PjQx8gJpdVX5Tg8C6cA7GfQKrHMTfiaFsM1zxR94aFZqb4wNhY88pUrbAYwDFSSPvhA",
  "key15": "42au3XGaE2vVDAHf5ZHmXmMUC8xapMAhydbrZRLjpX329ZRgTwJZZR8s165WeGtPoCNRchnWdsetjm3Dkfhea5kX",
  "key16": "5Z2KxJaEYpLeR7sGVuq8oVDyABfkzsGXz8LzjZo32d1exgiNqSBv3ZdgrCo8ApgFDgsEYg2GuE4gwGTq7APmKFGK",
  "key17": "4WkM7JDBy7QkJ6SvphEpZqW3zQgGYQmKi6svPwaJBZkMUshwBS1YmQM6FP5rejRj4Ay2NdKSe8XjoW2BoWTHhFVw",
  "key18": "313QCLX1uNSFheSSp5Tkj3ttMuPJ88iMfuKuVbEEqfJHue4mtGaZkk2snPz1BW3j8rkczsKqTtuwodVJD4nR82XE",
  "key19": "66HTXqjmkTX57F4bCuyRdHTJ23kqT5HkwLrvouAc6s5eFXcobAryqt1qZVrkGheLX3zaxKLCMgV9BbHK5Qvb4Fmm",
  "key20": "2s7TW7BWT8pqSJh16fzmm3VmqbSeWhk9voUDxXm6WvMGhBNSgcJkARfum2z4DhadnCzEJ99cF8jyka8EkfTfqZaV",
  "key21": "24WgE2poDvs4gqg5ZoPs8rJ3FW9o6A6coKbb6f4wwdxVW9mLQnDsKji38WveR2gBrAAAE7mdrbhmSf8wesv6kkgt",
  "key22": "5EtmYgqsRJJRtVTy3ejA7ptCcK77MFzRcC6coizXJwiASuf4hjAyUKPASjzyesJGGrrzLQcFVxfyNzbYL9mhyKC3",
  "key23": "2dyACVRYTDezeEvBScRK7vY4YCGjXxAeBUFg8KTWcVUg21RHM7KJuDFyvuyUyWzGBpBxFMaJhfn5RXwgWah4253A",
  "key24": "w9CfvVoprfW58kZZ9aq1mf9hfW5zgdKKQrYRRwgYr91qsUdxzhcUxrbBJoP3CKc2x7AUh9P9xBxcD26UQu8SpoH",
  "key25": "3Ngra6bHa9ZTw7NYq4drVj3cDFmE89RnCL9fGXC5TdqeLzXniYBtST94AUi6H8wANeEyFwwewwTSRQwUsNjtbYLT",
  "key26": "5QLpm6wKLZYAFUTiP83AapW3VVu8DSWHpK8jCm9HFFhXzPfkKrNjS7BsBXmJJh8CfjiUfK1VdTLZpt4Mr6WTEUvE",
  "key27": "3y1yzP6cfPrTEHd4sS4qENGSKWCK2muaGV5AQ1tXYpdpKSF7Gp1auSRUadWnvbu4Hpsn9R1pQFQuLrYCw1whAmX8",
  "key28": "5KERNnk3JtM38rFVijWt6s2QVkXKspoRGkSFNWLAckLSSq5pV95vGZWVS5L56N6Ks8pP5og2hBjx5LC6Y3iQXLBa",
  "key29": "4ezQjnM6fUCN62EfB6MmubxZnKUCyVwP1hjiBwg2pcam7H6cTLS97oLWmZFA5LTkjctPxtfJHCRcPzN1yuxsndW8",
  "key30": "5k4ubqhooESAMCv3VzNquZhc2pdYJ6w4iv4GsjCve9v2yJaY2QaxK3gCxBhXJz6yatS5JB2HVk7fycZAUd2G4npg",
  "key31": "5Acydu25d4tjkWJ7PrCUrJkc8gUNmnaVypuCp5tu4ihRnTJLCnTRKt3pkVuB8VkbYQe1wodSUqzuN2z1QF9TwQXt",
  "key32": "3Mm48toJssCvRgWydhKfrH2axnjKgVexLejiAKf8MNadYUxjDu6nKTh8RgYkD7RDXRoVKiJmodxYxvvc88yWDRiF",
  "key33": "3MG1AWx8oxQrMJXF3QsbB9yAGHYpgrVnyg8RDJUaK5Vu7hD7Za5mvKWKsrN982am9weLq9CNKhkhGFx1dKLWLtVQ",
  "key34": "58yvvx8yKdv5VB5M2LVERwdDbqe5CbVjXFfqaoGVW4MJtHxrfmdtFtDmyhAT7WWU4SM8ji5PsTuUbve8iReHpZPA",
  "key35": "2qivdUyPnDgU6sdp1xUWKrTCjwsXTvK2gnJXFpdijaGL3nkLt1CatTw1X1yvScpiBPrQ8uDHiLdm9egpMPyzxbs6",
  "key36": "3cRjZKSsFmhaJ3GmD8DYUeGYrNTHoHg3qRmFdKc9wxKur5KsQB7Y6qFdmrE4hWSxF9ZDZhb6J7YTmH65HLzUA1r7",
  "key37": "3q6kz7YnR3D1HvcCzC76QsZdQ4fLiYrzUGkGyxNXNqBrDzb6NE5UDb83MUQ8fbbdAekwvyoZmzmTRuFVa2uinBgu",
  "key38": "3Vt2aRVL1E7GfrF63PYBXFoafMASMW9E5acXdsLunq9eFUE4byDSEXU7z6wuKoYr2dNSJznzdv77koTpcBAaNkfu",
  "key39": "4tUvW5dWcHUMzJ3ZbHt2idUH9D2JD66JAQiRy5hq4yKVVpAhHrXHd77TkLuRcFsF8nJTjw4dBVBysdSdAbojTNaM",
  "key40": "4k6aZBbXngWeAyrUMi388638okucwZpwzazbexHBjT6JPvR2Xas3DWgswwgcWdCckeNEwoCxxusnttnqpesjAUwy",
  "key41": "3tK41MD5HHujPPKncQ8RktZW1GDkxWm7Nne8TEzLS6wMk7FMSiAf8eFRWifyrTLTxwN73g98WLEhjZok4CLCwBcb",
  "key42": "2f8cDfrqdR8AxSUyTXhdPf77BMF91pmQppS76CCNrVwcJvAkJk6wA7WDJenmqC1zW5hn6TU8QGpVjtgSzqxLky9x",
  "key43": "3C4R6Nr55aGE1U4DWwEjGhgvYHmsa89Hk4HjYaGTLVpAfF3AfjoXo7tmNFssowCePRGGB6aProDpKFUfrd2k47QS",
  "key44": "3oKJi1ehUuXggJoP8aJ3d3kYWn6BxK3Cqgtno1aVj4w5UqesMDaSi9sWZxdLGDQaypwKTobN6R6WgE5gKjvFzPQ4",
  "key45": "cPQ8MSmBa6Mq5Nu1szdPN36kQdmj36ZkYzieHaNVFQkXycCLKtpkxPW8gkzEEeQfABJ8hKzTjNqcoBHRqmoNQb8",
  "key46": "3nGt5Q6njtZNMN6qYUKZarCy8MK6un3GwUQn5CbB492S9hDjCzcPnKwjaWC2DSrSJHoVfu9x8QiaGAotjn13VAYz",
  "key47": "2NYQMWuSv6GzGF3dNfd6gsw4YtCbHKgk7zF7E9gTE66dZUU2FnfAfRL2oQbU23bk8KrvBcXL4oKHSkSf3KVUqxxf",
  "key48": "6rMJBAY1v2uGtnBEfAhUaZzvJBpXepqpuaXs2pPbbJMBs4WpM5Y6WpAbZDBQESjHUW45es9WYHEGMJX9To4xmon",
  "key49": "2KunyNjN5YjDE4iNZTpriyfCWbqPwNFCqP5w5NkSga1yGTPvJv5zkJPso8YzGccaWKpQvaVcw7cmxjHgSLekEMEa"
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
