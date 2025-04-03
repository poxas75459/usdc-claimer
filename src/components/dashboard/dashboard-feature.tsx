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
    "4WikzuwBBKBAVQKsysqnBFSst6SGcF4eYgr8RmcmvfJ4Ty5EQaziwTT5ZLXL5ijdJmJKuWjobr9DJow7QDu6w115"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yiR7H9JJPFgXqsKxaH7osdAVMjrtbQgvgpphuGzNyq2uQWxkKGwo66TU4kfqizDg5a9LiKoUw4Ex9BbaQ7EkKhL",
  "key1": "4a8LTVtQ432m644uQm3sGSVkAnD4yUsiyeHQUaWB6FigwESU8hhVAZbe9EKUDhDas2Dne79PJPEUwcDTNLSkEHdU",
  "key2": "5tGaxopjqrobL5t8FWdnoV8HVNgeCBe9RsuqNu7McmsumxBhGz2GgYPc4LrwDapm84ogNWFN258TiWM7M971fS5m",
  "key3": "3wBwrDJMKzumQZ3BhSsmPcjgBtCLvGtg4CxsgCQfPPs4zU7qsRPRT4pbUpuVNsW5ndYZb1os6RLvRJqPxMtzvECA",
  "key4": "AwdoQcGVs18T7i28rk4yJurjdi2EkpK2gPjtQ822EdmSiKMCdsRb91khxTFEhHrbEURBzcPr6YW5XkBZUW7tB77",
  "key5": "4t2LZGEbjnT7yQ4mhTSsUsaAEFiU3g3TPjFAKZCECeBEb6cwLeavz35CTBbkjig3f6ShfyUuazY9eELpgEVwtz8a",
  "key6": "4S8rbJGbVjrGSnBYtgaaGycrc26FCpKr67eVTrggZRJyN3cW8iEWqodz2pSnq5BCk1L43Miezn1V8o1s893bqrdA",
  "key7": "4vLEB6LeAyeuaNeMK5fNnXSVnXk7Efcef3kfKZhabYDs3UajYG5C3uceFyFzFx2CMNQVr9XHGDUHPhwdbENZCnPP",
  "key8": "5Hy2mXtSwZEv1jNjrKbkRYbWBHasJ6A6fkYjF5sNYL6rJKjBDXVdx4YDPjcgMLPjbrCmrNKtDKnJZ8TS2kYtsTdi",
  "key9": "fFwB89n86sin6bFnVpX8M2YUuycH8746iuYscyVpg2WxnmB7dbYzbudbGeZV1sqyTYgQHBE1BBeJgrF3m5GrUtL",
  "key10": "2vmq9E8Wr45jTgzNcAdg9pma1g3iuRVJJsCSbHqAvSMUtBZYqW1XUqD481wHkPz49zsjw9Ra9evqry6yExwGe9N",
  "key11": "46n9LceVXE7Rsnwhs4n7iRhvCK619ZtUKGEfkMbsY8fGfuhbwa3PSgn4NeezusSDN5W71qSGRur9JHkmDGDSDtzv",
  "key12": "Ed3BuNwiunUcXGxt4aMDGxEwUwxQyrEC6sWnfs6cjbx4MWZbYjgVmqaYsV5dk2aNzc7RkPAG9N1Z48SYYkU2JuG",
  "key13": "5xnDebGmwsjPfFm3MRABhGhSoFsycijshUp9GKeKyqHt8bdc6jqVXh7xdz2kF7vov3HazhR9PJXwjJg524HfmZXv",
  "key14": "5ckCCGA35CjERQepEeuxHhF5kwvaWMFXQkQuuUkVYMHhwWpUsX77eNbUAZ44MEfScbGNWjmhG3kmQUd1a85Y9beU",
  "key15": "3TJgqst4p6iFGZUiFFQBEVcLyQuAjLFbZutm9FUNk47zouq9ma75hayZK5gqKp6THVvoqW9a2k7mx4rHDWH5yjve",
  "key16": "3b8n3nyki3ewZ4o7TSVtGvecrAU4EwePU8UC6p19KpKrdYes4PoDYTcJmuET2TQSU637KbJePTzLism2SkakPau7",
  "key17": "2hmv1S4zqBXe4K9wX5ofczTRGNyQTn5JBuxCrAqWD4ibH8wcBe7q7Vt8FRwHx3RGX2KTzMGJfjj6kCXEJuHod1si",
  "key18": "364Fhi5ykdZaksMMRriTNB7xWsCn1dXw7uJf3vPPKGs6UqvfWbQVdgyrN5q75oG1fcCXU7Dan95BeGrmefMfy9B3",
  "key19": "3oEJSkKuQWyQFsDmCRFBrQuq3SF3AkPAE3iF7ghnKWX8FsYdLHZAdN6qLtcdM4sx4geudZX3AvgTan3vRk8hs8vm",
  "key20": "D2WHaAnkbgqeHzqmx5EZgYgCi9ZcrCGofzq7x8F8dDeUjU89WpFR2HmqULartmvzqztr1DhBBDALCDvzY69YLYC",
  "key21": "57U4dPN1wH9V3ReMDnJGYQ3GZFTxUrrYMYMCH4hRULVaMiXUJhab3i4BkcjnHHy3zD5c4jc1ztXFn6Twdm349qnR",
  "key22": "5VjwagtCkgkeQETYw9L5aCPrbbcEUHrBbwRCGQFjD1GNJvjAJpQ8ZYKSRFMZQ8hSfmYqF8AzDWZW5cKhuwqhLUA2",
  "key23": "2AtmCavdiPJDLSY2k8zYFhnmgRTPF4pqBadAghdXpqVjQxim6qEQnwzegTAYW11HhE4CMq22y8sWXxoxGpgpCPf9",
  "key24": "4QyRJtgbiykopjGUkHx7gYtJ1CzXZTUiNoB6ZQGt7tMEdvJFTku6yW6Nis3RsUtQqWdrBsQc9mRKvw2k95NE2LYQ",
  "key25": "2dMvCGCtEvK3cJSqBNiJAHuGgHZqkEtP4VSSQnkpPyrAqoMiwWRPm7WRy45pgZEuHuorY1QoRpDYXT7UK3X3dfFD",
  "key26": "4yu24cNuMEU7AYyAoywKEtU1GWzB8krH9wh3kfnHSCNxgzdpUpN3sYwduUrC5W4uNt92D3ofFg28RGYzr6WM1poY"
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
