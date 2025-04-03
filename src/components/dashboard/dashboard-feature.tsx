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
    "2pViWV4L4Mn1TqQotxqhVcX1x1q8gLKn1LyYL3iBZc2Hc6HaCUnakdHBd6acKQZtRiE236oTxe8KNJXtDf32LJof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rcUw2DG1ZnLGQoiqCS15H5L9khDcK6t5Y8CKUS6j6fMXzQmUpmg4GWP8arQs5zrfJuDfjbJQFWnFcmiD3YuoPTH",
  "key1": "41cJwgTEgLnruyQbGLgXRWz4awwcteWahNoYdVHPyhZWzy5RzoErvYjeLJHbCbkin3i7m46Ab1JAQjrLtdjbdSvn",
  "key2": "4jqi6ciovBVa6Zim2ycw8QhvE5E2sY9GTtUFfvKr2sunkRreafihmGJxCy9uHov3LH94t6J31VQqW5o6JsRExNga",
  "key3": "9R16JSaWmxxJTdxUzZq8amGry4WTpJPZWcABsGgLxfDQAW1617FaNShXj94o9f34bKUQW5fSemAEV7nwKG8WQoe",
  "key4": "2DN8q1yYXZJ9rw3oqyHtiEFdAWnqpkucu9d3MJRN13vMkAaeTdBqiHA3GCDTMSQ3DUuLHFWxmW17nzeUCP69vNZs",
  "key5": "TcmqgbJNZwr34RHy2uJMrk9eeEu36mCXwL6V6G1nZGzbgRwH9pyRQTxwA3HCq2jpjPMKnetMijVn1vzwunGWYFY",
  "key6": "4v7GNkaw3cikkXi4NModWfvZ22yFXRmDDiCKbrT4jLvhwSbhCSzy6jvud7RATAEJQtkM3BTBnMgoJ5LY1eLmzvzb",
  "key7": "4iTH4ky9WDJfUKH6b6dVEMiwEEH9LjB2XQ6QNnyU6vSDb4GtscLaGEwHDEUxcjZyhYDLAqS1bkntowcUEAWWeb5r",
  "key8": "5oBnpm4rBTBbK8zC8YEGyygCGyVNRokNtdgAhqopRjMqJUwt7u4EQndgKqBcnqGxWuv1Dc3GhY9hWsY3SaNPW98a",
  "key9": "S8e4CWKzjhaHseY4M4eMG5mPinSUxNZ1tw3o87Zu4NaMBt4PaxijpkcH97wy7wN2r7juRynrWMsthkSWL6JhxwB",
  "key10": "2vDzQ6J4wPNsq7PoRpovm2C4cNJ286KFa3cfZzfMTu4gPFh2HgaeMNH2ZBGsRU6Q8GAQtuy1NSwPVJBYAtegrGEv",
  "key11": "r8vJL6MN639jdwyez9gup9CXYBhAT3CWuhEzScpsELd5fpvJdtry2SEK7wJuUhUyimDny5oGuXa7inZCzwART2p",
  "key12": "57N459BNoNQ1XdesmhVetHaVTZi5LbgZ1ARRnSLQUox2TFPxcgk9cjxsHQLSJyRJZUg2Vzw5QZkCoR7zpZZ8RRFW",
  "key13": "2xq1nWgAzYHBpEChdG9wx3PJmgcKHua2DDaSRWCRCbABA6p2zNnmKWQcTeobvwB9Kp5s54o13zTTW4kdx6e694Fu",
  "key14": "4XNyVwGjMwRMEzfwfTaFKzaex8zzsM7f5i32X4zMAhkzTpFFdWwdFH24omKKxZemWCviCJAwDfHy1w9ZPk35ZjxF",
  "key15": "2gXE2QXAyuFJHGU8U8aejQsjPdZq2FdSHzwNL3Qm9g9XMBE4YUaRy7xtRmFYJ1iHya4a5mVytdNL74Ga1hscx9ir",
  "key16": "5hidbxdH9BLTkioT3anRrrqeK9CBebDQQKvUTQ4iJ29veBdjTAeNMkfrrWPy6AHaRwAAGgz3cBQUxH9tZu45wzcZ",
  "key17": "Mo143mbr14RstJ1EuS6U1zE58pvAjAxnN6XNvBAykZC2A4Uhw9ymn5dwPuT4VsbMDv6qy7XZfFNfBZoweGE6Hdh",
  "key18": "3KqrjKTjeQBTYNjGmfL88wPgP5kdjqxzzHuj3BuU2MXBHCkm41PchTvxcStwUTB5tMRMmBKWzB7Q8u4MAHdr8Bwj",
  "key19": "2cYfWP3RUnjmWPetV6pvvAPQqx9QKmMrqtNpAfzMVpu61yxRsPXxXaKLJSZPsnLfXsWBDdGs7VohVkyCKUSgXQHu",
  "key20": "3XJD46yoabjB1wVg1hNT7te1UwJu9NtJH3k4txCuT9s7TzVUs8ak2mcgmAzCDkBenV1oVJCZZsSNDtrgSQgMMdLQ",
  "key21": "4GschXb3aBhnh79omTEBKU5fnKZJiBfJPy4V6VwQxG5wzXq48LNGuPhwZ5YjaTM7yFoWtKiWozkniVDd4nXEvgvQ",
  "key22": "4Kp1XVDkfvsETBQHbitvunqV4yAdr8dw52VwpgdaPNWxsbRrDBA4wtM4yRVCJpZh7QtbAtMHMUtRKb98BdWzSDyw",
  "key23": "37Tor6QgLrk31nEqBqNnCugLq98fxtuzUhLbxcrZfLBh7wz95mA5bSUWmAWRJBcfSuAzopp5d2QtnMXhQLMZTGhB",
  "key24": "3qmc2ehm3k1azS1MD858QgDXsaZ2J2KXDv11rv5BX4d1Csem1J6UTB8Df8LvU3NUZkYZ5PCfg12bN85k9Ed9QnGf",
  "key25": "25wAzpZaagkQDbf8qnCADx5C7FdWxMduD87ES6S6riLUJx8ziDKu8wf1jb6rpYLxojfYbn4CMbkAu5K8tDeERQ2u",
  "key26": "2vo5z5Vv3bE17DHacyFA1ZPa5xooGMV1ckUAKuHbWq8Jo5dj6QcG3fgBaaqzfJPrpNoL7x87JsfcsPAvZKaFyDUv",
  "key27": "22REeB6h8NksNu93Eicp4cCVo3nTfdtLHGGTQ4Kqg8J4gTJzoU9eNGouK8p42J7HFLcnNnfp19BhtG49xQr8i4NK",
  "key28": "4VuehAgoCPktGZ78cQqt3qHPeMdQyXeajbuwHxRRbbYzg6FL817TM74BQonwKqcFtPZaaPraCpeBy9nraw7YYbuA",
  "key29": "9SVdkZgDT2nK37XMv1D4v5LV2rotyx8jzz7ihQdc3Zmg3kgAtq8sWdFGq1DqjB82YutEXjgchB2hD9W84853d9d",
  "key30": "D8tXvHFhP9QXJnsayD3Yu2gHMKjjXFPDV3MyZknvoZWcQoFv5b4m8UBQk2qfsHR1xd3BAGu468Zs83yggvTX4hY",
  "key31": "3xNA32Kqv1314iPT6ssSdNgUNbA3nuahZDcNTRyfVGMULkm7SUmvcoMMzQc4osz6GS6mFgBPxx9LmBSP5Fjb4M3j",
  "key32": "LpMt14QQ2iMxdbzRBFPHohKWwEB3hpkcAMdpxFvVaYC2oKjqiYdUMxBdJaBoCQpWFHkYBhTHDG1XqYcX3VyywuX",
  "key33": "5t87MPqdeAyeenbXYMdQhRm3EPEAke3XsjMWzZu26hA1JedaMjPPBhbyskTzQjZJVxBx7uWdYq5iNCJ1vEEGz6f5",
  "key34": "2pdUenP2WjDcjhkAg4NKDTsxf5UQfpdyy9pju1ws4A4i9jUhdB89D5pzbxxvsP4gUfkdQ4X7sKmcc7h3GeTzhs7w",
  "key35": "3KBwQTehPYXdGdtJ8o9q9pAuHuwV6DnwaE3MtALCuispeBN6f3ViLQPVtTfYj2CczxCermJFUHcF9pWKHiPA2JDd",
  "key36": "5tQvtHT8j8PeSbMnqUug7CyLYF1YQT55j9crWwDoFUbATJ4jAnG9UV28z6KEo6CcQsqsjr1oJoZj5PZqnDx36Xn1",
  "key37": "4HtULQJ2MAonvHnbEbc6kfG7sb7NcU53PQFM3x2SC1xL2Hs2UX1KnyxngcBt6YwNNus78H3eMWoGQiob8JiLQRGc",
  "key38": "3LXzhQicuS4VeD6W4vzJAy5gEw1VQEdJDqnaesZUtLahnhHBstCoPB3C1HMTpWM3hGEScTr31CmKzQEWp5bRwgzu",
  "key39": "46SXvMGYBEBpBp6h1TWom7M6J6hEmgh539FpkiCuk1FvmkDH4eZTR3hzjQ57fe4mobsreUexRQhzjFTaHNoSwPXo",
  "key40": "4Y98M4PvnpgUBs4ZrbvUBdNjDktbFRnGMFHfPbKqNsHYg4bFXqAaHZDqY4aGqfXg3QkKUhEToqkVJTmmWhjxQFtP",
  "key41": "apB5BchCkChndmUVjxRHxuuXbSbeJpX5YJR4HgKVLet4NqzeDUWZv2DCmeGQmwLiPZb7ihRW1i7BvZ6v3rRYCsP",
  "key42": "59zuk1m4cPDNkUH6mH2vXwi1Xx7GuiC3CtSCwZg7ve7Ed9awAdEbNQ5CApPwpSEjLmz42zZT5d3A423SWntPgBr8",
  "key43": "4CdtnpWjwLsRn8BHMeffQF89eN2x1CDeU4d7hiCkaUEuge5zAhfFm49yhajy4T5EWwmshP3i4HRsa3sFCNbwiRYk",
  "key44": "2667TLqBTp7D7zctLKK2PvjnraDxzDxmKhajZVG623Ca5MhuiHn7RycPdownLdUB36xKUeZbUG23UL7MjczbU5LD",
  "key45": "2FRPnT5zHjetdm7ibwoBJmWebx2cuUUtf1hCVvh9jwEfuWPAnuk2vK9T3zjwRvw4ZUrgQcCekikeWNdMo2ehaDyF",
  "key46": "4jNb2opou4usy4HtuDUyTf3UceWD4nSN5ufudBNKpPXm8tr9MxLDNvhWyFgBJpevUjdQzDP7K3DSnS5b7LbDymLV",
  "key47": "5JGNuSZsTVJGh85tGuB3MvPATnexGBdixk1nYC51oJ4JAzuJL6z6zjVPzeXZYhUGV2bd7Q49cmEzPLv1QhQo4CoM"
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
