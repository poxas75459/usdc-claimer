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
    "gZE1ziCWkRMWEazcoYfwReSg2NoEfKhaJs7yrhNJaLtz2RrMGgTv2zPZ5S4vHW3F2Wi56qmJDHZ3526fWEjW1qL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k9s8gAmuYQM12nWfH4cArJBsF8QNPPgFAdu6GLFfzPYVZvdzGdWDRJ5tFQnWqgHRfE7TAJgncoRAiRr2iKhHxEu",
  "key1": "4HQpLxNjkJgT2GHkHZa7b8GYhSQ1uGiLtsuEJc5h6rPfLizuGzmB6hjRRdayBouURccTCyjT7bz8oWdjHxZJu9CM",
  "key2": "bKaDhetguj5YkjY4vtXbbGUQJeE99B28izZBQFAfUodTSDmwAXmHDiT2ntqFyy7F698DdEA76AZHvGKpKyLts5Y",
  "key3": "3CYLf4T6U9bXL1uFEnxmEtxiVfY4H2K97strjy7BGky6veCMVx1ChbbrShpNiKDwLcooA9W7RVo6Mwfe2oMzh1Tp",
  "key4": "WXnqFcEWYpYrBMZVrnHJngAXeBxTNhmE2sB7UjdTiQwJwftGSrQnciyvzBvYmCdYk2bdytKiakSh6n3rFzrcxke",
  "key5": "5oayJ99VMw6TNmVzG72aoP6sUHN5Sye6BJgEGyyx4zbu7Ceuv6kRCQwyYnMf8dMBpQ25K1AUtvBCrow4mbvUoggc",
  "key6": "2riimCy2nsrTCPZbntSeq8WMkydtx9MLheAffumLJAAPUpkWwDMfN7L2UPKEJaUv5qsPQGLNZjHL5KPj1RcnY4W9",
  "key7": "3JboEGQjiFsH3LWjB3EKr1HBG89ctUPXrdMJncRmU38iPiVuv7YqyANMSnANzqmMSnMRLiKj4yUPjin2sLEtTBwm",
  "key8": "49ArdPnddP3Yq4s8xpUQAJNqVKojUVwpSYKXQSAtm23RrS5uzDdLsvCYk5zPQyng9dJPWYgAhBvDT4Yr42fhJq7P",
  "key9": "5g33pqa3BiuSdEde6kMnV9KczCM1w2grUTFNZTd9W8QYxjJig5CbPFtAxMuV1R6vQdRTXa7RqTosEPd9MMQPddvZ",
  "key10": "2yYMUkDvtbamRdefwGp4Yo5rPGjih9EKriaFuatZrbadco5cU8QruuKst6EV4vv3AvVcE3VRocYYsBhXFby8CWJZ",
  "key11": "3XmAFRoruB4LKujsoHsuXu8Fbx8uKNU8ozQE4K6mc8djVe19Uank6zYCCuDydic2Qt5FbLFBaMET222ph1mBqwKW",
  "key12": "4UPKQZyvLURdQKrCvYHdZqVjoVoqiSFWqnZao4u1F8YYpKU6jUfAVoEPyp5ovyLMYwFZ7dqDUXYojAGSgB1sjMWt",
  "key13": "2bd4maacgGtm5RzUZVsuKHDovyB857kbsKubZX7DXwA82izfVyG68pH6ejKiQeBn8GPFt6mgnf9oXekeED1jjBvK",
  "key14": "2AbSnia5FBVrSBcd7EpBHR9x9aPqe4ixYiKLAJ9rQoei9XJAJhpz6iqJxb2piS2CAfQ3isWorXPSK6ePJ98JaETD",
  "key15": "2JmYb86TXH6vt46ZL2aq1aRRx2AMBsvcnSjrTHXRj6qhFoZQn779RnCfTByzyCcHzUqsEbBExq6pANfqU2CYpLLV",
  "key16": "Ahn2G16fWaVHrDog1onBBBtUNpw9fzTgpXchEgVFVqHxaxHxk9WPZBXE54R8SFvqPaydR5BBYGNrfu1Az9xyZx5",
  "key17": "4vJrn1Lcp9acFieUZ9Dm8Dw7a8w8e8apGwEm4XrbXXXAUoTF5KHpKRKmDnKkrq23CX8XfYe95Y7bWBhtLaPMBXUM",
  "key18": "3f57D4GmqUyyDJARsUjNdJS2GgGcGaKXHEYWQjtkQZxJWUYEcHGt7wtdkKhgXMyygyBJbrJNuruDiXVYpLyjHj94",
  "key19": "2Qtn4tA2k5fn7AoqMz6MuZCP4nFCpVcd7XHc17hu7ebnr1QqNapmfwUyQhWz17bHPmbA5L4HCQvteeMeNYejzkGg",
  "key20": "4TViN3Bnbn2jNRb4vcA262DdgNBw1FmXtXfpDpRFg6ssdUfZYrUWv3QdJreaFjT2V3muADdxF8DaTmXtroj3c1Fw",
  "key21": "4HzUs9asKTDgCeP8zw9qqrvcUegKvjvELxjd1Am5Jv9CxVPQaxqcvwTG2bejBBg8SVznfsC5j3KiJX2GeaumJJGv",
  "key22": "38RK8YxNSPWu6LrcWZtMEKQrYpjeddYAoRibtf1tyoDrQA1jgiQVT6DSDb7d9Fe1o7zZAVTkUCueY1SPXitTSFBf",
  "key23": "3odo8tT9JazLHJE4ZF7VNoLctJeqVmGHxgG2S9rDMKJMucWw2VKVR4CJoC3JaHgqpiEfzq6GSqoUMN6XaRmxKAtk",
  "key24": "2jeSSvicAujwGELSsaHPbNaPuNUjzGt5pwpBCcZX7jpd9wn2VoDhYtzWyQw8f5yFwMhwfNpo12hFLdkyjJfmVgZu",
  "key25": "2w4mkD8WoBSco4suPePpQBpEErVT9w25smWRWcvDQ71mkPwLHkwoeYXWwQdK1sQn6uPLkiau4K7jT3VTbnUZv1UM",
  "key26": "3AckTvNT362gkG2DkpFY5tS4vHaaXjfV6mKh5Mtfr9V2U8aYm3BTyAqePJ8anW7qDReQgaKQDFiRxLZ9RfVu5BJc",
  "key27": "5TRwAMxNkc4nh44muT9uQygB44DadvoAp5RkTupFHZy47vDXEhHd6cwqLHGcpQRXtKb7KfzJYiEBAJQvqA8UnC1b",
  "key28": "2BpEvSCy6ZVbYnSpytcrpe6T3ecjPudyJqm7DgvaJreVHfJzBxbvtDLZiYUiRaS6HYpPFbYMYUo3cxfFS5j5T22R",
  "key29": "5m7wGN2MHJvzCD24BzqRnaxMdsavyw7z9GZenPpJotcht1sxjUZdCBHAVe9frNTAvRUmYDnGt457Sh3HWjD9Rxi4",
  "key30": "3XTj9axxy8GEDuFHWHrDNWUoFhxK7KXTmRcFg27YANiroe4GSvqcyenRq3mHVdUSBb73X6ntZNdBnk6JSdAmePS6",
  "key31": "2rNJdxPF33zFWeVe5ZipgYoCfNP2oLwgAqUaSytZPvJ923NFQc8t7gAx5WX4uFetyu7yxr8W1YnTv7LyeyWNNoWq",
  "key32": "3zbzaSWQUeNfEmAoF8PEDHcabDjh8Nv1eRtTboqJ7xpWNg8jGquBjJrP2d2B6w3exfwc91aCbRQGwwRExDv8fY7D",
  "key33": "3aPSfXmf29V3kC6SD98dxYHmfmMZq7Vghw7LJ5iDeWiXmUgTZm7orjJz31FtSUGF8oe9RiAAazNCJqWM9UC4oGu",
  "key34": "GwfVB64wnmpMEXu5JCS4vKb41UX1BfVS9kYAvAREewuwFPdcHfQfNTvmq3T8PX33cGa39voETyiJPw482SgKoN4",
  "key35": "4H1KwhA7EVqbiGs3VGd6fJmGfQP41DCXd8qdoynobwBg4p6dLkosD9NDECH4mmDHTYBPayfUB1dEA69iCKn8W7DH",
  "key36": "4MX5xLtV6nSgCZx3KswQGtYBJtQPXpvFkVbpYEnicWvNrkQ8iEYLVbE1955o9cZeRNbk7qj1aPcLzqaX49aR76dR",
  "key37": "YDKE4NJFFKEBr2f68ZrFziReDWvmY9FvQsKSQcouqugQXpVPkiuWYAsqR4UnRt6TkVDmBgUHW1ng59CaNREUitv",
  "key38": "J8EJCaUw13MuVmkSVmJ4RjFCTE6GAtN53ofvDktstiVDgzbmzVSrfrDssgJdYewTCkzmmADRjf8wqc3q166wP65",
  "key39": "5iVQwzjrFoJnmC9JFfq6YJkmdvxTDnmA5sn4QkhS1CNiT2RjtLzWuesaQ3qgDEmtDCuM728JB3EJV33pSqMMts9v",
  "key40": "4EuDT4XHdLFNi9o2e6dJvdZxpWLcdo8aMYuN4SC6gMpY2xmWqPzDRd3Lx1YEEtWrxkJHqRgUrPJXoM5Dm9PgJQXA",
  "key41": "2BD7xTJ14EqZ7Ya4GBbthig1BeZpADNag4Ci16cubJiuUcjagSySFPrG1pr1CtU4fjw51q9FiME3QVEMiSw3CTBL"
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
