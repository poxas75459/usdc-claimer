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
    "2g1advL3WvEbQH4cTYXobsfzAaFKsLyu4f89zy4zeU1okpaemkLgtagtrg8XsXcnG2Bc4VxNattdGnT5x81ycLkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S9fYScv7vE9MYFLJgptnSuuMwpgFPGYFa7oUUZC3tcvCQGooknZkkmA63XFijr4RKmZ81NtBG9zZ4oDERxkGLjU",
  "key1": "439YV8pXUjUt94tz2AuSpjo3xNS7fWAEcHpzAZCt9y2gnpn8K4JGxNff5qGfZp576tAuToUD2pwzyezymixcBoqY",
  "key2": "59UXgLisgQiJK7cgtKJYoCNvnf358P8NRzFrgAUceYSvtd3Fn2o1UE7mWapk3Yxo2vXNEcck8zzNFfU3NV14WLMP",
  "key3": "27nYvvdYptaxYJoQS2gfGGXZYJVE5MHuDejiLAN7jAnToDtTwC5Un93g41KMNL1g6Jivf5pSCcY4bKQHRqo8etDZ",
  "key4": "2tMDv7LxCiD3FvdrJuzP8ChadUV9thggHiwBtJtAoa5E3GrCaNkdmr3grVCRGbubXy3oUGSjXy6xWJx4K6Y6RC41",
  "key5": "3nmA2rwBnPdaDAoJevh5dfwhc1XUVpsD7dNKrJJ5sXpyJnDyw4to6GiFUtzX9fdVyGJazGCEwzqnNftWQsFx7sW8",
  "key6": "2HAXxkvspyCT89hD1xkhpoZ4T7HAy8fhxXBKPtuQ3vtMZnasmmf4Hb44Hxfw54T6HXKYqCfGBoJiwwKPGKdynB9M",
  "key7": "CsVepK2une2DiXKCdQ8X5ycpHRn8wWopxaYU6cwAkTL68Xfv82yMn2ANJbe7NwXFSTF3LaLMYjZPE598d5VFhaU",
  "key8": "5GHZHNjb1JSJgPq5KQY3DChgMB1dK6Kvdo2TYfpDAgSVLohP3gZKFk6Z5v15gJvJrKPRdr7qwQ4ph5qQq1ruu5Ue",
  "key9": "2v2qqhfoqdVXfeAasffn6R5N6DmcbiSzkVk7SMx43t4eWdHNeuaAJDvKDwMgPiKDBsNMrJJNRtPo5AM9xUreAhGB",
  "key10": "2Jcr4Nwndhq6A7cucCgv1E43WqnhDknHvHpgrTATpAWQ6HdLkgwTJZwHJ98kS2MEpgHwdNroMJfbWTTEAb1WevNd",
  "key11": "2qzN3hjgTeG6njvn2vQnyDhCE5Jq1jwL6BfZKqLo8A7jkrgt1UkUmHeaj35h9RX85eF1WGsKE6komxRGd695VVAr",
  "key12": "amByxrW4x2eBqqkWvLyFZLqDsEEMiZ4BKkdHHnqS342ZfNmWZg9R7xmubdT8CQ2iAcS4uFmUjYgi2sDVFLehNb7",
  "key13": "5h9tqit5GSKBBrMpSi3Nk19L1w2Z7FYfEohLpEaH29RQVim312r68QJ8zuTv61vqdFuxhyyFtKAvRcNpFppYWxye",
  "key14": "tQZjoobxX4JWnKtKanarj9ny23b5J363NKiped5dobP7dpzTxvmNFGj7eVvF8X9ycFpiuXRiKtjv8wmAWrrxhqx",
  "key15": "3LQKDm8Cj5ittQSawQXufRJzNgjAF8H5Tb15MRVNoQBPGJ4mxJd9zzhH6rXsYj6mpuqypsJUg1pnY1NAaYJg37tj",
  "key16": "iUyqHYX2MxYn8nUttD3vAj4w1pcuHjcXCfSrxgQtW4A1KmPcfTu9oj7E1iMyv6ikmghSYJ3bMuv2VA4pTiDgoRw",
  "key17": "3mL5jeZbGrorgpGeYsbvnEV3qreuuPAPDFkCvBfYdbfTWawfqehPXfTKJgysTbdHQP9Z9t16eTL5xf2wvJhjCokY",
  "key18": "5cJZ8LTbUvQwDCKdaeVeAdYLRKdpoRAxbkUBWpRXFUWdkcyM9o6V2KK7dj7zbd5qypqcGgurnaLeaHayNBnTZ3yn",
  "key19": "3E6RRG9QDAyMyyE79fSgHgcvFgEmrxia41igiFmVWJkHYkFoP8Qcuza7kSnJgDuHg9fPudJ8wSxypm4KT74dHZCA",
  "key20": "3tyy58obHz5Bba6kKvHB5uQXLY2JSix9fH8CZmBwoGed25MrGUuUiCWURkpGuvyChppdCNz179JUYKsFocFC2sEQ",
  "key21": "2oiZzucARnxTd5QcmnHJZ2FrF98wa9gU5bxnVSyw7SzzCzkHTHU5GoHKyeHLTpJwo5AjmgwGH7kLLAwkBxiCgzs2",
  "key22": "3ttBuc2jYDXJVYHs4WRauyhDe6BJqSGMF779DPt91QTyge1NQFiUetnBqCBmsVGv5nZH9BHfMbjiWPfjWMhTSr1o",
  "key23": "3EMiDBn1H6HFmLxNqR8jaH1UE43AY8ko5TvB2kmKnkuAw4gGH3uXoQGxdzig5vcQG1sedVMmcdHWbSag34tr1Rp2",
  "key24": "53aDZXoZsP3cFUyTaAa38Lfh7udWY1VorjBLmEGwKb2p4nXUXthenDp56qZ2xrPXfQvbXYcp4bdH2oYTSnraCaCZ",
  "key25": "417yWgGQK9jvdoCN6saaxaBysHJMvxRTDcCi4rS9ke6yQGmwWCTyXWJsXZRsePoYbJDUdgPjH6oQyzKV8JwjHQcc",
  "key26": "2USkRRfLsFUrdzyuJF25afwsjpFzAVeXHqgdwGH7fytyDBSt6x8aoDq19rypyH9JMghkNkxmS7M5jAohggTsMw5Z",
  "key27": "5deqRNnWkUhVnNhnTiz4qfTH32bdDWkiM7bS7y4FPn3AoiXpNnUTdQa7f2ebK2EAVqVVS9K6VpNz5ZaMg1iwP2di",
  "key28": "42DQWdwxbPW8AT8QJmnnheLtCCvfERDs5NbexUaggas7BGJqu2gCQhxBpB7Xn3WFSfhhpEjqxrBbAfMmoh6S7wA5",
  "key29": "5y1QCoMR7hvezo42vWfaV56Yw8Rz4XK4K4LNUjVH6yLBixss4Gwj6bUvr6wcKKA6RmQ9kwgo247ousiXeYEJPtqM",
  "key30": "2HzfMTwzt52uRdDZrt7ixCgqRLaRZeGnwHbNGfinsdCcifa7dpy493EoFAgueZC8VVPQ4NoGNBVyvWAUU5ECGfhi",
  "key31": "2KYUqsAViv1JPSNpGTkJu9H6yzRyZfH8SAyzhZsXKj4QyX6MYem3Lwso3mJHrjd8pEdvfXpeFzBi5z6om5BxTwM2",
  "key32": "488ohdsF1szSLSTaxEYSwY5rxeQytE36nbAMat79fsMbfcDH638sHGizzPm4Cmj5WbbhwTrczvMXymFUwpX8zCgA",
  "key33": "oCAWoST9Q1rRetbVfpsGrmVGfXvGHHUdM23MNAZHF3kvw2sX8JXBLmrtEifV5giqTfsHUMxL7aVnXXvGtxfrFfL",
  "key34": "4CvRujAqFdpRsGwNZeUHfZdnq85ANEa4FvCjWde2wwnNoys335eAwRasAA2CRgc1BiXm7J35Bma8X87BnqMKYYSx",
  "key35": "4Y8dkqBwo1yvXTat6LX4CS38J8bFtH49dK2b1S94h7MDwQFHwtG9Ldm2TBwqWnwuGcRMkuAe3XGcmrHBpbZsP4vK"
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
