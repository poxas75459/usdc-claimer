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
    "5TBP1iUdsUNUic2fhShucnsX5TUFxNtVCPdDE1gqGpuzmR2mrVzj1arQogX9jVd9b2jpQKVM2tjvDMbq88Xskpk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qhfXfifEwmahESumuaRHBBAV8TXUpUtpFmQWbAHVE8EJ2Uh3qnD29cpWpw3tYakVw3H6pBS2AzrH46rgGBEM84p",
  "key1": "BXZtatQFdyXzjypkv1fjPhLmZPNPyeBGP6Mvp9nNWRm8CwRHsKJpNxvEf7YZr3Amfxh3RxR4jWg1S5w4hoPSdXU",
  "key2": "39ix3Uf3DhMYoTuZe47e5mNSAJjUgtYCiG9eUBCd6xufEMCzkKcXmmSH1X85xG4WnFFvBJj1g65Ys9kpw24ocNcC",
  "key3": "46Xqx8JZTtKq3jtcEeVZgrABP372QR5S3Hh56JLTUpWdDkWEaJmFmdqALSpfYboVHFusEoTJskKYgndWDbepFjvZ",
  "key4": "577RTCWs2Cm6UuX8Ek26MWjFSG23E4pSyAXg91xcroktMwfvirYC7XkCsEsmH5TLjZUvWb9C2gF6hNdmnAzY2Ba9",
  "key5": "8gpqhUzFf8SuCEh3Qvb11WkYaF9eE9q3GzBT9QLLuWHNUbLEFSqu5xFRaGtwhumgQPT4qPjE42bVV9qDV66enK6",
  "key6": "5xUGkLE594JPh9ZD7Z5iCR4bX5d2W1dNh5PxZEJRnzcV5Xy78bobrd8rZ3jYrtG59p1hgMeUvVzJ98M6aFpg73L4",
  "key7": "37yvaUNRYWdvbLbRQJeH7qnmwsadL9F8tGP2mNZf4YTEkq3Wk2gxwiKmwsFzAPBEnP9L78aeSiQsXU85z1QYY2jR",
  "key8": "4LS3VtZ697wE5NopdwrRfgMhhuoEGgT9FWmstH9JwYupGv9gBVTCPSwsHR9oKrkBuKKdza5nZK77PNWdTkVnWYwn",
  "key9": "3aYHeGtXTrBa6owXXBX5gVwH9vNNDp7Mp2snt8JQfqa5bzX4WKHX6BMTZ67exhHASG2GeyfHuMkpy81wG2MCsfPH",
  "key10": "3cEJGgFBuqTR9UUvmcjLXT7KAEG9bgc3Tf8Q9g2RafjuebsXXxiBsJR3FxoouARoboswXk1VVbb9NagVvPdYZemJ",
  "key11": "4Z1J9Vt7b98sDnf6Q8mmcBZWrjDGu7E3UTxM75MwBpdSeRrUgiPGDzdYZk4ypYrvDUhV3k86KbKXMGk9unwomZ2a",
  "key12": "4W9oQpB3rBDBB4WS5fS6YcaBx96pys73rsK75HXqWns2T7Z31xAajod9P2fFcZaCDstgGtdPSpxoSHfU6CHkKSCF",
  "key13": "42XcdKD7xKa7zKYijYgBmwUi7XpQQy8grvvnyR9WVgtNV5eaEvn5PjK3yXLoC8LV1fTob3aTN32LFe6kMmfqmDh3",
  "key14": "3aikfwF6Fzot1i6WDwJZ5QLgDJgRjjSBTQoxV5ihGnBNB9Ay6hkA7x7is4GA2Pju6rpBZbXkMKn9bTeXhNW1q458",
  "key15": "2mEdjti8e23yw4JVU9bAvSRiEUUHS422TbbcvN7iD7jY7ZpPxcxFdGY8H1V6GGBwUoSnfLjSbyqyWJ6KJnVCxkBa",
  "key16": "4HUmdu9SsZzotGG7iuxf6kudu2CPEUBaA8RvMc2gKzKM98gkBYK4zW4AwtsvjeGJt6k62y4c2Hgkjonaet4vFCSm",
  "key17": "JXPQueFofaJTUyaTqPA4NiUgAKJKiV8jgtnnc5H5B9RoZ1aSuRtxeusP6oLMJ5txyn7oLsh8QVpDuBg9rgwdevz",
  "key18": "55bKyfCFuZEUphkjwn37uheByDBEePYeYjD5jsRWr7QQsT7k8gNfZcUBk9D94GpEwzRF4BWvmEcSd2UDBq3dZ75E",
  "key19": "2XVDdmr4zfyf7pXjpHy2H2yBxPBmsw57ZWvBCSXqm4yscMbNdSQNgDn5pE8hd9WUMQuTBrNUS1UHjCFkiFhWtaJZ",
  "key20": "VZb7AvAwA1hHKHy9aMs8zoWx2Hpz2ezeMhmexg77XQyqjjobCPLhCjHLSGokpPFgLWTJ8vmgLLG6Rh27HRfDH3B",
  "key21": "4NXWnHS1YFBVqx78kqNmW73i7yeym4HhfCf7YnQxTXwuPD7fbDfwSk9i8JyYrGD3epstxtETbGGHczwpzmBVvuxx",
  "key22": "fsg5E9wbwNBV2ZiuAxNpSHG17JAN7xi3JW4c1yQiuHeKQNqYXSBm1VuWEwWqxCBZ3fLNo3aAHmqhaNvviHY7sZR",
  "key23": "21EY7u4AH37X81zPP1pyQrDhJV7L3CA6JrEfiFcsV9dEcmWRNKSy8KnqU2oNXkymciv6e8RYmvX2XhfTXECbFb4b",
  "key24": "LC4Sh1Yiew4SGs5EXskhzgwHvqPtcP1w8uSmfxViNUqNJ5PZyKzBfRNftxPSvgG9AZWunJGxUo4NjZJAdec72by",
  "key25": "SLQjGrJcBy2EG8FZ2MNURQgJ1bNtyRr1gTy8zj8GY6gYq5Rdy16nb9qTdt1oYKDtuVfzoy74e3rS5SHq8cJv29a",
  "key26": "2MThwX4WTo4NaUrbrispH6V2PzGPJoULwyRnpcXmNJvbGa4MfHE8u2XPrKyNR66EZiTWhCq6gdt1yUHGF5zHgWUx",
  "key27": "3vgSf15nwNFj3pwsGa16bWhAKiX8b4rVFoBJww5hs4br7NXsLUXUNdjqGJzuG6xRDujdtjRFzw26oca7cZGiBb2j",
  "key28": "2BCFVNrTm4Sr2NMYCGm4e3NURpJ6hhSUMcec4ateE17W4B2Wka3tyKynexin9bgjtmA9gEcChdymSywJTYK3Y4dH",
  "key29": "5JRXWikrkyUxeVjAheWBLE4Bztsyq6MrWJdbzxJCmEPUjuNNA6oonyC2UfuZkXD7X8xt6ezd3YKvYhcsEGccdfZj",
  "key30": "27kA2WmKPL6xcoTdYsi1SpqC8oRi2ph9K5wgrK7jvLw3NhFh8Lw5n8QRNVe3WAGQANJJ6BYAWwMANWbsXdQdqXCt",
  "key31": "5fHheVCW723MZTTGgM6DQvCDK6awBvMeFaA7H9kNTexjZ5RRwSR88bYJ7xtQnEyeGeX1hUGZ4gpXBe1L1qMx6y6U",
  "key32": "35WiBVC69qy5mDXV7H2459oBMcBADLw14qMDNsPtBhML8QrKoKMiVeaFnrTpitqeZwVoUCuhM6L8QFsbEL6eBsz7",
  "key33": "MqTiCdV7GdfN3TZMoSSU6GCtnKjWt1BFwszLUVM88F8FNr7ajSupuBifSzd4bpqrP4juZekdpwEf3VDJ7Mkaa9s",
  "key34": "2PNJsAG9vxaf55cWMtJxNV5XyFejCsRNQfkaQTAJzdgyFkXYn7KNt3G1bpSVi1ZWzmjYvXUEuNYPYCiu72Qzwc6c",
  "key35": "YUPR8WsAb7SVaVhPqY1NrdJWt2iPtgMMe6NRZ3x1KpJuoWSPzsNaTqwkymMSEcXMZeTBaTAueb84MZj3wKtrwmR",
  "key36": "3U1LHvXwJjez7vBTLKjkaNbcbCgMEzWSa4BXvU2Hc9o65DXubbwcXjNhGwLALPfybidYU8uGm2yGkUxaWfNzMYic",
  "key37": "3SZaWENE2Z28iuqhCCXsT7H8uKAvYwk52imR7PhJAhYaMY69Xq5GXJqeuWMStQqXB369289iQMGuCBuK4mzNhS3i",
  "key38": "gaqykE5Zd8LSJAAWh3GAAUxresrSMjYrHCVSnXdeCEz4P5HaRx1cj8cnHQvmseDZQHV6k4ArxxLHPtYYi8yks8b",
  "key39": "3r29QHpSpaq9V97ZnK81ZP4w5dHnW6njXpPUKeNhoAy3LSN5qv7ZQTzKZawNgeTyrbhkJXhHjberHZdZx515f8r1",
  "key40": "2GTg9rduDg1e3TWzp6K3EUwfqrHTHaRYPc8UsmmQon7Hk7tQXRLRk1q2L9rBNphD5onZu6txLdTgLUr9wney3ow9",
  "key41": "3a6cxXn23CYUqVUhMmX776Udn2Fh7bDioJh9UYejk847Tb6dm4FFXUFhYdu64Q4LANqtzSAsu2Qcr7tVd84BVCkh",
  "key42": "5kMYa5YpHcgkNZxhPHf2jPDEdTeS3AW2mGCh7KDGcH9z2G1wAbHKh1Xixewozk6QKgttF9i3MZNdggk5Xfke1JKk",
  "key43": "5p9SEgVhwb6HKhyVgPx5SEfjkJmSKpMfcnNuDrXhbPyHwnUXTEAwnc3miSq7KxvDUUapgHbMCaHrh7tmGsYWSqEp"
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
