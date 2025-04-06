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
    "5dNRf9F66TuYsQ75hKVwyttaVQpX2h94ZuiuJaeyqrGhPkZGmKc5ALZZ2yMdFX7fhYQf6nGNnFV3tyeJXMMkj6tk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aGZL9yfotEwQhS4qas76Uio1JhkDC6LkSzBZcdo324PJc4RLehhq23ojz55vBhsK7jZ1roc7Kn57pVwpofkchoW",
  "key1": "64op51rKZSJFnaCm1dYdXtbL7s8QQ6wVswszmtgNk4m8Yd8jB2ifefg5dcahcLCPSDqqiRrGxDYFrnwyBdeZrz2K",
  "key2": "5HehUN4oBve1hRdBBnRMEdpdC7eHWk7KJMj5HTp1e4fCdEsBtoXGtkXoCLdPDMK6Pvcp9hZF7MyncXemtTjXXp1V",
  "key3": "dNGjdDbRQRtna7i1xMghpcCzwn5b7noCQvrjjWw5aUUzZFUdqELPCnrMDuDCPJJDtvKixqxA4cHMuPnSCB5MLW2",
  "key4": "32NuJKo9NwMpYJMfHYPv7c2qPbCfobR8SY6vGy5QcJ8WhVHE4hVbTJk9v3x6GgUoVKy5DcSR7et7faYvoxWuL8JF",
  "key5": "4cLqoCnHbFvHh4K7DsV14S6o844R9g7bfKgk7k6eHXiqZKym6gtkEiaJVqJ1hjaMkaDo8EuRKKVV46sFzn4x9MaY",
  "key6": "Q71tFUJMvWJHhmsQTy9334hRAP94QJbBVnPaL7oVVTR5XCvmn8vKhh2CabL1UuFHXTyZYQZF2uETeT5Mw8MMzXU",
  "key7": "5QuSa7EjJsmbjz5wM8n7VzcaSxe1HTpXtAZctJSPVdGJgBSXfeXLXpC8NJ2v8mpHpdGoBVQoG4zcFmb4NHsAwLYa",
  "key8": "23kT4HqUjMPVq6XvmMkMGp28auy9eGsU9HDWTFUbcGE4jMQEq5vXvfvaBaDvJrywX8TKJL1wWEzWrKPauF7gLbeX",
  "key9": "Q5UpqJEvSjKSoVF6QrNpmYhkLXyfS9Ffe7qKRsYgJZTZrrM9YHrGAhv6kuFhrSHjvU2TBbLMYNaB7iHy6GZscCh",
  "key10": "3kTq7suF4M1iRpeuX32u1gAhAgr8YJoA6JjXQn5P82eRBHoaHjsQjkY3tW6EZkHU89WpoMezNUDdurwdrJEDb1gU",
  "key11": "444FstiaxTwYM3793PJNw9RqsdPagALSXqsUYK9JvmGjbJeb9gcHxz5aFt57zi3KAkNZaUchASyCGHAtGktYcEKZ",
  "key12": "2ehXiDUgeiUppSs8vUMWNpq7AmhecPzTJWrkzxkEDYhoAhcSCpe8TJNqUjPSPVMubYtJ5Adjs7MWVEr7cU2s6X2Z",
  "key13": "67JyZA2aXCXL1pknuPKL55mAmiKq2JibAfTxwyfiaXoL4UvScQGgoxq32etvbqaKGbSsXWWBx9APcCXoo9FQZqQa",
  "key14": "4BCghbJ3NUXTCa582jWA5bBLEaNUbRXJpsCntCH2wkJySF1MZbz4yEbUDx9fBPJZKNbHMvZNvj35PryMNzowRxf6",
  "key15": "5hvNJur6f13o4bn9zLLST7iDyEq3vnAJMEWduUudnRNysNt4WcNiy8Nft9fyrUwQqsKo9nEjEftXXL59Pu6EGMFf",
  "key16": "5BcXwf9RGm5ThHSpjev7tGQy7xWPMhq75wkT5Jg5WnEU4YNCxHCwsfezLtGBQHH4ypGbGfjuKUSE1YTj1aAWsokV",
  "key17": "4aknKDpdcBRo61nmRmAgwLz6ERf8jUjADE9RxV6SBLHAx54HwPdKsJx17o59tp8PS6gpeuZGvug1geq6XuKTBs5A",
  "key18": "323RZcCgeZVHvVfaZ2tR5YbXHk2ENnUWRPokGESdq4j8WemXhNsRncchgKQebVUcjisPRL2tWEFiwK4qSK7FopcE",
  "key19": "5gU2Mmf4ARevBckoZFJrmJsLAxj4NYLQSyZ3N472Uyo3JJrEEdUnRLNc7kGhju9MXyBgGoPdKQm3CaZXNqTtcmia",
  "key20": "5kozNfiDCrjtQjyn24BExhjvAUfwvqgknUR71n1pQPyHT2X5MQBy28RePWbxn9gYX7BM1CQKprHYdFjHv4ZkZ6hM",
  "key21": "21e3DP48Z9xTC9MApixhP7jHUURuZHmxp2DaNzmvWrr9sL96n4xLi4Ltb54qAzFcL2ZUkPWDby7McYSaa32P5wEA",
  "key22": "FmYFuaGNxMtwcHcTCdPjmHYQrhbezhWrvZLepDtRF3QFGZoprTksCkAn5ovAR7bq9C975XvCv9pFRv6DdpCEtju",
  "key23": "b43WBQyCQv9Jm6bHUzrUZjs4CN7wypakDoQyCv95SG6qCh5vPdotFq31B8zz8DxerQ3v5b5yKNhwcCfyrPaKFJb",
  "key24": "uNtVTX9Sqo911G9ET2HvC928VgV2T44xmi9m6Xike8X3iys5XdrpWfi44DjW8SaqtMzZ1p2WKeaEkvJQ3btdmmE",
  "key25": "5VUXD1x7hgH3GZVUQp9PpgBjRk2kAUCJ2U1EcxVYSyJqiBCeRtUJBxcFepqfxL6JmLxNBHSEjLTKsCNjuzkh3QfT",
  "key26": "2JqX27DZU9B1LMgY4mNVichvydCyhfXSK51yGr41udqXfTmHBrqhFaBRJqoMdGnbXbANiGRT6sg5F52axppPMnKq",
  "key27": "V33eW63H8zmdN7CkHSktEk6oDre6rdmcrerbZEBAd2gWypCqpvcGgjxCbNnvZ5PjAqkpwm9HmWkEswU1upPHpoq"
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
