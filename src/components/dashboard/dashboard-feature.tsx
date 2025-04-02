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
    "3iiBtbpbL8SUW92wUN5zPnN2JTc8DfVuQZ87pvrodskFiQz8ymujBmWPjhXgw7bWBiYCZUeemJaVB1XBZQzjf9Ji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kBUicPRuLdc6yEE6aWr9dUY66j4L8tgsUBtN2hEXnsdq3Vw46DAdRB766taxcTsG7nLkioBaaR2UGzfRqso5ZtC",
  "key1": "5iYqa2H3rEWaiS76xwNCsCGnyqWa2yRG3qX48QeWBmW7WkkgPAhDGuG5Z5fKVGUhsXXnh7HTKPvFfi678FGdwmXn",
  "key2": "4zbHWBcT29CtdTyzhBKzSCuJNVn1LxKi1xrX71YW465B8Hzp1hL1A1igPo9oJCx7ztSpHWXdbguPZzjypHcFLCiD",
  "key3": "5BBg2sU7WZdfXkMdDgK3WRkkQrHzu4riMRk7y5AGxwcamTAZyXjoQJz6ijkjZVC6fDXXw1aY897p1vVQBgPx5d18",
  "key4": "4WiFH3pgVjBC4931vkVW3TKYvPtho6Er2eosoL7bNcAKpcE651TN6WmTwS7bEsbPgu9Ck4PuiAFmmjPENKX59dvF",
  "key5": "uanXWEmKfqro9oMH4NiU55DGDEZWgd7uqZKMHUNpUcPDS5MLMSzjxQce2x4azB1B4y3Y9PruR9NHUtex7DWCgdM",
  "key6": "4mVyAzDJhsu1qNrr9G43Do9zVQRRzt2AvzejxJr1abSJD4Bf39ntF7S1T2dMN8RE85weoKvUNsxyLkejQ1EZGCoQ",
  "key7": "5kx9j7P8UTCW7WE3r4GsYhPGonbG2fEbDpSyJayYU5Wwpt4YcuNQcgj4m3eXdgysgyNyFfAHJhN1E4K39djHA4CY",
  "key8": "5QcpEXGAEv4RS4FKQvYje1ATtyfCuuBGZYE3VcbGzFHcNeB2GHSDgmpXSeQ9jSgSKBey8iNzwW6KCZ8tK7SnmDPM",
  "key9": "2CwvGh3uqkhvpcWtQGLTet7nFst4bKqmEmjuyK68zXVTrW6hF3KAuA9Br98ykuN69aPBLGq3oqaMAQGEqox3Q9FX",
  "key10": "5maHvqPBWr3LaZywMXkpoMR4pgjV1a2ahKfrb5Jf3DciEpxsawEhYtWvSmijfYa9FnEVxwe9ArewdDAT7ZaxU7Zr",
  "key11": "m5tbQhNekfQUP2UvGUzYeU7qsR89LVeFKMnsyDw2HhUeDkmNXzsvREWFWocSP1S7umt8nxUhAdd7HcXLmvVa51k",
  "key12": "5y9h9KyECLrTvZNZUiBWS25XXZTCW8fWYsQcYK13cmdtRvLJa8qbM4TfBqiVJCBbRCMAvvcPoPBSfaPNYZJzdoq",
  "key13": "5ukjdJn4qfckpYp1WzKzAJH3VJEtZ4xSvoqr4GKy3HYeDDCLJEWhX1DK3LvRMMRUqbHTpvRWdb3QZhXSz99ydsjp",
  "key14": "4BADcKbiqoMNFDBhhsxb68DMSaxiUd39htDC9tYASoUsY22EM6G8cQVtsMwAencSDEYHpx5qi6LEaNQUofPHcyRd",
  "key15": "qAnZFgTrgPUGFRZcNw1as1chQ5xFEUABXvE2qVwnQxyNkhnrCfqMpPiD59BPBm4FDRQUKj4298kvsXDyDszUwar",
  "key16": "2GrfBTdWHHNMrpu7fbvCMu8bnaRTm9xgAydsqffD5APdgjVwqcQABieojUKfTyQiCctWiVTyS8GAyyLpPdNrJfHm",
  "key17": "3WffieNyGbqsyQPdB8MWdMymuZyfx5m1wsv2S1o3UmSB6Eh2LZKKrqcnFYMG1hB1RWeqGhPV9qd8t75QBijkNiHK",
  "key18": "KSwPvHcqg2cWhwy1otUWSEqSNeu7VSG1dmUf6ZiXwB6BCgbwbA1bpREGdc9PP5Psz7PKyYekc7iMBKZ1PGVnXAg",
  "key19": "4oNxjzeMELc5FYQLBrkAjARy9pTaCxszA32um7DqQWSWJR95Aq5r9AWHMABXv37TZRSM9Uwii614hTBsfbx7fSGK",
  "key20": "44GeKFoN7nb4kSxBZdxKMn9XsPpHvSDRNmxLoLHPKgjcCpgWoNJahgBRdV2PJNp71V1QKU4Fj88YD15U4yB55cqk",
  "key21": "3CNumgrw6hJod1TXdcWzJYEj4QureCTBCdeP3833EhQ87YGiQPBGqYDjxrMEWawPvBMFe9YEVbrTbR1Y6LZJhqup",
  "key22": "k6yGtyLK1zaMV7gSGvivJGqPuq7dvRc2C33eZ21qghX6r2khS56KBSr38GWyzfK1Sd8qSRtc1X8EMfGZecukxMe",
  "key23": "B53c125dNm6yvhvioHK3mQQa3vN2eSWNvDdQXMtqv8yvZvPMgqBSUs6j1ZqCCVn7ERGy8SRvYAnCdTTNRfcaugU",
  "key24": "2fsMkKRsGrLD5vVoH8QzXX4UPQEP9hQAzg4gPQR4AD1VRTzLNdxx3x7XmBjZpV6LQntReHLWDcYK9FunmwLWvHVF",
  "key25": "2fQ2tPRkizuxzcKg8jkyZDoN5189gJ5hgyNAo74yWCpZqpU8rJbwxoGXSEQZHuC7yxPLzPRTquxeqGiJBdTEbNH6",
  "key26": "5igDbyc6sgPmFL8KNdNg9Vkq4VwYJ2tACnWbSd6TXQ79FSvTyfsypHDRWj6ArXi62eyPrUzMX9gn6A94cn32cjRR",
  "key27": "3KdrXZLbzgCCm7NGYvq4X7sxw3gFsVdTkHFa9hdBdLb8UWWfoHkS4KxTbFjmtgMzoQkt9nNjvM5HJqeUG2zd4X8H",
  "key28": "3UypTFMMW36TzUSSiWjAf8Cp6JL2uWMy6Jzgb9vHC8tQftXXHZwzV12zmUmip75NHSsrgQZG47CZi2CXi7RnGd3e",
  "key29": "5hbkvBy7P6KtveH91QwerSsnrehUZX2YeCZQv91rqfDyL2LDxjsCaA7qdYo7BeumUV7JBYrz8tKAxckA9iyC3Wsa",
  "key30": "3pNhtyjGfboLk8yb22wMbYYeqdiD6wp1EupeersEf6jRwPFUNVVVBfAPXB9TBjXeuFe6uYao5stGnmM5vvQBXJ9R",
  "key31": "9XSu2zNzEJyvWkQbgLjPCyW1mWwsi7LN6Pgu7CdkzYriq1tjYDh2pj5Npo82dJxzgSRrUam4DzwUzEPHnyeERC2",
  "key32": "5iQKQH3MiCa6vk6t5MxnFwt4dDUZiLeWJ1wQE6bu2kH16n9NpHZX1c2oaE6RJ1UTpHACpRHtedN7eMJ3aNsD9g5L",
  "key33": "2ayTK2rNqL9sUmtfdWWj5ZQ27XYBPCTk3t1ocxSYGx9GWK1tgh63hUfJ3CwLLDzsDqFbi4iiUjP7npdMmL8o8G9K",
  "key34": "2f9boSugBbvxriQZtaML371vziUF38aPMkg6MRKa7vbevYoTE1F8QyNfE3Ti98NTyBEeBuixpF32Y1JZ1ycrVEhA",
  "key35": "4LY55K33htVYM9Nnz2qgy1kx17oYqD8trunFQ1GAMzWNc69n6odVE19uUQhmyyDfeVmQfeYF677jtWs6cM5B4WoP",
  "key36": "8tJosrS3mRXg6TVi8oSpcngvywsFPAdjrNu7cvabdnfJs3QGcWz7jKJYQhtfJCoCg8RidBL94S23nGqnFtZ1cJT",
  "key37": "2VvAZcUepTNmLPjrpCorBC8FtysXTQBVu6j9YSqWWpqbTxVKohqaEUfJTwFBMW3dN3m9NKLgKNkDX192JjqAShYu",
  "key38": "dac1F8L1c9KY4jGgqbrSPGYnK3VwdfR4VEGQnXbk2FgDGtd48xBL4gam5wXEqGyLvuCuS4737fMfPDcgCmemVj7",
  "key39": "5nPSSbr8aWJwVHbDAhuaYmJaxCiAzdVRLSiLpKW5ncjMqEoddjcHR4RkZLMf1wEMTVzDq8aoGscyLMW54mv4oVTZ",
  "key40": "32iwoXtJYPk1HxY5vzjRVP2h8tm962UXVLkx6LM4UmnW2mpSFhn3be8PNR8W385ykWW53R8BQiDY3iEPDWNpbZYP",
  "key41": "2YsZ4h68sWKgfPEh42YwnmuTmP2wpDS8KkwmcdikFf3c7e6q5wyoGCy6eUbSAiQksDjZb9qxH4cGPZALhG4Bxzjs",
  "key42": "63MAAb8a927Rs1zw2oKLaDsxYmCaSwhWuXawhU8p4c7sxXs82tEY5dckw52PdapkSgZGgVohtGaxBhvCvZ1ToPYZ",
  "key43": "2B6mfrCRnKy4vr1dQc8MdvKgxUn3R8fN8Kh61m6yF338XeYVEDojKhmgZgxkoqkuGbx1JZVZjEpKwxnGdCe27F1m",
  "key44": "RPzEn7ztK3v9wa9KgHU9oPMwXt2dk3Cv7ro6yJhKu27PM7P8ETbThKeakA6ZzhFKshsdKyFeLYtDxpZEAJULZon",
  "key45": "4PBxYESs5P3wvP2qLEsqNFLN82mp9xpCcR2Yy7SGG8R9Z2Ly9zoxztL8on9BQUpQ1fy2vPBQjKKCbgV4ZE1xcndD",
  "key46": "2iBD47TLHAyN3hnKzKGFiFw3tpy32jobzQKfSTsHaB19d6p3Hsm2mTxFttfc3tzapQPR3tvCt4eQUjgtVbUTh4Hi",
  "key47": "5BAFmz1dmSCj4MeWa2xapkNVqPaxs7VNDASfWU9eFgj9syBcpVyNWiZksioy93xeLePkABdmDPs7yBLCqtmzef3P"
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
