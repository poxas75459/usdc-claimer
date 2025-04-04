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
    "5ZRTwHFc5CDVivNUNBusj28fdjFH6Z1CVHuxLvFS2NaVfbbRgWSURjiLigAZk1egjhpacmUTj6LzpmCo6Z9esCCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E9BmPkPLxhb7nYvCRTo1dejGTrxaRJtN6eoawm2DWKbaC7NQr9hLGqxhanYbNaM2779S4VwfZLWNwVfEcWwKWaF",
  "key1": "52ACws66JVKH5cz8x99Yvb5ZeD6sYeTdYwMpeatUMccNB9r6ohYtbMxg4o8Enbdza6NMkcLUaXEk3Ykq81hxPmZZ",
  "key2": "2dMfCLrYW2EkACaozrpQhj7c6EnREhHK7D7okJwUdBbTQPtda9Bo7vmFeFNwGrxHMdMY17aW354NNiRfCYk4PzHz",
  "key3": "zb1oj99CGHEUB4JStBakakeDxZcYqiDgFLaLVMHhBkYTqwTejzeD12FdzXpPdeBm12toG4WH1RcfB5Pm4dAawDc",
  "key4": "3hVEhszzuLbp5Lc9wKqyqEHTog7coQDG1ZsUGtwrN1XTGeMqvRhd9dat3gb6g9Uqt7CvkodNBo9vPBPr5p3GkH53",
  "key5": "4tfpi37f1vCrCiXKqko4x6u8hajCYiisRjGNaDHgVsC5NpBPEmWtN1HfjAy5Z63G7NgGqwfd6yx7MHphm4ykHtpP",
  "key6": "4ZoxzmuUW7VixqMVfvzFfCSR7EEjjcmi1dczfJqLFyeCkJm1qgq1Ww9HbANBWU9c6fSB4hRFKQ2YW24hxDM5p4E9",
  "key7": "2TXGywrkqSsjvrLQ9p6DBBerdu8ZetbDTfXhyjjgaBGBqtXQDNPsQSj39i6ikEHfzmgMHFpYZL4HB81tRFdvyCU9",
  "key8": "1eCz1R8FAjnQVWshz9YuxEMxYzw8gTgefdLi6x3wZKhmWk8oQYxWWjmpcQuUuSNfWBSyTraNwUv3ewmYch2cELp",
  "key9": "2nFi7AmGGDzxnRYj4daBy4pGJfF24X59swLJqKBYsKHiEhBpzXMm5phWCLj5npygJBXbocJhM45c9wUUFo3magze",
  "key10": "52on2B911c5aKWJhU8qfAETxYnfqQGZsdrntMfha7kabeppVuEtxcTYheJcuYkjimoLjdFDx6SMDqNHEiqj3bSXP",
  "key11": "3ykRLyHcGyqBDXMtdLgc9FWNP4dt5JVMRevpEuZMLB9RmNeGgPv399wdStRy8cdPTkhZCyoYeCngUaLCztToPcwA",
  "key12": "4T9X62sgVhDHPTysDdAeAu6gDJ9fY7scBsBEQNNyzn9FyyCtk6QaXRqCkXu6iYT9RkCLQzrvUL7LZ5D1k1pzxtTi",
  "key13": "4a2pMKs9dwjvrcCaqdunY6myULPHGHM6FAXNNunnz7D5VeThsdjrAYYBJjepa1vqW6t5zDgzqbCcs1Yr7AKJT1wW",
  "key14": "4qPxApEpUCEMQ9pUZuVKUwbicgBVKwD5aGQCe7cCNz8UWrYddB4MtWiPdJbZF637CiCYEdC2oeuqHHtguog31nJQ",
  "key15": "Hrny3gP8zRGc3AMiZtg9fCCS67L6r4t4XrVgJyByhQ3xnDPX3Ecj4fdDnLq2adkjyjLYvYJRgYVXdGTUgFY1LQN",
  "key16": "4PbYtYdYXt4PqnGW2thRZ918T1FbNjMTo4vYgmSUgSGCmZ8i41Jffbx8yECLY3WSqJhZoH2UE3BRQry9PqMqAsi2",
  "key17": "2bAC5Dff3vEXhnuZz2VJsbM2mVFktD9XA54CifMmNP7Vg1rnBrbQaYrvBWFkCgAB7WugAxYBxkpDtnhHpxSYcxDF",
  "key18": "2uqkNrujqF2wP3xhXZTymZvuK1h5uXrjLkBGmZM63GJWXJT8LP2eWQqYoKWbvD7qUr2hCSPZcLbkSB8dxnRwH2sm",
  "key19": "2RqBs11ADsA6mrcz1HrQZUdpdMxKzKADDgaqSAVk1rDU4g9WugTFHHGDftB7UumwScLs98BNAVe9Kwg9N1Fz3E7T",
  "key20": "5ZpV3KysiF4qjTyrurbMwnwG9HDASyudRxdQcYDDXUJMMVBVetTKXigkffieLD5RgLjMgxTDQR1jSrRsmXyrdVJA",
  "key21": "4yueQkAQXMAoLFDGQHjbaRRnhjuSdXQQ5TXuzCFGoMg82pYdGcE8t27zYtofyo4DGwZhD8UJ9puq5pd1FTEw4RNQ",
  "key22": "242aBcmZJhXN5u7DJhsyTfcEeg3XJDnNtMJz7zzbq21zNqFvu2mDKKR9tv7rdAsHpLxrEQC15hoEMuGMPNXWpGfM",
  "key23": "3ZFwgTvuuLPkJQoxa3KP4SyKYHn2GfTyCUG3MoK8ZxWWvg2ZVvB1pkfhffKiuafA1qsBqZT8pwLQYSq3WLgsttAT",
  "key24": "37Tu9qDnJF4SbfXEADHNUuJnS9knYs31XFPS4Tr4j2xaBtrEGKJzrmzqnFcm6sxyPCS8req6sWsQW1pNuMymEaMD",
  "key25": "2cZWXH7S5UFuXspRGdP5nFEWAK8oSXiNzeDZBUBJJLaSAH2oStLWBGNSbFLLdFNAqGHEj3HMnHfCzmqayqtmzoKz",
  "key26": "5yFVYcyRLjbcpadrGyHMv29kurfZUpygrLZXFpejFeEim6WCardLu2mNyMwoyaooQi8B7nEq73XLUJUcMUDj3GqS",
  "key27": "5JDmQJ3rf4wpw29pSVufagJU3ipw8qckqAyppPAp9WCJ96AgR7P6JeQtDLXv6PS3XbQgRL5rLEdzZkhBz7saPo1s",
  "key28": "5ZWjQNukLPyVP6Yuyn3MsBcczMfLXFDFvK3mh9uVEB6HzS8tVtkJi51pebhzzodd3idF8LHYeh3QziXQsbSY1afD",
  "key29": "587d4TsZ6KFoeNSz4GMb5ksdgMaQmH6KeABm3CBi4iL75opEEK3Nj2QMhzSh8APhie5z1q7x6FkzKNSUbBL7ZVsN",
  "key30": "3GtJzWwCedYz25xr6yXn7unujuevFKkRkBcD1wZza76CPRni3Fn797WsNT5VCxFUoGQVwCkh6jKjqx5ySkXs5ysh",
  "key31": "36cBtL28Hfd9FitZ9iAqchFpWSS9wQR112nQjSR3ijjRu4Hy6sXN4TN6M7tTfc7g4xYYFVxs3VoS23yJuypg2c6Z",
  "key32": "587XrAsoeUS2n5gxJeVr9uBTnmeqSC3bgn1mNDdhHAA2UMSZHdf5nrFDFpiaAL4ZvdKhsE5VnMBEqqg5HVh7bxvf"
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
