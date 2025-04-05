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
    "4B4BZRx8frpKKQJdsXLiH6nL2emhwMZH2H4jnBtWm8Tm567bVNngYhTdGEBCfzqpykRZq3x8cVoM45pjg5JE9NTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54sobxH5PtcKtNzM1SGuVMGc1aJQseQraGeGH3Ej2bMvB3RuYbsAwQ5HXwjBuBjYovd2FrcTiipqKBPxZDD4GeGv",
  "key1": "trsfMnsXA4LDc2p3Ayva1tuSsi74VHcnLuDZbQiKTrEzQLqSnoBFQpS2T5bxYpj8MCkeGCEcvDSpFkbzReLApXo",
  "key2": "37VBMiiDyB59DBUWgzgXzN3xH9nE56SE7tcTeCP8f5iDLWtDEfPxwiPfNJ15YKodXQtDXscSBoARWze7BAj1wvin",
  "key3": "3msmV1wP6Aos5vciM5waxpbip2eC5oBhHkmjuNkMSDEcXtshJVAN1Jpk4eowqC5X9gvAV6VUNkT67HoDnbApQz1z",
  "key4": "2SyWguBcBvtxx8m1rdj3J985tEj7LemNWgv3VH5io27rTeitPQoFMufLrwM8JyUitcHaYG6jzgx4GZdjRRbVsjXJ",
  "key5": "4peg2JbSmZ3dGAbh8CvFUjFmq12oRA6ZMe68fxP5yEbbugqra5Bi6erVqQC619pkaG71rsMp4Pqes1FGhEnaytFX",
  "key6": "65yH6WQmdKi812GKL92zYnkP7ox2A6a3ZxqcqmjUUXrArA8TmPGD965bsRPgZBTUwobXGBGTAkmQYu3FmnRdv7tn",
  "key7": "55Zp6n41bwFYK3gC2obNoDNx7z6Va2PkvNeMSEyVA6bvG15GmMyY4xMwWNCEmDQVAdd8zmXDGD5XRq8UNHyErfrU",
  "key8": "3RjieimCNuMGrPr1qmg4e5rmqRhiG7TVapqXoWuH9a2qDPueYBmvGh4heDcBeq7mYeVVnqVqy4L9Yc6hfsWMy5CN",
  "key9": "5P8bPxbdYWvuiipiGYc8UPX9M3THZfLQ2JceTCWBKAq5G5Y2Jn31ReKWciHSibvdKRAxe4wPVusvW23Ga3zweZve",
  "key10": "3znWJk7HEZDQuwUfh4Jai2w7KfKQxaLRcnKqwFHrmufSKrjgEhemgt3qeGGFUq4tRncXvfiQRdswseJY3hnTNh6W",
  "key11": "47aCiJNukxapQoBjHfxSJQ6nLCorsRpZaJJiE7YqDZ85g4AD7UW5g2ewKF2ZSqS7zwdkLjKXmjdtBWCuLBqP6xSk",
  "key12": "2Z6WEo5j6Jd9muHXnpiFFQBLZzEKGDutADGV1Hpk73HikdCz51W6KUynsjRfV4ggP6m7yFXoSZX4y6VGRPTfUSXv",
  "key13": "2FTavi1pgEWRsVV3fuRp28R7FaHCtpCoHsrTwweSSFZ9JkRL3x8UEnnuDFtnfqnU8WQQf2g2eBG3fYLoF3Z1nJYk",
  "key14": "WaBiqFvdZB47qyQvUPUa7xMbBS3V4xBFas8qEnHsBdKeTHyGGZnLmsqPF8JPzhyjQCq3PxTNo2jCssCeA2esc3M",
  "key15": "2Um9mhstzsRX9vW8q16djFyqSCPYsMWnq2kkeMhNR5xBfgNLtYCV3Ua3vZvXcFJSeNcquALpcN12P2oYTauzL2Wg",
  "key16": "4HkW2riR66LjmQbF8e6gV2dpcjvamLq3SK8wngTUv73z4LDEqqTygBjcKJMnSx2kun2HrzqRBzE8ZMG163KiKFeU",
  "key17": "jViZtCWADmhUqbNqJH1MC4XafhEPeYvVAgcCx1jz3NPPRL6txeRX33A4RiGBFJNALVYThGJa5KWZjucxbB5vjwe",
  "key18": "ZPJHTZULHWmsyJiZ9Qkxu69Fq6wGjKhEvoQ4q7jrQSxCnK6Hymh1fX9c1HPrrLBqTPgVGkZFjyfCGfLBKyBPayX",
  "key19": "49t54WsYv2kxwdrdUsc8cExHAM2gHcJK8vqQuwWfjcWg63YaF5WPRYkNB68eh3raTMRFkQdQPHDbZTm1xvgo8Xx4",
  "key20": "67dNamA58GduX5ZQ73MmURiMuNPNrz8Fy1acUqGGzghkg593VJMkPLrP9DHUPKttXEnxhs7vGCDtzmAsbDd58EcW",
  "key21": "VcND6m2h67di9bQ3wyKjAf6TXsuyY9fgEFWoYgSCRWuTzBUh66nJRnfUhmzAHemi5wM9GNSjNuf1MAXQivYymWB",
  "key22": "4Qy6KURZb1HgzufZusrYzUPweceKfcFE9Srh2e1BiYAErziAnFxCGGwcAkENY1uLTZv9SiTdBECxc2LKYqkhKmRg",
  "key23": "2RRkRamNpKEMnDcWf9B1WUJ7YSayv4rszkwLAqgf6uXGefJDEETXjxqnRY7joNZGhnDUKUccDfBMSk3358XKwtVb",
  "key24": "4j5LNHQH6H7o9dXzpYkZeZD1rtEB3JaxQHHj1cwenHQKBPzyXRae6j9TWBi4WTndJZZokCg8B7A3P7jpZgGRFFxb",
  "key25": "4FCmJAsJHLMLVtnJQ4DVzXaSgeiRRfNA8NX1GUMhjxZs7f7Mk8onps1XYN6HPvhWEzpicUfNt8RvMeYHBZU4tdXp",
  "key26": "5nfDCvBADmxQAig5FByaYVLhtceJjHR9HSih1awb8ibBScfAyoCaC9w7C9R1b1tSVSj4UeJQNGtsTMkqCMYW9LZh",
  "key27": "2J2AYTCAFT6VkNcggvrsivmx3cQ4EZu1JmBxVvnJTG1o4ccj6wEDiqAciZNNgEQzYLfeFwLjGjRREjyPZuJgsUR3",
  "key28": "4Wkdvh6KhdK3hZGX4RaLE2V2VwkhyJPd5wvwPGRLNeKduZSTqmXVmhU4QqRUBDcHYhtyEbJwVsqzELKqcgnt9orw",
  "key29": "4kpSyVuEoQsVNZbRrRU9SfsUXQMcuH2QyuqRDSUY3Hurfj8227FVB8WAuFi3JNxUyhfXVHjvGjPvrXnnq5DFippa",
  "key30": "5p6HHs8dCnAAitosnPk2x62Lom6o1dv4ZSypWPSLshvjnh8LYEDNohHde5NUEmurPBB3gryf6Zx7T1kKUX4JejA8",
  "key31": "tBqBj3bnRYz6skkWE4D4pgMeDuKiczFJwvzLbUwx6SEwnCdj7Jn2vNuDW7mJb3vfQ5M8MgEUyUSxoUUoGe6sDQq",
  "key32": "i8GtT8WRbzYSEHeHncBYPUoBPYFdTVXFix7waLysfe3LxX2hKa4cWKEvGCkVjL64L1mF3hyT41PCAUNoQx6TKuz",
  "key33": "25bRX1K6mQbQF9eRg7yyrF3hLHs3f7TKyvCwMQwheQSmPQFZ1shwdHmBcKwRPzY9nqYzr7U8GSyuDMvCMoQKhX1c",
  "key34": "3NZkZNmjQUhCPq6kyT7ua5TAFPwjugVGyFFegFwXJD9zPrwGszysVucjAWYDuwFs6ip7h9iUxARFwBRP411EpgZF",
  "key35": "2idijV3FHaQzgH1G6TpiEpUWNkGL4QJ5eekvh5hg5CF9qNdcxqvFczUPjYQfFdN5k9MMW3uU9Dfr1FAG5i4CbwZr",
  "key36": "3S3wuerGn2KbkLDvtZRDMrENWtqVN8RGoq28GjC6FqEj4bf8VdyrXwB45UqmS3H46M3e33DJr6hNA6LzbhwjW2gF",
  "key37": "5q7mGeuGyyKEama3WG6gb8s322C56ZpNBkzYZ3D6R8MMVFLthvr4bcdy7HGgBMwVJsiALvkw4oi1AtT1tJVQnAsd",
  "key38": "4mjAdZJ1c2riToj9XHwDNnPMpguA3oaYhi1xFXqHjKFXi9DCDjd8WAHeHHSfFQqnmvz8HkfKjfjewrN53K1YHAU1",
  "key39": "aia1nWPJCCLiAzU15fzWnZsxHa4KfMMC3rqECqKve38DiWM5zn55F3rHo8gaFJgr86aB9rb3keoTuptrHeLTyY4",
  "key40": "2ARbcWRE8UiEThgtMKp7EVZUaQjDQfEFe4rvicsDXREE3qbWNz822BC4fgjVUHjuf5Y4dvWBCXvjkR6P9k37gYkg",
  "key41": "4zttBSzbbJqCEsUuXGL6kpJKWLyo6VR5euM6JeJte4wX3j2zDuVjMio9Ek3VCtsQzqVRbkv2kifqjKWtjVdqG2jD",
  "key42": "5bMnht5w3tDJXWzDZNehxX5nj3WydNQMhpaHkAkhbgVDEhPTmPkeLtAKK2H37svtsQfvskweeJpTg3uA4wPdeUst",
  "key43": "3trnjy3rPZKZbqx9uRhXmk2i4S9VoQShu8bhmrX6J3K3qmF5gN8jHnzhR5qsoBXxCxCaRyYqeHDK8HcSp5SvyH31",
  "key44": "658hdmLCij5bzAWy6tL1eJWHHxeHgViiAQvtUimZTuJfX9nkDVuzyeBqjCuTZc5vxaXiUkHqbUXa28bm3iHwUq5n"
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
