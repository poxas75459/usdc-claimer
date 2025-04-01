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
    "3qWnTZiCPVHiZ6djb3matCGUWu61e5n8bcpCMASMNrwcLBRVKbyx5Hwajhz8K4A9idiydnT2vKYFgQeU37ZRfEob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rZnhUxAWcV5Jw1TLetGyRZMeerqtp8Cq6Aqh145FwLiCpQQLCxccUbDv3u1nkyoFDcRGF9sFiMWbwxuvTKYQ678",
  "key1": "3N2a99RB9wZCrmP1WXc7eYVhn2HGs8PYNe1tEuWFH3NPk1n5wnhwTER77ESdHJt29XbpNwLP9CtSovud2t5Cz6yB",
  "key2": "3NoKwz7qaVQDB7WcT2Lc2kEiaX9bCyjG3HrfSXSZWmAeoEPiCS9xbQYyYQLDLu9VECoerFdA6b2NMdhw1mfYjWro",
  "key3": "3QuWBRqtB3pJN9vFGwNWqZhgYq5GS2esFCavYe93Z29kcq3x92qa7Hfkioo1kGtJ7B5Xn98UKn91xo7JnpCSt1dT",
  "key4": "5DG1vXWTY6Ddugv3UxpSKfz3Ju4vc8DTBs7E8KphvQjg1pKZXu2Df887m1ihyMWgVgkPZFhb9vsyHwnE2rDqyhJv",
  "key5": "4M3V2xQrhne6fd6QVqToncq5RLWowtWXoZo3RK2JrhZEDGMkXu7ojDaQoY322mh6oVjwdyyL5ELcUYjVkqmtsprE",
  "key6": "4FL8jEzvGbGNogw9GmyaRowvquEuk4jVtz1gJYhZ8spKXtwk42hS8uNUx8rvS93xLtvjjcm6HqYqP46LRvwoUhUL",
  "key7": "645gnNCbqSAqj4vxAhKaDyMv4ppHhz1m9awJJc1W6JKtZF8rykq6mQ9v8drDAUBS1qXw5bZtC37WhB7yZUP9oJWU",
  "key8": "25jTzALPUJZePLnrV7fUG65TtK3WM4vPraDjjGheys84vjsozEDHUVU3tEUwEe4LThsiq62z1XGESeiCK81LFBQc",
  "key9": "58HzvPFvBmFBtoqR9bTVNr2gYQx88SdrB6JBn6dXEiATDWnb5xDZf1zJ3FMn6igh7pFpSuyAEW93sM4HPBFf7ZtC",
  "key10": "HtH6ePosSB5HEgg6ekjKTrCrpNn8H3dnRFYQ3du6msJLpf6XCVZ9hGTo1gzPt6E3cqHDKQsJ4b5BULEJ7cRyUzQ",
  "key11": "2GgNAU2JHmA9w2CqxG1UsoPnEYrknk5CZ9nTCJwfLyJ1ffA6MjVqBiQgM4ZsVW2DZMCRxZSMq1hSZETySofkiwyC",
  "key12": "cH3XUkzAwV3zAmnDj8y4FYRqEdqxdVbkTnsmwRn3cGm6apxMDYRnyweY1k7axm89iRdvoDwbHJgub3Q1qR1UYFC",
  "key13": "2ZBqs8HJfok6kNvdH9E9K6nMje8mgj2ZmJfgsHhKwj7ZpoSPhLme5rdViRKr9Ec1pCcpwfbN5EGzg9G2XsmhkWA2",
  "key14": "51XfC8uzRzW8bGrVzreMu78EpAW5zG41qPAfiAwBvEUyfvEW1JJRjDx4c625YVzMgfCcNjPksVG6f4FLRUFLKB6a",
  "key15": "2GrFF871Kp9iXrQ911fXNBpKAyNCj9UgR5ts6Xx8JGAyAqM6BwN7KXRXZ1HkwTVyVZcMfzFpmxiGjffiXF4sRSBr",
  "key16": "61ybKsRhtjiefnsaKt2m13emgvVsGXELgiPLh5uuyPQ9MGjcdk1nQQW3g8YiHViT7da22PdQ1is9rnmfUzJWH2Hm",
  "key17": "57yJgsmRTMxCf1hpZHjA9tmQkPJRiKGxYUHgASWFtcs3WdmbpCAE2upMkwVqNtw4FWn9gxfotWWdzb9uHULxqAjH",
  "key18": "4ntZyvixL1jR96FpSS92W1xPdmF1wkZSNNh3tKWCRsgbiBeaA3eJovwR9BpbzwotwtKmFGYB4vudT2qmH6qgZGQY",
  "key19": "8ENsV7ZxS5LDFMgD7LxZJC9xn8tp7opcSEoo74NzXqdu4SXsK2ViytaMykHYmwYTPJaoNeedN8QbWbtBXaYPk2E",
  "key20": "3Wwwd2as168j3q68UjHwNotz32vyGD2HZegVG9YNBruC1dCVzgXX7VShpGMi1No5f5GpfUSGMrb9xAV1iMapCrzs",
  "key21": "3rag78WnhxiKM8jJAaDVCmo5qPT2iNp6oY8VJSp8LvsqmXB8QuahFycebxgaHb3pVHMqRoZwnbaAraW3AYERkKZ7",
  "key22": "2aYTL8Ah6XwP7AD6pKKDx7tHphmkYp3vULukuQruBH6NvUJ75JSt1dZtQAt84Cxbn2fUJfxYEZ5D6JeMvETcC4TZ",
  "key23": "4KEdQdzwqTXRggs6eCQ9yqgbMuszjPw58A7YbviN84CBMgpGkb9yvKmAFuuSqJavvZrzcTwpDv9jkJjQdfojpYN2",
  "key24": "4PifQV3wZMbgCo1GNoQfBANao68ZhBYDEWEUWtjorxTUwzB4MoTPC6nQG8B2dmraByiTP4tXmH4yDp5y6aD9xXt5",
  "key25": "2CeUssGoRfvTjqNwcisH94ZLUQSddNv7D1jLMVm1UDiV3xoyACkj8tbMiBE1646fvm4FHhwycNpMcWYzCLE5k5W2",
  "key26": "3DzSdVSJ4HKELrWW2T4nAgXtAtekjcot5m16wE4YENTCF1Lz9TEV2PYqmvWjgqc8KDcVs3Re2azSBgQNRJHmow6s",
  "key27": "2vCEfjuMCi9qJBnvuq3rgJymD4fte7t8Q714pK44GpdPeyPFcYcTGMTTg2V6tEGR6xSBniyiF49xnTdrvswSjBCK",
  "key28": "56di5pzkxej1sZX4j8CAc2DPuHqnrK71ygH8CQ29n8tLJAvR3LbopxgPudiHfehRngem8Kb7ABsg4D9MTbfGPo17",
  "key29": "4aLJdTCFF9NBSWRJ9ianP2APvaG8xDKoKMrvHh3p5649DfcXGxsVzTgToPMtRfGKqSMHTLUQXSRPksrocpDhBEA3",
  "key30": "47RSzyQ1vaf6aELJFVJ7g1rherS2KBizKyN7Xh9ALuTBxNqEoFdM6jLGitqfHYy5diJEdZScHiAZo1AAjHVZhREx",
  "key31": "5d6ZG2DFwSg3ja6qPUKUTQMumXpypWi6r4FxSHGDWjZ6GCCiww24SVm8j1hWksgTbtwrt4zxAaKSgHe55MkzNHUL",
  "key32": "5BedNVcJofR2LATT2SmAZNgMjYE24s1Xp2KYRKrAwA7Dn8Uwy77axf3fSij7byWjm5pB4s3F9EFLj8hGFSnPXvuD",
  "key33": "22sSwhenZGrTX5zMvTxcbkFiDpeysQmXwqLvhrshidERcJR7PGavGHPTvFUhQgjNtAs9tPQNnjePZB34L2zSUdgS",
  "key34": "3PeyBypRVPe5iN18ipP4AmbiMNsp3FeCY43sbqXbjsGKftm8yxJMiwoH9g4izrqX43JNRoPLtwbPkYZQjYDWhbJa",
  "key35": "zDwFojpQ6qQKXqnSnHFxPm1iVuBNLUsYCccgYsumzYonJnBR5c9ykNHK4KiScwcjzoamWsSmzNa1Px5EP8GLv7a",
  "key36": "5NdjC2y58tYNVuzdh3Aw9Dgam3MAYwMUrMHf9s9tkjc9qYCvBZbSeimEUqd2wE55GaNBxdCG3DKpaDim9ayPRrm"
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
