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
    "3E6ukRNcmM3GFpZkhSkWfyqcJfiefRCZt9dAVkFDC34xxUYm7c4P55iWmnQ6TqffmzkbKkoy6kxwMs2BGiLwPoiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GM2oLV1mCA1rzmtZ6682J7Wfanb6noWE18mfao3MNqGvowfm7iLDYU7LpKJYcPRMZ3mPLAhKaZD1rTufqwLMfjQ",
  "key1": "4Xbqef6eNjEU54BxEmCyaQe9wbbUs8f99coeuPLwUJ9iPrHLNSxDPibY1M4MNXyTXtQLSACSTR7uhZ6AM7GoACMi",
  "key2": "ffqoZpA7xxZz4duHfy3nZyqS291DrXfo47mp7j7VzTsAdtqvX9q89mLPLePJrkWWqeH553QAJonfiVB6CDTUiUZ",
  "key3": "4kUEQgt27GjtWAFrPcChRL5eQeJQYMNNnSo3FzXP9N2tsf1QJy8t71HdetetRwEzPXoezhScksCMjLPtvESWa34E",
  "key4": "3mhkdck947vhpCmq3fSCJFEwu59oRkTfSu43nLg7A6zrGFa8uM97zRiW4VTnswZyFDb2JkmgzhAouGeVSyMdkxcj",
  "key5": "27Q7c83RzqQX7K4HZ1YVGYsxmeynifzHUyTr8sC9Vu2FYCga63SVh61Ukf7xBSpFT3VvjJbc5pW1x7HXV9tgaBsH",
  "key6": "42b64N2XK1oALnbZjpgQuobrGR3v2Dw6DGBuiYv2nTaDkGLaUQy7GAhNQTC3FqL99gMBd2by64ZKX6fiUHpzTZxY",
  "key7": "fUssaVmkMRP226qNokR7xD1HSyYuEGyujQx3FV8v2wkL9pWtRzhg6eEZQTjqDmbFzPzJeEFtMNEEfAWJk25pTNK",
  "key8": "4txnNwR1namRHq4qqRgmHqVsqriEEriLub8uCHS6i3MzevgmcSqAHFUnE4CJhcvzBu3jNwx15fPnawDweqHqTyGV",
  "key9": "428yFKPc3ZothugwduNQcr7WuBXNBmerVNfeds7naAzBTvNAK2E27GdpvP9PXQxrkfxxo4dBTAWGyMHeiTmWrkm2",
  "key10": "2jkzi1WJcCA5NnEz4bs9A6gXrBsFH1Knai8MptJ6kBnDLeVtVeyQXcsngBEoCaGxYBSBoL3UG9htWccwkYtwCYTe",
  "key11": "3TnL2Kh8wfZ6CmTLZUSQ2588cdPgoRBYJaLG2a4trNZtQYzL9e6bR9fnjaAkSMxWzus9QzLNVXwn7houWKGC3Txw",
  "key12": "3qrTWqRa4MJPobDXvD27Dxnso9nE374nEJ1qESyLo5xfh7kNzEzynuK2qV5tgeyzzgRKo6ZMe98auH9NxYXRkvpu",
  "key13": "HG5cyRzFHkG2HXdi4xMnes3Vei2kVmWwPTQ96zt2YkJMm5WQAexwBJfn6utzLtKkMrdKSJzY17DXAr84gTUgnmK",
  "key14": "5kLiqLks1R2BQEMYrYec9pZVpZLoznzaH9xmvKf7Ya8gFHR3LQfZJi3EMktuVxNmE3RGsBVBEdH9ZohUcXtvuUqM",
  "key15": "42Vjme5xGnbwuRrSzoKXxc9uPgc6skBf95qnu5BCEuYhXBJCLwJPD7Yn7GU68uVgQpSCaUM4b4RUUqez1hJHqu63",
  "key16": "34yxhwHdM2CDHHM7QPAT4WdAb4ccDxg9r9hkeo1quGNNWLksYR6WDdXjCQKXaZgzFimhtXKttPKzn4TTrrvTaWdZ",
  "key17": "2ts5Tg5rcqUkV4YXmthKm6yw3Lu4rNkrVNbaywH3QJEixZFamQDTTFnccjdVVFEuf28vfWHmkmLYSqK8XLWrZ2mG",
  "key18": "4ynoPEFLxYfnoGECEFt8enuoqqTU2D2FktZUMGqgnVBuqQRZVdrGKRQDuS4kQ2HWTb5qSaEyRSCHTBEKkNu9y4nB",
  "key19": "x9hjadetaYfeD5YPa3zCa5uTqHvgr9pmA7Yut7dpZS4wDr3rR37JEq6jsLdWp8QS8bw3H3qHoWpHGQdbcouWtgs",
  "key20": "NwsfidMw2Qaybh2XdKNoQZpsDWSDPtLXmv8XabUuvwgJLLmrt8c5ojKhy9G6mqSRJrRQrfVBe6MeymvP2jMoRJH",
  "key21": "5dVnK7k46ZRQxNj7zA6vTQXwu5XEJRmxn7C9JQNQYacrFBx1R4t76T1H6WkSHj87fMUF8DWCvDRWJzVE6SUyDdE8",
  "key22": "5b8oNHJQX2u7hH3LAUN9SquZwJXZRMUuW2BMmHU8RvHsYAGqTQp2wPqcQYYKWjQQwiDccrgHNzJ8CDwemgtYPvWp",
  "key23": "5EbofhtcLjP5np7TRaU5gtr3pJtUrqtpC7Z2o7wNCd4h5J2AJkCsxyhP8qmzjxmfh4Exrxc1vtux9drN42XKfytY",
  "key24": "37PyWjvRDfgK9GFMvnQeqoo3rqFUbUxprvo5SW1nMX9QsT3RnQG6EXKUo1LDuHsPcEgugwHFnW541NrFrQ5xWq4P",
  "key25": "kpS5WTVSdqig1rg6BmifeLdHnjctUhXRMUqHv2Mj8FEnnA8aZcbibaztiZMb1viaEd4CwEoWz4mBkbwGpvoNNy1",
  "key26": "HYvDZ9HHZ6PQsxXxTQ18pq9mzkzjPRJPnfLX5VYXjeYVXDEHL1DpYpMMTp35F33aW4hDVzuW7Wfzg11GJTivnGc"
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
