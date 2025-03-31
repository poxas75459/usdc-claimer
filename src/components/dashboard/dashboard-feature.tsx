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
    "5BqNhsEj5E1drsUDvBKcxEUTTHa4sro3MAfNUVxbzReRqPQcQ6QbHpu39USWWNymqkyhqZKLoYRodCCtFtu7fgnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kUUM6P7o694oFTMqZRtzCEgzhiTKMWBjc4N4gsbRhSuyRUW5xeP9K2kHtuQUXHhtX74oXRcbmbdjatDXuHoM45F",
  "key1": "2kKPMUfVzJzPcWjWXJR4SNhhANepEXfJiSotvzj9XcSYa6RxwxUdQwgYcYE6X39vCtN59iFEwBen8PP1N45zj5F6",
  "key2": "4sQU2C2Jfz4TrVuVZzFBUMQ4Gn8BPUQ76L6T8Sk63vDNupJca3QNYchpYc3hfNn9ZeUkxGz3VLFT82gqLuFvCbCg",
  "key3": "EDYkS3piWNsL6i6CK7gV4TMbjSefSxptShE2M1Hogkoc7HH3D3nj3csBfXyEiHW5YBufj9ymgww17ipVzte7JyH",
  "key4": "pMXKpNGqGoiYfe8Cfe1nLbPjE9aQmRzBA1CDURfDJ8SFAWqjMSgY29gTT9B6o6BeoYkFTPVyy8BCDNTYnrXyJPt",
  "key5": "26FGA5KYkQWHQD3cLEK79JK8XYvNwT69TwFyi7hw19vDFrsuVTa7T6NQ47e3AyLHpQ6qYmNbBQFfcbZNNdmQqCPg",
  "key6": "3qSNbooVwp3mE3NUc7FRjsSMtLu7MND7B1sGQW29Ep24bj4hd2EgnS7NyqrQCD7NMQNwpN3N8c9dVFQAwQMCZkSM",
  "key7": "5Gom2o3KUdVAXVS6EZrEma9ktvc1fNXar3EtcPye1W2BA78EFEe5Pe7iAifzox7FZdgLTN2DEzfU7kqjtPAqLBiq",
  "key8": "5SuN9tkqWToYF5h8ytmtd43uxRSMxfrHhceBAeEHV9vUkVcLWRKU7uSk4ziKGcHsbGrtp3XmWtLHM8WxQ7fU3hx5",
  "key9": "4EdhtAi1JFXtHwuq3vyi11rNznqPiuNNnToJRFEc4JQ52SuQ9LiJwECT3WU5Mdr8nXdz3VahvAWyV1Mbz3YNKzC6",
  "key10": "4zGuLL3HXsnx7RLzriVCB6F8ePrNhBo8euku2wY4uMM9tUhJZP5aE7p9S9KS2d2iSGaCd18krXEb5BFVC6nBAVeE",
  "key11": "63szQLFnq2PP8UxGJvHowqx7h3oKJtdF3n1tpwaBmkkP6WpnqbrZkUgQh4HoGQtGSmCyJunMuHkLfaouG8qHQUQJ",
  "key12": "3jAJ3ucobSFLnzygJJhHFmyxFkjuBh1qP4CKLzxteWwVFpMPY5EgmLqVgbxkspneKT1Xg2FSCdgzXLZbNi6wdTxW",
  "key13": "3ZY2twuEY58EqcLF46ie82L8cGWwaCDgVa2wYRbdZ248oWVJKWDd1pHd7ELkGknSJGc5ewqdAZwnnBMTALvvVwRX",
  "key14": "3faPzW326e36LEzh853iar6ifFdqyZGi29hqQh5wR92EheJFoLD5N91YrGFm7vM76oKUqeoYf3jzXrMgmR8P7KLr",
  "key15": "5LriGmrd5XDS5JVLXEhyryfF6M8XuUGW5y9Jw3qfCUQ32QEYpBpwqu7VdRUaRntJ7KAqwP9VAzESZVFJafUawT3c",
  "key16": "5toyTzT3cRsYFQCQRMCKWA8x6CHaAsQHu5QksSXgiXK6qwPN5a94LunKaeH9NUHYGLxXfuMy51wJ5PY8wcXNAXBt",
  "key17": "5fAaZks1tRPtWg77tsdBp1HjaA5J74TS6wCURoEmsqtuqowFZTYZY4R6yNqcHcVc34h4irQSUuMAZ3QYFp28zaNB",
  "key18": "3TtsvLJKRzg8q1ZHMApZEPgsd4XzEzU65PgfJWqsF3dAasJr21rUfRxdFznN7tyzT259LyjY98x8CUnR2zv3k8QJ",
  "key19": "2wLiDbHLH2Ld9gm1dScFUyQ6LizW8gqVS96RUm2zgUrp3mRGquTGp5j948UWsYsggXNLySLQo4hE21d4BCf9cH17",
  "key20": "VA34CKBsZtxZuA4u7K4uiPCNEPvVkZgTwYduq3FVya4rFP8y5GkJ9qMUshVxubeWxuLTxEdnDE4yCFpb8U5fQyz",
  "key21": "4bE3PPow53h596YGT6Kcj2maS5Yk2KDbVqZQfduh5yffamVjFKneT5m7ELhda9exo574oKtMyBX8hkBJuENFU8EB",
  "key22": "Zo5pKeQVuHiKnLjBRKQ6bwxEgrxpYkhRo3RVtsEHpFgY2k2hvJKY9SG8xPuiJmsfHUvrTKXPKpYBjEpBVDr4N9E",
  "key23": "2a1X71z57nWU8f5CBcQCFVWT8tkJcbfVkUKy11gNF6SMFQx3BVuwHqx6cavCkixwhmT71X862o4Wie59kfQybtNR",
  "key24": "5fCmyxtFtepTbDMrWLEgoujLmP59FiRk8Wi4zgDmutSyRPyavbn1PDZkEhWafDamHheCXZUBmPsRf4JJZSCPWPve",
  "key25": "4fGWr6e7NpUrZLbSAkT2uHR4oUUrNfZEE3hHK3HTa2e948M4vRjqs7pSpcjMrnowRutTAZ9xeYzojys5NbNvTSDw",
  "key26": "3hyxuXTnJZMZD5VQaxdiFz6PRQEiL3Puo8Lakc2mEWp7U7ANpBJdDAh3tiFkRjm51M4iYDVSCYUqVnRLBKkEEzCU",
  "key27": "52UhZfAo7vAZod2m8fkHrcKpgrZykysYFjEKv3rJ2ETjWxus3Ve9PzXCfQotnpXF4cLJd9XyWqqMi5eQmxKpdMmr",
  "key28": "5sjz1tquMcoqgdfk1VzjXbh1yBuaayQ4cLPa5rBmba4xhQLBfWyrNBmRrgkFM5qQoWzRe4HchPbirV57owDD3NFp",
  "key29": "4JqKjEX936ekiVor84rDWUUQA5afbN6M56J9mnRMeAEy7bVCRBYFvmYAp61XW6mj12KSK9J8U8kPd27wWn6fcwUc",
  "key30": "ppFs4eih9991RCS1EHW6K8HHaMT4a4ERV1pWSc2R6u1iiBtmt1QQRKnx1HSg1DM7mEK4CaLGWcNmFcW6VwCNEkZ",
  "key31": "213fZqqoSMRH61R2jqx1poqWX3FowcBrrG3roQG9NooZGftESLQQSye5ptepYvw5RgHS1mPkMc1bhAf8mPD1Wyt2",
  "key32": "2KmWbz34EXZ7q8W7rRVo873dYHvg8UEmbT9wpke4mkBeufh1vzihgcpz8DwmaihVCiK5cccB7BmQAaGEbHRxPro1"
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
