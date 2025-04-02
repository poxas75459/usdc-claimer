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
    "5KLAYF9HcK8ZWNhBTqDfEYEDqnAfi7xkxSxiXNctuBFBJoumshi84mnwxDF8pRMUSLY9o1t3fqfUztFhdJbRaBm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53oRqQbUh8sHE5jfpP4SaifyjzduEtT5J3uXdsJcJS7FsTKoaUsAzDA4D4x8y8DfCESZwzncEdJoojWcTrdGXXSR",
  "key1": "5cAQmdExXXWnhiijT5ApkfveJbsRkTXJwSMvPhqZPxZFi2rR6AvaG68JnGZ4Ti8BAa2NNuTShhP8F2LytwNFnzNb",
  "key2": "5r3vB6RhvVio4Mkx4WcQCxWT61RHpFCKii141mUJZh7NcEfePSMnj8qAPPeZqfeV8ZnTbZnXBfkRg5AHhuiaYAaT",
  "key3": "5YvF1acQ5DmA4Wzbtj2muouuTexKEsEj2bCcnoyS8DLFubaNuRuUPEjLi5YsnyE4516aeUdcgmD1nKC8MoZY2aV5",
  "key4": "4Exu1adtGUVJ4iUchSEFw9wb2nFkX8tUyRc1pKed8Q9gRsqAiwELD1uxgX4wytvpeUwbGjELq8bjg1Q6ezfkAYwd",
  "key5": "fw9A9UfLuQzjbaATfcFeax5xAvnASRTxYhFen1Xz1WNA7oAnXGovxEqzRpXyvXZMQcpdj6TheNf9JSbA16EQWaw",
  "key6": "4Ft5gGtvM2SbrdhLCrYz6BecBGXkYpxTeehA9n2mN7wqNyq6cgKMH3fPA46xKXQbrwwzuniv63GsQ6931HZmK6Ur",
  "key7": "2f1pTyJJrC7qeewe8x6oxV48FUJHhocwDEk9ufHp1xXDYQmfPZw5YAok1tDZdMVHFw3Wn5Z3DPqpavAAyhAieUmf",
  "key8": "5PCzXYB1nbCG9fy18QA33PFFhu2QAm7AvSK6bAPUrRwnArvrDXTJWWHwvvWsMabSq9fU3KKLxDYvzrvL9G2w423C",
  "key9": "ukW6Y2A4yqzD6Ee5ZcDJyX1eqQkY9rhrLV3Y4JwheSiuRxBD8YVz5ZppVNBD5Czi8WTvVwH2qgjjnNPnoWoEAYC",
  "key10": "2RWJ1SDwubXFKoio8c5j5fEMFygHpGLZbZALvQzzXXPjpstGqUmM5xc2i6W6zQ4vrSAEUKDEY8cDHSCk5dorxrWv",
  "key11": "44upp7LDow7wLcq5JmSyTNtiiBkzMj82PXiPgU93tXEHm7viPeFNT16iQM7HuAUpMDEgjkX3LXeYsKpayE2zbh7S",
  "key12": "3cDYg5B5G9SxEBt3LttYwjqA64UEK9KhRgDG8ghJrzeimpb7xasYkcjEqF4FL8oaKTdsFGfPwCrjvuw7pnm4h1Tw",
  "key13": "5osYDUrnDu1GvtNnroK1EZDVeJnWnk2Lo5tMYGNuCDgRvtRtLqAfW6493iG8ZrVufzij4CNgaEmjsepSarkSg2m9",
  "key14": "2PNJXQD8iPnDGiJRbVpW1MsfcYZzDS8gBKsxeqKbJiCv32HbRZ5xqpSwBmMf1FUq5Jo8i1Sf8zk3BAfgRcG65KNs",
  "key15": "RivrZeYGi3iJQbnUKjfXBvBeBjS6omayPZ4tTrearV3MKcR6TKHbA3JFt6SzMBFoXUg4KL5X44mRpTzmYEvpiUu",
  "key16": "3PSBrMLGauSbgWZ7zMRYw2CqVWSSsoXaoUxe84pei3CDXss26RV2qMHu3jZwWMMPXmyDQEtsK2eV9RkFBXmyHgVU",
  "key17": "3hyTp1UCKepxTHaVuDLuXhh1ycbE5hS6HpLCf6TBrQphipTunhfA69oE3dfRNQUjfQjbco5m6vszgqye1D715qsE",
  "key18": "3WXN1nF5GkknQnwooLmstg1dC22ue56eiNFsrkZs6Ek1wqZWS3nRtawa2S64Ew9uq2GYXHfp887Nw7HrjyTw39JP",
  "key19": "5SDpY5AaWFPT3yX4ZF8wwtY4rt3cMbAurSt8b1tT6V26prQcLgAtHoxVZ6Lirvy1wPhu5wt9xvuKgeBVK9Qv5BKa",
  "key20": "2pDDpaDYMy8yha5Me341czToWmAZLTBiHCqLJy3tbVFF1okgCV4P8ya4jXkukCtLD428LyPNdLsZzyvsMvZq3he6",
  "key21": "HHCaDDZXuUPBvs1y4wGWb416ocEGLRVcDB95nboJ1fhgdUJRi4n84fT9E9aau7H1gPx9nfrx5MyuAqpEq9AVUxK",
  "key22": "2MVgXG8R4WeDN9soLzz5nCv995GvsrCXiSnJTUPeuzQPDahMJJMa8NjDfW39Z2KEH8XZc93m1pzT4kBWUov2oCxP",
  "key23": "4fN22K2uX4ktH157HQF9XQr11iAoScHyZa5SGfcMMKRu5n5Vh64QU23Cyjm96FxriZYPjk5dsKiv8V4tPoD1Vp6u",
  "key24": "4PeRn9jsR6xp8oCWTYNJ5duNPLsaT4AZP7J35muDwfsmJC888ykKWC9SXuDJ8GYb7Tk5o3psgiHBNp1VwZBntSea",
  "key25": "2uRwtNcCi22sQLfFVMnzPro4Tt8FwPnsANWPw1pacL1AWMShw465DNp3Ugd777k8ijkVYN4z4JVTqytYVw1jbo5g",
  "key26": "3s1an9tWPzG8im4QFF58YJE6sEa7pUD3Mmw5YBjWcfd3b62aVtgmxLM9SF494kPfFT94DNjXFaF71yX52gjB5Esz",
  "key27": "173TY2kpHXr7tkzkTNWpJpaqyPqjwDgt8H5ZBYt18N1GqXLvXGzFi45WMGp1xspcrW5WBquFj1g2CTYzDDvpc5B"
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
