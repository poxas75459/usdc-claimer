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
    "2uCEEr9ynHEYcnkzG67fyzqVT1oz28pYwMUp7NKxPUud97nQo8qEtS515kX3B4DnbyK2G63yCxUvDnuvYMn6ECLw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23F7pEcfDzdh7PaVspSuLfmcLwjndxoUYZBCWTyMdyMoCM3CZbq5VK8JPp5CE4fDvAUdp12MXqSgTgXP2REy6AJ5",
  "key1": "43GGAjwCopq8Jnxce7wCQNYTcTZCMf94CycFRsxPjycRsSpQQF8MKsjSRqKQvquKRtMn7JbJasUtaUfWx2cnd1tp",
  "key2": "2giYMMpENW7uiSgHyWTST3eKak6amLqj5okPyM3zbBsBATAWt6SnkTtqfKr8rALj6syDin3wndD1RrwDPLahHoMf",
  "key3": "2UYjorTevWGxuEFFni6oYEehcc8unZvcGZCzGEbvkdtirfc8x8G1jpDp4igtX8aKWe8qRaMP5kuz76L55b2dwQWX",
  "key4": "5JTS3Jt8Z4DLireqiHEre6U4AjdCRB8vgNZf5wfBXWNMycRfiMCKYvVm4P7whfNnWFEbhu6VqUfG4SPgVVhnoLin",
  "key5": "3NCfwoP6gS2DMaW3eatbvqn3L6JVkKFCTuNMr5Xwj3a32kG6HHV4wQgZvvkZLGAqNSRWcELspgn95keTAZLs1sLo",
  "key6": "oRVt1eNiygYJsBfHQs2jDJy4XxCtB8zabH4iZPoJqVbqhvHH5CikjXpS1G9hEoBXF5m7VVUkRvBJ18AfAwj1PYk",
  "key7": "4Jta6YkfLyXYRQvdGKcmv3CbYhSC9yvPScx7mnbcnGdkRW4Qsziz3xCota8puQt6j3jj2G68FQDDQ6V3ZsX4zdr9",
  "key8": "y43CR4UHaDQmRN59DiUcKHeWKnea53XZTgBP8RDcjRDvxs38tLB3MMQBCNDLfE4WxGSJwgtCC4xCw6mXzGgN6ro",
  "key9": "3TjmVNU93WpkCiKv4rthzkjaa3GAU2xWyUfQsZhBQBYohfMJJGedPPrUigQ86m4UXxFpxd4g85SbhE6jYbLvUqc2",
  "key10": "2szP8Kw7d3w7HHRpfJwDR8EnUKBmfFFGwcWkG483TsBPiWbY5R7ZbHVR3yc9mN4FyPb5zm2JrvgvpojsZ6it7uph",
  "key11": "61SJYkyzmwXR1P919FPvGEuKnvwzR1oqQvPuAVDGyXSwvPSQWKyHCtNesEe2gGSLM3de3mbBxtN4Cu4vbSSsSkXb",
  "key12": "37ibMotZwa1THzdSyqJDtbPwaw49KANkJ935AuqjhEKoobz8RddMrNKYhUFgAPHBD2GVZpuCnb5z5pVQnB6Gdpqr",
  "key13": "3zLcPYQx5nhvysVJ5agmswxjdDkcU5MWbdiBzcU2sWjDYC6wR2JwvN9mxTLgo3K2cqbjZdHxcuSyqUtTSfs984VU",
  "key14": "2ZmZVamGJbcdCQYQrEWatfjfi42hMeTvdASRZ9ZDtgNpX3pyyZUdS9c5s6WiDNdiy75nTM8qbKbgzH7kcUGXqop4",
  "key15": "4cbATeNZMW6efYfmvZS4ZGqYCL6CHQKSx5VCR341n643gzCc1upwsJsRf4MpajZFXfVZmWbzYwr8xz48LHWT91jz",
  "key16": "P7AV89dEPsEvq8FwefP6BpREYv7XGw5PEsVQTv5waFv9BkAjCFT2nGKu8bCjU8A93Y892SJnzpwbXDxQQyd4o2g",
  "key17": "KBQnkyuRgiPMFt6HnuiT8dmSK57d9Tb1xoMutZifqCw9vgnZDKyAYsTiHdw4LM3BXirqHPCGBe8VtifwC9JfJoX",
  "key18": "3Bas9vb8gA5r66Yhd9kMTiFxaGrJbzGk8F2n3q7xiFU17iccjqr3Yza2jQV7BoVb98hfSgDJ1kYt9nZ55Azu4Rco",
  "key19": "63QvCGhQ5zXhJUS92QYXTEJ1FnXWgcuMcA2JA6pcfPeDhssZBW2kMXWqs7VJ7hnmLu7bYWarCZwko8959hM496iw",
  "key20": "2VRcM4VYSUum6v72qMqx1p4t9fSW68mjuihE5S6kFiQoNc8kWJpAxF4c2MRazFEn5Zsk1D8fGD8EwcZ9uTMkn1QY",
  "key21": "jgoCfy6vyMCm4RJSTkdJU9yXpBadtZfB5RgxtP7pU1cadm2dbtcAAjoj4buXKWGhaxbrF8WP6wnCiHUo3E6TapE",
  "key22": "5CRTRNW1ZQiRBytdG1fv2xPAtQCPPGAbgJuXbp4rDiSSYcYYKx3st1C9pnYhrhH1j6hTrzS4zh72E4X57fkX8kdz",
  "key23": "wpxEcvqdD6TieQ5z54Y6mM2S72ypyaJiZBAVmZAjuSdUtYoY7xceRiUSyxFXSB5nRavHAGAV7MpddhXsko2C8P4",
  "key24": "2umQcz4RMgUR1gYgnzNZRdfJ3xD8Ev3vVv9mNZTcZ36utQagYG2qwqR3K2NPye5bSnVG6oi32JTXVK8pGivnkXW2",
  "key25": "3AFCycFU5QqfR4UsF1pU7wH759t4oiQkKyM8tdjepJHQpF8zQ7c2ioGXYfLXt48Ti9EUHSyf2EH7dAAgPfU5spLQ",
  "key26": "56rARC3odvv9awEeN9z8ddkX3TijFy4fD5kMLQr6yx5zFbx7dqP87vrNW3QsgwZyepXvveAoUVqhV3EBRW15QGHk",
  "key27": "bafSUAPr2T3VQo7MqYaEeGSX7dwGYVuACJzCxjmBmXwzqanZpRHab6mJVJL44xiXHgueajt6J2awXYNWpPxHLGo",
  "key28": "5sHbb5XMujaecV8dG6V36m9ht8AWp22Xv5NXn6hJVPiA1dqxdKUr8x7oSoUte4sVuc4eXRMEfAFaXZbfU51VJ7rz",
  "key29": "3TJqEDBhiz8BKL1jZBSNMeRK4LuLmF8ZZmjcRNkXA6Ggtrvj52DZezqkkXcR2BT45J1aQYD5hYDuvMdd4EzcCPv3",
  "key30": "KaAFQ1vaKQCrYgLJZq2m1mU1Fi9TXCkdgMLFWfetYeb4qALoRU4kQrRBvZkui9i4u7htZJBBCdpP1BeLEPNVbM1",
  "key31": "2tAjCLMBYM7TX7ykh8dbs5rXeNxbfpBkoogbkVMH3H8MioA7cuJJwDjhXGiz7TyySvdKaRPX1JQodP6dQyL6sPYe",
  "key32": "W7VZjQznnALmGcfr2cfGewKgtU2Tz2TzLuLXosdEchHQkkFJgrjHxVhYEpDHW3XzfqyHcEypRQE9WiZ7fb7MsCZ",
  "key33": "61gMXgpLQnUPCoUVZhgvfhrFPC9VpaZ66kMUkaZqtJrngcn9m9Kies6soL1V5qFsgo4jHwMyQtMm4zMsrr4pA2jA",
  "key34": "7PnnhMuWSNw5UkFdRXqKQBN3xXYoSdKuBLwtsCRQQg28GU738E73Hud4EnbibtrX5QXnA6vot5Yt4PCMAtMzaJr",
  "key35": "4a52EcJo5PY84ZK9vQWZ1ZMvq1F2sJwTdfqkwqqFLRFwmSLaEhcq1m8fx1hwSPVjW82vk87GDsJ5ksazzdQPLcw4",
  "key36": "3A1hurKwGv1As5XYwzzDsrdDNyqguk4nwnf1LpP5mfXuRi9XiNBhksJ57hvPofpShurkr98ucP8VRijRCSYwhiGu",
  "key37": "3fpMBgeQmuAeJSL8J4heaV5xHBmJR2cEiedUrkDYpGLD5Xu1RSrCap1e1wfYdbHabS39wgNJ6hG5sWAjY7asbEb2"
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
