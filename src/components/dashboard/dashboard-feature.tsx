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
    "3pWPgcGvEMJeycDeBu2oURgEncxeqAPq45YfuyaA3Mh4zbjfFZhiBBwXqws4hQJgBKHN5GbeJMThtmZ31eHVqxA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZQmjawE3QN7JB5iikAqUt7MdXbNznYcrHq8mNZnQQWJsjtSREZkh7vJmkE5t7qz7Vt4iwT7rLotqTg6fK4kyW8n",
  "key1": "2ojjyp6ih2Cw8psQBxkrD7n1Jv4vmB3Em5kL4TdFSkM7PiCLAVHzfmKvFvUVtShfvYY4ASHUacHaaN9ZY3bCgYwm",
  "key2": "4U3mChx9Wrs5mo5hQTXPtnVQLpd8SbGFRwpG8nsj83rd7Uz7WnsCaFSdEPvkKZaHemkSM5N8S4gmuuWF2Q1CUrQV",
  "key3": "hwifd7MpzQnuZ48TrVpxxhcwHHGebB6nWKrC4JzHK7gZDNvYbxZ7N8s8pxrX7D1Uyxidv2usAFmnrrydnhTXQD8",
  "key4": "vPK7QzYchzDtcfzuTJAiAGmBRmy6qbxdsFftMZYbhr3oxgKvA3EU4JZorCj45hwZnNc5CDnfVZZqfUbqKuT3V4A",
  "key5": "5x9ET8QkQumy4gejktQrnx5afNbcQkKcyC3VBa6eiYBFNbVjkW3RVR4xxXYpprdqzMBKPRhJUYRqCyNJvjt1VRT7",
  "key6": "5PUXqvoz3DR8Py9A5BGkbFvcUWZqJKfS4gMgs3BAQYRh7vruDPHHz1i9iAMN5ZN3XD9E1aM7VvevghMyniwCr9T6",
  "key7": "2bhVvus6j3idYRyrCGgDGPJMDkMmhzvb8HB2ddrhTDRMGnPXyTXfjMBzZKdaW9KH5h35atHqdrh33pPYZpNDTQXg",
  "key8": "4aoZfhp3ipyyGsVFLqwZi2QEryk97ZvF6K3qLa3o4EQjUVLVuku6SnQeuDaNRu1UqfgPwKGqV6fDj4byvy63GzRo",
  "key9": "3b4HSoGTKzYb9PmRKPtUBi4meC3v3LntJ5DVSJ4M5u88YEN8X1GDN44N6WkRxagEUr4u9q5gqiAEaGnNEmoCtrcr",
  "key10": "2zTPAAG16ur3VE1tVsL3reQsEx9UBPDAKw6HYisG29V7j8YRexG1enKdr2Bmx88J3dPhEZiDA4XEhrTPyo3ZSEDi",
  "key11": "3wiDV2gEgUM8Jf7afUR18CHitW8SF7jjxL1m9RJa6GVbCvJjgTKGEeeYikcX1wtarwJ46srvW3PbJbYnRrD37jVi",
  "key12": "53CePSv1pDwqXP1mGEbXxnm4joBHrZ2zDS6CbFCnPJBn9GxBhBLokRoDyAZa7o2bwUaNDfYJyLzZL7wmhV7uigMi",
  "key13": "5XfhsyFSHtenwk1Qb9oghWZo2eL7xneLXezZMnSJpRm9VhWtDRhNj6vVUAMPQr2gVeCZtxDJHbBc4xzP2MDMvgss",
  "key14": "2F57kdbkpiXBxoqsDBsxZgg1zi3fj4dfifiDgqD59XFFSURtCz2X3Vrtw2dR47m3MK1qFDrAAZ9ticgevC3GpYHf",
  "key15": "42t4FEkmMpKFZpjnztjWJfn74fGG8qqbgxVnNGWPbv2yT6QJqvUaFALt86TXKbc3f7rNVBoyirEVpw4HjV5jn4M9",
  "key16": "3YdQmpxPgSYyxdv7L4BM8iUf5nGKWQ4uvuPCMQ52dNh9qgxScJsUFgmyY3PtuC4WkKXtR8oLYhHHSw6gUES5ecJn",
  "key17": "3xtrc5Z2nc6sNR2yQaJZtpo7U6YqBNyVB63aS7AoQ4WyrboTY44nd8pfA7bvMpRobTJcQcNhsNyJduNMdZPVW2Fh",
  "key18": "2cy2wAZWT2ryjvazauU3RUs1TXj3EPTsHh2gmctxUPdcCJDSeocoEPTDqfJgq3rZWdASkHnj7qcJnZ4a8PGmrKGS",
  "key19": "53D71o7Vv4845avmu3fZ7pN8LaGwPK9S47VxWDAXXaj31CdDUpyx4ASiPTKmKwpbYVEvwMzGh78Ru7LaV7KqUzsJ",
  "key20": "HXPjbit4pxZdcM3Wsa1r1HTH3MuYk2dN9fUyfGM3zHewoDdsUfQhUxXHSndCKxNi613hU1XxSnZbiAU9MuJ81u3",
  "key21": "Hev7BY4uU3rvSrayh7XV5582w3V8nejLvrHPc5dyQzqPLyrWmohgjLnZeKzq2jwgxoFPQCrt9ebN1pepHPyNZYs",
  "key22": "3aEDCU64yso2xirC9sXfdAvFbwbErg5ni5wekHe5uw2ySUUwBvjRbTeV6qxjAAiWkgu6GRgCpCCRML7NqHaMyEk1",
  "key23": "4X2w5CSFsLeeLpAJt1ntgqqwyssdB2kE1bRQ5wK8FgYkx8imoBJibj8P7p3dqMGAZja9n7GAsaBUbNva9tFiqTqB",
  "key24": "mWXYmDHGLeTRdhz95owKHSqQZdcnKhzwq4RArmVWgKeG1yDWg9vEGoNaKkqWwTuaZtC9i8D3692Fy9FbpKtZe34",
  "key25": "51HjTrt9k8bdzYCJJ6gPqpTELcrZLWoUYW4sve5xvSA9jqg7hmZ9ZQJ4yN8SekndtwiTWLqJJVn6TJiyqFVAWZ8B",
  "key26": "Z3iFyW1n8GJiDuMKJn84thSVFXVBc8AdgxGKKvq2cfh4aGhgj5A2qLNDyaMbbDycY1qv92eBPpmDG5xFncrgdrs",
  "key27": "4iSQU58BhhpMvD8hL7Aa2oLL5DewoSHNca65BbeU9WX7xPv8xqUgg5sszUgPjYDTjMdgv4gGECvQGQhDheEJNcxR",
  "key28": "4rUgDH8YLgaZVAyWVickCkDHsCXtDZxSwYtLGp29hxbN2ABTi83pXx3efq1ChosJcqyrG77s7FtEFL2tnPxppZDw",
  "key29": "4kZ2C4RCPsXSDYT7jxDW4RUH6skovhsFwWNsTQU5X65qJur6CW74p3FPJpMjTbrtyrUQZRYwa7vFBwA1Uz53gm1u",
  "key30": "jnM75TZxvzSWqPKE5KrZ6wmiVMMxUGRbuvqPxHiwEVELLdtR1cg63dRDeBSgPwSQexHdR8niCLGVrpWx8jvHoge"
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
