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
    "2RggyhRyDES84DwCT4DqM8xBpN9WXwqSPSNqybkFHBAGLJK8yZkacuxNJAnyBMgRSLpTr8VErzeMB4JnWoUTMht9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vrNupz1e4QMLJ9zzu7kstWJYxccy5WVMJGvDzz3cNiCyAt4XV8HBj2meTqZa3ZvKqxizW3YUYZeod9AjrtHSBoS",
  "key1": "2pMG1vagJcwZsHssjSk5yWc3UY4YTS9qK2MBxx6DgEbrkZRgYuoEEowdE5t4Y5RSPKWQDdSfPHXtMy9d7dZZDJHU",
  "key2": "3m7iBgNnqHatdWGrVZoZ47hN4zd9qYmPiQ3tfL6SjEvHvHuF5x7Vh7pweBwvWz6k9xGfNrn1E8zfaLyWg1r87LLp",
  "key3": "3LWKovSKXhpBWjQMnnBGzcWLBprDc8opRwgbSaZinQX6cZgfkDDHyo1JPe9En6oRVpHifnBLCrb64VMvBsCe1dJW",
  "key4": "5114H1MrYLsNVmQDcPjthetCTjbWzRPbfsdzpP3CNEiNgwzRyukTWLipDabm4CugsbGNxtyoqCzXNTC81zskHora",
  "key5": "4DhdCXziU7sZEKhCPbXs5CjetNLnSygL2Ko5yoyX2fd6LiSgyac12MXJgEsNbJP5cDfiHYqpmygprq3g4xzLiDvu",
  "key6": "4Khh7tbJi5xUo2WFrvVCvsmcc4xayTJUAiRFMokFAnZMcMZrwPzsA9h7wK8F1YZhG2bBVv3SH8dAmEecZQsYmoop",
  "key7": "2q53khW5TBBWWuuPPsFLmScpgnTPf5WdeNkLeicxpRzhhNkkb36w8vpaGzZznLuNPktXWE6TKYnKEvpzm9cjEccW",
  "key8": "4VfmzQNFewZTNGZ83iZdt6nRScJMxiWzGa5JiwE4UcjdDjwE9trRESbawFLK3skiMgQjtosu4R3168YyHtJPjmqx",
  "key9": "2JNcByZEdKJ22Fqies1hvctmDhiYeBDbu93mHo3o6PYoWQNcMshrxYrg9jpgiNoGnKnH96ekx53Bkds4PFx8px1J",
  "key10": "5NC7Lr1gD3v7P3HTC95uAUp6ynbqt8EMbyM3iEndMSeMsJDHw4AYCtV2dUYoMBMuESbmA1grmU5vnKcEoWDKC2KH",
  "key11": "4gd7wHzsfmdyLmMQ9RhTLZ9PuMZHKRo1v6Vhtozy5u9BDMCAiU4EGz6MzZemwfHRsxPbhkpUQj8QrtqEqu3D3fMi",
  "key12": "3NAcYAnc7ABNKiPSoq79icBKsMzpkEWJpWRw5MiUvGFbsvaeyywuahNWgyVAVHEofu9JR6yeyqToAz2KBw6tY3GP",
  "key13": "3g7d4EAs65FtRjZjez23VaXQdo1jxNY8PgV7AqwqzCWB7AbzwUmcKVvx11ytcWJyxuUSfyK7FShLNJXZKURqHwkV",
  "key14": "4tp7TLaAYEYKk6ueCYRqXk8kUwfuFgnHriuYUznWjyxTTt82tEye3GXgBjky91MZtv5v611DMcCfUHWDxq888Zaj",
  "key15": "3sTN9GcLG6ZsNmWZtuVF66AYeAXhJN22tFG7po64m2PLNUKWzpjReubkMapLCi7bQe99BFxcrDvtw7RDdwMNBkRj",
  "key16": "4reh4iiNzFgje73PhEpkab7B2yV7Uw4cYoAiR6iHbYSFpsw4HKmoJruRiw1ic9CXcggncob65DBLWtaSXU1SQznd",
  "key17": "58r3jW4DSK2DY4pGCiuu3jPuEksS41aKzEf59zpbF2xkfy1idxCssk2UuSpjg3VUuzarVFKofo1UBvyWp9XV894Y",
  "key18": "5K3jiTqpm1zffopumGf8CnuSmUXDvfGzCBvzH2yLgFLv52ioPLVkFZj9WckTUjuhJaV8pvUqXTw4tBKmPVaPisfr",
  "key19": "2JzW1nU5afarbY9TUgMMF7P8hDuiBZ9t6gTgsMPBFgMSmoGnQj8CrNs4y5A78DcTyqKhfHW9c39aAq6FXG7xN3VB",
  "key20": "5BqUR5VM6K36vKLTLxkdaPjF3BF4e57vcQL1wrkQ8PYQenEMunaaBkiYdSEKJzP3UKdn3F2pPGupbFheRhoRZcED",
  "key21": "2AMuPxYGC3k92JPbdr7PGsQM6MHFmF2gKmiTtoQD1UH3h3ktwkdyx46L6owHv9sFYczZhf2tZtgKGYCkiFgV76ZU",
  "key22": "4idVk7KVuLXJAoc6Gt7Ea5LPnXSxs5YRqxPYMzpR7vLEYTcuJgDFYGKxWtWMytLvhkonmKffd4bemAzkozQDMDcC",
  "key23": "3c289Lrg3vrjYkmE3kue6rNN1RVTAsT94SSUoPfHjQfgnPkcV6CTUV32GpBZFM2GdJB8eqwXahuwjgFmKhVSeFge",
  "key24": "3oCqQNkD3Ax6p9EqSBMmcwszDgkXxjxzAqcqV4rjGgc1ywnwx97rrBeaf9QAyH3sPC2pzh68xA8CoE5tw4pGowhx",
  "key25": "2cuHFXhCfB7qmeUpGD6TDUe5RU1PX9CMYbGG2YH27YpF1vzAEMU8n2cjuGFSZyvM7tZJ3Am7VRqBh4fUGbniurr2",
  "key26": "3eZ9fqZ5aERvh3hRHxR5T9eJ78CLj1KJ5mGxqDLqsSLgrqbe3J3tnuJ3tbKWaefvDwMWGJ7VxJkCNRnyofvWxtcx",
  "key27": "4sTqzXzJNbndLBZXHkrQ543R5jJj3QbiakNQ2fajunqPAo2rJqD4SxUR9EjZMqR5Pnqo3fbThjU7Q5qzschHLLTP",
  "key28": "3kQNZjerXjsfa3pDZ8Z1uXG8qebqRefTMTmjkwejHp9JJucLwkNW3NB4nkymjgmgiWFCXargBcPmFrisbXbPShNk",
  "key29": "tK9pZ3bMkdPKwJnpeUPrpYTD6VvY84Sd4SJLz8Yexh7ReC6yQh1WKG8JYT2VXJVhSnXKZKEe4TDVTx3MxwjskHq",
  "key30": "4q8DHsvU7FoMPnebP572DiJ5tXoQomZaveyiWkQtNJ4sLgT2q5kQV53ew3iNkdaFnkFujxGunJC1UJMMeYXT8uAj",
  "key31": "cG24q4K6NqwusWWdkr287xJAFewdLHnufWCC5ZZZ8cA9at83p5z7TVNGvPZLocg2xhxnC4Hxq9tHurqZEF7eVQa",
  "key32": "4ppeQGdGgKagbeowPiUL9e3yG7FwRPEhNv8kXRFHEWCUiu8q6ibQSY9XPwsmZNLq4UvyZuJP9bT7sSwuyupVvnQ8",
  "key33": "5462Gw1JR9JjGopwu16joJmmXPgHXhBYXC31gtuz3EAXbaX43YYRN8iPr2zVkFoAXWXmVbTn5UNYFkLTEvs8dHvn",
  "key34": "59c9z82YgvRDDCabcAawkpZapuKZEpqD9wPuJ2PWAARnKNtKa7SRtrh2qjHzZiRxZxxz5xWsqDZMNkJ81Sg722YA",
  "key35": "4SShwH95opFVh7yBUbDd5MepV9WWrw5diuEWWSUB1fXz6U4AHtGWgKbUKe4jx9quFGmsZbWXXeHHksYagz3PRYUv",
  "key36": "2TykzBtu9UFtnhh6JiegNvnBc3eGdnEYaRyeDfWPrvnn5jM48ZfqjjCzVGceUCTBuQjj5rZbTbxieZn7KPbZh9JJ",
  "key37": "4o8NeSyY8sjVioLN2tPecBruxegmTPzskBBqeh5yPxF4oMCyjkKF46oAHcxmAYnHPmg5KNRjVBs5jG2MqoacZRNp",
  "key38": "2WEMoiGy1iCRP75S3q7gUVF4Jx5DxkJHEVPmsyXbozWba3UzoJASXbpQCU9BXSMthdMkm6UevyZzTk1dzWuDnqec"
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
