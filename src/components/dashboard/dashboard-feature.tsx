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
    "421VWPJ35GPybqUbANW4jWCPGvMjaAaDHskcnxoj8kguCKkWqVaCHri8jQPfn6TwWBNQx6jeWBYEj1mX6Zo8j493"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bTVgnjLpWmBhehrACgbCFNAitdMEDKH6jBwdfAyXavRzqfUT9eB9RsbDaFtvCDSdDCeLR4wq2hFVTaH5JAD7gts",
  "key1": "5BNXRi9JFnWbBVzhz3AjMxFztNnXmhjpc4iGx3CLj9txkU9znFmK72aFKPSBErKHveHjVAnyE11iwKGJUchxiW5g",
  "key2": "wcdVkQwBPhkVkvehJM5oseTESYCAyKFdHG2CBaD9Fp8yKSXj4hVukLRQyNMA6JjjTHuH2nnYHgzxBFtAvjaM9VU",
  "key3": "fk86JAD7hssPEy1buAvLTEw3gPNEhQ2Q6e6qnecSCH54a5qfDRY37VLbT3yeysZDt4xZJkVE54khGQ4kxEm1jFQ",
  "key4": "65M2Ge9Xuu2gNYey5t4UJURVkwHiPhXicrQ5kJUEEGawjJGhd5GsVYxeucz8MYKHRxab9XX18fvcsAG7gECJWB8R",
  "key5": "5x9YUeWDrY2uPvyRaNDCJMhfVsSFXKQwcTkc5xfiyNuHvQy1BtbLb3kkRm8utmWXo6YyqKxEgcy5JyG6vZQoUi9V",
  "key6": "4zuewKvC4r3UFrY8Kwz9VJb7ZV3vyU5dKLxMZY8cx6Fxd5CkCxkFntNpkERbqiBg7fZAPWvE7dP2ZEmUMWZ5hg1d",
  "key7": "omEn7RUjaJmXssPhGSgSuEwmm1w5JstM6N4XcTPSSot8K5Hmz7PJyRVpKuvgPJ8W72KqZRumncegQSUhKRodGtA",
  "key8": "3QaUCc5gVkCPynzhkeWzxN3y4WmxaHJ3PqDYuuFcEBVQ48St1ECHdVQKdbJcgZhLZ5USjWX1jftDX9KtrtwmGbwq",
  "key9": "3BiSk3UhoyivqwaM3UgWJGhXf32eGRzTYF1XGsLmenBft3SrcHxMq95ciqfCLZEtVJr5xyTReqiWYr1QDYbVfd7W",
  "key10": "2DEo9hmBmFk6Jtt1UmwZQn5EGvQdgS9F8P59LbzAXr8z3DnhDD2HUatapCmfKvQWwawT8SCipvAnSuxv9QBGJ3bF",
  "key11": "HbPbRZwQKnJ7ze6rpYG94Czhv5Uy4ybYpxwLc1yVkXavQAuNGynJodEATfnzTRpydupzdtJ8bSmeZiSZ3ZsfKQ4",
  "key12": "4GZjceFndRYYZ3CVpLbUyFdJ1Z5yEPq4Xi1qeE9DPKpCzbXmJCJ9NfCr78kkUiEFTPoBN3S7GyF6vLok6chdmEJS",
  "key13": "4qeqF2jaatS8w2JCdXe2TwmndJoyL6rCLWg8iypiZV84KyjUREtneRCff8t5jmcpmf36GcgnjXpsF69QyJcqsj3m",
  "key14": "2gMQyUUdjPeX4mNAWzSmVNLqgM4SDgWFW4kc8C5Pxa5QSBee1Smmd5AWmojCswSdphc7armnE9uatkUhKW3WVw6E",
  "key15": "5bQrUBLdpDaJn3FxAAajQocJGqVAe3x27uH1ooyw1haepokNu7pw2yGMLJnt6DNkEScAoxemcudBCy8m6JwRHyjS",
  "key16": "5WABvSwHf7h6PLsbuUtMLTeGo1QeNtcxcaVAQk7y9pEV2TUq1pY3opvtzXwhENf5WnCUWGnZF4sDEVY6uFwY8vM2",
  "key17": "HqoWX3XynbNLVa6rYWiUTp8r5whGwwPAxnLt5LaCbHV7idRE2hYoJCMy8CnzrBMQLnp1xz7i8bD2Sc7caTgRVy6",
  "key18": "2rubsc18nMdMBFLRFdArszrpS1PzbZMEVdXs1QqXasC1Y3KxqP647NvTCo6k3nMwT1MG6x86bSJXhoP17cgrEd54",
  "key19": "5shT3Nan9a1qWMHZExs54WDk5HMWdFBzTEgZEc5pYFCNq7q6kZkqb2rfWCiM3r3epe4Ytd7CWwrWbtd7pKvHPSQ6",
  "key20": "5tKCk9J16eaR8aFJz6WRJA22fMEuhBM6bm1gH6cdqhhTCWCE9LDcypCxPj1dpq3j2WQxhKWV2Aj5nNB9U72TkuQt",
  "key21": "3wy12pMHZRdEg8HA3G2nNmQPThurnxLdSaRFRrmQ9qqr55Gw3s7tioUBwWEQ8xAgxPNk1HFQXX6jGNugDMjwRBKa",
  "key22": "3FNEpRGaq4bvRVJWina3F9eNg1wvS5BGdJK4zrqnsbRvY2sbsnptdvtN32e9DbNJZP7WZTHrBorHsCmmTkExzmNj",
  "key23": "5xCDvDJbnKb9TfUZxA2EyXMcAvFBzuQJBwbV178Jkczptfw67ciG5jNmC1VazNnp9fai36U6SNk7dwGNyAU4xkgd",
  "key24": "5LmZFrDEEeafKYxwPp2WxuvshCvUfuAmmrGnTgusbRPxdmy8VTuoYWMAsrc1fTqNkQWUuJowpnS4s2uhWFXSGANc",
  "key25": "knwVCUH7VmJs8gz1dGKuUbJcpDN9mWdKbJkd3U7EtmnPejAyLgLHvdkfXtoGteGh4wc6AHLGk47GRPurXeeDb3w",
  "key26": "4G5jxbEjUtuN2qkpzuBdyixhRB9TqgZZZLcXGbrqSjdmo7tMzJa6CfmkhJQbQWpBfbCjkRNdbaBsrikwR8Ka282u",
  "key27": "3HmaTuZxZkSuji5aCa5h8eEY8iNgU9SUEGjLKXvQkj6HPk68xborokxq6pBkiiUM9cvC6gE7TFCSKqFbvQfZmQUP",
  "key28": "3FmVV5bKdZNCNMknNzF9EnjQu9t1AMDAgxkumXRV4Vt5qca1Tm7vzQNCzjDHaYZj9qMUfuAfV1hmuSN8bJS4WDcT",
  "key29": "5RHMLf2bcdrYVF2DbtyGct3uh3bPBNsvABgomMyvRuq6SMq9e5gnpkpxCxmnNCX92n5RiiZfcnDVHY7t3Y12YdTj"
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
