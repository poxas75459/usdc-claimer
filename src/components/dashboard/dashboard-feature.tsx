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
    "2GBjuRvqFuwtud1HnxiCGUWzN88fzySyoZ5JjBr5qhRnoDs7dKDmpSdEDnA6FJgu7kgXbRFZotfuT8dAEXZH4kFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V5rHtFmWTC7jDPjhyHqLunCzZCZQPRwA8nSh4QiUvCavoBdQyD1g8R213jpDFs7NdDYrHcQ6No2L5LENP3RC12m",
  "key1": "4ARrxEzBcEF53aQTk8HENxvB17L3amZsfQJVKicPpfS281xcVpfW2HjfmTmezj1c6zqfGZLcaeCJc6iJGaexcHx",
  "key2": "3DJwptoAwbuYxEm9k2ucDeVwnY3TcZRjDCcjE4xiV8Pwi3EFdHBemabt6ySb961tVzAbZ63pSpANM2Lwt9nE18dy",
  "key3": "5hinWNBCctXcGkFKWFgwdLxiYx5ZizgqcFPnjBUieqYfCYqR5QjLKpsToJSXqyXHZiZiHAEA9bSCJjubC8ncsVzT",
  "key4": "2DaYZepw4zXPgT7gMryevgZu1QHPu6XrY4voJTj1BpSseizwxXJ8LNggAQ8cp6g895jW8fWFQxJSc4zvp1puaKKi",
  "key5": "2hLJQemeWAc88RcffwuuA3nTrYRMWAB1RtKsNTa8vM43gPEKS9QrB9eKVuWViQwPuzADPbWPdhS3PRLRpa285QT1",
  "key6": "3aUQiSukULvBtRnFFtv2tbkjX9cNF5VHec7gBQZHNLxcg3rADoioz5Jhv1wQUaaDo69Ca4CvcxNbiJPKRxBvAwfr",
  "key7": "3LSEysaaLF21ZS6S8ZtXgUYKuNXyEHDJcW5vuqUVGwbup8fr5BK8nBAd2Vwsr55g4kJ6hQ21oYqo5mq8SNo2mxBh",
  "key8": "2GRhG2tVBjUcZQCapfYAnXiPMg8cip9jqpsKooFrDjh9XKypfCQYrgX7hiEXUn3v4yhTPqK5QzxQvuiqSRwxLWSn",
  "key9": "8E95X8z5pMejyVfKCKTqThHj9VQwuAm1YyYuZw8sbe4gHkzgMgyrrsHP41CP2wMXXDpa5io5DYmKxSEbpcwp7sR",
  "key10": "57PH9ktD2tcsTPAtUs6zdcsyKGEAi2scekL8yobrrL2SkCe826nAXEFzuJMRZZzzrF53yxLSa6T3Bh1EEHm4C8Vj",
  "key11": "3UKJBivGqWZKc6dBb4mkBuJueEuan1yYVh26BbsahbiDoUphwWDvS7HGZMaiGHkPh5J362i2ep2FHLrnzZqoCNgJ",
  "key12": "XUsrrq98JYLy7j4PLae1jyYeydpLepeggUG1b1cb6qwVZ4iw9NwrN6XTX7qEo2r57mBFw9Mk6EC3WdeA8t1ChWd",
  "key13": "4CiKzfBvMAAbSwJhCkUsFsnfGTbAE4EtQ6C1xGuxTy1XrnH3BXvtRZ2Jc3ifLzD4QbwQgT9WLooe1FUnCZpBHQXN",
  "key14": "3VSukBtQ7sBbfoBBVWRPoWL7gx5r2Eeo9c3Tpd51A19FWEqsrJZdjV5JdY4Aq2wuQydeL7HB96FDfUpgtpMj56Uh",
  "key15": "3o4xuZFXC3sWtQHYFdAPKUCHZFimKPbZFoGSZ2BC6dfsjhxEUKmp8pDeUv95w9JZdiKaCT3ZmTX34vtT9LeC9J6",
  "key16": "YCC6MvpYLNxX6iZG7NC9GhPQyCCcAgUAZd9uPnQcBRTdj74oTX6Qio6akiozBV8qJAALEHsz3mrrAk81L2nvujX",
  "key17": "35v4gA4NW2wMT6qiEMRWZFv9KwRzDWB8Q5Zdnv2G2eS2rJ7wtwzGTg2MUkm157BGPrzhCbxJNBrrjkhBBWtTtAG4",
  "key18": "3xQq4uczgq4xnZNApbhpGTh7NEZH23gZM2rj6xJxJqTmHLdopvjahWaxd7NMdNGNUxzGb3JmE2UVPvkPZMqswA5o",
  "key19": "3tx7rLWtDLFXEAnZC5ycuSQqtCqiRXJGk42mCuh8Us3v4Qc6g5SghnEsw5z1FeDW26q5MzphciAzjHBDC5aBXBC3",
  "key20": "yyf9zo5feB76rZA5g5N2g8Zsrfp1BKeixZAmsBbH4Zhfse49rD6a3HRqB1wgzoK8uzoAwiprmZ7PpWSrPWJgfoU",
  "key21": "24JamAkzXWTZMiiEHn6p2Pf3vmKshs7rkYiq3krt1j2x8ctcGY7bfxp3Sds4RKbYMoGGQC3fgXzW45BmvUyejkoh",
  "key22": "2v4uzhey6TEgca7DrNrwQ1fTHen3vKAqvY2FaVhZH1tno9J2inEGip3Zu1u1teCQRFsSmLvpmuddCbuYVVrvX4c3",
  "key23": "3efZpuQRmCDqjXi9pvN7GWXGA6RCDh3jbmtHxyDj5gJEhYdNHr6bfSX1gGgokSuSm9aasz8bFwkW8C46s8HJGJ4B",
  "key24": "QuGc9qwme8Z3md7tbNSr1uRPGaHT6r8k6By84hEK99HuAqzKFQiXqMJxsJb3H3jL635c7Vf8NRyFttubUR6bjeV",
  "key25": "2W6UFyfUAmvaFaDKKFuLSiDC8QEnP86WwpsyunpLoMyzAi9gnwzYkBv8VCx8fEZtNCJ7USb8cRggAQffbEzRMnXa",
  "key26": "hFgUksx9LFjJNc7TzTzmxHB4NRkx4KpUX5oGBCPr9xJC5Xt8JzoMQggrWnau2o2hnHM1vuAa1b3fGUvff3qYGEp",
  "key27": "2M6vhg5k9aZWXBLnU3a3MwarAkSyJGDjqGmSvXB1C6vDsgH3PMsVdbEGjZqMmwp7VRpaJ9JnjT1hKqhH6rm2vs8x",
  "key28": "5eZnCZU9YhJaM6NQWMaRZ2EiUjhzrwxbeMC5Yr5u9hY3FjBG8JJjcPwDFQ1WMAR1kzjQtRqhEpmJCszF9wYTRqNT",
  "key29": "4Kvk5LeRi5H64A3KcBV5AEJJVTNeKULkRjwpxwLfSwvDypTnJJ91fmyp28DfMdmX5KXYMF9GSVBjEfDVKWiAiWtu",
  "key30": "2ZGStEg18AepZ7WsTeDPsXt8YUWLZBmH1H85mjeR4BRHy5onL77EcQvZgyBaSEv1KRWHYkqW3D8p7ugKAP9PceNa",
  "key31": "42gSFY7F7n4Zkk1qxBK1v46Qpy92teSsoFBihDnTRfHK6snLLkgz99P22nuxd4AwZcWnsQBdGfiLPVNW2x9Eb9Kd",
  "key32": "iUUTu9CE9SkFgjhh9HfGP3AyN15Bz5NXnbLurHNmLXc82Wv1KDnKvDNPcNnnqZyd1YFs5Aa3Wn9GV9odTkgndcA",
  "key33": "2S8AZ2dCADQbqPBBK2DXPHmsmQWqmnkChUum5w3BEUxv2rUz12fHWsjjX8JJL3vUcQiYviZEmwxHkgSih7Hr15Nm",
  "key34": "561JJcki2Jge9jArkZN4RK7hjZitgyT84YXw4EXHGCBcDbNp6U6NDVSh2FfBqNdxkbu5zV75EAuGcCdpDFgH5UBe",
  "key35": "4VavZ8xz8LEKmmVQuVQbRuryCBidhwdBHewJ5WRZiVGvD8SxQPoYfzs9kXjRQ1c73nH3kNE3aTB9QamtnyTyhJan",
  "key36": "M3e9zxxfWh2HL31wpsszUvCtcYL8Ho6U6EYM5DtkfDSofgQNqiQ7jbA319p5V6iHSNowACgHGzHx3sV4jbgQfcS",
  "key37": "yhjX1v8QpMea8PSPCVHKihoxUcxSruGpCzDGGxEGt1G7wJ21CsijiNmRyyQ7cnNtdEes4UkebLnZpfszKDkM1LG",
  "key38": "3o5Saanwzoc3X3SoFSpFHh8bPFzeCWVAmST6583JHp65198d94Yv9Dd5tyiSdbMiHL3QQkawz7ktNuDGtqCTSLDT",
  "key39": "4dmXqFRiNbgWzr7cJNWnzoDu3wuP52TAayyZoneNgrYyhzgBq8R2ivzebi3TAMUoQ9iQJ7AXH3EGJbc7bZ48WAKM",
  "key40": "4Xb4isk8e9wWvwtrS92epXgQqFMZ1eAoAPGHoB7LFh1jLciKf7N7gN76bW4LeiUz4BDQe5nsLs6xhz2LxUyTntCN",
  "key41": "5wN2QpiiABDR7Z4kgrL9Ts1Md1FDCQLVFT3yNUJAEGt1rDfm7fkvmBfti6xh14vy7oBgvDYHES7YZ4mcdLb47KNa",
  "key42": "4pg84nZYjyso4byYdAt3HMbd7JsqVXkuzyEAe2LDmqpjc5VVoNeeq6EVtcDBrFuTZoGMLDG1GVUKsdjpuR3PHL1D"
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
