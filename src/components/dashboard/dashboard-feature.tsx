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
    "4NZpHcmJaYgkEnT4uYrPLncZ8hrE3Tj1B9rMj9hsRGa9gV9Y8mnLcZYVN7F9XtWUdMQKGJRkgxFaqMBPEUzujkVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mnA8Hwy3MBtnjYoPSBKFfqV3wry46Fa17DGBBbrbzCJuTvmUYfYLD7K2c2jG4fuGaxAt1vHLeuuh12w2gSNGGjV",
  "key1": "5nBVBrrm5EkRpNrRpRqS9szUbzmeFt8xAanTtcBz5j8rnqUJzJKzC6GQBaBwwMFRDBff22DCFhNP3VmcKZCYn6oe",
  "key2": "PnCmQprokshcbpRYysNzahNAAsAvp8kjHCuszL37E1aZkhsXtrj4s2HS4nBX5WRvMj3j3R6XpsNC4gmCrydmphX",
  "key3": "5Tphmz19csg814zLo3ttmw7QhC8Xuh4HrN7sXhkKWeyyjw4RBgVQstgaD4rxzLAq5uTe8999iZiM2AfSWr6dNbvU",
  "key4": "2AAMm4Ls3tjci7GXsN9W8KyWsZCxBn6YVoQhNZvinvRcgPjyde2pek5nP7nN4KUT8vFue9qMnzdFXc5uxgetHg7F",
  "key5": "4fAc3gE8HfDdV22zM82ZQyc7TMhf7GwUL2KaLGDyveSZ5V2SHgCpXNf17pSBxRigjiCspjVcVxfzk9b9Anx6VPv6",
  "key6": "2v2459rp6KVs43qnedwY1mgc1Wo6ceBQXW9Bnxu4jD5xPRgzvJbXBUYC1hh2Z4qJNTjw3PVurcszeQm4iQGJneBQ",
  "key7": "tMBYCY1mugReu62kPvLuQbBDK7EGWQBjQr4jRit9SgtBTMDbhVMEZrTYe1a7f13Drk3nApnVR1aiw8KLcu4RuDx",
  "key8": "5ZtrbMuGgaBvj1FKE12ngvhVPw5BfRhodauw84TXGCFNX3opjzhZXjWq7FvBzs5znLd976v3xoMNNxxAroBcKiqd",
  "key9": "6nHQpkPGxFcwNWPyR2ZStaTiLWDXRi96JbAtyj9uWbazrPHj1qK6xgTcd2CFe5jkWeKtNBYwTdqBMHgPvYzPG6j",
  "key10": "4GcDBs4YPk3DixDFz41R2wPNMBdeH7BGwKkU4doC3U1ff3LUZzLPGShKt3NqtbN2xBZTDLin2ANhyT66YFJdv75e",
  "key11": "2yNwTsUVGRyvw5WPe56J7D5pD8XYi2rzDUgXNE3EpzuqbkXJnX21WCXgQkZh4ijKvhbhALMT66xY3ehBayBYu4oJ",
  "key12": "2k7M5khEJ6GWf7XkfY5wY69BFssZtxadmd9JyuwdL7d9xytpQDYJiihPg4vVnB3NZuCWTNyEQ3tNPYaS3k4mi933",
  "key13": "4aBCnv9bVrqVpfK6bqbigibTyacADzgC2bHvfzZTWsgsKMKnEGrvmxmqbSCVHed42ps89pBCRVcQvKuMjXsDSEBF",
  "key14": "21aC1vgrhUugKWbjeBmQKE7yMuRVTrea3QdBghGTp46fZA2gnW1d3JgvrebSqv1mBqdbNPmMteYCZwok1qpZZX1r",
  "key15": "2wPMpunCLzaWR2MzZdet6ffeAKsnMmop9moghSMNTvrHdm5fJvUyUoA1gAc1vG3qeQyNcedvpJ3GXf64pdtHE7KX",
  "key16": "52FZFWfDZ3xA3kfDjLC7pcqT7cQ6wY7CojqihFA4EmFiiXBdKaa1F3RVtbXWiE4gdpWyu43uDtvov8KNBW1tLXDc",
  "key17": "3w9esxghCBs9isRCFPB6fhdQmPYVpf1XxFF1V2F9dPCLnM3eH2vXi8BQmgfJFE1QdQbZkaRVBncVh4Yp84SVm76b",
  "key18": "K99AM6PotHNmGyrAkwtksEbtxqTkTic55JNd5UWCVaCcLkqP6fjXwWtDLjun7MSMbYj65p6ZHDX63gghxSdNym4",
  "key19": "Lg9xrymYCmcwjHHa63WoWPFJ6BLgJPNbdNkJPhvSSTdjbApmKonjuF24995aaW72Lfp3Z7nuny4qn5ixrAs8tDL",
  "key20": "59V5XuwtJeb4aXU7wpsuZm3fyWGXx7hLaKySPbYd6Wre9YuaN2rETf57F4cnSiVsNs611VXqkZg2x9Z1LQgSCRDf",
  "key21": "5Ej1hRQrBMuTzgST8hnBiq5DoTTSpk3hWtsqdX7Bx2VZKjrauY5zF8pLfoR9vVfwWXcWXaSfFLvGcCz7JZ5ASFKR",
  "key22": "63wnb9QkDWa72zVgaYZkLT8wKnkvRxt8bGBBZqjBNoBk3DVchzbwVuZLfNrutzRLthB5tNUVZDX1j4YWHkA73Rgc",
  "key23": "mVogqpiLQK7zhDxLFg7h9YWXy3Z1yUkGvcphaifFPqbSE8Ydu1is3Es3PqHg7EvfeUoDf2w78FuK2F96y15yg9n",
  "key24": "2Xs446a56DNadXb2YXk1iubjFSSVauYAxU51rDVp1jbs5rDs4mHGgnrtQNqNm43CPHJCyqRtPBKsxsZ8wafyY3V3",
  "key25": "34Pay812AnL5Sjgycy8UmMGwu6UH9sHEf4cjc6kPZ3tQU2X1K7wqBuFHMD9FdNU8oFiNtT1aMEYcnLqFEisuQu3S",
  "key26": "kDZExtTuUySJYkZmmnw3rjL8d87fqBE1gd3SCmNLHKngVbNHPmY6GpXXZFL5utPrVY9feojodDoovJRmDhXLReZ",
  "key27": "4JPYJ5tsXUkSSXcLstVnB72JiJPCw2w2RgUTJ7vFj2dNhLu3ae56J3bi49Q2FHC6PVQkoqwp6qgYAq7x8UhCkkZX",
  "key28": "39UmUUzW2YsCHH6hQoYYvCm21jBvPz4e4qR8tN5orM27TfgFoUddWcBpinVX6bdzyGfdpMHmz5aj9HSsSGsEAjoc",
  "key29": "4WB2erLJp9S63YMQHRMyQbdYxzWZr6APy2h1e9VC6ScpnqJ8vjgYJqyqgh3SH8iUi3k7bp8hpqviT85LLYAaSVKb",
  "key30": "2JTGmQuSPU4YMzKccRmVfRw74M5gqRkm8DaftRsjQUouwX4cSweZbru3g693QJkNPJuhmsB7VjGwHbfn4z2Teytg",
  "key31": "32PrAN6chgEaz2LskwfV8LhePjHZ6UPDtmH9GrVg668XqTMRZw71512UMssAhaAG7p45fAS7fYWph7eTJeRrqu98"
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
