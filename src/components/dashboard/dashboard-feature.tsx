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
    "XQqYzMpinJrur3gecJNHN662GZD8UBYL7CRnrzbaZEh6bmfiefF1sJHViHVkKWSFKs6VU1B4wgykC2q2MBLQYLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PxBYcLr6CG5UmFZB8sT4UorAbcKu2fVg518wagbhsxL12gjd4igEKaw37yQcRzXswZrwMBJEKffxpeaK1117EDh",
  "key1": "3sDiSg4trWJPLVpbe8JEX3dKAG5oBBFE1gfEVjx8g3qQvkyBh3PMQD8D2ayX6WjAsuH8YyEiCex4iaJaAXP1AD1m",
  "key2": "41qJ4kByu3WY82VcntPXS6ygPQz82P6aUHUdZR8ymnKwpd8ZcUN8pq5BtMx9dX8yssvjAW4J723SDkLK9Az61V7Z",
  "key3": "5g2LQYAouUXxZCeXSBizCRpHB23WQFRy7xHkLhfDvaU7bEUsQ7aQ6vXVduUGSHigrB81LbAmkLAGtF4dAjSHfRte",
  "key4": "JZ43rWeQazDjx9iKntVgzkGMZ2PSY6p5rmAkNERekiYPzFdz8D3ppzn2C9PwZaVzrpkwhhsddTMmkkoWkpdBFNy",
  "key5": "5uaDDra7qWsG8P2hoZmprKPb2HgSUqTfSEg5Sc21vgNzSrvALYRm97og9hGzSrbKSnGfPtLzLdnH5GjfFgNRQrbj",
  "key6": "2C9peAjcYF9j8PVGWwCN5dnbNzxKD1DiFqYGG6zfmVdqxVFuawzKq8i1E8yhL7akMindq1XpvMk3vUVhLXCHRTGy",
  "key7": "556uBVZBgbHVeZ9phDXbBPwDhhWhgAB5SDgvYhycuh1e4HpPgW5G2pj6X6ryi77aUStx5eYLzXKTXYs7CqJXZBEw",
  "key8": "2pdLHuwa64AHErwvUxCnim2hNGWyXSAVsePkMkpCNebLxakDLquCVX7d5tL6m6vSJ9BmEUHaF3W1qNBZaRnw7R2a",
  "key9": "4S5ovmuDybKTFqfvU8TxPM2GtFvkNt4G9STQd9D6AAajfyEnkie2nL9dLSYGL7aVDDxSm4W3jv8KUtaBM2azsk3u",
  "key10": "4JKmzZJbPobfGsUgUNCcBz5qXANDefXrR7C3h4ycqKBw36XMqpYzEpvULb8orWjjgayjSbU2Fkf541WBqg3PyYew",
  "key11": "H7c7QXesnAaY4bt4jLtMaSN1sENEdYN2Le5utmKFhjeKtTaad8uNRmw7P2vGPRczMYUBwNoHpjakkor9yrsNVrd",
  "key12": "4eS2Pjb2ku1dDRCNaANX2BADCczK4gMpiHRd56jqRceEgp4CocUmZxLcAwpRobK5G16SyMPo22NLFGz8TCKXjcMW",
  "key13": "2vE7CEoPsdDYhjSqFuAdaEHBk7pSy87jsVHf1xtFsxgjuw41tjY3DwjBGADo6U9DyyXiLhCVDTcoAB1TLDGVw7Cy",
  "key14": "66Q7vf5935HWkWFsAZMYyTHqLmjFw3PcTdPUYn4S7qSqD8PMsTZYZjTsRyyJv9unjPrM2thbMWHGEqdLy4jeR7n5",
  "key15": "47Dkqs1pPsWcTz4FfGmJuSBk5bnDWfzaMKEf1FknxC2WG8orCWgYHoVoccHmekzipnV4EzECCxbYDpRjjyeDyzw",
  "key16": "5cw6FPrgwWXb1CVRxEf9mLG2v4mzwSdSGjxyEZ8LVz5oFEqP7gvz181KX858GEyzAbSsAVZBsRSnkNN54WmPPAoe",
  "key17": "5z7okSu9F2G5amNchZ4DhGxHoD7XmPEMT4ToSb6AaJB5KtKjsYUmpTzcWWt2sLAWMmbpMYt5dmodgtNgaDXTSskf",
  "key18": "5SWc5z2mG47ZYmu4QKQCVXpZza4w7YaWXY3Fy8hFbUAaX2fXqTjt8SqU3G7DuiHpcj97WzkMbGwJcnisZGzAM6Ks",
  "key19": "4DoHCYe4BfPAJWqaQ9tTgn6DpM8T7QTXNU2XtJKmuzMpdQzyk4xgjuvoajZeo951Go9Dbn92MkFrWbPspoH1ysKD",
  "key20": "3qoqRi8P5RCGMuiZXJbhbpqKPKXFFmVicJZvuYjmhiwMUxJYgPxPhtAugrD38gexDMq9KTmFHm72dtkvfEJKmnD5",
  "key21": "4H7LXt2rVEyPgYXeB7Fu7qAw7pBHQ1pcGLWc6YWgSKjLSA2zgk9HCXdRrjaBj67Ms8GNmw29NroPZKsVsF7JL5RV",
  "key22": "jHPJ6zph65yGNUuh9bRJ3jncE2CDaxGZ6YyY9CLc4Q6aKCijy9bdVJZT8D4JbSc7h7oGVkxA9czYABSNAx84gdt",
  "key23": "63Qa9EB1NFXAjxLFGzyC7PeMbFAB38ZKUSwGF4CwVViJXMmMWCr5Vvdr8TcY1i5y58smVhbKAuFifKhsAkgfMUg5",
  "key24": "4U43wA7b8YxMAHcoGpA58LxSnTPToq7jU5GBQG8q1pcPipKrLChRpmE8P5T2u963GUrmjDrTvSxSyxNJPXFX97FP",
  "key25": "5Nic8jtoSGVBAwU9CdaBrUMY454j4We7o9tcwERYafohffGjzWDQJqP5iBd7LNd7cWnt2pd8dhzgWWEdBregtEng",
  "key26": "3TAGmWdXQQt9DisWH8ZYPe5dkYfASfnGekeX8BvPELgiq5xF66M2QuERZ8cKkHUwbxpTbfT5wyBkc3AiL474mpfk",
  "key27": "2EMj72w52iT3LGmWevSVQr2cEGjAekXLQWUgnoevj63iqqE3LLdfcPDGugnYy78JjicQqkk75aDBbaY3guJPjX2r",
  "key28": "35zpjuSj82vxMEehtQQVod2ouCCY1rvyt3ZY9Es8okpm3aYkDpL4v579b2wwKS4Ay5cd4VFWJFD9KL4k8tsMKMoQ",
  "key29": "3HkbGwnLCxGdsG4j8pwUokeXajgPBTvtJ6SqMu5hganeNs24N1T1GaP7L41aVRthF8bQGvnXYe51WASszrnwQBfu",
  "key30": "k3LyjhhE5gkJFkCYph26sRPMYvD9gSbVN7ruMnQ6LEQfbjvQv7jsaFWaEoHddyk68ZmiUM3DHiXcnSyXifvDdDo",
  "key31": "4UdQHdGZtKWM5vqCDoRCYBjxYXk1VKBfJiqqwpYuK2n2eTCHUAgbr6D5bKzGs5BpdXU5XZ4ePQdAQtGxjdjhwnL3",
  "key32": "538zF9XWAaGqLWudhHN7eQuQQ4iPPaX89NkLQiPDL27J2XyvkEFrgxRRVMFdTkaQ3n7F69QVs6Xvp6Qhpw4cmdPf",
  "key33": "2LX9j79FvzSedBuaJKmwHF3nGsbsNC5Tk9uAnJkhGaxbC5mfU4WsiKgJhpqd53BzqHw5ju2kvUcDj7yQGiVsj7BQ",
  "key34": "5uk7VbSfv8g5bm9CQhadfEM5g6t13Myp43iqKECju4FYwWsQBQVdGFj5Kpbi6ksibptsyAJJm7GrHdmXS8F4x7iM",
  "key35": "5UaoRuHAw4zzhDkfuDTwVPXFReHioWpMD8P1dRgQgDk9hKJKy2ML1KT56FaMYjapyC8mjbLrBuET9iATT17EHyqP",
  "key36": "255iRhtpBrUAawq1aFQQK3K8qrHdAjUZHztYaqAhU3WZMRbPi5nquzFGYaJ86Rm6pHk1TGjhuekfwKA83EeCfYt6",
  "key37": "eArazE2dQvzsXPdTeFV4yfioK7eYR3d26eTb78GtwfC3C8xQaZhTM3MABCvKhTDBkH1wtrzeEnriVgkGjoxsjVZ",
  "key38": "58Tv7wnU2eQp6Ef9qF9zajCdcawPkwPvd2ophcwheaG1QZq4nDGrL9Nr8FFmLzMUCVea26U7c15fZTEZWxoKXRH7",
  "key39": "3cA9pTeWGsGkLoPtpaSGWAosCSAhaNxo22D85y5iMVWPFioVbVgBYiJFx6MrAbYHmzf4MN8CrWdruCsDoJ8ZSHKZ",
  "key40": "5q6tXNg24nkNcnSs7n7Pj6XwQuu7FZgkn5sLutsigDgnGZQzQjbyBRr2LpXkYPZ8n2dV99k8XpSZjxphSsDKhy1o",
  "key41": "7ivfM5MvyA5T9cXnMBNLfCtqcH2Kd4EpjM6iBwxzLQGpR5ohVJC7PVENKDTFKq5wNVrEcpGSgSy5isYoZu1dv9X",
  "key42": "4h1YXtRBLVQMt7cgYJjVALJGc4bK7cvmdFcNe2HpcKLRMW5j2oyxH83LPDLy9aX56XKzReQdFZzkang7Jzm37SAQ",
  "key43": "5sdYdKfkcbjdLfqmxuF5aKE7GNT3Mny8rXTnpnrSfuhHgFERZvxLzEcYjCjWk3XrTChGkf8NaFgTjJ4eKbz6VJhe",
  "key44": "3KWy7JxqA7iMw2quZA8VgYaf8or7SSpQFaoSEk78qUTtsASVxNSoMtvff5NEmdXZgBmP3nNwFj3Zu5kbr7sdr3JD",
  "key45": "PcyV5P4TkWnwdNfRKDDEUYwTwgx7chgU8JvtdDQbYgjzakxd12VmYBUhGGbTz4ZdVFCJ78qJEjb2iyZYaVu5jes"
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
