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
    "76Lk3Dd3RSdxkPrNa7WAq3ar8CzG4Y78Pvt26P19a2dSdhKqWe5GE2eXH5HTA9mTQcbWKuFybDge6qTU67zangK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WQnzj1d1SeZjGbzdBsaktD42ybojXe7zEcDXAsonVfXVctrG1EoSCX7v1ohTxh9m3NSvfvaXVQGM9SQJccNwt68",
  "key1": "qpByw6kS2XzcmiMnix31z1UVDQb24CTtVYxPaVbda6W9XGCLjZ2fbYWz9gSgXSGAYnfZRK2r6y5Sgw2RBNi5aFW",
  "key2": "wC5xLvvCHb32wGrX2ZEEQPFHMNA3mRmo2nJ5YBmGojpecnkKoMM791Nud245HxdUPTCEutj7T27t6CzxeBhB9mZ",
  "key3": "59HsCGhRndS6muXMH4VpXDjyBtCh9uaYUiSW6bWoCrpL4AuedKRCjzQE95X2Ug6whqHdGsvkLke7xpsBdiZm9ia",
  "key4": "LAuJ7Z29ReSEaatFJujoN3NMnXb94BdY1ZLSsnkzotwcuH6j2kqauAtxSKdr1Dcd2DniGeFqxCe1LPUhZdwMJB6",
  "key5": "5ecsXz96cnbP7bAQNWFM7LEmFWufc3SvD871qmQwDshGxPUeJXPbq831G3sZwQ2SpCDrRcgN1Fn3iH2EkDxLK1H9",
  "key6": "5wJToNkAbbve5RALwsVaHUUjqk6RDgu1GXJ4dK4VZjwhTUSp4MoNwnEXGva1b5yGjDKMjdqi133oS9aHCHeVFBjU",
  "key7": "2Q5NLp4QgUcuLFtuvz5tms1qqVhs4sW7vQYuv5MEgG7rwAL5U42EYxH9wt7dRNZYKU5AyjWTjT93RtB4bARA42LK",
  "key8": "3eDTJ3MC9CV6aCUDGMxH3nicAJTY8wBkqVKwiRv5cCNLEYT3suJHpi1G2w8Wjq1r9rM75B7wfghXHj2o2D6B6Dub",
  "key9": "GzSYYHpRJMYsmhH8YpRrh8T8ptQzXFEtxyE9S3BZSuuJ7myLBQE4EiUKzyriZoZaChzTsoDYhet6LWxP8DgFKaC",
  "key10": "35ZUe3ReURa8yiG1U7tqpjVCaiuZz7t2wRjccJwhgrQjYsrsWcYpSBxXriNGVqtW21VRfw3ZFvF5RuBUXNXFWp5Q",
  "key11": "28sUDGDXApKbdwsRFM1U2m46SGp65KokF5t5xri7jT5zRjkDvaTACMKE3nRtvLEiqvwoNcxXKgtdGhn66DzGDCin",
  "key12": "4HGsRuG2fmSque5fc1u6rRp4nQ6Ghzg54UNztj6YNK7j26sofB9q3maWCkrBZEdy71jpDCpEU6ts9yNimTza622n",
  "key13": "5UpcqyCoyEXxp2evvX1mqFpGqmtmdyDvV1PCR6WZPN1XFaSQZyx7MQA1S8HvoTv7y9de6qgQjvErrDHkqpUeC11D",
  "key14": "5YX8WSvjX931vBQBXs5SoTUn1TE5MkzoyivqPW44v2J4Q87TASriJSimEnjDdEeo5UtDjNHExUcGfgiBaTNxDpdC",
  "key15": "5teUXJmTwiskCGaaWuvJMR4vswxAKCgm1oPgPHoHafhPWEEF2hxbmSfuSvMctJr4CBnohiaFxsyj4GGReKRFoUKC",
  "key16": "3p5kKB9dbMYYL7JCCAQM8vmoBoW1WVZEF7M3JmX3pzbQ59q4PhUQKmjCyXQFGoM6JywErZofk5zPeoujLNKedFQ5",
  "key17": "2UEcAc93Cr2Jio7Gd3MwzaXzzE3UTPRoFEchZhmLQoAJhLU7XZdeGwC8FfiFdvdB25kNXz8sDPRWV1F21V36Nxc2",
  "key18": "4nA95NHFgfhhhWTPffkNY2XgxEKtXArdU4zh2DT15desR4CXTDEPa5uDjZck63VrngURpU9XFsfJ6cqKVcEJjjnb",
  "key19": "XLnurvbaHK2PicK8bDrygNnv81dsFNcErzFQLq2UmbK7UP5FAiKSdgtir5xxCBj5Sav86u84jQ1XEm28uSeeb8x",
  "key20": "AXhL32APNwyworbNMM8jgsvEk8HkiAPhh3KZdR1z3MP92TnjgbRgG4rdiKoo696UHX1SWWWiJKco1qF5g6qQrzN",
  "key21": "2VnV9bU5J9tJUfP539CyjKmmJosSRV3JoJWTCHNKnRH8M3TPd4VYkDaKx3AH1G7iW3JTMDfJhDdnwNw39wPrwv2J",
  "key22": "2mbGdNriNVbYeUzmW7c6biu5KMDxkgC4jy5KcuNcF2fGJA1JJ4m6h69dejUNz6V9YLokPgVqcTnfV33FK9BViYbg",
  "key23": "3CRW79kG7hLLLNjcGzswqNn5ETHnPVVHSbSpP8625Qyb6qD1eTjy4bzAzeoVBg5RLPcEipc35hk6KcoQmeLEQeKW",
  "key24": "1dC5JQArTaUUcD45X9YDNTo8K24jkQwiwsWngTiouKzsv6RB2ndh5cWB5AwEqKrDHcXJKdytEW6g3727tKrpWzs",
  "key25": "3d6aFnv9koeEAwNtPaaq4aLKai2RZLpscbyVw7392GyLRcmxPwuzftpfAgjZi3pvVrjZuzTtP8n6kBRcuD4tobYo",
  "key26": "5mPw9xy7pZuh2pcTRdqa6z2HZa4vyB6QKcLvxRwGjbNR46koNtBKSe8ozr6VnF442V7BkPkhPpE9BKHug4DhftfT",
  "key27": "5dGPz75xCkKKhLEFfJ4DCD6rPCU5bEq3BwzeSXDT2Fb3cwR21dWiGimqzGLCE2coCVw2UGdcCsfp3Wpn7nyuAZ7h",
  "key28": "3R6HDwWAVSXrkbGAw7LA9FXfq4doYW74iLXcRv3JbKRqrGqFWNDMTSNGHtfNf71Crn34LtXgE4xKG6GNWVXEgdNh",
  "key29": "5kAxHqvXMuAbEgypzCMfBSusQy4YvL92MTtREazrbCsP44ipcFqPC2XuCG8gpuW7QpUC8KWqLzsLPgecUVrzkxn7",
  "key30": "2PGRpWpZ4nQpKKtyCPrpUAyJVrTSREHuDp99ZkAdwZu6QbKcxHp9iGFHCKieYdeoQBtTYJRmavCR3z5rbbxVNz1v",
  "key31": "3SiQUZSujSdjh5ueFVBAFEDLSXvib3KSE6QNuonJjJfymzuatikqkiJxgTQou2c2wPpU6DwnBDG11UNAth3WshcG",
  "key32": "XVDxvdr34FePYfGyJy7tg9zDsbHMAJNeXEfVM3faFnNbGQtx55SYMRCWajjTiVjeVa8TqqVHSt7yAQXSUrm318a",
  "key33": "WGRD1irEtVMDMJHYsg2sdZTN6WTyFwVAmSnVTDF9RQpmfJ6ExpcwcBQaRf1oykZt5UuimtSgSqnv8NBFx67RFvu",
  "key34": "2R2N81fkrwKjSc82VDbQPEmEMxdyxkNvZqkpXN8un92fbE5WXmqRomg57k6yien5XAdLpQSFEAswgUU6L9rfiTg",
  "key35": "1nPeAkcx5EkhSkugCmkGRSxufr4DJ9sbBXS28ZskSp2RYPWNp8ZPBdfQC11vUT2WDtTDAGrb7Txn1adwNhZDosd",
  "key36": "2UpBuYhwPte4rfW4W7mceW82JsRxsQBb3HSawdNTQVp8jYtJbxAWFjMKAwVz2LUNrsNPmYNiY8kpGz2PNGQ2fdEz",
  "key37": "3tWcTk3TBp9Z4a6Cht63WAjkxbk4Fq5a5QfxJhPqotNPYYKgWzEdvzsG12ficHXoZqtk5rRDDNeRqcASDgRPnzQr",
  "key38": "k1QbSuyErHpcCSq3rtZYNPfjEKmgXG3nxNBcbysaitxcz1TtBzQniiYm9QyyK9rz4sxUhXybp84ZV3Uir4yqiGd",
  "key39": "2Bnf4cHCrB6LSKUXafhEUwB7wqAuxkSaFyJgUjrPy2Gn3wXk9Vv8bTbjyDjxEPPQdpA5tRzPhuRoXZxLJk59hwuA"
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
