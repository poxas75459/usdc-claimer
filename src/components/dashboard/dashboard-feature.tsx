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
    "6bj4Hg9vUvQQiHE2XiYpmya76gDnbG3PMiGZ8kAxXCMTdkUU39jg8G8imUspotpgFr3HXRC95oujVBdzFACj1zE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39tWvX5ZA14XTP9g6e3NbEy97uEesq4Hp5vH7bUp8KZrJpZYetNwdZMRo8jPwuTk6p4htD9FcMNqfdczgBUSthm3",
  "key1": "ExLkWsTNRN8d6Q4XVF9ojc1WVAmHK3LfwAutm2tZUytQKcnFALpNPPUzqifULaYeDPCRQGoXySGzf8QjgRVpsQH",
  "key2": "TFwGtFdvs7vDoBKfUe5eAKUQh1musZcdEs1uQHc1vvBFhWuvYNbAQMY6aJGGmCXbShY82htmMuAxF2Hu42WvSqT",
  "key3": "436XU3cTHXve2xRTKmuHoKpPdXD6JVT12ptGxLY7bTHbSHzBKczvUS4ntXZy3V7n8E8wYkvtq3V7GX3Dpz29yeqa",
  "key4": "4SX8jXjjNC62bGtF5earTzQ3obmqTqRohCqRpXqQxriKsLD1W5q132xnbmZk8LdUefc6LRkaGLSLknRNqJNXmDoz",
  "key5": "53gJPRqx4V8rUitHSSeCvjy1TkzABBUFHKrWgZGJN6Ny5RcrtRrVvPskS87emSMuPv1nqjSUL2moHeQhDUB51PpJ",
  "key6": "5inMtmrMZEDtgQnAEjwYm5RixqR1GJFKXZVxx68zUf7cqLHKU1AXUogkb9bTDKwRDJ7P2RBmznzdh9unG3Sx2BY9",
  "key7": "3v1ofs2qsjLTvPTiKgaWZpGrtbsmi81BZJ8px1ZQHyiqNfDBWKPTae2zmoSq2edWac6ZCkjb3t5mKctKTMCTtTuX",
  "key8": "3q4oBVxQDXDxap77ECPMb9FK9rWB9dkuAH6yJvTX5Jhyi4NDSjRjjMY5i9sgcJrTsQNtqhSpb6dEazRvHK7nc7H3",
  "key9": "LQyMMJmniZkYZ2K3H32d5Xr2pFKWRDPCbTkZSoa5Rp3WfDGZm9jitcHCw8c7JWnLdEXCfx1dy5RgSGYPmxdZwj2",
  "key10": "Tkd67KP9dHtFZDAToyLYMAv9tG7uASbV5vNdgR1GM76D2ZKMFcjdS84bQuiyjC9zvMphnKyGnGsKgCLsezGWge9",
  "key11": "4mFcXBEbpYTuZYTBWNQucHe4zHWXmgmSkMzx9ErUsPNAy7wK84eaexbhmuxD9oGuSTR9FUTept7YXRepBwQfCphZ",
  "key12": "489n5UQ1vPPrPGvvTYLP7dBdT1CSpvtKbntuF97ZEseAWNhr4xFBiuTnkty2aG5W8bioNUrCy83XYUsCE2KJj8ks",
  "key13": "CQsENTAc2cL644cDU3zCrjxeKUd61ZdSVJHq4Jt9BLcVxKzSAEvB8XYhQwqAQEj1EyN7GUZF6QPagkB3d4hMd7y",
  "key14": "41YyxyP5BNbXxtGAJQFhgDa27tR2bcqmtYSmPvzFWEYnpKFnpTHuWAZ12LrCrSSFvz5YLeyctZ2UQhyoXC9cxEnF",
  "key15": "4PbwWXfXT2wxr2fhUhCfFtVkYWKZT8nukuUQEESAzb1CaSVSZHavDaRt34HhpgXjKnLHJojeWj6Lcn9vgLB4kgbd",
  "key16": "32afZhRi3xY5EhtBajmJGYBsgt16qFaCsn2sbW6LUFSKbuxAn6wK5fvgpMcw34z1GuCZqfMSKiA4SwZqRhsEe9c2",
  "key17": "2PaetPn8TAfWKU3rqKbJ8FXxJBEneo9Cmjf72e6uN8Fxx1QQpVqeingqRsxd5ombTsPKzB4i27uME6fFctJ7cQCA",
  "key18": "2SZDhazfbYj1Xakjt1wa3KBjDUrdoBaMJYV34twbQ8x3kgoNDqp8R7gVmBXvGVJhZcKXZrmHYTnHCncsmTgPqXoy",
  "key19": "5yJP8ohP5Bs6fAZ3gFgiv6bkNmNAz5FgjFLEheWF7Qij4L4SvbZCryxwU3pw1ZYvLvzAm1ZwjLRJDaHk4g6PWzuf",
  "key20": "t4u7nn3Bv5iceaFBW9N6EnU37ErTukRovh9NfgFi54cXHWKBpcayYZCZLfrC8YTw3fA6AVhCB7MJWRHMDivkhaj",
  "key21": "nEgZpU6eshGnLJJtUKjZzJGtF9s5cDR3LXGogGvbNprjFdR75LzGVwjT6vDaiDF8Mqqz75HSPLeGGCj2GCTxAHz",
  "key22": "4NJA1f5yvAYgx4qECTBTXLE9ENPLMjDH2MTQdqCa91czBYh5iu2bgoYiKzRstAyrpCXdZoKAoNtpkjodwJzaJZdx",
  "key23": "2k72kpM8yrUFXHbM46QA89UaeZrTF32PQVRrr2e8QuRiPbgSuHn3ECyx3nZDdP3bZEUK3x2vicvggsvrtNcazscW",
  "key24": "44EmywFMxKyZrqQohdgmDweKUyNwfq8PbrkQcP3dkUj7f897qYf7QYCfY4fs1u3MSzA3NzepxZJj45csUgHqsvz9",
  "key25": "2hmna3MzP3q7Q8vFnWWWz2w5sVfxWL4rWmT3GEXNx7thNsqeQnCSU67sevVaRdmHbHnjDzxkZJacuqKyCkEFuv39",
  "key26": "DciJNqou9pAptg895doYg2YfDSgrq79o6XzNhC7eurBiXWpVotcwjgP4GU87CdDGnuAEBATAigP6Az2B95mdWKe",
  "key27": "23zRDyKqMj9RsLCXtxauFN3zBMYGiPuQa8BaBofgkQy8nk2fk1SZWTFpTGPy1Fc9arBaJUChrhBKxySyckhAJLBi",
  "key28": "3G41J9DWf3WreTn5ihM4VpmZFRi1sHYSwM4W3YGX5oNKWLfMrZ4AgjX2FgEDFvUxGbFQTJTi2CCGN4m1CSNz3EQ9",
  "key29": "2tD3AUtnEkJvkk2w2PZVbgcdVjeYkvYwNuBcPJ7ut8TXMgkDC5gsvGBVkDSz5b3YQTHGegLmCXtkUaJBZ5ZEbauo",
  "key30": "2FvZo8dGrY8dVxdzTAX7aeN2BvDWYJdBTLudGJeB3tgRHH4otGjqP8MXUJcjZ4mMmAUPuuGNy5NmD74mZxkmtKLr",
  "key31": "3RuBgepuxmhPUyCo3FnFUG1ZbMQ8jR4NvDjRwSoRpaJYf1vxLCxjpMn5YefGk8AZY12LK1aFdo1RPqaVwroHJekf",
  "key32": "4792fRWNm4JaZWsYjfAPoVCSUjxXn9pgfYjuH1D1pFyNacGpEwfS24N35PCsacLyVTBW6C8XqrDEmApCxPCttF7V",
  "key33": "3kyqR9vuYQA6efEm4LnX5voG9QaJJpLZeAVw8bBQXGXRDJ6i62E6FR1EG2czuwAqAkZi9DbbkQEiPTr3bdXx4dhs",
  "key34": "5m9jfjnoqrYeq9RXZRWesYoWKzZiuKyregm1fTSBjNVyHKUdoUXE5gsusVi1oFQTubFLfFtdBPabqEKy6DSnfTE5",
  "key35": "27Hba46EPnpg1tvEwLen8wQsqDgqdMDiafsewybZFkCzwbPn5JvKCMMtVPjfvp9DLUuBRtPtnCGWg97eEnxD5Mma",
  "key36": "4jkG2xwWZSDb1iKkRik6EJ2unppwdBt4YKMm9JZaV7EM2TYH5QRjwad55UTms9dhdPo53MorL8JL9AE9xKC8yqd6",
  "key37": "3eDNRJgUu4gy5Bb2aj6nTiKz15wvB8YiA2zWWsnqKJDKRP889VAx369hwPisaE6es7zTiH9MaDQRF5gRoH168Ctv"
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
