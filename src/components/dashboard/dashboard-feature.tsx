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
    "2FkANi5M1C2UbizmVwfrm5G6LN4w42JQy1x1eA1uWxH2uZcVr5L8pteFTK8BEkaMVYvnH2ZTggV8v7tbri965QpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U3jyJZqpDcbNmYB85MTeC7w6BeoxoAseSZDrsokSducQWGzmnQaEwPDwVD9UqRBAnq6TuyZz6vjE9dB4wHJhEjA",
  "key1": "JA9dy5t2w5RhdyXGi7ZwsHzd1X3pjWfSUYnxdZbJjvQGvzWrKLSs8X5XUc9YLmvvbDt87cQecyXvcg6ZrZdgtAA",
  "key2": "5LFSqe6NpkDgnbYmDXDqPbxJYsc6K5cNGLcukEw7zuCoczWacKa3XVb8uTWM4PvRnNkQd6eqHfbuZ8CB3eN14DjF",
  "key3": "5LEUvYQpChAaJHHiurhEbjK77uk4NQbHZFGq965vXpFx1wGddCsiQRRjCiBZdrEizbQyygseSMKQUfWYerq3ryMF",
  "key4": "3KpxJ3z5v7rP2fTshPW2HprzuDrfuE7UsNuRchwdihrifqKs2fcoGv7mNEMAJSxTyJypM1z4yxh6Kjr1RcShsgM9",
  "key5": "4MA2JWrA8XAkXMc2DzWWPDf8NYR7ToAWXVaCWSBWPjEhJ9WFDNTNpoCE813wKWXd2iLznEiTtTyeQmQjTFLtVmPo",
  "key6": "4MyjQPZd1PMLBWCz65EQsr1mcZsYmZfthoZ3NkXYsbbBAaEQWgSr1pVe86ijGiJGEparQTC7aVfCZWc7nqdvTp2h",
  "key7": "5w7EvYu9Rw3Uzt1AxMqkN4nTHkkgc95Yx2r1a9wvGsdUYo7BLmhs63LmCt4CNHfAwjnahH81E2dmE8ooYn5DAnXD",
  "key8": "4ATM1ZXDfcmDW8NBGS3qvcYptN89jysYBcEkRrnEBsh7RBXxxiAf3h7tD4n4aDU5SaM65EtzdZTvUu3QUMTS3BAe",
  "key9": "P3iB13uvWA3rxCyp1iqm6hiKhjmxodyTWVrTaQUdaiaBr6YRzSjZUC7mxDaSXYLpEu8sMFiG6nsqRa4miqbL291",
  "key10": "51wHn1QtctFqAdoiqQVbEjWzvoLLgzfkMvgDW54ciBfiy47cdE7mjnNKNhG4vvEh42pQrpLHXePpWA1CuLb1sbYt",
  "key11": "4qy95iF4jZqVLic5BnWEYjSEHoTimrCqovUsCv24TbfRkADjrQYnNXXPtWmvBsHEvwFrpFMobTTt6xHC1E5cioGU",
  "key12": "54KXKQQA6LXWSvLp4UQQ1wAcSDwqfa8Do18PWPWfCDoDZt24Yhc2odqYKf5hgRMpFw9zGmnAvXqd1iuaQAwKTxTe",
  "key13": "4wWAnC4RqtUz4yjTi9CHDr86G1TGKJJVmKBC1D1Ux4m3DF3Q68WjgUisoZDfgWMsW78UCwD7kFy9RKKeekL3sVFn",
  "key14": "38YMD2VhiBgQPT6UWgoB4tDo1E1Ebtvayor8MXakJVGA1icisxjoisNiz4Uhhf89evKN3difeRevLPi4ZFZofbmR",
  "key15": "3ybBBwWeGXojbi9kkQhzraqs7jALGpab4TF8Z27jYTjT61c7KAqYyjq1CRdj1gEJuA7qYFDENaE1gbqFU8qPWC1Y",
  "key16": "UbkjsYDoCddVRW9iyRaXvzSEu3LdkFaLVZcCS14ZhHzpW4BtncJKeqNNjq7ssngk8TZyYBcAyCrD2CEM6PXq6ef",
  "key17": "ZK798F2C5bHu4utTWc2taVjwxAQdUTg3uUsFbkCZE1JKWYj3VBbikVgCTqSCRd5w3fr3PYNBCbGheA5Mm9BNb8n",
  "key18": "TXquirsLE5cHzYbtXCUZqXFQss4sEQK7SNYjnzwLeRy3TnizPTm3mXTw3cV46FGqzXfVzpABK8dwr6gWmax3vCU",
  "key19": "4oicWhYbbTcATv4FLFQCdshTa91cctGBR6sYH1sT252dMggeEgoCuYyuGBLqEFPVedRq5RT62eHoML7iNw2dHAnM",
  "key20": "35enrPMCCcySYgwYwqaZGL5EWSiGGKdp1wzQCn9ymTM7Pxr2EmMf9np7wicCftESfFnXeX577uPVA2DTNBW4uL6E",
  "key21": "3WGJx7D7k4hYCm8sqzd5RsCCW6oAi7bkJs4uJncW2X7CLkNdc7auqVsQCUdSjaRDYBBRE8HDcKWtYhVC8aTeuPTt",
  "key22": "4GZP53E7Ui4LmJu9qstEGbb3wSptuh7Zy9WjKsTbbEpevJCkz2a9w5bpqCo1LevrvQmnb7SDQmFWqr3rM6NvWY8y",
  "key23": "5aaizbarSzVrbQfjVFULuPKJma9GKTWhKN5711nixENkmb1JGe2yEJ5HTdR8qmKdfe2sqUWcksUJLC9L3S14mWkv",
  "key24": "3K636MkjEb3JiR5LofAZpSpyik2E1oLwBRYTsx94bJcRmzpFe9DySN2LCiWvzgNHLSieHq2mKUYPgpKXL84sXHpo",
  "key25": "67SLAwzXX7QqBcTV57iSaQH33w37wYGc5xs38d7rMsunrULfdd2CMS2zFE1SrAM2ipSMTFpStXQVpadGo6hH1x5R",
  "key26": "se2eUk8nT1T3EYHX9MxnxhYUefL8n7MeUnGKxR1JKcQS6Xwwy7Lv4EG4wHhd1d5UwaqD466SRzYwWWAABVdtR3e",
  "key27": "3MhDJ2JA2USGRHuLjEoLUkYUD5GerGCQHLZU3LSQ3enG3F9VDdUTK8qu8dZunYzp2fZaLUhYovBQ4x8vV7VnFxjA",
  "key28": "Mece5pE8uEWmvKwtgSjsZ2xz6GUxN7ouEfXgNQ3tivbw3Ba8CnDKbJ3Y8QstnLGjGgd3AKCEPuPFAhgKG7XbdZF",
  "key29": "5FegdzoA69NswuiGSrpt8eXD9JwEZhKT64UNRABQrjvtoyvdUghqYjW2XzPzds28H8EgPmtyBr2xGXXv6Stx6yJF",
  "key30": "3LtPPCo94kzi7FHkxapwJ15ydZCvC983BbGs7JxCM86pVLWb3USzLfXqsof2Hg7UWFzijvXvArfZk5UTqUPi5w6Y",
  "key31": "3CXmPsrSVPnswr88N3CehrK59SQgxU1Hpaw28joTu1GmgBypkUjVWstWyjWJixpwoyni74EUmVPvfS7dFTj4ZsEN",
  "key32": "44Kwjp78CDtfjhvF4WUGYkgXRmEUrTKKYogQW5TJfkxu4wF5T5VbuqCTAAwpBXZ5fxYycZzhSuipS2iyrEWZd4H3",
  "key33": "hRgWJUKNkqTpoZ8SkinokFd5tvEhWLb5xrKAJmNSb6Y8Zs8Ho4aD9ZSQj9qAfDWQ2juV6wHCYid49QdkUJ5KhPC",
  "key34": "3EjPaXjBZL1MXHK9MjYcuDNNUSJVfD94dX5GeX8aY2cMnqLqAWeCeh9jSJ2SYYXRfb5q1wZ31aHs34mjqF99jogV",
  "key35": "3CVMDduRAfpg3kh8Yc4WestRNaNMYGn1irxCFR3UikFpBuyqggLz2EaXkzrxwGbR5LBgtpCsQ8rKmP8qp3Tkexcx",
  "key36": "2DYRXVjG1RzDtDJtuRXo3BDi1KxLBnquQbnK1zHZ6nqvvHn6DGGBeXEe2PLkKe4sGXqbGbDeZCcLcRJFxrfqdy5X",
  "key37": "2xt8BY2aYQzEUr7aUmwUeVod5xadQoqToUA9wQMR1DZXZLW8C8gy4mpVNmkKFsWdbGTLV47j8raGK5rkFbwDShdu",
  "key38": "4je23ZctngPdBXPaCVHF4nqixBMVoykXwZVYsxX6A9whb2CWUTHz6uyDXQS1DsNJukcoacUUS46eKLf8fHV8eaL",
  "key39": "4FjT3UEfam5UT1MfiH97wsaVjhtXNxwJmzfX9mfYXshXwvtaMiBmS4h1msKmHZQ6bobD4jQjbjpVHjzFsXM7sTyY",
  "key40": "4P4uMj9ka4sfJ9zxZEsvJdjkzYXuLQYxi9fgzUdZNxNY7m7xji6U8jy42KGYktHZ5X7BV764KqxGhqVb8NZyUydP",
  "key41": "5iFJYus9s6qKs8db3MCvVCfg91FN6Jtaec1g66mBFiXjupgpX1pW63ps3SL97NqSdFwWQDwn3G5yq4bR3hzFbvio",
  "key42": "62hHfQLBXeFZRt1QaCghguj17o5uQw5RkvVANVjjfRnztTnnDb29nsRPdeVeoqUN93EUr1ww1HkPX7TEkyMUBYys",
  "key43": "SvCHPbG5B9bHp9neiwa4kyWtdTMwWfbWpSXF1qrLNssRYYgy8NqyDk7LuvzUTMNRwxtdqRp4uBsh3A7N9pFHmYn",
  "key44": "3AS5gvhvu4HfiBnZWiV1cmnMFadqKNF9H9mz3iGseAGySKoszhBzTWFk3aSDVWctKLKwCYxERT83gsH1vqwBNVfj",
  "key45": "28LZS3aE3sUW6RePjwMFPyWyqN6a3qJMUd1Ge1YedkVoHYJzv5ZEM8fiqEQXvvWby5rt42R8gR32ckhKrntifdLS",
  "key46": "PgipMBhfpTHzTPSYmzW12rXFHX6goS8548ZMsw2Qv5wZuszGzFeat8HriSD8ptWbf4BDdooY5eEZmX993F3U9Qs"
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
