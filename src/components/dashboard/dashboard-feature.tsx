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
    "5VdvrBQmK51dvspSwJkGN2zQfYVgG1dNmbYw5QRQhyHcSgstWJEwHFPzJdPzqMdFi6uQvujb53nudgqi3Z69iieF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hr6fDjJjHxKwHyRqSErfaFYVbWUpnL8K3DSfL1pdB9nnQg5v6tE2n8ZR7W5ABHwwxKYoFQQJmVdbYgwJQNWURFn",
  "key1": "3qvHbFWYoy4LbNvemHcJFJthoQXfdnLaCibZwUDebcLaKFn1utTE3idVSXKmhjq8xi5EijPLU4FYqPE8SKtVP82s",
  "key2": "5D1PJe1486HBp6m7uh3aGxzBQecePiRbJ9EPt97DnxuP1Hj4DN4x5ESGmjijgYvBGQ62f2ggLvbY1BsGK2GQZxy",
  "key3": "31cFbK96HQY5Y8j3Zg9seNsRdZg2KDNEd2RNQzi4DdoC5LSzNuc4gsSubR8V7qR5wf2v7jyHnHofBTu38WccFFzE",
  "key4": "qwW7pfAZwyt9KzhDCQwHe8V4n7wpzTr8FaRgGnZxunhtnuHSVQFiqHdu7jMsJcm8UbbYWMXbVZoDPKHEU9SzGDf",
  "key5": "2vpiZJUfpWKffQYQHbkzWzPjtmwkBYaJstPVY6MVLJEAGfuQJ4FzNhP46NDHPYK3d2EkMd2j3tnfyxwnMgey4vBu",
  "key6": "3Uzzkmf6tqwqCfyXhvr8o68Ktb8tKA3UKFTEVk2f5irHZYQKzCXS97BShGe7keRHKHZVMpcZXiCYZKLNfFuU3v4b",
  "key7": "5sE5tDUq62YHDRcXc3EkzNNgg2CNeTETNV4H7oP11734JSUHW6oZmB2fWPXEwtZ1BKTZTNR3ydWVijprYogromuZ",
  "key8": "5HxMoiH5N8v18eV9gT3BHhYZEgW79XcrEgPJD6UHzzHmVLWddMwk4st4Pkqn5HWzA75beUeEaKN2YVe3hRoVirtE",
  "key9": "3Ko33sL7y5K4s8P7nrt64ZqC6bxYVyEoBYKasBbZwhHUNkeQj2N9Di8KNAEJ3hAzgab2sVTrwQeTkMJXo7ympbJ2",
  "key10": "5SVUvoUhwVmmpWEVV4r2k9msKyGDcvaom7jnsi4ZwxFBdgpek7DyCoinxAUnWwfmHrSQAkGqcY2uhVHauQD94RZw",
  "key11": "5jA2FowYVz7mCXt8ZkCpEW51NfU7LeUHi4SYgjUDQRDq88y4GHSXfrara21qLLj4KC78JFz9oyF3646goSZP7gft",
  "key12": "2dcJ2Zcg69QfVbZfCfi3H6QfWawSv8pXuLru8XZ98G6mJkwPLQHyingFm121qroZZ3Tiih6YSFtK4tXbkCMzNq9D",
  "key13": "5rmGm5on4jNkjVuQnBvAQ844oEfaH4mysJBmuAjDvjxWp7dp4gQ8NCDRpFwjYBrBxNvSTKK59hfhRDouJBUr3ykQ",
  "key14": "79j3AhGigrRNCEAJQKiugbCDPtoKCFhfMnDnVNjc2HftfGsdeHLuvdhCozgPf1mnrgFsqZH82NZArFySuY13zfR",
  "key15": "2cP32JXipBABMoFmAe2Yowsk67tTCHK9BnAgsNM7yBMzBLhmrnaf7RtsXC6D2sbduouw3xQ6tei2u7RNd6Fh5ett",
  "key16": "56qEwsSvgu2uQipXZtQjMPtP82NtY1W2euDUdMnV4PwZSDK9CLTnfQy2fk7dyzGZvVzViFx3n59VmFFZozfPxovg",
  "key17": "J3gynJSEExtU3RQhthRuhfwmQ8omme5fZTS3TebVPBBDJVr2hZqwU721q1ziJuscjdM6Rwjg2Mi3c1ikTN7yofA",
  "key18": "Vm4n2Gif1vkokB3BmnTbgpF4Yp4JUorL1SM7pMNJgSa3L2yMHPCtTCn88rQAgQcZL7rQn2UAjeash2UvR7xeAAb",
  "key19": "54gH2PPd9PLeaAn8ahj64uKadVBCsBrR8KFsbBxXBYGA9kQYzTQRgTT4wa16zn4gjSVXApP6xHZ3NWpm8xoYrHKX",
  "key20": "32cWE74MZEDJSDxtAFuGN8Fnwf1W861hnMLcUyN3tnbMv3NAUt3RBRLBXUUjumj2ePoakednoM98JipNVeH1W5ZP",
  "key21": "5C3PHZegVTDP7T8dZT9EQ5S9sTXB5T3qJRphDjYGY1b8iAj3DpepsPfTnc9hYGWGvh35fjf19obGJbwN39Q5x7Sv",
  "key22": "4VEShJGfyDcNyZ7TPz8hovCK899BEUcTk7j5wYJ2ERmP4qHHrMrnrnfS4gqiu4VWzjCt7nyXBH4VApbCPW4gPG7g",
  "key23": "5bjmW1Vd73KUb83p8iAN4yw5yX5yncEB6QDtHTQZ1hQK1cRqRnJnd5UEwR1L5ERs4Tm6aEaAHqj4xMQPxnKm2zi1",
  "key24": "2jAqtgQCwS9WroHxjpbHSUEup8Cr5rty6Dh4hAg8twUz6vzAEN49mXFrYfKkRJ2thFcfveEoucGPjXf4u7bUNpGK",
  "key25": "2neD8gdLMb3zF8eGmEo3NmcvAaX9BqNn3NZSrdANcMomdDLHm66rGoJU6TLS7JEw81VFXoyvpSoxqNQutX8Xpw74",
  "key26": "3grfttEa5tV5GkcYz8UgaYEFSk4DmUp8D3eW6KfWWoTbhfjDPKDWUNHVGrzpVhp3vtfbUSMuGg85HegfUKiT9AEC",
  "key27": "1UzAacYkY4jUNNXTKsMknAiV1QZPt2ZJSqpsRBkcKpA1G1PiXbeXdMhLgMUQWo2bKH2rqiCjnWpTnDNSwA6JUjt",
  "key28": "3Pic6DS7gQSt7Y1ttGCwsjyhtgntRZDNPHDmGFdqLHsphCMDkoPCs1ZxUggdxWJxrm2hbjgPHbeQ7ATrtHHMC1n",
  "key29": "5Kqyxtmwi4wafX4SwsMhHFFzNsYM78soXgu186t9uc534ZEc1BRSfA69AGQRxw51sKTUYFMPCEw9EMsrKPgXovot",
  "key30": "5A3vbU3C4ArudWv5UHofqFYSPqcvan6rYMuYEJQci1c2q6xD5Wtb6PwV4tGu2sPxRerA8zjsdM5DdBR4ciCm2fMA",
  "key31": "WuU9izGALyTnawgEtkJkWwBdVCos1RjeeUm8UTJvLj1uyDubs7K1mbTjNWEBdGW41FqmkTCSvtPwJhjVDjFhZVJ",
  "key32": "3JTQ975hm4ymdoVgpjV6QvKvxdzNiX6VTftsoyoQtAsBPpmgkSzZkWgp6PUfR3KbrbyqY9rvwWYgUsWWYmKXA9Cu",
  "key33": "4nfuRzcaQmb1wj1GgfobLQ239ae5XmjrbvrDvEdYPHdYUooznr8Ci5m4ReUDsg8BN2Spmhqt4UGQeEpbs6ZyoPft",
  "key34": "4PWyrBrQR1oM9jXRYgVFsKtdHkehdoTjT1UGVUKfsF2KXgCZaMxsKyAUHtLsamoz4BCAHYvfHCb48AVMmwei35Gt",
  "key35": "2w6dzLRbxzuHMF7swWL4AuhGxjLPfkxSNdrQYu2rjZchh61tRhrCeMnpBDZVJnJinh4ALvarhfy4cc9sxwp46sgN",
  "key36": "tBrSHVWWJyWpNh4Cw47nWMzK17SMyBjGHpQpGMtjPE566RLTXz9RcEDYBKPDMvnZaafPEQ7VCymkRRemPx5ayWg",
  "key37": "3bftGSKBBMcDXTmFsXUTPxNtVTxVuKwYhc1hVJxEYxT35bqmRGRgD2yLJNC3FCiFrBgb8QBKg3MajLdKrEeiDzci"
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
