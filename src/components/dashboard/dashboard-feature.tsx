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
    "mdmWF78xRNL2DXes1U1UhtXVCN3zpBqt1YHX7yrYs1xXL79MiK2NN84P6CqLhWfWMgadNkmJ5B72Qiq5xdfkxsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27NMMHBvfZwA1qEtgTnfice6Bd2aD1Ep4ufuF7BRBrRrvVRZtb55JB3xyCLFGfoCRUY7fcP3vFStwsXNsQsTiW9s",
  "key1": "uNiCNX434EMiFXK719UkY9tra2NwyFFRzya4tJJTvUEZV1oJse1Vf2PQ4yDrno7batZQvMmR8PZtHTYFG9a9nJS",
  "key2": "2drxZRMJm2EZFLzmBQnfqZ4ajS3bzzFJwUHpgFDYkhAQM88BBybSr9vY3G2Et3jr62sKa3MpR5yrCboR1JaxmdLA",
  "key3": "2zwEAbC9i6z1MLUfERoSbycwZNoQwbqEEkyTwiAF3AVS5VrCgUQqAJwLzyotu6F3jHSafbSQtoLPdT9wHSnHLU5u",
  "key4": "28GJzpB3wikBKtLj4GBZScLhQEFhLZZCpctEpqxeHd2u8QY1cxmCZGfXG17SoS7QyQgo7Xc7uWdSLijW1ePRRkjP",
  "key5": "2bvzSftrQ1r591xsxGmdRQV52jVRD6ZmNS1ZdmqGgxoYUBzoEwzh4NQoFUciFNM2Paghk8MccjUVuc6p8u7qZ6Zh",
  "key6": "4e9YcuyXxK1hCAtfuyHisZybmfqu2Ad78EuwdiK72vEiJ3JySZB9SPRTXojQHQrKupmkE6Yw1SE9PEwX3SdS36aS",
  "key7": "3UFQp9Dy7saESXg2iS44RKZE8PvPDC31b2FBW5msbymovN9BqnLRvNr2fGVqqPtvSrRCJRw4XQbSdNSP1Pai9XqA",
  "key8": "3YstJaQinfbX4oRHAs6hPTWdam8TD14pthBEH579UYMeHzczBGHj3eCT4vu8mp2BMMbR7yXhvagF4au8cUs56Rk7",
  "key9": "5onyQKrsYGqr8wLRAbMMsvd7WqsqSuKFoXLQfjx18xJQekEedVZcwqvpuvMr8VEk4ufCanm2tYSyrsBM8cJKcrhu",
  "key10": "LEBZNXtnMrHn2g2Qqc7byvhwCTzRtdRpAtitocZ6kW31oZZe4LVK5AZspPQuA6feZvtVNxpzV7B7z3R3XSKtYx1",
  "key11": "4duxEXXzEhCJNAjEMG2Rsw8UMnusM8n2wtM4rbYw5PcrA9Jk3u6yjtQun74ocCde2ymY7dt6i1YrMKp7sdccmzGc",
  "key12": "4TF4QW2JCoKXQrf8p83a8i6wyBAuPatUjUzsDHLEZjugdZTXinT27ntJ6JsYjAhMCgyKrTumcQdb4m4cLNYtn4zJ",
  "key13": "mAkK5k74xgWLqPkwyNuHReuPKE5FiwMu3VNfgnC5YV96eR1Ha8dhwvidP2bnvxj1C7w4adRzgb8MoEBuqfpZpVQ",
  "key14": "39jw7yLwzZs3dtyCGnUCBeZfz4edrtZb1BQkNJ2wyZJ52xTumnNUbE64RVWuDGhXuZWWSgGrMqoEsjPhKqVFvTci",
  "key15": "28HpymFpCJsa8Vh4p4BGqxhw5ytJvr1QdiN4L9Q6UnwW7i4K3RS9yAcLauYZeUCS84aNvsWWHjvNzcUNLuhJMf5h",
  "key16": "5rEfs8yK9sKphpEZqTYKeC5bqJdt6XqZQJPV9sEvugaeVoNxSNV5sSgTiMeYa2LBSwPXJYaXQqsf8AKgttNKn37d",
  "key17": "56J8GJtXU6985pPCMTfPjfvvHJEW1MjphBz1b4wxu5ey5G4wRQTgSjBYDGD57rwoCpykfFifiTZuXdHjVPeCbKyW",
  "key18": "4XZ5QgjENHXufXoTPjognhTg1FySLLJbkXk22Mvr4aqUK74ZMFHodT8vfeVkLdW7PrGjtRbrQzWPLHZ18n3FTDhN",
  "key19": "3s13BHga6QBxR3PEUL7wF3C9fAvhzyoEp3YCxtEfXeFCFHpuU5h7pta1SQGwYSQwxSJr5orC3dQXkGncW7BCLv2",
  "key20": "5u3tc5oZ7eZ394cPsFJMhN6SYWEJzj6qCNUcujrAYpwX2PKya1sUGf8WYpiGeo5T1HQ4sCt8CqXzEN9w7SpFpbbF",
  "key21": "4PjPjyq4sbSvKKLPY6RFzhrEDnEJBmyhG1dA5CPQNPMccyVtGADqMrqWoEeifsym4jhtBpLSKH1LBRjHHDLdac1x",
  "key22": "4Vi1J7VGscWsA6dBk82FG4vuG4UF5QPDCETUReAB6nT6ZVtLuyghY3wpEdsbBf1UvRXAWdajWAeTbVNH3xCTRw1X",
  "key23": "5Ru8ZiiD6eZhP7SkNcJ872PDV2Q3jTucBHzxsTohCL2YExnNj3UWpYvSrEXT8tgVwgHuw5heEr3KkLkJsAHXdi6A",
  "key24": "XcyBsGmRpWXifmvt16a4RRp68XdoGMT3n2ETSe5CjF5FyyhGm87iePaLXPoQ7QqPDQvFEieX9o6pZTHjv21rftP",
  "key25": "32vxVxcQsFNcVSRVF2xqexEhUtyz8hF9qvuaF6dKCXKJVy3kcwUgBGYFJw2bJSEjAUxnFSqjka85EURiqbe91Eyc"
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
