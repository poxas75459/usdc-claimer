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
    "2aRHeumr7wW6Nyc7o4dkjS1LKz8BBkXTdLarJUnA5YMfJC3m4RBp4s1T8NJgRz6o3ErPjrKYFAsvZ6HAFAQkVQeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZUbNNakDWZMKVxHLP6v7GTr4187vJRF4dagPz33bznx5PhbgNMb9pU2NsBxtjrq77Lt5pnFV9LVwU2fNombUn5G",
  "key1": "3DqJ28SYjyiH95GkGiQJ7JAYQGAuk4eicvHwXgkBb4QHAPJpPg1FQEYChPqKkqf8CjvvAUKyVXb4j1wBRspSgDoK",
  "key2": "7Y1TxKJJvJwuiSh3qx5gEN5Qo8LZ3A7SzTSBrVGc1kgj5XXamE1G6zVGyARsbAerKQ7rse1jsAQsDtRkcJcSivC",
  "key3": "2oMV4nv9YpjhL9iGAvCTCbfSfK6oBo3YCSFHRMVZp2mR7W1DWcTzWDtCMAddFep2kUrPLGp2f5qfUS5kG3Frp1J8",
  "key4": "2wTmBZ8JztjeGD1aX6EkgmfetweiwihYgY9ufz6XPV169gmNDPffSVbnnYk3m5dHur9HQSPkPus3FK6wNArpzWzy",
  "key5": "bATXemgN7S87dXBAPZ9KxC7puznPHMQSWZC5kCAQdWgy766kbvF4cnM9FQAxcuUdJH6BsFcttwtMZ1P1B4Xtbs7",
  "key6": "51r1PD5Vq2k5mmad5EcbEQrhhNTiyE9NcFX1DEmd97EbZteEtRvNNVQCRRrp7wSKtoKm2nX8jyV3Wn8NjjmsXVX2",
  "key7": "5PAGRV7NgxL8bSbnHbKutDUyL6cDuKjz5YHvFsvb5bBgBgHv9NVWZkAfywsVYxChkYcq8xQZCMTpSgJTZ1mRdEFV",
  "key8": "2YPegnapsrUyspZSoax9mJx8jQgToyqU5RLDwY6U6mHPTqicDVTrtcYf8mVi9WhgRcc32jcyGrZGx6bnkcWnqiw5",
  "key9": "2cRK6s44kfVEFTzN4cdvgFu8hYnqt1F3H1ekpAMAeo6zQCdJzDLgeF33eUwhz9fY7D9J6LC4Pz3Z39pb6H166wfj",
  "key10": "31nUDcMLWq7YmesFK3hdb4Y7XzxhYFo7L3m3Q1PLbgSXvnenDBK7J18EriLpVeVfxKZNuzbpE6TwYHG7HMZfim3a",
  "key11": "3WodWN1ZeyrPHzeuoPm8T7pbu4JbKjzxkyutr5yHNZ9kY3Wr9hZT79W32m6D4pawhpTc6f3XqBYYKfKtjB7hJP64",
  "key12": "2PF6CqicSufowmQ41Wx8mWtgaW11qrnqXVMJDtEmuhqCTbTWnbkrfsrrGmiemmG2CBqGJjfq23Bn81sY8kNqfCVW",
  "key13": "2aQHGsck569mpkkT4GfevX4sC43Tyc5TYeeohdMUWqMSKHcArMaL9wDA8VPeUQ3cfin7wAS1Udq5wvieWo8b5T7p",
  "key14": "f9tnqzi3p8sBPpe9KHKkn9dF6Zd6T1ZMbTw8b4hkgqHVkt4BrcJAqBszQoy58JMvN9aEZoH84ZNzx4V8v7YHDH5",
  "key15": "2oSWmghogfM6i75wGXpGsqugM2HnPD49x7JkzLGiurB1NfFn3TSyKV1STm5RsQ5BTbto88J2WmkABd9KP3ZyNtFn",
  "key16": "32Kc8AqGreBbVSpUdTsM3KchFH4ivtBfoctV42wDbbnQTjzDqRSyXLXA3Q4C6DUmWjDGwmj1vS9Ekt6xFpS6C7cS",
  "key17": "5UagGPdNqVLXoCbjGcx4ZfpHrSCQyGy32E4S7QHLiFdTxphnPfSHLJFFCuKKkKdALhPVSocRpzAwkzXbWrUKUsyX",
  "key18": "3NjCeFPLCsNRugAY5j3bi112AEzwRvqkDsBkrMoCUep3MxMvzp6YmX8YUY4ZoW9Qc9XAEwtrASpZoHZWVFpKRc1C",
  "key19": "5HMRtFDhWbQPhAfvjpx3vBK47Jgnvf3sHskWZESCTJ57sDh9rUHUaD4D6BNxq7qNghx9JHAZroCjYdaLEdQ9vHM1",
  "key20": "5sWy6wynpzGNgJ9oMDRLSge95Z7v8x6aAmgZ1NKSpaah8z2qNg6jzuRj7G5jDhhbFZcEjFmHuqvxWXrhQu3oqdCd",
  "key21": "3FZWvrBxVcicroM418zsZKmz8ncXBdCDsMXhAQ8QbNNMseQXdskD9jHoCFZ7iBpMbma8qtRqVXMoMwswqi1n5u5u",
  "key22": "4T9assR9mfL2P4hhvHZnYdABtSFATuiEFdTLJXbbRvyTbRXS5j3Kqsge5WQG4Ao1BXJUrx5G7nxwD57LJMBJbk24",
  "key23": "26NQCxgoenuBbq8jiJ8wHkjiK1huDjuetGQmfxojYbptXJyYBF7pb37VKKnvQKEYdvSYN626GKQz1FTGDKAm9sdm",
  "key24": "3GpsGtHJzUQ6EL54qqjL6k5QcFeJhJbXWmXqs6aU9WgGj9bvge4Rx4CnfxodEAmVTR6A1biu9ZCeuvDPepfjFMaU",
  "key25": "2pxYAufZfd1bmKhRuaFDwFgxchAyoDM7yX2CtHPZDGffgSdJ7ABYkF3kAP59Q1KnfvtJbxiQvVGmajBGqmkpnkRE",
  "key26": "5usDKSDfwQG8gjYkYWBUo7fp6jUaNG19iqg7Fzukyy22qe9TgqphKubPv2YPMwFZdC331teqkknT79TwNPCWFmL9",
  "key27": "35T9d9Um6TaLgU5fxiJnBoMekJg9Vw9yWPF8yhsFYyKQjzYUnMjj42Ur6FniKwVyov2fCRHDgHP4k96FZ2YVCb7K",
  "key28": "ADoxdWDvpida6qetvoP7B7xTq9R5pLQBgHmiL13CfsxPFnymuKrzCdsHSxJw5Dwvnni2pNsYTAA4YqAuY7r7bs6",
  "key29": "4tpC5NG9KeEZg7mcELV4qLX7Y9CH9fBxfSXRunLJDv2n7XkK5VhwXC6EqUJNsirdiYAzguy3DBrfHJbXeYfj7VeX",
  "key30": "57X86NtjAwAVGJuEJxkD3JRuREXsaJpNr3E2k8KDnbEf8Vzt23UYijicnUAzGmYzvXZzbNp5iTv8w4YBrbBFQtnV",
  "key31": "3w1ZVrdA1cARVdwea87Gqt8EYKTvkocyijkYJYNAimzzNXV9wJbkdizgAQ3EVFwkV4eYAF5gi7kRfM6VTwvKE4Y5",
  "key32": "2Yrq5AxM246kyjxHA5hTTkDPgCcQQa5yT9V3TonnBQKaxccv7dtAyzb7JFy2hPU9dZatp1ZSqJJ2ECuhT58rvCsk"
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
