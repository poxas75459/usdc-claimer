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
    "58d3A29rNpvoLNJBEvasEWyCaZgqgziicwyBDaZhDYUVJjq6PteuPhxDMB8qdd2osRqHyRXVT7fpttaa1DS6kpPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S1SzUf4uedyFwVKWDQw5au7KPuKACq83cqqoZwFU6g4skJj2CD64pZ6LrMKfHa2xWN5tySc26bE5YtJpUySc97U",
  "key1": "4BybEmw2v9GX5CyFXd3ALyvHdqB2yMWBgdDk6HgVpb8FoHHhrDkdNjiMyTSXrcM9hPs3LW3Ubee7Q2tj3YZavpiF",
  "key2": "5RppudVHVGkZ5sir9Ljq4AJxmzTbMvC7sEr8bikiWY45raP46edh4654cQbnszttTYuA2Q5wMZMoj6TapWbsTaMR",
  "key3": "5QUuPk2rsw3SnJyknHySkzrxZVzx1byrfaoGjmNWcaaxVgqo4BzSzABBksCyT8Aqb38ohfZcA8Raj7K8fbmviHQW",
  "key4": "rnf6XG3gRtnHqKC1DpUD1y9DdP52DUxaVjwpeV6QBe9Js8TiG6BKpbK8tRCvpVuxSPisFDB8xUnpagdDpFUDgb8",
  "key5": "3ZRN9nsRths9EWd6Arm3Quzbafzd7WhAKh9tdtvtup3T63max2urMjWUCsx2YvSp2pEximsnGgn54eT823G68He7",
  "key6": "3ebkhqPHTjyZ2mG45ooCiceyePZybf8FB2MqiDwokcSiYHkdgnSbho7HGypf7Pp5x3GnhestBJAceL25aEXAW8yv",
  "key7": "4ZTVk2Y5w2ZoQdwYAcLebp76hqyuUqUnCZWKxXwNmJW897Yikt2jLcHxoVWkfvHPJujBFLSYFgCU9x89oLr7JnLp",
  "key8": "27RNuqbz9RrZ6TTCHLyz4Tq9GYmCk2YY2WrXEyfXg4imGBr98sF7s33jBxekLbPVdYBxF5TfY1WGUCTu5nmJGHnf",
  "key9": "u5YiX4zXJTmcfyej5fCS6FggGxdxN5wCDKKvS6YfR76hp3t8PpX8j8eM1zLnwfqzA9smFDRR9Dn2pafAjKRNaPP",
  "key10": "4LSTwWTMHEDdH24iuCWqJSc2abYcFd2t1jCFu6Dbvc3sfQxba3FNQEiiz5ASnPvYHCPFGPdEzz9qzMkigSd2UWwD",
  "key11": "33akTdzCkmzbzFrgT86YaWgRPFwSPKUHdhDzhjfgXq25KNBp9Zmznrmz28kxKcmQsCfTyPiFM4bCA9jHJXaueCfJ",
  "key12": "2x4yevpXk41Qc7sZaRTrejTn6xHj7r32B9tThNLUCWCGQ33LsQW3g8CsJN2k9ytAEpAo1rtHgxKQ8t2ee6yaNEJN",
  "key13": "5eq6bo7sYEUz1vbhktV7eoegRcwo8KHpHfvhbVL9D8f4GPWgHFKxUUTPAxEHe4aGRzTY7iHaNr7AbxMqGGwncEXn",
  "key14": "5gfUFrPKyk8iyCWEDuUWetoVAn9BddWpzQd4xWianyZvDv75PtXP3Ay7NLtLGJL8mMKtnJBEAUYCoHoEKgG69y2i",
  "key15": "4jKFFRa9PSSVeSx1y21zUp7GGcxzuUSMVKn9LSftQPT2ExKiH4bEmY8SC7yArsYHrvF5uP96gi58kVeFDgjCczuE",
  "key16": "4dixqbyTrREbx97yW89zHkw7J7Sa1ome9CZ9zVNykBujxJUVbSoJktWZNFUq4AVDJEoY1vs6BHKpKi9T1U9jnZvH",
  "key17": "2qXFciLSBTm5Bd7nKdeuhtN289zkfwrsoUS6XyryMVF9fJxwN1ryrLnyNW6pFhxxGgXekhvUR4rSiFZ3wJBNymyW",
  "key18": "3dgb5FkRwDcyz1Kq28yevPnf9WAn5WNjsr4eRXeruxH9mEJuqDftgZFwpedK2DZGhBeSvN69HpZrChNj2aXJhZBL",
  "key19": "2wum5a4ct5S7AFrr3f59me4Liszg2VxpdtLLtzR3Xg72JKe3oj5mtyew3Wina2MUn8ZzWopLc58mik6182rkLPGq",
  "key20": "5imxJE3zcrbkNZv3ZKwNFZTJz4JUjC2hymMhDWbhm56W2Kc4j3iSG2L7xCJhqGVUyhVVshgavUeJafAgXRnKHpBN",
  "key21": "5UVppu9ubrK4cVtwYENCWTDduMRwvDKzeb2ShvumU8SvvGEWV8RvJh3uWUZZwVwPA3XpZ1Kpa8ofXb4ZV7ptdbkc",
  "key22": "23EBrRnDrTF2zdtLSC9QRYi22KPgbrgLiJpFVaAj2Kr6JxoH6Q5HuRNbehUhicZtGc5aWfNPxAJpGPqyHeTztmq4",
  "key23": "3owMNretFc5S26oeQjCPwKjCxGkZw2EQS3EK5Ve1UpcwDPstr3MFGx3HcedqGSXUeZd3entFWaFtnSNKoxKyau4Q",
  "key24": "3YuqJEGwBcwzRx5yAyEPMhfvNkVFiMoLQLRkzSnRuYpKYGbjMNJdnWj6Djs37j6x7HxwhgoDBw75vR88ZWgoAPgX",
  "key25": "3MNq3wASUHrRcwHXKi7n4JeuGTzktZwERJ4hQZFfZoQW73mXcgig4jL3xRR5Z3rikbepeTnhqbgzWAmjuQeEUkqg",
  "key26": "5WFtbSfSahXzk3nq58CS9FARpWzYeChCbufQrt3oXfnhWDFVVKkGMiA84QFi6GmqR6qqysrHvfBHJZcMigeku7aS",
  "key27": "4RZjWnfg2an8tY6pHpkrmJ7imcXTyHLYWoHzm9S5tpyrwGgFeXQy8q2aB3MKrMLMLWCKZuDBeBrNVVeZW1bxUMqX",
  "key28": "55YwWAY3NojabiZxspnK2Cc3EvEpT9H9vXGeF2LBKJbuHrJHcz9JJtuPRMmbLYoYJzPQjF3mnLCMHEoxAY1iTroW",
  "key29": "4MuxVCCNTxm9c3C7Cqr1P6AnhKMU9bPmn84pxKPTvDksZHoUbDT88x5bsc5js6C6YDfJJV5qiWwgREHFSYqwwF4Z",
  "key30": "Zb7Q1Tx837pEsaszeqovEDmDFbpVvZsXt2vpnNPapTrcwfXLDAUVWzvUVfZYSjZngSFa6eWEGjdFFR8KTuPJufR",
  "key31": "677wjwfrd9tpCUfewtzBWoBVBmjKCqHvT8a6Ky1wDk3bD8NMCmX5xAtqcfe4jHXJWw8pm1rPqogghZBX6DCBu86f",
  "key32": "51jisuFQPpNFH8aZurWSgeL3aaqi8k4e36uBcK1SumZEm4sTCwsPb7rS1jJyuSWciHRGzqAWcLVPp2Et3K9djGQb",
  "key33": "4k4xgyziW66B5JX1eZyKykD4md2RsV82tNcjsfYVmJqaCqyMnJas8HD3NRuJBBF2xXK2NgAVuixJ4s2nvpPJWThY",
  "key34": "38uBJDmNSt6ZsUiaEHcQwLiCjVoUJdeJLAi56Za8fDfL79VP25ZQQk3P2EH6Aa5x4ES29sREqgf677yKUWJV355V",
  "key35": "29KzsMef1Y1vnSpfHwf3iUxU1qzBePH15e22CDf5DvWyCUX851BBXbsmzWjVzqrYP9jDwrsg4rkFaZuc92da8YC4"
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
