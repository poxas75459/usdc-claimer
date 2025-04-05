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
    "56VTyk16MDhWxn4MMUtwdwaiLFw93fw4QACJgM7ooaKLyrdEx36cp8qBNBMg4ndAqdxYWS4hfGBbf98oEa7Vw5xY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZMMFaRarqhvwgPUvw8ECRbbdGC2ib66g2B8JECfUFdk3EXTtN3xkdhrGhfVpM1FfRBf3auJZmRf3ATaRGv4fpP3",
  "key1": "2B1QnvGRevNwvtauCzvuBg2rB6RvhLdT2EDmZNZBMHopScg3n83sGUYGc6yxduR4KvjxU2rqbGPFytjpamZ27XND",
  "key2": "2DxuwZWtsokLi8h2enfcHU9jiGeoMDfa9u8AWwbeurBBwGi3JqL5s34aC2RGsYhgoMczkKjq6TqiWfFSMfDKP57M",
  "key3": "3DCbbPrjbgRoDtNAFisSoafRu2iqbHVnMdoyr3cnj2Skit2T6AP1JmAETsyKDP5q875xhKMDHkSGAS4sFMGuDCoH",
  "key4": "5mfHriMhNWw5WBhygtawj9F4atEj9kcnbaGC6kzJHTuZU4ZVXWn7s7DPNf5ZtvyYBfJ2fpA55V2pb33xqZcZWLiq",
  "key5": "2Cb7MSuPBm5c2XnPcM6rM8AmGCNcfUxHpEKQiRNb782kE3Y7k87XtfpcnSiNyfJErDcyFNXFvSPFcvfUcUEbBCLH",
  "key6": "3qNrzPxvpm9qxy58N3RQRGj4MGnDCa8fu8QUC18e868SEkeX8ASC2YhmfhcDReg8Ae4VsHJ9RgQWEtheRZuRTfmK",
  "key7": "4Nfo27P2Qmdp1z22Mvxyd65jby8TQ9f1JrcfCqmo84BobpMsiNSJWisfYatxhutgHWDfhXzXE2nVfhWr6CHkyNUK",
  "key8": "5GyBoX8FM784imBhhXCfRegQQMcFnVUWWQLGjtq3ETFxw5rUQ2HzSa8YZj5yQcxnsRVoyPCnfpUUFgwcM34bwcYJ",
  "key9": "3vFdQLakPqQtZmPHMZ6oSprNx3331TU5dQzcDtjdNrz4A2r57e5XshQzXrKCr9SwNYM1NogrTCxqNDnmowvHfKRB",
  "key10": "yaaKV4vq5LiS22A5q4tEjz1DYZkKXi8kHvBN3xzQUNtzPh8rDnsCtAGHJRicm27j6rDheTG23mJg6LnX2F5PKdi",
  "key11": "4W34z8suNWc6snFK5scot6fnvA24E6SNnkLLFq2mjTbd1Foo1HWRku2S8TcHEk4JaJwmijTh8DJdBmJ47GeV6cw2",
  "key12": "5pR8WxoG8wL1dNqUqHKCj6ML54vcuTVjCA3xoH8TRe6E72ndQVdytPkwURev7b3PY6s5kKt95AEdbdrbqRZ5beiL",
  "key13": "5tUhNQPxmdaWzf1UF85hGXjMcaqCD4X9NR1x7AHwzNTbZyikeJGMwN8qxkonsirh11T9SJsArnbDTz2ZRUTEh8cv",
  "key14": "49GNyj8d5wtRAq4uNxNfcKuz5mTmZvBfLWeN3Wzf8n2VSkw1KpjgGb41XmXX5Q5SARGT3SNDgdNfUiXt32zZXhNx",
  "key15": "3yvH6FNgnRcgNk5cBRi1zZxQPMzSqFaFHcaYu93Wwa6Jx1EhgdVavG8gYAdSuuKNyp8BSqsyTLibMX5iDvi3uU28",
  "key16": "2FPBNf4H9nHUqhCwaEaxEfr9aMAybHHtciRoDbQE7ZetZsu4R1mqXnRJ684nCcSzckHh3G3ZjHg87t7G8iucr3EK",
  "key17": "2sbJLFD5hq238LD1LVZsP77Z6EzRhxKPHrCm1Pi6om2ELkcDU4sdrECrMCvLfE4gXi9YYda5jAdnsZ1soNyGNqyo",
  "key18": "3qEckZDBK3BiBx2F9JpwMoHdwQmJiWHoeZCGwqs3gjVdhHWdbxQBx6dxxjBzQhR8DcyWUqaPCMNaed3pXBdsLLtn",
  "key19": "nhSPboTUt2FcKwXf9R4caUesttef2pizSwitBjYv4KrPuDoiHRkNsqynfcyHp8DvgAFJ4R4PasQQktdnGhp4NEZ",
  "key20": "2xPT2mgxt8o1QRZk1cNRc5Wz4seWZBgeTzeYxWevJYgSBsWQGyNh5iYeny3UNkxSq6etenEy47jAgBWgTpporQEM",
  "key21": "WxmyPuHpT2skogy3LuUX51wHdA9Z3vw4KnEEWdtfAJcAitE7SkjKYpjkZqtida1vAzFoHdvVp9QXY5LQiixurRA",
  "key22": "35gd2gsd6aJtAQae7NoXBEjgR3uPaT86vzyPggdj5Rjc1tnq7qZgTGm46Lzk4mQdsC3HTACkpfEddHfxE5nvvos9",
  "key23": "52ZLQv5cfkJeYYk32FMyCe9T4SxyqhVPaBa6vy471jYbxCagSUzsZJwpRJGT4z1FveaBSYx3uqzFG5ZJMr6Txyah",
  "key24": "62F9RS9RBCK7j5fZd6ofywarWLBoKWC4XfM53PatAnPYXRnP1uWMooEGNRJ1CYJGjgGnEREGmotr5fFC1kvLFgTK",
  "key25": "3TFGPRgJMt6dbj1fB4gMys2Tj34y1HQXaJYbsixF42netNtFfT9F379ejZ6h7bKZSgwWafgTvxRwbR7u6jZS88JH",
  "key26": "Lyz6tmvdQRaJwjpE7PHmmkzNJY4bU6KVwKxPSQLcYG5CDCRqbvgePjQZ9JBzWNqTQbvT4YgnDoJ8DzaoUUwDGbX",
  "key27": "Ujf4PvrysrHHeC2fCznowFygXbgz2oVPoLvthRQJT4LpzPPZBEgVu5TziRvXGALGtPdPu8upht6tT2Sz7zZXSC5",
  "key28": "hNq9CHmhPDueVjjjPdnGeTbareaGxTfYeYmi7XZWU329aNBj2iJRgPT3WYjxeiYTyMDcWYCRJY8dfoEPRoehY1a",
  "key29": "5UGdzsHjktVvZcoisvKUQQpy2uzb2eJCqnjhJo9WxGJLG62xPQz7u3f9PHzw1Fno1kzKMsTFLEmRpZHLUrEPbnEX",
  "key30": "4JYohAC7tA9haKCoaiXdLZERSnwMtefR2xPTQwNhbyQyB9eCA19V8W7nayj75t9n9HX9ySKuYSpQfHKDiUNfhJG2",
  "key31": "5zgfqpCtSeH9y1JUdGcJLckZeoecNsnqXipXDhriPgnrw1tCuDc54MdmM16ZbsEuSEuhyAju9kD5nGGVkJcm3vT2",
  "key32": "3XcLi6oQ1BPAfuSYcKQVEpkE8S1ZAXYBuBuF3gyQXhCWEvAUDzHPDgESBuiZt5fPQfSxW4K3WneHBHT9r5uEfvVU",
  "key33": "3XHnEzukMNDVoRvjm1yBSoakuHUiPjgNr3Q4fxaA7mx2JGhaLPcrnJGfjoRt5TAdrbMKZrLeS62eu62RpwNKyPsr"
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
