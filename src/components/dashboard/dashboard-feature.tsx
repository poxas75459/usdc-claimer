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
    "5ZW4ApVCTTWzaj5szjWQyrLQqdGrAWx7SqVfuPhPgQnwEL15kWbxCrLs5vQXKJYdSbn8HYA4pUv91US3BS1haZqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2365WSxdcLDig88gzTMrZLdExZxpqfRibJRawYpRj7UdYfko7z5FFX18JHnDQu1mkKeJQbePqwYqRm6Cvy5W4w5w",
  "key1": "5ouBxwxzMGmvzdP5ScSVDUPK12Mze9GR5EGFgGnsCnrW1YKQPPYZV678usDcv5nc9taKShGhQe37RUJBopsSZHAX",
  "key2": "5LCQsAYmtphmGwX294n3NorizSZLZHJywiE6pLTsXh9SBYieNsnx24XeyhUDJ5aT9NV7wX239CZoLHrfjQY16s1Y",
  "key3": "34YcdvN9V7n3fJLM1GxGCZVqHQx1Nmd6rjSyes2PJC38MAVYWh1Lzgrm9dtRfh8zZzLMbZhuScw64cqa5J7Htw47",
  "key4": "erjL6xHgojo7WmEzJGkG4upMSiyuTuXXFh39FJegEw8c9bqj5cn8AcMiifpJ5FFbpkF2xVjgpiLTZUtz28dYHsc",
  "key5": "3KMjwYhDjLPdFYQctdSDaPWh6MsmYjXhEo61BKATSP8nzK1oGAgmgq5Yx9sZRH1QSxKUoo6jMCUQrS3b9b5kziX9",
  "key6": "3voePPfMsVq4eDX9n1a4Bj6obDBtsLvjN7mxwYWjrUdeFdm9Jbo627kSFWsLemh7TyTMKBE9tw9NAiHhU5j77ziF",
  "key7": "Npj3vu39HLgJT5CzqoCi8Wkdc9bvvQQN1tHVG89KoJRgbTeEBzdDMbLby11TcmwpwGSFfLGkvya4NUwBAGwnf2V",
  "key8": "4avu4dUFXqo9ew8yMoQudGerMFApoXMLCqA31T7aTknCTJGtkjn2bAMbJMDBMHTDyFeRHMBQXAdzttKDbt635EEx",
  "key9": "53W7i7xuT2bVCEgEGtnbNJroJ6w21Lx1TU5ncCjHWWSiSmfwcnFgvwTQA9ekzPoFhCMgKoyHoagGJ84JJwYoy4iJ",
  "key10": "TaM2HBYP2Qp1dWwXnT8UrUx6d8NmYZHAhrvcv6QvvW7123fsAQQXXaQwpfFgWZU3TgJXJYayt1ZrBogj2CaVjQU",
  "key11": "qBxfmkvDXKYwWWhc2hdvdAjUVbZupj2ZxPSr46YJ9og1ZfCefA3Ud3WW3YpBfWGv7wexBn5ZCiooJc9Uc3Uuhwb",
  "key12": "9muMr6HWYHmpJ2nrGB1JWxBmJqTHGzkGQVgRJC5ii1JrS54z1dzLAK3YyEVb6qZDtkJz3j4kgBcfwW2NnHPSBCu",
  "key13": "3G7oR5somJWQ168Gbw9RembzHsDb9tGeg6hHsW4r3dSDDKt6Dfms4KfwsWi8Qb1F5rKFdDAPEt7DsLBbJvvpfQq5",
  "key14": "3jJUqnbxdAMvvm1bznwYBEUj7X3n1FVQ1JKYEpK6FPCARbfwfsP9KNwos5z2sqU5cTUhNvBAR9uzFYf44KFRwKnP",
  "key15": "2CG1u5QHN2K3pBYPbh8jmenQqDmWcWu8LMBJDGENZpcKz6Nug9Z2EwYxQepNwF3qv4sJUVozFE4xqypKDt8i2AGs",
  "key16": "2hqgor7g1b7ToBts9C2pJpCqNsbX47MioBEynLcGYVfeiZpGAf73bjkxc4hTB69QY6Y496qbp4Lkmgo2daS3RYjk",
  "key17": "5eCf7X9YCqnwhpEzDMj6bu4TUdaoe85qaVWnoKdsHTCNw4va6rLtVbtA3Uwy1oUkLtWCDhjTrfpZkpEE3CojCLpE",
  "key18": "3a7QwQKuoS9AYLNkipnC1Aj373bLnJSzFDb6tDbt3FsbecVBrtSMvHPXp7caDABoNBmiye1jooxEp7juHqH6tqSQ",
  "key19": "35X3U2BRLYpr6YhMXBKYFfA1Q7DrJL3jyV1KBCsdc4XkWfzTtqYJEcuSbZq8bJmC6WQkCuyr1uBXMMd9BZbmpoKA",
  "key20": "2rztkUZKfFcQKsdKQtXX4y34WnVDdojzADkbSWtpYF8Q1EG352DocABV5KF9zZV48qopL9jmWFAMaJugeFda83gx",
  "key21": "52h8rPdq8SCzfXjSRtKCmvRn2h6XvxiPbJahhXmiU7AtHjwwbQSirwJvVM6nYutJKtkoMBDfEUhTzpha7PBiM56a",
  "key22": "2AVVrkjVV9J86XJeb1jRztNnmD5PDxTRNWfafihUGf97ojUbXLHEXyzcxVtSsRPcqxKRfKj12JHar59vqWpEkEid",
  "key23": "Q5fVuJrWHY74WpJr5tf2PSymDVwDFkQG1ovJynLuuKUYpFdKDbw2YMxYXmPVTDBuzbHa8ksNqrtSmC9vWEkihBo",
  "key24": "2Bn6GAywbhJZWytRLjB2AAwHo6VVkdgBDsGUepfLT5NFjVJH9QjjpRqw2hjEzjTQ3K53dcHDWusPQ7QbAeNx8rHt",
  "key25": "4zpwtCX2TRUfBVePfoK6DGEAYfQFzgn3S4HSqkSAzKgLAQddU3eZNTPL9Uva7aTHfiv6H9YZt1C8CsDoAz7vq9U3",
  "key26": "4Ah69ZvTUXhfaYLjSC4uWN34WGGDPWnFhn8z6tpRZn12NoetW3PL8WB4Aw6PchYbhW7EFDcCeZwsx86DerRGkzwE",
  "key27": "2trkTLAGzJMzE5mWPdB4HvA5r1GvLMR6Tqiojofph299sB625vrDQnR4Hc8fa8Sr2zPxUhmWM3W8mrQnL9ZUCjKa",
  "key28": "3RCf1fGrTcnPhFxDHQgSrLPTM3X3LtmnYJ65cGcMwqXKmLengi3cH19Z2DehBfKsMtGE9orHwL5gF427S6Di4sJq",
  "key29": "wBWR8RoNDUBoL6SwUGfki8Q4JyYypgythP6C2nbTM8NSJzxxVUgrgfVpMzxvfeKprMgR4gUn21ajAwmmExAdMfY",
  "key30": "wc5e48HhAAPxES5jaopTmb8rodk1RU9ih2MTSG6Xn5K4LqBoyabNHD1ozhwUkjw9xjJ7aH3Zc7Ahf4Eid4hPeCW",
  "key31": "2xGenHjg2h28R3NMXWFuPAkqWNcPoKC2KmrJoarAwojyNJXqEmLoCKeM8rPABANPx8FREw5hr19EzK2soG98zUb9",
  "key32": "2WLPmNN4GE7bYsqPH7jJrEN4CYLMEn62e6pMk676KPmX34Mjyw4e7GnoXH5puy5h14kPTAaBj1rUpfWNG38a2xmF",
  "key33": "S7MS2PewrQsXiWHv6j4CrzxDnLY5sbkDyEmzYLUUtjfXMKhK6dq3VB5Gn3asPr9p5qa4QxNgBju7tqRvfz2yhPr",
  "key34": "58vx2aS9BzJFBEJyJRM2GnoRebNwPCEvb6UiemRXjMG2L8MRNGx7TToXxnXqbNH7wRTsdEaZCjLdwBJevbbuFpcU",
  "key35": "3vp8PZHHnF4nN33sGGTeeqKcPQDeY2EnM9AV7f9K1V8bsn5WHzB1PEp5yE6PwMhim2MADP18s4MG6u2qj5zmSk9P",
  "key36": "2SjR9eTNH1KJ5twxqcUNCWzUU6gStBVywCxaJkf53V9fLAuz2f6Mc6kMYza1f8C6TKKK8z2wc85EuLxcN86vsutK",
  "key37": "4w6p5H2QvZt73sYgLN8tVGAr1i9BEFQZ1gM2HKnaicgcDy4iMucdG9TRgY9DvH1uChT1pxzwfXYW6E6d2ojMbbRM",
  "key38": "372soKXM4pnyzsBhVzf9YUuVPfDefag4i5XaNwVMWQYAERim2rWH3UBPc6XVFjX4iCafBBR8rijpZfN4LiwQHZp5",
  "key39": "2tgmXBeCkSXCdGkVKdvsvptTRAEzU8ZpPVQGATnaynKHS3qcHcGtEzgDkynLX3BbXH148A6jjpPwNHGRZBhAgPXQ"
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
