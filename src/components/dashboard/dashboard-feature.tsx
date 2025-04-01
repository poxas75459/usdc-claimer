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
    "45Ecu5mtB8YYZQv25W1ezS4fm1ZKSzzgTTUzGmx9tDAjfeF4YCCmBrKiE9KiURKgn4q9uhgqvyXcFeTUVKCVnRaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AQ7xSeZnzUEAqrKDxpM4i1tnhz5aFp3vKsya8TSrm24kKhth5p3Xy5ZxJJA3rKjYKH1BLAAUcQTFUYo7uqdauTu",
  "key1": "4PPpLEQbsxTKbtpcwcKXTQC6DBKxozWB1GD47n2vJ3GpfFiXfAgeLLwXnWwrfFHmjLz46Bwk7VGRauo5R3c6Pfd1",
  "key2": "3h5kHVuEGizjuGCeVEWmhNgRDQ33YRcPSXWKdTZKbKi8CTjNqtbkB53L1xVcQM4ngPTd6izvu8iKcrKfdstFNqVq",
  "key3": "524bE96wfA1tC5sfypfEfE3mPY6W1EByFVPhxFwHWc5SMep1Qrmn8bav5J2exW395QNGPCQYoZfLZLQEbkvbbvA9",
  "key4": "znuGFTtgrAkzNyj7meVxGjiDUnrtaTRju5kRGSooZPv6MJM5XwbBHa1r4sz8CoMyPPFf3ZyaNkhLEU1vEN9ggAM",
  "key5": "66cw9ejYRaVjSNdcjRbtJcC466ZVd7mJ8H6jFswE5SyHRY9iyw8pAoqEwbqXnVmv82gpfPdahZPcXtuTCN21yG29",
  "key6": "5uL8teexJxmEh7z9i8tu2ZYe8RAeWMZYXAH3Z9SHGtkKztjynppR8RueW2PF2dKvkdMpAHSj7Ab8XwmmQwYTm6LK",
  "key7": "3ALXxujkH4rch9EgL3GxPj7ksNteoqizMbsR82HuXxdgq3tLLKKCA3nmbKzouJwy2gSpV3hnsrsCY7hAru2Ym9kp",
  "key8": "3L89kEbxWhXfsLCjZDCMhW8maQh9PF4HyXu4Wj1WFucdDu9xSziQQjbZQQb2S7EgkdvHZMHJgbTJNDq8qkNw2JV9",
  "key9": "P2kUBi5duzphrFpuuFNxocvfktYuKGwyLBB1nLpB8L2vn6dBoDghT9H1tCBCHuHGRDQhHWRh7mkezBPM86d5Sgw",
  "key10": "5JgkUDcpiz9W7CzusAELeCgAvYpo1o22ixuj1ckNkbzofMjDjLoBa8VNmdt5XgjE4F12Fy4FaFghS1Z5dbvNcRqt",
  "key11": "4kvMDfcDexj3pqE2MuQo4i9LPwMKGHaKC4kBh2FPA3byV1MEpgRn7B2etkPikxsa4S2yjowXSuZwh5hW1tfm4wv1",
  "key12": "5vfv3mMTSw9Z6vinj4Js5ky97pwUMtmMEEDV5JrnXzGWyymWUSW6wzKk8gD9Q9tAzVc1466svE3SDaotb4EWuj9o",
  "key13": "63jxk63vFi8W52tAqWdfXdd4qxVa6wvKNYRo1Fzx13mndZVB1RXFGaqr6Rkk65doaLgMBPWa6bwYayFUTbNvwfeQ",
  "key14": "3pFx11nDRbx77ZyaYHFHn13HkASHiVYZVhzFUdedXvZ7VpdpkBGrdcwj9aRLWxr3qJSgHj9Nqs6hDNiNd6WAnUzg",
  "key15": "LaY4zw5B793h2vAm6EdcPoN3Ur6HSpH6g4h7NyCtzJGojrsbifMY5xwfRcEsuvJCZnGWukNiJNGogpMAWtd4nAN",
  "key16": "2XvXdG4puUoo6xHLaktHQdhLAu6NE6YgaLBAoqHcdv4LGzRpnw3wD5UwA1jTsrnd1BJy7WmdsC73nqzBcKp99NtH",
  "key17": "2pFkg13RjJvH3DVhjHFDDwdeseCnpYN8uYhu3Qv4y7RZAPD3Eq83TjKhnriNsK9FR3X8Ac51vPo6m1SJs3zGYT6m",
  "key18": "Trad4HzBdX6bW95pHwnm4h5UsyXDGs92F9K1G6YnJbfDqhBpHWB5zyXhUW6JTq2zm4edcpnrRW63psKaeMfNQ3E",
  "key19": "2pQabaqEnhskom5HvrcbnfXcerJi6vPxd6yCz8JSuA3BM5KUqMMKiGrG4sd7GK9LDYd75DmVdZi4vsukQCnVsbFm",
  "key20": "uPLe7sS7cpui634rCM4froPVtiPrx8NQnz7ZvZUStfiVWpqun6LMujVQsHk7wf9NWNsRXnjvibR7atwU8BUrznP",
  "key21": "5pXcMtWy4TSgSa6QQt7zcRXJmubsi2QU6D8BZAAZ2NpXvqmPh6WZDVCvXogLgM5NZs7kuiTcTb2U24vQQVSXAK2n",
  "key22": "5RazMhv1pNCyMwPxABj1QeShyBw7xhkCG8ctwTsXDz3bnPsHrDpKSxuKrzrN9shktUgb7vRDH65ZM3bdwv34sqss",
  "key23": "5rx68KL8BUXnAbRF25hGjCnXhU3iomrPFxrcVPEcHgpW2aA8ke1To2aeohoEb6JoZGkBiTYeYSPoqQfpc1kVchpC",
  "key24": "2Hs5pzoaufJWvRFnq6MdFZBKAHabD522BWsaYVnR75pc9ja6JSgwjR6nskYGDZiXyquVf9UBtw8Eb1ZkcJCdGuxj",
  "key25": "KKW6KbtkVJwzVoGSjfYyAtQjmrpqp5qDqtCYWnZABdQbTzKZexYz5pLY269oeGcKoMA4dMTgpj6ozACSLcbA5Zu",
  "key26": "KXsKufq6GuGK9y6T4C6DRRMv22ZvjA82RacPxXGMZworox51Qq3Gyrnn6GC1krPxMREm4aTGZ8hDNuThMP4hV3A",
  "key27": "4TgcoMXoqD1kC3hsVCEf3U8EjKCDmJoXQQNvG95HXfWPmSsU3NUkak3qeTEi7Zhtha9kQ6f7EjZC4ZZveBw11YDQ",
  "key28": "5GDbT2rj1NKBqmPj4aA9q2YvvAbgFmVFF7kAAtaJ4CFc6CM2Uqyb3hqtkPaWe42i4tBekkFoaB3vbbEDeNS4N9VL",
  "key29": "49uHR7EAvLuYDG91ez6rTtoWhwGfhc6UC78m6axtnZsk63kQ7v5D1WpMNzGnHWdEP3Sbae8uCdEcWpZBa4GGTSHv",
  "key30": "4ptGDe4N232WiGBGonj2hfhrpVE28whXKejqWs1mpE6Jnp7xWM3NUhoaZNHxuV54nJCnkWExixQ3PB8EQqpwx1rr",
  "key31": "4ewo5Kqad5bM1GqAHrPRyYMThZGdcFYX4bT1jj37kZ7Jspqn7UKLsiihLD8XTijX8UsbQFBgf3D93nf1YQSrkCsi",
  "key32": "3u87dkTwmY9ZcyeNpmT2DDY8FrWYdEPUjuo1zfC43nu5tzMoYXSqP3UP1w8qLVcNHHgqbLmGv32eigybNY3cEqNS",
  "key33": "bJ1xikUdrUM68b3Tm5uni3i4H7Z3mLsTkAzLjkGL53QNmQmB5Kp9wsjJgU6KgGaVXWEorRBxKhrNq8c9izr7TZG",
  "key34": "PXofkFNcoAfCUWqeWwVYVFG6ucTB9i4DoHydnQh4YF4FfZQT5QxviPaQUshbfh4wJEv31FDRMrAYbBVknqEC6UX",
  "key35": "3zkMtvVQV2SKBnd6ruYmnTv9qcRJ2Jtn9jR7bZYk3d55XP7N3nJ1e5neUMSBbZa8SNQedwVzJVzhRsbDXLtrxLdK",
  "key36": "4jV264MnEUJbpFaVDwkEGXjsyqysTV6x7yT1UWB6VqixsJNzEDoUfNXYiSLNsCFPxQgpajG8G3JiBFeURuyS3yiz"
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
