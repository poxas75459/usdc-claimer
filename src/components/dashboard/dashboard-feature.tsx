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
    "2UapdAJGowo1py3VY86hoXedTVHEnuHYQPTPvbqCRw28RRBtBnUWGx9U5GVrR4BUMexdxcM9PhEH6cskHkw9Bavj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53s3BpkAFqdRYkGYZNAPa2orLNa3ftkJcX5riq2BLYY2RQQdnjfdnSSNAs7sYBga1u3DfcQuNxjpJhHAkZFEtvwR",
  "key1": "2F9RmqwwjHh2YieboHaYc3seQAxY61bd4k2gByRSrT1f3WsCWGqT4PWdZzoGtxL4uv5aJcSXAS5TkaSJ34V1y7vP",
  "key2": "3wQbaS5bxVUqyFije2uLmxcbaT1AzjWcfzThJmjxVmxXUgnkWfHkzStHrU6sMaUyYrYXCvQLkRPc5UfSyFppvTnF",
  "key3": "5QQsEhx4GWkDbEvPz6jG3QeZU2cG45gFKmkH355cTXY1v61P8YS6JRZsPsD5b6B8nkyuNiKmezXGMR1k9EaEz4SA",
  "key4": "63pmhyDqC7m7Mdje1nt8YzWb8mRH5zbxKrKP9FrmTkbyfjacUuPX9SrnwTEX5kCTB92q365k2PCyHUPGXZKsJqxk",
  "key5": "531s52YPdvBwn4EqZHrHZ8EbM4YoJyU6LBppXhh2BvP4nDbFrHXqcxQKvgyDEyNTcfYtt4pchn3FVFHhPVxhQMjF",
  "key6": "2rr94yQMLTfxFVbFgJLoZF2GUYq9xeUaPaZ2AJAg2hcNxTwVoRNwcNkmLpjFxFMyezdCpcgWYNV2wpzA4zeo9JnM",
  "key7": "56u4dimoVMN1v78QuUbYCCuU6JiTzRUkhmsnDjkBJAp2Efr4pUuno3fm96yVwc5XFrycLiJsuHNN857XM4LP4Nzn",
  "key8": "4xKnrPSYDLaJtzozEVHVv2jA6dbkkvGeKzbSa4WFo88uawUhWjP3fHEECUksTFPztN2HxEXT5v27wuSapLwDkN24",
  "key9": "3u3EAwm2NyQDKMZdb3PgR2UrPg1dxbYvjuS1fZJYE3pSay4ncQC18bbGokdZ9umwdVNMQQSa8JtY2QqBTThdRLYm",
  "key10": "5do7hX8G5xYTzH4qyPHku7pCfLNEvjocv7kHMfdpM75Wjyz7iLx295hi9CifPBA8omSwSzzfWHcHAQ2ReXEB1Kda",
  "key11": "5Qyb6v4RV9LtxiAve1smLFdxpGKwvWha4B8TSNhhSbzcjgCpM5FCMnvZ6R1DcHt957TtebGWnBvZA48VV6LCyf7s",
  "key12": "ShRJk2RqbNaNU5ytPJBjtooqNXCkzs26EuvrRjEnaWxbCKYjQ6PDWCiJpBLSoih3Ng8DpG953Zb1PbdxUQzu7g1",
  "key13": "4zjPaGy5PMxV39MDXY9z7fLwed3wfVwwsLM3a2FdvVCWdCHCeBwJxB6cMDgPH5hkiqRS4eMUxPmnVa4AKFE9815C",
  "key14": "CcRxMgqFXJDZtAsvq2642cRcmjRwmgUnXYQexnoPVq468wC2sTfVJexLypnBBzfNEvQNxpqWo3wJNTxXGBqKdSY",
  "key15": "2dcirt6brMRYD7u53DV8Feg7hp8Y7EsnwpSVARLRwHZKg5ZVrpSQEQsePVJ5uL5g73V6fSJGkJzSMSUQMe4eXeRP",
  "key16": "4tNq5gJ8npGXYvXtEYyTKA12Z7EuV4v4EDWzsZz4BtAhwxweSScLDfcnwQJQb2kvey2QkK6K791GXTTMYcrrpCiv",
  "key17": "4aEZBbdZUs8WHFLSjR9bPf9PKYJhvyy2xu1gPFqrLW9YuFV7JzcwFNFdFa5Bky7ujFhcQrTrQ7duCNmazeLcBCFe",
  "key18": "3r7wS9k5gf7YFsYUtj2H9CZqP1ECzbNK2BjZv5AyxpZvQmJLNN5h64bVe9rzagw5g5Xc5JRmsEWjvztZ6tz199yU",
  "key19": "zsiTK3APSDEb7tTmk9ZWPULEo5h3jUH1yMUTBSdWARwvtZGuQrNCPSJFVw6seXU47g67fLmgP2djteBVqWEhe8P",
  "key20": "3dga8bk8NeqXyXzxCmhfiqvkvjccZooVUdhv2b2wU1G8CEKLvzGCmo7Nb1piraKxM44hht7dPs7CaXH2NJCKADvu",
  "key21": "5udN8NSS16C71TypMzyV5qnxjweAQRk1W5eHouS8JYr3KwkcDUQgpsWArrgpMhbNqmk7jXqAETPgiM3Sj9Lgu6Kw",
  "key22": "5C8AmDrcRGc2cALezEr63hcZqvSg5iopGkKsmkQTrQjbLcJL7RQnFr4dq1LaSy13TSUJeypvcyaL5aLs6byV4YGd",
  "key23": "2chfBbeTZsojoBQTdM9aYNpq2D1SUeHCokWHrzvkYTpbTiinKvUWGZRPMTVV35Z3uEA32kfzN5uzE6qA2soTPZxz",
  "key24": "5V55gNZDKvZpREZAvQXCbdY1m7UCNq129QawMT3cTqjrD7xhio683AzUqUEypKLyutVJBGidBMuufMgWY4FRtSAg",
  "key25": "47DLxvhoDmRDhY42bbK4N9gtMiNNCQg6UTQTXf8jt85mhPapSwRJSWziCAu8Zf8WRCzHPbYSWHNgvjYFaTo6BNzs",
  "key26": "5ZTL3DuzDAPtionrxLeDLFzXTBs7ERc3jSHH8Q95Rk1n37XpJynr9ViYVsGJj3cvduU6Fujv9noH32GnDp4cjC1H",
  "key27": "ZDJgDtc3qhJZ8RPi1kAuZq49nYJg5yup6rg5ZtiofKAFZXQ7zTq6RUfvTmjmjoKBF6EbYBFn1xi8ywovjKiMKmb",
  "key28": "62DEbid34mkyxR69CHTNEnKTQAAHWwUEzfPZDPgbzjor3eBnEg3FesgWgSS52wWqCXrpmbacTBJTrcs4BiRCTYse",
  "key29": "4b1rbQkBcnqo6T264HJDVK87FUZMvvD4jhbPihhdWSCiBSi9rm85A6m1xA6zsea5WL2PSmuak48hSzDjyHCJckkG",
  "key30": "32RXUaxVihVJzc3SUxkjjZ77fMqBdY3EvsYBML1ks4oTkEZi8a21nbBXUNmo5PCLV8gdsGt3EMvVvZGs7DfVLsMJ",
  "key31": "35bKyWdGzgWquT2w3rVgpyYjbHTDetDch6NzRZymqJm7XQbC9UdMZUiL1due83vRrYswzk8LiXgao7ntUPN3MxpE",
  "key32": "3soQk8W3pU9vPx3j8v4tzGA7VXPfGvmVGgTCDt5vMSqtuR2xbFpq3LPhuaWsinovzVykqiBo4BjMRwz4L1yZJ5qY",
  "key33": "4ATjLv77VZ9CYKJK2hVWS2cJpYyxkxFthYRsytxye53z79F3PEQcsRpEPwuapRXqDPjKevk7h7euufaEHZWhBaDi",
  "key34": "zWtsNj4Hasg724uCkqXxcduwCaiS9y8LhFFGXatJRiQcu51tdqHSNBF5ckfU4krksdvqQLyZDvScZjUUvbZin67",
  "key35": "27Li5t3CFAtyX8aDexEufRqnrEVjoyrreLYxoDPyWpqLExNP1XkngAYYLTEWxWP6HEdJji8NgaRBa5YzpTneUuLD",
  "key36": "24bTMXjknmi97vXubBoetorcshFNRrAxGYZLJv73XPG5cyJDXSshvfkBgv42LeDZqyAUVUbv2J6vG2gC5pCHzb8K",
  "key37": "4hmim9MzuxCt7or6HnVTFjT74k4e7gCidzrhe4BciaY5REFKER8Jxjxt7kxKe9ekBuJVdUy37ij7LKtQxyeEYtc8",
  "key38": "3ruYhgnhzbTFRpk272QQCnhBm4ZeTywFFU54G1CxiYEgpdwStuomZC8WGhLEpxiHFx6Nfi2AWcRf5ZJQGJYS23ug",
  "key39": "477jP6omg1esitxQZhmmiz4bWBN2riZLY7RrjpNTYLcZHqxrdvbw3VuR8qXBVsyKkYDXQoDerd1WBr8xiS3t85r8",
  "key40": "o8YbET5SxfyhN2mrEke81qFKzFTBNci2UQgHf6PPscFYspgAnA1BNWfAc58HRGCZBcs7bhyXhaYhbqiJ5QhUCWu",
  "key41": "3hqADtEfNL11k6bHdYZFRwD41ccqdZg61q3q3y7U8ATTKMP2V8BJQdpBr3LMXarZpLJ1Rmy4xA2XxqHoioKL4rDX",
  "key42": "44UoDc7L3NiGRWddS67gvpUQH4vvw46kyrzwdsgSaiRARDUcD6yWS7o59Lze9bfwe32xh3VpV48KiDJiYuou672F",
  "key43": "zpwyhJiUyb1Q3icgM3Xw6sfXrsNfpbyQAnw3AgU74gVWPmowie3Lhp4TLinWUKnkmRT1F1gW3DtMa5vdTm7YqUi",
  "key44": "3XgFfyKqHmjt7vRnbxRxGFR2XQ1TabjDgrxjK1qZdxC8rXyLRzhGx7affUSmtgi6R4mWiT19rUA5ThkKeBSb4xJD",
  "key45": "4azFTY6wLHYiAvAi8rXCdZVmFbFt573CxYss7xUSPoHPV6Ffvy7ap4HGtdFN1ECZUvewCpMpyoYgK6GEjXufHDaP"
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
