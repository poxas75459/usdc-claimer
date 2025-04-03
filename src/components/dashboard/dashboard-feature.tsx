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
    "m4oiXC4jsGd9V1U1QPyhs9A6iPDeKzPxxfdJibMHcsbsoxVdmdPRt6nQjuk9NZd546bB2n2TVHvvmnjwZ8b91pF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F4m68k4nV3drsx4CDRURRrpPiEuCeMvMQQ361roGzMyvAeqrKZQVkmmhXPC4Ei7hNaj6qqeeud2PWBijv3aoyXX",
  "key1": "4bauP93bYZ5SRoQdNah7Jj1xMFtB5prWuXC6sywYeqJKwvjRkK2L1unMnXFw3rYvBCZewxBPFwKSz63sBAXbew4s",
  "key2": "2XpK7pWtF87Nre5mTq6BGYDpTjfV5uqkusp2zBKzAzT3ac6TpZLnU7dm9CtM7BsTgKr2Ywcr3Vz6pYLjbgEvHi1w",
  "key3": "4FkoePnxTZJK4qDoEJwZCirjhaLUqWaSSSGEYLKDSZRvazCNaiuvCEauQujYW1Uk6e1u9pwoYufgBTtyZZqfzY5j",
  "key4": "Zab84GuZgixugfzFuHZB6raNsVFLe6rAgzskUryiqjdkr5u75ejZgeKGx9YExmRXYYdrZ7By7wKRNJmhahvBsr9",
  "key5": "cn6NNuhp7YRj9yTBZuZujzvsTBiNMKgQzs2Z7RkirwS232QNyE5wLzU1joGNg7skrbnt7JyTZhTvh21qSN25SeT",
  "key6": "zcEAjGAtPKKR7Lj11muUYTZyKYV5xsQYcTJzvbnEm91zMQQ1FJSK3Y2ysuJ8fdsmyeX9K6FH6miC65QJnnBvNWo",
  "key7": "akufQVm4sMsBxqWirxNibXBJtJAhJ6vu9cSttE7zMwYx3G7RxwPT2veizwjUG3EbNE3DvkcsMc7hXMgXEYS78tX",
  "key8": "3FzZfLi9eaY95HrZUu4hsgwGtnPhVsfc6vpHgx3L563kYQmfVCtURYZehspTZVbH7tqAtThPtZNHH7Q37jMax9Gf",
  "key9": "4wjTQaCTntDL2DDw7xbZLdwwTfmfjPEcn2PrTbgXwtaLzhLAddJKkr66EHMoyotUsEH186dUmz1nevj2jWefQdBV",
  "key10": "4YckJJT3V39kANiaL2sVwsqYSAFyJcW8Lh9MWHUz2ErMr5U68wzGXVyynTaPbjDehvcdVzupDFppwS7QAF72JiMi",
  "key11": "5cq2wtQCrGnoDKdNBf4FZgAy6pv55yPEr673A6kWsTytgD1V8WRVfPUkrT8g6yYZ64fEs15Td36VcgjdjjNvQ5rk",
  "key12": "22gefQ7JwKu5NUxrh5esdG21odxEdjER2t4LXmErnTWatJHPaswJoNpHG7JrXBErMvSAT13JeFJ3JacoS3R8h7xb",
  "key13": "5gZZMZxBfyq4hXKAToheHbAvw2qyRHMSEACzWhSvQqKaEds2z7d6NNadbzbhUWSJTDaJiAMqCHGK91Vx6b4pMhoD",
  "key14": "NvX6iRbAw3YC8bPmJUnNr8CSWmHn8punXT9StLdJntS4Y5UaMZhpRaAZ9SoqadvTqERLMmQ4T72m5FfHnGbchfa",
  "key15": "4vqAHKL8kUv3EsuyAeqgdqbA72fmNfig8mipQbFjgqfm2gtynivUqEf1gbMbmFoA5R2zeU2JNMuHC7iaodRjbP5B",
  "key16": "2mfwfbmMBybAbpd9Jr9gru4YARo8ThY4JoWq4EPPVkh8JbrZvsnJzWTxwPTPVFS2gsjTVgnTm4oJnAMybq6z29w1",
  "key17": "5nMG4G8NTspWYK3xYbLacAf71Uv1nwjTrGtsBMZg8DvzqtyYfLSNgDjhVvJs9zQQziYFckmBRrrL9TgXJq1EYyas",
  "key18": "wXCXNqdDw9bBs28kE1erF4LuZzag8K6CJCwYyUMhfaYcEnw6z3QYUTEd15WNat69K1JJ1uZ1BvRTzf3tvRWcuRQ",
  "key19": "48tefPASzcF6vF54qWvHG3oMNchQM9dqPsxZ1MraCyJM8ihm21p5PDPyTcfjXwR6bwRgfFuK9p4SbBBgoN85CRhi",
  "key20": "tSZ9ybpZC3taZ6NQmXBg9WriVTk2dasgRviA2Krxv6gZjyhdDAPrXLNxzu1XRr7B5rQFdsPhAnzvfwSnzynCrbr",
  "key21": "5fHUGiXVVrcJndeYSkPRvivYp4bVdybNdM2mLWwKsqddeBE6XEkDvvmNkVZqn1dk4wGTRQWcNPAUSNa364X5fgnp",
  "key22": "yciN466bU3LFYEwBhEC5yRDeRNN66cgLBz5tpUusEC5cqAn7xS1hdn6sxGQ632oonYFVLoVurTTr7psDmFsxccE",
  "key23": "3VBJQhTrHor69vjaRA5rMJumR1ChHuBijvnZazxiuWM2GySeK3k9WtNFPr3RHotTthVrUw5zyv8CywVg1UDySjL",
  "key24": "2zY6vndYai2GU1z94sahyYxZTph3BVXUi7AEkUxzC95bDjsfKTr7ZFakD9qg6gaPMG9bX9usERFnRnoWq3rQGEpB",
  "key25": "2kPgXf8ZwRxzeEeYXEfD3fn7XGcKjoz4ArmUrd7Y2NUBkPjdp2Eg2tNMiurdJdRgaSAMJtYkrk2fgnAGvAzGfJpr",
  "key26": "5NZoMs4E3HDqEPWh1tMN5G8WMvxQa7dgkEep7t7goYUrEkdJ8g9pxh7JiFCnrYHGboEnEjm1ieyZhHyA6hGE6Dtg",
  "key27": "4edhDpV7TjoVHRskqzi6zFzQq7QjVW8LTmdNzTB2hqdiSfW65s8riw83LbinTH7tuV4QoNzTCCAyyKNBDptbLxaw",
  "key28": "45DXuwLFi3zFHBPbbCC7k6G2qhQcJQqWAL1d2zH5mf6w7DS2Gsii6SMHXyDZHEfzqghY2JbRjdZj1h2biSg2u2Ks",
  "key29": "4M8jZS9JM9bKfn18VJjkbqse7nWD7kDmKBxPnSY9j2PrMymAZstFPNjhUiLvDHQoLThMZbmnxpBcZV7GzYZohFN4",
  "key30": "4yymMfKy3Vi74Mju5JSfyd93z7n5zF54D5qfMD1FAbS3b2khgQRjEsjBp7ekWMjhVupsx4VLgdrypsjXUEnMY9qh",
  "key31": "Dk8SDPsvBFHfGH516dfCUuciKeQxLHexMxpqY3GRAbeSBu6xTypU64HzuYaEHPQLfUMvjy1MXAxfLTVU3PBigjw",
  "key32": "zxbcjANBZGvZANDFN3XqcT1MqUAjn1ZXdU2rTnHpE21oinPMAiT4edxUaGE61REcqcPA5Ha9sZmK9peKzpy2R8Y",
  "key33": "3MiTXyBuYntBFJVT5aNiYjEnLcuSPwh33bf3JMk69C1FoHU1b8XqaB4a9tEPgMMGhixt78GFbKjijt5tjb3KxLTd",
  "key34": "4MapFxBNbaxao4oazXSReF37nP2nxk6UsoW1sYfpBSy4Xzt5fWVDKHnNQfuAy1SXx8egEwo8dXAWkPM5ngtDUAqo",
  "key35": "4aEEmAFRdLfnsrLzGyP26R9iQtr56TqM8BzV8BUN2iABkDzNrF7PqFDbsFB6ejVnCeinmWJ6dsaQuKDyrQwJZpcy",
  "key36": "37ueDwdf6RfU3pdzfpg24hPhQaZ83WSuTF3pbgzoMnfHSWmjb4b9rAsJ3fcaAUVc4Cu6NwKbjgALG83tiQ8MioA",
  "key37": "5wPqkBFgXPmD9duqXLu7DStu4VFQiiMsk1ToX795btbJ9uwfT2MLzABtgFLgiMwAiS5cAUX8AatujcXAevanaa3",
  "key38": "14ntUS32DgBut62jd5u8nZuAXJzDbTpBcbVmgQC66N4gaZ1qYnCyYsLZTbqQySWiXwREEQV5eoCrVLDQ1rhk3jK",
  "key39": "1UNrfu6iySStG2WpkdsMvxK5HUAboErKqrRgGHc9L1m35bv19dqKfPkZfofiQzWJ1p17DZ2BR1HVDuE7zuHPjx1",
  "key40": "2tKg8gDzZcSTDkVhCi8oypQ9cNZYejSwJjaeAGBbhzWGGqHYkQYiMRpuws5dSDnrah65wjbZvWVd42gRye3q4WAY",
  "key41": "3zqzxQiMbTTTVd9oQSpL643HJ5DTk4ouEpX2sVJSnrxGN7ekXjubmoqHqCfwArRdd1jcUg7RC7xmzUmoayDqYrMV",
  "key42": "4H3Mmfww7RSJABQf2kjzD82xybGHLVyQXEV6DJuZaz421JMkuKqyBWHt5HgHAPQCDD9Bndu9Pgf3UM6qBRCF3bgW",
  "key43": "5QWHjjRPjLfFocKH8daKdv2s3xZBwB917uYcobqxJxGW2cAhbAPj6vVvNfzn9apUibEBdxWdr6xXmaeKvF8mQNHx",
  "key44": "5YxAxvhokBMWvy1sCuhWhxC3L8DZqRyBiJ8pD7B3YrN2M6TFxnyPLQR1C8qFv81tcYfukT9EWAANPc1LhTdWq6y2"
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
