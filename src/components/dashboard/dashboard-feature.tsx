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
    "5ddumaUpF8zYNPRYNEQJBTTHk9vB46ENkDS4cNgcUvbbcvWDCT3xBWwiuhQyQ5WKntWVQnH8hvMhMEDAaxH1g1UB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iQyYT6ebGdHrBLCibFgWBvAfwBAEF9c7JTBhQsNokHWQtEbGkuFK5BCBwQRhbUWYbCv1An4heoqzbPo8xj9ohFC",
  "key1": "bQZupM3b32NxYsMXjfsyH79zAUV67HBHLHpLtBXAP1wnpNEAARMApXpRK2XjmSgM1qP558EyuDWmuPc8PY1v4gL",
  "key2": "4DDsg2QaTfJuKxEGvYEvaPQjQApnEmCEM8jPmWiBkxwQpER3Qjnc8ykFAFVp6bttTjDnWLqv4u1SQCch1XyDx75A",
  "key3": "3Fm6cqqJQD4J51pDmwEmSoy8oLV42c3H8cQB5y1PbZy8Y9M3p38E4X2AsLYR8zM4gh9qephnga163uFVkx4pLS7h",
  "key4": "4cy2soU6xV4rKC6zViMhXeRHPj4BGQKqsXXKsDeBKAfdvVUbZxWunZWJFCXjYSSfLX5echG4hZ9TTGStU4Ki9uRJ",
  "key5": "7amWbNXuyhWs7ZCEQcbmTjhqvcpfgfy9Fu5pjWFMcKYwL33wvs7UteY4Ht86y6ENJabteU1vJExk7JcYFWY7xwN",
  "key6": "3Uz1Sjh5vKHaoh7SVEofBXsxxswszC1siWSVhSWMpWe9JKiRvXMHXATciUuZ4yJmq2zgSuZHTThQB5jVtNgamFjt",
  "key7": "5LAt9W5vnUpttCu41WJUtXSjMXvpuNyKWY8ykDxbuvnN1tBkEo8mDDdpQAWZ9Ni8yWX35VvSyo2ermxtk8QzA8Xe",
  "key8": "55kCuUjvrHMGgTj4NncqGqQ34EmtDf3C2gnSx46x2PXChBUaicuvoMkDyjGvziaHSsrbt7aECeDzCpNMQUBx1dcJ",
  "key9": "5xPLrmmz7XYa4oJ67kiKu75UvMpWFrUXRAR4DKts47nU2XqhPwNQ6VYjj3wAdruFTp8HAURgx9KmRoTkL4LWahjg",
  "key10": "3ZUppHAnmu3V2oNr8WbFBfTdKjtU2Vj7cyWvefbieSwkmArUYtyZ7ZWR554ntWE2fvFatP3xBienssXPawMdnFP3",
  "key11": "2aUWQUibBXnqLik4D5x1e1P2wnpnJWbi7hfEdnBcJAmEbAvTLpsp5u9K1MYADP33JiDSs9isXia9smphDAMbPD1n",
  "key12": "XsYhJTJQ7P5Y1tY1BW9NGgt9GvCrtkYXgTc8rtWukRwhFbRKbM26ppKCoXpFrRQToVyrqBrwxcBUr6NaDXdTDWV",
  "key13": "5RnBpepb5Q8t3XjkNyi9tRRRCYLyZSB5AzYuCeyUKHxTVpPf65tjDawt4Rmsz4nB4w6NsHoBaCFivK8egKhEpizM",
  "key14": "3JjamYqBraByVNHv5ySZ1znPVz4xyEKDg7F4hjgKYFjYPcwzu4GybqqvHcdrjhhgYck5nzzruMeJGYb86Ws81Tr1",
  "key15": "4mnsvJxnpneeNvKtrehCZ22U1MsJiPzwZ5yNQDm7Nxpz4EW5PmtZDfswaxfAaSwMJVEX44LciQG4TzZWGVomSMCg",
  "key16": "3AVVDiFUhnavMsaJ76n3pPbQeZS9BiCVCbdHyzrLuenht8nnAqmD6Ys3VoimSerF9hfna5SEJb9pXPixjwB1w1cU",
  "key17": "3GW8UJmJsBRvxoJ247u1ohoBzeYb9ZQJgMjjwsYvnXT6uR4o2qRrTyYZSfqp74oEbuqMLPsjxqW5pgJndQQmumch",
  "key18": "4JsqG7kZh5E3VULCoC3evbriBcdmyLaMLDSdDJ3SB1Rqujpjg6m8ojjoMLAD3S5h7Nj1esYHw5eAsFJHka7jaMDa",
  "key19": "2Qe12qtxd4kgDg52FdvdC4R87kPtgP8fmcSmaQT6mpKMQutzoQuKSLdLpwRcNsojWRTWE9a6sN1gDE4DJvUZr93U",
  "key20": "5FystC8zwmZMDAzLmjzukJPr5bBRfr6afDjc5nuGFiu6UgFTzy3XJ6SH8y2KaVbgzApg3RoiAxmiA112MmVa2Qji",
  "key21": "qDRnNrE86mZ76RT3JstZKD8BXdb6H8VMcLBAJaEC8KGWiGLUjCRsP3pjVmcXnTcubLn3i4RHEBpviwG11zkgDj8",
  "key22": "4fkDEApmRtvqaQXxz5tEs7nqRBpjopaum3zMefa3vP8cPMenDUTTxkHDYKYLwiCYm3kKiWhzQpAxoSgmMiuUqY49",
  "key23": "4wowanwPA75apgx9YfLxHLxFMDYoHeVwLo4c9PVBc6y2HBHwcYazAgc4gKGeZYt5DJvSBQhmiKwykehxaJQwrqWR",
  "key24": "GYA3gjosLDKZ26BKRuAJLRMRdeX1RSmvKEKDp9k3sPqniRhQaF39mcNiK5E3o4oXJ9NnHAzMMMwexHkstYSY5NY",
  "key25": "65kXGXbjHT4ASCcCrqAWMgJYhuynUM3HbSa4gRjPVqKfGqbENh1U7x3AbEmgnczQjFxHh2gBNYvh6SKYvY1Uv44k",
  "key26": "42NeHcw7mCCseasMai1AkAFDWy8D8ff6fbZWsuNzS7HzXxttb6bzn9HvRixY2YVuDviv1fqvvHTGjdSXnqqaLw51",
  "key27": "45UeE4cACEytYyRpzPPYLib1TLBVBEcNSP7Ex8sBBdTyZu4hmwQReZYLkh7dKtRAj6PSj7YtJAxBXZhSV6rBkKYn",
  "key28": "EmW3yNmKACxXzaUaZQR36ZaoHHtAZAs7K2btPyVuKCFuadbCSRxZhgdxnEsBkv38oR9buq5LedwyFzvTATeqQp7",
  "key29": "2epqSaPSCGdCN4pyA1ms6Exrttm4bC3X4TQuc1kJuYGrmp43CJCy32xchVfc3q8BRsWxU1MsxNLFCwB54J9b2LgP",
  "key30": "4J4h7p5mGGG2JJJd7tsyuF4BySeXqo9MfvpSsKxBwQF6pnnnWGAbKiLAhSk6coFomxQsUrzzGjTCELSW8F85Vnsq",
  "key31": "42n1BNFgh6XxU6WpTidNmq5jqVVDEpmx8yMfhHkDhdv7tGGYgdpWBLvF2HpB9EQVXK7vQJ4SRcDnacYUAv6T9x75",
  "key32": "2DrL2z6RJgMutWbthfnnBrRNcjxoDmfmaEnfSZq3Hj1xWc5TmUbBDhtDzMdnqP2w2NX7pmXmWmMVcFjXqJEC7k4Q",
  "key33": "5ZUMPaFjgFLGphLfMDWmv2v5xFHqx4pigM3X4L7JJBcoYUvRtmQxxJJc7MVTn4sKPdgprjocAPWsB9BbYwvpxEJX",
  "key34": "pjuRbwEsmAMqfm31T93Xs7jCgbQmq7R72edRk1tiL9sNtaKFWYvrLqeDX22jEFWYrAFXxfqaL8gbtii1oS48D7A",
  "key35": "5mVGN134zQUzyGcMEPSo6m556dcHTPDKMTiVKD4QznCrci6ukCvzd6e3TNQMiWEZvpLukL42aJ7Sv69KVM8d6ZUH",
  "key36": "X1z6p4rCKipArvxJETNJNX81zyPVtHrpmrHFfBLLSSYtEShJPkKDh3X1RhgmPPeFhjhvXPwvejh4XgUNBAY3Gmj",
  "key37": "2nHExHpJ8KfCMEeTP12RurHeNsbhjc1FoiZgv3mH6S8Crj6AA7CfbRLEnDrKQAUqeAJSkkuxqncPXUsoTx4rwj89"
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
