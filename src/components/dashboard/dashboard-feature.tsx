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
    "5YX8C1H2Gyd86JGQgsRqq21P1gw5R8eDVHsVGkU8xsyVBMeF96FtuywhyG6nEJmNRNjAX6jnAVyix4DRpJShGwQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ysACemBrCZfJzCKnDjmAS9AEUyxxWGpnsCPEURdv5TComZfX927X977ESXvLVqCeVqd4rER2H3wCRrVhifBnobd",
  "key1": "2KmL7k1ajjjbyRVYGnmKKjorh9HRxuxzVHQgjnbMH5iU59Mii1HTA9hJMfms6zxWHVqhv8uhCCgMXYfGob6Ti8am",
  "key2": "j1SEo16szYSBDdW6RXpyWu787HpqUh1Aoi9BrZiEyQLNZYDFTGZnVF79qQBqP5D79ieaC1PSfKYZAM2mViB86Zy",
  "key3": "5RCsEniJJt8X9tfyxScYmNFxuynbPSRkEeS8XpUiotDrRbmnEzQfmzeyB1D8gEXG6GJgoBHR2SH5MjNMaBMk5pNQ",
  "key4": "3aVrfWJVfSNzdw9pgNn2c9jcPZDMhPJvNUFR8JgsPAF57RGjbh27wmtE8cUAEd583P5Yxf8AcUdnzrL9d6g2jsr2",
  "key5": "2YcYbXTRhzAL7N8xvXhBYWDxc8zDwWgSR3AaeQdPVPwVqyq8uNrU8HvczPbukAoQceGgoEwpJrWgLmWWv7VuB3yo",
  "key6": "RdTFNBFBHo9JX3NvvhEbCpH6fJt4W1RwkH6CprLFEmgqt46z16Sxxo9y5JASpcCy3KapFDGNCwARbLDHyqXvPhB",
  "key7": "41G1reeZAg7CQ2xLM8xcEx5hMHEJVmLigWENbdqMi6o54Eo5zsWECvS9LQHCQKgoS2437a8HS5g5gpnDUGfnVHRj",
  "key8": "3GXFUEy2UrF1HfV4KiCFAtfFpPGUSjmFAM319vrBqrgcBe5bkRAre8uRFaXSGTMyDZjXuubQWwoLqnDWteLAgoVA",
  "key9": "5i9LsGYaQLsSZG4PWqVmXJeNhDLjyB2HvVcCCqxpst6QoA7vvSVcbVfgGhmdFnNzfgbB3E9VQcRYFWSfkPfAGK9a",
  "key10": "3c53sbV21ssRQu2tANyB6VvAhdgxgVCfyfxH2C7CWRUUcLrhfpvMTaMaBECKvuw5nmC2bjYyC6mwEJ2tkmog3Hos",
  "key11": "63ShdwJnrM6gE6NFBRSfTaN5fRaJQeEw2Duiuk4zsw4ryqmxs24XG3PT6n2mPsizqeUKdReJwLy5u4pjwvcAxniQ",
  "key12": "21qzGwzNMkorViUPGHA42y4vGVCMYgk42mYqmQwJfnMaZ5jGSch983gCdaJdyu22jvWebQh9Qk5sRxYpyRUYeTQH",
  "key13": "3ufo81HR1JuJMnz65nocKvXRkkP8R3J2KTTB3zksrnrJY9AXt2CBgnuzH4kjXx4m7Q6rkVKfvfDoGoqL3dEL54WG",
  "key14": "4cH8tmX93CEujfuM6Rprtn6aXGrWeWB71eh4mFk9uMZtfphWDT8Xv6Mo9cRouQfsWDQEqy39z9ptfV7pZFTmQmV1",
  "key15": "5fmyaE4bEEvfxRMHQbmUtDiLpfHU5znVFGnsbLAVf9QJjCcuzHRUpBzKCB8ysNLFwHzEaHsg4RCBzo5qTKmnwH6y",
  "key16": "4MkCHaA4YBuHShs9VPyvG1VuZgMANvkDMfytwud8ZA9gJbah7Zy58aAveybdYiWwCbLgm8z9jVDBsd2RqA9YTAFr",
  "key17": "2ZcP71Gq8DPzmQa2MpakQe9amLSy3ryJcDthJjdcUvLjWrghy1WgTFwvPgitE3j3zBh11cu6wwLgfo3tMCgmx3Dh",
  "key18": "Dts9SMjk2dfUoDaBb5sxnWaTMG9jPBxn3ZE3LHGCAqWAGE9Sci2C2SZieo5cBpNvDuRZ6BuyHWQaPxhhGvwmSgu",
  "key19": "3juw5L6PLV7HWZP1eor6zqs8Y6wh7kSZiRRqijzc7Y2zUvWD73aF5TeHeivDraNrhbvqJHGkhrxuxjCZMyDq66pB",
  "key20": "5B1iYdyrs5KLnCB5azkUVG7QkH1poDYsvtwEkVT1kXqWbR5QgQhj1xbhN2w6o8EqjkM9Z4CfRp8afuzGk69QMVUD",
  "key21": "1BP3qaSo1hoPuTsxmD5mA77R54o45R4ZgeTKDVMuRx2eN1iLtxga3c9tLBoHDwv62WUFtd76QGqCFLHCzHoR3pU",
  "key22": "2cPnyjZtD8PrizcrYHewTtYoZFQP6s3F1k2pwMGEhYV5nudghkD8vUEUvSvAGbK595yq3U7v9vsS4aHCsmsHm2Lg",
  "key23": "62RtvnUmknrhSbmYN3WayfJ6vWFaJYMaKU2JdDB6TDLuqHpNvenHYXnP8zQ1nzb9AtKvrheF2Vnxp5RnPgDQrBP8",
  "key24": "32wPKbZPVmHXAqio1WHJQwdFtbRXz4SBQiQRon3iKVX2f5GjHkgwauqikcE4LZ7U8gsXHYJvQDEvrGPf17bfx7P6",
  "key25": "5mwWDSgsJbbd7NBhmTsg4dfcsysq3BwYZJZxr2Vj547movxrYWgJFbBmHLZudbKNGU7dTTYaGkEgxRvchZTW9maq",
  "key26": "4KQh3JP96mjqtVKDCgjFgoaYUQRieuwDMhQPE2MDJtWRQzC17PKi6axQeEH7iU7tJWmR4Z3qkATR16BG9BnJkx94",
  "key27": "61585HUzvc8LyT6GPVkJ9prF8mjrnLvYZDHnmpZu1oqsqJMZtHU3Zyryi2kUStAK1UzxcjGCEMdMHg3e1tanEE4P",
  "key28": "5m12Zqx9bxizg2EewRUju1fgzDdfUERxBriQshHP7bBixPvPQcEce9PRx1Dzhotejk3XuSKHVfrQMjA8Pg7kxhzn",
  "key29": "5Xwqfr4nw83Fu6YLELy9vDrYZcQuGDoZoDraBZmZAUWrK7fRHLuEVNJxzM75VJRThmffTHooMd1MgQJeSFHWxQZG",
  "key30": "28QZSfgXuzMVZUdc6vrqjhXdVp7TyenJrbjFzzBsGmd96qGBnNjizHL4Qs9k5UQkvHsoWnwG4CGbV2Rcv3jiBpBS",
  "key31": "JP3XqBSHPtLwfP3NEnNR37GVMxZUXftzzMwSYmUpRKVYoRsLdNKAo9k6h6uoza2WPpts1MAW1ZYRLmJHrrVzd93",
  "key32": "3izkYqRN6k4t49dtMXoa2QkeAFvA5EbuYBJVR7wyY2w9u3WZXMCs1KxxEfvoXfH8Vun6GpofecGN2yMpvsQQkSB8",
  "key33": "2rGQAypjAzwF9TsLh9MkyCpt3rQqDodqmG1MmZEd7BRq5VPo3127masPhFkFsPTzVs1YVSz79ZSzpiZ9oNuQdgLM",
  "key34": "3Lj8Ygd3BK9vkSkk7eSWtEyEpC5ANergABheo2NXjpDjVU1fby8NTJrqcAMG6dX9te6xKrQhxSdBEkkFzQiLSAka",
  "key35": "4huRQSpntBwKWsk9VAtMKrqFzKRdsW6rKuKP46qcZQZREkiNAi6bugoS7CUv8rcXAjkiLiQBcNSLj8kjsddsMuSr",
  "key36": "43kNTZKypDzMfbsDjTpFz91HLZT4WcMfcVc7sJNGNKCBiHfndf12cFHBYeAzmkX7hn5DyGiCtfBQLzuXDgDrn9K2",
  "key37": "JDZRGum43BaBUL9iBaM3EysAZ5VgpbgpLFYHgxh8bhXzNtjcCfWyDiU6amc4gR8akfPcwKtmVAnFp52gff5KPdV",
  "key38": "TYXW6jLg5jPjdVGM2x5rT7W9vThFHEqYKhd46TFr2gU9pYsG88s6Z9JdKu48n26c2wRoE49DEbydcdsDHizQUza",
  "key39": "3upmYTDYmitLYAKD3wGXFhXVR8E3YSjDhYTdSjnHDh9Q5tnJkw61tsYBHR9fVvUtdnVDcLDhbPsBstYrmP5vGDDc",
  "key40": "3udVjGGGAGDpnyJrNYpqUND7QjevYhKGW1ua7utf1k6dqQ9cnqGG14QPEuWVwbEtbheU1ZYJiWbZNEo5a4QhGDRc",
  "key41": "p7vydSm7rrkKmaAsH1qpQ1QuT5UMAr3SKZpReDyTaord87KTvXW4VEd4k7HoBfR7piRSg4yLLFZbCcq5kft9KpR",
  "key42": "4tNHJq9fPKKE3AZk21BG1SARQX6iFpvMRmuuQt9c3sv6HRMgaS5PjKnBDTnTLCJGXMqXMJGcLwD5iHiSiKrCwoWw",
  "key43": "3fjXgC5WfEeuGoqm7uhwgqBMdJU5xSwYedteVPkpGWKGM9bkCQY8ucTyhMU4RMidEgaPAHA2wJQo3QxqNU3hJ55h",
  "key44": "3VPpdJQqgxs6TdmhaTKgJVMkGLkhZ6RqLoBaqoGww9xHWQVWVbNPtJJhh1kF3ubKqEwmcARmhFxWQw4RSYDC9ifP",
  "key45": "2PJoqLcuHvVz5w6UzZ45vN8CBgCbWS52ySG2e4XYECqXwHhTjfUQsfG1f5V8bDj17vT4ksVy92YBRw1VbhuB54SU"
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
