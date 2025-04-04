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
    "3rCxpnKw25E6cbGRwjVkbG3KdiTqFNVeLGmSdT6w5VbLudxS7dVPhTkrRwH5mGTwwgYWmdXu1P2a7tHBeCEuUbru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g12q4B3weVrQRchqy5eB8j2LywR9fAN1GesDw1PbFnFoFyDBJysX3xZupuFbqKxVXFzD8eiD1WrBvpmMHoJ2MTU",
  "key1": "55KKgybFifSdz7XRqfL3VS3FPovLvRYkLJYmcFo7RdJMMJCwVe5Bajsn9i8upmjuMZ1iYCwAnP7p8zSvWM6RBspt",
  "key2": "WCP8qtUGZiSzVUCjUtETwox1nMVySnruTDPEDasi1N8K6TZXYuKPkEbEquTVRVb1PaBVk7uoCYd1o5RapFBepWv",
  "key3": "c6K65ZiZr726ofBHW2wLNaZjL996gFKjpVKviaFsYVqCsboX6DdzMJYCt3HXiPx9BPCKfVcrVeKw5geNcfZZBPG",
  "key4": "vtjwaidazuKFEvGY76bTBc2QQM3qAnuLuYxutACDGu5KKdUoignfaCbeq4kaQfFfy5KZxyHwHigAhZwfPmKgW6i",
  "key5": "4ZDro16GdVvpcLTy5tF7sV8pvXMzpjeKDjUbDQtLh94rLFxEgqrKQxSguf6iQnN7eMNcWqwbahfSo3KTGgF9917K",
  "key6": "4dNEq3ZiDheMrcWPRzkWCP3sHBjUt249Wwu78LV1hW4HhasfsuPkJ4RKThFQSYLEGsrW7iUtCjnBfreERiMLo2dJ",
  "key7": "4n7nZSeEaT31298JoCBS7fjzq8ma27a8VHAD1uoY9jh4yPV3VybPKuGZNB4A6VgBLLwxHBAkWcncPTr1itAsXLTq",
  "key8": "3q2vpGiq4BCdk9EvNX7woZ7ViGejV9RomNzsPwWCoqWyseYtHL6kDy7Zd1gZF2pGnJrLdSLURC4FdVvUvB1JWUxD",
  "key9": "2QGKYukvjXvVVJV2c4M8nScXDzquRjhvnG1LmcPiqx2VwYiYfiXCvVfc2X6KHYhm1ouBTVYNSZS2Qq9wVwEKoxgx",
  "key10": "2kkfDrhTj3TLCE4zGWCeAfhrpzSS7cZhqaAvqYX6YSAub5ZricGuHponuDzSWpduokTW6kLc9zyw53ne8jQZqhp6",
  "key11": "CLMrV56Pm7RLXkStW1g366ze727bgCsLDYMHq6CkJUWWg5PMjVC3Pb6fmsYXjeBL6Xw81TYojy7xjHy6Fkw1QLU",
  "key12": "4AYdH7EboSvtRHfanPMXTTMaMMs7pdLGgCCxzEJTNGzm6BfougvQCNhHrtTwXT3Hi3mLTQWjX8pPnt9BNhJeedzj",
  "key13": "3kUjncqFGdbWkqxsLgGcfXr7PZerTGy77G5A19pEWwdvqVuNU22njTZFZ6FjFVzKuNdifjm7qFdNk84VDL2Hm1FV",
  "key14": "c7fQTR7PDPbKrQK2EYzTvWhPN93cRastZsFFGBfuv2Eimr6CJKwAnu6sYntckDJDsWnG2zCAhyc4Svu1t4ajNYC",
  "key15": "56uy8Ed8DKARpevQbGgH7pYx7DxxNhdi6LRJmYbD3TYvBa2F44NpKLssDcEvaLnSysDQDmfLHmynqBTcAF6Hjoqw",
  "key16": "5WAeUFsWHzQKPb6YFzUhdmML1xGwDFWntRfNSHMPN4ffsdXBjDK8k4sxwbHMcKmWYnupoq7wY2UVS1KEtTLUa1bx",
  "key17": "2saoAiaGsxzjkLGzj9zefa8XUhM7QZPsuGSA6V6p7Y1dGmCcmMstgXbbXBW2eESqvYowoU7nQ1PKgZ4H1DgjiJvE",
  "key18": "4nB6JycKq6eFbxeD52kQpXRnSaY91WmhL9G2eDv2rG5y7Uaj1Phi2YPM1wzaMiCrWW7nW5pQZb7yyPKfopJne7g5",
  "key19": "CvPQb8N5zqbMYBMxKhVtciha962MVEjdzajPRgUxCJropn2Gcm3dpyTE3DvtHKJZbDkpNq89eybabiNkANCWzW2",
  "key20": "R4qcyNdWuiymo7oPSag1NvH3qtGkKw98XZauXr3GdjaQdKNyA5yx4SuMFGm8raBX4eULf4jk2QBm91fqGitmcKx",
  "key21": "2z5WGN1fZcDAHq3RUK6wdbD1U3Q94kssHW8FPg3vpVKEKF1rMJgQoaFnsvExStJQ8M4xCLASegh3dAMV2S1BckSi",
  "key22": "5sRfcW8wB492VZcaJ7q6AdYNBAh2j66JhbbeJJeCEAUuTiYSkofNS1DgpBwxcsFc6tcvQQDAC58h7ndLFG8j7kNR",
  "key23": "66SiE5zzrJXz37km7eMznZMTGwVM4fcjqRa8q5iEibpRXDL446pCeDE7oS247MzBJPf4xWmh6dh18nvNfnPGWmsX",
  "key24": "5qihq7r4Gk5CHKrt27KWKCd4Fp3j6f43NdE8XF2RSQqv94MsZCe4gaHnhiTcqGcAz6cmck2Cd63oMhfNPLYhwgr7",
  "key25": "3RixHctJqbiKHbM84sepS2iZ3QJ9FjDmZjr2xwS12o1ZsLCd7kasNrqeBmiMu2wkt1zVtzbVMmvZ9HETfoB9CV7d",
  "key26": "3hF8cQjwhDdtwnb2W9pywYMaSyEqn7GdtMeNshhdXMcgMAGoL8MQ1aSTi2YmQJRTbqJXgFTtsaHm5bD5f3C2cd1y",
  "key27": "5ABfUv5HEipcu862Bqv4pRHYAZFqfTu1HE2HcE5hGvFfpxFki5pHcQV2zqnNuc7rHgTrM6vBGVo18NkpZvqbtfn9",
  "key28": "4LD3fJrU8AaXoA1SRJ93HXdwmvSBKPdcPXab49cwq49yW7wZUN1QuvbWFKw83VZx3soD8mkC7QAdzM5xVM4Dz8hS",
  "key29": "4PWpd6eFAivFsYraZcZ9QnvNTZ19JfczQZvP1WoW5e32aMwHoL3HYsM6ccFqrrnuoNVymhmnqQoZRmUnH8eBQYYa",
  "key30": "2YU1DgRzXjJADQcqucNo6Qz7fRn1cmCwBffyjzV5vkUUjN3ZuEiu1VqGwCaivMyU1R9YdVKHUVUfjCbXGrQSrzjy",
  "key31": "261Zn1zQfC8TvHLrp2UAboEko7Lz5yPVWLhicUvkHPpzsVi3Usg7EzWud6AB8CpbppahLAHTcATVBMy1rkbv38v3",
  "key32": "2e8H7R9vMeUMgovq3TKAu87LTpthcYURox4TeAuEvYgttDDWeA5n5RrJY92pEasHqDYFHCGK7n5kfDsgihDEkRLA",
  "key33": "hPhZ56XbgVZCeaFrBbcyF82csDdRzvH4w57zJZmQstas2jgmo6ExH2Ckw5KAR6TzvUTVj3ujwGLX4heFHjRMYAT",
  "key34": "2JMAJaGZsPcScum3UgZnYvnjKNbsft7cWMrDenHBqxDVdLUC2gJRWgTb8cha7UC5FJCue4aPjKYCCCxS8UwetczX",
  "key35": "54Nqk3jwJP2w6n1yJ6G4F61Leka3GzBkqRAWpj7oXrjQkq3qedvQcXHEkTrTFbGf19gzpgrDhr91sWW1shUGYPzy",
  "key36": "5RHTkyVPYvgvd1YHD5ctY7VxfTSqR42WhzJcFJhXvZZ219FPGuVGJtBQf8Ax3VenQ61553eRVTyXVseFbEng1Cbu",
  "key37": "3MqhZW4Y1SfsdcqpgEx7VxXx79Lrx6mKLiAigSRhHdUUQW9dmTw75qmKzY1aNUwejxrwpcbaJyswv2Z8tnkK8zrr"
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
