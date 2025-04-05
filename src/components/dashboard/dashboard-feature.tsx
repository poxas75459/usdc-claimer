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
    "3ngMBdn8DnMpAxYNKf6BT4bPL9WcfzgTNj1Vqdzwh2MahngKweTfxcBeqEUTAGX1B9zya3XCB5rv7hy6Wu7Y2srq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PCejkzZYezHfzKre67pnFD5GGpgMsN5szFBKiKQa7z61sY3cuNykj5D3XEtiAqmZqmGPa4rZmspirof4ZEBUH9V",
  "key1": "hHMQhkajYZpfDcMxWsYw9W7okBo2wE82cZxVSg4Ya2EmaSxLdGX8D8Ju1VboRLgoEeC8sym8tg5MFLWXY3kFRBg",
  "key2": "43KWaFjRbRmL5SuqnerRrHqU5prcn8M14w3Ww2YHxjcugs5BCMF6kwbthHA99GVupyXiWPRpn2JfCEnButDzF3yF",
  "key3": "24E7Cw4oLpN88Z76HSjy8j8Ug2X9J2XofPESGGHpGcNvkbDpKD5tabio3RvKwVi5K7f5t2i2yEEfjBiYLGAdmRzc",
  "key4": "DUELorQ6uqehApPMgTu3PuJPq5JGHwqikH4aBGnM3Bqb7Stqr68qDVBF92vEzVQXJ8Vt72WUjWGJ7Fn3XddZyLy",
  "key5": "3TnBGrA2xhCM7VT9XbocRtbY6QjvB61jQNM6qVcJVdv9faKVvYrTxqEn2noL9pxzaAteBaodEmdycYGBeViT9hZL",
  "key6": "2PXkeXXeHScrshgi5uqRuhsNHsoLfXjQuqjhHUGGh9xHGYwqNuju2DMnZpkxPxXajeJxDXS4SwRUP9Y1e4WzejDL",
  "key7": "34nHTJwnJTKGJhTpZAQdo1A3QpHr3ZCdxp7ZjAsT6yJQuXtU6vS5zJxSZSCRs2CT4igsQrRjT8ZdGnzJLy6ovGnx",
  "key8": "5v9uL7Drath5cPQKbBEmzHMX62ymrHNg3dQAHeYUvoHi3nhit47bcAZyRJS1B7XXbvqx38eJfKQDAMUP6EQRSybR",
  "key9": "3X6yQpPaNR5m8fNELqgJmhaW71VEEZXg6xu2DcRv5m7zL7EsrSjmACKrfFHEmqePjn7nSYZRRq5dTgiZ27XWCU2n",
  "key10": "2X6khZFbqLCGjsZ8cTLup9hXFM42Vb3TmCSwDmU4GwM3UsHryeyuqBiWWGkxj13Rr6tBZwtpswaqkmvi62iVozNc",
  "key11": "4MmGhgD7fkTcrw7pQE4GXcQQwrUdVcxX8s9uKJDoWnkC4Dd2o7GzpbnuKRpMsnzHLCsUoq8boy2dwf6jQ2kqUBFo",
  "key12": "3TYxxZy5yMHdjipBKU9cAy5b6h9to9A1MEXVmocB9tbW9anvFA2nCrsKU8yDpuw1h3SbtSvExFrs7oBg8ycGPJV3",
  "key13": "3YHKu9nRbe88sqDqu9EUAEDbidRXpNrEp4vnq1PqGgqWrMUztY1zaTE7A2fatZM28mZg9ZMqmVgxgVdwx72Jtdcj",
  "key14": "5C8FDCvjBFyoxGgze24itgKbcBf7SsPKXfGJF8DPgmtwQP58ZzN5HRX3sBZSQGcNhzQU8AtzCwBjYgbTfXLYoBCQ",
  "key15": "3pQMzsHiu4QHf3tSyiycUbZEXvNiUnoYkn2bBfKhDz9SoVr5Qae1omdMguZzXEPACvTVyiYEVKqwdHApUi9GVq3U",
  "key16": "5oisMHuPR7AuVFLAeBJgkUR67REZ7iHsKqU7xgUVzo2DcmJDEPTJHN5y8Ho1DVvo8PTgCgWQtXqQvgwCM8FjCj1M",
  "key17": "YcQy6q7Rz86NUjepYjspChEgnv6jj81yveUZCppL3q5bTEXf21tAUxK5LMfNp6T7zYFYEfTSVbjYWN9NHk6hbyi",
  "key18": "67heoXeXBvRd9Pqy4miV6PyJsouXqh3PPWQiPvBeatdCRnpDt349MpJWmdT3ArVeuwuakzFdVSGvecM3dSddatj",
  "key19": "58aPivdvgSSMtg7Smdup8Y82poJ5wpcJEPApAdcp54Ank8hnATG3c1UDanPWhv4LWiw3jjYjWXgGuxw5FX7vRLBV",
  "key20": "hwUMNxEfSg2WEB5B2PebFtRFa6kY1xZoPvj2y7VFNEpGUY8XNdoSKeCULEkTpaV4S8Yc9mMb7ZcRx2rmDv96Zzs",
  "key21": "5dKLtVjtSs6cZCewzMYUZu7e5VU3apypfGeJNMKCJZ6LKWMrXCNtfujbETAF2PMUF2KEUS5m1GszQtb7w1MU8FCc",
  "key22": "63zft83MRH1z4uvsEvARfiAb3epkKjNKKM7Vj2pz9SjBf3qkScxLHZUUeLWDsVtSaX7pFNtwktf7uZ7DYToX2iic",
  "key23": "2k1tEX686KkyHyZaWtkSFDKpbnZeRMRuYU381BKvLNSpCoNDrn7EKA8sGUzjVQSGSE6y5qLaSKy8hAomwwFWDox4",
  "key24": "J8fD8UYLEN8V6vfgEptdY5aCNh1CT4XgCfUpXgeFDv7vYft9HEAhz7q7tskw2CqLHcpE7yPd1R7VhwD17CTajSR",
  "key25": "5hvvRmRryRV9jy2MvuXeG7Y5KvSV52Gn7gVxVaN8V6zZ4RZDNJgKNYEjX8XSXZRvzP6YaZr1Za85thGyhKKjob5L",
  "key26": "2jNEHLEUPtoLip23n2yC9psstJP4Hd4M85J5AowcPN2hn7M4UgefE7z7SxK6W5KPBbT6HLTCiChpajQg7memjzTW",
  "key27": "VTezTUh9Fd1p1CXnFZb1h7ou4ZqngGX4UNCMyk7PxU6W9JnHdq1EQ6tZFM2Rv8k3i3WFd8moswECqFn8y7hETx5",
  "key28": "4xMQLfACWv7z8pd3tNdqivGQFBaSurSQdfApq3pzVyUFuAsiwe1t7XamReAuX6xpBV8PVsi5UrdeGXVxTnWMwUYo",
  "key29": "ARcyEJt1buxSDgaZAf2zJrxg9vDMBJnczNuXmt4BDg7x3eTPjZkMgHDUcVZaF6GBwMn2fyBdkwofD5GyYtQ5sra",
  "key30": "5nK9vdb6Ej9JDMXacujEeSt5hKn8WWVbuBEsv4VUFCvGyWBsdbvmZLUsDMV24rCzuBb6ojYBZbWVdNgYQJh33ks4",
  "key31": "2Mj6ZRDGzh5NrWd7Rz6k48tCF4dEKxZT8hHGRHcaPWD63Dfsm8sKE1NtyzKQ1TJna3ZVLA1FjEUW27xD4DZxUejS",
  "key32": "591UjwHhdALkkTcHCyyJvtSWtVmva3PNjP8LKZjoihNeb6HZJEdhuH8DfQK2stVdef1ZsDmpDTpTdENDUgs32yKb",
  "key33": "5VJTvzzFxpQY4hRVCYvsPMRJUkoKuE9VnbMsSvC14zHhLXjQS6rfSXRMsKkVGGRKDoAVudEGjrYHmJzZA5T8L71J",
  "key34": "3UNTXPxT2G5wy2LUFLiEeSXaPAFvGKcrNDquk1zWwWpHfCGNChQUvqtztTVsHhAxUVj9NHjYqNRgHz4rASdfsnb1",
  "key35": "26NyjZsAnXnNhJNnHFbES2H6NYQsDSwd8icCogXkZ6qbAsBe5ps284nbuuMxnKmnBdEoFx46ozXos4qT2uLGN4o5",
  "key36": "uvptX6H6Cef3vgjEL62b2BTfemJ9iB37ZM1BSuap1gdHrpGXoWEmYnJGKb5LTLVcxEphz3oJE6mBYii4ySN9m4r",
  "key37": "4JKzX3MiE7URfykjhrz5xCVuXL9R8ViuziAsA5Ggj5mGEF9zDiSbZE65zQGhDnFfbM7ZGyNSD2AHstKYusTsGNTi",
  "key38": "54UmdL3rkvYD3SJkouAYaDWv2VE8BCnFPPWw71ZQ1WZ5Yb2jYrb11UETV6BPjobQPcjUwY2QoXAs9mHq4h2QfSwL",
  "key39": "YxozpdWiCVcQoeWCKMeHyCSN81waHBKgTpJAQDdbY53XsgGRFWaXfkVCLKDRJ2DuYncGh7z8WjM4gMz8dgWjMMP",
  "key40": "5xPPk2y2koGphfQ8VD51MeDgyG6uLiTMkRufrR2qXvywwn8WERHQGB9d4FXT2dtL7hbZYjgBgfo62YMe3UqaKtwz",
  "key41": "4fKwAxFwKq21ArZAwwxkWq9SuXQyR212MysK1R3pYkJhNieCRY5ihc2yXZFPtqKkdqd6mPp4nVhw2kw5v5EKB3qc",
  "key42": "2Dz83GDYgfdAEKcdTyY4QiWtRgxPvGaMGyfrJRyMEPKwisAkUwURv3fU3rV79cC4gKiUa9571two7p3HnPhmcEQr",
  "key43": "Sfb8nkQwb6WiHRx8GaV23xm15HVpHMYQA6BmmuaLKSaNztAPKhGiDC87MpnGHxbkg4KKapQgbfXqVmrRZrSp52p",
  "key44": "3LbZr9e51KMiD7AFhMffmen4QekRzGNDQnPhWXaz1ujzA1i2emMBXhFSrfhjQnqAPQiiHKKVTbHfonUQ2CX7q1Cm",
  "key45": "2Pod622G6Ft5irbCFqEZ5kRKWmbSmNMM1kxe8xLPW7oHUeTAvqrDDs17U4vnu9KWPmbxL4c6Rsu99nA2CurkAkkv",
  "key46": "EgoktukDtPLpiN675SFfEdJgCbxXmrVgyD7cFTSwB3xGBr6VZ8SkqGFsh2B8FeiRxWtyLPbtVUUATrzwPhs1jqJ",
  "key47": "3SztSC3tfzRFriEsgocz5vVMbhRdK39yh9zZwRpTJCTXiYuaQfBZAdbbsSHfkX4i4doPPYJRxtYR6Xi1ojwi9KeC",
  "key48": "4UJUZRPMPumpuqPNjR4SHgUsYZLTfH8GyAofy37V2DLHDSR4tcmWkG4DqBsUj6n4bwTLdcjhQzmWUCr841whVQ4k"
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
