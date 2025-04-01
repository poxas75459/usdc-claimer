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
    "2zkdMjLedHYm3nEKxGNjUXJV9BD8A4m4LEsVzbbSWtsNpxwwTJuG2k4EYbPazFCoyxKjYV7oN8hVr5m3CHnC8AyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22XffQBLcoB57ix2oopzNCNJW28BCZgZMWSzaAtcVKrLVNQa54RP4tYB1yfgU9f8hKcJ5B1xGPdNYACw8xxPQ6Fz",
  "key1": "2wiDLb54LWTU8VKMnc29QWCqZx8379WegMHuoUaHnzPprV5Ern1SrDKJVWzdQSeaQsioNuSxoEzrFiAapRJVLRhh",
  "key2": "2iPMPH2DyQMdW84sT1vtmjZ9Sw6b5ucQnJjf67tFKDQ8f8JATr9sSd1NUtaKxH6mBENUydp4KKYGoNPx11Ji4akm",
  "key3": "3HYJhLfH9rWRpVhhkvUkPRs21Gu7YLHgxjpZFjyvbAvNMSAEip4U6CauZZXZHjGM1Lak33PguH2y4XDzzbWDbbsP",
  "key4": "4QKwHVY93VE3ipv9J1pge7etZGAdENuoUzWdV12s3V4wwoSghw4AKWXJfqGSntMjjLVoqgiKVR9BqQMzDX8puZmH",
  "key5": "3sLtbwMHpxyCkawRNQ4LdyrAEMvoKGDa98tfvU7MfQRNuv1AM48Wabsnw2wzJVMuTB45GJv9Bb3P2qrMUubndwaK",
  "key6": "2F42C56wsgE4q1LreG5ktZcCZnh3rNo7NnVBWoMsAvWpkxPjFLqBeirb8BM8KbWxdfJ7XZsfVyDuXGWv5GTAGN8r",
  "key7": "62EsSFyZupbrvFVnoZn1AN9tnxt3wQBnP2XBVhjiFvvFEUtz9QDQdXeJoqREK7v3szgeQ14tAmaRALfJNqgzqBAp",
  "key8": "5sqhdQnegpXfjRJtvYXnFs46qwiQ15iEFHsm8hCFPEzKTCva6dKmMJJwhVt86nY6Zag8LVRuLjr43LaP8wycFX5C",
  "key9": "5iyZmsPxvjJBjZtKgTDii7phaSgdHnPf7MWQDwpxufbR4kKAaAsRbGS9tf4cz6WzBqxSRACgxEPvG5kifjf6sC18",
  "key10": "tiXE26gFkFFEZt84ArYwby7yS959UCniR5XxTLD2mcFJNN6N3pStSd1zz2q7FVtHJTKPNPGo3uSsu9dqM15HSe1",
  "key11": "4UfAuJJR3xcRsxCUnMWbxr9ikxWtC5sL8VATfMqhrE75f3YDtQsaD66nqwAm1yoTRwfyU3Jbbzy5aUXWeJj65fW1",
  "key12": "43jXWqTk9Y15FDywWutNHfDmvsRhKtkfHMeWkYggkSXEYq8cF8s3VFN1g8Jyjkxmzdpyr5RjJ9eNQDoSYDN8Dxrd",
  "key13": "428UsokML4X1pCuPoCB4SW7JsVDV8qBwoLuBCFsTadpF95iQicD1zDg2J9qHSe3Lknqhrermmf62NFSwZN9o2EUw",
  "key14": "vZuLchmyMyDrd5iHUi8uuK78kP8sWw8PXhZowmioCDUCEbz3gTBJMsHhaqEyRu335Wjq79RkmWuJ8A62TSuWrPV",
  "key15": "5QQuS1ojZsrL9yXwNHQjYbQUcFkw71sdpL2VAUHCz5k6egTMtbv5QLq8j7uf6egyL5fDvYUpfrnBkEkQtRNrUW8U",
  "key16": "24F21wbofaDHWNVdF7cja2DEFWyizXqCQEiUGd6jD9b6MhwRYDRwoD6KJgofG8ryBYueg29QeqHcwsj2a7kMhmAf",
  "key17": "2XfWcG34UwCj989E6XseJ4iTcFxcQ7fe5biawfonVNPf7LQ46Mxb72U8sAkmqVsDcihMzKudeXSZcMT1sNgRyGCo",
  "key18": "3JMYhJbCEf2uiJ3EqyEKTw5kYVsx6rx3FqSNK3rja1rr6d4hUUew2m2DbbVXUocXkheVb6BW25HpY5xzfLz3sTji",
  "key19": "2nDURyqne2MyJD8VKD2HiycHAT3wviCghWSb5YGS5cGE6Wi6heLnYh1C1LhbioYMVGhe1xU8voqg8eUVRhoKVEPf",
  "key20": "5uTRPJNw6uxCDcxf7MCRSpXwf9R2DF5KNjo5gs6AXN3DhHzkL5wGXUiRP9uvhkbNqRQQAhQLoud5RD656kWkgiR",
  "key21": "5TZLY4TeMiDiNDaeTpCJMpBDL1G3GM4jvh1fHV3ans9238x7MQVGMa7AUtNLAher1tSF9nDioU4zA91YYw1BXnNT",
  "key22": "5xaBKg6CyvpcuzCoKp6mDqganDsRve1MQTAF7XbmccJDScWHLjyL3C8d8tNq5PwjT5P3D6TsZ5ov8u5v3Q9jTu33",
  "key23": "5XL9U9LA6JHsKUs7UhbwYjtzM3FpZ3iNaajidX84iEm9kpg6nbv5J8GMR3qmSBYhMZvR1JADvyxmMpDshAW1vXn9",
  "key24": "A52K1B7MpPzupYon4jy7Dz3JqsutP5ZT44MVpsrNAP7wmED4bWQDD2sgd9V9Ww35kF9az363WYqdJDPhYyWUzFc",
  "key25": "3Pd1e6cp12GriQYaLx9HJehcNzH3tjEAwXiinq7bYkR8P8yo3Ecvev4QKusDNdjREgdNmG48CUSKZoAPKtzaQdrW",
  "key26": "53dKdwi3N9muzLuEf1koySUWqicLPmQQTwT4vNVV1BPCsz5hPY22YRuQKaS6zWr89vJWdpre7ZRKGvHkh4ZFiRWe",
  "key27": "2tBCHsgsY16K2QJbRMH5cKWckjEzRFxSEHzTLDXazSTvKFPUWyVTzGs7QtRKuAKGFc5xKh5r1dkFFSWMiYxKwSm5",
  "key28": "nfn67k61X9FGvA9VYd1MM4wwh7Kgm2RGyLByrk5yFfw8WtyK3RhzUFfTKvWHNLuMARXD9aSfUr8LCKyhvV3x3Qy",
  "key29": "s9S2a5vxJ8jAxaBcKu1n5ymR82P6bzG8E2RcVsCSMVaaourUSv9AYvtDDyMKj2TU6M3eiTbo36Sb6TJ3XoDy1vw",
  "key30": "4psgsgvxbAob8STBSoC1ZxXNKSSUycto6YfSyyLJcP53hbxBMcGPZukUiDD4ahTAKk7fa7DT4amATmoHJfwq5cQ4",
  "key31": "67RiJMRqyCsTFgVTJpBnEeerzKCzDeKmAuHLUQ5eHufJQdeus7D6uAEKxw23KQGHM2BCDn2rtAbYamvszC8NXcAU",
  "key32": "3kvQ8WZxvqEDBM47uZUmXPRAByj1qRFG9oTXrNHZFzinDjwwxU5kuyRFNYUMX4iargudVfrjzXbSYR8nRjAo8BSB",
  "key33": "WoSxb63oYHEoiLnpJqz9A1GeC7SL9N89QWb6YxsDV26U5aPtmdEyDCyGPGGCjisPtZxboe6iPfKaVks5ibNFmCx"
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
