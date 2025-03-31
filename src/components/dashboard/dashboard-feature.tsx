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
    "31sVXcER3LaErAMpbCLr59AXe93XYFaGNGyPJd6NgS3GknmJmu4iHF2E1TBywMyCqRe2fbbznmotNjhWqT4gcgg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CSvZz4JGtEAH6afPvG4R26yfyc5AuuM2Luk3W8EDpx7otuDUyZuz3E338m8VqvVMP6gDVXGbCiTNU7Ezg9aPTBD",
  "key1": "3VaJXpQF8XazHrJw5pUwKSWKxWMqgid7MwpVFrhe8hnYmKjwQfBcwJvMXXbkNHrJdFynkATxyduLmvaTs87b2pgH",
  "key2": "4ouxW43eyBWExuYCpBhiokZTwPQ7fHJ5jg3HYw7DTifoh2fahSXHFTsnHPXcBBc2meqAEnWdz9ocwaXa6qEDZXGr",
  "key3": "6LukjCr3Exvft7pSScvoYdtuoo8TZaZRN9njT6Td3GzYdzJRLUf4xGg4oSvo6AHmoi3mPubNCXS3wWSgmqAA8pT",
  "key4": "EwRxJdN1DA8HmcyN5hjDdTCBSVGXVtFQ991Wu26WspscPhHPhFWg6f7i5Z57PQcZSYPAxLN9QJrurDQeLY5s4gF",
  "key5": "3ZcqzsXEXwJDkxdhU6L3cN7m85CD6ftBeUe6PVV889ZC9eN6o5hj1fkJFoEqhdQsQ7e9Rfausbunm99Ty9q7a3RK",
  "key6": "46NoYr2RTZFxCeS1Q3XjKy5866LZK5hHnSVgyVZEmgDVRWU2gRh9Ka1wUPVnpvtmUphDnZ9La6YMcBSnTKRhuqbF",
  "key7": "4BVFeCioVsBnA9hwPA3pS7SsAZCCJqr4WBX9WzJvTasrhDb24rNNJdumrqepn8z6UDxVUYuCLeZsq78qKRYL4M7S",
  "key8": "4X1fQpzGnR1584J1C91Eh1bqRSgT92FavvDmNxtw8khYv7cxre1Gfci3KmEXZDAGbVMTbXXPcRyso41XmkiJQFfk",
  "key9": "38k9uST7BBUTTcC6jcWgp8rN7R9vZa4F6GVNex267n8NNWfZTRCotBJFWYAaurFGFBRRkLyXwF5EWEqEks3YLb1L",
  "key10": "59owRv3tLgZTZAY9FJZddVw2SkTxzhk91zdVdH63zmumhFKGB31maY1fFgrA8fZz8WV4GFBm3r7fsbQdt2wBcxno",
  "key11": "5zSRKAZqdPHQxoUzeFfwpdPFAQg1K1zn8PeuUNWauLaE7nxPAJUH6cCovJC3bYa86cjWoBySKkMHTebSh3zfKtcs",
  "key12": "28TffHgJDcPFKutqtUmEwnW65ekS92pWGCj9djSxPPeo6Ev8MW1EgNNgVkffS4vFeDLA4hpAV4VBbXntT4gg8bvd",
  "key13": "5noVEGHVgx3dh6tSi3SE2rRV5trY2WhREvADaj3RXFLatVrEEqucRLHB6Pm5cMht66NkzFeX3TPUHMQ9amqPB3H3",
  "key14": "5TxUNMVAVedPadEj7iqqG1WnzZPJCQu4EqunLC9fYtbcriwGHSg8LXBsC56g9AX4TbQR44JsexFbke5u34jkDPHn",
  "key15": "5cWbSEXezRLG4vR9Bu5hYyBVfVK4f5SgchcAf5xig8kckvtrpmaDHHaUpo89iRKkUCe86yQqxSVYxGuVcmD4NSRY",
  "key16": "2wfvkETGEi4FrqxDq8AwzT755Aa8UWY6rFCbsBN5tQ14TwxGGjUJypuaKviDjPSxWBJMe7M29fxAvaSmrhZwfsyb",
  "key17": "3jtDL1yLcvS33W7mJziWQ5sY2hzeomCTgjhYFkmM7d2c6Nz3ZF1ABjr9VRA7m3eWrG1NCUv2VXdnxVyycxCiqTtK",
  "key18": "4fx4zwKUeN8MK6skWGh1CCP39D5ydcZPW6hRjx6EEGNGxku3kTwSRzoiezX341qAHkQ7fJ6Yax28PP4uBjc63zMZ",
  "key19": "3YPDJWm12LXEj3Dqx8WCe38uFWQK8dJnTWhpm5FC6qmoGLmp7zv6v2Xbk4EQG2EejgLmUvjcTqArE4upNYBtansw",
  "key20": "3FH76Uuwyq44KRkqsMiKMz9ZfzZkaNfU3ZN9Xjba7nwAzMNconoNoNT1StgNqByHjJ3ba3ua4yppMSWgpdryE6ws",
  "key21": "3bCdkJtjY1jBE7ZzbeuV58hmyh9wd2qFpUGnPP9ho8VPyZHd8tuBN1JfN9L84GLzDGeam1gdTgYbTaJXTKTC3NJ",
  "key22": "3vwvZSv2fEVApXFdvYuSY3bbWVJxzJYzspZHNzHhV3Uk1pxmNJYgpxQLa3pNx7XbiFpdoRf5MJ42ypG6GTwaFQWp",
  "key23": "5LPYLzbtmhPveiXZGDjWVA9dpE4JmAuo69iCr6jE3yd8b82NBse2uBRVsvEiURhvdUMPvY56gyke9wPJRHBmEgzj",
  "key24": "F3WJYz4YBZFWQcFB9ZEEBNNLjKYiCWLn2s7f88RHtqFmeEompDujVtPATFsTvrstHV2vUWcsvhSAkzeMDhNDwpQ",
  "key25": "oCxGHwDqP22vMm5pr5atmq8Rz6pAhykmznk4MLAghrYTR9WRbENaSVpckyvsa8P4bVRtseBXqcRwLKFSGrB6wuj",
  "key26": "E23owV9eCtVeuhGgNBaweQnvyZNrdvJ6rWMhNEhbshcGnQsoByD9eX3dLAYK1myEYRdfeXe4WJe3SH86EoeN43f",
  "key27": "4YdkQZdQbv5RKdbHKKbvDdJRbPTqjz8GcLjqhM3e8pGcMmJ5ExEBJ9qk4VFDGPLkFTAoNTwCN2YWYfvN8PAHkeyY",
  "key28": "2VSovTqSvMqnUsGbVbCnRnjANyjKenbQVCoXjAFqCXhknqw5QpGEabnNzZQQFx6rs1YjbxCcsXNhX7o8dh7Cqq4G",
  "key29": "3s6pxYb9NqvR5BSsopJiQ8qyx1WALLPCAz5ooHMdBuCq1g2gVzKA6tG7Hj1HWawWPnJsVaCw8bZSRwtfmDiEDQZu",
  "key30": "4bezC3FLohGJ1XfBZGAGWZn1Y9z45q1reYaMWVhiZvEJupfGdJsaQA34yxbD1UsrERpKpv9DEs7RWzkFhn9dLwGy",
  "key31": "2T2CzjDhfeQwHwaca3tf3zzLzq47XhNkzrBjtWWEmbL3272U2b3MsZxMTKk7v8dfuNDJQvUNHGSnwYryS6xpeeMR",
  "key32": "39feTeyXBUJx4X2N9TetZU2Cc9geZpw9yERnyMsXq7DVfEHkUawrWTe12XcvVWD3DpTKR9hXNf8r4EqXWDrbBc5y",
  "key33": "8arWQnKaXxasjVzG88Xr7jirx8gyBHHhe2UEqCTzWFc2F6VtLRFTX6PbZkU91RVkV3bVdShYTCcc8R9vbJ6oeYy",
  "key34": "4tFRoE37ismoXXuqWyLn1FtGYKEYrFKiN5zyY1hrNgPtuKCwNguBbCFk3omWvN7tm3mTaGokPfFeaBqTXLAmP6pN"
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
