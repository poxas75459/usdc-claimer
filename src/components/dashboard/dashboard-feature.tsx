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
    "2B6GvYS9y7S8gMrFDnvJzdhHG7eDNz4Zo4BPDQCscw6r1Qw3wnsUq3uK8GG4a7iBWa9pbvPrdH7GjjMUJ5LhXC9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KHKBzJ8M6PCq4AeQ6E49ngzAWaGDgJMmUDDvy4VkN5TLg17Am8dsHpTgLcfERQdUPUDwTnH4kpStNhwN69RGyqw",
  "key1": "2C9ocAj3cS8YPpdK9nzU583JhVioiuUHjPkn2WtfYmQTrSL15rFo9A9DpBfWzNcrT54mYHK9YVdzBnmEvA88ZtwX",
  "key2": "3XEtaswDvxKNYDxuorez8FAw3zkChhz3Mn23oDDt9pjTMgHobc3897xTAMMRQPGqavcfWHVWMgPryhoMdb5XJEmR",
  "key3": "tYF54NheiZzjhUoUdLV4ojqcPBsjiPiVBZX9FCSNtAsBoXk2vVXJ86QCyy2YuLopoTqNtMpAk4Fe2hy2kgtxQAV",
  "key4": "3LEgJ9ptMuS6f41okAzcvAcZhrbzRuij48V843CWtKZWBa46HEnVgvEAYzjsBpsgzahDwWz5uJAeLUwnFafhhQ3S",
  "key5": "4kZq2YKyrVWqE3egJXdzNQiY1sRad5REgUAuUgtV6cGJ1Ho2aodzFc3KGd1fHK5UxGSJP1y4Xr7geFjBApwc5CL8",
  "key6": "jMQYprvS5gK6DoYiCn7zjodStBSiTBJj6aZgkUP5TQvCZPXrU3efcWV5cWW2SK6HnZVcDyhQBSoesu17HVyCsVP",
  "key7": "4XeGL3wY4iexW1h9sp4mgPA5R123AWe3AM44VZqCXhjvKuU8jgN2wYGF9feFSYZF5qCF8SNwyiXhbfMjE264iJof",
  "key8": "5BbyeZySG788594CSjBwGAtS6Z37dbBWiuAH2zu9hdd8pNRc3XZ2XtouB2j97bLNaN5oBj9RFnhgzMPRSGFywzGn",
  "key9": "56zRvqSPkSxE1sZmUbxbpRwzWpMCyHyUpQVSE3fqSTVUnZTfqGpy92DVh7C2FzJALMQXPNM8t3BVABpEbgRho5t9",
  "key10": "5LSTPSQ2aGzSa4nDybhcNjwYfz5tKqfez5HA5mdDrFNK2skWvDnCS5D4AUHfDdV7aDkbN2jxxaV7bpMYKWaWRqbE",
  "key11": "E2jKz8k66s4zgH77GhNvUArh8dxzyVXok4E5NbpQB6etjDRt25ZZPWHogkoXh2Krf7zoWhotoy1F82KU35Y8X2n",
  "key12": "3SAC5X5jyXskCSwiq7WPwpr41MnN6Q8PUwoQvkYGrLayoMu4XL6prgquzfhvjDAbJEHsEn8Y4RgfNtxJWX4jDKLb",
  "key13": "43zay3UWsvyoQJevTADuVuX9AL6gkP2VJewEcCBoyMfLvcnEAb7C2zohpAE8WBXrDbgPxwYq4m1YJeJTfLn7qKKS",
  "key14": "2MB2gQJ4FaoftZGDS4AqQFNkKMUo7W3JD4SJsr5sywjaG8cZmSMt2wH6Fa8wkcnnwK9WiTUZnPkZCB8ctFcQPZof",
  "key15": "64uBibUbGJ7g2py4PNkYDtcZwCYbtTAyXMe664GQfP3ta995HWJeJbYWJL48zFaUMyDLKjfW4RRyeDEeyPUSmhm6",
  "key16": "4oLjxojvJS1vsZq26RQzmZ9B66Kab9SdBZxrEiups8TCwjPQ16TN4dSu6xepDAMRUNDpbkZxfaqoJ9gwafj15b4N",
  "key17": "3AFQ4xXkMVPeqkrqLCviKP9tEY5xq7agkwM2yNgrGgdPzxq5b6rxmhvn7JR9Aq7TF2i2uC1ztVrbKy28JkcnZNjY",
  "key18": "2hBjFRHtcf2K24YtWYRiB7U4yNXZ8nJkDB1ndABSSroxkWSU2jkq1A8k3bCbcFx2fh4J5De9KnvhUSuXuT3YyQcL",
  "key19": "5cxVWui7aDfXeWKbj2HtDXF3EEyGo1Mya3EyX8KAmeRpcCe7BUBkrVvwEWJduZvw6kvDcja9e1peBJW6xUQ2LJzX",
  "key20": "deFa5DY8G19bYThqNBjm9JwR5ndABe18Uv5FBQfAXnjw8K2xrmohBbVUJAY2bJm1pKEWgB6X5eyiJibzFd4cRzp",
  "key21": "4fwrXjw74PFPXrjUoyvsMv5Z9XfUj8r7rHcQmc23MU1UQjGie3ga2fQb74zhr4CfbaELhfVbSRbe2eSD1cksSrMo",
  "key22": "QMTXKvShves21Li5UnL2Yvgh9wyhLxoUYZ38sMYXH5Toghhx5gfSk6vb4xgQfxSbKQgGgHwxMkoJcPxfywwB7XW",
  "key23": "3D3apYQBq8pLthutNdAqDfGyQpQB1MhWo6pDUHtZiqBQcX21EehAmAJu7QsP9fJe5xV4XCHCzH3ZFTTmYqPAcWX9",
  "key24": "4kR9RDpAzWgFNKmNT3xDzaHGXdqzdZzznB7yuQp4ygyfGG2f9pBomYCMTP3zvYcVW684Ph3gUNDFghEz4x8jme1P"
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
