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
    "5tV2t2h1n99YR9Fwsbw3FAiBaqCKVH9q3obEJMRKQfMBjiwxvW6L8yHnuguGcHHKgeyMqJoaF1Laiju8Dqmu3dyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27dZx8rsnYp8isxmWwuxgPYwHsmQ9R7tybwYHimCVJPjPnjEQ549VbETxn8sYbjirKP79M98nEuVjnYsdvjn6pRG",
  "key1": "ZVveDhxJnaoWQEV9ZY4WCorFhfWeyA9PAhUvbyFxvofLDUXG3JtDdzcFNxs51n74Kg2c1PjLvfTn6xLrdgoJBLC",
  "key2": "YrpMhFRBAtQ3AQ64EyUzArkW7iWParrWYNfJvfPaFzHf4sJaENuC211YvZgEtmhJuCqQaXKLhuPSXLFajUJLH5t",
  "key3": "9boThY8Qdp4U2VJ3WZrNXV2c9ZRuv5SkQ7cFdj7rF9tSJURgqx8mSXbdmGmUCvYQW6iGTTbeGy7wvuhGnd5SYgo",
  "key4": "2W7A6rxC2NQX2jKio7cSkc5M3z2CZjRP6hPXXL4hLU65NkkwgX5zHtzVzfAm2fy9NQrXUcxcaC1ddtf2UoeSLPFB",
  "key5": "46BvZ2SFYgUpX9yM2W6axVeQ4sTyBD3LiWH7jTu61CPAE8YoCDT63344NJHqcs3zzZTK9umCuc3r1Wi1cnyyK4pP",
  "key6": "2wum9yEZAb2BkQQhFV5befSgbCs9WviJpShUzjzvtBhozcHcd5aVZDV2aPJFegt22pB9Wj52wzNisTi2sokumqg2",
  "key7": "4ni2494umrKpz41qgGopz8ZJhwvET14FL6TKmyLWcyJX2RNUmZiiGFi7XjpUPScjkEu2Bsg95TeJbFdZReehxPZN",
  "key8": "2DY8fZUrYAUXCsLTMGfep6wiJRFu3FLmheE7NaLGf4cjVrqYFBkN8xiKEurz9cdxQV5nBURURYx1QtWzoNCy9Nev",
  "key9": "4qSf6t92mDY7dLUz6GrNSe7k3joaSVuchtbp49o816DAmptvXjiLi2mUB35SDSCSXH1sLQT9HotjJAdWavqMCe3z",
  "key10": "49SSk4PWhsu2aShjhTkXeZEnatmjynje9HR9WH3sJjRdDbFUipedM2MUCRSXcMshAmjyUPcPJfrBfTSGbPcq5FjE",
  "key11": "3mFDAfiMNjP3WaLs6oxjgUTqxyZZwSFeLKjenwzvrettAP4t3EUpeADAJeDQjqRFykADvkKzwfZqHitxcfmDc7G3",
  "key12": "48uz3GCJdjUy7TYXT2T7AC8rdxBLNKuPj5irsSAST2YAAe1GWqKHi7gJQ9Vbfx8QhAptSqREcmpmUVzLfqbqFo1z",
  "key13": "4U8gneX2wHApoqPtZteJUvpfsXa3ehErq1rNTQQh8kM2Zex8H3DyJynw1FzzaUNxnxYnaAXbTZHaR5EzjfynDaq",
  "key14": "4o4zKxF2y3vSUBpP8tEdEi5YsQT2G1vWMmEscfebQaGoFQMVztZgbgPeEG1FqUN4Qqm5uNW9CKDzEBXk78bqCuzk",
  "key15": "2MDxxS7pRcTNQy8L5iaSbx3oX13bZsbMn8twnNv5kCZcdXpy2dUxxVqnw7yHdDj5RuSEN4xGvXqP8pNjQyQEn39K",
  "key16": "dttAL3xxr6Lup4TzWt8RPCyaq9M5xcSd5poBEaiREJsQvZkVjW3dcwbpp6CLeXxTgFK8rbhVEXAS8JnQNhhJEdT",
  "key17": "2nZ3BxbtVKvhmT5huCJzExXCGvM9Z2gSdn965DiGapq1G23EHzb6x96y3QV46KwBeHMo6FUfvB2xBEXJrCM59PW8",
  "key18": "4c7wbyChfHnbFitxnsNrRLjs9kmMcpmfryFaJkW55Q48xJdoZXzjsHtov8RmsHC1e78d1ub1fnJDMP9rCg8X5Yj8",
  "key19": "5AFTw154HuzpZabKL2R53PXhK94ve9u83RSNrZCTyH1xHpKJn6wXuByZdyTraoQbdEwcPcjPbPaVonvgVTWPsNbb",
  "key20": "5Th7FzraADBAKPwwPEr6prNhM7V94o5hJkfDxqEkL1A4kmBo7hAVDFRGJeaRTqd2xtRkSB7QibtNSR6jb7gL5UWe",
  "key21": "wNagdYMaH69vfHSCLMAm6MZnjb1c3wAfEYz1tYyBMtdKiMCmsw8TtXKxWoeng4W2sG4ziCnaetu2nZuJcMSb2WZ",
  "key22": "3A3yLBhBu3akJZJS1eSsy3owE3fVnL44U2Um93yuxqaNuue4fAppfBQxBJ8wJzE5A33GHgd6K3f9tRc86Gn72MFM",
  "key23": "4P85H6Uodau1j2dXUSDDYZryA5Qje9tWRf2JnoDpHGyazNMjYs8o1V5S9WAmwEXvsvgc6KkxsgB1Dwhv96yfsP6",
  "key24": "exqPHnsASigE8pxW9zrYs3HB1KdcPh8Np1EGSDfTcCxxt64rHqabZh7S6MGsAyv8kaqfB7EzTzkXRkcE9deviiT",
  "key25": "Fr5DtExdW5ZxWaahbnz3GnH91xMmupppVBG7xiRdXWtyVdpWHMe9e43ZZ1GjewH8znAZsEmdYj2gEAuSpji6cu9",
  "key26": "2M4LwdtQhxZPYnRcDzAdrPU35NSwZmJEsjVVAxzkjGYqiHJ3o54tQRXPweaTakmjigs1JpLAL3TqaSc5et2jRGcH",
  "key27": "4S6D7RabbPgWQuAVB5fm8a9GAXcNK8GT3VJf5Sg6ksph3h9S4ekA118G3LtEGz6XnnK9GAo8U9auJtKRFxkw7RZk",
  "key28": "4MvuDVVLZ8xVTyAUgCbLF4ejzuBY6kY3DZxkJZLdH9K9Rgn4zTe1adrZMhbvRrcqdFtaC7p3g2Aj27MvyWLayhGY",
  "key29": "2E7hLNJq94sUqdeZw9h3EKYSdfo5z974nqvUQDeqZVMatcqgAk7prgmCZCWY1PYYzMfkVvckbxAiVgVhz8tjYZpq",
  "key30": "2uTyntgetpmtWaKKDn7LLyxbVKgcBhn5WPay61xELKv4hXEbQo4ZC85Thn7nTd4bXz9geFFRyhNRWiFswuj3VYK3",
  "key31": "5TMgoGzxrw51xNiXaHjLZEUEworXVqRBG7Xg2Q8UKjabkJsWpfwVZE9rwLHkuDt2D3gij4bX5syVa5iub1Hkhkyh",
  "key32": "5MX39A8JENwB2tG2KNSHnQfXpJrNHkQZdGVMyEwzjWQZwdF9hjxGmxBhzfDsGmzJA2aTNd1Dmj41h2LuF671r52N",
  "key33": "2hfphR2dYU8NcbEYfLG5E3mQdhh6KVBz97BgPDWzW6zqQyzZryM4WCiiQDtnUCQjY4hRFUeasBKUWyQZSfKt9em7",
  "key34": "W4URamKSUVDVGYcEJnnDHwn9ipe6PkmAwbrXJbVqLhVtBMitYWH43EHZQyTyRGBqwFkCcytLxYj3R54oeCR9aD9",
  "key35": "5Qa7tm6qP4Kf3B4geeMCArZ6AtpeYheD5uR8fN32GeJynLxN4KFxYTSkD6nj3LaKGcQ95Vv8FTMY2aGGcjeXUEMb",
  "key36": "38QHPmCsoAnZj1qfoQ3iZ9hdwfJV7M69Yo8sPixfp3LoknnF7Kyj92V7dpyxW59u1NZcfmGusuFJqDwSKd1ytg6p",
  "key37": "2XrCTv51TUgongSGGoZQ79dMvxEeLuRiJmxZ6axCEpi4XFxw5sdQAwmxs2pW1qgUjDp2NRngxJ8dLJftVh39zUdx",
  "key38": "4yKraeEYkLjJbXrAzQVvGiQFDviBCZvhEfdGhVFxsv4pycLC39uvLb2Kr2xTjxXkSnRAZuHqzWStNXdLjVJ6Z7VB",
  "key39": "5TaC86gXXxeXLkFmeSdqAozMmawxrqsFaGz24NeMTbBJfF7Cyqdfg3XAsZHFUzxpaXByLiJzix8Pz8FwjomiUtnE",
  "key40": "4mMfd6LBk4ahwW2NyfEKNifNswZSr3ceVRMDC65DCcxt7ZxMHk6vRAn1xfiwcUrxRzuksA7dSwVhCJFNyrMfr2AA",
  "key41": "3z5sYjBoREqLEs5r9bLQwSTKxn9mmDR3X47JE52ZUbsjafndFkKfuYcS9VAHRCXp7LYtirG9npXTdHbue4Gdrn79",
  "key42": "4aeNc843N5nX7NX3r3VSmx3VocuB9StnzvJxmMPNLuF2u3a9sZdeZB12KvShBNVBx3opqcBgSnjJRhhquiZ5behV",
  "key43": "8rC1cDnMgbDWdnYmbVP6NqPEKJqtEA1TCFCrJNowFCB7C39oSFD1inJY12fVAPHJoQ1kKLk4dU4TfdsehJ5nPZa",
  "key44": "5nHV2RZm169FLpmBFDiVqAYSGEPdoknTr9ia7YbkUE6YCAHzUGLqyFegDLVWS3AT2t3rdnDLSstuuAUVg7efLk68"
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
