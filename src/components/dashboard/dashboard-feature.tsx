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
    "4E6oJYFqst7TWGBGqE6utZp8AAbDhWgRHCoMvQsMg1QMws7D6hhJWAFb1iMCeKAiV32xyvtyUudfrmhiWupThFpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42m7KxDFNEmdD1ACZ9LicHRQP1c5bwGkabbCnBbZzwzAPk4b773NT4q5o2siJTWdpaoMm4WWHVgCDFuN8A1besCJ",
  "key1": "2CSGWpU2DhKAdmNTzXKEiBtxJ979m4QX7eT4yfKp6LbDjR9fAcgf2hda5fS9hpuvM5wEBKoDJe7E3T1XimXSHeC",
  "key2": "5n63Vc1jQCjjtbb2dETV1Dy6MvX67WRzYdUJzTSzLbgojragALqvnygfuev5Tumu2YFizbr3UFmL43BFMM6Y8yjh",
  "key3": "p3MWP2E6UFwgNfSdfgGQH4haNt8eZ39vhCyjc299daDPKpKmV1dmtNo5oCzoLjiPyv8WNgjKyEteGou6DuKW7Ay",
  "key4": "PTfzPgjmoofHPktYWC8VU2pmUzaU4VdJEjkJ7XdKBt373YfczGFaYcckGESfkEXzattpVb6yBEQRyJV5DmjZLSc",
  "key5": "Bw5bVGnUobB5VaQ6mhCbA28tJYnPcXufVMHs1HhNugc6X6LmM78pEwJXm6YM7xCMecukMqGrYzBcwqwbAzBoBGE",
  "key6": "39EXYLg8QmXfbM5HFdRdCoVdgxLgyGmXW7i94uGiFDrnsLAdY4Y6th9Xc7xZaPhKHfUXLZu5hE7mveqeR6aDq7m3",
  "key7": "K5jJWLRaDnZbtNU6Vgzx2Hd5i1FuxwTMa6QWNmK6AKh2EJduXynBUpoQG3KPgUTuGmrfHdbhY9B2Jd2qa75wQfV",
  "key8": "Bt9uj9YMKNHtfSUTXJdhNnREJ5L657zc9mnifKNfYg6152b55md8cT8jqEraGTYLYypF7RhsCdFZNU5mXL3JH2h",
  "key9": "kWbYW51pDEadoZARwkPYrHUBd9KuY3XWsXzBrm9cjQYuXp661ZanfdWzYLW7sKv38t6aqUW9AWEuzEvohNTqbgb",
  "key10": "2QK9aQdJjzu6N2z7cAjVvjm4d3uBXrbywpfgSzxvmxCeHQuzMVsdu7M1RrfWXBjmsZsccye94Dr6nEvM4nwpYiqh",
  "key11": "3wHHCrzqDJmmiqtgQ7RgkLESCYWWe6Hkd1vJPnNMkAUj7vbP8GABjv5h4FmmCUfhxxXkLQTcVzjUPp6GzN9bj1Fb",
  "key12": "2NkjxEnf29vmo1RLfDbifUs11guuGos3FNpNmyGCxvrF4TK6AH6Fp5QLx9d66cMkoNeYnL4iSLvnYQtVZiyPY345",
  "key13": "25wd8G5jAkS1R7B9mqctFdEaxxBxCuFzgbABYLjYRw6YFzd5ehXn69s4iqXo89uysCqPsHPC15XkNZZ1Wiitjjjr",
  "key14": "3TACtHY5vbed8gcQegPYtVJcqmFsyvUNrB588yp54VhhhUGPrgXNwUadUQFdC16VSzQY5y1R9TdsM3ZaMhLaXqCQ",
  "key15": "4f4ovab5nDnANM3C6PBycTQDDoDCmPxvJ4WxLoPtQvbC8xdHv3WW8u8CbJQvH41BkxRibkPh2QPaZBL6MknRcGoD",
  "key16": "5K3hUHiK4CDW81t4RSVZFSKx8nAUUqXx9QX1qKnErr9Qkyj6t6A9cjC19GckwC8zU4sPBjP6wKd9Nv1dMu4jckva",
  "key17": "63GffutGMPG996Ud91h5HMb3vyc4MxqqjunWnf3UCfFFuTDGtozfArxcZdhbimPAmxXY7iWa9sRzUecmyNUTLRum",
  "key18": "2d8A7voNDdf2R6TKJWwN2BssiDg6FyGpBMtUw6uM1cAEB2SrgbMbe5yQXRk7PuyuTyPyKiVyNzkb6g9rLtn5jQf",
  "key19": "2FPS24rGZKg9TH46SfQDT3TaUTS7HGaUCkU9YZZeNnZm9AfP5RizdYpFm2KoRPvopucNaSBHM9BBNSuaT3Fz3AV3",
  "key20": "67PXmMs8FXRH3GL27V7XN7vYbMWczf374cvYnhSJUrm2Q9PmoN4MkQzxKAyAuL4Fgo99u1znjtYddwdSiKBxYjCX",
  "key21": "9AiqJMJ3bYmXjF8P6mYAb9LajyUCHfhojzmqE2LZ7n7KfbQBUV31Rg6g85NzSCk2dgTHCcGKVbMg137KfB7Z4iW",
  "key22": "izk2jJpGQ5fXFvg6rCmHYPxCHsw3PNfgya7ZyUVqN1HDJnpR3kjsooBp4fUuct98ZecaVrRHNCwXEg3sYBe8MbV",
  "key23": "5YHPufhCaBMj1XgPcRxZKpqXmHMKDZJXs95BCr61zgqpD5UswWBGGJbNxjWWQABzFECodLu63Rnzq1wSnFCxhwG",
  "key24": "4zS61wuUwfxxU63o8eadTvTqjnAFbqeuoYyzYPYFdbbmCNRv4dKg2s5nYQwMmMS3Pm3cfBT7BaNYhnTLeqAdViKH",
  "key25": "65oZ2wiShr4KG4gHYcsvzuPdNyqPvm8Y14VhoJS98WTJA26pyEkkXVT4C8iWEW9PfmGXs7Mg1h45VGegANG12RUi",
  "key26": "4XUgxrycUTTadGKKgtoQpavKmhuxs2Ctx6MymhvTWsBh4ZbvtedLQ5aeayYEYyxsdkrngTZoHgCVzpMvixEGFz5R",
  "key27": "3mUACYJ46bb2be83nAKmpSot1AksRMsKvatYC8pzHBjP3FecJbxwfhgaN1DaMdFziou2cxhxuzBvU5GDw1yZD2nm",
  "key28": "4uMG3v52z3CGv4wNzP5qZMVCGmq4qeHq6ENXFPXncKPwLZpTUXH1cukfThniNEc482UFioHL92JdGZvAAki6vX6x",
  "key29": "5JC3VSTCjRXqejhtpaweUV2Qqr8kSWskFCiw7Zoh9sejWBM19NVbjMofLnTbXagXnEFE9wGXuAmdinDHErpTPjWT",
  "key30": "4JHFi5pVHiLXrZutVVZLGTdxJxh6uBU7sqGsMm5nK7Eo1YNfcXZCcu4BiXnksTN4Pp6nwP6GvF6K3Vzp5v8nFf9i",
  "key31": "5WGeWbEEY2d7i9o7omyDVxLmgGBmLwVCppgFeeCsdKpHKXaideKqmFNmcmj3MrKj3LoXMN3v9aP5MPNi4QYBmM2G",
  "key32": "47mGnTA5iCA6mJ7rvRGcyvDg2J6Gt7rpBd4zNsuBEDhcJ61fLxdxGv88bGbVNJMCj7L5Uw76mZK6UDNjc9SBmSy3",
  "key33": "2zpXGwAK7VTwKs4qLu3ziBV7TAxqQgXoAXS3oyMMk8CXWiXYHF81jfqoBkmPLQtjFNFGsDec4U2cvCGd83R5d9a5",
  "key34": "roh5h4h4QygCZU6nfXxHHt663qmd5HjPrA6bRnbtdGZtZoq8jq7XsBSCFkh94vnSxJ1qMs37f8ZkvWEG15Ze3od",
  "key35": "39NNDHXPLHGmEm5QiKCE9hpndzsjbCGJs2ryvi8Yy1vxwUMNQpscX3zuYeRvDg5gsLNSeMWEpBNzm4abUJKmk1ny"
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
