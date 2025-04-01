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
    "3DmZBsQrhnP8KphG4Cj4L54qUeajg3qBH2KJtxBzQWU34YkUnapp6F4hE7VjL1ehQwgkCqivNWmeGQiSExnrsiTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x43aaKCbb75csXM2PeDGP7ngG6pagQR8wGcqTmXCMjQQyQAcQsTgvgavtjK5UjUUstQXqg7sjGLAjnnvwCufKMS",
  "key1": "5e7r9YRjtPwGefcVXfW2wVvXkus91rzDMx9NMjf9JAUVRFL128mE4kRcCNcLforkqZqVj375D41SUdGfUYiTLDa3",
  "key2": "3ppurttZHm7GiF7DbcJ5uvaH8cAi5Mez9ctUjzjpWektm8fCPMsR5BjqR6D8RBa4oN6ewULNqY27eceo6joDGFJn",
  "key3": "5kB7LW7YLPQqj2Vd3ymNqJr7aCsPXVt9LsuvA2CQDYm3BDntsTAoTo4sbh2LPFN74QaZnH7ghAmAqEhLcan2yyF1",
  "key4": "WbShAfrcDgpGBnFW8fqrxiiV1i69iFKLhWwzXfwUudnUWtef1SZE4A1Dmuv1mcyCSnAtStT7MUWqNghAcGQcgJ8",
  "key5": "2HYQrmKK2zRG16uYTSsZfZEzHrwDxyuDBJJYfTCWAt5bny96njZGuu6QRZ8kU1rAc2RYHCHK7gGV28WD2F3CeMH1",
  "key6": "3MbqkNm49UySG9uwddFjCW43Y67LUdiwTYStvJEvoJZ4wB2XS4M7PNYdDUSFMMyVraJwdAid4Gvb9vVkRFjvuNAr",
  "key7": "4JjHxRP2QJNqwTASRcYG32fCN6DKSi2Vms6UJbrnAKwgFEdz1ib6L8YgfWK6pGqX9zVAsjR71Tj7mV7hnyKwZNDR",
  "key8": "4bNEbD42KFoB95Fy6qDyFjpReCii9dBukHt4csFoVtGoo2GbExYAGapLc9E6UJbG2g2YgLm3CHomToPaCPPdSHcJ",
  "key9": "4YWp8eS9fPSseewj7TXvSGky2yaWdovtkix1tuBv5MWfqQBuzwkrqMrpdtSaDZbhjB1d8vhR4dPoZ53szAXsnq69",
  "key10": "66Hne6MoZZWeUzu5u3zAAFZfNJ1HU4BmZMhkLHLNgP9SWpeddBDUAwYdUBvBcVWQmgz9ycXrviU4XkBPcbVCUkS",
  "key11": "f2zxGv1LBJHD4ss8Ztqm8FnHNdq3TbRJdNVkwhCFg8H38WyKKDPAQsWRdNGhEoxM2nZd9SMEfRkndVEMK3a18vt",
  "key12": "35SzEaxnD2QXpyUurMrJQiRmGbJjwoJ3VezDsGZSgynnKPX8jfHn1r1bFDW3XdEn73Qs5yQ6h4Zj4GxYfTSnEBc8",
  "key13": "54aDtNm7dB9BTc4ozz6CeL5ipmHQLtGjsSTFZBjYgQcYsmL11j91hQYZr6QKqrufkXe2JibDfNKgAknk7DYsuxX3",
  "key14": "4v98qoYyXoBFgwB1NzekWu7b8QtSqVR1AoEE8UnGTgSef4AyuDMqUrN9f86T84KrP8ai5ZXtpkzpNKDgvse41KbX",
  "key15": "4swhtRmWtW6xfr1E6dcEKaNqQLBYezjrbwaoCtPSZTKBjEGXcbM37EnVgcPgZPNGxyEQGjiAT69LvPtj8ZqkbYJf",
  "key16": "XXea9M8EX91yxFHnqKehhCRam7kM6ce1achSugWb1Uf618jfw2uZLH3vuBuCQdWTWHbovjjqNJJ1vdGLFzhTD2X",
  "key17": "3LVS6LXSqU9Zj1RdppUQkaNi1MBPVkpLK9pN4bfH7RbAEWtqxpfftm1TcPkrNK8QLn3BujJWogGKGdc1o4njZCqH",
  "key18": "4QCySwVpCgvTsfXybr9TwYja1q6VMmMvNiiFM8dcVDrPEDrPw4CrPCLXA5ZbzGuFtxiRwzGPbo4bBh7WGjAfXQnz",
  "key19": "XhXDCVV6kWMPmwAEbqSjGZq2Aa5yP9AHozwtNd25jeX4FEypXvoUFG3bu9BJrZaLVDauiQmEDM8tZxZprKbgGGa",
  "key20": "3KwwiP5XZx3N6KzPb4wa9oKvBrLzwqfKZNk2aqY3RvA6MxwUzMyZErmVTg5hdy4LJ2dFuRcaGNw1ZmYkvps3iw1K",
  "key21": "5hCZohtMsM1bZQ1LNHhS4iAfBP15edhKQyTibsGg8EgHjjYVdrxXoFM44eeamT9FwZUx9zbCqpNFwQZRs2Nq4SMe",
  "key22": "2e9gukPPqZWJ3RoDCfFR7fNrFJQvWYXX8adXXBKzTsCXWQHgFBuBikXk9QXZpy8miQC7yr4PrTY9xMVu3DGswyry",
  "key23": "3PacvUExPHx3bCYfGi6YSkjKKbEUbCFRR753cgGVnrbeYDkZiP9yjejTZEgAotVbs84HrRLjWJUaM2vnWuXCkDDB",
  "key24": "5i3hRJ6DyamygECdRz8dCBcWt8jubrCSjniQkAptYjTRGWChwdTk7fXGFSQ8KRxNi1cYN11aQh1carxVBbvoAuqX",
  "key25": "2PEmXmjLpWuzfEdgcSdY4YAxMysYSP1W8x58THdyGCjB4eK2uvEgae9yaAC7WJGX2ZTaUzCRpKz7srRXgrNJqFpT",
  "key26": "L5Zk1nuYyWoXKm2iBBtp9j66Ykdpb2rz19ZpXVQgEH8EPLMVzXsyZSxumT8KFJ7ViEJvBeJbxKWDjMnJd3FwYRF",
  "key27": "3qgT6NaMAZuiMSb8uSTXoLSLcRVa641FsZEmXJeemNZE18dUBSLD5qch4X9pY2AsBJ4hMGr9oFpfqQe2dweZcoCr",
  "key28": "5vhyiuiLZEzGSEFggSAJfh2wsfBZshDpepyGVokskinhTXBtBWS4B2wmDh4y1VNW5oZBTaGPpV3siMFzVhdLB62e",
  "key29": "38NvzupdBSckk9mYy4p67qfM3oRz7zX4zXbj71kvXsHG3iiFdzedunqjQR7VNKMe2Q6KbcdiheZwJt6yCtgaaNGf",
  "key30": "2kw5MLAe5M2mC5yugyYBQpacAGmgUHR7r6wsVAhkbNeLjzSpNeBtPEBpf3fi28axuVfqqZp6krKmp6tXUwPfrFim",
  "key31": "6763uw5y7RguZgdDAvxdXFCixwivGUHP7TZZVPqNZzR8sdX46jy2fGoCnZdQkGY8U5xmFcYCTywPxtwGU8d5yFDz",
  "key32": "aCJ8LSXGQmuCv72kTQyNaTB6XWqhN7unUQSaoDbXx3fLuhCsYngU4dQr76bKkb6k6s3aVZwLBPQzR82aCvqDphc",
  "key33": "3uStTA75vvMGhVVAMpciEwAE8iiRgEPffcJNja4SdrL4RRXXSzxcKTjF3zttbAVURfLpSCG8EF8u3Twj1ehzuJMN",
  "key34": "4P725ewcnnL7o7mHaefCGprUDjF5fm8uuaDrD5RqevRZG9P5Tmra2Awq4RPCQPeoLurEYAUrCxjuf1UsjdpN9oBv",
  "key35": "4soGCasCHtRph99f4rrphzdvsThKfMTNzsfsCQ9iL6Q7E8Z5wzPikndHwBQE8gE6umKc2Eu3JUxFLvsaAB9xaGZ2",
  "key36": "3LjStsvEovuzw26TBVMEZEAKuokFBeCaEV1RLAQykvx63ahfupB2nBRkKq9P6g57GmV54b75ZEHPnYfnZbYQzwvT",
  "key37": "5csgbgryxojTgd86kXrP2o97Pboa9QZ2B2zMhK9BAkdksNiA75wit8t9BJQqRdyh56k25eG3QqjYtMe6iHhQo9p",
  "key38": "4zZskxW8Q4Z7dWoiRXa9CtiASe8dm6jye1BQXwniiVCYigYU7vkdt7zTFskiu9Hu6TKL4hhttdHqxBbBvwjVaLdo",
  "key39": "4EoZg1At3ZtyPJSNyrm7zR7pNWD5ZyhibXw2NQ8JbiuEE9Bfu3uPKu8YPepfJhjKvVV7jqAkjC8bmZph7a2MYZS3",
  "key40": "5EgnBsJYpGBS1eEiTj8n6eP6irM7dDwVwBF3aJkAZ7F2rxwR4Jx3sscfFXCDy8reQkDsAcytWbadX2kKVNsAxP4e",
  "key41": "46PqCa8WSEf54dYnuHE9n1gwDMMfSsUoF3UKZzrq33eaeWxTzm2gJqhxBC4C8MMui1TFP7ae4XuDBk9avFX5z6by",
  "key42": "41r8vradhVGCFQUgGrzbubbAG5NUJTb97zVkwkvGren89RPUZYj56xPGxVsoF6XeJV5PcQ9cw4NAk1C7RtSQjoAA",
  "key43": "jCBTo7H9baHNVFC2iz73d6L6wSY6YDbELnyZY26P2rVhKdsd3Q2cxWxFpGgPMTQVEpcLRkzV38HVNegajATE653",
  "key44": "4yZUGMMSvPQmXPFfGjfV5XMppsfALgmwcaTvVqDksvXyo82UwNQPK5UXYsaYxdroP8YMCqYVP4p243RxFaiDxXjz",
  "key45": "3FTMX4Gk8accEGNu7N9CddjbxDSbbub3hBh4rR6TqJEipLrtayhUnJoCFLzK4dbWBQYryQdvRTpDMWsrefj4xWhA",
  "key46": "5mtShrFaziaGDDhLcTuPzmawoZvtRydSojttTwBxNt8yFDG3QrT9eA77iMRbFPp2BhxCcjY6gAKQ2d52Pw8g9F5H"
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
