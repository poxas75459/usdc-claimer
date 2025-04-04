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
    "4Yr2UEWjwVaqxNbfycx5Lp6mAoDr7DYZf1EJGqFkNBjWZ8vjYrKMSDa6pX5gFfu6741rTcKTPzvnY59yqUiUJG5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kgWfWJ7rZsTt3NQkNnRJssQ6xJS6WHjtfE9osc4KKJXaCpAuczH3Y3ZmpWCfrntBrtuwZueg6qqutdwGBU1pntr",
  "key1": "J4XdYJKaj1trabsFqcaQNRUK7PTPVu1mXi5SJMdEP5sKdoDHUbQDGgUYrkqzJwJ5HVtKMMAgYVQ3tpJe42bYbP7",
  "key2": "2xpTdsLtZiNtfgbBARCRBvhbPCixg7dSH8UoLfRhUst2ZJwAxsr6BT2gwqrYHfyMGtQRUg2qDXNWVQM1ozVSn38E",
  "key3": "66qTFnhLBdKoMSkhuKhTBAXSnzNncYZeVnBZF59pM8knKHZRuZ96HfndKZr5na3P6ows1SVCTBz6WKAmVAKRopYi",
  "key4": "3CMF9xYHVoqMYzFijskJUvHqfoK4c5ofgDq8sMt6UmEthJRUeXGCU5ce66o2HtYzhs6qBqSqeitQW9Hme4g2d5Be",
  "key5": "mEoEp3JwZj9ULjzgegc3zQ7ZZoxzZUaAmg5qo6Dp6Ug2obrXfsiQSMWvsCth2SbqVr3rTacuAfJUtvMhRRDDCLN",
  "key6": "53KRGxxx19f3Wxt6xunjGTxqK1CwwPZqwtV1Qct57UvuL4UkesysrTQvy5FCgb8LBQDeBETreTNShcsxBkpkYFi4",
  "key7": "fBaFG33fXizyYxw1yzHvxpBvofnZVR8uk368FfFWW1Cs5mz1bc6CKaCoA5MmFnZeAsfUcfdRqY4Syo14Nr9NCvN",
  "key8": "2884D4XTGgmyB3GcX8ud131Ppfw11PGjkFMTbkBKrMCyEhyt3c9skjKhnHyrD46orzbkHNmWBUby24QPutvBW9a1",
  "key9": "2V6U7xivr9BzN7NPjJwaY4z3qeoFedbxMLY9jDSHArq9drS3joLH1CvAKDNAup9AMVPQfFhyxwmXUHpxfucZVz8K",
  "key10": "3u4Qp4qfwSitc1RzaHjdQnZ93h6o4u1BkFyufwLwkpajHaHrXAjqiSBTCpDXp4sbsE1SdKwYMcKSwuSEU2L9UivV",
  "key11": "qp1LTaGZZkGo9f2RnYdd1tttV9nNrHDtuMN1ET8j5TctLGpqJ2R4pYWzoFTBPYyvqJHCEdp6v8f8rRFFKxzjoVe",
  "key12": "5CiTsfdysQy3XYHdF1PiRbPoA4QjSNBGjYqY2R2TSb5x8mrdJiazRUcuW39qpHjQVFYwBz62xizoUZuW7tf1TPkB",
  "key13": "7WhtUK41Ai5KZ4v3962aDDcrjhNSojGyy1PuD8CmVwK5qCk6nJumW66fyqRNBAZdrHwpzxE23aV8AGrYanp5F6s",
  "key14": "Q1Z7d6hZ1doaG546r2aR16FVaDfEEp7RzyFa7RJ2dEksMWV3yCUDUzkY26i6A3nNJvLfjM4JbK5mv8GJC9TELoJ",
  "key15": "52RUDVAMw5Znqc9dbLqDauH8MfMCvJfyrSsa1WVD2PJ8jeaZ179MNW6VRahqTdBMb8FZMjANeWKpzhAZHtBsLRMA",
  "key16": "2JFTRCcppmtYi64ZkSgBzXuG1h6xfNi7AyG8RYLJSucJa4DVq3afMhkFudxhAF9skAf4zRnZWmVawJ1s5xghKBmr",
  "key17": "ckvYTQQunhL4EaYbMZorbcSsxqMzBnBqJTkkWW6ivZaw2WDKyk827nmG7eQ3jvdaNQ28TByB1MRQmb6UUEuhwok",
  "key18": "5Yfy7GrwKACCYdyPD7ES256f1ixBrtE66zfUuS4H61h4PsXToHFwhqsamzSPLie6FbALsyPWaDNoEcMx31EHx8on",
  "key19": "3vKbG6wsJpY2DiZvfEXqVyuoW6EydmewnLGPkP2VycxcHQKCCMRvkCW3RHf5Sb5Gq1Brqz4d1xdvfe49jbJsB2bB",
  "key20": "47iLK9JPzySE89R6Zi1iK3aSCqn9WkmwxSWdPnfSx2j9srjqyAJkqrFYukvfXSgqpJk8KDcytppb7czs1Kh6erGq",
  "key21": "61xZq9HK58ZbKK63c8eNhUX2EoDdz6T56FxDyymCBhjuNcSGHibPiiK24gSqQUtbbQCGRKnp6JQKgwqh6rSaXhxL",
  "key22": "3feSPyc1CRtMGaiMcABpv6jzrp7MBa6JF6Sh44BjWES5hUNcYBcRye1PSwkWj6E13uKP5Z7mxHJAnCQvixHu7Vxm",
  "key23": "2aAuVYCdWcexoPsrC8EkBFr4Pb7yUg9gedBc2SP5vMsBC8MZqZeD8fvEhzK4q4i2WNRpGsoPHxNxbiJdxuC2hNZW",
  "key24": "3QrH4ebAeUWbLcU6nsbeBaXLUz9THEpqKRuR3K6d9WHQcHJZhsVMXfTruuhyALVtkeevfLmp2KfQfhA8pf586P3v",
  "key25": "4s6vMVz243GfjdkEv8j9TfzeDQvzU5q4ohoRSa3kmzDba3xKTedPSmFo48NA2pwintmkLdXakkkW2YGQgBNjoJRU",
  "key26": "4MFQ9hXyZfcfSaDB81NeUY5eJs6tKpSQtwbg8rMFCZf8GdURMn5m1KsMYWrjeLL7YyRxyXLD36ZfsHxSgdbA5Dy8"
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
