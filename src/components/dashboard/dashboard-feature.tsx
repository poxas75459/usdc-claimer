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
    "HgnNerR6tVMhPkqsgudawfe4H6e9CohvXHAdNrfEPZCco6MY8wAGgJcTfho2cn3EfqDGUCiZ9QdCDTF7cTNXKLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7rLRMkQC37Xh94qtVs9H6kWfapqanbf4iZLyTucUpwnCkm9Pi8trhaM3isGM2FibmjWrnzyMrYEvLfYTQhUGFtV",
  "key1": "5RA3K61x5nFTVQMywBkmCt2XE1oQcxvc21amo2GotxtGMJ4QKBU64Zx1QwHUe3b3ckoSrfF2JgFLFTA8DYqCquDJ",
  "key2": "4S8WdD4fC2nHAoe8mgFF6RmNmMNTTdG9Acid9eh2CbEHJVsidC5Bs28SfaC9JiGQRMCLKyrcLpvEjDBysMHd8jcB",
  "key3": "5mpoQbzaMUwo1MjgM8qSAiCVD2DgupyL5radgQ6mcrCB2Mn6oYBYTb4vMcwB5r96t1CNiBm7tcuyWAsUPGPpzSbo",
  "key4": "2bJUi4nYSLQbdoC2inYenyuw9L7ShvHkQHiy8SycysQKzZHAKmbUsDDobZidYaK4UQA5X1fVcXGDDAa3nuT2YWEK",
  "key5": "4oLRcGA5w1UDzXCRmrKkajsUUjMsboBLm3KyAxZbDu9zCzoeFdbzWXG6VX6dUJ3AcY16fyGf5ZUVwtgXSch56aVx",
  "key6": "61ZuBe5VcnNAuiFasocPaduLM8TSY6fNQHQyAEMVKLJ8deXnE7BZjHDxXPn46AFPFtDMqzCeyRR2N6Y9kGxJaxHB",
  "key7": "2RoXCkGYnr4sjmHtFmCx8d6nbsDR8QmeSU2vneZcPtHyG6y4otHi5b55S3c9RuwKnX2dyYXCWqaSpjm8RG9RM3xy",
  "key8": "4iFSAbKqTgvy3Hk7osZYwpE1ASan26qtgaigZPPZcCsayArXyTmwq9X7f8jmHrm1CpqWnyKWkSjvUEViDwmtpjFd",
  "key9": "61VA3Qi9h3hy8URN2LCfC9gYnwzD8B4Kdy5GQQNjUK1icJMwV4DRFLjbD4h6mi1hzVt4mCUoYq7jvtNbfS93TQhy",
  "key10": "vPLdankjecfWEd5f7bJ3DoiDNXRix2BDQLSoRKggMKwKdbQ2kFKUg79JwbsP23Gcqq7dSV4FSd7ExF9H3yQMkcA",
  "key11": "2efR6AM7xL5PBqboV8RnRdctBYzcBAuotpaodvd3H3Z3k8aCd8cY6BmsREwPMTxMkbFwMySxsmuzuN1imDrVQubE",
  "key12": "4FHkf9QmndgMnZ24XemAfy4Zqf2WZ7CLYanixHKMTqcg8f7uehLzHzB53Gv6Gx2EnjY9LtatjMvY9oq3j3WTeP8F",
  "key13": "Nz31H8jzu9Kngkm3qFGG33FkUyFQmLx4SHKt9UbiGHuWCsV3nMiHL5d2GYWGmdqe7V291TUGQUdRjEPpghmJsRC",
  "key14": "2N3qCAtr4cxB8i7feVHWMdRNLgbYHAcPb1Uu6Qbdkvndcua6pABTJJTtS74fxX5gaoeYmQtMxAnvowdykgrcz4YU",
  "key15": "22eN3gKpaFdt9dPs3WaeTtremixtx132wLzFuTWiAbAei7F1xiu8kNuTuZAeqmrA4SD5zZWTPLiJw2NMbmgNRgoy",
  "key16": "3MJkG7UmNJC6UXPPve1ZCMMbJtHJf1QA4szsY417s49R5NFJX1AUYiCwh9whWSxtCygP2dmNJWSf2JDGwiVZeg8D",
  "key17": "5W9eME8QfjsUXTnNDP1Fc4Kezbjumuhepe5ybwFMHMTAu1jFvf41qvyW7MnGzX3Ecv4HREV2XLBgGbw3jtB5DvW6",
  "key18": "4Jm2JYtTtSMjerzaanA7ZgurMRHHgkr4hJqmWMPeViQXVQWRNSWpbDnoBPipiw8XW8CTANXbnEHTgBupkDc7zu8v",
  "key19": "4UsiZWx4q5MZHMQHxE134NuVJhSwtxt37pdymrSHkUdvtRW7jiX82qat2SrnYyvrCRoEzE43BXiLoPZsj3W6iGs2",
  "key20": "JCcScn73HBsKmpHq5dtzjo2X3fnnm7F4wZ8GzZ9Tt1VPcGNfeUqd4uHn9SwVfouVCbUceYXj5finqdWUC2J7g9P",
  "key21": "4eaiW5voM1CwmESsDbLXxiSpxBfc6pq4UngkQyxmNFiAsRaC89Y6YGGoHNFydrTrBpa6nBMbrtxQivhkjJDiLpoo",
  "key22": "5wMnq8UQW4E6xyDJSf5H5H2ckfftBsVbfpmiX1cRxt8spT9fE4ot6iusLQiEFenj3ZmXgtEGH7i83A2wvjLYwVpU",
  "key23": "5kecWL9ZHA2JXU43ZTMmZ6WzYiF9mPbPcVxGT3q54Ck4sibmCMdHqAgvFFreBvAgBgMV3bbXrNFyvzW1UCnSCVK2",
  "key24": "2vaBevLrw4rxa3G6UdC7HnzThccYaCYPSQ7mg8HtM6qxc2tttzedPnpZBofhvNWt1ysqs8fr9FALHGQiiRUGAfSD",
  "key25": "2xnLqKHqFGa5GMmhKnJF2QTckffQNemoawm2eveEgpr2DyxK7RcPMVJa185yaoHDyMpk1HkWXvjPHh6q5vAimVsc",
  "key26": "4AacgnKbb13THZVTK5PEiapqxFvzL2a6ZC4kEJFxBt737GFmLH7HXxNESTF2xMQKsUC1rmB7Uybjf2vRttZW4VdU",
  "key27": "3eNr4GtX1F5vaCPUTkWmfziTwqqDBC5ffWvpfV5mMYRXyXbAogkLmp5srZgtvJoh4vZebSimTNkK5PRC74PJT5Xf",
  "key28": "QQztHLisgPsJAbxsq218fz7gh2qxycNZ46evsGMbtypaHvWSiyBy6eBPUcnt17BtsnyS3dz5m68ormLzW8RvcaD"
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
