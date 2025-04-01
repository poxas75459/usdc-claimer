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
    "4W8AFgyPJMiH9A6kz9ApNab6ZmR4SKFMQaSunX25DsUSjmF1b2FfRM6CvgHCpLAKnYyDSe158PsrF6dwEmdzmRWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LP4VGyk2gohbLeKvNuyamZCpe7jKb8fncKf22tFrfNooit4kNUp93En8V5WPYNHi369wrguaeGzPmvEBSQxEJAb",
  "key1": "2Xzrcy4zLW3mxoBooT46iZxHK7KGUEmqFrV2W9CtShD13UmDMc51h4s5LBqVgiKrr3FWEdYmmhT8FGT2ji3cR3ZQ",
  "key2": "3stANoCkGePdoYRn2ZuK1Trrs6HHAD58JQ6KHLfCcJimtFKnQerbkGoxtcWHwwFuGJzqw2jHWTfjxp3ji3ugiF3U",
  "key3": "5EcVj8z1WxSG8zdMVwnjjPyMxQTQ7Gt31tSCRDrNx7azekA2LYnZtUwAmwqpmsBfroX4KUubMnzTt1be7gA9wYRw",
  "key4": "2agQSu2YRjNrw1txJWwQLiAXArSH79XdBVUR2fS1dKXVMY8cPEPj761SM1EKWE59zMJyjiGYHgDEgucusWypsTPr",
  "key5": "3QKFL3PkVyAXtooxkCUYXie8L3vjLQYUKrgjJzoi27aUUvZhPRbUtiMiCEFfgWQFkA9Z5wBei1ofWEXvj4gkToqV",
  "key6": "4kFrRmcGGEZvKL1qdwjwMWGjsn2yRKvrC1J949Uudce4pPyW5vJAuwgZ2qjiPUjsoYG8u3Dya2fUUPWjnPPLnoTt",
  "key7": "484QUqkMoeq9hWnhnzWAFbMAgmx2TFRDvdzMkYTCxpvcUGMxzJJgE3EDhBSzXqQgQMMbyo3j1M3cWQvPK645PTyU",
  "key8": "3H2SqRvxxQ9aA5xc2RfXYzYaWEaWypFqmEgAtydKopdtNYy6pTxEbzdH8nFnyPzXVgJHRqLox3xEpCna61ZYRKmZ",
  "key9": "5yM5ftfbzpw6DBy55ajBRRmPNVsFtve7gjdaeuZ7Z6fZxN6mbWqQBtC57iEFzvWd2t3SaDGtabePFVeo7hp9Xkcb",
  "key10": "3KCPZvwSzQ58eXnGxRJYtoh5s2zhmA8PMu1SMy9e4aAgbhbRkWApDpws1HrxKD6uzUjPXLxqzdQKKowcr3QULU97",
  "key11": "2Gn7CzAdLRWdqBrgUWtyZzTFwbAuKqQXBwpHprJmowimY16vzyA5RG4eXLWsTcPJMvqeTZnvMNu6HQ7rBWavfNZT",
  "key12": "5sVfcPsys8Q4rEh9cPRk33cNvEsQ8grsND19cE4hZfHBAvoGif6F9iPBVcoU3CRYqjLEJR9GXFg6PV6G5ZWUWgcu",
  "key13": "oi4XzwN5gp3QTN1T4gY6CxXAepsZAp9BjGCtpvRWHMCzC6Ec1iL6ed2zobNgrpZefxQtttRsYEHQ2KVfRmvULnb",
  "key14": "5xUg6ZGrZAoxJZkQw1NSb9Rxq9eFoHsN9XBkKLvSr4CdzMvj5yYVpzpmEueDFUqf315h46updhe9nEELD3ZgBPPt",
  "key15": "2Er5QZBVZmH4pdGzNhEm6kAT2TkYrwqAYo1zDCqHcVTtjUf956weHhqxFPUf4KuVkoQrEVEyXvHq83eBmkqam3yp",
  "key16": "4Kx45LC1tuqsNtVdohJMqzVVjyGa1hXAfkKJmJ7PttRAQWtgkJd9fxxRkaGzRKHKjzxxpKWZPC2GJUuTZmxBmNZR",
  "key17": "3croD63KajaDXbHi98EPiHSb222MvdWFD1uUzJCT39QaiMnwkuukGZMm3hmQx8P2ZsCSwkZyvrj2BkTdLWNDjmy7",
  "key18": "4aBvU4Csy41tsf6X3r1f27BwAWnmkW2px8wqSapUBqTxwFwCLESSrt1hJQSE3N9SoY5fSW1wvXPUQNaGJKd1Vipo",
  "key19": "31UZbmmiqCx7SNevLrEwRTsoz1YZsDKoUMefL7jeRZx8EzP3ZGDcKao46hqvBxoxt4CEAV5HudrdE2sVwb9P2cAY",
  "key20": "KQ6QmLsZptS1E3GSj7SABZbVZQVMCqHbpAHyefQWKeZ25ZkrUzTTBjApWp4axTbwRtc4KN9S9p1ZBS3567qPLd1",
  "key21": "45KF7UbW13CRCgQETEbBYWZB43QnYghBjeiHhjW4Ef3uCdDyNCxSwEtvpeomUhHHi6x6ndVJgxjwHqbmaj6s8dZZ",
  "key22": "3WHktUVSZvCB8gKE6n7nSdvBnNscbnkybXvohbwBEi9p2cHq3SUFFPTSaVAU6XUoMkT4HyvLVAjGAVPhrfZkHs62",
  "key23": "UCimu4nHEmsRZshKFmh6JFxhvMxuSmrEEjgq8MWKdGtYjmjvkEWbCtoGhYXMRsRXC57FDi46Qno56SqZLyo3JjB",
  "key24": "5C8gxB9FbhpxisZXw6Mo9TGuttph6JyWwq7ZgdNEdziK7JwQXdmz5EJ8fAHYjWxTEKJ46YWUFqTaeBjxp5YtUfu3",
  "key25": "npAiCRc6JzLEHVVf59owzFpCL9r7hjnhL5Q1XxmoedQmcncHbpKS16u8LGwNhgWLAFwgesbgG75GSUsHWM34LGz",
  "key26": "2ZRryn6jmVZWCqDCSj3xU8wXZ2KnhRV48J4SuKNiGYDAd7AUcqKCikhfCVUVejgTaY5DHbL3VcT1ttZQ1DW8Uvi4",
  "key27": "5ooprs8goqjj5Evyz7Z3K7QEvKWf25AU8hQN5MQwcmN1LhJj76fVU6MGLTSHhfEgyVMUFfFEZ8397hxohnidby5X",
  "key28": "3CWonC44rb7vGmxvLo5M5JkGo1D4u3SX7C8n5pq3kRva1smHnhkymMFpEYkPSWW1bGduo1fXbfqnkpM21X65MXQE",
  "key29": "3wcSYTRkbjgYB8K8qXojKiu45Y1Zmp138Gx2aLNpRoNHbsT94yaU2rZGZVajoGiTz8E7Txk73wraPEbxq9aTGGbn",
  "key30": "uEQDsdX5DXKMhTWh1y9U4hSFnhbZ31WnfUtGbqyZv3cfiwyAdU22K2AHb5uQjt8VeTT7ftHM6jiR9xyYpLKvztW",
  "key31": "2LHkFPCHuxQLdCKeNByG9RcFWnCrcLpmYWaBUmzUfR5fJh827UNT8yZs1rAKTNodxfsrRcW2fo2bATbmTKAaGNDk",
  "key32": "66deVoBwDncYZNUnmGRN2jBA4hg9d1bFmXcXZ5kv91CVyWgvj69hbuz5kFB1bddnTk7gjABzHXwZ2AJok5Mghxe3"
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
