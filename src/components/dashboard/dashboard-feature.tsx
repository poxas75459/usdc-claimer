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
    "2q789yAHM3dTzfy7QLxeNQB7LjozN5F98QdBrut5XtCA6Bcx2dUYH9FPuYfw3ENsKteNnx9EnoH8WnVs8GG29XGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4airWJNCEVvBaPTmHV6ySDqTTWTceZqgCAaJxx5nNFwjinTm4dpe968qX1ZTThyRi5F989xYC5CPfQCDxVrs6JLw",
  "key1": "4ndoujXQ6PzU1RGtrNX3trGU329wuEhejCAMgFnwcEMyi2HKaw7RwcrQoebR1zHwC9GLRUStpdmVRKYh3Eptt52F",
  "key2": "4bantoyxXpHsrZiaoPJuNwVAyc6qcgDnfXDLyHfmE8NZgvdv5JFjvf1KkRRjYHcNRhTjL1yKVQtND5YMFfg1JXEn",
  "key3": "5tziujMk5pYDQC1NuzgKitHyDGRhhR1JSMUgjCrC2tntFh39kfH5mZQGFSrYizf2GZywubMYraFfAtVuSSQdecbe",
  "key4": "4Gyqwn5xF4pUciRWnSHts78KdVyoc4E2985KVaxjuAg1c9G1bEKsN7ZF8maGPpB3syLLQReoiNhMeVAszUKwsD1T",
  "key5": "5L1mQoCVw3fCdtovgCCk8dAtsotE27a2fg7fZuMtEaqptGxHDztZVyK7Ph7c6Rbw2wxTtCqZ256d1ihU6v8MF2uj",
  "key6": "FtZYcZWfPhkGZyppWsBuH94NEjdwkntQTaEoDibLJeuMK4dZve4z39nEBZDa1QXxpJ7XNLPqQmKbKpN6seLWyo1",
  "key7": "dqgJ3w1UQjiqMbmoW1GNovqJZ8HrC5FK8CtSaXBz6dX3sAqQTbfdwzqBSf9Rag2AtbebpyUuTbPZDLaFMCiiSZG",
  "key8": "QnJC9J8aDj5BsijL3emMtx62JNEWnKjCUViyG6siUo5sATYNZpGsg6GAEcTk5TPia6e9uaCXhrgmmV4p3eKTF1v",
  "key9": "4UUoE1mCg4AHSGtQeTWXQFn6caru5rvKV81JHbHmbrQpdrmhQH7Nao6yfU5m73ZfnbXypxwKkCtGuju7ju7T8zsU",
  "key10": "4BFnBaYtaaAdfgczF2XZVKrymahGsiYJ6jjQG7YuKZ2P7aN3LLKsUdYqG22W23t1HZYsNJfqtzUUteNWZBiq3ewS",
  "key11": "51QedwQU1MQDYCvXqgwwZuRwh9sUSiFWT2YJoe6TCZHLZ7uxagjgHeADj91xfP8uivWFGzdCb98VdkStabAk5kvL",
  "key12": "4cyWzXhRvNKcTh3KctCkp9ZQgTL4bDRfFqJQBjBmkhZzBQH2wnMxLAoEpNPy3SQnU6wchHXzip7MZJBm1uSEhxho",
  "key13": "3yYLQQ4KHcKgJDVEnpTH8bcDw4cy46npdNwzqNtVf82M7hMaAUEpCckVVEY26sZ7ZtmT77QUwWqihMZeWe98Ljip",
  "key14": "2pmrKzHLDpAtYubkENWqdR1LCVzskwfeqTeirzhndmxTJ17P2Cq88ZZyig4txaFwpUtSFpeZcFxygXtyisqxikYJ",
  "key15": "b4DC885rYwFo8SYHKEvDj3D4DgnNmWopS2nao8P6cXm3B5bzT9nS9HjwAg5me1DM7gvVxjCAj4AEDJYPVuTZsjj",
  "key16": "3rs912o8ivW8DkPQTs2ReSsXmLcgJjiATzCfeaa1sBG9Jj3VfB8624HKNg8RjPF4U9xcVsCq51muxyfmXbSmbEEi",
  "key17": "4f1Q3NCXtocYea3yq8dhKiTyUHVUchkkxd1WxDtrg8eFQEECdJbgj9P1GFEg7dcSDbzsQUrXzK1JJVmqYoSFQxEy",
  "key18": "2Qf5NSx1Pi7jDuqiu3QVn9YZMCTcmNWiUM3rxrZSj5QB6ZuCPMAJTxw2r5x8a1nyookELseJkfUJBWJZjCeAeAUD",
  "key19": "5sBVGNRMMESLpkvTtde8Mww9YSsSRYxN9GXrjdJqNy9Hwv5748tvhf9YrXMVKy334xSk84UR6FAjB1Z4fycBkdVU",
  "key20": "67DPEYsr7SSioz83SMUbki7o41UXmTsoEbh334mLtwsZdGgJN3F3QUnyJVBZ7P4uwTfqSFVQfybCD3e53HDHCUiX",
  "key21": "5vibL48VChXeoDYq1UvCyW8oyK3mjAVsSeCoeSvcDznfTMg7Ue6DzGqx5bpACCYNbsdCyBAGE5o5J94A4x43Hwoj",
  "key22": "2g6MaBMTDvEXWWbuXeyWeZrg94v2aR31oUBz6ohX9vXcFEYoysEQBgV7K8bJrw9JAeTERyanrkj1qfcwspHekfkc",
  "key23": "2TPyBEBrBMVn1snGKDtigmYJMXSTHjBAEY3jH7QuBXTw8kTaC1jjGboNzxpxWsqVXazmcwiM7Z6X7937rVxMXuvp",
  "key24": "5f4wMfmNzXKfnwDShbjoTajVNxu6kJZ5jYzjdUC3d2kfmE2nxAXcLcXzHGPK7uSAghcG2Rqu3dqWPeFbrCMT8Yib",
  "key25": "4qVprSwWdLCNonAAzg8JQNdYrQ8nMB9hhhiNJouREa1LQwdASdZRwLy9gX415VRAemSvVNMkVxmkGmGbu8dutBxK",
  "key26": "3gfM453j51y7g7u7m9PnS1bWGh4V8FQJESFo8DVci5gwbkABPT4XqEkL5jf4BL4atubh6HNAwziAXgXnoPV3uD1y",
  "key27": "4ejEbp9z6U4YUvxw4FveKVYhhwFgmR1npQbhe7BWWqD791qcSxnk72TAM7JgYWKL1ds78ipjXa4hQum9KYPmYZgs",
  "key28": "3NuEa3mXL378wCWdLZh1pH383HvhdTSvyvxGVG6iSF2Ejgx5KdSkCiyeMQajUAdEiXKB59kFHWf95vtcwPyMN2fY",
  "key29": "ivCPVpW5KXrSBW9Xdgx1MAgnLe8VvD4txmhDSZ63XZ6aAnzPFHBFthfMzAUF5TUjPvvHxZ1GV8GkZzhdWBkpQk1",
  "key30": "5YThAywFFVXNeANiEHphqQbsLgeBq148mP4zFy9i4XxRkiYViGeTKTo6xrhALHCj4TARJqC7rgiQ1F6JFBZZwDoA",
  "key31": "ApWpyEYxVjUjopBwgo3DsywXa4SFhK4DgX2fXDijmfmegqnNJuLgKWLKD2hZCDJvkUM9eJSC2tQQVkc6VLFQTcL",
  "key32": "5P7pehLqcifmdGSsc8gtf6wbJGDVQsPWm9kRojxSJPRMHFmXUnc1rb1xQBbKK1ed6MDEXeLxG6HMmWCkCjY2LhfA",
  "key33": "33siTDmZcmGJF5ZTrLbmD2NqhDR2yUaAmuVMH6yx5s1PSmfpNyK5WRT1ZRxj7GwcWG137HjdsD2SeS8d2tuGFtcP"
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
