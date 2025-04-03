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
    "2HXn7bFsfDqzwx8k9ALuyqRwJhLKCdf88Z71uCPjTY3z4idagZ5BbxqoTSzNg89Gg7Rd8rvrHmP4m17JWZyqPnnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n2TcHCD4FNuKz4XtA148Yy19B4bKYcMBfakoGnmCiEvsQPcrFg7Zwm9WTiJNpfhJsdB94K24X8crULmuACZFZ4M",
  "key1": "5D8hX4Az65zcerXJAetHRYZvZnQ4pKKGy5bRrNge2MQHTMQ71zJQXRmdjCTctdsxvzxt3nfDZfnf1pHY6X6RZbpG",
  "key2": "rrgeWw3AfpJuKMkv1JCeuL2E53UGWebK8DZW844LnSLwht7K3ZjHA5rpJrRHVvbXVs6ZBHvvyPcZXxkvgp88i7C",
  "key3": "sYBaQq2ZgMUqXE7SyZq86dcKuEL25nc3YA6EoeEW8LEHsg6ZBpTKbiESzP3P43Z7VcyXkxXMqjYUeCFug1hHtGv",
  "key4": "4Bc2xi1MnqjS6ofuT5zN6gzizhHC8fQCy91LoJ4oEnxD9xWMkMUptbA7eyvVL2KBHyp74cCUc1Bd5mMJ9dSpQK8s",
  "key5": "vJg8Cyrhn1sAMmFzUwj5W6689rAv91Zm92X8zr2KVupwDSpNrp7g6hNJ6xPTZ6SdJdGBYkohApXwZgKGtoyzRza",
  "key6": "2wTMvgYxiRQSHuJPrhRZ8ieJPDwtkDgFtMqtbN6e6xZjAc3FwEK4gU4wZxgVnX9xMWRjwkyxAMfnTz1VTM9Yi4Hu",
  "key7": "4YaMXaUzYXneFDD3EKAhnMuo4eZwPwRMRDf7XSN1Gm42mjMg8nUmBP4KbPnL8LCbgJPaMz37xMoTJRTTaK7UvAe4",
  "key8": "49GF4Xfb545jRMUeBjdHA7bFcrTD19GRMro46ZDmZDFdTGQUSycyxJrgZfCmCZVhHHfJmvNsYD48smkqGjvgXc1E",
  "key9": "52x3xUuD12s6Kfmoz2Gu4EVMxM4g4BU53a5RjEGZzXVDV9HeJXYoR73NNd9zAN1M8EGAvBuEM94fXrQAcrBQ5ESk",
  "key10": "2C8YMA8jLfy6qpKLCiWua4sWmdMeZUARbHjnXdaW6NmGTyQfh8ieWQud4tsWGdLMVoqAqGyNWJh8WN7Sb9bheiam",
  "key11": "2SWzDfPAxSkRm7gmqo8G1TYYAMqXZ6mbeATZv5Kfp2LiMz2j9h9Q67Vk5y5cJQP67G9RwHDBFiRvLQDC7FDbGWSz",
  "key12": "4NYDuArf4EoebNeURtXKRQYHqwbtzUadEKLNxmrm6Se5FaLxYve8WjQ2Zyyt1c2hiEiTVL6F7LeqKMn4f5J8fpDQ",
  "key13": "2MF82yUhgP18sUX44HBcYrXboPfsTN6KXKUEpnXyb47xKbG9uwWhLLZNi4pm9mb2hoN9xUANrER97YHtXAUSpkuB",
  "key14": "5TJyM9xXN3Txn4uL9QjJVoLDFF5yAAsfkLymrUmuJFMXLSwzdFEZHbXvJD9cAcBVz7rQR7f4dJ1oANpBQLBxvTLR",
  "key15": "p4AcojWEyiYbyTT8TY1wyRRVQH11LSNED3UwgggnU6x3bt3srxsy8atNk3VjJjF8MyPaiZX7ZBQAhuDAZkeeaAY",
  "key16": "41E7Vc3w1bLBNRqPjmSC8gT9CcRSRSnd92Z1fj6VNZyAqk9wZ5WL5xiLEiJ9GtsCbZKrKw87ToRLMveiku4QdVuH",
  "key17": "4hDZevgA6kt12VjyD8YoqicA9FpqPsG1fNpjEbHqwWxFgGxFtCxJDFWFaM96iy89cvmoLs7maKkeTAkK1XDE4ASa",
  "key18": "3rkFottgYuyLEwNdoiRMMGAXnLuRpt8i12HYx84tMr1ADcVExxNX1GiwD6bo72BizHaHMV2jaGLQrycBRwEX6ws8",
  "key19": "2DTtpVY7n5dQ5qozfDkPCt9hhEModRrSgVjpDCSqR4yymnsdT9w29aM14j6prm8xvc6mN8w7skpsWtTUCFuqkfDx",
  "key20": "FTmrQQcdfAC8dLWWr4wq4cV1TxhbbNRCeSBbpJ9iHjokscSYiGYAuBqnfE5m1AqHPFx9YW3GB6b89Q2Hiz9ifWQ",
  "key21": "4nuSgiTx7CWUwkSWrsqX4AD2sTiSzHCp4iAfE876KQA2qrnwjkVmsKDmVnZwmDnhjvA9TA8qGoWB1UN9VWStRVWT",
  "key22": "29AeQkYoc4J3v9v8AUUskpuhAiQ2PdknRB2cPKxx5KYSSxKiCcXho16rw55GWsU6Nsk8YSV48aKBrXrREofsjNSY",
  "key23": "3odrk9Q2otYNUk7wLjxDVNhdaUf8VdaG7aUe8B8jsghLVG1cTxjxr5JRaM6xZbt1vpsGyY2FmXg6Pi1FpHswZT9f",
  "key24": "5Ad8aBpby4UKFt32BFFooCc7PNYkz6ps1RHskK7atBgcoN4XYophiavHTC8vqcWg9wTejVC89h13xU6cpNuPnpnh",
  "key25": "3Uk1Lg8P8zkEq7ndjoGJiecmsJQXFTCsQAfGkKog8274wxc74wUimiXmus1hKuUzJrYnDgEutnGysZEYTgPnNtF7"
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
