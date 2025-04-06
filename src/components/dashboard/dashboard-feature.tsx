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
    "2KdkZuPwMXmwoAMfuYKhVRg66b3HkjAQEersMeqGRdVGzLcnrn6Ao7RhRNMb8ZUcRXXgH5pQNpihs6UWxrCH1uZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s9aY9ycPwSKdk7M9s85L72hJrLnz3GhkZgEQfD9KT4g1SHmqU2wiDQsjQJGZuKFruSQmbm6BqVDJUS6Cj5EtgiF",
  "key1": "4aKfeDJL6ThwEmqMUeeiyWwYtak6QRTGkA9CnMj3theNoVW6HtKkE8Bg3siEZ11GhDre7yHvQNi8ScxWi4ZzBgud",
  "key2": "3KZg28qsrhbgHHhZEV6Trb1Mnsrw5CDz2w28TqZsrkz7TnfVcXAt9s6UGLowXFTjfgzXJHSrcdPNWWX3ckSLXBQW",
  "key3": "2xaFggQE5RqztJEADeDeAvmLniNQ9T67KR3NsWiV8YQLQTarm5PsKbdVWfMWnbMXbqFLYsNuUirQu1HjP8HP1LBr",
  "key4": "2Xi5V6qMfw5cZ4tmnqrXX4T6dRPbqucivg8x4gxbyL1HpTnXsdYfACbogUUE2AhdaXqCyv8cRUhXUByfZxhrGK4G",
  "key5": "374hwaN96xkvoQpsHxj3CiV5e58Uv6JC3m8EhsnVJerWfKP7MGXgCSST5Twkvo1D3kNhNMajxeHjkBwcdcNBuCJY",
  "key6": "2AiDKNrMsVTJnH6zUCeWvswrz1ev7Fbs6jee9SrBFh15qr8qqzU381Tt5WGxR2qthAmttAHsZmyCxscog9txKri4",
  "key7": "3rEn8PQAi8t7A1Roq7NQQhfwVAhaR9SbFUx1gt15HX7rkUULoU35b2JdHEYKUWX8We9WHdBPafUd7jodCwRJF9ak",
  "key8": "3shaqXMetBtE5jZaZ7DvyGe1PnZLQAPbDnX7Z136SZtwNT8P6gqsj9iwgFDC3f2Fa3AXQfJFLNzkpb8XX9wc4n4u",
  "key9": "2BD4fDc8eHUUL3ifr8UJZPYSgNCpnBqs5TVCRXCrHChED1JpXN1eN1tYPX2rJRMR4CikfRPufyyYbNMAAADcV2vh",
  "key10": "LgP2heyUchhy7VdFw3beFrh2y2r4WxriezdRSvY8YMzQoxbyRyba8QaEHKtkJSMAFUhDBXHqo4r8rqSe2XXvarb",
  "key11": "4jMc6Jfkxpfnd4btF9Ku4aEiHGr1gigafYr8SSbyXj11pSvkR7wUVUP4f9ViZqcHizcgWBQKVA2ST9X4ZwvWb1xM",
  "key12": "2mbxA3wncJYdXAq9b7XnsVxqkcLqdUTiAmkHfefcevfuxW3iRTzZghxPkYxxCTtTcg3b1GSScorUA4tkVMkRHy2J",
  "key13": "3rBTd4igriFrb5P3GedmLnUfHofFFhDz8Duxj5QZf2PfYQP8ULgFJTwvEQNT6P1xyiN2PobFtzUhj1ifxpU6Z8MJ",
  "key14": "2W2WwJ93bG8bZc6zfVCAPmS2A8TEY5upLGooRAAoGDvvDwZ2VfzKkmbTMKkAWpeB94anKBqQFFVQ88tz3F8AA5yb",
  "key15": "3hSJUvf4V7FKUkZte17f7RybrT9GzDQpQiz494yHqpjCtMiZi93ojx7jEihEZAaWGbCT2Tfta7LDg1k6U3crKWeC",
  "key16": "4BebuxWJ7CYJ2sFHiAJsAkjnvEkFes1XQUbKYy1JKoJxgM9rtDZHAFnDGykeZTZu1AXnnqtjzD8QV3tUiEm17BsN",
  "key17": "4JBujhgKZzN2yjvTRvkqo5wFMt4nkaGevtk4DCtNzboLef7Rh68f1gPpV47UqGwmxgSq94jtu4FzT6RjqpHeB5TE",
  "key18": "2dLdnVEW1Pzog5u3v2VzsMgHZU6pCxww8VPF95ekETmDhCYsfi2Qu87uddkvf9MCU7BbehyxjWr9eMsVmFGJB1em",
  "key19": "4Sm2DkrYtcNmh3KQzb7ptZ3vZ6kBqZzQ3BQnL2j1gJWG59m6DQnRBFU2vtfUrMpEDB6VWnXVhwQLpMbHNPFckJ9F",
  "key20": "4hjy2mkHS1mxFic4xZZ7X7cdTtHm9cJ6b2wnaJVdRfY61U77CwESfQeeE4tFYXEfSrVR2DdzNLHTY7DEJfFQ7vNN",
  "key21": "4A6WUi9K2FZb1LwnF3g5nisbSviEYtfWLErEA5AxEfRgpZGcd5SMaaEmmmkxyU5hPDRAG9CSpxZ5C2hYjUkvjMLM",
  "key22": "2UTR4jrZpSCqi3cwF6qfxtbALEX8fCaRu1cEwJvWUhmiMG2vz4gEAVCVr23gsAAbSeaPQjDoAK6hefDwGMDNvjkL",
  "key23": "3r5JE2qKFTCpFGr7wse3yNumdrz8Nci1j6cVJcVKoQsMsErSNmF26unnbyynPL5c7DrVVVmcJnx64mcbbdKnDn1o",
  "key24": "2GqCxdvdN5JaafGnuTgRVkAq3KRLn4AqKa19VLHGoSrSzLhvdb1MsAkhteCuV51hEDHWsK332opMfew852yzFMQU",
  "key25": "4hGQu4Y1hjgoiLMkoHEcD4Rwj3rUTvDbwAyeyXSntoHGqcvSuKis9a4ggz9WDPexwUjjyFUcPjUPfsYdgZ55wSp5",
  "key26": "42K4nV5vsxraiyZDQveJqURvgGDbCmUQsQipBknNjAVvxfTnsxkdS3ntbxA8yepjU3eYnK3LvQhHPjX2a95UcN6",
  "key27": "5tZgVRQQvvxfSFHU2Dq5Ujmi4NkLUgBe4yR6xgDdEQoi7gRJHywvHfaukLenxh1nVQjfaGhWvbhMYif7QnT2PSBq",
  "key28": "3Ysu4apZfDW8xUzeCdsa6ZSoPoryH1MLAfCo2z9XFtypqP5aG3irc7GXx3V7Mp6UZPPdzzCUxpM7yb93BaHbJu5m",
  "key29": "3ueUArcygNox762eo1J5Gtexk6u6BhnFGK1Ri9dPCCwDqBhNSYTjfnhK3KaDQFPVGibdJr1suVfegwdm9FXyGgdj",
  "key30": "4ny6eCZqLAXk1qnicdeNMbNygZM1iLxdPrFG8JmeA6tpk9GCzi4BFAfVgQoC2HXdZYyhsYJwzN2A867bTmseT6a",
  "key31": "27aZNWCzpD2k9SBg9K6fGR51jcSqrxmDkYoQsqEAKkLXsbQgQQ51dScm28JqQEg8m1FomTfBbX3mF3Q4vf1f2Ab9",
  "key32": "zbvNUyc5JfXYAzXcGNSpZduHxtE42zp224xygvhF7o9DwDXD2SwveNTP58Sf1iKGobTgqBYDyzggjkWAVzpmJxC",
  "key33": "4aAzTYDFAX4eQPXBBPRM2Av1sX8ymHsa7QGfYF8gAWy1b7Reo1w4uHBvUQgfxVBjtC7oqgbBKZ5Z9JgoxfT4n88F",
  "key34": "iGTjY9xac1GEHXzfeeJNkNfH1TikGad8A84rfRuThbtL2vzyp5DEQo93Q7VvqaNpZuyQ57MBekM8NyDDvwPi27G",
  "key35": "5a6U8GK8vByKo4j3tKmcnPeCaUhBRMTVV8J2YZNa6UkzegwDLBVPahRQWH9UwJNaP3A1bpUA35br16q98UFdJttL",
  "key36": "38HHbsTx91cG5ejaKLbhkmPLAfebT96divTmHkutxLeT75kbH5f53PY4TVSVDvTRpw6yzypiWvCi82j7nfp7KWVL",
  "key37": "3TrAa6XvADqviKFoosZXvfZKWicWooYLwvj4CvtcqkCU46F9w82inMbvXKEU2NHqoprogZ1GzUBzFXiqk3PoB2cP",
  "key38": "2KpoZ6UrpCMof3NJ7z8o1vTsf8tzEb4vR1cRiKEnXyyKoDook2ifhJrdHYgY6eyS2gDNgJKU4Pw35gW365XSf4fg",
  "key39": "YomHiroGs4NtTG3PaqusW62PGCSmQNNLFMueWD9kQXAJySnpdQLaFEjZ7U4DuSY4uELSdP15kN7MhgYmTPSAzw8",
  "key40": "32ytDDG6YWX5ZzdnZEtGethBtSU7fcXzKdmvJ9yXGMv4bL4MceuUnfLXCeZ2CRkfDD2XEfei7xBYBfiMTuxk1KQp",
  "key41": "VesNeDBNAUW3bMYt6118iQYvR4PJa8CovWVbthTA8g2X6ajJmxWocx2hUmWZV83EWBvSTEU9f5fk9AaSQ1doJaK",
  "key42": "2Ym2mtcXp7gzkzwYJ4cJLGje2smCB3d22THSN2DmCeTDr6QZDLj8kpsMZqJVQT9fqRKXqBrBe3fm3xXX6H8JQvYj",
  "key43": "5fRNM2xdcBdpVoE2nL8ihzrbJ4ZfbidWnXnsp8VmC2G6Bac7b57ncpyaFpUefJNxtQFNesuEV4QNA9K5ZoePGsc",
  "key44": "25ZxwSDXVs7s3mzGZD6mLMbgV9DLfsPiZSAKD3yFu4fw85EZwHbAv32Hv7yR2kmBosQH4Q7xK3MXGVf8rVzscDrH",
  "key45": "63MAq8HiEN3NSPX68XnnDNAn98RWgnNVS3sY9ms4smuB94jMPRqifVqQVoqohDgLon7WqmJs23UdNV3U2QfSaFVX",
  "key46": "5xgCTGzXEm8w5dw8ojatqHFnswbfr86QeR7ztf8mYab3vXWN2Rk1rx7jegKp6EkKteUCwPfgWtkqCQt7tMB5xVcC",
  "key47": "33puTDJogRV6v6fBE6VkTYo3zUHUnYeNieS6b6jzJgTGxgc1PRu8grJ7iMVhNjJ6U2cFGH9wvmTtujrZrFB3JEu2",
  "key48": "4FRQBZL5Lf9uK9og4T2xWrPihmqxpgfP6qLSyGQkozoFFhZBsZwj9FMsrgAM91u5rJLWabNcpcwfTZXTCUuJevxh"
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
