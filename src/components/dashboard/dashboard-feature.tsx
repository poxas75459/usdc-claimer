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
    "4EJkgQ3q9zSdNzcStavwaM8p6qyiRTBbtPNEMzoJMMwmNiStrWrqHoZ1GcgSqkRzbrmFddZqLinPw1uX4sZUs1K5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WqKGHUhbXaZ2u4zw3ZV79sywLHtbzUSi8Ukvf9gT6WeXCL3UamgpxBZLFikQmWsPVRfG4R4BCRfgbBJyswV8jBn",
  "key1": "2GMfAcnFrypS35H9PLC1xT6P7BzADG64ib7Z11B1QfaJZBGn28Sp2iE13EXyH4o6zP6ZMATTeEt7ruDupnJ6ronF",
  "key2": "5m7Eijr3kTjndcHqiiUnAHrCBwcdXNZBfacnZrJpM957arCUkWcQyaYjVUW39L4iTPkeSwrUvPPnHDeQG7542v9f",
  "key3": "64cifN2eDyMjAZmGEzhTm1KWahbSKxWF18sKZZ4hmNN9JGGVjN6ikt2QPqZsQok5MGRN8a7HiJ2V2NfWHgC6oq25",
  "key4": "2gB8iKrEQvusv2Tjk6xYc84HZJHLJ6jS28cd29fAmeYV5y6a8iGUgAcF24iUZC7NY7kzJz7KQfxj2TJiHzhbzuAf",
  "key5": "2fqYzQYBnWMCDqH6MfHVc8CJybJ6FbhL6MJ6BXuuU9JipzWwDaKifA3yoAr4WdHMaF5fEHZkHi9dDt4gAwtMf5dL",
  "key6": "xpJn3x5df3rGfKN5MYz2FGYdyKcsP3K5K1xuvxpNXQPNRLK3NUALiyBKo2G7ojoDR5g6g4oMdp1hKNY8iKrSimD",
  "key7": "2UnxM9r4R2KZKCEFuTCPwDCymZhV3wGW3E8XR2m7HSAGmKAEQL5rQ67jZmE8epjHaF3cyyhxVBxZ2eDHPRPqx1Xy",
  "key8": "5mH246XAuSkoU3uBrqtS1Ngqnyi3AtNWgQUm76APJBTQLsK62dympQ7SvPkPny9jM6eYcUR8c8Y7Ju4tzHiRjg2d",
  "key9": "2gaW9qWwRBRRsvFLsyYrwmzduvbyf9McYFjWdSFsWy6jqoJY7tDmvfb3a7VjDgxzvjrvn2vtuPkXHrBkvjqrNJV6",
  "key10": "5ohv92tNh2UhH1eUgbeSUHkWqUzBzthAKPyZLVvgCZwi7TiAGGDvpoEnEqXFc42GRUJReSFaGGUumgx41azqHqpw",
  "key11": "59VkYVacnMHgToSJA1rujGibU87S59V1bGDjkkSX7QfshGmLQYtywaSAkp5XLtcsCod9tH7dcyzcjo3GYytYyPQf",
  "key12": "2hiHiSLs9i36GDLRCos44C6tr2Nk7S31ZAPtJ6uoDkRyxQKibbnFkJ6g3gRNnY897rCdmEUF7N7UNosdso8ak3G4",
  "key13": "5RzVDcsK8UzUn3EJnw3Dr4S62yPuAuDfLws2hTpQYMiUyWgkzTQCZn49ogm1QenSFQmimeBtajycicDuQrsQ42Hq",
  "key14": "3oXJeHfMEvhCtsCVmWc45TMM4R5MnjK8UybsEcm9kP1JkduH8x1jtEn9oD7FQPzkhcnSNc4YFAxZfTxd4UDSaW7n",
  "key15": "3PbxGqZPhguowW5BYw4RihwzEByaU1SUpCzMwBpZuXMMzPLAMHSf3VmmQymaPJzNJtrekGwD8uWjmqmxyTxYoNZL",
  "key16": "tzVxEGDQBNrMktGFUSEnEPMA7aYnmPvvDTDd2MmnT6KLD8BCEHsmDSL8aTxxHZMoRqgTTecjK2Bzm8emFZnogib",
  "key17": "28LjwZdpTU2tfGKph2vR8sjbJBDPfJ5Gw6tkJzbAi8swo5e76WYdXyc1faHSUqVqYCyuZ2Z7wGGVHVd7xDzKC7QQ",
  "key18": "41nvDW3H3M43hDMNUV2jKs5FADVLisXAWiQ1LKuqzvF9qT43m7Zf2kvB8XwccJkyD9eUiPciZzEDiLLQk4dp9HfL",
  "key19": "2RtJ6xzKmsykzEwsykpvr5rdRnqaeBJGhbH7i4bWTBsR4PV4XAeKhR71CkyXoumDRsP59Qix691hDBJ2jTfatbHX",
  "key20": "LyH6WgGoUvEWP32igto8gP8hvzsnQjVoCkrjegpeqNsxGXRbKCMNmHar96gy9ZQbNfbrHJYe5AUyozekvJSv8UD",
  "key21": "6PnLz4fZiLgCvfqwNNqP3Y57fRxMVx97E6oKtvR51utP4joK2DoBDeLy8oMGnjW5RFy3dg6YcTpQay738E6PnL6",
  "key22": "2QDvj3wCUGtZe2mRGVHnLtmZ3qdN7fafH5Rq2tkdM5yihNimEdZfQ8wdPti8E61CQmHGJwzV3w99uUcSFZBB46ZF",
  "key23": "5QqNoyS8C5jhqPgr9jaGCywPqSjSQbvxi12k5BeZTxde73j4ALFSspg48HnVt9NzRbit4vMPdwsS6Ma2CVh419J",
  "key24": "5Q8B5XcGrF55AtxfkVTKuDGLBKd9uwKt2TDd36NBGvszidksUgeoPVWwLcQ1HpA7aMY1xGxS1WQvqMdVYDdrQxyU",
  "key25": "3NuPPPJ3Tj9x5vPyFUDCwYyxwQakrrp5tvGbsxXTznNYNoZ11XaCUWbLsBKc4yhmsApnneRQoZwcW2r3QKXyRtPM",
  "key26": "5ycjapVzTRqP9ZPgMLPCVvrMjELU7VT4RXAr6yrhUgMj8imo7rUHQzUiB4sHBFCaZWSSCUniLWDe3ycZPhK9oXKD",
  "key27": "53VjtUMygtgxUJM7JMgmj5R6BDK1EpjVktGRxe4xQS23oEPcoRFvQvJxNMDZP5dqMS5WtNzvS2BLd3mBs3BWYLfz",
  "key28": "4udb3fbRCkZ3JRUSCXGHLkdvqeykNNW3Nfj27Aex2N1WpGNWYSw6MxSgFdDhrQ93z2b6S67KPbNEXzvUitjxjrp2",
  "key29": "4H8U4Lx3u2J7EFuXoQTbuBARA5m6UhtZohaUWCdSvfQma8CeJ8rHWQwLjyC1UyWHgBNna6ZqL8jPCf6Ecw26GHFM",
  "key30": "49gFuRTRsfM8voGrjDwLfKufPxzvz2KPQoc2W1hWjBDaEP8aAmzbSnDHgSKQ3KF9QQFAuDLBd9NV7BmLD9J5n6Q7",
  "key31": "263qY8rqNs8Y1yhwLi9TZgPnMV3MBBmMPcjp8Bxmekw295jixBYdxkXVxwX5CEEW29aUDMd1J3PjhSScopgv8GSi",
  "key32": "4bgGGeQ9PG9ydXGpwhXkDYK6wzKCRZo8J5gdbEUo31rQpxGPKXbVpzWkxABsAVgJXqGsktyyfnbrrQw6FvXVKd8x",
  "key33": "D1A2gZvFmPBBW5pzoqsgE4n88howiP8oPxCyhAugfFGzw7Bpfmv84YhgwvYw3rJPa9ASAFvjz4FGozirzYbXinY",
  "key34": "3tKpaNTsmsB2LBtc3rZ9vR7J9YJiPieBUufDoLEoF57we2deswMNztFJQiiKke1728dwSh5ZtBigo7EdM2NNVC1P",
  "key35": "4MYmH7o2LHsY4LN5wxY6RCTSntho9PvyZvXqsrqWzyYUyzJuVhUjxeH5qGKzkRgBZr6T5y2DHizTpPegURJm3nPn",
  "key36": "32zUrqeSnjGUc983uWLM1aDPXPc6Kwv7d8iaVMbVr8jE2gkcbSmckB63NJEYMRaHkS1McJt1QEVW2XYK1b1WUkMq",
  "key37": "4vinDKjDAZ9zKwj8SUwbu6TL1U1JVPECavfqkiV8XAS7cY8CC5oQcMzRZUrSra6GdXuYfYWHMBvkJJDUGRMZkrgd",
  "key38": "5hdGDUiBhZnFeJVgg77KX8zw4Qernc2Fdeu36BozsFp4exEEKYUqrdFfzRMwBbGqNqzuEpx4PGP5HkNtdj2DQTvB",
  "key39": "UZDHSh2fUtwikzjuX8U9eZxvRwhRR6CjJC5hL4iufRuodCUgKWi97j8Mc24NiFgKDxSm6YngyFTyGDpsUSiPKyY"
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
