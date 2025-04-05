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
    "4bqBxBZgqek6zPRdvRpeoeB68o9A5XiW1PfeeRiZ7Q6eHykz1YHtMWBmDUydXkWe1aKPL4SCTumcHACd5uWTkTCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FYVhAaeHagt5LhVzyd8JwLK5UP6JHkBtDh7hpbebUdg51GzzURCmBinakoDfL2JyBMk1FPbuboJnQQ2yv1Fkp2",
  "key1": "2UfKNoEaFC58yT1S7goGGor1RUyB28bTU25iV6hMzk4acJPaJADn6WPx9yUTpsam4aqRJmt5F522MiiEeN2zk7aa",
  "key2": "4wGRjzEuLoSHXdW5i3FXKkLkmDHeP4WK5ewDc1Rc9YeVxZesyw3VVBY7GsxZbQN7fzkifFzHVkxJKMZXwxk7bX2j",
  "key3": "Z7dtJmzoUnLk8J1QiJbiFpxsgre1TcFMhx3Stzc57MH5yHZWMVj1BTdma33unu6esXo7moqeqaU2Kp8zeVaw95a",
  "key4": "4SUdLYsUtN7acFFi9pHWPYGRZT1eVtFAJRksH59JwVvj3J5KP7nMsm4PEv71oXjAMsAgbyWbEvxQygsNsy7Hz3UZ",
  "key5": "omXSkSwqF7pFVrRGgcTemuMky7z3xr9tPQSTsafaRxRVXiibFdfGhAfxXppRCTS5P8bEmG5ykeKJCPh3su6gah6",
  "key6": "5XVoj5FtKWaVHtqnxM2LTLmLtAKN8XbCKyMbZW8eN3upuVM4R8xrja1M7m5wjc5UD4MQ5NdrkLVuS78f9cw6Uut4",
  "key7": "DLvhGXfYb1jgZhWjBDHNxFBf463L9sMgLydosJLR8kjhvbF63VvheU7a7Bz6JYXobtdRzBBUybvuzdmT585TKWn",
  "key8": "2BMkUmkaRAJu72oyYQa966YP7bdjhAw1msXoLq6fTZcGbbka1u4kYUbNh9EuWUN5ktQyGNGyTCokxcZnaFyxW3Wu",
  "key9": "4cPaR2iZDaiackTGTsj1id8LmHSMtsSSasuReKgWHCgwb3E4CKQhFdDUHstv7YwtP7crZyeCU6H9LiP3cVotqMkA",
  "key10": "2J8CxdVEGPquLhTng79iypBMkhvdafShxE6tJ7qtTmYLGY4GewC3Pv7zMKcmJcHrDcJmrHDW3DxL8zA6912fvNfd",
  "key11": "5FU5FkWTngbb2rFSnmmLcoS4q6MyLEiVaFBtTEVg6mjg8wnN2pSYhoH2C1FRXf2fm3zCN8wzoJ4J5qNm4ei27ShD",
  "key12": "4BS8PxYhPthf3VazHnh6Lyb7ZQct7BkAPpjqwF9FYe8kM2U7NvM2CxvgYWEXpSS8vHX7A3Ftf9LWAvxbEB27cVKE",
  "key13": "3PoU8vBGopRd9syiP1d82okELpwiFCVDWRtcfk49r5Dqn3vz51QPZ18FbV8bpHezqWrP7edRFBwetSm2PS2jXJQ4",
  "key14": "44Gi5G2pBSBE8MedbsiUwiaGi1eKyEEUYRdwd4GrBqTNjKruMaSKe49uEZVDQkfysHgkViuSuBT9RFmTjDrsrkQA",
  "key15": "cXBMM4A5i6uMEiWhP8hwCDV2tF5gcTiA66kMp5BponFEUR8nrkR8zWELtcMfizLUDuvLH2pw111VaeCJznqs3WQ",
  "key16": "5hvhB14qXT3RL8FDxmJS9rswavLa4wXXRKDknRroEgCjnxxPSNAcaECswv8PSuytt8vaBeYoQBLdNyNhjpYAG92n",
  "key17": "2ArnVkkhHVVasM67nwpgnurvLzAyJmhkcKhVXcT6rkGscjNaykk3DYmAYTib6uKiopJPe7N7ySEQUzisZNw4wf6o",
  "key18": "3x9xH1XmvUC28GLDRpkHn9vcMxPMt3mR7aNbD5rsnC5BZNoi2uPCZFt42bfYeYfiYRRK6xNVfEfJ1JLqehnB5BSM",
  "key19": "5jqVx5Fz55UoqTs6Fs2SifKedDTwtcgwgyfRs9MYpL5zjzqs3s343MKXtCdKW5fSvXZtD4kgybCJMTb5PpiPTnto",
  "key20": "4G3YCiZDib4zyj1FmbaPn7Xa6BocMokA9huEukpK1WvoadCoFFT9fZbyR6cJK6nwRZ4LdtWXSoU73VyuL93qCL4a",
  "key21": "4LsRMuE1LszVT74tTRh6UWGDHbHGVHw6Nr9vwnpjh6xdjM3a3X6pAYZyT83WHrss1hv8wYALifCkth5CfFcWZrAH",
  "key22": "u4KZ8nR1NLkuDBJcmqVdfmyexabZf2Rg7asy367cjJTa4cT9u5689qiVJnz47GumRLgHNAL8JEtobb6s6rUJ8zH",
  "key23": "3Qzsuq7kojVCNXg2kC7FFibZZicBZj6JGXowjcjKBtba2trcZsW48pQ4Gmt2nB2mgKJBj6oigp6rD2cM1hFMNULj",
  "key24": "6658jQuucbXE71AHS5T2dwhFKf46XUwq8esqs8Bz7K6hhZd8UMdi97KVYKxScSM8CifoYi4jiwvKTkye6kdS2LH7",
  "key25": "5e7TWoTebUDFY34Gar5jVEQK5LS1ESd9TKDK44j8pHu1VVJQpKfBefUToE3FMehmLSzwTitsBEqZnhdQJa5TFs3s",
  "key26": "3N8yG25SqeCyxACd3xYkoqVUjkgzwNEJsEoQBypJmPmvPTuE4Sv2dXmjwC63YN3gvgLpyTnGGuXM9rhPL72oXpqC",
  "key27": "5nvXoQjn4DXkQmt1RvsjZdtX9aRLFtDoLGmyDfLqZ8kex2ZmmFS58GxkUmQmoAB3fT6N4EUSfbktN8rAfGhBhN38",
  "key28": "5pcX8agL4Xj85uZMMoj3z1d8GGzPwxJEnzQxoas4hsP4ProWbhtxawBDyHW2PuZ6aTnjHFCL45nYWkwEigEqih1p",
  "key29": "3mANbQTxoT7gRPNmMSbaMtZTVH5iHKay2BPxi4pP9Qt1CyMJqBLNVQvy5ZHpUWAvuYKsKQeTtYkYPumiAcVrsyt3",
  "key30": "Fh6dr6scDwsGZMJhbCEnS1JURXFyjC9dnD7XAjN6JA7r5FBnjHuFqNwHG8zUpNmcJSvZan8UnQWRoAMNLMregfL"
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
