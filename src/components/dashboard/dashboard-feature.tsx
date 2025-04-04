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
    "RAxptYHN8Qk2SpVVsF7BQBwonbGkY4wzzNmBAWeS8AputpzpG8rp6CKzJG7Dcgv87nKKffwoZrR49ccV5SvZ5Dd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42YQp4ZDKn8bmwMwoBSAj5vRHh6U65h9kvP46yFexEz5yFKGWR8iUY5hcBAjjYvjd8B6NgLrB8beRtmrtU21dc1V",
  "key1": "2T1s7mHiCiTJ7hef5Sc5VpwvUaqpsN9y8XrKytk99sWg3aHxQY48QiyzkQ1hdM5AcAxaZ8LFUmToZg2bcp8LRGos",
  "key2": "5eQaYAzgTt17zekt83UFDNeLMmPFDAtUPtvPC1Tf5uSqhe5EcQ2NvdjCiCmjWvDjbyYwAbfrsRQgWKoVM91pEev8",
  "key3": "5NNX25kVR2gNqAVkVXaqdcawkbP47t9xiSbCneQR9fQ28dgyVCTKyxXonX29P49hkKX49haNqPuHL8hQGyoNzG2S",
  "key4": "3mwoEbF6Z7AoK6F77BgU9txwt6eLxjpM1Jsgn55BNRxs92jGkP6Rny5LNbPJZmpZ858X9G32ETKZTL2mh6at1w4k",
  "key5": "pPUDeR7P34vAFNTjkSARWptwpK98sJwW944McZXkxUFBJ6YqkU6TDgs9CQ8vnav3cPjNi4fBq5YVA5vGQyBaUAs",
  "key6": "2BcuTMMrxj8akSCagEbwoJrqhVr7sUQLAGdz6fg86ALABTQ3EvEgk6dwGg7sC1t5xud3MLFLHfBGtED12uxJyaT8",
  "key7": "2it6kop9AWf8uqqL2UdRM2hBNk6KxUNgDNsK26aemqStTyA5rjyQFV8dkA383FWFNg5mWi3rvGwJ4BFUWhoq9APS",
  "key8": "3rNUiSng1qF5z5s34YibeFKwCuD6PfhsKz75hFSgoReVFwinFhouKL8KFstH3uaN5yircpy6BHQqJV5M6d7eYqcD",
  "key9": "5TdXxcedJNJwqDGersV1UiW43bRzsSH6pXdRBh3Gw9HouB1YNZhb8yHNFckZMrKjzxxZfXajdeNCghihPjyY5A5b",
  "key10": "65YbfREdjWzJKjJMJEZUyEmhXiYD9ST1xp57YJBVqG3fmHToFhFgcC3bWqKxWpLcUKwRopAppVBwyQ3qhvZeuJQ5",
  "key11": "5qWoUuLntp33TTChUsaHeVf2Rmw5QjbTdvLgqo1rQLcdy8rJXmntxVPGhGviLNfNVQQWL3iMgXCXtZUvJAacxMUd",
  "key12": "2zeeoVw5Juf8VV3dbLnQDi1aeZSa4Q3af8UdriApnhbQPHGdTnuskSk4pkXyg8sw7RUxNmF6fzxJNioUmYKPH4FE",
  "key13": "6suJQoc4oFk3Nc7b2M9YD4hMbycnknoYMt4qhDYHAqps3fh1KAakEnRgTx7S619HZ9CAzdWwt6yRY9iorcvWzoV",
  "key14": "5q6j6xWnEM1BuHcFhGahF9HkNEDeoVvqbadf1oQA4AkoSc2phghBit4thHb6nN2nyLUMepPdnLfyQHU86tgytXUS",
  "key15": "5wCMvp6Y7o5nA6M8nfq59YWDd8KdjAALvBg6XjA5Zkn9gDe5LyF7SJ8tdUscSsXpqG6k4HwdfuQyGNHW71W6i71",
  "key16": "5CspRHVy7wUiRhB2RcPgKtFBbEazy18YKFp6v3ixnijS8MqTr1XMsLb94wE6U2UJKNN7APewYXDBL4AZUCDHWQNY",
  "key17": "Vr539cdFgKbRT2MMQCs8uAAUAkKejjfoevNHZNJCkyocZJo5KwoD9iw5gciaULUUiKVV4FTcfgMgkFe6pWHGFXB",
  "key18": "5kDtDDczgPPpbUXDUpVPTjyErhiWJ1GKR3baTrULx5qbMeUN87tFsAKSQ1eM7rnBJh4X8rVjxQitCSt6xWvvUnCB",
  "key19": "33YQG34ARjjfns8YKVB3A7FaBBQuL6SwHGDC6xDC9n4sKYGKQM4yceyo7QRBuSAXGZ5g7YvCwChuhRbsFhHcf9hE",
  "key20": "4BmkWyVmpushasuX4hSV9yJdwwfv7YX32JzE1fhDeKwzS9Wk8WFftdK6Rg565RvKV3L95UPCRMQSLuLYNx8hZqqd",
  "key21": "4zdoMF3pLqk5oGhtJMJ6GEnkWtvoHLLABbokmYEeAUohnf684Lsoui9vDJAYjE8EsqmkoRB1biazTeyeWvBr7V1N",
  "key22": "2YNNHthHhncwDvC5qCC8jdwouRypdGM1gZ7gTvBEommBYE4x7vw9XUoFayTpSNNycjCBQycfpotdhmydSqtifeLn",
  "key23": "dLkoZWyVoVcBLaUt48NEAHLjvmtVKYrdPhkMT4LvV4mV4Y7FQXXF8wBwHSztjtj6JMQpxiintJCGJzRaUY47WjZ",
  "key24": "ASioUETstgRzy5LoCFzn4XWbs3pRiRK5JEFKaeGxzwLp2Kon1Cx2omfbF6iiC9JmD71JSB7b2zJKx6tKPN2oRVp",
  "key25": "3ayuSR283QVkY1AzVZAMYSfFHAcHhp98i2gmLsWdLeRZqdhR39uqyQxUzZmzJtyEJ8PrJTMMa7Ji3eB8g7WtPwMh",
  "key26": "4Tr9eGEZBLZxbns2xRynUpwF3RNVdS1W4USTT4kphM8tsaN5iQF7qY8mpMmFajM8QxouXCu87zN1L2woKDD2tGxs",
  "key27": "58JJ4QAXrsAMs3AfjGGZHN65DMNxUbCTEkn865Vys9MLc445GUpeVPtYwmnL5GnPEt6NjUqLvv99B61xHfzMjobK",
  "key28": "5BCCj5XDnPmtNvB7B2JVaC5hJd3kx9wL6bM6YPxmS4zdchn9dW86xHjmc5dASraVMD6fUEpdeYeGWpLZKLuJQDy7",
  "key29": "66yfHiShiaotym7BeHHZWYHZRvfC6SDZCpNp1PJXK5d8hTGMi89VkqSYn3GoLLnnqrPBuHuqWAtUWVUe5D7Uz5Tm",
  "key30": "4DQibHXSQhP3cuqikdEVDFS38TUdYmbLM9JEHDbnEGU13VRmW8n6fdPrvGbJ4L9vkJCfHdxhSb6RZmc3X9oS3sTa",
  "key31": "3djUaw8sZrYcSRPiQsn6TarFdP9gFLsQ5WSjcSf9McDeqb4DYQgJsMiLx4camXhUYqVx5LhUNS3wSsUJRF3sCjjy",
  "key32": "3WJaTZbpKknk863KdYpbdi2m4qNB7wduLdv8rwrcuYzWCWYSmzjpU3zcNfRspVWomnSbMkbUt23cuJ3Aka3LUTnE",
  "key33": "3U6TyyPWsELzhjeyD7hJ1tAfNCuh8t2iuUKCGbrRVGCq7MRzaUMJMnFWgznzopwN6xH5mzzq2UsnAXapacDcDwqm",
  "key34": "2gKNsdesr5FknhwDevxaXNRb2UnAiL1v7fkjWEB61FZgZ9Xcy6m6LX9ep5mTYCuUcycFsrmetmhPQKRR2tY2Yv2C",
  "key35": "4tMDEMS1iGAweeHnreJZr4mAT5DwjAPQBxSkks4fBmf6b45WxfYfvzGFNJCNU9aJ6ePPZSn5557bmTrW3shvXTPj",
  "key36": "5PSevTTbzd2QP74jXLNffLNTGHDghbQEiqEXg4MpbPvfjMCTeR8bw9YFMxW9Wd8zBgUw9jkPYx1AV9bGVyUiPhLw",
  "key37": "5v6khvScLgBJPVLK4kHvRvoi8zRXAroW21Q4Lsn9ePYpXPzYq6L8rzUaaiPKCufMsYbsCEnC4ongSCMVraEd7ZEX",
  "key38": "4QYvekUZuZxxXxcHRkbayVeoBNM4k7rqbfUJgd3vdpGTbPCWx6sJyCXV3xm2RRcGQUdwVMMxDbJ5Sj1jF969QeTu",
  "key39": "5UdeptXxCK8NRyDsLDWfHe17LaKmkPi6ZP1vixD5RaKAhAuDBtBk6BLToybegottDPPDmakqoXdRodQjic27HH7W",
  "key40": "vmDMWfYLYJ99pbrRCnbfhzXAvUQZzk3YnYyPjG3KSLZnFWjCCCFQ72PMRswEG2S2UWjnkuVo8ce8NwAYwQpdrCn",
  "key41": "iY28h1WAYGUhSkwwPti7F3PRydZSQvSFLoKm9KUvjWxoHjyrLAu5m1hdiK51F9q9Z3aXGJSRFDzH38zYhGYrJs5",
  "key42": "3rQHefjpb4oDW4V6EmzJTU326MbnKMxyVHRmKTrDEFP9fwEzKjwDwrct2E8U14iSjcGXhys5VfX3NXYmWy8NsVA6",
  "key43": "32b2KdXfY1ARFadooTZscrMsdw3Ta6faQ3phjYqLob3P3hzDLqGTVNiVcLAsLDBnCTbsE1pCsespRxjH78Qu7Qb8",
  "key44": "33htQsUqYrg5xkMnhwNU2SrL9BRHKWfAJ8buXoMxBrtj4SrQ6V6tY2qyBzgYmLAXud1qZwCJgSeqZmsqnKNmmyL2",
  "key45": "8RLfZj7cfMbdp1LAaiDNsLLaViSgGS44Q3bB97NDFfymLeUhfqZy9YdUDjGM5GFGcdxqhU6hxytbWeTQcH88K1s",
  "key46": "pSLv1mkLnR76WaS5Sxte6zoAYfG2Myx4jXJSfoNm39J88FYCx1Za6mE9wp8fDoVjFhH9x7M1rrrrGwqpauCW4p7"
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
