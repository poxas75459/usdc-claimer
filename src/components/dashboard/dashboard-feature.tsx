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
    "2fyfoY3E31K9ZRoLaEijm856oFteVycobbXTwC3yMqaSyx96j9yfW8pbHrDEB4Uy23M4iipqh5Eo4F8HD3MyyiuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nWDe1RgEDkKksHPf9e2umKXXtvhuZevSJK4Fy6HCyh24ZGnPxfeNLuFS7XijDVbArM5PjdnFtPqDxevL7K7eR7K",
  "key1": "5Y9Pb2iEiVeDRtnhr6G2XoHtnJcUMjJ7qLEAmsDJKZ6ei3kJMvUifQWvuwzf5SeMfwJitqSqbVAMmK6fJBFe54K5",
  "key2": "3b8tW6TwYfC8FYWi83Qo425RBpE6Miceo2bRg1PhEFKDMPZymFMVtRumJ5cV4LrfoBFMatnxHwanqka3CuHG1a8H",
  "key3": "48vq815N46yrigCScLxAEReFhrzpt54cxt3JtxsZwKjTzKNfs9Y8fKZunhisYRVxgJeyUX2BPasStdamHES7fByg",
  "key4": "vG2ELXxruPBnLZNawL6vBtqhhMboCJegTMYjKGHBcPVufZVGxBhZxeTu7UghZUUAWrXWKwcMcW8eNhXzT39MkLc",
  "key5": "2TKbHmbvDQXHejHkrToi5UJ1qXbC2AqyHVDdhcMyTukf138seqjjBxHpBDwoGy3Xm9L2c3WvohJTHMr1yYNXU8Ag",
  "key6": "2qGzLmTRxeSwhhJQjZxSLDLCq95kiNj5wj9sbvt1EMC9q2XmYqrkJe7aLXsmcTmmikvWWWBqf6YpvYtMkH5fJ3Kz",
  "key7": "2MjQKJSdev4M9YYyQmYabNyPUczstPoYPLnTxQpmZvsqHzkE4oeKZHY9zH7CEhTyFTPMZghmnRYuzQeHiutnUWAJ",
  "key8": "2KUjMwaqCsuBCqsJNA4GNWF7cB8cuNUiFgNFGya1dP7APnqb7xxhm78E9UdBciosCkJ8xvPy7qd5fTske6oGnvje",
  "key9": "2HyBa1rdFUqBaUqwGMtwUWurtbF6mn5pnbfx6JD8TRMMrSkWEEJMb2tvZXn1JWQNwk5NttfbNL4pcD5PetYmbRZ2",
  "key10": "UPrUuHXvdkF283a5AiYoLk8hQih7XC6sRsCWPZQnCSkTcdP2PiwD5TtLtSMbxVZY5Z4ohDoSG9pF5Xhfgquhm3U",
  "key11": "2UDBooouh2njfxkqbY4pU3QeshBf6Bn9jC7YtC32gn3yWhL8R9tuXJXfu5hqimTB9BCYuwtnzeBWmgPAsCNzbkQh",
  "key12": "2aAhMayg8EjEdgndsUEHeJTVrsTqmwzybyomg3xrpftxFKE7QePUCRGPghzYQd36TiUZN2oiBW3PxQZzvuTMw4Wx",
  "key13": "4ARmaVmmesAUDccN9atsB9gi2Gu3xehGXbyTes6AQ7cMnaD8sTsfTR2W3ncXtZrCuKSR6nGkyCoXecJsFRcStJz2",
  "key14": "XP2suTx98tky4fU3zyrsNvsZNJHuYp4BiavsbtF3tCCVyE9cqDUNF7DV7T4besqiuK8LV7dbCDRFqHnPNtKLm6m",
  "key15": "4P1qQbzoQ3Yig9PadRNxg9d7DUySSVEr8GTCrtWtEk3ATXZtV3Mg17MoBSSX77VBXpa47cDYCBKfhprgNjgvwmZp",
  "key16": "5xHJTrAP2CdjGgE3VkBDt5udGexq8nUScQHJvZkwWNbTPm4YezTpftps9botz5b5a8Q3NkZVtobWgSXbGxM3s4Y3",
  "key17": "3VyJVzvQqL8H8Y8JhYC3Rkg9cBACSaHX3JLzk3Gj5q1JCPzDN8xG2QYg5pzvybWKuecKaSkAhy2KYJeVVXBJym14",
  "key18": "4gbUef3LirG5im9uwsLyWBY66oD83YTE8f3m1HdFF7tn45G1oDRuiPn8HgkXPsZMnegE2EPiQtGJdu3sBvRFakeh",
  "key19": "5Pz3nrjDT6sT1XJDHRVUXHGT17gFCZSCW44U9h1vmHRWXwVjmrsA7j8kE4USetwJQMrpgvvFv8JMM3rw6rapV2aX",
  "key20": "635VKuW378TmveE6JepWj1tdP5KzJz9idfzN3zQrEjcY8QcAiRTToxVWdxEWw9VWjzn9RBbcpgdwjZeV57ov7bm5",
  "key21": "3dgiQFfd5ua9gT6WmZCCZaYGXT9Chf3Py82nZ4ie4UrwWLE3JVTYcoUqE8KmhP8LfNNb5hBmYox8ovMoS1haaYTk",
  "key22": "4t4fGUawt8VuvDwUXs2mTGmP8xXwzBPzSkydzURgcAd1TjqJvDAWUXEvNNE8JShBH3AUB3vHD5p4CM6dY17jFy4S",
  "key23": "5LCTSgFP1F1u3H5wAUSGSiUQTJNvuTucgCeVKiDbd9ycFHc9oLPLSCzuopjguQ4eUtZZXLjWWiXgwzGWHSFojSry",
  "key24": "3JhLNwZ7Dyt5F4ANmtBpP66PJwwfVVgRUAGgapUubVfsozMe2Uf8kY4qeXWWqGJRFFRyLuWFCxB7EekGvPBeSHHP",
  "key25": "5VNnXRorXePwHAmJQ5wkuy6nKFpc1nn2zbVFNReVqMUP5GxzkdUSeQmVbAuiAqqUZH8imPNTdA5WnDxTV7gMTY9Z",
  "key26": "5Ejes9Y3XRHWQv3twKsrdLNQzmK1ZNK8Z9aQq3KvCmUKa1DRCkzkWKton8HCerfRNoVWfwUSt2ixLyNvFn9Uftga",
  "key27": "4qU7ntLwrJjrZ2gdjyTDESWW5uUs19sx9T9HcKcdE5NtdSxS9qNfRQNhUjuoGbucuXpjVgAQu8C1Cx7VyAGLYUVD",
  "key28": "T8dXJGMHTUjNfb5LTCYMQhjZEaGeLFEFpyR7pQbsKotU55cCdEq8AXHjvH7bsd4bxJuxPodiC2HeeLTKx8gWbSh",
  "key29": "3gkLNBCAjvaMgXHQJaK7rvVajA5FCEJefdR3oiCFqnsHTwoN7yx3n6nEnZ5Zo4t4j2HNgoQM9evtZXYUcTVqjuF7",
  "key30": "4NFBLBvWd7kYQj9XZeN6XmPwRVPsKJsfthfueHWQ3asSzwcdYPCJNj19t8XYgTtE4ePMf35des1ZyATxrXeNX1Ly",
  "key31": "KKGntg2bkWAe96LtzEEfAufXX9kogRHC9G3jhL5Cx6ZR3t7rMKt74B1VfVKd9C2bferQBhmLHzmwfgpcdtBGoaa",
  "key32": "5k69c5Je5ujg9zvCPmhKJ7ThXB4WEVcpFmwXV6bqvr4jrgyfNeiehSaVs4U2FF5rdDNhRU6QovMB3mdGzkEYAxvw",
  "key33": "2w1GqSh1g3AfC52qvMcETjP3FtXfsCFMxvRRVz23BQRqRUetEZKdtgJatbQaKZh8VpTGeaVKPuvBY6dmgdo1pMBb",
  "key34": "3QsMDd2MM7L1emeWFnLA7Wk2rt3xnrUkSB5vJH5hVz8ZrxTCRG8s3s192xi7aRR543uQKf7YBQncPoNjerbAfewK",
  "key35": "2KgxCZgw7N6anSgHeVe7GMTyAXSUwKHDoT4Z77DkbFdoVbwjm7xQCbRwTNxwNDQAaQkspqoFFAwg9zxxVSg59YLz",
  "key36": "52h4kG3ePsx6WsiCbn6XXhymut3D49hBNYpF279ZxJq5Ed9mkCQZQfobq4Qi968BG5gkRNfeoWXTaeL9J7u98YGG",
  "key37": "52vETgksK5SdyZES6AEJnLnyDnZGHb9W4D69gcq1oAV9V3LpHQj8Ay7JFfdWzug7LVCovP3S27ibw34egpJeGtn6",
  "key38": "4Jd3vFEYQbz18MPQhiQG28haZSAbhXR6JxudpLsZWJM9W5nbBAke9kuxNteN8zTMEwnpEcLPTVmZTkycW3PsP5Ui",
  "key39": "4nW9tsUkebjfB33Rf8wLKmZ2DuRu9gEPdUkVEC9NUE56Ycz6GjTsVEsGebdjJ2K1B6K1zuZZhj4fZWgjoVyxRWzR",
  "key40": "4qC3KwemY1BKdV39xkJrxnsrrwq8DNNrEofM13WJBinCUTJwGTCsrpu3HLTUTEtNKZJ5guz9iKwcbwkuQfVwYsuz",
  "key41": "wbHSaiBfvHwuUAfRAo9YsEDiJ6YVR2ac6cLAMKVxek1J4JG7achVN8nC2N4uf9Jbfv3DsxKP8SfAgQWrFVqktVC"
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
