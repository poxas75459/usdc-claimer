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
    "3BCvbX3egukjRxotNsQSe8D4S7mMjMSgRpaxF8xn8bYbR2TeV5LGbnvBbiYLzgKXfxFZxyRfowWxx3YB75brxWFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mrN7tZQZjDf1KkaGhXdxGs4DSnbm4R3bndWLuQgyX6psM7zcEaUv8gPxc4oAALj9j9FVZm7afELEpC3Gm7o9uMz",
  "key1": "4C8wTjCkzdznEBT6mPbv5q8kASo2wuvjxJCnDxxYvjvSN22KysYTwYZdUy9BZwtdNy1UXxKkF7ZtzeKwRYv4uTCS",
  "key2": "5qNRS3pVGRfC6YFgPXnzDT9u1qwuWuLGMijd4MSPL3drBjpFhVv3dmuUCEHdjiCEXkJ4qbZRgvLGcnv7fCTxYCz7",
  "key3": "42QEcw4RBhwACPrZTdNLUWXgseRVPsWYXfMsDQEN1GTEKxfKnCSxXNn88W5sgzTHkBDPH7GwXL3kDtD5PfE6CzP1",
  "key4": "3tHNbQRMNXTAuEpYkM597xhdaNxQjXBuzuAS3EgDoizAaA18UEE6qJ4x1VRxPvyro8RdqEbbRVhW6UZoVvpXgDTt",
  "key5": "Yoq2SmLMSXp3JxUnfoSqfQQ81Y6jpyww7eJRYTTsHbSWLGrxWJrAzeHp3tXFvANg5kpbdce6dxw9qE78LbhyRDR",
  "key6": "2sdGExP4gqesh1Ci7ADu2avgZtUkYZRWxM3PvUBktZaobNGzQs9UjLDZGaZfrELDCCZpCTJ95BShVvXj5chZNqrT",
  "key7": "eERkaVhQjyiTMSd1ADiqnX3BwwimbBA4rP1xYr7VejW8r79A2p1mcTsWbjwJzwKRCjT9nibC9nBUbVmqz71rAzH",
  "key8": "5B1FCwZFvRLzgLCF4pKAKf213pzLVAMi3Qj3mKvJMznUsf8awLNindCYXckmuGnPykUtSJmdPrSWa6mP7Ho9tV18",
  "key9": "2th8CDHTP57VhbjypVm2gDX5VGPMaPPCTyy1mKzfqtmxygNZLkGyM3KRHWzVRK93usUoRJawrfPkpGVc3cyHnq1w",
  "key10": "2W9W2jtw2zRzkrDkSPU61TQ7S7QVfcn6DnixmutXHawTMzVMwA2KP4aYkx1eqNfeukE5Yuq3roSo3amRyYVugncX",
  "key11": "2emPHY3je9binfWYCJJc2V6WG6w9J5LrXhfejzR8Y4fvop5BJRrBZwu9zivHt8jyjd1GFiJgu7rNowTS5PbwLrKs",
  "key12": "4r4yeKRxp991mXVo4XJUR5UZejbbz6T5rrhmHdPLH8XDStkPK26wFuCsCnFXMUSecBHLoJjJWb3aToCs42d9wGXH",
  "key13": "5gqn6MQUJMGnC3hbjjVaX1ZmP8fFxaDKcvN3ts2CPqqGjUT6sFup6a9Zid2XKhymCy5UDmMmEVu7JyPXy8gArkGJ",
  "key14": "3Unoxhr4QZH8DuzdztpcCZYkiyfYJS74WJnPuKSrh6DTD5w9UfagpVenAF53GrCtfNPSZ3qhwDMKxKde6ti6Qark",
  "key15": "66xmF57rSCU3gJSc1NnRDyvPNHQPyyxokHSK2itHmkr1j4FQNR93ZHAq1yqHB17GcGGkBq6Dgmgm7h2PDDfcAHzo",
  "key16": "2HKJ2xqgie1djChdnXVokKNL1YjxB1dkL3cTynSn7LaCBGRb3X1aiAyA63FQPx7UkkS5mtMnKhTECHSW6RaKAvAa",
  "key17": "3HdDLrKjnSSB7bFDQG2ZbSHLTB3zjCfuSfmHFgY22K6iUQLyYR2W2mS47t7ahnqeLJVTVbdare9iKpPUFxjR2HcP",
  "key18": "48E2ZgbdM1pG5Aa6yfXVjQTcchsFxq3z7xMYqtoCGcuQ6FXxWAsWatDTKXvhD4V1Z5KniiYPk6oZRccskjbf8sDT",
  "key19": "366zyhG6VQ6TSSrzmBaFZUTtpAs6Z1XY2WNeJahZw3cg3cXJMeEUPBzDL6VfpMsmtxbKpaCKZJP99NdEjTAREsU5",
  "key20": "4rmMjBVfxEm6zeT2nTtM5gypUoMju1UNWBJdBauVQP1o17HgfXWpzwkHR6AU9stiETCtZNCgVDChibJkBMxvs9ke",
  "key21": "5rcZfehhbCpMV35inmYV7f92cMijuA9bZsk16f6SEaMtfDuVEtCu72tWfHi82Fu9X6E114qW7zCrbyxHKNBDgnJ6",
  "key22": "5JTvz6w4pHHThSj3kKu5EakSpHLcspRNe6fyrehL8hG2zfNYtwygm4AdVunniyDuJJDvxsHy6BHqWmRYuN2qiBfA",
  "key23": "4wiYA7P1VFr9zBEb1PnoUX1L8g6VSboVsDu5La9jB4qW7z1ckftHCsuFi8JpewW6fjMtajAo9S2kGx2rZCvmrbYY",
  "key24": "232UnqABcJawTAakpiL426LBuekShRzhx3yEjHyeRZyiQbHGRuBUZxmoPNxfZ592LUxbYDxXBcwnSzuW737TaRo7",
  "key25": "5tr122KpiUaJjGyE1xpPD9JNSADfZPXgsAqHmznhHb4MrLsbkpdCQXyx8LBKGsoqrgaZp3HqMF4YjWmZtVtxRiLb",
  "key26": "2QRiiEH4edTsZZqJ8WSvoYaa2offH2v2kZoo4yNwBV7hQ6p4zcaY8qQHa9QNE93ZDTaPrRsMoc67v4yM9ZYBSYwx",
  "key27": "48hVioWtDsZJ7QwTnJCNTJ9fPi8u7JsNNvbb8bRTzbmDWfbuzcMbsfvUkThfHr67Jx1qsKK1LnffwCjKebJWMwsY",
  "key28": "3TGiXaVMg2gPQPnq6paLLGQRcJGtmLq3QrucndBWbvHsSPZnTF1ihJG83ztZY3aKiTpS9UiNBRJYjyofhWHVMn5w",
  "key29": "3JUD2f43vFamifRZPxaeqhDQLDqBwDnWPWSm9AP2PyFrowGTmRbsFpEUMWzoC1pVzA4EM818aTy1Li9gnEHijfgY",
  "key30": "3eFLS1Fh3EDzddpBknCGscDK3RMnHsyuYdTggkPUNawiHd15K24baKdrhpPrH57oKH9f2ab8QM5DwCWRY1JQY8iU",
  "key31": "5188BcjdyQTsQcLgNizbmibDnb4AqogHnWBGh8iUsfx1iDSvhPjwvzMfYjsSMRXDwVzW81o8Qk6yKFfjtojnY9c",
  "key32": "5kcnZM24PyZoXA92HCFGhQxFpnAPfHpAHRQW1vWqAwjBAJd2zvXkamERq2HMZoJK7RSWg4yXhRSnt8MyXRCiDBZc",
  "key33": "35EumBwcw82fRWzk2ETtSRqiixjhYXP6c9A2SjPQq2H2nf3oLUd3juWcVufBtSku8JzXieH6oWx2JETvX5W9VKZH",
  "key34": "3Kq8Mrd2gse7KGs1ha6goEzaJomVxjaDNy8uz61x3ooFCnQcGP6oFz8qBW2N6yhqSm9eRjMKhPdSiZ3TaTLxNPV7",
  "key35": "2N9wXsqvavEm2TNWPV231jFdHbPNeR79dQp7R8RPHW98f1GLXAbzwrXCwnNzKyJCTbt5vtxD55v7KWy1EWaQEYgQ",
  "key36": "5zXdW1jZ5e4XtPxEYTSyGHfoAzsGkqExBZbL2adsr9AhTLU8cabsE1Fudv8WcBoeaiUYijJw4Bp58A8wQhDzQydS",
  "key37": "4EP4EYMq5JdqQgpG2E5jTjKzWKkmA18xpZ2hyaNfBnfq1BQaS8SBuW6ig6CJWLpj2LNMaBfXnRhXvPNMNJi58E26",
  "key38": "4M5xPmWj6tHGTRyhuwqEtijXynB7UNTusjWiMQd4jBwovGMUEDSsugGof3dJ2nwdJQ12gfo8CUYALVx9uoqebBYV",
  "key39": "GPSYrUTVdz6PxLckDBCKV5XUESDixD8x3wQjwttChd6Kqp4tYmd1gPf9mkeNbtJJbzctsS12cpWQCFsoZUpzz8s",
  "key40": "oGwPt4nPyrirzHFFEU8TbvWW8RBrZVu3oEJ3A3CNqWvTBirvxrryPKmtjsebQ3ZaY2Qfs7PfsB8YJPsccUZ3cta",
  "key41": "2sH1r938JHtLaZkb2E3s8DpWAL9USCwBBZJzG4ifnmacyU9XKvqDz9AFGigbYJAriUREGFkCTNjU8AwXco2qdTyE",
  "key42": "4gtxZ76NQCo41AA7P8457vkysywbzA6pP55HVgDrrtitD7MyJwr98DnCuKLDzs9cHbPSx3rTwUNqrMoPThpdRmcx",
  "key43": "64HgQndCNCqTdy55dyZoCH8BUGhqx2ayHv2oLMoN8asSngtG9keLWwE3X9Q5n343recgVwrw8m51DsAUzbLD112X",
  "key44": "2PvLkbqZv4pMBDL3GP1D4zeBC5FgM4g2UeokoyuuMhruPMzhvxeM9Hw2cHZUEVcJyJhyUVHFmXpjPEJUw7iAdMY1",
  "key45": "35n8DAbEd5EWJ1nVxXTHmA5iuJr4VnMtFAR9pv1nHHxJRby1XZqqVepkitxDwtmEJU8teuEa6NwNFDBMXbVNvPXm",
  "key46": "qDmgeKYLJWDUapQh1dBkQD4UYkZDatSLVmYTkaT4NfryEQQTceKZtWQ5mYqXAVL3FpXfLEBzu1Nzq9iHriEaaf2",
  "key47": "4k6vu3apxJjGdp8rBtyA6oyRgxBNvSok69ME3Z7FB7XH1huFTPwuFhy5VBQiTUJ23G75Db6nNhv6ppFTERpKAGan",
  "key48": "623mdFJiRdvyz9eedEDKHBBQuvx4478QCXEsicSTnyuFFMq953PccEaWCxgEszMqiPcTcQAUeMmrkz4X4PGoH6pj",
  "key49": "2knp7VQoVoP7Jo912e7qcocyi5vNGCAQo36kQGSNyQBxAaotybBXkFMhAD9BoHgDCHUXQozAgpXd8hX5od2x3ZUi"
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
