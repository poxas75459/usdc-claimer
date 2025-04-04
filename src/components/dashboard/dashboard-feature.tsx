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
    "xuZojZ1dm9J8nXR7d2haQEfN9kNw3a566h8MtmJkTSnE6BJBCKP3diAeUMxNmmXX887SD9fx5gyCuYEhiy9G82r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N6Sax86FPMsrbZHa3qBd8PNrgUcNaTHhduemimd9FkfSvmvvg3auRxgiXa71i71UaEgmKtCSEoChQfc3H1U3UF1",
  "key1": "4JZ3CFSZa26fckPyekaZtSMDHD6fEkJovUST39cUxqEsULXRRC92DMmhnNe61V8RWnEaN4rxtwyXFg44Rg52LBDg",
  "key2": "3KXActH5pVcfMrzMWyqMsB5aouwGCMXQ9KaNCTA6bJ5kuPQ1NtXghw5pTRVWxnk9KVcsANLbvz2YH67TS5GfqDLU",
  "key3": "3PYipYTwuh8s2QbCsdJTkMAGcmYheUmgQ2A2jwYKr7RQBBEhAyjByczncfnf11iVsHHTJvkB7SugzSQh6zJa31fp",
  "key4": "44ehXDJW1QXT5MGVA5ZuixmwAZsXx2q9dJa6m9wFTbkF4dwcfsu6NLB6abSHhBvKaMoffw7uvMGSPyds4TQ8dbEH",
  "key5": "5et7vsF2dLL4autnmAAqS7nTzjWSowVaFsWSGHgVE7KJv2wiiKGDsYaHUkDfgXBidyoXmcSntYDKooRkYfQiDzDF",
  "key6": "3Bry2xiA18DMJqJUD9FjYgN5KWrJ93zbrTCuMikxCDq11KgiVhYMez4EH1CqyS9Z7SqsrGWM7yLsVYDQtWWyLRWv",
  "key7": "5VsTAGNaUrPbfpg1NuNdNDqUa1aDWekRpuZPzty3mHZPrjcRmKfwWLxFJhbvygt4Qkd89sHjAPgLR8q5wMk5r2wn",
  "key8": "4Dyrj3JduCkWei1GSRHcZ7mmFbJdZu3feMzecShnRBUefVSitVGpzLMJHUSBtzPCd941pwBwf7nqvJeZtxjzwruj",
  "key9": "61VNQx7RbNUsQMkLwUk4wCmJrNapqfmi7qsy7xmffVj6pR5NTiriu2TV6rx9uJherFNQTpbkYyNVxdj4oDi2Erjp",
  "key10": "5xd1dTW8vtaPVqrvT213pmX1r2rhbLomPxv9175QZrvZwNqe3QpaDz9ppT9wFq3jE1TVfrVZ2rGAaDGobpfyMRSx",
  "key11": "hWua9NYV89sUW5KHd6DWwLLyv9dTqC7m6cpgcDbUASRy951gYmqxaybGq6uqa3ivQ8BvYjZVsXTu1932B2QwiVT",
  "key12": "3GAfT9HB9YHSnR3wjhSrXkC6aDGyGPoMBt4SuhFAULai9Uq3uPGdJYM3qFaf78CBEKyhPHy8hMD6JaciSEKp6Nzj",
  "key13": "24D6wrSQH1Wyd1V8qUpnDoUFZ7TxKgeuqdhzMqzovLoLBJNq8HiFEVminC5ofDoKRVqfh4sVUTjLtM5X9nJN6Ywq",
  "key14": "2HLYHwChvkUMoq1ZhUNcoWBdbCWHZiJj2KMX5tTrTPg3zwiNvupccgvDm2sGHss57F45CoureenkFTrw1tJmHb3C",
  "key15": "61G1VGStNjLFE9yUfMrqFXWSeGTEwKrN7rFjENpp3fsTWKV7codpZ6qoZWoA4hKu4tQcXKbZ27o637vhv6t2SJoZ",
  "key16": "5EfnoQ8AzuRLvsbJgKtRXvFdDDWXpJ5SR6PhSgPLXpHoBKb1wqAqP2gwCmVpwHp8LJyvA8xN95x7bC1kvSutAtrK",
  "key17": "2om8WuwEbG7fQ3tdAKM444HFCFo3DRMqYWcfTqwv18MNVLKWyp4E8vBCp845cdkQrVG59tHMo3P8754yWmoKxFps",
  "key18": "2JJCQCESVXvaQE9gKSB3amgF2hbFqe4rZgvTkqjh88rBu2ypWqc7yB7Jz6Fs39xkNLSttEDcvNYHKqfbQSNeEQ2L",
  "key19": "YwSfaAWWt2xe8c7uEYuwZqoRjFZsmrFcDXm9brS7EKACjCd7WaT49kp2oHxV3S4GYL2ss4j27gpcDgi7cSAZV63",
  "key20": "4WBwpwmSXrhkNiuJ6D8v97mXmLCxApqEKvX1LfCyaSHG7rvUBp9ngVgxJWA7kDojCVJK3j4JQP3XAWcr9DN3h7pN",
  "key21": "2tEuCfQLg6TP1oX9izievTexQmL3ZWpbzGdzgMHBPKfEiUCW3CVgBK2MqEpG11LB6aEpnPhYLgYH3HBoRR1fxxrd",
  "key22": "63144sVuFY7mZvLvc1WLppkXqXyPw65J9ZLCbAnAmY1AP5MyfpGTZVQEaLcomFcRXQqneNA7Nm6mRjRwD4cHbAbF",
  "key23": "2RLSQan4mvX7WK6B97pqZxVYtLpL4CdS1URCGe9hjYNjFmTBqeii9Gw3BjHBNUzHq8vvLuUvmb6DKa9sDxv7Wybu",
  "key24": "4bw9iSLNsGqFxJBRazaaHd4ZdH7FgBxrLrxbYim4MfH7Lo1ByLEqFvrPXWujH6gzP47mYDMdPZqww2Mw9c7aybmC",
  "key25": "58nhXzaDbpLsANJUSA1WUJzmWKTYxKCTrwf6maoAb1p5H15Bz2sTW2fd7PU2hE1F1Q9grZ6mABEhfTMgcobt8Ds5",
  "key26": "4GJ7gofUfpLheXCPyMEbaZtK827M4vynABqyHXa1cui8JtXKN81soaTnttVdogqGsgE2VeBWpT3QZuNZ7M83NELi",
  "key27": "5Pr4QW4HyoG93TSLiNFuovL49XKjdxVJuwCrjtjQcTYuJeSdC7ppRWKFHsvKZBmUiWTormwTvdqFVJ3f1jfAiujz",
  "key28": "2FUpL5skFmuMUyFd3Lhw2Z73DxvfYBJJKXFNitPZiZJNp1sh8b85iF2jBsKp9A7umxVv4PFwwyD2VNxag8A9vcg",
  "key29": "5o2dmfba9UcroroDUTw3tLnBvxMrFMWMo9dbyVpKLQUxQDMEdc9s2ZqXm8kgvvwJe9sd9rBoutmGFYyh6sLi3vcS",
  "key30": "5Xhs6GmimmVBfN91Dp5nLyn4RGBthY3A3MyBqBgnzBmbvcRMxSojzCPbphfFsJ8vaoJPnM2v92rvRWKQtyP3RgWo",
  "key31": "4Ataynhe7tD2ZErLDFnBgEyr3PB1kq8EnRhK8PBiVms8gRmrrN2HsVu917zL1dtgeLsPvVKxFmCvsms2RoUsMf58",
  "key32": "2tSJkjGFAxhoTtFqAneuG859uGqT6jUbykkwdo85SMB3gxJpPiZnsjk1YpuN1nGfkaPUTeBsgrATTrSfWDCM6bqi",
  "key33": "4GpdiHhTTJxJjiWztUuhJFAZKfpBuTTfBQtdxGPLVbMu5Bw9x5S7nLLEFY67RoqyjvFv3y8MYv6ANKx7akxmS5bn",
  "key34": "2nE37S737qnQnUDLd69veMELHmPE59MsAS4P3UkCHDMucXL2R7fDHqq3CK7hdG7VebYfXoRnhjHLb19UxvymvMqV",
  "key35": "5rA9wAsSQZKYeGDFh4kgceLRRT9P2fZCzpkQJWbqKaTNCHoQV6Fn6BDWBAJpJcdTHywaWjrsPQ8xvjUbqH2XxpVG",
  "key36": "EZr12BZDfSGn9RnKbtmdNgySfZwxtifYYGQcqhLfGx8CkcypVPaZWruSZhXC6pLkY8E9wz5hvwWqBsKD8skKG4b",
  "key37": "4j2w5N86PXsHUTnqXy8r535Xw8DnswwfFbsmWwRNSdXS7hjoW79ppQe4ae9mj9rj9hAR6K4ckpJsWMAQHHaeMk9i",
  "key38": "3p6itH1vW4qDwteRUQkCDWAzbCYVP48tPTA9LAhX6yrxgffrG2mdrRK1a4yxwLWQc4tWtnv4iu2zotGeRFSSWfn6",
  "key39": "VARSYeFQUwXzoBUNfYEZ4rigZzGZhjUHmRUkDAc3ynQ2FRJfosCbXSyYuzYWFDSNYnKJqcG1becrP6Pxbr3MGy8",
  "key40": "5u7ZYpqkhbbGKQ8RZZHH3KTBBDQ6o4MrwohHpsAtRBiHjjeB9bYSKPWeBBc7HB2tNKfNZjfhKp4xF3suyBCt2A9r",
  "key41": "cXicaqjykwQrHcDBh4FDZeAeHC3zaDBTsisUpBUaFPD6Da35V9KjBqKPx2zxmi3hb32KQG8rMxBedMdNME7CY7m",
  "key42": "5LQnjmUXwSHUazjhHpZQq52PDkTafK41yeE1Bu13f5SkEZndeWGSQiXFkj6HR7yqZgJtX1uZ2wiFeyJ9GoBBRS2a",
  "key43": "5Uwcs5VNJEhynbb4RYLr12LvFF3LBRnoj1XGg6a6zWzubJnSPCBhw4BP4ZQLCqeYNBFeBRcrhxJUQY5ktnti6jc1",
  "key44": "4cNwgUYhkXXVEVnBkRXhNbPW9MauZENgwSh8MQrxb74PmQ1qa4uoGeECVqPjFkhNqFQZfnSnMNqbxNyhLwWFW9uR"
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
