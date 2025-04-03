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
    "2FUKowd5Eb5jgPmQFV8qgJM3HGb4SDKT7L2dEnY6edRDdCZBK6kx65WQeEQ8uvJPoGgiyD5fzTWULyTGEcZYhJQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gk6NCVb3Hvio8sRcHRHQvZnFkpLaeZq9gv9TP1z9cCrV6nrfraVYwHzxrJWC9bYasjxBT8Lhdk3eLjifKvgyJVq",
  "key1": "37THGQ8HWQg5hC12G9VAj5poz5HzZ58SVXZLu9fn632JjFc1h8rwcKQgWgwA2gWh1hpB9585R6WwR6bBTVNjREG2",
  "key2": "7f4wZaCg2SvNL1nzqovv4VM66bhowf8knpoWWpDhGMiVZ9djFEPpfmWkLHCUEAWGXVWRBccw53gNuFEt1rmsyt8",
  "key3": "oY2gBwtfRw2aebztBWH4PEEwFAMPKi63vxycKLQ3PNpwfyCtxuJX71rWxmQudq4ZYnaeSQxih8CRodHxitzPPGE",
  "key4": "4nHUeQALMJiXrv7R1Kc71QcTYfSoWdSBq4TEAFeiSrxJuSvRumyivjnMuHEoS8EqTVQT2Y9RHoFaJQD2kodBpGrx",
  "key5": "2PL38U7zhd4E972U6J5gUcMcX2uHYSi6U5LAckSVPpyh6i6G4aDKpdDV6aA5Py5udjyt3fhde4nE6mk7YaUFcbfn",
  "key6": "qWLbvu8PaGoYPZsbuU4U2mhSnr7TintpndGfCKhmcnZWZjLyq5MW4EaSrCGzQiSKRUDukE2aakYpgSXaXQfovXR",
  "key7": "2Yao2Ki4bReZGHeyESwCuWfCjC5Ha7zY23wzzHJfG5D7mttNQ2yx1ZmJwciHxvV8rLjDfca739VL8vpWCekMhiSw",
  "key8": "5E9DXekTq5ZqrqAEp9iGQXy2CUpRe1c8fuKAP9R3MzSCw5kAdwa23h3pZnfDDYNdigMdwzANTe4e5eYqjvX2MuV1",
  "key9": "2xfk9PDQ6NCv14fTnndWYG9PKMkk2PkKcWdR1AdJrSy34Hwo3pDJQyA5SuudQYRsMKnKHpzAxMA56kjrGrWW3Ddz",
  "key10": "25hMKdRpE7Lu9ahY4Zoi2uNbrr2sykwb9s6VDMZQMV5KHcRGk8SbzBvJhJXLsmLNdV5681EnRCFMbLwvVsddyGzQ",
  "key11": "5bQTYEMiznsr1RgdG588tx1fcn3j8R84xPxWDbkUESERwk1zyuk6hehq3PiNqz2hkdM9E8yaJwoZeALTGL33Xebb",
  "key12": "4BeBA4Bz2Zmrf6sU24h4arBy2kNqy5xzG8jZMU8LBJbRNTHREsT2V7s4NV1EU6cEGqkHDbDbfTTfvmFC95iyGry",
  "key13": "4DaJJiTdKgfd9UMgusobj8wdRQN8Cp4M4w4XjXk7RqiaeNFwqMkyfNwhEqHuLDZjCGDHjeYp1AZnVVeUSMrGqUoM",
  "key14": "4rFCzBDgTqxwN4iZyHAwUd4d6ANcqnTPuXQic9bRJuzWoLeUd4HtXgoYeuTdYMNTkHEdZr7fi9FezBdEQQUmtYvX",
  "key15": "36FAePxRSQXuYLe7qorJxTLfcewFsCbFm4YsfuSVQFwC25Zud1uVPjvUsr4UDpUJdtVhsFuKjq551GDow5BBp1TJ",
  "key16": "3eJK91PuBnqvJmuBQuifYUVVEUVbJ4jAgZTJsXz4NhrFCNKYnzdtGCVTWAQsWAEagwYpndE3pMqZQWGaQFnDF5fP",
  "key17": "G8qQPqYtuaRorNdBAhE9pZJtFNReMkhDdvddTWhei9f8s5XyQXxTwufez6bov1Ho2Wb6KzyfdwXmzfo6PCTRT7P",
  "key18": "PMEFKzSf54EawfUgQbHafS6WxgCnCLwsaZEVZpuGqW9oaExVgYhZ6bJqQVJEYh1pTPmYHXEnzurNtwhnD5gtQkZ",
  "key19": "3CCs9rNjwK9tx1nxKuTXJx6gVzP6ADDCdkboCh365dephCf4xvLGDfVQPUgqqKPyWij9cw8HyzAoJMZKPJ71Pnsr",
  "key20": "3VLiuc7KxPejM8SiLNjKr3y3k1c29DmxMeyeRBpSSgxvfKn8j1coM9ttqMzohMav3o7bBkYYL7T7DwBbTHBvqWi2",
  "key21": "qs8SuHL4kFbRxWu3uLsboAVLLRF2yEJgP8CJutmqU8BQzEcrqMBiM9HWmPoAo2ky5s4hy6BQ85zrfCTs6Ji473h",
  "key22": "7YGGgnYRnQo8Dk6jDvRgggqkJ2nXHyQvWYukjgstcSyuSFw6J7v9QoeXibzEVfUPDXZYzxivXkxcYTp4mwPxRFd",
  "key23": "2WVJT1bRnPUnKNbCDc9cF5YPc2MJCFtM2KcTNm1Ap6zjuxPWn53k2MyQSSLyXW2WeuA7CbR9pdU5RjyMVFLAn4R2",
  "key24": "5CD5Q6rtfFC6UnAuchrTcfB1xFXRTBM28wFP9KTwER8CE1PGgjFzyyK1WZuuw2Ki5uNXye27r5cWGf51YceSKQ4",
  "key25": "5og3R3XFusdgQB92CsEbiHCyEotZAsCjrppXqmuY7vzGGjuxXNQg7yVVQraqRk83jP2vX9bd9vtuZXr6TaUo7Cus",
  "key26": "3yBHiWNcEUYR9j2pbSagFENyn1CjskoMwKBUViKrTrWBF6XLRPvzrVQEW5Et7wy8kTEtXyX5eYDyP816CctnY47A",
  "key27": "4N738PDc1exy3tNdk2WcfPo93rYsuLGh8Lgb2WsgacGNdkGNFiu9U6Mv7FgzyB6WB9CupYH1onD3DDxLSkYnyQbx",
  "key28": "3kkVRiKhTzEV8SrfydHjj95pbCQWoon2YuaMHxFzZWDhLyjUihXgp6eL3yxG2XtSSGVeKr1q9t5DoqxvEXfyXsSr",
  "key29": "36SAbjcKBxZyeLMUY3dYPQj4ENJQrZPCYoD2nYYZwNo4bkpLcDLwrK411k2snX2P27vqfeNhS5nhDEHgTs4MF3fz",
  "key30": "edMQKS7cxRP3FvMWcDayS8gMvaSJ3saLin6H11WneV3Xq2Y8k7mhVP5ZJ73EP88vtPK3vXRMniAFggXwZ5Qf7Z3",
  "key31": "531VoVEhv1cTjZawAzZ62TVCqBHBygbAymwk57cPMWok146q8nVoew6zb6ZSm2SLmjfZ8F5ckXBFhYnTszY2mkCu",
  "key32": "5KNzhtKCSdgTLVu8CBuZPAx5cApPKHCcf8V7JsWjQywKySyFXmnV3oxqmXJKyMA7EtnuR6Mwa1NVYc5AnRgwgBAW",
  "key33": "KS2naw7mao9vy2sTebBoj6eFRLwHwvjepuRrADpEKPJvwRXX125Btn1QaS9kPGf3U4hHE19KSNDXpirmmPBR47P",
  "key34": "2Apbo7EgAAfDkiqfyrHTmdVZv5EVS6XBZcE9qDTE6xUzgEvDgFoSKeXwPE9mQG9xFq2XnmZwPedhzTqsAk9MGC5d"
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
