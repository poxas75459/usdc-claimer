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
    "2H1mU4NsBPKE4PBFrDc3Ek7HkNCDRZHJAZZg6F56XmbPLaPjwaCHS53aGBvURzagZj3NPtFbJnLquEJcnPQt5r1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TrBVRBZpNBFysqc5BBLXzUV3erUCB7yYBPWwcbxMcr5AAvaNJngiGrafPcGAXxwGzLGiAVqYL88DYvNdY4mbuGW",
  "key1": "pGh6quACw56aoZiKrrAQ4PfuWrHfBRLMKNDt5PiKVVJmHF23cngH6iSNyNubcwYB6uy9qZm8gn6YADKFKThD7eE",
  "key2": "5CXW5xZAyLNhM1F5wWGe2maxM1Ne4aiiYYfkddmxsSGPEcGYFbGdiSXpAkka5LBgq2BScBgMrdN6wFn4TVmdMcBa",
  "key3": "21PutHftCWecorkuBkxhnE1DfcnREdBKhhSJFJETP2XEzH3PSvKsixHnz38xaCsbxbMyRMHaxapBoqRRLLxSNwjC",
  "key4": "4fn2dbKoNB8rBoKrmdCDeHtGxjr5kKZRMJezMoaXABEfsAXeRppxzt5nsNbKJ9hKwZuYzJNUmHSjWfqokEEHZJM4",
  "key5": "2oVecF6iZEnFaUd3oVTRq6dKyMCYVzPLwjETzWCfeKamRDtynNTU6VApQNDqkpnrrkGYzbhnztqpmaE8x1mfU7x9",
  "key6": "ukgfiZrpSp9dCbuiyGoGYZgvFrS8tTthrJgrZtUpKR2g1JT9JRJMFX9M1M2wwEXR9y4ZzvaAnSqa16ewUAeHp4o",
  "key7": "3axYwmB14orxScgsht52928Yt9WrtZmwsccdqAyS8iBxoLdivnhGRPkF7UV5osMNLzcisDmznWjQAJqNwYjLceiY",
  "key8": "4SnKJfUakxnDYZJJXh6ZieVvAoF4mSPQwz9McctoD8wvnR6krfq4yYM936HDSGyuHx8cR7dcmf2yPkL9CFRBKB3L",
  "key9": "3Ap6BgbVks2WVdcMupBUegx5AsRCKsCnuHK7mDs4phfmP9mJ3yxaowihkwpjDJdDy2pMkE7npouhJGoHiNqMZxKK",
  "key10": "51xq1bej3cmQQ3PXztdkpcjswyooqEHU3N4Pzt7PDNYVvYyaWin6jcaZRW2qJ2Cqy6RFPoQHH1hBBi5BrEB5zofk",
  "key11": "4xPsqpzxNjMH7ytGsBYUSYA5k2emYncWzFpXEuBN9PFiv2g4aZtzbXPQEzSayej9EZM2x6rqcLXCciUihDEqhL6T",
  "key12": "21ozuJSFy5S4Z2YxKQcu3xwhcWmsj8GsKY4B7ivvf5qYQqVTeZvgSdkpzH1jQ5cBxpF9EPGS29fnpMtzr2DFDZTu",
  "key13": "9vsm5NB9cmH4aoxaBxopvUQ9ZUN73B4cVAqU5cGdwHBpsBuJkFyiUemceJY8oY2BmXtvaYJHLzZY7xZ5oDc8Ziu",
  "key14": "2kQqaYJU3ZX4zm932DbpwKpmrKcJTf316Uati7zriZgVzKZNXh9L5mVPX7JpGZZKeJCLSbddoK13D2VVBCuHip7C",
  "key15": "fiZrkEAesarfJ68vJc2Vsohg9pJK2DapbxWKnHY1nydVAN1HquvKFzjKY5EZzQrecqEBqAmsuFzR3rQw24vGgQQ",
  "key16": "51fZuP56DzxoQfohLXf3AbsWRjNbEmk5AddWFrhxznSqWwgb6PPppL6zfyuAPNhEzJD9Y314eEyu6L9UKCjp3Le4",
  "key17": "5FUPPjfemjeAkLatsb2o5keiYMse8t2MUek2gv4SNPjia6wds8ouboVtBUE1dkdjzndGcyFgzM6xQSdA1P5NEV87",
  "key18": "2wy8S9bLozaPP4k3DMRNhMoL8K27Mx1PgNKPrMxUjqsXyxNkw3wBsmfDVrHuy1DMUiDJC9JqxPX9ZQqrhxvfoqZA",
  "key19": "38yAwckrSeGwSg2m2fYNp12FUh7fsA4qiCx65pzdZf4PLKpAodYUowCpVYqiF7QsSwK11CUS1yt4BaGy9QUmvTMq",
  "key20": "3R4Z4GuHewhfFNHtz5CMnmzymHkVeWrxzLN7Ln2A7oZCHX2YWhg1Fxn4KnK9Pwcpti7Ey3JPBwr5kUfFYKJZYrtM",
  "key21": "5TunJ61NheQpp8je4exsZj5PboegspU3C7sYYturdJkujWUgzeRfNe6AhuW7Ty24Yo4pGqi7R3yvCbp7dfhrodHf",
  "key22": "m6s2vuihF9UBj1amPUUhUrbQ77rerLWLT3mmcHvgVVwfvZ93sariMpX9xs4XqK27SAuiRwjArJP6Wnz59DmmMRN",
  "key23": "4s1WsX4AEuQFZS1JLjUNTtGuMxbLUN9h7nunKxruYWbT6Li8tu4PTsZHTvDshzhEjpJYHEQPUJhRb6S8XuMypDQV",
  "key24": "47bKi1wxGNp1FNhG12diGGYiq2gfS3QaakWpHsj472HT7HTcip9utyNEebvop6TVMS998ceuYSZQkdCUa1BYcZW9",
  "key25": "8eoUPHD3juWNf1ZqZmWbRjuGG9h1MjYNKqa8Jm2Vbiw8HEhKWPTLVsftWfaDhsTKC9k7FHGJhdstGF1dP6LQXGg",
  "key26": "3Qng7uEYyLh4L7jsMbSbrxw8XE69bYQZcJhpiMzerviEg8iAVmFpXAogXcYJnkYf1jga2BAUe5fBX5bCpJgFgtWq",
  "key27": "4X3pJ4erE1zY7wXS32Tq9mVrFn36hZt5j2x7gJGesEFX2vh6yuUZi3Kd7KijBWJbfXYqGfWyfsBNfypYi4hRX27S",
  "key28": "4p4LJX1JAsefezTMyLjacwv7h2WHqAAkjSBpEpKPkauK4aqnsWvbVTANoYZ9H9LoUsx35qREXYvXJ5xFqcYB3pai",
  "key29": "4j6ssxGFprmyFX4LhU6GEaDA9i6ewNQojK6N1grXr1fX9Jf1343xwWRUvJ9TQSxRTGza38mQ15feNtz4Y4ivzaBk",
  "key30": "567boFTwFWsC5h6JjKpU5NJGfRa7MAfZrZPX59eS7SZAip7PzPyD4mFZYKCXBeka7PmKYA87u1KkvtJRM5exXFxs",
  "key31": "bLxZczcsi6teq7px5JxwWSDjv7DgaT4w5MidcPhNnfRDz4LfqLQAa5AvCAun4mgytSmVnZZKrvzVAz4BVHdZwtE",
  "key32": "NJMMNwf1w5YXhBhuXkgUozH7jPseTQ37R9E3qx1Zf7iiPTGU6ZetVKrLeFigFZevVp92wyK2bQY8b6vAczZaQoK",
  "key33": "2EbrzSGEnWpzjXcYUVL42aZ6d5yqAYihs26gcZSZBr3y7ghdESjfSguLEg7N3WJJZf1UD8TbtS3PeR5zDjiBS5TR",
  "key34": "3HHB5kEmQaRP56d46Hxauhk7MjyEESqniukCaj6wiF5KxiPKHN4gwVJdFmH2dTkw66jPAfVMWqsHota1vJ5J1MBJ",
  "key35": "5hJtFBavY7YFVK4d1nRXkgWUpLxmUFDm89rqwcnE5qiXBZXhsLc8jRVh3ufPYxo795MPu6x3kkP5rr51SijqjKTP",
  "key36": "3f92vx1T1auzTES88RWP5eUaxUEW4LYQ6rfzHfshSDa2SbtFzeWsyE927qgNoEnn4dRYfF3Grr4Ad2TV12fy2GaQ",
  "key37": "3HSweVGEUhQR4bXte836vEXi7Xyvh13iqQDPDeWsiCqztT8XWSfTfL6HnGWaCUb9F2A27Yy8zQy9AGKTtfPc2ha2",
  "key38": "2deGh7rz3rfh8SFSkXEBNZTMDHXg6NDRwnzdMx2vn2iF5s3Ej78kcckeL8jXmFrCKKdJWyGduTxAL6s4hScya4JL",
  "key39": "3jonr26BSfVpLYY4655g2KQFGgf5w9nCaCYQcStoJYudfBupZwViLhcaLdbtBTWsNkzfeS2pQ777ocYy8mVK9BgS",
  "key40": "234dJb71evfPjABfXakNjBxVoPo4NdwKGVD3ye3GjZpozczMpSukGzzG9Sf1Kc3JTCShK9MbX4A4jp8WpCo8iABP",
  "key41": "wpZjqcLDooCRvYkWbFJYbjgw9hxy7iYZZcyRj2Q3EVJFQEZbfNfsbxL7K6eocRpHuE9f6NjjVN1eZdzT8BV5FYq",
  "key42": "35LZktR92nhebYrAbBcoKyhVhq69QcwvWwsYxhrC1Fhdc1ESvE1kDRoFGUbu4jopCo4o6tgZ8HqyQi79sLcqP38e",
  "key43": "5452L2jeSkH6BsdrddSQHQDDHcpunGxSs642uxm2QeaTHL4X1vVbtw7gbPKoV5SDUcxjw9iL8K6X9tMuVGQdfjkS",
  "key44": "46b7t1ivKDSt1n39hSQqFZwZTNY4KziQ5kiSZvEAM8fqP9C8ATgLuphAsD2gwaEBZbsst28JovZcgg3u41pjNoaQ",
  "key45": "eHyZHW7cvDbcDoHie5Ru2MRTt4EkbuTKybdoAbdQSskiTZENMngvZKNAY4bccpx5ZsDXf2wi7DvoSVFB35pk4Hf",
  "key46": "2nrfgeBQpuVtnua4XwjV6RNePPwg3T9vpMaEN7WJqpGmDnkHr2H5BKU7oGy4kYa9K1n2QmnyAoxjxe6ppYa82uFR"
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
