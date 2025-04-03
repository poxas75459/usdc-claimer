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
    "5KhxhF1XfM7VJKy5m2bTUSCb4RkFJ8XHKYowDg8P1Rz7mHuvbFk5shsvJygd3nynDP9aQMtrUt8NUqcDVX5EW8zF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UjFYtH4fFuvMw7eFD61PucKkp54yqVDF3rZLGYTdajznxS6tHqDQCHLURPstmDHRWtPaFYJhLH7EpfsSgnxBjrq",
  "key1": "4fDitDCCVEaidPd5Zka1VSMFTEp3wrd6NintHNs8femGt2KjQUofLNHEPBBkUKqmi9jxAqam45iRmzVkCGM7FNoB",
  "key2": "4YLWEEuDKTRqNhaQb4BCHR4xcGqUmNprcdfgv2DDDRkcPA4vgbfBGEjZK47hrQfB991eDtnxyCt61TMSPcWsfTQL",
  "key3": "2LxGWtxsxMNFvX9BbFdwnW3A7WDG8JeZdU97waKAS5jaa5CCe68ixCvSfbYpHZeYoghu54eX2f2Bh1UAAs9HcbMU",
  "key4": "PgjUJGeYXTT1DPFEEZ8q2JxH7BA3GNPDyGc7AtXq7CPQyNNarQ3HK21aKoGrTBZTGhYUpTVPdvEfonZnLxApgSt",
  "key5": "3R5LjpQsD2yqPgAZzqetRy1gvWuwDev54GTQUQ7WU4Pywi16kk2gi4EddASkx45J5j9oFwPSaEvpzGqZRCU5N6hy",
  "key6": "5wovh67Qbsu3kxPP7fQZNr4H9Mc65eFpj7iQJ2obW1bf8V6zStzJWoszYKshWe3DEFj1WCY5KudiSEN3TBGSkVTh",
  "key7": "5oPYPmrqoKyjrUeAhQTVQKT9zNorkG7zC43VMpRWDPRxeATgQtKo5AESPZs9F7SY2ycQNou9jRRiuQfebA8eEU6f",
  "key8": "2saJ7DjVzPERgxcyQCsVaykc5aEGmJr56KYeJoiZBGrReNbzA6GY4S7rF3jMKTni5sjakb73jNUnbLyzZ85EGM29",
  "key9": "4JUuFZog6TQ3QyL8cChTxM9htGosM3niCcHkFXz5MrYRJz6RZVxcVMkS9VzPQeXMYcUUbkrLVNDwACeuFDJSR5sL",
  "key10": "4dQNy4tX2L2AREqQdPAkk8jbW6GorAVLHbeMwvx3afCrszDkfX8buwuP6P49ZRnbj6UJRUAsEmigT5w9QrLiYFGu",
  "key11": "2p74aSXrRTrkGvpcR9QhB5ZHVRySGdjK7ZimVxRREZi8v4eoAevgeknDMsoKBC61rj3WKC2UV9uf75SoTyi4wCQC",
  "key12": "2qcGb6i4kRN9hs83gpXXofNQCLTG4C2oHHTehGvaxTntoTF2H61EFUv6zhUsE1DZCJZ4zAAP4vgSoyKvqAr4vPwN",
  "key13": "35oTXjxunMSouBHEJq3TPhrerMCbGAMWWg9AdHLqP8X1MoVnHrNDivUQ5gwLJXjTA1wGfqjnujvHuGxvEHy5PH6C",
  "key14": "3weTLPWyeheUfbeCvwk8rYkXtCHRn1cFA5WJYpXVuNDfu2V4SpmXMtjicupQbmgMRqfqDPW9XXpfWdwH4aWJaDdf",
  "key15": "54MHYDWFHwLi6uyiugMBC74HnNxZaa41bty1hAjRkEHuWMAZwTKS7mCRLYmmMZ31rHdcS6Z3hWYTuYUQjZ6ZBwX",
  "key16": "46PcrP6o7UWvXorkHyb3vAj1M6VRqJeKRK43DVrsGrDT9uoTtdzo2GSBAeun7AiwtatifTkW46RHC4gKUtozmknP",
  "key17": "3FMz4xs6z5C6oV7m3kYKauT4brz3uqukmmV5i7p5HVexydorENxmD59qEaXNPDWPy4dvNWLkW5aecdECHugcm9m7",
  "key18": "4xfxHvcY8PtJqMyYDndx8s2iUk8FdaYEQCha4eghN9P8KvwnFLgMFDjRPsd72ASWv5knUvubxN73QL7vxP8Q9JXE",
  "key19": "36CfM13PMJbEByT9GjcLDZoF98QEyqqqg3y7Zog2MR7BVypTpekBrwbWBbdWQ52ypinb4YGScomBU89RvMoXNH5",
  "key20": "cJsk47YVG3dEWxUJFq1YkAGZtmFAnCqJJoUfMUhBZKLukdNS5aB4Kad35rXTqctCVAGCF9sbX1BYCvPTV3Bh2B4",
  "key21": "4h4JBWbTCELr93DeDeMamFTingecgS5zFfpEGx517gMe1hSC2akCANLf3qPQdoUm5KzwT6U1q78pFgbos2wKG45F",
  "key22": "64GSAsTp98zMUB3dBNkZUu2pwghs3nWRF279GEbE6rwMoFqwQm5tc76qigVemcCV4LT8qdyvwFMEcGKgoiWoAni4",
  "key23": "2sxyB4A4F2AjfPcZLBw7PM9urqJiSDXhNCgKThCKJymVy5vnVBUYkm2SWDTHMSmPVv8uKeMr5DuNVu9zuyt4PPjn",
  "key24": "5bkrzEztSRvcXeWoYC3Q3USjSZq7PkQFi7Awc2o3n6P8D1zHPchugnUkDDRkbNVzjzyGbz969QTrY9NE84eWtwqN",
  "key25": "2nsQ3zkBU9UrwomajeknMErQJdXQPnkDrX4B7RcprBKDMpTJdDrqtunDQAZBEYApapK6R32gLJ2HNF5uo9kT83KF",
  "key26": "4QMfakVh84ivG3g9wx7MmnHvU5t1wmEpvA5UBcm4PpFZMUWteNFfUy4QkyqyhjPzCsqoaYcQfY5dxMZonYm6wMpc",
  "key27": "3us6UKEo3kGA8jDov651CLtZBmKncscQCbSppMQiHapaZnBRMEmExyyZPe4pm8atxHTag3Wk3vLKcM6cGfMDfB8v",
  "key28": "3RrKL8YY2zRQBPqNgtz2WCP9dt3DJkfyUu5XnpYNQwJbSKfpdJ8MatDRdoRpe6VndsjhXvxT6DWSwGQdBxZ1Bbd6",
  "key29": "3ZYYeGDiSok1SgUYdquEu5R8eBT5qxXnbXojXE76x7WQVcbWP2R9tJPkw2UmNqr5TWFkSCYKyYdc1M8BS9rMj57H",
  "key30": "3eFGzYgFCGN5WZrxXQyBrmbyiro63pEbhs4KqhFAL74TzQyVDvdfS7fB56Dqzm2JjXPe2DZL7inYoUE94B3rtDJS",
  "key31": "2giwuj726rs4LF7mhUSW9rxwya83AEBNLcNgDgkGyddTqakPJUTXaFMNs1BKTbS6u4oKpUQpJqVrCrn6x9tEyoBE",
  "key32": "2QbfdxFjeTbJ9iVE3N2nEgBb1Srrcj5RQ8HCn862VgVrG1XzbfMMEwKd1TpPzYSgRRfhPP6DPcYHPiQaZifheftk",
  "key33": "5xwCRe5r6WrZNvGP3NRTwbhzVdBExHzvoUGctk8F2cwc7VNuT9EQ7PQUrupzJTmF8feBhTMUU4wLV2aCv4PFSH2j",
  "key34": "52PkxVxwV6t8LdtkYc7mjCcJTedXQhfQKV9eJdGYEFS5J6noZwJfiqK1F7EsukHgcdyRT9rBcEmFg1W7AWipVmZd"
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
