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
    "2HrqroVhF32SFQkb22XUZvtaJLEbfioGGETWFDnZ8EnWEdkxsaU3R1EuuqJhdAQn6RHRfUphMXfhhsrtFKxkp9tm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bvVYpMnassc3h9Cd1KUbo96woJr3sUgs3tfGKDc828rABdSyBpJJp7fhP7oshAsb89wHfK8qDs4zoAXhAvNcxRG",
  "key1": "L3VKmJ7jvRGDzQz4WKht7xbrtGNyXxav7eb5ut1hmYfhYvzTecuTDKyy5DLDytCRpA2uwmFeXp9iSz8MjjHG1ZD",
  "key2": "U4ELXnmn2aBRLSa83V1UZKcFY66cFWKMU4dKWDUbEF3d7RtS1PqJ9SX3XZf3VbpVcdWP3zo5RPNnWF4cdPHuu3h",
  "key3": "5upUKz1rmiiVYZVcvBLoEV4dpftdD93x41UF3vjMSBNqbgzTeVHZ7vmTwe2rtTtbckYgtGh765SJ9nyVUweEL9N7",
  "key4": "3doCLQxb3qM2TKYfEfHLcXic16HAnrhnVRsYgnhAZNq1VFTDbzVn5k3EdvxrMeSKAdVPnAQ5hRCZ77zAGYdmt3MD",
  "key5": "4Fe4SzEjRh4U3mKqDVhozPfVGod8vBVBkbcaT5hYP3CnmTaNcNkXPKbGdTq8U4UJ3t7nwimkC9x9t2YHEFbcGqHd",
  "key6": "2moV2oiwnS95RhAbW69DtqEu45dQbrwKCR8kdwQHnuiuC5DZqjxiBuZ6JUZpRVGdkGqb8HUin6yWQJkGZ7JngUiP",
  "key7": "5oLZxEryDxabNbeaQcDqXFYmhYAD7cvSpXwrG6zxEnzqbt6t3NxVBM8dYTmuMcStUjQtnUtmchh9BrjRi2XKFDhQ",
  "key8": "3Ns1uoBhn3MoQNAWaTx3kgkY7bd7w3SXLTsDGyNXGjparJq6G2hq9Ko5r246GreFYH7iG46QsweJRGi3NqCDxEsm",
  "key9": "3Q9hqXX8JDxnkMKQD4teLLzSn5EJdq4DZMGve4KwyunxJ8cBnWy9JcfnFhc1tFAHrE9tbANBECHPq6kTD9U1zTQJ",
  "key10": "33kqru2Ri5TQEeoXsn1KYUazkM5BgXQQbeknDhM1LdzBSgtTqiy2XKmtYwjrJS5aQRhEB63CSauEW9ncWvqZEeoQ",
  "key11": "3JPuraKFLg1K7C6s78FNRUW1VfZTcWuR9cL1kxDmy3wfeyLZBf9xJqKzXoHWgjyXtBqaac3nvH1dMMHWgdqjWpre",
  "key12": "5hxSDi4quJuTg2YnzZscYAPLgaV2B3skkdpyFBPvsA4qJLm5aMS2C79Sq8rsz6WEZtnpabNk8joEXQjHyyBdGVG7",
  "key13": "67MYAnJQogvruNxmofbYq4UUmD9q7u5UiUBXFd9UQtDc9pKsN6VfoYHU5Arrp63EGtsybouHiHMXt7FpbryeV43m",
  "key14": "25sLMnp1zYf9xxSy2485fDeW6Ez3jfTRDLyro3gZwsWNVZKkbbci7JfQd2uD6qkhRYWys1z9RSu5raUVh4ygyYCB",
  "key15": "56Vdq7N6uArNtPdtC2YVX5ukb64rN6zz8Kgfq3i4JUURVESbEcycSjUq2XaswA1nPLaPnEN8dRJNnziVxQAjfQj",
  "key16": "5mk1wiq4YvrnqkdH7UJKxi854Me1VeHy4Bfnw9kqsjqdggxzq97BKELYHrCQDVmGn45TfxezeQQWqm51jofa9AtB",
  "key17": "2fpLapnHNJFjwGQZrr4PF34u5w83YMhW2QM7fFrSPuyVvfLTPP5Je1SbpiuqGCxFLSdwKn8Xb1toqA1uciSvh9sd",
  "key18": "4KhoSwbNPJA8bDSKUwQkk9bpBqkScsxX8XSjRPhqTNuvcNfjQ1JNNqp7fifCbWEPDkU6XZ4SN4htNthDAXVwyPyr",
  "key19": "37TTtJ8e2FJN3U3JTHUGgrqk6teaffYMLCjLb9WWEJfpUT3qJ45uNeyBy7XF2qZ6fkr2p7T4ZmnCcsFDrSDjnyLy",
  "key20": "2RLmWBSSLmEvCDuH4LzHGPCe1Cp3rs91hqFeSyHuyuFJ78A3tS5R6yW9LogvJC1joQiopRWKShstKtrYcp9yJDeC",
  "key21": "66eJ3J5ha5meCpz8KVsCtY11Vm3SfvdgaSr35msot7gZUHWrcsPVRTL6VnSPE2D4e3PDZEPcqkSNQisj2EFLc3N5",
  "key22": "3yZhWLvBcqwugXS98t5RzMAbAErC6mJ36Kq9cvM6XKVfmjTiQzBGTRjdmLnh4cEXa1CM4WnzUzsDituCyQknBYe7",
  "key23": "sKEAfEf7Us8UUz2quohdS73rE1S127R3cnuNzEWftTco1W9bqCxmSRkW5YPzpx9HxZWjhZRWKFC2f1CQzbfva7a",
  "key24": "5qna7ESsFTjqSUGGhDPLRS4nbSvw85EdoPeUbU27a7oBxqxK2jwDL8DQr6swM4t3dNZVxXob1QQepzsYPpRzE1WM"
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
