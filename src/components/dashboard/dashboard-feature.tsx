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
    "4wwghdtBzCTxnwQEc2cxeYCmMGqLvxanyTefECYnNB8YC8E8j5dfJUjtFMc4RzmRfVAPXRmHxPUYAEzRR31BeXGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JDjQspAKzfWR5WRHcomVw4htRUZwhQz4A3Tgg7Xdwf2Nv5YhwPsvVdVrAYKWWLTewW3W9vLdMe8TZLYcKne2R1L",
  "key1": "y5EDJxQHu1cEtmcVqnx9Jfo6m7R8EJEySK4uKUp2dgAkkHxkDAqDff3CSY5FeAyqgAeYGzepSypjG4FqfNGPoWz",
  "key2": "3LSePa8pXDFEWkaw338RTmSWEEZZEcjHD4wH4QE9m3mQ81QXU4BEAzq9uhPcCHF8w3VmZaiiCHBxWBcUrMhP9fYL",
  "key3": "4PXGncqvahQtzPw23akPNT2i8YTuaW4bed6gnwTLmcEmbdFkio7TFrwrwym64F9agZYbFqT3ETGj77pMybdTsJSq",
  "key4": "4FMkJj856PC5SVHYBYTaAsP2g7PDnL2AHNc8fu2k8SaYVqsW47hfN9tJqgnHJmkKBmrwp61u6hkD7oBjKMjPLgg1",
  "key5": "5kanC2AXT8S7bo9Eg4xtct1piRxWJ8xkRu567nXjw18yzsMwnbRDgW9R1F437sC2jEJ8CEFg2pAfaBfCF3rRhGwV",
  "key6": "5uem4tqRfM8wCfqWAeMe3LzTcrwxkgfKSJR3W8eMuTnBD6bKacR5ScnAWfvLB6xLYsxhe6qajy36TTLFud31HLdw",
  "key7": "4zqVnQk7XFxfeXviTrFdyRJ8AUuTY3KJha7Q7afzFRDzCPFNetTuhmyNdJzYXpopKwncY3YSFpWueS936NKiLzDi",
  "key8": "2TX69Es1q5BjTWHQZBmp3FT5QwuHaffES1gHzvM9TdWTmY4PjfFzrbjB2frJD3ng9dGvYxhp9GyD8kdQgM8WrCm9",
  "key9": "3btZh5iroDc5SE3yM8oXc6jAkybpM8WNwQ4oxiJoSNyZdLykR8ij18K9k9dpKfSPf88GFhGWpCXEs1cjxVQQkhnA",
  "key10": "41Q9TYGyLsEgQd1z2Aes3KyPoFfDygCKd5FWAh2nED34WLH5ApnNvfnbRFwoK5mTMex4SWakim3EGh1q8yRcbTXN",
  "key11": "48KE9wZzyUFS48Jw82thrdDyJWw6gnEj33F22ZNouJvJxFSb9cbAQcw18zZ4hGGtfYKuY24TDKEV8j7XZEfxZFG1",
  "key12": "5FtV8jYW7c8jkhr9D7jPYJMckLxJrS2eHoaoaxCdhbjHD43CkGAGuNnkipWWtPN6jChFFCadbFj8994oPYEtsnWT",
  "key13": "4aHMtP8KbDksdwKPdemb9xsxp98bBRjpGSReUNF9KdmWcv8o867mrRtbuk1ZRDPBgCyCx7nDz6M3rNrr1xZXHDQ5",
  "key14": "2jucjKsW6CnEHuXx9rbt4dQqJZrtXRoT6HiUWGU3RuWf9YErhhWVrZ5owFCtkLcFBwG52mDwWY1CggeaZrf8apV8",
  "key15": "47bbYh9xnLQHAPiKR2oPHxRwMG4S3xgaX1JZeH48kF4H9zaAycUd3Wp5LnCZx1gb76YUA9kwPqEwCgcEKZGX5ouR",
  "key16": "5bv7KjUEUYZfRTtKrKVJULJGihjDMXaJWAqwThe1CwozVkvvvvmSPEBSJcXLXN2J4EtJvaJ5vJBJsH1FoRw4WZyP",
  "key17": "3ETMsNVNxdwdsvZg99zKYHwzsSa8WSdDfa3FW5qs9miP1a1PPKWpkDUYVn8PgsuSb81bG7NNycFrZWR9Lnk8JZ1S",
  "key18": "4ZggXmKAPGxpqcvip1bbeskYHcTEAUTPhvmCy4oeUWUUSAdVBcKCqYiVwpFmdrHczyM7NjmXdDmMvDRGuxof6aZM",
  "key19": "5688xijJkBSRrY2NfPAwQePv1kRMkuzFfcvrKaCwTskDRZAXMXMkpds22ptok3tMgWV2qSihgJVtAjngAhVGESET",
  "key20": "5sJ1WnEKDYSGtJgabq1xmX5NRmr5NpSBKYm8FpDP8JoHasWLtZ5em3yNhW2FdqDe8Efwv5ThbEYcW7xoEdQUBwyK",
  "key21": "2spmLtdDctvRQgND4yLFtAdjivEfh88v94LKPaC6e4vzxqo6woMqPjcBbqDKRWSXEsHkFq57XQnQP7TevqiDoWww",
  "key22": "jRAdvancXb2c463vd7HQRuezqM9vfrJirJNTYesUkRTx1rfjibALWhuAqGmxwZodBtZwmfC3Tb5KerLjG3o4Put",
  "key23": "25WeYMVnKfhJDyifEDwZ84CGobFseKqrBWiXoPKPPhwyMbbm55uWPNqvJtknRM9q5DVCwjJzHYroAYnomtd3j95B",
  "key24": "cPn9tor8jM9XZcHLFQ1o9yavx6tB3n3nsTV3y4kY17m2YBMXYmJXWg1KFL5Phrh2WvCWswUCeVPYoGukJ35XEyQ",
  "key25": "4kC9T2vDedqyLjzRKmWwRvq6nVZtca1Z6a6YmySbYXBvRodhPD8hXqSkUr6Yx2oTfXt5fe6Qbr4eLSk83cGynUAY",
  "key26": "2KmDJHQ2NRqkufKbr49kyrDVCHJALA4cGoUWRLe5QVBwNEcG1er3ue1eGE7pN7HvYa5Wk6pzQdc4zp9wEEAjQj1K",
  "key27": "4D5nPdmJYCBt5kA9waEXpuCJ9YSwUBYXWpcVboZ5sZwdmebbReKxZGZvuUiWBpxWRAYQp59TXQCHagbyLnFfcg7S",
  "key28": "3TGKjAqB8oYvcP4FBaJkAwHBk8uDbtDcW7Sn5TPxKVyAFUvs1T1s5RhYWx8N5ub7w65JboBK8g3aeWZsiNQSAoia",
  "key29": "a3QxGeWTnqCLySqbdGeHXPuarzjks9ziCmJzVFKgqxZ6BAbe64gWPQnHcXkJRHRaHnt5Hk2HAhfySqSKWdE3drN",
  "key30": "6V9kJhHdV4w9PrJPKsYPA1mPQdBWiff9dznCHe4vaEDMmf7gKeTpnd7wuu8WpRZsUAemwcZ2n7J8i7dhNAhJZvw",
  "key31": "22CkNLK2VofTBoBBXd9zenQDYDV5QkkKMBiGjsTZC2fS6xvxFdgawGdWcWNENR2x1RX5zuEFZutgf7CHZtJeMVsc",
  "key32": "2259gWieAN9DtPS96d9YQPkfob9uLbjHHNPixpakZMuu8dZWdx5WSSa6WVtmTBziJEK2Cu5c2oZr6sFcj3FExm2v",
  "key33": "4hxtD6jspkxxUvf8pru7MJsvL2DzpxN3bsmgBtK7Fys8LegTwu4zSCSV7QDVGVg3fcGec2yYPhFNhdUpzbPeNC8c",
  "key34": "E2d83pSFNuUKn1BVBd3S3sETGLtT4SoqBF9B2sNz7Hh5TnY1m1ZYhabsADBGcLDFcTNtMTGFmK1rgHZ1kd9SR9A"
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
