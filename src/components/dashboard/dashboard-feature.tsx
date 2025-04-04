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
    "2Aba8yRaWB9Ck2znk7J3X7bmdrQQJzaao4M3Yd7smxbg8jyUq5wt1Zoa31pum527MLBX5gXF5BfHbyc4RBwt9Vxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sLghCZq1N2GYSKz7w6eCwjrDQkTq9eaAJJMxvmkPk92diwugthzxUnfsByu5dPiW6fWxE1p5jDNzvThqHCsjsDD",
  "key1": "2Jjk69KqcJES9BWnHJ9ApMpJGsBH21yEc8fYXpPm6zxcPuuhDDCNVJkHn6j4R3peDwYou7TXWXjZEX9PmcJnobEM",
  "key2": "2yx2s8Ugp8szVmEZZERgYsFjB6RtVB9EcCLth6roYATMQHmVrJaTsFsiSQd2gqmNnHnty6QZWc7DAnZzFWM4fMB2",
  "key3": "tn9ufFnkMHGce97aVJU8Smc2fVayrdgTx3wnZhJ3oLjjAazsLVtuXCV2rfjHBfXEtJ9DdGz6GKiA3sYj6vm4twQ",
  "key4": "3HspXmyKA6kxTP4SbR5rDFLk8BsZxvSoNKa2fvmevhkr2SMxUh2LLPysZxdfp7vDbSaRcfChUj4uQDxTQ7w39Qg8",
  "key5": "9siWe6qU7MVHLS91fdiGjWaYmpGwMRerAfssjJpGRTaQm6DB1Fn8UNRCBPsSRtdcv862cNcUd1CEaku7Hwkdvz9",
  "key6": "54XZty58kan2DE5LN3Xe9NAMLEEowTDFn3w4ZVGwdXHfPtmhLKqonXXx7TNfmQ5d4DYJUBaL774s6MKQMaetq916",
  "key7": "2AecaSNgpPZxc4ytymPRxjPuoi5Rs79L5nnTM4qBafK9AF52Ni2EPRhCexL4CA1GEwK3YM2T6ArksCexLsJH4Sd7",
  "key8": "2be4EELNypqwANcQkpFufqK7znnK8id4LPHZCMB2MEZ7kqbYEsjA6vUN4LPH1kPhJTooGDVECPW9h5XtQ4vfmbS7",
  "key9": "4p8dWJ11oLmYsg2mtJuNVU6kFFsmhai2TwBSsNWcu8yHxeUht86UQ5aPe5BMvLrh1nUYjQ5GsRvg9R2PQfwFFSc6",
  "key10": "5Qvcy2d3GQwiFgtAMxKgFHcRhh8EPjg8yACLBcmqWvvrYHEsRTYzrBBoCMHzcQSgVJGMhS4o8XQsiZ89TGzonX3s",
  "key11": "ydviBxWt6buti8FGUFsE7W7zjteJJwtFiR6LF1ndj5e45MdRChysTodBnjL6HAYZwE2xyXtAyeK6GQQA5MGNfUi",
  "key12": "5esuu5JkaeF8DVZJ3tCnXX5PG4tzJ6ihawDfz5UHN7DJ9HgpqzhtknDPRoXtjr4rKDikCHbKqUW3agFkChGNmK8a",
  "key13": "4rdqV2mCwCH65YDVbnbkZGpAPuw6hGrXXNRYbAobQqo3w4qAbnZNzhLU1ucNf438CxX1vCQSSU5ePwRe6STPuwi",
  "key14": "3JJ1YN2dozQGQKehDT8aqfSPYSo32g4pxcKkf8JLyYfupnDc5tvE5du1o7FDQaE5T7uctrvq11LNVyyJhd8Nyrzy",
  "key15": "3bMVmszTeT2rVySm2wof5Njwi8p1sjV172KSxsdixtLgP27KfE4B8ESud79Caodt3iuRnA1tv4eyJTLb77LeMFjv",
  "key16": "53sK6SA62n6NkDEtGiXi1BkxDPEfyQczPjDSnwwKibUQ5CtjRukW9gjukKBpTthjnEuMZJSLzMcd6QLS4ZjkBexw",
  "key17": "4N8DQvqh79qEzdyMsYJG8c6zPgF43Ydi8NwpW6L4MjGYFvjAC3Cdxwgx5VrWv6tbF7BqG5os6hdzMguY5DBgrPaU",
  "key18": "31CwjN4c3czM14ZjigE2aAT9dj3GpHFvPjbk3ePMUysF4n2Bs3d1y3i9CGLnA9np15VZHyDcEuUPuqeL47ctw3Cx",
  "key19": "5uphAahct5nfx78pgtS45xcDfqzUFQYvrmdmAR4sGB3AYDYHFyexM1xBQuCCZ6psDCc69SZnSFSg48Cdde88XkxS",
  "key20": "22gtyp9HXGeDyDTN59hDYpoSPmsishBoJR3xLboekfvod7mDHavH28B9vXQKChVWyp3nhYDAfjAs1gh3n7uANCEY",
  "key21": "2Zt5oaMqEDEUs1ZikkJHq7uvgvsbLG9DJUkp9eBAwk8tJo3gceWoUfgxsSXDVun8AiF2ojMvvFeTEJRBNRAFaKwc",
  "key22": "5wcAoJDeHHFbp3izMUJnCDBcViNgfp2soRhs5HcWfBQ1CwBeVQyFbmwjVugU3cdUqgwx68mLZ4NU5MR4Pmiw11TC",
  "key23": "EfYr5gKokcE2kZTQzYZhwTnkw4U3XAZY8fsdovxTQrX8a5TGA6VdDapSJHEvh5suajzgYBR7JzTzVUPuqzgXqG4",
  "key24": "28NBc1jvhxJxgHG65XKAkSMrVUTWL2opWVK9Z2TWK7WWgTrpuQP4Xibabzj6HGRZtErU5q5FQgE7wSqGE9fjUEQ3",
  "key25": "4KZ3e5kogeXsAgiDSpw9HiJmzXMReiKEMh5cZdVsJsaVt5np64EQUYNLYAVfVVEEiv68ce2SXMsCUt1VnTt4oXBd",
  "key26": "3YuU74qdTdwAZEgZxkJ6aJxTQGAhQSEN2ZHQL8u7iyGGs6H7usfN2otCDtVmgKhtrkNi8DskAxWyKhmkU5yN4fuu",
  "key27": "2v1xgQ5VLqSyabbvfLza2S65GDAnbhfTKFJ3GusPkmrMeeEumPur2RMgCkW8f4Wbo84ACfsHcnsL4rCRgkQzUdiL",
  "key28": "2ACgVmEjC17Fy6PnBkP2Vd7APoznFSXesxFYgFqbR2Uh4ZEKQRDiX7stHkZWJVYyLQ4yd7sPcBe418UMxnP21tu7",
  "key29": "3PxDyyFgf5UNwyzaWWCnFuCWBAfF4WiZrY3DjhAPeAo7g6mvvdzGQeGACe3XC1ALHRZ8pW3ha2Va1Fsa1QTUQDyF",
  "key30": "2Kar9W8ASTkVGR6nXvREwAGD4bUWqsSYhd7ECAqUFGjXQehXrcJKmswfv7JES6H5deZNUL6ov38zFGXUn3kGspcY",
  "key31": "3C9swvyAzvHDXNdNbF3xyxcdvoD9P8ToAjFPs7dVF9hhonpnsHm5wW8aZUaa4S8864YQw9GEHT3at1hkAtbuhtby",
  "key32": "kemSyCJKBg2W4Cqy2YbSMvFgyKUEMxmqmPUzwGDgNNWBreHd2WcLtakB1pyBNaYxje6HM2fVsTYD8sgLCzVSrjP",
  "key33": "3xFd7Ms8ZGCPq9s6qtEFUsKPyg3SMBybASQJUxcAQ9B33s6DMqGEq62DYaA8vP4efNGiw1ZbERJsNUdqmSqm9f8g",
  "key34": "4BNTYJeun1YgWfJbukzracJXiZw9W7infsCaZo7bjkdmfT41oNNwZye3VL6V2shjxeTJ2NiZjsWUrbvrugfEXeaP",
  "key35": "3rGKmcv6g1v2VEo1GK3dPrQJNUgpFrR5qwqzkjkiv92PLpv17WJWoVjw8XCP6uScSqifc94wTpeRoMyBPBL6CtCe",
  "key36": "4nQLHpRKkDtkAKxKRJQSHQ2Wwhi2tYbJjWFh66vnHUWgJKL2L6VMRCnfgCBQj1deVk8LTn9jGyWQXpBT5qFh5FJp"
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
