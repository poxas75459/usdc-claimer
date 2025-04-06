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
    "xNYmgUGfj3pQQDtaByNZM3MBtQyGY9vLnft52bnVYy2oeoWJbc1BNejp4GM97s6DiWt5XDZEQLNxsqbbFrf38hP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42b8HgHSi7D9qhuEfa4zeovRJMRQyzo9ZtSs4AyXrkqFNcikL6CR1xxj4jRXsnbddQUDrskY2RcaAvbtPZxhYziK",
  "key1": "2PS1vXpUTP5WSpN7WA4aGq9NqMsvJrWmeDeVQ6YaMv9NRxq7ggvn4W59x7enpchjis4qyL5oczfLqmop5hE75dj2",
  "key2": "4ap64qV3bC8JwNHPMk8yS8AsdGNX8XkveoKUUov2DB2wPkxVi4sjXUThvqcmjzkYfpiCdizi3qqTysaLaTXMsiZW",
  "key3": "4U2skMxnzA5KM16dHVLcy36BsoFk1ydG8cXuMpgmcgzLpy8BAuXsfgynvchDdRUb5d6m5bwiCtF1aFEEb77UjC3D",
  "key4": "5eDcoWj1mjgsnkwYQpirphzRF2WMT4vSpU6eHCk34FGhUC5aLtjCsXDrDajd9RbfNV3F86SZFJyfVWSWY5HjrWe1",
  "key5": "25zm7kWzA9NUoehi7YJ2viLd6LFTi7pBKhsrKraV4HrBmSDfNr1xvebKLFa6mBjtbbhiBpmirVo13pB4L3152bBF",
  "key6": "3KBSmgqaKCi3XuCt8cq9222HbQi32e3megcqisPvr5KCsDCaSCWRn85wetGM6syYsB5i36QvU39Dx45fPks8dewg",
  "key7": "63G5dwJxm8Gyban2tqigqAhp8BMh9hi23VzS4YVXt9dQuQDVaq9j4uDrVvqAcDFcUfEXho9Nk8G8TgT9ai6zf1Wv",
  "key8": "4NVnBaHTw9x3hPKyMMKZ3WS8HbYHvmTbxyK3C9siMS4kWZefLnhqswi8pbfqmrvEQ3vJ47iLezeYUW86pPEgkDJ6",
  "key9": "2SnJ3MzBSink9hvXfqs1qKPnSiLPs2Tji3FUJDYcK3eS5RvUnYWyakZu97FJeQR2C3zqbpM4FruUqP1Ly7JTATns",
  "key10": "NfYG9jFvfoKMCLn4a9WtU4SXEhNPrriPQb7b8DEUaChUKdZkgBNAXLHLoSRhRvVWGe3QK7SDw4NuFSn1JaoXiRG",
  "key11": "Go8G7p5RQkBWJ8cf2pZvrGejYYQTzepkNgfXphERtiQ29cJBkkya682H2aHdgMbKw6XfEASEHABswmyUv3suE2h",
  "key12": "5fuMaSJn3yWiSjPEeCsNt7cMW7VPfmjQXDaqgWpWboBRDwzGvcZv4gsc8tyy1bypvWY5mMEPwv2HsTaHGQXbgzr3",
  "key13": "4bRuhGt3vrNz21vFmq4G3x2wNNQ8v62otZn8BTVemVx7WrXWTPEV4numLV5xUQEcg22qczaVVJYgDCL6XVQfqyez",
  "key14": "kVBAJvZMBjsVGGnpdqwNHupdmepM2YNs3nvM4am7cvvFn9W7zahyzLieHiAcxXuNpNRNsk2m3xFbAiF3GtPCaaw",
  "key15": "Kg1As6NY1sBgJuaokvpyeS1Kg7tUfakhiswcTSgZCqiRDUDeVeXPHKqf1JidoPsnwxc7ctBJJdiuAJ96FWnPvyx",
  "key16": "3QzuZczcAjjfAjb3pC3WZvwJquWEVJK9tURcwaVBssJ15ESoyB4GG8KZUErxkRzqJ8WnTcWZvmtPFUAsFzqfuheV",
  "key17": "5ZWqUhEsswoqCuV4CjGVVoVmid1dkTNTgZ8cCJ7Wh2dTZAFJ6HQphTzXXGppoFJnWkEMr2ssVbwg4iXc8RU2pg9h",
  "key18": "5a8zsYhh78QT4wLK9uGG5iDiee2mrKQdNy9D67ph5PRTLAiQ8Z3twjXW72hJCs6cgBWWrdJibpwbx9qXQSKpuHV",
  "key19": "28pD3c95UJ9TgXF5gE5qhdY386iJL2eaS6YR7AzpuCx1A74ZJMqZkdA1W62J8NPkpXQbDhPRi6h6gruBwDR4BYyF",
  "key20": "2CMUTFcwBJcnMSgaHucJTFL1grJVvNn16ngMQR5Ehv1WnEG2ALafZtyjU8jgJnzxkZ5XKxrxexmAc3jQ7ji3zxS1",
  "key21": "5kTiaZYbLFjRF5V7NLXhu1dSp8n2mojicEHPo4NM618Zh7z1wfN2GxDcazAdRqjZtK7qayyuPEHnuFUuMMMiJmB8",
  "key22": "29rBEPxmCth5PtgwLCRz7RRkVkcyum9uJiqpcPo9vZfDraMNGS1FQtt6dYcyabpscEWunh8zsSffW75n39q6NCp8",
  "key23": "2CnWjAa5Z3JdLeM35CeSrqEPCaAuCzCG8Fiu9kRXqvmZP2Kr9ZGARCVZoH8xtc4bh9ypidKHtMmk8KoAro3S7YzY",
  "key24": "52h4WYxjSSnDEAVuhh1BaDc434Z8LVznyysWx2thDmyTv1dC8qNH9yiWDiUXWUGU9RLtbPn5bGEx9qpQ8m1PQhFG",
  "key25": "2agxNmpFpcRwoGJC88H2fBccyyRTxDHUGZ8mKq9Kjcfku5hT833ToFvmfyrs7cMpN8e1zjy6Fu9WpENpPSEeJnDW",
  "key26": "3sXEbKADBXeNLsWUrLVNFH24Nur1YLaMtnsi7B5PiJzu9VoNAxfWjo3ZwgphmKeuH6XYHVUjdHdfqXCsVgKD7DmJ",
  "key27": "5ghs3ESSyHeHoJ9iSQMTFfjoHnMpWszceQgrxKqp91YBodDH25vz4WQJ5GxjBd8kDuQeiSmdbxdmnvyNA4FbpCuJ",
  "key28": "5FwzJAJXTd8598MGtbs4R8uBhXCu3CJyCi5ZdSqL59ZRARmLgwLxHxsddhhGTAfyTJnqfVF4kx2MFwfVZbNjy975",
  "key29": "4Vp7D9oJVd5De78iMNS64wRKAACxmJ9ihMhJ4SBAEaZdXziRi26gVUUQnQVykP93XH3mcqvM94XGv7EEVswJyCjF",
  "key30": "5LBK4jYtry16HjoXbGgPXUmd5AFMGXhsRCi14kBRfYwJM4WUmgAXHRqU3GpWo36FFeSgS9MqET34c2Nnvz99vyz1",
  "key31": "PqFXp8W9GUn8bZjCdX4RHisYSYDZJuMDj1q1LQwMETehBcQadCxbYCkrBXUsPf4v4ZS6iUoqDeBbjmR242LJQQP",
  "key32": "58Z2wr9y81ENXi47hhZWt8p2bMYaWmY9YhSMoCPBnTTRJJs7ARMw17MtLrHG17efALJdDLrJXW5Z2MDgCovRMzSV",
  "key33": "a8jqN9zhGWu6a8W5NqMqN5dF5x5HPSfyhxq8hHQ4JGiWGYc21zKzq4j4EZjPNQRsyRRHjBvLhTkCr2qo7mbv2MD",
  "key34": "4ABhCneDub9vkEYsP2fYdKp93W67gqXDHG4CNDcoj1QhSCFBQMYPFyhiZKU4JjqzvLXCmeSQHGWGreGMAQoM55v9",
  "key35": "4A32yaArpLANZR9oUp3nYtg95bJcpL6No467FKe3XVgK5NNanjkN4FLiN6S2kG4SigFHVskdR8b2g2D45y3ZVRST",
  "key36": "3KjMMSSkkQsNM3bYXdrgveCw3UTtQuufXCCStan5b5g7HjnFAmeZXFVMDFAfArmNasxeLZaeiyFBSit4xY8NhqB3",
  "key37": "2Qneeu69hVBhjt4KiQAonzKWP5YkisF8nCbjPxsQ8b7uVejicCqB2mjeCqCXwyeJk1TJXmNTAyxTvV5RveJUJxj6",
  "key38": "2MywCo2St75s546TpxDpnZ8pxYGaKHKGKWnnMd3c3fJKnjiksjSqXBXqE3kd2ADYwfKkQj5mFwTS3B4Fmdm7gxrZ",
  "key39": "3JPNAWEYd7StdDjXiUjPeWDztk3d4avJfbA5y3tg2BtckJH7RqvhQ7Jq3kWrQMmyA7bdYHVZvrGai5RZV8j67W6M",
  "key40": "3D81wnYW1yqeQVpvpwmz9PWmn27RC7oF1a8x4tDhpMLYRi8cdZCYXjfUwNemg72H8MsF3S3DNRt1H5eDF6qkSvqL",
  "key41": "21dUzCNEvU2qeoj92av2J3XfjC7e3oC3MjWDKZYfemfpTf1R2t8f8frp7sjLnkmHqG2x7uK3XUP1V6tuU2pxkPME",
  "key42": "NWAF7z8Y8w4XX2VNdTJNnDS4XFG4B1PrUSxcXMMu6HwAYu4ZQBF7mR4ybyXA8QyKHmToVq3zeCH7B4WmLShDmTo",
  "key43": "53vHQ8kEBFKUJR6ADQUkHmLydzKYMUyxTztXiLyErpdmqwGgRmDpPEKxvp14UnHQUcUUsRDJnbV1S49uWYF5CDwR",
  "key44": "4qM2WWjzwVp1DPQJquddM9akZr5FGbuNRYfgeJ1XP2krYeeF7rphx8ikb7PWPtASGYZLK8UkvbteUW7DFL7QWBUc",
  "key45": "54bkgSkjG3nzCj7NPFPantVtRJah3Gk79NkRJ9hiHGbruwLzrNU8o5UH7Z4HkAAF6Ua7Tq8ngtzqycV8bKtCCKaU",
  "key46": "5cKCuo4YLGh391cDZ4M9QxCRbNVQuMsFDfzLRVZbJJqyjayVGicDJZi1qTJXHW7RHEvCKZPPAg4aHATqtkmVSdYS",
  "key47": "2JWCHh52ioGXfZoChyb4UaodeGogZ847x2ZpaitJ7Ao5AV1kEy7fzsQuCTGpLceLbJhZ3RbTkMddTxgoqYUrW3pq",
  "key48": "5UeGnQLytQt6cLenfDrEt5M7y7PUrGNiwNyUiJJR7k1fnLXytkSK9iPBuWRvJsvzXefXTcEn3eJyD9no5bmXcKhZ"
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
