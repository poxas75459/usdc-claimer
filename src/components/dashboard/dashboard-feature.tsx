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
    "hYUrYCQr8wn5WJvnvUYaF25A6eJ7VyS9ShKg3HzVjVofVGj8qVBFPipjE8HRrX11AiiA2wAMjpg4sq8wftYpTxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vpC8DVUii21yr34TqKFPK47TEy5DPM5RTD9Saf441pfH7nL22JCawVmiNKfrW83KBAeaYJnKctrwYe9EuMtdaAj",
  "key1": "Njemvhmxa4F7zXMddCVA3uBhtdXKTxghRmRiv5rFdcUd4xzD629n7RVubKthrdQxpi7YR1RpCrotHhbGy2zrFib",
  "key2": "GeinxqB6yUPCNaXnL19gSy4Jq9gSxgRHqPqVoLXb23ZUq7ZWfWVeSyGhT26ekNVrLtQWxMZRDAdjix9byd9BVwP",
  "key3": "3AMGRAthnVsiaL9xjMU1DjK1QHzrMLLSnT9BqbkGSmaC4eBNwgMQDE2iq28Kb4qgcgJdMhJA13YXZXhTNhqeVp4z",
  "key4": "wCzLozsqYkEtwTbEMsMxzJkTJUWykGwtMTiSKtqfHz8JVFiB9wCnYZP62r8JzwKKfecp5WAMTPmfnxTDcBYYgvU",
  "key5": "5mA2gb2JCUoCH4Kx5ucXXDBcYTKr6cKy5o9u8zaUAxSPXPcVSo2iLHtKYWPPhGKtECztnjK8p6GanXVbySNe4wd8",
  "key6": "j8pvV8WE15G9M1FJfARDotynbKvv7uRjECZwokPjwfh8aBGV6ttqv9rDP56w6ck2fbJD65tyygDe8ZCVNPYHG1B",
  "key7": "2uFVeE86wZwWhvwzyofBbZ9QaTHNqmGfVW4YLMc3YU8P5EHSpYcXj7sxgygveG9CMxANcCWfTFJtxzqSLBNDaHPf",
  "key8": "GPdZJrWdkkgS5D1DZjQqjVcTNKLHngo9Dc2vUkKKQeqto2XBYkhpPJqYtNJUvhD8x2w3RiNq5CbdT4zK2ct1ghR",
  "key9": "ygCgPLfoY6MDym8kBuDa1zjNqP6YKme4jzbGLofeUUXREG8A4jTRXTbLGCW4n79pixE5HYAckg6pK7hjxug4YQo",
  "key10": "5tK1zYNpmqsbevnkLduDjeSo8t63wqFCTnMnubcjDdiBPSZ9QRrPBMHN7d8zCTafgpgeSAFzUt5hAjD6RL7TqrHN",
  "key11": "3Wpf4bH4tZPsrXSHMaSA9n18mXyrvHctGhnizVNVM1QBRqA5UT9UkckJwHrbdXdMZz3jpsWAhcphLnMfBBE1f5cJ",
  "key12": "Vvf8Na1giGa92KLbVeW9csoeaXe5BSok2tRxrLyp2KhRE2SNQEoVPrJRuLVXHVAGh9xAb1zE6Zi346ob7tux6Vj",
  "key13": "5MB1qZzkjCzWZVHerxvaKLN85wB71aEKeoWGmXE5ncUNnhJsgUv3XztCrBaFDUZDtAyxiWZsgbGmbNVAz2Xe1xjo",
  "key14": "3LchBmZKpqTrDWnB8dSP9HPGp5Q91TByP5JKb7HqojzorPmH8aW1bEE5Fxj3Cz9qsGB86f1yuV66uVwNZgpwTHtd",
  "key15": "3kx6mpKirBJ49AfSzVprQgTkGSrVLh9aaozvq3eAgMHmPMAB62UT1wbeGpdBuDUpRqauBTkPsz7YB6pyko7NcgJX",
  "key16": "3o9mTj7CarGsMMT3XD5YJajWu7S7WVycNDxNZFMEaA9huADAxgEVfkFhjcAL3rQYLhypgRYjvmLBUgJaFRSPQEv3",
  "key17": "2yw2SpcybbHeJRdgPXJpgFq32Dw5AQHE9hB94CAhewDNLBy9iSPBucrCaaBUydTeRQfUESwL559mKNJMHm7Q9ouk",
  "key18": "5PoqrME2YHGsAUKsEMwKAoBpSQDr6jTYBNjU5nVboP3vzeFF4oBEKQrqvKGU9SdiL4JKYPAdTXQ8sHUVXwQ87HLG",
  "key19": "2z1MZ1aLoNZaaD9Tns8M4g3jLSdcJdmheher6i6eLs6gJUcZhvm3tXiJ2s5XvQxLx1NDM93yDTzuiswRpv2qw7ej",
  "key20": "24jD8wrttbWDLanwx7B1jdbN8eSqcKYNnCV87XT5qBXGnQ6CRq2psU7JeUcnvgn3dKRj3CBbRyhtVp8Di5PxW3P5",
  "key21": "2e6PMKag63EkSTgZq3oZrXZacEUVoDhLr5tZwf9V6VB9BN9V3YCMjyFCuHy4iGdyk514H4ugKgVnYCakxA7NLLnm",
  "key22": "c94XgFsSXtWCuy8FpH6YdN4FAdexAkf16s7wLq1jochYNMohyvGjU5LNtyEMqgccjyQ2gDy1B7KCwVbQJtXRcRN",
  "key23": "5Jh8qArVqcXHDXeGvmE9JCEakGmuTL5taLtG2q8ZspkPUcAUPZko15bdKjqbXNn4bxfKCW83n3mT6c2mq11zp2BZ",
  "key24": "3xpr9NnaHCVPaXq3MygZm1pddYGYoGQxv4W7hhR6s3WRdCansuKgU7p1MaFTS3vPB5edgqXmMy42Fd3k1tB7M3t9",
  "key25": "3zdDp8jLzHXTVcAhTXG7RYBszXLi1NV3svbruuzSp9mChMWGLVYqxKqdenX4VBuySnhotFws2avkEEWh5uc9HV6h",
  "key26": "23hM3doxAmNSMrE17vEE9r9oCFQcNoMVKHYWCiZE7S8JcpoCuPxZ1S7THbWtFiAxY7mZLUw2cPzd8Qtmz727NYED",
  "key27": "2f9ormNSzCoPjZ3F8RRAx9CUajmUBrdt9qMUnXhyrxGeb46fSfyZzuCr3zJa5zmYpEyX8W3pQNbb2X856k2qApmh",
  "key28": "482ptL9YtYB2j71yDNW4f5tzT8WzRgX2exLp7dfG9duRNwVjBH8fxMnJZ4znoKrQR8FaZLbSF6GmmdDhzNTKnhyH",
  "key29": "4d7C2LDHCj61Vkc7noXybMirZhc1bVbohdKjYGwMTVHdJDqGJwZa6eiSfkuTrxpzBtZpsNPcPRFAw96risKoXs7i",
  "key30": "5oTCZ8s73NVFhQkY1jjr19KWrn9aHXvcKAeGee1ZwDCqy5BPpXBGxKvXrTY62xCdeXc5ZsR6tn18Csw8eeUtS3mZ",
  "key31": "5LXaZjFVSncDSjNhzd92Xw2aHioGJQEn7ZbBbntpyLoD1tj4EMsHvHvsH6MnjFT3Rhjx9p9WaydEwVEhppYokZ3y",
  "key32": "5GU3MkzkwzWUTVDDAHpWa5BWUEiAfdsNXxQrkdELkrwcdABH1pz8bEhenHYemaqCsnLiQX6ZFzt1pLD3ucYAef5",
  "key33": "5a7kXEvCgLGPRKmc4rDiyHMmSEhCCVnKbLHyEBzoS8gmKehJtLnVixmzhwRSBtAPXgPKWqfJJ3BhTzDxnsTcYnWK",
  "key34": "2v8TzorfTzjJtRPRqP8NP3oNB3fb2GcBvEMWuEaKMDm3qE66fgcLS2yydv9bq8weBvVPZy7dvAUeU9spdvDCbhQN",
  "key35": "2hpGefAhruo4A7MAVCth3xbgG73AgjFE6YuUeFJcM5xKX7fZapsJoZWP83oCWCotBe7QDvr9ym9yQrJ7qATjhCzt",
  "key36": "4u8jiLp8Z8ZzjRiMK26v8RTeXEez397novkjS7p8bw2eakJME8LMbBc7ctTKNTrW6RZKp1Z5qkm9Jkk1zAerTS3n",
  "key37": "66Xm9XX4CZXBHw36tH3VogLrDNgq63X8h2QqsDW6LhJQpapFw8VEDEPUqyAyw9fwz2jKAEikzZxDmvHCcVcaDzhH"
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
