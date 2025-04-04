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
    "2VwaVF6NZynw7ioNFh6kGYeDGwDLSieAScWmSkaWKYnGLqAJCzmn42e3p3AZu92tDrR4PDeFFMJpAY9agDQcuR2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zaccjiURXNKJgc6wSTesMb2ExjERt4fKVMoeQdL87c8MhDojCWZVzzUmRUk1giHjKTN5uxuEjUmZYwzgbCpT3Jq",
  "key1": "THsCbFMTrSvX9iLSQ4KkQGkrB7xfjpAhcxfNhTn4cVUgSoDrpDuyc1Cx6LV1UwkTjhAePn3tvahEvitu7qFDXHS",
  "key2": "5ua8Zisd97swuySjgFnHZzdjv3VHMx44SdQDAr7gonJiDfBgwV4dU61qNn4iY6Na6mkJDpCiXCQJ9TJvXs5JUC5f",
  "key3": "2nCmoaDGLWMcr3wb7R5d1Gd77XFoPwyf4jW7DG2gg7WsadJGiWyQSpYD9nY8E9GqLaprEnR7X1EbTkLft4Nu8LaR",
  "key4": "5rtGeE5pqkkhrbPajCzTYtDhBhNmXYxDQ3UzQquDKo9J6MbUP5whqiAnh7vbAroexxaUzCwZLnXUDCYArJSAHLM3",
  "key5": "43TxvcUx9weSrt1Y72sMa9vNp6WrskyRrUfYAMCcvMELabyA2xgtcF2indViJBg2X9E3gtxqzX7jvgkG6s7QUg28",
  "key6": "5W2iq6H6SVnysUonwP4puyNyBre7TfxbdXXkxZzpj9jqnT2FoQ7ZkYcYqAyHWqmXSpDGSfJP7zxmVEb6ecXdRQNq",
  "key7": "3cHg7xrJNSUCcKEoGwJjUsQCz1e2MFMFn4Xg8sQuk9Z5sVwKmmUr6rxP866NMF11ELAZjEXHsfh5ENCVdrgcyanQ",
  "key8": "r6LcEnaMiDNedPoVgSNA4ca7Y4sgdmwiX814kn2y3pF2EXJMbHqGi12qKWgUCB6FPZZcjVchF7jQKqQPSDeWDZo",
  "key9": "4qbicfb1tgmpwjAVMzipzXYcFQbyCWC9timT7SDQj65uMRSck3t2Mbhac5rQwD9ZPmLVP6mcVnJNJqwsw8Poqgm9",
  "key10": "3fnNgxsiVMzQWM1Ucd3LU6GfcC9WNXrZ9vpKpbAnFScqY4uBcqZgaRnGc9afeKeXrCTz5pYipPCaMmM5AfkRh31R",
  "key11": "66RA6WVEZaGaap7PFfM7w5NBqXpuk3hGg9BE9bd1ZEtpvDFFykyGm3ffWktp3Wj5dXeEDjnSdL77HdHCWs5XBLVX",
  "key12": "2zrt1ytS4PE7a2Giki3NebWGjvySMSVQypTZvJ5AJPyCuYKdWbsUJCMt4tLtmFW9TG2kEdD9th9P3mrWHQ88h9im",
  "key13": "2xVX6ykRmKvwkrUV9F3W7imJE4vDBx3zk8n8vRmpbUhK5CHYdxYz4uMoT8Z6b8eQAWjH7hUPjwgLPwwppogfYjSG",
  "key14": "4a2CLtnBrtyiYUwBcBmU52DJWF79DgRXMk1uRokybSbUMuzh3XkRoNhq9C1KMawHdN1W93eLukfDJGABBAkf8hWs",
  "key15": "57fyRAGqYxnsMtb3mi6qFmpZv3F2XP3WT44b1PrXV4xLMjaTuBZzdNpzqbjKzx1rPaKSSntXpBcYX8CQYbJg7DwT",
  "key16": "63VWmATbA2XteUbLXgQW8pyrdmTDcnNsd4DsLTpeL56JK9dYMH68Z4AQhtpQ6QN3BwUN8bRarh8DnqfvAsCdGXPS",
  "key17": "3dXPRBUsSXwYfNHAQgEwBCCxtVfczupftskSv1aHfdGx4ka3jAQ9fPFRnRRqcRirArRXHi7FSGJKVhtmkLeUPxQT",
  "key18": "2LDKFZW7WXyDnfuxfoRPWqueY1arq9EtFXMrj2AfKYSgTSZ6ZykdvwUHzsK9dPvRpziN9rsGFV5oHKAURSzjHHNh",
  "key19": "3PTQudKHjwbNURspLtLvPoZSMch6uJEujrXaXQt2vEJ3zcUvsxBvRzw6mYbiqMoAcDnWLYrvrSKtqENZmPtG5iep",
  "key20": "42sWSxfcMFKT8CsdqSSdmJXL5JsmtD4kX6DYwAFQVqotZepDFbhyJXTtKigpajL8NnhGDFjMLzmHqxRoP9manpKd",
  "key21": "1GAST6nVLr3nQ3LSScdoxfoasLym5vxXzYvRu453wijPF2vxfVRCvFNijWgn6FYeQwXBMaoHBW4HACK9N6GRNAn",
  "key22": "47qbVdtnnXd9qnLYH4JYF2AFJgYHqKTNbPFFkriWwVVtFyRCe8DmfczeKRHbDHJHFcpvg2rZRSDyEisxT5fxJYJV",
  "key23": "3Ly5BowW7pGFSPkDWz983fvbWB9PpER3vrAQcR3RjVfy3Qemt34GHZzqGHfaGkuezEgYd6KEB7CQCUKHzQvFW3RA",
  "key24": "49gPynNsYKjVrQsvTknGhYeTY9wKHf9jEceTLjV6sy87SwVKZKBLQau9bqPs7rnaWuzj3k9reABZsPuYBnTAAzBM",
  "key25": "42jckpTVVaHZQioFBPCXGkbvdrE1BLidLZj9a7mCVEzS5FiLdWuG8gbCm8TS9NStY5YrbZi6B17RCrTHF4YN9isi",
  "key26": "2JJ8aPcaMrgLMNRFktiybxDgmiLrFs2CZpucjJwhimfMHAfR5BXkhWopYRhHbzZ7wosgKxe3n8gxt2wsV3ypiNnn",
  "key27": "3DCUjmSbBncSbuAEn4LVj5Tuy7rTFUMv3c6L2hEmqYEaKz4XVJw4uFSebJGKgXMGxnG5pDcdwCKWm53VBMFn8wEj",
  "key28": "5khhdt4ZvLWWwqsim8S68LriwmKYFesVhDbTKfsvzRLHuXu8UJUuHfLqNrroJkmmc36kpRVVFzTDrQUjoeRib9Yn",
  "key29": "k2zkhkTNXktGhyM8tbjVAkX5hXfVqNnmvDnuJvFVsYQMHksMDMnamsJfr18i3papmm92FnYuvB1XdGAYn5Xz7h5",
  "key30": "4Zrt9TJuKDBLLVzb9AHscnsBX1nDheajZ59jkdQ5wqDwSrmvY2pY4kceX7dwab5iihPgSo1k7prqAUYweVXfBd5z",
  "key31": "fRfEAh53MjNndqGJhbEkjRC64GWjBQbKb6Si9LcF97TE39PUtAxEota4Ct1qST74WbKF54ra8qifoydN8mDHrJL",
  "key32": "3VUzvoS7ZE8mGz4qew9V9fB3btY5sn2ofvkpkRvXZ1mFGzW45kGxVr87xfK2mxe9QvTTJa9rV5xvdt8Pz6kr9Rit"
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
