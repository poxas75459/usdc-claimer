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
    "UJ97RY9vi3bkaDtAgQS4Rcz7tz5BuNLsJi3Ejq6pwaQVJHdYaHQv3xnihfyE6oZyUEfsmvMBTM967fkM7N3PK3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NCCgiuXBv1pig6URiG4ZnikKrdCidiefdbezB9hK1uYjaxoPiEfjua1rfARCnRqFXjiPfWmRTnFq7JpozuGWTqV",
  "key1": "kXmdekKK8cQVYcwk7CdaeGsHkbF4UQSaS9GZTqiYcykfLfrNbAFuNCXS4HLvMgyBRvP1LpYGV9QmwGwcwkyHUau",
  "key2": "2PHcTbP4tRcF7YYHbmR57ThLg8cHoWZd1mJUb17CFnCPMtCn4ntsSQgTdcdS9yJSNF5Gmm6br2pd7z39uvakEGmf",
  "key3": "231pJ6MkTHHtoaoqDXyZzME4ivL27n5R5Fihc9NAXaYVU74SHLf73iwEhMNirXLVZULViBmQM1TwMiPZyBgCu8xt",
  "key4": "2m9btnR5JCcDRcxNjAYegTg8D3rEoqi3WGhkEXzTehSRUB2apvf4wvXaEypkRW9tm2vViQojCL6jV99zaYpBBKDt",
  "key5": "41EF54xfq4rksW6MQQPKpGu1VLn8xAbdNjSy9ftFBqjm7tKARuoFLFsiEtFyDeiyCFQf2YWBX85PkSAfSTKkmxRW",
  "key6": "2jFdSKDbK6MEcDHvKS4dR65Pq5opLaMUuuYUERpnPfpLN9T5tWYiTu2GsL6TeSfiNNGaoNx7i2NWA8LSpXoRNJ7n",
  "key7": "4F2dUp5rCYudTAQwjMUr2D8tTtzBpKQ9HcppzPqHE8X6hpRmtPtcHVUy1YWtqVxNoC2FgMRJ8TmPHSUaMYNZ58Va",
  "key8": "4mi93JJ6Xys8c9WgLR3m2uDSqPy17qqRohRbehiMoNWdNV9GoQiye8nW4fyJatbEyKSz8xp4yfFHQgSoWiv4MYBK",
  "key9": "4N8og2duHWkr15JFG4zGnQreqmf3VmL2gVMmj6gP7uvy9zohuJnuXYx89VPhC2NT2QiLbooxa8uhU1NQHbBP6foX",
  "key10": "333jZMq7td8XF4SxxetCfq56YYEVzZcPJwPNpeH7gJYxhEkRrYXDActE4gc2BYJBt9zsFwnYXYAEJSf6vQWcAFka",
  "key11": "3b2Yeq9GAD2fKmYP7zMGJrrTS5eFd2VzRKSdoUkGdYT5vp8cjcgDtFjt8oJzGpvDUfY6avFzrNtnHUnHNfsrp3AN",
  "key12": "3MwHveUA87aMJDKj5nMkXdJcNN2bZSxmUV5L7QkupH6Lsrhi1pBp5hvBmi88mNtdhqyf8cBD3FynW5RGugwwWoK5",
  "key13": "2cSwJCQdkeCw2zjit8dxKkQftwDSRRJTJs6Gun9XMZxh2xLrSo4JaPXhbf92TYPgjasUiCDhWZp1P1yRo4PLo11t",
  "key14": "3caG4cFZiqpe8MpFU9GEhXYtuduiTmY4KnkVxbUnneUNCiJ491AEU3ajswrUXTu9zVwtLt5GX8ZJE2ZtewN7YAEi",
  "key15": "3zyZbBLZA2xBViCD1CW8ZwcVrK49AFPmhb79rgiyR3eGAfbmrpc5oUXEktHfYkjP1M5hfYh1C9jaPxJg4Q9sekbV",
  "key16": "2Ycmx3rNZvXwymtMHWg6U4WmrAiVPzdv9SfTUwGmLXdgknxf6qhx6KBpKw3BzexV15FpoH8coxjKcVXMth2mvPMe",
  "key17": "34bGP22nM7JP88YU7Df2cZbb5ZgSqz1v8EZE2BV93TT5kiwX1KHgEXQjbxgdrLxuEm92xKCyn6irQbaSt3U7WZ31",
  "key18": "3FjuD66nJxpbf3Xcbae6KXqUg32rRcHNY4fSRJW1rKbBS3C6MPu7K3yyoxk66Y6hJZwnC8Ajy8Nr6RQakwjoeDof",
  "key19": "NqhWyryQudYYvFm8MSgfypm5ampbop4AyM8FTCbVbc7bEadmrTX7Ur7kJ2LzKgb3FxU7Y17i23XY1ZCnjyzCGbv",
  "key20": "4GPdk1JhDDBzXgYBYRN7J4o1qhU7k8mnL4RMSAfR1hsgbcHD4boWguVVXcEapHH53kqfhhQBbDf41aHcR7AdQk82",
  "key21": "33wmNPkdyWTjXo6DsGNd4nKVYmQGtKeidJCnSHhDoLhBPXsKDfdrcGbbvZEGFPknWyyw1Frr4QP5UUmn9doEvU4k",
  "key22": "36REBvft5xNue3bM5jjqTMTFcAXScJf3vCJ6odReWGtjJ2tcDhuy5o7wBvXnD1ct6DQk7b3KatAjdNq8Pge1PJDw",
  "key23": "5qiSMgV7v9S3F67dx26H7MY7NJoN4pesoQpoZKcZGU7aDVaKoYRhofQbSbq2kcNUitUGenzZHTZ13SkU8P61t9kU",
  "key24": "5GJw5a6h4GkqTGJBXv6UGHTNen4peaRxQUonDd26GvLwn8ZGWhJnd6D4qoPK1Vd6ABBaXc8kDJ1arxA7BvSGPbE1",
  "key25": "5yu4HnZPiXwofVVmvp8wsUXuVdh4gC3JstEvJCVhnc8kbkYbR1op8iDz1bBSZWziYmvyXLmYWxGXo5j5iboY2jAt",
  "key26": "5ge9oJmj7kBDPux4f2m6F3s7FcqpAy5h2VmM4rJg1Y6vSScRewQeYYie2csEE25GaG26J6jDuc7c9tz8kZt4s2s1",
  "key27": "qV4Weo5u1SAN73ZsUzrTnjRXg7y5hD2s6WyW9sBzhqGBSm7bSmkB5Cc8kPL3RSnke1bjkb5sW7CHpxF9gkSEDKt",
  "key28": "4Mx1f2LgVf8irrauPaoK9VGaj4hkK5nY2GjkpDWbyKkTfH1awwd2SBKXC7DoUmLcFRyfYFUAeGbV1tPMqMiFoH3d",
  "key29": "37A23opcGriYC5jxS8HomZDCrBqYvnQHRnUxAeZLsfb1PVkdzgZCiJNcMDdB7cVfAET1J2E7igdCo6emkAR8C3of",
  "key30": "DkAXzcQBL6aupiomAHGQPGkLqETaH95yLrSSUkbT6DsotNrirMF72Ua6UULaJf6N8fH2CzN3KkwuvQsWe9qf9he",
  "key31": "4tsZ6taLXNbBeoERA4ZMZpq6uefJvhxid91bUKjRGNstx7HRfwEBzVWWs8mLfZP8roXjreDhdcPdmEwCuu346Hq",
  "key32": "3Z67Sr8WdSCttrCBrQU5V9ddrzviWm9h8NEHwrCN6WKS4HwHgjDXCCWQUCDMStrmkt4zwtyPKTQDidf4QiKW32fb",
  "key33": "vVCYgM1XVnKGLJbhjf1gyaY7rfdDM7mi9AsjCdiNh1odSS8WdvMUvECHDMAtcaC4h7KwPAou2JEm4NshUVsGSXf"
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
