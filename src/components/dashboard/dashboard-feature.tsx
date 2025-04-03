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
    "4oABN1GDDogRxoFpNDGR4GZs4QS9WikRX5gPsyr87HGcoijFVA58LzicfH2z2jusUYTBouWbpbpaEwxHySo3mnkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oiCkD1aB5SW7JRJprN8E2zVHcLSaAdJJJZoNKUGS2DVTjyoqt4PKo7eNRD1puEXwhPjytNxVbAXHXc2rJqWUtZ5",
  "key1": "66cMU8fJgJVeYMiDcDuXWnRBq62acZK6arL2ghQ8xTEnS5mMTB9Ssa4uvpvK3EsVjEkjkLwufHCpcXNGvq1JXQn8",
  "key2": "5GPB7aZSc27hf5uZg7mS2qR751xhd8tkVnsTi2qRCkiaqkJTVeF2MNNHsbB7dky8WucxHdzh3SvR6tTHDNTNo9jo",
  "key3": "2rcYcAUtCLjCfP951exwJKDx6o18VuWvHu4j8ibD6yiydSBUkyiCLeWgkxzmZbjiHd4UccYBEqX6BifWocDYnMDC",
  "key4": "2EYmAsHhTJe2fAfZKrsgigXL7juRUTNSA4MCXhQnDDsn7S93DjEaAc4osrL8Ssy1fiPWwE6LqKqi7fcpsPxcQSSb",
  "key5": "3cyECuUzFQKg6hDX3RjZswgLjJZckkoZpENCraCf5SFUQPANzHRf1sZeB7tJ5829JKwGohrbMtzbcBntRMG8HcJN",
  "key6": "5W3cBQBSL2YkeYJdCH8tS6Z1pcRi3J4CYQa3pBbZWTaSZqXxBqv4kHB2FF4niL7w6XkzVbYxcX4mu64VpRN3o8Bj",
  "key7": "26z22par5r4KmxzNEkhjUA3iAPcU5At9CChA7JLWLyyNmYwSpbhUUh8UEPtnfdqnsTf3WJyVv6JSdp2Lxq1kHsjK",
  "key8": "RsxUfAYvXzHNQiVJZ6hBNLFvwWP3CmNTz1wn4KSNH1Xet1NX49apMqKiU4WRK7joYeawF4a2ZnGucfBRENTbgBM",
  "key9": "U1pjHVfNr1isXrcG2voi48zxvmq4iFdD9VZ7NLsmst2DhG7uMvZswbKV49XXW6oJaxygvW4H8RR6Pu2W8SY2ED8",
  "key10": "2vu763i4QNFKzy5EDbXZDaq4jd7iis79y1ohxpsHLf311pYjUrDQo6KAX22JcPFocPk3jDHBbb8pFpsLgHHDcXNw",
  "key11": "44b5r2TY47KEw2WT4T1p6Uj25GqjrYDshGTj4QoVZYQ5B3Ba5q9vs7jLqdBveWK46FVahaVTTE6TwejXe21xqvGK",
  "key12": "3oWs8tdfbvMNLyexh98rvFMnsYSyoPJPonuSTEf2CH1CdKENKw3a1Go6tD7bUekVx9x1jfbKfuyvmfA2FCXBvba9",
  "key13": "2RL7xh8RaaDJXejVXK9XkeEeMU4E5g7YnRr6mc528sdf2smuQnV31HXjdrCQdtc16FWjSk5h2gQFqS6dAEMab54V",
  "key14": "3HSv46cxEYZNt1ezACZYkPHbretixxd1c1Ue1ebiKeJSWGJwnwJnkmAX9zt2qkksZqFxYyJuGzYu83xs8KWGT4KD",
  "key15": "3aeJGmxK9kuoyjv3Yxjd4Ep7rnH7bycsihxRW1mkTUm5YduNEq6rHb6xYRbxwWu5rz7fHYVFz4T2ZxbfxAe654bU",
  "key16": "4FZ7ZNUDV15wTtcfLcYRXLvbEk8JLAsF3ZaFthBekSS2ktvBtGgxW1tWycw4ohX3ZDzVUtBditMSowUYNYjdF65R",
  "key17": "2xtb7jHEDby6VCZSaoeUoCWYdVECjEXs4a636Y49UrVGMEe4nPtnTf3DEuiDbshQkCHPquV56vpumyy9Cq7N9k45",
  "key18": "CA64GMFvugxn1DZSieaqkqhyhVkLBZWrrMZLFNmn2zd8qFQwt5kmXa7UEPjgewQs5UAZ9T5jFGWLq1bmHZqD5aj",
  "key19": "3TNV69Nj3XzZD5jeairN4tsQwaP31yiwo9Sm6XDWo4yEDNSbX2S1y2hjkAkYWq1JHeUk573mo6nLECs7Y69RW1eB",
  "key20": "CkWkJXTobXF7567LfNUYqsok2xSiBt79xDfFJHykRpbzoBNWscnKAfe1YMPiWNr45HbWV2LMGNZC2Ae48uUTwE3",
  "key21": "3uLMQVYDMHfLiz6idGMfanbvLwYcpvrZqJAdwjQeuH2pTaQTHGZRJMYwuxeCH6Zt7WewJmW3MEHGB1j6smMPo2ND",
  "key22": "aDDF79t3tHXNDi17FB4DRvdnBR6vksEARVsz1MPtVXJ4jG9oBrLKjXPN2RV14KxZhRpvwjYzJDJV2P7PrTqjcLn",
  "key23": "4QfgwjgY8n7BHfbE6kuUN3ESSaxTtGQhWrJwfnoLEcjJiu5cKZn8uDw96BQFGjoFQ6ivjngM4MaiuoQb5mvRwiPc",
  "key24": "2fdvEBfnigSBfHJ2sQLVfFSseBukxXqJPNHv1VQB5QKBL9fbBSaAP8qe8SrsUmim1cBPxEZS5hbzW6GdaRyjhwcz",
  "key25": "5kqG1b92DUnXSTkgwSkcHJnffdJLmRCxoXkDMs7Pt4xJJuU9kMUxdaX2aDJcoh6Bu6yF5GwfSh9RSy4wrvRfaJZf",
  "key26": "49R4aVLjcePwVK3eE14YMtqZuCLoUbxdrv2cQN2mWiHuBWdXEdeQGdJUfyk4dxNxE9HHXJntaxfS42C6hJ2gX3nW",
  "key27": "5zeXGv1zarvqUNc4CQbwjhhcQSv1Dpj6yWSx17jJZja7LigLcP4o6fEJpdhYUuZLMo8DN5me6gz2JTZGCBadRbSK",
  "key28": "4ShCb8ktyQFfTEyyfBZRnTVPwpdArFXrMTDQRpGi2TqXebGK41mnKy1YKMxt8EK31k1TJpE36NJMgkZ34swjbBEK",
  "key29": "58NPHoA5fg7J3GvBFZEE6MbDsrgxGs8ZZ5q9cXGB5ieEhJ6bufjc6KibRRKsLFAxygUkacHJPA72cGjPXY7Z692o",
  "key30": "5XzFHUnwDjjUnQfHS2pGF3htYCA1odgE8gaHWwvVN66QLvUraRmCdCAbBY5ngVRwVTU6vTBg3L35hyhKRtUnKrsN",
  "key31": "2Tsw3cKGc3iULeR6gwXRn22kc9Cn4Y8DXwCq6s2T4vQAshp69qWYpPMSEyLtLPWcTz8VPb2xRR16FGxKZn6X9VpF",
  "key32": "rVMScX4NuiYcbqCR2cnSTJubfFx5E7teCznqDsRa4jGGNTJhab81b2yPMYBJ9rpoxhRge5TQhypA6GNtNiZ18ss",
  "key33": "648j8LFNvfHTXVTwkrPm8ske3LH5ZXwLRsHSnRDh8fPhrdHJFB18oyJw9UukTHLiuTAmVaPb3AvFiwztfgyBqp1E",
  "key34": "3LYiirby23JZasHFBt5ZPmwaaeB8Mzeb4cVPmiRXRjsjPF1wx3s7GxfQCEgwLPxeXdQLabxHQpEch3feViFce5df",
  "key35": "ykcf3uPmdGwdTVTSYrfzEscicQuhwonhbZDbCamfTBhdMT2iKK5HUKgd6SW2Kf7rhhYwv2Yd1SPZ3USViRR26pi",
  "key36": "4xnXRvEYM8vUwcgmeDgjqxHCW7SD1Jq4aCXvS2hqnkrTmaGGT6PzHM8VGHbwdwhWZCiduLDvVpMN8qMBkk9de1NG",
  "key37": "44nzFiFPQudJ6RGoAnu4R9HBR95ZyNujRZuBP48avo79WQzWZeoezvuow6RUXQ5N2iNa56toifVsJRodUJNUsLMS",
  "key38": "4bPV4V6Jt21VyPhqBXXza8XKm6C82W4a838FBd38891wtk6YbUNZW1ajj8Hma6RUdDDmF23KGtQ1ewZA2vyWRcBe",
  "key39": "3XNR9GHtdpTB77juZdzGvZNhBEU6rFW8jE1g6SQ1Vf8aQBt5zp3UasGm2VxvbRk8E1JBRBaZJapNtpYUMPJgbrfh",
  "key40": "3msa9ouXKBUdCZVePgArT2FUZXAWA1BjdQb49Dinq5dgKPLdjjQRoW7242MQZzBktawYUcFv7teoPxr83GUiERY2",
  "key41": "4xSs4oixoipyaYPtMo6gEYjRrGXbeTaXE5iSnXeaT7fLQupU1kk3hpQZvfAMMd5xqqzTDgseNjqYWvVPeNXBhbyF",
  "key42": "QxyhKLs6DdAgoKGeTXhFXokYjGYpbMnwp4YQyhBU2QusJ2AHCS7mtdYNQAfdY98J34KiKdzpU23V2X3ZyiRpMNs",
  "key43": "298BwE32DqnXW95xvK3P4AVUp5fqDJe3HdjBovwyZKLYDkzYtF1AoWtprNtgudxf56YgMetxc3NGzZgiKzMbW3nm",
  "key44": "5G9RZneGyqhDq5go9hhnF8kX3nVtKw9GnMUR2H9QUXiiFtnteyGSiEekPP68xTBgHy7Wx2wjYbRDGKYPWjJkGEpT",
  "key45": "2byARb6d2cWZauK1s1hAFPnXrcKkmiaSZeSgrWzwuWdv8fMzCbLZApczPW9DnhJgJsCUefcbL6QUgioW5R4UsqyZ",
  "key46": "WNUHUWfpLkgwGAjWHiNcHs86uwbwZqr4zsM5uDTwhvjNnqctBkhUtbwq4FMpSg1H7ZTM2u28w1V3FpsHVEhFd6p",
  "key47": "2cdVDowj2zNAZx7hSK728pT3jAqfkHCv2BB5VP1uABgVS1hXHNXQ1BgCY7Zryv2F17Bnxj56j2aCRF6sLHhha7xQ"
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
