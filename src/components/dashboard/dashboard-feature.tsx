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
    "4FmozFv95nFzeVEWQTXiNnNvd3TrQttonF6YF3xbAS3Siaa6tuAKoRSCkp1kdsEhDPwzdhUBW2QTnmgxfhHswPU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mc9wnjHTy6M5uweDS8CQcVN7Mpw5wdUdcTtBGgL479XWCb3YNM7qG9hiRQ6BVCs5tQ8zw6mNmNC41uydYqDUuQa",
  "key1": "27g2E8FmHnF5z4eqSrkUmmeZ8MCkaGqubkj8ptvV71RH5m3u5LMBFMavAy7eLJAGdmyzCJoA5ARxv9NmxfhdCPjT",
  "key2": "3QZXg3nU2KUuuWohVj6BAu4Mgo7Y9nFA98UsnWz26BPnMz7MJeHygAs71KHyEkkj1tqRkfqopsK2tAU2ZCP7oPhj",
  "key3": "P5vRUES4KySGHD3cr83XbbGR4uBQSWQhuuS9osZ1sBsS2J1WKx4LcvidLwubSYDkH5rMtfNc3bBPb8r1sZ1KuNx",
  "key4": "5USHm9JKGCb8vJyWZuh54oMFxUKCoYKsrqr5CkPmSBtrnbbjxhe76aDnz4WEomVnQrmvSWAZMc8gTG1iH2cdreQ4",
  "key5": "2CwbUsd3kABuVjWSe2sX1i11J6xhZ7QeveLhHeBytKcnPpSqGDKBLaFsedtuH8T2zjo1jsaYQvaMShddQ6oAfSsD",
  "key6": "24C2CSACzoNaVCwK8dRiKxWB4EJnW5C8TFdvhwszX6z3nFBKcKhr7n7ddGpM2c1w59aB1yu7BNUy1iE7V3WkLwvZ",
  "key7": "3bzqe5TFQJ2Z3J2E7Y2Ufg7B6zsJ5xGvGtT3jm7EvUFQVJ9saHJ4MayDigwerZukUAv2dhWtwwg9z4HTiSZRXhfA",
  "key8": "2wF5HsswZdxYE6QAo2VdKk65vBwexsXfZYXHkp4JHSNijyVpMtosriMZjTG9VwzqAex3ZwNvFq1Xpv1VtvPFi9AZ",
  "key9": "UXa4x1zznrfooiwJtAru8gJ44dih3wxhsCJciPoqtj8iKYuTBJ4ciAxAVmRie8cN34oAPWvggrAumgnts7YMmoj",
  "key10": "3wCnqpKypsFdTgF75Zv8FP1Bz7z3C367eyUeGGqzqP8UZd4yh7PGngHarywKhm4hie7Whn2DB7fLLUtrv8eUNxnJ",
  "key11": "2CK93huGXwm8tWAdcJY54JUiNbmNwLJniDD2gdk5TmjURmjHsv1TgM3oZRv1Pb92K2Lzojaa5nPgj5FJJ1kjVFyv",
  "key12": "p8Ssaf5Akwm4UfXLbFMYY5o9QMJVw6JqbPvkCc8hAMKPzUMqJbmbnKQyCMW33Xm1yPkdsC1S5KapvC3WgUwgzSi",
  "key13": "2NR1UsGeD1nSvmsdELRCmDgkoG6i61kDk3zgWtkWtVtwMajmgBEmn5ELQ6j3AU8rCJVEmda2gVDDqgZ3TC42Kp1A",
  "key14": "5NdgD7H9RkxKyk6TkHDyPgVJwGRy2qNPs5y1fewRSro6xZoVDBYWx8kJZwuzKxd8CMcSQNikWTeQkgMrp5yXePnV",
  "key15": "26KCRoCzspALssEcf2tvDcx6DJMkfa9NEj4ZKd4Pe8YofjJoWgvQ7iC8xQ8UnYB6kruGxCVMF5VRwoej8dxqiF4P",
  "key16": "4kPqpbPuxis2fo3FwEvQ3W4HeNEXjkMhM2saQQ1m535GjtwwQCkJG4KvvUX7YGCUExHdge4YpTE9nCTAqw3Mw2Wg",
  "key17": "eGEmkjhyUs4ZyzMNyWSx4x2XgUf48f9WjMzg4N8QwtXKw3N3RnhQtkMxNYj7P5p5DFSKYpfwG8HZnmYyFj6Rnpm",
  "key18": "iLueHeNRg8rMCC5FfheGwkdtVXGBCdKbEMNbunjxkxEH2iZGENqQDyJXX8zsqJ2aEWxQxqJwiwU3puGkV5eWLUG",
  "key19": "3PEyoMXQniXfQTKBvxQPaejPr2Wss8Qt66HqcYCWApJRnTN7bkJoUAPZDmAqjECmR4tn8VrC46M8fcMjkWdxfmj7",
  "key20": "3Znab94DQC2FMnGxXXB8FHFb2CedJePcCjvYsmLXkPSTRxLa8Kn314nVromVLhA4f5vH6r1v2scirZmraQCjX3jh",
  "key21": "3wGGTZCGmodtgqamkXg1mATiD1RNv126qfHEmDBNoQmUQ4dCj5iwthucqFyQFaYeQzbf1gRQ69VQWNMJYavuiUFC",
  "key22": "4i7QjrZcaWw18ExTvuX2uaTPBLQry4SE1th8P1i6JsWETZteNAaqT8t3PSryUjX9dx2abMvRj78Lw2fA8vgSZYgZ",
  "key23": "jYy8uJDQAPbiW65SprxNL5VRUDULvHYjptjM9QR4GrNTLf33kqkPRRgMNzVdVPjs12DaSkAcSGKThJxhbnRYr27",
  "key24": "2R3VR54RZqvB7WhXXNpe3wZQx3RJrZCYLQ6xefxtNekZgX2yipK3Yw64HCzLDSkGj9h1spJiSVVyToAVBR2irXzo",
  "key25": "3fve3T7k9MQs5Hz3iycgQdp2X8L468F9cZgGKZFwyuKy9CMoXGQDePpHg9eQnCwQRpkj9HQyGjkoT94MEDR4Nt7p",
  "key26": "4NdK9bpNqwhaDNfXrisVbqTk3Ph1XT8Y3tSZJWwEsroS4SG4GJFwja1t4Tn2rKvHuSNujSHDwwDmzXenw95Ut5jx",
  "key27": "2tvDKuenpD8gBtM47jj56yR8WzfQseruQ6L6EuQ57KGg7JBDFoZMUuN9DRgusUkXFVFHrdyxii5exCZg8QVgNELY",
  "key28": "2R1mMYRgVTyhfBCS4V7QQC6hRA8EDrruT8v9CviJrdMfpydztERWYYJnVRxCYHn1GG5hs2itum6XGMMEfNWBfmdg",
  "key29": "5AX2dAazo4Kiog2nLfMU7zpTzdCNAzTeEcH4GALZkhiuAwFFzqZ3aaNoutniGe6tadBwrbuhFsAjRw7r2fWdVik2",
  "key30": "2dMexmjn7XcXNbgVdGaj6eV9XUSiKYnGUuMheirFJteUjypLVA1kK36qB9DddzEzqLP5nUNNWd8qwyBmkVhL1hqn",
  "key31": "3jhXyQomJSg2mjWyzgKbJPsbmuDDpgSMHko3bXyE9ehpoxAADATbqSrUEY6mWzUSiAi49zup6te6jDFQeKH91VgJ",
  "key32": "c4cE4LsBV7sxbiocV1DHETq5eJ9fUnZ34Joak1Jdiwwr7vVrp8eJy7HruRpRmGc5v2b7gLFm1EHpaQBJYwSWqbk",
  "key33": "126zfNkn6ZzV1vendwwKzbZgqCxvzYD6f9zC2VAUmg32KuywUZe1cUCyjGQ9TPuFyZW2uDDKoCcDDPYgTaDKmG1h",
  "key34": "3qrZ5yu8rmuQAMQ8ND7J58BCsgPJUAurMv8qVnpnDyZgzZXE2JDT4WzuiSsCFR16R4umSNE5dBkXq1FXjA9iM2QF",
  "key35": "2qWHAft1HhHfjkW1Ghfpy85LQaQnGJnVDfQMN5wqC1nkNEJoVaGmGn8ArPFEFVHSSvG9zW7oTGvt445adrSgnthV",
  "key36": "5NMYP97QdJqtCuRoDQwruW3HWWinByLvzNmNEbVVvFS7yiw5GrtGyfBJstMu4tGwon23pYTYKaASvBjBR8f1pbsA",
  "key37": "4pnAhxeUdszc85UNhFsH147oTyYtGsHvwczdkMHHB1RPsH3Je5wnJXeUYJLstGTYj8WHvUbDtEZn89faedgnET5z",
  "key38": "8oiWzPRS7jmRGJzhMR3hZ7UwJfPAmhJUSK8nvsKrMQDfoseansqyMNttshXWox9dKdbMrJev75LZgSpu7wwLWv1",
  "key39": "gf4zE8Lm1nbHLNYxND2sUfyC7wYvKhnWd9pFqt48XBagMdcxvAk6BXjpnSg6YH1kXWWteidZ9sDqCDXVo7RSe8T",
  "key40": "4vvbGs8tQ67Ffv4knzFLMnbHaXaYm2Ymta4Ab8tnNS4oyRagMZCdnMx3mGhPBXNxPyJuV9tkacEAP18BJTvAR8dc",
  "key41": "4KaZ2UxypmmBt4GFwY72N6DZdv7JSF9WqMgPgnEHY2N5pbMS6SiLwksCrbT1kqHYp8RGdPJAFEeSpjjkpyUVKGq5",
  "key42": "64j1dNeos9PGc4oy84aSipwJo4V2HUNBPCdudwJDFNvStmnVvTviRLsSYzvjRAyx8miVCSpmH9aCDbUkdLekVjXP",
  "key43": "Yq8DMgBfzvbd7KSRWFzt7NXgcceQZL8oGduf8Mkx9AqFtXq6N5XsXRJPFjnSpYibsqEckSo5KA8JJM5KRJX3tUm",
  "key44": "wH195jiuxG6RrXm3W4Axr5UMf51Nk8LiDZtv2Vy3z7HCpNoHG82eGmnB8ccrVx4otPxnhF8mHh4wT2SdHzpiH57",
  "key45": "3vMEKPq8akcBriRrwZ2GEQZpqBEHZDJLaW2BTDQbYUAGPreCbJ4A5oVe9ZfSgGmqB2qnxU5L9HDrq4mRXfDAKDpS",
  "key46": "3QcM7gxjnqqQGeu7FXFvEQBqRaJwRrBBje45ScWLKdMmda9sCEiJ1U7dLhCNshJwuaZrCLgg56aDXfdLj4Bw2Mo2",
  "key47": "33ECm4mJPmvkAuXAev7fUK1F8Euzfdd1ZDoZPzDk134oCMpJVcbJrpwCHMohVJF18zrcXtZAwGYe4ASPP5NUmBDR",
  "key48": "3pjyEbmFwdYzFNQWM4CVBTHMpMST7NHSmSEj6FbkUyLkgEHHkme1pxeieHxVwkTSQVGx1uqBUMPnckzQygRvuuJd"
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
