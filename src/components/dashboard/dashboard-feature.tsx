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
    "51SHMmyDww5ndXg5sZ6snQ3GD9uYPW3sEAomw6uwt3KrgrsEUzbPqmpGYgyS4LL52eEktoNvcWTP5JUzw1mDUu5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vJMfT8KfRE8q1E5JfHLVVzhP32iAELQ2S2wVSn7DSX9LesVwTKbo1oLALg5vUsNcHPRVzmRFw79QkW5LFrLQVbV",
  "key1": "5NzYwkPTXdDNhm2Zs9c4vwp15K4TooEdD6ftoQGk1soRbAXdkV8XuRL5thVD1VYKWbnMr8q6W4FTJZ2YBLZEqGbT",
  "key2": "2UNzyXrxRfeV1ukwY6vrF6RWxshNGHMA1vJmvgBgTExo5q24SoRqh2hQkJDNrtgZJ4r7jTdmAiwzzfMeME9zQyx",
  "key3": "671yaquJ9WWFaAZD4Y8fjUjzsesyTVdX188wYVQiyH8xNt4fJb3P8mCg2svsP9eiv6Ra4H9c5q2R8suz9cCnWmbK",
  "key4": "yDtrdbE7EEaWUzYcZhrVTNaattnhYhUu1TGyeb8tQrL1DE8b4QEDRWAgtpDf7TGZtHpYowWKEt8G1vFBHLQq8Kx",
  "key5": "5VpHcpaUAsBZ8X3T2Y2gYizpDZsc6rqtHb2eXBCiGYaLnJxdicTwUMmQQaKWj1i87WLhV8PhKengHphNeVJzZv5o",
  "key6": "2WgGoALhvu3wzxooUZoULhxFm82qqzBTgAn6JbfnEbfiNeQmdaBfd9ujJtPx1RXYNbtuP11q3yTHJHiNndicAF4a",
  "key7": "hcVskvzxeg5uHSfCoFEP19YtuXqdGBTNaSExkvyUsUziq93E8hajdaitk4DgjzG9tV4tfed1qUmXvMEJ5DUe8UR",
  "key8": "3Dxqb2WpZqzwHgyvbv5gVgTF2Qom7nXVFqbuyh3MPrUDCBtLPJzhezxLJsq23gSYU1dsX9QbQTDuVM2xxYBHybre",
  "key9": "zGy9KaBEBHCVe4DG1a8FCp3F7K1G1ducWaK5rshxxfe5ncdFWt8rrHFhzpVSEaeobYb7LYaPeWQdBoy25e1aVJ4",
  "key10": "4SwfoBNtLTyq9DADuMpZD1q3vkHB54xQ4TKt2KoNQV1rVrqqRp3MqFAcG1SqYAon4P1d9noaXnVmNvbVPyFEDG59",
  "key11": "5hac4pCdAMar1899UBa9Pe5V9JYBp4bp145ykxzqURUNLTUN3UwVffJXg4tP7jRXwqzzx9ui2QGwZMpdFPE4mvZM",
  "key12": "3KH3hZpfLm8aC3QNProRT4AfxdXbsfxv5BpTyiUQuFAXF1AnrdyTPV4dwmKtS6FgANrcmXX7B6jGAUH7sUKFHjHE",
  "key13": "Mwhi4KPYMermafU5FqfRd7h3zoyZqVe9HdUWfaFV2JqjYbDnFYn8NDZwrSBsCMFnASFEcx2Uz2ZPEs7KzePeRv7",
  "key14": "2wC5f2wtXpaMUiQWYeHa5FSGCbb5A1wPNE79wxD1HFdRrdznU9U6PwVNAjBDYFgFT91FL71mew7aYdSkW5dX4soy",
  "key15": "VjoY24iRJrM9qxudzkQ3H66qqSn8CDjokejK7eDtzcphai3fR2UUdBrJbCB6gLUQBTEfH5XQEuMFVmG6bqk2AnD",
  "key16": "2Sdp33yts5yTZNkjHqkq5pKtn7h3XU9jnsXznj8RKXDgcwS46FN6hyZpt8pRZudAqf5uksRqXYwV3wDCnDuq499",
  "key17": "5rfDgZDouKkvgkiDoapdPhKth93bnXy4Hd3jDncHKDis3yzEC4Urhz2wGCD5jTGywxpYztSogAj9vW9k5zwVAJB8",
  "key18": "4jE7wjwjEpY2iuq5JZvef3VDaRp39b7ETNEcSTKnuu41UgyQJhJSknGZGAXQjkzyNe78KFbXQW7VTK6HsVLr2hkF",
  "key19": "4UGRUhv3ncywiRhMt8pb9YiLAwHhjHXSLX4DgWARphE3cmnVn1bBvWL9LMf6CopyMJVXHvvXnGmtUMW7AaRVUXqu",
  "key20": "25VppuLSPp9wUFb5PLVW7dU6289eeXmQRGAreMRBsM34rf4W8PsybMgTXoBpq8ZUR84TQhWZNjbh6WudqVwTJNXw",
  "key21": "4JrbmW7mCfCfZbdZws71NCumD5AvBVhY6mUFgWvdqCKxjbKvJ1AYimMuw9CN38MVbMEHeBYQvLhsSJV4Bb49TAH5",
  "key22": "5KLcMrLw4ws234mzAmHzCEMR1bpeeLd94NTCkaZEmh4fXNRKY56aMgbbksUm2NySmXMQ6erEyB83BXS46N9jSAi1",
  "key23": "45Uwc2KEpzvrynY4bas28YUNJXMvgbYkArabtX83sxaHeLaRrV5a6tdLkDBKbH513W1XV2wAUJG7m6AWK7M9N4XB",
  "key24": "2XUYM8ryZCi4vX7kkwaeYbtXN74wTzKx6icKLtLqPTLiMcszimp2viZ8Wrb7WRXAs2r7txiqtBYBZYq9KRxjb36r",
  "key25": "2MSZ6zoG1XArn1BRjBycSDuXHgRmoZ1g42HUguYqmREKWxvGuiJPVhjo9PFYX9CgNTy5XL2DC8cEe6PJ1aFNxEsj",
  "key26": "5KzLyS74MbFvJuQoKrp8CB5o6FEFBarJSeeQB931YMimVMZJxovBLHsLvhosAUN86yrAZ5UbqMENx6Pg88SdhDuc",
  "key27": "4AvQBv9ZYQadGj7Yyx5MiG1YERu5zXKmWnW8a43VVFGmd9TevSSVLoYPCyadAjCe3tmzPc3Vw922HCLJ4rroHPvQ",
  "key28": "3s6bKj5FwCopaH6f7WM8opQLmhcs5DPy3vKuC1P3bogfRFEZZPok95dj32MfiZW1XqQjS9Y6H8xyTvLiitoMJnQE",
  "key29": "3bjLRSkae8dQ9y1KwvMHtFxHuMnvJTCfREvAcQ2LzAFnKReNn1S66ApKES6njKgALVUCicfydQsBArZCbrSKwhPZ",
  "key30": "4kBTrXBU67pQuWQekFLhSPZZnUZm8AvQ28EZrojHrJ6baKmB8yrQZeqbytoaMVxdTFGE7r2TfNsfAby6RsSo1NSA",
  "key31": "2sJwGBJYp3ttpANDkVbccQmAdHdmcoQMTPUwb7qf43nMg8MVNgkg7RqbqahycX4xu2vEmwvG8VT5bWDNiJppiXaK",
  "key32": "2MzvsWqUxXRbkMzzYRZbAgDbaZChXvY39QuN4BmmGKc4kJ3KBSSV8e174xrcx5BHgFSvMBAQSzEPzS7b22Qi7nyL",
  "key33": "3WECpifZ2QgrcrQjGGeQxQ3s16GnBbMqXBHsvonJP1fZ4RDhE7TH5VA9nNT6xE8j3vpaGiqDcmrr9jBovpL7TpEm",
  "key34": "3bQSNT3E6ptw6BcSYVjQLhQCx47EJo1RXi4RyWiAVg6k5EQPvKmYZovUcffS77wWvd63p1V6fqypoenujMcZ6Axd",
  "key35": "3T6JKZD3FRUAdVZzHqLwCyWTv8ApEAa8UnqrJhvApeZBkPkcJ14tB92BDYTyLnDVSswjWaMwxAq7kaZEAbRbUDkC",
  "key36": "3MpCeiBXEQoGsVsuExR9z944TnJmu9ZusE9nEshqzxtSdihwZt3t6zy6kYpjZNuFtnFqouS4X9EmH8JVb3BK3ZCC",
  "key37": "4QEEpuDvx8frNn4pSTdoJHTBnxYNTRysdpTCwZjCHfaeDpW4xPNuadkpWBSaXrqZxwByv2wtYrdoJ1NzYY5NYyA6",
  "key38": "3ugVEy13wsQzAhSDxMDDxu5qfS8iXq9hiLsh4YwoJrhR6B6NieutyjndsGTpGRcDtXducaqjHgCtQJx19i3Kgpvd"
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
