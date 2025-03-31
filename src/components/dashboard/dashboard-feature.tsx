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
    "33yrjgAwM7jkcdKc8oDY3fJL6XU8S58nTE73VAWa9KoXmfoVDHxMYcdLPXvaG2XuZRjvq3qwJMQFxYCMehUSUxYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Geu1DKDDQY7z7AbTPu9RSSUpdonCerQRcfteU1ecgLmkb8qS7nRy4ciRinqnavkTJkGu2WHdyqiDTyw4gtyUkdh",
  "key1": "4oEqUqFp2LgrMMaiPdnCumzH62ri6zaXovdPHfkuo1hL8TXZUqKjx57orTuafzpji3rYPrdtqEsZN9cP62qmYuRH",
  "key2": "2KSPuFvrsVJLuG6bv2UxzpfA56HDgrANsUozhV6F4TZNtPjZp1whS7ra5fsb7gj9LieoqzLkHrqGmB9YCqosm28d",
  "key3": "MxKT2a1WgFpNssmg2KWLmfbNyB3b5braKQLoCVbKevkw7vds9RpLnvi7vKK7BbkSNUrx7P7WsQYD9vKGEpf6M77",
  "key4": "3dsdnMapTArd3CbVxcFeBhjtJn5rPHfa759HjqeXnb2uHkWvjm3X724ZFZnuxXfQenffJhM4d6Xw31L2ysoQi19f",
  "key5": "5uKvbMTHUVnDTEZUDcnauJxxztWQoLKoBPNtiQHWgTwv5B6vKbbHeKdXRhmLTwFiMbL2suRPWNZDHveqXtJMnRwd",
  "key6": "3w2Ax7AwQ9WozoH5RUBbEXXTV8PW5vp6Me7TWWovbseLQTaYFJEyzq5RmuyPwamE4YU9NCAe1986dtq33tGnqokj",
  "key7": "KNy8MQGdCX4hHj1VmjRaLwvfJ4N9GLbeCTtRArWEB48Ej2r8LGffeszegoHSTEWNPf83ACmjYu8g35dg5U3BTzE",
  "key8": "4bgRQbUVUVGZou2TFFr5d3upEmuVQ2mqgzLje8TDkqFaBoyggb3DCq5Kk18anXpbpERxKXb16m6ibA9S71mYbcFp",
  "key9": "MMQAxgzbANi7XKBRaTq9KtFxuUCqM2vT8sGe4yuWN2tFsUGPLxmpm3N1S8Y4wNqm8udrFZLbT8KFWX2Yb6Xjoto",
  "key10": "9zmrTNRcStKvNQaG7gk1vph9P1uMUq9BumYeyEu1LVWAq5VXhVRQ6BaDqW5BJXLg8bmcAomU9gSmHZYPrfJJhn2",
  "key11": "2uGiR3iNH8VLLL9DbJskNK85wQRvS4mo2XCkt8WLdKwvubpStkuYF7embjy6pJhXc3gHCwWT5zNn8d4wMpERKPdD",
  "key12": "52DYdQ689n2HgVYMQ9smoVDRj2xS68RfxBQNn7dHdFwRRhSVcL8xCXWakYdGBS4r4bGWQXRSE7BHTMzqie4dN6UB",
  "key13": "5PkUQrfbCCiu4ZmWUtq2fE9K4cLC9k6NXbRuQdM4sryy1SMzcPD6bAq3MPMGvwJ4MSo7QBKKGYdH7ecAinL1d55W",
  "key14": "5sPA93nQXmBvbkRLPHpc1PzELeYWUw8VF1im7iA1KpDgbvbj6zXdUuS9sY1kxhLaWiSrAr4KLXmbjYFXG2Gsu6nD",
  "key15": "4C9XsgkfrXT6ht8Ht26XMLNgcgD6SVYjWhEHjc63zWAiwZafwfbaLQb3Hc3HKQG4CkqKw85oiTEnMK2RqwtfMW4g",
  "key16": "awSaBvEvbvcXe695FFy6tLioH9p7RcBc1grAhL315t4Gd3SCFBRcCNttzpUaKtecTvj358ikfDtDnkujhkBp8Js",
  "key17": "37KYnowbFShen9NR6FS4nLCd4JUncfyqmMkxwUFPoEPVKadUgFRJ4bTZPiuqWNdJBwm1UTdXvN85L1mL2Z1CzVtH",
  "key18": "33tezXNEFEwgB6rRPxaqRuVAR9Qqs4FgedJhN5kDJFqLhVYezxz2vVPFRLVPag48EgsiVqbMb7YCtEpixpzzwC5a",
  "key19": "5Uvya1ZUiJYKftdX6voVCRu9DvJyHkCDfnGALz8gEiuNRmKcx4JUuihNjurfvMrdLNgywbxAjEtjq8Ph54dZnL5W",
  "key20": "GLXUdaagqBvoS5CJuWzDjee1oSfMUXtYpEePoW9AHThMye47bxHWCpswjFMk9F33i8QgdTk94xc1FyMJ5niioEs",
  "key21": "4YiNsrvatYaaV56Drd3XFXQmutoeVRJvJnwGuKc3CNmn4MzVTxCpgANAn1sckNPUeEJUCvJgDbRGJxgZUDPCyzYN",
  "key22": "2AiaKDZuKfQrV622LokQwiFUyu6XfUZeNSCLAiuv9iSm3RqXh8bsksv1W96SRgqzi1XahSkFLANQQ3pizkwC784R",
  "key23": "25FCEAhmLsKUn74a9A6h6cPUjV5S4ycvbBonHkZ8SdwBsmvF4EqE95CWfCPfJBxEd5QFfgnBcw9AwguVKE3vX2eu",
  "key24": "22kWzAkJt2yT2fuFA2utoiCCzdTtNQg48Q9wSeihaGeRMniggFoEfFGUuCKALWJVNNTb9ZPtgzvdyd8KRCzyz46c",
  "key25": "3pbZPHgKxZL2p6P7SBczfSushVMFKMzdWfcTmU8XeyeLCeKgxg9322zHkWERgmUswQ9UbFgtSRCJqfa5oga9RfdL",
  "key26": "3MVzaLnn7avUsN5hfFJz7SDxwSFHmQQMpZRVAQFBjTm75GkFH28HaZitZBmPEa4j12dvqNcHcJKfo1SB1qqvjd29",
  "key27": "4ce3Mj1R79DfzKhzZ1eLrjYHPpDvxaSeR4vmiRH1qo1PfkPUFp1uCCWuaCJfsUn98q1vunFhMnfUGrzaoHh8CqUS",
  "key28": "1GWeGycHsziDB3SUgEAGVsk52HzF748vAN8sQx9wD866Fc3gp1hgFRpjYDDroatyBZmfHVJvkti7CWKMo9GjfXa",
  "key29": "5Y4ej1gfac22ga4xkXeJ9YMJWYUp8nHmpmmvJShDJjeS64ECA1PFEYo627mEDdXnPg8xhVi4QdmpJt2Tb4o2RjL",
  "key30": "4keogLGeUemcGAcg8vQL6H979T2mGD8uVRBHXKHQ8ytJWDV7Ts52tV4eV1Fo6fc6k3HxJCdygsdNEePcuvSFSUK2",
  "key31": "2Btshm3kZf5AD5y6e7MZ8xVyJsN4mSwXVSCFkfS3M6c4z95Xd41zVZFTkpgHTJGy7GhSJKtpXu4GnaPTzaGYwLd",
  "key32": "114m4hy96zaGSm1xrZ2YZ8fzDE6CBru1WD25GAMa7VFod7Tfn1wwTmq1UfXZnmUYXwrxCjaixDyG7fACbikuHf5",
  "key33": "2WjEWYFQC1AjfRJNtpHzosSRLWGyMKm3stU1g4gJ7XVP5xbtx5Geen1dGwt2ojjwxrJLu2CnrSbuxetHTSorbuoh",
  "key34": "3mgCGG8E1aogMTaAjf5nWWxzAQGwLPxfGX8PLUiV58UBxx7fnRP6RWJMk2J1qL5YRj1pE6MkCF91VAXeHEhw6sZC",
  "key35": "3oF2dHT63VtjrLLyS7RxMqhSiPMEh7ARsCsE6dWZGSnbw7i7Cw8EfDWdzTNf2cAZ3gbAA7LDvMxiJ7YBgjGuF18H",
  "key36": "4T3E94kLgofdB435c4v4UupSukPM5SedgxruAUPxUjSaUMbfEgQNuANYJmjaDattSFykM5z87o7N3AsPNRyLNsR3",
  "key37": "5Jsw6Ui81SztpvnjMsuTvRYtk7BDSWKx4a7fFfq5xnGg6JqHhDeoE2w8fRsUHaXi9U7JX73Ydj3JqNcLgqijmaZX",
  "key38": "32XcBLbeMGiwydWomGvxs1UceRK7q3t3x2ySMDjJffbcdfPaj29s3Zjtng9gkLEnFMs3F3AGjXAFJ8HB4YHCbJcU",
  "key39": "27aZVpb7TBHztp1EpcHpHjiamfnHSpDNuWMxVcsuXYUzm7ZvhLuhQH8CysePegrd89gJBkgg37KYMjScyXLBbiM2"
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
