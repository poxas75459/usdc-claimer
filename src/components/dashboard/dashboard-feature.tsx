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
    "2dYheF6bzCUs87HiJ7AXyT2zeCzmGhrWwSuV82qJPvKm6un5sJLC3oNMRan7sotpGCyxxaKjPwwWeXoXQKd3aCZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jwHidoYsXrxcrT7A1HToZa2VdTwc18jk672udWzHHL1CzSkdcdnEE5TuiVuxoyzJ37tbNZ6otzx9cdgKw3VGXE8",
  "key1": "45JpADXFsVRUm6UaJc2oJEqwecJvys5fCoxMscZrr5vCPrNUZadndQjPKYEf4fiaQnLqLAxHz39b2VPWp6CTYL4a",
  "key2": "3Xbtnrt5iuPRuHbgF78JGU3ZnXUse8uEVYuGrh2ThxCaWtnvQtQDeRc2aDpGK97mK8c8RfHP5TpCpnfpR8bjP718",
  "key3": "4WG7uB43GwnUDb312tomnLqRHZWLo7MmpxmSwLjVh1FbTvzBhfjL6QbpPcbzZoQzLaRxtU4sVRPwUD1WJ24raZaW",
  "key4": "65JSgnxqghZFe3uQ2NnFz8cuBqdRZPkpySt9YMZru8KDn5d4XyhzNKnC8NNPS7HcL7gFcUYTR9V6bp6N542jfM4j",
  "key5": "4mAiEV13rEZwaZUqPfbyK4FrQweRhCFMWbz4ShMhgNxfpQmPZKH1YhZmfgNbe81Ms8Px1a5fsxtVkNak2CaNwnxt",
  "key6": "g3xsUut6dC8dvSpyyuMBqCos1ZLTdZ6FKj8pPJep6XaPwU2YmpHs1K2r8UJXx5pTd1H1SoXA3QjaPSPNaoqHXFw",
  "key7": "XrsMcZRgsyadQeJGM6zc4FeMVkgabUB7pPmi2WfmaYA6UqPe3uR1Du1rbwCdoJnSqtiMnLx42qSq3J4vWA4DTSe",
  "key8": "FNxmimE2UE71kBQxRr4HTidSWrvvmTee4748SH3TfiVyQZX9745iD3xcsBGggW3hGBSF3TTLsT3xJS5c8yTZ4Wm",
  "key9": "RqtEUqrDoHm6BXf8KZ8DezLCTAsFDgXFG4Zj9ivjU6jfxqGKdBZGtGvtH1T4v9wjk8cvQ85vRRDEdM39x75fS9k",
  "key10": "mkd1RS3n25mrnxm6CW3S6nmGG6GfbxqcGej8TvuhjQXwsoqRJqyzPBYg65sjqAxQcKTNUu1SSLxx7YM6jkRCtzL",
  "key11": "61HiCjUfphfXwgSsuvxWhjM8HuQjkdYyv7xyd1xNVTsgHTsaFeZ8zMWWZKDhvaZ9eXwrAvjEhyRhEouwdKceUYDS",
  "key12": "NZ5Q8FVAc1vBqRGcj3weAbFzyMZekYfr3piv7PhUTw4sUMNdLzd4WA3DLNLbFaryDUCJfpr1XDasdnWr2hZHKNE",
  "key13": "2Ssn9j5E4ufDZmDa3V4J5QqKWFPCyxUmijMPjs1dvWWcem47REN9CbTt9qit8V54qshoDM7qvqA2iB77jN13KQum",
  "key14": "AzDForerEVMhtoAMKVo49Zgs7yodsCZhinD5z3eQgnbFMbPNtaBs1aFf3ZiCtRjoTUW9QHkkWArjnzJca1YSH9Q",
  "key15": "3s6kDf5PiFWf4Cg2cvqskuK6wdoQPYuXLc9ho5i9p2yQ87Gg7FNpLzDWvLL9NfgNnsdFgmieBnYVukn3d9NKZApr",
  "key16": "4beDLDzJ8EfyzbzjFQ33Y43X5EDiyfXPDLgY9f4mrYsLDVwahjEbGziQcjBtJJoYCwgqRxB7BKSY2C58dwNrydq1",
  "key17": "57nMi1DDUYgiips1SDTcbsiRrca7R7VgZ4FZGZV4RqqsKWCQKNpqb9L1q3dtobB3k4QXgw3KDAutEyP4xwTKKGz3",
  "key18": "2xEiHsWybH5B55vfSkCofnkMTjRxfxpciN6iKys5FaTJuTL5KVnyaj3EEhxcYu375D2mxVSds5ginsH8KHbKdDsx",
  "key19": "4gEztts6NurcB1MBLCUSTzCPLkzHq8UuHxHbLYA9UwJSL8nu1gCArT67udkWDL36h4US5HqwWcoay1Z8V1nnSWtQ",
  "key20": "5C9Md1jkGjFm3x1ZDi56vAHqiGn3Wvdhd4kMW7W1urgSXhupQXsdSx1XsRswhNwFJE5kr1VpRZLidbXMj7mxeUS5",
  "key21": "4wt8sXJAZfrUdVrmVR7zRBLVkXRSo1CDUQ2ogJ7Yr7VMcy2uGskve6YGj3Pgzq1p1nPerZgajiE6Pos4tjJPMDfr",
  "key22": "3jAmmJvS7e8K5PhsxNASz4Eyy7ZPCGA1wybNpYvUUVUzF8MJZ4AmVcRVrAPN1vFFqwifUMNfj68EPmkPMubs8JCG",
  "key23": "4b7S24c4Gw7HxUSSjADXuXMAkZr7W9UMuGQRAYHkfZSDp4wTXivYNWezdQYSLAKE7me68xQyMkePxybaR6xNQXcG",
  "key24": "5hXFVwJrRf532bLZcneRMSssLHbQyEYE6FHcRo9RXbWRQzoELA4734jGhHXkkDF6aufF9Voqme1GPzePihR9Djgy",
  "key25": "3tYX8bWKvJcyvbM6CpPWjqFBbbET1oEGTdEMH77sqLKx4kF3mf5F7VNYRU4CUxpxq9hATW7nv1yPgY2ENHhKGQqE",
  "key26": "2w4CgSDaR785AoWt8if7UixggoRWM1ASxoH3GAyefN72VMUiePL4zuBWL4h3LZEgpUTKckLCsKc2Vi7CUgj47Ka6",
  "key27": "2x8ob79GaVtgruBuZN6GzXyeucYXnHXJArWzhSfUr2KSehfTN9JDgd4bd1sXSJFizPQrpb7brPbWxZ7uTLFxVuZM",
  "key28": "5zrQwonYyQ7TRde4KVdtAThsRUC8HXXNa1PTLTpgmS8xeCsH4QDeMfBCEJtHauYxMYXKfAXG1mAoqSga94JonQcF"
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
