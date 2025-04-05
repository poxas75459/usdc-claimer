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
    "3VtFJdyymkSFTSP2RYZG6U1SiN1RFTR3uLPbVoZzWvfcExQFeacSwQLLeQmwpCXbKcJeAEuQciXBVWsCxs8qu2u7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "217CMBWFvdtwCNtyjYckArYNX2utHAkwH84skHZTaPYwwSbRUQaRQ2ZxxvZAt5TRs1Z9wBLeCMNNX8gGUMxXQZk9",
  "key1": "GjYFTdJL6RYSPrGzBQMUAJ6pUGn3K5piwi1LtGBCrTbUZ1Y22cPVsdtFN3QgNUa21nhqaHbYw8JJ8FMVQ7K7GW7",
  "key2": "27JnHrxGn4G85VWf5cUJESsKZHKqUNebGHkpzTPNSEJ2S1AfuJPfTrAkYUtEeAwJEJ5wnaxKisnxYc8X6ZzuQAN5",
  "key3": "5FYJxTchA8GnN9sZT3eGcvXRZk8vnfWyHnKepdarJPV69B8BqmmSfZzZzyYkjvofYs7LcnzrscpUE2J1kvy2KFUE",
  "key4": "5pJwnRUukhpmqXdhcDV3R2LHuNr9GSJ3UAiuev1xLoEsihmBZor3MkdpqPNGrJLH5jqZyuFkZHHX1GaYhsEJuVWS",
  "key5": "2M12SefeyUgRuWaaErsLqRgsrLvwKvX3ieN8PNug8JiYThUHk44AHT7nCaStaBqpu1dv9ovBsTaQQc9tZF4z6P7K",
  "key6": "5gzHPT5UEd44QvojZu5EJJZdrXicYvgFiNJbLn1zh5ZZ9ASbADteEDKD9C68Qe1YYWnBxbUXTdChBinBCorhDqKc",
  "key7": "5mk4NrFBNoENM6C2wu2Q3GUcjZa2PE4BtrWhXLEML9VYU8MF1M2tDjkdhkJUmNKJs56HncDUFtNHBDnHbVfyhcAM",
  "key8": "nBNmCwaNDZKnBVW83vY5DX5XfLFsEpDNxNpA4Mp9PAALMSXRoNvsrMy1uKuExqEgaDQ7B7BWbNAeNH8kNoZuFb8",
  "key9": "4iCWmiyjoGmr9SoLRF2DCQaH2qE7ae7Um9xbjq7yRWXR86Q4sZKc9CzHVX27CAREYxNxD93aEFgFoYfVWwspKXY5",
  "key10": "4AxB53Ji4kcDp5HRowNTPKjNHXoATWRcfNj7zoKiFWxWmHtFbF9QVj5CkSxeumVvTuYQ3Pm4RRR7kpj7FcwtbA84",
  "key11": "2CJXBHdV6TxcRWPw7UaAbev6Rsn2KW7S3Pp3t1WNf4WKfvddNyJbyjAjcpkTsXu4ZnMFhEJU8va683CHaeGsnU1R",
  "key12": "4icXXvynGjPS1NdhiJTKAwYwNST2rPCGKGLre1ZsPSo3tnah36jQZUYyP34LoPEAokPFhRCk4BZ9NUfKB7BY3Pgx",
  "key13": "2T452z2ZbhGZHeHdd7nKtsWjVAzjC7oTizsSpMqr6QnHzJ7TsuxTZupzMQa2NESpodMEAe5CdjiwHobmLkFHLA9",
  "key14": "65AzpDYbF1DrG9iDdS7XDE5t52CG7zq9wEnVZ6V48KAMTHaNa6vWkCZkuxY8U4nPxdgevtq2xYyXm5373tbj6US7",
  "key15": "DqsBkxrQHDdxFS5PpGjUJoUpvrqEanddfcWxoSX4zUFwHg4y3ADJyPXwQVSYuA9wJ44YnWxhRXHoWnDJo2V4zPo",
  "key16": "2eo8tefGFfBiHEtojMaQxi46w1TynQ3PYLZwQ4grDmtP8FzCJoBdbPU65gNcPek3n6fYYnzmcdMJfkETNDspXcPt",
  "key17": "4AjB7Ep2XXW6X2p2ctwvT7C4rDERsNSGd9kGdFBmXyZpMhxttVQGfNrV3FD6PgLGGPqzShXAwZPSBucAaM68FpGR",
  "key18": "FNVhbqKAqAtX7SeT8HMg5maPnGn8eycmeUE5B2ZA1timVyUPxMMz1h93c6BsBTk7NCBXvBCuQ4AC58yvof925MD",
  "key19": "5AMXCEqhsGz83Yp2VpY6CMfYnypCFNHqSwNisbu1SibgWfwwkHHPLZTkcXQ1JAUMyQ47htBUWfPvkC2hFKLFVS1o",
  "key20": "64nnbibZ5ASF2596BbRnR5z4u5nN7Eo96BKJ46uXp5eYCbXA9QbDZhCbKGyB6djGHM7oEzVaA9oDWdPgQ53G6DNw",
  "key21": "4WtU5tqifhn6CFR3t9RwVEcwJcA7sv2mynG5mz2xpNWKgT273J87CHPA9bLe4BCFPFL7NJXb6xLrPUGU5vzCpR1G",
  "key22": "4fPZ3FuM9cFN8CzDdP5zhVmDi2gTBiXeqfaoLuwFE4UnxrEvYqMvy3RcGujK6v8az8TvLQgkD8uzsD5Zj15JVvXj",
  "key23": "5FP58idhz3QnbZPVp8FY61XGKdoShbzy5RV9LA4UfYh2FV3U7P6c9hDj8DEcQjVm97Eyt1RCCGTwmpVgjXSo8zkP",
  "key24": "4F6DEjW1sPkLZ1Rn1B4BY15qB2scshnk98nVHQX2e8xurwUHjyorFHPq79X6nYPK6NX6ieo5y9Hm775JzYWfkuCz",
  "key25": "4EsyJDGLUKEtpSmmVpWHaapXgCoQnTXKnrgW2tNe7NPiNHdzZaCUYM9uUFChPLbZw8T2G9ScqvRTYXpcczfMfTTL",
  "key26": "5hyyq8mfyChPRr7Y3LrjBB824yRtfyavV1RBnYwFAoyWFSBBHJAzRR5LYfgUbxNPw3xj3j92sAJ9vb6aP85Nfqyr",
  "key27": "3YHKJHXu24ejKwn2NBVa21iZDa7Xh4Hi2QHzcTKHw1fd9W2LsA7tVyFPSMCUpBFMSXNobTzxyowBdf1XvFcuBwMx",
  "key28": "3E3Qs8E9FjnturfgqRUrxDNapzyf38NvhYnuejrAaaRjbw9kUkNurz1Gr5dYQ7XP1qQNZ72Bj9gv8vq4mDAuZ94d",
  "key29": "4CWoVCPVuLim2NCvgvL8DSDh16yK7HmQ85hciHQufVmLjdWaJzF4sXV7Ea5TfHWzAbm7812S6Yzv7gKTddeTrcTx",
  "key30": "5UcoHBK2YXKMhQ5PfrWWcchM433w6K3fZMdhxexQ9M5FWWEEhBYYAc68XLund3NQf1XxboNADhjdJUEXbny6EZ4d",
  "key31": "5PM9ksjWhEkAF2K6c4BdE4kXbipE8nFvmSXnRKTQP1gk58dghb2fdHChV3XoHVUA5ZgZAuPhJvv9cGLh2J53gymW",
  "key32": "5MjMHhuMH1ekAiTePHSFZR94LEyJ87DLMzHTSLL7fXMwMKuznw9zNWaxQCArQukmCXwcChvpJXSeTtJmoczjuAmr",
  "key33": "4p1AaA3uKHLKZHX9Kt7uteidUsdPv7jai2dipf2RpK9L1HBWhx1JTKsTT22ATssK741YxhG5pY7xWjGcvy9W8tMH",
  "key34": "26MsU6KWJR7oXN45NSxLyRVJGQfXsWszyGpbNmVEQaJ3BkMxRMz3pbWdVpsXp8GDWm8eT1aC9w8AuLYeZayrEYpV",
  "key35": "3RQcoEHnvz6GHBzhRwhJJe7g7A4eKEpQBKM5jJo6hXyaqPursbt8JDnuyQoEo9pkCmXfF9NoQRt5uBjNCjhaqhP8",
  "key36": "cVx1F6jPrndskukkDtKyAZVLSrcyzLFAyRnHhE9GachPsU1kWGrV6pxJ4NVtkfrnZvzoYEZSKEtTwzXSJ7kgsaY",
  "key37": "3gmfwQBRqQHm9WcGShjPWkvCKPY1MdowGJQxXUMpJhr1pQ5LgbqyS6Upd1Qit8i9m2zSt7FqEzXVjt1XPpQH1iqi",
  "key38": "5giWqWFq6NFuEyePFY8QRL3rQzsD6ZVfAVeT17oMeHffzi8fr45rexaPxvGBeKWDuiDfdRzgyUk4eJVNDcY19kjv",
  "key39": "3jvHDsYBvrCtPh5uejqVHLayumFnmeoegqz9PjfuaaMmnLgNMHBjdTRo9DqXG4qTxFEvJvBhj1cv3hkRqrMobtjF",
  "key40": "4VCsVe2ei18BtKxGo8z5ZXxQd7UeVLDiXzeCVV6BFoyn7mLYUNmdrPGW78zaso1oAzSxK38HSvAP6No54SVsUSmd",
  "key41": "3UNWXVJcarKf679EW4mSronLdm684i79hWRqzfMR3meihARDk3ErPbEc3dXqtWeW4WvdUG7Z4choTjqLxgLW4ArY",
  "key42": "2ptvLfv2iF8uTJQQckmQLPQh1AaTvMxzGAsp5JoSXt5V5q7s8m5kjZnKQeGhrvvfYbjdRWj4bpDQVjdexxuFJqCr",
  "key43": "25EBoD1uyNorkggXoReedtZedKVuY7tQ7N2iwUBMYytSnmwHzrfEKU3ekrASVqq35VLcDRyuxwknp7sYm6t2Nqze",
  "key44": "2SHEcxMNyoNFrqFFgkvsnAtRbhnY93sNdN7V9nF6KnnXGDGNuPk6Ckuh2ZEUxhsGH6PjB5RK9rbnpqorccxW14f",
  "key45": "4KoARHJi1BYqiBxnoMxhdUKNNfLVa3xWtAehcfdxAM1Lb5fVcY5ekXM9TbWjbqmFb8TfEp4SxbA1zBP8MB9AfnrX",
  "key46": "2wScgzWHRhV8P5mQUvZH7eYzz2L8w5YGqb7mD2ukx5LbLsEoDkvuEouMsd2ucztRg2mf1B6wmfMvYknous98i97L",
  "key47": "3vKdhhRrwGUHVEUaLECyoLBB6wW6SE5KcZBmH3NuvFGeo4tP7jvrwsQPquQb9fjrsaVPkghueiUNGJkWud8LW5h2",
  "key48": "54WF8dr7bcvmyMJrdADgQp669JS1Dqkwk4YtTkz3uCgz5VMVgqQ1tdAzBv8t9aqx8fMbBvpYHUVFTihrg1JkqS4H"
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
