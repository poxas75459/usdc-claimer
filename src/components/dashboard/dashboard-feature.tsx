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
    "6DrLpvi6VKkYbYG11akJWUMDRxCLHwKQhBzc6yxDzymHCw8S3CFEtBvZGUz5puc2amJFqLAWDwLfMe2TkAuLjuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W5kPtD92uAdwnjGBdv7y6UzdqEtUHKVbPrvhJLodhaB7x5xLunxd8xKAdzPc2ZRkmf7kNAiMN3cjCdJBfv7s8kS",
  "key1": "269fgQe5bnKyf6no72FGzftqKC9aKHsKYrk2cnzKavFgDu8MwRj6fPe6esV11Nt3qTvxxYCkcXLydaigkLhVwWGP",
  "key2": "2tcGihBHoD1yoUszsP53sAWK8bEXG45XmCs7WQ27334AfTMPrL7zJqU7ADou4Uod2kLPdniymjN35TbQRewTGW5Y",
  "key3": "2QjocjruBAoXDWFWSU9yfepEQSKYaufm93GXiphEZqxiXFXqFNPYQ2j9UkoyF5X3zj3Tmzo6JdW58cs1CbaQwapX",
  "key4": "adaEj7nDy16EwT7hx5Sxw9z4GExBBzZD4h8P4YwSGjqWxu3PJaowFor2ozzG152LPVN5hTwS4MDFV91gpAJzu5M",
  "key5": "5iQgAk8RkzzuVXck1QuSnrkQJnatKGJ1HuhoV9f968bLvoVXSdVXJxwktB5VepPgm7LG21yewF7b2jAyRzwknxXc",
  "key6": "5s1HZSNiVdhAbL4G8xNCZgXdkp1ed3tJwtPG15JgYaJSgxHR5qEsqUxVDxkKRVB2zUTG8TxY1RAisCq6tppQpD4y",
  "key7": "LbiTvtFstXTNN35A15TZTGNHxtutXRzdoSs3c4qyf3fV2EctGgFfZfE6657W7iY1eW2sKXbGLks9PjhAWLUU8BA",
  "key8": "NaP5aEWdpfPeHjEuxowMJz1Mo4AnPQbr3Q6Fx1h4MroSUNd3RzwaNXg5cyDi1fiX294Uxe2mc48txdxiFY8YHoo",
  "key9": "5Kr8D1bZSmpm5yEg1qpHG8QsfYojMNA9whMtzwjTPhYRxXqcVWzhmV9pFsMVGrgeoTL72XwMTDkMsSfU6whUx86p",
  "key10": "37fsdgbAYSis1RZa5ECihtgiPSL9j4pwhxVBdQh9YbvSivGdTVyFQNnHPSDv5raHXNUE4YC5W6iAufLaPYJt6Gx3",
  "key11": "rqW29ipXBGhkNm735dykGY5oU35AQtnMPtjVEtGgJeMEdnfwbj3caAGpCFDnzmjChsEm81M7B8GKfypZvvNeb4D",
  "key12": "3ioYUUtp6MEF8T9euqCKdpnWQjwCjtCV78y36o89rNVaUXQhsq57GsF4ryqCSwAP2etiTVPvdefzp9HkMhD4RBw",
  "key13": "3cYvbkwdcjAem76PUpdudcniaHcQgA5YJPCC4VitCpK1CKo5gCxZizKQewEk8x63TpnxsAa9vwSKHXi8bwJF7mvD",
  "key14": "4vVHU5unfSasEvkqyhf9nEaQXnGzJjSPvX2xCv3HFx4P5Cs3hW82xQmPjuFAzJEEEK7QUzJyqRqANErddvZYXMYf",
  "key15": "37XQK5EZvFtBaZdN9a5cC8fvGR3YjceHKtp7otVuk7tkReuy2zEh6vDFJFcbza5rRNmEy2An2bSDXrGa4xpHCsQi",
  "key16": "2VBYSPKXoeRmV59FFrgGbx1JJ7GEhaV49zXDSLbAidQ3TiF9RZz1UsRq7AvH8rbGs36umYRaH8z996Ge9bcooHi",
  "key17": "2jAXQuTsw1seu9xBXCDe6N8GwHXaXwkVZ92H6wLGNgqe9KkgMnDmKnpZWawYKQuEsEEAkXJ1acVmwUwQdyha2zHS",
  "key18": "3nuq3bNyKkTVoNy9b98pJRukwNyTxaJgDZdTPspHWgKoqhKq8pWNfK3W5dixx2nciyjNxo97AMBAmt4xPM3sumS4",
  "key19": "2tNVkhadsjGXBajAL9ikPGvCZMGv2hDBTp4Ff21Ms7foc6nWUfnm4xaPCS9P71ZtgeDz24fdtNUJWaZtLGZAGVzS",
  "key20": "2Fgr9arFg4V36z5FChdhTXREuzUQoLhndqpuhGLeZ7n3wce7FareLhL8vR83fgGVNbpPyJaXnTk6EoE5qoNimdbd",
  "key21": "DeXLT6DisGtcQxZfqjP4HCREo7yiNRqLDQvQPAMFfKiBNTmasDnH7KA7soPxKgJqCzanayKBzQFD8ao69Whqv4Q",
  "key22": "3tQQTnz5Ph3DQJ6nbmaDnyzygrN2rGBsEUrhjyEfxLLRSaXmQLbiMRZg3KeAc5E3EXYK4zhi8Jsd1ijEduztvYDE",
  "key23": "596zsEG8vSY71JiqkuDyycDymWJTytALGeKPrJdQ2E9A2nnvJYeUjE9U4yFFvTtuar1xJs7yCGfHQJCFoJS2DAa9",
  "key24": "KFvGRaqmzg6WuBfwNwaCX6p58AP8riFkZp4tmeR3FVftKht6DFwJAQH4jWxWsLv8qKSsJkSG3gWjZThcFWto8Rn",
  "key25": "4CuaqAHqWWZaaNTHdH8wmSHNbho4AgwkmqQhRG7F8XSoBJEiqXk87Vw9sGtTC1SnTJtBCRSuGDxW593AFajWpZkg",
  "key26": "5GVXHo1QrnfCPCnTuzqeDLhVuuKHQJa97zKNASfgi76xYpy4ugkNo3hE8tbU2XvVLV2qyYoCffQb5Gt7JKNFvY7v",
  "key27": "gdC5dX4dgEmtGnGsysm4Mdb8tveC9hZnVt52t6q2tX27k2Nb3ccg4TvXfBXrJAi2fLudg2GSscHmZFQF1tb2kBb",
  "key28": "43AgSm7KVUE1TGkbTEzLs8gqcotac8ECkgNE7qrCj8dgE9qy7eyMQHDMzbT8rM222ZeRCE4T2k1n4pUjJTnPiC1",
  "key29": "5RnEM372meR7dWZ5W3XUbQ8H6iVjo2uyHzTm6BRiJJGnN6cGsq36Px9hDYFEVwwaFBcHrYvm1CLYZLBes9zhuJqV",
  "key30": "WaxFvF734t6p2xzQcocCyBbSCmfQ7RtKNZ4xG97weMQA5iyoR2QiwRPHF4ML1YVzP12KpY1EpWixvM3udVPVvFD",
  "key31": "2DYpsWHkPueZQnvoMCuBqirX3bgHGGNkXwR35BRJs5utMMo6T8KYxz8wqGmkHsYzMGbGicWE6zoirGHixpS1CfbR",
  "key32": "3PR6eYQn7LgRgwiAW6ULAP4x3MQocatxWNJdVxYXS3pNEUxcxqDFV2kZFbixjMDuZHMqNwYoH1R4BiNh4i82z7Je",
  "key33": "4HtDD5qHRJB9ktXBz1zUqmZEFMMn3Jq55QqEKN95pavP3vR976z5tPN8oyBiAKYZCLt5Hdu1kL43QhAbDwra6FC7",
  "key34": "3JLpHgHwkb2d3bBK74cRbgG4jopGnW34yTsfsYnBBbBYxggHE6FgUPjdAVAzEpwPfJrUY8fX9xRtEGkYX5jvrVf2",
  "key35": "3hnLXHNc1arbNThUkGHXRGqWquFja6sY6QG7shLkXQ2acSUSsvxGiEa8EE4JD71Jcyx4QfJ3D1Q8ovBLG5fEC2yB",
  "key36": "66Y1ibnnTJikAagkg6LJgayoh2g2FifmT5ApVFj8kLkPpfNT68tfAz38YpEKLAqmuVzfXd5BC3t52XVVyKehxEvH",
  "key37": "2PvZMC3xfKQVrX1beFABvEiBbvR9L5cb5egFGhvAQ9uEc153a9sFe3KoxaPriuQCx8WHMfPwgi13qFdf9oqZizEZ",
  "key38": "C6dLyaEv7ghZQNDyAqX2KwRsRwoQZprRhmewRhsNUL1xw4P4B9gEtPcx98p3wmFxQ6HJoTKuhNiE7qHHcJHpXqt",
  "key39": "3FQ5bjXK8krF5ubm4UzPiqh1zBG4X6xbzqBVRBhPD9MhRcJW9X5yVzuCXBhUcMr4bRKWdainA9mJcoVmMSvtwRyq",
  "key40": "28Hz7Y6Ui2CJq38wm6aTfSVWJhhf6cvYMgfvapLzJRvf8HX1xmaf6ypJMVZht9SbLSyEEzPj1mLCEYcCqsJy2rnp",
  "key41": "5xaXPu6DA7wAdpdjsyNg2w4mM4eV8SPHzYPaWekqLxw4D9QnE7Z5yKEuKTJTJzGjJgBQxz9vJPRE3DDoznspGJ5d"
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
