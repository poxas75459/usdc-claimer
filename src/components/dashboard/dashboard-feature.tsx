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
    "3sea9jFKt94skWqMoJUQA5JpjDcooGobjcHm5AYxX5rCZBrTmXachfY6CwvYBQcTViH9YyLTNAbffZqZ7Svbcv2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1iBUKgotM1DYykMRy852ujSgaKywyt1uitc7cbB3dPmmnsT1k71zsDJ568ddVwen8S4sSfagi9hKEpUKLQhNSXE",
  "key1": "2usLHemQuoVknQh415ZxxvZeSeuNpw7ABSwLQ8gczeYXCssX5BV5Uzwi6scXV5eEnjQJzjqu13qCXwK2qdT1Gxpi",
  "key2": "658MXD3Mumw5oebgggpCgEpBVFbgfNvKv746BJfa8ZSPHF3hV4p8kuAHFGZ1cMmTjh5oT4JJbxukcXiKkVCxqhqA",
  "key3": "4yHosdJZYsSDaFCgbTmEKiYdv1Rdm5fcvHQj3r8P8yQ68SSUmKHaGkXZjx8whsJNXpRkp4Eahzqf57nYRsDDgFS8",
  "key4": "3h8KxSG3Hd7SQcgvEtVpEj9b7x3wHYSqz7v62ZoUm1WpWwHiTJNUTp7692qzeZRjju7Y9eaMdMUAxUhBX3oQZpJ8",
  "key5": "W8DjdRhnnx5T3B8cdHGak7HGcuE9jiepGBiz8naWATssXFiMbE9gFYNtJjF3Yvn86VAcAZWTh9PmV4SRc9LHe9Q",
  "key6": "BiUUYeX6GdCsEkTrqijyzLjJsF8yo7SofgqtRo4uSrrM1ohhh8CzGxvPHhJhaAJyYJTtzocmE2SzYMNoqm7CVFk",
  "key7": "46jLQsLtg75hjXTs6M2o62mtSKiha5sqxGt7aLuMi3yb5nBzDPW9JqeHBvXoJo2hnSuiodNzTyexavjWtQdLa7Ps",
  "key8": "3qyhCXxeTEVEp65q4Zo23zWXRc7CnHmPMTKs5jHQkXgiBct3cEW9YAKwchQkAVoEkuQUqFkyuWSVgZUgZwivjo7Z",
  "key9": "2iy8r5ysgsMYsxbr2ESCx9CXrwcSfq2ENUMkbzCwBoVT8nCBJSRiEZ2ns3Ht9iwH6fPquUuADMW6rW2ogGqoAp4K",
  "key10": "N5Xyd8xpgogRQTx8BmCBBq2K5wFnErTuJuzGM5fiHKDXoFQ34SdeD6c7JzMWLBBK6CmxTXJtkNv749Ar4cq9ZcB",
  "key11": "5Mq8fFfyjoRwcyPRbHFNKearcpCf7XFfDrbxBTXjLh3yS1fmc8zTPyJ1uRTDiZ9N3CrVhSqugKnXd9b1wi2WoQ5C",
  "key12": "5V3Wrkyf6Uh6aTCZua2aZFahJzfPr7WRroJJcKVYsnB8ZM82W1J3h2zuTMfnguVa1hnLRzTK8nWHLzAdAyMvXnff",
  "key13": "5AYQMdXtPjF9UMptytoLLVEKoGCAFDturcHaZb49c5bbKsF9NtTNvWpAAxF2UJsPqj62LxSeaY8ydGCtZwsrp6yG",
  "key14": "2agEJFa4ke6jEkDqzKUeY56KS3epXSQi5y8Hm5PAZRcoeNFkF6jd4mxPzb66FxHivWLJDoqKaR6TmVHZuQgTGAEc",
  "key15": "4H9CGi2KF9dZ7iSjBKTouthcceELAQBRLjykiGYhkLCJFJG23iKjQ6atNUrFm7nQYX816eKaEzRfZuKAH6cCZbzT",
  "key16": "ZEeV4ytBFcWjpNHxgidkXe3uQumWhfc8EkBfqanUsR5KMYBZAheUxej4PCKWSNMsjzU2N2Z3tAAbtx6SCKXPbGY",
  "key17": "31SZa4QsMJyyrENqAfuqhhjPeJeMMa53Pe5JfKzaGTbqgQPTXZmX81GVXK52PfaBPsjr9HQNvpiFVLd3KagJjLdJ",
  "key18": "5PpQTYk6TeeEWvJekCtq6qBpN1QCYA3QvpgqqHyKrR2sCcp2FrcPF8rfJdPrTyXfL8xJWVvEy4Gn6eLqGcz3Y1jd",
  "key19": "2y6Qmwj9Pbd1yyYn6sQEJRKtMi6Dkwfb482LH3KQ33m6pickknrxA4Hb8qbxKKkojoU2fjzTmSHydSFoWVPTt76C",
  "key20": "4XPxhKcBpMnjKnxsaf7ebVWZhnFj4MzFowq3shzJLdto3xgn6Uwm5nPSt1PkBo5ifkUd2vQweQJirGwPb3FYVM1C",
  "key21": "58V8fUNA3g8gbaZk8U4rhUDLR6QqDz8rdeqSody9YTkzM4Wn7BxNoNZWKvrs5pfbVDrQy2FPKkqPZ1i2PVbEuDQu",
  "key22": "3Q58SuHHmnLacs5Sq2KtqHud8xidCToXwYeesDaqJ6Qh77jZe9AkhzR2aobcMgbQsnNnXxc7PB5VX1M6cESknz6z",
  "key23": "33S3nirVRAenFijG6SLRwbbyWgDbXgVD9KnV5G5PYrSC2pmWULn9A31Nfwv8NmoZsHTsnhgYjNWHs8c6SJVRtYXy",
  "key24": "pbTEt5zGCV3Rv4BvaF4aWBJKjZJCMBGZiamUwd4W3UCJowNYLr8rwmCSNRpbT36dBMTkNoDd1udHiwAJpyh9uJt",
  "key25": "3EB52mBXp61C6ARmSmtrcdJBvvCLAkt6Eiybwr8V4oPx9bSC7XhzMdwiBMK8dTB2j13Yb2PAzwps6o748pLpjdK9",
  "key26": "4X87pRriFxgDs2MvN6yyoMk9T3kP361STtp5paffs56kt9VxLqTVKoB2D3GiyLSAXgVaMUsT9k63eAf4M7gwnGNK",
  "key27": "f93LtuY8rEJizDCKsmmmdPm4Hv4eud6H2SfYfRbbsYFXnC92uPGK2FPJo9cTUztrVaGAXwp1A5HqzsQHisV8V5h",
  "key28": "2vzvgRsTifRrFWxwqWbz1SgZt44TvtJg8PY5xJk4TRpoHvYGxLbtqYYVCydaiiqWoYqq1h3KbXCKC9DrfJHGipZM",
  "key29": "5hWbasyA5GcJw8bjwnaVdNz5odmtbvuJ3tsVELqGR5x92huCRGEHZ9L5rwnBreozDihf34BWaMs4XZKBw1cnDtaC",
  "key30": "648g5kEAHi8Sf9GZCb385iwvYuTuPqCLdmcGkeiLfdX2rfAdpdYaw3KD23pm4x678hZPLK74tfVdUVmDedHFKrRk",
  "key31": "5Q8wzK6cQ8k7hTizvdX9FCRPUstqh6KWvXm3FfggCNmGkAySGxDnBZrFSSDasKMjQ8LAYW16nJ1P7MUzZqvY6AQH",
  "key32": "XzSJfa7iLwUqkuoyYKgc22cogpwbCPXE2RxcY2qYb39Le5SWbZqsA9gCnWLT5e3ERmshdLgd6W1Ed9vSC1SmHCy"
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
