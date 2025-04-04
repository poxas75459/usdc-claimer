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
    "5Ku3xsP3Fi3hPiakHASrZaQuHGUtxBKn7Uj15hJ3VRZtZhfZMnrqWu84o5VShnDQqVcttbbzJsrrqYcAsk8jYbAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qCk27sAh1E7ZQA55icMmi7H7Lm3P6vgv5eS11uXqCATCsAqmxvdethgzXfDBYx68VwupA6eEtgVMQEYV2deUzqH",
  "key1": "5ZvpJK5WNu9gQeahKPmaZeyvHoEg38ATkdyuYzCDNCvyca1t7Gen8Mk9gbZ7Y24kK4DiALtJ94jNoGTcYwCokwKf",
  "key2": "3g941QuZnrhdPsrCveoWjfNfdFLef5ZumCaSJ3o7qacUwV8HoSRFYFWAZuSdjpX9CRhcSayUEcTTyh3Wm6q8E3vg",
  "key3": "3kvuDL85LHU9jMSFmpy8cDnBbs4AGHXNdTFLoxj47CRq6dp7GhAcT6rwhmapsJSikZUCbvKpDmxgiNFohkYUqn3g",
  "key4": "2W22jJRLK1F4B4kENXLstXFR6Auzr2RhfhVDTd1xYEMyAh4XcfNY7Xd2si8VbLEdpiKWDLqTJ6S7MRt5Kv9QhKKY",
  "key5": "2GaWs9bS6kGCxo2YQbKwGN58qQM8bS7h4XH83tz4gJihD4GSsusa8FhJZ5SCvHhJXT7SETuwQmqHQ1ShsFQM3Crt",
  "key6": "4YhxSf4GgnJYRAH817rGNwaUMzwZAPadJtG7eGFeFxFgQmKuikLZfMgu5MS5dXwh57vCnrXyNyMFHP4GiP3qPgse",
  "key7": "4vv3QD1ShmU9tx7tmxfiXhVT61p7t8JmLjQdTPV3LeA7UDCkZr4jLFHX4Qx47y5SgHbVCWqm6zA5KcAxiXwLi3yB",
  "key8": "Y8x1rtkzzhSifTYs1vNfNs51uTHdT4sDv4xC72G4PX4TrQgBARoU1qdu1veVwHwAUvuiBhck2Mn2os9qWJQPmCb",
  "key9": "4Z6jUtZ8fz86XrA5fqhim4L5yYfQZXxXNQmwCphNnVw87H4TqQQFXdcD5qsuTrSwUk4iPn8vF5eTKpXmray455iC",
  "key10": "5nXsEw1rkdH2mj3K9uipSpkTnrwYE8CjQNUFmYY7MyET55kvwzxrQoMDg3es9VKLpYerxcZipnoLW8YBH1GcUZkJ",
  "key11": "63w5yV6w1rbzG2z48fkMeZRVeSaydb2hYHoTvojRSW8mDhaanxMKC5g2Jub2vSFhcqgWEekBkPW95wtQxoZcfppe",
  "key12": "3UfXYMpCN9SpLw1PhX1PDVFv9nrQXyGwC5qMsMxmnEVTm9i3k1AmwpPFafEMmGi5xnJxRoGHzM2UofMx1T45ZQ9t",
  "key13": "GqeyyNkgnhVRTuLnY1vqb5Y3b1uMoeV4fvyUCp7GRzXGU3tzfnAMBjVkaPjKCvMEsVABV4Gxt4Yo3ViV2vAF9EM",
  "key14": "4ZJPXmwBoHX9h63CBwanwvQdERPAxjBJU5Hn4e4frhUV2Gfas8GKw8iMAuj7oVuF5xm1mXaiVSEx7fmxHmeMajCd",
  "key15": "4qmkJAsbPgNXTr4BZNCgwLYzhaCqhWy4H9Y7BJPH89GQ4dApMfcqUGANjE9bxcKKCKrjAtRTCso71twrJzQTf9TF",
  "key16": "5NM8B1KzYQq6U5mNVQRzjezJ1X39828RtJYbpMCoQ5wnUhoaS4bMWjtXVHygMX6k8LPC8azfybBQF2GjdUuTgjcH",
  "key17": "3Pn3uJdJGcwEVdinWxJgVMCErYrYUKQVa4fwgoBxLcga4xBqQyiSryh6RJ4W4zVqWGzZXJjRKTiDMqU8sK3YrQSk",
  "key18": "3CDwXiLkxjs3N6iQpAMW794X9XucmmPeogeEHxFj6wojxrZNzXrMfWkX1XQxazUYX2DgbiEeffQ7bhiCEzYx8ds2",
  "key19": "2khZbm4JeNoAqQaircJYDmYa1BGwA6KE8yMANoCoBhZ14Lz1w9PsSapCqzxzUzrzkvwMASxioin8X1EP31qUvTsn",
  "key20": "4wyH2vn4zY3eBonCHCiYwrExyuzFaPapsVA2RvdRTRLdGcv87HkNH4nLTwQn14LrGDBfAWu4f82Jtp4YcRrosi62",
  "key21": "35onzLr6jd6EwNuqEUu97pCca7ok7tVvYVNrVtuAW1EmmLnrf3GpExPCkvKcfuYVVN98HC4PFt7utR33UaMXZWko",
  "key22": "495FnQJn7ioFXMaNdexjgkzfRthXwnJ8ioEY6S58HFamnMEWHYqh95LmzpamedzML2W9cuy1dFVJAk3LzjR1Cgxt",
  "key23": "39rQnnYsRESziM3JBa6AKWYSxLNCyY6zuTZNuDJzMxFZjXWye2a2dy8o5pQru5KuiTWT6ny1w8P8DNagwtJsAHCV",
  "key24": "5JUuCRLX2Ba8WkmoqyjqMXnc9BDDeeBCy9GHKugvS2Zaci16w4QgAM1F7uEdDgzvwEAw3bvZ7SZihzZawuviZm71",
  "key25": "2owPNbfmeECvToPonkPt7ruoQZDYTrstEbxbWdHE8XmMeNKCsc5jkdKZKSVrhJwyXXMaJ2t9zaHMoan84jiJSBej",
  "key26": "7qYAnHrcy6A1FPWdPDAE9zBt9NA8hkrTh7LJv41SCconb9LzKkSpex4Pws4ybzkS4PfhnFf8cGbkMKJwuc9xCNK",
  "key27": "BNfuwwUe7V4SDUHagFpqkp1cxGJQmEWVisk49VnhAnUhWsbZJpzA94osChrzGVu6GaTSVYYfXXcAA8Bb1Xvrukt",
  "key28": "RsdMXyrodkuH9SgjGgSFhqM6Nwsme7Dr2H6t689wLQJ5CGzrEP8hKAVPGC1tj9J5Z2zuWvEtVzmkhPXx1UtX22s",
  "key29": "4twKMQvdWqR4GQ69QBGoKgHqSdpCTDAGC2gRbpEr6yjaZ2jBa5FU71dxZiAje4Fvt3FZAJvUzEjSYnh6qPz9Hna",
  "key30": "5aQCoYu1iJPQS6cVht3TbcBe4pZSrpMvLdR6qDWtZxrjLrRsYhzYk96xyKiRVXrRSETuNsjF8BchPFWUdgm83oD5",
  "key31": "2aFAFWfJcsRLZenAsWsCgy8zBrHNb5D1WCui6YLbcW5KMGRn4efX4ZbpRWq7yzgwHXMd2rgRhTyKpUdFNmf4SPt7",
  "key32": "2uss4BUnpQV8EnhVZCSQxDtwWr9RabENZ7Zb4AyCqDfbwwozPcrn6CD1UareQAzgW8TnjohBRkSfbAi4XjCQBXGo",
  "key33": "AY2DDmFMwMygYxSTQNNgSiHa5YW1Lq3txeoYw4CtoX9VMNoiBdwJhMYboFSuF2WafF3FUdbWxeTAhrvdo3aGmpK",
  "key34": "FLYfeyJzKJZEL4VWR4w9ns99Wv6VwQPfM8JNWLEJwJX8RjvoPbfLoHVATNMUaAzKekajWMNQK8AVvvpCHF4zNwz",
  "key35": "4csKDmJNzk5iaV7pqvQbntPQXzoVNC9b2fuREJ3z9T9i7VZnYJf8aDJxK5Lc5SK1Taqg3HSkSBLuFBHEe6aR7Yco",
  "key36": "EUEFQKfLaW5BDFHBBNCgwah31VwNVqaUXMGyQkvtnQFsaNUX1wbz3xD6WJzNzUSbnAvd8yguEyr2RukwGTvmjLY",
  "key37": "NQVU5jJ34LzwCfMk73CrAnC4NrBhe1DDRpagT8BTHHQzj5Qn9q8YhMD1xqMZkWdQsFqJATPkSRkWwC18GPbFaeb",
  "key38": "3frB3sv9L5x23CUF8xo1MXkvwUGNeW4KvXCv8j3wTzbYK5teT1a2vCWAaEeAicdUDJYKoDSZP6KMcvjfyXRRMzQU",
  "key39": "4asHpqzeuacQy5FzwGQw8c52oe2b2EAaxsej3CUAryi53rTDARBCJn4wbwYDsvNf5Usj8huCv4M4EcBVfGamaFWq"
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
