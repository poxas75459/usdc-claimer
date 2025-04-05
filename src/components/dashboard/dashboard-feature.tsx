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
    "57c9TjymHEDKKyWHTL5h35s19n4aBX2SAsG9bkSNZS6Ky1nyXuNXs2cmkebkxXB7DhmVivJVvKpE8JyCmwdn93rm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45QnvLzNtUnwjMdhgAkhWUn94VGDcWD5583akCKd4ja4ZuYYMv1NAJj4rKgUiyGTJuVs14fj3JgPGp6buJcUenDh",
  "key1": "5wZgYvXkY9PsdECYr3xyfjBt4oAXsq3C36rkZLE85rmTBq8MQCyogLpkn9kAQT52kWk6tgGXEBrep2L2EHeWhCAq",
  "key2": "4r3josegujCfL4UjSZGmiT7UmJeGQX7Y8srM6Tfwgi87wKBF3JASXDHbFMAG7yWXLdzF9oabRvsU88rmbqzwVG2C",
  "key3": "3WyTRvSKUZe2sYgoFdtiZdEtAk1NSbyWDbmiFY7TFttNNK4FoyM7ABqei5MZwC7mp8LQ7r7uWgAf2x3FGGaStuwV",
  "key4": "3zo4JM4sW3cLiLG5s172GwcGfQXocLuztVseGDhnF1ytUACT4tfaMdDCmnx3UXjBp3coCG5xxqdreBfZkmUxDsmd",
  "key5": "4iRm2R2QrPEFZiPYJ6ECDJhU6E2BURZmYcF9LbpGGbyhAHktULUEvJLZm4bKyQbvUTBXqXreqnZptRGUZA1QKoBa",
  "key6": "3euN9mzzAJL4iBYXQVMjTVKy7Qnxkph97JsXuRMfJvpW6ZFXLsPqMCtVEq5AbmAZTosHQeKU7nfoy4d2wZYFT5PL",
  "key7": "f5D49V2pAjEBakDNBLa5qQnHkRWwo1hEzwitpKxq9MdcxXS18dHNXj32a48cYabLFTQoQT7FU6j4y2Pm2DdkSUu",
  "key8": "Fdp4LjAu4GqrPCwrrMmAkRuEFLBqnFEd9kdQBmaE1FfAAEc8j2HyZcJv52LW2ZtCgUT7c42gemARLbq6K3ChMKQ",
  "key9": "5zicxL4QSBzeGiWUTbU3rWg3s2yead1niE6JJqziQ5xDxCGwTeqwAyC9g6P16j2CE2gJdGuKvEVinSodPexo3F2m",
  "key10": "rFfZrR4WAau7vbCv3F7bsZrAHHPAvmSDxhR8ZEqNZL6V7J8rbmi74Krx8w72ne62BewBhjdSCDmJJrYVAtPeeDT",
  "key11": "5kkoNU68445aQ78NCtzuTf1dS2wxdBtsHL6f32JWrT3dhXW7ubN6KpSPZM6NrTKbumgttBtm2D3f42qZhHoncRt5",
  "key12": "5Ug9qNZ2UZz68b7cgNBeXYACHCkBysycWoZL6JUiVveczZNR7SGpSPshSLvkw1f79F8QHNoSCh6wZQAjyur3X5dB",
  "key13": "4xb5sms2STtAiiXX62haf1Xqv4GprqDkd9jCHa4oDiGKd16AULaJfEru6x3ByBDA1Jh1aZnFHDVDdKzutPcjunYS",
  "key14": "5Hry4ZnABBXiix21CWT6LhYC5VyLYWLw7YA3emnATzcEthsqoGwBv3BwGsNQoyMNykr8soqSkD1p9Mv98uk13JZF",
  "key15": "37DWe2kkRoxB7qnFu8VgbqaeUfYEFFSPWR6UUHm82zqj9DcqFsecuTyx6x9HZNVNwSSjRatnRaWKM6NKLMvPXur5",
  "key16": "4EAvhPb4MUscS2FUgGNwHtNQU8eqh9uYSFtFuZ6Pzo1n756KE6jNdskdyojtK5GN4ei2E2W3jSbV776LKFtnbJVE",
  "key17": "4FfjKLt5gTbLZDeusTs68oM6sTysTazh5BTdLwb1gzouG4NCFR8YmLUZA7LprkNrrf7HDLNyoPQYzBLb7tgrhWZS",
  "key18": "65dbrY7K2rfVoktabyfL8HKQ7jNBBZLRtuEhPGGYdPSaenUdza6NNaGP5DU26egvNx6evQZFJCz8pHPpuemMdW6Z",
  "key19": "3FtqJF85tameVMqRyGjyy6NythCQn3WMXcC2uUnACkosxcKCYdPMfdDeddC8BY1wD5UraWzUc4F1DQEPkLNiBxCN",
  "key20": "4nPdDUH4fWtDGe89pMyBuCVEPUJbjbWRkDcNfnU6etGSHie8LZRN748cQKcMd5x7Ct5kfM1t5XmcxR8t62MjuLBM",
  "key21": "4Y9WvHvq5zWZvr7NnDv2mJJ8HDWRckyxAipiT6c1pSVAKbGQasEWrtcFADa6wLwC2G3kWiSRbQkh1SjD5YC5xu5e",
  "key22": "vNSZEt2gPXDAuKCNY9CsLjkkNncVZJbrEp8ArNbtPJvk6XKXrqzVy6vxkEd2VCUantcZHPxAMVz7SScTMCueNPi",
  "key23": "565JJuZo2UR28E5u3aVcaqzons3R7SygMuC5qcTiMCYpUyb2M8hHFNuvZSEJG2oM23kQCxnhcSkLpy3kbnuUqXDH",
  "key24": "24gtjPkGbAjHt4TUGqgzEqMXUUUKPAxxj3unRH8xtRwGQqN7FugKkuS8GpCN3asDtBAXSN4sSgay2mDgrUA5jBxW",
  "key25": "3Lf8EpxrpgBrVxevYKFji4B9KizfdTsc889mK9usWCfZTA8DizNc3NQXd7sFDKAzuKE7N9DA3iD6JYMdoZG1pdQp",
  "key26": "3whsro558BKJ7pTxrETD4Pzc8BAnbuohcaEoMVM5qoEz115WDS43bL9e2urqNyThxAJTNn8m3e2yCvjQVcm7mhJq",
  "key27": "2KtaevXbmF6wbMXVMa8sJZjKyPSowWfGccuEfPmFVRP2Ry6Nr6xt9tQh37KUnMmRBXW9MUV6mkgoQrM9zer8jUTe",
  "key28": "2Qo56bRzybsHCpyFK2CVzVxombmAXiVkQ95ovU8KwDTEGNdQMDJgok6B8qS34T3o93zn1Zg3mpoJfx1p26bxLoVF",
  "key29": "5UhtaZYfvSkFxSWVcrnPsUc6fJUSWk5pCcJg37YKvcTPMw7n9GH25EmAtNvBoPmbYskzQS9V1bGkqLvYnmqQYKtx",
  "key30": "5zCnpV2aseSKLP6qDwtrCD1HhXo5q6yrBfMdGVFZHAVrUjKNCbLnz19iQY6483LfU8pERWV9qK3NU5XXXWyggXBy",
  "key31": "3u49zqFNshRag6WZnAvMsHR5mvM5oj4nx2RMnGggH1bbhKwyDAFPCZR7ZJuQQWiD1vVi2nmaF4ZeC1V5wVUfBQkP",
  "key32": "LFG4FLUVuU7ABTU9kCUYSjyTNmFDrt9fBjCLsKkbHNCcqHz9kzSq123L6fQAGEBY6zG8dX3hmRRRw68F8kq9UbF",
  "key33": "5tv1QYHVa7PrGWc9Bjgo4rRmQGAqq71dVCgz7FvBYMgv1YRyi3WrfgrpiX6TwHfGWZmLhnofpUccBoqKacvsGADC",
  "key34": "55Kr5H7rL4jSEAgK4vChmdeqsnJStSpFZJ8cJveDa3XKknTw8MoMrpb4K8drU9yLZXMRMFkgG75drudrhtb3o4Z5",
  "key35": "5Q1SonjahXZ7NcBZ1FUnCQWX3eDzLPT4F8cZYUyUG4xrNAcZDNZ4oEZrA7bCduWVGxC1oBAGugA8AYtrNourZNAN",
  "key36": "3sf3FcbNYtHVFo1iAXr1MDZJh9bneKVHLrmsr6HqqmfcbWiyb86yZJWUdmgTReJeFFT5xPTFMvHD2PTT81rLgaPQ",
  "key37": "49GewWXPX7zCZ2qWtiGHhfd1P8EkCV48DTrHNetmL33dvAuTKqLu2zevoHSPXFnHtDpx35VyXFVWrCh5HVRmsa7X",
  "key38": "fprCmXuYV8FZMQtYCjgqVXFoNn79EitrjAVWqgzgJqFYeR4Wg69gdRoCyavYWmcB5j1FAKXncvvFTynRZHUpJpS",
  "key39": "66VUKe4R7Ry3sbVFreitgtBLadDX4tRFh1RzhK4xgAMVJLm5fBs47dNKAchpwiP9PWxJJAvvyKRCpPYcZbcTUZLN",
  "key40": "3Nqe6w5VGh6ZEHbxPY7eCoHTYQpp4Md85h9i1eet4BgDVwrhM3ZyPwkBTF2WspJwpqakv6HWYDh9PCQ9NpTg7mhC",
  "key41": "4WkfmC8AVoBPa8DWDrbY3CcVWbVnAzeBxz8hxQLsHHdJszFRyaQTUrb2AyXtkNCD9XWhbEZMQMCJpkWosygsAusu",
  "key42": "2hCZFAGZKWGudQAmXLAZLCPqPsCwNFxKJmYjXSwKFxED42RqP6A2EE1xA5v8N4QxA5oC9Dc6oytvi8ck7RoELXVw",
  "key43": "3hxkWYTCVUcymNMYmJgtHre9GqLQyNfWeorRFkQvtGNaKvrysAHajLv5jMZbhi8UXkJcYUhK9UHDkMNhGTKfhq9S",
  "key44": "3g7So44ZCdSn63tfdowZLiuqYfjZGQMheeCnH1yVJjnip9hR3drTLbwcocMCFiJokBbMazEecKa7fPnqdvfj3VDX",
  "key45": "5dVwbQuPcP4CJJCzRQun33kuvXKvMF2cJnMHt6ED2U1DbQo2dwKJxgK1qeH3PTL44FnQkhkKrZ7WgJLwpR4wnBeZ",
  "key46": "5Li7i4mfyDTwCJW2AH6M7UGv3kVsrjwYWqGjwtCjRtb5eK7dtL9umFk5ctBHVKrGeQRCecCkcqXoK5MytAyrvTQh",
  "key47": "4zar3z8LyJsn8u3bJWu8AP5Rq2p8yXKF6rLh8QQoYsv5uirpqEGn5SqhL5ucfcWuTUtiD5M7aSabgFf6vZZsbKyp"
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
