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
    "2RsakFsUsCsY8LArsMps2gbx6nSZVKQcX7CpYPwcGxhakzVJCuy7scQfJy9mHMJqDFkYd8232m4RoQwWULhWVmUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "osSAwYhYraR1DXcSiM5ZUH4G5Dpy9a23h4k6afcs8FwAMSzcQapHsHJ9M92Sg8zizTu4myGAo2Qd2WWLch9LKVQ",
  "key1": "4fxw7zGZWhPdxtUJkLC7kVSH4Ac8ikoASYpW7K8uSJLEKewGZMGR5khUGd2LsaD6SV8or6p1XCb5JtFSURuE5FFd",
  "key2": "4TKsVjfLa7QKBZ9bg8bTkY37o4b18gsTFhjy3PVf5BqK8YYPBqYb52wAmrRHrZa6EPEwsg6W4DGNdthRDGqfrQks",
  "key3": "4X4sfzrcLVjbbi8GC8VNfpeY1YT74TLKr9AtYj4nKeQmUd8HAYqfmdmjcwL4qDxX2GHJnrRR17Mxa5skjLvusjow",
  "key4": "5S8RgM1Eja31Sgyiy5H3RHtGY3x2x6f7d7xstmFS87Se6qEcP8CKRdjvyqarGDuZKB5e2jwuMdRgxfBHBcFmyN8Q",
  "key5": "3pjX4c2Dz3kcfUMgA76p8sYi11rbciYL8QgYj19d6X8LxxZWr47M8z8L4n2Gm4AvE96Xfae4ttVHVLMx4fFaRboH",
  "key6": "4CRpVARHUVthQj3H9CzumNQmygpntt7SsDSG6pYjgK1BNGYddGxRSsQ6WwFMYxQY8optyLiw7LKdyeFrV4LbFeEJ",
  "key7": "ce6AdYG9VChH77KUcpsz57zrNFGd15JTTxHLar5kG4GegSPyKcFajno8EYLwWjhvRF52xFB9kYpbLH8ms8jWGXZ",
  "key8": "45MEiHJn3ZtahLqrxR6a8FcHhKJi4topufGP2njCmQ4TZ71rar4LGWWS1eeTaLsfXbBm3cMDouSrBg6zPvxiibTi",
  "key9": "2HM5MSU4VK8oB7twe2zFp23UezM3wpz5RBxixEiuU5y9unwFLs72jyeK3RGc4KuSU4h5fk6DDQKc28gzCcK71XQj",
  "key10": "3jFCYfwEBPCAinA1ew9dTcHRttfVBgeBtxAsiEVowKoG2L6hin22vp2zS7pCLidB4cSZ5hwTaFiysUHLtenXT8ZF",
  "key11": "4hmg4zLSDrgJsx1PqCcfRsdH65VdWkn2bpsxyWJGG234AGFURReXDGxPqNGT4RRcPjr8xdqNhWwLBVXM6odWhCnt",
  "key12": "5em7DBbBsAYvdkwwXbhVNPRPhyrhQP9ShkD9CcftVLCmfK3ynnohNdcsiE8vyv5M6ta38JRpDZ58GHgFVk2oQFZZ",
  "key13": "3qdHx4v3n6JKUXjyMASGp4jyBkm197CxA3Q9oMU1CCsqG86LCZpozhZXydYdoC4csFKhzqmUSiAgcxm725Ng9Lgw",
  "key14": "s3Ahq6ejukKK5hhHmCDX4FLyGwDdccK5J3c7PLDjVxEXSPRfGBxcEhFAnyZ99jcr857iWN2RvUqzxakb9BRy2VV",
  "key15": "5X8q1rJqeE9futqWWaEXxfsEG74eNhLvNtvvFdJqRQZFnJNQPnjWBMid3GjEB8cqHVuuGQgjPYkHioLeBwadLgZB",
  "key16": "25gm86ryBxekVcab7FeRx16mGanNXPg4d3YfEnegC8fUxuMZV34EjYhJ9MZHQiaZeJeWSnYSRXy6dNooPf6Zwqym",
  "key17": "4SrkNaC4qdirDDr2yxidtjBEyHeWwZQiSFTnxXGjFczT8KahgG3TRtvjwkC5CEvgxfa3hYtnKVf3cNr81vtWtRJo",
  "key18": "5PJULAa57vpGTusn97jjbuFkK9D9E4q1q2Hym9P4wUFP24j1rwCnErg5xhaFRGfAeTdreU8yJyejxL3GJUGoY6zy",
  "key19": "4DLT8nDPtbMdni46Go7JthwpNSFaWq9wtqFiBtqzAkwMoFyJu492fzQKZs47bkGx3WKVFd81sHUiK1rAqYsHB5Si",
  "key20": "3B1GrdaYkYtUepgSXFHF37eZEqaLWmeLjRk7zzbwsx76xaq7Gz477HpgCdSMgDJpGEo37HqiCvLVTZbKbECVPar6",
  "key21": "2eT8QrC8kM1B6wBD2c7wiv6HcMkdE2ByC5eBpzXW1sYvJRFySnJ8CS5Lw9NAyePWRjLnJ92fkayLcxBY1rpyHXQ3",
  "key22": "4wTQ7ZnpgesN1EwMszJndBdwkhXGuBZcW2V2zFbPwefnMExFmWaL9eu2hrc7Wg7iTTVzUS99g9ezwLvhK9c1yq89",
  "key23": "5ziFKUpywNsULLXFjX1GuiZFwfhKorScFnUasHZnFpa8xRV51d6MCG3VUqZ8wwwbKYK2NybgpdXXKqmvEpXf9kqV",
  "key24": "4VzgPNyorW5GPtVdhaAiSSbGr3cJzr8BASmtAJSyMMSdTvKevHucvZUsKgaoNyowf9PfyjSGa4kyJJqfseQptQTq",
  "key25": "5CzEWhfuRdVf3H4KBHKFXXjV1KsLjEwDULsnnJ3qucQfKim7Lf8GsUmxG8AS8BNuT7yG4qa7p7PVCLzQG5SjA4n8",
  "key26": "5JRxRfuaVK7zaAuS6wCmCRu5XKr2fMYc2EzzRNhAVRcbYTtc8sJ9uZzxwJN3BJt1uuN9sj9gqNUKL5s4dWRJrtw4",
  "key27": "3FjGHNUQSiwqJkxv7UQrh2xeZERamkKc318RGphJvkDGVviqf2k3VxT2d573gTpFhY5Xbg8F7jX4R1L3WRYg1PJY",
  "key28": "2HZPipiFfWi9kMWVXDZsnNMVYHwYeJpi2ytfgURYoi6dZsPYAak19K3UTz4YjZpLBXGzYwRmdjGk5zZ6wPoNnGxX",
  "key29": "4TG3n13Ec4q7uU3Y8CMMwnGwd7FuMuD72oZh7RWVacykxuy48385L5RjEMRFzpJ39jcQXamVJcdasFX36tTcgDHY",
  "key30": "3fFkrE1zczRK62b87ccP8YvMcE5XyefU3VrTrXpwyEj2tS6vDvZjbowginwzbchmMqyW9nAEwawXGN4BAvb5NXDM",
  "key31": "m4VsVvL4zxnYLtkjq7a6zmV2hfpKLnLtdArf6hKsuKnCkydXhWxu3mXDq6vGj3Ab4i8T5PUGLAPt3DpY1ixLjpL",
  "key32": "gC7ASWnGJz4x84U7L4XKqTZD6MyKY4sNjmcr9nmDeW3w8R64EapkdqgJQ7CegCCHY3pFt2xeAsd5iUmhVpJ6C9o",
  "key33": "4UPrQGgY7JyQCPnhrBnxyD8gK38pvdB6R6ueP5fZTLSi2KJoULB2shBg32BgDUYA6XqDxtaog8pYB6XXPG3o2pdU",
  "key34": "2284aLGkZ8UP7kdLY9Ls4NTLiknndnHdngC31W3xj9pNwPEp4MGSY8MnvLczEWX5PhAJFos1qAMhbbTQWK2QoYqT",
  "key35": "3fTJg1u7MeWMoi7K477Cw8RCTX9zmsKBw4s855hYFquMUb4ocMxYmTQccfTnebp7ZvfpPPAyFyrxYRCU36NL7Aat",
  "key36": "23QEd714YpiyMpVDN69Y3PBWHFTDD2wxjo2RRuhNwDYNZCCGqno7A9dDLPL2QHKvHzrnzcbe9xZsBMeKH1ndJpeQ",
  "key37": "4qqYdPdjfku2VVF4Dwv67D86CEbGCmEGmAaWEycMT4dwkfwubAjxvD73JfFtJPfxJaoyra1dgmoE98uvKsboVcFd",
  "key38": "5cUucEbwF6N7arFFL4HVv5G38uhaPaedHuVJxj1Xv62p68A6evWgcTny2wv2vXResDkLyXU8KD7Jc7WAWV2A3Qtu",
  "key39": "4YNzBWGSb3UYoZi51o75e799fKJjNTR3Hio63rFjmqKT8656dVFqaMbvm2ZoKL3avzL62bek7fNP6mXY63UJfcLn",
  "key40": "yV4nVNa2cBwkE4NNENjg7h7p2WEQzJRdgSt2RV94JEfrXxGV4h7NGXvjhJ9oad3rPofWVMrSsBfekN2rbc1HxPj",
  "key41": "2YnfzMAKnUSx2BMpn4BL98w9Uim2H2GdjHAZztYzfDXj5FWcM4Q5KxnUupMjUHaySyXwkT3VUtxeb4GdUEcFmw73",
  "key42": "5YyWeyBUzr2jQCrpLyaXdUvmr6hhiXM78HPUFawyAh6Cro5UMXbzPrPkhXVYDHNt6EZzZRDmG6h2kj5Q9Q3D1pYe",
  "key43": "5o5TTXmjmHAnhFHAjGeoogwhXzR7oup3qsoR72rJSh8tezu1rPjPYtF2jH57XgWVXJGB6Bhwbg1THXzomPjY3SMN"
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
