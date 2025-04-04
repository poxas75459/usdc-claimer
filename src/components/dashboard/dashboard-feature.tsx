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
    "3oG3oAFHYrRNs6pyjr1VWCJGCxsTKkU18eTmYPsThKfeciq1ZTVbMZYLYhFNwke2kNnUzH1N4soEnC78h9jEwhKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U59XkkHzsghVBi3VF2uudv1aNbtvPpPZcmvnrEudowZnPoL8cHfhVSjpGcjk7MYDfDo9TiZ7LQY1Q47Cjo1LECo",
  "key1": "3a2A8cHi5R4DGGWaV5MWRff6vJ7RVbXmFFBkS3JYVjxcUV2YvY6SVywuGsCQ31jBAxLdVUNRMgS112tBqNEjU4Hh",
  "key2": "312bV38j7HDKd3pb8rfqEUvuWhfbgppz6ztr1DJRCi2rw2xMk9D9jzHWUtAVzmXgQ7cypuqr4ZTrNXFGbPwK7bmm",
  "key3": "4dCRQPqoUQ71gN8BNU6LYj77vWSKebi2PLftK3U3PhM6wJ3bFAUc9znBjCHFtaeEJWjjLCzGA415xvwPETWrEqmU",
  "key4": "4CLuBma3U5M3vX1bUyty69QMBiX2MZBFMgiTsn5hMBMnMWoCRw864DTNQZytXXrG8E7KVSjYSSbmU87DvpuAz7Tg",
  "key5": "5uR5WaBXm3VzzHNZyxH2TTbYGn878szkheYTx7kc6Mg4nUo2Dyg8sWe5M6vpnVZ6gg4bwWtCpB5b6Z9vGdJs9Wfk",
  "key6": "3R2m15rWi1q2Dj79dwc93HtvcmBCvW8wqE68KVUc5K1Fy6uyyesUF6FwAADN5nbRS6iTfMpd32mNtqRbDGNonVju",
  "key7": "5XkWLHeEkxAHUGX7u6kAA8D3PxMQBQMNCH7VtDwByYQwykQQz4F9ZUt5K1ULe3noJHik2PAsbcJDvBqudJgYHpDQ",
  "key8": "3NWpVfQFWDpua3h2VzCJbo6EonQQXg7gAjByhk9b91H8PX7V1kCEaMGtuotPNGNfANkagndw5ppErxq6BQGE1FFC",
  "key9": "Sk4t4ACMbyqp3Ef5VGzoJF1AazQ2tmtBWszBwxMR9nD4fei8XioKSwjCiWYrvS5cDjSDRgTrm3GP1c8sucrEopu",
  "key10": "8PXi9SFxk75Y4ZAyBjKAwjfT6Ab3eSq67iD7QW6jKJ5SpWLiGdJM54zxmVj8Q5NL6BCYHKVtEhPS9gWr2oy7Cp1",
  "key11": "2uqT3NosdR4KaLHgdKxDURJ2F95FdiWnkZXGZzNfhw49vTqucuaTefKVF1JSMa964YHxRw1nZDnNuhK4BsCJbD4r",
  "key12": "ac2sFNGYPWp4McCEq6KZGEgkdEjVuGrgeFNNpfoaFw6QgN8RAvCa5mHsH8gkWGkEVTxPN9zgmhydUrdk2WvRqDY",
  "key13": "2NAnwn3DMGwENp4Xz3mhDTuxnzFTqvZHZTynEGrDRfJ3LsuHrUSbsaziGoD9321ygPACYEbwGtuxTqS5Hjqexcro",
  "key14": "64j7d5AE5DVBrcTit4FwKaCs1qgYx3imzT3F8Dd887aDsJXhev3knusSUqj62jXiovpSTyneHPba2ey5YrfyHgKB",
  "key15": "32kEnAQT4eKwvvXRP5csq1ZeSBN7xuoTcbMQLCuyMjYYiCHduwqNi4GfEQRj8hUgs771EDmtHekkG3A7KsredUhW",
  "key16": "4ZRLuSG9HxxKq1xY5xatYGzpt6pr9VioN8EhpZo5xH3PH96BtLn9c6npQiYs47U4uPv1ADM7ELoB6uYg8XTbE6U2",
  "key17": "4c2aYC848B4a5HrEL6aCeFkmxAWfcycze8KDuCw3CtNknz9hxW5KJrcrWW3asMfPRcna4aJaww9jKCuieULWLdk2",
  "key18": "3LY6Q6VDpveuPteYhFHxkceaEx4gU2Std59MquzUTC3iWYGCzpZt1uewtr3UJJYgVeWCAPbpTuRQxgjdUcyj8xgV",
  "key19": "3VAYUMucr1uaeQrKD8vVHHkX9VxP1ctqUrE4sQBgEGdCpSnyEf5RRrbGDUB2YrZj4hwQHon1nctJut2N4B5qmLHH",
  "key20": "3zpFeAAbEeKrRdsATkobVvbiPvq1fXjappLyVUFNAwgALhZrywEZkgEt3KsRn4oHCoDUyHtEAMMopiv8Gna942fe",
  "key21": "78QECfJFTte2oj5i78C6BESbtpQXAuHfcsY8KbQbbEkeANsKXFsFd7SR8MpcM2FZaBNSUGfQTfHW1PE8wdijB3F",
  "key22": "43Gx9GEw3GuLBdG2YTUQ6AfFL8xS23AuQbE1LCRXqsewjEAvSrJn4MFcA1FVRWwHBBbcpz7mF5XgXc8zUuRMi6iP",
  "key23": "5iSPubauBisHyovgRfUTRiukCXWvsxhyRef6ZrizqwSUZN4o2jiBiD1WG6ExJnduviUEMRh8dqKuXsJP6j4sa7cF",
  "key24": "352zQqNuyTsLJenv515hkF7KnE2QYDUXZMVY56e9wkhZove5jJkFgnK5xbyGzKSVTK2N86ELWc6pcGcU5UTFEK56",
  "key25": "4VuvghrwGxj7fz9i8MzApd4ee1YujjncFejTaUs6RBFV7FkyLhJddZy4nPjBMBCxrma8kHgSLFxzbKNW53j3nwW3",
  "key26": "25X2GnCuSyf8i9kcjR55H52w73Jsmux2aRrftCUDV3TK3yrmp3tE4nnPpG6otf7FDEW9UtTN81YqHnSJMXuNFPY1",
  "key27": "4tXGgTgtB8bfXqbi4QM7rJYbKznGCpoXbSBZwcdNrFbLPZVM43nHTxQoHfsn3sRDrWkBtg6CNvqRXjkpnUiqXuyH",
  "key28": "58xd15zCkQrUSFrpuVYcJfGbU9JCZSc8KhfQXv41UwoyzLvuH9QLsqGoLAbGbELEAXv4jAeNbbDAJ2c2Db2Rht5S",
  "key29": "3jyDnhk9pjSBYG7jgJhDSmMHPDpDqxUjRok1tuuTdYiVnmUb295Mjx8ZafBGs4CoMada9HVzAhe2qwu5PsWx5Gko",
  "key30": "5PqRAZVbGoddSebkkza5oQtWayqHGv53JnBZKiwxsgWswBr9yh2zyChKPDr8DCbbKfgeAMriNh44Rg33ywVQLDEu",
  "key31": "67DT6AeGuWx7iLD73DmasdvjwoDatCGNvdwoauNWod9jJjuQLu2N7St8PNAvCZeKJSuTY8Me8K1BdVkvfgvNxrdP",
  "key32": "3p2nVZzz3fqZb2LSpFfZc2hvkbjPYafABMvfQukFbyjCaDw1Q1nvP2RGHAV7YHY9fgQTSdndCAEsXJKpZ7jYdnpk",
  "key33": "2APVbqBzgK9jBZvhVbeexwLKZtfSNo9WQwv25UnhWdiS9iQHPxfWAzjpYU1MAFYZm9SUia9tL41ttodQUeiM9JqY",
  "key34": "28HXcmeQQPzKjn8ivsWJWQa3BrQQEpwDrqnddTDEV2ZLkPXrta4d2YqkCP1EhrtZNjKoiEdeZgFjMdUGihiZLBTs",
  "key35": "3Yq1Ea7RLonXji8UfC34deyfNxjm1XePK9puw9uybPdet41ahjbviii3ULWh9b7ZwARpL1G1P3JqAcm5M6t8Hmtd",
  "key36": "24c9gP1o8RyRLx5JgifXLpmGeccAwZQgoSt8J3QXs5paZJuRJ58YA2vxrEd4t5y3UoYCDQnHR6YerkZvW4ea9AfC",
  "key37": "XxQajsRur8kPYuVn3R5Se1cBsTjokF6p3XSJhcnp6xZTJ7yQM9YRmvZdmSwE1XAtxQM6zSKvxLpfvxJUH1QnkGN",
  "key38": "4QGJoPDbbKiNH5nF8PConGBe8xvXJBKiu8udLUTu2o1pNWup3YW8vwbbEReNVRX4mMhzSR1q9YtRCeTeDCxfBAoV",
  "key39": "5Wx9Q4tTFVANi4NFoCWzFmhyqtRezybZhAKpZiV9XG9YW2NdK9bhQUWJD3Yp6DTcCyNz1Z3vqQVwT3SWy9QP6A1N",
  "key40": "Y4Brf2LL5NAdLgtuA9rEqPPv8ydccHEHPiDcTYYvmD6iFwGLB4uD9QvZb3umCxZGYU4dG5t8DwoRW3xk27ZdPEq",
  "key41": "5MW2n6TU7dmNn1XGkZVhkAmb1yu7rqnpcgZXeFaydnw48YxwysNJd1ZkvKZGuiRu34zWUcZm5TA6HYzdQ3BxsVmC",
  "key42": "3MU6jAfqjL8DFsBqin6iHHnABjA7vrs55UTm1uqdoFv6Y4CVhrX56eg8ytk9qJooLfu4RPji7b8qJBAMaWq1QgJD"
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
