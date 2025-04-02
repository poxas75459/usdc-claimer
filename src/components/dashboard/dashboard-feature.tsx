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
    "4ue7RCxCWpEzar5TnhW8dh8uyGx3MLerco7fY9dPXJshobJBsomdhzRFhYQHgQMFTX4WYcDyHz37kGgNxUQmShw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "228aRgrXiKJnLJz1narQ7k5csoQ6fV6faKip3FmPVgJcfuTXbLcRHr3AZ4B6mTVeDzaWgoU5763ty6g1gLVZCN27",
  "key1": "3N96AP6w7CkwVjrTksPhWF9LmHnqXHwnfxjMiM2LQZ81MrM5jTmqV4VZmqyWHDHmxYgnifBStuEjCZk3RB6tCz8m",
  "key2": "3b8ewbRSxPdGiLfMmTs7ZmNmXgg6jvpzTkGkaR7irAA5k6GMsbPMSdfs1t2usbhMCoeY9FWakJzaGKtpeuCqo9gE",
  "key3": "2TGkBSHGxSkaBiK8nvgVsw2nsw3z5Qbjq88A8YPVtfgGTPdmE4YDewGEYvPw9y7hiTKG3uJBDQXauiBsH64b3sSR",
  "key4": "6UKWnyacUEe1vJaoupR4dyEsnkdQt4EZtATj4275RpTfSixaFsCKWEGmBXCAsNZoyqGGzKj4CYq5DSJpjq9Fk7Q",
  "key5": "2hwT6DN3CpsYV8kwMGWHKrxqJ2iL2kQuodCMwre2Qr8ayzoA2LUkraSszmTFRFDk8oVvTP663UNqGs9P2xMkWqHx",
  "key6": "5KqAWuZMRA5fWQfMMCjg3jHDhjzLjWdTjf99C5pY5mbpVis7ai8mFMPHZngHhQw4vAWmXYRNMxZSvChaooKi4y9a",
  "key7": "37nTK2WY8baruof6YUgFqECgxC3sNHfkJn7Rj4yKf33xuDczx4WDRkfR8Cc6QE1TjppMKzq6HDNyJytcFy64pLdk",
  "key8": "2F8k48B5VnQ3J33fu357AZaoScdiSt2z8NtwFkfdnDn5CFT9aEcqvCD8vYJQxXmdv4YEoWQ9MN47yt7XuPMzHSDQ",
  "key9": "4LZygvF6FxyiK4yiJWqnXv7kKcSno9Gosedi3LLtNvVkzza1r8VdgrDRVYHMbx1zJXZBz5pQERDWyWjfcY6apX1y",
  "key10": "58DBGgpSLq6G18hSQEzUwywGKeMFiMEWPUcffwBRvLvjqEJ4GTiXJxnuJyheehED2JK2XWPQVyEtq52AhGUGMR8E",
  "key11": "2Gvza47xfhRrVBtrUkvKwN8oYGw7ypSjzVFSHadeyvSj7ZXRYvivAHp2QtEeVPPrspmH6E1fcgQv6t9NaBjMngTq",
  "key12": "5FnkYBASNx4EiaNDwosj8hbzf2pDae7MJ31D9gTS8K6uV9hvtKxrWv5aaho5ZmRH91ZKyyGMMo6AB7f9yjimp1i",
  "key13": "52Xmu14it3q1K63Y2YoqVkWxaEtAiTdcbVwADuyNCtT1Nn41VF1VUALbfKBM4i8YTa8ztRT1XCc2AraxPnGooQDQ",
  "key14": "2g27pDuEu4RbKR1ruHcLYkN3UG6SUrUzi8XPuZdEKGHTdTN6wWTa2edM9NNfGjZrL1eBUJ4FAhrM2gDbrf4uzT4w",
  "key15": "4XMifPnaexXUZSfmqK7AcLCJJTaaf338DtXWpSBXohQxoNv2vX8V33rCjp3U8B7oQWQWJUwPGhtcV9zTRsxgKtqs",
  "key16": "5b4EfVo92EJYvgQwUcm2tG6EhH7fWkmNsvYM8G6GqEn7ygt5M3Qd3buKtwd1z5JymD154TNAmrPjCZqxi6pCkVE3",
  "key17": "g8dKvjieVzEkd2jwYh7524qKaH77s3cU5mzzCd62Dz86948hADDBoqH6aFSXQsy5oWPiEYBMNrzzFmsweyp9uuv",
  "key18": "5bpr7weLGPQ2avPEQ3cwgVYpdK7ez3Q5kegPwUDtF3twFnS81DP5X8hfA5Lergm2vmKpymRdp9Y75cfatiXaUD2u",
  "key19": "4mNo2f3LsZ2M2Bn46zaxBCgwxRjb6oGe5nnphwMHtz71bhwKSK82NfTkLFcKbt7P4zTAxhCHTDEey3G4LNwp5D3M",
  "key20": "4zwmgKyttJbhMGXN4V4AGz4JZjQ2QMPNCwoUaLxcwmYLFiN8d87HVXdV6YfpddqCaTUL1xfW3L7ZosEJhqRbEevs",
  "key21": "2vwKherPNayqmpmDG9Kv4WcUQsYwrqkWXyqkom8mLMm6i6Mmuke7KEqQ4BYEDPrGHHzUdBfefeqFWhCuFkwUztKW",
  "key22": "26urifn8z3mmZVVSArcQK791T1wWcc8iKGGiR5q657711mDtA2BowLkmSSwRchXVSfd5EtziXofZHD6JYg933Mxg",
  "key23": "2VXLiNKFMHiCKaCDLEwRG4mKAupcXJcPCZfXD49aVvyfEH8fU5NBr7pZz8stKibrBCc7nhWBvuYkdQmDPZPPfKbt",
  "key24": "iN1EweKAHBVCKtEdwrrkxqQAmFVkFJETTjmt1cSQKPuyFUMRseQLdfY6EK48fo4KTS6XnEsya5GdCmnkfoudKyM",
  "key25": "9Cxp5VmC2LQ9pDg96ZdVFXa4qiKS4Hj1c4GLec1mUuBaeMRo9iZFpL2cDGMSnF2HfoxniT6b4Arb9qXXau1Twvz",
  "key26": "2dLtpz1FSpNuWZtdokxtdwbMY5zMiQSSo7uzhy4zNhfRfaSnTb7b5UrY2bcK3uEL7WhBWWLVuLFS4yRCcydUaSCN",
  "key27": "5xFLaW6gKdCe5CksXxExAgi3csmcUeDiMsLUJtknQbtqcwYEUKd5wMa2A1ykMt1PCf2aat8weQbbmaZH6GwZs52m",
  "key28": "4Jf7z9m61bZjx1GvwjY8EhxqJZBSS9yUjQry9PgmXEzN4bujTiEtYvg9gUNaZeyiqHAuvarX3AHUuiaAV35kiboq",
  "key29": "2VsevJA2z86AzmAuARUnbrH1mMdZxu9sSFhTX1fDFCpCifRFUADeSBx1wS76UhfEv3NvNch7fEL7Vtg6JWUw33G8",
  "key30": "3PxkaZLM1VPS1KJg3o5upAPPFPBVy3ic1W4ACfKcHhdmYxSfNpTf5V7NxbGDcd4Wtp86iYn4pfJApZh7hwLtZij2",
  "key31": "67KzcFNWoS8AX5kBj6ccLj5raNxDocBeedmc2D4mhgHycWdT3iLSKwZakdr8FwKYvF2qU2vK1go8QqZcsDCZNAB9",
  "key32": "59UW7uLN33v85Xar3J5rhMkoh95TNCdT7wKDvxFFnUMX7oWaUmH2VbqwvgRurnZPr5Ug5UMw4eJuk2i7VpsUJrye",
  "key33": "2pVnU1Zr98sza44JoTqtvq7v3Q6zYNQvTrwHJqDtwT8y2wSVALMTWGs2xxtuYC9zMy94y2TnDpuaVvYAyFefQYAr",
  "key34": "5k8FKkEQkjAYt2H2rjxwFpS1yTinE8kjB1FLFmHceKSXPDa4DBjRqeqe7xJrD9VjkzGUQqJw47WZCbJ2uJeykWCT",
  "key35": "sPGn65YY2EwEEiMwX2U1yW81cfNAJiWV6BT1GgQdEBusQu4vzXoitoa8gWPrVaqBp4yGE4cmQFycLJbEKJjQaNR",
  "key36": "51htS5oed8tGrSCoCUdeFz6QB19SXaBbmEMsBfJEmzXB5AnGsdWLZwFWBeoS2tKU9DUxLetgoeGcLUMfVVCEXLJF",
  "key37": "2QJuvDEREa3ZSgQwYbFcp4fh3fMo48JtKHaHqvKvEriqQH8BpX57m46PsfbRsHPoWrk73jMBEDiUGX9SVndpcFnG",
  "key38": "2V9Dzxhsxuwc4dgAGeNRNam82Y1RX8qTrudNBXy2ixrbkaWcGBSWkaXATdz51uEhFxkvoB8vUoRPnX8KMBdCNbse",
  "key39": "4RJtuAzDB96KrRnhYstxjSxuwWHzfYTSrpmrwtBaWNoHp5HrtPhGAMB8T9wD1gjRSLEML1jvwNnsQf7HZ6VGWWTi",
  "key40": "5R2RrozqyFbX4UtYXHcxpCeyfivdoQY4LoCBbC9NTY1z3fLhzYze5B4x91K6DRzk3EBiycmeoomM5SkjaKdtKbx6",
  "key41": "2c1cgsZsf6v3gzN5Nsqm113TuLwTtnpa7Xj7i1sXNgVU4nM67VFQmKgmDsfiEAUf9bAAmABhzZpvE3mpZpr2jZ7Y",
  "key42": "28HMhUqtHWJfdAe4RwRrkvyR28zvi8ykAc8NGGxkKeJbxQm9D57stXbRa5dLKoK6A3iYk3cwMmtQFCUhqebwtpEj",
  "key43": "5qseCdUysDmbd7uuqoYMw344FUcHRAYKtFmLbFEc4d62LHu9bkwt41iZ43ZqTxQi6MLjrySSzMYsmTKZz1iL4xu8",
  "key44": "5FTFot7mgcpdgrT7L4vPiSmQ195MfUyHUqHr28PCK7wQMFmXjDv9Tc1CQMaYGNDCNTCZiMEof9ezTFpcgDkhSdBm",
  "key45": "2X5iKpF3uXepo2t7eU6P8jSwUhnBL7Ujix6YbMsqD4kVrpcfX7ysaSYFvjYxBH9xVEumUA9HiAvgJjXNW1YMdtjT",
  "key46": "8fMFWrxVapqhwQBeYHqUG7ri3em2baZKRKzdxdTp6Fm4FjPiMnkG4yNiNeBEyDr8aSapEsQBrRqJUegZsVsLjaq"
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
