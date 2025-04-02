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
    "5FLTHu8VRRW5wvgQPWys6AkFZpmbkKP4faATHtsNdDfoXSm3D3smUsZL8YYc9UKpY2ULGhXbFuXayf4Vf1aM4FL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xysXYqEKdLRCnQdiNyWFHBFK3LVDaWEgXsXukNsCpBakWV4GUtrPVW3hTSLLUTdeKdhnjxo1y4Nir9MYqDgPUQ6",
  "key1": "37bjDV1pUef5nFgDxdi6eYQUcBG2hxb1EyvBGfwpN3qQUVimFowsT9sb2u9xpk5AV33WW3jrXLLrgTYnJ19hBGrk",
  "key2": "iVdP56v6Nq9e4gh7FJWtbr61upoTqEE2MLAkwab5KPhi8cPpXfKS5Nvr7urUjM6QVfesLKvt8PNgLUJKcEaKAo9",
  "key3": "4WKCm35xJgvPqFABa3g72ZcrADkbso5Qxy24LXPFFeDno28EzwhTttYzpptts4CsaFR6iVN47dV6uHEPDBKP3dbe",
  "key4": "4PwcMStQSZSSJkmLhhKe3CgmkVyeFvmDi5xkicpit9twEhqneG5iAri8zz9JSZ7qHi32t17pkiujnqt46grui5iK",
  "key5": "3Z8MggdbTExCue2k1RjHX2fgYY9s2ghtGbtxWo9R82m9bXSh9LBSHwT26pUoZFjuzLqHVmym55e4pcMZakWouUw3",
  "key6": "2d64mBxaz35XUFJSCtTSC55f72oNhwqTry7YMbdPq96pUUkrQUEn8djZY8QCiTJp7iLXSTZkeH7cZC4HDRtSUv7o",
  "key7": "3zAxivT3qzNxP4mp3T8VBoaLscVZ37nmHmWcY137Qsh3qxK254a6LcyuSSvnTACHwGezw6CA4DULZxLfSAy63LjH",
  "key8": "4ccipyUDiMVqmrr8SsZjYPfmGLRAeBL8iBNcMPoaACtHsjmD2z3iVVYiaDguieGgr1DcpJe4p1PdvDt644gHRk7y",
  "key9": "5DLNk5zEDofqqEGeTYs6geinGZmWzmdstKakkb1FEB2Vzrhzj6RnTkEEpB73ZT6xM8aziszCy1PpeypY7wZGefe8",
  "key10": "bCY3YwUj6C3vkK3qQyDRBu4DMM12q8381k331kFgfN3HCNB2UXipozMGMqPz4AoBa2dhzqnuNgrtQ1Tnah9kizv",
  "key11": "5iv5Mhf7cQyhUw1mKuqCWYiigT8BjUfPGRLVDVXRVpe1uH8qffe8bUmbFMrvAjWjju74z1D6DqpEU3CEUpnJpYJM",
  "key12": "5ZL3ZTBHsyhkk8wCpbJjQgWpY5A3T4kqudfTDSu6gZ293fZGD84ea1gBwe3xjRq5NbxVsakucDjhMrvo1wnefWiW",
  "key13": "kQPsCa5RnXA9MMEKAvTnXGC7TLVjeNg5TkPp9XQJRnowHQyjPBh8bZ1sku3cALeqL9CzWUQ2oSGaF1BtyYaXsXu",
  "key14": "THQ3RDt3nCC5c9tPZBjD9i41KW4tewWAS5tvDEraa9MGhXTGMShXoRnhkmDGeMyhk58EqM2nCrzVBFNJnfMKCh6",
  "key15": "36CqjJJozUKQW9Wp94XVqpXzTbhPRmEpdBALPEJ3pa7HNJh5svSuFMi7sPvtGzaxdxyB5CFT9paeLvLtC4ExapdE",
  "key16": "YoYPnm7Nujv2UZDtqt3dTVJJD8tqYBbfuDayJtB9fe2L7c7CHBdNVP3dBL1RmusMpjqqvC899BERzDdTgS7HAMs",
  "key17": "2dwjCCfMYHkCSNRrKwjmPgZfMwVH9Ccd6qfPS3Cgfar1En4f1wRkjdKeFnvwqirpyr7AHikMULxA1b1qxASDtDz9",
  "key18": "65zmjGdc6X8tdcUNLXrzjMfs8qiiwfQgwYuzieyxrMr4tCNvqygzHk4rVUzpdjaTmPvPJaviCF8jSTn4efLCBYXN",
  "key19": "3Kdzo1qvMgSY5dj8L8DBTcfx4c4tMFxC54UBuCsaF5HsmdEEDsM3UXP5UHxYQVLBGmQuhf29kthMWtRgR72m52bR",
  "key20": "4qeGnM4cyEQmjsqeT6gfyWoVm1hhhi4Tc8DqPhoXR4aohoP69FRnGx7yjiVobduGeBCmepqNLMwdKXkeDrCVuQdx",
  "key21": "4rfoXVS6mKY6pnevTcDTefaaxofrWP3Lyh59yUYxYuWzevkA1XZcHp3R3M6wkNe4fATjsefkBMJdJWfwxtpKsMf4",
  "key22": "28JCeQjaAxhkjhtAgXTfn2dUs41TrAHcvNHwPQRupEX68neZCeSUw3F9gJYXWR9jMEbqmZubYYGvTx6VvAMux5B6",
  "key23": "2HmNRhwhK9C4Fa3pX3WjYyK2UjzJwitFyHmKCDWEbqzwzqxBAytxVKH6CXLWPGcwXCNmXqDyBx8yTk6TyXAmPx6M",
  "key24": "4pN9TAgHshLjbTMpphkrcsP9k9qfaVCcsF3f3GwXgo7hJMeH8rJ9zHoh7CxRq4cWpkxGDsAibFD5CuMLhCcER8eg",
  "key25": "3WAhnaWfUopYJCKPhG84fNT1xpY29xksXGKJWkac1uE1KKsPkbrYadhkZqAWRMBrzcofW566Lbx297T76v7zig9d",
  "key26": "5mdRi2HujwQ7QVsnp2NjS5y7YMkriKPEXU9eLkHi7Nh74TwTv4NBVZPs7gJRB8LX97MtczrG3qmtksduYySFyU8k",
  "key27": "4duSqrn3bJT5uS1BfRBzi2Lk9X9dTjqM9qL5BQeJ9LpWciAuSJpGm4Hy4xGJmMuMp9KTr8CQwv9PM22FCNM6G92a",
  "key28": "5nnbvZ8SJNA6Dqb6n8h8hKBRYWwMUAJeiHy5rKWceE6wmHnp8SJfdT3VWDKXNLx9LrzEf8BoiTYkViP2qFAs7DW7",
  "key29": "ST4PHgQgkNSf8xU2stp7MYx27q9tD38JNW9J9XYwjDj8MYc2qDa3qVqCy5rGeWYFagDz8ef9CLn9Vs8XBnxRKU3",
  "key30": "2ciQ9V1U3u539ywGaZ79bCC9Ycaz3PTFYUw3mwvE6uodLUmR6J3Tm15DqjmQB13X4hkFfexUe8hY5tioiq2fMk3D",
  "key31": "2Y3yXE3Vd1nWRnWyy1sEq6m9ckvKv7b85zEypjReDcMhLp3U8zwZV5EyzCbBKhgSHgovn1ZAaBgfj6qaGjGmfbVC",
  "key32": "25yL7J7kKndQqsLwhyEuszPe3V3MvrsRrFn2RtEzfRYhcgSRVa6fDq4v8PvBS3Y3rHaVcNhoVvFM4PWyU9kM3f8H",
  "key33": "3q2Ur2obHiQLq3mZBHSXDfFwLJ7W51uoYER8F6LMVLUCPmSzuXxwJiawgYqZKFoh3D7SwyUbhSx463pj3jRpDGdi",
  "key34": "59DXPsHiiz8r7BiVb1H1P68tZBsVNax8vkhojaK5Rhzzc1Wh52GC54hhQ1tRcGFPAqruyyKtGAkbXJvJrMDykXyh",
  "key35": "32oemS6visvadBWhSWJiN15fWLUBM1LmSSVX5VugFWj1SgSvef9CTQKgS4cxVUaWEtKD7YKtmXMfzx3RDSJL9kRj",
  "key36": "32eGw6qZC2d7VJG8aQn7KyMiBcP24m2ptN1dY8RqwmQpoTGwwr182wr4oFVJdRh2i1M3wFUDfekucTFq5SoXkRxq",
  "key37": "5UiC4KrcSsa6LS3tRkGqkk98X45eBvok5ztthiST5APTrxuZ3TdYfPRLSsXWtfC6E3Qz8bBqMTqNi4nBtK5g4fB3",
  "key38": "2M5GmvGc8s3NSqZPuWtQXxCoWdWFtB6wuud9tE3Bnq4nmz4RbrJF1yAmecUP8qWe1hYsknGJvszfGFBD5o6NetyN",
  "key39": "4cpirGNYrDdo8PNTaxHn8E24nDa8tm5uf1jX68yFgjhmT6m9V5Y7WQGSibrNpLJqfBkGox4nVndnUK6A7qsjeAk4",
  "key40": "9xZ5jbrTe2xAoHdEfA2cWAR3pwZGN4hfHhFoWmCpPM5ouTxrHojYuaahNtKVmoXguKEfP2nDtetUMsSHF3YdcDN",
  "key41": "2FW8Y8YzcyjtEkJVc45TpeT3tNzksjGB4EiHiRKHK9fMELEJRou8TJpG2sBzraPypfdSEBecFQMwuXtzRv51ui7g",
  "key42": "31WpMgi3kT68HqWPk7CNim36C6G1Ca3CoQHq2Mf7riRKRmyvYGjXiga8aQSG9eNKi59dRwZFrXPjCCxV25HsUjJk",
  "key43": "FPhqMgv7M9LLQ23rFUjPTZuQjiZmKchhKBJxfSpi9VY5mSfYUokRsSSYZ6yrfVVvcvzECxLbGmk5WvFTAuNtTgT",
  "key44": "5mDshWEzDnJqbBFai2bFXV2uiZyqBDGZKMJ9qB4Q2UeFuqiLC3eLjNjTKXX1UkWMRKSZ554qAwvvCiEAcnyVKwps",
  "key45": "2qwQAD8GY676d1eH86iTejpY7ETYtBFqe8hgM4ZJT42jJNvdnaujxwvDUiDctQ65Etrp59d2855GUN5mDXiT8tA8",
  "key46": "3o2JK513S7pQunAfZ4JaRifJiFDRddR5ZcYFBVacUZHc6ci8jdNKwUxSiCfkCpZ3BF3p9Wd394XMRCYBXSMyTQHi",
  "key47": "5LNMwynBS49uvpyz4gnFE6SBHQwpYtk13k3KpoTffT8eSZRYFcphMGZEsUfhX8E1vkKsMD8XvGjPLqBC1baCTkmB",
  "key48": "37vLfCh1sieXXf7sidPuzCp2SgrF96qTd9bLdKdHep1rHLtRss9tKvP8F2BLCwH1YanrQkr6tPtnavjQ7yozoS8h"
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
