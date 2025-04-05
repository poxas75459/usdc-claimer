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
    "5Evyn1FPbVo8sWTyGaErbMXeDYR83eVAJoeuMiBXcoUCjN7sKdPHDzw1DKaFk6S5m3yWLAZ4gcuvQmn8eiBrwoq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G6NurW2bef5CbwJ4FfsTZ7uxny6FbKj82MVXZNv6fgtdhTGt27cC5krfTf1JZEdqcPTbn4a68wCMUQj7no7mXd2",
  "key1": "2qMiPE3aR9RZueEstQYoQF4U9G4XXJNGdjYNmSqZqXntTyrcRCqueMnmNwMq4EvQo3xTQBeAYihQnzBbaKL7nvE8",
  "key2": "fRDYbSmA9ZSvLHREvbWJ7QM7DZioVGBpnZjm7WdJeUhBXjgu8t1Z84VKtYHsVv9PZQtf3nZLH7fTeDr7ebbevno",
  "key3": "3ujebcatvBCNbfUhGu6jpFCHP9furdwPWQEuioiqRUDcp7vAdubH8ca7pKhmfKyxRRp4jJjkfN3zPWPHCQ7WALzd",
  "key4": "3hfqKEMpdLg7wFjBh3BKFWoYcTU2m3C6Waq3UXrht9wWPXK5mfuRrm7aZAfiWEePsb1o2bJbRvQmBJaVZGf1Hj5J",
  "key5": "2AJ2KqxaNmhj5aqCCmEYZA4uuHLqV9VuFJYnad2q9yvXNSTX7zGHJUWguvoxkyTq75mRg8o5outVpuVwQ5o9J1tc",
  "key6": "32fAnErjx9ECjJbyjNRcnPSMTuEgsJPPeH2BKmhAf6kMLY8wXqxpzfioGSadb7MnVKefUUPsAsRFDbKgC54wghTZ",
  "key7": "TdhPAWMLtqQweurkQXpxW8x1kGEgjz3uTccva1gcmZ1cbhZArFM14a9BjCT3yFb8rRxNzZTP2Hw33Y6nykkGWRP",
  "key8": "52beUZWtv6whQg9Vtb6mzuqU8Lic6yLPpBN5bWNHokkS2gB3o6mVc3ttiPn1XfQBnjTKDQSc7u9oA5BDMp5Aghhv",
  "key9": "fXc4UuxJR77rfU3MWDaa6o1vn1HQz1o9dbLDCrkrbhthGL5y5Vd5X2ynjhKAUUVEiWfD6PH9vqt8W4FTYv5A5SH",
  "key10": "6vViy8FtPagDpkg8Do3uNFjBP1KHYHHm1TPgFTrB4ucApeuNZjCWtoAsRWaVtSetAtRWiQJeEUwgvC1TMGZZyaz",
  "key11": "28i3ayxpKpSQmdNwVtKaAGQ3ZdkpX5wvdFmmrqQwanfNfmc3rap6niiU5y7DEYW77UfmHchMgb5tk1d5BV2it5Nt",
  "key12": "5h8zx4jye3Bn9W7pRRvJ3ugGUGERMMku1Gu3HLPDkS377FVq53nHJy8bfdTL3iPcC24ceWBi5FbBLA4SFJyKFnYt",
  "key13": "4MyLATRzimjoHpyxeEUJgPvkrVBYv56tAbM6B55ihGucKN3A8oXt2XcZVB4yJGKPyfS6QTbSD4Vp5FwZZ7PW6XEN",
  "key14": "5xmErJgnmCu4G5sAePo3xTPp2Pw2TqZRBZ791UAZHTUx3CWPD4hMkewc2wxgZu3SmGfj2xr8R2XXbLiqp2rRk4w7",
  "key15": "2KEGDnTgfBL9BghjEUGRWStBrUmTt9S7FfeSp6nMMuStp4dUXkbj14eXiaE8udXs1acTRTQ7Tezr2nwYnFg2qRkz",
  "key16": "5AFBZT81Eqc7gTHX9SWL6Tg8RABdTwUG9ExhxN6S1iR3bopHbLuGZA5Z9DJco3V5Uqz7AHLUjc6ZSwJSr2hLq5BW",
  "key17": "23CXE36awoDFfpkTpUdg9LfdHzpeUNM9X969iscs1sWcW7hPTUqV6jUXyUgZgxdeHKKcTdVbZA9EhZsGYcvrdiGe",
  "key18": "4oZdYD7iywd1XMJ6xsdkooJ8HFkfYZMrH1EZPHYjeJe5yNqPbFWSmivnh1q3QW4A8ou5TeTn5BBrgdemc4z3f2S8",
  "key19": "5PmMEEbarGJnyHVnYpTxB2kHuKJLYKtGmXozf8AYJqb4avEyutqLSFP2pQv6HJLpfBfZuVaWGAuqa1Ft8Yuo3rEL",
  "key20": "2CXwmUZcVNMj81sxeVe1HhEqvp2DuGT1qPD2xxrGeauXqbmVh1FJCa8WpcS36b5gRKXLnveP9qQHcm1JPCAJSEhQ",
  "key21": "2PYy6wYiUsyC6T2dnyvgtrAN4T6NYTxVDh2P3hgryGD1Wj4P9DFcQzWswoH2NSheP1dAt2qe5ARtjrMz7QuCJPCZ",
  "key22": "cRZRqbEhaexutaDYtY2DteJtcS6dgHvvBtD7oNyBv9zfxPBBm3FivsLJSHTuMFCtpzQkM1hqjL7BiQK74wYTDVf",
  "key23": "4EKztPEEt38ucRQCrBpinDXuRpHyzFiyHGwmW15xSHZ5SDbXiRJ9FWvnW6VEnja3TgZiReAyiVWGs8vqK5eW35wb",
  "key24": "3xgqEB7f1ZaQ8BCymL4ngcYJ5cTbf9jheKovgvPBC6utSVmEYQbQ9ibhYGN5zE334wpPH98YiyxTkw21T1876nz4",
  "key25": "SDS6Pq7SYcbC2VUyYjfab6xNmq3a1AJCL3dmaCtDQ6YVYukqXLMx5L37sY27y1itGpQsRnGPpM9XMk8XmKHMrm4",
  "key26": "5vKG1mSeoo95kbHhhPjs3BfZTGnJEA4PUbt9jSGcesRXv7pdFHcpDLFLjgve6viF9S6Xx5gL4reE5uFnZNkZaYKz",
  "key27": "9WXb8eX9QJKeRxWeHsDBnxhnY4vpdavUbNfBVSpyh5mkqV4rkRqNaFG95SbKnmYkqEeGVLv6kX26KaCsMrDpQcH"
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
