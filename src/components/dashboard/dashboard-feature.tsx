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
    "iArSo4zpSwsdTTQKsYfkdeZLYXyy6NUJrXYZrK1v4cSynyF1MF7xkBnX1yWBDcHgi7ttqRY2A4gzHxTAC1VLo8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TnaGJhLsv5ukencmtfyoCQ5bLomYVrtA9xN9aWJyUBBzkoKGFuvawKExr9gSTVzZPe9gTLuFaJ3jL9kxCCwupnT",
  "key1": "4CfmaQswPBKB4Q5tqJgiewBAhc24EBEvrLePcuEcntvd7VYre8oPmJK8BrbiDKxuLbEiDrDcHW1CX6AWJwH64kgU",
  "key2": "4n9eagW4EcSyXkh4S1PAbDjn3TSX2w52x7UrWu4nNtEC83xYj2tmb5i9ATx7pCKaGr3ZKKcS6xujvfYqSZ9mLAts",
  "key3": "48RtZrh2xFJyNTfCuauB8jPp3fdGgxxRTdmwp1kxs2sRQFA9tcy4AJbE8JWzxB5UoLpWyKHgZ1gjtAdTSRCf1LPX",
  "key4": "4P55RgSd4dWzVbbLTfusrBX8AJsm141wSb7QFdtEW98YUDEknmteq87kk2Zn3GyNsSbSZtdveEcci41bKNvv6TDk",
  "key5": "mvebGESQrCVY8qk4Uqh1u8x72EAJLZ51r4pakwgkvbihXhStTzBqy4iUG5SSifxqUv8YVqREAPeRmH6fcqsuwVG",
  "key6": "3Bmb3mvqRV7RE7YvwzF8NEyNraG1gV2dZJdMRv9sPTZTgJG4j2Umqc1JjoUikFZvdpzuSTMimWMHRcejjkou7PKp",
  "key7": "3ok2ZL79mFmkrwoFGuzt7BdYRFjG7k8y3n7yh6h6RoYPX7JJLz5p3Jf5UyrCcwLAQyKDaQSxR345ikApZogF3if2",
  "key8": "5vmjueQqm1f5mMwV8QdmSh7GjSQj3tVxxRyGfDejfG1UnvWsFMrphwbT1SwqKchKdA3tH3URybmmqwRqi9BcW2mH",
  "key9": "5xZGpc5nriAUev967hCpceZpXUSCxpY93PunF79mto7tKTAY7TgvEsE74FYbpSgmGD1zRRCqtJ19qZMWWihn3XaG",
  "key10": "TJeWG44sM1pQFkSQrh1faQenYcMKAAXnE4nkNLjKxE7NrMm6sFQ1MVHJiXEZpht5jXeuVshTX77NZkNKpJPXeJF",
  "key11": "o8gKY4iscNsyoauHJJgYZFBhyG3AkrP1oo7c62Eoez7dZDeCco3tK6qR9fqnJC8J88DbNGp5eNeDcBrwYpy1rys",
  "key12": "3kqLyMmtFEMVuP73A9F2vmQ7R8f9FSpqpTyDzFSadtqe2Tk25W9tq8ukAgmQz4aZRDqq93DihdAysjyhz6q29URf",
  "key13": "5ccMSUpKFMEU5YeL9tNukJCnAfchxUMCb8GC1F23b2Mwn4nWE1gm86TZvWmjv8jBUBW3fE8dmKcoVBaYCghkytKv",
  "key14": "31u1rMnxK2PJ8hB9hANvotnfNoiVhshHq8zjF5rtn9JDdQGZcD4UqYeKGHsXnEugjhgkmtCXH7BACRwGxfYinWGF",
  "key15": "45ZRk6Nw9oZdRFPrvGbGm75M12JApvWJkPsvwysTv5nm6MomwvD6tsrCPqWCPwzgxDnzJM1NQ5pjSd1JUjnqiDgP",
  "key16": "3LmALiJZ5u3F8V3gMHGqzfsK2gtBG7dnCoqBeAPoBfRL61qt9g5LfexUqQzmY8op1Pd8WAZXKZtbA431TzGpxWRu",
  "key17": "Lr5B2Kn6AGZ1cEJyNM1cSBdQrMNApWa7JsjKSyRZkr577UcE4XSLXTnWbFhNocqkEvmoKr4EWUBPa4kR94EJRkF",
  "key18": "4Fbhmjv1RuhxgEbkWQirdCFVsBeAE4Cy3926aKSt81xofrssRgjKPEV1Do8DF1KCJkGg9hVnUb6a9Xj8BMJrf6Yz",
  "key19": "5E8eJTWJZoo13DsRPhMwC4fzpHmgQcwU7RTtmsPoZts7TCUxA98Sp6LVCQTk12mACoSnn1Nxu79SErMGF9PPuoHH",
  "key20": "3wTuKJTys5agx8jAUZnChN9XQRhQzGfj5kWaTbipX7KkehqbYuPy1ugo3q9pR9PNpzRyA6NGsA97p2KrTY5GfFCw",
  "key21": "4uPcd7vUwc1R8XoJjBYD6GWu7fwWUdGrjyELzroELR91nApgb4tRW2myr5P8eUHH2rypDUCE481vobLvpnqBNLxS",
  "key22": "2KHaG6KBQafgeXhYZvgFrXEHCpexemkZppVzm4Bpo36bcxF34PUArcuuEyVPTNZUxj7CU7gC4779W7Fm8v7x4Nn",
  "key23": "3wt9GSow57bX1ueb93RzvYgNRHkQExtXnnJhTxgBrqLJXw2ypaaYH2Z2qwZ8Wf1j2P1N9NQF48qfew2x4T3hChE3",
  "key24": "47dF87zTFswp7Z8AJ43h2CN6n5NcVnWz6PkmZPrnrViXsmRVwQXVNx19JUGFnrT7hb4qxk5QBUQkAn6WUwW5tkE8",
  "key25": "42PpASpa1UWT2MsF76rKTJu3mfHYrmVnmsa6d66Wq3ckvioLZkNEnGEQVUZKeEXPcwnp2frpB5mYzupVhN8MoyF6",
  "key26": "Wdaia6kw93mGSda32WpEMqAcsY3Z4P6ho67xR4SiqSwpYSBLjisqmy4tt8XWA7UA9VycHoifA8Hy6Xe8njPZbfF",
  "key27": "3ATssvnZ3jAqJavW8VkHbpQBeYJkba6kLxrnsGCRSWReTxWxrzf7kWJjPg6spgJAXJbU57WSrYxpE9kWQ1V6YvST",
  "key28": "2Xoj2c6nRk86UjRhoRaYUxFCEZswUvFAjgrhXvcuCEpxfbD58EqiKhC5xteCADn99E1ozvT9RnbGamywRDpxY8Hf",
  "key29": "2KELhumAUwN34ot3JNjCNgK4hjaVtAmWqjJwSgNyfAKZQebeGHRPLoZyfWXTshbxifCdbmue4eK7T1LyZkh9gmXL",
  "key30": "53SRbsNrT4McqH3fT1UNdvTdrP8TA7MvNhT1gTVq6FJKiA8CH2xRSiCCTkXHCvG4MKgQ31XWtAPwq19ctbisj1xL",
  "key31": "3c3GkdJ8QGUQPDZdm2wiGKhGY9ubtiLd2kLqeNCwRrESPB7mjuLJSqWeXLyAtrwepDp9rZyZggJmifseoav3fRs2",
  "key32": "64yLBPR3CwpEJUmvgWJc8H7TQtQkUN85Jont1ffVQXjKkKv9crUSZhGsk4bjvfcGE2A7R9vTNxPx3KDtp4FcJyok",
  "key33": "VD3aqnjh72KxFFsFkNLtZNp726Ngt1tW6AMTXQ2Fmy9JdxEdQFCURHqAnf59giYd6vBhtvE3559AkGA51RfQ975",
  "key34": "2aZpE2QJMU3H2pUxUP7APacN2Gd52V5dm9oRNc1JVLV28Yb8FqQ8dDG6WZsXHw9unTb6gjmfod724QsNQpJPwKVf"
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
