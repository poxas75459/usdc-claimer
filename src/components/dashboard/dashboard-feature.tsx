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
    "3zgvkBufNp3WZdHbNMi1WMmuRe1WkaouHwdjGPGteWRX3YfNVNvbqFyADwiR1Bkut84vKMJ3TsotLsNNxRD3s8XQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SAQFq5dGKWcffKNeZZxKixaJEjgsZ5rxKZuak8ekjeM2LTBAZvZFRexw17i3CSPEJEsHHTTWzWXGgwcqM7SFCmK",
  "key1": "2Ts5mE25hfbAAMcHhoXnaCsvqgjobzsuoAST3kjYsBaxnk2Z7v5tGNvoywDjH8rtktDFfNvNdxyqubL4v3dEmscT",
  "key2": "4kC4aSjJzXpyB8FTFh8BMFd6bCBZbaRxEY3JspqUsJidxhmWk1Qjg2r36jhLUSLGz6kLcuWDG8K6c29FGuUaqErG",
  "key3": "393pficb4PXLi5siPajjcgMVdKqMxcQByrgoVLAWK4BkA5dXTE9tJaYrsdZcXzCtiXmx9rbcfEqK1T1nESswDsjy",
  "key4": "RmwYXgmdWCzgfhYCVU2evmUr1TuSJoM66RkiDPU7JTRHGw7kT3bYrecHU8J6v4NDq3k9hKqkj7Zvvw8m53kei1r",
  "key5": "2wbvA8boTKFqeL3w9LPchrd89Zuizdd7wzmq4X2mEW6yda7hpN3UeWmLvMABX7xNvQSiAmUgcQPmjvDjjFRM1iTL",
  "key6": "2b6NVa8J8zu6ik1yx7uPuAtLtgCCw5L6tqBJbwYBG3BC5Sa413X2J7j8LgrR4BM3oVkJ4uDVZC6vQSAJ2ssWsMFt",
  "key7": "3fTWjL5mbFP8Ka5YgEyzWU2CN75qELa1MasdKcV9YaLNcdSHfMwcRAeR3mpiwgdKu7JCNSgnrJ9XRi2U58HQPyDo",
  "key8": "xBRmvBSpoFjsjhxWBrtxuib3WsGxu1S1cbr4cmUXZbgVNEWwCqA4VenpqfmydEggoBUVtEdeYnSoU3oVpAB7L2G",
  "key9": "5Z1vumb5jPHr1hYtNXdu58rfFfjmPXYGm9Aw6sHUryomXYeaN5PQGkXrMcVasttn86hCj4BMaobwvY5p4nwuaR6q",
  "key10": "2ABN2gkPEt2fvDJsc2jUXGefuy8LhpcoLCFzCqhZmnKxEWTpyDp9EdaCkfiHdi2LwuYDfSaHSv7xameDhvvwNjzc",
  "key11": "46PnuAcfCNHSnvZ6uR2kWzoMFJxxoNBrtWdWZThb14DJFUYTehKV4u3UZ97hTNsXeoq6yho2qMiJqEFaFwEzBboJ",
  "key12": "3EyX6rqBFkPBBLzGXGozeofgZ93DBV1ZTbuziwBmJH6gD55GDP6qwkVfKfUNDfWdzzdmHY2WnyJZGTMdsXEgKbWu",
  "key13": "39iWcC3KQzfaamFyTz7gGUTJD8PdnjE6ANVEdHqqHJZkyokSB3fQ1wkYbH8Sif9tuqCHMF9hLKC31jbCHjVTU82H",
  "key14": "2sqqHDdGJoiKeHDHDTwoDjtM5YVC11KpThmL2UNJLxF3s5PbMb6mGfMhJ1XPMa6KDoL9WckjXVTKSsEfaWsQd8RB",
  "key15": "25cHyJKtsF9aqT3HbnBchiC11VQs48d38PS49XXNNVbMfzoiqQjEpydv7n8247e7sZcgTGFdwHfgWUx9kLKdPHXh",
  "key16": "3oDYCDGmhykn8MPLpzPhQcgvYbeNPCVKpSXDugWMfdZNeHxyB33TBR8DYKMS8UvDaTh2foyeyosw1MWBSPm1T7LL",
  "key17": "FgvRjKsXVWw2CVt3S4Rd9KMo7Pg3Zwkjg4xJdrZapnoNPutbG338kjp52n5fKp9Y6SzvM6Sp9eGfoKa49MLZh22",
  "key18": "5XfYd1kTHVEYp7FEhoskaG5vRDSZqE2vRW3RKzw8nQV53RgmnmAd6ZdhWfFekFJntJipai2FPqqY2j1RFMRJHB4u",
  "key19": "5bE47vXYAW2giUopLgSEjvRD14dvoCj8stNJAHWd4ZJACjUqLEzykCq7eYMhs3GGRBpe98JcSRVcKL8w4QjQCprj",
  "key20": "5MK3XDDRkKeG7UtNTaWptrdPq2biP5TKAnjHLL8y2yRBM92YB9sLrqnWhvCPo7sDJggcDfg3ZeJuFFdvjAvtjaXh",
  "key21": "4wpP62ikrGRr9LVJtP4HcPgVBJBrs28BsP6ukjZScLjuqpBWN4fxEk8uV8uhg9gpRAgZkDCg5se7bjrvnR6gKLcb",
  "key22": "ypbzetgsUXiKuFEYwD28Vtq2ZsLWVu7zjLG7NBsSahG9WQ19LqFvSVT2k3NDT82m8JvqNn9g5Tm6Kb1EwosmNdP",
  "key23": "2gydiWabDrwF54K1DFiSGrGhnGWSx2QRMzNKrKHBMnRyZBsLLWiYv9xPvqupELPtxSMukMR6RNNcrPekE4Ubh55T",
  "key24": "AQXcSvU7RaGkGf6wYYX46AGosGDm9kNZiH3mib9oK2Ry2Kh6DujZ8f5SCTdVPTarhxvH9MKVhyKuvPGRsTKeEGf",
  "key25": "2XHkPUX9imucENCQPAASuJcQ2vrBj1M5siDyNAk5QuS7Ue68j7hXBfUXyFFAMz9DRo5GAjSGwcDP63aKpvJGyTQu",
  "key26": "4jbSCndhCGZSfE4jBPQBAmSpvmyGhg1gHHF4GPuxxWamENCPd3JW6XHuWzEoJMrWMKp6d5qn64HZnkS5Bff194oz",
  "key27": "3g87ZxVEcwYgQb3jXsxVVQ3yzm7bCvF9wKersRYwQuV3i9uThLPZPKasjTNvSSXtEbiVh2Gw91PjwAs2n9DENm27",
  "key28": "cMNxY8xZ2MN7TGdXUfEz2ryCsUkFmaZJCPVXydv7qSngQDjnKHyKS767fFH46xWkcXaLhJQLnMRQycHVRyDShxE",
  "key29": "4LLpza5P1jPpTnR3sgZUBpPHdfCX7hLoh36Ayhkbm4Wtc6UGu2fdXp7tZBRJioB4msJf6gRpSvBSHyJTSv4KSbG3",
  "key30": "56kTZXBhH6QHNPXHR6xmc7W5VLN2Mg4W6Rb99yAD4e5r9asQc3UVRJbc4Fr3RkjnnbmTanqp65SrcZvQw9r3tYMm",
  "key31": "3S5yqtQF4E7MPbJyNqP6FJK9kEM2CAa1YdyJnL2XDnUkULcesRJhuNacjQT2eWGGR3MEmxUqn51rWvcdXhqHA3n8",
  "key32": "32PY48v8xcbSY6RKkY7qps6iktB4KoiTHR8qBhWf6ASYHqfScLpo1KQ9PCT2zVskAxAJ6a5GHgtoGhzNdQnKhnwy",
  "key33": "4RqqiGyizstiPgnFmYUcSLgxS5vZnUX7stJqhYofVx48z9D4cCmCrNw9vJf9UXReDdMqjP7EGo2qCrn1ejv5QxoL"
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
