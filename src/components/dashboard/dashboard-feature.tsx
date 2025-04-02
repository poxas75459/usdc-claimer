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
    "4UjkQ2Z8VYtYzVf8hKPpeJfquqPTSCrgvQBBBm8fRtsngN9yvy1aERCZjvGdHHs8cQBE6yPpDRR6sdT4cYXuAcWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8iCDR4y1scWsWa39BRttKNbXcdUttPKXnrL7nARuE4F7bMc65nmeqhYcsjVksH2ovWGE48E2ti2rssa7QiA6Tx6",
  "key1": "5ZaWGc7eyFWGTz8EXBuPYm7pC1WG5Vtg3ywFp9jks4T1Svnot2gycCmN7TrqDhxKiZ8S5HeUjBqZ44mgTwF9rFNN",
  "key2": "pNiCVKKghZS6fRU6EeSrFmvcTzMPSoknSGfHUbgyCd4mGyvU874ZnFK3TDmUhSDKWJD1r73pWQ8xgNrmhbEcif6",
  "key3": "2cezx2yAfSt96iffRt1PRSaw8NndG8gR2cCptQFgCSD4knoPKAuuLi4sayMcLXbAx4QTeFicdii8T6BgMHvF1wjF",
  "key4": "VBYEmvKnYbf17756gRP7geNRMy8WCkA9B357FRiwtmNcQiHoL33UwF7yKBpjnbqYGScCzfMzrqeD2A3jzyMVnRM",
  "key5": "2zS3sozQoNyAWT6GPKdNBpqYA3qN8ZL9J9BVsP7zxbeHq7BKWs7H84KiF6tJWrsiVNsvFkV7EkSik9a8aCzfWeEr",
  "key6": "FzV8j3sEqjDhATgWmB5VyJ73QdXNF1ESjFAY2KDHjH4UTP2xoBtPB9mPmivgYqghKK9ZEmsV32sZ3bdYRx3h6Jb",
  "key7": "65PTa448TLFypDpLZGVqFpDpkkBcDaiXHPL5Nd1xfBCEZjKZBSbTuCnmxySqPGUky4QGqELUCGt5KDdX2Byw1hrV",
  "key8": "nuewpVSUTzK91v4X5m6mT9EJ3iUeGKJfKzuGNTyuvj9PtgnsRUKU3J4tYnVnYtqsppmKk3oXbz2HBJiJxTKWLaf",
  "key9": "7Me2K3rBYMvfearSugdYhYSeTj3djkEik2B8fi6QrvD8yhqfLcRdMsrnUp9M2XfccKdLmK3eZnwX33T8bJ2kKht",
  "key10": "1v3NRaceSuFsVybHEhWths74HLtBvZzibW6dYucikNBLQv3RSPRdBkRZBAHMcPDGBJQhiBkPYGj1NhSz1jJqtAh",
  "key11": "MWhpAxUujZkcxGDJNRcYf3rXxVfaM7QmaAeW8KzVQUFtf3qNt9QRYpA6BSGNHyhcYyvZkyDpvmnaewFMtpT5Xog",
  "key12": "2bFZELrqDcHuJ4MEnvUBGBYKdiWzxursVFv8d94shNnuWaK6vML8btqVyUW7Wa2QeK8woQidqLCuCwRnTz4NXj4L",
  "key13": "4af6SPk8t2b42KBUUG8ouVUASvSumPgeKZH7vXC6RtSgcF5CCBXag4SyTwEZeT8JP1fapMoXahcxWQssoX7kZ1ck",
  "key14": "5Fzjdfi6XZD75t6Y6Uu6jkMNdj7uyQHvaCkFH6eGuTcUxj8VqYCger3naMR7kiKsjuLZrHRKnmeTZjqZcv8vQ3Br",
  "key15": "4JkMXMa5eCypp251fWeo6UFogjwFAfs5Msox4BpRaDgA24xCP66d9Lrepx8pczfZncAec9TqwhviM8tRVkb8Kr3V",
  "key16": "4KVtE1LxKn2Ja87NQi4zM8sg2xYK1uk8QYZnaugUtaxRQZuX8JMeev4dmuvraSW1H1L1DWQVhc2GbmbSRSWNBrqu",
  "key17": "od1LHH577fUhp7XBt6gb25hgQzQjaZjsTav7Z9hQFHpGPtPoXZZHzCg3wrNieUwMb9gaWr4m193fZ8nPa2T7Sn1",
  "key18": "2zjSDTgbe5mhYLsgCt3778qrKonipBFWiXkXrMB9tVnUTk9D8XPMrSD8JJby7MsJVjY58XfW9ftVbks6anryqQj6",
  "key19": "5EbEXeksvRaUvjVYFbNT2D2SMhMsJ7yHRs5xxEeGLYF4TtA7MHrRmZMgd9MptdVYyHBjU59NJ8BwHCvDHENe26A4",
  "key20": "4P9EepNjwdgX8bfyKmdS633WCgLWvGtSt3wro3kYjf64W37GDb4Jm5ei8uvSNahURWrxdJJ55qQjVVVLmYiM79uo",
  "key21": "2HzZqVhprPQzzz1k41TsetGhQkkVKwnpcXbY1Wtp5nLGPmzF9ydF3kuaudTrSie8uyP4bhxH1TLTFacjo5XXaYbm",
  "key22": "1WFYooWCwdTGNTRT45eVzB1Uk7HDELoJRZHBcN8wwpfL5CoeLHuRDFaR6Edz3UC26sLty4TpraTi6G9XZnVB99G",
  "key23": "wfP3GiLZM94qH5bZxHsGP6vvDfME8s2uXuARvCKrhzjTATZyRwT6Hs4WQo3v747NWCC7p6jHcPW3mF6keUMVj4g",
  "key24": "4ksuxEBwfyxnGGjmdC5HfAmpcpHjNCK7dvRXgP1G1GSVKbPVrWUZK6oXfmcwQ8QxhwioCdAVrc5AQ2qfWjAhh7bc",
  "key25": "QCaA84nVMRPNWSbd6nyLD5Zu7o3x86ykkzuSyPxJspdTUzDeUAqicHgp33quTigMwSSVG8b6pyPeWh4hdXowpH7",
  "key26": "Nb4pSm2DigWgnoArwo83ZXS5BnPYSp7QC2YsnzjT8nsDLUJrc2jNXkhmySGLx9Bh6wURmuNE1pizF4rndvY3Zu3",
  "key27": "2Q3nsh3QbB3XokpPhURkb3Pj4sVyBQjQepbXHArXDWpVgo3JxCvBy4HN21dyvAZjJKuqhm2u2uZqxRBfR9oV4rna",
  "key28": "2f6hZpfx8oSxzbwA6zDiTywfRdPZJhdbMbZ3oKYtQXrtctLqsYRBHUJRkWBSUnyhakCkjwHYYAZB4XNbZwAVPX7h",
  "key29": "4dboDj5uKNpKFMcasTDfZLUr5MTMqG9fCY7FQS4LiCJ6oo2vuyAxQCVKuZnCw5z9kYvLkG1MQCRTReTGdiL9mUAM",
  "key30": "4bVykZbT9YhNB26RGfUiuKt43CZBosHAWRfN5Ub4ZNSvEXB76MBVgADBFCQuAe3VmiUoLEp7KrWcHNiRhA7oZ9jr",
  "key31": "3jhrNo1m9EHBKPrgRbnRbDu3fwfcxafnVLxHahBVkt8oiJ7vr9gdn5SNioqKpQSpvitgxeeswc74b45w522cgrQM",
  "key32": "5AjsiKCoM4vnboeA6KesDGoiEJRCfjEuNYKTC1kdyXFoLnzRucnpHMMeWyrd5Vnigc7snsyAmZTdosZvCUKwf3zK",
  "key33": "2RpgGPLC9XgqJVc37K4eNyBzoKGF9DdgGXZyC7TVPuZfnFBHJxWDFxcCttqY8nMp2NFZsmuoPdZg7nAVMnSzfjak",
  "key34": "3fBCSxxHhfg4vfbq7X31SSFyszM9S6qoULdoL6MbANVmjWkQeKBjEPQfqeNvnrX4Kh8bQKSK8r8LN1cUCdA6AX5v",
  "key35": "r1G1stXkg5eV3u1opXKSy5Ab8dCV4WcxhQJ2WfMNnGCAqVcasmnH3T9ZgEvS1gNxJSVSXtTHz19caHato2tXxKz",
  "key36": "5tZUCMK1Uryn7GnHL5GgZkw87tyzbjE75sw743QYbbyZGHWFjNuRhDUAiHpqeKsw2B8kzgGtbnErCP57VzynbaoJ",
  "key37": "2WxZPN955nrSWVZdveMckmwG2yDeHmT29tuUYkrPqPqWXyar7aMe1RPucuwNAxdwfsLXDdQqQgrcRhJiqwNcujJP",
  "key38": "4fU89BGX4cuNKHXkE1bJ5U26xcSFaBc4YT2UQFaENmwbpHr7VAxy18SMk5pbP85iSb6GAmU5Am34tJ8LFXqMeoef",
  "key39": "3LuUerxCULzp8uQgCPZ1XDwm2BtZ6syTwLMPuSKFp4GeqGhyzjTnAH8KSaYQnrYf7cQ1xMR7yrVp8Vr2oLYC39XS",
  "key40": "5dJSgTdabazBQsC4ZULgNNoprEL7CYHyNryBsJV9Mas3yCz411CsBriS3sCyGAmJALQ1bbgu67DJAvKtikJMKtym",
  "key41": "2YxNxePws5WRzxbebgrowU7cRk3BWFj6Qt5h5TD6Ys679Rp85MCdkUBXTjV9UnBxw6WSCLhDtiyBjkpPDdb9nZnP",
  "key42": "3KPqAAP2PR7NHBEjCNcnMCQBaSJ93FRXpqa7vtW5Th7VVuPPTZ4nKFE9YCZSFuyc3NqVHjuhEAwcrMwNvDLAz4zJ",
  "key43": "5Af7dmETxNTemjAPWCJwNtPFngbxroehKHXiV3KvNyxao31R1XPcRqaaLhpit2zGBr1sem8tkjL3XGoEFnDF5oS1",
  "key44": "BT5gHKdgf1NVPX8MBFUk4qE5D7HnNAq8fs5drdAqThD3PXHunH3hwFrS1oaKGb2fttjKw7vp3kNQpQQmCmbCk5M"
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
