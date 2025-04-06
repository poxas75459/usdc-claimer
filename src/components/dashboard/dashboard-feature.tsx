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
    "5XowH11NKrgRkHwg8qNwTQSXU8Sk4qqqMpy9oEoBEjkFU6dRi73PVUb5LaJVNcfUXdvj8q3rwvd8gLPfG35qx3Wf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61xx6AgUKphZHvxoNS4tJTrK7h5zYCC3bQiFjPgJBuePCLiA6YKU7TWjfDVM2tM55uvoWRccdwHtUUZQVZDTdfRb",
  "key1": "3tyGbBSQrKxngvmGZnuBapXN7rzd78VxFyWnkKCaggNnSZ9xJZXRRqEAayJyB7Ezay5swZVeYeumq6azcEBaRbHx",
  "key2": "biHqfxVFS2PkufZciAB8AWdQVJaj8bAoQfsNsXEyeh1TgCAUwqAGDTn8bBXzTt1T1bzKB1yh2eKt1ZJtHUTW421",
  "key3": "4Zdt35MbBCrUwPG8YxtoNsDjqQUYHyGzuzhCRH7ugMovvEJmkZazBorQLygmW28FpErgKpLpm4AaLEszTTPpqUPr",
  "key4": "4Jbd7upDDLmdgqnvGNhNAAmAj8M52zZTaGMx25s72gCWvvyGJE9wVrcURPUSanzU2W88CV8X58mgSmL8faou1SzH",
  "key5": "3dphvAht39yW9XMiwXS8bhvT1o1ma6MfWjaseyhSBrR4L3nKm29PPuCHCReZq73ptJaqPPE67nvX9yTLy6GCBJ26",
  "key6": "5z14xR4cTHWC2FF8kGkkm7Fj9cx5xagHwFptzJNuUYP4PiGBnQi892apbfSshXpWe58W3hXu7KqEnyvNHSRD6nDm",
  "key7": "3RWroakBz732Qcns8nBgbpf2j4LfgNSbiVA1gn3HWejuFj6prfdQ5C21CgaWK8jVguYVzw83CY9U6SchdarF4FTP",
  "key8": "2vJbxgifZXV8ejEXqypWHcKUnPTpsUYFFFig53FUaKMkB5W2tz65XL2XmA3ioaSZgrY8rBjWanUBLnerCf98ezjK",
  "key9": "3hL8kweM3gVjnK46iNHnpMgX6KiHcWYmNNwSk51PuJ869Br28Ps3kGh5hJbjid9rafVF58gKsywDjMWGpahn4b4E",
  "key10": "2U5Bo41Xk8hJmEeMSTXyvLUDkmUFDBtk9mCQEXKNkhPsWRt3HtidcfkZzqq3HpDSNRLxufhJWbneX6oU5gHVJ2DK",
  "key11": "3mSjqDahinkUGmbFir5dJuLbmxBeoZFa66f1WzVzuFxA7DnZdMcRwT6WkHi9aaYr3ULUZhafn3scnmy4hewDw2YK",
  "key12": "5t6GcFuCG9hgyAaChWbW4xDggy3XpZr4FdLWxGjBw3BAeGhhXcNuVpjyJozVyzY99fS14WeEVy9VtQXR4wWBiU1X",
  "key13": "2jcZwGyEHrqsTnU47pFktSp7jpvcBtRGmngr3ckCyneWqFBhUcX75xmTc9v9HxDMACLkmaY5igcE5s3DSEhZS1KK",
  "key14": "5tVLmsqx9AFWAxxgzEtb8GWwvaVftQ94hNynz61yS2491CctCQoP8vTBsfH8iJZGLnebfQkfHWKxyJWpHx82GSi4",
  "key15": "43rgUWUNWd1JUiXkrJKFpWTtB7U8pPRXFRD9DhPKqs4Uz8n5wyyc5nkX3Yv63KC8WhdsXgqp2UuanjLyLRSMXz9E",
  "key16": "5S9nTtUoCK9MohVEXDQdnfxBzoN4XDFHBZREPbgPu36MM9HZoiRMJC93x9TJwUfvqQbnNypQRaHY1UgG7oZaq6KV",
  "key17": "35NtvcPPXx1CYSrh13tiqB4hQdGs4NiqDHiaEbcwxfgFjhkhVdtmXFubBJFMUuoe1ZEhiDKrttgrp36UHG8o75Tk",
  "key18": "3SKSB5n9AMJpyczrMFm35kGodFYZqyAR22MQ75b1Wcfq4SDvGJJpKVBgWghdxpqtBaFxfwa6QwsqBsQnTj2oqfSf",
  "key19": "4z4k1h7FQJpPfE8yrEFyBrU3jawAvwPcTVzRzRBj1LkJYopB63SqycM6jWGygyLvfavWhgHvoNSKsNcay6Q5y9Ky",
  "key20": "zzCnw4i8SmdWVtJrEKWByj6S7jd8j38B8wBxR1ujjYTuBZsmYUqPq5a34YGL2aJ65LEaPtxqQm68zd7W4ySEaVx",
  "key21": "2YRxs4B4mkhwniyVYDJ4kqAASmoorp4WxVPVuQgAFrQ9kot3j8j3QHn9SgF8Y6zn5zmLNXPCMwjxD2HhKHTnyZNA",
  "key22": "3JqaskLkpQFvePkW61LUuhCZMj4AJa5RsBLr3Z7VhJJTr7z9jC8qgZPrPHRCSWXEXf3USr3C1ncHFqBvqW3BkyCV",
  "key23": "4uCCqn644z4EqDqAqpiB7pQVkUvCDycLxYpbGroKAbUnzmxkT1cGvjYyNQbpmihaVjegbqNMfaQZN7XR2y5otcps",
  "key24": "33c2aCzCApF5WMykanDAK2KdvA3hbVn43s32XSECqQ1o4ioNvomUKTuczBjnugDiRv2hggw5qBHCFWGmUZCo68xk",
  "key25": "5LhEZe1nfGjsp9KDrxe589ybWi7n5xJp7C7vcNCKBNV7MNjQE3xzbjR15fpES2DD2wqA4df5SrjEZtL6ASx4wm4g",
  "key26": "3nnKCRhBGgHGug7NUyJzDk3Kkv7AxkJVnaUbr1b4VmCXy3N2amusXRfdbRFKmgZtFKGtiZYh18BmMpCZ1ssqFVGg",
  "key27": "3vxsm9j2sjUVn8i9ECud2FrLQS6NrH1s55ysp75MVwUpGT12W9YM6APRNNGgKE6CsJuGMjQtZVgdmDAEXuTeemKB",
  "key28": "2QCjqqVHEGDckHTAvHpPXuNbVk8Bh8bG1bCHGHWpLyTVQJaDBtDj3JCxk8aTq4KHbyCqnemymWiEbyDgHhVgTEo6",
  "key29": "4aUWjL24vZ6mwTssgDMGsDsow8mp3hnXE8AqLktMeEk4wsP5J2VKYQQwcxcgJdCmBEdc33s7dgbN4uE8macAWSaH",
  "key30": "2UVsHeZRCRLQHXwk1iD3qtpHTvMMoDpZux8Pftkv3DrB5YgSmVQStCDs7JP6wwsHNfxLNuV7rSiSidVqzPG5TGx8",
  "key31": "2mVCARzvQqdVAumaXLCfL1fXCxb2ZgtESY4nenLinbfPztjp2R5BBS9aG6bkkR3qGsoFN99owy4FsqAKDBVaxp3H",
  "key32": "vGDscvKLHZ5G768GJiuzkixPXXoUyA3S2DjPwnxiEhvm7bGzfZak81P2RP3DYAXdyKkfTFV1DpjctwAXDSCy8PD",
  "key33": "5z1aZUi6kGN5wxLZhS72dL2gkJ6JgJFzoV19AWFhqWvh7Hox3bdSqoZ4Z5MVLKsiJRMaEJMRriPKwJjUENueuH6K",
  "key34": "2MAFHFV9cFzaVh5tETWymqtsWhNzp4uGgPLqujwNUQhxgcfCz7cD44G4S7Z5ANmthWQt2D72w9mXyB8DQ8JJ4Ybx",
  "key35": "ahHZ3Y3mruhGxUdwKJRCia5FnPpXFYNoxgFquDRyGx5TfS8H12vW9Kcw9qsuf35AFgYwEDCxSnJciQzuu8xTJ1U",
  "key36": "5su8zRz1JX2GcLJACanX58osi2AcSNpHSNZXLauR8ch5yVr2kphAq3KgwJj3pTWjvoTicqmKM5RCYa234zsikvWn",
  "key37": "4YG6uEyQYZTu6Xj58nVGBiWc4CmegHNwrxpiEK24Nz3sog9sF6zFkthaXdzpNuBCG5Q9AarQ6ZtPuWZVTode47Mw",
  "key38": "5zS64KoNir5jU89C7BZDEBRaoqF2tq7iKHraGK2y7LfakRwzQeKzN5QVMTvjqjzffpP25uCC2swmknfSHHaB461U",
  "key39": "5HQ5rmjaAdLKtetf7d8qKdPxXJZdHLRUhgzA3K3WL1jZBiqTaSMAD54LEUkJbNU3sTefgLxW5wVdKPD1jUESTUTJ",
  "key40": "xzS36sCnb23FVuHdBgYCmDx881vu855o5mHfGwuRWQfiwyuNCm4VsGihfdmQGJRNgXJw2Y8iPenAkp2F8Ys5qfC"
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
