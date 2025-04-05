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
    "3sgvKXz62iZmaiBDDqaUhdaVZJAfwdXYhwqHVrUw79TSWaaLtV7LxFB4BgD4GEfBMY16HinQyc13Xvg3GD5tPxGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pZMhP98SDQ61K61Qz36V8mp2RvsPcBWpkRhRRMsetjo1hdCS8dJnSdrpF3HKPNuDCFsNeBh5EcMTawym7FXPjHA",
  "key1": "3QCknDeHy1qtWtufZh7k2n8Fh8Z7PWyJ2unyWcqREC2aoHqExZkaaCkPrckak9S3n2qSuvMrmPG7JU1Rwr23pwZj",
  "key2": "3b1APsYitikZCNsVcQGoLgvccCcBnaa8cseeNTigFGWZveVe1W3UZw4jvCr12zZ4Lq3x3dGTT5BE7bJ665FPtWvu",
  "key3": "2qBGprkN5VsPrqJZhdPvtuWEGYPBNfZRsQXtn8GQY5JC1NQetx9fEVVs6Ypt5cNXLmrid7imF3pQjDAzUfsCGXAF",
  "key4": "527ueL5TPrK1jKSYJRhvQuWh3wsASHmUnvzmexMR4ZRBeGN4AkytoGHfGDqiVV3GwjWPeuThsyWjZ7dgfwBofrz",
  "key5": "4Yi1W26B4vzLvHkTpiEkzcJacn31meW3oBokY8Apj5at2K18gC2C5yrPsw7PU6k26C8iHTJJp34eaVTv2aXjfUhZ",
  "key6": "2XNzGxPnfDitBuBuXHS5dvWLCD9ZBHkguGMANLmdeYsTFcAVectstk1R7g3sHAPB7Em5fvQJCpQk1B1raLN1aNmf",
  "key7": "4F7yS53VVtTA18gZQsxQjDh4WkqYaegzofngEvLUqwYtKJ6JV4STeSk9Dy7hDp8KXu7Bcxp6Eq9dXXHifnRgNMQw",
  "key8": "5jSDBUucJPCQj6X9GUip2VVkAkYDfX5ta3o2bv9hW5QPt6KmLW4LG5FJcpa8Q26SWEQx9bkXPqKgD9qkXZhy4nhy",
  "key9": "3TQ17bJoVLbvwmWrn72R4BAsBqNKjeX9d7RDhcB11Kgni9nBFF1MAvhJsDi3wxfD77JdDF2TXu7kv1QUGqC8RADi",
  "key10": "5My5TKC7Mu4H8eNp3JvTDkgfVLtv9f55gJUGE3QG6sz1Sf4cmcdWUrwSPd8voeNbTnA9bREVmG5kceB7AEcWogwC",
  "key11": "48LAYz5nskZ7YkjWY5K5zy4qHYYXwpPYJqVZiMDFhdA6H7qzWJZG6rdm4Rb5zaFtqgp8jUb9GmPBM5LWqtvAXCrY",
  "key12": "aR9qjrbCGtzd6KKbTS7yBGGG9bumJ298edihKbnCnvNS8pg8DixTuE9Zp3MK9tbhPoPAZuwTrU44JQPbHEwMSRh",
  "key13": "5dgptngxnZxMUhgB6RrdPZLSMnt2DPUMrWb1DdkctSV1HGJK5CanY8CbVjKgL4CqAkqUnAVRgsx5QxiLo9uDsdLB",
  "key14": "4Bhkag7rfze4wUmW2LFHVCDJK86bUtS3RA112NLmz52D6qNNJzef9qMD8jDCGChXnVGjwtyh7RKD7fWFcjWC932Q",
  "key15": "57WjpS36kLLvKLpfKyBwvrjiAuM9vsMFdNtBcXxM83Ukm2E5kBGLKY75PeCxjy6bDE3uepysiqGRRhTUS5WAXFsj",
  "key16": "5hSoLaAf9R4kAEByRSaejR1ucMiEMWgjKLRKoPnxze7Xmuh1vJpXSUEG2xc6oFZR6vQ6xSBQCe6MJbEqcxq7GWYg",
  "key17": "4LhW1jpdF3H85q2xgCpdaBvBMne6N6dDY4c4mZtQnZ5KqHtZyNKysghDX8aJzuNTQD5dc4gQhqChgBin7J64ZKba",
  "key18": "3M6VFZoCkNP9E7WwfzgSySzJ3a5D1twYopQtNwn4VZvdJkXCYUBsLKh2GGoZZ4U6bpBGGdhTaNXjCRqPgv9GkyfP",
  "key19": "3GgDNqGLGjXsSbF3gbnrUPLh74JkeAmUc38eXo6TQfPMTKt6q4jW8cAqD2KR8V3v7m2m9QxUC5et2EBmQ8yZxrJr",
  "key20": "4vg8n7bX2DWKBhVXKTynKXGXaM8fD9txvKFCsHtQ79VACJMsvdj1GP1brY4MdBwyXfHaGNoSWxPqQEFeFYyav9SL",
  "key21": "o8Pt58CVBoQrdHfYX3x5QEoCAji9grDKBSN5pb2575EuKZRWkiDezMF9sd6Fi4CpLNiCvKfZZY8sh8kYmcsxQak",
  "key22": "xgkXevWpuBj58RZxHDZ7H295TVSrZbDnM8bqi16trWhsW8DhFUNJEPrtvEsdaMkMMpDbNRvohL9gpZBm7HQYvof",
  "key23": "5GeFoA8eP21zW8duHeC9ZLNxS94jCMaubEsX2MftMqVpGYwMzPKFVjcUPHQXwBGeSv5FGm2cWaXrvyBrYRGdQ5hL",
  "key24": "2i2fgEWJoe1e8ev98ATV8YcWj6xB7fX93nnYGgvvD9ZbYULGhJfws2KJbdti1yLyUFqs5DdMAtXyg9nGEDsfLVqx",
  "key25": "2fDnMFQQbtuuChe1vk3MLrEbiyQ7SFMwWTgcs6mShdEvnjkZyxwSRBQVhmM32LByQUisvFwsYf2QU8233hD8YiKA",
  "key26": "2dwi64VGqPjudT8YnQ5bKJJVqYeXZnxaBW2MKpSfzmeZA6yRAL5H6Xzyud2YjXoc1Gu7Tc2hLVSZ8jCPNM6cCyCB",
  "key27": "5Hcrvyz9yVmxFSTNdMcU8CKgw7JoZ3f8d7P7CWU9c67euS5NEMiBs65bpriVkFfvcUnt4i343nH4N2ghizrTm1uT",
  "key28": "ij2NRw4TzXLrBFnn1iPrQ1PN4b1vdwRWfuKvzvDqvr1pVV2HsbmdDkgm8Tixrx6sA4LxMJBDNd9CPH7uNNUuCYo",
  "key29": "33EJ1FhTuKJ1ccuqkjKR2nE83dxFWdX6s2prQ7wrKGg1awUPJu8UjN3p1P11iJcrpUuimQBWHxwTjwpBS5uKfzxh",
  "key30": "3NTehN6YeNHTdRgfHk3d5JDNFs5FTHwdFpWeYsF1aT1AZmwhCyWHfgzbkEK236QvBcseQJgPBi78yuee15gxj24S",
  "key31": "57rCXrgL7XqP9rsPqoVfjQSh7tMdnMX6Q5cCUDfT9DvumTuFNfgJAXPzzYHJxcoX6sH4Fh3JCvbwRtMmFkovPVmN",
  "key32": "5LPAArGcnzEi1jUmJzUoPR4gcwxNfdJuhbBdUxX9W3YYe4WPTLpg37m5VF22h1SWWVKerkroRHmkJsxwR1Zzx9gP",
  "key33": "5HFtzoe2GdLXLkZKUEafEZC9VQB89uZo3sCbpkTfT5aztsr4Hu2qpkNbmJLbQPp8JqZPVi3kwgNbNt4cFuU9h2FC",
  "key34": "36cwenNiVVXwuobaDp3eAs6iizqViRPLLeVyM6nrKnx4AvSTa8wubbVXfWYYgWx8k6jkwtF7NiwnWVMhUjEsNkUn",
  "key35": "fWwUDWejxNkB5LcB6q23xxvWGpGN9o7EUJHvJtmo9gxCv3y6R12de8ufGuQfMvmY6a39cQFUpdBYXSpJhXQKSFE",
  "key36": "4TEeikhrSdiZfNPHLuqFC3CfbzFjXiFRnYnzk97PjEUyfWJ7eeJChdEG2ATxSiDDtfLrWThGcKqU1PRHuPJ4UFTb",
  "key37": "3tpY3WUzDAtEpBxNeo7n5CMCV8PxMjuTQHYMpQTgxP5wxxibZJ2GL3TCmHnTan2qQyA9JWLhBdr5LAeKLEuTg8tH",
  "key38": "36mYk28i7SnuyKxhTDVyonX6YcErGTx8WjpcvCpeeULMP7GrcDYFtRENugLxkdg4tEzdcBGMfbz8ougT5q6QfPz1",
  "key39": "3UCy84HK7p7pyZbsBWqU6EuzDBs5VSbXiHA2keRcH5Vc3ch3cZMPL6xaiG5rxTmviEpMnhsaChQiB4MZjkPx3zMd",
  "key40": "4q4QZFra9oUk4y9ooNdW87DBcEpJzkWMswAz4JctMDj7FZogDpD4mt9sRYRUHDWHJpEXn1aXErdr3s2BGmSD4d29",
  "key41": "AMSbeQV3xyApjEdAf9v6r9dBzaHVxHm4zkrJ7TZDcFQDNd3yqwWSWmQ5NNwydAD8aUTfFgX5bHg5achocAveLfQ",
  "key42": "5ohwh57P4QsXgJSEJWcvA2FVFkua9RYJ8v6NyhK21t4QZEMFDppM8osytxoTvazGK2YsjWocwDgBkbsgvtyFiLf9",
  "key43": "2JNm2kjNvrEkuX1HvwBg44ogw2bxp5jPzCuUWQVce2RufdhfJeGaSfYuNpLcfhRCUgRuoauHyBos96b8G4wJhoDU",
  "key44": "5x1SpxydCqSoQuwpTRGaucnPof8msDM821GEo5qTHn9wnwJrdSxkw45bwbiVCByY6d7tHd5pyZMLEHcQVHViTeCt",
  "key45": "2k2j4cenfVE4EWsGG24scPwTZkknWAPWdan5r5skeeyvqiFtZCa23Xx2BfPq3nFtanouRXTRxAVZe4tSPmLeQRKm",
  "key46": "2PUQt41ePnGBecGDffN1DKxLh5kvyLd2A9oQNSvEaXHmSo4VjfyUYF6nxXkYmgc5ucJD9CYRVDQ1woYE7k51nFcH",
  "key47": "5mbrwr6Rcq1nKpzdix2bTW1undo4VVHwGKsMRzjzVqUFMt5baZZ6LPfMsCxXTjNvDfkRs46uXWh9wDJJj3XVUssh",
  "key48": "21y3wo4hj8YT1fLnBxULryBohKxyBw3kEpfZr3pqknhdvFCHxW7JLAod8Bg4SPpFd4cbAVaffzZgnWkbFD1ZRVfQ",
  "key49": "2UR6RDhZgKQSqCKd9GQLDZcXrjE5khpRYj6sKhYvfvaNfHWAYg2G1hUWL8gLTX8cfA9Dw9KxYuwEKLVm3Tv3nk3h"
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
