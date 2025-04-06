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
    "5gU45fxmWqE7YpbLVkgqwjmowYQPDs71vdQbTzNrk9Mzk5XoQsg4DZba7fAid3U2BUPi57Frv88z6HYJSmo3LnrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NkfPt54DGW9g4qgDkUFK2fQ4FkLvpXcEizbG2FSTifyJjJjLHph2JpYo2xBBR4zA9D27u4gWsWgFWiuUZmCrXbp",
  "key1": "Bn2ATzAkWxm3LPg4DiD3Yqrp4rechBd95irAdmuY5JrgBgKwW5UoxZtrMvvPtCfPJYMkirMYTCGYEWxT5hnc8FB",
  "key2": "4mm3KCNA24JxxjeubVsfuSEu7t2NxgnfMLPDqtfsC769pwKBXHTPddULqCXqJ3DewzgpkEKdnYXiiLgfckgtrrDr",
  "key3": "nMHd3JPoPRKJz1kH9b2Tb6bQDm1je6BsJHReQ68trJK5FViGJqL9tdQ5NE56EhYUTn4FPGpsY44ySM2yRWjmphQ",
  "key4": "2c3B4vzVxsLW1z389PgQ8ziQGRzSc95pfaKi8XX7KhuxtRjRicYU4Hq67RQB3xcxyAx8qNqJs95aSxmPjiS6gFAW",
  "key5": "4q316qywNufPipvMR3MDQ86VDWfX1KnZZWUGiWwhacKN5E8QMEX7J9joRTJM94hdPDeJLQT87JTFdbrzyuCHk4Ei",
  "key6": "2kSaKThn4PgaMxUpjAExAirmuoYbPaXVeVDddpUK5huQqi1w6QRowR3P77qwsGzhvvYS29g8ww1HZ6nmaLvSBpDK",
  "key7": "5Ax18yn5iQAbLQP6mcq7vWhP8MYC3gN1HuG3eecdWnu4GvD7Vy51ffEEMmVtBtDy4C7hPE7sM8Mmb7cmAUVbebh2",
  "key8": "2tQDtANGrzrC5oCSNVEj8LMoWPw8kn1jf35Gmi12JftnL6GxCiekq9TyTyQp1Y1V2iaV7AKNnUsnVC37ju775jVx",
  "key9": "2vs5yNLfydYnUCsgX8LuD83SrtRHQXrtt3BzMcfYjYL7xtg8xMhQz2TZ6BwD7GS2NoaR3atEqjARDpSXU9jVLKyx",
  "key10": "2jc14nVTgWBxsztrzuEmoSzr3Vsu7bopyFwvGAM2Zrt4iAZoydeJLoNPfXaxfUuCG68vpL216Fv2inmYb5aCvbDE",
  "key11": "5EjFGrxdf8hKCLJcYvjHwdiJ6aHVDTG4gdFRYZr2ipLwgZ5FD8Mn937ziwtEUkrKkne9SQhfDd1a4ihmNzWUtM8f",
  "key12": "5AgsCbhSEFrdVm4d7n7yrCLZyytMtbMW7n559yF1hja3LjMYBBjse6pNRa6LDLagYWautZ2oQYGbi3PZWDLGhP2N",
  "key13": "5EkH1CF1qpT3ssGLFCZRgEUexCfimKs4nbzJCojL8VZjkmL3B7yQBT5DcwkiRcmz9KTzxPu8xY7Zqfhbfxo2RLy",
  "key14": "53K2PYgrEj924cx1HUCyq99HRyCdqnMwx7vCQUt9dWUJiFJuUUiXZtbvQxYheoVNm83oXYtpMHq4o5ApAyz2QVBy",
  "key15": "5MaAxhRT6oyQiy4vXsgAKVf75MHZLneJ3SoAG3Ct33YPfdrjsLLzf2VNYKBs12d7EeKV81nMfMsnoHMevKEcJTLy",
  "key16": "2VwM4HuFVKBDqMaPvHDpE1WJQSbDW5yaXcLKModPa5rQXWAN1pLsny4y4u9Ea2WyhqrwckvAG4h5ND1G2NJGUUqD",
  "key17": "41v2M9srF5p58W951JHH126yJxmphJzS1Qg4meQz3Z2PUGjNnoVLRe7rkiF3VU3zbPbgHNMRBhDiagutemvdmZnP",
  "key18": "3u5tRz54zJAFdqzsusUTSSP8JzcLYNZqJBPEvaBrircnirAZGWUMyKdVHrqTi5Vgn3PD99N1R5q56FEBNQobrUdE",
  "key19": "3pWU5qvY12M6ZLsDhg8uPtvzNiQB9T6UxeDWt59aVaVkfgNexZSbvZQYXkCgRqTmnGeCURDR47L3UnmF1eSWpYGb",
  "key20": "5EsQapLiHFJ42nwdvfiuaex2V9cBAZrpnGw8giicQiBxnYwCvqyxLyHKh4SMZZBtTvTzWj3T5VfQZRpLAncYxgY2",
  "key21": "4MYsr8ZiLVfzUTTUyR5rFe21FSnnFhz4bB59NTUo1FmnqeU7BV7gA574V5bZs3rm66hh2Lp64wVYqbo9A496ZXeh",
  "key22": "27qUx9kTEbHCqVwjDUt9d7Rc8gs6nr6UsnvNzE83qF7z9Jy8yRPaQ9QcuADs4nL9tcyUr5MkH5cYsY1yLePBVeNo",
  "key23": "nyapccZJBMnkXkvyDX55MUYfTiBEheFgwd24MPQzTNPFxFzdLdQ2iC9qxEpQNaoqaia2Lo1KUh4Q7W1Rk8cJz4H",
  "key24": "3Ay411a1uM7TRtQNm6zN5WqbKzwVE2EMDy1XEYsBtcewHthpUwMEp1N38FNwUSXcYribpbACeBWpGy8CUTZicFcZ",
  "key25": "32rLqe3fvivsTY7mQFmJzpn53EbnTXGq2a3gQ4BiNfVPp2UsEubPuEppSCnXiVRmbSTynznKNtmLWgrCouo34gTn",
  "key26": "5vYWePFoNQTxkAFAuFnBJvgX2jtxEyUxZBNhswtjnR9kbcNkbrmCm6E9tGkeq9f5kq11LnhCEW7xJFVBY4T6S8Xp",
  "key27": "Yqx58GsXdQPcoxapdcpfXL7hxNK8VN7437ypBev1MZ5y6KWSbMfRHV45BpF4Yw3R3GibE58gdAVK9HAXkSTv1ro",
  "key28": "5sspJHST6xSCYNTdYNvCW5RcPtxtd5JyBJzuTPZQ3iRrKhr7WfL32Q8qaXnZSCZeiGHkK5AjksKDo7rqELaTtdhb",
  "key29": "5g735bNn4kF5ww2SH89tPyayU4wn738eLvL34KwdfXxVqBNSmgA42hxxPunyTbH3D2SExAFiXvYLwAdw3cUULSz6",
  "key30": "2DNyNpCuQAQRB7NyGcHoDKYxXhdzN75qz5UfeNcX7dKwFSkiGfyVExgbRfDBiW1YPvLRFsEmqSWzdZH3KDUVaprb",
  "key31": "5ehu6mPUXnA4yuFVm4Tyg9EZXD8XZHJV6q5WUzTEFCjsXNwqnovsEakUhEPtyfdvhc2kXt9YrjztgS6aEKyDZdXR",
  "key32": "2AvgPiMqshd3TX72CNFf3sYKSUFofQNJUnFdrzJs5BnPHYm1tQMvm3fqvCd6SohN9HKDrvDDhLBTBKtEsbQEtbk5",
  "key33": "7cp8dhjFMZbtarccMw637gsMHySsHeF4PPWRrqGgkKdpL3pavBSCQ2Ao1GbVnEsEY4ZbBZKBWRdwH5zL9dwFF9K",
  "key34": "5aLaPDLfeoinZf2M8HBEVAtUhVSEBiueRp4d6jx1bPfAdseBofdaRgBkmQENREQSzkMZ8GgGeJ8r2BozB5UESGar",
  "key35": "4VWBfHWFPT4o83DZo1vPT8D49qjCDPAdpJLPa2VuCGGD71PtXRmGdptXHG8j3JHj62hGJR8Sv8iuUTiN5H84Rdwt",
  "key36": "5vpte3cyMhms5gLYz8JUwcfSjQfcwXRWpTpk9jkJMEgPgUtBRtHn2yHHUY2CXYDiNeGhW5DJ79MvLWrLuvMvBtDA",
  "key37": "2mwdNUFUGusoNv71w7x16yo9Df9VNW1iU8XGSWw1zTDFJFZ1fyUoHScER71ygUFbvQssKVPrAakNhCnAquJU9Pn6",
  "key38": "2K8xpDLXZGvR3VdnduWDGsagJ626nRJztmHKQXPEXJ873QS8dHG4jAJEUiuLgAcTdqiqCarHumCZUPiPs8qd5AX8",
  "key39": "42KJ7byPdRt9ESR7MMNjt8S4m8YnvwV9vcMjRMYUGQ8EBKQErzGP8FtWoXBJZaMpitDToaekaRKnh67G845KdiEA",
  "key40": "3Qs1LR3DxEWwYghtTLfs7aZaghzKvJf5x8UJ5wQpCTWBDahhhcAgxbFaf7r1gcB1Q9HaBHW9VNEUCkN5QT3CxY7k",
  "key41": "2khRNmo8oUnhsUiWaUpFAVBVniKcHEtsZHMN6BvEYCSRAy3GvNi66TYz8mKLxnuSFnXApLRAX5fpUPdAMbk4pt1j",
  "key42": "34T8W198htbk9bf5wZrChiFdQCynccVJc7YpQPrAr5m7VvYCjSpJi7KeJaycKqX4UZteAcF4LKvhzEqGzCpMxDug",
  "key43": "2PfJT2rh6vLYQzHm96vV5XxQFrUYRH9oNhpZ7AUS7z8vRtawPfrDmCHu1j2R4XKnEHhQVoGPhEd9QPJp4seVoJKw",
  "key44": "HZ4ZHVSJDkefhWPZEUgWWpCC2pd8dpSg4a1LEqEhLhHLm6AkzhW95ZDDfjtb5tP7ogvD4ef8gdEFo2HfyGhg2qr"
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
