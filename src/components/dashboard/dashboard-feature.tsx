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
    "649cMsJ7DccqzLnGMnTdvyXgDzMtMsqpN4NeJiLJN243pqe3uW8SrD8UYjJHUbyRJ6dnVmu9Gu722rU8erBZ6aGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FD2Yq7Y18MwHYVWnAN9JnHvpEyfuoNMnFQmwyEpttFXYnAGhChtoJr6wDkGoWwzjryPFxfpsaDyrN6f5oT5obwH",
  "key1": "twvuMdQWhxMKWSvJVN9dhtioqTHNaCKs5mNKp3LBrqGAKVTxAqC5KM6RunyoN6zCkjKYaVRobpaTBexDWNtD1Kn",
  "key2": "5zQb2dbmTSKD69jbyKrgooVHQC11T4T9SSd9iEEjaXhKHiM17KG5FbusVsbZvPNv75dammS4DJyje9cjWQ8hTC1o",
  "key3": "5cEGctvsus5GpJ79xAPZYWcznijdnE4oEVkEPz4SrWmZ4hZAeSLJa8xnCo1oqTvwA5vj9C7BAvPtoGXfRpMb8iQL",
  "key4": "43Mu5UvUJzT3zgkMyV77eG8Q4eFqc5bn8urwM1PzGXRUhjEtoypoM6592nb2WAtjiJ7RrwNL46HeFoLAiMZDAN6C",
  "key5": "22GCoXdT7fFAWnKZ7c5LZcbraBZ7BZKHcoc33ox8V5JfjTUryff2XWb8vjJ5YASRUyTWguAwjkF29VyotecaDNJu",
  "key6": "2ybbJWDEqsHYukQhp5Akp9TZNqX1RZq9C84g6ASKaKJsEhjgCjpvVYWaiCvoZvwSMgRg1DTxoxv4JPUoxxuFA71D",
  "key7": "5Po53AkucnJeFHbG9ntro56QE7G3xLNXqXpf4JpuwDUL3f7y6NBnxPojfGL1GTYKko1nwkE7CSMZ8PzNRcKC5bu",
  "key8": "PsDy2JyCqwYtmzHhFnxP9qYVbDkPirTqbhC2t6nQ3NX4wT7xLEv7M46hXoArrZEZqQeFyRYqyz4xFH9abqzycPW",
  "key9": "381n2DkZHCtuckrdQHaoJvtks4UkzUrkY47NEKCQjfh8GHUpyLBuMTK2RXfLQjCBoMKkkx9hqG2Fvoaj2Yn4naZU",
  "key10": "3UYM8hqLSf9WRJZ8422UShiLkeZ6agvRMKNiDKgwx9ZpiJV39d6BQa1McQoqp1NKvLUZDfpm3LBjJgVuNojWaPeC",
  "key11": "3C3bVeqm6JNKq38AtrjbVoyjJtzkXbZm6rHZrTiMvqSLeMNVkc4g5ETf1VKAJTDBXgJXxMXi8128ZsHMP1VVQERa",
  "key12": "bkSXfLrWP8P845nc2PQNnnZfdgBP6eEe69zCQfYhSojcs5A9XRnn61YnvNWkWhUpQ2AwtSLzxBZZwMAeQxTtBaR",
  "key13": "5tGpTzRiHcu2FezZ2NmoQMDwuSu7ypEbXucsZPxw2tSSc7B5VnT53YvUJfhYRErVMXdxwupiRAC7QXQ6jev4jY45",
  "key14": "4TaBVoJgKWo7FEZF1HiXw94Y5AKuf7wK8TfhF4oqaSt5pRXNTZxzmTxw9X2rTZx5xkvZK9iQdtjcZ6cBq1DyXuNR",
  "key15": "2rh4pNwmeRCWnfa5eKA8WknhP46bZRDdqFphLsQ6RrnVHmuWyXFRbDyjpYF3nSePTdUF8RKmr6uPKwEXRHSay4Wv",
  "key16": "55gquvJg6R74kNqAYp9KafSWzFKHA6wk8G5x7xkfWfuXFKdYcLaR8HoGJqUxwXA3fEGFhg5YdNaau3SzWAjLnk7e",
  "key17": "5Teu8mqprSKnb7EEBFUNkDcJ7hXoaxUjqgHbwwPsG7h33XoitGBXt5smxGurzkrQtued1gugeJNnd6n7KbtRgPXM",
  "key18": "4YUveLydhm2kJJd1siGSoWFWMy7aPM6tFvNGHXQRJwoFriGkVKzwQSWyXZh2zUnBHdA7qqtGuzQziM9cVbQ8ffJC",
  "key19": "2yKnyomcfBHktqxgGTxh936vdfSDvDojFfZNJqVHP7edXknXkJRgjaABAwiqyrdmJR5n5MpEEdXTipPhvC1ZEMT1",
  "key20": "V1UevjDQ2uizRdS4qpqGs1s2DfewcyT5PFgTgcQQr2cssr7RaB284bjsntu5LgSepCdvaCFAhdun7rh2FZBYCEn",
  "key21": "5JcEcpXi9J3FhMRTtAMZxHnQmG77E16Z4arW9uvPqUexZzbo2i4JJR6SpJozXAn24Fd9716exZnJvgCkeKscQTdh",
  "key22": "7H5yEykvbVfL8g8DrB2acYNbBF1QXJesnmabCt14vLNkPhQ2zKrm7aKdPr1RGEuyCz4RqndZvw191DQtKJGeRMy",
  "key23": "3DDwhBCP6A7errtX2B8hV3VPYHdCXQcUBogePgDXTMyUN1F83Jf4FnHhUeoju6Y2hA9x2hKtiursT7qoqGyfppsP",
  "key24": "21HrRj2un2nHYAWgmVz9xvd8Km5fNjXFwmaD8D18EJgDEB67RxGerkhtEShbmAF4Maw3Sy8PhyhNWqNupWzdnCDo",
  "key25": "B5Bj1tyHEGFYZLAzXpHaRncmjGYTA2rZwSTqm97nb8qcYEEEeJ36bqQQ72hQwHK6dYJvQeaYi4JRYvN41z71bm6"
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
