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
    "4ySHfkNaffRJacxo1C5AkcutBeeUdkfptimdDUtvUYZdaNbsc48W1PaUc4Szvtx8o28artPrgA2Kv9bpb8wtavio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cEJKaR5Kd1pDE1ALLubXyuc5DADoKGLnWUWTxa4nLKHKHaVPX9Y3kJWhwsF97EQaq8s744UUW9NuTuCwVN8o12A",
  "key1": "5aUmv2mdjQNCQiNTrR9tjSgg3AWyh65oihfHyGkMJ3GHZ6KVyVmiQ8MEswnzRcPseRdygMPAyaypsaeP34cZr242",
  "key2": "2mSjtVKHqvcPQRJC8wu9mDj49hA6WRa6K2gKtC8XDXrdGL3F4D6RPsZ5LDhVezzk54YXcDTaN5u4PuYLgvWxRabw",
  "key3": "31ijTDatheJvtwGKGifsoRzcZwmZumAmxCcXJJgA2cjeoCh2FVvAS3AFZrgdTygakJ7EiWNZhawRu9aX6pqhEF1U",
  "key4": "5z9WBAAqxXEdYBgjKCNWozvaakKrjfx8ddWZi7bQhpJGULhUL4wtQiWhsjxpfvVo7w2YAnu6s36QeZ7pEuyqzBVp",
  "key5": "3seNfGCsRtn8cEygX6dgNSV1y3pPKhyZe6Ttqd6Xx72WZ4X6X7zAr3XYP4NBc5gF7Kk6bQDFTHM1ffq3BAbnfi1y",
  "key6": "es1EPZtV6rgXewdADGZPWHtViekgcfyk9Cnm4wHgVBXhWT3GRTD7tdqveTqWzyUEcWbF2ttkmD1nTi85eGTNGZF",
  "key7": "4fxRNWEcswKA6Gbj1zqqTBjYNP1UbPJqo22zkhAFYKTP8zgUXEfLqLf86sckcUgN7tD7JKuZnrs9uVxEYrcYADVc",
  "key8": "5eUfR8zd2mUFX7uJRuJyXLuH749nfvh3NtJ28Zn8NsRMXrt4W1LrFZ4jMkvDDVBRkfRahtJDuDCErksD57j8ACTh",
  "key9": "4xeG5AjjdaFpWR6YjDLwHSrwxsui9ZjEBvjraoV9fTAGJHzdN8AzvHcUmxyrWzuztVtpb7sXLJGCgQNrXGogpTck",
  "key10": "3uKoDmaajJqdpivxKSGYjnt487gZ1YPzjKkD9wb4AtT36Qcos12tdB3EzkqSSKkPQnoDUZ4yqG7WAP9eTNhiWbCf",
  "key11": "2WWp9wmLXP6Ho3oksbtjSANLNpzLKB3fWMH2QbRZNrTDmJzKuuPA46kc9DQxhuB6jwYieVETTiRxai78bjn9BTuo",
  "key12": "3FifwRc4PUVCYrPF4E7jwhiNdvSBQUdVjQZGjxQAMqHW4LmnNme7yv7ky4vEHFvs9Y73qTLXBNPLYLp1vp5unV99",
  "key13": "3FrXKUyHwmPJ5wcvm3SX9hChK2HU4JkuUHhvRYow3oRmgc9qCiMNXcpUcMdKRbdxKBLqZF3VhFPpafRmCnFUUhXu",
  "key14": "2Gw6CMVjkDvygKzfjTm5DREpPWNoKZcx3s76G8Wbnyxcv4RcjcoLts7eubZo36jgUR5mU81QRwvjFSzB1zDUPfx2",
  "key15": "E966xKDZdpJaKEQS82CAHEWZyHEVPCFWCPfH4LMLLj4YUe6YQmREDULdHyaKRK4PJdKEuhCnuCDLAm2NKfKiyz4",
  "key16": "3khpMLMXeBuW7XqXfy7LVeSxuhjrcNWNnsNNQpNBMYB7NNXJtJ5usrzyZiBtDwZq66gtagfEaYhx2x9MwmpJJYbh",
  "key17": "3cTzkWYeEhyU7ohBZfyPrevYmiWfsauB4UPP99VwfvqJis3d5YvS5QzTguYnfTssjtDPWXvEoRjZ1LJ1qbGerzMA",
  "key18": "3f4bXzLHsQrai9gu7K7PHqRmti8UmCTLGRwHQEnYDqeW8B5bKHbaT1J2bJBtNC3GWAmK2snyQsQ4w5H2SVnAnaTU",
  "key19": "3R6Us2fMLXnqfijJV9P4NYAiN9GcGozjxoXUk5mm5Xv3DoGQtKxt26tGGDtvKKz6RrshX1eHTj2ESL5uDa29rf9H",
  "key20": "39UkUAo4LtZKu1niaFSAp8dEHYJgkaZBQSVSvAv9B75vHPfXtth1sie2aGkJxcKyRk8BYgaxnPVgxRZ9NM2XRn31",
  "key21": "32KxH2y1LhFzQn1Y8ZZUxJH9eSYk4tTKLxM9NPgJwqSS7A1NjYzTW4hYBU1sfPYqJuhZALoMS4JvRy9nDEdKvP1M",
  "key22": "35pXhfkrN1P1aw5VgQDxQQy7Q9MbkLnGnbrLtpBa6uMLwjGKfrZJ7oC5UCmMM2XoS3Wsc25CdAcinZFCM6D8v2gJ",
  "key23": "5GXEsQMPECWHNQdq3dYdokyGMsj84UrPnB7JEn7CmGHCUQpKBjBwJ4tbnTkKo8ERBjQQbLkfUFpKWB1exGsCgwQh",
  "key24": "GjzmSunJ1Mvs4frvJE4FTnhnJ9uU5WRksRhHGPSmxTW5pkYuL7GBHERwV3pvKzkdvQh8QUNSRSJvaUYfs3RGkSd",
  "key25": "Kgyna6g2isPVt8JEDCGZxgB5hVpZbfKLAwUxouNhKeoUDAV6X2ozLHPmSWMq4FhDp9zN8Smiwu7a3LWS2Qc7Cd1",
  "key26": "3d8YrYPaMrUSieJZHnwnDsseZ53Rr8JHBGUWjFLrBcNGzLg4Cn43hrGZHpUs45ppyZ8bzNy6BGSubHn5YuwG74n5",
  "key27": "5Gx7aRiGXHDMy2yzxrmouf6pyPzpn24zTjVfSyRJykHkGBcMqKqsTubzMpdbmL6p2poXjckAmcMNyhijDFhBo3f2",
  "key28": "2bytFD6N5F1EhJMchjpptxC6qkGWAF3msbZnN7yX3axeaVzyECqDEZN1LfdWwvUQFm7Jg6moJUk4UdgB6m7Yynhi",
  "key29": "4z4g85RW1N1DjbvFekksKRdfAvhBfqgZhU6BEF7b3Nu4d9jf7Htwv7YXuxZ6rqvYZu9ss7jS2RhzWDJQYacmxz3F",
  "key30": "4xjjtxqb2DA3qHu7Ck3gHGKCZuRSeQ7hFXs11gGL3n5ppxAMvvrYLfKNyhc2aWTfYdPg4LWvQbhvuVumxWCjPGyJ",
  "key31": "Wi2NS87hqvGXWhFN3YUR1FFQLKqkBNvMTRSWPVQEHPbUPZ1x2yDgJsxKbZTF3snHPc6yJaDSSqPyBxxwcjaTo15",
  "key32": "5baQyk6A8V2jpoV4hUwvkUyjfajKYogdxyrzqh1mLrQkaNnWvqJHf296B9qrLX9kU4MGDWUkDw7yg4z2iw6erf6B",
  "key33": "4A8D856vPE43GhMiaHziga8bqgJN5pMFthkHtx8pUo6CTUcJggkHB9yPA3YkCFdnqaTU6ddQRFAVGBdREDK5SeeF",
  "key34": "4f3QkRcaX6DArwGWfn7KMPRqyQL76N8qL96q2HP7g4gRPWUFcRkE5YtX6652CGrjRat45RoMuubpJFhKSJSRetz4",
  "key35": "4UMyGEYi5sgwXz2kN7jGaLYqvDja4BWnchqiwjh4notKVgbm6iepv912VqD5Wt1rhDai1BtCgA9GcwqWzN6y8iUX",
  "key36": "3afaSDxCS9LKTbpum4g9mnagowuSu8VBnK5B9sZJJRisryhU253XJSYzhwVQBmDjSwKxSYkT2DgzvYKeAhYfwrAh",
  "key37": "3Er6TG62jNaK1X5J4xo6qgKdtQ9n2WHpckDpZe3Fpn8ctBC5UKoy62iM9XQE5uzMfD9ZxJ3FDYhjSqDtJ4YAcRuz",
  "key38": "UidZCByxP9YT3TULsfnxHtzWEYAQqP1Npa3NebFQY1g8HkXozDzx2W1K1dsUzCcYPBHrq8sWjkPZZbYVwZu1MnS",
  "key39": "4jqCkseoX3S4UAo8dzoXsLxrpsqc5U8BEgEWEbsEWtvudNsTmYK97XtAuY4MKFh39s1Fg6jekqDU7EzxLvFF7F2e",
  "key40": "3tQApPgA38z1gBT3kbQ9ujuYYEaik2bjkmPSUwiXHN7m3mh6fwmpdfrpqjegaDQBQsUciiTjVFkVQBR796Vbrerv"
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
