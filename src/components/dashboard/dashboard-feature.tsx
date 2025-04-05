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
    "3myXHn6h9V9A3b1a4JkzsZS5i88Yo9X77qRX8dQrpTUenPQ1UeADjQ6QMqdKmYQA7dhMqTUoTnpzpwDxdnAnWTYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DE2VywsCw7jSpEzBmRjrfUvfEndFjaxPVeccA5tD4abskgJiBFoPJDfW5jat56yQoKsHUPuSaLz9umSN4p6QVLP",
  "key1": "QtQzdyN81uBKE4CT7HZpoGCJRRnf73SaZCtnCtUbQtg81YYZVYJx8yj1E2sTRXLuHXoZqFyGkZwyn7brM8fvkLd",
  "key2": "4yCQyXz3doti8WV5k4jAgkny1pXAG2DyaFifr1brUTtWeoMMV2iVVxqhvRRA74mRfoyZWJzY7wZxZ8ZLFNPY4Ebi",
  "key3": "2ssBBXhrnmeroko6xd2KUcdyy7RVEJNDJ38JEjFf6HXonA9S9iski3XfqDZyLi68CTnuSTrnZkYHFGUb39UDcniZ",
  "key4": "4QHChyQz9ZoNzm1G3nAK2ZXd9ddEtLog8VGM4nhKgmUxjUv9v1MPAYKq6xdZU5rkNgoAZA1LvBbWG2fwf67ohguw",
  "key5": "2rwJVEfyHDxoWbEQa34WA2YkGkWqq2sagG4kW3nBnXaXb2RaXC8RPtmhZVmFezJmsrtpAq1LVUu7KuZAuJwAuMC2",
  "key6": "2KjGVfEJR6PL8p7bTDyQpfyyqnMAArPyqjSYQC2DFWQMXCTPu7BgcizbELihXcuiLu1RcyvLeVS933QDcwYDyswB",
  "key7": "2pv2GxVZ2LFRuZk8kseXffHQxAgwBHq85rVX58uCZQosC37SKye9w9iqdeZHPHWkDVpyn7fESmSuvRkz4u2WNEvC",
  "key8": "3TjwpZ7Mbe2wnss7NJ6NWJQYJ38R5yV9RU6xSesuQLgQRLYyXxVHUoH42bofB5swmn2tQoSjT9yDgH4y31EMQY8r",
  "key9": "3ERy9mzju4vXXxbhhUCiLSjVw1N5TvPSj39DTY884au5otnf7VY9HaEr4YhQVUmP1ZWi62eN5nvBvAaTQ5z67aMh",
  "key10": "uXRgPdToWWRmU1HUCjG6AbF8f7PwvSQ75RTnmjf6yivLR6rkVUrZJhPeuJz47qFFRYaxYmPsvCTAR6HrFwkXsSV",
  "key11": "5Ew7WUKwnrp6xvRuvXzKw61dmf6fmY6J7y8Js6uDU9vd2sPFhBaRqeeCvf3LfgR8aWbbChZhTB3UFxrAL653bR9Z",
  "key12": "32XWUNFHt9bGKuz4epste2v823PRe1zcwaJZnMCQqK8iciuYYR5zj9MmWhSYhRCFigbmTYLo28pSkpisvD4PkMu",
  "key13": "rLQVn9Lc5DeheKkSVWzqTcZ5hR3u3GFTB5NRGb18cxEEJHHQmUHTbdarQk1a14CoSCsavf51j4rrpq8iAsgvBG7",
  "key14": "3Dj9WWRsvpr37ZNCc9sPHnj3bGBQuYN6j9Mt49wsGesPSXervX35FmKfsZeciu2M9gSxyz8u2GE5LBXZSQkVVMHw",
  "key15": "5jyij4gt8CzRdUW8ApXoRofUGdM7LwFvirXjtUCGxJdCmh8ZX6onSHT5PYz41dqTBnSoqwTDCs2EhP1pKQv2n3i",
  "key16": "51rFoDYoRtn5V3YS39VweNjCV6CokaTpwNBoweYsQ3wHnCYLHYYZ8VdVZ3uCyc9CLPJ6tchLxrhjeAJ8mJrrvo2C",
  "key17": "4UwAgn52u5dBohaMJcg4kyNbrBh6hTgvKVBEPx9noTow4XCuqjA3DqJrghVb6yiZdFLkVPENjwV6cqPUKonKRCSX",
  "key18": "5mvCe6SWKF3SrYFhJLMxTTmAU9aZ1FR968XM6wnPsc5sCMmSa8uQPJuomRKJkBKdUiFacQKQM8iu9PvTLks2ZaXJ",
  "key19": "5u5L7EBspyRweqAAF6A54sF4gmCmTT71zRGEpcsxyk2KqbBE6KgM2YexTvhpzJHvHE1hd8nxQ5zJyrGHtLRzz53Z",
  "key20": "4otrk6x9cgXt4ykuAWLqR6TtuGAsVLB2ALjbbiZKUYqmtigYwDpU1BhsVqY7hkmUiK9Y8vdoSEmN4hEL956vB9eW",
  "key21": "4Wa2w4akVdKS2wqg6afvsgkhXqjSce662AshhLBRKMCFj7LSqQhrXufnXnYTX4bPbzYk8GnoSXMPBYihSBEtCzmZ",
  "key22": "2JPgEJ26oJFBaVgz5U6CbhDygeq6PsVGEVzABNhAtcWQFXTDHATfjREvTNKdbG8qQwHE7XZqxncsoHfhzRouEVz4",
  "key23": "3GKTaXnuHLNTPngsWawCcVF9hwxbrMtQ41hcohcsxvWw1PDBn2DLabstGe9pXP5cs8uUc4CpLtGCrmsgtcB2HkX8",
  "key24": "4cy5S9ciMe47TxnRuW13CCGHMaELCNKcDkeUvsBWGB6cxAzUEvXrit5FFFa2x9VZRw4fcYjFL2vs7WR8XBB2pZUw",
  "key25": "4D3hsCeXiKW2bPBr3nSEubKEpySXgRFUmexf8BKPxsyHkZC9LnZDgiPBAPueE27G7Age6tygCy5XNztiTdWaQoia",
  "key26": "5XSab74oneQy8ayqskTYb7RjYB1ePgy6xV8XAr3Mpib7ANEGXLMwdd7niaLACLP8jbK9FhyhdarmfsCg3zNRXUuq"
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
