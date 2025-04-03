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
    "5Y5RSn6n2F4shGiuN8U7jdLehX1wgftR38HqkWu8hV7c1wn5VY6zeFJFEdtS9NjtFeJMXfAQ9RywmTr2NEeyfHoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CXTPGnZ23h6EJj851XBZBykUkM1PDPacZAmRpbdcjdhvjBJARscVb63PrfV3e3mELqGhJg4s91hkoWQzeb392DG",
  "key1": "2m6A6G8uaUZt6TqXF2qhF2UVNi6yHee4ESdExszSoFv41wBdiXYugTj1MBmgu7paubwMh49TqAVTmT75hrLkxL8H",
  "key2": "9L4FntgZy3WZjoEPoLEpCeaiTrGnSUv8UmG5L1ctNqum97q6feKeZ4mm21r5BL8xp2HyPTcKzM2N4yQfqWDsVbR",
  "key3": "2PavaurzQbPYbSDSfWXYu89YuqW599VUFQ2ztuKYsLMLQRQNYhxiXbtJjS28kHxBpQqS8Gsed21ogU2qxfrd6v7A",
  "key4": "cvCjXYCqMXBYqK1xnB87uyhKqbYpCfRYCcbuB9tocX1R4TmJDCBtUsErcEgNMdWRUL1AZhmiSkfmw43oqaFVKb6",
  "key5": "3L1xJTo2FVbnCCZpbHKJzGnM2oYnskCYCCQR2LVcynMi8Sn2UbNCENDtVLG3fYtRAuM4TR2o45Hz51VXzV6GGTaW",
  "key6": "5deSepLZSMhqc5ge1rgyPNYGN2mRxuDG8oZMV1todBp5jf92z2GUf59xPiKQdQYsXJuR2KaH9As9AHXM6ssNhR6v",
  "key7": "4CcrA8xtpqKUwVQzZUy2ge2ZRt8AkSXQnUN2aXp3Q6xCLtxybdbQPv1PjyDyRaipDd2T75K1EnmWMjiWkVm2MooP",
  "key8": "2i8Lj9v6nJePoyn3YbWzYEGcnkZGwjKjNTEXgWxVGLxrWMtfYi82KCKGa7WwhFajmvk2Fbzh2BFQ54TmX48jjEEd",
  "key9": "4M7eHU9mEd4wUvW5xJmnRYbAEq8sTiV7sk2WS1cf8Q2Lv42DTzpR7mtPSCUFajqt1CvuCJquvxA4QsypuuTCCiea",
  "key10": "3ZeJ7rYDD9E3jv32pWTjNSP5ELmbD217ykv1ZTx51FcRw2jVnnBkL3HVxkktb9bfe5wnU6zr7HXapRTPmsk6yr6b",
  "key11": "3hLjxHP5wnWRFk8wM3BzqCG6WyGzZuv58uc4SjfDeB52RvSbvxu3buaJwKvbxmsJEYHT76eWSHgvPH6ZqTuQNrGe",
  "key12": "48o8AXGD5jo3GbeAE4VZngMXTkafJahbd9Z7WP67txzjuFfyfk9mWMx1ugmwun9vEgRZZ5QvoFQQLxbP6HDAyDRq",
  "key13": "52Zpv3mcw9z1wZGnu4LLTcNWXvtuXmWU7G7v4kfCAea4cfvJ8C3WSmAnKvUj4r3i5mEmDnzwizX4WEegTAXSrxJU",
  "key14": "2bJvrB936RsGhdRM1qrBaY8TqEJr5SWVFjagLcmZQLCUN4jZYEX3Ba6WLpQtvCHYhPv7RiUAj1EhenvTjq3zMH6K",
  "key15": "35Xfz7iQ2rxXWbAj11UcwcYb4ET3uQokSbzQ1W2vz58rz5oPUKTsJrrfRyi6xqRdukN781ydfbLyyJhqg1oBEZp9",
  "key16": "4hCHipFYrJHyheVTgtGUGngPR37TKxfU3t1Hh2AXvyoFPuuT7xyATEgwtHGsqFMupGvZBZ5fuKm2TJkZgHFHTftM",
  "key17": "5otDW3qFykHWjZoV9tanh1UHdJ7H5LnRuNEidjwtuaFiKkX2YpwHTeUnZvNbnMtnmP1zpdfvzVwxCaxW6t257K6L",
  "key18": "aQtydki348D6nUujCWwDguZP9CjpcP3C37NmixLH4VZbrsmTEWbCc33CYUi6GuaiF6AmUq9FxiNEzKrVH4hXoNN",
  "key19": "33wJ7AUZM5fMiFBhzxry7MMzqD2ioSB9Zkdz3BmocHfxxe1ewJ1WTYTiaYaDMobSSdeGf1TEXkEYPsbBvJ1SHAsZ",
  "key20": "5AmKFkukraqNzVvFSa5HQDUQPJQKEN9mP8nnz8UTyaUcu1Af4SbKWxbhfoCja3rfUvuoWtWS4V4KnWPSEUta3nJL",
  "key21": "5WHScgtJzsHyk2kjTHjTVxYF6JSihSQbbH3vu25mXDRte9ZnyUybFvs5FERZ1aVM5HHApQbiVYRx1apfYhpt6cTA",
  "key22": "3i3CmnAxi8R8YLaNHXYJX33tkM3fEy8nwvkQQzZGuF39gMMM3BVT1KbJ1yvp8G7Mm6as6QF7NNNr9eZpyf6F4pXm",
  "key23": "2fT3Eo44gPVU7m7kD1MkYwxDz8SHhYvccM5wrJEu3U64SfuBXyovg8BfudzoaYcfLiSGLrrRCxdhShB36XrgUkGZ",
  "key24": "4ETSadAzZEj2wp6fHEmx22yLGAbkDoFSYqxwsSygGf1YwUQigpW4wLcmh3eHaiw7S7rkvcDD48EPjFD8PyeLMshZ",
  "key25": "5VeTdcFDtS1x7iDhrxSHX9xUCbKsUDVanvFGyDLHVxRTFE89FErY6uLzDbHkjkYDyQYLEpo5aNDXBYUjcwa4SMri",
  "key26": "4R2V67JWiiM7GFSnEDhjoQ8KkRhrrwT96e9NF7be9aKp2oz8nM3atTr4bQSzfeTxzUmNHhqL6i9kPfTSq32mvoAr",
  "key27": "2eGC6HrZBUzQAhYT13GGjHgTCq87X6bHgdDoLY2d9MbSZTPGWhGvir4n4cJ8jC2RLBvLXjWhidpgRBmnyyNXGtty",
  "key28": "JH2dSiFy6dihXsAGSMEpb999KCvYymR2yZb9ReZHQPsJwKFiAY5XdNV1TBcHSQrfA2xZdLmJDqbgKUKxkUGghLJ",
  "key29": "3GDQobgabD7zgFo9QM94zjuxfj4P51X4MDyHxrKxtfrwmDrUaurxVTE23r1kFwdkJs4qjRBQHZSw1uzB5pZHVzTD",
  "key30": "2poKEamS1fbTuZ2xuDhbmgNQzft1B62xFvuNoe6woS8BGcv9M1ccmZoPt7ZCncbmjE9PcP5Qabq4Esa82G32Fwtr",
  "key31": "4kozxV4sK7Fa6n6kkq8exSgCQLaxLpBzWD6iY3cfY4jGnwLa99p7d5YWEEnouB1FT81pxJP9uuQCWb5SZGgoT8WF",
  "key32": "51EGfcuZjP2CBhLQJKa4mgWE1EyZb26VYEmbFkfmHSTKyF4fQDP2rbZD341HkcQkgb8RP9ukgmZ4KgMmRambzQQe",
  "key33": "JHViC37Ez9k6YYjxLPjGv4wpWjUMwdYgQ4JP3FkyuBi7A6ohsH7CQAJPkDaWtoAz2aEdnUGHA7EEWrgbpnASwxq",
  "key34": "oAPyu1xuR2nPzCEMsFbfBRE3JxbDTspbmBKWrhtFKZaRzWQgPXxnyiKpbsti3r6CepPQLn1b4r6skadCv7AqtKH",
  "key35": "3q2V8GE8G1wfRKoDRLE5ZXLBBhDiv1osroPa4JYGMyMuQWMtLpqnbQEbTcUspxbUdFPhmLs3KY3hs37RU6kWiCeC",
  "key36": "26AjLWWC3gyBHBDFssTVk89FjQSdN4qhsp8nxZY77HKnPiApjxXYfPLDoG2gccfQXiEuq5oeXGFzxUyRLQewgK6H",
  "key37": "27KTSjBxUGcv5HKv5RpHRsK3Tcub7Pd3z9p3YNk9geksz8iPkzjKk5wtqPgWpLJ4GKFhfsSUzLbQ4i5QjG656FoV",
  "key38": "2kg2o5SViwjn6JuucFYsUGefbWsq7JPZw89cowEBLeY4fvQNFzZRAKsGWqqQSJkMxXutSSxfodYanJEjgmLzHPxr",
  "key39": "3FMT39YknSvboMZueN2hc1DgVdkBv2ds1jdBF4ecsSso14hSJFiETscshjua5Bc5BJWo13dzKjbVsmXdESj3fNVC",
  "key40": "Jc14kRGj8FqFL21gf7nWBQ4iHTWDG2YcJ8DwK1YvGj5coosi1rQBMFdKmMRtHRjddLy9mWEz3vXCf9YqLrAbFdf",
  "key41": "5A1ow42kqtc6qZkHBUjNxCSkyV4jXxfpLWbFZxVcicAxtA9Y9sfZdwxTaq2ULyzPPApGH2dbcVh8BAfE1JZto6c7"
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
