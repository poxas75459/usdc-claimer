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
    "2sat4CuVxNvr5wvaE91eXWVuBN7y6tiBbDrsL2keNoio7KRmgaApXznYqKDWMQ7vCyc88td6ZLCsYsPTbSDbU3iz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vV6Lg5rAsWTQTDQ6C5BXM4nrJgezt4iDb96aCSLLJpMzp6uEidmqYoLdmHtwrt3CH7zK9pdx9FJ3dYEBfnA9sqM",
  "key1": "2eqP2xijFsJzB8aojKNEufXwA2Fnbti237ApkbCYn641uawANwcwjyhnsgCXS5nEPaiRZznZLusQRBg3N6uKfhkJ",
  "key2": "7XfsRLEewVkPNms9K4MPya2EmfCSopXdrhyhC3jWHN5Ja4dUmcLDos7Nzr8jDexoTyriLMevUPPzAkbtGk8qksP",
  "key3": "59m5rLDEQB3Rg1gpYgNgczrKNK4Web4moqzpCYTirPmrUUDuSsJNax6t1UaxzdB4ZnjuwRx3aX9mMqS9YAPtGjDw",
  "key4": "5QdBpGocLtQTTek7VcWr1sHHGSCey5gWm8Xt5qaM5SqJLnGQXqyqtEWyVarTcvPyuLnN7Hdvn9h727Yq5pLasRfQ",
  "key5": "3tb8qKpkUPNCdSxFyjFsPgQhmw671ePAqbu1BPcwpDE4vkrok3RhHZfyv4UGXo3cwYqe4tBXiKWy5Pt82rsTLtpL",
  "key6": "5jKU9677TGNquMXTXipukkbViUf12Acdeu35o7uukKeFwHXbhGt6W1569hXjJhxYUjUskWihRq48HHUU5k3JFWnD",
  "key7": "XUjXg9fPp2DMjAspGPrDcxdKSKeEX29hASerLxaTgpeUaU674DQqsPFfMQT7yDTNVJwhuzhqkjXDFdZcj1e1xrQ",
  "key8": "ZjjX1zgbFdBuPjsLuLn7WjUbE28XVu6okSeEMw7ymHuwuXeRBLSuw4wbS4VDDD3BJYrYtPx8LAeW2Vwax9keVcG",
  "key9": "3NwLNKiUQXdxECDLnmWFe2SVqnyxpZii2CxaU78PqE26EpGEy4Z1GDzHa72fkCdHmK8rhyuyqpxFcKDwtYJVgVwc",
  "key10": "Wsy2WSVDrsTJHighwnF97jsPHwmgM72CBLE6vr8qcrLkuZUgA2uKsfnhPMFuKifEDDAFzV6fTTD8id6HApNbkyi",
  "key11": "vbWCFXzKReDtr2PxJuhcRhYM7kZkzNxbPE4c2fjM4A7iJ87zTqsLXm3YpTa2X3wEEumS8F9Zbkq5LCrUXMoEesQ",
  "key12": "3thkihgrT5gnpR1Pe3pVq2fDFPPFntWJo4G4iZuv5zm88xVebCx51gzjDXodCoNkauzjC1Dy1p4JjYRWdkefZd9D",
  "key13": "5uAYospcnmjE3PiDxaM8RZkmT8P3FKsuFGXomU75tguTWyydioisH6eL48bhHY94aT3FbLzRMoseb5GJR6RgrHNs",
  "key14": "4Myb1EdC5vC16enA9JqiRgYpCQSQ2FEsZXNCqgsbXHVrVZJzDBZ92KUdXYiFyxFZtqzqnDSDnpyUVCB5dJot65Co",
  "key15": "4GohZxn63SoR6twA54UDxW2uZ7ArPe3JctTQpZyRg45qpcPLKRkbfwbZqn9vSdfkitfEZK3KmVSU1qkfJRVR9KXQ",
  "key16": "3LTAzU6BJWNm2T88hxYQLcX1nyTw797a9pKNgnmopXijXM5y32d1snB2gZiFJ5JEqDzLTP9rxXtTBnbgejw7ARKq",
  "key17": "4Ngvj7FVkT3Vgb4vPxSs47rHYQniLw12v7q7at7a4LVF9MohKfTrbjpRnPgB4sKBbfzRJLv1znXvHKGnpMDev5Jz",
  "key18": "5VaThQ6nKy4Xj5xWFGMvw24U5ejDXf6ZgAEPhJJmvYXQKL6BgxuVoGKNqtmFWDkv6gPtRRLBsy67v6LqSE9VRJha",
  "key19": "KALRv1e5gu7EohWBB5Hc1z2DvoAh3XFJa8jZfqrUdHrKViPVN82LrGku4rrWWgY7ofj9L614iVHbhW61dREyNvX",
  "key20": "3vR96wgmogy3w7hhTDaeYKmkcZ5nDRUvPZgGNh4C23PK8g18S6GaK3VZnJ6aoRa1FEqRg4oAzkGwmgAdw9P7etkU",
  "key21": "2fzksu8trgrkmTJZbntETQkNcXX31UiaV5jCU4Pcum7SJJKnj62HtbR6zmqycZY68LbW3gm5p5idTpyFNkriLwW1",
  "key22": "2yCirM3RytLfVHRRiHxNc7jEaFQwdSXZfJzzK5QsFt6cKjDmp7rEoPhs3cRmpiggrKF4G6Hu9moRC7X9nKMrgoF7",
  "key23": "5AvtR5E8rsGChnP5uw98FicirU8QBnRR3AuPWzkYBJNVDETtuTAjhVpUzv1xQbFcbB1s29T7bwEzn4GvUd1n5QNu",
  "key24": "5MX3X7eza6St9RUDPVkPR3Uub5L1hP2bJ8vSXchP3WoztoLvKtp9hgnEBZhvdnahLFECikmSo4RozLdGATBWcrxM",
  "key25": "3MStF3f2aBDLRohQTtBavoH9aT6Yg4zQUVCynzSXnBf4XF3TZHrXp7f7PnLzDrhF2jMz963mY7PL3R4zLKVvJi7g",
  "key26": "5wq8EAHYYkkEYxa2CvAgKBz94TwbReR4LigT8jcUBPR9sRHxkeRpo68HFPPct2vhLEunXGoieZxUCt6Zpy1MtpKJ",
  "key27": "5hkpwKX9umQSUAgHbxB4FU5w8kC91jnt2XR6TwKHafpRq798ShhEUodVdTc3D1r9xgXa618KERAifMS7rP99jVza",
  "key28": "24VkHx6LeCAUMQ4LguWGo1x8aspzhtHUagdHRhQgkNsGcF8GcwjMr3WiP7yxYWNSb2iokkzR3UNj9o1e8igV1irU",
  "key29": "5LsA2a7CHZHDTAv511QjNHyYmtVhNSgqskFHh8itab4eRNYQXTUJc1hFRXzkumcKH7VwWyH7aoVSEYQcyjUSQWJ6",
  "key30": "2J6F74Zh7GNNND3SvLgEQ7vPfZxXCD9GZTsSfBBRTcRkXf2gAVWJqZGc6gS3i2UNVoGR5SaR1CfPrgrvAcF8V9MV",
  "key31": "4xj6p9FA6Vv6HmabrGHfC4vXGG9w4DD7QWCDjBAMAMRenTdRq27JFYHiM2wc9qQzkq9S7NvhX4VNrsTyfLb7umTp"
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
