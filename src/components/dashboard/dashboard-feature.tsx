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
    "2TPo1N1KX4Y5tx5ttVXzNk8ZWrdaR1WRWmH4iVuAuCfPUcyeqdsveTwtRksP3cWMwyNwveB6UovYWt1RLFprAfu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "USA3jVnMbwR5dwUzefv4x7JWbVQsQu2DmBM74v8ZwnLjcyaZP4bubn6grpYPneYfc2TZFJ7z8Q6ki5AunQnXtfG",
  "key1": "4htvDMAgKFmpiWUxYE5MWbCKQYFKEGEZFJGV95eNSyZb3jwLV687xwhSn4N2JoWWCSBeXWmXuEmtsvbiJavQYcgx",
  "key2": "vcXBniV16uLXt3nwzZmUrNqbQmzuuu69kSLXrjkSVVEnngiCBXAS36V4BZph4E77hmqfou4kRZ7N61419HmSP68",
  "key3": "5vksjWg89tiLznLxkFXRKeZM5kDPnEdptB7q8ewymHk4ESY3nGcTBSaaSDkDFL3zsvjsonqz6nPMr2N237K3s1G6",
  "key4": "ba1VkwX18M317jJpk2kPZuzWMcUAUWw1EFvef6Xf4YC3LAX3sAZv7TJ8vmTpChMUavSy98FVEwGwvp1J7FPYSf3",
  "key5": "4EfkpBc749aK4X9TGmQVA6Y6zcZos3WtZbsvAvNTmLkAKzcewJCP9F6oxqFfWsc9Ty8iMbz55UHfaqD3oTkLcmHo",
  "key6": "9cbr5hTzRvPccxQg9UVW4AYML7GhgZineN41V8o8H6e6zkq2y6NqbgDCDxb6moQQZf82fPSZ2a9zJ3Z1PTVhn4s",
  "key7": "2sAGN1RHezbdkRwHdSfj4qX7SwCh4BqqaJtDxtsUk2AL8GCBsxAm7ewNWQBB2oUZFCkTUx7QS1HQzKCpiGW1HQxw",
  "key8": "4u2qtvaj2ctTJkoLnQoG772a5GHv8eugaav1CgE5FNzyyXwG95Eh4s6t8zDYuTLQoCx8TJHGXEKfm6KDS3ukZgkX",
  "key9": "QLyffXambYb7u8gDXWc5TMu15uRgkgjHF1Z689Fssu3La7XaadwxVLT6zNMgFScCmseH9en4aQ7ZuTVNiZND7De",
  "key10": "2QfpbeF4rhEUExFxW1NPWpDGZF1X3PqMsdNTCCq313JYfGbpQQKwxtTUN7MZE6m2C7ZygCQ9C7mtqTCPWj2CJpkG",
  "key11": "RoHKkKNeXQ6mrfnKe4vPZeirbRVVLW8oBDraiQyhYzKgv2YExLTULiZvq4bgmxu5we2YAuGrxM38XbJ4eu8Uy4F",
  "key12": "3b1CjZLGwDHBgDkvFsp3Bnuw8AUXtcuvsLn7c7E7sUfDLFZ21CLqzBeonmnF6tshYyR3xMLG9ry8g9UKaxHPZD6S",
  "key13": "5UFtJ25pkT9LQZw4Q5CyEXvPTw63anPUyBg9UaBxmnqNRh63gF5uSc6F6BQJKpV34bff5eMTTswx6C9aUqVR47BR",
  "key14": "2QVUZtMdTseuteyWLrrZT4GbiraFa3SJovwBcMr3edn7Jq341mdxCgMXuPZkHu78uGon3WVoDJBxBPsejsxepL5b",
  "key15": "3QH2xWoiTYbNDX25NXwWrTPsrzmgpcX5qu2xoFusW8NmDrVBVhNTCs9hBTdNaHXtbqpk4JzbYKi4XSiZsTqZGgHb",
  "key16": "7Z3s5j2EfX6Xf4Es1KGViM8N88wJjY9UaXyC6rfQpHUxf88hD2unCgkUTVcGYbgGsmJj5s5qXBfYaUwkneFZuiF",
  "key17": "57vEmzcZVmpFZZmu943bnahXuNLbnyGh3yNTKKBs7VnEqA7o8WUz9NDwu3qACurGKTtUkLqqJLeZ9AvJmrtX6yLH",
  "key18": "4sG8xfjsZWGcyscPz9zP8rzBB39A1i3AbXxjS9WEeujcnE9rzDLfNoaHCBUZzAhFSQAZ3R14Udu3KPPB1uEbngrx",
  "key19": "4XXYQCCWdFiLY3UAjWJKN8Z8KZVXmxbWkyAHAVDXr2kH72tT7WpS4qBATQiUf8pqazKX6ppZMhj2zHbH1XYNWfff",
  "key20": "2saw8AP7RCw4RAZoYycJPzAJUs8E39yL8316p9oTxFBdtgiKxmXErY98joEewxXiyFUsfkVKKKZjo8NN5wQYAFcS",
  "key21": "hcsVYQDhLQPjxSbB13xmhUvL3NxQKhA6jjq2s43cyfENHPZZqXMfwFE7JYmetJtYtSiG7dt3YDNWkZkSWXxEqgy",
  "key22": "5Yt4T4pJAnLf4fyD1At8otvgpdygkSuCX76LQGJVata7GseUGUj84JBZyZEk8ryoQuYob6a9tot7KvVq6Y9EcK6k",
  "key23": "55di4dmNY8NxamJ6qu4zW9LcYTJ686XdaR1LuAFYmcXpVjwgiNv7GD7y2rtQUffEY9LkHjbQ3jMDDYxZu4f5T4jv",
  "key24": "4hqmrnRTcKidP2Q2xUe6ipuETmXfA7922tqdfJDyHSvbKYqjRxSo5nMkAwvBZS9FGAQcn9WYiWULkyJwFwa5mM1r"
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
