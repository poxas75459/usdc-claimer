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
    "28XUdWYA8FHd6nUrVVmLgK6DJKtf7gu8f539PJzae2XveYyvZ58tSrTEVPG17tznXAEHqKChRX2o2i2CFewDs5QS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7945Co1kJjN6wsaybKw1WugRXYvWE9RJmRgS9APwMTauhPtFtud3QpAUT6w6uCKA6btvHpwvEUTbLNtemGrKMcv",
  "key1": "3AudYNj2nZ5tdiS2pcpVpxNCaPheiY9DR4zaypPUgu2QvnMJrimTurdMTKmodRREWBDXh5B8FYoETkYGsGrL94M9",
  "key2": "4ZicepD6vBHUdjXYsJEJQ41QA4ff2mjaKrbK9ZXQiAN5AWfPXHXfvTCjpheRg5uuxfbgBjesgCyHgxNG2Rbd466f",
  "key3": "2G5sDtCxqe7WTvu55kTVGBW47EkUGvTb5mHorMqubB5pQXz8wDnoGuTzzajeX4Tob7rJmDaq6KEahwdRhgvCwP3N",
  "key4": "28xRNbRS8J4vi5c6yRd9K8DQ5MPcFnkeH4C1kxekto41hpukeDyB3mCsaCEGkfbe7fL7i8ujML9hXgHUpp9qzMq4",
  "key5": "2DQDdHmyRmqmwjteiP1TufNtFi6rJzjX8YUSq6eeEuqBeGsmgDjT9LkVA4qANMhqS1d6qRSXn2whB2yQs3uS61mp",
  "key6": "nTfgKS8c5H5TR2r8NEbUZHrvdTHKH6kCrtBWzwLsYcpCuwxd2KTR15fXi25ThyCauHexLYGR2dZhjQaLkFxHr9T",
  "key7": "4aKck3bsHVTY8nYKmfKHTixZ9ye8oeMxgDGFCtAar37ujPYfxXiUu83KJWtK6KbfYnERFvEXyuvUJJTY5atnPHAv",
  "key8": "5dZWKydF6yvRFVs2wNQ4VA1K5u1J6nM7bFJTv7kApWzTRfRrKbTh8mH8RbWpKrNmz95tuLq9VYst6bwZe1SyhVdt",
  "key9": "WUqvMn4Wg8xjLasg8Fn5xoAYsLf71WaspxSCP9DWeSbBJ4Pe4Zf7ipPL5B6Ekdy3xisKhz8jxYjdvajxdZDAM37",
  "key10": "jVRHc5EZKfPqnBdBAxYsBZAf3pMCqga7ngMuNmJsT9U4nnQtyYL1Wcyb67HxWsmRMfv6se8Hvj2YtvuVbn5Vw6F",
  "key11": "Q2cq9Bm3tNLYVZaUt3jptJJQ1cWpvNnyFNJyQWLEa8GApuCAMKvzrpoxzTzoj9Y29ZrNf4Gv5SCW711fxr1B7iD",
  "key12": "2kyqtufR29LpdweBUbffh9g53wkSHwopLDGqPJADyFCmxWyPsxq49Jf5GZ7gqZPRJwp5HFoRoK9i3ziqTXpon11k",
  "key13": "4onogdTkSuSreUBsSwAMGpjHjFNwxVkYrZPkGfYTPYzLMJhZ8MLwscAWnsV59JpfGtEyukgotxPSuQcKXHdGkWJT",
  "key14": "vjZou9qGEJvV4fVyB1tgPvGo1xn8fSQW9JLsoJstKpFU57baoe6fWbPXC2m2A7A73L3SK6ccj22Tw6qkBhexKPG",
  "key15": "2YY5vn5xQBqXELuwQZLcpEYXCWQEm1ZRdfVD4PNaZJXo8ERVy7qmRwrg94prtFFPouoDtz1hyRwcpyMG8es7DCYv",
  "key16": "5h9EKZTPQKqLAPe2GUTGtdmvasY5zzWh3J51y1eFba1JPGEJq4F8XY3F8TSLrBB365sHSK2nZFCi49fwqRMSxMMB",
  "key17": "jM21nsqb6CbrYnfP1pE2oGbrjaeQGxEZ6yny9er9aeYft4xUMSZHRrPugtsvBEbSKNqXhtALXELWzkvgjKpafMp",
  "key18": "3kUe7BS51N14f9EJXVpW2XVhLsiSviNJw1iYAXErESsV1xYURSWQXaQ5B6Kcf8kfmjSN4iEEzo2g3A8YRyWMNtxj",
  "key19": "2SauuQiDpRm7P3RkNVB7kXhJ1M38McPCciGLsr1kXzHmb4aMpdnDdgehNJhyGhnHNAn8TH3HpG8MmjC6uTMdNHYj",
  "key20": "4eESMXLdk2wVKXssitW86zuykCBAXRmxL9iedo888m3EgC7kypRdFboZvQ46fKwdSSMTq5Bb6bhmHu4yuNZoJQ9Q",
  "key21": "48tDdFXhCJ9N39NKD1p5Zcjv4JTiYfRQdx26qtp5iN4QaeoGLbJo8bjUwsQbY8ek9ZQxVkctxEe2AwA7o8uQKXRc",
  "key22": "SagcEZZxVGKDrA1qbXhMsY2LNdpkUYMDZthTqcES4ZZAmCTR9fhiuMD54JV5tCjF2cCbR4Cp7AM4bjwLFvRFwWK",
  "key23": "5aRBycWysiNYDvmEv7X5ZY8RHyApacDQDL6BY3KTUueJAhDTxH5PQsbjw2sYZQaKjxxyoxHdKHmVRFvPNFo5hGx5",
  "key24": "3s4SRSBzWDyf4Cwj5opMCWjB5pzH4yx8sMSg4CS16yUhtT4pM8Auh795e63SZSqrDjXBxtSC5jzDFWiSRgBEFYU7",
  "key25": "7d1Gfvw3417iQbB7stiiDKbmjQCkqPRpLpxk36ri7e772RXRtewTL1gJM356XeFupetxJat3LQwDuJeks3KAYfL",
  "key26": "2rmi7mQJaCqw2H7nRfYS1M85MGdTGubs8wUVn2BD7nyBC8jyzPqTR7TWpatAV77KmGGMWhJjRbVDrawJ2ZzfNqEJ",
  "key27": "3tuVjyLvukS6ZL2HUveoQf87cYyxGqUqjfLKAeKmPx6pA4vBTDJLcJGYsSnmZoQV4QcBKme2kGXKU2iBFerSmUtw",
  "key28": "Jt8HYJopJ98zGxCc2tmEHsmQ1TwXGhQZ5fM7Kv2dATozwmGeKH67LnHqNjaMdBPbtnyra2eWFJSAZsQqwYu217t",
  "key29": "jtorZBJhBjCzRxKbc1fMa9tU2Ksem3wC4kh9qzfbp2TKgwUM8R8tTiJ4FU19tVhU96ckgijBggqt2oEppcDqtMm",
  "key30": "2jkfzupevVrH1Nm9rvEWo72tcJaXTorYgMcpeimDiPoYNmBwsQw71XU7C8BsuhrkcZuXPEzXefB6t2UH8yYcMChK",
  "key31": "48okaYmzyEtvmQGLjSmacF8VLfuVHTh2FJ44NAR9FgnpB1mrdVgnjbeJynU5vWmcuyh42PAuH63oXo3mntx2gQkn",
  "key32": "3JPJotYRozn5KFKasSMJhB2FPw4UVhDtq45fzLbY8yU1L2D8KBRmf1cYbVH5NkHFc7yAVDVG4VKm9C8icUTmdwew",
  "key33": "2Q93pjVDbJYKk9WpQ8t5KUNVrAUxP2tcwUHxxvMg1BJKUGfPaSkAnaFVS7hAQzBBMn2jX8MK5zpj9ggPe6YtyC5t",
  "key34": "61zYpbAmXW3h6oRmT4Yp3FSDhCU33b6yizypwCZsKt4Vu568pSsJFcXaykNXQn87Nn4xP7FQnkPWEuLeazioNgwW",
  "key35": "4WJw7YWvfvPHRyRDS9ivnaaaezr4UoWgGL1inP99FNe99hrMJSgUHwwxVTbpz8K2CZuNbJaqmmU22MoNDhfC7sTR",
  "key36": "hrydueoxNEN9Rz3h2UDKbnVG6TazSexHz49jh71KWzZKZPceKLcFsu2i26uAuZfcRBrhkeTiGMc798TyQzssWp9",
  "key37": "5UgZTKFdfXBn2kXjKZPGYQ1uQinni2iSncykEAos5zBmzrFrwCumNHvpziVW4zvCD9xdEja5Sqrotc732dg2j1c",
  "key38": "2a7jb4VLvqS8nkh9ZJ3crSB17GZZ8i2K61EwUWtduzVoaSsRpua1fztTZ7HdKSZjqzRYbfmFypjzRLsw8oeybnNS",
  "key39": "58rYUYB1UE7TmMYC86XXbEHHEsNGQ5XkL4mBuGS3jqsUhqEZTdTw9JyGCVowDK3upzWgGKQSWGm7M1FiS1KWjgEP",
  "key40": "2RfzFNrXfhHFgzPZeo2gn1erNdV5vUK27xD9fVyNc2vp5C1mzsjWPWEq9FGyJhUFTX4GMBDc6rwz2vj8zyU9Yxg1",
  "key41": "5eVozCtTcfkJp9os1prSE74hXpZ4YJvVSAvXxZfWQLs9nmvE4koUUcCznYCwP6JNgNNVGDv9JCWaQtg8Pa963C9Y",
  "key42": "33oHJimCN4Yno373q3VfWgTL1bzx4G51fE9UksL8fsW6xkzaLBxLEk5dKg64GoDp43LvqPCVr7gtc65RcH5XhdRK",
  "key43": "5zY45CypBQHV1JHvW6f6QxyfAbsaEwMHjbGkstGbZLpSnLm89KwV9KZffEPgN5dVqzYAa8xfAYvV4uE2FvEL99Jn",
  "key44": "gTNAr6EMkWKknG6y2arz3bfsG8H6hgRiXYeoUt9YidPz2GB3GzVRfPyTsPy5ahEAUcbKTB1z7LYsSzZwLUetcdA"
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
