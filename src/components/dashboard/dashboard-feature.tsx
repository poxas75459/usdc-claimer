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
    "4WtyJ9ggjMSE8FMdBAqaeZ8DE7yRGu6kMMrEXo1HSSnCJZvMvYjDtQa9d51jXBPPYK99EmJyq7mCNdwt6Kqa7m88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31uGXdv9LiSxueXiYSvVjYHDckxtY8k7CVtjSCSaWvRHc9iUesnuXsU5Eg5yJKqyUv1pKGN3rSjTTMbeqeh96Wiz",
  "key1": "667kfzfFEEuvZnDpXzk1AMAiid3tzBbdh3eGjCo61CvtzEZPVASh2eydA74CStNxqjUpDgCwCEt86jK5QLvBTbY7",
  "key2": "3JCDogM8tN7VY4GrmepLuSZ1ZRMMVxNfiMyHSrByxg8oTdNLopuED57QFunLSEAJ4mBjfpTvqQpeCsywSQGi7za5",
  "key3": "5BQcZx1FQYySJjDsseKj2q6GZF41Jbcx2cgnprgMFQaNkpxUquYqPkoNTcv2eYPL95Tcsu6wsSELyg6Mq88rR4PB",
  "key4": "3jXgBrZKRioJ2kEwiV9fwanW5mmzszaRjHxqtJYTJRztE3r1MnWN65YYk8pvJwmgkPtV8eQXc7NbyZEmjoyFCjwb",
  "key5": "2TqvoBE1zLM1La4rgVm26DhThkkuoEZ8iBmKqKZHeVyud4yUTyXTQRHsqUtCtJq1Ki5GANPhGUGGWJV6MqcNrX26",
  "key6": "5X2t9gBj4mTEkDJUd8yG96YkDzescd1iEm86LXQzZnVmtECiSXhShniU1fWZWAauQvGe1CVXZi9SsekMt9vE1urN",
  "key7": "AzcHvn1wfY55EgnSoDzwTf4aY7YPWnKZHPPs9nnz4tvvqBCHzDaPTZwTNqUXcZDo6NqkEyGrtnai55oT9QdNkWm",
  "key8": "EEnejUHGCmP8nY1ya9dLEb417WQbncpFiq5kujxiAQWZjjsmABnzwUDZf6afwxXvEqaopYLPCb5s4S2Rf9EMKKi",
  "key9": "4XwY9T9BNwmiXMNfG28BKb5YhepiRLYMWxLt2Escou3tnb45yP8oLnUoCS5CoaMtuRk7BYJsFpTmc1ERNNcNDTnq",
  "key10": "36ar1w1ZGVnvWAHWBJ8zkGftmfWgbPRcaDtDnQwd1tnMpBvXPUiU7Bf5e8bbqjvCwF2gxtmL1ugtiSLpTjqf69i2",
  "key11": "545BzuPQffFe3fGLHa9g4oYJKYujx9UFJ2oPvBa3Gbbjkaij1RtEXTdmfffy3T9HaTAGnNznfvkRNx6c1jWCLqz3",
  "key12": "wo6y93SsoSYaXz572eBCH5yTXT5DsuadzuPjr2uF5UoScT3cjiYATCimFeAPg8F72fDnST4PnBBEd1pHQgoo4Gm",
  "key13": "3qtcu2HqLb4DzaHvkWNGeRFE2PGPqvYCARwA8c8TMc5HJFE1QosV6wxXrC9zcPS55bTgm9C7xoGsXSofgmEQ6otv",
  "key14": "4CwsKtTaA8vAhHNPz2iUqpZqXP1dn8xqmfhBV2eicrhwX6S8kSzTvcpuGpwvGyJwNSEPv9MDhLbADQQQhAVoCztn",
  "key15": "ZV5L7WjzgzfJra33PUYxa8CL4LARz76vta9fL7N3mpEyHAh5rcv8G2TevBLYQXqDGyaFud6qB2gcJZurC26W36c",
  "key16": "4aEXTMLH4JRnegHFWc3G5QBrsdse3TDzzzT1erci4yecDxXDkwTtfAFvz3mpfzZLLJ8y7MvY4kGZRZYQnWLLrTLa",
  "key17": "4n61D1YcWJF2gVjf7mez7XK4dMDeScP4CLBUZM2AsUdbascWx7XcLp7LmSQMyKeuCRTYr7aUwCtJ77ewJQhZhCix",
  "key18": "3RbawDnHx8jrL6eHx27CMn78o8PJ3aTd3Z8pjjLDa38CrjgQtbzFmEZe5Mj3yu3S8G2dcPbrA9RhEZkVySxJSZf6",
  "key19": "3FS1Wk9zbx46KSarNpXZTFoxqZnLcjv7ztbaMm7raRn6CnpdZJMdidWmNyY9b6yiwSSdofcSqMCB9YXKtsQR8kZT",
  "key20": "2J8bBFcwM9Qvj2SgUr9pUsRM3VRrMpHggQ1dwnUwe9TrE9FMQWgg41Wm4xdSPVEUoR6FEt9TYE5Jev56gLjkAXRm",
  "key21": "5aRW6XxaWoTSAgunqDFdTUe9SYnY7fBqBfHaj8oG8p7A97559KrcQRNmHa7ENbxJ3yXGCqhuZihDasAZ33ySt2kS",
  "key22": "2D7iYNh8qVkxiJ3Ljfqnd6ExFMQBNaJes6EyabKZ68HPkagYzC8RFisUMmwzqzPFV8x8G3xS5iCJLy4YXqJHg694",
  "key23": "4WikMMAufbiAJcJPqbLnm8bB6MabP8GErDNEQdHHgSXPGWYUmtMd5UmbEzJQyd77jGAawd8ekwrdGk3bsySStqg",
  "key24": "5etU7ejX8ZL9itpYUMBSwquzsKracpHGjL2LH4DJFxhj93TdtjKi2pLwjwy7nuoCYARJxgZXPestYCLusGEoiKs5",
  "key25": "3CgUxbxaGVGoXi5hpyjGcyFwH7aExUQjeyGtcYAeGe6uxYZXJ58qocguAF4w4CNBApX4tencFhujMbCSS6hc8dev",
  "key26": "4opusAqwqMQY4GnWCRqvnsn96SLA1JymVteWxrpnov9EMAV7zorLqTZw3RpH7fVVCXmGeujyctBmYEaTzSEj9mxY",
  "key27": "KtrpdruqM4xhPFPUdCw5yc5VviKWGoBnKi42AdSYZEpk49MCPQnbnizCHw6UpE5hGZ2f6Z3DHeAnSgLqQeDUtyq",
  "key28": "5gBqTUh2yxz5Xva8uv9dxE1yDxXGsAF8s3GwN3cS1FpeCr5TWFJX4qYRp8Cw64EDn2nJJH8ontEc6qu7RBfT6pYK",
  "key29": "4HaCadDLRsZypXawp4KDdg1pKDFnG52HbzsjFpffbsY8ProVP13NYHvUUgc6VqhttF93HfyDQZtsSA1A5z4Pq5Eq",
  "key30": "3gmZzwmRCnNqTgsjzxTdnuCMc4qsk1HtvAx9eNpPLb8y6n7PSaU1kyJSjYDJiR5zcQpo8N9dXX9xr4fuproRuxaz",
  "key31": "3JMEe8yXUEqchv8VzobcSWacHg4t5UReCHiFpx7n5ywB3ukz4RZa2EU2o9u7o25Tf7s4Zhi61Vs1NcTQeLM34NrS",
  "key32": "2CqA2rejUrebLr2aXWrENcStPFuk4TSd6CaNYuTiMy5yCKuGtbQQV6feqccnFkScTBCN8Cnmyt1ZLE3PuU4Xez4b",
  "key33": "4DaeA8ZNAFFRW6ATRZcGQxqpBx8EZEzAhb1eEGqdZgVqZHa6EaWxfWLi43QP7d2C6hoE6kMiPNVn9gNYkWV5J7P9",
  "key34": "3eyCGPDcopFfdHJXRXt8y4JmHNHmffrTWFCmtkELuWRA37K7FzejF4x1DVsXp3U24dpG1Mcmp96ejQo4LiER2ewz",
  "key35": "4uc7r9i11wQL9bS8RHSSpCJKaqrojLHnY8bNY2rQvKwHj21yyLvvTKZQoRyARwwnRrNxEVNQiNUePfGNt2rq2GWe",
  "key36": "qvHzmYSo9Ytnwr8snrEVG5FFXLzVJpyPyqcoPmXjKpx44tnXKkx6CZaf4Qnn2LF4N6HzBNEEiKZMhoprw3vX66i",
  "key37": "5PNcsaep2LkguGrviQaVqu3tcPkrMdn3iH8QhezeLi9aVPEgVMu1xkauXxrNVYt6jTRuT2BJziPLNZcdenwzfzHu",
  "key38": "5DAnkrWrxyGzhFEG6B6A8kRJRWJPxxieiMvtnD2q28XuWEEMJW7PY6e9RWwXArK7kMUmfSYM1npecX58srG3R9gb",
  "key39": "483a1WGL9BGVgFx3YYqx4fKyoW5FJAxjA9cWbpkZn5YVfKN6c3F5mLLhWDqcZQWVu1a2kd5rrHqqMXXn7CzAxBFd",
  "key40": "4fAxusi2qp79g2WA6SU3vG4hXfUWhh6pG6MtWCq6KfpdjKLgg6yaQAHnN7qt5c5u7CRPFgWJn7Qk1is1ctgCNx4D",
  "key41": "bxRM5fmXY8yr1yo11zr4D6p1RhY7yimnGmnmeaHW4LbYnaksUnCppKxiLkeUkxNYykw4rjiUL7kRs1U5MMcw6Bc",
  "key42": "GvRR8dVsNBPDhSnxbqt6JY6sK7uUL7UV9GDdBaAhEqtyJ2kJy3ZrjYimdMYHVQiPhTKhAkgeBtKtasnmXiit3wk",
  "key43": "HzpeYmgzXVQPoMiH5SMATNwBpL1ya4GcLy6dxG7H88c5BcFdLgERxPD6ezcUoa3H2uDXDww47mD7EZmWyfK2aTN",
  "key44": "4FwnSLEnjsf8FRpCqNbuXYnmyvxiC75ceWXpYGWT9KZmm7r8hu8TgNtnHzkXEGGWM3Xd1TjqpLLq4a2PEPRxyzS8",
  "key45": "3SPGXxVkKXhiEpevmCsjGunnMqvnDUXhDAvFnuhLJrYYTnrB6LHdFg4jjrVvnavb4kEtG27925WM1TtfA32yn12J"
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
