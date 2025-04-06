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
    "4c7qhavfbNFZfyv6XRRWj67vkXfiFQZbhrgdiXcdp14nQCgC3ZcZBcoEorbvY1vGj9YRB9Q1e2fSJxmnAWHDUSx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d2QfXAUWxpUuZnYocBqzCkfchggzZJz9gK6hRpDT8Dvo6X4ncmLUA3CBV7JFq3PEX62Xa3NrU15TBiNYU1Wobrp",
  "key1": "4t5RzKWwnAiyHaTuZD8KiYFkERbymedKjfVZtpGDZXWLiHA3k65awz9NxWHjYUCC2hLYAfmFVQ91qjeYNrgSbDVv",
  "key2": "6FTfThXMixqsushbzdBYvanx2WgyPjYpUEYBCp8gCF9NTZ7eAHmorPThJcjMc3Myqd6pZC3em5wVSihbPi9dPhQ",
  "key3": "4mGrmryM15p432mnAP3QubGdYmsK2HH25fPw5WXV47i9vgBzCCQmDgcdwikLknC4CeZA6SKUh4GRkVHa2QFhgQmq",
  "key4": "5cyVGrQgrKxBNnk3HbLmmfoQh5cSWxWeSMK6zeSSA1gXjjRzYbiYiy37AjTjugzK6hJ3r87MuvtuPRTVgtxhGfCL",
  "key5": "TYhmS1dWwQwWbaGcANg5S5hS1epNrz2kowLbDodsaeFneiewEm3kEjisgQW1Qyi8aD8uYE1Z4GEa9UZE6WS4xLR",
  "key6": "3SKFDbM2wWeVGEqXr7gSf38gaXNLUjowoGu5uvH6nJFeeGaugPfgzGvZK3geSmYivGZDcREYGFnFv3siUsdroFxL",
  "key7": "5aXnJCiSwt9hNJfQaYxydZUkMDq2WpoXJcvTQRmKXK61rvu3c3yrc1MDZfntbvZfYDefwj2FmD6w8BeEz3Atp7nG",
  "key8": "3x7h18sZfnEx738aaeEX64j8FD2CQeHxS1AP1eBbK4agLT35GHyQihtZSg6whcrjLrYPHWZdwS9U5h4SkPLRAiRJ",
  "key9": "Uz9vAMnUJKzKigZchafXDTGPgbVtxHZukqr9PotPeZFa6tLx82Jo9jfgbWExXEHUPQyC2Y1HATrpZXA15pfwGYA",
  "key10": "BkAdHnG2iChANFnnrHCXftEeEH6WDPt3beTZRhT8BV2vnT4qHtukPEEtBfaeCWABZZWxa41C7hdvRsA2P6Z9tET",
  "key11": "53LnvzHvXyMB1VarDuXbnKwNea15ekHYsAdojgysLZKoHSi7pAyjTrK5XauxjP4mWfGw8tprurG58kuMTzwjxfEs",
  "key12": "qPpyK3c4yTcSSFmgboU96vaVAYpubcMNaomGhYGDTfRicUYPhzPbCoSBLZxYGTQd8CZD72HtvAH4BrWYQhwcTaR",
  "key13": "3jMraD98S49WyuSZYcTSM2ronPZd7dMEpTxQ5ydNW558HNavCjFVs1mucxoZWD2hvSCZaD2PH7vW1PnyYKZn1FJP",
  "key14": "4uGME2ZFAinEGfpz7BHfGvkFXbhrfWWpsszNCwHyf4d3zQpgE2RTJzH6TJaMKePJ8KEhaGhqAaHMDxQTLPFU4btd",
  "key15": "7WhV5WA9TkrguU1KKRAGrwfuasNGTno2TVfo4CAQveyeFg6XhETQi8DBqTytRhPsps5oasoEBRsdFgBXXC9WC5L",
  "key16": "63XWZgVTvmRmdDo5JbXTQqnaEznZX4fEkEK9sqgWFxNtHJXj2dXHjrDzmDJ141e4dwqAKBD3iM2sqdKbzQt98KPq",
  "key17": "3HYAV7ZZBtsT4RTvmnzDm23BXbUbjhhZ72pGqjxgo3ikcEr4XnifUCeLqSEmMqb1zVSNLWT9ziNaKF27RoZU5Rs7",
  "key18": "4VqixegnDK6j29tUUaZcVY7rXsLqZjp6xv16GxQAWdJ6CuNRZvkGNWFKNg67uYgfnEUSELWgbSc9v7mviDwZ5HdN",
  "key19": "5SJ1o4VMFN7XaS1M33yLDkFqS6PTNB8PVK97nRtjJjVJQi1Gv1xHMYN9PeJn32uGLnAfBvfdXfvwYNV1xySoKxA4",
  "key20": "5D9wa1zrJ38j28hoTgZvzzQbKEtaCvwRAgPnftRhWXe6JEe8gUnTA71cBBs7keDWt4N6Mn4wi7eNDg2AmGivDpzM",
  "key21": "2jmiARttyoL4sCbc3SWkorxWDuRD5Y26svYTveWcNpFs6Mq6NWDGoekReBiqCnxmZBNC5PpjxRUQs24Vhv2khB52",
  "key22": "5mefPMDenMMbEjhfnk1F69zzDbnMXminmpr2r4XMF4LRToxR1zjhqsxbu461bH3he8Dt3vszeZomZbmhEXSter2E",
  "key23": "46uaPsux3BLH2C5fpjUm1rg4U7GRLcEckdCCwkfy9g9sNTFbN6Xp89v4FJhmkCATiXyeJviPYDVBae69kzYRyoBt",
  "key24": "2D7mRfzuFXKueTYZWKR5ifsARpTn3Jnes9QWLh5sKrpE23QkTBZkbmE13GAjgZQdxvszGRkC3QdDEaufABzgvbqg",
  "key25": "Nc74Qybq5CyP5kxWztGoAAqxCnqNUSAUBoKpr4iNdSe2Ag6GGYtgG3uSCgjLjwZ5Aq7EDoy5UviWgkdtSjWhVN8",
  "key26": "4sWhT3KjCeBfkUwWQs36a1uGZtmczj745Nqhft5VyE8n9dPkShWvUSAWmLdXPPX5PVJHXRxPm9xVDUHZh2t13eG8",
  "key27": "2rSW33wrCkr5xrTgccWxrLjw91tPQPyxUCqq1HyQGAUqZaUm12a2YiNsyWwSZzZEUrRQZtsEVGiicBZmGNG6v4q7",
  "key28": "4mBfHWKUSjqaJ9ThQo85qmN9uiph3ZYwGGYAdMfTqsLBu4aPVEgCMhsdstxcTRHfEbGHXwfi9dYEr6mkzz6RYApp",
  "key29": "dZpwQgKqsWUFQVYmCx6rcridvrQzXtNTeH3TFB3sUxobgAKrWRChGR152Uz7utDAJ3NFwbq6BwiGMBu1BwhTZS7",
  "key30": "2M6aMLuZMJUsr18UXXLHfHqy8vShjEYwFYgwnbiaM6gqcrZFVfJD4s6G3FukQrbaPxSjRUENTMbQGzTCDg6a9v1k",
  "key31": "5it1FXi4ZmYZqYSAwZNfwK7SbLYoWbBbt4gtJw6Ndn8EAGjyoTgCdaks5m7bCTteo12qyTtbnYjCKcURbdT2BY6e"
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
