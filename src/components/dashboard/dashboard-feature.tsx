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
    "fMJMdFY6dmFSh53MVcbj3fekBQXwoVL74FA7p2cUXdEFvNhZR4MybnuUautbMTK6yde3Ukr8FMac8LLhtC3d1to"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sbeWKK87QDuzjMixi7AD3DaCQNyaiQN4XiZVXXdZUwDKJvn5iiEvhdWKPUK9jXsMqyt8uWWmoKrHyPqsegcKZd8",
  "key1": "omgUTocjGukpWX2kjfwFkeJfV2Be9BnMuBQGoaXDHtPViHioaegg13mp8Gmi8CjcreD5b4hvjHf2nVbH2L9ACSA",
  "key2": "3BAfg53vGg9rCsBWNa2Z6HQFoeMRK5cs1mQj3Y1zo28ZjQPtvEYNfwqbfdETPHaCVDVC2gv4Y2FRbX72Cog2ShCm",
  "key3": "5K5wRTdDXeeA33p5RREcrCkCZiaMVF31T6ZESbAAtgQCDSyM3Xkj9CabaUeXadvtwpm8U78MRN8fTY7eBGYH2Q9v",
  "key4": "3mpYnLwPcXF66WgJmnAYot7ierU7nJsNQo9eULDSUAS2vUVcyNR3sX5oRzggkBzAQjY2d5RjXyLbHSDB1sifSCaH",
  "key5": "4dsZqjLL5T2TLnx3iyL4QXmHcoJFEDuwGJ13Me88LtC7TEVsAyerwoFG7RbyN9JeD9qL9QiLEN3FAK2iZpxTA2xZ",
  "key6": "35hEymyvXZaKzPQDVdUZNq5QaEpRFeWeqB5YZ2NHyCZRuMA3BhRLYfLT42f4Dh5bUoZK6t2RDbMrxfB8DRGhrytX",
  "key7": "4uJqb6duNs4u3VwTTs2qC6T13jHL4j6obXUbTU7mh4pS36CSPEezL8TQ38R9qfgChUNPJfMUy5YSoJdMjzb8EPY3",
  "key8": "3U5dyLeeCSMwd45irRLWgjaHQR98rVbDCHCJXeTqV4hiUFVmnu2kvy75jL3cZr1ooJyorRi9cFT7MdabQWLBsJoh",
  "key9": "4t4KhNf8T8M4EFEdieyg6RsZ5UcVoKDGtaiiw2UYD59uR2txB6rpWeTUjWcWKFqfnGQPvSgsY7yKNHhqiufksT6K",
  "key10": "32fZvfjx5CFTovT2R3CaHDzSh8t37Cm19UjB5QYa4hnWkcQMRMXCSH7FnKiyPbb9wtyZS9avawffAQWNcFtvPKfj",
  "key11": "4Zz9Ta3wuPqbVy3Vh7M7SnFgpEGBqxSX81MfqxDpAT9ERSWWJm1v6Cn7EH5MF26ZWyJ34a3tkQeWkuH7uaoFUrU",
  "key12": "4FgUxi6wEr4EbxGPQ1J7msVqyJ1xwPBU9wXSF9tK9oTntvXKoci6heT3P2ctBdbWVBpoyvKnWVufz3YwEBSyMW5w",
  "key13": "2ZctfzTtdX7G35TVcUMS3YhvSDM42fHMPQbtwT28Mybye3FurYMz3pipq5WVTDu4Dbk2MKVhxucizGTD7ZYrRzHR",
  "key14": "5NpCqGdF4UoRT6LdbgCh3KsDZUy1Xy9R7wfFn6nrm8uUDVkvL358CDtKRsVAebsBGvYHF8MEH87Ydq2oZXCoXQVc",
  "key15": "BDnJmydnup35FikMFYX4AjcuzKUXwrfYtDPU3Xz4h9rDsBhR73ogqECudfHfpoFU7h4NQ4HYXrBzzXtMzhQcv3h",
  "key16": "32pQ7gekubZNBKCYH1V7bDxCi8MRuxCrmoG4b6PGRTQ593uS1JSQMhhmAsTh2Hy1npBrwHmZinWFR8ZSpx8U5LPv",
  "key17": "n3HTTZ7k8N7SDJrJR7ytraTPaFkSUqxifh8eysGYxrevmxJ6KJTkKyaPHBXcT5RBqYY5NJHWEGcqp2Sfkei3Yhb",
  "key18": "3AQgr5X8cnbr212jpBCrqnmrjoKcB7B5E8xNbmMAn36bJDLCVdUSrDn9Xr7viW3tasb5hHY4PwMX7hr2GxTf4ztz",
  "key19": "wiN9ckAuZRqkYKxy9hKRhwJboNkaxmJGXxyyVLdLTXy4x1TEawubx2JHMznYpmhSS9Chjcig8cn6BjBfEV86DR1",
  "key20": "4Cs27TLcxUAr8Zqh56bGXWqoWZBv8zcmni5sDh11GK56krEP1N4AQ8DC9L37rtRa4egCUjyd5KZ2vVby8wReuZk8",
  "key21": "2CukReRhv2eH1ki5mDHcecmrErNCsDMkrJsBCaC54aw64P1UGKaCC5vjJsvDnsBbdXi9xXDTELmzBtAgxKZxjxgm",
  "key22": "2uHP8J4sM9jbPRgLtzMARdcVZRafaUePEXzvcJ27itPza458YDpm74s7ES7dYvwDtqqoRGfP84gboXHNZp5QoavW",
  "key23": "55jh2jPToBXoLTvrB1aUPxuHMNRkEvuMJvnVwDpoEqFnBXb1cHHgERxtfHEfZGdzUpL71ciVJGkfrYB7pqWNeVEW",
  "key24": "kPfLXefTkGatVr3iqGjKvbAzboJwLja77ewSW3af6wduMLwdtQpR4ya8k8doAFn38tPgVF5dbwGc9nzqEbAEhgg",
  "key25": "3YR775C8SJuG6SDuerwJHge4X33jsq99yTrDJao2guA9Nsp2Pf7r6goLTCedUh7q3DrKA5DDey8wP6fVrMjDJjD8",
  "key26": "3DsSBiHuEZt2qUhzacvNRUW2ATfURDSCJEpBK28zHdnLHVMrQbUaEZqhy6XXUYvjcfPdcyiKSidurcThq8gQkxeL",
  "key27": "2aAenMx5T5WKhNMFdtUUTeZBcaCcr2U8K5m48HRu854cBnRrJ4C5RmZrvQvW2hU26yNYDNEUdvPXWK8GPMHHoQe4",
  "key28": "4pq3ergqBJA4nVwNdGQi5n7frUtJHerEjZfwfZenbrBSCqRWkjZzhr5uaw6373qFHu9SBWQgwmMf6PvwBaszL4eF",
  "key29": "AZ4ZLZy9iFFkjF74q3g9kUvFJjhLZRSX2Zp5xrPy3zAqC7zTxMh7jX2QfRLzrs8Z16zLvCXBC1QPvQvJrKLWDxf",
  "key30": "38dnCm5Yu9Q7Fiu1TUQsjSHDa8Qjt8ZbsavEopCbiHzbHjbJQ8Jn5PTbdw8dCefj8ekVbYETFQPHdv2KmUoLeYXw",
  "key31": "27QqAtywrtRVw5MgkC58b9H7kkgVCymFwBjpimPNgk5YinQnZyPZNFrAK1sm4vex7YJWRFfPH5gzLYkbjNkaKgMH",
  "key32": "98AdnFTqD9RdFD8xmpGuBt59jv3gjGpiw2jxjboX9Cf3V9kjG8eMN1TpgT9Y6mcGpxzVjW35UXtAgPKu9Miqk4z",
  "key33": "218apYmcXKddcvTB4VMmSz6BAkquHNkmuDJB9QqXgZYHmL3FBpnxw7JjQWTWbo3zuDpDRa2Q2LzpZEP2BcErWZYi",
  "key34": "uqvsTPZjZd4zjC72QSK6XELFrSg1h4GBeGFhwGVx3844148H7pAeHy8Vz5Hmr6k1KdfYquXTE2iGWcmG6pMR27G",
  "key35": "4Y8gju9WGetWjSWUiG7yUtkBbpjiiKcoVQQjc9JrKgfpFZ1H8ct9K9V4kpR3awRBYcyh7p83qLvQ3pdsc8f25qv9",
  "key36": "QH5fwtHCx5KrmP3KVXfY8fxiZvn2cKS7tUfj2Mf5Zihnup5Edawz46dvrHd3KoojrWBTYikz6diqk6B1YkkU72v",
  "key37": "2xJtCs27uQWHea2LYqJZL6NantvsfsjbKp2G77qXsMeWC281dY7Xh3r5FSePNQm45Qg4FoPkpFhz4JQT22L5U7j3",
  "key38": "eRa5swsVpDgNdWE1ozrMiodq5nfqHJcaTcvAQPuSktCnEqRNC1advZYyLinPAc91RZtuusjUEHRtBzyPYwgx2Mf",
  "key39": "4vPgr75aFi6FUrnDQWYQmnpyRWbF6M7W9LTFS5PzCHo2rUomAoXo3B8tEdVoQwardqFNimCDZo2shZEZ6ND3QyrJ"
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
