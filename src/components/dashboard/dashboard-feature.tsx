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
    "2uRLuennhGZXTUjBGtjitmfNkZzWwroDZSJm7zxsYHDnaXLkAt8QcBLN5UjY89iDPW6U8rFRy4NkjkujGTTe8Y83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SD9gdiWcU14n1dZjHGKNwy9LXN5vvb1G7h3szLv9gbK5NsyzsmWqKactHCTK5X36yBS9RSVPnNDjDpRMefgDkwq",
  "key1": "5VZ4yvgVRMdfBuSi1TQrUD6uPdveAK7VUsbjKHJWjuVfTxXJo1ivWHYrhzVAN6qyXtU7LQDF45tdvDqp1tjxY98Z",
  "key2": "38ZLa1jEQoxJKZNydMyAoqLbQNJKE3sCySq6cAZjr31ypvp3dTWwuC7okThTbL4GVEobaizbXyTnUFLGayFH8rzP",
  "key3": "38NuTRvxGuo1Sn1K4TAhD3xiYDewGWaGVQSc43jmbaFwbTWQB9Q42HYqUnpqptWRBVLC94AJbcUQCHeNRWkWmK6M",
  "key4": "5iX6nn1FFp9Tf6hcBBRnzfopwYoYaSB4NriBLFAtDxwWmDVMGujF7qdFbNmHtVF7CdvEGf3PSf85DGA6eeREgGxK",
  "key5": "3nFZ181wFpp7DPC7osXqNKmMs3M3CjZ71jFEFwj3w2qXy355TiJPcW12pPtB2rqcSXZ2bJHUW43v7TeVDgVpaKqC",
  "key6": "5B5WBqcwgeBvJxtRR7T7C2WyJTVjX2B5LR18fitKRwbed4Fzd1vf8aYsd83EQxAyruM47ucEL2JBhp7srjqJ685P",
  "key7": "5Uf6YfT8crA6Rs4J7rVwyNQkDvnPksbPFz1zJuerikXeGoLiBHd8CS7ggJUdnWSY1Qmzrb9zZq49LpJznSLVbxzD",
  "key8": "hqRUtEzFwctvcQutjjv9f9to8VCerMM715WXnBNYYgHUWUEbaXnZJcbAGFN8AMfah31fuxMTzQxU8qvrxwAYS7E",
  "key9": "5ERpUQm9AyC4bznmeSKB26pzfARQYvJJtRFHUuT16CEuUfUErAyFmJrGPjBGiqDSRdGA2PchYtLR1oW444Dpmdv4",
  "key10": "2dskoYVUx6r3sC1yoWeh8i1Awp1w9LE3nBGLYsCsceTLnCrXkjhfvmRru55vrwuUB4RoYacRYPwcEPjmMXf3WhRN",
  "key11": "4gpXbK2FYqmh78KmT9Eo2QnhNMg51TzEdeiJ7mHJNhxobvGjWsLPoMfR94fmapvKA3fijvJzRYv4tQRKR8KVKPg7",
  "key12": "2DohXhmA7XA2YxTfJ6rYL3L3EkLXB3KJLpqH13QwkLksePXwgpLoTguKu97nrY1aLxLKpWDmd5vXvXPqUpBdcokt",
  "key13": "44HP4Htz61yjRavVFuW5SX4odZTTRbzgiXs7YuYbMVXFwN4xUEBV69HEzj8G1Ld2ApZ8AUbWLqUTxxbwMzh7Spem",
  "key14": "3ZQHDWgUK9SMvgJbwnmCK5nv2LAw8FscPX8jyeXtWUMCqmkBNhYYSGZnFWoKJsnLQeeAXWokjjQCMe4tj8ovCo9S",
  "key15": "5JF5nKSKN7wfupG4dx1rYwDy6wBmEFPKsdtKrwdeUuVWMWwbNZFHUsEJ7vS9w3FQhB6G13Gr8R9svjrNHj8oUKzN",
  "key16": "2GV3QK8cQwm6H7vaPB99XyfjV681jTEc56RqmjcVvdoS9cNZcFKkL5pnvXu7qznZebMyMQPCuPf7YKhTF6JyKauo",
  "key17": "2cP9Z94cb2PWu1BKuC5sXibi3iDMuwr4YEp7a8rCYnjXKaqykNvez4As7diRHTFyso8PnhzASRR3pXaVvEMuSACi",
  "key18": "3XdipkW4Y3BkMPuYabEjWYPWAhjt3oiNZQLJapNiXcTy9fZJy5z12AXD59ajykcc8BcrFpEUnL9f6o9JGkN9iybx",
  "key19": "3LqVtBQcd9tJajTp185Lzn89syRTQpLpe3sLRmbr7idma4o7XvYymCHJ1NkQvHfkwGgg36wVkm8K3bM9wjUDYZPQ",
  "key20": "5MCYrgYMpPF14JtJTKNyuzLghD3GkNiHaGTfYWBNfQmUMuWtDaseKmDsrqrkJLBFPttjTuGDzWgBSrz7DeS1RH1f",
  "key21": "4QSmBXuTBFBm3Wp4qJeV4ypWSzZAxnvPeyt6NCCV7hfp5f8XJURh2pjA48fevAJ1FLdWgKKAnU9LGyfgp2kD7Vwv",
  "key22": "5uMsephRM5m9Fo7eaJFijAMfLFnoWDKv61YNrpdUS6K5mhhJmDfYQHFsdBkmYDXTPnEaBdK8Wv2YXCFHFnC6fojk",
  "key23": "5tMvj9Ueo1g6ijiZzCDMqXDYP83VpGyHwSKcktxZnTg3mG8dKyw3YxnopNxiXgq38HMehPMqSkmwKENy7V1HKLWJ",
  "key24": "5ypVhpRvcBh5df8bino72djFAkqKRq1raqwopSA6YZxb5HNxNs6S1Pc4AoV7zsDPFzZoPMTKyUXpgAWX6N3GtF1A",
  "key25": "2w6VMDjA9a8fRSDM7V9xB6pqVZSSCHf9Aba3fZW9FJKZhU2LPd7EtYzANpWQkoxjuzybnJGLxCz3stuXmKVfCXX2",
  "key26": "33KYgkfdfWMXbSMVCN5BAqkd9c9qaYbqyhf4wP4e7PfSoeiWHadkAw6W1uFGZ5tWJhpCgaSeghHvEw7E9nSSrMG2",
  "key27": "GNHyb15gMy7RJvYoHs3Ve2ktfKKB9U74QUCxGBhpKo26Q8enem3C8eHQYymH6geZKgMWFNhBXsfThf9bSWWfgPB",
  "key28": "ynsfTpTFc7shFPVNnAJi8VsZ4Zcv7gVHfLXBPB7bsTZkJ4w62z522MJAvkGN4EdS3bDKxBTCL9SbwxDHuvQGnyL",
  "key29": "4cXL8a4KUxvx2HjPbnRQfGmW3riyDHTSD9BiEHM1NTpZX1cJ4PnyxuiLPXWXSkdZDgtDa88bfmmriBFKXPJm4kcu",
  "key30": "4JdqAskvUhuvXqPzbXPtAyi3fnTWCcHjYqiEn6ChrAipSeu5chHWErQKnPDF3Y3viujhUYB2gq88ztdrPDECAwLH"
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
