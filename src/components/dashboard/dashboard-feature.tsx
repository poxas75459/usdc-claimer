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
    "2Tz3jZU1hhGHXQrjiweJXs21Jjeo1QoDEnm4RfuSHsrd6Dw1txZmZ9LZuKhrvezHb2JvfMZh395hhgvufm7EwKon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cs3k16QcnivjQGUkLa8WuSMap24UEBeEJKaxaES4tesqMAXNH53wMaPGb3yeK8GXyrHCTdSEW8f4HsYCaU4tTXT",
  "key1": "3HkwKuyC173GvPxhHyXtrwVGBjAjQS97JfpgYNLromUfTybu8teWCChJtRLGFMVip4SMBSsjeWjMdHWVyPt4XFm2",
  "key2": "4ih8sUYwkjvsy1ks54x1Lyhg3vPqoSUPSCCLAtW7tq6s6L4kT448Pvngcp7h2apvjx3pEfwAHuUHLJ5p2hMjxd14",
  "key3": "2UyYDh6LHYKSdxwq5Vjuo14QXiHngfyFd92e3hSqb1xKzNNxm2fwYFqSMN7y7ycoPsXSgn3cwHDBULHQTFa6YYME",
  "key4": "2jZQtCaoMSfDd2GHtrDRphCZ8t9RzwViHZSbQVFxAhXG66jPxtEePZbefiLrY3w1eLwJ9sFtH1evutzxVySZPWKC",
  "key5": "5UTcppMetX7pTb1vygmaPT44MhFYy8oz9veo9dywPtakezdCScvajtW815hggsj9yu2o2VY5ny86fiK5HPVNFdVV",
  "key6": "tB4mUnuHMyqhoaK9Gj7RjTBrU8bvFQZmRZ55ZmPt2dTrZz2SG4PBEDsctd7TutkzYTiNKyX8sXVRLNMbgybXuWH",
  "key7": "2GiQy5teSy2JViQxjwckWWKdAp3H1aqaxAoxj7fvJspreHbN3LGA8rD7RFebP6HXpmRCWSVhTtZztSUGz1kPSYgp",
  "key8": "2boYJ84utqKBtvJWujKY2yYoJnmduHrGJ9o8aw8sWHAPJ5P39US5yjAL9gpQwNmpEXL4tXe8889pCoDz4PwqWKsK",
  "key9": "TTyuEtzm3gWSFnQmeCtJPKDtTSG54JiMKTbDPkGFNkqJ5X4VmfrHmY6hvHzyFPVBcPDVdZ5KXbqSb5xJdT8Yx7N",
  "key10": "mjhSUcFTC17Jyts6Hfd5P6CorsLRnRgEf3sWo3kiw3NG5JBBxX8VkU2KkicqBtrAHx851sbKnnvLpbKKsNBQPwE",
  "key11": "2a81ARugimXXdHxpTdVV9irc2QgorxGoe43xdNMTaj8nYCpMsxQrn5n8e4Aip25jisetmt24YxCFXQwnCM9oF9TL",
  "key12": "fteqrq3zZf8cSXtGktn21owiWN9FDbudkfAyMG1qW568k6iBgGnbC1bAZUh5RvQd7roHjfrpJQTXG5o5ft5FPDj",
  "key13": "3wAb31snuaSLL64PhKLtnboRXybJ6U5aFkuFU496pLUFWKNA2TWgvcihLkTso5QeN7Y6oJoeffHH7s4ZYEjzygo8",
  "key14": "TwAQTXX1wdeyDNLXU5MPL7FiU68rZ1QBW2ZMep8s6CKHkAt9boDiNfMiffkgPAhc31SxrhEzddM3GaG14LMk1jP",
  "key15": "5Yf2ZDKE6czZgYLkJqEWqb1d1DmoiD9n6ft9iEkQ45DGb4p3xqo38idKYoPBs2Hx2wP982zjm6u2qsAhCzuT7S9N",
  "key16": "2NNKTE2XuEobC86ETwN6Xvy7vfkGNkgxcBtnXZcm2AjP7MD2kDDgFUwoNKjC84rdCuk8xu16FjMV6Jq2B6vTLbdd",
  "key17": "2tr3x1Qd1cE9NkveDe8Kk7g73dFftFmAiSpJ8mM2b8Cs9goi698ozHXm7dPkRT8zGDMqvKpRXPMN4QBb4yc4BvFV",
  "key18": "5JcTKN834ed5JgEn6At9tALwjJYhGyHnWUbU7vXSYDdDtNSJpGJqS8MspHDEsthgcgc54BBD5GYxGWCw2iKjpSQr",
  "key19": "pF5LURW5NbHBwxV7LtREAuhi1j4idRDPuL6KWtMSG4EubyQPmtLo5Bphuov4ELs1UGkNVgZjwGm2LGdyUXhfM6S",
  "key20": "iv3Dg5KMidrTA1HP9A8XrAj7PVLt64uskiNafZpQV2c8nyQaPtH7UKrxY4z2YjwnVGHCNFUvqtEr5Es51nZ4181",
  "key21": "4uYzZdMMLL9kEVpzsSqGqgWySEnJyuBgV2eyyezGaQcLkMoBQmMr5fiAmjgCqTmjLriwLanuUc5iqAr7hhb6Zci2",
  "key22": "8teB732QcwEF9UhnNN3o3SqyDe1EqGyVWpS5rqYPRhzXH42N5rWykGi1pqDRhHyTXSwqKzPTKLYEyrNGC5Q8vD2",
  "key23": "4h5rGjuuSicST8PUwKY4N4tBSri9Z1wbgG8EQCZDacSxYLq8LXZZvgSw5PbxBq8kKSZtxNeQMF5G2caWN81bWrGq",
  "key24": "55goBxG5j8KLykqNZ5Pona7SwVeG43RZerzb9ptKtyyK4fqjvbxR73ynm8XLrF6fNSnLFrgQAi3Xi5LyqG6KRE6w",
  "key25": "1Qeojt2qZsE78vcE5EUHkK7WuYwmRFRLFeVaREhbWyKCBWpz3RVVpXqDWYcDU4F1m66vu59dmhsboEMQnwxtFr4",
  "key26": "3VmduFDSnNbWkdCr3iEjjvycsP6ZhdwaB2T5oepQT9o4JEKeVxq7ETZtLpzTEPE1V5adpjUkCowh9mWyoJULCkfN",
  "key27": "4EMFvANfwMFakJxkBrdoHT8sJLSeh2Y2FqGWYyssC7pkEuZFZ1AfqAi9EWcpo98Z36FPVsbp4TECH74D467ZRB1f",
  "key28": "37YuqwLQW32Zm4BjgiGRZ1NvYPNouz77Yanr9s5NU2gutbKfPgwtjMHDYWaG7vbjNq6FsJ56TdFucMpFbSGAh3cx",
  "key29": "2pJ2WRCrJsMiun7TpQsCy96K8frrsVvUcGneCU86HYkyWHEcg738tHVhBajv9KsHe2WYGFW6dpVTRo7324gLygVz",
  "key30": "576CLxETFsNCM2NuRs8iAhRzBFWwJMqBH7hTjAq94XQhqvdmvSxEA6STGcycRP3yHpjPNLECM5tZXZ1iR9CT3VR5",
  "key31": "tnCRYs3DyzJ6ny4mtQxcpyGusdyWNTwuzV7ZGL4PKqvynYzzxBU2dmpjxXFpoayPeaUnzZkpXzFeyWqmpceLqkx",
  "key32": "62j57gkAGXWYkdGQ9jzXiLwF1XyfxYWynkNwQRBoscVzdYU75rgGTCMg6o6mj8CiNR7DUwcbHqwhY4QL5KdieJKB",
  "key33": "45VHG4mxRskQTr3AfyZPvqkJGYfMngBTMQUr1unSwZRFjjDHquNcCTK3WTNoKArKjKtoxhXAUX8MpdEBGRsPQTCc",
  "key34": "SgTevByrerVEgrLoyi4BAdNe2UAd5GPq5EBVDkP6mdNhGaEW8rkDzFoa5r6zxwMWsu95Y1BnnYPVeUYe7bkVhui",
  "key35": "2XCDawe2XS7NuKRG6mmQf1WG3CyZYR1RTxRjvVLr7ZqM1zuiyLJ3jnGyZbbJC1jTt4q3w5YT38e5mN8xShH7Wc1",
  "key36": "4oirGWsUqZCjdvJBoz4gFAbWu44P39UqotRWqoX5gDBU2aLkYazqZC9F47zqwCJ82MAxG368n6vw2zQH9t8DLK26",
  "key37": "58oPKQ9p4D4tF1hqRC8myxK8aMwMmqoriAJSFrwbQXQH2wSqsak8GRFiwjDydPhivUUpYpyQXEYpMfxLxmN6jwzC"
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
