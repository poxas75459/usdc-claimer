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
    "5PeXs1Nc1Z8JKrKaaGj9iPreHedgG3EAL54E5zu5pnQfqMCErqxiHSXagWxSvFkJFpKS87am3XWFfedwngJnZ461"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y47pyyvh2G9BANwc5evnCMFW7BNNQW2A9tsprK4vg5dj2m8bE36uKwa2GyL6chkZjTxUx9Dn6VsvdaTy7ptk7nM",
  "key1": "26iP8rmR7QgV6aBEu9A9WCWTdTe21cVTUUV945DQbUFpCmKwSE9U2afmtyFbKadLo8ZiFp2ZjfU7cdjsriBo7qZu",
  "key2": "3s4U2XHC19uq27kwaJFD1hkAHa22cE4CNzsRiDm5adyihGdo2o46JvA3YDBHZeRtjgKH79JDHZMyNfnGCvfjWkai",
  "key3": "rcKSwMSNY5kuPG2ZdpCBjBuzgJHNZzdGsQ4p6aCmY2u4tKMLYTN4PL2AvXLTUQAuDcSqVmNGLM5GE6J4t5pzQxY",
  "key4": "nQCuV7hPtKbjufx2qpBQpVRJ92dvkqJMTP6PqdVT4VuR5U4puyHykjwNP7cmC9yHgp3uYcxj5mYaqgHjR6hoULY",
  "key5": "2zwDwGXvBXModgQpZ7rKhn8QkyNqa1aa9ZkimZkJLWVyvCkVDJ3KvDFKQnb1HCeapuYiiZsi5px5Ea92Gt47QtFM",
  "key6": "4MJQkjm53hGjKomkU5uBTciuhptieanXPsAKpXaYrxwA83JZDZ2nC1eQCx2SE6J2tykyFcn9gEr7PgivARBmEFFF",
  "key7": "4Eay1wPDpaguKBp9cp4AS6RG5eZhU8kQfheJEgimudq5QtAAtyNWPt3v9rReqXVKmUFUGroMZpFt81FaBpmEHAp",
  "key8": "cDDjXbzaW6j6avoaGnHLgf8FwmPFWc6pjon7FsbqtyitABoxgWbTfJzoD4zdjZUAyoaK3oe1moz9sRkp45cEYe3",
  "key9": "698JdgjgKVVNidbSZ8qMhdysJcZfVV8dBma2friwzTxrdmm1y4c7nZNZ2AenYzTCcfZ1TvuaPPaqwXCBhMFecd6",
  "key10": "4to5otmKe11LnqA2fLaXzExHHMsUR94yHqv1qNghC3GGxeEkiqPN8bbLqYTSqAKcHQsEXwcDTHt9fCSwBdj7s5q3",
  "key11": "2ShJw6NRaEuoKTsnXFrHnKfamuHK4SAaqwNxRSdSWc5FvLF9rjDgSbbFEGH8ugNhD5i5GAp4G4cH3Ft2HN6J6H7h",
  "key12": "2VdtJPheDZpijXnrejCGhwejtpxAqwo9A6zUy7YHBZynFJ2vEYj9PcpUQk9p1hFAUGJXN7S1X3UdJiiBCxyXXDKy",
  "key13": "28vFmWa29kouyyXbR1SGaVUNtbyqx7nYpNVTKgrpQWWQQLZGqXQ6wh3nxjtLyeVmsWwEwLm1wMg7hLh8cHiU9r7z",
  "key14": "2YvVJV9KSSQJhguiFnCX7xRvo3DbrGYxzpCG85xK8YsgdjsoCXVwCpt4d6dgR6g4Yr4TTWtmbewJJt7FSLJJyyP8",
  "key15": "3g6rJ9gDk1rjqxQJpXJcCPN4HUz5CFMqVTqo8hcRK4QaSFv6vVknAsWwZoMj4DzUVnWQ5522B67YovKE6opS1xp9",
  "key16": "3L7t9iGQKqMnTUxEywsE2bubgjQA26A29swMJdDruameMCyV38DuQszxg9u6fmPxUapx1rThz2Qr9zpnu3p9VJKS",
  "key17": "jTtdnB7g5du6U2eNW9hfK91J4DepBYxqDyt7exxHyjxuz5xPWy6aU464MvJ8M3YorpxHoRZiPPj9VmTXEktwhJ3",
  "key18": "2sexEKHbDhAY1FHn3baspzo52P7TimAWRSGXnufGdYmSsiKnV1Ze8q2Q8HL6uuQKe95jXRLtAFeVRa8RQesXzVb7",
  "key19": "xGHps9Zy7a9pt4dJjSpNtubnn1hYXuKBmxL6r9hRNUSZti6rZaxFaR4BL6Th4YnwV5wUQZPWPp78iKWDuM3rpcX",
  "key20": "3mmxaZtXEo4umd4JAHZMWiHh3KTYUrGQm6V3xbsiBVmijinZEPGzLviKPv4oGsRh5KaaBA6eoQCJWdcYFiKbieha",
  "key21": "2LaFfaJmD3pfYzgdWemqnzXEzjK7apJBU5xDWm1bn5xNmGVXh9M25XBLVvmBU5LqfQ1i3By9ZnEZerywyihpnbGB",
  "key22": "34Y9m8pnWhnu1DVex25HvruzsxqCssf9hGuA8yurtYgUbYQskkohaSu2HidydpYUndTWLPK6rCacF3nKNhYW5vR9",
  "key23": "Y3fKnfmBgHJgzBHkNgtv3xELugycmkAr8H53q9HzJvo7VGhh7u6zwpsEHdaj8BB5uScfhKXNfAzfT8mxsgEns87",
  "key24": "4tw37v89qLwrkv3AogcuoLSdMKA5fb2vYdmoEtE4cjE5Sv7H1J4dqig1wRfYeYSVZDNpW6BoF74bvJD83gAmhM18",
  "key25": "3xzauCiUB3GKbpi36HFPvEe2HEf4wxbGKupw31JCcmimYXrdfSaJ4aZSoQvcMLQDL9QGQJQk9Sxc4hR4wugDWC8W",
  "key26": "4MH6k1QoDRzrWJwQwHXDyXbHNzNHuM42AWbMNLjTiHTAMBxppwu4ZdxBYnd1GFSAisuwwKVVK7KNhZaFhPQYrSw7",
  "key27": "vGEF8uAy1ASh17ZzZh7ea1iqG5UbqbvAyXYSkVqmov8BnBW4XHBDnWVauWd1UPwMfGx9XQnmVWLj3Rag9Lf32gp",
  "key28": "Ce4FZyUy2p15a668Nt9Bmck968D8tSdnVZ9N2pq3FmHtwViePZGznXqD6dXHkUNrqPVJw7GyxM3Ws8J65VFRRs1",
  "key29": "2drGscDkci2MmB9NvUtKBVDEwsuay4Jjz5QbgaSx1WpepbXRYfhgTviCvENrAQpWwpsLvYAx9565RU76znzwrXPL",
  "key30": "bP3Yq6cKM8cwJV6ZuNi2PY59BviiH6PhhrH9prPPkdTRSm9cNA9T8ZD6LQWMxrGRUefrw6TLKLe9id46Fsrg3f6",
  "key31": "5AskSc42NH9fLhNWyZhCsBgGx4JJYeRd9xv6AwcDv3wcXUd7k8QYuxoN7AbrK5HD5ZN66trSzRqDfXGCgfLee4R4",
  "key32": "Rid3DhvvRhkedZWdRpBeHghaGGTdW3JMDVw23N1V553gpZfX3RdMMfCJojWK2ZaWHrkkPg7XojQbANJ3StgLaU5",
  "key33": "3z5WRyZk6Ki44WDPqyo1sqC8HN3PCC9HZfz1Wj5spw3bS3dknbS97kPaSfUSQrKmDZwNMfUgJ4PQMq8BGY8oMroV",
  "key34": "2SYMhEv9DcEtHEQA1oRdERpmFaZMf6bedvwHDWi4qFNAK48RNvGHmsr6jMHNQrCXexv4oMsHoyjfyKxzXdkpR6xu",
  "key35": "uNpTPbU7CKkwzMKt4zefRFTCHFwwLMxSxjWvss6XeXk3EW2zyTA5oLucyWqKu25GmgwF3QjGsdmVACGi19NVpB3"
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
