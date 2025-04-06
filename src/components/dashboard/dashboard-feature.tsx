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
    "K5f4XWwGLtcmL2uMYVLB2rqKbAeBXfvzza1gn3SH1SoqKi1ib9RS9QUxgYeteuTWGFByBM4hyJZFgEPwiTEqmxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CQjjhqsB4dt99TgAioyVnsJc4BsDZgVS4o7M7Mhd6GmsocMjQA4yxhpC3XTyrfepA4jjvQ3Cg1vGXQim6CQW73U",
  "key1": "3FjL9TmH2fdyyZRsE32jCwKZ8wLH2AJE9rFxgePzzXo3pSeZNmdGcKvveQRxJyZm911hKhrE2mFEtugREvN1Nun2",
  "key2": "4ptjwmqYYRhqqeSQPV3TULpZc8epSeGsd25WsEszo5DPqaRXYVZSJHiyvNEbxm2Vwa5zxdsw83M5isvCQMQjFYZX",
  "key3": "21Ejt7sMA1QpsugK9tjASdpJfR2NNShXZA18SbdDcBKh7zQLh6rXZvUA9JGug5EDNufoSHBJ8ovAQ2KGZEqNaPq4",
  "key4": "3UTMTMPAt9iQvMkGK9rmpwskrCHwZNc975byEM87boTDHfxBPQsMiJCV8DLFB99rDtxHz84XLGvooj6MrFjtHHxm",
  "key5": "3MRRcWWvs1bQXtTAM7h95K1xESXCNHDZyU8t7zrDnkWnX6JNn9HfaoTDHYeGYSYyDQLpVBJsrsutvMfe8YaZFHdJ",
  "key6": "3YoqRGeVA56yYr2RG9CmnvYpiCFDFLX4aSuthKAk12rgb8AHQmHArXN1514LdVDzyJerma1F8xApUBERtYvuPh7m",
  "key7": "4Uuvx1iBCTbpHWtTnBGV69NbEsZjhgstxfFdvFYp9KqYdYNM2b6GMTYyLLAxWXxsbcp3xpqKKzjbLeUmhQSi3t97",
  "key8": "MiKh5qN8i4z56KpBXvF17vSuKpEMVmb3FFF9BZjHSYs1sonZcy9iBbxCEkvy8ZwhJwDefiTod6oXmrgbL1ovkR6",
  "key9": "2rzLbFJuJB9gqPZ4SAG68XsheFYKggKN4XkFvRTiFkbjWE1U8ZFBxxRURCeAXp8qgGZho3KP1FBkD5Dkcfqym1wb",
  "key10": "37qtoE4Hq1PiAVbemMTTrukwag8CD6KcWCatg4ZE6hgxJ7pdfEg63JNCK1xuD8iPiX3zMbwWXbxoPntVGHDMTLy",
  "key11": "2FuNt5MKfBRyTsbfduehGs7bgH2encc9fPa4h2Vn36RXYwPiH52E1waGdSqvAoYYuG8ZMNySjjvYARrssU7SLHFu",
  "key12": "5gynMoRW2gBtVcbu4PnkbJbk7nvaPfuWRBrEfLyLjGQTstQtQbkDKxCAjZtyXsFrJqK8J7YUz6kKXkyLxNmhmxXm",
  "key13": "642BUtq9W2K9Bep4xdxV79xeN1HnHujSLyqg4Wuvu8UD4zKE18aH8g39V9PDkYeRFaaJuHAX3ontrV5T1i4T4oF6",
  "key14": "588T2nN695nP5xk1scgMr1ykaAGiespP4xt6uGL5arGQKmSUaLLxvQe5GoKdsG65pBfEWuiNHWTv57wUGWuGETrF",
  "key15": "jfprG7MabmR2EHnU4BN97tDvrreiT2gyihWNJy4Q8h6YWqwxEJfVLuj9ARA4oNg63aKb85uT7MzVdUMtEZV6foK",
  "key16": "47gj8DTVRGHTAT4h5L7ZAGouyiP46cxMpYfYH345pjnciUsaiWZkfiBqNYx8MMqejLSskujpFv2LqmFri73QAr41",
  "key17": "4diWUwHDZ7fWjX6JAyFqDP11J4BUoVECGELbn27cfGgTUZeitHy2h94UgPUK3q6VLm19UmHRPwZontrWW8yeipfB",
  "key18": "3zFsXzYVwSTzi2nF59MEnfor1pby4YdwjpGcPnJq5e5J7MyQGABw9GjCh5xW4cYjVfTK7FJHtwRGamEE6PRy1Q7b",
  "key19": "52NnrqatKTJiCJgSiBr7QN85KZUtqEJd7v9aoZiG5dHD8r3d85XPXqTTRffvQHJQiYvB529huoJ1o5VXL8F6Zui5",
  "key20": "4uUxq83BpuayocwEZ4vjgamtEW1YMeSWBqfp7eVt15sRx2KC2XJjiTYQsiUtRtX38nbPV14hr5LhDVFHQwDDpEVB",
  "key21": "2gaQgx8KG5pQwWN18fFxcFHXE57Yg4cjLDicPzDLiRKow6pZTAoU91962n3mX34ahvY5fzQ9h5aX8hYTcipMNjAp",
  "key22": "4KjoQjXtixpD3y35TqwpgmjrE6CySMFHzd526mD3Go36VKL2vWZYR4mmkw6ZyfhWKRvy2mi2UfgsLxrfqqqXS9qy",
  "key23": "4oUkiy2sa9DEy9iDhBa8WhJ2gzCpp54XhkWrYNDEzfaiCAjmPvGywszh9HmtPXhbqR9dymf5WoLgafet5sVYkFnV",
  "key24": "XnnKTiBLGBsdthxFqc4sDLs5o1CPYPrh2CdwpP3FRL5JXwAzBRyHQTRpF2Jq5ovcFs4ufVPRuD2pAA7wsfRJHhT",
  "key25": "ifgJzyX45XJNG9pMrVoRN9KekxHrjrzKjmk4E9u53GEUhCs9M3EuY3Gygh99rRDTRpb1S8AFeJPA2mEwEpfd6Fo",
  "key26": "AtGqRTLasn3rV4yG8A9TfsR1mvi1yiQGKjY2c9mFwtcXJe1GUZrDTDbjffhJ4wxusLB91prxR2ikM3QjPFBZCBK",
  "key27": "3VeuW79Vch592UhcL26NsYydKBR28LXLxKgUsq1w7iugYaZeCaMwRsraFs1zWArRBig85okarFkNWGMJv2QV4op7",
  "key28": "swjZXBs1xRVXfEtG1nvA7bi8B1japY2TPWM1uCefTGDSLBu2CfxcXnkiVQpWEPGGEPLfZt7YgYVGWDxszFQqdoJ",
  "key29": "3oku2VrrfUdTR3KRWPdaFdhode5cFE32CripzCSuqNiCCinDZbrJQP7L4D22svb9bc11CMKtxALRKSumnrcYie4s",
  "key30": "4fdmpHtZg45P66XdVuH6Y6aVjnzp3c8nnM6AkyFVXCBQDT5xKxMwB1EH8odbPyGoAmveCGWZdHpMkTjKeHfhuDqM",
  "key31": "48ib4C9tekYSx14PwMvEcy9stjsgXrYj25tfQjaBuQtbCkRLvPPTBoooT8okzj54fnmw6cK46GCm6Kb3fPnAsqjB",
  "key32": "2vPwRMKXofs5dRpHwfu1BQh1vNNXbMkWvyUWkGQkaVRrNNRjzgpPipj9izoDURp84SKdofC9U32akpf17vPnYhyP"
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
