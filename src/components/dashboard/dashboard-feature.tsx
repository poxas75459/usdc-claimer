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
    "BtEz3146PVF1gsS5dVyAbzKVRH19QGQWtE7yBQ59tY4WZRnRRP8RBCNwfGkawSi67JKFWe1MVkA6p6MQg3JpMfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v4m4gAx5XtwEQhCCYPKUwx3qNstNdEZgMyqwfKttxyRaH5ZNkTCu4XUeWhsUHFbQdqHj5Q6JBkMufWqHvQf2qcu",
  "key1": "598Dx8NQciw9d6Jcx7AVM7sPV1TALrPrcecTGUJjycdG4TN2mBcKWU7eBGC2Wap9BZ6iPXGKKBF2KgZ9N51t8LBg",
  "key2": "2wMvQPvE5Xh4ULwqxdoPjmLmzkDyNbCScNGKnbAQEc5LALcD7JSsvwVTdHUukpL25EYcjNzMtdXGx9Gx7dMzuvCF",
  "key3": "ozLoQJEf8hBNunLEyNcH6p1sDyiyqtfWoUMkXaTuXCagabkffaGSKk3bvNGyUsW25zj3FeFDTkHiGXoet3ZU9Bf",
  "key4": "sV5Qv5H6XUS7yS35ZtLR4fvAoT8tFaVgN648hwauKWHN2iEBAAZGDMethTruE3seRXwsXNrR8RFLcztgU14EMMV",
  "key5": "5mEW4JvTpYbsXPFB497bhpEHNMT6hbKXiR1w1qo1sVb7ypxpz2Vp4wnVWtkzyXFYTZSoukYkNSoyN6DgEWmRRvpJ",
  "key6": "NdsTBpvntdkWs9RnvcfjuJefeNCBWjw1SVEnAtHuXb5Fzaa3dZHAQqQQHFfdts9a2NSCSuHHiiVDHfCDxJBZs9x",
  "key7": "4PxaiqEomrMAKacGeu2dvCpzGx96yXyTZWxWaUxXvt1YyRxEQ3ihMYA2ha7kLZ2LuYL63x3gntqDzBLhgWSsepZU",
  "key8": "4UGhNGrj8ZwdjiAuPbfdAzbsBy2J8ePQ2owgNKpCc3FSZwmUBCro88wDznHTQPPjT5XsCnqmTWtBRhnaX8C6VeNV",
  "key9": "4ZokMnVHp8ouQBQKRkc2KGdcpHLeDSxueRtyTUNA34fq67TFyy8wgNWU7SiGvCCGs5UUsNMaSq3xKNZCCjKyi8b9",
  "key10": "uueZtE6CyGRgNTbDJ1mXZ74BjkTE2Gi6n8VTyHSejQhWqjrTUeNHaygw3yvsdWngPFYqgokEayPuPx1gGag26i2",
  "key11": "414Q9b3RJbCUpqhYkwT2jLvd3E5zhEw5dUM1gWfng6ge91TPt8CZmtySDofhs3yCicUjfgZZ1Wtr71JBpCy8yhgs",
  "key12": "3S4hBSpZngEokQ3z5uCrWq7TCUvA82rfvk3SemG58ehW6Hn8cvYuHMcLPbZKfpEUNTjKeDhqfZgwnVKmCCqsFVB2",
  "key13": "67AeVizjQrBCNNU2y14dtRJif2V73ev9Zz33KukE8cbNjuCtuyH3vQm1Wx5wUtv3cU33y1BgQnfT2RDxYKxRSjeg",
  "key14": "4d2TnvVSJHesuXLHnwqKD4WddUmGgXfPTVBvyYWZNMrJdJp16gcpVpk5EseeNXU7sagss2T1duY1PWt41G1CdJsk",
  "key15": "5mFNxBCxe16xDbBkcPztTaBusrH8Esm9vF2TgAKZfcRTX6tBQXQPbNxeYVA5BZmdg9A9sr7Gbn1jyC9pDvqbf2js",
  "key16": "3Xa7RNAcGFP41e96ABXZtYYFP1Xhx2r1KWWFbceqDPDWaFRPYDMDLnFfvvd6AGGwSxps8FG8VwsUWvftitqAr9Lj",
  "key17": "2bUSTv8aVMKXXMWJYGLqTQ3DAVKyXfgzWnfgbSGTnhkSAPXyM3CGdq8YLZSoyzHvFiKaUi7SF77XXNDCCJWUMfb5",
  "key18": "4syCx3TCuJgMhYS5P9955ZxbRLxqHj2nDBuFRvjC2FJMyw1rGtWQYstVNTAhW35utvJmkqgN1aLfqg6iEGSjqrW2",
  "key19": "hP5vFgqonirx7Co4DpMBxqPojHXqk16Ea7C45FEXHbUvwv5TMndRLHY4oLy1kewkLzfngitvXKosx9nuDxSeASM",
  "key20": "4xdv663RShj8gQwg6Vez9ZFFWpTtt8Kt4kF9owZ5MV76tXbtTj2o3VRzy4qUcvKQrYvc33kZ5kQdnLmpt64qxytP",
  "key21": "GvLE2cgWk9qNfhAjT8apE6Whp3meHmCbzNN2aDNcYcNcV8ogKprpMy5B9JgnNX55BQpA2HCopkeVXyA1KBrVbSC",
  "key22": "2FhYCWYnPwnc7VfKnGbMfrShZ84988DRDUaHito1PdDu7dgBUr6W7q736LcZF2mzzihx8HiCs11xTuPhShBfF4Au",
  "key23": "4354cTz7A6xRzfHjEn8BXP3AEja7dskbcFM395AnxFQY9ME7UkLFXbXpyxyvkA1bBNWhc3kAzUHGCtmfNCYWqxF8",
  "key24": "1Y45cMZFes5XUR57xXz6uiLNoe2T1pVHT8regombv1Ca1TANiScxn6svUjiZeLTRb4UQmBeNLRcUUmp1yLaiPgu",
  "key25": "1WoRNqBTXuhDGDqsxjhhjvEm88mm4q3Eavzgw1xXp41dRpwTdk1t8JAwCmqXnXRf7doQfmMVwhySWNfBUmXiG8i",
  "key26": "3ehCakF9ziH3uSK9kvcXYpwkbQ1bUTRyUR7mEqeStSRyxCHJGGe22vUyqST3Ep4NF9ZceUxbrrjL9tTc4tdGCcP6",
  "key27": "nQdzwFA92jv2S1Zuf628kHu6iobkJi1Gmh8FwgkN9dPAdarR35iqiWAJHfqE6paBkBL9CpHDKeMXVPVX5GiMhKt",
  "key28": "2Kxo3752Hqe7t7YDKV2V8n83wGgD1ibkQRcwMWPepwDqbzZpngRnGRtPYibxsqJwwGGXknvW98tdpC2NymV6Fg97",
  "key29": "2qMKMxE4iGCx31kBkFmiTsjYVGLfkTFiVWeeYcgXuHwGntgY1sdXL9nxwcV1nfgmxonmqxaVvFSFKo21U8CtFBfn",
  "key30": "4b5LrwP9HeSHMViEMZzbAVr2EohtXD5muoXSBPtakcruGRe7tiVShixiU8ybrJ5eJdsqPeD6NP5uASS5dqr3QA3s",
  "key31": "3aEbqsuUiLsPcBWbAKk7oRp3o6wRzLn5cJcXrapnVkydho2GphwpmWnJwPirrRBnDZ5ApjRGndaUEB6dxqyPhA9H",
  "key32": "3yAQRsn7Rymh6cK4QX4Zp1pFJQZQLV6gpMnQNjZNidXPh1T3wiEnZGEGWLefKoeHFX4F4a1bTbYtmeMqZgQD4q3L",
  "key33": "64mKHN561SRG9aG7xzNNuUYcJZKPwzUnR149N76veaB7WmGvW3DvXgfhmSNYTJeFBssjD4fhQT6W5egYDPoGgWrE",
  "key34": "3dofzZVsG3EJwPF6HanMtXB91uw7jmPVT8qYdW1aymSq4ppvnQNrmrncrfeHJjxMHN35FarC4asQ2neMo4oVajvr",
  "key35": "5pHyqYjBu7to6vbVRKcbYBVYhPBfSWV8NCiByaQJFE1tbEJ91ZQmbHsna6yZ5VnExyEB1sgUMyquzmea6cDpJaSk",
  "key36": "4FhqbNpGU44QzWQTNzRsEowUdqnT4JihTx86sqseGBFR3qkbhNLpcJrmhoWVLuMJxgjLWjkLL3Rh7wFf3qWVpV4o",
  "key37": "2vETxmfTXSZtYuxdpE5RY3YFcH9BMk88rvEvwevwTt8uCVfZpWqnoLu6EiDGqH6sxsKiRwGdBNQiQ3pLHYRHkyh7",
  "key38": "3nhUMgmynrkLE9b7FUft1tvAfNSN58Ekt9GYeSA6xam4dcvfz5AaFRYML74nqL4U5efsFcfg7HWwVYPUDXCKNfZp",
  "key39": "2u33SjJbW8HsV5MmqrD1aiFtRz4PwLsJUoADt4v3UyHwmw57q9Pt29ggb3AAQKuXX2vkvfJmdyNoqnz7DP5VaWB",
  "key40": "4YjN7FvxZgUUEPPDndbGK4XSNPXNoxWtCeZXzjKZrqF5ggPaeZiWKo4mdH1nNgduHaWYLwR9SgMKcZWfzbFLrEeM",
  "key41": "2zXchnW13jNwNSPJQp4LaggdTYeMXWVHQZacXkdmZPWmXDKbzE5DAqMM7vvQ4QH4SFD47a9v3kUpWZbFTiu5gAtd",
  "key42": "3CNrof3butzajapEmzwabTy89GWrzYZQAMb7Zx9hcbFyTJVBbQAtv721g1Mg1TtJa67hvDqwgzDJ3TZjudc9UvCN",
  "key43": "5my3vrvR7ecfLYNKW1Pr9Z4xXP2Tux9wnYLb6pif1n8Bg9yPFDCm3qegjwBsEHttQhmvdFnQdjiduyAkAjm6eZvu",
  "key44": "5qpUxg6VLGxtWZG6c5ooPaULVKPMwQwAkAL4HysCXQDAKK9UbWYvf9Sx1ps6G7BWipAJPHhmn2aXutrSasBq1YXa",
  "key45": "5UioKsWJ7K4N6VUjpeRDKpEhUR8SV1icYCvgBDUMG7ccfujzjv1sPqdYtbtGspxUH1ny1KLsrdc5F93559PNM39r",
  "key46": "5VNivtS3eofDvQYJXfrv9XkicPhgxyL7p9oYoEfUhbAox7r87snfH4GACFbjKSBz4NEnB4EEQN2BaWA8AnoCPuqN",
  "key47": "3sswaDgjKGMTm6JNCeCvnziDTMHhd36UknPQyS3R8QnKtLgQ3nf76rWZQcsGdzXx5Xe85RSkd2rhKgR2nxn1vS6o",
  "key48": "5xL9Wo5EGP3KtmLy5NScDsfMcQS23YJTC3wkoHajLKb41GK5Tv4xjgN3gbV47f7MBALBRpJq9MczaFrjPrxftPSG"
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
