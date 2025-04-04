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
    "3eLtCTjf7vip8T9mCLYbhkro1DtVHwyDMLWBFK2HQ4EqkER5BrC734rSJC78ibBXg833bkEHFhJVHJk6mVPE4i6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51hVNEwd8mu4hnYzxtzMPq3L2BfTM5WPytkYmVJZkuAHRgR7G73TBtgCWLSpU6dgiM9akLjs8d6NuaypTxnrTpWA",
  "key1": "tWKoCNxSFUSZQqZs9m241ud1Nf1XZ56ziGxYxEWMaDQKfFpAM8xidngmqew11WbQqpAKufUU5Lz73YrjjL62KW4",
  "key2": "2xPbYNo1WLjJh4yQeE2UYNWFh2eKWLNtqJaZtMAKhkuyggY124HfM15BcvHYxwXBGCztk1RfVdoWWqdVFzwb2fzE",
  "key3": "5iY41TcR7HyevK59sxckpXqDKTUacC7PfuNQmRcsoeAQCh2a2GkWBFXz7xPdEuGWnhSDJtwQEXPE9LyMkJmXQSwf",
  "key4": "5vRreyGiS5K4CuBoit5uYaHdLmuxeq9RrHEuJ9v4DRGMX7HrM4xLpo4AULKV8cpaHSyodstzNjsbvn2KCLHmiwCB",
  "key5": "2aBmDZr9t9btxNLWM6o3Sfbq8JB5AdthZxXvEPsGGBVpYtzSsSmvvhwK9TB69KBDJSNU6iesKaBJ2EgmYHsZfrJU",
  "key6": "2n7QwcrCGie1SSUJzEgjkPduvsSZzMNFcTsmMQb84AoqKGMp7oVARWxZKQgsVGDPuEBsSX7wrbkWm5J7AguyKZw4",
  "key7": "fLSUZyJZro53W3AnLXZ3wYvXubAZ37yc8p2SyQNWuYPrEjofepoyG4nk8WHDd65z41qedKYdumw4N2nZy56SWuB",
  "key8": "4imPhj98iSoVhK4HNMd2hxo9icUqYobdGoYHvWJXivBGizQvvw277vRWR3ic9yvd73pez6ZpCj4CZd9sR2rgEuaR",
  "key9": "ieMHmdBfiVkaKAfsgEMX9opHaN6YdGi1qGtXKuW6T2bmceiatMyA1bFveWbHFJH6Pv26ATAr4a8VJiU1UdfLZE2",
  "key10": "YfX1Xj5mF3ikjRQukB7ZRdir19o4SB2dtKqyUJT5Pre3sduKczvTpD7Wg4Vtap6VwX8dRMHEHrjmZ9FqoAyNtx9",
  "key11": "2vrdRSicvYvLSBAoQizK2irfA3856pjGSMUQ88bdbE8BALgqEfYVqLJmZHacupSY1fpwXurwGu6yrchTusZRdnkp",
  "key12": "4gfdEe6WGjTYkKHij32mtp74eMBTvQyqLWqaUsG5BXWR1JterDRpBGyodaAkAgY9AKn1dgKgxYo6Nr8QicxFSRtf",
  "key13": "4gcmjfgixGP71hrNbcWpSVEfT9zyHTT9TCus4fqBidzFg2km5ySmgiB1mFcoUKpajokkLfey3KYm9nQcYcktccnF",
  "key14": "d1XMvUuVCWn8qULWpRkdV3qRpmjyuTADGgSyzBHcW3oP6ZXjvTtez4WmmMrdjNbNNH5d8fTz2KKwQdiAGBPuSje",
  "key15": "4EUGxDLiE4WfSbZPJESVvhSC26K1GZ8gtRokdDVPPB8AWTvectPDEfRY4EyZ1dx7F45MJ3zLQ23rJSdoj727RLWK",
  "key16": "PiBFVHhDsfMTuojH7D5cqbjdxfWVitFuHR6EmA62Ju2Dhb2g29Ru5xb1cEaCR1f4DAZQh8CxR6oXGteA7nEm4MC",
  "key17": "B2xUZwXonkDjSPHsHmBShgx2xMqRingyAzwJPZi39b6RnHf8HkaV16t3G5zbWPvboiL61Zb8hFfsuST2PLBihAk",
  "key18": "UGhZTCqu4zGLvWRVmvYwdmYZB7pvA3qXwSFgnbNZMNS6VdjbFz2TRKgom1TnmLGkBchBHWgQgNJnabvXFxHfR7P",
  "key19": "ejR2zS2vdeEh3JvzeghXiJxTt3rPtq1ESw2fL6yYn4Sj7RDN92nD3s8qdXE8DHEjsPtJgyReCSWrps8fCG4HQ9E",
  "key20": "4wQzxQ7fBVkENxD1t6iWTaXZrZ5XReqHUPANLUr4yECsi9fBVrp6p53QZ8aoYkKfx2ea6PmcbSDtRxaZzGB9hgQo",
  "key21": "2uPMDxHXkdwaXcNMPC2r3xu73Cq32wXjomCykDNkcJi3afcWn2ZahzTJjZ8RtKdAQ3dGCWC1oJJKXto5Hqr3PC3L",
  "key22": "5jwPcSGTdhJpeGmbicbxqsout2KsJxpi2RWvsBgga2YtNdtcDQvb39CvPN3RmRMmN65CwVGB3kuUUVtZngs2LSyH",
  "key23": "2P3DF5Sn1Hc8aQEGQC6M9F6S95QnYb4HYFD7EmqYy4Vr4BBjEE1xJhoqGDteDdZB1ZW2mHWDGDVXeuSFwxi2tvaP",
  "key24": "Eztw3aYUnhtFfZMjgEKEGNFcXY7FaB1UtsKMoFHMhx8Ca2VPmwcgvuA9y662meeF6RJB6kVUwhXjafCVP7GSeBN",
  "key25": "4Uz5Ab5XPry2SikJtvqygY6uvW8M85uiuw5i6aonC99aqhkYY43MPFwsV7Zqg7cG1F9YwnpYDodJCHBZzhyPFovT",
  "key26": "4QutGPpPX33m8vokJSCtKV2NhRAzr9bgvBXKnZRprjbwbSN1a2bibLtpW19W5VoNgvJ34j3xpe3py3fDatkkASUa",
  "key27": "4G8kZodTy3gZSN4jt8sJurgYJH1cGhRrJCFDGDLSRboupWasv2nSmu9rGsDQsHQFVktG6tEE9jTWHjRMSmGyUN3B",
  "key28": "4rBvNR5w25SPpbzBD6YAXd5USSS8vV7JjShJmr6ZiepPYnxUwNiUAxXzBignFYdyjQ7YuQpK1T3F4otF3YP6nWmf",
  "key29": "8b81HFzKWDq7A3Ln3r7HdHrBaXX2PabpxyDssTsEPKSMMHyxvAvkkNpkzD4g31Enm8tCTXjCUvWbUfVqXKnrbYC",
  "key30": "2gHwKUwFizDu4327yHnLnCfxcoQwTWD4WfD7ncio21Sv2vRTJuXqVkQpJr4A3a8vrw6YcEdMDiVT7ajf4U3MRpGv",
  "key31": "Tt8HcFZBri9DKbtLNGRQPUH3kQkSbWTMwzbmCEVa1oBMyDPYLUL46H7xzxJD3WNCkZyjh8nKmTHCcD5BGmnzMBG",
  "key32": "5VsChR124PoFEajf2c8HWkuVpFd7ZKfdzwCN6fEQC9doexidccGxNkDEHMKZcnLKNFjWv7aTY3qff2gzxQvst6V3",
  "key33": "3Sve5L4ZTPagJ6jdEAZ4DGLkg53hbH58MtYqHtDfPGPqzqfefsBiZZPiFbwcRhSFoaFEpSpKxN4nxRyNF6ptW7K",
  "key34": "43ZMAg7av352rZXCxczFzc1bH1oNWyCFTdGTMZ3N4vorixbgTuUw44bhx5SG9zK4yJJbz5dEA2V4Gjo5aWCCXkyq",
  "key35": "4EevQpgY4GtRw3ADSuMnbrm6TegM3dQiJKahM4C2huWUynKrdUwywaAp9RQ9bgsLcZSansaj4YMzS9uxKVHypwmk",
  "key36": "2d2LsuJfjX48BtGyUjwphwKjZUz21BeRNGLHfH4kMkzx26YANUK3BkgpZzLviUgH6ysTPJS8njCoHYxcDUki5EU3",
  "key37": "5wWAuLkzUb2gM46U8EyvS2neDSSj1DTrffcfJW8BvUF4gGvwaMFA8XH8zHCkX2qjDHZSvE5JxCd2yj8KRrZohMvJ",
  "key38": "65afWSYxDUZVTW6d493rTppK3uhh7XyQojpskFo1Hef2eFQKBqmv2baEquJvzbuNpqdZ9ZygcvAM1bAQ6P4TYPL4",
  "key39": "54JcSTUjhTTSjJ8ivqPnjtn3bpAT1vMhsf4twCwh44ARkLX4J5zALu2K7UXBynrkqoNsMmoxZ7BiwxNL21gFwxdU"
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
