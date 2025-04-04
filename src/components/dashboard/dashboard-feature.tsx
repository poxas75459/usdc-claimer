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
    "5G8rt8REWVF3MDDpAo6uJAjR5xZdHcy4rNRpRQXpE1JKvHCp42LAG7m1GDRvyEJkXUhtpvSuSJTs4Dvze1Kjudm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xxqn9WNtzPpkyieFLXWvS5QHqLBs92nMTisqaHZ7igwx4189BSCbVWXrv8Jcac4jDJCEsBcjyoZyhYYqUDzQYZw",
  "key1": "3bY38X4rsVZGGdHNwE9XfCtnp4sgCyFCKnYid9rxFzWjnSfQzX4D5bgedwTjmm52hjARrnMgER7VUBr74iWnTjBU",
  "key2": "3hH8WT9LUwKHteHLngFV2yA8V8qR3Z1wwjh4vAYpP7A4nygkqnovWxnjJyiqu7RZQ8e6zL1P52tfNpHybCfrFVFA",
  "key3": "5nWVZEjyt8QXMCbqkkUDsok8jSSsMrcPNDrixRDwqCnBAfD6LRaHKWomW7Xa8vehky4PEfjQbEjb5ffKfFSo4G5R",
  "key4": "3rHgDMYZAgb8ErmWaHpECMZULjeG9rvC9DkSHSFSi43YGr4VB7UKdmU2utukatL2Tg5gnMkVnn3y4ChPivbAcmnh",
  "key5": "3xKpn3qWrmVX54iKoHL9eVgZ1eNETMT1HANfoAXs53tncqn9uK6bAPPYfRvUkzqq8eG3vUqTqxKwB96rLWjmCE41",
  "key6": "4K879BLSRmaEjmSFu47tetJJ5uZXWhrkY59HM1jqQnkE7t6cGdq5bnrZizZ5pv1aG5wRoQAQwQj4U2RQ7Vozp7wW",
  "key7": "2q5AarpE3AYUuxPtVouttM5QozCM1mxCDx2CD2SCGtS7ni8JipUdFLH3Gn4EeaaNCC6NUVBFKDKf5Js8QYe5Z9ZZ",
  "key8": "C3GYsvAsqmVHzPJEuHw42fXotfcmo3bLTL9Cg5TaigFqey1Mzn5VuAqd8tkrdbGmjNkqdZuNudfvJsbgKJwVYbo",
  "key9": "54r39Yc64dSUyeNdpufym9rod4pZQqv1n7hgkefrB6wzvk9dznNVm3iDxnGmMKuc96JyebgZYy2AQcjg76e22gw2",
  "key10": "3SnLRw7Dh1AsHJiGKsH1KvkY6QTra3f112c4yzrs2SDvrXQhB7cUaHbo7tdWr2KG5aSWo4dFVvfTmrPaUdSXQNBA",
  "key11": "4QMqh4yvyHds3pcFdSCL5bX5wFCTmqyWA3Z9mCJctqeL8wY7uraU5ir9cyzJQujcaW1VacJMAZXNWW6Wswy2dRGY",
  "key12": "4B4nm7ocZVuD2Q9ELLqiGmxa8HydMPnzsG5AybAaYS9aLSj7TiyBstrgHSXH7w9W6ZW3wqCiayyEwRS96VhoXzXR",
  "key13": "5cirZvm9TgxRVdw15Dpp7B9n9svpMgXzPG1CgRmYtJXYVB9qeoHtK2hhL6Jofi9NVxV8NmN56S8YDUnughq4dJa6",
  "key14": "3MmbC4sLoHKNPkJygurBsc9WmQC9GTAWJWH35q4CT8oJzGHUkcyJDxHZKB2zgbPmdCmmSW1nqzNnfD9Pcg4ZuPmP",
  "key15": "pyfae2v1AmrH7ny4ASQsas5kkgfgUx3fNCLzuqurmsWssRTXeAJbNMR6DJpmD6CENKSifk92TUHBpy7QJUcCtSP",
  "key16": "4UyqWsuGd6KdGrm3uaMvaGRtKGxD6tpidrtnJz8dCD2ACR4dupFNBgRWEpfGHmjPeyVHrX1N9jokNRxvf1sx1E7o",
  "key17": "35MEmWQsVcxVLqTh3n7XKAnAs8HwyxS9Uo6xzx9sGavxJt3XgTJpT17pcgqwk9d3DHa9ycbiY5qdYbhhUf8idRbN",
  "key18": "5pfZ59uuAbtDyCMUzQo5L7iTD14Ti6jWHD3oNRqs7fCkTjQAxMVrLFE6RCq6BGkMJne9AJS2XhdXvYE7iG9UKToj",
  "key19": "WhrZCBeKV7FZfaddUHB295A7vcpmr8DASv4mdGDF7BmddBpZnbsijshYJvVnP5dFTNz1H9hRzfrqQqGEdkYECw9",
  "key20": "4zoB6kogmFk3c8t5ppJF9cJ3t33GzBF4W2XdD8uT7RjRVS6TsADCSynSeyR98GDKDK65G7fB3n5ainQdi4Qzf5t8",
  "key21": "5yVT3aMm2T511vMZncobGh2qKS9vb4kEk5xJvoSkYJ9FqkAQGcLCfNq6N5RzQwLfAsXoyY4zSkpMQ1DeNtebVs5T",
  "key22": "3JK47MFEwrWQkQhEwiTii39XTX7C98b8nj3r5y7uLs3Bqi9FVXv3w9VQLCgEKYSqdc2iE24d82Fp3DuGbsf49SD1",
  "key23": "3PaHTp7DRrEGDH59yAhGbwHCuugXdcpGVzFy3mGcNEq6oyxKRDwW5aR9hm91S3FB9YWBSCdcVmaVUywdnot4kQWW",
  "key24": "tAWfWFsQn2c6kNM7YHr34Fmgbs8d3KBtM4t17ybJe2LVyjjXJYwEtWgYGTxY84b2zXd3883w8WzFA9H5GoB658N",
  "key25": "4ZHGSitFDH2xJgghvVuGvv2vNinE8Tgqib1Kf9eBTJineVpudtmz23hB6FGPYaJpwhH1GrJpiWR1b1uZb4mp8JrM",
  "key26": "3tJxVzynpabTZNDvL5eRi9whypAFuxgjSwGeQ5qT3UUnhaxqELDtwnfjKTTUmHn4smVkvQGjkLhhZiPayBzqB1sq",
  "key27": "KU94qmjqNLxs65AKweCfh2pq22rhZov77YsTExRxYYCtQQDrG41KCVGSpJ3TbCu2aNu5gR3j2FMKUexHz5wfMZH",
  "key28": "4xuJy8C4G2uLmUQZXNHXn6EjWPmyx9rxx16zfUXPMHFkEvoZBqt3Nfh7WrJEvuKTU1qnL2ZTm129f2v36cGSvFhA",
  "key29": "2ZMEGzK781ygc2rNpCHtGGLq5d1YyftefQt7hmPWxvMyidJoEyWHyHRbUqqr5EDLvQSdkawiLNtaZucNBcxh8eDo",
  "key30": "S3qZgjye7x1U6gi8FsbTods8y7GtgyvhveaSk1SEQwGr7oYC4yaq4BhrfnPBE2YpUNMVZK9MRSxz6Hwth5uwfDD",
  "key31": "2M5fJkQDYiw49kKYKJdNSP7dUXnfhvA6jWmSPNhQvNbcLppq6VJJkVuLQBBHouh7CNWtETjy9ESojazE48yppDHP",
  "key32": "5mYXXyNxLLXMLvd48UYAujYdUEMxAQtoTz9yuz6E4wtBrnPStXhgg4FKyLQSHJ5MEpaWZsSG56eLeNWHCvZiyxTw",
  "key33": "2LDMScCAoFnpJURzxjHYiVnXFsadE9Lk9UjhhmJqxSs1WRrt7SmNgTi9LovAL8848sSrF4GVKZYQCHkPCoZwYLWF",
  "key34": "2SjMcstmxjA8aE4kbY274WFWnHN1kQZGU9VLsScPaxU7ZNMUddnnRgMToLi7QPdaxeh8zxRmNqxvLopVyURyPsVE",
  "key35": "GcfJx3WT3JhyVLRv6PJQu1Bk3jm2Sfq3q5wYCp8zr343zuuy2UnhDa7kSCTkB9Vm1tgK23RxkiuvCLC361mkfmH",
  "key36": "4RazbysBE55FbMFG3J2azmCMc9JyE6Avrg2o9U9HwmGrTtQiQCvDF5ne5kjTUVoK9fuLwKMywhJe3STgRBeGbZXF"
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
