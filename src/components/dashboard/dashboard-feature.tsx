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
    "2pyH4jgUnT3tbKWKnquMNG4bNr446Gitf5XgSSi9L4eVnP3aYxGqBZK7xvWqNHmQVC2RKK9nGuYUcEBj5BDa9Lfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wg5p2wPTQYy8SBFKobszPapMK1Rgeg7YWvydaSphzJg9eZUtWhzdWsvH5bbapL9a725RowP8sJxh6uLpZVkST4h",
  "key1": "33gfucXxgZzVcPHZ6sUKwP96Z5gdeE4YQm3aLWBJxxsuG8Uc3fTDqCrnDd3TKAhND7sptKaggHvw9oLFgghkBEj8",
  "key2": "3N5FCMoKGMdxzkfNTLJ4KcrZARAgP2jgLsceDCCSj8aJkyRxgCkTmCQgxvc7MA6XcmChDw2beXiGwsmXobzrm7W4",
  "key3": "4GWYCNod1ff6uoZiPTK7G9p6BMtuwHqTzQwky6yHUCnUJcu2nM5yTAoLg7Rgm35c6NDDX8wbw3zYKZ5wpw9GbjxL",
  "key4": "5oPgU24n36gxaHrCWNTtBffRHrbXPHTSKQx1Y1AAJ62j8JmpXnkTbVGq6wADRZABCga8k4HH13aNBXcznRsopQ1U",
  "key5": "67PnmWRnMHbknLsGtn1ADrrXRAar9FyZxekMtEimenzgEub48JRVqxPNDpywX9wiaGKhedbTbA9Dp59xDhJrD2XA",
  "key6": "35t6egaYVTivQZtW4V8KfodCBLaCkMHxUHDzS1t38A2QqJgAyHx7CQvcrr1qMBgjRGthVMNMHCukc5m7fLfvsmiy",
  "key7": "2vSvPZaLPRsS1uLiYBZvJiZ1cxdLoVzRsqgfW9krUMyghsfjHrDyvqdkh6FYXHYAWjpG8j1so9qdSSfYphiNw5rN",
  "key8": "3BtBRSbzqc38VRCKLoUh4c6m6pDU6K2nEY42LYU7oz2gai41A8DBBnFEqduKVnqcAcMF1RTTCo7CKJLF5EF8j9ud",
  "key9": "5ur1X3GPTGbhjkL3CwqYTedkaSUi9TWyzGiVxnFTbNwo9xACHvV89rr2hTbNBGVwYLJZfPtfrrXHaD5iC1QeQSgJ",
  "key10": "2edQPZPV6V3vWdX4bVZpSyjEvKvEPRZAcd8ggriF7F6hyCQHyvY49ETdnLu9cieivnmBfEiYnE1Y1XgNVeQi6234",
  "key11": "3BDd7jyu9qFnVPZRdLNfrmWXbfJ4qn6wjNgaGe1pjAUVmDrGdNoJgDTZ4egwPpXXTps1FHG4ztkkNYBqDGJn3T73",
  "key12": "2zJ2Z76qfwsFEuH7DJLbxMkPqpsb27UiPvFBGcE3ztpjnS4axkPiWtQuLfJwF3H2yR4GnSEVBrGt92F8XMYJ6t9U",
  "key13": "5A2teU56jMVPAPCfdzYahECqmapeW4aK34kExvuBLCkp7yBYWjmtACGc6MwBcgtnjK36icbYRaydCG9ELiNN94Ch",
  "key14": "45ZRocLXHXYKszqYmJBkd175rWn2heq2ViMX235nA6j1C8AMZzbUrGLVN14hibWMfVRZmnKeHVRjqGbLya9bSSNR",
  "key15": "ZqctSRcXcV7uoTYiNzAz5PJgSRnF4EUs13faiGBxUmbxUk375UFr7Q4eyxLFM3V1YLSHKK9cyK1bajNHv2C5zt4",
  "key16": "2Ld5uYfACn4bHknBn9VdoYSz9Q27E7vgJ9xi2tkjHxF5aK9GNt2NmD3FNPQ6y1C9SF8TdvjN3KAdsYiRXutA8b7Q",
  "key17": "4Xff1uq2yPiBLcH8WYtR8hYEyo69HuPHajeiWd41y7RMpT3Fr3qMdCeDEiScaDmJXmxvEsAAEBkfxXXuWibTMjaJ",
  "key18": "3SZYcvvBzicZ9L3mfTpdphejsbG8DQ9Hchzw6zcS8W1HmGYpwb2ZVtwwd3A8zZLmmShCt2wEGXHD5VLhoCs2pi1N",
  "key19": "4AnUwBSWptQro1ZpChtnbookitKA8cXmCQV7CnHBGS5DWkpaUMXkzeWh7knkF6tCDeQwgi3RCRHLbCWqrGZ3GW6e",
  "key20": "2ShSwmXwSQS9URgjnqSn4UnXNfnTFo5s64dTRdgrBhrBBNtpN78KXCHFyjc1tGjMx75vipJP4p6CZFXFJQWLmUgU",
  "key21": "56ZbD8N7rUbBDX99KAGs2qhSntfDN8TJgpyUseuLi8rLbxbhciYQV7BkyLmXx9QuWTv6JCGPazfoUm9v1VQ73um3",
  "key22": "2FM8Vo9ZUKde7C7SGPy8DsixuttDs2ZczV1JbYSG331MaRNtYwWrqrUum35ouz6T4SQBzF4MMZ24XJC9iqCd2SEX",
  "key23": "4c9Yg56fBew6LUBA12JZRdPLZCULcvKc4kJ3dtyRiP8xMexe9A1cuvgH145RiJrhtAcpgefwfdz2r7zG9bnMtjHG",
  "key24": "4trteLiypxMwx4WrGmjxKyj8Qu9n4nUZYFiKVeGUt2r994GHBXzrgJUFv16WkYoAN8byT9QwZiEK5qi1GfjgPeue",
  "key25": "2yzko4vfvdcEz8RkZXbhNTgNjAwb1wYnKgGawav5m9wPo5pLuA2RSCwdR7HtQ6jrArMvUJD6yrKyGvkvcJqP8s6V",
  "key26": "HUxYRwXhxZK6L9LQ8AsET2NMJbt7LaHCDVBnhH7nrno1pv6PY6EQ6o2J46edS6EssB3AAa4tPVitfwKsZa7QwAN",
  "key27": "2bPYYZHuZkYHh8PkRa12hBid9FBLzVBSz7W6XDSEaYyxWyyxNnjwmhjZJRyeyajPdAcLriTvPMjbkkQgzh7UMC4t",
  "key28": "5APWWeWdziHviyEU696o2NwLB1T75SCVEi3wZYvbZWbz7b4xD5T5PfDy3td7ok6suGqm7NxLxGFNmFkBzoJDbPtH",
  "key29": "2NApwGR862t1d4UKXprp6VCMc3ABmiWy7bHDGFUDB4ryrSpXB6WayWvbobygR2rgYGgmguiG2yEPjQmnMwmgPxKK",
  "key30": "512PqtkF8YoduPhck2y4CFTJPeshce9EtVjhi99PkF5ywbs5ehpG71WLpg63iuCajSAevwsafmKBTQsRp9BcrMsQ",
  "key31": "4KetdnWoNvz3iiv6ZXfUNTJd6tySf7ga4x1J3VakjsKerWhGVJaKPB7GLFLgVaA627TZnJUhS2mGhPHtRcR81XfU",
  "key32": "tXzbeij539pV58PH3VyJ5bUSqfEMHvENJQnzEsojiVdhPUkjpk1veF4k9qkGiiqz82AzvmLxP4PUkV52JgYTCBx",
  "key33": "55LE7o2cGNcBXVjseK6uPCs4eHXbvtZgHCYcHRUqqLhuR1juJk71q1x5NecPYugcobZcBAVca21NTwWhistyePnM",
  "key34": "4aZShBV3JBS4RiWwsEaTMDRHHzieQ9zLYJpYoS46fZnYG6pmSSFTyGh65rGJzTSxowy9H1pSdoP2MHjnH4cvKdrk",
  "key35": "qTn2NgzdSrkhYvfnBdhnZXSZ8Tc77mdmtRWYx4PP5Mx9ubP2qkk87BcpDCsB3en9mGuGfWRyzCNFQxMvAq4s9eA",
  "key36": "4h76R4edGAfUEkwWV2Vniy6ASsnCvUwkosMY3BpKdrKzdr8m29GWvbCHHY53HCn2nvDFFPbuGY81wdLRvGfW6vR6",
  "key37": "5DYdjomQEKteABARSV9bEXqm7m6NZgpUE86tHzjuhoyXK6SRuWXyrepTQgvdXCPQBpMtZeL5xUJBcijvG4TrNRQ4",
  "key38": "2rEaftA6tKozdEqTUhbkGJN9N6XMkUgqLLRmeZn56mGxcCrAWymghPGeF7LGXUS87WXFBVKZUwyuaTApaAf1HaNf",
  "key39": "ofWQGtTvXnaEkThALUxrr6wqYU6aRCVSuSfQkTNUTrrPVC6MZzr1W7KhXP1WccbA2fBnnc6piqo2xLKPkEjx1hr",
  "key40": "2RewRZgkQmM8ydNKf6YGVwueCNoQguSmc9REYh2zkUKMozzwX5gEFznpxWFp4JTBhsAxWpPuEnjB8GbVozP2Y985",
  "key41": "26hk1i9ATNebxmKBVV7A4nZRJmVGqLhEYtohNwbV4gT2jdkwJtGnoW7JusRrXK6GHWw82nWGQHa7b1LUGZdSFpPT",
  "key42": "ZJ89PWmNaXW245GLW4Bckkg1uWNCourqioXwBxxbZYEFeZKfvL2HMTDQRasUVpMhvhsMvWx4Abn7KHjAVQQhP1t",
  "key43": "4Po4i7hArtvg5xA9th5jUzmrfx5ryanbtqkr81gVLnXAR3YpYCyCtyfkFYkJgvADybYFQExZuLsEk9nfwZsS2K7p",
  "key44": "3JkQubnBJnNzjVepZHuR5apB4jP564zDjzjXyR6JfUhL77RUxDJwDZrArQzfYoWBsoSHospfuRTUPNpJZkYyVR6E",
  "key45": "5RBLBMJdcu2GoNZh6dm4T3pVFH3a7eXwYhyAKfo9P42oGqxXGEJGoXHoyzmgg55EnVVrx1qnVt3RZDRDyLqT8fQs",
  "key46": "248xHWvwAGRLKdCjCehRQ1NmwwBkmdopmT3GcpDiMeHPhq6S61PCHdNskdDDJHbWxZdiwd5uMqr34isNhpNDSGM4"
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
