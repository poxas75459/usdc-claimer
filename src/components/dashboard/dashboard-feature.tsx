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
    "34mq7ETFeAGVG8fXV98c6vi4jWBmCjGmFnZYJR8NzDbfkaGbXPLT5ffZJwG856MJMEpVWJsj8Zyd7kzXJk4fWDYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t5jBsav9WPw2diWRYiYqJit7GWYBCVKh1fhewkuoYWSiRj9q3TqHK8eDiyuMmD5o1tK1gYJvzBpzLkvddvDVnkU",
  "key1": "YQGbfzvqiGV4zjhf515SvmP9QMhEVMkSsSUR2YAeJcj6Pkg3mZWXPMn2ng7393XVcTwnMD7wGbXTwk68RZgKQ5a",
  "key2": "3tSjTawEDHqDt4inChhQexihGQ9eTGDnSrGrsH6U9sQ4naSLEe9D7yEA8Gm8J1jx6pXXrXw8JXCfwYEcpgZjuxez",
  "key3": "2C7fFQEdSDr6MybpsvokdFtxrztweHt8wGqbZjv8TbWYcv7eee2SNJP1h7Nau4Grz8amvvNroytH7KxEhzhy6TPL",
  "key4": "4JukAq17ZrLXWykji3e4j5aiJSjX4Gch136tLNabrUM8HQoWU14N88CZA4xhEkb8aJTPM5EYPooDrDbc2GaEPdd2",
  "key5": "2cNPyW4KiQbK8zbfMJtEZqsYm77vkHhWCVRX4ctqmjLvfAozJsEUYxxgeHcwQBjZ6R5t95Yqqsw9caUPrHsagJEC",
  "key6": "4XXT5H6L3KfkhKZNmoVDXuDQ1XXXn2GovsAABu7MDnpJrnWD7pYZeeTkbpFoRuN561684mC9dmxfghjzSFUVrKgk",
  "key7": "5RrCRVVLh7P6bP59NHbySnbyG8KyvZ79ZzSKkP36ZEY5yNvSWXhLDm7Wdtak8sAKydHBEg5xKuUc1giTTHSnCjgM",
  "key8": "4M8hQvyiJ8smaD4BEg4bTkZjbxTtLP2VH3dEcW9yhBniMcTDtGH1HGt9hED8vg8eCQ26v1X41Te9r6ABRxaHDz5N",
  "key9": "3zZYvhJpv3EWhwQSGQ8jKW6WJdTfXq1jGc5Y8HoRj2LZ2tdF4vCdRPSn3SPYRSzXudYb97v7xDoaqLw3BoHwXUkJ",
  "key10": "BFQye9VE1wYXMSSyFmCPQB9mszrBo29UNRNhAY8sfSeYRuGiEE665RRPEcYJwR26c72LTh77EyNTEJi4QjNrc5G",
  "key11": "3gMszz4Hd65qGT8sJr8Fgdj6ifMZRdkCrsZ52BQUK5mrpif9Gz53KZHJXS9AnZ1niUZDUzFj7oEMkpKEqAEuH4uD",
  "key12": "679vDn81BBHSRiUi4UZuk78QxeJGTKL2R2axMeEmNyMNfb5k6P9UGoAHJMbwrWhE256Mo93s1H2gPwxoCiKesuAb",
  "key13": "2jJ3h6idU9u8Tjez4WSDhPc3jNWKoWXAwCgF1WSuzgsxqd3JKAi3Q3eAM94gdxqejeP1z34yCEVW8Hn6KFkekCsF",
  "key14": "4MaRzfLFZxMViS91ieLj8PN986AXCPzm5EkJ3V1Qb5YV45YiDWiqTksMC2ssyujBQ1yfFkk3X3mgdPuDqzPoxj3K",
  "key15": "4svViszxhdLf4CqcnQMK8TjqFpDPsgQSmVzXrCQxSxrBxmFCkVABsMt1nxEZcUpV8raCiKBhNqvymWHjJ8d2Dw4J",
  "key16": "3udhebwmajWEL9TFK7NtbQoLRZDaYCWq1NfPEqVDpidqhfJod2RRMUFgDahEGVyXWF8NEiFM4hHKhSqnbymM8qpE",
  "key17": "5he8cKvomAQabS2xrvovEXHtadQxo2RwecNgwiZyZN3m8gHdSjPb14LWM53UR2VbfSmYi92R9soXwZpkBKc5LNkK",
  "key18": "z3E4BCrGSBr4i5Jkkx7DvrK7HgGMd62qWsDjtkTkxwyQWj3txmePa3DxQSNFzwWwCojCC6HC1ky4c5Ejb4NPNRH",
  "key19": "5LgBoURXycam3mYcYBB4LX9BZVQFwAvdmmPoExPZRUhCgfidduBwJYh5MREaLMVfuikPS1GWm7e5jDRuDK7s3hqM",
  "key20": "3qDjBMckRivinvQ2xTUDbHQ7arMYSZTAyB85V5sxyPJixLdJAyMFL1EBWhdb1X7oHVe2vrtEUGmLH6E4NRC1MJG2",
  "key21": "2S6aaJiGGEEqVdxobzGRjTykRKcsfRoYz4ejxnvs9NhmmbhdG8DzHVWW7Ks4o9QhSwz49kXeqcHPSBtBVcu7qinC",
  "key22": "5nXcYMT4zjLViVPGtmGjmmukc6f81HqqLNyP3xCd9rD3cGfn2LDRXe5sBMjYCh3NDroYXupobr5ELLt9JJMUXjgB",
  "key23": "39MrSwQVVoBokTok9fMMNrifEfo4rjHiQJyn9ksXEPB85e2KBxuDjFnQ4ZjBoKWMBmJryoVdksudGZTP2zZpzgNB",
  "key24": "5mwVocym4JB46A5Lu7HYRpNKXdijywsJHY5oJGwFwYLxPKgGP4PeA5FwVxram3SrztfyzPjrsp2fkXVL1QU2ij5g",
  "key25": "35UthhmWxbWeHiJt24UHsYKzGdqWYhqbGJRagWzp3AYAfLr7zRY4a6uWnZEu6onqDxKCZ5XTXhcBvW1bkZKomZgN",
  "key26": "263MD3DhwaCkfrU6SeYHpgCyWxczW2ywg4JFsXp71D5LcBrceJ3Avrv4TR1GUYyTYtpimSud2LebSWPajrAaRS8z",
  "key27": "3xiMyCsnWzFLFKirrm4Ez4YzoQkV5NeLW795yay9tz88hYUEqYnzjpp7mtbr1vX3ocUGy9vUy6JB7B3tfKzfopjy",
  "key28": "2ar46Fksdkfky4vzoXLC1F2wYvSDY4bh4sSk5BMr6i6ARY62pyHFWVEWscohMTPtFLRVwaFuAb2Jeg2bkvbmDuSv",
  "key29": "2EiCU2wtf7uk2xHQ7NbyCr2SUFF7Q7ZuQfTji5Cxq2cS8cztuitYwr3ZvW7jcUxhBsqjTCvj1SPSHDhRkBpLjt13",
  "key30": "2BHUumkSVC5hjbQiakuDxkDJ2u3b6mi7EYLN1mbmMFru84hBwxS6yD6eHMo6M8YdsPTFNJ2xRHaiBM3pSFkKhx31",
  "key31": "457qxZYngBqUmctfUWCgWQJvj1ZE5dkWoJdE8Sje5drdK1Ci5cVn5uEw8cXnWYJvqtqTxi398tbtaG4m8pssUtRr",
  "key32": "48FkY2ziwedWtiex7U5UWYHtpNLeEP7JeNWJT8QvpmKRzbsyt71jJKFQrcQu77tEN6pw8mJ6Px7G8uU9BJMx3XsL",
  "key33": "5GUFRwtwFhibtup2QCgjx4MvPYiwvq8sFuXZiDS7DNeB945QGyghpF2dbsAAXmuMdyK7jXWYZHn7i9HuRocUBcvx",
  "key34": "2KkhYVosH2Um4y2XfA5HP1DRJkHJjFaWc91XqxuwpkekkCPMxgKDB5HuhSoRgbZ1g6Bnfm7HM7AEeJNShzWYUn8C",
  "key35": "2FiW7bKS7TRsZ8kUVmKCQ2cWGwcccBJp2B4UErKW5f63MqLxjuGgDntrdKwjhgHLG1rkUdoiYfjfX6NMuZjBQroM",
  "key36": "2QVEZK4zytmsZZxNrXjc2wyAW73KGCsVyL1gTU1PgDbULZxsynyDuqBV9aHCXv6e1RZqwTzYoSaeFgXmCDF8vgLB",
  "key37": "2M3BkCK9y1VMoueg4qs5SM24d3EW1hZg8FTds1aHuxCdwEyJi6d5MXpUfm2oqr8HoZZr3yLRqmhNsD7SVyqYk4mn",
  "key38": "5YwhPw3EMDszPrQsAqD8JpiyHhGBFJezkpuy1tdsjBQigD5awd9uGNUwQneRPnirjVhcuTLMyvUeuMmDFXaNz2G",
  "key39": "4m5BwJRZAfqtNw99m9vjbYrp1iqWGnGwfUjgUMBep41jvh54YEWVZfAQeKKcMKjpoz8ioyE1UN7DdMrTZtLPkx1X"
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
