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
    "myoq2tKUAm2EMbFMBKwDho53eBbw52YQ6ofMCHhCj2qw8qggwjiBePF6Web75uz8E7Vd68MDoWYudbBxfNu8VTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uf7xLx2z8HKUaAHN7sdLfGpf2ncy8MXLNCyDsoDpFxX6taUkRnMSr6t4EcpD8DDEAEhdA1hac5V12jNgMxPqm9b",
  "key1": "3R6prvbWUn8GHgLCBtNBNPc2TA6DAZkQCDoYp71F4jvWGZzEpctKYSgfXUsCvzs7NEdcDsMovLi1CA1hqvrbDg8g",
  "key2": "57nN4GjAe3sWqLwexA6oyTVAsNmeaTpRbueM37Z8A6MTSnvuHbJHGWfGLzhSaeEGdsbTNnbvbxAuoLzv3SLuifWf",
  "key3": "25QrUTyMSuigJ1tGBtVfQoyvGboDKgb2oaj3AtRLBCF4gZszGGtpqDMBrPGL6q6gZzpGLV9NsQWeLvNegjJSx8J6",
  "key4": "4CZ7MbPiSn82n9LxGXAccVr2Mw2zhavsfoFtBQEoDaqzw9gH6i95Z7faeKEpEbMvKAL9zpM73FSNMRgT2TowD7Qy",
  "key5": "35tRbnKi5P3fYMY34U3SE4yZ8MfgDyCv2Lmr4579bL1UZqASgX4AWzqHKhEiEeAeXAmNHLnHPjK4bY7UHSexSRw9",
  "key6": "5kWT1SAftMqzx1iPUZduSbLRpeMEH9kRdV8a7TUW1bUg1RDHd64W1AJmaWsqnvDGSt2171GkU61fbJqMVMhBD3o5",
  "key7": "63aSqZ8y3ys7Wkq6eX2ozcEtn6UHTeKSKFfzpNVS9uyvsJpDQXziJwF6viPn88z9Cs8eY1qzAP7jpJasL8aL32qU",
  "key8": "4EqmL8yMmxSHthLaBn92FMVa1pmM3ANGXyRjXSVQihqRkc8VM6AyEZhKw8on4dUWLrG1uB9SY8WWrrb1rTYNAFdc",
  "key9": "41NexkCr8QZnNtnKnQc73zrStbtiCJEMbJQ9XY557AMrqPQ1tK2fJSKt14q3Yu6czWiAkLWegZT1TqfemTr7sjL",
  "key10": "2hebiSBn39VWwuL6VQjLbrEwc3EZfKEXwHLwmz62Zre6giKmMphd6wbat8c2QLbvUEkRCtZDL1aB7ZYfz6XtX3v4",
  "key11": "ewD9RAijPE213V1NQQweQqiTjvx3ukL5R9i143GUprVj9LQrY58k8rJ9HLm9fziP7kLBn5u1JHoZ1VTFsJ88BB6",
  "key12": "5KPUBa1QZdzj7KrWZRyBEjzJXWVBvtKjjx6owCwLwPDYuYpdmBF4xQJ31aqqXRyWSLjvWLJWEjpiUX5CcsqFUVY4",
  "key13": "2qUKaMGrcdGA1scCuwvxg2iSDWhht7VSHG8bRnwpwJVAmiMDCaG6C7sqZe1tHfso4M7ajwYy29Sa2pvKRyYWmzwb",
  "key14": "4yxRz8vmUUC6q6TNb5iWQhYhPLX9tnkUMt8Lpn8swvXDkC1VYSSzAy7CP23osnN3kG6XMxBQdiJpwkCKTUKs5UWC",
  "key15": "4ywootGJH7Z1a3vgyJeTeQKCa4ocKU8vnrLaHwDogeQdRvCAA13p8Bwz4LRkYDaYjSimLszWMyrvBPi6vjXcsT2L",
  "key16": "5GTCCXzkQeQNBgo5nGiZexhLiLjCWUeNrDY8JdrqaUR3SUy8y9XvbDUDMgXbGjDnNYzeYPX1HnL4FJ3Y6b6WRHdW",
  "key17": "5QgFe9dWUEWkg6HmXag6vMywM9ebnm2AdTCxL3KJQuKZCZBCUDukTPMNkimcABg9RPXLa4JRo2HQpxzUDFDcm4wU",
  "key18": "gebVApRbYNBDTuJhBdZMowRNeUNkSeypUEA1Scwa9Jk7jDdUFNyAxxzPW1Di2wFXbdv5d6miZnedCtnbkSqhyx4",
  "key19": "3hGdYQgUp3jzb2A2EcPCM7Muk4tpLtr9AdgbKN54619hkmZMdXDHUMtDqvS5a1t7Gm3aGoAT4ZpSibSccXRpXWBf",
  "key20": "2R4EkrG84vTxMdHGdz2mRsD5ZxM76Zkas9KKpZVketDki41bQTsyd5cjPhugJUw4eM5qBkMV1843766owLw8Wp7y",
  "key21": "62kcCf4ABioJiga7Ejs2AV95A5EamghvmPusw1ZAYCA4URNi34ava32ivsS9prCK87qT6XNrz6MmLkBHry17j9a6",
  "key22": "4XHirtjQFq4G25SEDz1yDQrnFfcSgKvJX997bQL3J4fxu9TaUP9cWdVrw8czCjZ4GgeRF1BCBE3pyBToH1Gfscpy",
  "key23": "2Qzfdei6bKf7jpi8KpdD6nA3oCtHKQ89fNkpeJxPGtYJUCwByTk4sizke1SBxKUQ7tXL5iN2H7X8Z4URvP1V2rKA",
  "key24": "5Zpk9SDeSVNh8gEs6XKpmr9AwXxZ7o57NDd1RsV1pvpYk2J9EbKkE5khjtVYZotYPdEUhfwC3wjYvLPtkQMjPcAF",
  "key25": "21M6TFt8FrYCz7HsvN8XGrqtFMp1ETWyA1u5vgCD3wfe2CaWBdKv7HRjV41vYnAWd1sQ9G9Le8YiJRRkLWEtGcyH",
  "key26": "2qyztvWVya71FzKUftWAPuboFKwwMK3hUQBymmgSrWaoBZx8dt9xvavoS2up2eQ37cBYUQAp3hCjPcnQFi3ZdgF7",
  "key27": "MG6j7iNXbacwRKifxFGgGbCuK6CUKyAAheZ8B9K6FJDL43Yhzq1aZEgrF1XnREj4kU1KJv6pqS9EbyrbieQJF7P",
  "key28": "UbUDt37nAeD627Dx7j31ANwxmM4fUmhpiHrVTAt8gNEyykKtWoSEQfvTrPy9hhMxhFHPzxYodXBSHP29Zyk8j4F",
  "key29": "25NqtKz5ruTXqxBsRm1ER5bgxRvHY9qdaTmq4oPdftSTHb6jkWRzWxQ8s9bFBzAWPFkDZzt4dj3apVkgWqrrHU6z",
  "key30": "5mqZikaon1Zyseb4pGmLBVhMGSwAiaZMcQqyQUjY9A8SMtcwahxN9R6W5fqmURpKyRC8pA9gZFXDV9oYEmHNZfay",
  "key31": "44bfFUhaJa35qC7RqTkhMkfy2Ve9bVESu3CqXoqyWt9uig2zcKneQvFn7gebKhA1aLfgozTAqLQ2SSZSJnyBd2jL",
  "key32": "EY7XWcsn3vM4pSALgZ1ZE2U31hLtMjU2B1czEbbDqScsdkU6W3AzvxBdumTdpVKKgkNhBU3joyynYANefU3P7nV",
  "key33": "33EVN8oP1TyXBmY7jfYvJzkWVNLPciDmoGPd9NmfNTjs1KZQPcyrjX72fJEPGxnaqKLvkg2R6NwHBUBmibJ4WQke",
  "key34": "2WpgjuCJUmDAGriTBv1Wb3adsmT5RrWfjdSMJMCqnKxFacQNmpRHjx7aAnhQPxawWRC5f3tNREca21w2JKQ99kDg",
  "key35": "23cRCvtWjPYqBmdP26rauB63UieLEdAtV8PnQUdypf4dLuxsD6pcffczxB4cdu3JzrVmj34LGWqcjqr6QSSTmqEF",
  "key36": "57BQLZJBY7zHZ4j5zALV3vDAqPVCtEkTmQ3NwgnxNkQcoP6NYwvHde4E5fEju3QL94quseLJMskBz1v1NGY7yX3B",
  "key37": "3N6w4X44fdgqKUpeBRux6mmCWBTm2hhCnqfRcA5N9PR9jTq75RDdrXvefWNzy6Q2WLFoNDKNCFrF7a8ELE2k6nC7",
  "key38": "3Ue7zTF4rj4YK2RE9JFWPzGFaBaNBidHAQ9fvn6v7RheaUZUWaiTiyoRyyPHSHBZiVfKRWTk4AR5SEFZmVGvbAU7",
  "key39": "Ag5YdKhLG7sztTFdBEWjGCbQNXhVna4gi6sDExNNGkUkLKpRGtBaNuSJZFhf82HY7dVXCxk7fXjQqPCVro349W9",
  "key40": "5a1cT5DYagRsMSRr5sSfew1q4L7LSSTbJ7kNhE7Uhu7oQXJ8f8wvtJnRMyR17p9j2M8En82H4CKwuz9796Ki8ejx",
  "key41": "5VhhEMSSHFPqoGsE2eJ8oyQjP89DBzZnLy3BeEDX5gVK5FE4K284JwF7eMDN3yG472rEUtQxzjB6PqKVkJv943Uj",
  "key42": "4AHve3TJHTKsKaxYPk56fPgQeEeRjzz2zx5m7P4P9cy7qJW4tQn8Rx91v7oyZgcMMQ3xYmTc9P3gG7GvEfzDQbJu",
  "key43": "4wX4oRAj2YgSNkt4HHSxuAoVqq6Q5ZGhsz5bNMrRRoCF4wrRyah4gG3KynTjsd6ukSC1WsQWfMsqvzbNKere4ajL"
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
