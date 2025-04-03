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
    "4qaY8W6PXV4AmAmKrK3KnciNkwggnycbkBJxc2e9NWt8D1SxzGrBbW8BXt8AcBb2XWVvsxgMThTCTJJGZT66tLiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42hkkNPLaVemsW9ToAK65xfUGrV2HH96AVCFWeckcofjt5cjxBnh6UxK9r5GLgK4ZNFjUSAMuV8aWSKaDpSqLz9M",
  "key1": "5J3afNu35LSnooToPeXR1Zn9FS2mrKMzjBN3ScP4WyLAt1X8n3qTxtWFc5wbWj5hZLJFc9sWWTecBu6wz4SKwaxn",
  "key2": "4pHxi7iCxCTP7SfWjoMpPat6KQRgjxUL479p1zmHsyg6zfcBGU38JzHpwWDfrWMPFY2tqBUW4AqvPLvw1HJh4wZ4",
  "key3": "mS4XM5JkaATzF463urDmAmrpCurrog9hRCkik7ynXJ1oF9um5VPq3Zq6e1e2YLvVdGzRGHZLoFLHxTaBo2ZFptX",
  "key4": "HbubRfYnaAixHXpzHuuhehAmr1xGBa6i9ntBVwsRhc2vhnUWnkLH9ETHg5oskMezgjb8gLkJhmKA8RvWjKXmfkd",
  "key5": "44RcxKoNJfgxC4V6fztk5wMnEaAvoTKsQUKhjHuSewfsUqJ9QtfPH3QWBxeUCyVZ1HwV2ReprizuQRFfGqd27NaE",
  "key6": "3dQGXLLcqLjx3c9qyaXTqN2b4siUTBuMjzPtYnWFM5a5LJ2WLf2ukRJyyyhX8yQXfWJ8pmjuafAig2VhRgV9Wf4W",
  "key7": "4ZsrTZeUZeNNKPKpmK2W2bqdoVztM5b2WUFL6gWrEtwUzzkP518tFJBmAVgHsKAeJmusaFWYeEzKhsLTHLvjDjPw",
  "key8": "4YsLRJ2RtHwzSKcsVBxtzhBx2CoJVdv7BnoD5HuDoLYwCzWxS9Y8hAVD9xBEaSS6P2LsugcLFpKUt36AeGJNxv7D",
  "key9": "7UwKzQtuADDi2fKTMFQ68r1FGhPWHdTG6wGap7EcacemEuwgrm1rGLZdU1e3NxhHXh48m3XYVmBC8g2Ga6krBNg",
  "key10": "29Zd1DuV2zmeFs81k9v3FEGhWkUyv7sQkVermrJBnqiR9y5ApWqQLKZtJanPHM7fWc5Fmb8aKAGDC4XgSnXKT4Fb",
  "key11": "5iVYw2rJxjrBMmBU9Cfs1fgneRPEEqASVSx1ckJCK7UpjDGPBuxTDi9Gztwyr5V7P7dPbSRrRq2AmgxDEtQkAoA9",
  "key12": "38HGDrArVQGrMinvi8KK5EjyuXcbHkZn3ZvfBJdTZ1Cko4nSkXgqAzXbkraikbnCWx4a2cStvb9yfBMZFykVeQg6",
  "key13": "5WbpYMrNz8dLVwWGopHUFvY2ZckgYTAjKNCNgtoPYVVV7qAaVhh4qoodWoD14UHi6F6gC3u6F2oKNb6Gjfzjk4ou",
  "key14": "GQUJjj1f9hZWJzZeUdnviS8fsbrJFoi3BX2wFtKWPhCgWvGj6WFZCdtQHWx1ppEuSCbbn2s3KVAfn3zXr3Q11Bb",
  "key15": "4QHhyyz6uwReNxJkimhKTDbP9km9VtU5NGdSLuNL7wMRXaC26QcsCXUtiQdbQYNwX3EvLhtc3Tmdr1cMSQ2hXCWK",
  "key16": "4me8dQrivEMePZqDFt4m1GMy21pCDwTQPv4GmgwpwU8YRZDoRLw281JvQr9Hu3vrAnp43gwajUvBHEyt49vJXQNY",
  "key17": "5ogeM23fL99V9ebr8YLA381xsm1ouYLgPx6W8E5V21EYRf5EqUPa1YQeRgdabBFcXdVeWf8ZHo8Syh6zAUyg43ap",
  "key18": "37F5G665dxms7sXdzCaVh2BvfpXp6YTNLPoi6w9sZxkwTHdzWLy8TBBWcJWVtQhoxCrfgt7YqTryYPZGauHuAsHh",
  "key19": "31mJHyrgVAu2LMfcuVrmcMGVc61H8wj6FtWesuip16DxSDpawJ6XZekU9uFNUm83Kugr1q99h8u5UFsnSEQnyzJw",
  "key20": "4897SBdsrRpYDk5zrxYCD3f7YnddgEq9eBo6AywDLsKg6ypebVEPx8HX5e7JDeXB4FUBPbW5EDa6uso7mRCuHf6Q",
  "key21": "4eM1BR19FM4djAcMiWGx6834KhuQCJhEBuFJ6iSFj9uMoxTLNuiFCQDZAGpxXhRpPqT5VDcu2Ax3kHuAtzN5qD11",
  "key22": "5JwKC9X48HcWjQV71g9yxJqiXFos8LeSsg8nuDgD2Dh9MW3abHgzCxg2swt3BZG5nbH4PzLFvXxGqvKMwkmrCsmY",
  "key23": "2WKxcMf3qN9xA9TreVDTd44gCLZPeoeXyLY6J3vSB2LZWPBDUJYkX5frPHUEXKnsAW41YvtB5xUDbDyG6Qcj1in1",
  "key24": "8Apoxo2tuayKrJL1EsGdofpqu8UNqowrZd7Htp7bVeBwM9ZV7wPWxfCRxDtm9xhZzDimzV5nVboNdLvk8hc2xfz",
  "key25": "3ywBPoUfj5K62Yemrsqr1N15sAMLLtBPTq9WMSdtVes94H8PzbfDhPr8ULHjRDHgthMdDRkWW1V3vMrmkGbFHXZk",
  "key26": "67NfBCGjDagH8oxvWP5mwfyYdyXe84DGMzcZ4EL59X3JsrZeUuuumNccsQYrLXyP6res44dVWuyQtJ6qWRNNuHTY",
  "key27": "4QM69xEN9NhPyJSJ9rxAMkPaFMqLRHnXk1CDoiS2TCBzHwhohssqXdqWNyMYtytg4bAhKMnCHnMM8ev2H1ZC7nk4",
  "key28": "4UX8Hf7MydbYiD3rode5ccKEN11ZG7qkhcEKv7a8sa6cxwBZC29GUmqSGFh8hwKicbDZhEAnZrYpU9QpHwiq3P4h",
  "key29": "2C7KWLTHHEWguFuQLAETPutjRg3MZav12WU88L2WRxHT4cU8Vm63sLGXhfDnY8iFiFhAg5thjtjbc7YsctF6x1jb",
  "key30": "21eJh4cYSDBbBcEkMzNqnN6UadBYrprM9WhQutjD3KwaojcVWeQVekruTQu9HTkRVDxvcymzjtcogqyA2DC9FKgt",
  "key31": "4m2DQU2pR4jW3DAgje8PXG6tfVkNc9iAiUBmAFJLEtcctVMqhHfCiKW1V7S7Sy3ZW23Mp3kmL7of2sCQnR5QAC3G",
  "key32": "58SoGNoCNtqLXfUjUFNjY1wo9TuAChZNSN2SJfn4KQGngKuub3jrHGHY5HFdcnZrntowYdK5j8uUH26gbtbtqx4N",
  "key33": "2rh5EYVVrxDXXZhJMteBZc6xBjqmTntNiWs9KRE1m68vejxxhqiiYmuMdRrKx6s2tfbPnwQHpDP97vHy5ytbPvL4",
  "key34": "5X5Gm1751tiZk4vB8YKihhcPRbUb6npWkd74hvC9bSVj6DjKw3yMKz64kZZK5mGbsvi1v9y6YNXCp7MReSHWxfui",
  "key35": "4D4m62kptFu8ozfc1yQ4zCnSanKrbdJ4fMDF7Jsd3RLZ5H3JFJ9P9mz9pv8itnJcbCGsHbap21L9xMmQZ4VHRB6B",
  "key36": "3wzHi2Q6nSt1g1jDtjyt9axKvF7TFNYFGbhQCvd1u1FXQU73GoVzuh7WXdYhVdxA5Xs5eQogUBjraob24SxAwhFM",
  "key37": "s7eB9dcqMrsB2tZmWqV1sL3DPee9zFPD35MX7yQVtP8162Fk8CVpo2k2szuXG4Z6Yy9FBFKbt7CwMcAqG6zVN6X",
  "key38": "3MUtbNj1BanfEcgwqhAyTENSN8hpotfyUpqNATdYbNXfn6NX3vbunKofq9NbRBbXYyNK38Yvw7qbTQrW4YLwEcXx",
  "key39": "2hNrsktNBzydF32owxUEJGinu76XtDAoCVGFUfQ91wmrKEquPoJMFkToDXgghTd52pouiDgFDHW1i62Wx1AxvfJd",
  "key40": "ZJMzZgCs8yDS3DwW2B7STEmF2tiNfkTQofZbjBud8RfSdUCTkSaGvpMwMWgkKKtzz5MZF1ewssNAh3x2U93iLm2",
  "key41": "2NK28msDQYTd4Nn9XCTR2WZvZ2NKzDmq6zoNFwB97KjZwz1pMn6F2rUagAQTJTEzXWHbF5rT2UvJtBYAuKWAFSYX",
  "key42": "8d9A8f7Jq65LQw9HYnhSQPXNue9QJYiet3euAWNkH4Y7cCnros3opFAxzNiDqu9e9eqtGf5o58LcZFPpQojfN4W",
  "key43": "4reofVdPTVVJxkd784HN3RGS2SdYTg95qyxYdHn4xgCG8CrQd4WmLa7jB5h6PVW5srmD8oFeBiDnscAhQGih7FPC",
  "key44": "3gg6fEtNU9RkSchjRL8fwPqGySsKEcvRTT3JJfCMtPCTM93cBLjDTcJxsT9ZSCUpQ1xm98XQury7C1gsijSYiJ3B",
  "key45": "3NMxFnjsYEv5VYNYzReEDB3BPMRqaGnyBrepcLQQKKxyoQ5v4ksw6sPQaMoRHdRMC53bReXFFMZUc7iZRvi8Z4qV",
  "key46": "4TGvJkeYgswrpypvb4LLWc3tZaSQ4ZkyydHU9UiTuHxgwR1ikUdP75AtRvn8VRwy6WZ1Q7bccUDP8G4uwnR1ZVq8",
  "key47": "2AehE6EfLsNBaZSQs4sjpMvnXLQ94CafWF5FdJS2ra3eRaS6e2NyRnAryCd4Berq3ZFQnZegTe6E8yZG66P1eiyV",
  "key48": "3fmYxqKo2mHpG87DEw9Px3NLjib3XvBPAYp2yPiKMsZbUnDgjrdcxerjr6Ab6Eotijx4JUcbVCYm3jHYdRcqJdQL"
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
