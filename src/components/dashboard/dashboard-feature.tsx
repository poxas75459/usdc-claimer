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
    "5o6XAGggcEvcG3huqqZdmjRS5NhWffZh7FwUYmZwszGihJMqa8AK2uXYSyhumGUH8hDBxARSJgqyLJ58vKMRJh5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vSxQ1nSjPrNx3iN2or98r5RddicxA8vLcG7Jabh2UkCimaTj1cT7paHPnKKDDWdumrBddAq5e3mdjh2Q2S3xk9v",
  "key1": "4wT4QcTMK6vr1w84ZVhc9jeLn8syi7v7eL1PhPMxvNFbteNmKJsVtzgZBN2wuyGJesNV8fmccUbBQj3FiMGkkiWQ",
  "key2": "4viEaXonukAiah9WCGC2t8uU2BAppDL5bRShSdviX1Dgx6FHwqgpyoJ7NLqJ6CPbfoYqWsv686n3phpy8r2whftM",
  "key3": "4tqmns1pSrnpvVa7aVyUPPpe3qNUe6jFYUAaHkskE4H7oxhfgAyLab8ET7wxs4dwEFvrSyRe6QddkNcnst7HJF6r",
  "key4": "uw4PUzU97qeNCySyJui6tA24BqjD7aj86PRxwfaWVhvN3X7jWBsN9cvnqqdWbMUwEY1nSd5xAscQZeDboENPxLQ",
  "key5": "55hJq4asckvfKyrgM36hdszWw3WcyDDtWesV86SSnpQfH2dHUCr8Tv8PmYSU13uMNAHtGmwh6bA4WpshCx5dxwYQ",
  "key6": "329BtgLTHGqXiNSkoEzRn4iA45wbbBaTrHopgZPqws4pjQbk1Z54Hk9h2yYwEqNECkmHe33NMiwKyWTvMKGvSByJ",
  "key7": "1mx6AadHqfRL4CV4Hm33UfZ5dKqXue426rdMpVMHmui1qoM2pRnsVpDx7zRzWqQxdDEqsExoMvzWL814w2Tt1X9",
  "key8": "65AgCV133b123xn9u6aVG9W5cdk1qywkFokLkTbhDkQRdbpBjfDoueeNojCrYfyxgQs41ksJfthMUrSF8t5D8tLL",
  "key9": "2QvfnzWVdzoZTGtLkdu8LtezGEcUftRfCSf1QvDQ2JRD9on5rQVsZ6kzTd6VFVn3XKf4rpA5XukbykU17zyemLee",
  "key10": "5BEcW77mHNXETtVHLJBb7MpvqtFLFM6ZwkS719Bw1aDuFVsc8Muudb4596zsYpTcSkRMubUSkhB5BmbFij7dgxyv",
  "key11": "45k9yFRWVuPrTiUmmXWBdn58UWhcx6jG1G3dfK3aZiPUNozBC98nyXYGHSkBYhvxfqKw8cuVVrBhue5AWRcEg8d2",
  "key12": "2B8nTdEm5KWCGJbB9Fr99iDA2SmiQwhLQqw9T6KJY62Sa96u8YZauw2yse8ALy8pqGcyc3eXjXDfsmnAYe5nWv5S",
  "key13": "URSXi8rdMNWKhmn3guF7852BsKwa5RbiFDRofrd5ELXRTFJA8raDziJdhwCM3vomrCfYkgf9swKEpDUQwaxCVGW",
  "key14": "57uNsSbDbkn7fB9PQaEo7V6MbTzEMXoJtfeosLQ3sowWN49mmc8zyfPcuoHNvm6SGGiMzyX3uRHDkLxmMSRdmmWC",
  "key15": "QvnMRovnkgPwaDyXhGya6oYpwtBDe8wpyhzJrztFzA8HGvWdiSF4bkWEc8JHv34swbGsQpnS8oAvL7B21bHSuSQ",
  "key16": "3p7J3NNjvK6S9oaBJy9wR7BPJV6FghxGCwuXuKKpF3vSVuDdQJRe3MKf74UDmqynxxPDL5vSawajq4s1SBuSmYfS",
  "key17": "3XrD2dVtT4bqD7RVyt33Qsk5VEdyq2nNYUzfmbbK6qQc8Ma7GAwoGUzoZ8DxamRT1Ha4bqAXBS2LgAVwhsUxPQxK",
  "key18": "53yrYjMV3dhxbgH6ayp7YiHudUW3196Rj9mLse6iEDVfh8rmyXaaobm8tojGEeCDrgANjSLLmMtxH9vZyCNaxb5M",
  "key19": "2puSYAFdWmZen2Tq2B9ZKMiTGDutVCn6o899ieqV7MZd4D4gGGKC5iFtGAYZ9vXBGPwkSPnF4iEjNDWff2NPnAXU",
  "key20": "2cpzBUrjbKionGJy6zXFwmpGBVhWAZfthvAYMwRcKoL3pLf4v2zcwMWpbCCqJHAMdvjkUCtqwQobSb2PdVxgDjyJ",
  "key21": "47yuTXbyHgbUS49hW628yaTcYpjBjnVBUS288nLnjuDsfCpDMDFKFafMiYVfDYCudzD4bMb3d2WvHV4q83Qipcbi",
  "key22": "4WkC8hkiA9K5exzGAVyb6qQRPtHjQCWFrtMUCN1ZEh97ga58goiL2WsLUuPmN69vpQx9KZee1PRjfSDxccYbwKTD",
  "key23": "2SsZomhxiLJ1HG7ckPwE3JeF9LrqR4vLa89UQLtroTVz8CKsXCrmNQUEVDsUXppkmX9fdD12aYGbYVGuvM9M56g",
  "key24": "58yZCyGVBdxghyLvi2ddDUk6xn3f6xRjBGB4Zz6UgH5qe3ucJA9zGMSM6j8RE9dW4scmdz3kcNSUzvEByXzwkQ91",
  "key25": "3ngrVY9gkCQsZkHWrXdZskHJR3uvDBkH24DFs5kkuykJp7v1jPQwb9EoLmCH4z8TfrpW2siKfccnfGpVe5y5HD7K"
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
