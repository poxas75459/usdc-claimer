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
    "7p9QEAgNKrHsn6nPbMLjvSMWxJ5hUj3CEVtYQD8LjdaRxyNLeEZA11q6LSTPD5A54E9FZRyCVhMQiycTnktBncJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5erhBt75mN5EsfLv16U8A9Qh19EdZti9QbH9ipTz9VTyqdT8extroSHrZCaMmLbf2cxvV9fHVCQAvc3BUHUwGQcg",
  "key1": "4CgihTrv5mjQkzygKTpA22oHYjLWdRBRFtzENENJfZvcz1pY5bmucJxqrsa2NHM7eBJCjvHYCnLV3rwcpZzsi4Un",
  "key2": "5mjWW3wdA1NehdwiVbKhwU4gG6jofBZ6GfQxyiFD9UhUYhtbFVnxMUsVx2ZUcw5BV4dFvRzEVaS5cmhX3is2wZRX",
  "key3": "3qZV6RMPShCnoVgAYkXb7ymTy9QLZXvPAY5MrmEAJNjedXc2e2aZURaw7FWxfvdnLkKa65SLz4tkkm8pyF5qwVVb",
  "key4": "65yZDnAt1hLEUUwL5bQJ5mJCbMKEB898RhcFDPzLm9dxutkzgdvnteU1MR1Y1PBAqpJTNRx69b8dNz11yS21TBCX",
  "key5": "5FK8im8Yan9A2oWc7XYcCUpoRVALnXqWJpADdCEGJqTCgPzgnGyPDwFZec6PPbtujTuZgPHZqyTYyCpWzaRxhEQW",
  "key6": "4fSdmN8cF3qdAd3Lbn8Z71K99cEdm6Twij7og556ZQGS2nVAfUMWPSHWXoJwGyyE3wRM9Asr3n9x9Pc1MXLJTbLV",
  "key7": "2gn2dr2zgpbdg9WkUofmsCZNcQvVdFFGhN6iT9ZQQyPcGc58FxVPSMUNDa8QWtb5y5veVPqWgt3sZCcozcspcC3s",
  "key8": "4yZCxtLEyr25hHJ23uaTrdVcNBR6Gd9xG9D1psc1p7i8gwgKLpHZrB2XTCBAB5ifzC1sQPas7yQWiHZfgqE6mUR8",
  "key9": "4veJaQt5iaNTRJqwoeDzNevAExiS84n5Sew79gqjSStQpBzc7HGaNPV6DAfiwygKmNSEhtwCTMdp6E2WTRwSiy4q",
  "key10": "2gMtVdT3F4cFpEAPKLD88mCbNd8dAD1hKNx8gRiQbJWM955zsjoHqzxtELBHm3YseF293opUx87bXiVnoZVTizF1",
  "key11": "4L7kiAF44FUeTYMFwaWffzsAABoRrLRiuXjYm6Bz2G8QxM2AmwLFmkBD3NG8X6LFE5MP3BLjZd7bFky4wj5M9Scy",
  "key12": "2Ymssg8oh7MiFoQmSWySWTi5vZSWPh9XyXg3JTUdeJDoncJpCbWPi7qxy6nWtzEF2TxQocGK3Y4Uy6U6nAmpTiDa",
  "key13": "5rUw9sHAiAxRn2sxUYP6wC2NyvQJ9Q8yyBvADs81P2tg6dRVU6quCyMrqYFMbTpAZrfjRnDmJ5Mtu7Fbj276zgq9",
  "key14": "614uk9ti7ZtoyPC4WtimUc5NY84LXdkmCqCyUBqn27DKSdc52MJAzzSTrVCnEzo3VFWdMx4N7qYZjGCGQoS5EJ3k",
  "key15": "4F54Nvim328XxXWNSyXYLwBJfCB9LqY3SG8a8EcbgBtoqc535ktS5q8xKf9HwXoNSVCqqUuKUAYM5SRif9QFNbru",
  "key16": "38eDUTGWPon5XaWhCPhoDBvujiGDhK1oCBMXowdoCSLnxbSma5n7DXrQBLx4FCpM6ucvpHewfbPC5dbK6f2diTVn",
  "key17": "2btovEsUWBcu5DVW5q7KkbXC7FdcfjJCwB9AdpvgVXpM3LoydA3ztpke2faiCoD8cb8Nxtbn1EFJZTPaH6dyeFuY",
  "key18": "3bkBTZXsNRF5ngNTheE9ECzk8GdWhwSA6DiTK3nq4eK3KxcR8ZaaeqidN1NBTVjDUPXHMgbTXpsuP2qPgKu9cwS4",
  "key19": "aNjQ3ijs6Wkqd3rfiNypX16ZMbPE6m5rYFH1PTAL85yNAFTurtotKwAs6qwx26VPzQNxanTNmLbaEgo8UzeiYq5",
  "key20": "kGAid4NujPtHHHghezzrUqm6KHpYzVvxbttAfhQ2wQDk2R3Gf6ko3KyToscUikyBmKk5dHYw7AJv2Ypj2RXMyvp",
  "key21": "4qGCjovqtjBTagAGueUTfeHz1hPTw6jdsKGX8DPUyvMxHLG8S5JEr6UrMHgnXLsBTk3kE9uLbRugeiRsyWwQj2SZ",
  "key22": "3jLdBft5igJd8Awu6U7p6Z4Pm5MJ61fUPXz55eAL1EGLxZcvNjYgRTGP2jYZRgmLwqJuD3pcdxd2MxFbb6n8KDnC",
  "key23": "38wnmw4EmCdXvHYrMzwh4WHLCyogV3gZsCk2256jYcwZRXdcwhH1G8rPrjYXC3dTgxciXJefPAhfsN6WJ3JS6hYq",
  "key24": "5pt1j64oxx1khxQsBt2aXj2Dc2wSZXFuCcgdmaLuJFfCpBpwhLJKqJLup2G7Y5rDwM152wuZBu7qCttA7s76RwBk",
  "key25": "3GMFCgeWoTsmt7bx7Km1L46b1TPB2G5t432qP4c53SHHcvSxxZCsrKoToH1Kq6D745TnoGSNYm692tK3ewHB9Khs",
  "key26": "27dejoufS2W3UbsnP62cFfvgNi7PLteMkg6B2QCNLHTQX3HXFB1PmPvPoheVrAwyxuReHuBiBDAwpvovdt6sEkQg",
  "key27": "4myBGNoo9HJdYebvxe8kbz4gasS99SyCQhzQQW8PKuUfWVTR2xMbj6Arbrjd6Se4gKBxbRXokxEMdWnkRMfKTmPy",
  "key28": "3DeVxkgCp6X15skEDWgfd2geEbCAhTZ2Qgiogvn6DfXEBeXJkkdhNBy8SmRZ5U29GnazhyGugPWufNpcbe2TGBMc",
  "key29": "5RgizHdmde3yM72SbcXiL87pPGAHx49Gg9eQ7tk1LE9ZfJbjJGvXEhhcG53i4tXCDTsCWRqyCPKPehh9ZcSe1q4y",
  "key30": "34fvdEdPnmGAXzuEJH6kHFc4PcukC5sazmB7fG4BSXK2vBE5eT4qXvm7nSFDFdnXLaHLja7amkFZa3iy1aGtDCfs",
  "key31": "33LR6q91ZSLmGXEipHSDWavVhRXfcjFNVw4ytexgN1EPHttvfynwN2ynPCALrhbbCQJVahTGqn5J8EPjYLWTK3v6",
  "key32": "2JgyVs4rMtp4RgjBvHfYzzLCySGB1gtKF4hd6QUyHpffTQnV8NbTKBMtWDjiFwjJhGjtaFPuNkPJW9gai1kFPnGG",
  "key33": "2KH51nC8WjkcDuWKvQKTtmsNtjuzot2y9CMbqRESUpcTdcUtQnwGZc4MnfoNPr1z8oxe2ToyozJSrcU5ABKyu9qF",
  "key34": "5hjJUhWQDiDAFofjw45QctUpPiVw4rVbrP4zM8rZ1d3qLEQcWc38aAriiA8JBJRFsc1RFB7fThiEZeeX6X17gf8Q",
  "key35": "4enTHNH427WEqVuPt8cvfJEfQxbftMrNiiBm94u2QpHDaMbFcb6dRE4Nbe2rZA2dnNZCb5bup4J9W81mW4PxJqfs",
  "key36": "5ikSHfD4Av8Cr921FM6ibTGRuPvv2fDxmzZsn82gT2EXBnHzUs2yJYGygAELP8mYpXqKcmNnGnyGz37F3GLJmnh",
  "key37": "3oMv6FzDhqM9vfH435wc5N7KVroWQ6FgTDqgYPKvYrLxhpfpufRaEc546cm971HA1GVFojBuxXjPZR4iEaijHeKN",
  "key38": "2RBdAEqdZ9rxaFWAKshHw1KvG7EqBMeCtY7hyiqcGhiPkxPigYmMUZppVejQaUUqtgt1qyVttgByJ4D783gLH135",
  "key39": "Qx8qFRYPDv5PXHZRWjczdDU7sBbUHZmqXJXM7YT362fkD9uJiZiNGrR5osFNuJLL3LFFBAz2fz9AsXQoE4wdcdm",
  "key40": "2PJpFF4onLJiXry8C6JTxTAnf6Z9EUcDBRMvP4bbxYyTfMMHqi1uQrToSTwLVmWFTZoVrrDDJMWxfMpEBepMaiaA",
  "key41": "3Y4MCyMzWbGFB25NPHtzzJe9vdVHrE313wgmaLvX2gE42H5m1XCar2xSgkSUdry8qpM2Bf3ZtM2K4DA15vBfDtef",
  "key42": "2uDBAy8MriFA6Bs3L329uCRHFH7JBL4jLx2m9Ej32qcLYgvWAsXNMUL2YjyaBTr5vRdqSmjbKZxd5RWELB7byB2j",
  "key43": "4ooFJ4WgAPE79HwQnVPzu5DtSLzDxPgtNYBDtgzXxGLM2yThnJgJFq5U4EcxXDfLWS2jXKFeX3HGRpdBkbLJ948A",
  "key44": "pJ7Lgp5iWLMpe8K2cbjuXCz8nKU6YGt6JqnDdG2d9cKT7oFTnrke8HvxGPY8yRiChFzCaFAdCSaVhm1LVMUiZ5p",
  "key45": "2L1dutA26nJhBxmeCnpf4FcE6SfmrWum2hDxxcRjr9X5PQxNX4Pkgs1tzPw4f9eEFx3geHqHYBLHPSQsL4Mg9ACM"
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
