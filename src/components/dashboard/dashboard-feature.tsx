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
    "pJXEbwejFzC7rct26RZZiGUJwhN3V9k9PtVnZ3dhYfaUPBWLZSNAhYWi5WxqVh8KcmdfCrASRKKrV8db2XnxC7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eB6gWNe1SpfDAXM2anjZ2Rb1CatNyBxoNJv7imPXGMtpHg4QA6Pgm9CMM2VtCePWPpcVDQn6FfXoLdbeL9E3DNv",
  "key1": "2YnAHAniJh5AifbjiYCZ8FCuPDFAhynrKE7e1G2WP6rpCu2LficFrwGdf1yuFHYydmREQwWZLti4twHmt3BgiXW3",
  "key2": "2VpXRhTUEThctqo7oY1vVFkJTTneWUDbp8nyupsx24v75SpkFmNqCc34Jmc5eG72buSEEZojMftDdY53g51GC4SD",
  "key3": "3rFwvQ5ZAeEp3kuV2TvhwxHNMQ1r9AFo8rZS3WoS3nxiWPemgKDAgiKLpJyoDBhrFhqCcLNLwnSrFugPuBctZYUU",
  "key4": "5xBBbz1wZSdjYh4m9DFy8mNta6ncytbRJiSDyxSvEGkkWsGno18TiGjhtH7nxJ5fSghR1paxZ6PWE5sgtathF797",
  "key5": "5opkUTt375fqE5picvxjS8QZ9h1s7TZ1vZ9ydaVW28JfX2sFXu86eEfxXrNz1pKtQ6XShBkkCscX8tPJtnjJ5zvg",
  "key6": "QX6KmwLPw7B72iECKT68EGMfNjR8UAawKbds4mv7zWsZWPnq1xzbbGw2A63hgbxEUDeHxjHBFkYZopa8xMapzaS",
  "key7": "2eAm1fDXds2DAr5v5jysPXznUJMwaR1yVD6imSKVY9CyDXx5H1QMTL3MpSVE5h24EUNMb6ZfMsoCrhXnoaWGbo83",
  "key8": "43oA9hRH8evfqbEM8TAmgRdYKtpYjeq4TSCmB5x1LynGHbDF5WMAeKxNCGZBsRt2Vzd2XMeJXSiiUFzQekDHQf2R",
  "key9": "49d8a8KnBbpi2FBy6DXFaZA7W7vxPBTpeof55Ke5mWhQNwM3bgYKS5DDQZa6jtK6ocZbnxpBMLdJNGbgFcvcZ63a",
  "key10": "3tPDrkNMxgMngueNDgQBC3PTxK8iniUbTLVsru3c2jCZbTogpWSTJK8jREKNDGikX4K5sc1LBBx3McmpxFNiwQup",
  "key11": "3ntGgQ3TgDkor4sjbfzJEJmXhiSjZWFMeP3CrLPPhvWd95TajNaFGPdmCxQdwDYvoCxu46QPfVoginGQpvZfpgTz",
  "key12": "2SNvtYpAC6CPke8RGaj8WTPtMPLt2LhwAXEDV92zAY2cZNb2Km5qTX47p9nbanEC7GM9ZJr4t2Smi6fxvzRyjENv",
  "key13": "4TQB1obMoYyH7TByhs3t1GWDpruqYYyB986BV7jUr4AQS6BkVRrSoyEivTG5Jmd3Gje5PKDcQ2owuToGgMSmJKSj",
  "key14": "4yTxNsia6Dyw3VaygkNSHAvAxE7tR3jtk8ti1nEZFNw5LUUYAsYMpWNXQdqqTDmYZW5KPVfMRB8B4CQi6L2uhZhj",
  "key15": "3LsRjyeirsSRfeDrJd3nLuGMdzdVYdhumaTgHyucj35KC4pB7YVmAVUcFsbghxEUBXoLYYTqCBSfXrqkqe9beRwJ",
  "key16": "wJneQ1ozAdVtsKXnPwrG7QzKDkppBzG2tVdkoJk7x75vd32RQxony25HVoh6Yy8ndpqAnhemr1UE157TWvKfbMe",
  "key17": "Wvo4NbNv6od3NTiz3eMoEeNd8d8izfK6J2yau6q2mTADvWM1P5gLiCzXDFQMGVZVawDXP2iXyWe8FfLbXz7UsZZ",
  "key18": "5U6FNoZXdN7B1EYCSGs4CzLQNkEvwHHDXNJsF2Tx4cnUJqwwYs62UAs4JfDaGLAYKT88V9v2LmMKQj7deRwcnHYn",
  "key19": "HDE3aKjm7bjkB8fk74LvzbJPUpUNeGuT5jnbwsVLTjcxckDETfAF9SiTa61fbxJTL9VcoePwuJ3ZcjX6AJtYypa",
  "key20": "pUBwTXgFPzKWV9qWaa2uNd9gcWuFzPphwoH2LojCdi7P3bXMzV566FXuvwWjGmuCSz21qxt8v2d44LCpGCepEfq",
  "key21": "2KfZkPvmH5QF9v3NP7hp4s6bLH2mQfqQ5mNKbkXmxiLeGGY1suYXRttB9qves56h8HHTCr7opAuWDVSdM5wJpm3j",
  "key22": "2tFyzcFmdRQu6Swa4AMQX9WsJVNGrJKtHNqwJyf7dZW3cSCKfaZJwJvkcsS4w3R5MLSQ9MB6a8wGUuaAkASXe5Ww",
  "key23": "677gSo3hhKn2vjV4NZXAEcccXKC6eui7mpf6oHimzHgFV8jQ924PJgeJyQs5PJRiaCdYXBJHhkbfycQ6zbWMgEPm",
  "key24": "5pgnJYf111hGNeMiaJjTgk3NTe88fHJudSKSRTjB6F48FH9sUxieZCzTxTn7fThfdBticEg77eW9ZUydDCVbngCu",
  "key25": "3edmrQ76Ahhk2c3LyUKfw4EB6y21nCmZrB2bNUPoZJXck1kruNqk65ncRGu5QRscEXSrGaKH8icU28VTVB2oSgkS",
  "key26": "1YKpRA4S7ceWZvJH1WY1CQC7NYE9rEKuHNiaWb9kfaxsTYWfjKmYKaJcGvurYJs5A1NEdhX3YEm7xCKL9ozwXos",
  "key27": "5Hnba5ymVgnniWZ2TcFd47WywBWvsBhxQds4yWF6xxWeLsKsJPFWhCU6eYyDDyubDc4fBY7hJqnyvE8QDuWTBQDf",
  "key28": "348X8FyPitoGzREowdaVovjpWitz3HEdL1F4HzZQu2GM1z67DYqrxXMbe4Bxn7qWNbTMMTnnHfkdEisqggRcxVEw",
  "key29": "3o6k4EEKfduuxGvUZmUY4qM49mjzAd1n4CWPFzXqMRbEo7NFLBpuV3peerhjSRuRePmmjHLNdsRi3FnAUfUEdfP9",
  "key30": "4FS71MECbKsu96frsy82hQKPfD77ZeY7VzS99dAYFnKtHqq7UuUCDZm1s8JcjrPHQUdkT6odieJyksWc57JVVoKM",
  "key31": "5BUgzgLfbQD4oWfCRRLoZx5pShqYfKf51BFDdzEzJ593iXxyMxh424PfxAWtxyLf7s2hAWdBWLxW4UjJ9fCke8fw",
  "key32": "4M6d4iNqNkd8ceyo9Srxtw4EEvYUSGEoSnwNoy7izcPsq3f2kLNkRKn3sjsnkB7Ut8NrBmiprxcYeT4e1rbKyFN",
  "key33": "2ugBWKDi6bjEVXHgLFpH61vFe8xEBijMHm1QXm1A2tc33BAQJ4Sv3ejsS3kAsycYfvTppJK8RBW8mwqq9SwFYDB",
  "key34": "5dw6X93twECDEyjoRVmv9KR7KFcYr5i3rQks91hJeTc6FczTKnvWXpY5F2spqUwbV5cYaXfC9Qj1QLbEUCf3JWXj",
  "key35": "2f7ERNKyM17icgc2g3y5ApWncKHo7CWzr6r92PmyR6QNJ1V6UqnPfYkeSGWbXJadQyTfwagHUEzv5RzML5cW9c58",
  "key36": "53iaaEXG1hpbHErwJU1ABXhLAuTp7ZhFZKWPec1sWzpGfPWw67sMeFnPpi3XR8DpuJwx7izVuN5iTTDMFyRqAbJh",
  "key37": "4Uap8LJkkjNKg4n5szPeJ2kj2xXxHHARL6syB8ktPEtsQ8dTqgPdFSvjA9GnUKcr618iYN39jTp6qYFuvodukk3f"
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
