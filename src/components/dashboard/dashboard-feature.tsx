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
    "5nQGRBigtz48pbEMz6zUKhH7JQy2fsoLc9AAcvhCpqYD8Puj9rCriafSefrQNsGNDxoH8bTvQt51tcvuU3rKjbG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LhH6xXw2e7i8JprqMtjzuLenqtyttvyHV9zezZNP3KzhpnSraMjsnNA2Z5X6iLGr5VeDNv3xhgQPcmNzLAGiSRq",
  "key1": "4JCFMNwCB2pVic4BuQHaqi6URAHsGVgLU4jXfGSravmvJ8ZgG4dezfiwtJtTRaUURCTABcuU1pdu8qBJvUoXiGWD",
  "key2": "4nRk5Tv6zyDti5Gcgq3coQmBUtpj35RsoDH5UADZ6pWAWZDPRFwnxUhPiK2UdM87n6gqJ3aCoeWCLeXhpvhiYZo3",
  "key3": "4iF83PSeEx8TjWdt3tzyjgsup9zpGdgHkBVa6r7p1dEkhy7wMFmeJHHmdrt3VMyAZG2zvrN6JvpkGVw11g4iY9c2",
  "key4": "28bHxo7eaCbK36ZiFPj4EpELUD2wQSQoqmjkiPQSsDqdkonvZDCZz1FPgeerMMaNEBH6UwWaaNHrgYaW2E4mzycx",
  "key5": "2rEXNUqzzfCU1tbYSLAFtBa7kkg2sQHX2yWsk3B1JMVjGxEWqgEv46JT9TP7Rj8LF7PKHhF3WM7T17WV5wCFH5a",
  "key6": "36X6oUcBcoRy9q2AvHfWC2RThWFV2XnFAR6Vchx2eQFu6pX9PFP6eBxj4YuG468ncc5JNNsfyMR6nDHbm7cdtH7b",
  "key7": "34oW8yHZKJBEHfThdUx5SnyZ2u2zcvR6aTZinF1euqs6wfu73S76FpHx8vY6QBqpMznS52EF1WrgvA7izrA7cTB9",
  "key8": "dYKF87vofdbWSrMzXUm28ZQd5Mz2eAxhWybDG8b7u3hK6TWHD6ZruDQe8Gmr4ed6B9PMhS3Z2RVjCrtUV1zd7Mb",
  "key9": "54wgqAdyAcefGVYoPiESL1Q73avea5uNiG7geQZ2Emf7DyEyeEME6EzqGcQXSXhcKxtze72fpBs7qVafH6cVE11R",
  "key10": "RMn621iFmTykqc9ZpjbsUa1muFVDBUBkTN9p55CtcJPoe1PEXt8aBoYwFPwSKE94kDssZ2fDXTf8nzT8ki3rWne",
  "key11": "64RAHSZy3DLuMoinwKrNcPs8gwzC6UDfsGv4dLxMXPiFMgj5xHy5qYGwAHBgkTTiuCLbLSts3WMPwt5K7z7snvq9",
  "key12": "4YhG75s1wBiUkL4mrwe2LcZ8sBmjkdF1XfXmdMo8cbKBYuaAZ7TZByDgbEyGAEt2S5PTvGXzjB2rKLtzfqjK9tez",
  "key13": "3RPFo9Q4eX9Q7RveoK5DEDwNEAYCCtHMRejc8GH6FCwP1yGgqmkZ2bY4wC4aXUeiNjhRRoSa53mKYULrwCKoFtCf",
  "key14": "NGeEGRxnYLqFoJtYaFNRF1ZgEF7UTjtHJVhfLqMpLZgZaxKZv26PZhgCXYt8Ba2mhqeNBb1UHP7F8Guv2D4Vn4q",
  "key15": "4Fg7M3WyfcwdQkMqqBe31XzX6PLKiDET5bz8q4PkTNSbwoZmh65fqxRRQxAywkopPqGpheiyDRhy2HYinZUwBbQR",
  "key16": "2Bv7BiRgtxG9Gh5aTDmfP9fQ6VBqNT1msb3QpKDz4CKKztgGVsgqUSLccdhTzyttVLoLbLjta7bwpsQj8GFw4tF7",
  "key17": "5qaSZgpR999VNtahsaMrHgWyqexWtergZW7nFeAUFPcuApWPnUFo4SQVkp6EeqdFoaB6iH55ZN3xCBXBpxvNbkJU",
  "key18": "5b1c3hKQQBpDPzjWak6JocZDddGZRMeHGymwPn8VnFqt8hkbbnfqVmvLFzjhAmgNMeBWREGspEsc67ENeiwoZ6VQ",
  "key19": "2gL9uLUeaf7JCgXzn7YuG5mfjzoS49BuyeNxQgwmUkkxeTTvae7vN8iE8UkQxCYKs2kX2B9ZuTpik2YoFjRDBLf2",
  "key20": "3HbxYM2zG3w7M1GP6SRce3gNdoVqKyvTyZwc1ARqpwUbaJ3mY1Yb8hxrdoELvFvfq9aiDVUPDqKACBjH8qScLd4w",
  "key21": "5zY4g3tycyncx3duCp7dpokf1uc4coo4BneAdZ8YQwX94J2QyvLiC4bvfemHYDnYFxAyY1dvr4Nu3JMd47XRM2NN",
  "key22": "4451TaD1dSFsaNBmFVkk5XL33MRMqGRBGqSHevv3tYsG4rPsoWX61XWXg8932Bb1xP8ct2ULuAHJs5hsfMY2npCP",
  "key23": "4Jb4MQhWHsPntduLYRmxEcmUbQVjmzf7KGTaYvwhTAtHgvcW85N2sHRCN3ntSGDmaHeGbpX3F7Vcn6PyLuu5tfqG",
  "key24": "3P5EeVWpWRWtqVaTqaY8XRUzn2Ko5bduHoyMMsZDX1DxKBVLk6vSJakPRpNMNkswezcn2qhqiqgTm5sVPpAVMF9q",
  "key25": "5j5N8fu1YD7huETpq6GdwHe7SbjQWRCUv3my1fLZ5enafW9rp8gZDDvadYTzEYjDARbWCvWg9Z6NXvAiJcTq936L",
  "key26": "4mqiQ8AuhD8WEDEzEge2Q918hVshavpYkDDs8aZLP9rjAT4rPVkvEuf9JLeAFS87s269MS7MgU9RYvZG8XrFQEkB",
  "key27": "TsNy3ytGiLRdDDwrtMpHYLL8Ut2ptiU7XrtYsciEyzBjs1SeqkAVRJGHtNPN8zshPB7mr3bZCjZNgSa9r1PexhW",
  "key28": "2kV2Nr3eSkxmCTeCUfubG2NTRYw9jchWzZbVC772LsdvosFi8isu6ZzJs9Zyb2ZPZWuRLA6hSKSns8uyqmYcHQ5o",
  "key29": "2qaqz9FiccqNSgpLAxzKosrW1ne5p7xUXEbRtSg385r3YMwpDcMKLb8rFGRiSaE4zRtzshJdsd6CJtS95LvGgwMB",
  "key30": "2M1EFQsfLQYzdazFsQLmLrKm8r1dubb9UT94N3RLhFhBr63tYJo9UnkNniytDjUaPgF7BfGdo76AN4YVgdqc9HUc",
  "key31": "gWRuTu5yPAL1r9JSZNvteoJiTutsnRcumXZDDQywiYCsCNr7fUjgZdpufBLbWeUQjPRGn5kwNoyL3PuGfbyEKkT",
  "key32": "2Br9RRmxyJDkXQixcvdz6cxkGUstTRzvR8pmYH9PhTLxrZfHXMgooHPygZr8xdkDtuqgM3NnLrWLZceUxRyFcauN",
  "key33": "2UaSxjHWHTLNNgMetKQHyAq9SkLVc6GLF4pQc4VkDz8yARgGaDESDxc7KJ4wfRQ3Ae3P6kgbRiZasrrUwYiYjF6o",
  "key34": "29wSQWJ79pw8Gf4hiaJfqmYMgZ7A6mtcgjnbamVVSExCmpgrP8gSXjQQptPq3GvHTCKizLvbQnSFPnxDbVTPuAyr"
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
