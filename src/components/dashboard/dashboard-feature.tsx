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
    "49HLQZmwp4JrKJaYMFUdeYjhXVwJSjHC3mKZLurkbFbJdaA76Q6kZKnu7ngdyAjYmSA8VL1EmFpkxo5G8FcYxHQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FdSWujjMJ5VgHuCGhbzGyVFQJ3KjTVsDihJQCghcdzoUNZU9dzrtvxP5nusNeCink59MiQ1CmN7qCpb7fqC2fux",
  "key1": "22stD6CLSdhJtYePnXcS8c6LvCGddkihHEdadFwXWcpHhvMdTrzdTQRdzQATgWB76HYxRMXktaWXHXphBpWNZiDi",
  "key2": "582ukXrjrZWgXkfWmazSmjvFTGAuYrZ3VBev6qpY7dW2CLr5UVoPbysuTPym5fk5vcvZJ21aKxHjidifiZvRBTrU",
  "key3": "J9yu6XqVttEn8g9rm16rRbf8A5gMy14CwDDYMNLyWCK8cM7EvdLc1dEgfmi1VXszmFL3GEkHkeGs1wAWmDeY75Q",
  "key4": "4LCdd4FZjuwtDJMrjQ9rYddMGHo4HngQbxgj8csJn4s2mwqktjC1cWJUvzu6UT8CTb2RGHnBmyFxp64vHTjGxFt6",
  "key5": "5Ld1CWBmtLLYTe25KaemSB5rKyAvNZ9SS7ptV2WQPCgQ5ap4tuRW8T8E43Wp1xgxPvqjxHe8JcDtSntKUUNsYfjs",
  "key6": "FEM8RFFrxL6ma4eqpRDKGwzc3yzXYyasgrMLVa6XHR3QeyZzknvUVCt19oR48AGsrSseHqTmQDXvv4oRHPnHqDS",
  "key7": "14c8Whri2g5Ri6RXLC6a66bZY1cjAH2s2SDuLxoxVAwJyFJjKaMHYfqjQsKBUkWvYWkyBbtLnU2zM9oQyuQPN6D",
  "key8": "55vUbgXxF1oT2PXAJj7NuabZFYYqhPSUYqxd6F6QY8jdtTZrNw1ZcAFnMFb2fVCE8uskbV6JSkDskPMGZj1STsDD",
  "key9": "2gN2kK7mhW3Km18B5pVqsVf6szFB6ZkT9w2QDczxPykjn6RsrTDJpZZeqRuKp5SHzoHAgsopCVqKqBthL4BSCfBp",
  "key10": "D4LdcJ3k7Cimcbp6uv4UyidvqMLAAtzpSXZzt5NpB84A6PN9vw5D5RggR6LMvxRbq9Y1v7Li13GWPAApwWieszX",
  "key11": "2HW5PFrYcbUZoqfrndoXtioXVEAmwNwjVqfqssHwd89Bq36d8A1jYVk3JPoaizQ3B1RW7g2wMp866QYzRBTwzw4i",
  "key12": "4CDg3sngGCwGBaun3bBqVC5xZTL53VNFDyN3kL9bE4wQ7CZcsW5nA2vwvhY3gZSRiYQXPzfQ7UnUbtzYZVJvEvej",
  "key13": "33S6862CRj1t6KMNiAXpGY6qSBE3JStJgVt7Jq3ecEbP7DStxVzq8KYzmTjLiuskUGVNNHUDoDkKZ8Cik9JJJKtU",
  "key14": "8yRf8N9TA3JP9GDdvH3hk7L217ygUmX1vvLHDcRuxSF1zE6tQE5Tt4LARUFNZV6zLiaV3Vt7qx55ncn7fmEbpQo",
  "key15": "3TrQsNaDffVSPJUxpKaBipmsX7dVoVgzM3bydErsbsEH4Lsv7QD24JMiSo83pNbRt9qs898eGeZK3xUdDHoj11Lr",
  "key16": "2pa5RLS4mkLHUkQE6agy7f91goM7RruVKH6SPWFMr4YLbeUVp1GCRvZ1PCFs2ziszvXHvb3TCnCVBSHSiDm49i1F",
  "key17": "tZqWiEN5FCdf88QnSzf74bLMp4PT2HM8mvopRb7h68Su4TyJJaakcw8rmCgBQDj7M1EkWwU1mNeQi7cm1a3Z2q2",
  "key18": "2dubAVyKwZAoAh9VDs6HgDhhKzYqM1xX9iLVCD2tZvt5gcyTaGZjXpaGPBkhaG5HmPiP8pah2zMoH3vTSBLL33ZK",
  "key19": "2ZuXuNaYTXMPiQFY9UZH5WpW9wwQTivnqKMMgSSGP6yNhMBc8cZ1FaZ1rExaQmhxp2BzEAcrMgv6pcKpCDSQZV8q",
  "key20": "2w5F6Rony7Dr4ECofqyVSAP2baVbTd6ZPoWgYKG9AGFtfJJAdSYoJUwvZjunReKyzMPdrxjLRsoNwRQtAbE3Zjub",
  "key21": "4DW1m3TdkjJf5NKNGUpe6SDNsDQzbf7d9NyiDUztQaKPUVTKFP19x9rZXgHx1pXC8wTTMeTqu1idmCLHuDfKUGSa",
  "key22": "4aQEp2TNe8oNDvqswSaZp2oWTGJf6aWF74Q4BZRZWHrR8nxLwMt3c7dTNdQGLeAVtFCN13XmtkmPHFfSpJ4i47Wp",
  "key23": "2xyeQRHK9xyLpmhSU1PrAmGHup3ftqv1j6vPpJEVBUa4uSZfNXBF97Da3573owQeEpr74PPQnp1bmd3EP57KvH1u",
  "key24": "4e25WWfuv7j7KrHRARSo7Ey5hCVnrRiwMdxSrtYKFdYb8XzP9KANaATj42nbrdKuyj8uN751gMiyVhPVbJxaKDET",
  "key25": "3mQRzKbFxRWVYuc5cbyyPbfbiBGKh75Tfp22EnbrZWnMfCrHwVMxPcem7JtoUpqCyREumfBy9mhzEwdJygB8tdvn",
  "key26": "3Kr2cBYhPEBDGGVwNmPDBBqDjKSsJxHMarRZwZKJCHtChVt43uXWNPh4BQeHqG9bi8tSme69AVZGpYZBdNQVBE6e",
  "key27": "5g6pY3DaD9BGzu2TPCRnb6Kd21w36d43fA57qJpEgQmeKM2hRXNByoU8eEqBCgfxNtdirv2W3gBsPuMPmLScpSUP",
  "key28": "5LC8Ce1NBh2aKCXWTXySC3dQRN4JWhQv4otXZ8tH1rFsLQwsLUQvpvTZYRbRCQZYGMT4ymgSL2eVGnDWq7DCdNug",
  "key29": "48zYxK2GTfhTUguxsuiRMG8TcuknVbcgufWxa5THzxuToKZKjHbSyjTq1k2VUFq1RVRL1xXVSVyxgB6CTcnofWeW",
  "key30": "5D8gBxbv6s2BkK8T2Rf1apZxHMGfAYbk5NJgwxDtJUDyy1EXvLeYAtF8DrCpFsNxL3ANmg1XLp2vuQ35qEUjLf7y",
  "key31": "3o2RpAGvg33i4SsDCzDy83hHhxxH3rvX8DHNsCSWMm5yRhwnVxxZZcbcfuzJJ3Xw3UBcYNX82Say786UFRThV8cq",
  "key32": "BF3yGRx3t2sM8tBFwX6VwKNhC19t5htcEUSLzjC7MUuC4ii5mctnDQ8XfyV2LMuNeBp524fU4TVPgN5z7k7UUbi",
  "key33": "4WM1hgQwWdDMft2oJUr66eSXe2b81dQmjm7Zs9kMH7X6eB8PQyY3arMZhy1pMtX9aLhtSgcMWLDygEVCc9qKyr4N",
  "key34": "4xyHgUqU7Zgne6zKTo4A4NGgzAYDryf6XNftVh67CZCCPAHyVfscPKyFvjJk4s49fp3gH3uo4Ew4CbJxhn467cwo",
  "key35": "3MxrpF2R57qHdzg4vbbNBWYSPdu44CreDs264HvQcA1UgZ3YeVEh3nmxJQ4bKGqrE35KE99wPXV5TDofmYM89Fx",
  "key36": "3BLzbcMCqGzAwcZFbdaj7orycUrtUDN9KVF4RbGxekYKoe9KwWdLNH7jk34B3XVbUV5XVPvafkqfFPvEYnQwQJp",
  "key37": "3YTSx9VUDQJ4tE8q4xmasfmLBgwnqNGncSq6PdErBdWw6HYMM37t27KsEVVdmsMGJ4v8f8L6vm8fJARaF7MED8W4",
  "key38": "4bxUA53abCUaAYDoiaAc8Tmwa1Q8ny3cYV6DVBy4PDS9puEzezhPJBrFf7E14SmRM3fD2r91pL51Jt1vFb3JHR2u",
  "key39": "2psKGZkhBbV6KvvtKwTqDqv6HXoChUKSWc4GWwWcpnSx8X9va7o26efHyBwUpEBzBctrzKEAm93hLYogAnnkCUD7",
  "key40": "d9QG5WHXMz1mVCGDB9dnQWSnkh1Sa5MjVRUo5BBDrXCgHUSzadLVMFUKnF7xjPfiYUC72hh5KdonFtZtiWVLCC5",
  "key41": "5PLvNL2xBN2mSeBR3rHfSivH4P46zn4wdJdeVwAghC2bVK2UWJLi6MZ7RZpULNHJqZf3BqH9mWHEn6ScMrNK3Mod",
  "key42": "3VdbFRMKnS4n4p12oRQAZQi8hL4JKhzK4VGUpat89jkVPeXERtvwY3u9bbGyBSmyLroyWDo6odmppeJ92Ncjajik",
  "key43": "5RmVaj6b1z6i7dh1XcZk9PHyAbD37aoQ7gun6NtVGV8NdvsJgPNkmoajkvAdb9NPWoMJtG1HygG6oyiJVyNX1Vq1"
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
