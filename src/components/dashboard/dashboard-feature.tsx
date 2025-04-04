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
    "2NttaYKddu6ncHmCeComGXvs3ptPvfs3n6tJxNEAGLNAVzJDKDMBhyhya1pv4r6ft7kW3HFEjGJgw8fhb7GjuggR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hC6GTAxunExH635kmSVjofgBVjK77cUcru1mhqXA45AGsZGJS7s1e7neEAgrQ61EEDj9scancHeWZNXfRLforeC",
  "key1": "5WZW75NwyLLogCdicYhjNv69N36P1td4Rm1SS3CTrHKC4LDXV31wbeHWTmcpQnbVNYDFAHMgVWyRj625Q16NnoiB",
  "key2": "5aYLGQUSsP1HhKQjrNkyTMi6E7GRAZYcVh8xYLiosYYf1caaMieWrfvuu7cPJ2scCvSdUhctf7A7VsxJ8Wm9syQE",
  "key3": "47YBPAMuyL4muF4rARyhPEyhj4P62tp7nXf8gjm4y4i3en5Hx8GPUF7YRBu5xzaF3GBKwjmNekzxvnJHcXsQmWNE",
  "key4": "2istiCPkU3roLXDdbY1e9VxJ3i3EkHvtCWXv1V8QkuyneeNkTUSJXhMc9Z6yiyMz53KgTydYKJS6G4jstVUh9U7w",
  "key5": "KMt7xz1cmP2nbvmS4tdwPBBGbn5mtJi2ukrUQMLDh6QxKrVPJ13xGkKRS5rHX6d79RBah4vAjHBY6YTGGacGn1M",
  "key6": "3WerF9n8kpzjjrQZhVhqPdtdHgRR6MjLzxvW264G6duihmmjFDYHeps6jQgyEEuenVxYSxYESWrDccYPvCkSgK7i",
  "key7": "3uRocTLzUruj6er3GtZzhGsCsAGdvy2hcT7JePmL25wJLJDC2CwEobn7NiPTb5pDxWcsuEwPf7AXDjs8RmXZkJ1D",
  "key8": "Bz8JLhVevmbSaB9geH5PkSCa2zdayZ9aLaTkFLFCScQdXLiaST2eS24KmvgQ8iHNEazxcQXVfaoQG5vWLvRGfpQ",
  "key9": "4fuYTRzZh2CVczfkKCg6jYmJdzefLcCQB8HaGrqHGKW5jgsh32eZyKiAzJg7MMwrsj7wFwCktiCNSmKtXC9RVtTR",
  "key10": "5czTVtAtArgVR6YViruFJG9yHjzRS88vVaVRZeuEWSQVtMC9VVXTVnzd35rRniSouoJkmoJuNP1q3bApkFvb3TMe",
  "key11": "2qsUChjd5Unhu3B75bc8aMNE1s2WjTim1JuRBNnfGf8f3txuM9x74R4YDH4KLseGzTniUwz8ByWEbfPR2dkL8m17",
  "key12": "5BAapkqTUYouQEUjax7BUD5waqSNy9RwuqAqynnk8w5wewkVvwfqF6ECUc7oDCLZXCSKJZT7npShULrtQxHqwoij",
  "key13": "2a6Qr6koXxqLhAGZybss1gjywycxEWvQXZifnRssCgmwWRwLZCro4gdW8cE6cMe6sxK1B9rvi2E5gxK6HChhSERi",
  "key14": "5rAsDS9Rmns83URXFNwsR749mPmHTvD1cBZM3iemt8ppJMCt4G47n9oWKLZc9U5Xe7A4DTkiysdVj3BnyY4CRhqY",
  "key15": "37ZTQht86hh28ZT7iwptkjrX3nE18Ypt6RpKuDswPLmyuYJxADG3zcjxk6gf1vHK3k5bhdxVinXPXJutUxGuofH7",
  "key16": "2CtRoGMxjh7dFcCKYVh4vBTJCDqzHTcaKFz5sfRkj2JYqybKNgyLGFRpbW3gKtXoWAyxFzFETvig6fgY6UjenG6C",
  "key17": "21hmBLj8YYx62eE9YSMaSQByHdKdezrFvpurGrCenWbiYEVnzzDnmnfog4kY3HGt5Rw4YQaTd599fF6YaTNTwCpX",
  "key18": "enhqX2koyBBBfe6JE6KDfnHPBu4DC8bjSfFXzAb5SxAcVrhm2UuUnnaZZ9VzQ5tHmt93oR3JBxQ7cPPvB8yubXa",
  "key19": "PPSwnZwcB1Zi1HyuNdet8pZg1t2dem3aRwa2UvtZf43pwgJ1evN1iV7PZMqSboetXKtRqDSSRRsfwHYmsyZjnEm",
  "key20": "3XmFGjzLE21G84LVvwJbo3jz6arsyxuwtqEro81tAZUr8Gwh7qd2EXZpeBmCnYLsq8vJx1uXhkPZ8V9zeLBtw9eT",
  "key21": "2qezorFoq8MHQb9jc6TNm68vDwwfqaAfVvKxfEZgPJpYnfYKh5fbhR8YBNQhbr28cYUvScyrivBLupgagBZ7HQUb",
  "key22": "59XYhEPUqc3CwWBEZAeSDkfqcqeZZwfh5W5PRvrux1r5BqkKknChyyep3RtnEi78LjRdw5sWEVc5zk5HR4cA1bmc",
  "key23": "5Mkt19cF4Xzcv2XCqjw6LwfijZq614Pt1BtmaGS9zBYUbU8czTskEHWg8x5zKMJ7fDU6kkBsQ8dJZdokZarAfSTA",
  "key24": "2hKRoJmifEvDSYhokiZFz9trg4xmrprpG64zFELyUuhKxDiwuxRCFqGDrfDHfojrCn93rVXDN1cjfbQfJMonwCzX",
  "key25": "3rcmVKaqETvUhPevvJJ84mKmHv4yvwNLttU8EcT8wHjzww496jvrSEGxnzTfXRxPhWruFhy1cR1ejToftvD85VGP",
  "key26": "2ewJubv5RJXSonnQ7fL7kTJ8N89NKMXaVkypv9d5onq2h2JnvRQPLESxo8cxkW5oNkax8VMJSW4THtCoqtmHPnje",
  "key27": "5bHEZ9PdcMMYVomM92E8JTEyGkKQdKdhz4D6qCKAxn8srh717Jwey8Ewg78vyba7zzNDExUWpvtYZRvEnLSu2FB8",
  "key28": "rNSoF9LeLfHJJaiqHkNzRx4vD5cz3LnH3m61mxRTs5zEw3kNrfBoKvv6jtZ8jNDFseb2Lg6m1M7XFkJTAGJwwUb",
  "key29": "pxgqW93NhMMiQZwo2E51uopfsq8zVkuvcKv6fVunmT7k5298tRL1wFPHKNXATt9tbc3Fn94uR1EkC8M9vMRVyzK",
  "key30": "PjMhL81jU6fGdnanSi1TXRB4Td92AYffqB7qDZDhC9LBkux6M29nBAw7Lt4xRwWX7vp1uRweWQj44zFS8dQye9U",
  "key31": "5QWq2Jwi7UQEHNDRr4o8yUL2xCogEUTH9w2DXoCgrgoYExzGULWwFvM8tdgpYKPcuzSRocFej66czpL3H2stiXUq",
  "key32": "4noTU9geHaorkJG2W6ohxmXUNyz8wDrgVtze1cBThofH9wkerxr7bnz8txnskdqmnBoJqAq8bDLf5VqimmGYswQB",
  "key33": "3thXXTxVERaPED54PWeFw8UzHtFikCZq2gDM8pi3MxURHMAUceoKDP37WW1TVYQN5ZNLi5Nufsn4rv2CfJvc6tmK",
  "key34": "2bAGP48KmNiasQdVu1Y3i6Tfwe4Md6pECdPAQXTaCwZHMP5UfvNvmkH6xpLK2QYk1DVcLN8hvKki8AZ6cLLkz4cV",
  "key35": "2Pa2JFp2n2w6KFLi9kzMeZVNeTFf8ZF6ZZVrNdP7YfSDnrxWLGwWAWDb1ENans4hKf6vEvHB2x8UZxJ4G5DcMNb9",
  "key36": "2RGx2WMrcFcyA8mCGTtD5PbA5JAqBTzTNy4q4qJ9521FpyXWuFhyTGJHFsJMNowiwP8AA2ZeFenErccCdPYmPcBJ",
  "key37": "5QEJQRi83FBW92Xd684yP6rQCNeEv6mqh5RHfXc4RsJ3Xq3i9z7g6rRECV5dUGXAZYH9wHV8CPEuUZAZfW7qFHab",
  "key38": "5f44DpJCVPBdfaJKoCAmGxongqcjvvynahL8S3pb87H1HkkPnr2AfK4oorbpHSyyZUpsiQNGuCCTdFrEvWkEGWEi",
  "key39": "3cYmymZzoHQPkSoCXtBLmcsVzNct9Ur3REx8Q5pntrcse2hXss3dSrrH7jygQtQ3GpLtck56ueh73yxEEJCoRAZE",
  "key40": "2rCcZcqNfJzjdfv3GQryzNtbM7ecpjxtdA9UJj5enSkwnKGGL4yjGyWWjaKV6JmvLD7xQaWnvVG3u7Xysb5cTq73"
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
