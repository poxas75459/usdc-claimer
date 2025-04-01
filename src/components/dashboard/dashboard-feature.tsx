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
    "5Mq7P79ySRqLMkcujV1dMfFK9dtkLYJUs5mQ3iDVejGSFYKiuhaqrhvwxQA8XwGW7EBrNTRFd8bnkpTnwrjAJoxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DdBHAvkuFseJGQNpWX6hjBquTYhpFo8K74JRjmZxZFtLWniu48BKdimoqPrDJEjb2Tv5LryuX3GPHFPTmPWMDXi",
  "key1": "2WTvFfHDQJay2sm94dprJh3HoGCwKXHGmBuUktJehwEm4XGUZE3FoEKoNgfTcx4qeghz1B37aFfJMGuWThgEdv3g",
  "key2": "4mAG6tMm8kL9zPCoR3kzEyGg1cn55xobu2UYc4wyQjsp6fQje3G5f6kqRkWGC91SXchEKkhtKf1nnsFYAjfxq2TR",
  "key3": "3uX1YgvtuWPAfhusk39VzGWZH7PnkvZ5VWMaRb32g9CCrFZ9uiApDM2CCXfr7JWFsbGQZxiZjXjTuYU2d51VXhY2",
  "key4": "2ZVNZu5WrULhqDZpzmLDJHVrgrNStzU5tKUSo3fpVPn7ZcXEmq6xirLdgLNMEELcpsMzM4cquwBKNeJM4FSk9xfJ",
  "key5": "WGWouem5jAUzT4iQzZ6Rre3kEqPZqjrE4fS2idW2EgypTbgqAwm7Lwsj47raVnvgcc6sMD89zincDaUNiZ9Ntza",
  "key6": "3vVfwFwrvm7Smq8PXGTHbHTBhPW61V7axNw7KRxCyDwTQPcYgjgAwrv9DWo9JDzZjswVzVGMrxZvGu4FZSEsB7TZ",
  "key7": "36uTjArm2k5izZbncUe6J3AyHzr87QpsQxMvZMsnC8VLTdf1vxSQjDiZnnVhnjtMxNr2wpPugUMem27eNuuTLRyG",
  "key8": "e5c4MRcfazwhaLySGshMqbWLYoYk5JbtoGfFBZ7HvF5mVXJb8TawmjaNRoAofwkV837wMdXdfpwVYsJHz9MmVFE",
  "key9": "3E9yHCP3KdK7WRFE4bRstbxEkqpa66e9uVja16DCLnm74xTk5nMwV2K1D751fMX7XjVCsQjksGGbXZU9pcREhjdb",
  "key10": "VndF7FxnoCaouGfErQCxepLBWdULimyykHbjufi5YUnvcEeS3oXxFPQfu9W3MzguYx2FTgmomgv5XCtSEDM45T7",
  "key11": "5iHpf3LF1EFHD4NPmawX8aH2FrXYYunsqR3TKzLsx5QT4oMrvTkxMp2qfsBwFPBXy51FUfBXhMDCssidfdedEGnC",
  "key12": "4WFWtXGG25rYww8neqAuwUbLSHarvNZZLxMWBNrA32Gt7e7MXQrBWN9BBGj6MVf6ksyDTMxi6Z9RX4kepnojJre9",
  "key13": "6q7yUG23hgsDKGA1yRm5dJ7wy55r5yxLjMikwmJmcdy7bnuW5kyupTv9gSeUxD8Gbv6m7dgaMqstuKhZpMiCQtn",
  "key14": "5sWcBitQBsCbHAFTEhcxvGZcpM1c6CswWQWNVZQVNyQ5R3QUQjjs1JC5EnhiJWbuS833gbbs9JiF1MfiTZXAyRy6",
  "key15": "5zQczyqJW9ND3tgPEHhwQHm1iXxQfaDbWY5RLkMU3uCRpzqvBFdKmnJNFmxgnzjokV16hgXTBx7caxp8B4MQgqEc",
  "key16": "2xWw1VKdyHTRDkuGzSmyWrp7kNi2Zp3rBCjeVmaQ8d8dDiQijLqnQXmnz3tJkgF72fz99rBQURxRSxkV5yMM7qmH",
  "key17": "3YJyg8mPZkTxkRtqxDLMCYKUDP8UAULM2B1HvLvCkapvaHbiTqHVRXggzV8YjFsoUvMK5nqStjrKsFCeH2g5eXay",
  "key18": "2QpwKiFFDx3erMJstWFxpHaxwqtp5youJKi9Knv5xqWyyHKruZLkpX8WPhb11pmgM62diF99HXfbBpUKfhygMCUx",
  "key19": "tKmMoGmeMoV9oFjF84f8zK8HFwzXyU4NU2gmJyzBGJBcbVNNbTjHsm5B6zxd7bTzPEPMgELkw6oJeSorhF2uJxB",
  "key20": "2ENFY9dhmddoVLKorBsiQg8hRgS2uZRNPrJrykbDz3AWfepL7MHeN8KZjkHuECR8fPGJULMeCEWck64EhbZ1UU54",
  "key21": "hT3jsBMYuHiEkcR3YAv7Rb2w7V9ZQcgmRFgu7vqwwE3T2MjJZ5gjD1bfqd1oTFifUX6HxVbwaFdEtwACsjJXUaA",
  "key22": "HRVZCviA1Vrf6n8RPwxNww6GmVwbxndCC13JsRrTZwVkGstxDqg2f8m5m77sf2eVSm8T5xjBserL8Tpm1FR4RNU",
  "key23": "5sWXpxCCsvfTAEctSKcArJbEzU8k4sUfVWjv2ahD8ymrhn9yMPSXrNH4XiaE3yrPew6uSA3fwm9SuS8ZUdstvXSJ",
  "key24": "BUTJfcgjHS82885rsjg6JujVPyMj8FLwdbBD12MLtwLFom4iP1d8uYebbn9e982uqQMbEJ3t1bPEFKQfQHJ4yHw",
  "key25": "FPdTs5P9aR137qC4xGHy3116c8Yv63hkxU8u18uTvxJxx7NY67AEtsAeiuqMLcMrD69f98BWfymxdiCZ6zLKBMy",
  "key26": "rDPHuDoLVYf4XRg62UQJs34tenBHeUfxhuKpDKFSHSu3UJWXBqz6CwrWRG8jfrB5Cu6vVHnsvwdPzPGUm2ebtLR",
  "key27": "5jg9Nn8GfDWwCjq9scGpp7oRkmTMhfhcwRVC2KHdR4cRMx7fqwRdntpmD9rE4xnQBtkRVG3LwNAGJAVuu31r2t2y",
  "key28": "EMnVK6957P6TKeXGNVoWkdXcS7bDfdB3qs5oSsTd5bRHBJCVpy5xuWNTYt5YV1AAz1uUVqdcnYyVGPSfT6c1Euh",
  "key29": "3GHsYsv396ycZRCp3wRqqogd9r4iVC3u1n1s5kmuZcLMHyNYFQ7sTWyvnThEpicyR5GV39jyGifJnWiDmwYviqnQ",
  "key30": "5TBjtVZCtg8RpURwEZ3tEQivWvpjpjVJuM4G1r3eYVzbXZKW1JBnGTJDAxTexrD59Me3QQWqfAkMUn3TG9AMPp5A",
  "key31": "51eXTwb2Z7VLo5J1wJb2WwC3oyTG6NUnHWUeanNtvXLpXUTc3p9TFh1JmdnpommYTmBqGCtPf7L6GeUtosUYMMfP",
  "key32": "2a3ogFMNYVKztk3KTSJ2ranMKvv8eB8cr8g2X3frPmu548sYM7qrD4VKNvRCcbCFDJNsCsDtJyQZ9EDSe3aPvUEN",
  "key33": "VNyeWVGYraoJZXcbe3JrKe7Z1C1E5eRZTgu2xUAS8Ms1LrvTvxG11miykSnkeiiCKPMRDtGkYHuZsGS8JQGsi5t",
  "key34": "rfSU7u13NzVhtcao5UQQd8BgLQG1NyGry53CrSAyCitp9yZBXKmgRFUj5wGh7DTeHdVpShYUGW5rwaw1q8SwhzQ",
  "key35": "3EPR6RvVPCfqdQ59jZAF2LcPskUSFLr5QnCto3r2cyU9t38u9oVz8LEU4RrGryKw5HYJfSakwmNidP5ecuy2Youu",
  "key36": "2zfzBW9n6WqoKbzycDL8f3bJxCZnVnwzC24n3soUpscBQYZzXGZfbrBKE3MJJt2fqjQHz9cctpMZdbdGdcFC7btF",
  "key37": "2d72VFXP86PmTRoKfQvWnwKUKXx28eRJd2k9yNC5JX3e4zyFnbQQKwjwgTUw9ScuDuzzWcc8N8GT5xB45FzuU44x"
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
