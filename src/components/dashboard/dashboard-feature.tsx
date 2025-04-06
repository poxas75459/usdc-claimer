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
    "AiiU7zZ2P9osnA7R4tBUBriDgkVvGHykCXyvQBgiGomExFCp2hgSpqZZEXxJrmsHaPgA91BkCiEam77XMa2ZyjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WBgvLvVtUzAp2QF1axA6MZQiL8x8AcztUtSUiV1nvTcHn2P12csfg49ismN6ag3V6YFPiDMmdqhodX9bi8wuTrQ",
  "key1": "2p44FhWEE8xgC8UdhSfJx1ErqbD1HYHDa1H5aAXKCUzTmMShojxcrRF2zUJNtqEm61tpvsCgBqTXpaYTn8GDxU83",
  "key2": "2MAN1uUeYDAbND7JNXQp96q2iyrPWZbzusMrwiAZhRoWuxeM7QwJHBy3Do3PmhUDW2boxeixnjuZrDvK2QLDqr9c",
  "key3": "5oZQxLXTpEKd54jaBn9acG4xhwNb4TURond9iNjW4ssF1bDHuxg96y7g34gvLaPdFrNDsgZkAbPBbBpjkTrJNEAG",
  "key4": "CbhoBtivd4HYuTj7q2jtDtrnvsfCn4n1ZkRVaYb5MpTfSM1smcfrXMfaFiBBqf3uX9s2cSD55z9EtxYC2MrkaoS",
  "key5": "3PtuYHgSLjvJ3injoZWu3YN6KR6j2cq1kFnoW77RqqNNKfhMxyCJJLPizoeqtm1PhzFgEr85FpfTXMzbtoXbSCLQ",
  "key6": "4fAA8HjFWBv8pMgcqBZGAmrfJPudW1aZ9doDyqEWb9zpinEkc8LJeGCkh8PrhgP54CkvjbJruSRSZPT1cCraPTwQ",
  "key7": "5Jd9PzAvFMHkZqHWkB92chAwVs9bJJFmT6qjxdF1j9PHELoHZfzz9WE2ideNFsc5UZ8mYn2CjciupMHFTJfCrohD",
  "key8": "Ui1vDBvZAJYskL1toN6tW5FLMDnXnDUCviioHXQWWN7yZ7mi6RdX38PGTy3h6pxucabYyZ2a55E2iVxJGUyN1sk",
  "key9": "LiRUeBVhotz735L6xeFWGxbSBRhsTvMs7ao6pL5ocd68RGvxknxWJumyrwTTDLVyVzescLVvgjtDg2WfEiN1Dfo",
  "key10": "4iuYu9Dfy1B7FZKRrMjwkyzVrB6QDWX1k3Zue9yWhKtqp4hgPXwQJqM2tq7WCBAJxqCRaYvBWK4JGbr9t32vJk4",
  "key11": "4E4RX7XYf5V2REtDV3WbgN75J5gTdy1kPWe6utPNw51QoKcDX3t19mLwhB4pKNujKwt4wPFEVmYBH3J8Zn6nqDoV",
  "key12": "i9iAfDF8JJ3rzw8ZczSvjdxAsqGBy32JcXeMFSc9z2FPK392u6DoB62r9qsJ8jqy51bepk3xWxYiMvUPTy4vqKE",
  "key13": "5PBYZCEqJeaNieM59fFA7qY8fdUjB9y5PNhdyN72txAGS7GFseUy75sHeNZxyok4gyUMhMo4Dd8R1qchuM7AEb4U",
  "key14": "5xUfxuDi5B95kt2HKhESr9xV5SrPAeakFiUaqNFNXmBhqFcUdkaeZja6idReXaFxA115mykVZS8gKE1bV96htSdg",
  "key15": "yEmTyQmouvDuBySEnGtyHFEhb6JvM9RBfB1PoUZTJsWukGwzHyjc7jsQPVWuEgedDV2Ccftaryu7vwx7avia4Hy",
  "key16": "2RLERFta5xR5z6E4SH6muMdbyzMWfCjDLJfPTWPd5Q9vEi2618zUboiRT2s7WJNp8f5FV7bYNgQkfLYWQnX2eNnS",
  "key17": "3jugE55TDC8QLuUtt6JXDFDhwAKSF5DUWExqggsZxoKmuTRabYpnHCUwykM4FyH58eGADwk8k1CjdTBTH2mDukud",
  "key18": "3RiydkAN5qzWcMec2VjkNMdrCc1Vxd1tw5LUrfwf1omewVRmxf5ZuCJdA3iC78f4MS7weorBJPjiiMVhcRiCN5vB",
  "key19": "3ettEScQaQLuHFCoxY6oZiYnNtU5fbr7rdXZVDhWRsNdkKYMrfmkPh2vsdTAPSkEk3spvgbT5RQCyUUetoqfsKkS",
  "key20": "xMyefgKSQHe56YxQ81on4dSfdMwK4XqQCeLh9y1yCES5Fiji32cAZd4P5n9oQzxPK83GAfax2qBQ4HamF8Yojop",
  "key21": "xukBS7QGPqsTSzYtCNWDjH8A6aFMV8e1kgatoDaNNWUb7yGQkbqk7zXTU9i9DwuNup7aPpWu8Tj5wCF5PCFEiyW",
  "key22": "54AWDcqTDzr31exnGawcA1vxdozoL5xMgvgzrRd2B13n4z1qngo6jiHdpBpL2kRBc93Bf8Kr69NZ6mic379NQZM7",
  "key23": "uWHsa733g2izo1DwsdYmTR2UuwJd2GaVg61NTDjKPxQug76Xca7BPkriYWpQCLdRgb55YPe1ASA9k8nZ9wZTNta",
  "key24": "5DNo3nQTg9dDCWWwDfAe8mc7SVe3prpDnwQMxVjVUfwUYsNG5mawzRBBEtJpScig5cXtcwzmozqsxHSMHnCoR4YA",
  "key25": "61GPYzHYEcVefCzwVk7QtW3SwVk9GEFfxVDbbtHKuuA55GF78gmpFADkCMjwcd5ba3k3Y759BxotennC69gxi9X3",
  "key26": "4EYVBwmD6F7iPpFA597YAFS25HJ5boDKpvohRXTqM2FWn8VBbY1HLTQFbyJX8H3UTbX3c2H4UhHz58wouuLzYdd6",
  "key27": "4nEsUzbWuPuLYnSAP7MVwgpRA5yudqqR1ath5TL8v8GKEzBt8nSLNgE9vPbtV9wff7hUnNuAMK7KaWazcxEUYAkf",
  "key28": "59qccUhEJfpnSJN29VTdepnaomNyDBJ1MhGczjMYkPDghbDZXJ2jU6GDZn5jcuRzc4uQSC8t2S5U17RMVNeiRpff",
  "key29": "3wd9vqigvAxjnYxvjy9TPGK3NMSMcX3Kmg46kRGnmr8tNPQHuLEFLEM6nkC5zVwDzFBkyNoL7CBNN3GweS3Ueq6F",
  "key30": "5JXtwWH3abbDS47U9zQDZ4nAep3cvashBukFuNsVmqFp4ZCjw3saFPtwzG9Dox3MCoLsVvrbWDnMCoEnDkL9PZ1r",
  "key31": "pTdT3MZKoPxy3MxjxcyTvhMHa64L8VDZQSpdYnHUxYLqB4XNJaWMQqUk4LDUdSs3hyJHLc3oifTjRXqQ55iB3Gw",
  "key32": "a8iTRm9HbNa6fvHVaS5HQ42AFFZEexXxRb38ABZvVivWBWSfKgyPPaBcnaeYgtdxjSYrXNvsCB3cKUXgtZgjNcG",
  "key33": "4vzjRgn6URhAm6LP8Ww2NvygfeqrtSKdAWXx5WYAsU1fNoxSQEHUNevfZYkwaytzdNtsmc2UYnMgEiwMygusCpvr",
  "key34": "hkkb81t4Y1PxcSvmamw1481mjRcbftagwpQHDiEvEdFtxpBZvB3EPCYhTxKZtkNQAorLSix8mAanDvZR5xdjGqR",
  "key35": "5uLVbcmEJu7uHKqfepywpadfmQPs9n8UuxCqBzPn2zDMicAFiKWfoPXBUS25iGr72UZDxn3CmfsELrvoyZkWQc3b",
  "key36": "4jDNdUVVMeSTLBWVDbDH4kn83Xvcg3vwCPWjdiWHnKTr8vAYrViuqomXFGooftmzhdktyR2qvtbGYUcbeFkZR2T7",
  "key37": "36VLpW99Sc7yG44TLTj4RFfx5tRZFitkuk4TwdBykmgS1fqhMbjHkebJMNQBQ4yge42bEzLdL9WX7SXu8xmF7nAQ",
  "key38": "5HndteBm1S6F1rBKGjBxisCCFLagrDkjkYcULQZBbesG2hDegJTXfPZjdBRnvkeS1FXLdy9QSo137HeG3tS3ZDns",
  "key39": "4Eothg6ZgioRzBKvpQi3KaumXf9mQBxYroukcJ8VArY8Ybeq3EZBcrdpheXcF5M6HMz2m7Z1iv7nRB8SX4opqwPd"
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
