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
    "rjE2QU4uvn6t5pCuHPxS525XGsthjCiP6WZ6k62dBKsKuVfFHYQLywVwPeP8FMjSzGVzerGFMqcZ5XrZsakMwDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37mS5BkvBUvgxX7Jq4vkNkJA8weW3FdmpbjHHLhCRsvjGhuUvuRyXenQLWuyRdtAPhtSsXS9skASWyofL8FnPouL",
  "key1": "5YPfYZHrf5TW2REvH9kbSnU9aMGG242vb3Ff3QwRvzfXt3CV58t2L3QxCXcXxPezTzY5w3RUgAvnagkkBBsdUZxC",
  "key2": "2duKHybZbCN8P6FDVJyf7EurA4jwSP5FyeyZf12zn7LgJKU4smEfAbgmNi5RtHour6fz3y9UE2Ct8tK6RmSKaf1f",
  "key3": "3zasb9u1B8PwyezDgoG7LKBo9PFkzNmL4NVvRiyQEZf27Bk5SxMJjroDPRAakJ5uB67RL3yfqeFxAnY5AE7Jn1iL",
  "key4": "yASsrPKe1bjeurnY9x6XFwSUHJy9C7xk4r4Mrha93qZRcHsCDWoDafKnzXZsNnCN3jSL5ckw4RYnRo99a8AREPL",
  "key5": "4dfT9vxWxRhrUQ7bfrsbmSTQcUhPEbTt7UvLF2sgGt1WromBBCjnr3NjwXjF8zbTV625SN22WiwSsiHZw7BnDpBt",
  "key6": "42Yy9Mngg6mmoWMqdtbNczJH1iDSSKbHnFfMVKBWQy9WKV61ANzRARhXH192oKYdKp8b7jAYovbWWQ3Tzt6LffvC",
  "key7": "2wYF9PrgHvzqg1Xck3bgaiQ384LMRCEM9reUQCrPkNLSz3FJXMyVB4HasYmaoMcnS1Uz3SPzgWqDkdH5dxnojatV",
  "key8": "2TDZ38h61sKX6kb59NNARBSQuMa1A8KwtSwGa7vu7JLicPXa7aSCghpTsWRX1g3xTa9weTJg7TqPB9aJKapzR3X6",
  "key9": "7Nn1rzpGH7FuekHSHWRs6c3NSPbe3d9qC7MHSMzDpECuoEns5aLovbTnzw4qaozhHMzSCDgTRw73i9YcTuPbMYS",
  "key10": "4KTC1F7MLnzbc483vWrae8vRj66Ti4b4E5i2e2irceXXgfp8zxp3AqVuDpiTfYVP7X2oxs6UXj57zPpY2fGFAvdV",
  "key11": "5kRbbjAjEkrVU1yyUHbwNm2rqybQv9G8NZnjwzCALv5usQBkPHgM4wjbSJw6DhNPLPT9nZgAbYCRGXodGa9FQR41",
  "key12": "2H9sPEaFy68kWgVTYDf2SwydggqRZL55XMjkBb8a8W3u3wozn8YwZLunU3bgi8Ka4rx5Lw18iV8hr9QMBmXnSFRa",
  "key13": "bseQwkcEaiphbRapMmUikT761gHdE1y9fEcY4CtKYfJhsX1s7sC4bdkPrbybt7HRNfwUVFHvxXrMjaKcSAHjDVi",
  "key14": "3siZeF5wFuv6CXhikmLqBmEbkKpjhxM3AdQZLnnCQXHePGmaCe27da4iYKHSXgxX2UTkTKH3coZtLvSg1WLDnQCk",
  "key15": "37JrtjK7TpNR8ZUouiudrDgvebfy6ELATQ4uZzqaFuPQs7E4Pk5LfmZq26KJ9BvCKFJ9Ts4nC9qFp69mSSSZNPdq",
  "key16": "5DA9GBq8xN5rVFgXcWtsGXKwAZRuNfZTyN6iHQSR3rBbLkiJEnHFfdmo58AUMB4o97eYt1iv1vCNQc1rTDrDUB6h",
  "key17": "42SX8CebZMx5N4KEsqAQzFMuJBt8wk64koh7b7RGyP7r5h7EYJu4yNJHSLXCimxbhDW69MkYxrtVyVMj8BqqnzW2",
  "key18": "27xyBT9GbMLfSybh4YLfN8dBrSNAwVKEHvSLL95JvSUm7ggSTuRq5ydeUjxmNVGRihcW5rZZtZicpc1FLuzKE3mi",
  "key19": "eXKsJXhyCzzb4hNM5wieNsbBsVbLfRBGFvnzdy74udtefqTvYoQMeyQqb3Ubx8UEg1Yghc4QmQHDqVaXCrCqD58",
  "key20": "VTFH4U1mNzpQP1sHPpxpEgyg39FWJDn1x67j4ug51NsGfxFpGdF2yp3SEELoQ9iFb4vLNpT7NRnxvvG2t1TvWKV",
  "key21": "41aZpPgSAuoChq9v7DYLN72jFK7b8e4BYVmTzyULP3C6fH1y2sSSoeNSDemQdkgVzVmuNYbUoh2M8AZYKpyjGKt5",
  "key22": "46ezZFKuptbV4CfbqQWB31wvtaUhe8kDA7doCq2v4ecnZxkFPAecUWtcemsRSgdaghqppdh4guST8qCuxqUM94Cv",
  "key23": "5EEGiWMvDLqxaegSZC6LdMffrvU1WDvDtdEfXkn1NmKiJjC3MoSba9PSsC382GuTMXFigr2wTxmfNZPsWX2ZFDn",
  "key24": "HkFCAxQrqtzFwpCLrRJtFBkjywHtkY4vgnisLJNqtnkJfaig9S2TxEjzuEBQ2ktCa45VJNV129G7PFW37543T7L",
  "key25": "4g5GFrHGTpmx8RonexxzcThVzy8KTUKRAz8uEDBPRp35fzZ6jkRFqxi1SxJNuB9ZuKwZGRCJZSGLUiep3iyf1pQh",
  "key26": "66ZWmMJ3GB9tiVmYnAE9bZ8rqhyEdpu1isF7YEAPqSXZP4CByjyRpSs7uwokmNUjH2rmQ5adApDu2YvT52N1SRJY",
  "key27": "535JEQiU6Ld9ugc7tRwnJXN6qPwoHcR5qiamJB1fn1nrczWRZ93EM8PD7CPpeHxDbSN6ve6fpWCacwELPmT2gsGk",
  "key28": "2sh3kRp8wUgMooMg5MAiZBRss7XhsMB88GZ7yH9YqjqXcZVBLJnZs9RDSs8sG6oqfVwhyKYdxsiCnmfb6M2aiiMx",
  "key29": "5BALPeWacEtpGSuMbttLdS1mmmLWdiddKrpEvrhVB4nzeRSBXFJWH3GwKZgPZcHPwMSLVHrqHhC7sA2xyKqfaUBF",
  "key30": "KZFJPdMywZGXTZkRGX3CNLrgaKU37tu1roBF7VY7V3XQp4SfvQVg5dT1RfWB6Encpd2GodunvZ7BinHsJGKsC5D",
  "key31": "dX5SjD2iUvd1KoHRzZniSyA8pd4BPTybeNDSVmg9m5CwQGQfK4SpZHfXrbWqqiLSfytdWfnTNr3b7mWMpW2wCYb",
  "key32": "5mBMKjSUhBuQsUdJA7y38h6hEQ22tNZjiVr2sQu2mcdWBHT1Wrbs3twpd94Me3KDHBMWgidTDdHrRiaFRtJWKXqs",
  "key33": "4H52vh7JekVcTKQnRmNoubr3HHRaHM5TLqJntNJ9ATE8LRp3KjQNiMC8jVL4nARwJqvBvzsn5fhAtGDSUZV4HfE5",
  "key34": "2QTCE6Fexue6GeiDA4DpF9zCTGmqFTb48dr6V6UPV9L7eRZoNDGsCvghXdQz4hftmseeaUcBpiVKaRXkDfW4adQ2",
  "key35": "KZfMh9r9qHTnB9k1oy7k1e7rfBvMefjZr1j5DHFwLr1E4qYRxhKcdCqTsHwXeX8ziQFxjBKqZ2vRh8NaMa14QUa",
  "key36": "67URZMi4wAVfkojVWxJTZosUQnwSDb68mhk62gGeKz54vqfrh7AskejwDG6Nct6NpQNt38WmjBwR6q2aYaHQPrUk",
  "key37": "3DEQbvT5cjybXZ2Swcv1kSDrMrQQBScbwYz14FrJw6eMyjcV9j7ZQqv49AzUCXEVFSjycNKCjbGybY6u26FE9fD5",
  "key38": "2XFvwchn4fcFmxtE9w1AfjukD33hxEsQAeVBNyvnmzUchxysJw3KEgPJHGNLiLeqn925T66WiKABRTYCtsbVTXFx",
  "key39": "5718qmcprjscuNcWdofiLUt5zaARPmES2fkWAucDSMgNi6sLqiXJs8trKW1brLH7wJ3MAUc7aArVBiqRoRbCY5F2",
  "key40": "2kAmYXkH2QmqRxAWZbQr3xbsE6tb3fdiX6QWCUUZMewZaok1mikwk9H5zPc3addacJkDd4XRZffk61LZ7vT3ddmn",
  "key41": "53gKSz3xpsWqJpEz9wa7RZHXtEU9P7RdoRiB1cZdF8AJXjRS346nbmqVpL5ws2dv34fpf6YW6rZAx55cK2csaVfX",
  "key42": "3814gEecnV3Zzj4jMX7K3RePmpDQm4aC9s9JP63CcQL9i4XPbTfeNj8UP8Z16bTX2zmBLdCd9ZGzi7J7UQgVBt8N",
  "key43": "4dKtay56GvPNvtaqUjUvPkyTnAzTdRt9hZLZKecqUZhJStdpQ22syF4jcTZckqN2r4y6ZjDmtpDkehxGEq9uRhYi",
  "key44": "2HhsMyd9wKe61JJHpnHptqZnuHo2JatNyw83LHJBr6i7Crm1ngZyUi4GXYm4efEZwot3Q8RNjKPFhTLrF37rP3hz"
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
