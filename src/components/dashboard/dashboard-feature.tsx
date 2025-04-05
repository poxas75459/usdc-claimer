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
    "5dKxmKnG8r5csFySRjVfpE1U3TQjfwoLq2SYtkhVEBSAED6nf5oaK8GjksZdppgY3NPAB6PedoNvWTsLF4YiXW4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wevZzZW38JYEe8v5PtkeUcVbxEky79sweSurysD1ziAe8nXUxWzppPXXXKJkrRn95RmUEiropCUtKSY4JrZPLQy",
  "key1": "4ShsRw3aPHUauiiGD5djwQ5wmeKtkRSumN7MUcLu93KYGYNTfkRBT3m6HE353k5w7XjLxFRZ43dDSCmNk11mfMrc",
  "key2": "epmTCbrkQpjYzY8dHxJn4xnZVw83i3fsyPpiS5pyanYLkxQZxKrZDGpk48eQDUJaKqA8fUQGEu4eJrWGct6b7bt",
  "key3": "2HTQTFu9WX6F58a4LRy16Gn2cjKyXqe4NeYQLG9xuXm9gRDpetDQyigANXZNjoUm7zmDR7muEqYjQ3kTvFgMhvjm",
  "key4": "2bP2HqqmdeKu6D52fxGCnj6J62hFYigXJTaemesVtkuCLAiJfh1haHp9wGpMjk4GhomE3LjymDuo9Nso2FL6wXEt",
  "key5": "2rpNmhLUhzkDwj5Dq6J7RnHQqFnWJp1jcEV7pDVjFsq7P3U9GkUKWas7SADDjkbJQzLk5LX53R6FUJes15o3FZCD",
  "key6": "2me2UqCnsLbhYVmtxzCie8Ai4BwWswTFeSyF93BhwvGjsdQHtWs839vYxVq1MPw3KjugksG7o7YHoak4nSJe1xFU",
  "key7": "4sNgmNM7TWKY8srCKpSFgdUayS6nBewTC1FdeveeNWMFrhw4qicJjwucwJvibEhpwXwpCqznKXqdVH4veH8GMM4n",
  "key8": "y1GzpP1WN82A1wK4rFTWxprb8iEizixA5UHh52K5iu8cBT6XmHdwsUhAesmc458XDwbcmygs7LFZaMzAZpyXz9X",
  "key9": "5AeeZ2twEF11MGzAe885iXqtmycAnSx1kWhyXbgjL65ZSXSRm12nZMuEnvap8jDgP8At5FsGkArugssN2xL5Soir",
  "key10": "f8v2uzKi9beY75Z7VBqnAiVUGsLi6cQQtoaEg2DCFL8yLLraj8kLM6QATuTGzcSBCq7rttpDJkFAF7BB8M9ts6q",
  "key11": "9AeDVNuvbFDd2iSVGgAVTJ4MiRTrMKZguJUFftbeFmoeDeWe8pmFien5mdTjEXCbY8EXoTNyDGz4iYT9ZbnhBG6",
  "key12": "42jUPK9THi7mV8gL81T7rp9kbjBJnjvXpeXkA4nsmV42EF6Si9kGCy21Xr8wzyf5Uu2gEoTkfGGsemfRUaSiQcJd",
  "key13": "4B7T5kDhxkEdze2FEoNBSon1pZbMtosB4ku9U9aLLgzp5cwFznGDASXbjNoGMpFF72y184ndRmnj2oDSWZGHXkMe",
  "key14": "5xPqtf5Z1Zd46isRNJiht4JQ46hSAn6NzqhyEMiWtePjNfSE13SrhcLUDr9qT7bX8qgods7A7sFbEXR8fB345P8p",
  "key15": "3mCPV1AvaCXxLzRmPH1o9WNY2oYJsDDy5o4jjBhEo5DVHtDHVvCrJSUxqvm97xWZiu8bnLTWa2MDVtkc3VMSrE15",
  "key16": "f98skmEWFawUKFfmB61929S172BaDo25vrShNyjApnTfkEy94miqyCDmNkSWjYy2BNz1vuZA8PkRydUAxiciArM",
  "key17": "5P7kiW878CFUWaZy5RUNzNp5MycKedz8dYKHdM5hbXEXpNcePRwjb3NCwRpmHXVgZDorUa6gx73f8pDgttiN9Fba",
  "key18": "T9FY8znsv6GbkAoTeK2rehTLRyQarSnGetu1gWHD28bkEqXkQdu659UVfjyHo8sisNBR33kR3j6S4cSBWyv3QrF",
  "key19": "21eWQZLaZHvTemy8uKGR41RCnHizGikFmepsFreW8i7BWmYH9BU7f5QeDcYoHoVdWgXbX6njoNKUTFJ7Ki5qu5B3",
  "key20": "3gX7jYDVtYSY3RfKq5gpFaZjjp2eDUG6jYHxArDfVYpByebXF3WvKSyAXQ8fTPqGEUi8YVWywCajQqesf77ow6Ui",
  "key21": "4zcVc23HTdxsHD2MHMpY1d5wtVRffmdwk7Sx9Hm4vkW5WamYHrru3G1YuVYDRpkxaBMUUXAVKycspjieoFa6VCUT",
  "key22": "2tR7mFKF1ka9HPgAFvmQGvmrMmWTMYvpH3R5pnG2AT8g4kejRqFCGhRSTh1WFYBqHDsCQK9NwJEPVzsfe62bxeU2",
  "key23": "j3TequEqxTs8jEAPJg3vjYjKXmt6LB9yzRMczuss4SPWAezHsRNp4M4vk4MwFkFT3KU2BeQY3RuRkhaG1cNbCRS",
  "key24": "5qrXgJ2RiM71mn8yLod6bhDRXVN6BAZT27wAfvg38ETeGmPWEFMoeiv5x7mqFJQpMr4X8SQTheF4oULTGqNKW1pi",
  "key25": "p1hnJJWaUiKdghLXsn7YYGobv7UMRwhyqXiG1DMjd85Y2rC9qkopA5fY3C8ALmxFt3cAqVaoLvSzqDzfxz99PVa",
  "key26": "5oE9W1TB7beQ2sTagfDQF1aNghUiVWxBQrRPtUQ9W1jR5vscydKCC96pAxDR5ntCzGbvFF2pd6Mg2nHcKDXgJXab",
  "key27": "4CysdYqdTqFxbfE57WtuU1d87pGd5jpNDFrMv7BjUWRGJeUJMuTffLSLsLoZ6M54MJhADfNEtpDeyuHJDuVVBCSX",
  "key28": "ZkjWN5gqjUJk9hXMJ8ipHtsDXDQvR2uEDrgz1BfnRTPjNZ2DuANpDaMuLDHXMM6aBB6V8X5ChAeyrYUhrZmBMmF",
  "key29": "NHchUnxbJKHt1m8hAJ7L5TnKK5kLun8S3SK9SGYm7grnzQACvsHyMWTB4HzyxKmz9JHENoC2T44PnCuX6v5JvPk",
  "key30": "5hmbs49Kf6riqj38Cf1qJxfs8AaW1ePxDpYULemXSdS8bia5FpaAtJNPt1Fdqp69gMaocPQvQqN3XemzDcTEKBo5",
  "key31": "3pVEk7TVusifxaF8zPzRAHezJP76n3d5vjtmjVTqVRrXsw5KqHm3UsTucQQ1EbsetBZE5qA4BNht4F5VQkhymqwz",
  "key32": "5Cq6Guq1gVbufsmUGdnGkmzpTUeRnNW34WZirJgTnV9LSxvBqi5MtnytMT5f43VzVQUsPin6oh7Nw1CmUAm7WRg8",
  "key33": "4HcqiJZ8fHgqoYqrnmXcTrt3U3e318HM46FWZBvBfDo1Zggg51B5WMkHpAPBcRQhtW1QQgeTnWEhbrjW8KFgWn4c",
  "key34": "2QgkyjozNco8ukM1tZMWcHpHRMcK1Y2z4ZNdPBtaKR8Dd75Bt1XG6QR7cyRbd1Zz43bkjvUMy3P2xwKV9qci6DwC",
  "key35": "3STsGjaKYXaXmKKCi1DF8dZ22Bysd8Aso8AAmfjuvLeeybzaAqzJAVqPGUNzVLBF4CF5cfU2FAn7NgfrQS9MHAqr",
  "key36": "Eya7mqz3ynDhRq8E3NdzVb7y1xCihyqfNQ9egY9Hes4hRiPdFewyDEquF1vfysWD3y6a1tjdrEay22U1yBzy4ZV",
  "key37": "4zDvxCXPjdU6m2VkPk5cV6wMRTTQpM5Qico6FfW3ReQDHm4SrCUBKaVU2TSQRgrhJdmXQb2hVAk1JBqGBuG7QEen",
  "key38": "2MSQza2SM6TcTWjDcGRunQVvcSdwDyts7uMH1niLa1wNPK2ATmMq1zyV3LDWB96L4QoQjLoAjuCS4DEr6jsjf2Jx",
  "key39": "6HaXs18fcVyfVvA2RwpCTMoVXSELkULH17dUWNe9fCMYDvDNwphexdryXyKb4epcWeEuQjpjY7o9FyJASHvBwW8",
  "key40": "3WyrrR4cC1gdozQdKi3iS3vunEmkrgtDg36fxGNj8SonswK2BSG5adgjw9Z7d6Za9SZL4ZR8CYDqr1jc2h8Pb7Zk",
  "key41": "2KW8Dp8sy21h858zByhZTShsdA538L71pfJi4qqesdWwf7tEzswjxbJa9UnostU8QxBA3aaUmDAb33zcDMgWj2xV",
  "key42": "v8bC4bxdGUhU3ZzWZu9XUGXF2a998dy9egX1HuRkXzjfJMdHFH27zETdAeW9ABvJ14aDcVbND4kp6TbDXabWkka",
  "key43": "HWGhviqiyvQvLyGAh8rcJ3wq4HuJq4fBNsSsTT8YgcviTpDcGE3EaSrCVBh7NrUJ8cnZoxysDkRu62nXyqLSy29",
  "key44": "4xLMzCBAsdnuBphL5PjU2ypTuaKvBM2rsL8428rGM6kXg3dDdkeWyJ4uTSdQagXU27SM8PbEDmMV93w3Fdhtatww",
  "key45": "4oqq5NZtwDrWaQHg4bZf1cGgfWJVjeHwr6RvfojBxbv855ufLMe4MzkXTvivkgsAyWYShY3nsYUAQjMgPaYSBBKW",
  "key46": "5ikdYcnFF17TwZAyoVkvggNsHZwv9PYhugPgbCpeVR3VhjddL4jMAvW8Qm2PFjQHyMeDuy1rktbHxDXYgZMnECgF"
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
