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
    "4bwyw6ooSRrjGBM77JjNkEC12QCJF7wKnMU9jzkZTLxcetRr6NNDgT3yduov27weZUjYVwXXv4Tm3jWxZuuHGKGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PU9quNS9cWMUkA7iXgstQ4qfAjLEuHZnYY6fAX78QF7jCu2taFrSaP89mVS3C1FnPH1AQAGF2ukEg3TgHaKVvhs",
  "key1": "4GNksDjBaCToQw4dAeByn6gaKbsCLfxxrfGYevwicdb7fMaZNMyT6bM3EGvqUy6ThtVCfE1PYrqfRnJn7t2gJw53",
  "key2": "TFdYWsr5utLDJBJjoYrGiZ5mfG4uzuSV8igHaFZsFoAy33BLvHkA3sWAgPnpt2qpsBhuvnQvu542ZtohtMeBCAz",
  "key3": "4QLWcZXTTmukucSMqgbyaH3qmgH1oirFNm5P2NcNjG31zbC1jK47mAbfVGGrEWjv49i72vC97K1S3B5N1QzQdfpz",
  "key4": "5K5J8w5fERGvJE9hBLS7fkmKP4ZUoJUPJj2eDvrgWYWey5XmbNbJ9a4MPw9Rzz29ToMAxzy1ADeMNU2JJ4NWa77b",
  "key5": "uV8wkjuvhBhvGReazfUcBU9mQRTvXPgCyhbHzwZchX2Q8rVDzsdcDQV6n42RXqnRqQiyp9iQJWoQ53WXAXuJdwK",
  "key6": "5Fhd1s5m2iyxRtAGuN4zgkz8rkqJUG67SLiTKgSkbUdmXjVZrdEk98UcpRSyy86cQWrLNqY21KmjPQj5zzfQhNwm",
  "key7": "3sGUcXcBWFV3tZjcLYK9jX2kyH6PkbzPbCDExnNawQmr5Sep3z45tv2vzcr8msHy5q6y1vPmVUsvNsDzX3NQg8xR",
  "key8": "61qyvAN5UXXDVWWWx3QV5WK5HumszNwsMtaW5hsjkpBBwF2EQdN1hNRiHfn9PytXXFMyknA8xZAyR2fuSnm1fEXm",
  "key9": "Z8TqDhbv9Q8VVoDZTu23bZ9gvB4dgirXja3aDmk3n5pnXCCszWFAo183ytLW2Bp1XroeQ92UBmypqjosNTddy6c",
  "key10": "nex6mtyvjTErf2cnzLacC8UCxz2Z4u4osDULrjmDw4qr1bjikBVCGNsmtCTFpNnTPNBoqYAeQ5W6sPfsnLqcM1Z",
  "key11": "5LzZLPKvhSyQLBV82U8ts1o3yurZiXaW6EAzPdxPm2E4dBymdbaTRimLaGkgpN6w69jYk2eB9dYJLSuGEejefs67",
  "key12": "66oqf2F4vTqEVeW22uah8nEhCHAC7J3a7xLLRtsMYPFyJKnDrjZpHuK9DBXSDAanQrAYJh3LNAJuPHAJqi2DAkBA",
  "key13": "5gtpkFd3xrGoPB9Fj9uFKteSyKSnMMJj1CybxwXXptcXhATMMNJ2ewTNiwAC3YmFxfSYubRJY4AWRu9RcwQT2XUc",
  "key14": "3ZZTA7GzoSrCtDfcFzpPwYx3EqPm8YekPvcpheL2GKP6k4o2KVTEhPZKY1t6cGJ3jwPC47B9wJgga8BVjhunP1eC",
  "key15": "63iwUZptC2wRkcSyKNBsCLpu3p7h1WNMF7DrBduZZTtxrj6YUQjJ4TCQitXbTLfNaAkGtdxTiWwbn7J1bP8bhyVK",
  "key16": "43TQZ1qyFtZuBajZXyPPv7psEguc7tDfUS1vtfJDrfU2ofGqenutMTX6DweMcYQxZuxC66Rfd2sp7oMLvJypzf4Q",
  "key17": "4hxSqbGFrbHNbm3FwJgx2CkNG9riVjrJ2ad4bzTjaN199KaCG28TXn1yt96wsSXnkSTQ9NbMyoffvDgmtZATuP7T",
  "key18": "27MaGFTNBs4rH2cGDW2eSxhuFcGNgoYkYPmeTUBo7ZwFBd8mgFG4RKwBZSuSVmWZ7144MFupY7MrdmRDKSSafNpw",
  "key19": "jXtp9fGA7cEprc96Fte7tAHtPD4SyDV2Eq9hNtuqADm3zyRDGN89XrzKPb7QdWZivWEDmhEGEHUoB3pUakqi43b",
  "key20": "3e893pMug1fQXuaph5HoyqUExh1f51Nt2uSNE6Njh5SMuNC5aUVmF3UX46qVS2WJbqQrz7vBtMsQRLMK7Czo24Cg",
  "key21": "3QRNpXCXfMXAy5tXXsMJoRj41JCP6urwKJQozZEZ3YRcdbxgaLquxdz3yjCFwg1f5js67mqvJiP6WTcdD6GaW1BC",
  "key22": "4rQUzoyxyCDoByd4igA5hQ46prLobLcrNhbbFGka46wLvprNyjJYXNpTnhxHFSXye8n9mThbmcHZ6vwC3w3UqJAG",
  "key23": "4GNu6G7pArBfdiBZHKKhRKMt8cKtfj1nmKEAHgmzdZKCeuxsKugLETU6Jqv2a3WEAqdCkm9p4GK3RQSQgDVJeLpm",
  "key24": "4336HYg7EbnYX1RhqSvFx52X1y4VEztsB9D6G8M5D92TMzTBSvib63ZiCGppAdf6GWNyizUDiVVNJBGrVmbEvCxD",
  "key25": "4qPXHtvrJLiydYk59KUfoYGsVSVSEW3bipZv4t36t3qHfoyxJd6ozetg6csTdwYDsT37n3fm9UpnJgobZKW3mWyY",
  "key26": "32tYBnthwhUkqcd4U8q9K2PpYbu4mB2sD3MpRBWV4XpM3wRhVJxasSxrML8NYDk52DQi3h9PViL1yjs5cbCRvCoZ",
  "key27": "2oeGnPg34vmfSqPaGuRXFPBwFViUxhbhPY14MrboGrLp2hqdunHzL2J8GEQomW3vtgTuDPksEySUREawzVGsVFVT",
  "key28": "5qr7sVr6EqkiQojcMkYA2k4tNCSFeVQncaTMZMMDKqWSLCiF948Sqq76CQ3Pd1eY8KnFhNJLNNxQ4p8NNtei9D1R",
  "key29": "4MVh73HzSPscxZagCnQ7JVwC4kq8pXBpscXahkfh5mTQuKdupPxiWWKaQZv86UR1s1X3Pnqwa923xjaUQGzn5Fm7",
  "key30": "LXLkgB7NZMiyYo9eAU9y3QMbW93vasXZxksgbDmkawjXNCxmAtK4P93mPupE8wwhBrjm4ooXv3gTsTZx1BE63EN",
  "key31": "3XMoKfnAUbwuYDDenbmPSwp4DgiFChrqFuDc8k4bz3DsAqAUuMY7e2TYPLZsMMKGs2aytB7HggaMgNo3rnisZi7",
  "key32": "AHBF3V7vTmWT3S9K276KMQ6xeo4y8VCh644pEAvD9Z9Wd6CJEL2ySB3fNXvCCvtxHVEJM4vNDKh3cU7VVJ1ea7p",
  "key33": "2b5zSvoeLMgHoK7Znjx5PqMWB6mPDCserbJRN1Ra5Gu7TLWPKs3C4QzAmX9tnpk6wAsbya4bugHYBZLLz5Y7x3Ec",
  "key34": "5crkUknEosQL3RToD4ekvsKEjFnnyWDwTKCuw1Nxa4XbwrixyKTWhCm1kZBFBQsH68wnWG38nyRmxGq8USVaBbHf",
  "key35": "6HMTTFZG2cqrWGbSTH944JfAnD6P8XcKJZwbeJ9zwDP6yKa9vrYZkeVq7EmJPEunYMF9iRdQvJfmjwGwn3R6n3n",
  "key36": "3Tqaur5D3kdBJdAUPmjoBCHfhMaN24gxFWSmsh6nXkAiLVgsDmCDSCVVe8UCxTPqvJ4aBuyc6Ru9VrvtsZz5xhwP",
  "key37": "3LahTpp2xijBKqtfVWtC3NNe8VhsxnSHcYJmLd5XNgDA9Zr3uSDBU4tSryAtRU6cZhEXdCsyF19AQqXJRrj5fnKX",
  "key38": "3z7qi2HDXgU3WYYb8HVcS76SLkwiBEuMfCNyhc8z8W2RexBWV2PNyABgJNHHw5u8CqvidmovuQGbmq5ZtxcgL5u1",
  "key39": "xAZJPT7YsUSp5RxAmpSH79zXTWVSwYjz3Xt6odnmAFJaJuntAghXB7dpgzZzEDyoRyGYLa3UXJJQSf9KzdEevvK",
  "key40": "3GRBAx8vMPJpWwDDDkiTu8pcbooqEVX7m45pfjzq1itVEJcL1h3NHQRmra1EpwRTp3yMiLhcQoK6rRmHe8tg1Qgz"
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
