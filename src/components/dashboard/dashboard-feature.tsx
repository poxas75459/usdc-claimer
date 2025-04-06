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
    "5suAj8DKcCwH4e3bZu6tkdE2gyQ3UrNmTKsEzXEq7xjWnGWbwZu1arJXpPTuE5U8piJmFkQcmzoRPkrDYHgRS8FT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4voN5JrwtLK17Q6HEicT3XALyxs5ZYvxMMQaZR7xBvR9Rv9PxUWy7LDWQnpu6gpAdgbnpzqeoTuETTkcLDfjKF79",
  "key1": "2MCLKaYeYk6fgdoDCBVvKwrywL1RcpiVKYfH5Uuccu1KwLzVQ1pJAE8LP5dqTaZjgmoqTCKtPsKfwYcwjmKRPwM4",
  "key2": "3nwvsixZNq4Uqiqz7dYmsPgTNYE7uuSHEbjeth5XcG51ZxpgmBFbmWKEA2G2q6iLyDgMc2ZqWf5o7cZ7NjsfHovx",
  "key3": "58rHkMRYXPtG1pcudB29KuRAkgQShcUfRUjyKwnaU3D75417AnmNCS71npHHhGst87Kzchjv6DAt3oNNqgAYokHU",
  "key4": "3p9r7KKXXmG8q2iCDFHhjDJp6vvkvFs2EUJZmLA7RFMS5amZ8e7rJSpJRKbQxWpt8V3LFvM9RmrAvQ9kK27piUin",
  "key5": "5vEdekf3doqEMVCXfsgPXHKCp4xsQJzD736YMSrKYs29fmBTts3meanusfmSvsT9thJzXh5cmaRF7rMLSKUWRY1C",
  "key6": "3jdS1kaHsmPyY4gHmuzxsC1qek5WBVG5koBRSpvCshjqXY22PgDyxJxkB3bMaN8q5Co7b35tmXG6fipK7tidWBSp",
  "key7": "3HRaUmTh96oe1zougeWsbbbQG7C3mUUq4GevcbkdMtYyUhrSQCpxj3GTJ6jNJWEZFqyUdomTRo9vWXsT17H1s6Qu",
  "key8": "58cX37xAmQWtQpEJSiGDZTEvrBMps7xQWHK4xMisLDZx6icq9EoH2cgh7SuoYGMWWEcH5q2xs93A2gNYz4cb1Kci",
  "key9": "5vrXNcsPqF4t7USnopgCxJMhNXEBsEVAQuqjS8R59r3VJ7Z8npbnh6ga6wGpoz7eawkP74uGVj6iEFqn3QAreCCo",
  "key10": "4yjH71XCftL28mosS5KwXK7CHdwRk4rmGnQsSZt2LVm8LGWAeiKvagaHEaVSjcjnUHw1c2hiYq7boq6NqrjJSqjb",
  "key11": "5ceiFtFgyA9qdzzN7bhpv2vmxoSTEowtzdMNML37naEWXPkJ79BQfqqBFmYBk7xt2FHyoDqeo62TsJvh3BCQCEu8",
  "key12": "TZLrUSJ49Sna4ptZazrDuhpC24LbjPhs1R1oaZgRm9C9noqRsmoh5Hx6R5DWdoHHgMrecvQU6Fvpn6EBT3AfW5c",
  "key13": "5s8vXHuJ17jEwwrEMyioegckS6hWPU51UdLyQJ6AM2trgkrPQfBtFsztY9744twSrU5X4aEtfjxPjGsGxU5ZHDZi",
  "key14": "3XGD9ifvg1RqEconZhaziiBTFU26PjcwM22eAZJDdFo7SBiHcnTUMdqq5LnNe9bRdSP68ccMnHkpwcHQVSjsr76X",
  "key15": "4SExissmgdjQ8q8DR6SFuBjazQZKUn5mY74NeYNo515ZhK67k1qQMRWErhrVsSYxjoj9q4N5ZPqHVoQXFcECqNfj",
  "key16": "4K9Z9qGeTqucWqSxX5AaY5AV5CEWn7pmex3ykKdmJTG2AcjyiS3mb2SmZhN71559DrLB3q979fYKiJWCg8JNwqek",
  "key17": "2mjtP6eTYgiZFP21jGDTKW46gBrgNvrHCEvxXxBRwRqwJvCT1VYkXsN57FpuB1PK3UMKudEXUN9Ycpk4hauowYSH",
  "key18": "3bz7BeCWpEWKWq4ZKPNbR83PYJFsxW3CZshLosePq7RV6xxC6u8tsuYMo8Seqnf7HjDD217zHERUC1oXmS2jEyDk",
  "key19": "3gLqxufgYUy7ReSA2YyPMxMK4AhAkoXBRgJeZna5g5Gg7ELPtTC471SKLggVw5KvF3rqcyD1oAKhmpaVBKfJzYGq",
  "key20": "5y1sPozsxvtuNxmETx8qv24gnqCtL9kRZyz7fwnowYyaiXfWtaZMwSdyBQEb3GqXwiabs87ffytBXprP2QJuA9u2",
  "key21": "R4GQCQj2HwbKwGY2vHPKMyrS8fNsNcL8xiuQduvjzMnduUiQwjFyZX1M4sdxoLCR9xj7wJBdnJYv7LFT9ed6JAh",
  "key22": "Y1ckhS7Xm6ZzzaquYnQy27cSVmqAFzSDiuzUjCCrfXwezDkqEZGDxQSCSQXbiBW1CpwGzHdwEnqjVNP94oFagUR",
  "key23": "5hTBHUkL623TFM7QWgK6sYXGAKQXrSFJW4auVRGggqnKPjyixoUCjXEEtiLxmVEA57bA59CQZY57N5eX4VoBq9r8",
  "key24": "3TjiY4N8nXhMSRPqU6jkastYkAd3hX2Rt2AA7dTfNPo3pVRXdKx5mSU6tWdActvpEMNeA6RLB2H8CU6gUvjpbrN9",
  "key25": "3GAJDhdkoj1iKwFdgDPZMpepDAJiNZYDJTJZJpTwZ6XQ1JUstFTc8fA1kqxTEUx5sgm7oXXhGLtY2cTFMhTTz2GF",
  "key26": "5js9N9SuSjVmXEKfySBHwb8FyCvVZQYJfXMxadsGcp8DA8E6smqxDU3gnQCj5wEBjJLJqFLrRNqP8Ydmmzwg85hG",
  "key27": "4W8tFBJWQFGwYc6XHEQ5JNP4wtp8fY3RPPRZgNPYWGLXXXmQvzv3oci93GEZLF4DagKZPsG9btjKLg9CCEZYtHXV",
  "key28": "2kgkR2wYAEYM1X8qFekJBmECZ42vQBZvy54PhQ4ubQCbC47cbgVyxZTDnCVEYZz42Xg7ctiJ2sDiedR9514khUWu",
  "key29": "BxBx3kgeqv23L7hiiV2pTnK8SAG5Kuk4DzQPcEMrAz8kuBtKNPxAgkhGgQnQEWEjTEGzwfytahqarQEQ6aWUJFC",
  "key30": "517AHczWp3PWevEQYkvZwzStYuwF4e3s1AEo4ChgdYjNxSLQwCFvLgGoQwFF6LKDQMimniNv1NpYBuRZ6Te7pRtM",
  "key31": "5uN1MDQrddvh64RAz5abFFYbaNKxYyuVv9Ty4JcwRjmi5appXY33E5hbEVR5bkSgQcBHtiMPXtJrxdJdGP6a4qnb",
  "key32": "2vqdtdTnoMMpZ7YTih27boWS14Xa5tBo9mpm47hPzs4S8Ur1Nyzv81X3grJsxChB4YZFqoZdNqUbsJa1b9qUAKFM",
  "key33": "5tTvhooctz1S8ZvvZop66Q29rAqicp3Fu2KGzzo8xokkEd4r1QbzVEFqsxTHnGmbsRXMe2TuFQ9vjVMGxjph7QhQ",
  "key34": "3vo3iWGVfMWxGkCMHe1v9pTAV7NyN4CBtzRXrKuAH55FD18oFqQq4yVCRkP2VmJxyeXdd8QYsmKMgAcWPREmMS7a",
  "key35": "36nhH1e57ssUwMmqmKoayMJtZmGHccvhEEkUjLNyeCncPxEpP6ibCGKbqTTUgaxULnC7sGui1GAZZmDwFJuDg22E",
  "key36": "218dAELSE5XFv5Yz3gsP35aKEUwpJJHgXYgLCZx73ftcjrx8sxQ8zrnjnyo2u9RF2tRGLpBFiyY7iWkjWHYGDwCM",
  "key37": "4dmECPCx22uncQtchptGYcttcPStrsmutXNZoyGopJV1SxMcAjiupZ4PaBh9zfpoQ2d4iV85umai4SigkoKkmzg8",
  "key38": "2NsdMWYkVPdj7aWDAnnHncTbxrqNHg5FzMCz8bztRaZYqfkhVF8Syioa4sRQ9MtDZEbLo8Pb4zvghRHA3KaRsnt1",
  "key39": "4CWTSWJ7sz2JXGiNYSTX6jEdqR5pvE86U5J7wHyX3CsfeXMeo23obWUo9sZjQ3AgUSWExhgf3qoEZVsdDfFFgcxw",
  "key40": "2b41Gyz3Mz4usAKnA6cVUSRTrTu5ak4CF1gYGpRuLNzPU7AS3kCrvd6ZuE4C87myGLubwVEjq4thPeTcF89o6ipQ",
  "key41": "24UfwYrHAYbhJHgBU4SMZcSm85QfWcoV3YPfJu79b7h5zj37WnjWYyWeFY8zcdabc7qAW2fyhKwMy3qXMiDVh3DL",
  "key42": "36wSduD3t9yHeSdMW5gvJovPWp3hubYBtUAuKzPVect9LCPw1m3k2ruh7NzmY4amnu63Nnv4REqncUrBWQnX11Wm",
  "key43": "2jpMVkmyPtkkL7vPeAX1R9jHW8qTWLxaeQ8tyHpYpV6STkdFLnT3jAdZAjDyTW1i9CJkN12mFnQZtLtea9Tq7BoP",
  "key44": "5vAUUw3Bb2ByzmStbzXzfVpUdcBduWb74tW8czs89dGvn5RdVZbL7VrAk7otkK2vSEm3mVugvEtn9FWvjGgQWHtC",
  "key45": "4angYBDZyysMxsXQ54yC1QRyLBsYAwhriL1WFqShG3YL6nZycYLXexuM9cgVKqnoQsFVK4v1Yyfs9apvPc7EeEYQ",
  "key46": "4XbXaNqKhKfFscTs9tzpdp9qbGUKL6goUqoNYBQoAFkUrRawrdwmyyLMMgCGheZZQfqXn2iGpz4Y6gAK9EUzvwaY",
  "key47": "5x9q9yBcsyzb6zxuv25y7ZnxmwubxZABBvhL4eUy4pTPV1bC5K4Pwsrfrj932njiEN7azQ9KTbDrZbVxdkA7SLo"
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
