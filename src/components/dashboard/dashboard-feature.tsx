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
    "4E1XxGhYn5MKXFWfw6i9SkFJafz3CWZxnu4WhZfNiwqKbcXycfpTKi74URGqhYs5LpR4uRFMTAB5ZdaqLDV7QG8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yksanoByWsvwg2kGcrsUEUbf6CMwjBSGbURKVG4MQGc529Cck94Ccixairr5TxQempjMaBtMjNSf675jg2Bvjwe",
  "key1": "5qmossNCZNyMLKFBLrmGoA6E6SDRgk1TNtgtzodNDF74nw4qURiY4Wo1Do3X5s3yK6tyfMgEVSrdw4TcccXBRzXe",
  "key2": "58BWJ8nFt9bu1YoBAJmKmL17497GqKa3qzEvYRSSgZqSQVY5P9DUBPF4J6UgvhwnrhsrPubgo21CmRrzssXML1Pr",
  "key3": "4PjBy2E8jSLFeWqYmaCiryQp8rtxzLvZGtTv3J8PwTNwk81FmeKkEdtsqADMrVfX7iVkpXzhd4bZCNXqzHu2nsgP",
  "key4": "2Cp8cw4HyhfGvaFkjWdoGiJaes6TBgd5y29NzmMxNhBfYUaJZAWzppUMXMm78Y2rudhBib4nRLEJaiPQJGcwLA5Y",
  "key5": "43HZ5GPnXTeoEPmByR1eduord1Q4N3u7H56C647Pe7JMjrj4xscBfqBdtbWHnGPfhja4grtwoYMbd6aVuCbsBHmk",
  "key6": "gLsa6t9uSzG3ZntC34REWDY2jEU1k2CvX4FTyB6Z1SXu8AE6ZWvp6dgvpcxH7JgmGU9krFALWPkJz4h6JmBBWWd",
  "key7": "3vrDVBmGgnxH8Jszcq2h3cwnV3RBtUSoJKFCccbjnYJoYyCW5N4k9RywGJ82PHuPKfzVFDpjsLfWtf3iwMqSsUXH",
  "key8": "mmU6xn7HbLCz9bUMBqFbuN4BLBZUrwWKi2PRQZPBwijnoaC2FNUSj4hcjPBuExTVFgqZ64sDsE9CxKpzZprDSZV",
  "key9": "2qP1dB4koWrR1kzTw8EBXSCaEjL9vqg3itFA9KTC7jjVPuTaLFumSndHqiNTncXZskdSYw9KYtx3qwGsLinYsd4p",
  "key10": "3tFGQ1dP51fcHWrXBAuEiAn79CZrC1P7jRawpwkq5S1HsQNjePFVrrSt1oAtbtU6vTwF62Ct3zxMoi5qXgWktH4d",
  "key11": "66TSniwvNwDDxpFQT7DQyc5QXULdbJtfho6PyoACnD8PraUtbwTjwPphpA2uNdRH791iVzTUqTGPbeSK8ZfctEqH",
  "key12": "SGLk1JXRrTjtjNxXJ6ffPuw98QwNQvTr5Noaco2JGSqjHqXALthnRwEh4dRNaPrsqqAPTxX6GLsV7h4CWqGsdYo",
  "key13": "3ZEs4exonYyT3YUy7L2F422VfMsCJUVuXsZkeqKdqh4vjyumBngKQEFb1r9A24F682Kxc6dXiHqCRMkFUExqJfUp",
  "key14": "3yJ341vRbbMpooraSuGeqQwCTCuaBkZL6g22CjaezjyhthTgF7K5G27ooEmkaxoNUyB2CKSjR612QEsTfZULEyz9",
  "key15": "43WBH5cf4jDDrD7N6n95GLYZDowQZ4WUuxrU7ix1spdhKm4zQG4woXUemVsnvZHm1brCJVaDgFsFNFz3NhJiB78b",
  "key16": "4VsAEqwf4RNjKMxen3e9bZRYYnsYBdEoRCX6CJFpDd8GfnYmJHkMcM9xMmqeeFzfnJuRBQyod4SGCKwSAGj8puW1",
  "key17": "2whWCYmT1aKYkuNoJnRFNuHxPK8zFGRAr6YVw1tKo42bYLfZeVQX7bfbaJcNbLGCxUFDwDGEexg4s41swRBdedsU",
  "key18": "4hZE7g7JH8TFMMzStVvf6RnyvoNcFhkTq7b7vN2ULjvhXBsBjXgFUJVvabDLV71tqKz9uzaSHA1ghf7C2bJe9Y61",
  "key19": "3ffDZ9VPPvPjboRAETh8XPQF6rMU7u9gq2Uzmpsx9jq5heg9iZn1CUd7aiUnYnFAFN8xMDMyGHFTBqj9fVk5FaTN",
  "key20": "2AWkqrex7bBwVzS3zbUzijPiDHJhE4WfPvKFR3Uu8GgFG62tEZsXH3nwDf78JN5uN4NSNaGSzBjhQcgJjRUwSn68",
  "key21": "4CCF1cidScGr4eB2js2bYHNka1aanJsZkdgVxJ8RnhDeqcyRm56HjMGBhRwpKmUW8LXTt42F2sK46VSvXk5L3p5E",
  "key22": "Sr6JwP76rvH7AJVSY2FeJzwQcrxcrBRJREYF91YgtMGtx4yXhQf72T9jmCc34neb5gAdJ9RfknGc2tUW8ZwPQMp",
  "key23": "52ZnfzfxkFGDePQNHy8U4xpcMmJchXQQwXN8T5EqCfyJ6B2TLzmbRh9nR3GiimdEKoMWBRFL9UZnQAgbEPtUYSzJ",
  "key24": "gHwPJTvuSSWtzxZy6GKuucKSFgQxzstnUShvHousxWHpZnrYzb4o3zpDSP62pzNPZG2vN6CUyiA8aA5RjV56Z59",
  "key25": "4aEmHMCsUJjVCfLsKfcv7bYgGJA5G3DZXhweotAqT7VjPuoHwfReBoLaX5KNXdpFtLqq42YdGsH64wStSxkN5wxT",
  "key26": "39psh9eo391JEW9qyMfCnNzHB3YMrK1UKNauyz84SUAzQosVS42FGTDNP8McZvLrAJm5PKTtCzYBPbc4UjHHpUtA",
  "key27": "3JaC3HUWuW5BraYej2xkw8inGUBNWUSaAQZWrJhW99zNxMF7BnUHn1QmJxaEwtjCFCmNDCPhNsynkjhdNHwDFK88",
  "key28": "2twc61DEAhsEGc8FgTEkX82Z7HBvXMgLDo9YZKo3B96FARRPM1KCY1KkLyQfz9fVgVZXV9YS4T3b7L85VE3KxCfY",
  "key29": "4Q9FkEu13GarS5rFkbB4Lham3feM4d3B7BzpJrjG6taEk15caPKYs5DpvnoANSpZ18jYzeoLFqAj9ce9dfVDpGPy",
  "key30": "21g8GhP5L2XFPAgesVeUh12ZTLZ4RYDtGgFJdBgTKidpE2hPQ1TpamgpW9LwK7yZaQ4sYT8NrppwkN3vzLBCEaPF",
  "key31": "5uvmmc5zmyonkE2XxDE9XTqAaJag5HDWpJ9Tw6EMtP8GpSRM5HjrNq8wafxRfwJ65Frj9JqqVZHT7VrCQ1PEm6hj",
  "key32": "vLk9drXYg96VYF4v3HgYF9bsmLVjBWVEkkhS2fp9Z2Hd8hnm3fbheHFcvxcKJqBa1szFPKnKRVvYYhj4eWyDyLe",
  "key33": "468bhFHPazUWj6mgokif62EJEvUZfvSW81qFbYA99Mb5jfMV9doyeozxTdhhqX6PquPiegimQiYuaB5VhcRLdjSX",
  "key34": "42SHQAC6ddTQSkmp7MwYUcTJqqSnXJZ65Huk6Pm6KKGa8v1knSa6Wtev73DnDHuRDnkr6wqnkQp9haekfSRt29Vd",
  "key35": "2gLakX8qw1djeSbSzDMgAXqvTUiiB4hoK1NC2gaEhbPuEy5tB4KsZDtBtqQD3jghocp4KNi4R1q56tjd5JsFNewC",
  "key36": "5xc75pm2S4VT2LQoagkKcKLnvyG4x3xDPztXmUFE15nEKRXFJmijBNbsr1XoJQh5UDY5j3zxwCxjjscsqFmVHNS2",
  "key37": "3cjci1uVUEMiBPcoYsBR6G3nFEKwyeBE7B8os8scaEEo6FNnWm6bf4xjQv8HWv9YLDRwnXxsuT5e2FFoxAVTQSh7",
  "key38": "5y6hyWwcPH7H2TCA4WnPmh1KaB91DCWe5SyS7t9M5AZvXaynAw2U8acR37wf4u5Gcj264bCG9r2AGcBqXsJ3YNfr"
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
