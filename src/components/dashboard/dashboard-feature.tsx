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
    "3BSDZbimcwq8gCAx1sewTN5hhUFu8F86roNK8A8of1W4eQfvuRiAeRW5PSffaf8AQtLQ62NDKCpLVdeZmbziP2Pg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RoUQgwGdwYd1fcaXTTd7zpmmpUKmrRx2ZhyTqcGidJvwzxYJc4WMQhNbvZwKah1LPy53wyFxcEZKhq2bnnhUJbC",
  "key1": "5JjbuNJof8L7GWbvSTLV8gE71FAn4qgLm73EKS34FXPFAd7qDH6HgWdfLV5zLQrRgQ6a5peNL3QwUdc9ynyh1N9S",
  "key2": "2RA1rSu14qHoP5XNk7nrVHwt2VZpZEba81yiGpbmGrjPv7dniS5Sq12w6Gc3AzxAzz6bQ4fKyyJ83YqK9zX8NNnS",
  "key3": "38twUKQFzCKGWL48D9TvRd3bZsopM4tFpzF7FC5Qbe4hXSQngqXHwSWRXimBjUCM3FHcrydLtVt63eCYGK5LaGUp",
  "key4": "58QpUC9LeVStAdcbGs4LqoJrn3woMRybWmVSBXsY4dZSJRJ6UWGzJQN5nxAVdh26eYdRt9dmAFWqA2VQD4SixtUT",
  "key5": "2QsazB44vVjvn3yJnHUPt38iZ7wFjXRMq2BwWtC89M6bUN3SFdcYB833mTbHhzdYXkLmr1DVTAU8R7a5sFDJiLv9",
  "key6": "ou75mmMk8Xx2MSmwJ3c8GEqL7X3eXY9xA71fnz3TafXDZrKSmDNV83fNYkHzUCyMFHURz8zmhRXcKe5DUUJcd9q",
  "key7": "4xDsZYwDigVEmenwH9JndCGSkRQH1HgDjXwyc9c4xQA5RxENox4bbpRwcFgaApTSFNhzJxuowKnSkoiu1XvGyv5g",
  "key8": "2b6dzAZM8BR7FVqBRdysj2YMVsrViho7anbPEBZ8gdpmg2iTx5gFvm9KDGe3Tkbzfug1HvkQcQW4Da6F23Cn7paL",
  "key9": "3sKR3CEV6azDrqDrk8BvtynD4poJQHwGuAwBSr4itS7h5Z3zbJm3Jamf8Qxj1wshmsb7JCdumtnU5gJXkDGmS9d2",
  "key10": "2eTc15iMLzAkbztL76XvR6khjx16yrhDSTedBDsQg5UENQcVn2xAxT6XopCCh8ZRayfD5V2qQWGEBpXJjpyXn74r",
  "key11": "xmz5TvcULPk3i65uyBkmMDxLu2GitsMqdNQ2yjnhfEstcGqVdme67kN8f815ksEsYL1jLiNgCueK4CLB585KkQY",
  "key12": "RwfKPah5DRXU5HRvfU4pSMp996UXREb547fbmss8C7CnLnE5rDzDu4smVcRqDcMf16HHTMDHds3m2WeBpEEoPUf",
  "key13": "5XZyN1fJpkkCqHTYvndp196bgoC5MAVjf6JNm8cijbEfb5bAzPm1yt5XTk7sJrAkHcgvRFTdNR98P6FzCFhBtcqj",
  "key14": "4uDBj2XSc6w2CkrghBrmPHqFXbY169ZLsQyjnVkyfbsK1BEFcfFbnxVuiGgSWxeuEB5Sz78mgyvUBQ1YpCfQgzN3",
  "key15": "5vu8PE4w59D9bzkU8rzCyVwsKLMC3h8kirKkwUgZUuCEKYFQ56ppKWhmiXCCus844gpwUKEWHyNE7SguMgt3bCcb",
  "key16": "T2129mBTf7Kb3MHFtdydD1CERtphXrfQLnFZB6rPc1GZ1uNiY9qohpYzjBxov4j25sGHDPQ8t9LBvq95e6iZPZ3",
  "key17": "hd9RLPGJA2mS2eFifFktNQw35Cue1wdfFWSzUq4LRbUekqcHEHTQBsS8z7C8H9jWEu6DRU8MokGjoFXYrWQe3cG",
  "key18": "WNgMbCjvz9fDCVSxGbnG2CQ8eMw52ZJa8bjHCkXnLq2yDnx4rHJhgrmdJoj63cyTgzFGSX5d8aKn9BoYcT6qNBd",
  "key19": "3pzu7Q3j2ceRqkJc5DwdTuCrujh6atjdocBMkz5ugsiFkKNQ4uGVzcCh2GL1KskNZNKgugN9bXHniQkCvuyMEjdj",
  "key20": "3FjtqtgcXFSpvYjwC8Ee9jiY9DbzKs3QX3WLruUo5A5yNyT6GbtRMtR2ZpCtWKmbo7MVpZKXQy718G27DxLQw6ri",
  "key21": "4S6Anp9xacTQfCe7QREGvhkDPeHSBkKhzJYnAQE21819zeZWyX1pFcuoAXfd8C5h5Y6fyhpyMBDcby6P1q69fZLJ",
  "key22": "R6tpD7TzMVn6nDqfrUkqMrw5Jv22fEdNBoRhCK4Zq4ARZ7WuPGdQKnuKDLHeLjhTXQAvxUameUNePjFcz1SBkAP",
  "key23": "5txXbiBYVEGuC7JcPk8wxDgxpbNnLtxJHfMNSLqNqg8DF2665MCkYPtejFdRVGrBXXatvM2wokwc6B5FS7L8FgPS",
  "key24": "ekXKrocyXZ9nBGkp91fKGWUrhJsgjFrx5os8Yje1tsQGbfsZYaKK8mCRkatyTuMy9ZgHnwWHBrKAY1QP7g6qFq5",
  "key25": "3AuVa5FanUyZPjtj3Goj9Wxj9dTcJxSbFxUz9h4KPuPETTMe9YGrri9WsmeTov53sCE54NSyAUEErKRyHY3H7c7x",
  "key26": "4MU567Kej5p1i4Xig1i8eqNpWgVzM9vFAiEXfDRDT4Tug3exQyFncAqWVJMDSfYxqYUA4zmeSZwrr3z4uNpnRYeN",
  "key27": "4cmjZADHtqFwvky3xdewzoKgUa6gegkEmxWSsSzA3CcXm7uDotRvapFmkLEThMGnFUxxrYPwAwVV9igvchm9KZQB",
  "key28": "4z5yLCRLPok5TyQBaSM9NwJSBBZkPEDnS7ubVCjRshidMfs5aoH74pwUX5SBxBnoYn4iSBuW3s2CiJg5LLJemE8B"
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
