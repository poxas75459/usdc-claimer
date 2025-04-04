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
    "61k7rYxQTrHCpXckisG7x5ym6yvJJZbtk4fmPPvj8i969SVGtHibESn4MPsHcP919n6jVjdzZasfcbMuj2ggEb8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oupdGxuySh2LmfkaWiHZAdB5BXGCPqAbCePwfubkWXsdhpPfww4swEsfVB5Do9zoXcdFXo7Xi5u83yJyXs5aQjE",
  "key1": "5UZDmzRf1YEfcMx32Edc5qMxzjEEZ29yqLd2bq27EC73tXTHDRDiACb56jitEraiG4UY9XL6fHdTjssk3UxdXF93",
  "key2": "5dpYRPbhVRSbkmtFguYh6D5rSUmw3bFscMLmhSbacoLxw5zVxwkk32QoWrybC2qmEPb1hr23gU9H4evBEwyG2GHa",
  "key3": "5jmCvWg6LLqAokEfSa1WaZvVRWZCfJR5jKZcvZT9ZdcLH7eTxPUAmFiih8L57xMYMVGeD25CT4cXqXKN73cYS84m",
  "key4": "wMdW21kD6Rx7buxFtPi8CYSDNNqJ7XKnjnJQHcu2fEdMUUNzDLT9SPV5m5c6gtKnTvmaf2r2McVbrotAKHHRbkM",
  "key5": "39veQgpSSnPEe6ANcr9P1ex6iSBar1SXptbpS95r9Nc61u7nwmWrV8QGvMQSbsxTddm5Mqe5Gdf6v7c2jGBF6aAE",
  "key6": "mymWcK97omKqPk1wCFu4rbxJG1Cr7npRDkeopwwKbK2eEHMNXAK26nAdP55qBxSjY9ySuMSkUPRxALdaUSoPEcj",
  "key7": "TQhGtdBw9W8ifvUXhtue6TZiZb4bLvCdfNy7xFyn7rPvYcsSpL88ARf1qaTMGwggHBRUEoRm99VJbN1PYp4c1nB",
  "key8": "5bWKSqhLBELHsNoRWEcq1jD8Keh2HdSQnHxfHS3pQbqpsVRm8U4AtmZEsM1tW73JTkLPwkjua9zDNqjr9YkZoDrR",
  "key9": "pY95zaVhsUgh3QSKqdLP285SgECX4P2H4345RP3s46DMuR2VRVZf2QXwqkbDLRxx5SRfJmmbp8wrQCr3ayqjKjs",
  "key10": "65Kri37wTcFomTK7J9Ld7hwnGevS47NjCgu2EW7GkZxmPAiYLn5STxW33uPsGs773hZAT8F9UqyE4cDL3br56qbv",
  "key11": "2NuBX4U57wd8HKRoDyKV4ttckqN4LvMETxqK9KwKgXnQpFrdVMuRL1AQVjkd5kJZrFACPth9Rd7YJjE25voBGU2x",
  "key12": "4cDVicgm9rZWHZp4ymru3XvY1VM3ukqxyE3mn8q4r9Lv15vEjdEGJxtN2ApyYpfBT6bFLzeLoM9wVqFL2LnsL3Kq",
  "key13": "5mcJ5VUMNqwYvJY1VLFsnCtHXUCpStyrRLj2ddMTUcdLhhC2hqShBoHCmtXvUuFYMbiKjLameFCwofMdgaGXV1g5",
  "key14": "124XmMwv4oLD8EwW8kxrAupCF7i5sFZGZPfiMjx4sjriy2iX8jodnDWukWVgTvBRREdvxyesPociBZ7MvpvpJsWg",
  "key15": "3dw28jBE8jNAoFj7fRPsU2m9d955SEdnYXz6VmcMyhVpSBxHfD7LynYWNfBNLYYbLUpbWLnCvmdU69jAJSEPCNq4",
  "key16": "4BP5q4h2LrBx7zmGgLHbfSYojpK4DKA5DeMY8CLCYZ4Zq5feSrszvGGYypURrF3RqXpQswDCdupV3ktDJH57P89u",
  "key17": "EjSwz9vskRoe4WWC2wo1m5SmZYUfnBdiceUVMXsXJMPGwVrDG2xoTt1U4RpbkXfJA7sSXzuupC21VfcQUsomwoM",
  "key18": "3VDHAcMvEzGUX5GQSzNAP4bWkf7G1SsygfYSfBDLg76Qu1cNnMZhDXAJrzwJoGfaYmsgo4YcK4AG3KPew3igDRXT",
  "key19": "5wKDqxBHk3eZzgz5cpqYHgov5KTjPBaz8wxYxNWYufy6bWWyCCZ8YmRkFwQv2tsbZGZonBJSV3iJrRQZqhKnK48G",
  "key20": "2azGbYLTUJDVH3qosm5K9rhdvTpcXRm3ZgkurV4QWwzJzxfabnSrKZCJzCeh92fEwxZEsKVGdED8FQ36EEY2wyQe",
  "key21": "3ifZkB5BH8NfXX4EBqoeMjrJDBRaZU1iqdPSEqXiuAMgjCiFui48nPq2j4CtuBFspMenKfRThhzvVsN39dWVk2GG",
  "key22": "4TpQbAvc1xpNcAsgbMEiYTE8T6LLoS6Qq3KP6DrqJ7EjRQaMZhFB4esubxJwJhJzsxWWMBfFyZXb3P7cxyshmRVb",
  "key23": "4DEo3vMNX9dgNtKrDKYXvtDgMob8VV31ijZxmxxqUNE6KxEcMbemnQ5z3hqiidy3fwKq2GcuVQAV2wwxTdzPeuYB",
  "key24": "3t3dW72nnjtz2SSuM5pKZ78LRfbmfPD7C8LXqmhi9THae7dRCsVJTZ5a7WJkbupC1rP3EhTMBJAR1QoHAixNMwVK",
  "key25": "2ToiFncgh3E4N1uc3McXvcGQQPyzyqnrNq6cg5vUCSx8mEDqu6Q1di4VnvMAuCC1n3mXkFZ5bx63jMxjo73gXNCc",
  "key26": "Df79M3mfXi479QER7WWbwCiQE7YyKmQhFhuXcNv7MmYiPmFzJkCZAg1bgfkPbFB6hifrPKeT33sfRcAk5GQcSv7",
  "key27": "4odbfD5Q2kf8suoc4B1VuGEUW4VHp2vULs8U8xTJPLxHzKqwTtfareNNq6dh8bPZFQczQTNrWSSLD3BhrXAP3vPN",
  "key28": "4jct6sNHkP4Dc3tskfy3WpPe736k6y8YCaYmTUr7K44rm9G8eQMKEfER6sPFabsBGLkSejLuuViXgdVzpJspvNbE",
  "key29": "5HJ6dbHv699g3t3aCHJkCbgiJ4imD2XsWs3WFYLL3MwcjKSjYV5psG2Y2b1g3gUfRy1BBYud6UFf3Tv6o7NwD5Mk"
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
