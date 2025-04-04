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
    "ZRsKT32NsFxCt29QGJ2Fj3gUnMTRTCjyPbKdr7G2Cz1GnxSLZKLM4gAsb9tywi3rWRLvNGFYsXc3DJcRCKkNEE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xyBo9gzcpkHSDn95QhDVMU1hhRrJUVMihg8XUsKkxBSVKgf4iCR9Z9cyg7ctZ8SEVYUN77X3ZXdTTbg4Weys2zw",
  "key1": "2fF7bFmLiYbiMNWi4edpLjSr59rT8KogdcutcApKdM9w8Gztsp5jz5GwiajyyaFtiQ4hv1qukLTWtesCsuvqAgEF",
  "key2": "tzvMztt4kBHf7v2MAC2gCPhYULs4BtFbDLWQcMeVWFpfcnJk7fwDx97c5gP8RKHNAPiy8MFFHfdriZXV315yAY3",
  "key3": "RDrEx54YKCsp4BNcRVVx4nymFXRBZerxF4CVLmstrnnUa1xJxUa96szw49ugZf3HmMd2KBmLNnK4p24LHrNahHG",
  "key4": "2owS9obdbTEwf85AWYy5J2SksEZBMSg46FF27ShRSaA1qrPTgZVPJ53rmA33TdFbiHPFUUJPNFJDicoWv95ijbqg",
  "key5": "3eNaEaD3GY1GB3REf9b3wzXbdcRDmKRqAekntJL61eUqmrat3ix5nx4SbtUxhFaV5T8UuacQjPuuRrB5irRkdqwU",
  "key6": "2STjGTgCmF5pW67AVJs7jbagmnRD8RexWJMyk2wYkVp6tbHuMx7AsMAUM5saVdCiMKUsNWsj8Yr8LBmaNotP6ijV",
  "key7": "2LdZdPtzjJGLh5w26mPJZ1iHPfm14dy8LWqv9jiicxr6RBJXQXHMHbUH7TZAUJdws5B4gcf7NiyQytYZPMALgNHH",
  "key8": "2DxB7Nok22v6BJJpQEAz3nE5rnw8CQe33UimRgVvrK72vusisY5ehECJ7uyhMa2H3yU9NE5a5CjA4jAtxajjHxUS",
  "key9": "5ZDWcEGTyVmkS8EWrZBgrEyKSVHG5TKZ85c32crSyGmuAFbWJBcPbtPkx5a3bNCVMMHM2uGdzG2GFiS7Fb8hDmfm",
  "key10": "57EEjbdYpfLH3uX7C1ZVabVTAp6WxPpCFMZEhoDA9VxsURnwkmQSXRrmeGPsKpPAGcea48fMecZSwKBQCVWpdebc",
  "key11": "45LZTvdWSENfkJG8gBBUEd12d43NQ8CXAMFPncZmEZoZCsio459N9cS1BM5hKuc8RdP4vQsR8egmqFSYRNBqYt1S",
  "key12": "4Q4bafzob2qUE2X9kEtN8jaaDHj1wQZVjwNqAYNSJ24b2KJNNgMxhWqTt73pZt8FxZMmKMxxG8To1SDECQNJftmG",
  "key13": "4LVuMqXMQ1DHQkKtyo6T6FqunXyKKtqqk72r9xWSKdt1nHmhzo6XY1SAJQM7hDSUYL9G5yKs9Sh2rAzMDr9rap4C",
  "key14": "5SeLjoFekyS7zAgLhQEtmPHzHDrEYprztFrXuaBtK5UTn8WpQGFkuME3qVZeV6MNkQwJGgrcJ7Hy6vPJnKRABYFc",
  "key15": "TvaWfixHdauZ4bLkEpTLH1UwNHWNDin2RNgXCnebtceB4PKeopnXVXr3SafNbGUNMQmuLYu3zYhZcn8enRjdtXs",
  "key16": "jwxzDc3RiFYuxY4RVAjUtCRgXQYcMbmwjAxHrzKuxyveZ5oRovhZ5R7kM7MP6KtQ5N79fmn7Zx9XiuyDSyPVgkH",
  "key17": "2fzUjVmG2eL6HgBQtJwAWtxqKqe8k7TFSHLhRovwzGvucEzjzS738h1gb55qYzRewwSSNm3guLkxQXEky4Qn5SF4",
  "key18": "5pATcZMFteiqeLVnCawoddNboZK5wkWpPG9SJzCGiMByYDHihf1SVfotPDMPM9udUAepH1DQiVHwgGS2KVquJ81D",
  "key19": "yfxwjnwjkx6N1iZbddo8oEB6FbRF1PvcBHtMiucKEvZvxhfHQ2hZsDrXZr79NGBz9cbCEtegf8ucsEDidnoWKWs",
  "key20": "5fP5f44ja4siUZgQF4Ebzp65e11FNTkPxewEuw5vfFWECwCpuwRkhnhyMrA8XQf1rujnFagVyNtibdj28WULTSvb",
  "key21": "3paPhUCKJQKGZ82EfBG14RFB49bCzqc3KEpLYkrZzQ5VcFLAwmpz22Fit7UinaDRbfaAjdDscGzqb4ooRV6w4nc3",
  "key22": "2up8b1ubVBWKhLxH8pZypicDPajLLmTqKVtXryAisNHi2RpGxTnLWQ8VdaWe1tfegnxufXp9KtFePdM2VpQ7Ybng",
  "key23": "2SJNZGv11cLihFhuWe99VCvtR4Z4ZaeC7g8nU4vU8m3YJ9rFxfRACH9jKkzPgmKJyvWFZh37nToHmUF54NwBaMwp",
  "key24": "5gQUteKBaiHvRpQhHJwAPBdzHGg9xXax1EKv2q3wLuRbug8VnT9eXsJa9s2YJGGfFZR4qozb6MiEtNTP6aaPJgm5",
  "key25": "2Cjn8e1FekNACwtbc2zrUdVL5JbVas7BerhDEx9wuxXqPYJEDuQiDdTfFJWn2rDbhDK9gQctK5dsMn3vQi1Rq4PU",
  "key26": "2AzSJDzxzeTA4NSHRWmLymkuTm8tvCEsCNvrBbZbtJiAQuJqBLRXsEqrYTzRoSnFJuUhpBNNZzWJJeNReaSLWw5J",
  "key27": "4ggazFRdhvV3GUMkhBW8ZfZXLUDedXKPxfaBBAXTQneAiFTGgNeNMijvGAFSW1citQjxwtv7H1TWfbeCSAPN7EjB",
  "key28": "dUDva2GxzHZfE42RL9NGfXKPHVgHA9hT3k5BiqrRnEWCnspF8irkFPrshdHhhrCLSQ1vanwwQE3iXQaKhUqEdoY",
  "key29": "4AoKbcpzaSmXxpwGiHzMgrUwiLpNRbtd9nNsuCYHNBveqz2xqMiur1wDsm3MntJxVFVbYf71HSNVKkFhXN7AsdBk",
  "key30": "3oXLW6hR8GmnTQGRmV2SFVmFj9bX35yCCbxDG9V6v8LHqgGzU6LnTb4Apiz3nTP49nxa8CLWPDmtoMvuzkdmRCGZ",
  "key31": "4LHysK3hvSKJha3UBzhQ1x4YSTSNJsNRex14W1YRWfFcJNXQiLemRkNevYodFkjuuMs7sg3Nd22Xey64YvXTmyLP",
  "key32": "SGf6bEA758KRFr8VMd4F84LYhXD6KbrMYGMxNqTqfEUTD43LMbZHeySnXMsdYMHyKupQgSW5MS1cJFGgiHrmZgt",
  "key33": "3xK6MPNaJdfv7JDHvLzRe5jwCq5enSDbkE4bwx3h2uJwLZU41VCDhhbPXw5UWBYRt54CVeicGTSATWdr5qejrsCj",
  "key34": "2ytSGJSG8Zt4PUrxDRdthcGT82uQt6c7RR7SX7BaKGsJCWc1P4vKBpHFfuGtzjGFLfcrM2yE1DWAf2n7Q9uDG8yU",
  "key35": "3qgxeBzVZ3LrL5BCyBd2AvEaNDDqeqx9JKDoZTatC446g9LNMLTqryrq56Jeu4ydbHKKTtC5MjoA3yuSs9X5H9QA",
  "key36": "5rB9nZjiAeiUki5mUUtMHkpGCXoq5P3SjjEoUwPJe89oUVKsXbVeMokjrQ55TkWfSLj2MjnjrY5PngeKdSeXeUpZ",
  "key37": "4FUF5z776FDEhQyULhpTDVqUmM4TWDGMn3xJtYMRv6j2CVczVUQQZsB4Mo7ne317XnVhmdCUhFBHArN9MrMUWkZW",
  "key38": "47Dmkwuaa3S4TRELLJDN19ugEToyZPEn2LGgtWep3U2hUYbS2Z8kMfrMQ4n23Z5xxwoGRzhQoiFjgvF6ctdLPGSe",
  "key39": "3mXySZgU1Lw3s3RRFjBzwUqbWaC5WqqJmw7CcUjWneEL9ZAQexNPPRBehPt8zTgsmwACVwH3ZD3vgvGmuQ8jX3MU",
  "key40": "57Gij49jS6CqaEibj4Vy2t3gCv3j7acnuPPfP72BFD3pBsCpkYvx4tK7febtsjzFYrBh3khQnWGamvxh8DqrMss",
  "key41": "3p9RRWQcAG4MUxJTSZqi9y1myzAZJQhqsrjWqEbzmfYwWUaJ8gzTqbaByyPvEzENWBkgAdhkfGG4V977wMpCYAmp",
  "key42": "29Fghu5JhEuKqPdcsfiFBdbBfx2aJVg96SZEQDuhQ4pcaZDt1hCHJaurrsqjdy8poo1q4rbPeWdxVUhUusaGq41u",
  "key43": "4wn3cBMHqH7MZgCoD8ZPGafFrbyrjz1wgcgJLt7uQdWh1T84FSE6CLNZpKQ214SLmpDY84CabXzmhaGhyfo5jAZh",
  "key44": "39NQDubEkaf6vt6KGwSonMnZaXrbD87JBCZwhimVdg4U8i26DPFBBChftbmugfCL4DdQZKfnxxjxT5nvch4xsKfW",
  "key45": "3qnL4ergX4HoXvayVyJZLV62GxPqy7y9McFtP1x45JTBLpnLqpLoLujm333kpgbFEmv18KPKB9fKbP1ECSqzCymY",
  "key46": "3nKXpxrAzx5hnNixWKh21VuSHVpGLXjGbiJtWfrwwCZkMLhv17ASckYexgRccTK2iugJ4k4kd7Q3iM5gFzWGbUJ2",
  "key47": "2hxjh3mmibhirmA8dcTVF5kEEWyACswsGDuWKtEvQid6mto9LWvdwubtazQTUdfyFQVcHpMHQAdTDVdc2N5aUB8n",
  "key48": "2Z5Yd8x846wYzkuHkM6jhResKEkye9kqfPeHSs9wyFi5TPvH238BNxyLqtA2ZkQxWV2z73C1n85c1VjQGRwZyANr"
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
