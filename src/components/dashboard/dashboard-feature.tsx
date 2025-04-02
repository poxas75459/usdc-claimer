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
    "5NK2ztXWvvDqtWRHho8Q63aCXRnKiVuFsF7cmvnwRqdTN1HzLERmZDtMRjWpPnETbVYfQtJNgftQ1pstGejcXb6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "swukpM5gUT88Zrmx42eSKQm91gexrbivZGDMmqHdz7e4AvuzhinLkrfB3JWRd7BXYV9FyB9qu4Z6LTuj2JFu6nL",
  "key1": "3WX4izPEY94WvSVkjRMBNKX2Gs2eNHaiXNFN5ebm57KGh9ntBcpbNSeFNPfdz17bos8CGocBJwfwJoEBc2Nw871B",
  "key2": "32LMmZpFkK6U7KqxeF8unjWPmdsTQtb5L17D2MkJSxjRo8dUiPggcgXSr1vjxeuxJeV8RxfVFnPhCume78ywUzXV",
  "key3": "3nRtJcKbp2d1NFYWazWN6HYvnYKvv7CnuzsttdfV6jKMboJcU9aKGEBvDB16G4LSwGXD5ELxK7UuE374H3Vz682e",
  "key4": "63MQtWiF3z8dgrDvw54NQYX8KsSMHobYAtsWCCJkCUYWcfzCtHYTXzVCrjsUESSpSGNkoV1FfiE8gWmyCk7B2ofG",
  "key5": "2NZ6awRgwZCFMnJznatkfAawA1DDZ8mvBVdWyvHR2jtFR6hmwvHvW4JQFsQLRjqFG1EHXoJ5Pzg3cDHngSvPtUcD",
  "key6": "JTYknKLULwhoRrpK5irrx4Bf8n7j18uRr2GMJMyns3J6vAHM8g13hbAdgRB6z3sFXxZJQb5ujePatovTcqvQoRJ",
  "key7": "3z4Gav7TZf5ekJ15grEdaewKw9XApy91BN3zDXCiGWtY6ymAn7doSx3EVKzztSYjTsaWGoUYjwXvJMBFuXpXj7FQ",
  "key8": "5pvQJGS78U5J1QEGtJcihUkawDt2p4rXHoUCth17HzkP1MLpe57YjuYcoCmEvJ4XuJuYVVDbcxApgq9DuHXijHpq",
  "key9": "5U9NSJdJssJiaPHsoGH78cDTUGiRgA9QRP9SEgdosU71dpPZrLTBjooTJQ9HXrgm6HcEvQGMB5Jr1sycq5tc8dPC",
  "key10": "2vAKCHny4k9xx9bCxUPbD3LBZW9DMWWf5jWBqRBZdhXRA2wFiqQYDbLaxLnLURRuqwQesCYLmKxc1qnAgNiKrUtT",
  "key11": "2JrGER1P7sq1Rhc2mD7gNg1BadwtQTy11Twum1ngJoc35FUxdmFmwGz5Vm1vToc7qyESAKg5M3ud4wvnoNF72Yth",
  "key12": "22d3CW3bNoEE9crsqAwPi2A1AxSf4S9iqaAgJsbyT3q8NpXDSamZTmAQu8wJiPCXFc4U89hfJQncVqcZKz9KMbv5",
  "key13": "2GJUiAtTFnXsS7kA2GuESWoqbmKmKYRSiC86AbHM4P6s9jnbSyw3yBPHD2vkQUab2S2vpmaHzPFNnHo2kStFrdzu",
  "key14": "4inwTcfR9SYDk9drFKe4k6mHZB19wFz13EBUCexCRbaDqPYjd699rom7J3gijxkbfhVkEQsvh8oqJ79aDG9zR822",
  "key15": "16hzXD6oED87RziRe2J4gxHJLDciPqx9LteY4JY6PsrUCUPviEupqDL4yXRhK6rv8v9SwM4RHWJudDjwpizycJf",
  "key16": "46MDtDiNzUr19y1LuPfSpjrGxDbEgLueC4QuUfskjJkxehw7TQBhXxhU2dDYD28jSiei1vDMg4ddPopXpwu7wXjz",
  "key17": "545C7CVA8fspfEFLYe45o3dCXy4MFDXSDcB2VUpn5WwdRuPdDHTRrCPUAbrENrx9LGnvjbdmvjkEyy2NgkfoHoLx",
  "key18": "2TfAdWS7NHzoSXyDEfBSzxrjWUFA7a9R9KJhBfXYe1pe7u12cWrtfqL6FmC6JhAnvqznTrPCXCh41EXi5ZtUXuaX",
  "key19": "32agWJuhzQYvXFi1ajmrpM4UBLUrkeAZjeJ7GDDq4cE96CpZxtFZuy6P1yqHru1jJS6RK1cxE5FcGmNjNVQdXL5x",
  "key20": "55JZEsH92VG4XpGZvFw1uP7YuT6DcjHpXNfEj8ZLnE3i5GgtE6xhAy7QgwjXuDnfXG4u6DttwjxhESSNHzktymdn",
  "key21": "3m8rMQVLnT8dkXrBfoQey5pL6tsG9X4ERCgoRPte7RZUcC3NBFDMQSUBzPMocRbbzWwWa26LzXd8HxgRdkL7JR4q",
  "key22": "5h1GYTq85tmJ4vKT3ugYKn1DjfMf8NixW1LygwuNz4zerbae2qo7vJdnAyDvi9wnPkcautPk3HuwUhAJ6oVYsADY",
  "key23": "mWZoHvjrrmbELAWFjS18Z3bopgziRnADXckZBQotbCngcAvrS2W7vUy4sBRCZkYf8C1N6btXweRtmctSa13of6c",
  "key24": "5aX35CFxb7pCYYCAirCuPQQiNHCd8fvRmtDPY5bU8dPFG2bAqhsEuC55Uim3kzK89yvg9reSqn3i1NLuZTSgbjg",
  "key25": "3hFufUdhM4ngRTsBdTwAvNRMefYVfnEhEiJVhUA78bJhnJX2EjQ1k5zZ6KmxdZSmpSdTfwL7eAih3Npy4VxpbwDe",
  "key26": "5NpG6EKGeZ1JNMQXcmkCmePnaHbwYjC83hhSysBwk9VSkehENTWRbJYkVFfcv7JgQxKCAGd8FiG6pazgqzt4J2NA",
  "key27": "5FmRF7G9WhRSDk5aXeUEx48kM1kYTCSDqPDj3YrqtR1oZNx67xFNNJthkAfJzf5XuqdwMr5kz8jGSLEysJkLfNQn",
  "key28": "2cJV1pe7sKPvxHdGigz9EYx1YAHT6auE9rTrv4TSdPxXTkH1p9TJnn6UqCM9B1euiJBooi4xWf8yfG99gnaHy2u",
  "key29": "4wc8TpaZNjAbq77rreeucMECzR5aJqLzPhvkJVbUmqW3RDgNJneZ2HtRysHhEwSyKx93K8btK9S9Dg6W4e2ERU85",
  "key30": "4b61mrWaG6uEgorQKQ87PbowAb92dcgxcZ2a7P1keCQCn3RABBQ597Q5wauWJ9tCWveNw71dbmYD5ATHqq1mXY6",
  "key31": "4XpDSzfkJF1m9GNvcGiE5LDz4TmhZtiLQ2bPrvvTa2c2YmzpgxoMHbpf2gjuo3PmyRMVe3G7NMgfYTmVVsKkrY8F",
  "key32": "dWH6DMVrpBAv44cBB9uyAPUDk21vT1iexNk6CVp1RGL9BmjsQ37uStsdprMqxseEUCKFVEc97WDDXHz3GnTU7SB",
  "key33": "pXpj1MxuJhKf1jni2x4UZLkN7WX9ufiv2RCZPohVPFTADdz8ZDcmGhpxEGLCBymKMHDYr9gBtsmppx1T6v6hAFQ",
  "key34": "5iuZ59QqVxZJGnbG5yLhmxrPGcyL15S7wvPHdwmxtAwhekYbZ3k5Nn9aSvehNNs5jkwjjxjx8ud9xj9LabAnNuMw",
  "key35": "3WY6AXgWu2ZxHEmyssAQd6m9quWG3mBC5kXgWTHb1fQ8wgbdKdbvDb9r3sfF2xbsjTW2qcRF8d69YKebK8qzeZyj",
  "key36": "4DGFhRAFAYSdDYRYzuACPHPufopdnS1ynyBTVdPuoyyh6SYzg39DZ6yj111x8H7KkMNvfXCrvDBhhAqBYpFjhrL3",
  "key37": "5ad66P7L6pGv7ePMVNYbapmsSVpU5epVjUiwFmbASc6jnJaiwmb8AfNGqdGi65ModspJz1o3PynQtAxXzUd8kPdN",
  "key38": "2dZ7QtADkzGHD8YMmAEiDU1GXGwX1HNbzpeovd8QVEHK3TYrVv4qRbWkCZu3AXvtoDQGTbr1nqBS8kzpQTZexoGw",
  "key39": "33Q3JHuHBvd5y6V6TGCqjAtSGYRhHaE3CKqp6Yg6h7bvScQj57NZG3143dvXHCsXP7kZx93WXFocDxv4t7FNQAdP",
  "key40": "sTXQL3eKRZ2JejgpPaPHYMfsFj2hqSpCbiGHSCc3uT2JM9cgzzsNm7k5KwqCYUwHejhpAnpvLFdWZ6KksMTDAJe"
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
