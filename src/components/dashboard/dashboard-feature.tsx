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
    "5nPvYegHv5Ec5xPcGnsfVhm4xRxCrxtcq3dUudVkbhcSAWCFovUBH61vxiSfdeDE5qzLr88X7DATg21r41DTP8Ui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mgBkYZpmUdNpJj5HLMX3vbvhvrg31jpcZns98e1MiLFS3jeN1r7DTwTwT18yjR1r7xmLerZLUWZzREcr6TFUmwC",
  "key1": "2uKkxXxU3Cj3x6RPuAuX6n6ZuXuDBiBDFKW3YMMXibkK2ra8whpS8Xs6wg16cLVA6ZcCXjdrVZQ3gUF5YBJo6Kkj",
  "key2": "5L1VWzxM799rAqbFjGub84GjrjTgXVhArSu8HropsLNnDzxEb6kmwXqZrDcjYU8w12TWNjporkMEr3yPNzQ11RHs",
  "key3": "3MYLcG1oWBGUmiYx1QGuYTXD3xMBvaktgmGMDJYq8pgmPQUzhMMnJwd8PiAwWYkopjaaB1XFEnoNJQywMBFrjcDa",
  "key4": "2hXv5HL8i6v1iLtxJS54ghJAjEUcFfvNNKvK3Wyd6QK4UuV93UKEYZv83bD5oBuC93n2DJFwoL28WgZnXp99zYLL",
  "key5": "bKheUkRLNrcQ1erWe9WK3S8UeefWuHAv7yrsigTyUmb7H7o7zMXnHnoC884V83HVmLvWrpbVVk2UsC6w2r3r8T9",
  "key6": "33fML7qwm1RM5en3vpQX29yKhEMnd1y5PUQQdWLUCwK1PNAF9nCDkgfLh1uXBVSjCt8UCixZXJKtA1eQCG8xFzG1",
  "key7": "3VMzQgtdjxy61YmWoUJyfv2JesdeiVxZeNKAtkRU5w1ibYnWxVfS5HZ8zrVb7GHJBd7s8Ks4n9uEMWuABfb8adv6",
  "key8": "66ywBWU8yJHshXBY5jFF52SWQgwU8rHkCNuAGu4T2uA9TEeqoTresqGGjjCo45cmJnXhxsUGF9wfqgQMb62MNQWb",
  "key9": "5ePbdRSLjUTWbEQZHumaQVtVrWoFb8gNsLt9HkDj5xX9VKFgyAFV8tmpssaw6hckBLpXiyXPXhVJ11wh9NhLb9GA",
  "key10": "5GoDkgMzrKhBTBWtnEtRzdbWNQ7kigiFxw7zHhEZrUevwqY3wgLsaYxFfo7C5YVAEqwgAvNfKpngitD64asu1YPc",
  "key11": "5wRYgmt4SQShPprDt7S1sziz7XN8PzEVW96SvX549FsbEJRkQe2q8zSLt718ih6x7Er729Xittk5M2hN848UJDrq",
  "key12": "2SYGYrfdbgSu6NG4pQVPxTf5vbXvbxbB3VF7ufuQXpxx1yaUjwvfhJfqtFAA8U8sYx37BxSa48LXZvJKcqGB3VzX",
  "key13": "3Qheq5PWxsdAVThjTbvJR3egCFFvHowqKqLyairRCS3SsTW1eVbFG5penAK3aZHWV35bnfJPxnjoYCn8BQNDNLP5",
  "key14": "4bv4JD7JVyvpLYwSrjCqpTGFsZSpbiXoNmzh2una5UVrunjQZ4RretzTrBZPzJnkMbSGm7LSvNT1Eyq5wapdV6sk",
  "key15": "56yto8rGxay6RSzxtXFn7Ap1ce4x3J2jwpsFu6ni2wBYq8CfRPrZvEnmGRempYa8EjaDZP6vaeAJz9b9YmXaHd5i",
  "key16": "4Z6GXzaKeJAiVScsUr7GvxCCpPT5rnrGTopbia2YBHLnvHdxBmzSWtQn9AaKt5pMF6sxy6UR3HfsjX2uKLr1n5ez",
  "key17": "5syQwzriauZLThFCvkrTMKYa32ZNtEA5U4hXzFXDvfUFLvRXXf4KQv1JDdLPj36Yas7dxTBEonJiuh6QnBmoCqVT",
  "key18": "UuX9jzCsHoo9zxjyg1sPqV5VnnPBhxWCfFQug135jnRJWFqcXVNvNK2XkMf32TVZ26ZNNAsPc4taYZpuPBychRc",
  "key19": "49U7khQzMq44ZuV8R2fwJkAfpbGvhDiRyCcKy6eVngDZYhWeeCaZkHNmgqbkivYvrmYKbpjKnxrpH5vwU5F3E3Us",
  "key20": "A4zitcuhnQJj4w5qhhPw2pvYAnwsySFzxTCechmkQsiBtA1Vv2QebSGJriy19zk9L8nde3knHVo1CsLcsGCL5Vn",
  "key21": "46EoRmbzC9pMmrWbUj95saEMmopJesA9ka2amdSBoPQi6twy6UKsDpq5pMiVL6MneurNFuwJeYJExpqgniixsxuP",
  "key22": "3z9B6mGxN1hd9mS5xcXGR5Gb4W93wZTt6QpQiN3pDLShCxhqcLrSqn2BpsFLiGVkdB8JovzVT76QEB3ri1ZGJyg3",
  "key23": "3UHP74XtEapU6CbMCyWARvMkcwY4iCtp8ajgpz7QgvhNyug7GeELn9cnFGZPKV1AUWXuZxdqn2ZQa38hvfM1WY3U",
  "key24": "7C1SmByV1Z5gzHqjYgSu7j9Vr1J9mh4JM2mTjuj48TFYuaPt1XtGwR9tqADhuixeJAG1cjqYZQvcRR8uxRuwgR4",
  "key25": "5gibrGqySNQEPE3Vu75SoGhCJ6uzyVAHyxBbcdaT4Vb6yzL5PynR5krZLfg2JrCL5rEXdjQmGoYWnn4PqW3Nfvab",
  "key26": "2cJAvpGHesiHs7SXdNi1wQxwcFPqt5Eok33zD1aXDctHjcx2CqLJcmCJAx4HbVs5DepdxvxZpyUVQaY6BLceBAPD",
  "key27": "2eBMosAmCgdSK28ZbRAoLXwHvAHBJXr7f3ZoCBDuwMzSrf6wW2d3oubYsWGSmgt3LyejBqNxzbzQDoo5uT7e6Qd7",
  "key28": "3rpy4qVJfRpneGaQsuab4ZNZSL9XBN26i1Nro9SixSsyaWM4Avvrq3GgrkBYmzVqLMJjZ4aC7AE76Dy45YJvPZz7",
  "key29": "5UBKns1SFyf4wFziwSyksnq2wZuHgLSLyh2ktKiSbyZAM1DNs6fsbKj37ynJEzr9V9fQmy7NTQJc9iwjQegnhbEv",
  "key30": "22Hz3nGfecBf65asC8Lh1XSFH6S5JDeVaQ77pjpHEZjnzWSYvCCPwBtHui8caBXkZkfXyLiJtar8zUi24niziw2f",
  "key31": "21fdoyNEBW4hGiSg6b7k1oDtVKqugydMvjzpkDb2bGsvfaqCQ6aKgYWEZYrug5UeWnPpxH2uKL4DWHyQmXTn2jsj",
  "key32": "5HWHHXmcd2YJBu3cBFe4R51tnEPrYwAYoev2ZXmcBDrTmvojVz9U2NpdRH7YGyfWj57MDuZ5AuCcYigv6HApari4",
  "key33": "53hT1P8YCzAsNgMfSzW4hfF5xQHWWxK6Nd55CghsfXrkK1UixBTHdJUEYiFXPwt4urX6VtrnTCmwKg9Cv2NPc1Mz",
  "key34": "4KArPJ21vvHux6NXdKVAw88mkSS5fBjRoY5hfkUK6F3N5yEkfTnYqNmDW2kCjnXr1Ukxq25233ExrgRjgfRLLcKu",
  "key35": "4po1pN82mMskAd5sv7VM6rPXHsqxntQJRwR1vdmhDfKg7uGqJ4JumLL2Af6WzfnveWrntJvWx9pQHBEd6wEKaD1C",
  "key36": "4PE7MkwXFwXmmHdWbQgVtYfD6JjwmrQ8unTKmc1wMQiBGbowp6ENA9ccQJxLXEXLUaBnuQMzfLiz75zCMB1TmpXt",
  "key37": "5Spc5iER26xDw9cWTENxSwVpzyptbYStEniLvZJcsZhjaNYrvXGR59WKwez5zLmzBCU8bZmRLoojvj96MfpPrs4d"
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
