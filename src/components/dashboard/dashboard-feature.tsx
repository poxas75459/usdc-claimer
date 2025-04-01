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
    "2GBD3MkZzUhohPX8K1y5TKQMHw3vKG5RgmjdqmrVFgDZJHBGiustQXs74PbBwDQG4uS31SsMBNE8nR6CbAoUNvC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W6sUcrAsPdx4AosRhxmhZG82qz2hW3GhGq3Kk9uwd9cjUzffcTTKkm2aoD7fGzsM2RZgYAU3aAvZKpeeaW5UiGW",
  "key1": "8gtbDiJwFi6k7vUwwN67hEirRvQU1UNbGyN2M3VQe71aDiXqMitfcDTt6BWcVHWYoGMvNpPjekxR8fwCedDyqL6",
  "key2": "2wTJRMUUQAQh1oZfJp1hmDfvmTWQxkse7CpXd6U5pfmv7w2ebhyggzWyYPCi948aHBoK8i3xC3ovqMzmmHXX2x5R",
  "key3": "4hb1wM6bP4hRXsnm3phioYCjPUDy1p4ffpkCw4KqJ3z1UTKgqnTAUrnEMyHRUSgHxpGmAVS6DFdAW967dzFdybkn",
  "key4": "4q6gb7i91u3x9u8bLYGpXC6dncR7ru3DEmhC1atF9x7MMRSMAKKAKACQtpPng6yGz27zCfyUXy3YCxBHfz9y9Afw",
  "key5": "5N2VRLgJVkr6xULRP6P8K2g27bDc5Dg3TWb8NqdeuUDvZzbh6Y9HnnQHNhnhqiubWmpeKTK5nPmC1T5YNfGN3Tro",
  "key6": "5wmC2pJnubwaiqUpPVoMNbwWtxdn7pPydL5zQr6da3gXaptjDMjeKuLgj2tBxd9rGEJqYnEc613WKgjHNLCJiQq5",
  "key7": "2tjzthVosQiMtwr2y2KZxydmNUPzPcXHxehY46WgKKmThSVtqLanjqbPnB7JHw4DbNDkhnAUi2jaLZaqDvuVA8sL",
  "key8": "3yBz72THwQmpQViqyB5tDpKuVTBjDDVd5qsymg9KTxj2fy6nnqV9Xz1sssF7sfTP9ndBzeBPNAn92Jchbou1LuFj",
  "key9": "3gFoCyZrov12AkP8zK4Cxg3QHPBKdCmyntw5LEF7Gw4SpNeZCtbcGJD8wVQcNhbZitBDrhqCvz4tvPNJHu6jNHFn",
  "key10": "5fXACh7F6xfuZs4Lyjy4nUKhLZiydhkbyW16bJKiYSiMkRxYRFS3cHbQk82bqzqeRHLQjg4XLApSGDPxgW1wki8x",
  "key11": "ZduXsDXUYSB6vBZfgGy9d4QQd7QHhpG3ahSorE1CbtzDDGdPDGngsvFQJu32A8YEmn3mSxfhNxbCcriECL8rWhJ",
  "key12": "5RcjeGVx2iJo1wM2hfUPBNg6msRjRCt8sct5WdFxB4mcYGa4sVnDdmxYQN8MoQMRwYMn3xRQNfJHNAWnPiofA2Cr",
  "key13": "isx17DJb1wm786Z8ByjUQBWdgq4GTZkwhd82rczW6HSGrXw6RMc1Ywj2sS15mKXmat6quDoBQ4jqLBezmfu4GSq",
  "key14": "Va4oszgREWnpViaS5PRzMwa17FbviLg5vx29VJ2jQh1vLhVzsJFZsAKSuyPjqzPecJeiGgQWvJKepeTpPJvGAy7",
  "key15": "3RUh8rryorFgNrzQrqv3V8UJMNCgNfNHmsfsE5XTTdZGTzXXiSBrvrSPsbu2xAneWLNYEXuiCdu4ZNosSbXp4ZWx",
  "key16": "uvZN1Q1EA8suz9g8XdbZKevsLowoBMsYCkm4HE7FCoXKbxcsnLsWn2b183iNVnMWvkvXvMjUXNDR51uGQYyGCpQ",
  "key17": "Ydj8TzxC129hqB1mAdRnqzSbct55cB97fQbJktRhdgR8xndwxvpu37MksscRArqLpCE8pejZdehS3ZP15Cb4j83",
  "key18": "4Cbb2dm2PBt9Kz1R7VF8DDGqjYggfksGHJky9tLUCqpqhX6uiRBmknHNG4LQy7vdcsjQxmi5DWAtczwuB7QAni2i",
  "key19": "5agVgfBebsgs7r4yRdaKUCbKh72g7aYgNe9MVTNMDWfzMdwXrVQi8p8Wq91TyfJx4YtVVXi1URcETRGexs7e1VSw",
  "key20": "3uni7tiFm2T99BjzY7kRq6q4Yf84zqX76E74pEF5erUDFhGATqe6aCwZqLCd5nN9tWWhodMBHWNQ1thw5i1gywj9",
  "key21": "38N3ZH54kSmKDo8absqcuExdaSrTZfLdTyfGtLuBDpQsAnjjWMuKBcWbuWa8nyUsbRsj8bhL6o4DyBLXhchxHUhe",
  "key22": "2UMZL8AqHokZw4TgfBWd5XtHkHsULqu1uQoEf8pfoBVBs2vYMUoDbqvmqoi74VZnN2NNsppxfB9bDo4qs5Q9U6YR",
  "key23": "2QVAYKSC4MnabD26g7zhMUfv7PHrhWALELoSvStSLSpEteGJwki9TpGx4xib5Tpv34UhrD1ATgoDR3fU7oXk7r9t",
  "key24": "4nnDfhPvzVg2onNdymSFDyNxMqKLAdNJF5pDaAgrPjNb7dY4u6QcC1M81fxJNU3127uxRo2B5F7HFB1cR88ePYnF",
  "key25": "5ei5pEjR7vkk2pvzSrSCFZuLsjZji9zYeptZB1vwDVM7qPHghN5YdnA4CyLqBCAxZ4nz8hep7UhtbHjchKUs3PQH",
  "key26": "3SrpS9nmRHv7DzgCGzWuUzDsDauZ7v1mKqpdJqZqUazNjXJsPt817ivXSuF55DtyVXqM5XBBVBjoTxBavL42w8Zt"
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
