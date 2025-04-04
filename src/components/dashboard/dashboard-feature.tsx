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
    "5QXaecjHK8yRimPqUuuWoBozCFRb3xcpScMe5JFHahAAW36c8JqxtUh3hqVBrC281PoZkimXkrZ7a54SrQyxsnSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gzHc9TnF1ok2AqGfShBmE2guxD1XyRfwveYFuzd5cnZs6gy4HHEoBCkdtKwzSa6TDdixMCAuN9DS6n7zi6DxUYA",
  "key1": "21r5CtLk2BhfhkAFDde1AxVKiwCo4H9yvXUx4ZdzNj26dwux5ftPpat6JeMqBdS62p94i4krJqnVAk2sfMqFag4d",
  "key2": "kpYGzKCy2bzHsT2wYt5DLXEFyu2Z5LmK1Z2ZpamH7jWN6VyjfTXdbKZLkbv4Wg5ceDJnuNobL6cM9E1NhufgPXt",
  "key3": "2MKcxJRQHNmHq5keq8f5V2bExdjqfKNuHzsimS1DTbyN9K2beNbWsnrpA33T949rfa8VKeNyP6mLj6UhKDajENU3",
  "key4": "3G9oAGtkvCpSgzoTKp5EHujY1C9wCGExK8YWzSWGFxHx5f9GLCDx6N7ghy9QyyDLnSgf1BZqkrk3jqhP64LueC3F",
  "key5": "4wNwgNX4GeYQBxeUs4gEaaMEtCrzS6ptaY27nEZqwcJnCBsTYPrYQ7hCBXpXVWc5dVKw8cnACuGpdr2WXkp5Nicy",
  "key6": "2Upgd2d5enswjWiKoQKR9BytMv1e2XWzfFGifE21UArAT4RxE4SiKzHjSVMKu5aFfw6Bnx3uAvdAytsz9Sf1rRNn",
  "key7": "52wbqw6vg8YA3XfbiTrd6shWhpMBt21NaX9e5xrfHzU91Vhhewy3QtDxyCVfCXHABnh7xWYxUi37fMLY4dW4gz4j",
  "key8": "4T1vipFVekEF8U8eeeziGvMN7wVKz7c7ndcVSaUDSPptH97MLXByRfboZbgfTaPpb9czfhBjuz26cD9uH9GKtCNR",
  "key9": "3riYjX5WA8nAxBECbZ54zvwFjZAK9aQG3QkA2qShnZHLmirJeqc9aVodXWfqWP4UjGbaNoEG2mBPXTJbaVB49YbN",
  "key10": "2XFBtnBVAr2DHwFSGGw2kFp7BR1LNhhEeuVDANAc9rtmww3D7fcb4QQzRbqvZ7zctdDHtZp557B2CQ36skhHux4n",
  "key11": "2G2v4gGt4PR9C29PR4jqQZoKU5gR2LeMhcnM3vnHn58yoJ4kDkUfDKWHtXiqEjKYZgEuqyApnquciDZnvcjYd1WN",
  "key12": "4nGsZWYwyV7S84rtYcu9TBwYA3Nq3fPzue52SfbGvFViJjUGJC3iXphtoPaymFC5Uw6FSex9s283sewZr3dqqzCL",
  "key13": "42Sb7TgB7pLv1GJXcWpT94etSjFpKEMcj3npkw2VLq5EWHUv8aQxX9bodwgxBRUrFGVe6bvUX84qpXfkNorq4xAw",
  "key14": "36Med8MCFCdJwqKJFo5bgQ2feNwAZ75So3GqihFGY6gpzpHcu6zEuTh5EjyhQc79BTznu2pByNoj8j5ujoxHHkMh",
  "key15": "1J1AxC5t8o2v2eRUnVSSFr9qsn7Y6dxkNCamfA2jEtj13V8gfSqdmMY23cX41pdkPip2tc28UZ4Zwqr5Q5cpkZQ",
  "key16": "4koD2vxRnkWe35X5j6vRwK6AmcdXh9n1HN6UE9CzHEKT6Lb3e5eL3LU1mHERsTYT6iDmVAtiKpM7zaE9xCVycEmM",
  "key17": "3rpyPp1ExbU7VmXH32zQaFXovnTVZEhnzr8rkt9rafRUWkBkeLY7nQZUf1EoDLuN6PNC2tDBuKAq9XTfyDhCjJ7e",
  "key18": "5gjWnsFopcVMsJXjEKuBxa889zNrQV5ks5YsStGVCddhJ4ypbhJCGAppp9EXhyF8CsZer2dHsJognWLCChcZ8oCM",
  "key19": "4msrgL6VdUCHYZ6XQ1EuEE5pPUv9Uaocje21xHaqPMXRZ5Np99bageZUALwZKThcvU4Dn4wKS7M7QWHxFZtpbQVX",
  "key20": "5gdmYR94tEYr7xyh1La1XfW25UL3hZwoHDjt3Bwv84mU5qjch7te7ohBn4xVzCCjfMuLrA9M51jmcQinSjxtyqPv",
  "key21": "5fUVQdUmFR56ErTyTkukbxmeZ4dPjirWS4mHcc8sVsiso5L62La2iDfz3mx9My98YvZ5szmD2sNXHrcGeky9GnDi",
  "key22": "4RsULe8LT2613BUbqC9RphPGhbvbqaPHWTiybj5VwcPGdyhYDeGC8UPGGNUGo8Bb5q7QRqE6HEWkN19aXYcdxuTc",
  "key23": "3w2KFX1WCekEm2tYk2bFJkAxSNqZVdE3Pm4DqF2h5LnxXpAtincQP9PCCDi4wME17UQ3s1r85VLxhLUGw5CwVX9G",
  "key24": "6hoVw3DkSESXYpAHbRGokXZ6e74WbmLsvMqojrQ3v6TFSvTYsACLy5eYpHx2ee5iuqwuWTgWWnDLyXUanfWX5hz",
  "key25": "2mhnHtqi38HmkjQS1PDPevEgcg6UzDJUoiBWXpddFUcSUMs7pE6xgQ3Xtpdzgsvpw8xwSRGLHo9tP1gb649TXqow",
  "key26": "4G5gkuoFj6bNT6WXggwn2rmZ9o9GeX7opoowcyB3DeDwEc35pcK41KQ3PPVi5tJayRdB2uJQfBhtgTczgEssHwVn",
  "key27": "o7drW7EZGhubo3djaX76p2DkeUWsqLUumdnQbmiEWgH6H1ZkB8VmB1H9d2UbjgqAUDdZpmnD2HREjb1EZ9Gpxwy",
  "key28": "t5NBWmZbj6sQxuP8LRiyKQrm74PNL73ZfRThNqdGzpjgLF4VRTpGGapWAyRq7yBbKDm4UjYXYojeHkB6P6m8DUV",
  "key29": "4NhXQFCC7iCFnF8Y8jFYuUntMwRrWVnUqajPxePqUiWNSvPkjJFXm5ngcpuLNsyae6qYo847dacUqCLcyCQ3t6Y4",
  "key30": "4xxszRbPpiNVURFaFFLUN7jUwnAZgVVnMPavoDpiMxPwTr1WxQEV4EAAvdwmAaRkSQq9R3KPFXpQjibdTwMMBwqm",
  "key31": "5QiqbwnVaLWVdc3zgexDrRTbENF1u4Feo86XLzqjaTSiwDLKu4UCggoQHk7e1be7jBgTPPiEjEEVYqow74qwv2PP",
  "key32": "4XrsTC4kp2Ph1GEfExPajXnDL1xebXfCPMdbQnJnNAmHd83ijEA59g6UUqpAq4JMYcw15KzwqZuAryHWeyuct9qq",
  "key33": "TVvWs4yD391Ev8wcuFyeU8v2poGmEspMaME26z5An5N5e9u8YBusfFqLqYnbcbfXTfu3avzzGj9G27K5c9hgt3Y",
  "key34": "3h1xbLuK69AvYqmTUtAH2puVmws2Vj9TG2TSJtJAtQCDtwbxrZW2MyVpk7o69BU3aAfdYT4CoEfREF8Qstao1q9B",
  "key35": "4rVYtLxAThtEUvHBsMqkG66rQwzXppZKA1LVHjrDdqzvrSu4XCEp1JZuD8TvaHbhpKfuXraCuNmXm915fbrEA8YG",
  "key36": "51cyWTvBRRWaCx9eqcv6nM5jqaDugrXQAHWSnNGR8eZjLUu7Softfv5Degao69o1vVJyeR6vt7Gv83cy7vb6GrG6",
  "key37": "2VrFUQtmqRijVC6ucZX9ubGFk3nw5GtZza4Wey6aqw8uMW3B7V7RwwLqn8xfs6wpyAwdF1iuezvJRw7cmsesKEa5",
  "key38": "2Azit8BXg3Qk6YbT8j13Vss9RZduvA6KRP2M8TyjH8iJpy78KE7Eb3KW6N5RdDykzhWAiiGSbi1DWEhKJNDjtig2",
  "key39": "4wb3rfu5mqdmb6Ab6xxH2zFLiy8LKZcw41gWk6oRuNg3dzyumA7Upc1EFJPKUrfsHrNWX9NDjnRCvUqmSKT9beDA",
  "key40": "4m7djiLbpDX7SyDEFEWzWZBoenEdPJWHa3YshJXLJmXqwWz1KuuhgbaXe1ZSna9Noyo5b7a8ReEQDbApyetUmyxg",
  "key41": "esUtQbQyuaRkuDAtEEXQSNdPSFWHe69oFLZBnMrLTKTKAPNYAufoW4kwUnQXc99VLyBCEn62sGk2CrUsJ5Eu7BQ",
  "key42": "64oYpL4zxMdgJmGmrnGLjt1caN5RuY2mhKSg57egAviiCbYCPwyuNjTKqzHx2YrZTsvRgZZyS8n8Tte67nF7BGFX",
  "key43": "4N2a9SXFTZRi6oApukamUd9PCbCsYwkXe9VXWNmWBjxbu6DXSdtgpnndPGVdAkHLYo7KCwJFFzrGRy9NarujkiQj",
  "key44": "3uAKJ6qKuX2oujkKgqgFBNGYwgbSwKokM5UnZMH28fRDxirrdjXBW8EMHLHVdJBSiJdgL2RV2X81LnYnZu9NK9Kn",
  "key45": "4sEdzam3eaVzBoYGy93EyqtmGtP5CxA4xoqncFRWAqoamcceQmY6UAZjEcqWe9oikqkTKj791mwR6pJkmbDnEN1d",
  "key46": "5juYZs1x8g7VNZRMhvmTwgCBAMmQYDFSjYZP5q2nTuji9cFfjweptfaAZLAu4UQgXEzqg117FP1RYirrEwc3Zaix",
  "key47": "UXkavuQcKW9vVrqESTwumJva8s6kaZPf6CWf6DLmqNcMs19sy6tZj2xT1zLYVb59ZHN2YkMGmM4RzcspDpUvKy6"
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
