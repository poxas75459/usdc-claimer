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
    "3pUpK81a34GYzxMp83QuRardpSvNSckuJMC8ti7ienZD8VEFE9cLvRgKeFA6qZz1cvC5zxwogzhPHExMDMpZ79dc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UjLZBq2xajmxQaoVgYGi9GhQ1cv82177Fv5FeRdtSwrVBxzZj7PfUZkKp9C9o7E57BsDoT4GMNtjgkWuYDA69mW",
  "key1": "oc52z2EfosXr8B7kd2nQ5fTCBEgjW8XscWcFa9wYVTSwezDbi4giLT75YGiJVgu7fy1RLkihLTsTH1p951TLPoE",
  "key2": "5UZPDSwzU98egS3oU9j69NAxK42BsfcTL69mA3NxvJb9asJAv1zuZPV5UgNE1qdaggiXeakp1tLkAvYUPrqJjkWK",
  "key3": "Xj78gvahKrDonZUHdLP1e11Jpehu5JxwE79dJS4HgsNo3s4AAt5PA2ZBbdWg6GM8Ubs8KgRLQNL4Q5SdkzHGnDd",
  "key4": "2ngtxbMs17gnhQ8uBgdZsbsw5ATVwwJgnmdPepMr1RE5YVQEBdsYRKsLPdrvbAJQEureiC1oyUjrQUEYBXidRfQf",
  "key5": "4CQAheAQQyvVtREG2iu4U4dUyqoVg4NSq1LZBrQT7LsK1Quj9eQrFWB5txWSNx4cPtkGuN7Xh1c6UUoLMu19h76U",
  "key6": "66CLRBCQ98E5NLAUK6MhtT6tMLy5sataQL5NvUzrR5VzgtB9KVQUC1H19Ccw2DrWdMJqwgJ9ujzYj8UZWYSusy4D",
  "key7": "5C4g75G566vSHT8cPAmHLeRimmXrW22A9mpK7YmP8zVTUYnuEcocLNuLhaUNP36E9zKuVUBvp1HfWz5p4P9muFtX",
  "key8": "3TGxxf4L42eBg4Fbbkh9a77kWR9wJJJkEtjkNsb3eSMo8pnM2R3dVq6vid5pXSYrEfwRJPgzamue5rRvABVoLuA2",
  "key9": "4e7X7JhABnwrN3f8cLngSWwomzFBnnP1vJSU18jhrZNFHSYSZEDPF8KdkQMhgyoXnoaAvxXhP3s1jLgBQ67XW3yD",
  "key10": "NkYcPw2NaCG3hk7cnHCSFwPCe2NLjCv9aarVmSJCxp7ba1Z4NxeaMMAdPfV8cqo1PKsWFKgArt9K84ZEqqJyxwu",
  "key11": "3qHU4UosA9JDWhog748SVwvzZdDkS45ED6ccovwFaeF1XFNqrWXHtjXgC1NFRGbVArWb7QQ8BA9D36uwxVDPNc19",
  "key12": "4Si1gyvLFUu8JnjL3SuoE3KAZGyDqNdq9D2VYhbeWMM9WiWSsumVD2gWrQi9uMSUNtzsNEMLU5cFajLg13Vtfha3",
  "key13": "5RLBCFP6H5qczFLZ8Hu2dUWigQn2Z6TP9E8syuD1z1T6jjmGSxLtg3UgUtgyRS1wU8BLQ7yzJrz8VaZjA9UHsYZZ",
  "key14": "2ASAkcaSA63xYj6GSjsxRJAd2ooGY3xYPD3Dxou47Vqkpi1Y28YPWs27Hkr8Co255wN7apEezNGr1GJdEWnBvmhJ",
  "key15": "4KPNgcnGsbaMLGyX22PgnfUX6L4LwVNYQ2s41FMarVQHiAkNZmzHEbu9RnCTr67nknvYKHurDgZGK5rYmgEdAYZX",
  "key16": "32qGZZ32qqPfi16m9v6nRVvbzcPNPF4rLQ9Nr3grwFPZ5ZAjDKyabamioPmmPSg3SvosionpD9vhrGyR6jxwt5EV",
  "key17": "33pvzCH8U25WsbVCCDQAXDg8BB3sfSV8Jvc5u3C7fjtuhoCGAc8wXijhfiJrEy7WYR2z1TAf13Xko7YjAthdKzVC",
  "key18": "4oPDtWCKmX4zUoQHtaUSn7oaKyKnbw7eSy1NoWsHKYKPAuafzgvFhvVwiXj7eATDV2ehmpHTYqjwnwkrhCpw9KGr",
  "key19": "DDDDNVSPQafTexnB7zPKxXkFgJ2fzJhmAuYsgzGPXck7Tgws2fRSn58VT74fLmxRVUBUySjHqFL8Lp8g4DfcxfF",
  "key20": "tKPnZaMt9NnM1q1Tez8A1DuqmBc7Nmyu5Te1JN8pKHA7RC61EUtdNKMLWZt1ASRgs5QFSioxge2LUj1MfnYwBJ2",
  "key21": "4xvDK6dyjT43s2ACfe8cUfP2nJE2s4XUJFdYovU5nu6zpmQonp8JjfXsDofk1QiLEepUxLA4y1c2oN33DzXEDvD8",
  "key22": "3vcDeS2GNjPUkBdE3jGiWgkn6v3fWstmtL2Vq5kxsrDjNyGpeJiGVVEeM1d3NtnmbDmQScrprc2FgBTaXfYhuK9j",
  "key23": "4FKXcdyggeNhAi4WAkEXUHwQaSzxG4JjFCTWVo72UjzZ7fEc22RFVxUZztpwYQT3TUWQZR2NZwVE7rC2K24xzzwi",
  "key24": "3svPveLSYmT2GDTb6HuSpbSaiUEkduWP7dQoHnwkmFsWcYxW75QTCX3G6YTaKeGhpQe45TZNqrXTr4S1CsKb5BtV",
  "key25": "3NKuqK9uEhjw6vJ4bXpuwVMHciU13yCmoJ2H5Zb17NdLEk8h2RZAcnf7aYFEVGcR5Md7st2g72N9cv7E9UhT8THZ",
  "key26": "4tjzJUiuGmE9T4BjhPU4G9yPi9wx2ECxgBrB3cVz55CRmSWfE32AndmEqrQdwZB1UrRfMPhR7EwL47ACaEEmk9ji"
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
