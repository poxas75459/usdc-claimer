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
    "ug7iJDsNcDkpivaSw5AXFUAQtG3NjLmVveuTHXDopgkesYLRQi8e2AZ3dkBhQU67Fix9VxrTJi7srRFd5LPcMtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vwVJtdCPq91b66CRdaBLQBmPHqGwKLQQrrNQWUY7rLbWoP3WfiNAfygJT1GsPrNFHjgqeE5MJqsYZPFahNMyFMw",
  "key1": "2YgHZvx96BrY1EnsWS8oDfLYnqw9EyMxNWPGGLSX819egVQEf9bk7WFcQ71B8SzA9XNgTGUkahXU6ch8u8Fn9DMT",
  "key2": "4ERfkkLhVN36ERcFgeNWiWsG8vfULsikzvF3f9zb478DWtvayMJeLciYAGTcvnFpSBTtVEkxxFn8hrubnJLgmdGx",
  "key3": "3TQ5srMaxWfTaxSmRZBvjvgt6scXn3c2qkZqMEf6QUwWR4hoc2JLbfUSJjYZ5e1FZrBvWbnurk8HvFRaxQzMhvc3",
  "key4": "5zHpD5USiZaG1gywP1CFvtiA9Sd62yzV5qyiETd7GQzQJTZ7HzNAZ3h8QsbsPt99hMAGMxAXEiTu52LBRz6SXAWW",
  "key5": "58JKYb9aTtcBcWhP4o7kunFwtyYLtXg4cn6Pd1ag2zpFd1hrmqf1ceQVeA51u4vzbt8PQEBr5txCUFS9cs9e7R1B",
  "key6": "29TiwMSDytKZ5yeackWKsLCdBom9ESwp3CjVz1ukqk53wGy9SPA2DFq7QyzQKmUwKiM63oLczSZrecxsbtsZKoer",
  "key7": "4yd5BG17JjdcADzpkiJHr8mRJM5TXjYuceZGcL4xSRSoTWeCXocFxM1VkprxYq4PQC3BhXF6Bs2xSBi9RUkwCGxA",
  "key8": "26f3WM1mV3Dx2AoEomepbybtrYoDk3S81B7hqAXa2JMwDXYqjj3mVbYW6GTQ1jfW54P7K4hPpbtWin2suwkMAjhh",
  "key9": "4MQyRJaXwJD8eZg8xVEExwFNCwrP5yotVcfpPL3CX3YGnDYsdXwcug9vRvLKxPeHopRLNY3JWJCZwBedzMrDFzab",
  "key10": "3FxztGTVxBNQzdSypgnkpzq7V12bDsn5FAjp2kJQPNhMhRtjid6h8pkHrbFf12QVB8efV3TPfogsSJ3fzwaKP3GS",
  "key11": "27PqnQ8hrGJgKjDym39yyq9Dme5cwqa72qNHVWRQQ385RX54FNVDwL7UCvYGowjFC4YPeabjaEd49nge34yeaMJZ",
  "key12": "3ENvt96uH6aq23uxAFn8ZmWhDTmssoGgv8KVtvfjBF4fYubJ3n6n3SmMFPrNtkySWM3mLGoQ6JbnXFkRJo5L8yVw",
  "key13": "5EJYufjYcBtsjnsJ1eLAbeeLa1sBFJiHj4JApbbZk2dxQA8Shwi5jwbRnJfS1j3i8sPUidqcD6ES6oDsRufMTWGC",
  "key14": "2b6q7Dz8b7xSGJ7e6mJnhgp9QsC53fmo14QYxezGDKKjWoA6vSbB5QARj5RmLEi9Gswcyjkq7WmedDcLtswoQ7Zc",
  "key15": "2mySMVEdF6gZh5ZLMmjnvTTetxFFqW7gxxKTzifcFfQPKvEP4ar5Bn6ab7ab7WGCKL89mxUqtWdkFCSwtE1F8KH6",
  "key16": "56SPHRJx2BLZcfDLuuZf7dcifiR2JW6bhok5rUyj7FwPpwbZ7NzAqtJqiHb5T198m7h98kSY3uB1rDQE6cThCqf9",
  "key17": "2cGkPt64K1AJ5Sb3Z4LiJMAz6LEhESuXhaQ6PWZaSnMa71rcJdfP7VJHSeEcbXcGVZtm7GP81N3fXp2NbKzwyzEe",
  "key18": "5DCMcRinH1rucPgF9KxKqrAhSxhqLU3kxRTeCdtuKJRUa3PC1b6Rj6PbWQ7hMqz2k1zmnJCBG6PVczz8mgBM1Pra",
  "key19": "4tuvGizUq95iczZERr9wVyJXfR9S711LgewcxFu7gKHHjRohBpJWpzHpWEm1EJMUMEB9EdE7C3xEhXdKivmJvndR",
  "key20": "2YBxr3aA8duM1Ttnzhx6fTn4pGD54DtrTGxPXYe9Bg4zX1YTv7riYRDGafiEaJxsN39vfihF3ncAVJeSwmFDRyCw",
  "key21": "58ENpfcstre38uqUtBtXSYc46mdRRLhKZz6aUk7ZJHq4aZhMnz1pmWRy3gXw3gUyMdQzbPBgh52w2VVbMqWhmArt",
  "key22": "5f5Pj1tKA2usdxMqFwAmssb3egw898799zG8wbrrvjGAMjAbxaVKeoApnh4VWnjP8K5GpJdg3HrCHxhFeJfhpmYq",
  "key23": "3BJDezAnLDyaT4zFy1SgphYwtkmw7TWJChFARpq5NrjFXJhAXBREmMah4BtYLS1KGQzxRMqfjLLmxq7rSj5ibCjH",
  "key24": "5YyErCuWz5vgjdzqgad76UQ1EbeVQmEgtntZ4pzqf74LqUePj8AsdggzmurVp5z3NQVzYQcsDZziyM27mtx4e5Vz",
  "key25": "27hvqGnuYSRpy83BuvTEpdETWRdvz3Cx9MQw9GYVuvJCwZP5VLKHPijbxKjUVV32kAnGiF45SK5v6fwmC6vmJhDk",
  "key26": "2eyMLcY7LxxKfrDguQEvzgGbuahw896bdzFyQYAHx81bQ7bnbvDiZeD2DbZuoZWuGyWevr5XBEv92fjxde7jvcPj",
  "key27": "SZSWXM5LW7DgrpGGjBJvyXL5SyLr8NPTnYCnEN7GLPAnJa23kG4NnLzrde6ryGbLSeJfUxhf7woziFRCQUfuC73",
  "key28": "3qdmTveryfXJ56EqgtwPq7VuncasSEFWSTSHsEf5LWJvoGsjdXrcoKbvmZfbwBmAwfN3DRwXCkaS5uZzy7qTcoxS",
  "key29": "NvV9W27XDVc8i6ZFVK8FxhDfpMAFtyymWBc5tTwGqYAx61dXAa1abm2ZRRurLhmKe9aGNWYzJAPCsHzsn62RmLQ",
  "key30": "4DjjxbjkuQQg9RxFxvF1cojE13JCxYDnDJx6F8FpVfwwNYMqxPVao6TBEymYCGgN7zj2FEMFrmvutXqUdMEdKXeg",
  "key31": "3tBFSyWiEuuivahWDQFFKpefzmiUrEDqBxfvfdYMXMehzMBMCRonLMZ8sH5f8UzmgEkwtcH9WnyebCurEV64VxJb",
  "key32": "4fzPrf1g6xGC9tahXxPtduM1tcyBaEUFacXmSFTnH6aWQ8FSd9n1VaLWJnJUek56kZKFU9HKhQnXPpJM5N9T1wK8",
  "key33": "46wDVDz8w12FVDnkxph7zVnWhad74YpjJbqPWWXyizXxB9RoN4k6qrci4TFVQDLPd3j5m54Lux2psJLgA9dbEQtL",
  "key34": "3NpXnMRjrQLKJkG9YZs2xk1jq2Vj57aXiw5af9YARLn9mbbjqr4gKSmfgFmwFdtyu9vjDWqmxyPBSfvGTx8zbzb1"
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
