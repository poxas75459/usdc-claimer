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
    "4ud9CVXLGEZLSZysGMPGkvYdQMYZi7bHe79q2FfVjMFd3pCHypgKQf9CdSgYx1mxJ17YTVYkAFzc4XThRTXSpaW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aDyDjpiuuC15jJWSLHyStn9VzpQinr4DXjtNn2o1m8Ro9DjgrUPz1fW5ubL73wywipQQuMNqGqTzjQXvQgprnAq",
  "key1": "5VnLpBX5dwQYQkFf93d85LPiPpfM3PzndGz6no77JFzzqsZ6nYiTf9JTLwKtZ13eDuYQWyKKXcyn2TtGrCeYaBSd",
  "key2": "57Xosz84k9iWMnY9s2CgEWkdZ5MRhysDLWy8Bvv66rnL57zhFXmT6AKEPHbCrg5XRoNWGNC2hVCYXVCAasBTWSKj",
  "key3": "63TKAEBjXWRDxvBtXwyaSFofj5r74skE95djXiUeTSEBRE9ViQGxiBF19cXewGiCvysXWBQdJ9HcREunQW7XAmgL",
  "key4": "4CXWyS2zaDTQPRn8u9ToxEuazNzir4jhewKPqw5B63YfhirnHSoAR6aNj68wooyxowD3u2JRsgN6Piwi2ckGyLea",
  "key5": "u7YKsfy12JHuhfaswmciakDkc5an38LovNcN51DCNtwYkzcGigMorHDeYqaXkVTQnAFCWvyw7bcz38HoPZCb5G8",
  "key6": "471EjPCEKUkE4q5LVx6riEZzMHPhssDu564JnRcT4izbTniPjqs2jxmjHgwMYsB1Y38Fy8uTA5t9p6egHXHjo2Dc",
  "key7": "k6pBG233BSiCtUF6xZJqQ5LyUWkVSEnEBeM5izebNUrJB6bU5wF6hZgGLCjmRxu4DnuU3oaxyY5Cq7EgyUG3sXB",
  "key8": "4wrqQx1vf6AqwfZgmzSzPTNDf39rd1dhSbAjwAj7Wu24JLXjZRAAPh5EkQQwyUxf8ujb8GgRuTyzkTLvS2Lwcu5J",
  "key9": "5s9BLr6piYpxHY77syJmh3tRs4SWngjAGYzv8wdWjRCrnYdA3F4gpu3yjTFsxZRq26ePMvAWxHfaQXVTBpCzyuhn",
  "key10": "58kt3yBxuEkKFGTffLVwbh4jupJLNFcfJyL4nLZZqnWc1CMxGcqqcHSR12243ZavWzF6rKcsf8U7d6idZMEdzM4V",
  "key11": "Eg3M4ADFYU9B8kEAJ2Abf1xZmxyqQeFetkU2VeDB8wGKNnRxKpFH7HTPcNwbF1fTz8qusgD1fA78S6rVdJENA3k",
  "key12": "2b57bjLqfH5q6gByTGtSUXACnYPZwYFJedWT2NtHNRKwRBRdtBpPUtQTzHjYkoSWfbBEjB3x2VagDh3Y9ptYTMLj",
  "key13": "4ujrN1fqTEgZt3Xz5ezHgZJQapcPqcSC5ysypmjByQw1EvyfJRes1fH2dMC71A8KZM1hYLe87M7h3QJa24mp9YAb",
  "key14": "2ZUF5e8SYxH6P878J4Y7HuVeUfp1nb9MKo7VvbimEgHtGqN6ZVUxcStJ9h7yyYxeVY3DztHN1LG3H4GQJc8Fbad7",
  "key15": "KiiE4BRCRV9qkZWPofnVwkj8h9hfFNgZYcy4JY1MM8Vv8ejoxaAY5QST9NUwug3zvms7k3AtJ6bhRLDBJMhUpH7",
  "key16": "2qBmpxthx512FGFuAGWHpz3CsGuCHVHjpbjCFK2Um3bQfATnEPZcY4E4iYR4Mw2Zi2Kk8RqFaWVNgEgumores2cX",
  "key17": "35tdrJB9av3cDaHj4YZzQxoafwfP3aE61mMycCFJs6EpwpGkn6MBbVd3BdsPjWdGuTHBKrmk6XA5yvsWwkGyv6Ji",
  "key18": "4SYoZEo2vBvWUfNWRUV5jtog2fQFMZjfPQfQpVmvY6QXJLTm7Yc4oQ1EEwFczLehFH3qY1nmhaLEdGpSCCv1L3Xa",
  "key19": "2QU4wX16AUYtyB2xjXM3HCG3Se6vx5qBWPyjSM6ouvk3t8oaZxb2FmBfuWCGowxaXmkaVRJN9hPsSzDiFzucKk7b",
  "key20": "2UTYzGporA9tLCkTLe8mggz75oS5GNjopN1stjYDNfgmU2e9yDh9AXALdcWGFLK4MYCpEW6uRfPdjkw5qu5yur63",
  "key21": "CLmwah6UZ7sKbGAF2u3cgHpzbV9QcuEX3JppPVFWX5wQxf9ruCoRFJeBjbrRYNuyyBWnmc2hdVJLAeuYSew4APo",
  "key22": "JaJiVxoQ6AXkCjg4ijfoMLrMGeaYbR1iyuesM4368Aw7NHUPPzcXdiWvYVbKpEZKLXnhuqyj3X97uzS746GvYmk",
  "key23": "4bbBob5ePEBkuo9Zi1hUfDR6w3s2hWsWukc6ewfsRjAmD7SweZ1fHcxdofQUihBaW5MfqZBbar4MxNmRjQJsv4Mh",
  "key24": "3g1kqWi2GX63r9HsrJMRf4wo6AgA7qtiVzT2AtBbescL3qqkfa6TtpCZHXmLZgtHcEtTVFEEDCM67Ts2oo49srtM",
  "key25": "64JLTt4MUUpfQAQ58vosouDueEMD35gxTRgRwvSyAys5mcSNyTDmwTx7oFXvpT2qD5c9gfNr96GYMQ6MSdVNFcfz",
  "key26": "9Wt87HkaYYqNWnxRbuCUnVmn9HfV5Mr8EwN4gjvwtiiUhGhnNbsv3GuiHEXUKSyQBff9QpV799y4z1mqWNzGdf8",
  "key27": "66GpDhHtbCDv9v8zTwLZ4jqyv85A7a47T61WawQn4K6jWc45CfrbnMHA9dai2AMhQPzUPoCncuT5Cb5LpGEDT3SA",
  "key28": "3aWE3Si2giRnXA9GA6ELUriGRfKHuqnTAX46DFqgaLWMBuRNe2JPqd8qE6PSjkFjvoUqp7XEm6uJGvUw9RBp8raU",
  "key29": "2guz1yyJaZWhCapwbxBPVSUUNADthbESj1QZ7a1dfFpVVn8SJHw7MDhWsFwoSsGupZR7hFRTTYQ7rKT2VgQADYD3",
  "key30": "qdPV5t5baQbtdbzMh6AEBEsF7ajVvNVwcErHE1KNV7d1dfoPzgXf27iCfDB1dAazbAA5oLMo1b9Cz9F179uRikU",
  "key31": "eDxiDAp4LXGLBXNcpSymReEBCxVfBMwLbAevpskDvWaBFr1DuSJr9RgBnrnaXLrTSpyAr6X97Pw9hXNd1hodrpE",
  "key32": "3LK1juw1keUfUkumcKkA51mfexC3TEnpRvritmPSHbE6nFCTJUZ1u9obRHZfyswrgkQfAfBJfTV8bQHVuzW6XDC7",
  "key33": "3K9biKEBvcAwqZn4oLCeBP316zP8mDLcZPYoiap5sQwZcGFUVWBzujVSuA7ukGDDwx6mEHvnGsn2hDfAtDdHBAQf"
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
