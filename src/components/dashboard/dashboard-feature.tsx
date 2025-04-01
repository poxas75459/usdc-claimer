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
    "nZS14iBBxfJYHQ74GWG26RZfeYx5iyTfX6s5Ln7GQyBU7sxt6MYCUi6Lf7RAvLQ4jjCdn4mUW9pny4kZa2FpK8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CyoGsNkpV5MayhxzgLjHNkDAY2KnUbuagLuyVmHZxiNm4fDwW4VgrdopDwPAkoMNZGqHWYzmDmdrP2aNoix6JYJ",
  "key1": "5r1xVYtwxhgqh6pYcmBZQBNsp8jm5tPAD65uGhU8248MBpoDnkz3d6qp5YusS2GNVxDJAU8rtauQw23XRS3DZ2wL",
  "key2": "v6NH4LHMX93cH6TFTe3RjizeXrMk3xZaQ4dwJT4FLBKYYe921mkzeqNe2NmYAxwQ1sF7X1aVbHTkFFRd2bHpewu",
  "key3": "hx5cDpNVXscHLw1EWchb7s1tQhQ6D7kL343S9xHZLVAuk5eouj6P4hVs75udmEtHtSQuYjCBxsmLzRGXVFkLVAh",
  "key4": "5djpcQqMoKBeBtRuBPo9P3ctFbDRiWTtzReabuQo8nzGHmpZZvw2TgCyTXPKg7Ymm8jZqK6PGmfPNYHHMrRXb322",
  "key5": "5XN4TG7sFBtHD1fb4MubQJS4SNPToYYnpMW262tx6wFMXHqPGbrZGd75HnWogdSDA326xRQam4c7TF5TRHSd1wX8",
  "key6": "5ha3h39Y18fUoo2cecxfctq9g7WUULueVmV5iTh3hDo8ttUqAFr8edno1YeqCEvH5fZ9L8LfsXacrKFX3vTSwSRK",
  "key7": "PareFWWAuDQzkcuQi7fmrGXUhJxqTxmKRyKzNTuFrbuPWYPKaanMFvgatH425rcmyfgvLKFgF4w9D1TM8esgDkq",
  "key8": "4rVnC4Xc5fhH5MuS6gU1TbPAjmjPhdbGEsLZ3D6o4JzEgBPYzJM7kZenD32AG8c6FmowcBQCjF9Z4xEdCc4TnA55",
  "key9": "2vY2596HLgLiwfKhh9eZRcdHoBTWzsnp6KCWbi4ooaegW8wJxFDnKCMraugdv9v4JK9oqVLztRDcF5ZGfButmkt",
  "key10": "2GCgRPkRBU3dQ8Nv1aBxJwZuTiDHXdBAH7ZXiub6auyS6FT3KagFx4Wr8NXRewhas3iN71Aj7236X2hJ4BNdGNDF",
  "key11": "rd3Q1TPbFYNeKtePZh6EmVTQRGTLocBhFGNafLisa7ggWVwRK5HGVv2293s5bnsDvvVwjzLmpmtEVX71xDvKbst",
  "key12": "121atpFZb6FSxWWY2LQGW8NoZrZSzyVsRTFjCjKHco6pNygWmeqa8NSkuNRrBxz26HUsp49BPiWxuEpgUs1Vrcoc",
  "key13": "3YAiDASXqWftLSaB12f9Hj2teEkp5SHKy3FsSgk11kjmPHzcLgFd18o24dXkfPUKdVGyrchWLmJDiGXSsQpuhkfg",
  "key14": "mPNLfc6fY9Jy5wDFeawEf2GPmwoyx1idAoEvgpbvfbcuz2seUq2QPu6CNB8KQupJojS2Hf2w5PcXEmzL9K38pqd",
  "key15": "T2jQLbeiLXksaXKEZ97o8MDwAms7fJNDBK9wwogWmXipc2hKqdJxvB73AuDwqtLM5H4wkBBBWXPgRFGT3kpbb4M",
  "key16": "4JUVxqT2ds6CtZbigpWDE2qK3Ysrww98hwWGecRQHsPefD5dXR6kURHUmcfbWcD4y6s6c6EaK1V1zku3MSAkSfWy",
  "key17": "3RDWLstgFvETEmbE4bmTy5LLZHzyYRcYvwq15HDBRpnoTZ1qLeFdWrBo4DxyWrTvps8X31GdDEsnJGD5gMSJFfNZ",
  "key18": "5zYwkSgih5AVe6LTxh78K4bavGrPFHVSxuhPBwYPyYqatAqYqahtxUapDbhMTNnoZFsN5r6n5TxpaLBn8q5QDgYL",
  "key19": "595pNuBMDsoouDNSBCHrqTaHEsgr3WDkkQBbK9z4Ebb5Z9KVxFmaJEETHhxpBf7him2rg7L6FjRSFpkWZiriUwZP",
  "key20": "2ppv1F29yYGALGYrrutjXn5TZCskP9CA9QBj6RLcDrNCDtegDp2ds8PDR9R42Jpz2eQqYftRKDyV4D4jcdpXidvN",
  "key21": "2rPdmn83yVvfPCdEoVEBemV3f5dTLbcREsc5LhLifpVSqu3LuDmam9eFp2m8BQPBLtNc7AKNKUfsYRT446a3oWck",
  "key22": "4Sf3qobpCoPWUqZw2MZJgpMAdGze37TocNfL6L3Pb24RssjNyjFRUpSwEt8cN2EhsKQsZ5Dr9FJ9UHv2UukBRqWP",
  "key23": "26QHjheZEfRCMND866Bz6eFiPedQS5RUgJM5fM2CPS7wgZ32A1k37wSgjVyDJozQ1QKDGiUdUyzriNMNYpSFKHYW",
  "key24": "3Si2oHGZf8i77J4M2qVicvEbjyc1Etb9TZqUeJRrMEmnQjhJSjSWDcjq1AudYSf7p19ccsu2pisjeuyEeqq5ZZDM",
  "key25": "MfLrXoMqYNnrQYsFKiy9b7H3egsUL5sg3g6wFtMPSpfWYhtMDii9G98RGtCt7dfYwdYy4xjfQbqUw3v5Fm9d3Tx",
  "key26": "62SymP7mCwMHA66y8kuyfPx3TdRSMsDMeSxfVnmP5H2TfuvTESVfEsDxjF8CeD77m5uuWnQ6orYCzXJUtftvq4fU",
  "key27": "34sA5AaBUCHMNfgmqcVFffV9dw9jTz1Vv9dtH9zvw9AC7voYBorFkKGFBJhUNrCCbVe1PjyckE6S6DeT4nAhKBYv",
  "key28": "5FADNEVejnkgKbtTDNLHdmzFFs3coPxEZAqUKMFgJQG4hMe5EuypShTk3QPupyuuvtj41QvT4KaRd8enZURuFoL8",
  "key29": "4VZKifT7nGMEBKUGXBeahXoVmT3zHuN4oG9FCRBMTNPmbRxwWWq1RxpqeZBk9La38Qd6QhbQobhxVkBs6wWhomyL",
  "key30": "32a2dKHjoZqDCooHVc9QixbGdo95JtNqabNEuWqunnHxFVVgfrR7r6Hm7MScwDoz2uA4eoCzZ4x2NpJDUUHaGRz7",
  "key31": "1LLgyLKrFdHKZDT3N9RZkCQXgtSqYxM9r5UewDwBrjsK8uLXMavap5BBoe9TA9uN282KqfNRKRaUZLCdAQyY6BZ",
  "key32": "8pwBWXsmWwWFNHgvjy6JRRVmmoY22ZdYBfuLxpWDzeFJ3FPJm41qrNha8Cot2WHqVr43LkAMUzin33GpFqH9Fk5",
  "key33": "3cbbHjC1VY9ii8VbYsWiUh7kt5ECNZaGGFnwJTgUtGxi4Qcshrp59q1cExBJsSnKLQZZMyhnykGPQBzhd7GuYq6A",
  "key34": "3oEjDPJCZm4PyPxW7U2TgBNrcCdRxLyvKWzYPsJeKdbGk8xddqsFcrZ4qsRYZ6LX31buo65aMMBvn4ErRqYDZFUz",
  "key35": "2p3AKvYN9ZZtSzSrLzLz3EduuCBbRk5xknpnMYj9Dqw95e7FQPdmGiG7TmRzUfW6UBLmSSwDkS78a6pWcq1HJ4UX",
  "key36": "JWvUTBC57Yej2h5AxJz1gfvu7mvD1TNWiNAdFAWSgsbXa9fKzkxPFocyAY23mw4PVxiKUeXv6hyy51u5sh4WLdV",
  "key37": "PMs3RHKSNUQrppH39TF9u5K1UikRvpPBMwGqNh7sdaw6BcvXLtHhoLQYHMNvH5yKwVEsX1zLjxqrGxxfH1HC7ea",
  "key38": "MAa7iMCVFtQSrVpXjBkCuHGqTsXPajziCf5uf2jDJdpNZHw4SdnGSqjSSZY9NGrP3HFATjyUddnPU5nQWLa6FxS",
  "key39": "g8a1TLq5EZ7hHvqLtHno329Bbe2fQrZt9VrjBC8Y3RyY3CrEvhuMd1PvXTRGeYPgyJfbqMnPfYGg84CwEtJYcpz",
  "key40": "4qQizJuXKSUaEJrYVqdvZz2Mg63jy3YLhHzU6kv78HnifEzFmx8Jsta6NbicUFsaV44vzShpUTQMtX4AncZBMThL",
  "key41": "4XNJ9iVwFgh3dqTvi4CGcninN7GXgi3jVyKfGCNes38Mt1kyafF8w2Hbo7EkyjWifDB4FPVKfBZFiBy5Ex3FLLro",
  "key42": "4SSSgaWm6Cq7V2PQBnQQ6vLredEyGFpbqJEAnyYigWeJFiHZs7qjW5ySPhyW9U2pS2GUnT9i8Yq8x1bVpcbLkvuw",
  "key43": "65ziFfxk6F7BwFtoyLtge6B9nRok3evNokJgYDqb7vSBr2fv6uSPiiCqiMJv4e4Gyf8zxBZeb38nHoHnUSbN9mVv",
  "key44": "4wCgZhaLXLvtp7HsnbVzPhdxc1CcMfLnnWAVZMDGhCbFFe3LkuJF1RuMsqJFFa5mtigpMKfSe7EcJFmTGEpCUqVf",
  "key45": "2n44VthS1xcAPZbehn6HSA2fddHKynmSkUE9AiujyNzNTNgjMvPbfi1juq1WxAnLBSThA1wFTKeEjPHkvogm9mgG"
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
