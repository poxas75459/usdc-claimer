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
    "5nC9QAbGB7bCBtDHmVjWVYBqxz3QEJFieo9MQGBB8o5kJ5MTLC8pZFUKAjaWgBhf25TxQ6tx4ves6tLnVJ3Fd2BL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jM7Y7LnNt74cryfgRzEfuM59RNb1hmUuRsVk5tp4Gc4zDTUgoyVssgEjCYACaRw1L86qQydv5ZbCzKqxtUEtgLd",
  "key1": "J2gfGdEvjByJLVt63teXsAS4jm3T1UKGUBaqWQPSfM19LGMkvWs5MMdDVc6XVSoazhuV4RMmx35mK48fcjFq8e9",
  "key2": "wjWSzwXkoVJMiCLyZSQEcToBsEeer6UPrCFRMGHhWBoJ5Db5JsK4FSv52ssg3QUocTJSS2nWNjbs6wSpCVmJBYZ",
  "key3": "5y5CXmhN6xXCVUD6T8pFUcKDHdW9pDnmi4cqJEcLBas2GxtVovbVaHyg5pd4Jcz1keZ67q8DExKPtkud4RRcc35X",
  "key4": "4X8uhaTpoY2KwR8Dv3rwZoQfXJwJFzzNqsJMduwMPHVMXKLrbHw2qSGXUeUtgdBuxS8g6FHVnodHKtGZeCWa4yf4",
  "key5": "2BnDCmkYkdC64CFzW2NZRsXLHcbrhXCNKJi7Ck2oSdL8yVVQaKqomvWbtPGgAuud2NaBznLPcYcJCmnTrfrEAume",
  "key6": "8fvR81FeYbskB7qk3Qd8nzDH9DzfHgv6q7ak1zaEhbaDRqtoZ2nGXn44UqkSuCAzYhn4zJ2jKaGziEX9j6QDVyW",
  "key7": "4NnqmuGY4byswgVXBYu9wjfTC89MNoMaVMQ6jN8ws1uRT3rHe2wvWtM15sk1GgWGYDuQR76bngFyLkJksZcn341d",
  "key8": "3WvQezUHb2f2YXkfAsnjamNvcxkdaBakiJLgBezNCvKqb5szidhCDWiEHDUSeZ6MrUn7xHFPzBsytoN6oea7Apy8",
  "key9": "5wvnWLgcS9HvAuThEaHijAHpFcU6cJjyrvfDSGhiDLLBwzrGv992FM9pRMygqPYEL9WLXXr3R8KHowmLoVyiaAeD",
  "key10": "2SJXR5VRu5jLWGRvRjwgWaATY8XrdtJLbqFhfumgwbVwqbkH34DDsawGBbeoMcZqQu3UAW5BAgQaxnwh5LDExzRA",
  "key11": "f3u7px9HDkXtCyTS3QYzTqsduvR3dzH4QFL51GAXS6GEWSydRLDTbbTzdDTe5JbeyaPexByCmvaygH8V6ZMmea1",
  "key12": "49hoFiLx3uykRHFFXQ8s9W4aWHFtTirUymnwgdUYPqY6c9ySgsWDJuNyNYzxhvcqU4vqtXSaVvkXnFCCftfcRdJn",
  "key13": "5afEjVS7aB5Q6Npvox1iD7DkXy6FQXDsX5pYoqwvjSeTfC4DWqUKZdnKTYwUSwwWWvRZrzWNASEXYVjuvnP85Crj",
  "key14": "5f6knPt6yrkE462vnq4mk248Jy9bGLzdsgCKxzvx66hu1nYhCnWNJ4BEpE62S2qHGaruJeysn7BaKKefYZabN1Hv",
  "key15": "2Vyuwe9Jnku5AhhKDBBjcr7e7pFjH2SwWdBfr4NwEioAeu2gxPw4PAhJPr1XeFqNPvb5fwYP2M7f1LFEHuSydu8W",
  "key16": "2afJavymVnWK3fY6AJovwqgotmTGU6TSYBVRNsFGvSiAuZgmNkJ48HdjZ2KCGn4VLdXh8GatJrqpW6WBz1Coi9vh",
  "key17": "3r8r8nZUkBZkForE4LJENnn6VMp3mmqNAeEb6XZm5bBHCKSMYcLr5ghhBqSL8y4FUhBo46bMrFeimtsFC3GNtgqL",
  "key18": "4Vs6VEogJXKLMUdGVPfSRZ4YV4rryvSi4t4iziNuKsvTeJVuDk44T9FJYA7wYq2fbeu2duh25C1xktE364kdGCkZ",
  "key19": "gYJ58Af22uiN73MbbccRjuiZhq8pF6j9LGHB3bQxKACDGMgAQrE26gZEPUM1jP7UMAoRinmyyoKBf5NhbQkf5Lh",
  "key20": "4sbbZahGijxHCg663MJTDEYzsFLW1ezYpPYZf7YGYSBEBeLK7ToaC5Eya617jDynZj5Fgap9KuRTUouzAJqWjKse",
  "key21": "Hvg9TYWQJ1rHL75SCe8bdFkvdxQVKbKSAjv6h2r9JquM6jqHVW6H4KXhnJJhXm1wsgJxeViKiwCge19LBW58fjg",
  "key22": "2LckvoEehnaMB4XzKTfdiK3SWxERAsbAUVXdveB5U1E7uVVuBcwHD73oX7Rg5hdoUMhbdPYYVETzyEYL1oABMVuC",
  "key23": "4PTkSGswFpWCwu9XyayzYDFDyycvu5W8vrr2VTmXs5DNM2AtMpXoD3h2S915b2f7VrVUr9h6Wrxs9JPn7Yo2m9TF",
  "key24": "4nhhhJsLYef5TR8z7obTL9NibfEcMNWygq12QuEcdiGTzY5LENHZA2j6ut8xwMEiYDER1uUPniiH92uMwdndMCre",
  "key25": "ziQsMm599wJzAbdeRnkHjWgccCy7Smg4RpjSEM9gddKzumMYTWTwucxe2ucwR9J1zyk1HnD31eEEPSqZai6t4VH",
  "key26": "34xF3vpTKSvBKXpm4tzzzBN6QrLUTQffwExevF9Qg6iTeHzJCBf71dnntzyx8pHDPc23deBPN4cWUQvLJmew9Nim",
  "key27": "VNQgL8JMWQ2L1hrRnDyPjW491XzYs8BD3JRT8cLF41LSCEx3nBwcyKbRrpZyWokBK5wbsZ5FLc6Zbg8pBt7WwNB",
  "key28": "63b3hrrEVG4ox4JSvtucZoHmwZLdSiBhPZefp95ZBqwDqvGbrQwMohp5SBGdHXNA8jN5DbYFhc8wWQzGR1HrG7VY",
  "key29": "4pNmuxt6AoHkojYgmuapnPzwTNjp5MQC7B3KJDznHh1bwVosmyDCmZKEMdEwrmdRWCgaZZJiVQeoyszNuo5y9o4y",
  "key30": "5yzChSY4bDnuDMf1wShXAsFDsHYAWMfN5yFkQ65wSPzAccnULKTjAX5JEjVBc8LR6gaRdwPsd6F1yiGdXzWFsKfj",
  "key31": "5ZZ7RJRT1m9AC3v21pos3UVjYpB8pRobc5k5Ja6Hp4hDJVK8xmDLLdJfL3RzKhm5PBUK2t5KsbUA3yc4zdDeK4F5",
  "key32": "3LKfqVMYH8bJWWVmazZommDqNDboaTAEApzcs1krSEf7efRqYfDUAJXmEKkrJZAebKfThRAqBdkvg2Xo8LBWDhK7",
  "key33": "4XqqNnfqpUUGC4HaXrhi67AbdQ1yMDB2SDSUB4qfhPeHZdxeYFUYiszFket1FkpMSeFj649ezGfgkDv2eWJi4xVH",
  "key34": "5bZFdAf7NAi2gBva4BuKccss57zjFPjakYNKTxocv8sKVBszPqnjZB6MSNfeS57gnoVGH387DhCHXu41h3wMif8g",
  "key35": "4rSFu1Jeo7EUKmkppFjsqKS3oMsbuQxDCftfMhJ8axZEU5iyDYBqSsXo5pwPX8a2gUGvx4V2jrJpsxcE66i7ShEW",
  "key36": "4bNBFt7mWCyzgipojL7zuBCCsfoF4LhZbxQwsLVjkQ6STJ4xRrkjqURf3hZnNuTntkk6nXvZXPwet3PstbcE1vaG",
  "key37": "g6NURT2Wb8q9KAMnDgCDJa3g28CeiC9RqXTBcA9zxGKezpUyM85RJ9DhJ5k2mdvHTinJNPNH98pH4hpSHnNy1eX",
  "key38": "3RWpAhG1b2vdJbBAkSNS8eYw3JWvXDqugPTGJS7F7nHkQKVp9rWuhXaAhDULdArUXKgWyjLtsuc8tR7ad7hdjP45",
  "key39": "3JsJ1frNrcWMaYJbovgJpuha33WRfmZynHCLPbDptJp3F7rv6DFMFyXteos5JJsWRLK2NsBX5eubaqng5YVBcdSD",
  "key40": "SYgb7X124oYLbR6FJtci7NxRmxo5xciSqaSYVzjA2uKArvFn2ycURU3kNXMkJMmrpJH4n4zVMsFuU9ciKkpHgVV",
  "key41": "5nQSMWAYcKHE5AeK4REyGgPSzXxmYBVfBu2gUSL1jqK33MENwCLv4fx6d2Hea2nUSk8za26WZoN6ykbpwR1qh7kH",
  "key42": "4hqt5fTpvQntbBj5wretBEzcfczp9go9uoJPYmrNxKici6LRcnUJ1xhbHSAGMqmkSbLwFQzKzK3mtX3wRC1DELHN",
  "key43": "5x5L5YVis8hFD6ACnXKGtwRMprhY83pBneSHssqeksrbmvMG3jf4s3SZrmt67PGEkyFqrrXi55Np436UemXV2SHp",
  "key44": "2jEsDYsUuMX7P1xMGtij1qXxdPQGd1vzPHtbAYL4mrBhoWjk31qSAmQx44Fsb4Z5TxZkDAGn9fp9r2rtWikQLg1V"
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
