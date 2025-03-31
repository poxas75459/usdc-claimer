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
    "3uRwBgdP8Lpv4WUwbs9hWq5ij52qBbLSrvcCu5eoervXzNqEyv5JghDAzX9pA4mEaZyZK2UGmdUeVhaFw3yDiJZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gVPC6bfR4APUQwpBM4iLkog16Kbv4U34VteryRLGgGAgmAZ8s8vaXA9F1AdBF4voqgP3cptdw41asLQk4XNkcEN",
  "key1": "2Re4STtC4hbAtVb5cgFJzpribLZoNcFccKZ8mFRJeRpvDgmSeRda5GFBJkZ6fVk2KGzKGgam5WHcDyxpWQUPZaXv",
  "key2": "2PP8PXnBCQZR2KPVQEGooRtsWuMRYodfRyMuKMkquMrm6asSJLJ9rZSwsoDi9dkdPqJpSiaVTZ24A1zC5ahd35wp",
  "key3": "26zh9Ud6JYqEGVJwMC4zbzTKfX1DVVBumV6XxJunkXGbgJqA3zqiiiSBYPw3RbkCe2ztefVNY5bc2oWNYYnbgTB7",
  "key4": "2ULB1uwAEBjc6G6JYjfeTLhNeSLDQ9hcTNBLZtaraaZYBFytN6MLDhsAjTQnqDJFNyj2qT3g9PXk9BGQCfFoMku3",
  "key5": "3ejGNftZ7XviGGWKa1pmGoqhhX7VdFrwudJEEyswFLAhY4XhaxJqLuY58AH2GwG7prDm3ftAsm3jXATtzJfJNjvg",
  "key6": "UCX8nVoL2u4oHsPZ7SfVLgNUS3j1TzZ7hZECveY26rHAEQktJrCwKvkcij7r8Dgy1yqENGAHx7JbAUEcSBf4yBn",
  "key7": "2qnmVv5TpT4C13sbLraqAiJBK9JUDu1ZsAbRhdoDqZ4zJVc1sXYoduNMZxE81u25nKdRuKa7kzSTn6ouGokP5DB9",
  "key8": "2ydk3o8FNh63jTAZbSKyfvWbx7zzHBzQxX6UhCf3BPfB6GYgajseNFnthxtV5jfLyVwGU9jR2Y8567qrCx9m3dML",
  "key9": "45rn7U4aBNwXtyXdPEj4jfmmTZyhdWa2XefSbkuAC38FUqbpvMM4gHLBdFseDd2QpJasZUAbk4fAdfS2jVSt1krB",
  "key10": "3dZRCcs1b9bdQ6zr9EFbvLmnP4zZTdJjXw9pk3JmqPhtGxwUeWmu7zK2rE2GXR3obDbj75hZ888TamMkvHsYBw4R",
  "key11": "3sn5yYB5gHDs5DVGPFj6Ei6oGydAFuW4irc89rThcpbbLusUjpb3b3Fn7X9PeyZ5Efj32Y2vJQ31L545JC6Tqxch",
  "key12": "39s1VXvxAMmCoFmn9eb3S9RCbBecZzfnJz3rXXE9PmPj4uCeVRimnoVJatL9zLXaNf23jC1ybk53rZzwZKJwc7Fy",
  "key13": "etWN19KzgQqnyPW3vYy5cqzLwqfoZxE3BVzxTpR9LXx3kCn83aWDQ2s7MgiWXomycVoag473M4fFmKSYxRPpUf9",
  "key14": "47WARHWbv7H2mf8pVHJF877gqMBBowcLkAKUnbEVMVfktVEdWNBj4a5Rfa3YMJ8RcnT7a2qZMNQNjTd3p9BD8TTS",
  "key15": "3ZS7hwr3gv4YPvQPjPe2ZCMiCYUZcBN9gLMgLefRYxp8Snj2pwTUdWcp1rtrfiP4zWZNi72q1FpiPf8BQxDYghLz",
  "key16": "2NBfpgw6BqAUkKfknzTky9dK3swD8SwfUsbUeVpXGHWA8Bb9X5BjcLZWQ4eXARHqTr5cD4vGgARv5R1pPXBE7e4E",
  "key17": "cocmgUhMFubUVzH6ybkzGxhngngspYvN3LwCoszeWHogFkHuUkfPavWxR2ta5XN5zKKGDRpi5LyEueyXfCeQPHE",
  "key18": "62yfdA7ZuHE5AGJWT7cbhDzihF1dvnHQJcmiRu1Hvw7ochr97BxpfPjjgz4WcpKZDHzzrkNrBR4CDdTKohPoCDfP",
  "key19": "4xuwspSGhsukEhKFQuM2xm8YX79eFoxVfrZjGvNebyNXkcRcbMYn9wPasMGWJ5WEJ7qq55swCTPUy7ZwUYVmesod",
  "key20": "2ZxwHADcLARC7aWVbG3mZhLoy4Uv1Y6K8v4nu4y27Y85QVxuNF4oEjqtng3Yc8NHYX8g9eNqBmJVDQJs3dpoBRbd",
  "key21": "3cR8GKwhjckQnHDx93jis1CCYs7n6Rxy7ZXyQwXUsSZipaxrqA8J9LKbw9bxNb4EFHZHwxDo1cM4AzuBEA891JNE",
  "key22": "32p9oVDuGuHRqLGoAwGEmAPa5oV7nTvBMQjJ4wTotUbCWX7km39RYENVijuVkadjQqAnCzUGgzkaL9RXfr9ktZaw",
  "key23": "37MnoFpFWUxmyNWxjsECuNhUtjYFYVryc8sWtVFRugritjcA2BDiTGbD2m7CxePfZFzZw4QTPy2HBRkPKKkAnxkz",
  "key24": "3b61EGhPcHpFJm38i8yeoXLEdotyy9qdET9Nkv4FYxXbt8MxZC8WFPKcBQh19ci8MCPgYJcd5bY4HzVRWEgZsjHL",
  "key25": "4rNUn6VvYYUdBjvLDKZtNcuDZD4hd1J6pmnD7ZAF7dnUjPeFENTnp1gwVi8TkWXZQGNHJyqDnVg2333czFtakWyw",
  "key26": "3aaYiNJf9WUvZpmw9GUh5TLfXwPbRJC8wATF2knWaRWr2Q7s2NUecWxWUvW3qzav5HZqY6hEVhcJmqHnALo8zufx",
  "key27": "zSmy5HeZK1kvmCzWFjdqFfMyahtDW8rjkXVAXuTVJoR8BPh9gQMrYTZ7Ss1bU3rKyVGe5aqwTD2JZM5jP2nwqxW",
  "key28": "2x9uNJMFoF8zgN1htd72hJ5YFgrgnpjxfFGB11ZoMYitVKaZX7gQBT8jr1iHDaN5sc8BF16JVG59cW3oxN7Dmp2G"
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
