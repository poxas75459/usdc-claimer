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
    "3RFEgbXsYV4B1gVFpfQnrVfceKS6hoqbUXqC5WmCYHctkZMHqsrhHHcuDJpPmKJbKz3d9p9Mk4orHMGy6q8SbfUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NKhr2yCbdk1Go2s9wK5BDVr2YHL31GwRXXsxuek1PpbMcbZx7PP2rEcTeJb1ggckcVpN29t3SBAPSyaMQprm3p7",
  "key1": "2a8kqghCm1ur4NTXgGdCopMfP99tj9gNBTQaDEoYjmpo6oGJGgyXG3djxdD78m9GBiPp2CLuxjLtgYt7pAuP8Drv",
  "key2": "YUEThv8XurhEF1KgnyjSJMhqL2pVtZBs9ks25vgCrV5KhN8FNNgrzQ34Ay9RNjR1QefSuhoisr5JzTJRSH6cwiu",
  "key3": "4QR8thADkkNVhduwAJeEDdCx5csWHmDmwA8EwecS88gRoYp8k38smeKPqf9SSv8T2cZJ9Z2jxqagXKSPQoPn1eHj",
  "key4": "4NKoDQ3HK7UbEBDtouRquCAB6m4Hpbiv7cagvvURZ5NN116wUrCFtjjJb6Y4nJfH1Sns4eNyyqHzZxJM5yXZJpoS",
  "key5": "4uJbvjcMAUH145XddL2HECrwrJERCL1fwvthfdgKJG9XSf4W5vjty7Dsq8GSSP88cgFikXqVRRfwfdHnJ1Sat3pn",
  "key6": "3Vvq6Y8VsWCQPVHVWCp7yFdGZFj6gGZi5oXPxRJjuuXBpD6seqDqkGftHF6zhfgXziQD9ydGpfdPWj9ESvW9dQEG",
  "key7": "XMJ1tgouBKFJmY2vpHTVHxs1BkDfPhyCZyFwFVumKwssPRm1GChwSaMeeYmTsVfJ4HR8R1CeVUQiEFn29txp6Pw",
  "key8": "CymaM3oqhC3u4e3qJ1bvH26rDaBAd8xqfpUtdnWm6aFtdQ3iUwS16PZJNPkRbJmH7pGpTDmCQ6bcP4ou5Q2TYRE",
  "key9": "5rfjuS127s3gjuzjYF7op5k3H74CRwfjh1VcQnWkpjTVGEz7SyMNt8NpP1kZ2tsCumnzNeeNjE8p9AT89RtdRodn",
  "key10": "31SQB3HqV5DRHCcivbnZ3hpw2531vK2znsRncBdRrghUUCkBJRUYm2rXfQob6W6FJApCLppZuzAq7eqX6z1FHjsz",
  "key11": "24X3fwjqmzYiRYcu3QZGiSdT7RpEBkiKr3E7aEcpaSw743VcTxL4St5w7KoVBpCpwtGU18sGcGcFGH1YREDqstpi",
  "key12": "5bJPhDZNLNkubKgdWXUch4BsVGLje9e6wtcSciYsAsUYDMwwBczmpUKkvQCAfYL4p9wXNntSoV1xnuGceqLBCWn7",
  "key13": "5ES9A6AKyxJgouSHQZ5mczs48AZE6qEsjkGwXJAdH9ECFTAyz7QLn7iRDeebbmRQVXi4u2gQTTgpWK8Uf8WUkdFF",
  "key14": "67WgfbDLWGPEdwnnXBi99AxtuwUNecUBSp7BKxaCHci5cowcSRm9DPCjAZMx3uo6oeREQAPKUDmAHoZTnPyV2E56",
  "key15": "N4jboaD7U6cM7YFwX9tup4U49zAFZgcJiaAw66huYXMbKATqbFBke8Pmr9XUQDrx6BSNHPhpT6yY24GccTgihw8",
  "key16": "3pdoBrnAoQ2nsx2wwcvz61ZaLoqqoFnzVdk4f131Vm9fCM4NoDbaYUaQ7hsUutvZQGgE3hYB3WJ1Q9XQC8N6V2rM",
  "key17": "3oHQNWuYBYiEfUPyZaqSAgYzj38L89FdSNVeLnWGitSz8dVRS28pzJ2uHcLpiSp29fFCa7N96sa1nYmrBh4JFXAF",
  "key18": "2ELqj48Lnj9TAfjFDLT6iSCc1ZH1sfCpP1DNngAwcCwbDJFwnTJdt9V6NB2HmqfMLUQDvxNPzsHwc1X1JRxywaZx",
  "key19": "3s8YexZMHp67UzTuCnCYLNnvbo4jP8ZShcAQmeKqBKo6d6oeKjet9NQDWaY2FB7fcYzKE39YTJrh6kN1R1KQHzhB",
  "key20": "3ceuSJpteG4K3rzjRFn3MtFewcRGu4sjQfmYuDsjqzDcMaMAcQdAPszSUtzJbX1aek2nJMw9EqZhQPjA2DiF7qhr",
  "key21": "RFAb11ZJxRVSYPDD6JBUmgyuL4sSuP5rmKKxYVoRk8tJokedRq5j36nVFuVdh75LzUiMvXnNinV8nmQbGDjdAEk",
  "key22": "2pmWg5qSp6hFFmEPd92g4m5z69hSAbekE3ChX8ASoVbFNpzUjfvqpEFfDRZNHhJR3FCj59JyU4mXoCXqgMLj4TC6",
  "key23": "3hndbHd8iCvth2TTrTTk95L6Sc2TcVLtVyVhnPcaeZ6GNhcaGzxqyZzTmGUjRb6S4jWujopP9d9PfdamX7E4m9id",
  "key24": "4MYRvd1cUx7cEcikm3fMGpKwcR3nukzbNyUrAacmyLkuZj76w8q9k31qX8tVFgbpEtLK7KgrfNQUbBZo7nzGfWTh",
  "key25": "35qHR3pPwhGg9XrtjJUXqmHQeFJQyCcriPBunEbTQPkvEry75ukL9cvazJR1kK2c13Y4ufpSVHcryvoVE3XcFYwK",
  "key26": "43N3zDBJTvYrEgNe4FbRcYHcgv4xap8UvRFyHDAQSbaLLeZVc4WtHT7cgRG1tmpiFyRdyWhdAXZ8dMu6DMfVfLiK",
  "key27": "4D1rGj8ouhsHy88wXppJ5383vyZ55zCbjLet5K9pEX6x18mxFMcjweNVsSVjy54xKtLxD2ktMVdtV2vbkz7daZUm",
  "key28": "5hMHX5pprNqLJPsajSpswn1tyr34KQRHShbPVRtnDGjVsQHLKGyQ1RFuBxr8MEfoywfz68pzrpbF1zA2iofEehpS",
  "key29": "4zvMGM5BKcUiEBRWS8tiBGics1agm1Qn7ZowoAWVgidum1SVrAUSZC3RQQ62gybSZ5GBL3564E7scKewQ6pWpLb9",
  "key30": "5n8oQi4YMgoLspYsKqieHPq2awez2joJ6xQWj7wVV5m2NQ2pZLkhAfej1dUnSWB5eFjfUytpvasiiKcyQLr5hSBx",
  "key31": "4fTCgzXs6AXdcY2SYq5Cuy28771Tsio4Nv6EBNHyed4a5brPeYZBUFwfvPWL9Xo9aaqCCinkM4o3z9NQiYb7fQHs",
  "key32": "3M6ptPGnuzJWYcB25YP8ELTEJmvn9QZLn6rHoYv9oUoKu744YH6d5NQfuk8Fs3Fjipj5bNpwPLzdBBuwnF2ztcgQ",
  "key33": "5NTRZV3WsngEQLMU6aWpNtKqFywNjPmKKSVo1iJ6e7mi46huTcSrJhFVzxJ1XqK34eZgs3aXcYcYBeYZwdiNgyLD",
  "key34": "3ezkkAcWcov1wFEMn7CMFuX296trnPLWeC8bKNquNyRypyj5yUWxg2BCiyn9ZiVAuWBpKECLQtHVQ5FYx2YMv1qp",
  "key35": "43PbyuzK88GNWt4q8BfnJBQf8FTSd6sHs2ryazqkgynTjWzfbgU5KSQUDWa64FCTB2bCjT46LiRqhWkDFwCjYwvR",
  "key36": "4URaShNKEdqWSFcfSigbB8MZ3xJqYnGwzjJqaFFxTNiDpxZ1Mm3PvdHoodKikFrkMrMSp1HH5kkamePyBcLvjrfr",
  "key37": "dbr5qciLpDeUkUtnXeort9QS6972Uk9BNYcAgvRzuC37j2SXqfNafhwBKLiSbDrvaN8ZnwEbT24datVCPLrypPm",
  "key38": "1eLVm8K2rUTSC2pnFD7tdqfjuFQcgG3arhvWffshUmLr2JUL4bXuC16vaiZHMiwuFb25Np8fmo8N6zWCtLbgdUU",
  "key39": "3NR9KAe92EvkjWebj8Xt7g5QgCeFghntStwegczJBqioqiSsVnPa9kWN98h9MZXCkeCegNByWmpwzeJaMzTgJ816"
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
