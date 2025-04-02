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
    "PFr5qpQRyrH9dG2UnYLWzGdfGEM3TyfwatZSzCBCajNCC7b8gFErC8sKArMwVsBSpDjWB8umJHBFCDEhih6yjMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aBYxzFqfNxkzp8mbZzZfc1VBhy8aiqJjGcU5VUs52BHihXGZPKt1MNjC5QXRugy2hZETuNmh3ohuPqpiZbd5xRR",
  "key1": "3UiQ4edw1EBK97GYQmqvkgsqUdx1qL5bBzQ51biaWWstue8rbZ6fZV3DLYTT6QVvebk3vjCXZNAtYXykhDebcfCQ",
  "key2": "4HSYi6KhtBVrgt6vEZu2g6nGcGzKD43efSzrNGYrsNPBVcWhwZvzrRmJ5UVSNTLbgXikPQN1qxC1tbHhGvhjmqLe",
  "key3": "eNMAaj1vsN7KihALnPygxQSLZhNxaZxcrCAic9MJo1gzo8VXufLhH1mLYpDmdAVjhpr6dzEq4v9T5NNnDdTEAgg",
  "key4": "3XXFCUSNsL3NSDNKcL1uGZKD1VsYfeaFUzpiRHRGb6ekQyEc7nwU4dmwxmoiFrL8xWpfSE9MQ1tEXDgA3BY6FnHk",
  "key5": "4ziRCQkiaXguAFLs8yV6dgbPGBw64aNrt4dUmQftC1KWbSqEmJkH5C6nzRCtzNKkdGmJPe8jArPppkosaaNRPCAF",
  "key6": "3zNP8zFkkhPJ5sYX5GWfzzJGsQPS2BmNrNN5pZQLimZ7tBVUuctW9qHrCRn1VALQZ5HM1si5g88YGwtmb4jWE6xk",
  "key7": "98DNsfM2puuWAmyuDYCVGcA3i82EXowAcaEycu3BxKhyPY8Fb9LF2xidsfsAr4wVHDoeJP3fDYhsrLR2n8LcDH5",
  "key8": "ENm6pr5jJKc81R8GqRFGuh1MbJVmB3jXJq4uTQDZj8QueZZcwwM4nVZ4GQRtPMMrFKGUcxznSo9RmH2JGGoZpaH",
  "key9": "2nEqw1GvSEmC922mhLs5hJMYbtGEwbZpHRjV4BGKGzzz9zMYK4ZQSJybhxem41otwhjje829wDY7tb6ND48xMdoY",
  "key10": "3CNVkStvR2U4uFiQAAFXueA6GWqNPtJgEQDzxHtyLcYGKaHWdUs2X6avBqZagddFsZLwoykiNfetdJGZnPFzbm7G",
  "key11": "4Y3w5DcXtujo1ZfGwHfQTCqCJpKRoQvBWJkCRe6pm8Qzj2NQEDKZF3YHaQDrWDi6GbKegAWDMKFnssKSAvya6mEd",
  "key12": "4bfcq8tsv1waQxr3HtYDFnSNQiHnFUwYQhWE6nKgtbNjTQ93RXv21N2uFCkgx4SkTbUbdtnFhFJQqmNuJaczC7M1",
  "key13": "caiEujaDrk1iS5SQZ3Lu79no5yD97y3bxoBbkLbQSRxTUBASmHGZjMn4fbduJiPaGa494dge8eB2A6eoYowemk2",
  "key14": "63a4dZytQkNZCseYDYJsHXMuVt8daCPLFc2nC91Xii2prMFSnthDFHWAHFdxM3XSTpgLPZmyn6UPamA83f9AKjQW",
  "key15": "63fdkuUwjThWjWtEMQAqndfvZRtkuiHFmMkXZaz78rwM5tQ88FF8Sx4L2MfoesGHh57smYqQykzx8iop5ebfkkGs",
  "key16": "46LDr19TekFhLhPGUSzGQnrqG4W9Pu96PnmdC2Y3g89uktgy9RTy3A7d8g4j7iW8D4D5vWS8LWie5jucHMNND456",
  "key17": "5F3c7LMMToTXzRd6xhp6FZAFYRkQQmgtJM2eNpFfisijhz6NmDgSPybTyGcfTj1Hm4wbr1daxVpqn387hEw39aNf",
  "key18": "5WwaFFAYdRBDJCXBhGP9vqcmJqCo8JCrTTCs1uYnJWXdZyBBZoXZmUse3wgaybk1pP8ybXJsSgGbfvpJuYHEAWc2",
  "key19": "64ikpN3zp6azQVkAcQ6bxZZ7WjSjzVyZM7KFWCohSKY1nNdDQqDa4rGQk9ZjYLXffAtYYywjjRgmJenyCoetEBJg",
  "key20": "2W2hWgg1x4chXQysXFb1KctjH4cTt4tiT8X26nPuAPU6m3DU6pct7GEtpPd9GEKg7s9nqBoG3dB98ETwL7Xit8oX",
  "key21": "5Ty4Y7CLY6ez7XBEnDzh5gDYxUQwEy3N4jkH3fFGfayYtk3cfV2ywwfiUrag76HK7VBkYKoEZw6vWEejzGxEf22y",
  "key22": "5bcLq8E9yDitDeuPgonaPEbyHYWQkUKZi5uCdUChA2SRHasjUUuEeXxzkitKiRhSqCon4uC3CSgjsmrkjV7rPRQ9",
  "key23": "TVzXPE4i3B9ChZ6xM6miSb3nBNh3rDP8PkUPwrbsTRGNr6MjPT7ne8bLo58P66UGPtytMhhVWc7tRB8nPJDqvCC",
  "key24": "55WEfacATuqDhDCcjGEfL7JVrH5zzhgzztnLyCnT6eWPhQCXaw6Wde96diLNPy3Mu1S1MXYPmds514t1GT4yZmfA",
  "key25": "31pJ25osjQNyjM29bxk6ApwezQeUgBMimZENLaeh37aAX5pemrpUPZ1ATaqe6YdGWUzfDVh51KA6VnyYJT1iXJ5M",
  "key26": "2Y83NP73DNuFoRwpf9u4skQNBzzQdHDYi9Nigf3VrLUrPt8qD8bmwMSY8daU1NDcZe6L5fVh6cJNGikK8EWgctLi",
  "key27": "4HENopqBdDiHkhod9Rxz9oAAcUUeaAHX9zENigQeC9Zgwsoeoe8o41KzTbnZoUCJmV1G4fNpstHcr8czkS48t8Hb",
  "key28": "5dsdFqubQTwhzKcQMxz8Jx7QBVzoGjorGtDp3CnXK7MUUfd4S9bRdmKK9N34wHMbzTNKguvpNUYRRi7EhagZEx5J",
  "key29": "57VnJikHPx8tKWWCGcJHkCSmwwAVDNiWvgqVUaeHta1Mj7VvgsaS4ZuWYBC1LvX2rnf5NVeBCRDeVMnDixyH78Dm",
  "key30": "3TCmn38RdPHW5ZK4aovzTUTbCZk3pihjRfLJNMtt24HShH2z8AEip1vCdHSsaSZ7dFj1rbb41QFqVjtMa3hpLCDR",
  "key31": "4AfR9ngzJJSaC4DgFjMB4rM9TnW7ofgVDQtFK7jeKPe4v8esUR1qDBfFvaWeeE2GTSSoLQz3apXK9rTDYGEPjRV5",
  "key32": "4FGMxX8PhLHfVen385fj8hKDDrcseVFg9meGohrEHvbdpLfDKZpS1SNZPucS7gX4bmrX1cxd1WGRXagydKGkSGwx"
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
