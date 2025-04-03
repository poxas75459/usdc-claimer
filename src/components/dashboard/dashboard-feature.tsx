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
    "59dksEyZ4eJobSvwJdYuHkGLGDqndrDfAFGccaLRv8wvoaJgZyXtpAYcp6wXiUrtWEPSHBCFU4enat38vNU92ANA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DWHBWU1kMYDonyYBVGY4jzSYAcqTXnttgHdMfwUpxq1ubZtSRucCxxv9deV9hfzckXK8tPJaVfJhQYBdG3heMmb",
  "key1": "4oCWY4KZbiiMz8z2CykvkCM5kFjBtTS4cSnDSNdqxYzjAC91u9E76kPaQdwYAEE2suektWp1nZryjr6u6W2Hykkh",
  "key2": "uMgQe1iixm5XLz2htdXwkr5SGjBRDeBaojgukaWuyAAqYQEAq3d7wuyweYLEHwkgLJHWX1Mu51o4GgBGk1SANYq",
  "key3": "NJLPZt6NXBkgnyAUNkiR9pbvDxW4akopWELEQLWRiaUwueizAjfhBKTX538NNAMXvuLfp8X6s77ix3UBJV31Jve",
  "key4": "pN56CLjsukeNBVhruFvnFqfkagjXJpkacJeJQW3wS3VUvyVyRAtT93aK7EL1XDz1h4DZKdbA9tKEuUMnnVq6knq",
  "key5": "3wr8xrxkRpjRESuDrFvfh4NzUWPPzBTKSNkAnELLNTSLyNQNdxjqkwzUKTH5uqSmoAPJVsm5Qb6wYvo25EbtL57J",
  "key6": "3qZ3B68W2H4Tb3kLdxLBAGBAX3wYTKDi1mme2MPC6xVZntXhtYKRbvgWMY3mCqqsAmUdcDNCFTy7bpRVYD3DWBwd",
  "key7": "65qpxuEdnP3BEWGMgjWNTE88uQxuvt99jCQXMsF4L3eY9bFqEMwY92eTcHMpXkTRQ2BwegvkKwc91yUxNUSDaeoD",
  "key8": "3qQ9ox3PnzVhFePSsXQrGvVankcRBUmRVNX49DHX6GoHavfQFABXc6JgRDpGKzZdm7YZPuCvQHt1PDJqo48p76Ji",
  "key9": "4Hab21vPhqshZ1U25txYspZeY3NEn53GQMFsMUYQxQuDDJe4ghy6HZ3RkDRL5n4DeZoKgNkdC4UCxdh3CC7kZ6NB",
  "key10": "2sGGNguBGMC2Ghk794NunPfGwYnuc3t1iEV5gwpcJAWvBghS7m1QEQhVE7ntyA9SKTtg5imEg5psa9vVNiRhXpeM",
  "key11": "4sTr9iDaZJo98eKaiiUHB8FMCw8Z4aRfFjtvG4ubbwfERdaVj5JV9ZWNPxQYTjQFvMDCaNQrb5Bopne9MMxpRLBY",
  "key12": "34wjVyJprqSH3eqLy1r2ooRCQHk2nhRmZgR4Rryz5Adr7gLfGyTJfcSf6T6V4hN6yGUZJRwkSsLFqtL8xjVzT3F5",
  "key13": "JFRqwVDTKPmgVXpYqbnWzL2Gu3xdF2Bc4T8b6dWj7BxDHe2xNcfbHNb6dHyj7fyMnA5wqTN6bUUb2RXd4HrfRgB",
  "key14": "626uieGBP2WR7v8YU8Cy17SjXJNgUKzWcJDt6nHGCJ6PRuzhSjbtuJafNTKP9KcXykf4c8SjjKgajCTzWyQ1R8oo",
  "key15": "5TyhXtRULKf6mzcRDziH9SaVsWy8jFzegW6F7CChkehzXSavUeioG9FGxtLZF8qruXQxdLFaeNjGUe7m85h75ZTP",
  "key16": "4qSfSJ5pBsU98earTMR22jEkJYpaDmVNnUzFvJBAeoWnwfbSK4iZWhcAbfwf3zeD4FAtnVD8KXwcBqdciofRdXZn",
  "key17": "32DoHAPWduVMfd8dDBMJfUchuKZhFbfDmHsd2hHL2nDibHTKQNiq3tbyJFWiPjRfRA8meRZhW8oCagMKDSBAcz4P",
  "key18": "4MGoGhFxLG4WL3LHAW8Cio9C6sWHH5f4wiSFAJWYNJj3RUuNBhv8UBhJrbSrcsDY65E1mJctqyENo59sWLQu7zM5",
  "key19": "5XzqmPwp1AyYTaYvKQ3GyGgU5s5NkNWhJern6ETzfoqGPLCzX6H2apMNiUEfguSnT2oKpBnEWaMK3f9G7eLpyERk",
  "key20": "3NbtjtjEE5YcgZLYWnnnqPoE474hn2cQpnKrS5KKpQ2u5FCvk175noaHKVYghcQbJ832aDSfdqZBx8URZyXBzpck",
  "key21": "5wC3dM2Tvrtc6AupfefFh9ze1nFc5k7yCTYx6GV4EtyDd3qDNMPx2KjW9a3aR5dfpokhj8DUNauU4ubSSj3No4A3",
  "key22": "4g5BDNyFoPaHfbkSYAj6csqu2CEmFafDBpC2T7iVYLCLvHXGc6V8Mh3QYgCnc7XDTzB4wdrUTW4hAomzvi8N2HF3",
  "key23": "5D8pizZatohxDEzWFyGGpVVPe1AKajsDpQ6tarYW2SUFmD6injvSd2bpBMenyBttJoh2CS8h4oVGF7rKRbB3zbfa",
  "key24": "5Y943Kx483zoN5F5r52f3CBbyioLd5zCdBNbenG4hRxwfhiDMK2RbAPQRbhZqkLNtLphZBn1iogruGycMTizwjD2",
  "key25": "57yc8ZWJsskpYw3NEFku64pKJnJ5AAgQ3yZKfM8YXibbEeuUJZZfAjaUK7TRKwndtTf8JPrcq9NPFt6kXcwiLB3r",
  "key26": "27APqaG66E7LgvpXuDgQJCT51bYB9pG5hUvBYbeWNZNJyP73HLJpKcw2s6B3YDpiT879xWuohUzhMRdgWiXBuXUu",
  "key27": "54rw2XuDLA65k9UdHy2JttDoUGEPuEUaepMAPS7cS4abAA7LeyGqZWRAEEFscxroVkhUFZ4r3epY45uLzrC2uyvV",
  "key28": "37skyqHEEUXooV6N3jL6ZvBQyXuGnfB2TcoMNTLoFT8NTPqSx81iYrY52oBXydDuEjPGxrAHDkH9JPz4yJ8rUD74",
  "key29": "2EWKB93T22XmAhKp5YouFUSpF96pj3jazeMi7dZjXshGWqsK5SkY3iJgxyncVkYPFborJV5nkQk8cP9CpNGYDvkH",
  "key30": "5BAhrnCWtHYRXDUUyJka98MtsD1uDGd1DCaUgrbo9oEkPh4VLh2xN3kms2SwpnECH9SodaJxaLsLf8zDoRmu2Hxp",
  "key31": "5EUdCUkHKyzJrPcg6HZN2zQCimFChrPsQdcfFPnUy96croHMSLkQVEPPvK4M8Lf8fJLCRFj47HvSSWfFRNdkmhWA",
  "key32": "2WUB9U4h2gnp6NrbwJyCSwcaJ1m21sd5y3VRW42n8c9N343PakFk3bZ8JiV4TeMtjjea1Ja7y6vJyUdH4YdnPjPm",
  "key33": "5wuySu437U3QQxTeDiRFMK8zoTqN8CPMb74C1MaGYQTEj2QTqw87aSCn7RPNxJPBRd8GG5diTmiAFrxcQ2MM4ACs",
  "key34": "5p2J85Z1QZbZDmyjy2CW4TAtpHQ65YWck2n6EwXxUAtDQc8UX9ARdrpj1WFC1Ny38JfpPnycXqAHfvFeb3egak6G",
  "key35": "5RSUcP2ZuYvQJV7kik7FeZRdsAQqM8pmKftEUDfnAWe9tor8nbdDzaoXHxBL48AMaWVi8Rm9PUGZPQfwvTdKNKP3",
  "key36": "21WGQNLMnryijwNgDjCdzrw8HA8K1G1UrGaENrqengaZWRFRHCmaqAWitY6vgRZRGptUw1Qs8QBALHD3gVZ2orcT",
  "key37": "5zpFpyis5C5gnVT7FVsa4soFbwVxayG9Xu7Teufv4LiWiJKRQKwcLcZiovwRQRc3Lo9ryH3Da2EFnvvirm3tb5kd",
  "key38": "4avUkvn8G27njByBgfDxXiXhmWPVj5s6cm5kaBRV97J17agmS1JKDh4nhGyMEkMawbbgQ8R5K5Drj53tfwXvaPEW",
  "key39": "2xdgWMUtJXoke4oZhNu1chKXAhkSBMstfcU1dFguqfQbzn8h7EfbfoR7ujkroP9FcxyCVhqChWNV7UhUrjzg84xM",
  "key40": "5ZXqox7ZPJw9qA9teAVtRFVbaUdPGHRfshmtbe54PNus51CE1U9jw7fKYMdWGRx7XKKiSARFmM6r82L3oBawhkvm",
  "key41": "5JNhQQ3DbQk3mEhGsdQTFna3wUbtQLu11z3AofNfV98opCMBiZoYe9wKciCCrxYZxyT27nBhekcWyHjU3Ykm8MYW",
  "key42": "4ZfsS2CoEpWXJcX13nqpiaiy5ULddCRbbboCkAa22X7EocQYZbGT36UHafWXagfrvRySCYKm2HyAYHSQy7fcXTdn",
  "key43": "2K9Xpn2Xh8gR9WZLRT5XbWd55AkaabCFMMR3JyhjSyZEzEtGVTNyqYjQdMLkamLBeEUoE4iQ7ZmSTcDJeiGZ6xHN",
  "key44": "56SLyziH933uwKbEFsRA24Lzg5smrwFpqas5FF7TtyT1TuxzqFVa7z4b31qkBLB513icuxuPTjZ9M6XBqdHjxtDS",
  "key45": "5vkDKNVXknCZ7PHNgxK6gEz7qpU6TQMHc2tERjcBiQh6dSyL4NCj9iv4WndKLu9TRqMREtujj9fUFMvffCFxWhXK",
  "key46": "4qYsi4J1aTbtW4VtYeRn84Kp7fkrMojSMFKyRJeRD9KfJyWWWBfP3ZKiwepKc2NqZJK2ZfZbeaoHokDaWzxAZ2XM",
  "key47": "amp3PTVxZUJZjC1qt9AhXBP6d2T1pwoCwDYsjMfDo9QwkHckTUSce7ycnxJXu1JyzQzbGVz3tzuPPG6Ee39KNW4"
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
