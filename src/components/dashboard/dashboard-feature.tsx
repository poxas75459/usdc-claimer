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
    "5NWjJTymqfXD3VkF57L1N3skxCDWtoCMTbZXK4XAUV1DxTfRXa6cTSqvNZGFzmEFq1n1zZAEN2xZVNXYW9k9frZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TUzmu4XV8R4uPrBmcq6nSBqpoyM3icyWcwdV8qnqSBz5v5wBzSkLBbAaLDDVv4fEGkTZPScomjMCED4aQpzSecH",
  "key1": "5PkpNHPQhKb56zfqEu96o3sHhnXy3mwHpCx9KFCNrM4R19jEwvP4UkhR2goMsALQ6KLiSAryAH9j5d3jPQnyVDWa",
  "key2": "d7wDTafKXSHS7BqP2LxrVwauRwfhSquy433R8h8dcLXQwvqmrUWTXcMPRqVGZaJjdbj24EhwLcBa2u1TZpNePUo",
  "key3": "24ChjvzFHc4UQqGh1dkYuzFNAy4NmuuEXrDp6yZrn5j5YbuFbYQpzSU3vWqJDx9i7BSbY1jxVjSJ7TQzEfAgCP6A",
  "key4": "4JuZWibkYNvJqrLkgnxAt9MSr6txbTVSUtoi57WJKKmdhyWyTqmjC6TEedRoxNqyjFyc5cLUsMGNqKzQEY5pd45y",
  "key5": "CEV1K3MHpkZCAWMsVwbNvFWB2mZLscmw2bmph2F5sjTy19WExi2ZEB3wkjnfjkGhqeSBdr1Q5QCyLgSmvX2urEf",
  "key6": "2rkuY87RPhB9z7Dd2oaJA6ZeWcx4Fztkh9GgBwQzfLvuxZrdXf5RcNMw7z4viuxGBhhttrEUrY2uF5JUAPvnAjgA",
  "key7": "5DAwqJWqrEpcNCMJ5UQBZACes85EbhywqLJpGYhAyA7HuMsoPTfeHouHhUEXsZmnUkjByQAKFVyuJVepPGQ2i573",
  "key8": "4tawoZQ5kL3yzoax8SmNhCBWmRiFsr1fbtMU5G9CvDtZEsvYuNBGe9JVkJ7hHzNKoWgVS86dGaYbe3uh886AQ6FV",
  "key9": "3VaREh126Sv4Jx4ZmMQKnFXYojbGLxnWVpXweYMDJ49KEwCHQqfMQ5svMpWvgFKWRZ1nDo9sPfA2wwznDRxWLbPf",
  "key10": "5hrbE5WYHGPVq2FVGKpw28dcXbopoSc7NXW5Fm2vgLdUfJf1VzDSdDYxm7PaqKaTH5BfimE5QGSLNUcWeibv64u1",
  "key11": "5DHT2b5B6ruXDeFpq446aZDDUzbhRHe41v1qyiWL6wukCygCCqEdfNyLVW98MpetK1yus91ny1HC1KXCk7BiEVGW",
  "key12": "4DYmooYzqf2ckfveEHJ5oUDX4tKG4uhUMxZRAFRYCiWK6N1keiH2FG1vN8gKg8CTzaLvsQXdK6CoD4AEmRpeRhHf",
  "key13": "4C7hB6k7NtRUf4qT5UnJHQdueCYj4PnZmaZMD6ddZWd5yw2wT8LNpDaf5dV9W4Hb2PLs2HTtTDRR1BpsYEHbXnys",
  "key14": "4EjXuQ63YsSzFbW6jAPz5rBCgPEK4kiimunhmrzssTFoJS9gWqpqRkpQYGsx8mtjeswt7LQucsmT4v8ZxTURyRpm",
  "key15": "4F2v7Szhtj28UiACMzs62bWrSf5uz3P3CgfiG9KoEFKCQX1GT6Soa1i5KLDjA2TD6rpStuGjNAc1mcahrp1EnKHv",
  "key16": "34aySiUskN9sYzpq8EB7iQLjYQWMf7SUoGLzPQfPEoT7nY2gimGk5uiH7eWKhbMCrgZYg481NnH4RNppFWTKBN1n",
  "key17": "2jHCiVbpemR6sV3CcXnykEhzCyCaVhaxWNGhKoPmbr8USpHWG8nhv27jwyZkewBHuDSocHHuNhUVywzDu7Z1sn2u",
  "key18": "G2KAKA9nCPMG4YcX9MsRkUT93evwf8Y2ipoGggjjw4nxb46CfTiBBSr9npYj55o5cXiSa8BAiRdjqtvwtCyVVaf",
  "key19": "3aj3R8kcrUiwpjwFXpUqrf33GFquSPEM1ur4chfL62e1533Qob3ccLAahnTYcGQzM2ZsNWobbinEnboSHTU4kufu",
  "key20": "2Hg5W14hAaMHUnFf9rG5FDykq2vM6iJbvjtGwZTdRFkG7z7BHYGPhvjzC6TxELc2NBpMVGmCz2EnLWgeh62iW62H",
  "key21": "2yGPMtqD7scgiqPmH7uKzJ4qq3jYcKei73gacoWMf6egrscqdj9ZJYUUJa7mEgc9fQiq6xBz6ow7FPSfmQGGXjfQ",
  "key22": "eJabuo6jHTtyky6yTS9JUtyaXHCr5Fj27JMh7jKtp1MjcMEVDjSh8AfVS8K5Cn2s8qiBtjw7ZkpdwSZutNRYHe1",
  "key23": "3JUPjbbBmwtQcbu2HViWnht5Bs5aypapPtKkid6u7byMgHLQuzkennQRRKg9imyChySBoDQh9rnWhMZkfMa97jsU",
  "key24": "2dGPA4JiARkTnoATb4EAF2ytKKnJGsYFyJHa2QS9iefDbpWJjgNSZvpG6P5tZCBffQvv1feScHiafFqd4zQn7kMu",
  "key25": "43ueQUhyfXawbxYHJTNFvVz53HJyMqHhXyPqAbSx911HaPmW7rn9zVtuqWXMbz7Yy154B2eivUXFaDEvAWQRR5Uz",
  "key26": "3FMh56qiQEHsnFNEpNKRTSrBg9UJXxJA28gCcCzCy4YwZC8VKRo3Qz7MrwqcCovBFaZifJREcN2rjK2FnFaThVhz",
  "key27": "5ghGaSm9iK1t4MK1yi1NRBpCwaP1ct2qvhJTrxBzAotibW8rDgiodwHufupxdVzrUtBwjpxM8jZMD9KrLohEELJJ",
  "key28": "2WuK5jNhtwcCx9vPNUmzovZfhDmy7UFoSjVqTX9ShZVjRAsr3CDdEs7Xy9raTnz3bZv5rNcoMmzcsPU6HwNVGZLZ",
  "key29": "3iTS35Medjks6RENeVRRsKYnYSUoeLKtEwHoiMEQJTSZi65HYfGKuuhYMPGtcJPggR7iMLgthdDUfQELgbW6gZUn",
  "key30": "4o7QNuQuUVrA72GajpARA21wA7yk11CaHhFoCebqwHsPErUU6c7mENEPTH7ZEwXPgmmMJPKN2Ve2hM4Pp9jJtvAa",
  "key31": "5m6e7APnLRSRpgMN23pKagaZL59zA19ciufqDo8Di4nTA6aJsN2eZ8Wavfp2BWBXCxPU3zZKgDYn6kUZVKsE94xy"
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
