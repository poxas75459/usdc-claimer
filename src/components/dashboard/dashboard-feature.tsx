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
    "Ls9uLwYBq55qXufi3prNLKtQDfBx8b82NUBAP3H2TttQx2koCYaSGGyPiQ7epvhx9gHR5gRTtRUCisrG7DgR7T2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AGPEJyXwh21yJ9fZaFVyYporVQ3Up6erJ88NMoWzCzzv2nfPU39Ato8VnQevs8kua9XTpoFAkEMp7DpaEV44RCt",
  "key1": "4B9mMi4URpRzqwW7tfDg5t36hAj1YvKWuYMAniP6atHeea2W9rVdAu9LuwGhWG9eNMFiGnZ1qaWRURrwpNdPb5PL",
  "key2": "4iFSTCfTUykLRYgZTE3LB1bNSk5Q2jA3EVcanpabEN9pVR7LNqoh2PWEjuDJ8U6T4GDTan7nRLeh3sc6xuxqQ26h",
  "key3": "UbFMuWcKgfLXGFDmcJ6zhREQW4wMPxVNoVmfY8Y8kS3RkYZnG7NEMEJkHv3eF37cNwkCYNNPEZ4wdrBPpq1ysxL",
  "key4": "4sxjCZ7xT8iM6pKCJuyN6LGPZUFwvvtKoArUdNMwA21TFoRFY8hySqtZoqgT6tERGeB7WwZrMgnPNujjdCZCRAZy",
  "key5": "24gVXUmdPNVY7JsPTy9arntwKT2UutbvgnajgNPTZZ95bAqkToaX27n1u4PUyjzAeKcHwvBbU8EvLQ9RvBw6AV9h",
  "key6": "4xbPkiYfEfcGUYrrhR4LS2wxeNgswX5ByRqN9WtbXqZwBy5mMPTBFaxT5VHTMUp9qxshHeaCtWfM6g9r6zfuYpsX",
  "key7": "Jrnf5rn8wA2qgcCCtnymXiVbou3ZwB8epfCHrkvy5ee5oufpnBpztfdUhUQoSP4eCAfMwgMiK4LyocNeWwbpLis",
  "key8": "3BQCN1Jvc8d7dTpWDYCSywi5R8YcXCmJvM43KMnmrKbzetnmgergC1Qjuy7NyKVmFAG4miJRzquecL4zesYqXCWW",
  "key9": "4YAcSuYFu5se8YxqKpSWTYw86F8FJ1s8wHDUnoRFJZ18PtAwVJovDJSNXaCwnweipBPgrXUahD5ixdmD7UmzyVUv",
  "key10": "5oGuXFvQcdboxm6mVCwz2efEyyaDLhjmcWRras6zAv6TVJSeEQg3BNF9P1bz86H7wiNYUthBeKNNyArDsfbDvPCW",
  "key11": "4w3facf3qXunQAqBLciCFCcTnvmeGp7wTrHG9YT1uNuTGjsttuaZumYWn1D2hiyJnUYHgpnm9d4EhePh2SGnfryH",
  "key12": "sWAd7A3YU7RHi6GDWvcmkFWhDKmqra2i1gMUHGizR8WFhUk8ifbEgxf2n7K7xSzKtESQRuvXzZd5cXkFhcRxWWd",
  "key13": "2wYQcHjA5ue3Ct1PyuWVVxAy1Q4puTuq8oMvhu1LVLBmJeAstcELntvZQJ8QpTtrdizepLQ1oPxBZFPwvCL3UKtX",
  "key14": "37pEP1VdNPHCA12jdVbWP4GqGRGiNuiSwEh63igVygNAWpKDJkf9EEaPyMnwV2Z1D4YsTCB6MUknTSJXXV92BNsV",
  "key15": "4PhgS56CL1sGYPiikcQ7sTWfvp1oVKViM6Qv559Tsc2jXyBvzYsF5cDmv3WZSQfqJ4P8VBfWQhBxgVgZtcfu1TJB",
  "key16": "26MuwKm4cgKaf2UERSDgz3j28zswbwN81WV8nfNATDVWrjhoLY62S6EQDcsSPZsQJtSaZgiXXtBG296jXFobDhdu",
  "key17": "Dx53eghNdZoFga3S2XRCgxc7sfxhKjU33zUNY749CifJVgePSZTiXxuyxzPjTfVit7fMn5tVZBkBeeqtdFS9j3e",
  "key18": "5u7RFteZC1QCYY6zPXw7PwpyhTrHBBJfRCWnjvFeAL53bH3SueBgBXGqbVei5XDSBsJqeDZT5ipGhLYkPhcYFHR6",
  "key19": "25G4wNq4zSmefQLv1G69cU5LCe5GKSE9LGfXRKYP3Rq6w3GmksEmACg5ffKvh6ZPs6qg5cWnKSSgoyFuTQ4HKnyv",
  "key20": "3ZK3Tv2MoccZggW3RcxUJqSjpLw92ULkSJnPsFJwvpmLgvjWfYCpu3hxEFFGrrepL173nfZCrAKQKorXUM3NcD3x",
  "key21": "vbbQX5epACXcGm4qT6LpArvasrZyMK6JL7dDSCDV1ymqeU1gGZL1wPupbkQ5oeyWksdNQmiFBYkmv1ab5XZDFgj",
  "key22": "2b3QW6mrAHFENiT7SraeDaJ1gLkM2K6pCzW4QzMUKS2YJqhGZ4ckeX78eYAXmoWWThkgNeWnGkqviXFZMj54xM3n",
  "key23": "2LRWh1G453TRDLqpLL2CTboThW4YGGSiBMSBwj11ZKx5PxzS9LopCuA4NGoBDhiM5yxEi2FU7o9kxCuMMRwwDgtE",
  "key24": "uxTxEQzF4NqY1vTXuQqGB6tQ7PRQFsUS3ZewzsLfpi4DPgv3Z9yddnxPYozJwcnZ2V4TN7hz34M5HQGNqimx7fg",
  "key25": "5mMeLY6MM9k2nv76LNPdMQ5iuBKor7XmLK738PUidxKLmxhrUwgzAuCMYmryz4kFZxCoF33qAiT7qXT8aKg6Bgts"
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
