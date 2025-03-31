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
    "55omEXJgXBSYgNSo9vPmM2LTeGqsi2vwohUa4hSFhTSHkq2kntdhwUSyGiUdL9uDcqsdZMHoK7Ath3jSzx79HFvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cF5cirrjKdyp4mecS3QQnTC8G6d712HRTA9yV6peWhB2sK6bga3emaGqWkcLErA78x2mfukt6Tj8x8v21Kfaxoc",
  "key1": "46ErB2qinHVeJLBXZsbXqhfLyqJbQthR4phxgHhphLPWnUNTrFRnJtTPRW4RBxxrxjitBWX4wZYsHp7SqCDAcaVA",
  "key2": "3kzzn44qaN5LdQG1qsWBPEHZdBcGVS4SkMjAfSdYtHkrXNovN4TnkBDSbYBE6bAdFbcGALbmYiVCGJR7V87ndHzj",
  "key3": "2akcvjWH1vo7XBMw41iy4sbweP69V2ZPsyjaVK8S3jNdy56KAZSGcXzrf2V5sNeRuXocgpZmTaJGczgu6urp2DAS",
  "key4": "5hXaHZy7QHFgmqv9PQKAqCrjDgnuj476ekqf4HxuwuJ4zuQSDqBhTa5VdESpw7MgvbkUHjVM4Bi139vFBuCShHCB",
  "key5": "5RWhqCKUXWPwiBoBYsVU2fNR7NrMsbB76CauSsZNbFn5zejxfruaswKMJq7hA3P8K5QTZCrYL3eWe627LQohTHLk",
  "key6": "3j8uhqHZtaxVTSHUq6NssJJjXqz2iPbrZn2RZ9n8bZpZTeuipgsMeycUVLi4tRVXLqrKgzkPgRWnmYomsbw4Auhd",
  "key7": "5BWWmBYDQCfiy1kNNxEzeAyWBvUT8qKsGgD5jAydVdgyGX3HsMwLfqCGtLnhYL7E5xVN9E8YnG9C91copNRAdf4m",
  "key8": "4AgXufQfeSRzEaAPkMjttsym6R9h5N7eyCBb6CGjMCm2W6owdCjWTPgCbGMrpAdSgpqj3kuEJjin5ugA6y75qEnF",
  "key9": "3VQ8qtNBMDUutYLFARYXD8MXXac1i7usVdJUHQJ9RKuMvr9QpTxxo87ToEer4UPVhF4MK1P1VwSRrxHaBE1ZsRaf",
  "key10": "LHbM2sLDxnWkT9Zaa3Lp5omVMwarD5ibyu5uoRu1sWuBxBWfSQTdi6poN9PhHKA8ak7Z17xGhMMGhhCsfdTEAhF",
  "key11": "2DuR4c3Xhm3Yzr7LjnwLCc55WQowSyGSzANHNTSGVHtGLHmpDMFy9zum5NaGdkRmPT7YDGpbj3MABnPrDTvaRHY1",
  "key12": "nY3fXTLcwF35kFunBbUKEdLaeKdoPa9PdEBPNg2Bn3S5uEPaP9v1PJdNQgFrd7CnXEbGfrWzt4gBGTMckmCC5ew",
  "key13": "5NZBF51qU3ibpsjmxNUSEkhfdUiY3sMoBdNvsQK1edp94i7ecvtJBZ7Bym6janfKEgUQt5e56NQxhK8y6bCzmrAq",
  "key14": "3CzHdwrGJRwvHXYyN8otMVxViXdhY695V3syvzu6fVksGPmnKB5BfJhj75M9ga9mCMa4QCW9MN4oMwN3aA12jX2X",
  "key15": "xqv8jjBdMn7tduyDT3DBHmEJ3pAieMUKtVTg291BiZnyU7e6yegLmGFTCUVAokmJffGWGh7RjfoBVCozn2pLbkX",
  "key16": "2ctZtGKjvCDotojeD7RZesSKedjkdjuGS7yYvi1pDP7WrScp5xjc5QFaAzBe5znuSTwaUTr98jxHjjQMBLdWbxwJ",
  "key17": "5Gh1QB4bNtGnNhiMKgBEn36Ho18axGErnJ2gpwdGkjhtmJyVauCDhcarADGRj6FaXYgqdmLKHw1RrqNG9uMSgwZW",
  "key18": "5Nt86fczw1iPB9vz2qV468PhZTFnfLWzN55mcrXAAxETHRwtJUthiPGNVhTHzW9Kgiiyudy7HXex8hd1xyC4mB5A",
  "key19": "47VDuBxbQZdLwvYkB5TMJf1ybPJQKewcFeammU5mVe9XGEb6FxDv1diTs926GvShYWgVDXDLRSf6K7hvQorWreZk",
  "key20": "29DsrjpGtMqr4YbDLzzGZ2h8qH1qME9KMeTPnXGX5MAt8yFzZJShMedzRDHBHWxA8PehW5DE8JzughJmoR7h85Ps",
  "key21": "3jkG5NTTVZ13aEaNhm6g5ktefBM4k1Z3xBny9sRDCkGaopEdAKP2Y4piwW8yKQfmbkgmWyWNk3YLkUvGv5ZxXPhM",
  "key22": "2RVc3cmjqWP1TSJvMe8v3DUCysaLy4RcRwBN3vmG9UWKKGAhd22YEQ3MnWD4wp5DosGcz2QYNYV6NFP3UMweDseC",
  "key23": "3Q5ARdFn5c1K95qGzqAN7u8AHA2i5RJGMnDG5jJTRvjwwWQwupYLwnd5eEXfynRWqih9Z3wAAE7NcWTKcPdrVpRh",
  "key24": "49qN2YWHykooqoitcp2f1pUinY8ZYfDbEPfasdZ8obaRnAuEqDmZhcGBuC5uNSb1FNBxDCiQKvTPpSWq5peCXicV",
  "key25": "2KbE1XrMnhxv7DRfYxfPnKYjDKD8oWgUbK2tQDxmTDkQZhySEvFEdK6B63Z2G58ZqRwRvYSPW2mLqwURUUyS5V9G",
  "key26": "2rg15UkFXnPWarHvW1hqKdAxksqbRtVoCGvxtwg7XJGLLPKCNSHdhTMrYvdrGZg595HscZQpTnA6iBq5tpMQkDZr",
  "key27": "3ShxsFc66KPRsuQC7Py4fm7QhJppYgy7c1qU8KpQNfJiTYgGaWXHWUFQMPvdYYDeuEtMx8vEEk4yTw3WFg5VEkVM",
  "key28": "34CMrfMbbeVz2sZgBoj3wLcL9XkLKijoAqDzodgCWGpU8MLErrd3FPsG7QGdBM6pMZcUpT4RTBtoeczpHBdhz7yk",
  "key29": "4qfXbgHWSkCQJsgCgmLtZmrpN7RDd7Cyp6yE7ZVTs1PoVHsAMM6JazivJoGWjNJ9LYBXtVreBSRMuGogXpuDLSrc",
  "key30": "3XAfC3fobr49e3vcyDwaFp9HMbz1BCQHFShkXY5JHgu7iERrU6ZEE3A1wsLXmd8aRLR9A2oznGNi7yjNHgRHYr1C"
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
