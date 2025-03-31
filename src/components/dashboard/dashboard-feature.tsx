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
    "4cfzx8S26PoD8Fn88v7eiDraHcnu4UybsmgCZpePUAEWM4rLfgicCFAg4CobDKqF51YfX5n6Qunubp72S3bM23yu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gjdoSk84wXQVviNNEznpEj5mKZYuJVZCa9kXokTuz86uej7TxfDf3xuXufrqr717dKkitCwEb1XUNCTKscPoocF",
  "key1": "5MAmjpSg9ppo1uiy6rCfLnZUXEJ7WdL8kqhtvZjcerVrWcdUg4TJCiHx9rPxQNreFE4qjHLyHvP19zoKkcw8FTre",
  "key2": "5BgsVTr88xrvvL71pHqa7tg8yg6zopjDEr5dPsfs2jve19df4bBrFZhBJLSMeq7o8bm4tZvngs4t7FbP7HqGz6om",
  "key3": "51jEV6mzdYCsNGA7achCVDy8QwAEFL7R4ZWEW7SWd1bo4nFeWkKevhkEWTjgRkaqMiwVo8N8JJ2fKb8Fehe4Ujce",
  "key4": "4XAgHB5tbeq74mgmnUL6otphpod5N5WtwXrbVLsYgDvps7UARMj2M4AtqF9Ey5qJ3Um8FcNY7jBYg9Twv2HWxwjh",
  "key5": "4pUmq2kbJDaT5SMAwwf9G9mYXeEQgxfsxxUzdQv9TM4z8X1eAaCxDXH9ravv85vcePDmGHRyiRLCEVux2icSC7yQ",
  "key6": "3pnfCvVAKp7DrCU4UQn2eyByMZWvMjsUnDzoQof6C6DRoDo5TknShfpbn3SUe3vfugV6vp6ZcqP4GCVTEFjSFZio",
  "key7": "2xt7RP91SdnrSL4ktgkGuq7FaHG7zYZyb9xPtAW5TAU64cMR1YEdw3AQ16rJEMu4bAZt67BgCcob7gAs2fpvhWXQ",
  "key8": "ruxC4otWPwPfFdvwtZhR7bPqLvBNDnVzGjqChi42NJFe7Q15BnZrTK68GepYVQRRXZ7uBE8JUtB6McnxCBqcxGF",
  "key9": "3W3RMoxjLvPxRoPw8f5yhF42YRDtoHMYMc86v13J55v4a6HCdtGqcTAXfvzbu9WEgQKUhj9UMcyipciJVWYyqWph",
  "key10": "2ABP8QzbgRLEPvgEhHcxNvxcXcUiA97JvTsmcXa4HakTkcbVV7FC3C9RzPWk1xDj7iqsjJ4p616ox3evWmY8qrW5",
  "key11": "63AaZDAtesy4vmS3fLfZk89mqQrd7itdjaszRZMVoZtC9oo4kAJV5wyF11YkzRXW35pbX3JFJhCeUehcYYAZ8iXy",
  "key12": "dkkC46qU4WUJfjoBRu44wrVdheN7zXwzAiQN2Zx6ftXgjCgovBMud3WxEq4NBsvDRY4B6nrmYGpccGuttfcPVh7",
  "key13": "qdxuzj33mMsDuEnThSG6GQ12Vb5cEXQvuj8D2RXRgeL5Lp42avinUdhDFinv6Tsj9c4ijs462xrsxK6PBEmhvfs",
  "key14": "65AbugvtaxugD2Ck5t7S1m4BtfB7RxTVym4VeQso6h8CBND5WGXwT3kYMtpCSPCKWaaLJoo7FTTF6p94xZ8jiYKn",
  "key15": "2ukpu5dVUNAS6iiMDLjfYccyBSw9QkTtM3YRyXN6L7bPNy7vmY8S1ZCPoXXTewGQJJBXkAZ7UX7d8enq35ZpDfvr",
  "key16": "5GLYBjgApgQrZfSfjLGeZmAgR2S57w8fi2cyHtCFLtNLsGbZaNQBp95HmAak3gNoh4yFy9HXJLuEW7X8M9eyCt3W",
  "key17": "5touaZEMw879xZBBLkgUZfXJ2ugC3nnY5MaxqU91bortos93dgqSaA7nU8QTQncrEuQeRJzTkxGpyZHNUkMHMtEB",
  "key18": "4stRwNUF3tmWFrE38pE9bS8SeWMnTHWk9RnATaYfEhzgabZdW9q8mBcFZDyzRUFg3CXPeA5zabxCZhx7m6mTEaw3",
  "key19": "4iUXqccDd6Vn3A8C1D2K35u1P7VST1P7HjrMffxduC6cr7xcj2u6L97qBfswVJQ8f5KrGWjEGc7dEGxpCAxgPdE3",
  "key20": "4QVaTp2BKT7vYwxPFqrVJqGWjkmciz5rNyB3ZKjxSKNawBFn1vXWjpBsVENRagkb4y3WGg68EvLcG7UmMKHD6mK",
  "key21": "2rzM8mUgxivwmce8PqAPaFBJazJbD1u5CYjxq6DyvSqJzEQjNET1MKbMcnpQjakJ7GL8uZt9XBgd6UxnajGYa348",
  "key22": "zuqvwvharoZnUq7jaA6X5cJT5p9KnHbZiDGQN8CABwtVy313f4reEjCHzTHfW1tfRABzEw2BATkFGBkDfTjk6gA",
  "key23": "2gAPSudV6qpHbx5SNUExioFXwvsVp7QwXBoKNqnYX3KYRQHwkfEBvr8ARThnuVtWPY2ZjAqVXt3mRF3tPY6as6Hk",
  "key24": "564BSQNwpE7nr5hP8DizQeu5XgJ55VT9vmdka2oNaMMGi1ELJHqws1sa5vu2F5hFd39XRZXMDoioraP4NMEJGrh6",
  "key25": "6uKwp86TsYw9EjLiXi9JQmhrdAw5CjPS147Z4kc8YTCupPEqDeMq5pvUkY2czVwaTunWN7o8ZR2G7AeNdLbXZmZ",
  "key26": "3MtPGCGqiexjDaCYs7ah6Sbkf9NUJ74cDom8p29fRWmTwMermZVCj1d6X4sKuuPXUnJpkUD6MrJUDzNfMxbL6geG",
  "key27": "5fMBrrzvBnmxG9kpR66i47FdCTFhDGauGyfATrUERadC2B4GQ5J2nmYWMJSokkA4CBxrms2D3jJtjH5w4Uz8RFdX",
  "key28": "49h5EEapqdAXyb5RDGZURpGoPQpTVy6wrvzMmjHuTYCFVzmgKKY7vXgw95PCgegiPsUPnuZxHFdgimGGwevBKWrq",
  "key29": "4Xw9A1CkjKc56ZaHkKVchYpU3ywEGM6g6oLvUNygfP2yvDwDkxUte3QCjQR5dfeDE2QZmtpMZGmMfRtKSttsB9th",
  "key30": "CwyTnPYidLoubJDVpupAHGGcBcPD2ZLowQX2439VaCxcpQP4CKxsHcb6zE9EHACYeDi33JFaDeUUes7paGzstj7"
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
