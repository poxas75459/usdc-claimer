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
    "CWuDCQKtYjzjA4SN2UFXWnyWhAi9RMkej5HPQme2eVCj6AnDd9e4EvBCrX5cZn4m4Arm4yaecY9GBsbFBYanYRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vn6ctHHxkTNdLMBcZBHyFAiDHcgDyMDBvoGfQRUA8KAECLtnL1cogEdzmFqPHaU4C39tk8XdUeZhp5e8oA6xG9Q",
  "key1": "4FiwfvkUngNrM4118BWvQjDw9H1gtPFamQxi1PcEh1tUKspTGafsJDakBDzWsuGTLcYR7a58MfgTkcWAyo6ss5GA",
  "key2": "3tbL9QfAcFUiHpz4cP7g7x5RYn1Tz4nhvxSw1rh1CWCBdJ1G2Yhypr41dJm7ssx4kXMcEK2sjyBuNYXRnQnBck4G",
  "key3": "4LroDCFj9hf9U9DT6v9ekMXtadyWBoB8WzpU6riJyhHFa1dpb2pLELmTwKQ47GhBDH4NacEicQ3XwtdcYjZrDkkc",
  "key4": "4sdsUwNzk9qqfbBH4akMkBEHpsm8fbty7fk4c4ASvH5AtpPWhLqqBMTBHKyGCDzEpcaw2XC3yv2gN6ArwBEJUi2D",
  "key5": "5vEdpepxpMeZZLyRedUajXN3e8TzHVktH6XbqPEeBmY9RF1uN2ZNJRV9vKTff4pdGoW3WGsB9uKR7ViaQeRp8KWy",
  "key6": "3QqNDvR4wEHxNUZ2SXAkRmNpFpZUnGs8bawcGZ5f16RAroateQ21wp5qJb1evLsJWczAR9YmToyABkuQX8usgeVy",
  "key7": "4aGkQz1KLd3UZs2Nov8ZTHKBRaeyFuZnpBDU4JEcuv9SEMFJ39s4oXyWcjUycd47VWq2zy3o4BBqQSMw9c6sTLfC",
  "key8": "5p5QyVebUNgnY7MNB4zMFgM29dkDftfPcErVxFantj8Ah26nNa3UMG4Ed38z3jtXPJ8XRepXsRYQEFeF9Zw26P22",
  "key9": "dh9Dp5qfMtQ3gTxXaSg1bQBWxPDBtScFfB7jMJoCYwmbdM1zuYbqNn3sWYtw93RHcG5ur7kMez4UP1PUvjWNmJN",
  "key10": "2U7Av7yyn3DVTU4k76dqRktuJRrMf2p5MKmmog9pST87LXW5oHqHd1KbhoFxBvpriNxx5Fqe87r6oLpnAi9EVXdF",
  "key11": "4XU4QvKezoYBTRDYKFurs95TYqanypA3Dg8iFReL7cABvWVS9yvGQeMdRqQLkYbRaBzxzDCPJCzwpobLWwHMt2rB",
  "key12": "5ZnPb6KnYCnrBqp6LcVMUXS64qt3nHRFDYdNknD9EySygDCP1d9t2WFacyyxAwGczGLfwsaY1t2M1C3MNDc5gFEG",
  "key13": "3EvDhxeF4xPJkTGJhax385zecFuLDH3zyuw61JPtqp8dLZ92SfRrzAoVVtKLCH2KkZaTmPSzPL9GMCuXjJFh4Yhr",
  "key14": "4gvYNCjrpLvXB5HP8XGtS69GkoTCn1zKJDY2BVeD5tbeU2UhmAKJv6N6UmbiozgnQn9C9c9CnVZJvm3DL33Vv6Yf",
  "key15": "43LoYsUUz69sNfJAciRngWXkfxLBJN4V3QvyAYpB8aRXJiFgD1CZb5RQ6ee74xprHbT43UZ9im5AsQF2UkB6Qg94",
  "key16": "3oR2rky3M8iCUFRAsXjcQ8ki71B4rMWxsy6rWsJURakxY6JNFdWHoVfX7MTB4qr3rEt9NNczyewjYJ5oj2BYRZSR",
  "key17": "3QRfdknJrzyDcU3x1xuHjzJXk6pyZPG7ipSre9AYdAqgasbBseTnUgYV5sDqVF6wb7bLgGxdhUVibtDxuwPbR9g5",
  "key18": "598FZBsaTxH2Ueo2S1xb4xcmzhSDpezxu8uMaT4ZEQweEzCiJztGYcrPz3uNmjrqQSniwpew1gQGiX6xD5gKwwSi",
  "key19": "2CttApfctnWQZvbe8dswXQ9qJ46EZZui2inhhApgsh2cxhcMaGvHdWvmt513MQK2qXQcdnJvESJ8Gf7G7aywowhS",
  "key20": "4kczpbjp1Hgoo3rjR2RYe9nNqGPfWZxyEjjjTvsaKGvjCtntr99Aq5UWQR1j7aXg3p6eHMS5AHcFwNdjgPhqTkVT",
  "key21": "3hkKACzGUXZEiwQBhAkUkX7c3o3YV2AwwV4mX463gz9rUg91YfkQPhFuU6L9CF24s2GUuW6V4sS6X5eXbWoL1yKS",
  "key22": "541FTTtjAsmM3HNArvx8MWd3zpbqCV4q562fHu8K6fMAPzJUuWGpT3FYT1gmBuNjUmshbBcyQNqmnUHEya357Z6J",
  "key23": "3nCPzMmWWexxvRbkQYZy1PjQ2NTZsR2C5wH2Mqmxwxo2xE7ERqGWnH9qXHMMihe97fNBZyU1AtnFm4E6zvMdvruF",
  "key24": "4fkHyhyBEM84hWdmYPtLVMbD9LLMu4mVeCdcbxCkQMf3VeWCm3ePpUiur6bLqEddjowYUsjjdeNnWmQVnvkp6jon",
  "key25": "3vZFAqvyU4zrqAXcSgwTtg935BS6vZMKg5fX6JKizsBjaKUjrLNMgm8YxKrf6D2bP2rX3Bnc8Sj3XeizGG4zDFJQ",
  "key26": "4Gftb1jnF5DTiQdhoXR5ztko52uAJy71wfFgxngaNBATyGWR8ufg7kQx2cgCzWd5KQG2MBuf2qJ4Lr5vdTTJy79Q",
  "key27": "4QZZAaG8ybcHG2jFa5As4WhUHGzBVECVMP3qF5hc7gBndxKxQuN99d4JRJQ3WkfQYjChMyjdMcBTs8Ld8F2WZXYu"
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
