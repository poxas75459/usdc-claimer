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
    "2qYPvip84hhFFq5Pm4sirH3dGD4JKQd73gQmbDMf4up63rT6fY7WYh5ib4wwnXZTL3f7ChrJSiiDSeFeFZ3VwuTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eUy2wfeyNioqna4ZdNBSmdxwrKduT1CJvw3qu3v5SExbrkL53HXbWyK8hLK99VxJuqw39ZvMXvggJ9XbTgBJMpB",
  "key1": "qUDAdudh3jADx4EQ5DYA3GEH6TqbijTUhtGigbUGTZdseuKSTH61chfuX2KW8TsGQVz97me9qnLPNGDUE9dTNUG",
  "key2": "3M6fP5c2vSHMA8mmpZ7d96WBxcgMDFT2uDJwfRb3aLAbtuGmRXPUUwc3inqUNfBGy52aHP4aaxVo4U1VxuCebVUz",
  "key3": "4TJ7q6cfiDNiE35pWh7awijVd2ycG2DpdjD721Mppd1n64izbA5TvR3kSguC1QLHoQoNLJEaDDZ1u7aW2KrhDnCa",
  "key4": "QGzN5NkhCdGnyP4W7xDTLvaQQoyD58dH5y8vN5GPiAMqUimKhQZLRAgDLyA3FGTFMMHQN3RRAQytGrXwFqoxH47",
  "key5": "42Cbr1Nh9BBApCJHNAWNQfdcL3A7GLR1pHYZTtCsNWza1rdGKCTMc8oq4NUanHe74Snsty5oox9yfxJVnfuCf13p",
  "key6": "4Y11HKgAeH4e6FgdFs2t5eRgfXSzGNgSLRmb3JfBSoZadaUAUR8G2yE7tuauRS2kifBqFGp8wakbjaYwrZrqPE6N",
  "key7": "4waJaD2i1DWG4bPcpbug28qdSEtNVT2pqph5ErrwvGZGjBdkHNQ7w9CrJ5HRX9NwaMjkbFremSJ5cLt3cmYhkw5k",
  "key8": "5soo1pt65dq2wFHYrez2JuFsPB6DwMym5jBESrDXw9AosWZChB6on6sU56EAqBRmiyAebtssAB9ikrNdZfv1KUjy",
  "key9": "4Sx72UFRWnJmPTzHvsfWmYiT9i6HW9Y15CdctFUf46nAsPJMYAeEDVaMAD55pq7pM1sVS2gzoznMkKwnn9raFrpd",
  "key10": "L6t5QbziYkwa1jfuvCXJ2WxWpBBSnh7XjWSWqr2Qg3iuAaDGV1dbRhKfsNWkehPBTBEGpzR6ZQJwjJrrkXbJ65J",
  "key11": "5oViqB42gNFpADNvf5zbJyhntYuMY3Kyremd2bAiEb8Xnhj6m9WhZSsmttwHZ2pFKHpWFvUE16AuZGyd3hrZ6CsJ",
  "key12": "5PVD9jU5n25E1weJ5fkMv6gwqYj4dGWbH9yJfPKvZUfSbgjw3hz7t7jbq4uy2W3xTKFHLBSimEMSREwYznYnYgH4",
  "key13": "1JkPJRH9XR9aSukKM9R8R6cQuJsHG25oJuwVctX42e3BTmLxyRPtMU7qfDz8TXocymaqC7dc5uprHFXTVsRK8in",
  "key14": "22V8kJvghDk7fwtEvombgXDcXU9Xi7TWggYfUJuubzr5hpQy5dyqs9gCWHw4vtpAXtL29wdycVXQLVJThDGhzsA4",
  "key15": "2dZD2fqxA3uFMYJdLMnDPxYNnW6YrB37bw5QD3QJrgJJDNnLitz84V1JSt9KveEjRktFeQjrNMTuZZwvVbjW13Xy",
  "key16": "2zxcquu6s77waFen7wwdfB5jef87KzKmyPpujkYABxDGJ9BaqppYXd9y9Ej95UoPRprTFwxceRvXZXT29VN2N8SA",
  "key17": "3TBff4sjfJraufGMPCo1fQgC1a28ExxUVYxWa8obBJn1S7jfHyQxs6KdmhX3M2th72fJEUT3Di34g2Tp9JbRZ8Wi",
  "key18": "5iLmv236LeA2HoLN6uXsutGhk28REdFedpu8gSwNFNV2XYUqEEATp5Ze6EwVQgcH6VMSStc8AaBgBetksLH8NXDR",
  "key19": "3U7zjpwnfiYMvEGKekKejLS9CXHo3TWaE6JFNmq1ZQwQYCCpaViwkz45c79zx4T4oTcC7WSZ4Hkpa3fHgEFHSvQJ",
  "key20": "4Pyk6VSFCZ9FQTDR4pH4aTxHq3k3R9s3V6u83u9MB4FWiyh7j1r9Xmvk1tQReAJPR5W6AMScFbfsmHhzZStbFgaq",
  "key21": "aon5esd3L8vqyzeV9M7FWd6ikWFBWWto3nKmnbSwDs3FEcz75ReJGtSuDgd2h5BZfVzLzSS6pEytpmmUS3sGdj5",
  "key22": "4S4wGfvts5qJxQ7hvkYsPnf4jAioX4ErdzB5HPbfXioa1kfPzfGQc3eA23Hs2drztHpihn21vwqo1bFwRYeJ1xBZ",
  "key23": "4cGqwrGmfceaEU5WYqQY9xPUevit9n5bJEazefNnjQvFkxEzLyDN4XFhtkUXQdE1QjdoZaGroPqPY1L69o6pgkwT",
  "key24": "2ksukvdaMvCxMENjpBz7aZwnaxtpvvHyL4DzSN2FgkZ8xxa5kZKJuQDobsehJWwGD3X2ibkpfEXBG1AvLb8EkjuX",
  "key25": "2xVK63hkLmhMScchg3KRHyWU1rQ5gPKh7EkABN5dtitYXo6KtLzczQAKvk2qUmkUf5TZjYU3RAvJj4UsPsG5QStX",
  "key26": "3p15AuJDCeJ3iz3Z51ZAX7icthu1P59cHEpN1s2KJWjLEDFHJkfd35xyMVe51NAax3G9KVZ3yNqCdtuy8huDB68Q",
  "key27": "3sfkvvYAnrzzfQ3tTFCCKxWe5eoRYFjXzG38G3Bxvcp4jpHH2ok9erhJZaHL2tPDT9X2qTvsr4QUbnYYDFgnKRxs",
  "key28": "4cxgahcwzKfwGy16BE35gn51foUGhRSVApfskrf83EY8fyzgMz7MAaTqLe5FvsJbLEMrqbi1Qcb7H4rRyeyAZWnh",
  "key29": "WvfE38EC4cZKD1C5719YMJexJPUG4EfFWDkoAQeQmRZJu9yG8R1qV5Jdo44i3tS41yL7fsDZqpvvLjyie8w21KL",
  "key30": "3GrAmAJT5iCLCne5TtskiXtzbgwshXdAAo36Q3eXq1jdkEh8PUpFtxJBj5tvqhNU83v1gTVE78ZymrEy21bRcXeA",
  "key31": "5AsCeS6HktcBrxMzhyFnYdJzMiNRkTf1Gu72TsrMUeeYRZcJNH55abfj2mMXTwGSPyeGvAYcnaH6vHG9mHdfDHvk"
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
