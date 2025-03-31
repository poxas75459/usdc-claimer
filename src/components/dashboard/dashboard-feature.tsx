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
    "3RBLzHiWPHkFynhN7EVHjZF1e3fizrFuAJmUTkKG4ivZHMSib7uY7jaGfYv2fm2sgE3ZvG9vuSrgZcravsXzqSAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wA8JCb4gXYETkyZNepv31GuLvSfRtX68mwp7gs2hB9vJYhDkASESm6TzCjj44KbDGfMRz1QoB6C1xeCkm2rkMPA",
  "key1": "21Zuok3AspJYVg36aCVdjCyCUTtBEEYfTTUDYQhSPDSrUCWVqU1RsZcJqpy2YpxqaFHrFdtMQHc8yf2nmSAVVcwY",
  "key2": "2XEjUz9RdweDTRH1EVb1kETFrv2tQtRR9LxxnV8b7YweJfhLaKNWL3c2MXMXAYRV1KcNgDBAVRqfZGeHiM3CVLrM",
  "key3": "2eA94xfP3PBEqMj6Lw7S5FTbcJC8Z9x4pUxWM5pnzoMbi6ReaEozT5TwkCA6EsFB6b1rXVpghgoWdABitEJmusDG",
  "key4": "5WB75NkbBSZaU3nTfuipYjstkgSbgWvfvXxFZte5L4jvTCxAPxbbqYdhbinyh8dq784YF3yyU9a9xwqwyBFyoSj1",
  "key5": "3mmo3xQH5VKN25GNWYu5oVftJTeDdDhfPc3vXrVT2gZbWMjKZdEZcLE1BcNQ5wA6c73ba6xdkYDaQQmf16CSUqR2",
  "key6": "YZqYeFm1nPLextQ16XU3d4MDEXGngcr3v6jhcpWwEerkj22roY6NK2oCw7gm4pfUJfPttTpJksYtavfx3uvcsFd",
  "key7": "4SUyGeyR476GEXaZsBNDikGzZKJ3VCp2NoWoqBuvL86CWrF6pdnyWEKVaapgU41RB67o8kyEumsohSvR6ELwG5D2",
  "key8": "5ccKR4PTsM62yE1yR3nTUtFgHjwo9VscZ1frWUzMq7E8G6AggYPmN9UdYkCkzkkJSu1cvbcL2bJp4bKNceC5RndJ",
  "key9": "RL6ehw41tPamzg5hrf56VxQGM4eMFH5A7tKpP3bYsho8ahZWCW7pJPTouvEhcWrRpuLGZ6nZCNwHuHTTzrw95FG",
  "key10": "4vzf3L1yz4vPKbn7AhQR7fJD9QFusSSWWLToYyFNv5oa4cNeZvuh9vkv5wGiGmWZxNqMAEZWFN84bWDTbpphp52L",
  "key11": "391V5HAWZDaoQS1ws3taAiZVqX1UD8HNkPQ8cU9wgB1dhgrmb9fiPsgW6fVsa7hbZrdufKzcDN4QXhYpCTrAdLf",
  "key12": "3WdLZGbJ18Aa44QeGcMs9DXz4xMNj8PZv9yrjwa6aCqhmbaoXM7YFdz5uSzjEv2yd9ibirPJ2FDgo82ZjDNgihjb",
  "key13": "npbC8uA4nuRtR1ASQhyfEMjMDRGQ5n4TzfVFs7f1SAEwmUx1JQh8jyget2fCgEPKNerka1FhH9UoRCsovcXbFQw",
  "key14": "469dKE8VUHx6sSyvYQjoH1JV33KvwcRxSms1BkbwmaUmxtRE4XWsC2ieTMgbsLb4iuGPpZ9MPbqGTX16kCqgRaMv",
  "key15": "58Ub5EdmKSfWQLtfZkmGFKBhhRqcGpEdNSrDb7zYyV7QAyaUqLvL6p8gUTxzrjkNqS1jCj2raw7VkHXRX8NmYaVq",
  "key16": "5wvS5i2FKWufnAWmY5rAuRbjUmRDHH7VZnXCbA1suLh64wTG3VMpHP8gkjXesurerUEfjansrvnfVBeQup1WnWvp",
  "key17": "5TK2ZK6hhnZEbYbKDWvvbG5mN1GiMeR8ZAfgxHSjzMt7URRmZdui9GpYh4SUXZPwF6yPNHWXUZcLbBq6DFF2bvyn",
  "key18": "2XL8eSeCDBD7WnTUgyYWJeWhjN6enu2wbsHyQba4TV2HpaDewQA5KV9Qq5m6Fj6XSUYnEfUEoV6Cv4BwXbScuc6P",
  "key19": "46QoWSiMaycuCrxZXBb5oKmMWzzSVsDSxf4mAw1PDFwdh6mgTCrRZVboMTr3N5DHV4LXPob4fiyQ6egcfM3nfQgJ",
  "key20": "4gTvvnmcJQT6pKshEk31i2LGLp9qNJcyrpkdAMikTUvPSS4U6rLGMXNYkrZdj1ghhkMULp7km8mKq5VKeUyJ6pZM",
  "key21": "5E5KTqhcMj1TAVSRLUica3t46B5D7FqHmG9qZugEFPuLqXgbM95DSqDGwoAd6MDXhoJJTY2KzAoNu3TqWJXZYWt8",
  "key22": "4kgCM1EcGrH29y6P5kGg1gV9j6j6NxfK5c15kbbY9qK5YS3XurPdYpkNGFgBXjdRGvjNiMBfkYQsRuvzcxn5vw1j",
  "key23": "2CEVj4huoZYQT2Bs3m6WWUEiaaxvckdeHHHKyonUPLqjrAGABsXftTUxBN4qDmgx5BKe6AL8TBAGaLj3d2ysbdjY",
  "key24": "4HANsGxZsAhQzo2XoSwS2aKtebJ1w4r4cXVvRHUwszxFEYCFBHjC9gj71JZT2GUW5MkHk8VkBNZkjaxE6Nvus2RQ",
  "key25": "3WTPeK2toMvCk5qaGpiWt7xAMpoyiBZ93sfutaySax5LbZgPe5wdpL3iErd94d7tbKYGmiEoYLh1gZwjPBTQgC1Z",
  "key26": "Gm2h81Xfd2TLiPHRnsyDSXKNgsGjPy9FKuEVAEFoj9LAhZFA5ZEWSWGfLZ7QaZt8mSyBYEqUF6XLKq8iwaGgXgj",
  "key27": "5WmGiHMo6mKsbXxksmL7zDTosADx24P6tFCRZzdCkUtsTYVsY9N8jMRZ8et4KC8S5f7rMZnASYEutoWRJD5oeZZ6",
  "key28": "bjStecrpD9KBm18Bpe5yTbBSAywt7nfeM4jqBTk3WBhnxzgRHxZ93WFC5mYHkKuJxAw1sPuB83c58G1eTrbZ83X",
  "key29": "22bMZCiAMNTnwcmdnsCvkKU3PaiBPu2aDph11SBQQ1UoGjf7X5MaYPSJTpbcm2nsqnybQCH5WmskiaDt7ThDp5Bk",
  "key30": "5wWNR8xEjgyqWNdtDM7Y9xYMNbQm2Uz3nhJQLNYuDCA6ovUcevdJezL3zZmoTRvGzvYWrfK19LLmFnB6CRAp7UTX",
  "key31": "4sjufGEhmxiQ3RZ94WTsux9856mEUHAcTurPtjXqrAgAaeHhAW4o1Zs5pJZe1CUDnGb8HpU15YKEtYEznMMsx84G",
  "key32": "5zks7hMUfLPKgRWPkMd3su8oLwjkhEqs36TRUgr7XGqFvGDVJurWggk3PpgiiK6ut8ncPs9TF77csj67kr8eUCPH",
  "key33": "RLbUvDC1oT9BuQe2M4BqZ4Ye5bveBcJ3XFetmF6TMPd5C4RtvW3WQdHZbB9eujTwG67igxdjutbZmYLea2AKQqK",
  "key34": "1nzdXS2kusb6jLAWw9FSibA5eqSPAo513CsJZtNS2kfxWjKrSVYoY7A4jEnozTF2pkD8myCbVjTscDdm26a6mzW",
  "key35": "5R118HAjEpYFKUXmMfcqTdWseuK9suVewvPKBTtPoMZCeLDM3EddkDePyhuLhEkec99nqVF5zaodvxaKjHotWE63",
  "key36": "5vWwwHcXuqS61nvJPEeRYdkFrxQ1fVTHrnREDhjPhv9TDFMfY1PY3eo1SNViE89iqG6JBSfVCXb43DTUF9bwEXk3",
  "key37": "5NpJj1mJfng2eYBVZFtVKthLms8i4yc9f2yWEKWEMkokQrEo3gS7nySbEV2kg1NJryEdVKcMA5RPhKCRjdgeR8nr",
  "key38": "3CwX5Uvs55SQh7KPZjhBfYQWWNz82PHPJVLJShbQbWv7BMewjfYh9U3G5LHQFr9BLBbRnzaACajiBopsojumrPGD",
  "key39": "5ssNFCFoEPsRHJazifrS28atV8pwXQeJ8EDtvwsDUXBYXc6F4XLy8ZpmFTkL8F12j5m4wTo3GATt6rkcnFNdtWvS",
  "key40": "3gKsxrWGLkSBZL15MZp4jgC88t8M4uU5dG4rSU2FJC3g4zuYfpqeYGxdnfLjy44xQk2zcr5sqZEheMDcB1mpG2js",
  "key41": "4y3nxBqWMRCmW1HGCSEY7Z6hmmpvH1DkBjcJJMQshCfPjnmx57TUeeYzDnqg86V6sXX7p79m9fg7mmBSLwrqNxGV",
  "key42": "4CmwfC5FnunTNSWCjUjwUHYYVjhck67a7uKHWiHFFeP8f17YW3dvyfEbAvLAkwmf5MnMXLXPuNrApBivx9GZnk6k",
  "key43": "5B8JBYvJvbHvoUqWKPLU3G4Y6PTSQMtAUXZjw9nZFAEF5GkVJxiN6DCHBtbqBZnwADehd3GfFMafhZZHdnhhtaUL"
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
