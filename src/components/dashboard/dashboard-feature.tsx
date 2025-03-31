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
    "SPEwnA4oRkiF12jac8qirMRzRGxNMiNT8XpSAqohqG8eDHAS4uT9Ksy5pbpiuuqG8d7a43dNMt2updXNBCDgsRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NhkcrUbdsukc81n3WtkNEAdfF9fZmbcxRfiUxyEPqLb9RPQ25pxPf41526jcGgm1Wc5roiUqAXamofcGxdvxjA7",
  "key1": "4hAZyErP3FSzzCKP6Wt8ZNomc5CbfPz2agiLvDG1Bp6Qrx8RfPuy9zX3Hiccj6a7FYnAsMx7dVDkNxeYpjMShBMx",
  "key2": "5PLvaGKRaRwDtuKKBDvNsKtc8kiuxeFHRWQqtjyLwXr1SQKwSq8ayG4Maq8Uw2EGi7YZMXHNnUFoxkAvYWvUh4XA",
  "key3": "3miXJCTUrc5DJdFak8W8pJe3cE7W9Fin5wbbUFUNKVGg189JVaUL91RaSPZ8aRF1YJWYbAWwmaf4CBMZ2Ez8KKmd",
  "key4": "4Dug9K63q5JArix8LSZQ9MxowpWXJEz2hpP51E1QFJfWHcQK7a7HJVQgtdupSBb32jX9dy4UCE3XZDzRRis9R2Hu",
  "key5": "4GEPq2WvtqrqvH5jUNRcKc5VeZKpcnFfkU4WdfSKjhKrBnb26xmCXfZm48DmppMq4VJvsfxhmjonth7nmuKtqpNM",
  "key6": "5FmJ6yNUScg8Ns1HrPVv2CUPnYXuhWEqm1cyxAXT6Y8PWvX188FeUh5cZfRMpyCXNBbG4tCm2akxPNkoJkztHhGK",
  "key7": "49hwNevEA6ovGL2CY4rshHzW58HiXwVAKAL6iqo3m9ksgu8V9W7ur4397RKVoWQ3nkCm5H3VefywRpivGeUB4fXJ",
  "key8": "5oriq3qq7iYQB9QasnTnAvyfFDLXMBcAhJWdKaUdiTZFznDaKcjrL9tdeLETHG8pj9SZ3H5RoZ8bozK5sBvA5xCf",
  "key9": "4V9Fmfo9r4MBd1Dmuuj3As5U6vrD9wB4y64dQwNtpXA6qoz15HsMi9UhrfJq39EYFRBqMhyuaanhRDUh3iDVLucf",
  "key10": "5fWfkCq4VVD4uVNHB21RMVMhZF6iL3xQ9A9JbZ52D155YmCFsFjFP5SwDPQFZDP4qyvVbXiQh1ZrixdYEfHe4Lj",
  "key11": "2NagysoCzGQuZwydrATrbtQgQ6GNmW9aicCPt2Ggg9iyh246wzRWpYCU8DwpFJhLv4mwmgviAHcTNfUuvaNo2emT",
  "key12": "2mXTXnRLn7Ziw5Sc5VzQX58CX8CamTsPk5Mgq8orhzNhCpRDyFM9riSptin6hfjtDhJ9Wacz2Cv5qjgxiFSWD6CU",
  "key13": "4GdKA3VeJS9nQ4DsDagngKCJHabmwoD1jGXU56hZ6YsVxJDG87eoh87GZgYG3sFAZ8vJa1HrZ5TaSDAzgmmJijuY",
  "key14": "JaFcTfa2WjQLahUebJ8SerC3yAcRBgHrcsnJ6WuBoC6an9VJKtxPG8eFp7mBkG2ZWPwW9ubTPpPZG8HDQtXVqnH",
  "key15": "5Rsf5mk1u5Tz2RTaWanNyJykvWvWnUKZuki6scMDdnVghnbKf12c1C4di61vchy4n7WD6KpVTyHdadJLz4PJNkPx",
  "key16": "29L21YvNxCtwS2ZfXa9f4sUGXYMYxkm6gcXPdECQiJwJEhqH73Mgzjf1MuNTCoTRQhyQkf2mKK3DAPoqT3BiG8xZ",
  "key17": "34115v4d2WscmkciWTxk94zMkWaWQLSGcik4Ujbg81BRV8tss7nbha8ZKULUCqTqSVeaBk8ShyyvJcjZknHdApFJ",
  "key18": "51sS2HifFPjTmmnJZE6XGN5iA3qQZUhvnEhJ6qQNn3qpkUGisdSRJ5UHYhxEWhfZBdKJftTphcmsNBQrxPKCJoy2",
  "key19": "2DmWaCvqGzXXQEgkqLZjAsirs77wRquqTWkSEd1AQooAD6FkojU2MNKNACoRYc6cCk43t9oWBzqvUrZuERAYThN6",
  "key20": "2yzWKsZ2cDvTZ4qhiGfbHRazKBqoPeV8yMRNLaiSTHtgHy9XMouTHkCuNDGM4wcUMvCVuxVPaXSrBX1nbihCBMhU",
  "key21": "44vPhZGWQ5JYvT1YKEQNqGpyTces1s8KyCoqTV4J6SwL354fJtJjvg1EweYChXHpNNdcVHRXo4j6C3Kr1Ln8X9DH",
  "key22": "3kpZhPJjWEVxyYngtepfseoVSJPnNxAvH8BNDoUE8QD6LW1HwGatrRZbjHAnygX9jWVsmW7nBF91chGX33SCoEFY",
  "key23": "4zRmLy2NgzouBBA2X8NWwi5oWuMbVNgSNswPWvj1zCWYdn5fZBBq2woAquChv4n4eNRsmydu7N4TAgCiiFwY2xYM",
  "key24": "5SLrzxpbz6TY9H68S6LXDpY5FKiz3ESJkMGfwWyJHZqUq9BHy4zYaAzdN3xyjPxPSBbBDc6T61mm4AREK1eH3ycD",
  "key25": "5T8L1xZwVSgW2XkDZmhXCk5zMPnpsTp59ExykqWVgADd7qFYwDKaopCLRpm1g75dKswS2vd8r51oaaetwjAxYhp2",
  "key26": "4HcoqaXC8UHk3eEZDYcqVDmKf8fd7Ab6LW1fZ8mxig8rQfiDAXe97YL5ckb3W9AhWymCgMVKurKMZ4MJ3H38rzjz",
  "key27": "48ybUgJ5AP2Z9hW6bktf7FDR76LCaMzEJD7mYkGEyeQCB1LuX8shS7fEFpEkxxhzy1qdHSgo17fF7QhjYJ18sFVW",
  "key28": "RwEUYewphTVhTZGetgvhMLTD4pW1NwBNnNrP1fzzXyARCnKbpMH8W3NTJKxpi4NthaDq2xfPVxt23eBkCvXSk6e",
  "key29": "2c2guhgY9RpxvbkiwsQKQPTrV4JZFaNg9vCGaTRSLubGvLk3omwpMW7d4zHF4kwGgi8wkYJuoQqZxB1gTThQoaSY",
  "key30": "5U8vMrP4b79gnUa8giS2vFC6wnr3yx3ej85K18e5PxqC3MrmBdHGkMNdJhQPm3Jyuc6RQUkHntovPjzi3huqECXj",
  "key31": "2RPJxvVQFA14xMUpZ7sRCd8U56k87HATSHpAL5D9HRefGUVBoAJRHNYW35pFm8SCadCaHqZcVf69CqiCrSaJhCog",
  "key32": "2mGP7gUH9jFzcJPZbzRTwH6YP4qjd5ERNBhV5jCfxoJRb6MtzbvMeggH9hKh61ENTVYKNeJQhMnEA12bxPQmkxL3",
  "key33": "gJbSBLfboALXPMpcMiSJdgWk5tdS1GmbEv4JiYS5EGcRsjExZabaNKQhxaHdhUSMKS7Z1DL4N7YuSkWRz4Q283W",
  "key34": "3K1AoBQwfPgDyTWvF3wiat4W7BpqaZdfPJeKxUZhPNvBrzqyNF4Y9cQvF6BoDL8TjX9VzT4gr4H7uQQ4JKeRTTM4",
  "key35": "JacdbMBoNtoqiWoLbnsCrnpW2xY8ZwWejovZyFrTNYTvbwQD2iRzFdwiNq6GkKBd751zjBWxz36GuDztZBgU2ds",
  "key36": "2XNeevPU7QSC8rres6FeMw9bJD5kkwNNzCrYxupESv7C1AXBgPkzcb4gUsHBhsqYDY1axrvzTzXTk74WLLURgeE6",
  "key37": "ecLdGEYLNxo3cgDLf1WJUvo7sRPxpzKURfAHwjkM3d72V7doHwNUdxyhcM1mWRArsxpa5wrW4hqTsyTPS2J7Fb4",
  "key38": "TWAfyJ27h8jmRtaWXfNfHf8JEE5kQMRGpGTXZkBEJUBJECMajkJtGhpx27bmrq36Fa2QdmNJCrwX9LNrrNDatZf",
  "key39": "3HzTKg8yRz6vFp8uvNks6o2MguRfnfjr2DUZftmobXPaCDD98a2wET3zkVyzNwQmueZStQeyMZHufULGwpLMYcw9",
  "key40": "4Z1L7Tu5USjMDNUraWieYcR3WjVjJrSLCjdYEibCkBkvevKSfcxvSV1rfeMeWQNnxE8vNVjJ2VUbqa6TWcS3m8KJ"
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
