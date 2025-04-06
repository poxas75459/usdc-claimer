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
    "5g8dQBj642ksjjKSygTijHjkvXDVzGkqwyNg5C86UjSDU2btXaCmCQEVEh3AtE9to2aDF4EXLWm2KHwTnR2Lvs2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QE593UhaGG4i5PfcNah1vzTFD3XEBptnzezFBwsycm3MbBa1g7mygW17AYHmc9X3t7L6Yya14dj7YUJtETfVTRd",
  "key1": "5BzhtokAUrzHvHq3hbjb7yETtUTmVaa3wfi2ZxJAYgwamCHosMUhLWF3FvwB2CEYUsN9y3WNt2HuUNmBnSK7gh1W",
  "key2": "YNjrWoWwbvw1TjcR8q5gx13siRWSduNtqXsBjw4mdhNHMLLuw8A4wuMR1Go7qVrjUJGdRmtFFFNSu8vRFBtf9or",
  "key3": "5zC439R6U3n71eASjwdCJUNhNtnnYrPiF8dFjXL8hEp8yZcwex5C8ZVgrENHeBcheq7FP4qjwtg8LvoNaGcbSnFt",
  "key4": "66m8c53Dd6LCBXmnB1r1kj6B9JgDdjW1WTxjuBhGitMYcFsjcyVT4MWtkxLRxpQYassbkx51igjVLtMKzGBoykKQ",
  "key5": "eXjmoYyLWDpLoPWFPRfmfXzXEV8tzdU94k1qVxCXHbg3CTpEFetmdLLgxZGstKr4izZCAfCCJmzkt55FBFkHgsM",
  "key6": "5GT7fC4rHRTKPLch9s1M5NWUxkV6eXjscX3jXFBDXUUM3jmJbkgbP9d8U2dJWrKiW4mX5KgsXjvZoyvN82kWneFK",
  "key7": "3pXBU3xJLJu2pZdAMMAgfvRZ8CZoXqtmBSHm2aBxbWExxJ3nBhFHRLRZNvKqHy1GPERfrVEDqstoGSfsVd4yBRH",
  "key8": "3hcv8LL9NRAYZunAmgnrTaf7spSmtjaAhiuMV15yC6ndvBbXE3pgteBP8zW5XeM1tJ2CvfBmK4o6xYLsyrgkNank",
  "key9": "ZJVJrxwGUnSkMUkdfcWSPwdk2qkooTu7yC26bBfacqy9YZpsQe6y9CSRDa2gdRacaKgsvU9MrUH85UNNsZFx9fB",
  "key10": "4WtqzXHkWujtTSzrHnHTUtNosB8GD5SYE4tx3DQdohSEB9ir56cPgTkPH1bfxEX16NuEpeC95pw7XVCd9MMcx31K",
  "key11": "2FpSgdWK6grpmvx8od6zqUhvCoExthyYvKDL2YSBYDn92MPRZMjUatXBX27C67bGKheLxX1DbeZ9ZEKPocZYZNqG",
  "key12": "3hL2ABNN3wNPcZdLyuy55C9KdbL3XeR8jq2ZkzbZkL62nnz6x2yU6Yng6bdne976Kgzh29ECPPqm9CBYLnoZB9sH",
  "key13": "27zoHNtAG5pW2VL1RQPxsYC4GJfKVcr3Srw1kfNDgxvjX4Ne9RuiSGWwJ37JdheMjVkLpHKZUXs415q5mZLToF9r",
  "key14": "3jXQ8dLAY5C9m3t1ohsR2uuN469RZHFpUhphJHKNXfnFW32F3pFTve4g6gGVXNHZsaUds9UPtuLUXpufv42qpTTg",
  "key15": "2LCJxrkxnLKgCxWxqyPEbvVSV2BTX39Vp7Y6SMsnmcEyYMVkKHHqRFGjw41MLweUBgmvzHxjd1Gtyc8mJGKHnweK",
  "key16": "ygkmoUE7U8LYsiXEHSd4YTh1e92aji9W2JmMe4qFnv7gsEtCTmKzsko9U5obfNGiWdoNa1G8q9ZkLyDW41ES21o",
  "key17": "3abY4x5hkNjjZ5rHMnerPHMp4rbvXwsjKm84QqkUpYHAwSkbCJRLMv2kkgaNQhnxkWxfPoHb76PzCNRnh1y8CttE",
  "key18": "39SwSH5QHJYfzTBJ7qPJDanJKWkgUMieceR5hM75wXDQDwVzFBsaFhxF2XJv5jHLyCrHbE18pD8ykqEkXHanZHit",
  "key19": "waiwHijBsdzeAYrpwun2nLsDLzY8Cm6FFsE7ZZCSvdakgZcZ6ZvXrPphrz62ogFZfmvM5LUpta64pXGJwsT5q84",
  "key20": "54GVNbg8RxAWrbsZeXVg9SNCq4gtR8CyxnQPpZDbizYoXLpEUE9FRr68UqaDLkaoERjT6hnWkCqyyzgY7pzu3QyR",
  "key21": "NDBXVuNY3wZtkxMqyapfYAmkRxMZ1o9gY9XVivELTu4TDjHLWzFCgFw8upXZpsN51zAEpXPqYdAe4rr5tjUpbNK",
  "key22": "5nWgAxLFRSxJ84t51ZAxmuCj8w3jSp3oFXoLa8EAeWthZMbUmxwzghGu4z822qPPU3AbDMCBGEYCZwH8eDarcvWc",
  "key23": "2cv1Txp9sufaBvfK4D3SHfr8e3sBaHRRahe9yjWtuQ77HqXCUKtS2VtYyU3nf6FxZ9K3YUowFnqpQmF5xneBVwod",
  "key24": "ZsQsgCsPTEdSFzXFsQLLqN9hGFK5nAc3UWAGRTdA4E8ExqQM6kPnRmajShSt85dMfQMJrgyvscVc2f7iHrF7fJM",
  "key25": "KZJ5cfxCneG8yVRNC79khjCBSCsJW9b48i8KiKnGFnU9cJu1rcdKQ2QXXmBu9vDYpZ4giLywLKPrZLTcb2wBRaz",
  "key26": "5ipzWBuxsWuNhxDXTRE32RK4fs2eC59Kb3wRVroynoHAz5nJtVEC5ATkUo7Zu1u9HcQJP8zEzQHYA7YVMbzbdiWm",
  "key27": "3KAZLq6RGBgRwQF1rPMCt7shLQD7ttk9dwzUAaZkThSj2K23Y5h1jMvXysLh9DRuXHvSjzaQLxfePdxii292FLmu",
  "key28": "3VJ1UfyCeHV7djadySCDqBSnuKT7c4yg3YtU3U3Q6uKdcTypY9Wfg5cEyUaiAW32YZ63XMZ3L82riRPwATc2MNF7",
  "key29": "22rZuLsgGUSwS13K3KySngUzRfUFcEtSzAPk8nhhTWSXy6Y8wK6BXkFT3VXWvU1jdMNk4w9iYW8yRb2yPvjmwGXm",
  "key30": "3x2ERZL2HUKDD9q3svSR56udyZgfgdQRM9YWW74ZAK1ACWyvgSGEwdEmLq9mkxts2EGqFHqzSerdPAgAeBKRwgse"
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
