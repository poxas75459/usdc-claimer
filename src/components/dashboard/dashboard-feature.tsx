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
    "31F68BA1rVj524kdvcj816HzkfYwRwpHLtwVcDcNDh6Nq4VJGv6bF6iuShHJ9Ym8Xh7FZoToQU9bfE9LpnMeq2e1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53TsKLdfY8LWCaiXeV53vhk8n2LYkqDBfgyWXbfmW4HqiEcoYFoM3CPhWJxFx155G7Cmk7rMAT5zeM2LyrUVDBUt",
  "key1": "2A8uoYEe5DqJdAmG8brvrNq5mHeuGFYFgsxCDDoxif7cDu1Aky4Td2try4R9nP6cDFFXBcFXNp4TYUKco9Tqh1My",
  "key2": "zR7saokbPGnuS5wYUsQabANAkMhdmW8qQhe1fybc9DBsd71D3cde5wFaTvqDZLmT9UrcRz2ARZMSMBwouwcb7m1",
  "key3": "3aQ45gd8n7rRMnW53jVKWdDgAzm3GbAd3HVNNxVKBrUPtzrrSo42RYz19AtpzDXA3tG3uAMm1G6cepo6CkZx5sA4",
  "key4": "2PpCzUCrfNwJeBjZptGurzSsRv9MX272HTDFrvamF8jybrhrv5zDf8CFqPRJ66653qx5eyTw9jVNtrdzNmhC6UY9",
  "key5": "FPZraWgtDro43k6QcEuioXkaYfvE7YnoxLtpMYBnTSB3RddHCWQQZ1AC2hrmezrnrxZXNpdHMhuiP8kFf1A9RPs",
  "key6": "3pMByvhifh7JRB7pDXMfVmQ1Bbf5vMrp9NrkRt9uNDf59pD44ByDhJ2wzL6A11aTy6kP9xK1SkZXPEXZ5st3f1Cg",
  "key7": "KVvRboTUAXi7djLf5L58c4pRhP7NDp2UQyX6bCL5ShgdxfMVQzFhLAfSNM4wxP8AcsJjtB7xFxWWnECHkoYMxUU",
  "key8": "rRw4DxU4sUA7gM3ANZkiK8m9Bjz27iXDweQ996gHhDWxSkoqfbQPj56GTUgpeZ83zn4CCypEvwSjzDJWpobJrDN",
  "key9": "653gZEYY7iXx39MYc5Us142eqCqvq1bEf5CNtE7tor3fww4jUqsqVKGnNREUBYB526GADAcb2GEVEoSZ4wEGepEP",
  "key10": "3QiUvdZYftoYpSTSutcuxYcCJfk1oF8ZzNyo9qpgAFmvLCpVCS4Qs6SxxfjHDDdmHoEgCHmngnMfs3CCnCTZ2Fiw",
  "key11": "5T8oKZbitPPhXptoZJCFURzjQYNcWLb8jADXfe84N7wZ3hXrEL22kynfpQZHebE2y5bRrwPipngb6W4DztxMGK3Y",
  "key12": "jWB7gMXrufGG1QQLtmr4SjcSTGUW4ZAx8XTLjgLAM44rixftToaX5KDCtdHbHMwoC1qkGNPvCPKfrH3QJjSpn52",
  "key13": "2jG85UwGZDUkCT6p2h8tuc9pmvvtXSYiyFH29Qo4ncbbxFVvZ7aXCMNWWZnetgaTDoSpjkUJwXz84dV9ev5LkX2W",
  "key14": "NHpjvo2aWtiX7HP1uZxLQm2PcBa9pN4ZPsEha4XuPHTvGj8cvVVPpo3ArMYVkALH3GEQsBVfxtpyaTfqPPLpXp7",
  "key15": "2LGQnE97B1TGiuzVipU14TZdd8ayjry7yBc7SDujfajKEQB3cfyXPqc385aSXtcDuE3rwsvqPbunGvLtGPJHC3Ya",
  "key16": "3jDTbsxqNVuFK3LvtTa4N2Pi83NKAMRgM3mYB4FQyawtQm95c9YLKBMspLVgr3729eiHh8775mGEDnoSZJMysG3f",
  "key17": "5p9sueGztyMih1t36FGaQWi3d4hUNMej3xmSwTjuTsbop3V1ZWjdepUfTu1xFZP5QUiwFNN52jWctStEghBCfQzK",
  "key18": "4Bbg2GiDobLmxwRAwJiaJBtUbz5t6R91NXMg7wHKCcywAe7cauJ6f2DmsAPoU547LVmxp16hgMTHuBV7o5YnDEhJ",
  "key19": "5oHWCRjB6FEgtN2QX29jBzpLXNBZXNXe1hNbC5fZWD5HWySk7jUTMYdGy1PCNuXsKcctovySLTmQE2KumJ6qGZ5b",
  "key20": "4jL5oTBEQ3fB9AVcT1WrBmhJ4LW2wJvCh73K8e88p4237gopwZ6TVHMcVBaHrcrqSyj3xMrEocb3Rqit82DTQB5D",
  "key21": "2bKLjTRMcg1BcAFbjWZ678vDx6ipxoB5Bwr6hHEWng6WXAhfYJ8oVjdiEZNvdYnRBtXrx5cgA4sb2KfuB16NzZoE",
  "key22": "43eyCMseQf7KSQ5p8Xd1mErmYaEibmjAyrAw6nf5MmPXge4JWDL8qzk4HAW6o9uyp74YCwYyfYSBF6rxrnB8j2nB",
  "key23": "2VKoCn6gwofmnQcDaDRRNkTQJE7dnhFCNxS8wUWEyGgvedgyDMVhyhpFnXeC5gwhPXLAox1tCwxTjJpdSKJJ4yUH",
  "key24": "2hoZbc6UGVeQjZhEasFQjizto8MumPQQhMnH3EXwqKh8MMuzh2F4n2u5CSJXbtAX7qtFPPSwGkk9EGkhzsgY4fpg",
  "key25": "aL29wYMkYmWtzQ2xenE14mzLiauToeqWLfYUWnvmMgXKPSiAzAWuT3cxDQ2ppEBkMgeS6xrUEEDrJeoPtkYuiNk",
  "key26": "24DmDxe9CsKoQWtctq4ZkFeK1ZpmJmLMJM6Q7GKDwRkMuAjLswKvVbvttdSLS5CLY1fKHuKPFt9ogtiWcgFJbueK",
  "key27": "cX4vX5MFvk699joCu9hs4EJC9SUvrKGAoUF2mbbrBmLMaEp7TTuMECxiT7cXNgTj1Y9ArgiSZMUZkmdXvVUkpEm",
  "key28": "3WJKHsMkk1aWq1ARCAUMAJi4DawNERoFLRS9WbKRhZEu5nyR7RaJs2TxfUm5szx9JiiwXfxyMn5AcvNq6HEyJZcm",
  "key29": "51jsJi7CKs6hscYPtpHT5hg1o2PxvVFGsMZfNywZbQHr8BP5i2PGGUx6uom7BtaaLyvotBWVuKirYACmkoT98sTm",
  "key30": "3HEfsBU2K5YFyk8fEUdtURqKZZsbJbrjEcUFoaq6WUXBiD4roN7ef66mFTQKi5RBbF7jcGw98yqpAwCcLR2uoFuh",
  "key31": "gx9wqLCiBTo5QtnxexGqRysAmq4zpBNrmuY2KuAzzHMpRsDhb1ovQhAJo7s1jXwz7yMMGU4HtMcgqcrrvTjnfBv",
  "key32": "KeErN5ALTaLqVzacA29kkNVFbxdJ9LhoiqaMtFU5BixSXWgP1ytm6jPr1hb4QjDLdUTwYXEWpkTCSdbGB4DQvQZ",
  "key33": "FCScXT4oN2YMSNHCC9c3ucgPv1oogwReVueaeHFTkZHL6AWLsn4AU194TV8dG9ofDgg7xd9qJh6zhMNJpLhdJ2g",
  "key34": "4j6M4QjFcbiZjbqY5hXXEWGeX8iAXhTh4EG8GWFRANfQK8X4vVjwZJkJxMtuwFfaU9UNSR6VXAeKQTCakdXVLn7t",
  "key35": "SG8cYsJQnapjQaFvFyJ5wme6KwVMtsw7GAczaa3FyiCfHeGrF3VpjqEpgDN2oY7WgHAS9NoxcetSkvjWHqEGc7X",
  "key36": "4bhnaRcTkqFLMChnBmAdT8bYDPsFSqibQeAPEgoD4nAu8tXooHcZmQgNGgFWBNw8PWJ5wTCNx1xCNpzK1DxvEsde",
  "key37": "iDUvdWcrMKF4fRCx7gWLdp4iD5dwCB6mjvArW7eTqJ1zJskGAwX3Ah2WtfvQkd8D15XTMJm5GgxNKeiroQdXRvt"
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
