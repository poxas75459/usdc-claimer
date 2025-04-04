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
    "37TiyHDwv9tBG9LcmKzaAmTb1mkuGqtuciHakwHuShbgjv3y1maS1fKriSBvAWGuRrp8KhebDLcBCavf6r2K3pGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oDdnWQdvfviDAMcQ3QVojq86pae1YrNiqYbEoFMsgUdTtMKTUqS53sptbRYRBwsxLo3GC4RgJPbyFfmDezXe1QZ",
  "key1": "W4t4qRVKDjZwebPZbyeFJcj7g8J3Mr7MFPDZ4zwx75WBHBhgfNbbg3eqBmnxEz8wAYgnfhFsEfSnfLhQR31rQCL",
  "key2": "3q53Tqzu2AYYftHc1pewHyTJARoi6MGKQ7rSwFRbYAmCcdd9jL67Q4fAff3jGybJpBd112GRz85U8e8fXJFDXNCr",
  "key3": "2MFkF2HqCAovNaGs2Yxm3Qh2s2TDUjm3SmNNtvtD1XzVQAU6Kumf1GyPZLso5VVyY72MQfxbCDL8xyUTFhv3nRWU",
  "key4": "2kYtqr2AZdsKJZtGG6sKedBax8ioNk97gv3mPPqzQnDBdiYvYaYEaqsuAbDZUMUj1dcn4en5rMCRYW2i8QVeyUJb",
  "key5": "3iCwwfxpkAbcU4VyrXDzBQMFNjLrYduAmFyN7oZF8f6miqHmr1Y84ybXC2T4fuALQZp9esdxdbqxbcMUBGHDqhBZ",
  "key6": "2trRTXm4AeF9xdkKaNthfuy9qqkKf9Qmr6ZE8tqjJ3BxBLZqs5Uy4nah5Dow2GU41ifexo9pCC9CP5qqFETULRR1",
  "key7": "4u56fR8V2Mn3ewWUDBhCxaxMF1BCzg799p7bAQWMrNHzFKVJm1qkv3PpzYhoYm2mVnv3fBzUtoWK811mKoaNbpP",
  "key8": "46KwrZESRJB12mtNTjaMJDKcgt8Z9m3f8QTiVbTUdxXQ6XDTytRitADVVxJEyr7hXP2Yz7j1DMojPjZhU7t32DmZ",
  "key9": "3ZLTyRCEhHSQ1sGha2BGjUcTyiGNrxbJec4HHuohmEo5PgaHGyqWFjWg2bzXNJGEr7xTJBrNiRZm4DorLdXJcWiZ",
  "key10": "3BZhVefGk9XTk3ezvxh1JVd5DCjFM6EoBR6FrGj51SmeBZc4gkr79KC6H1mi9QVVKWEAXHnc2ASBwhv42gSpJKWU",
  "key11": "3sRrGy1wjvwEFGPEN1RzGgPgjYX154XBVvTcc6nPzKCWMjRUXj8FhBAGzgWLLqjfdN8j4Zxdxh8iGz3W7TaPFujo",
  "key12": "459sN5qbfLJZ6pswdmogbF6BcYhADSEWdagAgMGsKt9PjeK3zNz5Zn4sTNu22N8UNEUhV5zBFduPYhgnNvvANRrH",
  "key13": "3UurqjKGGdYRFTah5gQQWHbcpRbdP8Q8ZVSiXkwzMQ5DsE5oyxqcUBFAaUpNcWGTCU3oQbFcJQRdfWSCX3dBgjVg",
  "key14": "2TkiSMqHK2Mn173A8zdcW9x98nvsK3RVwNztF8RJxAnTk5EA3bnhR2n5CaS45QSjf2AmeT3KcmRdQ2tTuHW1n8U9",
  "key15": "4qXzB5buQxosB8pSeU6wEGftWbqFCKPfcgtbEemzUsJGWHrqj6nYibWJp45VTNPtNMUZwvvJkq5QKN6NHFZvrKwb",
  "key16": "45TzG3sLcgi1jz88u7x1s6bB5Fs5q9oc8u6wXspTwijj9xNJkhJhbyHQYH8fpBkyunntWrKaeD1tT7xSMnFDiQrh",
  "key17": "2YiLX3RrNVvQqo6bq5MRFU4JDdHUMwKgmAbTUQxfAr4uPZM1wkM8YBJTRsRyo1utDyrVwthunV42o69us5dqTXWE",
  "key18": "5trg4p2P3SG6wDk9daBvgKPCyiLRHQDVzeoafe7gEHEzwyaQGh5pcDSXGK3aKRMTcB6aebbbANrqdMWDvfVm9rXg",
  "key19": "mZE6vRHxPLPos4HJG1SrzgaBsd1SZXqf5pMG6UPsq1kXrM2Me3P3vJG1eyXh5wWWENjUge4TGZG3TfXLXb62fGn",
  "key20": "3QGvvoQcD3ZdLcVZHmeSCwyr9NXRGgz4kLC8mnAPw3wHoMsrDNmv41GKLzHSCyAxLGXcX7MudYFetXV28FzTvAHw",
  "key21": "3vmzhAQxYpc4odLxP2A3QU4GdrXJYNaQYkyygNbEQ82R3NrJPXXebmqTE5uBjNFe4KuZekdBgCS1BcRhQFo5jWNw",
  "key22": "412qK3EaH5di5Yf7F8j3KXFnCpgGcMB3fky3hZ66BCd56UcwbcHDuRPnHTkMZkBChPsMLpM8N3UMLRReeFSN4vGf",
  "key23": "5ZZpTyzLmZ8yPb4TAn3rES75xViDrGnHdBGmm8jFXH3WS7WiFsw98DqAjoRfyHHkrNpgKE9a5rb5pE7MXLyTDF8N",
  "key24": "2vGbA3ZX7o82SRbmApmRAWvqJkyeeBUzVLGHEjMBcrwGqT7KkT1PfUNVLKkGFLNfUogwXWWiet2oSfgLh9aMQfo9",
  "key25": "5RGpboBtMBo5hFWPiF2muLbDADyi5pSY3LvMnUMMdbJAvR6YdxnemKKeYmRFsoH8azvcJsk5afeSdEty6ib2rVwR",
  "key26": "eGxQXcQYs3fcZh6bF9XGYAz3F3NoYDMnBphEZAA5prUy7bxuBcjYm9ghoNuaaNCqz4PALDyQHpCE8WBkvEpj1cT",
  "key27": "57p72s3bRUCfzfKxt4Xmt4dSU373jerAspDTKMXu7KTKDzpYF2tiQ3KPP1GMmr3Z47VbwPGncHPQertGoGwYUvvE",
  "key28": "M17zr5XnNUKtyU3bDtomxYUjF4d9u448fxhKLvb3rzNsLVrzhb8Du4GuLwUqebCUG5tKgMhgsH5AADBa26Brb4d",
  "key29": "5noa5aQheQg6c1zY3nNUCvEQDgomMimaDsTgeNGnosGjM1qRpRNDo5EX9djWmdMZ9xuVk6QvFrmVbQoJU7Ks4fgi",
  "key30": "4K6zurTbFCepUBSRvkug8VcFTwJoRZSpWnErjAU8WTYYcZWZgWUH3QcMLmCTM8c3wUkhGYEyyMscAWohjCATT4ir",
  "key31": "4BnhUD2BHkYEewHBkMuJJ3Tqj3n5kCRmyUnM7VFr3kGPPtmfEpy6k8frgWDFdapHfVHNQko3AumLW2RKZWcTdjML",
  "key32": "4zHhP8YsS25VMgD5FzQ13QaqCZiTkJRbyLQTCARrAwBsoJTgGKj1Sjebyr2iNpFiG2gPPshqJRZB13NKGHgbV3an",
  "key33": "wPC6PkRpKLFado9Fcy6peJVTrkam7mjzCTmQ48KBauPCTDsq85RnBKAMe9RAKYZhRHYgKdSq984pGQ5oe2vXaVa",
  "key34": "3abVn493LDWw9y6S3yuoYZSNUEoZpE5ZqFXfSYUVCeFN17yVjxdEZ7fArJ1ZDwGExC21RrCANQt3KfrmJNCsvjie",
  "key35": "XoeaFXeFSLbZBfExPgtDrPkJRj1fdcRBHLH9P87ETSga1rKoHDvbyQYFfghYiFZ4NYzceEPYnsA7MAY64ZL9rCT",
  "key36": "4nWH7a7VrHNLeihJ594eSjAHL5qrHAnc2KBXnSh5o77FQiGhAoAnbTmxcjqmmTjcREMhQyFj7sBnT8HpHaPViSm6",
  "key37": "2egMGi5UTUuTc4NtrKtWQiYYonHnKbV4KWKfaxbN85CcFiibzDgCqLpHcNkVKYZuLeTtsqm1ySP46Hhzp62KCDcr"
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
