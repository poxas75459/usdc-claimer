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
    "Qd9FjzZm9JBqaeMbQBwXXCjWDptsZm6PyLTZM93mNCpXHk5TNubde74UEGdHSgLHmNbHhVfEYQwHGQE4cBLLMNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PizgCYGrYb5bC2cTrADkoZCfxyPKDfu6agYvbrsWGG6PrMhtKRjEdLPgX5UPZy4HvRVuosposcpSD6zWQCzAwzo",
  "key1": "3xupqgRsHe8BB2nTE7C9BP1QkRXQS5fbJQJGPbbpfEXf3fXVop4T3kUWJBYiVhWBMuKtskUJKWZuZC65bvkpT6vQ",
  "key2": "63ynpAV26x72s8c6dNRTLKVBHrUzbbQcuCJSV4hF2sJNp89pyJbSUSzZwvZM7bd93X1uLuAqBzNQsAX81rW8ro1w",
  "key3": "Tyu765fAz4czAjLLEoJ3ZY3SL7HV3aSBWDG3eh8c69GTi2pkrLjjcRyDJqqTDzDBHWmhQRiAUAL8HPQtVoqnbZ5",
  "key4": "4Q2f3gGDZftX9geEHL9JxdwPMtFUW4r5p5Sg68N2pWmF5D3NkRnq1bvJRv1p7ndPj8N6NqUxwYd79rocXZvCsdez",
  "key5": "4MW6vUvu6X7Pod2oX1zWNyAoCB6VC8MyZSofsELZbK4iypvzqa8TvTW5nywtoGLrtzysVvigBciUxAJdCJzwkF2v",
  "key6": "2Bh7jpPfszqNKzaU68zQRuhEUaqxTkpMhuW2fFGM235fxcW9BX1W9eQ4R7j6oo8AjcYQ2wPBJPuEQq1rJXCwHWVR",
  "key7": "4NyR6tz6S9EyvbiuNEzsAPnqzVQ69d8xJ3vB9EcgmHdxQXznzX7bu4cho7MVQJRHPW2S1PCZHxAKTdWmupDaT47g",
  "key8": "Y271HXDjoETH3FhfhSXdeBzwMqyMue3AFb4Dp7bZP1EycmD8Ce6SUnP9FRi4ktAF96fZPhcV5dg8bcXHkNWfuKA",
  "key9": "3xL4Cx7neK42dGsPPoZpc9GTzVPGCjnHVUWCHSAzn2HdFpZMdpK73ySW2zvCk4rCV7Fz1uRUDqJXWY3Dsmt9Laq4",
  "key10": "2iAaypXkPgmn83DgJvjQaQj2sSyfQ84mj9MpfoUq2pQxNgr1NJTGFtur6K9PZjnHWH7qVTw2pP1ao3biZy4N8w47",
  "key11": "34dGLRyMeSyyEADooCe3e36h6SX9CWzuZ6yERhf5UnRCQnA6x8Lv8HugZboBR3MagvyveSBo2dvbfNkhm4HwK2du",
  "key12": "3GHzcrvrdwbmyqR9HA5YaieUM7wjkDpZWoJ1ri4jM1wBgQrsBya6cV5iwbRJsihTThoYsEMQe8B2DHY3wxxeJ1Bs",
  "key13": "3YwSEEnV4mqq8zWJWPqzTD61AK9azwd9383Qdf86QgZCJJ52TYacHCVVwToha3ht1vF6tPHwBTEimnQV6Rc2FHuA",
  "key14": "4YmuySXWhxw3saiEizGyG6BNygz7iZp5vLENAXFLc7zWjesbBkJfET8gabdLyopgMmtVbEysiX3MLQkSnoE2esei",
  "key15": "62BNx8AXhDW2syZ8B1AGQKCCtEYfhhqcPo768YjfyThoqyBrvwdHXuPozuwMV1RF1NMtaknzpQcQfBCAUBFj8VAT",
  "key16": "3UARAh4s4VDJeL6Wb9HqzkUK9PYbFis5FSBUT7EJZrJkunrtFLVHqGJ6sbzGRA6eYnwa213RXVi1Sn83YyLSeE3W",
  "key17": "2K4rir8F4u7gNEpcqqCq2dobGcAE9R9fDnz8rQP6FGsVEDfjbvaGtYX38ShkMvPiA7N7zZ8D6fTqSov1pCfBnrH7",
  "key18": "57BDS7gXV9YJov9cML1JbhLKpZbAykjCE1hGauYn1pScVHZqwaiTG82vSnamBSmCNgX8qY99onVdbJtFt7TDqsfG",
  "key19": "28JL9QQCmSGYCcSfQHbLEV7V8zYNVdogtYFjXmp8Afa8jzNQixkSL1NBFSqNxd9KmUhzwTwQW7AYjTop1NieE2fY",
  "key20": "2yhA5KZkZMW8Lo2qbMQNDw7sfQtd9yJJrdZJgPJLJ9sqEiaE8F4hean4XX9DxG23z7c3S4cbVFcXGVGLJmeX269j",
  "key21": "4fCRtDnkmkkevA4jQYxuBpNLMYgW7fZ22EgGSmgeJT5BMxeM6DfDDBfgQ4QFcgdM7KU1MhpUzJkneiPGMZv1FTJ",
  "key22": "mYwn1TbfKx5PdZX6Nsb9Hbd7Xej4jUjvnjQX5kNRqGd6KA6KkdLEuzHAErZaRYSpZ445FFFQSUsN1PQ9v6Xdxet",
  "key23": "5BSCq3cvRiu8t89qMAfb2ySV1xRHnnoQVZ6LdiUWxqSdXxK4S93nzYzNetNiUVPfNfsHPjY6t7iHatASSWfEsscv",
  "key24": "3PNXCZy7WWqyuJoVxcXrAXMESuXmHfGNfiJ265jNZeJ7iajx4UvJEJ9gwBXDDKL9hyfSEyNdJLyFtCSPhR9rxKew",
  "key25": "2YH5KuuwFmAUUhhMf9PpBBzbRNXxgzbeBNEsJqZTYpCV444oLzhBDD957uxq2fsqN4EBbN3qv8VhbZQQn4k8ez69",
  "key26": "4NmAcNwFpfjH44huZfSoyiNVENcCNhNPeMxpiZGA2YFAYNtCz9SN24Qqef4sTo9ksCnmzJLc2WEY5T2dHTqgwfXb",
  "key27": "5oj9JmoZFzoAf1KcFKv8Y66XUmpfWbGaeAiTipc6XnVFa1LRznMq9Gqcq1XDnWLsuBwgu1LmBDmniXeD1nzxJkZX",
  "key28": "vsQVsoiLzJXvqcny2NA14hDcTjFcwaaR3bATvb36iXgCmVH1QUR7zHzSffw1gkrriMqKq2wkFkZ4am5TwhmE1Rg",
  "key29": "5etU8Es1ZXKhHacsBTSWzY3FU88KPmBLZzvjFUiq1AJZ9itmGZ7xDZt7V4nyQ2CJ6eWcBcbNUJsHy9izn6DnwNZj",
  "key30": "48r7WmiXbbGczkYStbu4Mfdkq46qxg719RvPYK33SahWdKgoRXjndJiLpnm26Y3Sa3e9hV4fjXM9PDMjGrtJfhQ2",
  "key31": "3oU54PKJBRqzQ164BU4WCyWoChKKYoKWtcJp1TZSrP1Lyf7nGfjq5tFF9drQbAgmm6TsMrE3P1hzccpCtvR6ZaV6",
  "key32": "3BoU6SPZixCeHWWY2z3jdPRVWSw5bJvXn7iUiaJVvP3g2s3tA1df5Aq4hNNXt8cjp2YZyqtoSEL3mEQTpFtcz9Bw",
  "key33": "kKGz4ELByzuwkYAARY1b4iXn33E3nUx5B3aibnY8a9FHxvbE8Gb6GKUo9yGo9RgNw1NpBz9QNzxKJxzL5aQACtb",
  "key34": "2QypknoXYzMVACp6yNtSDGSEeC7qSTq8GLHs8kYuGNouk9PuJRfU8ep9DJEASWFvm768wL8q7gBa7L4Dfno1cfwS",
  "key35": "2HEdgpv4CbTKwQMFaJTzTtUYKCAjYhkiVSZxGgsJDt5ZPBhTytVUxqfHjaHTVe77exHEFJJ2mE7ikHFre6tsxMER",
  "key36": "4KThVe7cvSQ5tv35poBG7xEBgWYwZu7X3LMYPkBJtM9EDxdVPUcGKAxSobeAeokrd9QtALT7PUTxYTG92BRC8R7y",
  "key37": "3GV7UmNR7CPXJNMvpS9tTnn62KsyTzB9FmeEmzp9L6CGG8Ymr9GTE7HMnAX88HY1yu7m31q8rrfeTmT66RaAnJrZ",
  "key38": "41uo4vHjqBMrARdLMAcnd96t2YbA2qCiUaZkkPBQuZJKL5uRPXBQGP7xjb6ZzfDiQn7ZjSB4qs5qZSN8u9jcMvGA",
  "key39": "2Tj7FXgBNTtWtxpqdaFXmKyRDJsUXhKLxUTJ2xLNuxriiAyMPMwwkGCfVnsg5pPEviezLjcYUyTBSXeMNTNnSTwp",
  "key40": "5zRppgYEeKYjXS9Ge6zTgQiexbFXxX6fYhwCVeDqSaUmTtpw97c8tXcsmsVxfyAtWF6Qs6LDAHbvAF2MfRgBTZk3",
  "key41": "2kTyJJ4T8mrW1zaXuj5QNC5MTJzyfFW8XmhzGTV4Z9WgQBr6uo3bUgLA5CWniQhbPWs4aLNRnZtHKTGLh3E4XHDr",
  "key42": "5Gk5NpxeDae6V54Q19pHCckKo3KoZBRapYhqyNkL5hnUyfBv7up8cvgcnkEkWzRD166LQBXsJ2jCwK9Zp6f7iWrY",
  "key43": "5opJ6rHHhL1y9cqZXGgpAXMtNHAe98ftTfg1epxkyGtjyYcvwBVxU8a6XTXc4WsfG1zGsnjdryWB5JyJ1gir7WYu",
  "key44": "4gey6aPdY5oVpGAgGFy3jJzA3VE5jNnHUtCovrMhwChdyufo2zn49UKPkueSbsy3rnGyDKuTwwCBFQnkY7aF5TuL",
  "key45": "2WqrMrhJHabtSd6fGLQDeSZRFhj4oWS56tgbu9QBu4gR1CzsWZZhtnCj39eKUuYFrvqnaYqYWXudyD8J88wq4z5C",
  "key46": "4Lz4WcHdyQi2PkNxjVYCz4SPzupEcLdX33rQLiH4MiT1dB68WDWe2Sc2TmgSY1CZXSRQZmcJ6epVhTSSqvcmyrAn"
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
