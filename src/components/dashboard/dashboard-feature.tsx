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
    "3FWKUn1w61Edbn9AGd1HS5NPq7jCBqf13SHYSpjZbFQBAQ5cagdwvzz1BaVCEcXXkoSWzjKPhZ4UowKWEK3ziotb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pJtxZ9ezFoTpaXRHXPZLa294KxrpWacQQCCuAMhwfqmhb7sCwRDhSKSFsMCByWWTx1GVYVutm8A49LVaTVUx84q",
  "key1": "4bPfX3QqZw7vQsxwFJuKj6WCJeKBqpKkvjgXW1t2wjq42tGP8Wtsu4HLWKBWFTczDZGjbrjCtqTdRhgnkGwrLgLi",
  "key2": "3LF7URLjhvPoG7PomQ3xCq8CocuyHPHw6QbfWVwNmHq3u8PEC3raAnt9VVUmhwB5orpMr4ggBmFcqs5SXyf5WdYY",
  "key3": "3kmzr8CymUuVRSzwWdU1RqD15KHURfKnpsni3bsYP4gZne8RwkesEdGMQHP7cD336wRQFmUFncqtJYuydpwXNR77",
  "key4": "2dRzoJguPoNjR8wLYmX2KN2bgnymbbKz2xtAFqikaxdBVd4TmRnSMEeybRUJ7Nz4jHz7yuEfzb5vBbcXJYoymgKQ",
  "key5": "2RMHd4YThXvbxcQ3MEEPBfdE1ErdhrwSJMJKnvJ2Q3rmjAm2UX5kFfkYsrhvDhkX9CXz5tEF6jYh9Nx1ZbWjmd8N",
  "key6": "3fC3bZvbbiGKghqYM84wBqcjs41uxkBUdxA5pz4irMA5yHXd8zbwXxDd2ZxEwt1kdjjPJKW35ssqHEcATwWteYBU",
  "key7": "2UYJr1PKeLoYizXgx47xMBgrmaQposamTLE88mRkn4iRjkr2LVkdn4b1M2jNXvBV1wXAjJjC5rxgiVRB7apWyM7z",
  "key8": "H9VHDBj7xTEgXFpUz1ZBf112nWoegifZJdGAz6VZwoKJUeNdiXvp5sm713yvLLrbheAgm63NSJy8hhTNWHdsqBz",
  "key9": "5nTan6tQKkd7anW9fiVa3Lcuf7MmpjQorw8bpbsvsYRWmhEcYS6Eq5NFMTS4XL1wkNhsTrmUA1W9WQNgc86ZWu8t",
  "key10": "3GbpcZX5zoecoYJciFPbvpF5kEomfv23m2koGStG6ANa8TsRbgydcfmTVdX2wZandfUYpnegUWjm8kQuwN5d9D9z",
  "key11": "59fPGZMadxkxBwL4WP4dvZt9Lr4fbCqqxcLmbmikV6VrfvWhy1CbGbiWvcUhGCQNWGV9dfC45HhhzjDeSJ1PKZXV",
  "key12": "2Z7KuWb49CinHqcp3ntoTNqftKrTHFUpBih9Rx9NH2iPxRr5nrPfhpjR4JsBF3Nwn24JWtmzvAjVYvdXAxBurcza",
  "key13": "4FdkTdaByhJWLzQmfoSpSXBz6mJf7T6zeH5dpiqW98Ty7pcykMj3AR77q9cC6SUfa3Fyh6dHzJwgZi7BvZW61ETj",
  "key14": "3DMbsLtHg7fnggr49JN3n7itJ3QbrZfjGSGLwsc5uyMRomQ7uJfkrNner13QEYfyfnQBeQ28dwqpuniV1W4zwTn2",
  "key15": "3Kbj7bBYhGTwjcJ4xfSTeziVevTwyv9e8w9jyCQjrC4gzpvMfRBKzrFzAbM6SifnTGEgWYARZ5PXCPDwQTqJ1YCL",
  "key16": "54EzibiHPqDiNmp6XUa44JLDxtxLZp857d8FXfFewVdg8rNp2AxRbVjCJtopt2MH49QFsdwGi1Sezpg2UW6CV5kK",
  "key17": "FzquE2iw56K8eoh8LQ2kGReUiH1HBRapPseDZXHFQxv3BkSqUAgbsUVWyYUyE6HELcFQ2BkXBo1tKP77idT7V2z",
  "key18": "RJiZNanUyCLmXDAqFf7NU8Bwu11Z2CNYgMHPfqGiJXanhAeFvbTguULKgaJxmk5T4LpqcZA1THjGSdFATV1MCQg",
  "key19": "5tAj54sjPdWbSymKPgwSQJ2JWLd3nqmB3aXdnDfQLWmPhHszuHkuabLJv6Jy47wEGD71tM1qJnTj3wsvy81VXUbU",
  "key20": "5E3XEFGZLRzQZbJETgUzPnRhoPfrY7aH6yKPMsdHPjpLy8FmpCDw2J6mmpUbHCUSfhvR7N7Wp83cUEqioaKbz6Vg",
  "key21": "4yEz6FZTn6NLwZ15DojUoHmoCgYTeacr1He3kVJwBvt42tfK8k3DUM6BKdrUxAFiHyPjtQo2rMpKgWAFJ1kNKRE8",
  "key22": "2W9gDSsi6WRwnTN7Pz3Jg3gz6hV4aJmZ13shWGFWwtz5VhWRgA6JR7qYow9jkM8cGGH9LbwDBHg8ffJMpC2KPymJ",
  "key23": "5ZcDRbKYff6Mhq64YgfEDL5LWvMjk7fXfKPDM9WetQciVS2BceEKAwtHN9vbeV6MUMuvsQnUUsnEeexmijMG21c3",
  "key24": "4DjE3iAbUBi3aovU5nbVyFypjbKHvtZwY7s87bNqhEKqddGwTFf17qdyD5EoZR2ccUiUfsZRTER2zqkUes2dPo34",
  "key25": "2TCv3VHcXzM3dT3a5vKjh63aVw4kPgK44NwRND24GJAPPGSw3nTZEtjme1r9BxDJfVYFNdErfLcgLEH1KQ4djdZ3",
  "key26": "qeACsPSsbmDCeeYWqohyFfDxwLPCwTSMiKPfWzvw8GHLstLR8N9hx1nT4MeH76BS45oXL3rz1VoczBKDhnVRTqX",
  "key27": "3Eqg4ZADKP7T2S8GD6JRLipcFEkw8dvbydi5877mAWAyJk72X7g65t5n9PnvWZm1VY7fAXvTMK722wqUP2DqpXbF",
  "key28": "3zm8Wfwt2NixJ1mMbeu7Xhjwg8Ay7bcmt46yn3EK5tP897JmEMC7vAz1uWpwL3xrMTvHYJaW5DHAWEE9Yg3gutZn",
  "key29": "3njfzkikNeihJ3fP384pTac55WsanqhFAjS3kSYguKKZFK2QjeuLaY4mF585ByNz5qmX4WG5BQfgFSJxRRX7sLkV",
  "key30": "3T8Z6UyZJyFoMRnuLB3zVUp3VAY7N92fBTQMi8SrkSukYjCy8Dh7NkcJ3AzFAJ12hp6Ja7wMUdBNch8GAHTh4PVQ",
  "key31": "Wec5Dg8UWKd2gaNempeiTA7B7QMBxVwK6imgqezVWNsV743Mw6GwMiemcTw6akEXqZdcVQZGeEvq78XiSBnN3fN"
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
