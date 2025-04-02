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
    "2RbJT8EzRfaguotDm2L4u1mSL1Js5jp8D1QCYoPWcxs2dDnCLGEiwTTUssqFqQv7KvqS2wQpgye3dcSzpDXV1pTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "494neJPEqMn635RaRLGHNtJBSWvQLiyekb8th4vL62mBjVxRm7nt51ctzuEtuSKFoy87KgsVrpH9GwRyA2nKiZuM",
  "key1": "2jm3LPY2az3HuLGirHmecFtuTVh2pwydRJoM7va9waY8QmdSY84EmUUqtpe6XT7DGzD2XQGtCTxELxifULJbTdog",
  "key2": "2WWH7WUyR4rKC5YCdUsUpeGs2ho3rm2mzzVZ7vp12CLxCbghJbvfZp3TsYbgH8zWTHSgTkD3SApKVuVVkdLjx4KB",
  "key3": "FPSYPmbiXiiwafATYHBpSF7cQ2xMrocX6sVEurucEdYt7cbQ6RQbHST7v1NXLtRwbqgnbcFquPx4QoPkDVatvub",
  "key4": "4LrbHVi9iaPTg3yKogriv9bFHJispeWAJegZJP7m1sSDbhDUQyccy9zVLWUnftpL1PbgrSUP2w4BTcL3SVjhU7or",
  "key5": "4ZyWBnzWjHtLr6WnY6zgw3rutsDmKKsv5eNTCAaVrGXFcMJg2HJCSbFh9efFUVaARCmaeKCELTbsU3br8vmmdJaG",
  "key6": "rKSVcYno3Bpb9XLNfsVL8fgGLjbdvxu1gkh7VRjMxsGgvCDm8bS5ABHeYw4VeEW3xaiJoxKB3mjmfb29ESfJoMi",
  "key7": "5CSUq4wfx59feUeHPRCMRHw2BqtWvMoTFJs3knL8gz5VDzAzXpFEnjjeWNjwxW9XXTXPL7evx1fKg7sf1Pz3u4eS",
  "key8": "LNJBTP6JyLQ8LYiQznmysVvV7xTSNnQKNJe2Vst4QBRWKasqZjMRYfedL5qKpRUiEfLFD7voNsVZsicAX7QivpF",
  "key9": "5QXXNqV7s6KPapoEXvPQ7ACGYkezfKEH9rxpdSApu5c7jZLxhhgmTTWFBvean2nqyGpLqHwm9Bxwp4XomKLb5kYU",
  "key10": "52K8chFBPBbWhaALia49zRPcx1Y6HBUsxqDghFgAPukY2VJZ2dyyjYJMgDJRRyhpcgZKBQnKKt7a7Qh6dF3m8pAJ",
  "key11": "2zQdmW6zizNUkHAwFhTRVQUxYsDba3BExPRfEhsmeQn1hM6pMrGnWz5ZtYs241VxkrqsujMnibMaHMjjTcfDpwey",
  "key12": "39jJaeKxtw4y2N6Znw2r7MVMSMnbTfa6A1rjpEe2tbf9fkKrw8z3pH6atAYdVBRvjw2ShNGnjt54213NZuj4zPi1",
  "key13": "Ea2Zh3y6FBYWQbDuAkP7c15QxyVjHg2vyHM5PSegHjN2kPm37CY6t2cktkQMscsnCg3G5gAiZyPMoLGq4pkEpbK",
  "key14": "3z1cEQkDFWpvbFW7i9brNxTbVs5FL2ZAuuFb1mYFDUteEgBFEjZX4Z5R5mnkJo8Yu1QtsvXmpAQ24non41y6axn4",
  "key15": "5sWdr5nS5ca6tXduwaVuoKYM1HdqfvvwQQ81vNvMgN5SAJfMdQT2wJmnvK9uNfXPJpdrsj1XwPZv4UkkRUiJJ5U1",
  "key16": "5XYSzLw3KDPuiGKMRUr3r6gTVg3SNhgFtPv5wfpaVti57nRoDjyUCH9FGGdngF7EbAXDErvMLtPgsxLgEgD8Gm1B",
  "key17": "2EMNXksj3Qz7SPWSsbBAHHe7SuiGZrB7SRnzsrn7Wqs8Xt3TWDPvitiFdPkYMwdxDM9T7EiWNd5xxyohyQvA3oq5",
  "key18": "5pdAc5JJuMXtbhHsrDjnhjrDfB3ZB2jcPMWQqJA2gxuQYdShUeGCCNWSvXu21xtK4heaeXFz9jMb3YgvGHu1Kz96",
  "key19": "5wgxVogJD76rQo4j4pD1hpbWw7nqVrCEmZro5LeVPfkxn1EYByb8t13RQ6cMCVeJvw5bEkkorP9EZvBBq37iM6aU",
  "key20": "5fvLtAb2vqebQuPPDUq6VUeunWNRTQWam4MARe7RzMurbh75DjD78Mr97qUyHB2HdirFcdiyLwR2iXXMgNxZ5Jhn",
  "key21": "2Ej1EvQrRipJoAGdQRFyTVUPTsxFJYepcu6pA4jaBEryZeyEJy9NMtBibdbR4Cz5VUaZvTafyApq9xLLThwfGfru",
  "key22": "3qRgAQ8oJdU7qwbRQHp7gtPTZuT1eSuAGCAsfNL9LaTAsGeyUacfFh9ScUc715DJ99wqW4TcqbLmUZTwnYRMyrg3",
  "key23": "3CrjDjDjLkozum1ZSer2KMotpZFPJsnKsRZJS356rTPNHfmUun2NjgzCsdwL4Qg4e8t9ae1paim78hddDj8P4pEH",
  "key24": "65qQQspsxn3CMHF4FciY1Erz9cqb36W3z5sP8UjFBBTXm9im6Lop7uPmXqcuPZLz46XWS2eNqZ9NhNyxS17QpHnR",
  "key25": "5zYjQfwnUEiKatVt62R7Ef6wYCLV4dd95HAaQfvz97otuaFVVe15nXqNPGBwzDBC44n56jCYN39mEi6V4W5bSFqU",
  "key26": "4DY8N4h2qBB6DaQscXytUK2GVgshyXreD7163EjdTXGiyqBnT2YczUgdyt4ETD1vzQY4RBewBU71KCH9CuqgxY1h",
  "key27": "BD4zwUFH39nKgzpEhbJpTY4d4KqgNf4pnt4K1he3XYncdNFJo9Ynr4uczaLMBJDByZwotH4vNBo6RgDMWtcYogP",
  "key28": "oZUNoMkYgTJiKrSAzpiqjRA3S1WBmn2Gcg8JhuqJPfA639yjbxq49R1Zsvy3eiEigxzXH6ruB5NLYmfW4iZAjKX",
  "key29": "pS9spdZqQ9iCk9TscG1bjaNg24xzj8iYBFiKZQabZnvqNjKGMrssByQUmCYxxCNPipZa8uAJYiPYjfdbb9ayX9k",
  "key30": "3qobZr3xtDvppwg9BFQLvSWRCfryB9q6zPowyVqiLU7jkA2jpTqCX6XZdy8WtV49r4W9nswDz9fiWQzfeNFWHKvG",
  "key31": "dUU15FwpFQn6XXXB7XKa5yBAs1qaVtbbFQCGybxdBCQvstqhaxanz6EMryJrXYnzoY8yzhSvdULpgVW9oHQFTsZ",
  "key32": "65KhthxpF8Y2UYep7AuDPXYpbXE6YG9z27iYDh416haAYSSKGikntnuYdegHgoAmuJZYmNv2KTTbDKw7v6gKFmQp",
  "key33": "2ahN3jvqawMLnFeF6E1TLoqtVohQzToPQAPLurx4SEMX17Krh3ZWdJU3EsUBkSJKUCc5MA2KBA5RXAXZT6PVtR6n",
  "key34": "5mpZAV3yZnFoVTj5bJXmrqsjD5kmeSPdJBGbLJNaDMKm5wBo9GcPhG8Bo58MQi2fsDY5fj2jNNE9LnoKDkt9jN8N",
  "key35": "4UVyNfpLk6upRdWyDm4bM6cQNyEhv54kJ2yfb5XBv1YP7bK4UdpHf75dYiZoDzA9ybu7wimkLGXs3RtTZAqd2L5B"
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
