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
    "64E8ggH46MBvhmrPbkXa4A5BAUSnbcquwVwN9tCo9FhSxxaToELYS1NJq4mapdwJ1V9BFTTk3t3vcqaRyNN4kq16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63D1MW2DwNCPu6kovVaKfQPqRdvaFCAYYf5hGx1X2rYbdGr61k3Xc1YnkKWzUS6jKFpLvWNTeGHfWYEt2aVx5uYG",
  "key1": "2atxNdjzFyoxtaJ6NHGh5dxS5zTv2n6RLZbhUy7BSncjudCj9B8LjYDnGZ5ZnyqVaecMR5fyk4QYeSiVrnQ6PPPJ",
  "key2": "3XubzbVnU3288nfoxGK48dbKX5ZnuYra1FWFJ4yjoXw2TrHFruLxupQJXsqHwgavHxz9SqkFjkYjk91Bi8dAyyCY",
  "key3": "5xqAuL9SnywbbvHPJXEpDGUzb8CgmzWqPbYzV1NN112V7tMy3nbyr8j1ry3gV1TzLjQ1f7mMWNRa141Um5Vdco9p",
  "key4": "2Wnp1mviFX9TiZmH8YjKraxZ96bZeCCs9Te1phXc1kHi19zZVKBprXGLPdTrwB7B6eoNABwQyzB6qdLshFcrxZt3",
  "key5": "Qz9WzcVDKqSeZMjWkB8K7gG1n77JKgwcuphPu8PRspqQi5R56b36ZRB2qHqu3CdeSawSySmPnYsfbgn9bbTBkCH",
  "key6": "5FSCe12hydiqeLhR1jMDXVAsjA83kid9QPqLk9UXrzwuS6WxJzAet2EFzmMYETWGHE1vQJXJkm8zztnngX9BJ9un",
  "key7": "2tkv8QhZbsiAStbbyXDWjoabgnHR5HvZfo9sUhphASsqSqLLwbG7LquPcgCjvBtJao8bVRZ4bjw9uhRDKvqY7UDW",
  "key8": "5zWpmkyyUDXraGQabqMbrVdvEKdd5fkMosVWPpyD5g7fswga9Rb6CQSJtNNL6EA8869tQiVvpBCQgNgR1nWfaygS",
  "key9": "2oWCjHyRy9RsiWmoxBDrf8JjrTvYC8m3C7dK8RTd6dHMhGADqaPGmCt4Wa3FLHf2UEbpBQHEZBneDPriC9hE9zty",
  "key10": "2DYRNXJLERjJFF3axhVEcvK75sXLKmGTTpR6exu4CUGLXjk9u6u4tzSFVCTG9tCXwBnA6cxZFm7FNQDBwJNfeUXP",
  "key11": "s9X2Jjq67qDXkSZ9UyAvjGqw7uPAvzauJ63n3JW932LeDx47mx3xoknBsWQ1TNQ8MdCSo7YoHWvaaxgcENRbPS3",
  "key12": "5U3CmAvZMLcdd8AB3FzCSfqB4nzdpgKh2aU31TZzefcKDB593Q2A9KPT1HH68QtwcJyDkXJVWrMNgfjWDuku7kV7",
  "key13": "orDtZbPuQtUnWSQ7V1huTLxYKgFRPCJhc81YJHdoP6RrMgQyVt2n2b7Hhhp13npxw9vHJepobz1pLPnsqaHQqJr",
  "key14": "rA95efQ1dYm4MkYQPhNagin72wZmTqXMguvw7SNyZWQdUkYRb78cExT6NuGeBG6mRYk83hGguaKphfcXz88iVYx",
  "key15": "5PEmyUcrXrq2JExXkanp65V66qWYeNJj1HGcM8TUmXwpL8Bboe9MfTehAFPRAmD9SVnPkVVs7ZCb9x4JZ45PZbQs",
  "key16": "4j5pXRg3GdKojmkvduGYe2MJUpMuQTAL8Fk27KX9RfYBbuMn9cTqVKLA3pyNMpLMvJt19FwEfpqGLJBVRyZjRh8X",
  "key17": "uYtgMiFHzdDZSLxJ7wFxqhDzzNtBqLcuFFrqxdSAqCKzg3SB3yZPju2xt6L5jsEgSgkadtFmygH5AwVDHb9NpCD",
  "key18": "3tBxF3v1BRWSQAB8s91ExPUUd6S26SvgyhszrjBFH9JZcUDJdhtttLzCxUjWeLBxgcVMKFr3YrvAxzNioShdEaqn",
  "key19": "2vrLSDZDbQJ8gE52UgGQFbxPwxaicuruGNxT2iLBL4TSTeMNhc1sUG8zvuYXkyB1CZow6V78y2f1LkhPh7kgCCy",
  "key20": "2NMBxewnyUHEffAq2u3t1FDSXpCeGbqxz25j7XUHtMPi7bMH8jYk26VvDj6HjnvFPtwoGR7Jy5qCPZNRCEcdB93e",
  "key21": "2kUM7e8cTJo56wBDKwMwLqvxV63Acvi6xfks9y7H9QCdf8LycaExSxfFA3Rx34X5xc1AhjaPbJoeQTnCdnN9hJTJ",
  "key22": "3KYiGXecY2aJk6zuoEYLr4XE1ypWPxZB1K7UaFe8n7Z1gWYjegBndNyWuuUm4w2x91H2SP3MGQzGG7Cge7hg4Ve9",
  "key23": "2ho5t86CUE3eWjx1LPhkoqUfU9sgYhuN9rwqYLr2zKhwT3QeKMy2pk8gbjQ6FYNNZC28YT8NhWTy6dDzUDKSg7E9",
  "key24": "fb9bvHJA7wGCTCcKnM59srGhqEVCaBCa3fE4rGFjQmTi9mdRwsUiRm2wbghcoKcegeYpMCEsgogeYp4dChgaNrM",
  "key25": "2ZQ8TaT7Krx7SkQz3fX6swMwLnyjZEJ72CfvZDmreLWYdCgTngNezGe3tjnEQAn8nGji6ZBgEHgcKDDY6EtUTT52",
  "key26": "JjnfwZMsNzuuJbLsYGp7YRrErZEENVUdvPGgfsvt8wpyYwqsopATEhwtk7gZgSdvFvU1Byz3j3frx9nFPVExSBk",
  "key27": "RpN3XJAxaqYNRtGy9jjBuZVnzZxwnoaGqXKUwLGXpz4ujJG2V5VqRwSza6ngwRnBEfgRt51E4SHFPVNMD73KaVr",
  "key28": "3KkTCgLzdMYZoXkip9X5GNdKqAeGn5HbVjGnmiT1CswvKRGpbpotjV5SCaNe4sWVwSfENAuByiuJAHY3iN4etWTZ",
  "key29": "3cXVmhdz4qxhRJfFER645vE9TrGbsbVvrG5NrwUDHaGoPXTXKMV8E7DE2FbUrWvqPiYbURD2EkdL8eNftnG9kmMT",
  "key30": "eqQHHRZpFzt6gPNEDPpNPHs2kr8H5DGsaX7DbrwJfc2PaBW3CrxwBQBvBHjYJpfymsv4MGMQ4edZoS3UrPVjLzh",
  "key31": "66FnQBAPBuZedB3XYmxmtUwkfEPwVj2cJEpz7nyyRu9MSEk747T1nCaM9ubLbaU66dTdFEnDTg4LUrxqDpHtd2y7",
  "key32": "54mEWMc8htWFmYcQN1EVsGeg9KtPfibWGikxAfUJLHxYR4hn94zypCCQ2MUPy7XukgXRrgDcBiTWxwH7LJXyWBGE",
  "key33": "57v1LujWiPu4bcNYbEJza2aHiW2Ry1VyHiYrB5vh4mdw6Sr4SaXmExNthHTXNz1fVbigCwbrNywxFBT41U5grWXj"
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
