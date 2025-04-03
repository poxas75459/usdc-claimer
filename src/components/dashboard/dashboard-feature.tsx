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
    "22iZwu9XFgU3LuovcfmVoWz7aqKHjyTxWDbAvn8NhgfEq6rSDb9nLwQLhQC4QkBv55EUc1W2gedSwsQ9JQ1oxWis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61sZsEL4JJ81KxSup9WwKDwAyMRpr9fEr3KQ2HAsrGtMYhRWMvN9WAJUrNcX9aeuBPTPRgStuDdZEnZSSzaRrLoH",
  "key1": "4bFvM4DAoEyDkvKxUXFt4ji58iGaHd8GNaXQTvgDh4g7DEWSrxgw3erHYiw7WteiHmJhVfEeez2CEAQmA7nTgXbj",
  "key2": "5RmH3hPEJKxKDGCwLJLVMhuBXQYzbua4ehJBSzJ2J9nDNzbVZWx1BmrihzdgJyxipS3P4fW8LhhmnJ66ohdws39c",
  "key3": "4RELX672j4eMSSU1yTRMJWy271RB2vYvyL5yo5Hf5vM5Ms68hCSPu33Bs4c6Sq71oMV4nWKRwwVeLLrHgBcrawYh",
  "key4": "3grKMMfH4K9sFJBvSipuvncwzWepKKn8b7FPYxJvVDXHrU3NBjaHucsga3TNMkDB3S2R76qMvwEahcNNKHgQhVy2",
  "key5": "2x2DzVoBuU5SuYsVx5jscjBFEjxERnbrudFh2uaub927z3E88fMdjedYiBrsBwfy9mC7uUPcfPAGCU6DkxzPs5dX",
  "key6": "5KWVBPFgKuFQXe6zxVMaM6tx6MzcxABNsDJEMKmYbzhJPZFm8AfW7SH3XA1aik9HadK78KJ4D6bWiuoUuB9PRDCL",
  "key7": "5coiJqh2eMc833Fq2GDfXWrApdkr1nQPq1yHoD2nTgP8Z4v2UVEeEcaTHXDAsQCeKDcTW9bKoFFA1nxkvSfffjNT",
  "key8": "574Reg3Sgav5JdP9fvf2feEHpb8XATqUzfE9VBPACZdJCJVeVUgkg6WbqAxkPzcuKWADzLT7aWdGV9Nn4WxvrwQq",
  "key9": "2gAhfzhFZYrXNdNKsk4nBtYK9bVo48zLDQroucD58wbTS7N57T5rmfoyQzs1ZHqbhYE9Eju7pDAoTycRuRU5L5iz",
  "key10": "3mYw6fgsqfi2VTq9AgVWDezL79wMJK4HzUtvxywBHd2CgsTH6VK2FEQ9VNgZk8s8ABEF1EeKCrW77FwpNnHeeHWR",
  "key11": "5EMMW4VVpzcBEWR4F88KQZuDHjXH1vxQZcncZZMtLUEV3x9nAQhko7uLhtTRTvjNt6PbnJ2m3SuUsbRijJcwG1pr",
  "key12": "35FNv6itjAoZCwxTcLndhGuUpKK7EzZinEnXBGLi28LBsn4Mc9Uf5cWtXomzTsPaSGT5NY38Y2cSmpVXf4qJNfgV",
  "key13": "22Ea7f4aQE8h5YGFJ3aBSNPFYvQ3xCFmy4AwEq59DZttodboxs17cxqGN7KWjSxaKWgUYh75cF2MqwvuDGwD73Ce",
  "key14": "5QH8f194VUcm1bEDnYRMK6exxvy2G6VkqidyYnhRr9xjmoRxkB2MwkQ1QH836ZENw7E7fc7cFEsv5ZxKEBr2aVLQ",
  "key15": "4kY7NkRbbCkW8M5Lh5MawdMQsQix7F16E8BQmCVwxRv2VYG1AY1KjqKUnZDSCc2ajPAGPErzv9iZcvY9mn2YuPqV",
  "key16": "QQMaRWSABuPzsQUpFfvGrHavfsyRYmAY1EVWSUL1Ragj1bxcLe25WHWnHNnUJY6NHZKH52HVke2nMFS5goMh5eW",
  "key17": "4YjwMCiGAH5rYdwbtKPdHMfzW2ZgrdaDhNqNzp4bCjrHb9jL2cd8A6EJDr7HMSeqVLHrfsgWLBjEAJwJxTUVYX5g",
  "key18": "2y3nHRWuG4V7M2tDtpEsipp7YQtEz13UeZ2Cp5Dkx8FXRQ6acVeeQ3g3FRGQL7YtHXAi5NpfP7dRqRsGZtJE7gTz",
  "key19": "6Av9PAiY8bWbBfehRMwHN2u2fzEUpVri8aWMiGRWoBJ4sgRXJpikeDQrnxMFhDZCAsu736EMhoPkuMenTZoE8BH",
  "key20": "4RC78UUFQgDdzVmZqisRsScgz2F84fcNqybkBBARZuwQ9XxL7q7WUWAJ1PVPzVjCS9RES6pfXYZYA6xjWeUo9KnF",
  "key21": "4QXM1vbfpxjKYYGSNGZW6sbQFPzW2hWkhUYTjT2CQ7hWZhMHrKXYomMFq32wvXXw9GeUEZ4M2R5BP6b2UoTbo9HP",
  "key22": "371SPUHaY9UctUz7SdbwyqoBeVvsnRqq8rgDN6NHZQki6v2DezCdArwkmdPhVtRxhdYtW3UN9SCHzT7wwRaVzdCT",
  "key23": "5PKjcnFYosTx4P9hBhkrNd6yvWpg9b793idbQ7Uy4kXuDeuHZf7ESD5yvqjV3oDS2wB66N7dBjUNGuRPmgJs72gy",
  "key24": "42usonczhYE9KpVCjeJSh9bdEpdV3nFdtFU9rJzqjUu9vcgtJP7cX2pXe3qMLEQsArq6Td3Fr45pYxznDbDjTNTa",
  "key25": "5wzqZUfaxepwLCdZn5wPp8q3VNyt8fRiM5onKQq7jJgjiJhwcSUYNCkQeBWJRFEtLi81no67LCbcPuHM5xRCTsmq",
  "key26": "5w5mkhv8fEXmTgQ56oCYSSWup7ch5z1iRbCpaoLWyujMsGQHjyqCnc6EggARzLjcERMs2UQE2UsbTyMT6J7wnfeK",
  "key27": "8wjjcrmzVULRb8sSUyWR6cMsyhheD4GaD5ixVjGPJZWmh2d1f9BiFjm8ojUT9QoPGoidZRAvHgPM5J7JgqRdegD",
  "key28": "5foDWrmGUckZ9ivdGw62QYfRJK86N2vp1KEAjsXbH6XRGkn33QuvNjEh2ZWJbMgMYMGJ9TBbXn3vzKsLUZYCcmip",
  "key29": "62pVc5Lr2A9cvkQnyBbHUEEiVcTvo67trS5Ct1g81M5VykqhxUuUTAA3DcJ22dEKXn7rjhGAWcdAszPULrwb4WnT",
  "key30": "4PD8gb1SX7KYLeCHnLcZv52GMzedj5LZshWDWTZ8PFx5Nq1jykhNX4YnkargN8EbqiUMukMDJ6hT61kgmcdtp7Ps",
  "key31": "3ZHe7pmvJD8HbAoU3YfWBc3ToCtC4WFxTgPT5kUxxFswhqt6w45EoLYGm7ETyREkqrtMNMFZnJz6jgLts2igqJiA",
  "key32": "2sjsJ3pYDe5CKz9ypwpHKymEfYS4v2zHCfQdKa2iDUeJ9QfYCiB1LBXECGGTdz8hyUN7esUbS2NKtcpRYC1y7cEE",
  "key33": "3y7k38e2xoQ16osXEuUs8mY7jBiFukhdi2v5Kt3sHFHo7yNkopyfemA8ydEhAnzssnQ77CN7DFeRddTaicEzMKB8",
  "key34": "5SeHnTAhgFoyDrqyWLECtBtcnumHMgH7KrPqAwVQ4HZb1Yz6S5hwaiJzRkZXaGcojvHCSXcUSM5DrS8YYpeNJoTV",
  "key35": "3FhK3gLSTwpP2Rq5vEYqyJDCjoAkaW9gSFrvUf57bJMVsdMWNjCYvNqYunsvDKAptVKRBgZGsr3FWs2yziiTcK2k",
  "key36": "QTsYjYPr7qHuwc1aC37q84LcKo1cPU2TC5sGswyXWvGWtwCSrBNG3NZMqttkffSo99L7e326yCWamJZPQdfjUpQ",
  "key37": "5Xnj6rKyszG1uQ4AMPxML1WRkQXd7t74UcpUWuuqaWFimeNb9nXbkxz9yXoRZ6gjG8dhyZ9z6UaD6pajnj32he5A",
  "key38": "4FDZ54SJjHKxKzpxcCjvQCZ69dC4KhjXxusdNcLD73x7xgxZSraFvLgiqeM2LDMJH4CPXhaAEV3a88TQLzv1bus3",
  "key39": "4heYG9JWrBoXTq28YWGomQRMwaMYBA1k8TQPS9Uay7aUtpyLnp5oX67jinLfgWFykEsGmKwSoHAQA9RGncDUq2zK",
  "key40": "eW1ixSWWAAWE1mHffj91iN4Uzbfy7hywZNyQddL7TCPdiBy8dXAqiSzpvS2LydZ2VP3Aaj97aqxkEdY6YaBoVEM",
  "key41": "3T3yC1HF4bFu16rwoD5WTPqq726FYGyABxSQyUBSbunVANTCfSySGnHRvW8gqi5DgWUMGEQ95FY9Em6UX6tM3gya",
  "key42": "3bwQYhcnm7GWdH78wqNQnCYjkq37UxJEfg7ij9ttydbwJC9FdEP8UcVciDaxSsE9bCXbXBbbcmMY6DVcwaYKEqJm",
  "key43": "32RHVxToNE2sSETUoyG6fXxT2NB25TXp37MM8v72TkchMV236RDiWa6mGWxG9faJd2a2ag4VKevJ3RMfZs486Lfp",
  "key44": "kXbeAZNqbw5fbkRjEzhmGRJweoofgcbvjsYhCDuJhBGDQ7cMXSxzoSWDvq5jr7JcT2Q5PiQXa3dY1ZCrTy6fQr3",
  "key45": "2zJEAjP7XCdYwoW22Q9JCs3VUPjCFRoZ8VikcszAC7q3e7GBPr31wZDmoa5QPPhHmc66ryuxUUsvET1r8sfsC4YM"
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
