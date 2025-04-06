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
    "4TT7H3jKtERjQ5QVDX3ST4yhRLwJQW2S7WVwFWZdAxaBy7z4w6FJS8JMgVn9RZpjV9k7qP368iUodFZyorD6PcZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dg8yW2NHpdXHxZh1x7dfW18RuBkCvq6NQDik5Cky5EAvKVY4zP2Vet1Kpx4XonqM8zeLjk31p2NuiP9PQYTqsbi",
  "key1": "4BSMJkaMEgsUmUVsVsMn9n9wua1MHDaiS3En9LLhrdLYXuv3pU95PzXyftUFtGNXAHsVFKAhBqd2uhupHvxU8yhL",
  "key2": "3UYBV3G9zxpi55szXWhiJrVjQpnY943Y8UUWmjb2AHWd4rwpFBcDXx5oQ5uLbwmiVL4RB7kdhtMrcvUC6eFvXNAV",
  "key3": "64i9zhgv5zZGtn7to49AFyPhsL2c4WvcnGrD7cpaTN7VMAxqHrAEykEVoKWc2jyqZC5DBqzzZafgA4nB7r4E5wWR",
  "key4": "4ocFK4Zv1cXs9pMPVgLyhKfZjiX4wQb5FgPpN14YFwpm4nsSfDm7S3SxAqBVyykirAYARCZvKqXXiWJU4as5minN",
  "key5": "2ZVtfkLaDm3bPYsTe2asGf3B3Ny9m9quF4Fi8qbRFTzGzVVFcP9UANmJi96eYTqmkjdFK4ZVuLuYFn6q1W8Px9rJ",
  "key6": "3o826uCEvtj3yQbJ6WLy55NtSdSgULNyxwMYjajhqKB5CZwr1SiFxZDTpu5QohVDr2nxtLXesqa6pCrP8XkEZCgg",
  "key7": "24PRG99CdofMTaNYzTwbKWx9MUdBjkYWyrz5NRyzaiW9pn5D2H3xwF8myKtRTCJTGHqA3Sc3o7EiN6EMBDgUDeFT",
  "key8": "vKhvxLWMrPdp2V6DQ9L685KMhxj8yMSmKNP34spkU5EeutiS4JydLHZzwiLfTdn7ns1e4yFMJMT3soWa9PKKhkQ",
  "key9": "5c7Qinz1zDaWmmS9mt2CzoDGufWCvsMA23XtQvbj5iPTyCbjru8TBNcyuNXzGQvqDRFwLDHGNsHaNuTqPfh2Trkd",
  "key10": "4xiAvC6zJFD4zbnwhq7GYqALAcpU2XZ9vpfyqEAFykFiVnNfNJKkywQjcgFmRUtpQf1cNVdkyeSVrUxx9t96Fj12",
  "key11": "2CY2H5nYRMKZ5hTcE67oi8UD3bdAFzFSQGjo91by16ePkwjAxHVfAxDXR7fRbhiwnKufqC9Z1yBrt27JdeskZoQB",
  "key12": "4ypY5zW9nqgz69rSJQX9w8Ft6RJCbcHiULhRa2fhW1P6eiX7asWYth9aEHf6NqAkRA1WYcWdbceQGPCY4y6Z4h9w",
  "key13": "4F5e6WVWyxgootnuAzrr9dB4ZzQgqRU1G1fHej6mtsnXjk95NBApTaVnXCPxCoxLtdoY6trspT6FdtWUFMyrJW3C",
  "key14": "4bFNZeWYJH5VXvpEoQdCU6TYBejL185HzNdm3dmpUZCZQg4TktJVRoQik7y5qxYSK8dCKJG7kgGLifNnhvPUmn9b",
  "key15": "3K2hnKwRDpgkUAzQyV7pdmVKZf3mfTzQKUXzyLKLojhu7K4ECDTrbQuQouqWxkpzdWsSH1KW9KES5hgfksaQQaSx",
  "key16": "5Sra7u65RKLNsuuau6NurQPuH4h6E1ypGhQPz2JeSx7EmEbHt76ktd34mhzqpow5mUR1pTRPVuew8kEWCXQHGiGV",
  "key17": "2ZDwcZ4s4QBou4msfsK82zfTJJkyUSgXkQJWXVZ6pjD6fH1DevWJe8mqAf7xnmwFDSinjAWJYsBFBSN2sABmYDvf",
  "key18": "2RrAJfJ8aw8CGqfPcLAFGDQJpHJnSGkrJntjYtKBpMzVeMDGP2xCCBUyT7H75dwY7gtGWzuKUVBXm8a6bf1SFBFC",
  "key19": "51amMBvUuFoxMqpySTXdgmcEeCMCdLALSaszxUNT6ZJ7P7SLjUAnUZYpJa9gicmLv3nMBwqDRGDN3phcZ2yiAcHg",
  "key20": "4LSsejfYvNbegnHGFSYBynZ4fQYHEx5RG9vGgH9jXTC9GZQqxyxHn3kEKLm5JKFGms4qjaBsPYY4xV6EAZWpHLVG",
  "key21": "2rrJwoSbhtJJc3oXe4FYbKaekr8qZRFd2JMuyQDPrhXWAh1pTWNdRziVTo9HjpQyjiwhajwXgVciUM6mXU7Yawnr",
  "key22": "2VTzdYdwBy7Nr6FnxaDXPk3oXwSDmYjE9G7s5ktLpdsUkWZ2muTrmwuTjYnKgwCZ2hcbNVtSja5dZWs2ZGtSsLNJ",
  "key23": "331mC3tKBN1bL4fSkiiCaLsb19i9eo4UDh2mJtpssVJERPJVhUmFJTkqWGXUhRaxnDnD8ztMm3nWPYFaQcCe8C3T",
  "key24": "2AJ3jByb1W9mRdRZxQVsbxrhiFMc6jgZvDoCLKeEyW8SzXraGkBHYGvtoSFFGTPmew5ieoXSdDuzwPGkD61FSbvk",
  "key25": "2xFqR1TDuczXdg1K1wjfmU5kKkzPinEbmTD25jpBqDzT8iMLsNLiUDKZpuJyXg6UAeKyDiC1BWg6fqJ8beuA9whj",
  "key26": "3tFDN5nnb2iUTkGNFChhQYLszjHDH4Q2ZT5TuBh4g1aExm9NsB3L7kQoRbtF3ht5Bvk1jLE7PLghcwwWqqKwDJtQ",
  "key27": "57LJaXhp3Nw8sQEkKFEkQppmhZ3RnEGQs7NZncd143FQDx29YREfLem9tzkHpikhgREbe6MLBhnD3g6FNsCR2R6P",
  "key28": "2M2QQqPRjBEUFG1FQic3h45JVRjw5BBjYdYE6Po5g2iLYRXK6A8nn2hnxSYXKJ9m9YfFYKGwjWjmkkzEg6amyuW1",
  "key29": "nNZknT4JE9XxebD1dCRfhH6HUAqByHiBZSVPz57D2hY7Qg67LQpSsBeLPEptRjMYsEjdcdZjqPeTJTmcL4j9T4r",
  "key30": "GbpvewUSHaVxKfL8uy3Qpno2WeKqeUjm4cCHPHE6JfpHXX4tpJ8ZRec51qWVZy4WnY5Cm9iF98ayb9XroLnKWAg",
  "key31": "2mWS5STUcsuDNM2VBJT3rQQRiBFFf4CiUVTcKK6aBqUwHU2eMG9T41SutzW3gxYHtFaJpK19R4EtDggyMvKLf7XA",
  "key32": "4hW659z5ZknKzgZDiidHqWLdxg4fbUCEZRBYFSLaze4agTBz9y7Cc1j9mssGXo2JhnJ1ZHG8TPcRp88dmMtFqMLu",
  "key33": "RRbpj1LRK5zhNU4egMyiwJWxb71cpJhuej2Sh8jDGJooe7z7i6fsGv15bACkqk4GkhX1XqH7U5xA8ZBgThxQRKF",
  "key34": "3FqVNHFpzXGm9x6RJZ7PoSRntgDXQvxbeYwmB9jUpdSu7iLAXgPw1uy1wTW4prSTALNu7S3YnmXeFaFGgnnQ1hhC",
  "key35": "2ox2FHbYTE62sFjTz1Eumi4PyGAVPLRPbdQNP5QL8mkgBYvqqwM9ERbkfP2y2X81s4QYmFyAbsGiYA2F5UJjdC2T",
  "key36": "ofaBdhGYw7wGYyYWemAGzGnaWhsrBy4U5RefGE3Roz5tqbwVWN4c9ejzLAv3L1s5iW8aaJkuvEnCJ6LtST44M8r"
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
