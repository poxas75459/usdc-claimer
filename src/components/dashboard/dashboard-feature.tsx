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
    "SzRJAKByomEPgAoghWRsvPJCgEt6GA9g7f6vwKLwzQiTUxfhXkCLpoVbQTTnb1b5JkZ8VrWhYjUZXSGi9Dkvszi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QeKUv2FQx2pHjc6b8F8K2zXxNaB8bVRvpxhyWiTrqfWC8JPBBuf9ntovGDwsxNvNjz7QymeCTQdyJQvBgCJTfhA",
  "key1": "2k9Dnrnp12UuY4TjZxiCrXHd4NBaZBHDfzFhUGbT5rDfD6qh3358HwZra5fWkwzd8n2m4dQGJjpeAW9nc67ZdDpn",
  "key2": "FjYwMJKRHC5MUCFmoiygXZU9LELjNqppkfYJ5nQtaibgDDqzKZDoznQ8121YFKSWDyFGUQhAEvz38JU7kcBz9z4",
  "key3": "DcEouMgg63mWmeJrz91uLiLKRsJTmwuAx8mep3MNB5LrKgS4cYGsvK1QwJqiVpn9jUvB6GSC1gXJZvWfFuECa4D",
  "key4": "2orRMGgTVYQp7D3UuKT3bi54hLXhqhwRb1byQUmqpjqr3RyLbNH2sh7gaTWVvCXQu9pocrfhh9uWcUo3zzVCDGN4",
  "key5": "D5eV2k9DSdQa1MhGfjDBVfMiH93eXnPcaLdWKVoBqqz9a3amHMfHdbaF7mk8cr4Q2JLPQnGk1xfaU2dteJcM7r5",
  "key6": "s2nARkXMdvryQLCLni2bpWEDkWMgjSQLJM8K6mdRY2WZYREjmdGpHLboMB1w4mXRssTjLq1eEvy3HCYsAvEihdy",
  "key7": "3nVGn3AeAqudAvnWiJCwjJosMg2BzYhWWTDEovpQEyy7VS3c4KExaS5YcAwcnaEuatwqYeh61etUzGqfraCmnHvA",
  "key8": "pyykoLkTJw4Cq3DWkgRkBCFVtoeD59iiu3XJdqoDsucxV2fB8GnN7BuHe2dEk7TZL1CesV638iH598uZGJUuRJe",
  "key9": "24ZuYYCbvtQDpncs9cnSzGqbvPbSMs1hRL3iCHLvBbiDjwNoun3rzwGE2SCLLtGjLRtgAZVshNV3SakPogYg3Tod",
  "key10": "5Pw6N5hLk9zHiM6gFGAyvarsqpnr2u2SuWFz7LUkfz9erMxfMhULa9d2YjFrFxF7jQXu44UFBikk1x3VZZnMv5eM",
  "key11": "u2Ap5f8vhBMm8t6QSzfL6UjmRdY65U96x13PBnqz6xViNPA6FFzvNKpqNaY19LupYhV86msDTDmheiWK1Hr3gqF",
  "key12": "3CHSjsMmSHdKk1Jm15CMMj9NGyt4SMidtEdrdUY8yzfatdPHcob6Unv3z19ugtnhXevAowdZfGQKDBQFQrGoh4Se",
  "key13": "5rhNKDxuPU8GrMsE5XWtZhy2a8kdu2hGA5FHxKGnBedFsDk8dk2VqfPqubmVuYwCiERdBs86bxxeWFJZhdD1sq21",
  "key14": "5Ew91oez3w7GZ1aYedjunXcgMed6NyF7V6v8jawszJB29uCvwe1qPqkKMH35FguztGiiPizeqJQjCJYXmv5RKWJ4",
  "key15": "5GNrHVW77s8DHD1771sSCCPARa3VFsMHMFpdu79mQcsMMKziqSMEyhUdhFrqPN8eggJjN1bNMxLezTAr35wqfqrY",
  "key16": "64dnuSUmL6uauzK4syyyC1Z77k7JVSf854mUF1GnA5b7Yx5a82vAPnd2ddo3u6VHQXqanEq7rQYmzE7EkUjp7jDh",
  "key17": "3hD4FmGdr6eA8MY2edprvd5to4SnJxUWtw3NWojfXd6HYvfHE2SwZq5JfAeN7PbsYj9kVB2wQRwfnSaVMFLmNpdS",
  "key18": "3wrom35yUfmxhLonSx5WiUkiXbqiHkWszRM7nPTcRGnYWJuAnYy3gWX3RjLoDY6UJJmrXktMDkgT6Lnyw9A4GVcu",
  "key19": "2Nqc3agzmvHLpTmuHCP8A5zgbuiY66q9EL6G8pXxQyXbdVxBMeMKJnJKRs9xka46GTRuUTtQnZN7VxQUHybcYaCC",
  "key20": "4tvMRy6N8cqCYgyojfTrw25B5kvtqZuGXMSqhnMCfkijcqWg4anS2xCK6HuXiBab7fWkzkvrr5bfMZoXTu54DNzP",
  "key21": "2sAW241QxP4fjMLJT7E4XeugLPUFqavEwzj8Wf4hoKedhXH2Dy5PaP6dk8DNBMHvGKRxkTnbCCfW9Ls1WGHaSkYB",
  "key22": "4rH93DmX6ZEPfe44VbzkkCZamq2kvxP8KvtRBY2A1XJWwnuE7QLQ2pJGJENdBk4wMKMRjdT8tUEu4WfWxnzHScvP",
  "key23": "5xc1k3JMbUVt8Ra8EkWVJmLbFetpVJWeKVFqe8TJBPbqKtZ3FaZGk2eRyNvutBtZgNNfB7Di7zWwgHQZ8WkYpP8",
  "key24": "3p3FQkCvkSeJuUJMCmzxV6zXKqoJoD9VEc1QFyRo6SGqitMF2vQ3rdSZYQPpi6xNDEjRojtnpbhUAVQNv5fNLVki",
  "key25": "3hehB1TX4fnZtx1HKb8ihpM48MixmomUCoZWFap5Rq54NkBoNaWboA5Az6diaAWYrqwnZp6unyBmajdqPZen8upL",
  "key26": "5XbjoCDzxbRst5KiCx8mqeDPT34DK5H5BU1noEsJJeZsxqTr5y8TobHGVN4zAdM6KesRK8aRPHC92PezTkxyRUug"
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
