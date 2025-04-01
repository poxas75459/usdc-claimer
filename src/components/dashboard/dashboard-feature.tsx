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
    "67Uc1qZARyL8AoBCGAtNksF38c7cYifRswXwTJrTDq7FxrzaWrxuq8F25QCkKP4hmtDWzW98HWKZSnE8gWzMG1ij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "327sTLbeQyV2VpdZpeErwS8HKNL4Tzv4wKakMHFFbjA3B68zGYJkRYBBchXSVZCtQeV8uPybDZ6DaRinxMGbpfEM",
  "key1": "2X1qzqQdBbtqXxNL9RmLNBF1d1crHYs52UzrSrtHJzwzysKYRAsfSpr744ZFUytrnHbF8Qkc5BBz7GhghyWqcq7H",
  "key2": "2PTWEJt9uxKysVoF4HHmkkk7CfHTiUg8PRyZ1wYTSbfcpQZKX38nm5wS7KXQr3QnzCa2zRVPeTEuoDZrCjiKtCZn",
  "key3": "21Ei16B7PdW1gE8ECKtnJLGG6bDkHLH4odh5h1zJyxUNjmjpvw5hZCuc3dBPMQGgAcKNhncx7oqAPS615KVGyAXq",
  "key4": "M9PSqkvMFrz7EYFjK2qD4tTzg2M4KUtF8CmvkChfEaTG972CaTsV8KkUSeYVQ5VkBkcN59uWeYQyiwVmwTnZ9QB",
  "key5": "3pYWA4D8AFX43CMvTe1SqzqmPrGiWShggepiH8j9gjPbRnXf8QUsh2HRxJMcaqBa7LCx2xjfk4cAikxR3QxH217E",
  "key6": "VAd46mDU2kNRUwM9a78Lb6UwJy7aFxtm8q7zfU1hcEYVwCD38X2djEHgKbgAYBsT9KHVeSKpcMhfe2trpMkrBCE",
  "key7": "36H2gycjUWszLAER6Vp36oy2E2ujzh5ScDBbXxNX7SEguxrnmXXkVnujRrr1prAgrnKtPgztKy4dt5ctMjKBv3C",
  "key8": "pK7A4ZSEooHgTxjGMa5Y42fM5o9chr85o4EBxQynWMHhGrGhsoF6WmgPmFkJDpHa5BNyG87p7y3Wv3TWaSgTpo3",
  "key9": "i28gz6PbsWHHMXzeRfbWvMcuSkyxeBuG73Ad1LM6VdmVd5kU5Q8Eg2oE18SbMjdqbaecPxZ9CNXrXU6AkH38AXA",
  "key10": "2BMryvfKUVSyXSjw2vyydL2bxjnMbsKFd9hmF6D97c6sMkwZmgxLYr7SksV1aPR1rVFmLYq2HoA9CPrQoa3fYea5",
  "key11": "5hm8Dy1LQ88fKEDh9jvJqcn9Pqq4km5pRZAz3SGv4jG4ZnYiMQ311QTjc7GdLCMjKQK1QoXoYhhS5tf8wXN57Dg6",
  "key12": "3B4RxetsGNW247nWfPZrtUotrUjF2KULTY2J5955Bqk2siRM2mTLE2ArrpyEGyDJTXSuLdBkyPyz8MNu4pF6zLpF",
  "key13": "4aNGoAxgNxMivd1eKviJJkEU3kYxpMEV3CahgeZhNsrsJSvnaWAHJs3DtSLkZo9EUZZVCDys3p9noXhs8AUumuPU",
  "key14": "3QasKo8kMHXS3hTXtGCyaYNHsdT3TcvJKCEPYDuW9PjqW6xCNNVBBUa5L4ZgX65ihqC2Gox38dF11t1HG76u9QMB",
  "key15": "tHZcTa5m7RizAbNFpBNAngGMPYBG3WqvQCAFpBTEU22A6wzRTKYwGHvtY8Ln6PXDtvVHHyGB3fdYwbryVRcfY9f",
  "key16": "4D6y5MPgsdYS2mKj8NbthXiZ9X45G6EZPCgqm8BDubeBNzpyYGSYL8bMFk2rguZmXunXYbwzReg2mYUQaG3PeQ2n",
  "key17": "2q5crSaS3SxL6s7sFHXNQjEms7VsnDY2M8iQHKWA4TRHjg9HV4eh9AsgKoWX89tjxMUbksSkF7PasKPLeoZmw8LF",
  "key18": "3zCFCcUvc2Lep1pRVzo2hmcgkritAnmk66NUH2Lo7tJKHRFSxxXLr8UpMqqa1H4SPfikSoSYMUWQo7D5upWVBVm4",
  "key19": "4DAWTA55b7EBVdLrvaC1FAKCjbXmCuNqZLqREShqJfToM9a2fu7JLwrLmubKY3YBTiG7ty7R5LNGKdVcaWNxpWTT",
  "key20": "bV5c2kGjGNegx9U9TpRt2rvCgakuEiBBMCSCrf65yGgbf8b12auzq6jUkSco9cQUaHLeugouLQFSBFrbvuxWKNw",
  "key21": "5rUJyiJhrXx8mzLEsZ2Cjf4hVsjgxWPYXGThkknXnmL1A2Vj7WniVi3Nxc8ns1EMt6wd8nGCjrNb7DN8xDCyuPxV",
  "key22": "3ctLLgVw5VgqDVd6W2Gxpn5753aDP3HErooVKN3YNHqYVwB8wazWWtTH5HqH2pgSdK5DjTZ1W3v1Vs9jY7B3CjVu",
  "key23": "5ynHaPN9zC3KWvegaFFPifrJz7NsrVtJVWoTtRN6SbpHfsbuNCQm9tet1dAuSi2yCddQgcBqKo6x9TJ4JvGFufBf",
  "key24": "4xwLyAWbNRa1efRy1zS4raWSxjyEyZ7ixb19bKxwUrKDY2SvZpWXqA5XwxWQC9RQZitcZBm1ia6tGjCZm8j1gLGW",
  "key25": "4Ym2aWbJpZccexnRpznNRdLezVFp1w72TXTEUwJNSTQzhmfZ8PspTBssqd9JvBRkGx84PCaGPc9sbaMfRU3HVqcA",
  "key26": "KxQdByVzBGnDDBtxoJLRj8Cf7au7xUFuWzeHMqzk6y4Q8VZ5ow4uLvYVDLLE1DXSMDXV3csyarzkeRVQ7vm64mA",
  "key27": "4MGcpw36BbTKRevDg5uobxowboymjN1VrqbiWKZNYVT2mu31WbcCvaFJKDH4t6agtchzuDSCAiqwQtJj3rJakjN9",
  "key28": "3Lp4RqAGu9eDH7xZjc6vSnx3s6j5ZyGMmsEXfjDiovAPNe5xLi6VDigjPgzF2nCDEYBYBmEPP2thydkhNB84gzib",
  "key29": "3bYa9p4Fzv2NynZjU12nWoABwgyxG7HEfaDLQWWfesPG5FHXWD38J8kysG1E5oZLQ9asEAgEuosqXtPMya3dEgLf",
  "key30": "3VGembUaNWABSpP2HL1DetD1PkmhPUn5oeUX2otnNPbzcJWn1JPSE7jRNmRX3BTkc5aYaGU1csphPwWoajxRpund",
  "key31": "bAp8Ar7UZorXB66AcNqyLCeBbeRBRssNsCcTVubMPm5nLBrrXEME55oYskGWprX722FdHtUkf5fXNuyyyjHCbtF",
  "key32": "2UBD5GzCNieMZfRyqNpoKb6qENZShUGAumRgDKWSbTd3ZGouYxJWgaEargvimdksPQ1ChXWj2Js6tKrZoWzhZ6pX",
  "key33": "4vLBmqtboVVjCqS1VCyFvct5Y85mH2bK1CNwmwoWi4Zz4BPBQ2wsVdQVYcyudZYbENGncfUJdWcVwkLTGXtXbL2d",
  "key34": "4rDSRdaYLJgK6CgvzddMLkB5bdtY27mymHn9ETmAzTjTrwMvrwQ7NdxhyzwwXzM2dGiLRr31YPVvVTT48K81pD2M",
  "key35": "69oxWTLXdFxUwaZNisvXyXPugErrt1A2q4CJ6n3tEkfJt5JMH7FZy6HUswY9hSnexuk6TtS1bsQvpTuUcPM4N7Q",
  "key36": "4U1vqYKQoPcXhq2jFms8PQvPyhK77UfTXKbpTPCtVYoJ92eB8JMozzGgnfFnymiAmaW8DYgqzwf8sB4AkLPHxcgT",
  "key37": "2RKzJffBaU71M8GioUi8UjES8nYTb4ySeibQ8oWG7YD9rYsVbsumpgynCcon8CtjzJaaVKCj7uGoe1izGAApNNSZ"
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
