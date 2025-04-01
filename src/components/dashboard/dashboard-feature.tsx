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
    "2iZxd2sscaXcNYqpBuuztYkGFuZkHN9cc6rtAKUqAeh9itby6nkBXqt13ShQtRkhtP6zVsRnUErjuNPN1szMfbUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hi6rgRnbRByvKafaWpZ2pqTbKEcGZKgtqKTXSVTeQvkLPJhjUAPU5rMqCjCzA6hHHp4BqckAM9ySkVVuRDheNM7",
  "key1": "4URfkQsNm6XBEgcne1qXssGDi21TeTDNUYjaEX7ewzeFvvLf49u3hm1sr3vLNhpqtie4gep9Ai5JBmZTxes9HinL",
  "key2": "2t3EBZEiWixtypKNsfbCY1m75Nop3hbBdQxU59UxoF5ueBVUrZ7rjYhCY6p3YWgFVc4VehApDAd5isDrQCdDQjj3",
  "key3": "UK3CwXJjMQdcFdDny9C5c6pCREzGTngEg9U6jTqYrEV88Dif1vYZQmrLmQgF9VMox3AoP8MFT44ymk6c3bU4QEU",
  "key4": "2qwEsMEsvZ9igeE7kcvjo76GhoAfqZB7nbnmsSnJVrrPVUgpxJR8fivYzoV8pvifqzQUSf3V186FmFm28DcFUCdZ",
  "key5": "4ocmp2869RuVxYCXGpAyfoSBVHynADN22u2n1XLrAs7uwhqTsmupaLamguUjEDQ376jfb85meT3dhFuvMqBavvEf",
  "key6": "5V4s1JwTJmHg1ZvD1XjYEi44aUff8uyabVENpTHp1r2mGXG25J3pmWJFwyk2f9194oDP82TaRuqoWSmSJUsWh8wY",
  "key7": "2MF3UzAcaj72p4Wqn63mZ4W71KpkLFD1GqarFkvY3FKFiVuMa7PTBK6T15YFZFuTcPPUnVqqpUzPFAwedUXGPy1z",
  "key8": "EKtVDxFPREQ7BvLCDSuqFWbHaiiAZrZc9LjCZimCCg68umL3ifnaMH3VJwFLj99S294GcBgU1x7668y2z5T8dBg",
  "key9": "3qyZ7D28eHgsPt1J14mPB5gbq1SqrxGX5K4TXGN6Fh2Nw9SXKJMrztcvGrWoNd1RFuX9EohLrhYwqwn9cKZno6Vu",
  "key10": "2epwxayoXKT4W6sMzBbJ9i1czMsJKGzaJ21XG1LmmynmaxUBybcJURr1qZK28Q9BdqNsMWTxq8ZvTPzXsFqDWEAr",
  "key11": "2pworLDoYwsudaQnckkmCKw7zRo6Usd8X8dgZK8H9ZCHbVdfavDaUYWkgQwDWX6HrhjoM779F1YcTYG6auMzLb6F",
  "key12": "2eazJkr1dpsWoqMPBoijjNQa57srQimtZ8rk1NZfTm4BzGgU6zAHXqvcZqPYPnXrs2pqbpSWCnNkvXwqvFkegYTT",
  "key13": "4ZbTNVHDHTqXdWT5zLBsWscmpWWD8PFGLM1HwQPuxVdH3GdYu9WeCeSH5xiiP9LkEEZnuVLqVPqeP8MfHVAyx6Nn",
  "key14": "4UA3EopPS9bjM6fmZqGHP91xwobH87M6X4MykgQyttRp6xLfHBQHf7DJDHUEAhabqsta7UxDvVRTEKuTgSXQRsK1",
  "key15": "tBJ4ByZut3jHXFD2ZsfUewyr2FBw8zJp1B3jqYFzHD86H6oKN3XUfDfJpH48LwQccwEcMNKtZrmijL8TXcgJf25",
  "key16": "22CbmWGp71JU6crw9gvXv9hY7Aaj2QbgunZWQkAjWxQSr5poxFhfYNiC7V2qh6J827NUvWKwU1Bxp3YQ73o6XGJo",
  "key17": "27xKPVRvVdQRs13KjBjNUT5tskiKFVExkbsDU76J8JV6G5Qp9jpsfEjeiUD1c2duGHFcVWnu1e5c5M16L9UkuVsp",
  "key18": "3wvZu2dNmyhBq7rCKixtBKFsZMo5CpTBuUBNmpbQGWxPBzZBj5MG6g6xNYyR9LBtSbj6q21KECuiSM8sbyKix3Vq",
  "key19": "2wCyZ23LPrQ2z5u1NDwJz8VpnSDqivVFBAAUquoK9Yw8roCegtByPLQpdxytVLBR4QcbHQe6qjJA6xugcN1EJ13a",
  "key20": "Wt8MiMZ26ZVoQ7rQWheaF5X6mj7bsUBvHvLhpA3d6LyVw1YhtUcFRKoZrfHEhgFwYFTdG3Rtam61X4roaqndqeD",
  "key21": "3gQzShuACoHS4UUFuYEacgbbcoz5s5eHQ3muJ1Qx4VkbK4HM8jMBp69mPZDVR6wwnDYCi4agiyP4Yg4FPZajHruD",
  "key22": "4NSRH6jDGu5nKxBRqLtpgVzpcjb3ajqudhA73GhdUHbz7g8JkiYhoVtC1k2K2dgRzHEHw73tvqJEgzQS7oxV8ydJ",
  "key23": "tdn8Q7x1kXDBAycyzoSucFNeeW9KZAS4Zrra5jHysCsNWfpMgG57wPfjDwAbzpgyc3FFXhwEM517xamJ4T7zt5J",
  "key24": "2h3CH2QwArBpj9e6Vtc4XyxTxB5WbFZzsn2jyP89u5GwcQCP5qvHxkJxX79DxjEarSzmQqdhqCRVhVBRtJvcXmDu",
  "key25": "3VW1794UyBgq73tYP4ebwEEgm5TT3LZLcMsFLY8tCCrHyXWMWtma5xPHWFwKdPoL6y5AvxovWXj6Vg8rZ3nC7HNn",
  "key26": "5eni5SvJkdDJJr9i9d4GH5fpWVN8qhGq5gsKnLtP5ZgQV5hiESiRrRAoh8krZ3hd8upfRtWTwzabjHLBnhhKfts2",
  "key27": "4j7kfW4FpNCp9ZjwqAKTJvQW7SMNognytpkrE9MeexMzQiPoXRY68A956KFjUTpJu3rb4J6qV9juMhmCNskzC6oC",
  "key28": "64G1ADzNDZDKRhJYPNbjMGVp6mnG5cccKzbR8ebeHASbE2kAMLXXhPkcEEtPGwCg7sm5VuJmZDYuLp7r7ELtsWiY",
  "key29": "2SnBDvRWLDFmVeAiCXR24Xwer5AoLSKEdcSkyLoMUzkywnPShMWQrcPLkr356Nw62nz2atFG7PD6cZATGh9kUMZa",
  "key30": "4VPW9czGv3a9fVskKswfV5btEdf6P5rACrM5EGj8UyuuJeaZX2e6w4eiqaP1RQ6Nrw4rp33WVcoGYBzYBV9NVtcb",
  "key31": "33zyznJkZd3VF9VTqZWaxbTW2sabMJKg6fMjndvyP2fMGfGxzY3Z4ZCF5KSfPsfm9W9bZNSJyEHMpuAJWr879Smd",
  "key32": "wN4cBUJV2eD5oj3YriS8YvALnuvd5MkXuawrx233GfZPA8W5Aq4AaS45AAXRJHaL3pbRPuDVBWeqTKZkmWFHzRK",
  "key33": "2q5p9f8P1uxJgjB44LYVkxHgcrTd924U4EywyqxnqwmtsaqeCcmQ8kb3xqCQicBXqAG4moJG7VvAJ9vgmDJN2y13",
  "key34": "2T6U3eoaTza8vsomd7JXnBkjG6NqNuyf1ZxNH8RiFn9orqMCdF8Drt6XAw568iiWTZaueXHAZ4rvxd4Q68wqLMc4",
  "key35": "25rAuSBc8RXmkNseypq1VxjTaJY8NoYsptaPcKEQRQRdx5ALnypxLr7JofTW9H4e7eqRd1BWukVKRXmV3GwP6FGW",
  "key36": "55fSdGN7HsEfaU9RP6EtYLSzQsu2GXnh8w4tTkGwWWH6ed7fwavrZhSGCV8uLXJyeSh9SQAYg2YMig9u2TkpVTL1",
  "key37": "2P9ncBe2bibZixi8MTmfdRzPjYMFbzhFrkJAdGamdbuDubmzVTL87kDbu8WLmdisr3Sj5qG9NuoH2jPzisrv88xw",
  "key38": "2AR24bvNqKEajpFx2f8N41DLWUkhoHBL7bwEH7P5gyV3GzuuWCPxnRLHQCqmArQzjeHUcGhTkq8iiw3df53kihAL",
  "key39": "413GkkeNwip34oHiMt8HLFuyW6GmFSb1D2GhRgGrthpiTCpWjYYeFpUpJrKzLkXhQFFrruEkdSbm6STHVaYQiMeF",
  "key40": "57ZENB5q61uVJHbHSYwydh9czPdeVpcwTBycP2vAgj1nbx5rnLepNCWDXuUFfvinYwWJ3Ek8peQws9k8mL1zqiSv",
  "key41": "58RodnrvQbBs395QEm5gap2kzN7YZs2zT5e25mPx7jzBYDJyjomSUFkTmDpE52BWniNnYUW5YoQ2VaRJHZxPc7M",
  "key42": "NtwLjG4uJbsamKkmSc5752Qvnc3uC2KgmVKZXGh6kRD82V23Tuhe6ehdBXhBuy8Krn7EUce6m3kwLqV9cEzbfYP",
  "key43": "2b57KyuNQcdEmDNNxS9vPBuYyrQ5Kmymy2gZukfQ35XWcULA1mnGp2QRFi4EGCrBwnqS64Fg5GTQDfyMHvqM9WQe",
  "key44": "3TA1hvHsPiHhHHWLnjkucvuLkbw9LiVpoDTbjS7CbBCTKC78kpfNqzPziHHuSFUW898dg8ykfpTB21onrLiDrCR4",
  "key45": "xndEVTkTSHYHFNN5WFpbiHk1akbssmdThy4KkE4Ce6q754qAuRWXbPzCxHmZ4RVr8AAD27Yj4DMBytfqACtsJ6d",
  "key46": "35MeA8DJXX3t1ggAGXcj1fQsH73ixntTV3uEbeGKg5AQ6JqenrwUpDoYadgu9ATjZyyaxwhqxev1b1YTxh34Pyd8",
  "key47": "4oK3kZPMuEPKACW3vzE7Agt11Qb8M8RmY84nASpyaw9YTAGEZTXUW7oRugVEPYEvedoLQDmkhbKKnJcFC2firSUK",
  "key48": "S9icSuK9YqRmRyxa41fovRkKkroPvxP8FA6HCmB6HYuD4VgE7nL3tAbx8NqEJEetBqKkYPPhsXwwznvxJmx7jkz",
  "key49": "rGdo8MiUQ3nJHjuJGfbKKWSsXzs1de9toDTan8os92TnDxxdjQGg2UvaQAaFhLZ6gNrbwKL5mCAUd7PNLLVrC1c"
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
