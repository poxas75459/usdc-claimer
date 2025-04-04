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
    "4gNvAGpGpZJqCaoqVysuS6xCWVoogX6tAHH5vSnqm17TXJYqX3qTuPt8pwNEtxYDaLEj33Zf3jSLrXpiqiym6XFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hP7bDwKsu5Qqn2zwuPZaArFtdCTqZ821SKZSRnqLehXyDMdUVZNUmZ1zoQ99WV4kDQZGJYnLV4HRv8ZE1wVrj38",
  "key1": "LzsX1aLP9GABmRmZsiaKJFecWA8Hva9oE4s1KMuBGyZxxY2ZfmgxBdA8k3iwbq9EzgCLDrkkaTYks4whytpGqSD",
  "key2": "4jRndqzeng4j3zzzMMe6YnkzU9AQUeGB81Pb6RoVbFN2jQyG5iv9x7H785v3cU39TnkzPjSJmBKKN8jQmzKR7LA4",
  "key3": "GiVkJeyRppB5dbBU8UoFsLJShs5iEmEu6r5JRzL3qJGTP8Ruzba4yYxAFPZXvmvGX19XPjXidc8AARQJtTHPham",
  "key4": "5TyYCwdvsmHhCz5Q2uN8jooYpzpSHA8xYwr6vDWP223W99gY5Pxy2dKWJTznYSRDPjHkvq7XopfeCQ3jqJqNQqwu",
  "key5": "3m7Cj2vnv9nH2bD8xu5L2o3iYBqimst4vq7oN5NNPzEAHLCJitcYcZuzjXrMgfWMimthfw21kD2BQomXc4ByoQog",
  "key6": "4UuumimZWpiPa62RvFaSpR53YfeEZm8qTzoUHC961v2aGWHTBovAa8cN7zhaEJFyDtj7MZnj3ny6knFoe2WTfDBB",
  "key7": "476sRGuhXE7463Z8G5iTbTnadcKyBr2trq97u8YZaAGGCA7YzahgkX3R7KxdPvXMxN2BdYF14F4SMGJoNfMfeudp",
  "key8": "5eo1tRzYNLATr2cnDnXPcWPBSf8mgNM45zzrZYZ44jH8ZYgcnf6SM9L1CaAa33JneAMV3wkS94Rnd626wRtQWr4V",
  "key9": "31o5qLtftcoLwuV8Wh2hFUk21Wi3coMGXczD3wGzZr6ycWkrazEQ7K9GXg7JBJQRXvF28bvcHNf8rutwXxeWG6V7",
  "key10": "5HR3vJVnAXrMDDWvc1KbU3YgPNqi8kQs9yL3xeMQS2xqxbdDdgmdYezpuBHZaM9or5gtDQXdTHJuzKmMtKi28GBR",
  "key11": "4Dr4WgmfE3R2bKReQXAT4ugHGzT7stXy3H18wPsHY5MpwnmJXer8dEZZp3NyEnpoZ2yRMZst3EfwJidw8ePjqSfd",
  "key12": "5m8E4xJmTHhBvgHAY4NfAvu7WwvxFJFcH14QmBPUFcNTiU3Sq9br9SYBsjuzFkynUTg1GbCfY9MbAAZix3f4ccE5",
  "key13": "44LWXTpWTVm7yA9SrQKSDvJ1UYRghXkma72g6tmDEfD6nGyCrUji4mmjZX7sz1FZJRWXFNyjZaGWERY2HCbwFM3A",
  "key14": "3Ld9Y6dXVYsxvHqcZCiTJA2B5BsixiAXDgFK1m8eU2i9ANNjGCr2YM6V36LwPvRQFo3KeERdC4jLWzy27jJdwV87",
  "key15": "2z76kBkeufMLBCqq1DeNmzwNcs6rYPfuyYXn6bZPY1rZQan9aiouydD8RYv9716MwTMVJy7jPqQfuCxn88qiWeRE",
  "key16": "TDZJKNoi62ArHvpnhD3gSpu9q7ajFjaKMY6X6st2aK6KY3mWDZgeQwteAvZykAPGn2NBBhwWj7TLhQn5EeEKab8",
  "key17": "5imRhXFeKPALbxoVHRYy3mQCzDKWCrfEye4qN42auMbkEQPxywpszzpmZspbNxrQTriQfzAz1j8PNfMny1cTLRLv",
  "key18": "CbejD8zuwzQCuMjCYNHFh2U5oHvSy21rBxixrDY1i6uHS3Y4zpxzA5zkA8mc2eNYJWgPDUaVrRaEuWq9o3muPsL",
  "key19": "4HP1LrZ9HppmUskxSZ1iANStWn8SfKJa1TEqxBmhUDRENPyyB4LWZELiZbjNa2qbVL1ChbWcRV5FXg94jkZv6aPH",
  "key20": "2eJ81frGvZmSZQBNX7Z6JGGe2HnK7VYfgciBisJzfrJyjrVEgn8wa3GCFsiNJUdgwqQmLKwFU2KVLbE6nwTeUgXm",
  "key21": "4JdLLiz2MzeyL5L3HeczGg3DhA9nqtFMbu5oCpPitYmazKreRW3Xf5XNJpDstwAP5xPWrp7SXnfL4ZgXFmCWyzyo",
  "key22": "5FJmLDJsinVeQ5aWsgjqmHF2vC218XTv7jg1je8sGpdrfTuDheWRBpeUys8tHLJRo7gMfXKw72uEHvBCQfMp55AF",
  "key23": "62xL4mzqEUpLn8k6J8kQC86QwJCTKe8y9cG2BPi8eKSaWf7983BDBuDU2C1LFVi9EW7ms6jQMLgbqjpRLRNNS5K4",
  "key24": "4qh5QKXvzmowkeT4WU66nPZN9Q4LhCXghS7i5NUQG52XiQ8ZPUzsjYHkU7nUE1czVU56TLa7MimZp477j5MyF2u6",
  "key25": "3ySP9sLy8LABCPed44kTLEx5YwAgvekK11yMpLkqiEK1wEBg7ax267LBHFyF6RecDdvBxFe3fVV6LdmXWdvfoxZ8",
  "key26": "2vSuYK1pxWagm6LGAJFfdJkgEGP2vbhxHshFqYnqNJUzj4XE5H1tBehFw3fo1VQFybUgGLfkktF7V2Z8iNTZDVZe",
  "key27": "5YFj5ArVPFebSCz6W3XABs6iptPaFnEN7gwndNuyCgACU3PtWqADuycWrr8jNXoZZNHSvcmMjnGfP5yWWAZJP5en",
  "key28": "UqkX6U1P2BhKj1RUsdwkmfmQD5pcYyc3Xf46wy6sTpvexn13CKh3i6UCFqQT5ZBd6GgnmUjJdS1nftGQwvSHCS9",
  "key29": "5QDdCEAx2TiVrB3sbsd23Hvfj7MRS4cLZ3DKmK8egbokQrf2ShxyZ9w8vCQxtd8ikEifTCVJTo1a1rajGheKwe13",
  "key30": "5chinwf46XYuFDbQGcwxL3AxUFxNEHcKBRvBvWDmCBb5VysArrBcs3Yv747JnWrb5bgAfSk9SKghoR3SpKF3Fnj7",
  "key31": "C1EY6NKmAj7yoVxYH47eEqCw9GmxQ8NSwHBJmhjySQFU4HzR5VV35Zkjy87QWE5AUnm3cPEjF94EAz5rbSpYoRv",
  "key32": "5oxXp45NDbonbmj4cG7qQcCDqmGBHQEcBoVxHsd8BMPhbdSp79aJ7QhMyB1VQ1HXRHV7Rq2biURAaJtCCZcSQhfE",
  "key33": "TpRrHYVqHdA5Jm3RY1yMnjUuefgnVF9F5gBSqipZy5zB7JC2VaPYMsVe9KNRFt49i1ZvKvJsMnCVBC4C7ARohkn",
  "key34": "4odnVzDz51AH5rNgzXvYugRWYmsxEP8UrNL84h6xoufKYX4VjgBNXdf67Fp8GF1dXAUah3gbQVNxrWj6nVTU13BJ",
  "key35": "37whUqksY1oeH9i2HaAgZVTnyTcEaT2oKCHuqbDAumTBPX5eraUfwuV6UdxtQRW5biJtjiMaVkQvZmnJ2b19xT1m",
  "key36": "juQhmY5Gu78SoB9K48iwBqvPnGZsX8ik51hnvKKXaYiaVD1XHEvsEdsJPvSixpLpGgSm5rjvFvYF1gzsftwxm2j",
  "key37": "4R2CgCC7pHEf9SX9PGNXEHYHMYoHUr9m19gujxUNy1WVS3E9HcHyog7rqFb2GjpJyq1kWByy2YpfyL7u9gN4HDqL",
  "key38": "5gWfFgzwkW6LofZhp8gfrSrCjPvMaeg2SpL4NFwYEkxUdACjpAft7XVpdmXAzUXy7ngXPs6XTTc9Tvx8MNifbF88",
  "key39": "2KZ79YZRw2bZBTP7gudjFtuXpbtyaZH3TyWFdwjtt5kGpygruFDyhXHd9ZCvh6nbqGtWdAjCmZqKuVtB9hfmuJ8n",
  "key40": "5y81n4WaKT7z1PGrSzjd8eSd7Xm18voD35j2KhkUQZrFdkFQKSED1TxGFzjwsBuR7ngv9UHjAKEgwJ8iCDr1b6ZY",
  "key41": "2GRb33UqQjNnZzC7eT9mKRWqa46jsycXMjqPfQSHnHfGfHSVhZ77vDZ4yVr3uAsHRDmWw5yFJB5S5YM8As6JvTUP",
  "key42": "5sBoZ2tmhggZhLVrGyo1d5hQtyToAnokJjTir4N1M2mACAUyWMJfYyrQgoMbfFhQWL8WwqGDutsyA3QxHFyyuYyy",
  "key43": "ag83VyHRqSBPbqfLp4voMHuXg1jYcDDpP3ipaKbx3ZJRcMYUJMV6ywycLBmjcpKwDjoLCBdpb3giaV2oE7sRk94",
  "key44": "44zdCFJBRvKdy9fRHZk1k8UeRxJ1y5YhowW9rLf1WxnQmbqMdw8k6qEnD32tG9VPuY9kZGaNbqS9ZhnfE9DfX8b5",
  "key45": "V3bauZnFAaTJmYQE5Uhor6yciwtuW5Lkhv2vqgXHJB6CLxue3qzfzhauSLSeXXmgZuMHvKXyPUPbMyCkHLEnm61"
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
