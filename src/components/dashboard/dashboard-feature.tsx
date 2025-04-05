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
    "2ycXNVimbFBFr3XW86HWeJRCjCfcS8f9sSSZVKgKTkWs5fracQbARSB1sc1CpCbSYkoUzy1877tYxXvMzy1GmJJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qRrNUhdsqV9dpRWzNe9hZNNFXvWy5pNmUSQbvB1Ab5FZBVCUm6kJBr52maa6pVn1HVTjehEEKik1bpQgaQLowUA",
  "key1": "3HQgH4eocn5L4dok9AsnGGnkzV9pgFLJniuME1dm88N8Qu4T9HvhcfTYsQBGktiDadfS37PPewLz1c95Z3Jj4JiX",
  "key2": "mPDM8TGHELWr3Qx9XgKCLwpP4bLsKEhmPvH9UwTkZh9tojYgrJREHhRoLDN2QteHh2giiKU2R3QDKBtcsqB96tB",
  "key3": "5ygefDQFfRfd9ot7ptopZuUu8WdFtpnAnMFjAUwSB1kkMjL3JuY3nsfN7jpww7KzKWKfqi7rj2e4RDNZJTC5Unne",
  "key4": "4KRWW3LpMVg1P5aEEPbBPSKDTsMU5A88pJsdwNDmU7nz66MSoGnvupiVe8FF4qYeRA5nid4dMXGASDqqaEwUHq4m",
  "key5": "4ps81xxAFLzFwH21WTDqipNEoThTLstw1kxxYJap8XZTMSGcNdEiH3u9ZUdXxENSKC4T15g9nGLgEHeMiQZU5Qkk",
  "key6": "47NLVAszAVjhpCjZbGeosQoxxRdhjBziYPPZ6ZdaujYh69d7tn3L9aUQhiPAvNMBsSnd7SMZMZ8Ro4XDhchFbTW3",
  "key7": "5tyrn1pD6ZgYme75wbqxKEpAUSPAANSk979rGqD3ePte8cermFF9FacANes8JDS2z5toyJhQa1aGtCLXJKw6Vfmp",
  "key8": "4zeYXazQnTt3wiLGXqYTsf8Q2dHEfAP1XPQ5Mgtea31rxMymncCDsET5mrcfd4GcnqaHwrdUoSHpam211aWawreA",
  "key9": "5yp5Caqx47XpGbVJCh3EchPDPcgoB4rRMpoQGBFfnTMHqU7TZ9ABmNkQZZejLrYNVsPL5pPe3oG8oYxxzoK386gU",
  "key10": "u5rPf3cpu4muyq4BmURmn9HQEJkfwm7WA22fzxMTcaAzebZYrDnYvnkCWvJ9LsmU9Ywyec5dnnUATHnkASXH5aS",
  "key11": "5o6fznTytKNZuWf3Cm7UySfqfffnHZLLcrwsBjz1XEfbF2HekWBYuQR45MztnSyRkxx7yrxQmhAUWjW821y1EtZ2",
  "key12": "4nj5RQDgX4mpyDUpSJz3R1kDebctoNyiLAfJupK4GuFo929xjZi2chp9HJaJh84ZkzGxR9JtVtzsARguagPD29tV",
  "key13": "3fDKpuVifGLXs6xQgtFtSd6QuAD8qUbNB5i81uJdCukGcyeCAYrja1KAUCgkahtbj3wzb5yLkuGtsWwnEEWHcDxG",
  "key14": "36vALazWvusF3AQGkocYtaByCNhH7a4oSacJwZnFLtMsZAWtumr2FoMzU92SX5tcm4CoFcpojgS2P3YeuwLGpLM6",
  "key15": "VCbRZVprhZm4oPiU9ueVmDoGTbqJrGwzJTuGG8iqZ9TczJHPx6kcQfbpTJPDDm3ndtMVhCx4X8KEoLoLNTZ5kbJ",
  "key16": "57PrxfMQZUwAZcCqo6C9CQDTcVaMxSHRmtnAGSquLNaTZmWdeyuMTaTnxSdQi1vsixQz3t4L7Bx3t5Z6LsDqXvbm",
  "key17": "29yqanSN3iJMo6WrzFQoh3T1BSzVVdgxv4Er2zUnduC8CSKZBPEwdwCqQ1vUf6sawDbfz2HnHmKiSGtajjLxPtB3",
  "key18": "4eETxPAUvrXAbPVamuBREhbss5eMDU4SYiHvW3FXWQXFybzYR6SHiEuduxGWavbd29PxMTz3MM3SwxHSZPKFvR2B",
  "key19": "ZQMgHEPn2JokbnanuSgCrrZeFrMSH5K4GtPT3JiRZAEfKqCAfyfiLwWRD1syWw2fmLA5sEvyQJQ6zvohV4Dqs5D",
  "key20": "3r2DwK1ARAV2Lt3y2e5ZzFeU16MySEFQ3j9nDAHU5JSQCqNVzsGYPeY4GaBCNi1XLY4UScBpuGTmgwBAUPpVs6Nq",
  "key21": "3vBaN9XFBktqwHwM7AYCuLZW9L8JMVg1EhvWnS4m8413ANRx9K6t2BnX42QQhCaQRhRxGnFm3YS9KisfACxQWg71",
  "key22": "4hmgLMZ9ZPGLCYKJipCREiatJ7tTzaBrxENT4muEzfTrpMn3dTWPPgboEi5K5bL5WrgY6GaYrrYnzBpTH7H2aoe5",
  "key23": "432oe3PApf1my1gu2jvhrkqASyhEMXoagdJuXk8aWnxDqGoyHjvtbUMfXKL9GntwFxLsE9zVtgodc13KcvfCBAbb",
  "key24": "4qdPZCSMX7pSEWfW91NxHHDmydU9Z2UkDP84AKcrsP8HF9eDWLcB5suXYTiiKQ6W6UHSMfFPBrxZgUmjuRkkS9ry",
  "key25": "4g8t4zCR1D4drynJehRnyXshdSiJDgTHpmHpUNB1UzFmypYUV39EDV65UTwbXaM4M8u6Nfc6j37MtY3hiAPppghp",
  "key26": "2nUxf26xHwyWjxnDpzGJnsMR1irY35e3NMKyDw69tYnNxGnrRH2Vm6qaPXV8gu92PXTKtCB5PZ3igKQcJpMnKi33",
  "key27": "5vzqYCssxrX2FH92nZTCsWC7oWVTR1xuTLLBjKVfJGR4K4UYG3XQsvh14MtgTUPBWT3z3gMgdXjpUF5JcjzNTNuE",
  "key28": "5BbhEdExT15D5WryRDdCm9hXmz2T5o9YjXPnZ3wMZ3RNXPSK4egjwndbUuA5qBYqtJixQ4EETC7TVhsSHckXpSFf",
  "key29": "2wegSjfEisKs7gyKnmMqUTeSV1R6R3yH37Xz5YG72VgNzM45GHZPgF6J1cLg4fndggxkoawy2FohJsV5ymV4qp7u",
  "key30": "4wszDHfcqTdxJMCiHoGYfXzcfgHZg8A98Fe6yo3gspbYhJ6dQxjjTxH2Dif1wiAPGHntvUibxbiP1b56o9svxwcN",
  "key31": "5zn91jCUXEmXprrFFZnqg5kAhXrefaCpZh6WNuiMBr7RPyJdvWjJTH5d5yGvShrFZAMjhMpuYA73mpJnCtB7Gw4v",
  "key32": "4e25hjrUWGdVthF6DafgdYewTeKZ9qHmjLhrVMg1n78VMeGGpYhZeZh17LWqmB9Aie2MsPCcMXVUMUHnoHW7xDsy",
  "key33": "2i9sb54gmmo287s7ACmPi16zN6FYTC9TWyotpACtvSKTC3G7hfRqwxAD1rzuCh8nukKXMN4u22jzz8mBfxVDqVPJ",
  "key34": "4f8vUMo7HhPay7FRw9eRrmHrUFri1EJpaY1i42seFwCV89GdsS2xZR5AdJ2fnjd99kwA2ULaMRYfAz18aUwAXqNk",
  "key35": "3KS45fh8n1AUJ2ZLR2RkTcZYKo8fMV4wTnAeb4VFyMsk9MCSecmfM4BvQEEaBCqvYDxcWQS2SnxzwUJVSAAzU2yq",
  "key36": "4Kqx1UmGWhdpheJrvSKuwDzosP18JznD4LuhyLpVqnpS4vSHY9zxbTHF8FSndrAQxY4dTL3jY42iZwLUpLJMo4t8",
  "key37": "4baGoeriFaHwktNnihaXjQGozw9vqzwv4NU79CCz2PetBysJjV8fMh3GVieVLpc6pxdLBZcXQq1aX3skyXKnyjne",
  "key38": "5hUnFG1YsuPEdjmww9iJjKZhoe66P3hbWa9AygBmfhyy1hfD7kJJHRxG4DXYAmEq8C5X5ZFrtiw7suMQUEf52MVE",
  "key39": "2kz5oFKjX3DNerwZZbDBm3o9Uf4ao1grgfw9FMSeRuBLvWJoHRiDzKa9JX6d66ySsqvWRx8EFwyFAY8nVaiFMjFy",
  "key40": "23H7YDYVZjKzZC5eWvvWrKxRxUdmWkvjksUDCgY2TZf9r2UsrjzXfiBZQSmFT9yHKWLwf4KomuLtxqdnuqRwqqiM",
  "key41": "3BvUb7ukgDQosTb8UoEGQSgrtmWSvWib7aBKg8a5YRmrJeJrQQgwFtDmaYhFwcAcEBsASxZxGmivAtqckN28FEk9",
  "key42": "xkSHgULs13fyiSuXN7kU4cErqL79ATiYUndVxNojx74z35vq68ogZKmVHLmn49qcPYGyF4jqPEZgXXhUWHeeoEx",
  "key43": "4qjNbzSbhpuytd7eyb4WiVwe3u9DBSVG7uL1ENToQnEAZH7SJA3MoSP8QAcRaTUkBkbA2V1rNuDHoHUCt9ES1mWo",
  "key44": "A5WdZHpdbK9QX9tbYDGP7nmhFPNT3hTtga4aknp2dK6LFSmZfwwu6vUPQi3aRpMw1uLGrHQBuV7Teym9qBqCo7B",
  "key45": "2LpfrMSUVzPBExtRV4RQm6JSJvZdyzwXfT5H2Ln2HsSBXozqRMbs4U6L8SRtu4XRToZKesJKyffgz6DzoZPsXD4P"
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
