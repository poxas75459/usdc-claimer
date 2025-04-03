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
    "5n6dDxoCXiRTzfu1Us41EnmVcj7ahVoAePgtWiz6yeHn1h8prUTWqedTTiMx6PTFRyr23b88Hqy2QtTVTK5QLzqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kzTP8adhXdEDGiCyFb841z6vnBizT6qSqnxnawT6wYahHySjfJxcc6N8Kkrdamon95mFhfW4uHbfcWN7qk9Zv6m",
  "key1": "rw27g9oC54C7CJBZdKWuHG98WgCWgwyKYeTX93v46BJ7XksXJsfp63DaX6tcuZ7nLjufSku9w6RvYShGAyt647x",
  "key2": "28FDmHZN6kxJGY1sKjtKdAhujWuTRdogmhGuWbKnUr8CzMckeeGXB1Y84HNhPo78trkawqbJpgVs6tFTdUswAgs5",
  "key3": "3qxQ2GkZ8GsJacRJ5DBi2So3QLnExhfCnfhEPZyUfoV2uhB2Nf9bzSVvvvDyqn7RNXnhvDbqV2ERz46NqMYF2Ag3",
  "key4": "5mu6qzHqby5bk4BLdDwo4HKxdC2SUgQE9w7RhSWV2y1zpUy4Jk2jPpSx3AxDZrK5phZr6PkqMCoJtHJQaQ6LdMdd",
  "key5": "3hWvgoVqBUJ9eT1xs5H9RGGznNah5Qzn2JwS7N79giJ6zqXmGS9d9XwLnfB8z7vuuCWUanMeUUuVZKkTb58cnvhv",
  "key6": "4RsDMvoW3L87eEZHAH6bh2B6sARuwmjovXP7BfmnqVjpRjw6tiPBjTXwjBJyTzmBB4DQGxW3o5qZn5JcUQnK9tAE",
  "key7": "2TuNn9v5VpcTVsWDhKZyMZmur551N5K4gpG7vY8yTx1qiazkLiBzpV7rn5YzBMH4U9CVFXpMYRk2YChQbtXsxVpL",
  "key8": "2cqywLxTZQnVaXi7QsHa6XQKS8krACS3ckzRY4bjJ5rXGvvu1UCbMWNU672NcApwqJN95WkrTrDn7RYXTWMfWmRP",
  "key9": "39DjSYqnaH7uJ6T3Jgewcaq6x5ALgk9FLvXBqmg7XVvPmfk9PXQp8EhU9jZrkU8sxC27EsPo7jYM3GoWitdxN7TN",
  "key10": "XK8aANsxpUKNZPbRmKkvZZ4W6RHcvzcpFA2QqTuhSLzdHxnNfxWc95KewhWwp3ZNUa3p8zvYYmUrB6LpSFGK7Xo",
  "key11": "3vvhkTz1pkY7mgkcpv9bD26dDx4tSC7KHuqfo78K8EeU9tFk6qii2XzpTne9FNmWosrmW48d9oVLCco3z8MytsfC",
  "key12": "f1UYkN4btuMNwe5ivditj5XVNYDvHR3iwokZumF925qJWKFAwuMcqA3L94m8RBuVj4hKrCuPB6DKDMdVK5Ex37Z",
  "key13": "5gpFBzHVtSgbKyw5QxpJVUi71cb4nkA5Lx9X7DjsQjy9ZLSp6CqYwg8dDEGBKYa7wbryUH33yooq2WVfouyckwT5",
  "key14": "5MK8JzYifExhidGbdgv9wpQbz8HKBgGaPCP5KkPXpBjXh7yvQmD6S6jKpZHJZWBD5qP3MU8jgT2qHKt5KTJwJmL4",
  "key15": "2L1p8RaSR5uJ7TkqSRMcrLnMc7yFSAvh4jcvTy4do2tFytNLHqPyJ3yeKxFsnb6ZtyGhC7tuMPaVV4d6QBKL11hL",
  "key16": "413uTN3625aCoSpH4cz4EF9z5hyD1VEy3s85tRLwwQaPZ6yVVM3LPnzk1gs2BYaGLCD6iBDuxwt2dZm7Atprdc8B",
  "key17": "4yBew3tmxFDeCFMstVVqgZyZVjSWf8UYbi67XuHKvvfQ7SKbxNpBeowGMfV9kxwRNY1qQUMbaUurP5tSr7HsrV6V",
  "key18": "CBBBcRHR7W9sLBsAbbXCoL3acPCyompVhbv4k4y81GwtjZ8eYB3xSAj7X9So9v6ZyEsmWp98uvLugGsuvDXEqj5",
  "key19": "hxF8oFDcMVrBse6acd2ykrrfe7MPP2aPxSwdAQXsm4Xg4RkYcANvcLu5JMabnLNFPzvVT6DKJy3Gur2FStgz93n",
  "key20": "64rW7ggVJnhjDPgkHgv4ub3imPAyfPiwKE2pxycg7JKzEPJPAEmRWNWGPQR6qGXt9UA4kw7ebv3nFTNhTRHgmQTd",
  "key21": "3pNEnfkCXHWZXCh7wFQ3WcSyvgg5okeMvntgFNpKcW4KiwT2TRPkxDLvjrKv4VtvVgFnEM4k3GecVRYEDQa4s2uX",
  "key22": "5GH6nCy6Gh6MYNjuoTG6uztP1MsMS95JcFdXPmYFVtNMesSezx9wcMnya7ED681pmAg5CJUZr8Win6ZFA8Q15sdL",
  "key23": "2F5tHLo69JnS3RQr6RVUPZDWfumCdK1JD6cNj7sHYstowCkLZ2cUabvm3qrGtCci8Xip4QcYJXkQMSyy1sUNnbrj",
  "key24": "5KBkWdAMfmqLuczMYiV5UgG41M9E1U53njWmsgLC1bi5GXprqLrvCz6yREGjUFmyA1NkPhiPijnD4QfiTmNG6ojN",
  "key25": "61JnN8yMep1NkbDZsiwiW8tiSx7mRZh8Nc4D9iMRyYr4zuf1w17kipqhK443E1dgSXAWm51KZpSthBFUgQyxZsxu",
  "key26": "2gLHmXSyKoLjd9bnSekpESDMbaS7HMDNKPf5avNUQsMxbqHgUvDXgTqJFyZMDrNBNcRnV5nybdcCF1mGRj9MwTwf",
  "key27": "4vteZGb4ydT2eHQEidUR4UyALvHZQHab8LN8RfteDmiNvBfmcWv1SNKaG2qjj21Z4WS3qD6FP4sWzcnDBueeBNiG",
  "key28": "3pCJXeMxmS2p9ZdtFcYEPt7oAND1AEL9Tfiqg1vedo7UYrcmjPsjGFcey328rqTJcYgwKfo5aE774iEUWxt219AS",
  "key29": "9NuZtqALLFxnu11Uh8D9TvxvogvHkyZ4hWxR1QqYRDAj83uCSQGogeoqHDc7wTtoQW5icTjJc8YjqMxSrLX7cgy",
  "key30": "3RBxjUEvcnHS6xTmTWcfgiMyH5fNSxQhYb5zDbmit2PNrc4hjiZLgBLFnq498U3hL7uuV69nmtpqXfg6wDL8fNEJ",
  "key31": "5PRia5DJRjHiyURP6sWvXovwiT2qveJYuRLxC4FT9XVbV2xNjJTjZAZQE7TFCYQF5MLsfMBN235LbQbzbKh9rXBD",
  "key32": "5i79e7GbKBKydyF9RnDJx7qy6UMSCb5QTq2J8ynhMCqpdEnQKVVDdvHXajX86YfJff34DvTqUt5XFxioEyknVJsB"
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
