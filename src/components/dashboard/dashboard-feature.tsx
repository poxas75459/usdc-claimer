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
    "5cMep8zZGDjGk3L9VHfPq2qFgcZeWNzg55fJffEeAbVF5KYWtCx4686N1qCjt5HSP57JjF9ZidtGVvwqmt4g5Zyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57qD6jRQuA6eGETo9pmvExYpwpDw97SiYd4kYcu8g6BPcZVyRPPamArg4eJer99FMrPWM1TtqMURP23kDNbApJgt",
  "key1": "3dEjJVJ9SzTqRtgswFFdrGEZQakixG9vHFKSrE4HN9FD1DQvxix6d8QvEundfKoMoaxXqRZaDN7wpU8rd78n8Xfy",
  "key2": "4Tw5azRWviuW9fX8p8jSgzDNSFPSuj82vUGsRPcC1X6skt8HtCmEGArG4THoxMR7CUBnGXbU5cYgvBbvkmQt51gd",
  "key3": "2aMr5c89gM3W9W6AKiP9QNVrz5yeB2U8nrDwG2rkkDztiuon1pzGiZKSr12JZH6G7CuZqMi2QB7GKUhvphKhBkX6",
  "key4": "4eRck6Gk22Gmi9jcgEv4KJTBxRiCJdUfHC8YLLbJcfYXvkcmGqYCtyX7pTyEcsxukqdgv9FjjsrqiCE4miQZzbit",
  "key5": "4rp5hS9wTYh6H65MVxb6HKvMusKF8KDYWSXhUbEXZwdyJB6cdjjzgQc97ciBkX2fuQs6yMxoC13H5oW4oyLnGqNE",
  "key6": "2r5uZMiYRG3u8fLcUmFmWHkox722g6ovSjy2er7HST3XL7kDNk2vvwVSjtLveghUZgERUMZGib7ogz9JZZbrrQsS",
  "key7": "4Lbzghu1sNLtaTj3x51pVdiCZRFRL7sGVHykmzAyoNQdvUTxVq1GJqKMkZd6PptphKNuEKTVaVYDB9F9q5cKjTuy",
  "key8": "3hQf7NKjZpkaz3CJ9pHJ5BcgTzPSSEdDxLtstBSjK1LeVxgwqZGVDHMvbj1zCiA8jxEZ1yBd99CaPrU9NDxma4QJ",
  "key9": "5NLrLftkME4EE6WZwXtwYqscpwmu1S5EawFJREYxKgEzKP33LW6qwrHq6d7JejV5zGc8gpo4qzxavr8zRMCWWNC5",
  "key10": "Rcih78PpA7EpPDYVVUx85rNLa9DnBwxweTCXhoFbrQYupEXH6bAv3wNDbHqvETYGUdG7Dx5DXR7kL6MF4DGpaEM",
  "key11": "5SJPxDtADgLAyt56vzYBXfKts5a2wSvCG8kaiHYDt6S294pGTkXyJQ9YzGMzba3okCjRZqTW4iamNW9poTJrmtS6",
  "key12": "4kdzGxxbAENGbRfvVCFUa8mfhhLtAYPKmCHPYNmGvrohjvSe2oa9MpKhra6kiHzUq5k1PzRoqvkR8J1kfCTDnH5N",
  "key13": "35EnmAbNnwVUKRfLWL2b2U4Uj7yvpAQBzGXpKXDyHHhfq1TYAY2B8Hau4Y2s656vi28WoE6RWkFkHX6mUhs6Fg2A",
  "key14": "2dEJR42C8MXWZTFHbuUUBtFbHBhLJ9CucZDHne6d7pe4NKfFMvhgaqdHg2rJstVwZQHcgoTVwx35UzGUJsQ41Y9B",
  "key15": "5qeK6AWjtG8fadhmgZ1dSgLctRYPDmZ31hSJPWMiUdbGAHwmG69GUScVsotq17VUqt8jMZCiNcXYtwDx19H6w9Ds",
  "key16": "SE72hrPj333iofpFPTMjk8TdNNqoPLErFjLbGHKhLxk5xf5J74FvgCR8d3FnTnYhkhH8XiKqK97JHaM6psK4emE",
  "key17": "5WUsvXXPdK3Bt7jgo5UZwkMSajzyjQimzwUFLtgv1EV54Z5PVEwCZqV5q3YYXXGtALzHHURbXN25khvKRk94DLFD",
  "key18": "4Ur9W7yWTnm61hq7E2LSbvgMKqgohqBC7t1j26qsFtoGUggrAonjtemDGURhMbkAeubf9wXoxWVVFSGNpz6umemJ",
  "key19": "3XeBTjuDKV82DWGZyozzdNvc3PAPoHY99YPPBAoUauC4Qi2iFtpf43uETJLqwcFQLqwnVbACrvYYt2AnUZ9cpb6j",
  "key20": "5xz7rmuhrhecDjxAxNumFmQ4sWmQFXdvFCu4Hx8ACYEmGYBMbGMwjesmuVbQHLi3eJFidrnw4kYjRfrJuaJMagNN",
  "key21": "5T9UZKgSV8xx2UHDNR7UzDwjE9KCAUrCBwXCZbzAr23PVrVdgbw2Y3aMfW88iycH19TD9nQwndm3WULYW6qUSg6B",
  "key22": "3YncyqKxyBAiU9ywsLZyoM2x85UUCbk6vQqtQSH3oPyWfoAsqcqZk8V5EpEBT7CtrwDBeNsq43L7i8SzMChaSiun",
  "key23": "5AZLYtUsuv1AgJd1KDkNLWgsvqUjcyXGBgLc5b2K1ZbQyvGX77D1KJN8MfvWrB6NT6HNv4qcmwDtbSNE8b6wCCML",
  "key24": "Kys6CNg2PhNpDmY84dVpRgsPRUdhSSKVZ4ahgMwrXRFmxu9g22TGptMyJ4mLqvN3EYfboim2458UaTQTcNvzAxA",
  "key25": "5Au3RxFSwJm8qZTek2CkS9ytygvykhuYmea5Dzc6UiYEjgoYH5BFu7vBZGMEEw6REAxMuBH9U5GEAeQj1SnphW5b",
  "key26": "3G27piUmBAyo3ikZFHVbzur1Xb73tMPJPGy94h3Vs2mLZwkoaRoE4nCk7FDrm4tVsVj2qvtSGFFdUjoznEXt726j",
  "key27": "NxMaYUVsm4ZH6qmntUQdp6UyYXEpgbohtXHBXZJ3GAFqonbdUS7RVCjiwgx9FmPzRK5W166EcPaf1t2bSQ6yub2",
  "key28": "qbQFXgepPH6FMKvHN2m2p6nCJ4HpuxLHGm99zsnZ2PY26YZwcDoCGWiqb4MFzyLoy8oLGk6XHnfCyhxRMu5nWKN",
  "key29": "5fns8E1Xwb5VkS7489h9GQvRfafzoAwiXPF83w8B4VJ5bP7b5QhjgXMVrKzaBHgUuRknCjaS7vRPNA2aTxQacCaW",
  "key30": "3wJc1reHSAM3jF2QszLkYbz8qvkfocXiTuKTDjYALqLtiVWN34eKrhcY4AqWXBrHQ7fXhZauqSwrVDuh9NQ437V",
  "key31": "5fgvNSgngfihKR9jt2QMhBdfTdnu8HsMqGRGxwfdumpisJKFdxNDRJjLv2L3Ng4mxWKobxWWoZyrvducZpuzaCqE",
  "key32": "tVB68QjWZXdBxPcyP6S5gLUDqw5RV17yUuJsNowi2CZ6TprnxvwsUEVa2DPJnMV85P3c3EjAn1ESBLRTe3T4SU9",
  "key33": "565hjJfe7dHRkSG16guM1uL3CBE9GYh3bWri4mSfXyCJU34v6BMehtYWTw5jCMVCsa4NY5d8KUde7P3cCPZpQeQd",
  "key34": "FTE7aqg7e1EMCjfEMgPp8ddGFWMh9w7zUHir5i8iZS15xqZB79ZJieK1Df3wjV2isZntGUhkb7m8Hdt7zRWzCfk",
  "key35": "VVLr1o6bwpRnjVcTmyQf8y9UTS9QFQRwn8RyNKQn2fhT3JXLKgDSUBGsisVBsPTnhSe6iYF6njRB3MUp6jzAU8H",
  "key36": "3XYNr17GXcA5qAe8aZiQfmkqLPGM66r8ekMiuHWPUyJ3YVmcrmtecuAERXnjZ2YE9C6qMg3iTBz25pBLTexCkFHD",
  "key37": "54npBuA3yJKbHoXqVRq5djfvJEXZ5WCYnJR43pZmUi1qT6pdcCYyr4qMdp5H3RqU2LCogqi5RwHqX28Zxtkuwzu3",
  "key38": "42x5nE1Dv4mEhqXj6jfJUngNTM48BiXnQqss2oNYsyyqVdDu4rwdgwkh9ZXLRfVh19giKJHz21Bc2W6ZFNTUjVzf",
  "key39": "3vh7Qozm6xeqafZb4VFb8r2diumCuA8EvZjCEZvKGTbAUJofboqW6ZxWneEstPEtJt6eKr5Uyyz1wtQtfnsfx3tc",
  "key40": "5Bfo6vZjRY4Wj99iCuy2zx4RUH33aaU2iVpHkC7hdXuMt6gcT6gvZ2eiYED4bQWgNGpiNMCWA24yZZ7zen2PFLbf",
  "key41": "2iXn88Z2R5o53niygu1C7YW8m8nsvM6TzmhznZCspeDexrqw7agehx2ndErc6sNnDPzfULCxdSKHdkLVB4t6UyXu",
  "key42": "paekWomePBWa7Tfy45sC6kEXM3YK9oqQ3adkxbLzVZTPQWQvUAuMiqBzayYKfG8ZXgztQtGRmyuj7azEv88tyDU",
  "key43": "2UQcES4eZMpB4fDdZReCpRexQshM7TbFJo68tBm5HjXRNJvbpb6gEtGJuYRgKKNGWqhgbkar2hF5XHCiRFSrfNVC",
  "key44": "yHVe4RqgBTy6u9XXdFh73W4CGqescoKxz8jdwHJB8SJh2WhkZ5agSTooiP8jyMvnZsZKeAVATTLnkSy8oCw9q2y",
  "key45": "3XuPqHqQ2oHRefFZ3JbejgztG9NFagCtRLThR2PyawEYZTLCUzcPA58xsXasiyE8VngBGJDsTUPBadXiQMrjbyZk"
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
