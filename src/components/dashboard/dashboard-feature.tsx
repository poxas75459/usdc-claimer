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
    "i76mtx3x3Qw1iH6UaLvpU2NBpJ3eKPEkoQmU6guc46223qPB3hgSTGzvXiJ6CiPSPtLnNrgLPBbY64VHU8KZn93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qa9HW2aUTreh8S39nhDNQwKMJJ7VzwztFDHKDSkdRbc5mZzSKxJtXGCb5vi1GD4vhtJ4JGRbWKyUfqJdpjd8LYC",
  "key1": "3pdaKcWDD7wLd1BwbNJ6qzGAfQC18bkSNxzcu8Q1C5N542F7VVy4oMfz18juiLJi5nMcb1thVZAeLzgDzUpk3L6a",
  "key2": "67QfMfTHnxgG1iw6KBTaJzZwqAHuG38yT8gmbinEkm1J84iUTVJMDuexPm64y6edEFb2JUeU7i9npXDwmnTptDKJ",
  "key3": "4W6qQjzfS1Y3NW2Ne4uaQfntJA3uceFqcg531Ba822Gwz82NBP6gfXTNN8TzJPTAfv2bELYGgT3877nEeAF3J9Em",
  "key4": "4AJ8ewAGUmBACfP6crpL7ZHeDcFnkH7gteq4X33GbuQhFLhSv35jQt2R42VzBdmgVnLtXPAyTRMTQFbtVpZaGwsZ",
  "key5": "3utDCDvzZ6LdMcLf3EBXqEFm1EZnqV8gqaoroTjsa9DjejqyDrFxCmu2X8goESsxCoZj25aiohDWnve8utvSXqFy",
  "key6": "5oLTwC2pZYvie4sqLPb6YeGNjkBjghhiwhzfE1JehQDwkmj1zhvoTvZ18Ro3GPfaSeFG3rHMBTrDsAYWJpYRUdG3",
  "key7": "25Ah1PNCZKfuLPk4Bn9pTAqpdMmV1A2r8GHGo3tzKgp87a6TSgZVcHMNVgvckNcVa5kG4VcJ69x1h6w2eQQzSVVh",
  "key8": "2iXNjHCo3sHzgLm6FuGQLjKzWRkSETuBTUMRTtxDGmhFaiyc9yx58dCACvgAQrpNCee9f6SRRgzyy3aoJvtrnSuG",
  "key9": "2LTfPzpEHtyEQtkhPXsA1PmWgjBr9AtdSawwERiqBvWxZUsKX6wzYs7n6WFQZi9WR9xLhhdda8TdbMrexdebeetK",
  "key10": "3eEbycBQrucVpCjVTpypx52GwvJorx8S7M4bPwzTVL1oFZxtStGSMSJTNEYYD2hfcgspTPMnEXm1kKKSsL7Z9aRK",
  "key11": "4wNqyiFnt9daMm2wQJFsm3K2pDGnU4pca89BCufoysrXikRaLV84UuAx1szp41McmgJzEv34c88syofQC44bxvze",
  "key12": "45XGVEz6T1WfvQcsCFfaKRxr8uErtzjdEpddeoiL1xeW3oPofbVAjUUJNc6ikQwCVZ94QYjk67U8PsLLY5LtJu5M",
  "key13": "2FSkZ4G9ETjThgLxDEVXxk1HGJpUa1XiDVc2dPvnkeBDAwiUEQL2iSRpDsiA99ek5G5UzPUZhdpXr1GstGnJc8cW",
  "key14": "3C9zC2wEJ4Qzw56UMRyAmdtBvDyt4ZFVWsLs1i6HWjnXueFkjStyfji2tRQBuAAMyMFnCA18jYxk9AQSk3QWZz18",
  "key15": "2RvRrGvPs1ZWNp7FioNGA3z7kHXPsRunf9psYrPXR96dT9tBpC8BjRfYQh3ZUBEFnefNg8mCLqb94ykLYSPASZEM",
  "key16": "23WfwTMGUuu3ExqBvjZkNXWUdB6fSPGbcNCXRb3Lvz9hHw6HqcUMesm9iGW2i3zNcUxP1q9GtS6tZbGy84ne8xKc",
  "key17": "38iSd6PcvMSe2mqKqwcsdaiMNiVJCN4nNrugVrVL6HbNX5JYCTNh8WuyKUJDVLCSoXd88Unc5uQoPHaGWHYuopqr",
  "key18": "5LnSR8HgYuzPgzZ49XdDscqvVXu4Qye2kSBboC8VLJyMXs1c9LhBKQSN6HWntWSSqgHqUidD3gNuXTUUJBjyyu5n",
  "key19": "qqQ1DMizp4R5nov5dMrnkktiMHbUvtDB1fE8NihqWg6BXVn64w8GqnB9DNyk2wU83wqL9qWqp85zpbjycwbMnop",
  "key20": "28SPtzYNG69X9Gd2v7XuqaovR8LxSAuFh8kxXVErfPrcwnGeWwJzoD5Ln28dM1mYdp5Z9FLkmsQ8KrrQzB7PEv9z",
  "key21": "5Ad8Gzug7MfoWkedjGmwqHz8nmXhRoy5aTkNU3sXJnn5yUB6RSUbKzDvktYLGC2p6YDnPSDDLn9ucNMJEASTHrs",
  "key22": "5Cy77nAjLwR7j2Ft6o8x2o4XqSLgFQffeBs2UbdksREB18jZNVrHBFcir1aCKjuekKAYC2HdiDCZSgkudV2ajC5e",
  "key23": "3gJCkcBHwRiwVxrbnjeDXH75w5KEKWH8VRrahdYa875HhMjaibYwnCdwEyF86fGG4DyZ2gLoUY6YcgMiW5qMvV1s",
  "key24": "3TNsMXoaq7su6iWBPbJ3M28Jz62d4WG4CedaDXvDAvYQboijvHFV9Wuz3PgNpH93W1vG3vt29CwzNMmBYDiyPpLf",
  "key25": "4ZyHjKaaTt8SWjJhrqGPQaRp8S5HbpVa7JhWYd6seE8CD6Ej5PuD3zfT955CPXrAGP3uJyCYn6QSpkTK2gJSUjEk",
  "key26": "31cLecYUaQAB2ZPHGmzMCXdnE7AggyVTGXcN8fUTBQrBiQbkybFsFJqsAMbNNqmVj1G35g9Yv2QWF3y2nqppspZX",
  "key27": "3CM1CnEECDspRLkZqXFSXdPbKuQQh3fQctwRAwX2FukRgr1G6a7t3gLs3N76qVvbXT6YMX2LguMjKSYiUDGo4KaJ",
  "key28": "4nbTpXHC4HVmfkvv6Zzij3g4hsJ7nE9siEhL5Lmm7GmfDSXNM9P52r7N1XHidJ2hPW8s4MXK7axBgJ7CYJrBfJrG",
  "key29": "oFqPi1GGThAVwq8sz4n9cbzUa3EEpP9YWacuvmYkMtJtGxhnPNBvhyC8b1Yrj8dfJEhvb1SUWnzcn49x8WdgEbu",
  "key30": "3FoxuWXVFwA9SeTt15KdiR5Zmr3f4nSmSdGE4QqTPQQTrTfw2R7YKhP4SinCCWuWs97QcJsaV1DMFuwJz2U1cSE9",
  "key31": "5ETCJUUfz11JSSbDASxtvsE46kf9KtVNPBHn4bUW3phDSrDekd6zvVmRBpErUCx898nipyTVrubNxMeMnpusVYwJ",
  "key32": "FeeWdXZyoPG7pA7dGJ1DABZqdcq3qd7hEsG4DGjTfvoNWGRhMHutywf1YYZ8qd5fRmqt8dRLBbNwNwqNoWo1SRu",
  "key33": "ZVmHgNt1eUdqzLsxuPDxF71xHTbQbF4hAVPrEcEX9ArbTZBRtX5GZLscMwwrNPPaY2QdqAh8EP9Kdd9nYFBdxcb",
  "key34": "3v63n1HyyJtdaua8vrJfjA5w21knPXUNAgCzvYSHc7idE2cpYMMiSFrTArQz46avDhm3P8ujJZ66iSLiRu5XZ9vF",
  "key35": "eDcR6bD6s4o8NZt1a3vodFmnwMytY3QCWNEC2rvsRjMakJ4VVs956GqGToAezxkksp3tMh5andvSLpiq7hJqXDt",
  "key36": "589GdRpvswrrhbsMcSvMTXMkvmbgAD6HE4BdMA42Fx5H5vQoxSmWBk6fCFhk5keArVD6dXkYvPThfvQ7gg7BpEjX",
  "key37": "5hVLa1QkqsCuS9TsM3PUaSbmD2fQyVJmEcnBidyi71e1hntjpcDnmvneVkAuroRnoF9FvBWoZ5o2eET8DJUqKzaB",
  "key38": "4nq16TQmJoPyXT87sfoZy3BEK2pxD3bpWn94RkFKogs8AYv71EnRzQ4rFP5Qz7suRap2YPXApR8vco3z7YSyaDjQ",
  "key39": "iMNug9aQFZrRpaS7qjeYjANAbTbSgKAxXfry5ADnvqMLt5r8bDJ34ARhb5Qqq7mHW8SguWKcEEK3EMzBGwCYugS",
  "key40": "4Kz8iW4mU2pD3Xbh76X4tLBgAP71Gy3EjoSeCaM3GDSydysArUzgtEj6zLiyqgT2ubGmESkwMb1aNgUru1o3LjuN",
  "key41": "2PUvD2NKM38BPu1QCetsxn2XN8vP6v6bcGFfTCrKoRio5KtYnNpg5qiJsGCy4TukM8TXkRNhdDeFpqGqzLx3zUh8",
  "key42": "5Lq25vHhTnjKtKm3jmobH2PoiJqUrZ8HR5RiFhjSLtiA8t9UaKp9Q5J5WZdpfuh7NSyTgQLYcfKcdQEYnD5wBnmY",
  "key43": "4dz2z9Ldq7o8Nmtnp8qcraKB9FWE4LkwWPZCeqcg94kpCYJoZ4csGkp1Jm1z3NfHEfKvY7UQKeGQB3e8u1kyWPi5",
  "key44": "5s68R59WR7bJBMq9x5zjanXN95iJi9hYVwZvnDgQhqdn5EatpmgWr1zniv86upEGRbcQFcCYA8TpnW8sEeUoZzZf",
  "key45": "3wdk2gGpbh1LSGNz7oa6YkCTq4qDoh3BJKh58dUiu77DTFY1Y7gs7WXLXgYw4SHAVjXWjn6Ht7NxrJaCvLmvAunq",
  "key46": "2F4WDgy8YQ9xKMN7uQdSosMr2gcAHbE7KVkKuGU5v8uwEER8e82uxfTzvKFR1zK6jmncaASx6AQ5zx5yXbSUn8cC",
  "key47": "2fQwDQoUQ8MoKieMqkhVoUcNWFAWnmd3s1GBhwbt6oSHR3VCn6trma42qgAu4MTH7JPNb4v7ADEJgRzn4iZ7MMHs",
  "key48": "31jqnXesJD4B9Y99avdUA7bLYwo9jxNKRiVvgAGt63cYf2kUuE6uiw4sGBxJ2gHmK4X1XMJ3m6ZNSSWNRLbtQ3YG",
  "key49": "4NEDuCYx2jRBxq2NuEnwr5wWn2EYP8j9Mo2G6GBgoEur6VSaxxyeehAnkSYy1JAQddWhaMK66GDUTSMhtCNVHYuM"
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
