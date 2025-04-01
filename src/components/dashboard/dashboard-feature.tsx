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
    "5vpKp136gpBKaQFmafr6Fdg3VmrS6dgkrioSQmiNTAo6k5QYm4cpEYoY1hsGqFzkUtuquhZTS3GfChJcERFXMpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qtbz8k3eozmJ9VQVEEDyzkCjXvTTpxFHL7pLKi34fNMRgrnonVUBneHnHqxoxhEx914qXpJrdkZD6ru2iPpgK2D",
  "key1": "jNSsELHgfZtRCUXrjNvszPJPF2V1GGW8o4NjpGBH6nvQU66v8U46kfLoBxNfZpB4V1qWwtK6z3eKLueFtaHeEF6",
  "key2": "5774gPC2LfVh2uz6EpsrWShSv1RjW6Frn4B81ianujXcp14gaKRh5kTehn6tinjhvYpExmM5UYn1AFCry5byP2Hu",
  "key3": "2Hb2z6WCFBfB7XRxaznT1PHc8HZ1bpsBUQmEMc1S96EtBvH3mgLxgyBHMYW1U4Yv3b7TmpdzQfwEKxFfWMrVtgcm",
  "key4": "5EKW3TwGLKAnmw5vZJm7MHWC7xEwnhHFEtgBLNtCUMxVLCRTxqrMAPkVQR8iXY4D88sj8r9DL3yt4FbjXV7N3Q25",
  "key5": "4frGVpR4wpCBstnrejGx5SEwYMYWD6x6zY2rBerhE51UzFZt5Bp9V17PaPU1XdWPVriLoXtP5Sd5zusjUESMN8qy",
  "key6": "5VP45xq8vRjqXW2BQDJhBBZUmKuEAC5v79fhqSUEsLBaEjDXk9LbJhGWbi2FHJHcC1DCRcYCuWStjzgRAwgwGtWs",
  "key7": "588tzqn8wZyyFetpRTA6dEzDLCY6wPXzeyG4AW8QzMp4Zbezpy3MFzpth1Y6exX6pRPruvMi7Qk3rAwxvLeDvVES",
  "key8": "ovRFS5ErFMivApTGJokQbt517rrkHZLMjASX6gz55vwFGzPgQszqjJo9aXp2qYtvhVuapg6vQrHK7dfT9sm4Zhw",
  "key9": "5mgHYa7MxKFfYSCct8DmVd9uJewdibk6SBvXYx28p2oLtVd7ydczRqx1GBruxcRqtmDgtk9EEJGyuQejMCqTqVwq",
  "key10": "33ZSd7gGk1yPLiWD5d7nA42xAx8Fh6t6QpKmLBAdX8zKhvG2vvyKdchzYjX9gUtSy6sk85kTyytDKLioEUW7Bfnn",
  "key11": "37uR6m8Hi5AqXourvdejefxMrtXBQntbcYWWyM8AchTfRF8Wry3bk36XXzsEyCU5KpiQckQVjmSNYGLUne69nrU9",
  "key12": "3Enc4wobRrz2vyYPJhX4k76XMjTtcURtECSbLrZ6kDYvHPrBkobuq6ZJJn1uugAJ21haNYoFTSSxXgNAFFHscaSr",
  "key13": "3NNMg8fnTMUrGKRtGe16BEzMvXA1sesRUrw7UAcqs8hezo6teyr1sBLMjsjdMBPXKVzdy5DthrUTqYiVPAVs3Pxa",
  "key14": "4TENfDYpYJEkJrcgLdwifBmnZA6VEuFinf3F7xDsNLnbCLymRYGtKCfg5FPQAuFZpAZBzN3dzQeUaYdxrgYQvzkW",
  "key15": "3sfi52tnJBmGn8sAcsSVjpXTf6ShxDz24kr9R3D21qLT6DkGpp6EWL4fvPTQz56jPKP2dDNk7aC4wh2QcMNkTVLH",
  "key16": "LaqEQTQwQcwGLyE8BmMtMG3BAFrSw6bw3LhXkPK7PE1WqozaH22EgQzKQJV3X6uBpj2xJnNBnVP63dZ6vHwypFE",
  "key17": "3eLrjJkYZdEmq9oggt4Qnw9VCoDKteFGsgLgSNf8dbP3P9FWCuMo11hz2wzgjrEHSnvpgtZUhoiD2f359pzgy74f",
  "key18": "3FMdet4wU7tpnbHqKe1jZqb3ELn21Ymnv7SfQs1wGuNEeiALh5o3qXGLo91zuAea21aFcB4fqM2Nptz2DkcJRM5Z",
  "key19": "4J9cCrcVc9uw1WMXtj3Nt8vDCMKiLWxKxg2K7XyUpz21N4KyPg5MSrXTbfYjwqphsR25cuX1KBCDCugM9dPpD71x",
  "key20": "38Zs9enxxJDbAKxpLU6s52S5NrDfqAVhx9xyHWei8KWvjZAnZ4tGWmyDvCgsFBNJfmwJkdi1h1Y6VSDdLFG3BA9K",
  "key21": "5u4tAD8NzoV7QKJv1QqqfHAW9i1ksSmcTorpCj26iwoYcn1MiT2Y7vekqtzKwVzcHdUFB7n8CqmNYRipz3NpiAHj",
  "key22": "4n4ir3E5qGwmfcY4fRhhF8x2CisbJhsH637Rgs5Q6VLumjF9byX4TUTUZVQdoJcYQnpdifGw3gWNjLm9MESri79j",
  "key23": "41Dn1ofjZA36sj1bvz1nSYyvMGGbEsyHpT66ch8pHR7BwfGFsf5SfrnTjSTcGStCYthjdrW8w6SvVckeLnTETA7M",
  "key24": "BtVh5uk4MWmTvbjcYSNp5DUrXo3xzjSVsuMoqNN11LXYCh7SogXMZK7EBWEpaXoKdLLq3xi4bXx5zwizngcWfNA",
  "key25": "3K9DVxch2SCycBfRUSEYMF24oCrCZLBpmdjR7S9EQ9c386mVqHhaehPR27xijLSS2KoD9LhnzDuCXDsYDxHtYST9",
  "key26": "uRY58rARqPT1c3BuyPdFSvaMNswfLFkUsUybyRFeeP5Mw52bxREedKxfRUL5npaL5Asu2JFQyhETZf1MiyTQDx1",
  "key27": "2nt1QjUHAGytGD2Eou2xJJinn5FndkX4SbAwctK2poTpWmC5guEyJeze3ZCWsCri9WsFGR7qou4ywNKz4FBE6nBd",
  "key28": "2BJmsgJdmSLEvJStxUZLLfoSbUfU6rQ2T8YbTQcNqhN3Z1smEuPARVo4BKQEhEAvcAVB1vAKHMJoyjNyThWTD2KG",
  "key29": "3JsUjp2ERMuisD3Ai5iDLZeWH5fmi5kiMiGgUsxCNKz6ELSweb4o2jhAzPrjuu9BFvt9ujFhvVejXk1Gdak3J4dt",
  "key30": "2LQK3CxKJwGXq26euWL64u7Vmygo1DBkDC6pcRHTjpZERW22yHvScbpG8W5GRYZMVobFEpV4tRGPUfD1W1qVduLL",
  "key31": "GMaoJzcXivEHMfq3uWWHrNXwbbS8x3fhT59ESeW4BVXJrJgW8gmpnUZA3SPtGTJi6uRZqa7UwTVA3xRLnhZrvrj",
  "key32": "3aUbXmqpHwpe7h96TSJs1fjy4hqACBMJK43dXzn7gbJTFSEfwWt9WQqcJhfGpesnYVwicLbrr95TPkqyoQXYE2Ym",
  "key33": "R6JAnivHMijGSFYAbEWgKFjCPrR1FA2LZwksHbpvwzKNB8GAuJVE77X2EwKrSD6PqaVh5p2bLKykND9f9dDDtH7",
  "key34": "4noMHSvpWvteX5NLZ5SXv2sGEE42uc9ZNKzPFmM6WjT271FDKmMch3VJhoxwpFvEjRdJuDWS9GFGXFzZzgJ5Y5Fg",
  "key35": "2R7orCtufw6pYCN7xRazB4BVdp8AxGzdSHQuAyMXyuHPA6tZPkrRYtPiq6wd2rRafjFmXPqggunhUZtXVWzzcjmM",
  "key36": "2tjsbr7YDeNhsT9cKtLNonxguzVaVnAM8cQScmwtbUYCsxpVTDDuztkrSDDR4iFHevgswevX6guKEqCVja4tN18X",
  "key37": "5JXMuuKAtqjbD3k8Db779PnrRK4e68ZZo9tBL8MyaYXi3yqrdGP9EDMfBtPtwLWKrTudjqUPBnk48fQ5QF1D21Wu",
  "key38": "tadEcAjHr2Stg5DWyQaRX3eSG3X1CquR3J5kxZ56bNMnhS5BuAU3sgcwmph9wfUwynYuQv1e868xF6SG7FbnNAF",
  "key39": "4Bq8NkVa9VU3Dq3zbhU7yQJD4rY7KK9KFma3Gfb7yDjGqoiWA1sDs3iesYmZcjVfBiXZerHPWbiq4iG9d2gRmVTX",
  "key40": "3ekZuYR5SRs59fzdfCcSCHd9M8JwHL6qqKhdJmwuuCqTx8eA2b7GJYEHf8rso4SA3tXPMHbzNJrk83dvpckx6sh5"
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
