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
    "3m6zTrVsmaXVXUcozDKQQvnsenfYov1QBYCy75aM1bQccaYGaqUKZuzxX6rptVigLqRu5JJe8rUZ7xCaWy7jgUVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ehYXQ8n72rusYhcuv3CHGphoKDaZnPB1XaQPDQQBK5nS7gn6q4NUeiEJfGAp7Uvk2b6tBAnEkrTAfwa5xmycNTy",
  "key1": "4mUCXTUGjuXAEmXNkHtwL1JbUQuSMNDJaN3hikw4JhDVnq4fWnScx3dMPkwTMBd8Ee9VqYGmTrMUgPyeKA5nbGjG",
  "key2": "2vUdJLbBXSsESYv8Y6KPo3QXoPYaejtQNAFWfS2KMuUYGwetoNgboorr4hVVpKAiCzAE2wSa4q59SxjMqhsutsSQ",
  "key3": "2cRx48NJSgNTSFktfDYPQpXXrCbgejPGjhccJmWUwBYRzEiPYZ5cuRBQq5j1gJWfgJStu9hi1mjDjgMWZrjDYcvb",
  "key4": "3dEWswENAn2aFq4DGXNUc7gGmC8QdEft1qdYkr4za287nmedrmvQXBKfhxa6YDu7i1vtDAdnYq16KRicjXxV4gyL",
  "key5": "4JeLknunx71h5QVf7CxkwHK325FUgx6FkmtLwC2XmKJEoJm8Qrt9eJqKadStRXUsqSirmKraaa9XJbMQ463HSbRw",
  "key6": "SjoHJVdf5NBAQLfEfDsXLnVJyU4aVzrLkLMbPsd85Jzxb4h7eqtbWY6MeKpsHajEjjd5STUqTHkNJgoiG3nxVMC",
  "key7": "3FZ1Rha96LSVpgfnB6sRyL8M4aLY9wmp8PmzqNqvmzpCUTk5tvBY7bHCYuZQnQzkTr4M5oZ7wyPBKhitFS8AyjEj",
  "key8": "aq7cXDBg8cLLSGNZQLsHybdRc99oxMdmcANRkVurewRbyTVVVJJYprmfMZcVFypnikYFCcSVvqFbctGLUXLQrKq",
  "key9": "5tCR8pCbuhWY5KJ6njoKgmfKPEc4vNN1moW1MgfpPxeen4dk1xUNs2DWPCQ5HNgMDDdxa72SDA7XdSjKLniZV9nf",
  "key10": "yYhko2QmvFp2uWTtfzTQuKd68WyzDdK4hikE3iq6Wkty4nqxSteasVhTNpWGKrHExwhh1V53RY8N38K2kTMtGkR",
  "key11": "N4GoLnzgs5VtMcnBoJ2zT8qfYWP6sMuvgTupvCBh8ZDuMg64xQdguEHBuRK4bWBoSYHeijpYXecUYeULNBNSmBy",
  "key12": "4jT1tyHWaPKuRcJJxkmJAjYf82oK8ynR4MPpPnd6Fx1Xc459YHzoNguZqcwp21XTWmhsXgzvg55ggdZPAWiZHamH",
  "key13": "46rFXzbLiPKx6RU6Z8Su9nrtwbBYguL9DWKFvhLntYXH8W8yaXePVA2DmfTyyWSZ7Q8zUQ2dguThEXYwoBjzrmvU",
  "key14": "4K5qXGLEhjjZep62YeebCfQSVRcwjeXkL55YWtckEXjGSDqaho56Xv2Hwuz8a4sJuwuUodtzD1tHkmW5Qrmns7r7",
  "key15": "4oXCH4kDsru7pnLR6hkSJjpVRFy77z91JmvEhB3xZKVAA8Fe83s2XpU9tRfbRHLB92sYzyLAp5NLn3b7y5c5qYBb",
  "key16": "57ZE6osF1cBzFcpJSGStwqEaN2JacwupHkJrxNv4VyiqkQstN1uVC489SUUPbF8o5mQTJ1QoGSb7cAGTPhPtWget",
  "key17": "4UfDC6NYQveFr5gzvQAaLgQHBzBeyFkcxt6Gp2sEKGTrUpDFQ6rTCKa5parixLqz3oRC8pKcZUqeNR6WiE7WJ7xw",
  "key18": "5jSRmQSCc779dLh3JrmqaPZWW7Wwi24ZG2WEd66mvUgYsRZzRL9M3nmXK6JLYDMEkUZf8vEQHGvvAoBwZKcmb7jJ",
  "key19": "5bAv3JEmQJaYJYn9CkqdVh7qy5or3WgJMRjaqXnaSnmRN8ry2vE3Q4bLqQN7XozNWd5MSkaLhztGkMZBzxtcGE69",
  "key20": "46sNXAgbbLqnWsXhfZMupF83an8h6q3RvmV1Duy59qcSomySAPTfDvLk9V5JadbPcFbJ8nJzU9NGCyiQvfDnH5Lg",
  "key21": "2MoJqNwshQuLnupK11rCGeALCMxgY53tyFT8z6MMvk668GosAMiAE1T1eHKeHXgrhGyE6xMyq7nbVCXaotF6JcUV",
  "key22": "31oswmqoaHoRmPFFYogmNhHKX4qxx3Cjn3yEfZHigKe6bt7pAVE4vRMZdQonJdwW3HrjUm1o1tDZNe28eXqzcbAJ",
  "key23": "H8SUtymYEs6MMURLrsYsXpwGKfxvauukP5n1zZwmnpA83LLYQhhNed47LCSKbLbrUXrC7M9R3yMuEYwdqAcLLxW",
  "key24": "2xaW8qjecFwzFCPay7fSwCeqgrSpFqVqHnKskzuPjjwJw9e6UY15y8oHkVeSYTWog7BN2faZgeSVAv3Lf1QokaQm",
  "key25": "63kxSvfkucityELPMExFpFWqzrwMSmhMgarZc2aJvuN2ACKwzjhMuE7dZ7ygALVvLCcMyYBThELz7MCABjzUmbjy",
  "key26": "298HrL39NAAmremTx6EK5FdaVvpZp6gqM7TSB3TepDMbWpZ3FPTMCE2SJHFm2jU5N5czkqTFLUMFUsZXvPRTbxu7",
  "key27": "58FkUEB1GKRHSkiXnxsmQWhUpjQQrX4CS4AXrXJAD2hDVZ51jaCPW5qx9VLR9mcTEuvbhSRREf2qVAMtymTrPbmW",
  "key28": "5Aho6caugo8gW4t2LtPtc8eHPjcgr2HdswnGpwFkNNNDrWQvBCiEQbPTvmecv984hBu9rRJB5BH4aiSxRS6NZFQt",
  "key29": "5z2UaqCzmCruJM8GKGTPvKZwywbcVu2a26dyDD7eA5yy3jRTmHwyHpjA4Uzr5aEjDQ9SKA4DULWLWjJ4YN2b8kSC",
  "key30": "38bLmmKc13kek7Hhr2z2xEgQcp6kyU5HMS99yxsf27rweQvAYb74bzRZ5823nD49MN7tkCugujbSACf4edf9zWsE"
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
