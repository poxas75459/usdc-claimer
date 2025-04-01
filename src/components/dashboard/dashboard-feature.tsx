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
    "4QuyyALiSGa2RfNu4M6tABc3yoGog6DSUVjJEEhRViUx5NxedQfbWjgv3G16QHRFyETxebfZ4Uxzpdw4fC71C7M9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iymPBigr3EWN1iAYuKJYwJCj4xb4QM4RTeQ6HdpbbxhJUuFKHrd3Nzfeypj2Jhr5JnfBEGdD8V7LiA2B8Brwc9h",
  "key1": "3vx6TZL7zhLRKRRsTsKhKrvDMmr95NxoXBj1v5xRbMdMCNEcBmspHtvxkhvksLKT9yrmFTkH36ZSbM7jNJC4qsCR",
  "key2": "4dFVTEH5osRYV1U4MPiMFK4ny16894r8TFkiGDeJAMVjcPgMC2hzjwguNhd1V38EXJf6eVTtdFzrMTvxPijoFrmd",
  "key3": "5gDR3CUadWLNHbsJHM1jHvCskGYFWAEGm51qqnM9jMd7yeYupk1yEXGwx44tDAQGBSGuziCBpNcU9pXUZDu6jRd6",
  "key4": "23NgHFYRWX9AEFiz7XUpYcoJdLFZ4CcT3DRqmB1nK8oWWrihxYTdah3NUbhZWDTkZHp16BdperkVdc2Xa4jBNG1P",
  "key5": "4kRgsdKTeeBJiYxjV9R1rw7Uq4m1fBm8Duuq2saRBrR4QbR6nnseDfDW2Yfkx4vuWHNrwPFYWkhSHsg47z8ABKNj",
  "key6": "5YJFBGmxmUP2FVoHiyWMn1AFcfjq8CT63cWBeoVqUfQUMbXJALCy11wUFHEiq5zMyHW1VgEtumw6yzXWQB6WLuTs",
  "key7": "2dukBTiiYdZBsakV5b4zdFFPy9L3KP8M4TSXLxAt6sohL7jiCYYmnW1XTJLMENzq8k4zwJ5eu9myL2yNkHjV7T7k",
  "key8": "5UWv1jFi1PSxqrXCyd9gDg4WAzAuiLkQ7nsZ9bsaEDq6SgaNKeJ8PMWh886yL25mpP9NENiAj9KeL3dAF8Xq8zkh",
  "key9": "2rCdxhXPuPEQPSZuvwLds3kEJB9HeNYacs5hcdhB5q8EanrqrDQ3HaRNzUfWTzrrAPji2G4UvwsQDQjmEnD5fcbt",
  "key10": "36spo3CoQwAva1uuwwTb6H1UsSpBE1iLcZbpvkMTvYKkcGFUCGNJnAMBKtLtgVCBwf9Lg1vHRk9JXrsNVaHiPXJ",
  "key11": "3BsEqbRzZeQWJXtaS2T4faPYZt1eAhmrKrMbezLLzdJhTym7mivFsiBG8A5uioyLQsVyGo3bmqF6xnnhLw3ubM7i",
  "key12": "62oB2xUHBcdE97hBkpdxpQWdVNoXtrvbzSCkSFmR3SEaMmsmjb1T5azpHSMcMi5e6JzwLFCwibwkCMQeYqsgyZgT",
  "key13": "2gbSewfQDutm7VB5DdGMtBqWZGfeVkkEtCewKAByPgvi4BRsDssGC5HZ98xfNJRUGge2PAtXvkdZQGmatjvMUJK7",
  "key14": "5RRPQWm4kyDBD32B8FVNi3MoyH6V86dWVzB7Y98Cfsj8hkPvmjhPDcjtCFSrBekarqKijj1p7HfebZj8Beon8krJ",
  "key15": "2UuPmWMwLKQSjhX6ERQFS1uc8ereyYdGQJXY3bQxpFiw5goe4wnBhY3Y2Ze6WswuabbLjyP6XoH46MsSgbjSBUja",
  "key16": "49V4hs7fWxW8CqdaZSW4sbKfYChbegbbfLqP8beNUdnG974TViatWUSP7YsmcPtDLSFfdvKVWEMEpSDSTwPbRiMY",
  "key17": "umZ9XzmJ8GaUhBNUQJear61SYnt8MrwLgSatH29iCGWyWCTYEb4q1vRt6PLhXUyn97yBxiFxvsV4pbjQwPnFs6Q",
  "key18": "2DPVpmeoLk3fuSLxFyCxxinhc9QLZh88YQLoWToGUv1LxXsrjHqz1XYEfjZXy9SekZHpajJEpWCtExmh36wTL8zP",
  "key19": "dTqk65Vsds3pu9dCrksjKVmbHELYP3mfyocMESiMXocEqp2eBoyXpB2QvodVyweeR6PTA8w6CoijUVNmwVVcPRC",
  "key20": "2SxwkQso4QxnJAqLKRRckAtpGnrBa79foqQ3tysr5LVKoa4TW4MvbuUBfDERyaxKuE71EvffrErfrzoAh9BNqzoo",
  "key21": "4L9LjS5h5MiYFRtW5Tsnau97Rqj7W78f2BfW8JMM7KeTyn1ZE8vrJZnndMjXhpPB5kdaJYMehi9fBNneG5viYgWs",
  "key22": "5YfHUx5btDrV64naFWczpzVQZ1Riqr5ZnFCtR8iETjyzNCemnmfCusn9Me8k1e7R5YGDWr39443SDuoYtKMQRn47",
  "key23": "3et7FRKS4dTjRKVxqLo9VCyZEQti1hgjucYKaQ34XPRD3pBX9iciEmLQqhaw1N1rdQGYiVChX2MYcHETtyG6ZzFh",
  "key24": "MGHnZHKFGCwSyNQu9VnsQy1zeF4t5SvQdsoskVFS12u1BkAuB6opd7dZGv3meZrwRPTVUp4KoakapjSMMy4s8ua",
  "key25": "2WYmx1ZMEXSiuJ4x1iwnGKcxvZYivy5wLRzsx19w9iJtDiiHA54G3eDfY4yPpFqr2PFFHsLT3dcW2c4Vv6KJ6DEA",
  "key26": "51DEmyXr7sMunjwicRCuhzvWvRusCBL9LWLcVcdDH5e4naatuEEgW7MSuN3GHFu2LnQziEgmWaA4LHts8rtSesX6",
  "key27": "45r9TgL7uNwneVvSpz9Ravb7dqi6yX3uxSX6kVJzjtRqDfQXrfxpEK3GzUUw6HVdHxWc6oxVX3FEZeHpX1tWE1m8",
  "key28": "3LL8sB2bs3hFpxaU8TT5a14JdCT3bhuzLttjDWVmw2DmGjYRBBSUE88vK8xLtqExpVRv4kjrWBgp6kLcw8tmv9KT",
  "key29": "4qsV3Tk9tVq2rhjmg9xVBC81ZNJnmgKvv1Q5hX21KpoTCn7PzC3hiFwZxqL6vivgHgHTPfxHv7oSe8qbNXeYXKA3",
  "key30": "33mZQvKELoXAALyYQ67pzna8LfXNU2QjGgjtmFTXngu2MtVyTGgb3xghfZ6TpqHy9gVvWjmjdYGuWWnrrwDDgx6K",
  "key31": "4ZyqesYQ5GancJXpS6N78U4hrcF9iRWw4o1F4D61rPZQ8k99XYWLWdckri7zRJo11wAn1sKmAtG9ZpF7VNLGeMGJ"
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
