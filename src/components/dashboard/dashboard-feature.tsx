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
    "3uDc3NUcsyMhGqDL2FMmb3gyu4mKCKqPVBStAEr1Ww56XpQsncybo3iDdD5cCWXBySKy5mKJivpysBopHhKs8dXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J5Yf5qSufE57U8mDgZ34vNwfJTYZeijW3yYygYyqTBpMUtmrKuc74ak5Tv7jhxdhA5y752McsD2Q8NDEb9anYWv",
  "key1": "31dUdKPvPHNbwTXpmuaWmzdLgZLMemDJ5EL12DqBDxfDGMhvZMfrW3FN3MAyBiyzZXdxyRj9nGH5MLowY25osJ8K",
  "key2": "4oqKrSbw23mhK2MJoT6n912MPj6c22Rc7eF9AesSx1EV5irin2rL4QYmzNVRDqBs6ycwZ2JzaZtZ79ywr6tpLiGN",
  "key3": "28n8VWmbTd7rBoQuecPYKf3wzR8pqNoTWnmwSoCECdyBbM9WDPSYctWRjiRwkN7LKzxaBp1LNSttLaq3LkwgoY5L",
  "key4": "rbdDG7h78GBYwhkL3Vvw7Y2Nvut3vPrx4K8LzbuUXg2f2DbKnxUhqo3zac8cznHag1mMA37AyUNJDKXVTr2CFgV",
  "key5": "42AZZYtWQzs3Psfrm6Je8Q6jSZd31sa61te4hqnh7CsrwR9SvtpEc1f2nEnw4udhrsf7K9qtERWAQhj4YUqeC9Kh",
  "key6": "2FDEuZXVXebuPEpmRpWF63AHsKUc9ChHZSwJeeeGfrW9Ebz1Bb39XDvKL16uvchy36DV9fcLNUh2hMxh7VWQhkHf",
  "key7": "38Zimm3bVgM6ApZusCm9qdzyRR9EUHFEMJVksMq6hq9qRomPi4DFW6BQSwdhkeaJWSXAJchHnNtsEopJvwv5hfP2",
  "key8": "vzUvBjv4XYndR7CLhTRpJvGK1igQwMFp41NMVE4WSrzsVxf6duyZhFAPwKaK3tMHXfgyHMAUNcCtXzVz9v37Xcw",
  "key9": "3QjzGAZEF5uRhqLRssvwP5n8i9VNXw4EdZdr6uChaf4yN2sXRYYUSeDwV1mQYBPhTG3R2FMRJgBQshMx4qd3NiUn",
  "key10": "4vzcWYyH3eHxmU2Hzi7fWuMcxudY7M6dpUt7jqs91tbeR6R9Du8z4C2jRFADKBTK4o3qAUTv22J5KeB6WK1cxQaL",
  "key11": "M8us5CMz7fyuqEmqCYn4S1MeYSvg4TGXjbkWnzqwSMT8129u2uejBgmapXmG35XKXXeAKDHfPTv9SF9wQUudixY",
  "key12": "227rhcAKDPeFRAYfwXAYXksg2UQTfEE2QfUipUyYDw2JWBayWXsNS66vWpXT4HU5q3FraakXZrB9TFiK16QHmFd9",
  "key13": "2SAqBBbKepXNpfzSAf75uAJN89wTCo2MU7ZdrZEvwEkqaWbR75w1pqSyjHBQHk85YSQjNyZBB4c7ZWJwZ5C6AVj7",
  "key14": "4r8QR4E8tm819cSsm5wrbaq6k6DYjSe5aCm2nqbDQYgvB7A6GNSoPs4dEtTr7ZaaZVuh2NHqLvY4e6AKfbBrrtF8",
  "key15": "2catXbgMaci9v4ciaaSBNYBQ6nxRDr35NwjyjffmSAhPMnEi81hZWtTQn8kzcJphzD2XkHPuXfo8mgrPJisWFKM9",
  "key16": "48nquX9ZTRt7VLqwgB4B6SpVpkvSYc6cMAeHnnrvnZjVFCxrtPDgBw81P9eBQRJgLdot5VETPFM3GgTGcyPuub2Z",
  "key17": "33mUe6k1Hi2YrXQQ9ftuKW3UAobCnJ42KSrzDoVQoEmzk78iDzM2gTum3bNJMAVJzDJxR7BNa6VSotzGhg2W8rDr",
  "key18": "5A2knhFWms3JaRJiyMe2jKTzEBBDjK5vetXPQwXeCXtetsSy2mLdCKuJ5HtaYUofP21Ycndc8fyAEsfUud2tp3K5",
  "key19": "3TydwTfHun2aQQbYYNHrK9Y7EX9FdqeUFEQWpYD9UWABZb8W5NbLu2UueLM8kw5Mz3Kx8zNBZKsmTx8ZwSCDw2ab",
  "key20": "3M91dMMGaxUBwpsAjVnS95xAqPe899WkVqQe66DioNPpcw4kRz9nZcFyeZEY3r6MKgY1QvcSYq6d9YDoEwcXKmF9",
  "key21": "46DmTfjk6D4i48vCQVoNbG9RbYdwbAGaMPjzi2Cj2V5PgiPZRyvAtS284JXLFm8Y4thz11Rc2aRnDxZ3bA4p2Q4g",
  "key22": "3wBuSYMQqZrqjKcXVcNqmBXyY3sc6PUj243MwHhPWvQw7b1qDw31bVp4xsBkYUzBdB5byuR7Q29GkPtbXNqQkdhC",
  "key23": "4sbXqPSM19PVYqBsDg1H9VsT2TCT1TDbfeyXKRRZHY14XB5xujxjGXDFV31uJ8KPJCAcmkUsjEWwHE8nUdAufKsx",
  "key24": "gM28ApuKSX3ZcKD3DK7VWqapCPcmBCYNsMBzFrghmscafyQinMZ3TLwCvTGGsqd15MnChcmWWFKAMoAgPAMABpG",
  "key25": "21x6BqxEGmtjKoyXYaJncupippScZV1P9Xxat9EtWMZMQGRA9cs9mxBwXgh7pW9pKbC53kjCF6nfznRnnZxork8b",
  "key26": "hJGXZGUrv78pKRHPK9wXF1ifpi1DcD3Zx7AGzXqYnChnVcYY7JiTATDkmt4EqPfpCKzxqg8r7hYx2KLyzaNYY2u",
  "key27": "5bVtSzAGTmL6QGmUeHPwSF9RgzEdoQ4dww2GfHY27uBLWEcpFaRgGMWs6iazv6NEQZ3XVQoysAgeN3Yx7j7AawQX",
  "key28": "5s3q7Eff7KEjYP6pnW1z9woYwdh4ySawePx1DGB13i5aD54FVoePekTF4qxAMVS6eGdizeBE1BKo3k5S6uSg7UaD",
  "key29": "3eobsEzbRxLfVTX7dUBZ6AWyTALLHS615mvuNjVKQCyi38ZJmPj7EkFtpRiCUrLyG9SLqTbtgddnDYt1qmU2w2a1",
  "key30": "4J6yA5rt2cNCzeY1tWDA4NTHNhgtE9LtKnAv7fKVDTQc6yDVR7DMcJbaB32sFpGmkjwzD9uNyPhvRGoJV2SnRz6i",
  "key31": "JAWNaGs8rgZ9bidfjx73j9vGfFDQQxTj5PyXAgarrmq1RURgu5CgXaPHtx7yUeA7gqEkCrofRgMYAnYWgPuG1Xf",
  "key32": "wx9XbbE2r4odih3worQaNKXR1epgnw1XFmAr9KF9owR2EtowFUPG3ZtHJbPsc4KuwgDeFUqyoqd5dPazSKWQ9XD",
  "key33": "2XsDy7Lw4xHQxwNmcJZkNyR3JrBTohtPn265Khr9m3JrJny8jvg78y3D6wbkBAWVWbY96ZX8tm25nuPa3yTevtMo",
  "key34": "4bAhi7tiXqHMng3mCpwspxfqAs696qZSF69wddMxsewLzi8mMY1P79qqrzhoac8rmALzZKsUTt16Be2oGo4ymt7z",
  "key35": "izJapjayarKhNyXWSkePezZs4DoSEFeejpjXHLW2ty8qWWWwgyN8fVxbugpina2DQiMpJYxBzA2NdrFG5uhB34t",
  "key36": "32oXfvwQX7BYaWqhgJPGqCb6bCXZEWdwU1DqEV1uMSgYByGeBQMDsxiNaTSNRzk66PpLvArBo7P7SqGgkbMPRnB7",
  "key37": "4bZmKz3Wiw9ToUz1a1vaQMYb2r2hs1V2scwagYW15V62xUuqzazAtDNZEQLN4GFPWK3FrWpa8RdhfUMTNCJvqGuw",
  "key38": "4XstK9CJdvGxwfPSdc6TxVCuqUUQfZUq8NAVDHJzqZmes6D72Zmk68yjD4BGSxNv3shLCzoT3wriSgrEzLGdzQtn",
  "key39": "5cqYyWWRnTz1HijCeNePymThHngA8ffytUyN3KNVHbaad7cR3V9j8SPaFSbXKLCxREcy49c5e2fsXSEpTFDK3dKZ",
  "key40": "3pTj29eDRMteyNyTjzRtfHs7h41EENkR7i7UKJG3iikicPR3S7kAFhQc2fCEKhZTEs8fjzTUbk7f13psxXMAt4q8",
  "key41": "5kJbbMrwof8JEYUtHf11Xe8HJtsHg8YYQgRTLn2rs8ABr5m4tTJMjYyW4JtobUPMVMSFBWVStayg1qXYGoCch2ec",
  "key42": "2JwnByajUEMTHbZsTxoyxpeKwvKEnZCztr6MsgY3oatNihbQgjd6XgSeKY7i5re5NCmuzBaPGTK8A7F7nGps9xvE"
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
