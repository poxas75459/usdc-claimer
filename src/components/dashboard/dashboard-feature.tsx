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
    "3eEDCVGBVey5a1WGowc49Z6WgFnmsAxJumu6KJexApLm1JSFWz2iVwBax5kAFhBTPY6sKLVVz7tuEHnNKMbwNgPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GduLEUPRgBabjLauQviJ8ZuRw2bd9F1HuBr6H5b93iKY6SdYoaMQLKuqyrsWa32aAAHSPzUU47WbBooNroxv8CT",
  "key1": "2SwgatTVNXiaNyL4Gt38H5NpwTg7P4HPaRgV9iiKak87iyV5Hpfb9iByjiSs1UHWt8o211n5smGo48f5SwqC6Jw7",
  "key2": "2aMf8ar5KFsLB2xTSME2bp1HDGG9fwUQEZ3CuzAtR3pxBXG9JqGTWrG5mPQXVmNsKaVHL4uqut7w4nGJoRQa7GXj",
  "key3": "33VkRNwibr8rNnMLbqxYkcvE9KkQZTWvasJvNGDeqEJtGjbyvZNXXf6z8fq1M1fr7VmjttpZmwAJDHUiYs4cZSJn",
  "key4": "4DoJrWu1XMnzBqiLhpSLJWcjjbKAXHo4TpuGXDAjNGTiPLZvUGi9z6ejW68QrsvKcqAj9YgxJEcKVBQkKVCtFzZA",
  "key5": "5CscRzgAN46xKbvgUh4XgiCteVpaAWojBJDZGKBKjD7jrCL1VE6H2BGA1dECpFicqCnrodKvrsyDng3UCYVqNFBe",
  "key6": "669Xcpya3C8QAKWnk2kk4ebKrHmnD3NxstTgLNRGg74hJLNMfsNpAHVFDML4Dta5kHm4HbQtsQkpka2ytMZJERVB",
  "key7": "gj56JWwm7VHYCsnK29kR3tULkw5pgUb9bVhx4fgVk38Ga94HMa5CPCp6KzTFBw8KLBLZPHXR1d3XZPr5MtBeue5",
  "key8": "3TPCH2DHYsjkrhxzJpcjqQCNMPvqc3aGfJwnVkg3c19aPdcT379fxadiS7u2mHP3Y4ZnwD57SfkEqTJXfcbpHdWp",
  "key9": "jWMYydCbRumS5cMKqU8vLrMgdX4ToZe9gqLy7TR55JBdQZ9a3vRRQuXfMSD3HpnbyjUV7ucqKiCVhSFWVBgDwBD",
  "key10": "jwHkCkipvUuPJ5b5t8eRgU681THoQiaLbipT3sCV5atp6hv1zNBa5aEXnHct9jqqxh5Y74pNmQsWw4DMgzLcBvv",
  "key11": "2sHFhbXP8kZST6tCtkcZ9kgxxYbhJNnyUUBgQDiCc7XKx12tWsfCJFBtiAeixFC15pMtmTsJ2gCui2qEuU4FwRnt",
  "key12": "2Va9xXA2iELPn7jY2CL74q6jdbWFDWaGmQqnsmMuzRApWYzvSwWYaTAhwF54bntpv2vsXjY5XwfR6JStyJH6Uvi3",
  "key13": "aYh39okpcwA5oiKYjcZ13Tmw5k6stRBid3VZ4qJTqkgdfy7dqHFMQpxqNbkFu3xAnw7QqhVMVKknDCa3GRZzuDZ",
  "key14": "5E4UfRVv9FspvcdKzJdq1JdnAmunhnyUk9Enf294TvBmSc1iJ5QujzNqxkMwk3Jd4vYrA9cc4E2qfRkW3NY7Cuvm",
  "key15": "4EFpYCy83PcCKQt2EHympoyuVs4Wnc5MBAFGRTtdXEn9CZJpH6Bmm5hyWx5jNYdrzcLjXSDArnLbZLK8mRhhj2nh",
  "key16": "2iHZxjYa4nRvn97MBVKz5d2QBBSpt1nnNho1FkkKouVQSqfXUrFg2WD5czFnKaFHnSHxMKKCzybEhd4MfUhHdmEf",
  "key17": "5ozRFMmqRSG1hucpXshGPKt8s3dKrLHAhpryG7Z6qsc9BKv5GSnKxiVuZqT1JhpSBWezGXqkTj3AGSDsMUrdvrdx",
  "key18": "4AFxxHqQN6jvXbThg4AL4HTdipiH6HP2nzH83euCi1CC5mDtTpoq8ff5KX3eLaFTqNKfkve6kPDRiGsNPipHRJYy",
  "key19": "3SvqwVZ5rs6ePNPMFNYCxkTk3ggQtip5RjR6ChiHCeuaXwiHmpiPVntLPxbv7rNrxbhRjmwv2n6WE1rk87KaeWzM",
  "key20": "3nPxpCgZBcpq8WuWb9BbXi3vBq7Qv2S3z7Yh8m7iuXuCjXqUxYWep62eVEyDbVKCnzMdC31r2BQqVt9QnwNy2QXv",
  "key21": "2bRcxHQNZ5DKcLoHo8xKDSMEJh5FKa33nJ944pXfWC7ZJc484saSYZr2yVJPu1fPHzSva5pJ8TLcSFHT5bJqtoGH",
  "key22": "4WMDDiN64dyWUnGqLTtJnvuthdUbzEeYbt3JD4HrkjP5Zx8bmMPjaAnhyz16hNHTa5cgqMcw4C9NeVoVbL3eghkm",
  "key23": "3rKbPxza43r14qYy9LvsANMCZVMqg3VPYCHCAdXVCN7nvAjLuYHFvKpsjRYRj3smfxrXD1aKdpfnsUBKNkLfYGgq",
  "key24": "3qcLwVoPjDQVMKQNa5Bo3tKK5apjkoTLtb51EyT9gChXGsEugjoTCsAqxDhVVBsWiKoWxkykKUUYxDbFXED3tbqd",
  "key25": "2sjTDbC6sPrUThQESk8kVbpfBiLPy4fqyrmwtTN9NJrsJt5vW55B2hzvaphH9WhzJMKBiG9fnYAHWmWKHHntP9fV",
  "key26": "4H9GeXRo8sfue4neYut3t75t4jebQteygTLFpPej9nS4bpRr1Q8qtCXDdp7mDCVDJTqeTnCHF1bZ1ZW4T9qLwA86",
  "key27": "3m6mwQKhUrb5QEhLDsFyP4rqm2pHrDPjgjab9RaMC1p28VoJXcK8W6RsigV9wDWhwJKk4FERDMBrN9mFK1d9Ya2f",
  "key28": "m6R8DX9fDTfA43kon4S3G9PSTVeQd1NjVWVhZKoPjeZBdS4Z1Yf2ZFuhyB7o2XMy4T7Zd9ij7666aEw6zTQDGCE",
  "key29": "5Nm8zagjZkA7MQDBfKTWrxymUdbtnHbqVd3brg2fGGnCem92fw771jQKvsydjgRjiiJk3BZ4Wn4jjVRLBrcRY6m8",
  "key30": "3CuPQXnB3t9h2eaPfSvmeTx61otcRmbqFQRMtLy85UUXukTzFJ9LxoKzCn46Wn7W6pjPpzeQSgbtVPDYrycgvXWR",
  "key31": "3MwpTiGkKpZZ2LKFTeu9FZ1kRbbFhMoZ8vrysETSfZYV9xgBX9snKKeWigyBaaCTBKnaj2bKqrnXB1Q6P5hNy9NG",
  "key32": "3wcMRcHwGParfTmGrh3TmHwnVcVN8USTPBGfWvDWMr9PE5whc97vaDWZj58uD33KddaTUBd7BmXDk5UWgNA4QGMw",
  "key33": "3Fs1noiUm8gBJ86TL6fGDZVnuLZmvryA57HWvkocRGgnwTCrZMAzH7Kw32wKrA5xSHrGbnyW3T4UzGPxTqPx7VWR",
  "key34": "4vg3TnXjd81MCFFceXGBS4YWVMU6zMnRzH3ZnswmbcqekJ1PKLJ1BTXhoukGgrMbS6DGZLBTnumS5rkhBDpzvLiH",
  "key35": "359GuQYedHb4MDQNgfJTJhsgrDUEH7mdNmg8THffUuDWGmvoJCNEvieWuHX8dvLfoUSdQyXjYcAx61xiygx3QJgt",
  "key36": "2h34i639mhVuEp4xbPcVa9MiXgGN6dzH6VCL42FGfxCwqroQYsFsEY7xHGV9Mxhc4ieec1icknDSmkrHaPSLvP5t",
  "key37": "3vQ3Cp9aCMHLgDy1xMUsqRqMdtHCEd7j2h3D7aRxaUGocyAGv8fTQaEhbMi9gcdVUoyniPvqxrRNAcnVyEhtxJwi",
  "key38": "2RopGFEWtPkW1dqBRFpzeyj9evmjf6XcvDmnA2v6Bye7vNNEMWUKSKHxHj6NYYm7fu5uW8EEBVh5s93Ki1zw4mfc",
  "key39": "47qtgSLZWcTj5sDjZDug8bFctkWkT9TdDK3VA6TejT4AC8bQWEBoLACqGHjWydegmoDjP2x6pYZcVE916XRUQS86",
  "key40": "4YbM2LB21KH3ajNMeszSYDMp3VVGsGzvaG2oV6dHUu2wTT3Ppdu7PBoSXpdUkEwtv1axifyA3XBhCtFuapkLyCJr"
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
