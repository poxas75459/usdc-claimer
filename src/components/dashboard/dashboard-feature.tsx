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
    "2vzuptFGHRksswNmUMUzJaD6gcLzZ9Hcd54gZsyk17Hoazzs8MD4sZg6RQz7y523hW5CHcbuwTiXhKEBZ4iuVTc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wZeZiiHJhgBk3KxGcRJrsdQtF1hw1CGwwAY6DpD3YGFMcKRy85QLhwewbmfTz8jGXQbQg2QSoaiw9wCT7hTyyqm",
  "key1": "4uPfXsLjczr2pib3LA2KFfbDbyppr4iRPdr3F6W6LJVCiPz4F4g71tA4Ky3jib7zTRz7izDm9u3wLq5DGVavawad",
  "key2": "3G7SUwUHoftTmkTCvt5oFMos7FmEZBqvegsJu7CX8jimdq5MAJvBXBAdF57mQzJzN3HXKF94EK8y1V1SVJ6swKrm",
  "key3": "622FyeuyZKBLZMN24WUqFifD2M9vppNZHKkRt2ReyeRikbLaxB7VorEDWwmHsz1t9yxo6ikbVuJjnPFwUQj741gr",
  "key4": "ksgJjSYfX6iZFhsVfEHtsgM4Vjiu5d5EN9pn5C8MhM3ai41RMqL9QEgYnCz3eUgiTi3wFMPpQNig5owk1NQTPBL",
  "key5": "2U5caLz4PngmDXaEe9xiEbuE8g3bJcFGUisA2PaMVqDo4zRKZR9JAF6cNpyTGpCR22L7nXiCsFZ1BtRLcE6e6JZ5",
  "key6": "43hZjaML9KNBzhitsSXGG2r9QNEDbZn9UNUJasYSykkiE3zerCtoPbptf6jJti9SoFdR8SjdkyCY1c69viAumbGt",
  "key7": "diZnEcaSK3H6ohPDeXRodrCWeJWjb3zvn4oYLx315LffmtLyT5mcaPCv9HbQPT13bmPvWpfWAAuCkfECoFdQ6Zc",
  "key8": "4eko3SK49dahAL6qsQyivphcFsxRQccYzejWcLNcymzpYjYHLHYCd9yN1E5Zt1BM923uGsbhd2LSsVLQNqCjFrnW",
  "key9": "2AaiSBmeLCVTvVgpWDswnbFMcVTGJJe1Xh2cTotk4jjnBwutfjARtyEzXn8DUBFxKuzsHFnbjd3AEuTfkwdb9t9y",
  "key10": "35zgbt1U2LSfijzo3g7Ksys9tWVRsUithfg7RndBEgui2SRgvSMr21VmNdGe7A61d14CpG3zPJ6Dim8m1o8yE9sN",
  "key11": "2X2kw9crzvqg57kMnQEW6DmKNN7cJPLJH9gp3saFFmcQbG9CXJKNyXohDYbwsE2Vr5bAquaqdBCmU7ZWDwXdHhYp",
  "key12": "4ZPoJ8yd5BvU1nLvgPLsmxCtrCunjS1NWzpfDXwJBSxbF816Pix2vA29i4jfox5TYbb9rC4se9PK98178Z73gdwU",
  "key13": "5fGG5yH7Cp5yvYX9soTBCBpW9VdLgDQ7KcrKtkZGZQVPBAcPKxnUiYCGXfRPBwhnNXfoLTMKdsw6EwjcYy6H4ATr",
  "key14": "uTiajyTEf2LTwfnL8vcAr6f7r73eW73qbYv14JAnx2pxnmpypKxGJ6beUZLhnNz8ibsW24RNgE3EAmQke9yfzcP",
  "key15": "5NVCoTFiso2CzL124PkDBMAoWCGwPXfoJB1JWiHbfV1qNArr5q7uUSioPpTWer4zS8J8ea3sgD1QE4u9tATQnRc4",
  "key16": "5aX7RXaqw2k6NvrWsNYebxi4SuYp1uH4N4VzkwnQmL9FWc46XWkGtXxczqpSHcBuqvgqT8158rakc2gwg7YF2g4s",
  "key17": "71j5yWxXcXdwMdmaqxWFuQWVUxZmFMVPSwfqrRtPm2nfZHS91L8jVb6j3zHCY6pjDur272N8QS99hcDxWv7n31J",
  "key18": "2rPjNGQ516MJXEFcUCogkYTTqtKBkjJiLfsacWASrQm7REM7HqcGFmySaMbb6yi95e9cjFXDVTHUv2Wpuv42Df8M",
  "key19": "65oiaKZLmWuFqPhGugrfJb5zogM1HSaZVZ91iyE6sPqjJk9qsmNpy69AEJoraTKeqq2wGFewc8usqTiRMx3ibzzM",
  "key20": "aV23gTrLcUr1x1pQN5W4DzMnNs6bYBTKfWcteQmttFBLiY3chpsg3aAutGPZ1iabfLLseQR3CGsQEiMnBX3mieY",
  "key21": "5Hf1u5TuuKyBF6RrH5hrv5VGU4bYvpkT4nYjZ7yFP1QnTqyYMUsx3p1zxcAe6k4RDPKnqkyuD3j8pRTqmHWBgX23",
  "key22": "55mqBYTWnmoJ3eE9MMUKzyaSdjrN8muBfCLpgSaG4L3z6NVJbQDvvfRBJAUcYARzB7co4KT6TUxAaGdoF3rgxr4C",
  "key23": "5mecWJBfDryq6QE1mhP86u3he636BEk7Yz3ucrzou3fNcJ8N5GCAbvqhGgDRzTjCMHf2zXWbTDrekxeSi9p6F5pv",
  "key24": "2GznUMh3CL9nbcQmyA6cQqW23yyemmDNFX1ChRmfFUbtoZ7u3NwC6ESGR7GuzTHHFJVtsj8Vnkd3G8XjcA5mYh5B",
  "key25": "4Zv8HoxHa1mbMc1W5Xi2nTwRabTqE6zu7jtdfzvDdy78wQpTrF93J5A5pww3v4Kh7DwCpHbSGdorK6nQTRtrqCEd",
  "key26": "eVApYkAtVAMY6T57Gg7md2Sp5zWbhXThR669NW9MsSckxFkumPR1DKff85Y3cWUDARuengP4svCX2doAzSZJ5T7",
  "key27": "4GZc9KqteirYFy9dvJ3GE48rRZAqKd4njSXprG21RjHjNZVVbcEtqCxfYm9msoev5RKZwagD7LckVDeY4YrFuaJu",
  "key28": "4hsFGWQEKdPoUsxrYfHFNnAwQD2ed3KuutC4AZ3PsUPoqWnb4tCZ59v1HFmJk6yN93SeNAewrjAfft29HFBieXEQ",
  "key29": "4xNfwE6PVkPven66HQzpFz8b4nuwuvYD7wjvBwgHQxN3gwJEhEwLAWUTrbKGuUpZZ8m5VomPvhyH9b1LgnP95dYi",
  "key30": "2gFnYh1wLtWiK1ZKAYnqWtEKu7rmxbRh2gNRL1NRG26gCv7ciBPBu86xBDwyyEkjQ9yrd6JVYwoUoyfvwXDfp47K",
  "key31": "4VMdeEv2uBJEmyKri4LFcbxo5HHziBHh1we1FdvQby6LgZwcAFDQDKKoQfV3TC6kUPAKtBH8RUhV9oAaUboTcPVk",
  "key32": "rdi91fE56Pcs9oJgc2CSiDCnSJVp2xtKgA4qYuobAoVxrG9inrJ4n3bri4GjjTBTeaupAEjMK7yEAfmrvujioa2",
  "key33": "2HMQYpDWhBsf3GEaVPv4U99MCm5GaHojq1eR8fLeirXaXkeNMgJj2WyxNvB6XBvGupz4MduXtLoNJCFXnzLk9q6R",
  "key34": "JNpS9qkicG8ypggZAEs2ArkiqxXAGQ1bJxZKBGk92zTMfhC3CNoZa3meL5eW8chG5ShK9e1p6m5HUZack3ZYbny",
  "key35": "BkYYMYBYdhYZkdkY8DUwoLwQibQTNLDsaAhLR2b6RixGkYUR91QM32sVz99q8C3sg5sZUsqz5Bp1gzP4c3vGrsr",
  "key36": "oChCGV7nmHJEw4vbobC8aBWjZxLXqUxsMQHMSBswwDAv1A4Wv3ETU2fwpv7ho8NmdTRF7BXr3vwZ4aEk5pMRQPE",
  "key37": "3wDmhmB8r7jxVvVs3utzACddGtJQddjNsmDmi7EAJkeatEG6GGfFkCwudJppi3a8AyVPvnNr8CktPFPPdMtQeYdB"
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
