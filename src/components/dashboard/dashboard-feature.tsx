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
    "3H83k552hQAPm6Y1z2iG23aZgPzFPNrQBCjz1a96eHDiKkqQxZpTmfgjQ6nwv46SJBNbzbvuZtETeCsesdqtLCVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fZh6Szhqi5xmmEStHfFG7eWPHB2JBUeAAZE2kQHUysqtfKi144kaJNTFydW59rrEAM9ZxULA1DrHHisKLaA3kET",
  "key1": "m6zcgDGePP4gvL5SakiavFVM7XNUFGseCwbsdSgnXDGUNmjsAR6tuuN9SpeAGVBFikYRD3dEyq7tmTsxzL8rvFf",
  "key2": "kXnDYu99BKQUig7A2hwjEHzReTJBWoxA4jKnQ5wdcEfbJLzQ15Rk7Wh3vLtUQagK6xc556u6K3AoMwU4MKuBN8h",
  "key3": "4TQ2UmTvqedUbt3wUYg2W7E1qFiXgZDGSqS3z3HwW26rjzdc1nhrViqrHN9K6NDczqhMv4A1SQgSwLSQreG3SXVf",
  "key4": "3a99jUTptRmUpgfAdFFo7aEkkHHMT7xnLXa2iKCQvhDL5eiBurL3FpiXAj77HrcwhQjR19e4nuf85nXMu9njE5Sk",
  "key5": "5jaiZVnDjWBxQ2C548bpwkyBsibEnorkZeD9uZuCKdawoqdZXXxKhutLwpzacaUic4XDgFcfsnccoQNrFdoEc4Yv",
  "key6": "5oisX8bSDXH1hoJqoFRhasg6LWHvSnHR9eARgScoFZevcB9DNk4yGzQikLQMKL5z46uYCCAzibomC45voAGZhJtB",
  "key7": "4pRMKzwbB2UdLcpsU8k4DjufZGyXwvcBVGsTmLYyeaV1WGex5dqTEQB7Gx9at2dTqZNTBUtsXJ1Ka7skiXr4sgaZ",
  "key8": "vFYxJgLCfE8TedKP5NnMVxgfzKXEgQ6VyCUDUxFB92YGGeqLv2fPJxg28RBFFW9NSPx3BZ4JZHPVEUPR75PNNT9",
  "key9": "5KWv4RSxrxuE3HSKiXV7wTjJRWuy6Qqx8QyTpQ6tv9VC78GXFgZZkDU72wc2jqeAub7Q7fprS2HbEijHSU6F2AKA",
  "key10": "eVDxPz8gJhLBCCTwnT2ZHa7TxnNYFbWokTNwJDjGR5e83xKTPr22g3mNEDCUi1XYyddgkCeqEf69esKTCCcp1Nf",
  "key11": "5Q1y9cQ91iVUuXe8Mm5186Fc9EuSjCvj4s8xe8KJsU8e2yTyKbYU9U4hA197gapsxowAwdzBDPa2xegCSvLy2CHC",
  "key12": "3nvj4d79LsTpvQC8Y41aE7Kqoii4J6K3wrRyM9YpBSeTNoctnMobuiVBwPWma4y8oWg1mC428S4qBPUZjJCGSmTX",
  "key13": "2eo3ifPdEdQnEEFbLJ4JrVp3GcEknVjtQDBCekFwA6nWxynubaZwiMwsRwsPp1Up9HxgAaoraKqP5YesLd2ZegT",
  "key14": "EaxHrivS6uY9n2MUmya9DB76PEHdzZbtLQnVitfgRhkcovzV67rU9Xqiip6ksnzccH8829gFg1LQX5Ne7JE7xCe",
  "key15": "4dToYi2aHABFGSSehFfKwryUNqLd3hnvCRkMn5j7acTr3hfDE58NBDpPmKtG4xRhQtyhcz7eTGS556oND5ftMWUT",
  "key16": "2dgkJK1pqufv1RidvuaTaqxxxeETL6m8KttiJc7BUifNNohSMcWi1LqPHeienb6QPYKzfRkd6o8JEcgjpePgZfJJ",
  "key17": "34pNA5vqE5UapzrH3JZbFjTpDcV2rBH5JbmTrwauxWmAKZSu7V4KgoXRVvqoQhvXVDGMjuq5aysZtAhWoPJ9MCjY",
  "key18": "3RwGu6RfVFKy3PTpJKcEFu2cLrFVydAMGx49BHJK997ud2yUpH1RjhB7QtYhhr6SGF8ZF1oXLqrxMNmgHeq2C8yv",
  "key19": "2VyunJakWAS84uGaedKgc58iKqNiLXh626z3hhcACC5edqGB7LX9K5H785yKtQXtYdaUzKfvy6mqshQDyQxLeCWm",
  "key20": "2TLPDBHpKAmKWrENFaYiNUqiFiwJt1KKmNn8j1GVzLW5LD4fbY8PpBq4JY4QKnH5YXvTdTm5j1JkZNKP1afXkhm6",
  "key21": "4Cz3WRzUJ6AZtawmCwnDEdCZCd9hBsbKdDVZWQH3Hy3b91M6Gd15ts6d4HzsSrzGx1ShCZHnW9z33bvT9z72L5TN",
  "key22": "3e1ahSfrDRhjuonXyySgqngt99jKk4L52dXAviuLAXDq1yAix7p7PgT9vKVi4zyr651bCeR6cpm8u8myQfBxLbaU",
  "key23": "3qp232dwcRQ31aSNUnkq33xJv4kzRzYNMbnmf6ga2mJsmEkg5uoyceexER2qZnEg1diQxKbCNTS5ToqVcyoQ7JnY",
  "key24": "4pWYTd3xZLPheabnhJeU82f1fdmqYvJwXRznkUepFbNDKWyhwBQyc1gMT62D8eP41TiKpb1xtNYx7WLsn7wqhm6X",
  "key25": "4AcBv37ZCoyuGBqwm4PLVoJkc65m4SM8DsBjyrDjGLDmLSKxmo5u76yvXhxtGsBYaKFBnc9WR1hxBWbbaaBEJh1S",
  "key26": "jqMPAMmyd2no2LQGHxqUahofF9vox4CLouMNGRHZcSXZotrvEE6qprykhuRFJsN9sLBRmHagDw1TYgiCqa7dZBL",
  "key27": "4D6xPq1G1utrh1Re9WFTqwYkZNzYWhAi1pUf1ccrXXyqXNcnBWU5Q6SrjymyrnCpv4UJPrthdgWsVJX19jF35HmL",
  "key28": "3w5PAkvzMhgmWDQhH7tStmcdfBV723CWjXZ4VpKws9nre6bgvGXxmeQbbSFbuaTk1aeMi2urw3z1cA64xdKNDoPH",
  "key29": "3TPi52h8d51f4wCitPnxAJUqRbR7bm7QyJXscHKMv3jJEcJRYskgHM3G2cgrMxNPdTCeSNcfwjzzWHfpBNKJHXpb",
  "key30": "5sUedPAqEcmcUJ1uikdDT18w5X4azDvw3rAPMbMm7qwYh21wkLnKY2wzwraa3fUPTmPyJALQc1jNXfRMdrGYJ5va",
  "key31": "3TfBfgrR881QdUDtMiTz24iPgDvXB9PFtg4MWYLXCSVbFp2YacTBkZNfaWSzfU8ATiwUutyrzrv24tcyp9eyPCe9",
  "key32": "Xq9PapXspnDfsctw1e6djTrYvnQX94t5t4DdHQTFtB9Def7FTiHyV1CqeAjD7g1yAnuyptJ9S1t2ve1ZcTmVSq3",
  "key33": "2vsfpzJTtsqGL8qLWtxBQd3LqNokxvZEsfcM6hBuHbC3Q8bW2JRmXrUtXMbnfWguQbAvpxEBknEkJumhrkH35uK3",
  "key34": "4jQ3D3XRABrWP3j3EEeoPMs1EeWhBARHoE1yw4ySLEqVrgbZCzC1u4EYMJPuqHQiJbqBuVy1uf2ET4w3WcVgpR6f",
  "key35": "65aiSK2YCv7vHq1Beo7z4foGZ4b6RK98vjQ6gF1gCvyXrRu8XaerdxZTZrwvLfFvp8LGVFtEBHKXADR5AQxBhqdi",
  "key36": "2xyp6xVX6r8twVUGjsvKkAVaR2xXLLMM68BPtbbVHFRtvCT4r5vYUGsoNii7LtZxdgMXXk6tGV2bSF2exyN9CJNc",
  "key37": "5DefMPHpTEygo1Unp92iVJZWJVfwUo7xmrJtaw3VDauRcST1RdpwR7LqHPud1mcqVPnCWsuvoiasYa4x2ZxVSGS5",
  "key38": "44PkiyzXnHunTdF8MEeBUHf1QCwPwLqrk68r7BKP4XfmBRd2bWuRpz7ypb3sboaq8DH1hedFgVW92K75xySE9x9L",
  "key39": "vmZ6BfE4xo17DTUP12wXsE1Cm9gppM4xPRnYk6A1bA6pKB1kkXfdHT97LWHSXGipjoydSZv5LmAqGUofxL1LYXp",
  "key40": "8bSAGGLqQGuMdzWTsbz1q2TQfBuQ4BhMTngRFYA8HjG7djWNxNUmP54Kmiu5n3dF9L7H8Gx1ce8ypkwYx3DM1sP",
  "key41": "4woehWakW2UXt1KrCxscWeds2FPMtHnoZPg4ckguPDgFaLDHCRAjZ1Fm9VaPiiqMzUJ2TgdFGerywbuEYxUi7QLr",
  "key42": "mt7yxGUYZbBEd8uAZxWase9YhzhRzy11AWb8CJQuv4vTooyn5GyXTQtSdW22dseFFLSXTNtPumLbXCbaQZ662iv",
  "key43": "5BExkzEDqS4qut8d7pqrsDaLQPV4kro9Au9skk8Yja35hbXzywmj8AJtzQUK3UfQgMPV8kbNva4bu3Qi4NVyhhPy",
  "key44": "2VEcf7Dhssd3wmX6EvJUyFjYxp47d7yiWp4geecgVGgwHGK4Mu1uMEgtvMmrWxikfmPRUHT3B2LZf4RpPQfBLMNB",
  "key45": "3KdW8WxTLAqcQYyCtY6VpLa51Ep53e3jPYXxuNUeGeDTRxT1hX2kSQzLFaFSjyugb9aYSyNDi1YNqYgPeVLUy16w",
  "key46": "a4BiHXXRqkdf79kZqhkh3G2rc3aoDzoJmDZJV8GFB8keJDXY4PnxY8rHkpBvXnLUNnah43zffWCauqRcBw1XiVX"
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
