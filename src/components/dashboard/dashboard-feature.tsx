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
    "6pn4dmSuzjEreBpm81NCeQMxpYDa94fuscmnoSVTsRxweVUqdwCVAKBkTmBxeXgnDzN4EPs5PLqeGCczrep38Yj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mPxBpQX43WDLdUWcT2R8rUEfTf7bdLfrA8Ez5HrnyF25cQpstV7bqzAp8TMCHYUbppCvhGSn1ZpTgwQA2DhgnsJ",
  "key1": "441z2biETwywH33RcY5KaG9neyB7yem1mTQWBLcnE1SKHHTbEryHX69RWgxk1AtDJ8tMfqPa5nkJKauNMFjapvrc",
  "key2": "4YQmMojkAdemFvJ4omY51oAYSEkyW6HdtBGGvYLmgjopvu52k435fxCT3zu3coe2Uk7KYfoaiCA77p33ZWA2kUqk",
  "key3": "38xsD9ZxnR58smVVk4L2qUYwt25WgdnoARcAJhPsopK6n1EYVhRZ1ctiRJSNbAAa1TYTJH5TXRwbhWx7ogZ1Q4EJ",
  "key4": "ChQMkU1RprX3HRPzZiWngkkvEKnLZNj4wbcvE7GUKHcBnK36gpwzgfJDvLNL3rsmqNutXNz1YqMMEDSPe2X8u59",
  "key5": "5C8MG6k25cmRb5nzHkCEvEFyL762Qm6FtU149m6GveuR9MdfAtQKABHt5KDsHpPfR6uQrBq22uAUWsxQEnRYUdhf",
  "key6": "4egdcWxZeFyGANk2yz1V4aqERjPms5gq51py5AwQPaRXq9EqFZQF4oPU1TppEt4mhQyE72tMCVXnv812EeVXNhf5",
  "key7": "49BUZKVAa44yDTYwZ8YPe6yfxEbTTCyD5kJB1p9ibwtnVRNYdj5SU2hJ3eWxyPSjeZCNWHgKxAqZcjkxri8iGSRn",
  "key8": "3seX2AKiJPo2s7thxfon3i5B1MtYSaBx8tpHL6MyFenszQ5SanYm1HQgU7FBgtaVogde7M5GrFEQws5QrCbzh9iz",
  "key9": "28A2LFo2MDuvVbBdBrvWWXsVmjgSvBLBnEe2hUCRU4TC18m7qwXnYzEN251WDQAgjS6prpM3n2zjyvJecf3dhQik",
  "key10": "5nQBoxwWSRuspCBhN55dT5ZKEpa8p7XGHRu2Mr1XyHB3TGP18XHppJP1JrFiQVzzRHpfvndArr8dJVYtSrafVfUQ",
  "key11": "3FwpdEJWZi8pfTAftGFkmtHrxBCsGZe69gmkB6v2gaoKhsPdhTNNVHjqkg7AVfenrWeWweLeAgm14UYrpe3FZbmQ",
  "key12": "2XCXbStdtP8YpqmK8VmMJWopCvCKkD1GnR5PN9nTCyZEThLwmuokcJ21cL8onm9kRNyg2GoxgHTUpQLZZyRaDCVF",
  "key13": "3rUrgkPf8zAxQ1X47tR3eR7nnq625dYHXxadEZdmUzkF9PYZbEzpzXwzo3QFtwoNPy7AEXyuNyk1dn787yoNXqNm",
  "key14": "2s41zoZFFZRPkwhqs1ckC8wKdvvwPitmPf399X1cmHA8ktMNaqcihnE5Sm2XrcFFuJ5qtmMEgTUouMYyuV5ooTem",
  "key15": "2Fp1a4ghx3XhKizeWSpEoZVijoyESwHVZgoFi5Tt1u2U1iiQdKYWFRWUnMCiPZUZN581KkpwYi4THeeBPFWhh3xu",
  "key16": "4B63L8CKqD6BisQiZRLpmk8DkD8uPJ9w9xnNGwi29W5meHRxddKoM5kLS7szQP6ftTLiGvPQXMSXYJ31hYWUSDDC",
  "key17": "53KTqzKJnux16DFLVpsRjN1aCio99C8bASgPfXfUVi4UNrRtuDyPomu52v7QbuSDRDijbjEXirLosCZZQcAPuNUE",
  "key18": "2EMAp44AQf3amHnMGYXGmJWo1Tt3b495iiCc2iF5Zo7eo173ArZhX6Y4rQFTnCL9wQRcUQkLzaWWshQthXrKhFRt",
  "key19": "vJdiS7ms9n4TZMx1mnAERxvvWh6xcKnpWYNZ4dU9cP93cFKSfe8H9HwzVyWwyHwCJgn87yf6DVaS5RwnCEXW6Lr",
  "key20": "5AGoTiujeGtndaJFynxujz5wZb5RCgis7efwJARuxpVeHS3T2VaKU9G5UGBd1xgNzBUwCDXLtHbRFStZVM27JDN7",
  "key21": "Mrb5gwXVY92yQgjH45Qh5LYA6iGyWSJe2EzcEStt2JRu93skyc4SzD6Vfjhfobob26H9q7AL2Nk3QoYAFEeeYam",
  "key22": "5VNmZucZ5EGpL9NU9KUJM6FxeD173WgQRXxHQbkyRFDfX7u5ziCXViGnXZ7SsksvCuJVRdGbczXzeac3gNHJtrsB",
  "key23": "2qqof65WgDF66MSgbhMV76zbhemQqGu3NmPmKfsTLoz9nM33xQsLe11Rxbw14wxXkVfvYRG3TPtRFbMhHXMMbfAq",
  "key24": "4kkd8pTY5P6T5nzBpVhoZzhh526qwu4Q9zcndTBKBJt4vVfGy7yv8xLvrqJ7sSaWgo2e8k6oukx6BsACp72ojQaV",
  "key25": "3z2N1dwfUSZJZHNxxe34QbWHLkYrVrxWbzRcH19yiGhTBUSgHaiQKQwiFzMhaHWumJyXv33jw91z5kGezS4bJe5z",
  "key26": "3mxTDZ53fU3BA7j49HYBoL324x22N8rnHCkUgv6GCB1rP73jWVvcFECZ5aM6Gjh99Mz4HVENm1fDLtktJqeDLwW9",
  "key27": "62H7QfZs9wh3UzonFHTcP2yt8zJc5bdQQUeyZHno5pWqcJAeKfVfsGzgvCYuLgPkdwYLaHQT1uRH8Z2VedTHWmH6",
  "key28": "3q1H7oYWcLeixAtzH7YeFzhHS4bnwWJeSNdgKJRuy9b9Anrj3SGCi2ybmqLaWGt74jYCNGGD1NVySnhH16CzKb9E",
  "key29": "45XkEnwzJgJJAn5SvLQyLZKcBsbPLdC55x6w7zrN8xK6djHzHPXqUYZzVGNd3VPRbnUyLw45okehKKWS8f9rengp",
  "key30": "36P8XhvRxB7nUAXmhBMLPaqKwCgnNzVyS17U3cLDYqEAtUAWrb7v44KV3rE1w97jDTuZjePN3S1oz8gZt2KnRBne",
  "key31": "4kY4etTMMRu49BA6mWz9SMG8bP98o47XHn8Vm2zd7oKQ7VCtXWixWRDXPHxuU6gN8Yvr5ap9g1SrFaF8DbKh81pN"
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
