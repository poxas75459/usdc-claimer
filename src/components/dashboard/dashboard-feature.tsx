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
    "MtqYZCD27N6jfjMxt1sqnXry1J2FANAVxUxjk5DHQiJXAVR32L5uvDasZbeadmzBXVZkynDaE55ngbg8wNi2cMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C4HWDE1ArkMVvWFH6uZ2vrCvg7t3AqW5NnDprBDzvgs1WAtQLaXD1Lm3j7eXauL7Z9CQbDotSW3UVGXL1nDHU7D",
  "key1": "5GhhZ6o1njabbi6jRHTMLa7tbdYhePqLzkvGbPWFVYop6NCFnvMHvvedDwSE1QbLh4Msc24JJBJEZGoLu29f8F21",
  "key2": "5g1RFhdVAAGbeUGeh2qBgcfNquGyLJZDScFcUimEpnzsLDCGhv4bGRBdZU6bZJKCZ7AoqfoY4USwtmx6hwUW3hBi",
  "key3": "3xS8hbeDnneH4Tt3vkbimYjmK8HNvBuLmwRVLe8wopq6Vnn2aknH2zFyeaonLytYkBUqBLXS6MEbg7SsyfGfeXMj",
  "key4": "qebvpmd2P8SsHN3GmhbyVP3F4LBLYZwY2XA38SLXCk8nv8WFucDnxxPTBNaR4eLS8UeSvzXH4ha3AtakVhZbsw6",
  "key5": "55QFDn4Uq7hPdt9e6SUgBr2WWVF5gBp25VbyK7CeofhXzEALPoJBrYu5oaEqMrzohZiaN7p6fqFwjSRqwFA7heC7",
  "key6": "5f3ncB41Ko5ZDgx3exr7LExR33Pfj1DER7QaJheacFf588iGeJAhz3VqrPeNXShRMbYkdNQd26Ac4xPhcLRr2QSz",
  "key7": "7z6bxHKBGx6zLErF7paC4LWpwwJr8bJe5xzMmWkaXmSxJFqTJ2fSDAc1pX1JsMZAdooZuGvHdDM1Kh5PpsHDTn1",
  "key8": "5437ns66JVpVoRB9JQFhFbmvDKtGZZZc6ELGTNgB8nAgauMSKbAxDLEWTjny7mMc7mhzAnYBy2LKn3QLhh22sQ1t",
  "key9": "5c9T7wAYWk2dyoTg8emEvrQ919XNm6Q85cmf8JWiLTs9axY8gRcKRLWLeH4sF7N3n6hbnM38a6dbJc9MVRazpRi5",
  "key10": "4rxsd7P22webWDhjmfyE6hnhAfNvTirBaqtpQAU5Qq4W11sT9GidMqaQ1Nfm4LS3jgadfryLW96wxgPGN8orjQYh",
  "key11": "3rDGFAZFQCNj2YDMMnHyp3HnLnnPBDpuk1uCyMsfDax7Ww5PPYjZKtKpMcrY9xLvrNcjeCuG9649f1aB1sBg6Rdi",
  "key12": "5u7TeD5Ki5dRdff9w35v767s5NKtTYesd16Qx2jn615cmacsCYczWhw1KAGpLcHTdYPf7uuAnukkpCuCepABrFRR",
  "key13": "4FoAajFvPAGiHL4emZc97erGHP5xEv1QrUHnMocd9VJmeCH8Wy7qKSMD7XRmnUHSwfgYFmRQW47mkojdzQaQhGUc",
  "key14": "3ySDaGmRuRnUGB5Sq53HE5iFEfNtcwDe8znDpjuiHge91tXGF8T3CR9Du5B4NwL2FwYDyKD6bx5Jhe7pEVUyoMAw",
  "key15": "4ZXD9Rn4axj7BxRAUcqPdiCqAD9nLYYSS2PtmbRmot1dbj9c4kfsHNzpeGo7Euw2KQj6bsV2hLxcHqrK9njoR6Ct",
  "key16": "JUDuhHJ8KvzSBeheq1sJppQtF3eRUYE9NqUMEqZN8qnb2Vf2iKzq7dfd8cPyFYoxid2b7c7DiTWSWoLSG5BYcKk",
  "key17": "34erjUvfgrdgVu7Az8vW4afW2dkH8oWPWyX44fgTDFhCoW6ZV1TxRom97qTbxyZLjUCh67qYmSMUbJ866UfUvVME",
  "key18": "5ZEMRh4oLkkoyf7mw6F7BFFWmndywtiZwTBhS1GRf8P6gvWvHrAmmrBgTbLUAP7f3AWMPbRWbQrWnT3RmmyNwBY7",
  "key19": "5FwV8Wg3AEYHCSf6F1TZDrZD1U46n6Vo3KHgT3GkbUPgFSMvGTRZfX4oYua94Gs86EeceoTjr5HLTZYCCGySeZZ",
  "key20": "2SQ5G2533P2B768BCEoQgWxeRqXBkYarS2wwPPG2ohSSoNKc53NpTtKYD2eDX1ig9jm92gCBLSr7oMKb9WZahZVj",
  "key21": "2LMgfwG6F9xmDudG2tQD6q4f3e2e9w4wtPvnCzU1mDQu5tgHen9vhXCmSqDrVWRCsNwDaBEeLJ6mH4GnEPiApMmL",
  "key22": "2B43xjMvb8raTrVJ3Gmoq3QJM7zoXft2752Zeo5qjk1qD1jtjjcinQpY7NAmwqrgoXQZU5WQWBikZC5wFGQHrPig",
  "key23": "56shJNjYzjVyAhUHtU8DCojtt15zbsg2yEgVqXLRWkKXTDuZfUYLqcRejwH5U8sfdfkmq2rgPwVHsESZauodmvwE",
  "key24": "4WND62geTHJcKuHdP6NwQWRK9cRFvcatYVo4N8PBhY3CFCngEUFQxZGiF8i2sdHE4vyhW26onFDBCXX1mKBRWP7M",
  "key25": "3oDQ8HqpergnmZc5vqw2qmSob3K3U6QYEUY83ZJsxkB7en6HPiB97dLkU8UUDipEpYrT69JYm4XxKdUwiKeuLGSp",
  "key26": "2cNhp9bkiT6tGRwnodrh41fAgj4Y7JD2PZYW3Nr9UQtamH8BybUC5sFdJSDZbUCtW3DygdY8Fzy1sQ6ZxbtvqMdi",
  "key27": "2SroqX74yAvNJM1gZJVUQ4j1CvLjvGt4Z1YTK1E775hsz2a8uGsjauvJGBFSPtkXcWAmESWQzTmuDPywTYwj25L4",
  "key28": "52Cv7bXWGi8pRtaDohdwj5b6HPF56Qgddjfu59D9KMRUw3MUc3h5g3P9cXYc7aiaFBWh6XxPxVDG1qC55tbmkYZq",
  "key29": "2N3DMnf7xuM2ncNgGtmnVE67YqDxRmPrzrA9k4n7BjR83vfEF3RDTWoDecTWBC7MZ9YiBmcj5Dghm4SpBw1d79VB",
  "key30": "3Y6GybqiVSP4bTRFiTdhKaiSmm3T74E8YxTV95w34zDNNNiEHasgpx71T45dB9a7Tbqhe4Y47VHuJXt68sSMtzdq",
  "key31": "BKNhfQwv5KpMs9ZAbwTy1RqGaRK2e9NcvJRKaAfaYB3uz8usUR4ihLJuD2XyhgfKvR4FSdwkZAF4W5uL9w1Ayb3",
  "key32": "3CfsYf794GEkCwb8CjDwd8RhMZKcbamSivbJ23aP257Hz33M65jgdiNp7SaSsNSNrC2jdSSF21mFtPNGwoyyRfdB"
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
