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
    "2jaRjgrT8mhz5k7FF9Tz85AKMh8tzFEaSwuobeKnn8VawFRcXa4EXSadh8iVWsAkfjxsJ3xvrBrBQURuZ8svLTSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3orBDTt2UxAhG65vVfSrrM1t64YsqJDTMyyDJ3friuEs8W8AxWUgJpCgLd2fWXsfR6cjzhjiG7e5yubyqTJYaNgz",
  "key1": "3RtMv8g7c45tjTFyZ2nsSzkzkDDfXWA2cZktVTyMx9neapJMsfwYd9RU8pEUB8m5q5n1kFvktbSUrBRRwTNKQtjy",
  "key2": "BfBHyhNpwX3hLFyWpZWEvYfakfWnk8tJ3U1suvJzwi1JsN1sDJ4FVHqTX7M1BBuHcphGQr9ouQezbnTAS8QTidq",
  "key3": "5jsYjcPUM74zmJfHDC8wsgXntusAwA99rpvLyawr67aD3FEZPYortvuw1DvBSicfUKz5SLXgx4yKk8QVZxi4vWAC",
  "key4": "23Ngjc4VrQ7xfmwn4aGBqqqwtG7w2QHcEeBUfGGzKjMym8N1Qp5NBZWbwV6HW7kmvturFZpAvcbtrqWjUhVQ4Cvm",
  "key5": "4jrvmwyBye5rLydB1fJ33W2aD4LXqHZiV5wwTECMLDJWrB1Ycm67B2HeeHsK8n2SSPxqTsrZwdf4yi2Dq1dBpXEj",
  "key6": "2hnuWWGYbBug1eoC5QCWqiv7uhR4q3RFd6Wqpboamkat7CHjt1wRVb6FXAsTPHNqMXL3WD3iBH3W3RW5VSZyhXFe",
  "key7": "2Ye8BC7rELoWYShprqS6rBfVkRRpTCp3piEEVqupTJ3HeFzPZdp13c3fgbo3JP6v4NYmQwG1NtT9xTNcqcHe6pm1",
  "key8": "4Cm2uSabA7v7nWRYaepRkYPfL5WJvDuKLmTWxtBnKtHRn4YUxXFkDTL5jFWe8FgcgVxpsvSyW4SrykHKS7iQAGA3",
  "key9": "5mZZso87tiE63uTrr4oPFpYxHy5RAbPU1Ki1AixCmJWFxTj7WSyy8VeuvGpfzy3rB9yQ396aDQRYPsMJKoUcoV3g",
  "key10": "2MARTmvnocXLJ2d6r2vKmSUawmTJWp35NP51ZNXkyXrPWfUwVzyvqEASHwJdtZ5y9KUDfTFGwDoDetqMyribc3ga",
  "key11": "2vg3qLrHzAtaa91ZMQGq5NYhLvLqPQDRMK3Yk8rcbrguKFgXXgsuPaENxncM74b5DfM6Ce7cvYvGT1v7xmc78h22",
  "key12": "5UzPeS15DaUQ8K67sPpQXt7WCu2FAZfsZVUN4caQMa2HneA2LVbd9wGYUK5ghKRygXKCakYMV9qyZmoKSNWWWKkC",
  "key13": "4oVQrRYq5e86otEsD5DvhpYgCEnm1WmFrXL7oYiWjXiQnnq3MsmoFPZWZepQGaF6ZvYEKcA1VDAt9Mk7CfiGn1o2",
  "key14": "3YLPAG7oMwiGWCU8nyuLrVSDakaRjx9x3cBsZLNL4HzygseWzejMkiEe7JtRLTjFDNBAcSarW2fJbR4bjgKVUpwX",
  "key15": "5kshXsvfSrMbyQUJk8qa5mmJat2T8hgxQVLK6LajjKrHXQt29fvpbiYSg34V5XKXgzHzmczbKDMpCMD51dmd6E84",
  "key16": "JCHG2pR3PBgbmN9eAaXdZU51vrq1ziGLRUAg26D6VAzTJj2f5ajSGKjZCKb5f4pJzwiRLam2YSpLbEYmG7aK99J",
  "key17": "3LqomvFqLq5VPnvMLdCpFM9pWwFnQysy1StH7dTh7PWaHv1BK12uyyU3gLrD4jMqjTBe8gJAkXxGhmPgopF9xDo6",
  "key18": "eyEbrAnkUP7QCGdDkyLh4UBnkYpTNSzySFQWSBovc4ucv5Fjx35PeEr2yDrgPFFg1M78dvj61L9uL94jMiLPAJd",
  "key19": "RGPtatF2iCxCPn4UE7EGDTE7jiVLjmA2m31FDmSQf32NRgFF1SwZEY2hVMZbesVqKCTw2hYunuhE7WNn1QvFfDs",
  "key20": "44XpokRYansJHxKWnaWMAuPjEb9AghXQQxsexZpzDjM8bKJund8N4uDz9HDW2xfbb4DvbzbvWV8TVATmCtfZR4EW",
  "key21": "2cy9mSmd9Gjt5dyciNtVYKSCRAtzJ9YAwmtSiEb5XUDUmVKKUZBFc7qoCbJEecikQg3ZWyBZHtHQ6ymn61K7SQbf",
  "key22": "3mCqV6kBiMeDZhGdZXTx4sc8EThUmtL88qbEh74FLq8UQ9bLcNoXuWfKUGnsNihM9FU5G6QYShivAfQeaSw2B8JJ",
  "key23": "21gRhyaBHkqWfYbFv223p1DTZWB6BCgoCsx9XKZ4SJsGRwbQp1wr5MtG1DZWDNRW53se5LPFB74T4kMrx6yiAGRb",
  "key24": "2L5sG3gVctLeVBJw6dFD74nBgHNoeujJbsr994u19jsskMErf498KsunUAtgHsjMQJ6TX3Tt1uwY3hdktAismY3m",
  "key25": "4iu1rec6zFGd2TswRbzGZojy6Z9PvtyUxfJFWi3xBTZLB8gZSZfQxZosRG4m2uyTJpmQntUZEoa2LUe17R58Qjbj",
  "key26": "3Jp9WgFC8BgBQUYMB3JbrfbSYaN9ZZ1yCYFTHuXae34aPy4QZKGQfybh4zA2aoQNgNLDZyPVXg6p1t6c7Bt1wXCf",
  "key27": "X7GvU9yCqMAG3tXt9eekA1cah6hgpRBe67hb8HeSSCfqEPZrk9wCmxu8ugdtL1nxSS6YdVUM4Zu88V8Z4jFdoDr",
  "key28": "56auAWceY6qGdmr2LCRPWbmMUwnic3vmf4tQxtdhiMx3TSETiUe8NbTM4qaEAG39ri8nsKo38CxKvyHCk3bGJm79",
  "key29": "574sF53eSjJJ5HWm4EDuqxVrhsnz7JE2p3D4WS3fttAAURPETZdejh3G2dM2drSufFhuCD1mtVj4RvgcEADJFzMK",
  "key30": "2KysWWncjxZKGkYX73nKj6sDSiXovnDgSjLJzAotkeM8ifzHnKq7Zog7P4XcMzXeVymU4iqBaPZMw73gfJjC747D",
  "key31": "3QrvazELfsxU6HQ3BYRARJMznj8G94ULRmNzBvR5CGzP9oEBc8qBmxWASGHviDENCT7aGfr1uW1jZpRDpD5KSxZZ",
  "key32": "3mDsXuQEwnvRJm9bbYD9gTD7rbqvUXehg3S4oR4rX3darb8WM3ndHZYzPjk6wLSYUKMjf1TRPJswPLFH5WSdJj8L",
  "key33": "2vJbVksQSh17oWAmevRrte8SFTT4zpypcjM6Qd6t1JZ3uG2iWo5sxJ3M76gNbtDAuzzZUthkYZobtEJprmbMdrtN",
  "key34": "61CRpk8oNhRwAdvSVVjAGrU4fDCrL7C1GP2CXnvEPzCSXFRBbKyNVjhc2gz91wCUFQ7yaxuVxhm4f7UthuPjuQnn",
  "key35": "5W8PVPjnEsb6JnBdDEEhq3kp7TTQZ6Bxta5fsUETAWKR55jQFtg4MrDXTmjTNi3XLQdWw21boeU37KSDwMjeTcTh",
  "key36": "4ZtRDRwEQxN2sAWQ7ARgbVhqM49LrmkeTAM9E8jafc6XoW9CVnm1mcskcxkkhL6d95LuczSp5hbssXAvL6eoVAJe",
  "key37": "8hB23krfkJZv82jZBqmMfyBWPA45btViR8ENvp4Yu6auaQoKmpKjBBbJvR9qVVCfF5QT9aLTDCqJ2z6EM1icTzH",
  "key38": "3SkWHV2mirhdZF7fHtgogrqaUmr6Hqd6jfUN3jqwTEvV1Lne3YhpsCsiYAh7jjW2RttKMUeWjDMmEHxiBTPkdEgN",
  "key39": "JDfFoijrYvjexZnFXCpP2nbdaqmtUiu3bojrEwjqtYh9B9Cp3ACiWdvrL2Ax9YFSzu5akqR5B79iEXYgRxyMnHH"
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
