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
    "33oR59QXon2HrMSQMHHXqLiPwkq6g611hPy9mVa2mYXyNPfSJwUTQhftBRdbBZH9wrSwkBx6LYZKY8WZaymf2fxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bRMmkB7W2Tf9pjJmbUkFUNyMyJGcA7e3JJsYoDxKZiENMoE3PskdPG5Pjn9v7sBD7L5cTHNJgFkCibmx4tCpGdg",
  "key1": "jGSkMrJxMWf4mgdBYnUVFUuYffdjJA4gLBgZa7DRFXdSsRXV6miA3FxRDc1BKHDiPTYpeF6b8LwBCHqeZZSdVfG",
  "key2": "ZayqU51UBxzDnNfnE3Axw9XSKWFS5iKLz3YXxry6N7uw1qasRTBYysWcCDxoGfeuoob8MvniPAujzEZdpq3UTe9",
  "key3": "36yEG4uF63KHEgJRx8YDHKdhnNGRoHR49L8hF9wKHgsdvnxZw1VGmdgoE8Jnse2c5bozE2sVjhMByMFY3131Bwg5",
  "key4": "3mqrSJL4kxNJjhozpj2MHfXz7KNq3GnBsUe7QHBzTYCnRXgewgnjQrXrQNz6uSEkSqnoLNrSHWmAHbUUfW8CjjDM",
  "key5": "51YB5NRNuZxS244Rp8wFEBbw2JU1c5RCrwQ3JCq9p6bdUChSBcUK32kpNuZS8ZVnDc3geQ4Sft5p5GanRmnoKwH1",
  "key6": "wEpehyqinTSYVaVLYsFowkE43ZfyvMZ4x833eteqivsNzbPZiL8Kyis6FUsZWpVbDP2THSLQFQ1bs7qVVKu9XGa",
  "key7": "3NjMyDFx2MvwT2GS9sXbhAoXQDCN8b41pF1HtXWde9NW3BkygKJM9UgS6KJnwoiyNYkeF9a6wq1ySm9rSrVWyFXR",
  "key8": "5mM2xEG2v9zYHUrAS7u8t4pkDtckwpkSvjHqV61RD6mocrMNzDzhuS3WQPfw45PUW5bWVde1Hzj4kxnGWsmTYVuQ",
  "key9": "3d4XqnaxJF6h4WoZ6fKPxsVENEjW748HNPYZ18cdbb76cqi8AC2LTs5viuF4adiPhSbcgyLKwZWNXGKbTrrFuwmu",
  "key10": "5yGVpSa5umcgMANjdvhp1LWnN4it3PruEXJo6NLCnUxg39CAjkjzpMxcGPbR12eyJugMPxrymF2xCZU4vhiBpzxQ",
  "key11": "3keA1QmrkfzHfXfvhw87yryukWvJRq2u3t2HVQSwQBLY3si13CkXaGEsFgEZJb5FtsyqVKkiwYAbjmbmf2dxa42W",
  "key12": "etyZMR9eJfgGmfu5NtKRvdMeHzWrHDsowPztrLs4djqAmEyKVS9GuRihvPQQFcWeTGebyZccdh5A7zTjAxs1vqn",
  "key13": "24PXmRhk5upToDbce4aM8czabjmFcsdEKRq9ziUC2cVTVPrzwS8Y1fFSnd8q58tgcTcr2P2rsCYk1qhCWz3qPZ28",
  "key14": "qWPFzphwMawGzpyHcc2xedKeKAdv42mdP6hDXCpFwq5KWQX1jxvdzWsXrdCb7gQS7NYhUn7aesx9FwtsQg5m1NW",
  "key15": "2G1vMgnFZ1Y3Csjm8kRjeECavFXHjeRo4fgwEHVFigkUhAyU1uSbpXWYQNK6CY3gvFYtahdJNRvWYB6V5awVmiFN",
  "key16": "5W4dAnkkU2NRhaoBnnJ2sLzXanTkDGRe4eEgkMiCUtxYmony2dwqHv6saYXFk2ffyND4iiktekitAL1MhxWHWdey",
  "key17": "2PuGdVhS7m3CS9J2ShmgWnEnTvNTv8AFJRqJcvAw5mq4ba9ZCxmSLSzMcYffpSNB6YcSfgrxrFfoG2xg6jqpPJno",
  "key18": "3UCJ31198e6GSBx2sGEmTzozynGDztvmi1KxsVrNJ3wrEzBWM86xyf7NxY9K8MmTX8UKL3A1QpKnSRD7P7Pn295b",
  "key19": "64vB9zveJgLskc9ehu6CGZiHxYP5oe2PvYtUmaadsuWhqRRFrW57Ctzyrx8C6UJn7pHspXB1fEaTjkVhPTpmChFi",
  "key20": "4xh25JoAWAD3kk3YqNwJno2wr8f8kXAdeSb8Ao1HHQKARAvbwhxofkGcQEJ7JWjP7pzWUkaqYKFnL7Mj793YHTid",
  "key21": "5TD8Uy15utN45Z1UAhREdGj25jXnJaEdPSHnUqPPUgVQjsMktmQgqXFe8nWKeBBV9aFkyPajMxZTug7xb5keCT2u",
  "key22": "2qQWDFCgVqNPTE4kTqy841XT3xMKnvynTCXnjhAA4b3Nn5iBCJx2eAg5raYEyK2fdsdJfMRk8GfrtnN2KPWde8fC",
  "key23": "5k6SgTqVNb5MYD2PfQQCjasMK7kxjELwjkjwxYPdEts5mZzipVMQLtmqiGB17HcBktj6HfoF9MJd613ZXHTjHDze",
  "key24": "5zzySGbJR731qUcvXs3p7uesXPsXQxTNecKKZsHzQkWJPKG7EN38uE892B7ZSbkQQpLgutZCdaGVsENKbWzY8J4G",
  "key25": "5VLREJcLe3qKUinUgqtVRhLDZCe6yHBkXPFcBG4FsxMKBzvW9v1PfS15KPFHS8kvDVxmHo746o5b9eYEtwJS7pEu",
  "key26": "5sMWKppLpfDfUZDbKxJ5HBXKWyppryHeFSRdn7e71kcdXJar9zLZURUtB6bjBqdNvA8HBPKiZjjDDdrY7f1NEfCg",
  "key27": "5qcQ89kopwG9zZibdXj156m1Z1HM7DgxoUEkEGeuTYej7by5FiCHLpw4EmwEY9bGEEAmNLVotmjmiKwbvJLq8SBa",
  "key28": "5T7Rthv6KTT57r4ckDTeDzrvBzkHAoxWkWjG3sbYAXuDYDje5q3sLJhqz78E2Yf4tRVSSSo7U1hUZpHqEoTnEEaL",
  "key29": "4Xr7155mVnpbDJi9yZE8r1UranajNVn8WB3b4k5jE2i2oZDS6L2QCkz84qoNZcPa8UseHyBRamCuv4dQbYBRwFoW",
  "key30": "2qjMNWFhxSVKyXVrhyK4DiQFxhgz2447tBjgoSTGSoxXzaZgcmmqvdDy3yhZnPTjmnzhuhwA8PZD8qPTMd1NZzem",
  "key31": "3kMabaS5gxoS5ciymDQHjsTQrUrcr4EkYkQbpg46MxK6tdrGcv4ccWe5fZKKTUud9JA3e8wAr6nCdPoBu4mSsdyk",
  "key32": "2XVRyt1Gy8j8WQwaNeNv3jTZZu82mdHfv296s2xDSRESc7d85XbeZ9b1JhPYj5apsiUJXdPNtJqsk8uFJBVyNh8h",
  "key33": "59K3WiqrScAuzcbsVPZrAfFQAByk4Z5R8HT4mXbHnJTvi5hf4TiAqk29f7bk5ZqL5ienVPAtuv1FCub3CCqpmqET",
  "key34": "4iHSY7rGhDbsH6wBVaKFkkXKGXvkHwnFbBAEduGjX7SZbFhBeZ6c5SJdGq9osP3XGuUu6S8jcR3W3wrnzHxLboKs",
  "key35": "5Cj7NGyFfNYA7u7WWPDpToYt2Feb4JnqSMBq9sh2XDy9nUtayAkNP1ZhGVAkv2HmZvvoLj36Bk13FTPhaHNwa49K",
  "key36": "2ZRLxUGYyzSKTu1uBQ63mKPvvfk8Qjdo7LY2Hux6cBL9YBUaCvEKTMjZztKpzof3cJmsudEEsBEGqJC9bjYgS6r6",
  "key37": "rxRVunH3E8ypuNbC5aw5qbSALGB8JdK4Y4NU9MCEsrsCHi8Xev2U85XtoeR4aLxvNhgDwhnzGoKQB2kdKA8pMjA",
  "key38": "2WgUVs4pECtDVvMmD1CSkPDpsCjKiwRnBdZc39qptU6BU4ov5u61YLwqXWZaYdSp4nXfB8AUkaHiw2bAiPE1PrfC",
  "key39": "4v9hT7bkdiDPkGATFsS99DqgrgcNMbtG6hjm5eLch3vbEXxYX4kHpXvuxXsTBEcN3xHPbLvpCP1XjKto79DMvPWr",
  "key40": "5JhYJ33JqWtq1KoWJfKVKUVUsR8voAYjShN79hJHqYQkH26WxiDSvq8pASuKTYhpibYwANBy99b7HpqThw6H7ww2",
  "key41": "5KRoZDoDUAZTcVEKzKBT2i59qRaNStA2AAaCiExFkvCMVpKuQB4QRxT58fozBi7FK1BRs8qGhKr6t4y3vMSQQeGX",
  "key42": "48nf2peVnBKPqFq9wezDqr7VuiXWeS9kxUwMmmpwVvDGLcr89GiL23DwyqGVhJoFP9a8k6XCeLzQj4X8TAPbmjGh",
  "key43": "5cj9kbgky66YJrLfwZxQeWznTujyrBSXimtcwyA6RMrDs7MWUFkWdSWqqjr1tm9j65eKjFwWzmVt7C3sf9mrvs4p",
  "key44": "4qjj69ZXthbvo12yS2bJLZXyKT1cAfVheRhm1qmXaU2jMyGDdhAGWS5hWpHLNMuFwiLGDYyceFvUx6SPTUkXEvLH",
  "key45": "65y2s2dFbNUpews35L7x6sN42GGqMQqdgHbV5Prft5dzuZX5xEb7wSxco1MrkFhCMzqBYjoP2jNYk47rxqbWL1G3"
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
