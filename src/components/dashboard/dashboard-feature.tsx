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
    "G76KbRBqubHEAtWfvBrG5SdjPNbRwvKgvY3KfmeuM5mu1nSJcmpuNgv7nfeUDmh6Ffc2PVLT78zoRQkTjhHp11G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LTLnT9bw5oKKGv3GPziUe5uEf5ofqfJXoUKpLrKZky7smrDMgWbNnq543W23e7ndKCaXm6Qnm9SrbwmmW8wgS8p",
  "key1": "5KnN4Ck8E52Sn6KLx2AgmZEKxTdkNwzyXkxwQFtYpNTcaohETSQCgdtfVB2B1SbzN2vMBD5L6UPGyiARLCPdnvZP",
  "key2": "33bPNQcLTDvnhMVFV896D1zECJTUN7zu52ZAM3tSkLbddkKothCxNTwWFQLNGBqqEY4bpBn74b7qDK2nwu3W2G79",
  "key3": "28H6mFVZg9SzqS7FsmmJXWhU2vpJ6X4DEiAYSpdDpqw4ygv5jNRdQQJLgpuJrRniqnaU5cHoM1rvfCCnfUMo3cb9",
  "key4": "3JmvSjxA8AUyCNWf2zZ6UsF3UZwSUuBZ3t2CNQHxcbLAcnfmABRWnvZdDj6UySqNoBj3XSmDX8Muh2FMhvMBwXdv",
  "key5": "4pQTiXbqAhZ6q497HtEiNixmphTSR1JiJrLwRoGGYDDGRZVmzdsAjy24DUijbhV4QBqVEMsmRUkZXwYsvERWLm1o",
  "key6": "58xVnTHUMb4gH9sWDfEiRkUaUJZ6ZvgbqhiCHQGv3FxBMaciVmViPZFcyAMTdjjPFqTadAaoNz5EnYW1WzmawxNM",
  "key7": "2MrJUfFsm6giHTHpJKCfqVTHyYxvUJEpvKpDBD6LeU51zTdCS3377qRRKSvCjS6Av8SNLYELctvyh9SkWGQ7fkPf",
  "key8": "4aqnyhRSm5YWYH9WgaDxGEK9RysBXuaN3XiGoVM4eQcwiJ1FVjSy8j26qYknfytTs6ALceQGhnGXbQrpdHtL7ri",
  "key9": "o37B959BdYPYYU2uJkbfz8XwkgtXR5hT6hBWDFhGsKKkd6e5APaMmwW8SmAWvwedjut4VcEs9M3CMNQP6ALyVBP",
  "key10": "3BoMQR8P6drzh2fXCZ9ha58f8SWook5EQfxyV7kE359BXLWbsTUStrWw1mBYRirfxxpVmLGfM4ju819ke6d2q3qy",
  "key11": "2jh9HpqhWmp7E7DRMr3ecPTKRR8iBWmtVzMs4726wDnqkTAwsNgrLcPE91dktM5ubmoMEzieQbaSyQ6ZZRny7Vwo",
  "key12": "3MZGXumWYpspWD4pqDB4E9eWTkxrKULkH6GgKYwcQSFsZH7f8Wudrd4tKUyAKvDkjP4Wr8AvMbFfFGZ5YPib2N4a",
  "key13": "zcb2p9ugxf3AtkKjdJfGihYQNHu1rTuLkE2Fei7YmS7XR1fiz8CP2mMqF7bc84wzk5kKeKJycB5Uj44WkbigAxT",
  "key14": "5VbPvRu4xtbCAKwvgpTyHTpAQ9FbyLoDooHCKf3G9yLsAjef48BJ7U5cKoQmTfRdTYfeerzLmHX2T8YEUQDYY6Hd",
  "key15": "2hJm1uBCc4L6cYdd2TfuZ9ovnx1SDpBpvAPeTafterXsQooTKZ89g8pLUU6xcFH7UYgD3Bzy7HDV3CL4qev5HJEU",
  "key16": "3HwwUbc9X9BUL9y8DRX8ghjQHZLzh1beJFDASfTqxcxT12DLNk7yVbKDWmfXwEWUXgSh6gxEvmX38YXzFUyTjkD",
  "key17": "j1AV4BdwznbCk75WgSwnq6s8DvwfFLvqomJt9FhGW7Ri88MRNt7MgiP72ZixFZKqna9H68dTXSptEdNajHQxfuQ",
  "key18": "39wFAwYTrr1cg4UY4v6uX57taVtPxZYhEf1BKAbZ7oVBEF34hFbhHiuPsTQZYBkxDt8gePD5yfECvAwQ6m72TWr7",
  "key19": "45Y69jyfP9j9nqxyaTJNxxupcUgcfhzQuhe73snGoRqz2poSDGDYy91978topJW7JsV3cC8yupnWX9QNcK7nubYG",
  "key20": "2WKyn3oztTJcYc7WECc9gKMZtai8QeWx44hph6VSCSmf6koBuHuFaWoy8VQQbsPGb9jYjHofbcNuL4cj7YxEK88k",
  "key21": "3MSgTyicT1rysU9Ffr2Vd1tL7qMw9Xn61um1M9qXip8uW7QXjjBLMPFeCCj1P5fLoxvHRrytkJRUMPF5bgd8bWTA",
  "key22": "NjuHpVzrfHXSHrfMth6Wq3f7CSYzoUHkieax45GVPSWGi7gnTFgumD7sG9HrYeybVFbr1swdd2x1zqy73g8vvSU",
  "key23": "5UWFMMBDPsj6FyW2tHL4Y1yRsoUXn1ZkXKp4BAT6p9CCmHqM5Mw4ApvoTXeHX6K9xi5PtVavkzZeMUWxNuZEhYdQ",
  "key24": "3TTGHPLjJnWcRjLhsTPKxukuZ1H1angMvZ4WsU9BJR2sbe1LXytrW7Qd2ZekismpGk7x1AKt8RTg69jJrgCZ5Zin",
  "key25": "127NFkn3cVMfMY78nymv31W2uSuNxWLZydC3Z8wWPnBNU4T2BhPrq3b6L6riPQ8mb4cLGyNrVMA1p6bNgqS6jKJ5",
  "key26": "4BPV9Br37NPRJb6fV9jxRPJy55BiBH2DRWW2cRZCJYYNgd7Q9UTfAb9oLoReDqnysJ4Z79Q3wgaiSB7LQcG1BELr",
  "key27": "14T75YzQLFZpngvynozuQsqiYWsfj7uVV47GzghegaM12mWXxeCwSaZd2E3PaG4ySVL3VYNYR4115sSNavKZfeC",
  "key28": "2TLNYJiND3ScBLQMyPcz3wqNJERkFze5TF4UnwVwUTtghmzryLjwbPxe1KWsyo1de5Z26mVvTUEJyo5cJMUG3Krr",
  "key29": "4EGZ9xJ1Syb4f2MBSeRNWK33Xr1iE21CfDk11zYtRTJpbWoACc2yuJNsunoD4iBCMzFh9HCw7uD4DhixD1K7UqHZ",
  "key30": "64mUPb9axKbvtCrHFqqApyxZQtZGw1gKBxtXpoV8PvqB3wxax1TFwf2iwsaP2vbBV2VG4uS5dEqaUiAQLYz7bX4Q",
  "key31": "3db1GuPnsM8GDtDDHSfm6PHPrkpt37Ea5ejihUZN37MzxGx8Q73jY9P5CsNrrFKa4YpNS38YNqrER5CYWmmPAdui",
  "key32": "5cuEPRDg4rMCHKAsrVCryXGi8MV3wWRo8C6GMXydniMVDZAKAKmHHotVW6KJMPz4RA5E9RYSeHUWbSacNK69qSN1",
  "key33": "5QiX94FMaxr4WppiJtguJWuBiHJreT5sQNTQRbrN1xXPVf6gbThKkcK7jjQnK6KSPCYpjp7nhT67pXw3GksXDSWU",
  "key34": "3WTwhjBuFs4rCgNKxfspkV914esf4hFY8rppG5MJFjDohmT2yBihRMXZTL1fLqzYXa1Vwc68NFLV1aroYt91JBRN",
  "key35": "2yjxQFZpCgV5qkJauLTrrY6dMwhL3SAhqVmDoqyEYpkGwEQpGSWS4B8QkKtdVDRNPjgt3SMczRTxV7YZtC5M3vhp",
  "key36": "45SJYdz6MutvC2jkncSRMh1WbpsEoPnPBjwV953Hcu18f3zbzJYfedExTSqrKUf991yWBDNA4gp1AhUTisWtTHtx",
  "key37": "2bECZQ8ForiRSt3vv4uywxdhe3gQh3wNX2r8J1TEBgvgG8LvExMoacY8GngWt4aBTgC1hDeNtqs3rHtkpZ4NocAU",
  "key38": "55ntHVvcj4hGaW5LogJA3ApMgDjNeZM3iPCfKzxs4Xe8qi3Yn1U4uFKaQyiAvBz2S6JpGkQwwxkKxVMYkE3hJeUo",
  "key39": "2LbKp6y9sk4ZKY1CPw6LBsDdpDetV31vJUVraFRxnZov9TSi2pg5kUCuwo1PFzAaQCgwbGECoAqeuK1KfebYnANn",
  "key40": "gwhTSRRo13m374EpmTACMgawjv7qr3HngjPtbbn4rsoX6yX4YqHkR8ifZJHHEnPitHTVGz9S8oGBNbWUqtc5T8f",
  "key41": "5V1Gmkc36F9UKRRa5Mnc5VTdR5XqfaQmj85P9zikD6CGMsdhLBHgomqU9ZxTqi6Mg8DwundLdEnB9o8qQxGZcpuD",
  "key42": "57Y2pJabHU6d6mEyASyhnuN8GGkM1fy7rR8SdVJzm5nSodi815cr7T6hp97yLWwN99QyZXhfFiz1eU144RKRVm4q",
  "key43": "5G8m4MUMEC7Eju8s1HrsK9A1n82MCK2UFcsFBcX11P5fhrKTudV46TMCLT6Eyxjuv1GuZevTnoAqnbHa1FDRJLdS",
  "key44": "4tMSYn5dSGrv79RMnZ9BA63Ve3iDzqKGDMyh9G3r79CSRYzRdAeeLxFL3BzLs1KiKADTYX5TaGXokCP81YR4HYCm",
  "key45": "2D6MMnYDSEwrAheNuyi2hpkf83qFXDxJNZtujLUR7Qsk3iGvYHYspWGixCcGLyY4fJ8AnY8H9wsKwjfBTf6jyuLq",
  "key46": "xRcEHAf9qkep4pgG18iK7uxBzbJ8ipUTqyL7jHfWZJjLjD6HVjyExcDdi7gmaQP7t62F6Mcd6tSUdmCxVK6vYyG",
  "key47": "5Lvq7VPZSnXxPutqD6qKNEr8RnXgYn1Tt2V2bfLgDw5qteE2XFiGxoAWVEdh682fcPQxjN59K2H9rXf39AiiGQBz",
  "key48": "3cP51L1Bek14eXschnwPGScykwzQFijfLgdiw4bokGZuHEj7nhk7YE9nToagqZU3GrBL1w8gJZjzyR5BB4HZN1TD",
  "key49": "4XL5yr6GKbcBsnCzSW3RLjkXFc2zC6tk3PSWz8LtPf62Hczae2FE3cHD9ZMAgeZ6MigKc9iAfdDx4adHhDDGh3hr"
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
