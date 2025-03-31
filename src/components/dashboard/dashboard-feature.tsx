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
    "5fEaXMFnPxnFjjJuS5BfWGgZkBkbR5RvVSXAWs6E3iCQmXmc9qJ6q9WSL6GNFwwuF4XNbZh3Y4yjmfWsURX8apJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z77pt9urYpoVmTmyVTnJCu2gSovSzWQ24oPKpiwV2MWHe5xhQ8xTuAArNxkUQN4Ru34R2PZxPu8kxuwc8fx7TEJ",
  "key1": "46PtuWU1mUgg33417iQvYBDUPJVKFggFySguw2Xawx2NJkCPaKJxRdoXSaakcQrq9KUjS5ybvcMyT972aNLAkSJq",
  "key2": "2K9MifVLekMJJKQ2AUxDbnoVgjieb16CaLURLi8Ax3g4uwBvNbTL8Db8SUunwsTEwjEn8JCt7Kt23WYcKXPEsqe1",
  "key3": "bhK6fXbEHZzDxufs4z5qXFg2WgZZnbt8czbsFRWAdL4euCrWLRnjeKSQdTjtJWbd64epo1yNktNxt6d8o7adocj",
  "key4": "4iFYVZRvzjVZUqoDyMKXe28k7BGP7SPAoTZqEPDT3NTxzteJbQk1jM8E9jCgNZZMnENVmZ3ULkLKZD9N2vTyWgFW",
  "key5": "32CB9ikckCUo6HwCoL3rspctWzuNX6fX6FgDWUDYuDBru6Hw6qraHmUcxuPgDiTj92X27JQJd5XapKWEich3boty",
  "key6": "3S7SwXNob5t6qGrx3VhHgDZbk5DyGnzqpTRVm831KnsVkmrTe8t8m4exTF7wFG6FfZWcJ1pS2MHt4yMbqa7Hifj9",
  "key7": "Ns5kJY1rGbsqoxqsidorRns6Tqjx7Zsge7MKQxCWqm7PHjEQomv6f6XTABYzLKCVdnahpSs6sKv7CKnLnkJGpEH",
  "key8": "4nJzC4ugzSe5WvMDdHo6MVnhE79pnVwtamgFoZ1bpjc2SuvQ7y5DZ1DrTbL8qS971xrrDgLXbDcsNN5xFLnFE4KH",
  "key9": "5QDiHMMRQ6pwKzjJsch78soPCs73aEwKgvUWtv8bwF7XHZSdRBKyTU14qqScHqhESkGYYgRJN8aMG5PNSB7cqvpu",
  "key10": "29hgCfZLgxuQnPKmkNDqvWSwoFTdcem7JNb4YVD3WQSzZjwQRRZf4G3xgV29saiqcm7QfrbKwkSC1Vn5UpuWuRwb",
  "key11": "ZxqTVFCCxVUYatcexR6dKQuLvAGGemYVYbn1nrihD1UUqMV913FsbtQi35jXZm3tYE7YYfjyfeiowyVsEN7emN6",
  "key12": "Mu3y1eq8paZ73qn66WP8NAc79xSqQ4pqyXaNkR1JnZtwJooFdNpcP4oNyNkaunaVwxN3mfe3DpHyb8kRYVMsayG",
  "key13": "2crezYxtUP1HRawJnrhKQjFGbnHqqJdxN2QRUPte332bQznMxs9XLABaW1YN6LkPUfEJQnnZeCQZ49psEeFQyU8d",
  "key14": "39aDzdBURuGbbhNZjytGnyLHgmkk7WKjXFSHzD2ku5w5HmYeneciiSyMHmo61tYWG9c81H3kurLMfSE3BxqNc8rM",
  "key15": "L2oHTmb1c3F9xZdvwUX4rKqgA3fspUicuRycL6X5monzRT7wELhFNnKPGX2SoMM9mFBDbxizK2zXGbheTf3cXTz",
  "key16": "4hC6s18E3gUdz6T3GQtoyQdDqN1vBKCAoEmJWhjTUrJ8zvDmnJcxQQDBfmubujPLawuZQSQT5W7hYVJaeXf3dLNi",
  "key17": "65tKJCERGLCKM3RPQ37KGwWZQ5foj4JUHpi3fBAPTcUJLj7SgLZ73GzegGtXonzfqi762oj112NNu23nUHcLZ8dR",
  "key18": "bJAH7QQkF8zRer91q2VsqNXctsZXhQKq3c8hqgM3DzQKnhebbMyvPPc9JBhduSr1DmAxchcLNhggm6h87T2rCvR",
  "key19": "4Pbe2p87uUdwsyzi47CvZdJK1Kc9tX4QPiRSoY7D4DTHCtmYjuAJSz5sbRZrs5RCqnwDzTp56PdaC9BdmVwJX2eh",
  "key20": "62oPDdaK5EyTSf7b7ZRjFohgPgoq2Xq785tkKY6wCSJ9fGNNTYPVToniAk6AC71cKd5qRj6CCtZBCyTKFAzc1LGd",
  "key21": "5Y8txAoATiQPJWWSSzpCLT3zwy1RXYcZyCzfjHMR2M7fZBBWJnfSYnSk7c8QD3fXnpcLrfbjo9QF9q83Bvyy3t7x",
  "key22": "4ktp6cRiuBvkNeEchTEfygc8PFcScr5JeCkedGXyQBimEYA62hyqkxhUhwke9hdqbUPQW4xTQHeCRcM2qnWe9Pjc",
  "key23": "3NLx7XC7fJYS3fCc6rgqWKNCSVJhtFtsS4VgJEiVV18RwWN51i2iowX4F8rVSJFjtFc1sHmLp7qdZPfTQVrCVNkY",
  "key24": "ZWVPTX6pJkr9GQCdmitxxBuGQzqXZPDn2XccJ9vGGhmEvaCXHTdUnBSphjSN9dZn3b8jdfqpEbtjDrXTxD3L93J",
  "key25": "FAsgRo1i8gixbZ2FWTLG8HyBn5pqiMmeBMBxXUurj6mKhhJaGXe5uPpk15WbHtxbAXAKAfu2fzLCD12bJCzpQEN",
  "key26": "hMiMLR9XVdSophsAkJLneEuKsW3ST9e5oBQquQzWh66h5V9hgQ6Gw5wj2X9BKuHb9onfRqbXCTsBAxbRmHRFb6W",
  "key27": "4wKtKSQrjHHHCoNjXNsLfsyuD9W7zyhXsQkASiS14QwmwmuBhGoHLj7CbZ525PVyHUXGLB4JT6FZ6AhX3sxM24qx",
  "key28": "54ucvc1cCo6DfKQh7PdWxfBd2VognHzbT74omrLSW7YgoGgTXfAwHdcnr5zxFrTkUMuBS3hLXfB5vxjhq1v1Lqat",
  "key29": "xZRg1Wg75pgaqg9P1pxRMdAZsawxqVYQyMWv5TMPsbtm4h9DMTbRKuw7RqMtbZgVhtfvXdB8NjfRUePh1LDr8mW",
  "key30": "2uMea8LKu9thhz168bLPsnvX9kTxNP7SKdc1YBoM6kPsc8JrtxgVRvXH2J4q7f95zjE5tcLmF4zaZvWzRq4NT9jH",
  "key31": "3ozTXuct2sxLSQzTVQra8RD3Cm4KKTdF8hskqzsYmz7SxvRc8ez6Hc2eecBwozkWeni3T5zXkKVkEjgSz7StBWgu",
  "key32": "3yBr9aDQELBkkFcKaMcnrc4GeLYmrsoB9RUrp66VV5z4nSfXESCBw4kTod8iRMs1Ro43jHXMLP2MFpdj48pKGJXZ",
  "key33": "3EEahP4jLygJiSu52Hq4fB7Ld4aQQGJA7m2R6Joc6hXt9arCQBXRLcWiBCxmBq6q3WDYFJCvNcL9M2Cj1MXXeU3N",
  "key34": "5hCAWsBwRF52htW9Xn376fcwDokByHsU5ntCtk9wnMjYY6soFqA3NMzjMPKnxYL5xT5fWQdU1mUcyjhMCV7sBpvv",
  "key35": "3ezShnneVe5qgAtHipnHnTHAMDxKyYwQTMb9v25FH7q1cibKeC1dVQGpmqkXHMnZvUhSR3nnUjnCNWLZw92yd8Zo",
  "key36": "5exYeZ3NbjSncsiNHBySjmukjE9x6CvgNRinpDLqjg4A5fZfLHujbjUkEWswBtXT5sutqTzB5eU8b8d5cqs5YtX",
  "key37": "2MLRaPNurVb2BR885iB76DT3kzT21T7F39dNJFQpvUohErG1AR7UPhQMU48eMGKZcGUPJW9kWA2MKci15tXHr1oc",
  "key38": "5AGfzJnzFHPBc6d4ayb3jFe2NN8xyYXRHMqiQE5c88YBsup9CZdWBGYqsjkVin5LtDtdcpqHKCCXFmcpLP8RmziB",
  "key39": "VWXywWgdfGxjqpkw19WEKfQz58XMXgM4f2Cw4UV2LS5d6vMvy5NQeQPPi4YK1ogQgT8jXAbNqxX3GJ3PCpw1jJd",
  "key40": "2mXoiWHm8UAwccaLHrbWSs9wSvwM4mwF2rVyoehx19Qck1V8DXP6b6a54so1UpA5iBBLerNsMLWq782vwC7qN2VY",
  "key41": "3x8cosGovkgTajtcVq6KbyiSw3DHRAJGnKrDUJQXLRbNwqzukZqkBdhjYejLYQXzKNnLnbzUq4Uyakm6vzvuJVmu",
  "key42": "5tSmWcNquHB1rMkks15NPjnTvFEKzxq9CTZ1EPvaYgwVcY2vvJ4b6y4vtQWSGapaZxa1aohuspCGnwiy6xUphPr2",
  "key43": "p2BpvQLjNduHu9BUZ5ryHpwB9kpbxGbJ7VEgnjXrL1otCMRN81xY7qetDFsqw4745Gvwbrv4rjEkAFNLhvRWcx8",
  "key44": "JhqbYB4LYTjcdJ74Rf9vJYRXaDfzLnVKi4yNy2CkDnvZ7V8vgzZAMyvxGsCLz34VuFnjhS7sWGmeYp4KwgTJZhK",
  "key45": "3btSu8VPZLzoibd4NiqqWYPjeyoM9U6UkR4YLVEZmQKb2jr67qkTinUaorc9YeeDCme6Q2tF4ewPnwShMfp32xbR"
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
