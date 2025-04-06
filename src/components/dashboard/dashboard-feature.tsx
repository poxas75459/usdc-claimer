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
    "2X5FNvg3WNjMPJs9T28C3gPBsw9bojjHW2s4H4uTQ5qAEiDA5cqoN5kWwhooK5s74onXrQFmwNKghGq2gAqxiow7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zWNpJBuEXtYQuLjecR5VfHwzt8kSpgKbWLec7XtMVaU1zrwHPyvDS7x1Uw484pjCjcJrGHBhrmzottosb6uvej7",
  "key1": "2UhmXaeDTthbGTfA7Wz76g4a6HGYJsKppdstrAkS18tFMnFfRTNhGmtX6rhKZJ3gud85wLEohudGoKfk3fCom18n",
  "key2": "434abtJXAHAK4dJBQKRQQjasyjwJvb6LEj7JApLxnoL1aP9Gxb168fMn5Ruw4EjprxS8PedMH8GzNbsXu7tK3xxx",
  "key3": "2WAYMkXkEusfMjpC9yas7EXiXJrBiKSTgReTkjpWtUv6BGXdpmkNCEjGBeNMvjDjUnYb5yfzt9jtdSFN32L2jMXZ",
  "key4": "aHGbXnDVz5NWtdpB4dWUxKPFxox6q9cT5Vt8J1YNAez3n2ZLXTeNWD4b9bzdqbXg1iqEwXq9wVoGoo1CtZoxKZV",
  "key5": "2EavRRi68ae6N8L4Q1sYLCRMCfGLVaFXMqtHr8zSi1eEB391bHtz8qbtPTpPkZTsK9uC1i3dGGu4BWitQcsrrcME",
  "key6": "3TddM1R6W6FarSbPGbnW7DFJL2W8jRb1aUXC3V3swaSHBy7DtbYpPr8rVUEVpDqUZiCwXsqqX19GChfqjcynMhCy",
  "key7": "2mqMcC5Z4Gzzw26Psb8aW6s64XE2bczMCDa6dmrnHFbVcQ3pS41Dwd5RBhZR5rvrcNpUGAdg6APyLbHrZfyf9TFp",
  "key8": "2b9JCW2rfRr5Ap2Bnc7dVV6Ubk2yEMZH4B6GZZZgkCgQrVJtWKjH3fdAebvLj78MKuJdhJSqi8iCgPYKU6ibHmqi",
  "key9": "5giD7La839vCPQQhAaBWBThp4t9x8nKJQ8HgC5fEEoCzafG8cpyz7PdhRfzVXwZyAdQfwmKuHFXeXBtYutMbfuGA",
  "key10": "55voQgATz6Z5cj55ySrznv1T66ko4bCuY9xsroWksdF8iWyfPvvJdKdM9tsULbVEUU7gwZjMwEw3q7grQRxfVSgw",
  "key11": "5gHcrt288KaWwQuF6U2e8ThXQvQ9R7k6VqJSBNospf4jMw1BPBsJ2V4QiMkQRbNKs8GvaqGxWXj7eekmJo4nxVsD",
  "key12": "nh9wRynY1DsqdZdwTDRNVSVDSknJN3qd4rFUSQog4FeJLwCRfMN4gw2djMzDS3Lm8D8DAzEbTpiKWhVME1w44r3",
  "key13": "sYs1yZCh79TPGpxEvb6o6Uz9Gs37DrNEPVjcWM14HWouNXHkm5xUtf66J4oySKTEWHhcrWyXiXkBooFYi9moEbt",
  "key14": "5fha4ibv1uQUzcw6Xnw1igToNZaCWjAs8PQPRfvPfw2tJfuMqjro2djcgN9CD65QS9QRBQDiLhyM8zXSwFqRodGu",
  "key15": "pipoJsU1oLYT9u8qK9nYPAAvuana6G4dbqndah1fUfXznM93QCAwprXFDLQhaTtpzVSWcE58W4mFe2FLYMMbqeZ",
  "key16": "3Ndf5wVxADfBVidGzd8Sxzs6Xk1MsoYHwN7RTyUkEVEYotd75MUbjgKaXES99HQJfckPPf4TkNdGf2SFBg4QjL13",
  "key17": "4FcKThYDsLUarXqqHSweRQkiKuxP6LzbBnZVtmLgT3tGS4JJsM8Ek6oStd7xhv4Hy8RRuat959yoGLEnHYveHDSa",
  "key18": "QVm36QYCDtmHxReWnS2zqbS1TTrYP2VTTVepaQRWiTb5ed3J6cirTuo5ec3rrB7bBVBZkYYRfCR4ukw2sc1tfoU",
  "key19": "4xB57oZ8K67A1SjM67afZkBdHMtZ9nhbvCoPD4fTJ3w7KutJg4SHipz1crFtdgioyYMutr7t7g4nNX5TpuHuoJEt",
  "key20": "fgxa7BYUq4WBcSCimX7Gipzgox4Z27kNm8ju1o62nCiuLFQ9qwJtL5intYH1Z79Eh14sN3trLyRaeR6X4DxAHse",
  "key21": "58JnTg8kDiYjjTcgYYUzWjqAYQbxPqFzFQGLqvhwJL8Uy5TbP2ZWKNFDwtnUkAdeE7VBqv7yC51rCyWLYkdAmRrP",
  "key22": "5oVR684Dan4rPx3oHSk9z8FRKMcZHXpA48wgt7Z67u8D95igAtXokxE91hCSy28HP6RKdmpSbsiavh1nT7iNb1w2",
  "key23": "4rxFMWkX3cUADFFWWqepwcmHDro1oJqRPWxZrA81rTiBiwtQ82sQKJxv9XqNbN9PnGysQshUbcPeMeSx5nKV1yVG",
  "key24": "2d6opgKZBeqtfJftfJo33RtU1fmcTM6kaNLAgzQhDXBnTLzZcHDnJmvbcoLr3EY5Jok748R29uzP8a57VntjfpSK",
  "key25": "ok95vcQij6LicgcqPEDHguc4ZUSqFGUnxQWg6LukK34vDHC7EizWCwwEiQTcNGM8SDjYCQ89Z3UYanyxFzgRSBQ",
  "key26": "5qe1AYgD8beZkTRnmUdu7kDjhPLePEPCaa9yDrj9SdNU6zjKWUzS2B3je9LceBAsDvNqL6zcytAJcUqdgVwjTDGg",
  "key27": "3hBrAufmtqwSxPwrfg9odmiqiRWXmHuG4qCyWZ7fsYYn6FsMbjYjaRo5tQQ1jKRJJGatscPVsasWNUK1xRbzAUzv",
  "key28": "as7gPqqB2ymAc3wQuYbYDAU2UYhnredWEmbSfz5VbPHfMUbmJq6FteM232wZuwXhgxPYEy7HuXCuGv94WRS9UAm",
  "key29": "3eDPh5LuodNcS77kDucHuCSDDCJ6Vvnk9ZRc8pcgGmfgfMYB1EUjq5A7X6AXCW9KYA5Nbxejo78JtbsCU3yWWEHs",
  "key30": "zx7cjH8e9cwurr4oP8idSavLKzgcm5vkzuAzBiDudWEvS3pTNPSFvUReXAwmu3EeEVfcbK1aAKZm6nWKic58tiT",
  "key31": "53mEjDkgLmL4t9Nspw6WkeLrjhujW9V8Y2dfgNmYCB2Dty6qk5AEeW6X9WSqe4fNKUo4dP4FEutrKvmFNtnNCf8S",
  "key32": "oDzC3fANauWLdo2Pgn3YHp3oSQ1d9aarhosjPgga7ZDt3pdAtW6GSq5PWZsrArpaEdSf7xxp2TxA5W15HntmwPY",
  "key33": "2zhaNw9tDYortnoaR6ivFtdfwtkXzfZ1GPyW7itn2cNJFZ5wqLCKwvkRaYu7KADKrwjwWgLTBwfSoHoz4UbuuzoN",
  "key34": "4FmJNJoJi5W8ig79mveCTj6quKcz8DYsyWtw9qU4EdiPZFdcuoNNVP6hzSYDiZLVWWzNYRwJdb5a4GfcZhcHTJKc",
  "key35": "qsc8txWJ9ckC7SMJYngzKkqLcgVSkALNWB471Dtk79gKo52rdttYS2NsLmZqx8MvYfe1TWApmDBh8avQ7yD3b66",
  "key36": "3cYzehZX4qKoHRtFXZMKAgacQHZNkXcgYe4ht9i16nJAmC9ZMdharf7ipsDWXv1PZscLRcfnww6X4jiSArevfBb",
  "key37": "SfbYJ43qFM2imz6bVp2WXq7M8uudgxh9UxZ2xKaFA34z1gwpm9q1qChktFp9qVCJqVJqB8CFCfwUbhdeWNP4zpD",
  "key38": "3WGzgCm34e5gk7ATkhZukU871F9JoKimtQTi9WZqT1pnTkabkjiJyQpbxKye7ETqSaQ93HtLMvBvZhqrsgvYiLmc",
  "key39": "4TDawhKmDBW4eayRddoi1XXnQiSi33zsxrsTgBXu8t7kt4yqKvDpkvEt1SnL5cmuCNT94cMLyPRxZfz5UPuppuZB",
  "key40": "boXdWHSdshpPcA5MhUBk4AsJRm3dBsP4haM7ncdgM1NgGTtrXvre58UQ5NDDdiANpLaSpmuqn56z4CHM98fiCZp",
  "key41": "64E2CuTGhpDuyCmshr9P1hNquYh9eEuCHeD5hyphdknxFgqem24kZwiC2d5CbLHupr4N6FoiXGGXR5NxfCRrtzRp",
  "key42": "4qT7t7opU3LECoQnyetU1fRkqnS9RF9GQxz5wdWLxMVRHfLWdTYtD6Qot21DJUu3JgUj3MQShgkmtw6FANoxQVKV",
  "key43": "27RaBn1eehaK2BTUqtkLFQeMnkY9SWuBe3qr4Jze1fTcQ8ZXDFF6RqS2mrpc217GcsJCt7XJyMvp12DQ8zRDwnZT",
  "key44": "2kdLWemFxf4AsVRDJDygX1bc5Rtq7i31HSW5vRC7QSFB4dEex1Kriebu1svxi9QhsGFahCtTFzUAJ8tfAYE3BQ7P",
  "key45": "5XbfVsSYFNQzHrzu9HkJXaUJDnCWCJQ546ZKboBmy2LkZ1ETV7YBQ1FKAnBTknL4NaiuKXFR4emcaENa9uHm4ELM",
  "key46": "3Sz66zcDt1ecDr6EkDauQyHLu1ieJw23onmZuqRZXuWQCVFQTLqqZkmU1hhceiK5vcuxhx9dg7xbFSEWcdB35VSo",
  "key47": "UEEYakehj78QrCtZsr8iA4btxxrPDnjH9qsTVKqm6LBk6iH7LeSxTj4yqVH9YtGYcBL328pc6yMj66AJQajbdTw",
  "key48": "55GA8WtRvPUAA693BqoJQstnVuGzQBve1f9YbHKyVsg8PUCV4dRNx2oHFiHHSMiD3Hwa5YB3yYxmrvXb97Ux1W8r",
  "key49": "2UVi6jV5fGjGY5d7BL3SZWhSr6iYogdTBNoJpJDDcZHrPZ4Kv51Ja9qtaSVPdDRRsTNMGEACfLGQnm2gWV17D6bN"
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
