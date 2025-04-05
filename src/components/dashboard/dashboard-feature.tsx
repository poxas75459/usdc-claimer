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
    "N7bdEUG6sAnakf99UVtM2BjH5gP9oAQTWf4zRKJRR1q8oMa8us41nkiJu8ZG3kz1312Yb3vaWUsVfAX8Hdi8VtA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sb1xT4YqmGc5sNMRhTZ6pF5gBkviVAVfCj1KMjeRoCLhPW3cdjq32TNicsTvTByd1ucxAkzaXhvzRpgGEpYnnfg",
  "key1": "3EXAs6S1dGVUJaSfmWN57JoMrRUy1XYqB7cXNZ1bzU8aNbqzu5nPmws7mecH2TnGQpksmqce72idUu1JhUSZwzeh",
  "key2": "5DngLyFpyzWhNnkbpKmf4VB7TVB5gsRhmQLJgyRnFxRFWTbtHxf7yqY8UDwm3JshwMPxL6gQ7WRgurm9ddgWn7EX",
  "key3": "35sNysFiRJHqpBCqcaiU28std5GWxuE27ZmCaK5hz91azS8BqZik3A2zbNpzz3Uhuopuqwp7KrTnvACqoq5mAjqW",
  "key4": "5dugyYH7KFW8Lmn3haWHst67DodkRg9CfLzVowi6ikfApw9j18bjLkqaQFqvqMX2jg9mQSaNy6o8VFBh5rAzqcgU",
  "key5": "2CevWnARyogkB5akf623jEnJ7vNNxUMNhPks1umY6odF2PQxVKZRC1DvN16WYeQL8VQEtpbCoxctUqUutKez9fmW",
  "key6": "2ht4ZxrwFmFjnEjJwSYM4zxqaMTR4QEMWoaWg8eGMPKJYAbSwvRL3d5mNocZVeqi1NU364fXoFi2bXzJwteFM9UC",
  "key7": "3MR7n69PyimMScvbtJ2ZSbBBkuosnPGp9F7Nm6UgLAJh4mn6STAzz76AHwsVYXRMveF43QnsnyUVbDc5HqVUFPFu",
  "key8": "fDLojyNz9EqQLSBbz2Q7o4syK6PFgv2Brr6vqJxQ9yf3rUU6jbaUf9tMMYfetDtv9nSnNsGVK8GxNM7mViNsUaH",
  "key9": "5uPC3NbX1QZmJjNVu1Evdt7JVeFSs26WxkFh96Jj7iyzaNNvjPtaSvcHXyjCh5K9EkJCgHFR7je1kRQ1Q2YKY9ZK",
  "key10": "3s681gpNT7F2syoy1yoPgdrrXaWhEBpVxra3m7ydkwN7pHehyL9y7JYMzFv4H7W2N6LWWug7ZuLFQDp9ti1i7oe9",
  "key11": "2UaKAwJVc7QuyhJzAw5XURFom2xGgebLWa3fa2G3bk8rGxab4HScEg26FktqABZWKHXZjZnPTvLM6y2oJyCvKHgf",
  "key12": "4kPw2FQPmQE8fRYiWWTTRFHrXUAKW5MZRtBRtfi755pHPrM849UK3qa9FyAt9fY8yWUZ5DGErAF23uLSdUkLmY2U",
  "key13": "2jJ15fshqMhcZKkaK21v8zGicyVuyU9hG2RrvZqSjE5kD3SSr3KHARzrX6zPc3HvGhFnDqC6fMynekvvrVNiQbmm",
  "key14": "34mzuacQc1CNmPPb1mU7nu1yaVkzp2PQXByuwzi2G5WxYgxNuRdi25zYmmY6RSrRZcSSz22HkGsAM5HNvTch5oGb",
  "key15": "57osaJ5SLLJ5Xk4sXiGkoGJqFX9nJ61LfqCuZqBSpbLdWBCNqKXwfvGcdGyA1x6m6QajwdiUm2idLYhXytkCDSQ1",
  "key16": "5RTHsWYFYFKpDi1dzeZ89ewzRaTDxzYQn4ssqFDxi5BqUiVpLKzPJRbSb15xnaNw29eaDDxNtKxQ4zcUS5Pepmjc",
  "key17": "3FvikLWf3ZwctQ2YpCS8ccsxbGp5EUU23oTE6wSvNSQhBFRFAK34D8nWkExy1X2ZQmRgQcos1wTTNhE23ivg3FFn",
  "key18": "5hbi52dJVzJGvVYaUrvTswaLzWQfv7dtWRSxvnSbZsC2sxfWVFWZvbVnPbrnytQG3nDLYxuEcEFqxdu5YhTC4pSS",
  "key19": "4vVXMA8ECXpFpfvpTDPJUBk5J9ppjCTHhAc1gABK12eTGpSsmmoz82DR1puf1KBo9s2JcX4diabpDWVYHc5kpbnk",
  "key20": "2rEH18Rp3TyLKwfvopNK3fG485XCahJmkuYhv4xhsgLRzPabizG4LRC7N5Ar6xYeQSV8jrHqMv6BMWVQTRXWbT8U",
  "key21": "g3o2n1JFWZ9BgXPzrSeDLBvSaR2v7qHPVG8hksbFTGBSPivv7vT8kASbgVZtK5PZCbb6mnsh4WxrioYE2S4sbvg",
  "key22": "4Qof5eMfHxhjqk6pmwK5MXXuMcVFfu78CBvyPTzuQgndDxvVaVuC4oyP3ipV979mZcYvK6NBG2vjKwjdkWu81ojq",
  "key23": "2z6tHm2mMREGWGjUGkpw1q1MKsLbWJyWX1jwfGy6F8CYBohkneHj8t5e4QoFKwQ6WZ5PVsvLXi1tmK4F6qZsYVZy",
  "key24": "AQECfcamNV7MNoYvX5HKz51fjudCYzNTxDvWHnAJqFuddHihe9JMgy5AJq4WnsWvC9E1EjhJpPcGGLy1Et48PP4",
  "key25": "8KbGHQpG9FKPGPirQkPupKqqJNLLRG1rWYt5JiwbGNz27Sx5uxY7H64BkxYMLFgijm3ACe9JNUnEvy7Se3V4BNV"
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
