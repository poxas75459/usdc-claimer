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
    "3ojTrgr6tnHS8y9wL8BZdLHv839owqqNWWX4qgbNS7oqVqmUo2vhjytxRoA1nk78HRYRAZWWdYQ4hGbCmApX8ehn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ro8KVAVWmyjf3RsVMBHPP7VZLDYxJVSVZSjoiQTM35p7q5NgpcobakkEDxS6n36UVR6yw3sRpBcaC55S8Fh6z7T",
  "key1": "2QDoq1pPGkduKzfvGAdBrwZM1KiivhsJSXSAv9CAW7EBd51xptrvnpYYCZrWs3VcMWnNGsmVodxrZUZKZCZeBGqF",
  "key2": "35SuM3CqAJAzagKSjAaJSGDURydiws7DXTzQ9dwWvtyHZwmQPXyfDWNDymsB9XwNtH46LQjN1dFmMSCqd8tTxcw1",
  "key3": "2kS3TkENm7aKY6AJ81p4xswxFBcemRd1tpstz7MoHHUZexFZXNLBQ2YGjG1uG2XNBdTMXwu64ao4FnXHhPKfRcHK",
  "key4": "27Mu89U8cvm1KBM7HyqAE7FTsD9xsoCQYhRQP5qURq7TvNKLhnpDeY4Jt8gajKi2MC6RCCwky6tBoY2vq6ZgBDKT",
  "key5": "4E4QW4CwLguoZcodQfk1bzQDEqF2XvU3RB2xC2VrQRviqNaS8c3oDfyj5894GpFcGa4dCEn4SSrSQpzC6ZycoZeN",
  "key6": "5yBkk8CNN4xtsxbwDhdUUrRWs1okpH5XBbNr1YGENLnQFtZDv5SBJebF2KjGSdDMkJXPBjKk9x7RiJhAMNENLhGe",
  "key7": "2SSVnJtPKYBsjyH6VrRnfG6zgQqWRofAmDQZuo5UJT3hniBJn29uEFfvY2Wx2dBHVAUJkKMKR9sjrSDNk5W4UMfG",
  "key8": "kUMruAvparExxkN2TKYmSbpgSunZwfnJ2xE77Lot5AT6AsM8Shu2fMq7jaEVweo9bL6oQrTh9KM7AX4w7VxmUxG",
  "key9": "DmSuoF2aj58hfRp542rDxqZrkWqSSqWrN6eYBEe3ZqCjeFtHMJwkDinCBG2yBQjFyDrQypGCYPUX5BxqWhxAzxL",
  "key10": "2SCs18HftNJVCob1mMwsFJHzT5YQqxW7DgN7yHhfy4LKXWXt63yGdRFEDqaiwVmFypu5Z65P9Muzf9tgHdJxPnNF",
  "key11": "2ZYoDnXhdzjrFD9pdFMPoYRuGuna98DeN5ETYSedr7DdhEyXAUHd3onQHLdzuX6k71MLB1Ftqsib87upm5M4A66K",
  "key12": "2JuEpMaHTN4Drq3DQC55NpPjL1bBqdXRfGmXLV9SjNknxx82VPDyVcTGqq5fzrK6i2hZVCuStZFX6tVwsYqMX3cE",
  "key13": "26UFugxDco4QZGLwUn7XKnChhShfXG3YxrRaqskMMt3eDjeeS8A6xscRc7GThVd3SUVhNDMtBXQF5wVwFyGcjfzY",
  "key14": "4Zthv9Z8GiSM8AbW5hJXNDk2owj5HhTvDkseA5Hu1ThrhNHBGL1m81yKdjDRAUFwhzpGKwRm1TngKaZuGDBDpL8V",
  "key15": "4ES4xDo2LMvDvWnT8WFyRZSJWpmtXsLE46iR1p96f7tW5uUKPWPN2paZjFMehGWKif8oERvwzDqPUpWvAe2FsyN9",
  "key16": "ZveRFXxRiBDhYr9d6WG6xDEpSyXTMpgBQjvTNA1WVXhTPz6ycMLqJFUHTA4hJaKf34D4EQCgsxtCfWL9X3tbmsV",
  "key17": "4UhP1YSejjqTEyjjMmFsGxxA4xWuT61mBJcYppoQSnevrSLKLHmbrKWfpq4QXeuid9huwcZC6urcWhH1Knno19oi",
  "key18": "5DPWjpJ6ExjKHx42HEN5kuMn67Ym3V9djSGz6i9fAj5JhtKCS97FYLjL5E7HiMAvBjyo3pjCk2P6a2RQNr3qyYRn",
  "key19": "5jT4cwGZoFm7TovknvxbtBJtGEm4Q1fKBnspZFTyRyP97RjhqPo2CD8xaxnJnBpdu7Fn3BkLH5sdnz6QKCw8598Q",
  "key20": "2W22eXwy1GaAK3a6iiM6Gn5aCZACsoFt8iprmRBGuPMD2LxaNTKkB8JazrEJyF9w2pweo4xLogwvd7vCfG6R7V2S",
  "key21": "5gnYox7BcGtFMkZa46AL6JQUMuXVgcyuhAs37U64mfeNejwHahoG8ConWJRZJmoCh4cCyfDKVRauTGnhmspAPgZr",
  "key22": "sQR1isJSVosBWQ8xxZLESih6SX1CbDkfAykz9H8zJX8HCY3fvqBRFDA4q5VxUJxBHzxFzQMQ1z83Dg7z5Zon1Np",
  "key23": "3R5AqxouYYYyjycciUFby4wNjmcqjzfxuQReQC4gLjwctRkLnateTE7N7w1nrBjGRGVxb9FpB96nkVdUpmcE4d3i",
  "key24": "4ETFjZLLNa6XxB6GVXf45TvJLCYwinX5DcGhLM9RgRgW4SzR2GYQZNUz4jbwxWRpVgD5oXDperpPTzKXcC2KkMyf",
  "key25": "5qdb22UPp6ufR4dp2xeMnxb8A3sMXDCmwA6NpPqqsE8Q1pX3tBQKnVv6jh8D1n76vHU9xEc46R4kGmgM5eaASrYC",
  "key26": "65nau6KSiN822iafxxQtAyM6nP3fMiHhPmnRB5wrFU2ASopXFHDSaXdwjLBvAhXUEDYWJ7cWLmF7HBRRREdystPh",
  "key27": "5gExdmB3A94ZCWu9DYFaBZMtuFZbQ5YY8hEkssYfpLX1GUdUjYtsaoxAtHXCkNEbwXxtaF8UFiUkQJ4kDrWU5o9E",
  "key28": "4rak5x3JyyehSHTD2gYnvJT52mQcbSQVmKDK8HhjubBuLfkGmFdccRVQ9QrA3DEHZzDZPTEfQNX1Bch6YaLJEMVs",
  "key29": "4sVyooJoy2qLzJqvyJqfPC4tj8zSYm6h6gPpWuCeE8Jbov2n2wfi1dvq1zJ7n1pbTrRipfjhRHuwdiHTaQ6Pg6zY",
  "key30": "888Gmt66pJuCAHmCEQW5gMkJatugN6nmXMxDjW64u7npxtJHBHBTcFAtdJejYTAhCpKFMZ3oXRCX11CAkKTQfEV",
  "key31": "gMVUtYQdFtJFyg34LW5JhkVaGfdRVPRJvL9kQbYkweikJ97GDghybGEg7eMC4c5NsrqbRHyxT6anVw9hTZyhfAk"
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
