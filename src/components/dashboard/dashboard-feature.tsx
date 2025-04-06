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
    "419zWBNd9KEFKuLavSHEHFN5eqA8wkh798qWtU4PRtyTri5kzpTTLviCHzGHNioFmJHVmYWDrZCZGGaRcuk32skf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LnYcJNqkWwTPTaASQhzzK6kA9tbtSR9H4SMqMdmtpUybZo1ZMjB4zffYg8UBqqBT5h52Pw4uCG96z2aJE4G4RWK",
  "key1": "4uH8caJYZz3vq6yu7HNjJSCBtLX1LSzPjihvH2fYQqkxLhAuTRx75YF26ptx692QVByzvWox1DazZnwwmuAwfEfG",
  "key2": "27m8TS8ck5uaSebYDkdbQoAoBbzAXxTUENiFf32RD1AxCmNR8LabDuri4VkuUEc7szex3vhWUGCEG41THx9zPZSF",
  "key3": "H8XRUfoaVjdQ9A4AeXVXkPxxephWXfRzvpzWxSrbxXX47AEjyi6Wqb92H2faAT8Vv1bT1KFKAVmfUrYmoNvq9tm",
  "key4": "5REQc8e2ayFtjzLVSFJmS8mY2b1vXawQoktfoKzHHrVNk1HzyZzWqFmgQsdbc7bKkRNZsHYr6Q23HYET1AbwVb5L",
  "key5": "5jr97Ek662DoHw12V6qB7tRmFi6VmNuE7rvKHDBd4xKacEEGdhwZkpReq2BU5mjzYLw7cJ8bRVs7LjwpdAmSmo1K",
  "key6": "62Lx4cqAXf813ZTkUqzUHkoQTnu5AvW7M1Kejgw43xK41PDmCwk9AtMFpSeBtqcfo8mRw6dA1iVpHNeeBTAybTLr",
  "key7": "jHgChw8xeYfXm8KMgHN472rYfgyvXmGsEgDYqWXigsfvi9pqF1LkZHzMkyhQV4Zajg4WZvyFDs6AKhXPcBzTTnK",
  "key8": "3PN9t3NcBSrdwgqVPt5BKG5Br7tqcy5TDqSrpZWiAtmvVsEog2taqNUSryvwhzPNXeTJfYaiMCJ8SMoUBqTR7N7N",
  "key9": "3ubzfU6AxdQQzdw8uLeFmQmEtkmhiuScPuXfNKzU5rrjemmN85bfjMTAvbMW6mx68zehSb8QjEu5aLQKU4zRKqvD",
  "key10": "4Tjs1hF85YjFUz96b1UukFFxACyR15KtZQkYWaNNNVpt71cTHNBKf48v2qFxeJx4ykNyKRiV9MEX4jKo7WpZubPY",
  "key11": "27cci5Fp9SeedHGt9CxtQDnNLn98czMpYy6kpD9cNG8LRfb4qWCTAL8e2kywUwAK5cLi8mqqsw9CP6yho3H6PMcp",
  "key12": "3n595nXfCPwTEkh48pdTFpKhMh6Tq9WkGfZ19HnjZGP8MacCJcYTwaaLwJtu6zjVaY6VmSkBYvcqguf9Q7jy5BaT",
  "key13": "29t6JnNeL1A2ivi2KMe5vxrGZ7QqT7T255df1KVT2VRm5GxdnqRdhLavg1jJSdSLqUmL9AuHoP1rfKiV3h346HCj",
  "key14": "56F7R9YTSufKStFwAFoS1ZmfKMRrRVXtUY1sStV3e9a31W7YC3SXs5osBgeJ1fXDPxC2oWyV6swSYH1xzK1BWbfG",
  "key15": "3fvk6gn9ufkVzgZBAxreXchTBJSQoZMQ6aXvQF5sC6BoyRbJgBHY1QdrBu23vAG9rxtUDqkLPCY2KQgxKtikxVfy",
  "key16": "4SFijpX2VNHT5jEFCiMwQBBFgknNV3Vf717iY6Xwh8jmU3ZqMdM3nzfHS6qhb8FWz1WJbgeDqwySFyryWFibfuRV",
  "key17": "3EACBM7BUiurk5NtEwcmKvPr9shNsQuF8wFk9ZWnFWUXtVjFpv7jYt4uXZqQJT82aJrXo6u7CBniZBpxdgUKq8mV",
  "key18": "3doe1k9AQMkGnsstn9dC44uBp2JmT1uKLuyZnWp5J8UxUYYo5g9w3PdA8dLWV1vfc4CHq3QFrmiTDWmtMBEU3YE4",
  "key19": "3KVDm53CfnA86jKce9T7HsN5WRmY7t1rfVWCTbvRxhu27jJcZbobtqvDExUXc8dRGjsJp8C7mrLt7xAbdq613tsK",
  "key20": "6dfpL3vMj1Zt323m7C7tgePAHnEm8eeNoGb9fP8wZjLHWoLBY9GDCq8kN9a627w5THvGtkEsExiVREWSr2Q3ukd",
  "key21": "oYbKVj9McoDSw6yCCN1Vb8SL1br41DNcS2EFu4LstJ4fQDn4qEZirdvAP5vHxcBaAbxRKzN2omN6HiP1tjQSSFt",
  "key22": "n2a2ihGZ3YkyAGzqwhymCkfeztrXt63Rnw1QKFaCzymMG2wvNPewmPphNXMjwkU9kiJYUQqRuPdEx9GmNEzg3LM",
  "key23": "3Strdjfso1mFowoLsyN2pohA6LUCsaE5Znfxaz6qNk4tERafB2UViSNiGvuxvikJsRgBan5TkyDkXjBfkCad8biy",
  "key24": "4XHy2PXHFZCGM9ezUAnJDPQk6rEtJwdwdf5SzPWQawLY1ycahWJaKXyiHiFmozE1ZyD8g215b1NJSEzVR5AKgUzS",
  "key25": "2UYmgfCgbsZWZHnDDPHyGcDTCGL1vWwkp5565Csmx9Dr3eWMboo9EHtJUCbXUL5m5ZFmJ5A7ZWz5HApimRtNTEXT",
  "key26": "3WSKWmMVciRSvkPnbrkyS2AHm5Ek4poL2X2coA3Gzd1C6aDWq9GMDrh8chJNKeYmPRgtcoaTS1mdYCfjocHPtQP7",
  "key27": "2dsQSB67ts5KyPTgM51CveySB2ZNfg11MKPgk1UsDPThytJwqoc6rANdrZVEo858LqYxKTfYreC7hpRhZNDxQL4s",
  "key28": "4qZnCG3dB5Rmh3UvLD7Kcqb3WXyWW3cyaMG5157soQDFSpJQVXuZ1EYVWV2XVGoetHzuKHdFag5sMiaSszBzMWZU",
  "key29": "pGpLUFdj5mDrGtejNGBsdk8j2479Ag5bmskwnZGh6MsJYMm6Md5varJ23nBkYpcoMMusnzZLXFPyU4Hp7coSpXk",
  "key30": "3UPSVjjs5RnFNfi5zcu3KKfPX4Snarc1HVyYfuH745KReMu5JNNo12UK6aLjnP1jHbS2nmYQNjAKCgav8Ke4veKL",
  "key31": "5SKmozLaT4JKY5BeNdTUq8BF8ES9Uxicomxge75pPQm9edb6Q6MqGmrdzofotwTvKUyQTD3hQ65qspC5kT2YadTS",
  "key32": "66tFMuphwCK2HUdicRURvVsNrPjRMiVFGa3CXP2AzT8MtcDywWdrZs9pYUFnka53ZS6wD2pSTUAgnYM3gjqVMav3",
  "key33": "3r5ufNdgCBLzhBbHyHQF55528X5XdJvL21drs1JD3VSoRQ3CsGoiXsGGULikwszrZYK3xiJ144BpG7tVMZjmGt9D"
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
