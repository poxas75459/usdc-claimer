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
    "2FXwdB4b5Df2W2uXx1X9EsgqYCzZMUpXN19UHLu6Mw9HdfsYARAgH7hfBYj4d41Dk94CcPveEWsauW5AMXENZzZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NjFGH661sHaBhVQLGQXHzZM9Rn81s8jZBEcD9CHsrRwzWCnvzvynDHhNtgSBicLZvY77TSuvDReNGZ2pw4Har3f",
  "key1": "5t7pX3agngrBRZdDS2r3fpK22cxzjSabogeaJhL75EfH2wSsrTf7DSEsjdg8iCKR1Zo8ie5Krjy4EyF1veGxSGGJ",
  "key2": "4WpndG5AqbfVr3JsfvWQ63LVKu6gCuGvnk9pvBmMd3SLhNVNtUzBWNfv3F54Ba37i3KyufeajWUM7ByawGvytwF2",
  "key3": "LuNEUSDsuNim4P5LYuhGdWAzyv6cW4q8LcyaisS4qVXoiCYnjKy2k8SgU88aGpxgYrtu7okhgs7Pkbe75rMBbW5",
  "key4": "NQdQah2ckDVxYRxpEZ1Cp3VC7HXAJh8Do8YhmNZZ4QvLf37Rj3bhQYEQPMNRdcpifderv6YJ3bZmyDKSjehsr12",
  "key5": "2Mv9c1JNzUTcq9RFje7GyFaaAcLPzVRHc9qhy1VL7P8baGphJgf7cuq2UQCTB1sHfA34iVRY8zrtCwToR8SYART",
  "key6": "5rdZGzZF7zXaiQ9vTxemsnojeqiakYEbRwyKPMFAC6Fo2bHxg4GGc2E6aQeTaSQBSkkJ5zu6KESVu7Hs5D3KGKvd",
  "key7": "ymWmASEA7AscP1jMsE6M3oyZ1XzoEh6XzuRj3F3hQNcvvC9MTDbZeoHw6XbMncbqcDyUHzkQJ552K6Jd2Egi51n",
  "key8": "3XELhawn3gh1JB9dikKCtxe6mkUFp5Q2qgu1CmXyTyF3AAKR2RysiPQiwPXVxPNTSnSjZYVbb9B3ebjvdZue3BKW",
  "key9": "37GeBAtgHS8HToWdCRdJkMrjdJjseA6mo5B9CAh3rmg6JMMLgHa4oBVvvWcEBySopu422FZCJPHePimWnPYzPaPx",
  "key10": "5v4ZJot2SNY1utUvUrGVQT9kn7iYoXRswWUiPttAWscDaxhSj1iodbavfJUeE79prAwS2sjqFY16e7PCfncnParp",
  "key11": "8nBDWwzEGboKmK97ENfhcJ59ezMMe4TMHv3PXwpREuAgc4dHEN2PZuQjhFndLDvWVfMh7AVeHPeQmnDmgeGoKhD",
  "key12": "4zdGvqK8iUXfd12rqHSi5fTwkGyTZMpFoiKYuPCbXS5tD86eFF6xiEu53NdbNcbhUjSWNZH9ZCx4E7Du4Eo9PRWn",
  "key13": "QcXyL6bsPSYoyS6RMrPYniEBcpE1R9Ua2hHqyZyN5rxXnFr1YXKTWwVt1168ytTtzc7ZtL8ZDhW5fdVQ9YCnyi7",
  "key14": "4BtsbewViRkigR53fMCYqSGrjJdcGSyFLtByB1dJCw34LLjSVSbDgMyPEShkBPiVdvfL383WXoVhVWQumSfR2kVB",
  "key15": "2sagGzuFbnbXuwZeXUeFw3B1Zratfgi7e5rNZ3Kr54yvFTvbdeSxywWiWoFhBz6TTV1oiUm2qvpSinxQfsvjWJvs",
  "key16": "4CRYMLTXQ7o5zMDT8tpo3WkkpSPg63oAz7CD6sNcPjzK6XQZxASEahtHPQJBRPbHXhSfyi8JGTTdwh3Vbh1TrhUG",
  "key17": "2sGeyeDFzsvC4NnQzmsAVkXUXzVd8MvjfdV9N5De29MYBS4qQTFBsRv7SfsXGHxS9DAKqTEHtYKRXyhkUXxaGsF8",
  "key18": "27xmH3oGVtmHMPhpXw6Q6C3b56u1BwUoUbsf6DGjG21rsK6uoiMd17f2uoh99tdH3kTFKXY7gY8zscz1tZTWVTL6",
  "key19": "3g8F7A4uf3kTbNxQVt5jsLY4SqLAyzWFLYhL5WS9rfCKDdXMfJr8aVWhc7LGnRx4nYZi5sdxxTHozcRKmfaUVHkZ",
  "key20": "3rsMAXvhXMLWiue1eS5K5f8ivkUinibXJGMAibMGepugDr5EYTCHDJqVSn1SMyrRLL4gWFnEJyqVyRekX8YZhtRx",
  "key21": "4uBT9bgSQFrAdXHit7MNbEuWTTfgnjNbTJsRWDxLcyqUU6caWZKrA7baasd7v8pafRSNWeS3CvP5e3MpJSodzvkB",
  "key22": "WjMAFCrYRHjVKXzT4coWxcBYNfEp63hr25s7A7Zhjifa9QrKyLujoz7RTYza5sqfnqGAtHoVXXJZx7GGnQY8u5J",
  "key23": "3nF9KfW8RTJHs342YaLbme3Voc4U2h9pfk9aPAAeyEuFHVzMeS3HAt8WCcZpeJQXsYVG8pNbrwqQtSG5FbDrE4wS",
  "key24": "37i8XX1AF6ZhjqrZ5SxQoed72UiLf6Fr1RUSRkF5fQqxv3jGrc6QoGRxcVDGNLd8LEyKDP5fZeQeXqmjqLMwBC8a",
  "key25": "5qtrTPEkDtNCN85CHrzFrq3HjGjiqhJjYUmPQ2EmjTpSG6DqqPWX3XXjU1AQ54GeBVWyPVcAJBsK97BLS2xktsCh",
  "key26": "iWuth5tEdgBBQRnL3gQiazuBqYtwUcR8hqEcgy1KVHCHsoBzFqGdGgGBrYxfLvt4jepWWVc2pPF3QrX29RZGxLo",
  "key27": "2kuLp25chNBPr46nWaWthCfKpXBRBZztv9SmjZqhBDaH2EC62raTDc18gNi594E5YewdJWxBT6kQ9GqGJ2PshLBp",
  "key28": "3NxQqYZ39ssaZic8GdpTmeBH2PBYSXAoGF15YN1UW75NoCsbBQ9qp77SjwoAeWdGBsyByd99sihwenrU92C1GJPe",
  "key29": "3EepziHwPtPca7btKk5gHYyjMUJDNpLnAyK4HbZUtgm6ttuTHWxXwPCJw5Zmgd7ehpDxBSZ9X26hbmPnWPWGfEtn",
  "key30": "tLSTMCndmxyNh3jrr8BxSDj3b2Ny98vTQS7Vt3We7BKqokDEEUF6pU4rnEAHtYibaqeJEP2Y7s3emYzFpsbTi46",
  "key31": "3EsKTdW9ttm91pnsFyCUYt1aqPEmUYBLhfhGn1zMGiqr6Evpqq7s8rgeWYxSfq4bkkBM4NWxJRCrxtDkDCGuvMG4",
  "key32": "PHCKDtee8NpSaifdrn29Cs9sZfs1dpHU5ThwGZKadzcuWXKvoKpwPZJXFGCcwinyGHFGq1NKBQTGQYMDNt425W5",
  "key33": "2XWbsMgnzS2DSdkLAb6T5jQ6E3ZT28FJZDV99NyiN3bmqKCU33Ur2kkKeWG6KyHHNWnAAx5dphvzqBmDGdHRhct1",
  "key34": "2xTuxmnEG2ZV4Lh5L1kTjWvNpr7BXXKYvTda9CTbm4Pkqn1TDtW2To4UXXiSDJkv63pqNu6vBVN7H5pHkZ5G5fNg",
  "key35": "tppQbL1ap95Kf3923FwrZTAxwGCeqqk3S4sccECRHGj9vmVFRB6d1FimvL7uZyDx3KKRh7jy9GFoPayup1Pyo33",
  "key36": "5qTVpsa8mGL4PMvgTVRRHrTXJC1jtCFVMbDXCVCwYXfz9wbzpNVGRF1DKSm3hKzVzW3eNF4QbXhB9Gr2cQvaPoHB",
  "key37": "3jqi5Hb478jq5PNFtRLEUoXfTwG4dPXrDr5yVnSCiWgWrxf2gaddU1ZqtFLz5pQupMTuui1WHEzhhRc7yQYRaRYo",
  "key38": "64PEc7uLqzXzRmoqJfqLRaxZRsy8mGQ7cVJckEPvczturAFUiqT5jjBVcRiJHvFm133vZMmeQ3TZDenEn8b1Uki2",
  "key39": "4fPW2Ft2AveEkmUuBjCsjUQYbpGL4UrHgzVYjtcxnM6JXqzMqo8y34MMtwZfsuJ9Ynz6fny677tYCyX8qicqPpqV",
  "key40": "3HS721pqW7SSDC6Gxo6QyaNXaCWu5xzWRdiKXYs9ca6MLrXuGEwpE793a6KCs6k8ShyadYihLEFvFuNEVTPzPtFY",
  "key41": "HaCmEXZT22DcJUqHcSqhqSrLjaSMPue3LGaDNrrL6gpTB6xpWYzMDhKCEMCVdmcw5ppqutRtMvGkJ2ZHEE7aAN7",
  "key42": "4UU9AXTRjaSN2AMwjpLmfzMpkAKEoKKrBbajUqHfoDi2ZnauXd8uTdKgEQMV73n5MYYTCmoCgA8vGJ2TVgeSp9mg"
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
