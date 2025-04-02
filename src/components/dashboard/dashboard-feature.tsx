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
    "iRus7pAfuWbM5cCe6u3xYhts2hTojqAbxYcqjkpqLMsoTSTXrGLjrQ29gU5MLSe7duUXA1Th5mHhQzRMi2YAoyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YopeVsAuDUchPphZuqeam1YoXDTkRY9NuseScV5wNr2W681nazFiXC89ykMBSiisHstD8N25KWktrPBCZw2ZMoq",
  "key1": "53tm2oEz8aXABt1J4kUSdvnW6NKC1FzXawsyb5Ce2okVeYTyZB7SmWFZqX3SJ1N1CEVmEpbXETiDyZFAv7BtPa9c",
  "key2": "2DpEvMY5ETj9rd6CuHziqn4Lh3fPsghrr7CV3gdpXXt7gf4T98cr6ejVKdpJjdR9edc9rdsA6z3wZQyUBp58mvDw",
  "key3": "4DEiVeTGMB2RofKPqjgE8qxxikYWwUoXYdq8EEfFjM2KEaPnUDrgGGc9S1xENDBjg35nG6KdvyMuUC6HsnYVGW74",
  "key4": "3q9wHitSdf5VpetkdkeCuhdM3YqpU3S82B4GfvmUkj431Lodw5pKYHoQGVcrFuRk2buGUJ2poRBLpyGXv6vJthRe",
  "key5": "48LephyZQ5uFM1mnXL3ZhhJyfBpCeT5C62EmRQDsKzdEKH4c7FGzJMprwzDRj52fJfQ4LEFqxCAHoxt3cmLxiY42",
  "key6": "2s8isKRWiW4h6P1zqnvYZZHZ1gmrT1L7fsPADjjxWZd4gEZK5oYbGmahgoJaELn34tXiAvtGZ3GbPC9vKQgc8n4G",
  "key7": "24QMYWwkfVQyDNxCANam1ogC9RrVZy8M7EzjvYwvHaeqQXt2Sm5RDatq5APMnYoTpXkDjMehf3DVpShP8SFi9QZS",
  "key8": "4rEGF3YkctcmnCJwA8tNLbqNNs687iPU3r3hnurVtB4PPL5j578LyPegXamv7yoW42w3c311badwBSvkNi4HGACF",
  "key9": "5EQ8sBmAMdYDsFZh57hbBpcDspZocPmiBTmu8BDKYXUcEnjzVj42o42LUfqnyj1WSpRCcprGXnwtp62kdtsWu18F",
  "key10": "F4hy7CyBVsNTZDazNq23hMgNjsggatCuFwiVfkW3XuYWvgFtwwDPSktE1PaAh1wSAYy3MKQk8wFJwNBiWHrMpLY",
  "key11": "5AMRsDqMwVZMHGy4A5PYbGeuR1PkZ6WTi8yp6CBHra7A8st4QJdCRG2yLHnMktmaXPThVikU38TyiM7TpAGx49Sx",
  "key12": "3RVmf7tJ34AuAqUsCJNKTuY9TSeveB3H8KkKAkGY3pejTdQK1oDqfbZjMGvEYubEZfXKJCBBPXiJZzHr4Ui6m8qY",
  "key13": "59g9xoUZw7ZPYBqsbxSHJuqQNS5DSw7aqCpxKmG6SejjjJULbavemgv6R1icK2mWVymbACtwfm3vSXDbUkAAdie5",
  "key14": "4Ln6CS6KnPg1BFaHd8uGucpptmPVHWBnuSC1WJSXs52uFNNqi59KBenutWaeDqPAkaPS3YEQafD2BUuTZ9XvPfxu",
  "key15": "2sd8swXEZxzKw5EgeFWbeawJbuRb9yVw7oMZV8ETmNF7gtfrH241qT9joFjfQf5RfHcnowip27bAD2EEfEaVAeL5",
  "key16": "5zTTRrYoAyaaBVq63KTv6pzmdWV2bLcmbUxjP4ZGTxZc6NH4SF8DT25GMpy75wQ2W5utbuZQgh4MRvHTzSRpiLRJ",
  "key17": "2YCDccLkKNtxUHWdvjYxhERhSge7gpeWx5r9HDBmE72ccKCy8Lmq5V5Mka8yNaug5Zri9LSjdemRSdhDugbmQv9S",
  "key18": "4SQ137DhRkAikjkvZNxRzPCS8cKR1dWG8Sh8uhC2i9Lrxe4C3ttGw9ttwW8avmvqrcdsqWXEo6DoDpxsoaaUYZcx",
  "key19": "dVtar7GtDz9BRnC5d1r9cWfZZtLvrEsMic7SW6pvSGhzE7z9vAxEMhAQ5YNYe49gxpvdumAJD6cEQnCqwq9cHH6",
  "key20": "NyY2ChFZ1Mq2YGscS1rym1SG3AQtQp8m6N3uzsMBXppRTXmCoNjHtPZBfEfFePPbBtGQyxvwUEAq7uA3TkyVEU8",
  "key21": "4W54FFwb4dths4UeMF8KgAkuaB7B3PDaEMDPLg3wndWzcibP3qH5JRsxFnruTRfvM9tKVJ5seB7aM8jNxrUv9Yfy",
  "key22": "4U1RoMxgVF8maCTuCy2EH7qjQmTDiXJVzjq9MN16BffgKZL6uKQTF2DWhihuCVPz4UyQiX9ZHyR8zYKKGqCh9ufV",
  "key23": "5dRux5PLZE3k1PkbRt1pSERsRaWMxVAmp78faKrun144sPeXrn9EPgbQZ8CYvpoVj8ucx8AEeDVaEo2uwMwvXYCb",
  "key24": "SwVxsRzoiT6hiU2JbauWNTfXSjL1WLZAKioksAqLe67fmsWYrVofLUUEVRKfMsGicN2mv9xXyw9nBF86nWq2oCx",
  "key25": "2fMmqff65mNL2mBYUvcafUwEvSs46NGms7n7ycywAbBHrHJ3hgVwNah25oN6qcLxMryUGi7Q8KPJ3EqfdhbLkZa6",
  "key26": "ZgdqMQ1dqEPekrjtUVh31DGbVYZzZhVwofxrhMNkef1RbYcbDQtrTgZcGrQVyDHu4xXnS5HHeoPJydKS1uUAb2x",
  "key27": "2N3eVASAGgPxvuxsKWzLot4v7iSL8Pg7YQSp9Z6QhF94xoD1jbnRqiSHWPKgT6yfjDiv6eNGYdnqmtFS1xR3fhE3",
  "key28": "3Rs9viwkKCsezE3BRwKh7DEeij7R2RZ7tF2RMaC2F46LxDrGpWgo5QxhRsqsg9r3asbpRMy1xEBPrGAQrNW3TvGR"
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
