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
    "3odnkZxGsNVaGHrcDohmdJ9468TC17bgSpxJ3L6ntLvY44pcLZRH7U6xXgKGjc5QE53s3dUhGgDQ5AdmbXjALAY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jFLdZPUfE4iMFkwBuoWreYz44omrJB6ieB8DXqMob9MfJGrFjh6yNfYYn8NG1bTjYwqq8uCNMeqr8VvLVFNEf5A",
  "key1": "3jTtjAnhrqKEQnJ8Kiaadd3XUj5zG2okVJutzXMwQsSn4TW1nXmxfmxYcGJXJgkFeR5mSkM9aVngRLNZhvTvg89m",
  "key2": "2Vw9q7cP8ZgakxLRenqK5qJcV7UgH9qwS8jUwtqfpF8Z4oqzGgUSRaYkYScxeeSRSPPQ1yKknLp21Lv8zZ7ASiJ6",
  "key3": "2d7d7B5oWRutemEJP4HzYjQM88mBWN48uLnSTPG1fHWAX3jcfg9PsZUavPQoNrq99s6HcmfV2RYPHbqYHCJeg5nE",
  "key4": "UVj6gC48Z5fYqyjJFdj96iK7W7qCAw6NV3YR8pPg583yFp43zwwAeA7j4KUnTYD4RP4Q83KHvPWaVRoVHv43wtF",
  "key5": "2jS9qWk2s9mmAuSAUM4FgeKnBijmhQzpY5NTsvuiaxboz4mf5FjTpGXsVgjq2G5vuLU9wc2xuLgi6JbcyeoUKseR",
  "key6": "7Sp6nwWJuJHRxQiR23X3pdz1fuivRLVM7PMbgVU2f7pVCZB8xTE75jqPEgDMBkkTCEhCoGiiy3cRWm4d2gJ7q7u",
  "key7": "65UBA2dKmMyPAwW4xdcM3N2tnjyoAPePsdJkPxx5xZbv7V289Yp2omugg7UwCPhsTUGL3gRd7fUE1qXUbYWYVNaz",
  "key8": "4tcikUUcU59SdBJ3AUy2ukPcXgHZHbQJgvFkQk7V5xNQ5dL7cnE5YSSDUxSy9jh8BCFiwGwxR6vzFDCwt13TVMPy",
  "key9": "5yiJn5iUYY7a8Z2VjUt1H3kfyt2kFB54LYjVJXc36WJ91vE2wPmMJRZpLi4jua2rqYJSDfDEh4T7pbcSNgaEGXSi",
  "key10": "2rjsk3gEaVSHk3pwMPL5enXjZ6Db7WgEieUSBSH9gc2k9CXwijgu6AJpEuAAB6oHMuiCi6V38JprqMs6v5zLxLMe",
  "key11": "3NMMZqVwnRtUiABvHhWpjjvymP6R8b2UVnjTJWRey7ZDDUzqyXn4nQHaPBgA7k8GQMcTkD8YKv73e8JcpxZqkwXW",
  "key12": "5Kp7JGCsFwbHrhGRdBnJmLxaJKd9AxfZWKKaPUAYdCTxXz4DNrnMbzvFPnfoh76EcRuF9pw4YCyHxratGm49ghqN",
  "key13": "5PVXuAFtkWutNroDVGzWu2EXfrqwMVXNyfRBQXYdR8pXZXSswKKnyMCWP8J5rvkoH2VHLDhNLhN4hZML51eGJ2fB",
  "key14": "5KKr8LKRLA6weThC3TmFS8oXQ8fSwrLT1a282Gafrw94gGU9G4FucNVk6Ri71snTTetJCYJC5hhAEKNMBki5TMGe",
  "key15": "Fu6WN7MuDa1JYS1sHwQYUJv3WN9Q4xEU9CSBeT8sGRGJi8dfFGJ5uiEX9kbEgCFr9HdXAYSFBwLoVbQVZaXhrMQ",
  "key16": "3HspcdxKCBWUsVtZdHGGXqS1tTKM2VrYPT3UPAWWCuj7KwoQvQmXsnEeN61FVSpRq4ahZR6C6VA59Vbgt9FZ44Q4",
  "key17": "2W3XDWSHs4PKymgfp7fXPdPhG2y4KZjQAKHQ4WoGCXrDzx3QZZ1FZnjwFe9jPnz63NGzy9D5VVLekjeogmtCixvC",
  "key18": "5aoNbnJvSWiJgW9yvn65JAL88wKhMR6Mcfgcbh495yVustw3fL3tt73vFgbDXWn3NZEUisRrNt3ZbJTkf2eu84LU",
  "key19": "2Lj1fSUmBGAbtCjAtRY2QAKLEDMYPBNC9XkEJexyBkv7dEhoL44V1BYe3JhcHhurGc8Mx5DRxau3d1sWEyAxfUi1",
  "key20": "3YwGP4Td2byBeXbJPmX2CFRrV9xtkGWX1u4uKp96NYUVBgsvVHPkJQ5B1L2tjFACT2pnUsxTrbEbC7rtDAEAT6yK",
  "key21": "URrtf9joipziNXs9ZZm5DBAqeNjfHRq37GeZFr1xsL5m1UJCebMKC3zsFchZL9amCYN9QAYp5qWhkjoZzomh2Ep",
  "key22": "4Pk8WyYk1zFnoDamHDjjQmHaZskm8udXesPtkDvnAQWgytdH8g5t3KX55iof4AibgnZL9oiiPm59yG6gPJ4MYM12",
  "key23": "4dvRRhVwJCZP8HKQemE3Hd6x6rhsjofUUqTtQsdptRieVaxfrWaiLfbRMmsuiqjt5q5KUCjo4sQu1YGsYBTtdqbu",
  "key24": "ZZ59GXWbyvxMXCuspDAVVJnGSQ22rvGqXVBrdKfYBLurDQNRCgZ4qNtGZCJtmAfjrvv5C9S5Sucm5mNHHb7qz7p",
  "key25": "29WVhgzr3fhHLtJwmMNKrHMy65Nkuq2MaECZijkQSagWqsSYkZcH8FuELw9epKczWAGMo8TGUQC3o6bTtMLY2hwv",
  "key26": "3QCT5Yigea54L91eKnUo7StkdCrCRY3R1J5dqB4qyZsFXtjcBfqpe7uAGVWm8Go7JimQoLZiGmx5U9zcSgBFsLD9",
  "key27": "4MskQ2J21qqo1T2dG5zfZqxQwKfyCEnWxLxfXHHDDQmbxxdo2eTHn5oz8kfTg9MY9Drj4ZojeiNqjV3rTJbK48ej",
  "key28": "2yLmDJGcDzX25kHNhqZygVVG9wQzDG7x37eTpWFf7uGdruwGwFJy7rCzEVSJaZX75pW4fMvkfxK6Dk1285hzyTUU",
  "key29": "5W5y1WmvyGqatbWf3XLNCkCqR1SSXaVBnVqFEpUcXHeBJuDBmXvt73uybQM8pfWBQuLW2yhiaxXdi94ieSK31GXy",
  "key30": "5JXMsNtEs6Czw2BRDi1uMfrrMVgDsWZSgopq7qnsMbBnLekCd1b7ZmNpryaoS82rHXYQsJ3TDQffzbrzvoXKcWeA",
  "key31": "4ZViu23TPKx914agzdRfbZrDbKvr5EruDcMFrT98zixhfSgyJgoKGbhYMpCV5j4vrC4TVMzGSwWXgsYTXpbLJTgG",
  "key32": "2wPGKmQqjYe7i7zsppVmXsZfXa7D47HA7hg8TKhcAGnGdxNmr62jwm63UFDvbWNMnW1JneoYinQ7Dn4Z4uncvWrG",
  "key33": "5CJ7175DWr5hdfknfqthrq22zPSN6JFv7CSJMegxQS7PckHMW8QPWw5p7Vn5usbUoMiVKKMmEfoizki9N5sS8ZhJ",
  "key34": "2adWF5KkNYGPWLxFRGfNFEcJyZDC71R9SAchPEKTsioiGd9z3UeQefNtCHZszTnVcu2Yh6okFr1yEvaPiERnFYYF",
  "key35": "2exh1QaFSo2cmiGF2iedd65FQFNuChLgkS4GuBmUvgHPwC8smHy8LmX6U8Vgf4AYwRMM7HG4S3wT93q4d1MbReHT",
  "key36": "jLmB4UA18GwqVtNJh18M69FPZ9D3aLKXUMtsPzkSx1v2BFsSEFiaah65WstbyanCYQdPb6PhkCvPE5u2djpHy8t",
  "key37": "2ds1JLBdwij3RhjUG5umXj4wA51WwvUhS9ifNiQDrmJr1wwkq6URdtNFN4iFrMQxbcVabgor2psRYZtzDRDm2gvu",
  "key38": "5d6Dxzdfw82HLjeBppXtV43bjqavmZhRKCfD4hACfrXVkkXPycFa5H1dC87uotxpNyZWNCYDmfiJosr94DFSYTvB",
  "key39": "2c1TTVJmsbRDhjcarWysmKS3KTcBmBhsFFX2BFeZ7grmMhnZd96XfbNg9nsNxhvL9haDr4A6zrEAUTcjKo9Cktqz",
  "key40": "2L22KoBd8JHtkirSxBwPTqjJbWTXSYnh8TmuuFW6qrgeftTtvVyD4yzDFVX3DWwnuMHDzvfQwZ3iKzLTndDLNTBK",
  "key41": "53nieysmHGWmXCC7YooGBA3J5QSKFBwdF3Nm7UmyiUue286h8HYkQcWAZoPpUCwRZeMKJwvr6njqTb6SefbzSACk",
  "key42": "4PErycULPa9dxpd5VWyAf5ASP62MNntzBpPnyJmMNHzEQqwfVDoLJLNi4ZMrX2kDFgRktfhdNj8qrHmDZTWKwAJ9",
  "key43": "3uHit49fTQDxnxZR5jWCqedPcaRfAguUp3JK7hDqCUNJ4pY5i5jVD7CrrYpyXQ2ndKqhbRdjP2SsUmTpSSzybtyr",
  "key44": "4raFikoo2fbJXmH5z6r1B6AEkTNtsRgpTad3XQyZsndeaYgmJ8EKSBg6uGqN24hY1KDw8HXTM1yGV4jvWppFCeuW",
  "key45": "3WEBqjS4naNchWwf4m768kqB993GgMCU1uodFWY93GkXuBGrB2HrBPG7bGjpWwnVFh7bgBpshoKr322jQeggnfqn",
  "key46": "5bcWGgfxtHTkZHF6teP4WirBq1unvij4RJLDAZYB9F9DizfJge4WFyWoCeuRBStQdN47oDnjh2kpAk1txzFbsUWQ",
  "key47": "5TnmBdVBfWrCLmb8d1ZTfND15e9PCWPdPegkYYeESsx8CMj8dz31fL5HSPmYxSx1hJL5bbVHSgxN6qegtTtF32K8"
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
