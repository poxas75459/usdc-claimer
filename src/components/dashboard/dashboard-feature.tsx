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
    "R6XYTfHAJTyV7UMaUt7mTFqQdxpsKHU2AcQSnUZba5arWoMfdHRH8SUWCCGCVtwRbUhAbMSVS6bniyD3uYg1bN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yFARSignMPvHU5NKcyK4MXDeXEd9Bh97y39R596RyrnrTx67FPc4DQjMLgSfyMNZuDNu3YgFEhSCV7WUnwMMV7Z",
  "key1": "zPP5hnFSYtirJ1nS7C8oBEY4rzFthcwtzKkGbDdwrrhDP5yXuwCFTvrifmFQerNsqK97ZY3bbqwqfrpCsTPZHty",
  "key2": "4YBEpxvtJYMamKfmpYSwch4Mk6rWBs7Dg9Pj2jsKK6dMZi98FKUW1AfPoBkTBoe4gXDmch7oQN3Tyxbs9Q9nRRT1",
  "key3": "4ra5TnL7cMMosCjyvy3KHBpkkFxB4LqaWu862dnSzy4k9BkDqWF7KHvYxJ14DszeAwFuuaD1hFqmhFUStsDiHeAx",
  "key4": "1cAqKSLCrxhdqEaetvZjPjBDxfC7Lz6sRYTCHw9irWr4nowadCa9h61o8DrfVosD9P6UijnxuaLNvaqXWC53Xuo",
  "key5": "3DGz1L9CMXaN9fbmGnwTJbyR1z3D2otgsiEczcoowKZ3A2sSViU4G2qqP9RFGDyRPEupWKGvpN7iGgvQAGv8soMR",
  "key6": "5dRbEcWFqGRhccjRjBVfeoaUyvYtFGFnkAYuGs8JJWzV5nWfiPLQk3tcW86vCfGzyzeLeeUZ5i62nGaHa75SH6oA",
  "key7": "ttTM528Cuw7heSDdJkycBGVN1k2fgDTuqne5Dy8p9kG3DUsepijAtRKcKtKfAmosoeCzynhWPFkFq5ghQbwa3C4",
  "key8": "51ZsA2G2RMjPkfQQZB7eU9JhsuhovVfc5TnPfNgFANn2R9Qj5SkyGBwX2ZG17ktWikQrqRtRQrtK2KJBbvG1vEBR",
  "key9": "5XihgXVpktdPXzNVPYvvEXweDAqrTUAvuaE5tYhcbTMBmSzNMe9YvW7p19GBKVCfQsMbLgPy6FR9DxoHpuizBKNm",
  "key10": "2ynzyAbrmVu4cumznZeJ5PEcaLQd1rq5QTqc7ugQrEoG7nMhDjws1DcuufqqYv1XwdKD9AFytpdzQ7hEFErBJ62A",
  "key11": "3iiQHjSppehMBa3GLXEdz2zGZoxtK6y77mwCUYDUoq6HbZqgQ6Q1PVuq2QRWxx5aGEB1Zcyj3m9J8UPwN5whwL8f",
  "key12": "2GoBD5PRTAWgWcgL7jpHfmiHKy7WwXc1vHHTJaQj2UHnJ6tiQo4Qou61UCD2RB7oYndw4VQ9txMds7xTnJiWa9Mw",
  "key13": "2iD7PdrwhQf3eD3AeMv8Pbozx3pN2ZH5TUauEti2mf7zWDpgCgKDKwVETRqz2CP5z9RNVGZ9DA39tBfbyWEmadTo",
  "key14": "afKVLUifknutEpBCuA49n9SrUfaDBTEVNAFtD6uTiMg1QSFcPCHkRBbAD4FnRzJ2fr2KYrNNuhktC7u4RztBfQX",
  "key15": "5Zor4ynPuhipnDBuQ3KuKCV3MchY6gFQiuTZCnStf4NtcWEsjyotSRp34Qkvdcn9TsdzJrxr9LbhGEhzHTgWKRtG",
  "key16": "3Vjab5jQkXEgGenXM2eVH5Do5DVk3P59k8D1gJ4pGdqg4oVenWuLF2uDKW5MYgaoCbVKmW66y28J5VQkn9CQLxA2",
  "key17": "5Zo8E8JbLDykTNcfN2G5TwxkJiDZHiCbTf6be3FrQoS4yX5QZiwaAYDB1fGDQcpC9zi19dGmKKPJi8Qq2EmgKNb",
  "key18": "65aD5vrjGPpAqXe9V9DgiXhenufVQ6FDyib5eqjBJdqhW2WAuqZtFcX97aJt5vTc4ygnPCVPHejzsn9CpMBTuUeR",
  "key19": "5CHVrRQSh5tWkotBL7oqTSVtSuWMX83Lx78GgkefLziWU2XkUTi5crgMKUUB35SWeqqjjhhMdrKSBvHDQnCfah2p",
  "key20": "4ShuZE3eaapKhNychwWAEouXD19E9if21dtFGC4FFGU1VxXgvKU3suaGMmWmJfvZ1covvyKYTSEMBP4LvZo7EcTh",
  "key21": "r1nXSDoGYDNniKrZhr7VfEVWuJfrgwr532i6d7KcT5cw1zB27dKQrihbRArYmCtVaM1w9UuRwAqhB1VzngKoLxC",
  "key22": "2V8bSRV3JuAtbmDvwCMPMTEum6iaKFw41JqrKmFBZnHEZyPFjzbCAyv8ugi5kNvptPZyjMbHgfqo6soaaJtzr4Bs",
  "key23": "2pxatLhLheUdrSdL9XiNW99mNJ8DMYLaL6ri7bBUT2k57piMCQNLPCDGJfYaF7cDd9oFe2jE84CZyU8qqJ1AQbbe",
  "key24": "5243WxrGfVshxrU4yENAMnmv9mwJe7WNcMkYfgz3vkwSFVoc6V8QVoC6ULbx7Nn6Dhn5CUN5J5NYch1isp3QHGSw",
  "key25": "efraXcKLM8f8gmK1oTSnta24ndTXxNJb3HEeMDaXcbLXqvZMbxHwtzovrpftjDn96o9FY9BJgWJwXtuhoyHvE8E",
  "key26": "n2GJHnLMp45FMyZjNykMajWqpnhfGcSXHNWBmttPpZ7QzyT1EhuGDwz7QyJvyQop4M169637niGg9cbogdYqShR",
  "key27": "3A6fAYn3VhAd6qJHKyGYqtzKQkW7zUsyzWRdVXEjv84rkjSk4WPS3R1Hd9R9UoXMeM4k1YiNR99vCxd3feSCjs7j",
  "key28": "5qfunArPH6W57EXkmu1qEB2pVSVCNQtMrQdt61D121BTJLbSfo7mR9vEbpZwxCWZsX1rt1D2e2g3fWNYLck8JBdH",
  "key29": "32nsxoudQJ81FvMbCi3QrUiAXbJUMaP5cqgJpwJ2iSaiU85HvrQqdcgwUeiDfvRZv61T4ZGXXSQZ4t4eFQHhgFDU",
  "key30": "64UBi71MZW9mGRhcYbR8cmkMwrvrdcoDNGuFNptuj7xZWUwvZuViRoQqHNiUq94fnRy18ZkjyvRcDuoSjAsCK7wQ",
  "key31": "5YY2SzVT4uYHUsg7KxWNehaFaGKMdqoyDQw4Gb7v8kBwMNtRynvxo6FnTAdGH79f8bZBgZpvrkXaxZRru7Pj72A2",
  "key32": "3Aq5KfM4YFyrtvxWKf7FaWySRApKMBz9974me92pdTwi65tF7nVQhE47mgLjU1RVQqatu6qZBvfEcUckxLEn1LLr",
  "key33": "5EMLaqRG1wc629mCAmbFB5oyDsM1jG4PcryXkveiLKmD1cFu8QfdtkF3jikvaY3Ff2iZysQCuKRbkirZ4QqN3sZg",
  "key34": "2bwMNewCEmZXApiJDVcQi22Y682zCmgVEtWvRQTcR8C6RJxdVHds2niv7LgzJgnwULSUjqa6Fm2Y4AzEV1oQXsQS",
  "key35": "MAKqerKD6dgPxBkKU1oeshxTvjFfd6ni3QBaDVhvTYQYH2nZfEziMDWenZj9GT7EZgc76TiDq8ujBSyNrXe6bUj",
  "key36": "3cn1rw8yHNrDj6aGg4fgXJzvqdcxhXBafMGiLFxaSUoTCGy1tU7uoGD7S17MuHEkP5DFGe4vdRcmdptLxHkBKedC",
  "key37": "khFDzuKqGriaczVyYxtunKZaQsrRnvKdfi1DHjykBPBFjUSWf13wkaj38ff2o8uVVyvJCbZwhYUwuJJuPeoMo1H"
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
