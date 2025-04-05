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
    "7CdQUnKpdwAqjJtvwnac9HxQjxiZo3MCh7FAva5P6MwQ7wHk7avzBvzJYFxrENwLQgxZ5S44HhSaUxhrcp8MvVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ANBt58h4Y4kRPJNiz6Y1dtQCApYXSU5sdbhRuvVMNpt9qy3JeCq9EGaNyp2Au22ZZ1UBtHrmoA9NnWhETyEneNT",
  "key1": "R3XXuyf9aZc8sMrjpJc7F9wFdipbAqaajz7Hod8s2v95A1eBDBTiuwDYzysD1UNP1B44KXayrD384VvSmi3RUbr",
  "key2": "43vZBRUWXCicd5FdoXjtRaXyg2wBQhSjSUoEbLCmYjy7eq4Z1oEhRRaLkEZ8vFNn5UfSXJ2f4Lxxdn4b8c4sWT6u",
  "key3": "nLZrWw9xmQ9MJSvUBU7gusxDFzFpcwZGvxcBFwhfd4UNJwtqVJGaazDpY1iq2QZCfQczGW51J17DSN4izayaCzu",
  "key4": "47spoXp3q1iKcZ5jjQiqycoAsdA9Fm2yhcLNHaozcqGaX12jxzq7KBLrx5wpJcizQDjTrdLxAhtPBvC5Ee76vu8v",
  "key5": "3jcztGzHNEDAX5HJ5sowBVj2DgEQfj6nZaPsTAtyJdE6tbNMd9p45uCJLK44EsaPMck1eLLkq9WtW2F3Vk7BpF4s",
  "key6": "2DQVP1JUrNTVTZyQTVMYzuQWHNu1fJEyYatoC5g7ufiqkeEsHKbDnZ96iuFy1yTwjCZ25DHixceyfGmF4xubSHwW",
  "key7": "2rBDu6bo5MQWEeztj65JaAorAZ59eVBNQUErtEzPJ9q3BEZH9xd7HmyyZEK9BJRm5N272GS56VmXT22L8G9LYFvx",
  "key8": "672gUyW5E2f2xLQSKCJzTuXPifDk6GVri2TT3SmnJP3ksi3WcWq1C465nWzf3KWcKHZ4UFoJjauGy22MUeb7LWkB",
  "key9": "3bDwkuKhiEVCFchze4t6piMmU7W4fAKwwpAwBB8X2m9XKJG1PvuuH3v4QUvAaEgXHXJvDsDkoWRizgL5WPbwDqum",
  "key10": "4YseSuYpDLKLf1gJr1tBiFATCiB3cZULkNu3ejSQEpEXaPrDBdRZ9ZyLyZiXCjXBKcCMhV4HFjTMTSYz19voiQ2k",
  "key11": "59hXVDq2tNJBf2dZn4cBjLYPSNF6AZdHcjf6dNxiAQJhhBGR8VHu9dv6ty9woH5Aau5KivtavrQtwG34ZWcmuMvJ",
  "key12": "3bYgzcQ1bvcp9Z5Hf5vCoTwThC8cAQbJAUdAj4qaYpDehbFrMDgUk54BqmVkB1UjkHchNE2WPdZH5SDx8MMA5pA9",
  "key13": "3TcDaH2yqkx9A2RzYJYFFyfMQQ5U2ZUinC3rXzGvnaqQ3aE5mhA3wqSEMQCXSz7kqiUdqfn2AJ8iEyBmT4dEo6HR",
  "key14": "3JmXA6nkhW6MmBNNVtj2aHeHrKMPjakuTa46V2QxPiTq3tQEHPEKV3Gh5uj4eUB2NmF4N3twvuTp5wMhqtNw37xg",
  "key15": "Sr6hxPAHHtzi9QkaXesUENRNBSRRqvHP51tW3VPcFWQSoirFFZ9tL5BVyXw95VBjfFNJCzzNHD7cSqenq3TR8ao",
  "key16": "299TPhaRWtNBuEfrg9V94H38MBJrXPHSLAQbkiZbDHdCpmFS8cvRx2zSfabxdm4NpwRWRgh2x79K3GyH8Ewhqpb6",
  "key17": "5a5YtZbTYdNB6kbMguzR6iuTam3dAMEeAzNAhfkGSQq668nRz6HBFc8VufB7Q3PkbGjFeziRfezuERyfHEvPf4PP",
  "key18": "2Q2iAEW5qMkxqJDePGjSWuRVPaXPRmwNMZCDLNEUnaMAaWc1TZgzCpkwFrrZiQ83v1iou2C77tvTduRg5m8EkZiD",
  "key19": "5ShDULeUbo4xh7Dv3NbiUuiju2ND4jZzbaQMJwyXkA1fDiuejVsikeu5rfxhP4DqVifpw7kF68Z66TheoFSGTrMz",
  "key20": "653AW3Ke4fZDPhLbKmEmfhVZhT3b3QARZ917fkExZraFuEL4y3NkYqr4E9MnyjynpwRLo8hWkQT3mJzo2PWpfSEx",
  "key21": "5W1grwLL8x5m8iYDPx7FtVSXe1yKCZnM8R6wiecS6diichVeB5GiZMkGRW7Z7ETt1KKbvkH41TAaStHGdxJeAJKn",
  "key22": "45jTWvzoc9AXjcEBr8vuoaJyG7HCgKteaFbGGJsY4ayjvWS4PU4hkYY3VUDTe5uS1h88PDC881RpNPyvLXH1YhFc",
  "key23": "5PgaM3ToyoyYbCRjoVKQuuYcyryCRpWw79kQMJJey4EpVmUkEqB3J8zn3Go3hu55iQWd4sDSbJzjSCzCLgx6R5te",
  "key24": "3dQN3oDLqZ4Q3AtUPXT4dkxSVaH4nhrXMLA7c2kSHxDY4sUoRBsFJvS6FyQWqCSNpZ9weLRu5GtNdMNiJumzsbtD",
  "key25": "2B996fe8FyNMa6nf9FF6PkT4gn6ekgjQQ4b6Q1ZkaXx8p1i4fDs2ScSsijMocGEXSHKUdk6TLVeEGX8GJ98qc54c",
  "key26": "tciS8bBoPzsETQQc6eguSNeYybNsHo5gcUw4Ur7wZ5jBRRmVqGDiYGMctiLH8seSSDCwEL8bUsdTtbvQoy1orEy",
  "key27": "66HU3BtMnEpYwNpghkzJMA1v1pVWadxuVXaSj9QMyG1oYZQ9xUjE7VB2iun72tZ7MCNHkYkE3bpmWchTKdfYzGsE",
  "key28": "5G3niqUCHuhiAJQvQdZLFVCF1ripgTFY7XhyzrD5Gey9C1nEUaWZHb2TdP9iZ14Tjot5hDD2R4QvbNQFubiXEdG8",
  "key29": "3BT25sXtNEQ9QtXWBT72nj4oNevNf5V1mK4AuzWWEHaAzAwa3ypucBeBUbUgsBossjL2JFqADMXAXtfw9jCv56oE",
  "key30": "2RKzgxUQoH41ZzKQJvQNoDdGjDenaQ4NTWMcGoCAnrnBrnLjRoDiwR44rK8Qm1ZX2iqHFdqVqF2qoZssqrfTptF",
  "key31": "29Asgk8wAWfYm2sd97oeTGxr1rwrFfkXk2PzU37t4qRKA8i5PFZ1jxs2GKVgFfdRbfqwWAYtN4kRhAwZtzjAWupt",
  "key32": "4K85XNfDKUHtpDbBRA1f8yxnBwxv8rtufhK5z23EGVP8u4amHgEPTWXixgkbyRS94UPsRkdDM2hQpvSoic5L8pDm",
  "key33": "4rFbuZxtgVHmtxKdTLcEfzTX3uYmRwY22Q3ACT2bCvXARV1QkSEGy2K4kCaDbovey1n6E4CHnk2HJ8PUZfrjzcv2",
  "key34": "2wKBoJgZw89Hm9f6CJeCigdb47kDmmEe1ADxYsgi9UT8P7VHi6bsbHzhdbGgKqJkqWAcgQEL4fMxVZC9uaZvxJYH",
  "key35": "fmGMLjEkh8dDd5ZyApuDdFTr2tw5zK3c6pm22aLeYC3oMcnmaoMvjDRNU31ofcj4B3Jpy21i3itqFqpUbMTzsei",
  "key36": "5FRvLSzSghLJog2xUmTySwCfktmKn7ZpPXHWFWFbzzgd9UKZBcY2Zp3rt455RUJ8f9bmZDcXzpYCe43nfCuFn7J1",
  "key37": "2QkoCV2XoBggb6ii8kNmMzjhJeQ7u8j6hAHwUrbE59mifoNYBVdojv4ziUr4WKkFjVTDYcVzypT8gZz43bPFNxFi",
  "key38": "hTWH5kSTgCcri3WYKQ4UXqM1kyDRVNj9iNjQAxGnwM9LxJVE6t4wc8FZC27WSwfnkSLsUXcnjW6SNvk2EW8ZQKP",
  "key39": "5RbWhfjzqBTyaFy7whakA9VnYk5thv9ZQ1YN4HyennyerGTMJNEuZAJSStCAyWNkaXtqZG93hmeFP1DvbgTDEcc9",
  "key40": "3XJ9pPwugW2RxCjdshnhzTpqnvo2B5FL4Qmw5kpjgQdynMFtuKmePQyjaEY1zbh5wLNKcKBtuKvBAR4ojG979hHo",
  "key41": "2jznxwbAawhTnqpT6tsKDafEWb5vF5NDR37tCwaEbX46khAiNg77vVPWxvEpHgbyjStGLTRG4oRu42pWi95z88yz",
  "key42": "jd4xWz2pF9SRpUtVKJ128gLUm14gy9rraNCnj29vNNBPPrcQeVW5Y1pbfUXSwX98do3bQxJJGZ7ps2YgMZVejhr"
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
