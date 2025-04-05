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
    "3JgqSq7BXYRbExb1J5orG5d6gNJZsLWhkJphifwy2v89tfxrvYBCR4vCpBZDWxTXXe4Kxupr4txU6wqqRjrHrsVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9sHqLvHgiqMw5RnpmCFabfbAMvQXjYeHXbGzMKGEwwEGWbETuukZmyr271RkmtkzChiWseHxCnLGZk7S1czxPVi",
  "key1": "3gXkFpN9P6qxiSdcFB6jYjG68bQ7B7AStDQtQivw4SBNXe2b2TKAdPiH6KG4m48Fad2qMs63wbupj6gKyXVd9S3G",
  "key2": "4EXwLBgCLC9yYU1qheVarpggHtLupEvDH9j8AbsnFv16P7954DRG8XcWcrD2jZVBZekf62kFPegZ8VUbfaLFRGJP",
  "key3": "cqiTphaCWd17ko7kpDKMot37NYpuPnZVTU25uG1ifUPucwhefgJy5SSfQjpmvuRuxwZJSkAs6h4zB6wzz5CLezG",
  "key4": "2WcUr96d6Zq3SeCiipRKvKdWRE42kmT37eqWU3SXn4jFP7Z4bdiSGWbzAwZmCxEAvkTncxELRBNVYoYYYKt3x2WK",
  "key5": "31uiNHVk4Fc98uTgSWFpv1z8W9uRbUJy669vDLzTuUSPAUETkk7itgyLXH8g2NQMuj8aMGsXx3TpcxrjCBNBxRLY",
  "key6": "2zvtjBvaXoifXSpjdpN6JEreKf42RH5tDhxVcC7NdzPDvLbsWuxa246cJchHHTBFKiMXZBR3VY3jCmpsvb6HNnPp",
  "key7": "iBHANsdrsrn3KC3JaXKkfaY42cr6xcAYJEJGbSBGKEQLUfSRQNZcUuTseEQdhsa8ogZTUK9GHz4QzADyqKz2kXL",
  "key8": "4tQdPgYj8ej14wwhAXxyn3bL5Vn11F9cb1YQaNkNfnWrvS3CSBrY55Src1iqjbqhjvsw6MV4USmXNDteE1AxXQr",
  "key9": "4PrrPXNFHxR1WgrLsR3np78nKL6H3pGAkQSwAHjuBdUhVqwSm2AVfWY6JBQdeivYnZVG6AtSdP5ZTAwJSGqiAJ2C",
  "key10": "5fAVD5czqE3PUKtCqCiXRahMYKaeYMLej9WLwYTKRxVuozjzpsStExv7sdcVzJNAEL8WWWxP2AnBoKJujyAFVJa1",
  "key11": "2whsNLHNUViXembhEQFf9fBMtRZa3gmdWgAV2bpFodwdcSJPFktGYGuGKP5h9rRBEjMrDxjXuorXp8v2PdKuCLcQ",
  "key12": "4AYjvZjRJEDcxBuoEqm9hYdNyhxSRvfodiecUMVqdhkcL51ZnxajgvpCJbnneCT7A3KKx6z8xrgksj6zpPMb4g63",
  "key13": "4qNe2E658wVAoBDqRwHmTRWyGUQxV1zWsmwzGGocCEszaHyFYEERUTJbUfM8c3Wuun4eVfvgk1KZ2cwbAnxUyKEU",
  "key14": "3GkUw2djztTaCBA8Qz2AG5UUeCEJ3UNi1zceGwJqfXTLgiSaddLcSyDwH3hH9CiCzu9ZhDNv865jZZpypuoZmXpb",
  "key15": "28E6gCXLCnWge8LQy5L3SQu5mEG5sfBALArx386Ygd2gByPdSk2Dq8dKZ2MQbhBnDBCAWCNJk728aHmx8ZostcsY",
  "key16": "ACom9y9ASKR2xGvUC4Tn8QXwtoBFWaAuf2JPHvFgpzrWJyGNdUYT1eyxhYfQUTrYqui9bX84oC11MGyGSbU5aCe",
  "key17": "5vxVGjvyd3un3W148a4cCu9e9v35EKGjdXDpAMqEmFqnZvYV4wQSwwvPLSSZ5nAtakPfwDfUg1QWGDh7q6D6r8dw",
  "key18": "4FdR4zTzsipLYGKEqYXLdZRzBFcBq7wDv5n9SxJG5v8xEsahPB99C2omE5nk82sEkFgty99EqwRGuniPvD8RPPNf",
  "key19": "4Yswm3BZqfA76Tx2HQ5PvT5TZ3J6SUVZdcVb6B3YFzKNxJsQWwYEkikvAgy9SsjLgZEbYbbETz7LYWLKwGz5ducg",
  "key20": "61bRUtFp4FWrdJRw2B2BruqWdvKnjs23YWhmBiDAAkjuwAFdY5nLymYCNzGnkRKLJCXkZju24xpQadAGGxGRvNDJ",
  "key21": "2Ztzh3VNk3EJkoyxnx9ErbyXQMFonjqMzoyE8xAeLhBYW9Q671dR9LBPmFrcQsGPFQxH8NikJZjzBBYsJkkuRweF",
  "key22": "28GaqnKkHRwrkadn93Dq6CyVF6WEcvFGx3UEFx7rAMaPRdxVLpYJqj8JocVw7RD5HpPqMDu7ysUvM1jsg1XdNgGa",
  "key23": "4stCpPkg3BYrmu6DG8QLZ7VZT9aCedBE5JnLrQoF9oYST9b4DXUngX882wpMgiBFWhm9c5DShskZTQcAcKDboZPE",
  "key24": "joc6pbSyguwwQj1YA5x17K8bL6ugUgEWKTeH4nKKNJyzuFuhcbJLRXZFJUfo5FMp1zVGE1AXHvHGugF2KnciiLg",
  "key25": "3qGHtXamPfKAekxZVHdQ8JwsC8W1MCdnVNYtranxZRibZpUPJhKBFNCD3Gib8DbervehKyQrQtfPHrCrwq1sxSBj",
  "key26": "4YLu39PF8kU2nMiRMiG8Ncs7EHjgBGmhivhwA6Sp9XXoVQLrjHtdmGM59cDHJHeF14rbvBHPbDftchwrdY27Nmc6",
  "key27": "4uGfk1sybYZH8oBEiQ5z2dLE7T7g8nxZfRcd4W6xdyqpmmbVRK6rVgPuCYbJxAfzfogYdD7aJhzdRm6RKCswMPhL",
  "key28": "rJYUJ7WDTdPEmRFuXG3qLfqprH8BAkME8HUE3vAN8LVqqMsxoCFYm1zcpQUD5SZjKpT1ayANa8HpkUJQ7v7Jtsc",
  "key29": "49n9CvpvCRYu7B54mRE7HNVFTspd82J4MyupqquksGwUDZtFFLKmwwhTPk2c4mBNkLfYNuq1dC9rpeb7f4Tx6Rx5",
  "key30": "AUBiEWQVqcezJdCdq9Beb6CkwQAKnnsJG5itka45gS4MEZM1wwe8o6iez6U5rP3iGWiGvpyAxd28qb9cyF2E73m",
  "key31": "5EMvepdySoWKpZP1Yofe2NNLVLeFGT6F5oc64cVFVmPhH42wM8suEtcDJFbm8A5i3vKSD4MK1nzA6h6C3R61bwtd",
  "key32": "3VmpgbuNepatbtzFEXsrq2Ta159CfpeNBe15HBhMJfN7xn5YaoRC2Z3RgtWvtoH9oaoPs7bf4atDB43FAyCjUeGr",
  "key33": "2TgUYLkQewdqaTfxzG8FPQdSnwrnkMjic2VHqDqt6S9SZLwYYKCVAbrizfxSEmqQ1kSkZeyi5kXfHPvqZBryLSqF",
  "key34": "343goC1ZWnDeqmM59tPUXMUuFyGCE16E3k8vUat8NzxfUiShdPvutH8C7SFMAYK9NxvWkbZ8EfkKG6oLNtMiaw2K",
  "key35": "5VomGa93cW3Vs1RdKPUa2Hi3ejkwzyxGVrPsVuamVkVYr8nFrxcExGY8KJWV22vcaXLgc6U8piGq7ceP4mgFB8mg",
  "key36": "4LpZgAvpyGfPTeD6qYdR98hEHoJW2Xu7MguDb63J46KConyCJY8vkbpk2ZaoR9p7zJrL3bqAngmRSMpXwc6TBBJe",
  "key37": "5E9LKBJ62QiH4qQAzfmUKTjtgWi9oEv8GfPNHdjJ8yWhhYxHGUyKm1eoTf7ieLYipUzwRV8EzYiAq135bjbiRMey",
  "key38": "5HpWP5G8yApYTPiSVNRXAUodCY8oL56zwPgXXYPdYM3HNx8xe6VYt419vpUJLK9AD5Hj8Xad4Qo4YDw1e4K8j8RF",
  "key39": "2iozvRmNCW5iKH1tiMyNugoj2iuqD4FPZvV5ShxCDYUkvYAPvsybVv2uXWXYxybMsFXimZqMNBbp52sxMFAZgHbE",
  "key40": "4FZkGZXB4hAbfSF5qr3xDcKawWppM9FXGdDt69nQz3fkoMgFL4Lk9m8w9BC9bcHZMFnAAcZGVJGWLhebEKApwp1K",
  "key41": "2VKYN7dMoQW11iheRiAaYUkejznaRfKsCXVSQwMKEnYNXjLUWs4tPu9oA3qNX43JDvK5X1tTjE1MJB7Zwy1KpHkR",
  "key42": "4Tn3FScWc4n3jozQRGNmU1bX6i9axTFUWAdnBpAunZQmE3fbwTsUj77fwhjvmso9yXq66YwiQZL6Aq6rU4tyAzLe",
  "key43": "2GRrc6crzxorMsB5TPyg2Vj8tWWKnR2cqFnuq6mFjeG44KskS6AVthom6Z9LptoM1Eri9tM9LZKqoJRedKvzesJi",
  "key44": "5GJHndZWWsrMyhhEpekBRA6SmGE4AceS8qwyjA8wJbbtgE7d1EEN5it6nEmeEtNLMhj7cJ2uHoGgFXgzCSH217Jc"
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
