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
    "ruYND6xvT8cbwGWF2jmLZm7PBJtxJWSNV5AdSMdEJc6SXCbgDvJhjE4ZmxvWdEDEaDxxskGhu2z5sonqT69PqSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pFFpBHADkRmKdWrgJP1VaGTUxWN2TA5VvKnZAAuztegptPuA7u6eCj5xMdSnweRUWJW7T8v5tQPBNN3ZdR82uXG",
  "key1": "2GH3E8vXkRJKg4AD2C4CfCVfnoK34jGf3wNBUVP7rJzTJWnjdvdqGW9c9vSvPmRKTBQQgpwrTAZ3CqpdkifuYmbL",
  "key2": "2TSDhTSv7G6zW8ehSmatGpNrB8nSx56E6Du2TBFWigYGGBDZsQrPqCQVCXmALLa8wVkLK9W4SB4v3zsrUHvGDYq2",
  "key3": "y8HiyU5cXoGHHPrqHm61xJ3DW6uKPzvRQ9N2N6T7BwS22gwDuSV9K7ErXmNupiCg7w26qeDMkknymrVGE7ytwxD",
  "key4": "2Y3WDKWqSQ9ootuMAy2oF6yLDeWwT2zPv9BPkPCM9pqiQBzwk4XMS4CuGAMHMFVAQbiNPM2kFXuM3FYn8PdD2fFA",
  "key5": "3Tgc3Xd6CjcyJ38LmGVTFnLCxhd8GLn3kPhnW6RzYofaev2YWWyS54tRCJS57qpvjkr519DBVYrnUTLzzXWiGC62",
  "key6": "2CQNh4Bt7QuCm4ENPfWjyKNtkJPMkUPara3xcRHLFQLBnTFYnXWCdUUjMR6Hb25nkMijMfrh7gGQeRdfhmTteZ3V",
  "key7": "274GfRi4d2QKdraGRA2tSi4rkGkdgrR8eAvqriKymA9wMGjT3pzhPdYBXPviL6YZdXKnfjqnBVdJ4einAqVFrvRq",
  "key8": "4E7mVmtU7tZYfmZn32e9bpJqZgRvQYkyzHZkTNUNNCDv7LpmrX67E4uubBD7XLXJ1CnUHVMdgN2tGwK2G9xih4q7",
  "key9": "33jHQxM4xnTep4eAnZGNZ7mV99Yv7fNNHPNxUXcxkDKiytmA6W4JvNoWg29AjfBGj1PVzU7jT8jUo9W6L8pTJMo",
  "key10": "JTWtn5ruCBf6hzVobvC7cePhe2WRpXVxuiupzVuZzTUomHj9SwrS2pFGa6LjsdVpmVLksnLruKMkvd8Zf74r3bY",
  "key11": "HStsn9Wen3urmFnWq4MyXYiN33hH3mPFNGqNJCArQKdVLGdTm8X1jbmTkPXFvuFV1Gz3DnihjpHTZRHtqbvM189",
  "key12": "3Q1di8KpjBp7k9YoDmx9iLhX5mQd7UUU6WRwTex8oaQrWatvpTp9ycunyQA8gMGKyU2EXAvnqrm2JrjH7VHzm81G",
  "key13": "3Z16npLYr8CWMsdnaW7HprN7m87Udrp5bmYz75qTAyUUZTwbzQRup2DAbTjki6G29XJRArHREmSgfBprT1UNYQAW",
  "key14": "5PtWwZ5QAEy8nNTGpddApFh5UC2ZrKDbvdfhUFgW3AABVCYJSewDwzC6y84A3gcrsYYvQSk8TSXncnPxrXUfqcuj",
  "key15": "DgTxbW9QMa8mC2miMHCBXUnRDW2mEPHrUaCwrZSoPTrSPVp3t7xG8j5BcLMhpAy7GgYWy5H4BNbsedjbQq42K8G",
  "key16": "2cVz4w9sPvk7T2NrWc6sHe5YZuLH7LfWnL65sARuPfypMbSbrFTHpnzk7KA5TYkxJ1nPBawbef8yoMNEVE2jGhNt",
  "key17": "2XT5MGf1hx1tfAgCu7BenLB8eg4M6DTDnKDUXCZBq54UYYXUwy1CE9aPJFDHUsyjVaWpDbAj1XV4SVdTXrKtK7mF",
  "key18": "55WLD5hUH5C7bxBffbFYFc9GjKAqEqWhNwSKrT8AWTKFi8HdsTeNKwV49onk4Cscup8zZ6FZD1WUKnn3xLuZHSR1",
  "key19": "basEiy8ydgtc3TP5RSRu9XLtzJUa619mZUaikABdt94S8oU8FzBurduYxAdh29oCgH2DbsqgXBk74svzt8cBwhR",
  "key20": "3i4cCfX9xRMmcaZgcHoD3pWdvMH82wYVPHAaBigwYuoUy3ny8jVKzAsg3ueYJDWnfkT8Ra9yBCpfqCyjfaaBh7mG",
  "key21": "9Kgq9PefxFnt41TMutNDrqc43KYrooLGgyiLeg6cWJ21ndZfw6YhyUGQw2YEFHTy1UKCFjCVLj76B1wtJKRg75o",
  "key22": "3YSdFJiKihWnd4hdf1gLT9jt7b1oE1ify1eiYVKLkZ5G685hhv4nXJZXTJeRqVcJ9sJqruAzgqRntpaapmvMMi4u",
  "key23": "5ggRLj6zFVGRY2J6c1NJJg2Mnx5GefLGE3fT6LYYcW1v2jPnnJqWSzTMk53njbobNoAoJPg5G2RKdp1Bco43cxeR",
  "key24": "UViJBhkmF95yXF1DaxWRSqPhta59sfq6qHYDEVqEvZyMGAUaaV4MyKJLYwHb1BaW5TFx4QPhWZcZ9CL25GLJRgH"
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
