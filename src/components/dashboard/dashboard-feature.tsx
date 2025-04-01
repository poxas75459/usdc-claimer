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
    "AhSMm8D2XMnoTgjuWT6f1sYyA7XbwK5AmBnuhZFT5QH752M7azreMQFsNoCRHeBEKExLnxz3ymbfuKPAR3b5tgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67VUky5nJDTxYjLAVkGUh2Q4FZjuXdaQ4pR9Lye8YM4GL8dBn6s3KBQGPa3zqsFEcwjycx95AnazxwUgBNMxotvh",
  "key1": "qVqXE6Ard89kj6Y6u3qGC3mHB8Yby9jCnSbFkGCdd6MvQeSEzKSQCpqFuYHn2G3qRiRAPnH6vsM7qRgdD51UgV9",
  "key2": "21jMBeZC7BfwE1aGqbumyou32xDCqukp1oK39meLT5W5abTVjMScqMgEnccPjrmoSmbtZzFgxNbAhc9UbBLpZE8E",
  "key3": "39BjkwoboYSmLPaoj424DyNHu8gkFAg1i1Qt7W6Wi9FQtxiCmDR9KkcdPRLcka2JqW3j29Gy4ZxFHjRJBMdJK7tq",
  "key4": "rnPzckjJdw8ac4WZuNSBgdsNcuxTDaViGgQm6PkH4xWXabbvTFPuaGpGUZ7wpjTdtvHvdQpAKRVsaGVUDYhKv1P",
  "key5": "4KhrDyk2o2QQTSspWW1mZpZNSMqSVup6TJwrm3kT9i514pFtMgNXrUiVZgJu58SebEwDinAzfAFjGHsQjkHAZcUu",
  "key6": "BKT69Kxv8ehxKkAsBJuiQ8q1hh9z6ho1oxQBRyfdPuYwsQJBLNVyWb6ohpW6ReTFL2dNZCbHbjWRN2b4mk7JEVC",
  "key7": "2vXaGmGkgkJpbXzWWQddzYasA9TAggHViCzuzZ1zuG81SBcBuXX73pYGqXQ2gdBL5vmtAtTjHcs5R1SpzbE3XSA4",
  "key8": "4JfUxwgLyKUWwd3UcTs7U8RN9uyeQc33eAtcJii42z1MvWa7NkwRW5YqeDNftYTeZeaXNPpjYhC6vMmXKx4QT2fu",
  "key9": "26AUmpwe3QK54BixGpHDAt1xSh1w3QSXomT32b3KadH11UJBz1YmLdzhHh5S9iM63KQYwaPedHt7Uvc21656zoew",
  "key10": "5dge6QoLwQMDQtZnixxYv4rjaZP2nhB3SbsrSa8BcFRu2YaTCMuD8gXqgUBuMjqE7XixZ3BrPPh1krWVszGArtCm",
  "key11": "5o5364WBQzNGvU67xpmoUmjDxAzRaaHkGLk9KqpQo7ccJpERvz28RYicGQTSTCQGyusWvg8pgtvReEbovz69bcao",
  "key12": "2W8D2DYFhv2875PzbVuXV8F8C1Q3LLH6BJtLCWEqEd3Es1hYKkuRydEmHFPa2MbkMhJtgFKsuGjZPpUPPHsKB38F",
  "key13": "4BVHfjxj1V8soywwTgawPZcxpUzVX8rQn3E1LN1hD6fhuKUQMBBqXZsVGoqw9SFo65AcJ4UMeuPLcxtLedGPJoJY",
  "key14": "66VtKKqsajRbdw9zhvc2RpC36n7it6bG2uqU5f5BjZsYRcHKqJ6Faj5PQuEqDD8PMfs77UmKkQwcxQowW9scDXmY",
  "key15": "4Uv5r15GbXHGQk3zxGpE24xqfRWxcgvqbhUqRn9W3pkaRVU94bhzAJR4NCrN5ZZpgqNJXuuPeGZzttEoHT8jpoN8",
  "key16": "33bmgXrWFVm249BLP6wTpnLJ4NNVqGXxpEbk6RfU47CRFXW9KhXK7PY5b7uBC8ooZsKgJYeiNN29L2UdtCts16Jc",
  "key17": "46Vk9oACEKoWnkXMLe7r8Ubr3Y2VRNsRsRDbGD4TVF8Us882yPneQDSeY89zaykFgKT17uxyB458qtEJX6rdaMs8",
  "key18": "3ddkRvd2bG3wwPNQfAs24Rdvx4zESUyDLKT6EZaayNjHdWwcjBWDb9GW7Gh8PPzuuuau11WGa8afG619PGNLDZFK",
  "key19": "3cSZCJuVftepaxeWf6p6RFiHVoDk9TJgkLeoFnkY7xYwp4MEwpU7k3Mo7orRw11pcfnhcpXugHysYoVMbx5rAvGv",
  "key20": "4ix69Qy1TSNqKE7oX96cVfYMz5DA1FbTZ9cHJoyQ3exwPVcBDBCvNmsHbY5mmxvZSDHQrpnE1coxYGQRUynknYck",
  "key21": "52hikFzDN7YAZ1VdwFRoxP5VGhCmtPheZGgHpBaNrGubSL1iPUUjfoofTofGTX8FjbV6Bjhp576KwDDbDs3sdnyV",
  "key22": "3g7Xm6YZFBZCbP77C32FXiRUrCJY4HzicoMQRgqmQDywzjgSaQSoK6vpPkd3qFbFSSrbKQb7WwUNArBW63ESSYTR",
  "key23": "5EbGKoGPapb4n4WRsTsUhhYssuE553i2XwfDRco4PoRADGyY6yKrgRXdHGvr6BwEdpBW85SKpJrSPFzGgwHotdrg",
  "key24": "4hVjWRWJt7LFfJd3PmfZxc8wDm6S4mE3Z6Xfh28JSXg164B26WmcUjj7syCS6awxHHvpbcfAeHFXyxxRVUMp5P65",
  "key25": "w9QsaLMqL5QighmNNHoYK37SBoFoJz5x1SDa9GWXKg1zPNJdoNzmqdH9xzxXww31u9B4D41Woo82cXWx7diaZky",
  "key26": "5gYG7yxhDR9UL2fJgQC1TUWTrXgQaMgvUTrPJ3rzJkC9vmdJhCLvBHTkT2UKynubQ4Fq8sTbM1Ja3Uwt5hAEooAh",
  "key27": "5oB5sDBd7DNYsj8DDNxW8ev9dFCwc1HRzEBD3bd6GAmeGReowLiRXdgGZMcevQTcNUREWMwb5feEkWVJmzLEF3mN",
  "key28": "3J6HjeHuKZ5mVdEPHzHNt7zwUmBeZfACxNrK2QpFR8UaxGDxX9wbh11Gn4sUwxBx1kQnpjMArcik4kRCxNUQdp3N",
  "key29": "5RCWfeU4czHyPfrMQUUzmrVywNYdH3zMPntombSQLttf2mbcHKToWWc8A9sWE5t1wMVP3exPuBJv9F7R6URf7vEX",
  "key30": "xWambj1ZXw2siTqeo4BVhfagqbhk9MiZ4vXGv1dAUUgm2q1HLQEEz2gnNGRybZ6q3JC5q5KAZw4FSaGkdLj55Fh",
  "key31": "5EuZ8CoKNZVBcdDVqkxFmVTgdyCNfsYLpN71jxJvdxPYWrNgDYYJ761jTe2rrnNT6KzEA3Y2wuZNnc1V4eSv3wh3",
  "key32": "612xG7wPgb2zHXeebnGgeXgBgwcATcTx9zkUC9fXmriJVusz1Lb29B4xBfjPWodckJhzHiT7AGZbtX9xgxuuUrAp",
  "key33": "2HF3hWCsoWRnSGBjMdHbzJhpBd9nCjub4wLt5W2muqAno35pqFXcuZGEbSihZUoyHUvroRq8ohWJwZKeyGeYwKYG",
  "key34": "4Uiz67mFb6PUfRKke9wDF8xpHKaCLBZmvUuQYr8Gsk9N5PMmRtbjNGvGVqFPRBje5Ek3qFDnVzf5kTbxJgfLDdr",
  "key35": "2UmS8Redk9f5wyNgFqjeQtoMRmuUeBZAGSe9WrNb7hGMUSPH1ri55xHQ8YAiw5m87FGKPMLDTrPSwVJwENZeT4tm",
  "key36": "2h8Pe1pn9uSjqSoZym9QxWgFffFu3ViyeYTMempmjUYi2p4xcYtgmZ9sPFfk6Vtzpwsk7qcW975BnaePaXuStqLY"
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
