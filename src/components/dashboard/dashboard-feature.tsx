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
    "Y3bu4kDGuavVKKWCx8XiV3vtpgMJcdpYmfL2MEf5FFvxFsLJDkavGpTfiQHMqBcCzVdhV9xbMneDjQzHdojTUFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A7WXTStJc2VuPpb3JU7njk59JkWzQHd6qTjsSiEeQwi8Fm2ktmDeFSZuf5s8LammzY1Gbbw6xRJ6CugdH5bhzHy",
  "key1": "4tdX3RUmwEj3XWTJmJ37317RxVVJ2JcHmfKSTfYozDxRANFGmfPG3JHJWYKxQNQHck7K92FZBBPohoHLeyvDMdx2",
  "key2": "sx2m4JS2M2Ux6py2Duajdjd4ZLKVAM2r6DzHVCEXqa4cVdvMs8cwZCNh1t3NscJeMhByUxN2Bx65jhbbCNaMBAN",
  "key3": "3D66ZAYmPjqno5n5rbc7rd7U3YA5XfMMvbWiTQj5xBWZcqKqCH7ZEdNpZxZYBxMw4bvTHfGm74Ndw9RXMQWndN7w",
  "key4": "49LoFv9ZGB5kNBhWYXAzKyfCF6NzpWbYDpn5vv2WvMcb14272yP79PKkGU4EjSbdPNjum8BHM1MEfedHcfb7G8iA",
  "key5": "57eZBxf2a7CtZ2Qd99RQvprcWwZAJcncViKuzrrsFGMMVLupxspH2sxWxvjE144Atm4LbnyrouQShdQiQXfC3Uff",
  "key6": "2MXNWaQ8AQR8zWH2XXDZuQGNWVC5MLvADBjffU3rjYjFo6Y4PvbXZj1cr2uSiXYtLPQUp42Hf7UgfrhjeFypgYpA",
  "key7": "qbXxPyYKEcYHcxv4RYuBKVGX21hiVsgK1C2cqp2SXFEDPQ8YiyPvz6MesJwbWkdfUoQVkxhZ8sgDEd2BtzJDRiG",
  "key8": "4wHR1wQYUfhSpXvrcZsU1LMRATDLKGuG2j9Q8MVTcDPt9dsTUM8J9Z6uhvydF34bzyUkYDRfm1NT3iBWgz8BhHbn",
  "key9": "4Xn6GA5KLFdqXiq3Jyw5dKPVhDJxpgyv4hn4h7ptWBnRaKjrouXqZFxvm5MzAmxsQbuGuV6KbaZJke7WAG4EWArt",
  "key10": "5ByFA5QCGDU2WSmCk54ehmEJMmZWzSFkeSvVj6MSPrAzManmy5iLdMo7NXWept5o8PB7DksBTvWLb6PqjJhGeviR",
  "key11": "2CXq7H3cxPbZ9rCCbV1FAYL5HbcsZdAVAzdGEf1UmueUKxSQnJdtiYXjUsNRByAz9CEJYzpirgv8Ft9FdA3Wmvd1",
  "key12": "5GZ2ppjqzwsQFbcKhotM1kbFFPKMXRAKDTNm3rZZqerrhvLsMyT7bhCVwfNs3Pyjh6AtCBfJiM5ciMrmqgi8y8TM",
  "key13": "3wabJCih57kaArmmzq9LcwESqXYCR3VXP44EDbnrcrV1iofLZpgjjG2qW9mJUm4WBRkMvQGgBheiXGwnJ4nAvGtN",
  "key14": "4f8jnM8i8FaRqBfR7yVaVDgU3iQBJWoKyf2eiBHupyi4hNP7kRZKGUpWXruUuEdGW8mmDwrcxFphG7vDR9TBgZ4A",
  "key15": "3bWMNSKAf6yBmH1xuuepuDAv5RYuWeP1fib9jgf8jrhJq4AXJg7B2Z2ff4PE8J9TcCyT8vYUR7bMxkzSyYFvj5ap",
  "key16": "2oXUyTcEEqe1U9uUYnHvwcvSh8wSigLkEC3UbieggpqyVygEMKtk779yJfH9FvPkGgjjxiYtsKqZnLfZGdGw6D8g",
  "key17": "5HGjCKQnPhVm1ceeJZ6oqRLQJYjD2NFR6gjUQCWcSqHH4bzAEzQ79yZAJCEmQrSYmsvLHyx16baNCjVyfHsY1s7G",
  "key18": "5prdeGyptKzSprLTqCdbDPvacxqebmUL5kexZa7xJH7kLe9Uds7LZmXGVqdK3tSvGziwUuLr6nwYTwtma91HZEdd",
  "key19": "2UkSNYVvGd5V8rLBm2a5nbTYwRpdcTwZpBz2ncW8GYsVknWPMWjYroSX1PzJioxVrP6WJw55XCdLGmStcW5xmRbg",
  "key20": "SCXKYX9jWQWka7VbrQoA4LGKUoa2LYmSYB8id5tVnSvstmPb8Skkk5NzwF6NFG1z3amMLbA273Y7wZHc3jLtFVB",
  "key21": "2xvTr3htQD4ZFGZULr1jYh3QUEcj11qFuo9rVGVfL2ydAPx2TJgx7bfGSUsjw7RR38iL7ZP4Xt8oz2rPV1aBmUTn",
  "key22": "63d89h4jx78fgsdjHKQwbsitHVSdVEcEQYvZjDCVXC3hYLwG3d9cFVUvqEVMyb8yXSN3E3saZfVYr3D3tYTT4g1",
  "key23": "5GJYHHHZFg5eNVAVHYxPfCU5BqSAuWWFN8mc9pfiQ5SLsrUjfqV3KHcKX5TUYXktxhmzSLXxDocrUPF1Fwmg1Tf2",
  "key24": "5FXLAJfDKgct4rhtov1kJe9yBdjJhHBKBdJ6K5r2jpLZ5kgCo2ifojLujufYTYEcjPnkMYAf8afDLbGyX2MysHJz",
  "key25": "2NQZ6zAjYKJXRdw4YxhfRDKBLCDW5HVRnta5z2nJ9SSVWMwrB4ZdYA1z5v6kTHTDcaBFLYjgo7m93BgH5BQPVmWi",
  "key26": "5Vu3pqxoyUe1CDU8CcuQVDaefKvSKodfBpRtSxYrbEV5eaKSDuxXoo2rq8miAjX8pyuqp463aiBj1yUFQUhijfzn",
  "key27": "32Qwi9mqoz1NYKKALCp75YMzjzgqe5dJWp6xQDHsebhNq73X4qjTHdGHDEScoTwjxGjkn9iJGtfcN3DfVgZGFnUR",
  "key28": "5f9PjUHAK43iWhNyRBoKNqFKYADGbS8SGFeMjE1YW8N3tkmxoc99UfihsWvVR89wbFS3uVUiH17YRpFRFwTr46tb",
  "key29": "gDZzvXBd125D7q8JBQGMvRKiP4BJdDKGXQJGVCnbbsNmi6WtNnudm6jMEyH9xTfHTBXTbxTdMP6SbFTTpGwPAX3",
  "key30": "2FBXUdYV7oGbtJvLuF97MakPddYrFcr9EJR3b9JCNkyp6G6dZsoXEkGWBJcgZ575CgQ1pdyXiCcZg9boz5ee6DxQ",
  "key31": "JzVrNmGWsXexAAaonTH9hnL3AjPSwwv95E8zsTvrwCz4Rr1qC16zJ2nrViPTYguN2T1TXUzLNsSKEjW1B73hKLE",
  "key32": "5SKYCUWxNHWRnXuoaussKmUY8DSyLJgizyuALExtFXJjDudouy5VueuMNakHzLcWwf5rzjWomwsPZpbzzipPQTPu"
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
