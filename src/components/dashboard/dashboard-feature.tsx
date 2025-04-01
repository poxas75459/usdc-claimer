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
    "3GLnutQ3xoYhcBb8eWxEF7kc7VJRuFxkPn6bPnTAuR7H37i3gmgAuRw3Mc6h8FiWRHqQoTmcit3cJh25aDn4F2Jj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8zN87GhDqGhuQKqMyG9CqQRzfpthLfLX2yGE4c7x9svd9NyuyxaXrZ7usBehtD2aCEFmvbzxgsCMg5Y9oBeEKKN",
  "key1": "5VaTJFc43k2a5JeaUbuAYz15nGnVzDjPMJpVWsxAanQhu2N7qACDGZ7hzUwFcPV5xeNyGAkRss8gjP2WZ641baYe",
  "key2": "3ianm7L7Cg9GPs8qhURuC9k4B7zoGV2eYStuj9Gt5L3DyVw7dG2Foy7zxrEhWUKuRZ1NQAhtGvCvf3Pj71R1UU19",
  "key3": "1tK9hG1f4dXQ24bMsaXpFJ4DNaYa3X25i2WUzi5DLn5nShKs3DvUoFgDWHU6sE6rGKqx8AA6NyxHfo45gERmN7X",
  "key4": "issLtxrkm9XetexBzZdeoKKhmtF7j4ogzYM6LoFb82YRC48GY2aMWoAJoxMNjhuRNQqMwSf2c19Jh3tpysc5ZqZ",
  "key5": "zAShnTChhZcbWfvhKbxzTbY2GpSo1vx9xt4sR7ZY9hJbXCmwuxba5oigqGh7az5Z48rPWtYF2XTGPMXpDLUeztU",
  "key6": "3bBjCuopnWhiMUz9wdLqDHJhViCkPGt8B9RHvG3faSUe3ZrGFQZzeXywLdih5DcfyYEMTa9PL5GqLDrBPubpwy7W",
  "key7": "2GrowD42TCJ38TZ6bCHqv8PS2xYtvVLWVK3yHD4e88vL2pZaqc7RxA4U7pAAtdLL2KsTzmjFiru711xd88q8xFTb",
  "key8": "2MU1faL3WmVUSeqt52gst6V55XNRUV3sx2H81Neq3X5LH34RLvXwxT4VWEubGd5u9WeSnSkXpSmABEZ4hZFzXHrM",
  "key9": "2tnEscaGH4Bb5u1td9EinaPRcYRi76dYthGWNwaZ4Y6sqgW6wxwpQpe5P6fhADc8etDB7f7usy9XjjcXLRpZyTGZ",
  "key10": "38vdHT5fgY88ztb1nKBokmpeQ2rhiR4ngcVwo2Ehdc32kaFhkMcjNJDvFAsZq3AbhJpj5xz7MDbr9596XxPDrz4B",
  "key11": "5uAp83KbDBcZoYLL7MuCfcwcRFbH9veaQQpNU3DERHtXDWzriFfdZwUvrn8odzLyeC8UmyYMb3g2FFz4o3bcW6p5",
  "key12": "9ziW53TGKrBhGSUDuX5Ps6yAdpvbYtMzgLurrDffgNtBnXpahtoVHKR83CgtMwFL6wkRprb7jsJBNTLfU1ssZNQ",
  "key13": "3Jt4uRFseYxuYFQQXaG2uca9y7w6nqQGbDzrevtrocsj49k7nYzHVxJGAhufg16RpTH6a8pGremAAe2nMbX71G5s",
  "key14": "3deFcFdwXwchwBQXqtFNgjifNZGtGfDGr42LDdvgv38mLs2pemikygpyUDJ98nSxmavESav3Lujga6rAKSrujJ1n",
  "key15": "48LWPEZb515F1btxQ26qsLiM1DiyYnCmKsnb8SC2RzCePNwJ34LcAsCMKRXBUNgqFAXULAgQbjZMCPQhU4aaVUkm",
  "key16": "5UoCaTsdhW9b7CHEHRFB6wkANR33eTrcY2to5Qw3wzM7ArgUH93eBXkYGFkXMKbB9s41oxkntCEs8HZybA87f3bu",
  "key17": "5ULUX8c7JJhsfxN5ACyTF6ERZr2X11mmCJemA16v7sjEy2G1bSDde3Acyzgfn27XYR9EeSdtcTKj6uU6c4pYC5gx",
  "key18": "4GHLzRn4Xs4nNvNetXfJb15q65FYdLF4CnJSfx44mFJex21b7tEVHKLwpDrqrX4KTt3GwBhk1GKNTzDzFHJMGFht",
  "key19": "4EPzq5J6F9AAGAEdrWfcCbgudsk6gdXbV48rxhFUfeqibvLsVcDZBz4dRD1uJUPVYNg4msiauQGtCrTFt9kkpbDv",
  "key20": "442ms8kcHG4Hg9xDjyLJB74BxhrK15hEsBcPK83u4LCS9UupqUTn7yfgcaXNshLCGxQKq9BbPQ8SUu3QrPSFReT9",
  "key21": "5ximdjAKuo8PeHPG7Cg7jnMQ26zZ8Xh5SdsKQRMjnaB3dcGmFxaozDLa9GqFYDxmjaH33tToRPtgbyBzBc1smors",
  "key22": "4Hvb1Z8s8tePo8G7REoPwsW648CFARhd8Zo9ruLwrVv2KQStS2M3HofmAFAVnWuzAPWcrsJTZa9oUZ2maPLo3fdQ",
  "key23": "2YZv1sZZeTEwfykcj6iPgCJwZ8JQx8GaCSC82bVddMfCGsNNWzYgBj16MpaS9n89fo1VEmGXBPJZJSMUQPBL2ynw",
  "key24": "v98oE2PtES3Nt7oDn5eWCrwf7capaJGD7zjbVgVt5wkyYDsu13YiJ9JLgoLyxrzjDghH7xUosJG7dgzUaVzpJeW",
  "key25": "5f4K1kaXJ4Eq2VE7kpTTAH8s6vfc8WVEvDM93yG5a15Wbwy3NKu11GSGkqjHbvMboDbB1WwX5qB6Cs1ZUp3NV6Qr",
  "key26": "3hf3AJNePdYSHtj3qHDLDXL7hkZq6TD98bXXHjD9yYd63GWGKaZYwEVxQYFdE8tSmZSFw4PepGoXTutxy3yyazFQ",
  "key27": "2t4T8NQVv77TEqM1u3aeuyxk4CgNaJjtrvrexDk2fZjxCHZVg6EPt8VryhcQqpk4cfTEx2VtEGgxWY6G1DPqyphn",
  "key28": "2s77HR5xfxUPPZbWBFvE1MX5hF6CtMNPCoTuobL1ovzytWBEfi2nPm5pezUuEswZfMpJBJcnAvSuFe2wYr3Fccph",
  "key29": "218maAAiuQJcfMLKvbLw4faxmcMobbP4kLCrDdqnDB1mJgrKU63JxTUcSthmwrHpiiinXHRbqHF3SmkQXMvG6WkE",
  "key30": "2jLRRijbmScgradxmC4inUxT843CQmD6hJ1keDKyD9rLLk2KJXNSoZSoyHLLBk3zQ8rLUwuxtN2YhC9rDuEyzaeh",
  "key31": "3uw9hQZTkb7hCBnPDZH3jBkXd6yC6ECHdsJ18ks8oaeDQs323dzG7MPYWeedDTmSLZ1fVG5A9Y2imf8ShML5E2UK",
  "key32": "4DwgePoxv1wRqCAcB9MHC3UzuiBQ4tZdYUTarkWyWdhKdhW3ZUVKEzSqiMYtabSdPiAUUjwSZGzggAQQSa8PJHx5",
  "key33": "67DjJ73Nej8MVcdTSd4Q18Jb3wAcJV2VYq8p1U2Ndk8LRxmtcdvpp9veDQn5YGPQJHrfEUWzFegsbdcZVU6Aog2r",
  "key34": "4jLZ9bYhtsjfskw3sARG7d8fBBGVsuh5SFkXQXUhHE8GRcZCPkv1kzWAKPhR5wxDbcBQhhqdTsrZfRiHqXkgxKX5",
  "key35": "2UDQhzNtyaPpXZxyAgc4mS7CjnAZZWchWwAtojgais3btwgsgAwduQjAbJjtzYRdqjhjxQfVQQoLesLnB4WjPbCH",
  "key36": "55W1pvhiZs3hRYsqh2UMUa4oqVUfNMqo1tiAKZZojsfQvSkvdcPSSYTgUd9yqhmd4JgZucvmoGJoLDehgRAF542w",
  "key37": "43HcuDG8qWMqsysypZFQuqkzPc1SPN9nmKZSTvBuRu7K8ccAjH81CBCmjzfFM1SQmdjWnbh3tChD2K2HAxYn2Eg",
  "key38": "CL17VvMFRNL1NqC2Rzs8KDLCAUnntngrDgC7YFycBH7uHkD1FLPpHBz7Syp6VCz9Ah8BGPm1zywvvFbTFprpprc",
  "key39": "4cYkfqQeSxfYeeWbhzQL6yZ9rNCeFtY2kALxmG5kJZnfqMpYkw58yuGTJTVVkjfNiBa7ZqHDttCwNRk24NTGHwh1",
  "key40": "2LmCkrvmqLWFro4kneSdMkXvbAi3MUhNVobs7mY8DcgJwffUa5iTtvPSvSwMHAHt4QrKWL1qskFNst3dB4iK5rve",
  "key41": "28NaUZJ5Qh7sH7pszQA6naD3ptrgyoJFKa4WKPs6MZxZmz1xFfuZkjQWFqbdkvEASDiw1fj5i5Nyi5pE75W5MN9W",
  "key42": "52yDDQEnesRNTcVrCjv5eMfpK8BH9u5789Z9UuwDs4sejRZZTAj2NEucXSj7uLpa165gEVQHu4iLffMnbGesz3hb",
  "key43": "rG6JAADdooYxuG1XQR7UaN9zkcdDFFtivM5CPL1JG28MqxKaQ3jvhJEwMGvaNvBFoCvBHjmEEZDVGJb5SiCDsdJ",
  "key44": "5P4oiyrsdAh3U1XWTuQqzgVCm7yQowP7nEXPx3QkAQEDdqmbamG62tbZYJEYBWqoP95Zdt6mUBWxEVnWSAUmrN7P",
  "key45": "53jBzQ4GAPJgEU5iY2Jk4BWXNzZ4USLGMXSLkiB2pkdbpViRzrjoTZ1NHcGT76RvMNPvYmYX1xhRp2tZbbpXdvnF"
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
