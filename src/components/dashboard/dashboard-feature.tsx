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
    "2W6MmgZWTMWEv7gumj5W68LYiGEkQh9iaSWmWT1RqbNS4mXTjghPQBHm3LExkobVAxYzdEwE5sRdt4GQce9E2zuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L9oXTJR4hASknch7x2AK3hVDaVtYt5Q3UHEHUc3eN5YzrZsM1XBgGzh8zkVWZo1gyz69ZiowndYj4Bn8gtchb8L",
  "key1": "2evdzSocLc21RPFohLNwLgoALkYkgoo5pBcq9SpYi8tKswDFpbBH17Zttt6RoW2EJsvtG7oM92SMxFtBFNWtwYuB",
  "key2": "4SDoQ2eynucMdd1GvAqakHT7faQLVXaebif6mPA6Wm8RxVpxHBxQVQJ96QTJsrd3GcAjTwthZsxwYdbRxsm7DE2Z",
  "key3": "yEDaSttQGaLwCaNiYXRjUPasooSKnqPNabGc9VpDTDHUiYzVT8c8GMs4XVtSkyHKePvHW4UGXsrTTkBMQ1Ng4CZ",
  "key4": "gTYW3cm9bAmx7Dxa5qh1E1mbb6XsVoRLyAwo68jVbNXMGTLdnzBSsKq577x21Cz3mfT1H8DmDae4TBbv8FSJtEc",
  "key5": "3kAmBxhxrMBUjjzCGuFPtXysZYUiLuU8ykCDoQHen9h7FGNyBbGQXPR7dMevEWDHzRFGGvGExQNv9ZMQSnnWphSr",
  "key6": "3RSUoTgEdiFpzwLy88w3xLXd59CXphNdjrSgnNjU3DFKgrNjkYYkm98HHMmXsJJjRLtTbc8u8jxYPRcfDcHgPEU5",
  "key7": "tmQLyg5ZS8dobwJaR15vmzP316Ren4PCS9o6n4QKJLFQC387N96rf7sTvpvWx7TcGfCwhEnTyds43E7c3kaTrSA",
  "key8": "51W16u8zHFGwxW65jiv4LVSedY3xMZJitxnrSXpoDFFmimhvWh12LbmgLEnFjVcbiqyouLUSMCKUZ55tmHWEiVdU",
  "key9": "3qTd4copRAjNju2XRrAuh699HAVryRHBtn91pAS4wW8rmgsRTpzEG8SbvFm8KG5KanaFzZf29VXdM3kJL9N5CzK5",
  "key10": "2izn4ibwwGs25miXosRSWAdXGeM4GBuUgt7ZEaNQhfdqYhNpVQrSPM5MfHqGhHZuVq33dDy82cRox6Yn1kHy9W2X",
  "key11": "3EvTBkU2ypJMLzoFL2o8t4KjFqkgwShJLo27wcF1ngVME5tEohX9BQSvaJNpVTKudnKKipAnRxWoDCDHD4n834gF",
  "key12": "Lsjt1LPVWyceRsEopmgJGttPW6Au4TwXAQHjyY6ncYZathTFezz69GDBqwX7MstrA9TUzzcoWV4q9YiRXTbaP7y",
  "key13": "2MCaS9EkzkJYyfc9C19ySZAhR4sEYp7ttkUq6MpP3WddynmWLftZ6qukMZ53kSFkQu8cBDnW5mTGH3m7jLYaLYVz",
  "key14": "2Q9u22GPpgz7FYWt95A5kE75T1gPMGskuNeH8DnQFPsdCjZCmQ7W3a6R1BkvLofFCPQ2H5DuqGuUMX3t1QNaHxzr",
  "key15": "5ymXv5XEnMNu9Cw3SAjujqg64DmaW8QX3oAQkkMPPJoKfqsuDvgnsFNmxw2iwncog3V7PiFtjBFXLa2yoRC2HV3u",
  "key16": "5geAxfGUAdqq9JKib5v19X6q6okHGXezH6ZxF9bgamPXHnj5URtJmDR7pzzzif6W6PifWoAMgmCKMYsj7zjvyS3k",
  "key17": "Tn1om6NKd9SkNdQkqfBtEEqELUhQzzt9YLmGapRcjzKXmCc6P19CXrS8zRiFtyGLsCmNS8VxaL7FGzZ4vako1ZV",
  "key18": "3UbvzA4UcDbbFLn46zJDiUgzWbAc2NHDQTZgdRHcmgxT1wRfHCZ8FUZ3h3xWaG2wpvdgNHAL5vHrzSXTSFfh55V1",
  "key19": "4zrj7atBMTUrXuELHqrBBdEnzynaURgsmtiEtckRHThJpaoMbX4ummWRu5NXrJruzUVVRJnPwiE9RpZQBsWep5Cn",
  "key20": "4dXEep5rLZ63ynVnzbBF7xzTgLt9n5YCBmm5FN6qLpuV8FxRqAUpjAPsTxGCehEp7mZmonseStQCWdXuUYzmWB45",
  "key21": "3LaoCMFpWfUTTNjcwVd2RSwpoHWw6wMzEycoTa5JqyXfv5eqXYrojExFG4uAKDqxBG8rpxqAxfNj9dkxXK4Pgx7Z",
  "key22": "YuiCd1yyEDbzqAGEt6V8iUAXPnxF1sxrsYwLQnA7GeyXyEZboAHdWGecCBtDK8Z3Uk4zpJ1EZnXXesgSL4smAtv",
  "key23": "2VvaxhFYMKrUKjYWSuJPCDhnnpVpa8hqofJtN8wtDN49M18YDpFvuyztBooY7119znyYhnY74vAyu7zqhzp9U9WA",
  "key24": "3sbty6BZHUN9LpmP6K5Na5h93qbV5wY67uUk53zuXN5zFSVa8dvnu4zYrg1S6H7bqL6Y8VqRgECHBH8WHSxBiL6m",
  "key25": "2EEQAePxXCGiZg95G2Nsza8o17qd3NXCUyn3tB6iBfSjAYhxjqqgWgpwBprhvcQUziN4rVvfhaEPdndPpMFDiYCA",
  "key26": "32hGkaMRP2shac4UHYpLUH5TBcHkNHXczdKFCsTNFwhLKfAAKN7nMFFVvHBMppmvgE86zpkw2Ux1Ku6Ezh2pe5tK",
  "key27": "4Hgb6zDrGFcuaq5Yvq2a497JVe4ctc9BCzotcuyQ4qT7ufTBh4j32qntSkc7zqafupd3JPe78C7aAdeRpDd6CsvA",
  "key28": "4nEPwSukKUaJNh1nFyFPMg6hin5SjJdEiJ3AkqNkyJwkVmhEeAvyscEiA5twQLhypu2cVAKgJySi8Z2pHKzfnWFi",
  "key29": "24PwKESQgWUAWUsUZf1JAj9A2VhvLrWVs5qHJ187W7UPVURiKMndtwiviGDcwr7o2Q8noZrgRprQ6hgAyGD63egA",
  "key30": "2Cjv66FguHdbBtzjnF3xvgrkobviPBDMGCtaYEFsZNu7DGwAP1jiFxtKF8VTNjDTYGaDdcZ3Axn67Yi69mALDcfp",
  "key31": "2Qd982xX3WY8ybp9f4PTLEjgiRE4y1DFhXGppkX4DYd5545q2X6zZxsLVKEqT2fbQ7ymrQDqP5SyfGSAU4zG4X7w",
  "key32": "2WQ36oLjyoeDq3HChEgPyjF3tQBSvAnMy4jXMwKmYSgX2QezAXR2m9AtjjCVa3wQgCSkBAVXnvhov4VeBbEgSyh",
  "key33": "kWWgN9cFKUQU4UPRR7awtBEytzkWmAheLtcm5QykNZKqKpmn4BkAVJwrZdYYauFn9eUa2Zy69u2XGWB5xGN7aPQ",
  "key34": "386ax4Xhm4iHLAfSDDjvD4SQ6w6ahbPdof1FRmCYKvHEormyt4wPUAeknvG4kXGqLs1SFgNXiGnAvgpoZSkYaDze",
  "key35": "4uM9DtJkTC6m4yUVpfDY2bRNyQ23WvAeuodpxCTU6bjVN2nqdP9EEKYkKhthnugvPh5Zha7UecWpdgbbxCrrGVLs",
  "key36": "2L1zmX1umj7X1oxfLdPzoFew83L7JbHfJKhjvr8qZKB5F1XqKzSatGE98VpgtSv2vcSPEsZdEwVPHycsADubGoL7",
  "key37": "5Fv3zWpswVHTPjQ6esTNhbEeQBWaTgPLev4EjZWq8jAJECYghGb2rh3SZBCB496XPwJxadvtrpbXsH5jkMnxyCiq",
  "key38": "5mCTMdoiCzfUQY3zZpnTMCFWqYaRbX33kXSNXKmpdTSia4qGkr33a8J2K1ftBVpgXXnQfKHWfRthUGy1pebE99Lx",
  "key39": "3xUhvKBPBtQWdqEBr862wt1QbiEbLqXzQ31pvtLesricsuET5ZeQu3h3wnyox1ro15jTXdDSfPcXTApv5VTvMFWo",
  "key40": "43udCeaE91yitE5HbMaaXDXWSQiRxQnf1qub2JLiRynSwPMwPpiyM15ifEnJMKvJiFcVYCWnCCyhfvZWEHNqB27F",
  "key41": "31G6z3hVZ9t8A7CeRZKMhMtygs82mKycsftQM1sSnBPyZSyKfzMBRYEQUif5kkvc3oYxBp7Yj1CJqwxSCgnEZCec",
  "key42": "5YFACQapBEDMxCnAFshFmdL7wtUbjvejMrQ9mYbmRrhX1GQtdagyzs1cgXhJvfv4SZeBbqCqBVsDnp32BHua45SR",
  "key43": "GU9ZmqobhuEgnhSiKxGiBQcpqwgvKDYbbnEH2sreeaAw9BLidVAH55dBFnMPiYVtSNS4R8tESwTtvK67DbWDbgX",
  "key44": "2CCEEtrvi1sG4w38A2yh3GeB6NNcgJSAZd7pp3D9ih4g22eHPkibELAxQLbBcUGPDsxAWkgurANuEHfEz7R2M9N5"
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
