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
    "4q8GWhKkxComeVBTsyPrJcdPXkBMNmkzcwDiYYPtLcrqa7MZu94TXRhMX3hw8WuSwG65MZTb8CQiW2D9MRzi6NvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fPGVYUFv4EJpkXfM6vAX4Jcwu9TfhovN8xhuVgyh36kELbku2YngTKMaFBebs7Mxy4C2U63SFwRCrLVeKzKu4D7",
  "key1": "5oGXakDRsdA7q2dLp6Lk4YQYHHinRNTtFmaUGTVGB6ykqTsAhSYhAS2rACSXo4fHPjCRumeebc2pdUfBaFXqibL4",
  "key2": "2wt6usrPG2X4mnEYQufqhDq6sHzjGFxaqVDZsupM8ifqhsAjj3TtUZWCNgRDpVMHjfNc7uA9Bqdd4hMtW22QT5AH",
  "key3": "3UMgPayp9qCAArv4v7QqnqSqzLWFhHdHsXrhMn1Uo71KBqfwEEGLo3BqXC4RMvBfyKW3FSK81U8q4HRDnvVbcvfR",
  "key4": "4oZASVW6q31mNh29Ui2U52VQaC17DDMaT4CeG1GFXm4DzCzPuvY9ZBjzMR3YpnLocwJm7XqgMGGH5RkVrjrwCewh",
  "key5": "2xFR1zfDLobSYyeXoYN9vY8q5tDcExFkCZbvYkf9rDqSJ4mXLSrf4vjKKrjSGmbshnWQKAdCEAFBwrNYMVXeiSyv",
  "key6": "2fthR83REskbuiFkAvoCtZp3nHqWHDVHPXrdBNXoyvGjYRoDZ8dGeRkG6FA9ssDdPs2tWKHFf41LBDHVsFVJzpnZ",
  "key7": "2KBnRjyKqJNNUtxGGCpYEtZptRB8WwjaGgFSrjFdYGzXqummR2MhbSkM7AjeTJrMV36gnFRmDCjunhqVPoGUE45G",
  "key8": "5HXCL3f3CbiBdcBvfgFGEk5SBaHngArLMsKLHofWo9GUU3HJPJYLX9AjxDfxEk49bCUajxBbCsBNCw4yMahRK2sN",
  "key9": "5nkGcDCSuYLJ7iz4sBR6payF2bqwfxmjw9HfrAcRPUfstaKhb7iWeGHvuz774WKz9F1oRkF4t1CLguddn7nUNSW8",
  "key10": "26qHuaExt5CYvCjzmQF1DGPbmcgDqaMncagyKcgkakHi24h5qruWzXwARXVfrgZREcczUXvpnEkfR3swgXrAkwVi",
  "key11": "HLf8vvXQndBrqRD8cQZMRdMvzpAKmETbmxV7YNZCNZQMDPdiSAECZ3Pc7tk4arfCqb42f9vKLJDWihDgTYscmEz",
  "key12": "4azHfuRWoaTj1FVyWsCLek2wFsEYy7FR61wSydFk9jiRj2FWoYVKKvcZ4jiB685xDHxvysVSYSeq2RCGaXgvBobm",
  "key13": "3sDUkYBkhsFEo2cazitvyqX8vaTjmAB9RRuMPU45DVUihwfnLm6DMsDgaQ6vP4U6CuRFyyAevtJVrf6uknd5SSgA",
  "key14": "4Soh7ivzBnuLBk3xTC8ZVzFhGJpXNbgSFkXqMPmYvC4vrMD3jVwraFGmGW3FivS6uQCYKdfmD3QhzhoARcEbns7u",
  "key15": "5Qb7TR13u7yuqMYMcSsq7PEyboc4Jctko6iQNxzCR5NYt4DCHab1yU2yWBey4BLxGA6zQQ5aH3qeJhSUaeh5MJgr",
  "key16": "5PBJ7LviBiQFwFNm2xa31XLEvbcVcXvR2UHhR8AsGMFgoBPfTBQWiqNgWbviCCEcEQm6rcGmXZY6ABsUBgBUJLVt",
  "key17": "4fdB7QjzY6GnnFt88g2nSPNhpcYUmt434NjdA949CVGt7XQ5mXJ5Mn5PbYwJKCpfAwggjkh36ozvaGJ9cyHrDwLD",
  "key18": "4VDC8pwfAecT12HPNxzUM2fhUKaAXCYZZYGagjMhTEsfaFrTtNCf6JSuWyPhDdQp5aAoHPj54c3mtTuSkzevvzv9",
  "key19": "2naTZw4SuyxXw2XT8BqrzngxGujtffHMWa3rhgEB4sJUaoZJ88wfP5uvaoxju1oufYeXg4fp2X5sTBaWkDvoveUq",
  "key20": "5LzdAazEGPAEuGo7AgjA1dDeFDJUPMfnDbsAJRDYTb5zTzi6iGBXSenJkVid2nsmxcMkd1R9PmzVNpdegvafPJKt",
  "key21": "5MVCrKf7FgZtpTxwbqxpiAYcr6mr9GNrE29DN2aBfw157dx679DxiyWAWnWPaJLezTBitgvVbRf4Nv3ZFb8NgBCo",
  "key22": "5zm1N5hkfkKjiiqRgc9R1BwLxKF1W5fhoe2Jm4AH1RUhteifbfTi6PmcVsT153mh5Gmyk2yS1KaybKasENwgmQV1",
  "key23": "4BEVZcWfRk718NizggpgyrGN2QdEQbGYfdCU5ZsCMA8QME2MaqqjsgYf3D4DagbsXWrQZveth5DEdHsmULFuL6k5",
  "key24": "3N8rEtpvXkwAMHYUea3z4qKMtRgutCVGC5t6TnC1DYGpmBuwUnGKNHVCkcQgrXtGYAUJW7PBL854fuRuTkteCc3u",
  "key25": "61wRkwiZaHCfn4XHiMnfULY8XrW56YxJfWGeNM6ncoSotjdhx9bd2qvYF1BGBgY7dXLMuuSE8HPQRbAJEru5VGyj",
  "key26": "51CFUQsSr3x6HgsVfE2wHnzrktUUzJ7nL8o8HWsEuqHJ5PMmMhJjVo7iavRrb5pHegB5cwjEXfNsNYTgJzGHojs7",
  "key27": "4Ur32QyxShAYifo3jPQKJohbdko1K3x354GqCjLYzpAYGeaYCdq3qJZCp5JYBAwmJdYksbq9YP4gQuVzNhttQH43",
  "key28": "2HvxE3c5DLf7LrwHt3Nj8vc61Ce3GkhH7YvHSacML93XXvWHXTrmzuxuds2gKNN9uVbz2XyXPq1gpA6bm2Go4tv6",
  "key29": "KUvosZdGbmKku52Fzadap5szVKoicSgqGgPxBBQcddUcKNo9duNRp7W5hRF8536NhWzMhn7ak8YFJxzrXJnzd3Q",
  "key30": "xp7YrTP262sYNHCW9oiZkkcPYtH5rsN6qZHCANKjzmc4j65oFmBznEtPTc7q4NHjXfVG2W5Fjq7W1gENWrRyiC6",
  "key31": "48yqCuXeEGwLyWXrLQyCfi8F1FL9WjtGfatuM8DAMPrep84DviLny5VRfM7PsWp4BNMfSZsNzrg94kxSKKgrVAWr",
  "key32": "4w6yHDfyGSEpbSKAkANys75GngbqEr3tmbus4BDxN65wvszsmeMqPjcRKjbKcBvizCjAcp4wMi2sRMWHTxBXNc4s",
  "key33": "4MERankDGUtvhzaKJhJhS5hCGJfjYTALE7MjL2WJewSNvSCzt8uJgfL7FYbffCGE26k9tC8P7x8dC1y492DxJuEe",
  "key34": "3vBJChDhaK3whddHmTrNDgvX1rQxCZZV2MbrBm6cvoVTRAEV9Wi76t4EQqqe4iy5wTDWiW9EGAi7yhKvdgfiUYge",
  "key35": "5pn8TNZHhCQN1c1HyYNDfQ5VCHKPmbK9xPn3SFL3tfP6opR2NpPwZEHsWTSiDNYWexRFCVbBRS6qApZQkb4sdFzE",
  "key36": "M2rc3jDdeNC2cHoTDjfpz4xdMD4hwJwbqBeVKp7EMu5WUzEjxq8hjKY9mZTnZgxkiyt4Ac575trhq3RzCFRHjy3",
  "key37": "2sfB4FQk6Yv7RBMKdSQV7k6zcWhdyP9GGTZFEG39NnQXDt59KACHDKezPF6j7LftW5FfEMoV5hamievFzbyTGDRK",
  "key38": "59AM198gfaF9WUpUskjAkyXt1L38o3Fv81CPrpESzizG4538AeLYWH8YakDz7nNuaFWTkp8DoVtEcNAmy5hsyY4Z",
  "key39": "5PGpFutyF2kJhesnWLbRCqC3g1cuJ4aoaVrcJot2oj1UaUikAjbbkvbuaDeAqYctrKhcDNHcUScAWAsrkvtGmUVZ",
  "key40": "2hZUFctmZuof2KJxLWAawv2Sus333sAXCrXn4TT6uD28g162qnyK9fztAhWdEyStK2kgisMwUbvJMaxBMr4EKX5V",
  "key41": "3HC1XjWcsTUntxJsaaNzqZN3Tg6s83HDW75BDvu5rRNFmDTdVRqZ6yuGEXEtCWZQfLQ5girFgLE8h22xUsLjggHw",
  "key42": "xDU29y68srs1ogQKYLArDFxU6MY1gT7jV8YJF36Erv2sFMWecbV7cdqdbNrNSQGEaEN3pi7RsPjUgxtnYpgKts7"
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
