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
    "2t4M4cJVzKvNKY3zzSA46dtKzDUZDnhHeSy5ZhXnkREZ1WYnVLVNzoaExscjaS9L3djctx4pCdBss4L1n9EFFYQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xrCHKFwLaP84RS1hg7mvxDzDh8To5XxKBRERYzBzT3BykUaZ14xWYquGhVGs54CjaSdSFN3R4TYCSVB9vRXiYEj",
  "key1": "5rRE2vJGA8vMmv7hDzJPmtgABLei7tBwHmzGAJef7fdN5xi3uaMuG5yr9WQSVrc8HEQ1aoxr9NevfoCtwjPqeEUK",
  "key2": "5Y9bGrYqw2B95XmY7HcY8gejWo1kqiEm68fX1bAYr4LUHKqX6iWFSWcBQDVcgKnsUVPPCqdf34CL1bBqeeex4thx",
  "key3": "3epHoe6WQEn75yVaWTdsSGviEbYarHNJ9797CV4gtddmsJLk3tQtnBAPNssFqJSayRXWnDCCaRmTgSyd18rxrJ4g",
  "key4": "5K9gNF44LRKUXFgRG1VkPEEmfRgb3rgUwvSM83jMqYtqk8ykPX49auygK3BNozi7wGJH1PUjoBWfnEih375maERV",
  "key5": "gSuNGVejH1kZFXcS4xQKFHPTMNo7sLm1kpySLTEUFrnXbvGuG3SsyLigWkdxj3khXiHFFkRpRAYApYy49HafWTz",
  "key6": "2zTSPwiHz8WiDbtU3WhaRqZ59ChLgRPAxbhfaUtdwxNAktmcFFygmjk7QeWqd235iJgaJhByJNymUUhk2aay8KBk",
  "key7": "dAdTY1WFRj34oWZVyLT3hBZxzTdUhMb3j6iwF5iNbL9PjUnErrQxtcFiN5q3AXu48ix1MW5ZQqtNq5cswZBgFoJ",
  "key8": "5iSwMwYxG1kG7c9v5yZZ7cfjSwX5oHcHtFB38rZYqo7emFjwNTAFosn6MYtzv2oGWQB621DjyXr4WNEdtED6UrC1",
  "key9": "2sQkPyohSnWcQQx5Uvk9m64pLuJVtNzc6auqHhS71Bu32EwNSj7pjA73fiJfMcb4UQMb632FyHXD6g4Y4159UV3W",
  "key10": "5mGGQ3LqPsgPL5MD8HjZmVWoG8ffsxw94sD5msZQ2APYrQLoejkR9xoPCistaAAhxBb4FKeNqpHKnJMZsb7t1HBp",
  "key11": "5aJ6QMbmX4espeSPh88RbwR3tsnUZRxmYsuo15k1Qp6SbYhfoABsWvSoppAnfHPYZm2HGF8UkYgXxExMimRy1tfM",
  "key12": "32y1JzuDFEMMzuXXViqvZsgwQniQ2yKizayDNqoBXPaNe66yB8RVdZpynBT54WfhCB9pi4mdjeZz2D5fnZiuzrZm",
  "key13": "3MjSwmq3gPPppRU4WSXRzsBRbJZhz6xuUDJ5xuL1NxeU4jKxpMc2MVN8nAdiSjyBLBGSxrRUNVH266H94CBiz56g",
  "key14": "3BEmvLwNH9a4UiQoPWkEgfz5VY33DZaUBNfXK7LXEFSmbqbd36jmaVNZshuqjJoJfwrbfh8TsLXB8CW1uqMqSt81",
  "key15": "5z3frN5yFoirrXKGvCnY4ArFFePhkZ2mpwTVhdkghRgZkHh33Pk7oLwnWRbUKiUoU1zyx6sXaJBoFfmA1BK6TEkQ",
  "key16": "4sSqKTfYggo7GHBRkZRgv3M5k2G18YxCvCM3WiCsAYEocJ6RCwQuqyU9TQiHSjpNpVBAqoVxt5i5nLSTLfrr5dSS",
  "key17": "4vDEswC7E2YZ2gVLXL1jQpbtzdA67p53hvd1zhFGC1zi5BRyJWjoTiFx5UWweK4aV4s3eR1EHT7SsQxPUSMUZeUY",
  "key18": "5mMRcjX9zfNAGtWs2Z8Utkqj2TZQBJfbQieGfKN5rQDPdxeDrwrywc183PEPtGsmzYVw3qvAC7NLEGkPfMc4UNmz",
  "key19": "C6efg3gfbZP9Yr2PVQkq8K6JPPeWyWtg6BFZgbWZhrwSBtDmZqeefFKKqUDWa14X2m9iG8iqVxPYuCxbWcrk4A2",
  "key20": "5aa4t72AnyMJbnDNTEeFbcEmvgQ39HSAjy7VQfEobdkiPGvnMziDpfB6Dvsgq2vY79tGMZB5Mtt5pTvdjtvzr9dm",
  "key21": "onwp3V9dx4WTGYc5gdurv1vrybaC7View9f5HzG1LvbfWHAo98gh9RyLmuenUPu17RM8KaGJWfojMHR7t7gXAuE",
  "key22": "2HChnL93h9kT8EgY76x1k2Nam3V5npPSqi7jB68uhyQk9W1Cyrp7thdWKHN9FiBvXVjjMNPJp5mx6yfaMNw5EwFV",
  "key23": "2vcyn5HuUknHhXpLHCJy7UCUYgnkvLKGVNJHgqnkFAUmxusDU3wRmWxCCUsyCnMbJszhmyHms7Sb4THH3ZPUXksi",
  "key24": "avqnDvoFEw6uTadMaXar7Y7t9p8Lftm1kcHvV2URk2dZEk6baKuR5vZwSRxTzn5mEXyELcW4BUbb1q9Ljafo953",
  "key25": "kM1nADsQKvFgyKrs3LuBgKxsCtzz4kHvRDv1uBuL8UDoXRwYbrf3k2cxCeHmw9gMtftLY3vGMg4TpZy5uq7Wwrg",
  "key26": "5sBBrUrc9tCySVMct2rrwX34cBNjEBS8UynpTAaMLjGQSDJyhMvkgtWMWVmApeB6XzMZzw36CZTnLju6vutTEcLk",
  "key27": "4DLivPsJ1eszHYCf3hQx6JYhmutYgPWDw5bsmjz41STYnbtD6faxqZ3yQyPrTrtUSeRQrdKfKw43xA4UpHKAeTRr",
  "key28": "Z2TaK6y5ctzeQTJtF9FzT665wHesQeeKwt5rDmMSAPazNFDhnJaQio7zgDomsaPUHZurshzpHRiyqypDnNZddH7",
  "key29": "3Qvbb3eX8DU4DRPEhBzzjmuWAJN7XTv1Zx8gC4nNgpHKVLevMrQBKzB4PcYFoz6bMeZqnexACyr9y1WXSQ54Ld1E",
  "key30": "3knvTJE142VZbuT7cY6oQAAVcNASNdXYpqd5asyZTmMcJxb74XsYfJZcxK2YvvctUoczrC6Hfk2ZL7sdrGGzwMdR",
  "key31": "5oN6payWNRfNF6zDEMd2PBNY3nuGqtFURYgREBTsjBsSVS7j4z8x96CbKvpwwk6R5haQQRaBYbHVbUr8foM9Zcg7",
  "key32": "5wJxsqTpg8KK3FuWGz1o8fmjaP5T8JsN1q27ZE64uTUSRhpTkmYTy3rVaefY2eedCcrEMkXcqfzr6zdsSBvCyb2a",
  "key33": "58WAjU3xro4Sw7koNAeWvYrWYmr4wAVp3WSL63oH1u62sGzjk1mtkhyo6v5eh1vpakMeumRqZb5TcJgkXrdqSDVN",
  "key34": "5GDkgZ49BhYh4YMZFxxwVWh5ySXA1fgE4TjKY5c7tcF4abzbHpzjciiWkDW9ZrWUJ91dwm9M2S7ApcFis7ptsg4p",
  "key35": "4a4NY97yJ9Wmpr6dMzoLqWjutp6NgPuYuso5iDatS6rEwEhrqadwnVYCGZCPverBv3PbqUV2X9Ho1mtgmMeZDmuT",
  "key36": "5ZS8kJZEJM2huJJBFCFTtZ6ACMN6ddP3obXipksGray4AJmcutjGFVZEztHDggS5sZhgKUXFDzTHSmUL5d8KN5kJ",
  "key37": "43Yb5i3HqRujPibz8hhe3RtF3XPLfbJRZ9vg4fdJyg5jRqBgueYhFLWiqJMpRzoTqfQknu33aEQiXpPsZYVoDdBW",
  "key38": "4APRM2PqsmqjgtBwPAu6e8EDhqu8jVxWHSQj8LbucQRBUaZJ1R3creYKq4mNL2EYGnJTk8RYtWSFQzDfAp7Gd7Qw"
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
