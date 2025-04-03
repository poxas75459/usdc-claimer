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
    "4NSpCtXiaz9R4hKa1XisNsBXwXATgBJqM2p3k9uq6yvQWbS6ergLAYgUV11b8vs62ucgMdPCEmvgetBmKWTq7fgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cXd7D9w961g1696ThG2jGRXd861UGDijyfsu5NJPKPXN8k8ZhvxwbrA9JNctHFm7EovdTTXvuiqNbKi8sQhXtqn",
  "key1": "3UBSp2BPobewLohpaqZFq8idSrk4ydnqUgCGHGuvEL1zM1F9F8cBWJA2rhHqFKZrAMMUjiNCJUCPNk6UDt3WJzGj",
  "key2": "Vyk3aix3PNz8VejTyLzAuqKMK4Fh5mUMvVVKHtmDjgJfRdFTbJNDwPriJEh4mprXwQzbxXUwLoinZNBK2p4KJ1j",
  "key3": "5wi5akKQxZcaAenm4qJvLQu8nGW7a3n2KxkXXwkydVWgVVtCBGyyW4YvYBDp3E8VhQeUjpuFM2gWnyj5M6BVZedg",
  "key4": "B5Rwgptdg32PDto2h3uZUmsNdixmW1dyhhU6JV7G33no3wdJCGikyQboUuLcWYBEWJKXPwYvekpaZSNrFFUW9s5",
  "key5": "jH4NzQ26RKVUmz8eetPzjdN7XUqdR3gGir1oUxHYhzdz6bXqaivvj3Ca7bvzQmPEhyKuDcixEHtFRwooCfoKwNQ",
  "key6": "3g35ZsunCysGhfcKCYUU7ZuZkEXD3YFMDKUqTSGKQ1SDkHZ27GHNcrfnVFzvfHoTXvKZYyjtx4bjVzoveYoHMckm",
  "key7": "2jyURM6NXpaKMaoc1Qe8H34MjBhk2hXXGaYyBFQ54Xomt1VK7uy7cSxeUF9eVWXjAsxmHfPYsoGX8e9cNhXfZBGv",
  "key8": "2j1AQEaE2D6vF3dFyBWXJ89tCJpf9yy46MSPEipM1H4SrhGtnFfCQBsHeFysuDCVAX8HaH4Mfhox6Bztv2vFcypF",
  "key9": "3CeyY482JuZDo2mPeHecmdQMj9o42dYmJtQ64fvKiB6MjwQmsn1t5zNLEZSsPGpLqc8BsNTzYkppx4y2MantLie2",
  "key10": "5EktY9x9ZxUo3Swo58GWYHYE1t1NXxUYYHZmWEjoajE5hHVR8NFGJwjKiVyyZZrJ3kCy6f2DjcWBZXePZuuWeTpf",
  "key11": "48ZuGtGQx9oRbigcLzePM3PGZ5rc8j51gtNfPrXcoJMq16KJgfU7zv4serFneNNVotoTR5XZDhvcv3ixysTuS37J",
  "key12": "5EiNJThNLcaRpaPMUxPyWTKKrR1Jn7hCG8txU8tjGybj2CJihbBJFSpsdLsCPXBR6AEppJsGPMbkMxzZaGx13bp2",
  "key13": "2zrLeGTGD4ujPrXykyZKQgEHDkq7fdnFUWtX62noWGycuhfLEURJwZaCvox4M4t98r72RnHymVvSSxMfMX3YeQFd",
  "key14": "XELLdPSqz6uJWRXey9vTU3N983sF95PVQLCunjCtLTdJVtUghYVzaNe8ovdDbhhBGuAz9vcQHhN2sCBeeRHdoNY",
  "key15": "2X8Pt8aY3Xpi7GiiK2GKE3ghwY4V9jSAtkWY5eRae1GtjHHffEU5Ym6ycDC32m8JAcTzxjEE7eEcfmhB9Rir4Zzz",
  "key16": "3VYjmpNcqmWGbDsHWMo7ShRSAWHm8G2C9uE4EjxhziLTbX83u5ByA4mKt46c9SzU5Q2MHsuz7q9Fb7pXZcXtj9S6",
  "key17": "56w6p1w99hQL6dtUPvoHpRN686VAs4aVV9HqSg5xWXNZdPrBZ7SRpi6zxLVyeobedC1GWCNXWtafg7gLdCF1xR2U",
  "key18": "dqJTqWVecVqFhnBJU421A4rN94A8Shsc9go19SzkwdZKY8a1cNqo9F6TAjYy55opg2QCzoHiMLADj6ioxpjjsY6",
  "key19": "313x2mpDqWVUNfBR18NswMyADzqVrSkgk2QkSuBYCCZxovxbEabidsxG1qmpCdcwV7zenkWpeDtQ7E1bhQAFmPn1",
  "key20": "5VHS4YQVbeJjMTrgVb3Tuubqrw6MgP5PwkuB6vXR3quW4UTVvX41aaeU7qKcwJCu1LnVAvwooTeLCt4fGds8pe5A",
  "key21": "4B7XkyFWXqKUm8GdG5MmMtqMMAAN7uW4AAttSoB4du2SNFUv166Ya9vjwZ1A2bpNaQbm8RMKhcbiQ1mivFjWSi1H",
  "key22": "3eKPpG2i3eNjVjXA2jFv7fAvuQShpqfUHgWS6GWAxnq2cwH2KZsBw9JvJd1EpAQhwVLJM826BEoHnYth3jVjs8di",
  "key23": "3fwHShgLiKydN5cpP4eE1r5i6mvxXZBGxCkiBNcm4wv3SLDhNNySpRB6M4YV8xwmLRq6mLgR5fP9bWZGbMD3ofPh",
  "key24": "D3vLUAzoLRsTyfw58eFgXnu1vQJhr3CXKVdBnuyTrcTUA8TGq1v3SnB7W2jzQANJ4cCA2DDBR8n6LBKPLgza85e",
  "key25": "65v9uTW9E1CHByJiDDBd3ggDoArS6AKucGtrGuY8sEs5YNL2oJ831wohPeubhZwsL5ut143E9n8Eo3h81ydQCKsJ",
  "key26": "3UDMNZqK1hJ8nEoyh24S45nGQbj4KBrV2qNuJa18vLHqCph26JKqYZKZFTf75oqnVPQQ5yUZiQPfVmDMnvcGn4pm",
  "key27": "45TZRDwSowdJKnjnfSASPxSS2iUEEehTr1ZePdgsBN3xhft9wguWTcvJj3N24ms5rAjkPRKVHcEvfm2Lg3zueZKX",
  "key28": "3tw9fpxV6bMcUqJuKvFa8CKu4dxjXX6wxff4wBjx1v84h76qnPpUTAgoas9kWjxd64WR8xasfGbYiA7wVVxZ3ZJ8",
  "key29": "3EuAh9JsHFpS6uRYeBbx1daW9jdcrALr3fx1Z2UkmX6vARXMZtA21LURMqWiHygZJNC1F4Ua7UfXq5bRXBrdQp6E",
  "key30": "3hCdJZhLNDQzTXxU8VsPCoRUJysRbM9Mh9bao48qM7ci75Wd9b3nSAkTg3uLi19fjKynVB4skGuNSYL1gHwUw2Xk",
  "key31": "3rR13RKK9hXVo26NK95q8hXn3nYAfDhGiuo3bkErgphvgGBfkpTCyHTnbCpnB2xsJo5t2dDFdfnefdg9UtYboaU3",
  "key32": "415qzioM1H9mCaB4Faqf3UJU9ton4iWzj5wrptb4PrkM57B7eYAkRquV9dq5maCoBdUwbv4USa5uUCoeLzdGMrka",
  "key33": "5wJtHLMDgy9QTTn4qwrZSPMCBSQraA7WogLDueM19sPi5eBRFNeijFCSBAvWxcHrnti4qnrgKHQj2uwsJZSwV7MF",
  "key34": "3DFs1J1ivgrYEWc1oV5JVdnkHbUqm2jktVy791y7mQteCqE5BUzCfNUYPtb28JMHP2hqiKPAvLnRYAcQG9YfdDUR",
  "key35": "3q95EsbazPne8DLkjtK8dzusbFhgw3UgWr6EsC9vWuH8xrdyquGqYvb2LSKRpoY3EaSwmfJk2wjJBhEXJu9xBEar"
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
