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
    "RqEwATivnTp5gRvfL7BhUK6DKqwcpfgT34szht1ChSMzitV9asc1eYhxNQ9pdFKvNzekKqhFwnKi4777VsBUKj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EKvLKWiaSo6Jo9UEY4vLPEcU5roSzBji7tAASFFYynT6pCDC3oMWiGMswJE5JLULsckR4LzxdHTCUA3nQ1SZDti",
  "key1": "w7QhgvSRaLGJm426Rez1eJYMPCLaGXMphKMpuPx1myAYKQU7YQyDj3KCkDJcY7m4WK9ZDiK3aD3Nsk2xkHUtUmz",
  "key2": "5UYXwmFNPX81BFai91h85fVVBoiN5FsqTbXLofp3RgRd2NBZLoda41mMRigA73QU9vqnkBNW2gPUf7FRtBDzZwGS",
  "key3": "5bNfFsq41Dt691qdyqy77QLErhNJyTvYWMxdbqJWRXbmNn6NSsBVVcMyHiKq1PBqefH6Arqj6SFGfric9ic37Zcf",
  "key4": "66W2XzyE4GHkmdYvvWrWqzW6ARQGdmWZUoo5ZX1StuUbkck3PauiifgpZcUaT36vgytk5g5Dy3Kaj8EhbSjaXspw",
  "key5": "3ur46whkdH7EDbEu33vXtNfhqkS5TR8aFDSYR3DZssYGDuM3QdsWfTGvCBSBEoraHrZyfqmPMjgKWBwu4ojAFpJw",
  "key6": "4xMVN1MWYVdH2WnBuwtxfDY87Yu8j52c1zc15fN5L4c8fFFchQxRFADuKarKHZscc1Ui87voekf7ZEHkVFtUEJDA",
  "key7": "5gtGS8PXtYbcMs9jkePXgDdPt5eDrVh8KzBrw3gzwYyRjKq2NFm8RDVhdSZC6gUHURErrpN5qwBv4Ppwnhj2bNgd",
  "key8": "4QhQDE7itvTJUWSNhTD4Upmjbr3L6sKTb2gkBfw2Evmzy7E7qpkXHZNVdXsXrEyobB4PqV8gnvXgRxGg1fjzxZix",
  "key9": "5jv2ks4fCsog4UKsgEBBQBNZLQUubVXQwLT7i6YVe7c8z2GH4ZGuR54vUf55Na3PBNn4jdUs5SSc445NNMqG8vKH",
  "key10": "Th6tZVqBt9a6hL2VpMHYL9fbBnznDtbg418AvGdUYSrtW7FL1ycFu2e6asDZpkiXLwWDPvfg5TgGcwbZ3JzgKaj",
  "key11": "2i3ndMERwE6TGaNstqkcVaiP2SS8hWJbe4Y7wGCfkBJTTLt77WhaK88bRk9rBmoKsJJzDxUyLK8Bget67xa6qz4D",
  "key12": "548LWjwrUZFCDV8Zjq15m912UkoZ4EWZzsorB3ax2tV9F5pRB4YE51QNQuCd58ESgYxxxCyHEZEAiY1zA4Hx2vay",
  "key13": "5ZpTcrK4BzhLhwpcRKcWUpgfHe3zVsezeEF733v7rW5yCbDjDthgvMpzxbZ28DEnn46aXayEgae65PVbp8JvWTCm",
  "key14": "4ABncELQ2FoZZBq42aXfNznS1thQw3b2B2NASnjPWciPBL5pHpNTNJGj8T7WpCC7rYobAoGtQf8EGafCo877khhL",
  "key15": "S4rUEEQaKPapPFHySik7ybztAHGyFsVmwm2mTRahV1H9Vx1u3NeRjXsLZtimVHcTstxTjp7ppMkvi6pS8D44GfW",
  "key16": "2S8dTzMXRNA84H5TRr3Neg4EzJTzX572JKgq3cT2esMQqi4pQ71qXECJnY9Q94fqhXTFrAJheH29B2Y7U2VEGNLR",
  "key17": "627R2dPjvVbimx8pbcKFbVPpFTxHetS3vnwCwDfHHphDYjj5i9SrDucLrjqkkn4hSyKZtXJvzB7F9QuzRU4qFXuF",
  "key18": "maBbTb2ja7guBFnmHqXQifcRHT3CKekSUDNL5nMp6k1LaRdHLK1JysVyC3qPqKCeTif6KH2gi6raakFG938zv3D",
  "key19": "3hojR91i3jeZiaPKJwoTEgvCSRxPH9cwS1c5VAaqXPs7ADdKV2ugbLovM292GwrzSUdTQjqjYFo7vA65cteVB2nU",
  "key20": "2EyjVJk7GQxoZdSZ6J7EgjWniV7XRPgocUzhYW9phxWdzrJ6kFKHarMt6v5iShCPM7Y6sjD99vovwCs4W5Xu9c57",
  "key21": "kKzwydWVfZR5RG4HLZe7RpxV6YLiJdiRr22rkmUtuRrTMJSdzepPgreAGBn8wnEg1uVvmfRNbXhJdkxhuE36Jq2",
  "key22": "4kugKJow6k4nPvub4REEjqPaAujnGNLWynRKp5TEw9zj5SCN536VckUfuHgxixgegtpTVhSDxzHy3pxCGhcfqFeb",
  "key23": "Sh2TQZTNWA4P45qS86dxxgviFE9Vi2fZUend921fPAqUYDB7fWj1DUyVTZkJpMCihjFHHxkZ369meNT4gygeihF",
  "key24": "2uyLqYX7fBLUEoQNQw8h3Ct2q4c19sLvLuc8HtGY49JeR98zhbwcUbTmQjv6DiKRUNSVohh1Evhke8a89qrg4gEf",
  "key25": "5bsL91WuDxpRqsBshB2m4KDtsC33XsdNXL9HrMfeBYwiFiDRtRuv6Q3Xbmfz7WCX4eLtLwAKpSVTiDe9nMnru2z2",
  "key26": "2oPfzYM7bATn7WMuB7c3GGF6CbkQLg187yKv1SEKgeU8tpyALap3MihsS7QMMq9aqSF7Dr6uDcy18tFaqt2xrXsQ",
  "key27": "36pzcTZ78gJ7j5opgnvFvUPkEgS749vP1AicgqhZwkR2KXWQKxmJLpcszm4Pa1zPo16LpFEdZQXHu6etVM3Yaqse",
  "key28": "4MbdGUHCd34YR7W9ZPV1A7XaytkyuTZeWzjXTYs1My7Qy2TC3sibb6PABQNDk5J3P32YfdhuUiTKbNTmUwkfH4Gj",
  "key29": "4En47JKXMxHegw4Y1o35vuJQFhVttFYy3DmRrmeKy4TiCfwHu5YJiMbggUaAnBDsVjM4cGwmPGrFxZMTEnvVAjKQ",
  "key30": "4o42rsVGB4LAE9AY3Ten7Wmk1p9C2xfNSNZ293mS3wmdqv2xdH5PFkkPjie7H4pJ35rjpnfiVP316tW7xbGTRFLM",
  "key31": "SKAeUDfpB59gTJ6zW8cgvjxxe5YMST7zkUwsX63yiYFhZKrUPH1bFUTfVwDQ3o4eHQt8s9T79WYf2njXjstn2A4",
  "key32": "5ZdjqFfTQ7MzsKsWSxFzdXJkRJ3qBzDiK6jrMtyHSMa9RVpMgf9gXtzibxoLFC7GDBACveb68RjE7EgmAxzYKcWE",
  "key33": "2mPMD2LPJznxBLxUgDjfdnBdPn69uYWdjqEtDK9rRjKYaGJpydfBUeDsqjk55KUXQM6988PQ8MamGMceMzHvt9Lf",
  "key34": "GZ1kenQCAPJ8gaMc5sc87XvaFXpd2ka7DXV8jYcAYtNVBbPYqheZRErCCzH9ty6ypUGj1aLcNnbf8x5aDFX7Muy",
  "key35": "5y9VgYVBEGifV2aiH8fZhTCLSRLR3jq5Vzcj8jutG4trcQhzhxGJ5YoQ69nacPLzhA3s7gucCZFXV2fwphpxYzXm",
  "key36": "5VH8XtuH5igi1WG6mBuSHbfRiUHEKFJ4UtNeACadD7TfhTEQGBLpneDv5NPh6m4CdqifvG3Qp1fjG4G1mHHNXaUD",
  "key37": "3HRHoAfxMsknoeqoYij3A53HqzESrh8n7pFVpLkcpvWiBTRWqh8XxAn9bagPR2kaMAwGPiKZs52WTEPGmTHfUreJ"
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
