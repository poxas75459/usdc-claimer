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
    "3oqQYaMy9WcJirjqJUUDorGrWDAQU3sSgN3crfdEKYFyuCKELFPMXGogoyfMLmKSExFo4uwmwynqDWJe6gzmwScb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ypFeJ6FFDrz9GwurWn2aMzifjoFxjUGo3Q2PZC1gyKDQvAir9iJwZJ9jNd7VQewmFHhKp3W2FVwdgmXNfFYDWHM",
  "key1": "2t7ZxRV747g8zns9ZGyF4YFv7SevhMRzsL6RZhAsT9RZpDATNzLhLZ1wzpGyhXh8aXwn8FicvzdEB4aK7RGwrog4",
  "key2": "61tTHCvBvDpYBmhfHsw3UfGKxy6dEJPHNPNwY1WUSe332DQrXo67K6CKpPrQEjPRagmwitpzCumW7PGn6ervSa7W",
  "key3": "25WoX1Zs8wsNWKC8MwWQpN7DR5dzLwx7ERpxeNSDT4dTrshPvUR5enKxfvi3kwDBLYpb6EhdhKf1sp1ro51Co47q",
  "key4": "4c797qG7i3PMgGQyGB4n9f77fwHz2CQkYLc3i3kJz2AmdyBegFeuPp6ijkeF5J4oKbsgEHrNtf6SiMxzgwsMbhto",
  "key5": "3y32RpiWRznVFrpYXW8oFPvi5wUSZFgvRy7j55evrzJqPaXgURwajY6zcyD9uWUxZSdVcKKZ1adn17wYa7gzfULe",
  "key6": "3vkCmTpJBEKjbT4kzXXDYyJpUdY5TVWgnoNTnVKZZrWYSC2ytwojM7ipiRfBjCpSjD4V35cZyea8eU8hXfrScByU",
  "key7": "2Q9UjyEW2WutegNmU4vbv8jpYnm1vcTGny1qJ59fAFFAaoQDARm4A64o19tfTmD5EogUK9URwgmMJvFHf1CyaVx6",
  "key8": "2NG5o2Af6qJLFfbd3cJB2gmv46Rjx7rz33JbXDy1mpxgf3kfWCSDeCcV7CBREhVCMsaoDWguxqh82dWEdronpnhr",
  "key9": "YkyEPbJVjc48dZYjgkzDfQDbVtZ4LdKDir8VHWsFp9eWDRHiHkaDAeSMzrwxW9d1ziXMMUkfwyY7CddGunxWubW",
  "key10": "2rm1cQfqAPRkaXGeujVU4jBFBva7NytcWhfsdKmHPupy5CXxJMBXrdJ8ZrqVRC5NdXxD6mMenHUfZYd7DBio2veQ",
  "key11": "5iFnTLaHj4DNDKd9xMNs8tU3vgYKvdDxijpnGn3cuhwJSJSqXuTjzKnFdqUn7VLSKBjVTEShjqH9SDPEnh1dCuqf",
  "key12": "64WNWtJYD8toLEPMDknG7V46GGU6sd2hRLp49MGLTZgm7428PigsqeyHJmtjtyL4zczwmPiC3UM8vDALEMuqdFkz",
  "key13": "66oMJRrCK5e1HztUurx5b6EXDtoxQkS5F75dkqmJTCc221poH9emnmmZdLYUVVRN6h3AREJMoHRP2hfP9qQvMDeo",
  "key14": "4rHMbCPKNFZ25rh13Gi3k9XzdbMBBfMWsW8G2GiuJFDDi4iByL1b1drGPPxZrCFtJMoXK1F2RpwUkdMBU8ezUbC5",
  "key15": "4DAonvENG9e1LHtEbAhTGvKg8EGwcBDf6WTwwVuCqqKVjyCDcashWzgh4VhdaVxUYgfyXx7E8V2oaNGQWokXp9fX",
  "key16": "4uehLfF8fX4t2zGHsyoEFQDZAndeyGz7c2GrZbRufwbEWW9czjbogAywZXKfdcfd5vCH53X9nJiAgytDFK4GyupD",
  "key17": "2HQV1iwA798f4yL1zLxwjrwT5B8fGD5qQbLjZzyRqbbWT3YtyRncWBYVHYSEex9UPQ3NEyJmUHAt1uNYKpid4a3b",
  "key18": "2gK7TmmvRdNP27WnDaUwvLU36a61hK77RbowSptDbiJEv6a2buHrcYRgG7REkP5VTELgXmt2V1z7gTgXpXHRi7tK",
  "key19": "2YwZJFFTqiUXgRMFBaL2umzopVbDFiEFVQ3F2VqHfD1JdgdqH6AKAeaP4N1qy94MQSENPE4CpEpiZFybBnLhLE6b",
  "key20": "MUrnYZwsmXJnqbXswRWgubdjm7CbMrASBYgc1tzbRF78F3tm1ukeu578XeEXZdcGgXbSGeyHAVmRKK3o6g6Mtfm",
  "key21": "LsfGT2DFSgZo9CoYxAC6jq3WfbCbjznuGmpzhg2yZBrfojouu4ZArx2cfZK4uFUKX2JxLHswSLW4URXQHY1EiYa",
  "key22": "M7e81ocnxikNV5V9ZrNgCvuv4Ud8wER4JxR56KhFtTi237et2ydAqM3QgSLMViZJuSBsWjg6HzjWUB3xACMaC4P",
  "key23": "b7P525MqUQyzi6NmoapMVogvF1JojeQynNfs2JJst9zt3hakBUBDdkRrfsF4NgLF3jpmQVtgfRYbLFAMyCiLVpT",
  "key24": "63w85rBSGVTEX5whDwHkhNNPZGc74EkRDZT1uPKnGc3SSDyRNgtLRE9bH2tCwixRkWvmvzNX27k25CqWbFh7VwUz",
  "key25": "3vQN7YpfJYxsZFyjyrU7k3aSWF21KK2TpK9o8ijYA2nsrBkr5QTRo17sTuMUkbnXF55zUyoccSumktMYP6TgY2kV",
  "key26": "5QgW7pn1mwLXhSGSuVSfLCZkje7rnb9KE2oADD1XSx6RLmkjUL4TqmK51eLcL7eSTu8TE9uF6pY3f3Q9FKtC59ty"
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
