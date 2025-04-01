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
    "4KQpxHZaapP8vBo794xTD7oFoRMqYqo5s9n9pHVkxjoaTWcznhHTydcy4d6Guqoi1ZnizLg8QRpKWTYWjw8Eg2GT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55t2h7UriBancrKYJjnYwgfgq27RyKjvbGQ7PX9HsMGi3S71pXK8wGpQ8zELdeqPmGP2otsCjziNdXQAiTVcd72x",
  "key1": "4r8kDvE9YULvbEGZyzsfj3PWd5nP5hPfPbCTcqh7ufyeTajfkYTdXPW7PiZ1Er7FTkfrPG6PHuyXhDAvQ17MFtVw",
  "key2": "34EomVHex6vj4qbtwTWDA5jr29fsxWdrUgCmUqXEUg1TXixbVf4wkjmaJMBrNBorX2HxcvCa1s2njjTSGieo2z9h",
  "key3": "3c1miR5fjrq8t9GQC3rMnkpXTmsVSRqMDZGRkuQo7KKRrbbBAMXUsiuggE7AjfN5cqXMUCBc5bW9d5gCDtoJYjZQ",
  "key4": "2ie9K5tu8dXSCb7BWWRbWvsg4oQqLVfFk9WZfztaMKhrGDt8E7BWmgcwKKzoByxpwgSTTDygYHrVFzwncmDGVDeg",
  "key5": "2J1qTPXmpUGhoSb1hrCN8skp8ddFsAjF3SggmsFiJL7v3CQyn9wdPMXSDqN6RCVdvisa4EtfEQZdZCmvFMNsff64",
  "key6": "5h3hxKKZSJm1M8edNJWV23vuFhUPvuee5v9CVdtv5R8nGp1eN6h3XtRqWd3E7TDgL9APWCpe1uM3RGHftHqXs3N8",
  "key7": "2drLiyaFCV2ee4wJ3QCPwrbV6qFnCtbkUB9qyvURJPepHXixuDTbCs4Fc2h2WkKz7S9SqzL1SwqE9kDMTdW3ZqUe",
  "key8": "2EE2ikca55r9jvQ1uVu4kkcZr2KiGrc6XxndE1fyjQimp5r1nYNeAqgWVudLcBQYA73mVHQc3i6A9jUoaLmmQ5vg",
  "key9": "3tjhHyQZGWTHMHpgbENELr3xBm6ibKSnjQjeffwxcMxH47JVjj7reFcoWwMQ6heRL6iZz9waSMMSrV5ddGETZT5B",
  "key10": "2UhXn3ua97yeTaoi4PSZzgqd7DVZLfub9Jv7ChCwoko5HmGHt9ornDsB3owYN3T2WVM9EDuyG7x9C4Eo3m3GNKHu",
  "key11": "58iVJbGAxYSmk6rkTebL2y5aJLHhwQiqVZDrwgE37xUXN1qvosic2WU3SDiYiUwYp3XoVN77rj2CzB61EzFyebhE",
  "key12": "4NUhEt4YMSwTWRAdTyZ1N4JWhUW5RkoD7SFJ1QuwRD9myih1z9NdVrNfnp1dWj7nYWhSJDXnjdXC9cmQ8yW6Q4dV",
  "key13": "5gL9t3MbxUdAB2pi9VNTAsNqkY5e5SURwg4RXGVwpwj1GuechnKzq5FeTPkCp6PCZKo2zHCJ8e14i6yAA6Y1zNzD",
  "key14": "47N6YM1kofy4Nis9xCDdXt1jEarfV7GkFNJhPHPvwPy3hep3RXP9xUFYoTRib8i4QrbCzNkVaU9YjspwU9iRo8Yj",
  "key15": "PJkX4XYY3KWprzH3R9zmbhc3XXSKq9NcpQ9wYtrfRAgHDxWs7tVCEfVd6KMytcM5yt2GfLevMCqc4P6EQEDjq8T",
  "key16": "5nRv6DsNdhqoiDou3UyM12H6ugtq2w6x1QHY19VW1mddhYAZnLDyVmgzhyhSUFwougNfQtTYvBoaSKTLjTycBvi8",
  "key17": "5VuzFh6AvYcH1bUnGNEmbYLRnTWUo8gauo7LVQUqB8jwoJGLtKZf7dzVd1C9b5Q7aSqjNumJjiojoWtKZubAv5kg",
  "key18": "3MBFyAeJDaLhka7SRWvZWaX7yH5fPbMVsSoawmP4V6861VADpVR2cUbdzao7AVVE3QWRK3a2d88BMT7qyfRtJPw9",
  "key19": "2xRUFENV6CwGwesRFdVv234WpcuwLNwTPyWJYEwttqyCkpQRtsKFzFFWvwmbqgaxvvEMmYxut3xh1CPsrZqywijJ",
  "key20": "2kDqqVPxZah7ReK7YtkgGpAfqxsm1mJ8xAfyoer5JK5RVsbnngtZh9WQ5oFZBjjKjrKVGQz8VaZoMJn7Cv5EJKwr",
  "key21": "2aA6cU3v2WXsA2YEF7VrEyU7xXtXk4pYXnLYgppgyj1LGxHgbtPuYdP7oidDLZXVNsFgtCsk5hUyKfgLyKc4qVsd",
  "key22": "W1wtzehJAuFoSqVnGkcJNJHDpuKU1dX93RMjuxqFCWdsiNwDR2KUm4iM85KoifyDJQR9t3GsBRXm3VMiT2EUBMj",
  "key23": "36ELsHCM11QVdCnGCpQZrTwYJQXHK9G16coY2QsebenieELYD1GVbnnQ1yNcXFVz9k8ewFCHvitvdeYdz31jxs4s",
  "key24": "3DzeKd7KqV4gdxKsLL44JfTsnSaf7fpFg6JMMDA2BAvmJiUj9z9h75bJdSGSgpdmgvScc6ymLCSpgrLspZt8Mz7a",
  "key25": "2auMAemwPt3XabicENw5vDqBpSa6WHrcFxq8Q6JBTDFCpusxP1W9UjsANX1dn4dAcnXDf3iwqxyF1a6az1SFnRq3",
  "key26": "RS1vRZYF5CfwQ5Tg8aAhFsnpQMMW1QiGfCQ75z1gwKKk7CmPGJXyKZZaAytFS6X7VVspmxqPEeaB8DgzEq5iEBp",
  "key27": "2Y84frtvbooSxX8QeehujLCWy9PFT1Xb8zAhqr1aR49BqmowvFvMooAeAke18dgLQdZKGAwvw54ZPMpYCfHYXmvw",
  "key28": "4LxCUssL1fd8Z5hDKojyXZrDfBSW1WBvXrywsQkq6c4jZg3Jgh47YUjGm7SvCbJVVFcz46GQp7Hw2tyPajjpcPC6",
  "key29": "NotVCzVbuyejKYBVS1vPVk6EFjnQbrVUw4EQNDHxi1Jok9NrZHAP6sRfQpAx6Mfcg8RWKH1LdJZSxwr8JKApdbJ",
  "key30": "2V68F2RLWDj1VG5Bekp9GQnAQuotd8DuKTGvnqbzGgUibr445r23wBcmvf4xPNAv6rRYqFpHDCS4hujLNbjk8uk8",
  "key31": "5HrKSfqWL5QKJmZVBeAZ2W6ymhnGzwBEWNK4UbqVYCZ8rZaEsQWtdoJPbTtDWwMUP6sEvQVzDKin5N4cqP3rc9de",
  "key32": "zhgrJefrUhkUdDy5R4HA4t69xoG7wEBaLCvQdh3CCB6H39naqdYv6uuE8v2tvd6XcihnC7UMZQMugG4WRS7BVDr",
  "key33": "2g3JrxjY6oEDrJfByd5Lyawfd2UHEs3vhioTDsGtUSdbtenSkv9akStP6zixLj6ZiJLjhKPt95RTzGK2KzPmT84Z",
  "key34": "A2rjuVU2rT1NtJdy6nhV4JmMGtLMwzmkMqQtNM395uDSojSgeudivakwLyCopcAoS6rKXBgYrGhQKwoYQXriySv",
  "key35": "4jWEQcWNzAKnxCrKKBts9bTsZNKbkVwkkMDhC4pdmwSBX3LAXR3NqXbz79onVkNtQM8aFo2By3Y6WBNoNDYTra3J"
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
