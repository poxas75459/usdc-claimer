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
    "59cJ7CWHCHPDRz4EEo9rgSb4wsLrYFRJDxv6CSnaAREMHKrxT4BcwZqhn3EVkwus2LXVEV5ssVrj6qqGGVrkvfAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tnuF6qkvrSmx85dDHzvXa4G1hw2A2V1xvRWAo6JyGJoPy2cuf5v5mPHL3r3jQ82CMqGAWZjLscckfhUZyCSfmXw",
  "key1": "4AesfiqoeQTgW7fT7ciLQbJF3RDKGSqSJ9p1vmnHehRgjV4pDgzmtMXkFki8SvHuyRSudo9Tvqkjevh7KbrGCVXJ",
  "key2": "hahevuK6CQ1WtBFCHUjQPheb3jZLDVUnNzN2tsYnC8osJM2JrZYnNhjzJnsqh1FxxHAn7FHjcAv1cw3eJkqxq6r",
  "key3": "VcQFvtrdD4bikDXjqk2cEEPN1JpZYPm8TF9ubMu3gX4aT1ZuWp4es2gEQrNNTWUWuqS9RyDmXEkAk9ZoYDgTrhv",
  "key4": "5b8JNc7SoJGyTLpyeUDfeyU3ixSE9dQRcya1MLmr1YbdapTQtbbg1bFg8oN1c5of7VJaKYtxJZRh6ZhjW6zBgEGH",
  "key5": "4ij5w3EofJmjPgv3HGkrUqhqxoSmvPJCiLLStMA3WwQRAeuqsbzaphJW9VVhYrWXB7LyrzRnFqj4agDUjzE7b9sp",
  "key6": "5EnWwqcp1bW9H3HVC4SyDr3eMWJDXKvumXQEErMHsoLdVnwTJRDTarPG1TT9uGwafa5kB3cZE564Y41iPBs6GPWS",
  "key7": "4suwNoY9tLXZ7Vp3aBRfF2F985a7tFtm3LHiZGHjEjDJ4P73GbEedn8EoyoJ6UTJNH6kmNcxgy8g2hY7goz1mHuZ",
  "key8": "TsvQtwTLn7pK9y7Kz8wTc5XGMQji96eNfz7kxYaCBXDoVLVtj9nCodLcTNZBFSVBuBgSjCL7PD5a544vH79cxxT",
  "key9": "4U4uq8mGj6r25VrxZW6GKL8e8cvTrwxM38sB795UztXWTkMA8rfAfEbCN7173mzH6EhjvWfiMxAHcLG3nBZNyUoo",
  "key10": "5sT8YVTnBKchu712eAH5Lqih7k3iCYx9cycTXP5dfFK7WoFYrRQzcvfscfMwG1QYSf3nJpJDeGzAYPpWCm1BDNjY",
  "key11": "psnk3awM8G97jEZ8dV4EpQavgZS6bZyhY8MuNTXdDQkTqbnPnijzfCDpXcPB8XcsrzYZpDFT5PTz897CYJsRJDg",
  "key12": "33krH7npbw5zgzEzsvmAC9yzNc8Zrq9JphowKQa7FiNoP7GSprPXDXwRYbc2epcUn5axeTKTG6M26MQ1oDCD6Ruw",
  "key13": "4Z3v8aeHcMauuMYni7ZwCbNrEjJHSC9BchdziptHMZEnA6TQdhfWURS6fMj9q6qyF9K37LmABVKYe226fqyNa5Gs",
  "key14": "5DNYhq8nWckpEBwDvg75DQDw6xNzyspb1kfgy7NvBxFh93qiQyrZVbC5d5dytWwUUufUDxqPsGRTQEsfvf83qQMp",
  "key15": "3jrmTL4UcrACSr32DTZVQ4Lad4rYW2iz81wuRvTyVm2qxJpJsA3nLZBJ8K8eerMvi8q9UtBoD8TjKZ8ed4vjhuCU",
  "key16": "3QpVAQsmbGj638GJWQLnyN4D84GMjx4oAoo9qVRxASkfrcYupTSV5wKfbozR2FmnzPu1HQcMgeDG5K3eWK5groW1",
  "key17": "4L7KPbcLQ9yUnrQoC6HvgCTHf1tzwKjYqZG9te5yCA8zCV9XHcy3ZGUsCWEaRzZnGddnwXjTJBuejHtXuN3Yy8b5",
  "key18": "4dCxMFDq6vH8mhMxsSRUT1LN3iqB4hof6ib9o5j7c1LB81j37iPSZDbpQ8C8gLoDCU7s1X8cKWFCwkcAWkVEEco5",
  "key19": "28hC9p1UNoXWepQSFCBpq7qHqxU9RyoTNFX8kSo4ZHe3XA3ndzRREa9ojy2KCoP2einTBzQNCSZ6jixbV7CdXDga",
  "key20": "2uKff25GpwdZgcE6c2oWrRfEhJicP3rxfQJzYpxXJY1Ljx6bpjvbw9rqFHCquEU1FKmPdBjrn4Tk8op66Wo7pSHt",
  "key21": "21annv6x8SRaszfyWXB9uUc4RYBfyBjosi4SmuCVWXie6GApVz31SjW7hVz7ghJNFusySATVJLVKVgqyLZahJCp4",
  "key22": "5ay2ZsFL49ZkYJTXGJRCtF1cWU1UZVd6FFDmDu5P3ArtP37iLWhreEumJ72Ydmwnuqf6adTgHPQYJXLGwUxRybFC",
  "key23": "4xrREn4emMjjX5TLgTnETfEM8PZ98BY24x2BZZSVkQuDgu6cZnZvKBQR9CPqz9A6kutc9yBPq7xPrJznt884zfAu",
  "key24": "3BpLpvbGs4mVpJ3qmXYBbfX3ZtDABU9opCtwtiBr5nbe4cTCkKz7F35hPJbagUSq1U8uTWSmkcKrNmoYPMBqyuFW",
  "key25": "5JAd4SHbRo5LYniBYWMFP6guqc4NiqnMCzXgoNpCUQ9Pr4u8C7Y9M4AAxQRuA3bpkbvaDVGMLytuvNzk17TvagDm",
  "key26": "YvLXpemyzUHSWTaMFANCjrrN2XwDvZuUHrPqYC3iuZXUz5NjiwNmdtdT5EBVdjGU1Pu7yvxrSCZWik4Yjk3io2H",
  "key27": "4XuShBLjPbiAXu9tW6a3rXL2vRXA1xLx9RJPSiXKnRbWkK2tGhZqn5WQM9nKgALDQzMRgCDGs1xyc94JWqmRQFgu",
  "key28": "4PTrC47fSXnyyt4dbcjpTRh4x4ywFfVrdznFQgeCgMEt8PAMChP7AXQB3bQorm3A36yYxwJFiZNKYCjkvBjvEewJ",
  "key29": "d2r8e8toRro2wax5m7PhvSwiMNcWJ4fBi1DhSZ7aYPa23Q7Ht5LTcsg44wSNj5XZcCHZKY36sti9sMmvpgYMS1G",
  "key30": "3dKFYsZGRDFtbpfrK8MK2VqXMz9nE4PwMBVa9zEeHFjeBi4xuoagPyyLtRrDwgUpDvegdzCvenVTjymCFmrrM9Yh",
  "key31": "8Cno6JMxPXKejJXecDNLr61msKpkB37Jz6tJiLCt1uhWddFBZrmPbJFAXGM3poutL1iJsvWvcJhrVzSoLdkmqUd",
  "key32": "59vjMsmwwEaTCwwKh7bSrRX8B16sf778nBH4aqska3vTUdC46zmog8QDvnjhSTR5pNxWJuKh348DmW382Hh2Wd5Y",
  "key33": "4RujodAXHZYdQDfD7gdVuKBjGymyi1QpZwNppkP2aHg2q4r2s2EpX6ZFRPstBo53gEDdGm1pjECnKp4CKBPJK74n",
  "key34": "4vCt4DkSRD42XLHsaoLF5E91QqRibLW1diKy4qMefQg3rCtxvw7cTL8c9jzniudFam6aG77URSKHwMNq6UfwrKwt",
  "key35": "PTD43MTEtewjxD4hEAK5L7woTQjFm5oBFrUeZ9EPAskyExM9xUP8hy1uryEdpiCPo5xz1WqmivWH4vWjZ346j8F",
  "key36": "2gS7upYNkczdzVhfEaLJidbQgJ2XuRVBrvh29hS4V7VcSLNB2TxRtZUXCP2eEoYAqWeqfHPmEruk4CmwkGH8dAip",
  "key37": "2CRQz979TU8oeGzMtZK7oUMy7ErNXQSj7jCiXbAi1mVLVC6fJSW5MSR9bgbFWrAYc8r6CAXGXaJLrzn28v41Gjf4",
  "key38": "64M5yuPw13ncrbir6SvzKrMGvYfV5P9tymMYUmABCf27DNRbhDPcrx5JQ3xqHt5JNH4wFr5LvYMaCncAustjNmaf",
  "key39": "2MovuAnmygkHJM44EahHp8rdozEAQB2ypDNiosY2PirVCVDnRMPq1oBWR5vpBSbrPnqv6oRdhsEVoxNniefKNdmi",
  "key40": "2qQrPp8Koq93MnP8QPnVV3YwbuxNj99ViPZ9xvirDrP29Eb5gnjPSnoECs62CKz2ySC1gVB9PfGmjvj4wXX75KMV",
  "key41": "3C9sNcwyyVR2d2yexZmS28nTj2F9wjshCfSrMJUMQYyJ14wspe1c6SWnr9af3XBEjfwKJSu9rSfeE5HTGv1UW5tg",
  "key42": "3S3LmYrPPm4fUHdNRXGhV9AHHeUrzQyGfzkTm1tsMySskNhX7Fwkm6MQ3wAPAfaQfRdCL45GT8z52RZnyFDHMDYc",
  "key43": "5t79jhxMw8VM3UAnF1Z5X5iAy6aPXs7zuicjLbAqHq5kPSDX1Pv4KqpuybtHn4fQ6FSKx2i2gjYcG2MN2ynvTRL2",
  "key44": "5wDK91QNBM4rVkwXaKaMZSDWS9Mu9s7oBzzzzRVH5PMcMAdKR3ps5emR9HqJdLkeR95SvuizZkTyTy59inBRFz7f",
  "key45": "4g3gxcyq6FC99rpyHuCYf7JFnTtkbn5Y3uEAV8UhxH6puegbo65N7ujX9LrHL33MF3CJnf5iDKrCrXE81C4inPtT",
  "key46": "2eLiSrAF6cQfv5U2ufh42grqTTxSKQvzHxkA6qn6Hu4nr4f4nVZzeaQyQQRq7gurcydx3sqx6KbjsZWf5d5mZpZW"
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
