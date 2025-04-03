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
    "3jT2u9JPhAjuTpL48neGYgMBnKEMJqPsPuEHkctpmbU117PZyajThkvsUB9uurU6LwKAi2hHFs2CFMJzx4ZEwrnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67SwbcfrAcEoD676SS2tR8eoi7aKrCc9AQ8BymVKJwJy9L8stX1Ncmiue1BQbmLRARcsA6vD8PdWqFUYdkmHmRkJ",
  "key1": "4iuERhsnSxhgbdfFLRSYkR8ejm9dNFjxXLCa4eZDsZJmwuJAvHd442qo8xBYPGe81Ad823xC6Sp51UeHu7kHxKF",
  "key2": "3kTgKe4bBgm5MRKtottUzXhHzTMYqNgctmzM1Yfo1vorkyGN8uKwT9yjM1i86oHyQRbR7vaojbMXvo47bTw3UMyR",
  "key3": "2RSbCkX5GL4zHT5a8RXD57qBKPyhZbX2uKS8J4Hzjv37JFptGs1UC8kjuzXjuxMsnpjXQ3rvuTVQidNoviQmUDCo",
  "key4": "2bYW5eUu664QN5aVAEB85m3DHxXEStxQNqMy5AwfsPTrfFkeWeKiPecupraD6fUJbybamYu9pSLqmhgyAGMgY7vx",
  "key5": "oivUvi5pKEfz4kQgCpNnz2cjYT6o6ussQR8iXDGNkNu4yJJCPe73EH6mex9uKuvnAV5ALpPtMrZeySwSj9MiDSX",
  "key6": "3dpJVcA9GgCCTB6orhgsJBYvJ2oSYfYBJx6wZjDRxHF5wKf9eHTHYQJVuEk7fA6uhqDr3Q69KxWQ15w6xYsQ1GDb",
  "key7": "41Sgo5jcMNHL8wBZWf57rHDBGsBDMKJji4d5KUGadhmsEZvWZyRu5ppSCS7Ve7Zzw4uam3qjSAMKPZnL5e3ci7En",
  "key8": "4PUAg3BnCjFYwZJvRn6ozgpqwFdHcuugUFQ4JvwjEg2jy4NQa26gzXWf2GsPstgiqgZoy4rWc155GqLo24Z262JB",
  "key9": "4NkJqzqFvRrwwymhvj9cwvx2z57yonSFPhZHpkJSbfsS6eJEcuuyoLH44E6oadBAeURdM2AP6To5DCwrnq5LexYe",
  "key10": "1L6SVrWxu71J68Vy8FC99TrnE2z8w8Z4ymyW51iFnAhMS3PUgXLMaApJmEovSahERBdYiJEC4373hG3hSn6AG1F",
  "key11": "2MuwLGqYMjYjmnPBn7LQemC5YPtZJQczgRFgamnunrKMkMFNRUUYU4EhEMRFpaMFjN7WKYD57eHPQMaJnbKoc29Z",
  "key12": "ChaCBvZt71hJP1prQ8jJvuBtVCLjNdvEmkNeQeVYS4uav9xfa8E36u9xNJHAMPqWv1fo6dyAtAJKeyheweVWwYf",
  "key13": "5956PKqLwuM4pKWQGFN8tmXL3qN5ESnTZuzGpp98G8g8tZ4QoPnxFmkFnF8YG1iGLpRVVsoS1dHvQJF1a5pLW7Jn",
  "key14": "3t3YJDoNS5k8uoSjpsQSSYU9YtAM2puv9ZYQsfia3USeqzgJ9HjFmkskE3UP7EanyaeFtzNqJMANMYFsMkRrCQFQ",
  "key15": "iSHv1bFZ4HpEvGaUPmUS6ojyA5k1gPuhZpARJXu331S2vinQPQvwjcpFjmrapugymgwU8digbsZd77zw1x1DSoP",
  "key16": "5VBUSZKVKRvVkw4cSvPacYwvkqF7k8w8MmaZ159yQin5Jm3gwbQraVBAkNkR4Ua9oBtYKkBWMW3D1iHHM58kSsRD",
  "key17": "3MoSd6zj6uCkF8yNEUZKhYgUhEskY8XHQzjtNnPGB1nLF6jQ3ChzD3Eo4rGEijncqCjdUFM6VBWEbyVdaq6SRwEt",
  "key18": "49f9mD2nNqGzxKPAj8rPm8sDZczcEV1wDbjsEHCCGEdBybb4ptfer1MgM99BopLm3QDqS55zpGf8gvd4vMpJ9KB3",
  "key19": "4J5L47asUdmcG9Ehvh5GnP58Dvifx6wdCL9QaVQomPESjcvvgcxsCNmcjkWdx3ojWkfG3LkmpeRnwaD4zUHUzeGB",
  "key20": "4hHDrcBsJUyHdz3Zr8U78YnvEmxXWoMMdYjVRtkaNRXNMG5NatoTGs93qhNHGsEPVHb94SmrVaGK58yB7ej1YkL1",
  "key21": "5VpqUxi67sLqn43e8NGgEt3WuhL5VtHgdHK7ENxmjAHYMnet8zwSqAT8hCfR7BhcS9cwgkBNzB8s3fkfeJvUVXez",
  "key22": "2eAFX7U12mUW96UeMBpaDHjYmx4Kn2SBsrpricVTePBw2su8vt2jKDguDbkHpbfBpZn8Xj8c6MoriGDVxpu9LQ1Z",
  "key23": "yS1acQK5ud2hK9BfyCibCFK53rk78ohBAPQPEHrAiPpzrPkVTuhTerxuAcD1dh2Yj353Hm2AVJxJU51Uksc6B3i",
  "key24": "4EBkWHQ3emDXM6m7iCcevMrSvM8burXPyg8ca1wpawWxpCZtiJMcYpWDEAsjzc2qYrv66iv5RsTmveQW1tNQBbYB"
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
