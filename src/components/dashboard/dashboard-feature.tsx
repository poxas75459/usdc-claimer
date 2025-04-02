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
    "2fuE3gyKdbZBNo4RYqwzFmPJJdvAQ7GXa8tVpoZ9F7QEY88zz6syBfVGyDisx6EC5exFvRGHN1w51eHSMRd6mYNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jRpnERkMzHfPs5NuAi5xy3YiYB2W8UQcXRaLpppMeLoPqG8twf5tdGuDkF9jTzxABNuD4L1avqSF1pmqGh4bP3A",
  "key1": "RwY3V2vTCS7mcpSGZbtpBV6w3vikHATv1gcGprcpcaQDjo91aurMkiJqu2oY1AoDvj6XAFX78Vq12m2FBWAdNe4",
  "key2": "46jVU9Ua2SCSE5jFxKPJJm8SvJUyuDDuQtEhvgNbHRD97pnA4mZBwpnp6CdaMenzj7p7XLLMW5KZzNmq2zcyBsrS",
  "key3": "5tGyZsXFxDyZuG8MfCdDt3KbGjisptecBwYNc8BgCePiakhURewNzqXjSR6zq7ApUZ2sQ4UfbxzL5sjV9Hxyg9UW",
  "key4": "WtuumhDf4TYvrziAUXNpFqWmKQysouA9z77Uy2MRk9aZQSJpjeYg3Bkg95VyAnohiBsa6SdeG4YPb1QWeEE9iN9",
  "key5": "99D5q2JrvZDPgyNTVqPTKS1KGQXEdwbxt8TVTcNga5TZwKyXdoUmAdo7cJX4M4Mhfbip7SRTwVsQyg58rs3mxad",
  "key6": "4NRQ8emiZC3MDfjQAZuwTyPpxva814byoLQgHs3QiKewZteKtK8fUgRvD6wAxtKjbkgCk8TunyXoKbH4vsx9EpvM",
  "key7": "59ZGdSddW4vXrpXkZnLayqgwqC8apDzrgcormvoTNZdshDBXYE4fDfL25WrePDSyWE17Bm7HgCe35cUt3HsK54kp",
  "key8": "8jQ7WuMAa6zLru9JF6FSpeAg7hAwvfhbF1FJip8imsWTzb9ZYzkWpUZAQ5MPdCbJCeZsiFKsh4MeNyZV3cN8fN5",
  "key9": "4ceVcrnwt41rmdqsHSzBXuhK5Ca9J7YudQxRT7K2wp5w8rWnghRHpPEM2TH6wZwTSSGXTVZRpDPJX896sir4MQ1s",
  "key10": "46dEp39ULwfsESRmU7hbcCq3dFevdgsSWvQpNSfS1tuLkNdigsAFhtpQuegNNbkFEJ49SJZEBh3NvA5LGhfevPqY",
  "key11": "4jURKEbf8RkUF8PqydtWkw1iyvNiRHkcb9ioZbm5LCA2FSCi4Ec5Sbp2G3GHirRbva4DtDtv3x1okHrUDJU9JA6u",
  "key12": "4RjnTsvxTS6nr3ebyL8fiUCoiPuPTZe5ia3ijpQDJs1qSwbZWuuNbmuAceBujiLDEmJ3pTp3PJVwf6Eug95MjHqd",
  "key13": "3McdocFWtDTQopga3i56TtXi9VND5gHDxEyxMZ6epHYaE3n9jbWv8RT4m1EuVT9yL63qpLvMHgVAXt3innYNDEib",
  "key14": "4B7goiLdkT4o7WQ5XG8SdNFQm6SqYrMSqdyig5BKD5QsJm5rpVn6zyifbMXoKCbfAg6WwkXnAqNnZ42SRgsjPuoA",
  "key15": "2MRLk66Hau7w65KmPXBDxZh3g32XL5uypeZJvwcvg9FGJUKkPGaPq5E1qVwv9gEuyySLddQsZ5VX6k7k4M5iffmD",
  "key16": "ZFZ2azCYKH85roxxJutXjtdssgxDtc6dXZCizJCHeNSSmafnKzuBgGbHx9Sc1EbjiYDaF6WHMvdrpEVgfNLVsVq",
  "key17": "5q6TmFKzJF4fjKWPHmnPwCLJTm4XzcqQDN5fg7qdnsBAJBSR5GThCKM3USpTPhAHskaukNSJu4uHBdo6yJTnvFn9",
  "key18": "2phk6rNcbbw2w1vsKYyFhDBJw48Z4xkQoCKMF7GBzV5ECji41SQMkDNdKKUThkUXffHCpxcaeSveP1BBsRqVmNCy",
  "key19": "CX3K2Um9ySwEDiwLf5wNYh9y2Pt5r7JusyCdWsKQz4nnMpan9Wj1oJjh1tqPun5L5bSJDE4nYzVZjs8cH3UfJUQ",
  "key20": "3h3DCAugYriijbmdEWy8gDJdpMCzC9SVMWWhnXfQxMFsYRVxY2QJvkEPexgtNcZQ3JtmFoLJNKHhyVjujJwVCn7R",
  "key21": "57yUibcV6D1GYY3XEPEJ6jAwRLhzLa8i6CufGQrbmgoybpXHKh5mkyjVSPYkxtCrmmstpfD95W6YL9N2AiGAhyLW",
  "key22": "5WNJgrFhLgiSrufiU8gZr4rta6wadWR1M5LHmemUEn2nNjZ2BooAU7WCa8ffMVbZsrBLuCah8Kra8DPJWxk3mDwa",
  "key23": "39QeALu7PDLy4LZ4Ve4bGvfmQTFjPZpVBefVhNqTX7hV4CsyYQMmSCVkGuQQJVbkE82DWQceKtgmwD1e5oKy5aUP",
  "key24": "51183wbmW44s9SBtAqfVvD4dB6Hizk5VfhL51PxgK37CJVhu4XbPzZsSMaHvGmQ1qQ8Kruyc7MQf4LNNRrWMQcNX",
  "key25": "4CGBCcbBFeuqTPZGEbL84ECg5yzf3QDsifAaRe375gU379TPEpAnNMnW27e7p1VN8dpofuGVy6S82UTuaGpC9vuJ",
  "key26": "ejnig84mqkBv2nwUSQbF7eFiGW6HkktxA7NDZGFjnpA3Sa5BfXYxd7g4JbZUbwza3dZRMuEtMgNpNztHGi4Jc6H",
  "key27": "5fTd5izF3DQTKvTycsaS76UaWzaZPTH3zt8iTy9i9YT1My34QGbX8PewGoJWzrFYSYfRGHyLEkTvqnFVtAhgG42H",
  "key28": "5nKzaFNJD65igfWJwTg1fazPquNg4VB78yt5pfFYQBJLpMJaYrYCRqs2Adk7AutTKCXRU1c4aJCj7kNfEsfJrETv",
  "key29": "34KMttidHM9s6UuAX9R5erYnhdNXR8CQKtMWdzExEsrWtjgfL3TvNeyMcdE2tQGxVwvcG1CATbciV5sn9UuiofVL",
  "key30": "3ZnfVhXUEGpfcnmt3M2oWahCsuze4fg7XhapJSCyVpxWnWmVdvnTu6g9HmH1EjWUUXKvAPyEq8uvSm6ft8HmJjhW"
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
