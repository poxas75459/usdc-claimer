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
    "2GUSnkfH7cf4P2QXCwrkkcNSgnQXgayki9eWvAXN1UtZMx2JjSW1TqWcmW9D7MiD5v2r6Q4r47EyEdaX64Ug7Q7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r9fPf3N24UPyQnNnJUzJoCxf9yyp3kABbceAnyTmbf9SEowQDXabQzF2GtgLn9Br9LvMqcHx3jnw4JctrP6U5Fm",
  "key1": "3nTHT41MYy7XifoagFnFukqomBhhJHYAp9zv6kVpMX7FxJ7RyTSq4vwFbgyvGAo1PrtA6TB1XS3QQKEjzC5a99U7",
  "key2": "24qEVbazgXWFjfV9GCuBQfJUqcJELnpqJdLYLt72A1LKike3dUmfys2tX3Udf49npZ8iw5DpQiHYx2QXGpuuiKQw",
  "key3": "2Hz8WuzUUWRLupRqapjpUcVRJ96RziC7uv2L7F2t2UeV3M5vowB6KY8AAV6EH32LJ66tCDVuuxZSGp8DpzS9PAce",
  "key4": "3mT3PjEvmgDegQ4fnhUHhJHmsFQJVaNfDz4bAez1phh22kZruEm7anz47UpXkbJ29svSnYxGXChG4xnUtmcUeZFK",
  "key5": "23VJA7M9ZCEpLpfVdHJJuw7qoTPJd9pULAybhh2drEYP2QBQUufAF5sHDCCQaj9jJynjkWFWJNjdwE6nhnSFbdJq",
  "key6": "5rQM58zd47R5UwyGyKXSBJRTKA414GoT9vRfeY84wuJV37dwsAmNm59PhGhDjD54ireTM78NV7BjKmubXNonGKkY",
  "key7": "5xGF51oqXgszu9s9xFsqoh3iFdXZGuFjxMyynYugxYNvxquMnNSZ1TwVb8W4VMcMy36JRh4Q4WWJZT681G8BZpnu",
  "key8": "3RHLWCtYAfowgiY5VUKH9xtVHAWQQgfKUVhYAzqa8poE2DypqX9D1NJrJSbF2awLUkpmpNEv4QetJd7idFcibHVd",
  "key9": "VsATaireo5sDTqJ8aHpXu2Pb8t4f53ShEsRNBAcUk4wTwJp8rZgSvaxq88V3Bz4P76NmcLbHvPweBzzf7ZFHqRs",
  "key10": "3Dzs7qz5i6ZKExcZqP4H6gmv8abJjSaSG1BgYss9gbeZQ6vmBuwBCGfByuwzrnMDZqT52gxjMmX3KxSowZ2xgr6q",
  "key11": "3j4xxTmt3bhwEQ6QqgSU77yjHnHqq7H7yz5XCR18zx6Fbbs7DxQwcLVgf4EcrcQKPpvvZEfzEJF7jwq2ugsUCsas",
  "key12": "3DLfW8xkzzPV92eJoT8JDrcH2rot49fMfTkBvvkkv7ykU4igNtCVdymXrFSPRdmk9rWh4YuZDebFor6vvbXADasZ",
  "key13": "LgHvhih3kWwKdUeYYEXzDqS3SDJ7jreYJTH7rikJS7tFpnb53zqWunPEiMBqSVBc5qCypRT8UHN1RY2nxbFxE2H",
  "key14": "2KvqzeYXwD27RGXwUg5RvKXPPExz5rDtTgNWg8hoMMBZKb4eC7t9d7Ujjt5QzGsek55LmqRZRg17dGFFFxMSjUYP",
  "key15": "5gJyTwEk4f6ehXX5xyRAayrtVgF6gMUvRhcFqkVTb2ZdCnEy1sAY3EkBKKqhNVqZbwiwS5DVC12Dcz4DsXGXMuV5",
  "key16": "33re4FwNtjZa76VoA8vhSop83VYwpJsNiQPNuyuwps5onCzQVPfgfd8BpwyFLRvQfUXR4nfNFVwcf6SoW6Ft5she",
  "key17": "3U9iKqhgCgUfidxj2a9exzuhtpEPfjHNFSR38CfpWu624VgBm3tDKj1vQ411GgSTHDwW9fcPb1tzxCwgxNBvtAcu",
  "key18": "2KkhMC6yZfF4HKfJcjtfYkBKXUVrrN9vPBq7RxNJoBSUP7HiFPvRsLtSS5pKg5wLDmp92ctbPWUEmiVaPLYmRWfW",
  "key19": "5nz8bBEoWqwp3vLnjL8hwUabjE85KBJn8ywziBZBDZ6e5fvo7AeJt8WJdKAvy7oHSowncSPt8QurbPw9LAM14QK7",
  "key20": "51xb8mAV1jwFrboJZ2GnfCssXd6bRZo9HZ1vDKPJCrLLp9V3Q3pueNDZZbzn1qc4AQVpCZ76Mhvt46yVrm7sXpPA",
  "key21": "4FsVmbdicXAViNs2xiKf4HNSEdJFGLvSotFx8gB2xZ71s7o22ud6YT994d9pFvUuD5wvEv4535Wm6qXfL54S5AN7",
  "key22": "247ntDSqG6nfpqRNQnWCyViPGny7qYQPktnbEY4TeQp2AUnFFR7Qm1CrSTTJZTfFYxUn1mMJmsLRt1tfFfMsWQue",
  "key23": "2GskaZooVF4WTKpxKGKe2mkDDUKdhV4kifYwtZf1yGoXgYdgcqe6hTW3KDR5zRmsYQQgBk3u7HzBahYA12f2W3hU",
  "key24": "4UzSBQJqtN4EUGVDKq8noLhHecHk1CSA9BwKKdiw2VggmFvvgzAYTdmqbpqXWKyZhH1rn9AnYcbeeeqAQacjFzTp",
  "key25": "64Fk8j2nYJSyFuqBYMxYCyaLq6M5cBpZb5CEv4BTy9pMryLyFikFf7GkaLqYFrYW7xMvdHbCKpf6ubHHiPL6sypB",
  "key26": "pU45uKZ4SL6vursT2XJHxgY89RWb32RjcT5D3qyYfN8GVrL1Z5sdQp6Qu5y7g3wdVUX6P6qAfzCc7TjQPXQFacW",
  "key27": "5BTogT1ekFrkgFojTES5fJQs7h14iTnqHdmTJdrJeKVNt8wHdzsJ9QUoWgcMQ1f5qLA8NxnqSZhttLFn9thsJzgq",
  "key28": "2kE3vp19wUr6RFbveGzKnG1rEwGXpMu38tRPnyVoFrLwAcpigwNRGtTRK3neKvWsagKkAoA4ir75uTjZj4nsyzUq",
  "key29": "58S6oVGEgz7GNtYqsWVzh6LDQHjoaH6RkP6Yu9MsbAzAKmDrihGCgkCghrzB4CpPxfm1tCQPw2bTvS6JzMfzTWa6",
  "key30": "42WmxU43JHspFAFuhTNCZbc8Sh1Fn3dFyjcnFKrYHDo9H2SC7JMPMRZoxZMmHt2EJp7TtE336jZ2Ud4MyuTTjmAj",
  "key31": "2aDPpJzXReiwaStzW9MySHGCLtA2vicuG4qFTkApaTyw1gtysAr3eCz1Ucj2VBUMHTbY1iC8dDgKxFZ4SrTQ2Lcm",
  "key32": "3n9yarLJTW73jC52bgrZ2dYBHC7635DS6p5RFscZpYpk7aymnsfkJq2C8NYsJ8aNhcdo6nPV285KCGfufgGYd5Cd",
  "key33": "2QZ9sUkcAA5iicmrNr3iBDBLin9qqr3KsH147vKes6mU3deD8247qRyFQqBjVzMKydY8rSToDci72pSia1o2tB82",
  "key34": "vTD7fxNoAPCxkMnzsmZdgqpYyhkvQ9ESDeYxdTTeVgL4TDxLC9bRcjAC31YtwJJv8vb25cDGYxtHAYKvVSrb7bP",
  "key35": "29G862JKjwjKpsZVnqme3k3d31zUXCW8gwNGYnocxbbYuRAg1XMaK4nx27Zg2vec9KLhFvreUBHjQK9BdoBioLcv"
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
