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
    "5hGaQNgkaAxZEKs4HZcxRV57YjPaiM32V4ApA63JsN8mvQNWFMTLHRfP5gzBTRes9mbJM2YbHvDkFb9FHGAZvFG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h4cDA7VZy5XwPRM7YvnKyCg8vWJgzJS86NA96oxsCFw2BBfZNf6A58ZXNtELJJecyrRLQSjpi8P8tFLjFkiRUro",
  "key1": "55RB67H5owRB2MrM581rHcAmdvcRSejM1Ea5K5V1Fh38GsoMP7sLG2xHu1BHMB2f7tQHXR2uTksSzmbe4uugpcEv",
  "key2": "5AcZ7Ms2AgwxGuaYLUqbz3KWxeKWGB2pqvYhbWayvdbnTUoxgy8RBmbgFzhm1zjy5mUjXjmPma7aYQUPfAV3Kf8P",
  "key3": "55rZ3Xhtv6JFpyt9wYTBeB1zAsyvJ8iQDeAhup3E3SLRQADtBv8iUysVVJ8RQVtGfDpn7RQ2pvEGGMiuWicpHBSz",
  "key4": "RTMorZGbMAUwMphCDBqt9eguaEJinpE91ubKAPrrnXpm5TpNjV34rcMAbEXQ3n2xQgW42M7wfc77XrFaKDymSAE",
  "key5": "2zfoVBgjunbBFup432YPTFvDzRBPgFbV5QWy5ZjxqMzy56GjgcEYgXAdfyvLgu9NhXkAhzvecYQrMvdAAWX82Zuk",
  "key6": "2sTvXvtxH8nnbbsijyPFSWJxdbfTjqHdjXUaoRiiAzHGCiT8RzrKAFcJLzh7CA6FB95NCDJqvJv6BZ1wa5zgGrTC",
  "key7": "5KwkdLDozGjWc8f8d7zaYhsEq5bAzP41pLzr69r7NZt2wVWfv59wSLLzbMXKM2oWBWg26p4mTpA1ftd6bRNvsTEG",
  "key8": "zAYKmvM5Ge1fz2xATb4prmzf2t7cEynwPGg7isKYL9xEvakn7Kg3vyCkUCveGhusRaHK7D68pNpz6te1zUnUgQf",
  "key9": "5aymbNh9WCzhyLZav2SrkwRBuiEmQTXDJUk214s6ks7rTfHMJg8easGvWtPBukwbd9QRJoMi361DcVUZyS4L1tR3",
  "key10": "3xomsv3fQ7jdwNJvgXQ1tYgc2cwX57AS3sD1TTRkuLa1822G25SkcMtQNoQ5JJ6CiUWGkwmR2PNDSnyaDVoAcY6f",
  "key11": "3q9d5jWW2gf22a8jqoRWQuN26CdzCgXnuAThdexQGVau1hmF1EroBqFMntPpcay8CJf4NTuZbYHENwZhvjjRRJcn",
  "key12": "5E5DfQtefMp3nRgyJ5Epwc3Pg94Fo7XR2LCBqbbbHBzzqJ4QhfYT6bxtzR2tdZZ77tN3D3agQgfLGxWLQpksjFPj",
  "key13": "2SqvjMwA1TkCSMuzYscttZHzhLJQXuwFbdanUQJaZoLxyaYK9gyoKYJ9nRhLaN36eMqrkts4EDDbLKrapX2bVkA6",
  "key14": "3tatm9LbeadijFAKQbseSBnAy9yW39HNCjTbveq2S2cMnUC8dcMeFTATJsjUojv3He5yXpvjnX3WvKMkhg4iVUpd",
  "key15": "jTK62TkzXgsxtNh2qaPYYADg2Z69UKxCLnLVqxHyWS9kUrZvJaZ7LGBiZ9hR75Ywph1ND7JZoDpK1mBXU3Hs3iw",
  "key16": "4r8nvzkDhWnFXVu58ctddDhP7hPNAAbmSsReBca79YcWHWTqmnHEZ6RGy2Ga72LuU2nffq2o63QsmiCE4GWdkStu",
  "key17": "PH9SKPg9YsB6Mtih6yXJ8qJWKbAzMC7kP5YGj4ttV5tPBp2yWAixgaDRtmJQhw9KXYkCBChkbweCCPAA86EZuYe",
  "key18": "PTgdLSH8GmiB4wPoSWz1ZNdnEt9q1tmgXgoo4fhpJME3HwGLXKHS1tk79g9Wnq2LczaaVa3XiteTZ381MPbVV6v",
  "key19": "26NbUKkUaCiuhHTgNRZMyssKedZkA1nPqsUYXwzXsnzWjC8hR12D8qM67on4RAf5ni9MRpv8aJ3An7ttBS1WQfES",
  "key20": "49uMrkqjgNT2dZhpT5bLBPQy7PFaxgRMKR1c9iMLxRZ9HcNGZnLeWAb6c7Tpu538vaK3Ppk71vRDQ97dRJmeJun6",
  "key21": "31piDEYBUMGLS7kGmmiKVVSr9ADitBUxf1597F5naGCEJECYTzQH3AndczxbyUFSDLg9DTSxKpTkJzQGHSte5PsR",
  "key22": "5aMWehKvmiWRKZB51D56CHqBoUzbDgu8L524jCuRgmCXXEkd7XyJgL3hmGQ661Mhpb1WeFksNZiEiMaH3eh4TZxg",
  "key23": "5PCKrZu6mcV3vZHtwQuyrMpbAv8mK5HTANLed1t65AiT5VrZHhpZDxHsCNtFUS4VSNQNopouHrvz4PGzMeJKqsCq",
  "key24": "3LqCxbVyxLn9WNjVPzkV1mThWw9UrVmEkYjw9pEXbZHYGcx6MyQ9J2yL5PkS4bt9gbdWHscLRY8EggnzpanoifpE",
  "key25": "2bfufF1fDMLeuYwRzJuCiUBQAdrfdJ6MA1QXSsAJShRuMHAJPaktpREwzADo3Ngtfuss4Svr7i7xYNW6fCyB7npV",
  "key26": "bWc1eGRfVEokXKx1uboEo22c5J7US3rPQWhaWRRCPvNZzsc2inkggJa6Ws42g987ziAadzRS7VqvNDbuTYdyhe9",
  "key27": "5DPXMr2BiLKFGqnJ95BMqUkNcwwkyPQ7z34VsBup4wexGxt4psrfxrPK3cmBZJA6P9ahXPYuhsy1VxZwMCMQzp3a",
  "key28": "35RTNZ1NWYMdHbVTKLau4WLGrDKtVRWv6ZJY5GvimZFPEGJYYsA3Mqj6kKtHWLRd5kPUAFoukLA3XxiagREA8R4G",
  "key29": "9AzMmhMrzMTjnh3s1G1RcqNCj9Vk5gbG9tDdcQmAdS8yfNb9hN88Hw4JuQi9pB69dJAigcT4pZKs9M2tNcTqzcz",
  "key30": "sHzzHoRo9fW1doq4AaVWqhXYri4KmYd6xCUHjsxRT7Vx8eCo3tyo8PNgcqYaW7CjJBYZiiHJqY6CguqJ2si4xRs",
  "key31": "5AZtgyNsUL5HpxHJDyVyZm84gBHD32uPMnKbSqCt7eWdhZdXRQM1iHQJfX4QYb2xHxYDZEmUxh4tS3b5jrndjaK3",
  "key32": "5U79e9X3nct9DG1pA1dJDr4zJCB3UMc5EvnuRR4T8YafYU1XNLRgiRhtRqFcUUhDfYy1ovtsWWkJ11FnhSdAGJiz",
  "key33": "4pAyxnkvzzjUTN1E77v1CQQ87VPbvx9iDMktLkf2fJ6uV4FNcvVrngbGy99P4ABd324uCkdg7iwtwyTLAxfN6a94",
  "key34": "2bG3adcUvJrkMERhamTjw8gzZBeFLvjkpAdgPAvy7RE44cjML6gHZjx3BHtmWoQzTwXzKVN1JquLBbvYde3xfEn",
  "key35": "28D7nWNc1R6j2Fs22tKEe2FL2ueoj8uHFveodPwsSUgPYEeaznusuNxc9ymrXCiWXQKGvTnW2Dr1PBWAMYhaLUws",
  "key36": "2NyKhqEknxsnP4QgzkZLu7Kyo9sWAH2j7k4JkGPNBYojAGn8xRZLTEq7WTaGYA7eW6eiyECe4Rd5UC4n2EFZnDEn",
  "key37": "36C4vGH4BUDk2q4vhAoGcdEGvxhWKS6ogPJhcntP3NH3QCu1C3LG7V6YP2JzRobt841xFN6zS7ZhWSVY37AR4SL6",
  "key38": "49TW2EBptr4RQ3QKF6opgy6oQTS6F9VMsK4NGJKL3VWySzMugwEg7mRMjsui7pBbkfukWUhoxS6NfWQczq32XjMT",
  "key39": "3jZsmkwCqmtHh1eYX7M1hHAedTY4ea1eQbEFWHKapiq5mva5NQjdJ3cR6nm9Rr8Z8PTmDaVuGZAL5teuQgBBiAPq"
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
