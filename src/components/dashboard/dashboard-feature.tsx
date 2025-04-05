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
    "4Cr4miKgqxV5S5KqUazFUG3Q2SmRLKGF1KnQCvL44qTqcA9VPrgaWYLDyyY8H4axRrZ76Dgsqyj63sK2dWLQ7yR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vh2yDJLXwuJmmT7sYmDeFqmkCmJFdK23HttuqCUP7v4xGFDhT2FUgQHSwoTAt37S7k8i9wVXaS429MwyDJ5HdUh",
  "key1": "2mWqJ1djcCbndzNwDhsW6TQXjPFcXk9tSRcSkxFhepyi5wddAE123VLRCwzxs2DyBTKK8RHJDGFRnfXqkQSCQUZi",
  "key2": "49Gt6v9zsJn18gjTzDC3vBj23p2BJSTqVNPGL86yEPe5xa2dsVyWsnuQyYhBFp2oKtbA147BGUtAZNG2xi2uwiGS",
  "key3": "3EfSo7AHvpbfESqSZya7PwN6t1pbPGKtsrQM6F2DDAtHMSmKFGQJqKosumWjjpEhu94kyFGfbWuLDcjDf1BjLXcD",
  "key4": "2jZctf5GuhgxmJ8ea6xvkfa7pbf7Pa55FU4oaEh4wTDpv8LUGzu7UmmaX7msgDa59DAK7wUyxX5D86yK2kCkMKoZ",
  "key5": "49e9uy8a4j7WnCWagQBR4XoWZUyQJa3dMo4hvVQLF87NpZymAPnBkVCLbJZwe4MLJ8QSVk5EWG2kVVbVqynmRAbd",
  "key6": "MNL3XVKBNLQrBbfCtATdJUSuCvAXxUqxrQBSQmaYJEE2x6mBzMo8mWopjMBYUoC94ojJAnVYa9A3jcN7zJTcLB3",
  "key7": "26Ah3zoUoBQP798ZtgbofA4i67DFq6MAdQsKXUu3fKwN33J7uprCvycDEJddTt7jtNsJ5ACUgCR3QFNnXCsgrESZ",
  "key8": "23k8nKerdnL9gWn6x5AamxmbSj39tUW7ky3u7n6T62PJUZBMrCNSCeLgiQGiCmrk7TotkYtZgpe7NfTd6AyMpzUD",
  "key9": "3SckjGCjESNsQdJB3QxryXJ6EtAQ8HmPGB96Xa569QRsBhPXZ9a2KBpnkci7Qs9TurusJ2n9gw8NNHG8EgXbk43G",
  "key10": "2epp5JLwYN7d2rPRrXYeyXQUXtYWDmaxiNse9aZ17yCcnJwho22mm1a9aBczkvV2CVT8v38Usf3L7B5Bzc6o11UV",
  "key11": "ez4LdBExCoMhRPQT8xVBhefch8xo27P6x3ScvNUpg9AmoK4qRS8v7zQp5sNvSqkV35rb5T2TefU8uoFH1SX9pd3",
  "key12": "2TmLyHPsm8G21xntSXQLK37ndS9czf4XGHtDVaxJSNWJFxbBo8hk5Cq9WiSQAx2eLSPZ42bYBViYie4YP7oKbsnH",
  "key13": "4fiLXAFEbrJB1aVwnJdrYeg2RGk9uYTq9vcywrupvZgtVrFELDb8X5ee1mGjHWYZzjiJyc1wArfJpNH7TRkTX2Zv",
  "key14": "4mwYc9khRTzAZXFJKBedShJ6UtUKKKJWGNiBUPceG8jGVnq5wi8GZtAtmqL6Y7TjM6zp21pjVC6KdnPExfGsDiFY",
  "key15": "4gLVhwEvfeCVPVxg6rcVNyXoZBFAsNvUhBPDq4umWWrimQsySdUoemazjxrfAj8r2KuE217GtpXJbnPJqG9REReH",
  "key16": "YTcYvmc7YmHZgdPNqnasRuX6r8sgyE1Mq8MCoQSobV7qNb4iwu7nq6jJPUggbEP2r5DZT3hRof8aHiMTqKaoTVS",
  "key17": "2JDuu6SeaNQaYj89qLpNJ7u4gKidB18fPBobSMT3rfRuMpmuftrqJMknuva4uvksh9HiCwRQFuZb3v1pBpfJa5m4",
  "key18": "ZnfPSM9hSJBsLFujp9Ljdpi57m3WghZ8zPRZZs7Wk9vUovWsjtn4DPrwxtVV37uXmNwr6XjVTpgp7dpHxsn3W4M",
  "key19": "62HAENcgJYshyhXUc8vrX3UjhLQ2D6V1gSHaxoSh59uDiMZWSh4qYdBphjNWgRbLxrnJynLEYnmfL2uZGj6CgbDm",
  "key20": "2ttgRMA7JifVBGpyA7UBzfiKxoebfzyzQQoJgFpDYUZhoaZWD6Yhm2CChX61aSbPZ3hApka2YX3dnGsy5DAXPGbi",
  "key21": "3iP68R1X1km7tiWc9wnLJfFFXDLFmHauWnsDkNNqXSJpphvE8oBLPxkb1HGy8WuMCyHLz4YTDeCRtHLzFrZDa7Vh",
  "key22": "yNVwHE8XwAefK4hA2nXiUMz8B3Hc8kjmyTfDRjnVQRMvSjYRin1XJenL2PhNbSvQc1Ywdrujntnrmpx3cfxgaum",
  "key23": "2sRF5wUgGz8mu83c3f13CB2Dt83PNukAqQQCBs8vuyCGpGECqkQ3TMGe1r8GrXRo1UHKpnYaPPEmHmXDzcatDR5u",
  "key24": "3A2qZdxknf5gj3uJbP6ihfUjMGrDqjCXfmruY8sXhjdq5H457VnXAv46jJu5LQYKsGH6ebAXsdZa9zvCRBMK2Lsg",
  "key25": "3JDLScdL1QgxokFdBV7ebQm5sGoDBR8Ubfm8B4mXhVzAvEHhSp3ozmkVWom5iSMfs9i2FkRBaqCBSbijAVWN9UyV",
  "key26": "4ywzB84QUXYfJHmLKrimGiNuCS84RRZFocUURyTPoo7PNuVxsouQ8PXpFt8XcLZdiYN97qCgq5L4NN9Jj2yTSdC7",
  "key27": "3kA8n8Hv6TGXuX9VTPouJkHKioDXAGVxtc9Zp24GpnCxaniXnws43BqW5qf4jT2VTQbVsaAiA5n9CFveqJEKZ9fv",
  "key28": "3dU2tE2y1ChcimVSc1cUpQ2MHmZ1gUogKDUKsB5FtUiakMkeuhewdZbgazdJAQk9Hp9YKzYtbZbPvaCp43pyLYkk",
  "key29": "5hksZXmjJFq6kD4brfVD9aHAS8HPU57yXrqJZrq9bH8yvQzu5uWRqGXpScf3CCyr4zmkrgAfK8shhX2xs4rFwxo7"
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
