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
    "34kK8Yvbtd69p1wdmPGfqPfuMTHBWqmuMnWYZDDG4ERkdKT9DJKADkgEMsQiTURxvYVWxb9Dzw59CQRKceABagQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KizFzAjB7JA3J3FeJhkpXqbLEoLjB5m1sooHF6Pkg9FuN8RAwUKnrAgeDrnJ4nb3N1SSWBFEgrKugXWEwQmDmZb",
  "key1": "2FKc8gepYNspQ4certwvPpx2dycyLa8nMNZBw6AXhhwcv1rx2rUxM7SmmwCGAdpnd1v3cSYkTBQDUfhGgVWzqV28",
  "key2": "5qkU2h2Pzw2sYBKvkh42eg91wh1eUSdyAmcywEBxSo52McSbT5NmmrwMVrctYP1FnvR9DVr2BwY5VLAr7fqiVuj6",
  "key3": "ohdcRfd7vor5AfHfmDHWany54WYEEZbRv5ZhaqqPdFzbUoCJyLrP3Q9LHh8SCa3fgc6VfQoSAVYaEADrkqxSba5",
  "key4": "yagUBSdNhqUu7iXUjbcF3tfu1GHZT16oZAdAy1GZB8BB55cvyLdMb47nQhsWX19u94KWMBeNBYNvynAt6JbguMA",
  "key5": "3VyUtPytk32YnvTy2UA77pRjgoP1NBvg6Zk44eQTu3xjdzmdVVFuELnMHcA4RJkUay3YM94oQFepTFRAtySDgFxw",
  "key6": "39NMqfH8PkmiPYsjGWhE2yPwakpY2eH5KSARtZi9PJKe3VMb6g4rAEsYgQ6nxXiuBhVD8PtGgWG7tWd3qV3qR2ew",
  "key7": "4NKTxxaSzL8kMpAY2XSuxGtiB3v6z9LMKdx5ChJ4UsaWThfg7ie2ZTZiQuD4AZHcsMpRjzHQQyCpHjQCTgrDz28h",
  "key8": "59q3hYyBbY2E6iEeskZuF7nqpZ7TtjZUmjf5UVV2UczXVhJH8HJTxjUZYM9C6ScEVDKyKtPeSyd4ucWvVxRoc6yB",
  "key9": "33p8LvUBXFenaAC5XYEmX5rRdf7MX3Pj3kEirAXbQL6EyBQBgwPdD7Ys87kSbanbSf1Agq8rSNg43GiEyVbd6nU3",
  "key10": "2zWrHQcAbbibtgZ2st4wreZUipSGc8HKBcutrWh1GU7ZyFU1y9DoRFq3tvg4bXpG38uoF9cZNgAQMMYzWvr5cbf6",
  "key11": "5mesYhqN1rzq2XSnevWUNEDjvLNKGjDJh7foynbJAtqXheNFESw25TnQS3EQEDsmtszpQz9zvoF7b3HR7UReePD8",
  "key12": "5aFU3Xy7kAze6F7AeN35zg8u31xAiefwy7ETcHMvCvyvwSLdXMypjL6xQXeZyvtkKoSfVyedubypjExup5ddj6xm",
  "key13": "2GzVd7zPy2TXm85HpgvWXGS2Sqo5KGJ8AfALx54quXd2FXsRcQJziF5dgXRW3Nn4grETLSe51pNEnb8GnpNutovK",
  "key14": "3kTDuepMG65NcqwPbhkh1xrAtJYEhPAG9tRWf4iYKmsqffCXmgcddNsYVMzHM8qzmBDsLg71VFmNUJXUvGhcG8Zm",
  "key15": "5FDzAJDC7SmYnAUBMDhbAnEWBE1vTpbV5n9nF8NbfMA2euRXYLrBLTshcW2g8iWCkVeqcSDYZqgdBgobdaQQsoy2",
  "key16": "2d2AcFijjG7b9TX93k36D9RZ7nA8SJKDp4Tpi3Bgv7J4ZAVRqVWBEdZoNuRhegwx9iydGCd1rZHSEw3pZR1mih2b",
  "key17": "4QNCy4srZ2jMyQddgPkLsa81q21eCbudGE9Coad2cQfL3ndFtpXGJxk3frb5rCXzK35nCe8DdF2LN2eetb4kNZg8",
  "key18": "35KVKQqMrMvsmyZ8F2igshQrUgunzQ1wpHwKxRjLrWUvQBHvKkpghUTN3uy4Ryx7dDdXNdLZZNRFF7T9XHydFAAB",
  "key19": "GVMitcBKDnCiWaxvpKjpt3jbPfm4mzt5f9GXqS4enb8yCsVjXJvaz8ZwESyjT8t2MVtwCXgGhU51VhxJPPFowr9",
  "key20": "4nanfT7LxrjRQ2F4j9cm1aNJjZeZtdJCUaTRQyvG1tGfpGwkBozMY5cW1YPi7t8KgipvuDBWWd7Sd6wVn6aTmS9N",
  "key21": "3EbvZFgML3KhRgW9YKg7iqiDzHsr295EDyQ2WH6WbX1AmDcnNcDrCwePMjFNrQ4DXyTtB9NHrKXwWDpAZ1YNt16Y",
  "key22": "4zJosy6jNGCsyEtKMUg89WrXk2VNKUFtGrCA3HxyfTHwFuHw2F7orSYdpMTQu3vCpTeK5xKvRjgwTVQtEvytdmq1",
  "key23": "5KdYm9i73efnYJpq75khKxycmURhsopJ9sM4LiqLubXxT3t2XeuajYwcYGmH4WNeJ8DWbwVirNSAK6juKLucJC9t",
  "key24": "4FZTQR6VKpd2P5Sd7CUNctzRFgY5HfAJQpvnoLgciQvyvvpYpBhCUuPq8FcRaaFqKtH1LSs4Z8JoyofnkWYnuj6D",
  "key25": "65n2pCGgVRRmVw3tVVNDJ8kqcbWxGKHH7wNfzQkzCrTd9nBbmYyhYpMV9NHVEgwmhRggdXZ911HAmCcDUnNK1BRT",
  "key26": "4j5pPF2LmxJkGWxvHK8BUo98pUMCFNXszxrCSUt6pM18bbTJhYLQ7EcWcyvvRPpkVRGmwuzHPx2ZUYzR7t2ow37V",
  "key27": "46h9PmKFi58MWz76Cx6Wi4jdFPLx2XfCiRYuRoxVj97PVuKEVunS9FZaNLkJaQCCMSbpYRoo29p5PvhgxHHsNDsA",
  "key28": "enxR1Fj8MvJyXP8goQm1Xe3CoBiryUPJuTjHF6XNhebs92h6ZXdijp8jL6x3g1fDUkdR5CzhuiUhxvu18hq1aRG"
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
