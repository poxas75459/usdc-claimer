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
    "eM2bPjNYmNPtkb2SPfy6w7R7M1VL9ByuZ1RHisRzyCcNHBKcjuuJwmwxdqyru5s8uWC6gDFZwuHgCpXcN9wgpQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21nPp7yfydudrdwcwT9tU4xcadr2Y84wVm4wxyHGgL1mQFjPPiXyrQhukSCnWcn247G3Sv3HsYbPHAaeoGWZKu6h",
  "key1": "38MGQZgaZ7vgmTy1mPyiGPtdv9yQFPG4XqB41JFbmctSgmndVJU8eXspp7ENYg9xA6fpZHM4DhgLniwo8z8EMjrz",
  "key2": "5UYJXuEJ4EXyzqJJPfZN2iJGZToZtd2jpVL995hhaQaHUpFVg4sHdonUT63Lp2UK8QEZZiiQ6ek1CzqP7TVKoiWc",
  "key3": "3B5qbjAgB5wyYGh3CJfvg2YjsRpGD6rMLsGLksHE7n2vTZRH3k6p4R61FAg1kdxacNVaUe1j7VhZBj9baMtX8uz1",
  "key4": "nchN2gpqQob2eeuCvqVvNFm3GCGcfuHMjrnYSdiDkxH64zBwgFxzienLtursKyGkSM7osyAFopN1ZSQDiyhTziz",
  "key5": "UKkf2fAkBW8CRwBKqY3XHNPrPVNE3vyLpUE55mbVHRnRuCza6mFH3wZT5frEstGqpft8pXfqRXzY7Ucs58VN91m",
  "key6": "5hp7BtMmDbcsFLHL73Jeug9CSveB8TURd9cNf3MWjGeeozNCAzCMU1ycBDKS4fL17qrRAmXszgUpbsGfLVM44W1q",
  "key7": "5mHUfi3jgSWou9VY5rx8Xj3acHRGBrrtnH4iW1d3ypcajyjZuaQESQmt3TXW2TnsR5Y2hfUtbxuaxnd1gPPqX8UM",
  "key8": "28VSbWj5wnF4QzviB8G4r69QF3ZXVgBBWBZ6kd3DfWJNfpS2Jom9NEZqsLWdhWBXR5PkFnqkHZnD7k4Vxu2VGx6K",
  "key9": "4Au7LbuJs6i5DSUG7MaEXuhrMdqnRQ4Cun7RxEDcGqZTiE4iMGdYiNovL81sKCv89AFeAH6Q8aREmP2eF6wSxSqn",
  "key10": "UPpX3eXd4PMDMZTsSkeZ62FoxC4KjH1UU36ec8a9f5mwUrj3ibq5FM72PAA7Yv2osmSW4NFJ5yuQ4uRssjTkhbb",
  "key11": "3n4WNZUiUv5Z7TeyRugqyb6nHPpP5zzq8Qa4wWzJYDfFGWit3LsKfgj37MoB22m4u9M5gXWLGuqGvTqNtNdgRfUA",
  "key12": "2xSagLykuCB5ha6qZToKMT7kGpGcykfBRazmEQtYzmiazcGZNJzchyKdv9n8bAcXngN8bWMNesAfraEJCAKAbCcr",
  "key13": "7rCgB4u1Q6Vm74Q4e9hmymduuyv2tt3TCtwS7mYB5JiP8s2btAsW1SXfkaTufoQHbXLuivXA4JYPvcHaKPTaP7F",
  "key14": "5WW6cXbiQ3XcVY14ethxpe7o8GHKz2AmWX4tn84DawYPV5YVo729dgNmnwr5Rb5XtqMbSTYZxDA3XnsANx5SZom9",
  "key15": "4oGJc5nKi4U4gRXvZFirQVfXTYVVKMifijLjMGjmjvrfGyyq75HF7tQbS7Hj5KijJz4qv2yVhp7UH63p85xfJZEG",
  "key16": "4BmgoWbUEcVMViUKGUDi3xJcD3zLh8dHm8ew5gJwYB8o2pQ8oSA79FEnp6Ve625wL3RaRNSkuP3qWLxVs2fJ199z",
  "key17": "KZUMuJqcYSetHa1H9cGXdwczp3mXGAdeCgepMb3NRoXwVP4a7R5hVYa7sXLf3KDytVzzbvd52Q2Y2Ys2dVhQSRW",
  "key18": "1V9eJQJA9XTczfB1GcgxYksKqFoUPwGsNBXwUk9BXNS8gnXQM2YNQAyRb9RBjzUq2v3WeDDrJ1DEx3cEVtZcxQc",
  "key19": "3obTdFSvKQQZRJ9pCc9YzxRAFG8aE427S5pqUmbte3WkBPSbGNxveEeiXyW3bAmLX7VH8CdWFFogPjp29PWmpjBn",
  "key20": "2ahB6XiuMzTaTAYA7n1YVueExe79BNdDD4qUxk9BvykBTMRVDzRLrrBYohHs856BfbzUsymDdBPfcRUyWdPivzmt",
  "key21": "2XNs8EDqZL2uPSQJ8o4wkKUXnxAaEpj47qqG1dRpAFXZpYdze6cEK4voCjt3MCaQUMdwopxqsBojmZXDB9nWJBaB",
  "key22": "PYxcerr9PQC8xLm2U15HUPV1ZK9KUWYVtj9kWAPBsp1SwmChvN5gUrvV4sN9Q3mD2nKESV9QDUCGkRJubZSCf4h",
  "key23": "3BBxpSLK59pv72AP3QjPjUB9e6mPWE2wEYjeyG6B1FDjEjJv1kHTpcF5yxx8uesKK5Ur5YzoEU9xSxdq7tFTbnxU",
  "key24": "3Pgc5wh4StwSrQsJ6hwzhY39wP4YA8dxdFhe6ebbAvYWcgHE9BhtC4JT7c4pbDUPP7ovGHMhC7ipfHz69ZYK5bqc",
  "key25": "3UvJ9nK23Yv4NbBbRLMsDCTdGSryf9TCM3SA2QFbX9WNjZph8mE7EjMTzonuirLe6yBsD9CWCdQLg6xEJcFrxD2i",
  "key26": "TsnJ8XTpPSwPrExQ6R2oht6ycje3BDX1UecRhYKTe923dnujgyFSK7dFm5ynTJXHpordSLuVcLe1mmqFVtBVe5c",
  "key27": "5CJXuw8FAvhQgvkM8zPr6pQrSMk3ZdipdXE88f1uykaq96JXx4mQbxUhJLGx1L7gBpRZDnnnqZFkubVBeRxXeAV5",
  "key28": "2MSwiFYsUSJpUAurqFbHxakczjLuzeXqzrq1Cg23n5qkTRz5xKPcSBuTLnTqgKTGBX5LexxDhUPJMWoZBNnTBGPb",
  "key29": "Jdb96CZ6wxJAmcBAn96tYvj93gzgkUsqszkWPNcHdYbWTCmPRkdKV4cZyBHUDLTmv4GyznU1RsLZGtX66DrdcF6",
  "key30": "5hs7A5dmd1RzgKhtY7LfLmZPUETQ5NcwiFnZKXP2LdFuQUK3aZXbWwrEnAZQWt2eVmkK3b8D5x5RbwjeK56XH5fm",
  "key31": "4B34RUm9ZX6EthBuBipypZcRzZyd4R5QYZX8JqHN13hvGhhnDRpYK58vruTFpWB3coU8XNFpmmKiVNu5vQPW1xnL",
  "key32": "219EeQu8CuKYozqQtuRvR3kXRvZD5vm3mxTcWXipFXCwHHMYiQChFprqk8gBJRTboNa21D5SUy2XGyLiFUBBf6kE",
  "key33": "64V6yPsZrzCd6EzDwTWJwmMRb9MUoWJACQW2s3hizU7gFyP2kyUUXWAnY2PzcBkjz2gKRNnRY4PSJekDhGbXXwM3",
  "key34": "4SdBsahjeSv3JcjDUVDs8xEoJaVQgX4MKujXbpB6W1tfvAa2W5KCRDZKGa3jawHe3wVSiiTcqhA56pLZBo6zyFsY",
  "key35": "4vetNfv6du4n65nECoVfjoyP39PPctE9ADmuR2gDMGei8FdPP9JkWHjhEonyssRNu6Tekxt2K1Aex98JmtwYzvZF",
  "key36": "5LPZLhXeZsdQr25PUCnWyJa4TKpnFP1PCHkRxLMLJff9xo3o4jrAMNtcgyKwqV27TxQxjifgxSa25YJmkz4y5hZN",
  "key37": "3h6PpNYQMatycwHQ1q6VG3Qg5DsncxV4c1yjzrvnPhmzaLQrQxjxDpSts2mHVcUkT9mbUPCrwq4VHLuWnDTpuRzs",
  "key38": "4BHqVN9NPSR3L46x2rGS9MjSZP1h2RxP5Y9gQAkvkzHwqLEGueQFwdhb49QbAUhLYLNH3w9awVJDtsyst4jeTWk4",
  "key39": "31u8BSRYVs46xrjpTvUKyUgjvQV1kSET5SYrx5fTCwBrkf1QyYDZiYWfK1jLYgS7T4XSivEv6KhK8KDDtG9J8ZxT",
  "key40": "TaVACtmwJD8KtbVLNKp8RMbfKdmEveVKqMUUziNaxqKiFKHDXJPBrtbnM837RbVgj1Geu3kPSURLXCtBtCKh7om",
  "key41": "2tD9t5Ksyhub2wgyuaxuk8mEEGkLMFwmi7rRMK1aAhiRgK7GYSCaehXKnydFKx1owKbfZvMZ39pKQ7nxJmdDCn1T",
  "key42": "5JVTJVSfofTU1fWtjWXiAFbPyncp5kpTFscPEK8HrWEUo5pFYxLKuGLpyzRCFGcJ2bwZ9Fk1bE72tpSsueFGNQac",
  "key43": "4uzqfuBJ3GPV46rod2UanKzG1ByjHaZxngt9h8d1kZ8Mwj8wM45nLEspw3Z5LA5F5cvyCoN7XvTWpMy3skXCfsxd",
  "key44": "2yPHafFF3vZupWGoBUaLdBwtHAiX6G7qBYRJbDgnn8BUM36fqMP1poVVZPGxjUQQyekbUsMT4CFa7RZ1iQYggAB8",
  "key45": "55Bf5M3J668oo9RDjhJfGxVPEMWmoic2kACbYdXtWp8v9sbUi9PYzfAui3tPpEBCaQJh6GRvvZEqtmyn1hbkRdJg"
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
