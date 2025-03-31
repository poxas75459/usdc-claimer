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
    "2vAuwsQrpzRWAqk5DP8oqRyY5f7ixWpCxk8BpnzHdvsnHtukJyjPWAdF3jCT16GmzbrYRCF72qrArKhqZ6j6jdRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z8eaSMmobRD6VwtS5xpmyZ7nQewAsXEvbqt55MLwzT9ipGfqivfs4PoDxSfwsrJo9zDKEodibxjWMS1WmVEpeJp",
  "key1": "49s1EABqZDg3NpKturRLLM8F99ZsVQpaQJgk1AeVKCbQpbKBwARgV9aCh4bi7XFWz8eXGE3qRgMoUh3nuBWAfgZZ",
  "key2": "4Gf8v157Y2udaNT7EVUwjjpqSFgKSn7pHzYmo5Chc4bSTETYppp37vVk88qGf5uBkHPJd3FgPi7fXH5kLQCuDPZk",
  "key3": "4SSAMTgxkmec4a39T5GguYDN9QVAG1d7wzgSsc9L2WYGd3JLs76NZwj6KQRbvW8yX2nQfdiqrFzfYwpyLwva43vK",
  "key4": "4ZEE3DPtuKqqprRUzsSaenivR7Cv8XjksLsGiMLvhKbqZZrepj9QWtueAsd8fsSLuhR9MBxzrjo33QB7a1KcoEwu",
  "key5": "5FTsY6XDbYbBCw7umHQk3RRqP5zHX6BuAeY9a6R1ULxASmrt6C5n2wFSAhmQ9EypbnbDp7YjWkgJwKDUwCJTNUp2",
  "key6": "2e3LXnJ5LywaHiVsmHrsriinx4GBNRpL99dcRE3Hx5SGh4wLVWGebEr6ySwWFYLVDugtmF6hWSvsTQAgZ2YkGgd2",
  "key7": "5pJwJScAzkXrJNRfPMdswyhGj1vNWotSmav2kfeB3xtjLhsgcu2ckke85KJ7WuoP6bLLedDSSzrCYMuLTKDXjxwb",
  "key8": "2Mc1AEQ9huRGSKZWh85UvzyzWR3VA7sLvnxFo95CHfVGoYCCi2fvcCe5G4ruAv9PHqX2oscfrbTspfjJB932Zya2",
  "key9": "2NdDyMPhuPR91nrkJbmjjeziMdxSeDqQmQ8XzkLLFPLDRGVSQEbcpakAwvv1CZjjPQmnYM8EfTRchU7DdzpUy4Xj",
  "key10": "499z1BdxkhnWG7Z2Kb1E4dfoPQbvJ3LwgB2ZcHorvWwTkQQPTokWF9BqSbJPQCNxuze69RMnCLui8UvpkcYK3DD1",
  "key11": "2bdU2cZaZk98SXJvtFvwxbWUPq1o9AfGzvK6fsFBGv9t4HShZMoTtAutUnyhKTSX11MQHZJnvL6vZvRqNbkLwQCQ",
  "key12": "WPJLGrgSRpNbCFrRy2HbSU69AT1tzSynZMfL5h9SkVQFhE5Gab1zYbDyTyB717atmuMjW2YiQTidekb5uUK9AuX",
  "key13": "4rVPqJ2HzHvpDF9DbaPMJccDjuVVcPr9cZdXCziXbcriuEEXssYAminVEzDDs9A7LJB65yitxK9esjmPQvN23yvS",
  "key14": "4gjfUyzg7isvNJGv4YgHE2FoA1CBi5gFG5UXX8z8AGrUMMm8fR7cUuWYLwBZvwxoSrnerVen466eiBDn5KJ56Xiz",
  "key15": "2ipRqNeUiD3cXsZ99ALSCk6GQhk8Jwz5FMHYRb6Rwq1mvPjjJ9MNVCmFvscR3AzASCQcFsxqmdYZ1ZH7Arqm4mqF",
  "key16": "4uAeGbCadTJUdGurhsbbmsry32yhAFi2ed8RZtCAWxsLMR8yz9N7ZV5eFVQsLW9aDQ2smqiQyPhXwEe9K6ZjYqHF",
  "key17": "57zih7h3JjnCC7sqjoAtihmfxeW68x2rtmdQB19HsoAoRWqZWvjfpkjDdNkn96QFYsADFT3ScE6EkvjN6bH8bMBd",
  "key18": "5JJKwseq3KK8QaVrrxNR5ZkCk96Rz8gbmKcavD4yZRKhonog4ZCngfz7cbtV8EG1G7PVdTqLNT4Ez6AHh6j68M6J",
  "key19": "5xKtSe3VqQ7FQV9xZ7GQf37ugEdxNXsLNC3dFivXnb5o4VrJhj3bWaqABxsPMtQwegWM2NAzaTkQ9N3zGSBhVmko",
  "key20": "3vmvpqth3H4BzMTE2b2UoLWBsczyUrYVraagoPRUE2XdCVs5CBWoLehKannnxeFnxCRAmxuNw7VcMZa73otvCugY",
  "key21": "3XfDK9pjwF3KhYzh5kLX4uftepxNWEkU74pLdi1ZeZhEcFMkP6HaoD51JrF7PdPDQd4DqyRe22hiZXNum56XxCEs",
  "key22": "4zqYyMnYv8LokuqnLw9s9HBDAxbxAqxuA9rcibFWZ3G89VtAmiTYGvQSJc1JGQBsQN4kKw9dNPbSm3PBnCifK1uL",
  "key23": "2snp3k4Ki1CrPE33ZFhELEabDsAYzKeABxi8P7SPU4Yo1Sk6zuBbuMuNgzK7G2ZiD4AQkzZCy7tG4hA1t7wpNYj6",
  "key24": "jd3wPds9ZHyHmKk3upaisk2aZT6XJSjy5xsbQHRRy69XpqWh2eNvP6HYGe8sYLfttNKdz5baT6DKqcoYJZV8Mi7",
  "key25": "32WuKqqhsBGuSP1kLvgHd1zb7Zu1ufCBNqiCznWFoJZJnvhJhd9JvMjFEr8wCswhp8weaoKpAvm5FA4p6NpSuBDT",
  "key26": "59xSXDVrhtraf59XAFBGfP7xJUwMzGCACYLM9mVfsJzVthVBQjnK3PcG5W8GTr8msYLBPMAjgenaoccwUL6K7iLJ",
  "key27": "2Y4A7MJZfUD9ZSgasfZAji3LUJpQTRXu1jXg11qhTpYU6LCYxgy6UsqvTtzSbXZWzGwLfgxKjzzMp6MECm4fXzS3",
  "key28": "3GCFuH2nsgQAPSq1EJ7vsVzN4QzjCideFjpysPmfGmgvP94Gj8EU6n5Z2Jr4jk1jgAfH79z4hZW8LD2uCDG5JMcs",
  "key29": "rJgnRBgWJJQQmFRESLVnbnYTJ9d7LKZdYW5ksGYquTETFXHhyF6JsUJFGtgL1rkhFBbiiVwYYzkwNxgpZcgjt7F",
  "key30": "sFjfGbLrj12nALbK6XQYYVJ2TzaPQKFpvz8sJ3CviypqtY2zYJyLW4pZAEtve5VA5kNErjYDCirib3W9xuoWbQe",
  "key31": "V5ib1y3Nufxa1QqXFX9wyxozojMBrAyJJhcdtahXe4QJstzkDLgE7CXkfaigpfvzToqyAksLeN3AB2pMm5s2ohu",
  "key32": "7geGxxBdA3pyqPGNWtfE2uCUAJyP5Bcpjme6K1ggpVyEYJHsdo1759ynC3TMG2jKcEh3Y7rc9U3uDcCd9ax7fC6",
  "key33": "5N8Dfp2KNsRLa5TqUW7mfkv1xUihYFaarwydLJtVr8MCNReot3aYfPjor4Kiv1amrTaS5jiMCFWjvwK9Y9wMPJDx",
  "key34": "9oPcKUYu6orGFugn1qrxhr4Vd6FMfPQgRSksPcb6x4CK3cnsiBihXfy8yvGSyhoRysBu1ejrgETscrCzx6tmsn3",
  "key35": "4eBbdYVP9ub5V14sNVpLYHBM1Ez28W5AntXvRNFaHHey5ZXzR43xR93GZXASTeENV2ummCCyfwRxvHJNGnSByefA",
  "key36": "3f31sFXZfKPt6PnXUX71DyMqLFe8GHcAYc3wPUjF65aABN4WfyxiSwftwnz7Gd4uenUNRmLm9PcCChShAwAQXtRm",
  "key37": "568iWh5LEVDaS9WcwTxEJEn5ZE57B5iLfTTovGnozDq2oQTkgoaEAmvQsEGZpuhPorZhzxSat5KDgvJLMjnwKH1k",
  "key38": "5wX9xwyPhrR4FecYBnFmhBkeLfszXum4kXuduCfnwpYqKkDjPtAAib9XfW9oqnUN7S6S5oNdMpzWbqLUBpTguQDw",
  "key39": "3DEodPX9Hf99VZTiAQmApHFGd6Qx5tZrEamTS6GCfRJpQgzfsDT4SkJcuMzwyX2QU2FJZF1oa1Duk2SfrfSQvqrE",
  "key40": "2UCm9a1GwwQ3JEYF7VK1FysQyVFv7R6SikQ5tFJPn5Qd5baynjFY1d2QuKmv6YdytFuy9VPQVuX4ER9qmNHBLvvm",
  "key41": "55uKn58uiedcfUjmWKojHm7BNkNUQeqVDqfYGN1pEDLixwpngez2uxYwaBrJUTwAoi23ts1vvVdKyfBH7z1AddaQ",
  "key42": "48wXZTagYhtbPjWXHK2D4S39xgK2AoN6giYGwyePnDEdUGeefiAP9Tyy1h7Fw4vt9qkgP7VKexFQYb5odyo3rw9z",
  "key43": "Ro48x8fSQ54bkqQpW8F7oYfVvvtRqW5x7xZARXCHQidD4KSSvW6wsBFQdwqhpd8kc5kVS7W2wRfJYBQ6rpn9Dpq",
  "key44": "2qCN1Qn9ZmWPwxPZTvo41VCV3USdo6EpQ159KNgS2QV7x3ALC8KLnzsYhdGgT38gqwNbeawL5iKSqPAkq4FFcdar",
  "key45": "24my7uefQ9r3SxY75JMvhutZMYZrjnnssEbpvJQyNS4jywye1Hd2AQxeszfXdaDt3Xe8rMw9xheE6PSzLGbUK5qe",
  "key46": "4XJMqsqhq3JGMY6Frx2TwxTiJkPZrw7v3QvdYzEMYRNcgRVAMHbeLrQT58JgLPtzmmWtqcEAFpJ8aHBGWPvXEAx",
  "key47": "9wGoLDfd1p3aAiwAMxD5cvWmpTHTmRxHWsH6LueNQTSqfXJj84onnwHVPvdfUb9T2MWHzK7NGLfpM4JdWWnUGDv",
  "key48": "N5dJUoTXM3pEpdQNZAgzi2KZ7DZHDDtY6EFzEwxfPKLr3atGcDkAbcZD8A9JzQV76EAKG7iFmqpXVt8afGVmphx"
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
