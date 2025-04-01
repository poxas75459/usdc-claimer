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
    "31dYCVKoXhHpud1mgfMRAtrt4tufh3YjeZdcCDNUd4JyFdYXGrqNuDreobzf8e9GveBPG8WaJyustswFoBPqxdSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xCgASwyHH6jktxMYzFUkcaLgqDUTKvBHvGaz679RiNokDCum6NcMrw1uHMy8TEUNL3JJngmHeB9Dj5WdwcV5LTX",
  "key1": "9FD7uN3Sbu2rYfhmsVvCH73ZLfgExy5pjKcXSRXXyfZLB1K3NT2p4eZxakdeRM1VyScysRxkT7sCQNvwzmtNpN5",
  "key2": "B1ZSkDDCqbXsVrpnjVa9SYkaUBxRNwNCYdsoq9poQyJbRSqyQMQ9pa6hZ1QEAipYUKfeoaVohWvT7QAtLh93HwX",
  "key3": "pHMdXgUjAZCQygAAj5ZVJWskLHgcptsmABVTvqayGkwA9g3jQ1fXNP4EFvYgjutLe2EnVnoCe2Hcib6W9NZ5HDK",
  "key4": "VVjpJrYbSSxpH9mMgaTxZjxGe7oQdpPRsDFdodxeUQ5FQ2mJ8h8U8WAZ7YJaXUjMUtHMiJn6ywcrFGtVDFXCbuz",
  "key5": "XcKpL1Hva99maE1fs3EPgdyz7Ukqdc1aBM4mAHZH9w6ACZce1yLKCh7K4TnkW8Bm8MxBufFND2kV2bGXx77o6KR",
  "key6": "42qdPHrKxhsZoWTaW3Sso2ThG936uoHVSdS2XKsuA2YRFRQtZNTS9asrSWPfxuSDfFcR73E3WRxysjtz1GSV39Vz",
  "key7": "48ARAqBzaonqYtUsrtYnzQeFeDZTngyhZERqkvafMLc1wdDTrvjKESG6BL8Br1vm8jNmsSSuW84YRJp5D9jKdxoY",
  "key8": "3oXgdgLLHAfHmJwXKVh4qZjPjVX7btYoLnUPY3CBqN2V97hMSGeH711Mowv3ybdWG6vLjuYQpFvDgbEvkgymcnue",
  "key9": "Urqwi7HJ4ocAoK6YN8DEZYv9hqN6mVfEWAn7vYjGT2Nmg6Qh36qvkPa28afCKtxk7DsiSfJoAYWTbvYfZjsTMrE",
  "key10": "45QrqxhH1W3HchrCnxtUV8NttQjUcaT7D7L1v5ctgTcdFURTvXc2TdD53hjfEmhXDGezu9DouEKA394bcRkCSDGi",
  "key11": "3s2rHLeq5q91UPcwwPZv9US5KWvQKeA6ESwB7uBaUssEjqhj73hkAFBhZb9Gza7fr3oUpn5o8BsyHMQ5NpUr1Ln",
  "key12": "2w1KviwgEV7ZNwDVquzRou9AuVXHdpPxYLpv1PYoVYPaQfxi7NFuDcnLNPCWB5ioMnck5ZM3sjEsLhLG8mnFRmKc",
  "key13": "5mwqvR7zFP8hRp3W4ZJzgS3wYk9qrV7Q5WcqGhV7m3boG3JJ8aWxmcWjyBdwz49VGbHgjthyGT6rDo31Q1V9squH",
  "key14": "2AUVmyt9zx456BXEJTCYouSE6cN6zpJAHydupTBqvC6bcDkuqEZEmK13dE4AskHcwHvnAQFKE6NnF4DNJkCh43ib",
  "key15": "3XCog3ja1YLQK3Jux8XWG4xSeb8xij31TzGzcSo1qmZLA1ySJKJN81DwUQMpHK7uKhSbKfXogm6wxw2rAyjHV74d",
  "key16": "5Cf7SA2iVJoCVFVpvTDjF6gp2JCFV3ymczfWtuM93yCojnsbnQLTzm4eeNLm3CjGvMQAz2umUewiFjKtUz4hBL5C",
  "key17": "4MvukXWsUcaJBRhD48iE7LDsX1ZSCBiWvbHdarV3M5Ur7th6m7x1S8rNY1XseVQm7aLJZZ2ATtGBaFzpZXHL316r",
  "key18": "GYM4qDVA8UmDVFxyyy6TqysN86xaxJa15f6zh63vJNTZMGwtfMA2oS8PcnPah6KK3UJvMdbzBxxkUjxKwiZRrKK",
  "key19": "3rEtM1tCSkHTJeCbCZpW47DZ8Y8UUi6zTW6PC5DerwVUB2gc6qfz2j3UxQpTJGNReMq7tFePUC3d9gcHDuppJBNR",
  "key20": "4SbzmF6RbNiM5QwSzX5bsh6E33nS1DJxXfSdEaDpvdhPZdw4RcaGrMZmUBgQ8iKJY2Gyash1Ze4Ea8BeaL8C2GZu",
  "key21": "5rE34chrbCJGmgRywQ8aYnbX4e5rYDqJ25gmc39LDAg835tiu8Y1zsBuVWUhmdPHHDiaFwhzKy3KuP76de52ziok",
  "key22": "5c1aYuEhdD6gZuDcvzhGzp3muZEg8AFB2v3GX3uSsaEB7MPzes9iWmq7rYtu1hkzqz1h1ebvTPTYzHKMVVskerFn",
  "key23": "4tCxXLJ58t5w1yEnA7oQfgnFLfnDVbMZaLdP4DdioLEztaiyCqPbD13mJjpgHymjHYx5VipvrbihYzcXm9wcAWpB",
  "key24": "661p8rdo1NinzeCtGMEfkAWDtWp9WJEGS6D67rBxbb6QctRNXpcafKc7yocbfxtnkmrcTdeuui4gACSnXho84Nny",
  "key25": "wwuExVQxwnsirH9ESsAuUzcpaf6jevpHXoqjE3x6Z51dPoCb2UuTBaxET8FyYCXTxwQ6H6JQL6Cc3CHj6FQUkjq",
  "key26": "5suRo9bqiMiUQZE4AyU3AmxWoh1PpfGCnBF7yPB1sc96ew9G1wPMc6yPNJTP435xjsqjey3DW3h3tbssvWt4X96r",
  "key27": "61ojArZKYPTUfnbXvbRB6YjfVNe1h1YfLxwXapWefwuSZZ1bSbjSwrgMcjNJMBA6myRqdWLqUWsszCfLQvrM6axh",
  "key28": "42iprCrCPuciRiGJ4Te2AyWXYSHwVHG3DYTPaPxHVbAEAKRQsQMnoe7n8fYw6PFNiuCTfev5KJzW3mY37EXG3NsY",
  "key29": "4TdaPCFKuWW3LG2XazwtXjGD7Bbb7HqJ77oToQ7XUJrHygPfwGfoVSg3rDrfU3hR9ttat3Gtw5QEbgb26Jp5Fpay",
  "key30": "5iVcvFmGSrUpqfUNBWzVKVD1w1dyu1NFr2TE7p62y5A6g5T5vqEJx728BbdR84tLoWQnDDvcWqssaBhxi1Py8x43",
  "key31": "5sRwxYe4ZSn5FNN4s3GGfaxxsPGhHTNNj87rEKFsjAE2fkdVjUJ4tURUuqnZXSJoJ8ruwhdNUWXDforwkQhpSpXe",
  "key32": "5Fm3U4VLUkgdJy2GekQNtGTELn7JTY9oVx4RaRCp3SZYyym7oq5Ad3DVrcNTo8vGiqns73NQmsCbooXnNe7DxYmQ",
  "key33": "5294apwGNdkyJuAcYudXd1mHnv69yz72gHedNSLJ8gHbwJVSmsZWarwdedLgo3htydAEKnPKenabZQ7tKAKZDQ5G"
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
