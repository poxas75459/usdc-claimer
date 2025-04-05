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
    "5dvhnbDqiPGmyrs1mQr2oDCgQVuo7BUUh6vWHzcaqM49tkfvR9Bv7jFKuk7TwznpiD7CJ1nM115cfiXoGw7eTK4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V8CDjmmz4J4AVw9pboCMDo2gmHw17ceVBJzpM3Jsr16PaHy1txzTeaKfXthrpHeXPVbnN8psDUAXAg5oK7uG8by",
  "key1": "3msqFDHVbfMTvnmxSx3KpJ2UBXhbLGerxDFvfhcbjaFsDYUNe2RbfyHSRKK2511Z3p2jTKgCBzoyhFKsqVoiqqnM",
  "key2": "5XDn1F2Frp4j9oYyoRtyqH6UaPPbHM8vgTgsQFNDLQW2CLXkMPfjbdgSPY2y43yq4CEcoUxhcRb3oq8TEfDQfMRD",
  "key3": "2JRHTMvurFeqNU5rcUgK6xehNyRYxpQDBC5Ev3xYU16uppQWSQKsAak3ydMJHjdAqhBQBn4QFzmM4J7rfaTn4YZq",
  "key4": "2Y26cujKrP95mbbQnYv7qxvmJpQQdPDv28RbUCuntd5HVjNfB4qVtenW9GwvQn1isgJF7LnEb6W1e9ihMUAHopbU",
  "key5": "5ishLcR746Q1Us7oU9VWcx421Y415QM5ijGKukYE5ae8VsQV4VAfp8pwyKm79MSAAYN3TJkt2jb7MfW4yt7aiD5c",
  "key6": "dA1hwYRJqQ6YpsQqQL6DW9Xdim1EEaaGSXxTaW9JgzibDTtCzBMrZKXXofAuQ4ADBerwUmFeFFnk4n8EFwQ8RsM",
  "key7": "4mgo5N93YQdy82znJF35xg9f4QhvbMVp4ktPYzDDWXP546iJXsE9abRZU4xKfEVJByFqSAyiosYhJQhNAto5Pr8Y",
  "key8": "5ETvSPXx7LUDbGyAWjrWjhtbQJKmos3yuHZ5nBha6F6kTJGtzgihBhK95vK9XovRyAptyCrr8BetuHyaiBnPnwTZ",
  "key9": "3Xyqve5x6ajgdTebmwkPbeW1TRmjanMx241JbdBgXVVB53FPLcry5yRyELz6E2Lv4oMpCcj49eiTfLGak8CT4akG",
  "key10": "5j2tJ3H7Lahmiyct7RoihdbneeW1fEDfvvp5nvU4edzf9jtoV5CuaZfgVptLjXoMm9qiYAVHhGjQ9e9fRJir42cm",
  "key11": "JH5aJxZVt8cgYJua9yDW4oPA1TBS3h5yHxdUqLcJH4pu5VB1s5SuTq8yx2Pmvbu1GhttZTyLJArLwC7enCmCGZD",
  "key12": "4VVvVP5YfD61AE4TqtV8ea6WsNJqifsmdi9ufUKDJg93vFYfSC98riRfdrxGMsdhVXEcfNUyRR26sh4pJvbgHVKF",
  "key13": "4twrgBgX5zssv3CPcquD2V5V7oDo7ZEQ8w1dnwmPds7cqFvF9jeJ6sPqWU7qk75x7ePfZYyNnSiZwbiDCpHk5LSz",
  "key14": "3Xg2XhDgXYBWYDJX7qJZ4XaUmUHWXmcRNbHpRctaj51ZCTtnSkAJSaNFGHTgzwim7XVieQ8uYrStuSZ2M89azgzA",
  "key15": "2nfPuZrjWg1S8j2dWYRo2Xg7QrqM1TRtGc5nHD36MjCbTmeK6zVGYXqstRjibg9YM7vP6WBwmEArcfF5Vv2VkzrF",
  "key16": "AkaUzCaSzcUgoX3V5XRfRgX7gncjLHDhQhE7H6U1tseue7KLsccFiWn2oNqwA3rZUTeeCgSEc7yAnr1eew98nbV",
  "key17": "m81nq7fEaERVfpy8w4NWj4wdhX6VxyuXxpnQH3EGUvDvZZ7EQTKDCUpdsDdCN4r5v2QgJTJWX4Ly58xy1A9HxX5",
  "key18": "YQ8nUGq9cNajKvSz22zmUj7LdDLb1mJos48JZTYSwoUbfNa4s1qH6QnTCaZKyDNpWDfftE1ueiBNYpP5Z9NSLPZ",
  "key19": "2cShAjJs5BufX6tVRiUiEncMEWGQR7UHfBtbp64B8oZktYG25Mb3AbL6a3FnNAGgQVSkSZjrBqnxrivHDRdqu9yF",
  "key20": "3ouD8XNUTB5tiXAEdg29u1qCTmJpP8sfqN1hLaoCxnNpn6seBVGzUFtUswKyW9mEnyNvykBRonnQSUZvc6zdwMjA",
  "key21": "32wL9f3YAbmwLTEcU28Hkf2Koj6WHMBxSjok1njYnJBpEAWQ1fg6XNnexc7qmJsuSKX5T13NUW1jnbbvVRqiXL7y",
  "key22": "5PRJSWdopexCMVy3A1m4cjWxjJdQTDmzjQhLyKHTCJMyVojXPmwQjWABvmd9CYrV7Y8i4sMbJTaUi3VLJCjvwVoC",
  "key23": "2aAR4qdTd9sfHK8k6mM4iEXFPvMv7GG4Arny8yS8nSLAzv9cZ8hxbqWLaaAtGHBkX9mkgmwE1Gh4T4GadwWF5fSH",
  "key24": "4evB9KPMqWr6eYDRtfpCQPT8XyS8bFQRPrJkYhR6igJRJMX3mhfLJFsn8hYD5tjC1Z7ZTjwPyvX7rBfo8uoozPpM",
  "key25": "3xvfFai3eWY94cn4jYn4ega8Fv4RamCeinLvd9J13MJFD7hFU3m3K2b83Ru1UZrWxTUVHSN7zBNmvboKKwJBeVxt",
  "key26": "3UJZt6kRY1jc4spGwQFRx1JeCEmWmMQVGbUBC3ZKkn7dc98nBR3F8G4jKmo8EKu4qAyHZ1WSG1pxqAAtf7pHgLkw",
  "key27": "5hPrn5yn49EyfzUYYZ3jqE5EZjQ2jxspbNBBcbPRbHb1LevXGZzBbXfVUN9aYGFXMMNN4BR98zBpYkVpUFsNoR2e",
  "key28": "2iz4wtJD2jv7nTaCyiYfJqeYGmQ9iCdyuyjQB9j5Ehrsdzkx7TJuLNzNvVELePeYRG6BJXT5QJvEk23YUu7r6Bsq",
  "key29": "5nPeAKUBLP2z8eTWFRJVpFfxahPeMHLU3oV5NSWyDiy5Wd7W118RY4MMhiNwQNBnpJ5pKfQPtaQyqbAWjMJXVF5T",
  "key30": "58nHneTbNgbyX76RwAqCbm2Ug6Hj1vypPt2SXa7pykw1u4CZLtZPN8ezcTaBM6JcpbgDhe8vuFeEgBio4J4hXBPt",
  "key31": "4fLk2QyEVxkBTc3uafghYqpP5apMfbhDUYKd1ogpafPDSb437qAiupyQu2Ac8dPezAXNCmCfe8hAJL4no47Ra6Sb",
  "key32": "4Yke6eP4dvAfp83DiEJ7SNHxkiLRLApMYKi2YRsYr9eQQqFMyjKKbXquVyp8eHqjy2L9AUu1cU1ThLXPbM78r2M1",
  "key33": "2mDdd1ENfr17ee7wTiCDnc4d3qVTkTFgMtQeLt17iapncFNM49zWbogPPc5XbgtVLncbaCUXRSMzVm29EUg2vDv2",
  "key34": "4tgA5Y8GCmQqcCLyusMoMuW4unPPPwKSAsFAJxyaTCSjmsRYovE7L4PmwA8HX7SEEVrJRhPDNyNfaXLgAbVri8Cd",
  "key35": "3JRRLqT4wi77NMBBWbMpJiWQqNUiDSgTmMSAJGRBynX4279DXeQURYu3vDLD2kfva4gUjAM2gUELrRorWcp1oNo9",
  "key36": "55J2Yrk2QDtUxCkncz4RjkVESb93kZp9u1MDsMR19hMcqdBXJSomizMA9133RS7WjtPAR2316xf2AvnazPkH4iuj",
  "key37": "2NwShnDdAKwhCxV9MrVUtjJb34yzRXfG7ahXf5xfTTM97tQjrunm4gdjzkhkMp7zTtTUMckb486eNCN79p9wAJ8x"
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
