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
    "4ALuH5WvBG1wqHkMEkJapCPSvLMo6GAtWrXdXcwHwodmSmbVWwWDHrV3PGwKA9CZqZVkVMn5Dwoo8RFuBHLNCZJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25QDvFuMTGVYxqeedxb7sJBLwCpMrJm2HpfFhqEoiFW7yaDSeiiiehKksQhTkTVjTPcQ1yyVNV5RXpBnCaNAM2Jp",
  "key1": "2NieqJMhKAwaZX12t2uGY8i2Shgg2ZP83jV2VaSjXTnNtWxT3XRUjJx1M1HgjSnqyZCARbxGRF1rm72RxtamhGQn",
  "key2": "5zeW5hhdH1jYKDB4v7zqP3eRMJ1fSqSBLUm9tYVBgTJK3xd5vF9aik9AjpSB9LKsfEyJ6r4gSdBKdcBvbU8u9BXz",
  "key3": "2FhEFq1UxvVGqgQpRZarX2zmkakdLdn71s46qNPpkQEywVbp8srEWyBFb26WtuUbC5sGQEakQFcxMfRZgEQqBDhW",
  "key4": "2vcgV4U9Bjy3kD3ZPaSJJzoSirJ4fF9UwqXhiXwoU5jATwrCPXcZn6uqYdF6Cwvj4qCmgpx7Q4bX3pEvu9DxcZ4N",
  "key5": "2p2NrjRMEHsu9mXbzJFj1VzMLopKduqLdYbrJmaw3SgxEUmaySpizKmhnQx6k8r99fdLQcs7UZ8wXss3Dd5b2wx3",
  "key6": "2hf2yhcadKv71aCVXfuRaeGbM3acodDzXfYoTfgXRgT74qBW4SoJpTkeHMwMnQBndQ6ETe5YiiJ87uaf2R4L4VYo",
  "key7": "4JCYqQQxNHGXzV2Em5EGioKgTff55UdoGmqU7sfznSZahqiV2bgxtS9kN7biVVY5jGxx1ewgFMZBrQwftFVuAENG",
  "key8": "5kn5JDqNiYEQcWGHNxSBAPNtHrGD7t2JEZsamCJhTNS4JdhuFVqTM7KV6hbyc9VFjadRPWSDLkLoLcGiqUhGjRPM",
  "key9": "4MnCCrJieAjH4DXa5d3Gq44kxMog6XWJeJdZzSXNBL6S4STgL9BNjZAxUz95kAYXGiwUC3ACaLy7coEudERuYAqY",
  "key10": "2xaXXtAdSdmhV2s7CmYp3Ef3FLWKcPM83wWw39zdnheuG9TEqVvewxEMu6umH3PLuFTorRYSUDrTH6cuuTLYRoZ9",
  "key11": "5TcU5tHttx4N1ftuAXYYPUbjmg1NtkuPbAwTyiGmPEXj8X2NAcbRQUi5pZH77qEBE3hyiWz1wd8ZYRXFQWNuW9GS",
  "key12": "3odibEuXSaFnUn6Da1kfaL6JnYSBpwe1A7F4vJ37G77yEKJkQLa2kUsAd4MzSFRDBFAiCCqv3fAD1UH58CTPB35V",
  "key13": "jAtqvNGzKqc6dfhDW8Trtwpq3k7J1jLDMkGi742CpsGuJieGV5sYFNPhvm2G8ueAYtyvnNCnFLY8s8ur4Sgz5Kp",
  "key14": "4KRtLusPUvQcQjVnBdxLA7FYeLRxdjQC9jeNusfU4shcSMjz3otEfxc94nPk2PcZPyoRXRC1JpgcwNfVCrNixY3J",
  "key15": "2JXPHVhbVhtREgqLSRHJm5RaE2sEEsaXBXTXxAdWmXHtQaWFRgm9FKcYtZ7HKb8V9tyCjm6yNaA6o3kZo4qYviJ7",
  "key16": "pfgytHJDqhw1zuWARf9cnpT4AuZBwu4MCqkwnz5anRMiJatnDx8RQzr3XZAxtufpnXf3B2g7QhpcenGsMsBtvtU",
  "key17": "5g5Rgmr9qid7zNMVwiSfD6QkQCNyJ7VWhFfCp3uYxovncXwHnPmPXPFCHPYDwbi1ui16c3PvhFiP3gbyUYPZg33G",
  "key18": "3gicWr4RmHs41TMFtJzzyFWLkjCxSLHETwLy41PAsCVsyJn9tbPnKZW94kGgwduxfjNf1bWMiUVHzZhQ2WmD1qx3",
  "key19": "uwj3yeU3KwqGFK5Wc5akHjDXS9z1Fc6PBCYWuZoqdRDCjtj5cVoxFTFjCdQLVW6TnZmtiezKVybNZRUUoSRBm3S",
  "key20": "4HU2zsZyRW6i45gq8Z4LkXfupvks6vhKrjsTvcHERukmii2hvCyt1B1qSjWT6btGUemx7EH9kS8mxD2WHEFGbMT2",
  "key21": "6283Hz2WPiFF2ob14fg9iKuTLNU2XinhHbHEfgZAmfZYGJfKzxfeodmZ5LN95fTsa6ER3zyFWxkovGmqZqcHUMFa",
  "key22": "4y2Eh69mc1mRBDJn58EmE5k4R3TFMssYp9sAprQRyjMLpriKD7iH6ECx9rapxD6hu48DkjS5ZtS96KBqhMoeJT3p",
  "key23": "32RSGjZRnY9seNd27jYVVagEGaDtVFUQxcVKaeDfvf8L8bd7hjSscx1GThrRUbbhV1PG3TVNH1U3RtQUwq6hq8FN",
  "key24": "hP97iswMvDY7aVyZBsB3qBTfUeHEYwHcpYbcoF2CxF9mo2Lu6gcrgSwbUrwmqkXg9ECEdm2FNWMNkMxDWWdeAKt",
  "key25": "movEzB26TkfMKLyfQrnWQ6aZfP9YPE8Sd3JVGUSJx43fHKSFU3rUd4e3sXQrk1PuGn6FqY7beRMSNALJt5dYbwc",
  "key26": "7uiHW8VkXtJjWSniP4Bj4pXeGsuoHHb7WPKXBvnnikWS6F3Vw8nSATvjnoLYbQFrEmco2GjkfrFR1sqt89eV2E5",
  "key27": "5gEKgFf1bkCCQBdiyEg842PDWHeWwnRYnCMw6YS6zMj2PxS4xfD6tCbE3iVPBZjMviKNDTwgJDMEsEv6BREEWzyY",
  "key28": "PwP1dHc359dDDVDnyvS9gwj3FnmKwxWphAUovvKcuoXwurESsuGcwn8UomQhTWgUWmxeBsR6yajHoJxjrjJFMU2",
  "key29": "5NCKE6zrsbzWNmE6mRUkiWkaHtRbeTskTD9z2UBfBbDVABh1gffxHLUdUjC82byzwmhkW31NKkgHnkTwp5D4JfyJ",
  "key30": "MAXuREc3arpUceCEPSyqzLYzuKxayXcsB8didg1wESeENmJffvMZgAHFBwo8WzX8F2StNHKJan3g4fJwjyN9Kon",
  "key31": "23SfxP6GUjNgdrA2iWREYDXXDpYw1EPDcTTpXgxWGCF1k9DpRMRVby6zkQVkuoH4ziR3cbBXgaP4Afx8FjHxoN39",
  "key32": "3gtL8up38K8GK5nTUS2EtnJMaJ11cHTkxre7mFMvTTtgM7Pvda5d2vio4G5z5JQhX6SUEGGjdP9i2bTSWhsifrro",
  "key33": "3qYtK6h1wZb9cXHeoNsEMwiRFG2dpdE9Wy8de43ogN4wuCajjUrvEgMzqRK9Kz2ynVRqePWb9rWgBn9J2ckr5r1V",
  "key34": "5t4Hz67BnMtRrSWeeWfx6PATAKZUXb4rUibhi6gySV7A6oc2dsaAU5jmg9f6vpq5s45VyT9v2ib5HnSq4XKeQdBa",
  "key35": "3ooKwAjECYLqQfmJFHDPupLf89kEyEZTMZCa7aWxMnhubhVFyqUsL3qEFwPhXeRUBTKD56LbkiAkqHAFW8GafohP",
  "key36": "5To9wRJVSo7KJP4ZxbpWTExm4Waoyi4GZaEsqMCWKGA7TTzYaZcYS3qyiMWmEs1VF3Xw4ZzCav77DPng47NcZ5LX",
  "key37": "4n2S8foU68UikmzcSi6BvFpaeZPSKDJM1uKkeXua88hWK4dStfBw8w1dBZnUeZztYwM96adKaKGgyHr2CgJJ2BWY",
  "key38": "2wm3Jiv9HR1J531N56gBV3PmUpKFCR7fLiLG8fUCgP3Rq3oWUJHbCnaWfW6aadvLbSTvbCaQnV2Q1TcH5eRpEEt6",
  "key39": "2Cg9PERSEkmWDFcmzMqqkoapC4wpPv94MAkAgmcsZpYe21hB5EZgRTSwuDGMoqpTzYCgYEVR1BFCTBQqTbmeuKy4"
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
