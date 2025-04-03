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
    "3qEW54tZR2mUEYw63GeDaEM9yt4uYstLj7iSntiMk5qt4BUnJYg11pt2yuVeNeJZEuLFt3x9cMCmeysfujLiRGw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EKKWgSu7KtMPZTg3GwWnezJqUXtRcq4GNhJM2r5gcyrtTzkeZwFfp9B6Ym7zUsfVugxEZzueySXS7QrK6Znenzp",
  "key1": "5rZVbxn7m9viCUTa2Q6tdSiZf59fpcyVZA4gXCCJWt4HJ5aipCZJZcttJ8zDdU2xSaQiUZoVJUAhjN7kakYAkSbf",
  "key2": "3N7v1MXALbj2Y5tAN6MvjYMiZbtCLpJSBY2KYBiagH3AyDgdxNad6ET2pTddA1tE14Y1zg5SJnbUCdQ8Qr7Vv1Km",
  "key3": "wDpHRnxsQQi8Q3nNZSN9xpraXK9QKkchmj8WYM3EVAU7hFGQUhiQy4oDCdfJ1wPFCPJTo9xNFxXLZQjTBSaLWdB",
  "key4": "PTa5kSg3nmMPYekgnqHZdHBLhXGZXPMAbBKAh5BxVi9v6WueoLMhdbvVo8FFqmqjzsiL5JgzRD5pMHHBfwghAfg",
  "key5": "P9kbyXh4k4rKR8pZstHs57sDzKfiapyfpAkywXVBx9nfxahZvW5PSDA2riLbR3mHA2eK7rrgXKJo3tdZrsBcWTV",
  "key6": "3RjvGDkHtXYXovvvC4mVxcnbjDVHyxQgLyNz3dW2o1hFegqofTbtpFhCM69JK4nxJiWD2eHaF2UCRvBCsTQFEWxR",
  "key7": "5GPfNUg5seAtKpV8bRCySGaFiKvgWtZVcbPPwcukn5qXC2SveFQ1kURGR1t3gNTjcQJkrP6FNZGGV8hjy3HaarR4",
  "key8": "57MdtwpMCQHeNt5hrrp943ShmYsQcbgcJwPKBDRjcE7ot7mto79Wmh2RYPnzXsdnmRguD4ayZM8ekX5TD5TtLgyS",
  "key9": "61KXeLwayzBaRtRszWNiVozTDAhmLzg8hrXefUq4mAXf11h3Ng4t1Gt5Yphn641KPrijmyzFhnmPr2CstP5Sc9hZ",
  "key10": "5ujgG9EKWWKoSN7cHZaMNhk28ErHQhXMwRPvkSCVTwx94wZLuCHePJLg81Vwkjz7TqTZ8gercqmVTerLKyCmY7ko",
  "key11": "XByn7HMGsUVC6r33ThYapcwgCYVE5WTAJjoxVGF9z3EyCoWoPnYwE8eh94FqDGoFJP5NhsTxDUo1gEpuXHgs2XB",
  "key12": "3eGYa59GxFzwWgFR3FnsWVMNhJSSdyrhfZYMtpcsvvNNgmvoczFub1s3GuheY7ammPS3wnHMkDUK51Pn2EzuiGa9",
  "key13": "2t8EGRTeehtbzwCWu2zDRKVtPDmYXRW1uBgfqemuJ2jW4WvcF6wJu5dDHFrraHVBxPFP7EbvGs5jyYSHWCMphnxq",
  "key14": "3sa4gocKjT2Pa4MtMQJXiT1G95iJwXQCDMigqRcELFArdKFpMivx6f24sXNDiz4opfi1ooumroRNMJfrAXU5o6zW",
  "key15": "4sU43XHRy989jFxLXW237g3Cr7jf4C5b3D4SL6gH3frCdLTF26fVSJtkNfcps3ohP2GssoNtvaBq6L562ND2MZEi",
  "key16": "5QPW5WMms4wNmdSBN1M7wVryzb6zt8JZ34L6aixmoaeUzK2azWxEhVnCGrmBrhwBGxii3zsdsZYh2eBs66mzzkAq",
  "key17": "5RbkjiKXeoNH7wv4tDRjiqs4tFHFRw7YwZDgEg7SnqrCDWztAQXd6AoeZWzNRzwjPbKVKb1NTfcPrEtAyUazWZf5",
  "key18": "5cNhmw5bk2569aVF1VkgtLJJuoihtkK6igutSToWCgZc2uZU5V6rHmRqtBtYmXw7FYDRpgBkVE4XZb8mgrK2Wwuw",
  "key19": "AugpcLazneMDbfMg5EYJUrSB5BA8t1CwK9qeuKiqVxWhpX9QsVbHCUd8HrAhazV62rL53pyqSGv6XVq8fDQ8iCx",
  "key20": "KWabJ6iWtsJdiRcLyH4JYE7bENYQhS72acXtgBHiUSAQciDCgr8ME9sMGcPFAK4mKF4n6dMqTGNPeUGRKAuLf84",
  "key21": "3hpabwaM93rdnnfxNAVKDHn52ELZnR7NnELySyFQTsb2Xh4vC5HcuFAhyE4mR3EwHiFatctVexfuW3jMaEqhBcTs",
  "key22": "3eomq6gPm6uLq2brUFSkqiNqutPL8SmRW9zLxrP368sLidC8ZgPhRaoNfMTuT5smYKaQDf34akKxUDmBhxPeVr2j",
  "key23": "29usdapbddEogqg1HGYkUTdEK1YiqK9dVj75iZAHj58uG4CzvQHn1EGacr2n2DFbm8yoEdZzg7b32EykwuS9zu69",
  "key24": "3c8fDtsheupYtNULWQyx9jFNhhMunFzAmNZQZFFhyPf18Zj3cNF5m1JKPRkym6LriYFqP4w2U4y6hTACxyVztm7",
  "key25": "3J9Uwq1yQ73NWhk9CP4xK7a5Xvi4CVXS7u2kHQiUGuYPGfCrBZ3oHGgcbCwmZVsrEX1o1kx855d5qJLErPJiRkao",
  "key26": "bpXxLoyY9Y8ePrJdvgmqfusETmCHMX9ZKP3pQD41PjWhwFuPkoi76RPHEABqX3c6D2eSxBMkeXm9FH3qAnd6z5H",
  "key27": "REsuX3TW881zW1pZRnMMAYdXnhThcTEnbfhYkCakPNoKCsuuQCjyUvgtQsRonBY8uk27dCX14sCXEUH52uE9sUZ",
  "key28": "KUNt1BmT8mfyB6v7t7YALvAHiES7SMzRBWmAXUx9mLCyVorkqNqGzDym2eetWBHRNnb1hiyxZDws8m2ZfHAuyiH",
  "key29": "4uBWfTgCwckmVfYjPwzmMpPLwoWHiqEXQKG4Q5cYkQgGrEXHD9srvj4x4xD9Zvenp8zp4vG7ZZAM5VnfxrneB2Nw",
  "key30": "4j1CNpQHCHnVeDXE4pM1vZSkg9i6b86KRZMaEcyYMaERn3Kt6N2F2YqK7DTxYPKT2aFTdJoBc9yshzjnDsW7D7e7",
  "key31": "2FrdAp21aFSWaZrFmGxi8nzQ2CNtXpgJAD526aVqEMVBNnp2rj1GeXDUsvSSkAe4uftzC62gKzc11CZDmJm5vV95",
  "key32": "3xUwH84Y3HCLkwn7cUvZ3y42jKHjsXUXvv6TcFAxuB7TGm7XyuJGJUzZh4rcZADTvdd4rc2wpTuNSbPApwjX8QXq",
  "key33": "4VF2AhF9eKGK2SHHqrWCTzrwDcDNGXzbS3rNqJq34ZBgHyJkS7hzgSesG8cHs45WEpvyZfeRGKtA8f4Xy7S5vFqr",
  "key34": "ub4BPugQQaM1cLHq67q3NBBB8t387FKKth1KtTG1hJfbVmkwG11JV5F8zmpAZxNRN4h2oiZyRGnsGWjfr7mGHRK",
  "key35": "nPkbmhJHQrYktt1TYfbGSyNBKjmZ6sgZHnRwtCGTi1MkwuVMqn4ZtRpK8mcSa4UDkPuR8WdGaCzJ9y1ghF9fgGr",
  "key36": "cTz8Fnzmm7mrPnbrsh9jH7DVKJbbkZTRFeUX9jeJHp8kNUMv8PxZJBerDf3tb9oZXXTKFFq7W7nxFtvoKtrcanB",
  "key37": "4j6oRHQzQhtQ5qyZVNEkM9ZyCsutkYFwYQi8zan14KvnxbVRKBqVrokKBozbkFpwHXc39e9hosexC4v5FS1QtUqP",
  "key38": "5Fibsg8mS8XpzGtLAgn6eD7LrNxszQ5rSaC7gzTJT1tSkT1X9zMQW2fMMMP7zEeUKjUh47KgSj6W9Rohr2V8qr7S",
  "key39": "3F1mzUhXKq9pcaUwsLcbyiK8hp7ynu9tqwVNiDfoDrKgoPrRYGpoGUyKpFEZ7MMmkQs1oX7eDZhwF9yggpXApHyr",
  "key40": "iyRiz3ALauwmyWyWbEjD1SwQRfV1RkQdv7ETvkwMhKt5vViiZexAGxWNjMAWV1kEbTHjxLeYwxbKhS1fzSErJQY",
  "key41": "5wASAt4cvn8hvofA9iEUr6C8WpgeS1XFNBdcP7ZHvv9qBxG8NJcwzJn2rC6fzmffC4xCPg3LiYpzTLec6PTmD1yD",
  "key42": "3LFXifpwAkSpX9tXZ9hNmN3Tbb7hEcXff78aMZFB7aiaAAW58eLBs8Vhy9NmPjwRqHNBmVGNABRdzjd83XMk5NoJ",
  "key43": "48zabSdgCLVqxkHCvcvwy64yMLUZt5aGBPLPWNo6zo9CQDCBkRJbLpZ5eSzyuixwPJwi64cG79Ckmcuq7S5Htb4",
  "key44": "Ge3Xs4yPhmFzXiCDwvHR9GGfXVYGMzteKLLxxdrWJbakiRG2ipdQNsLJampRCLuTRqJE3R4AiSqiBNpyzEaE32M",
  "key45": "39XXZURx7rWVdoS71zsor2mWH476og9mLjDqhrUkVWb3a4BL3tFUsPDUFxLaAv7kD7CTMAaDtyBm7K9TMVi8pjY4",
  "key46": "2CBNKe3UMRRCEq82yYdDW3hM2vKuAmT9uNxQPcLLz8LMQGBsTmAULXNFFEgswG2ngRh16Dn3YDppj5xA7naRB2Sa"
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
