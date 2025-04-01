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
    "3wwAdyAhvcnPTAfu4ZYtoDQibXAcScbEpMDTsStYJzK1pyP3UxtbXHRvVCXciKEuQ14nEMXhES2tcUp6UZ2NexzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JVAQq8cqMevVFTRSYxjmKKQneaf7Gmv5pooMb81NGXSxv1VNzZMqBMAam8ScGEQR33FJauG6Q1zJuRf6fMeLEKN",
  "key1": "4QUodKSBs6DzzUbKKL9iNLMJVsby2pLxbBXaeDbRqLtye7qCxKSoDuj9thFnwVhMsLp4pMaKJCSczZZvBQ718jJp",
  "key2": "4PZyTyXRa5r5iEJFQ2NbdcS9ZBH2zDix2yZEBc7qKZXw76BEEbnshiJ4h9Ps91D3HY2Frij269DA5JAtYniiNstB",
  "key3": "5EPzmvUKHKN6TVwnMWSACQvTwDEfbXUJFziTM8KBGwgNsDAD1yWTBqUZpfTjqCKqRUvkBPmfjjYowd9rnaxzBz6S",
  "key4": "5LzekhbANB1dNnSCB8GqXzMi4JGvPE3kjRk9WzmBDeqSbo97Xy37x1V3dXLfzNDMwXFTkLyH7iUqPQRrcrzfg9pE",
  "key5": "YUogrUNJjzAnDoDvfwNJNAzepNDXmZPrfxuG5Aipf8dKULoU6EU8EpfD97tWku8XFiuQKgbJMrnuXtcnVMETLNq",
  "key6": "45n5VGEPNoveV24AZXenjwxRpfWr6G4b7v1G4HFLv7JrEVjWUyagaZu8gMtyF37z8ZyXTX8PUHtss7HLXAc1Nm7g",
  "key7": "RCVMvDom4J3vy7WBwTM4z7PiVkrUj8XkCh1zQogWP2yk8iVsexMtXBRBJJbYdFrfZAY9CaqD9f5zeCzFwpjdeYg",
  "key8": "5Amhi22feJW8tT3UYELnHkCzvxH8munKeswNcxe3va3nn479cmtgsSFgJ99fL9z6PM6BobBeUd1t9pAnsQQ28aBw",
  "key9": "fjL4ZiKzMRB9DncQEo1g7B2c8g6Nn6M5wDBrkTbQKTpF8FLX72F1JmmL6AizgjyfZGBUbpPzkcYN9a1USGnTNTk",
  "key10": "3EKubCE2EECBALV6RyiaY5xHgDFQLqiTEhCU1BCr5ZuDDP1qbfeAiX4dG6ND45b7ctzWhXc2ekPKxinKc66fC11s",
  "key11": "5okbA8JLnean2xU7D2B9ZkDWJZcZcMxLC1y3NyWTD9CXyXJmAyUqjpmisJFqopLTHuNZbH8bq3zTUrjNVZC9YDWz",
  "key12": "3rKPwMXvmq9cBamvbnRSt7VSo5ttZsiLG63tVU1RrAtjTUuLeX5WqY79SdwF3mCvBCVWNzTTwztcutUsKrhQBbPu",
  "key13": "39coHMeeRcbGuBLfV1sXmTprMfDkeeRLWStokbyCsD5BFHaXa4vortw6BtBWcyKFvpVvZZscK7ugB21NAUH95nEN",
  "key14": "3ZSe8ZXuK6GeLpUSFQLCJPzw43ci6xYA7us2aS7cXNXZZMqrSC7T7mBPKSFip1U1Qf1PWxJSeTMn4pSW3R4cuY82",
  "key15": "3uw2N9gxqbVPJPYLgbT2VHe7utVmmmkT8zXN7pHvQeqwTbacfTmivPzVamcrD3AY7jTvsFPHhtyApwGNz4BBGnNp",
  "key16": "LJAzLsPLMWRtiGstYwdgQUgwYwK8b6UrB21tkngLmaZ59ZJb2BRDQ92orkSfD5TxJpXfrceJpkStGvPwTaaWisC",
  "key17": "289Up3iDG3dN9pJMtdb291QkFjc6WWDKBBHRGKb3poRzYv9zj3Atosewu8ruiM2LJUre2pH323qaZNXHyQUMv5gd",
  "key18": "3A2SKD29yjRSpRpec4TgQ74vAgVDDAL2otGVDaXWYkCkQUb2GZUUFwZXNHhuUTUqowkvQkgruyRdVXWbTBDbDcEF",
  "key19": "3uzonyy9X1o4fbB4W8GoPx6CpEiSHckCZnKpfQxHDENCo7BkeRZpJpPDjXAbJgc9nMUovTf5N8Z9Jx7aVg539BEZ",
  "key20": "5r1H1knucwwk4QhnvsQET548YcK8tH7Ykb52QhfNuULezFZAh4gPCpp2mX5krhqUST2Fvdpm24D3DoBQ9RBC98RM",
  "key21": "4aEmK2WgjqnFSVubY6gbrNyhKgz8K9n99z3DnpRF4Egz2atdbRv2nB6A6nGJwLUVcjtjQPhxNM1BSLdnaZVRsiz3",
  "key22": "58nmuQJW45JSC7Hh1RE23BhC35SzKS6VffChbSfhcUjhD5HZMNj76p4mrLL8LCuaN6QQGwZVtUqPkRumrpUMn4Et",
  "key23": "4NBcAdWGBkT1iAMJaDVdvtiYKmf2fWuC6fQ9Yjp8e5X1sN5tfrGsBqYENrSzTphCnx6JqoeV57ZqrpcybC7TKj2j",
  "key24": "2VzjWHniGhLxWE483yXmqRjsk76FGiw5XP36qdSrBrni93or2V4kj7ggc19s54AVvCe7Q5PiDtz2cpYs2t5GT1PH",
  "key25": "2fDHYcDtGamP85bDQj4Xq4WWRhjczcgu5pSZqhCDM7ngdH5dB4oVWZQ96YdaGbHR1vRbzVHSs5Fsxh1jZ7EEwYgL",
  "key26": "rtP5pQyTiN7D1ZpgBhD8ohVSrDHVzP6b9tqMhewTwcAa6jgZfwqyDv3SsM1MAqntEuToJXNKB4yQgbpNXk3hYsi",
  "key27": "52Piib8Me9nEqRuxy436fhfnMfywpRytK5h458AiWx7Kyq6TVX7dHgjz2ULPp6a656YdDApBvUfMXSHHhKfCF6Yr",
  "key28": "3SChi8S8EmvDiwgLyJiT8WW6xHVxfNe1f8uPK3GVV4nDMYT3Uq1eZZ1h3hqWFiBypULpNXXovWUk2c5fBfqckJ1G",
  "key29": "55DpSMnNjpEcEe4GudQ15FiaFjCCVd3ET67BHsJ42W9oFFZNjNSsAoHHtKubEeVW95yXff5rh1wRxwHagKhCdoG3",
  "key30": "41MHaUn5oahXR5YbE2HFTFkc3hUkv6sSVDoEUskdY1UyvxdLgpdWaYJHAYMwBs2HdWb9puotZTkMnQgmQz9juMFF",
  "key31": "9BfwzpZfo1cVioxXzAsyyK3DsKJ91srzDnWGRSCVvZhQcJ5ZextsEuEAR1MLRRBLySMtTJpqFCEvZjiMFhDYWLx",
  "key32": "2QYNsEmVyQ2BvftvFBrMjqYs8hZzrARg1X8yd9e4QRVmdzJbtsCjBCzXqHGdrAanbgLt8SMeCKotuqBJKK483PNE",
  "key33": "5bpoEjCLU4B18PNmQBWMZSHX8ypu98p3b3V4bcBwvS3mRNT1mH9FWt4mhH4BDJL3uSeKq2JpCBUWLeFDtbW666Cd",
  "key34": "3QHu2Z4KzN3i1AUTspFwr2qG68YMWAzaA7CvYP1wCKBhYvxUuugK6uKpdLqDjjiU3y6Useqr52xFTKXGtaL6LBGc",
  "key35": "4BNYT9wjZqVur2jiDFWsV5mBKnrNZFjyP7QrEDkbqAv6aEQk8CAUPeVsXoACy45LTaaY6qZMbNeqiqktUgJpjCwt",
  "key36": "4UcCWvEqq9d5wbQeNsbEfdxDhtS1g2WF9DS3Xze8Bpp1LFDhjrAi17CkYDHtGihDonZbqeLR5vBgWjR5Z48Jjwnj",
  "key37": "4WsBxv1owNiLWRVR9DLTEoLShFTEfCvyuyW6Gv8xWUvANfHhBeEBJ8Gn2gWtgJVKcvA1h6FCqPA8XFaAw9waXVnE",
  "key38": "2bXVFA4x4def8jyUnZKz4LVniHmKQsoSHpEz2VNVrtHSsCvTzdPsVfxK7hx2HC2AuuE8TP1hd3fV6hc7ByuCVobG",
  "key39": "5wrXnHKgd4vknspWY4MfxtcXgYnCGscPArC6eWdMqiiMaphcFSAarwLf6StSF7xaUFj4WseuhpSNgpXjsaqSNpdB",
  "key40": "tVWdSg7LUhZLubZyfwytaaiedT1oetbSpKA1g29fNxpe5NJhP78smCbKrbCKqDqzhasLJazpDXcvF9W88gsuos1",
  "key41": "4jtEuH4TuH6MjzJ2QhLieLCWbuhaz2Yb9fqQ8y6n65LiV999Po1Q8ceizpcFfdMfkz5qSrw5U6GRcf3Brdh4tqcA",
  "key42": "4JYHC8zxb17Q2fUWeQAKPKVtLSNEUzK27e7VTnXq6qFP6qwxf1ueWvReCkehrsQ7QjJCTNrxLamk48C39EUAwqmk",
  "key43": "57jrnydaGrN5kk6apTzUw9JjiSZb3tejxd4LkpgfJ5y8u8ixGwrgvbJwNdAVs7X4qJBqiDyZNGj6jeisH3DEHVtY"
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
