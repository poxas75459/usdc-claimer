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
    "3ojGGX2utTxsVMw3eBZN3TQB6F48hvx14g4QqwgPReoFtMrbtC2Z7ZdfZUEJEQ7DLParxf4vWwuHPYwWxPccKhX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pS692Pwy7PW9i2dGwFqhXtmwKG1kbKfHkvNN7tvgWxJuGdYBsYmJsYXrDqH98rmovD8RzVcbF59aATBqy1syLod",
  "key1": "2kghR6Y1PTSycMMA78Hk8bQriwJQeMBetSD2TMibEAVU38wfShNe8s9RK58ZD5uyg9WFLJjdmr1qFjNHxCCnP3xM",
  "key2": "42Ad6dgCNQ6Bef1Rfj3QbrSRTwaqkrAFy9ohPRWD4VvN5cmG9Uz8axHoxHq22TukJ4kmxz7hMgKinaaSZ5e6QLeJ",
  "key3": "2YGJLNSX6TtxsWVKgtvQ5fDX1ApBFTgXRk623Y8XLMmBWJMXsMyiCHoEfCKy4gvemCg88DnE2pbW3zsy9xgenNBR",
  "key4": "2Zoa3wDfnPfYSu7R6TAH6qDmdwuEHFTBgjYFYo3tYcf8giQTExj3EA28E6DCA3zBshftSUonQ9L6Csv5E1xB1C1T",
  "key5": "2kyB7GQXdF2xGkHjna9kk6bhfW5z8JCVL8g6snmj3iPmgUYHKtTZqqoCPhZs5Mc3zmboWnhmTibztcXGZ2zgCPia",
  "key6": "5rbY14R2DNpFhLYLhqadDWUPx5MgjohG3X7tNyXeFsN4BSkmK8f7fHUinJvGMcZ6augKLpDhjZ4bxi7Tsgd3LE5t",
  "key7": "2y3uNDrTGfkP9KJL7366ajnbWFoVuVYeHawms44pH9wr1ZKjfPNaeQoRdY2ZLoJrkBWK2hjbdLHCuMkM29odUp1D",
  "key8": "3Jh2eJZPjmVxAQatW4ZpN3g45ZVJzzhhEm15ZnjeFa6DY2yj4x7pj61rkn8PKNu5Je4Y8hxAdnhyeLnij28xWmJC",
  "key9": "5TzxsM5sc6TtbfNm75XL5zi9YPHfSzXDLMDDnLHY9a1gn5Sr3hTdxVsMf9bmHgfnBTVYBXzdCnJW8dqPiAbDhzoS",
  "key10": "4HhztKQyvR3NQEHCT3HdFqvQyGSPP7ktTEVG5U1wveyGZbJUrS1cooLsYFYe8jDsQyGtXHj1aJ7E3yWLqYc5m6X7",
  "key11": "5C29aXvfRyGmFd8GV8aTYb7zL433JGbZgsytwwkTo31oYodP1DrA6GkRqHjH7Eyk8of4VXUF6TTSZfypc31mAVRb",
  "key12": "5cn5TVZFrrPsBaEFQx846j1NMZz9vS8LDzqGDJrktgpLWHghu1GMetePcQHo3hJg7Nb9u8Au6TrYuXaFqZ1bZJ2X",
  "key13": "2wBv2D1y3JUkCnoDZWHEMCNWN5uBPjsyhKCv5V3DszmH5zodWNj1e5579VB4F7gawXAbSvxn1cMqyCzsDVHzoisS",
  "key14": "Ff3D9fmpJEgKwwkCNK6H5EE2NJ3Jc2kyRbms9kQdjbiiWUsaWRkpZWSwcTXu3f8W41ShyRa9osKKS9Zyd8JWzog",
  "key15": "BCmSUwJxYFRogxNK9p9bg1pXGzMyp6R8NATP31Cn3udGSvc9waWJczibLoQFXkPgFZEJA6CQqpo1FqpRgNbmFZw",
  "key16": "2ve3kYwKtPpu12AVjUnUeacanUuyBn4VQzYYDc3zNZL6iHF4tG2iuzmbAjAef27c2EMr7MqMCtHW5bcKtoPPPnmZ",
  "key17": "wLB69pLQzcVBvNBSo9fpdytYB45Rw1TeRxtqEUuMjL32XPer3J36VicCQUqhWVTyYugiSNRJALEVVxFWBDHge8i",
  "key18": "2y6z7h5Y5ZrUTFgTRg9iKpgUqpvJRSxPpcnhjbMaXtqX53LBQjNyQR6oFhGXKL3kYzKRdWSJR5dRGXuuEA97sZSE",
  "key19": "4ado4pXYMgaogXh9fW9FYScP3nGVhoj8PwJKVPwWGmScGMZPKuLRRMrXoeGFwM6PStAxDzYAyy1r9bspJNfhFmW3",
  "key20": "5Ee6SiaC3AiykZdjZQ3qFqLTbDqPjseYrKoRQvadEHuyr5gK4qiFn4ZCe6JpcdWfxNbUts1sSKdD22xX6MhQA2RB",
  "key21": "5XXw2UuCHtx9wTFYx4gy9tg46qHyrBC7FT3atByLaN34RLMKJfx11RFENp5E6nXCAPeD81oSAceSVQFdUH76kqBe",
  "key22": "4k4C4Wm5jUMh31UbM84n4R6oDK8YYwvM7xAAY3MjGannw2tcz8LLdzDXWkTSEFdGDy12W2rMyR9vLSa743PaJGeA",
  "key23": "4fCDwWPfocsggWkKJon9VLfwg5VCtf8hvkNmCCnxKs7qv98AsbkveEU5iW5JTxVgbn9GMLuGx9aQ2vo1R17W8zMR",
  "key24": "5PnudeXmGCe9BkWAg2vXMd4WykNipsXM7tZAhD6xqMfhALUktzhRCo8QemB7Vb8w9nTXSZhZrMiweSVbATGTCBv3",
  "key25": "5Vb9hWk9PMdyYYWfSwEprK45DRXmUUeRTxUABRojL9R9jQV8WKDLQiLP8LWnijRMB2gv6G3trxDEf68DSKGWS6Yn",
  "key26": "4RHDWUVFbi3qUcZTA1MUYyzHv741dt6vPAc4AoepiyupBxyVreFiiaPUXzUmHaZQqWYv29biPiMizySF7YXMy2iN",
  "key27": "2fZJcCUo8ES4D89ffxTEMafBubZJsUKs88VHqAJT6ngwYZaMKNiBj3nS6UsswoBzdLTkRWvnnJAmL7dTrkBCbgSe",
  "key28": "6g7iscAivBugTZDu337BGjYq329dmJmtvtVaRo7n3kMie9Dh6c7kZR6uysNtDtGFCxrrD2YwHGT4NABRLxKCbGy",
  "key29": "3oMnRJ7q8HwpBiFG6UpgZcdh4j6CbQYzS2amy82jchoRJXt2b4t5a7siLYyyuZVRdGeuKZi8s7nViJTNpzMU9VHn",
  "key30": "3j6zbnSVSwPMbUV3MQt68gWEbFxjsqauJiRv1MFAheLKBTtKcCEA5CWNBFRvGbbrUmRoZHfDAcZeVsn3HfECtTMX",
  "key31": "2TYuoFLK5iZGE2UDrDrHhDX3vujYALBNcWmvcPi7Hn5HNT28WnGXXP3ZcJARscCzVT5NmZwZ26PvugrTm3qSgWsq",
  "key32": "2pnxtTYg7cfGdhTKtLvBUghpCXZZzr6pRf6nxEa3cCUYEHN7oC5SaHaCCRpYoUDz5mwsZy4vXv7h6aQSJHLmyfc8",
  "key33": "ziLyfcv9ZfrXovjXqcNSEEQZ6zQrPKiTwJ5FtXKq4YiJET2MRpv32htgXEDzmsN6mitNwTwQpegE87ccyRQCBna",
  "key34": "2aWhey3u1D8WDRmdTUEaJjZTMuT3zsATYzfrQEaWR4saSA1ZNsZ94XA6EgFJspfdEL1qv5WcSE7BFz2Y4Scq8yG3",
  "key35": "59vajDv7xQmsWY7gBvZvuDkGC2hDQpadALkeCq8f8K8GH5EidPFc8q13aGW7ULujFNLkakKefYZf2Vw1jxxCwhcb",
  "key36": "5bNfC8QdFns2GLVvk8uchaSKjXNgJzVXQ7gwnwuzc5t7jskTuHoNkyXY8odxJP9vpeKA1PSgoUyyGMnDur3XzU6f",
  "key37": "4UxTJukSW7SAnq9vBekQ1ynfmkFftq1pYUqxNYThf925MusiFau1HSUVmC5JegeVfvFHUwJ6QURPvAkBqT8BYPEi",
  "key38": "Rx2rhbHNDBMXAD2Fr5jcj9Gr7kuP2AFYaQ74rR69iCyKbc9VwxwRZ6Kdqu81AUAk2Z9sfQusP1KtD1CH2hmmpSb",
  "key39": "26ugbL9JjWTvfA553mB1crxkPbNLrGWi8T951Av1N2AgG1g9jWGs8qDvhFc5mRTQ5LyYLv1Q9oa9tNk3Ch7Y8dpU"
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
