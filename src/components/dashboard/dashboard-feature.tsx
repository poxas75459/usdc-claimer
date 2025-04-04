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
    "3zEUyzG6CjGAGbsi3zJZPTeJ53EANzU1sMoemm9N66QrQ6YpbLexiqYzg8W93nLDpkAhs69U8vNjraqdqJAfPyhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AZ9SuLypEKcWWhdwJWLKPMPG7jyRRJLYdj76ujDjRshZnojFmrisj1Q1bnuWUpefCWQAoYgmBMUxNLfTgaGyJDD",
  "key1": "5anc1DpmBvLxV9wD3cR3ZL1bpxnpc2xXxoN8at7aphMve6WRbBLk7HsTMrQ7L4VvHtjdiep2hLCEf7D9KmmEgtvd",
  "key2": "29kvcUiPuQxjtfF2mSqJtcbbqdgFwLPu91eMsc4WhdemFWsaK5iyHNwn2TCqudzqy3WbFrtYNFf6TzTzFgeA847F",
  "key3": "3ks4i4hxBoCQxTvDjb829gYsJjkmdEZfDpGXv6Tzsk1RJJRDZ7Xe1QcHaeKjUeoTd19vHJJFERXxN7MCJctKoW4c",
  "key4": "4496Syf5ePKgDs61DRWpC92mPjMht1GLYvVid55t9xCHmUhSoLdk4r4qQBqsaPHr5L8sKEkbVNWbM5VFAMTdQHNs",
  "key5": "4vwcZJ2Vp8jQpLg58Rmxh96CHjq7wHntTZn9prYjoGBVvLePxBBG8ibRt1ZHA6zdsZvpUmgwVehCNiL1TwKUn2Br",
  "key6": "LHdr2zP2aEGZgn9V1fKRw1fcA87Y6e8f7eyKE7ScwTBmVymh61PG9qg7PR1y6AFUaD4Hzbqy546ceYeMkLj8c9S",
  "key7": "4jyHPHF2jEMf5Hr5prGBfaSKuabvmbyJEA7DvdmULfMeYWX2uzGFwebnDvYtJvNMbjdR78jvhsfSBAxAFMypSy6d",
  "key8": "7FXKcRtYcEU4LqCMZAAs2UNhYTn8JBPEuX4xeZeyBK9iji9EHJGhKB7DE2zfb4v6uGCeKLDxaCJUcSEpx3TPv1C",
  "key9": "2YgWW433PtPe99RnYE9eN1etkBJtK81nBmtgCtk9DqDiBX57Rs1Kx9hKVXBti2oNxptsGDPBfjq7ZRFTPGf4YpHc",
  "key10": "66wRJzZ3j4MhzuxpVK4i6vC8ypHW4gowndD7KwQEn43yigKtARG7RSreMAEcUUhgMvmkJRQSFJS2AVuGK3XmKzGb",
  "key11": "4orxHXWH8a3Tpgdu2Y8Z3Gajw9nE5hp6XgwzLfUYM97mp6qPuTZiLW74Jt4fHvvEY5gQVzVwmJ7oDfE1zca1GUCZ",
  "key12": "huBKPrJeVHkEdZCWuCmoRkt75Cb7jEmfEt9ffRKktro35M1e6AyCMkpr6Abf4Wf3CP2VZhTaiT4urJnVzC1t21Q",
  "key13": "3EtT3mgPz2HKo9HLk2QGDeyvnPWSGkfp4JaRHWgY4DcYRb23aCtuAP98qeFj4Hx6Dz9CVnSWT3ckVVpbfSa4wnq6",
  "key14": "5nA5UMs6CQ6sk4k9Av2avodymLLMwpJaM3XyAie8qyQg6tmWxrqMCjX6sT38yAvWeVHGVLjjQurE9VLmxXuYfa8V",
  "key15": "UYRYRQxjkD3NffovGPoKur7Mf89A7S1vro2TUjrEtDLbyawWc19Hq6uaUXUWBCggC5vwqydY3jMd89oqeyVvRDf",
  "key16": "4hqKYYHg2MM9f2MC5NjA8ibWbNvxdTcgacuUQ2PW7Eb7Wti38KFd5qtZQnDED77Qnae8mXafMeQk5uYiGsrBAapT",
  "key17": "5H8bkXEjGNZYCjsBWXfXpuHF95YcsNH4jqL5pmUZfVm6UD15He4n9R4RRmpQxVzAV1e4pnUHPmd463tXL2UEw6Rh",
  "key18": "2jMF3VMSvv99byRX1E53nVMYt15MtEzdedQybEjm6MG9oSwvJ2KAQ6sEqj6sww7xhojWJr25uQNsdQEDy7ui2H5p",
  "key19": "4AJX3EVVLfoVU4Nzn3GYic6y2oLccRmsm6S91naANvfbkD6zzYJkZGHNm6DDUyNPiymCcdcPcAqNoH92xYHFyR33",
  "key20": "4kgzRxbG5PXPt3LRsWT9Bj8KQdEr2s7yAoGf6J8TdrjsejN19gN6jLJs2DegF8SbM314UeLnXtquq8mfVN5KU31W",
  "key21": "2LpixfYfkdTsEirAeDMVJ1u6wxTLXHJ7QCg28t91GJC2yALJoAgmM88Y3rPxF7Btkh1ybUCwah6cMbozDsH8oXA1",
  "key22": "3zjcDgjkt2hvbFsEjw31Q2fME3EKuS6QAPjpgo7QKKntNfvN63nbx1Am4i2S5SPzNpsTx2rhynDQzwgiWDCHs3tP",
  "key23": "2diYxxu5LAJTwDNK6PmgQHXAsL6kzA5e9B1W3NGScbDeCBzeynRFnLB8nF7XNjzpRrJVESZmd3pdjMnrad1Xm37W",
  "key24": "5xJA3Y2Fman3Jdmcgtqv1YBUc4M92MfmGjMYEhkmrS4SBy8AqiaC6qrHpBDvr8baVrr9eAG3JJtAU9odUVywXUA",
  "key25": "5CHGx6paSwWuJt6BDjXFesN8CWgqZPMkbXr1sC75j5M9uNfWh96cFAjdgMSMy9GwnQMbaN13TXWPYN3Lp91jPnAp"
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
