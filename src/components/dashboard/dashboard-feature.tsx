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
    "5yX7G6TC7vb5k6D4BKGFco3oYxFHDK9F25P4azKpSTSoNCejsSbqUEt5isMsDQaKeiJa2CLDhtZ6bnQvVGS3udvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37hYmQ691fhAtMm7mpufZovQM6NbDnRfY53BhVbbQYRebG7jhro7kC6gRJHdoU97SnoCTmM5bGPrfmZnACdfMc6N",
  "key1": "sWiucFhwus3Mc6RJhoATdE6hdSq5af1AniF2eMVtCitoxGaHMuTVjUFzzky4fpZfU8TcctjStRXse3YpncBaicu",
  "key2": "213QPYXociQZa4qsuyv44V6VppJQsgyUZ8LmiLb48urJAf4pJNc2JWbwBuE82tt2xnrGG2wTtK9RYYb1L4fUvK1d",
  "key3": "5HNbKyPDECyQqak7kHjpMgFXTCEYhbWxtx2d1sxKQy7Fmch26Zm1Xdx14xEgmU5G8sAr8KiFFKEmpgomxRT95vwc",
  "key4": "5tUdr8jG8xYJpeS6YUZXPTXBaYMet8h1vmTodbLzmEb2R6naWZLWFAstBEAkq7rg9grk3yp7tp1WgxseBuhSri1B",
  "key5": "3wRFYWnvqMKwUAGox5SPHzXAzw2Mrto1jdyjvsipLWMLmSyct5UjVSDQXiEYCYH1m99oscVvvs51XVagcKHXhL1Y",
  "key6": "57ru3efuvEFMdxRs7HbKPkPZH6nJ2e9jo5EoYx91SbhRBiQSr8dwy3Xpn5zVEpAMNG12bGtSCPnyV4gtviaAVqug",
  "key7": "QctgHQjKjBFSxEtnuhzs7aDm3UVPHZxKJqHUwcdVsEoocnecxVajgWCbgKdngq1evhrjVuj8KadoDz6RnFXcPjJ",
  "key8": "35wybuGyJnHiMdMRBjGxJ4gSgc9ivN3LnPdYHmKAUmav4BJaD4P6P5AFmYGee2xELuQxgfKyLQ2S6s4DmUANKV69",
  "key9": "4r2hkepurUp8HHMSE6FqeDJjjeLzaYPDnu5tedwaYvUdK9ShksF5NuZo3j4rUHqZZtcTXZovpqRDFKJa7YTELtLs",
  "key10": "UgjAhSGfyB1oyh4WHcHkn6rPEGgHWxBvTNLvZtpXRTb1Z27yK7SGMTgPjsRnUj8PXskTuwm1CFrw9iRnm22UkNJ",
  "key11": "26mFwtpbuqbJrNVtQrJx4qMgjfuoicDzf9BPQTnNQArdMRo7QTXoCdkjvmys3QsTXco2g5xAWD1BBArFqRNuzkh2",
  "key12": "3jgzDjm8PFtzQFnkUYHi3v3TvLk1jiyKNtFt19W2x5nXcKfZQvC8XCvGXYBeRAwya38tbNZtyJ2cFkjk8JZpJNVK",
  "key13": "26D1JoJfTNKWdhTLDSepK2V6sViVdnPYkeVqjQLAkcxNvgz1oPKKwBXFQhoAGj3xApWqgkGVHfKZhkoy7ztV6oux",
  "key14": "3XKVkHLMofGzRW9vdZ3dVvv7zJ6agKP7NX87omzn3wVhZmpCepY3wJdht74JQPwYtCjrumBHKmn3omNf3vt6xJ1S",
  "key15": "3C5cGdK9biSV24RY74qynH8VCXaUo6YwZUanctZvEUsuwNF6vyxkRTJfWF3gyK6SLWu1H6hWaj7JReUT5XiKEonZ",
  "key16": "5iYsVFr7yQWKuqA2f6op5MosYWBdAEmk3bsYGabWwZKpUcLBBfMGNJpm6eU5toEeb1oSgL44nd1ES3hDdvc2tWgF",
  "key17": "5BFzrwTkTgEmXaXdzVHp28rEufgRSrh8wNjQvwfufxhmVHQjfDK9VxzFacUErXQh3yFnhNA1eSzx8ziVFyZMhPBD",
  "key18": "5jJVt9zWwrUykaiEUDFkJ1rgnhCkz2pF2jz3GgKddMPv5nnG1AAnD8x3mSgvpGyU8LfHdyFjnLRuSUeKnnoVmLAk",
  "key19": "2Qhpf4zebmUxEFuJ5hHugoTsdC9m46KEGse1Lcf1YL3wM73GapWeTPHBYusfwarTTn3SjVYuHijKYxXC6tk3tNH3",
  "key20": "7vvdTWVQWJ3nwh6hbNygSTvebfdb1Phh8651JVcJmkJmDvjrhTT4ULiRrEuttQ68WHFQ1vWBDiMcVkujwxDL1mr",
  "key21": "4ifzZMj9k5pWfLcAgzCwV968d9udNekRVE3bKDZ8RJrxhumSiww4fHR9FoSS5roxydhywQhRQhPX6oy7eRr3idHD",
  "key22": "7jrBH7cK88vScHfDJU2obGE3PKhTJkLgoo3eSSpUebC1Nvo2Msijv3g4JaAG49MjbCMVAy4UreBjPQp6xU9ZZxJ",
  "key23": "55hReAfcZkhJSjRPCBU5rxi3aQ9dLuYQquPwUquMZPYDSkGH7PLBdYeq5zVLBgdQDSN1ZeCbQsnCV8EGvUYQUBkM",
  "key24": "5jSravdP2C9qZNvyxFwr1FUdNxwA8jQDWFgFnmcQY5Ff9YKnPpTfu8B9RuEDjrKPgLUGGTemPzQ3gewzzcSAXDXh",
  "key25": "bgjmrUbtcjgpksCxnEhXiQUTEwyiKYdy25VPm8FPfz2TVZQCrTZPhtnfynXLRPAQ4T1d3pbNNCYPvW98AWADjov",
  "key26": "3nUTFB4FjwFKu25opABZUQDmEt1LiS6cQuvGBWNAqtAVtDroZAfSxijYKfx7ea7zL4sR5uCoDQ5E4umiVcQ1nB2Y",
  "key27": "B1bPBKeVoYqk774sKy3SrVhfRy7Mchx2DiX6dNaLtPRjks5BN24956FghcRt4qJ42BjBkTHu1HaBGyyL1fMrteW",
  "key28": "2zK7Q7snfY6pwzKsaAAmScCxh3o7yN5MJsdDEPBPw3JbMQtL6kWU3oivxubPkhEY9hphszR1AwTEoQTjuqTnix74",
  "key29": "4FfDT2K3r6XysvSj3MeoTe2ocKoo1aare74Su8agi7Nj4ABcEDu9HTQNX7vx2NBEatybhRcyGDsBkaPUNCRk9mS",
  "key30": "5SwGKHvoZAU4wX46ihfhP7Z7dmzwA2PCBRZ4js1CQ9Z8FzumKGB4ZxBG5C8jUH8o9Wfct2hF8MYDA6Ceb2VqdUSF",
  "key31": "4DV4MoJMqyf48kdBogw3PGbD7DyDtejCWZsPMSPfdEqgBFwYBo6fE6Pe4KRSphHWP22kZAYnHn1PeDhYNQbNrGTB",
  "key32": "2e3cxgfrSZZNXM8TFt9VCPHg4SRT7X8sVf45YsHWjFW8mHS5knpEP1YVdvyLgidAqbAwBA3mR7ZeJkYHKMFn1Jti",
  "key33": "26UQeKEtrjGnCzJLu6rBWJM2bfTUCSV1XHB7nsavpfLAqV4Mxq19fvc1KsMeN7reJ8CEcMmqDsxVcHsNuXoqgfEs",
  "key34": "2HJAk9eHHWhsZD7i3Wr7x3CUPA5u2ui7ch3ApvR5g5hheTsyyTzxjoNwnkPjM2p2oYTjB2qn5JvuBH84qpi1guMF",
  "key35": "9wq5HvN5qgs6Q9jEZwJ5LshkRjb7NsUCxKuRPNvUHdpHmn4cH8gRqNR4ar6DW4rgi6xoku3cCxMpwaL1jZNcDxo",
  "key36": "55gmDF2psm1kDDC5tXZ9vtnPfZuxegiA6QfoeRUggsQ4kDzMmrHmtryJbDM7AVFfx9jHP5BBdSrTUgmoV6HgZwRq",
  "key37": "4oQ6x3RBviqN1hKVcT4iNcXjznK7dmTPGCSrByaurCDQLacABaTQpA3jfrRXscBhdb1u489ZWqwGhw73ZY55XK66"
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
