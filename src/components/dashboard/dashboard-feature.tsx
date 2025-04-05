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
    "4sBrscnSY1JGkHSJPUC8fUc5hN4rciGwrRvkGoMKF77Vig3f9tEhkBQSPceBFwjvswWANBY6zeLSBAZkBNfdi9UG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QdZqxmARAuZk9ZLT7c87NewHSXY2TZjYM2XDLVUH826vCQhECyoPew1dnvuiBchHPHb38jUbqQo4gfkDPE9HLst",
  "key1": "5BgtUsMdXUEW1Q2cjr9QK3AkMtracJ3khpeazyWWpgXhaAUepubcY5pBnMJpUttf2BBEmT4P9D5rx8D7AYERFptQ",
  "key2": "4W6CAmFBTKSEi5XLhQ2x7YwHLZ869cHd7DMBQnYd4xwoQTBmncmYKsAYcyTEBSzvbawrFYT6MH18SxFG9XKfxjLC",
  "key3": "2qtQukiou56mbo6HFyvMfgusM3s8bMfotcUgZNfQU4SXLrZsGfRm5ozrwExaEYPQWGyp3vX1vddDEZDsd2ApZgGv",
  "key4": "2zDHWMJJGbN28SLovRpjmiG5hGt38fmbKFdsC6ifw6xrkeR62x8wqhUv29j16X4XW2XwTe46PvdyTF8YkpT3tRKH",
  "key5": "mCURgD7r4tA1KxV5hrLbChYBQU8ztE94tytrmSbaWACQW8NRD5Y1vVjwb1RHXAiuW2Pz1uzwThGCrYnerKteBHg",
  "key6": "58hwqgHzqbeeHjTKWJ5PW9XZmnpBWN5NHUCRhaqQVFppsRF3qqwBVntYXp5GqtYqTG8nMj7GFPsQ3K6PYXQBrG8r",
  "key7": "3FzztnyNX9rbasaaxV1gpAjg3TqXYBfYVKRKVpsad95aSngTHELEWdwHqKwgyy5kZLxKwTSYdq4Yp2Tf8ToDsNkn",
  "key8": "2TCMnfGbj3uEYMMpR6LYiiTskAs65bqpGgJu6qN7GNPL9qtjERrQqYkcNVgNFXh3RfMosRU7EsY2BhUrMBYoekoT",
  "key9": "48p7UYZFKWJTuSVp9kangBoMus3Gd6S99GRpZxP1ppiPf5atBFaG8XRTDp4AY6ANSRDJkF4S58NG5GpjdamYxj8U",
  "key10": "3RKTYHnz5Se59Q6Xhr21kzafLAAPLuca7pmfmk3xyGUgbTo8sGMVXJBXhdSx2kjyCpXj9kW5P6bT8zgKSqXYsBGR",
  "key11": "36Bu4jdTfoMhnNmjeibz3YwsoqDPvm2wiessCMtPLvrBRXjUtQafQvhwSheQKVFDXgGkWhpB2NBKmMEg5CdxeDpp",
  "key12": "5XLhL2ZjnKntCQfoWSpyCgfTZLBCSRwgadMaNNHJT8KZXBhAk36DHAGhkN1x2rnM9cHXW9RpYWXnJ9NEvuGrkHuL",
  "key13": "5qzhA2FaD6TZDr9yurnRNKuLEccFfV8SWNKobws6XoYhu8TXABQxnBDrRpKPri291w7hR5PXCRRhWaAFApxyRGnj",
  "key14": "3LKipY7G8p41aSyumzy5MVMkHWCKX9hRByvDXCRjM7HQ2WSGGTp9vsmhSFjbgCdDnzgfHdnsHyJR4GQ6TvigofkK",
  "key15": "2zMCTcT2cM2KbxCkitPHC56iGjEkkAPUM6ip1srhaifn4QaE6aRrT3HBGgxnQhTRdjyNZ23ad4mq3nPNTdN6JEyW",
  "key16": "48F9tNLyVHhuDw98Ssibm7n3pzAZzNp8uGg12CvqwGnkQrRrA9Wu8uYW5yrmF6aBSEYtsTk6J3mM27a6UEvRr7CL",
  "key17": "21HuvBdoUSmbJgeNLRpCmhRQn9Kxou1qWoM2HPr2hBq7mxU37Dj7g9r81jC4CHV1jSyyrUg5B51j7HvKSUzosjXi",
  "key18": "3f8tF6sJz5d3Mt8zPftGHi6NgGK257f49BhNuc8NN8mJkXRXYjXoxU3p7v6NNjnvboyp6iG8GwWYLHfoBWkb85x5",
  "key19": "3eAtryWS3o9X7XxPgkgw3gADCQCUztqNVJkrNWZGTbUyrAQyp4j1fjtzB8d9g9t9JAcVG2RMG9c6zRu2SLQ6HAVE",
  "key20": "2mUQ9f4KmxSsNJqF9b7sqKybcgDqXeeWjGeud7YrUR3KTdska9YEHfx8NDop2s1e1FKRueFTEQMs8eTv91Vyqoh1",
  "key21": "5LWg79gJk9UcPjXZxdVCQqcZbkHxBoH5EUoEQz9QoqXmd373T8hxoRX9iXDbN2RhSw5PqSYu92qzFwX2gqQJzCpw",
  "key22": "rNkvDURQcY7UL9zvWmL86L2MsgYQMWymNumMfy5wodmFwWv3bQjG72bqC4CUHtzs3ecADMMPvnKqkSVpwjUrEzW",
  "key23": "623ZZQ63Bzt3qr2Sbjp822yPkPxmF7XS81HX1mQTAZHwY7yk7bJBsiWj5dPuKpzNWMRt1XY7aDH119tYnXBMNB5E",
  "key24": "2om7t1uvgNeRr7vY7vvqSdDXE5Vx44Ron7DM5ACERsTbpnWyWa8RNf8pvVzMpgZ9DWXtB7ysxFQRKb2dvTySsmHv",
  "key25": "3FZuY3futU7TLipKmhp9tXyKoUN5xPvgwkRyEoSdwke3x5LLBXquV9tGYGwZJu8b7p7G5Gct74WpXmRg1QfTUyxm",
  "key26": "2hv1wbhRonG4xQCdsXyCKWpaDwsMWs7qC9ZHDHuM57vFmKiTNBEFWPkzvxq3bw7XKnVyuS5Ez5anTN1sCCMjhHzU",
  "key27": "37f4WfVrCrBvq8xw4KQ7siLWeiYtVxem1QeE8JPc4k4v2yGE2ET9wzceQsU3hTNXcXDWxirTidNuTdhwtzQzr7hW",
  "key28": "2nKWnWrYXwePrpRbS7drUBJukyiE2usP4jYz1krWf4P6LGYmWVrDAj2yqKbM4wh3k28VQK1h8DMUcKo6ML9pyaqP",
  "key29": "5tucszyFXnKJTBgsJcBqL3zDGJL9Z5HuCayqpBBFoGpBbtvjVhAqtYdStu1xocja34sguRwm3VEcYNY8BEkfG6bv",
  "key30": "2qsUSrMoqq7BuS82bCQReSwP9KgLJsUZLciB6azPHQWvYbRs7qoWMW9vhTkJLvty1rrCAT6CScoFt9hpqzfk3xnJ",
  "key31": "3MUhiKjZKK9rTomTKacqHcSfiK2z6TXpysCMnNyYem1cpDSWgKywANicX5rgwUNm5ZSRb5F89PizJ5YzCAechfhU",
  "key32": "TApdtRL8NyHb3Mjnab47ffqmYShR5kZHB5roL2QDw6nNa4NqsBKrVrA3u96kvvDMbhvKTd8cheav3NQqRkZBpEt",
  "key33": "4MXihFr2MKuNNCFtRDKgo2oS3d8pF1Em7prxGq1AyVjm2NSbmRgsrT9oPnegL1uaazw1AJEHD8X4yTQsz9ipqjyR",
  "key34": "3ratFU6xo44PE4d83sN6STbN8AGXupbXr7xihtC7JUaZMovJfbDQzY6y52D6sSVaZLuN9SixFRGJqC4ayhmXqLhD",
  "key35": "catdza3obtaVdV1ii8kWk5znNGSqNGgYF1CMaPcfCo4pP6vZ53WZrP5qzZBPooJJAjKLH4U5sa8fagiF698Xq2w",
  "key36": "XGeu3X7BUwGKHNgS5XqpvY8KJAHJi7RsTSfcfB4Hgvs1bE8rKcnSXgzheJHSa5v2HcC1JWnbAzMdoQ5YZpBYte5",
  "key37": "ZkX9gfCH28JckVyhudJrzXPjZk96jchYgtnCpobu1Cayk2QuLjvVhrYughNJPm5ShsoQLTQezdzcKxwsag8JxH3",
  "key38": "53UHDe7K1bWqurRjRmUuMbB9p6M3N5idCV6u6vWK6yHQ6nKu6TFb4J74t9gSYkMfqS9ncMqHs4qZGwNPsmfzg7aL",
  "key39": "4rKmzUj69Joa5x8Xai36f13ofFYgSZLgpEiSoS2M7JvTtR2ufkACjH9tsC4fSDwymZyqJqbV1Koz7ABpMDidrhCG",
  "key40": "2a4vkx34YyUXbEdQtXAaBvrTtXx8djUaEa4SZoz85ZrTppnbb22L8XxW3ZRTrs5VUSuXwPSE4sETPdjhskHY9sYU",
  "key41": "5S3CFE517TZxN5ps5kB96gkpenyJ1yVPj468FL174DSb2XyJ74fRR41TVrMypt9ub4rZmJZEMPnHacpczodEe9Mm"
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
