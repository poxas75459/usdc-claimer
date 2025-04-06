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
    "X8NJCB2rMg7wC8SJ32iDkBcDwf8BK4cKJntG8L2snwpFLGU5zHZQpnW8JaPSYwHiBLTnV6gBFgP4PnpQPVxW8FH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5czG919N698QqqrdnvR6GLGByPzhk8kUCCLYWoJBPJEDMTfbo9VdrqKU5vamXoUirCndByy7gqpd2TSo53bGpxmc",
  "key1": "4PqgEnLEVnxw6e4oRrTSLk6dRtmLfdMzstnngvTvegqWekhNdoqqQMYProRvtPRbZ5wVVeSfCE2VXanznqBuM5C4",
  "key2": "5uBCQH2twygurAo9FjdE9mwwtozReNz3pNNzhTmCAJJqMYGAL4R6SWxb4PEBxWQUX8i2Pgngad97ZncxQYSiTaeF",
  "key3": "NvJnHUE9N9YCKpcdGoy3wnqPrG6jPoGLtzj53P7PhUQyaoU4xMiP9ZBfp9wMSVQEnnVejBG5UcSpH5cEvvn3xNb",
  "key4": "5EdFkyRKPFhFVDeCiWfLtS31G7adPzmyX9wpEi3Z5DxoBYRL1u3WDkn6AJZo2koSCM3wvs6Ro7jFECphe8dEkFjT",
  "key5": "4SBiMkHEcsLtGnNPByX7RgtrXhh78NiyWS78pqvaQ49HyKiq845RdKYegavWUw1paLNArDpvtivwXqT4p5gYYB83",
  "key6": "7a1NnyGLPwoD6BeDnZYqJTXUccCmohNLbaFQbW3igC7zSDz6ZXzMoJb5puTpUvmYSkJ8TWdK9NwsrXEwcTXdk6z",
  "key7": "LeFv8istQ5rQ12bFiGrjbd2NAC5opoSEpNXovo4aw69qmoEtGFbzY6GGs26KTaKfiakMs9bWbrdbPS7Xus4eoSU",
  "key8": "2W5oEweicjXX54FuhBm548n7ErQxXF5KJpP2bcyBAG4HjtSZYoCM4Z91SNAJAyk6RNqd1fGveX9r2QAV2wLETh6z",
  "key9": "W8FPk8A19szrwsE11XVDhC9BgEEdm2gqRD6q88RAPLGYCCU6XzQ9UVApzh2aNncG3bKAcgT8q3c2HwT2MEVz5zm",
  "key10": "4RD18noK6X4u6tXW8EV4not8iCqvRsgeHettGw4SeCJQp7BufcFBYzWzaaY2oSW2SzSQjKhaac7akjf5iQ9k7Uqr",
  "key11": "37Zu95HTjR4bmvLkyjivonbNPZQMVUJ2UwJeMNnMfTTYbumDJiZ915emn5YjKzhZ2MGzUBwdAK2fERVVRR3uFHuG",
  "key12": "cwET5gjYPJukYZNg4EZ33C8XEKqcWVXqPqeHvb8STXpjUtKGgC8XGwzXwt4CyoTkxRH5TwVuTHabX9oceLy3N93",
  "key13": "4XeR4hwTufc5rEe1Y7Koa7tgcPmmgFvj73WJz3z3KRJMiNGLdSk8E9EEQcE8NxzkmhQ2f3VXjyej8XJJY8sY6Ctp",
  "key14": "51HVcqxCpfAhCMaZGNtDzvVzn2q3tp9MJ938ukEZBKqsRoxgok8hFPo4PGjjXdrk87zFuUMkq6nXVSKK3BT6nYaW",
  "key15": "3GqJSziqvA2dKuyfcoVuxmQYLsHVqWNvmFHZCZwDTq53MqZjVojSg1E1nemqabtpvPPEg5ZCoRnKVhRovzxr4YWS",
  "key16": "2Es2B7hXS7Xmv6xydY2dyTkcYmYyrvUTeHwrbsKcd3wxKQYB6EWiPDCYUHsHj4jnEtwjAcPshxX5bxAwR9KUCCxz",
  "key17": "5S8gHPtbJr91BfgPfoGS98yqoSNhujHhuy7riNxZA6RHvxBWxnVHnJp5vh3GEHdq1qcvoFEBPEXEyYxQbWzvCf6o",
  "key18": "AU5WpSaKwhogDJriKYBv7Jo31TaMrXwgJbGrfzrUfvteKJ5AnkF12hksn1NCPfUZbaFfpCaKbLMc8MKkU87EHbJ",
  "key19": "5acPFQbSTk5nJ7EQ67WoKtWP1ddTr3PTFjtuPvnPg7FegadRRUTjrq5jactJnr6sWdKKQPCjuVH4rXTmtDixd3Fw",
  "key20": "4HnZB21Ego6TDyxLAfChUvw2H1PJMkKiLXtPgSnw7PrKig4KLHnVXfH1ekNsmxSZczXsEa6npTLaeNseimDjAnUM",
  "key21": "64q4JEkmn4zLnZadeHiJrqnqhycLBWeFnqjqGJ7QuSFA84BKZrTTsDVW8EqxEeN9qKbu9eBFoyYWY21eePj1Aw1V",
  "key22": "4fF4nUgYzn3cLQgefbUpFFDNV8Ar2qDbphHm76iGJAnJXsR2CBpvN56ydB58yAtp1FVarbQ6w2B9xW6neiApBmLi",
  "key23": "4UQxSA13R69e6HvueoN6fyQZHyvVfDN5UuKifuNeohPiZeQvgJQb1872boJ9QTWNmsXNha1D79qd8ozp11RbCV9T",
  "key24": "3Tvrry9G57vXYqyoMfspCTv5BT1xnrHmonox5zthmwqhcyhesj6FnfHkwhf9fdi7Wy3aQw7pGkikm1XFAgqf3P45",
  "key25": "5L8K8PgBDzyGXnGtox9pzg4iD1QhUwAVUFwumPJ5BM2hjcev7HdPBdbvm8eD47CpLXha7RSdQ1wCTnhGLJ8aZG31",
  "key26": "4d5KuWG6QZ9nQKyNfZQLwe7whwriCA9zEYGSJ3FeKJWNY33Wmk5CYE8nVM4hdx76RfcVQUL8u4WN4osnHzMP9nKW",
  "key27": "5r4y18Pq3FBQEjGoauBBb9Ft3EUmEaAbDoEYwJk9ZCzDCBmxuH39CD5f3HfgkiQHBAaD6u6fcCVyfxd9Ps4gXcbm",
  "key28": "bbmaQFRS4gzcLcq82yrqqkHXfvqXcZAyQLWgK9MttzBs7rcG3dR5reEyxEewxPgqQYgwA2uKVzKM3xYkxCARiMK",
  "key29": "5M8cBsN7hR5qUkf8hfkSBTKeBb4cj8vGcENNvZ6NGsnc9yQBsTwsm2fL2CcjixaDRyDRLvwRbw1zQp1LjJsAPeSc",
  "key30": "KamxQcCxuRBvy3x828744WSzEe8nWuqzVrogTczqGCVauCMU7WQKNuQeQ5U1pGbUGfCYymNaZ5ugtSi7BTXzvxL",
  "key31": "3o3dSDhgnx7mXKD4WCvUDGWmcCy4oQiqN648MvJqqvMafKizncJktgrzspN74sdVmyNnmYrNqGFYDBAubEv8Ne2W",
  "key32": "5mZpugqn7mWkHRwfaFtZFWUSDbAaX3y7DLbsY3oc4Kc31MNzvTBUn2qLSfrhxV4mZvG9BdBMyZC6VvKNTdzEmmMg",
  "key33": "2umZ5AypwEVK3kGqruy8u4MWwSGY8DznyXnyfPcZ9iuSakKpxqApV6kCz7T7FqdmFV68cc2r15m3Wp236Ht3DJyr",
  "key34": "39UQrhQE8DUevaeCr7mSAqzTrkRgd2xh1N32GuKNaebTwNfLNJnNTYutFxu4NLEYnLWYYkkXeiT7Rs3RyqHYiEgc",
  "key35": "28GPyp74FKiJijzma19B8CYZdaSV33qLepfRYvdyhKiRtSomsayvLKywEe22AyZifks32MeudSVguPVPCds2dQaE",
  "key36": "34EiCxPjT52g8CFzUzToCNQVafNN3Ttna5BPoFMNaGfMKNRgPSDHzPBUMGVrd946NAHTKd72tX93STkDuaAKu6cb",
  "key37": "5CMfAo32o9yrYJSW9UQWgRd2m7asfAushWj4U11VjvzmbxeBztQFNZ5ECvb96hXRdXN8mCVRYGEx79U9KV9YNb3U",
  "key38": "5EbWEhxx1uTeDtHTUzcG4de2Cn1XSUEeLoN37kAZhLM9Aznrc2VtcGAcKVYKUTAmA3C6YVdT9scyhms7UeAPLRiR",
  "key39": "AtNi9RwkzCPxo9kyDHDttKjYZuGz5p5eWXFauSme3MPXAoKvtFLTQAviwC3SqsigFpmKnFcQsnMzaYMe6anCVVo",
  "key40": "244zUhFTybGgDzdPaLgRLfhrKkijLm2bATjUNPrSdUXHKVh5T6mnkaqL9tyhQeJZxfPFRBx3TQbQZ8gHPJBrcMqR",
  "key41": "M5W819BEbQUXZYJ6DH7iFdWDwNopdGXZAL9bLyj4VgNEJQ1HZSwCQ4GbuiKEzCwuZsQkxcRrBnSdcCpLrPXdpjn",
  "key42": "5TxtneRZwJQ4y769hWf3EhwwH1Z2Bj1VNxLTB5HN19tGGBLyEPFZZF9T28PuyAsH6kz2FnPiSR69pDd1nTttoK8L",
  "key43": "4nHHcTmwbajrgyetwVEdVt7SjVkBXMLSL2mQn6jUtE4AEsdqYKmnUZaeMNYnPaSK6ZYzym41fnk5Cy5BUEKj4i8b",
  "key44": "8D3fUSSataHW95aXZUvYroQgKNAHFyTcwv3oTM4Nu943HCQfU8EVtUSJVhGJHusJoJRkttRxrmPxQAcN3nfZ8ux",
  "key45": "2ZMykeALCeqECnoANSZUUKu4V25ZbDEHjDDku3yRknu6UtgVCvmixEozwr2diHoZQmSYNA4gtsFKfxjFqNLtMoEg",
  "key46": "5JmLxGbdAvHVUTv1XbVq2BfKtNzPabkP3ucuLn5G6PtTQcfSGBTNBui2eU227Zj6KnH1yviDvyRtHFfBWeWUmfVe",
  "key47": "5K39rkBFn4iGjUPuwXmMMxjYP7BX1Vb4uvvDFRNeKeyun2YN1nSyy2qyRa7SDHA52r44R8XbniZiSf2iwQwc8845",
  "key48": "uoWPWUQ2kE5idKEYqE1nuLQ54YkSCpKxNtu49u7BNesaUkKapUPdbBh96hLDewwpQH74m7TrGRubqePECNxeqHu"
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
