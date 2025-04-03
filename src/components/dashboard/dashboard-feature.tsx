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
    "5B43LC2XfBfa2JDtx5PhnSBJL41Q1vdxrTsD8MdVhM8LnvHuSUpTKtJ9LdRppHMJYwTnRJxbUXQZ8XFRxQC2Cy4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vfqzVEeh3pjudgWBYtGUfFL2mDkT217ECqPgg3KxXBe188M2C11sa37CtL5zRYiNH2mbstCtjPWMWLvJ1bLjmLM",
  "key1": "38KiPmWUYoy2hcdApSWuU19poxXtjU445jXPJEA2zXF4LBxPXNTGRwSBaZK7yy51qLov1TG8YRsUZ55wCKSDMk9X",
  "key2": "5Yw1JKRabKJUgNuvXLiwVaWGRfqGnYWTworEpT5xnpR2LBYDXhTsup3dESWsTwntf4vbYGYtHrM66TEWpFiqwHXj",
  "key3": "2ePhW1YZ8cUr9Wf7Ro1sk48CqE7hc3N4PCCAbbReLN6k31DUQbg97fUGKvVywHsDsroL3q3XKwJLqbumsuAD2HE6",
  "key4": "53564ty8S6RPfrjV5PGGKBvZcbizq3dTNF8yiGrPrpgpnXb6mDsad62J3GM34GsiL5ouYpYMQg2KAMFgHis7Ysde",
  "key5": "3b2AEJPZjHcZbRLrpSqiv3Xdegrmcf6tDu4noJ1va5tR9E8WCg32FFt9PHVANqKPPbFHtqjD8jzaz6XwZyQ7dxiy",
  "key6": "McR64bHBbCjrr4YB14fTgGbgNKQw7SE75jzaeeaWffm25TeEKJ4tuMyDFGDBAt4DRCsHuVtavUvZgQLQo7FbD5v",
  "key7": "CEWXDwXyXGAnzc6vz8hwsUoALPpDddxuE846Y6S2qCeNehu4TZv4k5fScacxEAiqYSZRj6JBZNsEJAFzKT5os6B",
  "key8": "46YEiwR6d2JTwtDzFj4h5UUFdzuHz9fBaKTARHp2ga5g67e1PDZrdBP6coGhL7dGXFNnEHv8g1ToP1mDXSmjo2h8",
  "key9": "59j4Q4FUiCwZaFfWzRUgNNFLhf4diQreGHGt6tT5cagUifBUZnMow9RjDL2NyMA5cYMwAedWTPuK2gti9fK5YP45",
  "key10": "3xgPHxvq7DcEU9diqBcTGo56rE2e5Zyb42C9nogoQhk6uXTmGHNeHd25xy1n1znHTyHvarddYJtwxgfvnu8a9geV",
  "key11": "4r4JBScNNAQng8wNoejZes5fC8Q4qNXXJ6ABn4Xa37CeX1tyToczbJ86N35vzMQzqA7AcG6Yv7KwddSGHrY9ej9W",
  "key12": "5k3Rz5Efj8oJnjuec3a7gQyRCMuzz9bBFEwQwensseppFbGaFgyyNVDJ6xvFimSvR2h5swDkHDkDFfnpKCgN7tTC",
  "key13": "35RwesqGBMGgUAYgxjwRxt9o8VSrnbyHhRKqgzTHB4Kah3zM3orsVgqWirFsEuhgvV5wmToGLHFEt3svXYAbWdbm",
  "key14": "3nA23LVgub1c7Ebe2tKmo3XP7CVKE2vAEDMLFkGoTkUXPkegYLjDKZWTJdNQSqCZ8aibR3KjK2WBePryaj8HTc3g",
  "key15": "QSdVF3urEc6y2LbR2UHPsxhTGdZsj9YABYHZQiDaHzAKkqoKtwcWFWkK92MNVZWd2uDkfqUiqEMUh3Kc5r1pPop",
  "key16": "2T4vf8KapVRyfPzvSDPxqBcL9ttfJjLE22CVhhX4S1WLhFzDgtUxWdqUDfyCxyoqqKpYVgfuo8UQAUNwSGAw4sFg",
  "key17": "5tYXrvHvPwTSF711FTxwnDGkkG9FHEqcytj8nfBCuVfm52fftin4Qfsbyb7Sr8AZCXEHNP3dyCWALFtzN58k5UWR",
  "key18": "23KYdCpdBCLgRPtD1j46PTBTFHpJLfmvzZoKq123x4Aph44mFHf3omkS7LAce6mBiBhnN8tA7WfSPvVmgFhiDFsw",
  "key19": "5PjxLQXBrmsoRtrFZrTYjC3Zoxrhk6VSKQ7pyHbzU7P3XipYT6CobTZxLb2PGKWKnURF7EwPxzvrPdpqVVoxGUjM",
  "key20": "5j6jdFXFrMVrZ2jpafhiNp6YSYaj7tuzY9NMfu5PJmiDW71rDy9k4bJsAKSCC2YZ5um8TyDGVmpPJUB9ED2bLRJS",
  "key21": "5aWxSGRjPvNhbx8MjJvXuSRkASWR6j4JPdM1QjMCP4Qp4bT9RX7itiSTqN76ErzFfMQ8UsUEKRoLKXTu9hYeRfu8",
  "key22": "LCFrM2kAY68kqfUHz9SjhRerbYYVjD7iN3wer2pnx9AjqrJ1Hr7wkXcYSicLmJwMHC7fn5QcvWbzLZymG1Zdxj9",
  "key23": "3ivHhLgLP7BXriwL3zYPX8asbTvXP7BAXYipzxscYsLiW19N7UzPsUcSvZYgWvU8GknMzza4soTtgoTxfZAgsggK",
  "key24": "XP97mQhD86y9ChCRa2D2uHe7qjqPEzFLTH4M45QwcD34KnVUNauXsprPJRyjYCJs9eF37VH9YD5zqtsToeb6UFu",
  "key25": "5kefyk1BSd1YHZG22pqXPTjH54keFqCWVQDXbahJNMiy15aWn5KEXMbZQNPiqyGjEQD8qSA8sZamhf5Ap6TmcY3s"
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
