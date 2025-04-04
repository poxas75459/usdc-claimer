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
    "5KjEnXnJcwtmgumwUJJCatKe8SPbyVvniBHE6YWN26w4NExMPvSg7KRV8upHJt4xvpDc4ex52xZPF1sRwYgioZ9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S3E2dqsxP3gCEWdAjFnmn3Da7rguofn9eRaoNtJSPGJzbswC6vd7xpEUXqTacRmMteMNJMtnM9Q63KPU5Jr2Qzm",
  "key1": "XSq4oeCXCgxgs8TXHFbAt9Et12du1S6knN2rgX36tVG7XfmZbxk8tAU164vAoR69xHX6ZyhotDyBLT6GKh5x9Cw",
  "key2": "2wC1Ax5BgLgGKs5AH8LMGJcq1iEsq4m5MH325zsTv5dBojYUsjmfrUtUkyVgTSN2mmzwUKeLZGe6YaNPCMLN3fEi",
  "key3": "3CuqdTZ3wbWkMSNXCEoxarWRfsskGWLC8Ne4NxqH82MLRVNxRjcCjT88VzEZrmVbVNqpx4jpKGRoZ1zm8Q2Nvj4N",
  "key4": "5F2dTx3WTm2vAYUk7cTApeF8fKvhQk5ZZBtGcHkJrDK3yq86zLBQ9LBo1LxkGEwWvX3T7ZXPPYCcvGWJqAFHRZyZ",
  "key5": "4FnWZEog2DskZ7L12TrcigEwkCAun1RNV1sWkWrUdE6nkNiBesEuhd4rq4ogyBbbUQq7kFRLbaK1c9t6wo7Dn5MD",
  "key6": "3SNXTV3TodrrmbrwGNkBwKr5kpkgg3yFWsF2L2y3XZSgvFBt9KLQE3SviX6k6H9cXESfxJis19pgf73EzqnVEZeQ",
  "key7": "4fyr61y6sHLhY4DzuY3fMMGigGQwS7WF7TAe58mP6QzY6XYym2LHzBp3Pt26eo1KUEjJEA9BbYCHfcWbGCAMu3dP",
  "key8": "jp6ytmsxDxCBtrPAYezMFEMnK7r5Tspd3DaFd1nR98TvAZqtNhdZxdhTuv7wJFcZ7d33FaCdsHgD4otjgBynLYZ",
  "key9": "3ZDvp52rELcCT8Jjf5dtFebJEU4uqCrnfweVTk1thq2PdUpnAtkyKNh325yxk2p84H8QBRPo5U2fev6uVAQR6WSB",
  "key10": "5RVvvvjKa9iJQzadPUjME5zeZ58EU6JUwYMPrwUUPKuy2zwVgep821TFZGj6YmnA2y449wK5rDu4V2mSVeCxoWvx",
  "key11": "3cuGBU2ZnVsoN7o4KafKeecA27Kw4SScc7gfPe5q8hJ55A27oDtxBdaDyjVxyTLo7VpsjkRxs4s9dFtMLZEFCizm",
  "key12": "3fKcd7vPDm1N9PbehxW8inFi3EC2Sh8DGf4UaXq7R3wamSUmU98QWARvqjnHNBH2Mv9S1VxA57j7DYenQQMWzrGK",
  "key13": "2wyLVwrZNnaHJpPHxi5VVzVtsYsA6SLTFLfEWJGqYY7cRfoXDk6eJ9aUg3ezV53GYb2dEhR76juKge3sg6rbkgXD",
  "key14": "2ULgeXrqiA5xc4VyZinNWW5NNaYRrL2FbjsNNu1Tx1Zy5cY8sVuoHxhoxgj8dceby6Uatek2521jBy3AtXXhmHRg",
  "key15": "4wX2yf3ZcyvY9Wg37cLXyiRwgzvzjuHkxKqSZAnZSYiVfSwumatsWLtM83xe1v9UraKnbPjDhjLw8Tvid1VQzxdv",
  "key16": "2ar4AC4eTpun3GCBJvpjcWaNsbHo1dGCKBb6pfPc2WDcckfKJMFifCXW3gPAEiiGmSsd2PXAkssp1PrNYWn4EPCy",
  "key17": "38TPUunEGYhMabUL3UL71yopW1BMGHkzvNeLB4Maq1YzPa3CBBVhvUgijtaMdYGpphR39wZhU8JBftdGyGJzba7H",
  "key18": "238XmgXKHTZFHxfFiNmVEcssEjCtNv2V4ZLk3JFzj26jKSpMYBXPaJFQKi4E2MbcN1kEucGngfPUid9qfoMK2nVG",
  "key19": "e6Gvk3QBuELcE2TZ6NKctYeuN5Ay2sXTRdPavgYhFhq2MPi3kr5Y7nTfV2jjwgn3LR7EDypNCtZnXFeayEKJECh",
  "key20": "hwxyvUmDRHmFvJD6vBfZjEpb94E5pBb62v1poFs21HoHAyiwMN5QxG9K7Vt4Yyj26YsMviUGyLvePAswKTWBeqx",
  "key21": "2cVAZWhscv4egyDbCo4qBSzyP3ToNcEMEHzhCujKDBPie1wKBevLvza4z2kxWvu7xSDrSHGgzpoYwSiFFc2vCaoy",
  "key22": "2z6b8Fa9FVFsBgCEqaGcwynYYuL3otNyyHrqnd8A15bEuQ5SMiXancr4nuQ8CJ5Ka1EfVuqNmnw7minTFwxEBBg5",
  "key23": "2jhm22beh9kZJDqFwDjw6f6V3GkFH3wLZqzXLYsqAQpSYnVUeMEVGL2pL9LQinTumK6Rd89jKix9UrATtUeG1jzU",
  "key24": "2caq2X4EAe9XF4AQmpo24pMhjuXyKi7NMfbek59kWHKrss4GzpLemXcHNiDjdUJCuwgSRtrFJUm24Pj6XcxGtcTE",
  "key25": "3onoza1ZbE86z2tcpd3eXmgGVYhSvT9YW8DTJByxUAN4WgmHRnKct9fSZqRXGs5gN8JCLcaUN9PsU9QURdYPG1xz",
  "key26": "2tYvCcbRRru2HPTWezctzdZUSwEfEToD7dpHif29pxLirnRiDsyDwjd1ZJexHyzqwxPLy2bH4Uep86vhvtFL1h47",
  "key27": "E3mvFWprjXw4odyupDyZg4daFgXzgRhK5KTtfTTsybYyykbvWA9Rmf1K17qjSsLxnUnPWoB1ZNn8d696wbDe1fE",
  "key28": "3FYtD6kCvNhPozX1kQQW7pYpvroaWXP53uS9ZPWUSuzB5su3g8y7ubpPepuJgRb4TwL4JBwFmP3BkZaFR1kK6wmv",
  "key29": "44xjBja7uawmrQgFPZMLmNYpHMC5oBzdbyBXDXkVFR7KZjhVSmQt51TQSiHYwKswxij76VXChUo7XLrvp5ddEY2",
  "key30": "44wr5GpqruCXuw8jNhwRDn2hy16TuPeNgyJ3hJ4NKFDejegkbisDU58cDGCJAGtgTeGLcJpLojhmYg3dPg4Qsruh",
  "key31": "5Kxs6VPDSqi5foNTPsT82FYgogJnmuqZGzAJ8FkJBog8f7EjJ2mcY1J9kKyqg7XvgLnLmVKUvaq64uvkH9oCbEhE",
  "key32": "3d1FsLSssLh6FQG8wo1yr9zkTJEvaitMmkJ6ewX7VLzZx9JTBjmVpn8QLAqw4HpPktsaCkxwY6oDV26KYaAGJyAB",
  "key33": "2E6XFJE8v8F3VWwsGrJ1weEHD9ahrvvKqjJTZyDaHUMGjiR8KMGhHUH7T1WSVJyL9E9EYfWuQtuRc5m6BDBco8Jz",
  "key34": "44yz2BUPqqrHC55Y9mayW5MAtDR9NRs4mu4WnvWXAPPmKXHmQYskJ2abdBpZtaLGbFhib6TPfbs6akcwcSrkZcF5",
  "key35": "5cVLKMKZeHNdkzPn1iqmGAEpNGpReZxJa7FckyCiBW9cPsjbuQTnn6t1aTiYPYyqeE2bBebW5qjfxonwxrxAAxih",
  "key36": "3Rdp9yey1JeCQbco4zbLXv4mBdmQ17bqV3j3ohirAxN19PRx6io6bURiBLJuMThnLw5FkisJUnzqnEfp2WixAo87",
  "key37": "4HmKKZKGmjqJDLVpeF51E5UzFJnBiU1um8Hchf2rZXWwcJxo5A2j4n1jV5FXciRFbUMALiHCKAon8G2dZ9Pf4fTu",
  "key38": "4rMCfcnwWKhadc1BMDe97VMw6XUENXjTMpZKsiQRKZ5BuvtaSfN4bfn83cNme7HW4qR1C8LcLXRp5vpJ2U2kA7u3"
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
