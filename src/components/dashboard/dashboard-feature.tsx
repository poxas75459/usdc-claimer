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
    "5ZQtMfLEXp4wF3ToaxM1qsxEsGEMaQabfGDwJms8Ho6JQz7sctTG5ysHuvQiUHsDNWr4GC4GnMjcchQQjGFjZh1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F1v76fHULCcVeo1RVThZGtgeVyyuTV2wxyyVAS3UR7Y6ipwnHiPhGcELb9CfquHAVCdrupzmeBeVJcW8wKrXtBY",
  "key1": "5EJHuQCBu65y7Kcxrx7rWJ5E6iKvAmPb1W1saTBD8gS9Hvqgw2o2oXWgiYCseJdUBYLKek9Me1msesWCS9wu9Who",
  "key2": "3DoJBVHQS2Vk9Huwqig5iaKqQ6K3xwMS5r31bnxPvmA5TxDn5uwckPVtcJXk1PFUhHLKLqwrSFv9FCHZULAAbLbk",
  "key3": "2XrthWEnjtaDEd55KgP2uGo7mJ1sHGCaFMZohxyhjGqjCTRc1z6LYuTYJt9ATUjXrMYzfYd63h1Z42nQ7FgWcVJk",
  "key4": "pKQzJfVtZdcPeW7BBw7NZiL6URGqshyctC7EjxQb4CJZ98TPSTScCcoUNTvDiZtXsdovGfWi2ctAN54Q58ksjQd",
  "key5": "527PTmg484UTFW5pSCYqfVe6djEPgYFvRKFLZLHs39ekyDkqi6WEns1WTEVqCre3N9qk6pU7Yv1ykYEFvH4neYtQ",
  "key6": "4hcfN3J4v6Zvy6pnPCcmxW6XdRtWvsLZPn77BnPxdDsNz8udyAcWafzCX4Zvevev2axwAJPZBcwC6MSb2d5bhRcM",
  "key7": "XEns715QrLQNoop2oPiYg9SxMaRXoJhXTTbmR9zbmg4h4gLDxqPwnLZvZ7YE7tQAr59ER9rUAZQ1S2xye4mLC5i",
  "key8": "2jHB5sBxDmbSXBiYF4LvKFUC1uXtfD5bvap7gbA77Ji8SioJGSpz36NA64Pn7vJ8SmDtAYscdA9sn8UuxozatNPF",
  "key9": "4sEUdzZjbJGCmEU2gzersVFjS1sBKYtuxJmjgTDpwcphqRUrHcdW1eEygwCbkHjKZMY6qfjh8qcwqQ62dzerA7M9",
  "key10": "4qcmocBsqVxzvweoewiYCvZ7m2YRemxeMu8Zfsibq1fZ75bZjriJvR5a2BJ8yShzSMPjoPqD86ZdHa4o2oMoV83U",
  "key11": "5zG7iXWMbdvAyDagvJCoVi2SrMXMC1W377n29EWWzLUBxGgdqf8ikecb8E1ivvcDcn4wtgfBitxWasbKrCSMnMUd",
  "key12": "5m5oSKjeB7iBT337xhQKT3DnQDsgnRp1ckfHEEgSqZbhkcuVa5T5c2AYPDFK7AxaKTfKB1w2N2m8FY1D8VCL6sC",
  "key13": "4GDqwpXRYEhBapmCxdsv8JswrB1DguQTGJ4zMigksbcfaLsHSoUTWt4jPPQud8on9pVz5iYDLgTRzGWGLjcbQBK",
  "key14": "4TitBq9qx3Fn8wVK8U8FiWLfnCYvudy2UmnUjHJGPFXY7wZ3XTWRboMneqS4KDov4dqZmCfecJs4qGuZJhNKdhPB",
  "key15": "3esoCZPw1U68LwPip1nbov4Fn767LVJLECtanfPYim8UnYUNCGaadLRrGDobCghhJ6v2bhtPbzRysYkngJDWcH6K",
  "key16": "3CQPZJyV4hf5Wsjm1miXDis8aBxXwiX2zz1ePrXkmgNgCxb3ngEK3P8ucj4s4oFUGWHzuKm35Bac1XEY4tfPupvt",
  "key17": "2f4zTvv6163Xrbw46hPmpysCULUjj1LN66urJUEgeVEidKPtXN8sNitCqxNAesfRsSoqYyxgzJ8nvDVCRXhzDywz",
  "key18": "4WTZZJKVjNS1rTXTCq85JQJTUnfcckg6C1WYAMFW6rSwh3PhYPxvjLaxKmvqQk5TLZk7hLRnF7xuvx7Dh3jrvmZR",
  "key19": "5KfhtXQk9d6CeZBSWs7PTxNLq8QWXqBAnbhTCsYehwz84Lz6AnBbtinsky3bVYvNE46ofGpUQHnpBALrcaYQeqX5",
  "key20": "66sUai3AJGZtZmDNcYMyM1DymdYciwMbABM1VYuPPBK8gqdcV4bWE8jpBX8drrNVksazf2imaunMki3odvSFYSgW",
  "key21": "5aa7Qjv1N2JNhThk8GhM6AUvXmyVmx1p8t8HyNaNWFMHbNfywENtxLdPY9sp4X9SY8oer5t2ZSELxEcBi8JYjTAg",
  "key22": "3QWvar2a3W2G5nea31BSejidZAgXJGQjw2b2utT5oXFenNnAAYwg5162pJBmttEMx5VZzHJ5yZSZtodhgVKwsa8w",
  "key23": "66DRz815D7gM8N6mnUKt9vD9iVPQv22AY4pRXy3uiWZHajCXu633ANtscpSi6y5Ee8id2i9e4VbYvm7LRUjAv2Jn",
  "key24": "4D8HvMAzYgS7r6zUGKmFUoSZhMdxbtwMfk61mkezTvph2q3SfRcPfzK9yEfbWe3XCLBJMbPVuoN981jaeF3qgc9S",
  "key25": "37gM7BRJDVVmZcC2KxL6ARsQYUEMY7k34bXKj8YobjwjCX2MY46svdEp3TBVMwNSZCoTjqQxoypXxJXsYYBPbeGT",
  "key26": "5gndy7eLr49HAPaMwER5aoYn314LAMc6KR1r5tLuFtMSVcavhUfs8xsQiby2BzGBiQBiDWppxtkcCCdtTuYGgSMn",
  "key27": "2DSoSd361NSG5fR4PWQrK8JEstNfbxUbJArgRYedx7xg3Vq4WRH4y7HYk3Z8TbHNupT3JhV4GCUejCbKP34Sbacg",
  "key28": "5on89YTzebvrUtb8EiUvpcQrMqnNehZctYo2syYaNohcH3FveYaXS6Kz6j5NbCivZfQPdVf5M3siQ4Ri7hVo5q3a",
  "key29": "2hqN69hMVd7HwJVAMfDJPeyGT71uQbZuBKC6b6knio73fYfBz4eCzhqe7WN67KhxtpX7VVmi9Vcs37pZmbBxoRJD"
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
