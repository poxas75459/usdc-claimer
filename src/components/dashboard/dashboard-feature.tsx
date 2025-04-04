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
    "gQXfczBPUH3JrsBQKxJfbD7uivpBfJCNTTQ1EFUu9tDfD2jNHoWdb5h25EaH349NCz38DoxVwoLYWdAi4GLFft7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pnoq7z41tUoxb9aAymgoceCRjj8W5Fp19fmsZ8PnfnFi5F5745DPoraiva7s4brLiebtBTjWWLHfzAoSQmufhpd",
  "key1": "pXrNsJhh3uDTg2iz4rdSvoq8DtQsujhAPwBzxWhgKCjdCwGfSqddD36FWkaKRsKSxs28UcLzL2hcMHnPTWwNCkQ",
  "key2": "psHfboMupx544SPQstCC9U6WcmHbKdFwPF3NzEfSxFhFCMV25tr53duejgKtAGstjrrbrPzUbdJhHSozAAe18cc",
  "key3": "4B4GvikfB2P3T3JboeyH1xLc77T8duzWvVBRJtvHc6GiZnHefZFH2AHL76Nfkx6qP9UZV91ghPHhTo6Tv3hbVtT9",
  "key4": "2EMFhc8aF9iWUWQqZWe5fggoDzHdWEQCv96CQWta9bN59WudMihGfLBxNMJBT3BZJuE2eZAjyQS3QpshKWqD1hVA",
  "key5": "3F3DkSGBMRpyQvxXWEZDowAmCz2N8eQ6tzHrSfEfkgZdBizFTBAu9Ss5cmXRZos8eUfYDVxGYWiWMgLrY9TYbLAk",
  "key6": "3Yjtk2dE54NX3SQQdcQq76K7kB6SnKd1binJcpaejMtC2GycLNp3Ax6TQMN7gk9RyES71jv7827NxGFH8U4yQW3u",
  "key7": "2UCgGgJdGeDDHSTPjk1t5nrkzyGXJFicanHAmoDohHTCN1eTYeC82WoGtuuLMwvnCU6443fhZPsAEEcBhZXA1kBT",
  "key8": "4NCcwWfRCTPJnVt8Xw2jH1zyMGfUed2SPgcQHMY45kEwGskmJWk4gWCnv9wKNZ6BTfUbALzwkTqbMoELkCJt3suo",
  "key9": "4cH7bZKXDwfYeVtQdtwicNn4ydV8Y2inntJcBnNCT4QpUM2CMKtA4qh69j8vsREe2n4Fi6gGHnsP8mHdfX1TpWCA",
  "key10": "2zjDctrJcpo8jNKki6NfQKVGZihDZuxFntngbGtuQCcxx2RDx42BcMqoCPN7TFuB9mvXnC8B6ebj1AUFE4GgMoE6",
  "key11": "gvNkmDx1xz8eiWZy5PHNh2b3evpwyEDeoytDPiUrZ4G9zcCQxs5Kc2E2AQtuoWjAMkR29rQfEoSKYitJd7Tv53N",
  "key12": "2fn3cmYdmfnHjT7kc1hkzqB3fc69vj7fDCxVL8yiv8ga7TeDgVUE3N7GefCbm54iDmR8URCdwJMVs8CD43r4tbcS",
  "key13": "4q2r4yHMGzKpQTfPhjQWk3WGui5zwyDtd1Gc2We9nPTULe8VEfceRA8ZBUjj8so7BMAHY9kmbuQCf69ZfBzTMyvh",
  "key14": "V1LBa4iE9krwvdmzuBm2UDHuFkoazJyiRQAmuLBzfVtDkvMUzAJeYpoH6n5g1iXxdMy8je9aUiXd6cNmg7yW4LW",
  "key15": "3saRPJvnw9gwMaraHWXQPKLCYZku1439treWPPh8QwQ1RoBR5nVbeFZCGjsNekcGSanZCH1myVjXpgrubrGSH8Ed",
  "key16": "5BGneYdbE529ShgK8KtTpCK2f4HKcGChy5Yip3Ru91b1EZy5uwJVhEJWAGogKFdFB42eNN6yiUjEtkAuRgcrdZjD",
  "key17": "2DxS2TozdYxck6TDrUkUG8HTj6Z2sFXsLXhG2A2KcPigSMN6LeTVF4iMtb6VcyGvUJj6D6wRttn9shaTHieiD59B",
  "key18": "53y2Ui2tYq4BK9KxVrGq8WWKmoHpiKWteHHB3zDo79QJCenpt1X9ytoBNave1YnFrwGvCMbyLhMWTsrx61wzDwFw",
  "key19": "4AwkA4kU6ipZuNFWU62z3U2gUwSdomtKVwNsQUJFgitqCz1G6BWAJeXZXYPH9EZeeqZkJkvmjifnf7ARaR3nKWw4",
  "key20": "34TabxKgEDfhV5Nr8TkmhsYVowEyFJxWBAtLFdHP4auDEBpimEH6aq38turmoPab684mzxgkBGrX4EN3tYmuzJDS",
  "key21": "SYpZ8BKFfLkrBrWANYkbYnCWCcEG9RCt1h4mHiEM3xyooJytHHUYk9URcbans4DRp9UnCeSokd4DBmapTaACW5G",
  "key22": "5rVm4ZSjQwhYfRygrR6o7JbdHPPYGdq8jTKXQGzLZRQkfAXnwcJ9isDuhTsruWP3U7pwaKe3iy2z5A42jPgFHw73",
  "key23": "3nx6GAkSccdtnSNgxYpoC5Z1XSXAVNvR7513hbFCBTCPSR4QGtSXxJqoZxNHmJM2DpTLdRA5Uq2gufk86E6QuUYM",
  "key24": "2uW5DET5A7k31eC21tt56NbHh2eFxzt14G4YePJCMdSmEYyY2q6giCcm6T7RrkHz1ggXyg6aTdXN6Y5acjRB1XdA",
  "key25": "4P5ws7zC7xN3bVQbjdTD95DBNwjEQKNVHKgzuXtHUrcodwNkAWEdtSuaThGqxKzoy9DpnZfwoQrfF5nkmSsQ4taz",
  "key26": "3xx1oWc3JQ1z6DCpJcoHiGYzg5iNNa8uHXkQvf1WUokMjZsJWs4JTbTVg5ozFduHE4SArLebyauTwS6pAAqmUhdW",
  "key27": "3ncKQWah2i3k4QkwH19vMC8BftaydyrGv1VRpB3mG3Bd2px3vqqUcbVrRgG7J2Qhd3uVZxqux2ouCnsUhAiZou3D",
  "key28": "36Z4xsnFg1zdrJC5qcDS2bFweR81jYyWaV7CeEQXvH4kE6QaaYrairummveUZ8CsmqzPA3y8UvL61dtc1LpV56Ri",
  "key29": "3DjvhX2t9NU8RFT44JisUhkwJpygZyZRMH3DypyV8AiKdnBg4U16VLotmPJipGF5JGkeshukR2718g53Dvk9as9d",
  "key30": "3qCpyWF1vxfvPidn8QRQoa6s2sTPFSvFh5B5gh5sC21St5ABX8bn56wT8K6y8YQCpSAKdgzbJNc7bxe8mbK79GLN",
  "key31": "2jYYGcGnzAZdWh13hFGnCqdmpxj5ucx1zhNaUVPRHZd4q7ZynZLUqYYEzTkdFxLDm24qVvJFWNY268QWf2GMNnRQ",
  "key32": "2dGZfxJYNkJWkNHKK1b9LQxZd5jmnkk99mS3gMacSQEFWdjVJxLGa8XBcHodFCRW39jHRxCnBoY76eVBFHoSbY1L",
  "key33": "3roo9whdSUWuBMQh9zs8SPGTnjrVvfUvDrYhvvP4VE3eTfoS9MNQ5MarQLJo5rYcN3ZuWoy25oWWTmzDHoYFLtRs",
  "key34": "4iWZapdQEoXmghKjGuWZKmbXHdC4415wJrUUYMBjQDXbCBgDaujXdTBMumwMnpsuiCdV2TBygTaThPcDAPJzh2st",
  "key35": "52KL2ocmKisAxVtzEJFDyBSm4mpM9ZAnQzJdQYVDwLhsoqZ6hkMLQzkqWSfCnpgRRun2jhHURR2YWdEpQx7HowTm",
  "key36": "tHuhXzN5XPAsR4Wd1u441ihaFHbeQSSHj4uQSLorSdn2FzV6jaqyhR5U8nCuTXg6g6DEuJiEWvxxwYqdpnT8hzB",
  "key37": "2MWpEZKcDqXYFy3qvVWiA1s7XjJ6esNspRYxZ9fj59EwkJVsALksuUV3fFVLhJAoqWt8nr2hfqMVU6rmvUkVAShP",
  "key38": "58pue2ZhgDYcTQDEBg8eJhkb8qMiAPzaPCtbfBGPmrFN7eSE3wAqJ7wWUpZyioLa5rrRBSSiL3mdPU1qAHaryGYF"
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
