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
    "yvBEUtGba3GwjQ38FQMqAukBfB8uSKhA6nGiGTP3wzz9QLL31jsSGQJTHPVLLjS7eHczBhHuUU4yDvF4BkdCx18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PCezoPYYyXoNmxcUcwCdhY8ysLijNeoDWVGZX73jrpP8qNvpeNgoJmbgtrL246sVSUxDiNE79xXdoiQmJbjwAB4",
  "key1": "37xb8Ld2nJMT6uxFaw8SdXhLgvqgH3RkrNEPnHCd5jvKot2WrBk5wPFTM2zDWCLRVh8wxeexbKHaQRMtfvPkxz9M",
  "key2": "539S35xKvQRJEqeRM9mDE64BG1M29FogPAjvhdNNmvhx8DVRM5AFNVTZ4BJ1BBuAFT1hoSBndUgFDyVdjLJjACLJ",
  "key3": "3ynUaNobzEJoW71dhJaChP7ZgDLh1SxFZuBgWGFW19nKahHr4wLtA9AH2nduGv3iwDLM8Y5z4jGy5d7vFN32tifk",
  "key4": "4cfoCzZxTmJ8tqHxQFxq2TAN2YhYokiHGsooFbf6BdnqvPxwDpfwD2qdkoQM9t2YW5YgeN163r96FZg5orCiRxmV",
  "key5": "pPLk1VNqtN1CWTqPf76CfcsW9zaRsiTPPbhj3W9fmte6ZH6sQQRW5YtGZErqLFXRAwT7aBBUMrgEYH2jnBNFvai",
  "key6": "2iYD7gDYHMZSd2PEf2nFDJVhvi4TBBxpHtpT8muzzj99FDZYkN3APXNvJTvva1mCqBt66gpP9PnC6PYnG1gBomuk",
  "key7": "2a1P2LSvR2EUkc8AVr9Ca1N4gq5BDctT7dEiEFT78ZZ7aRwRFMmXjsEe8YdDi7w4rDq9ySLRUbMBMVjFKSxn4QGi",
  "key8": "34fersMPpQBF5yUBwVseLi8ensL5T2iEx6f9KD1ExM4Lb8rwzyZ9J6XTy6oX95MGQrMhiEtTFWZ57Rj7CAUczQ63",
  "key9": "6avE9GeESvoXqz3iJCFMTJTVUicLJa55vgW5P1CrjukhskhwQq2uxMZ6JixirLtCbuiyT7EXn9T2NnuMZqJQRB6",
  "key10": "2jTqqibqPHwkXWYHFd1UZbELWKi2atV1RgUzij7Q91yTNTQcUG2xCtqmKKhX4RdN8jXaC2KG6qmrhNyj6xia4uWR",
  "key11": "2fD9Y8upFChbJNRKWuMfSfUCgy1txR5wpfRqszPxixTqYRjd5vDgN5jZDVTpzvsPotteWS9jvGky8U7Jf6CjJBom",
  "key12": "3kP32JbYuMPH79ZZMwrms51RiCKm3bPqo9BHPTJ8QEtf3Pjqoseb4YSXeXpf9bfPBYZv9K39re3i3vHddFsxKvPR",
  "key13": "5CzAENp8Ry1VSQ3WAyqU1cAaXDiPurDxt2YYnhdjiApP1yAEDiUx1ec3s6uN5God4yRkmyUsbSAnxCSQNXcMS7m5",
  "key14": "4hurxpnqHLijbY5b1cF9AAk9VzDEeFEfRCgSJ4vBSMEbZMKc8j2vzyheU292emqXT69d5GrYppUPN1mDFcDGQPBP",
  "key15": "4Ke96k4LgVLLTGRz8TYzo2AZCHsTckS7nNQwLrYLxZTAScxzQ31XaSDbnXVBk1k9AqMCD3d2igNwaKtDZdxCLMXg",
  "key16": "4NqUL6RLhW39jPzxPLKTXogPv8DRH9qh7aK3tqhshpq2UVXTdq24fyhbKfJUk9N81GEMsdaubQJp6PwoSEkzEPor",
  "key17": "2vTsPduU24tJxPaQ8SgywU9qfikZTUxAMabwH2jEqSZxFtVzxegeV8fhdmriSNYHAWhyzRNLw9d9hHkE1uTofreS",
  "key18": "5Br2ZBJzX7csHHmDjD9R2KGj3ZiwFUCYBVycmAxs52LiMVaWeMgeVAshMddaL45hwu9TGHVkP9taasjiSujsiX9y",
  "key19": "5uBDtc2w3NjEefsyMFbJcaSH531ZsgWB3hKXcMGAMRp5YqCYsarSZJ3mtnvp7vkdnoei6gZEhSk2hyrouCFipq2B",
  "key20": "2UfWQmfT3quRde8PyBt1a92s33UKFZrHBrAZBws2hpo5eSYDobLVuLZGyC3FQptjHmfhsoMZKrtc1VV8kExSMYTQ",
  "key21": "5LhPJqayCxxDfL3JsAaj9VsopRW3QCTSqxT9pCyt3mRJeiWCFU533qiVSWQv31A2T7WHejpHVVqMDPsNHNkPUGvJ",
  "key22": "4zgqkG1wB1k9WPKGjbUimkLcXysq4aLvCERp3vv98erkr5ArvPEbKT7zUy19phFyk6dzNzpPos1VdPCM1mBxoswy",
  "key23": "4YDHgPBgz3CNBggrTCYXxojLTjrkEZgL1kpqF6fMK4Aa7pgNpvhJTwXNoiXEz9gU1boXrbKCdM5iBD79hUhkok68",
  "key24": "3f8RN2zDB9CAbX6bRqgiUBVi1hChdgbXwuueJuKJRhTQ5iv2hQTmknVsDiq74W4MjhwWiWaDrAYWh5XfpenZRDkD",
  "key25": "2Nq8W236LuYt9rkcD4BZbu4JP8fgVQkoJDjx5hR9aAGDodynhQn9etVJmcrGB8zkxBjSRZTutQapdthSsBbsfHKs",
  "key26": "gK3U5TJkxLv2QUCUDpYm4M6RzVHh2BaydyaUFHg6rveW9zeNxDYrbWSob1TXKXQT5dbtXVcScFntnFB5QJopLgs",
  "key27": "o7zbFgLqQ1J4yXYsq3UXYngoiHZ2ecPz6d2RbGF5hhZzaFTycWWSFQX54iiyWkd5o7RgBMzvVym251xfWdNgtPi",
  "key28": "2wQEiLYxtqKa9DnPBPZRYXr56uatnc7iUBbBVjNCUeCsAA4PDqaWFHWr513r9L7CmPASJhhkotbscBC7oEs8aLrC",
  "key29": "3cfKKqdrpENfHFtqaNe5sgMKN4feSHSL4DZyNhvvbRTj2bXiBowrwB2rGXxX8KTtgH74JEUb8Ys8WXrxCXfxQjxX",
  "key30": "4mmK4cr2LgBU8KffnRFwZt6B6hEhLL7ZbUU3orpaAgXf5fTNi3TNWhkmPctb5sWL1c7JuLp3huTTNGdVrvZeqj3b",
  "key31": "52d37zota8bhtGtdmTpm77VvpbyzEGoEJDduR8TH9i3yJ4QBsuE5MkHrdy985uebJC4DBy4WS5HgPZBcbTBJDqbs",
  "key32": "2GURNJrn7qRL33eJGxYWJj4gTgvYE9NJsYRp7DVsQ2S2LVYjFeUnv5dmsBxnAZ7QLD7wEPXsska29UVe5aYWGuyp",
  "key33": "SBfSPiJ2fh2enYFzYvG93YX8YxJqJ7YecJgKuR6ysH4KCx9KqDRMS8FCwqJnMTKiU9bwof2uhCEuhL72AkAomFn",
  "key34": "Atz3gVhVY7ZDTs7LEjPhGTh6G4eCvAPn6AnrHD4BFav85LjsrwvNq6eusHMn7Zhwg1se7674PLbqBxMLMgRNFcA",
  "key35": "5PcVZkXsVhkPvYbyT1V2fFA79EPXm76gkDSK17kwXzxit6viyB49vfioVy4dbNPnVMFv5Nw3rZubN7zmDWeSkdZ2",
  "key36": "5Cs85EYWEwdy4p8hL8NCV4Z5mXftJiXR1FPm9mLb5PYY9dkqp5ddKas8r7GdmTqh9KFcciyoHyFHZqF85hLm8QRM",
  "key37": "3TPXH13aoBTLxQ9E2DeyA5aLP8VPFcPM46J1uq6cQCw7GQxMHQxMUjzFTf8naQC8CTmRGCce8EAJK2MBZny9owGT",
  "key38": "2S7UfVUvwC5zeoeLFuteYqHeSEUXb3xk4yKibAfNgyRVoSJawfvPuZZXGiudwNm8PLftvpAZN3aDAYT6zJLtkKf9",
  "key39": "4gWEE1Tsj3kjitRGdiJKCTpf2bNLVGXPCyGgnqiLJZAnja6X1BoCaWUrsLnUCcwwWygBjmRGQebKCExHEe8MsKGB",
  "key40": "4n7KghqCtJ9yEZZtCqHjAhWwBRbSRey8mn84fchN4JyRsoYhPSu86u3QYEyrJUZuAL6jLcDMRnroE5KHN8iSAvYQ",
  "key41": "gtwds3uUMxXqnVuMWFfC7qteQW5Q3gjbHoA4VW7bVzZwzawnWZxQqxseCyXzEN2b5FtMjRbpBugPJLdW7WnjJZL",
  "key42": "2avhVLJdMNuimhqcJcPv2A2EDmEi6JsXzGRJzHmukSR3VvsibZ4nM2hWHS9zX92egppuDUb9iDNrUQBzs53XtNtD",
  "key43": "2P7bLZ7PqecUvxVGhQsrQSs9VzC85DKsWDXG9gmzPYP4aoqJFPxTuUpv2mqSx6CdEqfe2FZiFUhBVEfrQrTSJ5aV"
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
