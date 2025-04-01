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
    "5u9B2WzKQ4KQnAcxLhgsUZYouWQKGmYNWPmZZfQvJx6SoYzLVDiP1dYyvkNoqqHZ99BEjWeUt8t6ECoyPjWCK9Fs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sTkRxxbL4zktdfMHGgBkqkXodriXcRreqAyTares1ZkXFt91RmaNfNuodj5SApUz2f38jsmNboNdKptBWgApPbX",
  "key1": "5ERQ8C2pHuQWwKdSpR2ANcQuKQph5JwTZSKCoKk36cfRQmMcNMedQ2MPSryYLFY2GUvZd3ybzPQYZeSqfdEE15sT",
  "key2": "4UvzhHBRXFN6aBfMVtS1UFScA3RrimvncQU2GiQDFrsX5FvLP1mDPEb86H6VSTHv3nSNU5J4DMPUV5g5dRt5saX8",
  "key3": "4onZjjHnGKd1VYLrzTJENh8W8bV8QQbFmHJ56ot5tvAj4WPTHrh3Zj8PwTE1NrTq4wWUuTrBrHdkKcvtgPHYKm1s",
  "key4": "4Z7bZoHYuCtDLFLfVGSgxCNqQkuMGJT7HuMwrxZjiqqF97PSzTrLRTb5VRzeYm6bDLcgcLQsz6eVpD7pYMxk7DdQ",
  "key5": "5Vr3pprXQ6vkEDZDWPfkW3pUUn5UBymkRsDArTKSauQdCGwzPjdnEyVCb2X26MMhw4SK3CLUo8b8d3vHDgwQBnQC",
  "key6": "5TyRwjvMgrqRxucLfKirNbonsAJreKxB3XjV4rX7yC8DM2Davh5jtqU3rURw7VJe3eCMJumeLfEmnbgiZTioutRx",
  "key7": "2CqQthk3zPPiNNv1SYDhbYHk6dWPXSpjF5SRzD5gYeaNvUpN9g1unQUsFfYuQkcJ5WK23SDrqmWKuZXF2tKmgpUJ",
  "key8": "5VxamA1VfoXz6Knj4EuU1gQWCG3dbM5pqHX75KtsxiHWPk2pbKZeP1VMbPiZysMWwjuyiVvbpyM2fDe1t5NgBkcj",
  "key9": "omCVauqUw9h61EvraPoSgoccXFLhhuaG9zG5a6VS25AT3dsFrWuS4SfLLRUzipBzDVJL2ukrif6d5wxD6MrCoQH",
  "key10": "2vKP5ff7DCwWb3KfE8foHD3xCmjmsZzpsh6UbU5Zo6GYVaMvJeEueCmN4Fk3juHH4ukHawh5ZMZThgdmuv9cQv7c",
  "key11": "4ZPqtpFESvTvg671vV48NWhJ1bymBFn8EGgLb7L1ELRJEN174GtBGo5wptgJBFQ1uTuX4pgMbRoZhYxUi3zrcXHD",
  "key12": "2FrYDVBCux4d1XNwevHpvvNspMJr6xaJXwewu6ashsTsAAXzZxXTpg6iQDpSXieoeU5QeQMvxPgyaanadwHvH2aC",
  "key13": "2eoKbEPATLqPthH6z3kCg9aXu4Dnkfw1572Yd1X3ABYuBQ6sYBvzYanTqvtV4TGXiJ82TrMhvVZPwojCirg4cWhM",
  "key14": "5NMc4mS14YSC4FmB1XVLrJy1Lv6HFfMzDf72VieyzkberQHjh7n9DCkWngdZ8Yzd2V8979HoUykGvMWtCZNJdCw1",
  "key15": "2ThFt924bsc1JWVY2Rgxh1Bv76hBN1dK3WTQcoQiDmHeWHMkSDgKWjWzCnNQMJten1BTAibaJozFeugLPQbe3if3",
  "key16": "XFCitM5CEG5DgAPNk29VexNmVc2gJEPxpxkm3xLLW2uV7PAihaAM1pgVqRjJfUmT26nY29Uiz96ADHcBnyRj43H",
  "key17": "4LTVwuX6fqAPL8Uk53ttcdogf8KccytYcuYnWVBx4Ahdsuyzn73bT5zJdBw4G8esLukUCPwfubpF77TBZTyJJN2g",
  "key18": "5MHZaybAqLFLmY8MYnn75GwtyTDfEBRs8BLiLTJdc7pkaASn2obQw64zw7XPmCMtEQTNiD8yQaZDB3F6hoYhxfij",
  "key19": "3G5umsDMT6xcwHrCtQqDtpJRTY5AHSGPF3TLeWLKGjn9iV7JmM9a9bJJmUcNfP78FQNmVEpBMVM8kpbD3YMAKu7Q",
  "key20": "4kew6pHEHeJZ8W8uqY1ruvXRvtczrwsRWaaPEAYwfRJ2f9DaofStFcD1NY2idKYvXs1Z7DdJ86wt1xWents7AcEH",
  "key21": "x7ixH3onYKWXMrSLY4bHZ6ntyj7L23YCXbkDBh8ynxfMQSYdGnZLpLFd56MwMMPGK68rTMPqDLcWEkpx65n13EV",
  "key22": "WuYkZWQj5pCsH9EwLfFbzVvS6k3xh2a4WDnvX6x8nsWT9QL5DZ6J35W7emi13eCMmwC5YYqEs3Jb9XdtQjapbCD",
  "key23": "4BHQh4DUtFpWnucQyc1HRoy4a3nHU5eMGdyNrWB4yEmxXiEpUXgHkQV2wxVtoAmoiT1WZL7cFBu4WY3mLUpHUE4X",
  "key24": "4NMgMAsrZKSWQ1aPJEhMWdb8FzG6UKvM9dcfNTEgTqAcLGXBp8mcJKgwwDjt2ip2UWXnZwwNBGro9fBoggKMhy4M",
  "key25": "27oUnKkfSAWHpArqyuqjJYB2zahAETyZTaagKhbYkvERQCiAVq3WFUZHgmx8TmvHcWDCUd3sjubzyQsRpYkcS2e3",
  "key26": "5bSdXkYGKbMrxqGAbbGQvTfwC18P3fu3w3anPkviqedG55HVr7siaLLXGKisqQY2kf87FfJkJSPkKNpdCfQvU8qa",
  "key27": "48r3wBXy8SkBik4T7c1QamsQhhACbeHMX6oaRQQmw9R4wUN71UuvZ91o4AFKvpBDhKAGYCjqe7WxBdiuu3N9BgPR",
  "key28": "5q8jEq5W9EmDTQZMwmoHX8dU5NJT1Bx2xAYuszqJ83WVQCkNKGac9K5RFv6gPoXAuJA8S9oSAZkdK23v6xeu3Uor",
  "key29": "2WmpCPjj5ogEaiWgdH2ZNoCr1Rf8RXrfV4D3xcbdnViu1c8rkaWgBiu6ptp9DFXe3tZBSkQHaBnjUJbRNVw3Px8B",
  "key30": "3L8PwVMNRKfdon6mYxRWWGAsATP9SHsRoq1uiZ7TRharD8MypnAE23yCX6qTeJiW2MLho9Qiyg6hx7KX8EbTob6Z",
  "key31": "5Ho5bZpA1TC8k4fSMhuoQjeAP15uyVgQULArpSHjwartg2gvHUxqrj7t4K92GTPf5rjPBeMXcDtEDmskB2514Y9v",
  "key32": "2Ec1E3J9BrTh6D7TJTjZ5hWMjQZazBXhWL3LZv4x6yFEiGnD34iaw1YAT4Pqrwxrsh53UmSySmdmN3y2qzZaKUrg"
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
