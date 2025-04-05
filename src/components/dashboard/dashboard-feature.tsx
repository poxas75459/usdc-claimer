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
    "5iNSTDrWqRe3Nwq8wVya9AfMqJWLAnGQFnuEj83TaV87utoHwaRnZ3Qa9GTKjUgj9kCNDsXY1Qhwa9NRW1CLn1zw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L5jzfZqyeq36ULkWs7bq41NnSUzbXdkLFWG3UNZaVSZ5DFS2ubpDHt5bCyPYB3jwf3LQdLHGmV19BRuyx3L28UG",
  "key1": "3tLNb2CW89CkLByDPEPxjE3UD6ehf2wUSexeb9xpZTiQ5xDGoWz1ZqiV3CJT4CJrcbEsomCeQr1393tAdLTwPT5Z",
  "key2": "5HQDs9n39hEGjp1xs5qKDN69z3brqXbUS18RDVAjLeZiWWGuKZjgthMGwiYRZRjBCSfSNyfaEkuFA2PJz29CM17K",
  "key3": "5az4EHaXtvX9ShRr6byCHmnmNBgThUJS189veMtCBJJRDZaLQ3xxgE43hAaKWSWBi6osqQUrpZAZahVwN76kCu9w",
  "key4": "3sZwsZaFfeeCxfK7cTLK9bekPXvVoiVWbMp93mrvmN4EdDm68SgmsJNXmjPT7xouwiyEraKdyyY1mN4nhYkaMVq8",
  "key5": "2ruWrrVepncrLCtYmDv9JiyU8A2CTfPy9aamNYHRv6Gb1pFQmm27xQhzo4MooTxrKfevCRzsmpnP4asd5zKzjYKS",
  "key6": "33SAL2jFfHGi5yeC1HmC9NZw37E4KjNeKvEVaUYMAMsuGKcFF4i99X4kcNh9Rkn7hDrmupJWkTPm4T9cyATUePyo",
  "key7": "37GBWPbAF5PM3dvtqYqhEzLQbBcDrMjfGsKeNUxmXDEShTbPd1PzZ74SCi7ach4NaKnwHfw5x6MAMgomyQwN6HdH",
  "key8": "9cHcVMsXnrVWV2gNVKbW9wdpuuFzJMrUZ1CaCPxNtM6g5DwVdUrBd833iQysWzYDhs8dnx44SgQhsCp3zJzebK6",
  "key9": "3Jcrqyfw2CL6U5GDFQKesbptmHeNnyPn8Ntt9CY29zkjHmFK9YAUtAiBkuRsUiKuN4eEhx2CW9t5qfAwsvCbXTL9",
  "key10": "53zUvdWQsmqQSunAcHbTM1TLqZ91K94YcMgNmu1BPQWMrvqP9hpqH7wsxmNjVyTQd8ABmMgQeGJkvQwf1gdMb7Uk",
  "key11": "4t3jjkzMoiyh3NM6CmoWG3nxHR8MC16PiG7AuwQuVKZLJ8dgnCVp6Eqno4KGusS8jLbckTe1iyVtxjNiceyDaTtY",
  "key12": "4PaoyZ4TZXMuwWKE7xg4k5G1j3w3Wq5F1hFXnWeJvuPCBQNxCPj7ZXY15DN6hmTZ42D63Cvt6mzmoXNTmSeHHJQL",
  "key13": "3i2j2rP5bTtLyyLe3FRMUY7fx44cXjEhPDsAvMNVMLZji1hWovuagF2nhXVG3Tx1P7tC2kRAdarDYL3UZGUsVPNh",
  "key14": "551YiSnPYvfAdwrwmyuJFba3nALD7rVXWLYsYk2dFxs5iT8439v8fruDd3trQ9WE4QspoVC3qyD98iQuchYRcpTu",
  "key15": "2svXcRTp7dBn5smqrFWhNJHhGgXxAMUheDookUrLAfKXY4Ct9UUKFwoXvqTJyvNPumzdYjGfYQQQ4NPSJtFgmgqh",
  "key16": "4kRF1CqM6Qtnun7YNgkpth1Tok4WAWJwBbkEUDEC3DJcLvvGTFF3mZoCtCejTuANCeUWRpty29kDh8t1LiBTTGbC",
  "key17": "25kXVaspuQcdQowA6FvbhyMdNPj9j7PoNs9QUpDekuym89PYRGdaGYMXiuhnA2nj46Neb1dzBYt9SFqsMjaJkqVi",
  "key18": "5kFZtz33VueFzzB5cCREbz1iXeTeeNbLWhMMQqqzGLUwUcAkHEPr5G39AqQhzwtoMu1vB46SHRt1h4qaUHT8ZTNg",
  "key19": "47nU9LwtFhzBN1DaJoDbHACH2nBLAK41TRQHBgHzFpSPi9Y2wh74TPKXo9xcnPMyRvRbxx59tEZmjz4PbcnhRFMB",
  "key20": "2pvzB9VBFmupdwDtJBHofUfTeyM1YEkr3b5boZP1FoPvM7Hw7CzZayRNLSD6jskEXVVnCF8Td2YTNEs2LuVS4KAa",
  "key21": "2xLMNEuiMpuVJjHrJCmi8dFeZ4kJN6XuBPP6A5jPzmGLcefuKyp2Z48GnSrvoX3MPLAE1FgATdZXEmhW3N6bN37V",
  "key22": "2jcaWWNsRyXjyN5jNLK72V7fZG7WiBb2yRJp1sZsyu8KugTwyHtyNxxPzS9LEf2KwPBxRDBAMSQHRBLqpk5p29GQ",
  "key23": "3rVGd8QBPvreid8hE5iJSuHYstdsAZdabaV4eF193qg4yghbWFChdQ8G1MuCUatqABdrXnxUtd7X9ShisRkFbK7f",
  "key24": "f88JrWbE6NmAfA9aG98Dwgy878ED6Nqq1WRzVtFgR5gWYCUXKLMybUBDDCZ8dNrxMFRZLEForo8CL7aeBknH7Dc",
  "key25": "2HMsGGBTh3Sx1PHdBsieA6f7QzqLbXVNQDvBGWFt2avJsH43ne5p7tmp5cu1HaWye67rWdiF3u5cjVFD4bfK5imE",
  "key26": "5B76Vts2DvvRHP8L2e7mSq21ukmCmxatPS586duoMhRMChBXiK8P4ngXA4y5ZD868vvR88yMGovPdKfNDsWu2XTC",
  "key27": "2WQQfedxwjU5JwDL7z56MhESHkQLM7nsmZotzpKGTvgD6RTwLyRzb9SZ2zKsczVj47qq5S4zgS8ssoUSNkkqZDAY",
  "key28": "3g8FRapwPWqnDfKQpb1x4mFd23kw4YoDH522LzrAJboMck6pTf7nH2c9t1stY4KW85HgycKkykDZX61BgUJEDu11",
  "key29": "5UBM2PBbGrA23LQcyzwfvKxLecQ8yHF8HipN39JJtHRpB17FPa739zBUyD1ibYXJN1W9XqQsNNkqTpW2wyXwreky",
  "key30": "45VKNeZMiZN9CbLUUd2XK7BDGb53qTDf5ZXHLqL4J6tfSuYNCWjhD7jbau5YzhuE8hmQ1v6FbvR437EZVCVNqsbK",
  "key31": "5baWSWDzJrQzF8X6E6hh8RvvTLNARHZqdgL64UApXqRJypjTKS44r36dP9kLtj6SS5K5JaGGFSxLhNyMN8MeBSjK",
  "key32": "2Bh1MoFwnCuMTw1FWMSfmEKKQ4jdGmtWyyDSY5w2VxTKFURRCDkejxRyjVrc2fDc3ki75J7yGQYg4ffTsMYstexo"
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
