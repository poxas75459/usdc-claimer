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
    "2dAAPJZEia2FsNHtPKtkGvMKAyeimqQVEFdeaCu1SnXo4cnXRYLrcuFr4mPP5VdvLpos1yJ8syNz8QjRCjjwfe8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tPB7RUcwhiGLabNv737MLcgd2UWa4jSE7yEbUXnJRQfnnyCT8G9nLnkjxe9chxUKtggBwgYWTEqmHchfQsemjMU",
  "key1": "5C4DRmQSnYkyPAgETHzDM4EvHTTvDp9vqEiZomBv5Z7vfnNqnhtYnMUk71CedWgZEAsiJURu4LbKKvcWoHVFaq9L",
  "key2": "nL5Y1QjsP7RnXouf3HqpTvd83figUW5smq947GJQnKQcgPUVka1AiKDJ2oiDdEeK3wn1q2BBP6sM21uG5eGAMLT",
  "key3": "4CyegTCdoBwwjR8XeD7rTfYtmPjR2m2YneU3i2SdmjqALxw3peowri913oRfyZHZjAXEH8HtbX9okLWNXjhWYwbW",
  "key4": "3zGgMoPxoPtzcrEJYxrQ88NbAiWLqbQ3V7GsqvLWSoobF6XZdWhuoNjVeW1gUBa814s2VXeApypN5a5w7Zc5aABj",
  "key5": "5bzu1tMTzh9KQqeyXsAre7A2U7ShbQ5x5ww2NsW4qPP7pMwdHQ8iUNcyAvRvHGenskSR4uKLfTGaM4ghKzmQ8qHN",
  "key6": "2pGD4vBs5dgXks2WbHeAr2JnevGtjbCAwMXvpVaQnHM92DjLCiAkZUdVdwB872LGgQT5fEdrzS5j5cMAnYpcGMtv",
  "key7": "16ESqSndWsoEdSa3aJbXotbXK2uTQeYFn127miFpiESRx1FHVh7NJo9hfZk1SNoYUpQcjVCBytBFL5pGGpqV1Y4",
  "key8": "62xXj7axn2c6GeuX2RwVWquWgnpToG9xswBAyyzkrJ9rcdgxJjdVp6zGpF9rpyWaja8eNFD5rEbg8RX7PPGABKkh",
  "key9": "4eRZXojQA82Dbsq6QicbbheTQkSeszxWkdF7aqocFLUAE7srkBhUXjbPHJEVSNJqSu2unhKTZNGddKh68tk8BL9g",
  "key10": "57Wiq1YuVEFqdLCs59YMVTc5oFT5t2QAAErqjyNZUuYhxxVJdqCsN78vN6C2p5TBpBnHvHgUT7WkE5pus9FsKro5",
  "key11": "39MtNkt5PCGiAnqM3zRc9EqapLKycxBihA8RJMVBEcCeK313xrcM8sF7UCPnBrvbAYk6TDueVHZ3Szh6EKRdrhgx",
  "key12": "stwcuP6Vc4JS5VJhTCFyDaTy3Hfd15nz7GMVsKSnFhdPkzM674hrNKfD3AamT4kfEa5z8VNhLGGReQJyEywKhGP",
  "key13": "5tbns5fpuTGoT5C5ge2SFA3LRrHmsEtyf6NVTst7aqoa3FLCUQXpdvwTZvMu3EU88RngRynWJszkCb2KvawK4ZEo",
  "key14": "5QgbihoUPqxtDzydsM9YpWZoNcgj68is8FHHSZcxnrHJDTgEPt8paMLHaiZWTVtw5us9KzJYd8nURmTh9NQdV9JQ",
  "key15": "2aLTo2o6TfDhMLkwpaefQB77LwUE4FYBTwsca2hAvfb798EMmrctxiuvdMdTCV7FsuC58vfd8ajbC2wcj5CfwGhn",
  "key16": "51ZkA1ChurxaQa7FViyYvxybWmcUcjYHmep6Szhs4icE9BBTr4jPz9xBJLpCNJtQxXiBMbLVw9kTupWXVM6YnjoW",
  "key17": "WFTVbhhJVx1EyVa6BtKLPFjZ4owmPkp1JPbHxWN474LfCdVnH3xXKXxy32bRbdEfRxkXKbFuBga5hMj1s1sjpin",
  "key18": "4q5xv6cTYmQvpiBEFic6KWQXuxZRsD9FDmRTxVP4X2afXQw6v56pYNfA5McLCYWtRFTq9x5Ue5sWhDALGH2551Zp",
  "key19": "3ibkGVNQCezTNvRWpg4xTak6gzqU1oEsZN9RkCbYmxWRRBEPk7qxuFfAvBqfTaEaEcXH58zpp77o7evh2EP7ia1H",
  "key20": "2UWsYBc2bq2cc1oX4bqZ9qYBJMH7EhEx4B2YkWmkWsCZWncESzDfyYZapnEZpAjj4xrq76kjKocwcV1axErhLLgG",
  "key21": "5pxoU3tPyCvWQBoyvUEwSA3HqSduQC5KyShJY3Mxq9hBUqcQQYUpbRdNGNMehJ1S35JgWQSrLXxabAS78D6vji81",
  "key22": "5sHhu1Xr1AZtZ57z98tLnByAnbxzrZLEetpHdCFBZYbKmBVC9d1KNRspC2Jfd7Y3vzSgR9dGYV8TYrUcT5HtQpri",
  "key23": "4b3XeCtLJNm99RX5bft2DitkyAH3AzRsuHAvLaQMn251bh7Rc3WJJ4L3SouVWP4UPNGCF7F4cGAZZsHmDTHjwwux",
  "key24": "61jwzPL7Tfu8fHg3Qj6CtPaPxRvmcGPwpEks4WiB3TE39daUkzmo99Z2ED9ykGs523sEixEHatvGScqhGEW9Wemb"
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
