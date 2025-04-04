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
    "3tNYBVYDhpqjZFje7vurLxDRw23zTV8bYpvANHYQgPSmxZXNQqcpPBsofsLfrRBbVB9vTyywKyR73iXnUP5bS91L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rqWs5cM1UbM7uxuSHThyGCGtovXAdSrD5hJSF5HZ8R15GUKqrFnNqTiPkEd62b4KTP2ZkC4mx6yV8he1vN3c9EN",
  "key1": "3smVVd96MkpDv42vfHdJPD83hnxSyLBXW7NvenaBFAHsRmtmjVZLq3xUQKBiTVsXsQz5W7ne28KvqfBuDUmyjRg4",
  "key2": "3svku8B6NFnCRYSuXEMFkPNqYPjgUtkJPrpMbpy5uqFZLB6fsT4eu1Vos1ReLd5ti3uHdFSBUxDPxAzQu2QaKz5j",
  "key3": "4C2WzHLthtLrGE4F3QAN4n8ZNpbiuVdcAmFNUJXWn269XkWddz22kvAdrhJnfJWJ3bMuTHGed8TYRnHhJAR4ryRh",
  "key4": "3eEjAsg8xRYgM7NNbFXmHCTvQgL1aQBgFm2ST7SnHJXjV2iXpfj6AYWW1dDbeWciWyaXTfU3TkX1ZMrJJgYX58yk",
  "key5": "5RSKkf2eyqu5n6UuGnZ7JHxS6WwST1CgDJnQ8L9LpYihiqc8WQuKipNmTWiMWLgugFLRM7LMYakNznCkShuFXbSW",
  "key6": "4JzanrEiifECPVUE1JDdqUVavjAYwMoxKAX39xtwRvbfGeapFmWbhcDkvPqhkSaWf6WijAZm1SM7ZhYrKZFfDxE",
  "key7": "5i9ZgUF1r85ziq1RUHdP27XRp2zfvgqDx4vetFiEEv5tiZHmJGnsU9BV728JygJnnYRvX15AxxN2J82wvQ8LdbTB",
  "key8": "3JrymagceczEjy6KGJg2YYSacy4h9TA8ayRhxbGfL3oXCn1manp3qWjN2PEjRMr3BYKHQcYhR19xiHjXj91UhzxY",
  "key9": "2yrUpmmcfFWcL5jQh8P6o8e6g1wW37JeNc8qzzg67gxmgYycSoWGm7Q1QvRqQTyDf2kWt6LC7uQWr2VRxxFMsyAJ",
  "key10": "4Bt3i2WeYx6JSBrjMckSquPZrwdexttQ2DLX5iEiBXBkuw6nQeBetejHZua7kWnxfJw3y8fnB5nHnLDvcdRNfdxh",
  "key11": "4qC3RVUVjxUVB96L2W5MXs4tHzXqxhdr7wfSSTKAvCNKAzcdNUhCDtLfxsMDh3s4bLyYvbFuSuRLXQjPVXkvDrKP",
  "key12": "3Rr87h6aUuk2nfxkeVzPLFLH4DF8rRugtzZZ2KPt7riXS5oyRFuGtGwHtmtiSKzYisjvYwPy1S7CquXuKNQ298k8",
  "key13": "bcMVkQ1ChsZPNCUr8rsWwvJ3c6Mu17Ggn6tvLgTyQYFcavyJvzSqBeygo5U3fY5U5ujSsznF6xoMXg2VNMh2om3",
  "key14": "2sgJuwYkGsBx3Ma68YsN4KUpBinKGGLkZwS1DzTMQh8BwFZBJAenzRef8RbbShWKyR67JpctYx4oaYsGWxZ4kZtd",
  "key15": "5bYVT8pysE1QumukuKPqD3DmR6ZfXTrVp57CcpD69YaRe23WG677WtrEZh2BPavDt3enuUCHJsLazxnPyGryG1XZ",
  "key16": "3MWwb1pARdKVeGk9JmFBHvyzn6LJBzuwwPtGR6nc5AX52TxxgHzvqAtioT6FUXRxKvfapGtb8ooBGAm22mrqno9H",
  "key17": "3De15pEqbwzgc1a6bGT2tKkYG6vN73e8sVLGjynWVr87KSfesNpn5HjfZCkwP2B1NxvvUfSFutU4sQ8nLa3HYHXM",
  "key18": "2j91ohLtYtwQoDULZdtZK6cmPeY77ZJK1nDPCUjPYnVXToHeiLbMhtPs5zKjfP2jwudzzaNFFWskj5CmktCkh8gs",
  "key19": "5fWYCtGEVZwmrZf1QEB4qJEagstLnbZQgz1qV23yCQcPiFCvj3dHFNg9rP9GF62rcorNRxZEwrFBkTQBb9FEwQz5",
  "key20": "3HfHtWtKfvyxQdGXXexqaUhff5pF7wZTWwmJQ4aja4rHzVBkXnNwTVe3BYu1Js7UE4QLwdrk6tmB3ntyhHY5ZJse",
  "key21": "L43GmUk83HEVi2rvhgPG5qG8SuKFKM4RrbBvHGG7Y44ysBisD1BNDx8ahWzZAZwo6bjiqBTVQ6DQUVB7PW1d3DK",
  "key22": "FciGKGw1AejMSen4aGU4C32V3XvADdPoP6Q78NQQvkb1jDr15HRmG6Jw2xQfiH1dK8CCkDzLYDszkRFmaixF5Um",
  "key23": "45vXTDaRyEiBtFgbJd4TXnvozz2AumTX9SShpPwTKtY47NM8xfzndfuJEEkt6KuYD7oAFxCsV3r6ETVdbw4Cgh6J",
  "key24": "43bfUubrDZKRAYLE5XiGgxPiq3MnDVUEa5NzWcGikdLaCGtcK2sPBMAN8MffcGjdh8eHQtUCG9qPvvhay1wHkQeK",
  "key25": "2puUyvCASeeanUnUX8XpnN9DuZDqmmyD6sR1tqd8w45h5XNMRsun41PoMovXPZwGEsPNWkhp8rBhUM98BUJC6uu7",
  "key26": "3pgWDAJRg3Bi6GLjpzHaqETXCWVpnn66CB45AvCDtd29GKbxjKpMipYGUeR1Ww9Gnu3hUE8Rbf1RSKgvTWFKaP7W",
  "key27": "VS9aQ3PdYpKX2VC3WTTbSGfYdZUwNgeQsvhoG2HES37Z5EFXYWFrG6hxzuLESuQdsvzzUJgE4dJxcHbAihhUR2k",
  "key28": "4eucRNnVDWAgniQf9uB5tGC9ZyDDpCLWeG5hJktZCaCP1pqgQZnYZswRpbmqzLWyVti3tgvxm3SfvGjQhdMKh7FD",
  "key29": "4QUXNQJnjp4evcgEefe3tNY951HFLModKgsWkY3N4WoYhVsf38KKa8pFUDvNKRkGjZVedAJ4dKHvvTTViH7A9HSN",
  "key30": "2goGKkzZ1WZoYkv2dmHNcSZBeVBvHfG8oahPtt666NFmY3bvZ9o81SbYZr56Mwzz5osVDfS7yi5YRNvePyxqLmJ3",
  "key31": "2EYhnX9PsNn9xDwb5tUYPZXz721y6UUQNAY8b75mU1tv5PT1zGfMM1mp3A7PNTeErAUqxXyTetYX3RGvQarNUTca",
  "key32": "5ryQ1Vs5nPorru3uwMdYvoLhNNiWbvcKYnFKqAirtbbUaLaiBiJEzp2oB2XpPTyYrjMBsHtFXcAdpk2k5261ARTq",
  "key33": "5tPzdQUFA2Tps3nGxD8mHG9i8fGbrub2dtBWUtuUJmHMgHn6vEggRHHsTvzXj1aC5FpNA5sKrcS82ggGPBV24pvt",
  "key34": "2u7NYmZQ5LARfG1uUo159F3VAnxPm8M9tehSz54ACoP27FbR5reUKxpfmBH5tThKbMioDvSg3ih3rkzFr3X2u8Ng",
  "key35": "43Cim4PCrnjBf6wg1z4M76eTcHz2RUU5KP1iaXihCwNhJpL8hsUvei2Dj6UC2xYhoW997ef9aBLjt8kwuTv95buh",
  "key36": "3GBbzw8y29sqmjt3UkjwQV77P92eyYf3F781tAMdCQK5c9KtssgpP5RKEcr3XDa72FVW4fFvfbgN73TzkFfRwGP9"
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
