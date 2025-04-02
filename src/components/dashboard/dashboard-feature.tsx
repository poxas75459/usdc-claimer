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
    "3V3h3CyJKBnvJgyKKB8xFavCoLyKpJ4hWRpcjHe8eAmPJChyKE23WHoUWgXYQMC9QUMJeNxUduSX93vKoKMtpL4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "844GqfqKCu6uDDibpZ5rUajakcfzf83111HvYgC41DpBvJvnB7uT2rrgiiZXGjf6ZajSkj2R8zuuPU8bCkUeG8q",
  "key1": "27SDTCwisQ28zcXeQbPK8PAKCWhvG1CzWi13WApTWzbs9RmF8kqssKazdeTFXQUgRR2SncW4cqu82WD6RmarThny",
  "key2": "2nmA2E3KLDA9vQUazYQDJPncidyHibgCoE2PUnGSynemaEveje4r9FxiZmDkhgyieg2Fabhjg2S2MCHWZG7P3Qt1",
  "key3": "5wBFSjCXpMeuE54xQwzEVC7CDv1Myhg5QBkSdTrchqnmm7ceByh7ho4Tqi1iH1Di8D5j86LFbmBVWAdXjZgqKKgj",
  "key4": "94BjXBygUEEUrwqqfRfjRvHrZam9v1Rxq97JpTGD416tLsD6Pb5u5gguN6RY6obpRDtkLfMVn2FMa4Sh4iUTGBw",
  "key5": "4y2MpE36rbtShLNVEFN2kv8gfMputtsqX3hxqpEfCktbppZ4HrmwT47yS6mM7aAtEqsSQZcrsmatTcyaa1yjzbMJ",
  "key6": "4hRdSFQfGjUeWUzpEpxZwyT7JMDVDy89K8tT3TNBEAsfUocHPkk9732soiMxeosj4VE5NWBn8MY9GWkJwCUnkcNe",
  "key7": "5aFjyaxt1aF3c2SMDn5iS2SdGKA2dSxvGuGG47TZE6jnNsTRQ685gchWEUeTEbQViDRrJsN7mB7bND4phAnStB9z",
  "key8": "5SdsMYUbxGnn1ZkY8QzLTVY4mU4D6HR4UYZ13Afq7n7ub6uCEoVDBXv5cSFuwwgYSrg6uridFKvGwRwegSwjKbHS",
  "key9": "pETCgYFg3dvbwySXJEyjdo7po6mrjENES199Y3WWoTmePpNSZhPnj1Cr6XrJVqwCKxoNWzHUGdx4TuqWjibNxEp",
  "key10": "2ubp7JG1f1onjogADKsW2YSi8FTXuSpa1bFnuHkUjBtbENmv6D3nQYYakVHmkkYunn52WaV2UVEoEyCrXTaDi8eW",
  "key11": "61ybjW61VfDyFQw7hFnNLwo1ayKDEi1TDku9fuWoSrj5BWweRWRU2WWvbqSqVQi63fiXvY4o9kBAPs1p6g4az4qf",
  "key12": "4SBUgCBWCKTTfxCTqgzkgnwVDJHBktXeNV8iVQionJqCRHrM7EYr717eDEznVvgDvngfVbgWBhGdvVmhpoxRNsMF",
  "key13": "4HEngWvqFHQUXXoGbxUBi6atydWey2uTC3RXXgDZTmhggBwQkJhfJNCMrv9FPFYC2sMwLLPYYWP1uDWQ2TrjVJLQ",
  "key14": "2mGufWovZ5v6HyZwa5o5DRnM29v46H2mkBsLEhcEFqVjFW19Pn5cT5SJJQ1HrbAqBNptBw2FqtudGyKy157XRacZ",
  "key15": "3YJYRMGz5Bn2w9cJZR3bb4yEHnUYC2WMEnRLBhia9YCdJMDwvznrVtS1HDDEHjJs32WQTrG4wuaHxe3tFf5NrJWX",
  "key16": "3LFVuUike3gJ3waFHNdeaZMZwdZMJTMVaNiu3u88JfszYMG4SC6zcYJcfpehhsbEPRXcRUsu4oZFP2ryREfBLBk4",
  "key17": "4A6SaDfVEe6BHUpchLgUYrLgWLahZtNudSgF1j7rkEMHCyfivveVtZjsAAeVovPrDV93zFMEzgBeJi6PeDFbtqoD",
  "key18": "3aQynKYrcUYoLqXgmFAxNUaE21Q6w1U74etV5Fm3HSWQCU5fgnW2iB8dkF6ksy9mLNP2ssAphf1E8RhMAveoRyK5",
  "key19": "5MVRvdC41MQgqYRDwKtF7NYz7ugQ3ZKfrJANdjrXxUrXCEcffURT6Bw3j3Ahwc6m68scUSuNmqdqLB9Jt2ea7QdW",
  "key20": "A8aZVrMw81mZviZU56cxm4WDNtnmureHVd4k9bF1b63BXfWuK9m4AWfdanDbLrZdsg4ghcME3NX3Hc9ebnPVmhT",
  "key21": "5webw8Mp5dF1q8YEbu9C25mVZhYU9UoEZqcxV42nJdNdPAw2YUCcWunojWzMXVSaXBEAcCmNENaCaXspAsS1zDgt",
  "key22": "4qkERT8FvjGGh8ho7TU9Nvuntag1SgzRsMH6PDRbU8ATcqhxYR5ckaqcPnHMnzSd1hZFKi6wak697RTuQiSLjiKP",
  "key23": "5CqZVaMKJ4XsRDgRvEJVJRvbycAPq7SQuXuLMDJGiVgq8RoGMEQd4ohmaLjsiMZfTHYNoqCKuvPz7UGEtHU1xX63",
  "key24": "2QyLbYCNoUya5sJTTvuLNwo16TUrS1PwCe5WNFis55fjzNLokx8ejnwyvLSePA9WdSpSQP48toQ4Nc2sY8qJBSKB",
  "key25": "48cKc3Ht2gbMCfC3KD8Wwdtcm88FCwybqb7Xoh1h14F3MjqDCVLa3Rh23NhYmr7WWnrgCTcYwg6HneL1dJUzvHVt",
  "key26": "51ZNbPZ6w4xcVJVvDKTkFDPgRbD5FsHhFH6AR7YNQuMYvNtucSVaPKUoPvqzpbNzbiGnfEoALHNYoEbArM5rdYzL",
  "key27": "3YZBmsNGjm6G6wDoy6gxwLLenZrMASH5dsxPHRccZVeBa4FyaPuhQKaQSAfwUX1m9uRasrwQtUVasTDauDaPZCPc",
  "key28": "3Yd5tBDCrvR92jgjzZGRs5vLxnN1rr6fS7LgAAUkcxB8N6jpuzpNFVQDRrULpHgWSWMDbLWfJiMAxw6ZhgbKJBk8",
  "key29": "3AGtdduJ5S2veA9FUtJE5S43zFEh9RzBfPBgeScXzfaQQYXxmAE39TrMktteNoK48JQhAedc1rAKcd5ZSryx88oM",
  "key30": "rFN7HVBAk61cRWxTeH6vwv2zyRGJgdkZXE4rbJE8KthbSSC2ukiyfaG7w49YzCXbt86jQHwu5CnJW88Kcx9duSr",
  "key31": "16cEeDgjkmWRJgSxTgraHYESoB8nhKU8AvNME5zoCydr7YomKvCVxKPSDjTfzXq8TMNKb5hdYCztiQbzd3BELFP",
  "key32": "5eG4FRBQz68WJ4NCo4VWWfyBkAs4YhuxVpLPZhSZVQL6qA4GsxaBHxRiKS4thozwzTAXryWcmYgdYLZFjmR82ckn",
  "key33": "2dKK1xoBR8cQJzk2dGJMjbSGTQKvDZMTrRheTkagVHH99iqyc5Nk3u9FxL5scFnjS6h7bVZSVfaHdVsbRBn4Uibe",
  "key34": "26umT9TZGGmLsjNkRtjfGpN18K1UJwikqzbnhDimcgZEZVDsq9dtgbZiBv8bwekRbd5eLo43uin8xtDZimEbG1Pr"
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
