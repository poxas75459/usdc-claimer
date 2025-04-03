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
    "4kVMHMXZitfPyawdySr36HKrgFbHC46LbyVY1Nu7WJPVaJRKaWfz7riovyeSXGbrB6GyYbgE22mZBonNubnHWZn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KzAGomqk1pEcQcgt5yykQhQNRH6W2eY8sBaXjuT1ynJpuKwRuKazHzWHQk2WCDmmGKeQsJWVpWoSiwmDC4aTNqX",
  "key1": "28uHqB1LYRetDZemo8kn3nwr25Lw5zpjZdXdma9wcDnbmeTTrixKe4EtyhqGjEHc6uyovnPmUnv3mE6eS2p4zCKk",
  "key2": "5N4DWtqGwrC2zXTYGGEGG16MoWGMcNBsvsqut5M7YaaJwSfiZEmyoKerNjeMrjcn66uYdvZM6HRzLwCbvvCJnT3b",
  "key3": "4B3f6watJcrmH8SXvooCa6Nuz2sGAQK1Fh3SV62YSdMMkZv3tzxTihPBfreX7UUJ3etN5RjxtBEVqzxYku8KREqq",
  "key4": "5a2v7rcur9zs5rYYhJToTttCNmPtW4pySHNNkz3k867GHELnhxe8yrgq3M5dvhncXpEzSMNDAAjRjuZcNRtgGtyn",
  "key5": "2SYuos1s6JryiyHevWsoBH6wSEAtywAstR9GThXvVZ3fgEvBVoU6Hp1hBsRDSoY4XJEwbQW7FNVzv7JRnBfN5uk3",
  "key6": "26T5kJSfFi8HJdQeUKXrFr8YhTEbCr2wFsgSyGLWojLSPtCxgWzwgtHGmUjpHibcZquzWLdrERCNxEbFDYbVD54x",
  "key7": "3X2tiiHiKNo4jvQNTMrKckR1NQsynTNbf6sPP5avjiqH2Lk7XZzBsK6wS1unuSjGT5GvPNtF7ErUM7FQsueo5D7a",
  "key8": "4Q37qTueFLDfUyVykFJsYprfqEEHczBoTbCJWsUXGfaRrYTz97nHNFUDNNryp1QJaMEBShMGpTHxXQ19r6DYWnjj",
  "key9": "2EYbrwH9K2BEdUQTeT56jSgDXZMYt2QSv7pMZ5KjwWWQzZh9APh5dQu9eftFhr5X8mXJnCQFfAuLnD4pgzCGgrTK",
  "key10": "4jr9osTKFgPDLiKDoBtWQh4XQNa8zSMcsE38eyS2sAzjFdTKFRRSWxCoRaSJ15xWN5Y2pSNJDhLybZUA3MSofdYo",
  "key11": "5LMymtAGAAa2q9QbhuyTKNH1pxeUJ2X9MFCsUa3zYHtptn47dDQAUt67N52Ksdw5nKfJqhFCgjBot9brGTRD6fqU",
  "key12": "35NCS4fQ9qzWJ6bcfjX6HmE1k7Y8jd1A6GLgi5V9tjbooL9KgRpfhKdNPNKTCcQZe4t66M6ZADiLW6CczyaYs8ng",
  "key13": "45Dr3XL7JXdMfgu8cASGiWwrPUZqXLqurrqyofzEQCo7tse2mYq7Yx4ypp9EDt3WTXA1XyseU81Z6sLNGtjmBsfx",
  "key14": "41wgcovXzJhzYSeok6rSW81LQzUyDjroYdX36v7H5YArNav6BUcPPAUAUD95jKYEY7anzTLY1S4kn7W55L9d7QN",
  "key15": "KH5v11HdZa85bNfq21gAVpR5ZExfQPqdVXpCoDmVUJHqUeinw6PxQVQrQ7dbJXDFrsiWiBESxBQcv1nxP7WdrBt",
  "key16": "5gMxebo8XQrWZoptsD68oG5XVhgBrZZB8GKasGT2WXEf47HRBtGqkPYV3bjmUrybi65H4W4dwZrBf8JHXAvjZZAz",
  "key17": "5TbsuoTf8KzZ5L6m1kJa6sLDtFhv9YgWyxeaxesPdHwVRDDVudMwkgzPyFDniFgkHc4n2M254ELkRi4osvDid3og",
  "key18": "juS7uyDLnzomNtzYUKsUi6891rh3D6pnmUpk49dtzDKDeBTGbn9SSdyQc49NDNYUkbzDcqRaHJmaAcNKZrWDD31",
  "key19": "3rjDVeVNx4WDDDTxhk1L25LGEQHncibVE5gtgqLJACn4GG5CVP7o7baCKV5mdQAAS3zshS8DptvCUC6nr8tTv1Cf",
  "key20": "54jSuGaVnJ9CA3PUNLY86VA6gcHFRryNXumshfZhvFKX2YyuTfQS1YLV4ZG6TwkkVmXzKUKxzbnwmfmYQyiMxVSb",
  "key21": "E755mQt7KMH9St1TfGiSdnQcAbZHP5gngpBoWhR4n55z8RXAKYhmorkQd9KLw6CaRAA7jx1JSanPzprtLRwcYWm",
  "key22": "2gq3FRW9u5N9Dt51oqVqy2qto9QMFCVKPz3UMRZXucT7kLgp3uVorixxdQo3gALdtd3wZpD8APtXsfgD8Jiipd4R",
  "key23": "4Cn7TTMbBscDtJhRVpemBX1cBL6JbtzrvFVtuxu8Vafq1KZp6My46JEoPHmgkKtMrsGFDemfggPN5Qbw5Tkf9bed",
  "key24": "ScXnu3FaRvMQURGmkxM6YWogHy9wehKHt5bx66Qai2nf1tD7V5RYknTzJa3BYh6Mq626LqXLDwdK9A15Zfk1AjS",
  "key25": "5CC2gENWS5KohNPHqL3TkEc3AHbf1eVeHNwVR6vVN39RuXNsVk7uKWJCnnnGrEF13JCLbfozuaHpeSurQxtKxDDw",
  "key26": "3j2x6h9QZN8m7m4CCfaYEF5C75256PbR9HLe6cera6sMJspMqSxyAP6rJYhw7kXZnEKNUZZ8xndtC69JQHL4atbx",
  "key27": "27RrbDvHH7ded8nN3TFHkFUpCR91BH38o2KaxMeeb8y6ZFNJ7DkHK5h3gb9SgrQwieb5xdPwuhELm7gDmqFTPbxL",
  "key28": "TcFYWM6sy49d1LWyvUexX7xu4D6YHnByUAGDbQuQbAScMbiB1XXEMVp1bdwykgdA7rm9ZDiEmwPLcuoPW3GaNr5",
  "key29": "3xfwM6qx6hLTmVGAU3eyzKzB5VCYe8mWmHmrpEqrz8RjqF5NAWNWhwUaGvMmJaVNJyLPeWZFy9j4HonWeqTfmoRn",
  "key30": "WPcfRnYFexgStNrg7MVfMX7Z2gXUs8iKxn5g7kMX6DEUDnSzbEEBLsH84E4CwhgnYM7AQg2zTxr1Hi6cBwt2okC",
  "key31": "YNnof2MvjnqJ5expPVvsLper9pf7Tg24vmBSr5sx4auptng1enHXGCZmpmyQzjZ4ZDHfPDfidakvhpm1XB9t1y2"
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
