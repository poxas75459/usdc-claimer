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
    "8zuwr6sbmdRAThvg7CJXjtvX6vHE11pqfSmHQi6MniCqyBZirzssbWF82DsxmY4HjSrS9JCaS5G2qJY3YEbME6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uKMD7BMw6KJe2N7UCfNq6FAzjPCNkfiUbtVkZRZU3qzfDB6T6TciZBZkw2tpcgmLGaWJqQD86ofxpnKPQwtiGBh",
  "key1": "5gg3Up2hzRX8dcbwsbpa1tnbvsQpZH8jDsxCvUTjmonXfa7oryvqEHFc6pbnsqcRgia6cE5jBmqgrQ9CnHoJtfc9",
  "key2": "56dMtHiFpLfg6SQYQRmKXzzNjwgaDvQR93bn7jcLzn8BsxqrB6ozwqL7ESYMmUuPFanbB4LHcXrFbxfEHtKT2fxM",
  "key3": "66ZFYYNBTcccy34HnRZVhsXMxLfFwTsBF5PgG36jCtfDuHKWL4p4wH97UAF3xZazL2BMwRxYXM5bYZXYA1s6JXXB",
  "key4": "3AeDkLXs66E5pQNPnoXxfzTNQ7g7Xm8JNk4sy6vfP1i9SqTBgGJqkNJPnsXeeqK6j1ArzUGuV6ee3PmdnknAmyfF",
  "key5": "4NA9hU9W7uheVk4yNiGbjbKgnABnWK7ToVNc79yo5k9LtpymvcUyKrXaoXTj71XTJhbDMDoYRvFZdeEW6wJvd9Sb",
  "key6": "4Eqh3TZycz6XGJVWmYae5YpLor5HksBJvZ3HRtckBhSbopKiwKtwGonmDLuhkN25XXU41cbM73jqsb1n4FVjriK7",
  "key7": "4nuUmHZpfgb8vGiLDwPuXEHjuLKSifoR9jP6vaFr6NmjyrugDTZgdKJ6g7RGBtW852GrRZhPRjX6VjGBxpTkgTed",
  "key8": "5TuLPtwqZdtK6NucRKfjwhbaCm8wtT1x9MYwDXPDKRdvkiG7GbrRcDkuKzXYFRRZQ8G3XversDb2JWZBF8rutDhS",
  "key9": "57vaCyAKgwnTdbYzH8KL7tahML6UdrnJa5X7xzPmt5w1Ce1oEUYhNDfmbPwjWdXRKPPh8xHhHSrQFtmpdmjUE7h4",
  "key10": "po3e1zNtmZMyjuKQBpCt2sEPEknuqVfhhyVvgoFSLGw6bBimnBn12ZFFNRcLYDY5C4nVUZR6NJzvnyQiGgZ2CQ9",
  "key11": "5jiM9VcnTeJrkBTVfQzXAXU9PVaVaits8oZSiv1hNAG9TnfsGDRfJDpk2dLhkz5isLr5mFLNWicuoTXFSGe2My47",
  "key12": "3HU8C4U3x36bcfFeCNwzVye3jVdyZEKcufdE2e1L416ALfTcvTek3gU85AkH3tMrT3qCoebPPyEGCqUWpQDcwLF6",
  "key13": "2NfonZCoRNA7wawiHQxcRBLd3hE1LVdWHwMgQpQ2bL9pwJq5WqaUEeJx6TwP9WiGrrPJQjDm8uqEHgVfeACDDdR5",
  "key14": "5W9FNiMWfwXPWJUGAyLT63aemmwYMHXernrYBPDHzcaTGGMSEbGKyqGCzSbmQvmvkA1VQABXHknd3CWRtSaBhdsr",
  "key15": "Q3iQK5YP2RgJbNUSEjC4YT8SPDsErdEV2YeFhGHPiwQPzLNJDw9DzxU7Jg29V6r9xV8K3GapbFtdjQSm6kcPRbH",
  "key16": "5S88jWBHE4SQJN9gkn11xiLGFWojPJMGfnLRUXhfUJSHztoczbEJucStovTySNBoJLgsNdwjKX3qVgozSj7ykaGm",
  "key17": "2VsYVuGtgEJA8M9p8p6KqVpV3J2vmxFfNLTvCMfT4jvgQxAYXMq28uztymsC5bHMcdTHf87jdWPSdAfMSLjJvK9G",
  "key18": "2T4U6rko9nwEDivgPCbQbfJ2RJyhK1VjeiJq5VuRV9UeK8PSVmRqabbt6ybM6tm3LxPVG8LKzbkWmhoS7hggcsjJ",
  "key19": "3TA4hCNXdy65QWaZag7dqSqeQZc1sohbqhiQxHKnPWt9ddzWrNcft4oBhJGZf4GNY2y2TN3W5wGbxocBKNbdcaLz",
  "key20": "51EepLsuMVhj1HB16bdzwzi1Ksty8ip9cfwZ1daiduSQe4P4a9kWriWYypFfYqNCZRR2Fn6KzuLLcEjZPoCJGvLB",
  "key21": "3w1B3YWENP5eJBwLENYz9Ts8PqCE8Fkb8Nbhe8SU1HbEpCchFsWsE8d5QTPn1prmE579QEe5ZM2ZMogiyjxA6NJ1",
  "key22": "2YXD3uMayLSX6FSyeXQuf59fSXqdWtpCpFpsaEW7PhSnCPzxmNNUQTLWp1fxekS4c8vv3znuKPExnh2DUj96aw81",
  "key23": "4cv5D1iLDcoeAyaXxzDuJ8hrvqMiYSHNT9n782hm4hYaGnGvsu4uwgFzX4BXuYd5LXXRZnn5QtQii3sZjVQcSN8p",
  "key24": "2wsfJfrxrgZoKGVjmhn94wSA9onhRbekRowRD4iqtGVbxavRuWMaYCkpV6YtzK9Bpkh51Pj95qSTubu87kB2tGpk",
  "key25": "5GcSRdT6S8s3UVPAQxgZkrUJuR6crsSHWnseYTVMvcoTWjPqAectpdyidjpNRuR7T6e5bPqnBa46o62icaZgjffk",
  "key26": "Lc6rTjxU1p6ZUTAYtpucXeTDt8sHSS1LCPQCksEEA6sG7ktYXm7ZHDG5pab68jpB7Zpi2DZW98k2vvLZBVvvXcm",
  "key27": "4KEPCBbtCDYiYYt1mykC64VodxhY1LBMvNCFUWFGboESnsMv6qbwTBnhLWkaFomiosxGeWk3tgHmq6MEurvQ74Lr",
  "key28": "x2vy6wcAP77U7NTBZhR6GtWqZYq9pU9LCzjLwHxu5FnSvFXJtmNJ2HgneLAEHCQZk7gX7Ueqnj2YmihcerfwxRn",
  "key29": "32BHDs97txyFQgzZoYU441Z3MrG5pKhmqDdrAeoXHxzi12y2sqsFVESATmFKXBJtHsyeNEoZ6CVvNWiRfGXeG9E5",
  "key30": "2rxQkbKdxHSTo6Fyzm2mdZDXtJ7jZJ5TBGjmaHkbmNeowDymMRypy2ow1FX39tdNdcTqNQXpWxcNKDumfpcZg5XS",
  "key31": "2o4JK3jAWxgRxZgafTKkZZEzUD5AEq4oCJezwistyDPaBKri5Quo5NtV5fuPFCnt8uigwDX8hdvNVsbfVocuftSX",
  "key32": "5pu8rVDLknHxeKyxLRvrR1FddxikSSLAuSMZKsvT7eUmntA2x4j1rGWs186RQaBy2Sy5KExWcNmgTpnN3CoH2yUM",
  "key33": "5WcmPKrC34PD584RrrqTmCDJh6VyS9CB1JYzWc2duYDJ7k4nEBJtnWKQe5jdMHnfAUH4hbtC47p1uqH7ZuMJYtod",
  "key34": "qsQoNacS5cjayY1XWDXWSpMMrTX1g1SD5ucnusgUdaDPVNVvyQA2AwJpWgsxwcujVzAFfX6H5rdHH9pp3Y6KyTR",
  "key35": "yUvxUsSdZDuSaBLqS8JRJq197eRifGbxCoCPmV6tDVfdEFsDrJdddi3n56AUGxNPsRXuxwDzdBjc9RACJBbA4Ry",
  "key36": "4oDDK785KVy63SFiHWwU8wFNEHmYUuoGYsw69pt2NtYwwVRAQ48Jb7J9CQvGf7TjbL6MouKrxxB6EYBYygGMxrvJ"
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
