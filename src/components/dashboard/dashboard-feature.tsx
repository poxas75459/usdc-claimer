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
    "2MQWMPpAMYMmwin8GZ8mF8YwKQXDsjnQW8cFxouUVZsg9iBBJ8kHKqp9LzLUHvzfs1GCWwLkRdJpyMPJxnQZF8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E69m5cUZosq8ij5wfmiWtPZvJAkW5dwr2VgocTrD3omYYnpTLGDRyLLhJVe3sKWN8CyczqnevAQn74fMxSqxAPn",
  "key1": "wZi4pUjYb5GTNZL9qgBNn1pyS1DiytuGuSU9onfqQUPaUKCzG7RNRWaWjWY3gWVbhhwCC3zYF6CFYWw9bJcbaCF",
  "key2": "4UjnFXWtRdubEenzHuCzJiqcRubPheY92wfR6ipt5KVsnr4H2hEqBkyxUJGwsVvvtzzPfB9GcTDh1TPSQSVWMZyd",
  "key3": "QSa5Z4rVdYxAyHy1pfiKPESJ8uPcBq1vcSggExM5gwMBFEWt32JrZWfXa9HrLTwMYfmANfn8zPacqj8afyqWPxe",
  "key4": "4WpcimDBTfGTNivLNeTgtSUnbpWYRMR81Ub9KTT6k4mXNhTSu4ZH6nBJRdrDwdwWvLLTaFSkN4mpaED379vscrt2",
  "key5": "2anAKCbAvgAPJr1AMA16gmSW7bUafXT6Qg7uz3ut4b99niFwSXbWrQM54kD9e7G3Y38iL5juafg8v3mjmkbvPYM",
  "key6": "373RnkYL58KzGMutdzCAfGWdf5Vor4VjhvmKLRJA1BufVToZ3fKnC4cz9BYSoAK1aRk35SWgGU6BzqHyFxkx81Sd",
  "key7": "3akbcKxrNZno2uYCCbPnYBxYjPyWDSdHL6b9Y8hem7nvL9WjXRLLdHG7HLMLzKjPm4y4qGhEx62XaC7sUWf6KJe9",
  "key8": "4PTLaUioeAaS6xSYD4sxLZcsiD74pcURRYS9pnsrizM9cdntwiq1TriULBUwnveTeuCnREF97X5GkFUSC92qSBos",
  "key9": "67rpVHAxAzKn7BwfKDBnVrs95mFqsDfPNS3nkDg3ojbBF26smcTR1bXKWzh1pw9yuspAMdfpgFWtZVStrZti829R",
  "key10": "3Y5DVYJQozbn9ch6ps8ujHWtyL15J1ZuPxdvKjVLQB9zj5G9bHgr3AoiGvKdqG1Piu9RGxrXfhhaeoKMJqJVRFD1",
  "key11": "3xeuWa5jCPds2nxp2L2CV9qSsJjGfUgKYSdPrwA8uNzFNiJcJpp1nWREviSmQCHkgRivqFs1xaLXJE3tPhbSFdhs",
  "key12": "44DurmuCXvY9vnTkvFBnhdC15SqbBZTbuo5mWDUSHrxD3BbfKnwemSRfAipsfKSBjLptT6VCxeWYSv9yXR2hrRxj",
  "key13": "5HFb6hmScxB5wm1t2k4D99g2o1F64eA67kQWRcCGxqsZ8XB2FFKPsLBaeXzwbLLLZ5WZFNWXFECNnvbqyQa54p5i",
  "key14": "2Ro8v9zNeMNPv4ChJrdgKtnzt5Jv34sSgb2mKAJppAc8k55SNYowrsAsmaqYv4wKqBDWsAVvN9VLgkWzfXpyskan",
  "key15": "i2VnrT2kkevG6RiWmDCoXDAbqUVtVmdjp1Zko34C4wYqkfmzyz4Gk6gJ24MYgYgaoA96YL34Y1EYLSJm2yQiF5m",
  "key16": "RduqrgdWj3HfRRjjqEqy6ncHPzhpm3gKqWbjUPjJTjqnRR4WSdXryioTHsRtEZKkUun5bqN25KCkuB8tzRneJGP",
  "key17": "tePjYMXu9dxmb4jEoUtNnJwmyYQQnStptYnjaFEwp4trFT7Qg1DzmFgZMBwAp9zka4A5F1gYxibRULB7wnyser7",
  "key18": "5uaZmQ2quiw4oZCNjDB5HSt3CR3Q4e1FYweSFhvJvgVspUFHRDBfLtfWGWi4SsF5NitiCixG8TTbE1YA5bXwBhGE",
  "key19": "5X7N1W4Tt8Fr5RjjHXQZh9oovbPPAfGzdNhTtpu1FRWoycW6o9vurikiyVXPU7Pd6ddRQ9jraNFt7CcFJFognq1G",
  "key20": "2s948GnCfeTdaz1HU3uscLtBfQEY11FDpHVVUsHHhUu9nNm1Tb9rXXx87j1XGcjsCg5NDTee16gQAJmLYvWEb8ih",
  "key21": "3QkJXmMiVRboL7qZFo2Nis3N65cPFMePbRApm2HuLbeLxXuEjWmPvasecTj78vsRrEmm12moPdxEY7tqKD1QRmhg",
  "key22": "4UgRJdsY1Bffs67cCvauEgMajuzMU5kEMHDnsR8VMiyNaFuSjKq4EwAyi71BsG9dR1h9gSer7eS3dsNrnF1GTnHn",
  "key23": "3XD1WadU4aFtTWJefuNQZEvimJHxmWFoWhhacCz6NPsf8HiW8SE5gDagyKNNxobNkxJsbCKHupHKsX8X2YjBqDV3",
  "key24": "5apUZbHXtXX4mMfFvt8TmSpfDMMKB2EThxiGQpnXwbe7HXaWb8JevV17h885hkzi9inpY2rcfwKpJcPQXAjvUK6x",
  "key25": "5DzJDxuAN37sDvFmkLB9NWEfCU1D49wQ3wBM8SVyc65MhFW1tHpuKwaUPvCWxCkqZSc7VbKLuoFQGGn2i6yTaqA3",
  "key26": "5TBjf3P6RQRRS7HpjNjHmYrmpcS3GSy3N8bfU5krMDQ3Cb7yvBwMXUJtKKwkPqM1zqfiw46PcTXoVSjWEKtKbHUW",
  "key27": "6pxu9X8hgSaNRWymsryLk6QRD3PMHBUcYbtMxxfiELet1ss4bzbzcSMjHzpKL9FFKp3DNxZYwmAMKrMKNdx4ii3",
  "key28": "33PjpKhvy4x6h6sRWZj4UEcXPF7KsYKN8ysbjcgPvkg9fE19DonR3PrmShC17xRprikgXg2CnPzHAYhSZozyBpK7",
  "key29": "3DUxJNoWLHkyuwEnVijt8Ud4xaQS9qt5vWXPVv2afZ5S1FJh31UoUVTen6q8GBBo9qSUAgkw6Xer9pgjB7wE9cDg",
  "key30": "4B8sLitbogUrqtjNzM56t83p14Lcw136HUACyMEdZPEPSSESmJ7zf4qHa3uahPYBtT4Sk7DeNK3BTTJhEdWmYH2V",
  "key31": "2P9QttKGpahdVLwLXgU7AJptmzVQsvMgP9VFqGbib3Rh8d9boFsMdoteGNRnGWT19k5cXWXmNRygwuySsqQtFSRP",
  "key32": "x1MTXNkqJMXv9Ns7kF75t5CeF6UhFoG7EjjYWUHpFMtG3CsQABNxzXpi5Fk24yLKncNZ5FUbNeC5KhPrhzBER27",
  "key33": "2MLewEpCUxSa4iAYQLbaTQUzF3NrzT3QhwyEQwT4wNKWnbj9CTaaPiVNuCaZFUJDWFk7JiAMa8DkmQAYCx5mAhEC",
  "key34": "3j4gvJdmRDmXdktv6F6W7XvQZMXwrgFmyHA3bVSC787VyDvEJdmrHPjLX9SNucG2g3kph6maYikKrB1EsmBWZGPK",
  "key35": "B9fy2FvdJ6maH4yhzz37sYqzosYmDbni8f2f6XnVJe3SjEBb5M9dMcQCh9VBj17spHrAEU2PFetEkD5bajPkmWQ",
  "key36": "3Ay6ef3Kpe7btZE9jsqsvugoT2hnopwHjfnXWoqz4WarLhq3PyonqZA7nU6T5rWgr6tnuDeGUv2bX9CK7CmUS2TB",
  "key37": "SYYxWFJfyWCgjEEXq6KdmcVsWpa7crYQKZhnyyFJhoR4TaLPfRyiGGCxne5ktssagiegNjS2zaM4woghwcHEFHa",
  "key38": "67gkovF89dvKwiri7f8MEZYKWbr9EJsRGMWwo5BuC7SDHi2wpCdtAj3HYZi2VFa5HKCB6TAe2uGi2JvwBfx4msAk",
  "key39": "5T4pjbY6MF4Gedf52fKxfa1wvFrJzLKMVMhCRWZNbo5NEj7LnML5aWENmGBoJAbn5XvHYZHXaLeNRpXUGgFNNy7f",
  "key40": "25iPA4SgwEjMgRZrYHZ7KRA2ps3ZGidpMjoN6hQi6fECuJCYm2impRbkEzsEvjkg1jvt7Z1vh5Qhtbx84FP1m5LX",
  "key41": "p96Us7i3g6dhv1xRPTjbNRgMig1pGZ2ncLQxyWK1XZdgD7LhrtWEHbTgi5a1WWZG7htVctosc1uhr6GgL5GF2mD",
  "key42": "3Q4E7P43EhmKPiE7z81oCSBHkwV6YKvkTnM5KEFnoee295J6Uwg5TwN5gusLGrKzkumr8CeXEjyJpiQaQYPPqhoW",
  "key43": "3czYbdR3Z5SHgFgR7tw6tNEX7Cwp7WNXSEMtMczLBhDppcJozyriM9xnfSLGqAF7DTy9MsvjpHvLXERhpe6Qaeph",
  "key44": "3zc14km3Lpxu58zVkd8zbpT1n163zm7bMK1vfoWcZETGyBRTc2rAG9tiNbkrgWdKrz9j7SmvpzjR2qiTy8G7Tfgg",
  "key45": "4smY8tsHMkKHsdMjuAqpPWz7TXqRLaZU65Zhr5C39vEJ3S3W2Ju5S9Ybe38LugmP4jRcQtk3Fe3XnkG7vbKqaC1j",
  "key46": "rHYNFMWSY3rHc8uwc16w5iDndhYARyeJyaEzN3rJ2MymhUB55oDUSMHwDfVAXzWSCYuyeGWKRiDTWS428FjJoZC",
  "key47": "4RpSMZ2Hmg5EkcEaeYwCnbXDWMxmu4WRHyeehUp7yDujfs6pvCd8YUx1W82bTmXmN6Nx9YmW35hoTpUMNCJJHEVL",
  "key48": "BUQaKJa9BPb1av6r99YzKZNML5thrkbcr8CoFyJEL3YqPtZkfXYJjjbJsPDpT2Bc94uXhFUpuH4an9Bs3WMaQTv",
  "key49": "5X1pSQ5cDCi3TbVAx8qKwFyYs4hF3HqQMYmoAu5AZ5QTncsSBGtFty1iHsi6dyBmf9RGEQcBtwJ8hyKN4KPPfpus"
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
