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
    "4LPmDUWmaBifewSXcvjH9s9rXhTz3SU4BEec52jo7cP75nQwHY8ATgmvWRqePjdaWnsKnuF6YnJRsjg2pVfbgVfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UWEjNQKvEiFWjKmawBzSxKcVo3MwDi3ZruqN639j6au6E3vgKdZHTr2WkXLG75G16syoYBcfGLtASSSGiGjDZ4c",
  "key1": "EHgHFaPbukgic9v1k1BfkcE8eA52DYJFmx6WtuYWdQ8uoYTtJ2tFdRyXVCUPikuH5fNo6RKSVMZRM2M11TzpnTy",
  "key2": "3HJKQY8RCCh8ysxKVN7esn2NurJKsy7gtMHFQa9CatjQ4HAMRjmgSF2Ypme4rYqH291DSCiqfjPzGU9pvk3gUPzL",
  "key3": "fBdrMzUtPEcPwKPocvQdR4pNE5Ec7kJMzMPfxRjpUUcKa9e3EQ6Ku94WQM61Vf6sQZ5qgynVyUy7ESDd65aek7T",
  "key4": "4XfF63sQ4rdigU1vg3Qum648u9faEkCzigfXePQvsC2E46cLTxArHTTdttx8GG1GKWtZESrb7fNdi2ppWkBSr1fH",
  "key5": "2aWiepg2ivvYD8qTZ36r8J2ysvCMLmFAnPh2gMxuyzCKgb1pcYkJE9SswN5ujpZQBU8DHnYW3KDCBJ14jBjHZ3FW",
  "key6": "2R4x6yKYoBSoX87CJdBoVuLkaXwQ3Hf4h7mUDfJkdupTh89CsSkitvBuR6nan1wqLzpdpxnXU3Upck2CbJuN76Zc",
  "key7": "5bRz4b689rkBbm7kEt98YK3X11bpQVsdECJf7DHe1sCakbRQBpBdBm5GHd1vJsAGhBnuNarQXwqsjDsb5Jg9NAKi",
  "key8": "W9vxepJxeKeX5RKo8AuKHfSxP91iYkgQYPV6pQo22Xjuq7i7gSvxGBUbs5SMdCnCcncENKH6ZbhaLSGTJAy1iao",
  "key9": "3gkpWf3bDxhRqHNErBSCYxYpaTtpdzCeCQwSLdetD7bFhFSBhKjaEvTyrRpThhVyDeGmdUSk6jEWhSnLPWMTpmk5",
  "key10": "ShxxDs2GnKfSNdXJjjkmfuDw1AJkkUwB4E19LXciHte14mTZ5KEVKtAbytd3Tp5WfdqnmaQpainXZdrwGazyM3n",
  "key11": "2MTewm5p4MooTSEe3PUDcZZC8obusuMm2cgyeL7hyqFguYoyfRMbzNCnMM2Nv6AR6fhmayszcMKKHt7EvE53UwrT",
  "key12": "2mdi7bD67yQFmS2W1euViURJTv5iKU1mpvb4SoDwqJJbDpFvYCPNuLcXNBTiHwC9L85C5fxNoSf1nVo9W2chWwtq",
  "key13": "PxX1aAABoMoZUM6Y4R1VkDHxwtYm4nZZFpdcyR3vDm5v3ctLCCmDwU3YDq7tLe2RmGLRf9sddXdRPoE3p5wUMtW",
  "key14": "51SRdZoqxJrGXTyQ7zn9YH6fepFt7TAnDFu3nkVZDqsG3ntcz3ReTjDennpf3TjTsr2EWpQXh6wutYSJZTuxxDEL",
  "key15": "5mkvmsSRwhNLo7oTexAWR8bntUdQuKodqAFJhdtG4zr5pLAZ6DShMSJsPk25G6pScCLvkSJ6ZtNkZsPRr5BJw7LY",
  "key16": "4fm3JfZw9ATicK3pp4emRjaUQ49PkUDL4nFZ9NNcvN3Ey4u6sFAadgBQ9aA7xuCGPWv2z6Mo2cvkmdRVkdudj4M7",
  "key17": "58nPKNvJnxuG4s7dLLxPxKR7LUhDGkGVN1xcJEMKQJAjQ16Z7qt2hPTLQUkjeCysZDsWwhYRaGDhxysRDk6rD78G",
  "key18": "3mwUzPVV2rtkA218xczDDEbq18Y37tSNh7t4tK8NFCRkhLR82D6vwacbysUc9CrfbKJfMLJBGsbGrwspQBnwbGz7",
  "key19": "65GF1vdbY2eERUhnLwzxZXxFA2FbLS7hfGQ2cjnm2k11UiMvZb9eHVF5h7t8EQDY7epB7aPeJdWnYrpWKTZeM9wf",
  "key20": "5TM8fkADtfZ1dbeawGfmspU1BgfxU7fmTT7LpxfTHg93CZPGATr4MCWPZEjYnVMegnTNh9J9ULNNz3YjpDofGK3e",
  "key21": "v5KsBCSueECu7aAU7gku4gKJyC3h2Aq1eQZm6d6EodxTcZx5vLFULeRvrfod8pFSWHNNQw1C82fYLXJuciGk9tK",
  "key22": "5ZZmLvSjr866RanbejXeXmbRGiR7E4tgtYDexW63hHPhPqk5XDYetSaSqTwkuNJ1bDuTKJnNtZJUtnrabmwwinPd",
  "key23": "amhnuHsQXq26P2k8YCJgZDUzpP2MhPq4Wbs3UcznLcubdvvfaoYrRHQLmSTCD547zeCSs4ReqKeb5ZLrD7iXh6C",
  "key24": "67kr38VoWuEKJAQf8ZbaiGP6k7GRyVyo2MqSitpPAfp4DvsFHdonn1cEcm9EgNBYeYhLtZDbQD9XtB5cE9XUUM6S",
  "key25": "54SWUf7d893C55eeskH8nK5piKrm41FUAQxjWJzUpjavQYCjjcWMGu6A9Ukyi7UMK4Eo9BBpG5HLZ7gQF1JtLWjJ",
  "key26": "34G13d5rWbtJa9qCKWtVoXPMEa1bDNbYakHhxAn2seBf6UrAGpUwpJaGSer2m6TUsMAj8cM53EhxamvtHpuw8iGU",
  "key27": "2dyExGxpbbRNTrN8YD8SWNRDCwMyqq9yRRcZwa3gxE7VaJVzYLdThXGKuKTe3YzmaXctbRn2LKahDVPTtnpSoUyD"
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
