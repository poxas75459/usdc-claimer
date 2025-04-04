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
    "5uHuCS6sgXJYmhPrb9q6PJKjeMJUgoF3HqEZZi5mcpgg4a1bsom45LBHnjN6vFxZ7jWmopo3hV2EWyqSP7u9cPm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fRiygtN9yTYDYKbr4ohHHSxXESruuPUqJAMFsRcWfXkw6up4uLcUaFq8oxRDHr6sXh2KpR7XKumPEdyVeur8UCu",
  "key1": "63BT1zyCDZqC7hpftzyqocZqTbZiLeraJNdrytgzSApCyqioYrmMLsZNP6DdsBiUk8k4roVYKixSQU1b252XiNy7",
  "key2": "3u6mMczjVms49b7pHSZM8r9DGzzFDn3tBs8se1SQGRXih9psWxN8majgYS2deXTzuCWW9V1kLcQCTAPgw8z1xV9z",
  "key3": "3rw19Vj2yDWD1PmZbWAVxve8AoVhyrDjTWnrjpLHPQrPLDXv5rnNgiK5inGBff8EaP6sucWGZp4GNJXDrZf3uBsh",
  "key4": "3hdu8d3KsNVhHTgeYWUuu42PYRSyif63PyDPKANnB641D79vKWzuMDdUwQSxGucxTznZ4aFym9jhuaeUQewZKdP6",
  "key5": "4mrSuApPtCMPnAUVzBZ8meZmd3jUqyR9Tsx3zQSYBcZhA7XHjyHxRtFR3uvkyxhhEDiBKq5CHaqhy9pzd9mwNP8u",
  "key6": "5J8wihnze9oHxhNRZ5gztP1F7KFr5xaBhGYsxDTNchkTomPaEicQgMEptQLPRGFmrYRPQFTVgABmbzsSQMT71UPU",
  "key7": "4pMgQULEUzdx8brzC1sZofPWc1QbjDWt49MSwPaxx4sSwuAF6wKhkbFE5NviCfexk6MUSk3hHArZSeGWLbYLsKea",
  "key8": "5xqArqVb1FCXrPhxKUMgHt41Ha9KchoekqQ9Ecot22nNEd97NYBWS4Hice17VLhhknxRJidKWzaQhJZfLtcoLYkW",
  "key9": "63YzuA2sNtd2sT6cMwkVYySY2FBmsXxTpYhiW9ErsAc5CdzkVxR2WgopTBMyrFN3uub7czC7PbgSJYr585eRss2i",
  "key10": "2Yz3SuHGNaJPDoCpGcoGHUbttY5xW1Y9gdsMvJKooFwbmTmM6w5MTxAXg2ez94hxQDdjGtZEa6Tnx5DRQfCU9Wuh",
  "key11": "2nZP8189P5z78qYFmHFMbmppAVjkYBA5PhkmRjVRPgh1hC4Fo89pbwsv6YVrhqsR39SR2mKXiDkHvesvXFpwBKYe",
  "key12": "4gyYwZMuwvrM6rjS2M1HLnhfcr2G6CHYP8QWupTrFC7Q3DJueTENQJymzzQ1xLqpCrkMSau5q1RdtjYjshaxpHFX",
  "key13": "5DCcCNgzCMSZbaYxukiM9ASpudhwjVZ6H4GfzQvuxfwGicvyGTShYnaMQCVt1GRHic26gN2Y1Pt2LjB8QCpE3XQr",
  "key14": "xvdhCYH4ooBV13Dj8mbCzJe7Wc7aP8K2gupbwZpuyQnWwezzbgDqshG4aXVhLgvEVewCB59SNtMWtiCrr6F4ecj",
  "key15": "3s3NKRg2UoowucoL7HVrfgHbLZqiYDe9CWpCKqnBVGk6y6oGhXUfKxgDag4NNi8R43Z73mV1a8rqwtFFCQqdK3YJ",
  "key16": "4tyg4ZdjJQGghzSLEGCknWD8pczHU4cSB4UDTmLQWqY8ajVE8yqw9VP5qJAT2Ldqno44KP4D9Jbp2SMJtKpyZAQ4",
  "key17": "2eoipWJ9P3ToMSsSTvRMPhUT33p76fXLntpbQNx1H8H946jArit8CcwwWTSC7ZWrCKArzY1M78ZFrNtSySdZs7sL",
  "key18": "2YchSk9zFuyxaqezhSTsfQbz7EnVM4XDRpPSvdCJfkmpPtgD3nLgxk7jvsqDcKLy57CrWJ8uBiqPYWWeVTVaXfqU",
  "key19": "6U6veayFWRdfKbyoHT7QVZvYAfgocgwRRukewsaMmed4QNbM3uaTbVJdkrfL8i2keJ9rdznMQ5ufjGozFZcbBvz",
  "key20": "4aGMWJ2egvHJ3n93sLfW1qJnfo7ggS1W2tCDG3KesWZo26KFnGPXFGgfEfvY9LwY5cJjFHJTevvrVSYTLiJoB7Ak",
  "key21": "VXajuDE33XWsohQtjD8oYP8Ta9eeHz7hdkmm7u5uJJ1D1SRyCwwuPMDQR516rFCvbSW1SCb5RMsNC3FvkQAZAVn",
  "key22": "3YxaDFjbrcVE9mpJ5Qhfo71kQLj2cK26ZyfSXVddfVPF73r1HoF8b6q6dmb3uDCjs1ajRAKkzct3hz3qxLeakLCE",
  "key23": "2UJNphW4gTd2oKrQF3b3mvcnYxjCGGTv1DCyzykVA6tswrDRrq4VjFYXXw5GCDVUTRbfsrC5wzmWCTceF5hVZnn2",
  "key24": "4zEwYidw3yzAXtaNQzgwXX29bibVm8M3p3A7wpeV1efQGYfFsDqpv14RE2vSejEEgJXywoXC76c1peE6RzHg5QM8",
  "key25": "3v4672T8HYEdYqiPCGCpm4kJUoJ6KQxMAfBvqLm5m6NyBLTjDxQePnHh9S2D83NxxijUCiUqPKi8om6j2gqSxNvK",
  "key26": "2XASZrHV1rrByz35WHSRL3sWBhEB1k4nhX39Phgvt61b5LRaCfPWBEm8FyQuHNzvZY5VFTXbCcrpjUXoArkQrgme",
  "key27": "2oUwv4owoxwEMR1Rw6Fh2bJTim4WwwjbESp4ZYZoAYzxYuEMy77mmQ4m9Y5UxHBWVCMY6RYSQrYUCt1zSeVdrSMz",
  "key28": "63BPvkcyQDc2AC5q4YDpExFZq1bGQH8PPDGHAf4Az6UCWbALVXAmm1GdcWLjpjSyaSAGEsvygpi8ZkUTkqLafb3S",
  "key29": "3JgBNLWEPHnZxUFeaBkQPsYrcU7EqkxZ7wDoYt8UDHwJSjmfEP7dybyg8zKWFsNGKatFkgzznG15sWHBaHbbfeRD",
  "key30": "gpZQY1Ei55Akp46kss42UQs6DvpEq2D8yPjAn7Df6frmwXrVDZ1UnnYxtmNPoC12QE4TVJV7RPhn3MtozaBE2CU",
  "key31": "2VAzczxNoNvBD4MV1hUt3zkYFBD9KM347DcrhQAtWcZf1UsMzmJp1ogesMnTvCodBarNgmxd4bK5fhNKL52wzJVK",
  "key32": "2RGZiexCYo24xZH792Ytk8fbZXTQYp6tHQS8X1wtPcmepPxiTdT7sacbhp1HD8nfM7cYXHiVor3tdizCRjAQKCPv",
  "key33": "vajdGnzZszqDSqptPj5LkPKn1srANg7kq8asBeRa5iQA5GratMwfG6CMFxiQYehPriydY8tcvrxoTpGHTybWRDY",
  "key34": "4vsmmW2XrJ1USGSbcMVoXNTKMWCWvB5GW6ijmMW2TCnMJ13qTrZ9FjSXVV1pLnwq7i66h2GyEXU126as8VVuvZ3g",
  "key35": "4cJVf7xdzzhKiL3pvLAmfpLkcBHeQmTXRmAtopA2uGfZZqEzFeMKTFFx6WfEbytfzpyUtqQ2XJgxoW1MVxpA3kuQ",
  "key36": "5fYA9TEhF3TGH6QufRX71Ad7dXu1C3WwnQyWgMD7exMvRcHLEKbADUdDaAxCdx7eMxY8mKAQQNx5LCEvy1s7ydyY",
  "key37": "oC1A7g2B6DJXbumkVzvnBQXvTMRGhhiLyBYzsULxTdJjuyQ1iPc8f5tQHNCzawgkKSKgdf6fqWC5YZBUYQ5h7EX",
  "key38": "2ELmvhSmDRxAUScjU1vshQ1nt8vVfcH9tiMbxbFk538hKxCMjbWoteAXMGmKXBZ1LDDQFHVQA5aziPJ6raeW5AE9",
  "key39": "56AyVjZ4tGU6jsjaU3iRrCTNKQFWjxpknY6uToXqjAtAcRA2Lu6PjoPxnFtZwDSYUK9pVVzH8PRQq2Se6NzogQMP"
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
