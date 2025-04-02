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
    "35dcvssNioJZ8qQz97d6htAbcFYM7byZZnoPFpMGBfnB8QF98YCaEQrVXKMibxhNJia59VNQ3yWeKqheEEXo9gNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y9f4QJiERVojoki43FqG1nVvGDrbTRx22zwPos1dzhpnCgkrXFAEZ4G47mz3vgrUmGRcmbFczsNJzZoKZj5jw14",
  "key1": "2vwbVXP6RPNr9KmJ8qBJGpFn1Xoi664NgzcfXmHaJsfVu4qc6BC61mEtX8wjwpqom9Tb4WMZQc16BCwN1YASWic6",
  "key2": "5HTDDVXxVvFZzYoxZa9krqHnEcK6JLdfefFnBTREob9zZ4Aa51waWLQBhskuBYN6QLamiwsfZCxWK1ByCa6i6iza",
  "key3": "5xnA91hgWFgLgRsRxEbkv37AL8rT379tCxpcGwEhtYDiB8hQmXRHyb77a63Fi1egw975SzNFxm33oqP5kD4LiisW",
  "key4": "38vyUQ2To9yLzfrxiVyBEoaSFi2xyUkSUbKVjUUYESqL9MrhVWPwRQxmQY1fXkxrcLWXsGfDhQskisRDsYtj4tnJ",
  "key5": "37WQ1snHufX895C1u2dJnzqsb2vchvVk4d163AqQKKsY5VE6RdvyntgPW1uBwMC9X3zmwdQrBbQnsq1Sf8dfide",
  "key6": "2aEXv5gvJii4muzmPgtZ7yYdVajH3LHDFsgDbwc7tczqiTED4YNvfzyTwuXU6rJsSx57EMnncaBokfnh6QF2vmpD",
  "key7": "fpXvSPmektwQZHiYuZjj14GeNDGHDrDEfCRPjzAge9MYcm7kPjvFaxDLEfjgArBQZ6qrEBEzHMoCyhwrUmVHXvE",
  "key8": "2j1CFwJrAnRPk32WSf7GzXMuLeuC6z1QFyfrefGb1eGy5u53JqnAHVXfQKU7J3Ew4CYLs3oFsZrdLsoic3LE1xVE",
  "key9": "2wysgaGZ39q19FFSLJx7wG7LkHAdrUyHHAt9vxYif8fJMcz2e5mGFSKCT6uSfoqMXbpJG9UskaBLrT6TD7JzBkrq",
  "key10": "3xRZyyzL6DaE1QYM2yAvEcddva6uBkXEPQRcAr2nRtTuFziaZDzS4XCrsfFDdskL4UWyCFiDmKZ6uhWwDv36abqD",
  "key11": "4tUiKSRk8gtscLj9iJBZPPtnsFkHrGgJkG5trWbhimebrxSKiH2hHzJbkVak5ydSQPkYvFpVYCVUFeCYuBMv4mfQ",
  "key12": "58CVXyQkHkgywWLSyYiNxHvK4VJRymt8Urs4VJT4HoxFJUtng1ecHnZ37wcDsEryF3Jcvsb62ryFTQvN2g15LxxP",
  "key13": "57oKQWDuKRtBwTbJ4UFgcTjJaSMfmvMQsYGVYTWV9hNAJ7jn6hvQNGHcsV16aP9DJJP4MjcVzhuSaPfs3kyKTcE6",
  "key14": "2yLi6ZcNY8fokUZai9n2CNzEYVtWycPWtGLAAcsxHeCN6TkisEV3nb8j4s31Js3Wtfo3CkxdwD2prTcRRUQ8Tcvy",
  "key15": "ZqST2ZijipGT9VebzxPcM84hrJAzPcKsFiSZureZtWCv35PsJbLvXBC5sqVyXNt7B61dVyjmB3314PLRp5UApj8",
  "key16": "2ffjvD7dcz9ohbBZjbw1bDoTjYwqk8EKnRYE3qmWpCspJxYBd2QPt4ED8vZMYcgVNVEQAro9hGBiPAeiyBoCtN6e",
  "key17": "3KC5dLwzV4vmoSt2LeLgBa5k78myRhjNg7ECw7DP131oSX2FwENH5od18RYcTBmKUees7jGKFjucckemzVgrJjjV",
  "key18": "RRtoKwH4MF9LkBu9RriuTdddBzSp3sx7ihih1NxrJeApaU139ACZCdqNGiK4eQHNd5ojiTVnsCZKxJ9F7yCaWL4",
  "key19": "41w8YgPoyH11w54ALzv9U4V2siSRrNbgT79p2RFmaXAWBqw8m7ArGbcj1UMKz7TppTZCQkyJyJuSt73eqzngseiZ",
  "key20": "o1KCNHJShVsdsgvwtQnwExfrVyQwMNr17jNEdzM2xXh2N1M6C4n2JbrXE23uj84T6S7GrWLaZDQYmLXZ1kAvDdS",
  "key21": "4KEZ6XkUsT9nYsJXqEswM2Tr7DLBqtTjGXhXNCzRiictoyW7JFe69fm87ekNjchT3KCCvAPQNtYALTcW7EcxHwNA",
  "key22": "3eqKRdcdXFNtxtaDUn1nXYyHSWybTVi7TW57jky3LJHGMf5AHWKRNrfp5GLoMrnYRn2qxahaB5eQLWjbVYYHnkjW",
  "key23": "65MxhFiBb8kEFseYMYsRUjqh2aus5YmTHXgPZ1G88KetgNp7GecPvBEDN9RucbZ5SH6n6bWjkFTzC9s4GEVvYNEP",
  "key24": "oWWbSviKBLmWAB4U5sCaXQoNkueNqVriFXqNZqUxWUzP7aVuhbf9b5Sr3DZsGQe7w9qNjQ9PEtaxhb8s73LEG9c"
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
