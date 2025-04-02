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
    "2Q6bKLyjj4SRSyiLrg5EqSjUpJYsAuer7XfZQohqUQK2waXRRBkgBvqmy9oRRk2oLe2aZL9ciD5b6yh74arR3HK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24LSjPGEWbD2RrabFWRaoYznwQfXJ1v6BDJFtyF9M15YFnUMNFR6DMztC8NnRm611rHcZFDtTAW2SYc4bwxex33r",
  "key1": "2sjRKtL2j3yHBTd1qySvxexzXWYrG6ks7veDyN8meikGixu99VrLB2B9wd6aJonHJcqPU9jc38u2cP2C6MgsD917",
  "key2": "2yGxR6BRrGJ6et8uPHhywQew54zbDLD7LigBecdoN8vCg725jUft7psJLcXCvuieU2QQ78n6YLiuCTTP7YUioFAt",
  "key3": "2ctd5BvuNWrCxCNwsaEpgnbJmKUuJBP5nAjVvwMUrSUg87YNU2b85x7TcwpE3wCSMJsaygLe4CPqRXw8KqFhvu9e",
  "key4": "3eXnm1fAXdoJAgHp2Rr5wKra1WkuVRNo3iq8GYDah9bvarfRdPnSwqdM97ASYHnudELxnCiZBktDA1DnamU1hNxv",
  "key5": "246Vkmgggj77KMJXWbtesg9NVieB3dG69HEAQtU1eKg6i7tu3RxsLYa9WqmDtfwH7X4e8VBatYvsBxeSHzd9XFo7",
  "key6": "35aGnzxrsRUUXXypua6gJSsqEZYt9AkwUyXuevwTLgydsP2SG9msDkyphEjr3G6g3TSEdCboKqkPYiSCBVHHgRQi",
  "key7": "5uymXdtBgNm6DWwNDexHqTrow6paKEgRfgZ1Wrduxk7yWNGYcpNXiqem7TdQsXH2DmCVZQVKiYJ5Nm9agvxGf1ei",
  "key8": "2ozTRHKBU8d9R2awY4QChUDbdVwrKoNytnChhtjqHBQH6JxcRgaboNB9iSBMxVb6LNMCdXzfkV6PBTZFaeNZrJGD",
  "key9": "37y4zPqGB1MNZP5jmpYE4fUXBmf5og9q1DizS6mtRP1WHMpedke7NpL2AAUnTjd3PL536kk8jwKAivyCG7ZwvWJv",
  "key10": "2SLh8LGwkMPwAVxj2AybV7Z6KN3XnnQ8mENi8EcGfJDEsfrzwwrfKLE9SdNUAxBHRr1M7qfeQpNbCodwJaZr6ENZ",
  "key11": "7gUU55P1Az8pN76EDGTe5BHFR5NeCcwaCkDJRuZcvbadbXPiyd2fhmbwRxPAcrERLzr6fAMEpgNRaFsPt9pVKTz",
  "key12": "QpFhTzTYCpexBnBQS7nSG88VYoNmdkoUyCSd1F74aJ1ePLpAQjHz7tBTUNo2BGc3JWpDbP2qn2ExbJWb3h3Ywmn",
  "key13": "5tSuQ5bN8EKtkcSDVkcubgFo9uvDVrDoqhMDCnpT1gqHW3MvjDhQ1qi5JWDtPx4Fmpw9H1FB12BGzsFCLXf4UChs",
  "key14": "56NZ7RJnH5XEqN5faULj9rdYowWGvegMHi3SCkmpPwSTgCFkgxj5ps9dMsFqKh8GSMrw1JAnYUodbHSbFUtV1ty6",
  "key15": "5iCyWi8yEhmXMgxHruPiSEpUBAReK1Sv8c7tiwX8Ga2x6VPJmSj6fX5JS5DYoDVq4Ks7Mq6RHRs6bUhzmHR1riKA",
  "key16": "56e194zdvVPicj4Bfn5Y1iPjPraNvov91kue59Pr6rUg8tf188AttRuY997FntEBRFRmqQCFjewfDhbgkiLWwPWS",
  "key17": "4GcxF2GRvDPbnaDcCUAH1J6ARTqNsw8GMZojQdftom1piMobKUiZw83zvqpeBZNdjXKCxVWLrYu2oRC37mHacfhu",
  "key18": "kRMT1ctjqFtYxZnvg6nPWju6fchAmonKGTMUvfDtsQgR8QJynTnPntG6bpt14P2JHCoHWb1kmynxyBSMjrCZjrK",
  "key19": "5uZPeabV8MB9MBH9skTtxB4q7UQG8zXX5pufrBtd7AJG4kV6vq8PNnaeoWxCe2o6aM1mHvjWweboeeDJ5MWdnCkt",
  "key20": "2xkfKVtrHNS8Ju6PKDU6cuciSL95LpsAhnG9o6LuBFijtAwdRCdM9aVYuw4EQoYaerF7wBm1587GarPaK3WqJVRp",
  "key21": "2WMesZJCjemmRYmb6DhQQuNzr8w3Nefkw4gDwKEUnWUcVvG6UuSJAjvXtcDo5PxFsW2AvVzeeMvtv1LKNTX4HyVT",
  "key22": "4xxBVjs5i8m4BBVWJWyebyFGMc5VWMvQyseWFQXzR5NWLKedRudo74oH44a77jfYYj35geYmENuQpU3yMWgp4Ldy",
  "key23": "59xPRfD7MzMBpZDSugQpN3xwpUhzaScXwYN4C8NFFfoKMZWaRMBoEENh6sP8xS5nmjjgFyYPUeN6v292w982idHm",
  "key24": "eT8vukjEvwjAg6myX4z8N9R66ZS9TF1FmBHg1SZBtRknnwNp9Yvos28Wf64WLAEXXwar9mw4Y6fpdfuKSJPAtZB",
  "key25": "5Uqi4A1gNMiedjpdtk1qV51xwdqT5j13cwK4pToNKic5CwRQq6mDAZgzgVUcrkGNU58fD9XVMGsnJN5kgivvqG9b",
  "key26": "29FJBV3gnN5nLLW1ZwfzGiz95xWkkVsTNthLbiRNaCvj51JBwBxHSx46zZ1BWzwcTgiQsLSpLmBkgQj4mbHD2dvA",
  "key27": "5xFFUVzpgRJq46yLrt3pB8hbkWXjZ3koAkXAxUz1MVDWGAWa2s1NVdrKxQ3H7aCq7jBWq5sx1R2RDA6Lid4df635",
  "key28": "MXBbya7kPDYwadvaZvn7vf3XzYn6AsQLvZxF4vZyb2nuF8KTb8KD53nmkABi5U5bbkKZtUDdivGTqMr8o4pG1nw",
  "key29": "2jisWh8zFGst7j7KwtNNQZLNwjZPuf2aNNytdgNX59wnQE1NxjQEYxmUGQnMVMe9Prckb88sVJDoSpMCqxwaJNN7",
  "key30": "1V8Fpzfgb6kNvD3GsYW6a2ZrGisXVhMn9QLoUCh2XRTELHfVAyLjhMQArJyFaKx3GRWVDG1QW6LQLRT7BB8AU79",
  "key31": "38mv8V7eViwqH5M5GHSiCX2yWa31di6kRPa6c18wFwRcNUXTg4N1xSumycvXzoL7f434T2hQ8196xQH7t15s8Tfd",
  "key32": "3w7Kb2sMPS7FWASktrR8V1Euo53bvGUSfq6W9iptVcXM9Gexuts3iFad8VCZDobTyZMHRQB3YPnBFz7ruFLJn1fu",
  "key33": "5Cz6bE2zor1ByeX6BhB1wpFxCnd3RpowG7ZkYQF9jbQhg8VbdHHWiTE6XSvnCVKWJ6dirp47DTP9LnwPkvgrN3hU",
  "key34": "ob2tjJD5MzZZEmT9sfe6zfpTv79Jh7UHHJbmY9113jDih4mTDTWwJ1q8udt23iDhnS1SLV6JzJtQ6nyLLBbpqja",
  "key35": "66J3W71Kb1v2Gx6tKrDEHAp2rhVSKykfo2RfvaixXCsXEUoe9ikD9HarHEP5b1oXYAAzEQULidBJHXL8rqR8PXCM",
  "key36": "2UsBqQQd8YKkEu4JJR62ZTtdQTMCUWTJpezBJ9q2gU66DpktcXEgwzfq35vXFJpDYzfHCTKsBWttQwqQsGk3vKse",
  "key37": "5QDt2yFzjY4HDfGheZeWXXwbE3bBgAHXgEwSdHtQ7iocnLenBkVSDKTnZXDtXSg1oGS5oh6b6qJdCCuxSM2x1QNu",
  "key38": "2PsXw9DbSkMdbx8oNebt1Nz6Xn4cciPLknvazJJvsEtrP4YZa2FexzMSqRWZV6wMHQem2X7S8JhyHppVLRFQVQTf",
  "key39": "4eFZBaczLrCc3uvWYR9hX9mXGqnx4fD8i8rbiLaLssEi8x639GpqUaB2L17iD1DudaosXa3uGZEQXtRLkrfnFoMT",
  "key40": "3Y6pj4NZLqot4PkwsWU7WBxpepr4js3xt8vMDxExvDaTttAPwkwe2Md8Lw2BaY85KroAi1dUGqpTQKUsfpqagxxQ",
  "key41": "3v1vdbdzozvMbQq5M2tMuQRXmcnLnoLc6zrJ7qMSXqndfZPkEPKewULNJonNW5xNfFutPuSUoR3wtqyDUrLDuN2u",
  "key42": "xExmSQmv4aD6VquqjB1sMCJkBjMqoz1ME8ziVXdwvY9stxrXfSrcAmr44AKC64EtZfomrYDpXS2tSQEMCE6ARnb",
  "key43": "FpxrR64L7UmeRgfLpDXMjsopoJZp7JSDLZDXNLLTss6fEXQvqg2wRJ82gYsKzgTnMGC8DsppHKAVaneSNfsL5CT"
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
