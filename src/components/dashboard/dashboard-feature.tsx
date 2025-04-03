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
    "2cdEBYvxds78iYELHKqgVnaDyXBzNf23gxx5jMbK14d47foGqM4nWVN9sK4pew3NwKoNjjL9CYUcSD8mWiGctrQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23wpmYDvrFq4xer2jLFR4NFstHjRRu9CUAfhmVSBVdFmFFzEsXU5es4MmnzxYYLGRLKtaG3c4QEojxkHKxxary6F",
  "key1": "4dvep7yFec1VicipjgB8rs4dgAbRZieEh9Bm9EVFpAf4STmfmEuQDZJkTBwYZqoZNEx5HS4ESt3N2B1ANmBmgjdx",
  "key2": "4PYBURyv38DFssuvx4HVZzggCRb3JE4F477PYKSa7XC4XSssjCTr97f6EQ6waZfUo2hSyZ7mo367KizoMgNCNUQc",
  "key3": "3xtnRz775T2XuJzvseYtZCGphx9HaWUt4fMnqpGoeq4xgeazXGeJjQSpezRqoAdphbfF45RbuEpFAqUzXT6h9djM",
  "key4": "2Y1cXbh6siyiWsULfwYKrFXYTvCR12a5SPR727dg9GQsBPZRNf2TD8DHnTXrnrCTqvX2sAeBvhYpudoho67Evyzd",
  "key5": "5ZMpYQjo8di72TNAuj3PCagh99UJSySdrbE1eMkTzj8QQTUvTG7UBfAyvDrNqFWfGygh7CzuZRpqQJcvbtSPVhE8",
  "key6": "4nptGNuYkV3ZLh4fdPAVdwHPgWg5yu1pkFy3E3w4WvfqmnAXM2Wk8zJXrk9qmipedVy2pdHxPYCy18DQkWZLr6e5",
  "key7": "3GKVYgr6RJpPH9hgoAfnFnCkUfVnXbdsePGTXVtMy2pcLZtW7xELTcz8k7cFBNr36XFW9Tv81DwJ3f2MBiuxuNsb",
  "key8": "514eY5eeSUvN18w8wgV45TeNFFV1MhGeceoBaL4UGivn2EwSXBYguSD4oFnXuuWg8gkeprUBLoiz9Hrpr8Rh9h9V",
  "key9": "4V8jup4SRjM3x8EfULUGrZJ66sFUMjkpW2xQRRGZKbGtZtUjksvJonUMnJPZ9RgB9aq36Q8tFCbNQJBZMboDMunk",
  "key10": "K4jEATfM9hagWdhKCron1TvwFZF4W1HNb4twnqezmKNnvHcSxhJjRqDYfiunFfKbCx2FLGKJQtFnMij9J46QGJi",
  "key11": "3gdMpEURxrayfdLiDz4LK6rW1BoaZPmDEfQHX3TxLfhyAqnDDkfWTeJvYXwdxRHuUArHg3XYRtqPKWbbzfozxmYk",
  "key12": "c2qAb2mnyjbdCSUvR1GRwnyupKiJUk7Acx57nhZ8QAMAyLveMuxDSvGpArQe1piJt72TD4z9dd6tE5Fbv6yPp2u",
  "key13": "3NwYucTQf1eCQunMLzVTUDAracQ5SvMZ9SNvjuMqZiQAjQcyNw4oaoKNTctR4WX2baUSHhWFHfoRXhEJcr5pigW5",
  "key14": "RhdLFAWcRLVDAir7r1qPF53X7yc1hutMka2duxayndurURWLm75VeRsuYYGzn1k25fLfPUWrf6sW9zELEfthDNt",
  "key15": "2cbCxJWBHXttD1s8Y8PMGJZuZhzagf53MER7Jht53V2W3Z4YMqCyMU6RfC6F3XoCL9SVdZxut9zHyXpnM4fsWn15",
  "key16": "4CEj1cbsCCvRGqgnzUsR3vC27ae3bNDiKu7uUJHhq5kvdN9oYfjnx22xmwwnuLpgkfBvVbtqM5QwnkRSdG3DgMMV",
  "key17": "4s3Sk6mWPhEjGqkpZgVXBMKdkeH2gco3A35tRDueT3vhN9zr3p31CpnchEvAXTzoHkg24b5WCN2pfrn5ko8EVpk",
  "key18": "3zuyTkCwBBKFGTtMV3xygUqsVy7aLZYEukkSHXNFyxkB3ZQxU1BVVbhDtM6mNW9ii1JzkSd2YZMkPqCiJqYCqe8J",
  "key19": "3N2qrKtpsw7TaKGpbtyt65c3TCy8aFZ6tMREWmj2Ttd4UstPRFvjwyskV8NBQE6iU7EVaRE9fqgVwNVnWKBd2p5E",
  "key20": "4LPqsJzkmwuhxSBrpydicguwjtsSmasLUg178wfxBYphXW3xnsb79FGoGexZYkFkeFkH6Dp4zVALcPZFh2LqydwL",
  "key21": "Sy8TboK71Dc1fxv9KvpKDojagpYCE8RLphhndUkB3rpPjKtguoLphgKyM7eAfByfVhCjYv8BbxnXGgAff9CjZ2R",
  "key22": "3QQ9E8T3hXkSYpjKkFYVCPFxcar49KEV7CZU1pqxRze4vUpenJtBFPjtSGVebKFHm7XUtdN2Ud6faQYNiyS1Zaos",
  "key23": "3x2cn7wZfdKhDw6An9HKZkZ6iedEEpcrDFf1t67V7b6nFuDWiURppLqWrVFsVDoozvosdmgvj6582795CKxS8eRo",
  "key24": "59tN82rFgQbg2cxZHucAsrTN8AiTdYFkKeGAqoADW78tXWFUkHBPUoAPhdYc5g1VGXxAwwuj1sbc37pHkSqZA9ba",
  "key25": "3nKbe1WqdtPRStMz4zXcbXE3WFxwVw83WKah4bxhVptVx5juu6v6BvQboTMGFQg3NX7MwphYnonxoWWtoeAEgziU",
  "key26": "pdEwzPtcUqyoB1cTU4ReB9B39J3cXw82Gz44YjRiX7NGFZyRsr6L82MKJnu5BwPR744xgMcrG1v2NwsPoJaS1DP",
  "key27": "48kpC9gstBxSKmKCt5yhVCerCb1g5Ttaj4siskvFDYYMe6mVotJhEnBCo2KNDYYrwqFbaCPUc2CuAZeR4wXYE3CM",
  "key28": "Bm6VnqQnuL6PiEywVnkHsvQgJBwMdyf4WX2fCtJvWX7BCZ46q9rYbZ5CPFMp7mKYMf2JY9GTpQCbLdSLQkD4nxo",
  "key29": "PFKwTxwxBttZT5Pg4jLp7nye2yyrYqcAKbZvLGCtdQajZSKgEe4ooywWjAiegJ6Wg3ZRjVYzPMeESMxXKHdTn4u",
  "key30": "2MaFvCkZFbyD1Y42Fv6YA7ao8vP2bLQVZzhqVi6PAGkG3CZWeQqdSQTve9ZpRyKeMSSFM6d2s6X8MXo1USUxctqJ",
  "key31": "4rsbXgiRF9BWVpNzshyQ1pT7LZmdVrR99e1zBJGFEcyjEiQXW2reCg9jkNmBuVpaTjtnbaEz2446EczQCA2e13wm",
  "key32": "2JzaJ5qW86C7fieqDDmAJBqZxY4kcVHjkc62YKKtdwPiTDuVwxVh8PEyaWtGW4h7CX4B87w1fq48xHU7pTGAmpv",
  "key33": "5ST1g7VwjnD52421seX5mikdRjLRqKtmtdr2h7cnAo4E4KDMycTu7u3J5tfAjKxfF5g412fZDNLRiqExRaEntkc9",
  "key34": "5xoK4zbJtY9J3GnspPREAzG6N3pu4VLMxEi6jGKxQPS2ULdiHsrSXPbaQ9ghGKRoyuLBtGLWziPATLCbaHQ4NapP",
  "key35": "tvQ4XihAzouXdM18UdRAaYmKd5zY3634n4ssSsU3PG6YA9DFwCdydD4PkUPodzfoVPUzc4NeeHHohvH8ApEkfuG",
  "key36": "fanQ4zU9XnjY7rfaGgHynqrB2GSmQbtu2M6kuhC8XbJ3Dcyir4oduYAZs4gYvAzU2teDWqYZdJGZJDPVDjNpm2g",
  "key37": "aCafKMHbWCTxrserE2oE5dg7DbvRFZh65zuWphUjpM1rJ53nAqUyYDrAKiu1FPZCqcPkYdTGHc9NQfergKKMioL",
  "key38": "2fQkmEsnqexZNzPkLUG1UH9Lv3Dt6M1wyvQupuyb6sGTzc4o4HdgLr6fPnsU8vjiJMjCxG7LoaBJJ7ck3pGre8wz",
  "key39": "2SY4WYwrdEa4GptkJ116bV4jhgbCa95JrL6jSEpAwoNnP33YKv3sh56Q2ugfgYGQA4uMT5ZcLyXWFysF6TYpR7oM",
  "key40": "4fhPGtNrBJvCdBxDqBx7m58yYHg9qv3hyYTXNkqywoG18FYbACA2t2fjYs2KtEM2ZsepTTuBdZYGSTCXdScx2Bqe",
  "key41": "2k3R7iMPhgaDG9gyTFZjUeRWDE1svRiFUrQyizJg8QvwCZe1ZmCJfJxRoFKzRDbJXo53da1XsUdkDT6hS43Yk6bs",
  "key42": "3NyXXdKZ4vPW2W7nhsMX17Lf51dRxrzbc4z7wTq1n2xXnF3pGYxLfY5bV2MyV6SiFRwX4HwU8YDfKCN1Ppc9H9FZ",
  "key43": "wqjjXgUcBqwW4UQQdxknH7Qfe6RUNFzSiLHvrSLYCF1mwdpFpN4fWfxpTg8bGHToDMpevLfkBdAscEUDqeTU7oo",
  "key44": "63PhbLDeDt34vYoEUFxSZddufSa7sKRY76JqrhiqKtHhA1GMgbYgdmSo8Ntw4YZMz8FPLwSYscBhUjUbDRtqoXTU",
  "key45": "4hppUvV1iph7ErrTRqtDTo9nbUvDLiajMQccqsVeBSGiA7sxnuoSJUctg57FzJNRw6HBsbcdZnXyvhSxb7vKt5CY",
  "key46": "4xWN1wjMWSvNxXeEvDzpNuPgtFbMqn3hqhkYxxw1ZD1L8tFLeCC9kTyPPjfXKT8eiVzm6JLLnNT4zB99wUbtea8P",
  "key47": "5CKp4Z49mseRzXbrNzoEKMdY4FMgkFduZ11NXtDPmPdsTGjXxhNkxnmYS736ECau8nHaCE5wkvhGhgBCFPkSawJY"
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
