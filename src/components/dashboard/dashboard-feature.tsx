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
    "2YmFS7NcN2HFBYDSdFyiuj9PpywQ9Tfk3eDGYUqTWRJLJTpB7ymGPdGKK89ygvqLLXURLbqoiDXfKVdh7SgYnzM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TsoMP21cGX1K9WRJvku4XtvuiDABnGkgvc4XyRwqxToAYunj271yorCPxZLDG9KdUEZ9DkhGSjtiaCgnB2pDKAC",
  "key1": "5SDmc4NMfDNQEmEcbFT7yBmrxYVrW2qRtJ8DtzTueT24sLJMQapjeEUCidJygWh4kec2XP8zHkpZ8mQvp4ibvPKF",
  "key2": "3Eh76yFxqaKhWYiDVUGUCfgAY4cx2TpcKVUsJG5t4twS9D1PBwjjSKQyeVvS9wAu8Cd8SCvDXgCfghxR1LXYs1tj",
  "key3": "4tPbbNWPVJmVZMhLs4UsqqFSXKP8RZqJpGQHKZzrsUNcZyvxL7ccDcvxyyKSu7hcttzrEeGjLHBwj9kwiJ6CBU2E",
  "key4": "52FN1hSEhMHMEKxfhk4URXDMEA6k4mC3QnhKQbGAZ5LW9vxTG6ZV212AP5hYHXekRweJZEn4opreF379ohGda1fD",
  "key5": "2tRrv3duaFmPYyWrj4gduXNYHzJ4LGpWxwWh5SnMPfedGiSm4GQ1Ek59EwUfD38NHBUAGbz3rb7HVjZ2EhiP8H1M",
  "key6": "4GAgFHp3tEYWjYGHfu68a5v4EsHAULjdUvzXhGzHTtpoc1NVMsnGpeQJsonqWN3DounUqkViAJ7oRvrvaLxduTU8",
  "key7": "3RoDZonqwdxtfhZ5NqsX7ducpYvZT9BQz1rXUxjc4gppfzQFMBiQ36zEpzYRyvYV93Dc4YayhGn283h7mBfc6hkT",
  "key8": "2mAsLJFw22P48juTaN3EWBKMA2FUUyudvhMiMgmcDbvBjReCsJjHeL5cV44vkvQr2x2Ew4ex7fJY7NJj7T6fLmyW",
  "key9": "TdvCzULFH5ATGnRhrURZMrxUzayMRg88kJazvj1yCBLzgS61ThAiFecYH8waYZQ37ijPubnp5RF1Y7PE2PR9h3G",
  "key10": "4cZSewWLtPLfWzmRcXapzeVJ1bUiMRMPXeqX7sfsgy68ACWYvofaLTG7RBDTpnqLjsCJgYgvDM2UyvGbPzpddsK5",
  "key11": "4tYVpQsbpJh1d5AngvD7Y4BxZ18j8s1tMYb58jy8L1wiapkZnXxF3acHRyvnHrMdcbSx4976z1rXKUhJE8pGdxxx",
  "key12": "55kKDdsERxuY7pmWVKKP1fRVYnJBJxwY5jKEnHeSRuFbeQZBK68u5HKB1HPD1CVy5NK6sb5PdiHEBpyd92USefb2",
  "key13": "2BbqN9QoVT8YmcEAcAhvoiGKcMwT7r4FPVoo7uV2fprqiEhpzzGwNmYEQH7uRTtLnNqNijJNxXXRfGSr2r87X6A",
  "key14": "J2QA1xpXR4dHy1w18iTpXTaw5DzKwfG74GaUL9xDHK7uYsbqHwUtgFdVDDDvAK29zLZEFmY32pmiMWBHuAYw3Am",
  "key15": "2iqCHtwwY9SU4WfetwADxmSeXRx7benv4kRLRG4hkCF6yjGZJR6EUBeTcY6Nq5dbKXY9ScQcdqkovfpTaVPSQhw8",
  "key16": "3gPPh7abaZJdqCJXm2sPybvsVaoBhRSBxJn3rr1Kg6rXxzip6NdAVudnM88sPvUCMnw8bpwWfj5dz46evS98jqnA",
  "key17": "3FBLFKZdvxDnCWaCNXKDqzmQpYxNbEXTiNvTbLPs2Sui2wsAhKDPrQTzsyFyBgC55BLi9nwnGmN6zyckvoixytWr",
  "key18": "2o58h2RpAyWMqNhEDmtfrW4WtLMF4Aib81nj2ZUhSnnzX7YBYbc1xYnEkL2UsRPTyncxVJGEGyBUv6Q5XehUeQrX",
  "key19": "4E84T2DJk5zPFxyFWuiHACHvcAPJKoyHLU3bW9YNk5xgETt3V5eKf8d9wdWFhsxFhhGc6R5NDkHBRdrPDWRaJ4Ci",
  "key20": "4gRdLtSgxaF4x9UUJkK8sPkJxDCcmUYWpQhrCLRRNve6sShADyJkVTXqGyhw5pNWvtu8bb5tkn5rRBuLueV4tPJL",
  "key21": "3WpvYcYPsWWGiHHg6uSvMEhnFRzDbKMtNxZ4wrZ9BK1FfzoAQF9M38REbQo2KLZSqeiA3pbc5NhyMUmDTYs7Y93z",
  "key22": "38DjL8MTRPZwfPdgVBLsSLANVF1e4PXrWUuYSj4jdGfYbBJMFv1cgqxnsnbcwvNAmeDRf5rNzpAZwXtQatmJDJ9q",
  "key23": "NcY2qfbDMhSq5XUdmRX5LnkoWBkuLvzuhC1UYMG91SQrAW1uz1FdbBweTFzf9UiskvGo42MDWdj9mYncHNZSnav",
  "key24": "2yQrc3FcTqeXZhTp25XWjTNDCGgtVzF85kmPfqMFFGMkyA3Hjeun6W8T7ahQwAX4s4sQeLRX5YjjAX55uin7AvxF",
  "key25": "44qjCoiDCw9nc1yuaVZTNQgmYa57rzhgtz5xuHZkKK5NCkpXMXYHoC5Wj1kBR6Dx9w3EELffSqpserDfamnwVdfS",
  "key26": "44G3PUooqdw6Js6W6rdU82qRLcDtTNieDrEamWYBU4HEmyB6zoNMzsaMZmWvW6URZ6LreRiLQZLxUFjGVSfgKrbv",
  "key27": "3tc7AYrdYXt4WiHtEq8gBK2abYs2Batawy7R6yAcPZaiXy9wkS91b9qtvHZbGKQVAMwnkB8Z8CykzWVjQvbVdLna",
  "key28": "1KS7JNPTe32WTrJgdBvpQtCSoPXfaFxVjXHytxkEZqCjBt3GNDSHPNL25X9uK2UcfxnjAPR8hkAs5kd9CqPsU4b",
  "key29": "63WCy3QzBMwqaYwwocUP6C6XvFTM6WzhFsH29GPtHpvWRJYiAYjX65RExcT6mJcuCwhe1VHMyp5yZPiHDmVUZuTf",
  "key30": "3PRkUBuJjaecgeCfAK7Pj5pZwK94Ek27A8sw43uuzwvcPwj6nWMk4voLuYvsVijD9eAmpYQfVyoUdKz9PMth6rks",
  "key31": "4AkdQbtFYreXrsnusDDHZ773snBPMFWsCUKBN1FwqeLjdeDxxf5hMAo8BuwBjM5WmSMBuTuVxW1Ve5Wne5YcBnrF",
  "key32": "VPHTMGKD7VeBLaw6G9kqsPNy4uivvdBaoeJmcN7yAbhsToy3AsBd4daEbsRMcsHjdVvLfFbmkGPiLqre42mGteg",
  "key33": "35GVYpnLS6U7YYu1NCoWaxMUSi7XfJbyXyjNk9Yi7CnbtHjBxahvaJVH2TYH61esT7WqtmEfiE8LfUn6megxkATS",
  "key34": "oqTW79yWtrUJbjheEVZjPMbzuMriJUGBJHS5NHZB7DxBuwY4p1XQMczN3521iJ69PYav7REWb9yHgnDmsQaQeES",
  "key35": "BGz9ryGHYPtneCVRdMjPCYUrYea1PBV47KhNym9kJBNKSoQbF5LhK7UT8ctMnmj85uCeB9SSQNCi5BckwfJjuNr",
  "key36": "bdjH4Ew7WnuJbwG7PBVD5Ho4iJX77vy9h8qk4SqgbwqNzNmuVU81dA8RihhixpMbgvTghCnGHDjaDY3Aa9zU34Q",
  "key37": "23AtfsXEqJx67vU33PzcRrfaVb5ttMsh6tA8w7N3Vf65DqcArkhNRoVnoJ4JxqzgN9c5QzZBgHh5rJSsdiSEQaYj",
  "key38": "5WRXWzVkFPNXRrAv92DVeA97rBWwAYW2bfjcZNqeJX8sCzXfbz7gu9fzXSAnvHqogn7NmLWwBU4cZfRNzYjjNfwQ",
  "key39": "74Z2e1U6eHtf8L6an7jPcLMRMkHLbV36DAokWhUA5n7qUPgabSD3Y5F3qdJY9vJKDNaf1Mii5ZEfySt77d8vBdj",
  "key40": "2KumS5HYCa9Mw3SeBhWq4Z5iDFABpdudAWFR7hCmTAMTLDB1ugMYGnz8XR8KasQkzYRbmEUiBewXzx9NK4GjLX7t",
  "key41": "4MjJckckuMPuwQykLJtwQgiA7XBzSjKwyUp4hg2wgX55fPByQaHVGXFE4ky7dy5Lik36jZ7LtUjm8bNekbmUDnf9",
  "key42": "2Ny4EYgh7mmZ6oqoMmuQGFywNeQrgPhfo8M34WUnhac6zDyYwJSZnKVVcR4euv9ygoen9VefMCF88L6BP8iK7ix9"
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
