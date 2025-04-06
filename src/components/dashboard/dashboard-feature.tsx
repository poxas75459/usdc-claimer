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
    "3M8AdUJbeQyMrZWjsWYBxRyLwES46h5iy8aCENRhoc6k6PMYoaqwYB7hh422q7bZtHB67xMRakbx384eNBC8qNf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XpDZ8etN5ysJcdsPwsTmBZiyPaKPYszLrXST7tvsh9otukvqQSr5h4gHFDZTbEsrRJMWgTXcSSzpNnzU2UkAyZZ",
  "key1": "5u8jVigWmyv2uTa9txRSLET5kRmgiiSboAJbCSVimYFgGdGNqS7vXoU7P4nZqT2275ryVTjyHuCsYvnjhhzvf1gk",
  "key2": "5vQFUy2v4h34X2xPu2tSeTY5acK1VPs5P6uUNebGyro5hD9joc5242Ap1pTkds7UUa7rqdrzqGtQN8GH3NMmAe6w",
  "key3": "3Anx2bE6FtkZFFCJPqzFoHArtREV62aPPrevEQRF2ypCLtuo5ZEbnE2X35uYg5i5iigE2yix9v79MgBSWrscKAC",
  "key4": "4ifSqUp49hBDGgPxCwzW3hyqpCNSpr1NcL3XThW35ZEZ9vCwDqL64wtKfCxtkrkZDt6G91BPSxfqauGBZbXxM1Dr",
  "key5": "5GATLUEwsBh15cRF9qKVnuM83vmmdu1JVgBgWpefZ18nEYRkQMR2GCKcp8rSYNxkHaTEEr8faNjYnfehdVmTDQco",
  "key6": "3Pub225AHrzqctJZd8XmQEadWWkkzJ2SmDFCfHvNoanz2vK5UKrDqKKVvAiKBcJ2qXJz4D47GC4CXWzauBEEWoHC",
  "key7": "57SMTx58zrxDTcVcsktTRcYKZAtCAAH1Ph5ErdE4zogTvcJFyvoa5qEDzUetru6mHzdMkLvJQQ9HHchPWuHrR9rk",
  "key8": "4agwmvRJynpaCuwmHkD161jiFNCUkLJz3rvbyy4pi5tQMTG4N73cYsLmYtcVAipFpCjEvT6b7X88EaK8ra545rza",
  "key9": "2Kmh5vYg7meSj6BufC3qjgG4E86L2XMwU2FBVYP5V4bR5wBZGHRMYy7ERhJwXncpJLQUvWznhYzkM8taMMXKuo9t",
  "key10": "5pgvKcsA1uQVfAhGz6mBJ4oHXPrc5SzbfqiLz95wNrD8qvWbu6ddCUFdbj8EzmaWCfJuGcwJ2XBbWbQ83hGawhYp",
  "key11": "PPM9SKBs8wSwoBoep4Ga7Z4BsFxTvGFShBoJU5Lk1KJHVgsFyVsgM7wVgV5hT5APUGuwvcn6Lp6J5s2XzWpuZhP",
  "key12": "5KVqQhUcp5PgAuwWBaD7qaSmS7kWxmmJQtohFvvTFh8T8dGcF1RfMqJmnrqhNqoGMx85iiriH5rc6XbJ57k7Egoy",
  "key13": "jTSaC9d1wuP7BfMrjnzJAKxUtGcph17JjRT7DJE7eiFRXk2VnmuxF12zBLMfnMyz4eAZ3nzujV3LvqWMmXMwcd4",
  "key14": "5XErb3t7jaDujkYq6LFD9Q2Yje2VF8v7znqRt8KD6MfMdjzs26FL9FuD3akh6gni3omvfJ6j5hxsbX7bHwoHKjdV",
  "key15": "3U7UZ8JUwueyuJKakPpNxhh8HE6nXDmPAzMbRXZmY9nBuf3vyUgocVvCfGz5Mp7X7ox1pH8L49iZKp4VfC1xmJJB",
  "key16": "5vfp97NoM14syNv1pigg9qjnaDpUWKtSK4LiiEYUkpvbG8E4PpoSQo28rLnR25Y65UawEgPNiMptCC3UV4jWe3xq",
  "key17": "Y2X5KFPgVKeubtjpU8wTdVDucefUnt8451QokAv3cV1jYEZNFGNYDvqXJLLMa741yo36ofckrJxaUiF2siJ4QTo",
  "key18": "3nv5dxHe3bKURBVJ2NdyUAcW9knua579AT8oDkzYF4TS3momMLPXRmHPC9LueguWcok4qf4RyrRz9VAw8VbKucL4",
  "key19": "33rYmL2qUCJLDatcXG8F5p3zxwU26SziccGVxHsuQWosabE9gexxKxaXuCQ1wauWaZLTwpy6pUJzH9fimurVFmPG",
  "key20": "dTiDB7wLKArUKeDbirGuaXf9c7QZY1GmCzrpH3wqS4fCFpJ7uNvDdPAPshRVAgrdQ3JXX4HiGHz4FQLGFn7KN4h",
  "key21": "39SkSzgGCqMWXreZTJ7HNX9nQA7RvnRECy1WR2ck9udyX8HBiJ5DACHauWrdpWcHqAivwG4qWSDNH2JiSLHfCeih",
  "key22": "2TJUon4pBafmW6VA6WXU2JRSztjpKdQJ4gdWqdSieUGMrjUvTTQivbHk8bGGMtoCub1mzzjkt74AJh1tgdNB35N1",
  "key23": "2kPA3wgPxdtqUtwATSRCyrwhr95Sajgv8f15LV83wJeQDgMT33zH5WWSJ9N55KqYonE5npNQEebnRA5J8V21fLe9",
  "key24": "3Whx54tE1d2a248WyDfuY3qp1XoLHg6NzjPT54i66yeAa8rvex3jshsrHbKgN4QcbcNCWBiJK2wSS6FiTkuw5frg",
  "key25": "2pVUcSWqkBHYd7kWLRSeryDuLTUN44irtSoUtRF623DB6AyHoku7PwdVcdNypyFNG9CsxMV6STPc9ho3xHfT2Zvd",
  "key26": "4C8wEgMVGzMMGc6BsYfiHYpMZv8UsTyXXruCgpavgXDU37uTZNvkf1yTyKM644tbtYGG1WUTb4S9miHSZezUguSt",
  "key27": "2fvPm6kum3XRUodzSBMgEbGLKd1KUQcYfZywYXG53GeyYnWDSUReR16avjuPBXK8Qp2WZ6xDaZ51uQnMR6UMvZwz",
  "key28": "4AXxLbHBVePMfypDYUWGAXEywGA3hqhnacJuBaVQ7j8MKs7jtr5X8cdRgzentZ8dfs6EYVg8A5cZRMaYCEtQRLEr",
  "key29": "4sYfHyPG58eFk3HdhbBkxJbyvs6R2otiUkyvdtbmiL6P7aJREtETiYfw2DUy9eNDhR1ogLVqHoRB8griQD7TTQw6",
  "key30": "3Rk1Jt4pmNAL3brZJ7jRWRVEfpTUoepLHE6SD9JWN5ewSSDS5zHy9tUtzPAV8vhKpbnHXmidkadcwYfJuq9q71LP",
  "key31": "2mZv7WDuvam1W1MxwMd9RPepapUb9UeeSmPTGKE5eLdNaAF16qPjU6Pfbt9k9zASqJMFG2CRP9pYA8M6ihpM2rkn",
  "key32": "5jHg9s5Yj4NkScHfR6pvyMre1u81kayK5PgqJAZornedS4FSk2xAVu9sitj5An6kQ5E28rSkYGww7HRAcFhjqm8j",
  "key33": "4nSSyabxhWku9XJQByTx7vME2X9zyC5tz8wsjvGKUs7LRsSWwVzwQma6GYiq2ibBdqi7LJEw8k6wu3FWEwoouTYX",
  "key34": "4sMcET7jsp9TczJUboPeUKSBWcbjSKjJ8vqhRmVai6Kz8GXy3cZekTTMJYycympNZZLpQjK5xb5aGsc7tdxKGgXJ",
  "key35": "4HkyGqL16uMYXSXfZUnhW3oHCWSUA5gAEibyks4SffMV5cHeGZp8p1ijiDC6gpSnzJgT39hbvwzCeHgm8GhB9fs3",
  "key36": "2jRyibu25cEPoK8ddNfgEoYYAmTaf7Sy1ZYLdL4DH7moAfaHP9pwtXi9Vc7PBnQKHPYiC3eGCTwH4kp9kDtPi8h2",
  "key37": "28EJcL6549Wac5qEZ4gHtENtthdj3cYEGWa138A3PwbBDAjZYDKweRLbcjVfbfbvwiiohWxDBssAk2662oXZgrNA",
  "key38": "HqdSLKyd7mDQqkUDvwRGuXpwwZonFJsAQnoBjn1nMDvsyq7aTPoTyjXPdjXxyHtFonGxik6PEMRqFVSRA3FdGa7",
  "key39": "qXMvFqeqa6cShBWbf2ncAwUexKrv4xiGETuus3BrKhZkpsWfecPhfeqvUq8PwFo7Quk7b556UJ3JCDfQYQWQRsG",
  "key40": "38gT8pebdFxpigS328Upgt4Uh2WqSmPtskCwXqmXN7VD2Zms3xpF7brReduN7kQsJgCtDMW3T1pnp2Z4uTgnqKg5",
  "key41": "5FFfuDDNHiHS717UFGQptjkcBEiVQpyLYNe7ZgbqKU8h2eqrh1dpT525DmttWGgH1yqspmxj9D2Q78SbvjhDhmDx",
  "key42": "3p3vQKu6ipGPrQcfGGDB5H27oaBPosmYvUL2G4KaE28JJND5m7BfsZXvkrhLkxZhNgDe7nyHEbmHQvK5NRznqW6p",
  "key43": "3be7oR7HyXDEdqwfnW6KecFso2NEou547g5GUYTXCTmAjNF5Rg1Gsiu5xwdCeZh52HavLDxoVcprj2yWVbT8FHJ7",
  "key44": "5taXGYwc9wdMGcUSfcknScR4t7ypYWwAw2JtnUNdFaJeUDW2s3ujJtcyMHfG9kMr4ki3V7P4v9JJXGXkntbDZqkB",
  "key45": "5p99HYJPaxYvevx1VWDxvt1N99nQavGcnPfg8nr1q2KmC6R5H78PgXERA3gxAhpH2B7FRfovHVay1Ag1rqdwdm7h",
  "key46": "2a2Xta2cD31C6AyrSWsEhxTyszKwTbKJYoAx1dBWRNp5gvfa9Z9RNNcCkWD3w9HbUwuYnxC7Vp61fdhzrYPG5W2t",
  "key47": "57UEUj6svTcnMyx85WgLhsrjuNVFq9ZeepXQyE5HJho52wCcgA11aduyc17iFfJpzpUvYtPkwm3i1XDaYuupmGB1",
  "key48": "3GHMcd28hCz4nduVJCHaeATfj2zNQHzGwf13BEUSevYK392gMZrmtCiE7ktLDA1aaXhEjuXfd59J1McPcXt6tKZG"
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
