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
    "3a7u1UQrWKJPQW27usMu5cuhwbQH1xpkiD72viorTbAa13MsQL1g7BiLx9S8hVDfSsw5YZhmPHRB4NuSjFHv6mj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bU7qhdqhbw7p8K1LKzSpx1yT6Cujatd5UvaFpHyPNMKScfAHCQhFGmB1hPvnd4t69fk55Gk24AqK1s2G7Jb5PT8",
  "key1": "35y1tpSrmfSMGnA7PdeEqsWNNnFJrJXqMjME1zWAAvtG5whC7sc8CnVMMaGaVGx4Be2C3mbaQK19dexaxQKLdPqc",
  "key2": "bWkTYCBpJ5yhVb7BpmUgwiCK7RpoYx4SN1eQcFTYKJWqnWvBHtKosaScSrs98yNx9CeLdgEwyUjEMvm7Etq3b9g",
  "key3": "3VZuxFGNakdgEV7r1Q6mhSXSd4bbbQMv8iMJ2jn9yTXkY7hpWzyeYWNHVbYqCGJHxdrRU7njPZrEqacrisWGMsQs",
  "key4": "5BZjHfk1rAmFt8GysEasw3x8KKQdHNW9w1rXpcVK1nb76Ke7bKpzFBowCnfxT2dYZcwmoS8XVkUFbsxfevU3FXFU",
  "key5": "4mBkwCLVHyLojm6jR2PwKCSvcA7teF68QvpjJTZ9WCGCskTC3zq1UYFbguDUbALHMK7nn9DMqf6WpM6qHm4sG5Dp",
  "key6": "43pHNuWijVHXZTH1iHdYxf93ySdep3shW3mypGZH1sWUPafStKZRtH3apikn6EtX7zbhUEVCWw1SjJ9fJtusdnFA",
  "key7": "65G9L9Mp95ohb7Sth8CNN9uxrUQsuZRrsNBJbsHspj6uyqbfq68uiLYMqfa2unWZ8Vbi5WpAuEcmL3fVPvTvbBYN",
  "key8": "62wJ42BGyghNxqbTveQhFays518BaExa8nsj485fpsEGhsotA5FsdgfGi8sZMpxdvkhCPVgohmaumkfUf7hBATLg",
  "key9": "61Abfi1BHRgv9dGrYT95eW3mWQhuikZVuRiRTAXMcggBn82RuLiURYPQsrfbghYB3ipgZFSGZn76Yyqp9ygo3GCH",
  "key10": "4t64PmLAX7vsyvJqWAeroGe5jDjb7VXBQnJVuYEWKVYTXfvDzXDF9YvEvBg4AJLxekcs8rKiAK5AovmnA4AnznHU",
  "key11": "3XmFczPZmyQ8nbsoFffW7TXnZW3PkmFrZsaGmTcTsGh4TueBgfQoGdh1No6pTGNX6zJ8C4Mb9bPLXajDZPSeTukz",
  "key12": "2E1NmThPsuR992sqPuEgzoinLQoo9hA393zzsGe5xwxvyFYgFsk8MbcX8ZnqTn6evsoh8NaFi71FPy1ZQaxGaMSd",
  "key13": "TySppdgQFDt2Khn2jHkSfKjrroKSfek33AURv4kVzkX1MpAmQ9dFfZ67KA9NaS1BPzFUTkJDzLZgEcRLPPEdS4h",
  "key14": "dxPPXM2PU2ipUQcfikt6BWjYGdqvQpT4ZK9rHcAazADXQLquUWXj7cLDhFXJd8cAGHDmq7EZHheqj12XrBgR7ZZ",
  "key15": "2wWhGQuAnNDKoV3bYrrM86fpQcKEvt1E8rKrhgjbnEWtXBGcKYqHQUdxu4fThLXhdr9h2jWnrmy5ggvBCLw9jz5B",
  "key16": "LFXMqxCsNM2rFWLaCxsTMvoUzgcZyrUFYQ4kyNS3My9Rb4wzQrkeNJkacq8HCWnSMDhEnSupDjPHwrP5kZ3vJRj",
  "key17": "3AXDRe7t8EtY9uJLuqDibPXDDTxXXcbmNJEa1k8DWbiCgMndtaWPXfJVSkut5y26vzQQtuxQwmBFqLPZ3qdgpHM",
  "key18": "4SbKEfEgHqfR21gELsHn3cSjtq7ZKNGT1638g2tMRuXsAxRVSGbj1UFKMVZJr1J4pKXVFmrLvZYj1Fdw3p2y3HsB",
  "key19": "5qwws9GYEj6UPTmH4imzjse1NZvWHMPCeFcCQQxuTzs8wSxsDC72QtfcE5TWaqiFVo7s2y8MrA1iq3tnNqzQsmhC",
  "key20": "4sHZnuLpzLarCspjBhmyg8RsRfAohD3LRhDfWSXwsZMk7jsRbDJQuwEUp7dZkUC3bHNoP3rJFz7wQN7w7wBp9324",
  "key21": "um6ms4ALXjNgUqmkL73ysXTMWoZscqnLjVM8waL7eTJrL4hyCfUBqhDJVhaxDk9NKetwJ9MnKuD1RbJuArZDjA7",
  "key22": "5cV7YoJXNUGUdz9fMwPx7YUA1qV9GWBzusVao5eR2vPvFPYxeAvxS5m8D6xmpyMFM4CnAtTHwZunJBS4fEgtzSVv",
  "key23": "3P7FwVceJtvAyq4LQf5YtSj5jy7wp3uzdGW9kWD7cXafpqaBsttHZDorDYv7ybwb3nSzWgQVckD1nduudpBPY2ji",
  "key24": "3ZniY6DWstaG1qno2kWCTWTBpkMaitmE4EKMZMsZtrJtT7DJHD9JBS7PxreQMjcLD9hVMicA6EMWHzrw7iWymcyM",
  "key25": "4sxLHtpqP4FiWwCaU1FMgEoHrSLxmXv18fFaBudyFqgMT5A272ax6jAVuCn5nUu4YZjQaukjT7ecdtox1nbB36eh",
  "key26": "2kVK4HZUupcNMezsABiW7pQxvtUPQyFhpx5JL6JqYAmLEsRAkc4FTUbkaHytMKQanQVW9eFrvQzuoYbCU5bdvsVH",
  "key27": "2KsbtEizB34DLTTMFmdHiK86YDuZxFfjcNPa5qaY7C58MabAvqqandGoyvahWWXSvetHMxBztiQ2sr3yUUQ9Dq8t",
  "key28": "4VhLNUSQe6HytH53vCftLGwW4eQPSsr9gXjtGXiBMYpHTnQKHsCM1NW2LqEtX1scKAsGaz9E8p6yqMwieoKMFiqe",
  "key29": "61wjsWWtvPwk5F3ExFCg1PbWD9mmt9C2LjKQMcyFcDFKCCZ9guh32xSnLkCdMtww5cnLapkoNYxfnswFNrTEjxD2",
  "key30": "5cFJQudXPRd1kA1m2ATJaVPbRjxs1xSW5AfbiFdtajLXrokhDUo8q8jSrjXdxae9JUFsLo8rLi6Dpitb3aaA2Mk2",
  "key31": "4eZdpk9BRkimPz762AzEiC1t9UJTCQCUW8jJ6SBEwEeZj7mY9BRsLrQzFP3QuZFv6hQP9Nd5qD1awb39Ps5YXvBh",
  "key32": "unqb7ysYAByDSxiu5pwPR9mf4d8w7cZggXp1QBVgA2NSWhnsgqgr4cYrPZb6HA75GBn7r8dkUusB81m9DD7SuiJ",
  "key33": "5xnVRhp4UsjqS7grPJRSVJthbpZighTzwi3z8jkYqn34bPmn8EoYTMinpaXgi7ftwxVVMXLeFG1VQenBhKi1ccT2",
  "key34": "39iUM7pJCdL4vKURSHGTsSzG6hBkat5mAKvN4X1Yd4u1tiuKqwUp6iW93cBgr48vXepcqGzAoLyEyKGFDHVXb2e6",
  "key35": "4pi6sfWH8bPxrWJ3sjtWzpawRmmXezd5RfTasByt7H64YqUcEwhPAnKmjAwocmDLue5jtsnZ1d4ePYwCUPgHYxfG",
  "key36": "3VpQyQekfqRaAjTn9wAUywuEvQgc9P7LV6a2gAkVSUkUAFxrjahrKvQNq7kSsxL4mbD2SqdwRWg7htVJaxJzPRYE",
  "key37": "3MEbK6Cvco6LMeNcgHAKBDg7H5fKMLWjoHcSd2YpzNN2AYM4oxrpp2nNhxpeGcRLs2rpDKDJ63ZrzwHLQLHUQr3c",
  "key38": "KbMzS9Cmp86hJUWiN4Sz3LdNpNPPNpHbadE5U36jKpN8ryeHc7FGytAUfxti9U4GGfhFPwsi3AoRbbtcrq8MN1N"
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
