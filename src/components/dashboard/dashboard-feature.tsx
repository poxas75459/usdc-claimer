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
    "3uYKiVGzusvgReY47GBzSGYyYWFqceVbGxCVBoEH8WGuxiSC2MSxXD41tUdkbJGxzpXCLph52tqCsExNsPirpZA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Pg8egctJQS6CjPxnot8GM78TvbhLNLpnjRKppuPiaJaL2RMZToT7G6N9yFW735HqvjGvadH7zo9WHegasjnuA4",
  "key1": "4KAbUTMePJ5sP11PQRM69HP4BJiV6faDAenWuzbZLsYmVrD9ohrvk9VQCj9G7t7KfD7QbDbApA9YGK7qowVxiJwn",
  "key2": "5omjDwNaNeju818koAdd4pqfDUvhQLxPw242erx7FTszRLdcZ64GFeKmmkXnB2RAexPwaBSRphpf3swgbe9XJC8c",
  "key3": "gCNwLGDFFvAxLFiTjy6Q3TKsAFKQAQpv2XgsSCGrkf11mnmh8ATPgHRmcZCjvMU6AMpUB4s9m4YMc9kAWhEQnWb",
  "key4": "41asJT2NcZk3evqhvv4iqimkKhcQQfgJsFdFwokempz3Pve7icKcHtULB3SQAm6yUpg9WCnjjoM47dGCcd1je3Jg",
  "key5": "5RXzgcV8DEoawVrv4Sqzk9mcPLu9KzvkMPasrB99hRPmBzL1XEWtFabrmGDGnEAqEXVUryub78EbuWtUxG8cPHV4",
  "key6": "qDBX1DiCURnhoQgV6v4XWmNrJiouid88YMVCEnVwz9hYCwJjYx3H1qiRprm8whXwq1o6dLBCRY7JpfyRxLHBTpu",
  "key7": "3ipo5Dsx34oHo79umV7tWhPBNvXpA3Zv23iND6fPLRJyX9Rqn3xs3R5VPZMXzAFZybNA35799KMaJzbTaVjjVeEq",
  "key8": "35rTWqL25Lfe8jvsY86mLtsktRAmjRkXDHcMr5mo13NHeUe7bJFJPMMbfjvsH53N99k8AB798ZyRq7E54GZmFB9G",
  "key9": "2UHNFyQHEcEZGFp9hrLupPtMdTVh97nspVCuvcPC6SxXbUbM3PMDZ4ujAc2nPaAEk2KiDYQtyHkTC7SyNTx6u1qb",
  "key10": "3xWdZDkGK5vvyRVaiXk5QPRkfaUu28rD9WgUkny1wWUqACotw7eZsR1B2Qore1Bcs35YwqzREjpHXSwQt8RmN2Ay",
  "key11": "51Qg4o6k21kjuUjHiA5WopHZmUuWPnTr1EfuwkHPfY4yJRpUQAvCei9C4Jdh4bB4DnXpLstwqCqsZcLSusEnUepJ",
  "key12": "65XuVF3dTss2zkKExVkEFNVvJq1WvfVe3P4CskLX89QroLgVYhpUKxC8QoEMaz2RWA6JXy2iK7NfUnHyfsyKm1vv",
  "key13": "3vBvwoLMVDDnnJbXdjfbHNkQEJqwh9a8Ms85DiRHRSFERcj8kBKsc5mE5UU5jbcnmeKeot185MNd9R2w3JbnRLNr",
  "key14": "59P8AHjyd2jwuspe6ZErczTVb2HZnqzf6s4Wrzsb6BiUYBqa9AeP9AY2SUKnA2RzuoY9t3zsVP4846eBdFCHyQ5L",
  "key15": "43h7eqjiSTtR6FZKwfGQKUqcZK4LzKkxE1Z1w46dNtjb27ZAGXFHawGnNX8kW7fV9ynymJB9qDZsN4otfmo3cwvi",
  "key16": "5cXUBYeS5hzH4tzoqPSBfWoQc51zSvZBnzfP7YEASY7AV924DS9Yy3JSya32jVjS6iJhNG6hz6trdTaE6f54Abbp",
  "key17": "2yigJCm1ie6c7KzvhPeJyz1JybZniF7EpRxvcjJzYUWhamAGZ7BYm8GoLzVG5wEHJzHo1QvYGpLwMKddAMutCSLP",
  "key18": "2oESnDjFJycF8XenCNgM36xdgVmyXydeLvhV6a6TvRHcC8JvbqcThp5YkxXnPBSFa3RaafmMB1XNv3rZq25W5Sqb",
  "key19": "8Mnhp5SRRCLgr3KHzaBfJgF6Aky6ftXnHDY24L8orzowywPA6sTDZWQXDyWXjrBapNZpPZbVeKtozGcHWSmHfus",
  "key20": "5h6UxQoATmEjaZsyF7EDxLSBGSHu2RQ5hoAomY1TbP89pZuoFJvx1DT1Nf9aLE68giLXtpJDBnjys2dew1WfGXth",
  "key21": "4KBhcvZNwsGJ4SXEP5zymQrdJH4K1RdWyV1uexto1qZSwGcTPEkAU4KfaC8y8ExUZ3PKiaBwgTJZM3cYAzjToCB3",
  "key22": "poK72xg7ZTa9JsySfn1YP41V3AQazBPgzXwaTVdMERFuXksXgsEj5kFfeU5wqx1acoNaeUhg4WjiPE5pSozfMaN",
  "key23": "5StT6mwxA3cDqbk4RFjwKcFmYWpiaEjDwY3mJtF6q5ph5KKouiK3BB2p7uaVCBSmnB35fvoJ6D1pH9Z7Limrsaow",
  "key24": "2YD4UjRsYuiBuh9MMmSjSkcTc6Mtwi37BNSteFNH88Y7zqpoFuAFwrQrcAZvZFcN9sjaWt5HMUWCxrnEaZjGSe1Z"
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
