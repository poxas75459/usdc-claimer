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
    "2Jac7HQqrUWpPrjD2g7Do3Y9Y4LXJen6yTqDt2gLkuXxVVUosX4HMCvos4qd7bWCDFHnCnsPEioTQsgfEzzU8Xsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a8gQzPdHFwAN1zfW4wV5DGR3rmFeoZKrMiMX2xwaNb8THnmwqqx5TQH7VA2AfoZwZRBn5wZ9nqVhmJksCRdv3hN",
  "key1": "h8uppMJnGNRS59CGo47dCnq7RUXmUed2ehu6pHKsL357qQxSps2Ra2scRTFWmG9FzLpV5Fhi8GNnDGPdzH7hmV5",
  "key2": "5T2qgjSp7crMD4SMkgoLP1izpo9j1wLo3EnzbWRFhBJkkt2ALC1TBUuuq8eMdVBYs9sY4UrWcygmKjwbJe7BKKj",
  "key3": "3ruThqXrb7fskV7LejZge6EgNj1KsbkoX9vWv5o1nPLbfovHc4eYhD7Nbpz7QN4QBR9ExEF8joFoCvVsdn3TGvpZ",
  "key4": "iWzx2KF3eWKCaZ42Rxp3cdBfbe1C2Wi8WKREpr9e76Gokwv7oGbuUDd9191Jck5DcMGpKGJvUKSA63HWM7VKKRo",
  "key5": "49ChTJNnUFsJoQ4vZfrrFz9brkMgp856wBd3pVNLNRxTU7nQHBkDW74QUBRJW6NHPiQaBsCusstGF3yDdNphKQyk",
  "key6": "3MzatX9rJc1oWmAbC1t4bn9nBditjsFUUbHqSQtJeikAqYyQktr8gLbt5EuArf1vEfyiaiZZ42Z3TpQdW8HuZDVE",
  "key7": "9zFsJNgkFeNTSy1LduPcaCF1RpkuBVZCjH94jm3x2pNG7e2Ve6Fm1VXTXqRSBQcWSC3UPhmmozeWxEQkYxPFL9e",
  "key8": "2ePfTtptxY2DJYsBTqEyZpXe95dEvvNgwKTWEMx6zzJjmZQjRZnbbPjU969t2hwJtWkb94LXGN6p64PcQuTfubV2",
  "key9": "3JWs4RYmDaY1gqQoX5i9yNs7Y1bfj7P7RMUFFNDUCUAjSakMDWUUo5MqMoGTCLwXaPa2SZ6P6B9GPeLDcYpDASWC",
  "key10": "5CKwzT24RMCANLdQDeGjbQSc28P3kEdYh8sqPqUAcQUqUkQ8M76jFKtar1UGfLGjXgwipuQHr5v5uvmK3vHmiHoZ",
  "key11": "J47ZN4MBKckc7zQiG8t5x16HwKWsiFDvLmnR3dy8oSNLfUMHFpafTDayfH1yVwwu2WDSbNLrZ8QjM4yjhECWQh6",
  "key12": "4dHbm8qeqTzqCZvYxnMgUwcGh3WSvMzgjX3QJN8qnbVxqsj6jqCjuLRBGFKvrjfLaGdUEfgnxHKpXfZPvSb67A1b",
  "key13": "4jBEGbvBBz6R757GZutMFSj239aTwBxNGg5HguNcwE7NwtjNsLUNvX7fkdsvhsbPxpTVrKds4Ffv9vuB32mscBuk",
  "key14": "377hDpyE2KQJ6DbKtpgwwYMVHhGetPavmfrPokMTtK2Fk4MQh4cURw5gF7LtkKFtk4gkuHshpyrLLqCGjhUbqdaw",
  "key15": "3R2GD6eRKLzDXz5FaPrvWepfsvoRVNjC2GZ2bLH7dm2TpCaxoW7yhVDwY1PhbyMYmZ2vFp1FKST6NXvwNdPjRJYZ",
  "key16": "2VutAGW3PdY1NCBY9521bgGyGuMQ2aJGN7Fu117nNVoShVZv7ouruWgdDVvXBjHR9vfzLPmm4FKRq4PMzYoxx6d1",
  "key17": "2fgjtbFK8pN5ydo9rs16912ggvcRBAeFTfqmsiRQN8qpYo1cfaze4nYk5dsHpXBPbLxRHrAz2f3v7YD8PWobjsNY",
  "key18": "4QSUxGwu6zgss4MovxCStFAbnvZBAeKecnFgCjPRpkw1pb1DW11dAp6iBpZMwZjUAM8xGYw7dxEFeoEjEpdhFZmB",
  "key19": "4qMAGccDnduKoxLAngqRepSqEU5q8JEQqK9aRou5opm823pY9aTNwSyqaAYU5fjHZf7BexGPigBDXZUajxiUNkyc",
  "key20": "44kRM9azzHpH1VKkoqUYk3EAG6kAPeCpz9HoQbDE2gDsVakMJWvTiojkguE1h4XZeCNoBN9taAA2Bw5jjk8ZNbuc",
  "key21": "2X2HSDxuZeFoAmyGDSCJDes21FBicDNAUdCUfbGQyBpy6jFftmwWqXqoSWT98ms54cn1J6ZJsnyHXGjZstjpecM3",
  "key22": "f23DebwWda6RFPsBRu2ov1qwEXxhBdcFGcKDzRy21ZjYuSGeugvAN4WN8CwU1s3DdPMHGjMwgbpzLJtyhFTRQZR",
  "key23": "47oawecxpC8G5oQg4Y2A9kKBChGskt1qLvMxqbuEmwzKcLMJBtkeceaynMXoUyAUrFYLzBXKew1VPz5R2cpoZ5PH",
  "key24": "4K4sRLiMc7gXtobyphnw6mfEztGykPzfVzJ76BBDnJv5tt9PyuCZe9Sqn28rTneMLbtyprQXFVX6x7k97wmodByk",
  "key25": "2su4NsG5jypre14xHVmzoiyrbQQzhAe6418hnL9rXD6cNUj78FYDzXBf4bbuZg4B7fvQygxGVrnhKSiEYSMZTuzv",
  "key26": "MGtkXZNeCJseJfDt7mSVTpYWgTzaejWjCpkmDySwEk6Lha6VkbTtyJGCirmt7hKdGzNVsjLhKmTSCMbbznR71iD",
  "key27": "5XJegEexztCFbFQkRzqj6jNkz2xb2buDLBrLs7PsQiLTKbYwY8N37Lq2J5gjeuo8fo1QfQ6bWT5RmM2RbPqDzJvK",
  "key28": "45psQQBahwrc5bXNKpc3L7Abn4fW36QsnULYSpxGrnvCWh64GNx7qeDs4P4FbzKxdrbxi7uLXrZuwDbGkjfizpgA",
  "key29": "612EoJvBwdnomDBPTpgYbTf3DtB2o9A88MeGCeXdpKF9QP4rANj9A8L3RLtTWn8XmpsyFbaKfPFB9ppYYs2Fq3JH",
  "key30": "7bxBqPT9mkEYqhJUfYvXiN44gjggwWVa8h7YgZbueE78yoTr37y4D6tJcUjPbdvPNTKxT2tqAquJT4cXz2SfwH8",
  "key31": "X7Eho9beBDi33Mvsk7ASN4ciZVA14vzhx4VMY5VzbB3NHEhpmDDGgdv1hN9xb7GPbFGM5BUNQkbapEfFmvHAezg",
  "key32": "4q4Msmd2HHqxpcdRfougaCe6mFkxvbBK1NqA7GETKbUxJY3nhBYLZVhdNCdf3Uj1tpzYkNGMhM2UFh6811iD77yZ",
  "key33": "4WWEz6PFHcsuHRCddcMqxKBBqdF4mBZp6B5455UQN8EVv5Rdfapu79heZp99D5MTYpiwWpkMKWdsut9nwGzjHhME",
  "key34": "22rJPmQih47ujkKRe1ESRFbUCSnv4b8Vmjc85EApDwRKrG28njv2Btjp3bHgm14dybmwyjxvXF6Ua3ogyzPkEJbf",
  "key35": "5Hx7hL93FMFzzsMYpGqf6ixhGLLWWmy6qwsxAuzV4WKS1FgmXvxqa882RyZ6ZNBpdKEGD6R3NNFmkSbjRKxNfX5d",
  "key36": "3FJERDQYgD1nrmrfDTXPyzyPqe1KaoY8yRNwhfQfQqS7ndY8Yf9b7xbkFJkEZB9QXvtVuxfCdoiSEW9z324oFV3S",
  "key37": "3kfqsKAADwyXxZZnUrkZiDw84eDbiDi9Xt6GAXnd5WapnLcQ6xq3oH5KdNt8AcEE6iUU3TXEJBFSYXUy9Nk5XFd4",
  "key38": "4T4tFPouTq8LV6o6e5au1p5tAoBvp9ytvQn1Ep7aMKvhNZageJq7TujFxB6n46VB8mRy5hHq1G4idaJrm2pBtX8T",
  "key39": "5SaJTJuoGottpXejP7NpbmK7we52s1LXEo3s2r2huycyVwEg9PYtz5padbKXZXKE2ybdQSYz1rJEURLjdRty7Mh9",
  "key40": "2Qhi32xatoEvu3eu8VN9vV1WkKYA2FLfruX4VazSQTH3rUn3Kng7Shzrc8EcK5M9if5N8LK9VnAc9WU4h5HgMhnn",
  "key41": "2ajD4xFrw1Pvr6iybyohRsTvG5KCuRrYGFj5GPoRHb5SANaWfD36Z8PFHVut2BYaY6DYn8tyX4CHWgCjiECehbD2",
  "key42": "5zS1npdqCZAD6fVWTpu8b9sgoMBxwE11b9eF2CTTFSX2CtGPHw7Dmx2FNAjxRmPaEmBeX8RNfJRAt5jbsUTrTbZp",
  "key43": "ir7LpD2ESstMvguJWVEa2sYDqVCLvS5hgex9S4rd3dYmvGmSNCJzVgqbXwP8ticBoZijgoSYzLxLaNxPDax1Q93"
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
