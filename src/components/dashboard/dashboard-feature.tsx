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
    "4LiKSEQVre36FgmnMs6oZZVU5svm9QnhLNZiS9BMMEka3uGmDtxH8qor6uaNV23bmxar8gMREg6PtbppWbWVFpZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZHuT6VKw7cpGy8n8Nyx12jpQd9PsW7DTKCNuHKH6y32b7bLJunhEn55QQBfpcqSQcS7bwTWdAJizYLzd1aQ22ao",
  "key1": "33JzKLfoX8xs1UrcZBk38pPWqYXRzpqKRa5bDmdQJbXZ2ao7m2fGubefxajEhBMUV9vTB4vCMNSLmFgSGPMvF81m",
  "key2": "5pidYFUND6sDPHg3joEcCYD2fiNK2QAT3u1PLowUj9kBkfuNvjawPGgCQrwaKookYPTtL9sE3TbRQ8onWm4XxdWy",
  "key3": "5YJ2bPEmztA9z7mVYiGDwjRruTMZXx3t3LNzCthwfynudXeSodVbeSBUfBWYAcsnrJQiXx5qMWfUg3iR8zqGakLP",
  "key4": "bzEsQnLx89BzrwWbSCQJvhFskjdXybmySeecfecar7KQ7dykc2fzy8dwysMJfJoKF2UacT5CvDTa4St9rnHjRQj",
  "key5": "2MXaTdbxaNLqUM878LFCdzhfdyNwgdRr4Q8xGKZnbZnuptRnAd2qbZueW5eYhK8kSTLHzJGdaEZUgy4KP1nnyRMV",
  "key6": "3doUcLHRRyDqM1ZKYCgHEE7vDFDgRUmwoPBWkutxm2VKTQA3GjDB1wcMVDL1cFwaE2ZtqdeaxzuvDx66xmBtQ7yM",
  "key7": "656nyKrUVsV4zZCXLT6eME6mitU3ajJNpJwenH8i59WxKogJpiDuqnBuWiU6QifrqJVrMuGUEtcszgvrQ9AjChF2",
  "key8": "2smANLsjY7PbGJ5Cmp5CsCRCoAX8HSAQamSvDQJGPoq9wYMvZaMypjP8cgruJVL5YtTEThaALzZnbqvoShU3kWss",
  "key9": "GoyyquqkHSEuFYATbkC2YqMVGG89wpqo6hv6dttt1ipE44e6zWJctMjZyGXEFa45sfBqUnYCxBPXhC59wHPL4KF",
  "key10": "514e1seg6rJnZLDtjHev4BnuCr34eT3UDxQfPxTvVjcsjFJMk3rFAN33FEA6Q9PFKGohdgZocvLjtjCvnRpyb1Qu",
  "key11": "5GYLA6YbQWmAdjW48UuiCjKnEQCwcGEzcCuu4YnWL1E3jSMzdxxjhH4gUttTRTWaz4roVhU16ow6Uo3bMFNfhH6d",
  "key12": "4XRgbTwHqWSqYmWaRJ7DDDAuBYAjcsuVMZj8pkRjwnZyKXKXstxDyft6GsYZPexUD68FfGzCnMK2vKeqtktJ5m66",
  "key13": "4LDYLvqJtDHspysYJeHZnCGSSm4CdCx6sf5wJdMUP6kbPNkCfjaxNrMNtD4xrAXqKnrDYp8xvWfYoVNHyUNhEAte",
  "key14": "2TiUA6Kr8V9BYyTVcAsdxPaRDCmiLdw3DcEwz4nxr8uSGS8VWt3NxdfkoPQVi2PSgX66MS5uuT1wszCKcVrmnAQp",
  "key15": "253fxY17zBVSsQon7AhYTnBBhGxCXVWyqq3i4VkSD6taSbEbvckXUC7otwJVy6tRFtJKUvfVU9MAqTpoN6F9AaFS",
  "key16": "2T2rue2gWXCU9PkteeD4HzyzWRLSJrNVHJVHSqvZbA9RpkZ75sbHSSWuHSLCiZZSeJu6SPWU4L6Et9aDAg884EP1",
  "key17": "3A1Wk22945TeeJ8sqw9UPaUTpBiRupDZk8zpiUeVBjMY7o8iZBtTAnN4NCkMRXRiktffru5t14QRQxRc9taA8yQd",
  "key18": "3bDXv4AvzyUcVpXtaHvgh5aRL3ceNvqTDjTdbGRNjvF1wLsLC9TpmgCskX1xgYszhBFaXMj8GT2LfTGbqfhLrk1B",
  "key19": "2jJ88mwv6LzKqh82E2cXaV84KEttDyX9vfrLrKH629A4a3UgLz9wkdAQNua8XSFkHW7QYBeKq4FBkiPY27QVMQUb",
  "key20": "Vin8RqysidWpjsfuEtNVeyMRkAbusEbjCRgu4Se2PsoX8HVpe1oSMZupx1sQNqzhtG9FFWVY2Q69yKZW6EnvZga",
  "key21": "53rXp4aG3MhWFJgkm3pVadqke3rmQ5Y96NYPHTmpTekZNRhBQU6Rx3baEk2BC5d1dE7DSLbktBUtU7zzTaaVRvGX",
  "key22": "3VC9UR8MiubqFfM2oEEkWh6CyLR9KhUAVczLxqXXXwLgRy2zHMvUpLRY7fJQGidkHsGUjp6nXvN7Kr9RezV8exQF",
  "key23": "62adNBqUWow4E6BAHCCHXKiFpfyMiesTTziouKx9NurAUAa4pgzLnwkfUN6owcvMtAqQdU13SxHn6Acx2CQrRnGm",
  "key24": "3FEmNqQutxCy6yovuyxEkdGwhEMFJ5DW9bEGbqqSWaYvZz5JfnHW7ZMpFwpDNudcec4vQ6L5owsbrthPmQHz34Ds",
  "key25": "psQ5QFfEs5s1JUuoSrnNTpRXx2iDF15fZd7MXnV2bEdvvxer8CpRhL8rrQm2FHmkJvyHai5FSs377AwFxfJgUt3",
  "key26": "5j3YH2SNPV7NjQp4vXGAdxjXDLz5QjBcuqhtxWDEubNd3cLuhmbr5oM52Z5fCYJ2na5HHTbQVo64WKySwdQA9oYH",
  "key27": "3dZsTuGFTZsvfvcghuq5X65knHPVs84REt7SPPyNaG7xNxX95NRds4mrjcHCt9sFotxQn185LZBvXcbRpnRXwMwg"
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
