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
    "2QvLsy85tAkTmjtGivA1hf8DprUMekLAx6wmqSH7gD42Q1zmdh1ZZx7poRVvbMebGt1azf6TctFieRJbcnTjTfo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EDYodoWNomML5ApVNQwhUSuEDNz9U78QEkbsRJ63DfW1RiAneKkx4rJVgCr6xeZ7E8hERK3uDoYbLnh8GNhaPrA",
  "key1": "2zJFzJupDzbX9dUueo5xw98xkLVhCNxZ8X2pBLyzv6UbZxZbyRFvy5vZLcjMZKunHr8tXGY7eS6AukGd1hRtuwDy",
  "key2": "4Q15uqW5GdYSqjkzozzmX7yuhuy1YqxuztXMwUnmdaUFHgbZtvFJVxMT4sQk7DEDE7LWeh5mhNz8kUX8GGCHQgcd",
  "key3": "2yqvfB1yLyGFbzBy2bJJUXAaF5zBUr8nKqwzDeDd5t8NJpK6RM6d9PV8R1hdUHDVFB1xBDv5kf4c6esBHxxnRNA5",
  "key4": "5iAgDyxgoPb4v5MvULJ24LgVSX1SKnjWvSAVTs7RXxNcxDKm2MeG4xymeYfNUGxgcpFXLqQvtwmFEZYc2VNJ4JH1",
  "key5": "4demzPc1sjpPHzsMUGZun1WSXP6gUZ3hufLz9by6L5hAbf6JKX4N9Z8ZfKMn2ujo859dWgfhtYyhvLU1vCbkGEJT",
  "key6": "V3uSQFEQ3saqh7FUXxU7j2eJxzNAvamuTrkWbFE6iVJgoxJDp2LSHyUMMuY8w7pjCddhjhLzLvvUPXD7aThavxq",
  "key7": "45AeAWSMR7TYXHsgS25Akkc54zFgfcWJYeBkWsNoQLptTTMDnuUP7W7TVfu2Xiz6xATqHQMfEBisVTXErdNBAfU5",
  "key8": "HW61x51pAv9nQ8Bs4ZQmmT1ddCiGKPMQTEeWL58rtZPP67NcK5t1jarTbcBFCvwVCdy5TGnmjEVGiomgBfoSQZY",
  "key9": "2wZqmTz1hURBxjeTpggA8ue8Js2G223Smb9iGt68sMZMYTS1JFZoonC5x8LntkJ11VPk42QZgYPbxiT2iBWdkhq6",
  "key10": "2VBS72kC9KUXmRFd4chUWYsBYDa4PFPLwjkL2xeqWPy3GGvLwFppT6SN5upYWcR5gaXfTkbxXLUG55u1jS15YGXq",
  "key11": "5g8vLvb1dYcWGGLQoZ8QAZ1qhu9NQ2AS6sd34UCDcj2XKpXQvZ5F8up1zdhNjaJcnn6cyXA5iXGnUndpGw7ppNUK",
  "key12": "28Qi6o2sGhGNdiebrDzVKdLtAhpxQs1uzABYqgvvWCnwiZeEyCg816jPCEGiUphoe8k2AAwsrER1mPdEw6D6Yr9M",
  "key13": "62u7vERXZ7CGgL5mdqCP4Pqmy7Xxdfiv8WwdnykxpoRtG95VKk59XfNk2jdHzQWuQavicjC5Ds6u3dSEv6tnwpr4",
  "key14": "QLQZaK5Lcqhb2QrW2XcKzRR334SCHLiAZX2MEoV9Dfoh2Zo17dJtetkKyxdvy8PgNohmJG3TfdiWzRfsx7SBnQp",
  "key15": "62uiymVvQx1BzHAbfhVfscArGC29tUVXsxKyeBn9WuethwBdhBFBHzM9UuzkWAfA17NYYCDJ6QR4YBajb8awZVZz",
  "key16": "bTsrWxtxQdhqRgjz2mNdRuBCmcdtAALePZNzizctGA4dKnxkavRLYXpGfSK78xpjXdwfU4GRUCVbZE8jnBqFZSX",
  "key17": "6UgJJkpUWh8trFquKDwPTbum8yGGyYqPbRA8zrnEMhRHR7nCyZj8mmH75vxFbAFLdRaXsKnQPPrvJMYQszZTHtD",
  "key18": "Y9F5C64E4bywTLF8cJc4X5rn8w1pFVVHUiZxgWbht3Q53cwhFCFVbrEnAVAJ1Rfux78NXJoESaGUzufGXXBaaqf",
  "key19": "5UUfqKqBejs7QSr2xs5roH7f1nsGR5TcfZuJgEr1CxoSxKhJoDSCKQ5jLGP9RKQs45WZ8PV7KKW9ZRuLTMq824UZ",
  "key20": "529MraD5LgueQ1v8ZbVHbRT9pjTvA9gccDbBiwU4YSydija3BiJtVsnSNh8DCnd7yeGAZjacMgV69Xhi5TbsHx23",
  "key21": "5kranv9APWNu2dVgNQqTUWGrvZaZanmaJSZhWx6gDhQXcN5tBdn8HuaQ7Gw963WFxDBBCx2bPm2vBK1YMgb4482m",
  "key22": "2m1PEXdyHhQFFfLTDY2Dh2sbQysMMfUNPR2tESu6MgWu26VvaG1mGfnJTCDV8qB1TKk8fKjsJy4WMyekWcKmctgQ",
  "key23": "4uTnwywJ4KNzGWr46a2GNWZwCeDUXjFYXSoS5W9q6WQuuTkebdkeMyKrRZ5ztoNfo7J26VFQntNrAe3bhrFVAjXR",
  "key24": "5aG5ygfX6y5GHincEd4xpAKLpy9EbKpQjcpV7YRgc89cWFxCzJa5CRNP4G4PoCRB9VfNKm93ASpuCCD51LA3gdrz",
  "key25": "3q4RXg2UvUnyqFanRM6gMGFVVABdKqFBNH79GCEaS4oRkeynw7jptdzsRpt7yb2yETB3fXLK4i9c3wb1FK71N5VA",
  "key26": "5ueGGmgS4Es1MviLE34JF7hRuVG3KJCjz8HcxtQTkcXB8B82Zp45tP72f5DFfTkpyTtpwCF86uZGFwaegnVQ1xJj",
  "key27": "5EWAqCSB78pbjLmCk2SMNk7F2inE3TK6vSWrLtqp92MfP7Jz9mC2uuV3o2k8SpCR64CjKm5q4uvEKX5d6jaLQMBH",
  "key28": "66jcC6nDVhK4HVSmtce1cJhsS134LaE4x1V2jdvmtknoskZXGv4tyrVsWBpWR9DCbGYnMW4b9KiSyAHr24jb9wgN",
  "key29": "46BKw7TBMeUEGpZGgdM4gmWum94c9TdeKaePARF7WarrMX4jANzpkmfPwTz7YH15SEDHrKBXmJrw7Qei86NsZivo",
  "key30": "3ooxXWuGuFyZ5cvikToqx7Z4vPtwFC1a9KAn8LLj7tXary8dT6f8ffnGzBX67ASW2VwfnS5fHtcYuCM8cA5Kg8hU",
  "key31": "5R6R1iEUqwJ7MzTYv6eTz8hJvwhASv54thfLsaMshMUEyd7xbLgc51JsgtUkAQDRzcN3A1fhSoTLFR4bWBpX8vNN",
  "key32": "3ARgGyweUo4eGHeX1X4dM7Fq53oWyRtTvzr34QAgzTV6SMTG5df19Nx5KtxP8XYQddE6PLeREnCxg3LF5KUrMArq",
  "key33": "3b6vd3NoRg1roatMPCVegGFovcuKGdLdtHQ66HSrC8ZbyAXX5rSD84x4hffKxB9Mw2na3PfgmzKPnn5W6L2ccMot",
  "key34": "4vEKssR1taiWU8fE3ze18BVNNKDhkvUPDCWbLP8KTe8fqPFMsaSLq42LDFMaDdFUR25i77QoRmQ56wENEC9Lx8Vb",
  "key35": "3jY2jniGR2JXA54AF7enPSJStcefLAhQcgMnTPQRfd7ezvvfqBN213BXfGagSjUVXEj55Lvz2UVgNR2xKBnCxxSh"
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
