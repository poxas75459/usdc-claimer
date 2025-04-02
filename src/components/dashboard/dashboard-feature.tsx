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
    "4SzkKNZhvoQewYQ7UoiPs2dVckcvMwPtLx3c8hqr9ogFACFyQLbo9h29naEVvy2ctgGbqMFL69VLuzaTd4bC57Xi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u6G9h7Con5N8v3FEZfcLCcufEAhEdQjKkQ9HkmuYV1PPhrxdvQNsJJ9JzPa3mVNzVsbmQDWztwHrsxeE9XWBfJ6",
  "key1": "4sVGZX3oEQ75DfW1vYSVEALzzas7XCKq5WBQfDoZHHWgDuWEgqsHGN6166y9tzg2wVAo4iecKBrgmjXJqHmvHM5F",
  "key2": "v8EH6tMqs4vqHTq3MUEVzSviBeTFxKCssSAoyQva3FEbpWWVB3BHbcFKnMURwy8We62LGv7Vx679Xvaq7hjn7pQ",
  "key3": "2FZ45UjtTGdpcB2E9Zpms9qnabUmFuucbqf8XFLfzEX2tX8JahRLCSm5McwtpUzebokokVjq3VoPiLiq5vPnPQ5E",
  "key4": "2jEhWAWoNJQos4FE1qZqdDsDTkiSEi4saRsjfWVHQDR1rbEtPegJmqCFX6hUswmXqqGzUa6rMAahQHNpZpAJduiW",
  "key5": "2Yk13xpAA95B9328MLQT2dkxAh5qEa1pM2d8dGysyLwfHzVfYwR9ag86mJMDuq7DvcQSzYmsdoehfjNvbv8ZdMqw",
  "key6": "5uf7xsz5MZ9DSueiPVWCKSNnGeENGXfRR8AeABzsLFYfmdb4F9EG65XzDH2SnUimUx6t9yxiaUY3KNPafHgys1ib",
  "key7": "4cGisniFDLRWA2zCHqahWuQ8SY4MAJcoVg9xbRzvEej54KgX9ETiyq4KAHrzybvBAQLuCgbUQYWvdVS6B7iFfzZH",
  "key8": "teUsWTE66s4EJWEiZ9wcyh5GYa7W6Wu6sVsh7Puh226R7mdaE29WvzA5BZcRQNuzu3WTuGnrXCcrg8QcqvT7nE3",
  "key9": "2KsBAHUssfiGaFYB36Dk9BFs1N6yPsmNhj8xaUWJZ9xQT9wzStAZhXGRMYmKNMRi8dG6xbRiQjHNGDJAW3ct4xBe",
  "key10": "2WxiyJj2jygxwdJzdRav9UVp8RXkpvSnifnu2Lks6Wi2tdBmvJYgDJBF4FFnzfm2sjNFNQTiMTdqQi2MCJhdEMHb",
  "key11": "2wTNSDY7JtqqXDkbWRPGRvDNwayANQp6T66hGykUe78kttcvum7kXx15RCkvxf9xDTk82ktxJX8zpJ7E39pvh4ZC",
  "key12": "2up96iJa6Jsd8E4xoXhbnYfXRrqJvkCYUkFf5Kaoc2kfQfau2UuuPFtj2icYqcaDuTicSwSL3ZECWCTkVwjLupTP",
  "key13": "2BB44E77H836PKmz7KaRXUX5bDiJiGREKMxhoscyq3u2cChbnVVJRPB4PGpX8C9WSJmisy6KLEshaiiNQxHxG8cj",
  "key14": "2dMGbCosMiT475UXYzTFPL7syba2nyQ3XzoRFVocfvYwhRaCWGrCTYDvpSAWsbZT9vqeqPJxrHdSUL1J17NmWAwa",
  "key15": "47fvFPkaREcMcvLKCJVzJoq92QVmZDRDDUdNx257mFY3AD5boPCvJ6f8V59WvbnxgTwpxdJ33hW6jAjh3DFm1j97",
  "key16": "JWg3W1XqqWt9McGAZwr7sYxf5CM7aCrswXtYpVjTkiMQ1vvejWwgzVo61GxvAKyWStwSiSkBvMbVdxB5D6rRJHX",
  "key17": "3pdGDV27TFAw6EmfqTgqKzruefEEZnKsKqWDhw2VVRoe8ZgHv2k3NbtVejVw1ahMGpxH9c8FWkQd1bSCatR5VvKE",
  "key18": "54sq4ryK8RZyUJGSh4oEcPLfG9D8JiR4VwKsz8m9pEUqvw4N2PpWWmAcSfvAdEWS9rnYP7Mv9LsFpXbCGWokXmZi",
  "key19": "3HYUUv84Y5RqXv5ccnuCAkBRE6Jg32vBc9tsL9XAJxjVWXABoN4qvPmTT9W4vjdEYNCYW99ZsL8uNDiYP14QDrVb",
  "key20": "53cwE1HzE2AsnvvAZmXiDRqPAFtWVnodzvH8oehV6jJu6vkavhngrEqaFJiAspNnXXNLoPcXtAezrAQJWYcgUuso",
  "key21": "3MGp88JFXc2kcEMiCakqTQ4haX7jQzWzot2xpMQviS8FoteHyd5qAvc2duQdMu8nZfrFS5MFpWv4QxKjyjJ6wZ5K",
  "key22": "2Z38dr8r3dd47dMybCB4mtSYq6dbChqMg97E9o4YttHh9V68ARnExRPppkYBvMJzi8aBTH5z5cV5UopBgXmwGzx7",
  "key23": "28U8qxEKkXEAPA9i5vZj9BRtTisbX1t9diU4iAT5qDT3EPBFhNW3q5Zm9UYg8MqAf4GvuFk65Q9DYYPRWienXgRb",
  "key24": "3ZCvtrNsEPjijRFtht8JictvdJuKp65caMNc2btAnjytSUscwJwbpj2pdgpAXiVBpUhh9YNM8XdrUDd2d4Y4pHHH",
  "key25": "7res5vnJpKDL2dKTEVYMtjrqgGys2jqw6Z6TA4udRxe1xKuRHtdwkEf6s3kKCoebB81zNRJsadSvUXtwt5xKuzG",
  "key26": "5m16jLTMicXzRutqJiBnEyRKpJ53mYFmaDeADQsyTHphYzpVnN3trFmzhajHkBuRg8pQxAUBedF2JAqyZ9zg7bAR",
  "key27": "2oHh9kUicu1p2CzVvU251m3PzayaNCPtB8prEuuWHFWtCn6shcQuAFuk1B8sSS48fM8uP5JgBe9cPuDyTnkafDGU",
  "key28": "2GtST44k6mZYpouCKq6qTkTGv8ZX2B95LxSzvADVA9aWE2EA56zSvrKk4nSDk4HZQNYRm2DW7fH41gxEbg9vixPP",
  "key29": "2ynjym5vqbozG3Ap99iPfEYeN5F6Ja797v68dhgVx2vtwrZpemwiaMLvMG91zo4hmd6gR9Hy7Xp2PLczMpEbzC7x",
  "key30": "4L4LLwTejJS728SFG32dvgVmmQAUPfwuxdWMHDeuuMu17Zd1YDCxxKexmkat66eKdXHVdMv3QVyFw9CRZbcDH5nD",
  "key31": "5KnyixFiBvW6RbCq1haK4TjDFNePaBLhvbWRmsejpkyEV68u2CmEBd5aAVgWcmZHGMPHiqk1hd39pk1896E84jw3",
  "key32": "62WpzcAeqsdTE9Cv62QiUQcNYweYmnnzRMXq8sMfzmoHzjQFjEethEz4Xk7t7uZazo274qXxUWGk4TCWQGWtunAN",
  "key33": "3sEtPL4FJSfcxJvnpp2LXgCJvBTiZrS61XKWZXRk7vEEBk2xAsz9t1mE25tvHqbGMJz7ngu2wLtL2uMthSKLnvTR",
  "key34": "5QT2qLDrG7pzgtidGdFZLtjFknkjqJ2HU2bGUrJxfYWCsmr1JG52gTxxqmFAZdqCBj4oZF99fs3jEz4wbuZ8784d",
  "key35": "2TQZMPuKMRPzyGXZDiQQ7PjCXb9qnuq4uT4AXAZbAzDS9zd8hZzNyonifF5Zfe2M5d19kwXjvcse6SBauxtPRCe8",
  "key36": "4vME7dtQFWxCTrjXkifowzpfnjgXL4uvuDRMhR45bDbndd5gkcDmFm8SbR6f3bCEhKVQPAKqgBgpWAKUhnZiTWJW",
  "key37": "2mVsQN3FELWUeqa84nGbnuzDVAoGEQKTqv5oUuZgPMPdvAUoXuTUxrgycWHh1pEBSCZsZWkkicVHmdmgEtYG56tv",
  "key38": "JMjbhx3zo7ukJ2ziucEfn8RVnaVwyyjRJeNfALEYGDGvCGucnHz4mvPbhNvicR137fKRpsBF5uvSbiu3aRUpeY3"
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
