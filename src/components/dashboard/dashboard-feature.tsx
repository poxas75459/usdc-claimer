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
    "5Sp94svDNUESt2shscLan7fbxEH9w2GYBvM1vVNwN1cQrmT2d9DT4ged4FwnnxmtSDBHc4dNj9StjZLAUZz4e7UP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aeAevB6kc1xZQs7CrcjreYqsDH9BH6BKduqZQyNr7GmDUoG1Nx1frHx8oT8uCqGnVe6ww6654sKuhesKgGHnd9Y",
  "key1": "5W6DseuorCNTLDyMFy9Dx8Ym7Zjt1zg4Pk27ZM69EWrgeksAftYr2GKhezaJ5zaS4Js7QeeAUFCUnjooiXYVpiyG",
  "key2": "GDH3FVcSEthK3WdcpswbLXtCbHNryMsExTm1gduqRqwwN2fiN8Mgzsfa63f1WBm21VivmYENx6YpQpijU7gmdtD",
  "key3": "2zfwqCwoao6rAykr5tGDtpGyHPBYeNw5gcLsYew7fWCqrfZRvGGMQSx5dEiCgmGkqrR1dUL5UWxNNi9rSjnxp8Sm",
  "key4": "mkya7vz8SsZoboKa8eYYyaBZWhW6dxFjmux1fagXvC9A35gUXJ8tVQD1Q37sN3pGgpZ4PHkV9cAdcU2PGhum4wa",
  "key5": "62Ejk97PtxyyqMXqe1AUBt5fgH65E6MD4j4fJo9bg3FGdU6TKb1eHKvR2N1qNdkz3vnBCfoy8SPTbW9A2EHwM6Fs",
  "key6": "4W9o4koHykSTX8iwJKE17FezPo1w3rT7MV29QQQ2QtvYiLKP9fhZwRYakzcLYo87cdkSMDAET3btuLFVFT5tJbNh",
  "key7": "3iSMJgC4M3uzcfBAM8aMVtsDtw9wUnMLA816CZNmg2N5CyAtZBrrhhd1UPPvFDFpFEyskG39x5bLJuerrcsdQVvr",
  "key8": "5KHLczwF2Fhu5bjyQ1jgmpL6V7offPem9A4ezdyzhvgex8c4UY7Xo8KFtdSiXx3TyB8XXJBD1nv7SaEL4BnGNn6B",
  "key9": "4ctxd11yFEGQcVfMBbYNSLPxAFZATaYujhWW7uckPermSQU5SyY7t24NxF1hrC9JrjKSMu1qigQVXMw8CpBFG6dS",
  "key10": "UoS7dXYWx8pKJ4y4Nm2mjD3sCstifW4NEq53VgrBorfsM9Y26aDVPdGWrVUeFndcKHWnH9gu7KqfmbqnsRfZ2hP",
  "key11": "4E6UgYAHpu9cWqms9CaeRuoxof4FtQnp32HQKr2kqnZZ4EhL6cq2do5KcyHetvvGcz1oVMVyFECtB92EECLqeTCx",
  "key12": "hGTGCjokn9HmDYMZABwWqSX6rWotageUjREBDNjmvXwYHxUnbbvEPKumGsNayEsxk8WsitXdfnKy9eZQMz7VxNj",
  "key13": "5V7yEo9LGM165kNMBkBP6dJjcHx93G2o6ox5QdzKkzQf7ZaKZW3NsG5xVhkNcK2929N5Ut4AMJzXQAPwfdh2SgAc",
  "key14": "4CR42ao2Gm7g4NqDabiio9aeLxUVkeW6aFfH33tEbhAYFbVxdJCveYcTwUopBbKiRkjXtS6a6Ygr9teTMi5T5cvi",
  "key15": "2MxQqAj2n1zEcRADSshJgbaQGNisVbV65AM22nuihLxkvrcbXAG4Q7vWP57E8EjA7UpmuXDGGu1XbBbuCLKCGcYh",
  "key16": "qTetmwvdGzNDAPTDAwNjUgERmxfdVCdoAJk3SKaPySymk5M4xASDBH5uatMhzDu5Q2zzBWasKxLRyqakn7dN7dC",
  "key17": "27UjsA13rgPFKs6QJfNdX2ybK2j5iysSgtUtGCdhXH7t7gtraweRVcER3CX8q8dC53yZbwcMz6TV1LdLXPi32mrj",
  "key18": "2zyG89HGSUL7kBt5K9SM5qhYT33kidbA3oTDdm4r9sx3VV451GpSsFSWSnrWyCEo2Xg9g1RJo6qF7hCnx9UzyEUw",
  "key19": "5zEzF4YyEF77S3QRGBvmJb8BgwGTTWefzZFDDsYQYMds3VQU9WvMmMyAze6WV57GNvdxdWw75Gos9bx74J4q9HMc",
  "key20": "234e9CPGvhzKcskgufbxEWMywoK36fGUBhnayY5JfHDpVmDueodRB2CouefzQ6FcYiCemZWaVyaj3jkCk1aN5N8E",
  "key21": "4r6dojTMv2mjiaZ47BDgc7agnGinH1oEPrArB3kP5JXQtriY22tCTBupGp4whL8Kn94z3dEfWPhoTPwAJLoAYfvz",
  "key22": "3Rs1iT6JpCLajYscj6LXtSR22RV2FuR4baZ5WiUkqEFRtbhLVCjfDzN3LVpdYouNBgSpLncBatiaxYvpZQ2Y9zKN",
  "key23": "35RHkW1QqNGBF3Vfg6Ga37r6VJsVqE3iyE6bDr7ih5ymYR5SEc1XnSqLKXy34ECVQixJUkjyE3Sunk4VYpikD9sG",
  "key24": "28WTHywCVsqwvDtzU4gpnB7jkGEEt31fpsP27QNUdURMaLpLVZiGrgC6HUKF1aFhrEjcm3Cby58rxj8m943TCqBp",
  "key25": "XR5EPKPAM2teRDmNii1UxBEmVxQWD2PENKhH6QBKo8rKKzrx9YJ8p2jREtXgFSTBuWweTzZFCT2Xi7H5DUzS3oy",
  "key26": "4E7i569BxBJtoiqXDp8DuGkjLV9t84fZCNP8R3Wr1k4vrqnNCcHXfkXrhMYXqwoKhJujTMH9KGM9pKtM76Gtwv3a",
  "key27": "2qpS1YZS2a74Ekh8Y7xM9sZwuMWrndUke7SPwPhJ3xMcbENgofZ8esGyAuhgQvdjJ1WbdHKDdcMf8dF6JgtskXCx",
  "key28": "2pTpyF6zcjypk8LNWrBDiqcjTSRb2tfKCku3X9gdgCfywTPemZe6gVnUULM5aV6rZixiczkuY1c45qMpvZVrtsDz",
  "key29": "RV6R548Tub1mm8dWQxUdmu1j3p6tgPpZNkRsSnSaApY2q8RHjkjHmwpExoxmqxBgMQR8fQVSS6TJeVWyaKdPwRT",
  "key30": "4vVsijvqcn4tiJmq6CtWKZUbtG5ovXmHxeqkoyMKYeXRAJaNbe9gGN6hJCiW76NSwvNqbjnBNuej1SEpCPuBxYAF",
  "key31": "3NkuMenAPSqpvPEWfExeGipbkkTvxjzKTPyWqHj4rGoN3fNwF8MauuSKrUPQeEkvNTyCjCUQJ4f3uYew5PmsgPst",
  "key32": "29DJFyjjcQ6BsmitXXDhv1eKs4JYhaeHKEJjwV3hEJ6F5aiRomDEf5dvs7hAyuv7wcYP1h5tAT4FWDBfyS3eGgSH",
  "key33": "3CjZMTnYB2CTkVaTYv8FCAzhzMnj4qe1JsBoVUTPdJdL1SUZcDrZGFbyYASh8EUVMDSVG2yerv3dhqPj7e5uWqNk"
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
