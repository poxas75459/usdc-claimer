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
    "vGWRY1yEmtMWwoCbAijSp8S99eg525D2oeFBv9xdoQUEMbSRypJeRjMniqPnLtEzmRVej24tzxEDKRt4TwbJeZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SjXBY9ucHPreBXsv7a2yrG1SiBJ2FBDvt5qCDektJnDmQernnqWDeQXGdQi7BMVEK8PyzWh88JSWmZ48QZVnXAD",
  "key1": "54QtcSTW7MKKL1pprJD8kKPipvCSDP8ZDbsoasedix4JdnQjgbj2RLTeLN48jpcmk5g7knWsRcXChUm4Vg6VXUjK",
  "key2": "3Lszr14f7vHi7smyyRz4eWDEeY3R9ZmZskeJZU7ftAJcX5WB9ePjA15RXSHBn9NZeSpdZ6hNbNKdsweuwy2onUXG",
  "key3": "3qSy7mmagcJ2nHUDrdUx3zYJTyyodRto1Pe8DtNYXPT6DgCM3B7jYcFyvntjojX4xzEn8yfd6JSRefFcTYdKYxgc",
  "key4": "434ncidcsXLxsYTh37PoQD5vvhUBLk57UgqBkkZQE2cvcQNBW4oUjVLHWuxThFTzqcNCLZDoG8exXe6LgeoCJ7Tp",
  "key5": "3cxQuGrsGuJioYxt2GrRdLYgXp5QCJaoXUwSjbJdAqRZBveEB6evSc6yAsrGaAdPjtpEKiwi5GoCk2p9dAQGPybK",
  "key6": "3z9eEym4iwZeXfiTXcpHMMBJvDrXPeb1bZJauHy9FgCR7Vhqz9trYwkYvCL7v2DeYXoHvuuSVYCmmXms1nYEFMa5",
  "key7": "4CrgHzUPwFYjP1ABNNeKKpryZCHVfk9VQuPbXHVqXr8oeRzVHicox3TRxcMP4xYchkaPHKgo3FWEH4oJa99LPnua",
  "key8": "3hBJh15fvBtVd86a9SeSyAmon8frSjsL8ELpj4UKM9DVhRuA2dmueCKyUMy22KbCHf5hSu5wAqR27tWwjALnzrc3",
  "key9": "5mGqZcYysJn8F8bESL3whNoUi8WV4q8rzVX5rMvPSunxjwyJvG7Dqe7tdhop7zoZfANgJN874Mf633UfaY7ruskb",
  "key10": "FCvjnBsDSaC5SgT8MiiEZbi1nQ7crwsQBVh3NrytEQGRRkhzaoC3jhmxBqT8PW1bbpQWi6yPNkdd52XodvrgYHC",
  "key11": "9eeHb56q3Eswa31h9cR7WRWNZgA6bRiVZRQa6uFCGxtW33R2izJWx94oGToHxSQYUrCBtpot7gTpMoCH1wEsQUD",
  "key12": "4BviyFCmab9uJ1qParmq8aCwKfwXAPDAHtmywr1TkpJdnrn6LwbQttREYeqXuhbkem1BprRjLA656ACnVhPhAZHu",
  "key13": "4waPU7AgckfTPXDLzLEnAkzJyMWiVYzbcCQo8GBSZzJSeF3mjGVBrkQxfY8W5NMRZueJizNyqnKdnnr9A5QXpC9n",
  "key14": "3JKfqikbio6iPnWnAF6iTqTVUWVFa2SZJBYkoEXnDABqbJTsJD273V4AjWA5d8ZcCRiKM9HsSqM3gfbvq7GVWQNC",
  "key15": "7MSKr7vtbGyXdevKUpkY1Qa7Tn1r46f7MqwtWHiRL3zB2JsS2pW17es6iZ8GTon3YfcyZjZKT856Q9FEBavL9rP",
  "key16": "ABU1tAdn8Eud2A58e3nP8ma8uT5uQPQH13ttnsWaEC8go9BFftViE7M2ihjjoLf5it3E5jeKpojk5C8XNMhPa5K",
  "key17": "4oa7fHmuTwXt5uAk8PocuZ9s3hcSyjQu3DNKc48EkzCjxeiai9zBgpf729DQHQH8LDuH3B6uYt82TepoVavPBsGC",
  "key18": "2eqqMk3u8YYSxzCzr8qzSo4XNwiz5F9scpRwT6nXF97ZKwefw1vAVDytkJuRaLLoxW5z1y87VrycgvQwLei7nzTY",
  "key19": "4qRYFafwjXeetPKScq9tf7VMHgAwn2eVXPBHPPHuFNd2AyTG9LigzxMWcW36ZQ8tKNeMxnzXGWpsgX1wMMASrUZu",
  "key20": "66fnJ9tgGcE6EgLZeuZGLG5CXXFK28zQHPicL8dsdQCyT9yqQat3U4QHDYe6ytoXYD47Nhnx8EAST7LfLRjndv16",
  "key21": "4Ttgz6vhL8JFM8GsLBYmfLto6W2fLsc1TGZKsymBWciXEVHmBpETcYVSiBtCS2cdZKjLKxn59z76PkXQ5fEQK7Fv",
  "key22": "pAeUn63vbGukFYvqHpyZsrXWYFU9YwtPniE4PAMrZu2GJdpM7rAe9LxfFKpRDTe3BQjFdY7Gy1d3VEggjHadCy4",
  "key23": "2aFPwRyySte4Hai9ZtwTxfGrBA7rjkCdgGRxbhScx5hdYo5SmWtKrFUJEJHZWo49KwKcjtH3LUCaK3S5jsTqcB7H",
  "key24": "5hwzUbCyRFTrLujshQztkqvSV3EJYokVWRSJuuhNmcdd67DH5buqcM8WvSFJgXuk8UqXYQwy7a312DHJJwyeg1Bj",
  "key25": "Ws9LkcGyuXmAWb5uPMnq6rYw8UfvXZRKwiQTPoQxwd5kEUBnnt8FgRb7tEhuFhDDBzK2AEJ8VmYad5AMuB5i2XC",
  "key26": "eGg39rbEKJdBbn74HpcJh7YF7W6GEEnPoKPnxC874tYA5DP7PYzWHwcHpBBMisSb5HXDWkinr5JqFSE1WKmikq6",
  "key27": "4EgecwLaRqfLx7UkeY5pwcyHFrZZX6ErS5Xa8GzgeUmPdC3sn61vZCdLcwBZNbhWYC1MfWBTMpYLf41KrWQCo7Yr",
  "key28": "3ePS5vdYTiRerhcfoZaHf1Xz8smfeozKsvG14dKhyjxpcw6AuB7j1YEUMH2jacyU5FrZQdtX8ZuoJWwJG4YpskLB",
  "key29": "z8Bvn2puQ3q7tiQryXTzqLxqWws66vachsTbim67fdTeYYRQgFP6Gvz52gEsRVH8FXFCBSdMuQTPWEAKkCqGGQE",
  "key30": "rnzguTgKfDcq74DZjYY8Mcyug4TBK1wySQQ2GA6AHxvB19WLQBo7wh3W2WtssbVmfcnV7vZXZ7czaH5LxrA2DVE",
  "key31": "2xZrPqcFU6HUkGjR5SFWjHc3xR4AKBnsmrkY45YwBp2QubkWixaKxmiDYxEAKnep7DhD1nhXMHnNaRujVmcLZ29A",
  "key32": "EchtKetXU4En5cdMM5GS27ynTVNfRUcm2VPv323xVxzJbsNrbefkFa44txK5GyQXAc6zm71Z9UHcAXrgjcKnsMp",
  "key33": "bNHafSSSj1ZXn1zde63vzWNPsCeXD61RyKRYsiQyssfT8t9gUWSTepmqMirJ3kmGDTVwiiD6nyMye3iTWufjEsN",
  "key34": "5byAy1GfRVibmUqXx1PgLNuifUqrpDY9m1M1mdFagrd9dnTB8WEkRyy3UNHwpq2esBVB1AJxKbSUjmaUpTPkhKXV",
  "key35": "3133U7xgTsF7YUcx7PBjJyuTK3CS5aVv8K5nMJnEvcE5aoCD5R8v2tQGRqt6JqK8gkB8qzkrzk7CcsYadKJ6YQF7",
  "key36": "454MUvvAtrsm2UdiA63KQfE44rU4f4w7WABo6YBxKZAdM1ytgozsEfiy7iqdRMit3cFrHtJTKkL4TFAZzRbpDafr",
  "key37": "2yx7CrnCMjfoCT5iEq1zR3CSaL7VQpNp5i58axUrkEGDiA7L4C6w9niUGpdVVViRxKozX7tCP7P9RqLCZm3zBoAC",
  "key38": "3UsJS7T8ohmYAhMruuH7YsJaHMzqQSaqaj6oovtCBHWNWBdX3MNcgwxBKPJXSzVw2MRWsH9ncj1G3M3xidnU3xV2"
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
