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
    "654TDXgRMiZev9rckktKkw8dojuYMTwnqsn5YJprLcHhkAdihH7jSs8XLCmocNYSJMMegZWCtVzwJDssopdz4xgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QpsqS6MNkD9xnR1VRAnfZgqBbBQkoR8gW7Fh8LngJx1sLq46bDd7kRKdr4SfxTyVAxtCR9RDfGKMax55uX578iu",
  "key1": "2M431JM2W8Smp6cGCcim84NdDBrXwrkc336S2VuaCmQwqqDo1Y2dGW7ksjFPZXSoNcqd4hB6z47u9Uc1hMsT8Jp8",
  "key2": "26GWGMQepFC1HBQTPFySWJe7tSmSztJbLLdtTN8iwhJhyiQTTJVJYPAWKuQo7CzWN5sRHVYeCpS5GmErvSYtUJh6",
  "key3": "65BMx4bZizcfG2pxLp4vzuxBhpBZ5DDpzK3KnoE1Bxxkquj4pRQ8b2AdMeyeT5J6m5hYDSuUy8C2vNYxRVHjWXTv",
  "key4": "5oCD8KSeHqkMriANdY411bz8m2SPnMUtnDiCJzy7MjtqrsXcNgZuQdTkzG7bxyWVkf58Ft8yaeQVb2myXd3sEgoP",
  "key5": "3c9VR9g14q6xRXZAeWS69hfoD1qBBASmAp97NnBuvx72itHqC6Nm1hVmBDEqaYTBuTQY8KkX2vr1g4yVo8BiJhsw",
  "key6": "4niECrY3HA3zQmg4tae8fLJTs3nHsm57TqzxgTcg5AK3YkhA11pKSHoLAnU82TtMc4TtXrYzFj4NespFnaeBb5p5",
  "key7": "5Su67GUAyzUZA942vBWRt31xYMXtABSS2Ps7smRKcwEurncHajnifWTnyvif8skHnjnKr2n9HQPRnK2kzQXPi1rr",
  "key8": "3vQ2wEQTbVpX86DAxzdnM3iSSA7CjzdEVRZGY7NBZERFTg8Lr7Lm1z8fEkyG7MXNCXG1BV8mm9zddXBr8JsWnS95",
  "key9": "5e4aW1YNo35965kXd2KTUC3RQJEcECTmHjbbgbFmQiwYMtJjNAm1SDTwp8Bg8c6R1xV2mE9Hs2Dt1ArdAPQM2ydx",
  "key10": "2nFjgY9X661P1AvfPXox8SiScZ6y79CnkCNDDBn1BySwDShDCvnUVLRQSAFeMgEY6Q8iK3zZk7Ub9tVhYvpSg7Xw",
  "key11": "5gp4R92P4sMFg5SforAYRE3TsQFGvmM9v9uua8uZ1D8drpiooupTZdZmy7YuhJzXZGT64BwY8Zry8wnK2kp4aE8b",
  "key12": "2knNZVwQY8tuecPJYPVvmVK6Rh3gFucCjYRFtcSCaNJWVpamB55CvCKEbfPtFjyEyHTwFmKcR2GhnAikBvwLRhND",
  "key13": "65knUnqsTzRh3PJZMdqXvpzZtR7RKLQ6hvV9REHqJmY3HLgKgi6oaFBMhqJZFg4o9Ts7qowgxzix4xy4V7B2cwiF",
  "key14": "61bSoMmt83K4ZTiVLSKiRYYuhHZWFPhquAJ1XxUkKmvVJj3NnJJiyB7Jd27UPoVPiyBSQzth2gu8gwZHwVpSYKRb",
  "key15": "2CRfQXAsjT4oNKdgayHuz3MGWFvef7sj2EXJEtWRmcGdDmRmHzDrte9B4nW7TaVNdJns2N6jWitrMrubB3h3KzUg",
  "key16": "56LN2XPAxT2hkGvETSomAidwu9AKKLqGDwABJimZ54iNjqtg8BYcaj8QqBhZ81cNNkphVfbf8Ypt3qyGWp2qof94",
  "key17": "L4t42FngTPz1KCyKwqn4zbzSuRmMYpJhGuCuhR9v9qNth3kYii1Z25gS5XwKF8k8dc5suEJCCTE9xRsng1bT7Ey",
  "key18": "2t5fgvQUb1Ri49gstJDbqKPoH3ZqYJ21cM5mrDnLpG3H58zaaXrEQe7ccn3me5xmbUb2axcjgZ4kVkoDoVdVwWBv",
  "key19": "5UiwCFVtrGUHCUXMrUtiGANYV6MrZo8HdHQo58LrdKHTRRfUfnqFkZwT1BTckVWoYMGvmdjhKcwsRuJFfHrBggUx",
  "key20": "3cERszYRSKhQKsLHyRrYA72CzhTRU188RjgGdXJgjXf27YaEaBnZbGW6tWUzRjPWhWMrRbV3k1X1R7ShfZu3TD9H",
  "key21": "3XAEp7jTszERERacgTEv785foBg5Jov3X48msszVRVGvQtTYYd2PMdgpXzR6BEmxGM5RYTMubE1NGnFPGT9nzxgN",
  "key22": "3ZKQtGHuBhffdrJBguVRFBuj2DcPotKYBwoULbtfan19wuSq58HaukqgJdVVSeTyrM988gmF2ibo7SXi2Wrr6Bn4",
  "key23": "3hpiDJWsjKkBKXTULaEd5NYYEVGeywvm1RAkANLeNzn6uXYWf5QBSb8ipbPjgZANTCu4NLiZN2XCz7EZWZXx1pMc",
  "key24": "5CRcGiJ8FbTtxtU1PNtegvHwBqKWowTp1EP6ZJJkYJwDkAk6dSVkZnU8f7VCwGQNbnxfBkiqfuVcnw67Rr5a7xW7",
  "key25": "27hWZnoyzxeUjw3ZXJUoL4mCjSNFnQTRwwLK2QGhMHWN9vC3mxLTthhgdbecp3XhPcRFnnB8fBVtpTQStieVqHES",
  "key26": "4GyQTU8tq9ptDJjHtTiNJgciBWW1kfuXF72V8rHSvidasiUyeVsBnjXYK1TnRPAQLhBcVbCe62hoCGYi6MUjr5r",
  "key27": "K3FuzJKCkEc5dN41PDUxFP4JzToaAUAfdFaZxQcdt32qbkfjho58mm2ehHEvb78BaYuu324gYNXpvkSSSwa8MHH",
  "key28": "2GHVFo1JLkE7FdYoLYirNDwFVQbwM1c7pUZBkBeBcN6az6psLqq4D2sqE1qdGoJZ9rNVjhnSJPukz34GQPxGnsZg",
  "key29": "3Vvycsb8cWQR7iwLfG995DqPLesmXTQeVDyQdMAycE1CmwY7FFkNeMpfzVaqguSoRtxezqnbysuGivZ3j9kRWNWB",
  "key30": "5fKPffWZ6SHYowHcJkTAkUKhd3MCMRJPoHGd1FP9EDcXHwUj7SMgpcSX2GEqfCoX8EeuhCkH1Bw9BYj7A8ETAwsm",
  "key31": "VRi2U4B547X1241trbWXiqBmjEKCeosWtDuKNaMv7Suqbmprg1F1efNmz68EUNLFyYBik5bcE9QBSEbJLir4tWf",
  "key32": "2YBqGuZ4SVpmVHdvTf3pfkFjcyXX5dpkhiueaaXVQaP5eupGPQaUGSB69bRzJnHRQ6W5hSdSKNurWQ1PTGe2tVSQ",
  "key33": "5bp1NzgZXhcjtUfbHE4Rocq8fTfPrLoXuWaWzLirqAWckFyjciMY8gcxia328TS21rkw1BsicfnwdF56mWEtBTFu",
  "key34": "5bdZhmbCCwG1hpLMZToRjQj9asKJyvTbp7SEtgDVsfpsK6v8eAqAkJEbzFCtUoMcXteqkp2ztmXPcVcnbhbmtzA",
  "key35": "3c5RYQZd32vnfLfM5qB7wbNMP3EvXJyveMpLpifc9LLz3bPZrmcnEpe1FRaKqX1PDS4HDkUb4da7xEgVaTb5r8Ar",
  "key36": "ZJpQmfZbcfPkXgbYPiPLELqs6jyiNgPUyzhx4Hw1XJgQsNmHcSCM6aaVKj6fuZTWME7F4tpfZvtXwmjk162TPLq",
  "key37": "57pgpocHAYpKsaPUVDUDJgqg7xWYpexZz6WgR7AosqJG8LxAyRnzHL4nohx9qDceyvdPGoeHZvF3RoCA781hPCsJ",
  "key38": "Dm63jfXoLwqAt9yzFJrFWS6SD9nZMu1RRz4qQuS5D9XJ4NLU1ybXfnNdxBPvHDDphP9QvWL7Xai3HwBfjdEPW5A",
  "key39": "hSNVSjuFkkv24KXFJ5hmhT2zbctvhtPrFzzxQ2onyYXuAzgb7UjGPTRw6L53vHdcXMo4nAVS3HvsiKT8LTWrK1B",
  "key40": "3j3Va4vW7mDPnp4jMLiVRCJjfSdtQoDaGDHg4BQuuJaX67kcgrtxvBaBwaCgtL5ZWJLhpZeUoV9C2Y7PJkBMhe79"
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
