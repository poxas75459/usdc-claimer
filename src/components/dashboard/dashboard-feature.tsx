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
    "3JgNjhoKhw82pQaHouFwS9S9D8DGs79hDFe1X7vYUqK7KW5EbuDsW3m8PFYoHoQw6TMfgQXcE28h3xS167VYfAaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bkLSHSTrJAMcNc5MNxxAFHVKXzoBmvyCzDtXhd3RZW4JgJgYrqAo5zUcoAK3CiassgTfVjZ76uBtB24EiF2URhu",
  "key1": "53ypGYti5JGG7Eh1hHTrfGWzqTECrhsfVrCXxr1sWUgoX1Y2W4GhwchoYstDHRjRuXSDNVGv8b9jh13Ns3Fnei22",
  "key2": "237kggniVjcHVVniPsnGzY6sQHn7f9FW94ErBfHckbBH9k12KedQvcFw1LDVv8x5RaEN9cnbL3VCQYfaDS8HJid9",
  "key3": "63vT3T4tYaAtNzV8AXCsWhkWxRAY9QnKdYzmfef1TD9EhnpGLMR8wWdsmjAVDbgSUMFRUCWwEN6DW4XZz4mqRYqj",
  "key4": "5y6w3o2r6fnaWnbJ428heDmmJ9p1WipwkjmsMyXFQPf8cJ1b9vXE12zsnpkNxNdemRX1sjEtWi7dSpUH4VMdwoxT",
  "key5": "3C7TMbWhjRYVuvvBSTH5ykpUDN4WdpRCV9TJ2aFpevo4PeLzSFK1KfKtwPjtWQNYVpyKNG5hAQcJeRuEs7x6QmVz",
  "key6": "jtsaDfYMa7KaZYCwtiotRg3SFivnBFAgCUbJzXneLRHzWetgM3aKwjVQA24ZpuPLohbJCxeuUeFbWAvKBR771gr",
  "key7": "2piUXS2asQEytzPSsMEjiZfKU3jHeWCvKyKbNMT4WTmHYDetEZ8YxwF7SCTxD6ZRJSvbfjTiWYcqzKWT8zdCLcXj",
  "key8": "5EBqyz2mfkMGJiW5YZE3PtgNBWKt7RT81si4mDwwPgRXJDJMujCtRCpdhu5bHyx9QhMdpibmkRrfGw1d47VL9X3m",
  "key9": "eWzeUcu3Qk3qktDz25ndQw643SRxgT6Ld56mwjcBeyZn2xox8qRKr5t5Dr58kkTCbsz9zrQjLM2oJW9cUkJeWVX",
  "key10": "5gq4YDjFQRJwFkbFtS9mXHdnvVUVj3kUsSAVx6FdyRtn3Aya49XDnQv3j9rfPyB471ZEKdhmRHf5z6qGVLRdTDS4",
  "key11": "5fCT1j5PmxrGZMerzwwxzTiaktybt8cb9VXcq3H8mP3VawZWsrTkySQAj4BsCd5QJtV3dzkqhfdRecFkcALrTvuv",
  "key12": "2FgEW9GrXA52EnpJghmmYnr6N4guyNkJiipYNYAsoCGfkFcaQJqaBUTDoNp9RNn9AGMfpK5hUkczWp8zzjVnV535",
  "key13": "4qkExJyehHQesTj8YM51VHGNadUF5dpwetKL3tJywRe8ffNn4skTjSxLi7ZC36P9gDfqwGG7kNJTsDpHZGiFDUTV",
  "key14": "62BXdA4E66KjtpGcYkQkeqJcSSRy2negA9VRWjVh5TXHJMkhSW1R1VVConmATWeMZWcwWzi8nVX5TBxukXperQYc",
  "key15": "5AThcCenjz2DbECPXFyEZRT3s6kWvWV68XEMX7bG25d1Gr53ijTDAoiYHSixm3vS1gLpn5jjfpEPL1pG7AhW59tn",
  "key16": "29tnpAP3xqTT9zzdnycXdcAWCCkoddcd5tjcFbrBCat3EpfQc2kRWHJtSASAWLBSauTgb3x8MBGDAQf8sDg2aH1A",
  "key17": "3tPUL9MPwEnoGBjAUfJo1nG4sb4FwtoxUy9c6yhtrZ4h18QFcVDtS4yQzCY4hvBQs32u6FjsM9eCbfL5NMtEguZJ",
  "key18": "26Q1tmfdv3xM5qcnni7d8iN1LfVs2HVfZVtgz6R3j5r8yjyYWtteoYGa8frjB3zUUufwHSknLQyFLeVKzFqAQhEb",
  "key19": "EMzKPwiLWdVb5qpYdqSNarnVnAXkrgkJXqmwSj4opAA7Rffihfujtgys92W8FoaLgKqH7aSyhUakTeKQCE4h7N9",
  "key20": "3KLF8CtWeAJSuPywDU9uKxkncDPQZxweenh4Eyjys4EoJZgTewNjo5ATMtXPa3haZdvcbxb4M85CcfiWNJysPCHa",
  "key21": "2aW9PtgRVdkZq3jWUyboQYcxjwbWSnKR5k4AeF2TztJ3QUP7ZjaQxw6qrpQLQU8bx6PgFJGbpdEAYDtESbFndLU2",
  "key22": "4wnkAgdiGgW4SoqusCNEyKPArqfLc43bfkZkA4muwteTdeN7QbpVif1vUaRhnmrjbD6fZKVd2U6Xy1qLCGQzGETo",
  "key23": "4ttUXK7sj4dcQqjaCoFNTX32pXzALtKYgh1m4WJgdPqkKm8VKaZ6xUm3uMQyLRQXkQz23Qim95qfRtKmVJCn5K5i",
  "key24": "35oyhZ9bwkeQba1YVwaK9n8UEq8QQwx2tJWHRDyDpA2R5Qn9LaWuEmLamsNL1VZjcS9MnwNkab9Gdoc3583XMNxf",
  "key25": "3GLSL6nfD6ANCXvGV8RKNkjKkoDptSshawA8hCeisWFQcPLWRYB1dsBQtcGLi9GxYXHanYdkiXY5fQsu23xAmxmn",
  "key26": "4QuA9CH1wxUHrDhn2Yo6ruDsewbVz3YkDEGxM4bcsshhh8rFFdSc2uvUtqPtpCecH17HY8f27thcS7JyhfFDjW4e",
  "key27": "2izZobpQjUTp3nKJC31jmdoKafer5jyx73Lv79hqCMnjECs4rvqeYGJazZuEVtBtN94ern3KbAxn7PJppAtLBHdA",
  "key28": "5xAftCoU2JT1TPdyNkpC97SCVFE9a2jasVShrf1iKseKfznHuiHeH13mbgWAjctwHNqXiMqpo46XBNqqEHFgrnQ4",
  "key29": "4Gb51uufKwsPM76btvKnBT74btuVCtvNqxcK97BZuAJiWehdLcFUC7rzEhVmH6pYgZxvvwpFCqGAdFzZVeKFoRvB",
  "key30": "5Y2XTb62yuzTkfwhk5pA3td5ZHixxgvsq2S5LcQHLxdcQCUtfKDqfuwaFBd6NR1zfEE4pFEaVwsqCubM2hCujQEi",
  "key31": "61c77bRRVXZVZx9QEqXAnep2Kj6swqgDGCwmVZE4NvqNbVcPsToxj9kKec7xBs9dEPENiF2PPZPuiVadFsxQiPem",
  "key32": "2ohqDHxrpV6B8D7rLHdqZvuF4bVpBWw5fu4yW67Eyqdd7htu2G4h9jhCTJvg3WLNTwi65m1tJC8RtPv1FQLvjnLr",
  "key33": "5f32YgSDQRb6nyJjb7pvY2Bv3VQVpdreE3sxL8xVQvEBHxRnbXbxT8S2PqmksJEPvRYb9UgTw6NqhYg3kcgXmGgh",
  "key34": "3zDqRatEGLs3RYVodjaAf2dXqdu3n7MkaMDZhqswbBEfBsRbhD8ZjMNisSPSHgQN3kZeJZN2x1xx7sM5k9nN2pv9",
  "key35": "Ns91rrNSCW1HYJuCTLC86kmjTvjsbwq7c8o44pNKMMTrUpkuiXkwQe4ymmssSThNTMwvSZJfuENq8ZwbpeHak3h",
  "key36": "MiNcTQPCREKEfHCzzhxopuGhTZaFtXzZAqTEtW7s7ELAVbLpkvYNn9Fax247r8Wzn2dapCh2Eo6sasWTiaJaPV7",
  "key37": "4JnnkMcB1tyvAdJL51fshLnjBTrZ8fYpCJEDjHD6is4rsEVjUCxDoUw8kJWarKph8qF88WwXpuxFavSMpND7xbG5",
  "key38": "zLbCW3DNR9NWh9LBwcv2kDSTRa2rn3N7UrqdPuiNr5m9EMShgPdGyYgCZ9ixpZnuGMSpUsVurF4MEGkEM1n1ThT",
  "key39": "3NyWgL3v77R7uhp71gk8JE2FFV6YyFyHKxDhWeW81u7NqPUfJCdLoL3XTWHqvgBof7iXCUM9fZRRLumbQKSGZpij",
  "key40": "4MSNb2EE4hpCdAMDWnppHneooN2CMPuQEBhDJu1fB2ypMgsWiWLaqAJVyPgEo8YFLEZhykMMCWnnjRrhv8xrAGUp",
  "key41": "X6Pg5sRGL4rKSXYAafHp1zZr511fVtYFpDS7fQ7L5Xa6VuNnZyY5SfUEX69bjN7BzhiKUiXfg9v2QeBxayynwcs",
  "key42": "2C1xCGDJDaCc6YrvjHXjwDTgB5eBs3zSMjQtP7mbsi38hYDPoaL5hqpdhu9vUSdsc2toBTFVVJDC1v1tNCMUGfR2",
  "key43": "4h5o5xKiLXCsdiHK5t8pkKurM1H7Qi3FCvDTVvt6Tzwu6YY5mD41b2XytNaNLCSWTiDAsBE4wSAJsidYFtBpJE7S",
  "key44": "4JxxgsCbT5QFdms3xRPia6uRYcNuhL42FdCpMCzLoxQj467ytmRBpmEu2Zuev83FKYcR2Vt5c5uByDN3ZCNuzL2E",
  "key45": "4TvAFQo3KbvG987bmnme3K3EQsrm2GGJhyM4X5d75SLVP4sw4Hb6op3uwLTyY6JaCDKAuSZ87kbcQbfevXrcHYPr"
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
