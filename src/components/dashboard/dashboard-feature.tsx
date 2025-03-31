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
    "NmVrL7DYJT8hBZSkCDrbPg6bkLCX7XXc2vhFadan4mm6zf6b7runU25PoCTbUhkDZ7snLVX7ezq6e4WWrm7Yzpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QFRXZkEXpZX7vULxUfMkDsjfMYNkw82EzBwBgry8ttcZYbYRhSvFMh4saC29UzGKdYYHzzxGNVUfKvD4ZEUXbVm",
  "key1": "3x2DQY8DUbSY7AbBtqMAM3tmPbY3GhM4rF5sZKRuKwQMZNBeYGppKbeCbtyFCooowcoh5j5TGM7Ho55euLXQyGJ3",
  "key2": "3SXLp3LS8Zy93NRe6t36ViENnFfhCzxyVwXbJuaoNphBQpuECpJHeRbjMGVqrqzZ5jZdSKYoUJB1TXXMSjX6Lwgq",
  "key3": "2KGsqADtsHiNqAbx6BFQAc2N6zk7ikZwrtCu1HrMYppfRMpjeodazUxXtFh4oLa6iF124VPQjU62BKD7YtFi3RNJ",
  "key4": "2AktRjfBWc6QcFpXk2YaFQE99pCnHyGkZwD3ejd4KYKVuXMowhsELieNUsvi8JZcJqZYT2hX6V6aXCkmoxN5Zcex",
  "key5": "5TDTU6Z2YgP1tzr34osEUzw8fkp7TfoSXWy93iUxARXHiibNWuE7TomVmPSmZMsRfKrVLAD5B2m48GqPV2pYubzV",
  "key6": "5YsNx22B54BkMbPN1FSiW3FfhfsKzxW31mXiAfmCyQmfHB2grMof7eyprc5jTeq2SLAmiBtfLyjpGHAXHpggpUYg",
  "key7": "4TDJY116wjCLqggkQtnqELbyw1sTeRVoFMgFNsv55kkDR8ZXRbKcEAFjou4qyXC3HvTCShrGdMBnw74vjw2FSbrL",
  "key8": "jB7AJQbpkjKY9tSke36o6PE77srYdRStHtUvhM3qcADfyP4gb7raPvx9QaSW6sRirqVzRQYJBsvXXhqrEyZvpRi",
  "key9": "3MSNNqURDS3FqanudN3ezYYyv9QNhR4f4vQhwhsDDkdVeDUspZWngsXWhzo4fMoHXJXk62ot2RN3YvNvARYNHrZy",
  "key10": "TqhsYb7vt5UitwvyRKMPj5eDWFLqRsDPErYzU5rBFfGPCBL8abaBoNioSuiHpRzoQvArtEoGyFmQStwS2i5aL9j",
  "key11": "88TXJxhC9w2HhCvNFbK3qSMcdSKiFtS1uwWQjm4KBmahMVh9Nb43HrjDCNZ8CgDwVnsSD77CMQHx5RQRVy9sp1o",
  "key12": "1Pw6xytBLpFvtjq6K6AwXxzm2xJzQtqqvBKWzgxG1xAjawwYT1TVNkSeyA7G53tQpCVtz38B9Qci93G2LDLwbKp",
  "key13": "3TauE2v9dHkRGC78AVrU7zqbcjtECztShK4F4JC7Y31DLfw6vmjDpawmo9UKEhTprzDq6831c182xGf6eg6EDTTD",
  "key14": "2yTkTXu3VtmGk8QDvtNW22zCh7gTRAqpQ396fHcQGGgXxfiF4L5CQ3yxfZ4QEf68U65f863MRWU9eHDMJKSbYj8F",
  "key15": "21nZGP3zFb5taqpQDmWVU5tbjTYKUvmKdziuTrWC8WVomWnTSSbakj2iDUTBwhSeKsCkqR1Q9RdPWd5QX1vQZemz",
  "key16": "hKPijgxK7dazrqKHwwpeCSTQagyMLSHBj8dmsZzeNketnf16BVzG7P48eWPGiM9nnpozBW6pigssZ8bnVfMHNTB",
  "key17": "8FDGPrxAgCRNwAMRokiVWkwjTrzp7WdqxYyMg8x6RJbqJP29dTBEqYdvrzHbgEduDi6T5hQ9jbSZcZaWMveMYWV",
  "key18": "2q95ACzmmnmao7DZ49EPGKVHQQqFQ4k8mnfYqmCmTCzGCqwTxvSswyvrh1kTyMa3KH4tBtqYt68zFSwrD3ZzosgQ",
  "key19": "sJokZSPP8dWTowjEXZRCQV3LdFXovfZNAsqkS9DPAemNEne2ksemJh9P6V4NunyMZs6kttKCK8HFXFoCBoEZiN6",
  "key20": "B8xN6R17QNaRS6bYcAAisouZtLwQHvB5X2x55D7hFmSeLemLy8wnq2ibqsCJQa8uwYTQ47jdqbv77cnzuTq7U8z",
  "key21": "3JBRr9YJSxokLYLMRyK3dVfR9mApoyRPQMQeejThvPRxz7iZGyEkBC5scNjh4J33hnxnrMXvj7vUuCx1UqWdmjty",
  "key22": "4Uu5m8b9y7BnRqvGPUcPaA5PnDDXSJr1QDovs2eXEK2ooa5WyYtAtCPsjMxf1g95AhgZxZqHMTGySUrJ4KTJfRVY",
  "key23": "5BEZe7nBRyHMjK2HM3sAoJMtkNjxqvyqZAk8YU3skZSFVFWs35NbMUaWbNkUMJC1brcXGZWw4mvV9uWJbojuVS9e",
  "key24": "4NnvXsyG39u2nvc14Ny3VvDb6aC3rWwZATQAMFyS6DXG86Ji8fUQmFLND4qor2zDohM8kejQLL8aM89KrdNtGUcb",
  "key25": "4wEJUUCRpGmfGyYXyAbc2zGAd6KtVmpNUegmWTKf8GKkriorbsmJNq2S8fs5VqpRin7iMSd1ccf6jvG5va8CjgM5",
  "key26": "3zqHaz2QNfHUMHypBbFBkjJaEFe1piRWVWMf5MwcS4A3d9d24A1wD9a6jtjiRw1bLNaPWRNdvcVLzQ96NcAhdjZp",
  "key27": "38NuDjjXK2EMXpDYq4fT8u47YkTztzSgK3DNYM64ewoHHg4pREP6Mpx8GJCoL4orqxpZtRYT8nQ7xvEJx4oCTc4b"
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
