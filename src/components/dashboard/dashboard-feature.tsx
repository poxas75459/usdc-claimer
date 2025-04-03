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
    "5YBLDZLuaLY9TeQ9S7oMhCTbXoFKCpsHma9n7tbwb3WgTCvDh1KM5utWpDb6iZ9PXLUxbR2g5cbkYabxmjTmFYQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZLAvA37NAXKgVCgKu3pudrKwiMw4zgYqnLUhqRVeKm4ooT7HDouLhUAzzU5DdHezPtfZjvrGptP7iNXd1p38nYA",
  "key1": "3yjmfmqXP9k3uYBV2XS7cBs6ufQpVvcDxX549dYS1vjSZ52HoMUWhs47LZ3LEw7iBP7iqYZFTDjwDF7N4YmJ6hkB",
  "key2": "4EHyBn9ZYSowfmw4sFhQjo8WwCtkvcSE9mS6szQHsC9thvTtKbbAMYF4HT8AuJXEoEkSHEpEiN71Pg4u2oPHBbD8",
  "key3": "4SaQYh7kMCH1zFcboBNJttcohSQFn12T4pGppcJv7h5vgohZDEEMGM5ikkFC5QGoAri3xNUovQw4nt3c5qbAUA8V",
  "key4": "36yBtbXrVY8jEysdRTyoXxV1DHsHdq5m8VgyZhFRps3VMnwQkwcAgYGfcthxWtmPeZpnUiRxZmYGBJEewpm368xf",
  "key5": "5EfJnVDGXUnczTqwF4JZnMM5tWrCTryDZYjGHCxgp8Hz2GBKgZbce54kvTxSsAbd7boQHtn1kGKJ3uHGB5MwPqdp",
  "key6": "4fVtpJJBevnqapyMWV6gyDNUoZFz46SEs1CHTXfQhFTHmPj3DPfLW4ANZo1gTKt4c7SbZKFZbUxvXXgfoEBejgkj",
  "key7": "4ALczhM6MX6YjWM7Pxw8TzZyGvJqBrqsZxVR764H5djTBq1QoUpmZj6fSH5tMKRDgpBhtoqzG8DkKw1849DvZeQi",
  "key8": "3rHQmmoLfFdj1FuUTSc493TQWMFY6GLk7uu4xEUcdrdqVCp9gr3ZAAHMFGe3okt5QkvRxmWSRjGWoirWW17TUHRf",
  "key9": "2fdGodaE8nZrPa6GFxY3Uz5DLJnNjs1spaKCr5xhqV3MCQVmJhEjxhcMk2CLaiaGgBVExWq9ALDaPSucommK6e16",
  "key10": "5zRmgqpM5rfduGcnrgQEYrXhuFBJJisYChLFs7j33vyfLRzZ6Jp5ByjS5bdU6mT4BdawZy2iWmLyBeCrRAZ98B3F",
  "key11": "2vq92UH3nZ9ev7G32ayXqTAD5v8DTPzK3gPMhfwdfJm5f7q3v1jUzxgxY4MMWQw5qwtbqbFU9Tqa5MdyksoENYQh",
  "key12": "isVx3ket8z5gsQKNqwMcLFjw5b3oriGhbV3nXtMHdKxA2CquXsFzQeCN4pbAx9yfG5NhDjv6pTvNm82tc8AXq5n",
  "key13": "5g5SCcSSuZWARncQ9g8YEVUqejxHtJeh8HnUV4Hd2aKuzFw6P3W8TC9SsFVsGPwBmtZW4WbfxStazEWUoDi97XSr",
  "key14": "KX2FfqddNPCBfc5fii34oecRAimec3gopiDL7gZoJtYxCWMhsYg93bF3wh2f8fSxs4DzH6SSXq8QujM6JvGvuT6",
  "key15": "489CVMCzsVjM56YyLgGV8fVsYhWKyHkq1RW3HC4NGZPV9gkvp4TKrYpyWh9aK35j19Tnufw6JRE3yccgxEiNfJEW",
  "key16": "5k3g9dcqgk3HHSEAvwuTzE7sz4d4LaQpqqSSA9ARnBZxMK1kxstAqkfFfvkz1Cq5qCgB1UWSo4bEnni8njx489ii",
  "key17": "5DumtGf8qy5cPWBdixUF22r5VunyKfw1yKYRwEHnNojZqWTHvNaFEZmWi2EZRpLgZR2qXSyAParNBmvjwgeKuAXX",
  "key18": "23LRmZbjj31UgxQnkKquJRNGGqFmPD3WpaygT3SvpuPs89k2ww7Z6NeGk1nPu5sZoiHvub2FomWXFJ2fb54PpekD",
  "key19": "3jvdEmRSzZ4zLUWqBM5C5MiqKuzRC47qda4wiUgMzpy51V2oR22pwHJaanVS22h8dXfTJpv3J4v7oJ5CCrVHiWnj",
  "key20": "2oxXtKcHDJx1BoqQcrDaMfERviti552SZ3ujSv9MRBWGgUHLpiP5ZFfA7Fyph1VepbCTnCerLrEZAfkzZZ24TJTb",
  "key21": "3RF6Tv9e5ViBxeKJRxkf7JBgUx4468ovngXqc81SF4KvrvhB2yAVyCNU9id42a2VTnGFXsYGCpeeytoY3sRwMWRC",
  "key22": "4EHHDwxfnZhqwxx5QvxpQFETBHwZcnjA59jjjaER8MtSn9w2kxSNp71MVJvG91FYEntdtKN4HZnXk33t53RvvYpw",
  "key23": "2E4Z3xDEMUcr1i6Vh5ch4V5u3s6vtorTkBrjZonBDVUQS9kL3F94PwDRiA9kt5GAPfDZuur8MC7As36dntr7HuMD",
  "key24": "2zVfmYwTg7WSJ1gi1qjBZ2He6CmQ1KNvXvMG6Pqab7bF3RctVkmTLjyy6ZvdcL84WdapcUq78CrjnNihLcKs2YAJ",
  "key25": "5WsaTnqWyunCcMdb1ah3z1g2aqv3GoXobcLJNcfrx97Exi9Vv7KXB6etLFWsSZwJ4mUBrZGwvZsXDsTYduTZAiCs",
  "key26": "3cCFYKBozM4JbjhYcokXqoVXg2zV4qJcBiyVKuVF5BKfdvZsDsb2KNrMAkAmBVjTCje9B3p4LjZHrw9B4JMxLPr7",
  "key27": "2nsS2CVUxNDxX3GqwsvSrbjfsEgLUT4d6TyekfR9J722L1oyry3SrkAvvsVPC3irTcbpXU91Ymvyb2bTWAuCE3Rz",
  "key28": "EoHuFEQPk5ZYCDxfA9rAF3phihyyAv7DF3JbNaxcwyE1aKqd392xmmLzj5S6UeMVsqHaVvWi2uYtpffciRFRwHS",
  "key29": "taxvwBW47dvi9EPf6T4MiVjjUHim4etY8XJWEvCSNBoraRTKcGVGCagsmamBPFtEZjsZbVDA4nM3gEGHkznbybK",
  "key30": "isZGb68WPMaY7BhhMXJysJfQ7pvgPvrRWeR2dvX6rUQUssV8KZy3BASTraWsCAgNqYPiVYHLfNQhSwHyZCtNhts",
  "key31": "4ka5GAMZaCzGgzM9DrMtZ7mKvyZu3uZk4HrMArLsD3txouoZ13Uub8yJsdbMMt9W1LF8uKDk5veResFQMs4w6GhU",
  "key32": "JL4fAs3vUz87BChs2czLsCMuqE1Vy2u7QAC2tMTQXd4rJakdVnLpWHwHn6L4FFnV8vvXSCAy32Dnoy4LUQt8aKp",
  "key33": "2FyZdDcKovjJPAYr382ZzpUXJT6YKcbzPCNxZcDHjxtw2qcCiGuef1ZSZcUu67rEKwexqSivo8LhxgjALxwmDwLQ",
  "key34": "5pFJoBvaDn1nNo6AwqJLK2m9FKnsBw9bFBgo8jB3hA3KfnWvhaHsJ7fVHvj73UQwDVG3NaqgwiUaRes2r3RBxpVh",
  "key35": "gw9Kkigg6G8x3Si1gZVMKMh2snEB3qdXuMubLCzm5NmNahNTtUNkHMDqx8HNcwt89GuA4mo1cJy398UvP5Won8v",
  "key36": "2kxx5q9LQYhFTbZaHgWfsPpDUqYnCHqa81i7Wh77kSUy2CqiZ3VnEUku4QPZ7JqyMiinCSHxDYS78k8ssQBYfiJi",
  "key37": "2s9vSdXbv3QXVKr7aMJjuF69JUngVMC6mm6VcdDztksgZgULZzM5B8Ptqy1Rh5rTj2GkxxaaYVjW3CMqekvpRbzP",
  "key38": "2YDete7EbEhpdQ48HE824GXUC8Z97CZeCwG65K6yEk8eqLK4E3FM7okyzoCFGHKi3VLa8LeoN7cqiC4v7YeqtNVX",
  "key39": "5XXisLoCufCdkmGeXtyi6PhLrc4bHu8ckM8WA1BGHdrivSKpzZdUqSaPRPfWviUD8EUB3EgqHS3CgytawGgJPDyg"
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
