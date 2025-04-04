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
    "5CtxgbeRyVYQVDmRTUuhGLwMR6L6ca4KHr6VREeY4QoMvFwEBZr2SPLFAsH9kfwRSNhdo3MqMKsNNJcyDaM8nKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SDZ4N5WkvpK9k2cSDPYK3fwQLbEE9dDFh1rcfwJCcVzoMVSrweewpNKW8DKqLct6E5Xxju9A6dCWK6evXppVgv3",
  "key1": "3yLGAt7J6TF9Cp1GhS43eGKRdWMoYZ8QUQGWJRjrzP7o8inEvU8XUgSk8akDhaJqpG2TMqCophASaRJTy9yTgGku",
  "key2": "4TwYLqnnVQ51KhkiiYAheJMxNxcPdhfFNonxK3d2i84PmYpqx6pvWrmGv2B5ab8A8zFmbVmmy41qfs4NatQa3HSJ",
  "key3": "4YC2ZshY8SD69bGCmoH27voyX82qSUPXxZGZjawvf3xfzzVDYeSgtvZYs8vZzRxY5JeuxGyK5951m1SAzCRfhMor",
  "key4": "26eYrHge6vdjJZ7EdGXxKKWmYGQGNqvN1pkhfegbLyfNEuYTSGgi8m5KwUkVEQJgsgqsLuGyqtN97fXWrmTZsWoz",
  "key5": "5ZsVxr9YK8r32EqAeKTT2AnbEgKnwe9HN6NMEq5hVR5xeYHcFtzs5pUHdTqa12QGbAALjJ76FT47tBMiYJUD5aKR",
  "key6": "5FzwnMNDuMb2PpCBqxgbzF8kAL1AgNdmYnmPV1j5AE7ZAzXtwY8kyGBhAkwdtwaJGe7RVXWXzmkuobMTRBKrZiu1",
  "key7": "5VX4yF9DDfzakeBqnXAJMrbRW648apVxVRFjpRMoZnMRuu7odzq8uRHBVcQPsxfvb3k1mbX4EumJS6eDyhuW2Ekr",
  "key8": "6w6BCzonPxrvYD4Y9Lf1opHAw8S66CJJKzCEdjumDKzhjJrKG5hhqPtzf9WQCiNLk5QpqdPa2iAPtbHMK1kfaJP",
  "key9": "2jSxFj3WHeGzFVUP7ZE9ByETZRjHpddgYK5qaYwASkpKPbeX8KRYEeUJDd1b8ckWjTqzVRpAzBu2o1miCKWknoWm",
  "key10": "58htEzfrbnvMvZeDHcn3zyCHxyGqxj7J89N4EKWBf1ULxkBCrpAidYHaB17j6Ssf8MaM5HZvf9ysAqUw9su1PXoP",
  "key11": "2Kyb8n8y9Phe6fuJmSNuB5X8V3towaj4U2WSfdJYze8ShHzjHP9WEL1QXcTAkTJ2mBpUpB95guFHr7tj8uZ3av9s",
  "key12": "2jjgeKnUJTXz7GT2Ct6NcMKWNYFrxLTiDW7ZKrsVnjZi5zQFyCBJXwqshWk2k77GVUsTZMDWku9qTad1ceqphtPn",
  "key13": "29YUfjDT3whRTA6FCLthWYtu23eWYPt31jrr32i6b95GwfErNj1oQG4MwQZzdNfmpMa3hcPtzhUovcyGwaX5tZCZ",
  "key14": "2kYDsCrS9xsHVTthmMcAV47M1pm8HnrSfg6X7dtM88byhgxB2WpQ8F1r8cQSdKeActtqhXVJXNjTaPfEz54qSNKv",
  "key15": "4GdBQ8LKgZwcmcjAtHNWKu4n8wCwY3ykeNtkoqS994mNwVzVXQiFuRGfqrKjfqGiAU7uTkZVCRqidT5drRsBdPVF",
  "key16": "5ZRMhFmKBjS8mB9wRAU9DKKSVmqBYqVTemhXvmYjnHsoDuSN3YfDdxuUYN764TiCv27Ek3PQ6DUjSh1fSfFTAULH",
  "key17": "E2qUgbRLCfLomLu7kVeuY1Q7K3CYgHQS375R6aqRYfQtKphjVG3RxApc96ihK7vcMtjWqJ8zvTV5ZRrq7rEiSof",
  "key18": "53gAiP7PSYq7vzwLg9Xq4xUP77HixVVfFcoXTiWaDJAbGCiEuiAkjd6hCW7Zq2m5xzBUhKozhThj7eEoSPdCF9NP",
  "key19": "3vXZo9cNEJyST9pETWUHP5S3DqKhYPP4a7MRmYfb63c5LiwyHmBQPogyYn6tB7uNZCMt5s9CpLYMtYDQKYdgYchp",
  "key20": "rWCtyVGmNKpfwF9GCbAXBnbXrnUHNKN7FYyjBniQqtrjeHm8mPkb8D69Ap4VQvEcfmDDTcTPYdi3LwF44wsx4Nb",
  "key21": "4S3sF5DenQfjuw11CcZSyJCRHGg5pvJvVXaS3FdsrinnHJ8UUJwBFEYsaRUXcFa81EDpaLv4Hxb7g1dLkQ2nfySM",
  "key22": "5zo4cxPLqVqAZZTw3Nu1uhDca18a84T1U4crgnPz1mhJBXyHmeXBftkKJV7YwgmXqqBRCH6d2SG7sHs6LCy1ht3Z",
  "key23": "3qE7jWBJCRkMmhPGNY6C5rVXypbcrwswynXYxfXcRmmcmJNWz3p3rGCsPZUzurd2K2XFibd7hAvejeqJR7MjprEv",
  "key24": "4zioxMmUULuBog9kzBmMmKqw5dobFxt4s3a4XsztqbCcuYpRoiSVEnVwTcJ8uLcFeBLpw7Bt2ZJGaUT8YGLqnD6V",
  "key25": "YsD7tcxPor2rfTNfvSgALgx8hXApCmojHDWE27PVSEMAUMVE2jHnBGQKqqL6hm7P7ZjF3Efjb5eD3rAckStB8JH",
  "key26": "oKVUaHiheQq1V1BS3436kAhBAYrWi8r3zJZvhSLew4nX6d2MKcs2BwAvHnp8mAxWQnKFLDhAnKXHMNPWtgJC9vU",
  "key27": "YquNc2HXEDgd7NZ39fQugdUsvhmGzGnhQ9PCQrjC796Lm5bCGt1odhqUUnBjGftn5RsmNKfWHh2stdAzePypb7p",
  "key28": "55p3uGcPXsu8TrtbRV81ab1arQSTJZu6C2zKmfZCPaYKAHuRZ8tCps5HH3vDFnKuMQpYswYw8qXJzWKuAjKosSsY"
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
