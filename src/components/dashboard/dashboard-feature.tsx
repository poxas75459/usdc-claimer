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
    "3AAYEnUCifcAT4X9hnuVPEXrv3UAncbWJy6g8S6VrkVXr2mfseaw7qYFxEARiFP64rAkLraoeDJkRvaqQHWCWyDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZUtApe5S1CvKALqKPYi1ZQmE7c3ST9fozRS1vRwJvHWZGFixsaNXxzm32YpvM3K78qG74q1hVmJ93drcdP1hr6R",
  "key1": "4pzvs2CbhnSrtADo2RAbaPqzftb94Yk1tsqvHRUo8C5cCmGAFEM1Mya2LaFzvdkAPf8S4FPuhxfLy7v7wnruEHsW",
  "key2": "4Pi67GvkTkgAbcMCsrBUtJVWo5kAvzyezSFgT32LoKiTojk2R2aVJ8wMEtDqfZBKDJ7VmFJgcPhpSv2NKMKATXYA",
  "key3": "59UmSEzkBm8x5WquNkvTJrzGakTsqkkK1FeeD56uvue9zv1dUAMJWg2EX59yHypvPwnnHgkGbojaQnJ8wDkEbJVK",
  "key4": "35kV6iftQKxLYqxjxANd2pAV5sTaThRHXkkoB8gWT9WsD3UDhGF3GpFYz9aZjVBHHWcmkRD6kFWiqvX91dSgy47C",
  "key5": "4RpFxDMZULRuinrMiVttLHX5PUWUjzBK6J3xSJGkyJKFWmPGbW3V8XFEDiTybFZ9bJzdEFWhSmtbzouhiiwPpx7M",
  "key6": "4sZMtftR33wvr1mhq3QZ7DDz6jegRAbdEmpsRY2Rc5kKTww5ssfBJx9CsZbvEabi1oioRVTxhgfXJjAN48AFUftE",
  "key7": "vcfAJX3ddzsK5FdMwoHME7T9HbRgi6uVsVeCGvNBvpns3NtLCj5a3mt4UsbWhKsENeCZRmRxdzEvDsBW4ghcFvi",
  "key8": "3LfH37CDcjbeE2FyxptcPHjWhYHdwNgwS1HGczhhCca86YBUWgn3kfZmDvQi44TKahXeyHhcE9X2HEqPvjQ4JeLi",
  "key9": "2xkUNDuNM94C5K5wXP4maJat6HXaCWQ8grp6xaMYCMSY6HDzUED9xAALQiSV1RB8bmbAbPqEy81Lmw65M2EdtMtZ",
  "key10": "4QWbcXvQCBLqpEu8wWQ8ePuX63mzQtpK3yMVcEc3zUfqbb1sBAJvbheLRwUkD7wUssvsNBhGxq52DzTLWgjEcxsy",
  "key11": "4msoPYM11gKywgPbGaxVPTHvWHcP8vXT8n7qszEDTbLjAZTb9jwgHZF8P3y644N3jhwpnUqkiKWgfWqHGmrym5Aa",
  "key12": "3SabobgmREJ2bZxhfJUkdYXg718eXXzVAmRcCNxjsa2HnYXPNEt9UkkZRqe1KeB6bBqEzj9zUNPv3e8ZS9vxiXWS",
  "key13": "42L63WfresdqZQBkSEpFD3UupEm1fiQyMyYYi2EYVyRSurhd9TsGwDCXGVf9K1r9YJ5wqGYWybwnGPFvw82HQVVE",
  "key14": "GbqR8GxRZYJSMEEXy1i1a6G2qa8qNNS24oGG9FWBoTRWVb9pzq7UpJDxpBTALdp3s8btjEQXA2mswsmHW4meaJo",
  "key15": "4r1jjL5fMSJgEahRMN6SowMYdehCDjS5hYxQuQqQLJsL4DBjzW4WMx4cwJoTsR7Jnz6bYFqtWeejAVbxUDwcKDWN",
  "key16": "KkAds6ZKFsKNhh4NTN4iLu7EUysB8YkJKnEkcJB34SNiR7zwGHbVq8CU3uqwxrVwqeZJS8C8a8YtedctAMkiuYc",
  "key17": "67fEiZqnD2x1g8twrxNeYVCa6gQaA45pzZLVYvmCSuo66nEGUDhryK6H4zNKNowjXKy12e7xC4fo2epfWXjTaci4",
  "key18": "2o7SNyqPnT8xXxs6wuyAZ661GMc27cokBxp9sAUQMegg754VcBvyvHJFhVRhNzPxrnVHr8MsGP8m2WGyVKxY1oKH",
  "key19": "5UVNSb8LJu7tzAvNTf3fhUQnftVTu8oLEhsMdkdUk4KxfGxCuPb27XGC1HR8JHeXJihrmN7yU5gW6ZWddSUBzRib",
  "key20": "3dN5T9kNjPEGrxL8Uy8soErRTCVfr7PecfDTrt9Urz9Nkds14F79qRz279sEXqmW7GhauGgQdza351CPBbeVJYMJ",
  "key21": "3dfe8Kv19DBNFxqPA4j8hvbyQYPsvvkJ1kCYuJCfgDx8vWM2VWYvmJSziAJ1zL2CtvVHeqArBNkDxq5R5dCbALwJ",
  "key22": "3H181nypfZj7cERJ2DkLkhqBUpWY7JDZeL9j9mUcYXz6bm21fb6YgfSikuxu7xXMpxeEXSYsJ116oSRUqGCKdQK7",
  "key23": "2HTy4sqsSRQHMWNqVoRqTCSRHnip5LLf81MkRyxe2kbuAbYgfeTMwn5bvN5xXdgojPNnAoLxSGBpi1MEJQi9hq49",
  "key24": "WMN8JFhHCW3ATpWYbNwE8cgjh5uJ3SwFzkEMaursSizFCfp9JTrXZGcafDCFmFJHf47wuXJjCpgH43MVxqy7xXZ",
  "key25": "3NCcsQwvWBrCReRBZww2WTJUkwUYz1jWCUMGtazj77eqN3K3xfY5iFcQisLoEVFKfmi9dY6DL3guvNrJf2Zfox1U",
  "key26": "4edXASw3WHmGRhaJijJkycknox4NSkAkm5dLTH5UTvyZ5dfTb7pkQmuqMG4aq3yU1Env5ocYsM4xVr3bpowpLfg9",
  "key27": "2iSGxfMHBDFBmY7cYZCwPVzZ37NDu6hyfpRePJBaqdrtNp7brDMY1DMLbtc1DVVzt4tixwBFQ5K1f4oaNBFxx4fN",
  "key28": "5utsL9FTkNiZqjYxSLwmvCEXo6mBHSnfj1m2iamvnG7oqHkixyV3vp5QLXefg5uN6vS9EXFWdDG1DFQ47ucSPk1c",
  "key29": "48pRg4fGvJpmWo5f1Wipy4Np3fc8JZ9u8tLM9QFVEi4Tfc66PULkmcw3tYKDmibmDDwtkQBZX18mEtcfaf46HZno",
  "key30": "55yoaAAV5mQgoGsAkJT9JH2vqWAZzREr76jSz6WiPNkttwYz2tTzivuvT68o9rwHmZwcULGr1gpRTj5SiUv1xagZ",
  "key31": "2qcE8afpbjtaCsp1FLnZnd1B39C1rt6LcpA9W436fctBQbGGbNvMDFreM21hV7UxcH2Snx1EdevaVb7Y734cu56x",
  "key32": "2wannGjXf3tVEZcvBYALUGC6mUubSTuhMCEWLLPpfAXPxUJqC8S2LA7Ntbz2F9i6uX1GzFVz2CTSazSaf3QFZRZs",
  "key33": "PSZ1LnQG6huJxkgjpjqxtDkxEMTapZ3fv7tvmfvbkW9UpMzbm8uDGFPaqNLKUzAMZM5b4eGMqdxZPwJn9qw6GmJ"
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
