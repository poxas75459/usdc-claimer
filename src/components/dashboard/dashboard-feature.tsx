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
    "2dLuAwVdGE46trvwpGQ9oocUYuZ5s6BQ6Ear89ueH5DArHCFaGbmCQY9oRBubgYWnh9p9SbUCo1EtKb2UPehE2Zx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "peh9bUhLzgKPyGjwztzT7M7oWJgAV4XqVNqgTt56H5G8Zm8g2U5yNShqBz8XTYGjb2avVyKQLjxhw26DW4aNETb",
  "key1": "4CUTMnw4fSH8JHsmd8AeMin8w6GZLFkxiGVjGSny7poZRUuPy1WVVjQM8EMjC7G9U7NcCRZzaNWN6C8LYZouh2ej",
  "key2": "3A2gdawEw6kryc7rnmhoKbCLasJW2npCBDRT7C98PBWoncDbnkno7HSPvi84MCJL1RNB1cTv8i4eQTbRedRKfovs",
  "key3": "iRsCmoPWvAY37yR6ybYjsH8X7pYkANCSvbsJ9Z5d3d93TVcUEyypMyhXasfmNRpgN9p5rDGSZbMtNF7QbtYLCMu",
  "key4": "45ACQPL3mJrzsqkd8KaHukxTknzMKjFxPeMAWsKteQUZAgpUeYw5LhityPLd6ZFVwsxkCLqUcct6FgVv4QbGoi6M",
  "key5": "2fWAUrBFPuUCaqepUtsnyD7uLd8f3b1djXwyKYyi8Qo5yNmHVo1ZyW17syyrFvBcWQUVzMGuKf5xi8AXwtrwKpDP",
  "key6": "2zzgg5K7aU9aaJu3eZj625AE54HxkW7GEAHrHVt6u2uSYrKwvfqTXNhUtL5UgLGQW59cdgs9pQd83UkiNqUEwzvM",
  "key7": "3SahjFpLhJ9tEJG134iQUy4PMchXGeqWAijRn2dg8EXMyBLYnE5r9GLBaH4fB4aq2PQTF5J1Et6ZRDnRsEMDTkY7",
  "key8": "5j4TzWUjhPFixU1ECBPEoQKu1zGecJE3fCXW3FpYGu2sdFG3yMDVWndhHQ2bAs7dnC3jiQyYaZTSBD37um5Dm94U",
  "key9": "5s6BVqYeWoiy7RvtDBqYgAG39AsTscXMsKvE7vTu4Xb5KmGFs6eGWkMB1TqWBk6ZWhrWYznawQovSWja7mXddayv",
  "key10": "Nm3vPwS7uCgF9i2Aa1YBUmCFq78xzXsXu7qQUvHQ6DFNNet6XMP8XMQXszLedAc9hViz8BbCrggd6C9eFDmBTJi",
  "key11": "9BAxVjnmCqgGB5t6qukEe1ZizXSXnDdDQwUXHQNcwSkJETyprrej9hgYEXnQwgV74LyiENMdcgYAVMDb2EwSrRS",
  "key12": "2CEWJ3fCTzMA2m3dFeXNEHJW8ttDhrRumxY1hk7PVCdKneia3qSs5TJPjeCEjuhXyWG9kJgZpRY7KMcBruPDqwHj",
  "key13": "3n6TuvHHAhKnkgBw8HqFRUz8ETMKGL64n4d3ZQim4MxeiJmE1Hu19VDwSitkQSfGbvAmevd8kDET53XBuMFmKUeZ",
  "key14": "3fhn4MJrugzcR5cF3GDnycHnfGELcHTuJW7StXWekjyz2m9Z2i3ioFDyvwXL5cNk9jNhjMou4rGyuU4jcJo4974R",
  "key15": "4fu94mjVRYWo1nCG6froT2TdV8G1pent7cRGUYzYr7wnvDXyUYcyq5dGheetx2Jd1HagWYoppePUYQHiastrbbcy",
  "key16": "3Aq3PeozpjqMRz65Emcfe446jJY8jF5v4UAFoitiJmSRacvyRK6nF7D3nGvXj4vu4zpMxYgqfwVn42Uc4ay8ZBFv",
  "key17": "2Q4nHUc931gMKjemkt5HA6fcXNJKFE2hdLHhsKuSr31F8LQ3UJcsxWokaym7aiq3U4GduyychEZzvRUDf8rQhJGw",
  "key18": "4JpNGCPWHgeYdSauxyjAeSzayYUjg7NFiZCP2caj2zoht4PXyJhUJxx9Zy4dDumJKxGhSAN5AG92N3fMvPDWAFLS",
  "key19": "5ejJrrG3ewpC3bhDxDPqEK9e4TF2oiCGEexwRmZedTZg8pEn2ra993JAXmUiJZdH3BzDd6oCjaYeXwz7bVkmUeEH",
  "key20": "3Ek4JNPZT3FtBkJ9D1iUYi6riPoUuEPeELbB5oGvcyQb9XFTbKMADdmNuA6uX4SFPwUP6Jraf2ATNQUZhri6avZT",
  "key21": "4QCmF8dBDThEuDATZpQZGM76thCmBYJFqJsYcdo2KoCAKvpHi5iCCKBg34Yv2VSUYE8n14ZdpB6FtmJka4g8iqQL",
  "key22": "29ySh1RWVZh6o1L8PRxtv141vHDkmodut8tSTWHLSirfXTyLnBkiCWHh5DkmpPy976CPbaQL4Bzv5A56ks33u4op",
  "key23": "3kSDa1SA4bU7TSZ5Vknk2hWuZbsCX2CxiDdFaBPknRwBCdtoLRZKXXphfZkKXXRUFU5tVDeMv2eLapLd9GZzMbSR",
  "key24": "5KKiH3dJQYSLkxUEwp6PzapgnkyeftH7iqLpSAmBdqEjg61SgXouAfGiEEBTyNR527SijZkcW5y9kDZt43fPLi8c",
  "key25": "W2thouyL5LRnC3LUTrU6dCXkL5qH45XyGL7FUxQ6FtBMYReKwkzxuggQEM1TiPTZHYZDJ5JTDy3GUTU9NABnFjf",
  "key26": "5ZjfQCi4CxJmWa2JJFBLKP1dMAi6TKfJi4PRsa9pb36NiHrxJZznpSmePGUiSKdKhPVRJ3QwSEreA19cYzRBUasb",
  "key27": "3PeyjHs6xTG88sjBm1DrN5KtRrSGq5D4hU975YzjswX9m9XDgraS1NJRNymAzjgfNg3Kr5fiT13Kuo6EYGnfyV9",
  "key28": "52qYqCTrbJLWTdyUicfSLWHgn5dwUj2oGemJZ9QoT4y67G5uGG3B5nrXQxZ8afbF3cnuqLnpyH3g6cUC1zz4xMVF",
  "key29": "4DcHHctCW4rjaAZsMiCCnwT7FSp1KMjyiYgsdWCKSMWdfunNW4ZTU9VQbS9yR5mrSL8LkWWfmBQZPuX1v1Xk2tVA",
  "key30": "NnyZxJtFJtHxxAj3jqerrs4ds6D7q8yhXN2ZxvBa8AnkADGzTiSX63iLa9AXXKDAWaQ9ESUy2bPiAjTVeW5u91S",
  "key31": "vwkF3n6DUvg8ZDFiVEER4juq5qsBqAP4M6LFg4Ad83H6GAnZ37v3sJ4w87EA2SNehLHMEiVsPRFfnXWvM4mKqNh",
  "key32": "9PYUvxBeJ8gv4vQ48T7E75uv5CH5HkkmJMgA9h7X8Wrbx1nqc9z6FDzMMjkgkrDwbsvHkvuzU4BjkgEqegwukwD",
  "key33": "4oENDJa9K2q5qG19HsfXt3Y6JgPcxDXiogkuKcRsG2xK4JfXWprGspo9JQsDkfpBcDgAVBFkpcwrJEExmGGJ8Taq",
  "key34": "5zh1gUyqNd3Pm97ULLzo66nFhYdunTW82naTFdXSSJt1X6po2KsM59vD1Zy5acgPK4VKBCi9ReBRePmftXXgtRFW",
  "key35": "64nTtKNouEV5jYWwULjdiZshdhRMdvdAGc3kpAPYFmJY4iyHF7uPc9E9Pq8nVoUDMu6fci7QfvKjGb9BNsZ5bDkX",
  "key36": "2rU3CC5tiNPBwQmE2fFDTyqS79bVDWque5FpgxjAWbU4xsLXUMcJPiowzKyUZu3UgSpzcgUFsBQoDtXrhd6Zjjmg"
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
