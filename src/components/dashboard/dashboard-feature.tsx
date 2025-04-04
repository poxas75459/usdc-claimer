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
    "3xWkYLTr38jLsUGXyZLwk3wWWDogQjGhfssLxtJYXaUpedTHeGqpS1EHbfdnaXiEJXGHdCe6q7vA7iC2ttZWArQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hGbM87LKP5HyBnTPPSmocPyEAZ5emk417AKbXKgQVDsgZ4gNo5azEP67VuiDw5CR6hW2rmqs32kYKnjksaQbTVV",
  "key1": "3kr1fZbxmEoVV5g6VMrnfuwrE6UqHtU1YDsENvskYDFukQTZu1w8t32uYDeHEFACL686TFnvwECJWXP9XLTCky4o",
  "key2": "5N5bkygtSduawZo2jSYUmPF4sjFH2R9T1jhVamoqLXxfGoLsrneHFCECBmciGguPumZNBFgg5aK1h9NtYdXrQwrJ",
  "key3": "55PAMSNgoGgrGSu7zqzJ2tR4Dm19od23VHNh7kWKdUYShAhN8KcyG6MGKhD1Ub74qbh7TNo7dwWkQ9L9LdeP2Buo",
  "key4": "4GxzGNdbEKKNXK6gb12k7y3uvaEC6LK1vZvMbUqRTyJ7dmKPRTxhgkY3DiUvaLHT4wWb1ugAJ6cMZhaGe1VsGz5Y",
  "key5": "5FXCeXsAca1opXFqXgy8YWhVp5r4ASCrh4gPtVnFJsmaKcdnMztnCy7PwETAXCt9vUq9CKBEJ7cNtRuQDbuFXMY",
  "key6": "aNHat8KbEX5MDkQvYaYY7JTZbL9Xa72cD7HMzWyhCCuzKw2sCRbDZ2V47hMwmHDXhokG3Q9cgwBvGbpVk21fR98",
  "key7": "3M9rZAEx9Fwu8HCb8WYoVSBxqGjqr3Ea41BzWDfJCo5DVUvybYQtxjHG4PAbXXRNLemD3jY6JqCVmRKfPab8xqfu",
  "key8": "2q5drXMkjvQDbHCGop6BtQJsqPskncuoYuxkGnCeFwHVbCWBVUtfCaUrG9RGpz9wDadLW4gi2NQsDFZe1uJ5Lgav",
  "key9": "4Jc7gEYvSfDhsr1eSvBaqyjL2np4qhBWvo8juwcuudJCvnUxxb8tZvgtiLQBGHbJ9vgaczR88udbEiKYUSyQnCrJ",
  "key10": "2Z4JLZvGw5ErX85xpgqv29efgemhbYRXJ3tP6bpq3L7ADm6GSVkt1S2uUhi5ueErG6dJqZyF9w3KcGvs4KLEjMzz",
  "key11": "3HzpdTVLLKFLkv6RuW2UM7De1TPvvP6GNyTzB6VfuLo6aucrshdEM6DwVAemjdFkeZgVHmHiUcyR4mqGJvNkm65B",
  "key12": "3XGGYM97x4ocd1xBTkGT7mTxirGqZ6aPMiF3a7GJ1ZPSXXRGxmiiuHuTUWx4ycqvSESsPU9xq7k8dwqY6wQ5AvYN",
  "key13": "4yAUx46jBLjaJ9jSf5AYv12jHtfnzmRpCNoDAJM4GywAapdNa8nBWW6rfmfRX5GGFAwHVSuLZBZVWm25FBsXXbmg",
  "key14": "41jwFsLv7fbyeiWeGMeycYRtBx61tJiDSj1beRHuQr5fVmnyU8y44bYoymQ42tFHqNgUaX4wQFMtidzExazMfYBK",
  "key15": "5kFeoYUjK9UcHnpuA6iUVNi7bHqrYajN8iyB9acvJQP5EKZafjHyrdt8RFkAUCojptoFcVter6PA5rJSakqSsQxZ",
  "key16": "2wKXPiqY4mCGj36rAow2jyzAHU1jMjPH9ebsJTeYTxPBhA271394xMLyTm7ZvScWBhX2mcTcYyFJ4LpUwKKbEMvf",
  "key17": "2vq9xGZMf5VvibHZT6YX8EFeAREE53Ma93LS3m3KwH8B6RnwBCScP8qA9Hvo7MwjCwrBjawUxSsPymUfVyFdEEU7",
  "key18": "euQc1iutECQjXK5NFmBJhqcr1kPRLzLW1C5r76Es9sr7raf4xMEQJg9EX31cnPxkCeXbRU1JMJhUbMkJWBd3sbY",
  "key19": "571ZTjkP7nD7BZHkG23Lh5UcWc4Ag2dLMqeM66QPiBWsJ1vYCdStYLC7SZ2bjUHRCvsMNzqNe6LXvF5aGvbLFUpc",
  "key20": "2U33GPiXmzVSVoVna3KiLRaWXFXCTH67wBuBvCKecF4BCpn1ZVYc6TjUMguLc2TGUmKU7BGTQoDCBnjiNDuWnbPY",
  "key21": "3GpofUpiRFPUfMB9qaK2zB9qTQMuL3J61NRXHovA5BpKVHFY4SYuPoqCoStiVFiAs4xq4imDrP9zfK2w25LJBi6V",
  "key22": "3uSc2SJVTdX82K62UtXkAhLpM8NdLro6oYBCh4yUTw8UKA2JKuAzoZeHq4SFmEMnFZDjeGRuc271YHhbbM3CahNv",
  "key23": "5cJC5icALGmyfumjFoCDq1hXod8QP1cSSueMGmvb8gkVonJFmiNHoq9oDifRLeieRyVvqHdYT5vzPpJf5FeS1XV4",
  "key24": "5G1vo9MGFeP3BRE8CLSY1SCDpUFTXq17YZYeaGuDcAn72mwPsXkLtKYcY344L7Nn3vtJYDBouxbMe6dW8vX49g8v",
  "key25": "5VU9Tj6Tq8suou7hhuiABPm9aDfTdC5xYeRktXspBDnWrLrheXyVLJ63aH4AmX13RsMarYeAiyyJDwyxGZjVLRK4",
  "key26": "5AAvfciSiovwQ5ggk5t8DP45qQDsBTEdzRDbRyAD36GwMu6sp1sATEFd9Nd4udAGxfrWcaiyG4zbx5Wjq3ztriKh",
  "key27": "3BEmqkneAf2dsw111HiE91C9phVEhQaYdZz1zvMHChtSEoFGLoH9ahSdW9MXNvAYRwJFCaMmZ4yYhXkipgGZzvZ9",
  "key28": "51ms9kFPR5knpQMkeSFWNme6FZaBKSRFbSnqD2UpNB4H6Z66hsTHvyEtskhEtJDHTXis4VAEufRVgfRXCsJuTkaa",
  "key29": "5aX4UDaoELDBtNwRwVaiPu9FMPCXfjJSfSkTg4Yp8tuFuFHzrYi3ameW1hdKyafdgMjJEEjDH1Y9BFH28mqBFSbZ",
  "key30": "3zbsCZVo6EoKod84YkP4XmHRZGPbt1XoL2abBU13PYzUHLCQgHtiGkDS4wsccvZ9se8QfMv7YGShetD9hs35iYYh",
  "key31": "4K1wtr8yEaVte3ZSqK5a638zf9SHDkV1dvge9yYGBxqrRdgx6Xa7dE6XuqLZ5PReQyjFZxA4yJXoGymTZqsbtJtA",
  "key32": "5Wo5uVCQCQAoDutA4SqX4RXfiLJ1TpgqMURpnTqZZyJ4qyBhSMN69BLt4FuwcfPwWAy51EyE9ane3bpAgje3MaVn",
  "key33": "5JXRL9XhvA7SBS2gsiQrjjqF5pT5GRRRjtwSU1Ez1dJpzpezMBsyFqMDVpvh5c2Mz73vG9ZXNNXCHQNnNLGqzJVD"
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
