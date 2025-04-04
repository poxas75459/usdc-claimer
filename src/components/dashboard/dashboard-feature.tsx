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
    "2vctTjXhoXFmGQEhFX2czgyciW2DfEy72Kg6GSNyGEjRJbGJtvdKxTLVWqcupGyA9kdPeMwQLCujLYyxAbtmZUXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gnAwxaRyixCn7Lm8nSqLo7iUqMPcQMEHeguZS4Ueeoh6fUzDPCeXTyCbWeiSXv6gCG5QKq2JoUuAsivrCu2T9gQ",
  "key1": "5GoRdtkcBTjuDFS7pBQ5VEn7BhqfFKrMDZU7Jv6HDn4ZRrEsXtpmEFLjxPcGEdFP9CLAKsoYKW2TXaoLXxWB1d8s",
  "key2": "3JKyY1ia4eMJgHkdkCrR5wfx6NukV8TS2pNGwwUYauETB8VxZcZ23F8vAovqcDv2mUMCRptKZp7t8BhSkT1QUUHc",
  "key3": "5DqSeFCi6krN389sCpRwp3DyvSYUJvsTRh4kwGfzmtfzx1gynRAR1nz95YSUKzN3tFxC4HZn2bT2qufo2bRAwKQY",
  "key4": "59MFu2RQpmrpvo5SG9WGis9uUSaZvW2BUXw2twoYRTqFGcxWfmwsqXnDFFVTXmnhqFo72uUuaAuT3BVDRahmD6ex",
  "key5": "tHUnsm8DPxELqRp9pfUKer586uBvvFpopUgkycQ1jeup2pmfpEUe6tMf9rZVntpjQpwUXhe1bHKNFfygSzTsxSu",
  "key6": "3mcgrJFAAXcG5HnyFhLAyfaPfCPHefZ7FXBVGP7R83aQsjwzAXUi5SfEcDsQ5MXSa7DeoKvSWxpY1mfmeu9RUSS3",
  "key7": "2MHFMKjA1Azp81bz437yKR6dXDsm9ojFzDTtrX1nrqVP69J5U3MeHNRU8c6CbHMzUJ2iHd1u7faLAKvwzkPoFayC",
  "key8": "2uokspyFepeAfo5YQrbFVV3sTBv1H1kKRvb4ZbQ84xZmwtNDjiXUmDQYZYRREfNRFYx16byr4h23sTVoNvHKaNLE",
  "key9": "3aBVb6LJAD6Bo5KZJ6xyM6DefinBNiKEC8WNofJKZ4yQtx2sy9RUDsYW7h9kGf1i2mXrPPAkyikypPNC2rzf1XUC",
  "key10": "4WbNQJDNJgbZCXWAYaKMHj4Ebu3gptkZfyiURidjBdC1ygmLZrew9RXrBvYE1mFDUkr3axhzaFD4hZTpn1B8ThvL",
  "key11": "53WZaPw7Rmj712g8K9NHLU9xTQatRjMkSmdw4z3Rx7wicVVbuej4CfDpGFDUqxx6MVsFd6MTR454GJQoxuHMXxPW",
  "key12": "3wXcBzF3W7GEJbjKgbn1MYtzLKAPmg8uWRSiYJiJVgTwb9CvBvygfGcZYJozPJqjVKMNtJXp267ToDsfY6uCsnUJ",
  "key13": "48iMJqUzKSe8J4Rz42LTYwBhVcgw4w8PSYZrTp3jy6kAodcYKw6PTHTKLhobmSKVyDFHHTrcXthmyeRDmDeQubMN",
  "key14": "2dygguC5CAbEJ4VKgJhPcmLp81KcqvxnN9DMELbRuugaDZb4LoitBvGdD3BNvpt8bwK1vgmdnHrHbG15wDjVZB2S",
  "key15": "4qcvg6r61VJeuXZUHhEKZ7vi8N7UthtZpLy8YanSKZw5zT8V2WGa3ALRSRGn2xyb9aCoo3Y8bfQCUM4JsKyP52qN",
  "key16": "3SMFQHiT9UxnqB3y1XdsRrPdsJg9RbvFBjsFCWMYPtS4i3fyd5XTGpqm5mkx89XULpH7FQxvhEqZfH9D2Kwiq3zK",
  "key17": "athDheSniqtPKLGEqPtjoXFjXTVzH2dzmPXwcjrXsZ4ygwi7eXQk84jgK1udPM33NGV9mm9ythnT56a2tU5Jks6",
  "key18": "4jrbyjv1dsEuZ9s1ZeBLASHyKGPR4TSDjGzTjW5mLQfMFJ9eT7tNkJ1Mtj8PSwvBhr9rykVHYtBaFAS2Uk72kv4P",
  "key19": "5iRHutAhCHMKaoL1c5xwDJWfm9UejNChgXUh47aZLErgrMB7BUH6rX7LPdwW471rwrAm3rzUPosErxNGiitwd2Pt",
  "key20": "22XJ4J3AAd6mcYGnntZ5nBBxrhT2EnDShQgCAh36xFkwTXkJCtKUktVS6xpG3pyp3tbupEU56pqdYxCZHR7E7rKW",
  "key21": "5GcYwwsobjCv3N6j4dxLMdC86kLDWfApfUTRWccb3ebbocvoh2LYmTGZANFsCtBBjqnWr1bhkVsTbNNPQ3uwAxpr",
  "key22": "4nCUwVp6xhZjBWow8KRABXu7pghrwD3VW6TQ9tstji1p5wrw92mLBTHtAyu92Mvi5jFR9N21rGxzjtKLdNsxqeMG",
  "key23": "LwhSXEPiurvLHDbnrP6W5PxGmrXvcpmpyY1fBdu6DcGEy3gDNWTX1j64ime5BTTze8BUJfyLnkta1cxLq3oDTjt",
  "key24": "4npkWmxDn1XVhutJBQFiJjeExp1sBMBEfEYzgnQVNseEAYDkL7k4qXefwDLsiKJaeZ2GeZf6j3RsjEbyFRYNUV87",
  "key25": "633XehJgahcP8Deh1ycWojChjdrbxgKj1DrwzVx6TLyjrLW6hxmDptvHyjUFqNMzqVAZUPk4rKDhGeroeCHifCCS",
  "key26": "54QXGdGfn2JMukBzzFVgb78FN8AzZXwbn9F8cZ3WwfMnD1a2pjKchyJUdyixD5sQ86ZSubZxWxt6q7t7FYrJqWdR",
  "key27": "WAm5JNn9hbq2uE7LEEW7XWfEg74HW9fHF4hLypLksWQRYKRJparKvJHzYTLw45yQtZEFK6aAHDF1bEqy3hrvm2U",
  "key28": "5VvuZfW2ArhcgStGmvfqbosjTukdfH9dGXEPBgKr5pZcuyoww9U5gczzPFfGELwkHAHLQqoPd153BWhdB79t1vXp",
  "key29": "4XjgDTrgrwKtocaNUDURNovufpcVUBnZwNt5RFajiuKZcdTupGr1i3Ngip2sxHwQS4BNabzFqM6MTv5ub1TwwwFD",
  "key30": "fKWB7UvoYbNVCmETNTuTRna1CZunsVBhTsW5tpmBeDSXNSFVy6Wjj4UZRrfhvWVfc5Uu9cunYHpoeeU4hftVu21",
  "key31": "CzcKxXmm8cPkfboR6B7dJStG43EB5QgqZ6gktpHGd5rc7WBavUzHbQtzNT8siXXcr1nAH6aKtY76KRJ5wUiY62P",
  "key32": "2g1tuq8mEhx4MZHnHcmQyNkFpGEynUMQZ2qGwp7dHf4Zruc1tCF6EBxQLVRkCYfWuWY5oR2JFCTWEvzTAbpg1Nij",
  "key33": "5B7RuetZGZU2THJWmjn1TcdhNpJ9WKsbKQhxRxhoPDovCvUoEnrRrf3CzHagfN8RVVcwY4M19Aps243uXBNNjLRd",
  "key34": "4381PU1Z9KzmCMpptpACeD2fWnhVgR6q4kq8ZoayY3vqxdaVZUojkmndaJd3qJFaZwMN5SoEoG2ZSWWjDeKhP2i5",
  "key35": "3diK6R1CUGr2UiXbDr1esdArAdJMjmuA4QruqyzgQeG7eYFdZSLXxSs3dgifqiLoZt4GBUG2vAWaX46ppadcDo1r",
  "key36": "4yDTo51bE4VoBngr3wfNg8ASM1q5c4LUXroJzrME7dYR7UKemBxnaMNKqeMKmVDYMdhqwCPDNpJLjTubuYYNaRaV",
  "key37": "5gLKqLcStrXZevwLr17poKanYDscgP7kntwESo26WcoRT3KC3LiBjtF86pnETUrHEsqdexPKDZtEznrz2gTBCA8a",
  "key38": "493QMi5y4coUEnDPMsFJCLoZHnw2d5GCRnU7jWuNZTtEWvoU3Ru1HPPbCDgVvD4RJBPRCyeqrqKMNojCcTJG9Fg1",
  "key39": "4XRo7hyuDZipzfsJng4Cd2cARHsCVr1sAYBDbBfCsfEDyP53ueytevqtd6NAqE7JMkchiK58RNU4AiofCPL6JdSR",
  "key40": "453HUy9xXfTechN5AiQzJreSkvrpwPpDtz74azYskE31uVvTJKy8eKKV6nqNG4ChPN3LeZeyNqMxhifeeLBCyMmz",
  "key41": "2vzXk7ahwR3drx9EKLzLvwX7vmnQLKLTgzdxPrHh3stCGTtaDRVuX4QipLLsyC6Besd27YvjmmQ3gJr1Si8Mgn9g",
  "key42": "2urb1mLNyAmVGouvs1apdhwwTwA6HpwjDgkYKEx17YJK3KUWtFd43XYLNE7yYAaA7RwsAfq1SvxvufKHFQLT1VW7"
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
