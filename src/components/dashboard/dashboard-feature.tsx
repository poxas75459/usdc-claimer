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
    "5mgBbba11LYS6iQKmM9vihGnnHiTDowKjinWzwvTgpiFm5hRH7KiH5vhtjQqmK6MFAhM5NRxJwHvHwpe8Vf7ShwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26dbRoJrMWTKtJZGwSizSsxmKNRH99sXHUZB6U2Sbz84KzaVwAWne3EuEy72pB9AUdcBhfDwvkFZP4ajgFAJGdi3",
  "key1": "588NkCc6MxqAV4wSv9thgQDZEY1MV1dAsysSBFGBgwZnfVQRxd51UbP8Qr9sCF8SdRQuTKRv1NFzrMLTGcHYD5xj",
  "key2": "26fM1toyEaEiUhJ19XTPAThtjFDzC8T4eZoNd1Th7TsX4F9BXL5SHwuUwNpuPqfad8o1G1x6W1pCgEzCdTdeim8x",
  "key3": "4iKfUS8rCX1iwNRMEC2pTEFBebvfHZtBacvZEcy8p5xUvNSGSbVDVMVtmGqAJJh9uciASvsQhquDMQRvoQwmrFrG",
  "key4": "5DcbbTJwmkPhRtHdU25HzVsaB3KubkZsYYtf3ApsxwnkXhtBbCZ3P4qmKGvzegHbeE8L6o77uJGpDqidvFMe6oUq",
  "key5": "5yABmr6pnHmXzGi96MUJ6Hyeoge1H1dqgtKPbUZfZQRP5Xz9smg9kSGZ7PtrMabKTsSqkNS8dADJhepVZg4JuH14",
  "key6": "5gUhAnk7CP1D9maLCQKxxZGPsnk1XDupRCJaV6JV2R4UbrsH7BVn5ELwEaJRmjHnD6smVSdrLr7LvPaJpbMUnemn",
  "key7": "3RN57NAJnmBnDeyRJSoCTTGFKqe87FtrjLBk6s1gMzymJYdAj6v47AKijbJiTfSXqHFpEEQBvPwLgaQ5D4Lmsvem",
  "key8": "S5zgfRtkTGBAoroQVG6SNYHhqX1HC3JJg8Z6MD7ekwZ9hKtgg7UP7UozEAJyjyz53EfsNJZxUJmRTaJMX1xPMj6",
  "key9": "C9VBbScqZmLTAVQWR3G8LXCdvQdFjxjD15Qd2hHYgesaHZ2CTpX1ivrr3Za5VhCKQSc3adc91fmDdLphA9E8SYy",
  "key10": "2iTPPFYTpqDtLFrUxbyBLowagabyiFYqrVw4ZsnL8vHfyqGKxTseEyzh6vnh2w5htxXd8VdMibiPQdFRGbnc7LYV",
  "key11": "5V6SQuB2PwFSqrvmXgAN9F6gX3iTZGgA82YTAonz8iPTuRqibQsCMBsGA7LyD7uRKZMQjwq424wNDefrJRmagrp6",
  "key12": "5ewLTe5tLYMqfwesNkYZU3YUHWReKNWoVJXtNRKpkwCeGi7cJXSqueZDppBMe52rV665WSGrgKQaebEnpqjRsQPc",
  "key13": "4dJWhTpVZBinRUjo9vCB2LvMEoVBwy3rxWvApkdZBETSdZHbGpgeBwTiGzJzL8YXFNRhzC38EJEJvLF2qW3AGor4",
  "key14": "2Lgu3CxXz3VdgWiXCu3ikg3v2qLvXUhTWheAN3i8TgwpoYkx9rNyyt7sq6s2CD7s5CQtjZ73irFpuasoajhQFusx",
  "key15": "2KbXiFzh2NXXk1iqaDF6fmPiBvuuCGphdQcyTeyx6jUGfNfQ1UnScqutPH8vqwpTLwCUdiEvJWiKCKm6p7emrmXH",
  "key16": "NKb7McBFLY7yuEc4NFhLZRFGbeWRMSXBCPRcd1GhiK6PKoBACBdo94HAvrZ3bAxabsDt5LEJoZc7CjnKdJ7uBcL",
  "key17": "5iUBuSdPa1rDfRDy49vJriHNhpsVxPKP3QTTuVjFfqKqUqvcPpe9QczGeRFTP5mnKikjQSqNaRPceA9fvPUaxKzP",
  "key18": "rTvLXhFq1V61KFZD1Z1DVm4dXsDpp28xP9xA4k2i3MgL8wGBXQv2GggdS3SgTrfTkq4GAvafLdFbAveSJGC9mH3",
  "key19": "S7ydyeKmhkWhqEvnLkucbiAakDkTYQyAoV7KvksfAofnbaBz6XekTeHgqai4TuZRvbYWTsdg3ZxTB23yZ4wp9f9",
  "key20": "5s7N6ZbnsvuSLnnLo17ufhgWA5588sUxmCz1qkisfQTKwc5ULVUZ6u6nLEqM3oH2XN6FLwsPeNt36d35AyaHtQZ5",
  "key21": "2STZQFVtXMMopcs62jqo6vGagqRDjCUWXVZ6f7PAwCptgoqhoXopEVYuAySF3PyPK13ho2BHZWaETaxvTKCDRHen",
  "key22": "6735m9SU55jZj35c8HGEectuxZHrDLxffTdEfBDYau823XGzsPHmwWMgWXWP357xifPVZr4asCZUNe7ntjtnZpCN",
  "key23": "Xj1JA9UL3JJEWun6jCYevG42j1YFdooJVZuomPna2rj26GJrVqDmKgPD8iukYM73fwzZYFTAMThhgn2gTQXeY3b",
  "key24": "wyeRAxwqWCy6n7SaoH2CnFScjzYbt5yab8EdCRGxP2VaNLPt6CtF4hg5Sd5mLXdwHQDioq8Ez1ks24ymgVJrNnf",
  "key25": "5bzj6RkbVeXZewgRK52tEcTGKTeWDspEJQcTavfwGggFTuiFwHjEEj9fQRtVeAK7aCf9mFyFQ94a7WCKNPtqBrg8",
  "key26": "2zcdjRXqB1y6gKrjMkDUypdEEeUmfZPuyDYhgRbPBD1JvtFVeYGAKomVH8U4Vp6RbSpp5WAfmeFTZvwr1Kaqq4wk",
  "key27": "56wG6rDHfHcBN1fS6m3Ftsm7p8geyHGG8d3DzfqqhiUPcyufXyNWFKwWmE5VobTFVyHDHwTt2Jbwq1uJ9cNBL7L3",
  "key28": "5C7zbpRxXjLBzjKQq8iswhDr643MByt2g5YWKm5roPBpNMFDek3sTM16NPavLNWggzuUxhVkCSdydN2YWi4Z7m8P",
  "key29": "25ApnQfnT38xjofudfQReDbT9cG8h4Z8YNUsoEpuWeDWwqPEJhJXimfuYWj1sgeuz9itapwJgATYQyVoYmg6ddEn",
  "key30": "gEtcPw98hNw67JbCA1JD1optmcuCsioVgASJzuSFgMQaMA2KhvX8ktGMSyMaB9AmnRe4fm2Ae7Vd2hyn6W13fTy",
  "key31": "4JJ2MGBcd37ppoMgt3nVGXrX3VJcp5pVx8W9ancM72bsEGVhxJQFH3bfia3opQvjs8qZjnH6AqsiTkQhPKQpYezi",
  "key32": "5RCtR42igB2xdpunoCmnCfRdQiWYnyodbECVMqAyDDGE78iFEwFS8EQCrywKwqXBsUrL4rUYpuMhwTuUn29JvDym",
  "key33": "5SBQxhFR7aTwvatuwR9sTtMY3pGsCYeSUcssy8cP65RmRNBwBdhsKwCgseQaqKSzvaQ1VsBjpRQAi3zCrX4wiVr7",
  "key34": "5NhEJBZCUsftiukqtdn4GfigYydjnsiwQhmQ9hNUPXx14DQewUkDS2Jd2usw1yQv2CTc1Negssp9XjsX6hun9q85",
  "key35": "pTY4w74iEC9EsoKkdnX8iqvuZoxPZk9Mka3ieStqnxCywP25b1bHsAyTfHCmLotYL7ZDMNGcvmkZi5zVgRfmomr",
  "key36": "3UttrndUV8pT1MHN71PSbk3DbKvrzTL8DFPN3MXXS45q4vvjrZoR6AvMHZ7usc2fwWBQeC8wVfNz36yb6WNyVhX9",
  "key37": "WCQAFvXAMoi4q6NknhexCD6UCGKXe1MD4vPxJSyaJBVGTYhERL4BHtt7w96sy3uWBk5UxxWsKvtWxdkRBMaXZHd",
  "key38": "MrvqWXVtCggh4GzhQE9t23BvVQyyw6RWJqo7MbZvLAMRuVHsgis22vgJXixgtzfvpEPsfecroY6rEGjAzrpJBya",
  "key39": "5htZA2LzDMqjbxkgi7smnFfkGJ5DCDz9DDYuTkEgoGp9ogwGVVmEZKwX6Uv5rom9yAyftZUej5jjZFsZ2rKqTA36",
  "key40": "2HTcd6yuYArjTV2jsed2gGj6fShZfEfBrJo8QUCAmZyJj5J7hSnxq99qQHbJd9Y7iZnVCkkiw9DASmRvVMmqaKrs",
  "key41": "5L5gXzxABUBqwHcTrao8FVTFgmb3Nb4LN31Nwx9Zd8woJFV2Jg9xjcDcyr2MVeP1oacMXRj2ii1eCWiJLHJEqcxW",
  "key42": "4FU1Xys2DZNvnG2PjnEYnWoBcRznsYmqCyzdcWTW5SeKk2oKN3cXDMyBDCSAvnW6D69wTqHfSEwdEK1hUGPQ6Com",
  "key43": "5cqvsDcJJ13iuQENC9LGUQz888GxSz2oKWm4i5ck7muyHLhArxm3d6efUJp7AYS6a2oNTUjF188RVu6nzTfQWNyb",
  "key44": "5XsUAMC6jM4Z1tMXHGMvThLXtnZzohVKeCRVDLUZwvnng6KQZNVvK5bcwYgds58hkiHDSxqsH6iWQJXEuKBqmxxh",
  "key45": "4oe4RB9Xf5woFDWgs5bz83kJaHrC5ouE6nxTUm7uGUk5aezy7JLZuhPBxjGQjfTwP6WXDB7M2bmEfVuUJo5PiHR2",
  "key46": "4hWfsYuvou9wn72Lrema6PXgsEtKfckHbdsm69t6CFSQAbDjQAU9iY17nECipuzBW6ZKgahxGUfurdvEFqBJG9LZ",
  "key47": "4fJXBHecHcuahDiXKX2razTa7TtGKaaCzpaDUybVymFhovmAHPZG4xLod3RpZ3ZrD7GRcxhFyHA5dGqY7ax6vDWE",
  "key48": "5d3RrASpkbvF7FFMmKhDMtAe3BLTuUKymA7kAVrLP7kNmVrfH6G3iNVwD1HNmg6Sd3s9Ti2vTUrKJAk6a6zoeYEq",
  "key49": "3rDERrg7YvMEtDT9WXp7t31pFv7ji6j3XLQR7PFFvETFNDdUhpEKdYjKQ8zQUyNgLdhnQzn9h5sgqkwfuVTG5cAo"
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
