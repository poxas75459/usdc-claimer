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
    "awpFyKe4zfUSoyUHQQzEYHtzo6r6JwfAmBAUoGnjiHezh9SvQvLsMHHVgzs7d3J4LscTsASSNC5K6QUYBAXvmGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EXgJUjgfQGvjgafACLbtzdgfy3owJNvFuehSLo3weeP7pGqgh8tNHWYrnJrM7geaiP5othsczQZgtWfZxVATHZD",
  "key1": "2K12aY9t45qoGKPq22ZFqvWRjFvyaaBbXdLDvdfrCwryCJj65m4hWz49tRfV3snM2noSmPgbpmQChTP8pGZxLYFz",
  "key2": "a7xggbxVRPWzdtaP7CvsZBsQ4SjTeBqVJC65t9CS7MftgbWvUj4LRBX2uMaXWCR9WKMKfXWujEztVxjDWEgNX2c",
  "key3": "4sjiJdqqU9AY4besfFo1gvFUedqBeqxfHLesq2rwfTQ24uYikr3Q1NY174UjsgYvh5ZW3m2noAGC9mybrELKqTKG",
  "key4": "C6fMxdNDNBYtmgJDdtqtTD2Xv4HsKB6NHKWgsziS8482Sn98SPdnncwn6Wvc9E3v8th7kXQPEHH9eBognccnj8F",
  "key5": "37Q8iuA3YmXRYkZaMT7D8J1kYFxF54TFVwCMmk1LAR2xfg37gCyBJXpB1wk9WgaS6WaxZsz3ZY4t9SqAdTWTdMmT",
  "key6": "2MjECD8ysWDy3myQeVzqNrXjHwEYN8xaMiABVr6hE8HZKeeL6TmbZpwMj3tThvJarnutg9rr7ybLWsCowtyzbJdj",
  "key7": "2FRkcVpJsBch5QeXAxu3X4vcfQeqCS3BGf6Dt491R7SVULzbNrYLk3JquzFHGz8TvHyWrvXxNxwr4xWii7pyWuFL",
  "key8": "3PEv7xhBrhhpZ1XBXs6cskKjnNrmEzop471NKbGnkeCToK49idJxmKbeQKaAxgzgrxAeUWetFtePY5iabnbwKNo5",
  "key9": "4EwF2X9yy7FxddBvbsd39WBF2erMGJaL7gTabFuQNjPzAorFmxsTxDJTLtWXjFDWyPqXTWJip1pGyCQcGwhhQBor",
  "key10": "5CVmePePDoHS37Vp32sQYnVBCZm1LeaEULcekp6oq2uvC7PvNrHmG3haaJ1hzyEJZ344BeCxQb9Qi841S2yy1Hbt",
  "key11": "2wCPXUZhDGg6efK3TPmX2eBkvQzTm7DgKB5ojM9CTNm5uKmruKx28SW5GfJChFjG7819DzZoGtsqPxEJdFWVuW9V",
  "key12": "2ris9mDTBh4scs69xoZ8kidLFasjHHGEgNXS27TRGzuJDysddeMw5Lcwr3j2RighqmB8PqeVyWkgV2tx754yWC7h",
  "key13": "4AvUus11QnHmohwUFS8uU8tJ5VDFprUBeunWoThtruFzQzkFAs25ijhK2HpxV7z1pawZUJouU8g4ty2JAiiM1PtG",
  "key14": "MFYvai4rXdh9uijaAc5MzXwfXMVoBjUV7x3Ub7sdPBEDZ5NaFgfVRirA8YCxKJD6Mbew1H91DiM8Sc7GdqCQ8uS",
  "key15": "5vp7p7Bt5qv9a9C58yz3TZkWqzwaYX6sdtwUu2YoUP7nJaooGaW7uYwtCYYLUPWQN3K3o5x82hbL3TNmk2ezz2qE",
  "key16": "2P3F8huME378EgvF1RaGKvUtqiwunmFgfWoSdXPFYqDzu7TWLHgL7ra3Xa5w356qnZmhuGzuhSDuaaNTR54Hcg4n",
  "key17": "3vZvUxanD3Pv2twn4etcqQHbUJ8LPjmxUNirQXYr7kGGFwuGPVzGdKYRGRNXZNczHaad9LdCGBXaz1r4fGeP38BS",
  "key18": "kxAaWckXFexpGbZ7o33GQno1SkMDKz3xDgFBZ4DSB52cjH4TM4DDb7cr7kes4SwCCKoKt9EaX5NfWbRPhdrGK91",
  "key19": "37QBEmDWQTAikHXwnT6o6XgW4WMKDHTLguD2RBT38dAWMX98SMyw5kbVjpDK2QjqJu5GhP8nZsp1CpTPyA8voE78",
  "key20": "3yRLUAuuzHAj22wmcSY8sGMAMg1tw3yaXDLUJoKtftGDNbYYkPr2tkaAzFgHwa5id7dggwi4V4ZiHbqdoxQL9djo",
  "key21": "2RNApbkTgjizFGeQSMSUYxgihin1DCNeGirEcYWm8QCdTLazZ9EWmXd3Em5LziG2wWAwpfMGD2WfzswSjepWvFSD",
  "key22": "5kF4MJpsKcqPuan6qTpzPTYENbXNZVV5aM5pgVtjzm1SksKuunZrx8QeqRMQfC36f96xhoSUeVH84qWM7VCW9hR2",
  "key23": "632oXQQjEfdjeegSR9WvxyM9SzEbGBeWYMmRXocMgQT29ZNJdmKFNXvAh9tRw85VFyENHHUUWWhyGb9WyFJKYTDv",
  "key24": "2haPm3nJ3uYrNjzrzVekGaLbjnWoYieaXNa3UUgRfzkcWwTrvmzggjqnHY3BZA1ezeFWHveTGixu46wieXW3rxRQ",
  "key25": "JtA3oTQiRzVyZsr5YzPpPA9RLW2PHmxuFsqPiZibsqKHFgd3seCH5Vc3ncAu7N8LibLEWJNgxwrWxe1sP2x6nuY",
  "key26": "3peJAkuDLgQhgRJZmxYrzYN4Pzq1JVCDMdjsSmBrKsTxQKjgWboCT4v4ecRLVQFbnsTj4NvD1GpzhCp3TYA9Y1eg",
  "key27": "4H1sM7w49J7XH2ZHFYZ5gJHLXVcbU2beyxr4Azhn47ppbZnyRMPEZXDm36kLMCFpgMu5yzV9ixo13pSf3AZqWipn",
  "key28": "1PQsNWqkxdyFHeFZ5aUq883FuXWA4cXkRAzbaRcMAT8whA3Nsxr9fdD8WnW2Eso6SUeQnYagCmaNc5AHL82yw6A",
  "key29": "4XLQqBpRa7uZbuXBTQPXSu8WBXH162AjpNqSU2p55hAsTEVc5bZprLLSDKo3veNKq65u7cBd9NndgAJaCn2TTgGz",
  "key30": "21xH2kmaJgZKcevBxwoAMqrxByNGrse3ZH2CEBWbiuUdwBvyecREiF6f2YKqMNrs5DpiTBoSzw79ynXV3Dtg6KfQ",
  "key31": "5XMudamc5LDv2gEjgKRuTwksZ7eZCiT1452cbzgj321d18ccU4GHk6K7jHiD9dFFSJ8q9VGhJr15PB4UMucU6qWb",
  "key32": "vqzNttF2ggZza7XGjuhEqmBVmVsosA1v1Ad6RsTu4QASwSSgmo4XKXn1GLAdY9i1sZr6YErYAdAohvb3S2JDaea",
  "key33": "pjaPmLoxStFonneHjprZp9mGh1ZAv7DxDkbUjk5PEi2oto4VxnLCpTU1kSrHCxkpctfr14gHrDpCQS16ZM5agEg",
  "key34": "5hFnwgfWdZuBQGeW9j8zhJzREBKf8w11WC3BfVN16KGePj3hzFvVphs7sirdexjifSQxCT3AggrGLaHYNmQUYhLR",
  "key35": "5QEkALksALvhUrN82kDJZyKXqEsjfkuvupdm4Z4V2HaTbVaABM85bZUDxRfjpueS9imiEDtx2Uz5UxNJaX6qPSKW",
  "key36": "iztseQNVQjA9CK4beSBPGGMNoR2Veu9AAPv2epQYcb4n1xqU6fTbdSAHEMK1oVQPRP19pvs9YAGKTJWtHbqAnsH",
  "key37": "Xqo85VJNizxhK61s1EKrioyWshM3Hn68A8qV4LYyPLwLDkuPUPw4LcgCBqYr7pSxLvF7PYbMRku72mKhj7TzaBE",
  "key38": "63n9T6UbsyuAMQQdaa8iw5RiL1rjJvKUqURvTJ9V1WQgUBeP4yWQVvKBJDQXWjrCvZPaNJKmPcc8RmWNbHjW3v7Z",
  "key39": "3NpwxTQ3ZGobKLkFS5MupM6r7ThZKZcaemtXKFLa3tQ8TNrTSUpPekRsHeCQaE42wYV164qj2bh4yxhipC7vr9sb",
  "key40": "2RXTFBpeGpaZdh64GvVvRXWmYkHBEJFRPFHeZFPWL6hDsWWZ1UKZY4ZqzgxM7Gq7sMydaRPA61AJCfC3HmjPP1pD",
  "key41": "2e74Jz7cgESkenGJdHd8Y4GByoF7wkNLuekoRUXz67VHST6aqG5sMzFdeVMuViaA2rhNJ2Y9ysPqzd4dJWFdBVm",
  "key42": "297GCiF5mn88WWn2jKHt4UBqPxBYSQ4zY1rkQdQGskJ2uC9nahtkgcRoWpyqY9XvXa7X7iDJdGCvj7JjCDGixRLj"
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
