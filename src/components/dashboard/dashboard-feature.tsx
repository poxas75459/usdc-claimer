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
    "59JgUEdEMpG41xVj61wX2nEjeg3ZBFKqC1N5Debgpn7dqA9Bw498KRrWmsTAgnx2oovgCyJiekzHh4u6Z4jZYmMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ugrv3LZQ8ETniXyB7iDNRzxPMSBhpQjeZsPTXVT72koaYFqxdrQR2YPtsE7kcNQ4CJDKZk6dTYPozVUfvjuBiNC",
  "key1": "55zFQvppLir1t96vVT83YRsy9zX9dgpDfvJ6v21xSnCgDW49E3xmfyYfDs7KgeWtsxzpBa8YaiLwMjvjEPAC9YAV",
  "key2": "4qpGY1CHGJ7uE6bZH2LQpwGFPt5XLbqGApAgfwS4k8szH5K1gcH4NTvG6vdsmnNAKovueQasi6rPwusBiMpQBtEd",
  "key3": "3dKA7wLPsCuKX6oCWwaJ6X9nMtfUzxQHJiwLdRK8c25ur4sHpAb6X4NrK5n5HcD1EMZvLddpSg3zoWhoZeUchZEN",
  "key4": "N2HPtFyMUoDxRywAxgAcbMyMt8GTc4QEmKyzExkHZifoFdCPMpoFocrT4btRZc4MVS9powm29yjLgD5L3aKU2iD",
  "key5": "8F5mYDo9YRRtbPuLMdfKDsxHQ2NsNjPmvngMT6AhCNG1Kgv956EM4BBDvdw8Fj5vYSE2sBGaYDRqsjgNpu7X28Q",
  "key6": "3SkW44snt7ihGY9KJKE6s7mXw1THtqJKqXEQ8wqpaBHktEy26ACfNS8eQZS52i7RufWpk49wu6ebF9pFtkZ3v4Bc",
  "key7": "3LXbCzy3aB4LE9EUH1N3VaXxAB3LKQ26F5fsZvFbrD3WpgkwiMDp8eM9knXCFcR5WAye75CSURQYnZcNhM9rmj67",
  "key8": "5Pm2osJ3RvRfLqJVfKD2q7M2JBUksoQCK5gRRzGz1o6VdpY2N2zzd3u9R6nydspwzvan13295t9E6e38py1Gj9LA",
  "key9": "2hVErJuiKKqLpECcEE8mEBiAB1rgqgdWU5de56n2F52zV6AjhqzYDGzzAu3XfcA4zFvBGuHE5Ae26BzWZVa9LRzk",
  "key10": "4Jzw8z1Qa7Egt16LNJLdSVzzt8z9KhbuKzQohnuDfBGRSs4whZ2KVBxQJPwiE65ZEk9VqCc256Vm5sdnLxzxNaCR",
  "key11": "36qnz3V33LNNFBd1yiq34E9CezkhvA7x6xe3wUzGkhe6Ctj11SDwp6uQpLm9ZM1kpSoSvw4g8G6AanEas6gRMzUg",
  "key12": "5RDRoyrR2GPQU85VaZtQc4ZXeXjo8PS8VUR4w7CfjxMHHbQyVkjkL2XC7ozQ4ryf8DhrARAARaGt1Th3hDM8Q5u2",
  "key13": "3xTnD85oq3FKdNWHjTVPEY3q3eKZJfZ71rYQeY9jx2PGu7Cw52WTYxKp8mzckWxpd1WGupUEL8RzCDJ8yD3hG312",
  "key14": "5H2uQc3od3rwQTkrfojQ6YGTy24NnR5aP1HJw6qJR1NEYmRAW1Z77qdFPTLCBwTv9bjBdZqF53DtTHX72EKH25Fy",
  "key15": "286nWkYXRu6YKawDcKiMbWprXcq1ocmVUC4QCw19h6XUgoCjZKR6eDw1REjU911pC4zgyuMZmpuvYKvy65jEN2o4",
  "key16": "2NUYf3DjAcdFpcwD93emPxHm3Z4fAGvUSTJu2xuctdrXz3dXbFbjhe1FzqA9gCfw58d58ieqJkPjWSRNeefrFfEn",
  "key17": "QL1mjFJnR6TcUkkKmmRvWT7AsbL4puafkAJSVuV41LkJcKNQ1aR6EPb5bzqsWY8h7FnwNpj47DArguuDbt9pjt2",
  "key18": "s4qwTUPRJF686vD6NMGkWY1jTDgsvL7oWCPKHREivGbNHsgZpnrs2qbuVHoUUDLyPR3CKp1ZmYV4gTXjks2C6TM",
  "key19": "3doNAS78Zz4YGTTtw2v2QvJmhEzou5EYkXkAWvPUjggFh3qLwuEZGETd7rhfgD8QtpRuHFcERhKqAZvD5AsHFFjA",
  "key20": "4FUoAkx2BcviaWjBJsCEiRioDy5EjdTqJ6LxKhAD2rRMDuzoYNTEMuEpWNssywKdN7vbhERNZC3iaNEnv29mW2Fd",
  "key21": "55stTHFDn97Qmcip2KkvyETyzuC9TJbSbpNG2yJiLay2DvMoNDoE3DCEunEz7h5LfAsJdn7WDD27mM1PpjcvK3Wx",
  "key22": "4znm7fBijGmpfQz9mhMccL5zqESnfhRn3RxZkAuAKE8Aj6D4yYqvUGwYZhfXHRB8iL46FvMFLfSKpii9RqB1numg",
  "key23": "DuKkMKmzotsXZowbE1Dc5e9JF2kkzJf17dQHg4PNBsCjNRcE5wZ2UAnX1r4cMhEEupk1oJfjWSjLA5i1bCWfBB4",
  "key24": "o6vTksBws1aytUSTAKjLRMdFR3Pkxqg4nL9cftSY8dwh8HDgWks5xkrm5xiShzkyzaks9dT5ZhJsGfCEgqtiXH5",
  "key25": "3X7mb961b8iZWSubgJJqiMaxj8uGVkJeR3WYacPz7wKH3QNqeTiYqD2nvs7qoSjdt94a1mdPESkW7yq13tfVvdD4",
  "key26": "4ewioYeobbvFrX2psVACCbQdWagitCmybqW99efSdHRb9k9CipwTXtSKqnynb4VzViEeHHRdWpptDDVW8GeowYcV",
  "key27": "5mwXHNvoXgW1pF6BtthVkab6WgQSPp6183VrdwJYYXngcUL9fQJKywqoLbZWV6Dec9KGTcJy6qEBVtMrafRX3yVp",
  "key28": "3ZxeqUh7fm26NmgTU7TYBbFtNY5AGYt8gTn1MjUb9Zcgs92yBcSZ194TQ8uNx9zD35hTs1yX3ATCjaxTL4GrGAe9",
  "key29": "4Qy3j8hAo3mV6xW688Lp7gpWZo4meFHxAWsGcW1SoonYr4eWNSNHFzNQD7xDtLdwczmzd5YdNP4z1FLituyHD51k",
  "key30": "3XHeVdSiavc2UfD6fJxXYuqef3VVGYRvXiaNVCFH1ygNs3bxxtyuv7TCyi3yynaE8sxtJ43ZnDCPSx1kcwyoRGUE",
  "key31": "2Y1d7USPqUbr6sNDeozDsoq1Vj3GE6XNr6ZK2dyDmuqGkfgJxbPUUNsngeAZNrC96XK9wDzwGuSbRsPvPM7MPHW9",
  "key32": "3GNBTkUpfJEaDoKWGufrYj1cs1hysoEXJRoYoDznfabeB2x5jyrec3Sobvvube79hv7DLrB9Yo9r8UCMmkT82vB9"
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
