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
    "5AG4Y4vnakAYpqMo8Pgz621mXZ7WrgJbb1v3nGqKQpF4SzCqguQyXH8vpHFPf4Br6C8ow2HWydedzecw8GGDqqBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FNkpWx4qPKbpdysBSdo2w3QTFNMJxoQXY4hnqpTKwJtvGxsFn87mF9uNcdhUCXSGhJc1P9QGqkP3LB6KHKzLtok",
  "key1": "4Mup1DzvocnZ1K2cdrrhip6EJosVniiFZ42yUrTn8HPCbdcPcydRRZxtdwC1yTTmBeNhDJp2CYni98qxuZHdzKen",
  "key2": "23PTdT6J8D9Zuejg6yyw2fMGKxu9pprmS1d4w7nsoKCvRP3i4JDzD3WHQdDWVicsFJVMHiK9oEXXnbK9t5X7e8RC",
  "key3": "ePqbaKwAUCRya87RvXikLVUQhKn8UyLLT943eARpWJqvbaCkeXy3YD84uViiVYzBXp3eEsn6tFF55sTyZcfeqnB",
  "key4": "3NZ5JP4Uw1et6keThwKmW8fkJSqbVuGfzz3SqKTZYnwx4L8A9SsR8SFwZtErCDXfZ3wj5hTr5RnHXWYpSTPJ7oxZ",
  "key5": "iX4ANyxzf9ebAdCNdweywggTkKkkqnW1pCVkVkxrxmRzRoFb8RboqxUEJG7vAc9haEmvpBSoGFMFoXT4kteDJSd",
  "key6": "3JRpaCDceRgNWqqXSrSiTMMBVJhtfys64BSpFJupnPxuRLCof95crW2DwDTF9AWJESYG2d2VxoMhATFaMBDHVp1q",
  "key7": "kWTLUkDdXrgxZiZSfyywF8um8WgNtVdxUfK6Uh3jBQFrHfjAzVeBCxyNSWzfaDnvNQwvryC3XycD4pnB1nv2KCo",
  "key8": "2emxPderBTHsxbRaJC1cNAVZbYv7EJNirhYHv96qsrQ3mSBYTSBkoWwUz2ybPhWoZS1s76qDYrprghXR8bJoNfGY",
  "key9": "4D2rWCxYrMPzSeHgZuH8c72nkBoE4xvevLv9mvoduskW4rap6fik2GmbfjSTWSVGLxeiDmR6jbxD9WCvdscNTMzR",
  "key10": "5Sqtmzqs8PGYChTxdQxsenaGykhpD5eHUbP6DhBHtq9JfphbY37k8rj5BXcXcaVhEDHLSwktxdSmpH72T5wqqX3S",
  "key11": "3yDA7Hx2UYssit1DG87NggVUPpoy6YVYaJTSUV8ziacALbA2snneKHPdhKRXLg4w6zCEXmM4T4eiZFhAhTVDj92W",
  "key12": "5CiXE8u5WiZsy8Xj2JqMVkQLwdv4dFsBXPDP3PDtSYW9rU1xpRosfKf6qZHdLWMy9ar1Tscv9QtiRKC9d2AGbpDc",
  "key13": "3P4hmckYJuKx5D5KdQGRi6yLfhNhjzKsxaZ8WtBWQpX1ApfPnT35UaejAzKZyXPhE3N81WzjRXupNGt1uQ5uyh7e",
  "key14": "ATyrnK3cAjJGuZcTMPFyuHCxjmCGaYKmt3kNmGExVeKsaK2jTVREZgz4kW1ormBQGvzSk4jc12MoJsLYE4sUaTu",
  "key15": "5ansD3Ko5suDdKYMJFXNc22W8JY4CLwYTsduTnxaYpvFxJyktAuGAWLQDMBQohhE7uZAme3cfNq1QXq12zJ3DsVh",
  "key16": "4T7o3qWysffR2p5mnA8qEzws4yP8Y84XtXoL9po5KpC5yH7res3cMyYebqTUjMEUqMZUTVmLBA1kJ143yaS67Y7n",
  "key17": "5E7JQ7BejYzECnUd12WgXRrZsKXHBmaci3RnL9eKmeZ37DHoFwWg9syCwARDmYai79hbsg1trc7XrbtXgBgMtNNd",
  "key18": "49nRSqVKpLmKiCE1Nq94y9vbqr9unSomuybPJJn65WkDCBhhN52GE9ZGBbyn6GyRBsy5y5EpfYruZPA3uCc1qcUJ",
  "key19": "Q1JLnYwofxFJwSaQq8J6t68aPYKFSBLAwWBWVxQyFndx6cVBa63BbdEmZF3eGVTno2HXzTfxk4oLBK3QyFMSVj6",
  "key20": "3kUx2h1aKNuWwxD5WK9qMNJWA44GE7xA938ZAvpZ8GVXeXtBMa4HQgAYrbUPtdRzsURtup6YtD3q2uLjZJpqVjLC",
  "key21": "yTqgcp3NovmvpxcyCpGMHPtKR45U7D2WwTDWRqsfjVtnguoGAUS92xbddwqTDtcMWu5eJyn3BmajrPeptHhjTxE",
  "key22": "rR9NeuqpdSVRQy7A8KUyhxsidsrk1HxaBVxK1q5tqjHUHRcSgGKFeeYMB5JedDUMn16WMjM3FvpBmgwgXDCSpTs",
  "key23": "kHbZtRJUDnEcNtoWYZ72rWNqqHXHofoUivtBLNLo9BTpcn5J5jKhw2QS5L1L8qeriffyFu1hejurMpiejqcKgsk",
  "key24": "4UDy95AqQwS5xN9jWoE1AV2tXaxv6T2vL4HZPo4rTiz291S9vXVWRtF2SDRuaeVQRC8yoyBgUMdpYVGLNsxowRJu",
  "key25": "4WLfBf2UBiUe5T4sbpqxyVM4ubpAJmpn1oPsFQtNfbVRehb6N3cADgQeEgGrpT8ZbbrraiFdrgHUo9iA8nStqMq1",
  "key26": "5sbQgcY6uXXX2vLiLwRsHi1mJGAtKDbEKfEPyJJPu5pySH51BcJHKtRdeYdkCy3AsVAqccq96fjuSa5mvMv6rgbJ",
  "key27": "jmfbrBpRnMQV9XTb7uvJbk6jyEfrRLkuZSVJ23NqDnuJi223DTZi4ncQPti2tXJHDKqfXSYmLmXZXwfKyLLnq38",
  "key28": "oeGY19dDWXscTmp7Av4tz5rqmA2uAFrXGvTiNpaFAB7PGv71oGmNx7KFLQbHwVn1DCmieaUL5KjH8cFQFGQ6eCV",
  "key29": "2WbcRHD2xWwyKdmFKZVYNuXaRxa9CCgeNizuJtHiZJPaj6gbPEUhVk3YewyeAsFYJkidZYC8YYyfdNwdfbT8Xrfb",
  "key30": "3MSs5GAshRZqZUUKC91tXp8WKa7EMrWSMiztTDnz4J2h58ExPRMFjwXiamNeXAnMsmY3SzJnWkS6FaHA8DeWjvwx",
  "key31": "48VLCCEuin4jdeNASrpsyMJUKwrddfFLfiNiiphoQ7n7NCdE7bKVbzkr1mDs2L3pFPPH3hkkWxieXNho6VaKjdio",
  "key32": "YtZTAdeTVwqSUoTzwFPw5Vj6U2zjsEyA6eBmHJEnURCjCgq2B8g6zn9zqBBw9hF5pKoWs5Wx8HGvCBarkJgLz6M",
  "key33": "vkB1wZ2m9K3QswT7UT2NMAza5iYsWBAZ82W6oL2DgM9X3VfiXjjpZ22QQAYbKr8VMEiJdkfqYRdrPBoJNTaBPXx",
  "key34": "puvzUue6bZpkZHsVXLyiuG92QXs2PdukR32hv6Gn7id9DAcdyKDsfofZdvA6NaecdaxXJiadCxz51AMLnvbir2p",
  "key35": "rMTQFNeRugCqbWhgxNE6iXDYRNVoPkBwtLMmDEEXmrqcuESkkBaRxFhXx8HaNKtht9nZyCFQ3bsd2qMqHGtrS1S",
  "key36": "4imMtNRpajFeTdV6k9BFTk9RWHaeyr4mL76f6ZfEY1mfBUXnAY178nGq8LQ7SVnLDzkG2tyjKvVLTr4khUASd7wQ",
  "key37": "E16znBWmcdADFvt62huB8a47qQx9b7wis5Lj8Q2Cjm2KMmhpKnSrErXYe1sAtPH7kzyCk95cS1BSK8VZrEwP2av",
  "key38": "P5fYVNg4CZdEtc91ebZAkRNsWD4dU5cEXUWWJYEWVXNMQTTaZvMcyL26mABeDUSEJSu3zSQ6nN5P1d8ueqTaReW",
  "key39": "3iPjCScfHPn928XJfjC4erRAGAt5dmJ3Kx1EdA9R8nhex8MsonjMiGXSp8WYStFidHT26RDJADvpGSpbD6H6yPpj"
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
