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
    "2HdWogw9bCpb7UZQqC7MBorCb1QBxL78BEzzkUnyk72yoDjVNPfL7EtkPHpdneNHEPVvXcjJrsAofGjgmK49AsHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UU4SrxJYE5ZabrPvbmx2CJy5r9E2MHrhQHeza2BodxsLBVnQidQg6uybo8HSPYZSW6PhDS7N9x9DRT3DWbtv67n",
  "key1": "BNwCFGsNfHske6JNYhKbtacb1m3AWE7cpRF55rz45Cy8LM1nwfmELVFFb3EyAKsgJ7vHaNdhda9NtyNMCzqtCgP",
  "key2": "3ZykZ7NSCtEnypRRGvEewf1XjAp91C3iEJt9mKk6qwyYhcx32mbZWzxiE3eyJg9EH9Z7UDH9uMoRwL6SauTr45LC",
  "key3": "TjeahNKJzdUZuP7L4ekLUBmychXJKTW4KXHBeqRp2Gci1GGVM5YaUgb1mDp4NLvCUAbo8rTJSFhqcDNU4WRprmT",
  "key4": "3PEHyEGwYMFMYs2fSbpNbTz6epGcMGtCpXZcDgbQ37L9tgSZN1KEQamiU1iC3ah4UC9U57CLV8Q8HwMytSYWNnvF",
  "key5": "348RE7MjMvfSRPxdUaPHWGguiHQ6HJpZLPmo17pGYmhqeUjcz2tykhE7QSK19meod6CFx8bkbD1nfQWo65JADxxo",
  "key6": "4SA74DDWYb4XbP6Uhy4GyzJWSf4tAfbsv7th3DrWryYhzew8UiPZLJdsJkpPANHcL4p6rTHRqVFfM6B4Jsh8r24R",
  "key7": "32izpo2prREQmDrFJrhu1pX2K89RGJw1sT7gotTYCsPNXt1uvViyKhGYfLfzA8EbSkPejvfuCSKfkAYWYKFvkqfe",
  "key8": "2jNgHhZ71pcHrijanM7JiygivXjcWfmsoEdYx5ncRV4mwCUZ9UWNDdNoDQLRLbPRVzwos4baieU2FeE2zApK1Kmg",
  "key9": "3Y9PdREZEB3kLcU2YUqVEFH5ViTNJmqa7DuXscZH1dBfRrp9HpNnQkCd88j8zWJZWLx3VECJnXH26RrmRY64tmgJ",
  "key10": "5Fq81oqH13Lj3H6fBsZDtRpRfz7K2a5Tg8m8ZBVr2KYnhXyfPy789nBqGkxLMtfcYR29LyxUS8FTywpcX3JKw9tQ",
  "key11": "ojPdCf6zPRZewM8hsrzxLsnR1XTagXmLbQPdGeniiXTmXr8YbmP6zv9q8DqTLHo5DY8GBQZ3rUVjrW7Wy6JUXyP",
  "key12": "43z7gc27vkzK3Ls1y7tkcPfhuk4P6zeDzj1vHz6MGH7pzoByefHEs8ptttSWqNTKFG4hZYDyrqaDapnK5MDm3pdn",
  "key13": "2wrWvddgZHz6EngVBoAnyXw8vesV58rGZLoofdmu1eqWKckeESPWzScot1wZS1NgjCLWBy1RcXropJtYXKSwS3KT",
  "key14": "34qNzpJp2RGKb2jyG3qQjeFe8hEMNCKgDxi3TBftRDvgwGan3gZXJuPSnGefK4jq9HrJAFTVtEAdiS6DV6NmEkaP",
  "key15": "J9iZa3evijndJcq8UtthYbSMggmht3Hi6V9vZxmPeegvrLkwcR9pFueJG863mucQoXjSZuoHBAWZAatGcwb91f8",
  "key16": "33HcQQ2nEMxHE8cUzoArYC7FoRHMHsUWpHNDA94AaUBmdceoMeJoJg2yoYKuRBYNPquVzyCX1nMgnfDWN4mtE6L3",
  "key17": "2JNqQPwZnzaN9Xm8h3YqV2S4XhB28NPiB1JWmiH37AngwU2Sag7ZU28rSvGk9mmG7QjeF2eb5rWs34G4MD5WvAYV",
  "key18": "3XkcphATBycdhm2Xc4HyvJkMoAunF3rrvRFr1p1w3Ff2qWSyacWUFXdvtiYwqwa7PTTCrAHb6SUWJzGYQMrhkVrp",
  "key19": "3sJejSq5NeEobsvsuiZwmPb3QAa26h9FyoSMGzPtG3sAAYuPYmbYjyc3HFnsq7gmt48sofBcMMCKEdpB1MarFRxj",
  "key20": "Rk1BxArpWkeKe5HE1p1BvyCk3fgp1YcFnjDSHNzdrRHENwcDZ5Zs1jUZfJ4tfUqjYZ4w8bTHr4X49uCuinyyp59",
  "key21": "5sNsJVYRtzZAG9mKegZqzKqTAbHGpX25Kmy8zfDEvRgPQKtDFAkFB2KA1CZYiP4p2YzHNidEobFZUu32QkpUDXaj",
  "key22": "4CC6c68AeSfiGsf8YUSXXjike4YfxXy3LS9xC8Xn9d8xqR87xJ2oaCvDhkCc7HUXTJkcMbeidGxjREtbpPMt2gNp",
  "key23": "5yQboPVBB6b42A9dFZ8BZD8adQGfJBXk2VWzzjHAHUGbLpb6jrpHdiFxnsSodwUA36f7eKEfvVnXzYGfbCjFNipG",
  "key24": "rhqXSnBd3V9YZyzXUo5fpPHc2ecYwjTXzcqqyHMSDwPWzn6saKZjouasmdGyqUhQHYdyWo3hJuWPrwfS3CAyoyi",
  "key25": "5HCJgdnkFrMV4YJ3d6jRkkD1wbmMBJBsjtvRGdRUEQAKFiukmH5b74AG3wRUjhJH1WfNapPXGk6jQ1G4qnaVXy1U",
  "key26": "281bDYzkVe4BM5FxMkZqSkQM3VKLb97P38NTjvUdo6qJ6fH5Wvi1SU6cfFhkMUNDwrdfJ4niNnFh9QNXj1ue2XKR",
  "key27": "2U2war8Qs9S9gRm2QHy6gLPvoyn4rmNM6m8MrfhoFKmmoXTtjcyhmsQxU5t862UYtoBwHxibAyNDycfbPK7isSnb",
  "key28": "5Lp6PbqZHqWdVHBJdmpktK77VCNQQKXMMT38rkTYmzJVnWnKZG7HYvjs1PoUKiq1uG7S1UYmJSU5CPmJFyi6uTvy",
  "key29": "3ZMAnouQBvMcrVWB8cUoLgiJrTg8Bw66Cd8ybQEhRPm6reW2jT5SEpD7qRhZPjtcVgtRzPYG2fPmxvw78WEJKJoo",
  "key30": "e5L25AMHEyYabaGdPK6mjjECYaP7squx8i77cA2iSKNjDGWM4cesChwbS1CZz29kAaLrkGiGhJ86Y6sD4VuSSVA",
  "key31": "3SgV3wX1W9PUphDknsYEGh7AUXUR6q3Ha7JnsHTf3DuAsimMESht5MKkcdY8idPM6pfQemKgqwT7YQTa57RzBFex",
  "key32": "3iLF3f84xyFVhCwxi2iPboVu6JQ9bQ7UcLSU1Yc4SyZy75zan9Hh2PKnEK9KJVRp6ZhXoMLqxra6ynrmGHs6xcg6",
  "key33": "tp58HcmqZnCL7P9Z9sbqbN3KuGqmcwo6WPKPWScQYndFsrP3VSS1jiLrbar1W2vNsysyERuoQkrk645ERwqYN4v",
  "key34": "EZzHgsnBGb8QqUbuc2eaxSDjaSGcFXXvDRBPpRy9X874eAXgxxeVGAf1fuF1gJfqR8c1yvunyBgqt3em4kbtgzU",
  "key35": "2EgbP22NnXCxYNUBE8eom5K6WbHCSCcfP2neAZJRWqgThRTb7EfAKNc71xtqur9FrPRr9BwoycWfcivYuDZGcz66",
  "key36": "3e7So9hfZF6hn6EQaJpmJHA2JApfU7Dr1YedQ83YMkWZrje9rC9pzdxGsuwt2KGmGNt7FrGy6KSbe3pWV992BReg",
  "key37": "2J4nvQQse8AEPmv1uQY8DTNkn1fSSDGQHCBnrP8cu6uWQc7Z3Sof7yW4YgAjP9o18wDF2JPJXtkMkg6LyHYPXLMn",
  "key38": "3zFNirT3n6rj5qh5rkz9uNUYtieMjMtq6WVrFCiPW8z2CP1ur4JAJkvnMA2bqXAivD9N2Yx5fbSkvXiT1FQwk2zk",
  "key39": "2VFDs2BdfJUqxEy2Ry7Hnv641JG4L3ananCGSadPdt2s3jj62PAiM3Kx1bUWczdeaqVqCC1QMgwxJanb2NjQP98q",
  "key40": "4WtWhbh2oP4Efv5kFsCcQRg6tBgEbeAFaDPQpukejtCycJSmYW7jG3UN7qGkQYvmbDYf8Kkoh7XymkbBg4VmY1ua",
  "key41": "4KrP7V6T5Bma2oP2A662xDxmkPdqEWxXtuxqN4mMcKUXeuwvPrFKScYeDpjtiEsE3aCcT2evePyB9odjmpf41eUT",
  "key42": "3vhWg2i47baDotb2NjmeR2Cp5GFCUBaaEPPYWunHFUNHKbhJspfQ4aXyvVhLpzFpVYfbk7XBuxiYgMu2xww89rJA"
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
