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
    "3NXyxeujGPW2Hrojhs8MzrjTfoRNajVBFGNFXsnBHE8iYW3AFmW4axFNmK6NPEAe12MXjgZpqHNhezg6jfPsUFgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D65GEcifHPfStr7hwjtNAd8s2hCFht3HjfqnZ9KgHQL5JGrsUpNVD3FGPtKcWD1JH72PPZCheCwgUqAuGmuZSwC",
  "key1": "3Dw3u6gxwBPVxEKRk5zkVDWSXdaZGuK4vp23CmZEF7HBFVB96yGKsNgxFXyNTrmWmbaFzEgpj7AqYNoxrjboxJFM",
  "key2": "2rCQqLoFi2AkTyZ1SUgsGqTP2zXf1WWb7wLnb5QdRcFBHu9ofVn22qNg5Ru3fnFeTP3UR392fp8UgbLXqGGKMZwf",
  "key3": "3CJW8w6xs7hXjS3CpvFzEMZgHVLPjMeXZLnDA9U15BYFZNXhgi5Bt9APfdDUCmyq3Mm2r5PqqjZBqL332QBzYR8F",
  "key4": "41Cg2pY1t2VGTD3Nz8H4i79JCfcntc7xErMsHun3GRabkBjVfTBFCb1qXKe7mxnGkmEhntxv46km9QAQJTJMchry",
  "key5": "5QEqZ344QMGt9dpGnpmMKfxfeiz5LhETzwNjG7A1Go4svJoLUkTLSJrZkE76vBuvFraAUo8F9u6Nc9VewL2NcxaL",
  "key6": "cvp3KvWtRE4q45yc8ewNvE3LzsugFf1w3uDiin7o33d3eJp5WgBPAfrBakN7kETCa2cmeD9M8WNmzWhXMbXMfK7",
  "key7": "4A6YxLG4wJVDeYxbqV6GUxoL88pKWZSFexEzWGDJrmZrcUgZM97YUSRB5f9rvDZvKr4jLaAtWwnWqhZZQpNs7qj5",
  "key8": "31L4XEe5oMY7ggoBQMei8Bpa2Uh5aAAk2MW4dES8UmEXGg81CG3H4gFggq2FzSNCjFhCbR6JGsmx3He5jJFAUbCc",
  "key9": "sKASyQTGDQKhpwokb8BBGcExeenth1zuaGcWz7MHG1zMFLes3tTmRRD5WBQLzbwmeMPnykCprNJFXePreDHhuJU",
  "key10": "tJao4URC58BNi4TDzJ4E2TP8UFRC6QNMCK4or6krdUSchmPQnRdWEpYTqADDXmF3RhxvsQeWBPvoa3xiynGXp5E",
  "key11": "4mejMkRFq6kjhq5HdACeN1xnrcrsNe1QHR19kGhcPgaZvuszXVRDTGMLjBqHHAkb6VYAT61fpC8g5bCNpJB49tpK",
  "key12": "2FYssi53MNGSi683vY3cozG9a9pW8JNGKwf6FHSGxRGXVHwFUm4wShbVKCwKgVY248Prbn3YoeYMbTVgw2qbv8EG",
  "key13": "4wUZQSyxeMbzUuu8XRa86YLvGJDcGQVYG4F41PCmKVyNmexkw4Rs5PptiE2Mo8rzTHY41xupVC1VADTBL9hs5jP3",
  "key14": "4sTEzZDpmzkDCuZv7g3XiVEqotm9tfMvhVZHRYcPKSjtyPcd2ydL53jU8Xyyb3FyQCQWELWfi7VktDn6qGjZ2eaV",
  "key15": "YVzcQfLasacgGAvcfc2F3jP23GFDC9f3yjTZYgQnvx4RFXXbhhGAD7PfZhnqJ3iZt8pm7CdYsMCQruitz6taNYo",
  "key16": "3AtfpV4mcyHDsSHrnsDVBNthiDrixziVow7Y5XjjpRzatq4mCY98KjKGXhAVLihttEFxKMFKwc3TSCmqjeL8pYwT",
  "key17": "2MKEYG81u4XANTqt6mtUk7CL95mL12qRoTVDpiAS97j5gWp5XN7eXSJBUrhQ541HqM8zsdMArPW3rFgPdsX7NxeT",
  "key18": "2fEQo2DJ6tZmuvE1QRWEJHDFJyiNqaxh7ZqxdjY8rUTD9zhVc4A9YEVay2MKWHiExFzkExaHQAQBaUudJKxZRzJo",
  "key19": "4QBsXGHNj1Wiua7GE2rkuwA273FmnKbXkE4nhhXTa3fC4K56oohMDw3uAgnogkSnKLXPJfE7gqHbUtgj3xXNCFHv",
  "key20": "51Jdik6PP11m5pY9efMnZ6Dw96afYGKWwhd3C1j5Jh4PKkSrTd6F5c7XDxDCefNSZqU4YWeotDMUcXxJXJd2j5Vu",
  "key21": "59WFC7fZMrs73NohquR52qcgqeV593NzLg3pfpxBPx4rv9oAgeuUea42GJdz3fcbpbWBpfxjerpi8tBRBtKpy3j5",
  "key22": "2PHFNhR8R6TggCndJRQsf7CQJJJRhsAuVgdUkZWugqZxyLGEYhSN3Eh7GVDdvGcGpiba4a5mirjJyUQ9rhMVJMVa",
  "key23": "2uLN8ybDDcHDLwpgAPjB5CGR7spC7U2W8ep4tHG1h5ZzSnv8vPEZVMF2krr1tcCd93rBB2ZSeNGZ2wAHvmCtbhoe",
  "key24": "RcLdyqvSNRj8CanzBejbTrDgDTHmzBagbdUUDaSdkgfiP39vKyTFUtmrWNiXvQVEXmkmfygAKLfm9zrfS5arYF7",
  "key25": "4WsduLr4u2SpSh82ibpdQmNwKuD1w3dUAbVUwZRT9DzvthQxajcMtTNXPt6wDFrHLycJkXr5UYcmsR2z75dWDxCx",
  "key26": "5KJwjcnSS1bzoZUBSdTk7vRTyRbQzNUghYML5MWau8KRAh8P5gJ3dzvAJJNoAwW5hAofPK1cuQxxJnv5uua3rjeL",
  "key27": "4r5pN3V3zZzCsJsP1TMGKYEmGre7pTiBdK1DAhh9EacNfpAqU2AXZ2h3D98vfCtyDThSDE7Zp4fvX7aZEi1mSaxU",
  "key28": "2PUFGhsLbpZThUGThPtektQGxKbThSARgkoF1zdkcxVgET3KxVPMaN7gvtR4VL3PNhvXoNFbkahisPazbRGqGe3A",
  "key29": "2acRy8C4ZcLgJrbNR27Zk9zfER72Fxu2G6LogWxwZoUouKMy7E3MVVAohKhcNscZnmsMpypkVXS3aWNVj2ZyLKS2",
  "key30": "vtnXUgtSJPhcsGJMsUCwELp8eWAKqngasw8WNH7QR8TNWxgiyqB99nFB7kgrarGxcefgnomDmYfzi698vkoXQsB",
  "key31": "4zrL5kqUWAuANVHTNMvLL7HhhaWvTk7TZdQj8FhKZq6BCFgCrT5tyH3h4aTj9NZEe93sRUS6k63oiJ8h8ZmRXjJD",
  "key32": "4aideCvgN5e8wK4mz16ZVtMudBft8GDyaWLDtK6fYnEoCYg8GgaKg8MAPrfCe86KVGwbHTre7zvNPETfnyEG9Vsy",
  "key33": "33hTWz9F37fpJq1BJuPQd5fuMpCyz31TfiDKtoZw2z2irDFnVDbREPVqpc3y24p3cMyMN862wCX97zJmStpG7uJb",
  "key34": "4U6qnGJXmiid1z9nbuz4ctsxzrCxJwif7m8jjJ4heNWoaDe3gBuiXrFo8QpsbJczbdvnV483Dubm27jxG9vtE2BD",
  "key35": "4rMfYTATLCLjose8zTJqJ8EsbFydtAf9ZEmaV7NJGh86pt7PJgFE2SCQCBXJvohg4K7Vdr7wZjbZQDLWjUhVq9L2",
  "key36": "4212cyPLe3ZrHZe3PobJTR8LiusAvY8uTHWqfYJKaE75F1QUJg6afQ2sEY9bydnE21pc2CzAbmfNThR6dz16cc4R",
  "key37": "42YAHH1pVgQtx7Qf6entewXdHAbcXVkMcji1oAoHNBkssACPPgKKzuY2JDDQGLxajvFob1zWTDqK22szhsLCmURT",
  "key38": "3uDCYpMZbpzRBteXYYCY8D6twCvwxQEAemRVt9v5x846x8SXq5FcQCKAkVQsdJtpt5jxp98kiuKRe5Ec5QfEeCmz",
  "key39": "2VifQHkgYSUAbLh1ztchQdmU3EJCHdBJbgEGyEaQe9jeXxu2Bxnwyw9PHUzR2tdRWhuzi3aa3Ns3X7Gn8SNUVyCA",
  "key40": "28Qxy3adWptTZLridosKWqeUMS99FB3zDx6KWm5fvsT9jjC6rwCiwWg7TrxXMpuMtA9bBwbHEFphGAihS31GXZBD"
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
