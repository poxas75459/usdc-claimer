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
    "2vVSLRFZsbQR7VjABwpufdmPrftbDr85BCbqHY9mYZchEEx17MZoKHDCRdTS2SduwedRuDzu4XgvV3khnd6GTLXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sf4tHLqm9f8trW6yMBZkwcpw2r3RADHnFZKsqkuPc1LWykF7bNLvMv8QQXddQkiXxXaTDR9F2drSwF5s5d3L8YB",
  "key1": "3RApBbGjQkmCWKXXqQreVa9hXFVHJV1Rj9daSCV52gC763XUEUvqvSpnNtVDf28FWDnCqz4bwAw4cEEcqXB4DLdM",
  "key2": "3MhapD1pJ5fDYo8szuvoff9Pg7UWMxZDWGPTmbaGJbnUddqQc6iq48G24vkkXwE8sD1PeweN9mHq6K9orny1vj5h",
  "key3": "46L4pgGpGbuY738345ncHaQSYkc4KUuDAdvvfYYhu1uNzeveG9wkdB1nJ4iSmutW9vujtUg8Hp3osAt4fVC4etjQ",
  "key4": "3gj23E5HBR3XV2Kjk6gxLiCwGosf6orqyZ4yRih6GZFJ6G47uZ8Z94NLZTJTZxF1wjzoCzSZvyVorfihMiUAGi6i",
  "key5": "23MzjBpEp81vbQEAoHtJkcJkh4csYa9qbi6hXAvc8Z3ZDjVwnDicR9znp7boWuC3bd6gBYXDPNY2ynTbTACQqMzE",
  "key6": "5igX4hSsHC6smraFf2G1epPJ1gvNzaEJorRX7K5Z9iDacXBFgaRa7brbpnvffkCNamziSJjtECXThXFT3nNe3NAp",
  "key7": "3HZWVtdrZDoYTzWKSx8BHocwVBUdeaCogUokjesT2gGJutqT3AD6kpNomPqXZVWqfwo3SqffSPToLMbGQpEEM9E8",
  "key8": "3tbr1SDPiw2jcS1TeRGLPjBsGpyzT2DyunEHhNztKjNWnsabRanPxohZMDYhpZb1vdWaN6MSvJvqyrxP7ao4mB5C",
  "key9": "3ZCJ2mqV54ssTLubxtf5Bqi8uzgghkzMBBZPvyrfy2KQLxbugCBvs9xyREykZEbwoJs4f6RhiUEmnLfB5kC7KVXK",
  "key10": "48nNiJK1RjW3FYoqofqK821qbBS3KtUJqRfBkiB9to1bS2xYedrrk1K5CBwwmJtHRE5PAUQ82qFse87y3i9UWVTX",
  "key11": "38APCAs8sbSXHRPG78tBVKRfqypgj1Vjcm1oS9xXM2zwPHQf1EXEm76Uzf9iyoGgp6SXCRpfLeCMTuY5nbyAnpmV",
  "key12": "gQgyLzeB7fqpdjhB2KFHr9k9rJbYoKeNun7XTfd7C4PCQYZHr4i8E2xdHdY9h38gQGu71vvoSC9d6qnEsS67xX1",
  "key13": "3DaSQhBzkDrQhsRruNxLn2fbdhgDDEmXnY3xYahREd8eQUkV5NLVTbmdYQPoPtYYw585hg7RQsMLh4qCKqRQv792",
  "key14": "5WSmTuNQ2BVfKsoMwdmTUGizkBrQmveDN8kNneXSpVjff1XMZ4VTTDN8ssjy4EYXAwwJtbr9mPDPkfCGJ1rCuTw3",
  "key15": "3fvi43vQqjVoZUKedUKnoG7LBzQX6fYQkcqiHjXAmt1TJZnh8maizgMy3LCuvUL1zEjgv8p2sQ2gGbin5DGu2cxi",
  "key16": "5CNob3fmnZTmEkXcdzhNeKmKFkXVkHA2Q5WGzrvxvyvErVFhUdQzRPKfgvSBw1GaRTeyQh1r9L2WBRam5zE9rkK",
  "key17": "3xpCKLRgR8uHh6cbFarYvMrqnmJ3py4mxYfYpSxPtqJrfG1knVgycwv45tV5A4UEEftzTxshaMCfEsNVMXYiFkQt",
  "key18": "sTHYscqyDeiHY6tW2hLdcjTFNkBd1AxSDTRXjYnM1j9wM1FGftgzfsKZn36e91bgm8BG6Jpu2gigaMYxwEB61jW",
  "key19": "5y7HgGffPqunTDSs1LTsxSwVsoqDRiTTcKpKyuFRsZ3krsMaU1gtd8ERPfyimb7UpEdyHjFGK4cXbqa1c5JtaH9Y",
  "key20": "ZrpfsiWjRyYYPABNg7JwcA4Gfio8NpWf5H8atYwgWhmhQ8xcW9J1rV5rmwRFyyMpdDXDizntTXmicsytHSuLvDC",
  "key21": "2HkGvh4yAEdG4eZKUfzNgwoP9pdMxpSKWCH88LHMZaXeTjxHM332Lo94vm8cmBz5RsaTGYxGjzZgShyihNpatbyM",
  "key22": "4vBhbqUWREFzYXV2uQtbJUyVJGSHfmczaCYUEQZAD9AzN4vsV72y9sTvG4ic7EfztoX3S8FbrNLhHfv16RQjWTYg",
  "key23": "3Pz3bCGk5pWn6HYoQpwSJanxQrtTPpte8H5A1g1UV2h2Lxiq8uupTYE8VKVUMoXKNK6zkHzyexaA7ckMvLGZrZ8k",
  "key24": "3ggHqZgJBLjLFEgvj4KNBXfiChGQnorAXmifo1RjGYKto46tLZw6g39A9m15WsSY9zCVvLzwJndZMi56xzW7M7GS",
  "key25": "fqKdyDmJ4xvn9br6mwXFs4SA8NhHaPZiQcDzMP28Nd4JTxJxmGHUePKCLrXEgM2YrnW5sUefUWqHS2fBomGcggy",
  "key26": "3Jg4YnuCiCa4gpLa7UojqRxvWnU4pWofirucZkrVrKQPHUgfMYv1Lp1NB4AVHggTPy63AsSBW3nrxpBFZExsg5QU",
  "key27": "iRNbkeGUzzGxSKLL6m4RtfqqJ64bwbKCDEuW1wM6nDVVxu6NU7HbriTMUqfQAF8PmrFvpavjU96cZnHSJzYcXew",
  "key28": "3R7qbj45MMs82VEtZpgaDv4nMXeGH8AYA9bEREyvwJHkg5x7uCKWmyJJPD9KRkUeSjHzq7GJ2tSyyVtRnXzHiCfk",
  "key29": "ft98Rab9pLd5FtirBcTB8dbpGnkP59tJdYdkhSW6urxFjkuTsFRshDUborV69w9EiWMEykdBzQ9REiy43CCiP3R",
  "key30": "GRh4pKdAFpRGFSsV6zHiR5yc11UpwJNiBhQDSqx4FpHnFb81DUeeuoi1RFksbA5bzYoArJdfbfokMppWSbWNeV2",
  "key31": "3thY6WgVP6UVWe1YknbWdhCzbvHwf737Ysvy7gcxAbj6RyKswMeDfvfpqS4M3AfGeE4Kj5WBWeSZVt3WYY4VyKPW",
  "key32": "4CDXF5n85egKQp19mWLKsRHbtGc1UbTfpEvyemf9bvnB2EqRKo6t8QFq1PQKDbDwyFzKURpek8VFGWmq8c7Cigjb",
  "key33": "42ZmfwcTW7TboTnQA2iqTpbSCuYrik6MZJNm7p2qHfyeW76f8KbAWC7jbiGTsFDVSrx9WPgeSvAS2prfr9rvkmpk",
  "key34": "4vbecqPFbTpZewx7kmERexUHdSEegBTbnZHYwCswaWGL6WoeJj396WJCKw55CzY6SVJknfNFrwhMRigq6QURqvsS",
  "key35": "565YiLwANqtUpTcTaVckL1m9pGG8CRP2FmQm8bZx9MU3JU5F5ioF2SLH2rJJxohthoCEbtrv8K25cbHzjjVHHU8s",
  "key36": "5XtDKYUtupyDuLdbowTJazqDWXaGzgMwsZU1oxP21CQUq4phVBXun9TCgtJG8nK67iGbaNasKhat9xg9M96c38G5",
  "key37": "ddSXERR9DyHPb7fDnMyFYHSq8stheivoaUj6Z7p1d7zkYU6p6TGLxWzo6YkD4FTRAenHUUwAb3YRjiQmZfPhBkX",
  "key38": "4TfZbTgJQSfpdjhijityd2ir49ksXLnwyZHCPeQpUtvUrsBtCT4BUtvjxQ4mSJwaTruugrBkecw9EmyT4TQPRzxo",
  "key39": "5Q2BZuSwhZ1Piz8i9vzksuxntyvjYSwgCLR6oqi5v4pNpLkxSDaXvDjtNd1fDAxP78Dj7Qv3cyQ47kuZiDZrR5HS",
  "key40": "2wtzV6Ysf2xbupUJgR3NzDsyZJnvsyj5uaFetgJEvcuR37pSBnUAAeHhvtM51XaDBZwKCiHVqnd4Tp9ffWdhJDhH",
  "key41": "4bfcwLCFdzotqduTFybmopvvieEtZg3axKHJYhaVLk5fdd4hRqki3Y8ogMnNhBhQTjcBhoTUw188MAwm78zeuvvu",
  "key42": "4zTe5xDwFXRGhuJt3kYNKP3dAbwHUV9Yz6SiDVwwiXpsSY4ia9RtKScV5yFzKYhM3WaxYnYngfdK9GRXUDdx8jRc",
  "key43": "4hg283h1beDbpauiusrVn1A4wjGXBEEDG6QEKpZ6NpRcDREuzUTWcVPVSYmDTjFtjcyi4AmE91LnWUqTJX4ZLC9",
  "key44": "3FgoiVdPChXQxi17fcczjHpDdde8i2YPnnBvXTFgHtkkmjW1bQrnkiY9y3qJcniVB9yw2mVPY7QLbXiDJtKqv5Ws",
  "key45": "2dm4EYeVfz31rp6VAbvM3B4XacwEFbr8MKJY9ZgsCfehR1vKS1NdKoTfyebCuqocsLZctuzJGkVCiosCbZBNcTvW",
  "key46": "Vvq829GrvskJBjiFeESfDPxYbg3u2K1rdoT3Z5qX9fCbK4w8uQ8foV2B15r2hukeznYPkHum7Q7TFNod1z4Qm68"
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
