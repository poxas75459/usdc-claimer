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
    "2Gmh9uEUb3VZasidbK4AQezJ8DnAnLsVxxTejxMchiztdCfmXUm5mQ1gpsLwqXX15cyDDbcpDJ4XfPaRTLEq1Hoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pi7U4JiGAo5ZVax61NVwnzo8JEjHerWDLYE8orAxRSD7UtDq5Zx67rodLty16uSMnbz7rUkmLrxgUQeipeEo68G",
  "key1": "2svML74Rb5dxgsEmXMtwuoTskak3bsfe1DkjLUB5adDN3oUu3GfSPfe1Ad9VwK5jD8oq6iyoWFRp56eKvCEyobaw",
  "key2": "2zSAtfdejuJoZwYxNncsLN5Q2ZvjQqeNbZPzt19GDfgbQoqqGHFe8Sjd5TFaduKG8HmVYEQmHL64BnPApvMBEWjw",
  "key3": "2XDp9Q2F1t4HukC9metK45C3ime7boM8f1aEMUEqFkHofyua1m4UYLFw1W63anhZy3sH7FmR5pXP2WL1Vicab7sA",
  "key4": "474dkDNJEgDrbu3GbzZdXYB8HMhResWCResrEL8h9jTshGa3MtNfKiQHNSbrLwHK2j5Xo9db1hFJo6JeKtdMRbMK",
  "key5": "45v7Wx9eSEC6wLjsRUsNC63K8mq7niefy5ekCbEbtjimonbcKnUtGwQKuc3owp8r4PFuZ8u31oXGagPoqYPDQKE8",
  "key6": "5pUnJs66xsVi5xn3Ms84Ka8ASJp9L669vNTKJ8tEHaiip4avLCW3RA5fDgXAiq5uVwVxXrWvMTVV55zo13vbAv3w",
  "key7": "4tcKF7gseVZiapU6X4hx6FvPXNyfQRFBPV1H1jXxtBWoUarMELxwf1ZKsdYZe25xW2ohDXuQoY37eSBzPiLwfrKH",
  "key8": "2NNJkDWqhELc2Aaz2v5YGuJ7ZyYUYdBMpQh1sd9iSq6fGRUiSEtpyxgXdxW2EQv8xeVY7BwnX2P7B5cQQTRj21RY",
  "key9": "nqzWHFKsXnVqfGXyQyxcHLJGh2F5vsvZzUU57MwnSPBUtxjV4P9DcHJPSMMoJgsYgMqE2FfDYqDK23PPGFxLKBJ",
  "key10": "367FMkm49o7YWKeKQpCNA22ngnm3T4dtcyfbPFHTwf2d9QcciqjPNQXdrhFhfBEpnMo4B9B1NGDjrPHAUqMXfk8D",
  "key11": "4q3L3iGhMV4dhZVChXDEDZq6Cw1NtjAsDexxfYh46R9vsWmpFrGdg9Q9waRve7PGjVkzikNPU4C8mKrCS9PcFib3",
  "key12": "J2azyjDDM3NHk7ZiuAxypwfqHZQAzoSHo6aT3xHVdUFbvErTEmwwMBUTnf6CwDKz6iSvdvHrA5QcGff21hWHiQ9",
  "key13": "3meGmSDWmqxJ3YWKfkmQr12dMoBkYgSPwNfvWfHp47JhgSuKbSPoyqurT27TTaLEp6DMZriZP4WCgfQg8w1UaaLw",
  "key14": "2y2GEiSayRLhyhmBvB8LhvYxWZmXQvowjwrv6NRx6HPMHWjkt3W1LYrjcHTJpDkYJwrydEMxrmMpvY5r4S7AgNy3",
  "key15": "bBaS1BgPaGxmLvaaycghNxbRHHCEvu4xN17y1Pc3aJBbCj4UyLrNwJcSVMhzTBKNVVGwFgXqDbGUpW89mXu5zPV",
  "key16": "2ecrba8kBcTvE5rFvXos7RUpNVVT8YvCmFDxRxuvHKoy1oMCSBFA69oaJ9fdu7cNuxZL9UkjwG6R2T3wFE56X6YN",
  "key17": "2RaoRnrYeWsskqcj3gr24WTCs5X1TqUNeUjwhLXeLbYCNVB2TwCHVs4E1e2iNt5YjUyuWAYH1jkrMnnmoxhczMP7",
  "key18": "513z4ZzqhRoHhBSsmCeAqLcHjrRS7kr4HCxbZLpyV4xbGjVtX9d23KCQxc7rkNJx9yjvMWANWhMcfUMv7WzkxpU4",
  "key19": "4dbKuLGo1duWZr4tfekMV7pL3ywdY5AeaL8wEL6YUTQXTkHGSXhDhTE4k4xyAdofsxHmhE3mS4w3TQjcMmt32AvM",
  "key20": "5JYM9NFZjv4ReF4omys7jhdP344qqR7ww8YpXAV5HfgWCfC2jWZxAWxoHbiTkMfV4JYNp13uQLmAH9V4uyFnCmK",
  "key21": "2DSTMRd2T5T2oZYKSodWtx2r9jhJfLbn6PFzS6gRF5N5marMtVGg4mYsvudCtDEDmQ1RZKzRiub8eTo4mcpyXJ44",
  "key22": "cYi5ioApnsNsb6Tj38c7kRZY7hkHC1wvN4BW8UwtS8fUPfGzoqLdzZ9edk5iYUya3qj3Z5sVdyGzJV8k2HtfQTF",
  "key23": "eAr4FS4N5VdgkEwwkHXkCQD1GxnRp2X1xtaTPhhReP8yJ4b1ncJnsqR7yURixzdzMmKvHZWSSLGYcwsRtYRFAhQ",
  "key24": "5uBrmCSrse4mMjZd8xzkfh7Fj7btMHoudzh53CcFmm5m2SiCjCKCmopECRDnqDVKBizCvN3orAV8fnWsQ9A5ERdg"
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
