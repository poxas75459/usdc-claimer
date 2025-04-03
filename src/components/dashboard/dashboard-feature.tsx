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
    "4pYTaeB2FbAQhx1oarByfcsMT9zHHA5nRUV9bztn15fQpxDUNS1U1wRBBtNHDQ5AKcitLiwFbozsxzfUtPfBCkCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sLntd7aCP5SKwYjruwZvLYZf1jBC8Z16evqDBPghjQxuRpd53Z4ECFRhcSm6vzFbhbpWxTiosuauvKh8n1YNUdT",
  "key1": "2QMEpJZ9TAyijYbVZczFHebgBNNr4g39if4Er7bAir2EwoasERD91ndxYAbcA4erT6dFWmirpTSGwTwfpaDhpzB3",
  "key2": "3PYrAcsFyypQZ1a8p3eCqsmcwbkPeHyXmUpZEWxQuSGKzG1KbijUSWDCgttK6pLkJcchC1srJHiTyaMyywXoQM6v",
  "key3": "2hM7xBVpbo2jfThv1R1vy4R14Xdg5XgtRKAQBBDYGeEjYHqL71gJr9bi529nkP6Cs86QvkV9g5Ldq4YEmGGP2Ykz",
  "key4": "5vYPMFyqL81Trxm1NyXsY79KTxiCd3FBZ9PfpM6N7bfSLEwWxkayaXVdnoy6TeifXCHdC2t24JJXKEK8kdS8mqcs",
  "key5": "5sNVt6n5SLr1oJTPqtGBsMr9PfWWyhmik9y3qMvJr9UMYuVfnqQRjAqMW1JfGWLJaTN8GgfTnA2UNiDd1zW2A5SA",
  "key6": "2NW7KpJUTLDJGbAK4eHd34qvD4QzbqZMs8ZroWwBsf852nzp1J7g3eNkWAqiFqmKiuPHiVmnzLnqgpRFFoAjRpuQ",
  "key7": "59j97MK1Ep6jtHXUNGKbiZg82kFvfYQcBWR8cCFVVkzUtMm3ba8mePkJhxvEeU3zDi3tDprzcFibt5v5A2aLAf9x",
  "key8": "4bUzZeyCTNLZQ8CAW7nfW2kxL95iPsPukJjNkKGVGjjU39cjGYYdghF6DTdaSk9ow9cRKWYAhk7XxtJzaHFvHrvf",
  "key9": "og54TyncLJFGRScL4PjFYVKmg3pffec8TX4pxZawYG6Gmsg1dDzbnyks7be7JWyuB6k4Hqr8PvjBoB147fLwBcv",
  "key10": "43ZF31eUJqETxGKmWYeSTKsseKEEtJyGrx6Ux3qnMyU3CXhBMoPu2aUKwjEQiv94WxGg9PrKnP2B5CytCyrR3J7",
  "key11": "5uNxc4yQZpUgJcYSpLvAVVposJVUFntE9rFETuSVnWgSzezk8inBDwuefNGjSke8TWUcnX8JLZtJYnhyB88xPu98",
  "key12": "3GkdGyhStLvbMeBsJkkXCekfEYEkpx87gGFhJHTtSEVobirEavS1xALaP4xZ5F735cLp8RBVn89EgzNEbyhtTHKm",
  "key13": "3Gm8dNVESPE4JaUHwFx6hUakg2TP4DRbjH9eA7mm7kH7FV52MWEHnschrpS71eTkVmuk1fkRBY5negJoVRT2BQdE",
  "key14": "2AECbTWb8YJZuA7jfhQ3bu65q4AAc9DMFGfT8ETjUSBJiuSaJQCHD5q5TuyR6GhXaFhk7tteEAThYM6owHKv7KkM",
  "key15": "2Bj63afEpc6SKfjNeKdTj6wxA6hnKGJxhUzYkqjMtJsUi2FseArBZYk7zCJgzATeK6Aqsi3ZTF8qk1W2jPRaGFHc",
  "key16": "4doaNECYy7HWBDL1cUP64kj7MS6V3t1ie2hnrftQ56VNKgP55y475kRwzGPaJPxChnDRJ7R7dcSFUz25rGfgNkrA",
  "key17": "2ux7H1gq9sgdEpUHdvSa51Ff69hDyugyVDaAZhUZvHnNVBjoFpJ6DhopTaSghYVMDmLYykALrPFmJRkLsLWnkZYj",
  "key18": "4R6EFtURoq1MtKi7zT9X8tpH2BzrZrnvgUfYnReA1m5Rw9Kqpa2rDDjfLPwsSqGYV1kiXEhQWM1diVdjdRwMWK5t",
  "key19": "4z3nPzRFVbVY9cohvr1NgyYs227GL8uVUu4YZi16uinLrs1RxMuvFALoFbwyXeXkfJH1zwSuxSqCDfr6JU9brtQj",
  "key20": "34PsaMWW9pWgFhaG6xctUBkiWTViEYBdy8ghGrUPQQWhncfwbekZB4WFcMV46jMAkpNbkCmAFnjsxzM6YLHehgLy",
  "key21": "4P62EWAHSAWA5mY2CfnLCp51gKFmFGVW6htBAwQmVLepGy5qrZowewtsyPSzCz6iSjL6KofaLu9jWSj8BQFFx3o9",
  "key22": "5uMbzjRpBk6LfoKTMKUAUpFu2dVb6iFra8aofxxtqe5ZcrfwxeSM8RrUYmpKRL4jPuLMvteHuoj7FF6gFPvsk8HS",
  "key23": "3trKqYZ6ceHRLxTWUN86qJm3LoBXPvSxokMr17Y5eyfjhahh4YLBeHPWL1YdQihEgkjx39SR3KxToe2qwgR9VUwz",
  "key24": "33vJdfNggBiw4eTrCowpr14Wewej8cR8kBrXSr6XMop6paM3QPxxW7UY97Vmdpa4m53277xFnpGqbyW5s9cf1WY6",
  "key25": "5oqrHwbkmv9av5uGumTqF4gc9DK7wWgsPvfjvtLPrxRjjZVVar4fA11iPSpRmKPwBpfssaEymK9ifoyTQqJNYQJM",
  "key26": "5VXUiYyjEyeTiZmCTR6ceQfP5GHBgJzhqR6VAZHgsbrBKPWXUmUK69JYh5FzL7wQ3ZmWJ1R1tC9puMYWx7ZhzCbL",
  "key27": "36CrEHWWs3FWFnLEPJdsQM52dr9ZS8zVypSCkfnruozTXwGeWY2GKCxWm4LWSESPgMUX9bu5CxarsmgjFysVdynP",
  "key28": "bWAKTanzMMyjkgQtwyjcBfc1Ns9LGAhKroZhpeXE3mfkNeSUaYr8of8qdUuBXmkaXqbYSiiMY2YTiqMxprQ5DNK",
  "key29": "67VRJaKHYHxrvmidf5zBoLtthgzMg1NoBWz7KZCwfB1aCwn6TaP8zJMEfARSqNHn9Ro55jUkVJmm853xNBPv5Jni",
  "key30": "27t8DzEabUsVVdEkEDUNBbd3vLN25KnMbgBktcxvrwZ2M7fwag7oCkHNm2mTmBS8H3LZQXg8GH1ssBSqnJCaW7ba",
  "key31": "tQwDQZikCpYvXPt28bdAYiZDqK3v5ZXcFUL2rMFEWUBV8c1yjw6vvLJZD4QgfqM41UV5PtgTeXLd5P7u88e9msf",
  "key32": "3eqKVJu8kbg4LHkJJ6qxF6JaJmVpFMyrUZbbeDjTWmHst6cfnHDdm91CFWrNrPE8pYKTgVAWiUrUkcN8uZp7SSG2",
  "key33": "3wE8vKB4RvMSYFsG3KWM6cNS2pZaRSZrbWdDNgmfke9mFuMEuNhSD6guV8nibLKCZCs5V8tCn4LhPdWHu3HkB44S",
  "key34": "3uQnRwjf1WwrmQYcjFHrn9GPHs5Jj4Av7BNR3WLFguF3jFHw5m5Eao7qKxioGu2DBTDQV9YvsiJYZRpaeQs7bpiD",
  "key35": "5yWAU8QvPX5tVEUmV5vzSnU43wrGTQzi3hPkS27ste7F18C6ahaJd6RGmHUR7pcSYyDESoU5ykXmLTm7KUGKsvkU",
  "key36": "5bGHQ49FeF6e5JeJ8AdvKcY28C1mrGSi6H4UpAcdiJ2cGGDFMKVd8hjmrqzfDSASp14o6iTKYCpqmLgbcvJmPn7K",
  "key37": "2bu4un5VgRmKdzGitmwuKeMteVNxinNntmkJbeRoF1YFi5hdYCcKo9FgoQjKwrCXyEKf5CNyAjYHig37uFW3HUQj",
  "key38": "2ojzeLiBn9f75MbRicpPRk7ugLgt8dEbouTJawGC52BdDrfjpiM8hULX5bicRy3YCfS27sMgucHVWNh3jyUzwo6y",
  "key39": "2HtHrKDeBSSHcqzqHBZJxmK6itu7S1nYnCDtixUBDtnX9eDyLnKdFkuhktjWPHHunW3sXxzEHRRLPYbzEeggyB6J",
  "key40": "3kmeBHCSPm9xovWbV5FzmBMesK8nWScEzFT9esNnoEU8JBnEMUxMXouSqSou6Jt1GXu9CGZFFv3FDdTEhHjTLh7q",
  "key41": "2efyEL92N7htvQbqZUxjdA7HQf7485aXcTo4b5ujDpyY3WXWE4rm6Hi9DxGZ3NuHWCKTvQfFhuZ5EriScGu7m2a1",
  "key42": "4Hdu4FuUEjEiJP7xmqAhK5UCNswPuzKsP6m79sHdvxSfFNjDDGawmk7YX1e2PV5ecdbXpGifTTMmnpL4RVKrysT1",
  "key43": "2SzAWzHJE9Fos1R4eAEvXShR7r8dZsDaifU3WhXN5fmxs2X8FWEubpKkP3wkvW5Lk3dTuGvF1tDdRQfsqs9oGYkD"
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
