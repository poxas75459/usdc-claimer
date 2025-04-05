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
    "3dWFHHLX6noiNPXoDqZxCRnaRuwrXrtQckskdKWq6gTNd5227Qzt7K4RHp256ebYoLhszbBLE9X2jUqFoYY5JVLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UuY9WxenyViq5VrDz9A4NucxNjLqmMUR2tT58Psbvv3aJTb9M74ixUG2wgUyNgmPxhjQnSMsddXnPEVNzAVanw5",
  "key1": "dQsiAzKrpcFiHYyWhntEbnPWQirL1t3i6YtD7yR9mXZiyuttXbV7hx3zkBTcJyL8xejeJGR6WiFNhWnGP3BR2GM",
  "key2": "i91D9NVuvN8VnRDQTSEM5ZZidgaTyMC42U4B8pk6awttNLsZSGM3pQfCMaBQTtbAYsbtyNwEZqcBj1c348zpWKD",
  "key3": "2YUaDRqvf5A4zp4EHyHULJVHuVUkmRLHJPDafknAEt6YmoD4J5aVByVEULuUKsp8U89ejzhAUC7VvtmDNviGQiuQ",
  "key4": "54XZZzGMyRNyEWXWQXBoL5HnYEjiQcm5T6qWqjG2R2XdwZe2JHBLACUAZQGyQnYKuGFfofwUZikp7esft2eNdamK",
  "key5": "2z1ejHWbhDnN4EKi4EZD5EkBhFLsyJxBcp4AkRwyFkfNzBLXSfJwLN7AqoZSuUZ2y23wmPZznuBC3bRe7fQTjMyw",
  "key6": "4aN9HoT8ymDoEz8Z5CPVKFdw5BaK93AsSQnvc8maDztFzbUHaTfzMLkXXbWeyJoDJiWWbKv9nYdY6nRGFDQZNSgF",
  "key7": "KXKPR1bAUH55RifMbmRToZkXfjAaRd4zt4mnWiXfnYKVQeNih8nbwhGWECS8ffXULj5UXJAPnEViUBFkqk8jVct",
  "key8": "qnuUX1ARDJRipGUEmVh6myxzQbzMMJVsysxFPjeA9J6uNgMWfaeHdDoLGyf4jhwhbD8WxyffeoZEFTW2G3BqJrf",
  "key9": "21gLzed2qz2D61zrP7X4oJY2uLWYByA4SmAhVJTCk5zXb9F2PK2nxhswZdU3kSV51GUoHHtnoD1oBqwMBkmoEvNa",
  "key10": "3eLr4iCGRkqcfTFoXekWnDmFgGXWyMNycBMKMuwVpxqhewk2QBkyVN9SEqbR7CgSvwKJ6yjoQhxW27g4qDcbKAxz",
  "key11": "5PW1HnSVUC5xmUMY3RNchaAHgNqBawGjQ1XWF3BqX6yDivGP1j7dXBqv7GpcULARbw6pC83e2m6n4U4rs1uqoEvh",
  "key12": "Kbi9dxRzajP6rzYcXDZvp2XXFXHQiCGtx5tYinNxxn5yjKScesq49HadfVd9aU8NTE1YQVSq5noRS3zwLESHe2S",
  "key13": "3hzVVgkAJhYDwXSEVxj4Q4w3sb9no4A8nr36ZGNapBqvwxfjFUFbTLuhwxCcbimt42UTViDD8ZCtV2QiKq7xLMnH",
  "key14": "4YazRkwskAcNHDs3nasRMDWEvYBJnL8S8YEfi2tiCtrSrX2NrN4qRL7hXj4QgQznjgb36A912D2gGhWX37vsaSBN",
  "key15": "5Ss11iDqmKDmDvaoZkf7QfZ6mTnY4Cx46oaSmFnPAmWqatg3C87Ddefsm1SJbCZhVWcA6bBoq1e9Um9GD1dZAM2f",
  "key16": "3Eemkqn3WcYvb2HYjwPMeggK3pdmihv6rADX8n3aike2UPDfzu6eGH1PS6wfrZ4TC3wXJGfdTKnGF2UevnWbgqcQ",
  "key17": "28sTuuJTgm5Xa8p49ue15nc2PBnkcRA2BPQaYo5urwK2TZZi2suggCJh6bgauRUzsPv3eqbjzKUuiie3aqhdXHq8",
  "key18": "UWHRV5FV5TK2KM3iXakQBLRVj8odGN84Z5GLVzHmTYjuX9Wpyeb5BsZBRP4PFvfkM2RmXyk4JXYAxC3MWAiWktu",
  "key19": "598zL1cuo2t87romoQM1QgfCLnY4eyofWSLsqAjfUS2iXvYDPyyvJyKpQWAMhjoK5G5WSUCxVwJBcCHqFdWskzMF",
  "key20": "5W7iuo2Bbp9nafs5sa2m5RYrYhYNmFrWo6GksY7mWtZ1G7eszHKbBukqcyS2KVJqDmbjccWoRwf7fs46xgpqAT5j",
  "key21": "5uPdVGFEbiR4BVR2RfsFuqpx6HSoGiZE3P6eGJjG6kzFaySTjunqDyTS2sm95jy5bEbczkxWgVj4CSfz2w4jKm3M",
  "key22": "2Nt9eictF16WAm9B1B98zxaPb6giQQxfTE71zMKf93uASn7uAMSM1y8T5TFrFi7A6UjXP42NCn6fyje3X8SX4yut",
  "key23": "28fewqh98C7aUjJodiX4QTkyuaG3uVbhuuUPcLA8LJZzuSqDZPp6kwZPvTYS1Z6Gc6ZW3ecGA82mtHvUHb6F5q6s",
  "key24": "5n2VeCoycTaLzvrfCZ7SeywuthzoJf2LjjU4cC21KaznnDQr4Cxpa3NuKeKCm4eDJ6GvDS1Tb3s9cnShmMh8Fhvd",
  "key25": "1ox3dt96BBBTsd3gBUtuRyVFiaXwLuqmKVFSnchZ6se4RnPtxujJdTYdYfTnuLVsJDC6fuUMFEgf9xeDkhUbsC9",
  "key26": "63HwKteChwTFs8Lx9tzUUAUUkNPqFi7sZ5VfgKN8PEUCTazGVgAu6Pvmogz7MA8Mob6uyhCmEFU937mqr57wSvfy",
  "key27": "4bhHR4GATvimDZriGCbUA8EKwkFTWkZnHrz1L1SADfHoiMUrtJDhPKbSweqFWpZZd2XQNXfZcUJMiyJ9EegHqaWn",
  "key28": "5g9tgJ2fVgGcKvxQLtodLVPJb8h7SfFsyxQVtVxqSjreapq4yUtVcY3Ddt9gM1bs3AmFemE7hC8ghH4fbsrxpvQa",
  "key29": "3WYSBtmf1hCNvGZFnYPpaJL2y3pwaWosQdkfYw6jcibo4qakjmpKmDvvch35dSQAhKnmyEMy5xzuuhQ6bQf9xCXT",
  "key30": "4HxgzNsWPSPmbQpfY7Y1wvbxTWn4ups1YZrNR4VVmKF6f6TNUYu4KDWmYnMqjSVzoPfSpAr4QUwD4XpN2aV8xQr",
  "key31": "4HSAYtjHP8CLVjspxcpRfoM6D653sy8ag5R2mJS9wL8TnruixWBo9PwCaJ8qEcWSfWDkSVQ8PU6ZnRXMRpWZKWCu",
  "key32": "2A7baQPmRiCZeDq6f96Y1ARXRCgPc2LPW79divzYGo8Cw87fG6ZYGQFgWN3SNKvcEVCRQwv9sGtHydoAExrfCG2h",
  "key33": "1JvWivR9MEt3g1DfSez22XdhBT6w3RyxCJnz68U8BJSb3xFxNKPspMDKWwPVcN3hSLGiEVN5NgwB9kxRUEm4K5y",
  "key34": "3o1cB7u2g9w9nGNmoYhvYPem1y4iEdLCQ915zGRrwbXF3skdsZwuE77yveGYQAB8jnNrNtJebcdXcnWXBhhwH9pv",
  "key35": "5k2zHvgyL1kYhh9juo1zR4SWQzy1dLHsnphUZyjHvahQSY1VD5riuwPCzz6QXqBo6dbGN3AecXVKrvicnHpegSap",
  "key36": "3XZr5QM8hseSwhGnMcei1S3FuwWPPvrEVjYappVtJcaFgjddQwKcsXHAZ2AnjKMSvQPQHmuGdtrzBAFAqGNoHAZF",
  "key37": "tKD9Wk1jYMLoX4YJaBHRvkQdgXArGVk1TaKxNaAa51yW3uGU99ouvUbNFvEaqbSSHex4fn8g9pPkZHoYAiknupy",
  "key38": "WcS5ETeD4UcRhaA6dAoLiKay5Mqo4o1P5tdu9nZshBwMhFMAHq62Kt5ao7UCx6mUfwhvL3gb9xvMooQVEqTjf4t",
  "key39": "4FZaWzD8YPvwR7N9Rp3qm9KZ5Y2PQJ9noYowWkwWV2obEwXBrD3ZeYc6uAn5CRA8Rah1GegGsSH371ZEa9HT8bQ3",
  "key40": "ctKjmhVYXz3RHbdvmTi6UtUBJTKDXYC39cWFm5gz9YAxzpCf3eRjLxJwCxmE7fPTRN3T53pzrFCHQxL6UrKEzay",
  "key41": "gxokaoKX7wz4KmWVMGPmEtdKBqNiHVe7Gfv3b3QsMi2jB1eTU9ghh5oDY8j4NShVSuFuNnGt45qN1djECdaQdAa",
  "key42": "CPiFtFHyArEP4J4oBaDpnu7QCMdJwbsyN1rBqDykye6tkrwjFA4sdmwcZw8tTaB38ev2NcQ4raVriVBvMcNpjSK",
  "key43": "228BFbhFHsJgAZveyi41iM8CVcW47LwBJrD56PkwjHSVgAkKQebnJf9wAu3LAHiQnuHe9kjQNCtgpGxfVXHLjBrh",
  "key44": "4DtkT671EehUF74CW8RA5qrqqsHkfRyaAw77noQ5PXBQcuZwdVPWGM6DcrNnqn9KDAEsB7h283BG8jmKnszxtZPP"
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
