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
    "4gFZEuKUQPBdZ1M1j35GZ6cNFWoZbh1hs8G5JppBebFopRyoz4VpgbQ51QGRkntH2Ghm5JR4qyHDXT3RkpNZPTAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WuJP28LrQY6M7MDNS1zc3hhxc2tiUJZAEmp8sLtbwqjU7xzmKAa4tPqwX4PaUf1A73HrxjZw7EggXWvcVDCyWFZ",
  "key1": "2CKhjz853zzXjVrzdijtfjBMfmfmQUB1kzwmLsMXeYoCKFoeQwSdUAgt5tcvPY5nYq5rCz7UwUPdF8nahD1mnRDv",
  "key2": "5ed3vGxckm7dZ5327Ca3HKmBcg1RgLvZK67RGTEBn6J4p9ZgSX4YViFmLgaJdRh7Urnmrzq3zcz6EfVb3kyyzFTt",
  "key3": "5smHRJQZxXgHyRnCzFF2s6VZBLh8z4H15osMA2gLp34Tjff689QPYfKacJ6wnJsWHhcNMHLGuQ53Lrhu1xLVinN4",
  "key4": "uXt7fnE2ZaD7pPZWeTz7dgc7RCnWM1LVNtLueNBazAMbUQbP7CZLyy6To8FmCFKwsEdfsdLDz8kVgdwcCmdvW1F",
  "key5": "abCnkiNs82VF2beDA62RFmU3d4rrbMrw6412kPRWYoRUrMBzYJXRWzNmjMD2CRPH5JfhPuipPt4qcw5QvguDENR",
  "key6": "61HUd7rsmoEdERh5RcnGXi9EbLpwyHL7HvxFocGmbmT9Tmnd9RYV25gUpFfyQ3FnjFosWJyXf6UYX9obeEm5CAmE",
  "key7": "5r2joLW9jTboR6oGRv6KqQV1QRQQn91dAM7ZZC2bhwYezMivjhnN9t7ikH5NJGwccPGMSQXgDXXEuwgNcQ9C9JCn",
  "key8": "5SSm9q6Js8bPY4zGbwCUC2oYPJcC9jWTrEZTUE1v3q9Aq4a4Kc6ZfStU91nXeJaErmnwAYzaoh9tXLpF4osdRq6z",
  "key9": "3XHHjA1ADYwajJh5ygiNKqoTMrEn3qr2wSfK3uDxcfRwhF11XmgwKeJi9qTTVcrk1YvQ4CrfcagpySRiKyhnmAjE",
  "key10": "5RNpShqSPbpfSY5vT5Yu18t3vAmNRaqwisNAye1FaCa9ApTw2hchEhp1EuHisxpUKtWNYVwDdgErz6a7L7z2ZZYq",
  "key11": "2dd154NTDYDE7u76jMrRzAq3rnPTmh37ZdwvgHa6qbcYRg9rVffpfBB7AmhjkzWPzsDcfqhahqTu3aZSnMibGcKZ",
  "key12": "3nVVxsgXJWf6Dag1i41DmGWm6M8wcS8cbQdmf74kNecE9p3xtPMJYmDWNqMBRH789DEzyJNBwxLrxKZNcEg3bKpu",
  "key13": "2QwAPxgrbuVCmh8EYUXvwZbHCHrTycoD7oC3BfhHDd6qvmxYfcXbvV3RsrXdpMdJxB2mpxhpGPojZJsQtGJzphLp",
  "key14": "3mX2duxwKtnJAhBypHFUpMgJMCCmG2Xso3AjzwQ3J7a1EoC985rn8LeAQQJDoMrCN41DwNcKucSgAZh7JTStpfN9",
  "key15": "4knb2ErFz6DyPDKgVUSzFgCnn5Cc7M3nfwGvT8nAzfknTFH8R3Jd8cQstsuKnj691UxBb3gJuooHScekRj5TLWx4",
  "key16": "3bhHhEkAmxQ62rJdkkZv6fcZuVP6NZmWpb39Z7GHxPK5euqayeLJGtMZZwbwjLJDkNZSN9DgEnD111euoMDCDWvk",
  "key17": "3VAjJjNJz2GsH3kQh4xCqvPCjgtgzPkXyiYrHQuxxzdt7EjjxP3rv7FT4AA1gew7x1Tqw4nkBnpJ4iUZALHahxCn",
  "key18": "5yRK5Fma7cDXGHxPGFCHxUwxnxMATMhVqSR4nr2L2f8QquHHxLSFAyaaCE6vZ6sLhpUarvrgp45yBSbeN4NVaVWM",
  "key19": "2qsq2ouSvpmdjK6ry429CEAgn7UwFAHq3uzXGpxwiWwEGTJy6aJZrte34eZxdPfSA4ghSdimCn5Ht1mWdnLWbYeL",
  "key20": "21CXsjgDg6s3hY9kxk6sdSi4srVMoY2xRP3fJFGHFaCTrRkDQCDdjf68GkstchVthnnLRd5rzxmG8xAFu5npLu1D",
  "key21": "5M76Jirobm6koozCUBBhq6Gu4iteBHCxgyTv5BMxL4VfR3vpqaiQ44LZCKMWYec5MvJgbaNEeJcV84AMLaavSXhg",
  "key22": "WkzqtQEXeV1ijmBskp2tSSnawwsxk8rFoQ2aeZgs7VYKUmLXP4FnTmJNavry56wj32LZBcPdbuoFmBctTuN4tzX",
  "key23": "5Ndu5r8CM2a2mFLsbL78JAV5GnFudCtXqJj5EPTWg84yHkrg3uEVRuKmPEDPwWF55qq7mH9NYYvvfhWTov3VH3Lb",
  "key24": "2tDzo9uAZFHH8f3dJdpY3EFCWcrd8yABJtjeympAS58r4wvLMC7xBJQZUrdcYLMb73fXLQF9B7Zu7usvwru32HkP",
  "key25": "4aEV3Rb4VR582zi7oAS96CZaUPcqMfmW7pr1N2sPL3Ykbiz6fy4vpn2w2JxiGz6wfFvUpJCjvnNtnqMqmSgshqa6",
  "key26": "4aoirX4BTVmf2xgJ17xuZGjnyjg3MYppp4ZjFYfWsALp2nfm3ku7ADUVmi6fyf2YUGiQnGvQKuRDy5anZM1ifFXv",
  "key27": "4U3Qzxea9m7Njvi1Zv2HtFQ1cuNhwm1KAQE9ziGFm5YPudRDp8jdLyeL3kdzxS9XtppZdvme9zj8rjdLW7CAhyku"
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
