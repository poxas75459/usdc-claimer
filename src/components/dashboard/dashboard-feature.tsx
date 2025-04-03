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
    "32L2xdkm7UVXNx84p92WTQDuNLKLtbjsoJLazXKhT3VgecMWVYx6PihcoQHgWCZgny8NjdriM7nBJb4WXguGNq7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rpGSKcnwgnGiGWv2HsJ61azNWaDM7d3W9AqgJVwn4ZbBbXAPtDm2KG3km7hvsJhsM77TM56WSPX5hegub1ZbbcU",
  "key1": "21tcUWMCc7VUMAUTs8j5HTZ7vxAKzhWXeQE9TX6WtY9bQaQvAbAffSTS4YLTjVt5NU9KgShVyocG8YMjTugXuAex",
  "key2": "5dU2U4qiNk9YcE3uboX7uGGum6Wdzb39Tx9meW9DiPPTDz9KpDkWx9dnyEvzndzgjbMsaQxXkmJbowDNSGKe8f2N",
  "key3": "41JyUUer251t6a1GLxtLrAUGTYo8uQWgpxdKJH7xiCUG8iHMM5psFKn4ktZ66HYx25km3FKpqdbcW1wubYbcGp6Q",
  "key4": "AuL8CaExWikvtYAKBBtDWWUScKHCo996bxWC2vjq2mZW7Edf8hB55ykyLKkwY7yEiuenV7pV1rsBdERP9nmbHBQ",
  "key5": "V4BZYScCF3B747sAr4VveQ2zF71nX7urJZfJdbvQgpdsvCnzwqHHnzpxZzv7qZB4ireMXK71TTZtu6X38zTWtEw",
  "key6": "3E1HG7pGURRtZ2cLnA9HvE2YsbfRRE3PifxrUKLKDNkLMbHQXDiAtXDUAiX2vELqUQQR35p2JgPSeripo2XnU6ok",
  "key7": "4Nv39C79m6QxXzjFyCoDjAFa1QbuC9zDhrrbPRasTL3gUguu8L5WmvxfKjqsh1TfeXvdZSJwaszqGZpTH1upGs77",
  "key8": "bxSrWJ1FqNH6L9MPxedi7Y85CKLzT9BdqSh4tPPgfiK66ENkg4HjmwJssK4Xd81dBS1YGjENPBSnBvDx568u8VX",
  "key9": "3Sg8jLZSBfYz3CGr8sbG64ueBghq9SZcX65baLfjkaZqTAvydVmSyGDi5R5JYaF3wDHDBdWjixFWdHnaZarg9RWU",
  "key10": "5XxKSx9o44CZ1WeFcGwCrXxpLz7phLA56RidJpxmeaFvD7dXxjURQ58AJivnBeXxGC7BpbeBLMqJSAmdKJVtfeCi",
  "key11": "37ZtrnwyaWecnrACKdG4yhgWzASM5KQhzzwmLzQGBKWzXw2rtNwsnqBqYtbfPgcxKq3Xc96jHoDffzgvyca3PBvU",
  "key12": "2CCKv8cu9YTJFipMHRq67H3v3agxSEGk4bxXXJKzao7v41VXtU9uRQPo4wvZWg5Gje3sAityXGMnYbFbJewNYFDK",
  "key13": "3nbVV5JbPkrd8ny8EkLdrUmccv2u9t5CkNU2Hjv2U9PogFLSg4VrGNp1dATmQv4NZ9eQerp3R3xFXRUQ5jM2q9vV",
  "key14": "3oyJegHCo325kzF1JqWcoCUVnRbUoH7gPMo5Y3RLP8o8fw7ipM51Mp5XALbUwGsVbGQaH3Qipob3LGQYAzCLHfFc",
  "key15": "n25tczt5TwEf6tFncF5eoM8yzErpWLxoeTeB3SuXRkxavNkHgWkEX2XbobktHnyJAm2Yfg8nK1qUzVo745389r5",
  "key16": "4dCddEp8jn3XzWZo3tQGsip2HfhR5dHQs3APonczy71vijkBGPZc8eS4JFoiFpMDao84mwx5iXg8iEg8WJb6Axz",
  "key17": "3uMNxJRs7oRYLgsamsNicBR4PnWCMiKZMqgaAo4QYsx2guzHcqVoe6rGEDfnCmrFGx3w8Hob1uGiSb3Lntm9cFty",
  "key18": "2nd37rEc6eXC29gnS3CUrekQHSGaLwYUU5F4ui9RQuEoTkDgnE9fZLEVUUSwXR3b9VchVtQHyhLgjRNh11DBhkSx",
  "key19": "2aDDnNmVjeAHWzHc9EPa14JTPM6dm2UMtDsp13uwAR2NwsQ96kAf4yH6ZX6ZYiJMBYc9w5mECSLPgSBMsD6scRN8",
  "key20": "qEPKaAiVwxrE8a9YeuGgKM6T84sz2Ba864YD9AeZ16A3pqAAmHcjokaVX3nevbzyrJZ9KFigUnxhfQmax3M6MhX",
  "key21": "cR8hGhvavSitDucgN65wLJgZm9CFtmb9QycukUHWXipn1aEoGZP6R2hb5PxsgXzNJsN5ceqVqxkn4gx1BLirkA2",
  "key22": "5BsGno2uv4NcnVJn93sTeWgT1idzEca9EDFbmotiLnejy24JfuDVQnmXJ9HHcJ2nn29XdKi6ohdLaB59VTVMHr7L",
  "key23": "5tAnrueqBGE8HiQkEd3AicwsfMFzsdfwy5tZ7r6SRXPMTbdeie5E8MRfYSjj9E21DBt8i7VTjXZYNkwmLJE8GukV",
  "key24": "51nvcU92prjTuuhpjKmZqRDXGEHWye8iVq56bpQjQZfWPS4d5GaSMaBncctRgjzgokhxGwdD3qC7XVRhr7U6VLww",
  "key25": "jZFtR4488uYUKTuFVsB1kGqKFVFTQ5ZsFyjuDCcdEdfgvaE2jWxe4nVdPhznr2XnFPUh2N5WpczEyingAACAHqC",
  "key26": "2e8E6mDgLcGzaJV1hwMtHpNsWhbx1Xt1AuHvQXBuYDjhJN3j7rrQyfCj1tAFL68Ju3RjBXxBXiqWeSjfkQdBgzJc",
  "key27": "2x6VwSu1XcZ1b5vEVQugfu5hC4e7T7sEkmpSfifSxYCZhmb5FgwmMg8yzboEE3F81h1TH2KogLRhPtQ5ejxX9RR5",
  "key28": "5NstC74anjpzQpVe7PLQRfmeVrwfH1K4g1pF6ARv92YGdziYTQx49B8epJi1adeVPn2xT47jtatEBjEGc6W5dzhR",
  "key29": "4ZuYm4ySYgk9kieGM5T3S96seEi3ujLtCZnuqxJwWn5s8wGMdie2NR5bDbDD9ZrjKXvWLbrEZ49hwX651W6gPUDQ",
  "key30": "5UXWfNExny1stswTLLXUJYptRXAkc61J12hbn2bvGwRvAaiYou9MZcL8aHJT7S6SoUFbWLF3BuKRN4YmUjHhPNAZ",
  "key31": "3U6LqHB926jHPbqN8Z2jS5n1osEphFPDD8g4HWYNhwrmAuhnbA9iewgGa3ev5B6p8KTiFKZ5Rqsz6Nn11wFcVRM3",
  "key32": "5qAMbDoB8vQdVkw7kz4f34a7guajEbcT4iVWdwUNNBnBHLSSVm5cuGZi3LZJt5qf5vTwcCXU6nrdD5USYPf1JBo1",
  "key33": "48dYpWFMBvgbjdHycRNm5JLUL4od2xTvuYmpNcRjruB6EX8vj17i1HNQ4GUvp2CP16qoSfkw1LvhEL8iBbuFPDbL",
  "key34": "41kdcvVGNCcpy8y3BvN6n8HAAGvVMf4qntDGrB824mtESnwwqPM2GSqUHRxxSrX5Sr8CrpG7zdUXod9kSNt2jhuE",
  "key35": "5XCxchCVsXxU12pwjK3GcVXQnWZTWoVsrovV9rughz9jsaPekP2JV1Lb6aTAe4P4nWuazsBiLajYiyn11AA9Q9be",
  "key36": "2odx91vYVzHFMN8b1tdqgn6wQPSFjSwuiv2FW9coLy2euBwn2ugTJGedMM7GqSSDZqzdzM5ajGsvJtZosm3T2iRf",
  "key37": "47Nd3HqvTZDY8YyoZySoXBTt63VqCjvKE5gH5m3MyBWWwcqsEFbhFLuVaFkPjHxcE2uZQwp7HXfGLQXvwXwhgUW",
  "key38": "4CjbYbmnxACjJfefdyyQzLHroSyxcmLmoJmsJqNtcvdZ1onMumA16spH8NbmndYHfzVXpVJ19Z3aNv9VdkYXnT9s",
  "key39": "4tB5sKik4bG3VqBPbJ76idEBDMtNa8vM8aUq2ADcgr6LLdoPzyqypQ7HHo1sn7Rs7aP1m9v2bqamEEDCDwcivhSs",
  "key40": "48UASXmaNK7TDD5XaqELctbsa1FKcSXmEBx7hXoLRSWJLpQMZGR1BW7Pm1W8Q6ADPWxFaPNKwjdJT7xKpDCpU53f"
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
