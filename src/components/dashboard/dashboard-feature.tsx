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
    "5ff31CxpZtTnEV2hSLXDDdthmxChXA7tuj5sKhWEGmM7SKstBuym74gNUjM9CPLjEZSkiPCBHmAYPvq6BHt41yv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66tVQ2NCQrQ5b8nYGMKh9AbMCmwBcLqJhJ9esTnT6RngAaMggQGk46NKNVBHmhNpxBcVQX2qganVFKCH2ncPjMXm",
  "key1": "2FUZnqsYfAchv3PvAfae1Yajj3vGtLYBTPUrZL7iKMFusSubNjCs4ExjK4vXzrDDcHpaNetjz7ieXPCeAoDYQtyQ",
  "key2": "24kC1WH3mGWa5mgSjHFhHFNrB1phxqruSNXkF1tMWYTrVYJSWDQiU1fgSLAYaDBKUPg68z5U3pem74FDyNEdthfq",
  "key3": "4APQzzFpBRb9gPr46274oV1sxSEvRVDCHHJF2mWN9mCdKXD7yWPrYw5GptUTSAJbQwseaad4ddENupcPGHZcbS5C",
  "key4": "3AbY9W5eXECt4QDPwDL5W2J5E3ZUSB6qbMgp78gLTxeUtsmsDUbyhGNyy2oqpYo4J5nGJveGPUoeTBaMWwuURKRz",
  "key5": "4x7oqDxUJkPu3d1kNhifPB8RLGVCxCPhB5YEQ7e2QMZhHFe6Fv1VQYa2kcUEfJ6wsSvm9NXivnhpAGKAAPq6pF2f",
  "key6": "3udDnN32DjvTwKqMFxFqFFKkSUyp2Q7jT47HWSfcZJpJtuM2LQjwxyp2QKV4hcewuJiXL7VRryNqjNT6gfdNhgrE",
  "key7": "4nQksmVe9JG8bJbsxhnQSBGgsE18YTqjeZxz6NWr3gpCWoTRzDCzPCvecKWqRcLmUxT8z9y69pCUYcZUZ4LeNvNY",
  "key8": "A3fu8dp5CrBway7iM63J2WixF9vojsy9o79epqPJ2YxqexjupsX1cwSoYiHvYJ5LafkbNQx3YvaRjyUtzSLYqQK",
  "key9": "5nnxSKZh3K87r6fJrAe3jkGCRaLWi7EzLFNy6B4qx4RNFUaBoowtygGnvimFAAcprBT6BQVY2rHFRvr11dBbAjmL",
  "key10": "3CV7zpQXDSMFNZGpdh35km3TiFRbLCrmTV7C29XPQtyxxysVK1BQHFd1iB5DY3MnH9GTQhvC1cGfcxzRHJ77mDyV",
  "key11": "2hKwXtw1XrfDd6BZkNDUbEMSFqx8GqVbKHJNHLCrmFuMvS4CYNz9NQPBH6kNv9pmHnwJWGokgcUURJrTbwvj8oSd",
  "key12": "65QRNYxbviw3z274QwuMXym8eJtTPwzQnfL8wVfMFbvnsSys67WvyF8RjBzP92Rz2ZNJTBLuvNLmziv3wBa7YiuM",
  "key13": "2fyrVHVkMDTvDaGwpUWxoYPwr7bt9jsQrZNZNRPnVmrNJhDHtjrxDgadQouXGcfcp4A7hTvH4TFJH9n4mq3wcP7e",
  "key14": "3c8BR1Cx3eaD8D3rHbWorCzrHQS7MoXDzGdszGtr6SCX98jAR7JJeT1yMXCnWNDfxdh6ck1KPW4G8Sa5CTa3kPof",
  "key15": "3TB9s1Fgb763bASNiEMC3qJbdfqojBPNQo2Xc8BGgUzNcdKgvauejcjsnyWrVRyY1Hxxw5quB4wYxhrKqE4pByqc",
  "key16": "22335BoA7UwDcbzmzrNAASRyn2BARF3dVWWF1qiyXmCn9tEHQCNkghB9jatQ6czGaPp8HBKoPHNuMLFvmcbbbxrC",
  "key17": "5XGCqypj9DSq2zTXrAW6mhBDrcdtrvsDQv83d1QjQgVPoMTdGAWsFSaBVDE5StZXhekbmX3NdLzQTqVGYLdYrim",
  "key18": "5wtEgNPZbNXTUJnYbdCsrKqMN1s7onFYFLnYg64eb9iAUHjUJ267EqHqozYExaRj7JuDyuCmbvMfXSLFc3fq7GzS",
  "key19": "5hsxhFwLoa69HVsHpGPtTT8ubSAdTAk1BMVn3NmNwbUnHn5fApywrG8EDmcePXvS4fnyKaZuTi7K5oJvb6qnt4FQ",
  "key20": "3Pt4Yfg5MbgkvBYdTAEV6K6n9oumE8TjBqptncefpaiHBLsryuHerVn9Wvt2yMHwVNL4fcUKrEAajfW6SfqfuETQ",
  "key21": "26guMYn6oXL6yL1RWvjFicxabxiETSakjYZLo5qwMAP1pLZKCN7rBxm7K47J3EVVccQDxuWbrgK2qTxwGdmSHn5v",
  "key22": "3cx5jWGesgixSe4iy2YXDRFMXiP52aXa2AWS5WTo9i1pjLFU2Y979ytU4nUUq7ntXe7JQEXpTSRGhyfpUebe2cxe",
  "key23": "3uFdqmvybsS5pFfxxw4HGFJbTuFbM4msjCEx9yjv1d5k2AhvUekUHSwYEdGDcEKRuYCwEDo24k78kUSJWEuwKZ8c",
  "key24": "5BFcf6fNeZB9dFMCuYVB4bS5QotDmDg4oPEa7FG4AzvKqvmApQr7bRFuK95trBjCveZqK3NMNbLYSGKqu31nk6MG",
  "key25": "G67HcvcCUmrtEsVid8jgyU8Gw6JtmFwWNNrMF3UPejHGMMor5SVVD1mcjdPYVXoQqU1zizgBaCEF2MNHpv2ZSUY"
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
