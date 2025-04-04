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
    "24QvMD8FDnhADav5p9agSe2hKA9qK2moAkZNVoC2Wwvjdxkr5gX4BWdnYARM1eF2AzsjKrZrSwy4H3TqsS3eSiaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PMaqSDEXpheKjFXCjk8UQG1eeEamff3X9qUGJr2uv4rSeTUR2mLnu41gLR8XWDXh7RmN5yrrcQSv3nkuYBWtx3",
  "key1": "4h6kWGVTepbZ5kvgNSUHA2KFDTdTPGn4ph2iXU5Fc4C2yzevc8mAeEKixuVSrKLDQJsXP95U1sTrUZKnWv1jvkHA",
  "key2": "jFyFXoaqohJRPm6SkuYmkkdMAym3xXRBjaGfV2fmkaLtRSAXMjurptSh7d2ZEfjkdzys2eEFLcmkxKyXUTcMn4Y",
  "key3": "3CcMdHNBqQw4fiQfCcVQVsY7zaYo5sjdQs4BLDFPC2u9bGhz9cb27d4fNeEnGFFMCH5AeBEwLYgd6jnFkkvHCuvN",
  "key4": "4Ce29daY4YzCSTRqKNJNSGwAJaBLW6a4fWBRN8aqP7cqMkTDFtSgHx83xM82RKtf2ih6LhATZxT38h455idehQnW",
  "key5": "2faN6PVqLukZPdV1v6GW7Voj26CdKKTCutcyyKCR2BBzuFZEYSM8U6NWyLuC81J5HaiyVQUq1ihMBtHDfh1d5gqs",
  "key6": "5oeFGVPPf8ZC8X39SWt1QfHHTSx34XzoDu3bgUDAwDifqCyShQXy3SKLWgcYxkoEF8CUmF82yQvU13kH9idCvobV",
  "key7": "cizP6bTGd3VFzcpaxsTKJNsvS3pnbgi4yiQFHMPVow3udbJWtWTqPx32dgcsiXVkSu9H1gnqTbQLHMcTikz31Qe",
  "key8": "3KK13gBtn8owf2Kc32bjW1CSoBAc9TNxPX8Dsi446jW8s3z65XhaELBdwVvPZSbccTgirxNpxZEJyRfQHVw8Bxpo",
  "key9": "ET1Eoizw54pPchnzb81UouSVrhL8C9MiA5DkH97bUoJx49B9gCgsVBYzBLVQPmvx6xSyKKDzKpC38wA1qPRgB1Y",
  "key10": "2K8tLpRXMifoFYBBcFgGJU9CgHJmtUq5noCpTFtVpJL9bnzJmyi4bvppD2J3BU2NYYk8gLSTMdB7FDehB9HMFUbz",
  "key11": "2HF7Jrhs3kR2yjMCeB45R6dxgvRwFkKDNbmZWprfReFp9tksan9u5WnEVqkvmpKYVoViEcsL4rRf5i5siSMmKJYG",
  "key12": "2EVNPGNHMpdTBe4dYWyY1cpMov8MKdxGycnR3vhyqnA4fHaFm6YQYffHUwqMymNnSHzDA65UWaGKPdAYxxHHWP9B",
  "key13": "3JKiYm63bDZqdJob9rwTbU4mcs8ZWLB9tmf26hcub3F6cwhWgWzrDGuuARKuB8GRzLhpCQmyBZbXMxFVgGSXn8j6",
  "key14": "4HMJTmvvPAXCHiZTE2v67m33Gf3XT92q7yX7cn1C6tbCgqCoXcBDh9gpZjKnbMLNsj4pZR6uKDZvPBZ4fc4VDU7d",
  "key15": "31Zt7B7NwX1qeUMmhf9AMP5sNqj9auBBVxpqMsZAihcFNptR4busvLDjh16VCbbcN1hJEXJ3NwD1rqQ2f3JQnFUC",
  "key16": "5rSqwCqkC2XJ1z25oVcix8MTRonqHdSyRe9mQvgi7LwgYVuMU1Jyb9E12xQE1DbvzUFgWmkqjn1vfvbVEfaRxXSe",
  "key17": "3TmmPSX9XSmUjjWP5fnsWXXPTrb2yMYsSyJrKN9GsqU5MeV83Q1sBM7EMTi8g9B9SuvPu3TR3yT9gg8nQv7ZA2C1",
  "key18": "5XnkRYoSkAeGzKRaLQt3dTaVzpf5mYJs3YvSHsfPFnPq2Bk4xMHTTqRMkSvHComHR8zw3FWzcVjr4HPVg5UDAKWz",
  "key19": "3LwH6goPTnqwCS9bZ63mjUQ3nrRrqHSFdAwCJpvt2ADTa9Rf99dgP2UVWUg8PLXmLJ6GHrqCnDNJYCwoS5AK6Tou",
  "key20": "5EetJ7ZhnnkhMAjJoUBYUqUJsQQyVGdyK9QLK9nqK6YrFR98BpHGSywqbUfxNu6UgVJ51MdJ4R764NGLhDXtiJPZ",
  "key21": "31RJKQWAnCxkvmKbQL8F9g61bZt2WFB37Gje1JgZPWv9pRCg2NwPyfTrn4x9YG2BcQcTuhxxDfCE9dGXkzbqs2zG",
  "key22": "25YhpHBDELKaf11sgUKKv8mbETyE31rf19VMBujxYYc1iYYBTtgybbHricTbFu3EetGQ3MZoBww7HkkHwXNR3GE2",
  "key23": "5wEhhBH6RJGMmkUadjXt9tpjjVaM4h3KZUtbraEtrau4hisK2aMqJAAw4Jm9FHBSb3qmDnS2J1VkoPJ5Gf3Hohp8",
  "key24": "3idUFJQpzhrM65mTvS2GbukBzVAAXjVHCaeeww9bRvqaFfB92pGmtJ36zxYQtZ1ALZErdeEiPqWz9qU2a5i2Nfik"
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
