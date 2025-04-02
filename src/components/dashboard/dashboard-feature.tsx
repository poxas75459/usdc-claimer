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
    "2pALt1A9naf7VWeXnJXHjMQ4K5LtxKsKD5FvAtGRsZvB24hAKpj5cXpDvPCCzDYGJED8cs4bo2Y4QkAmpR2dknDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AHa1hi2BaKCyFkmS9pbpac2y5ZGHCSUKwR9AkeEc7y7LKhMYZe8McYY7zfmNW8VpjnfoF1ftivaSRz27yhsK7pi",
  "key1": "5cdGYQo7PfJc3EmiaRj46LnezVu7RLHcDZ3eHTn5ngYUWrjJQ9xCRUymPasiatyDT1cGitCBVywfuUYrvsWbUkwp",
  "key2": "5aGFMDqe1z5mcqUTK2ArN4yUeqoLNQTQyWHmuJfXXjYGbGrQMvaqhS19HQQKUnGor9iZpK6r88mSGWE8CtzXBFNX",
  "key3": "4JsQ4GTXsyw7QQez6kdMbGNNRKBhB4dN9yEmEHRXzmkQYuGDhyv8FUeCmyDrFvofzbW93rvExPTiSGgjdFHcJvnk",
  "key4": "3rj5pFPPTjrPpRCrYuDt257NVuawLjGDrizTm3442dVKwAXgpjvqRXoCMid2K293SDiALcEeNaMAiwBo1Y5VqCNX",
  "key5": "MggfBAPk9aofSiWZRHmwo5sTQ16RXX4cganmkd8wp7VJMpjx92M9wCmDwLW8nFKk2sqRwUnnQMm18rUF83whyLZ",
  "key6": "2fPjxqeRNKSHZt2GyWQqwH1XMPwJ4WfMa9QTQxEmbjSnCGAgz5LxoqV68pEdB1c9gUfVsr1yoTsPfRhnstVf9KYP",
  "key7": "4GXC7hwRz2X7RSwyWcU8xmX55PjcVNxW6KFZuBQrXadgDgcJMcosMgqss1FRKGWhyw9ANnzwq8JLQx4P9EDF7CFu",
  "key8": "3Y61c5ZZ4bQuNoSBh8pzGxLC3TabwyNGRzbN11o476V4avLQeZYNb9jhucVJFfmhMRdSVHDr7k4hoNtZgeVRrbo2",
  "key9": "5RX28KzBiUThnHEAYmpe76k28gpdHsrPGMTJVpeGURpFusaBfSaDffNXYk4XaTocNZsUzVbd6PrBddGpnnJ2M2wN",
  "key10": "24MKzacMpz4pyH6HK1PPGLYG7UhzCa7tJgk3tQBi5K98t9SQTHNYwC1KjkEGYjpDDPaZaGcBAMiMEnQoKK5ixheH",
  "key11": "qT1AJQnLf2nWYa7X8SyAshEcRgz2KAwDnS5B8nd8vsoxnjhY6RDLsY9vPMBrhFrMy253cVW4iJCGShwbXWAy498",
  "key12": "5VbVGx92dxrL7up5VvSLfGDeuDSmZfJVvejsJUfKfwmr3Cw7xQaNdDoT3KZyrC7Pf9NP9b9Pbp8x6rUnQpD8d6NT",
  "key13": "1i4ZKBzpB1t986uCgoxpPJpGYhgtVktuc4WCP8s4Z95LnBweVi4XGtfeKS4HXFk22HiVbQoQE79iYQWUn7vvjWZ",
  "key14": "4ZALr6PS4jdJkSXXU6FWUVJGRxowkpuBMhdxKvRiLSUh6JoNPFHwvehuMniG75iCyLYf1ffbKa1FtCKPrX6fWi59",
  "key15": "2SqxtNiioikpLtjWaQy79RJKgfRZwYRt3WNAKmsZtWTBytHERSnaLN4GxLwi8STkKmLmhLtgGwP32cr3rXoV721W",
  "key16": "5KdnxQ6voUknZQCjL8ofPC2SXjgcfbvGmSBaRGApAk9SioWLVHbGTDSdiVfteUKck96Lif3bRCFqeodAeKGqKpwa",
  "key17": "2UmuepHErHbQLrFNKDBGHPpp4xFVDeBxerDNX4sW44DeBEPYMrozHSBcuaq6ERGsaUnRAEFCg1tbER9EfyY2o68i",
  "key18": "4W7iSEHDcjmqHaBEgcNdgu6U6NC5Ct57csYMCZkGYtZzoJ5m9t6eLVstKN7G7EZ9eMxM6p6wYakBXs127VThe5eA",
  "key19": "3zKGbXZg8XprcbmGMpmCWERukiB9yyciyrAZQHftNyAXPHU4tQJZqjKKZT79iTShCE9uiJtxdYTgiUDKxZTrJEar",
  "key20": "2z2vwcsq5CQ19cgwKYLqNKTtwUw25Wc7WhtBGwDU1GGk7w2xG5yxAgBxNKQeJkJFxcJNGCN9d3vk3qMUm6bLyMja",
  "key21": "5e2RtiYL4u6kgEWPZY9iVwsTQZbx5Jd3E4WyfVbu4o12J9DCLJGvtLSrZ2h4JLHgJiKqJCruteEduhVsMj3H9NH",
  "key22": "5qkyoEpH2woYKp5E9YideDnoZQWAPR3gKcwCTxBrvWP4msvzhJjJg7ZJxyrKmerzakJcr5n994vqEXd7QzGi6XC2",
  "key23": "2z7Hxq9hdCKeQhU3527nygMyWvUjyir4J36jV6Lj1sYP11ABDTB9JMUQxPRMb3aD5rZXb1m2A4WYyonhc1qGTExP",
  "key24": "6353k8yZ6boJ9ohLg7couYiUEjVg97F7UvaaVFzn6jrSSectHZyptdcVZBCBxt8FR3NUWihVtMrN2KM2sKtW213h",
  "key25": "5rL7mYo4bT9KxpcmkhQDd5orHaqBcxMqt1HgZdjESfkZ8nFHrpp2Fp8ejPnadASq3UzDfM7zyuVmjSUtDYKxcd5W",
  "key26": "Dqqxj2q3YztJx4XKbm2r7jFDoRtez9oJu3t3jK7mqffABBVJCqKi4X54GmEJK5znwFuZFPErB4dS99VXA9zcMvF",
  "key27": "4osP2k1rTjEHPakx3AF8NnkARAUQVKXgRki3jCafQHoHUx4kJytkbwmZnSM7f9zBN3bEz7vst8swoTgyrV8yxT2M",
  "key28": "t9Q9SyVVZq89Cekw7GqNw83TBaqftLyCA5xPmtZNfsh9aBcwpwDcK39KThpGZPEpLztQLSaCvtLwikyE5T3du8t",
  "key29": "63UJbaSBfXypKxvMZodmUyozA3gDU6UesfJ8YdBMSJRYdnBqLwrAacRBiLfvsghKrC7LHM99UtNtzLFFibHNHuSd",
  "key30": "3dAn9266JRmbytTCenLqyoby6CpzABp4qjEK7Uohattr8o1jufXdUATGW5W7YNDw7F6UrmZRY6eTRb3cpvyuJYvL"
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
