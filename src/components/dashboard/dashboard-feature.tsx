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
    "5QWe9LeWeJnVpKYrthSNTTGjNec3T48wGU6PDG5Cd8zm9M6iqr56eXah9yDZXM5HyudZtd1pPcsT1UY3ivdyz6Cc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5puwaaqd41fAPxgm5qw7u8YjNMyDCdLpBdiYcXfb3znG7uKSBQVsnxXJMtrk4w9QJXXpyEuSjtFeMYrMM8QM3SNX",
  "key1": "3NY4grJ8cwnTkQZGJFNfirU5fcZBHjUGKq8H67jaMNKmRuoNduxVbL78mvaMPhAESPYm71ve9amXcMDVm5Fk93KW",
  "key2": "U6FxKRWiPSz4L8Y79x2dbn9DSWThuPxeQ2gpTe3ytZ7GuKkbqe1FhSSxQkA4J8SSZh5TDcofmJaQKjJNzG1mgdd",
  "key3": "2JjdNqMtjzbhGhVKfKvK8nYej3jBRLApWnR8mhaRtas3KmSYD59ERtjEkus6RGrBZQfusr29r2WTw21X3okCiYxC",
  "key4": "2hLsZoXxZE7T8FaJFCwVotNDU7oL2GZZnLUuru1hZWLKmmVdUuppMoczva5VDFg79qUM2WLtqPTp978TVXgtLUKN",
  "key5": "2V8wmPvNJzNF7JjqgYyTQWdGjnEyKra6cMLZ7M5jphfB4LiZWAvQjRSkTVBqaDScg8m4QJBq1BLrHHKPDkJJQHCF",
  "key6": "76w1Yj4ri86S4ME8JtJgYKPgwzNZCrxEgdFQauoXkY3BBVZ5nLtTAfXnXttepbPiKQT2iWqoTUETz3p8ecJBWpS",
  "key7": "33ssQFtGVZNpK1uGJnNVSxi2PefETdSj8vVaFDdEmnLEbxMzXJsdbVEk6PjLoLi9AoLBVTFaDyfo5YQikDRLSoCN",
  "key8": "wc7uZspphq37MBMNKnc5SjQBV3FH8v5FbPvu3Nm6wZ53MDwk8LxfJBWyTXYVKPpWrgMVFs9eUL9TtHfB9Ujz91p",
  "key9": "3tyuHqDWoS3bFWzuWEXC4SmJLRyJWC954egweq3F2r2CCXcB7KfTKyctTpy9NxE6jhhZXR1UqvApKnwt2Xwie6DK",
  "key10": "52mW6ND8vx3UHT5gT3aSN7PVeFh2wTipeh4Em17y9uHjLTUEanvaWYNqnxUBd5gPVqCHoRD3V6Raz9zBn3NunsBJ",
  "key11": "pRAr2EUP46tWK8JwFx7TxsWsTe3xXh9qdMUhTszfnwdKuxBgiEfjeTc5L4j8uaX3ScojYndYw84EHTwMHb6dV7j",
  "key12": "3j72Hx4nrpi4TpF4cW7J6XPcWtDni6apMbUYmZyQv5QUyPDVRcqc4refPqVCt9A7dKaCasksmCgcfcz8z4ZMDPtG",
  "key13": "5JEBS6APiP8P7TWa9K2qMZmLKJJFKGhcUwGq9mLri6ym1MDtQ25WcXMEffJdcadkgystqcKc9ZEpAStiiizr6GVj",
  "key14": "2feDhUcKrE1eWFRuJ7L5aJABqYgqLhCTs39MfHj8Pm1G2gTb9QARGtU3UpTPT3JgvjZSTEQQANPmNkF6TCdpT9Ws",
  "key15": "nGRb5LDLLmhy4LvphcQdQWNmwSWP78zgu5NA4HNtHebgk7huuAUBoe1CDYjW77zd71P5KNLPsedKaqkWN4xYgu6",
  "key16": "WdA1zDSocZXgXPX8WybTzvSm6HK6Y1nMdeu36sn777Ej9WSXYvXmp4jcnWxnGjEPvcBQJXLAgmYKwMx6q7GaUrT",
  "key17": "AfiM1bm1ESetRicr7Ht4VuQ5kahMo9pQ7M6EA3PmPit3GPNgSLLT389DXktZvzozWZVkDE4Nnhq8qaWLzLNWHVS",
  "key18": "2zwqZAnegos9hAboqa5gRJVNYU1HiHEgaoHi9UouviKBBE4etL3E3TmuPkyJC6hyn7m48dtzCfXPBBq7GQ4YDQCm",
  "key19": "aLmkQN9kmhGV8kRcAKGicxfiWSxAKC6tE24WPUbNNC4WVAZxfwrEVdkG1tsSkQpy8vsPVFmJoP4mYnDQo1W9cP5",
  "key20": "33rq8rq8dsRhFH1oP2tnVUe7rBMzxdwMN54RS9Uops8UUUP1gN3s4PLRyn53kfDZuaDnJAQ8W8H1N1q1wQ1YCPNY",
  "key21": "67GJN9f2TtJFextbtca9ZL6SXGqaDV2c1JvpK7KjToQe1Zptu2C2mFQp2DPR71T4YCwG35P5q6ZCXKvtxrkT42uK",
  "key22": "2DqpijohvHJxvwi8L54mepuqZV27MFNBaSwqZCj5KMnrrc9WDt7P9LqYTdgg5XsfpbC8ZjG8Xi2r2VJJUWLwvQTE",
  "key23": "368CQpCxfj2u3CQKqHmhVXzUiKHzWqWJg4EQuEjwrZoqzXbWYWUJ8CmHQJ4LDxKmX3wQZKt5K4DFbi5PCMGWqasB",
  "key24": "4ZsFpM41vnghdtBsAKenHUdVW3Y7h3mW2CH8smp6YobKKSDptZFpqqGb7h7ALZXFteAFi1sSv1Jp9uUD8oQAErty",
  "key25": "i5ELadmpBGALFvZoVc3QgXpLre4c5oHMNWr8UxA6UaNwpGZCvVY9Gb42xCWMmnZbzqRb1rGGbVCToPgnKuGP895",
  "key26": "6SFbMmaThXuJzh8xGYDLZkg5yFNNxyAjuKL3xXE8d869GCkfwbzSdnFLCyzCBxgxyMMNfgT6v2bhVMAYYJ54R6i",
  "key27": "2dAcMDoDaeFhMSEaeraRkVeXePA73LmBssS612HbJxHSehqdrfryekAbdSs7QgYuCev1G59wTpmLk1suioSw2k1B",
  "key28": "fJVRr2afGEaMH8j2qQ6o3YNLXSGkku5NkbxFGk76efwHtYk1kR6TBCGQivzUnD2BZRUu1NvQ9GTFSnhL6xVvU4V",
  "key29": "33qcrVhgS84WwWkMb1v457wDTGVvCh2RXAkfGhShrPPjsLsDtCTqALTmQdi1vQMH6WuzqchiCuMW5saDJuZCLLqv",
  "key30": "w1T8sm5VRe8hekDTntB83y7YdjYXZTTgBqTxYDbhBTdyQWGDjK2sbiXRkxwBPGgv9VqdDMJ31Smiavu6czvCfrc",
  "key31": "Ydk2PxYVApyJ4FSbCcQUTC83FCSHLwYNUTZzyKZ93Ge5VG2ACSE1f3XX92vaUk5Z9wTMXvfE31GZpjSgwMX9T9s",
  "key32": "26FowuNiZw45BP4QrbR8xxHVT1aCTVMBAcdv1By5du6kbmdLzTqBkYykFA93QSoQt1K24gSnCPizmF1kXu6ygz6g",
  "key33": "2t2aTcLZMAfotWnPfUkbPutm7Uf6yq5ceea3dwHQRhCn8qXdRdGuVe2yCstQP28A4eqANUVkiAnSeNrEXzCuYYn5",
  "key34": "tgmRjqRsvDPqgvkj8HJ5Y87gcNxCHGvMse8ZG371o3RVWvEWyUwrX23tXaERCFyRe3RbUAQPNf3vpNU7anFcQcV"
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
