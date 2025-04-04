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
    "2ZRz7e7KkGC6jtTimjM53EguxAUW4ZWGceQP9pJy5KS3vH8YBMYzqNA8yGqig651tf93998Vnh9bZbEs1mUZHvef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c7vzgMFC7yXiytJYo7c7LsuN1PCC8k6Myx6Sum1fnjavRjWfm9msLZtnJaga5jEiaXLjkmYh9quXPHNLxJ2kaJt",
  "key1": "2JV85Pz7iMGowxH7EEx3bFKbvuzMNdkwfSJW4nEKBqhcATcMyPz5R27oMmkDra2CbzmteR4utJysdZg9KBBvR3nx",
  "key2": "5gxGdK4fLoR7eyEap7xCCeZYisNWDBBHNAdK1pVt5fzaeaC3TCF3LrrMNNr9T15jBnveHRPfveawryT7GQdsbMik",
  "key3": "3J5UBzjSqEq2c3u97hBrKbusAPL6WTiwLBe9ooWjABpzvgYTzshCR35UthC64iTRXiChdPdENUvMBYCxwb5hFnep",
  "key4": "3BNxY3awyJZAihDazMHRs5JvTu33dhrfuReP1PG1omiSZxWQenHpkCsmDxXxC5wFqMg3gKwwi4ryXLiXDLCUX1Tf",
  "key5": "4Pam82FTH7F4C6pRMYvDNmaHQ1Uwv865nBhLicnomG6cNycWeXZ4xFxj1fDBAgnucybPf5KjN9eJbP5MLugsxYNd",
  "key6": "3Nrp2cc1UsfwdEtELzPa8E8uRSNU3cv7URGcpHUqZqLJJRupY8v3UKmZJWhz8FkwTajC1K9rGfr5Rmbn6uqP4ahc",
  "key7": "2qok7ZJHyP2HueU1tauBTyHFe4bNv7QsoiUZk6gey7isgjcM7zycUZVhUvQhaAdooDBn3n8jHa59vcsRmGdKsbG4",
  "key8": "3FLD4tscqRuzngzSDT1BP7K2LhN941HqvzhEs7WmzbX2RxorrsfgzR9Jf7YXr8BBDSyCRX23gxJmob38XUzq2WcX",
  "key9": "495yzuM5GUfdHEKjwq3tYoCbMAXM9gTqUGEpsPNmPAkcy3SMfPBMymKpbpPyVjigxr1YSuZ48uUtxdSvrQSxJaAR",
  "key10": "21Mzb97Te8WDspQJN8yh57XnLRpv3EQ2Bbuk8qc5voq2TxLKHQM74ERFiKRxHBrwebyb7WDC91Q4Zy8hiLeGMJvq",
  "key11": "EdDvfqVgEx9NYuDha58zHqdZs8Bpk8cM65RtkejJ2tkkt9CjMqC95Y3cxYyvCETRjfRktkNYhLd5jKuhXFvzT8x",
  "key12": "5caubNvWF6jTjNpoKUD6f4txRuBYXMnNQChXQLnPmogJ6LovFfaT92qVJmLNxByMokRVEJohtKyvdt9Qd8LENY8D",
  "key13": "5m5HsgrEYh4LuC9YqEs4r9DrtXdoaKxFPU3wtXdeCDhtBsbeLAYPNp2L4KaG4trK8Y94ERYoBbqpbv9CzmF8xPCs",
  "key14": "2qNfKQqhaBncAFPvEKvBxUU8MkNMwYiQrSCMM1V9VFE4pqkK6A9FKAkTHXLNnTdhiEqb4bbnu9zUokDqJd1JPiB4",
  "key15": "3L6zW8R77Nutbtf1dkxPUwzMTZMb2rsW1i4pXUasnSG3tBmr4nY19Jxn9vHYPSsenhbV9nj12kRg2nCy8C9qSpYU",
  "key16": "TbZYgm8Na5pNXyz9PXuF2A8HvRCjjJTFMkzjbxBg4q891G8DQG6ZZV15a8c7nZoqcRBbcEGyrpwabnqPLobXafJ",
  "key17": "5eQ63weZ8PVWxx7Cdjegajjn3Em27a6jdJXoL1fFhJ9eQHjYKXSJYouN7WwVzTxeTwLs275EuqZXMXEY6Q8A8x6F",
  "key18": "3gmF3YrRzUo3aGkCngHag3YT48Emjkbr6126Sno6f4Ysi8zmvK3TjT9e5YXEz61AZj7QQzUZcVVY3sKDytoLjphh",
  "key19": "fwxSm7BQDCgx4yQzJ7SDzJ5G5P4gquN97GPj8xnvQS4NRHeZhquwfARc6fUe7NzznsNLxJsqbpH9r7vJNPkaGts",
  "key20": "5mY1qbxSziVZS5HLqnHX9vNPVMbsKbK2uDPh7hBWJj6Gd24VyKbADGfMHcU1yUNbTNLpR6et9koKiYiij4RAUhn1",
  "key21": "4uRuK86cfiqWe4MNgoZCk4bpcx9cpU2ULMiFnDekSzx6LcpMh828MJRDDm9KNVJ7cX7uQoRXMh5qykBAUKrunnPZ",
  "key22": "5RoeHP2jFcuzoWDDA3y5G7G5DUYf2QooFVHfUXeiBTLRTKYbAguQhbEWYnjEojncqWGtiXVbhG56nKcNFxfgQtFM",
  "key23": "4PSgPgq2Teb4wAvXWkixqUUtcZoRfWWSm2oqTW2WHctLn55jCTXp8zsnrzupfgTXTYCPVA6UzzL3Tg4mPwaDpvZY",
  "key24": "4BMguTnvrbzfC1XL6r7fZa9Cp9wihRiL3vNmdQn2442J1n57HoYsyiSZZqMF9CuafXVTQWqdPuXVk2MfHxyJzLGX",
  "key25": "2xDYHyPMXxHsrCU7zEkRgkiGYFUMNEufGUCcNSBbwf32gZV8NmTE6hFo1NnCUQVGF5yj2EehNk4AovMb5PSUG8nV",
  "key26": "31aoT5NfU2isucCM42BkudpYw2b5KEAGZF3mBTQm7U6M233cca87mBNNWJkBUtSLoARFMShpoHx7jxEmA4AoxAJg",
  "key27": "5XYAZGJVACj3wk1w3AkRuetEWwNSNY3U33QGEiLNgVHTGxuNCfJ2SRASRJY6kDSGf7arm4aHzjokask4PVcLp4i4",
  "key28": "2eLXX9bozKPbBbEAhvRgNd31hF7tConYagWemWJRKo8hZaFwA5KQYpwGJh8aPtSbpUZ7conmY49Mct9qDgZGqKjc",
  "key29": "2ZdEwx1zin7nR3HXw4HHXjYnHey1awbz5UYNV7ztSkDxph7xGvN95Ryx6eYum1dT3bQoXJPRFsnP1afvJuoAZnak",
  "key30": "Rm2efWowDxaZQ25AQhfy6DUioFcLfNAaZc8gzjgAysrAKJeqB663XcRbpPTvxjZkrXkXZHWK9MwKbYZzb6r8wCr",
  "key31": "5tFWYfnUvqFcDWDijscTZ9NgwynHs8XkETuQvvMEN9gYG8sxMu46TsBNQjjL1Be1x5x5P7U8j1qvcvinF2dYWb1k",
  "key32": "H2jJAa9ktcmnxm1TMuE241q5Wk9KPcv3g9kV2TXeyZnY8CXG1G2cy4JF8WbpkLi7WeuKP4jEUjfffaa92MwJc9s",
  "key33": "5iRVBUecPkt3zQWxXcV7dwmaATsfyCdVrzbSEqv8vhYe9YpemSQnZBRS4Gre5Q8vDv2rtPS1Bo3fipkoMHCDyDBZ",
  "key34": "52c64o5chiU6RhFMVw7YcFbqeXGyoVSDrfaXwSMCTcLn9p6srNLvUQgsXtX8HxkNutGDZpE6MpMPJgUMGMmnHusm",
  "key35": "4ET8LyWWEKRvdQpQrVW6RWyeNWYAEK7dpiE5uPRnN1zLfcvhX1D5w4tPUESw5whhCMDBBCvKCdF6Fi214ENXvqGC"
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
