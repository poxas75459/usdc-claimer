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
    "61YyBEsZ2FHiEpUapLjx3mukmRnEyJy5xrAySDwk59jfYW5io8NpgH3GGgAb7jiPG9BvMaxQtrj1ochVLHCx3dx2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ycwC3huBoonTv4QBNz6LDXQYwitoh7HfdU32qS4688N4amAeSFVDdxU2Q3rTUBN5HgVHqPE5gzomZC5Gq5dopb4",
  "key1": "5LccbuZzSQHNRd8aEWxgnXdzFaVrjvFVLgYLdUSs7XWv2pgNP536wsFwZfWkhheJadS622QkDupbdFpBRgZ8PcL",
  "key2": "3s3LkXJPfT5SmvjPLi3UTGn7DTm1uKQDrNL3JwPMdhWDPbUtr1qXdKuzabT8sY1ovENEQn9vVHKHGfxiH5bYZep7",
  "key3": "5gYRynPzqGfqps1L4gPphyMjTekbW1o2A3cXppDHh8QHvxCbXUeayWzwESYuyJfcMn1g6HtPzZvvt3YqVPx4WnHr",
  "key4": "4jWYRYHxmc9GzgNzNj9GDCcuc6ExeYWJwafLtJK25FDbYKrd4MdYG76WmR1czcG6egG4wAiSkkmrKzqDBCbE8Lve",
  "key5": "2jtcGNW4ZcEtmJSPNYpo2ooZDimtVPfGMVip4iugK3mTFponWXDPv22PYEHDMPDbV8VYAzrvtQZVAinXuHq7DK1F",
  "key6": "5wqCQdqMhsWFWwL1MMDvCRLbdcAjYKpWoYeeSR6zaXmXjhENQgW5yRk2SdZyYAtx6xFhzVUTnBVzu71feP8DPi8d",
  "key7": "5JkGKCvG8HzJDv4TooqvoD2nKpYP3ybg2xkHqRnoGVgBhH6aG7fxFyGh8LxzWGVqQe9amVPArArA6kE44VQoqMve",
  "key8": "5i2vj8FD5QBvnekKe5yZnkU1txYpxngJNkse4fUJcpEDAt1ycEPVoorUFPfkjAHKGwqVc9j3ohyswrf2sUy3ChTg",
  "key9": "3yAgNqmBE8hCBx73LBmsCARWyxNCWibsCuiNXK4vPDDAGDEWxEpEecsgCPcGDLAYnMqNazdSJH5UarR1NJLmcCYL",
  "key10": "4F8iMhWZFmCNknZveWJow2LapyDchqbwjFZ9wwGSiKDvNWsbBz7pA2ojWPuSA3J2VM8CfPaqGka1BxKQxTc796aG",
  "key11": "3Neud4qMctC2GtSL8Q2AKfkztFEkhQkXECNPPKp7giU2SxbdgHjSoRPSx87GPkdzr7JTGm6kSYcce9xqWMK6itWf",
  "key12": "Lg7EF2kiUiy7kWkqFUtPrhJfbCCN1etTcCELzLrduohNQYAsXDk8T7PtetmjxbdMmj5H5tRMc2xreBzChcRyRzd",
  "key13": "nWzRmUkYU6TCxyhZK1MpMvNie2wuxaEArxtFB5xsmW61GYdVtoboXCpsiqDniSB3WgHJJjqbSmEJhGf3TCK4mP7",
  "key14": "2aqaWTh34QQo9Ndzh5ydDxurZn9ygoUdgD7FxcUp1wbAz46KBNiwmUCm5dLaRybztJkYGjWCMMUJkqMtPTThth6R",
  "key15": "WFDiG1RPG3QQkquqvFCMqyzpRiVAo1SVMA72mHbheDbotCEnCCWHfDkVoS2v4HRS5RFWMraNs66Ns3nMWmsitjL",
  "key16": "3fBuAxi3DJWdLePhE1NiMUfV3eDGuW7ESxhYSmouCRgQ3mB8THYiR9RZvPUk3YUEugzRo8QS6LGUttTAZwbmq21E",
  "key17": "3eT5KaKZqjVdpb7RwCtipafhB6iEFNXMiuyi2i2ehZqzKdyxAbiayeTnQ7b948csV8AdwzENuxFrwq5NvLmSsDSp",
  "key18": "24yJskcW6D7qLG2bxtapm6XsSyUKKBMaA5imvNZRG81ywAkKx5u47gZSPdhPDsBruHGYQgD2PNbU6LV3WX3X684M",
  "key19": "5fRSJUnVT7xKnWYnEFzVJnK9UmxMESthNhffQKgTXQbovyun2AH3ujBHFPCcRZj13sQdJrF7tsspaPummx4SqhuF",
  "key20": "vZEQRXzPXAfpCekCBM2mYxsDgjzzGZA7auirAXHaCdoqeFHf2XsrgezHxAXLrbh2Y6qUvSWHgA36xiJTLCVvrBq",
  "key21": "3t7F86XfRe9KrJ2ZTihRKLhkMrTFhAQxfbwk5DafKiznomqpX5bxmhTEPYTVwAL5QgGR58DQPrxZ5JpTCrDuoRBg",
  "key22": "2gL6jKgWvU7n3E337cYHCNLUNA9bcTLWxZ7P3ZjvmhHWDjrEh3vq4Taut8hzmKAg1XcpkLuCoRTNJqLgTeNoZJCj",
  "key23": "3qy42yKvAsXSQEpd563m3e83sQyNUcuMLqQaxoJtu3KfpuX722YDxyFEDAR9XUQgNKCxxiB1kEbyKTnCoWbgcf2B",
  "key24": "3Y5QoFCwHnvuWBMroGrGysWPU5YvsvUMy39Jgzd13LJWHegBfTn7ZdkASvGgVZVcGfYPZJG2LjqwB6rfDwAqQLFE",
  "key25": "ZT3cRLRGN2dyvEGR6n5VHmLp5x1LQUYLXPSf8ajR5EeX68yTyuVJ5pgAU8JpNc633dr96UqsdeqLrPxxTEz7ED8",
  "key26": "3Ebc5NyqFegfvUbCkeVUtzdwN7DnmVCN1U13WLynxfzNZEMs3CKt2UCKudjLJLRr3EGywfGyQijvVAuYe2untrrV",
  "key27": "5pCR9Sa6yQjE8hegX1EMm5RbJ63SyC2q45tbzvfBgYcDWKenZ2SovhPczdf4ss27isYkjMcgK1zWUkAm8ZjguWQR",
  "key28": "538qBx1xwyYc7WeSTYYsC9NdjF3pWErF6TCqwhLCHFDZuphwvRu1yfAe7M3Tjis25QZLYUQaeERTRHtASR5PEXw6",
  "key29": "5Zbxqt9bJhn7CZgqcoEjmZrcijV8vUEWSQoibzEpZ95W58Mr4BKG5kd4zZmjdrcgXvqG2N7WJeU2WSpNRoJTamg2",
  "key30": "3VQRteSX6MHGRT8Qqut9XmVLfPRxKURwBs4qXfRy39oUHSkb7TWnay1jLjWTLHLazL3BAoQ46WU2GoFrmQKCCCto",
  "key31": "JCkxrnsnHWmmbCXRgXyFuEys3BnknYpwQ5r3LXghEuNAxvPyRa9ezzY798RXtfSwNHLimJ5bP5YWV2cLEdTMJut",
  "key32": "1QhNrgGJd9bkHeYC3ZvJg1bVYmBwBqwod1fnLs5iTznTMNnjgU8hK5tjt4iiReN2USWGKns4CGBEGKBkHQPJS85",
  "key33": "3vRGecKMgt1xqPfQbBoJEwp95Ez7XWVq4nQGNJzYb841MTC5pDttbterBH6DzZiVcr5oS7vUGVnEUeZD6YdKkF8G",
  "key34": "VxRrbsoP5qSXomztBbCDSf1HNWxjowJF6U3knoi17K4NLt8QCVo4VnrQrNPQA31zK5iocCoc5SYdgbu6AGWDnHw",
  "key35": "4wKBHG6jVr5axvhAtCMTAxHK2BWpkTFth4QdMcxVh6mzsDY8DzwemH6AdApYzLzcr6bP7wxiDnQ5W7bG3A2P5qgY",
  "key36": "2qwwANSjmEQA46Qcprha5tF4WuiQEPyZ3W95dCAgbFCHaCsc92gVmXZPbSHRWiFQYXMg675764ciiLXM5WAYT3x8",
  "key37": "5KXSmqMr3w4f3DMCEt7wr8PxyCZVJoewG5FpLgBAhZTexGRsGzmzbxWyEmddcUSznxAeicwJQ4yWV6JRYENdt99t",
  "key38": "2nZnhSrG7y69XTvXcV6YDTxM88NpT1Hoosfbgxi8tc1mN6t3grzqLFQhrS3pt2sTWFEGnBbieHUeSMQJ6X3uk5Up",
  "key39": "2hoinefSa9gboDCeuAyNTQJX5rHdhzQn4KtrLKXargMKQNmMDhem52MsBa78uxvdFQBC78zbKd1qvoDCV4czEDA4",
  "key40": "5XJ1wbgetCK3jKpELf8y9pCr3QdMMN72o8xKPXnXpNhWRQpXwZ6LpLYrm5MjN5rWVNhWH5czeqDWC1mAFtpLXKZ5",
  "key41": "9omBKWQcHB2SEsnUebo3t4iFMYw5JRN39fFMtDQU6hwScYZu6R4vsPSKky348L1kRaGayn1SBqijfpQ4NdyEUet",
  "key42": "4cbB3b8QzScgCcjji2RDTsXWesNyGZ2CmDRDqMzgqDmj2TjZPiZdtxdUCgjfRVNZ3ME9ZGYfajHxo2DKTgQ4gMEB",
  "key43": "3Xkd6dqbp9kGah6yeNfVwd6VdJRGGNiiXMeQR51tTgJu1UcpvYCycbg6FGfGRXKv6RLZQxXAMi6dxgmhhkcezMn8",
  "key44": "4BFtMyLd44GRsKVnLjHk8ofEhVPq8pyfK1NNm1pkLnBET5mvjkqxbnv956UZpWCTP2voTAwwd2AsR1FcqS95xbi3",
  "key45": "5Bzfd57KGdVT1ELDXnQHbukBaVNPGU8kGqGpHpoccCHTVbM2JCVsLVhwVSKaeH3xLkCNTrpCtjmBzuurd29qAVkq",
  "key46": "3jJLXM1J8vneu9gAXCpfZB7TGvHwGod5hdFiN3Hd3jxmomEEZEt3ULre4K3ufdik5GNyZpreKKwAKsBfYARsg6YT"
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
