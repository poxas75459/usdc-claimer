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
    "54fnq1JX8KeGiKJCnstqcftFgmzHxaFgan66wRN7XjSbRNgkByrgidyKqQ9DHPUMw7eBfPqaKXt2R6HHuuPhiyqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AxPevGDXQcRCU9qFtnw4Hiw1JEffNXXzHNuJ6qrde7pwcZCEDwPabRztwGcQRaVxiZuQN8Q2EbzQbY11pd7JoLS",
  "key1": "4hxMWo9AFJJC1k7qTgMqPjM354we7TBkGUd4YmjTAVzrzEfSA5XcJ3ZLn7ZXvfDC58onux32VAiaJozzKBV36f5s",
  "key2": "3xnK1NJzmKhFk3358JZLASq7JvJ9Z2UWzg33eL64AKnEJJTCgtaiM5WDhtgn1wimJAHqifssAbYze1cG3Hg4Tyn3",
  "key3": "3NFGjAbdz5ggfd536tVwUMKJskJwwTzciUoH14Qg2QkJ8MFmAD2rbhvv6xtT7psZr38cYPGEGFECgznD6cLryEZa",
  "key4": "3V4exxx1grA3nqhwj3ZHwtFRh6wrqXcP8ix94Pw7og2nFDvYbvN6iUaibzRrJF78TvH6TLL9A8jiZqNwZ9USQaS5",
  "key5": "CJzDa4nxH5sAgZhExdaR58r14VQ7ihJcYPZAQ7oUhcHpXMS9JHBNicdDa1Azu3ye2aGitQh2XKrngbpNTVR8PHq",
  "key6": "24W8Aaye2SSB7gWCVTMHma7ERFBonQvcMtReUEmxUNrqVYZJQakHea26us1LXxqxA9RJi9JyGZbWYBjutJqoch1D",
  "key7": "5RZx6QVKnWhcN5xniFmwt7u3CLhqGyKbGk1sSQzg7imfHpHNTGKypUxJ5V9o3jJkffwFt7ThZWLqZfiCH9oMPprs",
  "key8": "2vbDsZDeDz1s6ECBsbLBmyCgswLF6ZNbeznCLrtvkCb2Q6dTH8bYkydcisgTqsRcoh74UC6iPDELrNSDMi5eZMa",
  "key9": "4BE6eT9DFH5qUCV6hcVQEhwxgWyZgKecuvdDDxxZ8PycapS4oWwazdFPBhzWxPAH9aFsJTXHUR2iErvGU1xNjrtC",
  "key10": "5rCM3BYXJtp3SzK3HsWRWBN7RrTH3V6VtT81VKb1ApVSudGJFz3ysbDbCF58Kp7m2sEKkVkKnP987YeJTzfAPmfC",
  "key11": "32dKUPU2mLjPBmXDCdTxxAnxFYAQd5mokZS2xyiv26ZuqqdZb8cT9N8QmyDG4qD9CUtLMjFDQ5BU3M9r8Hrax4vV",
  "key12": "2DtvQgr8aYT754BS11dnNrUVdbTEnxcePgmWRnn4dfFLbVmDPA4bRrjRNA9fPUadnn6KEjEe1ZGDXad2kgb2LQua",
  "key13": "howKZU1LZzf81M5zZrw15XnY1N5f2TpwqX4EdMFWbJoqB8AJJswV2WKk9Xwhr5ERS3bhdWRDHRi1YktnadpPMej",
  "key14": "3hzjLSdwNUkTfd8GFwrnXvmb7TEUMWqQdkhJRn9kzaKv5prbSoeA4PyxMVksTKR2tLTXxa4RbMz1W11EHn7Zpt3G",
  "key15": "4poCYdbaQvxhoFR6dZusx2RyNsSbFvpFJDSDRWhYGbycPxA8X4ye7623t24pweR7rwCCZtYLDTAjEuC2qgVSQen3",
  "key16": "5MfHDGvg6w22kyiXYM96iwS5HUHjUyVP4CwXChLPKCTUyHPb42RB7uz6eDZhpewTJHuVSfbKsaEztsB3yabXqyRA",
  "key17": "2LhEtTvBE2oTM9kBoRhPz1NU4pd3cjdWqS8vgCoPDbYXEB6DK8W7sdSGiR5MZJzBntZZJgd1Qf7A8j2NeSctqXKa",
  "key18": "5mpy4hkkFYg3NuhxX2RbR3DFJGDJMxemgANAj4PyCFSk6DnDScfPMAcpYc37DL4KhH3nYJ6418s9JUCymhBdB9U3",
  "key19": "7jhpPS6vEnxQ5dyAgtrDRKcEatoQDVWcC32PdnL8iXDcNxmJ81xb2Zd126MvFN1HnjMNne7EC1iH4NScdykpeQi",
  "key20": "666tLgDrpotRGPEBMjKx9JwWYUnjwwZLjXSpD4nf41fW7a5monYc1iVptJJ7MD4v12E1U1x7TMdAYwCEU3pzsoQw",
  "key21": "4QjeJVbdDYLgUZsFp3jn9t766zT2LRDC9xEoiPVvhVkcLYk2VtDw58qT19jUiZL2akoWRNSpfcRrxWuxp46QPE2M",
  "key22": "W452g68cqMFoewKZsq8WVW7ibactzsSgqcYPs3pTUEvUCvUeUREV3v4QcYS5EwBim53KkieGDnEb2QVorYCxhLh",
  "key23": "32WvjZntshWUEb4LHSufa91Qu2VRt95pMWCBsjNYwsV9gFW7LRDVfFmSRi1GT6JiDTLpM9d2DTF8cZgF6XSvj3Wi",
  "key24": "kNbvAWgroj5QXyf5xQgd8k7A2PFoSLYb7EP8g9h7JQ7XWA1R8L61WNEjEGJdDbmQvTc2jNap8UK8JCGiQADGMWR",
  "key25": "4q3JiLyTcEmMTXUXUSNawyGXJzfGSjryorvjq5RcA4drrcqmmoLgBbPuqCqNpF2Xj6ctG5WBEroy2c2TF5PrJrtQ",
  "key26": "5Vp8pkStCrujgiwSHn3wA2icTiKrHVsB93Mc94adZiRtwKNkWPqQNCKDptUNmK5uc2WDKLy8eDc3YDqFkRhTu6Ck",
  "key27": "2z9DxnMFEsYEHg2cJLVE1U5tZ816AA6cshBgJepmxjFnDs52r9RkWQiAWrHnPWVzHqZ17F9UW5gHZBWkAzrYgKe8",
  "key28": "4nLqkNpALpRYuAa2UEYqUqK7fQGjRvfHCpLFDFqM4qfWazc4KDezPtiY1Cz4Jr2rEiQC1R97ik6kmgVcxTTdSzQQ"
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
