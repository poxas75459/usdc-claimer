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
    "3Su3MG3RrPiAFtX7coKudm5kwnCC3H5oL33ynGHKCBgeGZF79cst3ypKZoakXkU4L8pSRboA9Gr1bU82MCnZkAVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gHMYV6pwM3QBNBJzLuxssAVHnmr38aExwUj1s7vazxbnYttHYmwU8JSZtpm88SxNUhkCetu2jxPY9fZURd4m9qh",
  "key1": "65SJg73PvvoYRgs7FbQHFxamyEQBKkR5BwqTRTP6AmMkbfZsxBMNSiHjotUfBiYaU6yjLf5GYYEfMujnHY3aLQoK",
  "key2": "3XzLBWUgdqTFYPwEDFYJxdArZNzgCvHNkWYeQCM6M4ih9ZULToGsTeJXtnN2HDGgyq9oPH7hrCNUm1n93qC8Pq1P",
  "key3": "3cMg2WYcgaMTBHZMCZDd8qxfn8nvoAhJyQ7iCJNXYpAR7HDTwoCko1VB4nGGnTrtMt1qkquG5cSLHgnVTcavKZEL",
  "key4": "2ff4ckvp53gWxjEMfcWnwKHcAdcX3cYmDXx9BFiaiYnpNVxyiA3zENvjfwvMHKxpdiD97DkhLv6FsayYDnnPaZ3e",
  "key5": "4nJc3YZmziThRkcDffG6GRDHa6bvDjf5TBSv5WnUkT1izZS2SmWAE3oKXqUZwTq56kLJHv3oTqpxk351h4bfWjMM",
  "key6": "HRpBc64tZTZKEo6x5XbmNVAm7CBYG856dWedkqdrAMkSiuoJKQGosBqd3pqStajGL6h7kZtdA1jdnPtuRfYoS5C",
  "key7": "37wRvChEn4HhhwWunHfwFnWjzf7gtpn7DJYvMSHgGjyuBb5nWDZrD4jomL72rPc8wPkesT3RzyC4NBDc1NWJ881z",
  "key8": "66JPyXEyLzba3UA11CYpMoUF8dgN5ZqxiDpcUZ74a8SbXVytL7sjPFgDcfWSi3dwkQ62fad32NScfiECDR8VsAFo",
  "key9": "5rtvHdQb4LQ7o2zmnMUthytQ535DA4sGBrvmmkQJHJ9dsGbQ87cpscEq39K8BvWoUnGiwHKSPLR4qEtmdoaGR5LL",
  "key10": "2MigzR8dCTxCHDufobi5Zv6YBNfsreuiBTKwsEwgz5Nczc4cQfCjgjPwsUe3F2udAFAmiugm4RQ2ALiatz4wpsN7",
  "key11": "2sXShr2ygCpMGcWwy4ZQ63sPT23iZiin6PFRjDinDScsv8b7A5dZ7ypYUJLrnu1hkyhGfxdiKmZ1iAvBkxpJ2M5v",
  "key12": "4XsftXnYXSdZZN6wRaWGzRXsm781UiBP3YMjGdcERm7LUL6WPixzarpfpNiLZupYNdSkBr5nFpbDkGGtQAwqnmgY",
  "key13": "3D5LBPW3THGnSikDCBLfBADYffwXsUAbMmHpGW9NszmV6pdETPceH4zBAo7icf3UazDUEvGtzRzcuyeR1Au2Gdfw",
  "key14": "3cHPZGC6WKpauvPVHrw4Tgo1fUkavye9nQodj6f4w3cXqmukecgoMtYeCpcNBHYgZXtxTWEyu5SZMfwcL2eNN3cr",
  "key15": "5kUKBB9gjtXAqCx1fDbvM9wUQtvXMJPvtkPSXYLgAyWSPuwXz9AFQvNRsTdsUWiT4KRc89HyLPgQzPEN2gaRiJGF",
  "key16": "3wAYHQbqqACXntBdZnMRSAe3HBs9rxmiHPoM1HAnA7cdrwbEiGoqGGBnaG8FbueqzUGCzH4DJjHBq575WyUWwopM",
  "key17": "5Aj1LCQrTzZZAayFU3HpoJdG9GfoATneX9prBvHEDoEyUProXAGrEDg4TwKiKFtha16wTLjiA4hBqf7bqg7FqUcs",
  "key18": "2C4oEg2vqzrMGwptRGn8dVQGk1voVKmc8GjCiMYAeKZfthpuTV2h7jAbciDPPAFg2grtfWzFdkwHao7TynqSRL4r",
  "key19": "2yAeqrHDhez9s1uaueVYKke6TEWCLvJW7BftiYNdvdwwbUBxWmgVZYh987Dg3niKt4Qdwhk3wPxVcChjZ26ca1pM",
  "key20": "3NJj9DEatUw1JYA6L9uJfKEsysWp6i3tHbBth35FLM6ukJHnveqCAbxzdPqTh9FkTG4kT7x3hBGqJyNb8Pz1fnSw",
  "key21": "3h6pP4G1GZfHfPB3hWxmRb3tH97EQcVpokr1C52yBmMtG1KVhTW4eLyrkw9jyX6vvoT7ZyNMnoBC1kanxzkqd6Dm",
  "key22": "4L1FLDTzmfF5nK9C8tkjtrHThdRqWkfwSHztMHrvGT5rbtTiHoDnuzrcDBwURFtdciGSSgwRPJUdDWUAQcWH9nsQ",
  "key23": "3NZZDYpCsxHHNhntdMuSMsxxpQ1WK9VQN6qCwFPeLuq3Lks272Ycww4c2rg4QuND67SQthJbXmYFxaFYAA15b3Z5",
  "key24": "3VxQwfnMGQrxtPmGoGxU2JZQ3pbMW9ivrK6CczSimzN8ooABtMFzcPV2rSfWB5rt6N8GYXdXzQ18WnXQZEd1omQT",
  "key25": "2ChZCQHoDob72UAjWh7dxYvLyV5DAArPgp4fZi3HFVfbzGGoYg8UH6dcBzkeyJ6yN1h6Rs4K5WGEVRWA7vqujtxP",
  "key26": "5aM5gbZ4tVEAveC491SD4cAKEdNpQfARD6QJ18VFmuobuS5rZfov8vdYkoCRVyzzoAfrrvhKV4BvuiXAPMYoDqai",
  "key27": "2WPbBT5rcKPzTp7UqYHghDwuB5TjfS9KKS58U4W4L2yPt3CQwCdgRqyvDq6yDnSSNCiqdqFzTMhtrhxdbj5N3ETc"
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
