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
    "33dHVNVwAqEKnHVJ2nCSMKPJwotoh3iXwoRwVajw4yZTfbRW9XYPw8VWwrTWr3JqZixACvc8sdJ6aNQCnTrxeXt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vLr8AKr12aQ6jMoNj2yGCw52XGEqHDtqdFQF6j1CUqS1VxLDas4AtgmcrZyL5NbwPZwC3BGN2yHG2ENTrWS7Tb9",
  "key1": "oadKgEXgCNmHgx3DhuaVFUAmyfaDaujcjpCaQdVW3gi6A3Aw9HtfcwCnZUryVuQ89qoccDVowSLkZ4iK2mMUHR3",
  "key2": "3dGuYoqRHoVwdhrZJm8PfwwYE3G5T585rkpxgo9G5XejFfZ9SU1DZ4m6v3hfBaCEyDNprLvnAhxCy2XxMPRcftEm",
  "key3": "qPerPiRTZHcWdR4NkH6q3skxq548Se8yfwcqdywnCSk7zhTdVY22MxXPaaYVb2ofuHxyzjujhJCktw6AbqvkjLG",
  "key4": "2UUV28cawbeppuq8EmfyCymAtiVY92CM4D3WHQ1XhqheqtF34NVV8uyCKysidLKJW4pmSmZEHjpogCUW5vE7AqTm",
  "key5": "3CVgZj2kFVcEZoYkqxMJkqAXVd7GKh53CoXamXjTUYAw4nyJr4hoHm2F65a6Mp25eyAaJFHP8xyGzbrpoPPsEZsS",
  "key6": "4ebDyaEyAybadZtfcmYcK8mdvX4Q1DMsSQ2dTuBdQgXpicGcgCt4v5Q2Bwu32jwpcydCTsL5uNNsJ66ng6biWmG6",
  "key7": "5zFhhUdFtZDrfsD8tJDWRQ57GKwz3voZFQKEVKFwyDmde7ec8wM9smCN5unFjcaKYg9DuqJhd44BWSKvTRc4ResE",
  "key8": "5hm7Vz5hQRuChcQw7NNvzpf53mbY3b6bVXesAPpxE1PQ5HCEmpiXbhikZtit2LZtPSApJdJyGsnRHHyFh3ueT97E",
  "key9": "4nTZ62PARVSA6BNKUNHTcbhT8UHMFUwH2VWpfh8MJMRxmjNpMqdwpnGByXqSkEXt1U5oUwQ8g7beyGJDdx6GNibw",
  "key10": "2EXHYVaYMwgY5J2EXQpFG6AqAS2sCaspcFZc3AmfN858BdeGBTubqePEaAXuzRESLX2KgqvkZ1t1ATqyXsVQ7N91",
  "key11": "28pvKGmgFS7XxyYSPDWjC5UjtA4TeFp52e6CxeK2scydKVBkC8pqQtStMvp7WaTGdyPXFEmdKNhDHuJ44ESqmd7D",
  "key12": "RyqVfvgJuqPMHxjJLUJhNmJrd3JE35Jhwg9cTqXRHh5YwgoVp3g3vsZyiZ3oenEy88RAHqqqWCXHS7jWzbNzFrF",
  "key13": "4kwVjbuatm4uysobBBKgRwEPQusPZuA191LaQsmpdo8ivKGYAQyeZWHdTMSujd1XpQSidvGhJEJd4eMDMbMmhB9n",
  "key14": "45WX4oCyiVZ86j9SncC8ZnsZRSwDxD8YfSp1RNx4DYD57XwJskU4R4QXvcw1WCb1taCjLGidgsCzs9kP21L2bZFY",
  "key15": "2FPbg1rSJQVoYSsAGc4sfKpfUzAvjP6FnhK56rzx9UQhycYpbcDUxYjBZ7ExDcvSzCHPN5nsc8p7kvL4XNfVbbX1",
  "key16": "rqtD6CNHwaCcaLRt7yUbsoKqebE2TJKWqjFhM3E19KvU5vBTxEzSUjcPNF6mhCtWLqdskbY58P7nrCCaQztJc4K",
  "key17": "ZcEBZf7PfRiy18sLwXGdQwtMbKwVWM7cHHMeSRVhKchczQTSAD4yKXHZzPvUBqpsCHv9YCEk1EwPDM6SoCXecWb",
  "key18": "kpMjUrSvcz4KupeXkB6Q6MFcGJZsQjfhBeHrL6GFJgbh18Jb9Kf99w4ZzfwEG1wgN2QpP8wcbKk1EqbDNBqPk5J",
  "key19": "5wnNiDaWqcM848FoqtXaG5uaxphtaWcTfVfHQDUqXwVhXk9wcbjG6TXHTM7fR9WM5bpJUpykGSjxCrGTMMeEW9ip",
  "key20": "3vmgjn4oQbA3pjUtZg4hRrkrtQ8WXzwBwMdP7UXAX4kUHJeTdUvhGYqZJ9X8feMJtTHkfiFNqkgtF3zz493qbZrj",
  "key21": "4EGJynXL6R6eZJJxCiRKPQXwTEmZPPrHZZQxT6bjyvQqjuVfmTsQzX4iwzK5nmLJB6CHU34QpNepmRGL6o2oLxPC",
  "key22": "Vknwosi9AXVCdWZQNzHd4zJrU8X4w8f2Lhjg3pN4f37BFXM5eYByQtDpPDPEq7xH4MWJAQy6BaBTWj3NKiekti9",
  "key23": "4EdTgsHrvMPKSr2ceWixfgtTy5QC38aWXeMCuqxP6qH2t4ihG7pzdSRzTS7VA5v2iLVQ5ATVhxHE2C1K8sRJwKUM",
  "key24": "3kBH2hE5JgTmZFNnP3YLp4PZsAgzzbFmJgYHcA8dAa1GLdLwquK8iJmR4s6CVtRvCU8AWniapCpSXpLjxsY37hHU",
  "key25": "4e2M12tEMkvN65T6JTNsvwRT9s5chUyZfYvWTGLWECP8j8QtuTNGfVRZjo65cjWBhMPxtcVGdUz9gZ7Qshur16Rd",
  "key26": "2XhCtZ1KvMnM6e5YPeVBZC9Sxi1jzhYeKvfosuDNJN1Tnecb1jb5ss2FxBGfpxdFGuGrT5ZTFcmzn7234MeoXzTj",
  "key27": "4XF5XMVXDWb6MPLJ1Y74HpYFn1Tp4qih2CMHFNP3kh1oKi8tVJuC4hQW86rVh1gFM5GTSMz5LmZ88ohTdXAiAogt",
  "key28": "8bMjxkWRPp8HfFv4NUq7s5qkTTDrpAWsDcs7tdVUp3zreJH3jCRTKC836oH6xeiJ5wf8yGWmKYH7FU7TTS9u2F4",
  "key29": "5gSQwvsCixShN2TWiF6gEYGSUP6kZp2d3uBE1sgyC4hcab942pjKoemhT4NpFNAN6GxhY8x5FsWKYXwacafbuZdZ",
  "key30": "4pcU2qhhGYwUZV2Sor2EQwuruK21TFdiJmGuxTbmi7nJHTuUaifHDsqCAhPVVUPXbB1fj7ZASq7pZqJUWmdszvJU",
  "key31": "4Luz7pP3sXQnotjkD97kWsPtiDZwr612f5xA5P7QhnnwQEvWG2tLVZ1BjmJ8DoJ18LFQii9s16RdY4YPYygokhfH",
  "key32": "3msLeVZnXvLvA2aZJ6edzA7qU7CyzDkCPer8KG4UcAqp14jMwESKUuADcLicbyuqtCqEhtuTnsz2jHXcwrvygKGP",
  "key33": "4YPuFqmXBBdvNbmKLhTuDqti7FDmafxN64BVe6mZvnSbhVZ2G4cgqYcTx7GfG2CzhkDWTh1LUHSTsaFHUoYeddy9",
  "key34": "3GRmd6LY2UoZommJ8LJgxuJ6w1tae3pTZwUA5DFn1XSY5UemXUCSPfECi57e2QNfs8dJwDEZ62Xsw6o7VTmLwJ7L",
  "key35": "3RPb1BSrw1EL8gVRTuSYDRvWGfsUFszwfAdCAb4y7TL7uTGaeVPcBQdtuNUL5Rtisha89CZVEQ1mWveaush2j4tt",
  "key36": "LKWUFt72TVwiVg8nZ1WjdFA1tmXWzxtd5EaSsUsDowQiNPzrzyd1xy6dygn6Fy1uXhbmdL5KxXHeKemC4EsuJGR",
  "key37": "4kCoJoTkPdXYLV7LhutA53RkKmyQJzy4UrW8Qc5bZ3TtGSHLBrQUYdowm5tohzKJJAJxCSMHpgCtwuJDEXY11GDM",
  "key38": "5iybQKVzVgAz17K8fd9RuXqx8eKpqmBd9CTNJHzbsV6YFfJzdTqfNFMR5cbgxNdmsfXgrNC5s3UKXGJba5JqDKfa",
  "key39": "HqfdA9Ed2XVowGo2K5wHZr9ckMeEAQcEct3FwLxVHkz8jZgwXuG5qknPgFQ9nDnosax8aBbijRJdytQ2Dh3mTKU",
  "key40": "5Hu5XXYFUP7ajcVBzJRgt66Wttj1aFwHeJbCMZHEcL4uLBL7fh5YGRHJ3j6iAjUzHLHEzbyEs6ibXenqXedaVKqB",
  "key41": "2Ut1JcDrQHBahweCEJosLejePBU8bzuB5NHFeo6YQaBu2ezHeHmPws7oBCGJ6Jm9UUN9AExRoQ6getBECVi1HF5C",
  "key42": "3AQWtoEr6ud6DzJ8AeEvwmZwhjPQqsd2gPU66EdFWZiSuFDcz7siXFTg6fSPq4c1fKzQ4v5TRAEXPX1WS23jQiAp",
  "key43": "5ySLwg14x651UzXLhZ9dA4Te9zkxp1V9ghgXEmU4qv7zG5jBohe4m29q7gHh8TjtjcWkk37byJgLUAhybT3VCm24",
  "key44": "3kKNepxGLUYjmMv2mpShTgS8MXxwx1eKxHFXQ8QTgt3RB9gjLWNf1Cs7cRkk942e6MMFa9x8RSKhqSubMaghQ7pU",
  "key45": "318ZhhG1SFojMEaY2CXB9niHapVeRumSTDMr9txXKiGbbW8wphguBjombAW2VDXVDu6q2MMcVi3KNzb6rDNJyAr6",
  "key46": "5tpH9Mx1yQXcDhsy2u8yEJYbbcMMWufVp81DBziPF9wiFHDNuD5XHZeMjH3Xxph4CHvDmWhZULhRjgq6MsuokTJE",
  "key47": "4BPeetEwy7F1RTkr68zxD2eLNUCAZYMPk7CYsRnnNLkbT1pnXmszsSwqnaXy5PaGgYMggkyL2vjtZfRYtWXBEx3B",
  "key48": "4Ws9pKdMFTtqwRTL3ZSTKi1SQpVBRUbAr46JYf4ZRpuva6E8ddj7xKr81BMrA5dEdiNpfHdZ43HM7yrCpLGtJ3pR",
  "key49": "2gRmB3pgDePqfBtr3RgVoCcYbjvVkC19TN7GRTCX6MV2QVSFEzJNz81HRbcWn9bAz6rWXmKjhfsJwvstEQQGgfrc"
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
