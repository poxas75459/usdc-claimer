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
    "3TUhE6dB7cb61c5Uczb69gRMdBc3v164miRJ28EyBaWD1GsJGLPfrAXwuaVjUQKNTznzwu9dd6vpFJHmaxzJTDR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59D6RSdGDLsy5Fn4V2FmTCTUfd1DqBxYxfdEYLYnbCtXYDeUt8YStYDUwMbBewk28Fmi7Zeqmuz6nc1ZtxDAGBZk",
  "key1": "2wHDXupDDAnMx12wucvDGpgLqCwWdUqKXmbHJz4MBCkMpB11qnbmQyMfUCAaJW1U9grkSx3wA1uWqg1XRBbXAcKG",
  "key2": "4VVhTNsiYNCtcrmnU1K84ypTiRTnGeSu1QrkeHs1CsPzyUJVfPP1WzRoZxG8vZAj5szBSphTm172gd57WFfj6xWs",
  "key3": "4g8ejFhRAKNNb49MdhGreiXbKsBWC6kawmysZaXbnMLt4PCjPeZEvZmUp6xK8wC3Twn6upk4GsY7wLNoBKyDUuuY",
  "key4": "5VGxmgPAi5uy1AsP3KWipeeyootPWKTEN5XMcLqiGBQHsAvr4rQeFUbmM5ZWLzUQciAwy7rk3VVrYa9wnoExwbWE",
  "key5": "4LMDUobQtpAZXQnHfkocuL1gEcVABHvDkvNWgHt8tq85FA69fiZDpbMMvEYWUfAe65MTuhu7c6V7Z7NJarVfhs37",
  "key6": "2uSKp7rDfpNE9ktpDh9BftX79efBsE6YzFN8kzKyXGF6wRUTBRsbNxspN6ThkTSnQ1in7aJ2SASbaJkNkJP4gFnH",
  "key7": "129zxSH3eqWFHeEd1dSGeTVHLmd6x7wtkeAqdfBkRvyyzUf9b79fq1Z6cobgTKF7XJG81T1u6aNng5pEqEV9jncP",
  "key8": "5smhpzKFFs8NhDTHupHJtg83rwGYCaRFrBaxrcdAMheJXo5WYVr7wXpRm7LeuEU4d6ggeTJ365jQiV2WJLViiMLH",
  "key9": "3oNQBr7S2mvLeyF4M8LX9Zstw4MVV3uZcEs8uHmMwjNn1Nyx6B1czNLQWeBXhRJBbvy87xVhUhcszv5hpaKpMNyn",
  "key10": "4ik8varARrFFK1ipZpZcBskiMn3Wddj4WT8DosYkVs7zPUBiAshFiHsSufqK57yXPPUVfxmQz4qqGK1SzA73gRgq",
  "key11": "3bAMDaTVckpZPCqAnQvHeArS8yg23w7btEtyeRz8kCeGfVSspMsTBt1PJL8WUdT8dkrPQBoNCUa53tnmxBxJQsHU",
  "key12": "QLqvGum76BrB3GB4xFjsk8NrX3pYvmBSGqSE6a6RxKLK8MoVHEokd57fR3dE8CjqrKXiwjx5YMci3gk5fxxy3ti",
  "key13": "2hyGpUpfxYNAD7Td9iW46gbEtsxg9h9MeFFsNxGx4DbLtuc78CFc7R5LJ6GVRzEyerykaAWYEbpRAUczMbPjHhZc",
  "key14": "5F4L9PLkLwyMwJ4N2em96kmcnRC1FomTwpaFVtShgDsVSeEeL9SqANyPaWvcvQcmS13FjRTq4N3EhcD8qUDmfyrq",
  "key15": "R4AHTt9Sgv7Frh11mr7uiuudyYL7L9fJod2p65rzePifXmpdfMdmnAHDkWJK1weyjzsSYYp2auR4d5dciiStxs1",
  "key16": "4VgTyowTL6HcXE4eNB4D1Gz6u66RSDxF7rokDLatxzN6RpuagskhE5rdZhzsJa75tvC5bCULSedSBfnAUMD8z5L",
  "key17": "e8d7mgzVKsawRo9YTscQWcKuQ2JVnbd4pE1MD1MXzunuymBwyay9XkoCfebeup8ia5M6tXUH8a6j4mtCnysgMJK",
  "key18": "43sKZK36QuSKky7GCMBiAQ5wMFBAbmuMUB5xECWFAxqicHJVxNVFvXPy9ceQkwpytet2JUH58TVrNSEb6rCMAeLZ",
  "key19": "5VVvidrKivE4cboFJxNPJNoLPDiQbkLS2KybXwGQXGKb1B4GoHm4kVFyr4FPj6kUJEA5SuGiQBL8TFDySUf8SC8g",
  "key20": "qqQsQXSQHCayJfDZztxTeTk2UiYgnKEFWYQ5ymMT4FV1UmajyvoMeVT5q8QJm9nZBXqoqtVK51fUGXTvnMAPomX",
  "key21": "2pDgWZQTFYixTsLdJT7L5WwoCyVHQvV8xphHGo2bQaHkmsH96QEw1Xbd5dMPWmdMYAEmJcQmiP2YDj1LsD1ZUnFn",
  "key22": "5bLdd19QTCkqJkHkWVYMLVUXkZCidZbmqka3Yp3VRwyA76qrthBJkJcRRoGMGuVw79J4FzD3k3bmki2cUBkDTynW",
  "key23": "4hMGxLGFWj963fxKY4cE4zR6PMGZAX41e5GZa1iZkQtbhSTaANGs8vstkNYXqj67gXo26gjd7X4LvXQMXiNM1Cnf",
  "key24": "492ZaKFRfMUog9CYFHQKS1TjQQHTN3YnhcE5xhR4ArNxgJt4eAeLGZpqz96UpEeC3x68o3VAcLhCBjTyiYtidUv3",
  "key25": "42a5Y41839oJm6gS6R9CgVRCZ47eFA87D3aNMYDuee3S91195oN5hUnayFKyXkuYwwMUb1emsPTwHcsKfEezqpTs",
  "key26": "SNs7J8ksFUfSH5khxi4ZrofWZswUrfedyoskecdSquJCrTKhCDRNC4uujub4r1qnKTH5hMfkvEqv2Tpm4YDdTDu",
  "key27": "2Ccwit1Ljjn2DPZ93txpm2MoGk6zEQu7GyiqwgJD6FmjQSS76psdxzUk8VB5ekbYQU8z68VEARBkNJa9orVQJmTa",
  "key28": "4PLLqwmBgaZ171VfsgFjhTRsWu7YwrX43oMb674WY2rZKTMxvXimge85UWHXjGimPfNaS3kjwasPgztC9zHN4Qa4",
  "key29": "3bjvo7PJFmL7XxsB3gV3qh4QyXiGtZXvKwJHj84cw218UuiUC7mNLMr36UguxWE8ziueM1quM3Qq9iFD6AJh9oDC",
  "key30": "3SpFXmdd16RhMZ6ijqvU16xT35wr2m8RWsjvKnWtk1S5ct9scv4Cb244BBsPJrzYRDhWhy2SzrXAdiBqaFf33td6",
  "key31": "C2E557PyjFWE6BPpkmBZC9gctRcvbLgtamzM62tLNzT1A3qSB4FwHpwPF3szuVjNjQBEvG2vbd7TrQyPGLf4oBY",
  "key32": "3QmbJSGGUSm7QpamsAPRfJAvrMkpnNophmwDYcf2hYqC5bHjqCHR89T7UtZ6vimxzHhczm7aqWt2gFKzpJh3yHty",
  "key33": "3HAXSAbuHFeQJcriuJHdQH11dkef3pbTKrbf9cpccu8Ch5JNLF7bNBk2dQWo3XV8Qhrc3NWUYQztka6vDZCE5JNr",
  "key34": "3g2PPi1a8bT3wFKcQwhJdhEJV9i9dbHPXPJuZDZUKNrFm6mooDk4qW2HamcjWGr29Toy5svbW1P4SRdWdL611Y2P",
  "key35": "5S1Gpgj6qaTKGkBrCX8d5C9TKZaPGvEoeQyvJ42AexYjRkrhrEXRG1ZAQmsZr1skCUFWM6YTQ4uNjhu9wmuZVKA9",
  "key36": "L5ufT5kj5KRt2hT99nqR8emxsRrY3XNwp14DFaAa8j4KvzMFEYcPwnvLDQcvkMVAkkK7wBwzyy4VkxzArAWg2kj",
  "key37": "2NsQ91gt8RJH3cVZyxTkCKKsNbXj4N7Q4tCkcuPi5nZf7JcGGdFBAPPQ2rpQ4BjnwQCsGaQv1GqYhKnR3to7qfu7",
  "key38": "2fgdutREpPFsPy1YFqazu2UT8JkH7ktjh6Ps5xhv1VdUXiMg21fZDToB1cFs6fmR2Nujj8n2NCbK895yZhkR5YtS",
  "key39": "5EpPp3kxRNjm34txd3Q3rrp3kD3EyCoTDTRmzZPyYs7HGQ7Xyft5TMjZQiwGrEU5FaJ75M7PxWR3Y1PZCDfUNmHB",
  "key40": "ZGby4RvzpwDEUaBqiCpoVTbq15P1p911MsjDfQ75BRPgUk57NKTcdZj9KCu9Xh8g5K1A4ERyqZDxs69q4Hk6p12",
  "key41": "87nbRSkqhfpRs33UJE5nGYvTUhrHxM9weipSxFYo2uPLwNTQwUGL14RLAJsMpA332tPRfv3NAgipukCBMpP6nTo",
  "key42": "3dAUUhhh7fCP2UBjR9a4Gv8apcQ9tbY6jiigAKJmg8E4HA9QXKQ38wMK8bDXTRJqLur9FeHeTgmhFyCq6gLw6rhD",
  "key43": "4U7neKDB8CETh2ScD2RnnxwoqCr7BXUiMtsEZtmxNrz3aMEx46jCEaW3WRmDfhMsodm5FHVkJ7GtRiaLyxa9WW2S"
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
