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
    "3u11coec1uK9yyqX3J91sCyzEWNyoYJ3v2cJgsd9i4WKLaj7KNfdGtnigyUEey7ZX68MpMsHAbdmhBgBsdDs9478"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jpEpUcWpog9HXc2VjCPTCwM9RDQAVVcykzqcutrxEcQfgGBDFZGtfqpNaZGiRwvDVxSQLg7a2f6RFL1jNwuA5gK",
  "key1": "2EQTk3qGkGAiCJ8gj92rXvptKX8S6pmjtCArcEvPyrHQFoEogyGPA8rV7jNvQ1uwbgDPcgHSyXhGvPKULxj64LVf",
  "key2": "3W3jjWY3Q6Nb3y86HoqrtrR1r2e2n4AC2GFkTT5BeqjVCU42gVzSq3y6dtadDbKP3StTMokeQ2aoTGy3gewCGZbE",
  "key3": "7r9uP5sdwd1aX2FHNwCekrV1w5m1MmGHtX59pBb3cq5YKZF9MrxKhM8e3QMR179HNie2KAoyFhk2MmyDTvxs3P3",
  "key4": "N3AUrSMH5oTDenzcjTKA3MAS7LPGZrjbiFqJJuE6fZGei1FZZmjVrNX5MzRDCSAHb8PBUBQj34PHwHnzotcCaKC",
  "key5": "fHrk989ERYFqsjYxoUBr8PPS8D52CvDK17mGR6CQBH9VjxQKG1sAPJWDjxBFYVv4JKJhLeRqnbb3CpzgnQPDFnT",
  "key6": "2JaWHRbYiWcVEykP9Nz3Amn5PVU1sR5at9RaXfr2D65rNeAq7FcCEuA9gYvm4E5D7HvKArmnkb2XarkEozPPdr7B",
  "key7": "4wqkjq6Ai8WbCFHw4ZQosDQ7c6Yb3t43hXfWmQK7Mvyy4L7PzNdfNQxzpHkHNtQd62uNkho4JWFqg7pqhnMQKHR2",
  "key8": "5gePDZpfKVzWLd5cGs4pqqkiKPckhjFAySKz7KvzoPoHJLrd9NcmS6rPLUmvmDK2YQT3QdDDBwoVUdCsx9UkYoTK",
  "key9": "iY5dkK4AxCbTotYEZ8ctrHPaw5NSVfyfE8aaAKHcPbBaqys4XoS72aiYuuygHSANQ6G2eySRCXUPgMfvuKAUS4G",
  "key10": "orGrZWJtSBpCJLtNt8BKmpm4JjKHQLC7eyNPzm3T2azJQRaDizEpa8i6FukW2pYJva5Mpdim35mN8w4xKj71g1q",
  "key11": "5gdjvH8RGTGTLQDJMRgcXsUR9of3xv4dY228db7GHhz2iWKgKHQWiFGMhsTUU3WYi8BKFKa39qPRvHmZvSqSUqJB",
  "key12": "49yDmQnUdEiSCutyqHQkEqT3xoKZH7Grihtv8L9ggiUyc4mrConEkz6FxMeN4vfcLrB584yTztdcXqZPbCg6jn7q",
  "key13": "3n5ZMNLzTbPicpVtFvWb4xTBp7jdB5LBYEymZsEc1Qm84W6V9ToQgNWQfz5VPb3JXCAPuAaov6kB4HZPex2rPv2F",
  "key14": "5vTJCN2XDr8mK69PBHi142ZgaAPvMttQa7Z5tJ7WZ4WJBqzCDV14EBLq3RUwZk4ZZdZWPG9MR5qV62iQVxtbAUa7",
  "key15": "4yChA3Dn7vNEfvaJ1GdVPMLsUfJvcLn5iYFt9MQZAfcgiCayZ2voVYDq2FLaP4yTqYsYUeS1NvM1N88ZpEojMLWS",
  "key16": "3FBjo4hXPH1NoqwgFmc9m6SsRse27XmAQ4aL7fVC3CCFm5f47vduSvambXbyKFUambjMf42pHYzdgUiTw6xik1UG",
  "key17": "CRSYiz5tuW1bVBsTBEr5cMAarFpUZgwtyqeh4pXQ1PTurPWbmhQmYiUT1HT3rAPG7iueiPEG3TdHCDbi6kRJ6Wr",
  "key18": "5uQuobVLQh4CgHmYoDsMteQcp4dj7i2mEfD4LgwsKSJKkDBsRmzmcXiYzix8rxhZJwzziKSnDJha8Jjt8izJnwS7",
  "key19": "5VdktGZgC9tKFtafaFduHunePpxmQPzfEgwE5nJeFe46eSbxVogJGvhe568md83BLJw9vmT4Pf8z7zBLfX3CEnFY",
  "key20": "3eW145UvLTDxpBJQuQjMEnF14S4P65VNaM3Z2mw1berRUshpwhehqmjshbrxyTTnnTMJCSEHDJG3Cqx8jhxrvLcJ",
  "key21": "37faAFaJHvcs4arovPKhygGVmucEFBSEb9vw77Ls6eXBKpFTuVoUe6gk567C1TticVGgGaLqesof8ct3dKYy9VhF",
  "key22": "55MFmghp2FLj26ovGjub9FSx9f8i9Z28j8jRkRauYUZg7Dm7WadzBt4pPzst7V4aftjfkJg4fhqsDyA4dsZ8t65F",
  "key23": "2FWg2zU5d6iiNz5mfj3wTW79Aj8oZ1sxLXAGYdodHgB5AtMY4Z6GrHC9bTgxRUanGEEA5HUE6V9YUaUda5JMV6Bg",
  "key24": "4MnxfZyEhqsKCW7pds2uxoA8MUKyYGXhW5k6hmUp5gRQXhq1zAJvk86NzGfp7Zsmx3LZBxCLoMQCbSBtufVfVhvU",
  "key25": "4zjp3rYWTq8GV57YRyTwGgQFs6fCKuPDVmH8KXibNGZpZPcYoFVQcK4jcCKYNToVmqke55LN9pV3vAha7oSHcr8c",
  "key26": "5RSDagdkw5P5oJu7mUtRYaCF58nEzP4aU1CppDqDiZ2zKHxWs9iFoXCo6iTJdZN1niq1JDkWi7q5tDkEWejSqivo",
  "key27": "28hguWFiTi5ZA6xi5mzacF8VcL8Wg3MWwKFjEhfp4bcFG1aphu8QTa6gNnDBhijT6A6kXnspM4xkLXxMZwafcCqE",
  "key28": "4wxV6DLVzPTay14XVrbAhC47ivVnrzXyEjPoHd5EFvu4p1Nn99zvD3rXgVUqxspxLGUa1TuCuf6w4PoCCwRMQ6UL",
  "key29": "5hgCjx7GigBPPyf3oBjYFnNTrSvDm1QSyJe6g5qrMz4g1WvfD5nDAooW2GiAZjSVvdTLShs3S3MG3jkPw9YrLzen",
  "key30": "8D5UvBzQoqrGDN2e22t7bbZTFwCVkh9D2YMEnxMdvzxfjU92vqN2NL5XFkL53Z977G6md1jvKkWvLZyos9nZGQc"
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
