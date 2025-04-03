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
    "wPy5GBg6KLfe4G4xYskBgBfvzjvRtNh7LyJBfqjdreYtRBkXhXFGnKMUECipzytNeKNcmJU7ZbVRSFA8R1siAJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L6DZQvPEsR9PGiKojKvAwqYh7XDiD3Hcy4XQXo3F7pGjQ56YdQ2AjM9JNBSPe236dSGFLt41qLkN111o8cKYBWW",
  "key1": "2UvtJ7DzemXL8VLuEGnSDED8t368nuFHSUHQESDTWEJSamXkVQ3L6Wsi8rLnjpBeaA66gU1moe7fb42oDukFS9iL",
  "key2": "5iM1trBzvxcfbdzJcqUbW5mE6du4pR9o96Zu4ydASVvgW2ZFpb38jVWzzRcMvimRCGK5ikAUDJqVXNRKtANzXVNX",
  "key3": "3EAFcC6TrcrJZZzw2GUBq6pMLjtZxkbVhmiN2kmE9JZyDHrcHreNbCJN7ZshUWVgyRics7C77abrTcBSPHA8ZBuR",
  "key4": "5cRiJCtctABm4NF1LE2mvFhJT5H5jpF94wVv7wnqqcSKKPJ6BJUD4uKTmSgQCHktYnifWVC6KRdMtFM65rPk7m4f",
  "key5": "5fVwfWHxAa6BLtA9DLpJKyvxUYPyqvx461YgSkz5Vz4zSMo1B9B2gNpEs3PLtKHfLDkqR5jo4RSRX1bewf5aFPhh",
  "key6": "2SUYF2hLpHQ8FzVUrn4Cn5SUJ9fd2qfF6HmbJkbA7em8SGkhEQ5tnSNUuzC342ynL7qw58Ny6Z4d1RQnBeSXztLC",
  "key7": "5M1UPYAic4KbX9uMhyTGAx7bGobLaw4Sgpt3Qc2Sf31J6Fd8rTLoq9FLnn8ABSXpDZuLG5WTqoEBSstb6oH7NJ4o",
  "key8": "2BM98nfqzdfAjUQkEXW7GmCsBtwkt9EfGrCyXoNz8LVK44pGXy2wZ6Rt4RGFZVfxUXW6e2hiWcES5xgfLFHFNQpt",
  "key9": "63GeACNMdatnrGFnZarLeSRrrBUiMq8dvmiEqvLtFG62v69JeeDmpUnZki4AohjDL63WDQHHUnQoazYoUxmDA8qX",
  "key10": "SCtb9HMxENChMwWZryBBCnUn1HRtKFJoSHbT925hnc8v4mB7YkWhhriWMQWrJtg66NmixqhS52s4WonKPqHQMk4",
  "key11": "29tH1fDtgE85DQfjubFUi2sPYfGaHMnevgi1hq2e9ypqYnfFyN2xHRF4Z3sRbeNi17JDnmcr4hfSWrpKVFrj9qve",
  "key12": "27MZJ4i3Q913FpY4D1dZcTuP8j3xYkmnx8rAZoux6T5C711T2fHDeJjYzA9mcxeUJdB89Y47SdVrt1baPLc9cmor",
  "key13": "5uczZjYyr44CttTqHk8pT9CvPFGKDxGTcKegyxsGC5V8GXW2AEtovJTQFbRQQgr6ZVTvV79xp2jj7L6HSEeUKHEG",
  "key14": "4JZov4L5zEqhpRjBCoHZMQ3vL4iYkB1Ppq6dYZRz8u6Du4XN87zUmz5TSk31LoHu3DkJkRy9grs9KuCqRxaqg3Vq",
  "key15": "4GBgaTBbHAPLea5jf8LvFTPT1JCwP6SspS3KKnKEVMCATBNuiRNpadTrond3BgkYEExrD3B8gSqZXgbdQ2o7sBkV",
  "key16": "5KZawppCQvpbG2WmWQMmUyou5h9pBv8uZuBrvdaa6CttJzDRxEsfreAWqYGMGSNUToDPbBWtZrfixE3DKQ1RvDdR",
  "key17": "25P21zsTwDA8RMeSuUc3LfnokUPnEuLR3wEVoVVvJbZAvATwcxV3v8n3rpA6AMqG3DX3FMWngTh2siarGZL4ukYU",
  "key18": "uQLasytJcJaavRnFPE1EjusRpjrgGosfhgnDZyRo6ioSAZTrQQJ6RdmqBjPSmnuijxwH33KN3SQNByhiwTXQX5t",
  "key19": "aPDMxjMpsU2qRwmxGu6EynUTKMa6QLxefrvkgZksYXJnZDxKyt9Pr1cZMhgj4gJWrZjRVqEPAEMzTEAybyCpbfs",
  "key20": "2jUvKedKHiMDU4eWQX5DpkngPcmRL9Er1QtjUSFy5VDxzzaNcqWdWUhSJXguw4aNaspjE49mo1E5v6kREbBLoD7G",
  "key21": "5JycNy18NWBqEv5gse195WjADUWocmQUfbaQMzweCBRkX5o4WAr1ETn9D4v39R4U99DSt2z7PRhejuRB378PZjdX",
  "key22": "3N9zgQbJEa6ArETW6zEtVGvSE168NV8YHbnE48Byat3FQ3S3wewqpeqgsfnD2kYA78STF9Jmzc62yz1dEZgsmPWV",
  "key23": "3tTrWNqTxpE1hbs7zsEVzeBMDQRagDoq9Wbbkn32A4t64pLCvSokTqb6FmpBoRbUFMhgKRZBd13bdke7azZBGWLT",
  "key24": "PjwPuo5w659nWfX179Lt4k2HtwsMNzmgTDD88H6oEr8okD4AKyYycVBMeagncrcPSgTgsN5cK5JnYvoBW3VQU3b",
  "key25": "5A7SQ7AW4rRSuhM9K75fu68WFCPLt13qx5D9cNHNedvRDU17eoQmU7tSsjg6UuA3VLJhg2SrHqxPGvM7x4LkdVEm",
  "key26": "x723VWmyFGwVwDgHvV6Ea9BvSd3rhe8Tihmv4Qpzn4RQgcgpX8A1HMRdEQVVGN5RTvLBpP8Z8sd7Lxc3C1zxEUE",
  "key27": "4KtNkv78PDudo4HpFFgJzy6JwK8DRWtFHhWE3gZU2gTgDV3tZeCaSZDRtSR7LhUAYFh8ZsmyeNdBAprsqPhLFWUd",
  "key28": "5shD1Tsoz3BMn3rihbhvcxbCuzLSiAdjGKXWVsUAGaENzAatAXYRTBRKeFt1C4JdA7cW4RQSFhabgLQyPPbksXQY",
  "key29": "44Uz5gwFBHkd38Btb5M442qnfX6iE662BHSypqXcfaTMW3f2x2WYdSsqkDg1NnTsbL5dZgmrwUAGezwijj22Gtge",
  "key30": "4xvYAifV7Lu7RJdHgn1BnnHrzAgKDeG1CfbTzHrZHqAAUJDSxqMXb8A9JPdRGZBUTeSn3f1ADdEBZrRsS5qQSePS",
  "key31": "4DHoom4EabrVBh56qbfzRTb8pvZsJwq6h3PKSkGE6Rt3b1FXiK1Hb53VMbq2HZ8ktosDi631TjmrQhtHRYxqQavk",
  "key32": "2Xd2Br3s5eYh2UMCnrsSsaqPyj3bz68YRBZtPXnzJL9dVSSMJGNzZspeYNKr3Zp7w9HrhqNYLJxodHnY7ekGS8NT",
  "key33": "3BnvikhXPCHLvXLM3w5fMZf1fdMBLVrbXgFx3dQrfrSqfdnXF7aH78pqp9hjtkkGRbhjCsXF83tiJpzRpUwUPnCT",
  "key34": "3KK71tvhHDeVe71MN7up2sg1pCtts1Q5owxMmbpKmbDSKVcgACxdqRmtbn9RvqX8nhAfG1RW7JvuuRfTwVtTZh8f"
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
