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
    "2Xz2n2rLJ8NrqmxwwmPXjmA1wSZ7gYg3g7UTU3PHWxfDxog7SfRPdjqtFtJZy8y3z1KyiR2HaLym22zrcapog2i4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DpUkfjMm2Z3yAw5gBGz8cUHd78qiu91SG17DKmogLbiR4ZdAuABzmVVJbvM5euQoJbAmTn3ZspEzXPTiz8MWiRE",
  "key1": "4MwVKzEeNVoJgtqCwvXhmzbjdvpGyXFAvCZyyM6Bhz4s9kpHTNoy58SEy9aAZm5NBVcwxcPbxFuQXm5c5iWsUAr6",
  "key2": "aFcatV3adjtZidUUVv6Bz9kRKUfWe74hQ6Qg4EJ952YXYPDGpbZbCKrZg2zzzAhoJ5ZPXZq7pFD5EwKQRPTrwdc",
  "key3": "3BjdDLw68ubW1ZfoRKUkoQ4eWkfCNMUZo3yCrcU3qbBkPEcNxU3mQWvGf6ZvQCDYzTq7sromV6PiuNZoNLBqYBus",
  "key4": "4UZaHvMHkBwWFs4jTxJ5VRXRzZ7GRQaPNES4cs9Rc2aukmEHU8Jipa7PuhWAPQGad7PxKV73qD4hRs7iBX55WXkZ",
  "key5": "3mZNHDM2gWj7FPENwF3Fyemn5Fbh3a1UbUrPGQ3j5TLxHWdwCnovi4jiPG4TsCWjUt4Y9jM3P2KyEQ3miPZJ158H",
  "key6": "4hMjrDAkKhC1k353mG5wgoSve8YXbzN9Ap6K7tVc9giVw3RiSAmug2mv6vZcir27GfCtskLrUNmu5jBZVMLPWuL6",
  "key7": "3VKpehheT6pmwitdbZhm4VQ6MR77fAMDewVaamaverAKgj9CWGavskUALHCPL3suVfG8xQW9YkkzEhN7haV5X8v",
  "key8": "5L9mdqCAAL9TvoNw56eh9YJuMDELfGeYZ2C7WX5GZynYd6QnKMvfN1pYD1rM9eg1J11CdzmhUDmN3hE44hkMKjEk",
  "key9": "DPLZ6EedxmAuyLtVKN6ZMWqwjhBS7x96zY3RQ5XA47Lx35Yw1beGbHMikx2PE2jGxWJdx3NKrGk98rm1K78iVyn",
  "key10": "3yK29EYUmMjYfT7H6NMN9GpbFxyCEymhxqU45s2EhSqbM4J9F6sm4GRHhcpC3N9zt9x13n8v9bNBNoxEdxh7dAMr",
  "key11": "UYrxmkoCWZcnjwyNH8WCEfquDTMosERTxnCmyiJ6zscWN9ASdMGA9jGeYnJdzba8c9p9jbkojFksXzCsqdmgYxN",
  "key12": "36J9WyGKJbBcrWcsLzQVHgSzcufDq5TXNVuX8vgpx6m9FKeRKFPZMUmzC2DGcrXqSGyqo8Ac2T6e4Pb3c7MfVhzr",
  "key13": "CJqiAQxDDXibnUJ68pJ2KoY9oLD48YiiwwXWAtmYZhC2qDoEQkV2ifDsr7ZA2cQDTWahaeTmvahQyz6G7x3z9b6",
  "key14": "4Dukk7tqJLCnsirTAY6Fex6ZvgKkYzdm4FSj8hFYyZr86BKfoCTqQNMgmYkkAu3T9r7CMkNikavxi1fe7mZ17WKD",
  "key15": "vR2otMtyQ9oAC4a24h2nhxwnG3mKckTrEH5mzu5y4BaEgGA5hUBLsoiLJA52MwrMQapKurvBnNRVkxwCzUEHbWy",
  "key16": "yJaMXjp8ruQnVJ2VG7rYmp9hBJAtXd6Mpe9GaR4FQyd9CjaFyKFBzeunLWNBDWBVAbuNhRmDpnkWTsF6EUUfKoC",
  "key17": "3dEW9MjzzQ6KZog6piJzGbVtYPW631sXj44Q4cFavHofKqnr9HoprLBWuwMxeGzKuzUGTnhjgnywF5ZW73w4hcfc",
  "key18": "44eJEj6Qzi7yffAn5C9hPF5DHH7tYBBWEfHpmo6QQcpg15V4PHA3tiJ3VfkHgPxJq3WmnzJYGSa5eC1nQ5zuBwmr",
  "key19": "3e2Y92ZpJGXkmd1K1GpCVyW3kUs5oiKKYdDNw88Z7wpeRTFUL56KvhkX2hHr3N4s27pHUv1otHGDJEuPsSvgVaLu",
  "key20": "tNqVZcG9XPTpp4L5gXEwBDgoBXBqssAuUaxwGEeLECxj4LbWRPX1v7XWdF74tWaf6837nziwwRTnjpx7jasHQVZ",
  "key21": "2mRDr399Zivj4R9qH4Q79NAEjD93W24Atj9ysmPXVVHiL2azrbviq9owEnDLygD3DmUMBEfsuFZTK8tHz4opxGV1",
  "key22": "2BQWHAfG4RfKu79duZumft6oqpuAKx6jQRptfxYjupVVM7fwR4bZUDTf7H4tf8bWaeHKSuDweecdvoPMbGHHutsc",
  "key23": "7UG7sAxf14qGYBNSfaehn1GmyzwxLncdcJ952fgSiUxZk8BrJ1bCKQaWxzkqq59kjGx28JNnw8XkmYtzcPR2s6L",
  "key24": "VLPeeTZ6bT3JBHjDZWTDKbocgjPD3YvsLdixuUugchYraibScrAa9k48W412HTSssJAfeK4RqN8J5ZmbQeYV2xx",
  "key25": "3pnizAVDpMoGBtTM9s3gG4RDdo2u37xw4hU7N2j41mSWVGcFx3HgsN5W67XoSmCF5DBKKkn8DtaCtzxqvaPmZDzD",
  "key26": "56CknFkfVLRQUoB8mGnjyRBCNKUZJE65Gh7P8tiA2PeZ3g8vtHSCkY96Czfii6gkvxoQQs7j5dPzmAWE1m6wEyMK",
  "key27": "3xR4qQgy7GGhXDgUD9Du9GjY7xDRqXmZp7v1KvyC2KRcEbbEFBer6NpX7d6gZm1ivKeVQ5j559vavZETVnkZPDL",
  "key28": "5h1CuY9z91kxgpqSnZLAWnCR4YYgUdP6axQK8K2iS6wPzZVv1Fb1B2URimEutcntde5Y9mMhj5KPHUiFmVzPzyZN"
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
