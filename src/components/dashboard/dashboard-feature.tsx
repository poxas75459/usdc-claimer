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
    "3GnH4pRqzo2YNbmQZ5hkxBUN4PsS9orafZNpsefGptcBnRdPwXvpgJ8DtPP8hqz6BNbmR9VvcEsWpVomC5pNPtmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FAJzVGUQxsm1uCvu4hKnwb4MXTw4FpY8pT5Zh9oATNwhMhD2C5vupEQvYgx9JujCvsxxTtZTLY7wnwTzmgsoquQ",
  "key1": "4wNTB2qKLtcoC6NX9Zkyz3fcdx3MGonZcUD24yTst42KAtQjh47TTu19DREm6bw6VxaHGWUR5PhANC6MYvsWn13h",
  "key2": "43sQx5LvATXhuuJd96EAHXEH9AJxkMuEQW3RKYwsinL1spPF7GZPnbgSvVVGXxvhuBkU32LvQPa7mrkfhk85JMDH",
  "key3": "3vAeYxMPmQkhsafmwjZXpgMhwBj64Ru8N6dH9rGtbwR1vRuyayvREUmw88BBU84BTfuSzX6fMfbgMYHC36J3mn72",
  "key4": "3S7qT73sULxZoSC8PEr8fzz7tDXnwFcqGJDNY4FS2kxhqfUQYr1iDPu7uoSUa8hdodHwxX82hZUxXwrNHqZRbigT",
  "key5": "5pwmXeShiENCqpy5b14NyHJ89R4aFe6ZofYFnHUz9YHkvLTgpMsBJ7rderoY5zLWJ1RdQXQzWtPeKrJ6dec9oKBE",
  "key6": "UW3pcEe2Z7UrJvD4B8shDtLDr2XSYMPibZHtn9oG7R2yp8CpWXx2Dpxuo6NhT5zzNidTFsSVZDBhqeMVTbvhH5P",
  "key7": "2kGvSakT7o6U1VfDgPHgBuKL7sBuJEe58z7Wucr8r9KjjPSKFeCistbpKZs8mrXG15QFva2MnQEi9rb7eCf2WxoS",
  "key8": "2a56rH5VvksKdyNJXU9b2JouMxUshUogvFzxxHqeFVJdNyuQYAXGLoo1F9JGDfApky4X72wTgbPcr8AN6rsSUq5P",
  "key9": "Vgjf3faRMzK6M5wGMUGS4ZcPczZBEgQZU7xMTq6coSyukDaopV6E4CCaNmV2NE3emVW7FkYuY8XixKSk3VKakgJ",
  "key10": "2Bv4TFFjKiJ3ZxeyBeT8qsry1ZcwcTuoQYX76qpJ1aHqjkAMBB4uXfrqBn55ryRFWVmTavLNZBozTgVqDNJRpgtR",
  "key11": "4jNkAkB5T3fANvGSSVkZBQvL4ETC2URYzyzwLmBBQRqzxy7xefmyEzsiWpAepMNjBLNDxwHsXo5WmTvibTgc3BZX",
  "key12": "3VPPNuWmRBfW8zTmVc8Y6wgUAEUN1mVMPszB6KLu9Zjty2XHRPM18nsk5mqT6j3LfayPBrHX8QhRfjkRdwu9GJz7",
  "key13": "8e5c79b6mHPkfkRGAuDkJ829XcXZNkNgKhVExmuZ1kTUxcPpUjnLCX8eCdytSFFW67pwVYd6k8496wqxsgyJReQ",
  "key14": "4RxxLY93zHwhWsBBCbSAE4EoRNb15DPVUyqRAyDSfE6M6UQizzU6UK6eoz5vx6NEcN1xKFj7oCke9QU9fbzWzRHE",
  "key15": "2XESMN7qbzbPReN6aPG3ojysK1zhU3DnsD56BXcpHYkTGpeYrZa9houEvZ2vix6ySDj8AiNojFqraWr6uQxnPe8N",
  "key16": "2RF9Nm8WMrdnSn7St1W2mMx9in9dkjX24Fnuh6w1zgWgdJQVXJTGrnXcJPHHGsDT1jXXqAhwtbxdTzCfi9Ni3JFt",
  "key17": "dukdMDtHJwYZ6FTSdNeBwBwL6j5BJ8C9JbzuBusR4vStUADL1Fm2Z461eAVW9ajFFhVjW9jjFd2bdD7tHLU2DDa",
  "key18": "4tD6mHHvdmFBPtcB5SnAAeJtYdsMv5goetyGSgJGZjZaU6QrE6U46HnKg6HzJteiv1dqAHENX8S2FPg2hjds9Dx9",
  "key19": "4AxJSbeSvsAZWV2D5SYWRHKsvMiBcnJYJi9DYaUKtq1KknG7Bh3ySkV3tg7UZHcZeH4dk1XJN92H4gy5wBKFL9fc",
  "key20": "FvcbT7f2LSHNn5kVugNxH1M891h4NHGoiYZ4xUdFDAC5DgpbEvvNVJ5oDk4p7GhZRxti7G8FUvQt2QQ5JHoi3sg",
  "key21": "29ABUNFD3V2oXYivHqkC4kgtyBiQi9trnkxyoEXqLoM4F8JcZkrPr8GH6UKxgakrpzWHS9QK2UXYLgoXoG79T6zc",
  "key22": "5GD1GDZERjPdcRRZxfzQ1nU8vHi6ZLGtyEMiUehnt9tBcezSwdwPxUc5USSHRui2EzSdjppDgPsxAciPnWcVAJo3",
  "key23": "2PXeBNfiaSYn9wkjE5A9t7srBn89xHYohgBc38eMUKGXVDtfxyheZ8hVahhmQ8qinBLwK1i4Wos9obs6oXKVCJ4P",
  "key24": "57yD5xf3RmDWU83YV5ZBVfzp4H6qKLkdmxbCUAGXJLDL99P3FW6bkGFdYCsXdmzjZFRgsVKHdyTdHa2UBrBDYqqg",
  "key25": "3DnCs92NYnqNXFMGYFp6fv2VQhY6dhEfDm6b3yWWybAPaszKFfANARnEpx856EeU6eppjRMWDwjLMNnpv3ZMaiPJ"
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
