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
    "2Z5vnctWboZJ4go3j65mHmKvQXGcBd2mtMHJ3KeVrkYUctFxvbspFzVWir24aQ3TqtvX2b8gTwLNenJHrZAQGdaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kbi8JyueYnuYoLovY36o7aVDqPxh5EKQQRvYwjM97aFALgHJBojokqWy5oX4aakmUUZtnGueZWzeBSV2y7rrW3R",
  "key1": "4hAEu3o7hVXnzn4qEhAY9RxXxzrWCpvBNzzEA7XrfsRVe61zas4nMTd6EXJXQdDNR2UA86MgmfHWRiUMXCeH8Thj",
  "key2": "5VbGtZHg16iDEqeaedN79tMQjg7mhgPoUaKDvN1E7ThSDeY8xf12w1ur4YmnFbFphmHAJiHpKo9UFVbtPZse92wh",
  "key3": "z5fVbsnciy6YP6r8RcmKvf9tb1qvcDrtUNefD3kCWQdpzZoJJqe6QknxgPXYf2oJzNAFQjSjroBitGvdwKfEquq",
  "key4": "4soMqxDUUjaGd4U6GZdcvSQHqPW28XDsq8LHdMnLYW2NHheUEGdtyiERqL2NgoD1bDJo3EDF14aTBUBv4EbffMMN",
  "key5": "2BU4CEgXsZkfPtnqegm7higkgguuarbjjNJAv2mNhe8RLbXChXpAhWUHRSfnXUZQTUAKrFTzM61HguiHNpuatzsR",
  "key6": "4mNVJD2vw3TGvnk8V6iHZnZYpB3yhbCraxw4uS7mFhJgaJwQBTuLZ3HAM6rXEK4X6YF6LCC44h9wV5RnpFJxqDW8",
  "key7": "3yVQ7EjgT99Vi3vMfaYEv1PJKxpcYxGQdFDkjaE3rp8NtfPjzLvFYhFJfbZWCvkpy2NCrnp3gw745erYoyRsxQSg",
  "key8": "2XsRLjaJ2v5mRJC13vKi391UyCYQS8kfifGKHQ7H2sBhwHiRKdikDMG9YB3VZPJ4dbk7UznZCbPwY1ucDLbFQERX",
  "key9": "RKngAC8Yvia1H8Ar9aCdqEm23x1XaFiiu5bdYtiLj9BCgvL2fwaNkkNXvL8C5Lns9BsLS29c3SChgB7828UZTai",
  "key10": "2FjpNeP2Q7vWzuJSHD1GnAWW9i39p5QoM6NBKtZALLq3TWpsiNB5gUoRYyaLdBt95iiWDUZ6xR5zbe5KkzcpGMU6",
  "key11": "5hUELYHhtzqf4QsBWer6AsBChDRUCqhFgRLfvxFBi6b3ukaZ7EuQoGVrpBZRgruzWfnjjori7NcxK9ttN8HbtTk8",
  "key12": "QbaUNv5rEjrWkJYGUKb23AYtujmxnr4Lez4zjqKeNrnqXbpvvYKdPeBeDVWFRkD3nYuNosoEivgjKzpGRM1h4gJ",
  "key13": "5apkT8Dv6rqr5JGAtL7WW1sssqKURFRVQEH3XsKFZum9suYWnLh1iM7NchhXa1zhyLTmiXxHeGNnNZouMb1BfnEy",
  "key14": "JjtiTa2o1M4w8ungWFMZhqJ5ristXBx6xwNzZqSdvzTGy9UqpExJJdStb5fce6LVKdzMgz7QhYSaiygVPLs5KNa",
  "key15": "5sEdH8RsBWjL2QjAXu56LLvqcea9r7XRoesvkcvXy17bcVBcbc1KPXJqsTEp3JrnoDh952tEaac94X7GvbkMAvch",
  "key16": "63736WA982kxTZ1svk87nJwEV8VPm8w7DxMGcnp65GQ5vGi6jNCQDucm1CM3G9h7xLjxWE4Vh47Nd2GZVtJRf85w",
  "key17": "yEhQayHzAAzDJA2Pvm5nJthwhRz8brKjF3sKm7hNbxmU3BiUbPEQNyvLxBSzv3a5nLuJ1Ud828BBDmPWH4ToR7L",
  "key18": "5aA5rFPoCJGmt3gTJyMq5KGaw8tKU9Z3RfeCXHgd6Ns2Yjc4drns7BMJWs9fix6W558ws7Ps4ohmoK2JiXAYkBoz",
  "key19": "3SyBaKfyLAxxURoyfXkwLikdiZLbvUTsKqJY94dygRjUYK7o5LkYumpgXM7tLfB3kT3FSTjzWNqkggTrKS3ak9qy",
  "key20": "2dzaD7nuKiBi5HDJofAAJ6ypXxNsBjh7eCuCGhxzmDH1NgPVeBskAgDGN4aRBgU4cEW2CNZzQ5aFXQfJmoYMi4eC",
  "key21": "5Dp17yQbmGE7Xi7wN1iwPgoSRV41n1naW9dXU2jBHrLwuQpEmRGfBJMzqSoBmdwVnDB3hqTCyknMPmiFN8VakW5t",
  "key22": "41NDMzQvYnHPtQncrqtg1F5L7ryQKzoH5CF26wefmncFBNgf2jLDoxFiVSNmgopgemGsMcGTuoMvm7VemhNL6XUm",
  "key23": "2EvyNv7uM84TTFGx5xCMHX8CKEvXSuwtuhD5Mpktq2YLRqaPzJbwkgAZLFQbadz4vqMZYz6t9JoBXNE9pg2RhbTh",
  "key24": "2j4FHnTH7uP5DiZ6TC6fnT4VEe6EwUBA3hSHn1imj9pCW93hFTskfqsS29gy19KDgYueHny19t4xagQ6KKLB9QCM",
  "key25": "5PqABzqFzHAmSuU8MF1nuUdLR1AYSgFRPsii5NaDvKUXXpFEWBAyXekmHAcVo4gs9Wpss2Y5W8PhdCFbKu9atXhJ",
  "key26": "diBnmuWHk9qUevLHNpXYNwwmSXHBqoUCUuwJRsMSax8sgarLyqdbxsvm5ft7aZuu3A8momi46aDqoUSLGavFDfX",
  "key27": "7AsC2D6LL2NXRQ5o5mdzjC7bFM1Bh7shKEbSoUvS5bskgW2CpYK1mys5CCJ29UVmCCfBkSd5nejUgYhkv41BEYN",
  "key28": "3CrNDdd47riat1b1N7FX3QY1F87NFz1mdbTEJapc9a8zERWbWmJrhgW2cNb1VS62ptrWUsaSY8Ku5xbtpYbZ4Cr3"
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
