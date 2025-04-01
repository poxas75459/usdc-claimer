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
    "5FnT8DQStLoEQNxX36gHUSr2LKsVnjaEPB9URLucbWLh6LyDrMyk92cfjU7fU2BybTTp6mSWbguKzWEdbT3oTXKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LYMg31ghxB1wKGkod94cdbnq9Ti2qnv16RyjEQJEZWzibQP4bdwRwSZ6qsnvgmieSEMfT6uR7nhQCCDcCuEQUMq",
  "key1": "5ocLx6DS1oDSHYKUkcdFjre2eBg7YW7ZUXenu4TYejenpowVXpjS9W74bXmE7ucpzMh6sSpcqu4Y9zPz7yhfPYo8",
  "key2": "4RsLvDGyPKJJQm6181bNQNWDamKFWFVnoaZFGXCvSPpEb91W2BbEwiMtBwaW6EjDBwsfXWWHMABe1HX93gxt6yrZ",
  "key3": "MjdGJmjYuyNGiKkzhNqTdQGWYrk7bq97GUMq78Br5jehnzWs9AcxByAQdUFFcMTuKnSDHj1sgk3hj8xqTHwEmYd",
  "key4": "3KuHDfzjfpNp1stYbh2yJZivDCTreNLQ57bPGd7Yc4uiBjPb4P7E4vzGZrBxrBeSxbnj7gCS4ESCsSo128wZuHZH",
  "key5": "5Gd1RG6Ty4BwRXw5CN82aMUtJsf2KjWt4xp6GS55o1n9TEi2ZNsGqysjupifDn2ixXyBArXKf9kVB9DPCqniVo43",
  "key6": "2Ygh5qazmvEv9b1cfJaqcekhcw1Rt8FzipUG5jURsVsFR8SEwvSTkuzQM5w8zXxUKqrLJhqozAxhtQx37WuEnitZ",
  "key7": "38RVsNXGCZrSsLRdHTt6hN9jTTC997gdcQyEEJ14okVg5zLPTjXAogcY97x28PQ8fo2SLGtHosTpxV4XmPjBVk8B",
  "key8": "4AaehD2xqrBxgyFJ3Vds6KZReDvGiBWDxaCWKNTQVTyhpvj87Ahzb2V9xAfaRueu56K8DjPyNjvB4M4JT1jPo4eJ",
  "key9": "5sSxTQ9ZjL47b91rW7VJQA7wr5x9VVoF1fwKzKw8QSia2WGT5gFSQyuft4muG5JjZ4YAkS6fXsFG2xrStEpSVibK",
  "key10": "zeHDkvsr28ofU4qDt6XM6VtFD6z8uis3LpPNjmeWqw7sV5ffiYXZGMQ6FwqTQzDSvZQ19vXmedXBD8Fai3aYRY5",
  "key11": "22F7aBhafFAqH2iTP82RspGFvJnqjjNcrJZF6qGY9926s92nyvgdEMJCs3BZHP8RQhqYsEhD5HHhVC7zJVDR1QUt",
  "key12": "VRJ4m1devcntEjFhPC5dScdkJ1XKX7R2wSZeKCyrb2sNw32JWxZEq4rq9Xaof8hRq8tqiJ1eeK4wgATQDsrzKvY",
  "key13": "59394icPDFvmk1CiT9iKz9o7nuADeohE2x7paEbJ6nmV7feUqMZFfiYL7gDyDd98qcoxtYFNgRGwBiA288swL5j6",
  "key14": "5Abfb8rdagUKpmsLiQirSThwWxx7Tnssyn6TTRDc142E9T6syWq6AczKJ5CCYVJHGNuPzh1VofVv2psZCeQoCL5R",
  "key15": "nYx2Lj1KAmzBiFsc7cgetLHQFUoxNSKGXYBR5yXu9iXCkVL7TA4QaFyuWB5kfQ79QPo9Xt6TL3ZhUD1j8GLbk43",
  "key16": "5ZgacBYmtdqPMzxcLn5S2dUyRtyydDk3KHPuu3LBBkiSN6k1Wi7F444L6eGcXw32vVd5KLSG7dmjgjSdxdoPfhgg",
  "key17": "3JBwon7JZjRPes8j94i1WNKyAwXLjgHDTFgL1hc1hiZjrKKozWx1xDdrZTf4ektbSwLiig3bDUt9J671qy2Kj8Nz",
  "key18": "HMibZqLacYgU6mNirnFyU363bPB2x834ws7jVYBJcoCSH5BykWdhhQSVUZumAbMPTyjyRV6tJiXsSWYtYwmqKk3",
  "key19": "5Df4JYtmgYo1htkAj1WEuP3yio3e4dvy7zTURufwVR9JJnxe8U3cCjSiAemSaFVaP3iUaeEi4v8JdNuuN6P69gEA",
  "key20": "5mGMYJ46qvKxEjzBsxDhARSNPF8HQP11Q4rcLN3CUSuLDF47bfyph3jhr1ChFqLu3dWicqNoYaD9Mo3Q4eQnGHYb",
  "key21": "4o8qac6EN8bS2Lv6Vdwtx6SQ7chCRHGp9YvkEMWzfFfnnFFWJMTRNxkUBVzSKyTDiXJC7dxFVaKL9JmmYUH7S2Y5",
  "key22": "5E5MPGurLowju8LDksiY9KTNKGAZQakWG7phKVti52nBvJuJquKHNiHnF3oEeEmRw5dvz2dNhdVQP5N35xgv66ZR",
  "key23": "26hY8QC8qdvNLWnGnzpugy8NCRciCkPrHPqHb4Mizh7VnuH83eL8i1v5oCxyQQeDcR4fR4TBw5RHV6jfKRDXA9Yg",
  "key24": "qJZ2MAAstV5nPtEu6tSV15U5F2G2zYShdrFVcYji4XyhHMdWh4tsqwvzLPbF4dv5XrGHEZV34vdS6D4636xBe5j",
  "key25": "5EmqKaubgA5RowYcLo5UvCELr8DyujiPUrbMguxLXJnQHJq4KqjtELnQNq2oFum9FKuVGtFWhTFmyHNCNZdHydx",
  "key26": "47QCMBHz7S2ie1sPyFPWtMTBkePrL9wiwrMeiw1XGp8NsXdcYAJhdjTdCvkH81S7pocZ8wzMZqCjB97VreLbuFrj",
  "key27": "62oAHTJHiaLx1v6Bpou22Bvg71wckvXVJPrjDJKrdNGZvgSzYuNVNzSmpNVzCQPCZXsqmCzarSnb3s49xMugfooL",
  "key28": "3urXiuV8gxfgzVNZFALoK2K2Zm26pX96H5vaPdmuCrUMLBzY6jxLBBZuWbtqJZQMs2ev9Mh9YgRceSPixJW454mS",
  "key29": "5YWJFWuYdzCdgEGgspETyepFXs8m3kv7ypAFUv55n8bweQJWcvG862PdeJsbB4riwGQx5HUZaBDyNTPuWr6Lztex",
  "key30": "4TZFktGAiCqQMXEBPnMhPrgSzViZcFC72QzoxTWdqRoo1BrcpyBbqsvJ8MGxCC1mdurwcsjaokWqH43rW5DqK1Tf",
  "key31": "ProQFE7WY6RdBd1MQfhPQQffmq5mbU1HVuNHLUBZN3AF5SVyDKvB5vKsNYNukqMEygRWJak7TqBmPrcC9btmn6b",
  "key32": "4S193fBTMAoptM6Azg8KDhQkHDu8YqYGPP3E5ZyMwYZW9UAppKz63AsiDDomVUoAsEdoB6f9gVHa8N6sQfrLLG25",
  "key33": "2xSoFnP29KX7S9qX63dg2ogbgxKMUGct2tQuuEgfHQ1KZCjPeFG2FKXqxcz9gDAV65vxhiEumJqNphmUg9ACGkat",
  "key34": "bDXx2eSNVuB8cJzL3Nyrp17iBSMjND2LAerzyacyhSZQsaMB8eoMoyENA7ip6TiAWN7gCfa2Ek5jqsgaUKNucxu",
  "key35": "vcotRydannenphduoXrMFE41Madsj9iGUxbA9Q5JtZZkc2XQqKEqM7iT5GE6pgAezcbjUjujGdWs6L2n9ceV61v",
  "key36": "4xhazzr58my9KRSmxbRHGNNZwwSDT7EFSkfcpRmYdYGoEn9iQveZCQUGamA4DSzR1bT2oGUDFgBozkb5isdhV9tg",
  "key37": "3gnaPuE17L8YYSPBZicphQ8B7z8sGyV9H5kWnoC65hRqMfGegKJW1vmBTgvqxXFNURhxJdY9yBE6X2tnKbmKF7id",
  "key38": "5yWSairVRUQQvepNM657gRd4RysPQQe88Jf5416hSDf2dcdX9UgCe5aYhNyQvsEkHsN6Yy2i4hSWvjH8EmW8d4hn",
  "key39": "32r5sk91EJvpFphdBBj7fVQmxgjmEvGxJupXL2Lj6hTaXJphK6UuZvukzdU6zSV3W8YA4JBeG6FV5Y9xrCM9raRB",
  "key40": "4Tn2c52e42FwPjUNsdV1pFZTvaZiD9kRNRBgFpBiu8bGuMuf5aNPqsFN7AQ4CJNc9yEfJTNUqFDZe5euSFGaFaiD"
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
