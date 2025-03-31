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
    "63ys5TY18prk5LypnkRRLeg5eASWg6YSmS3ybRAxfwZs2SVViArYe8KEMtxuddU2GWJabjqt4VBVJpR3kU7wB7do"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24NiuY2jtc3HLWRfVLaukHtiTV62W1DEn7rZiS7NT4g2x5TTBf1HWGf4yCnE5MjqBka3ybPzdR3SKQWpcSPr5CqT",
  "key1": "3okBfMbtRgBkgMS78os4ntZXvgNrbLxd1t2ZxosjT7s9UgNU1vv9hQ8m7ooBjLZTSYjYsgUqAPLd8CxMg9apde4e",
  "key2": "5HmrEBXVwA1zWTjyZk2anMGqugWhyd88kMu96qUNC6dJUXWd8ot7TAatmYpCU8uuTcp5sqwLZy9d6swQgxB9NLG4",
  "key3": "5SQwXTHKiUW27MZfXhHCh2p6rcq8oYut1t4WpN5V5Za4FtF2HYhuVieoUnQPCpJLLZnBQmwek8aUjt2L6D9szqGh",
  "key4": "62C9K18BNhL86rUzWz176kX3Axjt1dAHP1J2EHN4N6BWvXtrJjoeMPFDPCi5ZoWyZMU1f2XptpqaJZtnwzyziZFB",
  "key5": "3M8fcr1scjARYmXYvYgz29YPAftSV84hgwBmh6mMC6DygCmbNnZQgK4zJyzo1jxsxxbunSbEKTDufcc14X16jkN8",
  "key6": "fqRwTv1Jv84NcH1E5gW5i9wC449putdnDaFNCrPTNB1mHc8dLKLkHVdrNBuqwjcXesVTFxy7NqwhAUH4B7F4eXF",
  "key7": "KbrAxikDsykPWfQ3KX9FcbaLREED7Ei2k6PScmbrgCYPyhjYDzn4kA9mGySJYTNZh7Rg77Fyd52NdyZZPpQ4kHN",
  "key8": "5jhGYMyJg1KPUuNYhWhTXf4oSmnSioHV5PKXFaZ5fJt5QHjE7ifWsa2saWLxhKaHs5UHMymnRSS4euNZpS9Rb1vX",
  "key9": "4f51TdqPKGZh8unju16j93DcMorDKJ6QrNwmxfZuGpbCgMfjkoMpwp86TUW2xmTMvju4v967W3ZDkjhvL4UrxUYZ",
  "key10": "25jFZF76JoHHxdUcQYG1xtmjRGJhgGWNvXa4K8WYxZwBpzdbegqyGJGfZ56DdLTF1L3tNBctPrngjr5RAxakfTND",
  "key11": "2ct4e3MBpWLLvwkCypDcaLk68B9Fu13zJdbRyi2EBP18kXbWYB5dwS9QMj5nKXyD7Rc8413teWkcvtqLU4dCvsdf",
  "key12": "5p9w42WVwaJLibWrvXvkV1hd59bhhvSzDvit7EoE5qY42xUAfbu4VG9qwZXr5NqfmeByLrQH8q7mMZ3UpNeoS1vX",
  "key13": "oWLWK9nQsXZDoVznC3DjTbGYvXCKXwwX2CaByst6KNGQUxaCo1vgyrMzwmWUgP49w2eghQ5vtoRJqSPnqD12qPR",
  "key14": "2NRMM53mCVrmEMuDT792bQAKSNoZgrWjmPuFTsi1PXCR1mgmSCYkhA9MevxJkYXZfDPSv9BPZWaSbes3qkRJdPor",
  "key15": "4sXTBfE4upaFNkWeyNM3E8FGP3SeBScSRxqR7hb7D8UzcLGJmkXTFnBdvmLPeNkKMhep9wWkETD6MAF6a7XTbpUE",
  "key16": "39dXgwwa7n8TUfRG24GUW6b8Dajs2UFbnCCi7JB2uTkhL532j4VkLgcqF2x92M3h28HhdAm9DZQvDeZiEqsAzScz",
  "key17": "4evPr7qjrkTerLfqfxN2uSsXayY9oH3vZt99WZbtq5Y9jr5LTHC7Mx6wCUvsuL8rdKRqKP26KhJz1S2v7cLgcQcB",
  "key18": "28fAQN5o1u1j1zETqpiS26CW3zJmJQnHT1oCqyxqHGKPPYFwX9Qc1scBpM46Gweecjjzcq3Vh7kENP3LbKi6FT2s",
  "key19": "4idW84B8V9csunhcSwKeZAy1qvNjwy2qzZ36cqXknvMvxqpb3ADTMJABXWQ5CuLNCu5CNnKoD3DUFvzaUYAwnukb",
  "key20": "36LDE4LqEfKfS6D5bjGikiKVBfBvvBF4wmpvKTKgeD6hG9xBxzTRQR4mwe6J8CB9yZGz6qndv3CgQRkLQsXfQCBh",
  "key21": "2GqJ3un8MksHXCvDsGTftyq9CBhg2cuWDnXRCPJ5g2Nd5uYQF6wTiYFcdH4PVWjT6SMkFprPqCA9W2KDwE6R8nv5",
  "key22": "4rBASJiZLP1zF69f8aUwjqoM7rmFxorCmwWQcs7ywrLVPqT5tuBWsxXqCSBEWidtJBxWMF4J2MzG2c7ZbDGWC9v",
  "key23": "5Ur4VP2njztuTi2EAAH2ysjYpaULAWUcoJaB547fJu6t7p5K2WY57ufh85yJxM7NmKj7bmbt9Sw9nBug6yYq6pgi",
  "key24": "tpoRphqTwYLSKcgkcCtrGReo1YNPAiphg1MBcVWXZBLSjFuByWo5feDtMfjMDYUofXEevYeGqs22AHn1DHANu4B",
  "key25": "3r446qT2URemgzNzt8QC6khjL9P4wjyv7HzPUzffaqvqGBAmabuxLSW1GZwnfz8bEmx3g6wjrXiizRbHQzttuxR1",
  "key26": "4L9jdjPK8nc92AXjBXR2HdfoPzEm31p7ZgXAdFUExZYAaz7Da1YvrQQ9ERNUGKtu3dMnskiANpxFkbLE9jX8NZNq",
  "key27": "2ypqkbHz7fkAJ4svk8jdoYtwHs9kwCN7nvyTvNW4hohvGKzZnv4nZz61dtQtqHQp5JNpB7zytd6b1XjYZe83ckkK",
  "key28": "3Jc8c2qz9aGvAugboJjrfFeePSrk7rcKP6bjX9BNqYZwckpkMsp9qvimjUJWAgAEXzKhyryXU82dJkV62QaXWWGx",
  "key29": "fKKMYtQL4bT3hqtHKuCbuCuQcCwTkKZJuQko1kUE788Jkayqc8N9iVBxjZdqcVRMxpqugPjHiF7tohMwvQCTxKd",
  "key30": "4TaCQLSgSA6VYkkdkBBVXkUsteVZvdY5qj1sDB1A7vUkdD2H6QbmC7iGAy2b7jbKTnkQujo7HYzQHroFF5fDFcaz",
  "key31": "3HkqznuB6YMdAg3VFWxPJ7QmoYjdrB3u7vxPXtTEMo7HotVox8xjQgw7aeC3kM5vZ2sRhLaDM9pgko8RkfpfASd4",
  "key32": "4MbsL4ftEkhq1NPibuEC1V2SVPwfF7NPrqe8Bw123pTyhVhJ4PsNxVh6bmEnetAaprAB8sxweNboZ7jVK3RWdenA",
  "key33": "29LDLQWnwrYY6vM7qszeqza3P8QqsWP7yb7g4Y2AKrDV43Nz9zJYepNcGcjqVJ2Rgzp53w7H7wKLSwQtE6j3jHE3",
  "key34": "27bK9RDqJ8WDgdy42uP3FNVmY38isVHfehKfY4vp2f68Uuot7K5RDCvETaRvNfZvzRKuqDS3G7HeL1yeZjakmKCN",
  "key35": "5DLYM4VNS2sJHi759wUphGVKCjMzENdutFkimSVjmgiSuzBoPnvdLtAfFhWkQHNCP8YXXMZYCfxBuzgKvqukxseu",
  "key36": "3ooCd4VBiAsQsWeLTX8CWTmkaRZDB6digsZcYpEvVTVqSqWunCpb3AsSupGVNGVxbHKHni5T8yJdXmFgYGdJwkW4",
  "key37": "Pur8pqS16tNa1hDoA4xaHm359C7dx9g35sxKoYeyoZcBRCHBvje5U11ioQcSjbgBb2VwngTfpU8SWHuTMfwMGS9",
  "key38": "2qJZo39tCWYXSc5i9p8wCUCQNJQ7qeBXn9k1LBSVMrkDPUMTgJNdwkFu4v8ebNKxBXWwbFHMPgDvfA88YMEDDXiG"
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
