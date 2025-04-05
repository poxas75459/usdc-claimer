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
    "3HxoPunrxpsSogyeH2TYxgZgPFLh1KDM6bjesqDL1csKAqXXRVf9PsQzvuhVHWXCYjyoUnZevK3oh8rVhogCjfMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c5ivUnD1TrHrX18mcQ8y7XzEGUaN1kHZU1JxptUDVxnrnXc3ZxJz4tMNKbzPdtKhXAUREFL4pfn134L8rNFUhT",
  "key1": "5XWVKxcxZMUhVzKw72Rn2tbKj3gcjChiasyssYCF54x5cMnb35mLjpwLgDT88h6b2sgvM2FPqgsw11iRqbfLLu1A",
  "key2": "5U278NwYodgU8oPknR7UoiEwWcoi6pXa4x13rm7ZzKXmeuo5rrEDyEwTXDisoiown6tSiDv9xSpiZCsxoG3172QG",
  "key3": "5rYZ2FXf8WgDEdYZt5Cj5aCqds3RyLU3oQv2xwPr5aG9HzpCwy1tR4K7iiaki8m69vqQFfpon6kRfUnwfvJiXwte",
  "key4": "48HxhqF6H6t3WAgfLtAj8tftp37BqQn8u8SLs2tEe1fDEGvvhErEaejxquLXKK1ZxM3gzx9LVeSaKooyeRCcy5JS",
  "key5": "3YsBPgcg3WAYYW1c1ywTZQWzpwvnEjtYuFtr4qyVnkv9vTsSGy5TvER3vvog1Hx1KtKZWciavrbFTDTtLUzbgKS3",
  "key6": "4hBfcCGkzTT3WmAwTaWtcF5uUpWGYu8Ty4tBkk26d1F3LrQ6Af69dB7n8NW2Gs3aVesHt5XsBFcbMkgNUXxPGuTw",
  "key7": "5NFZ4dDWfs3YpVA7ieYTB86MMD6c4uLLjoe7WHaDf17QNDvLLq4BqVofPjm6gaK14pw3rhvp1VsUgqqHFr2n1q4t",
  "key8": "58CiCncPHpjyCB9Pg4eSCzHR3bNape9HtYZKArdeNE91T5yPg9V3fbzpvBgFGpVXxU3hy675nW6WX6uCXpce64jW",
  "key9": "J7ZBnV1umeyTQZ4Yu1DohwtuhVUWEjPsSazGkUsgT8jd23aMgmJFevyEYd4ueKCHRgeeyarrY6cWGkxRigPU9zR",
  "key10": "5CKacET1cHJhi3WNqCsCJLGM5VDFYPB1ZTtL1X4QSwYMZXQsh72fPzzGz66zggRrqLSjo2F3yq9iYSyrg9wXBNre",
  "key11": "4YDShdjLvDEgwCHg3gJeAZ9YaJGRgzforj5boQSGFZSU83fHdWtDFUUKgq9BJCuCiVxdbi98SroF4yWKSXttvQPH",
  "key12": "477CGGKT6Ha4GT49tzX5aCdAfH2A1UE3UCxSH6YDyixFFNZhg3NhWwxrK1gG8cabaT2gqtM5RR2fGUm5ggu9y3AQ",
  "key13": "24J2QMwhPR3KN682nLYUjzA2zhUN57Un7dpCC4Aj2UqQ7xVEovcoxtY1TE9WXVPDD4imZoVWH95HMcWHecA84gsk",
  "key14": "5UAWH7WwrwuPZ31cy43d8JZEBJpgKi5d4SZMGd9tibCZkWQkG2cBUcvXYEFsLa6kwdNjyXTYCMni8iqU2B8mXexp",
  "key15": "4ccYgiR28MxvFNMzFh2vYpDMb7XwNY2puaAjnB7GNfjGhLeBW3GDU12vFre5wdJRBPSrvKYfLFZDoxKJxA799owz",
  "key16": "4VyzrubXYM3v3EaowmYL28K716LJ1KArwU7SpdZj1o3UF1v32vJUfh5YfuA59C3Z7dGBVUWEAgYpK3Y4y2bxVFtE",
  "key17": "4hpBoPQnB33KpwMbS6wDB38MnxftJGu9zhc48uPx33EefiNq8rBqix3EbwMpEim6KbZ4wLPxgaF6nr8wjQtDQKDC",
  "key18": "43ijXkkfybZU3BkvgEtDCUYYQhgXqsW9btunX4LSkT9FLNz1Jzibb5z9wn3Kib9NWVJh2TGTHPb1A8ChCn6YgK8m",
  "key19": "4ap9prGHbKWgi5nWgpYSCxrzof2n6Htqr5wGa1BWLeChagJnhcBpZ57c2vAGSoay38cWZKi64da2cMqUxpKvZH9v",
  "key20": "48NEHwEQc9iqLSK8WBTb7tcKRyn7ShSDCuH7YGGrA3cyaWN1K3LSdryuEKrSBK5QTJzC1vw5yCXHewrac159DYyW",
  "key21": "2aPJemYmLmhqX7TDqhM3sFpdyNvs7T9qNzZqTVME9XjFwS3M3faCAWgAWCb9ZZrzLowcq9VktggfUWRYBBxjcHN4",
  "key22": "3VhYvwDmWYVRWwFPVd5xr8KTVeyDUjjHXoUeggVhtjYKc5esdAX3WDCptFpDk41R2Vy2ESXdJxuPtVozbkUe2rpj",
  "key23": "5msniL1CYu6bNbATn6UamyGm4RZd6zkKmDwPVGRCgHz2ky6tre5y9xonxaBBR8yR6zKoeMdh1YzJGKHgu6MS2LaR",
  "key24": "2Qc6HwPLMUUSN4uWjLVZWwYvEnyKGfYPK4ScXAUXBtSc2NzAFE24Zog8JA6qHNVUGuk4hiBEzE5rvwFsfjbtkN21",
  "key25": "5LFwKa7puKYZvfVDEj9hRBgXUtjkdgoP4ZYWMZo5Y3GnZqksvLppMgvQKwTdAw7X92GCbP1jpbsEMJhNuEpHVKvr",
  "key26": "4roMi3nrHgSmsX6KhE2vVguForgspmY4vKX45U38Nfd2hNCFyAU63gB3QUoaLheZtZ6p2wTry1jTSquS84B2EPmi",
  "key27": "5guSE4SCcFcTbAQHkH5vxdm7HSJ2zudRv7j1xqwcEHR7P64XXpJDnFbX8FWhcZejAQiMwG8kDMFsgUqsRr3aQ2Cz",
  "key28": "3HnCZncDP2VuykG39SaFJ4At7TgK1x7ft2R2MkvSGkWACuGN3cdpzgt3q7Z85duoLp3sWKmpBfaxsmx4hko8zF18",
  "key29": "3GCotNMnkPqVc7QAN4hcmG1KV1rcU9xYThLkSbTsZhjckgb63qLMow1TVUTAb2EHksoDbViSrE3CBK3e4pnK3Ekf",
  "key30": "5RfHzZQecjNayxBgdsj4QeJcZg3jSACw7VNVXzp7iR2XNb8veruoe8yFhs9wFdEdKT28ZDrviZXyAbpVV498CDGo",
  "key31": "459fmFYpq2Yvt1sUvHWvAeq2KqVxb5zakFhGWyaYuWZVe6RgavsJTQ1RUUmAqbE6CWL6XTTziP2KNMb8b9q6NPmi"
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
