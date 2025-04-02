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
    "4V9UEgGVMKEK93sojuYDdPPW71zSbhLYTSwbN1jnCmu45AcCjJfDkmkiqufqiaB8DpjSGVN6G2bkcTJN3onmhKDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c2fi7CfJo5NwQykBWQhDNceNBQMMKt45xd9LZZFVUg6KGbMHLVAgvvTteMApNvGRBUntXUTRNMZERqNkxHYb7YB",
  "key1": "5vUujd84YeDoLs4cvo46a5zZ9BwjcZAP3Pjm37svvpUAMut3RyMUdxFqBTtmQ847ReSPKxjbPEBR3PYsN2XerwBZ",
  "key2": "21tyR48pFf4QUMFLCQEjXmEGmr8Czx1ZrwF7hvPmoc4szfWA4J3XwPPEhaLvnjTtun4nJVa8RH7iJgt4yjSobutA",
  "key3": "2FkAhjyRjxbCSYcKQ5XuDFAWBsnP4xTnqixDobQtLZprKQ9VjhGFnYW4tvRyS549CNGnmnv3TtQ48kjdNwb9Zafb",
  "key4": "5jF15i23pJQKeJuh63CU3PNV4sqcUYb2vnMzNzNFKjDwqjuTKZxVcCS85fkSE12aZeGqvyA2Tzh2vx6e7drDT74P",
  "key5": "2XVmxnQcei9fnMb7siWTLZuhbCxekvvZxrKxyU5M8ZmZUAZ2n47WSSz3uPABENHhjmLE9ahK9DPAPpjzUPE1EPAT",
  "key6": "2G73nmysY7qx9Sx5QaoE3ZgXi7zPXSyJdPS8bDEAua3i25wFvacWwSYJGhXcJ75UzUJZcbgf9sUNRFKNSgVCjNjW",
  "key7": "3YZui9HQi2CUEPuPYTr2QP1LLBzdJYBMemVD8qiz5PbN2qUR88MQH2MShCZ2T1FzTwQuUGpGH5Ue2PAxBdmrU97Q",
  "key8": "ST5iRYcRTFqKry4RkQHb9bXcCLtHKAEWZ1Bi193Lt3biupYxvUHtqcu2mg1D3dKgdr6DpUAVzaqjtpne3Cmr2FT",
  "key9": "2aesCbL21U4AMwcCeBE4gcLQgviNo2vWcPdKxFdqt2UcW1oo28d8irkg16MXe9CQK7FPD4boeXv8jf8LvKVZMGgF",
  "key10": "iHCCbhMWUTDyM6rrTgBeUqnCSxMygvW674gPtkYrpdXBsDxBhx4fmAi42Y3pAwa6m7EMzYb5A4ZaDwtypJChQt5",
  "key11": "2YYGspJt4oyWY6DtzVwVBMCeztrEJwuX684rh1NWeqBd6xmVbCBBR8zQ1LafeMaF6T7VQ6JNA4g8oRZrBxgxYs1E",
  "key12": "4aFwbhGZptRUGX6RpG5hegH2n37f23W3RbHsdrKACnsD2CPziFDRBUhrLSPykv1NqFcEd52nsupyHwu8kPLzagNC",
  "key13": "47q6VapsFNUPitVwsZQv6pLBxMczA15Mz8h5QDEPmYvzz7dGmv8hdjdLWxpe5uTYpmixozFzNUrMkz2Rxyh9hgZM",
  "key14": "5EdL8DwCqcfgzBmbmDewJsWpcF84rXxCFefQqxYrGPy4JP1qqL8pEctN9BwNsxKypiCUe3AzPFjQYpeFBTGswPXV",
  "key15": "5MpptrEge37AP3Fzuq3aUx5ssH8NzvAeXvj7YRivHw9ye2afSywAWh9uzT6vBVQVpxoGN88c2cnpAb7JRXZs2j92",
  "key16": "2MfZiJQNPLi2VvmiyXouAbNJ1umCL5QW6P8LGd95GH1czkFkD4V1knjXKMKdvDpV6RYGHCcHAg2acca2ocu8j6gS",
  "key17": "JUFvFDNm3XekpMzCHEQ9EPgMewyQEvhXGYJhgt6WkSsdMQteSgWb6NXM5DBhpZJ7CUmUheinXL3kWBiuwvtvKvd",
  "key18": "4aBfmPMs5txVfd2GFQuvcj8wJL41efAmpH1zzAzJsHUBEoFJ4ikRr972MhyKpEkiHT6zuAEcFMYbJcWRPEgSYnVh",
  "key19": "5UhLNyX3evRooTyGMP3L9z48AEWWkn59uRBSGpuYZW2tfsEvn2NUHpgcqJ1z6HnjdS97hhFi9Tos9aBZHxKay6Rx",
  "key20": "2h4itWF2gytUBeRRkSesXPVv9BF2GbWvv1tdMDPR3TySckAL3b1kaATZoPjGtkdCPsSXw8ZSHkvFDiFbvZdr49vk",
  "key21": "2NUZ7PXJJwy7bU18AQB4iJqPwA64EQr1pELLnZmLs3EGe1cGyuqWjghs58rNU5JrsapERKKTrZYkxTEP4M8pzWCL",
  "key22": "WnyWRJdaBw2vjpGev2kPYkc1xchexEv7sSJGazjzLCbydZmjekUjVGtXf7z2RvUQ9c48PT3KDb8crpxr8s4WMqs",
  "key23": "Hi7c9qPmCa5kJFYHV6smsPiDJvaVEZweLiq4bkV1WKe7pQa4aMe47tfnYH7SywgDrRLLBPZn52RgQhHNBzvS1bp",
  "key24": "5UkAb5AzEb2rM6nuXAtg6wJeYCQZ6NPudtseZEgYDbSvh2gwATgu5aWvo5ErpBbqru6UwJUEYsVK787wkWQQD8zQ",
  "key25": "5HpEtxj4SFNDnxiHTKhYnmr2Bf7jWA2mTH2iCd83eLdbh6FdMLL3DGknSTDZ81yFPLgcSGjLarkekHq3TysQnLCi",
  "key26": "4Vm6CTKHUR1XVMKwYbfvHgx9UbiGAL7BpjPh4x5FzhgepJs65sZZs8EXNp6NUnTn7v1HVTz3ZS7u22rbhqGvwRJC",
  "key27": "3N3mfLJSCBcJmDeJEDSBFmKiq2BtTxT6EJAiJim6CpAWsYkyyLpRzUSij6hSDKg5rnjHQXAf4N1qUsYWbtLTLs9K",
  "key28": "3GwFXDBjy7Q76C2RZTFALEaworS6viEYkBwzVq8wraK7B1xcMXdpbgZmXcHnBDH2LKoSkWx2pdTR4Ns6TDfS6TBP",
  "key29": "667cNmC2FKjhEirZwVJpZ6c4BVgujXwjDqAARF1YT5ovXAVkJRfhC737Sa8HpnAWZjYtnyijmKfmkxtJJx7NER1t",
  "key30": "2kTQXYTyW7XRsEWNir1meWPwdwS5rrnmwopbUZGB5L6ZtLqjsp52x9GP5rAxtfGvSSHLrvuGgRStXtR98MesKSUj",
  "key31": "34nbU89qn2dQqoNbJTHixPAZkAbnojYF2hd8fjLBfdZJn3rjNNC6RiqeiR655a2jJaYwgiuc1yMByLdt6ajwdPDE"
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
