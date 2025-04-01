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
    "dWe1m35DV5JKH4STgJXhusmjC3YyaDGYVY57q6NXp41n4QVxjtzWffWWcbCaWhyBL6AuRaiu9ofaKACwvkS8tUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AKc9bdPe3Y19acUBPhgdRGuRSCjP2SDuMJuE7un66GGrMqvqBipxxzxJxnMickhDSryJgBEWJdcWKKrD2Hwz6CV",
  "key1": "3EYLzoVyhno77PvPFpjEPsfQt7p9xMPWSFiQnoN7hxJXxwCp9kTf3m1pvADMjea6TY5huTttbaWFhhhg2NyCWtnM",
  "key2": "2TTmKt6GRVu3cDXTyPobSwB9JXkqZhN3A9aeYmjW4rstji97dfW197ZDiZtmsmbwHhYjyohjYivBeojqkeesb7jm",
  "key3": "3ABTBeukBASA1615PFBAvNJmJhufV1pzg5zEmP9j7H9rYSDRMEwswAjG16nuYBYV3hxspnnGmSEfErwD1yTdw7iV",
  "key4": "5tnwHHdoz93DBJZteHdGHNV287RJ6t3kMJhQXW44TezTJnHeXwvHZdz1nTJJ4JVjKtSNayyX1anh9auahkhQYfUk",
  "key5": "5nJucBRjkx8Avi4iQ6h3KqrBG8LG8cBebH1xWZNwZ6UWu7SkGN1ctufxLoeHsRzu47MUnvxACPaZ1iqsWnXmC7ob",
  "key6": "28Qzg6M2vtR98kymwTFKJZrffXrT2bMwo3kyotshwhKU6Qtm8ea8PypUGwyXWT43XNFR76whLT3hWNS8779mGXSB",
  "key7": "4tdREyaU3qJbvfNrVMqVwf8Wk1qUJ93L7ZUc2yq1eLdsuKuBX8Q8hTnTTKiXsdcMUdWkNqoWnepsPMfuFLCdcTpv",
  "key8": "4n3JX3koRoCJZAVK7W4QGn1hgT7LmKHikFhyJD8rtFcPC5FBQn8USjz5WJ9m3rnxfZg6mzMQUgEFbwNnFoSq92oV",
  "key9": "5YiftpHqEgdEJmbL9epSZMRNfYduBFSMP41KeMaUpVXM29jyYsWCg2f48Zrg3tNxWeTHuW2X162fCnYmqdahRndw",
  "key10": "54jKwerjrWijfi23BzkxGMbQDw5WXrNnTnMhKUqi3g2KfZLG8jbXGcFgacWqVMcFdEcF8iGZuE3bsUvYDhubgSqL",
  "key11": "5LWVf4onk4MWimJejMtpz4G5vcXrWXGHjm6hPe2reTaE7L6sSBfGjnoGKoTvxXcwLchAmgorXXUSf1MfFwEwvYow",
  "key12": "3hbKWnuLPrfgr4LHwxpsPPjdMxYPzZFdmDpo6EQhxoikinpF8fdLyqJfEVDHbk9tckLBuECJt9BXk6ZcayiiTaQb",
  "key13": "58sLWx8Ps6DTwVHC8odqn2VPfgS2h77KyUA1BbW6vypEQPMDxMFZo9Sm5u6qoj1tTSTkD14iNmLAXgqDXRex3Fao",
  "key14": "53J74vvqwhe4LPoDBUSU1PScHemdJ54RfN6MruCtyhcQCjAeRkEYtfbhm9kHLBPEnspQiFmQt2rHk9m54csPbhrK",
  "key15": "MByqqocszF6RcqZtF2THkVZXTnwVQ7xdij1a9dYUYeAUbiGPVGAt2Twebzoe5oCZDZHoX8FEw5xkdgWxh9cmj2W",
  "key16": "4yq6dx5EuC1eMKuAhaj8SyoWHVSSERhpPQaw8G5TVY6zXeHcfa52ibsvW7VJQZR742Wrosn1jidVWRVFtg8NEpZ2",
  "key17": "5C5zfCYPoSp3Jb3gnFopbgFNQ4QtpLRnxw2SLUhfmYZi3d4zteF8A4Tz1Mv8wDcVGdbV3v4HpBxVbvChaPiAdn44",
  "key18": "3M8T8677prDhn9RmzCeV7SYhCsqKgg4duHUhDexFLFPxgyyVKr1pLTvVMJcmBhXekZZLvuVZfChdNDkH6B56jWZ7",
  "key19": "2J6xag6n7shPk9vMMYitc5UmqPuHmwBPiGAmr1XBLvDPAdR6wDs1yangx37MUR2Nn49cZqeoh6M9PM5rPRiLyWVt",
  "key20": "3xznqH52yBZEbo1X3qQUMQH3yTcMPqyHHMMX3GqnqtikRMHNXsZMeis7xPzL6Gm2NnvXP4qQKL2Lz3tiK5sNjKFF",
  "key21": "58k8K5TDzHvDx51HtEK2uw14fUVCfVUwbyoGY2y31B2GiY9soxcHDJFPEcXU8g64n9NefKdrnbjgMLeVfBnGqmtV",
  "key22": "5Lm3mkYU3vqgdXjskz4pwtZVaibo3QSLK7twVvRfjT8SvJoedm5u8VgqQGRbE6kdwxBUmSV2WnNnKa11k3nTUnfG",
  "key23": "639E5a8PE7p3sYfmVGaH11Yta3g1Jm5ERBB68TcGtyFPnmhKq6v4jp2X5rkdtwRZXXN9hECi7apn7mu6tPQrDDyT",
  "key24": "4mj5Q7EuJsgBmicZsYiEPv9oD8ANos3QvEryRaLiAE9vBsq6vsDVKPajcbkZw3SghKZAFHFr1vLurYdYZ8MnqSUv",
  "key25": "2S7wU91osdZCS4wrtKQGUyEe9yQdH6KyRf55Dw9gPtVEUKv3gYuzbsuWM2qFNhGdjgzpzFphh4Xc5atVWxbStFUp",
  "key26": "jPWx6DUdx5PjtumemyHKVaHkLpyg8DJXT5seSyRtU7G5tXcK8UaNkUj3f3EK6keM63wD3ZNzpNRwe4b9K896fQb",
  "key27": "4vuFCpEEATsch7k5kVxKqAjGb1QQdkbEo6n5mT1CM5eqiEkAdR3KjJxAxjYxM2wwKsgohAJmec3r9LoFxRnWpf6G",
  "key28": "2gYaUVuPn8BUEkz49zwDKwQVJCzfBAWJeCP5KFZQyfYa8EafaeeCzgUWqr5rr9qRJytuAAZb73wt52M1ByV4rxEm",
  "key29": "5PSMkbt1ssBRSzZSWWcsxQ93kZ3brCsPbsuDuiBDApUgxeHPZ7KXeufZw9XQNMj9ozyTNYGkb8NNy7fC7cBLmdyb",
  "key30": "55nH7j3Zhbe8JFhqZSLToudQv4eBNR9giq7BY3uv1V8JxbXhdKLTbPZ1dYnDr7TUq1j1AyAfod3ni93vyC2ukJw7",
  "key31": "4YxRF3k4yiatnvZCbo2Xf4gHHesScTuoNaXw3NkGfnkV9mGuVEpqkksR8Y6vmRd6UK3h4DkC7ySeGePLdPDbaZa4",
  "key32": "2CqzDwgjV1GkLSXB1We5cjwsDKBMaJdZH8yre2noZ9LPBMccu5oJYTEytQxD9b4bnawuzVprccCeU9M4rbPzpT9w",
  "key33": "3SWaYLFLN83RQwfXJFrGyBKXybPEyPavNeK1qcHdcctuZFKKTb6AKdRACmwnEdL3d1qxo7kD1fmXdZLuN4fwF3YQ",
  "key34": "32RhPMBYaxqrJcJJg6GxmhtJLpqrAXTzFrF96kgBmyPJ5DViutwm2zuvgoQamBhNZoGJtLsqaXkriG6k2EGHmWoL",
  "key35": "5y6HGbxqCpuHJ35xXhU6La3WBjDP7zpTpMbrFX5vWGq4LKSw6ESracQwr6Xpno24wFthXJkF1vSm3zQJ7iGwuhWu",
  "key36": "3eHVw8ytXtQsccWhBLwFvuuwoajiEhcNShFUotGSed2jtZdbLNGFisHU854KwrH2f6EmUgb6QnX6o4CND3R7Mwfg",
  "key37": "5NDKufqZoqJnnjRmz4PZGGCMKekGH6wJtYtmCeY6YzT3GRwMxbhuYapXiMU8MdesZmrcDFjrZUYe2rKdrgfyNVsc",
  "key38": "4wZCHXAtmnjLA7oZ6kML13m5wZLNB8TbJBVU2QZ1vccvMUDzBCqPWRcK7fqyhbDLB852MqQNsSq7jXvt1ia3z5uV",
  "key39": "2rTieGTYnSGJgMTC4uksGffM6WbTSRM5TTmBuRTfRaNNtaJyUhj3vpmJkbNkX4oUZGTCtBk2niE3qDQuPGhsP5LH",
  "key40": "nWFRKForV57R4QBzgJWUDPqvcCKhFNyJgHtRUUeHWF4h8A51KzriYeyxydAYuH9wzvmR8QJeF65BR6ERSYev4GY",
  "key41": "n5mc6bshJEBBWcN5AvdnnbcM9Bz7g35J8gSxpt8JzcMRb6gyFgZhgjuTnVVXR7difAb4WYpA6L3ZMWqQmMVzm5r",
  "key42": "qDxp7Gqy7iGK6zkt1Ynb9RECakxb2vJQbFtvQbRUGrwnRwhq7wb3Mge9qo1LiKUW65rqMhSZkLB1JWmLKHgmcsH",
  "key43": "2yW45WxjiyZ7LzQTA6mRHfxrcpdV59jJbfPs3rxxbk3R4zr1DRhyuWGQweXKejds7XA2tNJ3V5TC6UUPExUmJBvj",
  "key44": "3diPpjuSSEED13NQugjVqE9u6G9bienchCyPPN3Kwnasoso4bPanSWkRL3J25yxR4BQJaVDnYQrykaSeMdPFDPf3",
  "key45": "4ZGHuHMbCEsixpJ6cxinY6WfvQimaryimrLnGikoPkYesFspdto1HMXcHEwg3tJoH2RD1UvUYV545fTYJsbMgxXY",
  "key46": "4QZBWFB2DsfVEXZdKkMTVcGRviTfumgnzgtK7odMhW9dFwomH3Ne1ptCrhtXr6VrcPY3YTiRkh2nPxaSHaRRgyLc",
  "key47": "UiGzrgpR8wn7MJoiL9s1imkt3L7z7TgTkDgnGmhaU4xByMvTAU9sUwgm5iELsLuuKCghxLay3V4hxMiUEjiGnYr",
  "key48": "5AJ425YiJFmfMdPakETkLceTKKEmnRVkhe4MEL3nsLbuDG53xaoew9yT75Rds6tAxHTTFs1jrjKxJJi6ay3C2CtQ"
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
