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
    "49pGiaFtvPRha1aiJgKiBjfojnZRV9ET4YHRiXhoNCdYA56huEGUuKwB8V4HTZFCCgshoSeuGGaatVMqFw9QGL6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r5ZyECPsRvWeSsSh1QurE34zFcB6NaMVoga4RXm7G1ML3cDaj6KqxRD4p1oD3w98mVr92wQ3uth4KH27ZxX7HAH",
  "key1": "3txaepiXtXBXyA6UFB8bGUm71e2qotqN9fYZzGT7dcA7fv5UaFGyVKgMV2Wytizg21U5268GmJF9s6Z73wgdiyKw",
  "key2": "3ZxcidgqtgiJMya8sLZfuMZtq9GkFMDEwWxxn7yDxFTUH9tJgdz3iwgr9n3tX8imR4AW3SRF8PqoFMxPGGptUYrr",
  "key3": "zegkWnXcc2b9YJG2bEQ5H5cEchh2R9Lfez7PAq5fCc4m9GgusqmBnA3FSYeXaDQSPUvKT3MCBCQhxk8X84toYvs",
  "key4": "w3nhbqb5hbHpHyU49Y7qepKnKkRtWjZuLfx3qsNHmuZYstxM7SGdA74t2StNkz9my9uXuX8d7yTWWdbEsMQ4zQe",
  "key5": "3bhmL7uhTDJLxXDgLuHSntNVJjZ6Pc5KWiWLCu9rtNxNZAFqU1D3GhqugZYw37Lj61ccuRucX8ncHEkqJkmQtcRZ",
  "key6": "4TfYSYa2yhN2A7qWL2pkN8moC6jxDRQT1NTE54ijjRxEAujM3shh3GaUoJRg4c1f5S1ewY6DApYjXjY1HBQLknxq",
  "key7": "5ZwTRyh8mJKw9c2F9ZjAp4tRg97pyemqnykuJUeHEUiBZkST5SingRV5vSqDhjp6GYsgowbn34tSo8YBrHtBxNsv",
  "key8": "n9Kxm9tUsaBAg7rCGtokjuFfP7cYupZ41k26CprsWHthiw7qooEuByz6EKtodURSrqf6jfFuCyKBUTZwPTQEMEd",
  "key9": "5aWs88DiLw8aGzG7Ek9go6ZG1qky4hTxPTQWJXWFJSTbSNZfvjgfXDBJU9cdit5dE5aKTSQtF4ni54KuCWyvawUV",
  "key10": "5jVXxDDj8St6ri2RhmB2KX8X9uHRoLw9zTXMuKfrRcWG95wgzN43XsAaN3XFhzgw6VmJyhHkwWbRBVjG3gHvkS9J",
  "key11": "2iw3TFD1HW8EYiK2nouPsdgsrNK9piuai7BoLpwq9XxoyZWVznmCs77gXH9yhucdCA2TKFce6pakSobXh25Tk13F",
  "key12": "3uWVTPuZiwcYdf3e6cuWAsYU5KWrNJZrTLy83eLsu6cZ42Y39quPcv1vmHvFjhoahTv1eb5ZM8uCQEfsFh1K2rzM",
  "key13": "3bcML74AtURNaZN6m1ymUdUZAmE6UPJx217Ctx6vdpmHXeQqqtcAB2E679ZDAvt19YPtdcUeSvxZkxM6g5LHx37g",
  "key14": "4kYbjxSCo8VF1mkkxeZ5in9xzqktaD8FbHQEtgn8359xaGhuaZytNHygfkk6NT1PyVBgQm2AnzhZbQffj5QTaeo",
  "key15": "4xT1pbFak5KiohSWbQGmpBRNjUY2Y17zK78AYLmcmm8RGGuZA7gvJcDrt2tJ1XPLCDv5TZG3hB8ELuVXb5X7kW5B",
  "key16": "5s1vPgvQF9jAcb19W3R14Lgq6fZnMzi7i2XUFUYdxT3HZtukyU5EQwgeW7rBmjvABGXxMG1p5yVfDeBoaesqGrgy",
  "key17": "24MUVmn9BmrdWFb7qYgqEwuM4fwyQPfHtTpEijznwyGBi7EpcctWgqywdJMrWxBVGrKWVZPv6dYpq1coLMuPuRwp",
  "key18": "2NEP9w3wykxF2Fv8Dm7aKZhMdibehinwccyc4bf1Ggw76xoCFwJJXs7JYE7bv8oKBN1khuk5p1AWBGa9xibt1WjN",
  "key19": "3de1buLuHkufNchnBc4DKTQonT2LeKfhJWgGDXQWVm9em3kBDxjYZwpwj4isAZbXYtAz1U7iNtEHTua4H14fRAKk",
  "key20": "5sJXmZyZrkECygd2q5FE9fk38ijWQAfwH68zVJjBTFsHbXxEWUG87xejzUEiqQfJYyvK5gzVfCStWnpnLD6vcKEk",
  "key21": "5Ybd5RyirYhu5xq9Xw7xEMp8yLSVdEkJch9dm4UZE18gat8g6iUiWk7Hvx8hesuhVYPiEEZ1nmLcsFsW7ZX1v6k6",
  "key22": "47aJR8E7sHpEzj7YfhN37ACKb4kBCaGsLqHpkYtyLR8NwXKarUs8dG74Vpx8ucVtbJGitKdtEiNC9D4gQwPisM9g",
  "key23": "3aHidY7gh9DvMZ4kTrCJptTNqnab7pJNDZh5wMYyjxQbhSpTfxqRzsbPhMDmN8czvTqiDBo6XBZx7gb2BD8FFfRT",
  "key24": "ZVCBupmhQvyrN9Z2ASWa7xnmd89WsdSX6dqUnx1cuJcZwpAbwCp1fLhKbsj2eMnP5ivmnAuUjnrkGiuvKe9Fpw2",
  "key25": "PrTEkNPMrRPjneAVzW6MFWQHrtCnUXHYTKtbXZ3B5dPsV6tttGKhZiYUkVwM1Vzp3h54vRVFtioBpQZDtgBhTxT",
  "key26": "2qfGNXZwSSKCSSyS1L54nQ8U5rtcyKE51NERXZDW1MuhJQYSBi7dsFjQEE2RMBnZnMYhopUVi85vMRNeyXbUu1Ks",
  "key27": "4BAoMXH2JQwvKDNpFh8QQAkZndgsqk8nqbBKjeiF1dTtgdRA9gJgNaMGZq3Dsd6JxT1nQEHeMLKtyhF4X3SVwqzr",
  "key28": "2RkVZgP6KFcA23f9AJfABhwZCG5Jd6m8psbKtRMW64LyfrxjAtpHJ3JvHmFkjrDPqYmMZXt6KN11F9RuRDmHnjzh",
  "key29": "XA4QTTK81emmRLCqL4pcig8kN252DGu196VuXj1LTe546JxY7qaYB1yKmqWiwCibM4bC6p34SGQSZzwxPC3EYeQ",
  "key30": "xx1YeagZ5iieHcndw4myS4Z9GKuWWqumnUJ1beV5h5DjaQLBGgHWsqTnxQu2nWyvwHsiJjRsh4yho3RwXMerxuw"
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
