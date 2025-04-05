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
    "2DxbwQ46qP1uANGgvsTQvSGV2kcN154EGcpXFPKuBt4kJJpPXiZPFCA9oQAtPTcVaQWJ3Ha6x4s83dougxMtSPJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58KJkEbXdcjvUTkNDJ7xvvz997foCYumBPspKk85SKCRKtNAaQSxRrrHP5nWmR5LUW373xQrcK3gVyzPo6esCwzD",
  "key1": "trmTBMAw6VLe3HVZF9RThDdwo7o4WeNJaQo8gMA1NH3fBUYo2YsqG7kwyqpyrAgt2btRqFmgPAd3iQ9Dj7yoLZd",
  "key2": "V8seWi3vKSAjfAhDQPvKrsYvrw6CuJ5Hta7dA7vo4ajUucFWG4pCxpD3uibeqHkWQNRs5hR4zvDApAVbTp6eoRT",
  "key3": "LeMyNRQpL3Pwyos6cmj3g5pFoCBqWkEavJ4pJzDBBqiSpqZ8pR5tuyJom1PJWQntHcK6DLCtD4NwyQ7qaDBDwpX",
  "key4": "3jpMyMFfvAHeQZLtRRQedMpXdQypD2PdAu8DMFdoJugWFdnF872BxSstMgszeFZcbQvX2rE4gQdajWr2ncUAjeaQ",
  "key5": "3SKD5nPg7ur6ZgoanJ5hxxsSuq9zvaN4uUHHVzSTUCq4YTJrMsPpNqXbd47VNa41n2v1W7Ym1kTnG1jq1da17jYK",
  "key6": "5AJd8vrWe4yXMiGjLHWToYCzd5tQ3vu2sbRUUzcmfSkoqGGjvwQoQJ2yJezHEG1DkaYPrtThFqYf4k7bmdpo2C17",
  "key7": "B8udtpup6f1mGbqMKEdYWZumUtRwS3qagm7xwXRAHnZVhutCp6oN3nF9XfMZpReDEy78qpx4qbBUcTsLpzhfoTF",
  "key8": "3XtihAASYEq9hikssPeShUB2hCsDfuKJWRbHeDtDWdvqpENdx2gpWAjFWknuPqx9XMr4YHT23yaJYF1bsybQCuEP",
  "key9": "4JJ1ASbBNWLD5cnPpkMrduk2jLKt3kczu2fjCuxhCKZoksydMJ1W23aN5fJjgzFSxnauPecdysjZriAjfrSnjYqj",
  "key10": "5qxKr1v4nj6zVj56znhenBdiEWyRkK2a4s1F6gczc6k6KDk8FGd3EG23zWNCB3QbuKwAKUqpfQG8ThAphQ9uFNpP",
  "key11": "3nx6XZWgipf5TQgU2CD5EcgYwWkZUmZ82VkvtQQp5xy7JhAaF53ZKth8evi31ZqstAXEGLaoyMWcBktfEN3tfRiu",
  "key12": "5GUYjZdaxpEauFY5FWvkK1D3strTCDS67cacwJUvKfvtyVXuU1H9suJ79pjtXcp8eP3PUaf5TJjWFcyTkdTQHbEE",
  "key13": "4AsDmMDQW9TtkMq1NFBScLzYgGhyninR645yPhzzk726TMEDPJyEf6zo1iJqCcULvCFXrvWrbsNdVRKGuVeZvRjB",
  "key14": "fSkyegJmjTgiXou2Vr3c23tcmRKkTrXoN23kAkDhH48cNecNVMxfovinGimrWfmxQAm6gay9x71CYJgHRZmhVFf",
  "key15": "SeXZYWFAQDUFmJx3woaDq5DFMdPnZcAdQfua7fVZX4BDUTBweqPaSGmy2U5fU967H5WDFDy3vPKJU7tvFf3RKid",
  "key16": "2TummBwmHxJkugkf19WhaiZgrLaKqeDyMtn4rYuXc735kMYXgh34ZBYsArB5aVETWfB6SHcbmDsb5LdELKFEWvAX",
  "key17": "z6ncm2kbfhHZy6j4UGS6ZxzkhV1FFroJ8nUXWqrd5bBCfxMQCRxz6cdZJ5PhJskLP2eyGeZtsffAyUvCVUFTKAQ",
  "key18": "45bkXSF6qhXuXu6tpeDudL7uwK4AVDHGqf7CU5W5NQGxyPtKrhAZ3PXiq4uu37zkTufEAn7v2MtpWMaJohGgrCKU",
  "key19": "LjGYvQ7RssA894fTSQu5H5jT8CuHes62L1ec7FhaFbUhoQksHYJBBY9WQ8AGehegfGFw9uJJdKTPzye4mjTBhrM",
  "key20": "4NtjxyytnoF715EyHzpeEZ7pg31sxFZEc2UhN5XMCTECjoRz1y8XaPLMYsjpK72Rkz6H2pKiYt9BX6d9gF1YWRo2",
  "key21": "4o4V82TYBz9rMQo9TQqhdwtYD5CQZidqi399KcPgU2pw3iPspp6sYEknUMxyRyw1BHBJ5yJr1rpJLexaNkwRYRTW",
  "key22": "8j5G4kcWJtTL4CgiqyRXxK3AYTQiECRds9nh97ZHi21Mq9u36WiY4jWn4xSbkwHpWAGSJ8iCfVy1pYnMttZrpU6",
  "key23": "3MR86EcnuafdrBysvFHU4pnGscKwXudZtjMaxMt8ESzQ9HFwcHYhvYd6KCraA7CFWazpih6GvjXmC23TZGaYet4D",
  "key24": "2hzXw1KWEDvvZvY3k5h6c3hT8omBmQLjoPjN2V2UjWuhYrfViGf9eXBRv6BZA5JPT6oCutMWD6JJEqN3pwaDo5m1",
  "key25": "5irKd8qfoBPxyh3ZGDDjGViJWauBH4CvRgAtykeaZuyU1q5sQjmmeQeM6nPSCrDptW4BzZwQPmGBJPgKZiyQdLKu",
  "key26": "HGauDK8xpH8FwMiRAQynkhjX2fDBGrghsmapFpzdFLKf5Vxh6y43SfG1jRP9nPFinxqjsMU7j15EiEKxmfMkTvU",
  "key27": "4Lp7iaZCTvVtxzEu9ozYjcGYB9Sx555VEJtFTeA2bkjxpYUJB7bNn7TcCouC8vRTgGnhMXJ7kbbrNG1LZhbsSCDs",
  "key28": "42Mi3xvsEEKrFdzY64xX4MTEzJtaNA4xvmWmiYh7cusTy991K8iMCwSSHWMSZ92wjFdMFvQJPgv6J9c1HgbepQw6",
  "key29": "ShmWPkbNzrDEbTvCLZVpxKudUcSw97Sh7rMXmXPhtqzU6Hg3XDJQmhcRudgf9EiFU4ABYwrZUPBYquELQTdEjji",
  "key30": "2fyD5c6jx5tsESDyLsmhtnpgGDdhi6wzzvT64zp6wPGMhb2eVUjeZW1ov4JUZU5sGgtFTXUQw6nTKJf6vkJyNV9j",
  "key31": "4e2uJwTCo1pTwBHpcFFEop5Y77qEABMVBCtnLFYjGSWfGi5TeHScHApq1Bd5SbGPnNLVC6RLhCmUBEgdkK3AB7B8",
  "key32": "sfB4D2nTtAQrtvHonFvT4H2DiS8TUS1HhU3mquq9LGVCeRYWuHwctKMJmjA4qJvegdjRahomfQ5XCLdGUVN1RqS",
  "key33": "3JJy4fBwpbpMZz66bd4nVLk2xULsam3e9qrRPiyE1Kq9XD63ULyXx5dhB3JY2BR1mG3KCL9afife7gBr6fp65FiR",
  "key34": "KMLdwZiWwxLh4Xaw6P1gFaJtUmY36HKznFESbgvU2z6BM2QgBsi1EY5sc4nj9ZAHKLzMjvU8PuRSL4TbFUbySn3",
  "key35": "4Vs65N856NNF5vEvavYuPnkuidrtZ1KoutKu38PDkyLnPPH9gXmqksD9t1dnqtuhBr9Mm52x4UJGpEuMA6cpZaUT",
  "key36": "USeTaQ17hauK8t3HV3c7wjyyKaaFXWNCU38qXgigwEvDLxAbjD5seZ1UwwDXiDLU6GjbsmhZ7MshvQ2ChZkcQSV",
  "key37": "2KtNyrg8mPQ37KtB4uoHy6KDnuKUDPnAJkzLaDZbCpFLyygS4rbq5cxiUYSSmn1ezWCJ8MACNFY5Z9ZUsig4f1Jh"
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
