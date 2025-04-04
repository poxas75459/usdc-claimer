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
    "4mAviSG9KKHoy9NoP8imCfsQxg4vnqh3dMvtjA7KCyceBTdrzhXxUpSSmB4T31aRFi179PxCVrrdwgTW9mkeugNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vuXoeMfJ9mhKCKQ1DDurGEFcFxa4wuLsMWoUYbFwCipiGcGrDGU9fj1jCha1offaTA1wv7RJ22nto6z9uSQRqbv",
  "key1": "HFwzDv4cjLYsLCZAnLT1d2pczptGV6gS6EeL1BPjmEEQ64PkiZ7cwjzpVVGpVzKj3QZ3XYqcuPBfYWu2UevCUqk",
  "key2": "58QPXn4DoBS3gjqz3uJHADQGLcLWi9QVroQbMbJks3MBL5vhqnU8JL7QXHiCxcA1r8comf8umHXwE5bhgocUp7b",
  "key3": "ETAFhSVCmypwE3NrdfPTEHsmTBUkEZERELPFjk4BctLZz5QZ79travJjzVSZrK8xvYb236JMwyejAUWksYo1k9s",
  "key4": "5BC5D8wEnyBHWvxhXGYAaLhV1BhdLT4JD3CHPRXZAdx8mLSsrKubsyNVGVG5KYqhBYbmoxNqFvpkYXAgiXsxS861",
  "key5": "45WtrgwJf1Wa8hN34EP1yVCQD3Emcy8os4bPLiPiyL9RJHX6jgzCPjbpktBKbdvdv9TR1o3vhE1vU38QGXFmmH8H",
  "key6": "4jN41fjwvt85Ef66k5ErJWEybxPQM4couxVc7kc8WKzVYFts3Wsbh3HaKK2it49GBgVuoADzdGoFM9DB4q2TStwt",
  "key7": "zx3b8CX1iK14ywAwtjTNgonzz7B1vBDPGn4mabe1mqqKAaDZLeNq4FYhqbYVPwTLYQUNeC9zpmB9nPV52MpBotf",
  "key8": "5mqTp4pH8RSzdqVpp5hAFz511cUVVSeRKDHHTZxXtyZ86xtjdZkQWuZuoTJRNpNgf3n13ZFk8zYK7y3HjksybUGh",
  "key9": "QkwwzQGZncWuyzoG45uVJuo7mUaQ4LMGr98KaBvGkUiXGW3DV85jG9L7nAA7xdYTyjb36wNFu24cvwQasF4wAn1",
  "key10": "3FKki2MQQQcgoiTwFtMjQY2MWaw2Zsec6Fbdo3dg5xftHJX42zntDV3K7a6duh5bUgdYpBLG497qbDWc7JDPz6iU",
  "key11": "i7yHVSnBYeRrRxVunSSJo8ZVBVRGnZviDL8nN5Bb5kv1fcnYauqa4z6kLdfC51Mx4W9s2MhcFSE8ds5yozczhAt",
  "key12": "4wENDDWhNFBFswAFud1Yv98QWUYsdhcwFkRc8ZZYUEEkQbTdBWV37SPmck19dQuj8w2q8RKSRwsW92np69xgTCnZ",
  "key13": "UcThXsvW6R6yKZF28iLoYfGfkrsUnxdSUT3Bc4B3A4NDpZDm2cxRFMzbABPxWNnsCSpw169nW1qgb2tFUXHJBkx",
  "key14": "5jC6WkxF1LT78JSso3S46usD2VWkDU5gaqvoUt3B1kPjvPWPgSTFiaDXGrcg64BV4dLK2kXz8VZzps5XSn3j7iDi",
  "key15": "3e1D6v3oqFxRxeerSToy23t1mTDJefWohstEMbqjz3zKUq3qsRg1A5o38muem3QkeyDgZuhRiX9Z43Dj7Hgqeh5j",
  "key16": "4b5SRoLhG5gKNgo9ifgQsGdTGRUzZfbcDDqXRa24QozeCn7eGi5XQL6bCjsd99LyYqKG2Bx1yNHb2QaMm9i4qsMb",
  "key17": "2HS4t5v4k6dt78gxsSjbwbcR21Ddr94h9cejHPpgSBg6v2UL2saBAMnatp6J7o4ne8WFjRQfhUMrXmmpuvbzV2DG",
  "key18": "2vWdhKkWN1Jjp7gHwKadhsdwZwWLWvVBA3atNWhnWNG9bB86SxtUVBY42WFFjhW5VVbdXSBHvR1LpbLKNqs9n64G",
  "key19": "4pNquQ2LM7Usq13gGgzjK3QBiQDejU47jNUecofEUYSbtZbYLSDaEN7Ts5DYTaqP9WkofA9v7tnugUW7zAYvy54m",
  "key20": "31BvtbssFKa1LmeCzRUKVipWDPoQL2MUv9aG4Csr3maqZFPuxYr2QUX1jVULsKgRWyxxGipzgXpgHqsboJFArTUi",
  "key21": "5yAHPg5jwRDUzP92YcNCiHZJbeRFj92kMRChQjrxWTBk8ffV4EvKgrF2SCEuAcCJs4R2VmgA5XtLvytS8tVzCikh",
  "key22": "54Y4eo6Xx9LqEdfUMjCKC87vKLgMXqijJV3fB7PVNJhtDnKChBnK2GJRg5u5m57jqKpYoL3ZZDyyj77GqfHX1GzJ",
  "key23": "Sx8BLLQUTQNMJJRzhokjve2XUvcDACQNZJxozYTsedTfWcvkaEYquqpAkaq25UmrNhaiAZE4e1R1pbAT3Vyksb6",
  "key24": "5dmCx5jAwg7umEuf6jZR4eSTK6n3eYrFvx1ooe9QrunN1cxNn6ZdgBZE4fJns3wkD7CgEtaWzfPeJGVTTBWxcYNE",
  "key25": "7A3XGDBeesJm4bpg4p8hizsGUQwt9QCpY8xxhTRyUfwSjdnvzUAP9Y4NSKky3vg2f8cpx4ZawUAkHpNkMDQsExt",
  "key26": "2MkMT16PDAud9V5CAKh1fxParVBd7sSq3U4Q5PmDxRBCxs7jBjncgWGdTwQ6HgsC28LjweCHogtUFBAEfAzzsn6S",
  "key27": "3mrJ7TW9T9ca3eqffxXJxydo7wrg3JpS4WBT8F3qHH9Fqk4i2Bm4nvNbDiKk4UoFqw4ZRzXkj7GQVZaaGJUBq7Ri",
  "key28": "2aPFjuwEgRwpKLGfP2hpXAsHwBNaemoPQ6yTbo6s1V3h28iuT1sYCaJddZ3U13c9zWQp9WnSw68n7DTAGbHeqXSr",
  "key29": "4e1yseKJYzis2fnvRrKeZMdB7p3CgBcfdM5wFRBmtmxw81XR2g9cWjpZFiG1eZvVa5mrhY1bdRaL2HDQC6zhmYVq",
  "key30": "2vwXJ8sViXvXxGizwZTtKYwT5ZcRnfGtVq4ZrBgg7wgyAVoPUPZikeynGNuHJYPJdXbefFdhb9C4Dfmp5P3UxX3k",
  "key31": "5Akc8p9tyHFndLdHnzP8wDvMZjsY58kfoYheUxiVra7smGqYM8KuTs6KWVU2Rj2m6fJBprTitSBVCziqvf5ghCm7",
  "key32": "5rmbDVXsPCt6ioFrBLwVmiXrfK2JzCWZ4XahVKiq6Bk2VgcHHLDK5pgSjd4mZHPEHNirN3TgDKMXpAJnE3uJ6Hsg",
  "key33": "3zaEZTe9w7YoSWt5J2yvcrrAzLjLoXRmeMPANxMTQhjq77jioiqkZ5GR75cyCjsPEsLMJD7TSyJsYebD9CVUQoqk",
  "key34": "PdWBcy34QBHM8jJmCvf1M6f4Wrzcwegm6kb27D5jAk3KbdZh3UywHaUdowoygbbW3K2iS2dXJtyzSRyrJtQmShh",
  "key35": "5CT2Y7QdEFq6gapBjvYEVHwS3RTh7Hcd9cvJn2pzJTc7W7YLH6o8XUbZvgrL9MPsh4tGNTHnUBmNrVKQ6T7dX6RF",
  "key36": "3fsAYb6L8Y7PMLdDb5edfd8jCnAKeNBH9e6FahHLHw6mENtRgEpM5dd1woY2nbh9jGD7YFpYrjrda4LRTPUFL2gU",
  "key37": "3f53cstLemm6GhfcejwY4RJsabNdGPKMWeiwGAQ2kiE7X69cupsrJRBAgNvLP265hTbthVt4VQZKaxgiL1XNCUfA",
  "key38": "P1SGXPW6QjC4MorRy2PXzTiVbnaTaSAK9CFQZihcbj4YDYUWaQJjPVGPnXFNpsmRczBdSt3U3P3H5Hjj5FefGH5",
  "key39": "4y3MCVayqzrzpzGNVLAFn77wUtK7jK2ESG2ZzkiovaCMf1ogjNLSnTvCQJXN8wrMwWQQkXsNTEkZStXPxmj1UwkW",
  "key40": "78tCSsh36FpvxsKp3cnZDLpzZ8pGUW28EBDCJfXHyxe1S5oL2UDNd5EBFL3jEnyHoFmH3QSHqzWBBkdHrenwvYs",
  "key41": "2wtKvaw8jxM92vXmgbPukYcDZaDJ6We2HVi1WPHcXVfXXGzLYXDf3VcuJMFb34mjsfhTX6DpRJpqJEaZmVtfwVaE",
  "key42": "2gwdsb6t7jxdKa4TDndMHWDa512WZu3ot9pzZHwLodubtPe2JgogASUoNrJucKvT9JrrFCf3ZSJHxCbXBe9DXpjF",
  "key43": "4ueKHtb1HcsNnyxcR56DfSeToTa9FcLcrk1hai2LgKX2cGzthfaZRUZo8Hnin3UVz1cm37K9vjGz9HTE1fEbWGD9",
  "key44": "5QXDYdi6d7Z8mPwCFHwg1juyKTvfm21UFZt3kyBiCbpCA8dLrM74vrCsxdb3vTgDJBuyM52bsYSNd3zQGKz9zWU4",
  "key45": "563KqKrhm922Ai3pgzakaQWHVTvgBTqovHshz7CQZNKX67BgTvT6BLVMxELyKtoYfnDcqcaCs6AeXPRyHHa2moCM",
  "key46": "4qTviN5UUHZ2k2zQCxCjL8VoCX9eNjgUXuZ3YdXsbU7xyiWSoU4VQLz1yhWV4TadbttxpUekvLnN7JQmmCDbEteJ"
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
