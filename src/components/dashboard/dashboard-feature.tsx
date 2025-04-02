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
    "5tVBsVmDuHRESZhbYnG8msVVn3D1PZdNYxQb3Np7xJBebt4zpyQ78zfKkcFs8VbBGkNvu1o18b329qSAzm75bQjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x6JR1qGyyACedVU4LjUXk1p2aMTAsSpSWvK2g49wpPco5TTmHPdWAXjPZGp3cBuNkK5JUsZYYdRkiysu9ADeGgQ",
  "key1": "3SUXuWX5PZ8paxW8om1uiMfD5Gn4SdU9L6jBPfQbnAEqawc7JyMEQRs9Wz4Uz78mRuFftJmQhMki3wE9uudH9jxp",
  "key2": "vD4DigEVpJ2SK5hwUsWBPSxxDjTbrPfvGLCX6WP6VWNYJECvfP2A7v2w8KKnZwddmD1cwZmdUP9U67ZK7QzmXe8",
  "key3": "3HfW3thKnfNBbFxSm1XizgCnSxUnVSuGiQzF6nC2BKtkFTc6SjCDZ7nYEVKR5jFXtDChsNNgvzfFQBcsgSTRHUFF",
  "key4": "2ieEeM7KurXcLEDkm3bo8TpSQTo2KQ7UnNAi7oSkS5BwDDLJzfbAmDvDSMkqvJDYaJPoNfLQck2Po6Ngb4eJGn5M",
  "key5": "4gyMbD7TLJDjuvsc3B7wYcP7gf64Ye7aYF5g5gSo65aF9Warm64Nfnm3XCXYJSCxM9tuDAzUaxxoJ6qHLsjNKfw5",
  "key6": "2KMC74d5KJiY5ATPX2N4MfJE9Z7TaT8ajPKsGmnZYvYXaeda3UkXQeaS6BxFqUfitCTavFpAnXHhXHNpTCjQjz2W",
  "key7": "27eJRqT1bbjwjiVRB17j5uJ7mQuWhBePTiUrkcUgjK6STqnyWTaQcApd3wKZGAUfbmZvbaFkx4irDdwWdNPtdkY4",
  "key8": "SETPYDYxDkgLP7Fmjeb2j82b9JUrEZCzigyZ28GLzXDRRkULrsgys3PWMGkxnSud7WC2cuCtumRNWQh7TKaig4d",
  "key9": "4gM5UmC1ZFpNmsQxEL3GmgvU14t9wNHjhhUWyFg4DubiVqbv3X427cs3DcCoDbtjxhZDJbMiymvdgC1iG4mzbeda",
  "key10": "Pd2MGQ8icuEoYqo4CKiwaFTnNf5o4Cx9g2BiDfZUpSYQF7qAYopBZJXoKE1u9uZLGuMZM9ZdwML3C9Arxe4tJR9",
  "key11": "4zWM5ocm296TbvLRrSdQWdTk2rjwAVti9dHnMDCH5p5HyGMUVJuYAt5nGFy3hrVfRRjS3wZpxn1w1pj7iVScridh",
  "key12": "4CAbqNPDKQU2tqVVZn6MjEjkVxyVRbgTfWvZXfyGd814coNC58q1BayFM9iFm3zS6TdLRX64RzHKhR7EkZhfzsNA",
  "key13": "2tYPq7fcsj5vwePtjhjBAN6PuCyBVwAcUxwfjLs4GEg4WAUPPQcv6vhmYQpoAaKPGpGrkyyWTBwovmkvjZnT3GHN",
  "key14": "4wWa3KY9mgX7hxYay5yGMza7JAgVVhVcSxTMKAq3Q3wW327atknNXqRnqTBybX1PpzXQZue9GZubP8cdd5Hh1f8i",
  "key15": "3Vdowt44c76RcpvcVewwxR8YuaFw221qFVTKSUjQia1GCwKGwRgGgcpWxoXLSJ38zkHidiEFh4jARQJB8bmh95yN",
  "key16": "2tyvnDGxJaa1bkAHEU2gfWCLHNDmSCbn6WTjWWLw7bi1jYoUwKFxSedP5wXmwWo4TRqPQBirk4h5cgbaQ4FPRxkU",
  "key17": "4kBSZCdeEK3joxqEiSbcLk2UyxWdYFjMaoMFbLsj7odBPupWaiA1KojC2z7W8Ug81KGsyoLBaqt6NTJiR1CaM4NB",
  "key18": "4AWKAsJFK3G87SRqMF2cmcPFVvvfqCQH4WnYHLh7fHj9hGwShtpUmFwJhtgT15XMBPKLRyUxgSB3UDWabVf6mprz",
  "key19": "5jAgDYSJSZGxZ1bCB5mkyUtEFeSQdoRksX7cTqqFpqXT4zcgsP8WEGYaMaP55k2tUA2pwejKwzv6aRNuEkzoosVy",
  "key20": "4xpQArDZxNGq3b9NpUbaJH3yHWjQHFBfBFgS2UMtbutGvmFEooM7ohdMNh5riPD8q7Ciqku5xa4mBvds1BuvSVPH",
  "key21": "2j7XApkG5E6A6Lp7GbaeA4fCCCyQUWY3VN9YvENzWRjxtoG3TAeoiiHNR41agdJ9i8pTvsMo2kBmdKLUxG9DjqHY",
  "key22": "2Rf5nPThkyajCBtD6Z9TvfnDbmw5d5psVoagL8TUN9gBzNSw2FwyHswKsG7fpLPhkqoxAPwFvyb4RHQbSXnwZPJS",
  "key23": "5iJwZBxoCCk87h9EE4aSS2T5Rmq3RV7xFT6YNfWtanAkTk5v9YZqGAcirRLV9nFvq4pXYZKzh1GTKKCb49maRkkZ",
  "key24": "4L2uTzGrHU5AiqjXQnRSRp8SgqvnVAdYMiYDSTFkvGXB2xB989x8LGEAVrTx7oN54CoEvryT1qW32TStgbzdRxvR",
  "key25": "2ibRktKKX21cRnqf2fb1awzUFFReiepxGAHDBUM3AweavHoJa3UZUDmmLWZjKhukm1JN8TF7wLgrC6Cnrf9vvtUd",
  "key26": "63JBM9x2TcSas8Jq51PJzTiQSfae83pHRGBUFjtacCquwfnhcgd2v7FNLKT1vS9vhMvb74TdQyhnNqWzV5sFTN3r",
  "key27": "5X7jBJHzUAhcFqarRiwMrMGVCwmD1V6DczrptLHxnLRBSarmvVv6EWChXsj7nXaTQhPXDHxLSuqtDCFNaCG325qM",
  "key28": "2vz5wVTpDxYEif612bBng9qdkYqC9PuBLS8pAjPZEc1ssRzpc8iENKuGzTodJceQcGxN45ZmpseFeSyKAJqf3s6g",
  "key29": "4xccQy6HBdEHkc6WUgVvgFcZTmr2SsRSPg336mbJbB3LTmyzRJMhW9pqovLvjHGFwezA29eEvWFVyiS18paWpunp",
  "key30": "4w16qo9GsdEBYBShGRzodNniGVZ2c4vDXfbskh2ybWhBrdEbHyWyqHwoup7AVobGcRHBu4WYWcjD63kX2ByWstDw",
  "key31": "5PUHZPAEeaAhvr8wPo1HDZNNowous1QvAn7gX5FE2CrQcvK4zt7UAPQc19Ve6FJeLaSH12PuwAMP84yHnJBq1JuZ",
  "key32": "Nr3w92hEoHeeTJ6BaNGgsvjT96gBtPyhjZjyudng42WXNJMo3eSSTWNMsKxes5Cc6JfhH6qmm7Sv7VHRfUzpPUK"
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
