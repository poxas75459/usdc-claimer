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
    "5XQ6VnhcE9z1L6EAveVk5PHbYPJPoUi4TumcPVH8keAAbJ9VE4iBap6duS7i6vENCxMbDvJ4QyUAD55UmGuHz34F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F1YmvxyZ2nWtUQPygijQjPPJ17G6c4266bx7xnYvjEdLQDvtSrHAuTW4KdxriHFsReKQqGRYjRpoVkkszB4FNAZ",
  "key1": "1bcWASbwCEXvinwe3VXAK4bfkzNFbEdRKFV7RQcQSsFv3mQSFEihJjcnd5KVSYxApMdy5Ca9GSp4s2EGh5cGSEW",
  "key2": "X1vUGUN4hikqeM7RVKzkM4jXN6aWuWL8DekW3NXfUjQEM5eRp8mpfqiDzMoDZnMdiA29b3tytiRb7ik7c47Wx2L",
  "key3": "39ST6DLvjdx53FqVtRXv3vGj3MLHSwDHyjMCTkyYhAPSSPpkHSfPdsHFh6TF77eEWWPLfc6gtnSJTeZLGT8URRtP",
  "key4": "2TSREc7ChL5xJ38twFHS7tzqWebMjkBNzasmyRxxEa7D9VY5mzPDbqUSAvFgiPC5pz2yfxfBUQgowhXbLZM4iDY8",
  "key5": "mh6WcuJYnSvfjxkwYBRopzxMvFvYPGqdEbHQjDtcXZ5oqv1uiooeZuhVndJsmJYfVeNxCRpxaVSB9a5Me8GBmCY",
  "key6": "336XijMKV2HyBpoWPp863QNbq6hLGzZ3JKEudMmDhc2E1Yz6ffSuP8AMQKmD3QsDphDK8MeetYpidRqAAjPA83fJ",
  "key7": "3to1PYYzdiwBgSm8xrut5zXcqbjnSEvNgvSfjeiYRdPt8Hp7oBvCUAfY1AP9Jw9M6gvbdMjoWm272s88rR3FpmcM",
  "key8": "5uhheZbrbmWeQYeAeqZT8s9KFTRMVDMCmF4zuYQ7Jfrjh1CQiCoCHoaRrzrmHTyeywUSG3ogGMNr33nYYwWrmsQK",
  "key9": "dBNJyc91xa3icqjrK79DM7rm236QMeyza9nRpWAf6Ey55UbUC4ifY2rqtNe27QVNTS8tC3z3Kp3c28ryUafLSxi",
  "key10": "U7Z6k83UgzVgSkii8h5uD76LRtk622MU5Zuf5DGoXgkYosXWNytiFNs6njSWmzfWjVfntxb9pQmgFh5h5SWGJy8",
  "key11": "5TqD4gcebeQ8qfiTWtc8NaDq5hE7AHito6RhuCAaBT4V4pY3xMUSTS6ZaqYvkxdSH6NYoWKQQJsTrjS5hPk9JUbJ",
  "key12": "2bewZahiimEwnSSZR1MzYGp559WkBA1iPwGuK8JDdHuiJwB7A4Py24cQXhvAxe5w3nHSaz6JnERy2qftg584fTmW",
  "key13": "3QJ7px2Nnjz4ajjbaftxXP4PxKAg5vFyDssSKDaLdRQgxzv8AWyYjyRvvsZyokXyyjsbmtArdikPEj46eSfYkvuM",
  "key14": "359qKifmdEsTNz83J3Q27d7aZbGi1BWTWkDWheiQ9cMYSYda7o2TbamVG9T2RSasGLYew18vi7LDmxkykYxnwNJ9",
  "key15": "4mtQnwYMjJk2Zc3tTtEjfa9mYu1fAbwnsk6RAErVEEXofbx49mYjHoSLyeQGcE9NYxmBBfhCqkjmm13TmFjqDoZg",
  "key16": "2yT2zeFTsPAX42RS8gjtAWe5EUD1fsJW8PaJMjCQVmh9kpcryg3KF8k9bxwaCv8DnFK21ZgkbUC4bw2NTp8rhjvn",
  "key17": "nrHB4zF6LzpZ5NwDmk7JcvYq2k3o8PsaJMJ7mJB9rgQKETC5xNPWp1Qez2YPUWThBKpasax53opeQTB717346kN",
  "key18": "2nbWQRupgd66Ag4dKUZd9KwiCMvfYRumPXdgeURDrY8iEdQXz5JWoHVP5gCyWJqMJZ9e2eEubKm32pPygf3P81oz",
  "key19": "5hi28uDTtxUwJ6qaa8EzHTs6sD95hizX98vHr2Jft4uqdsd16XiSimdeVxBwhZet5XC9S2b8mGJXgbXedzpeN2nX",
  "key20": "66r8DsVLDUY2HJFHoEYAZr7MMybckUPX7jyoA6m8N1eR7b3ktpMbHH7ASaiPvuZy5adL3WmmnQWZ6kBgKbtsfMvM",
  "key21": "5GcA4uBoj6V8hgb3667pa6GY2jA2xAseYkED3qoifi8cqJycMcqDs5sAEeMxF9HWrcxFZZ2X1Stqd4JJ4zEwu1tS",
  "key22": "icR25hdbPPkn8iJDYkzxwrBVwGWtm66juaVSQVDfi5XQyLh4hTbaoMvwyhh5XoCpWPYWJPcPNDQzLyA7j1xnSgy",
  "key23": "opSNfm1zB8hx5TFKGNqDzEZRj1MkVowPL9CVk9bNRgdKTfxxpw26Tf7AHgXLns96VvNufmegREySuazSZ4K14bo",
  "key24": "4xiU6d9Eux2YLJC4SBFcp23NSJwy3LAmEDLPxN95LGrVqpsdc1Qcjmeru7NfUBBjwefe5YhUuBB7ud7VR3Sjoxnd",
  "key25": "4iKQVdGTuWz3nu1YbU7Ew2cStTAEk6DJLYEst1D2pCNJraCq9QUcdPjVud58fygQPGbJxuf3aMWxeVvuMhp5ixHh",
  "key26": "5M5eWyWNopieEmhw6TT8cxuJmMxG7PTAoMAjkFJsWakm81pjjhAcnVuat4VAHYJ2hXksV9CMifaUfUZEJ6KatqZj",
  "key27": "4Wo7377UeLnzctCEbSmBjsDnU9soaspdWN2KH9JXV4hmJgLonB7CPXbzQmFNNXeToEYrhws429LjRU44fQxMFrUa",
  "key28": "4KYJLrF5Ki1rv4pstJjerz6PsC63Kd4x7JDoNvVSkUVUFEh97BVxQ1MeNLV3m9eyLYwh7vcVhHdaHVdcLSVxc3QV",
  "key29": "FvSWvPaGEZZLKNK1mHsuL9whgDVDsMfBKt5koMChqFcXPMnVUhXhCm8GvJTzxu3YDmL3XTyKjXJMouzs1PUcnci",
  "key30": "34zJsoTz8DCVo9pvRFza6arQXBPWWb99KTA1cY6NUe6hXmLRnJe5SGZBsBpszZWbdj8hmbMfn3GfN3d3AawEU86L",
  "key31": "5jw1HLo699tuq7HMjG6xAXz9MCLgvVWgq7XynwtnjCmJqdA22LXPRhw2ZNVNdZbWkCr3ifbKTYeiPd7FYfBq2zGa",
  "key32": "64C7fcL9g54rX2MnmLCpTmNPM1jocYKpoHoy67qqy8uzTkQAAg3gH7WtnwecTRpwkKqQ94tgXjx2uv5Lhn3tZJPQ",
  "key33": "3VGtJ9LStFHpZHfdS7A5hWP8UioQsnP8u2iAyS9PjpczHRLv6TnB3iSnqCH5FGgYEBY3zWAoRX8cRzm2woztj3tT",
  "key34": "4oCVuc8z7UAokp7AvZTL9a8kBXqVaW4pYuXkt4RzABUKivQe9Zp6cUT6o6PtDd77Z4bHiBPHZNdK5q3f7AfcmPDP",
  "key35": "3P1dHcx6QuRniCWZ26KVjoxQPoKejS9Y56ruv1aYSCzLBUmr9kDqdjLA2nuikHsgLvnefzwFu1ipi8k6XKY5omF6",
  "key36": "d2RVfh4StrjWFJVooF6D54vMtyAHCanbT1fqtCCgRvNrGoqtTjwCye2HACaLcbB6gBCtyK3zTWaJGqzFKcy8ZHP",
  "key37": "4HUz7ESJaeDFATo9343oJ8Mb6nR4FEt1bRyLEp6ZQdw46de2vyBjK16Uy4BuhEKo9tUMdNFTmgDcDcP5CkWq1Dvm",
  "key38": "3PHRmUYKM7dtTdWDxdceNJFUnz9Qt4HAa43Rwi7wmLZPj2FpBVvACKFrSW676CTG9G57Kac8B85sEQgh5FVTmLbz",
  "key39": "5CJDFGhvLzr9J9fjGkHE5xRtvkXcf8RsdnrXqjc4LYZrPuyNuW5bcVhTVyihPfVBh3jz148zYrHAGVjNqi5mtq1s",
  "key40": "2rfFeqrnFPVTePmG4Q2p4Mw3BzWmvoJa8xgM5Z4gjrzWMUqFKhPMPJkoVkLJdscznv3xkP4UpY5qTdrH8inbRHkx",
  "key41": "5xXuKYAL67LwQXbfr5QQdscGVdaR6vp5kpvzQtAdXVSVDADwpSb3WtZk6YbzfGrEinDzFU4q6Y71GUNHyF88Aj5",
  "key42": "4pBkwZqzAWS79dNxmrKUB1tsPFN5EYZsS7qcgHLaLbBYiax5F68zq3RzDvVemHpapJXGqCd6UpbbnegGMGoDtjP8",
  "key43": "3xbjPUGekxhfcU5ni1MkqZRrLib2gCpDTiX3g9DqKY4rpBMFrUEqdkUVoVVKyRfGXyEAWEa7xpGYnMC6Qy7GaJn2",
  "key44": "44Zu66DEVdhyPWLnbVgib24xHdgKGcKKWHaoEZ9f9KrwstwmD94UHBrowoRbv4fzAjCrj9NmCGUoJwijRWagPVWo",
  "key45": "495Qi4u5GAcEjofpdVaTDsY7n6BAk2iuEvCxsoDTTd5STPWgjdMbVvo7rGp9yxkHwPfQPtS2LD6k84WfevMf7pJE",
  "key46": "4Cx5P3vUqq1emEyj4pGj6fbTHg6CjMrKvfa5uQPXVYHu2XQJ5H9sa3aYgs7m2mSJNqNaaGzRdLnN74nsvqRE5LW4",
  "key47": "5uu1d6QrxSZm7ecE8HTSnqmsUyXvsaUrYqeKTaBJwGUHzLBsjJnaRmCg5p7p7WUEmxGMbyi295dyeaZtsj4jyd44"
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
