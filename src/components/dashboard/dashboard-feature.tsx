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
    "4hdvLhPWUTpKn7ghon85GqDAiWN8rtQJZap6odQHht54wt4wWLEqyCH1vDXtsqHhW9UyNj6ByThRgX9PtBNyHqpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zYFBuNvFJxx4MUoYQVTKswoLnJ9SSpfWa18AJms65HpXr2sxf2R8ysCkoDsBtBEjv8xW7CqoDaJqxGsdYxSWpv1",
  "key1": "5PHNRwGEb61EJkw9Ar6Xz6RuVbqyWcEn9KpxA1eCTSEmt93mjnnDMVKvSd7pqX2HnFbXhNnckjp8thKBo9SywE6L",
  "key2": "4tD1JxkCYbwykGeXQfwpkodVCfnNr6obP89GEdkPrGoZjkp7PVTBK19GBjsJXwZKG2yzB7ZzDPkBCzMkVAsm4di2",
  "key3": "2ha8j887pyj1KdMuNpHUhmGN4XtNwDxRS5urGZUXhZiVN79ediMY5QEh6zP187Vgc52BmctqSb3hSQUFcWE7CNAS",
  "key4": "4QD4NW4tH48J1a78yEPampKGMSnBCP4gbPxBDf9BJ9fspGdmmCMqdAM2iZkDkdA5Ryc7TES9t3Qm3kFrUDzz4oFw",
  "key5": "4e3g59Lgua53V3mwK8PmBzYFUQcgLcG8onGXBqmBvjj1yqZYACnxW2dQKX8vpezQqr25FEMynuLr26J4Hgqb7kXt",
  "key6": "2q3kMm9g7i95fi8xArzrSWSpWxhn6V8cUGc11d65zisXYMcZWGkJg2BRLaTZd31ULYsapkWJGS4m958Yddhk5xWA",
  "key7": "e1Tm6uC4AGvXWyANoLDQVS6fn9e5qMqgC13jwyaaexh73DMv5jESWyPpp6a8cpHyCWpS3MDi1N9WR4p31RWB3MS",
  "key8": "2tgifZEzy3HRKUFxmNR8gMjZ8gx4zaFPhJPk3vVqa7zfb9pTjYxRHh63NCaZjtMQPGGknunorPE18giVaGYq98ER",
  "key9": "5rfimJzEu8xC8MnU6C3Z7BrUUwkdy3m9aVJs7F7yzbfpucJr8PAyELKywhpjyY4k9xzDRz8q4pBmUcVSftjB7saC",
  "key10": "3nbuZ7EH323V8pu9KH7zeHPaiuk4JFL44jZekFWWXKBY353XUiQ3WfaZpp3BrC5kw9r3YpdoQLwFrHggKN1ttXr8",
  "key11": "411X36LrvAhmKP3HYzgHwYK6kXpASc8uN6A523rNQneEBuMPWAcwrh4uAbBtTNM7eRv8k8dVqzWXxGEpxmTpres1",
  "key12": "4PDWijSPPhVqgZtBGJJWhmtqEpjotmJZgWts5jjZmnENLFqQyHpeTv2MccK2ScmpSKDdys6eqp1wQrU3idbLT2fn",
  "key13": "wFG8wztvNL6bNXgGyAh5TTZEnvRAMdmqMHG6ifaqBv9ZbtQoQP6mpTdLQCpNsPg2ft28fdQpnYTE8EfE7Y98zeW",
  "key14": "44K9REjBymZyh5LnLrzFxYtYvmT942qVEUiSJay8hdz5QZCMFrqHpyAHQDyVqx7aChAzYSu4DsLLaLoNTmArFt17",
  "key15": "AFZHHXv64yXmadNaFezXeMzhcWY5z79e8YGPsYhFbe8GWC8JoWkpHumuc8QhyccEUBBRAZi8spXqYhE5NfKGQDp",
  "key16": "2AqvWhN2jpsFPSaFAk3Cyg9nheFQap22xKDSKP8KM7NZVZ7aAibPSSSM9DuSzSMwUWVGCnS5vQPQ5Wqa9KFHBdra",
  "key17": "56pJABKfS7GncfprqjBtNTPW7WS86PqsMoxWc6mPbmGzzsMddHabU1wTw5vf5D4muKfKM2fpV2Pd6detCycAymhS",
  "key18": "uypKier5gTed1QsLrULuvaz6JDfeGbrucqTEa5rzVzG1SJupdCLzJJ1d9zsQS7sYXGo8TMcvJ2QRNgBRHg5Zwfd",
  "key19": "5LPTuCHUyFvhVzHz2qmBKq9wnHofC84ub5LkjRaFLmX2afuscw38dWV147KVCE9mD5pisNsJfsJdBTyJJKaXrnVX",
  "key20": "2TNhoTu294KLfG1NoqDtVecbp12eiDvWNfYcV9yHLkKU5DvWDm3vZWNhZPae5LcskoUw6Q637ErT1gaESed8Rf1v",
  "key21": "2x8F9jGdYtABUCGJdGYTNQDufHpYmtZqoMLRk5oo57u44LwAHfz5RGrqgMM48SQy2YEb5k878vJ7JY9zX5G5ftuR",
  "key22": "61vtoR1Y2SptzHrnmzYgW3BcFyHbyCLKE9oNJnbZXh4iWnA6mts51gLiNXMxSzDQ31RPofyo7LJGmzKerFGNg6Z1",
  "key23": "WuqVrAsqktGHsKuqxDDsxbUeBvCF8nqM8NGV1KRNcAybjBHMR4DaM1mhgGGEv2GQfiZ9XNbiQovSBhGyVJfQnPt",
  "key24": "2ZiBRR4QXQyquvVvV8s1jmwn81yGrSpnj7XypSV4ZtK6m86KBzVomq2teqb3S3oMAKWCaFWEvdPxifNx8vJR2puM",
  "key25": "5ECmy1d4viRGPHWthg8CTnd2U5jYaajP5MjCDt1pANMv8hiPN5mZjizA1brePN5HtMetdCM9mZVHyyG3Yz9kK6zx",
  "key26": "2ZQraB6BeufUWbTd2DJgyA2T1jeNbaq8pdUBY8kUkTu9trjuvjqJMtp937UXC9dsBeJVBK89eQCmdnYHuNcoAA3S",
  "key27": "2rtgNnv8KznPWysHQHnWPpis3AvPLtQywGebiGQW3KekN71dX32UEN5GeQZm4XfxhRuni26fQbLjiHdjoZjLgqtF",
  "key28": "4Pz3hCt5HR1Z3T9QHsLdftZ9ecdeRAHtHPbLAC8jSdjq7iJrmtKHjz2jzqyNzJVHENKeA2AKU7kVc2J6rxuFQdpP"
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
