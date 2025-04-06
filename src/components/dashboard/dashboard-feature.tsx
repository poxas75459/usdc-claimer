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
    "3wzqjP7WCaCsFFucDhx6vi3Ep6vYS9okaQcAXzX5XKFLbkhQfAEig12ZHj23KwogE91fkzp1iJmkW18abRQALs8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mNGQais4vrFYunBXSuoQExLfQp1rz9iRt8KN9kAYXLXP3GuoFEwk9xTB9YP2Wx9efyHngSiNpv7wcjichnWb2ka",
  "key1": "4YB7XNhB3VXWLY34gmQcd2AMsYoBHhggSSAMe49MaGo7jAFoS3UaBTpT6HNPxPj8mJHXoo7kb5jvuhPEipzuLypo",
  "key2": "2SZVPgDSWxnmnGzVSQYisEvyqcCoEdDgwfK3TnM28GBma4sxFd5rgxjpTMDxAnLPqDUdYRbxkRBtLGz2Ae2jWsVn",
  "key3": "4rxH8zkBsSWd7owYkvbeZfGAUcyoFugEfq3gs43bcyGECAywMwZuteMGTRV7Kq2aQyyscYvs2BM67RhXQLa7ATtJ",
  "key4": "5BdLEsYvFipyEVWVrAaetaNNCEJnq2BjLrZ4fVV2RNbVyEeAJRRo94hL7Lj269XhwJR47UcpRzcbYzbsCxawtf7b",
  "key5": "5V8hVJjCVhWxVw6qxK7q5VJfiw878Xwzb8nC4sSB9jieTyvkbkAxzdVzSRCEPNrtj1YQWDcBCADTXRSHx4fETq3c",
  "key6": "2Wi3oeE4vxHjPQ2z4jdNiMQKhr2puatDHJt2R88TMiQ828LSq7KG3gpV39iqrPdhTFeMstv3k4xAmtpqPTHUMXiu",
  "key7": "4dpAubctGPncFMzmsh6wo5LQ1phpEqJ84cwiPuax92gtjET5EK25YGFaLEfaVUh91QF6GeGy8WCNfMgn7N1ZGQ5K",
  "key8": "5QXt1KqkzFsFgHMPpJpPizp5SNGSzYgEtq56HxMtTNKTTvMgmtqXG8gBfX8o4Ppjh8uNUaeJ7nvhF9UksvYQw9iT",
  "key9": "4i3mqL6X9qCdBfPxQQ2zvbWRxQPMHBPwUxxa4TSY3MKKgKLzxfgC5o53McNEYcX4rBp2yXXXyCJkAjUs1awfRunq",
  "key10": "5yC4Qo1huG2v2QqPiSyQGUQDxUtsAo5qYYcJhaHwy6vEj3szKLP8jeFb8DD2exMVXWxRCw78ZC6fZKWbPL8kcMQV",
  "key11": "7YQ6JzSAXAMvtWXWtcb2KGc95QVe3Ja9hxwMoMQrctL3S8rSXVArt77mzMKswavE8eRFumK3QXDcP7Seiit9MMy",
  "key12": "wjGbqSSNrGYkbJCL6beyxdGvmQdh6u2E4sgxM881kUr8UT33xEUFYrkgzYGht7cGgJYuBo9mYNatWTBvZWdhNK8",
  "key13": "GKFbFvwA1kzabnXkoWXNUv9gkmFsfv7DnjUGRrJykbv4JeVF2E2pMN8YKtn7rDRKy8vQFcxrJaqov5QG3V2tpsq",
  "key14": "e1oXxGMZiJjJnD4BMpNeysUa52piWsMfMGVLbjs8iYfDAthY7EvAQxqh71z8MamPvK8NUfYzzPaSShHpkpUUhms",
  "key15": "2ptfKhzBHzQbThqsmN24ifsKxNM7NFAjj9FTPCeVZVSnNhp7kofLfNKMmdmN5Lhjw6YC6cp5WDDoL1uDprKhcdqw",
  "key16": "XjNdH1mMSyiV1x1eAV717UhQqssbtyURv2t8frXiVLqRRV23qVVNKZd5JsS4E9kBmHsKqW1RBn5R1fLPGouZgRZ",
  "key17": "4h8VSYaxiL31FkyCv49uv3PpTucgZ6Fq7B4rb6C6qCSJM72XRmnMAmT5qoci8MXsLGdNDz2XJJTbDYrjStd9GU2D",
  "key18": "2TjFZHRhTyeCfwJBfQastKQTH1DJ7N7JCoF5GHv7V9Ge7DtrjFTmtM2qpkhb39v4znLHMoD6VNP75GYibsxDoHSr",
  "key19": "3xRBQL1RMbnqZdxCPP35RvutJYwztP38NLaZCNMD2Uow74c6wy1trW4bssH44Ebb7SNtBa9jwgNtvnYZRvJzcNDG",
  "key20": "TxFG5kC5Kz7Sx3giSYghxxHsWoZMoEG4cDZBNtyBW3JG6RitTSj1rDodeWsAPsNFGXPue98sjVhc9k14zeFg54Z",
  "key21": "3nMM1asx1iUhumZ2T2BJjzJAWxBgTQrDo7rUGUW1cj7qr8N22tVbJNii4eW6vyzXvr7temWKLG62ApAJUCGgyhyw",
  "key22": "5PMJkDqtGFySuKA5iiVafuRn8kJGC1HHuiAVobbcZq7TY96KBX1BawrqgJy3xpmkkX6TQ39ZXPCDPsfN8L9h83JT",
  "key23": "4xN3L4EabVTEHUxSFQch2rEfMXjMaP5NRkgTPPyA7kqBtGHvwb3Qo5CgjxaGb9CmvZXzNHWL26a4Hkimiv1rGz4Z",
  "key24": "22kpsxPZxoELg9SmW779CZcsU2keqXGXK6P826ejsJi8awArxD2JEsfwk5updHggiN4KWQJ2aCwAynQ2Tre7Gz5S",
  "key25": "5xnScieoGrPscF9tsMc6GVVZF9snGkw1Fgcdx64x7WPSe6ikfw3DwkEZSsA4GBQHS6G5jZJrk7HXohRNNeUxMJRF",
  "key26": "4kq7SxneBcY95ytNzb9UiAntW4X4HWReS5GgKCwFMcWsifsSNGoKYD6rgerjbmmK21F6HNdgaLX6W9FS5ZGVX3mp",
  "key27": "5xwUHpTe8h4TxmQanznhZwL34GF1WmNXPJhpww1ahmcMVHAnkMpLKBHTgSiajsjFwGRcCSzVrjHeNeM8iVK4ZvA4",
  "key28": "34d3bZAq1zPAhk8tkzEUQ3Ghp2gR4EhQKEY3WxoHtL7EGm8hcVBSbhyiJDtnbiaMz6SanDG3QHajWGzrgEEFhxeW"
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
