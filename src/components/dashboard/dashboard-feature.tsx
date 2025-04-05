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
    "66NqTj23oLBdx6eXmpbs5xUnzcyXnTmVVwEdJa8Rj3b5vfh9wdmZDVXogJ8NczH2WNVJncRVwCr2ye3CwXq1ftCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FwwNyFEkgXPW7JkkC7aBR4CxJnZAWBNDU5LBheA7S2XTLY6h4gAe9jv8My6YzvLLNRDumWGeG5nbtLDBsBsHRKi",
  "key1": "57Ld181k8vLtMwRRfx7fNtv7NgpPALE2ToXWvENqJc9BBBfpTzw9pYUfZstr2GHXq3KLygAEG4BvrCHedLgAHrxM",
  "key2": "HYomrBsFM358q3UtAg5q9PeFmiNQpaauajmjF7dPrmHuZJi2JNwPpf7AmJhu39FkXaZL4qTvqArGJyz3HwiKXCU",
  "key3": "5hG7wYRaajDKuVTpZLNTn3T9RuGASTpT1e1F7Z7a7ZSgsLBMvcxXmj3Kz8C4WmZYUAi5RgxK2TEHQDBo8UyEsQfS",
  "key4": "2uyHu5NpMagvRHJu8zfNnKtL1RMzWrxe24tcVV7LrtVAM5H3nmk83GXPhPbFq3gmbDRC2FrWXSXSMfynEVQnyQMa",
  "key5": "3wCoNQKdd2Fiq4PTeHRWCV4vaxQV7n6nYMqTotmnLBsvmf4ToQYX91Dc3WenTPghTLXMMMD1vb7aftFJ5utKVYr6",
  "key6": "3my3wmQDTaDfY2qH3mUjWMJixau3pwEQYT27du4vHzyn8C7URbLrERBjjnKzUTKYEWW1UtonxBBKdibRhZBfRW8F",
  "key7": "4eX1yFAGE98g9KQRwFq3SVpUXVaETLvmEwMGWqcJRVGikuyRqzFcy21ZC2sAGeJXuPErWrkkq6EuVC35j7Ah7CM",
  "key8": "2hY667pP4jCCD37ueuA4JEwb83R2gBkpiQZWw2sJendhyRSayrFsuu64qojFKrLxUTbiExZXXjdqmu52LHYN14zh",
  "key9": "L5ofmagNYvreCfAty3SKXESM8BhAGQZej5pqQ49UmqoN1wJKNHqsQToMhG25GUvPXSetTfZ8fnEp3idvPTEAfMd",
  "key10": "4Kb8sPwXpGyzuN6UuwRmU8i1DyVyXmiELhhb6LyhxCccDmsQVX9XKdiceRM8uX3M8LBmpymed7okRj9RERk538Zi",
  "key11": "4mCmia9YkeJQw1Rhh9eAQqnemGFhaMCRgP5ctBUX9YHwJm41XQ3ghpvQ21cMTTHQyZk5NuZn8QUfkMDnYfBS5wAs",
  "key12": "44uWCCRPSvNZXucbwYH4Gu5YutM1yYJd9rzi51p8qWGHeiouSM2s9pxekPFbtjPmarSJNT7TLn8VXmyXPZ7vFuBj",
  "key13": "39aiF56ohNK1Uge429h98embvGS7D9bafQMfxYaqGEHzFkhK2i9xJwPRhPUb49vMwM4VJpSgHdgrsrFqhDANHVRj",
  "key14": "3aHFnqg5NSrcCRL76BidR1J7E1zXC5SJBib41DbgbCk8PDVnqxfREdPt5tS3T2oMyqidwzEK16kJiwjQVjV9Maxr",
  "key15": "P5bvGJ34Vep5MDwvWmH1MaGTCBXMum5TJgou7vuLgNznurFjsjgzjAYuczBEKh2RK4e9DDeaZWc314sgrrnvt1t",
  "key16": "JHUh64QtgWZqJZoeXwVP6tNNbmteryw8utsHdv6EquwHyxBj7dcuLjHQzUkgfS5dEvz2EN7KjatriKvvAwyabmJ",
  "key17": "RFdzsoepVcabGnsCYWd4WB5urmXwQuKLfPHXTTF4AmTmAcBYJQ9BWSiAuRae3cmMfo8RVHrD4fJP1RSdEKB3WzE",
  "key18": "5g1JHwEMxu6gxN21FyizLfFZ6c7ojC8g9fkBoqwaeQjx8nhXTuyi77W9pRVi7dQWVhUFioRysp4uZ9krreSnd5eL",
  "key19": "2EeXqqJ7SQmCTEYjsGEvCu4yVaHVATb9R6tqvfcThawcVNg8AJBM8aLbj9gZw9xj7n2ueSyXiDqG64eT8wvZujcq",
  "key20": "7N5DrjJ3hYo8jXqmAxKGdqqF3dhrNpNt6qMnsx1KJDapVEhFDZAYfY8Ga5B9aAmRMQrLigHidMc7k1uLRqZMpUy",
  "key21": "2K24mpK6yq1fmqg4vezGY7niTZP3GGYnEHarSJst8StbdLEb5yr8A13afEX3wGQfQfuDD5QMbPVVXbzv28Emm5dT",
  "key22": "qCX4Vkk2iddgmbotDzaMt5QfjhLYEN3NgDzLhcYi6WguWn1i8pyJCo4gcCqsrFx9HZaKKkAN21V3DR3aNS8hTHx",
  "key23": "3c1eMtaJC7tWaNH7PzJTKNhfRsGaAEUrciwiWtKvqT1orTNh9gnnQhRwqv5Xm1HrGzci7oQt9axTTLTke4MrAL9a",
  "key24": "pkGMjzhChGawsTcQ2B2FL3u6bMhC3vzRNCo6YHR5yYK5FgR1S1WQACGdrrpLRnwtbJotRBMA7Hokn4wtt6UsTLy",
  "key25": "47mPfmmrUzs6f2aJVAiUzhegua7MTCHJhG4j5ZeiidVEuVa9wpEhe16FBFM5gn8hsd58b1AwaxmN5RMKSoZndSN9",
  "key26": "5Qjok6FB7nFJfXKX96jKq3T4gqBtmQuGHzezbCUSzNbkp8SstjsmPkuDCW5pQpFcZVybSuyRCMmBX5Aiz3vRJCfa",
  "key27": "2C55cGmgNsufTjtnx74uZagaZbGgVKq358YFa6NSixLeYEAbeexSVSawwfQ3wNoyy7v2zKiogTU4hpGxUwoaK3V3",
  "key28": "5qKsWWA3AH3LSybLbV9JLbEnEXrsV13mRN39GJ6y7Ha4jiQRZhHp7htvewj2TRUSEokP7VEkdYRyVnwkCEfcbtQ5",
  "key29": "5S6khsrAY2cxPGD5CnCEyr3DbfR7H1bmMZRgaQzMzxQStZvEBP8mTqHNx8zPnjF8tKCr7vveJUQD5a4rjr6nCCaN",
  "key30": "4u8a2YhqdyYdEAC6Heb3SaxXtufH832JKc7bfarMPBMXx1zoQLG6NvUCcJHU3XyFXwLznUuxr72Q4VMru1D13eEf",
  "key31": "3QkwLAacWxoChVgUHRLAmPTzKg224R2pi6565ESQfD2qViLArfUNwQvsirpdG4yt7TJmrnhCewWZMNwavmFM9uA5",
  "key32": "4ZXTEyXHSN2fkw2Ybayn3cNJgHYWA7d5eDkX4m2th534QCe8i8fkcjHD2nUMLiwXsgq6rJdhWpsHbxKmeNaZ8uS6",
  "key33": "2fmZGpF6gA2bmg6u11imS5u9g3pymSp7LvLWZKB45k7US1XKoRGUWvmQCpUjPyW6xvrmXk3ikBJPa9AnV9Cmbyyt",
  "key34": "5zWZRWEvsg2uqrdb2s5HkcdMvzLJYYYoYAcT5fujrU1gm9XF1GYF3Cz8ey2HF9FNaGsK1ivnavmQ365AweSPpExC",
  "key35": "5FtXdE6fxA1QgmFvtrjZG95VPYftd1J5KEY42g3wQ8EjwL2Gkf37rXRnCgd4GU9yqHux2WMXfzNxy1auh1NgrGDD",
  "key36": "4pQdpsmAuQnshZg8ogjLWeToX5yHKWGKXhMoHHogBpZV7z3orDgUkctoNAhEgwv4FuqKgdjvD83h3LW3m19bWVew",
  "key37": "3tWbQqhk534nJaMbxnBRU8XtJ5R983MuVku3ApVzTULzDnNEht6QkbEX9sPoCVuQh1V9V7b4Mj9y3ho2uUBZ3osZ",
  "key38": "5dNYzfBMGBt1ZPFtKdJn2KF1RxqaZXhTioCNu7Yt4iiWWYUBFFTJXHNbWXbb6iybmexZyKV67m7NzZucYpEsiizC",
  "key39": "heFffhudDE9QrtqhM34qLt6UdompwHKVfvtBu77wYdhRKWgfb22V551iGcTuwyS55hZqodUyFMgSPqjRQ3W6rAE",
  "key40": "2vT8inbqYAt4HJtQh2D3JfSmZSf37crdzMt5g7us6vSND4UpBH8B8ediG3xfMThnPV625ddL7hdFQKtZHhA43Xta",
  "key41": "5ZQoX9Mx2qmZzvNDQMBqMSW8tm1FBfJta3fzsQWTavDTxyCNqm2VLTVXZKYi7Vm9nNvXNz3df6Z3Kt6SXXVupNbH",
  "key42": "2LybhojL7NVDYjC9UNe6WSjbRJA286RZUL7QAdZQ5fkoetTjX3Ju7ES3G12UbNHP86azyBQDEk96DBUUQcUdh6cE"
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
