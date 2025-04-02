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
    "5iwx9dy78fjfaSevbRXKPJeoxZ3KvcLAWiaqzdwqnSRh35qTMAbrUopFYTR6P9jNXTdjSikYxvLHA4TanJhZz9rk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZdXxb3VTbfaM5eGSMRU5HUF5TkQ8gTqUfRoWUJdAwp5rRkK5kpYDzpwAKZngfH6Yo3MbdcHz4e3QcQXaCTjFCsg",
  "key1": "5p5QaYdx1kmy3FKNMtDtm9teiG5ZKyjKd9a5JNfzUueqLGFbggk1NHDm1fwhWQeuGQ8bLJDi52bmsXfA3rhHvgZb",
  "key2": "2ae1cgo6k82nmnMCv6D5X7Wo8FVJbsVtqjKXBrHevxB8hpPsXE54CHQxWDdhqbLTKdhgBf9e7Dwpm2yF4KtHbWjk",
  "key3": "4nqL54sd6U5ho6zU5BPUx7LKegFx367dVD62QysVkZvUfkad1Accah1Y3bjZ4V3M9fDznfWm6cZFKmZbfh4xDn8u",
  "key4": "5DYkzr1dEtWYmCBir1BecYuAFFJPgcNJUKoDg2kMorPiifV6gFdGo76FJL9b559dAvrRAg1SvY8RBUz3h35UqXj2",
  "key5": "3skVG1KfWnKYvZ5bXWmG2PSHV9pUGj9GYEMTuU3RyJH9T4zy3cMxi7L61JR1sQt6Y44h9wdE4zTWrdkFcvk3gaYD",
  "key6": "3ctDk4y1NDicr63ibNnoEHpPB1UGjfJU14fJSdThiyVKdwe4PNxSf6yLVsjJdjjTM5LKR6P3LNkxNczgyCV1JDVn",
  "key7": "4SedVwL3ctjJetEEGcCYCNPn1mPha9WUudqxgMh1rJFHQZv5qADm8cr2LXYz9K2zGPyAAMKr26vMoWJDgUyXvYgC",
  "key8": "4tbwKWDDPJykdoWMRdYXCVFgkLANL9UFH2NqCNTpHinwGDwV1b561DgAEe35kjkpJ3b8JhGoi1H6KeNLXhHqSADk",
  "key9": "5R6CqUiwz8qSJNFexSbEgPxUgRy2ayX1kiGy7j7sDspydSPmNwDy4c1zob4dcWNmvCvw269hVwpvTkBgJzPXWW4F",
  "key10": "53tFBA7Py9VEttjcwTTHp2B76Xfxpz3JqjTwqpPFNzLzd3WyZF1jkeqMiLsHQiUNrvs1k6ecTKTSW4qJ6jJtYugw",
  "key11": "3FLrAZLKNXxu7dvhtKViy8ZzyccLV9tk5ESZ1VzrF1e5xxKcGkq7qHGU4fy7Cp5LgagScegSMCc6Tp6VPUUFo6K1",
  "key12": "5ATP71ego4mTTT2PwbB7XANmWqSjeomraUngGxaZbB6BfGq4AEuZBLA2Tva3FPgki8xUHNLwFLBNdn3NWcjTYMck",
  "key13": "56ezbmP5vtMuF5wVVUh197JDdG5gmfAcDHxoGZ5z6buNvdgjsL3E9Fy2TicQaP84925ysmFT3Crhsdu5Ha6mQWjz",
  "key14": "3RaCdhKjUEXPhHtsGHhY3Tn9RzpSP7We3RiqK1EM5drPv1JErFhChhR58zN84htyAT8co9qDmjNSY6gbUA8d9a1z",
  "key15": "52BotaE1oxkJCRbEcW6WAfnHNmYZYgv41x5tK4D2TDGjSzeKD9oBb4yXRVvUNaivyZpHK3VVdVUXDLLYAqY9wyqT",
  "key16": "3c3sALMUV4xrmpmwx8JTA2TaRU5ivWnYcYxMNMx4YmYZ6Wq41s93qTX3owfLQhcNcVeJNJhJYDQa1SXjRidByqna",
  "key17": "2UG4YEkqWBnyXWN7kuX3YpdmARecVrvsM5QFdn9oYF9XPr3kFLHCS6VYdwCA3tTBf9urQGxpe4aDqodkktS2yYGq",
  "key18": "2uzQSqrstYMTfZH6YBBHez1GSvvjkyk4c8tQXtQZZGoCcWBhyfGvyxxtQZb9hszmUQSeC2RCkMwPqjwa4fPRNofM",
  "key19": "36YBjiRxw7WHFhx8jda1XzSmjYK9S9vfHYZgkMLpAxn9zd8BLrgMpTPqcxE6SE1CbdoYtcXZUoJVJgYgyh3kS7Rv",
  "key20": "2EWDt6ttEjvUcP1ySNQmKWpJDypepAP3512MKULovLMycNJ9wGTx4JEwrcS5mSQqiaknWoZSEkUNfG7onAaKNDbp",
  "key21": "31bEZMxD6rNaASEdJ6Qarfpd3jBKH8wUyaNXandeEs1voHfQqawXMBoUXtd1r4rRX7tEfvnXdX4epQMR3hUnDmwx",
  "key22": "2dbDWCww8AcFxnpjszjEeX6DQKjBYh41ZFmkH6kbXehUKm7VjHBXshKzVGMRyBswyPDDcaTKZqVcbhJ2ZA47eppV",
  "key23": "4tGFXmG1pTT9pdA8f6YCaZ3Je47tUQqxd4mBKqATL8N8FvfiC8sJsDNPwx3Y2Ze9uHGRFnnPj5e8z79nj2qeQtDk",
  "key24": "47A4m3wVQdCRtHCz1pcL2m1PGq1bsmRUUgmdM8TByiTQttECzrJ7PCgVBbgJrJjqqCfDNWPyd2yv8Dtpw13C69Sm",
  "key25": "46W8K1GtpKRqffG41G7vZdShB56cWGApcU1FcPXYs5AznqDPsRjFYAWyr8iRNVfbV2yCbj3RDzmDuFGiUe5bsJ71"
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
