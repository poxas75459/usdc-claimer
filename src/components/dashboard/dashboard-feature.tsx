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
    "221ta2h3MPxUJdFP56N2YUVAVT1fChNLFNKNqi3DTUAkUrUWow9takSAhjBFjFE9cXbZXSYg9bZedqqdcAGRd768"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BXJCcbU1sYfHZ6gqEA1kxxMjFDFQmBui44m4JWjYpaUyF7MQssKJvKf93r7APmsshM3CyvMjEQcXW3sPkkLRe9h",
  "key1": "nVGQeJDqJu1Btsj8evWe6CWZBDXrERMU8MR2D4mJwfca31ZYxf2G6yioRrDyn3zq6Navh6L2rcWX9RUNdVm8Smi",
  "key2": "TC5tGg42h35YXJraNwSHj241CpcP7nbNNZsKqWpcKy54vjGmbaAwvy9dVi71fAPmTWR9AwXQPASYYBwyYXZYpPv",
  "key3": "2GayPqYCmFBCaf4VnKn47o1pg97NNUqGBnfyRjW9jCjzbhW6KaD7S3koyV2BtMEoECttQtDfWw5YN95zUMBBfd5X",
  "key4": "5eFRXo52X4EmRAD9evsdDwvxQnEfEgQm85aibgUHnepVvm9ynV6TnA9Eb8hHRYKKzw1mbCHabYcfjra5heR2vTRD",
  "key5": "5Fgtzo2jUHWaJ5kUJK6ZEgrs3bnQFKgc5kvwNqXWdeYmzCGYcSvVsEP5LJMvrwXxAQVHC1CXdX3e3T9xCFrnSHzX",
  "key6": "3BgoxCxroU64HnXpqt8Q7DsC4ursDDGkxFqRWvW7gy8yaL261tAvxrt5azSuD2FjJdAC9hGvNZU7dXsJE9ihd2du",
  "key7": "5Pw43G9iU1uFqTU9XXsNqsRrf3qeCGAmEov7Xr6mykM7mbqUUGS1DorG3M3FU6MYWM2jypu4kMigAqfQaaPbZ1r",
  "key8": "5JMqjCAsFoZvTbZFYR8KFPfLjcuSdeQ21hhx2nKqFCiiT85Dkev7r5TnVH6XokG4NKJkH3CQ9Hnz674tSwFtjKzC",
  "key9": "cWNJDemyncnS6oSobfBsUNSgp8Pd7FiioqeZLXzxpKgc37N9bvj9L9u5BS51cGVP8yNbJbGf3Vc6q8uiTmJ6xsC",
  "key10": "DXAum9xa3xXswq12Rnna3mDuwPenjZtpYVcJarFJCcVmJenEvcEaycYvEkaeCCqfDcqZnQSy8kCJ7sBKPErAidG",
  "key11": "28ZFEW3RZeHn2kth86UAg5mhxi3yTj6Uy648zoukrVXFvZaEcHoecFJpN6W19m9oDB87cPsmTJe1mnnRZTbsYwSQ",
  "key12": "5ZBHan4rsYN8Tnm2xWd81umCiUim9SMBkXsphhThKrHanX17cVuk3K7p89cqQxHmQs81novGaU6daVj9ebUZpUXZ",
  "key13": "4Gca7jUE393Se5akCFqwz7d8kbYSMkXcp8PbfjuAe14ZybAi5txZ2Bg3syU1F4r9kNaqHbKB4wAXjnG1c2uSBdGG",
  "key14": "5E4A851d8yC3jGHGBUcGp4hJAafx5d8FCrmugFTNNTiUadNZFvn27sXYurdH6S8jm9KzvuHeoKs1K1MMcdAqsfR7",
  "key15": "kphPge69JckeRWWvshZbhwv7P5MFCwxn9WJikomB5VD5uvGDPYTA3Wd8kzMrDQ2nr3CSR6jGy2kRPShnyuebtqe",
  "key16": "m2qtizbxFAbgDsgfcvPaq6j9qQbNYHGF3RvgraTPA3usd7UAQe3LazbcJmet7twduJEpi9UJHQrZaATcNEdTxMD",
  "key17": "3A9zPwy17XrjpuiBx51abHuvcrffrZAtsrqB9VpMhbFenBqApq2og9V5uhoaPBTB14mt5TKJe9oSiWBuc9Q5mHz1",
  "key18": "aB2kxatoPXwfwNtw8RNihVPRTebY8hfDdu3rY6mSbBjwDL42FfoiQRTp9UPQaujYJeHajP7CqU4qGDb2jJUcpj2",
  "key19": "5h6KSzsDyLqeBhi7NW9oCspnn2hDbgmzU4PChDMJSeGhiNKLkho3dxpXcbemLjWmv1dtxQmdovBnH3Xbg2Z3wJwc",
  "key20": "5GrF6pDkNzpkiQBi18jVeWz4LV8jfHbtQT2BZpyFYKwhkj2s6V52DNNKMRELZfeSWUHcGJGeQSJvx5BG7XRSEBCg",
  "key21": "5vmsC8Kd8chH8djdQZFEj9bGvyJEuvExFSXpkTMCjxFxSYuPE1F4EbYgKJ8WCGdHFjXBbhTWVML5Sw2AT8yJZ1hb",
  "key22": "4rLF1ijmSTcFcZv5jBvpDom5Dua3okJ5TcB6efnYvJ29Y7BvuSm4iUsWvBrYWHxa4W9EmsqDf87R554rKpiW16Ay",
  "key23": "4kK29r2ZzGHj64moPYpt4oMPnQkRLhn1pNzGQjEeyGMEP8bdy7Y3wmJ9NFkMoSiNxjnR4nuCMzRTKdXChN73WxSp",
  "key24": "5Njmr249fwGHspLMCaCUVifFK7qLKKgVjL4zGa41GkX4sRP6N3HLdeiWUHmpaHMskcehvTsoHvhk8wRdRfYxcMwc",
  "key25": "3VAcZMrbq5xLQSxtj3tfeoffqAe4fCUR4Bsrcz12QK1vZWQ7Yi33irojamXRHQA4uBsmbbdU56m2JKdn2wvp4Gne",
  "key26": "2DPzpEp3wE7EfNFZkqWuJgf6SZb5ma1QVKFaLAzB3DCFe3nJsiSL9cS3rRbHC4F8p1EcqhL1T64YUNdDoQGKK3rF",
  "key27": "ZBXMQnRJprfbEZGRzx4QCvPuZqAZP8fDCsLgFEtj4cbcR9w6yendmJyxGHPxCxvsiC3UqRUnF4axvtdjbG2Jc8D",
  "key28": "29D5fpErf8wkb7PR1BZ1gt55DeZtW5nGSZdFLGkUAmSmDHyzLttS86CQ44pLwrJxNskB6zypEVCXh97rEvsj5okf",
  "key29": "3jNwUF7EsCHFsEg71XR6mczpRJn3qWQSg6WS729XVrHhZBxbPUFjULNHadHk8oFrRMuiwAZjEr1vw5RDNogfgHm8",
  "key30": "62z6e9wAYhxkEpbPD2dmug7VtBjBE76ZN3mAowxzDtmmCZMmmuvxBNow9mGFueHer8PLe4C9LYtsqGrGJsBuCMLb",
  "key31": "3s1m9jT2Lw34zwU2UZWmVYKzewfE9JAHU8K4skZJwPQjS5eGFLSoT2rrzAvikJYnyiMcZ5dpwBEuzNeMwUpkMG8j",
  "key32": "3tuqEpaAoH16A487KdzX26Lnp8oN1iHKMywVUoTJe2NdY6vuRcdpPQfVCvtYfZLeBvBzJsKtUDYVmv7fEVtiQofN",
  "key33": "4CxKYRzqgKZ8T8Dg7cFwbfRtrh7Wsg38axGQEmYTSTTz4ZmNWYdHxpXzJFHqJtMyKA48PMK7WvMkhwkQqx5H4oRq",
  "key34": "sdQuzYyDynA4yd9dB8uNbsnLBCRTMJ1s9Mu45Jf7ujPqJG6nYbzVUshM9UmfZw8ZX1dpVm2qHU85ZQegKRn32x2",
  "key35": "WcJSGNW7mU3hedjyzAGvcr4VrUm1GtzSNkxTWhs1j2Nv6tZMNakyLtEWKe7a93p7o4VuBCcJR987Nn51NBnVKt7",
  "key36": "2EnFukGNZq52JivbGHr7LkAMoQBqS7e8zQZtrk1zNpohcdbbSz5c6MSKwVz97Y5LvSjkZqfNj3uwZw94aA5ZHQbZ",
  "key37": "52ei9LRxogPqKPZVpqgWnN3cG7bRLMDunX8dqQ5sG7wMKXKxstdam6g4UMvzgVrRkXR6tKpgot85Ja8DUz71pwEs",
  "key38": "4yu7dAD2xqwDqLk59eUcKjmJeYhhuDqGSjvg4QvzDFMQJiFvtcZCYM1MCoiNx1g9yNoLp9qNLUQRCWonr7pwo6b1",
  "key39": "3fxeHKRzSN3QHG95fW2CqEAxvpGSDan1MxKcSrvD8L4H8LYG56zV11jEQT3ofpcKaQEbkpTUfk6o2T8cruZDkarG",
  "key40": "3TTAYJxGFPX2e6RjyhiykNFQvqcmTqHUhAuy2assuL2Gbs3p6WdoGLBzRdFGzMhvG5hxyGijFGACeYJALJRfgVSJ",
  "key41": "2t4SFCc2tR7QoXj5vd1RDqUa8SUTcojC21vPRxU5pgacFNy1CDN84Dxu7XSHnDmNAoJbyTAchk1N85qrW1o5SiHw",
  "key42": "3vsktNeX2XBUVqfCJNzppDZxS6XGuzz93fvFj8pbhohDUmDAFXTYECyANpshmXsiXxddwfhpebhy73iE79zwviYH",
  "key43": "61BRBCLw2eQeXgfkhWBh1nJSYKXXFA8wcXVD1f73n6zrzV7S9mpCf5rzRqLouCdcvC4ukn2cbgrrGYe2q6hR2s4E",
  "key44": "2SYBD9kLLW91qcJHyXsWUiLsnsaXp6BtN1Ejqk4DchooX2dNjS9y1Y449fNShF5frZ6wTx7LBXsR91sbKGssvkWa",
  "key45": "4BXUo2JzfEzQsPw7X2TTcrj5q9mKHzUndPe7WiKdJAeojCQK5Lcxpm5PFYTWS1QnHqbQ4AzNdqZVfQxAbFzsgm2u"
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
