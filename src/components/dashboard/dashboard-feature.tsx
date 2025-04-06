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
    "5mUKeMb27jyx75R6kHCPbg2aAir9pn1D5ihVzQ2AWAqEuEYLNYxUWRwHzmDCgth4nB2Vv4E7NRQgQ53wVmZTF1MA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "253KYgciPXSPN9m88FHWg2heqntAJyJVP8GQnnDrnqFmnYt3qBozcuDTTdJMh1T57tG3B5zsvDeKyp8UYVeJg8df",
  "key1": "2pWZcMfGsxQH21NfMsm4CQjwMoQqy58MKgnVvcZrfxsDQnLsetXyexh28ChYU3A5pBScnPWyPK7Pryu53Nexz3xX",
  "key2": "KJmRKDTRcMASd53nwwrAZNdtxXiaXe4VF98U7vejgESY2hWoZCyixzaEzKSPz1F4s8QYVCGBVamdZ2XpChos9ko",
  "key3": "4Muh7WMXHd1btYMmrbrdqdu3rCAz7WgvjH9FCKpncCtRpXT5WeWTyyP9aSXaAYXzxcYgmFMyf11NT6voTtdV54ju",
  "key4": "3ZRmVUDPhLmtj8Gi6xRc6B26bY8qGgLv8oo8NAJEKyX2iJtRDPdFqyNYRBozh7rpkeZ7cnnxSXCkYhA5rqv8Mkuw",
  "key5": "2cMioAJnoU7QpRZPJ7FipQiyddvVaNPMRmMQKPLvRbXD217MTMCPyx7yeaCNnwmZyZ5gQ8LfF3xdQeQ7coDek4bA",
  "key6": "3AnnkM671yH4CjSN6ufWJW9Ht5gfgS2NpgWfkCSopKrQh4HdiDP2t3LNCicsazKEoRN8NRTfmEsStpHWh2cHCrfF",
  "key7": "5eL6Li1BQUGhKTyFMxq3GMwfAcSrAv1Bbe8xpXSPJHZrwfjVpYqvKCXjC9Z3z5TAiUbLd9rJvCPtFC3SvCZZKmeT",
  "key8": "WyZsL51G3fX6G8EJNSZK7FJRYygcYWSsk5jGDbZFJi4QtmYMBKC2T44nbcVsF3gPAQQvi8V1zgMZMe9hzKVfJLB",
  "key9": "3LUjrCJo1bCpeUN2842djK7MLmF1ey897FUuUREYAfAK5aKXr1wuwpLuYyQoQ6L69L4d3iRMiE6iKRoXs1Mctxhz",
  "key10": "3rjDtoBsHKf2xMy8ZQkJHRf72fTctujhJFBKwJvTzYZNbzxWDoV7LjXUDhEFQ8181i7Tc5v1KjdHJEoUgdrrRgZB",
  "key11": "5CV1dwAzG5tuFdyTEgRFxRTSAkTrXc58dVoCxHYYbm9B7RLKi35nTd24frqvevH9wdKmZy6uiuhthKkjuec63Tyd",
  "key12": "5sDNy57qAXSL4TcQmgscNJQbrkeu9DKJrHZ1QXKeA46kAC9Qf6hbk3SKMNx6uZHBvQqMeaekFraZwbfhTNHeWjd8",
  "key13": "3tn2FtZ7q2iCfjSV2AwNaVVLJETbTTxeosL1D2EehFQnHMzqZ2zuTi3sdtF4ScmaPyrY9MLnP4J22d5w6tjATBrv",
  "key14": "2D4uqSHWR1xxYmrDSxALLWyKyfrjn2X9CNLkBvqm9BzAU8Wj6PAKXswYSv3yqV31X1sSYc5hDWjU4xrS7RzymC1j",
  "key15": "3cvKJsMFBq7WXnVaiuiMtvLMZvghJaC8E7YLYzm9s1RaSzsi7eTsSVEay46Qd4o3D1iu64kzow35RxKQ9QfeGHDJ",
  "key16": "5Znag7pxGcYSLyPWC2mvprKX2spw7nfGrDnPiKBsWagtPEDmpxBGFbc3wqYxp6QUNzfjFMA8ggk4xQfrXndHMZeT",
  "key17": "2Z6Qa6pqyhjAKKYTZK5VocMNNeb5UNNSGSdBrDEDRasAZh4R7hfDz7JMa4idM2WMQTddtLJoLMfGGKupuEubx7cW",
  "key18": "3QSZFjQSUJeeDamkmnuRy6wnABMMi4iscpHnxr9yVdJcTtp3EBeFmY14RkYHwjpzgsA59YdhpvkZBefxV1ScexbT",
  "key19": "2xZ7Q4y2pQSXruAy1G2Pe6NQ8jBXwuij6JJoquhdWt8TT37vNnHUtJvdhCbXb92osFShd1PH7L4YrgY9WkH5YrDf",
  "key20": "2PoTATf2WmeJH6Qpiy9Q398TRGFYuzB821G7rhr9NPdymAVGeQad3Mr8hBGXqhxoqXFZShpTFHdPUgS8N6rH7J83",
  "key21": "2LVGVLFGABM3k1Z1ANYu3YMTKswXF6W2yYCDHjS186SgXN3u1aFc5mQmfBMpuc8WyYs9QeKxSXbkbJSVYKsTcQva",
  "key22": "57FdXeECcThxMCwtJggT5LR8BgG8oENZ6ePJzAT8q7ry3vc1pPTmNkwohyXbRHohLKk5ufDzWo76Hooxpq3NrHwK",
  "key23": "3jLGCsFwBRrqT47JxoN8wQjfhvwz2tV5C6tHuqfYKs29bd6Rcosp8gN7DHGhou3vqZ1MciVRr9TqT2YGk9TCZ14X",
  "key24": "27coGpkkz4KivrYstpoVNGWfVa9uFDTVheZqG6nN98RU5rKch2t4b5151AXPDntrJzuJqz6BFqTay3njvndAkh5i",
  "key25": "28CcU2X5azbtW9ybhzWf7KxwJ8bJXmVAbBeJyPA98LzFngMsX1kzmi6fRPF9r8svVMqnpDREcxTa5K4Ce4SPPUd8",
  "key26": "3agXaBRouKzkfaNP5Wfy9j8Rwc11Y4cwbaTiMsezdNSSbpUF6Z7QR2j5z67dwswZ9XZ3Rrw8y4cQY7ezq8k6nxaf",
  "key27": "4bxZJRoL3hHsDWGVs1fhXzM4cLQhCA3XrssJSTMQhMMQhP5MKMoZoPren3f4aJPEuwG4LHX3LuCiEkgbCUFhVKq2",
  "key28": "DTXJrb27FJpyznaBSJ4gzoT1uNLPvztxhNUScbSjHUFnDY4sKX8YaMSew48L2UNC6e6vDvCj22iZkT2ycM25LWw",
  "key29": "GumodgNsxTXrYvrdBH4XZg7ToM8hogBSBQJvEwag2RQywQPfhrrgynQm6FqHtrrQbE6f5ErU4qAo9aMHXJF1cPy",
  "key30": "2974w3y1FS7pmWcZoRxSrLbwt5FYRySw3atw11dqnUNmMZHuN6eLRGyD1tBaZbnbuG5EKR4r6ypdxRbSNSspzHRU",
  "key31": "3EMo75DCgedpaxh8V1hnRDaxNoKRbDiHjLVB33eGXwXFesSiq7RPD1FxtdQkjvf5igYYmzoJmqUASXMsTN7FDDY5",
  "key32": "DdqS6GxsGWVyw46vhbrVFW1YcbZZrATPwnMk8SKWLjyxWS4wNnrDuZhuSKpPbsum7SHp4fMFNChffDGdAa1stuL",
  "key33": "39Uu83mRAYzVp6Nu5kY5BbxZEaveaSpZuFJfGCwBSViK9ssNRx1dGsiwV3EcBRKc9Loy2Xvq3cXndaREuAsP8oqe",
  "key34": "5RzouL9kmqEaxjnSPCsAGW3DaKMTwV7vnFGYA9YYzZj667n9tfXyCjHfoPc68BznrLnv3uZQom6PUp1PES4tKfRh",
  "key35": "2hmMDf8e79pWFYXmc2Vj7ugkNhd138vPaqqru6XQV4Luwm557cpwsvoBmM7rFfqjKhtCDd4jcTMNF9X1KivA7FYD",
  "key36": "62Frsbh7X6m8hRufeF8XN7SWzFofD5gAzVVawWhsVo9QeFpJyFNKVTrX5Wy8gpuAFvW2ghWtButaBW2SfqSBJCte",
  "key37": "Np9eJAH8YoBmg7HTWxQd9Wqjr1CtRX28QBYa6KuRdBRooVprc4XznKrhrTxvqHrfauL8auCoJexHVNFw2Ue5EZJ"
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
