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
    "FKnBeDva8Yfmo3iju7uegAv9dAt5zH2zUdbafPUTLJmK27Qoswpx3xeNkuyWppGA71V3MATGMZLSoQvQ3UtvrMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cGSEkCeat7RbMRyLP1Uad2QYNavQ5yYULtJfTzeesMJ8XTcrLmJVBfEzQWCUC65NzB1yhByUA5P5WmPM7kWLzjt",
  "key1": "4N2J5yPdV8XRbRrZoet47bnYbDr1Tksrvo2ZM6s47LqnPmNV8K9Lp7GJifjwTeqdoA9SmR42ZfqaA5x2ZeBDEweD",
  "key2": "27hGBCACgLQDRyQ4RELhPu273XysaMxB8mWp771TncMNtbDtRcKcDgWu8uXCVmDhe78xEJvjgKkwgSVdWi2oGmqS",
  "key3": "246qyjRP6z4ALP41UzUfstEpKeQGbjhWjaYZn5BFZ2VQqTWRhtwxrUPhKH2i7nxiJYSm8TJsMNoZY3Sc2TXysL4d",
  "key4": "4ZoRJL7An2Zb4NpJQ7konZpZugxxeRM2T8mCz8BwmRMWiharUz1nigWnh6dzGwezuyjsPRkEf9cVaP9ewF23Qbbc",
  "key5": "22EFxXPPmCooC2iUkxY2JeLaDKfP5zTRddbhCzT5sne8nNDDCvBmZnUM7N5LLZFxK6ydznKkkGAtNvGcjLNoTKbK",
  "key6": "7i4WEgUsShCqshQ68e4qXWrXCrB8T3kbaDsbYDt6ki6gp3gp4Gd7ZHwYvxbjji9b1sFd8uoyVeiaEimwaRhVMgT",
  "key7": "YHWcCRJo4r4BRsndUFs5h65NmSBAnVHkMEc5aV6xdNvy6S6oSPsq5x3U3PbXJkoRpcEqGh6vwxq4T2Csp3thGzr",
  "key8": "4xbgxeLfRSJMGFa1d1pDBDuXMYxtgieyyNpDE4v5164wtL5awjaT34X5wdhRkdsvawgwTV5qpLTUwA4TtBkmjSJd",
  "key9": "2tWgkW8EYp7dYtwP3cSQGo6MBt2NpwLipk8215HZYT7XqBmUAy5bdGRitLQw32AzVv3Gid15HmhCWPKYwipECWVe",
  "key10": "5u3L8RCji55HgRVrggo29HYt5pwUMg3prp93Ta2TEV3kHxiczzUaiRyn2KLin3e2CDnmoDfrU67Zc1KgvjrTKcWM",
  "key11": "4A3kTkKF25dgUQKWATYiFTxABNmzbsL6NXRRgv2LMXR95uPuE4bgYjCQkdZJTEqxJPYyi9w3mduUMFLSpGmUBF51",
  "key12": "4e8iafB9PZJtHxB6pKDjYaSNWv2LphZZYkuce9by23JDgvYtkHDFCjz9FFYCfpGcxmpiHEg9ghvsen3pTec82A3k",
  "key13": "5s6vyx8JbhcH1RVKthdDx8C1vLJmfLjPE29scU5ajcwQNaiTK4be69pkUpGrWYKehdJ1hmyVqh89gMj4kxGpmcCq",
  "key14": "2HyPs5F6hAUbUydHVMBnHkrzCe3TR9U34QhAZ7XX1he7zWVfLcwiPyk8V5QyJV8Vy2L9pkR8TzpN2bNjApfgt486",
  "key15": "3UYm3UoStQ9Mgw6oNUG7gRpzDAPM1zKuwMq98NH4e8LSFhvwEXXMhZNsERaiThboTHuuANeLfNoGDyJwRe6HM1tb",
  "key16": "3qmt318zXu2yqgFvr7CSqjPTTGwgZPwgFnDQWAwmp9FdS5FpFYrxZ4yrWjQxWSeEnjw7CvKhMLtHGD1UnUvtzuvS",
  "key17": "46kjKcVAAozb6Wi2rGdf8SbxZEXHNiL3JYGbjhhwEanfrTCvtYZZK9uBVdMihe91SS4LTs8LE81k8fcqrj7dxygj",
  "key18": "4rzNECv6PZTetRZwaLEEJTZ6tRNTAvZR2uGejvBAiWuygumrA3aL69zdQruNdt6ZBTTivbggTvMufXFZ13xGeSo",
  "key19": "4kHEJzvv2bJHgwoSV3ZAt8SgPEwahQa7wazxpem5Xs8PQGVGmLgovBZ6Yn5B4rSYmj6VrU9fXtasUc1k6Fp94y7n",
  "key20": "2o5qGKonBqZbzSvmhAtsEbxyhMNSV698D2DEhdcVHFN9EdSPvjrrnHD5NZCMZJ5NQDid4DP16wmZJbfLGHFuZUQf",
  "key21": "3RqjNdSeZE733ueSovxyQ9kZgP5g5WRsrFUaTincWeKFejNPq6kddZ9J85PJiEbbND2z2qYxXWb4chHCbXtuPQ3h",
  "key22": "5X1RFXxgMPeybpNPyGCjJeKY1EbFMDdesPdt8pmghgWsgruMRDGuEHz24dW4G9onXFXkaKDAHQJL53dP1og8uGkm",
  "key23": "oiZH2bC3ypqQy4ZDWene4TghFJda2uCD51fg3FerVu9tsrNATXGk1ErafDB7Zz78YzX4Fohi4TKCQ8CefdM3e4u",
  "key24": "5nwiqaTPrgpR3Nb5rMLs2fKK1RLYRbJcWubTLjVFXJGHJwgasBmHo8MNBJnCEMsAbYs9PNdhcc5sfz6fe9bY5bs8",
  "key25": "5BuzFkJSqyvMEpPPbDkCm5ot337Cb48pFHVVEXfcXtYnZHUmkLdZF6EuhmKPxtFpEYkKJBMFyvhALCSUSBxg2Dwu",
  "key26": "GDSBoieqdEUWuratSTA95gJxrFdrbfZXRbtCbHyDqPwC2hQBxcKEUXbkX2jwwTiKjrxFYykmZmwTNnUd5Tg5KQq",
  "key27": "2voyjXWoR86mxgAuxCUhZ27HagpJE5asMeihcrjHboHSwXzfezweXhY2PQQsbXy2S1VpgchD14WsheeLME8Xm9Pf",
  "key28": "4jDMoGFKWaQkq4GCgNqMbQn4d3HLDe1ccgQ48tpJ91iHGFPPXeBX5RdFyMpf4VjmfNagMqJ5Lc1aQxDhYL7kjScD",
  "key29": "3jpiAHR8dxqx8zL1vaKLmZDKPTZKxENDnERjjiCnKMgFjwuPK6GSqkfHms2U4aFZzcxiNaW15U1voQYyHXkY5RFx",
  "key30": "gdNBY4kfz8FDKAmVqRm678RZ87kGUAQwCqjbi4uMfbwfFAfj3MCv16LmceGswHg8qx9jBngJuEEdMQYb3PmKXnK",
  "key31": "4pZ9PrpFvv4SxF8qE6ciScGxqqRSGz2t3Tge2Noar4vupXuYtEQrrf3FJHKKquyCvCtrVq8puMQA3mE1eAGiDtK4",
  "key32": "5Th67pAGfAUXJ3ZJtkMvC6shEwBimJRJKXCMyzH76wWjuMWkBChwoKRd9qk4ZFQvVXxXTmPvtZYTmsYgdEMnHjG7"
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
