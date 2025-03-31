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
    "52f3NbPaprVizyjvqC3MWHB8phB7PLDbAdSSi3QkTGLsvdB8ht2WqVQHPwHGMHHdb1CdYiA2696JJxrb9WMwrEpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MT6qgnjnsGcgFANnwoWP38titLZVUGvPyScPyUYocJLsnezeVuR5245UdayzNhsmr69NCXqnPNg7eKvSxUGrWAS",
  "key1": "2coJb7SrspmyrVM59tidbY6XuVg8ihTNBRPcxgQNdvtRiVwaDoJFnvtoyasSo7DwyfxDrUyiZkGAqF5DZdQ1TZSF",
  "key2": "2EduU1wSPW4qaU5bpYZXRu6y1EKdXwaAJJDSj8xfi5HNbjm8vYEo8j1Zt7EHGBe3ffRfr3L5KiTQvaoQCxfvg3Ms",
  "key3": "5PrYBBDPu6qX5th7UrGFDKrHNRumKpDkrt6GXragxDHXwQoE3osL9SEtiTUyzGpwdF6fTsWwwpxf2qATeYhtDY3i",
  "key4": "2NAwfjNDPTi4Wj66v6TNdCpp7dkuiUsgioBEWk5sCB42uwaQ9LDH7hSUa2MnPS33yJj2W6CfmYvn47iLm7ch1LZx",
  "key5": "euqBNNYLRrSUDuX7X7mMrpQRiTvmomPrFHevMtCKaf1jG1nCBVXfoKoYK6JWE3TSNGKkks7C3vsmHaKggXT52HK",
  "key6": "N4D7e84wmXxhgCtFGtYWrjSVpJJQzJ9k8qU7yYDBGLwKAqCRDtAx1BJ1PxKYvAVVoho9K6gnLTrTa7QHsBd7vmR",
  "key7": "5PgXLwJcKCsVCiwLRr9AeEkP8jetnz6Lj84Hzi4rc1v5euQ7a51CPVEdHiWahyFhvNwLXZb6wkcvet7jEebr2Lpa",
  "key8": "78aX6KeeJvDLNxcUo3MEhTRpitEQ6awxsFegisZnYiNvHMg4sEznQAca29BPKUEDbkgrxq5whUi74NBKopDCAq3",
  "key9": "4JyRrCb6T9D14ATsXf5sk6qQKmjzePT8pcoJ6qoceQnJRZbNGs2biid6BxJXtAWvMWDABSMmrMVvUyr6dvkjSyMg",
  "key10": "632s9XNeReucFXdSwNvuN9q4n3uqhq1muWPTC8TCEja4Xa4fUc5itBCKrnhvT5VKni7x6WVyKH59ebuzUzTGE4Qt",
  "key11": "64RdNuv4HqUcK4EPECNWQpnvop88qoe21VVjhEkxmSGpsFDNnGUrLTsYCx3kLdgNmhsLRsMNuDVDT3XQ6i4C6x8f",
  "key12": "RPGaAZCAuRapefTgJyAP1Ptt4a5SHR182GEjgx3pkgqrb8u2vBf462bSm2nfUhVV6EygxYStxnD7xMX1G593QwN",
  "key13": "5DkhLanWbX7oP5jMVioVjJzdbnrAf8mHhENFVBKX2JdwfMgCWHxwbZgvLnTkSGbNFGy1edjK9TvEPrBa6GL5az8k",
  "key14": "3f47EtPsHhZAxqm8EZLoPfWHz6J5cHmiiJuPNDw8gfvTfeHEiPY867ZECxpZxLPasmA1ZZkBYAy4WyaQEp9SKgjr",
  "key15": "3nkKTEbR7adghLmZb1y3kKGzuwqPwMrWc4oLNVW1zj1UJSr4888R2kTanPHZaikLwxzPM6eFnddamNnySFrYVGN4",
  "key16": "2uzkiJ6NfXU5X9ozZyftgrSj8jKNeRGKhbW1gJKvsDWzeEc5retKze2uaqVCviY5RgZ1BHee238bm9XaN1LdzpFD",
  "key17": "2AD6hA3453CuN2aUMMgwkV5tpL8vNvtk3pAzmoqSeYz58LBnnZqZZoKubmbseF69igRGVT1qqjp8SJHJDLZEgHka",
  "key18": "2PtvxkoJAus9grS2RfU7ARRFRetzNjThEGvXzvsFnMDcF8sZ9MpV8Qsd1EoddNjW2LAieNwaPs14GMXBaW1DWQsf",
  "key19": "4hd5uUkyjMEXmVnvfbgKZzgjZdvXJ8mn7hHekLj9oFk8TdnDS6zkejsjGxtrjAN212Tis81WTpBtsuDjEEXLe4WS",
  "key20": "464RXS7CpE4TGyE8gDwGKcBs9WXkVZDzq7zGzCCmJ5RDfvKVJUee25ZQbc8NEi6mUy5DHRWNdRHu9QCSqDerxvBb",
  "key21": "pbxjgZSQKnuoJHtxANfqbJgFSLoE2c8CABf4bEscPZBW5QFLkWSVu4KTVGcDc7pnvuk1WzqDedPE4BrUsVzFwiU",
  "key22": "4bBkN8RWyCbdNUdMkaSU5U1qsWMG2R4TpaoC3nD6dx7W1JBPEiKMyJmACjzqMT9VNzszkjykQsE1sqAA1qs7WU5a",
  "key23": "WLg4J7KuEnoJJPVDaEMZc3BcRRZ6NEHkgR9vrNjM1FFpfSbhegGtH1QwjLEUYBaKjD4Lwc2BtLxjmMvDvJ7VRHZ",
  "key24": "58h7LLGGeP27nNwZh9EoXegpxARhREka5pnr13gZsjo8H4a3jBwZddtb4sUcMxyPx5Ab1DTQth1gckS7sh2wAy6F",
  "key25": "64z9jXKdWLgkYoLnUpL9b4xk3oN7iAzxYHTHxqU3TzBF3NrGEH6AaAqr4DkpJCnEJtb9eXummpy9KywFqWCvExr1",
  "key26": "23GX1b6ntviSgpTEjvaDUiLSD98eVWt1U8mnB5YUcKGZAnBt4m7J6NZxbMCT3PRNW5HTyA73q8oMgBCT35iepCz9",
  "key27": "5VQUCk4aYMVWaG6aW62b85u7VrL4CmdhWC19B6NLJHmVw1ZRRLMg5uZNj37fsooXBie1ezin7A6BEb6x3jigb7x8",
  "key28": "4kKWAnQk7e5MV5LRaJJnRyoVjGo7GHj3P5XWuk9j4Ks5ceZvizxvkMRks9vLJcEVUnFFXv4b6MvBrzj3K1XjNkeW",
  "key29": "gYnmHPUm1tZh5whRHEmdqQNGt3o4RpN37r3MypZD9KkunCYaEqckrjVrTATXYR7wD5gobCgi49C1W8mdGFbo3t8",
  "key30": "4cQQafX2u5k9XVMtpLvRNRHBHqWzeaU3vSP76L3og7XG5wQe3ozH177PuBWNT8sWNxbiVJNf3HXKXMuwPe3LJCJd",
  "key31": "4F1MMMscvBxuuanV6gHVcckK3kMkuoM4kaAWC1qcQxEjs4M565vhQEq61tSWB2md8VzSQLkHPS3tWMcBoyHvXQCP",
  "key32": "5RGzwJr8L92B9ZhPcjYL5UxXuvuNEYxqxy2tfbLi7E1hSoAHbYfBwpKFRJWGVYz1yJznmMEV63XFb1a2KQN4LyYN",
  "key33": "2DWAJJHdRVyNAejBVWywki6m8rMFyrjUsU12DtUranUUehfQa6KBsCtu6Jxrhng8BHEf3nwpXXuvK66CNPpprSgV"
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
