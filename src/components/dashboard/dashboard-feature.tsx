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
    "4qRr9r99e5MRv29QcevuCwQXNTRpwGPnMJj7LgeJb4UKgxVFLPsPuj6pLhQka13dWkpzzSM5S432ipLSoXf1dGsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g24pnb9wAVprQ2Gk8B3z6hNJynXtPbdvbivnUChs1ERrEUJHuZGdr2e2oHGBsAtgXUZ829sT5eAMrD15QRwW6RY",
  "key1": "2A6jBSPADv1jwoL5MpbNmTjTqfVHJAsAypuCiRNoiweSMipBzjs1wbjrjgxmyuFNGHx6nj52Xsjmp7ae6s86gJ5d",
  "key2": "2H6A1t14zQnmbytsd3MKvzXGqHErFdz3aCASYMEW2UupArP3EHayKWosYysaXKRUDES9GCKVYT85mthxBd9CXbjP",
  "key3": "5jR21q9L3CwB64YTcWoDkNF5KvEhrh58AsDwVRx3YGw2xPwTqWiR6XeL5DZyZPWD9VJ6tATwmcdCyiLdJxHFZGTh",
  "key4": "61rai4xWdehhdNsJSbEu5s28e8CrNYtSBBcqWS7NC1XniotKd8HfMHzVmC1Daio3W8HqXj9osiJLV1UqVPJdMzd",
  "key5": "62vxTrRK64QiDeEu9Gy723f8uouLVU2iWRnWuS9RtK4rxAJtFPCqh9LiD1xtdpRQBiPvyFNgYuc4W3s7AnYbf3Xp",
  "key6": "5qWHBeF1MWbpWjrNCEMGCBchiQgHu3HfU235tHcrGBAQ3sipZ3rRqdRJ5eQ4L6cW9V5pDEu3Kiaga8UqDLQzaGz5",
  "key7": "3h8meUqZHFXkQrcQJMFZPdwYJvASxyeJFFdnmFGeWH3jw2iAvnRsrRu5E5nbe1wtPxDmXvdRJDgkbShihRqgpt6S",
  "key8": "jhsT3uJvAqePkdFmzomVjDp5uichjwgDYWwHWZyqX1Ccijq5yG6YLX5E53urjQvpZJ4MawfeZtSmPiwHgsxD99u",
  "key9": "4NTtcBwL7Aouq5ZdagbXYhY9EP7dutvUkGDsPmKWaW3QNyrRNPLynu1SmJEBfHYpCSjxahi5yVdcigrSNhxT28wp",
  "key10": "4DKfP2Huev7xpmjrUpUYdLKS7PNWoQ3D8NQaenLhfwqTzg63cQbhULHAszBFXYxjTZA9GszXSTJj4LZrL8P4ks4K",
  "key11": "56oX3uqu8Hts3LnvZbmmzgvvCefoxLA6new912RSa8ka6LMasBaAX5KHqmbg1sLY8c94Mx9MHHgd2hjZ8QLdzr2u",
  "key12": "5c5N53VHhkgJSa8V8mhZuJwYxAFJ3u5cNw8fSv1zHgHYBP2fZusJYiR8KXXMUQDq5CoUy2h9yTYKmcbnaDdhdvg9",
  "key13": "2aovNPEzd1cvCfj7iY9o9dFXAU6mVj8esiUimqsjafa96y4fbvqwX9rcSPYwFW6UEecdVU2CPRhv6x5FWWSNYKKT",
  "key14": "5XKzDFq5pbp2Y5J1x2MxVXiDNri2NspUK7CjsFcmd93bjXwt8aG3wWaMHQTj7n2e6iBcY8D5joCUtC7Er67HA9wS",
  "key15": "5EVFkQ4qEMiGNFBaRtNKG4yYM3cPATShyb5ojb8qpkVRzLuXXxHrtAqLBcnrFK9CoLRwCEbMzfxqJ1f4VvKCPouT",
  "key16": "31hxtYnwZxBx255o2UCBqcjR4FjJ6fYvmBZWypEWvSqsKF1n8qGmp3eaXNwMNnkyrqbVom5FkfA4Svv4ZfbJs1zS",
  "key17": "pT8wAykKoFF8mVg7rEzfvjQEok6dHCVTg541iUBuAg8zD7TuJnUZ4P9tCsAjrDYtwiTnBM3xrbVMWFL34nJTqbn",
  "key18": "48RyQfR48He5BNXF49cWgcq6z9hkht33gS2qrjL4jXvdjujSi5dQVBFHR5XuA1VJAtgRDhrFqK8kt9ZmuQ3MfiTZ",
  "key19": "4fnqPncbuZb1g8zswY9L9iYvKRYonmzrycsT3MEyv1r2vD6sU7ZoCqVesYbt3cyQLBPH569QSU955v2HHYJBe32z",
  "key20": "3bgqW9qvRxLF33UZKLuGuqMiLQuFn78dwk4944H9X3poH3qUKjy54VsFQCocAi98Ci7jAybXMk1Qf66Dm2yBR1A",
  "key21": "3bHje4Sk9vegH3T11NRrUGwQfKLpxonw6EvvSVc18mrw7X4jePPCFfK2eeA4AUkB2NyT5vvqPbdGrq8vTVoUxSRp",
  "key22": "4MYaE2H7UHNfU479BGroZYo7VjfZ9DPgri8GnvWsnQvtunBHN6zX6MZ2a8DPYSvXgybJYY9CczEBxWTPT2Rkbodt",
  "key23": "3GU71W1a9aVWHnUcFj9cur1wx5i2r898Kg1o9VnH7ZWkdf9uccojJ7tR8ZPMUx5QW3EzBiHiWGo7qgryBrJmofP4",
  "key24": "5oVaWqbiTumNB4yhWMHjACzjXwj5uveJvGUy5mQVcWQyPBHfX5MpXeGd4mLW2H4phvJtDuzpZUCK27fCmgZFxadE",
  "key25": "Ropi6RBqXj3ATAFLFBEgFWvRPvqh6LcV8DYQCHDCVjgHjYSaqXH3jGffr5pdN6keJmmoMbprane966mwNq8Vbjp",
  "key26": "hAthhqLHH5yJg5nqon28QE83MR98doCW3HWfXMuWCMVDSMBVC6xTKNTQV6jJdPrGjA6PYvB3BV4skkMpwbSFn93",
  "key27": "4KCeLx4edchXgnSFPEhnnSMmoZXy11x1q1pvvYrh9pqpytRZtzbHY6jSXGFykD8L7MUG6gFCXz9K9ALZMebnRX3N",
  "key28": "2HfsXpWr5EoHZtNAnFYwxb39X8pghmQKKq97FPesPeU4wXvvcUFV4sCTvSsrzH6j8fJzS3N2Lvink3kQTWBmxdJ6",
  "key29": "4qwqV2rbg6yJjD3JErJGbfP4mLUWafW6FQptms6E3hPe31XTspk1hm4G5Ro5XJyRwQqZUCanxQQdSQNudShcUatd",
  "key30": "2jQui313vnJSTSNycRBBFZnHMdCFukitktMFnffUhKnVmaWDX6zMLf12krHw5g7Qomhbz1JFdqZsP5trraoia8vE",
  "key31": "8yjhoq72Wrck2jXa3BVeRyha7tejd5cdxakW6MZRy4HRex3Z8ugajhqjRNCnEiLWeQqgMiYbwxk5WVMLJP9GjHx",
  "key32": "5uA7mh1TXTFQ8RmkkJe2usJ3e3TyMTNawBUGbY4884zf9zgDaHLPB1z3dJgWu6YvbJ8uy9DCtc3qQWQ9LGtVQKUq",
  "key33": "5RxNGLxXCDT5LvN6hNzziKzgj5DUaTgxvimT8NkMXaxJZUkq5b21bhJTcD77Etrnh2skDKRH5D44JfGF76WxGQBZ",
  "key34": "3crMne4BrmoQEQm5tu2ixrwRaW2jjkQzpze9j3JG89Su4XSi1Fe7p9CyoymN6B9DntGStuNxVydNy8VPuArATqjY",
  "key35": "5MesDjtL68JtYpwcRGnnUkkRYcz5ZCH3RZzK6DA8dTvAdEZ3ukDWncADXerTCrxmgdwqfQEStfL7NSm8NJL9h59a",
  "key36": "v5Cia6PJ9i2R8zJ1RcD7emxGTk68zeZarbUN2FBcnSSUoRQj1EjmnbMV82UntYFHjX35VvqY74KxBHJ8oXi5kLg",
  "key37": "49jWd7S4pmrh77f27f5xWrzWugqKaY3Qx8Aosg1WanHrzAisdE5UESqxnoBQDrhLmQBYEmK6Dju54tDa7oeBbyUu",
  "key38": "3uxPHaKC5ZdaDmSWvKTSnU6RCkGhoXTenGDLzegiyC9B9VjMXSD7K6dneYWZREPXbWv5M61Lyvd1Xs3VE95s4w5w",
  "key39": "4jYsR9GE56UdpdTGrRCWANaiXe53LyviGZGr4jC8ftN9tuoDePKMx8pmksL83HexQjaNfQQf96iMZiG2KAoCV2eD"
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
