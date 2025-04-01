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
    "5rH3S6oobv29nZ2ETZ6wsLBcYYCMzDKLvtkJWJpByK87emMuC2rViXphjJwB3EzVagkoDRQcDENC1zSfZ5PVzoym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mHXYiexVw9owYjgZrRXxXFEu7EHgJXNt5wpsDSGjKsupU3qBsY4iC4GceXWqtvHjthrfhywZsdot1EKV5RXD4kJ",
  "key1": "4a8vptywFNWgzCPkGszx81DvWXF2fM8x4fx8aKQG8hPTp7MB1tpitoKycjkxVcGT64MvRtqHywodWQ6AMpm4e3t6",
  "key2": "4sZFgXoLUFf9acw26zg1s5few2m1L1P1boNJQb2Vx3gPt8EymAebN9nHBstGYG91k1UtLjTaSpDUS4SvTPPNxtRp",
  "key3": "3DMzsVRTyeCBNU1AgzckyuKfeKXvzYfDMtRmd1Eu7PyFG3twniZtCUhBxyrcehEHMhmyL5QDvdoyBpSnzcSd84fe",
  "key4": "5VDdj2o9KqvqvQfzUrW5dGdAEKFbTYTuLfXNvmjyWSL3ccuzPvRcn693Aob59veKLgLNoxfYMpa6psKKUYq3mwBF",
  "key5": "2LATE47NwF1Xs8vWasqWogtti87yjJS7iQZjcyRSKiHPitJkFvki2rf5dHuid1AR4PSBAx6X6gmepx6rAD9SRaeD",
  "key6": "3o1ZTTTQZSxWQ1U4Y59C8BZRkh9JfZ6iBymDWiAQDcof9jwoUWTTM8YBKdehXegF1zGYMYnGZVPnB7objBNtHgfc",
  "key7": "4Au1HzMGGYpWXAa2wnzGVyJF3pkCaWYbKSBwEyHyEudSCpm3y9NnVJw8JN9jsnspbQvwND2CjXsxcE4XhJJ5LLcz",
  "key8": "3RUyjdFPbCHZxiZtdyTUom6R2Z4PpxPyxPVoia26Fd36SM7Mg7xLp5dUWNEGVySYrmrfMFgWgUc9QNUndNtiTRw5",
  "key9": "3A4KK6TYjyNRTuCDuFyWQshF1KwJdBkApu2wHrBWJ9Uvku9Ug1ASanK79ythH8Ri2qrSmAvh7p6tsMffG73mjpoU",
  "key10": "2CGydAc2hAdprfuJMuBiZMJf3ucF6SGqALRuk1LshCuLQVaB9sx2wAewtgYfnqgRRWa9HWp91jTmA9AQ4iDsHYJM",
  "key11": "2E51gtFwrzALgLfAKGnHXEHJuvaavVpdBRdhHEKYws4G3wuURcHJeDGeqj124N2kP7Wd2jhc5t8hnXTGEcnK8Kza",
  "key12": "3m1ybmkfXkPn7p5bcG1EDeMtgm1YNiziEkwC2ZjiFJUGzxWyJzHBzsZNo17YdC2DSJBUzWHNRyTvTPL9WMnAxDGQ",
  "key13": "6RTosUUVVirWnj8FKPfvfoSHyYZCX4Jqk9W1f394drjPDq5CPzRFP7pqEtA38bK5F2ha9dSFLsH7A5GBmGFZ7g2",
  "key14": "2CC9TVGxHTksHNG8QJfcd7vEC9zEv7mcvEx95QeWDU9S1tsSB111Y5yGZdQBZdNgVthqcN7vFarKvryeDwJik1hC",
  "key15": "2yh6xh74g8cFntKHU2t2rggP81pDQsKZQ6mTozR1KwWodzXf4FPJ2wJqNADnAh35qAUP4oduy6kF6V4wEUf6TAzw",
  "key16": "3SjczfEyGsApw8dxLHePtNnMY1z5w3TSjfbkB83kx5aR7cNtMGLYGuQwpLiDzmNEaew9uw1YGgRQJDmw8bEXuL7T",
  "key17": "4XLGpBsF8USH3p5KWid3kbHvcP5YD37qb77n6PgSdfU3T6S2HaEg13HwxvgWnEqG5wAzjwQA5ByzLsjey3e72oq6",
  "key18": "3uWcKRhiiz895ZCmvQPNKGSUw3NwVmdMyGTSu8qipDz6NmASV2T7VfEtKiCh5ML82T3bvjNzQUJ5kfRP6kW2EH76",
  "key19": "4kARMa2LVgCA9jfzuT63hyA2C6HEectNFTheDNihuG2WPXChTKqTQgPijbTTT3LMyaSwbJRR9orYdne3XXD13Pzr",
  "key20": "uXHVFwy2CnEbwvaT8GxSsjnrpmHJHnd7wZ5KbfLmkswnPkYr9fEAJ1AG1dkyR1bmufkbSAWy2KqfuGbmmtSiCCf",
  "key21": "kJbWjVdpUHTR63ocjEbgWyZJYXL8hjuoBw68hBWbPrY9JFKcYekQJkkQATHodHhbVFh76wEv9GtdgcmPP4Rv8GY",
  "key22": "4aDH2ZhDMUNr6wNwnvDqVjiVZtBTFXiz3Dfvd9XbKXLnGMxfcWVczZdN7XZAY5nrQfz7pcxbT4xJbJYXe1WKwjDT",
  "key23": "2NBpKioTRrH73u7PNmNn8u7Rj8huXwgT6agiYB28pJH7WBEapqbhPzHLJ6uzqxZVyggVzqaTkVDzEj49EkX7HcF8",
  "key24": "5zVrKPNXy87zKFAPvmMN9fpyQUKdyXWXp4a8srd1n8SbAJ7YjujvvLhSaeMtmk1dW46mQhb9pQ5iW5YZiWdnutXr",
  "key25": "5ZxoboKmA2CGvX2HckgiCkzceGKhjaCYb6oRv4DmxKadfekTWQVcxPbn8nAiBjYoE3MHtFUNJHu44g3Axhhj8ybR",
  "key26": "5XGgBF7nvZoFiv56ed45SqzfDR7h6nwT2t84XYbedx7LpVVMDkRrVNJ89FnaqRTt44pWEgfS8wv8PV2nkHrrCWVY",
  "key27": "4Mu8MrnrZJrxSTEWfSxYKydfaWYHXXDMkfqgGmEqFTBCxLL3Ymb4fHmon8R5bsdvhWEzHJsFetQcjTyYK9k819UW",
  "key28": "V15d3d3ycactLjDRpPcBvYYGth4qspvsrQZdgL3Q7eKiTiNJG76SNUqpf5SVrkii5sDGQ49Ts6zQJNVxUjSN5ur",
  "key29": "53cHed7cGdyTHJFQpMaGb6SPJFLSMEZj2fhJULopscH9N9m6kFUVME9oKZnmb5smhGUoNi7mv631L7YLAGRsZ2jL",
  "key30": "5romUadYDzA6idH4DaYikSXPM2kq4PgSUoA23Gy8mTT976tP1xfeJv4gJSxibkwDnhtJT8KycxPfwfQcexgRrVeF",
  "key31": "5jNGqVZ3UgNR6EG2PsvTasXd1wxsqa7yQZMUingTizapk287XYWfmX9BjNK7id1wZVTxe3bvVuMFTx5tqbtMRpEB",
  "key32": "tKk6b37N2ynvq3thdj91kXWMRrU1v53tfKNB7n8tEwABAPHQcwQPWRxirFqjaBFymznw23ug2havRN5zwgvdisH",
  "key33": "2McRot7DfeHxuwcSbHHZJAdmxpqTbUYuowKYQ8amzLhDBy2hNGWPBHtqFpRnSCZ9CRcbGTBTfWxenwkEsGqSsd6v",
  "key34": "2iVtSHRrav6SkF9MnT1jzqACNYp5nmVDvqh8nEKZWgaW1ofpDdfBPgN8WF9tBfL3yUCinYPyNH8H4sUFX5YGvPxw",
  "key35": "2kMBZg2dwG41PxqQqKSmWFjd2BNa3ExJepz3TTuMqurA6sKpRbaF2SZPso1vYpeVnyVzGYzLWdQYCiUsvybb9Bah",
  "key36": "4R81WB5UWBrinh3UW4Z7eKy6XmMPVsk78NNNxqk9j1t7E6QatQmAYtafVSP547VH1rRayQZftuYkTYGqmdLUbvZL",
  "key37": "5cBvsEz5TcUDRBB58X3WTj8Gg3qRFYntQsEhs3hV2goGD1GoCmWEb3qDPrmPF6WhhNbCfuVwE38Lvxgpbn9BFSpK",
  "key38": "1AYGDgPuE6Qnj1xZXtg8vTQ4YXWgSYTjeEpATqajtGj8CnzP1zVbzMj9KcdwHdm6kSmHazhtKVSgNKLjcKqg2MB",
  "key39": "65g3DDyzGQwHJpppPG3mRhUiHKw8Y1vNh2xCrXK8o3yKmYrdVQ3ZzWYmQoC97Yf3qVc2oZ8mKkFN1DQDYGokxfff",
  "key40": "2y7KW6UDKTqDG7RELVvdrpiiyTmGFz6fitdMVsnxy7D8yfztAsryM1d6EciF3YSF65TPpXP4RGHzNiyQTJehuc9H",
  "key41": "S4UnMmxgAjSBqo4PFCPYxfvUQDKM9Vn3474z2o8PF9D9L6jPVNbbi1DMN9Jr5VJsbbhrB5H2VyyYngMowyNS88z",
  "key42": "3r2YRT4GgSsNhBs1PJ4aonTXPUiHQQ8rPBc9wHMQc283iGpr9hBazsow5mnzAKXivD57PmzmfMoGYARbC1Gk8Gdq",
  "key43": "Di7DD7MiK1gzvmhk3ASrBXvR4ovGX2hwN7CBQQei81oQrkv3kZGKFXGQTFvySbvc8H67bLkdBteCqthxzHnJHR8",
  "key44": "DR3RpSPfaFqNwRPSNqctLR4pEtCmT4KvFu5Q4AFnxtzmm1irWrsEahTYTgXfeD3urR6TDknuXXivf4CYMwTCKr1"
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
