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
    "4TkRxDxaucNfuSYZUniBEwuS5ibh8whSwJzARFtkkYoXWLUteKg91ftqsba6D2jBtQ31hbi6aUVAKGxGxHb5GVtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Jy4HMX1oK2FkVRDYFujbEv6p9R7VLZcrQJuT26TMC8kaXhD4fp234q59x7xweDLpzEyKwryYX2QnB2KRVurgrV",
  "key1": "4NFb3zJR4QstgUEVRm6cMjtBoNLGBw7hnyLQX42huMZAiRUZXGnr4c4ANgcK1VLmErZy9fFqUwPjZfoEA7wf1rJc",
  "key2": "3QGi96QK2tkZrgRjSVFYjsmA2PgjXyzZMy26o6LDdGELcebYcYJBbfKzZGkHnQjnbgFZy5etgpJYSB2if8JqhDBy",
  "key3": "5n44t9gfRzqgix5BERhH7EzWj1S3g52QpTXsrbTVbpTSfdJmB1nQb9tpZSMkxFcRFkQVdaQtRT7GdyuhbNduPmba",
  "key4": "1wAqyVkJsRwcF5BVrmCFVuh5xGenBMFhxdhbVjmG3jXDw7qVR6Dehv44pwGbvzjjmszFJtUFumsAxyaq7vtzfLk",
  "key5": "3FPmuh8vQ5skKyYuhCU3HSUK9uSWqAskWXPbJzxi1eqyGxMG3KLuLwJ33iVV29Q1PJch8i2RhvsXFttTvLqErydE",
  "key6": "3ZRDAAhRc9Ks5A4kNsKc9Nay7P4EdmaAjnnsQMMDkFENHU77VnDDvfbnyfXdKWNnsgTWkXB4JfMT51MUzw4jLXCH",
  "key7": "23DfpGEks7q5t8JUS9ozYFdRYhEq6kLLyUDx5XgKdi1Jf1Ji8ugpV68dG9ferbwKCnbHKomAwJddHYe4YiGu9k4f",
  "key8": "2BBWJtw8YQ49VzcRfgN6GetEyNFQ1z648EozdXqEMTvEF9BJYfqZWEJHCnv1MvHkDPWf89kJ5Ew5VG894v1jZ3KF",
  "key9": "5UWVyFrGMJjUVxoqfNudjKkUpKVnSPh6gez1mXXSQU3QAdqGrNWDmjN3qjwKBf6LekDwCjPhx8fkq9GtPwu5k2JL",
  "key10": "4KS8W1N6pQWGCrKm66473W2AFBD43C5uMNimFPmP5mTUYr2JJixCKXNTxeZHgPuRJGBcebdqnPJJDxnVYtykGuxt",
  "key11": "gvzim5RCCrkXksi6GBnZp9yzSg3meT4BcKnNWyqkmcr8K3q5Wy7KVJY8vujqUmdLoYhoZUXhxE7VsYL4a7NUyUB",
  "key12": "4z5SodPAz79KHsBzDKitR4Zfeb3nH2G79atxoVU2jeRTUTcx3EypEpuMGV5LrXDYepoDmQTHMM9JnUsh8yTjheS3",
  "key13": "zHcynhU1bHLyS6oVUf64AENVxhQk4oRCvz4TDe2s5fvaa3DoQcK3dud9Jv7KscDA2b7RYKq9dmrhJzaUmKVdfXS",
  "key14": "4uhpuDcCJmabXHLTeNoZB71XkkcatoYQfXVB3tvsyWof4kED3D724sQgSdcZPb4P65LVXC59nVaRb4VCtARpYqvV",
  "key15": "4mocMFmcBgxWiMqMvWydbYDkpNXS9ZPeSzgdy1gGXpaSFnJ5ogyJP2B8WRGQpyrPZh8mc2BfwRGtdMtpkCQKxfRq",
  "key16": "4gPCzmgmhfGtJQMJCgfAh9c2VC4iS6Uof7jyP33PauGPbzU7u1RrSH4qxLG7FZJQVasadvhxdWY8zNsgRPzpmFTQ",
  "key17": "22E1y6Ac4X3HqsLZXFfDKVzHQMVys5xDJiPJVmWeXm9cMFwMF2giexa3wmJ8Gw7Qpyk1iPrdwKxf7HvgMm7BNH8V",
  "key18": "4WkCa8grR3vsMYocB3QFcqasybgS67PDAiECbmgojdn3bF66tee3eTRVJwAytNh9RuqbyV2L8Jom2Ez4k9Nn4PDC",
  "key19": "34GdU2o4b4iQBdw8qDeUxz2cPLnBHvZJMXe93AzvX3h5uDHJFaH5ssCZmeQbEoUvToj8b8wurvH78KVmt5fW15Xy",
  "key20": "3ay8c5N876JeHm2q8nLFhq8pxsMzyBmV7376bq7GMigpRHipR6ivkSr4erkJpn3pu77nQKz8FcTEUnrEam3YMic9",
  "key21": "5ni2HevSxBSjPr78nBnxqMo91rpsRdQLbYqZeJUQX25fz2sWqqDyDrNaw5cxNBy8E9wVMdVzwBFkuCW2ZXfTbxUk",
  "key22": "eKXzZnQ6MzXMj3yTUPc4JBdc1tdFapDKHXc4fS9RQFyUpeRKbfQNFcsnWz5YhSbDKGhNNW5DvY7ejP59W4giKUX",
  "key23": "xJpciq3a1yfaBjQHfAcspysW8BVLrGLwsbaWqS78fGTP77ZbBQn842ubADrt4yUSFNqnghkJ61h5Ec2KqVoD6Bm",
  "key24": "5PUUnsmUdEasNV6saKxRqDkKgQSFSLq2kpqrxUmNeDv6J6Hterv8K8K94ttY7KqLS6YjcNEBNpQ62YhGaKszo1w7",
  "key25": "4prQBdfnfEoTcJk4mnHCfsFkAPrk7vN67jF51scQcDNBy7mtTyjLW9vUC7fVR6bsH7iZarcwfFT1ZzACTRYkEdBc",
  "key26": "3ZfBxk3CvBb97CBerat5dTXiFKY9pG8zBj5m1rrmE8ZrggDPQfVtcWLmP8fs4ojaP5zh2HL6AcVrGRxjhp9gyRjP",
  "key27": "4wmRQ8nSiTcQdwf4F9BFANL7fujjPKMttCFUzTxWTLULtiyU6Pspv3n8E2vuT8h8kUerPcNpJPzWSXj3mJuVTJgt",
  "key28": "2cHTX5YWRoqmZcagug7mQcUzzjEn2kk8BrBTSXv9CcNXdHm8xr1RP4GjBneac1fr9gKfRcgjTUTBT1FfoeN4QKUc",
  "key29": "heMW8mHYtkCAiMyWpEQsByBvV4jw3Wj5X1VZUnKmY78tHH1ZB419WwmpVzUUSUYWZJuYZqRhTLKFZYUALaDf6xB",
  "key30": "4iMhFEnkeeRE39GctKo5SpfG4SGTwsYXTdAqvfAgB5GuWWX5wYiHvTj3xf4AEnWVBRrQ8aBorExtpSpj3yyVs7kn",
  "key31": "2KY3b4qHwwxvPGeZMJz1bwZCWeqjAv4Y6fkRSAaFhvXR9ZovQuY32FKTyYPTSZeuLv5FePo9LqCg2hZ9HR6JNGnj",
  "key32": "4s7nPE8verpKxWy6WqX37cC6XV2EN2qhiymaqZs7SZq972b7VqjzqEQkFEszYLwt7M3th75ikMg3vWTYmqgAEq1P",
  "key33": "2wvJQGr1mSGGMcQvGCw7GNU6e2XHogYuJDf4rUfVuWakJSbzKDNywocmkQ4FJUd3s3dKTjpeyawPNLqMdbGRhC9h",
  "key34": "2WQxB4bWD9qJMocGKRVaTx57WkRCe8xVgrynSCEA1jx22ozYgmvMSTMHRYd9dHHUAy75pmrNFsx5Y16ZbLiVyzfr",
  "key35": "3BHwWdGjBn9Lxo5dMpVN6tUPiCYLXLymaSuzsJQ4HXupmG4P9VdeF1xWYS179ftYfycMuSgURkXapdSutkZUGipB",
  "key36": "31rEYKbyvPEuZGuTxCJsLbAy2TC4BgMLxmPN6BR2CNtdvRK5TAs4BuGuJfibXTjtg93czfJTGfCr81JhcC9uz89p",
  "key37": "NQcoFkQtaFiBmiwf2iLJER3mVa6UWfywmVxtFVM3EWmyr2KjTXvM7StbewPjMep1vfPLjUpK2zcfTV2yjxvuo3h",
  "key38": "2BYXdCthmPVKjkLzx7rhxJtLB9CwL67EU8UwcgiQ8LyZy9oNV47HTb3AjunwxHmLStne9PHZefTVG9tDCazd5V2u",
  "key39": "4ZsRkpwN2A7N8Zo4RKe4tWDHqc7dRUykZxwBxsLmtg41SD6Gocy5h3vHgZHq39WTfPGFsZ4dQxpSxpcqr7zjoC9"
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
