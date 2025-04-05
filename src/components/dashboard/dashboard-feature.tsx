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
    "37Nsv8HVDMAHjZZvpLccapqNtuhFZLFNUXC1LXr36hY994f9ZhPnstPhooxsN51AG66sFdjPSzTVASQZLKwJYtT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "omskiozd5tWWExunv9Whs8XZswHhucnarGpp9ihFSyTbWS6iJUbD3YsFNjEyN7weiUD1rjicde8hmPsvREeaXuB",
  "key1": "4MS5phwDEtzjL2s6iDFqSd8veAHQPgKk2vob49QiMMnGTCTLNHi97tUXbYkwZ4nNLUwTYx73CymoN6JiYZYArMCy",
  "key2": "2zGVmHXfH97SmvEDiTPfowMe6SaPphPRTGhc9tLmBhUQbrzJnodGL4Uz5FHkVWmtLRrKFLNDQBG3qX4c9XGKzH7p",
  "key3": "a1m5S7W3jWHysFKScDjJpagB5sPuz47uXhBQBZJTiAw2kcEomj5iAoSSrFaFCh3ZxVM7V6TjC4toiHQhLRXVG5o",
  "key4": "3XpFT93mKjPurVRuKjGSjToggMgA574LUiV2x2dCBjGNUuiLfGqwyvQEVr5j97KjxukezEFmi7cQKkpz6SgrKKt7",
  "key5": "2HebJzs4TjnUSuFy2JxAuBFDBAaRcxEMMGapPQgZH2oLbpHcercz8smjvwoX1U2xpuE23E5mZmhUvmFVnRvKYAqt",
  "key6": "5htbkBrJHC7LG7RqGKFmPuvM9kKuYX7ySsVR1TrXchP85eQLWKccBRRuLbhvG5mhf6z55nN8MGuTkYWcgnGifF29",
  "key7": "EYbesgRxcTKAUmRM8kmu5aRUnc3iKr3ZrxRBwdpVndLyAfkrYeix8EDySuGxpUBQkE58eDYfJfrmhDQg6dGogyq",
  "key8": "pBKdjxts5XPXDSMMAQGiPEPWBuPUQvYv7zLHbaiaUXgZLETEu5yPPyx9LphL6bVA3hVfipY6RhviEb63WLcj6RJ",
  "key9": "2uPfnz7YLeGpnbsLbsBt9wp8PWgEWaEfNsZCjoz8GzvfBtGeyG3sQJPoMokv5MQtrPtZWrYq99mkSZER9qeCWE1v",
  "key10": "5h5svYmyRorU5tyKNmZQY5eqjb5h9txRDdVnEGNq2smLhYktLAByowATYYkhV652n25hQkZmTENRqT8uD42TQiHv",
  "key11": "5WaocioeLPZWJVf9yrifPTb2N6um4x6wzKQg8AuRM2wq4CizV69ZRaqWPmjxS9sWRegoMGbd59YU57BpSNMNzdhy",
  "key12": "3fmowMcx42haqu3TdkBdB59XKiY9s6J9g5tm8fsUDuB7FyYDJCrrcpSa26XUsQECGcUvL8VHipqM8HGACdLet2Bo",
  "key13": "47gJdWmB69NyU9PFPxALnVaFsLWjz1MjuV8EXo7TyFyHuGcNczko59MQgaTHgwbuFvSHqYYTCc9aTDe4gMNYZja7",
  "key14": "2Cae97EMkqY7MFAmbLj3HqsGJduf52j1P5Ybg8b357584E3dwrNVEtLyA4V3f3i37ivMx4LGu21FvaSVUNEVhhYU",
  "key15": "53dhRm2agBeZG7on3tYGvTXAobmtSFYgRC87GMkc77RxBSuNV4E8YoNweVxiNfA4svutrBe42UwxVJtbeckvnpAc",
  "key16": "3JxRH3NYHVEnC7PBSaYhpcPVuyXZw7VzgyRvH6nJA3uv3DxYKAJjFH3brmjksdSwoTCNdQX4tXyiPkmBgCBD4jce",
  "key17": "7BipXMG7QXfnbkJP6DoaR5eSEXKbkV4Lz4G5BPKVh2reUwSjxXQfwez3nK1PAU9NVFZCLtTngGWQ9wFWJB7BDax",
  "key18": "5V9FKvfztBbmNf3fXxUxxbdafeWQ5sAF2btZ7rwbQxJu8axVsCCgfN9qkNGkmRYxaSzRTV4yQCTTNk29b4njbQsp",
  "key19": "3mQ9XcEf9jZ9zQdsWJdRWMs27tLm2auNbxg22VfL3meqw7d5rfVqe1kvCYdKTBnRAGjES9NGYq7pLuC2RAPM5dDK",
  "key20": "BDxUzjuyzmgc21qWA7QtpjBtwi8jwiaV3Fqs9wVBeAxeFnY6hdSEVaQQGWVN311mNnuP35cXxLJHEU2Xxiq8r2J",
  "key21": "4wJPor3e43B6YkY21Bs8NYYFYDZ4vFFJAD3hFxr7gv7BjdRNgLGf6FCY1WNVQX3ceaxq1vpTB7rdxkA52drtc6Jk",
  "key22": "3YpYEKQFugsKQ9viBi3AC6HUyQC3GGYeu5aG25Mb2ttHJACwY1o6VE5MVj5zebSGhhvEdStqi3QxiBCaSqiqiD8n",
  "key23": "4RLGo1rqwDkcJgCNaLtYX3FCk3oeQnMMcpB2qvYizL49iD9PTNQt6u5ro9Tv7W9oSWLAAZ4MGA674qpdxEwnyRdm",
  "key24": "Vef7RLQzWPwSNX6sUhhxdiVe55qTRrJSQsJg6AsU2Yfp4iWRe7QZQj4kxQaqLJGF2TbT2vXeWzkeZhSDpRhbsLT",
  "key25": "3tM6jzGGjDTojvs9syd8DMtaUeHirPhAF8F8nxBSjc3EVhuF5qZrDuzbJ8B4hbYUGWGxhyXgvNRcmc1CDfDzdHk6",
  "key26": "4hcAMh5VMowhDCSSkHWMPoMYnQfYRxXBTPF2stY1eoX6ErqcUfrtfPVKxGgqY8ipsoHX63LCvUcDSwgDNa2pvjAE"
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
