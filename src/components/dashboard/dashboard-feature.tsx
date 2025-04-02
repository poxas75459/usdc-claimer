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
    "nm9cfoZEEHYZdn4HVRoENGwnLxL6UEVXCPpbcmMyz5GDkHrQqUEK28H5bYh6E32mPmRQ2vN8MMzFS1TX7RFGUVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XqEvUBgovLmErHCJQr2TkcdXizpBaeExaB1as8p3Gm4GnhsqVLr5yGro1TmADLyuXFgzH4kFn4mqv5QE3PUYRe",
  "key1": "5qaxJieBmq3CJX2F2zbSMcLL6gDw57ewBJd6wTzHP2TtkHsGAsNL8Ux4Hnz3RaMPMggZDQMN8dKkM48mtXexDCUB",
  "key2": "4BrMQ8y7Kf6u41w8GpxM1Z2ifHX6BaHxHpkQiDc32wLuA2UnyayLULQ5yf6pQ6BMTjFKw4KR57nyefFn3HveWGSx",
  "key3": "3aiKZkuwy9AyBM52sRTLBeq1zvbgBwSkUowKb2XG2X89cRWf1cHqsAsHPzoRayciNsFCSx3RtFeSj8rTo4wXQRb7",
  "key4": "3UKGJhkCCuCtfzD76NAV7GpAN48K23UDobcT3g3RYumBbcbmZHiw7GmDeNMRPqtsyuD1oPLTz2XzCCTfLinFynhW",
  "key5": "4jfzHfQKBz8ww8bt6jQNQoNw6u7SEcSf68W8JChpYpP6dG2v4gVUhzuM7tnJi2q7Rpz9mSofJnqiCShBuY6cQxTk",
  "key6": "5JgVBxq1JvAzbDZT1hgDsmHHLmpe5hJTcwa7tLh5NTkg1r1GUB2Y2xLvrJsLTZS1zF71WqzDh11Rdsno3ZPN741U",
  "key7": "23RU2StGSdpzirwUcHLHGMQXjpVARUzTAtiYJ8ruu9mCksXW72PSwXCn3ucvnEgebjrMPgfLvJvs5XhDhuPDwF7A",
  "key8": "25MUjmWWJcG2ECjBLgxpsbYicFVaBieDamDif4ZFsZqE11mGfCoEaVE7W5XcqzgQeDpk5UwVbYvW8RvmwimDn5hX",
  "key9": "1NqUrPmE3xuGyVrudeJ2pxAsDhiFJxmiy4966y5H2jdems6A6haSGDAzRiKobTZcCcHdHun2rBZNiXTiZK61CgL",
  "key10": "4xJVxzKEWoEYVmfSj9FYVvoVtdLBevjforCVE4Lk3kRQAnqKvpkFVgXy8XxBbRNCfzzv131PbkFuNfwSz5QnjN4K",
  "key11": "4eNq558KY3sZkSGw6gDFkbxR51D6s5e9jroW4kC57QmdQLXczrrewaCFHCnVojymAHTiYh7Fh54V5TSzERnoG9Yj",
  "key12": "57RhgHZcmNYkDKKpTmN2NA1A6F6aLQsPyduU86FEBxG3gd8h2D9RPHTmHNEF9orNkCBzy5UGeQk8bhvpuMrWUe3N",
  "key13": "RPChbwLiGiB4UAGfUN9zp57kiFmvvtSaQfo9k6A5tMHfe3EoKBqDEtvx2mdL1YVrhcmTjUjbK6Wkx6UqUE1auS6",
  "key14": "LQWcyNB5CTDQQDFL8BQoQYir6ZXGPxg7qeTEL68NYgDZTzoBhAg4HrFLfCapRRaPzYsRSGG8VRWgTJZ5cFH5vS1",
  "key15": "2p755p3DDkfoZXWqwBjJPHg4PjVrXC9P3vJdPKi47k38vnYjmMBUkUpRsfKx1EdtoUwQXuK1vbDQwnKhzRv8hE86",
  "key16": "53hps8wJNrATAk2Pdv1VrEF6XcEex731u88a3yrNRmkyXdevPoNPKJXfATra7EFSHQE1nTgMorqRKGrKJ66NBxT5",
  "key17": "4EZxGfdSZ2RSEh4rmJRoZbaMm2DDFUrXXVd5HesAbFgtvYz3hwgmBQK5ubcQReEkprNnTNXRxmobnqybg5u8Feg7",
  "key18": "3EV2NQZATX1QNPZMDUyZy9sNtHDNMwU9GTRR8NnnotgrZcjmnKiyCrBXZAVgGMZcmcxEjNC6c7rWmfaUy5Po4UdT",
  "key19": "2MejQoUPP8qXxKxkP9chTzoc1L3yrpM8h2DdR8KHhw1YHfWot6XYoMYbytaE8NEfA1bqqQiri3V57K5CZ4KyMBA3",
  "key20": "3mVUrFaDE6mANYF9z74JyWErUXCSbasA2EjoQBHSrceHq8WREGzDGJoxL1E2oBNx9TCicfQ9bn2RLMu3z6hWYoNT",
  "key21": "DbRjhqNyX6iSw3CV2yq9Y1F6vgGTnFR5LDToECDQo4GcDGWfPni18e15GdrGZ1zrUkSAZZkdWpGDkZEJLbo2FzM",
  "key22": "61EuETLgx9yymGKAj5gkVPs9gCF7y1JoMGnJoQ2k6JjymMYVHqQB4ZU7PaoKwXVEGQdDUdbfiRtYUpsjbq1QKz2R",
  "key23": "4upH1LhiGe9y6oPyTSQ2hYEDsDSK1Sxe1STvUw1oQshVceBs4BfJ643dcsgEVcj6FE7snmD4YCxcNg5bPaXkbxV3",
  "key24": "5M3tdBpCnwa3s32G4XCdnVikB6VhbXKnddQ3KW39Yqeo19dfaWvegeKzNxjTfVLV6iuQZvyKDWczEUAYHFB8cr4G",
  "key25": "4C1rcuQaSfeF1MPk4MDr5PZ4xrJxA1dWQNBABxYsKKwF1buhhu2YrX5zLHupJwxoVNet2UqiHNP6rgHTmGC5e3WX",
  "key26": "235yo7AsyNozUhox2puBQmZHzVRYUuH5fc4hZPsMBru7mnAdKJcaecas2Jsgm8tGTRmWdL8hnPULWzRRBJPQ5CMk",
  "key27": "3jAog1MpFCewB9x74kTmE8wrcTUGJJTCfR4HB3EfbzwsHSnB3txmpZuXLKKgzijZdJfMEpmztzdhizLP1bvAZCQD",
  "key28": "5RHtHPoJF3RMo92BfLKRFpERaykT1MuF5m1o3sdjyH19nfaamZPfze8LarLTadjyNzaRQAuCufnehT7bzPqSf1KR",
  "key29": "2VVQuWwDxpmqHasvqq3CffPHVyRyCmwHMfWXnGrWq6zUhAjJEPrb1Vk4svGukQvdY7KP7VepjDtDBppGezNkZZfv",
  "key30": "2FYb3SM3FSd8vQTa7jtp2YT2v16jZF5N4xyZXRLS9XyVCE1Mz7xYeBtqAkvwjVamKBTsmjGfRZQttsnAVngQMB5C",
  "key31": "thJoppRhyP7wTtMFU52opAKPzTYPLXU4gaMRvkA4Pk92sBm6vvG5qxbkEXv77DtNAqhkea9WHioHB5LTUVEAarK",
  "key32": "2wiZqnja3DBafxGWC3cWfxXQKHvkpMph5V4BdsCR2myiqxCArr4V6QoGVaMVJAsg2Eu6nx7UH25hJ3KzmvnV9TTQ",
  "key33": "4Ag82ANuzsnMASnbxeTx2bjUMhHjdskScEwrto6NnNsz4duPaeMDEmpAeMroe2TofjG24GHK6gcoBAEoeb3EJPP1",
  "key34": "i1SasUbfSDKvz5W9NA6HnNwyo8pFYSz72ztHAkQn2cxKLXQ9DH5HxbT5eVMgPuRRQF2rdAd6AysEMyMd2DZBjJK",
  "key35": "5PEMo7GFur2uXGK796mdT7YTm5w1HvwALZ8xzHCVFgQwZktKiZrokDh71uM77vK9PWPsYi3G3Yn5iKCSTSh4fP5Y",
  "key36": "5hFpf1bvv8snMRPGj33LqNnXFw4uZcEbjD9FuDtTbgS3YdAdFZt6ogeDZJqwPHKKjoLU6GFvjed5mLWLa4r5gdXb",
  "key37": "579H4dH11z4D3M5DCdvwG9pwiC4V3oay9ExtZJPsAFKfmEKtcRxFaWbDqsFe8mzcugrdLHx2dEsPBvefKKB67Vm1",
  "key38": "3UaRx5PXJtLatRZbaCWm7w2MKGyAv5CwUAUPZXc4Kp1NeWta9apioZ1VBZ4944fMakbzLZYdyErQiWgjEsuZoJnA",
  "key39": "2v3uWaWsty2mp2azCNkJh6aR45SnhKvBp49v3LNEggPCVnJaqHLF51kziBse3imbcUb3A38Yes7tWe3cvZRo4DRe",
  "key40": "4HXZZQALE83VnGL4zn3PmoQ2H6FahmCx2ei59f63893DEdEJpjcqRDkXnTENR8rn4hi8m1siz14vgbC3Yjfnwzk8",
  "key41": "4hLy8n9Rs4HJ277Qb1ZdAZbHmc4dviVSj3nG3F4RHGAL8MYW3aFV7CK6BtQuaLvXFaH1GYrLvr4utTA22kWiAffC",
  "key42": "2E4gwpMgTW6cpgNpNvCgN5SK94WpfuAVaE7dQLQhwMrThUKoUSFZKBd4ppCjCrNDiaruJWvfWSwJADitgi1EPaoL",
  "key43": "jPKe6M5D1bXcTqjyCjHxXEg2rw28uHqaUmDWxg5XDGLikiBNGhVQv6nU14TSB9YGM3Wvobgp6RJjWLDWEwQnt29",
  "key44": "4919sCKE9X3dezcm6vZ9JKToK4cRHyFqBBXeLXk6XQ1EU7VwMihXCB3eX4ou3gnHc9JAbEo96Uwei9qBHm16D42p",
  "key45": "3mbvRkiT5QHmrZQhMe86pm1yPVPWCegfKs4RvPxscDuPsFqhdKqa3pEDpd5hu7yWatwwTb8GXtC3Lonr3QWJBXjq",
  "key46": "2BXbcL7ySWBR9q7Ga2Jxidoq4U9P8Uppzqy5shBadGmJTaVMZgDCu987hhi6ULKbY15uRqraGiWGCseiZ2rGQcEZ",
  "key47": "5xBAtgkDYryRTjTvkbZkYfQUP1DdCFZhvW1d4uE86RBEmbM1VkfrLegYgs6C1bjmBiCzm7SvkMejzKdZaY6PpuR9"
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
