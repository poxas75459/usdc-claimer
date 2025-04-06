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
    "5164HMsYr4NHCv3aTFo44miGejbVqDRmpTP4Tc9ZA2w3bjd6eVsuhQZbcGpp5kiUKuTZ4w1v8KcLaKPGqxd4SgY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZNxXJya2QPa698JrhwdYd9NdBB6dExZ5MkkNkA87HhT1HA8iM3AAgPrDL8fxh7EWpv3D18eaS182ujWwEPSDTc4",
  "key1": "4cwRrVvGtcpPMAGLTXnJTS23ZLYnn5sLkW8LQCavRqUifSqrfVRx3wWoJDezdMf5yrMntQJprK6mnzb734tpaoiR",
  "key2": "61MMNTEmVKgGX8JHk7hiYKihHhy3Lo5mdDmNGiVswaqq1bGcVdxYaFegaymgqjo96SqEUb4RBZK1em2RJbpqp8w",
  "key3": "2iCc3V4FZAcEAC2ZmGZ4yAuvmw2LGMYMuTACjsQv13L4E4phe2wWo6Zn7JnrGuoNxUZWyhruAcyDs2HMbentYTQE",
  "key4": "5PfKTduBtf8hRjBQQ8PHhg5x4s2pJXPwMcd79WZFWp4Qox5ZQ7heKSobzhEFsYNZoA4Hu9sBfi9BMBLrZY68PYyR",
  "key5": "3KKdYGnw61tuVcDkBbARA75okuCLoZFRPB4C6GQz8FYKR5emyETJA5L9QnjaVp8uzvqJR1uQz6WsAGbUBQ3Gymro",
  "key6": "5CSaLEiV26dkenDQ4hthe4oSnUSnkuyJRwCWKLSRNmPPdqCPmH55TzrcgEprPYcnc8WQaH1GSpUNmX5waBCjjJCJ",
  "key7": "2MxJVFCttLz3wE4tdbYPaRtCts1RkU5e1dUiVW3yVVPUTauBEGwRPd32JDNfAaxofAsBFYPxXyjEyiYGrXK5JJgC",
  "key8": "3MLMXBsp966udNhzBsytwdbviJLYEWVCAnEF2AiVWyQHX7Kqc5DjqLDPK89Ks7F3RrHUUn25bh7CNLDU5RB5h22G",
  "key9": "fSfr5VhczNmZQg3peF54TfteeSjMFPYUBd6SYqje2kToxo7JELrSBA7xvRQB7GqqhyB7VcEV7cbGUecCZLETJMC",
  "key10": "XX6YboyrGkXU6qzqvRJyQw4PfEPqV6UWdqsnLZmPHGzQypUbyCbpiH4rnkfSHHzBHEY1YrQiefjbVHeGy52nJLr",
  "key11": "537AJfk9X1u7nDb75Pz2Bh6Y86ZMQyLnWC2KL33PW7Pq5UQLqecfHrkzETHcTuUdJANxQSNrpAz1YdD7jsZPvVE6",
  "key12": "64zsfZenifxbJ3EAGNx2sxwux9udKCeBgsvAe79iH8S4Ah86DdVDpHoj1E9ADUYNcV7rvesPHzZ1EbLrfXgD6XBy",
  "key13": "4328gLLYC3aBfE9DiqzZPMA7NoYzK3T9837wC5eRwjitDv3vc1fkaqTvXHt2AtEe1ZY6oKPb1q27CXZs3XZHBphj",
  "key14": "5X1t4higwtAdWSDP49hnXbGLnDYYTsMoKUw8AMnZqXnJKBmdcjXYGrDfRGTbY7Bid6GNNZgbZZ1RBsr9DHfAzffv",
  "key15": "4y4ztgJoG4hyUXC4pkLKWemXCtGvGxL9jnuX7tGC6Ckh5qSPZ6K24FS1VKMdQfdqHUUsHymhj5odbpZpkY3jUBXe",
  "key16": "CBaGMunpfLnUDacJYdB1vNdsjmu1MbaryTZTqdtnDb8VHjThVcD397BFmk1UMWgZpGAYU5PiXZAC9V35S5GfZ3N",
  "key17": "2qGeXTefu1VziabYK8KxbeE9ywCyrfrq63U1fyjF2nnuRDMAMJUPFnxoEELgHH75YrT9U9j2pRJVD8RuLMzSRWwA",
  "key18": "3ekjvepdE9kc43LJsLSmNqoUcMXMj7sU4faMDd83oFxCtEoqMV37KXqmUqzAHZE6QhoE2NQfSmcuLHhiWBmwbt1",
  "key19": "7pcbs9Wr8J8xJjQPqxJ4E1WT7U4pNituCJnhVPQBpZMiAspUUY1rQhhfj7uyaXuKLHR7EzgMYcS796EeMo63ryB",
  "key20": "55TmUg2w39r2tW6GNvxwHNMebknYReg1MZVCypMiZ6V2Cpijm3oXt6hSdKYtzbfr66AdKj3tNqrqZ6TyVaGqd7Pc",
  "key21": "3fjx4DfRATVFupcSqiZuXwBXsSABYzk9pkTKRkfrK328tp8GodDFKvf1YAxk9uFtxT2uW7cMvW3wdH7zut7MyGKY",
  "key22": "doaaGzS2hQsJPnXYYXNZe2xHwvK4vaWkBTPGUs8Xf1vbfW4AHEN8djjAeQrk1H1zKv42RhaacNz3E2L9ttd2vH7",
  "key23": "3fcWsjh56KJgFm59BsvxFbKyuPEQ9MX33qobQ9hjAhvPE1NzWfT44WMXn3E5a4UhPBeRnHCruHNbL349QEbVU62P",
  "key24": "2hJ6JRxHHD8GqiB56EzGPafcrsxK8ihZrk7xo282HfsDjnaopnKuGvihGn8XL2sT1WZBX9Z2Tx2v9sh7cYt9TeQQ",
  "key25": "66tWvC72oL8BwvL2ewEjVgJzhEU37T9zCtstP9xApE1cHrpef3AwVhapyZaBs5PsGE5J6sBozgawTWhewnTdLJDj",
  "key26": "25KbaENW1998tMTrdcbxRHh5PnPhQYw6SiwdxAc171CL5HPYDR3pTTg3xpyB6n91SvdJ2D7dC91iEQqCVGezfdtr",
  "key27": "4A1RgWDLL5Kaeyf9dVu2eLdZf84PYqDsZMopwSLvorsFqBN39jPZkPh4qMaBjox84bDvVW7JfDj3wx9eyx3VrZoy",
  "key28": "4SqjVkVyv6dNSLMrEef6haPfHwoefL145fqi5pHoubH3ozG6DuHsg9E5DuEtaCvBjtioz34nTR1QrnwRV47DoxYU",
  "key29": "3awQVaYAeQS28Sx1RE1ggpHPC8uiiB9twNLnJzrEyrvrDdQLZczsieJyghUdLgpFPUv7LJP7r2DoHiGb4GCmumCg",
  "key30": "4uNxhETFS4Jb5NBkfUEFv9K4veoNDBjjj6BDHgCQpTVo4L43TjjFM9SbHigtmk3jC9jWZMh4QEPUcCZ5U5CddJcz",
  "key31": "5gm9qBM9a9QvJUAQRZ7zFd62J6MoQHFjAGV1uMNAcZn9fxkLUjKJJAYgSWCPimpinUECQQVMYhNJPnv6ChzT1SMA",
  "key32": "SLt9YGRxMXXRZ5iNf4zNSa4KepTeE1AZp6m9cemhFii79pSDzaP4pYW3VEhtpTMvUfbb5qMYXTXYmJXn8tvoTnY",
  "key33": "bjVQEAFUSPBsTioC1paE33MhjSAWCaTWU6QNoiwKZgx8E77LEGctDkhfcWiSUb8mMV5hPXoiixXGAn8REw9azrk",
  "key34": "5CvcbdsJhStxc3hdKA4cstynJtWTAS7bS7N1ii6HnE2dSL5TqyWYn8mNRiXMKfVjke4RnA9CDeHpCQ6ivvHxNCiP",
  "key35": "2nWmpMZKcth8J7Sj6mF65EVCK1MfUT5FRZMnf8XDYh4vDFQu3s7XP9bsnS8EUS4e3sJsEp7kfE1MEaFjwZHJQcYc",
  "key36": "5EzT4mrmiwbWy3pcGGWcVnypngqEuvUnniFuTkhVnLcA9qJ71s7ELEKnE3ggbH2Yx5Jsr4QLhL4qUt6k7nF29Y4h"
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
