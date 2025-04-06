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
    "5yKjvFKkGhJHCvUaTdssDdEySsGkjVZGJhF4wFcZMARMkxs9m14JjiHJSqv69FzBLHWf3heAd5VKyVSxbQnkq7xS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CHxkhpWqL5d1SS9D6HvZ7bC4vXVeBYofaiy38qh5gnh55LY1T4ANzpvLzXbmA4MnNPRQtnUmgKsVWwxY6zDKv8w",
  "key1": "mUYcamcxErTCWhUFRc6Xoy6QoR3LPapWRHoRzT4mH1EJMk6C1ipqPGXBKfeDbnpGGFVFU2pgCcnqzxUAs97MSTC",
  "key2": "3YoZ93k9VM5Ve85oNKqXrGYf52MyRL77ySVgi6dyUrdkdqqLzXEHLHCBqW82cCNFSSFJxXviVM837NcXkXxjqZ7",
  "key3": "4jqxK6Wdy8XdAdurSKD4mKwhwvUPYmXhZbwR7gWAf9atupV6G2Zbi2D2FxrHoC91YAqMBkbNUSS7f3yXpCevCd6D",
  "key4": "5ZzidWXBuAcVL5TCo2fMf5d6YLsN1kdrYaGrVso4nEyWVYJwhtn5FzEw94qZQ43J3TShTMfq6fkbjdk7E5q7vJqG",
  "key5": "36YXu5MAnD9SRC69rHmnkQZ5Fd4j2SdJWqkU24eKMvSRyCrrjecEBqV5YFjoefz9LcbrQtFBQLdLMuefGCSsHAfe",
  "key6": "5gUPjuyL4Mx19wJgMtMzDpFsMRmQgdvLKpCZ21Byrtcb6Sr6VcPjTs62GFKMyYYcTVTmQd81xJVmA3L2dbgkd8h",
  "key7": "5UBQeo2ETmeEypJbT2R8ZuNEbQc8xWUBJiDBatu86kGi7f1h1SjQsbRRyCx2t9vBE7qP2guZKJo2nce2jVDUokrG",
  "key8": "CJ1o41TZEUy5PJ2EYvQzFDLSj7zMkRdpvuJMM8ijQxrmVFKp9fE25bx2xdVGEehci3DPhDTKbSm3s8F5Q5LY4Tp",
  "key9": "2SvasWUUECR9RPbS8cpfSEDX2eXjnnuCsRBEhMRQxhBaggJJra8uy4cRsPXr9p2k8njRew9cHeiUzdVASr9wXYt6",
  "key10": "AZNeYkC8HcQz1z3j9KVHQnr6ohQtsjbunVjQR4uC1ye8ahFcpUCFQvyhLXwgqfUuqh2M2JewsXXf4wyD8yiErMb",
  "key11": "22r6z45gZNtiYJtLB3tSfq9Zk2oKLfnN5hmjJEgHTut98a33cFV3Q9UpJgKnivxV2v1RE6utSfEz2V6vDteYK9Rm",
  "key12": "4wKz3TY1faasN8x8vVUVjf9mBpfp2i4DsxS7MWSdX8n1psrExT1Q57BMeYdWHymfHAL7MhgBWTKzyemsxXN3zKaA",
  "key13": "3YarBEB9Da9gpCm38WiuvzdMokbt9gycP2CXjUQgtAUk4KzWCUwK1oqsK5tJTCwXLU9NX4hvDTDimwmcZfmiYsDk",
  "key14": "397gBt8ay9u9gwSxgkb6kDWqmfq7zjohbb1jq6wsTgt8j8yQvXBXcaCKvg8bFVc1seV2MhhkYAzvGQrXfL2rHMf3",
  "key15": "3ewGMMeWtifUJAq9xs7E4FXxGD4g5DfzLZGwz1wNmKvRGskGrGuD6hdBmTgMfsAnnSmNLx7MvtWM2Zg5c5mkFLCr",
  "key16": "18E1mAFcezdCMnTa4fXuvwDMgjxXG7Yd3CSEJzWrahLhg8CKfVUrQEa1hPXaJmrnky9gBPworrakH1stQbjgHcP",
  "key17": "3hV388ygaFS8S7maYMrrej74DBysU5Jew8CSSYuXB5CMvhbfNqA55dtcHTVAcRquZbMrCiJAqXVKeq9mBEsLG32r",
  "key18": "5Uf593J1Xs9NcrCki95tmKB1dbtsf7S3XvEMMZTmpvh5tgFBK1rQKcSv4okeFbumb37rZC75qbvAt68WVrFaeRey",
  "key19": "N4xwE2RKYPmd3fewCCWQxqcLKxqQstwHxtFHZBHvbFVBWb9Pi66ZxTaPZjzRg2XVaPUK3m5LFDNqiiZBMb4mgtD",
  "key20": "2UrZj7ix697mw4JosxdpfRJfQHQSJjKrrAr9X1oydNvGx33VkWVT4xRxqKTsJdCKnk8dDRvugrabnx2ccxsxCZaw",
  "key21": "4dARfC2LAse7zzhEJa1PVgYga7NsdyAeUf3ufif3PPQhsjRJuPoirvVpXouFQTuP9FTqB893MUVjnkCbuB6wGfST",
  "key22": "52jjYvfet93czMVWPio6KfHJcrxjtEE8G9vuCx88YjKwLbnpoZKDYAjSMStL5S1gKLqtTU9w3Bq7hbGtuKEQPsYA",
  "key23": "4TusBNWH8R2gKA76jLkCs1t6tZnuuGFmNsu5kta55tVXscYuCnoSYf32vzuh5SL5FfgBgSGnxzM8fkQu5pkCBkbf",
  "key24": "2j7mNiTUnihTLXmZasP2575RvhfXfJZ8aj8QJY9on72thm2BVzaQNKAH3gKfN6J7vRXnXhECMpfsUZz4tgUNWvFS",
  "key25": "JrGUeEQ6SjhtAxuS6Vn3FRTf4Vfj8pweeLmsT6qRZvfkpc83k26sYFNhQd9z3R2fhuug1VHVNPDGj178k2Y9kgq",
  "key26": "5G3udhUPtzzVFcRpZi3JrqgmY6eieAaXRUyv3hq8atXjU5WLSJtq2kVtqRaUbWjp2e6f5fFW8RRE9GwJY5jvBLA8",
  "key27": "4sp1JbJdhGZ4q2gMjutFMdnjRJC4ocyS6DQ8GTyxhGC8t671KnAnChaeUCLdLCY7JLtUKGNfhepGeLaG3tWaa4rv",
  "key28": "4iHt4DWcoPnqawXZT86UZmcnY3bVy4EDo1SDKuNgHoCk956poiPTF5C7nacQTCr8SzXk9qCLEGCN8y47qAdJoVqx",
  "key29": "3xZ5WayKKWUqUKe6qTKTh8eDb4ML46PZPQigYEZPWX1zXkgzmD3cy2RvJ8tT6zVZtVsEV3Tpb4Ydf9qij5tuScHe"
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
