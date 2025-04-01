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
    "4CFWBV6uGmXnyB7br1BykNmmPMGNmkJ1CidDqEQm2Q8AaHCJV7m223cwz9Hxosy14h1shmWYqBmisMEd5te7hsBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jYDzbcQYbnK8rPZSZBsCdpJTT2eMXo8jsn71hFuvYD755j245LgzHhSW6sWxtfcM17sMmmJz8m1zjpqUE1NynQS",
  "key1": "26v1z3hofk99qgrbthoWfrjW4mjsYPBBUhyFck7rhqjEqL49ZquCR98ytS12x6bFweXUaYRMVjMnCZyzVza7mmvG",
  "key2": "55mC5m7UTfy1Wh8xotjzzzzUivmNkdBsETgK7cYmdES3HxHHKfMmRPzZ7zg5s1uLg3TC43W68RaPZ3qZ2H8QfGTt",
  "key3": "2Ryd2ewq3vBqLLJHdDpZQ4fRqwcA3wvF7tZai7cT5Q9Vdt8DFkcHRyimYPpV5TZ3poojBLuCkrhKdXCeH6cmmkcb",
  "key4": "5YJ3wmEzBfYF7U1SHGXipz4aRJxATTJRyfXJPPYwtdWJjTVhhis56A8vFoZ75KPrJf1y2qNNGL6svvRuJ1EETZxJ",
  "key5": "fwAC6cmM48JYRc2VfoNxQzHYCUhz4VUqx2xH2tBKu2XaJ4ogt18bK44Y5W9A3ec1RepuZDqwUDKG47RojTJcY1w",
  "key6": "2xbY4qNuDdydVs7FwEPcJs2MT7oxKQVL74gjQNYbuHoA6upN5BPMqh4e8xxTtTQqQwytfzKB3xe1ypCscF9qA3tJ",
  "key7": "3aMYWpR4yS6iJfZkfFW8kwPf6jhTzpwSyePiBkNaPiFRPP2LDEtSoGdHgx9tr4v5j8oL9MEjnwvdufgmddJ1kM2v",
  "key8": "49CufSWGLZqhPQmWpiuEkpg3hzH1Nob6eeEYR6ZLUg3fQ1TK6TUc5vq13Q4HmsvtRPpzNstTMpV41NkHBw8JNgEV",
  "key9": "4UNecv3rhzrDS3XKaRG5biwtP4AZCYQxqTeQtLffmfhYD8u4c2BrfU8sVq4pE7DH9AdoqRR2aiWLnTiidVwjvkLT",
  "key10": "5Ba6HpZZeK8EDg9CnYoZviNWrFhs18jv1m3mr1vDBE8j1PZDdzMR5Z7thB2k16MhgkDRBvLXBytH2921hoXHTAZF",
  "key11": "QHqdgzKmp3J3CXKSwiCqAV6yHBNshCKFznohP3fHnVPWLnjQX7jie9VT9vq3JZZnp5YDBT1ty4c6BzVZW44xMUZ",
  "key12": "5Ef5Nt85TDpHbxdomLtFTM7aLkLM1quiHaWnmgFLRJhXVijGJG3DMkq16VHzDdAXav3mMHrHVrShMEvYy3dF3Rr5",
  "key13": "3P1u3sxWyL48rNEwBUsvefQtY1nKVoUqDfKZLppcjChQDTq4UU7Tn9qQ67GedNsnqPm6nFUz5Nd9Nib4yq1baepe",
  "key14": "2HStCdDvmBemdHQmWFfRMPiiVEDcPgUgb2ypitqXcJ2qq4fcf972LuJ8GLpGExkvvEusndbPDqFJ9f3pRDMnyfBU",
  "key15": "4oxdz5LAdH256je2H5k1sc1p7scCNtMN9KA1bQ4GL4zQBDTvK9ua4sPsJPzvb6Tw5hjUPtCz4DqMrghCA9nitV48",
  "key16": "49tvr8YFEQDU5TsE9Ngd7uGzf1RRGJwJtVXKt8dt2GZq2EnYNv5vHtf6DLfYZJ2DwvKJJYZ73v1WSe4HCKm8P6Ga",
  "key17": "2nDNSbuYvYRmBc8QdTYjBgBFTk3YZepQzF1ry9bMCVpFb4tQrNTuVLMb35axLJaZ9W7TtFsk4qatmoog5rfoPQYA",
  "key18": "3M7rGePQkXHExr2gnqsLy6t3VH8cpmUAcbCDqNHf3cVm7VXRn4KbsGLUqsJ2WmMxjY7ov2M8K6oLEMH7SdoztnKT",
  "key19": "5sCgoJLMVQJ7nvqCSMNSCSGBM424XnnoBSvvYNDEiHLB7P9WM5EJNrKrWvBtwKG14i3eMALQ7oXqKafboQuhvDtg",
  "key20": "5ZdpCQ3Y8UBCX3ThvMCgH1SWL9KpPZSnR8ABUTsP1NSojeDfJRvnpxKCS7kpepN4aPScD4kjQqLpfgDp1LCyXNSi",
  "key21": "6AHvBf4GNATA6vhJGemQhuNXdpzBX9Rb171ZVFuDyrZB62oafykMdhmvghvE1rtarkyzN5L3k2mgcxe5uqXqMd6",
  "key22": "4CA48LE7fKe2DJFytJsLiC19JLSqihzC8kAiV6j1mZa39zH22cfcb5KwcJnD8fP92wjBPLYEWUzcmRrfAizQUjsX",
  "key23": "2dYiPYBiMkJxthz7NiTUFoEGF3RyJe5V3Z9adbNVGUGSZAhtHFvXCpQijJ2hrQentrLBRyeNssV2riepJ3J6Za9n",
  "key24": "2g6BwoUrhcou5oe3xZLno1FdpmTk1oqnBqdShW8P5EKZmszL8e6fXejBXEFBzpowfbiTx2ppDBdoz1oCe5aERiUp",
  "key25": "3fhqBUxYaLiEHmnqRqbYwnBMyXqVyKRCmssxUCGcMzD8QwsYcNCt3AS3A5VQZR4Wk3DtS4iBBxqMwfZjhPhTEnC3",
  "key26": "5NtAdwbDrn2AZqdSdYpBgjuZAYHHMFBJJomfnZevA64iHakdRZzrSF5WTQGh6isYFZbSmqmJwrCdLHckfAWfAyiz",
  "key27": "4ikAgBPFReXJztDcU3Wu2kGqiQbFY1dxoYCwMrkjv4iLvRsHNJ4pWFCQGDoaa5886MXBDgstHcpnbr9nHbcAphVQ",
  "key28": "4EFVdA6VeVHar7gVPBeScp2FtGBWqFgsVBygej4jvb4o6dsDTzNk4bxYSSmcLWyL1b3zJRAW1hDXtLEFFHF2Jtm1"
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
