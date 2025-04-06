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
    "oWYoJPoVvAnW3io4CQB3hgKWvmt2qHxE4CfLFET48MkwAyfj9wVGCTQ5868LHNSNhrinXMPzXVMy86uDquvRrk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65SzYyi2PFJaptG1jqKYdLdwhPcD4cLYH2x21nUN9z5jkiZp6MsfynC18uQqhaN1CW6Po2Kiwjd2GTXKeBcTebMh",
  "key1": "4RkSoFW7DTEtxrpHHtUNsRLLfsSvWpdyVkpjHrYzx5gqyPg7QpKQQAM9KA5E8wPUvTnqVfMWbt86UcVgS9XyZR1F",
  "key2": "3nwUeCuuWN3ruQjoRgtS1MHJgBxz26a8Xa8vfy5iU6Ay1qcDTC6j9kpThpv8c5XtYH5ULGu3dhC2RCzPd6ba51Cy",
  "key3": "5kHPacCDq8krjYWPSqjfgdBy5r1ZGy9wNBtbmkdHqDYaaYsFF2X73KVZ4xfqLQFKNZT5QcbE232PedU383oa7Hkh",
  "key4": "4yWQXVhx9dXAqBuGkktrsApFpboGV9QyiB7MpYA98Dux354TqUeuvaGozsc9yDaGvxcF1GsaqkaCysmJEEvgtjew",
  "key5": "2zWuBZoCYGJv9WtLJK2UWTQCEGTxjSJPCroM8SZ7fJhv7SpSomwZc97ksw43jTQ2urv6EL47RGyxyZrkbEXCw9X4",
  "key6": "4NUuRYnRPzgG3QzMkXjZfUkpydojTjDC2kBxdryBphkBcPWP1vEoo3CcrtGH4ck5J2tsBSE3mrQYnt9n1cPVnuHM",
  "key7": "3tTT8bYoKAn9Fgx9ok8Md66EeTPF3nZb1oAyTGj88eBc79SJUSFPYCwWDn2vTWFGRMjuUSZZxpPRpXb2a57TtPL5",
  "key8": "66q15tXeFQ4bvjrN8ywa15oTjLUctAokw6p9PzAdsDfTb4Rsfw98bHJZfmg1os8ftCDJtVrMsRGAW4MNw8xv47ye",
  "key9": "3H39S2LLJhjy9NzXZ598xzXguX3pPRr9CpetDfbWYry4PLTobcrRnj2fqv8YScndf27tX9ZLPnwxzPhEEJR6fvNg",
  "key10": "3MBowrtxPeCzezUsDuqH7e3rM72FbJNMM7QgMHDSP7GetL54ZZFcrT1Ds3gTo54KYZQLW5ZSvcUTJM9QYHhZ1cfL",
  "key11": "5BUFCeBqhiwpu8T7UXisPsL3qyyhmYKdCJ1tQn25EGUbH4MZ1dPfY4VjAAxLUZ3Ngz4fZtZ1xvg6X5gXBdS2cUcb",
  "key12": "4ChTd8u3uGyWA2yKdhtdFL7RgAXu8R5Ph5sZnj1qsPwzQWCAUAAneGCKX9P7rCDLRZbSHwhvqh68A69Xb2Qsw1uK",
  "key13": "4P5PP6xLvk7HV1n6uSATs7popacDrZDnqy6SjdX8MgGArz6D9a6iRqYbhZpZqfUa2u4ZgAgZACRFK834Q4N1N5ED",
  "key14": "2mynwZEoP29CtFbYYbiGRRW3o2e72NBT3M7tw9ieG43TD51kab5bnEwsL8D4ghVBsMvAoGrYMCb2LMQF9eod53kr",
  "key15": "4FTtk48dV5FSgZiqzG9rpPCmuPhd6bmWJMQVXZ9P92BWbmMcHa8i5X4c26DgMxNcp8Yfkdr7fuS3zxTFfiDTkb9G",
  "key16": "5Cd2uvRk1TMz85ZDRN7xm2a56k5h6VUQYD5pPnC79JgT7Bux85PYq7s7jecNZ2VywfxGjo48H6P5VMiQcDkzQJCZ",
  "key17": "42ky8aESMX1RyQBeW2m82yVXHUmmqCEMJhpZo2NMfAnJhhqXXfMzCdK1dgeD3ZGiShtu2CXL7YqPsARLhWWc2tS7",
  "key18": "35gtQ5AfeNAtFkSo5HHcxY4ZHAFnnVMsdkHLratESALm8ciU9gmueAGvan1X6kVmTFYr2Yd1cM2jhQLRAzDc2M43",
  "key19": "3SfmWigcJAc6XRYsRfLBHVz5am8wMcQ1u8BUTSnCR3a9ooddgn3cZHX2yASXAT9RBYpUxTA5h8pYAc99b9hZqXEs",
  "key20": "qzxGTVYNVeXXXW2NPshMLG2zn5tarkYPDz7AVBFCweqFTiWamRvGQAkbxsirzJmLJ67kETgUPptYUsuToyKm7gw",
  "key21": "44kN2ndFLgdCxbmgScKUDNUraPWtqvzgi8SC3Dh2Q5EG862yuH69ZfCVz5MwtAUqzVTqaQjDVZUV88VcPG2xUtMD",
  "key22": "uD8XuxRHfMNPHmckcemtSjeK5Eq6WC7Pc3kWNbddpbQ7zmYnZcSBt25rTQFJVG6evaReoKCWFFuYF9ijM1ZMeG6",
  "key23": "49hKE1HCnn6i1SQ9H7DUyDLxAsQi7nTMPfm3cN4iFxupiEUV4YbJAV7ZkTPHnYTUHkeWD4Fq7JjFruBU4kdZ5mwM",
  "key24": "5RM1GW3guAHM5Z2hWtHhJWo3rwg1CNskvjx1jFdS9awvvXkvqt4J2tnsEkuMiv2yXmPSyYFQMJ6Ams41MiFw6WWY",
  "key25": "2kx2K9ubjXbQmd1f8XkDX9XWwUfEeNoBX8xbz4FFygH6g2Q1yRNcFLDwdFWPTdDEhvRL7sEtPRkjcqZPJJqSWTTD",
  "key26": "b1ix9RDa77YokxAjQ4zL428eQLWvPCdbnDyRRdAL123FYkSC571K9PwUoVG9gh94G4qHnvewfQxizthFJeCjmeP",
  "key27": "5q5i3E8f2SjtSPZRxvqxXPQjh8ywZi6V2XaQrphNCmha5CtK3YvRkmQ3VA23uWGXHF5aMTgZsRBXLEDKR9Du7D4E",
  "key28": "52i9684V2iYZDQyZs1yNsSA328k67jpuXyompoSc5ur35JjhY7V8ZSW5KtCVsCQe2CeM8LRXRjv74KJngGFguxNP",
  "key29": "5n9Bko1TaYavfDcaxgVJd3FLX5fRRfre4wAVVT42YSZy2Ay16n2vHYanRV198J7M7fGbUjwohy6fZ8MqDZ2E39YB",
  "key30": "4A9u7LLQ2TL24e3VHDfJVk3u1PbS4ptYWKwV6Mv6TJpDQaZY25RNEDDKAwY2EpfAEfXWvpb9GqyCqoxHcqaPivHN",
  "key31": "3DdLkQLQQtRMwpJcdKnGtcYNsTZ7PwmW6dRp7CfJqiUJcE8MWKYQTqiZ2EYjFFATZsr8AqBFVvNJZSXzKkoGnyR8",
  "key32": "3KzyHDkGs8wqGEAstpR4qTdMQ8xRc8fG7tbSXxfNT9JfHACBWPYPQMLeZhcwxhjAa862V8bzkM45NKCFFjRmHDhc",
  "key33": "2KxbTpUd2ts9eYt1zhPXCACC7DSxTyeaHYQ6zdtj7VVZvhtJJvHiyeQppdGT85i1tux5TLEQgqev2Axb5cdQVx5m",
  "key34": "33QkUTjvnuh1S3cGqYgQPLK6XB2BGYYaYTG7iq55Zk6p2qapRUxYDVPhdEGSJEb8HfDniW6FLt2y5JLvU9iakC1v",
  "key35": "5Q7CGobZXcJWA8DtfPfez6W6nG7HiEkiQXTnEQRJ5DMunzFsPigUY6zoen2KSMvx3StfV3JSaA7dpmEH2q3LP4Dw",
  "key36": "2PsuY8HTXWTHmxXF3DcigRtmgB78sTnJWFHHyf8zyS4NkUd8SgMKLrDAyu4soagZqBCyVVaxqw1N1PgXifygt9gP",
  "key37": "4epAoAm5R3DeG3LoCSS7JbwzxKbJTcxUq1ktSNsXk1RvXhaVhMSDfA3M96oBRsgzdCogXJd8Yr9UTbngY1FH9TTH"
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
