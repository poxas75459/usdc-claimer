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
    "4uhd6hYwvZxyRRLSzkMRFNmLyNiuGmpY9b17e8iEKHfSinZXdNqyr2RpiZzRqGimdEDoDoHDzYgjoMfa5KV7aMiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KXNDGSNsT5ebrrj5iwsiVvNqnTqqm8ZmQYUHVGWB89xdWDnCJiRKDcDYoxzifvQvtmMYCRdwJgYgMSuagYkc8dd",
  "key1": "2Gg5cxe943AL98ZrTJGd8NyRNKZ8p8SmjGQF3sj8ZLW9EwgzLzDDRRtNbH194KM1aKZqe9T2TKEkj7S5KbKLo44S",
  "key2": "4ZZQCN2FqTdC2ghRJRqEPnD8EkyuyPv64nwjNiTLU8i624K1J867q2pJsTu4t6wYmKUbpV68Y1EKjVRXzTpo9LA2",
  "key3": "2wRdXukQGGRTxQutTrb7guUtNuAfud6x9GPC1UDqbmk1ECphh7EzomxCTg48rpVaFCbEuDHhAN7zbH3zVxTCX2ie",
  "key4": "5uzM6F1gt82BSKx8i3bXqDnzmsuLT665LN85cGw17GcVZB8FRPRwrrRwq38odoz32g2h38HxtqSVMzfwXEHhbShD",
  "key5": "n3zuKxazemKGjAxgYW25o1aFb2HPKsAHCbzK7ChTDREFpqSaMi4YwVFYLmfvEpZxpGPJktSKvKgtEf22CUzkWi8",
  "key6": "4jtCcZrdvHAp8ZP5XK4SgqkhYYUiLg9VpimjwdztBaVMX9ahLBZmmo9xVFNsCUPjD4cpUn1R1HCLowNngGK8Lqwf",
  "key7": "2di3weeWHX1mo7tvEsCaqXtM9JhaeNK6oGHQk6GEiHQi9dA3ka9Ae9Sc5MPJBg94SRGMq1PjtSps1LDFKi6Sbhw5",
  "key8": "2y1cr4yXFFy2vrghSbr3qYuwfe2jtvpkrfHfKq1nPYbY48pYQird9t7HwqQqkjVcDMYfKAXVFAPo2dvb2i51P27Q",
  "key9": "2amyrCFpEgqXTNsiaZ1LhmUqVXd86dCAa3MNETt4zjaW4Jp9v8aohvQx9pgSnQp2BER3utZUhj3tByx1s9tM22z",
  "key10": "5GeBoMiBMmysThMbT2fwkcEpNexEMQLT4pzzX6L3r6K5pSrKuwbBXM7PQ7BBqRwukYuNDYh4zoqR98pRMfHEwFjN",
  "key11": "4SF3PAD3Bf3PixCgbaH13uAZLJUCqjPWCMrS7VED7xfxK2jzHfoDieiNsQKj5c9aMzKM3KKHRFgeTVpNWQY8KFWT",
  "key12": "4zK7vzAwCd95zscim1VKiTUvt3v7GEcmV7vKiuvoZfiVJrq8rDagRNAqwoRHQWuWADRhPHSur4y4ecgzSTrDZfxf",
  "key13": "3eLdES3SuriW9TLmT3umQYakaFYonxe2dTLEQciax83427ewBi5qM5sBfRn4NGfwehSRzeCD3XpngGHs8JQNwKJE",
  "key14": "4J6Cnv2uKXzjAXHi3zZQzrRWHQ28XCLHxUew7dEUaUcpHCaPieRczjgMATmL9WDSrTw94BXi3EYgt2CmKBx82Hno",
  "key15": "48JauiaHr9RztG1eKvx2JzWkyrzbgcpXTzKpJy2VNTCgVRTLtBsXc5VNqmpHPzN9VHjarTwJVXgscXVxLKTxDghk",
  "key16": "3gP7pS3zy7tYgTve5sEe6aQYjf5M8r5jcwWi229f9bicds9Z92CBEx9DMQU6pkBFZQLnQtAJpWoc9bVUhx9xurHj",
  "key17": "H4EfFqQHQCPepRUS9w2o49buiuGiLBLGpT8p7j7XAPHjybKUi4yN6C5KmquVD7gEqLK3mk6foowu47EB4bSJ4F4",
  "key18": "PpwDhPzXhqXuXrKqEYXqBYTkZwkx9QVAqYRETT3Tx8QdhPmAYsYTfGKcF7Ebmr3hr4WPKSnVsGWK9SgXCxfVDAY",
  "key19": "ishWYWS1qdUtwGJWPcMX22HV79Y9yULMQ3rnJb6XtAErns8jxJJhZtTyqzHxaZq16qKRaJBqKtphGvJeWu3JLpU",
  "key20": "3EeKmpykzXVJ7wDCLfPeXTuSqYJZq9SEcFVZUieCHt53XuYS2LcFMni8gVBrtvS23K5LDDpxWEwYKYSYU2rR3EmF",
  "key21": "56Vm9pLwqvzuVATFN2BJhqXaWf2RNnHiyeecBeWqPZTKzWUUZwzBdC4pK21DcpiZnrHMv2sDmHft4ncV9gkkLj9P",
  "key22": "4MQ2E62jg81QGHYG5GUobtd73nJ7XcbWXxzdtf3VonCRvT5Vyn5zLkmeAWjg3VvNi6GoC5KhUw71vcFfgcSazkwx",
  "key23": "2Fu3moZhPCKcWyTXXqiXA1nA28TMVdT5zvaPB7YQ3kbrTsW39Z8wLuaPJu9ocFgKCZWpVW24vXGojsA46sRVheUE",
  "key24": "3kmFsg8J2fVyc3JwJt5vccvzvjxrsb19D2ckJAhDgM79bf3BkxRw32nYDXgQ3v4zoVMhZQVnQvGcerfaWJs3Ramw",
  "key25": "2xgm7MQ6bwWzVzny3dvDJQpnzpJyTqhcT9r28SDUYMAaGuqTidJiSwyZb4dpzKkH1RmYRbG58aVhLMegRCx78ES7",
  "key26": "5p8b6iXcgPU5NNdXN6zCg1ww9S6c5KwoAV14vb8VnkyBp7sfqkwH94gGiBU6GuTr2ojnxEzLGP58qkvRWh8pBfam",
  "key27": "3A37TdQNXsnHFDjMGoJfGqHw1W1R11tQoKw6jxSxSKTuRaVLa6a1QMqEGqhTx1v4XPtf5AgSgM9g7QaP6tpn7Wwr",
  "key28": "566W2Lav3PEPG235FXkgpa1VfBazrQBEBiZWHtu4eDYRSLMBqqpPBibTJDtwir11vVwLxDVP9xbFfJ89ahtKApo6",
  "key29": "6676EtCigoRodDT96cSDkxJfGeFYULvb5Ns17Td3Tqsj3FH51jCpySzr8TS1S83x2ehTGQiMovUJCsbkmkZJT28o",
  "key30": "4FKxPhwgaUrYEj9qbXX7fcCFnLfqCLAumkrfvxNR8fNKYdEs3Mn6aAp4929k7tF6wLk2nGdUvbuHThXKgLKS1rHq",
  "key31": "omQ2reNkouSfsy9kwDXY18uppBTsX8KNw3bvxGYzSF4FtpaVBP3xmrJu7rU6TkjXL2PBzXtvDNGCjgpLNb9tJM5",
  "key32": "4pWzUaMjw2v9oK2HugNMb7qGaZSZhQqUFTiaRRKPt7PF2SmbAwkHscM7UR1Z6Ddz775hAW1KxpXN7niEiU4izr3p",
  "key33": "3D31bjk9PBaBw6iBYEJQ3yEWa8W1A3hq1DePdu3UnkkiuFLee8X9jVKgSBqrEf3nf9WdGYe9P4PtvdCLjruJvA3n",
  "key34": "6L23NeCnBZCQKsvEEJBwAKa7fc5Z9m533Pwr9VZJ2rD6bHd1rGUKPzpHmiKnW1bpWhmZJDGVWBTADLFZRjXfHDK",
  "key35": "5tAzFvXtB7zTiroT82T41vGyxAWNBgbQLAqikMok9XmSx3PE1PNmWU942L8VvJwHJuvXCrHj6E9WGVkoFuED5X67"
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
