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
    "2dMmB7LEP2bPJSZfsDXeq3CiAjCFvBP7poQUPySjJEbC7dQWQhG1X3LYTqcDpoYhAEzBFyxNvcmbyFQe1ALriFiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32janSN8PQEz1m1BThehfrjaPsPTRktdcnCN9jE3ZKVQvgRKMtRXPQkvHXEo1YfbMX6Lib7wcw9PgSNHEy1A7ReT",
  "key1": "2RxFp8zefiFVzdtDAMEZPGYh6PubMbAJD6QU5WwEXuMSsRhXL3Gu1QPPbHhkZtPPuu8rDJLcZWwPtnqqT5fc8YKu",
  "key2": "2YGqizKgPrgNWArewhxE2RYXvhpzrYyjA8DDQEpP1ZzTpx6dnMxtjPvQffuDbYncoEsF5siACaZkBzVCDc5dBPgE",
  "key3": "2bPF3NefTL28HqRXT7WCc7ckzsgNHtQsn8uRwYK7UsHwLCaFiiNfhNV9XjYLCH4BkPBcsjK4sYtM2xLDqnWyNcFv",
  "key4": "31EAMxjs9e5zEhdWpmhW776bbUUJySTxbwfbMVLUNeu6e5i2g6ogJTzQzNSLu2w3NnHja3kexfRazM1Z1YsYPegM",
  "key5": "2r3uXgbQmJ6Sg8hsAiuH6hbGQBgHj8C1VJTMxNmxGTPJ2ZdK6nA7FZb27ibEdKkJASEzHFXyVvuq36VkWCng2q7x",
  "key6": "2Cgb3T4vtvrdUhWGJhJ4SRxLFtWK3GAGnJzVzf5iuCHT5sMeuRi2yw6CPXzm84mbnzhXK3Moo3JH6YCWMTzvba3X",
  "key7": "3nakyEkjmmoe7Urs2Sdw7WDX9kVCTwej3ceumNQULCzHZr5MxXD5JDXQkCRcAxDeAMsAcHBiHrKR9zuNP8SW6LQN",
  "key8": "3YpiBLuPq7NxEBxfnGBdjWHPHAcAVhmCudYC4czHWCTfWRCC8VcSexuJcqDgJhgKX9DDrn1yJvCpX4vyzGuNnsVL",
  "key9": "2arnZQTG4fP2GRbkSUGGBAYSorvpVCCXDkYR8QcqCao2Egc9mvaK81Rm1cir1P9uEPw9NFUMU97vzWWDznfYWo7m",
  "key10": "4AQ8rraagikwuPgi7VbGkXdtx9YfBACBqsXfx9q5fpcHQ7HkdCywAxQrBNMPk7BrraZoLToq9R3GwguVNeAWKKAg",
  "key11": "3mdw2Srb2afTuDydNwQXVUCVTuExhco5ciB3pFCCYA9RA4uvSpKNX9avpnREnGUmLfhJ8zZpmAqhPFdPEaARiCwd",
  "key12": "2MZyzKtu8Nmv8SYxgopLVcs4xAjr5C6fpmFREvtN2EEb4wqD6AjP9oxEg2hMF1wq9qcLuSu6YjCJvYXRggyBb3Za",
  "key13": "XAFQ8Zrx3opRqi2oGHSrD1DwutUWnrEi6aTHowY7kTyWAd9M8RrKiE3XN2mHFWpQHbLGYrWos7kNaYaSPXeas4D",
  "key14": "3gXMGCTaMmXjMhyD6c9RVm2oUU5kn6DpqhmB8reFUCCS4Kxt6NVEjj82enpVmePsFTgCeaGHyF5aFQ8Q86CiD1bC",
  "key15": "2bMyrEe7oTDeVMofv8QBzhedDxdwEJFdbW9Dg2cKT4pLttx15G7ufLvBtxLXqCTaTWd73KNzbAz41Z4Sg5rLgYn9",
  "key16": "dAVJhoaxxCf591PCZxRocTZLKJwd64vAYw7rbeu4WHoACuErwYTngMUz2CxwosZhzEnZdJy5JpN15GqZZSvyi22",
  "key17": "xd5BG3v7fc5YTyhtmCdi9Pj5UoG3yGcQ3GgyMiUYsk6QCVnz8ydm7BFj2zvWTH3pfukyLM9UL9cUdggPzTJCWq9",
  "key18": "5kmUf7BaVbag65fCxC59JFtp3kgvUf66hgVjo6LKcrfDh7MXEH5Kf5952skoMk6sAZRmtKEPji5Ub44mKxtmqkWQ",
  "key19": "4aEb9rTWm2FdCNCV5gbrmrWAZbibTdS1eL34tdV4Ds47RJdSAUsTxN5wJbzMmvw7Sq5Jb54ZJYEvBBwLEp2QZSPy",
  "key20": "5LNUqXnETDNFFS1BcPhUaCd1gwswTyUqjoSBVZZWvDatngkKbnBunrwRfaeUs4a3otLEBN6jKycqtzntVabEVGLs",
  "key21": "5KD21igyNJNtYnmVJEc3qYchRM3By7UaM9bq7QfKWVRsYHnQJykiCVmGNF5PsQRevyrTaJhssQyKcum2YnDpRzLd",
  "key22": "3AmKNdvWYgCoeZC37GxukjVmFBLHkbhp4jLQvX5dtSLZJDv5PAn5uLn7a2BhzhvZ3bkXZ7wS31M9PiRfsxYR9Hvy",
  "key23": "37JADG3R3v5g6cfZWa6P35Dg3bWxSCmP6YT4bkyJ6egjsQPnv7ENJJHLYfENCUzrWDeNvYMedy8as1bTxmmTCWVN",
  "key24": "2CddpLH5t3wSXxxzP5wfRce65EkZbXXX6baCkucBeWcFe4MnVNZaNiskbdhmQXUYG6cqo9LVCEiGd1hzb8pbXmMw",
  "key25": "3T6YeeCUd8XfvLNC9PhAm4UVUsPhqoC1EdqUTh6VQ3hNkBC8oYdqVMe85PpKktq6kSktf1hT9fVv3G2xjSQh5YcG",
  "key26": "3Ke4XL1LRFm4vZaZ1nDURSaFUKsGSgpEedppE2LSDLHSvqbHdCLvWrrFQF1HDY3oMRjPvvrrQGzBkkLKBGoYrrqa",
  "key27": "2e1f1qNWjzYicj8hqZ9HAFWQb9RqgMqv8G9U71aXW1wJv8gbxut3BtDWAiXqLMhm5WcHRAF5XPTKNFvRNwN1koz1",
  "key28": "2wAVtRrFq4KTqc4kpAEJ7vGrVAbUUrAYYf7BKpVEyEGqheypeRuSRV816puvUk45CZFaxQGUokbFgSbdo5STETff",
  "key29": "2TRsFq7BxhFxnVNvfx9cAr4XGiGi5ExLoPSpWNB58s1adWoqYWcLns8FvN37sL7RUYFTSSZvX5VCmWtrHT1moH8F",
  "key30": "2yE1qzp5Z26d1FhUe8rcK11cvGeq4mUfNiE4ce4gwW29BXHMWWi4H8Satt387vwAuFkvV4ZnULziV5d4rEyKqpHd",
  "key31": "5g6NgoxpFoUMPTw1x5tbXbhV59qwPkTRMSBECDvph23CHETqYVpd7rTquNBMHjzvejQF3oFEkdqQGp7vBgwe5qHy",
  "key32": "5v7iNBcxj9AZZEnA9F6PKKE6ZSnJEtfQzbApVdncrQ5WKXH6sQHDvtVdLY6msCpXn7LxHnwFw7UGeWp3k6PjEKP9",
  "key33": "5UgVjYwBS7e8Xx8TPZKZ4BD4Z8pYwPoDkPeeJcCSnepv6jo7x1ULk1K4nrfUPLjkqrQmrKSTKG7Hst6Cqt1YRzR7",
  "key34": "5eVKjWBJ3St4FxggU9jr4LGVATPhTzLmAH6HtLTtu8cX2efD7auH5xFVjGRS8otfkXaNhbYRzqZiMH2tcwKccw18",
  "key35": "53cpj1VAzeWhUvTaf2apKV6djZFsXBQe7qR2u6EGSPeqGc2YyAowQVkBXsbEwcfi4f7yn8W7o6LnXo1j7jksoWHW",
  "key36": "2DLY2VSpPTuPJj1JN8RAjw6tf7hM5CeJMS5WTtLP6eWFq7FNWpcivptdWN6kKZ3SDa6KN1zRgJxu9Z7KSTbPPyM4",
  "key37": "5RFUcbFzHL5nhFANEngjPnGCDNJYzVmnuhXm7KKszJUrXYw9oCAHKbuqcfyN4N1V4NJ9F5892ugugnTG2zLKYJkH",
  "key38": "5ACa9q1SoQPQ7gBMZVXKqTeVgH6Mia2avu2Z87qwQaEZySLp2ZTHiv3mzeDGTGF8VFkM8B3iKGAQckybrXr1veUq"
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
