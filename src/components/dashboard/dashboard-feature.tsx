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
    "KQeRDsnzXak17amPEGmGwfz1dmJUWCzt5odBUSdkbmdwHPBfpmjS9AEyujSd5D6cnS7C8iVdHmVYF3BMyovJzhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57NfBiQPTw4y38d2Qm3DFxUBPxVGAvgqa2xeVeJe7JTbiyKt2MtyNtjuCWwWN55scaPEEduEfoudpZXcpFjMkgfz",
  "key1": "5nd4tWmGuGm6m5HXwCrSavL16ec7Jd5YPPnsoEFUBZVRWEnuYBxzn11i2aWDZYFb8R9MtB9gPsTTHL2MVLXuNgqu",
  "key2": "2xWnHY1gJTtPFJLMfaaKee4KZPHWV85UvmTTfANPNwKCo7NvSQVECxTGtT4zHeeeBXZ1JcDeBP9LQcLkmEJj8E6Q",
  "key3": "Z6Yh29P5xqgRWSuTB4LnAbfHeUFHhAQDnj6njRry3MyreJnnANqdastibUcVK6bwYXyjPrTqBXz3Zwmdb1w6Ya3",
  "key4": "eVdvtwDQYVmiW38LWPYHid2UUS4BeeYNM2vjhvnabUxyHz3XkbJBEGu8ssM3aL4JJDfbxWpKBUMwWs8M3dyXaxa",
  "key5": "3QH9XDAUAA71nKkP4qS5XSEEgVWULMaDFSUNH4Ew6dxs7DAmsFKo1Daw3UFA8jw1qXq5Vuog28ga99oSGJ3e8D1T",
  "key6": "5uXUkaXKmqsZbfK391gUehREMVn9GNQpDYikqFuJLFANjoTQQdnDFoAdCFBP8GDZxWZg217oJhcTiV58jhfcwj1S",
  "key7": "4MQ3DGKVAtrUNaXCA95kXiehsap6iTVwDHDxqbDTkcnR36YdpUa4nYKDNf6tR1befZUTFJ8Da2ZVoUwV31xkASaH",
  "key8": "3fPmEsiF8zxVQHy6btEMyRcoYGdTYaPoCdPWVPpNQqjsaP7XUdDed2Kyf6ZAHqQoSb54AqzmAk5p4tGYfMWRkvTb",
  "key9": "2SpRpNq8bCbP3sjBSfAuicxPiNGC3dr4Ro1VJLEugHSPbvM8QA2Z4CKhjQvRXt5bvoptABi1Gacmv5o3yoxUtFEM",
  "key10": "XjZV46rGmiemEDAr8P5JQMKC2LLEyeahWirUpRpo8iumNNxUWe9Zhu7qXyNYb8S6PQK7tyPu4qm73k3sRoSRwiy",
  "key11": "5SLGfBtjYovD3r2gp2M3QVFm6UxEQwnv93XK1i4VRAV2bUYMkBnKoGpWGaBj4zxPf17JVAYR42DXt4Gq7Rq4HXT8",
  "key12": "58DAw4c9BNVRmYHNQgcvLFuV9pkJayGyWgXpTPrdFD9SHVGjA9nD2VzRT5xjtMadxve8U8RkbMUx1YxAM2zJmKKg",
  "key13": "2zv8ijYnJ31n6SfWuQ2eXMZm1qsERWffWVd6q1tJhdeMVCDuDcEX29ogPrpwp98pJZGbFVnno53nWwQUdFjVsELW",
  "key14": "5xgyMkeHxy8FQa4LjaxJhV2aJ7wh8LN9zkjjdGkEDWH6uNq28SxDmUTa3LQUZrfHL1Tizg6cjGoozvoq5hJUAoV5",
  "key15": "5D2e6QAeX2XyruLTtHaiXHNRvvbFGoHtZpxrNm53GfYoWmHWR6udmbHLo5XQnM8xQx1uRmmGbD3BvofJ3U5r8wa8",
  "key16": "sf7Hbn1jtMjeAbnZGNsuc3tM5wAwKxk6PiQmTprvheKKQkXH2B33yLC6xLjQpoKq4MocGXqvEZYnsbT1V9oMAsD",
  "key17": "6gGhusPajnd4GeDwgPjrD4XYYPvhj1P4khjz1eqvUBH8hXs1MSrGzXxewhCzBLcp8jHgcXoWSTVWcasfyYjC8NZ",
  "key18": "3VZw9ykVgiWJJ12oNh1DRtTKc62zy7nUaCbxt8RcUAv8N3uMpxE66HLrfUywp71Xd8WiAtyaESVvMHqc6qwpucL3",
  "key19": "38QA85Z2EATc6bGtFRLf4EwaSnfmQuBDctDF57fsK82QPGDJVxd4dj2YZjDJDkhFviM2okXos6YNknpYm2FJp8nQ",
  "key20": "dwP4YGaMBtDEPcYbR47dQRyfTWoyz4XwDeiHx816U5xidTdueU8c9xz1zze11mUNgoJZ9H6hzJ4QcG8hrpYqGaQ",
  "key21": "3WAMd6jnR7ksEEjyqneELh6Yj6dy9JkBga1EAo4LoDN4tEpuosDojVCb9rpibUkkppxLUZk9aLW466vLTYxU6H7T",
  "key22": "U2G2tfEYNyShxN9QsdLaJgtTg8FrFZCptXD2tNZU1eHcSHskMnWbk4HZXsZHQ4jT8mFAGNUUBKmusQHK7argHio",
  "key23": "1uFFYsriS9yU5cLiBkzTwX2gqycbDsKfdz4nUcAoYxTE4LMQVw7TsbhXuSnHRAo8X19BCnjdZYaAE9cG4cDBU6e",
  "key24": "3pPX1BkJmgkbGvhTjvaZc6ddrBEBfPpA4ZE2TCSLWbj9eoo1SXwkfE18G2MBH4ipUnyM9nZb5FUJMWo4ktTrp4L4",
  "key25": "3fEi5oBNMmvMBsoERxedsFKDYNXGzyzX6F9WBga6aYSFBba2vJ86ukEtdHCWmh52xy1TPfuTFyvECnKKvAideRsw",
  "key26": "3JtmF3JG8rZWEp9WFwVoiU1FkVbiUVpBCyyos8prTn8wFeBHDE3rXDw7Fc8MkQjVWhLLbaPMciivmkewRFUUQ8Sz",
  "key27": "4zhvpSr5wQekoTwEYJamEQQw2VaWkCM1LcAKNSrbF37NqGWBg6fe59zXN9YuJJrPFaEFtRMTUjxi6v3RnWCx513t",
  "key28": "3xbZL5M1ydDgcMkUYYce2nLFCSwnV6Fd9tcFA4mRcWvqJWUqLdke4FQC1WJfgPHkgfz6oNxp57hJ7fF5m5ZRa8A",
  "key29": "231hWoZhjin8k1td76dqrpd9DUFVEGiEHeEjcLSkew1zAhjMquHD35BFTe7Zf1tAZKTQSD3Tp6c2CYDz5ccGdexx"
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
