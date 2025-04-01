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
    "5KRwXPQ3NCkHrP9JmnFzgMBxAt6pppFoefY5mELQqFEBL75L9mjXSijag3gQE5KJhiVXX5W8wkEakB1bCCPrbQ1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SR72goZQBfvLEsAeovBWGdspVWS4ttBhUXCBDxFxPhB45S2WVp14GNKKAKdd6PP8fJ8jgJtYDixaVocCLC9bSKd",
  "key1": "2S2kov34yvg6kDPNMPXgdfw7hdSKjE3Z7opNrqYhtc1hE9vWJR9JRgwYdN3BgTPEWA2krbXk7ZLf2G22hu3rqkzu",
  "key2": "MNJkyvYtFTYcdCrcKdjSrLt6bhovqWpbr3SngY15Y4AMeMM6Pcs5dZxKk2BfwmbEvh1T1Sj3SEuiuXaEAHaRD2w",
  "key3": "52LFTAXAV4yRvbLcDHmv4PELquj9ETJRz47ZvQZhjCd2EbjwgSVfgmUq2oHHJUGFAeLwpqov7m8cZpzMimwPfXKH",
  "key4": "3z51zimPbtggChAiKxmUL8GdhG5oyy8pVdPg5nDoS1qgird6ANHy9X69ujjyZ3c3yGh48G8RsvS9jeF3u66qS4bY",
  "key5": "5JDFxq6iBKSNcAA3JiVQpt7cWWNhzdYoptGuCcreZzPTrgnoWNh1A9BahSv92tKiv7K9Ryf8euaF8aysAfF4AaEa",
  "key6": "36Gp5xKaagzaAR34LXFkvxCZ18vE9Na5yem1M6TQqtUbkFJzRRrWKF4G5QpDE2xC9QqeDrDnJ7u5ZMEDgsUQmaDW",
  "key7": "2m5JQSXxYWHL2wBmj3LY9uVVnnG1gNNyrjGyv4gu77P7VrBbrYdpMdCF4ZszwoGKG5daZp9gSTJUszL895CRJMs6",
  "key8": "25j3vDoQYSBkuPXAmJoU42Y4CKBj6pY38wC26NFPaafdoLX4A6JRoKHDrG4YFKNRWTpiB9NTa6KJP2KaQN3GJ49k",
  "key9": "3wCMZRBKgoVTXLqbJjeikaqYVyemqRALarqoDurkaGhfxh3zmdDWFwqNqMnzvTsczdZXkEDnMww6gXb9RW3PbaB8",
  "key10": "5kRMgK7v7N3wLudVHWPy4vGuHEVsAfUz5ddUh8T1N7zygoP7BxGAVJjLbaiunJapD9KV2p4QcmqXeQ4bgD3PCes3",
  "key11": "5MaXAELQGiVy2QZn8HE8iXswVxNPn8jLLV4TV1DvwFQYKniWedpGwPvQ2q15ed5gpe6SNe9LSPS4sVTKVer8HN6W",
  "key12": "3vumQ4JBt45pr6nDH3HdGobNR2VNdP9xPgYTAZ9kQDgC1NQrDf1BRdoBaDmLEjSXGHQNEQ9Xh3aSXYoT1rNB6Yfp",
  "key13": "259tUV5VG2NHmjaF4Hz3gs1B192YXkcHTgtPrZaimR4kbfN5RFC6APAJNH7sey8Wi99UywgkcJA1saAfvcQ9iLLs",
  "key14": "3yf8yGwd3D729qjg3V89LrtAR884oCnRxZYvPMLgsZvFEuPuCeggHi41ZYMT3NDVcsUhe44U6UCtX84cXeJLChnT",
  "key15": "4tknoT5ABwrMcKDLT4N7baeCYVCQ7k5ZENTxwkh29wNfDkePXApKyit9GKKjGRPv3oKtS5usDGgimxgBkX26snG9",
  "key16": "4LJ7QriT8J2sZKWM77TMzywMimJt3sasiGYpz45WATRwm3wJg2pwTwp5nmgeYjibq4H24ZzVyw6qTT6YLNjBWRuv",
  "key17": "V1Y7HHkVi6wrbYU365a3a7jaQbDKXNjoysAEkRfRkFKhcXXT1AQVh4JLsLo5Phb2SQyksr7jiS9ZFAvoKVcuFEY",
  "key18": "zxGXFp5Wqqh3nz8SbGGeJRL4tz2V74YjohZtMxyWe1ppMpH5NKe5KjhLk8LstH7xdR7TNcZnngFrmfyMLFRzxV5",
  "key19": "21uzzCDyTv8aWG4WmMAsfkNUhEKc6eLyGCM1fwCGeeHG2Hovo7k9xETDBmSECdeUkX5SyoAvDzZbvFhro4oF3tLS",
  "key20": "2XZhNtyjwjB7MJtTBw8HF6LcbZW1E7xutYFcd2hEwEd4LBkfFTTVzHq3bhfoVKZnoPm2Wwxa5tFuXDn8upqEhHWg",
  "key21": "3Uxt8wyaDPTWQd2VVEoFiJ6GUDaTrduk8HjKTko4QhuCnKs4D467gLy42LfF5tZRF246m8m5AbZdomUZc9oT84ry",
  "key22": "21Vjm5TZo9cFqqoZBgQ2VKTu57ZDXCLA1FcrV4YYLCUz1gWVewSyCukUZwnUPCc6eVYunYBHMbRD5N4uSNbLuzYA",
  "key23": "U8p7JCJBz7vVzAD5hGY8cDCjnyE2Lpnpq4gLRPJYk4cjDLXESWduxp9BEtyXae6k88Uq1vU5wMaMwUru5DzTkwB",
  "key24": "4zXTqkesnm2LwtSpVJDzu48AhHE47k4WSBkQ3zM1EaCBtCYXpT4f48sj8ejs8NdiNDKjTcd7N5uWFRE8zg5icRvy",
  "key25": "51cwUHPaZWmLzXi2hZm2Tv6WTVoNPpRbF2kaKk5zo7tZscfbtsKeMJoVn4qesCcgh62JhQ4HHU2C2xcKzt1bHzq3",
  "key26": "4HY1zkwEPRThSp7c3Pjb2YdBA1VynFfNQU5KfeK3KbAHmtcbnVuw1DxCHTqbwZsUw8YjqB8uMFviuKcXwBp1mUEW",
  "key27": "44wS5GZdf5Tg2h444eNXJ6s9tiUC2SKidXh61DanhntLAcP3yP3WA5Psvd4iLgq4CP7FnppoQj1krSaEKu3y1ZHv",
  "key28": "4xakfaAqdKAwJpWMofT2NMC7aJXXNPKueBN3CaYuTxQ3mVZjZCSYszmEgzwLk6WUs4JMnz3hQ3wqfkA9jiiJHihf",
  "key29": "2L8fkJYEThzx8ovXXo6boZnpsnEPdAp8AXLGzsTygTh7gdcYUsBGmqGS4ESuhwyySiE5aqdqkSaxNorAFjpMoMwi",
  "key30": "5ukwP97mKnB1x5XvWcTWB37MwupYjDx5SZoQV5zMppqyDAXQjmLQnp9P7q6SG8UhQvbgkGLhjdCgawpVXpC2Q8Gb",
  "key31": "4tYE7nAfnyVJWZPWEEhTSy7KRKJpMaALBpGEqA8HtmFE5xJCy5wEabGA9H5R6h4QqajDLymUTms25ZykNT8rZta9",
  "key32": "58ucqugCdsfSxiZLSQe8jdai1ixSWsT4mP3iK61QWh67Q1fSEQu5NcU62jGjHrgss2SqEua4V6dhQFfhpRkcfTjC",
  "key33": "4GSZ5zxnHduK8sekXAa9JGvziUrFqLVMzZ4GSAaLzksF7UnSXXpigJTMu6GcBceLeN1V8FM3cpRA3QvnndjnhXLE",
  "key34": "5Z3ueU2zGybDEAmL3Dx5UJFPT3rfQyCCd2MYfapqB3ruX7mPVM3UWZm9JeLDiFu2ccf1x2AU1VkzPPtF5ptHccwg",
  "key35": "4WwkfTv9X6anP1aa4vpdkRCWR1Lg9mJ3A73xAZgetWgGY9wwBJaQTgNLRguaWFXD49YNQsieqJewkBcCsDbWW2bP",
  "key36": "2Vt3DKjoBnUQsKkqR3u5GkqPZJ9psxbSAPrJTvAP3hHW18423e65XgencWNp1VPG261KczCGNAUNtHeKqLyfJz5d",
  "key37": "2ce4THHsG9m5pHrAbJRu4cDnMVRiGW6Kc78iJB5baaJHtXhZqcyt2obT47S4mRhEwEF73cn7VNhqjMPbgDj9mgvh",
  "key38": "32shPZeFntZxqAgab8kUSiJJY1etm1U8MzyDuyGWDg2Nih12zLukn3wf7bg5a8E8z69GFLRYcZmLHYahPuwy6h4p",
  "key39": "3g75LRz7N27Z3pEoQg1dhqUfANNLoYiHwxHUBXkUNWPiXTdYfKLLojNUzSTNpJPEXqkwiBhGoxrdjcChAabJrHuY",
  "key40": "2Ld5s8P1A2ehoWxRNt5Rq8h7JZnPHqZGMw1mBgMZdV8EZJSijATjNCD8dBaa3DcqtUzhM7KicBcpgicpG7pjnp53",
  "key41": "4iD8ytJo5vT8A7DpvmtdgUEqCh35BNEudrUc48QEAq8UpzC57kLfVks3hy8ABwKGyx2ZzcU7QYXqL2F5uZgL7anr",
  "key42": "YMEe4mGBEcx8f3BQgd1uWXfwNSLGFPB9p9sqGQT529TsBGzYSJBs1a2D9n4Gwq58ba4b5kcbbUmqKv9tfzQyiuF"
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
