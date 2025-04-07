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
    "2Bke162waG7N1myCgxo4JkBViuL74Wtc1U2SxzoyVvFM8P7QS8ipKHNFwisHL3FqUdiYxtFGXNZh2RnoDifMZmF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kPeHg5rzSZTkg2S8xHrsy8u1uz8n3d2Lu2m7rqyayVYnc4VuN3oPRyZYJg3Unqj94VegcMVkm1SKimt5HqUagZv",
  "key1": "5xzxCaiMrKEJutPFh6ubMUg2o3gFZABNK7QahoyLUTSxDretEoNdHGKE744x7iRsbDrj7sHHq6fLtaBENKVLJdVA",
  "key2": "62iLiCD8c5v17JvrY8Yz5FPJrMU1L34o7FHfHU456aSkPTiXQ28ufUJVNMZghFNqAXdd8whhnQhdJwpb5a5rvqmK",
  "key3": "5jvoZGxftFeECes6se1qWVmWDVU95KicdYjGSZQr72ibKVnBvmNCMU97d397x4SvbEjUQ9DXJreB2HXFCPL8SY1u",
  "key4": "5ZwLa75UhxQfMBC5rs6QWxuwoVwqHXrPhMpbczUdE9XFcmGTCKHjw9GjV68cnTT6AGoBoY1Hpwo8LArbugMXiPZS",
  "key5": "3e9bchxD8udgtzve46NbasdnBEKAJsXCsTcjkSgHzsZrFe7rkcEHEr9SammptYPcR1FLJ7nS8bg8Z6b6rPZ463rT",
  "key6": "5kuSZdmqFpoUrARc7UsY8BW2eEpSy7JjNCDHMpBe9HWvCtswv3mNpLtcGEth1xF7gs7uNtumMSP481qcbkh6rcey",
  "key7": "42styYRKbWfFKxMtf6scyKStpux83CkYLKhfchacRo6v74MmgiBdmJeo7PXhDrs4bgpn2HozzYYFEKPB1QExiQ8G",
  "key8": "NFaDm8ECqM4aM5Qa8ph18p34Mf2UKNiEa4SovkNxEeeEtjELBSPghHgarEwkfSdDQvhrJrmnzcXMDFXk6x2Qmc5",
  "key9": "EqFA3WEVvRJtfDdTSqwFDfp5HADkbjrpRbXkX5eFtDLcHBotfighe5wUAS9awrvzADNWbaa5V4zDwe6mUNRuC2g",
  "key10": "5R2djJ9YRiH1i81KA3mNzUCTboAYvtKw5yoE2uJ6Ukk57eQi5eHSkLisSWzQPRLF6wAt5ic2orHjFfTtDfPZFqVW",
  "key11": "4wy5DJ9eWZU53zVxPu4Q18QJwAhWJk8Ugz1vw74dhNj5BS7eP9nZ4YyAaRA97Ny68fnboTtn7Nup4Kath9EhNWu5",
  "key12": "Q5j6iL9mrV24Nty9CZ6jkzv1fVFZD47egDQPgRvhdmkCkxLwrC6tFz6xbJXwEJ3kx56cgDSrU7MogPFvQVyVEwC",
  "key13": "8uwVWnz5Fja2N55mR1N97YHqzapMtC4XZyvpYSazh4GnqmuKk6LojARQVBaxdZrRbWPKT981BSuKZzJTsJQerC7",
  "key14": "5zEE8iCnEBWDwzLgiNCYD3pBmD7upF2nDxTvwLqK9cETKQhaC5aNzcRPq3CarwskkWkhYmoAoQHyYcRpFbtWB51V",
  "key15": "5U1hqwsEtbmmhcMdfzPV31vcSusatgCuEEkv3ux7FYarKuu4pfXXViEffPvnphcgdiLuLkbLceW66c5ttt5T27D2",
  "key16": "4rWZjgaNMstcivkzzRWuznQrfK8xueSDsS7bvSu3hmrnMAmykpa9EqyewJmUJ1VetVdjGRHKPsF8HBuaqgEF2Wi7",
  "key17": "YT7KtG8QUDWDL4QB4JGJ7sFL7eNmWCiXpB4CUtQPQMmN2vqy84vLjdLw5pYj8x2frKRpaj19saxF8pFdH6dF8n8",
  "key18": "5LnLeaJSs94fYfHPFt2Ezyxqf76MDpfYPcS4KQa2TT8uHPrJiav654Rn8zb8NN1vjKvdieMbXbm7GfayvwMXFMPP",
  "key19": "2zg17DLKKLxg39VtaozEcLotUx2Fyxd5F81fvSgmcESUKsRCuRnstEFJcPcZPbpTCHT2i2gHvVpTbKHYctXbU1TC",
  "key20": "2Gk2eXVJwP2qqZz2KYdweF3iHMTkvmwdh6zdXQSNT7xoUX8vs7V6fdQ67EXvLvek58GjJDEn5V4pxBGKtVTFkkNw",
  "key21": "45vC79iGaLzfz9x8NcVpmjay5ZQPaArRL7whYWnwuDV9mfJZFaRbpATnbpjiMWML3Lfv9PV2t1miw4Fd7MdHv8eG",
  "key22": "22uUuVoFZEXSHTJvZYeC86aYuMBehy4hZVcYL5UhnW8PLa1xsqZw7oxBTrWxDpvWd5Moj1ddPVsq23M2z3H5kEVZ",
  "key23": "2Ws48uBHBoheV8QUwapU1WoRdb1A41xUknsidzvzcbEafzxddvC1nA5fN7H92qk8PHyoK2sLJGFnPsxN8LWbXZuC",
  "key24": "5PcFMjRurz9XPTwtkWgXdeSsqr93s8FzamzEvntKKZqK9anJGNWU2CYuhXbcJ2vdBuoAB7BUJb5K2ntHeWFnntPs",
  "key25": "2t1TAEeLvgfRa4LQsSE7snYxQUteL5A9qBZrdC1Hrr4UUdbePHwt2EDNcnqLNuSm68MeawGF9nzTysnVDjDair95",
  "key26": "Rn5KUBU1grDkn9gepVNdU3UuJj8tsx1XAriF8oJLN49Sg8DqLfAPEJkMKD2PKUjwTmvUkLrScbwznbeei3QHaU3",
  "key27": "4SnC2A246U9EpqYNhoybg4ukf9pGZsQVLv7MJZHTRopAtUPM9YNPX7jBksttWsbkiHm4RqamsSrSvReWUqbaF81n",
  "key28": "4CQgZmmituwmN4MEUF6v5N77oWphELLDkAYMkbHraGqMyqt9JdXspZGABBJr93nFST6oRaX3rzJLY4AuTL6gGWd8",
  "key29": "4cSFL5K4Tq7q7uigDsT3WGCB52stNZjPSEFBC7LJTKHVLhcBpMJWDrDtv2QjJFcgG2CAoBs1HrYhxm9NQxotd7J4",
  "key30": "5h28tivNXcJGrpN3B2USGZsiFjcMmvUVqpCdS1Rz9saHLQaGp7vmMUn8K2UhVsQNkKK2e4RtZvAqXRLiK2a4DRM5",
  "key31": "4agxfbZUCyP1DDj5UUC4nTSwu7EWdPCmxsANpwzFwjtP5w6NGkzKv8WUVT42HFL9L23zL6aAPqw3aMTnpnYcnd92",
  "key32": "3o1VHxEcgqVoP9jt4CBqjTWBpciqfWeoTteWdTRJ6nM5YmbkSM6xzhsTtPbpFHaPZ7MvJK7p2VFmavAmiTfLjWJJ",
  "key33": "5ZiTmcuwJokyi8GqYZLakFrM5wdD2cNFwcQGhFaf9YYPmYWJCxF5yhmXtanPuk2knMc1bexSjSXGQgf5zdufPqBA",
  "key34": "oPQZwgR6rvtu5kt91H9PET7hKsiJiaeEF1aBDBD56Zn7tGkAgCNgVZ6pMjzSGDngmnu3hDBVNME6PcRg8DDDPbc",
  "key35": "2iS6kpq5pyTUrB293J2qu447fTGfC6x17bcsUcH5PGP3KU6hmczxC9Cz7RowZJg3WAUNDCRVFLCBCDcgPKvHwV3j"
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
