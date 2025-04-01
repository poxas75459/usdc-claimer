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
    "2xrDE2PDEGuNq3FDqPhwNG3UzM33drjigonNbAYKe2YrdyAAWa7uPmSAHD17gMf79j4MS1fQT8G2G5TD4699V1Va"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EyKVe7Ay3RVcJQb2aFxPrrbVXigXDwg6xnzprGqW4AAndbkJzzJfkntDwAs2fFagguosLtaXMmtmapuezKBMxG7",
  "key1": "3vY7KjJ3MskW8oqsGaoVsFM6HXMqXscaC25iLBVocpgFobH1LNmAC5K21HzQK16ffSGhECoom3CuAB4mK5M9WQba",
  "key2": "3toSKVAU1MMsELCfgsbf8f5AUXSAc52ckGWFtWRDu3671t5FVtaoh3VxGPfEvjVwHvDqd7rbhbifuK5VmLpBePjL",
  "key3": "2YG6DJCyhf7oMjvqA4EgPfq3YMg6P9icotX4Ckf2QpX5UPLg6iik3YwDvRXRhhgnnzGctDtYdfbc8WykhdSE3V8x",
  "key4": "3AgrpyJNvEs7jHWGukS9ewYbLcyZznYjVJaHaxag1okVDfSxiuvuoTgRrTKC6pdhVtiMZt5rPThsGK5UNNfey4jq",
  "key5": "5LzxqdLfr5ix5szbypLJ4Gy6koPrTN5wrbDv6sQupADrWwq9c8tWCrZvF4W6pDRrpFDpzCzprT68xKzKAqEpm8N4",
  "key6": "4nV7WK4MhaYGHpePaeE34B4gnUq8dqhxA7wxce66myb5pc6tDxBeRwuGwbF3EAxndcEUHNpAAjZ5Q3WHoYkU6qWi",
  "key7": "CUPxZ5BsKXxKSdNPqcTa2YMrSU6wfEEgZBnNdoyAWW5moTzsNBhFW1zqkJiFu9NRzXVr8e9EnuFCMP8QX1GjtEP",
  "key8": "3dJ5GfPHsAxqBNiUd25oyRpc18abnskUNSyPBf1spAA6aDusRTPovk9VRAKK3ZQhoH8H3w3gy9wPdkKab1XhuGDi",
  "key9": "5JusB3vzTGf8UiUBa8YJ4wcw3Dz3U1oS5rZgsYMfDK9AWSjF9aJxpays9cKS1U8jgw68KyfvB7SkLYBzra5eN4hS",
  "key10": "3ZR69HWzV7Tqv9Dm8kEKrnkpMjqR6bH7kZdX2xMZwEZhwq2aR9Vw1QpP45fyRRxQxRuX3i4eu8Hh3GKnMeiwfhGZ",
  "key11": "4dcNqRXdJZy7ecnoY9cJQNXL6FHQeG2Feqg4d1SBXPdDQ2Mw2ujmkyp4A3XWbREQBCLxyUMKuvbjeMDQCQUEUCPU",
  "key12": "25o9158MeUEjcan8Xp21bvCuJAMbKk5pU3aWHvBw3miBiEJZEY9n7QqWZ3ZPRSr3bTzoga7PGRbzFJh5FDnj2xjf",
  "key13": "2TdbVkXoYcydi4cozQhTDR9C6tWgqzLmCQ6WpmPwfwjNNoAS6aLtF3KZeUdngXBopcsvortS8L8sJ1QeEfrShxoX",
  "key14": "3h6ELB1rpdWo5r1KqHj7eudSt9VDGs6X1wPejrtc7arothiBTDevF1yU2pSB6Kjti8XC8ttdVFMeZEyaDT7X9j8e",
  "key15": "4cbJeSuq5AUZ9jNNBWm7pF1fQf1ZbUvDysndxtio6hEFQJ52KAD4Q2cY5MAGmPLSKpAXZCfMeGmsUsRXrRnEgci7",
  "key16": "QkoJwpuJfVRskTEBbLxXWAWxgeitATm2J1f954djGd6CVgBA1keG4jxeMaZdi6XhE4i1U1WFmQEExMGMjsoXhMb",
  "key17": "5oobXx6jpfwu4bfRx4iA3t1NorU76DkSwojsQhJg5jPkimwBBwqTpcH6M6tAWDQtPocgEcHi9HWp2NxcqF48XTYS",
  "key18": "3aGjoXEj1eXByhfmUDaFmGzTFpbhLqrz6HQtTuKpXwJn6S61yG6CatjnxopJ5TZtdai1opjhkEffdUS6B3AygUb7",
  "key19": "2drVG8a7AS51qNQxN2J7xjf9WxSSsPPzgSaoxUPsiCnm8WRQtyM9KCpw2GrJJeWcKx5uZcNcL8UY5Bu8WUUPciKP",
  "key20": "3WnwMVuy5zMKCDYgXbqRmMsgebhyUAWJfBbN37oscF2gxnXq5G6UJoxCBBDjTD4CWZnU55s6dH28UfrJynkw71wx",
  "key21": "xxVZYmhJGZh9wLvobeiEmGV8udR3zQAQfyFg77jVMCdsAnr9vi1iAsS6LDohViEULyiFpSVraiMMHPGh8gf3XDD",
  "key22": "3PJxrvwnZZ4ntDpUmoyD7zHgTDpN6qyuy1A8zuuNdEo3smB28qgFkzFQ5YvaHyp6rBdYDXB9wympVyYetfb2hEJZ",
  "key23": "2ZDXp8JY9vP2N1LwyhvWZLWKyyC58mjeBqa2qeDAp1nZK8ss43tFGmfxJrBNL7ur13fqMNZWyFjpxtvZtdxphMsN",
  "key24": "2kQvVqcsyCzs1kHthPwQW7M5C9Y9k8id2h4joo5kn7pZKFnK4BhSkxrF1J6QNdwLTeRqByaC23rJLkkJPLB6Gw13",
  "key25": "5qChMxBSX541CkuMPmpR2hj74abXSR9rj223p78j5A537wJntLrk1DfhLJpz4JFC2yZhWKAwxLkB7WPQgUWm5L71",
  "key26": "JThUPknATpofmEfZh5hspncFkb4meWGpLTNKYmUoKMZuKux2vquUgWsChvZe8qGN82g8Y1uePis2TiWrtbwf2NX",
  "key27": "4fukEkiDkSc4SReJo1T6q2xw43hLAgtuQ6GkhT9454YhSLDzwRKWrTTRgBaRyYWcPZGwdhDUm1ZuBv4gCqcZ2DEB",
  "key28": "2jmrvTrCbee9y9n2oJ4KKbkDhRzq1nH4xEy3DSauitkj1nNrb9HghHEWcKopDfsDhcAQXyca3KV8NU8nwQYe5tP2",
  "key29": "4CvXUSscf2hNAEfLuHrvn8eq9py5h4MQYgQjF8NSM1rCu5BFugFpGh99NCMweevHjauW9anuuFhYGixPXsEVpoK6",
  "key30": "5YoxeYHzLFYb7pYDjCLMBGt34QLmGfHKVoRpFak127GVsg28DcYKjfP2uF9Ug17XeUx7Ju1dGx9Tq8EEAdp3io6W",
  "key31": "5wA6vUt8jvmUC8joEfeenAB36xWN5LoqSCw4Qf1tLWcZU9bKFxWfD3g4rAewHsfECF5vdiRAmFbMpv9RvAM2cgGP",
  "key32": "4bdbndoNEhBMmYHhqeyqtcWxypUujgXSLdo1izHRiYyjZJtaqSCqbSkU2Bq3yW5RyJo8QKDmgLTsSXG3UTiKcs8W",
  "key33": "4mtykX13ADSkop3EgoTwVH2DH2xPPZx91WHb6bFpEM6Kv7Uj69cCbMRA8hqj7zByDSS17GWC7CT83y1EMMzWSXQA",
  "key34": "4cDwK2vME9UuaiiorBJxpJtBCFL4cDv17mYa3HLhMszi22ijM6nKtivPc8VPNi5FdMdtgvRSNduYwk8XayBU4r8D",
  "key35": "4hzhFDrazmkZH6d1zdx3Y53GsME1YfYwzssZFLxpjh9Z3nJX4dfHePcYNsqoS5zdhf2nmz4Stc6k6gMFWyxFu5fG",
  "key36": "3A2VYYHyyTo2ZJNiTRK72BWT53aaMuzq5Har22KbGzWhbVUim8BViUGppwqQdv5SnT9qknziyu9ivea8KaSY3pHZ",
  "key37": "2v8u5EYCGvRxGYNjSv8njaeVmL1L51p5yWjtSrY87tKnhFCCKDEZ4TQhnupDc7UDJK9i5AjcNce1HBFBmtuBaksE",
  "key38": "3w9aT1KVBsspG41ok3jE2CZYWR8F4zs2ZLsV9tv1dGyBZzHuPFsRDCKmwjjcsPG4RPuArehh6tJ1RzaobM7ofusY",
  "key39": "4tBHfLKwjjqou3w8kbb6q5bwobcs2iXXDkjDHgks29PAioYedJwJip1ii7JUL6rdWP2ZwQiSit68d5MgYaeHSrR5",
  "key40": "3MvjrwkVrDEKrXYENEtAmkg25wVMBKyoksQmpNJcfhCsj1t7rq57NsALj2CwnA2mApQvH8qPYebdcAdJSo2Y32Uf",
  "key41": "UgRZd2zgoiX7fQjffmwBas2FxGauTnhvQ8wrNcYghFpCM83HWYuDDWxy4pGsBLVrWVPagZZnzC6sQBNnmb8i7kc",
  "key42": "3yfeHgQLP5oSHL9WeKL2QstwhNrNcwnbN4ufrhVnsDHb4S5pgTRjZEueBujXqAYansVXiRroffaWb9yBxnedmi4F",
  "key43": "JAAq4MMWer9onMK2jgsVzWqf7JA73RChBDNUeLQ1LpruBMhEJHBwgGNYTqRbhKzk7cHGoDLCq6uJFEsMTc8aX2d",
  "key44": "4pbgpuGzPLUQinChdnsJzfqq5xSRSGKsbCHntqo2eK8N12FczhmfNgqcZGCeYEaXnahuqNKKsrVQ5tE4Vfz936nS",
  "key45": "3FGooaHRXBcuTfRLpP8bAABYJ2p6mTPZ8od72gMetU6ZLmvriFBtua8pd2U5CKNYkhP9XuS26iQLerYPFNn64quG"
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
