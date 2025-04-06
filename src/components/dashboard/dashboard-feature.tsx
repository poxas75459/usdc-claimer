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
    "4ifD4M2xfEGL7kKpRXjJ4aqekY5ga26MW5TeeaS9UB3LimaKJTzQXpnu7PfjBpiBYLFLrLYosRh2wS8mEgyq84eb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J9KGQiWfGWUDKvttm5vqcazQCgdvuZLFzn1LJhUjgS6GFjGr1H3ThugnKfDDhHVZWhMgTuephMn1TzBfNK7gU7W",
  "key1": "2fFysq4LvWCKm6jbixKYYBQjzFuc1fGYMhfMfvwyrwPppkxfVG3qeaGuJ4SrabrWosJXbi4dq27jznN8hzcXrVCc",
  "key2": "4v85UKZGtUMo82invwgRJeRhR8LCbiP4zQM3xa1Txtz4kvTuVYnKVUjcDsj1SnpczSKkSdyHNwf4vdxmzkHjTcTU",
  "key3": "EYoXhgFfP9g7C6dwkYhqHkLbK6zBFJobkha46z65QzkseK9d2VwYJ1GKFb5vGBKDf5DGTZY6ZuaU3wcGwUHFhfo",
  "key4": "3R43u7wQibkRMMTbEK6mCzYG3Vm6A7NuGpRnXJ1zHJpLPeABhFWQC45tnxtKurQtb5aizVpk1ZPEySNir2QGU6qb",
  "key5": "52nb4FpcwxhxP8dFRcMF15aBMubwUsi7jTfLRfAFcdSK4H1Jn6tXhSxvFmpakn5ohZrgBvfnWUdx1hF1ceuttT2o",
  "key6": "2rU9urxjMmxm322XXDz1Qj599S5c5uXiCUeRFNPwCmdFa3WkdnuPBepL753iUvVgMwAya5qyx5FKM9mhtVtUQahi",
  "key7": "5jyWSvsqGEB1eLPocCVQHVjze4uN8YpyW4Wy9aCrZX8AahZ3CvYaxc2n4yHDT9Uosc4dYfjPTHqxSJ8Q5gu394TR",
  "key8": "62fcNeQK7Q9WCU8bF4HDyoSUrfvmMLNrFVNUtFfjdnU3maHtGV3J7fMVJj19fMBQszTuvdQ7PDrUwwABB2jN8Mf6",
  "key9": "7ConEgy9Ran6vyNkUyLMFhLmEc26NWpgbSsSrPqJVQLtS19qGC7jj1z1haAEhwnDxGsT96g96tSdjMuSP6aGxGK",
  "key10": "61cCFAtWH5y7WPyxFXu6NpsnyaiRAjGmxpTT6kHsy2yqdBLagRzxYMYNoAUxdmhHj1JayJSqJyhmPUCEJzVWqy1q",
  "key11": "5vTDX4a1ZwXF3HfKYnfZFp7SquQam3U2zoV7hvukC8oAAyRSyDh38sWy6LsPmKBRbJghS66gUQkSjfaHdRWVEcHV",
  "key12": "4W3fgS9PQ8w79Tmn5rS8nAte4YdNi7HZL8KpXomUXSzGcWfmfV692rvyFHPos3xEoXhpNzGUt9hKcxmUCGxwKzH5",
  "key13": "TW39TLPKGboCD8z53MPJaoBf8TSJGgvP5buB1v892i8d558j35rRZ1K4qeXPe8vyRZbhurwU4q47nCa69Bq2MRg",
  "key14": "4thSZ1DJ7vTYXjvnF95okiSN5A5uCiaHYig7zGcTGs2n6JUTTZX3Tr7yg75XPHA1ZyveDwKqCJpPtnV3txRZQR9p",
  "key15": "WxzHdjCEAWk7SWDQFypVxXo3pzoErzKxELhCMoPu8Cmk2tRRheJQSRmaAchKN7Fjpb1nWEZVMz34nKARvxCq9fD",
  "key16": "44PAM9nVrEWufRVyr8mtVAvDqH5gk6j4ips8m7buRreNr2x4tM13DULQUtL8Jwr7gBJz7ANPAtGc9Jggb5mXmNAc",
  "key17": "UaEGnNngeH5SyQfDU7KDKDYN5iLAiH6AXfBFmPUMhBNqpqXvtFmVC6vMhHnG3k2bV7Qx6e6MbfdvdMQspYMqzqk",
  "key18": "45dBQGKUEsncHkwWoHBApmBRRqW6NhQNuwXeBww6jDCXCNh8gzRL1qu1qb9gVq5NpNjHbMb3VjgpWHdsLWBszQw",
  "key19": "5yC69L8fQCxJGNi8RUf92nkBEA3E6YqzRFqqbeFmNYA9zc72eMwv6KZ8aJuErW7ESfTNhTgS9YxprSyDzAQFBTPu",
  "key20": "ugCHFK9pCN78zks4Am4cFHkpGQpZFYBYa1ZgF7qTR864WMVa7pz6jNwkP94k4WKWGUSmevASndijDUDzimA618s",
  "key21": "DLY9gAP7YuWEj3mPKv2SAWDqoE2MRJwwfoJUShntjABV6wNdPsDC75F1UanwJGkcTyRnwsQSGehtWaGuzyCkZk7",
  "key22": "5UQqLXqPuDQY6gKzBk5gJHkUarzZVz3mCSEQYFojPze8aKkJBe1BYZhLR7jmZua7Rs7HeXHqJQ8EDtqBD3ZUjuE1",
  "key23": "5zuyXQXK19Tk8MX1jtiSqhxRrmxoFVk7jPsWcUDSqWBAU5TXSBTJ6oWCmnx6cLYGdRanR4aQNq4h1K9KHpzK6Mgg",
  "key24": "4ydoRjJ7XtJLcPx4xUvxK5wnsxJSN9h45xFYCy4tfnNpuNaTabQWky66pm6uR4kVNcJRjZ3VAw39mFfRUej3F22K",
  "key25": "4ja58Ho2n3kc7mJULdFdb7ReRao9o9sjAbJz477mQE857cGA9qzp6f6AdknfJNXe6FVazbaQ5k4z8gy5CZHKTHut",
  "key26": "4sihdTBqEoN65pM27EYRpxn4bQz5VnzwAKJzpraSR2Ls9kbjaaTrZLaF8emiS6gpHjufP4djt9dqYedc5rNCYhV",
  "key27": "56BBZNyXaAbpUqfsLh11oqGgRutX24eutZe9bGoJopWUDp2JDTx2sesqfhSMoXxsMB7JRYWVux8LDeMBLGutkL23",
  "key28": "5XSor5d1w57447J1MvQqi1dKm5abck7MDDQjQSFmB4Wt8ZYjG1mGq4Gc1PBLBpb7Z7isZwF4Rx2huBaKr3hM6mjs",
  "key29": "4onNvgYgfs3q1Q93xgQQZp6FJjnHCG6dgLrr1K6fmWRigEApuKR85d3ZDvB14mq9LePisA5C2kt4PdPmQimzcJYR",
  "key30": "3XQS2P425teawminV5EGPfApnsCr2ntCiSa8ij9mSUAXLyA7Z7AoqsKPghtjz2fmBSjsPGca8WYymGr2WJZBxSrZ",
  "key31": "4B9Wsr4XWkjL1DptzqVkYvXetCv7Kjw6vZZP8SSA3LDav3U2CN3DA9H4LeHUpDC6CJC8rFtumMcfuUdMj3BuDpDe",
  "key32": "3eJKpz5QUpBG3xHxXzbA1iANdm26S7VxMb48xZLiAJ1P4MkGFPhMHRF97h7VL2VSEiWt7zfrHcTWXfJ47hUdzaYg",
  "key33": "4G6FCjVg49CS3FhSGzRAiXD2sSEN4jaxecY4Uj978bntku948kKPxLhWG8hGvVakNwcMF684E4yqcWTxKiuoUZ9F",
  "key34": "4WRHte4536bamF7bPCiJqDyZEBK5TvxMVnx7GXF7Y5dUTPf5qM7tXdYcXmr6ufAyRVjHAfsU29XgWkcGf2FfEiDB",
  "key35": "43hWBSET7xdwi4WR4NsaTXFeyzRkZpY3PAap9CfHSsyPiDJwFFiPQVCE7bm5UaX8C9jv5ZBaSjgiKM1HpZF2vgu1",
  "key36": "vqyTMbZYtdQyLsMWCbB39MJoagnHJRUtGTFV6VYZVN1rFLg5Wo3C1tCywQ3xExAbQv2dit4EGp1oCE59NhupcTw",
  "key37": "57TGB4qWa1WJN2nFVT67V5VKVjKemvgPkYLWqsTspyD31YQWtv5BJbGs98pYbxukfwRSRvUD7rHsVqnoa4axc6FV",
  "key38": "4e7vQUsFJw2gQREoj59X8QXEbeyaeb7ybBLqvye7Uj8UdWTnKg4FjbZSZSNRv3xoP7EfcyFXnQ1BgLbJnMeCQaBG",
  "key39": "3RUjX9zX6JUfjCqbKu3FdPMjP6zrXLnER8XWupykLbaWGQ2ZNDtmhg6pYyCu8ZmWFWgXAntqWkfmo4SKeHi21yc3",
  "key40": "5aLWZ4XPDMJmzKn5dhmEcJ42S3LgDhTUwTukX7pDS3qnZfwjMVS2sod1ES5FoSE6yp3r6CHq7urgoYMxFH6pgAWV",
  "key41": "2UmvAXsVyEZdRTgumeeTNjMf8dwPPNT5p5LGDUBtY2ETFG7Z1ZtpebhEQGHxj57TeH3aAvQGUe7Tu8pFzBYbwvUE",
  "key42": "deuiNp3u4QGdrER4A5ppHHM24xYypur8CHJxhSvf7vMyyvmxpWmvVmfj6qM5jeh6fsc5niUurQnf7p5ETV5HX4i",
  "key43": "3725wXYoxeXQpKAHnv68PDocNKc2mnesotyddx4YHAEUZQqBJRKkcW9ySETM5b45ujtzYiHSmSD4wrhvg9BGRuKr",
  "key44": "5hYwbmgoQRpGsAaQmMBoLXbjVG6Sui71JiCB9jXKurzMWk7Bkjyawde3UMg857n81mwu8bACZRw5WXxVuM3tT9cH",
  "key45": "2hGvX4HTTMhZmRdHSVEPsG6XwKtVZPvRvQwJVkpAfcKbCiTtYEWGjTtNpStqF961djVZKpJdVxXdKr1nUuLSpcTn",
  "key46": "3icSaEW8ZmK8B4Zv1HKST2xec6vEingEqkEdzmMaH1u34ftMCLpBsB24ZsjmpAbumCHwfKAbBNCRiYfuaByLfYsy",
  "key47": "yDJZnnJycsLuuLJyk25HKqNMq6dec6ojsRB96tAeuyjX17RTeGWksRjXyyXcJ2uEToJh9eHDjCpeJW1E3o9ES6i",
  "key48": "gXuTu29juiBMoBYoyiwiba6aCTnPEiJrGSW8cmNNcqhfscyKc25pGoEgGMDXptzHbKWAU144QKAc2hya7hsJ4zK"
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
