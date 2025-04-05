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
    "5Ao8weXxnSvsjja3YRSsWUYgBNeyUsZBfv9ovrjAzUMHKLNG7CjgFav2gtfkxzD1wBTCf4YprqKKirGmsU2j8qiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2czAdmziwEPeUc279zJYbGG4uLQEAkuLwmjDQGbUUy1hD9r7y4U5Pk9NoJXDWTSrddkXnbdXmKNXPTytvGDdnc1f",
  "key1": "46PcFUwr4KFNjbFGEZWHwvcJWaUbFBdBqi2dzYL9i6j7VzavFZxBi6RXunCwqkPkXJxhFiw3qTribwC5pQjrvgow",
  "key2": "659w4fF7DhvszSpecSFEMH6FKMHWn4SMPopBVwZXuarkeQbWLQbtWF4PPJynxcR1dis2V5HpCdrDhbnyPGuqLxtw",
  "key3": "1vySHbHes6qaBdZzjn3SCTKjwb385Trt5PNui87yccgTzKPYGqBqMHFyBuCZVPwGQewJ99VkwzBogTpXyAsdpga",
  "key4": "3eNd12kCKxd4zWWcD2ohBTVh1C1WomEFPt1weKoJ1bPyhtbfCqEHzfT1Lw1eJYVpQX7Lc8VaM2Mk8GduqjChtDJz",
  "key5": "3tSxyVXqzCBqX4bVt1NAERCnuw3MdqTLZAybpsKxYKwQUcbfAFBisT3Hgekwu3aERGtHySca9LrddZ6S8HJLt3pr",
  "key6": "RaejM9Qp6in4zuUMnm6mJHVzEbFYVShtYcACn3k8uGFTFGnWiXotb5FA7qG4kKGWsHNoiYFm6ScWas5WzxMey2b",
  "key7": "46UhTXsQD82gNaqDTQWadrFwGbY3JUn42sEmVhMZyzKqX8FUcAh8pQtzQyqHMQkUUMBxuPyz6GBU6FLGyZwg4J2p",
  "key8": "WM2hKP3G3diWr2mgEdGBqeuERQ5b9whub8Zi2VpEq9Boh7yZ4uKriYGNk215C8PyfwJU65TjDfRM3TH7pABWkrB",
  "key9": "3ovgSBDGcKaW431cqzZUPZyqEV39xqzWFZ14Lsygc3sypK5abUumF3XqvKZmXmHMn3SpvPaan7dhrk87bdd2yW1v",
  "key10": "3H2Z1nuJ9Y1x4ZS9rsaudeDMENeK2NJU3icVDf8KG8t3Gi3Y6Dx611YYP9xfT8NASieRzgU3GRLnuUQcrDKX9xU1",
  "key11": "5TwtZ6rKpdiWYeQodMGU1nxTp7fjVoLRJkPCAR7Qp6Vy3aQVdybtEJz2jHSEU5RbGG9ULLa45JewoV2vm6VfFiQP",
  "key12": "2WrkT654cyzxY8GdinLLyiaNuAFWzEasi7nB6s3RW5Ruu1nSkXhz4waRPnyUMXEAdqbuVMfi1VKu9qwGoFQc7oR8",
  "key13": "31Qd8tEV8F3EhV3fKQuexeMPeB611c2dgxBbsujZVXw6uVTTKhGNvpqGENzu6xHQebSkoJ7r6rbWJi6LTNuSASNF",
  "key14": "5C8pk4rET1Hrv24KE9fy9sihZMYb3VW5ZymkRRjXGyrdyw3GKaFpdyvKf599e75dFcZvJDj7CVfkanNKZvZtEWHV",
  "key15": "4VFEDnUsCjHdkhqo9dDz9ZkptEhBi5CQbfgF8xNXwfPk3vdr6jw5HC4X6zqQBVmk6FA7JLNCHg682NJfA8AYytVz",
  "key16": "vLHpkExK5AZ7Bj6Zigkb6miwgnPanFJFwJ5TagzqKmZs6uhzQULHhxw8bsLV6piXrzZaCRWhEUXeCAxSiFcB4Kn",
  "key17": "4kCdEERtXCZNbjmertLqBh1VanGpSriLJa3GZrgJnRhWjmN48Qk8mSNLUxSNNkmFTfvtoJrrs8D1QhjLqR9j1CKU",
  "key18": "31t46xDq2aXpfxtvLRq63bGSemyzsqnX6hbnAQKxHdPSSE1j4oFApn9PqXRKqGhQeyW9ShriuiugX51SmTG7UPfd",
  "key19": "2FsemV6T1Was6H1gyGBqcuz8mcZqnNnXLw2yPEcpvYQqhuCnuMqfNrUSKVL19fBF2JLewFjGPaLvVRERAXxmFQPN",
  "key20": "BKX8BfE7QXmaCBbLpsLRuGREQJ31txab5cKeZWPcD3UwuBPD2R5T8bRefogkRxH4Y82Xt6f1TXgiyD7vWd6rCub",
  "key21": "2eet2xApS9jtsZgMBBcQpW6pwedtbqpWHmJEjV79UDhuHp3twE6Kp35Y2UshSMinPQtvtN1knJ4adxMLZzDYSXgJ",
  "key22": "2ZA5iZvHQsFuUVUfyiQgudQg4LU65TPnFipqjzo4Mp19gxJktFrhZq4sXqMi9p4PHaHe3W6XrGpT3tmHqrqEYBFu",
  "key23": "5zGAJPtUbEsvcdipRm3F2z7HwX2PPDpVnaeeVBWUXBQRJsdB19xaWaUYgBFGzr4dXQk2PNjMWfoasoty2SA175du",
  "key24": "62PNnyUCwumX15Uv2HHsqovLtJ69giSZ1iqVRjMHqxXrqoWLpkJD2BYZuEqsovwXFXpM1J5KdJj2bPmGanqzfG33",
  "key25": "3FHLWGnBtLbpzHNzDUEbQHAJLvwCE5WakKqbeTNwmXxKVzxwqDvPq3x5nSqkFiuimjw3MpvHZ6HFtRB6KZ8MzsaC",
  "key26": "417z26hisQcjCUDmJEQDeNa7M3FK4yWp6RxYRETPXcUj8PrZnJHKUfncnJ5L6j3ciVHUiqoMQYmuRrLprMkkrTKi",
  "key27": "zuyy7iPi3FwzZ1mG35CPvYcPRLXRzxp6SVVUz1nVwH78Epm3zYJUNDJ9geBKioV9xCiX8E2obBiiBn2p8ANgNPK",
  "key28": "2ZyeqchT2Qou4LrPSayDzeSJVgKjwVmn9zG3R7bwSwoNjNgSFEZgbnGe3PJfpGZNDwJrdGh6Jm1qBtRDa533XFsb",
  "key29": "kJu1fvLGJwUaGDVnThvWk5ngH4WhmJzZK1Ph1wWSZvLmieoio2UNFVvK6YbSfj3gdaPLe9jM3tuRCAvC88ENofq",
  "key30": "4EVztr5UGTmfrAgUdmQqxnVpHj3cmnGMfHEZ12TpBncMxoWqHTNG4noUTbGeUt8XezzBjXYAxQrWouifuqcWh5PB",
  "key31": "3BYp2bh8y4veDbfyaoGS6NAtzQ1g4b5Lxi7dMjmYwAg3TJuPsnChMWkgt2XAHX7iGRdyA1EaLu5VS1Ynv8oda371",
  "key32": "5mvx2sNW9CEyxzufRcwrrEWhA1jFcAhs6NVkWFTrUEZCZD3jL89kpKg6wDUqnmLLe7RRHgs7GoRdRwozfGh7Gkfw",
  "key33": "2LxXtzSfivZypCoKyZ9AvP8SGojXBznQEQ2fJXakuAx6LfViqgjXNe9LehdB9ouzNxpCZUALvCUqMu7cp3pJqnQ1",
  "key34": "2Q3525f1fLPmB4YKUTtP792ZBfQrnhbhFMroJwfNcndz4BcaqqsM2sZZeBhiJqvfwSpzZVhAJQMCrSvktwocAyXT",
  "key35": "EwnSLtyNSyxAZJ8r6NfLz9whJzxWvKPzeSi9Lxb9N2Ef6aEKtHL4WsJ2m6jxQ15HvyH1XAvuERGoji1hm491R3U"
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
