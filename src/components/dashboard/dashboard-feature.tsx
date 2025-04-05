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
    "5cdJufTTrwaujKERiNSeobTz4XtFjS3SbLYMgm2hUi2wVo51c8zUAjr6XMqr8QFUTeeBec5ne5tYNFshdk9vgZPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AgEKKE8u9ciRgX6GSFodJvkmknBSSxiwNysEa8Nqgo43x8SwFg2hq89AjupjUkW6hvdcn5Q5mRSbAGjTaxYmmtx",
  "key1": "FrikdifobpE7sajXmWvNgkbnwYfaEnbJ2P2jTGme3cthkLtQ8JzmNwbFXSpiRa9JQV9VR14wBR7Z4GdaSBb4KBm",
  "key2": "4fvZUTxtU5EvCMvV9YWkq22KZhjPdt8BvCD6usFU4aUMzpRcidYmXEgvU1dMqnPLLkBVPGzwqy9zZEES4p77Av84",
  "key3": "3iRJGTwxzRDzbZTuvQZ8nAP2rcKRmxxyxnrZWbU5AyDYuxQKaoNZH4j41ZuGnoPCrpfRuwR34NBuEGEUa71jx3Nw",
  "key4": "9xKgGNXX1BhE2ttiSBxYDcGzKmvTVs7LYJALxj5j5shDbLuxanxS6Wr2zYL3ZeS1sVWg81QYwVtCHAurTzN9L1a",
  "key5": "2qaeZvoZYTtXsi6kRbZKTWQimZ4cBgU92x5eJermtyQJtg9oh3rmKJco65eTP91kkaf6856MK1HomHTYxnfwJ8Rd",
  "key6": "3LxZ5Wuf6Rrzas3bZQyjUrXMEwRQFyQm2EjMN8P76q6PMuS25R8qrrt9wRQSstAEdE9VeUNJ4cZ95mVrULc9pV6S",
  "key7": "hg7egDdSj3EgDjpvHYi641m9fV7ce6sFE9DBfzoyrxrtGrtAhLQDNU5bYrHoUfrSFGP8yZ8pj6cqKhhYXpKymhs",
  "key8": "4i1gYk8LGK3d3H8mr9EAiMhb7wfVfefiK2qJhJSgxrEsjwWhxU3gicXDxWtVhzvUCqb4bTSyVq7yniBP3qn6LGg5",
  "key9": "5ybdEdmZZ6S95amUUPKBGXEPtQvrmQRE4MruRZnqqhCMYPv9MqNvzqX9rqVtjNR26wwpF2dTs4CAzn3F64vBnHLT",
  "key10": "4nGXMgUQVRGhznCrHxurVn3DmR97SysCdrbvfxTY2DjG5m989ASdhiB6orBTjjKnicxqTQyv5tdcqVF1JHGndSKt",
  "key11": "3W54qhU4ioZ7WrHxUdyQZVTwuii2DkYMAX7JGwNAASZUnBJ6gHzTMRcMT3T3ptXJ9EJVsfjuXmDv2QDa18LgMvrF",
  "key12": "5xTQmYM26cTSc1N3vkVtVte6s4pZhQA5hUVfUGqFPuoKEVii3FnULpDn5KA28HMcr2XQbVhEfh7V4WcSDb9aAMHk",
  "key13": "3oa4FJBfBfFjLz6WUVGUEbkp89gCX5gkRLyauKrvmc8yf3VoMrmDgzDdyMvzNgu2y8gFHQjwLKP2cp6EQbYny1y3",
  "key14": "5G53Werxtsm3JSEoWDXarduEmzqeCoVgececNwVnHARCQ254Pd8U5wTr6BFu1fN2F4A7VbYVwdvVgeDbuysLRvtM",
  "key15": "5CBrMPihDUeqAdMMukvGUpge6HSEV82VtBbpr4wLcs8yokWz9MSU8k8XnmYQqRZatTvxcXBMF85zA2F2QeaEChdd",
  "key16": "12Fgva5nx4rPmXobxdmajV3LKuDBPqLsQrpeLjJ7mvgUCbd3H49iKGrLjEZUf5wtndHE7KzTErYiyLFz1NdiDoP",
  "key17": "WURY6m7ScSdNW5umyJRVDX7APr3Ld9ASZLM198wc4wSCc52PPXUWUuXfeg1qVX66Rbm8vjuqBHyPDFeYVvvEiWC",
  "key18": "5idmVnw5vyYLScSxLbSKRdMygBePMXe25UZ3qKUUU1ckPdsDKo8jfgzSuudbXwJBSFKuHsUGEmmfhZjgTn3RdMVU",
  "key19": "mmDfhs5g2ESqapo2NsZtAmoFh3ktAtQeipojD1bcfNbKJhvebsuxhamDq7n97MEBKArUrkxHKpizmZ31xXACJ7r",
  "key20": "2TKZRZGC3rYCe4Szox7c3uFbXGV5vZHYvmMmpFNrzHDufYLac5ycpXWd3C7wGDtzWyTYU6onbfGpqcMXBxD8nyms",
  "key21": "4Ci3AsiFotd2eNv42dinz9nC6HU7c4ESj6zn1E29wXndMcP5G33LGnmLTDtmtCs8BApFhgdgXML5oKAwX1m1ZXwv",
  "key22": "5i7VaWt4p5PBV2yopDf3KZ2iZqadugA11yKzi1FHEWYZ9DGCHZAyzFrcF3fQMfg8vsJJNCPPNLqbeuy9S2JXAjrD",
  "key23": "5XNVJQWYcLRgQNezGqQ1RUKtonT9TKu44jrLBThCWGtM1qpLTeWMHFznsgErymv6Da8h95pTXHFZjVvndJQLhqbk",
  "key24": "3u1CD4cb2HyYxDFCbGrAo11ShbGdmUwmbZjKxQyRUDzRuX9QvoqzUGwBYQ6PjkaKCUASxyNoNk4KaUgXZ1yjvUWX",
  "key25": "3Zk48PbtKC2d4wb8KyULdDLYKEnAXPm2ho6SkJPLaRg5t5ah727CVYkjQTwPbk9HM7vokMddCANRvw2QoGXoQFaw",
  "key26": "2a9XaUDGAnjS7ht5vLpRDVBcxYkAPeCrH62iamobvXKkwRFT6J1g6sfBCJJY6ZWz5ELctW91vz7cp2y2dhkK7T8U",
  "key27": "49uA9DeP1J1ECAdNBi31dYBwteL1nXw5KkNxU5iSajXD55wch9r46nvi4gJNSNA8mT9JCfidiQoVUZFqkitGdfWc",
  "key28": "eBJ6JB52rVtPyiswdg4JyMrhZCejK8Gpw3v9Z8c4WAvkfr6Ep6GyNUje97FwVQ2xrhdasmU59eYQ5w3NAMg4JkJ",
  "key29": "4yDVoVRGYx865nv5VuzKWtp9i4R1eaaXujE1uD6urgQspsVHsHphgCmSyzF68kK74c7K7PuYe1zEWzFkUFTyRGfa",
  "key30": "5CANyrK8of63SUjkGX6AEZtA7PrwWS6o3q9UMjRrfpBhaU72igkyyaYUKCyrvBT9doNKy8QS1GMhDJo7YcBijPTx",
  "key31": "yYfdferCBSLWtCKKTwZdLCA21S7vBGbS5hr3ZAA4Ae6yn6Px92Xcr8csG6k5SFyrDXXkGTj7DBZ7wrRAz7DafhM",
  "key32": "5koT9rF6AL7vpnQHZpHsoodYDtebWwbeoou24ei6MRjXa9BknCHLr4LjLzuvd4G2kFCtrcsXGbvMXAJrtgfVLPsK",
  "key33": "5AyXJaWRBf3xbBc3X9NpY432sMNoeWRT2XLeeZ3RhRDHQPqjRAZMTSdewRmKANw7CJEJi7NCbenkESjD1vpt4hnG",
  "key34": "5WVHD3XX937bm89Z77rsQTyFgdt459cuwWk5sosiYyo4nRhFTZX5wCickNXQtDxcfckkd4ASSNbqViXtVa4fK7Qi",
  "key35": "5yka79SgDfKGNKYZdPoZcdRpKR2eE1DLabnrrhSmE84kd3bP78fkYrDtdMhbzA6E1qKARJkruwqupxY28Hdfisp1",
  "key36": "4gUBi28xju8ZVbEvrCY8qi3rrH6HaccQWCbar4U8LJAJtWqFyq69VeExtiozfzmsoAfEvvXeUWxsk2kPFbcUy7YT",
  "key37": "23tCvH5sPtzh9KRpgMcEpBvSNaMvEy5QLiu49tCEwuACb4FXa29Pf7Au1h54ptrVSC6FutKwoNDAUSCTfXZM1iJq",
  "key38": "3Jm33xnnhwdt58cMb4ERbUAqsw7YE1zoZQAAGV3metq598gaR75NoPQUB7fydTESQ5agvBdXcEkz71Mx3jrEq5Mo",
  "key39": "4PNhuyghHBCb3Cbz3H12s9HsUmjsvF6JK2c3EVEJSTYp8oa3muPnjxEk3WXaP3vc2UetRGSqkZdjvVcn6nGY3Zc9",
  "key40": "1x6wGoqYPvPtf19MZtQhATpjZgGkqtKAJdig3sbKVybSDJkiiTSRxH3s8aQYbWag1pkLBg36YJH4Ed3EBiG6ujo",
  "key41": "5p1S9U6Z2bK7mjKYHkHdd9N5xBfE4KCYF9qwhxNbTHVgWNSLZYjoWYNbLXZHWcJzqHDE9bRP3ZvDB361p8bif62h",
  "key42": "5Qa9Pbd3EmgkY4xDSzjSt2NfisGVX1gPdmpsdnC6ubP6SoDq4qrwyLpQZbQGkD91PNNnbPe14SbCSbkMR55vuerW",
  "key43": "5de6qCpdRVcESHuoPAnKcgiZYZhpB8Z2cBhaAAZXDrWugeZ9ZvUMq1mkr9apm3MLmufN3T9XUpzGcGZbqD4ixYTe",
  "key44": "4yy8EE9KJ2YGDeF61PPVBuZw4ggSVezEa47GNUP3juHuR2t5VDpXuHDytpKBsZ2NHGScyhqhachph7X4npKaZFqT",
  "key45": "2UtLbUcWod13eQH6AvxXN2us6hDtGWQZsS4tnAyLyGGnYo6dqDtUMvNywPTLELSqHJGdC2YZ2Td9R9CXuAbbGmzm",
  "key46": "5eLfzn8MuT9FhJ12m2LWqsD6ac5zFeM37Gwx8mKWXGmjAiy7zxtT9AswkDraGXi6aXVZZUVHnx5toVWvkEDxGmm"
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
