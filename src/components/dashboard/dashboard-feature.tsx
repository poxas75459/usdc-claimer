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
    "4c3XaXoVTRWYF2rGAWw7TzoNDFce3oFrpT57V3BSSjKnAthGEafvmcW81Qpfyd4W8boPMYzP817M4NzVjqQkYSsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XWvqE5wZmTLQ1HkPiDhwijL7BkmGNGZpnJ2b5QD9WBJf3Yk2c9ENW1DwRER6hfMV1jpmQQj4v1WNFfRzBgxBVYc",
  "key1": "YZ3dQ7SPBxxeZbwrWJMvJk5YUsfWLFAkqtawNdYUZBiPHBN2mug5A82o6QbqfZKbAZLmk7k6nEGfhYnnqn1S1M4",
  "key2": "DZdgrQj3wtorhrQk6L7EhXw7MSeyVgMeHQ4iBRGZVksBAC1oJKBumab4QSajk8eXKWqVBYnzuHG1YAhixuzYX6A",
  "key3": "5ypJTiJCgHc2bwTgMcTNXDfQpyzRifjEZXsUNtSQAXnMHjx13HK1Cr1Lo1qUeVXw4RNvupz95oJSWfZ3zQ5a4GRe",
  "key4": "9DhxryzsE4TMMGbtg6DVtBhkPeW6Jsh3qaY9Zbp6H8zzfH5UoSfphfnT2upxs11jxP6ri5ytKLTokdCrXCHbWAg",
  "key5": "5AB2ooApsfsvPCEr96nyypivtVEKGND3NDmP2wAZipDrbMUVJTTsXdvYGsBwkYyyhB8NhvFFsJYrrcV65ddGagqL",
  "key6": "2KdNuXWm3he4373Ep433L4xip5moWL3N3AbURzE4c1hCJ4rZHc5zykFJGjiX98zjQnzHxUeBdoqVJ6D2sQDtfXHj",
  "key7": "5sCSHay8qGXJixZ7Vmg8iexuRFN7MCJPYK5Gvz3RNinJrunstQhnLfELhf4EM1yekANSmpUWPMcjnRa1eq8UenXh",
  "key8": "2XnEoGvaveHE9xR2tCpSz3UL71s2KSaTaL9wtQiFWGTNAZAKGLc37AmQ2RNEaAGuLqrXaUCx6qQmbKzAJGRT3wvb",
  "key9": "4L1vFrncZCWWDNcHufR5MB6fb3sHt23RtSsvXFGi6MkGAJUTe4zBMB5xpsnkPKULJ1iSeBsmWN7SC4RpmeHUMfGH",
  "key10": "4ePsfMAaFCDMqD2s1PD9JECyVwH1zTDpxfj3DwAg2m5UE6qZSZEcXqoGn1Yfc3LkbjWNXs1jhkCEvbmD7jDX8qPB",
  "key11": "4bKes9brGrCRPkxW8QRe4GycVQdejaYLazyR5hnRcRoo888effNy4JeUWhK8VvGkdvSKyjffYzdLxVHjAjgiahLi",
  "key12": "2XxQj6WmB9B54zdD9ZMzi9N7Nzy9esWk9pgV8MuSMWxbwgFgup49LjYfje2DYENdsU9kHWg1MCta1YPRuU3TxQ68",
  "key13": "TL21dfvegXWF7V8nSAt6QBEAGszn3CrBq495SR4UcA1VTAAus37R6EV4bQxz4xdNMU4kj72sAi47FkqD4LW214Q",
  "key14": "4AdmRFQqxDKFVC6QZ6assQbaHEMTcq14Jk9r1Gj3Y3nbi94pCjCpURo4Js3prCoFPTVqyfRZRwbVtG1BVs5bxYKX",
  "key15": "2ao7PtuYfFNUvDv69nKVpfeKSghzCDiHpRbHZXcbCYp5jLTKQHuqtTLTm1tzj77GAnzZqcXhL3SFSN2G2Xh21RSq",
  "key16": "4Mae7FrjN1hqf1puSt6nnZNM7dytP6Ndu15p5v2DYGCW4eebU7V3vKr7zcbAzh5P5zGgDL7exmvB2Pjs8dfAXrW4",
  "key17": "4rv4hpZKN2qe8UZ6P9CmmVGpSNCNYcDynqML5zGS2eLcDCwK3Xp7qyxKPgrjAnjnVArAFizRvVKgviw2aa9Y2AU",
  "key18": "heaove8SS2qsJLvdeXQohx8bJ1cAs4ARe3dPeYfRw6zRT3eRJ5eHFdGNgWJNGqGcyyFqV6zDvz6cb43XHcE2cae",
  "key19": "4cCF8KaEcrNoCXum9xVTrbVeix82An4En2dSsnxodU1dfmV89tacg5guRdFZGc6PqapAJRLgwB3t8aBTJtMnAiL",
  "key20": "5Pj5KHmsxgxS9qM6D4rn7wb3NEwq4BvxUt4ovRfiet3ydHmZ68bYdZZhk85f3vUWbQ9zHty4b9RScLDyoA2ZmHfw",
  "key21": "3QRz7HKcJwKVkmQns3DNJsLN9raZd5FJJij1eZKJuH9zSY9K4UzFbsrxDW2h9VLFomsFm9k6tvc46o1aTfyY6Sa7",
  "key22": "5Ruk4MKSknCqKcHGTAqR55UpiuB2ZSW5JRoeQimYURMKyohdbKH7v2Ve4drQ2qnpStN7mYVQaUmE9p9r1UBAMufJ",
  "key23": "2znW9wuDNXYEkiugX9CqPqBLaHnqTvoCDMRJ3x27WxDeSJQVqYmoGd6mBr2dXStR6xr9oGjzsPbWcwyMqWFNrsPh",
  "key24": "fVp9LGk4DTgQgpL5djfBDn1apdsD8LjegSLgNjLEcQ6fLHhKNcoNLci5rzDjozZ9QRtgadUo9BRSWWpnX75fWY9",
  "key25": "3NqwMrQ4CfZgcHSFWUNvX3WTX61rufRw6CFqnNJK35k9UK4wUcBQnspwL9YvthePR5e5dBBreEctDWdBDx9FLNWs",
  "key26": "21fGEJ7LNYGkA9SLJ2shiCzvhYXyXsKnCqTwTJPwVdToRZ6F3tjJb6P1Cr3itqHBy6Xfyu289AjPHQxGZQGQJs76",
  "key27": "5mmsd1Zy96eiXH4hZafVQbvhYi189GE1Nvz6GLfBbkXcooWyWNj6bKZ72LMToZFmFZhJa5qyBuPjoXT4uK4kpvUM",
  "key28": "2KRWKdbGidecbg7VQMXiHyGXvJP1zitDfZNMHc9p4W8V1StyZ9yhWXJmyiJzjUqTXgpQoNYL8rjg7guFSTtKHxxu",
  "key29": "368YZHdcCkWw1PEgTwPzQRRbQo1h3nWwdMK21pkPmTH1CWFTnRbj9hvTmvPXGmMhSCV6qLAHFerwopcQAFZ5sDko",
  "key30": "rCHcLr5L2cPB9v3uF3oTm57c4nWKfKtyNFm2T8VxHspzXG5XcfLj9VPkp95EqLvTE97BFcvofvB1Ww1HeDWgZJf",
  "key31": "4ZYKvYu21qeJdgaHjVndQzxMn9pKwzj4g77d5bjRj4dfAdQuQUXZL15gLc8inpywsfSxsxiT7BnytBHHbr7REgxf",
  "key32": "3Vb4zpz78pmpA9wfE7HZA4xdGFsSVN7bAsuJZsHizzEAUn3R8b4ptyt2fkv1rtg2tC1vAh9syqawm4VSBv2VthY7",
  "key33": "iu13399XC9GDxnFSjRHkH2aWsC9Y9cU71K6uxBq7b317SdwDV8WsBSTuuY5ikrx3LkQqgbreeemvpZ7mSM4HJ9i",
  "key34": "4W5PpQt4WQG6zpXCXJc5LXdcDSTzzrK2vt4whPXorqEf2s2tQJ8kgMZb1g9zQpUZ8wHGkYHgu8HFxwtWNjpgangx",
  "key35": "XH7415cgdDE4gGXphYCQhchfnuzaPXrgcbPp1N5mvNJwxhfgiviMwBwQ4ABupfRc74stPVYvQ7Do8Ssyj44byoG",
  "key36": "4zeSMLXnKadEhFqk9BrsBve53jjrLztkaj8VeUNJCgUzCnNzm2UV7nWxWJ3vkMqaVvDzWoLW9mMVVh4eScJbTE2E",
  "key37": "cWeBR2A7nif3f4pgAQgtKKgBAaHaChKaz7PCK5wJGwXMfPvqx5rurYHqdMq3FjrasnLu7kXNXEJpXey2VHgusVM",
  "key38": "3hskmuPMGxA6tCEd2nk24WF3bk3DBGa3tDxZwtguoPz1avMeGLnVCWYXAYWeXB9bFpUzTzc9aBvDVnux4nzE1LB",
  "key39": "5SxpzkSRXh5E6nmtG7DSshE6iFrSzzvyvWbBQbEPNVPasf8DFuTK4JUp7DpMu2c3Je9vYV1qxNjWGbpsdur8qnuy",
  "key40": "44bbNBbSVXRNfVHJAFV9MXpQDWWP8mUJffaHy5dfiYFb9H4yBmqZr2PTHSyVsqKUyFkhG15TF4c5BpR61pGmtYLi",
  "key41": "9dWuu9YMfVt6xKxXANGxpTZ5Tc4KSj9XseVNGyhtsDUe8DVXXjC2S65KPzaT9pPewtGkuHCBoJq7eVyyWWGvL4H"
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
