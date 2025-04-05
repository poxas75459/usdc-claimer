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
    "3mhZC6ZFb5SbysK7YNEVewYaVYf7Abmj3f4pGrLTreAooBsJQn9nq7dz26KGznPd7TA1HX67CgHVucBe3Z4P8dAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TgHBXGApvEj5YygRARGLo4ui3HQj9AoFyvRAagRqGQHMHvj5XypU3KXZmLeUkeTyjDzVxh1JEaECUNPiTcMrZvC",
  "key1": "4XbGvN2XL1NK63CphHycPkoPxmzMuFqCb5LtGGy8X2GWBP6rR37sTxFNiAxugkGToYYu449deMp8HnKt5VyGqysA",
  "key2": "5aeLhY1o6Ta1TFWw9qep29UbUmHavM752Gbi3E123XHsgGmD8xGC4SyiXYgQ3PQCHEvfmeQJR17ns3aPZUxTkp1B",
  "key3": "4UvwSgvCCZma2haQZY5HVkLtUgsEyWBCMhWcCsdvQAAisxCM33CscvwNPWAJ5wuLvmd5zjhMCx6yjRp5fp91gakT",
  "key4": "XjnxgqEihJwg4WgJYXU3xpQxSFb4x1ECFAS7VCM3jkKv13aioy8HxvcmVRSpGaZtb1ku1pJjCHCWsRioWN7XTnQ",
  "key5": "2Szee8B9EiRuSU7oAdTFBj86J8Uq4om3FPqpfWXaZzNfz7krB7teUWiQj3RA5AnDZKgPkKzWqq2wsw5X9pktmTyS",
  "key6": "4ALj5k4jdmTcaocW7zwsJNretbLDLTEAy36XabYuBe5ENuv7kDt717LLfMawDnqMyPrfAm1RyDNXbtGj7XTp88Kd",
  "key7": "21QQJFNdh6azwTQK3Tdh6rZhWFw51YdMqV3TiFX8moJPZ4YrHhLWeyupV6SAgmRe9Efw1qkbcbyrxZ3jqn4ADAT7",
  "key8": "4VXrzyhG6eS8RhEm4qrVeLg4L8y2Vvvhrc98ho572AdAFSBA7c23TmrVVVBqGe7D9Dzhr91gbpAsHWYdeDSo4WB1",
  "key9": "49Cbdowgcuvpfavjsn9ryExpU3y3oyYo1UHYoKr29PXFKydPTBDDU7obeXzVkSw88ouAMTn8h54mjtfnSRSYgKER",
  "key10": "21FU2AQ5zbovn8Uo3TTWDaM5hSibQJAvz1nn3LLhnpjkRmhBM8RcXBE6etmcsvJquzWYUZCGLboKFXzF5xCTUgA4",
  "key11": "hosrtdYAU2qB227FShc2vjUSBa8LYTUXFSb6QngKDhUWNHfbPrHhJBEQ6mK9XcgdAaiPFELXs3QctDeFkQr2Fuu",
  "key12": "3LGkQHk5dKkBn8qC2BX78iancv77nGWJM6RGKHKGsiQHUSUCLy2XEhfTnbnZkCjBGjvpzEgmWprtUBDGTJFSzaNe",
  "key13": "5coYQiKbMB2bqY4KMARW9TD63GKWzuMGajS3y6HEePBoubHjo9Dsx8ujvzLcZjpBcHNzXZcf3C6mAGPaChLCw6Dx",
  "key14": "5iCu9UMLRhRUYdgiR9kpShSg7dujTjAi4himr1SyqmvmsiWP7qChd9VgcXYBMZarnWAr9ZuyAY2Ndv2Akx5Zm2VJ",
  "key15": "4HU7JHmtCdRbcjVWpTfPVdRHmugj9pYUaDW4LoJD59h8fxpCYzeWbPS92qcwEFgGxZkNx6THXG2RzNaDC8jHRFC4",
  "key16": "4pbH7pNfKP1BBRS15LP1u4atF79CX564iWXo2HLLuvKXj6BWPMSiJL6JV6WqjkER49EDpbxJyQQiscm8ocXHepJf",
  "key17": "3PmL9fBZUfhsLWcfSp8eWDn7iB4k3TK22BbFnrFntyccihJzRKz8HxbAv3PKmhhigb9KMcK3HdFGqxuM3ZhH1NRR",
  "key18": "2bjMDPkcMQMUAjLJn1k1iHLL3VsTnmgYoCEZosnPMg9mSiCXUwMgtvqb2GwfcFdyd1hz4eitSNtkXKv5EQY6wQJW",
  "key19": "4umnV61cpTJuG6E6yhouQcU5M1M2VXugvvc7hxQtwvCXvStN23XNUF4g72jzhrqfvk89B8SPcQXePPPHDkN2K1Jg",
  "key20": "keuXEEQcsgLuCqDKDuae5oj9Fcer1Cr6uQzRmwKXQ5dKdP88a4vQpR8egwHduDFEQ6dJwpqqGrPFAps7ZYhcNzG",
  "key21": "2m3Gw7wiAkCwJVsKMmjv4iZZJ5qhNwugX7i1YFCpa9w3xaWrczwUgFWqGEyU4THfCgxWRw8xZxGCKT5vcxJhdDUS",
  "key22": "2Qst2bvAs5ZM6pWzTbsi5hAW6HXJB1HFjRJxUgzYVttA9wh3XusSGdoXzFfQrXsZ9mizH61q9N6H8fF2wYgfWVPY",
  "key23": "3RnWcL2Ftnv4GhAcyAHaHLw7mt8pHzz19tFBorAFU1cSsRwHqgeSN6LJsxDfL6byPoSbqqBFvWGR8XRaXoLNSpGQ",
  "key24": "2sotsNsrxNhFCrBub4FUV6ZoRboN2yxzzfyERcFQDoMjEZupyfDqTmz9srQRdJmbRQn8xxfeee9BYcwV4A8KFGn7",
  "key25": "5AJv391CHiTtZvYVBotm1z25pEBhFajfLjerZz2XMTLiSgHmakYAX7fmXiCo2dVt16PZXNasSihmV6dUXJ9eMryw",
  "key26": "52oU9v7e14SBG8KNV79bKdqbsEJFFEkYs1BouicRFS5YkveUGJpLe5j25p3XHrDAzyxgg1fCHfeTvTJDWBDZMr5G",
  "key27": "4nYL4b5251MspUKZkzDQFYBdoFDTRwS2orZgRJvCyhJBrdQ1xBzYgmQve8Zfqp93NfQ27ZkwcGyJwTCckzYyFSXF",
  "key28": "3aSrp32HAcWKJrZBrR1iyRR1hnxXeTfhSzzKPs1hPPdkhS5o1SxhTekRsRLa6tthFUCyhj1EwU8RUQPwJkYChF4N",
  "key29": "2LhNSUB5zA7Rz2QxvKp3KSVexu5KCmkHVQVukrvXBaBvW2s8RFayWztGGP2ruir6RK7Lr7pU2RfPtQ4jKZ4HNUgV",
  "key30": "MFeeR1EvMS6G6dh2rvbG4DLLMYGXpVyjEUpuF5GCdMMrw1fz2RSRAR45f6BtY8FxkddN39WYMmW513VoCjKao2u",
  "key31": "5V1Nbj3gTvdYRmh4jn1rSqdFBiurtKs4wJ3YUfvPva9sSrSGevhTaC66gBRFaAQM6eeNzRfF6AqTXo2xcgSKQC2x",
  "key32": "2btZGGXkFV7QMDV1rjnEQnBqM2S2k6Zvdc7ZfjqGtKHxRWj3cgg2NuafGQ7prPAnHB9ihncyEj4SfocYPB4PcbpT",
  "key33": "3jN3UCHJGrRXza8DYS3QCX4CetoeZMx16PsAYVrCD7cAQ3BQhkEr7g3jodwPALfCKfeNGGs1xUfM1f9kZq9mMe6u",
  "key34": "8SzRYuwprUi8ZEYM9AV3qMeKpVn8mCdduLzPi9njHzsXXjHqHsXEKPomVBhX4HMwVmjA9kYk6gUqayaF9Liu3cW",
  "key35": "3uskCaTfEMnLc1bPiSc9f1ktJwRWHuhCVhqpJeYv9aU5fyCDmBe4vXb7iF6FSLqsSAdpceowZfSKBzUVsuKmrkPw",
  "key36": "5NiJTDuwSmBmmVrDNf2kGZwCWbFDeZk9oDC4v3aRtvzMo7LsTRHFVaxSnhqMu5v1stfrck24rWbFhcAft4GNkhrs",
  "key37": "kpv4KdGziXRSUU5Z5k1cShGa1G4aLU2FjzmysFhs4Sxffr5KvFeicD8ezdKSJX3esX68DtafBwXsVD5oQw8C7BD",
  "key38": "29Hn4WWcYSCQfU4BTJzKDWtNVt3NPpeftfsm5jXfPJ5jzdAHrYJkYFW9YBx7G4RMXpHcSLaSvCQCZzHjmHVXew5R",
  "key39": "3bk35NpryYGYHZuqr8VzpnmNQbj4HYzGfPAe7wNQx1x64q1fP1kQiJjnZ7GxFNrZnmYmq549aZxC29tcc5ndNMxW",
  "key40": "3n98iVh8dpxSGmdzSWUeg6kgk35dQ3pz8ED8FVBt9sk5RzQcAxDx1nKp9F9kDf2HH2tM1B6wxEjBzzVpLNysGarh",
  "key41": "65KWXHSG3WMcc1xdwhERmQbBb5WHXeV5snW4e7SFGuaxgX895dvnCk96oLCd7MyoWYoVnhRiEyEa45GbvAqQjgdg",
  "key42": "4Lpv74AiFRZZqCRVV4vuaq1kF9YfuxTWysDk1GREadNDporSCQi2x4EyH4wEdxkVXPnTtRXd8P4qYceM3X1rBFGM",
  "key43": "31p2NwHRRuHrPSrLehAqUq5JxEumox1MB2fxsBLqT6edjXUnKKdw74gECCLTMWPjwFWeA3nXkdH25yvkFuVmiBGX",
  "key44": "325gmyotfwMUvycvhhcqekr2CD113fMrZMa66ySMaTA8fiGQ9rr7b1vbPMCQ5F2MKXYHMCga5uqCe9f4vVDT1T5X",
  "key45": "5no5KD6zYmP9EL8sqDymX2oxg7XGPJLdFP7k2QbkxpdhLu7zvxV6apXjaR6vRjn3vy2UCw7Eo2BZGMRGBNYYQ1yT",
  "key46": "eh6DFftRtkehZvFeSGHoHMoosiNoUKyBm2ArW2KVw8ujEnq8npNGneAVcSJr19vxTBjryPzvAwokmzUBe3MjcYr",
  "key47": "6NYDsRAcp6JUGyH7YFr398mzRzReY9H6h3xg33KBt5ahXgH4FnwWv7UkDE6dMtsBcYnprbRsZdRfMmv2cGsc9wk",
  "key48": "4fkvLdX9vf78Bb2eKuQf17BWxCHPkNo8EBVZc3bWVy3bc2rGyNFxXYAwBCnVX9nuYDKAKDBUE5GVVFqTFv2Nmfev"
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
