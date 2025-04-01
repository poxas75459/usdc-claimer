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
    "2KKXguXFsNnk2XsbpV1zQ6Y18KLz2FhbW8pPq781doL2c1KmkBusw3CkXYLbXBnWfopNPrKYvfLtrUvhEL9YQK6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MiCMMp6XitKE8cRcfLXKAnnAafjJYxd3kib5Xqi3QfUwguGKGnEVaeXjpiQkPahs8dt8Gc5kMWiboT3SajqWSiG",
  "key1": "4wRiP1KmeGJqKFCG2QWbMEVKyYfxwp18taMwYMFhDznNnZjBjh5SFHwGwRy2NtkThKxN7ptYCALpYWrVU75qy9yc",
  "key2": "2Sbvn2B2fd1BZ6kS2kECrCdcs7ouqbJqHXGjPWjZv8zM6PeG7uF1B1swz7jGvY9DgGoJA5ToGZux1oLH39EBQNiq",
  "key3": "33yrjT6qF6azPLii8LfDnJiatzTFL9Sq34aGexeYoaUmcRAUjZgvVwfYXeDcqfzoCuBQ6eKKvsHpbEkrz1821Lqj",
  "key4": "QeTeXV3293TW1Jehn8Up5y8okFP7GZwX4ZFebKQdR28LNYVH9p57Ecy5eMPbZ8aurvDLNnP87FtDZ53b3BdhufL",
  "key5": "5qz6ob2kvA6LK6CGPzmwHTcAZh4LafwuJpvQAcBnMCicJsL7CPjfBHjKAUSzFuiwFWTciD7UrUCK6bpg5ZpuYQxP",
  "key6": "2riYGmYjjuSEcKvu4TXXPDCMwxGLw8x2rSzy9514QY9y312cfDtn5UcfbhBLHV64417MJCuGTWnZvKeMfRNuznKJ",
  "key7": "5nXPnhE8zFKpK47i1CL8wBJccgkqu2y19wiErdaXuH1Nf6ct5b5Ghj9FphEYoDSYZrZS9AJFg8XK4R6an72uiMxz",
  "key8": "48VvYLkWm8ViDJzbLWUbBk4RzEseF8F8LMpHNoPFYdAS3hY8BJktzUSdbeDXR8hhpsexmEHzDXC7jYHNjyCrcd5M",
  "key9": "Wh2c9U7zftFNGWRvTZMwXE1XcvuaTEqAFSuB2c1mbQogf8fsmk8w8CFy3JccDZ2312VjZ51EYGVcmEeBsJGd5GE",
  "key10": "6fuAXi2VmjPn3TFStG9nUhaztDcRiyHVPJrUc9wmjfhpvGGHEsKSRwVCsX2M3Zsz2HcCaeaz318NAd2BiwyMxU5",
  "key11": "5NmvvXBQkUDrM3YaHxqqbsaZf9MNcXPzKisYUCgvd4FqcGNZEAYeumSYu1xmci1hDwY61bSiZ5tH7jBFhyCMhfXB",
  "key12": "23jkmX1QAAxcfHuSpsNC58g8Faa94ohXy835FHdXPHxUCN51ZrNh5NSfHqAxcExsD6DQQahGSHvWnVtGjhD4HmKD",
  "key13": "3rPFYRM84ZXVf7bDczvrrw4zooMmK74uHEuiobZJPYGB3vvFMr9xQFfqr425FuP5UBwRAnakF9KYDDPw4X1fh4mA",
  "key14": "26eLCcyr7FTWowgpVBYeyp7KgcsJrPHkYqBo3n11z9WD5b3pRyuy2bTnHzNsBQu4hxWLLRCsKWPubZASWF5wrFTk",
  "key15": "45pPUsrzc8TFKBxiUMMTa65gHvLeCNrechU5M6eMg1xTSsjovDxL7ZYdw7o3KiEYzPuPqhYqp2gtawfrgaMwnYDV",
  "key16": "3TWeBef9n147WCKRqk5giHR6uAhjkLhzk665Teqp1GdG4r5NnmkR4Zye7sje65EpizNp1DKZ8mXzsvQf4LEXAr8F",
  "key17": "2T8dSNqbnE77qW4GWQB2sddParbYGh2y69LJZrDPtc9rBVG3iXz55ARhfzzxheBY3E9uJxE6UVD31hsuQeu8rT9F",
  "key18": "y3ovwNvwUAYAUKEi2B9HBxdn9zb9Rb1FsP7rdkrHrRvnMAwTnHKAYsyXYsDGfhYQ8eaLKNDbPLLYnAyoGXygCme",
  "key19": "2yHJoZ5BpyHw7Y8HXwkyWeg4RU5fHm2ogR4xLs4EfpkXHfXw1H8KWdaYjvQXYzraKfsRRadHDhMiCRcPFHsTohPc",
  "key20": "5mnayLV1tY8mhLwG9zJmTgYLsgN6ZWjK2cYqA2iMRAQGrsozYSpxGso3MUB5rfCbyQKBBT5o6CpBu7ZGW14njddM",
  "key21": "4F5bpVeebe8pPqo3DEtc8MJhtPb6hxJEio4E3KkN1EdJyTHmqcQpczZzhWB5VrZW5TbRuW9sNVDAe16pz3ZeWdcW",
  "key22": "3k9rPZF2MAK1goQmD3r1fXEixqGWbjU3gMk7x2sKewJJMwo7vXeoNQvarEUqna1wkui61F3rdvkXU3k23BtA6cgr",
  "key23": "4gP5rPKV4oix4D7368PbBeykr2LFt7h14ttd4WVAeGutSW428BwMjytBhE1TtVtxUGKkJTHG429MDaYQuJXnq3bv",
  "key24": "4Wu9iv1FNHSvLLmwccr4FQbX36wprie1owvsa1ct963FQHB82VAiddViB9FgSTyadEkr9jDXrvuHNYiev7A4hcsr",
  "key25": "2qNUHNXiru8nApFYaA8zobTnso3ix14nbBk4iWSxcYTUUgRfoWxKVTZgiq9V6WBfR8Ps9Z1Dv8eYMjFy7JtvQ3cr",
  "key26": "GzhKQAkTD2ggUge74ZHnhxhhGGJ9a9V7WewwAjXF5m7a1EV3od25fS896pvSmBk4aSU7irLgmquBbvdxwfeWLXU",
  "key27": "3oWzhJBQQrrTNoS1oFZokWDC9KqEu34PFgdx6mLhb2RqfydbEMtJcGvabPodnFLTtMFr2tizjR28tNaNwEKR5Xkx",
  "key28": "3eXQkddPgUBVacQrTWZsJUGb9F8ofgjiraYPQkiivp18PyuQ3vgdaW2BvVn4fABgSH5MJHv98f7zB9jHyQxTP9LX",
  "key29": "2V7u8fHrU43sDNYf8qSkBGBeG18xd6HqcZfRnk9VuFDehvHXrcQJPnZendDtABwpcz3Qpo4SJf6bHKjz4rqkdWDL",
  "key30": "3ZtRxP4P6vrNtkfPVcwRMfh4wPkGHQgsbaPig9Lrtys7fD4L6P69yS1bgfqKoKdvhuTVLH3RTnNkZzZU4bf5JXKU",
  "key31": "3xiy7rvh7kCbJmcrR7KFnKFb9njBAVZ3QUNg1FGfkUWWACJ88rMT6CngixfhCHStm3T4yetHT2wcb9shT5bYqspT",
  "key32": "2HVjQU678H4cC5U6bL7G5G6mGXYgyEWrzzNUvYQH1o758zWY68mXAKXuGieCGHG76QFzDgf2n9rws4TwuVeKqss1",
  "key33": "5Aw1RoFpS4uLcZGXSQ1xVW2Jdhf4qcwxbPKL8Ky7uMX4ztRdZKxZnvAvLs3fzj4wnZKZASAAAJJxsgKFr8hgTYZn",
  "key34": "2Yf1zPsZ2CheThoGXwQxvi7PgP47QPqHzUV4esZBaWhVw6ZGUzYBvgq3HbVjMhLtzMqcUBCQpVbyZXESJguo6wq2",
  "key35": "5UtNsYaudFgxYEhLXS1rhw1MVcnTouQuWXgkPkk8YCNiDR56KjFipeA8h4ryHTzsQdmsR5uBzYPYbrNB1pcmQuTU",
  "key36": "5tQBG29Gk9sG5nBHWR2AmDhgDejk6Fr8jHkgoYg7zk67DkwN1m316k3x9oVs7N1fHdN2Mm8cQP2MxpBfZ5LQuWTK",
  "key37": "39R2h7V16KHnHsYyb3DVrJ5pYVd39tf2QP8XZ3LdaxfdLwSr2nS5CCAVHTT344BndxGmWT5hTzPdbrtxdianatYA",
  "key38": "2jJKBMFtcsCU1zvidPjxikhRxmZahy5UFsK6bCXex8K88VTscWJoeVoitZYgyuwF9BFdxPBKLiEPiDfnr73WPL41",
  "key39": "2e7ADtZP6Q1oknCiT2sZt5Eb8vCykSiFsVnYPMqfciokGJXK7D7KY3udQMezhJSgLjF9tPi5q9f6hyAE5fcdrp3D",
  "key40": "49HSDXDutZ4HsGCPZzvQfuR3xj6aDxsA2K91qp6Y3NwiPdxaDWYqTW1NWwpkarge2WXXE95qBKqxuttsn8imFb2p",
  "key41": "4hQqLTQRAvW8T8sYFi2q2ZCKYo1o43uunSWMCSyY4dsTiDACok26j7gR5ijVTT61XGeiui8EtrHGDzyDLQ5BXwoh",
  "key42": "EHk3ZHFoo2GNZGQQQsertc75rz6uCCHhJvpmwGVbrTKvixRZJk4SDXGmQSf8FKAX1fbURrLNPcv3gm96vPJU9oq",
  "key43": "4CuTKuNUR3npPaTKb6kbpYvFBDxzD5kpXUgQ5tstCNHD7DEKEMXNCpGtEP9x6njoEwfZboaq1sonADTKbUBEiJHK",
  "key44": "2bWq1ozdSYgmXfa3B33HhzdvKQFFo9yC9KCXb8qNfL7r3pmJVk77baXn21y4vuBxcS7X1MbAcpvmZNry7kmmqYur"
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
