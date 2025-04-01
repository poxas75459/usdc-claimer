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
    "3jc32rqERXVTgY98TAGQ1hkDyVk2R6ahDqqtTchUBq3FEadYJkGx8M5NBcD5aaLUDiZtju3FUkyoSXpy2ijRNars"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zaw2RTzowAPX6ghUtWNNcQ2GrLaxdu6oZrRk3fJZX7TGmyhbUeXiKTnCgCzqhzYpgpfyDF4CGAk4YNj1TUK7EJ6",
  "key1": "2J1wCcJXkDiE9Ar73M28Jq3HNYxpvAyJER4PMoE7W2WrPFJiCPKUH28acrzogF5sx5JRgLUg2SUs7betVdeC2Ha3",
  "key2": "2TqY7FofA2Gj9SStjmATmFegPtGr7XNt9dB5jrNDV4v4rkJEo8wj3hftYykYz23DXemPABVBRQao6gSv5xuoXtL9",
  "key3": "yoa4EFvyWB4Ai9y2EAqpiMpS2NzUsWygjeD6bbAgk3Ed7HCHLwqKPvG4SCWtLN7bhcttwkQprY12W4YAj258vN8",
  "key4": "3XE64NtKaMB3YNXGgs8qM4HajYo7xg1C3ZKxMbigBZXAjPFQbnXzNWv9arC1vGujusxZ9xE5KFViZXcFsC9iKxUo",
  "key5": "2XWNhskNzxUqnSQzeAjkyDANswPk9WrzT5jgrgtBickJsAkoY46KCPEdbk95KCHeQTtwnF2UhJY6VfbuAEij3cgj",
  "key6": "3eDGk7gycYnGo9tiv9nfGihgD9DVekWP8E2ncggWmXZXNsCCSHgpKH5A1oMHV1XcmsxzFtcjuntZ7bivkhp2NCjz",
  "key7": "3d2GE3FxtYpJtdFewca2m75vUjV9WWDAPPNeqo3kqAnTTEkGyKchWNiQPuKAAMjFJMPZT1CLBDg2TWiHTu7ZrH3Z",
  "key8": "5JnqFgWGiQE1aH1NxnpYJQuyerYyeSJ8euHdYAqWPEF9bpvWz6QMcPK6CQWXipWWm1p56pxRhrh4Z4DeaSqSAdch",
  "key9": "4n2Rx9qjt6jZyUjnGpQXDKbQDLNm91WC4UPUz31gEALyCiatk7mDbrmcuAWiZPmsiiNGcrJ3CU7mKnCyTHbUort9",
  "key10": "2coAsCKgTbvgSYzZrNhURRQLHo3LBTGeQVBdgVhNreefdBZnpHyCmMnepN9uJZMQ3bxkKkBjXEQYT49T74Ypv2J5",
  "key11": "5xq917TVMc6aDzwokFaw79p1BvRtJ2oRfHyq7yj4bU3LWLcDoCCurRLSds9o7SSdWGuRBqapAbsREeX1wcAqtTfp",
  "key12": "5M8CD5Cv8oZ474uBVrHCYUhvdMdJm51qoX6MVfjZbnHvRLEuRrzkb6dpvHJgG2ppCYRqRdHvAJL8yLM4X7d5FPwu",
  "key13": "5QMu5LngynomMqTEh6SizYHanqFMwBiiYHemu9ZpFfFTVW7vFpFgCkPHA7jkso4XmKJv8MLo8uwz4f5jkZdcmdNe",
  "key14": "5Q1w4wskeNENz2Sb1mLCPsaj84S8nwKYYvZpThTq23Nc5JSgMBPTBfbsRAoj9xmzzcgPoKa2mqE9kPMKoNp1vLwH",
  "key15": "5aY4ucZdYCy6RNo7JG1eJLT1n9roG4kEuCeFyYtuJSDAgFDc8a4DjyuPJchNv4wS1fN7XXv4PQ899aBjNn2gvkSr",
  "key16": "5iaPECRJS1CDVqumNsyHDh5DzTJWcdz5iHrvFWnczDq1DBtYfJiTpY155cffrg6QeyfVctXkQ1KQeVgvgTcGN8P",
  "key17": "2A52KmDdsJzhfryZnnqZvzT1i58c35FzpsARiMKiQfX3RpyruhjrBed6tD6ETZdyCcLKmpDPnV16VdfavYwcm73Z",
  "key18": "23mhKYbvELZ7Ud2fkQG1NZWVxefbbqwrAnMbeKmyLzYVoTprY4UVGYewPfYhBQW3N1XXADdAkBSyQKBuZR7fKJvL",
  "key19": "5VNdGnNcMYFKyt572yNpXPEzHWmRbRbzH58hiCNmL3csXFGEAzeALij2P6BVTc5qWLbCSam4NUaHnqY6c4qrsJaH",
  "key20": "5yx2iy89FjVPXy19Em1Q4ACKh29AWTP9okUW94UbEMmfVV5PEJgHTxpLoaHj5agN4gdfFYMFvJwwUef7MH9HniAE",
  "key21": "5imvd4bAJCP6as3vcRuMwFeetYhPjJBnqyDH22kM81uhFE3qXKD3MB6UDqmK4P5N5kJfD5hnD21vC817hy3aJPVn",
  "key22": "3jA4dJNKPjZvydSJHw9Vd1zegJvNZFP1DzmFBhDQXn5csrKoU3Qyq1yeHvr6dhsZ8omzCuz9eR3Aj7JSzfuQUjSi",
  "key23": "4h2T9VNpeBQ6UaL397ovksdbYwFX1TH1NzMxjCVnYmByDJuZ5J7WVqdc4N5uY69uoyZm2XFwQ7eEWE2b4AuRjXmy",
  "key24": "5DCVVRMtq1Gip6oJBiyhZNp1z9jXukbFhnmCZpMsnjfBkfuxwMUR8cmPaGzyNVC43ajqB7gepPkR1BDv8YqVRXFK",
  "key25": "q5gtSyQj7io91PtowhA7JjdjqvPKQrUi4DZcYcbnsvoQVnJnsooUSURDgxPDKTUp8cNQDsGqZH4qmUL514D49nP",
  "key26": "q1HeCchGEVZjw8QRat7s9v3H5WSW74JKV4gdtUrfxLpFdP6ynerAbWWW64nwTQcKEPFgjG46GwUH2XeLyJATnCZ",
  "key27": "4PJzXaP7KhUVQ5Pnmm3ZHGinLssjZfro2asWMEXwyb4rpt1ktER1AHo3wCfxqGkbdFzznFCyFX4RcTDA4rKNd8MC",
  "key28": "521Jj3m6Lq85pNd7XTmPhhskBSHvS8bCuZf2CXFRU9pHuA87U4KdWT6ZPHeEXsykEEtdbuiPU1axb7P2rXPwTU4j",
  "key29": "5zyxFFnu4rWNfurbv2tUtnr3pvGq2RwfHK83wUvWT39i8VgziwbDKTVo52sxeJg3BHpKWD2UVTPQsuLwHR6jRtA7",
  "key30": "2e5VAXk4CMRK3S86X3MTesraDUNaSgtmNqH7GfHP3Yb9C6AkLPKT3tnzZ3VKXjoh7qVmVan9aQE1xtrWG2MLRtfy",
  "key31": "3acXWQ1ym4wxppZhfMPjrtw3HBCpZfC7NnHUFan56N5vdqb3qUkAdjwu9K5FXmdwZKr11kg2bT4khjeBE3Gyb7s7",
  "key32": "5FfcHkkPhw9m4qSW9t6zFo6E38jNHUF137FHaUQxMPaChCP8KZqEJ9NejSngooJqXuUyBEoRbeoUE4Khbwb2PptF",
  "key33": "2tYSnwiVbSsDsufPABvdkudm22qPRCZTgoTzzbZvGBLp7z2zdxDkJK6RyWicy1mRqx4jVNZWSCTkA5FctkbCajW2",
  "key34": "2bD1FMko9D4igxguLzPKExmksSvFsQtaEWk6PCQWAXhjp33rNUs3BF368EEeLYhjpfWodgUBcP4dVvQuvWDKW54u",
  "key35": "5zhMAcG1tj6NZfqNjN5xKgRaq3fgJebg7uwZCwtPMwyGu4rmXFf1QGEwA683y2VNGoToA5HCfhnozgfEnoiETatf",
  "key36": "r6uCkJK9549aD5peWZzutsMCHE8qZDoudAcKnKHYbcqWzKnL6BCAi4BGqvgvmVGiJMbUQwNvxLjA5xbYsZxem4h",
  "key37": "4eNGfwdVgHt1k8neirv4KG25K6WAuPcXiP1LXFEokSBmqB9B9yW7VtxwZXaueUPxGtpYiJVu6g4suw3tcFNpQ9NN",
  "key38": "2764rkznTsYSX1Q4uokf2rjwavBo5yMUFiDPxNfAoiSXXc4BNE8vbW8GaVepKURKiUf9L1Y57mRKw8tUR2R4eJPs",
  "key39": "3sa7Gw8BpbS8iutEMUAVHKf9pKAsLtB6eYgzPnnMekgjc77KFgW13YwZjrTcm56KfYbALwCd8Pm53Za1XptC9Gqq",
  "key40": "4zAE9f2KRRVkk3SzEFDxR2BffVyfZ6LvqWPhMNQJZTQcRY8MurnMxYeqEuSa1Rmm2ShbrgGE52FHWmCC8fthmafF",
  "key41": "4VPJSJqp6kpD1Jzx1hRXCuVm4W9coPqozDdwPxGLz5gscVL5QaNjWDCiyVfAMFgQGvnXeyV44MTrW3bms8nPDCYp",
  "key42": "MMvtmWHLAAvWociAvGWFFJYh5zKcTtSLcaijFD3g2Nhw9CccrQGQckziS3vgq8FmnZCPRvisH61ZVpewrMz2HZR",
  "key43": "FT88zmoULpgwtDhKyeidYRRFzKhzzuSaTwWu3R7QbD3zBPMMxfZwtVQcoS8DSN6vuEqLzntf5mYcVtHsfxTzBCS"
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
