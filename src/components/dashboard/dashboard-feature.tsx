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
    "2rFCYRVQyPqF3wiDkXzTvMLsenhDCSr9Zo5RUYy6oRaQhvrpajyttCdsSPfRDtCPrkyvY1pwJAwufBNrPWAKPKSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p6uuoCJNZwTsjmkEk1W9J35s1KutZsB7D3YJphTxe5Vbu9Btu7xTsbsQJzsFrGHQVuHLrMbybFx3i4mUjNEULBq",
  "key1": "5xNRQWZN1Xy7y5LUnLRd7vXWijHdZzbB6LhqaqiuY3YabMEhMoqNn2u9UcQbJsSRFdgHmqdawzh57BWxD4JZhSL1",
  "key2": "3juu6zhc8a35jVXXSjbds2Pwda23372jq2tY9f9N56cqfqBrkAddVbfbsWPmA5eT2YtJCbdkon2zrhM1sdNSLTUz",
  "key3": "3fPLcego4eHSGsuAP8weJ7qU5kii4uoHqcF5FqE9HYwANoka8YMjRd2QKkCxSvjbGjoZCErVTDqFx8eaJHCJ381i",
  "key4": "3zBYvrNKNKEjKMgaCLVhJBkEzsnxBcYZgC4t6yFmMHSLuGdMs1Xi5Bcx4xmjj5ZEeKsfNbRzVJBoadqeWoiJtgyt",
  "key5": "5hV3jyernw436ZpgUdtfwUHNx6ie5k4hwiuB64CqzHjqurUE26G6vYVYxLb5Cyxxmdi3zSqthgPzjj2LCm5dGvL2",
  "key6": "3GwTU9iNumcot7EjAQXbMg7y3rJz4wozmkE6LoaqfzHgkSHKwFRq1LR7XBhSLsmNnsvop4XHf9T9422KNSbykW3p",
  "key7": "2x42aD1Sr2yWJTm95We751W1ojM82Fh5xCHtzKXP1FBaL14PHJfPjeAx7F33Q831BQBAS2XU83piyxHeoWZmN5aE",
  "key8": "2h2VNj9jy4YTFB2yaYwe4P12SQ8zy9AFwMGAw4NbMKkJhH15aFBYKGn4dsSKLZhLQszJw9irK1BAeyNkjfEptxMD",
  "key9": "4MDiYK4wouRpFkew2f7QnH4bxmBFtevaNPqdmq4YEUwVFZiZSpXhH58LfDuAMh4EFHFmnETynTyYVAnQ5gkzGwW8",
  "key10": "5DvvRELYF4PnGb68Mvd31iUAwhB6nfUgn2ZxP5i1m3S8sqSVMqm14TqbB3aGNF6cCLWjh1KAkEuhH4B1FisQPF3A",
  "key11": "5NKBGP2GA8HZZVUTH5UBZytiDkTayokHy8rpWwe3SMKmdg5HXugDg5wZohLu4JR8GTgCkAQpX9yzwdymQrvHtfKb",
  "key12": "46Ynz4jebB2R9whqc9ZiVCm9izmoMBeVVd2or3Ss3RumWT4YuLybGTyVKbtHz6LRM1mECpTHCTcwZ1vafDYqnXfh",
  "key13": "2DU4DA2n6smn5FSCvtb61QRwRo9h8LgefWqNA4VhPPeLQJhSbTk6WeBy8QLihrqRwXxUPXHQWruDktDWwQMzCRUp",
  "key14": "5MpZV4WBJ3Y2Qq4EqNm3WknXYA9GJecZVDfSALd4jhh3gytfHaA5r6B9RfYAyPSrRPecSuyqsqGEXnHuUUxLfLJb",
  "key15": "CRMJquwmyzVK6mnDvSKaWErGasY9Kbdqmg5CQ3ShyHNA3LrUuZ9c8itJi38F6tY29kj2Y1nJSNpjmdgTzzjK8mT",
  "key16": "4wVhYTxzTUXYLtVExoU7k2AatGw2ZBmzGoDgFCwsruvd5Poh898BVEopRjf2NjvNp9nj94FRmJhbeZDVrGdyXDXh",
  "key17": "2BXS4H2gY1H1u2rwD6Z8px5GRBMNrhpnnbcd3HaAeH8hMuNko97XNyWWTcx7YTUmS4MRLDoqLix54BtrwFuCtEyD",
  "key18": "AU6ZDFrs28hm2EZo5Fp3tmn1EH3Xbd2BpfGY3k8FWTeRpKvsWg3LKEG5w8u8KNr9esux65QxDsgurz77yhhpQsk",
  "key19": "4Vaw3pKhdFxjMPvrxp1aaFoTacea2XZ3GLfUL3F6XrSMfQDPw8PDM3cqvVvpWoK4WEMHHfBSNn7k2piknxcw5MdU",
  "key20": "22hyMgQ6kuPG1TiHE9yuWtT3ccvpDRnrTpqMS7aTNsnDuN8ay1T61vNFejBD5h7EZQnzpwJcgV9d2jcqku53VB2K",
  "key21": "2VjmpJSd6RfQsjgVQChE3Tf4UPxKNeqaRG7vqLWk1JL64Q7uzFzCjgGRAMZTd8U9Ab8DZsM3wiv5wwCzfPF3wzfe",
  "key22": "4Ur4ToAjHXtp2R5ZrPFEYJz14mkjoLc3Ue1eNwkgzigou3QNkeM2NYiydNvWBXXBTrmAfYP7TdHYR9Rrgoa4AfZk",
  "key23": "5zYpcppgz5dprqU8uQ7KERzVUsFXd3NC6apNxEq1fXzem8zsPwxS79EusaStqGuiPFUzjUUwKxx2uH7dvr8PGsdr",
  "key24": "54rM6amxjXDcmLWpPnfAfR2iPaFsDKFKpBE8Vbt7zcBS1sgvAuA7mghukTxxNXC6AogQ8PuYH4FpwdwkYaAn45Zw",
  "key25": "2GHwxD47tezkBrP2DZHkcetzTcn1jgj6bR5dFik8twNBUjoqQ1bwTpwgjkAYsgjzt3MTHv1eNdTYkLstr8KNCibM",
  "key26": "634fxwDJW9WG2SwHa9U8wFCwPpfSsyBbAVbx6fTAwzE79YsKJyALkb8P3KpBYWY4h9DT4fetwyXKfz7mrwjqHNH5",
  "key27": "3WUq9NHY7ukKiAsaw5ap6uxtknQmGmrF7qU1dT7ZczLQPsscsiyjmrxf68JrSYPzm53mkkSJ3Gu35Q5951bWR1pi",
  "key28": "5y9Bz8DSdgGpM6os7fxUJ3ZMsNJciJesbz7rKWuS4Kf2NyF7Mgtcyq4kJzDekVTL8bDgXxgQsqJDZniHBG9WShgm",
  "key29": "3qjaMUcJ8qeopUZDmDawyn8ocdUxwsUGmoH8QRhSNBs6biyVPA64bmkt5voyddnidB9Qkpq1bUTerZT7cSVSgpFo",
  "key30": "5hh4eMaN227a9LeiauZ3DGmQYB6nZ7HQt1EGUGXuhL2a9pX8diBrceA9aBPo8wwx1yRVrLWxMSFwJEPpCuokZRf5",
  "key31": "4AaoDxFomjpC8pxdPddNVjV8T56suYp1nKFjg6WG6f5oaWb15ha5W2q7wLZvCPkzGPzhf2zNBgoCx3SKb1ABAFNW",
  "key32": "5GM8CNQ6kSyenACr9BSkQ7gytVbjEeayR7BRHw3WN6DbCoYm61DdsDknmbLWQXNQUk9KtqVPKdfbyNJ25YFm2whN",
  "key33": "2BCc8HWark2uGg2TGVCjcriyooGL7XXdYgNWWm7tcW9CRhv9UhbYkjiXZHjYkwefE1SnHbcJ5XZsLnHe7RhpabJq",
  "key34": "2obCPcASWdX3ifzbe98nGifhdT7BTx81nw966M8Z5tA96EmZsVN8WGsoZkKGrC8LqXvWuXQ45UtgAE2m5Ao1y2eA",
  "key35": "5YFYEaeFBYcNbKW5hqAHwxv7zYTsXcrRGQjABBCq9uACVTsp6c2Jxai1cjNxLNURzSMn8n8cE5aLuM99kedNqJgQ",
  "key36": "5iuUXxM1Cv7ZcPw61boyYUmLLACyZZry9ZeZPcwPJHZWQj5H3TK4JH3XXjfYDDe2tmhrdMXuTeAQhxiPu2K4tdy3",
  "key37": "3iDVKyAoE1UTHGss7sFeDwQwWJD7xCgGN13T2jBmDWh9g3SQFvNvKeKi2Yusnb6ajmh5iYdDvoQDVAAQ48ZrAh6R",
  "key38": "6eew5CwgJbS2cDZoqEqhEkfSVwDCw7wufvBAGR35mKYdCw1aRcVKWws77j3fmpxHQmU3i4tKcqcDtiQTJjAXmoW",
  "key39": "2bEhs9hd2qKbA7sCGxbxdtQnizgsHCrfsjoFz3Vp1dcSK25ETh1tUAHTgMgR9U95yUza7FYkHbboeN8mVB4CJvCP",
  "key40": "51BoPs2XZ8RP7tuv6M9jNiub5tGzyLDUqvNTipERNCobWqy6s7qP6A3pVNkAAYEekqENjXqh3VYfKKS5wyY4rPAP",
  "key41": "3ZC2xFr4jvR4xwQ4KtgJaVHEYjzsZL9iCYH6Uxz8suSfPX1AamSQonLkebhpYDnehQR7gXUa7Kbwxz6Vpar8QYGJ",
  "key42": "3wHwUo4sseCQrL1zikoxLwySFFuWbTQNkjq2FqbRfmCT1HQhaAs98ZFJbzVd9cEwmR53R9oiyrGT6d67MbyDihnT",
  "key43": "35dFqZwSYhxsag8mdZaW1MV1TTR2oc9HckbyyiS19wk3zhj5F1rHoqATuvNH46Kc2xyKsuuduY589Xub5uLXEjyV",
  "key44": "2VVRyvQrqnEL7V6agtHWZbLSNjS9xn42rTCpJXiDffuH2MyTGBXXj5aCLuojJwjUw8EExd8mwdzQzdChSYFz3PR8",
  "key45": "3vyiGYVwYL14FF6yhVVCggjbJdthtVtiW2boxkTUHQ8FMRoou6thnBy7G7xDio6nWxst9SGbyz1GBPWpbHtEwzSN",
  "key46": "441K38TMf9wrZT5sajhVgaaxRdATFzxZR4eizdf42BNbcakKhGjrE9ZvuoAVCxJTwwx3WdLhFdgNmNPrkC2j7xFt",
  "key47": "4vWuSbEDCQob8KA5txTbYsF9A9Mxw8Dr79c4YnZhwmkzeyJKf2nzhXzMNcXkbNLUW8u4fxqqaaCSh9AmRavcSZrs"
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
