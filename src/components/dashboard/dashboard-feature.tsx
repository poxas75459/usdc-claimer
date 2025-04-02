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
    "2zZu59YALCzUiqhZ37Lm7AFXu6FGYSgGPnJt1p4K25xMeV6qdoWEkRi6ZPxNVAm6dKUVVmqDGjFrrvpksgRKmBP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4amSzkPgxfDDUaJNRBRAwAwEh2ot1ZetJk6bqXmWNiTQzMxumoQa73MJfe8yfyJEmaPuMXVS5WAbeCH1Vr1nkWmX",
  "key1": "QuPEEP62iJJfMs1TYDsNpdg6epvZTWMuCFgErEzP39XdgLTCnCfYjUWHRUYagV3Lz8VMdH997eAfaBrxDwNHAZc",
  "key2": "2sUKs2ooCbPuhrRNyBPYkCajVt1HV29LxejMLDTkU5WGAoPhVtQLph5FdRNKZxxRgPA8vnmpAApiNmqbweBe9otv",
  "key3": "29k5tbPipU58TQaT5NSg4xxoHigg8NGTvJEMCZTLG5rW5uaB5dPHuviYz48dtaXMPrKhwcmWANBLGpPSywwnAnhW",
  "key4": "3L1pRct75KNY3uQ8YmQxxMBBo78wMVMxBadyLP9xaBhGbWBQeTVxa36Li9T8vSJaL8qsdReA2JghR8WBZTokixvV",
  "key5": "4kPxvVYvF1REwii57CBtrpH81KMkYDakyKrCAKiskZ9PQUd186H8GJGKgjwqCkNBkn2VnumkuqJWDBGijFv1L8q7",
  "key6": "4yqT7ugmKnHZMEczHvegnCCMjvC3kBzsZi8y8ddJnwfRB9q5iNAkDZLKRwced88CqyuEKdYUKcNeYfUUmFccjAr3",
  "key7": "5rg69rZMCywWVMfpeRyYZ2Swubga5ZDMsuudpp55F25TJWBQkfVB4zEKdtJS6K6uGkSboTxcZubjB7ytY6LNpDfE",
  "key8": "4NDQ7pAGyVEzk3cift7KkhZNQpcsSS56hZnFBgMZCAFyBb7HAt1XoiDE92gYtM9Dpuf4WhNVGkx9hoKYqmxGwVoV",
  "key9": "2ehnf9LTBmEBtfsk9kcefchqQBbyQfj9CjWqU7rTkvm6euv6XBRxfn9sMfWgAq8HENUaU69pJjHaNuGgHtpYYAGu",
  "key10": "4etLq7XJvFnJWraWdnkP6sBf4XSydVBQy8mQ8BjpvUYHA6xmY4Sxwb5RvVVYqRUvzCvTh1SVXeNU16DhLscGAP7M",
  "key11": "3WMCxTnpsRmzS1YdNQRJ9sBau53waL5GmRGcsKRqMbYZqhNMesiLDUQnDbkTtyjJWtBHXhsjPy7XgthFThQQHctC",
  "key12": "4xKWnJ5h4NeDxvqopMSLufEx3VKThPK9PDVDLtP9qE56f6H8fFCZcqRkfnhgL3vEbdXXAQNkWotw79fGQEZMHY49",
  "key13": "5gzDwtpmPYQfv2rdJxZnF6nuoynikaePo3uRhoQeZSyjidLqviDcTbpMs3AWgc9Yecxb3xSTiq3BakJbdscwbN3h",
  "key14": "26KJHxrKLpDBPcd3TT2TX9C6y4yQ4rv4JF5RZ1MTg1XLyx8wXXLi83Exrqhor6RNscE61qBxw75bxK6rKfXxGLSE",
  "key15": "62FVDHyCqF7TSDEEQ2NHsk5g2qg7EPLS4S33upKk3KMVaj4UfwFJ4KbHwLbVtTkmfrM6u5rJBndZ6BCDvvZsrf5W",
  "key16": "42GvDkaWWUpWEugNpdKdZm1HuuDvEWNKJmEcNKaELu6n6HLmA14GVkKQcfV5T2uRXSxveZuutfJA3tDTVbCpNpoS",
  "key17": "4NSHKNdYwLSQosKWCo5fPpH4yaZPtFRRzyM3LM3FAgtJUF8FVEiVn35Vai2yfRtThtJ8nK82tHNPjxEF8SdWuHai",
  "key18": "g443PvCW4hcqhveQy9GyHgidmHRsZiktNcQqRewV3pkDzbNzwvZPs4HNAswS1V9R5WBK6oPZD4D7KLB1SJiarXc",
  "key19": "5rK3ijAr2bQPVNFg4UdFsWYg7yjc8F7LJWRTr14PTf4KyGwhUroZ4HHhEMBCFwc3Ax5iqEbB9js5fbQXU3AtMvZK",
  "key20": "jDw3bHoKuGo9c4jwvebXEZMJuDG4BLr78Syxr818SdS3TamcWU65Y8z7n3am28o1TadpppnZMqAPbJS77yFTHEh",
  "key21": "4MuaBmkX4Wstd9HTGRXaKC8UKuqjkuX85LnKLYbZACeWL3fSqPLnTiA64HPKEdHqnwgyp3vTnP5W1kr482qWgGPy",
  "key22": "4SHvSS6ybfRRcP32xx4NMwKNfzDCWw9WSBLTtY7rrhVwwQpgqQJ9ccfcGAQLEuywB39G6e4tez7wRoTXK9uLBNZ6",
  "key23": "sSfUw5zczpefpoiTUD2iSyZNuU2wQgXzRQo7kui1iWkYmEzfKVZg4CZQimS9TZxudAL3eCQXfVtqpJgwk3icjLD",
  "key24": "2xS5wWHHA86QPayHoW4A7stJNDFMy1RqaAmBH5KTLMgXPk1Z5s38NaM7amM8QkJnf3QbMszZdqrnt1u2oZWL45mt",
  "key25": "4ufNrgtYY6U7GJ7F4JNS6wzEJbxd1EjjUFEiWztieeT44n1yKHw4Vwo8j7AmpKxmy7W1YMTG1QnJp2ZcatTEkpt4",
  "key26": "5mMgwQqFVZpLT6rUkpwPGJN26jJ18QEQ5ytoHvCp5G6fFN61bzwyMxjBVnm8S2Tz2qwuUehMDLjnyMDF1G46UqmW",
  "key27": "24P14F4v8BrTf3mfSFUAiiHYq1nqph7AkaiEjuTDrBS2VZifcHsmuGub9s7YFuwVQnsn66KW9f5kfaThrv4kNa36",
  "key28": "2UdajtqhoA6vnEvberjwsUqVKbwpiLcLvrotD4DrCDkdgqCWiC38Q7ZzevrZgwazrm4XWwgctRn5j6h4xnu66ZiZ",
  "key29": "3E7qpHXcC9wXpR4JhqHp5mDP2sct31U9FZ4UXPsbQt2YTaGmmUiEDvpwJuk6Y3UYHB1BkKCa2ZswkQ1ZR66znFtN",
  "key30": "52ZZat3nGjMhbY5pAis542ZXgna4Qut2N26uNQeAFN7YuQE8CBKCSYodvsPG9JujhpovCJ5CjLFGtMt4KCEVdeZc",
  "key31": "451BPPvwTYML9zVn9TdWRHUw5CaNRpJMXDyaQEwNXTtwacNsjPZo1FoJhpc4sJSQpLG4pkhHvdRxQXvMZYVuYzPd",
  "key32": "5QmQNyDU1RFxiE82Ha77WYiBEzxWHwN2pm5fHHsDo2kKH7EFmycNjeioZUtoyC6z2QXE36QVqvRrAzwmjz6Sq27D",
  "key33": "5tajP9FPstSWpkcSHV5kJ4HZMwgRiNtyya1pspGUbqs3V1hqc8myLhPtHBT4nP2BViR9dAfCyxW2pqmZ13bxdo67",
  "key34": "2kS6wir6PQRCW8xsJbx4UgAGsYSz4YwfWztFXr4KpWXWEWTKV9Y5MxjCCEvuZF6uw4huYQCzHszLqsP5t2Cwfx76",
  "key35": "31SKr25g6dm5Bru183m9uHojX46FPg4C1vaefVJiy7i4k7uHqMWpYfyyv4mYcKX377saifeLbd2NuoyDYVK9fCYc",
  "key36": "5Pqb66C7yv4eQmHaahLGEDQqyQzzeWrM5g7LRryh6ps2gQ73rTUuLgaSBkDvhyZ3HcVzMrA6m6ToYhk4k8py74Wa",
  "key37": "5Bw1768ybSg4H2WNPH6hAfziDuxC6kphGvNvywxMp7dfydjxHS2iSTHLByT7puMo55TYAcUSnKMAzpCnKe5zbD6n",
  "key38": "3r3yiwrSQyUMGUNn8rfZtM6GEsnBtwkuHRJzJNDpaDgByZkcQk4TDx1x4aeHWt8y3Kv9yXV1wkHSbsiHCKvJcmhW",
  "key39": "5pvo3K25JV3yr95nvSRXyu8PfMWaC4kE9dueqsA3oYZhBRQvAVZ2ACpbFvjRHNtjh8fCm1bfJU8dQTVjWRL14gF3",
  "key40": "nyH7dtHueouBFhQV65BLjrYeVLgE5oHqYzNhUxTtBqR2Uk2iVT2S9U7HgEtRinjzv63FY9vYUmFKP5iDs3vSDRC"
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
