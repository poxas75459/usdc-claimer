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
    "2iEY55ETVKsnTF1uVmJ6ZW9vGKyr3L6dcVjEBQu8QLpGjVDXgHDRtQh6ifdyoZqjiCMhRhsnw71PSyztkAYpoULw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mprvYhqWr52VkNqe6gG8d5Lu2nTdodRsPboHrP9c4kPcpuvtdsrQBQdAkBCQoY7fBEHwBrz5PjNMjEoeZRaKHrd",
  "key1": "cHYYHjVb1j53wGJgNzUnjYkP5m87aAtVL9bUz6iKpymAWAhRLq3QhZ8UAQqz4xtafdEbZw592yh4M1fZvVMhULy",
  "key2": "3cNAdyCw8cBbiQaCtwEZKJ7qTVjdtrAZmv168FgpYD3kFbryKaJwTn8N44pRP2TU9z7K71mUx87fiJi8RAFjZ5Nx",
  "key3": "qYNWFvQRo3NPvR4zFGaMmZHxyw5ZfjakERDSNmhdMFcd2QbHP7bmQreTDdaS12epJW2kXPAumoD6Zj9611pgwnP",
  "key4": "5qDmHJZiHFbQc7uy4f4sjpZNcM9TJZ2B6p1GFMdKgSUW8qRdZHq4UpDxxySS6QZtsNQVwv5fEwUroVzBZoFuncgU",
  "key5": "4CLSHt5GjLFpgT3uEhVcsu4dGhoWCzG1v9oJTJ6zr3ZHu9biCHzm9u6HUqLT2Cw3eG7RyAdTUyai3abseE2rYVuw",
  "key6": "4zYaybhnWEvNQJn1UtjNn6Af8kD5DXm1EbPLnX3MRApaRzQ1Rje3RgMRBLPSDi9SXqNxCEYuJgpKKAjBcpiGQVBw",
  "key7": "58L8zTefYdWRQ66NLy31Vw7HSHVL7zPK886iuQqH3dE6AmXwXgh3kWL7uTVSZeGnPqBjKJmYzCQdwgfxmTqukqEX",
  "key8": "3uuzFVmBySfh7AYvWHwPHBjM1TGYoL3vGskojHkYDyQNiSr6N7Re4t4K9LiB7PU6EC9cZLQkGRb8axJRwaU4oqCo",
  "key9": "5S92AaUBUSWpLxEXFgLvLR3sRg5byKBNbrkTscDHjFjdmhEswFmcJJKjL9MyodoV2sN9u7uh34YUj2o6yw7oooiZ",
  "key10": "5ii54QRBWZQP7QzFbA51YbBfUdhJJUMyHakSBmPpVLMLs7nFcEk4UxwkGDQQnY3ztNcsS4n3yAwBHoeEJP5E87EM",
  "key11": "2c4KSzHXvcGhN5oQpADp2nAx12HpJGraxDYWRsuB9fNXuWzTymodYakshnazmQykXXPzbtzYG1LSQRohLn1mr36H",
  "key12": "TC28daWnvjsyjkAj3bVpkJzhdtfzobDuWRZGdohhEW845rVPp5i88jiG4u8xqYiQvPYGsGyyphGEdwBMXB8Bznn",
  "key13": "2P6GhHET1eTUxVxrd97AfT4JDAnu8QDLzDHiLzGkJCTqghnv32dSMiind6Ncfpo9FrW27hSW8KqaXhu27EFdwDmG",
  "key14": "2VC89uaTVc8HzYvkafSdLogJBbMmnBZzgz5Fg37SFeZ9RSLvxJGRZ98jMrWNS1m2iNKL64m6MCo9k3qt4khnQNNf",
  "key15": "4wZZRQWK74YMPhJ1cmSXKGNWaQyP2GdwE75yU8AFEF8YppqDmQEP3vHzfxBmHKcVqBMyyzqJEM79325ufAxY6GUt",
  "key16": "5uqKc6GREZ7Tk8DZ2aQvvRRBoicG1C8dJdsDdYb2N2f51JLpwTNphEkmNfwrA8aKRRyvBqLEfgz1gMH92LJ5qRE3",
  "key17": "56cYfrz7bAUPg3JVhZbTQXwsaR1KvBMwcfWQTRAke3Tm9bJJHrSFZtssmXDTXPWRuRsiEf4nFsHCWrxTrMJPALGL",
  "key18": "5TV7F18sWYkmtAWt24B8p4gA3JGp1116SepFzwvYehi4sDcE3Xm9R1HKnGRHbXg2BoZZv65K6KzQrt4uoog5W44B",
  "key19": "2ZXsrJvoNmoU5GeEv2QmmxTcV1RwmucPcNBaVc6wLpTfq6zzCN1cqSVxMo14PQyFai1L6c6AhB2v3ddmTMmTkMd2",
  "key20": "u13LtY4tGzzJDsEmZC1Cjz4JGEm5y3XfZsZbvNMmdiyBSWaVv9VnSg12aECBZCxQYc9mdfKcRtqvzYriuErwuyC",
  "key21": "5F6Uh7MKtCv7uwQyGAHZyqCvWJrZRrLN9zP6ivpsFguJhTmQofKwmBNFMuaJ6k4EgYvJrfdgeuqyzaRycXsvzFDQ",
  "key22": "35b5vNn1pJtcB5aogj57cRs7xYfBnZ4UyS8v1cyFNFfWjJpAozMthsjbECRSp5xThZSrs5BNbH3ZSqjzvezfjV3z",
  "key23": "2zTxiLMJdWdASVxPNMpFgPF4kPMKzdWoef9EUhQBAo7PmMEoG51EHPBCVQCiMU9TSfg3wBzgFNAiCEDfz5oZa198",
  "key24": "58xLNtA27cw4ePbRr3k3RmKyEA62JJ3qyg2DG6LQrYX2cfrYb1WVKQ7XgUv6oFjWnSgDeSyF6xMscvgF7z5cfVUw",
  "key25": "4RYScE438NN19AvCj8WYsSuQaYWy5TbntKHPQxMkPwPSwYWqNNDeW4JhvX8P3SGsEeurLAfXzvT7wsR6kSNLE2pk",
  "key26": "5UKNN3BYLfPdPUXYMWeCYBURqpcLLSykNrKxF6z5UTUVbKSZcB8PR5esX8saGzTpbqhrbdkpsfcqKPzQdcJwnj7t",
  "key27": "KCVT7j4QToaECxLEgTBsSKHpVrQgBjXV9W6deKWE1yfuLiuY4dXpfPB6xgHDXHqQLeoHgusdXvWxRqFWEjN1pG9",
  "key28": "2vZM2djdjEEQmUgTZcqrBiKnZzv4vYXKdjCdeMonCGxorrPg1riCEY6kH3W97x7CBcGWfbHMEEBjWZc9FK6qUiZJ",
  "key29": "565jAQaU1rojUmwmiBktP5Cgu2b6KzLfGHLsyWj6SKVMVP16g4siVK8Y8JZ2VUrs4ZQ3VY4iGAS361njfAdV72ih",
  "key30": "5DNZtc3kJFYKAwoXa9R8hYF5tcLBzwGWoMf1d12WnmxDpWX11QttGMw3cNhqgAoGnVWzZkuVg5BBvXFg3RiYniow",
  "key31": "3WDa2mJosPqwDasHw1TUuSLnaNs4pmYQsG5fyKhPGzdcGw95tfnqPkPJdrUk3v7rvXpQX9q5juK11YDXs6Y19E8",
  "key32": "47b1wuZZMbDVEqCMC7P7jTxpKNduSa9nTfdWcYYrxT8QH9zeunp24EKLT1uX3w3D7wXpAjF8rdyqZzTbz7oHx5SF"
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
