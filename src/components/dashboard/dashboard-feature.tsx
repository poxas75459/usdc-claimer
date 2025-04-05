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
    "2VEfodDApMStGq617ahvxZFoi6GgcvN1Y2Md7RoBPnQZEn71yMbjzjvU9WesQWwXzaLc7icCNAh64quQU8T4Duea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uozRzMv5UuY6axNS6cvEznhW7xNrRbYCKxRs5tNBEePergezEvRzVh3LUVKRT7dsArEAaqAT11dEr5RVCV5RrJC",
  "key1": "nRYtZ4teQCic1ApP6nrCpHs2mPLu5skUVR3rAzZXAq7kYxvhjLyDhbirvZZTbcpnthhWaBvzkEdfrEXQccxa24P",
  "key2": "5mR2HiHsVLHAErdRu74VM1a5eBH28wGhJBdaKuH8vqpQgFQWMYFiZU56kRdTuLebrrboSRuG2hPvefdX9CCHgr3J",
  "key3": "JSkiMpw9KsyzgQxNsBj6cPdc3bMnTXXBZRXVXp6eCygZMzHxgbD6Ytpy3xT395naa8LoL25UqRXC7uvoHhpcYZx",
  "key4": "63JNKPdBTbVbKJZXifGpJo4xxVsTRvTc9bSQBtAGaFBc3s3YL8Bhr574WUMd6PEoBmj7wGboWnTDkMnDjBg3FBN9",
  "key5": "3DuwrxrfEgMbPsUvwaJTuYoJ9eSdjVMbJBRK9H7WCSnhFFvNGJzeTg1xjdVo9hZJ622M296PJWTL36t4ABZu47sN",
  "key6": "3nDwNLkJxqf9spHfPV7EUAup5xCudaAKUERCqCPqGyyL7KmMqEJfSCsRPmNCcob1tnbP9XW5zmA5p2cKdManw9zx",
  "key7": "3Uf6eRYJmooev5rxfmLawxjPkMH9DJCR9n8XHffe9xCbVyThvU3TG7EYgf5WdV7FNQ1u5N2P525jEbMMtBg2F72S",
  "key8": "5yaTPfoHFyvF2Dbwpgei8NtzxtFiFiFjm9QmuaNkTqPn45JAeC6Nci2bfDyEbmy92vZRogjnwo7QwJuDcYpguvFQ",
  "key9": "4ip5anwna3Mp55WrmZsResu9mMePxwgaAstHy2XrhgzLo3cVQmFg3NzdWKnnnu3E1Gjd2sVqZZvH3es4eYbAP4b6",
  "key10": "2iJAFURcwEtYRk6Kk2i3TyCsw9P5Hwy7zcUMc5wvZP2AJXDHSfkgaUoBxJv43X6rmq9qcNZ2NBZjhecEgLhvbg27",
  "key11": "mvrvnxqmkWfW9XtidAzQSGhDBt6YrkBQPyxiSTibpZLqpsvrMjAAcsK86vp9tqby3hJxLo8gxCVPqWpNrKL4eXF",
  "key12": "2H4EWAxpF4Fb9uzq2MyWmEAhFfMzYcmCwtH7duU9kDk2Gxh4rpjKRF87v7Pma3wxPZHASkQpzLowyJgFMmtr7ZH9",
  "key13": "y5Y6W1iqnaqkDwhuEm4QrQAEULbV4VbQ4K1Qk2EvN3K1KoFtmyzh4d3Ut45TWpLJtgFaY1Y3HpNkxefGJx1JUZT",
  "key14": "6EswgDN2QwEC46LZPMJWuGCH7bc5Siw1AD6ND7KVHbDTw1qncJ47ErCNc9XLb1t9pz4oxgYqCqrymKnc14D19ZM",
  "key15": "5ovW7z6fRLNJ6eVRpvPP8xQs1tMbp35sno4CHmbpz7amcxXc3WDNz4hzRjLjNnN7Kvgw2HesDXSv6GftZ8UAmBRZ",
  "key16": "4u9WPuB9i1vmz68AiJo4w29ELyCxZZfwuEThUErg85GHcqGjznEUjLv1uWLshak4JvtCfpcyBZKtBkLwWPdc3bjh",
  "key17": "3ZeJZyT5cQFghjHRoYpufCUx6cdJ8b8XXFz4QZ1VuQRXEH3GsaXbCE6Wx322PWenZ4ZLeatHMBkEdfvs9ejigeeN",
  "key18": "5M1a2VqmDEoVxRaYtnwt3a6845TSeVdABqMYEzWYuCQRsFiD2zm1f5beNVrgQxRwWV3nKV8D5kGZnfKCvpHArLvq",
  "key19": "TwWEb3PmtJNaWcyQFumQ2gqVX4LoTsDtoKrxykgKBp7NwyxnYjw2aZ6wt1EsvySepe8arbNkfjrRsDRhQkzTLbv",
  "key20": "4PvY8N8egCKBX62NHou9gY7wcWim5ymTr1vgiLogmhBYBhuSTWVUHcVL72a9PPuUeXKpbW1rVCDVkX17JnLrP1Ha",
  "key21": "2GBmcYk6MRMWQmcWqfqtqHoAikJhffTLocT7jncyftuh54gfY1gaWeuB4hnZuicDnVMyqYT2aikGSghj5KMGjvBj",
  "key22": "5WYoc5AsL54zvJaoZLxvRJwbfU4hwPsxXGa6jvuTHrSYimxwjuBTTb74t1H6sLG7ZYSB5txHwps3QWWq6Nq1kQoL",
  "key23": "3j2eJFmU5N3kqRjs8cL4P2euHsanjEgLMRBqy9FkyB77GjBGb4NMy2T9B36CvSTsBVW96bmXc6E7X3CCBTC6bJUp",
  "key24": "5AkffGSCubCjAhqdiLfkj4x5ve3qyvBY9sLHsuZrsEWiaQxiJg3u5UrcgYf3PcjEgwaGHTniUSR8HdgDmTZwxQbM",
  "key25": "2oMsF3FxtiSeDQTPtxCvkXnePx9odyCtQYF56K6DeAt749pjJe36gpGaFthQEN2sp3AjmjwnRrpLy6mFBJfCymxg",
  "key26": "3HLCw1w2jbJxpxH3n9McYBL3g88hX28PxC9fBU11egPopAGwQHrTpk45CA4oTk4QTGmUjuSVZTFacpA9vRBLeCnC",
  "key27": "65Bsq6gPT761ekL3b98H55VXo7rRqQqfZdmfZYEB8Mr7niNZnL81eYJtXsT4kXbNNZ7xXTuTfmnT8Fzbn1iV6dq1",
  "key28": "5RsbK9qMiSYjRET1cs1foCvfLjf13Ms6HYtajWwikqcUz9vc5qZiY9yGD3iLiWBLGTMkqhk5v9sTEn5fL8GJhwt8",
  "key29": "5VXfCBbwuM1KQEUtW951iRwNbXR9it54s5VVLJtdtEuJ3qwfjGehKoEvWdEG2ckY7Lq7wrica7uFU8r7b9onZkN",
  "key30": "2iTg9T4V2ghHtpSoVz9tgYwumCBdpv4bbB9ZPa8fKZErm6uAHojxxXB5kwZwuEAgckcZbYmsYk5t6pP6M2Npub6N",
  "key31": "5iYKKtPUP3HqaAgkiXg51SBvp45qdyNJgAazcXwKVqUScDyWiz45yWqjBqYMLQj4G9hrjWzGnzm449J14hzdECv5",
  "key32": "635Za7dyHPow4421M8FHBL73XgWmhRYtnBLWFZ6jcZkjuUfjHPCEeW5QN71fc3Mj4v1uaKvkAevNZEfi2xpYJdhN",
  "key33": "3c1iZ6gmWWwKa8KbkNKHWhtTEtuSw2o52r4aibyStxg1v59qvPZAQ4TpkPEKVbJ1msXCsMWKDEJZk3fPH5sSmUmz",
  "key34": "5z5Arkn3LVH77qgDEXgvKoHdwVLPU1mkJxjS9CkCaKsL31r8hHTnkL7bTw3S9kpnSASVQWi5wZ8iwMjKsAZ6fL7y",
  "key35": "2naX9YpS4JwtkcZXgpwLRRVjRtT1RFXvajEWeQyz75z89LpagbmpzHX6rgcfGErj1bGTTHZUTZdgrm87jwZ1mCpv",
  "key36": "2EuSMDsYGP54DY8U7NbTfzfS6BFaqcFGhbZdjHZFshuAaad36nY3qiNsDp56ZgBxiGu5EL8rh8MMdzsorsqK6MYM",
  "key37": "36xEthXGvynDmT7sGA8jLH1Tg6b81aGA5JZnGR5NuCqS8xzE3P9DEtyFJnkvkYq92YWp62Xi4nuWYWNY7ciJpCtP",
  "key38": "K58Npe8s3vfyNcd6ECcGcQB7tKAV1EWEkduSETeyNP138sPoz47oUgygA8k5V3M3Zi5mgAxgrUe3g49PvmGVxzv",
  "key39": "qf8TK5QHzqWAkA3MV3frkzBSJgoEGEJQhz9CCtDigNZbLRGTdKSUTo4DrbZrqPntLtbk1dRjA1Dx63e3pev3hc6",
  "key40": "4E3rHrUhaQgH6wVZsjcPTw9aQT6J9K1bH1tXNgGWzD9qDpKMAvR3juj2vNp8tNrCR5CdX6CiNkVwsZmbdXPbLXQ3",
  "key41": "Z2P7VLzpLJMXB926zaoTwATAowsLmDnDNP2d5R26MrvHh11okaxwdoWMBUBNM3KTREFTFSdFqzchEJZp9dL4S4U",
  "key42": "3L794np9GhcY5VB2tvLfNbUVNjModwVKVKuycWYBQwFP51T6G8jM8FfrMrUxQdf816NWwDXYxcyksT59PDN8Xyn4",
  "key43": "4xW76kAfcy9XdJeSGQWmfCiGBdufa5fG1gwmuDumFbTdLCxP3xn9pX2nwEPqTdHp6CGw9Nwv8CaVr7D4vfBsWbcw"
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
