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
    "3nZQfMucbhEMaEewkXWD2GuRg1P1F6kevwabfgc2KPYxrkXZP2VVqB71gCaoeUuqcHQiDMbKzn4WH47xfUr757we"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jw3o58cjQ44jkpLbz7NYtbW9GwGne38jmViKLtEWTwoKaFWByJysMQi7opDKuFba8Ast1drUqMdPPeqZhYKc1sQ",
  "key1": "5hbFCkwLRj3BZWYfYvuMPA4MvakkbsSyXcxJsJ1TKpTwo1wurZEBvdtTyAxvR53eK4BA92U72ep96pmN9H6irJXD",
  "key2": "65VHWKfrdzJNVPAFEuVHPFqRQotirVVMA7EXaoKc3SoDs31wRvaEhWBeJb8NvVUU5hNTW4ZbsqJzenURWwSCoqkZ",
  "key3": "65QWTW1GvEuEAq4YbG958BXhadL4srzv4bdDzma2nVayiVJZmsYcwk7L8CTrQKvvVmBRsxM9MEKoqenNuF1jJf7n",
  "key4": "3pm2yvi6yeJHBT4iWzwRzecY2EtAgRQb2xjwSLa1kgwmEqSTeXm1VnomdDZohqNSxxjuEv8JDt2RN8tpsr8QtYfp",
  "key5": "5xXAuJZSxaUMzSCvYbzDaNTfnDsMPUFXFqpiYKxX6aZCjapbeAWM48cmKxFfZHE8aXtKVGCmqLQDf4Yaot61jehT",
  "key6": "4W2Z8Hi46wAq3sJ5u9SLNF12GjqYGwZXiVpdS2R7kcFxa8dY4MJZ63GEN9HmqBp1ZsM2NkNtNMDdxrBq3ZKNyj9w",
  "key7": "4dxNqK64Fpwji6wdYF3kBG5co7k3SQUUBMLRyT4HNBGf2ibxBe13hpWGRWQ3rUYgqDRasnAzkmtsXy6nQRDoH9sg",
  "key8": "JfeXxuMUYQrtPpcATUAZyysiPJz2M8NxpkLSqrfySnxvQEKEoqUMmQagnFaRE1Tyrt2yF3WUJ7o7eA2kDT8ePQx",
  "key9": "3WM7qMVDpMVb8tdXxGGDGmJFp67HvdZje2T9JNtNz7hEV4HeLxKfhDzo8hhAin7iK7Wka7VWtmxNhh4D26xVq1cg",
  "key10": "5Ec7jJ844U9AKLotSJ8abZo9uYcfesvkYaC1DzVnCPBq7JNjA1XsvR2TvYr3GfN4x1SwZ2VPTxNhrL7Y5Zx2qzak",
  "key11": "3CGqJfJeWtamEGcRMKkrGe6kuojGMKou64QLZZmRhrHf8e5ytEeNFm5WYryj96k1snbWeDHVo7oRmkQm2ipBbhUq",
  "key12": "2C7seeFNteDKnrN58HVRRB1AqRXjjupMBbxdHFBN1ex7PpXpDFcXAa8ZKdce3Nyu696mX1Si4ipaoykkTh8mJmec",
  "key13": "5VvHc49KmLbBtt7esSyeiytZaWVGTYDckMJSg1BcUjTaFWXoiByCGEBKhAsDJuYcHvMgXQDzSHhBuPSSPevfsBWQ",
  "key14": "3swidWoSGK69tqd1AQsmRjAXNrpNAev8dzek6iVUSRRwsCPVpJtP8wtbD4ZUSDW4XkL5RECcDMbvrTVp4dgiLyd3",
  "key15": "4gMdprwVX1CX8zkdgTJZfc1X6cNepWmryNUznG4sqRCnr9MXVQuKoaWys5mtZxS9x5RWMyhwqSacd4Hm8QZCzrSG",
  "key16": "5yJq4iXFuHqfqdtN7tLGLVxVZV1KNv1TGzpqrWCcFVvfBsGgxLVouRRTLiCg8ypFEK5TXaLjRGRDAWku7Sd75kGF",
  "key17": "4XdjE7P2EusbHsxGW5hWrnq55VjdME45LVvtU4JgoonSB2v5XbTeMTPWUVnGy1Hvh8FFqnnMdepcdrA3jN7kkmJd",
  "key18": "PZRrnuhJh98n8TJvKFYJmG58DzD4n8HYEb3shuzQPxYD8goujZAN46NnMCAemxfqtqXyRV3dETjEHXrq6JES3nK",
  "key19": "5ZVbBQAQm1yTPfrK6kkS3wZCYwBSvPRP6cbajxu3A8Smm79BqEDZgn9s3fbefjPb9mjTTsUxSmFmRQuhKTsFRVRS",
  "key20": "xkKyBQLxMJ6eaVnsgF9aUS9c9bZT3QY22vqH78NSznkce6w6xccmp53zambYNbGN6fAGtruqHgRcrufFzVDHr6q",
  "key21": "4MbXBfvJFfBK8TAyHQmVUck9Pmps16UCBfT35paJ3yzh1KTZygt5gP7RDXQfewYVmFFnQRrtjfMNXxGArUSvWZT9",
  "key22": "3SNJyGDx428EeKdwgRPD4yQyrJVJEsnSoAtKxjwyjp8yDxX33yGpwz6nNQytAUoSZw8nUXkJKGhk94vtgTMyuhVx",
  "key23": "2AmuYfgytXddVcX1nZSSmcZ7wao5m5rkVUUL2MB3YSfvZ4MzM7PopvfkjSr7rAxzreVEk6nbHdvvFXicGGk1FUqg",
  "key24": "4E1RKuoRtfodL4qSeEBfVAUrVW6Q5MggC2jvY7S1Dv1oC6THp3AzqwCz3GbXkVPR7LNcByVibiWbTQ6mAtGSNGac",
  "key25": "4xWaHCF7Q94uxbyy7MLtSsBnGhADK5CD7WBQL3CGJcJBX5hzWefmjRMshHW8TmP41GjWibBtXvkUpidFCNxQy4Kq",
  "key26": "5fC3jYS39sWRBNiUCzsf7ynZ8wwoNzYuy1YZMuidSgNF4mWWkMzJbeX9bRrmKncjBDPi7TNsVSAWxznZ3Tua7ukJ"
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
