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
    "2hkxsNRBuiAfFvhFvfwAK5WLcWYCzchmxYyTHDKFxYULNRWDwd6PCa6P9YsHaKJoASoHfPu5vFrtrpjb4p9UkMFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uFtHRBRoQzWAW9f4n21AAd9jJoPgc5irE4tRWfP2bDhcr2hfJKNZMwYxnMCXDeaYAywhLMvyfnrtSUeBda5tE1S",
  "key1": "52k2XF2CrDm4Y3RkfBhgXU2RQcikQt64DXFXzSQ8CamkW4r2fYwN9kEgBmge3Ma9VWdPA8Ex6ZLxkFfBMoZ7zbQz",
  "key2": "3vVeQWQmM7bk5qYzXpwAUkgXMFPBJVHRMfKqmo84iYHQJgbv6s4GugMz6MQuQQzBVAUB19cdXxdLBxeYYXj8bb5W",
  "key3": "3pgsfTSYpHaKr7wHTuo2HYGatpzeLtpqV1dMJKD626ipFwgE4tvSANQfrTZkmAaDvLSM4D7EeWpC2UBK6Qmsoaq",
  "key4": "NmqseERt7yss3xqh4J5RAHV5dSc7Cv248gkU8QNaGuwFcgDpK9iJBvmWf1ZapxMNUKBSJmLcLvFTvc2onaGkhyT",
  "key5": "5BcPjR1iH3xyyQTkmgVcs6tZvTCNwwA68BLRwRjUnnAgX7d2791HJ94AQUDbNyEwX6aio2rFawLRhTznYbdNqXSu",
  "key6": "2GBMbceZw1shUobVaHYpWYsNs67GJfhgDHP5iZ6idA7mhLDKSiYwHnC2CbGtkYsnmSzpJP1jr7SqNVhUUDznzm55",
  "key7": "3dfekBNELcEG5iJ5o6zbZhcnZWzph5dgZbfXsWU8AD977ieTFA1TGoNKSppVKfqvw2Ne1bgjgdFNRUDHhx9h1AaX",
  "key8": "3tz463C8rpYZWj42JZkqK8enEeBUM71UwNzuAbEgLkpxFemGmFXu64aLmemS4PSQiz6KFVg1s4HPmQSTgqdroCMC",
  "key9": "3Be9nxFdwWudwiSydn2iPgvofeEpsTsVYh3qom9VTdRq9yzrfibt4qMkhPTmxXnizSFB5D4zzRCiYL6RpzWCfwZk",
  "key10": "2rNRK9iWMHQkwVJv3TDjZPBrGQ2zPLoURqzJdFN9ydWzRCZ16EW1A391nCAbjU19fUCgHg1Me24rovULbkmBWNE4",
  "key11": "4G9ayrsdc4oZ7UKRCM5K8W3z74JucZaVSaZeRcVegNbCoh7JAz6xzFi61C7oxVxQAzJfqFoJ3oaRtgT6cwXgrXzQ",
  "key12": "4nVheMT3tkvksXpxx6QpQ2CVxL5ZCZZSPiEY8ZS5wH1qiRetoGgtdQiVkuP9U211BWqoUP6DQVDChfTgULknsZ3N",
  "key13": "4My9P5RLhhAmuWdh11jL1qim7Yd1mPevynqxGpYSAza4Xm5HBngK2N3F2jEKAgBt9shd4FY5G7iSyY4WaSTngRBi",
  "key14": "2cVy46LK1CViBT77kEDzCY2jH7E13XdVmaep9QEpjgULamnuFHBCZiSeC5RyR5rjy9cWvfC8CAeb3JSM5kfacJM7",
  "key15": "uJQUnqjYveXUgnwruHz7hQmCg8SstwsSwfNQP4Lv2A36RFxqFzAaqWvAXuFRQ48Fes9BSFCucsEymP33K2LpRkG",
  "key16": "YoYdMqibSM2Zx4ppBvcy43ZD1jjUWMri1j9vmAgDSjxUNeuEDLQG95XQXDb5UguiLsn9a9SEbZxrZAZ2krBNXXs",
  "key17": "34ouBFNFowRS4ecyJgignb844cdf7w4wF4jvBxyHPXhK7TSe6RCuHPYDHpmGPkw4y499ZCWXfW4NpBv6pmhnR92z",
  "key18": "4JJHWWktLADaKemZPJJXnPmXWsHjHs2DbVzNi2DJADGiYBfY2aPQXBv3eFQMqbp72qTRDYvLbGCtbWrD4pbhHcPA",
  "key19": "4UCusKndN8KBA9aNSan7jkqbr15cGh5TFAA9JxErDDdwCYuMSPXL9dVxQnD4SsykoF5QFtNgJtA55XA3FhJbdPiJ",
  "key20": "2FpKrTmtq7sssw4TK2vGGzMXf5C3RyjLUQABj7pVeLox61MzB9zarXKorxRqAdByLdWtMPbP9Eh9HK3AbhuepZVd",
  "key21": "4ABPnyNmhGj1teorFueuh27Y4QbwUdtY6Dy948iGeMiSyxrbu5LM5nKH9mniuJJG1UxbfEsiDEwMYTh3EdNDDh8m",
  "key22": "5GG2PjRDe1XcvGVjxLd4RymP1LdEzfKeuuNwUF44d9X1opexxJ37W4cffA1VHEBaHKSqwF8zSM8zai5hRm6XUX3S",
  "key23": "4zu6hvQUfqzLwuJrGgrsoqKfvY7aHm4BZpfiHsnjMwLbbDTTse26eCrAMuF9GjvuB1LHwrbHGgNYx5cNuWQAnh43",
  "key24": "5BjBn1AWawEuwtNxTZvvLmNpYcu5Gf2gFNS2v5nk355C28oZs5BMCacN3U8phxrcbN39t8Uwb7pGCt7Hukg1iZYS",
  "key25": "2BtXFAZbfGJjoXqiMppnKHGmyAVwgpMWBmm8UJLQk4HMP9C5AGyQ9p727bqZ2q7HxYHWVWQsVQaxhYHk7JBgGNry",
  "key26": "4ceJJWRwHeyHeeeXBbNWRw3cQnv3J6z89vtf1HeYUj63TkgET2bpvBddaXdjstPJD4s6TvgA3pv2qn94i1YuPqYh",
  "key27": "4CJHHSr1C72GoCPGtw9VQFk27K3Bm4MBb6ArQjvzwsyupdnva1BqqBpZbvZjHD6HJdfzznHgTtwnqwdpexZVc9bT",
  "key28": "5PNL3nPzGEA1vKskTU5EamPFz7S2HnmzdZhQsXjZA3yQXZJuQ2pUDbvtdyBS9VUpQEVkf821QjFKpkvYLHwhRebP",
  "key29": "HLyN4UmUupvwUQgExY4hUgT9CVETD6REmvtYNz3iGJUR9BrXSCHR65AJ53ppdVPHkJ2F5auXGh8xcTVEzJpuXWM",
  "key30": "JXxRTHuFH9Jzd79VxrKpr5kpTQza3zJEKPG5ezABwrjH1XhmYXTLce5ibgXt1Gs1oQy9VW3f5R4bFmeZ8JSHdUj",
  "key31": "5f8yUmfyQhrH2KhUxRJ6Lnk99RzLBV7GsVaE1c6onWf5ci2nNJWMQaCYkVBYd5YzqrT17hTUdPP65s6Zgo6KhWsS",
  "key32": "2JqZXcKz8MAL51bvgHQSeYysTvtv4npEihXojPv9tkozAnNCyDRybho72Py4P1jXWsMTm7P5DixcEDJFy5ei5KY7",
  "key33": "3uRsP2FJdreyj2NAJR74YSsAB3gGcpYhcxnFmrMY797JuR6kVGZfU7wynUGjMhcSZP6ZX9JwmqBuYDRHzeJSfMLn",
  "key34": "qfdpicSEJo2hWoCKRmDUysTvRW5qXfotJytKZkyheKPVFvfZuVGn48B5hmjzBDsjrLwTqkrTQGbehCQGJBdPZ6s",
  "key35": "2qrjUo4WY5nVDF41UKe1dgJQccQwmKnDXuoXjV5FbsHasWREoPkkhKP86GY23eeEvtMDxbL3oGpu3rB4UVNcxVuz",
  "key36": "2CCrbGgUh2CyGGr1v2hVMgqL6QXYDsUAktiWAMmeiqpSjBBXHcZeRP2nj9LfRb4ama7EK7LMVrm2vnKoxFwzfozC",
  "key37": "3TShYerTzzFgCao16ugF736wPv9WvpVm6pbASWq1mGvQYu9mYYy8p64snR3vELWkNDJyCGX26dQE5wkDmnQnnEmV",
  "key38": "2TATL38yZvGMZFuKPuBWRX6xegyYxhUqhj6JgqKabNk4fp6aTwvVjfQzLPV9xopUrp6JC6NP987MfHBUTyk6SjiL",
  "key39": "2mFho3Ao2ZTsRtvNXvExns5nP3xZpRqtgCn4K29RJyWnvoucRQBGkmfr5gVXyb9qF1Gabvb8TwFpwy5qcMFfQzsu",
  "key40": "3tGvYXHS5AVA54kvprT52u9W2ThinGWEat9p3sPv4uoKvNVRS5VzU12wxU3L7B27CtzQhQzknNQAt9W2FCpCCcTp",
  "key41": "2pParbM14pSeKrqsHrXTv9UQXH8f96UhjJ4uDWZ6j3UD8o1ezBWe355vjYW65yH8FeEXeFWmKmCPzwNZ8bTU5Q64",
  "key42": "4ZzCqKFsTcocDYHFthckKqqx9mhaXe3pKZhkSBpk1mCWpuEzbshjhMAAhruPBcFp8RpkUen8XtAdu3RbUvHPUiLS",
  "key43": "5Q8MqW5AjEn8UEstAgeRBRNcei7p4ECQdEg9uN4FyAPvqPsCWravuNY9Ztit4aSc7FBjCqVxAF6Ljh9KHEPM6agj",
  "key44": "3hzbn37c1GjnoUwtxycvrFwXMhrnp4JhfyRrtVQUNisUx6Gp8YLvMHfY7P6amhCR22fSAUs24WjmrEbLYi8kQhrU",
  "key45": "5rFn1SR8maoLi1UieFggwanJGwjwcuUehTjPBk71FVchNNQYQ1LJRNeyZcF89dE66GyoSEaeMgaM3Mx1LeNGJoyC",
  "key46": "3MS7cKsZgvESioMNPbYVGbQ5AmLZiD3bdf42jAtzgsVHn25kxurWank4yzi8vfmtooKp7SmKR9QEtz9kASNp1wgV",
  "key47": "35v5nWgngiGbf6HESNzne6Y26cosBdk8kbAUZYK2L1YDUZDeeufdSUSbwRXx2noAPwaEgkr1yL9rXEE6bA2948Zt",
  "key48": "4B1xHfA1XuJMGXfj8b295fMsCAVnc6uTBGPn9caNkyGDfPhv7tz9q18iBkjX9uumgdU7S3Z1JGixMPk9ydo7WKXj",
  "key49": "66vtygaGVbhD3SAr6nUkySEGg82YcLNCYZUrknLykmNF2XmWiqVdvnak4UQZU4rkgc8SuABw9aoWYPQaCG3aSbAm"
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
