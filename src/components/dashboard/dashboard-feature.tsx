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
    "2eZEVWhi82yv6basQcyPXeUyS4dpssqhXtWjwVrnQwx8YsoagLCcuyxHcZFuwRzyxyjVUApU2pGa56QiWWGeiWEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gehg4J5a1Hpjn1PEypx4AUarV7Us9KxW4ZuLULF6Fmqw5zyY7EZG2Gsck8nGSLoEaW6QPgdBaikM7mQZ21ztY1j",
  "key1": "46DvEm9EqmZYZuqUE24pJxefETPRwpouWRV8jPU2igQWGjqmv83k1zyFUHVpvY18YNEbWotvGiXqA8vn3iRh1Fkk",
  "key2": "QWS1cyvHAdqPjYdt4jUEUFG73BwtbCeQKqjRCzQpt7hhgSmELLFd3hncuLTnmmsHBgghwTRyF9hfAFGGTZusRjH",
  "key3": "26jqV4eLGkiLcDHXya7LWfrEqfFxc7FavRHppdSKDFnBtE5Bvebd1Cdik3nQvNWJJPAxykJ2Feaehgr7raSG9sTW",
  "key4": "53jJt3TQ1kDjXKpdKdYUYaXsEwQfCbbV9GRm7EM6kK78rHBidzVnxUct43VqBYPNfvZJf4Qo3zdH4JkECGX93geb",
  "key5": "4Htu9ekSDhqg1h7cV2fKYcEWE7k5A3xyY4FHYkzDTYS3HtqyKRL1UtZ2bdHsGRnEhdu4jdpzLfW4HhQXNu7wAefo",
  "key6": "44ibK6MXoBCd52La3NBgsyBMk8uYh6jnKSkVXCDiiBuFeykNAr2aLVPQcguAxt4yiAFGPfPX5bNNShC4vaU4ySvn",
  "key7": "4YeEJXtLXmP2DNuVrz3PKRx7znMkTUHtEFdE1FbDTCFU59XMv1LUZrNCzHEW1m7uPF3uktf1JMtQr8Vztu62jPjJ",
  "key8": "3srH9Ndf4vHzfPj3A4R7fChvrD2Cb5pwU2gyD8B9SdVsQpjuvvuJcYk2NYsXvLY3WWeqBiJWVZszRaXo5sGkJXPz",
  "key9": "LTjpBay5Cev6dNJr1AUbyXa9gfYe5ZcWGUtejTFhhMouvsbJWaHocicNe6jGMGzpfNSuYUzFQRrV2SktNPERqUF",
  "key10": "3BEoJRuYKKxvNFyf4yyMYV1EnczrSeBXeoWgijq77GBA3Vj499A5cyLsjdVWXE6DbMoHNnXb8LNWTbm16JEwieU3",
  "key11": "3Je36J4XhaSN56Kg8hNYyqyQRamxPHBJyi8N3Pq4v3Lth3W1j5MYKvhjfHiW7xodjnnnYvamt6zPvTZC11TfMMjE",
  "key12": "62GMpGWuDsxMEicGg9aWtMQRwHVnw1qYKKzo8acVvYqibeEWxrN6PDfW9dZ6f1WVK5Wgw6ifEVyrHBxuULwAk44A",
  "key13": "vDK37AQrP68TqgAJxeiZQ8NZ6bH3N7txa2ByXLvecEXiQQpJaa8GEVL6ngNTbrxe9uMDPw8qkt6uS2suVbmctVi",
  "key14": "ecwQNYZwZuwZXHv5HEngYGCZ7cfeyhCYjdKEYQHK8djnWH4C9CdZWe3WFmfVNzP63ZaFkKPUUi7Pk1ptrCSChha",
  "key15": "24XHMc6DCXGiJ2Mr2idhj1ywkmAACBpyDp9RBy4jXHmeSjAs2GBe45Y9EzfQmNF3SiRtoWwiSLuKuzcVQx3K2S9C",
  "key16": "4k49PcqoWvKcp8kyMRacwotd5Eg7cucoPXvxhiziSgBQkoYhFXqD4oUSUVsVFj9SWk2XEFSoE9GzkpE1TZPWSGMr",
  "key17": "3uGXxK1nq3FoCN9HvX4P6JXYuJdkzsfe751goJVCg2SmjA6hjzwT6FihtaxhuJ7Gv23HyuUh6JcihdnMzXv7L4QY",
  "key18": "24EQyQGNeramz2dZ3bgS7D1x63qL9V8uhAZH3uTbRRWKxvfXG6Wf8P9gNT542xnZRbuMYSKeNjvY6TjQVFmkH5HR",
  "key19": "qeevypBZMTU2P1jyX68zpANa9yHZsJz468juvXakCTKZqifrxHiBTMJZfu4h2DqaoTdHMDHii9pqZW84qg1noea",
  "key20": "4WTV3NFzWMK7W5kU16n5XE24JoXnJmyw6DrtXKqdifmcfFEjqurUJnCwaoMUuVmvzjLM1ipavfqfLL61Hfv2JRVn",
  "key21": "1cBqpEqLUrpeG6airKaqJza5JzuFR2g9c3Y8uuipCwn5usKwDmCfeCJLALWY9XeoEmoBtspAeKF3iGDUzYfb96F",
  "key22": "5CF3e7EBjHwGYYHEmttDBJ1m8DkRYdmKnzFa4TisoJP3eQdNUrHgd4PrsmzcAS2fAuZCNdxxhvd16MoYXhsWF1JD",
  "key23": "DYRXEDUeqZf3DtspwSidBtcvij9xVz9n2Y3gGWACzcqG3GcdFAgD6iuF9WnLUVk3MVovemurPDperLX3wR3riGp",
  "key24": "2bXmsuqZUCw6JbEYk9SDrnhiimBkgrD46aJguqskPULGXkpzXcccayMJHUgEUdaJp5w7vfeb2guKBFNbgL4S7HBB",
  "key25": "VQV7JRdHaFP3UAWSKCHxu6VhAp9qRwbTjZpex7kWPdwNBaYiKYSDBSgnTaYLXVbPtjS1UURVjcAjKap5cWeZxiH",
  "key26": "4sunEKWB247Jqvatwpz1acCJdHZJdp6FekX2k2MuZ8jtnGBFio2Csmy19eZUdRjc2V2tSvqBjpikZY9iavJz82f",
  "key27": "4rx5NE1o6vkiaNHRtFHshkLUjrPuTSWH4eESpJ8ANANCZtKcU71aFHuZiJkeofLuXCWSAu4arjj39NuJ9JPN2tWk",
  "key28": "4HHLLUmeek7o89umyLEeDBcN2AtvN2mQb9ou6EzmdGa3G9Wg1XkseQafBp8Y9SUHkVSAvykf9uiwYAZmcmjbiPsn",
  "key29": "2QistbCacJWWzunEvr7hKJDYmiestsvTSVuuc5RURanhZ2RX5oThB3pRqho6iy8Zi8ZT3tq1Mp4gZmHHfK2VEiBa",
  "key30": "XbhGncV7iZX5GuappBWAKLosta7Jxx9Yvcdi4XTZR73LaVYy2ApBBYdyhakKW7Fapaubzus97QMpjBVnroDKcp4",
  "key31": "5cffPAT8A8GNFg2qwz6VMgNJG7a7hbJhg6YReMFftsHUx55j5JTb3eVdYdeK7boPqqJ1DAjbU8kErcwdnQCQsw6T",
  "key32": "62FXKiUeBc3vKVuGmsyqTsDEMwh37dvrZH42coJsS2TMQGmaTZRBowYsPHuS1uRnKASqEkiETtZGBJUSZ7eQ5ung",
  "key33": "3itjHf5FJWeURWHaY9Zf8rL9UFMbaR4W1NFpwxFJCCnjc3mtfN77TH1zGeGeudxguJgNSnYKTT54mCfYjzZEsGS5",
  "key34": "rJQbmGBV7zNjSm5aVoVaXV3MuEsEpBVe6m3QTpA1T5fztYfn1d8sfTF6QcLgtrS2cdPaeMjvZoGzdWnszy24X9c",
  "key35": "2MC88jWS5CuWtBwzVK85oihnj473MCqbH4ZwSC7jrNW1MTsgvnBGFTHAhkyrHzHgaHxJn959YdGspMU6b1U8HanA",
  "key36": "4NzYJdBKLjHxvSnuPzghrFaekpV6pUDHEcTHD767hd66bNCoQhTEKMBaZs7misdFAKgreayHdXhuyUuCwuwEaDfQ",
  "key37": "CpAti4Uva4Eh5qf4DVvNKcryREwqx9XX7oFWay5sssZ5ZSY2UFJP1F4YeCrvSQsjKPjYnocQK4WGtv3R8zPGG2k",
  "key38": "3ixey64CbDC7iTVEFfb5TpTbUAEe8dGJoUicxpnEQK9Ws35gVTzExDqwPfy1VSb6Pb7kbKH7zkAiJfo3RmgMzu26",
  "key39": "3FdutADhAKSmZg3s3PpC6Pgn4vNekowzEZro1Hwu7rJoUK11N64jSoewbpmAoxjC3AdywtcKpuAeRuyaAdesT8JA",
  "key40": "3yA2nfyPS4BzTBEenLuJawrvCjmEEdgm1XoDQzKgAu7pLvTGtn8y8Vs83M6aYC6ZgefA5CmNTrZAM4t9sjPV7bkZ",
  "key41": "44QP6MRWMn5LWkgk4Q3k9Tgs2Bnfxep5H35vWN8frqfHN6rPJPq5Rndms3S4PBUoZ57JW67YSPbzV9iEcuMu2NFS",
  "key42": "5J3DH25TFsuCGBq7uTwp8gK79VtcPRcGDAFkPY4r1VK3mMyh2Q6T4auDQaePogovA9TK92dDFXTwY1uAxpQ6S7C4",
  "key43": "233ETssVz2kvAQqH7zvfyrbZhfqWUDfQaj7iCZABewDVW1zJ7w1v34KKQsckNRj1Mh2X5dZiyuo9fXaNszgwFSCK",
  "key44": "4CVRPFo2VxbWBGMQ7pkrFNEKUhBkBjsVyqadrqymi6tW9FsQmZBQmt7QH8wPg7t5wW6uqQESN8WgANghd61fqDJu",
  "key45": "3ZkKcdWwc8VdyeatzPBj3jVk8x2kXRW2qVVuq8uvT3XTUMJiXZ51HqP7TaQkfy2nK7iVQ8eXMoqrzThLScm1nnLe",
  "key46": "5f66HKnEr1TpbF6aacSEYakCoYgf9bfP5QtJLCXqECQSmKqRDgJxuK1jT9doL9hf2TsgwmAXbdbayT4FXi8qiGMT",
  "key47": "2VxchUcxD1wW1zUngkC5xevH1Z82xyCpLNPFRR5ppK8aWtcVsrEdvL4FHkixYrS9UvW7KiRbsLAaQord9XtNTWqT",
  "key48": "5iq68kob8hZU3SRbr22HXQtorAbzLGEgPpZEv2MS4AQox21pLV2S2KGazLQSCxVuvsy7n8DccDRVKWGhgp6SBkjt"
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
