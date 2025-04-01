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
    "4Ucia5zbCUk5p7mGRMWzErJGkwYwBvM71kAwcZ3nKKJQTnVxXg1YYVnpWXDML3CGRzW2e6BnfSXqcBFMxnuXG59K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CvGPee4LrQmWUKnhHLsSS2VvEo6vkgC91LmK94LwguEFo85oBfKTUGH3vCwG7X756N1xEtSVr7B5gL6aiMxZTDh",
  "key1": "JDcdSL3a6gEV1G1o7VSa4ueNRdwB7q7SkiFXcweGCuRURZvyWPF6oarzJ17ChFuXRg51GhqofjNsFmWNzbsbLNn",
  "key2": "3xACqP5rFueivUsySdDgHkm9HonhGWtQbHbbkMcz7c7vAgphFzzTcLhcbZeZRpLsw61fLqdGLkZdev11NBUb9Ggp",
  "key3": "2An9EqTC18iZQHiFtaGSzM3ygoRmLkXxBfAsP9fwNCb6qkCm19WoSovjKWxEXpXoXE6v8SreLt3nJDjuqKDxksVW",
  "key4": "xjX5QDBUpMBczAvvYbPmftHMAYhoXawPEyYvYLY7XvARiNmEtdcuxBXtaqzJAmzfeYfFS98tYz1K6vdBGd6ct85",
  "key5": "nT6FihNwqzm2XWwJEQxbFyyUE7k12gwZoULWQUkkqY3PdXrkAbwyyH3nYc1una7ncixT6JGWvPTyUty6SxBNyTo",
  "key6": "HkFnrUsuUsGZYzUrGL5YG9K19jTEpCypHbR6Zv8KGUdUhsfaPoFEYdFHnGkbRDDa8PbiyHG5MsstR4ZixdYKGx4",
  "key7": "GXov84heZeSa6nA1nWUVbhFNYWG9t42K5N6YPk2GUSdjQm5JBs55at4Fo61M5XZRmK4pvr3JHbdAQsaWbsmVmYG",
  "key8": "2BKei2pyELTi31WpZxtwDs7PYSfkyxC1ZUvv1MYX82dGeSEuyDMP1yQoV2vuMXAuEzfPCn1uWuW3bDidb9dk7uh",
  "key9": "sybe7S5C1PaN1FxnxGX6m4PupYjpuuhUZzxt6RWHsY6XKDb2PtCVEf62tfRJPTwseTgaE5EqrkGHR9D4FvH6HLj",
  "key10": "4fi5sPDP4KxuNeEJN2R5S1ZDeGWVG1bDmxwfJFHpx5TBfBeaU88wdrzCQ6TfuxeUygDcUREhcPwTnP5rksnpDndj",
  "key11": "2JmT3GhKW3kN6ip4XgG5uesnMe8Xj6zvQEcFo4ECsWNa27ZtBnaPqm8wPaWQAsD6S5jt1NtHsQ2ccu1kn2FW4rkt",
  "key12": "2ToFTS8SmJEbkKzEtuqPFAiwCcAeMyCK7p3h5nAYwLiVFaai6gy4rZKXQ34jvFhyuX46GXGbnaRDMmcST8pMUrVr",
  "key13": "4kerkfuweukCYwqAfyzjrdEffBQVURvY4qG6MsaHHLoH59hqUhwkyKwPPEpWBE6Pk7Z54SpqNFrybBkPhZiWDsQq",
  "key14": "4KCH5b3qkWecSQvhAGgKK2YofJBu7FnFGgh3Aodyvzd9Qju5N5KxNEpzCuyDKUcXcG8EzKUGRs7ExrGJHAtUgJUS",
  "key15": "oGh3iiURYczceMeNd6udjEWUNuMfxAWEBQiVqHqpSHkMWxmkvaP4eaQjGwk2DvJArqZwG6KoRZq9U9GAxGocssT",
  "key16": "5MYU7XWQGEykgu6f6kXBnDhixgr1SCL6NMir275UdwCp8XeZrg3gDKyNcR7urbvk5AEJ5ygUBSJQwdsXsU1GyjEH",
  "key17": "66NGDmiCwygrJXXrQoy7cSiqZw5mJn6ge2vhJkWdFDXcp4uhqTqn7qNxj6vL5naAe5WadDSn1FdD2hjPfBmb1wqV",
  "key18": "4ZxqvPEjBuvQNdjRfLJr6Xsawyea3QGwEoGLznxSAidz5Nipa7W1Ew6VxKgH6BAgH78FCxmE5NE4wRAaUfhfarUg",
  "key19": "4GdDnX72dLnLrFc3Tk6RkpJgvT8z9Rh7guYeYCkfHQP6TxjhWD5QZR17zJ7M3S6QiP5JqycaoFEMb3bA5DXo43am",
  "key20": "299z1Q7782QGwTNJ4YZB1Z2DwXdF427xyWizMdEG66gnyZfXGWCSu4EtZuvPXfgxLBuxsjwVnmKUxcau4fVJFhF2",
  "key21": "5xwpucGTfnvGWKvhsZoS6GT3csc4KWCQVCKHHwRkDuQToT5B2cJFxHG2VYWEAMUPuSx3PKS4DKnKwyPqjsVz3gK",
  "key22": "4zJcCrD4wxTEpUuGMRv2eQ5NCW2i4YwpdkiaYh7xHGxifSSjE6BFeyHwsFksp2DPK3UuG6yznM2WAkKmkXdSQfvr",
  "key23": "mRKxvBHKgyfzEqmPNaTiJ9UQ7eybZN23DyHkdLBwdQqJPwuEbSuS5KvdeJC8hcvvKfGdC6FcCfW1UXGUwSyAVZK",
  "key24": "3AoqX2K3LngmFwusySHvQNQN2QhELG3YzPFam3KkPLYm6XvgtQFgT11FjHaPsT1tjDnWo3SGkirQ3foL2XxKTa5v",
  "key25": "2KtVgFYRgQBeYvZVBrGU3vc59aB4gPjgXxo3rmXCy15bGWvVGLnpXuCjbKnUkuM6zk5rDfcsFG95DTRJoCQhWrDU"
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
