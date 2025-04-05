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
    "4CBx7itDSbdmaVhnL53wZuch3wPXVwEbKEoi6LfEsWNq5s5YqGviDai8JsizrhmZ1a1Girmus3UGZXhmfBrfoajd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tfytVK65ykuvTthT8DyPqLdNvAGFodGN9Fjzv3bsBzNMDbKiZZY6NoM1gfCfVgXEvJQYiNguUujmDNMYwE2tG26",
  "key1": "23WdZc5hgQRsW3jYS2h5AUhPxPpghYgszeHSfdSu1tAs3nLpro7YV5B7z3LUH1BYebQxhaS7sDfjbkA7sCHyDPgF",
  "key2": "3tPRsbxtWkwi2Et2zHmxAEE25vLA7WxqgYmZXcGVAaFvT3of753vybcr7sML5C7NKze5WgQNTen3qBsNna6tn9dA",
  "key3": "5v4d1CC3c1DVjS7BG427z5TNYHiZdhAX2PqfPd2vcXrtohDHNxd4vPnNfcxX5p87Ly5v7AcR3T6uisKakbAQ1bFX",
  "key4": "5PHDbB7RyNWb3SxsmaJ23gs15e2ejVpT2FSsfwx6LK5QUvjH9C7ErpH7T5oGuAR5LT2TYEev4fpkHR5qcyvrgrGu",
  "key5": "5pKwtbf8vE1DQ37UU5FhfuERLPHNkDrzjJMSrP2bt96gN7owPhhWau7cgBZ3YncuPnUJFxR9r1noYY9g5QtmmZTW",
  "key6": "ZiY6N9xppb9vnUtUJZh3oRN64KZbEAEWFMhpaoYiKsULm8vYzLYsg3RfeAJMLN9S1TNBCNybft4dqFJsMJyUaBT",
  "key7": "4jD59KYmPpJToKoSm1Yk2fSJ6duQWaFb5JZKzrpma24ekiPTRjVxJXxkVhpX7bbsyuYFnUFs7wtDPZ9vtoifus4t",
  "key8": "62AMSxyZsyimTGjp6rd1LDtFCV1b2jCPT53CFUCRgsjDefstGA97ZCNH4DrpVPvGmAXpDFB2Y6cwps6uaLphChWY",
  "key9": "5dr8qbX7RfRHYxSiAJu6B668aBZvR6V3Dob8KcmwfZNLxx5m1Qko2i6BZ2in7Bht5M788TyApEV5vCFoGmQZYQ3J",
  "key10": "3y9aKenxmgpZTDePDMuCScHGkZ71UyZjBe8CqXiSFVwLiswShJZhF7ZsXbBbpdF9cmKzbdx4DRXGwsXSSVXsZofE",
  "key11": "4Xc3L4RSgLLxiTgqLRXtt4ZLWDMsaPuxRcbrkdz5XhaeD1TtojuBR1VxYnS6CjihobWET5VLqm7nZ3nXhuABmNF1",
  "key12": "47Z3RGsdTjdV7CgGtaxHH8vbFiateYyaE4zZ1mdhXQWkeWwnxWbefZJQ3hzvEELYnRzwAg5x8pyzS1e9RNe5PLTd",
  "key13": "2mAuNPsKQiRuJwrm2GyfTvhH1wP16TLXSVPx26ohFmr27n9GREubqa4J23DRvnGtB6ZKD5GLXHmKqscBJa3nCjqP",
  "key14": "52kerS56UFm7bqL8ygRTwdcJgAbf9xeh2k8DuKHZiRYbb13r4ydtJFbV6LjsNrotaN6B4Z6xHEAaECZK3UXKGwwW",
  "key15": "hQT73nwmiK4E8yYxNzjdYgj59J4mn4DsNUmJbcCg4BbAMiPqqu4UmzFJkY8o6MnuJzVJ9kKDkmJMZa1UhcHdTM7",
  "key16": "5d2UoDq3mGC6QD7LmrKfjhorxLcus8chmqXacL8PdwjhYStRfUfRZNk1DtNuUaKEgCUZu7Jn1gJits5rVVMCaB1x",
  "key17": "5ycaq6wHcuKnKxuzLCAKH4nGgGB3RzqjhUobbtceqBnq7z2eGCC2tjxHBnsbxjNf8Xh8pw7wokQwL4mENa1UJ6tK",
  "key18": "uGa7mdGwWkzxUkZ1fpCLekyfdfBzqAY4fHK4bmmnei6nM1G9TYvk4gDrvmTkSbFgfm1u5sUmX7WyQr9ATNDi3zZ",
  "key19": "5xQnah8bmpaRN56RP96RnJKkZjjLyZDCr7FUxwuTeVDsvEdFrasKTRSNRwtasrDEkYje5deG1pCuxRxEXT8kVNha",
  "key20": "3PZjS5WuFJ71DzERgTu8jYnHMGMsK51HKwULFwEfUqhT3WowEk5UgK3qWiA9xqL3vDJYQuCLCLva3YbFPjUhZz65",
  "key21": "5F1DK3cCojMXoxQ3sFJjs7cc5mcXxKwggKaqaS5kSCyBupxGAxJu3MpW5E6pZ6zkCLUYhFdt7GHGYYztFfMJjb4w",
  "key22": "4Z468accFdKNR26KxZGpxvvi987HjBkNNET1wH8zhd3kGZihvUKkjmkjCEVeNo4cJux2URF2GRkzLp7wQMQX3F4g",
  "key23": "3KFF5v1bsEnNuXsC865gqwG6Vytkvazkk3Th9UF7yrwdhQJzGQ4P61vvMJYVNwcXopfFNesuU9Evmy4vCs66gcBA",
  "key24": "5LumfyxEAmBDepP8XuxdLqMg4oYRmgsshUnoM7C5GTNsh2qDZXCWqb2YJMGF8JJrH1VoswU1xfbu8h95eY2EGUoc",
  "key25": "gHyihjANLrq4WXRDPZwMoG3kUoAPs4MPeKCs1kjdovfsK1zcBiRonhFhduF1Bj11aaDikCJELTQw4qT4CPiKnVD",
  "key26": "2kQQfr6CFRaXJqhtzcxKa8FdTZW7HhEWFbdQ76Fj6bsSVCfB8J4UWuuMNJyhyFnNSCK6ZFebuwwASSzrcCkDtGAQ",
  "key27": "21hBRuM6NA1cJVyFbB3RMu6hWwzPwCWtQpyKCfeMasegqToCgVrwSPfxhftgxd9AqRX4S3v4x449dM9XyRxmGfUh",
  "key28": "FTtUFcYYCkh6kmVXf6Xeryy57BC837F8YEsz6XQSxnZRZ3P9sPm4SVoUBJ6sYz7dRYx1MHQt743YNLYQANsWdjm",
  "key29": "2XRmqHF9Xc95PkpzuviLgrDBiguaBLEWXdPFRi6by4c5sVgrZZsKbcaRU8uwV8BavebUchFq3gksnK8WjT68hviS",
  "key30": "2X78Rpm9a4vfM4pdUcFeUitBPQvi8J2XxtJ75nxuq4hXFMZU5ShdTx1cNEvWgFCExow4wL3U4SNtyK8rtLAX17LE",
  "key31": "4TAJz4jc54X76pNXD1teADa67HiuvePiF6VUjsHjU9igRz3nMYwCdaBHPMbZsSKKT5S9rafC45bGCEqCEuNMpMos",
  "key32": "2B3z9dDSr8EZMTq1srBWyATV3esvRoQx1cZK4k2HUUJWvJRb2WGxu2jP9cmDTHq28Xi9xTvV1YbfY6abX2rJuNTU",
  "key33": "417RLrbf4F15drwprwnsZCKxgAeCrir14xRMfRntWPi2qKBG4Qak9WwvCTrhhtqkkxVDa4j3eXzTjxLcJ4cDQRgo",
  "key34": "4KGadVvys2c8q1MpjzLEwdhSmydp4rSKnEBvBxvf9mEXQyCZNAMYJWhixSLumiRkSdmatJ2T9Xe5N7yfncBTfA9u",
  "key35": "dhSmSCdWZUZRwwW922unnKBd6CBHks669MtgqXdVf2d3AxJJyxxH1n6aXc7VSjM2z72q4DgZ4gZm7AUyrE1kFhm",
  "key36": "5T1fCmAXJmh2yog3RWHhQKpnzAgDUKUfbSgwhaEp4XSP34cAWxxzhFMshdNw6aMLYBo2QiYVJV4S39DCtsYbeV43",
  "key37": "BxjKumv8EwaHdkC4Kd6i99Zv6coS3vkAGQ9E36bfn79KKVPY6b7krpSDmLBEpn3AcEPYTV2fMm8mNGyX38r973f",
  "key38": "31TSN2NmaQ9uDJuUJqvEykMNJ65MAbdeJnWYg86Zxn2Ey9LPXCzwE2ZHgYma31YSDkcBtyLBFFJ2bvcpHSK45NRD",
  "key39": "3nWpfsK49EWVsUAWM8N6u8ks9Ukvxqnow18bdVqiNUbsg58xEnxrmTH2azgiS6oHSVpKr3pmGG1EbNt2vcNVVAWJ",
  "key40": "4rvJFDQnXRhFCSWG8FsXrWDQJeNip5f9pEkr5pDsLrv4ZgUcMkX35AKkzTmMHHTNRQfynqvBqzJL2bUXXXqCeTzH",
  "key41": "3nVuMo6pe9S72BCjyEvsC7LxRi25W76wGb8WhFjdmzgHMjNMCVjtnEgqGB7LXeNu4irnxJmYiXiWU2bDWAogU75c",
  "key42": "3Qzoxitu6pCBRSkSxL2iPxjG1BmcUummbKkh72w6VNjeFLzbbGJyEKjjgC1eWwH9GdvYQYSDqLM6jJayVHq427z2",
  "key43": "q97DNFna9V5ADCdDkSSupFh5QZRWZp3wm82VZZa9mAWt9nqrrHyNiBGc8TaKbaDGh5JrkAt1GCcgbgM5CcVoE7U",
  "key44": "31NSWy9VjTeMLavSiVbcXwetwbDuvo3pz8ZbbmMfhj98VajRi16a5pgf5BsxwASSQCdixhdS3sMt6sqTW35YCaxQ",
  "key45": "3h5wFUJqPopYFciVqgMoKJ462i5XbRqd6NHPDjYaFpR2QTizAA7wfNbth3UYF62L31SHSdjEhpR9Ajgz9jBAU85H",
  "key46": "5gwN82paFyPKnrkwqUfDaJeydeVEz2LEiiGPDdN4gdK8Jxwa7td236P58zsFAZMhBGkACd2wVNuuk1JKfgiSQcdq",
  "key47": "26t5Kr561qykpbcggN1d3J6sT7tkcQD1mREHorEUVWkW9nRrubkQUcrvJ8dqCQC4e2Cb1GANjCkYgfeS1zfmVPfV",
  "key48": "4knhcJjVy4Xz8V5PqiqXWLSq83jtq6SfVxFFWi4oqh42SBHocByxNDdp9NxgbFiruqibxju4Q61o6P3Kw9aqCzLJ",
  "key49": "3768fQFMvEemAxEPZTPb5a994PG17qZ4BHMqPpb1DfW4PBWE5vCtwwQptdVgzYUETkSmaxrqA8bL2Nc99UHRkekQ"
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
