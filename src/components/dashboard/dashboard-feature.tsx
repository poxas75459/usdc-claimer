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
    "2Rcx6Z2bt9kTCwcZfNKXxD2n4x3QoT9Zh8Rys8QGhjSp5hFcoajyJaUwjM64dUVKS5dcPPtPK39wMFuZZbevtmrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ceqaHJXvqFmNVvi11nahBUpB7tzwZtJevtFNvaMCqAbxL58R2uq5jo9xPMzYZUB6JRvJWt8eJQr8dBCKgBkb4bu",
  "key1": "pdE9KTAofGPu99bwMmo1STqCsmoEWDydUisoyEYwLkrxLHXubAkcWPQ9gn642sz6nARL7fXxvpUfcMu3KEStPZd",
  "key2": "32DZ4ckCx3aLxDM3LSitSsi6ho12ZsR5WmUQbxSkThjrA3LLCGbqbR2z2sQvkrAgNxXKvs2gWPvJkyPzu3wdMnUU",
  "key3": "3FyshmCrnwaiRJTdELDgrcc96spJSfWanKdZBTj16oQcsB9PwSkf4agxtyei8PtP7eJJNG55imo7MW9KQhVpNtP2",
  "key4": "HXG3mYfrWGvt9CmzPnwYzgWUAVfwiU9NrbG6PyJppU8kpU1JupNHLZYxA7uxSqiRs9T55ABUk2sdsUVmLgxkpQB",
  "key5": "52ChD4DaFB3kGGWJTqGKpZqtNfbFqjtXVhZ6vMxc5Q8YjzT8x4sczcxVG6BzCfmjRZKz3H2A5HXMqQgnTYE58LhK",
  "key6": "4zJ9NqJo6nkdxbZbhk7Nj319BG1wpDZXyQFvsuf5QDfM1GyxfBKuSxMALsV9DBAbViejctGU1v4NsVavjTABdYZW",
  "key7": "3QUL5jtCHA8CYpBWBw4AMCXkDrK8aTtV9gXECoJtpHiix1NMjJmdG1RwZ31UCZcAfEdato9G14ASRiknWVQmUcu6",
  "key8": "3yJexhUjBcvLTyvVwdVfXoy3TvPSbSbL8LEzJK32gNNBogUSR5YQXNjhk1e3KDtwWtSMTSHhxfCXbAFMUwpkou6t",
  "key9": "4b6vH7EdKzQuRZm818tGhoBbqpXietnVjDAzqh4DyrnH4bfDZxFJvymN7HoyYBLV6L4fWbsGhZacDbyffQafASMv",
  "key10": "4Y9hiah7wNmL7qNkZYEhhTSX92AFFQEZc399BtmyBbtmUMrC2yzWUerFauTANFhrxSK6Qf6yhdWwjfnQZYRe2EsB",
  "key11": "UXHhPdMHntSoKQ6tMuVPw3oPcgwEpxfjU6jVhEsSXHBB4BEZsvkwdRKyZAo5iNiyQBneHwvDTFCw2RQtJEGzVFr",
  "key12": "5DtoK5dMNjgy7asQjvnSf5vsGYPNFRvm15VrZJDtvijmnNp4G8pyPifoMQwx9DwVJS46mkdXGk2oBmTaG6NXzjEB",
  "key13": "43xUzkFnjEw1qgswFzD8dGXdH8jVybgdZHgGZdjAKC8CXFfQTM8rJxNxptRFW2p2oZTSdLGqJCV1q1KtUK2ESpDt",
  "key14": "31y2pLetnqLhXzQZD2JocNvf9GtNR5kF1NENAujXfxArvSLsSH18uKVFwNPRhSG6R7ncecQr8N7MberxnEa6MVTp",
  "key15": "4h4un9og2svjmDNM27CPWn855r2N2WDSbZZiz6xwxu4MwbKfog4UVxLrfVgnSDHT1JGRUfnrFVCW3Qhofgx8bWFn",
  "key16": "G4tV71bg8BLE8Z9ZTRxH59hqAygL3Dy4VTYJUGcmiJmWP45NAFWMm7RctwWs2i67LtetdUXZ5DwLNH8pySxkjsY",
  "key17": "562GBNTopCGihRVKegTMq8ow8552YUYGWVDYwyxTgu1HQ11CJhKGgKyzSwqryNzgbjTd78RYCdkX78jtaxGA7vTs",
  "key18": "34LjxUBXZfYjntQFcXZGPjpkKd842c3uTQgD6QTNe8mnza34982y8NG85V3wG1Q6TwBWduVmXgWp4pQ41yXSKCWU",
  "key19": "cvQxwNVwMk29zFRW6nZRs6YQ3nJMsxbshZHxyjLxoz3nWkyGrzy1xi3Z6Wn7FkUuCQJx4Q5hYjwumqCE1EMh3Pi",
  "key20": "2wZmSBkA1sAjMjERtoiD9sb7dyXU6eaCrLr8WER1duAfHjGuDi5Z7PaQfQkBMNKqDjytpcY32ZYDZW1EstRZk6Yq",
  "key21": "26yUSJXcxAQPnGcLzLGqcdXcigwD9mddDVHmB4K96X8wvaAawC3ehWE2TThXSfv3DXJuWKWuR3FuE9ngEVAXzxee",
  "key22": "62YhAkjKzwkRW6HEt5r25C74CMS5bfYyduwBULt9D5zxVqanhoYe1RUboM297SEChJhTH5wRsxswBk48c6LFxK3V",
  "key23": "2PtsRLnjNwyCDFSghB2YJFiT8vWkunvmL7LP3QP7oFVm9Nc19WF8bjNQ1paUaEoVAK21MC1nQQ7tVLj4N9DYYyoM",
  "key24": "5W6QeTcDCPUFeGaoQL4irw9T95UEzYdqa721bBh28VNp5jLCRbAKAkghzAwHFmCWfbu19k4KRbfSXm9BDNc4iYgi",
  "key25": "2aqDSyHv3EfR8Bw4pofqLfZ92GRQfJDfZmYFyWJnbWLhXu4jcRkpazBziPe6chn5CkJUM363kQdWyThKVXGk1N11",
  "key26": "KQD9Ye1NDMvE8Sy7LyTUiEcYyWmZRpmG1Ys9XtUkAtoCDbg4b31tM7tYVdJrkW61B8nkFobDLppmmaaPMXZmmEq",
  "key27": "5qeRTVJ9LzAp6W9JnU98KNoPFZdaVX2PosAVxgWpijEBZKodc2d1G6biooG2fuWMmLNBbmG7W9faz5srDxXPNA6E",
  "key28": "3vbaf3g4VYM9Pqzt3jGD9yYQqJbNj8izPNXczjwQixGf4zEuyEg5o9cEmJXUCn4ocjVtJtUjgmQ3BmhKYb8QDMKZ",
  "key29": "9kUz9jaajkpBRuN6xkBHMXCwcJQ4hGv65eH55W9bA3vqhBrywQkjbrpKjEhHS66EJhedoJ8TooUpaekTvRrB3nm",
  "key30": "2WiGyVzNiBtA6Ww6TJb7P3cF4nfUXUdBRTAeuGYFhk4NbisWkAR6ykrdYF8dGSBccj9SFzN2WyZpTKvgmar8JwAi",
  "key31": "JKXQ9LmyMh5P1Fquo11X4emmU8UX1fRhT2nQ9pV411sw5y2dyCz4Fst1SRwANTZ2ZVxMDLkVkHKSk8o8T6ag6Y6",
  "key32": "2SmcJYqZN3GjE6uYEtM9B6MrXDeQtpwu4QqU4jUdX343vNyHFUNR2UkYTUT6zwLqBTtP9CRwvHrxJzJETX77AsJ6",
  "key33": "3eWKaWMx6APSt2WTsZsg2vgTQjjfNQUYV5s7LnUZ2Aa4ttyAwUNMoPVcdgE7RQ3FdYjZR4T7AhhP4cDvUZxfJccg"
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
