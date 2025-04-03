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
    "2obDBxYSc8bDVdZ21ocfcpDnpnWycoNpfkYu8pANwbVjhHKaLcjUJSJowkDdHiALjvr9N3sWvuPeup6mUnfGMAYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SkrBDykowhSj32g7HDmd3TPCjRaiYPfjWQMbBVfK7YrKMG8hcTU9dmo4os5MVGT1Uo43LNXxdQPzgAkDTBwEEns",
  "key1": "31EzEGnngo9VFxbbfQaaXW1PV36ENnfmEmmunZFMAp4wgznhg9hsXTtuMeFZkMEGryNvJ2SNtYYAN6xy6nSJHRy8",
  "key2": "2b1t97c1DmG1o2Niq3k126j14fAUznw11u6dJbYMiARRrwf3p9rDGC3Hj9HneMKFg8MCZzU6mAWmy1aCso4SzthU",
  "key3": "3PEncHGZph1MWnNKDZi5wjC4RC86DaSbPxm1ovELm26BX3oKU7YCmpA6KRxPpLJBys8ub285cXZjUzLbWsPK4uPy",
  "key4": "5dKCUvE8YfEnwJhaqSGkSft4zEbegrNB9nSEZjMo2NtQzeb2cQmzT75RCAF2FyVWnGwYrCWvqhdWRi4bYs7JkeDs",
  "key5": "2y5Fu4nLrYFT6tn8DuQkpAKpnnouRFScRTKjqpxqreL66zvwYPzQiFhMtmyYDfVo5weJT6s4hJEmfSmUZrMatVP8",
  "key6": "5eaeVUXE8mbeEKuyykR7gsxQjQJGEN9rM11c9XQAYzgrJtYb3uVigbHqwRnQMkLnhzFgjKAioBXQ9Pr5uJFudP2R",
  "key7": "3FMrVX3KFtCfN2mse1eED96LhPjabUkanzGwZdVRgNWBWZf218J5zhPB8M6Ecqt2TpVsEkFFegnYvm2PDzfi4Y6j",
  "key8": "31FUD78JGxpznvRzTvojnKMRKcVhK77iMtt2G6PgsCfvBJfVEFBro28HBAv6Rq8JQizAgutNLgh3GTRXJ1DaSz5q",
  "key9": "53Ub7X9H5KLk5YTYFnZ7bhxWUPYN8v1cf4diAYJdjJ7K831PYMJw7AfG1PXLAzk2G7rtAoPzAFZZZrBbZWvs6RLJ",
  "key10": "4SeHPWjuSseEVUQtgjQo4EchdWWwvY7kHTG1CJQ4PRri3Ax76yTCEBtkzT5ne1p7EV8VkuCvtDmbhkSMFCE1Xzu5",
  "key11": "2C8PDiTd2Dv5X44uxwLqpia7E3UpXx7vstwiUHW7imrugjb9BKMAHt9uT1P5AiYh5sHnr3jxBjvckjJPCNK5xMbC",
  "key12": "ZL2SF1dgGd253EgHF9J64D9ayrUbXwEhgigbRsENSuCRinNycp5JxCFHvFBfGUi7fBpU1EGGe6SkgtsoSRN5Lia",
  "key13": "4w9ZuD2KoCtFc3p3Xm5B2oPRCCY5HMgiB2tJ4UCEhAMq5CRUiYUn34oY38WEKWGYuhsrnDAUq1SVpHSzFGUdZCvd",
  "key14": "5Sp95KHjSdyQMRB1BgLavcWrkqrVW1YhovzjVuCMkwEYW5zDeuY5QyZtknQBKxaDwCovW9hDqBtKmEmYrCStB5S5",
  "key15": "5CWnurWU2M3gC98127AStxditBdQ7bnHaJDuxgaAZdEfCBeEAmwxTJmrQJVLWinvZPb4C1onrm2DnMjFsjfoqGMf",
  "key16": "3LY9AJFsEWWHM4bS86ZvBsCoxgzpFyNDWPqGb4z4nSB12L3Phgm9os8cEi6WEaA7BM4yCYMSBpq2Rd1L3asbQh3H",
  "key17": "2D3Yity3P92RRqwCDge6UyhMy8ZwgHp4hj69jhQeuoDNGp6ormxorMCdzWcxf7KkPoayJMAzJxfWxMfUs2UKy3A6",
  "key18": "2QYcQ9sb7ZqrGmCF2VZtSXdGMaWCjJsvLDWPMPoYnF9oRfrnJ1jTA9Zo6W5e4HEKFKj7GAByLNcBBjesFg3rcc5T",
  "key19": "2krSGAF3UQUB2jTLboq7kLJfujVU9HLgM6ZTgoxreFk8tFTyVcGkA1naW3t2nUMBSkbZvZd33Z1jL2FtaLrFXhSH",
  "key20": "64jaQehqkqtMExxhvtV17WRgsyg3VH5g5T2NSVtNGQcV5WEpCbm1YNfNYWBxYFouFXrDcRtHXZcZbNVRcaZGvyTu",
  "key21": "jd8koqENG4feJgXK22FE1Z2bHWp3kVH8WJGzGFLgCQWZETriQX4f4bAmVd1QepVCcdAsjTACEC9SWTnMvHcHuCZ",
  "key22": "3UkyjeuXH7WUuLhVyrDH29MHT52mLeSa9CvMZY3dzn87YQ7ADo38uf6Bv4bD5S5cxerKTYyuD5CG5ZmM5kKPXopX",
  "key23": "QyGyXyR5teqkeidVFpdha8oZqud6WgmijBws57spdLQJBXdq63Rcg5tvijG28bDqruau2AszHoxvzvFdRzpSyBu",
  "key24": "2HqHbj3zuwkiERDM84KHcJQxoErMvPD2L4JHcJxCKDrydPCJ85LUSDmTBZaCjXgdcBUqe545fpJcXhqvADtE3xeB",
  "key25": "34zk3W2wzDWHuRCif33wnfPW84oorQi1Byo3f23A9UvdGtwdXBNbFZP2Rfj8zzfAmKnXZGniVuA93sJGm4RnHWKY",
  "key26": "5FRRqp6BYN32gihX4Vy2suyBRthBNHLUDxWNVgyzadct7TcbvnZCHSnpzNA7QF7ixLagKVHpcaMDw88DriHNNu5F",
  "key27": "3pTcu12pwrBR8ShBaruQbWPCu1xX1jRCL7p8YXwF7o92tnnvzsePPJ1x9DheCBLwXx5ynkjGyQcpXXEWAF1Zhzap",
  "key28": "oKKJmvf65HBwiiKwFX4tG2X8khwozaR5AQyEUJwB8GrX9NDTPNaHv5C48WADPtxVFj3gRmbLzQKh4zkSfBH5ePq"
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
