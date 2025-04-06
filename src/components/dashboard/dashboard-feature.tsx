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
    "5xok5F8zAXTXStNLivRfgDcWGAEbgc7ojaj1tWgwAHjej5TaSkKBZPpd1zxs6As5Qm9zDVjbN2QGoLYVUbEUXeNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iJ73GZRw6SYZJaPSdsxPJq2MQDm5D9diaUQfBo6mrWk2CDGQBYWHtVxmgL3z5Zpr1YWSQGADNokCgTQTJNKPXHx",
  "key1": "5MLySu4rSinWMzBCXp8cnuv6EPmFcAJCwXR5VwCvuSdrpu8opuA9ZJUeaozgUhfKkaRiiXaZNjazdWNswqULNP6",
  "key2": "3Ju75k7DNgyVE2kcGFYvARtNcwk4VFap35yUWTvEQnXYgipkpg9hHkDzXV7ia2z3KRzufd72Hugs7KUHcHx4EtHH",
  "key3": "2rSSNeqEUuDHjXRUvSMLKM5EsfK5Q5NGnRgjE1GZf9o76VucPqTJjC6KxwMutf8VMczj6ePhKW8LTBwftp5fF7kf",
  "key4": "QQvSZ4Y5HoQifK2MRR6FU669Dye1KDFc1v93YmN9CMmbUnrsYhrN2ZuU7cR6e8fRnj4uTXu4N7X6Kmgvdrdnr6X",
  "key5": "5ncNpSgY1DFxdCNfDyAeoieq5YNwNCQidsJhdhZ2CPHz7SwsNnztQMeRLyRziWKXMQLAT1H3hUqZGNRh7dJyxVCW",
  "key6": "3FeZftYACF4fhhdbcP2vbwRG8Yffvq4k6nmzMdya95rdzumhZurqWLrP8GtmmVz2c1S2nWxUCWNQ6iz8N5DtEApJ",
  "key7": "2HATnJnEAabTeLAW1eF7geAKQfVLyPY8xpqoA2XASoq2J9F47qqEthGpo9kcxBLopidsQpdh7bSUH4oVSHH4246T",
  "key8": "3ba6JTJNSCiCA4DZb8GaSJMSELwevNnUvR6XmhNVTkRmD5cmHcKypzs9o7prVKAo8SQci7b2yvU1Xm29f7GXAAxu",
  "key9": "4Za7yZotCFdigRebLCC8tpsHEYsqH9LmKT2a9PAhVsHoegdrnVRpMXygJmZVJYS2QF6Us4BVSKSQMuty4SS4UMNa",
  "key10": "25oJGg5UJjkMsycduMZtFzEjtki1i9NvoQdu1dWfYiEe3ACyKg12ia3QeLmZdtAJo12hghN19bbAAPrC11hE96BR",
  "key11": "NiS9hKNpAXhcqkimj79k5LhayJuv3DEPeGrbtEeFvNHeW8EfqGbDxTHqjPamC88woziqzmvCChTMt6HTDsUVApe",
  "key12": "3BR8RFa5qX9SXFZfzsUho4jzYWwJXcRnkfGrcETDxc8ZqU2f8nWHJGkb4YP9DMyJD4xH7yFUMJXnQTjfJrcYrF46",
  "key13": "4GA6cgfJ8d7Vhd2wKMtgpoZipVABL3RQLqD3MkeKsb3jjkPzETxQ2p2zMdd1q8in1xv8mKPp3YXcvmMK521tnnd4",
  "key14": "272ELB5aoZqZS3t1JeVa4NX9RALX1sqj9gExK468rSugbs4FzPRpxgDJsPa2HMa2zqyWUBzdLbuD4JfXgig8pF5j",
  "key15": "DUbyG5GgZS8oZ5u9r3ugwjeTFU2hK3GawNMR2cHApGYPqpMnBzsrAPrnUqfPvhweYnbqZdZog8gXrwou3Ui6ZW4",
  "key16": "5kAJLC6Ez5pU7kKDspiJ8ie9wGoVBXt3fzcU2j5onqwvUeVayYB9zJTyYkSG6sPGXvAWEg7uLNNXyMpDq7GkAe58",
  "key17": "29joQhSBAhJyyGPFYDNifBEMKqoM9b7puLGC9YMd3PiJ3p5uoybssKEntEnRY972pLvmeXSFUJykxdAd2hdZrDB7",
  "key18": "5oR8zUsVurJpRePnjFAQXPsPSwokeu1mEhQu4J75KwbLSRRZxESWH3jat28nmE4f5CukmjjA271CuYZYkpyJazKM",
  "key19": "3PVBbscrAfEgzK9t7f5fZRooftiQy28eDMAk6Xh334Zf5uTFVzhbA4VaHnkzjXu3ySoaKWBzT3QfBtCy1V1kxrdM",
  "key20": "4FDRrupdRRAAjBrLbhiLNVZ4rvLMqEFrrHxiUt5EKNzFy5UopenCnZtpxV9b7GbZamzcnndtJ6jXfB7aqVsrYMtc",
  "key21": "4rSt7wdtyRbjSkPWZfM5GMVLiafn8ysLpnJmouGFGsSLswY2TLf18r9z6Use5DafLqjHYQM6CngS1ZbdTJTGRaC",
  "key22": "3jqwPwS4ii2arBF4YrRP3LpWG9yYkN7cMRi1bxiGjWWanNqBcBpWimXh2nRbTm7kmnT6gPdMNhcj72SC8ERXC8iQ",
  "key23": "3qzmoetn9z1ECbDSqLFMDavoeRVQLBJBa4y6ECHefZA3iGxzF1MqJRnZPRYjaQbLoBExbMjkQEELeYK92qQqbAeq",
  "key24": "4HUZ7kqcE22jeNY8bTz2WinRfjH1aZsgx8ZB6r3kiAd1LmHAcgZT1uQEidpLCFiJZn7jJ1SwuGMRyoD2tbphdDUv",
  "key25": "3KnvBsjvnLuXk1u9r45yjkUiv9aNkPtMSEPvRVyzdfteDReAXAGz1BQvLxNGxe8vCLY4Fm5pPko57irxtXxHAwx3",
  "key26": "57WbUKZYAoL6tL4VnniGeV26sDirt2HHy3WZHz88yftWpRA6jMFHrXUnUnrMeVzQ9KVs3aVY89ndPkQwBS8uSX9Z",
  "key27": "4zW4M1akoD7p4qXK3uhvrnCuaij3vta4tv4aXPDEc8WBoTs3sgcWnPoC6wzchYbZ6qNJafK7vubwDxGvh7haHNJH",
  "key28": "zuhLbaJfWgiZ3UuGM5kniZ19tDnnqY2nnvbg1dhC7hfkrEVBPt77Nn4mwDzYytWpSAQR9KJy5B2VQkd5H2QfLWG",
  "key29": "4Yao7J4UJQTwFHDnpRGhKSFZj7tTCrwnE1BFau3nAdSusFC1gAXzxGs42spqFZ7oWcS4oT6hixSwpzrmQLBUz6iE",
  "key30": "2hMFeFS1mDyqqN2XNqNq2KTU2RWpexRgsxftPL11eSTUzwAyRCXPjeH6QpMs8hjCCcNLXgdqWFivw5K4ZJpts9Nu",
  "key31": "5rx6FQG55dHfCVMF115GpdQMmqk4AvwKnPn8dpLQD9Fd2MsfaxCbzNEGLDXi7opir1hDSFiLtHJs7Dgti2BfZcaq",
  "key32": "26injYQC2BEd9ZWdXLsDwGaH9o5aEcT9qKRh2hUjMKAFiZ4ctYnf4qUUn1UmKbxhFMNczFz3MVxF4Ro2PbjRoSF9",
  "key33": "2j8jgNhaKQWLXYe1MBb88DJgM9EBaLiQrDaaLyZvReqc7pHvUGtiHc7Wd7qoCFaPuZZpsFTS6FfLZyYrF6o7dSLA",
  "key34": "5SqakmYdojRXSo2xdrkTmivvadNLknwXgKyr7AebASMwM1wqUYqR9cmL52v1cppYcX6eZMakdPoqDVKBE83J3WS2",
  "key35": "5STzUUV568Zu7193cpNiGpC6R9n6PkkPf6R8jRYXMA564kqZxMkF4kzGgEoCj9heivFM4a8BYLx8McxDJMYUEN94",
  "key36": "24PhKq4Cu7VbZuajMMC57GEHzuREsvxPyW1Lxgi7hzsDGwQnisxQHQCnxQC3msfkDnYLZbgfZH1NHgJvhtGoANQo",
  "key37": "3HJtQhULRS8AwWuyZQhWCzj4iFkG16KCfsRCBYc3Q8DXWSrsGKXdQa5MfxyuQte2t75rWpdyZEPPwMt4Lk3Ff1VD",
  "key38": "wNWdC8SYWEQ4FQSLDyyNqWq3BcEa4bspLtEWJmsmbKfcAXuJjAavbNXDWAMFwYeYi4TR1XxyTSCywnf9TrtBvmt",
  "key39": "3cMYt43AzVqLTRU8diKhA95nebEC9BcJF7wfPdbf7LQKU6g3fo9Q1E31XgYPU1E8HQ5HXqXLmspQciRrYDC5tNc7",
  "key40": "3oYsM3QjAG1BAhSuZZ4eDijq2DLNKmYmZSpxkunz4xDtYxk3aEVg58cC1dMagVGsaNU4VQiTefWVXe1goRSLPugL"
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
