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
    "jQaZ4R5x1XcjkGAtDACeHutBD2qeafE8BLZJqRUp88fF35MT4Zt14BunpXjFgvyS4FkRboF7NT2HAus5hM2GNgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k7cPZwq95UqqssHZUGDtW5hQbAY1GmVXRJwpnmueL1WXtBhhcg1afTz6yhEwjWNecehN36kYwJe4FhAanSrKYYi",
  "key1": "4JDkL5Sf7cQSYP6mPR34wf5vKDe7xj8HhGVcmn2D4gNU1w85wwv3KQwdL1xCpdHU2isSRFJfmcPa5SEfePpwbqGn",
  "key2": "AD6WpTUTM39ZFRE8zdMWEzcWXtH36R5KyL6ZxZkFEYQzqgvc1gjUHQeT5fhgtNRHf56gSyvsfBJVhyzPMJchAX5",
  "key3": "LWtEQd9n47dJT1PbYbDkNt4huiM7Mar3gwzcRm21yrDRUAP8SGgJMjMfw6rtqAtLiBjF5rG116B46F2MFdudZMZ",
  "key4": "398KkZ933UB9EKNNk3UefFLRsoJvmHgjrGzCXcvNT2SSLASEUuz1FRrkV32WgUZkpHL7EJThPEiiMEkdfiLk8XR9",
  "key5": "2ZP8ftiHxWHazYz5ATHMeztwKpujbUpfgWWy78sMzPGnCHRA2uo4CsgZSp86CxwNvbrjujvKmvGEaKbQUx5LT36k",
  "key6": "2Vi5VnFcdcnmq3ZddRfnNdTtJXbh1C7AQb6MWvzzdhDtSqzoG7qd9VTtRjvnQ3BnWEmgER1LnvGFN1a1eGVwHUJ2",
  "key7": "5wvcjiGK8wD4rF4yY4qo5FtLJKk61u5cDDnqq9GkDRK4pvzuBZCVUpH9EqzUdKh6rdUNDditXnfPAU4hirNTVr9t",
  "key8": "4EdF7SsKpuATXg4MpEyzcZK6TLabtDVtnzRs7CiGNhvjTN6fFGF5kNAjDUJe2Qd8ZhShV2R4aB8oZ2esYMN5XSCv",
  "key9": "4dUfvY4aUfV3Wa88z1hapPqN5oo8iCxJg7dxN6KRP8yvp9qQzo7BtrC4xwQvG8ZPQd49viY7tUwcEkwmyukV5uWw",
  "key10": "4Z4EyfhPtsHX5uHwSFE7DqvhsARzZPEuGGFCnKYPbeBCaqkDqXwdZ9eJC6aiZtYyWA9bhWo2NWLjVv5QGXjerVdU",
  "key11": "65GrAY7g27SpqGrXogZ5yakYhFprs7hyZx6j3t7g8YfFMafcSsCSn1g8sXC5ZkSZhvqFUAh8ZKuqv9buFFhF2W7K",
  "key12": "2EieKGHSnNbo2GDWKT2X8Ry1DatcD8aHQ1vhAFokZyXGxM9RKSHPvoHsYRJCa7YQy7KQkTHDsyyHYJuiZN6Uuvcj",
  "key13": "3ePUqsidKea7W8mahNowLGFZXEq8vNzAYahZg88fq89DW22G1FxF2QwUwtSnLBdiu9kFDgNwK4hCu6BbU3LutgAp",
  "key14": "5ibRw5c4aBif1uayERDCaosG6bKA9qA3oUAcQU6Ajh8TNhMSJLQhxuSD5tojNXYgmpFLv1Dem3oDiyph7khAeyXu",
  "key15": "2tjGn77BSLCHyPSnQopJoVDzhVE59qE87YXKiVPdcXbpgLWAZjBVcwTwiJ4fcjSXQfZsj2ay75Z9LBJbtw25JFEK",
  "key16": "4N5FaGnbVnmJXYSYhWFpTLsC5DpVcT5xhynK3QbwSBhhXnFEJG45HkPD9JDxPwTVfn9R4mpooiue47EFjo7FoWRd",
  "key17": "28VExdQPamh6FTTEmHrwrVPxXx3UTVrxGNGJDAvqshit7wMFWXRrfYY9zUN8Sj2V8jHhVy1LTAiVuCk29D9kdsDx",
  "key18": "3pWhSvznADBZG56beV9CpJzBnWBJeTM6j1Cmx2E6wqx1T21b5WMG2eCE4RQf4C4vPydJsCaexu75QTkcJmhkrxDf",
  "key19": "4hWABMaYWVsWYjz2HUdJSxokodN2jb7LixoXvAAzzuv9V2t3JxFwqsccFxm5mnKpXTmcrrSQjVeHpCrpvHJgX6NR",
  "key20": "5ooTqGF3VCy1TM27kfQUpD6NwPbmbP1o94GAtnS9jzZFhiJHoCmKgCqc8mdK46Ke8BspcbGhoSjxq5Xe1KR7DSGg",
  "key21": "2zS33ZRyad7BTiDiFHtkW6pM2b9hGcpoZ7PDFVgHXiqHH41nRC3tGAkPhaq93LJnPe1XPLrhrhnTa38uoycKY5Ab",
  "key22": "34rXF7Xnq9u6qJgDx2iJhhLcXM4xKknGbJ136U39ahjWr9b11pFDr9yc5x4ovMSUgVByGtpyrdCXDSMneycNy9DQ",
  "key23": "3dowF2oa8rNzmmsZ3KM2BejTjc1qHXqR7AjoFHPSmGbTGVRo4r9Npjr5TNNJGktSW9VyjVZdueEVPHvc8WtFkZLd",
  "key24": "43PKM1VbhJgh35F5tgYsy2LBdN3JrLPs92TefJnbwojBrK8DZSKtZVYm4BUbJGJoG1GoC9oGsD46DKwFPKJYxSYg",
  "key25": "fvs9i6W3qPxsUt6YLENe22CRSNuEKWnDBxUS8JNRg2c8aNNd38Bgy9y4JxUwkyR7eKQPgLQ4XrMXBgNrmjDUjPc"
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
