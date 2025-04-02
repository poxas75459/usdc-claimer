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
    "5gG6By8CKHH3rvAv2n4CGaCR463D4JEQx86RY5DZ5Szqq5DGL5dZuVrrmcEaNCnjbnhmP7D6wtdxAo7b7Bji7stC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38g7GWRGDa6tJNWQ89zc6fB2kUEd67iEf37kZsD5AVJbPqAw49rrRVEgWhEz5cAaLjunSvrMFf9g2oy6o3uYSBYp",
  "key1": "4YHfdYHAy9nXMQ9unFZ2HFTrUtsrC3ZuoorTKS4FLcYMn6apT5nGYuwWXZ1SRDbYGb7MAq1HaX75zVGoBp7c4RrN",
  "key2": "nRX6zDwnWsHZBgqJ9eCisEMEAh4RBCHnUEipxR59yhTyisi4t3kcwVrhvbpWfNFUQqtj3eR4BSo56YVEwPj48CU",
  "key3": "39tkkXDS3SVKFnExbMmPCbQHDgmYohk8C2gf3a5qc58NuYF9iy55zK5gWL7WsWEnn2fPbHdGHMMWSyaajw356VKt",
  "key4": "4V6DWCscLzwNNS3yMWRppJ8hEN8QW98foaiaDHtdeu8P4azQBhCEfkYSr5MnbC7vkMptbEv3NP7F6XRz2PfHCQx9",
  "key5": "4XnwyY5QrtVwTiYVPa7Kb1BRkLyY9AkGimnCk2icBx97eGoEzX97TUdwL3kUTnD6smyDSWZjFvwvrbYHnsa8C9SZ",
  "key6": "3B7xyc62hRtYRTXwpMdAzKhzwzu8RYauZMHHPmMVf9i5yYXio5bshjW7mPoMEvnxsP1Bwstqn9ozuJPKXc2zrHHn",
  "key7": "2cWFrgRpz5TZEG5bKAUdFeXYQxYEppuBYe3VJmyFUeu8sb48VMEoCZYHaxqiCxV5AFZhk5o3ssvebq3K4MzBfys7",
  "key8": "24soAcmgY3t4BsiPHbJvXo2Vv571KA7jvvjqkQQ32BU1pXcqpWF8xnMs8SfKEsjQ1UATpfVrpxSPRu4V1DXakz1U",
  "key9": "2tSeqB1yY3XXGVmLPveNmE7xfwiCFaTb8Mjiezbbsegs4ai9NEXLwLEC6uku7bzza31EiLN5ETW2K3ejLXsQDb4r",
  "key10": "4z54DfuYquAVHpQs5EPdo5Bv1EhPH3KGTxJ1u82JgisYrPfdGJGdsKPAXXp9F68CbpqYi4Ar3Fq1bFJ9wmeoqtvE",
  "key11": "yiyfGdYrRSmta5sx9wFfLCBBuk98PGJTZ7Cu4XfWZBANj4KzLxk8QvkrX8Yu9FQBKWTja6zK1A9F6uLtqxw2Pbh",
  "key12": "2H1fkN9NFqXugxbWVG8eahEwmKTvDecAhwLGwDogdJwShno1cqN4vjqaTceoJBLpdewbPQ2d2Mju6jqNCSVVRCuV",
  "key13": "VqF13EiAoP964DsTSbnPwfDuv75Nf2TBWpWjmGBaxMTsPfU8pSJ9Srw7A2WM8h7GryzoLYPf9qZEEV9kZ6zZYj6",
  "key14": "2pskR7DGHkBfdeKXsFpuKHc7xLNk4fVxWvcE1wzKLQ11kqbvYhnV7sTY8niK9n7neidLaf49xsg47hvkafUyKSxw",
  "key15": "2rdjnbgWgh3xWuvJRbZXg957cRFVk6qhQrppfzajbbq5gYNhUQe7DuUi4R9re1zso4GAUrysTWbdz2eMsj7VuDWc",
  "key16": "bGTxCyT6YqGYa6MxhwBenk92sHsZc3A9Tgp4Fk4hDz4YWHiEwZmS4NeN6g9QxpPgcKUkqfg9tTz2LhgA381LvoR",
  "key17": "5o9R2T6bfeUgXwqXeubdyR8fRKLEnKx231HMC6cutX9qbqzC3n8NXUNw3SWfUe6Eq9rNfBBN2zzvW8LAabU3SWWr",
  "key18": "2bk7JiByjkpRtiWSyjx2eL6mX13XDpgcCPgGYhEqnHeynbRto8vK4iPKaPfHAmrR7b2K1r57DRmaLo5WfuTiCTEP",
  "key19": "3EPpshZUAaC46uXb4AtVLcrZeg6DhVjAoU8mDFTsdcjGdZ1gLobywgifMvtatzRFLxmh85W17XFUZS9FBo3x92wU",
  "key20": "tsVu37djmsZm2PMqjSL2rtfRxfKdyQSUrL4WGc3Q9QyZxAzh7h92ZKUX4za26Ln8JBsFHqPLCjapEsd5Gx6aSeS",
  "key21": "53A6VAVxzen8jpTZbZ5sqgYc6FTPwmdxPL5PXAm2VgCBRiCp2tazrZjFAbr31rZw2gum4Ati3XTPindCuMzQb54n",
  "key22": "3xGuoNAS2aTp6oKNRrkQqMEaJuzgnizjVPHH1ttQGEGeSGT9ouBxi21rqTi4BiUng3n9h1J6MU3Atd1Ti8yTsAuW",
  "key23": "tMKDuSRJeiebKFJp91XwsugnPSj8UzHbrWcZpsxHRbJP8U2PEcCUN5zPnV5n9CHNDTLPYAk1rfFo3nMqFJjpskd",
  "key24": "2dd1eY5ftnwPtas9gJNvywY5trxVcHdkqYhaXLUZoAoYthWbFhPEDAyyDY5udro1JEFmRo5GpV2rHPSY4Amm9G7F",
  "key25": "3huCk881LR6Afn84QC24Ng2oXBECbiTzwS9npdPAg5MgkNL66Pdhy1XW6CJ8G82xbDiaTAuxLJP5WnQjdHEMw1XK",
  "key26": "4ASKeBbbQUjgjLocgvzQYXoRcSGe6KC5zbdwHQeUvAESrgnpzmmy5jJT5M2MNGYHv2GuqN4agWRZHHAY7anApwNR",
  "key27": "5WapQa4bgEwawa96gBVfhDXkAqHHax5xw3pvPwjLddNEVZu6xUz8ZLUoy5iqQyG6b3GqiUpB3goW1ktUgUFQZ1TY",
  "key28": "3ScscR84GTEEjpFqqCFWbyuQprD68pCUnqt3hhkNykC8v77kGUSUxTmCRKf4paTr9nT56rw8EKeGRP6T31GsFvuL",
  "key29": "4PpigxZvj17f6YSfdr1JZCSP88eong9EjXqCogZcF9inLeJqj94fpsCHseTvsKWSrQWJq2BgYUBajajuCsQK3vZY",
  "key30": "5inr1xs3Dvq7BpUBb6PxBNUrMRHfPh4jcdaZUCmoubtia42CZA9utQ52P1F9kPu5VZ8GvrGGsSW9BCr2CAXjzJm5"
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
