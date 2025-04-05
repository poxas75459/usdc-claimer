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
    "22BmuhWotFnQ6BZz2zQCGYwxEnYx46Lv5YEQc58dPxPp4CJn4xQQv1hSNxme8FHvoLsBRs9TyoKLX5aVNgK6UuYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jFRq31AtXrkRgmWwKg36rD4xhndevPrP2oodmcJ9FjgtwmVy2q2QDxNDvEn9bU3HqYcbcddHSVqX5u3m5JJULXp",
  "key1": "2qzL76Wykbu9tAxMs8EuVfMgUE1hUpABQjCu6hk7xqoTbnnoUfGxk2syHCmUAxGF4nXeqPJa6485zXsQ8WGdjKrP",
  "key2": "5NT2DzZct6nhSET2FyW7nKxBRHcjLRZyBEK53DZtqR3bMFDmkKC38RWVfDf9iLNu4RgTcXdhPUVzbWu7jnQpwTW1",
  "key3": "54ircM4WB6hYzfmZKGjaMNYAKNovJer9M2kDzSTWDGdpbugod21JsHpLiZZfARDWH6Rwdz9t7k6C87Ymx9Ye4h15",
  "key4": "PFukD4tmSXqYKHgKNwbeDx8pRJyPoeGMRn5tVVNkur9z8FDBpPi1QG9irKbCFonBYA8HBbttsQHhMEqtSh3kUGE",
  "key5": "5ycYhLeWDBULxjhKb2r8ERZ9ncpcfmyk1jvtxWtgpdS4otjBbFLxyVgNNbiNfYU9xAAANNdt4TQJns1LYYjnnRde",
  "key6": "3CFY2KMnpaVxX7yqSudkRSxW8hgYX9GUesccDz3rjPnwYh6W4sZgqmKtxUCA9gErA4dPtqCVp7AinqKDfo74sw9z",
  "key7": "3YY3zmXiLgs4tJ1pbsoicwgLCg9pyf23uF6WSTMZaZTUaYznMMH2NhgBtnpkiNnXTE41jGioYzAW78zDqPZHK2ib",
  "key8": "5Q4jfKr8zWF9Gy5tTfwFcvRnuZNDFtmsFzC68Mvp8ouRqceLY6n5ha7iMB3UdVMxKPnrSXzyMwc8zyU24P6d8nHL",
  "key9": "5JpW7TgJRYh6diFkkSucUKxCifW6Hek1iN34VzVxsRPGUPzz5VpSifTDAWLxtcH8y54TkeqFeDw5gyp9TwhnsNTo",
  "key10": "3tH92fHXYRT1MwgJwkvPMVA5iEWrGDSzPLcKs2EEfbPRc7PQVQgg95fH8J49cbLGiv3X1AvDKnJVFbQcw99HdCWc",
  "key11": "3ZN9EwvjWDwuokGzzXF1VHATo4DwSRMjCEYGzUxMWLTND2F3ta1rsHZozvxL1QQw27HNKwizXFzw4QXiFuiFck2Y",
  "key12": "w4T8eV1HPcAw9C3gw2QzmsbLkfydra111rDzBvDcPtR7e2dtF3WEwbRxyyVsAspuPcDZV86E9eyNkAFBByQnmZK",
  "key13": "2sY3NLvNmHFkZW2xZETSA5GQLm5yp26Hepg8wJ92Sdq7ex7Dtb6cj2CenTFkS3GC6XerScV6VRTKG8Py8ubA2xoM",
  "key14": "3nAt6jif1tSQBRQ8JVcXfHBE8AmhUx3woA3p5Na1ogXe4DKVzwgbtyZMBkGU5WKG1hR1ioWouj1GQdC3gGHxtunh",
  "key15": "58b4n1yXPTMcntzEVLE1VPvQJ1dtmNaW7cojBZiYwtYZhhmCe7f1yjaBym59Y15AaD4aEshhQWDDyunpTKsrzRom",
  "key16": "SwqYqYv27SXRQvnVHDec8KahxWGBPF184BURQRk7NruSZwZ2fdWbygD4r7vNehzJitxtjXYUFFx68ZkfR6BKvLq",
  "key17": "4XPSYMvht895MfB1sdg2dJW8DxSgDgD1ZTSeLUEGZNQ8FPLjd4qA9zS5hqC8hB77DZy87TtmWmRE49dmBGedah3S",
  "key18": "47SRga6Pta9usVJ9iXAAr9V5WtYWZ2uSRd9fPTwVPxYNY3yETG8FGuacDbaoFcWkGJXkvyirRBVt86d2QkDvcz1T",
  "key19": "55kda3r7TrDxe7uYrMUKFdtmd3NELL1EmNA1vYq6YRnCmnjo484m2sMbx7uej68AaU87np5xTLSSAh57nJ6x7amh",
  "key20": "4rP2mbhtJmzC4Moi1KY6tMbCTmo2VdYi9gGD1hYL6HCL2unBmQ6vpUNrFLkyqRGQcHAUFDnWhxXxAFcw2n2uRWPe",
  "key21": "GGgf45YWexkPSGfVTSr6rCB16bxZbm3pPaaJ7LZiNzaCRM86beKSJXPb2dz58NqbJvD1HyVfyeXZVmStfFQUkoy",
  "key22": "4FDt12bBRMp7RZ9FMyUB7CqqxBoYtiK1fa7PUhvU3MtnjVozHi2jQoQcAvH5ARZmxNKcJUufmAvPi3t9848pFxqt",
  "key23": "3Ci7PbsRHQFbvpqovi5JAAy3v3SBepyen6dyBpFporsuVU8hb9L55eYuA43LmNH3zqTXmZsJjYLoiv2CFdJjE4sG",
  "key24": "551o1oXV88YynpNTxVUfMnsMx7crbmHy7Pmb2XKdaqDXCDAWQTJhZV6itGVXeAHxuwKmrB3zvRHu3R7E3Trr3ZWB",
  "key25": "5yPP1JFSYFpJxgNutYBkohnDMRFg5cmvLieaoN1NehN5tTttfPp7MU1zPy9nmypH7JyBwRFUMrj8hnisp5yQ3boG",
  "key26": "3iuVjjZYq77m15M9UZHmodPA1ZBh6XF4N1WLVhuB4SyD2hGdhv6zHvVPWJh4nARWe4vS5kBHY4AQwVpa1M5gZHHW",
  "key27": "3GZCmRBizUURNB9AtPzfXbDpzzNFGd9FFSDok8Vh4WWcGKrVPVddtf53yB9WUwoN9gcZ9KvEE9cMSLJtawNFJsDi",
  "key28": "4uiwvRyMFcTzgc4PBnZzR36v2PsWCjn2At267PaMXRU6HEh2quwwiNh2RrgZRUwYa8AGuMAbc4pNJx81JESMPTnQ",
  "key29": "4S8Qpxh7EBDTumFtYeUV65PLGqW712dRtrw8f3K3uYqBrhjBxb63bxCWx96tpaV5NWNXMjirU21fgWd6es2oby7F",
  "key30": "3BzDFew6UgrJxC4Uv3Tpq1tF2rkSBRd8uKS94XNq2DYBGuee3J2cNA9vZrDSjk9bKn9D9gzgA2HNbEcADpaZx3hS",
  "key31": "3P9dXSDiojsjW2mCK8TkPjcrxGJLgNajw6bERHRAPeH5sNoS3BiThC2YXnhkH6Lbop7WngStFDYqx9iW3j6sprGA",
  "key32": "2PuHgBK6iYvpA6czzRcE288nuv7rT3pHx5ndiB47yrhCcFmSrPBWp13WHvNqyBH369PkjmGDYPxHT3xoaGdRxRQn",
  "key33": "4w49kW6AiJJ4mn5Po2PEqXbKFJq2EBoTbPqcp3c2ZQYvgdz5dwtt6g1koQYMtwjbhLUFnCJq9QQvpP2uq7zryPHQ",
  "key34": "39YCb8dwgZXY7tNUN5RHMorZXgG6rRoyMwMbb8iU5RkLVuRTFwxZFYTqeGytauV7uZ18Q2dgZG1oqSxGzDnXfept",
  "key35": "Kbxmiu2Bnu7mcaCXcMsUmHwDx2kJbXg6yhfzeHPN1bHtxdepQmdmdqZWfxhPvvQxGKPghk5R8dkJSBWyfRwkLZ1",
  "key36": "MN2S5ka7555XtmxW35Lvkdcw79b3aifQoYrpuAd8W7VoKv8hfsj79xHqnwaLCMTrtMwxVvNN6WfgMzDCHyb3KU5",
  "key37": "32fr5Ajw37Pb8fGcyU32aQnmTafGwWPK7aVQz8QD63MYaoVKmMekYWfgeL1ahAdGHW3JMkmW8wMB7dqSVRqhseF4"
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
