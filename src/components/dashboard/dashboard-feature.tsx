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
    "4n9zSBix3U7DHEaKWhCXhWFwE5sjpT3qSJSiE71T2yJNiWLernt46uJwGHUModrvW5ciAeT9Xm3Be4giG77R38XF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iJz8ve9Su1piTE89LUyyUfgqQpUCMjA48ALz2ZpQykQjJQJvztq6WH63i5DoWWMBZbkVvyWjS9qbKsVGFvEu4TZ",
  "key1": "3hNFxZzFtxqdt3jfRXXjfZbYPEnpL1SC691wtPs2n5TXNeaZzCnRkWVyrmaoiGw2t7cbP6E6U832QDhvZZKFopT",
  "key2": "2NGMpc7T9dQPS8b17LConkmdqYCdCE18G3eX9u6EHtP6AgUGyFH4FVY6n7fkkbnSELx7vUghsGkQB75Zzf975XeE",
  "key3": "7QXWw1si66gPuJ5hNYXBkEsdovnxruDA3bRPXQVU36uCwuZSKXyu6qvjUJw43FiKPUN4oZVyYrZVPtPuzzPCrUc",
  "key4": "3tw44fpWoduNdNKDt4ak6YTeophou1h3Hw69GMec2wCzXMogpgvqoRwoKh5ot2tduvHfWtg4PmMAjf2XxryAFjwj",
  "key5": "3j2vFMunidQauVjmnuNmCfGLwMwnUXZ9JbHMGWyCfAvVXdqdBGd3LZqVMNRmbHSWupfFUn7BDB4xN8c4uG9GnHzG",
  "key6": "264rWBqXJ8P12gtR4kvFA5bBRQVGt2ZnBt8p3cVcKzimmpAZteYcXTwsQxe1aKdjmZPvY3TVxES9NzpNcxEHq5ne",
  "key7": "532n8jSZGCgxp45J54pNtrny21W2fpkKPANV4MeXWBDpeEUCY9RMBC7D6uGZ2aZA6gyodsr6vRsjSyDvRYcdp8gH",
  "key8": "5KtVteysDMqNNxb4dcp1MrqmweuV6b1PuCHwoatKUG6GNBVrmoodQJ2uf7oJDdfSEvgb44K8ZVbX3bXJcNXQuujP",
  "key9": "2GTiS3dXbcujLF13ee27pbRXjXNfCqVM5wp2W19iASovCWhXKEoHHajN9XK26MoSV8Sa55jCcrPRs2Gmdq7bh1uw",
  "key10": "3uEuUYL18cp1LoeZnekaDkvuHT18tWYU6ikZ1vCjnYyGduLCSVMXN4rYZe1vsAGXb6GqzvryMQuxGbKvgPJ8Rn8y",
  "key11": "5z1TWVaFcK2fgxggpxcHbMiB2QpmjHJfHtA9J3Z9WKYoXNvb2J44scaD851jJ1MkZZYcy997q3VjoJAohSKASLbu",
  "key12": "4Y1eSTShodhAZs5DTWZwgs1yxssFU9bGqR8ReqKYAVzYxJwMm1rmmSbHX5S9UgT65NiVM7sGu7SjBEobXD7iBiDB",
  "key13": "4MWzsa8b3WTRujMKMV7MvBRQNRo1UUeg8u9oePSvfccijx2wLfQdbXoS83pgmEkmgcxkAr6TQ35vcQpjfuD47jxB",
  "key14": "5SykEc7y2LS9wQR6GBTqwd5jyzyx7iN9iqXRL9UWaUYcEuRPtxSJq5WMqop5avZSJP6nZ5RTgSVnCoLEmd1E4bjf",
  "key15": "4Ru5XzSAgWypJK4W2DGcK1iun4zAWEaUKZscjGnR4a7e6ZScz9UeEB8YvDYTqbojdRyymfs2r8d9Cw3AFEX5A5oG",
  "key16": "31gLzr9DHg6rw2Xf6dYwBpFMEFcYqtxdC9YFEUyHosrCwXT674DyTPmHz9bZbwdQYsN4DBtBTtGwg5b6wJx6zU2H",
  "key17": "4uHC6CZUTyr7MPBkZjFyrmkR3H3vT1A8sbmDXToriDyawZYkJVkwf2DjMX15C8XynTVwbLBWCbH85fx7kW6cSaRR",
  "key18": "2ZRoBapyT2a1SCznZxDpP9huVniQ8itZPdhp542Dq4puY2nGsfKoVE223S2thDA3uVEqfwMjxQQjxkSjBBFrsUDM",
  "key19": "5zcz3ceotj78ffWbsPBV5GTW2gtq3ZVWkqh9Wi5vDwKxHur4aJ2M9n48Qq2xxGHFnNMEa4EpM7zA2Szvmjyjn3eZ",
  "key20": "2DDA3xKE5oWkfKhSkUJjVKiz9iat6BkTJaCPH2TpiTV9chk2KpWZ9oW4pGXoVgGSNTEqPDVkj9nhKwkoCUxXVyDs",
  "key21": "23zzErFXTtnDHzoomKUbDW58ELEe94JunCxiSyQoVJCWRUERCZACZXyM7LLAtrKS33YAG5eG4muJLFZa1cckaVEC",
  "key22": "3ELW9NuTtrehpTyXmrLZaRNoTKm5xSxWbAHiD6p4Cxj8pudBM56TqgiVbEfRUrZGnpfnpPjMyWm2vWYNaRxi4TX5",
  "key23": "3WJiXwXcYgo8qqvW8X6gFwvUspUXh2ff7fg2BerN4oTSUFEUvJijLGYcUSY4sAWybmjck3xNuajzQ1yxp8BQvJit",
  "key24": "2tmWcZpg9y42A5QXmBCcfQCEwtk6FtqxHXf3Y5QUp4z9mywKcVZZ6BPk8DJ6ZV1S96qyuYUug53vfpXepA9r7X8Q",
  "key25": "4UJMNFVGC93A8Cui9szMrrushyP9qjHi6ZqjtQT1PtQxwa9trd5z3biMFkadUakbhKUXzyoGgikb596twWWdPryk",
  "key26": "3TqxDfhqBSpGie4X9szGatEetvubqo2DAwMv6syYogD6DMFjn8QXD4jQ6yDrSZL5DXTKJGWz3frikfkhCiVHkChJ",
  "key27": "UcBaskiynfiCwSqfBvkc5ZgizMDrRrHnuf3WdTGmEiLuksHzgCz7ChLwfNmcfgpgTwMKHD3wSWocJZ37d19nrf5",
  "key28": "3yCmwChvCCbeHLn5gKoZRdrQQm1gwFmSQRhvectHE4sdoD1eukTcR42Q1ZUX1iyUwXVD8NViuQMu2PRKdygJtCNA",
  "key29": "NaY2B9ZXhNjCTz3ckpMshQofgra6R2RSdUZGRaWduWotHopY3BFA15jFTvJLYPU64oRGhBaHQzA8nMpETYzvh9b",
  "key30": "4pWuUMuhi1KcrKfUp3eEPDKFYUQ7oMp8NL1JPZ3BvpJzu4kYJdTzQVyhhoyfEYkiASoQhpboVTfahAZwS14TPipy",
  "key31": "iDUXTXpugFTraQ4ZdkpwiQiGuZfJigNo7VyyLmBwjLzHwinPur89pH5ezMMa8wdabUTeSFLP3Us6hp6yYLfqHms",
  "key32": "4C9w7gLfDMqQnur4Gm3BPg8Rt7Fofk687BttYBmBJxj8AEPmiZFddSTRo1VBNUMFLfDocXXvLdy1U4EvRwnSNoJb",
  "key33": "4RmpQSgZqyqYhpvsAtTzndCt9mx4r6TjYuzUUpz8nTauAGnPTuGTcF6YJtiMyo5gicfutXJhAzegsuJvUhRhW9ix",
  "key34": "5SEeWSYJ5tKui4ZBqF43V1f6E16KdJqVQC3fMCvEerYwxiWYe5M7HqcWFVYHUzpFSnLBANxwiSVpJWC5zoYbwnCd",
  "key35": "2YczsmGxvNBKZtsP1HQQJjCVSSri8eqqcSdBwsoBKypcwgHnnBMrq3mKP9PWHaSpTCwEZ8oHoj3pmvhqiZtzfMqt",
  "key36": "3qQHTqcykoCNZox6bqK56B66nWPXSkZrT5oiKDhgXnPcgo8kupEWfwL8x56DgSCmVGU6gB7b5k5obEUQcrFReBFZ",
  "key37": "62GffRebHP9o8QKwsweM6e9pHRmooQP9gTMXsmmh8Kq4B5sgmFzLeQpDy5cMg5CSn8PMmU9jjt5d9iazYQxUMRR7",
  "key38": "genJdQrcazVV15s46HrdcRHk2P9ffWxeCVkvxZhZYzbtBZbHQ5Ko991CvyZgx6Yqu4FZHqTjYLjhMNi3T4cbTcC",
  "key39": "4fDJb17hJEFgCULQkuFrcLUzhtQSFcgLU8eZgFQ5no8cRQzfWKo79HLsnH5qswjcHYdmT6iiy2PjgF8j8NcmkjMb",
  "key40": "4BVPZVUMvL9jfvL86113JtDcdjWKbJWFE7SNRugsWiT7innsWaR1ERtotLAGfQVAD7nwmd2R7PkNN8rmjs75u6Ye",
  "key41": "2AC5KKZ5FGJBMUH8Juq67WhWJ4a8KWcJZzWaJWsMYpjwB9LVQJhH1t9heFqUNEgQqWUBNBgnzrwsrCTyLwsj7d4A"
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
