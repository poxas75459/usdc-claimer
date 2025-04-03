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
    "5M8aYq8stWYtRP9JQkXdKpeeyRWWN68JXCKFuJ4G1iVdcBA4P7CBPVXLqJDnudWg5doQjG7RZyrkd21WdpQY2hPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uiwdGtAgCzJUDAwEZvoozkKsDuCvxkWaAMWZ1Hb3SmC4qMc2CseoWLwSCgtkZua5fTP4MNjWATR8XbSioeyAvS5",
  "key1": "3Ry3ss18gToXuNRLYK1Cm4frG9FVC6Wq3rWitWWbFuhNz2RihQES4Wt3qd8GY2hKYHmmH6sEHk5qvAi5AN4A6NtZ",
  "key2": "4yXBMfq2n8qLy3JFVHoNzaqLJNfq4mDv7kJpy3RbQX3mRAryDubZNNcKBS9MMC3XunXsWdTnEkze5inKCTLFgqfw",
  "key3": "619nTCC66Yqb7FGonso6JtSxsfCMuTfmAPxYztYxZhqprGm8AB6umMjzi2DXLFD4ymmnEJ4mrpDnSZinLmGSvE4h",
  "key4": "2AQprkGA5mD5HhdyRbooEjwMQgJ1sLz8fq6LnbRY25qJPkyyr1DSCsFEPmmRxa2HcnesFQesjBZusiYPnEwq3e1E",
  "key5": "3VbN17J3rLddKe5Josy63uGAEUWbJSkcZ3aoMJeXF2U4eTUshmDQ8eoiKZoMdWuLHs1ACc9GTVwx1ZMdRKv3q7WZ",
  "key6": "5BHRJ7ftQBeNpEwtEVnFv9dRPMJhM9CgnfXVepbG6QmUaSdsPrPJxsE1GjkCvjVS9QLM27eibuSJytEPizczN95u",
  "key7": "2gp6WMTktvzEF6oeSAzZB5G5qZngGNsg5MRsqnoxw2pZsCth1ARXgvHzr84QAJrKL6RPt5BqgSvVzSPV46A1Zyez",
  "key8": "3HiMqAZtUdtJMksqKDNwRraBLjAmrq11iEtqxpYUJjHPEEiZdWvGUymnzRSE9ca3PXVVzv6VT4wUVBb1iVcPmaC2",
  "key9": "2sQbaqLx1yZiUxAAcb1qyiRNgBhTCYE6xFhvtyXCpbEB8KeenvRdRQprT6b96T7cyLCCfP8csutnfiEC8cwm9Dfj",
  "key10": "26AZeSKvWGa8SuCFqyvyizCbjzDNaoP6cHYUGiLe843PuXkgc4aU2MDMd2xnpqLexWynNqWE6VF29PBfrkM6g6iH",
  "key11": "R9ZTc9q6J6befNqV8ttjp2CBYwSzaPwSHSbNMic3M5uMGfrSukpR8dSDmFgiRFEpz4xyTcLQ1oYj1xbT8Nz8KUH",
  "key12": "PfrV49BJX4NHMXe8tu29S2Suz8phKKP3cDnqGVKQ95M5DhwHdSy1m9HrzAF8M3C1Bw9jnuCtU3j8oLpu1JPZD2L",
  "key13": "38MM58TJisCzfWfaTPBbndGFj5fVDUntDB2ubRY4jN46W3kz1qfUnwDyyKayn8wY8bhxWVbJT3rJL9GmFMduAJEw",
  "key14": "UrDfxzyWG41H82XYcZ4QZGNbqEDJoW2iuofz4L77FGGwHrEo6sVJTaV8w6c29XbrFU9fVBviwyTPvgsB9J8ZUMF",
  "key15": "3eEz5XA8HiGJaSm2fHpVagRGaDuzZc723bn43xZ7ictQiadSVUymd61ZvXYhrCcL58kQiWVrqeMwQBW47oE39ygP",
  "key16": "4HmEHq9uUxMo69gPSbe3RveYtQnV1D3JwuiGxpdKnsKXBMYowYPDexq29zKff8jJfic48QQmxNd4dLvTsiJ2J8qG",
  "key17": "5VcPeqdwYbt4LMqDv9wpi4cRUbVmSrsoGrp8JqNPdZgd8bLxRPYxjM5eKf6FP6J4e7Nf77hwCLiuikxiCxpEovYk",
  "key18": "pPAsqH879hsS8BEUpzEtyYZ712eKZmEnBa5ajgHxnLxnJZzGyR2N2CYC5zTU6iW9GP38EtdiZTRedWeeX68Jjv6",
  "key19": "3CVi5PXQqF3Vx5wq4qNksdLWxb8Wv8RXF9xEXbe7p4xnTSToBP2QHizsWt68hGfwwD3bYxCrahp6BUNmR8aaUamy",
  "key20": "43KPZy7oxjDEz2RqCRhA3oQyntAvpeqcpnQMm3m5725TQmUCd7AfvqgeVB7ZrXVnbBkmZG9sz6kx2KmD82iVpQYa",
  "key21": "125HXsGymGYUHVY9gDtrNQUKCPtgM4u29RUxRVBXtZ5Y7e6cztNGEf1uUcRQ2CakJqJAzCavaJgLCLbKYM3Zdryv",
  "key22": "3h8qhF4Va2e3gj1SqoAVwbRqkUvGThkTz27JuAcnk5dFuKcXregyVrz2HKnuGkzDYAW3FehP2WTN4nydWkDBLF5b",
  "key23": "4UUzG8rcwhUGQb5AbmUsPYYiA7JobgTqq2w4nkjKiuZmFUR6hcrLgHjhoD8f7LVfktjtv56mHP8GyVuJLEhmVvBf",
  "key24": "6QFqfiNxmPGyNyRDgiqqViyDKfThraNt89wmmzApsk2uPg1wrZRzsjaK7BsgA8dkQwuymucbdMpSbpVbH79SJdc",
  "key25": "4ibkT7NYTEvXaLn5rM1JJvDwjQTP3dJfCyDSqFN3n9dVHDTJTStCWhLHGNZESgGAVsMBbFKYSphpz2nYLjPcJwmQ",
  "key26": "zesdYnMpj6dkWbDDfkw4L4NX7YogDxDsK5ajEZGoeCaiHghaqYbgWiWfcT222HDgXg3UhKpZ6XzfqrozgRg4SV3",
  "key27": "5ZgZEStkzzDAwk37Mh4BPVuiFSy5bpdxUCkGw55tiNZsekoSoCusug98BXram2iuRMWD6EYEs1ryqdNU1p4VJ12D",
  "key28": "2S97hF32FkfMSYVmgTZHfArveLUbjEG5M1r1SbAnkujHDLfWG2fwJCnhYu1V75cRuyzUFpMmgme8DSdYqzbQtQts",
  "key29": "5v4brAdLoHjF9XMKj2TB1LZxtoBgxgL6ebGsNY1c4MRi7DEnKoYGEihvbNbhGyzdgGLkaAD9kFXg1pNBXtLvTycm",
  "key30": "4uxqkDV9dFiFr6QxCWphQWZvhY6zhhrkgitdLDtksLMo2hC693R17sEAqRqp5oujPP6GAe2JCDR1ZmAnS1n7dTop",
  "key31": "HZ132fi8RkWb7PBbdwkeobqJ5hysQEByzjqUHesEWXetopkkz5si6tfPgXFYtsjW3rQkBYQ4yLzbTEf6cHygEQd",
  "key32": "4h8n112VkbZntW4VSCvvyKCC9bGczxrrzEJVuAYGcnPdHDwju1HLz81jPCsTY1uV1nZEidj7puFQExhgrxDj9z7Q",
  "key33": "3Sh6vHttGuYQ3VZ52GB1y7U4KsTj6sTC4ESfJcapKZHGX8SXMoWd1Ynwyrc66v7rVZDSrf3FF9278KSgSAvCbMaA",
  "key34": "3JGsrD61oG1CCSGM5fWCtHwkxk9u66xuhWM4DHxR6QLjfSviBdbRwp8iW424juXCMUUSMiqbeM3csaXNYEsNSbyG",
  "key35": "2emmSDod4VJQbXgZZracBJhNESBCedEtLUae8ZmKzbUQX7XW2uZCMDp8ajDM8LXZGZBZn1Vpy6UPjcrHcizjM3rw",
  "key36": "4LMuRfrjekSHaEw5JyfrjGxoLrymLAVHoUceuneoaaQ3RMHY9eDaD7aqu4oP7rnX45rxbogBeAANXmYY6Hh76fxL",
  "key37": "2x9qBjyRWic4UEeQV1Hn9TDbWQfvYx1XCcnzkrSbwnViJreP4MhV7KLUwWXkWVc7dUxjzweTkJhZvsqu3P6yGmjA",
  "key38": "23RrqDLsYiE9ygQJSjFXVLsBHK2rusjZz8dJakm3NxEFrjX56BJ9taUEWRRciht1iPoWDBmJcaFZPJHSpc14ot9c",
  "key39": "5Dp3NW2G4BhRoH5PmUH1dU9i8us9R5YcpBGzHe1EiSgrvFLL686GaDUVmyCfrp5wcWhdV2sYtwcMS9YazfakGmJb",
  "key40": "38quMCZ9TGaNuLQQPeqHnEZxZ9gRQKgB1VvWJe4MQ2rWzhoZMd42xYufeCh5TdVgAMDnMmeN4fMYTEgFrPBorUCf",
  "key41": "cXjRzWpm35TMoQmyZvovyqgxeANnEmLsSxgZRfLYTmBYu5gPnEkqTexZKVeUaph2TUb3sr6CZCgLniToGMEMU3v",
  "key42": "4UUCjqZnkud32ZbpBsUv6fA2SmFXYTRFgimd4kfVDxrGPeWC7wD5t1Yt9ESiNxYJRy6pfZENXGoRNhussSePp92s",
  "key43": "Vr5MBTfdDBKaKxf8oLYEM3LsPbKE9s67MzVKGEHxAec5VgVs9D2gbE1ybQvFMuQs2cKRD9gmxkf9woTrXSGBPbZ",
  "key44": "3uxBNJp4Bc3dhKKGC7ghoeM5soALaJU6WdVyB8icbbhVhmr6arcbEY7DaEM9D3aLzQxVMgqd733NpTLieNVoPFXg",
  "key45": "5nz5mm949nSPeYRktv6oM5799xeRoVWsZD63GArYQxRxYemGoTpcsNnuHtoNgZcXcjEaFj4zoL5AcmxxrJiSy7gX",
  "key46": "2eMsQEB6CF35kzpEQsQm1SGhXdbA5iKtd7dQAUywt6NkWwFo4Y8giYvzSkj4EC4zHJUJBMGNhyARtpUcoEhQV5Fi"
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
