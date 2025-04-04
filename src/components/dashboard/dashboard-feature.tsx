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
    "4TMyLec2sNgpAqejw8phtywHatLNyFXGG9Bh2aQSNqx4JhB5sUUpd6sKBqzThVGLY8MTQadu8g6CJgbpY9uAM4HH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ozn3ayMRr1ihjPbKnq1BAxguaXcHqQhrSR7wctxBQaRKRtGi5G7sqPgjpnDamgnUuNsTajLZXszKApS4aZ69cTn",
  "key1": "4xmQc7bfnMsfgYKLSWuDKoAzXx2cQ7WTMDdMjdn24L7xNKLoJvxX2TiC677SThq51mMWSW5bgQRsjuwEnzfP2hEQ",
  "key2": "4vLvy1adertJcMogq7S6y8JJK9aRyV8acNgjb3PsdNKfDAFLRLQ8J1FExy7a1ijorHm8FVWScLYDiyGyLVVuvQNa",
  "key3": "yKUKnDYb1noGvJBzPDH5WbVYvJvrTsW6XM4xnju8s6T9Q9pJHZrQgen9F6mCa5aV1KBqTxud2xo556Xsu5CyoMw",
  "key4": "5BAMGwHU59ECEr2TAFQc5H463cS7Ua2keGknm6XoLqVKyL2rAoyra1NnpWP7W2xPkW3ZqKNWEf4h1SfnBuwAoukQ",
  "key5": "5SQkaP7GJHtmdeFBSw13Y6RUNNHBhnAP81WYqsNrfUWuf7gPfbz1b9foU3F7oJ3UKkoRFJBUYQSq3cMNdxeiPY7g",
  "key6": "3gJqcrhS2coq4xHPwM2DBXZUNqQqVEqiVaWa5xZMRDsee9PdtRUcdQBWxUHY2aTcRddfD4osUZSDwxADBJNdYuZo",
  "key7": "5aQbxaYPcsg7uC86sqsoY58c58UBFmY82xZnovVyJW3T2ihmvLFvVxzg1A2Zbjxs6RbvpiyPS1dz3jn9bUPyhuB",
  "key8": "pCsBBUnCQGtVswJQnvmcFG5WaMhBA4rDqHwvt9VoX89DWzTxUhWbxwNovwx4pjrNUpyiDi3JirzW68m373xwptR",
  "key9": "2KvPLKyDjGH7CcCBu4NAkdhovBqQxhpYJX6cdEXSqSEPVdBToLobHLcHFt4fREp1raYyJqiFbFvNXt9V4ni7uwkv",
  "key10": "3NsoJTecUM1r5SFHNVHffpksnAg1afbf1zR1CPfR16CwvC28K9NgCerCKFZFqYzLDZBY7QYcrBUjMktUoFGYeZPr",
  "key11": "1QS8wXRnbQWzo5wMLg7EJSHBRQSzMJmRWqbhqDUmeVehrBMGsAUH1TnhNVEsuhFyPJKads41TQRpS16EFf3VUPE",
  "key12": "TiQBnbXyfN9CibmJ2XRntvjAGFtH46Vjff1MzCeb6fQYyNJTnTExZvZwYCXJeEZq31oC3advVooSqHSRoweG1Gi",
  "key13": "3z7Nd3t5c391v6uCg7LAhd5664jHAVuLh1uUvT7ANgrtNRgCZqyZtALnBcDKredCCxH1UNa3QmjyKayQKgiDHBxd",
  "key14": "59VSaRJ77zFWR9rHWafVAhPpijCx6Sb3q8oeqAaU4MmJJrpkPntqoQBqp3QojqvuDDzF8rmga87ibVqwEPHqFuyN",
  "key15": "3Q5VtoqMDsCwgDdYmSrbbiBsoncKvvNDsd8TDhVp2x6QGmb1fLuNWtyh5JY89rR4AoBqVEZSTaY6jakjDebYP1xm",
  "key16": "3cdiichKsVNWxbHm99pARWFii8RM8z1RP4TD6crJtzAd8oXxrQ7oEmzAQyAJuKkywG4qskuPrXnUgLFfphg56MkL",
  "key17": "5nsXtpmJv81jcYbyqJRpNhdSu4LZUiTA4WTj76pcXD3AjPpMxfwZ2aQcXr4fHZEKdhicDTAJWikQGRdDHBuKnSWJ",
  "key18": "4jhdvfAbAzrUG1pi9nJcn7eewxQ7GsBMUQ5KducCkQu8bWDnrGSueLrR9tjyEuFcSN3DQuqWhSLnngkeEy2pQbjr",
  "key19": "RAp1gk1cpGvDP6kmd5Pe8AEodrxTCa2RaJcMSYqPX6vHeKFAmQ211kZMe3wiJnLngs5B8MJ5TtroLQsubaP4Lcc",
  "key20": "36saWmnPcP5GUGHN5yE69n9nLSMX5BSpzqEiHAt9wMLRE9SUJyYKYFB6DViQ1p2xkU1FLqRUzsT853T9hoSvJbuK",
  "key21": "54ig3byjuum4d1yaN8Jr3bxNH6td8PEKfLKwn5BqgHjBAcRXCeCMq7zFYGUMXw8ujD2MKRXA7AtVHrKyztCmYq9S",
  "key22": "2NGzQ7FHfTwicFjD8ThuuzLirJPA43bFtbJr8sMtg9igUexBiFFtaotbdphy4WoQfip2fExHTh18R2MG8f7oajMh",
  "key23": "2D6XMU6yZwT3PC7VtPeuigqR1jk5LSbaEsZx3ETPgxMuE7bLQ2CfdjcJnTj8wE4J39nw3rFP61dfzzjvDrfE6oG2",
  "key24": "3hJgwmaxZZhZZ2MdqXgqpweYdM7ZpYMveH2ynS2j4NA417swDt7FVsiKjCmASyM31avMk61pZwKeU52Rme18p3B1",
  "key25": "qGR1PiCMEiHX1At9quAt8FnGB5B1LvrGJrsvRHpHhypP4iGY5kNdLj2mjKY4Sxji3aXggxFhYF3RRtNRR3Q93c8",
  "key26": "5AqEXGxCkwgQxsRcyWQnudNGc5xHrQAa4QhEEqEkPRVPKzSaRhPJ5cViMrrqbnbeqDujmoy7EmSzjVKxT2zXdbB1",
  "key27": "2aM8i33qRZVwG6aC4fz4s9YEZ1EjdLxc1jjrpViBbJT1rutD27we1e2Vnhyq28vz6eqKAAwBsZm5t6k2tCyM4oHK",
  "key28": "e1aHYapWbKHbQQzaRKErX3ahcu64QWoT27aPHkseYbiMmah7ZiKtFnuDydxX6w5NQe3sw7o2mQxWXTtxfh5feEe",
  "key29": "64vLpsfyrnnW5E3KNg4PNvGEVGaW2KX6Xw55j4H5CiKkNyJuBeQ5CyNwgRVnfTaPsREzqt2g4vTQdHvkbAdvjYAY",
  "key30": "4GC8wpY8N2tZ3CW1AXzXhePUsgHRDo6NFQpFNb1Qwywsnr46iGCc3vJZxxp4hux7Qhi3cMuKpp6bov8zxsdbVUiW",
  "key31": "53AZfheWBgj21bu9Jb4TfVz6FuQcrpMmYr4pEwGqeeFQ97TJ4vJmQ4MhXn3QdYQyKXfdnDmCUgRD6rGeoCmRk9Lr",
  "key32": "4HnYfw3TSGV7u1nCCfGg3QoUJTS5WSXeiJuy9npij1JHSEXCNVcJMdXAn2q1mU99uvZ7d9sFvjj2AwEJW6rMYWKv",
  "key33": "2A1zhHVvK8Ti767uwgRTec6pjWA3RopHSvsDiLpftAHVY9VHA52bZqEyEdd8JtSjdPt8F7V2bAceDvNf2hy23vmh",
  "key34": "51fS99ESmyagdvcByTvwoqXb9KJZywoJqssivovz1aCwYUvDZTXcq4mAgmU8PBoUZDWD9nNBxkyKaABKfEUvU13K",
  "key35": "TbRdyKeNW2iLBkMSgvmh55TPdNMQzmkwVwB8DowanQr8LaGUczTWRFwYmdPCztg28Vye7XFNs7Z6n9Ty2Mhxwni",
  "key36": "41wwiGf4gPCSHbEgWvsSo5536UGt2ybRTPX7UWivQwZqqZ6EVXi7R34dqiD7MJb2bDAB7adhxWk6KEZNzKKgffZX",
  "key37": "Ryx8NWNzFuc2Zq75Kyo83a42zj5WGigzkS3HVFhXEfrBRy5gKuQr4VuVtBxnXkneed6u2mQUZyKSL1nCcv395Cp"
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
