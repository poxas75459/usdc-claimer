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
    "5hm6Z4YuDzHfZn4sY2Afh8XsBmruFLMZ1Pm9LTicpzWxrnXJ2anQCMGfxj7USdUthhKunL7bkuNJEXb32BH1bUp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VgyWcY3Ax4EXfN9TYrXzYeEQ6WGwks8EHAvUgN7sUNgsQWP3ZAAGsU1aFb2gQa5T8v9Mz2tJi3nyRXj3Qt5r36Z",
  "key1": "5JeWjYcaoKcp5nFgKDUgZ4KzeBJxMz8r8vnhiHQAmfd3iCYdWHnMgEvGvC2dwz4JMPsjBevMDqhtFrwpJP9i54Rm",
  "key2": "5KmyLF6vzKRr6pfG39XQ4cEJjLen5jssawTSS8uQn6jkcBNswuRho3mb21uWLNWyEiPMv6euiT34kj1mc7A1d9DZ",
  "key3": "3Z6SYXMeJXkiwyibGLQRBVEiF6DsUHfhmPccCCNkLNCgiwaaBF5vvU2mhBsRwXLZa4vc2yxDd1DbTD5uVc5rVm3",
  "key4": "2BsuCc24A6CY3fEjLHbLYTm9FyxNDzm1n4XYsTXrMKdXZPJ3KrweQMf9H5Ptqm4Zxi4zigoyxE9GWpkrvF1PP9Ls",
  "key5": "5EKTMDCBAPYWX1NWq4N14rR7XZnJDAp7YuRa66La6M1CzEBVm714k6mPfZfBZhisjQNgvvY9vqQU3w8U6rFW8MSn",
  "key6": "5qq4gpLCpznrJRkynJ6nj5s8H8oa844Qnj9BVAGVZtKtea4fqqHVv3GGEpg7gPV7K6P4aK7nnDJKmWF42VXvWC5m",
  "key7": "WythjK6eDRcyxQZwFJ5q9u2TLjdbjdkXQ5vUDzXM1SdjxfpqdZLDmDWWNyajDkHD3jyEVMufzrmKkc8e8kcKhbZ",
  "key8": "eF1KMNFzroAFpwjPWFJaFCZ41687WiFw4VK9ApYNCZDhBV5C35qjorJGS2aSufiacLMG5ZufEYFfpUeu6FWULTu",
  "key9": "8mFF3Rhfgmws3fS3t4UTRC5ryzQsLv72YyyQGYgUpngKjNtHReMmLf9FN4eBcwiEHBUXNYLVkywymUqXc6uNPCK",
  "key10": "4VKNKGgijhLiiXWhXLnnPMhSWnhxFtSzR5EdPMj2NyYESUGdK8ckeuDt6bush2YRyXyGSxWUp8g4kTzj7X4GN6k8",
  "key11": "48URbuvYbKhuhKvzFx3DF9G9jXyE4N4gdLr3XMyWx2Gg2Hf6sxYBXF1MmfU2Ls7dx6fAfuS6RqSYptHRRgRpQCMw",
  "key12": "5eY1aEsNZR7cRJFpNryo4XRCGzDf2MJoFLfpzNzwEpsFS5jXNKDck4NsMp3Fi33miX82ff87C6NYg8z5f1QYLmZx",
  "key13": "3CMxgqfLQNVWgvLEgJ9NtzarCKq1SDZciNd3xqWAYvXyvkS7SdjYcDP5waT2oRW9qd93G9RNH8QT1q59PYbSnnyd",
  "key14": "WgastEzSZHyKYnHA8Zk6qRaXqnmz4Sy74JhTx5qNA55SEcXiMV3WGpuHcZoiKWFAfDRi2Seir9QmsqCt7Fjj7ku",
  "key15": "5KnJ4qjoGMSPNdcUf3SQbF68Fy3oXDLSMsagoStC6S9H3QMmjBhbyrUz1SAL2KoX37mhPUhEizJ3EusuNHvcT2nk",
  "key16": "3jQZX81CwF5ABFREn3fZoUXZ1XRWXSM3Bzz6EmnPC588pQuTGH4zGATmiDihgNpLqZQpJF3WN9QEqxQnE2bD1sbc",
  "key17": "a5nSs4jeGdQj7KSi5J3g28DN5HRDY3jtcDkaoU3SZQSCAJS9gsnz1xh9oyruHXbfjFxNf7QhoykJ2X3qh3ehfNZ",
  "key18": "4UjfW1dQZeB1vMjV2x4v5CrEgtHYizogPZiwEFVDBy1CYj6M5FrFjQfdRrRLxzMZvbKhMjQL7wRXkbgzoVe6X76u",
  "key19": "3zY85RHqawNusycmuPEMK6RmayJkjdNWxyTCYwqbMgfHu9mKpaGiyy92kwfMG2tPxodRVaAoryw19VK363WZqPUf",
  "key20": "jc8C4dy59YXejhd2ZA54yYKtyfw38qru73mBHSy3nKx8qnzGQLWKPpXHxVavCF7zyaSA1u6P6kFipQZnK3wg4yq",
  "key21": "3FFeqG6p52puZV2Hti8zvgBAyQPVafm2Qv72PHaMv2LW2nvB8kaHYy5rZJwzi1ctZG9QVYHajRH3b682kUv15jVH",
  "key22": "1XCkCEffjkfqKRF1aWLJhkZokySLenSZEn6Zn9z6wjR8Kiry5rF1YXcu8xUKU7EKaz5sxU7LfqneJ7bC66w2ZPY",
  "key23": "4QqmTsowbvM8F5qGzUsqbiRotQ1Da5vcxxWwov9YhiHdLRmKRzXCkuAKXNp84MunEuquEwjM7Cc8sph2ckd2Upb7",
  "key24": "4vwVMu1SsXC7sos3cjTMNLeLeCkNiESwdYuf6LLmmqinCgJSTJHyntHvSaFwqreDngCwpRq1GrCyabPaZ9H5gpqU",
  "key25": "u4qWrgtCdy6adW3BkevNmWtJZi2AnSRKDBqXnD7UEiN3ptfv65QbT9Doa7rMg5jmZFvjxKJHvE9WARLjCWdWbSP",
  "key26": "5U7bypZLPZdPN23ZMU5dJmLVZkDLtcJNZW19ki79AojhST5D5NLkDudytq5AvxJDi4vp22koqa7sKf4XMhxdjePT",
  "key27": "5VBt72kBQ7NzKdrnC4m94gETRfuN2MHC5m8mXDEwhc4CEQzZ4kVWBr1U77izbRgfMvMwBG9z5UgNvD7K6YywoRN5",
  "key28": "2YY3LeKJAEfaq1YnyVbCyVSAfB3aQhetZec3eE4JuLWVjDMfypUsP62qn55z4WMurTULzVaUxUqmVS3Pm8JQtm8o",
  "key29": "5aLiexM2Z2FkNMqXBRA2DDaiGXA1h423CttB8kx5AnjeQqqjAnD5aFpxZdmHgEojByFX8W55NP8kctT3iQX5cvsJ",
  "key30": "4c9GNBrSqEfRvRgf39UQx1Zzb9XRQ25dRNES9bTh13y4Qc9n2YpDdEyH38ZEXtiynGWRAdCfmNNrrrMT6Hi2Vre5",
  "key31": "4YDRnfLoEBRTsSGdcpAMMWNVHqu5wzxb6cA3cq3hoE7ha8pi8WcVXZaEHKuVeqHpMute4C179SsbjTJNRGJ5THe5",
  "key32": "3tdbEmAyCYFnhWrGoZTYgXn68zQnK8ASjuZNMnYjM9W4EaArPwitsL4fhGTGi71AXKWNGcMhcUHY2D17LZmTvap6"
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
