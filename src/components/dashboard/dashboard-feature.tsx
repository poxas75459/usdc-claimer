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
    "paHB1EW74wJ52Ffd4USBfpsNtqT2AjiZv5Tnndb8fLXyeAWJeQbgVJf8zrG2MAmVu93Ms3aY4FwgCaFGS25PJWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "273AzyhBSxGDECiSohJ8VgZPNT3VjDCm8nNDp6wfgiecbWKfL5qwxsAjQSvaXXPmrg4BXZJfjf4vUHMRF7uY1XyG",
  "key1": "3DU1wcJy2W9rv4aH8HAxkMAaCdG5wHqXkw1UKyXdxnA2M5ncfB9ZzkGaBUj4g4wBnFgFJxWNXhMu81jED1VGAZRy",
  "key2": "461EyNVJSRMDoDFyap6g39cWzVhkZ4dHocBxfcJxrSNHvoE7otrCizvbjE7AANbJokk4dfgtZGKNZrXmihw8gf9v",
  "key3": "58ZNjgzPdXe4rXBaDt1mkpNvMx4hrXjWF8vHxcuBW1gE7RbKfJGt94emy1xmmcHbRHi1mQp6pFUHctG1TpYu3Ezq",
  "key4": "5CX3Vn5X4CbuH1L3F2DWyKP3Ym95Rc5foiMdt1ZYhRDSCtF1U7j6xHUGzpjhGzQWHk7uRGPU3DX15vkMNdvSDM8J",
  "key5": "cyKBR2Xch1fhy7PoauYV5EXqv7YZixxwLELFPQpnWkX6QEgeHRTXZUnXjqWrr1wdMUYtpD78KkTW8Qp7UZVAVqq",
  "key6": "4khMDrsm5yjddx8rdCf9exuYcR8ggKnnh4dNTJtTSxFUbYMkMUi2RwuYekJAv51g7x9u1ry8VPBuLd4xPJ4nwmCd",
  "key7": "5JpiTguNJWiDidkfd99ZqfpxpqZbndjWfFPTpUyJFkg7Cmkx1Z8QRa8cqRnMnon4Fc9mGXZjVk3m1eCe9SpZXnS8",
  "key8": "4sNVoaPD8BNY3FVoVY7DoBjVuhZCc98DhbkVZVwRSAmvftTuC3NDKGxdtNM3Wew5QVrFEaJXvNJ3ZH448RtcoQTv",
  "key9": "NexGcGvPH4e81ogVuTnrVu3ToC7LLYquEppdkxcmi9ZeK3iAmJeYqs6tSDNy3fgBmRU1f3vogzTdC4N5G8f1k6g",
  "key10": "22cWnsjJr4jvrY2MkhYPvuTfZ7TaxZwtPf1ARvfBwYmrFVimvbB6kvyEH8W1pT23rDMC7BhnRbwXcRC2YiH9Vip4",
  "key11": "3NhZBrabsny1Z7r3rPpauYsZj6inVFh91SPmAcRT9k4seC4RM6oQpdjoJiGujDAK1mTBJi9wLF2AwLnxJDm3FQ6g",
  "key12": "2fBBUBRFzeVJgbgpUbKykp2u4Uau7ivmQBcx7QhfymuVuNnjWR3AeHwZj2BEXiseoadeGnbiWHsCgEtzXwdtVFVU",
  "key13": "588d1bq1RAkU64zyckAaoiUgPYn3oJYbEcMriYbat59a1EiHPeJJoWv8psNvU2MA9aqcCKmCkaiy4nSimCo4XGPV",
  "key14": "3nTtp97Ds9T9J2FUoM3QMkjhSyts9fDuFRgi91GBPFVtZdFpDhNXM8N6qPNeqQvG5EVo9fugzh658o6WseCf6LSA",
  "key15": "5waJ7T8w4PzfWTvoty7PNhGEaJ9wxnKVuxFWHCJyxnfr9naMTJAF64U3VYZejmUnBqPFZLnroDvv87pp6n85iAgr",
  "key16": "4AdvtN2i5iGYMxUAAQdnLX8uE2EN75WTDMXHLmyEDU3gJ8ipbBxNY3fdqtjhbVPTBHWEc1UapnSh8MfFfm4wgf99",
  "key17": "5rSWpZ4ccss87Cd6bQ2UpWxo9UV7UrVDBgqFs8H4ZAQAB59qx3Zyku2tDDwZYNjG7eEi1zS4vtmeA8HG4b7ne2rw",
  "key18": "3mK8QAUXK18zazGYGBoRY8oc3vWQQGQ8VqaBX1yGm5mHhpoKuikJSCJMBK7C9ZSLN9maZ5Dgxr2FBzmcNqtDTWbq",
  "key19": "43m9mP118nf9V75okvoiVRr57jUuzeaVX1qNhaoBc1HE5Bu4ecKkNNdvh9cR4qCYkCv5z3S33NN3SvnVJN3YwXN8",
  "key20": "3uwBP29mb3KYAgrNvr8QuGnmecH7niDyMW1SvDd5RnY4LCvEzZWwevrDmCj8wcfdN5oLKtdRF9F5Q1tuphv9HJEC",
  "key21": "2BYQtDF972PLj5aM2gY9uSBWPdPHN34xTRzbmtcp4y3iARPAbDMSTwjt4FqVZKjSTovyGjMefV7TzmXAWJGTTvuR",
  "key22": "3xVBR2NrF7nZ4T56aE1rWxNCAGgxLVk4z6bnjnv9z3ZfsjJELnTX112LXJgjUqfPnsjvLQ6KVADjDUjYQkjULHM3",
  "key23": "64NtQH7gnt3uwgVmsdkbrSuVFhh39tnC7z5jsYU7WJTrWvYUpAADh5LqWaqCw9BfKULX3pixCq2idqa8rf66yq9J",
  "key24": "2uqUo9r51TrGKg3AA8G8x5ptnNuZ34tJStPHbqBwMcVTv7sGoRGHv7jTqWcPNjC2dDtR8cR1hbQPHkYjFADM1RHv",
  "key25": "54ZjqqeTjmxhEWt8UhpV6QSkkYQ7NstjaiMZznYjZzCFanPRMLfyYT17wAMWsoP9hYKzZhxADBZDMGea6kZS4ZJo",
  "key26": "4XXaq6R2Wz5fZHkqHypfBpfp3amPuu2tcNozcKbyQUXcnm4eVZpHDC3ZVAQyPSFrQMwzQkJH8Yr5AdXnHCpG1acQ",
  "key27": "fR7ZyC6cJSxKsx2Vx4kVFMLef5jMnKLUnvm8L1S4CADpBNyf6QQ8Egi1WCr5NsfaLbG7CUBGxH5AdMC7cRnMpnP",
  "key28": "4ECQHZ4ZAPrdDX1xZxd17QdXok1C6KUQSaoqVwnAoqmxreQChayRErwWWdfaCTKs1YkkWFsQunZi67VSVUBE29p2",
  "key29": "4Pv1iDM53mxJxmuFXdiv1cSzy6urSXLbnbxxL4ZDJ2NUwP7qLggwEaSynDUjqZyJyWcmgteN2WNHQfwXHrffyNRC",
  "key30": "5iCZumyTpKPtMj24PWo47tbk9rBJTtt4revL9VYTw1ua2ta7fhGoSfF3fuSf5QB7vyzDJSRUKth8VqgdA6PPbrvc",
  "key31": "2pKPi9rd3fHzEuetjwZHiE4S47YKwffz6QdEWpkgxNUhTYCFNkEHj7BrAYbnwsv3H8t96wUhk5tQhhGXYgpjD1VM",
  "key32": "54VMhwoiXhwsjA8aNkoMRJriY8yUh1H6oegCxJegbv5s5bV6DcxTxCk1CgfvFuKPAbszTvEtUHjbyQZYdpKr4yDq",
  "key33": "4ADAHDAyYfAh77kE7emKyyTTS3MEJe4XQKzfXednLwq2BMjPVu4e7j3Wps86eGjnH4waANHhjvGJMndWCAvu743K",
  "key34": "5vE2sK2Pg195cQdZyXDCxTdDXTS2tuuJpVk5crRDFBgzLvRzshREWtxWp338ZnmVzVuCVgtqmjqUXfDkyQcxYuVe",
  "key35": "2pipKxu1c9ciQduDTmCPpWKNyXPL7dNx2JLbecmBPNyXYcoVzktztXbV7Xqfj2HLAXM2VqJ2VNXcFjSq1WzMQGGB",
  "key36": "3PxMoxMoKozWtuw2yZkTY1pRHJeMMjnrmsYjM4bpSMD5a9G6h1V3j4bmvNGNrxiRJeWLU6bSLGfjxWKYxdkLdkfw",
  "key37": "2jze3ngb8kMFQFoTraBbaWNyvXqabHWfD2ed1uCjEmYRd8pqpbwmUzHeLkK2z5BDuvcLJdWzTSCffRUZ75XJktii",
  "key38": "4QzfKCMg3dVs1yEDKhpvgt4aPqUHKd1WxdrMW3DDVNUdPEbpGqT9CefaoAjnEwVNm2cUQVqAmVm2KWk4w73RfySe",
  "key39": "4J2otDPNhx9Rww1N1R5AeyTuXEAvAd977cwitCZR1MBf4jJJVRbFh3VePYyqNyBWqVLCbN9MGtVZwxG5GuMtNRV3",
  "key40": "4Q41JZtCzhA7esuJTBvwUCJA1nzQ1QVbLFP9CDYGm4tzz7zu7PLGAEhQugHGe7dW3hGCHDDMDJCAp7PxznizBcrP",
  "key41": "2qT5gPk1jNqYk9L5Hje5ETnCSmZ1MN1mbRwu8CjTCUdvQbsmVXkmFiizbB124ZcC8XQTJ2hHFCGrxmYDTuBTQ9gh",
  "key42": "4FbsSfsjhqJC1PNvr7bNoX2aZWHpK6ghbd6bx7t1s5nk2EFhS44CNiDKdwKJCMoNrihCLmhTz4Q3qCXou15F53d",
  "key43": "5xvQEztVjgTfUfaxU6kZHbFXvGcMHCrGBEgzzypczFth72znoG18CZkrsGRn5NPzurRaSffn2LvLAxdfSFHMEbCh",
  "key44": "2XfcdYipSCvFQ69WMtoWrqwfrsZqmnTwvcDtjYe96MjfcyA3QnYfCXaKUL4Ln6S2JDxMqynwD8tRYCbbRHLxfoZ4"
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
