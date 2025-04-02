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
    "3h86CbHF71XQtnMtiz2HHFC2xeo2hk2DH2SRfqZ6XkwSTagTupegAQqYgxfrx2jqTRhhmBV8xrKB1kyKqc26Q1ph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bWYLqnvhvSswN7i5YQhfCtQja9pSod9pwDre1ws2AW3CJMjsWr8bhog5fJASjomjtcZGfWfZnijJCSo7GGFXqyQ",
  "key1": "3aWbo5fPYjooeSXkiuDnxVfikEU19cd4KUhjAVPsJb1b3ioPwjwzJjvXpYW3ZdCXFgWEQpLrvtttuo7tcAdJ1E99",
  "key2": "2DMuQnNhz7pRa8Q3zUCKdtohD2WCndtZonAhbnPs1wTHG7YUHfEP1LbLcmgG4LPGrXBKZiWDFn4EUot9FqgsmkLE",
  "key3": "4AbwR3xURe9efH4SEyaPrKQN3QoRp2w1Vr5r2rdaQwy5ThQhk6F4e8HLhXFSZrDfxtGVVWmXn9htofj9bt5VDNpN",
  "key4": "4d1x19gVG9C5AcCsaNd9XKk9ubCUm2kDbPDPtyf4BxvhRvBJUvCBfHhrLBuwJe56ZNVWghXz9bsVHTToQv9AbYkX",
  "key5": "5eDpjLVeJnT4tHpd4gkmPS3GKwLMYzYYgTz9aFT6GwFQkEHqL3qbMNt8Erq9R898u4Sb3hsGa5TQwm2ZmgeBizFK",
  "key6": "2QseWXoVBj6bXmFi18M5AihDhEBbhCGG2cQ9Z3GVh16UPYe2AkwZjVGVP4mpsm4a57yTyEj8Ki6U79ZBeDwGkRcK",
  "key7": "5eSkrVcVdcisB9PWLigwnGBdE8XTZjqNQasMGiR5K2feDPYXUnssGA1VBRt4derPQq63esBocAgChZCY364UCMsF",
  "key8": "dFyWJPFu8VeUCAVezrMngcyQgocjLBTsKJTB5ptPUduvfkiJxe1aeYL7GeH7tbecovcZAGygLHJamu3S9HQ2VvB",
  "key9": "2JMBmHxEEArZy91MvAubdVjA7jafNtba4M9uR4xMAjYtQMp5K5qM35z4H63qy29gYSwuiNj3HwDxHZbyD8e4rhxk",
  "key10": "3x4bD9ug9iJquv67spGZBr4kfgaRxy8BzjuA57TzgeXaGh446jHXWFmUTpzJrgkoPG6EwxyMnU5WBJuCoM9phthQ",
  "key11": "22JW6TUr8jCkXTPiKokfQNJHS6xzhMY4FNcYJhpmgY3sLvi8XyDWrrv3JYGNbmYxM92Y5gWCfHLKnU2j8yZRPMmh",
  "key12": "4E5Ksij9DZHcREX1xCPt5n1GcQE8hSdZMUvAuvEPFph6GbVG8nmmNFNukLVeXooTmczjX933AmX29JT8VXLspPxC",
  "key13": "5UXm774bW9fWcEUNiSSdDPTycxrbBwG8SeUvtFuHEZvfjuowJvT1w23xGZncnrniuTnpu5GzELPxyR1ZquNyuFac",
  "key14": "44Dy7TbNcm2DaSRsjQPwN1J9nBwEcpJbithEtjjFiakpKMrKvThn5n1XHD5fT1UhvQkj4gnwJw5cmnYLtNT69nQm",
  "key15": "65iyUmcq8MLsqoLg9oTQdULToqzgroiyrNueJAJPe8tZvKoUGwpTvSJQQf2UKJ8q3wAZKeqwcVA8jX6zEAUZw6bY",
  "key16": "43pWdEGvT9YSuoYuGGbqdaCsrR4eVE9YDFKQPwp83AU2ojMjV3KgpHe2bDiUvsaoFrcgqYNPD5npVZtjDq58YAbM",
  "key17": "2xjXV3mPbAjwbWCY4jnB7ZxTYjULeLqjUswuTVqacFZpnrFU7HzXuu2FfxSWJcjToZ2NgjzvxeDRVvoJdxa9qVuN",
  "key18": "4mCjaTRWt8PpXjAsPdtEZpPi3GPSKdMe5GYtph33Z2fZY1aVfWizWiqcmpEYvm1h4uqnU5UPLWXFV38tzfz17ssa",
  "key19": "4DezGX68XEyZvjetKZXNmeFo3C2nV6AZttSFMWEYmYLkXjedsT7HcbrNWQ9m5gsQsWdptfU6bzZMhduUgnVuhu5Z",
  "key20": "2567ARBamEnai8QBHfRFxS2bd9uuJzrckaCFTSTiNz9Yd1o56oh9CpM7HMsYFJjFtBMDowvYuikpjukgoQncUmuX",
  "key21": "5dnj2f2kho3h2iQCzjYK52m2gyvrZu5kNoBcX3x7cAqBxpdtnQcQKZcxxWqCqyCosNtLQYFzFLFs9HJJEwcq6PWn",
  "key22": "643kAcKKzGsDo3owUzSmwwaZrFQfeMoNJZTfctyAjHXrfnDNRwaGvQHkRVnBavQ7NsrNvUNG53DdcZPszfcqbiUW",
  "key23": "5gRtW7LYQdB95CQ8pt1HnfjUZNzxed7nKTGJXUsTFhDNgEjCHJ3MCKuE8qv3wrnizJLiLUjcVLPXSfRT8W2r7cUf",
  "key24": "5imeqZ14y2uwnjnxSTXnaA8111GAXLd7e7mHxE7iDBUurSYY759GMbN9GGWK8nwK9phDMec4VeFDpHuvYuYWhkUZ",
  "key25": "3nKVTygVLMqjmTiWByrAjn4t1ZMvKkwrBqwUterfAYMGVer5mEsWRa4KuVXCF2XcJEWtjjXLhpSnPuFZYChj9CdH",
  "key26": "2RLNUrsmFcFdRZjsCcKW98w8TNDLHE4LZ3UZ7QJTL4VvJYrGhGHrCJ3nRNgLKctj3RVEc1pSANSn9JGMESBS6Hp3",
  "key27": "2FyZ6z6QMTMb2wwyTEhCRYeK1KKBbxtgTJSr1SGGqrJA3EWz48D7o2axUpFARjafJ2AKJNyNfT9itNsurYEJ9YjR",
  "key28": "3PNrbRWZHY9MFAq7Jtgvd8fMb5PcZYd3tXqmTLBZkeCGQDH7esMcFDKNPDGoeUw1Bu3z6ozNim5vwmbRnpZUsi9p",
  "key29": "4cgK7FJoeEihGZP1u76Jhcb59vkmUDPFPAUQTutCgq9mZC45SKpntviPyj98cj2aWPn1V8UUJw9onwazDPkLuxY",
  "key30": "588bL2VkovDDntd6wNzBCkyT4REkFdYVvKSwbaduYBmXNgKFqzvb4jytmx8Rp1g6xLNf6H5PLApzyc31JcfWpspj",
  "key31": "2AdbQXrDhcZ55sBdPYB6XFYXPhhZK69eG42jLjQEd3vPRNjmBK5Q4xtyDn3iaH9cv78kyrhez7qScj6nztUYpvMk",
  "key32": "2rXS2CgSj3YtxhvERqWW47zARWHQaxERKBkVjp6RRhrQ1RLZGcRBckNPxQJyDGpNCvAkaNRptQjQ7uadV7ieTY4J",
  "key33": "hnUd17mVtsMjxMz722dE7Ab8Ws11D2tTQjFFsWBh9CcKk7CuWrkSkd5hH7BNo3jmxqLdS8LsExD3PrhUWpehum3",
  "key34": "3GrKxGK2ARp4Px5u5HsTDpVX7RxAC9BjPWwwUKZaaxJUZVUJfeumjGsSCRXZda4Q77DZcJTv6fyiNywwbpq1o19v",
  "key35": "4x37p4g2xcMH2YrNWLBt1o241xGdfybYgaWYW1YixCt1zNP4wvBEHNxpSZrUAYMbAumFJ3iYWmNCzSdRfRLVgRUt",
  "key36": "2cRZyLbe5yaHPTmiQNwg8ormSidA6ibaye96UpAV3MbAqKXvexUFXfd5cbRCB67kcv2cNSQWVCyhzfqtT8fKzAz8",
  "key37": "ZfXAPs6HsHoYwbBJFX4LV2uoFK7rrjZrXusWRxfGwpUwmN3VQ6EsmzAnuGsSxa5mHtQAyQ6qtKu4nvGn54gTzbQ",
  "key38": "5rr7k7bLRbbdzYhjnh8Ukh1TbYrCe4oh54rXkEx82T8KSHbjZSRhvDpMSDhvQMCLipHxjw199SCm9yFCVDSJ75gY",
  "key39": "2mtXGjzEzbTJtY2WFuw2qhktyTSfjkAaQJJes9FGd8wz8ot2gsZA74PTVnvEsJHHy6dCtk1GfbmWXUprN5oaVSq8",
  "key40": "V3iaX7Ybf2pViWzYocPdVfkEwLS5eygYW2GMe485HM1TVBBiYdaT6xAGnY1MNXX1KcVxrFPyN4i5tY4z8zfPDZ4",
  "key41": "54gBXejxDL7aKdjyLaLkaajaxqkHB5uEQ8xoKZpJ16toZowkhvwp4ARCaR9Tu9SGFgJmLeQWHoU9yqeEeQ1DAdH2",
  "key42": "5rkhLKU2k6KrnfV1ngSEfxN3z3hct33Xh1pMk6s5MDUh8u2L7zckbjvede8uriLtg9PWwmZuyYnzRokW3W2jPVLJ",
  "key43": "5TUqjZREQnrriRa6pP7mVjGHQxYgzAy6f2jPobU8isHiG1TsXbMZ9hRYVGqy1tukq4rSL54DmmkKZvonKLyWaHtq",
  "key44": "2gQFYDemveGAviRxEsBgvRgGrnXyJV8Qcmjpjp3TpRJgNSnt8QX8pwWa4YWpCAH7jKH3aHKyPCsGnj4db99EQX7g",
  "key45": "LHgkckLjWSeMMXx7a8M6Qe313tWqAUKEj82hsQEqpGVoyfsch69iwq6CsQzAcSpWd6Uv6CkntHtCbvETXZJGESg"
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
