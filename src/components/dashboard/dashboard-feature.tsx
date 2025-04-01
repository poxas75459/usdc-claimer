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
    "K2BEug6mGPFEr9kjdebE42pnaSWeQxtyFPXjYfK49TUzDd7nRSntTWMdvTS5BEAUiRUP26kP9ME9Nkdu9R1PsMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wEN4dnZRAwP5qJtAaU77oFgQkMSvxcjNHdmu6WbEZE5Vx3371T4g66SZR55B36GiJBHZSk3Y6qgf4EuYbWKef51",
  "key1": "5nPnEweE5i7bYGeRMwY1Rt8aMaKeZ26JuZsyCWTXkJoNd6wCXvrp6u3Rv4mJmLex1qhiw7UAhkDuKXs1pdDUufwQ",
  "key2": "2hire5WWr67p86mHph5q4Z9UuYYQruRLQ6KqjFxju1cpimRbLw2oVQfC1YHVPjRXZAgpP5dVg48bgoY7ozHbp4Qk",
  "key3": "4KKn4Z4oDqm1LZbNj4PfVQT17jvr9z12LewmrCyncjZUDzXaq5D9pDYkgwqCnWrFf1wxJxyFqc7jiGk3VE7qPKgo",
  "key4": "5Zz8RAPCvnXPBrNa6yg3RbhBnMMAYuBnSbJdSpHSYULNqPkd6tewoTEAVn8mHwhKa4o1ufsyAb8aXnCvu3rDUEav",
  "key5": "yoF1RppKugUD4HMz61S3Ng5SKon8cGGTbPjHGSJWuiaPM65EB38ZVie7b3FHFdRsg5BKkyQZwkSSMCiNjyw6PFj",
  "key6": "3CBsowrKJsKdndUiAzopCD4q7c5fjHda7Z11o57r9tPf2nGRR7KfVLALDvUGipbHdAYgf9nAdQaWQbL4QtUQz1w6",
  "key7": "4GtsQ8h16gPNAZkpdztk9VC8Fyhbz4WrQm18Fsz1NKLKWCDBAA8Sk5sye5p17fVqYu94J8nFGcMphktdHnegZHHG",
  "key8": "YzojuwgUAfJPmvD2YGkJP8SQgBePkxFMr35sGc42YYRbEpnxtMsuTWUPgp2PnySGTWAvSnz9w22fVmCGcPESEjt",
  "key9": "h4qpUvgJaoc1doCLxVdF5UZjhdeZQ8FpQwJQXFSRmTtQdmU5nHVMbXJ5Ze13qdWH6L6PV8LdCKavVxfktC6wCKK",
  "key10": "4UA763hWVa235DocEkFajRMBsSYtrGo2kF7Qfz5dHJqk29RaGhJpTf3wBBkpV18eJkeodeNaEDkbLtzoPHbnzYcJ",
  "key11": "3bX1ADFvpLtJVDWhH3VAkg7T7hSs6PtZS7wir6HxH4FA3C38n3a767fySncrMnYRv6uKK9L1EZLww8PKP1A8rnb6",
  "key12": "eVncYNEKBUXHRXtMXKGzBencvBTSPrccRntsmWNwosQrxoXXtCnYRhEeroKp6kzhHydLeddHaoxWcp2uCmi8azP",
  "key13": "489yjJQJRUJ4jFBnfxQreFzwNKMZrZ7aVs75ZrU4yk75pzKHz6jsmMzqr9UDncRRd4pnuH9WV3G14myxSW5V7NA3",
  "key14": "DKz1hVoBovmRn3KrriRfsShxEVuUiiG39evLYd6Jvh31CK5MEq9cPi7V3eZAJ8cGxa55zNd49MsM5c591V7W3no",
  "key15": "QGFwqufoBRbx9HbYHSvVaha19JRiyfqDMbZxSUZXvoKGnZBuUj6ZG41BT34dyX7invev7CftGxWzX2emsrBCU1W",
  "key16": "59uyhnWwVuCAduHd9WFzA4tUrZjedbU3MeMz8QNkkkyKu6FU6DupxSgrZ1zWV7hKa92EYHCNZB9onsHooKJDW8WP",
  "key17": "3Lmp7W2bUxgn3RNzNaMiGZJ35iddqcUXUvpnr5knWEwupQfZQhfWQNvGobyk8WxXS8o8ikhWNZPNKafaoK572GS",
  "key18": "WdyxDU55AmSqSpvvhAYXnFCjrYFcC8y1ZeD1W8MgCc2YWa6rHmyLxVzxUfQRqCkgdCE6GDFEs4y8n2rPGBCMgkr",
  "key19": "9LWT7b86AXV42pkUK23XEpJGuFaAYAYJ2fxmoemA2eGSzhBG9e1f9dnQmKsf172Sbem5X74t7ey8SqCk2Fw5Lmc",
  "key20": "BnP9noXViCRdDYe7Y1jjnBNyPVq3Fm27QXnSTepsKKJhF9RNiqyDh35h5PSXrUyA3VSHSjWovZUMesnaBzYBcPF",
  "key21": "gchJEBcmSUktspAMo2eUepzypFkaZxWK1z5BQ5YWWzk8zutFxA7qCDriL7cdErwgXVFjrFuEDZ5xBZoASAtG2xd",
  "key22": "4T2xLyhxaAJW84EXfzHi2ypU5fPgHtKeP5LSHyq9Z6tYV9JhVf7pAh1qTxeHKsy8iZbqAwkhwTdCuDPkMENgE66d",
  "key23": "2mKCMfNxbspewguE4SGJJeSPQ8NAZpuzUkSTY116KQJBtS1YBGA4atnJy3PnDusXT3BrtgEHt76Lhys9xCohCj5Q",
  "key24": "4iNZJwpwEPFrmgUBURVs2siojNY8DFCKPNzbxLeQhAk4G8hTYmjZEURFFcVcSdFi9UBRaGzS4SA6FoLKoeLyAEHk",
  "key25": "eXqApHB4W2pVGKDkontyBjAdyHuTJtAXTi1N36t1KEaxC6GXYKZr1VVqb8Czg7D7TiQt5ZP5ReDFymm2efHEtQT",
  "key26": "3Uz6dG69FuwEhXGxdZJeG8jeDs3fgXZj5HdUX5AtfMjfvSjeaBggdNxw51Lv9ibGs1TYFrZAkdpmRyyzvPEnjbVh",
  "key27": "3vezJeGejcKSiws5fbsYhM5baXcFAfNDD9i8jDjvZQHE3Tc3a19qifbjGmsmeHZkEWSKKoKnECw4cJoXCm52hb1B",
  "key28": "2GeNNQL4UxJPXF8stmxCj5JAg4tFvdSwsqW2KGdYNN1Wo4f6bGEbiEUg24pBPAxqW1wgofDaptYssgBjEvvC4SNS",
  "key29": "4VVaG2t1PsrcQsZjiDBFeowDd61aciokWVSRFD2BL4pqnEQx5iwcCzqMTRRQChQkJKrApFNexYTkf4so1NJcP9EQ",
  "key30": "5CkUsCXmaPPYVd3eJ9eJk2YT8z3xPMviosCZmphQDh7a3ZNWZDcSpy4rsbqVo5cDWrJV1aDHmrWKt8tN3upRY5LJ",
  "key31": "4GVUd9wXwQNenbB9qrTGUoMUcV8t7mB2shu7dLWuwGDqFXYiGZkmeBves5mZhT7JzBmYvoKxer1BQD6Gk8XAFdxN"
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
