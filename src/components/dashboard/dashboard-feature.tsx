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
    "4eY1H5pgsvmhRjAz3H1Yz6JDVFxDfAkm724DVPiMRbTNGndBAdMTFydu1DAGfpv85brx9KB5ot5HECnLEZN4fzsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35EDP7WYe1uVPKpGGvsDRaX3CvFDgryFrM8m9gEQj3fbxbmdrM4WoMcxm2GT5iM22tBMskwM9onGzxsVUwTyfJCw",
  "key1": "5YEug8BH5aGzMUSNcZBsy4h9JJUyh52bkuBHA9mF9zXeo2NhNQx68z8uvmx3mELW36yyvNnJndAczyvEciGFJ7EH",
  "key2": "5PTScKG2SqiqdCbmpFb9KcE3ELyXcV39JbBguW3CZP73pXYdTvURBm9aBFp2gcKpfsaTJuGwdfNNnx3JtaeYatoS",
  "key3": "44fybkD97Bwxz9czRiLJCkvjDNSTwKirmXtUc4BBchzECkzRou25a1mAEpj2hFyvVPKoijoD1ru9uFgbzLycerB5",
  "key4": "28EKanV9pUgKE6zuFmZ9KC52poMhqY4gByGPCMsXc9XU7NhnLvEskXZWBBYKMegpTiqmbBEmKh7dfDdEXoxGw9qt",
  "key5": "4fQV8Xj5NkBsPf71pz4YEnbJcdMApgyzLpD1MXzc39ZQDuTJmsi3Nav484ZRNhqEUShJf59JJCo3KU61Z7GE6ovT",
  "key6": "32ueDqeezNgZAVu4FXNY8jf6DndRwVPpKTtHMckZHrmWgj4dXVkG11chT3emX8Mn9hepVQUogsrSxoo9HVSSZZk4",
  "key7": "44YrpyRNEjgxw8K85C9NHKLCYHqht49Ft3rtUoGi4Tz58CThBaujC2YwKB3FXpeDurdiLCMvnRKhP8xszemrv8aH",
  "key8": "57Uv3zMFKmuxxMinBu4JiaVVzTuYq72T8d2E4SyNP2DoAcCr3Chqu1Zvwb7sun8r95qTcMtzHoMpCaqhpPUgpeHR",
  "key9": "4mTijcCJ5C8oVEyEcvayzzzzMCHeDnUCzZexAx157ibTXVU4XSq3YWfdvjPHabySaqiPgv6a9ZhWmAEQSib7EMmP",
  "key10": "2PQ1RN1uU8rGac8bKvDobfjw5J82LkFA2uG7M6rcyVZ8kaTEiCz1YFYksGqNK9R6SDX8bNacd7yc7SV2FzbFFxLq",
  "key11": "3q5Xtsg9Zzdc3NzvY1a5xqH6UKbNwvDwhQtmRKpLm2vBgz1x6MyBnLqCcnut9Zf53hwiwZzT9qynbFzG6sMwMwET",
  "key12": "3n6DiKzN2o9WpM5vRyBg5tG3HjeuYJHjTPhbNUnCTYjGSxw1xAoJz5auBSJFckKfKmH8poPMThE4m6zQd9X7YH9X",
  "key13": "QGMAjCkmDn4j4bU2hmztaD5yLDwovxTcaJvRpy7MbD1CwAhRLp2HWf6ddYxLYfhPaB6fff9ST7KzZPy1fK3SazW",
  "key14": "4HwbVf4goJvWPh83Mafbtm812wvpNTD5LMY3igM4AbHrJ2iayNGZRRMTLEUthDtn42QE5BfsKLNRxiyFC3kbhB8k",
  "key15": "jgvro2y8CHSdUsKonG2W8WhEFeFbhKLrmtBe8QxMYhZ8K88MzeTdyQ5nphkKD332Nae42Kywr5cqAyr1CcneDnY",
  "key16": "48HUok6DAQfwmadXLYmjTVdS2NvarZC4xssa9k5iPLAKWuSApWyvMNQS2Rm22ktjwNUi33kiAnpSYcnaHPaE2rLr",
  "key17": "b9E2Tbrgm4KaRWc3rkhKfMAfQ8GfFvvmP78TnhRiNVs4peyJiXQm3CnkjScGMqpPpK75Hu5ArSKYnSZE5dru94t",
  "key18": "4wGaxzd5E1cAYPYp2fSUU97o5BRChLX6EJMQdBD4RPRMkQd4swXwcwpcofZP5tt2xtfybGXepVKtAWchRtDfTBfU",
  "key19": "3mcPEsrChJWc4UfdDvnDzpaaBjZuFJDynGBBvwjkLmbemF8EnBaJCb1APmxmn2tNf6ux3jRGH48YsBZnn172P2KY",
  "key20": "evmCgEzo6THhRHUFpWP5nH3YErQs6uowWbFfe9tWgSfh9bXZper3C79JCfswr6FZtZTcurawgwTHVPeGi3BUWxS",
  "key21": "3yBhgVavzJzuv71uUJTdp4vrJJGfqgTBgBd91SqhzL29FCDMGn7Nt9nNuzYwhzBND5TLve5enviW6r1TjFPrtrRc",
  "key22": "5wMRLuMAvTyUyeamiLFUZtg5JgdJjhWk51xsPXaPNyr1zWHCGa6ctTszrtBtpd1VFbiLUJuiNHfur67P2M2LxQVC",
  "key23": "2ZnMyqKQEw727BVh25KDUoWRg7wjTXQEEadfWAS4SD9K69GWnFtmUD8gdDyVTbNpuAjZaHybYb4r5SeQXYPyqR8y",
  "key24": "5qxqft9ahMb8wQe6wxDF8F4tHM9wapG82W36XvUUma5unbc6wvmRRzWHoZ1wzPwvMgJUjfCwVtTQoUuJVarYePxJ",
  "key25": "2jzQfDo9mRTe5UHRnp8EKemPnZ54Tm3ezDDFSfKdebtdyfvoVNvwLkFj31iTm9GfVd4WBQB9y2n9WQV1m9hXSmLa",
  "key26": "5HMTL2ddAYt5xj76NNtSPHz3trTNMeoWXhHh2JCqfAZrVom4ENGpyYrkfpsBrncciFruEAjBuKE9kDohnRZhfHLV",
  "key27": "3QjCemPZhseLubPp5qv6MSZKheA5MZNjdj1NHSduF2ANZjYVkoo28rTD2nk7GGEx53Vjj57D96EZX6B1GYd4Cvgt",
  "key28": "8o3UbnR1iFHDcVrV4d6ytfKQnkeKjtMjnDimFFuC7vkWJwXD8zJ9gW9X4N8dr5sDN7qh2EeP5acog1bWvALkeSg",
  "key29": "4jBQTEVkefVt9eWavMkVJHRCmQ91X347CM3SWyFnzngiEG7hmSZTKknZffbmBbCxFpd2xE8ybDRzqDH2swJx97Lv",
  "key30": "2iA1vWQxf4rMM8STeGWahUH1zGEsB6WMdFd9vhZ6f2ZdxnWSoKtLJJmwU88AhD5MJwXQvBoTR2kqGVZot3t95wuK",
  "key31": "33E4sR7L27pkdPhMkCn7Zs61pStn5Q9w81Xw2ivsnovHM9F9V1suFr9Hx4ycAKwaFurCtRRnFzxsAHcwpHXRPToc",
  "key32": "5bf7nNegJY9o4tjuuKmhR4PS57HKmNwJKKsUtEGGf5ounisjM2smtijDQbLZGgMkbdgWbbvPHzUUiwEMWEWzDfAC",
  "key33": "5YK1n5NG7bDBANtH5y6cfnt8Tav5ao9a4wUea1aP9NbjuwAwkRpEyeTazx6uesgJxPuhXFrbjMh3ss8RhcHFdUKJ",
  "key34": "5pVVAHPt4N8yknbXNjan8mC6czCLmmznWyPeezTXDZto3tmQK3vgGFMRRDnZZNRTQWaVZWKZVhHADXMwRFhwfFur",
  "key35": "4BsoxfxHkQRWUWRRCHXYyn4BAF7gMGFqnSvi3zusghMMgNkv3ZnzuP3L2SEXrmW1z2d3o8Rya5xwCZZ5dnPxixXJ",
  "key36": "2VUNN6f4956WLnAGUBWwWsFSkRZA1WAJV1xRuyNfGvBAsj1G9Q9t3Nj9MQTCqYU8VjzKZiWWeSSghm6reZq7WFd8",
  "key37": "2d3tYsmo6rEBjqmh4QaKdZGMP2SC67CMTX5vzyubLwA9ePshqthcakwZbTgku1KQGrFTrZGpjsg3CpFA31v1WpaR",
  "key38": "61zwngGeKEgjWfxYh8Syi1CdqijH2ryu8rG2q5Ue4eJTSufnVjFSutiF8AsPcqAzcxMXRHWAEiUANgbBVWwVPFvc",
  "key39": "4iSyx91YdaeYemShHHHKxkXBL2ZCeh24o3TZur4cBRicRnkJw7GgqMMcLZuAxnsTMseJTa3DmErtCFdzDBd7pCqS",
  "key40": "2EwwU3Q7q93zino9RVGPfbTjus1ue4tLE3Ragnw7fi1GFa9xBadoF1PW9T3E2bvYeRodhFSLFKJBgWRbqJpU4fXr",
  "key41": "4u2H9AubgZxmBEgYoENpaDv1ARKTKbXaCHiJQ9NiCYu5WnsxwahKZhmBE3YZxJdDEDbU6xsXyArykxPbjZWbzAGY",
  "key42": "hQpjqNHjxJuirxn4h4kRiagsP9TCqsWEWQQzMCKW6Sa3mmhQbjLdivNLXxN6nFGiiq7kcWvFo8p3RzfChHThYm8",
  "key43": "2BQDW4mKpGCTN4gbQDuqin2z5wAVfj7SCxocibHGLb4gJUcsbrKBhQtXVTXiMYdAwjDU8NcW6yutDVF6P6BwYR4S",
  "key44": "5BjAkquoAHwKzCZE14bJQfwi8JDRLwwx5ZCwvJFvnK154aGKX62k5Ln4B6BAKpijtbiwRFQiJ49rHHkHw4bUuWP4"
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
