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
    "5aHSUBQfheyw9Vr3PZXyCUxb29hJ1YYAx4U5iWbRyPCJVht6AJojDgz9NVCL9B7ARvbQHMHVMhQvfg93vVGCi7ti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YKk4JiwqcouD1AWGvL6aC8Yh7BNWL6neJxyBGme5TDjT2yrnsJuaP3wYEGpfpxviWaNmiaDYcngaR1zEz6va23D",
  "key1": "gEq13o2xumPkAC5BHdCRfEY45HbdFyWmXVTXA6e6zBBDoCQ4zpe8GTFQBTKTEDpUTP8ic7Vhtx7S7MTozo3pdSU",
  "key2": "4yEimToohSnp6VhbgbZZkxb5d5XdGw625ez7cUUEv3mM8adGP7aqmVAzrQr7gMXDifAf3fGAWtcEmHFK9M8KGNcA",
  "key3": "58PWisCy85VG2cU9HYpW5AtFNGK98EMN5E9efL9Wodz1PnHdEihomV6Yx7LQQpFHnMB49Sg3FdnY7zG67a7xDoD8",
  "key4": "4d1ncgwKRE7uRt6ZQX9au1BUo6hbgabJWpgLTnK5f8mCoJmUfdRXD7r3UmZA4aF5BwjgsyzrvqtLdgdpphoiKcsQ",
  "key5": "1X2goQ624Z84xCtYWHCntts2QtTiKYGNRdStPMkmvaMDs6F3iLBDf6168iRp2dzeW6U9gL1pnHBauxzSNAiCJ9a",
  "key6": "41Vb9oKMgBKERpKCQwMktSF1pAC6knKUaYZjth9EHENtaETosyEvs3DkUuer5JtDhNkpbNtnZhQSJweBJQbjRSdc",
  "key7": "XbxnZ7upE73pHwGC32NhHizfahvoGJD5WWw1fePDfKaPBUyWF9uw2UtfENhrEouHv59fHE847rxjsHwDwKTmF1S",
  "key8": "JoEcR3N7akeh5tM3hTbSTU89TW83aP21jzQJ8KfHBKyq5tT9QdiWrJGo3ZcAqL1N5CufKyBiCT1ZcN7peoDttPq",
  "key9": "4s489UmQ9Nd7jXbvZq7gpLR3gH72JKjsqPTKWaisLv5pTns283em5bqYxLq8U4A6d4QPVBH1hCbEM2fdBFivXuVP",
  "key10": "2azT3AGeuwcH3JAUBt3utqRnbi1cKiwmAZZhK7hw9xW7X7sU4w1VXa6nbfcM17XNxp8sPLjxzqmMWpPp2vxcnk8Y",
  "key11": "5WDYJKrnuNwiYLfbrVjABfn5kvHfVd1ULmEUXEi9BDSp5MNcUgDZ5oa427akzj5vWoDdABtqb2ub3VKvrJ9VN4Le",
  "key12": "4erxbJLY23ZCap6E9WUoC94QTNDUMdsdpqz4YVL2x8cCev8bCdjokNFW4ZG87FuwTKJmu8RVEQ4pmbi37o5hs8WY",
  "key13": "2cVZ8F9maiHVtFkCqXg2fFWkM7tZtaBpUPahqYHqa29EYKc51LEukYcDDiahZfZQnTacBWPXLN3A8NCFoYqoaLKH",
  "key14": "k4uByrfwYWKUKge8JNwu8MeiQ9sHi626Cqtn5ABfm8YkKxdztnTQRxCEhpAa9m4MfKqCtBbUh3kW7JQ1EJRhe9f",
  "key15": "4HF3TNZ6eY6oEPNuChYstukRQyd8p4U6W49y9vqq9nyCeCxjmHi6Uwv9t2rrQD4q1vmfHFkhafDRQ6ixCj8mGLAu",
  "key16": "RqiUH3aL11Lug8mLDBq2vqAs5bwHPdUToTyP8Hyp4sXGynAC26MXowAHWyKMu5vPf9noQY9Xxh4ErkWdqeceuoJ",
  "key17": "3XbsLW7hurSo5GYTa5bKxdbdLiJmUf1bJKRuQe7fmbKTFtxhKk2MVCdBhiy9hxwwd3MqXnDZSAUezbsSvNoHLs8d",
  "key18": "3WvYSh7pVT8kDoGHHvwATzFqjKMXC46HC9MRyREbpFo7Y15GpdJfmnesiGYA8xYaewRT9xH97w2T1nPYR7CyCCFm",
  "key19": "17WypWgjqJEmmi46pcjvy19y1xKuFCbffiPcXRA2ce7nAYbfKqHVhMXUjjgjCjZv77y64AGUff7DuGSALJey6xK",
  "key20": "5Muh18aXyUsMB93yaFZh4GcbwacPzkwcEoMTrPpQtmewHQwBiZJMsZUx3QLR2Wyk18z29qe5L9Vcu9HvDKA5q7SW",
  "key21": "1U6wj1FLZFkAmXGUjbST2hnScqUYztNAYoNc8wzgLqvpyUDm4EsVENzpBRHLeMHmPGdV5d3pkShp8QxMeoyMqHV",
  "key22": "3vi9KFbRRP8UhkqME6eH1anKQV3XSX2TYiaMtQKbDJwfmNjzx1TTxmSw5x4mTt3tFSbA9egwQzALxHMYo3BQQTLz",
  "key23": "5t9V2B2Ttn3gRiUvt1tUm7Yw7uGfPdPJ4pVsCDVFqnTY1adPnYLMxWmCpYL4xGrH8BcDKXeohLsUAgVJpj2jDpGj",
  "key24": "3X4RbCNoKmVthvRpvKnQYXdxkdTxsuU42JLWGeZvVUHgEgzfNKA3ZJZBwjczzUNREmQf4z6VqS2Pv9QfDxCxXEyz",
  "key25": "5wypXXvbiTxJAkzF9eJnmdwmkiRdaanrZ5YGfa4oStYXxrZFfnZWvD49SMTXA5Ti8ikJzycFKMj8LCi9DC4KQmSZ",
  "key26": "sso6VyhHjZ4Abw8W9SaKiQtSz8uvra1Ki3KUswNvkYeeBiE7v8qmRv8c4d5HLXnFGCToGtuXNCnrwHttg4AMx84",
  "key27": "4KycHeQQCqmVr6wxRiw67aQhxpuJ2EpbUKiEUQnTLJ6zQyridczwoAFKWKBovgjxosDKxxm3bez8EESYwQFt4c3d",
  "key28": "4naw7E3LKKGfeCuLEraWUFPQbG9gYjF43FyRi7Zfxg5kWsYW6E911N3CPs5DZJrasAppYjSFdM5EiNJwAGsbQqUW",
  "key29": "5PjjPNbbQoDFx9RxDoHiUNW7mAxrKv7KsB5gzZ4xyQWiYdeMQtmttf8Cwhps8XjSsjLrT5BeHRJC3KABxbKfxyEs",
  "key30": "6SbvqDhLULmmeBbYBcrowr2NoDBnPLBUPbqvqTGzqfU7BLeDeCvLqviq2BxoEa1Y2aLiwttgQ1fMR9G1trMdx5W",
  "key31": "4zAKy4NzbzdRXHWebuhbg8qBpFzV9xwiPjebkDjutGvpbTaMTztvZpg7RAHJ35bZ85zcrGP2n6ZerNHK2hCYCDaR",
  "key32": "44BazjjNnUjynnQQKBfadkSThx8HoebA7XAKhM7LYRDMoxw8wt8vt5dnkg132sdbSTEcz9drvGqfZkeNk45BghWn",
  "key33": "QVamNKRdVU195Kcm3c8BVefE9WMU8PUb2MNth9AA1tutLiEbr3nJwn9eFErpvLRFUc4MruWA2f2TzTNFdNfmYDW",
  "key34": "oWMFpsrqK1oyDmzUv99hsFxe4jX55ukgcnBNx4pCvjCJfzpzSDYeHLg2doDdp4PMZ6fbzb66JK6eEGQvN9mqpLC",
  "key35": "mifNPfk1JD9ujYiCdENQRLC815YCpSqKbj1XvfRwRvpqEYLkHUiAkQPeVswvoqzewofuzJnd8sM72L746fmy1T4",
  "key36": "2v36ajfjBJBybxpwociwsTMdRquvbibCYogGzMXM3HezRE15ykivsHX1rQDu2kcSxCdAX9n6fL4mZqFKa529bBwo",
  "key37": "4qp1ur5QWFkovvjkU8KquE3xj5FDhPaEvdbJVv1o153L6M8RYQK3oYpSUFVXMrKiChuJ8FiavwUivwScsLHU3F7W",
  "key38": "2LSnSqFAzW5LTWSq1ZDNUhG2rWwWCZMzxFpXHJbRz7PVPnXJtErhUpRg6Sn2ceXpbBy83DVyfga1ZspKUJPUkVge",
  "key39": "2Snpr8yUU7PcAZS4KBkTmLjDz5KtuvzjDJstpTWM4md7JvKo3tWp11QjmVy4pJ6HfyDNbEgGzZ9oWmEtAYJX43Th",
  "key40": "33caTNJ1cNUmRjLSp4UvxR4FNwr29DjwmQsogz7eeqGv6veoxzJJdGTUYCttmBcrmeU3Ku3aL2MvypquPTQmFk3S",
  "key41": "38Y4FPuU9442oSTVVz5ci1A2RiJNS7sob8UpTAMHM4gwMCc3NDKmqp3ZsHxTh2Rrx7dc83suvUxsvd6suW5hBH6b",
  "key42": "562uJbWC66p3Z7DYNwHcVzkdrYiLkt7VHPKo6SNo8qjAthr2sv95HpzfTEXbEsGQ93Dy78RQgdW1Xn4VbsCb2doE",
  "key43": "2GKpho3yzp8sC5yWd3mQHe7PsnbSu3g2Cx7YU1A4RyLoGAFNhAmqpJK1UFYYewe59R8pjfZoBjvhe3XgB1EW8tod",
  "key44": "4QHxECKzimSHEiqR8pPe6kFDm9EGKfqGKMQGCQRmvhrgRr7eFe9F95wTD7NTa5aDqHQFoCWaruQynG6d8bz2VQWD"
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
