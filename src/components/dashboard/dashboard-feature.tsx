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
    "2ECUiW8CiGLgq5wTdUHsMvc3B1E7ph9MShxoB9QFS7qoFK32kPDakyPdLPW2gPVn9nVAgVNyrfzitZS7ubJx3XzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aHKV2NBA12ZC2ir45cfvJHsiK9TpSzshK29dxz8KronfMgXuGYStxLvpaxCdGAiCW4ezDw4vrYwgrJrbMctXP5T",
  "key1": "5GG8LZf6Q2six4aTTBTSN7LKxNn1chJaF7SH2x9AmU1j9z2Hy438Q49w9Gp5V46X2swcxaixyeRFJjLAZRsqnTEp",
  "key2": "8wJTVKVUdNFwEcYDzpAV3X9hdY88coVvReF4ZSFFPtpxTPLaDCHJX9qdFAVmAda5iVcMZogGqupRGkKvKykrjH6",
  "key3": "5xEz4g14UMCncdjBGaUvAtpX6X8idpDFXmvnZM7c4HUuvWWHhxoXG5xrFs6G9JfcqfTnC3mSd5f7qo69SNXHPGYi",
  "key4": "2LZvpwwqVdHnhRe3r2vydBtWryQtTBL88nioKFv4kCV3sMugbhSziqAksf6eKVN9UtJXaeGvxSnibjT2fiSSTJbZ",
  "key5": "4qxpwfAa5E6RrUhdxMULrceYzud6SoiqE3Hp46aQ9pAhaBDo6KDqGj1axaqiZuB3bN4Ru7N37HrNE8WADozGLK2X",
  "key6": "5mdvUS5w9VXQ69LdkdMGL4VVJa1x8QUQnZtuaR1pDXpvf61JhnFZThkt4eAgJrJ3ywwkA8Fx4Kd8D79u8YSkFTxS",
  "key7": "5MDMssm483nszAPPiHPCQbvPCkKE3J5sLEZ1JJhgxHmQ8TjYbyFicPzNsSjdpwvorAAx5LJ9H3zo7pVuwVJ2RxhD",
  "key8": "nTG2h8H98FZs2rJAzNZmpVknQVcAhvUJ2dESUh469822NMGLWfUAyS4AZ5WuEUdcv6RreQJF4r6SF8GcgyPyDeT",
  "key9": "65xguzTzXr4esLCASQTBFYwRXwH4tM4T5bvobTkXNDKxYa5oDCSkUdJo7akVnEFzKErnsxNeeY9Fuvcu2cDEz86L",
  "key10": "2wTfuRcnhrQsdEHNFWN2NPHyy5dmtPmC7KwZEoxjL7S8eAsbymLFzNmbGM8FrP61naNti9iGJoDhxSTiQrrJUM67",
  "key11": "5W67SfAbHaaKpQxxv4PHeMKsFrvkj8PUorj7goAxYHKsMDAuTNUD1rz7xeijZSQ1uYJ8hWdZsxD8ZW9v9AbBCPH6",
  "key12": "4BpEavW2uxxH6HAKQe1Ehfi57CPn2HKqVZkKfnkwYB5t7K8NERaSG5vSy74fWHm6TDaH8X4SDJxRNJkn9KWsDUau",
  "key13": "tcRAo25rYsCR4c2hWv5cD5ybXc53dTqhw1BmW2rUVxznfX4VYNsEwkXefJ4RWin6xfdR13AStmRjJA2txuK3DUp",
  "key14": "5ZvheFpkcacSSTRpUHUJJEwEdJNbCMN1tRzsHXb5cejT33fpW9LBzBMASCV61ApGnMjxH435aDmfXYGXZeXnoyMb",
  "key15": "3iVfXdpPdoUBbWaQTCNA11fUTwRb2afuqZpTLf7P2r1QqNF2RNFZZ8sRonUQyT17W5gHioR2UCELud9H3hE6QQMt",
  "key16": "4k1rcBmVKJhctybnVGCufqocu5yutDtdSCVg2ik7cCKDaanR7aqH7iBzWyWwok5PP22j4DVTFGF2Fzj2WT2mFBUc",
  "key17": "4GVL5C5zc8HfNdHPoADBoYSGjtfMWgKhcZGmHs99ddgGL2ohk3TVyU56VqvoJkzk2RxCJMRyCsUyNu7PSdwGV9t",
  "key18": "zvnGez25AQW3r3b6gytibKgzLEDoewhVMGb4L1gTTsoChgF23qRm5xkcpYBud8kEbypB3HrpNTHrrN1zZZHJwAV",
  "key19": "3C83cTXphpuAmS8zc5XLe1oHMejJeZ8w7SU2ogctpKy18owwicDaz5nBmWXmpMf8R4DmwjiuyghnYmzj2NSmRZVq",
  "key20": "HQnf4g8WBDNu7ucCSjKa1ZNVVtmZuxSXbLJQwRGcjFE6sWZxTdsvBeVvS1aGKdYqqZ9qCfncwVa4G9pxJam4irX",
  "key21": "59JhBnXQmQAcjpdgj1dimF9wse7my8ZEjCyRiRfB6TAwALNoGwK2jwhveFenKT1id1KfJVmDDxPpYswwaY2Ck4WQ",
  "key22": "2P4sSudGrEvVDWBCAifi7n2Rn6nHhVThRj5t5ty275z7QzfRkd17yM4vCvmxKt2PLDxEsdLoySMoxrrkz7ufAXZB",
  "key23": "3SauVJvXAMQLcUc1ASBSGoqQsibvHFVcx7wZi6fut9MmQj3UFx77WAbvS2U1RZEvMaooQPteqFjtZ2zevM4cMAXP",
  "key24": "3bqWVmBA6sR88rFv3jnAzphAqzto8oPn6onxbSGeFdvRcSi6U2xatn5r6zFxFrTfrKR5hn4e6JgpmwYSNkaxaQa7",
  "key25": "25G8dEEVr8LCFhqgW1Y4MZZdfTrRiWwgp8VXwF8N8WCfS3hufYBMjmyYZa6KHmNvKahkjXD6jmEW2pz2uf1B14Vn",
  "key26": "4gcFX1RSkXWXyEa3tAUi1Hh9JdDM2uUJ2fAnLBxAdEovTP31C1RXptnfKVFf8RbXXHY2prY16SatXbfKXXXjGaST",
  "key27": "F6pJhB7kRfNRKkbejw6mMhNSsUb1Bk3PMx6PpTFzsw3hifkjJaCvgUTFCV1GLcKPj6U3BUin67u73wncyZgqX4C",
  "key28": "64SVnMyope5b4zPxFeehv8Yf1xR1AyjLfgsqkqpLcBJGYgLtVqUGiCGQTtXJtBUebTMuKhz2jdNaktWbyShG1pWa",
  "key29": "X3yane7QGFnzWbKgUxYK5uc384WKzTNNTnkms8vLDmtpWLJFnKXkveJ9ZTjJsrsgyMcs3FLR5X2iA2LmX953o8M",
  "key30": "4mPiXfBV9USJs4FBUzcfzSDJbN3pYDnWD3b957RHyYj1JRPBUg7d8cbpon2edWQy37kkcNPRRRs3TreyuwFwU2LJ",
  "key31": "rdMzXvxCMYWENdv4JbVqTtVvVAshfQFWsV4Chiy4fJhhHJWqsxpub9qDjL1GeY6q1kxesjEnJt4LMKESG23bmcR"
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
