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
    "5vmc9C9jdb1t9Zjjc15HDU3ARGSvwYwCzqQnsjTbYQ4xCdpK1MrXfkT7pWhvtAs22NghipRUwb2Ag77NbwPvQXqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gSCZmAqCXhTs7jxhqiipedstMbshpGdVHYsAnvsB4MeeiZyxNa5wKzcpaRmPo7NCGNacNky7wTyi2vekGG1z4wW",
  "key1": "5yfij5YUYUQXLS9Jxk3g32tgG1SGmU1KomS7RnwMUPYpFgkytWAfeoeR9vzNScPNdyxx1rFByMNvSij4Mrh1e7Kd",
  "key2": "4BoH4sbHia6KEdAoZfJm7ZjbBjsnMJULd3SJQ951H1DAt68DHTiTX6xcN6dsWjM155dQDXdp5Riiv2sTgdQfGscQ",
  "key3": "2NcLrkQZrVJJbxtgG8bvMt8FJmgAe4FWRp4QKvR8WAicTvApzRv11rULNgFrRbtEkLv3N2K1mxbHFMcwrnLWjBTG",
  "key4": "3JGNkgtKMDV35BTJ6xhpUWoWFsUAiSHv3G76mdsgrqiJeqxDDRb52ujLX2Y1FrWz1iNFNxnxvbqaT2KP15yVXVqc",
  "key5": "64VJMc88F3rGq4z19uzFtVTTgcVnHZPVPXpzG5zVggYsiEtpPCxkvNMU31y3pACTiSoYKCboAskiaRkx3nB3nt1s",
  "key6": "4fMs5aqGoXjbUgW9JaNGDRVcFdu82Q6cMwUwtiyEBf7D6HjGpfyn3PDhjvzivT9a4SecVWpURU1Qk2nRwTd15M3",
  "key7": "2rcEcLusEfFtW5CmAYjBC5KD53VJ9yHtE36jiH224HhZz1ibEFgCD9hcbqL5GWTcpWbvSVDQu2xTTbgFU7MhXHun",
  "key8": "eVbNnwuKgmCfxpRzpkLBE2FvYhYdsHQmwcYogpFQpi7TVw4FAY3faEJW4BsGC1Mp2baphZDn2Xp2DpEVLa16GVu",
  "key9": "3AauxyfUyVnwaNCa2CXZxiuEvxt85rXdMz9CF32e2aCaB8N4dcj3sttqgeg8zMGFYyot3y1sYnM6uaoFZWw39QHn",
  "key10": "3rSRzLVVvX2Y4fSnV2HkFj6Cwp3N65fQ4m42VQbKUmBaWnike3UKAPBDwzFUKRAYQ8DbTSGiPHom4TKR8ST7tPKm",
  "key11": "5VHDjE5n13nGXtRX8FSw1Q7JeFNVvpNM7NLYxtGW2xHKTbYmf5p8yf5hw22WiuZw9vjPKSB3ZDWP6Wy1tG6YeyEr",
  "key12": "2eMY6YmV8r6zbuWZTFpzCPjFBSHgLcZmWtwfw9YZ2YjZomWNXnTNDeC9ayrCyjv1aK8poc79WRnxiwEoHbTWFA6L",
  "key13": "63hjZ6dyhc1uNv5icZsC3ow6NUJhQLUpwY5GcafkvmsZ9wYceK2z4duM23CFK443ozimRLG7PUjcFvKWBBFTaUc8",
  "key14": "5AS7Q3s1tspbSQ2frooAUFfvGXgVTwhjjFaw77jdGV9gAwFSCRkKq5fFNB9ukV2SwHmTwFT55TfivmDubMdEMZGV",
  "key15": "48jZjTGuZVZ6HsTxcZSw1DtzgXRRpVhr33ceZrDXnZuWM9ujxRqZ2WvEXRR2GBvPSEguk3T2kh5B9uGQ359SDw3L",
  "key16": "3zsRDsBHHei9HNqLf8V537J3jyYf6nki8D8ZeZBtzDs4wS5gx3A7SKkPkZZZW3qsobPeBKSBqvMwQY3U7miZVW5H",
  "key17": "wcgMDwi5sowQnfyHpWJ8zmzv2stPZz9oGZ6Ze1GgP7eMRycDDHfrEbuEfNTKhDcpFPyke3JZdURG4TohGRbSuVy",
  "key18": "3GHtRKEBiy8byYVbDV8NBy442hsDhQKVS8uCWLMJsTyZ4v5adcbp73gvqHh8AmVUPs9yqDmeovQAxqBFtUzmq6pz",
  "key19": "53eSTUFAFuLtV8qdAz2Cxi7Ngw4syVCtVMqBi4fabCB9vfuYfpYurTTg8mxBnAoyHZFPWBiQfEyXaXoH19DJyiZ8",
  "key20": "Y47k1HCULyE5Skq6XE3XA1EQLvYx7bFCSdnk381afSghbGSFv9LaqQ1XnLL5VnuZkEaTDbco5P3S4WF6A21neux",
  "key21": "2JJJouXEyZuS1utfhmrjzYnmfP3TLSVXC7Fz8WVCUxxUvTsD2t2mkyRLTbHgVSHgncGf95vNcny2kHmTijPLQUjQ",
  "key22": "2DMvGYpipYHbwGXRuJWguWHRnVGxJGZsMcKw8535jTU2paruBQUgVnE5C2NPbTZBZVPf6mQVdSheR15BwQbEPv5X",
  "key23": "5oXSHVCWorkT7CWCEKXXEsyf1HvyYMZFqyXCkG3PkvJ8YAW53yRDrcNNZu6hHYhKZdF1K8xuEngX9ca3xW4dAfiC",
  "key24": "3GmWe4s9L5uCbZrywhfF9eQyFqhoYgFSSbik35hTHxb15RpfskW5fKjEr4NiNSeYgJhZ2NHgfVTfh2Naqiq2KyhJ",
  "key25": "xu3M4MocgFgaruDGUxKXrT5UmZVQsUakBuG478ohCa5LVnBEDxF4LkuRZjRJX6nBu6F7TahkrzKsgtQ4TsvHkcL",
  "key26": "2DoeiHwUBYrdqVmNFJAG2hbpPpJ1muhQofWVdftFmGc6Z6m1JdSscs9H5w7rEs2pjBRhrVb9Z8z69YmKGzWY2ZF5",
  "key27": "5SMJWCqPUCe16ggN1rgzxX2eU1Puh7JVxffGzZkYsTNz5PEs3pKRWfEkB33UTYnwrRjeokwe2KKYEuAx4vBK4GVT",
  "key28": "59pVLEEwpjkLpko7bD2kcxYKPeAiq3uhkyKF4HCHkdNb7yDijnM1xjoQUCqqUXyUcDLKcQ9Dv2UX6DDTz6H1oMGq",
  "key29": "2LkEUuueJnhs4hmipTy7CwVVN9DrMtp4cnm6ftVwfaKsXFiYiEHQND22Wd8dHjmECXC9cgaqXCnwrfQYA3swkcQs",
  "key30": "4ohUeTeVvBYP5SAGM2DfCDLRukbSQ4RyBaePvvc4nmKanJM8fSa6BEeq4XJA4EejXxwipuoxtv8SjneaZj1D6Jrz",
  "key31": "2T58gAvfbi2WYjyPE7yhHxcp8dUNM2c3RvLS27LDyy5uKyDTiUsb7eKn1e97uL17tdSLo2Hqsnj9nnkAUN2pkhaq",
  "key32": "3sPquWmJKbpDwWFG4f4yHn4WNPEjHfZdXNzEJPqTyxtBftSuEVzLg2zjSqzNbjGE8X12vjA1fdESNYnpxNpKY9bj",
  "key33": "5CZG85iWRFxU3CEa6Zi7t7ukN2mPhF1o2u4voe8B87XaJ3MgQVSKAWrDoyrzku24tteg67wYziDgwDAQFJzqtqXr",
  "key34": "4XzNqa7JJRF1pW3SCY91a7uZrj9ZA9HTf5PgG3Mex5FXiNqywR68zSVBD61Sv88HMsSCZK1WSkfRAMY5oyCdndXe",
  "key35": "3gaf2S8Ca4CVAPu7VajxpyLSfqMabXeTEY5KgrfP26cNSqtiXeYnax4pPjDpxoXzTcLwqqkMFrrngYzq3VjvB3sH",
  "key36": "4GWgE542UF68SRnebYmTYDJiYPHZYchcZf6tcdFJVij1nXymLmQCciesc6snLY2EtEYp6ZnfFi7N5cBCsTysuZWG",
  "key37": "CLioF6isrNYXoAUoA8KwDvmEUJYBotoMNAqVMcsBBM86Ye46FaN7dkibjAH6M6gzJkqaQHzTmFEDCoBfY4e7jZq",
  "key38": "NNTyQiPu2iktKjkkgdZSeCRFbEvbZTWqTco7to8kWwWduNoo8eNwFbtbeKbWvwPMz6XvKpRLLeBHjnoHFhkgnYg",
  "key39": "2NMvoPPmjopSVDqzYsGPbhMHjmY9mD4r7yTBpYZmc7RmoZgvtdQy75SzXaXPEXEmQggq47W4dDyfVxpbJgWRXgZx",
  "key40": "2Mnk9QjfPoLDVfqqtGigqfkoUWtggPF53Ng5jA3Baxboz93zGFKqdFEzdjZNGsfTRw5UoYKVyxdgyFFqczVw7uuA"
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
