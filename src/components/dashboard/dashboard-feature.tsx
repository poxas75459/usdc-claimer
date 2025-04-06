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
    "2eaieH2rYKAita9FJ8QLQWjfcHA9CNBprAvJ8CaBhQcck1A3H3jffCV3KLH4zwYWdKjBrBa8hJ42pnVfwnktUFm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ExGqdfh7eL9otijYHtFin6mJxbA6ZRNDed4PwWbSNsrZQDoHMe8UHjrH73St5UQHsoY9oLVc5vmn7Br5nHuS7u",
  "key1": "5dcVbBqWGRz5snsmj6eTUrZcDDedsxmqFtyHFPnaGbHfup6Yy76rQxrCEFJzuhjNWdaB6MeTCyxCDbtve6HCMYVA",
  "key2": "2m5fxQQmFmqtazU8Y9mogbL6NN8wW7SsFLBLM5uuf57nfd7YcVNqZz88zDbDaoteWKf6fbTNrTmzmbv3cjC5Jopc",
  "key3": "3e8e75PP3k59dVHmMosJ6Ujh8QrgYbZ35qrTxFA2g9AJVDQfsqVYXmey1YUcFkUsQxMpKuKLWadqusjLYH7n1vhu",
  "key4": "3ErGCxnRskmi9awLi31VkY2EapGq2rJmpjULMxevTZ4JbQbMdoukAAPA7DKtpyRabCTzAgxc5L3fue2HtBwUZWrQ",
  "key5": "57HmgTciRSeJ7BQrfYc3AYeq8XnLoKxAxRHVqVVF8vSbXn76MfPeQXtL8pAY6rHVRD94gdoX5ewEzeuvMRbKPAMT",
  "key6": "4SNFDAW3mT2bt4c66kbnDXMqaoZqvNWqnXTcdDKnAaFnCRqfUhVxmcGdpSeKdN75TGVdeJg9iWpTMMthxWJBKxy6",
  "key7": "46tW3urYjpBxxeNUScZpaKnpY6DBmt9uUrUmxFbUMUzLJt6y9hwX9ERQ44rucQL5HDnHsMZNBDMGDqggEcmS2m1",
  "key8": "2HAJqVqdikVqMWeMBBoTg7CQVDUENYDGEJz5YyPpJN7d7kuZB59HJq1V19jcQHP1q7XSZzFNsVEfYMKBvTtNq56a",
  "key9": "61yhj2bHkJ6sQtuvZ4tSgPFnpt9HinUxQLZbzQv9kvuFvKNuCLfwcxDbDbDSGEfnFvBGfnPtPdw3ti6sphVihnif",
  "key10": "5TJNMfoNnm3G12XdPpLVeECd8NrZTG9JWpsYLMn6esAB9fhpTNvNzbMmX8NQD7t7LdK6eZiKekgNt7HaH9EcUAko",
  "key11": "32kgMNLehCLopFpfx9Na88SDKjdPGSreiysacNXe2bqfSMQiTnozkkT5PN36uXaY8UWwbeTQczh76xuXaABGbdFW",
  "key12": "4mu8vUJBrXx5rmez1XHwuPqqiT8sdTkCF8Hq9sU83giomb43QRFGbnbgFzfPr38spicYgGRuJnaYP1WLNXV19T7e",
  "key13": "4aBMNrD3P7PJKRi7JQToK3xV1r44hRTYxwoPf2iq4CSJHTjq5ECNieqYYYEuo3uSoCJkZLiCoQsJZBFsoZZeU28T",
  "key14": "4tbCaLAekGG9SGTCpo3z5Bid1C5quwmcuxEB72YRp4kJC2PaeF7aceUk9k34mmxsQSfamQAbfvxyJB5WJxoU1zAZ",
  "key15": "3XgMszGG5L1qieY2Kh9VBs4e8ZnEuSgKsmqRosKnpSNGy1mT5MV5bBi7Sh4N3hgJryVVFLq6FeCbHKisRsSgE8kD",
  "key16": "5Vcg4FSdhVAdojPSRJustFe6eWE3HZuDohZqeEbLVthjuHKWsrSB5By5KjSZmudmJjdm2CGtC3rPys1CeqnSQEYB",
  "key17": "55WHzAH6k8vPj2f2zXeb95d7mikPfp22Hwcvw7uDSCQYi7D5kQamPxw87ZsSd2rvd586ADjxSVZn53zPRvMCNK1R",
  "key18": "34kauU1zXTTWFdUP1XousrrWNKwPnp6xiXQiUffAQKjQL9TMBw5YXGzk3atJAxhqBKp5MAX3DUXaMpP5D9fZ4qdK",
  "key19": "3EssrhimHp6eXSq1GNCAnDAX4ozs1QUT7NzvRtHPSjkk85ketyXXdPy5dy6myfkUcfzkwFgGi52KQyrprPowcPEC",
  "key20": "3cLsWG1yj6T2EvVPBXdjVd3rSswj38xumHr3SKiCiye7juVibQcWRg1B6Z3yqCLHa9zUDaas1hH6CoWFdQyGhPSA",
  "key21": "5s6zvpiScgu1Nh3JYeRtPgkUqNcojMBUhEDmWhVE5WCLwot5DXhUDmTFBXkWDx3cHYcCimf4gX5XRrzikJdMZEMo",
  "key22": "45WLhcjDP39vSftMV4E3jawFhbVHVQKQfWjeQKjYTgUvLucSJDauH2ieZkrUJFoy8y8UFrK1Tfsdh5hLfmrAmBBr",
  "key23": "5XbnmcbVyGPzdcMStgwAP5ADSjfjrgAgRWkHAEGwvRGchAn9KRdGyj85n5cMuh85t1gWsVKcVrbwmoT9hkU4jLr8",
  "key24": "3qTTPseGEenJZKvLkv7JYnq6PNWKtYPoNpqqYohs3WevS43pnaVtSXFc8ujiy5681jHCTfeZUTPX1SyVxa8gr5is",
  "key25": "5BwWmEYTyitZFoitcDVyL3RRHghG37bBULSk8S2JBK8n23erAR7iRQinCapmkEdKiNjxqKESVPi13E1UtnoZFGYB",
  "key26": "4gsWWawVY1ZszJT99LYJoqntr56dgLBt8d88DWiPg9nX3fRbgMG44NSrA9RiSCZD7YXqVWAbUBaGjbFpQAWnHffD",
  "key27": "56V5SJdQ42LTdLghsQTNpmrSe8HPLJ4o6jwPvoXw73daDg5hYHVg2pBJFC5JNsqb4YXHgjmpUSdGkmonQJatiket",
  "key28": "2oSRzNEpb34LsGj2KEBSfPhbrn8TkB3HvNrs2ZvmBiyBqb2SQ8caQ6p4veVAp7bJPouvkD7L22b62C4oBLL6Ch6m",
  "key29": "3KsGjxcL9rrFFuqBtsTLfTEDKU28kQFSQPSaRWPAZxuYTeG5L1ZAeDDWqYcHuqPJv49yjCVMkaLkbB7amThHqCCB",
  "key30": "e5JN2Lv9bJriQk7oJsRfunaWXMEm2kbDkLraxHR3HqqQCSwB2gVi7s3ujGPGvPunU2ddAtGM8KbwRntEmoAJPFJ",
  "key31": "RCrPMGNRQBRZt5qmqsQSyA4FFPLrXoBLZfgnzsQAQwQ9Xq7EZFPheEcEVEsmqmiDCorpSFkHvqL8ef6TuZU4Wfk",
  "key32": "k3k68yPZvBVb4W5cSkkFy11wz15RHYSRtazv8AcnpASkVhK4NzouCcXUrwT2N5sSwM3cnKe7wYxtAhbzDVp7Y77",
  "key33": "4cqqVEsjPQenZXhMLVmzuUxSvyiW1kzsZDTrF69BYyiJronYzTuoAAEH7oLLPwLoqWK2Eomkgo65xqNvUv83ENXx",
  "key34": "VpCLdkdbQrgNyxrH4CoDs9A821W8FYpe3XLCBkzazSs8Gewf1tgUV8HacbCNf93gYxwqBM8N1w6dnizr9cDF1X6",
  "key35": "2ztbqWzpfP6jZihYPTKC3Fa5V6bBKwihfj98LqPANU4h2ZvPnhNAwN8NniKVoYYHLPoP1tm1NVydbHdtMuVc7y2D",
  "key36": "XMPXmcCpDpQ8psE1pvZVHf3FRjg79hDRGufFAzRwoJKeLvU88Y3fWxUNYV8yzqGLMiwuLwkrghqmC25L4JNCYxB",
  "key37": "5hrPKU8AkYDctz5jVKfEYa65njENw9CixSjmMhaTCUfHrMUpDtFT1uDLkeHeYEU4oeijYtNAezHLRgHDrQaeo8sL",
  "key38": "2JkM2NCMv49exX1fiBoKsBM11rzUbj83sr4JpHSf35z3hPZcx99tVAvVEXC6F7GXotrRg2N2brScfbrMCEG7A65M",
  "key39": "38MCNAYe3NBrW1yVoyHrnY38zgp1q47cVgBsr9k8FVyZyFVeap1EzMSPrWg7PLa2KNMj722X8Pu1gc9Fvrsk4fiv",
  "key40": "65ay6XNtxqzxARfY4rX76KLBmk6fEtfmnYnqsDiET615XWg1vyuWp3xGp9Fjqr8u7Npv5kPN32rpfXomuBjkWLUa",
  "key41": "4kLR5ro1V4U5bP7yM7ivxC4UYfM75LfMbWv5FFbcAHBUGY6g7nPC5znmeWXaHJadvYyMaQ5uFAVHX875F5bxzn6X",
  "key42": "BAhGTWXSX2JFfkzCv623BgYYhesQSCjmp1dwJV5UnYunqpFnFHAL3V3uWGu9SBqbqmdAZ3MTUHEvzY65XksbGst"
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
