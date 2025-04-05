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
    "v8jiM6DTRVZmKYFyHS9akVuZtL4jdFGtFfijsJ4AWJs8oh9TSTvKndtGJQEobJ9xvpihisGn4gf92LUeE6gVpUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZWPCxoe886NXhdaNboGDUmPeh5S3gC3YznhX71vNn6FWConUdfMKjeMQ2EZqHKHduNRhTw1parKUFBJ7Z19heeD",
  "key1": "2ay8NjfnCVR4sox7jSCKrUxmPmppjdudABXBShhRPqCDFYfS3MdgsMr2qutLKMTGCpnqYafVfj5AbkxppNz5TSHW",
  "key2": "AHtLJvn3nYGvwspfgXeQB9Zwhx471BgjiAUK5ZNP4m7tRX75WpU93r6ZRCKuD5vDxNvorZCpX6GKhq6CkGVcf6b",
  "key3": "2rHq9wF6XazonCJDWeg7fmjdQ5mWsqiPJJRGtomzRUkYr4BkXJrYwpDQ33zoMaa1YXsept93yJ2ecYcDMUMApS4r",
  "key4": "3ZLgYviw3GY2P45W827Z3qoeGdgLu6iZqVERz3nBPa23m6NF4HFE5ajibqo3Xn5YMm6LTCgeg1VGJgYWicYRsodB",
  "key5": "3oQ2wniNHmjcwFTRMpCZoD2uMCiNWarpYQQmof3UKiQjCDgKxv5Awp2wEwzZLhijoKhqmBuekDqPHXdDCWK3VwMA",
  "key6": "2aJBjPFTqKAwrj9jpUzLx2VEfQoxmKf9zBsjnNux2H4pgJFv5yghpxGYcQ2mTzSDSHtgjbfjx8giNXmnfPVrqRm",
  "key7": "2hjhAeAgKk4zCJNLF8RqCeo452X8a6ULDdWFxMHcJ5re58rmgkcP18tqwwBfoPbk3bchcKfmu7CdSPHewccVMgKC",
  "key8": "fJJcfHxMM7SAZPBNKfzZGBN5awLZ9PPmbtBn9DHfDCuCmWEgsWETShEB8HJdFjoxsopgrhR2ihFYFcF5ExBUWgm",
  "key9": "3pySr91gnYDDCweK5exkQZvvD37GrdZ8GjartYvtbk5aX4y9RrxSnegJMTe7XxYyDPCW7ctQJ6rb4e7bNu8EQ8uK",
  "key10": "38de3eHtBWdSWdx7me7LrJFhFMUSGmxJLTWEYW5se9nZXUzmLVf9Ad2WjmuSxzcGmmPZKSePqkpxp4CtKUtdWqYe",
  "key11": "2Coz2teAXLHd262S72AiFvRGzkR6ioLQDFmqYRpHbkrup2yE24mbJzbBKpJn6kAszZ38RLSFHAkW528Zb5JSQMn8",
  "key12": "2MNkMVTkwLXtemRhTg5Voyfop2exPEy59c3QDqEPCS3yC4mMSdfyEGthb5PEVgB74QBJaH5yWGZtasJk8sZq6V3Q",
  "key13": "4UanKjSeoYGJFhuYAtjBTgeQLHA82qrNEhdr13rd75rQMx9V7ZaWGdVtU6zdFXBytmrrZf2rnzBQzS15q5wAemZE",
  "key14": "4WtPYVagcGrXCp1UYuRzr6z6KmT6VKmMr16hMx77VZwRu1t1nV36E36EWwG4dsr6RVof3K5An1Kgx7YZT2Sj4uVt",
  "key15": "29Fp9caq1rQsow4Y44PXXPYB5Ui3n99xRFBhFqQjtNXQbSSkYD99VTCtkSr5GNi7AEReDi3qnVNsZVVg4tGGE5xk",
  "key16": "5DL4yWpH5RUqfPpNJLTUMjpVothhnggNm98s16PLbWJxhaehm8LdpTk2tuoEtkb6rpYU9tm5TWSqM89UpHLLB6pb",
  "key17": "59J5iTnULzT5CvBzmvdkkdpFYEbHSzZBCRVM34TvQokVuEiEDhUA3LJQwCoyDvf7rWVqBF1adx7iA8DYhE1fyxE4",
  "key18": "8NJjgvy4Y9Yoe3t2G3P2gL37AtGZP8DvzvytdiBeFckbVbbLGNZE8mfcTe7mi6BgoPLpZKPp5BUFYQxW2E5WFCS",
  "key19": "2U8nRZQ3J1iGiSzpWxRWUua9WveAwCkC9nnfyJFRXgmpYdW2kZLfR4VU9oaYGXckKM8aZ16tPbZWEarE2WCMPdHY",
  "key20": "LeLYntaf4y6Rh6KsKgT4uTkCzo34tPnMGfdq5u2cw6GmoVkGvmmCDRrNRecHuQvg7ZwYfyKVaqc89dNcbALVn3Z",
  "key21": "fD9Ju5VEQHtVweMkVVeBwcaANq9J4FvAMpx54F6W1cnENCwFWBAYTp2MoLWJR86vkU1q23ta2TxthBPaxrZXupt",
  "key22": "2tNp3BZAkWwaCoVGukvrLJdZ7NDriXN4u7ivKPfpUbBRSdZEHNMtVqYiHcG9hj6doW8RkDmkwLn8xv8grpiJSf2K",
  "key23": "2vKyH77TSPaV3K8SNw4DiBmRrevf816eRb6vyTGLWdFNzKUNYmaVHUxM77agigQijXpHEamiSoP3SCNtHMc4eHKw",
  "key24": "5pV4azYfrBH7PLEwWHokzSt1FAkUsmP9Rt1BqHNhSggwyqS7gyDYhVmok2aHfYiE8ovoBWd6LxXEmoMb2GoYDFrN",
  "key25": "2QZhZTuTxc1htvJNxQYT1PJ3En6SNEUeUwcsi2Wy7KsMSyts6xbypLQhUSFcQjbYNrqGPnBZVpqcU4ibfdEwV921",
  "key26": "3t6HnQsrgVrfkBmGmJqG7GgwTEZoKGiPfzAnwiyxCUTcmUthhGuKBf8NEBtxPDKErp2FBcBbJdxcy9VgLXbF42N",
  "key27": "26RhXxNAf7tDorNoo3uKWRWABGkYSAvDKkXVFWnnqs1weQ7SnAq9UpWpkKdB4MU3gaRsijx7fMop5YdT4VT9oKNG",
  "key28": "2rPvuLmAwP7ZbaFGwZze6ibACpfHPS3MLMSNEfK2NdbkZvsPmv7tYpNds1mRAYeXZ7Su7daiTqcPPAD5Pe5pihKT",
  "key29": "2rrFHj4qqrThdG4Ld7WDk536KaakhjkRoqVyGe4CMmpGoAanofwgoEy7SiQ4tYoD4TuAacPvZVNxECcm8dFyQw5P",
  "key30": "5nX7s9Ze3H8wnAsydBoV3YA4L1oRieAfNExVfx2w3aQA87uhQUG1vkxL6tFq5yhKC7ksghvnxGFLovb85w9b5zxS",
  "key31": "43GKsJTDHnjGWSPYLgbWeaHkvB7eWkZEDMBPbhqY8z2sn3TRym89KHGQt13CTQX6aBCUfihQcLqeP68GTk3Xn2kX",
  "key32": "wVRBRkFTiWbnYfWYZLWmtcu9R6ikKyvotazMFLBS19PRyvvQGJasegtBaEXVay12Y7EgCdDUTFgNzLr5FhSfmXL",
  "key33": "5UZeKi4vyARCsBK2bRaaqZQC57xfoCotRThE6ZD2bLN1DJGd4FZQ9pmPemCwcvuWQkvNCyCaCTfMn1QWiYzQFpdb",
  "key34": "5iPUzQscfzGLvimzgLQenp7tEAxKrmUCmFnEFz3H3p3ZnWY2AiQAtVEify2PXtgALsjk6cpQyWuHngJd6N4PvsSu",
  "key35": "4fjtfy23FzZP9ZY9YESKdHqMKRFsc2pLqsRU9oKdpitRk5eD9q9T3GrfV1H8Pjbvj33LACgtSVmN7EtUce7RCzrZ",
  "key36": "zdKAsCLV72Lju7c4P7RVffUjGFeqF8PoB5QNp8SD6BG7oZi3JzXQhU43Q1YLrjDQQnUg3gwt5Qafh9pTEZst4Tb",
  "key37": "2hyHzkoK3oMvDV7QfHHo94ikSJntrPrwL2xJZaJTK7MUmUCuC6p8TNr5ftHeqtwnF3fto8m16eVQmReAHtNpNNxh",
  "key38": "X6cB5wYkemsQ4cQye91zPUEMNbX5UPgXgf1iCiPm5T4CCRQqB2n6WeMbt4G8tb4fHdS8JxFfRSSMTg1Jth5BZ4u",
  "key39": "53RxtrndgW7wPB2NAxcFgLNUtcHMMeRGiH6eNBeVTgn6GxVcAYZvNH6XYmRGPAHF6EuN2CmXZZTKnh72eJnnhXEd",
  "key40": "3AQpuT3UghUoZRZCpKeJvv6LcxfdZUNScq3uULTreP2WkvqoHK6fUzoZ4Wy7LeWAio7oKrLc5p7YeNFdBmBz3ijt",
  "key41": "31et4NFDvjy6gr4hnMmRrNdedreJdki5V5R4D4Z8KceMKNA14UgLATDPSfSdTr2AJy8QBZDiteTR9QfMPrjyVGdW",
  "key42": "2zKtqdMVV34JWug9joSh8ZASFu2qb1tu92LYo8h4aXUQseKt3kqeYgsdffHnLvB4fkUc2rxSZ4DQjYurW9c6eoC5"
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
