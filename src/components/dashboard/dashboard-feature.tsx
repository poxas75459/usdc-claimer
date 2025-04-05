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
    "5vhjNJYBJvJ3J8LdSAK6cZQK2RPWwjD6jrR44VxkhHnEoa4GsuqT24GCE4KSGKT9HaCv4Naiqjnsf6nY8tFSRS6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CDMmxYrLpGt3RXVmnasFutRwEbNkzF8qx7zPUxXMTz7h6Gbq91jW2hyPytjtqz3eC5GkbXD2St7gGXQTDpq8yfx",
  "key1": "3jHMT12KSZzW8pWziRAkUt5t2EmXgzPYgUNXQRXHMXbfidcjCz9vnSBbh39xH318vN93WugN7gnoECPHFFNd2HSz",
  "key2": "5K8jtGRnGosQPxwNCUx7jm3rv6F5wyASqEapcqBsW9P3vnZs18Dfe7fCzg6J1r8XMjFsESNhhh4V2NA3FSHvLiLt",
  "key3": "3Gr83mHrnGfPADmarkMs4bmNVButVABHDuAmXFZe4mC2k8FVXFEbkLC65h7UD6uP2iznoCfmeduKygpAZAXsFabH",
  "key4": "mVkTcNfj3kpRqf8yJ5SF5FgyM4yMy92YWBa3x4FAEjhg6F9cw71FtChqpsWfXwCzGFRTRsxCVsHdQr18Dpapaww",
  "key5": "2NbCbh7K79dPAess3WQLfV8hdzCeQsT9KsYYXEu8bMRMASY6Na4R7H3UxRpBEVa567kRnAT7hUbYzAcT3jyXt3W5",
  "key6": "5phJMxgMhyaZFVviwcg7jZw4yd5JvWbPJWTkjUmy3kGLnKkBRnFB6ws3tFU6hycGRuQZfzRofsFGkrjh3StLKbHm",
  "key7": "LyHwxHbwUdZcBE13K7uT5uBrpBFbSJGpE4zHfrtURQJ385tGPA74TTuZYY2Kz2hz2DTV4Fw6np6nm2rNM6BUzbN",
  "key8": "5tXjdmaa2Mtmt2ZrpEMwzqeUorJozB6vqyD9BEiG513wGq4YrbPrnTKmc4qRPUq9MdFJ9sMPxEDVebUdHA1bqi7D",
  "key9": "4yW3x3m53pTQfDQwXr8fceiojJZoaPc5sKmhFD7TJwv6eHtgoRVG1QRXeKj7E1FwB3hPb8RxtCSTSQCaqvYaaDEq",
  "key10": "2NV4yBcStfehQ1ZqUncySZknbB9nnhg9CKjWDDfjbbEq8tVXgAGR3dQn1f2wHmDEkHY7Dv4QMJ9f4CrhK1ujKCjR",
  "key11": "5poonVE5APr17ufNWiWQyCDuQEQsyHwugWU1eyn3hkykXQSuBqU5fis1GbEREDfpNwTNhANd3aAaoeuWJZhda8j",
  "key12": "3WRuGaWTtcvaUKbtA4ghqFMAqBP8dhr2wDQroXu4ECiChUKCUCv2qnUGinkPtPozbe5zbpDpxeMVC3gBW8s6of31",
  "key13": "4jkARUPxqWqBNUtmusNSQrhSuw7xC1CuZrW77mXTtq5w9vwTqRTdaJ2Fkq7LwbuAD8J8c8KyzihAwrQtgbpXYUk8",
  "key14": "21bozXDdLEfPAuTKbiTJ9WBo1RCpD2vpbCCbLXvDHif9z92SmsdqESQT7Ybv2P6Efpw4mh5rQQFqb69TtV2XRZY5",
  "key15": "xC768BM8Q1eWe6HEn4hBxsxMxF2xgmTKbkx2qdRVLdkoH6boXmxitw6rwAXXZJjK1Fzm4SqpyFubog6TYhio9mK",
  "key16": "5tNC1M8JjY3bqWSTpikgEFdmxAXSxY41VNfbx9UKjS9ShRT6YXgmXUS2eoMnvtqFUGRYojVvBJrgmsJugrrFQdLq",
  "key17": "vqBaefjyCHRHH8mznyBBx39ZDuYzZkXL7KQT26mhKTqXtnvENzBfUfbpD9jaDZRCsBMaRaYU7edN8rn9jgdGEmV",
  "key18": "xbLhBPGJ3ZsuNkFPcANaHXVJJxUfEP5FJWf5skLC8G9x5QEWB3Dp4C4zPipxePGy5G1pKtgcUcmovtQCizPpbBq",
  "key19": "3xfJfKbGCL6PRcZHoorhtVywNHFumoHJe4dUsedncGmBhULkJBCb18aZZE4PsnTwFkptgtWtnw3dpresxEC4k6oB",
  "key20": "5NXXRhLTQpiX2U1NLJtkSt2V63CG3yNePyp7tEfajnYw1HPsRuv94tY3uYQEJyW6TfvSNsA9NA9YGf9nzP36mf2v",
  "key21": "4L2DaKPs5EAmopeP1T8Tv9ZKRk1KK4YW6bdVeiaqNoUuVSTCUNALPi4Q8pbFggk6gLLK6RvojVrXFNz3GJfoj65e",
  "key22": "4MSkFvAzCa1ksv729wZZNqTAGBhXY1eAZrCJnkLaDFYPGuTteqT7ASfRZF5NR6G5HgRb33G4rZrfWadiANztQ1Mw",
  "key23": "3p1VW2a9BLeh8d8UhHPEj6cK2SDyiTc5XYGLJ6A5L6u8BjEZSBducrfPschDAwekSkLxXrAXQiCLfaU13Kf19fHa",
  "key24": "3H5XJgCdDvZBGeR9WbpnZCgxyJWbk6MdxiJ1RodTsuh2R79U6512VGaULBtwbFiUJ1zGk6jHd5s8pdXajCeU2JaH",
  "key25": "3v2G6Hg6BKpxoHhvnoBaYbPKTFm2omvqEKuuePtFrG7SWPZYwxkf5WaKJmKd57XrcFBJhtVrMRTk48CVBmhUQtmp",
  "key26": "511WFmMAdNSr4dca4irz5fkpVF5HS4rrbamV2zjmez1fVDHDi9c9EZCvgWehbaAihsnAv7FfUyuXUXda8dZFX3cj",
  "key27": "3eQrDtAPx1bdpAFt6mccUw35Ri9woNinhpxTiXPGmKUUvgho48XyBtXArE1FtY2j7QckQyPCYpd44Rmckj6rYWwx",
  "key28": "4GfSM2upBrTZREVt2sQbK5QxPRHzh5ds4j6ABxBbXLVd31VsAYjkPddtF6oS1ihrp9YXbNz4W55DVF5FKJcUFPw5",
  "key29": "3sWbtmHzubcfXTqjEGV9ztNPzkdpnRpKQpjZYP8fyZHpCqpPf4r599XuK18A1syyCLk8bNAc3c4hweq3VvdtGkeR",
  "key30": "4yM3NmNPKVaY3RuaBAqQERjJ7gHq6fLCeongTQE4XMTqM7oiV6qP7dvF23zh5PajgQ5hDPJYYM3p7y185xv7AXy3",
  "key31": "5MMqN5yFM3YbzWc2YYxJocXoCGfWNQ6N6zCDubU9X2D2QhuZBoibYUo8gnUhybaK2XjNMywcUN6q2n9vWFZ9NcTc",
  "key32": "5DnMpwSveqwBoB41WuTBRr8pYY4g6tgjKmpbh6rkciUQ9y9LPDrSHkkXqvckqTqB71wYcidoBo5DYpAz9FUqQ5u5",
  "key33": "2byiarxrqi2ybzHx8iYHLzDHHnUpmZfWX4N9pLDp1wVHHqcCbDgv5qjfkQAzCoatZGWHzZfTFQzjZUW5xAo1oa5Q",
  "key34": "3y1KRzKxWqa6yprHGvWQ9mozB81owz1K3MNEFKYp7MGVt9HhGHqtMLpXvUu3Y1W3bqDHUw7Sm12HZ51CGSm678at",
  "key35": "2i8zQVigrdTYGKP4a4hEyURqZzxtJeNvErdEYz1RmvFGxZ49Kbs6gxEDtmh1DJRQ58CF3tHo4SHosjEFx4ATXxhq",
  "key36": "5fumCDpHnDrpkA5hfvWFXtwrjGNsbPQ4KcscLZz5ejeou5bczhfEjNqNyEusUocnGMLLQ8QszafUWdE6RCdFAvW9",
  "key37": "4dRKfUFX258qbsYdoJFCbWYJ8ubH6Htp9K9CFwQXm2rpoFyfGXsFtG52zKWacvwg1vEoEuCrFHVhrP4kEcg4rWLi",
  "key38": "3zxnE2hmBbXgA6aunvJgw88j3WxYY4NSQAk6jK7jzVXh45ybfPtPTHxzjR2S3mh6bgio2jT1ix2NiiCaMStkY4EJ",
  "key39": "25fkw2bsCjimmiBaTmMT63vUs8fgR19Z7Dg1nTFKAmRERSfgPTV475ttmX7eVLnDzgtN2sEnCUzYybdBdWsQZa4v",
  "key40": "4jkuL9GNwRGTE3Aqx6kmocdrNkRLByeiiztnyQSz8j4EhHdAxAGAJUHzzaSUrq4DsXgK9tsrvW6xneFA7b5nMyTM",
  "key41": "45rcmfHwXttSkEecNGBjmZBxUGV7Dqd8sYhK3uzsA6BZLPRmnbax1Y5PYn6VMZhhS8gxVKCPc2i1bDdpUxzS9T8z"
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
