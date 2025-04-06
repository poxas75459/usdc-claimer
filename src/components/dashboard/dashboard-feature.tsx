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
    "21yqTsp7HhM1NtZRYXb44JMVSMzq2yXW4nAefCHVBFjeYvJaigPWZduSy27EQdJhRnKhwYquefKh7mPooks2y27T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uU4BhVMvnZCY8ABi3n6XMxajfHH3vbyCaXU1Zn7N8kGbCv9PbTZYC3oV6QfpiiwVJgWioKf5GF6HnTTY2d69Hrr",
  "key1": "2Rud7trViVzeuvFei9pJvW5cHaCAzYcdGFD2UxTQatdhFJfYsudXb3BLm3rfUoyjGhWyCV2yg84u9jDw9eMBpuot",
  "key2": "42VJ6J6msZLEbEUNVjBpYvhDHMvh11nNpqhmUdgdkVSSBMwkSEWPWjz3N3mxasuU1nnYFFwVWYurCtLg47vVeCXj",
  "key3": "3UEtCGJFUDAhdLAdehs82UBbCKQJqWQgU7pgCuNu3kyd3uytY6M1gUBm11V1yuoC4K8DQzGg8YzWVnq5C7obd2Cx",
  "key4": "4mFVXSVuDKaca9cE5fVq96wJZ2p8bfK9SzCRidZuvxLWLehqspULPzBgBrApN8ccKKAyjGMqXLwrpSBrBjzGak6w",
  "key5": "6132G6jhnwSeaFTirorXTdSvjjRPthNQRWiUZg8cVsigXnAEMkVmrbjMV2QMGr7yg7cu5yetnCfj4k7Y1gup85bH",
  "key6": "2i1UknvAJq1Vc9ouW33jB919SnqPXyUXJ5PyNG3SDGTtZmzp5WkiMBySyPkcW8nYWgKyEfHC6LVvchxSo8jt2Eg4",
  "key7": "9uz3AaUrxebAHmjHeDh5RNnd6nd67S1RXkwZkfMPexg6eJrLVu7GT5dRu8HF57mX63YvkvgU8Pu97rDyNCgSFzR",
  "key8": "QrXibHMoqPdC3CGGZZFEsUt9mh9SScxr8SHzq2Zc9owgZc7rT2XyzubVVczKG1fuQAigV3isrtkoqW9i1uRnbH5",
  "key9": "3EdHgQD7auad5kniN1dYS7rnp9h9DYxnjzFVpMZJTfJ5UNZBW2qBvuLqN9azXfLXcFCECcP6MrPaWewUAUAQcfEo",
  "key10": "3h8V334Nj17SDMiZYMxR3ASpfXaQ8R14bytzgTQVsw2hU4pZS1ZBZB5NXUkB1FUHdRh4xvw2Qhv8FZwyLCeDTNeM",
  "key11": "2UjmQpqHFNKdsRzuBCRgj39yiBuLeKTm8r7z5CCiNBfoDY1xbkGeTt6DnZ6LgCefWaWQuyctVrQ1HdaodYPtBjHP",
  "key12": "3XEoAo3bFZj2HXNkhW6SC2XLRw44mKiBeiQ56AG2srKrW14a1G44CCHQHLeGY1JK6k1CaPmYYaNEsy7EtyDyLNGh",
  "key13": "5kgLWmkv4gkQfJXVuVYCbgBmPfHk8VbCXmC2gsujRbNpLZpV1rBYozQmMRTGz5hf7yv6FsY4ZFtyPdPsEZqMKDvF",
  "key14": "5SvmcBdrVfCQFxQdvU7FbbX2Hq1h8B2rMfwD76pnBKa61vqnRCWyLycbkL6ow7jPC3pVHDme5xF3N4zszWCofTD",
  "key15": "5oHaF1kXTWTfLjbFb1r96aMzRirzRxRxZaRQCHsN7nbDbfVunEtDVd44h7ehDYz9K5LHVDKcEYTzYyUn3rr71T6q",
  "key16": "3KNo2dYgM3yEMfLX5abSFaKsT3pnmpi1qS6fqTbzUiLcCNTuZTsWe7aoAPN4RDneUxEQE4Qbfa3sNEtiV94VC9y8",
  "key17": "57keu8ikEyGqPU5gnYh5hwRZjSYBjbCj6YjCySAVxUATBbLYkB4RBULhwJMuJBa5fzbQm7SCS4BYafwUiNStJ9nu",
  "key18": "4s9Jf5G3F5EN5cEsEFuyryK7JmijN4r5oFjo64SPGkjUTPmwsVuB2nGBKUBgXxem7WsTC7ECU9ZWiqqW39BAkPK7",
  "key19": "3fmbTXf9T4p7Ypa6x8JyvfzWoRv7m6ETW9c7ya1ekijezx5WUVnqdH1HgY6GuTeMoUMmZ2bpWD1TzjmeERvBLWKs",
  "key20": "4KeoxEuoVMV9F5QxpsPFnNXV39QqMBP7m3LrsJeDVVsvcZ3cEUQzhxe1VNJPUwmnGthcNQeEACc2zeTWM1hoXRfW",
  "key21": "5n7joFUn1twC2dJezj7hWqMV1fbGRgh7unc52J1JjgcSzuD64rv24uspWav1TBCwAYDgn6W5Qe5w19L4cau4PG6P",
  "key22": "3r3dFegzhAkJLpQbPXg4pKNa53pktpV1h8Qo346du39Jf3m4eiw8bU3yajH5bCr9tPzfif8V73icKRJLo7QCvFrm",
  "key23": "5rVqh45yymzHn3AAtF4sJAutCUCJHS1H4J8fNiV9rMVYPFMRyq9N43nFwuZoAUjXKFie7fStNnBKLMVxycTEVFJ1",
  "key24": "27vE6mJqmYH4gjFJA1h6suQp71S2UswQjdTJ6N97HxZ2RsZP3ZK3sMLAGULjGn4rpcyuwnBXi3xYabPvL4Kj1ae4",
  "key25": "2CHP4vsewd2BDZAxfoW1X5TSYfNRQvLyXMbwHWMBMccuJMeMM7fDmurPuLKgFC1KavmA4rGML6jcDJ4pPsUNR6Xy",
  "key26": "51px3chvgYBMXAguSWphzaZhZAFcpX9Jsjjoz4Lud4otvgrmc2gBPabzb3o4NiUf5i4YsJf3rBxowwBWY13mNV9D",
  "key27": "zRr3JJ2Kr94VNFgDETFhWG3XAMBVKKuFCFMiURrNq3VNUvmhLMyE4ttP5zDSHiV4ENjWcsyzbPHZV5uuYc5LPYe",
  "key28": "3ApQvi1mc9G2asdHybciTMFTHJP3ityuHaGiAf4yr77XpsaWwvW6gK48j5s3X1vU9NTwEyNjrMAA68Kfg266Edbk",
  "key29": "615kr7zXfpJrhcXcwVdbMQs5gtkqypEzhnAn2oa9BtvdWeGAax1hWMsdHmWXHbxYBd4gAJsz8n9GU6udRNPkpAct",
  "key30": "4tDM3hRw17iVzX3EMRcHsSXKkCTPkdwRDwJPG8oHxjhU5a99ttmH65um1DHN9XTaKE3pGMV7n3dNiTVEYj6u5AnD",
  "key31": "3dpNr8rzpCqB52o14KuD6QrrZmRujzn62yWAUauSTZLDiQVtjJc6eLT4sqcQqAFVdLHuPjHLfeuwo4fSYJnm2hjk",
  "key32": "4zm1p3JMHxmf4rrYbmJuYKYVVDQCK5b3DMUMrmKG9tyWY7sNGykrR46Ft2ykhUZJHJWf8JWFAd24Ad8xGVv2p4XF",
  "key33": "4V52kn41Gy7EEM2uEhXoQh4fYqipZDh9dsMQxkrvDUAuKkoCz9DDw2kUp1aXv76v9FniRpVJaVi9aTG9S1TojdXj",
  "key34": "4nTguZDfSquoqcue8GBAuG8hKpgnNBapc4QNvyCQPZ88wa65xXMsruvpjKyZaYMVxNNNFx7KiqmuNQzNQtrbHKa4",
  "key35": "4NMdWqhX44jMqaLZZeCDuNZvG2GodAVh9RvJ82E8WXDTeiTSj6be6GT2TYGUbyVmyRHfkyMR4nnkvfgEyFDnBvpc",
  "key36": "3tt1CY879ecQUufzC2bvjf9ydUmUwokWfhc5HAUB1DFxsm7zRA7w2CqGrfRPCkRRphnVejH3mwm2y7b3ueg89iK7",
  "key37": "4UX62TeTuKSGv5QLGEja3W8GVSxQ654TagDmFL6S2FqEgh22EKrPnJE8vYQTNksfYNYtZoPQFiYCrFHCk8CxLfhL",
  "key38": "2hU8kuZs3PNABpNK9tqXxvWj7nuiNQY2R6JHEXmEJfcwNXLZkgKM18PhHnohx3TX4YJJTL54X4DDBgKte5PK3dwV"
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
