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
    "4fuMZsR1Hizi7wwADfnxu4j8y2NYvz4LK3j93Eq5MNxM8KKYqHkZ8s41QtNAmP1g7XRaJ3adi7meus1CXg7ZhZ9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jk7vSQvnu4NPTYQEoGgTHaCyr9WSKaDNpuEwNRYMA2XDAJUcVoQ6gQtCpN3kx6CbySRaaDzH9UpvYZTPUPeZN1d",
  "key1": "4WphhHELYyrnx654Y6J9JZxoeaYJTTtquvCFybFithzsFgdJQ2Tvoyoz48PM5GQuGzuHGMRq3frHDS19GbN9mpuT",
  "key2": "5uZfTRjg34KNXYn5m5QCNhatFifaCD8QQW59Fh8PAMVUyDUFtdnVfKVRF6LVQL7f3YnbpEZ4ECe3N7tARXd867fa",
  "key3": "4t8MFhnrz6qQLEPbgs3TQ1ugdkgHv3C2foCuQaBDEhgefe6okpUPMuPU6PbjAJxi4ozH7AjBUAanopiJw3UkWrcV",
  "key4": "3vwrnWQpSL7qwbLPr8BMMVpDYekPyXwhUukp8kjBrpnZBjPrVadCpX3ZMuyTAiks9wYy5ZWiANDLsKuNNDvY6ZEm",
  "key5": "28b7bM33xJRtzJWEua7APibvjvfAkQeCDxijMxTchgJhxzuUH8TuqXpB8ZtEtc888xYxjGvM18KUR2FGSGogmLit",
  "key6": "5nubb7g7d2cQmd2eQbzmJnLnmSNyPMP1oG6LJwsXE2mh7b7R5yqTXXni6dbaGp97sVUSXUK8szFTkiEsKhH2ao48",
  "key7": "21t71ofvzwb9uT2WhQWT4YjRffrbtQYEFkKJMQ6sPZ3yjS9AAUrkC2Je9nc3ia9AwxanmZkp7VEa9netf6Zis54D",
  "key8": "5n2vXqjZsFmUJ9fb1FDdkKQMrDUuF2gvUHyjnVNiat7e8SpXungFYaw6JBgRb1Wdhjs98giCD1cRyepGZ9S9aFbm",
  "key9": "4Dzv3sWvmCzFHgkXhLEzVVBWySV1fFzbSmSYXNRyFk9D7v9hGFUk6Vxf9rKWn8C3U9z3xesixxJeXiq2gZpStTSA",
  "key10": "4SHJLxa3oMvFd685XZTe7e1gYWtJb8w8xo7FNM1Q4n2jC5uwG6ot3Vje8HP1Hv7XU5M6BuwarfFDd61Ztr2nJ8b3",
  "key11": "oYfJ7bpxan3hXE48ieduwENbLARj1QgZtXD9DezPfqsHPSpMYe8KoYYFzo8GTescEDjqhgxPU8o7HXy5rKF6KfA",
  "key12": "3FWefQdar1vL1jSpro2ESRj6LgsvodijgCqPZysQNsVnfN2RWmdA1QfYYpTmeSbh7LFHbDJWHiYbopSQwiNcj4cx",
  "key13": "bKxgiqeXutVRXM9EW4JW5Jz5SSJYHBX1r6WyTGQkZhbZPvjkPWXhe5MXxt12j41gn2ufDx84evyJxDZPzcjHE8r",
  "key14": "EQ7i7r4BcPgv9n4XzrX8ymmJf46c92Qi7SjVqg4fN7Sb61GwDEZNMMi3xBDwpCZ6WCrq3xYe9hqaDUGtcqBEySA",
  "key15": "HvbzzsZT6ah1kSoAV7xsYdXDnLDFzPPkAantfejKSATDdD3odWq1cYWT2JUMfGThHces3EKSoX6FTsnFfbGriuh",
  "key16": "4pPDKdzNaC2GscJk2CVqwtc2cnuVjmfUjwRBkKzM2RV8CuHZUCmSLVUhvGbrGU7546kcZNvR11FPs1URr1xRxpy4",
  "key17": "3ngaYwwCJ6AznSYmsTc1pwugfnJNkMJ6tkqb22zcYVUojSSdS9MULH6zR4J7STD9SzUkFZZ9KtvbypL6CM6hfcKZ",
  "key18": "52Dq4TuRpqKXvdMBdhMcgLdPe699G2iQ3tyAHkXp2gRcW8sn5iu37mLHcaAvLXLWLQ1yZrxBZcPrU4pt2K4AgR1j",
  "key19": "2QJanQD6hcnkqPwDs55QUNeb9JrF9aLNEssi5iqzDbTbidij2AkD1rW7tu8LWhXPDyZHBE42F9v3Jav44nhNC7Z4",
  "key20": "2wnTCA8EKLvnawJ3A8XLac13e7mbDmMnU9tequhNJ2BNdTVMMBzHo7JrhNhiPNJasFtxskXZ9sSuPytn13U1H4wB",
  "key21": "5rcNZbpeYPBhdeV2Pis7MZCrRxC1Jw6i6A4FCMtDMKWGbZzDhHFNZcUXHQV8fVXQfeL9y2TjBFHV7C2HxYPin6Pk",
  "key22": "4AtMN5VG85CDcy5Rzvq4N5YLPJKRFWNyKvFqQdBYBEkdjmfE2YjRCven1dR1sxex57Lq8Z9rrAvq6VMDhFTH81VL",
  "key23": "4tDffaZfFrRPU7WXDMS4c9QTnu8VkTbLnVCmB1zoXDXZQ7xXAaakJqrdUp9DoUVre3NhrXwbm1p6Bsdq6JiRskkp",
  "key24": "2DgjF7UxhxPQPXDQJ2T2NZmJSK7P9twNU3vnN4LWE2pDgScCnvgsVKDgtLPYM6qmoYKBcEGmpPJuG9Qj5DUpe9NA",
  "key25": "5PCxpPiorphxLLJF4mMoW31wHEvdwdAmQTK18mLacMQBppce37rYBXWPk1A66q2VcqErgfjgxLKYdp3HXpb7d6L7"
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
