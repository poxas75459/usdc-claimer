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
    "3UVqnxgAeSw4f2VMfqBMNrH7Aehh7n1o47hXCGZtiLPbyKmUW2stRhNM1tWLoTZDHVD4hAePRpL3iJrS2AqjSKyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uTHpwQC6x8WnKSBYa187Utv8S2ivLT52sTqoWo4zyg4gN1f2mjCyQyGycLvDKAQvtjPhLN6yTsBouetkSyK4Sr5",
  "key1": "3M9StXBqGpxGYEd4aFs4Yh52efC8NtdZ2jNh9SyaieicZhCRyr5aJ9sxZcA8Nmw1YaKkzgAoMVqjCM997aBVAhBF",
  "key2": "4vR9WWvMbetGHaXG12mq6GrP12rmWfTKqcbtTwD8norNtDkuRtaHwCuEHszT83G2i7udVDTbdtZJ1YBzixmWoxEi",
  "key3": "2CvtKJwud8niWgYngeH8sRx9Q2QuAxzf6tB1Srr38ffTDgzR3v5kSnuktEWzyRYShiUhQyxpdZa5Vvcot2YkrKuW",
  "key4": "3bMadg23EKN2VVAV1NcjszXEsUZ42EtLZokYyNsu9vpK6Yx5JMfzYZetYSQaYQ1uGkqyaWAyZuNRsveaqDYUb4wq",
  "key5": "62aJiY7kzw3NJd3ivERkqdCZ2VSxYhyPb7TJAK5iu8Z2TxyGsQjQH5GtLSAjmHevnKziAqikveMmj2w6abm51ksU",
  "key6": "28sf8xD6Jx4mT6iJn3hg49ExGHSaoGjffFkxYj8tHwSp1AQXs5ArGs6jZDXDoZU73zmykBbWT2YmNwsDzpXRN6sZ",
  "key7": "DAqsHiEFg5ESWNzDNtppJqWjFf2vC4friLpQsvygmkZm22kkzVBU15ZfazbbnzBuDAGwcHuZiqfkKKZqkX7LBLJ",
  "key8": "26KbevXpD1vza7nggWPatgrVFRBm4ssZ94wmiNn5o7u6A3rjJHp8ySBs6vWSC1K2ZLWqcfJD9deNkymnSZrEMRvv",
  "key9": "3c2g3gECNK1yKWz5wttZVVkkXdtgQ6snkc8z28KfEbfsNzy8gV837KPzYzQLf6SnnfT76AsDvzkY9LhpZHpJL6Mg",
  "key10": "67qLrShZQY4uaQbVVLT51dpE1PeQZX52fDGZA3NSNycMn6Fk25jGe6sUQrxjZ44q6fosUoqjzRoAoLBS5Kdue4VR",
  "key11": "3rPoBY4Pwx57FwCEUEnRo5f1AwMBQTnqCL7P1DZV1uNeWDRD4Gmv7vDed23P6D88BzeQSMLZMqz2b7TN4qbQN5Wu",
  "key12": "3rmERdBDuE1a6CF7Qqw5yUpdP59SdfbjScFpg5yXvtDbcRzLTPpNLMdSXCSvEpTXi4irSskfhYjj167SiFj4o54P",
  "key13": "3rGXN41boCCkzp3gT12c5vna9GKjrLeVozHSDM7o6SmqXeqthuJgcLLSjfZm2epPn1mVLRq97j6PDje25USvYpAH",
  "key14": "5ALTjip7fdUd3txJvn7NZarLMqoahr2LV5p5BmTtA79aJY9aEd9AxpYFX4iY1WoHzsjtaijScfFLMx1eJZMXSrWL",
  "key15": "4rceEfhiptEJJWT7LSmFQFoFSmikS7kwz6UAZEdaDyJZ73CFfAf6V4iJ4MVKAh4oafBWjGw1SSJSduYdkB5t8BPG",
  "key16": "4Ckni72LsnjnLgDxVQ9Bzv6Ub4UiqotfugAUdrnFYUKsaKgzBJSJDVyGpSHr3shz2PkahgG8TXAHqSmMzAXB6rqZ",
  "key17": "2yRcM8VLewZ63fZ6gWCyv4ug2mnPRbAKaaC3CHkxqQLeLFLCiZkaSk6KMnmMXfHSwkNR8WjtPyH5jGYnZebqhgHX",
  "key18": "To7CruigazkusAy8v52LLCmiX4ai8LpjanUaQQ1YAMHocvaUxaeiEtKmokXawGXUQA7zC5b2ppGSP98Hzni3vTD",
  "key19": "54zTqowPA9zx9AADf3vuzUHvWuhGFuCzFefkqLhbjDQkEjTUYTPyXbQRycXHPnK6rCsJy7QSfp2UhDm3nfLFznSo",
  "key20": "57ea6UH6xL8BpeG5tF9FcCk2ssDWx9AQo5CfLB4T1tTawkiU7izAWPaB9w7qC9cZNV7Tj6ejeBeCBLPkodA9yJbZ",
  "key21": "5bJwtUyyaFnQzsKUQ8qtwc68uZYLDSKPtVu6tVK3G9gQY7EeeCzELT4v7ZwtwpEJsxDHG7S2MvxvkjkcmcSnDobd",
  "key22": "42L8p6eXSGKWjfzNDa4JXaAamiLKdC6M9j62n6xyZxMsjHnjcHDyvQ2jMJCUxThxWtKq1APLMY7tQBN2HArD8gL7",
  "key23": "3ubDicBf3K6V4eSnh1XrhicVUaAGTYN5Wge3UhsN7qsJ2D5NBpLQwKBPqKwhPjuqGBrQc1JHQBvEMUcLMBYKvgNy",
  "key24": "576yx2kAfAhWWirgKR2jv6vdzegdCQs2aBoFFNr6LQQpHNbCwzEaPMCKRdCk6qd9HJz6tUnVmaDVZi9AbxJ57Xhj",
  "key25": "zgoK1Qc11CC9r6BaGXpzKYJWYP6JfrDw7nQaKSnRMhXaDLR6um3UXMTCgoShri4qnGzmb186bLTFztr24hAWVdS",
  "key26": "3jy8annftdzG3Ghbx1M8VecBgBy83EmZG3SX4G6uffLPHLsoCDFdN9d8AskLxZSHPcjReVwk5nUYDD2VoWpDWoA1",
  "key27": "RiarF1ygmCgefjjgskrDZmZKAKqr2KogYz7RTSgf6wZ3TiFDeK4qoqPgb4k6fqdBe6MnVbshT54nJfVvWMTvYk2",
  "key28": "2wkjuF47jHqdyZBWan2MYcRkR7EqFvqR7wALjgpwSMFwr45aNTsGfSQ7cnpGiw3aA9o3eG4L9fE8hBwEuxvdWyk",
  "key29": "427eWLqPbFQPw7X44Tzai5r4AfACvASbwQ3U97T8Vyx59SuQ7yPJsccovBEbJ8TiREkzfEUKG7gjsLXtZgAonoZh",
  "key30": "4kHUyf4Gb5ujTWboUjuMNtDvmpDWpfBcRX6mxaY6E4HS5Qm9Dg5CkrZ39UR9PWmY62qABxhza5XF8tUQCV38mEcM",
  "key31": "48vLsCursGJK5PfJvkSwJkZf46hZRikJLyspnt9cHMcQGDWuE3et4Rsw99bPpqpmd2Lo4j7zraatXPtEstqU7wu8",
  "key32": "4hLU6QU5hsvUZTTzkH787sd7oz2D4NkVqwBhArDnHKd1mp1FVT3NvtjKjfkLxTcHwxMm2V7EEqxYWW6aThQ4Eg4R",
  "key33": "2NRMsWQZ1n1LcNKQkCqjjfbZWxbKEwVKa7rfg4geGVAZgSmTaRkZk5FYL9f3KFYzAD6evoXWajRMNvviknRXgx26",
  "key34": "4Ho8qCF8ERtdYKh4wCbJn3FtXWoqHJLGRTB6p2dRDQK36KQy7uNX1xo7D9eYmmGFf4LNacue71wCzpMXrwLWbQYR",
  "key35": "CHZrhkX6qUFpVYbAKkSAHDT59L6YrhVy99KYqrCvyN4XRLMzwhiKyRTe8N3Cpwu31BEAxsdJiYmjrQDSjdk3w6h",
  "key36": "4CSeJhwrdyCyyCAJynMupTJ7PfGD4pxyppBjKFzhpTEEtpB3cD99n6NTzwf9Ez42HoGwMnjbMo4iuQqCTedtB3ha",
  "key37": "cnzG2oHekWvgPcJwXEUhrSWhjN7m3gvvD61DKPut9EVLVA4J1f6dNxDcS2Zs8SWwkRyAwaxRL6w4pTNNEyagrKU",
  "key38": "2m6Bnih34MbdCdoAndqRLbaXqQ53dGDQWEsAXn7Wg5XSqYhJZV7tZ9YSC8G28zJF1HiTe96qLDBojbp4YzQX9Y7M",
  "key39": "6383Vrzb5fB7BUbJGxWodjq17MMets9mTy1nA1vUhGujuKDaoq6CViXTZhos8PEMESUjzcMUAGGqM2v5UFFeD7aj",
  "key40": "5jNMhutTopo5TYJXgBzXdwW9fYipktpEbWv5rGk6DU5RXumfLXW6E3reVnwSNScNeBxVe81i29mHfET6aRkGc6wu",
  "key41": "51Pj8qS9fTHgoA2ug6qEvPq7TaEoUqB9oPhtcuTM5tP15veDdnj3L6TPVSt6u6MEYAUQvUnUUoSfzae4MicNdb8T",
  "key42": "4U778zQEe6iCN9HZCDiXK7ZeRQdHMm3uBLnbSU56N9swjbjCcemNp7okH45mDVj9HXcVK2RbBNkVd43FgW8GZgMG",
  "key43": "3VcM1SMPVjEPg4XJiSt7TDwCf2FVY4jAK9Jv1XcNbPBQGJbZ3LAZQbcWT82uKH8EZN77ZpBam42UdDhn7LctUzFk",
  "key44": "3HEqnLtcDCAWJUJZKna4GxiLfoWyktuQPbQN5hjS9KLSzRF19cRHAMzpdpqNzkQvjadm9hLrEuh4GHB8t5ohyds1"
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
