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
    "4Bmem6eiRkPperVSksDDPWSsAqtBq1m8TSuvABiKNYnVmq6iCdgsyYQWGhRXQxT9KLpSLnQqLqpGrddVAXQsaoGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CcYFxJGFqqqtoULzGe57XAYJdJDFSsTTGN9gi4mrowi4PA8jtn4AMd9WpbUaHG7UvvSUSNmKRJhiUEiEHE2EeaX",
  "key1": "4VBVeDrh4cgvP2dxT1Nwu2mRKhkdP1V173fQbKLpg49Af3BTkxJqoRVpjY9zrRGot3qGhWgLJaqXWe9aRz1Hm2JN",
  "key2": "2Jqkt4HpcqkDbN9pBtmL7efX2j5czxq7p2s52cAj4mFW4aNuffSgEXHj9BdZ97fMDCFiLZFDub8UGWkiYHxnizif",
  "key3": "mWh7TEmBTBEsSSD7UN5UEH8vjfPqwkAsqrxhYsj8DLNAvnhkqhYX2LZ22Wf2kEWkUM8QgmGEbTCTS1W1AfTLErx",
  "key4": "3CC51kgZCxDjsYQ49Mznzh2sVfd4QC8baPs64vwWBcmkd1x4gbac94ghyEzr2FMCGopd2EgvPe1QAU9yzmfHF7tJ",
  "key5": "3psz3HnqDxhvNaR8ASy3FpGokRsDQ3kq1fgzHBAE637TDPoviRTQe8ZWA5Sd17L6wvAAnXy7QLYvzjW3BFkrJu9D",
  "key6": "jzfpeyu3B6rQeTgD2heyZq7tHZ5HEN4BBoNa4u9noPDFND8N3pXhaKTakn15g4w2R5BFLHgnGWCLVq2n3JhGVRf",
  "key7": "45XomrEqEdAVBxztwaFT7Ziehc9HnQgPw8LFdieB1vHYj79qaypWV9WdvFBm3UUuiD74GBaWEDzrtgXrG9KuEJFR",
  "key8": "4BLZ6cSyHHa9gattsosQMdcmJ7BRn9eWx7ESkCWYTmNweuu3Li1LFtDTBtHwUxf4iNnUswXZ3n6VV5a5HHduoW7A",
  "key9": "2YAdqXnjk4QBoZGrGNwSNxqcBLvKnusyjAbG1pWMy1o1boHS4vkpAQLkFjMukVwNFyVUUZfKMdbYsxhQQ9eLEbkg",
  "key10": "DQMqNBwjqosmwBe8APXY3UjAAdxwbGHAfFe4gmpKx6SgqhYGs8FYkhKf3KW8iZcUBySvGZwGdMKkHMXGUgxteLZ",
  "key11": "5Hnw4MhFoeswv6cCAGFCQDTN3CPqC8xspt8xdUFNLJD2TdD62ovXRoicVXgzkYoLkCysinqyAEGSmoFeM3JMcWeQ",
  "key12": "2E9zGJnBX3SebQMxTjZpeCHNkRhwkvbvbCPwSYkhcpKF5w6J2qnaZwk1n9ZPv5ePojYnDa4Xg6GAok5ihPZU6Up7",
  "key13": "49yR7SgQ9k1SehoiekYb21io6NbsWnty7pVXz3hMoKB7x4KyoXMjwR9aYrZDWS3DfZoKKsZmv1KQ1mt8NzWsb7eB",
  "key14": "5YeRkVuk1si68aiRgEg3iB3JuZzAYvgBvxPAN211DgpUDk97LfpQYDMdQow1PvMoCMHmQ2kPiH1iS2HvAFMxEGTj",
  "key15": "44uygNtiqCagM4UowoLbtWxpgm5er4boBZFeM2qsGpqGYUFgQiV9yJZFCTMm1RDBtykXEiQnusSEsddbGUevnR4k",
  "key16": "4o8MqyYWmxJq4NfLo42cAiYU5fb6qEUnWjydjoeTMcsVihFQYQa4ogPjasZoCKX1gPJcXgCLdkFzoYDiUHqPaRZC",
  "key17": "2CX2NBKHKweaiGDseZpawfvu4gM4SddW2vB42VwpxRfthoq3utn5Y6q47L2HrXmsb1huJozJPeLERLQ5pvfJxsjn",
  "key18": "2UHSX2ZHBPKFuFUGMZF8QT5iP26ZjxyagC3KdFzY5pf4gWG2Hz28xzSVjWcUvm7gtHBgdSJ3JLkNi2FASstoNozD",
  "key19": "5QXFgmW43gWpHqNqitE5LVVJjnoLTmU59h9RsJdrH521jWdrA7idwzkFDaueUKFEJQMfHCKiWzyvaQRUiwCcsWrX",
  "key20": "2RJniwJrc8QwBYYFrxbzLHas44dzpeoxyVjQDXCpSqyGRH6EhgTxW3vJvibPnJFjETDne8fv66jCVv5GBzE4q3pZ",
  "key21": "3DLisptyVk7mn52mMRaCWtaH387swgoopFP3WiT2WygYBmHVYuMVUvhKEJ2iDMwewm2EbmL1ozL5cdU4QMopohjH",
  "key22": "4CHW1aR83NJuvxeEusdxPYanxmhEuUio8DiwjsB7mWR2E15jfkNnmVq9qtmweCbNDVYD78dZ4STmGVPNJjwGKvg1",
  "key23": "4p996mCfS4dHC5ZKPzTMyE4pm2fYxv8ichN9Q7Bn9iWSsyMCVjYdjiT5qo7PZqE6KHA9eUr98r8znXftjfrBK9J9",
  "key24": "jYUh77trZhvio1hD3c4XD6ag9iskmXAg4nzYDTCdBJGYStGcjRREkZQZBHFkZHdkFZUVwYnrbdSpgbRBezRiKA5",
  "key25": "aAZqAe9pCSEivVpL9cvJKsjNSP4bZwLkfcTrBhvDBrxzHhiqxXrRAJvJXeX67L5h7P6q4N1nc6aBNrJ7hgpbgek",
  "key26": "5EbQqVx8RDzWtqF3nMb5Keg3mhM3Xq8Tk2dWbh3DmCZ5m1GDDTe7FAnmwTxXksZ97Fq4Y4nUTPGHpb4DJTH2NScn",
  "key27": "2qWbd3keFanYPLfBCDdw1ZdCfqYV2Xgg3ztRX5oRw3kAoCi3JP2bCB2j9sUmqz71BikxpqzDL3rMuEoBDZ7YK8Dz",
  "key28": "SzNJd9P1n3kftdcF3FXhFPraXop5pEpzcL4nWQ6DFKB2kPpD47GHyA5BRow6GsRRjabiXAhZFG4z9RcAPZTGQFL",
  "key29": "616hjaeNyJwSAcobwRYvCDyT5viUHzMBMKAFoQDMD2KPRoSBYXyQWCnCYC4ViJHx4BBmzxzWWh2cY39Ke3YHPy1d",
  "key30": "3beUrWwEvUofpiGgKuYAd4ZcbYJJMcnT7gMWf6rRTaERSKgUpVJEKQ2bg4RrwT2uLUJi1EQGhXbCJbmx3vpTGfv7",
  "key31": "4GHh9Hn3wGDujuEdPJvzseS6gvbMoacG7LpjDgyjT6fTAiUag1VUzXDFu6uBY86tXLkbAabudtxcXvYbuFwmugQ5",
  "key32": "5spRibzyZuw2zhJ4B9JCqt4RwkTtD3oPNUaeBc4VbbGoJKZ1dQMgFeUUnwPw2hyg3Sb89JcEMDxHC7ernxvy2UMQ",
  "key33": "6YJXoM1qG1rnWwW8AHZT6LAnYdva9fs474joWAvbAj4MKeMyVXqKK5Y8aqmmZGBQgQNubUmKGP76fo11iUYynJF",
  "key34": "4L6hNAgkKjs99JKwHnarBBtnBuqmsEope2FgCesDWdDwhZoNrYPNXa6Ap9rsaRAMyfqRXRyBeoJyVceDAK4b7gat",
  "key35": "aZQCNvpxcn81qq1kUzUsbJ9ZRKgFLgiZ51fTuiLD4whuhDQy4C9v6MgFGEYgX4Vs1HSBLHuHMvFJp5kYwXuaiem",
  "key36": "5emRuSV9pT1FgAAszRkWwLNa6v6CiY6bAq9MSZf3h1aTd6PKAoVieGG3L3MHR3m42Ad4kLahErdp62qA1GjvqD8H",
  "key37": "2qTm8m8bYd7N24qhqJjLSocXz1d7tk4GboA4csDFTHQUfuSRJycHaLFGNi5b56AervbUiayaoSUKPVAEwk3UDhTN",
  "key38": "3MAoQ9EXUGxGCxtZQ5p3smMv2BvRt3twCg5e5pbvXxUE4cMKjQoCJuvKCzS2nWGq5ChBjPMTxtvtG3BCByXy4357",
  "key39": "5HR4uov3erAK5YkP7Yo1bTFH2fwAAR5fmG72mTw9mAeSdHfQ7ex2Y87De44GZqGpWb8fEdsfwoRfrntsvjARcsNt",
  "key40": "pMg3C2oiKhmqWp2sgbQhPufoRWfzd2aC43qxcQ6GW65ukowvdLz8fMZuvZmCFPrn5U5iQ6kLaEd5c7JvUMqXMGq",
  "key41": "DKVNMsVM13hzrEY6LMB96sq96XkzCt69xPzEXuHzD69sHzDCkwdtDq9bVm94ZNsijtV7F6y3rW1zZwSJndvYvd2",
  "key42": "61YCjqRoCGaidkZGMgK9QiT9iHpjFBfU5WJzWherMKpUo89WGjP9aZe8wzEWpbh4zc6zd9mcUwTrEfktpMaSPHHn",
  "key43": "3N2RHhwu6iYLGQT4vcPm14sdV8KTv77vo3Rrhd7fSUWAPnqx11GGj2L5aKPpuda2gNEQMFfTvNnVfctmoBQC8d34",
  "key44": "2oXSjif3wktsjQKpj7wK9RPTiTCgJQy3sQbyAiLqhZQ1zpRtykgrKgCCKAqEDhVT1jJvUSnYwpiju65rR7tqDGbQ",
  "key45": "9nFjxEwrNiQ1F9Jsa9N14X8kUkX9tPyfmYud8vDN3vBUXZwQR6sjWA4QPtkb1yCRSP1MVVABKDbRRJX15uBZ84F",
  "key46": "2qFoDFgzH6ExcdhB4oWArkkjAhUq5xZTq2HqR2SkaVj3nQxUy1S14kKceKjTJnQkmv9LD6R8jsjxa81T86TBZABq"
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
