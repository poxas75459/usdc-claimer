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
    "5ZJtTk3owgPBjd9NAbjvT9wKhGU96XhFRCwSETs2GYorEy8uA5DgzCKsLefPoaPyUGjy1hNzTyMmX95QCUT9EX2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sy8ZbFDESfdcm4niRiNKvyxoDJQ4McPTjB2fC4HPAzjrJrEKhzuFcTW1VnvZDX2EGJaAZk3SExmVAGCz5ekZgp6",
  "key1": "5icJe9yfb5nUdGr6rT11nspEinSFMP6TP6qNn4oJ5KgNsyiWtwZCNouQ7rf8jLUKFsaNav6H2LDBQwqTU46mrcLZ",
  "key2": "4zQDciVUyLpEpLbMGMhUKZdq539qErshGrFhityyugWBwc32AA2FJypfnxkWRMvUEtPFSDynDnoLxPEVYouupYhD",
  "key3": "4my8XnprRZYZA6nZB8mCoNDBCMbabGvmqzoXWe4QSuMHhtmzidXYuxJs9trDiPHGSdzGT66ALeFknGN1Xt4XGXVM",
  "key4": "2EWzR6f8PBeUCfYUd2jJDz94R9pEJugNeALdqmFDx676Qj6aipyqEtvnFtLxEx53orL8Fo9GTa3KoeMFVPJFa1Db",
  "key5": "4cP8TicKBxLh8wXX3816nWqdMqbJq8fewXT51W5oQHF8odLUWxZHTemu66BDM1cAFGbYyPPopEtF6w1LDRJCjyhb",
  "key6": "5dZsZdMHjaKfPSYpk7YDh9ijHN8VbxbMNEKTpsXpLkUh5VRiRARtGvCcRdBqdMSivCBGkoKG1RrUeuXwEYfCDv6B",
  "key7": "2JuLaQpeVwtjGcMc5x6oMMHAu8tFtf7mnHeWkf4QEDdnpKYB3RVwXVvwibEeR7s1uKWyFwmNd2aM7LNssdtCbf5Y",
  "key8": "47RbnFxPsWpDA7SLk1MbnN7GDjoxWgCERb5AoefjD87gskp9bPEr6HT239hUw2DrpyrNeCRkCCyukQUakRsesdsE",
  "key9": "4qr4axUBeXuim1mjeuJtTM21yo382qcPY7Ku6dabNTeNAaD9TdbZxr9mKNR2eECpVfXBKgmEhdAg33KUdFqLnPPa",
  "key10": "3P2EC9zq8KQVDaU3EYdYVXo7s5fnanxKFR1UFVCaZHPaxqBZZX7JUfLAJz4Jiq24LNRD1HatiUbDDaSHQeU8K7fS",
  "key11": "5KWp2i7LkZ1BE2JRX6zHhzxk7smzyKYB1qzrTaB1cAFjvUM67FK7UxMJwUVpNgnLNYjY5CTHEjYdPx3obKH4xZx7",
  "key12": "ftVGMxCGppXSALdHxAwZfXZyURQfBd6G8WC17ZniekgrUn6KSJ3DHWS3EuZBbn8FxVWJNxKAZsnEGDTvi1dCwdS",
  "key13": "2scea4RCWk7CdqxBwmHyb49EnReJHCtHcEd77xXDx1CXNjEjZULdf6T4U7r9SbTRxHoZvpP8BTuTo8rXWv64XtsF",
  "key14": "4G8F8dqTWty5uemZsigFx5HimSYRCQFkxFG7de9GpKu2CBZY8SR6q8YEjPhzvHtMt567rFcDhiNSU4162UdfHFqD",
  "key15": "3bi8XjAF2c8s6yFmaYVXdsC2Wf9oEfm7brAufv93XdcLUVM1wU4H16PZT5RQyb6zcpgrJ7uN7vPvJebfNqwC7htr",
  "key16": "5DzmcXBb8cKzoLPnMsJ8Z3Dh9YU5SmHiEnqDj3grsYvfVJF6e4SQmrix7vMSsaXc2QxF2xJGPFrsLWugFy4vpf4R",
  "key17": "uoW1U9PiiuZBvF9gnBvrmTgbH49wUmH8jdR37x1BR1dCyC467QtWqMkaXhtoELztDhwc1gTtaWdEqQFpgiXBN1g",
  "key18": "64wdEiYqj2q3ybpEHobttzNAnJ1AMYicSJjWvhAKxoraBhWe68JMvjwgUM9B42uTzq1rFuVF7oBd5jTrycYj1E1p",
  "key19": "227tAauYQNatWkVmrLTZmrQCrMfzpfU9KcDnqmbLJTVUQz4dZjH9EQTbP4vD2yegfsxCKigCRBn2JZsKrijeDxNv",
  "key20": "5mb6gsrTR6JHrDyZF4FJMbbxFjMNHyAxPrivKGVKqDM5xmTzwQSEAi2jBtWYJ2jdQawf5mLXT8uDYamgeYdi2EW6",
  "key21": "5oZQAowtExUbFw8aCjGqsBhAkzoAnNrnMxYVPo6oVVg9m9Sn8xuzHf7QGUA6GuLvtG4LC41KDkvZbdEXWrWLR7nY",
  "key22": "4P8k1gPyjnYJUPbeyGi7Aq6vdTRMTt4vKPFBmw9RFHKVqc2mRyhZq3uSS4h5my3u6Gas4dJPc9JPjUBRZatHK5aj",
  "key23": "4ksz346yjGQssp2Aoq3ubCnNEN3rt1SuEXXQJzvzMvwfG3nYFd6tJo3FgMHMZP8RCKekSoXf3yLtw3PFUwvZnitp",
  "key24": "2Z5FqtZ961HPqV3qWcRJ32E9MDtrapKhGRw69hc2oTLfWypm4CvSGcM8oa17QNCdgsayAEs8NxeBscpHx9Wz3rZN",
  "key25": "4NsHaUuuG1pVd8ixPXneyD7RsVi7m61F5kaXFbFjfxHQgp4P88sNCtKBzvxTWPDSZBXrwhdHq7HJZ48YEUmcpmSY",
  "key26": "46uG3eQodFUiQ95vxFAAEqvUMjbAPgAFSBrhkx5wz7r4DbycxRELS2sfZNgPC4VfAZgRC5eszdXCkxVYK9zWK2kQ",
  "key27": "STwS4kBTTaARkAuD89WG8v7ni97XYdauXrWji9xveJJ3WJZT5WQi1WLVM9nwjeEhDKU4DFYAfK7uKbLASUiRrui",
  "key28": "21pRrmm3wRniRVumCAfMewTA3KW77e52r91bdowEkG2xV1nuhZjPQVKuRhxUHMpYtty8tK1X1MJaEm4mwfEDcaEk",
  "key29": "3shYne1g5vdx6GDvYiEy9WGkRNS5NAdK1nu1h9CxWY8CWfdLGWx8XgDY8hPMdLmSNURpzs8sNvz5scTKSQhyi9NM",
  "key30": "3XHkitYjoe3fcEZS5QafsB1jgLffSuR1S13hcU5zCb2MZi2wbDz58akqjUayU5KzjiyaoeCGFgdaymjR1PqYmJtx",
  "key31": "5wSHAxUKSM5UJwzs5rPAGwwAQVE3m1WBETCtrXD31CqWcioUj8y2LxXQ283tdyEX1BZjKXQqYkpEdYLk59d1zke6",
  "key32": "5KSwHvFyZANSQRnF5rSoBNjvfmbgWJC7WxoDLCgi5Yf4VnXy7TxkeGWPhPcBwfFijUQLgPQ7miba8KHYhUiChsNG",
  "key33": "2D1wH7nQxoRX6DUeK2kXKpZTQJ55U1F59hYqkwkhi2TLj6wzN2HqMXqo9uyahnNN4jrJ9mMHhvjJNx3imL54ypTg",
  "key34": "4mV3Sza4CDJvZ8G4JvWwoGV5Y1RqWcvX1DzMEPa1fF6vmX5ri7kZ7EXyXFjLr546WHMj5depfF2jQr4sSWozV1jt",
  "key35": "5rKyPRcggU6QuJZo4gQCsQUA4GRbAdb9agafYaHx2z9TSge4QAKxcBbW6xnyomeL9gW2XsiEVKYiFDzqK4qt8h4T",
  "key36": "38PtW4SjnPaiBS8R26d98hoU5SW4bSvoRVUVQw8662j2WiSYeLqUemcwFCG6agwv5fUVs2K7gokkW6fNY2jWAG2h",
  "key37": "tHoMHp8HRVB2agxJwx5zTsNGtnvqo3TvPSrSdhCXerLuUaDLruyye7P9JQWLNKFuQjziAMQ56PLREW9wBJNQwcd",
  "key38": "nDahyMKmn5VRpA2Uq7h2A8UGpQjJg7ChbiECPbgBmzfc5t3P5TkhESn5KT1WKHgBXMFdSZ33BTDBebkRz9sLAgS",
  "key39": "2YWT8DB4oPZjwBBzAR9veLGcrCETr9rjKWG6at739e7BZ1ycyW6TLbcTg6MEjz64JQKap6iPhmtzbcHph7ntLD2U",
  "key40": "5HbZMtLj37VzcBwLigUrQ3cZBxTdFpAaUhmq46WbWPtkGf4VWXPaHsx8611izh9AociRzE8nTWjaaU7gVbG2uLBD",
  "key41": "4yt91DMQk63sco3gFarLgprQjH2n5ajb3rwM4NQLkEaJ3djFxgmgzMGqNfTL5dcYsKrh4s3fdUh2zsnaGvjYpQwr",
  "key42": "4biDAsuxywRSsSKU18ujiC1PtnatwtnSa9hk21JLxdx6V3Y4yLQQkWSUkfdWDzKvb4euerMKTvXFGmz5k3XM5qHw",
  "key43": "3KCXAYkdx8LiDsdr3YVNXSjJCCuQevpHBBHUmirTpTUB3oLFKx6JSwghJ1gDmHAaNezb9N8UjC6zQQP8ZqfCwDBB"
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
