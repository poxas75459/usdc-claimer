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
    "Xjg4bseuq1BqRkS1RR8WYmdpiAiFGAuRy7WZCu92BTL1nn587AG1TQ9yG1it7eNqWuFrzEaaUk3cfBTkjt3uUST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AX55sxXUkRohZNSMvowcAYsfJRahdxovhm9yK6FDs8cdRX8bC5Ccfo47CcnV19WabNTzWJHwjDP98Y96rHPtbX3",
  "key1": "3QAaYiSQYp22DRHCJwcQxzZfhKjcnSgeeLh5dMxaGBvS3JFA9o2jRxe7FbP3kubCjGMzybzkYVvxhVzRjYhHcAZV",
  "key2": "4yNNAE1askgvfNrQ6e8uBC2uEyQJHcdLfJNwKcHnJQGiNAuh6ZBHPmatHKFFFiW9YvZKMmF8LfTPh17BhE8wBt6f",
  "key3": "5q24Qk4pBen4XU9UcDg5WHTwigd7NXA42ZHUjPriyq2AYBAA5gamTqoKLYuGs2Hb6mVPypWi8oebNzAVHbSVFBiv",
  "key4": "4a4ciVX3cCkfcedtvhLR7wgvXKUUVER2h826M48xxCqyCmpVtktY6Uz3YB8hJrsqHQHgsq6U5TBsE8RukTDkx5Rc",
  "key5": "3SoxiFSqRa5PNxdWrka4GYQ3XVnfDEtJXszr2fD7onhtJtn5B7tigceUnERmyFQrF2bKgN5dJJUDRFenVAuVswZW",
  "key6": "2hj4SsS7MJJ4TxGeR96fFoNB5X1yTrN1nneUsYQCsqeRDTLMVeTBsUBLqnAdBxsjQrgyEXNUQmemf4eW7BdcAQLX",
  "key7": "aiga3uyeShqTpS86Cbo2yZfeXWY11phHefu5YbsfezzojyyCjbxKRdjytJxDpozQT1Er3U3sU4fNCLPK7ySgfAv",
  "key8": "3ntz63o7cTGLKcjTdScsUySyTiuJCW2FemJwXcwt79Kt8x5fjzsjCjdK6neY7RCR3AxVtjJjCsZSCi8FDxc5yghQ",
  "key9": "3C9i2LD98VWnHP5iqGpDa1f8sQ3S9JQrdCqnVrWw6snNttgJT85PvTPup9P38wXaiii9zMpDDnvZyRgZHu3yL6j8",
  "key10": "39NXQwLjj4msWfH3yCmLLFzP88UYGjay27zsywXJtzWebYuR4tHcBQWV22KLzAtbYxnbvQeZnTMNGxPB7ZbdAyFz",
  "key11": "4D1eW1JawB9Rbz6ERAaQSSnb2TohwEAaNkEiAc8hpVohvay4xj3dzNr2WTd7Y8KRLzHnDtxdmsxRTia7z66bsEB",
  "key12": "qf6ELVpuQew8zNNZESfChGa7LxNjiJjQxAVks7dYGYgmo68iEFkWS12gqe8pPAbc9wiRmUZ2NeErRsKv4P7MHpQ",
  "key13": "289gMLaR6CMaJB5gJcn8zasxcHNobfG2oL3jXJZEQGQghYmMwpFXFnL7FRFNo2BXsE8ZnsrD6GnXetgpgNKsLDYQ",
  "key14": "3AWxeP5LXgfCzoSLNbH1xsJUC3E2Bgj6eYEzEwaP6u6sqP8gRjDU1aRWK1jCUMqTKSWB5dAYmMyXWUhMfuiPp51m",
  "key15": "4yVAgAQuLG6ZQtmDYQy1wxX5GJEan3v8trCTQ4qEwMrVYhFSYPf8DEnfi1VUn9V1ncGdohhEMsir993VAXHTZLGZ",
  "key16": "4E1LuZ75DvN8sjL93sURHBxuMtQCHC3XrgykfQRVfE41f8jrM57khCoaiRWbEvthvvSBFHGDDR4Dk8Wdz3zaidrz",
  "key17": "4Ynmsv4Xjau9tPkcn2AJ3ZY1ZR9zh1JFDiwsxfq2GXb3xRaK87BFDvxKM63UK6YzHw8bVW1qwJXZzM1JC1UXcECq",
  "key18": "4jVycNFoWq7uPtWWRJRv8QpUfCMGMamm6gn9KbhNCMipxP7SEXHH13vn1sLvHPgkSjd955i8MHujyq7THF45KSZ7",
  "key19": "wctF1PwSPU8FP9G2MSyEmj4MdMrj6n1pTRV5ZHiBaH2n1B2c7jUkNmnR4PSyFhSdV6m3wtPoknWjs2yaZYTfdNz",
  "key20": "2A2Q28sxopPHYUFxyqJujKJYJyf4qsqvNzPAGDpg8ivLBPw5FJJk76qQHYJHecc4UNFJvhthCqNH9oiu8BJw7j29",
  "key21": "1fY72W3FVCq766j2GGT8a8SoA3ickBcFjqW8vnaBm8DyQP4YYQpC3xE6NcKpJ3jPqdJhexdQZX4e5rVE6AemMzg",
  "key22": "36xkpRd4126K11BGoA7Y55EdajeuQ9FSfj4FxULqnegFPGR56gw14zg7YMesVifAbP9Wyuoemd1gnRqBnJCUeUhr",
  "key23": "4BX4K5tFxQCrRkDFk7vy4eWGdFbF3j5sr3jDV9CmappSmTdwMUGktTk78ScjaSTjTG1EQkqrhSHQDN96uci1VX9P",
  "key24": "3qL6Uans9CtJSxxQKVejdCbUYZjPJvWyG8ai8yTWmXZ9ctwXMp98TVQfJ3xp8fECKT7ECYAnyKgxi9qyZ6btTcBZ",
  "key25": "6YWweUrVZEGT8Wsp2HxFnLUANnrbXmNtri9QfisY6TrfteWbtZJjcB2HdNXQ2fAE55GaMkHZ5oJBSb614yLzKC1",
  "key26": "3xQzsMbjTAiUWBQHjVLzvwSPPc8pS5jTkXsDLvtkSQj1Xac7HQiGSpa1ueAtb1Nfvtow4HpDsmUVXmPmbyw4cumQ",
  "key27": "3WyZei4FCYtnviqRgbpMoKVEdJMtHyPJxaLgmZJSBUVtDsi8bn6jiXoJPJUC8zdJfQcd5KZyrZNdRziJV8wjNZPj",
  "key28": "5zvefJoW7CAassyQqCDeMKygsqnUq5ydwJnNJyxBes5tuFJkLjd2CWm1ZCsFnfL6nUL6RbQxc4qb1DK55EqxEfuY",
  "key29": "ZCz6nqqu3pkVigPPQBBu4wbC3uc9hRvdjsR7YsRjnz2mBMLiYf7WiBK2Wi9njrFR38Anrg4kEUFJs7h3T9rgYag",
  "key30": "uE1wd6i2DtnVnfhmhNySENno7hR8fgft2QbAQDNtXmQC5Bnr7ajQ4Kro9ifGHDHi8t4fbutJ4UEEsB4t9we7q1d",
  "key31": "3kbMkxiwidEZctCFHatTpXYsDeoEE5QksNwRyVEniqKtKnTZsRctbBTvDrEcULYkMUuAN1AeTPQMwPq8gDmPjHp5",
  "key32": "eYvzPqXdTo21V85BNUBA9yNwehStY1t5uDUVsgGb78gmqgSY2u6XtV2NV5mGuUssJsSxCckMYDTHfMGDgzCM4Cv",
  "key33": "3D3kap4AWdtKw79GDyvz5B6ptV9Sgw5mGwyWCxBqUAGFXFMcVXDirgEArdV9ezcwERGZjhtbjhDT86q7tShnviAf",
  "key34": "5VgtzrAiWcmWRygFsckLmf12FSny2HYDB2mfPhgJzPhNyj2FFcmiRrP2q6t2hQewgTiY1egkQiUzWXaTTWXRmNsx",
  "key35": "3zZa3q5wyd4qRjt7ugBDRNP4z1DRSH723YMuery5MNuYSGoFabnpnWdFM6prEh88H7Cxo3UFHhCfPiMjECzWsEYM",
  "key36": "21wJzYri1bEX1qxtpabAM8eDXaPGWB1gp23xxW61mzBb9UfQfuXyuGgtirhtd57ZvPWawuPZz4mf4AAUH2xjYDD4",
  "key37": "2QLyn6dpu8X14h7wewjKB4rZYphr7w9pXB6NXMGJGNgtwSRByyjpb1dV6V2i2jWaLvbtyZJtGLTcGPDWc4JaCFEh",
  "key38": "5FEgfowf6q8aJgsFpDU7TRooDRxwrtDffhc4LQAhDiKT3w14TrKjf3EZi6UjxBupTLchhyCEqR9cnccvf3h2cRYR",
  "key39": "2RpdHSrH1K7RUyDvde9i2Ky1EVFwJcZ3ncsNrLDj3zYLBeKYXXoGNANnUea4gjmZLWbsdxHKneMwiEAMTJp5zeVD",
  "key40": "m3UPKppAtxnC8TxbypLvTx3TqXdAXsKDChcDpcVibG3ayfj4XuEzNmyScTXsqvtKnhZnRg12yMz53HE1DvYJKiY",
  "key41": "5TanqxCQoJYMTgQMDxFoY9BzGjm5SeDQhLoQhRDxxtqBTZZ3K4fbW9j5WKDETV886WbCbY1iEopycybCwjW2h1Uc",
  "key42": "4ipbqhm18Gg7gHUB4wDpNt8D6PyBAcBz62DNFR9UHEgsH9vvZpjAJTWYhPB89yZ3e9Me3kGZh4ugwPtbSGqFuYAr",
  "key43": "2cuD129eS65Me4MLDoRKX7TELCuoMD8xnC8x1724tf1hY1N171Regk1JZZ9JhGkfw5LsMmRrWSHBxLzQJ9L1P5HK"
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
