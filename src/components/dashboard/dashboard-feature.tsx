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
    "4HiUuDaWw34JUByvMUQBXwX9kiSULa9WnxkZERuaskuXWa5Fzfg1HtQ3wkMTBEpDmdkt5Tz4zoVv7P6t4awHeDUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FV1pffT66Stqj734kkC2s49ehUxGKoFz5DjWmH1AZarv5ALK8M9Z8hVn3AhQePSS1UFDAvoviTvo7xxz9JwkmrF",
  "key1": "2kGHqXgSt6Gd2Er1Ddj38tTt7sQh58sV6Ce38aiTACpfRMJ4JN8wg5xYp3MkPwNvrtdvNn3Rbq5dt8dHDqjqS2fu",
  "key2": "2pqFvvSzthekYLY7q1brVXUNQxLeC8iUT5j793zRJsnfpmBZu6TN5sJmJUFBSUE8gfSBdisVSXLrEJHEjdSiQScJ",
  "key3": "2xg6zvNvkcuAffCBNfBwmDpKtGttqgo19bo4ZptWMyqqWrurSqvoVvZRE5zHPWrY2PPbdNcBzovu3mSApb88sqbJ",
  "key4": "4p78jPLaHPSvvh1JWKM9gYN84LvUXTfKeZtN1ZPdEuSbWpT3atgvNVzwhcNLP8Pqdv6T6vhgBZg1zN31UoYLRh8d",
  "key5": "3i6e9mnDF2CqVQTjXxbDacAxQdgwnamqZcLivBgaSBZLftBTDa4n1Y7doj1VazxyB1mdTGYioHqSBL2nUg3NJMXH",
  "key6": "5ALtmeG9ryMVN81RQ8eRZBU89rfNPPkMc2FmGbmgiYP3zrqrnM99vQi9L4mjdoAXd7NfD2S5buxRPUD8AZ6gyQeT",
  "key7": "5MH1YXohMG7Y4ZWrJAWaTxCzrJgcfahgLpV3xqG14hAdG1uqb5fWEwD36MXzm3TXgiTmWboq69u1XapMvkCD6UtH",
  "key8": "2ZjFUhwZLoWVg6rKXg6a9m9ie69hQ7RNS7oa1Tbo74zAx7zJkbiKakDK1WpkGsLszVrBUH6Tnoy8oryzSQxsr5dD",
  "key9": "46xhqRqu6yApFAgJGNyHq6sQs5pnwm2t3nVDviqRTrongoZ9tekrGfCL1vwzAi94HZNrxLYigyH4jeyMibsUrnhp",
  "key10": "3YQeFoifrneTmZJ3vfgYtmZzVt5rMTXRvPkPgph6taRLQ7Akku3V4mVeDnmkMWY8PLKxmdvzDA65cv3pZZHjnE22",
  "key11": "5y4ATrbKnXeqb7gjuXxBokgLJeJcs5rBFDMbTiZW1kCFMNWLygrMNUDUaE1GMD6NQqrJNB3iM2g3Vq4ysVjJ1zrD",
  "key12": "JnhspjHQdCNEVPnMXG6BGJJ88KAsYkkj1ZzxebjhHpqqsRdbmihQpcTqqRE8UCN73WnB14JhLxyKASKURFoUJgE",
  "key13": "5q1fUs9Rejt8CnDx9rX7rWTj9wmUrdLdgFa2CnCUpMFyUvA8PhCqQasapCNgs2uGWN5NVrfGGjrsHmbZCnFPBrZH",
  "key14": "3xP4oCdPKS5cmq7W5bgbeQLwokNc6CQSkeerSJQaVrQB6Vmd3QyDG2GG8LESvf1QjWRC9T2gpgMGyehioavNzsDh",
  "key15": "u6fEcUNtRLJbuu3YP18yZspZ2XEA4xrMCi42cGYW43usvJMxJb3MythLRFftNHQMHgnAXJj9R2Z36pi1GAGJ6dw",
  "key16": "3SCw3Zd1B49dwKqWDmmf3v9m4GVAHcn1aMcbkfZTUw1FGc88QotushxUaV37C9BJcXcCfuQGdaGx8FQSSMYKC3yJ",
  "key17": "5YKxN8ZmE375twN5txXx5ogGURo4xnwP5Xmc72PSM1Gh7c7Hg5BBmhKS198cg4YuS98hK2i7n7RMWtr5NqDTGgvk",
  "key18": "5HEkeV6HU9zSuN8c19JFuv4enRsaYvzB1pcg8CL4sbQxdzV4aHpGabjfhSe7GbJPRQ5sEV2PevFrXPmfyvWCfM5J",
  "key19": "2SYrtah8dMeVcJKsFrvz12dGujesu6BhuZveaQiQM3w3BBgukPUkMgqKfjFaLUu5Yon2RakbLuFvRqvRMC8dYm7Q",
  "key20": "gf2tcFivNj3s1UShewdBQcnnTaH3rRmDKwbtT5pX87N4uKUZFDJpoVzftWCT2sAPHbmoezZfdYgDMaZWgiQD4vK",
  "key21": "5xoBq1WH8NXhfpkLtE41qCkSKwM5LRHkNF3nbkNP3bA1uxMFme4cySF8NBsRA5kCwX3AhkJhpsArsw99uuPTb3iN",
  "key22": "2zymwCxHqoKfLvsjKgXhskGoz52Jy5758soNQfDVABqQ5r1E7Yurcr8iRHbwFrHnpVoNMtQJrjzA7YAXiTYmSBaC",
  "key23": "2A2nyucBKsDAnqRwraCD2fBXnY4ZdxH6NkuzZCPV1vgHeeyUK6Eg8brkruJDprE12Xx2Z4HocUk5A2VSt4KLus5i",
  "key24": "4yebF6JbgwL6kjbqKsRaMXgJFh94w2ou5DyY1k6Qd9v3Puh8ZZv7QjSu2sMCEBpgz1mvz94mHaHwDQsFeR4Dj4nk",
  "key25": "5KMGfz4JcKRmZpFA1FSBD99kXw7mR6vw2GQiGureTA27ouEqDZpWHroNe5V9MNySXZaDr1ukbWromXkMm8jJCZVs",
  "key26": "dqXGboyhBQKqhcTx6PSLVJQTCaReWNhuDkfqmJjbCPD3Ko8ftpAYNHERTFvwtNCycPaZsrE1eUXf5w2J3Qeo8LV",
  "key27": "3F2GqAAGzRpGhjS1NZPoBVxAXKpHtkyJNSqYXcKCNh9Hx1jfKve9cMzWGrerv6P8cGX45uGthvJKWkttbW2DTH3g",
  "key28": "vVRAWzAHY6kcEQgwQD9SyZPuVHNzyG2i5Lg2RuhhWz9inQf7Q1sbQUrXYGKSoCzT4Du1qXPJS6jz1j9VytzVFm4",
  "key29": "62pZFvf3ifa7WCFFcsoX1rqVAtGDbnudyobZXuufxhJFdBjhzScWdTpsM7e2DtvdHKL4Mx66VpH88TnwhzMyvFG4",
  "key30": "6LfMpeNn3DNWpyR8RkfZnotAEb2VdHYCDnjkR5QkZXJk9ovxcANx1uHqbYN7chCpJJVGoWLKMkdNKKTwHsHafhz"
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
