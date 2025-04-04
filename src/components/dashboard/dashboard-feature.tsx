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
    "3sBiTZaYJCXHFQfDm7LBurvgrj2taU17ZpyMhqCnfzdUHk52ki8UBbKLWWu29Rtt8YSA24hUJ7GtxnVS4C2m3QAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fb7ffG3p9LwC6e4M6iiGBKfSSYLPdWj31njWahHATg9iRFdYv91WXkK4GuvsNKGTVBmdKVtACumgwxLWJht51Y",
  "key1": "3CibeDCw8MvTosryvFCVssErGAezXBo4HtBeHJUHC6pvBzTexAJqrsJWih6JFbNd9BV6kNAKo6pVihQRRhkMCtMw",
  "key2": "4ZRXNP4LQGszpGmuNJ6uHMLDa7UNsTCcjMa1d5zRSicUie1Yzg5gLexvUFs3hsCrqyG7CXQ5gHUHxv7tWYJ2qa1v",
  "key3": "aoJhXALnVE4Lvt63HMKfRE3LWpKnBy74J2pjMMfWNnvxYJcX8nrQSj45Bg6gjpikuqGdsV6ryHF2dRTzjA6fUvu",
  "key4": "5KzUzX8w8aDdag8o6LKqnvZe2emfJzHeRd3jQANbumttss2sMGaUVrLDLSXMJXUo99VdpmmuYeBkwfZxJds12j7B",
  "key5": "4cPNWrV7HMcwH1jnJGzht2kKx6mVyTfCaATZFFDtFuihqDZJpuez5RKyzMV6XdvjCJd8TSFs2qcKmGd6xWNuMYNP",
  "key6": "2HVDzpbbD8iUEpz8E1pFhALfP5X7FoYvZFyuDngRiSj5ZyGdUEirv5i3JUZqury2b3pYpv9o7Nk3tyAguFdSDoqo",
  "key7": "26o6EDe4tAHXABWEt4RJnZxHzKFkgtVd7W9KTik4AL8sTvQdf3GSEden6b8YH5gV9A23do8ZcJxiBXqttUHZoFaR",
  "key8": "3XeQnLnREeHtqdKTVHXJmkVifC7uGEw83DHQQ8RsE1NaZs9or1mU5KP3UBLCDTPbvTEBCk6YTGtitqjXaAYfa2Gf",
  "key9": "ifcW5BNHic6K38ZcCppJPcN2ePHMHTQSJSSRbxMEr9ABNXZxLESX5KhT1Mr7kAadHQQyWXNLkw5D8VGTK5V4tSS",
  "key10": "9sCGGHvGyt7rm7J4J4kY5AcgAz4FbEmxMhJQqGMSX1qkAE8gqMyeKxQdS5Yjz8dxQKuptbTffgsGnoKHrpuYBwn",
  "key11": "5fFENtSJaHx38cRpCcQkYgY4bM43EJvToyrNH9dfte1uUmNHLZgLW9eNFU55dVsL1rP27WGjBK2pQYqrcAmPfQy8",
  "key12": "2PJyv5WyTzNFgvZDJ5apijR8jGHTo1jbM2wC9q59sztXenme6LtrhNRfUqJzjMExPgZMooDBtjYeGyeYKN9sWCBm",
  "key13": "3NgsJprH6HiEVPhBY2D39uKHCL77jM8CSKVo8YfYJhBEEAy5S7uSPBxTkH4fzDa1z2YzWgj5uQfjuAfkbHB2C8qE",
  "key14": "5LgDhzAhhwzTnnKNZNM1WoeWhsS3ooVS2cVp7aDG5bSG2vSURqov2FDwsmdk7KpT1AXApKW9mwNSEb5o5947bD7D",
  "key15": "2CtEQpgnEt6Prq8qSXDwkZyHzvfT43WJZcugpAsJHQjtk2LTCHuNnbtfPRtVKY9bkQusbfrZgVmWRv57M4mko2j3",
  "key16": "31zwKUvVUjVU8yYKP3uoJ4uWjhVJCZeNtown3acZuya1pWVVEKke4UtDw6yNSAkQCmHRExAaXqkoKjSznGmts3AS",
  "key17": "2L3QxMUwWfJeQXehPWywfcyymKECVvEN8jbik2vhGH2aYbQcZWxAbwTrMNjafrRfdQj5sbNQ9i7BZt8dD4z7XUSC",
  "key18": "678cGLCXm67mF1tWePii4XMiiQbdG4G8nxrufYZc8PQqyv5qTrnPrEHBduyK7jRfkyFuXBM6uMLggz9WTY39TctS",
  "key19": "5HFoJDpy91FpxGZFJNaFngHUHxfNUxAQFLmpNQEHRvDizRbEUiACjVaETczqJh4EHnSs5nVmNfqp4dSXyJYD7Pv6",
  "key20": "4JSQpqZPorokULJFCwycwDLJgQBaa7oFZ7ZM13sT8ww8UJiT7zWxrUM7cpXxGt2zviW9urCrXWCDCy4WMWm9WRGd",
  "key21": "2DHScbXFZqmc8Qsh3Wuji6cnedEQvNKovaCU8bGh9p4eAwUCWV4K1FQgZLPeEPcL9JVjBzgtj4bE6v8whFsiM33J",
  "key22": "64io7XrT3AfVKbYKF6KC5MiEkXS1se4MD9umDzL4uLrxEDuui5GWdBp5cmC1UJJuXEn1vmMxadGaXTwUBCB8MPyr",
  "key23": "WNHivnuHqftXG8BjfMwdUKu84c2cv2JdWmPR5AWeJ3qBj7z8R7o73avTgzYXyLJpGWPtyoh3mZyzebGBQGKVzf2",
  "key24": "4Fy297yS2E6rX3QFtqGpAcj2aMTmYeRe5mUZCpZH5mfDZ9puAPerM3aRrCVRVu2SQf5wmLgDXsb79Dn5fTh38wVw",
  "key25": "66NnPMhuNYJZ5tXymdaqewp2NK5NDsoSEF1vQTFD8ME9YzXqfrMAsAu92MRsmTc3RTBPa7v4Gt531Xp6yPMZZqWk",
  "key26": "drKa89NS7NarWqgmVe6mmvF1DN1A7F7w2gU3NxzZoJMUGxMygueKvL8L89ccHb3v368N5PudxX8JtyjRYSEbXCD",
  "key27": "5wagpMSkbuNjDmmJHtfPANqtevKyqo6fhxj1kpZ2FvjN5J6iBEY6L4HXy658zn5jMbkPpYNq2X9QZcaNYA2AMbDa",
  "key28": "2PGQQ2K48bxvDmUvyVD2ebDPXKE7Ar8QgC85bjQ9ozS9yC3Jt8Pp5F613Bkzv2ghpDk7vVDw4N3wSguwHzY5uhmf",
  "key29": "m4ehyZiXMgx6gt7YXcE58NB9euiPYhw4PaTZJctRtehzhDWRGw46zjQ9r81DnkYYSuKZcHi1PYo9bsYhCC1gDn5",
  "key30": "2YKTZFoc9dqF8zNJ4Hg5jZavAXyEp9VNCqDfyo6Xun7o7YmvanSFtHgkby5BiCk5wBVpoGjVqBU9pngCCxYa5ifa",
  "key31": "5mUzqHeLWr7YTQzthxkczhsJ8hDazWTZHsRwhtgpGnx239PYco6Ctq1rQBS1nvEcxNSB91vq6AP2Z15ntxVz84wW",
  "key32": "4y9iLMRvzwM5HfSC9qYANmznBS3JaLrbZbn38Q9ZMY9yMqG2mVfhkWazCo5NfcFao4FSUgXhQuf8vv556cBm8P3X",
  "key33": "DJ9ZPFCcrz5KTiNRrE8BinLkTiug1d3rF36fxDfby8rrpQuZWV8z8b2pAXDLSo2vBVtYAyE86M97hD2tB6XWeLX",
  "key34": "2ZXAKL2wRsAaqVE1AyHbCfrctWYGGUFLHqEsSMKpxqgjUiraVY7hUbD3kJGgdPwdR3EvU2qVFGqfUuGckvpqbNmY",
  "key35": "3E3Z4XmsStjCzxPmQN5DDd89tnrkonNxDDoYibG5qgrZwqYdudekXRMgoyBTKq3TNxhvMcBDqypBU5NYpUPyuDqb",
  "key36": "wWs3EdwvBFrU48A3UtKBwMoK6s8btAn9f7T71TYr3CGwxfVG6qjVDXay3nccT5ECqvbomcwyMSB4CCByoMf5yhc",
  "key37": "5zMJ9W4eMYK4btPHaP8zWaAiPFEnBVYnSgrEszj5GN8j1tV1MzY15oRMb2J5TyokkNJQ9GtNybaVnMEKAph2xgGa",
  "key38": "gc3DQZ38RAc8HCPJZcTYgFCmAg2e4FSKLpY8fVrrnek7RVwEkK7o2MG1K7UBoGdFG4E3V3Po98anFhLH5sP6AC2",
  "key39": "A12iiWaEBdEtEaoPzqxEBEypZKx61yUkLZn34oUXptJNAK32bxACGPJrmRo6ZEAsgM9u2bevXuiCjiZTJFSz4dp"
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
