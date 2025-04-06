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
    "4dT9oEovBe9uwbc4Q6i8HueZVUYAsk6Wg487pR18xYbSGmbkjzedxD7ZUE6e26PSux6bnNazrF1WUb3g54Gr4Wxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cn8UkCYRQB7v9jppGxcVbY1KNAV9gZ9F8ew2f9uL5jmuKmqnBJWtxTpAtw4E3Qf5RrvEHyAu8m7QLxqgfim8XLS",
  "key1": "224GpZuPC3yP1Rq6skVniDGtvFQREuD379X8PTj1Pze1qukMQArzxL1WtKKqAu6n1UH7KjAtwXrfjcV6P6KE6GNB",
  "key2": "28QHYprKQUcuVt6m34nAY5uwMBfgwWMqoCxPhuqHZSd558MRWxYYyM9y8t7KwqS8mPudKWyqYk9JyBa3GsamYDVh",
  "key3": "5wsUw8wzUV6ZSjvze8CYoMrgXisnkGofyerzgH9gXkHj5h1CsV8gpRBSdY7YVZhY8QMjRGeydwRtNqT1LM2obC8u",
  "key4": "3RNoahvbkfUvM2nNxhJrmaXcWVAbswjvAcNNrYpWtqCVk8xndojgTydRfKcFg8y8xBMwsLWMCCWZRkxmffAJrFMh",
  "key5": "4ZufWq6WsZWkm1yMvEBVWgH4BX4Sw1pocxshUhfqdKg7n2YQFs8V94p9VjGjppXtQqketMNXXaN2HUfmm6aQPgvL",
  "key6": "4LkoHPMS5XFPdRRJnqBhNouJdmLkuTu6Zs5z85vpx8qo13WupNBzNB4FdzAcvTTUCh6Cg1Bp3xY18Yn2EzvxpKLH",
  "key7": "125XXcX77fdyhwSA74xaReRAGm2xKfW7XXSTYLUkiqCe6KeZu6eVM76WDMAPxs8ZjNCjovYyUXYq1hqy4FsvsuVE",
  "key8": "5w8r2v9GW5W2u33YEBE3DvktBNkQzBKo44FGdX8U3C1tReuipt8XaiYX9cGTw6qKKFGZ7gcECjhH5s7esGYyFRzA",
  "key9": "5dKJPGkQLHEado2hsBeAqcCu725BSjAJXiGxuphBXcZkhaPcrBD8BwKN2BwxUv3WgKarEFHGD6ZQjVZrc8WaRfVk",
  "key10": "5N4LWky8gYSxaAQ41n2MNdREhdu6weXvsGsKKDbNQxK4h5duBpKa6w9w68CvPv8j1dHpgXBouLgbgVjmVgcp7d4S",
  "key11": "25UXFeQ2Qwd3tqYxV9XWahAEVVcPDVSFSxLa4AG6DTzJLqgPoGi1pFfJrodgsaKvCF5YWsQ1eYY5tgs246VKf1KM",
  "key12": "2oozN8Y3UDYYjznXRdCX5TkF6r7bVLiKh9SUe474B2zsfeLz4qyUopacDgdiW8mBGCNvPonPhurLQ1MQNQHFGTM1",
  "key13": "2D1MrGmughuTt2wX2d587kjGDE7xYTUeQqmcxZ2Y1HiJAzhBDuzEtXNnrBC3N544mUCwi8u6cq9AwZshB7CxvBv1",
  "key14": "4TE5gL9iv1npX2qkrcnqvYBoDwRo2M8rnSokAgPChXSFcx7ynCj1JKnqfmwSRr6V4VnfpSYKqKZ62QSszfn7J4EG",
  "key15": "5Niv9pGwNH8fwzpzvoFaW3eVbXzZNyR8FxNWAhiwaSyMF1aRVJ5HXNx9JNaXY9rQkqLpnSF5zmnGH2cfCR2cbQKi",
  "key16": "65YLPHUwqiDPMJgSQCFBvVmQCw84H6W4oH4zWHq6xuNBiCGjK1YfAmW7gt8eyFe1UnXg4LbcaiaJ8Aubqb5iEBsm",
  "key17": "4TGVKfZGSRW8dkEbDEPrcpfmwwgD9UTFfyphyHgRoubzBQYo5vWjh1PBjN3wfucwhc7jvH3887h4uXaYPv6ossBx",
  "key18": "38SQLi2nhZ76rXNV1Pe9TiRq8ytJ6zXzwSEw1NXZVG8E2DZiH9QuMKjPoxKqv4soiAXndxMoojUUogkqcSCUJQ3n",
  "key19": "2nS8XQJe9yh7xCU6uZiwWrups3k83ecYYQY2ypsUxTVT3ypqTepQ4ZJ8Yw1uTe65vRwni7Y65M8vpW7JJZtmaxos",
  "key20": "eHtpEPGDm9gqccZFJfxGAGDz7YfGaqd377JDpmsJxweHNPLp2Y4tWecix79GMgH6Bjs6Wfhma5MFfGrFFsfaEaJ",
  "key21": "jc2v2DaLAch49btXLJ1CStAGrfrEu69GNArUWso4U8ETRFGDzZk6MiXJVMRGLmzRWxh6bUjWe3zsXaZE3vX6Q65",
  "key22": "mehhFGszL6s3s8kCjnqwjPxaa9nm71VeW4fRFqoH91ZrPAGLXNUHUSuKApFEUnrJ26XpghFLSKnwpmbP251T7C5",
  "key23": "2w6SbXjurTBeyf5neEq84mdn77xeYidCN3hn32YKB8jfnZ75Ghtv4vSAyY8VKt9JWgGYVFLyaKruousQg7pSxtXw",
  "key24": "31EdJTfEXCPWxnysCnkhZBicdfSTLHPmicuaRSFFfRE2PAFTUqbuWHJbQUNTZJ6v1uUsE3MViT1aZqe2Y58aFk54",
  "key25": "5JCCvuLKJVJ4uJakLqaLGye8JDV6KmvW5Jfgs49x4xfX9CGunw3U3Ab7XvKNir6FwAcPJMK6u8Nav7WijYyjLLFE",
  "key26": "RZ8PizJDGpKPhEkkeiZMUYFh678eWcwU6TouFQP75QsiauL9NFackQN1U15Puggr2rmUJnciSkeK4uCz9b7xCk5",
  "key27": "23DmnckrVTcWQqPs3TZKMYdn8NJUFPepEwHxPt5pTWgBUQBr4dq5Fm3ciGJx1HHhEsLK5d26R7BUpHvmjqikF4AP",
  "key28": "5PGXRSsSQ1iAvnEzyM1cjF8ktUQ3egQDNnDUPK1YGHFs6gryqe8oy8BaNiQvRDxEmMgS1jDDLYQL1uKQhxs2LkTr",
  "key29": "3RY7vwhxF4qbRwMj9iMkV8Upg5Huxo3KZz1T4Kge2kqw6CrQqjda1QRT3heoJT24Srgx6g3abY6Twf5wajCG3Gpc",
  "key30": "2uv2Z9AoThf4JicFXcqArt7oe8ihJYVk74CSiFEzMBHx7vUkKx7vyZo8XSUBBE3knAk7Ct2TBNzqYFhBnZaZbp1U"
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
