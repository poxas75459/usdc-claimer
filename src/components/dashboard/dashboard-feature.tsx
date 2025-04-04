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
    "3ADDGgjgxEtKyeU97fiAKwzkA3ytuDYxY8yax15vSNYKqwrVr6ECSE8KykT3ncwSPctdv9XLXghYtRwLPMwF7AJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tsUs6aA32GKx7NkHBtZ6R3gCFufCVFJhSjNixbUYj5YtHgwdh6XuSBMd6Ptf7hJCfJxHsopvMQ7bc5qF5H1DGd3",
  "key1": "4TpYMdvogWHcxp1PcdzLzBgD4H9Mzv9UrfwXQ4heQ3gjHzgbik6krPT8NupnR3k9TGne4zymkFfqqAM3Nx6Kj7v7",
  "key2": "3F9dUCeQ3A3yZpNh6jGx1GT42jdgYZDeL2SnDLk7zkzviqKVDLpWg6FjT9wqjyYUo19CuxwgkRoEy6PuccDsYBHC",
  "key3": "2G8FRcFSuvkyfyGwASewnz17Y3dCmK9SGwU534vckoyGwTn425rg8bC3CMornvvkApFaUm3ERCfEm4XRFg7s9tPN",
  "key4": "XjCqoDy1NuSGZ1919JmJ9eW7yS4b7ihtFge3pJqUkNh7z9v4FAAtjxcCAGQTFmzrm8UY3ujr2RpzRDK2x9N52xn",
  "key5": "5MBunbwJYAZZzaptnZN6WjHHKbu6z2QNenf9M5DSKGszcepAueDT9CY5UJPTjMfZJ7Dvf3Wi3g8uphJZgKVFsu7G",
  "key6": "3eBF3w2M8SmkMaL4ipnXCSaEHqFw9kQh4jEg6VnqNoYEzhUZ7w8zb894tprKoo9UheqsTDqHBmRMDdicmvXtmN1n",
  "key7": "3MfsncqRByCupjv4Rtyt8Xwmcjrgm8V8P7j8J5HXqMQz1ZZwqW8aMonTYUTtBFHVFuEdQjnAQxMQwpaB7uXjFBYw",
  "key8": "yeJRDFvFrMzik2i5dGRqCpW5yDqFvLfas4ZKcMrKXYZsaHQpmH5j5sZykQSJo5xxBRNSMeeXptMqFQC2bqJXT7R",
  "key9": "49DbwRXzTc11fWCcsunuEyDkUvD5mM86Fuugf7RrRAiH8FQfwVeAvvF2ksr23PVbo2rWSYq8riYmdqdHdWmz782r",
  "key10": "4HvAbbs3MbtTG6B3jKyJJbZP6nt2s9jjrLoR4QEtPkbib2wz1eiLdjgxFk7BAny5svnQPkcEVLQfvQmixMSVmCqs",
  "key11": "U16GLamZFsS5Gv1sumxShAh3F26ohDVfuENYAbfK6KY5FiFoRHD1Bf8CMCa7EYGngYnXUQjc4osnjUUQocL6teU",
  "key12": "3fNPh6HNRFiwhp6w8DxKWgK5M3URnYHUN6UxkHKQdgqSeq5QiPfiGjMCPXFYYQUaE4oKqyNKtSYGe8gJUFaAVfVS",
  "key13": "5fNiYU6NDQS6gQ6QxSCV5fb4JRct9jDiBZZnsMsPKu6Y1krYP1zFpSzXKdDyUbPqMH9Ck4BKUvktAcaoB2A98rf1",
  "key14": "4Z5UTAf3fMC8iqaqpPoaVf7jq2asfEYk2iYFD667A4HFb13VYrbTW1BSgzkQQpXTryqeD69Bu4NvsFdyzE6au1DR",
  "key15": "4eN31dkyDrmLXdFxAn6mb5AMaSA9rBFZkTS6VQbRsjYBhnVLPuK5GdCny4iCY8xYai78i4JxG4ELgdFv4UqfUWQ1",
  "key16": "3xVya6MftXhCfssgEceWUMVzZw7249KZLYUmMQvDYg7AyksdUPXcYW64aXhQxAkTmxQEi39VH33V3WekMtSaSKap",
  "key17": "31kMnn3r3kf2T6s2bPcqxr2RHaLgvkktudykq7RCRD6PVHFuumnJCnUpjPQLzdV6PxjD14f2uu9kRqGK41gxhUAH",
  "key18": "2gzgecsFoF4NjnFAryQXK4sjtboGJkuFtWm2MNB5GwCeRTfpNubv6oUVjtmg9ugZmXfayf6r7hrZjCMRAoyKyADe",
  "key19": "2Lc8jYSwsQuf3iEbWcSxSyrPDZRqCv5jtiEbWo976fRG4v1TzjeA5QzLYx4XjajiHYqzA7fSyzQcTQryC4ohWV4n",
  "key20": "2kV5oGN4kySoN7cAQBkySVXGDrc7ELCRTGrGXFBzAAxcfs6aRuaotpsAh5apRf8Uc7zchdiDhbDe9DHke5esmjbK",
  "key21": "5sWzZH1JrfoA7dFeG7axiBo1D8MDFikXJDWT5omnRWfgF1Nvc87HC5RbQ4HzFq7BDfQHG1vVJJmHkK34Zyg8RP4Y",
  "key22": "3D6u3FYC21yUxL5T1kP166bT7NBd5aU6jR6aAc6chexYBRwq44Sz6CqacBLXuKqEsXiRH8UnaXkHS4tWfkL17BBJ",
  "key23": "57M8FpYJyZ7MnqaPVE6NNHqdCYymmX9oGy39ykhRHkyHRwJpXxbMocpzNmUpgiA9qBwNsFDLTUL9cwZudp63H216",
  "key24": "idHgPnmnZ2JJxJgXhcMGySZpkbF651daNnjR6AnsgWnEi8tp3F16pssBrmMJ3k5FaphTKav1yvNNbPc4jNUDE9L",
  "key25": "5v2FrTSY3pV3BodA8pSDkoS7xoyi4zGhmBGi3vGxNCj9wbDjPTTy5baDKjkL6dBtTSwdsgeGXZZHTKr97NN6f5xA",
  "key26": "5vjRMJXmTrWB9cNitzjcna6tLBsdTUByoFAeufaUUjZHVWnpdm9XawkqGakVYsKaJ2EeQSeo9w2n6YrY98Tn6DdN",
  "key27": "2bESz17cisMybNifPRxDS1XRTV7K3HgzMHmvhskqk7EF4jMmKWgLdaEZ8Ro9qzgZBPjT6Ni233kvatFKheYaYHNf",
  "key28": "39rb47T4Apx5MH3gc9cstjNY4VdyJkikf5UhAqxkopB1PnupHVUCWqDtmuGG3hZmTL1ZdXu6wqdt4djvDPWvKivc",
  "key29": "LaQQHHP1Mc7yPPgc8NGVP2CB5UpBFSPAco9A7UwYFAh5PuoeRcBAM3wm55DyL7Gc8HhzAJ32qkMzv7pv19MUqvC",
  "key30": "F8AxypZNB9ZNqD5e4T4KwuCi53TH5RAr3ammJLbPRSdXQdPjQqYtHPSqSNkhy5o57sfPERvMQ25TeRPzaEZYNVH",
  "key31": "2wMUHNVYxP6e8Fju35aFU31wKbkeKLAtU1LVTDZyxotq4GCqbfi21xgPTFfLr9nTHXCo6v1xDSgz9Z5eEUpeBxyh"
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
