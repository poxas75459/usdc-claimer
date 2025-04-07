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
    "2dzM35AEX9BnXCvc6j7zg65t3CXwDzSJG71uknRzXf9PMyHFNx6ohwyxjTexbXyYnqk6jJtXYC3TDPt6n7c7KvMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uEYhx5BLm5k8NnxQyb5fZsHyA5gZGN8KS11MWFzL9otUCPWybF356kqa58GqqAwuXTF7rBde2kjNz35thSXjXdB",
  "key1": "3QryvKKWJiBptYefXCZfJVeDnVaTTni3YZBNcxwNoGBopqvBH4BkcTVff1yZnrrpA1LW9JLQCR7ZSncXrWUWqyQD",
  "key2": "2Y3caqCYeYHLfsmS88ds6BQ4vmEZuFR3jpFPVoxxvGUuGVJPHJyYEWBUX8zNPuezzv4K1Rm8dg9q2fzSFL3q7PXJ",
  "key3": "3u82tg5J7ZExbrTMwiBbaswR9xzRQ378QqmkGtnJWGLsmcfFWYHSYFsfMDBZKx7mhAsz5srofVKPNmYMi7ctVNE",
  "key4": "3p26vhFFx8K9ErfyEgbjHiqkUBjiK8jkH2inZ5ALBCKQ8JTg6ixR8BVVmmheNKz3ivfEbZUhnuHvt9pUELE527yh",
  "key5": "5HREF2EDP2mj6VmmSBreQm3qnuZQ8vYL6ygsPsEA6odWDN9psyD54baa5G717EGrqvcYo2jRSzYkjpjLkWMBEG5",
  "key6": "2ezuHk31UyCumAWQ1v32KPnugjyPrfyTS4x19Gj9gFRUbSF6Pzpo2NeZ2diruwyPatPHvK9iSvBzd9TiRwiLR9Yg",
  "key7": "36MPaujjVNhgeq3XnjwHSizd3NY9T7fse3dwb8DDTGUgvUqrS8yzLtfn1hHCEx16yMT8yFugTh8vKonHVLdG6EdX",
  "key8": "4yp1TiumBNbdALw56KQpquWi4VKZ1JvaKP55t1FdyazwfxTZVegw95WXEaw9LBLYihHwoAMbYwuTaDPVsS6FBoRR",
  "key9": "39s89wi4cBVeMek36uSCJGvAdrjF72cHYbPGhBWYWhoe768ztinoDWd4oMdA32QLSy9NjNZTeD31udsXCwPvtTL5",
  "key10": "3Gdat9BtdL18f8dARBhXWoNcf1kjRD3ZEA4jhrPcW4bCz3FX7ya2YUpoCAkBNukhPWk9ZjoTin8pm82Pn6yU4dq6",
  "key11": "26oycJyd9NceZrPFLfVuHu74EXqQcu8XSjdjrLZAWbHQPSrrCfGc2toEwCKoeacJ7iJmeJQzgTegRdeSDQ6ivfYz",
  "key12": "2fjgTJAkdrzPpyn7irBhSWEu2L54Db6MJqiZWhPe9h2rGZreJwWwnSXo5Tp2mDNNfBsXFPwzh5texDos3bDxBXuh",
  "key13": "27D493RHVXcQcaPURCRDfXHLARpLNbZy6ntT9ZfG8S3AUrTTuTPCpAkbd3chyvkpR8Zj2UMzmAmprE7iTZJk2XpF",
  "key14": "41CpBp8Zjt2CmwwsPTP5Qc6VDGDWRkdJQKuGeFfgZqpxdr7uvgzjvRgGv71M3EzNBQ3d4gyACcCF8bnXzutd5oJ7",
  "key15": "5GSW7KrJDHAkGjUb91Vs7myaSu5PY9SRWjryDUgD1Qi4ZqntDZiKRdwYmNjruXHszaYu5LnLUDtc6b2ZC3tAzGpt",
  "key16": "66j18m59zkr77R1f9YoaBSgBpNrVoX5vVtzpmaD5eNAd5QMA2UDvd8syV787QahKb4fWLBjLbgwWDfQpcHu7LU3B",
  "key17": "65sJJy2YdQp38cKmUAwuqsmi2XdsGhCG4LwqZ3eF7zG3KpR1Nb58fh1F8jrb9qkAZwpt5oZbG5JQ1vDHvi59Yzbn",
  "key18": "52bBdYNzsALQWXXynFA8N3Sn6M8z36ijKeHshywuuv6Lk4p5j7LAGFM2nao2eTqa1MayvBKip5nthDWk8DerKCfR",
  "key19": "3MXcHpfJRxvgRMrPVFke3EmgtvUscdFF3JgsxtdFe9ybewsjCEZCUgMFYdH4yoXJPZwn2bc5kMVYXcdvMcEFxS9G",
  "key20": "39oBuE6KUJd6sBhxoW5Q3eWZ8THiMKVHeDeWPFf56gTB4U4EPc7SysNNhJbHQPLneebDFQKHM6Wiqzuop8Nf29Db",
  "key21": "Eeu4sDntsQyQUCvm49AcVn9AL3PgiF1tJWZoEtNKcKcGQLJhDsz1YnqCP3B9bZyP81qV7MaVm4dzXFaSb2jNqKk",
  "key22": "4gXuYwA2EtCeiLnmfeYqHSERsqnxNJuMkGzPPR9x3xarr1a4PFSQFXp8R2y7KntDXSPF5aac1w4dDnAAdck9dpfb",
  "key23": "2nkCz28bG7gGRmLJU8fwMLgqLkQ8LV7irQmEzX8NFLA7G4YACc6y4EhG9iTX48xdCzLpbeMdeQsUZwQ2WsZ2ohjZ",
  "key24": "5YBbHmX7fvQ29joZvqp6QwqcECf9n85y6qpncboAfNWpjanr1mX9AkxL9ktWELVULCDwUTcShuGDNfZ46PQ9j426",
  "key25": "6waYrW7Pd7AJX9bFCtmom8YCyPCqhqKFvJdoma4irqbLSw4XboXBb71w6LMbrpQvX18iUkSCgHRfLdjuti5TQTM",
  "key26": "5CTb8Q8BdqQddskCLfgGYnBWToVp2gwujs1mJtwxEn4WMahgFsUBb7vSBP4nntcygBQ2Bdp5mvKDurcdpRJ6tRtf",
  "key27": "5Qzq281XXGMJJxViFbpAgGjbug1956CaLipRcuzrohZ6e8bXwZ9nuGHpTRRf4FZhi9UYggn85w8LynV8PEJ9XyDQ"
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
