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
    "46nXUqu1RaqzjeqeN1rck2EQ4CVGeaf4HTHAADTsnGdXbh2aiQTTo97h2NAz9gwxcqUDabb7XPfKHHoqUo9HsCQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kTEPR4ENkPH3JMd7MCKC3AkS86hBZQQP7r23M3mQLfRLW3qduDzsGaRa25isA4N5qEhtMFRCGXxmzYwwa3zw7XX",
  "key1": "39x9NZobDTBm1tkjPSntcdpBg3ctZYnS1fAnuSxLQxrMp66WD31Xhst5f6fBi1FfD5zbfLgFV22PVsGUKrrnMjGJ",
  "key2": "5kam9vSXpMqF1zu16jydHgxJWQQvG6jEqFDjtCSjWDzw6DcW4HpNqHsBLX1qKQTUkdcJ8a7CbEWy8LBgvLFjJ5GZ",
  "key3": "3Khe3WrNvqLYvJCVZsF7jAhJXvFmgw2p6wCZuL6mjBbwCAE4k774ECLLECpestY48pKhC24Rb7XWxM4sjDhen6uu",
  "key4": "7VNJaKbzhdcJCQ8MDbh9ovq3nDjHyunn6JEuBcQSsnKQwAMDVADqmAwMD9cYBmL4VMoeQmGwohneaVfwC2yvZJb",
  "key5": "3PuXeU5tdfowzrZH5LBJwzRGC25FXpvU9N1KGuDAYQ6U62DWFUfrmTv1NExwyDTK4oHvyqcvv1sDsCosPJwSGi5n",
  "key6": "3pd7cX45PqSSpcxzxgyfHdbokddCbfsz6cCmWrB9zmFfvDhajU3CVBFAKqabuFLjzYw77uTWFZEHXXSQRFyN9fDS",
  "key7": "2jqb7ux6TeeQMLykbkGjvZcNFRw1CcdFoG9e97e7wUg4cq3md5jpcxnxgfAhBfU9mNtVsZReCNa6hABZWcEHPDMz",
  "key8": "4ftmvitBezfQTDvhC8KUZDewgMR35U7q88phBzrGCujy56nDmtFqcpMsa3gYHnVmqZCn6U41r8gHr7KQKMfENBQz",
  "key9": "5SMFvszT5HryCtyh6hHLzVCzjWbpxufWA33XcaHvVy7twwjzKBBLX44FxPGyk8o3MMuaKyLY5iVB6QUDLSinrafC",
  "key10": "KzBD28ks4foASycZYRddbKTHZ9JoLuYhi61sgzjsyGWuqzgtpGcEMQe8xhzHZiNTuoW7aB3oW58pC1s4j7JENeD",
  "key11": "PXeLUSXsXgo7c2Xc4Kk5zCPWKdY2crbAhwxrAy4EZJTau5XmLw4LpFYzoMQyvcCRrKJaosc8vSfpNvdzWftL4gK",
  "key12": "5njsR8LhApnRz4SrCbBNoc6x5gdePsKmVs9BH9XzEqJNVrVbu92VAxjgu5yHdNeeWhDkeXzwPTAQJoWVfbZdEuWX",
  "key13": "2PLiKirDyEvMiRJqggrJEAWVvpsr3YqzzN416aDsFhYDG7wWSWpd2mHcduoNNEWaTsnfmWbPPAzvxxXJmSPQfta",
  "key14": "3xYNR3dMkA4ncALdcAQFT8jbKtSGM48t4LaN1KLBVVcNgjbamo6An3bhgXuherMQhQ1HcpB7FVxkBsAyBKN2oDRG",
  "key15": "4jkjfXJgRdcN6xhDETN42BPSyqFTdwacbvZXmgpS6Yi7rWpu6XE6A8PU6WbXH5hxU1DyMM96SHfBfXForupgJReu",
  "key16": "29rB5b4Vd5yGwszwTmHnuccCKafr4S3hv3zPKqaxxosYKqWcaYkDMUMVshHsyJ1aidJvw7aXyyCFVdMBnm1Gsa91",
  "key17": "35DyRtcfXLfJX3jg9z8LbCP62GWLf3PgaB9RAKT2N4TKT3CVAiZg8HaMwmkHgjhEAAEwCPQkrM75Xo5HRvdGLXxy",
  "key18": "3CgeeMSLrc75CcRFFtLu3B4BxNaSEnNdXZCSUMbnzvU6JzjqFeEm1eKitTRNBbiLekV9LPM6ratKHNxdX4CYoR5B",
  "key19": "fXEvbLpZ3wwaBsMUuGKLXr6H2azft3ndoCKXS5aQHJYFdGHg7HXiZ6dacG4CwyXD9jhn6Tav9nMrYkkjWCHQUV6",
  "key20": "2ccrQYEX8Bc446gMKetw6ZHu3eJ8JDVpShNigqRkEmokDmz4GwfeUBVm7ByYNpnJdRUHewcMf6d4Dtfg7zfL1CaV",
  "key21": "4Gz1zJTHjnZxqnFWFAF6A2AeQawJNQwuTfcexNJR6pcNmxD3UJeZQdMzNvCsFBaVYuCjwinxJZuQ5gvZtExMoeCp",
  "key22": "hGwfmUcXUen9GtuSeRJadt9PZYWpuPeUoxnpgCG44suSumeJ2UMq2X4nbNgJnyZg4PFDWmtECqfM2MXsn2YHhAj",
  "key23": "4zZf2BXW1J5VifzCheM1qJYpa5GQ38AS3oPQHorwsVhGHdkdXrdSh3VVyDd7mJDz7vZfqnNN4vejjPQ1ZqR7JtW3",
  "key24": "MCu3iQhWneuqD7q7ozd7EQk2ooV1HBuZB26xTq8XQER2Frrz9SwRMdoP6aAfaGwqiUCy8SYDBSA8ppz1x8NfhGf",
  "key25": "2VLY2cLQXrop1HZioTCHYuhT1S8PRBcttUqqDQ7TsGqytZxXWphJxaucEqcDJD467G6b1EirBvGP6FNRW7uycZVx",
  "key26": "3yQVjrYGmidRdznyUAFfCtgeh6Qvt8udXfPHqLYZ7Ed1SFE9fhbufkdhQEkddGVp1V6fZiwzL7nQexVHFPaVXbDG",
  "key27": "4XN9jLGDqJwFpB7D5Kquf47PcJLNwptNz7nW5cQrgykpWszrhCoeazQQypn1j2qdJ1yZN4iTxdcs6tEeBVqrDRVL",
  "key28": "2Zne459XVnTYdRupXZ5VZj6UUHKANFqRqFnFvMAdSfPNgR35XUeoTCKh2yVQoDy7jf1dhFNViHz61H1tqU121TTw",
  "key29": "5KQoQmbtrHQgZ7edMyGv76PciKD3roqk5Q1v77SrpbjXxGDWrmaJ4nhxpnkcFbbvV7J92RN4Cxg6rnJ2agaKxMCL",
  "key30": "VSHzpsh9CtcCJ6a2j3PafmG5STarV3HJGq8yfX6qqx1HXzM27e5bZW1BmCGeNJvM2ZqgA5H4gP6KcGdDFDhpNFe",
  "key31": "2NCiwxH5F57ZEUZ5dahQW4cNrX3nh7J1tJu3jFhv2jjy87DJtzueC2bTKCp6K5jbdkWsC5deHF3dqJtYLNwjAMwN",
  "key32": "2HcqFbqDA9jv8FVmJbfVWVXskpc7gHXFBXGxmDVDwnCtd86DzkNa5CEBYQkMUft6L6osbBU8N17LkA8tXUUuUnqq",
  "key33": "T9njdQrHbymDnKcg9VPeYodxLxsBXy5DCAjR54BDbe89sbE1HMofz4QQSgXACVyv5LVNj364viFiVjogLwoYPq7",
  "key34": "2VQdE6y74CBNsd8hiJsHJniZYeZjFezB9QrZLfyrDxZLayxW4tERzsVTdWe9UkBZ3WmSDz9T62teA95wKQEEt5QX",
  "key35": "2iZhybZYPTaQvsB7WwuRUWYUncw9C7nkKGCtEsUPB9ZrSRxcKkMULorSAmTDUQ53eeZK64HbozpgqQncsgQbMujS",
  "key36": "2X2serHWpgttyUJKBxnnh3bnJwdbYqVWUR6g493iVAq6jMssLaWtqKrKGoCsBXBjfGv6BpH3m5Ff3ZvKyEVFtrHF",
  "key37": "tnrA27V8dQaXi94DaYmoPPLDFJJHzqM8U3SrkyQccbcByJcGhhAmCPmLQdPhdPPMg12Fp4NXDyXi3JkW91fbz96"
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
