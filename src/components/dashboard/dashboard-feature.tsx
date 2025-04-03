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
    "3yWHC4sE3LaxQF741DLbUxVumAZh6Mar8EYPdF6HdwaBcGPShbFDNMi741V1XHCC9tyGjE2zax9ganHYusRBGvWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o6NVd1kwATgveqUqAtwH8f36Ru1Uhtc2sUztDPUBUMvx5kmWRxgmwMSfEsT114dbmC4dbbtaHx9PXjHokgs6ibo",
  "key1": "5C3iY9tRWXz5WiURdMLB89EK5tgTyJSY6DvUXmdHZ6Xb4yqdW6kmr8jScbGCuo2P7S6tNtZSHuU6yqoGJbnJpE1A",
  "key2": "2XqYm4j8o5NdmitsNYsaYT2JSxzvJ9A6SDeU5nNSvboiEVMsNYamfycyqLg7wrk49u2o5WaJcmd2wFJmGU7TXaEZ",
  "key3": "4cjLChrPjNv66z1tZsNXmvfUvortZL6C14Fi44guUiLKqQJiaiMfiNUgE7JcWmWWfsHsMBYpHLA4AFatqrDAJ9f8",
  "key4": "wkkir4WrgsuPVi6RmqNxLRmsKK2o4fPQsq4sUPeDwM2i1EnKQq7RGcGsHKVnBHH6MrGM148cxfRRaAmtiJYaaFP",
  "key5": "StFBP6w8dGZ7iQwzVeq44NMR7wLfz2mZ2W662HfLdW6oNuJLUd3JangcezMkrsSex8d3SmUGAiiVBh1YzMCnuJD",
  "key6": "2xLEJf71hFNZkFEvAngcgotFAwXuaW5xU2QtNCWATb3AJo8DGkjJM6h3RHMLkQus36HjK5PfUijPD1ppGbvp3r9c",
  "key7": "5X4F8ybFMX9k225T2YVZbADouTbxLiNwf52XwNsSusM6heSA3UnLV4tZwEJpzYoC1ej4f7SnRw6QwNVNPLQcUbog",
  "key8": "TFAuYp4yZULeeDThfDgwch2mUy94MAKHCrrqGDPb4Ak22HNTh1kkzvGNN1MWTu8UFshLGQFAqxKmhaw8SRw6cKP",
  "key9": "5ssGEFtaAQdxM6gzmrJcB8jqGvxgx4ev3CeQ1m5yPxpFtD8DQvQtVQNHy7KPUvJkmVH9XhND6XyGWYCLvF8gZ9Rc",
  "key10": "4icDAJXm7KMJnKAEz4qhMpJNdtj3fJ4UV2SNA95G8v5Sp4Vd1Mr131zpYhHH1JV7wrsdQk3Xc9bJN2QHx4swZNQC",
  "key11": "MhFA5drg9ovf3Wpi7mH6YmHy1EKvVtrxcU8zKMaJFmbnwPocY1sHaJy6G1QU89QWYJPYxqWseYhDYweKChVE5ik",
  "key12": "48z2QbgbtCmAJ6VoWdZGyEZXcfGWnWRYaW1252i9WzRjXbYWjpHRN4kHC1WzFqSVP9LCVL5VAiV92Rve689UsUKo",
  "key13": "5L7r5x9GakJtuYdKhRWsP23UfdhGSEMj1tVgCXowPDwH3sMJCntBZkULh4Bx3vNTZhWiff6FvSEBJrVjtLX6ba2s",
  "key14": "4uMQvC9YYWyQCn96EZakckbLmrmPVrh2Eq47t8zjJtdYYFtTUb2vY8smzkcuZxsRpPZMX8KCzRsKfJqBsUL52WKy",
  "key15": "2jLsMn7vUyaXqLsxVH6ASqELwkMcxXA4WfSavJFENUJQEaKXsTtYryGThShm2TZDEYSYFiN1sLnygSUP2iDEzyeq",
  "key16": "j6BECvExgoCc2ya5mMYYG9pqT8wHoWhcGT3Muh6nqKSo839zzoLNT6yR9roJgVe9bSmeraueHmcsQmJJNsAuixB",
  "key17": "5u4qzCWceWJobQVi8224K952BP5L7ngAvMRdnoGz8rfmMmfqF7cyk4j7pmjNA2btXRXedwyWoWaRsVh71dmeUi4u",
  "key18": "uNMixgANB9pr9e1amzU8ucFPwBJJpn9rthJyjh2foS5ybCAfLh4C9HG8cLUrKnyHD4R756PB2xzcNiLMPz4RFeT",
  "key19": "3KS6hS7BQAP7XVRVAZzSUEBZatWyLS5FTRxmHueQwYTC8jhY1PgW1vSicsCxy2RpbKXR99s5nF1sWc2CKWPQaJBx",
  "key20": "5jfuQvDXLmRFrqMovaXp6Z8syiNHXNDTFYUvToQU5rruxwSxgvKkFGZLNHtqf6h3TnAJMBApbeYxJTSoRUodbXfC",
  "key21": "3MCkFPJhGoYEnNZPAry1v4cUtqJfozyNx8MQT4BtNc37HXsDzvCXBGtN5BLsvEySu1mTDVZjwBK913wQUNnRpe6t",
  "key22": "5ryZcfdgTeVUHNjoXhsvUS2jSHurB14zLFNkfBKaVkN6rrKAW5mna85rKXGRkLXA7eEfJmPeRSBU45p4QrAh1ggX",
  "key23": "3x8QYarT2tark7JbH9rvbJwJGURWcm79DZZPAU8o2i3jT2J3oGMkETkFzVjzkdMKXo5FF89PY9mP4dQbCJ2ReUSs",
  "key24": "2SPgz84qZiDZwLYKLK7VqWNwmqv1bx6oq2ds3yATo464pUCjCLJGFrQnC1RCn6PExBdGcY2tS9Zm7gwAoyEfG4yQ",
  "key25": "4WjksBy5f3PWgCQzCaUhsBbhfVhaH9MfkNCWmcvLtPMBHVcwj1qmXvzmokcZM2bUAurNe2T7fjmS9zYneZsjvTRC",
  "key26": "5tJ8T2QECXixg7SM1X49vfkDqSYiDMXXtyHN8Uxrw8n49oYTugF2UtB6oZWc5TumDNx3Zgmy5jXJd9vRdcPbyGX7",
  "key27": "2AuyTU1NAr9Xs5hNxFR8b1cvsYsierJkBvcjF7XjatBjatGLccvQPiJoFupqfor9NxiYkfYXebSj9fBeSYh83sP1",
  "key28": "4YsVrdqVa57pV3W3YKBXJtoyuZpT2QLwaR5h8R16rtEXyNQimQFEuLjbmf5FveSTVjATZLLAeFuKXHdNsccn7KFx",
  "key29": "Qo9inXnge5pjtw5XXRhGxUfgKzXT5Gg8HSjkDJEiAScSkwGLQ9pArLgfV5Qd3sA5sEyocRtTUzbyGM6utfJvM47",
  "key30": "5ozfvoZLgrWqgU8657jHHvM5DD8ZAAGQam16m6zJTp4KMsukwfeU12iDFSXti4PJvviWTZxajVvdBtpg9nJjZBx8",
  "key31": "2MZ8x2461Pz34Jt8f5oq1YneVfpJ9V9oNDqPGKLeaxpEQKX2oM3MNMfHHK1oEDJu5zZ6VWmjwcU1VesmQ6LYntpF",
  "key32": "2vfP7fm2TurLAwwVRoYC2VpEFQeWn5uSMdNhyHr7eBLk2BeWUcpQK1Qjre6oR358QUJ9dVGC2RRZEczjoLsQtUVN",
  "key33": "2et8AXAQ7CfTVLoNLfS8R7y1sfq7ShjGC4CBR9aDe5UbcJNbwUsnUKyXJeG1P4WFxXQij59z8bHZDAoG7QF1p3yL",
  "key34": "5u2N1GF3ZCkq1kzBHg6cYMgGm4EHbTYmodAcbffcJR99xWCucpYXUVtejh2PbKNWMydsU4Xxzv8qcYubVeRTdD6g",
  "key35": "4AqsG6dK9uzk8SedF4TVL6GU7kmVoRCEY1EmZgMiKrQNdC4hRmuRrg2d8VSLDkART2kUtveKqcyJjR4iMr9S7Dzv"
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
