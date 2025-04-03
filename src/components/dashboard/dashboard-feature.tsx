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
    "7xstQvCXHFwm6qAuXPJTbX8Je7LQMTg2Y8LVfLUBSFVv3RHVWRcyaHk7Xuhan8AsGW7yWRPDxtscHKShfdQMHio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cjp8vp6SpHKqpS9SJDEXmNhSzQCHzQEsFh5aVxLnWQDXzcn5qGoiVLxHTKhoP5dYKscFbenoDVukKfGCUrQRZxq",
  "key1": "3o4nB9tmfGPhgWbydjekcr3dcpYEPwtLnfbWvUyPHWUx2bXefoWrTuPLB5rp4ijVvS4MJfAjTgD4zAdnvymRieGt",
  "key2": "26fE4rzURe8LFPqP22rweJth5Q7TwdbQd71GJh1Hfpt5YVNoEBJQ9PTzGYi4UYGe5SiFKRCsynoZ7BYCNoTYk79e",
  "key3": "4wFFvfhLfr1KJTH4DQz4WWyFmEMS3aJ3fKxR2gfgg5mvaUApN8xHJrmu9M2Cmq9UT36x6oss2T5S19G6h1D6feCF",
  "key4": "i9S9h9U7UHUjmcQAcEPpXYrKVbmTRsdN9yaWq2TYcw7je7uCaQW9kbwEmXAetwRUhbg6v739aWh2zv1kHeogexU",
  "key5": "4TBD53xFKxGcTpJeKZxJJFeCnvvoz917ALD5pjBUjJFFLtHARehaUQPFiCgFXxRmkupfGaEKMNzn5QgRuj9Wcb66",
  "key6": "2JvEDfdzBJffSdjw72KVBLvkwdiJgnktst21dSLU1aUfEeBPFiTQVd1EK5YM6ZmDq6TAmZCKHu7wuGPonDmMMye5",
  "key7": "B8La4C22TMLtQFpzCx2JPQRNe624PLxnddbgUrnNpTgGWFpjQWyFQM8ne5xFYSi4nvBko83MCu6BCQLWM9mQvJA",
  "key8": "5m9dJx92qrftxLs5FGEQBa6nHCShRfK4Hkbrmryu8XfWJzRqgJhDHtbJJHEtVrR6BaUcUpfWCAhymQeSNk38zeny",
  "key9": "2Z8BkscYYCEuQfaF39j6pYGxmVLCxqojecPV1GbzFz6eSTUoHE7KaFP1zezRVGrEaWdfpABbYNC5CcjFTimHt6CF",
  "key10": "23eESZX9zBFPRmTC9SjR4TVdkHsdErVtrY7pLNqfhvy6x8JDUmVY6RhcM66LsDh6vCLdTvgTRyH3W3C6YfiptvJp",
  "key11": "26eZJ3tgv1MRtn8JJihDY5LmSq3tn6aRGH1vvgcnWPbZD5mRCXaESxdgKGRdRYyxetNSVttGGiqVv5jpjwYTK1xD",
  "key12": "4yJ3BY5JUBAWtjQXrEPEiHKLxXARAERcUQWL2Sox4LTWSin5khGARrotuViBhceYxhqcRJuzd22H8V6x9CwNSxYn",
  "key13": "4gSqTyfjJLYKF436GfuK3wsaUCjsnmtb1Zegj1GQzG78pqgo2KVrGNFHpf84Yd9vHnQ4BRaEJq61AEDu7E9UdaxN",
  "key14": "2PG6NyYm1cknf71Pqe3ubpMjPDEBNmhLNXofty9xjEAMLrGwhB2YD9MRHGVtLboG4AZDKS1ijmcVrWryXNk5texd",
  "key15": "3sH3371vfjtwBac5LBVVr9uq8ZyoJGKRAE8QY3zrV5bVJfb5qoJVpR9QBkqxqWnTUgjzAqb2RrVQfJr6h8Rgtqdk",
  "key16": "2xGgNcjG66wcf9sH1xqBCZuw1sHWod6v2cySf5kLKuyBSHndFdupD7KW3Xq3RkqfMj7JP8DLSrzjaR2iK9HwAXdH",
  "key17": "5Je619qriNWFmmxzabUontbFZq9X24Jtz7iTpuv3x6WWwnBpDuxd9JaK2WJgwDCZ2kvKmcmAanrCTBPMUkVjUyHh",
  "key18": "r7mXGyqfE4m67AoKcQvaZuT4FUEhp6HbPoaSK7nK8XuhxP7PnyfzFeNHj9F2HQQnYXpYt5PZhTzXHULcKMdQq6L",
  "key19": "5UVeD7xeMyCFeNudzzd5fURLqz9oaQeKn4uwu5VmYCwuEKS5Vbx4NQuUE3DsqxMYZi4tJacwmwWxME76iRWLYTp5",
  "key20": "3Hv93zgDcVn4LDZC4pNRoqyNnwF7dW3TZcnGTRAmna2FinZqeSFayZHaSjXDMNPthn1ek8YEZbw2gNvKSULNHCcy",
  "key21": "63F7HSo7v9e1aoqfUKRTf9QiZ1JirsWvCBLLZ2wUP9Mj82uywx7naEQAG7WYXXwXftcTumYkeVZq1HveCk1B6qPb",
  "key22": "5QThH5D9nge9St1oRDHLNHe1HBM6AdVuNPoUwTQapkuthZmusztLnkbvwwt3fqNp9qucVEuvB4A9ekPFjBMsSVPu",
  "key23": "fm1jvatwyQTzuY7SS1HTNCNccCKrL93KnUBQ1yJkPXxAjxctbtHgS83sPsgBnB1TuYP2Zi4MZR1TWA9mbDffdGr",
  "key24": "4TfKub6FvjyyR3bmzKv1rTBZkFk4NChLj9PE6f5y5k5R2VsF3tCDQAPTVGUuF8JzMW1n39chX3rz8Fq8E57YdsdV",
  "key25": "33es7FvtfwpQb4s8UQGEtzjSG6Ei54GCWFvjUBLiNdeRqatFjyGk5dWX3p59AAxaAPdezvYaZVYJLyRZ58zaS5wQ",
  "key26": "2iw6Hm3HxxWuRNAR7VeNoPLLRuvpXGUqJvweiSWok7ju1wBfmC3NrCt6Y5Z9gvqWVPoBA1huK5uevkCA2npXxEod",
  "key27": "5vMEfQME64H3arKThDFSoaiybw5VZ4aDVtjCgrfLCkwCfU7fZFkqbPNSfv8RdfzRUo3w6ZvvJnYshfK3n3DvGAbp",
  "key28": "PMNKMzzGg3pevC1L9jsHKhfMxZ55ZfYMtvFQiQy6hJxHnkPVPTRdpjri7LrUaTDvr3ZBo4CtZMxK3vUjK1zJ81E",
  "key29": "4MZHbvNLZ5sryyXWoswxptWLAebUJQoFxxB6D9zasYPmHVWH8rTydTAUbRKBLvZdUdSGFSBf4q9kHutmL3XqP6MN",
  "key30": "4BNECLv8BbtQhbv1A1BGWqHfwHNy1bX473UZufU54nen7RLQmtuBcPJ2GuHoUnTuQ656LakHbsMKiBFc5MwAJcEf",
  "key31": "4X36iAkGv16HNCdszK8Kwdij4scurz72dyTxaEi6nn8mJTwvwx1b4znwoLq7S7QJZz8ViYkuxFy3Ub6wSc7NuEsm",
  "key32": "3KDQU8F29z9Q2VEZ5kVktDnNSyba6dCaqb9Ac6oZVEVqxXVVJFNXDhtbsT9SeDFmNhBeGPVAQCweLN7uJEBgwFrY",
  "key33": "5KNs699rMgxBSWe4J6i444MDw8ZtrHTG3EWUBkY3J8TwiLYJ28febsEwYJL7d2DSsMXj6SrKsgNmDnYxmtF6kK4J",
  "key34": "H6qhcwPypLDpuUqM9h7WXo3zJpnRuaAUbr8KE3NFWoVkwdW7r86ZzxYi44kSVYsyb8o8ZVJs3GsJdCCL65bexGk",
  "key35": "2FYAvQPni6aP3Cymn8toRhuoNW1dUdATScm7E3HgXWTMcdFhq6UkTPegew5qjjY4kdDEym7nYe7CVhDsW7vFGLoP",
  "key36": "3HF3uZhE5N9Xnu8MoqTPekmxD6CQRjDjSvpWLht3kh2oU5DvkdtaJejPNQyiHwqCHqmfa1kbZUiz95xeBRXw5GS",
  "key37": "3fVngrcqzMSUE4soUAw5jzMHsXncrQYEusrzz1HBbF4xvrpKQxNnNTC7DeDvCP69B2E6fkGNQobAGY326hy1z5Tq",
  "key38": "5uy3N7fntvnSQwnF3vtZWDVnnJ1LXP3dgoiDUqBWpqegaEeg5vPWeqao5EAe9FDCRPPKU38aQW5MiiKMb25mubmb",
  "key39": "3ZmZPNKLGjWJwexrcsDddwojjrxSjR5XV6PjksbQNrkVcmwyb4TRVjTu6RtR3TobpYcVR5Tv3B9K9g5Jr7oA9LMv"
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
