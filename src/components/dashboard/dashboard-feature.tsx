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
    "53btVnN5WWHChe2ZZfnnxUYksuLidC12YuXf2q57PHDsPwYmdtRVuCV7cRiyQd87TM69uUYdfrJQBdZZndrC5iAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zfqJ5gL5e4A35QDTYN5JDhY7Fxa3ufxdTN8apxqW7VbJkEUBYiqVtJv175NnyPMHNcqmb2ayV6AJ863adUf7aVs",
  "key1": "5LYFN2om5p2FtLY8H6kXCwQxcgfWKckn6C3xnDByBSyqLqvyfw8r1iDmeYoFwzv7EvgjryqXccGzMK5ybWwxTUbF",
  "key2": "41S9diCRXCQyYvNKnCoek8e13SjSrHQr6mFKoLGQPdyrFcSACs3HCPgNozoDL8BkmjkTnAQyd24i7UQWRzyJqGB4",
  "key3": "b4p5T3ja6ivyLo8SEumJPoArKE5yNY6vB3KmkDe8kR38BykSa9LTosuk3KmmbM9LfvpLnMiNiXByELRL7dUapN7",
  "key4": "5emd7d3VoeJKnL2RwJ7h9ELwow4WFWvdQ6WH4b955Fws751v9UtM56hNenFPHmff2jTKEztQcNY478zd1heGBitM",
  "key5": "5u6W6UTMxTkbHGxdkk6XNXKw5PxjBDcDPJNHQZtLNxJJ4ZBA3UEDDMFzKiw1VWUPd6kQ358wAymoaHLCdwju5nac",
  "key6": "4kVLoNd8y1NH2bjQtLS6PsDjnQpocerrBrbD4vCWFRNiF5ZM7nahCHGbr7LU5JdFvALRpoTbXYkbCv3Ejx45SM3H",
  "key7": "KCqCb2K8mrxkZFRQttHm1dU79yt2hCKvKVCRJrJXEwRsumd5p5ZoHzjqwqxuvZHFSrvZJ177v9cP7KCb6A8CBBL",
  "key8": "BvRjK1wXzpS7NT7LGxYSAMqD6tyGDrbffNoitezPqoCPhz25Tfyxw1J2L34o1jHhUUcbVVFgUr7MggSLzY1YF13",
  "key9": "4rvxk7QDnuDFijePwnDZb2QvvSCNbRR9f2piGjwmShaHieNnsxccRvneqKaFivJyrzUDogVsBVZ6fXAk3eSAKwiE",
  "key10": "5G223ipxfh4Kp7yTk9nein5fqPb4RaF7it2qZwdbA4Y5qEQzsdu2yqiNFtKRjagsQiXPU21md5Hk4Seoz5pfZuXo",
  "key11": "2eqDr8qmhFai1XmrJX8Kj5upnXA3ciDWzdxouRwNLJDri1YQpkgj1YdCaVwLvgdYHMinkk9WSsDBdCgdJB2rugds",
  "key12": "5EiJEtHjk844tyhFSZ4Avvxf96oHJhrtEdyvyXrxgUBDA9yp98yK1j8tbWNvoQUYT7ZwqCch4C86Vq2Yfkz3bmTm",
  "key13": "3WtKa5hEXWQZpEE6pSAXaMnCagPwQqJVrv1WTidswg2mHN8cVBZZZAULNLJkx92nigL7KsjBvtuegwBkHh4nCDji",
  "key14": "3DocyU6eCsLy3VwLMpD7stLnWFgs4BykLye9Ux8hRrKb6h3L2LDXTzuqrZNxK3YnHmxw5FdMpyRXCw8PhqHqRiRx",
  "key15": "4aN5cZqJPrPpDwYUx8Re1ZLwsYTAcbQcpv57vQkvreYZohjStW6TEu6GZdg6Uo9mYUnK6UUjK7hNznf5mhaNxE7z",
  "key16": "3renmHz4pxWGC8oo1SQtMcwxFJkJ2UaGFqyUSuoZGqhFnkjtgxpYihmfWA6rnjxbtVXg7Xq6aWCAfatPyxm4JtmC",
  "key17": "56Q4et8iXh5BQ7WYFh3iXewHXetqrreVnE6w8wUxDBz1mgvQMCrrdnrkmYEjsAGbUL4Uss4jncgyXh62HF8zRPjK",
  "key18": "63Bf1eS2FrYmH4GLYLHQkQwJMFT1GECKw9x2dkD1FeDEkLanWHGRNrdfND6K99GGub6exHFgSfa9Ahg8xmcBS5Zp",
  "key19": "41D66B62uMrek33UW4ySGH7kX2MxSWcMhCS4yFfnQDTByc5rL9rXNCatGQhbEPy6wrTPTnPQmNKJTuFHSBNiV89C",
  "key20": "3e6sbX5GNu9e7U1AG4BKzj9WftczqK7uTM2FvkZaDxaAmT2RfXaupY7ZLHzfSi6nQ2ckkLS5Pzg4hBeWAs3ueexX",
  "key21": "JFc1iyERnpCKYZoeFoEp94opUXYU6NvhS7bMbitoUGQRLv1LFjNg4shXib2qtg2DnA6j1PWeu1UUmigmsMWSDkp",
  "key22": "5bBmdF5HxTzengNckBsEqy4FSDPaZBgen2VzgxfUtwFvLV3qtq31LCHsRvzquusr1scpZ93JhkShB4dVxqfmBmYu",
  "key23": "5irLPeHCjyJEJffmB1YLZDDRJ6AuMugXE1PxWh6aXUbcmn8B5onXfYFUSZk1FwWNccx6mrwwQKWQHYdi8UVRfe8M",
  "key24": "3Don2MFPRxxd9KsW1DWtzcgAyYccwtMBxDdmDyjcQFsPGLw3A17FEbc2eQJ2LnEDgLnegipm7VQpXEeCUzxN8w8t",
  "key25": "4n6zovcsefunjZLPVgoFkC1Jo48wbTDp9sDRrdQ4QAw86fcGvhiCqYBy5176Lnrh93DqsjxWFfBhhAHYnymJ1tYy"
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
