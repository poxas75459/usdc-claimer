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
    "1HqYfrb6ewKT7xqU9oyLinTF39eMaYqKn7fcica37UwkeephWvJAm37vcNeKVwB9A8WQVjentvJK8stQSUjck4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h4xmP9DhhQgSbApL7VbawaK35JjZiqZgU3RLPrDuTvooGvfK22diazsynPJ4JoFJz64cRhUNknz36AL5ke4jBGU",
  "key1": "pD1KNaHpRPAHuqpsLtegkCbuZxjN1Rdi4D3VFURvcosEms2FroJAwkC84AeVq8BX5TfJMWn4NirFScmXpq5hYrp",
  "key2": "imVhAAxUVWUQMHfRMEq2ZuZ89gx5gVcTn9nkn8jMTsGE1xCizvgi7c92CPNzBzJFqwB3kykw4Go7RwF4Z3fd2Xs",
  "key3": "3KNLoc7tTgaefYymPZpqnv5KBuWqhic6AVFhvUHzByJV2hHAg7bhnhLWaa5BbeZyGaMcDz7zXHXSbzfHCpJYCFVC",
  "key4": "3foBrhpb8qxWtPS72TN4q3mWUYp5JZTjoP7ns3aDQaPFfKnwhJeVTz7Z1ath6pQbm3zkE6CNAKS4GHj9tZpoAFBh",
  "key5": "4KeX8Ks4ApdnturPvyvZe89Sgyx3SmwdEXj7Ma69bGAKfcvzArJFDksBaX2zHtFJ1y86MF7xFr2pkAaYAyYAXGNJ",
  "key6": "35nRn5T8nQ27ekm8uwKLCrz4vKgJDzFd6UrtdiUMQQpefQd2CgSZJLLnjJwCKh23fG39q6MDhD2bVjowpYi41Nuu",
  "key7": "3TVfqTNN1KYA4viLP3A3Z8X6BYqUUirTgcpQ68Dtp2E1EeG4MdjdaPY1Yk2p2AgvTu374fNSLCqL6bSQK1v8V9x2",
  "key8": "2nUF4XynMdD8RDcG34pttaMJf28ePJwjggwP6fVURtjxTb1x3R3jdaeai5BCyPf2ZcNpsyBfipxgMQr3rE8A88N9",
  "key9": "3zevro6q3AZrHgxjQF2vpELnZxbcVbfEs6k3ix9oCZp3ZgHKzzRnstDjf5YnpCErtz7uSnTRW3XCgjeYtZkdT9gE",
  "key10": "5mRT9ekJBSYrYCDjRFwjaqpEpNzd2yurrWdfB9VDFnJE2CH1MPdZ2twcNTusZmpzzTQvS1PVez3GY1qQJTGJD3uh",
  "key11": "1bFoTtAVkyh8EqTTvRvbPTm4q9cMG7QiW6LXKqNYfGJY3soRntWbf4wvu8956LnLzbsfbxSh7zqDYSFuSDuT7pu",
  "key12": "2tnpsMF2hiddfH8dTf8DfAVTDxZZ5Pkv1sxCYhL8CKWYpCi1kH7G9bLH5ouKFZ7Y8GkHxseFiZYUqAXNAHfFGvy3",
  "key13": "33UwWyvpsGn8K3UiGoFb5kaNXD4pSCj2GhnkewQWkz5DwkxjnTj7jzWoZXj12g53ZMuaUcyVBfyzBdio2GNvNHAa",
  "key14": "54uDowqo5zCDyM9jNzzeaFf83Bk4cWUWpy7p2BATdAdp7y4VJJRceYh4RcQ5sedfwZ5M1BvpGHbzJ1CQbwd3mv6t",
  "key15": "WvVA7cxCyGHC673kf7idciDUB2yy1BugtLYBmuAxMmhfpKpBskCUAiUojmyNrVtWjThMJBsuG7wEycM23xjhQD8",
  "key16": "4rJeUrgNJ99f8CAFff7U6ey3ZJXUWQ7S7xxpCjq6SdK8mhWKfAJXnjiREsm4PTt2XmF3wCNshfgJqLSADreS7T5W",
  "key17": "5DhC65n73WWqcsW3HS2tuqpLy9vDivSLMvbxvpHYJZqwLLy9pqgFgdT7DdVJDFqFrmK2nEbntoJSeRrieeX3dofn",
  "key18": "4hrJg19beoBpaieGzV54YpAMaPYEk5MrVh4LC5zpv9jNU855kM8EqtjqNt2NUsyFJy7Akz3GTcdPRQXjSVN9yaak",
  "key19": "HV2m8BFa7W6BaF4A7VHD7JGCf4tBk3kwMuJWMsvyBUosPucHmH7vLBrGiBssHD5iaoxyJAAfAJqcYKxvRbBt1ak",
  "key20": "33JX1CeEqJgn7kysYgZS6nMZkpYfHCwyR265rSqYWT2SR5TSrGHkb9rVsBeHrZK19PkcmVygjQ17Cedybdx8uqFU",
  "key21": "2gwfm1as6mrVdfUD5QngPBjQfPJUvpM45JKMnntoAzUWuxE8ZMWV7Z7CqiowwH9qRnJ5yaRrauA8QypYxiFBCnKe",
  "key22": "5dqWv3xQzbGH1iQfRnoAwyk4Qr141CmAMWND693JjhMuz3sh8jUqpP1B4MoaTJq9FRtQMCiXGGdPepQswn6q3dAN",
  "key23": "XPHX5r4hx4AUdkekAo5qFK8eFJzvCwEioZskhwv7ShibSWM8NErYyQzG2WX9qKzQR4CZxnDxsFcLFLB9BS1BzVM",
  "key24": "4o3EGjxxNAHpQD5A974UAnU72TsQMUEiQGwX37Paokk4DQ1EuAacv67aG5xaj2K9qiesCXu1pDyyRt8CVY372XR5",
  "key25": "5iDM8YDe87AZsRhh8qtK8Cj26gU8A2au6riNAthse3AzyjMEULGyZySN5SXRiSt5AhgmwDQQk4cFSdn1tdr3zkCV",
  "key26": "5HxCrATnmefmHtZrXm8vtvxxVLUd3prdz5PFSpG7wTZ4VS3FX5GzznDgcTpCv3Av81ASJoG6z42m1NnzVMAHf4HJ",
  "key27": "qCqAqFbm9U73PEfvMSkVsYj6UkPjn9F9DJmnSUiFy8cLtQQWwHvnLHH9zHWeV4FcB3NeG8ETeLNu4q8QZiLfb8Z",
  "key28": "5MbWyQiwzAPE5jdrDM78beZxRBLKU5DTr4DM9amirbo2FGaZKyoemVnXnxWjxj2792DvqrJGVDewVScXe43AygrR",
  "key29": "4mPh3to5UHzpE9gco1LbYokAzoDq8kjH5JbNdDQJwRXdXKp642XSbmBNSQLuk16zeQqSKJE5MCT1JNa28A2crvD8",
  "key30": "nErwyec6MWwm351mZSjY4YVH7ihAxiZ218XCUQYTJ3MV4E1RhoRzjtovn3eZevjPoGgermb5LTbfNYraMhXjVbe",
  "key31": "5ySwTWtYBckHwu3PjZKXfcEze1XCYQYM6hHhG9fEWmPq1NqswQfBbY1oMqHrS2kNpjASvBnmB4dacH1aqYfT6cYq",
  "key32": "566Q6XutaDBhSZjXyyxhynAW8sbRbTeM3TD84hoJeSfWWYYgHbwuQ4Q549FXz8MmyzNUoZmWSfWGTp9KesNTxyCe",
  "key33": "4DTjuHDBTKocnFAhwgvix9a6fKfArxAB7nMxsubwiNRrphcx3Nvfi43jQPSXcLRPQjb5RXCXBCpUfZiCbWifw5Dv",
  "key34": "9pViKtG2TFGqep2kS7jZsF4THtriBX3Wq2xW4E5gY41SLdY61Us2YngJdsjJQwBZWtXTtw8iF75PcH9kt16LCnV"
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
