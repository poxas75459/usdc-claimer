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
    "39t3chBsJxAnG72SdH1qyxgix9Qxaivg3GHb6eSTsqbNPNnEGByaAmkScGtD8i68YTY1uktPehi7f2nNzFXej6U7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VDBbNiUSfeig8f7nMNCTxnrMPNcBpjvX34zMivEHVmE9qbGNDvXY8X4uLYizJ9vkw8hGopGA2RUnMNjYuPoSUBA",
  "key1": "2uJ5UoqJiDUNiWMQxLC9J9rvkWufirxxBBj9RxKQhNiADSRZ3bQqEZ5iYuZ5UoYUw7fKYU4H55UAWXwRWdJ3VmWN",
  "key2": "5vRkHHM8cLde4RCirnNcYZm7MqZQT3yoFiRjcaioJuJ9AoHde5YuUrCynfh6bqiEQzNsqPf2EVALWjhjg1ucGiiC",
  "key3": "2WwQxTkka2zdYsMXmmJNbF1LG9oyEnBaTH2FCDP6QebvotYYzjrVm5qHoMEFLrYb9bcH4FULTpJbKqz66qx81th4",
  "key4": "5GcbTbXjY33G6C4gaPsy91cpqwubH5fdioYY83pwgLZwmJ7Yg8SavixkmCK29J66QjQMS7CyHwJWNbuAe7ncM85V",
  "key5": "4iP3q67Ay5kGyvk4wyacrTBfPTQy1eXBMpU2EUnj7TWs6uxTGqBcDDcbzZ7YejmVd2JtDe9uE8zBip4wGehKW1T2",
  "key6": "gRzXEYQvyUL4YeHth33dGKfEVAUktkDLxvXFeqk87vRcmDHS7P2ao992UHoJWQ8CrSFqgVEp7Z9QLSPSpvJSJPV",
  "key7": "3iASMYiD2qe3isRamrixYJqCSes8UkzvxEmbWhijt1Yt9faZ7ej7L8XBLyDAMDo9enWh7sGMbFRv3Gc4BXAtPXdB",
  "key8": "3fk4JK9YXRHgnRK4QHMc8GXcHPXP92nWQFu7GGf4SfoZA29o4wa3vT9qGAoU4HgaDWjzAi8qaeXebcQrzP7GVAwq",
  "key9": "4qPK4D9RjLhUv6bB4jrMaSWF89yYdT7xGnN9eS4AtM6us71r6MFGHR5aRjAYFRX3ATC7s7qToap25bvhG3TuoxPV",
  "key10": "48341gfWBLqfoBvXVfkNMbX48HyqurVYcZXgUyCtX1SZ9RkXssTLizSezrC3S6sNQnHb8ostX2JD3aUoHu7sbmZW",
  "key11": "27x2TDJdmiBNmjfUcuGs5fh4ahdv66qJPZ4dGPyysZCtWPkoAnUBsUVPnL5tNLaRZoEoHoKDY3VVuYWjXp1DUyCR",
  "key12": "dq3iQ46JdMZu6ksyZ9ZD2C2gAXZF8zs9NaPSAGhK3U9S7DNJDgp9CCoafrodM2LB2J2a6DZTuPjek5tyThu1kkt",
  "key13": "4SVGP1ba2yYWmCyyWT5qGjPxFnKVhwXk2pYiSRA7ZturBtLW39jZ4oLMpx48qaAhdhrjK1btvAEXTLu5rDQeWrB3",
  "key14": "2yRZZ8QAtYviCS7QsXz86adJQEgvuSPrtbLA4WdykxidSiJJefXtDaXntjiftTGaXXJWGcQ7NxXxEQpTDqgmgd7u",
  "key15": "CRBhKCYK25vNdKXgvQwfJazwQwg2foRzBWu7k1kCNKStwHq3veYkuMwR3vqsMcm4egnnvdxdFN8EBena4U2n8FT",
  "key16": "4A3pYTCiG7v8zCYKKVrrmUYdJtNLguYCvp9rLnQ15WXq3hrfHz3s2YfF8VMRoABP7H8Xso6kBjzDV8ftussq9nGy",
  "key17": "3diJfPuRKFchVD72LeLbf6gnE7ddUQEhcA3rYJ8Q8qPUxNcayYB3RR81rrdtBvmPoNwDsr12F5eYH724CSJDunhG",
  "key18": "Pm9Q5pW3fegsB6qdbhtZdKYx1JyquTAn52m5SHEybKr4LyC9z7PUVcuvmVRvnmdsV4ui8T9U3pf3ScF8Dn5pcqB",
  "key19": "4NLQEU4qcHgGhqDQVHeqyBeTFmbrYFYGzXhEPpNogVWwRyXwxR26PWi7EeCNrQRKZjfmXbWTmNGPnEfytU1PK6Cj",
  "key20": "23BPPp5k5NsqotsFnNqZPKg3xgTznNXDeDFwdKrpufbMhq4dbUZuJKoSfMwNZ8g4yUEg93z3w6rkbqzHdTFU519v",
  "key21": "5bfxjr4gSNXj4TZsM3dfJjPyAy8BCxaxkCuAgL3AKmq9PbuqvVHBCpvTh9HMsBbUVS65rwkpNsNRxMLVqMX59ChH",
  "key22": "4ecXURTwGYUUKwgV21PboXtL1ZtA2AY9fgDF3eoGbk7UoBMrTHwRctneGvd41wANwjj9qwYxf9ehTKnw5kYxkDMK",
  "key23": "2xnebHqHoWadK4B79dzGzykZMnuSdk9GpAd4X4ivTVdMijcEf35QbXoNmyHuS77XfrhrPqYVAYeCr2DqYMWpaKVY",
  "key24": "4MfRp7A1Cude5KnBqwhnVrBZTqMD6DR7GKkpWwbJeC86Zd42F67hngH7DVneht8QFTprf4xgWMgYeHA8SympC9am",
  "key25": "49HKfpmdnF3oZT4Ktgiugp8imkAf3SqtmwfWhsZXCoo5GZyV9HabZRpLCybgmBX9cdS3bHUjp9akhCS3vBWQg1yU",
  "key26": "ocDP8cBEKchRJGk8Qntc9VhZYB8sDiQhd1nR4HHzStJ2q5optoToUtygyAy6pJ172wiPgLRyzgscor5VRD7sLad",
  "key27": "61oKPMHNgNq1fqQthhnqpVaGyJgsA2iuQoJKMFJ9q8u6wVhuNKpW1CdEfLcAX7fkawBg7UMGoUuQVsrXEq69h4bY",
  "key28": "Tzwy4LsvZA1iExiFwRDpcewrHhZDAHbCCvPvcexZkKBZZN3231KxpjQY7ZvLty32GPMWdcSUu8UACnTi49QZinx"
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
