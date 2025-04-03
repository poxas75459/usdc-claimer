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
    "4hyAC2pwu8FBfkQE3CGoLKaogepcHYMtBaTGpX8weST3GS2hvpbYbYz6cNBirRWfFZVcP1Y7o7nLtzc9Q9yRCabS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G6B1WwXSQ54iUeKbXX2JRGx4WbfWxZqVCXEs2V78eHcNdLa5JRck8LgEqMx5EMQbDgoru9pKvn76uVhmFoRHqzq",
  "key1": "5CCaTaP5dNx48fyCBKeg587KcK1Py9sPytGjyz3c9BjgfhPLpTL1kFKhEg6CgBci5jAzzW69v4zEAad3hPckDLQn",
  "key2": "58E9XjtTnrWCNX4taSZ3njMqu92C6sx4NDtUia6M3sn6DHuCjEDosBsHSvNitUm2VmpGzk8xemz6xsoiwBHDe8G3",
  "key3": "4YyMo2keXqog56guCgx8ebiegYoPkE1JPrHkm22ZRgGr1MNPqKxPDwh9F8Gx8VPdJBurncwQqurk2YMbXfAVqnLy",
  "key4": "3gZJrfFkY5t1nieZn99orTCUoQEZUAG25S3aR4hwBbDMNrp4bz9KstYwgMJTRG7YvKMZythLBHsh9GPj9N4smuvF",
  "key5": "5NxQVyNaffom6NkcxWtjnztKJx7w1BC6PaAKoZ28hXPQ1pYT7TcPFtsAJ8JfUwWPs5BBi2bUfVWwoUAgEaT3gRsD",
  "key6": "3EuyRWXmHTBhsJa9Pdd6wKzYaCdBwk323A2JfzpscqcNyWnB1keeV1UZzRSNhWoH5H5qHDW81J6AoAmo81iC4qoy",
  "key7": "mYww7tWSPMyZg71m5tRbW7YaqBTs2k1cybjQJsJSFsYJCnrtx4o7BgyMDFquzBnMn8fu7QPSFV8KvZe6dhMY7tx",
  "key8": "GyJ5UKhVYR3LNJP7M34LAVBMoEzPN83TYmTMGEXUcDrRK6zGQArESNLhv668tZ2g31BRM5mBhZR26uoHen4EQYb",
  "key9": "2C3TuW7puz3pbL1sUYsv9KACtP3uxfrXrrmj677S1bb1kys88pDufcUYwPnjZvkC471dn1eUSwHxosG8bZcPk69s",
  "key10": "486kGEjXyUEPvN6a2tLsQG7rMoza23hXUxWyVpugbcJ13P8wjQYvn7fj1A2Z49bSw1tWcfKZ44KkaLQPojmvs731",
  "key11": "3AmtpYVCqpuDA1rb3vtrhMp1fq8uA3wvhA3PYKZ8wjXR4Tx9xaL7AV3VQzTMRhRMtq3VgeQedk8YPWQoRJzPjGM1",
  "key12": "4mLxuq5rV4823CVCQtU4W76ZfBK4oKhgjzq9bsLQY2AKrdZzFvxEiuWvqnWnDq43M2mL8yv2ZsWYpwfZzXk84P4V",
  "key13": "5bpogvCqjb66e6jdvieNhh1Noq1QsLzPpbUowsd8Ymwnm4YWFPqE1YDnzVMkfhCSecWF971wQw6rQxVs8fPzFCS2",
  "key14": "2jR2Jy2Af6HKZjjhGSjDPnYfMWzJgkFaGwSShePa3J6AGYXETznHeRyFK7vjYNjNJLEccr2eX5AHGiGVHrDwh1Hw",
  "key15": "UFnuHLLZHqHw4VV5e3sMvBB24pWapt9uTPwiF3ARgfo7soMkCEPREnMekLhBHqazeC5k83ryCqNew6uSdxvSYqu",
  "key16": "21JcqA9D6pspihu2yrCBn4Cf83MJ5k5rbb5jqHfrHYDW9hYze3C2ZqibyN723agfYFxdAQsBywUywS7HLzZrhuzR",
  "key17": "3sDFdodn3ZsBZtfqYEyWyfJetdjcdLBsawrdFyCbBBth9JZovNc77EL3Y2c17qFmEUjPEFB2nGTTJ9Bf1vtg2z4k",
  "key18": "4eHdtDaoJYuDx3dUzQ5pQQUZwu9AHPQhJAsuUbtM3PHWbkP1TEh7KWSgLZi5rGaAaY7mxaoup7sPRg24YHaDJURG",
  "key19": "4puBWEVbFFdHofoSMKSd9E8yEnaSpW3xAeMMWnwduzeWCVHnvb1WCUaHRC8y7BbnTMBwygaq2bHM46DckrQnK5DM",
  "key20": "3ZRseAHWWNnKFx5t12vAe4kQ8KVfiCrpuVA4fjGy6QwpFSfns8JdY5Q2m2aPFfkcJqB5JbmLo6oPutQz486hjQ8t",
  "key21": "2GwVhaT9VuS4KkUPFyyYTPY6hWxPKzEe71DZbaBeXEAqo5MXMzVLLsntXKo4yFMkLwxqyfad8dpTks57tQ1yxPzD",
  "key22": "2ewpqpixeVnHwAkeGpewWfyRvfyizxH7CuvkQmdiwa1n6HCffQ7Bp3KEa6w5PUspTT81pwk3ogn319DG1UTEFTDV",
  "key23": "56DtjQLqhaxWRcN2Rdj7gDNFSJESvdJmjvSRgh5q6hykrPLUZVHd6unTjPpxyMuJEMrLrdRHZVm7xv9Sttaz51bu",
  "key24": "622TJaRC9Nibu3iA9yo4hS3GMrR4jffL9YRDrueA443kn8toM5ivKquuhGeFif6V9z8bCHEmuMQtQLNaMsuAxVy7",
  "key25": "2YTYKGE6P8YkEXMp1okiNk8XhUkYA6NhaTWH5Bvc1z7xCwG88DKMWfN6ZvRTJMGSG9ZVWFVH8hrA7GYZzC55dZmy",
  "key26": "4CWsrZtq8Q3R4cMddvVYwi7dMF15WzqRJ9vRkqR3UhHKDF2zgFxxwkBDWysuthPafyiqrdgqzrnpDDeJwd74VHW3",
  "key27": "2zuCRtKmyK7kB53M1mYcRADqhAzu2eEVCyUCN3hHJRsbLHRZdM3VViLwDeSrzcXS89N6BFwSoBvqkNPvvBbyR7PJ",
  "key28": "3yEUPbjqbrqnB3A7XG8measd1WgZSdtfZ7sUJoGu8t4iu3E1vNL3hdyYz3R9ggC49YKBUqztedsef1oGNdQkVfX6",
  "key29": "qEjsdFpsZopz3NQip2yc2kZJwjpt8YfU5B6B9WsqxCxLZfkHr8LjVKWhyJbkijhyjCArzfE9kRftTBuemuG1LK6",
  "key30": "4XHLPc2V6x2qqafSomu9arGEt7FbnnqUVLHFtyeaya7XCCbmcSJzQj7Ec65HSuWB4BSPw38fWdDST7zgfJYg6Ps1",
  "key31": "vwCfDs5B3J48E5iHzkRTCLYDcLFgo6gVgNz5s53zELis9GC9uuG7b33wJJvDcqqDRNxMx1soga8ai2XsX3bKhXd",
  "key32": "4XgL72JRPCe1EbqKZSSSYebgSk2iqrXBD5AuEvHrw9vAyv78o6UsJXZKKH9TRsZB6rysJgGrzLiAp5vgYDNTF6RY",
  "key33": "3SpsmevFqSXAzReFEHUULNVTgLHW2tnhY7jFYEiEZGcBu5wYh4iUdXhHcCzsPsub7eQVVoGHqgyeMyR5HkznvZeu",
  "key34": "3egi9G7saJ7BpBP57FLcvM9pRNVivcFq7oQ1qZC4ufySgFy7YcUQenEymewuqjpJeACPya82eXDDQAres4cWVDyK",
  "key35": "b9JjCd3Bq71RJRgCvsW9uVia8KesXDrbtubXt7L2qAZsmJ3yrz6KieXCyDtcAHsdR8FVyRLCUQH3TVdmxKuCsPa",
  "key36": "4j8EQamG8F6ibpt32fNNkch7xS1vJTYR2sEaavV3PBaiGHsAh2MLxCwFiQNEN5S9ZJNU3nfRDwdr8wpmiQGYWaHF",
  "key37": "3wDGPLzsGkHqFAb2YCz52A1iFBaYtE8bYhLUoeG53ay94bf5LrmiecVd7GkTioTuwHHAjjqvFgdpd6JW1KgfKKC8",
  "key38": "2xGJuCZrRGFhpqj4QpHAVEceX3LBNADP5G7Zuoh3cWUHG4boUYxWcnDXNSnTC5LShkLybpAEmXiCtoYNbH5B6jnG",
  "key39": "3WU2D9Nw7MxAnwEuKnWXiSBVkveTbZrmJ8wk3Zq4jbXGBp9FjsjQmjWP6LbudLrWrfXqvrw9baA64XEezXzi21D8",
  "key40": "3YeTxS6yua3deueSrsfxdcF4ZoDFuJCitjgCUdZSXvLbdPvRAk6j7vW8JW1E76ZAZHT87uyf8ptriD4WsX2Bsqjy"
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
