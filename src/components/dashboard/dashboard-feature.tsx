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
    "4udxvDiCNkQmJXmyounBuiAgHD4u1BFPraYeYRBqWtiNK5cHcZ9U8B1d9Wm6BoDGAU74Q8MJYhg6ar9XsE681aiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uvZbxgQ99KKxi1hSrgmJ7N4EFA2fGB754QV42AaPYhfyMw9HGSWhqED93H775omG3YeBmqak5Zz7AAAbGfkqVxC",
  "key1": "4kygQ1TREiKUeta28XFaHwbu8BxarawUJnvWehQoJoX53rGoHFUsrJ3WvYGdpnSZMmfkji7cTGHTFrMdF9JXmMfQ",
  "key2": "egZ3ABNZWkTuVygfwQFKcuoWPCy2zqivWS7ygoPHGAgNebM4fivHp9WaDrzwNh7Q4w1CagjXKozwGK3zCfjBhXJ",
  "key3": "mGFCViUxwB9UGP9GyLb4EgZiT6DvCmn8zSKCy1U8LmqpzX7wyjfJs2jLGFPMcBgy6RtKX8iNQSrLihKrV2sXtUd",
  "key4": "5cRXK4XjcEeVw6wZ9RdQSy55Ah16QF7qvEvEXPWbw7DDwETSGgTBGHGa1U58CyDSN1ACdex28aLHjNB3kGXVfC9u",
  "key5": "3Lfu4sHcNtrcXZh99cRqReWcmvzNGQV1XMBkKeNkn1p3RjTL6CADQj7rJ3jKJb31qx6KJcL53zJbC2bYseMSEQHY",
  "key6": "kt3FuztKbr3wo6BTBRATRzVdk1GtvvkAF6seosBPQNeQgFohJngkMHE7S3TBVYRiehCuX4q2oJvBfW9mKkxPFk1",
  "key7": "3A7msm6gg5rBUCnHHRKvGF9j4bpHgWaz8rbeiVJFLfzgCxVNfFeWq7PAbCsURhJfiAB6mifLKwzeKghFWrN8dBtd",
  "key8": "3pAwLGp57hnZ8cVbZyx8F7uaxqQySTA18pvdVkGzGRKhz9VqzzfpSQtUXcWWJBbRvWpTfYM3NWovKZrmF5JH7RM6",
  "key9": "3zqXZgdjdTzSXUK8swRcVJwdUGqZwo5w53hbZ6Wrzud6E4stERMTm1f4bSmbHHXPbi7cHo3Xvnr4BSExbQM8Es44",
  "key10": "2nSdaUEDUSfnoft777iLMrM9eeP5SzTR3q4XDvnbg4HFKpXsm3nHkUNiYB89iYv6ELPqheuHwxH8tKGQ1MG2kg8v",
  "key11": "5NGTf4zJzKigUTmaCUM9z1PwF4RgHLWpTNmiD2AXFKp1zaVnuHhEvuYtYYsXKbrRkceoGhs96u8L7Seu9pNZjKEY",
  "key12": "4atFqPEcoeQcvYPQ16J82UhvymQi62A7KQr2FawejjzqHoXKoJW3G3khbQANBdzts78wSqN1Mge1RqKKwCokLCVw",
  "key13": "4cSWjvyS3UwCv4WJDfF5Dg8SMjkeUxpPya9DxxNSMqJSwRJD4JuDjdKiM5czqLJPcVcHcMu1Zhy9oZuZVp47bLD",
  "key14": "4U5NNQ2ciPLEVArWyEmsJ2FadiX6hpvEirHWky1TxF9mZrkYn1364yK5jqsPRx6dMtctbAgQATWXndUJ9ofqnxwR",
  "key15": "2Kryy7p2uP8JxDoSZxe7xWxy9Jen1MDvjbRTu4zQgE8d8dqTmK1xzFhaMKEAwVZWSreeeNzZ74xHC6jyZT14ev7k",
  "key16": "5J92ns57R9pwLct8uPbfUukad3ZK26CM7dnmAaazj5sNhRP5KzzydaW44TB61dc2G6vGopDoGyMiqKjobMEQRJzX",
  "key17": "2jnFGyTfgR9mKLm4tbkDhGnf6tpWf2b8fFVwBvRUxKuQRf2ff5EE88WGzHLdmmathHmjxF29akk7vM9VJYoYi3bV",
  "key18": "tZNGKic1RhFJaW7ehHbsotSWf7hNpbrajcNoY7aRi8oLeWZrLrfZ6uWoP3DL62eWvGgudKNaNSGgFa8M3kJh2Ky",
  "key19": "39f8Jfji79QyRVcvaF5x3ntfXVWcXZb2mrHe5G9SFerPTxQm212Lc6n4TzAgAN3fZ83vS6Eyi4KsLTsYT88ZyvNy",
  "key20": "2NBTQx2C3CoRCbiJvoPQWfD1oXGqKyGm1hNHfFX6DmgFACJtM8wsmFL7wuPmX48AfasWNsS9U9Fro3ozk6ah4Wh",
  "key21": "2MQSUaFmQgP3EdvjTWDmYt5c2QDAxtngWjVdPCiWDYpeeYfqQ72nhtDpkEX7TmW7T2PoHoXH3CubmQeyAzQKG2Va",
  "key22": "44hdGSxzvdBskpetzP47YYmqvHcz3gLmxqmnwVov6WyEBUWzp7zMD7SBGvba2DzMcNSxXtxh9WBGu9grPtCvywjC",
  "key23": "FcL3fDBjdirzyrqavwuY1bpxYx8TkC1V7dQoXVeh9oK1VZP67ji6JLBQ7ytCoTNAuH4YZYeSVUMU935mqbdj2tf",
  "key24": "5gBEgBeH99GSM6gePMwCtTpAFPU3qHET79kHsq2deAUJuy1QnbesLtGFyPwfV4CpjvB3PUpCeBzixDwjDqNm7o8G",
  "key25": "44J6mx328pWrN9PkADqoA3aMPqxC4GMmucWcRkKWjgcNzfNPVzPLQVNVnKD5XC9ijNboZK7wunMbvSzSKDgyEMri",
  "key26": "5PGNSgACMjo7VDqGC2qcRToEh2tchYrf5AAzD59WYXPQadrHEF2GcxBKr7dSQnYCv3JpvfBQVEsp1rHTx328EZdh",
  "key27": "2U2fZdZBbS1uZunXy5icup4pyubpUAAc9wk4kn142QXfWQZNYCozbsGb8ctu5XKnZe5Yk15ZMDLfp6CxGXX7QcJm",
  "key28": "4iHAQsFnCj7K4QJ7Zovz6pYXQpes8DGQWDrbTXKGrmHk6heoXfwwT2xd2CDBTJFSH4WPZbSRhYCxP68DDQThEufe",
  "key29": "5i8ynNzXDpG2HLv97ioKxBhbghsog227NyP6PqjSbupLqoCVwW3RbyJHVmZzJv1KijwSKSVc9CmL1L1MWhoS9pbf",
  "key30": "4BZ68ZPxChHBbiQaX3XK8hmWuyXjYHPE6D4s4cDmUmfGdTU1bS7fYcXXLMmRwVZh4fweazRGs5mydESvwEYm1bZz",
  "key31": "4xU47eaDbvSUSG99MjQ1JhBS68XZahvfA3FtNawa3aqE52Nu4b2duGgDUeLLQuTKTSAL5HJRDdYePxTMbg7GhDWJ",
  "key32": "4Zt1Re7K6arxJ2NSCMrMFa8H3ZGNB4BharGd1nykNZrGZA78y2MRiCLCBDsGc1Q7zUVTe5tzVDHXMJCePkaLStmc",
  "key33": "3GUwfGKHTaMVpsPmQ3jyErAdaPJgHRQPGap6VS8YkuAhXCpcNoUsYn3ybmReYSH5FQnSdyZ1QENZwJvUC7MC7bf5",
  "key34": "3rn9CuqSBKQA6gzvZzPrMs6pF8swqXixxXXuDn69t1t2cozqUDAvWGSk6D8mJbwGoMgRDikTDSZZmkGCkV5dUViE",
  "key35": "3rMYGVKfAEovoR8gNeid31yBM43bamF98wN8Xt6PqsVCUZZAQeqtEFfNZ5bU9BA3qa43TwkAKpBn5nbeHxQf8qU",
  "key36": "3K5gPTPhMcHLpMMcfh2psMPbQtbt7vN384u68YqN2Qj6628rMmTEftiBd9ns4hQy9zpeh9qAyzBhZwHreRs4ubDE",
  "key37": "PnqvZzeEaBq2U8LGNtTrijbLgQRVJ5y9q9ydyzqUznjjjz3AdFQSRy5WaSkNWYeaK3d2UMUL8dPxTfno3qUNqHQ",
  "key38": "3xKTnnoZC39KunQ1RHqB14jwVM4tLAZUoY8MfVK81dNNg2hpVDGwn9tBE4v9xemg2oaZwyUyxeuLGt7rA7cLecsF",
  "key39": "5G6Jeou1JTkP8ANKjnA4dwsxHRo8xgY36sLBGZtgXYfjozuqcd5bS9N7huT18AhPYnDBqTfg3NSn76gL1Z2E6keF",
  "key40": "Cb7yrfTb2GhZ4w2gqZWMm4ocLi1K8wqD66bwoYAw7PKWWViCEVoLQcmTcb57ihTVBj8kHtVcof3XmRvPbGsv1ep",
  "key41": "5Pp5ZtZtUthnGcha3xUojKz2gVY1354Jf4pchZWHoGC1JRdevWfvLSMV5dLMjXzW6TYdrAKGgm9YeAGnH49g929S",
  "key42": "v9p9UtA8sn191vmKaGSQRkgSQ5rW6tcb1Dq1z3vCDmPTntkLgmUNVQEwAwTyBwKLG57MDR7pf6MVRXq6EtAv4Ea",
  "key43": "5LLZXAFeb2VxmcpjTNShTkKkkEPFENL48gd3uw6K4sjK22oh3jsyhF2Lae5gAacskA86amus7g7XGiqyt4a5cfCm",
  "key44": "4WPHfydigvPxnkJWuSUNz8cAnZyANB15dJzndPsU6ybyf4bTHf8L4igYv92KfGR4UsZF7G5rawRkTHiHbXm3iFa5"
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
