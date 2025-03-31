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
    "2UC9SsLPzk1fgUfYhZwQXktUbLCXm9ZXFbXnGxBkG7qSQf36hfVePKx3xQQ97veT8U5N3LqAbSQt13iwgGCf6gEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hePofo97Y6EbhcZh8wEuEz8GSbhM4GmQDaDbLmxrhXoZwiMi7nBvqM7PeEBfwSwhzTdsJuj9tsNYhTXxxB9KPMy",
  "key1": "4TGqjzkdKiFKcuxhGvZDVj66aqWSvv3kpRcz1m9nmUjKVi9vy62BJdBh6HFxLpdLnQWQSVsKymLLTvbY6p8toDca",
  "key2": "64aLSMScPNTt8mAAfK5jETYqBmVvw81zw4V6WjQvoUeocUdDcdzCAqMUi7AVpaiypTwa8TtnkMgKxZtLXJ8n6Y66",
  "key3": "2S2rqsyPtptM6AwBsfXk4wzDA5oTJVBKJkEFsv4VEp8X3VhNQKZfCCEpKbwC2vPDca6Abqwn4hKZgm37nMVJN7Ey",
  "key4": "5hTLRrRAmtq7acF71offjDgzZjF9yMk3x2WUHcm95LGoyiJETdFwKh9zThJYro8AL9xECFN6Y11B4htyZXw52m7M",
  "key5": "36NcGYLPL5JEgRnkZxNzXmaFXuDJUbQPYULZmTkm1iRaxe24M2hDutGPGtJQ8W1zCcrgFUfmUgnjfNvA36xZdfi",
  "key6": "52n1d8kpEhYk2esXp72Pg2mKrJuyCbgk5xR72Z1b3hLo1QEjrzduWVcYQyJ7Myqx84pjons5Bo4JJR4QtkHxRTxn",
  "key7": "3pFtPr8QYVZWDizoiBJC4XpgfmXenh1U1RF96bCStetS9Wktgu5JpL7JMxncG5ZP9HDK519j3sYX59qGxW9zg9PL",
  "key8": "2hviLLxLNWkMxGingMsuTnaDdAhkKD1ys8RPBmYkyXovGhJ4UoTrQLhdmskkuhyzo4ttKu5cNKa2EbFULMNYnDFm",
  "key9": "615gLzbDiNq3A8V2Z3fJsqNVi9quVWbg7ZdJdgnzG7nBsp42XE9xL6yjaE9vXWBNQr5wqE3pm2eSTQUFHxW942sK",
  "key10": "2qf9C69iWTRQ1fPzfq4cuWBECNprHWhBrGxrvqTCcHnYQbPYcManWgD1uHUCtSVtLXuon2p7ERBxXA8Fk8RkC6J7",
  "key11": "3GT7H3w9Gct8Z9Mj4xVoSqLwjH1vjTjGH5FiHCYGuh25cwvnKkg6eyeodTfTAi2hMgeR7MaEhK5HSDF8xSpY4xcr",
  "key12": "3FJG53K7Rv5SwEpzqwqym21cNM67Rr3CCEHQ8Fcot5zKbX3rQaBEcyo4YvMKvTb5A8c3ri6QjvAuqHGtyymht145",
  "key13": "eHENQ37LMSv3yc7BeqKH5G5HzB6nQwCXWZWuxKgAVuuhZb2Sa7Rs5Y8g2JZcXHDgtU2jqNq4n8MtosLmfaUwtC1",
  "key14": "3A1V6VFdqNwTTP5EbMDZQRxMgBif6ErPm3KTUaGagH2kFmeokhbHbwUNbzYStw9AhkEsYCxm9LvZHgcHq8xRMNpt",
  "key15": "4cmzMHdC3rSVMLdzSDqYy9ijhT48z5jB97j4LF65KbbH1Dw7M3DGQ625YLEeotYd2QpXNF9WDb4tRnxdDbBvCceH",
  "key16": "5t8PbZdnqYNKrAhU7TLR4ZaBtVvTug9V6nQFBLya9gvtcuAbNfSYPtAdLNcWSyQW4zrcwqrtJxPVkGAyeRuvaMas",
  "key17": "2WP1qUk3zxPrXAKVTW9RMspDGttLvu8d9RJB8Sp3FWuSuW2QRNJQv1mscK3p1Ys3DhEYU33Nv2w8onVQnrv19ASb",
  "key18": "3kJApv9a6d47ZsaxrspYckKgYiZfnR8sVCA4MNgiV4rsG2n2EMREZLCi3rpSdFJNkP73GENtFHX64fPQCRV3HPn",
  "key19": "3oDEmspqr3e3zLQe7SKNPjxHXix5SSiCoQGzjEM4bAb2bwk9XhS4wn3WTc13fWg9LyMXNMGjN25kGnp7NVBm43K8",
  "key20": "DQu98gQFE74FuQrFSzSW2j2QHygJEB4BSEkVA7pb6dABsw54n12XMCNaKw9s5mbeU6ESinerReFoRynnewWmTR3",
  "key21": "48pxxjecPTP58o5Mxy3qWyUi5CpNpkNyqs8akPPa3262ReHpWCt4NCbcNHBXpUFewqiEy1UoSGAJpceoACGkA31r",
  "key22": "2o38DoGWovvPxM4JaPG7w2D4ZqQMG2wSsKn4ssmVzmV2hAQdmXStW49h1jYAcm2zCT3HpohAaKMQQnngazAgciBd",
  "key23": "6scFAcNZdHyg8WfbVN1pJZGaku2QBXCZ1pEWUn9PaF2BfSdKTfvvNbhNdPEPPNGbSfN79skTdXQbsdtxfwFrJoT",
  "key24": "66bAMprgcfTtxRTmkMjLWE3kcS4fUxWrVZ3nvP8jHHXf1Rj6vTzxHd6w7H4YTxFqTVijmvZtNF88kTcKYi6QLnCe",
  "key25": "4cWKic4o6WjCGEGeh6hFwA6L4HeV7RGbWuaJLBXdt3rnthYd66u2Di1muSNenpPj8mmccjjAfbu5sJjVDKN4YppG",
  "key26": "hbGgvCyahhjXrddGjgTrPfgohhPG2jc6G9KZuU1dRcFLbUwD7FAQWi1d8ZJLF6dX5C5i96z9LPxRt9qf9L3HZ2s",
  "key27": "2AoCNMJrwAr4xF6WtRB5w9zszNzFKs9GokRTKhqtDZ3ZXvTshV11phGAkRLKUCSpKgKMLiJDfSeR8ZN3hehoBB6Y",
  "key28": "2zS9SkLgtwmMWeLFZe3cCXMLmj2ck1o4AvMoe8hsxvms4FSf4hoYfUy3eQiqRUty3D8nM9zeuam74J7NwgH1w85b",
  "key29": "eFpx6CRHRufEV3L3C5yGQKk9BQppMNkss5GaP2VqJyQefSdXJosyxMsoC6YFAZRYJikrdY6tCf4TY8D5X3w8DQr",
  "key30": "2uuRKNsTwjJdWVpm1V4bVhogxoPh3xZLxDvnKdzoKMCjmqcrigpSvWUj1rZwHS3DL1eqWuR36nXzXroTfsow7qM1",
  "key31": "3dFdrC3QDpWHsnumC5dV74yVXLJ4mtVLG6yxzmJqwDnSrNSooorGjgAnvfKt3zfRie7Te5f36LU2S8GMT55RFPb7",
  "key32": "5AywV5vgugjgsqSogXekhL7QEVUnWZC6mnX56Fff342rKsj7DhxQbar8NnovJH2LcJakCgv11DtBd7jHPAHy1SHs",
  "key33": "cBXJAqXH7jrGx7dFT9MciG8wzHyf5LpgXkWaqFLz6AL2HU9XnUcYCEjLn1VQ15hpfm6C1FyZSVVzghdE4fN7T3x",
  "key34": "2YA53c9sBS9SnrWcPHUiXgH81d4Y3pTbDpTHnYsGiQwGhPKnoygrWFL6ZbmTPqhatm6rM2yYK7YyDbeFouQ75zvR",
  "key35": "2QPKs6cjx1eUz2tN3WWQG6J5ee9wfLzrVjRj2TA2foHxXiXSFfawDW4tEeYFFMKH4f84wv5u4PYciLESboiDsqk7",
  "key36": "3L5fovNp4WyzEWhrPxvFAEe7wYuzDTn9iiYALKt2GQ9hzzJHD2CyY9KPTav37Q3sNjdCPDgFSRE8Nrs3Bv2WteUE",
  "key37": "3CasRRSW7oYvScfTZZZBeSvNUEaTAmzfQvSYfCKp2JawW3H1H7P2t1V9X7ZUVjoL77iksqBnkb7o2x22n1oWMm7C",
  "key38": "3kbzg6rDBUSkTyooy5VCYGsgbEAXBZni6WTnqnQigM1xkDtjHaFDnPoXgZFFPa7ncpjZB5p8yD1YDhQ24hK4DxM7",
  "key39": "5J6tRxQkroyZF5ELfNiGEbmej6AFCLdJkj7BJn9i1rVQGWqSRSAqSG2e1rsEVt4FE69uXrFM9t81Gvyii7F1tzBq",
  "key40": "4qzz42tYqb9DGWXFEmKBMUTqK3eHDacrNyoXTT4i4eawSkDLGWouA26Evmz59UWscRYG24Tjz7ArGyTgapDFZvBv",
  "key41": "n1nJUj5tSJcqFNHw8x9XhpDD3NHT3qBLvHrXr2xeZtHi7JK9hgiDCN6G7dXow7BjooaNNvhD2EkMa8cZgeyihyg",
  "key42": "2s9iRvGND8haYmP4r8v1vhbzXzPASwNKUGF4ijyWegbJZ7WHN61pr7WymfkhQ9ruQYHcnufS7EnSKMceDa7AAdSC",
  "key43": "HBy454rYaTuVUn8T8B3f1j1XWcW6rq4HhzPHLu6gfe6MU1aRmCqfwDKg1uyzVNrNnVJkMgGvHYtSD1CmCJRzepb",
  "key44": "5Lx2xqL12Jd9sJdNfE2YfMGxxpSJQP9uVz3Ab5JDbnJYaAzDN9dFJwPj8MuD1N6wfVGVPG4UvSAzfv17cbGfm2tH",
  "key45": "4jjKAWDp4dus19peSMVrjo8CKJMfA5Ux4msnpdukLfB5GbLZS8tUGVTNNHxnvvZ83WhgrTPLHpbVtfLCyCTfxBEU",
  "key46": "5M919onJ1cDE8BStWfAWcjKFpUMWLigk8dnXYw4q4N7JhRYPw1JNNPCVCyQD9E3FVF4BA3KzmizQwQSfAjxUxS8M",
  "key47": "53wmQwcbmhBYw5niocLmwYmWLgUEBUEzNgW7MMpHb12H8qDCDtBi4mWBb5UxQu2d14HVvdrsQswfUrEAoe3kWj34",
  "key48": "3Ezqqhk3sBvtLnPBTtjLjrNjiiiaZEw29zqRv19M5vj4PHPwKAoXLV25KnkvGHPteMNzRcWeEtjHEEMbMVd3hTdm",
  "key49": "4Wd4FfrbyMXoChQSPMywozvjLpEBrbZgjux8D3TjD4TfeinmcGekkTT7EUXsp7N6RQ9Y9czrAjCK2ZUxx9z8iEbg"
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
