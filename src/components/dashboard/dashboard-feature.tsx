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
    "5ck5iqp9FsiF44E6ddaoj4xPue1BXZhMznurSYvwdhQVQvU4r3mnsNRTKgHB8LaDGk5sZixgUSrzBuvsYZRUm77d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vMP7oLTpJra7VXWsNbheKho4gAQfw6JjzuG3rvoso8j7XzZPhiU6Lu9bK97B6HbDx7dBdnFh2peLPoDBk97nTet",
  "key1": "3nTo6wXwTjVZB3ureBBSE83WMu94kchm6konj3dAuVXF5CKY2tVpKp1SQR4ATPAW1wP5koNxkuLDha8HNy5kHr78",
  "key2": "32p3VZj2JhVijG4c5CqFaksCo76Hax5TyaLGMhC8cpWm9ZDx4P5yDCHYTonRrzr2Z3WqzGz4Lt1c8D3ZNReUnkRU",
  "key3": "3gvudFPfxtQQsPGGcUzw5f4Lmkgj6i9VcK2f3SyWHbYgsr6c4gKsMCKa94epPNVVE6hvCULdgpotfAXPvYVJ2kAW",
  "key4": "5Ch4z2JBuj5s3TJRHDiFguwj9Ri7GJoegHxkmjECNoqaJUmRFhjtbtgTWJvT8SwftKvh7Eg4ggEewu6f6dumeouc",
  "key5": "5pqmWKkqBQThZtwtZDNU3pZyPpvswEc6gSXoSd1RmZAdbWb4ZJ5U8aacCTBVjhcoCqhXy56KghgrRu9st7P5y2GW",
  "key6": "449jtceuGQiXxtdLYcR3wotQiWCHSgvEZxiwzfmQBxfNfuzneFVDKagniA63mq8uixf4QzhiiZfQZqzUXboPHgua",
  "key7": "45cVoyYYDznGx3SwwmRzbx2NxvqqnUPUQ2CUg5Y8QZTEBR6VvEzQg5h8KVDQgcXkKbgGvoqCEcVVdkppB5a7DTid",
  "key8": "4oo6LyrQZpLfHVxACfipUUhkVJMddyU1rNEzfrypFidEaxrQHDi6CXRyF4QpsVeo7xGV36y5ArgKZPzSMw3GBjb7",
  "key9": "5TmnjW36St9ifYa8wuKeCNKk3TkP61AFgeGyuqD9PRhMKpMkqAwDKMU1B8kZCmaPc9oQKrXmXehA96NrnXsWEVcq",
  "key10": "5aSorrsxcZTxSrfK7PahF5gitaNpr4XUTjbXZ3zdNSy4cMHWnfsQCYbUMdQuwCuuzVreu65mmTmLZBzoebXPEcUv",
  "key11": "51EtCoHPgFCcvdXyQ6komTAeD1qizUpdqL8pHfGgJ79BZBkZHkNnoYSd4Ms55b1bMMfFiYb9zPmyRjWCuLxComVS",
  "key12": "CH62rpRWEcfpeN3VzHSt94HUfvFKAPYhrm7stu1eMFSugwHh6axMQUCs4HDCqJy4xbxjkvwyQ92dk4FbKu7Vac5",
  "key13": "8p8V3HUTuc9APX1JeMCYY9ggqrpnjB92FYhxa5JAvS7kWrthZBwymhV8MW9atjqxzhuNG1D4Th82X6Jv7GD2fpn",
  "key14": "5tHQMqBTJqhNsw2HnurTwQ3f6YBXcsFKBBSZk7eGQHXFn1pPo2eG3MNqK72ACeMHWN4ohsyKAUnFQJEfwFxMWb4r",
  "key15": "3wZZZiAccWfTouvRovqbk8vCvDinvqFi9UQXkMBwWWXQUDrTy87V6p2CZ2oNRxRf5hMrVp77CdoWTMV7HQ7Buto",
  "key16": "4a3RTBJZNvY1DwLNcMJ7GM78fJPJvadYKSDQVcRowDqHXhjYsKYARGye6K5NjaS1PkReFrnaKkKNfC9FZL5v7ERo",
  "key17": "59TQPKFnBTv9EJbWzWXKxWZmHpGnkxypXVXordfWzvUdbnJF8PZ1GVVsiDyKiaSaSE2nWZUNNrQDhYfCXaUWxkoa",
  "key18": "3UCSYXmfu1W249ZQ26p2McBBqKocoovihQpxterfqEVhRcvSLG4TV7uw9azr8H6UjVBimVWRytewaCgguMX8THfm",
  "key19": "3c1wc43RgAVZZph9aARvXcMnaNtmMQBeQGptpxjS4dx7k6FHnzBidUNEKW8L79UyRN6zRcKYFFGjrW6tGNaYBMKi",
  "key20": "5SE4W8pdYSQ3qLX89ktY6FZ7BDXKBccLs1dUrEsqqkKjEKShnrqUwno6uqFNBxR6m1t7ndNMLbnyHYJbwGou3xJ5",
  "key21": "5hUW5JC9FYq5PFT4ej4X9WM9yEEvaFysHCxKNwzFCYzZmq6w13pg9A3cTNRU97H87io8Bo7C5wZ8R8mTSmiNTKCt",
  "key22": "4CcKKnFiKWEESaXzJp3HxbJieKE4ih26kWbA6hY2mcXUc2XUYM3Pxnf5n2UNaNcH64CTpmVQsHWKiuiNVVwmgwR1",
  "key23": "2YwCZpXjRTWYWnZk5MS8GECY68aAAtAe7FXAHPLY3iMBMzfMskW1QAc8y2WWDhv89Zmj3vRcoHuPSVCfcJgBtT6U",
  "key24": "2oNJHZCHGt5xKw2gkcAuYEm3FhJeo5c4YhuVYJQFsEzUWeccLaCywvb9KRkoDV1UnCmZ8UMubgcYYzvACDVnwMQz",
  "key25": "2xWoyLyPHLCQb1xoGAfPJtth1DhC3x8yWCdpZ4JrQK59z71TXDCrcB1uioJZmesYfG4xmiFwfoQpCFmhdQMTj6Qc",
  "key26": "4BBEuxAV9ynsywQ1F8QFAxsPkRGZd1BanfV9oJmuTCvNN823zDGKWFGhLCD9LEXHjYR86Qc1mdJFH33syD2pCynQ",
  "key27": "3pbud4uBJsiBp9bbEwkPdF4JdeHdqoVXsGjz4Ezyy9fk4aGmQSJ3t7pfaQa2XPubA86kWxyKRJJyQzM2svpv6bx8",
  "key28": "4LpnSrYNNTqA7vZQgxYp5vsC39cgTv7u5cz85vkBh6noiGNFY4cZNToFoGRKhYAPLyZB6YFwy5kgWbtmKqKaYMJ3",
  "key29": "sj4gNJqEYVcnLeVZZXnyBv33t27pvVEmYuEixtUQvB1rEwDkYaiJCb2XqGWwW4zwLQGY3fAnkjdnakxFUAQmtj2",
  "key30": "472dhJZEhQquhnj5ArvEDHCnU6oNv52pjNd3159xJUYCqKbYAVxkvjsRm4LVUDdmKPsSpdAo3EGyxaZ2QmwwXRUu"
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
