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
    "5Lmxc9eqvwJ8XNiwmy4cZEZPN5ejYYj5yWRqVSwgbPUmring1BuKHmBSV7E6QK1SHU3Arzt83WDME8LrdvAhkT8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jn7yF4eWhbdqeyw1NkrdsjSTYGuXUXCHmsL91FxVmsEtfGksv1xFs77WAxfkQzhCBvXCzY1oFdVsynNBypgGUz8",
  "key1": "4JY7oRZkURvYn7U6KNR9LUL3owtvkBpvxoGJvPuxh7LLBw5Sf6U435mUxjzSTUsT3Nxe39LCKcrsewnbHQPsv22k",
  "key2": "4fCA1TgHs2VQzUYvYsQmyqTz1Y647t9XMmD73UiQhxShLworq5DobSjbzFyJfZ8sRBuNtjohTcwdKRwDYYnLnyAx",
  "key3": "6FM9eg9j3kqA8VJ63MokdmjNV6uuDzzQm2bhENq33gjffd1CwmN3VMzNuBrJGGpsbattEZK7ZkeKMrB9feRDMkR",
  "key4": "3Npg321X48EczeTJmaQkZFuyMNFhm3F1UvSGg59qdDZAzPVEnnvYAiCogiCKxftP49nfAX7xxWzjpnmW4B3128jU",
  "key5": "4Pr4jBYWEuHbz2msMMWxmfeL8mAdW4D4NcCpk5vNWCiiP4vQz8sKttdyo9RuxwjoYbni3qD2iH5xvcEb14LyNtQE",
  "key6": "3MzizFB57cnfHrFeeCqxzuNuv9VuD6QPibNnPjEUEgmGch36g7kRfwvbYHpiRTWg3HNbnPc7vBhrae1NgnvRpV2b",
  "key7": "5KePhC67yqHHnzgPUhD793N3rkmp2tYfwYuQN4fynR7gohN8CYAWbcS9mqvQWpy9TTqPFJLp15BD6p7i6nBz9KuZ",
  "key8": "3bzfmZyU3LhZohw7uQTaKyfcUomQo7VkbJVXn3pmrcR4Fopo1iutR7RsNRHnZkazrHnU4fsbneibxEuzMnsduC9f",
  "key9": "4vq88bJd1WLrfxpZtsxgTcznC3BCJZBLb3DyjyWH3HwoY84XpNW9U3XsbxyRN7EiDsq9LhaRNu8xqbhc5t5CWSXq",
  "key10": "25SCk5rAPH249ipUgALDvwcjwvPpPqkmHN2Qa9tzh9udmv8bf1axu6s1AmaGPg3mfEXthdv7atWaxMeXkb2HG1xH",
  "key11": "3oDfoQenHwCBgUnnT4u5tsTUxeuhzVTbuBpKwzr6899nkJobEW6gARD7KLX77U9NBhMH8RFKjHL1yMYu5viyYCJV",
  "key12": "NPYELmQKscuQQC2pxtvWKxvALQuZYfbs4MrfRYtSeUMgVun4Mwq2aZ1JXAzcAyJZiFjRbEASgTZdgDRw88J93jW",
  "key13": "4uUttfWeyxVF7EenerqpS5yvxqCNEXpeXj9J58KVwh7mdkNsvKhYM4PEepYQXe18b4kHFGKkBuF5scomca6wDHcR",
  "key14": "5ao9DXWxqGZPjTaqpJHKGGJhdekQivdzrnV7vgepRBoavWz9ovD7gnsdL3BdPVf5e4YQXeYCbuPckzpzjot6jCyJ",
  "key15": "ZsBHjr9ukgQGDa9fFvWHWgNgGigc9oJUYvG1ivUxDyMX51atpvmqLXryT45RnvTmEmWDGoDfj9K7zHL3hDcG5iQ",
  "key16": "2LiYhPYSQbVbzuMT8aWFL7UHhGE2xXiaCWUoip2Edn5zKZKHfLBhSGJ8bAWuufPhA78FbXcgAQizmd438SbA6CL",
  "key17": "4jUQ1GfVM5kEk2ewx7raoBgCsQR9SYKsbJGVUt4qkXUSfuTKp4xPXFAJDaFpi4eqZXEPTA71XcvPB9Av8D2J1aj7",
  "key18": "tpZNxdB5S5AG6MikFDyHAuNj2YexJ2e5B8g1xGr7deKwE7Swe8iHUxcu3hYNcFUWpEz8nTJd4peH5xanjGiDVsC",
  "key19": "4GXwCMrWVYsaWtaweFXV5YvPFZgQETE3rtDqMh2maWB9mRm1c53UBfVXYW6nrpeWPqyFFDueBc39tvuzNuwDy88X",
  "key20": "5wdaJkWkoMfn3K3TG9kWqH3xZJEE918P99ibuSrHqCeRdRNbCHorqc81NbGrtzCJiQ7MZM2cCHu4HkMMmUh5f1at",
  "key21": "3BXaAEKHk4wLhgJNGUPStmpWzuPtMHv3xaNxqqtsnBsAvw8dVtJCeyyT7yQdF2GXrhcqk4XvPgiuDhXBdh1xwACv",
  "key22": "X828TcJ2SmiZsreqeXhW9mM17SD4tzHp7PccC8qyAJ8EWNJ6ekZsn5w5iXrSNbwevsasKExv8ZVBPP9kNUK4Ztk",
  "key23": "5tJxhmemTM6mHdRXZ8TrzrPHCXJfnDv8ttN5qb7DhtDZek6QbDD7NNGTtq7Ds9PTEy84XupHaZBkjKTbNTEP8mNP",
  "key24": "3dcNDaPxri93rwJzpAeHwxNWXDKJVVP8BJo5wN4JZtrgEkSSTE7E1UM4b3rfhda4cYiUcRtD5sim9wmHkqvwt4ja",
  "key25": "3CeTtvDrvN17ucQ6j9KZMgkHSmKEnvCtPy7sxQQqde5MB3qpQf8Xa8hYkDXLje4Y6nTJmvmo6vFDhGJBXNqaQb4Z",
  "key26": "4vhSSHtAZ7ikqCuhEXPeFAYBd38HK5XWj7hTw4tNBHufVxx3fErBSLoXnnZQh4XgDnDxwxzmW6o4BfJEt2wtUi8B",
  "key27": "2xvDGo4eWMkmUosbogzQfG5Y6gEuWArEW991fJxhudvtvcLhwiApSWq2Aj3Tae2vFY2cY5TD3ogLfkMUJnrpCVjL",
  "key28": "5aPAuzwRrPXGKCmi4eFfemqj3hXxH5Z5VJTi3yEyq5bHMLn8zHZ9EPeasjjvrgGZ6sBX9bXZjsgrzp8CZW3wEwgh",
  "key29": "5EDR5aMVBEsmykzuLFSTe1osJR3Vk5Pg2Gm9RojXghHcVSaKbU62PD4xmAXt67Vne1SAmU1uLWcFZYT3osC2FKp",
  "key30": "3bs9vBm6kSdB7maoQa4HiKv931BxFkQj68xCZ3gNQbyk4umdte8pZy7hTagXQcudAShPX87WhrLyQ77LZmb7jqxi",
  "key31": "2b2Cc53aSDkHByryLd6TDTwUMePLfvwgidSEhUWqVm5Sw6d5P6QasWK7Fr6qnv7jwj8mEP41fyVm2BeiNStvLH7G",
  "key32": "2ENLF1xfyYgkSMHAq5e7WiqiKzZSEZJc3DejgjwWs5gP5ZbwUsqWs5i7xebdGzqWikLworwRDcsbBrLAKovJCr9x",
  "key33": "2Dds24Fnc9JYKSXKPp2y4CmEJCEZKdGCGpLJdUFnLZ6B41iYkajNMGfhzJ99zzP6ogBZfQBxHVNQaEgMjb7VY6L1"
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
