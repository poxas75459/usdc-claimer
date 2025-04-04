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
    "3GArcWRxmdQrbTYu5iKtmeWnVE6MhEaVmDPdA2NxbqAkdzUsCMu3QwGSkDf1PmwewU31AGRn3NQRt7tmX2GATLVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bHqJqxoSTbTbMV2ecAFidHpTaA3pfF2PQDhGfBEDj2UedVWAY2qSge4Ur4a14XaJrRByTMoAVqmymF8x3mrXE9c",
  "key1": "YFger9y5nt6ZZMs1TzjiAdCmR95gqtDJMiZuD4gSqzWwmVYQXRBMNJSyL45SE5HFCWiVrnT1SA4Xdyy3w1CiJBF",
  "key2": "5RFZmvE1nfLV5NYiotsXrpdEstRpF7EzJuEsAsWDqAFSLADMirdehvWgW8G55nBgyP2vBMJeDyjpqDNdhhoRB6r7",
  "key3": "5WthN1ZpYvgGyesgLvXFGSBxrW78WSCacWDpC6uBK2vunqP6ChbWxVh146bg1PgwPdUv3VpQxZVWGspqjSVhE9wu",
  "key4": "4GVuHXoEuKMEua9mdFgJKwt2psjMtwrP5xSMh29uTYf5dG1oEQ9Mwr7pEmomGJTwRnp3zbKLseq8aZJ2npmEaafQ",
  "key5": "5DRcgtQAmH5KsYSPFUiXNWgNxzLtKyYXPF9pTvUoHhXrLrjEsQA2rnNMY34EdJjvAEAomSLz91CigXXEybSZuRC6",
  "key6": "4dHDZbrqQBjVdden4dNmGtSDJcqArnfAFX4hSNDapi7e1srGKbUJqQX3LbLu77ezVRm7XYUHHJriw5UhHTi1bPxj",
  "key7": "TQUATybqA5kkteqX61aXCJJMP12JWjT7rDYEM3NjW5PqabRTT5EUiocsWGmBCEec7UTCiCSYzTSTs82VnHjFdnY",
  "key8": "P8SUGyUAnC2pvhWDvqwZb79DeoJRgsgaivGg5RB7uAej1ZvEP9S9L2CuNN7fXzXZEcozDgwiUEbhQKLFNQLLpwH",
  "key9": "3nmdkkDBriZJa4VBmEy2EygTK7v94ut7KWofnpeGXQhrJJzFZxx6q9FeEkduvepZyAbj1JYLDNsJxNSR9ZXcBYY3",
  "key10": "2qovo7HE4rUFMLq3QimBoTDmAz9wfmcSRrBYbNQY5yqewt39nbLizJ1hovFvS12rGfbk2Q35uGS79zcmnouM8qk6",
  "key11": "278VbSostgthTjeUwFgDxo51594bsnWeE7C6i9tLM6CALNXztiSMx6rihT1vVLxpDwQaFvRbzfsLBwi2N8bi6Bgs",
  "key12": "66J4chJYhqYFwuCjC5afEK4jqsgweFPhQtQEcnx9YuDprwa37e8PAfMpdY3RhRu9EjsbPjQvZqhF14Lr8rGFfpiS",
  "key13": "2TWDyZbd1YxsMLhjfWmyaFrZtanGJ5Uf3xjWBZZR9gNDuc3uzPUjT5WpLKp3LfBTf1PbGGaE7JRtCpdYaSzqs6hW",
  "key14": "4KWK8xezkCGbmzYyo2F3wgzSuK6b1meSThng6vJNgjYDzuXxncLyETQ2DvMAS919ZWXNuHXbXYqBW6Fm5P1SM37W",
  "key15": "F1wABGpNaUjsi7ZNeoPEtcjxq1QqfVyGGqj8zXF3Z8YSM7583dkn45iaDnZgw1u6rbsseqJeVutbj5ezCgFKft8",
  "key16": "4AKuDxWTPkucoU4rhZ3o1sb3nJ5qRkhG7EZE9dVrZkmtqf6uR7gE9qCAx4bU5eH25cnp9PjL86tphGJz9nnidNKg",
  "key17": "3QGnXYXwve3yksaRXQcocFRtzdE1CuScKr6ZDjTAUJjqhSKeDQMFs8zPzLwC3jz5jgj4mxbvxVhWqoWYYXdSeGav",
  "key18": "5W7BWTc5A2YetxiSNL6ompnB2yJVdcEYfTvZERQ1hfEPmhsmi3ctg5uAJp7T8NVCHZ1pTfgNHFJzfoDfkByH7gQ",
  "key19": "5pKhyNHTFPCqrsspYXsq3WkwRic6mb5jHhHMgNUznPfAde5mx63Hc75DzfgjYJLzavGktgBud1bgNc8yFRnUeLnW",
  "key20": "46pXpCz7N7FDp2FSXSL6BubdWr9aW4mJh1m8fcBjxpjRFbECnhCSvyJfvXiwfDD2Mxzu1CWVosxGZ1nyC6qMa4m1",
  "key21": "2d767MGx1UxUEnCiTMZeF7qvzTjHpFHt1QT6cmDhWsWNZfEQxDVaWvWWgwmtaiNn1canoUSBGP1jro2VR6iMYR73",
  "key22": "2XrGSnhdRWMe4ZyMGY4E1ESf43FHoT4ykWMbJgWNCkpbfK73zzYGyZQRqPAAyttS8d3wLkoeJm9trcUwYGJWXGhJ",
  "key23": "5qVMHZKCGD1DorLCNmwTeNBK7kDCDWK2YCrvMmQMPFXcaY2rRq8Fj4WYyY1LR7Wd4aCbbT3nwhcgjgZefcs6PSBa",
  "key24": "2keunR8wtzMVMTCWRLRYfbYJ6jENZhkdy7Bz9zVTqV56uxBKBC2esZiKAgib7ok5BHSDUx3hj6g7PFgZCy436q6r",
  "key25": "3Hp8RQ21e6Xfxrvy7NtMGjA33yry35Pj4UcPvWHSKdPJHq8fygaBsVrrjCQ3MGxGa66J2msfykcQPzNmTmCARpoA",
  "key26": "3quGAUmL9Q1mKwiTz6ZqaGe4HUD9VCtVEH91J7mg2B55Q2ZXV4kTGAAA2YUwkugM1K6ezoxG7qZ3EparSn3W3WvS",
  "key27": "KULSYkWpkp1Akt4bNpd3QRt5Z7kojSvHWEqGXTRGQbCoAqUdXDmBf9qqzSijK7i8976X4sJLXQuFcym64kMsxuv",
  "key28": "U4nM1Yi4DPyqSy3KdeTQ6jJDK61shXtF78zSooNfgogA8ewYwSs4qCDmuQxMyY3YrNtUyqrranqBGTRuvnpjH91",
  "key29": "2nBdYmC3B1z9q11m25LcDSLQzjtEr6UxQZoAu8ehj7a1ZzMoKCZLi1fDy6oVirKeqeKCSrZG6PbT6WDBzfmL9Nzk",
  "key30": "PaN4NyXh2fc4cshqHC5qgv6tDeuufcyXBpwRkrFD576aJSahHsTxr4ebuTiwqjZwkcvF7hCA6TWzHGR6gMm2eKM"
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
