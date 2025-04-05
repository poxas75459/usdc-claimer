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
    "2VbSz8Mp7k8Bwzc5YRj1Uu5tW9zywoYaRm6qnMA5iCDvJw25gim9qqyFveHYiXwzouL648ZRfBUvDG9CGzHwDWwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BkATmp37zvyQsLzJF7P7Hoca7nZ6tcoquZfkaPtQDPfKFqEFHqQNB2tghpuYoaJA5EPU6HMZpafp8u6YgG1d2h3",
  "key1": "5K3PbUVLdNfCB8JQb858XX83jg8o2SACYCBM9WD5xQkeRHgRCQ1mwyNB7MiuGLgvHzQ2WEgbmdZALZtQgFvMB1kt",
  "key2": "UxgPuYUbyc7JKjY64BMpApmC9BxXByQbQeffZAj2MJyDyGF1wm9Ste5kQQo4F7yD4dNuZX6753J7KfA1FFYXfVi",
  "key3": "4HqsZ2VMMkwXjmHjVw3tbLb3RUkr7oqveANJ3TBAi1m9xmik6qAZiRNk6UfhwiCodHujyD9uvTAkdU9pTJC5f7bk",
  "key4": "2mXJbHD79jMUqqZFy24LEUdZA3MjZ1wyszmN1J5AbFPT3oSpC7rJax3Kk7SaKL4sQBnFHBmWJs3Ffq4AZiv6zmDj",
  "key5": "kS714PhjecRwM9nVCtJN8JgvyeubGFC75A8yJsaGy3jZGgbCoD6rSGktvzgPkF28Zn7mKt1R2n2D56mWACVkmo9",
  "key6": "StyKcoJ1vhm1qHwrYnc6nSEY6BkxxBivzuCiPugUUyUh7ZqtWg31a8tFUQxSFf5r7yJ9H8mM9q6AvGSzGpCKeLj",
  "key7": "Bd6mfTkt19jfVToGuj1RRtB8jHoAvXVyUGYZiVgfCDjDdgiJkWYUM4bFk5qBV5yv4K2fwF1UKSAUAiv16WHquFg",
  "key8": "5rGad5KPfE2GMpPf12sDz9Yn1J6SRQNKNBFKnfZWyUe3Eawf8EDAtswPp5bU647XRGL44CeZwJpGHnNWogCX1a5y",
  "key9": "3M3SxKvmybrbhjdHRjqxBK5y8A9Z6iG8gtoBrM2goufnGTQ4goitT56e7K9E77eCG4EWXxCJ2mbFfijhgkuAX7Kq",
  "key10": "5c4CWMqn2aZj1VDJnd4KZ84UKL2V1iyrEcmcsAuhN5dSBvq2KtyZknSNVxWXCB1UJFqajufV8kmqfXycugdSPGia",
  "key11": "3WrLVxjsfCzcppFddupTug1wJwv4wY7fDTM9poBg1gADPzEazv9qu5EgyrZv2s86Z1W8jCGpzQeQS7qfBwY3KbcJ",
  "key12": "4iTYZptHM4mJSTxssp6kxB2UEJC6Bwa8V5B5G3hpZjVkBZmk3hygJ4ReQ133YyBBMqFQs1epCct63EL7huXBpZjR",
  "key13": "469zr3qqSVQSsdz4mYwp2xBdMToB4aKHpMHL6jgA3TAKjEbSoiCGTuqQ2HTDA9X1xbNcoro8Mz1gNoTbbgeHaiMK",
  "key14": "3es17n2M5iNvYZGncsNbHFVRPThJ1XkxeJ85hRWrpsobq43uSph6uYG7yDsyV7jMHQJV4pTm7wbFv7tKoXb8zGoh",
  "key15": "3d6FWbtqdkYBk888SP39RnbSBThjp6K59smBeoQyiF3rvWj1oJTdhiwvSzM3H6J4YGRhV3qXEgbo8W5rdxn5bxvR",
  "key16": "a8N6HaZ5BsFnHjFDRHHbqm3Nu37wCidkBikwwujhCxfWWusoeK4tWvoUYUGG9dNQ7nHxDB5keepi5zhNsuSzTF7",
  "key17": "3Kv4tBGN7SqBtxfGHQnGSUvkgpuiiqG5BYwgqFiPHn5rxUoJcQ2zCVajKLaxfW2DzGAZmJaL4sQ2FwZmy5E3qUnw",
  "key18": "41ZJEyTdAy9y4ckiusNb8fydqEwNX6MrxRdY39BZhkuDCZ9JVyMnkkci5QC7Y3ofVg6xmuJ82CwsteovKvzd7xXR",
  "key19": "2652vj4CU8iMKCcPbQGpB9qLmzGe6Xke8zpfuYgWrrXHDHnd7dBrmjyyQoyRZqLa3zCUwGAmdFYtggKGqwbREU7k",
  "key20": "3Mad1Rgs7hMpS5wtqjRU8TAqVjW8kRh54FnJr8e5FbEagQvGsvrjmcJCeg1EUDq98485TLzTEKvbctyicACFX8gt",
  "key21": "2jziT5auCAA6qXLTiqxgNwHy5ZCxJKTqiELhRkZUswLNZEbp8W7f7aDprT2VUNDA8Qdty5C8sA7hrWkJxSyn5Ubx",
  "key22": "3A7XfnE8cfjUXhYoA9Y1AtnMEfNmHHx32m3KJdajhhWEZ8rcxXncJZFUKFpA2wvnDE3zFmD1u8hMLsT15Qvtz8JW",
  "key23": "4yLUpkCNo1tRCEu3CB22MJNMnQs5FfL1xcEQdp1kQsryhRVtvuYMPK7DRMfjo791eNQ5WaP8qismq4zuuqox5S26",
  "key24": "uRdBQGy7tzpTdS2ShQbdPyvrrF2YhA7fsszAkForTXLQrcbkQxYm8ZUEZqEKoMM8wzwbRVbKSJc89uPgPrNMDuo",
  "key25": "5yS1XQCe7aX75VJhMY7VY2Ei5cvcCKTtCTd3w2YdVTxCA5qdpLYyvmA8uLJDv2RSvuEtZutbUuzQn6TFkpm8B4iX",
  "key26": "W7RH6E1u5QvA4chfCzCL7dxA9c5PRNJC3vUc6fP7ijkkRSnPBHzfz7pwNU4VqciQ93vcW7TRhJQuKjsUxmiTSyX",
  "key27": "4XPv4d2XjTnUu88ju3aijJiJeHkGFCv94Aj1wEoUcKwUzro6FK3yAZFGMDcdwqLJAzGFfLETjF3jZxmkM3LZLQfo",
  "key28": "22uydGEGXcGLWywGZ6yRcJYtAr8y3ydWefqfj1guc6sGpsdofL6TnzGSeP6yNReWpS14VK2ghUF8oUatqf1BSEN1",
  "key29": "5JoG2vXmFAu63tP97CREJC3JMgSJZTHbtJY5pxvHurM8TJPFaqrtTCkPXXRBMZnsWK4tJmfP2pe9tLei8mPkjtAB",
  "key30": "4Cn3XvkHDewpV7rGmc5769L2MmwcCdcgkmtV1gRZ84J9tHhTkvtZE4FyxdfWLAsvPptJ13MrY6Kb68LZU4CRuzZN",
  "key31": "2GYSzCkkuSnXYdpbcnccXsDXGzJaSnFm8MrFQcQMh5xrfJjN4YfciGE3n8RmjjUscWVfNZpBKWdmzysVfEHVThnh",
  "key32": "5jywE6SNtuiConHGuxJ4jeKhpZtjy2EK3rL2FKWC2wbZSBGHxr3xb59aJCcUv2uBHa6w9aEc7FozPHk76iEp6knR",
  "key33": "2n5F8Bm6WRUEdVN2uBvDyRUDexrpzBQjH4t4nesA9UmaFRMtqKRxd72qPgrUELoycPKjrLatuaJUCrKtsg5isdRu",
  "key34": "3gJyAYs5nkKVtkv2jyHcENcBcuWYV7JBrJN6a6JVS7NaKYuHPaYPWnLm6cWRc5ME5tVZ4JEdCR9Tf5SQkmytCdyP",
  "key35": "4h7UnNKoppyCsmbQEpv2bt4iUptAWkbHXhE11mAX9KN3DzX9YrLJS2bRxJrxMu1rkEkYtLnfgSCSCNBaGJq4DPjH",
  "key36": "3uEZsvi5NpjuGM5cXxyPA4jJijgfSqcAWSopsxbZzB96zX9PCkFeQmp1syYaPF5wB36W4NPQ2mjPGpR1zABTPy4f",
  "key37": "wvKtvVQ7drbYFdUqQ2NszQPnbz9vnhkUVZ9XrmaW49XGw7wP96N8twoG7CbVoQY12ejSbaUTrorkKtiJDnxfwpq",
  "key38": "2Nox2xrrzmz5SZxaWzVdbM6aFPkCesGUyfRhMKLVWngLk5bzRC6PY27JqAG8AMsLduxrjJquHfX1ory1u9txZkkp",
  "key39": "DiZh41df6QuFmKqhkKc26HjqfQzMeEqrU1rjexEgAJ5WGdZJfaEEZgx4HAoVBZUE78yx1qy5yQKpYtdauHibkVc",
  "key40": "ugG3t9z8eJq9K7bWmZpABU6oCfruSjeVcee84TiYLkvLyEUGgvr4PSf2RuSBQwVzTXcNhTWMuBZkgMHU5mqUMCy",
  "key41": "3AMRJY2zPsocuiuA1Js8R4vUov45TUV97LzE9eZYoVqWp9fLpVuFiLiQNjcB5EtFsr8Xkw5x84JaQ627XQnRi29F",
  "key42": "3Z74n5EwD8zkqKLViyVw5iXQSb7kMNY2kSWG8QbacaqGxAELZKeVV4bBb6Tk4g1wL1F7Y69bmFmKtE1YzmkwYkLt",
  "key43": "3Uvg7KbfA6tdXpECjFjWigaXTZpPFZgNwqcQ7s8bj7mYiSoLmM42sP5qxJzMnH6f54Je52VTDc1iN1oWPTe4L4Ay",
  "key44": "5jbwLxUR1dyxgXWtcpC1iPgnVrjqizb7idECjz2H9bjg5RxkAjz1VU44MqVwv41Yzzz9rkZMGhFSc7Y6BXdU8SBx",
  "key45": "5WbMUgXneuWpy7RRbTZi8EtPicLH2s3iT5hwTeiANUyBUQwXAtA5pNRxQBcyjMbQ65qYQ3dfDcqs1WA1LoNbA2La",
  "key46": "J2B4Nickq8PvAeVgPF63dde35XE87FYYV6Br2PqswSp7FeeezmgqU7QVKEnhu7PbCQWQHnRSXrV6Y8E2Ss45BFB",
  "key47": "5Q4bMZjAeB91xzsS2ss9gbch5cPKxmNeZcnaaJNE6Pf8XTmKVfEufwLk8uMVwSiZvxGMb7gkknA3EUKPiiuhjuHX"
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
