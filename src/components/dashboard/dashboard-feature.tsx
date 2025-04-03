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
    "55Nej6uxvQwCTQ372G8KPoisD3W2tzSPSxGtrCb4KagsRPPTbrERBAvkt4i29StzvKnnCSdmZdmpeiw5rx4VT6gS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sQEcZNAkBmE8FjSpyzy9Q1SWLjskHVuHSi8Urb6STGTM9A48KVRZCNGWjHMcyGvrsQ2nqkEopJ1qTw29GGrZgyw",
  "key1": "67c7tq8wMacNCo5ji8HFydUxWjG6UeJCLPfHYWo24i2BaHfG4B9DyuTtxzTBYQEhnUTNXk3ebce4fbVNzWJ8zbfC",
  "key2": "5TESviYaoEtWwofmm1c54crd2GHejTzAuDsAwjPnkEH1SmTBjaDUKQG3PpnNmpS8b8JCkq5kRzKnwBcuEAKCgvMb",
  "key3": "5B6vJCjcrVWx1Fm4C5BN7cRNtZu1Dq7bpVRNt3Z429CqkpwXFJfyQVQNKz4fKdFqt47hdDs5tEp2H1r62dLMdU9y",
  "key4": "mgyum6bS2yYt7u1mo8cuUuwqeULVFUKyjb4qsFgV8SN8RZWVE4Quuk5SA8jXyZeuSqV7AhrxXaV8GFTofkukBxs",
  "key5": "2oWe78hyEqqafd8qTQRT25Kgphx3vr6VBHdDzjWeeQJNdWpsssqmxuoqCHDUucKBCqavuWxbaP4ve6sw1VyPJUC5",
  "key6": "3SJ97ccHSf1vU8bC5fmagXbPxZDqzZukua65TvDRjBfkAAqmfRtV8XLz7bykBMUP3cVm4RD8g2SbyNJTKzJe389j",
  "key7": "4MnuVmnDBg8Njpz3kjboDAu4Faz5dFatq2pCnaHiow54SifASaXZRcnD5GaWbZbHpj2Mt13fiKS8dA5W2XQLw6pP",
  "key8": "4kqmTHvsiWJ9LTP1X266NYTPUSW4bmgBpLR9VTkHuPCv9AheC9D9XnYCxsDyLhg43FoFd28bYDzNhprcq6uQi4W7",
  "key9": "2bUiKfwoUdBzcuaD61Ufjf5Bstn7oiXNsnBtYGrZvkhAphH1SGB5xP9FbUUXdtdhCcjLVtKeht7UEFnjPnW3Q9ra",
  "key10": "2RRgwF9a96WhSWFetamurTe8BKbQj7pJnisBizMQvp1WVyDYGuHZ9RqwCSkLAGzcWbgDTqNctPyoHA19aQkjGcNP",
  "key11": "YifbCpsyayQYuhKn9vT2AqW3yzmE1tiotro8GiU2FRCbauYWAKGMkrNVF6ezTLy4t7FvuAmcU9xVGY2nuwTrCS6",
  "key12": "3nWb4VEmwMtijtTcGKv4RuWCsFi82x62X4wex9FFQcgbycXmY6DWbtJYMH5YZirBQtBJEKSy3LCbrohXh6N7oEBa",
  "key13": "94Tw3dHCmpbMbxPj8W9PgEY1hFbs2vnV33NvxQMZPswVgWLtAxM7KpMeqRohy5jXafE5wP2Mpin4629EuHJYwiV",
  "key14": "2QKFEZPFPSj1GgkCezTjKx8uLBUKi5UxLUx9txBHLDzeAtD2Agx4KEPN6LoBPXoFC1no384oDRPaZd2axPHgVMCc",
  "key15": "23PxNeS3Uzy8gGtp9LPTfHtKyVPjVZEawkR5dq9ZHzi2wexh5sQ4W9y8bSPboBtBKk59k85AiyN4Y8ZZAiSadwQN",
  "key16": "2ZjJH2PUMSkV7xyHCwnmQdusrE4Bpo55GXhJu3FTLopHYfg9kiXjGHpoFgTC78k3mz3o4QqT5HuEQzKoYxV9AiAW",
  "key17": "BpwQsUZbPowmrSqxFQSFxivDRgminTVrUhvtW4hUiYcpftWyQmK2BTcpS6BB2LPBCYB2Nk5kfhuDrtvMxhUpx6T",
  "key18": "3J5zYG1fQp3BiRYLGLtVfJAHq3mTmfJDpcetLgodRHcie2eahsWqpw5piE6GCToyo8i7QBGnzDQNvVRTouJbpmUD",
  "key19": "4GqcDBMv2ynHkYVEZUH39JXYY8kHmYM17NkZ4BYTdusyiGGH3BJ7a9dRAHiVarmcUhMcetRnErKy7j9Qr9oyTH7e",
  "key20": "3Sd67YgLaWDSrqXkqPqCWp3euKeVhkqi77CFv9g6E4Z1NSMKGR6GdBeATsXBugtHMxgWi6u7Aq5Fk4ZHhXrWvPyv",
  "key21": "2SUAdLvySqmjN1BBMK8Crc52Fp5HdxPHMRVFvXLric6onvs5mfQ74Mh1zPdDfo4bsp4Yus38Cku21q2uT5vpVRWK",
  "key22": "4wD5kVyS2Njfur5efcDmgPQMzwU6FVBqcWHqrNLMEC8Z4REGokAmtxhitmpTGawBBvM11VMWnyXGeBK5BfSgTe54",
  "key23": "2YrQ751xE8G8F1KpX9RCnhsog6Qow1PZ5rFkGtaVfVuD5CcnJ29CXao9b4KQtcwak7gtsP5LM9qbGsHyqaihY4Dv",
  "key24": "5EpdC9jtr6q868d7P26mzGfR4YGrqxtQ2zfnG9HB7hF2cdHmjmuhN5ay2YmD5FMnGhrn91A4bXuJAki4va5sg1jF",
  "key25": "5WeuYSEHfsd1PnyhP8o2n3yPp3bnz55U1d4UvKg9hTJYF8MGHGz79Q6xD4Cp531TsLBhGa17PpQMGzW3C6f3pvzV",
  "key26": "3kzjhgSmbdnexSwEJqsTtTNC2HPJWXHPAf7eW9NvJQXwgFJ7pgZqizwDRJDUERXUp3MugWX1VTujnrP6DsxTTYbZ",
  "key27": "5X9WBJ2U2H7jecX4t4yNuFF9U7mwxJUWCSahFgAKWk6kiUPHgABkSV7ummSmvgnhr9ysx5mJXYuWYDbKzpgSEv86",
  "key28": "4yruoah1iwNSV5hef2M478TcKc7gvTeJSRnE9a3Y9qFFVajz873GaBpWvVT7fwEKGt3AXYPXjG1DWNTjCzL2hiGy",
  "key29": "5PukxBsgsbyVCgWC7FTnU91GtjeqLwcHynDtXvGjBy9noJqshT8XwoU9g9wKxHGyiixN31W65G4auoBA8TQGNN8Y",
  "key30": "5KLKJWM1USofvaaApHRYmaJ7WmX8MpCdJu2MjKSzGX5HzeToyeriRMxwwPjJYSvGN9Tm2so51yUBjQrP2AcUv8Uq",
  "key31": "4aPETkG1aYoVhLM3KAaEBhbLvPG1E4fMHZawR4br4FJ1ahrwUVs3vRuaMQ1XJjXBdtZfzkPv8dEXNEn2s3NNMcpL",
  "key32": "2ChJatmWN2JgbqNMjFr9YhfwDhgjiEbCRJ7Kyqxx3TqCR1TJYaC6Km1aEkQUzEaBRYCNJJdJwzgcfoaAcYnj4aFC"
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
