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
    "3EFuHZo9SBBVywhVgxDUc6ud5gsqv61zZSMCVZ2Yeoj2AE1Uex1HcAFfrZSWgGVUuWh8dmpEX2DF6Z9cQ3CgZ6dn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cV7yh7n5aTC17TWemPhYiFBxphLGYWirUxTos2LFHfNkkjTMg1AQGG8uvqgDi4BdKpsqCiykCCZZcfs5Nsgnqut",
  "key1": "3RjGDQUZGzHPpjxr2E1Y8BgQfmjUrWifsSTqWj5p2UaQngZuguho4QdwS5QkQspTV3W59hjzAPJmoYo2moeivBxn",
  "key2": "WP5MsW5aVemUTyjCzRgmNScQRu2iXYmxn356xoM6S5Bx93HiDZTmmnZXDZVvsYHo8FKntt6bqBvMLnN6QZaBPzL",
  "key3": "4yPWxgF1k9d4knT8NM1dHz4fG8hbswpj8jN3SxdUWPiyejcnL83fxc9Cf8cGNV5495tm2zNDGgv5fxrD91y6Y4H2",
  "key4": "3kS1MXwkm61KmVxXAyQMqDdtDnhc2VMxAnPYMGdXw7tSAJGZNLQfzxVtGUBGmBCyNjqddxfcrxEtJXeiZ3JULobq",
  "key5": "5vq4EWdCMUZEE1dYEhCk7EF32c53K1xcJhJ9mUGhq9cLTF3Mzn9G4kV7WMNJ1FRPP1UXbN6ySZZU9tiDycHUFnxM",
  "key6": "4G7anzkmhEq2kdH62yBNmMJyi6ySxaTsTrjySQPG16e8csQifxwf53agSr9JaQgc67FRt34KUuRiumcJkt9FEoUz",
  "key7": "vsJ82YaUGv6QpgJuoyvzsVrY3u21RUyAfQiUZzoEWf7cwU9sNhA3TtKNCRnhe87ULNmihzMfjmGt8uss9jjBYWP",
  "key8": "2iZYtmZWc2CuM25DzRDCKGCFNfbYC6EVJWE3zFxAS7c6avGVK4gxmvUGbokKF4xGjEbkFsabNZffpTjXP7gWbu8u",
  "key9": "3GqcTY4BeU1gJbqLLgidhnGBs2mq3ojpsZKJVxGTc2kMt8zhXz9yGjADGGpDRvLJqPizBYYauZQrKtJDLrp7ksQR",
  "key10": "3rEkkSKsLjQGx1uvf8nQYcfKBiubwNRdzZR53DyyQwwwFs5uyK1XSioLx6siSCrPe47nfpEYx2i1BTvWqYR5dSfc",
  "key11": "4GWN87nWV18St9DqzJjBhAWnoJd67R32ZtJcLZB8zgmfgf5BV4ZHiSfywTUA4M2n2xQfCt8dk694DYprXTgmYVmD",
  "key12": "5Y69QrgV123ZAxMQhQNbWvHbkvSsEQsNdX5z9nZZRutEKi3jDcNRTZnA8VpscXGTFQtrKNDjtzA3jKdVpUF7xuWo",
  "key13": "58ma4uYsoYP8KxE81ZMkLsZHuwVMa7xRWw3MmCEMQ9gdj7BeQNusAqnbsnyx2C9TGCwaPiE2YiGUEBfe5FucHKsV",
  "key14": "4Fog3xnqgZEMkqKZ5ESSDorP94kGhEwHN3dexySiRjE3gXB4EGdzm6RuoMwwMRyiWeprbq2grVxJmpVyLUcA7p8H",
  "key15": "535BuecG3mmBrjknrYSTefQ7HTZdjvZRgAsVgrGg3SSYsDJp31RQME2PXA72gyaCXyY2ufjmR7VpEFmusEwY9ck5",
  "key16": "3iAC64Z8jWjRRRPFDER4BKrieYkKaFh2xG33EAJs5PN8ECfWXwNRKEGgojmB1fwwuHrcsQCL64npPBNttmHMaQYE",
  "key17": "kiWod7S9dFcaFw8vtvQJpyCvzJU31YyjwbPMFPuzYqji9LPsWQZhjdnRRo9wT3HJ7jFXhj6mxFKGajwvnaVJDcL",
  "key18": "wBKzQg7sYMr38JdDSmZcQ9YNGG2Wa3XG8KPgMJVsEez5TzFSexPxkGD2PpKPS1TfBZ7yeDgtkgZYsaDQChUeLxd",
  "key19": "4TQayBfdQp2yKL6LZvnB6amjY3mhNGJoGYtfXvaRD98kQwDi6dVow1smsNSjW9YsS19zoT66CAXffwuw6KpFTi5e",
  "key20": "4PLbeS55CUHpSPDVDGJWAbE7RLrTBQ1VFWhUScHYvX56QnpAfYAsU3rZPkrG5GVbsmzygdyg2cjipf3a2GFNNjW",
  "key21": "4CU7avei3f6Wau6Se6uWEr6ek4dNth7niy9jjZjjEMkTKo5Z29BAj5e7g7BqiKLZqgk8w5QrGM8i9VWkYRXHqF9L",
  "key22": "65nuotz4c7Xj9xZxW9Hd7kJLRfHfRx9Yu32pMWFHgZcAV7PCDM7Lc54SdUf2A9VUyfNhe1dqZnnHnoPHVb5699Bv",
  "key23": "CCA8TgcJikuhpZLjnRGy1Hd7sMzDC14UZVG6xYdrM6peGXveLNR4G93WQPSXZfk11PS935xiSLfET6dnKhaGieS",
  "key24": "ULAWo1x25XZetffeKN2extPMLfxJXyuWDb9D75t7jrJLff1pr56FYGPnw7DJgJTquQTiJk5NjWoRVxMY6Tvk4ew",
  "key25": "h33aG4xp3CExs6vy5tk9FMKyocA4huZQyn9j3zGcnB5g9VA5hWtWQRL1BKcapA9GCXXgXJveT39JJ1eBbabbuLx",
  "key26": "4adQJnxKt44DgxufaoerwdEJEPYE9TugVcDMbhHT9557W5jmTyERxjc764vvWLqEfxu2wrQjM31Gcs9RVu7H9NCR",
  "key27": "3k572UdLnDitmquGFD5JT6DduWVe7TheQJVPdW1MgYpnLRvnnFZY1Mx6TyxEsE3SS9SoE4afnSySzSbssC9Hoihb",
  "key28": "54E6Xap2vxi7tUdMYDMnzEZJsDRc5ham3StvfheajKo73bsKffXfWxcnyrBU2hxibXo62AcDiDGTX5cpxLmQiwZd",
  "key29": "2ktXRKvh257jwLz3iMg2CpZvYcvNFHDDRmUWZ9tM2CbmxwjZpCk8HtV85BeTgVbvyv3HJTiFs4T5XBtSHfnm3e7o",
  "key30": "4d5rtHeb1fbNHWLkkUKZ3y7ufWM1iyGt22SppqVmNPiRWGWm5e4KnLFjP64h7LrUtDUKYhz2VmxhibqcbuLuuHww",
  "key31": "rQGEVnNGfqZgo9W47DJ9cqdRK9caeifAjtUgCyezFnJe3qhL8cAnXoSAe67hYZvSSdg7XZDfEX83kbuzEFNb5Wk",
  "key32": "4CedwRcGDcrxwKSWM6u6JQYXkohsAqbkxjA3Do8bHJUBJapaGYyYABMFtRJHpYSTRbMgoUYMFW2FZik29JBoQPpL"
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
