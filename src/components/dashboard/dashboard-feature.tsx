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
    "3sJeJiMboUyJyt9ADmuFd1y4T3Bwex1KuX8Qjfp4WDtMJg1fUMPZujSJ5t3Rna3vqAZPskjHgfASTcugn3CkUhdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SLRn5iyazgVbvfKoTwxngHgKQjCWm6CuqWK6o1Yz2rPiCJzZW6h16bzxxcscd3SHYFhxmyZiS7BSAbfrw4cF7sf",
  "key1": "3J7cNK8rr54WQGGHjp2h5jhs6LHfnDhbZwxcf363cELnhAQjhiQ6sJbUdJscBK1PRCnKjc6zn6pkC7eQDYKFeYSE",
  "key2": "5tGucnXv8r4yC4CA4GoNLuq5XxiANCxpMUUrS7RW5wks5qBAvg3jYejqmXWZjfcw1p7Y19REzyYdpzMWU529d4sV",
  "key3": "Jh7HZ7rUbgwqXugaCqUeMwdgvdYpAipnLq5HSUzQ9XXGQM8sqVRs3mnXszXui6p5SiSisgHJLJ7f2UhKfJkhWRo",
  "key4": "3aw8hzir76waxHYzeUU6b968EUKCJUP8oNXuHsEEm3acuQryStS4Vbco4uW1CMr8z68q39Z2KvkohDMAAKrb57oD",
  "key5": "4uRrHUnQCdpPNhYdL6wBqt3zEAx8VMQNUo5YJH21WJYYtCc7VqWvNvb73UYDNPiH6oqi2r1Xz4queDjq8yiaQF5V",
  "key6": "2jMjxZJwU7pRF4oSVsq3Kq5kZecrfkSrxtCm1ccSUrVjLAnyvaJvSVMAnyQU6vvmaY3vfdaQcM7jWD65djfArv9q",
  "key7": "5E4cLodW9buYcKRtRKwHKd6xf1v6VQ5JwARfC81wasKv9wZ4zk2M9AFGA1oiw1kHhYGotVivcu4fwWdG71zqZQ4Y",
  "key8": "2JPrWNSyPk2wLGJoNYEt1MedGtbYJ8Nk5pQouviZXV6e8HN6v5L2hhfke1UEjApWAmU8oMtdbc4XgPeUnZkYEymz",
  "key9": "45PKtYxREUCazECbFyEwuqVtQjHpFX1yuJyj88M9s5suHwDbKLdnVpCJPVBVoQnEbyV8XNQYBHJGjsxEN4LbrdAV",
  "key10": "3wh3S86o83tAng98tWc4RdyTFXEBinMAEWGnYy7fU4FEKXLQCsD1cx6xNECgTfecoQDccefP1odkkxRmsi9oPj3A",
  "key11": "3UhdHuW5wjLGX2Tc4GywUESJHvDzpX48tjHgUhf8HXr2ATSEXY3r4FmzsVvjzEGE1TrwewbwKHGHPNSWBxZH1MuB",
  "key12": "3KCZtHH6eHz8SQ1fJ7RKsgebsQgmtCxUF8wxaSDsHw2QsuquPVHqHqoWUgD2f8NonuPv3xn6DL2mhckJD2mby5ib",
  "key13": "2RAFRP5YSkLGL83D1JznyJ1kZQbDVo7rQFgq1tT3PAzxS3hvFQ3LTsc9NEtwcKGaoToA4GEhWTUBk7AscMySkt58",
  "key14": "25PqDftA1Hpa9PRbPykTXLyiaGL44QqLx3UwrgTAo6TzWGrrRTV9wsjPEcPZmLn6tRYM3ncy1avor3Psjg7ttkgx",
  "key15": "2Rx7ZmrDg5kSYHmuDHmyG1hWZzd4bBquYvNrJ8etgRGZu75BpLMFS4GWesfJexBm4LF9AoLQnfa3SDN42TAPBSqB",
  "key16": "23YWBYBfUMsbTA1krqiBecs3JWV5EqDPQgUqoBWKajuvyy6scxzg7gJGBT3yoi16xSNW8yq7RpxaLYBiyPdPBjh7",
  "key17": "5s2guDSabM72jQfrMih5inPRU1n8FSDVLzV91p85GafFiyPUVwuvPgUMXRASKR4yfPLvdTx3QarH3anhHWc6ubcj",
  "key18": "kLENhA6AN4EoeyYsYnNDPgL8aExc9PNpuinicDpbWcMSwdd9LRkZ1oKNA7sTD8jGBYzReL8Wa2TDbNsUTS9LjaN",
  "key19": "3VDjTmHHSgFoc7FmyFgJG46up39Z21F9msaVPvmnsMGXHnWTj4AnZhJNDnc4rBS3XZySKooS9comUPBkDYQTssfy",
  "key20": "2sZx37A4qpaiuk8nYHCXTKQWEfEsAYkUyKX2LHQvfdMDbTRPB5Lc9cFPpsJiGM9WcMBbueXwd6mPBTb16NmxG7Km",
  "key21": "4jW6JWxXmhiavpypiC3p9ZnvP3Qj1U4eQ8CLxyJeh3vmrkjoyTgSfS6dLeA7z2thSGscFVBq151WhrtNW1NaEN8B",
  "key22": "58cxv9yhsTvTPzkQF3Hfp6bGjaUrRYkrikba3R5bFBHP2ZtHpvNstaRx2yAQfqkZarBUgQNr9R7L9m7iUfhjvRRm",
  "key23": "4oB4y5AqJKaDZz11SVDMWj2qaZUhoqnTqJK5WeKBYAY8FohB6iLCq8xYpd4uPeP7EhmkrSdakdTPsepqgwKUD66N",
  "key24": "3zVAkFVv3BoHgfVr8QXnHwVBH4ngS4KjH45FLQ6sU6Ad1M4hMWhPajd86f1DTQSUzFXh7MyehwAnNVK3tMwdV8du",
  "key25": "sXQuNS2qVeKuoefuuZYYJhy1vrYVFwDjjBG3tdyaA6EBEhz3uz9kxJKRSV8PjZYDjLR4dVXQhpF5caAkb9guZMF",
  "key26": "2QuqcXkJhJU96wBPag3ju9LjCBXkAW3xWBAbXvDnbkXxsyhU16MpxYse89vwwVSpQyiPebak1qvsKMsiLYvFg7Bb",
  "key27": "2Nk541E3k6Gu7NfDSxueEjdpgBeeaf8FbysaJihRptHgATkeuXyvsKJdMyoTN7g4rLraS6PNmXiti7S57AfA5c6h",
  "key28": "3CzvGZvhijqov7WGQ4ZMLB7BBKk1EKbVSPTs4KxKojgpi38JNRxvQw2ryJar46eXdFpRRkyMhQxzShrNXZUBLosE",
  "key29": "2AkqBhDFQ9FT3N35jL5nSeHJsSPQFuNjmKEwDZ5u844pDuSCoE7Zjbp3dpdztRupBtAofKcXqwixKAevwoPYKWNG",
  "key30": "4spSXELSRkHpRFmaQrqd4EhiKnv8k6e1vhJjLExTuuQX5BjpVAyp5V77s64gBWGTh1VnuUPfg74UJomgcJ2TWkET",
  "key31": "5iLqje2mcimnDhSWhojXTykd9y2NuBG43SaiMCjV1NsgmPxZE6qsFwjZpGjBGzoQNZQEiG73yagHg54gdhFB549G",
  "key32": "5hB3zGGGzsCqsnh4dWtFCYnWHW8EfyiihuhmrMKHXCshhJrjqHfyt3THj47TMuGCd4H2ejb3mf9zE6ieRfAxQthW",
  "key33": "32t9QDUMDEc7SAztgJH3og116HqWNihVYpPadSQGUFWmeaEKMjSiR67sTR8bhNNHyuS6csWfP9YShY7WtJKFkZBY",
  "key34": "6LWrcR2HNBdv4YLXYKFyRF3FMifq7eGJskDxUQnUytUS3KiQqeWkYo8pGSmZtDELwoLcMxPV83T3rA6TBk41DN3",
  "key35": "5wQRehFf2oydSC7EtaNxhAvSooAgdA2oNdMYgxd2V7KFnwHdsUj4AWj8nSpw6KJsiK9QjCb1MFfvuyLKwvmakTwv",
  "key36": "5bHuNK8cbGwrDgwvR99qYHqk8Fn1NVZjabHF4oXppAug4E8ZSQwVWj61GNZRr4nJ9FKgqfLhXuni9j1x2f5WDodF",
  "key37": "4TGGimVxsiVLaKxr9dgeYqZHkYr1g6DrciHAt88S517jhWEzc39e1Uq9w1CTNbw2k959zgTpFcxG8maDNESja7ye",
  "key38": "p5H3Lgi53N1jZHosbC7j4Tc3AQKnjZB8uaYhHD5A7HbuvzFL3RxrdMv1Vf8EyEefxn8ctaUTZwdeyBLM4ELpUEQ",
  "key39": "gmAYDF1Fe5cWCPFiuJnujYjL7z7CBtD9KCB8bWU4yEw3Ugm2ZqPEq5yv2KTj5K7CExtpVzcKuJChtadDxvW367J",
  "key40": "5nvC6bBNMmcYaYRJx2ga9YeSicJ3N8NjTkKouftbHnhhaXDt3b1UWHC7r2btAD9W9Aur3iDgWGRY9hzfbqYhnpyw",
  "key41": "4aHRLiaFTj6x5MJu62ZQC4o4DrBM5jvy7Edi1cBEkHQ4DeDhjjRLFysHq9oJdNLEbq5xBZNoy3xoUqzuSjvbRcvC"
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
