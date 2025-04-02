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
    "5Zuvw9cg2uNqCEoCHCrsop7d2BxPu7T1BHF39QpsTo3BqZYHmvDFziA3wufaU8Yug1AP9Z7AUYCmtPmL8jZyRSFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TNurjFpydrLV1Zuhku6inVweEDZ47hiGLv9uoYjEejGfQRVisSgJ3BZQ5yz5h3Ukj588CLsM3LhwFvbqeAMXf2f",
  "key1": "2E6pC9bjutPz5mxpaxKWkAsezgSHHDGhpvfCGohoT5QNhQaZzd3eWQzWbGX5SKQWmCCdjUmb3JnaczaKh8uFxcj2",
  "key2": "2G48V7qK7UKQSX7uSnhyWGwb8st3f5iCQrGWmdhZhpRNSEVBjiUBaujUnCFnuArGsGGjmTmgwVqBuXgVV8CqWiWe",
  "key3": "Z8Bhemcvdc8h1ajUtAQNsotnR36JrTX1bz46muSaiadUyMrrKZkGN8kHPdNtaheN22aGdP9w9xy59nVNDpiF3ry",
  "key4": "3NUAGyCxDPLB7c7dTRJwFVaboUHnLjA28MuJWQnzUpDZ2FUV885NvbKAxWnb47djmyC14nJCNg4Rs7nfCyLG5VCZ",
  "key5": "41fqFW8aCDN1LSb2rMDRN4MGUBWBgd5Y1fKMAwNPK6sMy2RvJcpjQWvUYJdCfg8ix3M3HpF871CFsiFFbCsdPkWB",
  "key6": "3Y4zWew3iG3ysjzL9E6WCQ1YYGtmizYLzDdDeKpyVe2hymQWfjR4jEnsepRrb6WTfkJ165KLwiYYTDYWAzXrQZ5V",
  "key7": "4XxK5XyapHqatooa3jSE1HR8kYX13fqxBeFf3Y9DiTa65RLAxQXsfNNeM8eCHRt6ToA8weoL862fp93ZbKychkog",
  "key8": "63hTVyKG7NDdxrWbWuBWNnVXM7NLYVLWQQoDCBJUJYkvmC9EQD8dHroejwsoDwxbnEAGRgqRoqihB9PsM1qHoaEx",
  "key9": "2jNDZnq5ud6JDgSJhg1mTd2bcLtkZnLE5fAvNhGmKLgFyn5MjJGSJ8T5234CkzHe5PhgnHRvywFNB3XwNP6DpWKB",
  "key10": "5YpXJS9ZK8m5wrvnFL36Q7aUDfH5f37XtCweSG9dX2EmyGAwRmv2gCprhykTaLg5xDRP4PZEPJ3MBuJnPKc1dfiD",
  "key11": "4kKK3xsqhL5csJsthtvTNd6WWWy4nnyFLrQQs8n3VzANqn72QVqKeesXmj8gPTFGWsYBcBKEPT3se4jkWkXNUMMX",
  "key12": "4sfG667e8SkmvbxMr4S2nD7M9mFk6Ue27S6CL1iYcPJ4HYFpK1pHfBhDYFAh62rhyRMjb7LkmeFPPTE5AxnZ5jRt",
  "key13": "gd3XUBn515LL7hk2qw4fphSbcySehteUfaGwvg3HLS2ZaMW1bvvKWgpDJs5GvUL6oEGd7RrtQFCtLMZmzGqEoLd",
  "key14": "TaenAd3NLQ4ZjjaRG7VtaKgb5tNLAoZy4KT5bYEtSRYLyvvumwrjyfdHKYJNgLW9RAU2Ag5BmXvsJvdH2GaAv7u",
  "key15": "2MkuexUZvpToFCM97XsErdaSTwKtidtyvKYXQyGCihxe2B88WgQArV5HAsBXE3mvcuYLxorv2Yg2zudsJY4bYiU6",
  "key16": "Rb5BRAKB2627haQkZ8HaitXQ7cEx4CcifepEmreDnwUpBsjPWmkWr7m4CbHn3MyF4S2wm5ca7arycxMc48MyoCz",
  "key17": "aPiEmQUxDm766odCXAGqPsxsnYruxyVSseQn54L7s5NHT5Ln89x6SkDXz8VzNnD4L52boNvHUkQfVg3GGxXywcb",
  "key18": "2eGPt6LVrzbt9XCnQoYv347wwSkKwjy5z35wR6mW7TMr9jSYsfAoidVsGACPHbYhXPzGHiQKJ4EN5PgNvc1NghmL",
  "key19": "4zspsMQr4SQs4zh9ue7ng3ZFc5YRJrSNe4xxVWoCrDAMYbUHSpvDkmxdjvxPDUFV8xCJF1vw7J6Qqi6sNWaoNsnt",
  "key20": "ku7Ae2AZD2BQonmir1rCfTsHeb8iJ9S5HE1dgqXfWNHRWaToKyd1qv3cgmgzc77kNP7FkadfG4azSUJEBTcKLKx",
  "key21": "4YbDbUWa9en4xMrFwM9zWq4fnCpAKZcY4VAp1prSumupELKrUvExXxjtNMwTCvBbpm4wKkARaXqf9xqcNtoeyo41",
  "key22": "mQmr3WjxNm8dSsvYyztR95sVwgA9WLaBpEqiHTMVErZ3nbJh46b8P6EiKyvMnQmnjNyGy1WDFtN5HuVbTgushtN",
  "key23": "5UmMx5LivHZYfjgMjbxSLGiNSVWhPkNveNBDWhZnAveL2v9BneDjtgw1wpPCmYqSPGutXrwivRDQyxeuH4RZmDWy",
  "key24": "28bbKqaqNQk28AFugdkQKi6WBhi9NhnpLADnN5Y4BPuxbbArp1AosnQvvemMguaLczbepTd653XKpsawK68s3wa7"
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
