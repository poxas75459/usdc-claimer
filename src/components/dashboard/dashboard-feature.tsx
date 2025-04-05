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
    "4tuCJE8GKx8tEatbHgPvqEXzvs1X3nWmCx3EU2oNtwya4z8bHxLpz7cYkzpWegGPBCsBAe7QYUFECLLvtwjBaPMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rgp5nDFZ1RsFbfR86zM8Pec6aESQtLQ3AW8ozCK1grJjfF8gEhGZ8yH1uZVeJBnUmiiqUeiEEB2b528JMJRn52E",
  "key1": "2cjN48eF7WNymq77eYZbRP2BudkMKm9Rz9TTUpVWkJTcpfGYCws5atwHzGyAinDj4jRxXDbMZE6GJz5Krk9o5RgE",
  "key2": "5ysjmvSJhfePYMZ3gYGa7ZtEWR3Tq9fRMBQU4PKNLgWUg92uTZ8w5xcfAf6N1YDVMDqSyoM9WeR93pTMpYZn9Vxe",
  "key3": "3EmNWeVHUtLHKLtTRXo6F3mZdgHsv4xmGYTrLetnk9cVAAdWw1ztH9QAKv5HNnQHGqY9TKv23oKxLoXWFWThhN7v",
  "key4": "44R6TzewYziDvV2XUYSTFK5XJLFj94rkRXuHJwTuFMdr8x5vsz3AuGTEwtyKfAwyADGftHRLGezryb83aNtnW9sC",
  "key5": "YjjkgCoZV7hyw9fLaBxzYBQNHxaSXqhUyGCJxyGFnqM1cpcgBkRv3aa4ddKV8seCq3sAmpLYwvaNnXqjdDqwJfR",
  "key6": "BzA5MoyrsdoXfB3NyF7uAvpB1nZZq4rnvQcu6TB9ZzGdK2o2xzoCZrtf8d7ryq2JpAn4ezrWdtvrdbDtScrLJ8t",
  "key7": "2MJUtTLPkFanJxzGmqjPrcy1Nk1zN5cXEMDWqKSZ8kmhNL1D7Lu2wUkqfLbnwXfMHyNGKc4CnDDH3qCe1m6yjRHZ",
  "key8": "65s3cvxFBUC7tKotWhtc2v4BUHFAszv9YsvnopyyKmmV565ZjGopryejAw4N791GasLn8ELYuCzVyDiiXR5NaLVd",
  "key9": "wUPGbh4FGk3JBQYnioFgxosRC3Yy5C7AW9eiFfVhYDoM2u4gipGj1Ec6qgGAWKdtFjLjcjmbxuaq8AAo6P9xyGA",
  "key10": "2PXwJ1wcW5m3Dp7RAj2avU2RbFmjhDPgxBHtMHMN78Fs6uLQxmoFXa3A2Nrfcks1nAEgWHvvAZ7bK8a9HEAVRJeN",
  "key11": "2Wp4ZAXJEP5vP8Yh5uTDPfR881TGMQKf7EAHHsuvvSPt29hjUuV5xAuPwioScJrVSh1uUiEasxYf7CnYRmAmYCaE",
  "key12": "3w3A17ZBfUfzM5DFbTYiLUfLUxJvhYwnNbNuLdTgxNJmFSa3z4mUuf6iiJDUDWEeLQPSrXfiiAVXmKQVaNCZyRsV",
  "key13": "2SRf79qsesYp5ZiJ3EPZy6UtYTeANfTTaYWnrEi6s7iQKVSw1HVNJ4BUGvFhyFdFU6sgwuZ9MB9FQkucPvzmNQPJ",
  "key14": "4hcMDxTzW1x2kUPnBRD9jAvfsgfxsMWAsGBdPpbqVow6Whv5o6dv6ns79zSDxFCDTpxBQLXDHxESA2SQeWdtXViR",
  "key15": "25vvAfzW4R9JQyoruUNjifFPYqHufA6PtEJtU2pjEueewTKkEnxoZ9uU8NQyrcTbST6Sssiw7oke4nhDdVkUPuEc",
  "key16": "4UqffgFqGGeASNENKiWhnHJ7GJ6LYXKX6aYh8Fft2Ra6iRdGB2eW66eG9vQ3UDTgz4b6H3fDJ3i6FEn7Ktzop7ma",
  "key17": "5dzocdeUR2e4EHHt798qM8ehqZT5uCGv4gf1PhPAHXfx3qZPXT1ou9es1gqMwY8EReg8qXCDEen9oBgT5YYkTWtd",
  "key18": "5QmwLzxzrZB6YkgWayudTms1qmA1HzM6ZPZZaFfiiYHuuNgVJi7qn8U6kQyhHTUJb2ogoBxPZx7e9N1gPm6e4x3h",
  "key19": "4CJdFwh3c1JGUodbUWzYzsuj3drwNupDKLKx8wVXhF5GN6t9BwehvcuaFUf9rAKouXndjRGPagHG4tqby3dhGB7j",
  "key20": "aucFAoMJ95xmPe6iURH8rvceUoZtuLwxKDqyX3Pq2CZS9wsdHTXm2MtFk9a43SPSM6DN7iS3iiy643ctSZrYaEb",
  "key21": "3ovLYSrNofwGcRJVdsvAFUE4Kyq7tPLkAMJyMgvs9SSoYBwHtmwDFFN26vrWnnbQdRoAnYxKQDS6fEPnoEsvu8x4",
  "key22": "2Xv7WD4EJYMSu2oTiXzU3EySZXhoERU4Dnxs6o39iLtTbnB1F7CAu1jCRtH1GNQp2zvW81sRcxuUGKy47epVZYvj",
  "key23": "3V59xRc9hK6u6rgqd2Yj55FLQVt9yg69xkNtSo1ubXoeAgCzRX3LKrKpobqSgndwTHnxhn6gHA3odfGvhMFPViqH",
  "key24": "3dSyJBdqDfQv1AHQsekKNbUyn6xnn4272L4oPAe7iW4C1MR6eCBdkjNBpyQZCpHzu4QyKSSxkXFA6Ft5EYbNT91a",
  "key25": "3y2UH1pzLoFCRRvR9kaYNYdi7cA2DfUn1BasWqCyewnCNFF1N41Ao9YYfj25xynHmYYYaRrGX5cUtBDxmUeiC71u",
  "key26": "4EpHdFsyxEgVX3gRPJ2tAa4yj439yQNuypmbPdi963dkeSpQJ7Hjyf4M8DQH8MpUEoLaBu5Z9EibYRQEJkzqJV9L",
  "key27": "4gYsGJMqWGmrw7FKy1w7LE8GdAyeiErPQ5Y8Zto4n2gzndJVv7EdJKpckkMrujoXgjFSrcTgGiSWHYvdY5WRJ8iD",
  "key28": "4pNT7PBJrfoK33QeRr2bKifqqTFRUnaJKdobRiMQ9CbZwZ4K5vy5sbaeKVyU921i6xk7BFPjYUSL9XtpBD3offeU",
  "key29": "5jMBgVGwuc6akPwAwthguT97eBMrSNwqBohDbBXFLUGkALzQt1NqpSnizi75eMZrh3epiuUaBM7gZiC5i3gEuAcj",
  "key30": "3giK2RNhjunC3VMF91G3e9P7SFNaA3buAExLm9stYkMtZ2fw5zfvhVhhWYK3Gc1gbK9Q9LZ15MWxiE7RsDgtc4Wx",
  "key31": "29v5PeexZFiU3zsrqHXhmpCHabuRLDBtKoTEDE1BiFzU89a6vxQaEuLVswonwUyMKCPWeY66A4WzzrUn7mtGFpsd"
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
