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
    "2hUzkfPym2WrGMDZoXvacJgyKQMRvcGh7DosxY9eUpQje4mMJiydpVtBWNwM31dNUzgXJzQnvLjoXp2StBA9Q54R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q9QgPgwrTcL8Aa4yVt4dYfuucTfAdXht87tE8rnNqUEFgWY2vdF4Azr6XZ1CHCnAmM6cPN8ShDggz3D3ASFkVSV",
  "key1": "xWuLuikZ95rnPrDF4pFU66mUM1kivnSjb83FwWs3L6rSXgcrvKqmi5aj9pH3ytrJk4Mt7xvZJ8VLtso3ze6UFBv",
  "key2": "4vTt16hTZGdAbpmUiWZ6QSKMyJTyjBM11fJWm6vSB1Fd1pkx6cUPJ8qDQoVMYumnuRMh4GURbBRNEpHXSKCwuwmr",
  "key3": "2ejq98un6iWjR6jXuFeFtmkP5cDQnazUexWeTvbLesu39aEmac7nkKh4a9P8zCtbFr9iwRaxR5irPynrQHhA2Ufs",
  "key4": "3UAytSv5PvQg54manBvxFfiCoyVdxA2nk6kZpWDzu6BmcV3R9LdzYS3tanYD3pzJubQ9xhewBfafRxMP97eMDMUe",
  "key5": "3RK22a258wjviW86kVXLrUST6n6bZNjhm4VXEqcP8CCUkEDi2LofwtUaXxtrGmHJH1PC6ZeSiVeH2HCncGWBcVEM",
  "key6": "4k1gGxb6DxVYHX25nxCtMjFuPEdFQaqzypYVdZyxk2oKBb8tMjp8CbkubkkSHunch1Kf6dKZL7AsLNKP2biEd3y4",
  "key7": "5kYdxBkPmN3VvSTeT7k7UBVxiJe1iJ3j2ENFmMK6iMaW6PphAa2RRQ7RgjKd4mD7hNTF9WTfC3DtvujkFkKXbb8q",
  "key8": "42fsHfY4MQDF3SU5VzZP4S5df48UPoJ4tqzRTJFBZxmqRB87T6HVCaamUWrJichUfma1sHoRWZ9q33PVmVzv8SMu",
  "key9": "FcNidyuGef5HbVDuo2cYTtE2hQWHRquYyF8rj7Px4iXEgy6KhWwL66oEDjC1kMhrqzS1ZbWDoHDtc1P1Rti3v9G",
  "key10": "3s76aEJtkp43MpxUMpcJ7XN6LW4tXWeR24ieruZA8ZogY3TCH3iAyHvx757mipuJ4nxnCPbKncaDxzYR3BWQKxTn",
  "key11": "5Stnqn1EDrx1DaAFaamMkDbHuULjhPH8XGfJL2XGp3FGZ8N2pymxRe9tBQ1XukRANERTRgvadbXbkJa3HMTjwhoo",
  "key12": "PpyamCRNYXUTVC7ZEF4yaahUtPAqgz21uyymqfqnTmPG8QWNgXgv6oieu99tMsEGa3djQChsodrXkv1sXUfVQWW",
  "key13": "4sX7CXeueE1HCucysahSiyrNgYWE6VB5SveNUr7TLB4n7QLRivdgPfzv1pDeK9pQMLfJRNrZi3xY2yQKFE3Xqi2z",
  "key14": "2VT16mqchvunSpS24H1sdNkgJf12eCs12NvKBgA3m1SLRdPuU5xV8XwccNcE7FkewSJM9nbv3nH2XYbYy6qNTNkr",
  "key15": "DeodAttrwEcN2CZ5zYYsFMF1ATyY4hgQJhB2wcxTk8ghjC4dzLWxAVZpkxSFkiNSshGtmrrs718FkxmZ96zq8e8",
  "key16": "5qkCDH5AsqN2WzRwmNygoQiTFjzaNh1qUeWxhKCKkcwi36N5YFLgjoBdjYGc6GsxSazxyAqcaJQPVCy2kfNpVrPr",
  "key17": "27XTWNBgzDWCPxRA2mgwWv6Zth7YceEYp1XSNP1GkkH4Upu8fdGngfHLCdFsoxsKMr5zzVzb9Yb8f76V3bKFRaxF",
  "key18": "eFFgEoM7FRU8oBBV4vBCtqAbnsuSNZato23FdGAUfi6iaTcj5im1WEGrHAPS6fbHBzQ5H9bmU5SWSw91DGF99r1",
  "key19": "DBqwFQdgCraSpRCzsdKHiiM7TukpVDPG1KpPJEytZo1TUGzsMt2hLuTLuzWw1nXiVz8fSbNtt87rxQ4ZBZFfnkM",
  "key20": "2fMwwhPo2saLJBHbBHgAn698dhryxNAR6HbPgsZjU7wMmxFW6sjb2m4fCU3s4txtVrUc6oDAsuzAurmWRqpXNDU9",
  "key21": "2XHBWgvpDszD5NdHbfJJtGnkQ1hPP2hrgfJq8xNnR7PUitYEmAAdA2wQcysFuZT1P3vifCQs5ko1RnPgKXTtEDCJ",
  "key22": "VZWCq1sc1UBMFp4vBXqjxzQwn5ik7TFQRW4SjQk9aHiR67K5fG7u9hn1RP65FuHYoK1TNYqbJS3cVCh3MB7Xbnp",
  "key23": "3KUuGBrgMBRVy9s94Gtv3AMorFFvq2MPt4fqLXMUJwwyz5WLwY7J4LMDH73XhRyL4KF884rhS7fqSimrYBXmC7mh",
  "key24": "3Gkc2uqqChpjMgfexYtSqP6jBz77u274hcgLVLSGDh6aBm9n951L4ybMbkLCYxaK41SCb1PzN2Suq6odNGtVAti6",
  "key25": "u34PNprdLeXWMtHah1ttrxyaH9ss1YYvZqzELoSYhv7v2wdoXVDTqtrYU8b4g7EpPYzp9EJ6p6MYTZXHt6kMqtg",
  "key26": "4HKvND5PdAHf9EoihWvkXKwXjwxDpKGsgTjaEF4otmJ3z8djYiXYdo5DHRa1xV3rx9eHYSBswd4Ygzc2G9uqECvj",
  "key27": "GB7Q2pRv8eKAZ53zx6YgyLetHvMAsGGMmfzReAPAdZqNjWvAbGLVaZ5kxCytUSmVYDWUNre9GTqj7847L2ZjhU1",
  "key28": "2DXji4UUmJCrtj5NyxGQFB7aJZG2oXqzG1qbnSp7SJXrrPPLNnwQzasdWnYRV5FbAfPhyEVByGUL68Do2s6roLv9",
  "key29": "MNscvMhanTxJjuteEooFXjVnKNFgmaHRf4F6frgrS9NuNwtcRfcarncJrNERM4WNgiK8Mps5smSS1DkdZi9Yuey",
  "key30": "2Df6REYg8x8HNZ9aQG8f21WrCXonrHw2dL4eaA6h3bcnnjPB2gNxeNPJ11p8H6zLa3m7pjGRbPhbroaycdu9AJY1",
  "key31": "4YqHLpZeYUeJSaUb5U1GXCAHs7i57R7woGUb4cD6tJ8P4czyr49zQmKFgUq4jE8Hw951nbCk54rmd2nbixpGHnYs",
  "key32": "66vBemQFWoaLTK6xRLrjhnmyqdpiC5xa2c9Fv4eF8MDPJpqbzbkqJ39EGZqRsa1HfHe8f5D8zFsUJhTJWHowrKvz",
  "key33": "48H8weXtkvs6rPyfmeEKTVtpxys4sHVxwv5c6bdokN7kEksPPv5RqyGwmh2TczU1VjCQd7GNmDhMbvuXWzCnBkrC",
  "key34": "52znXi6aSrzvjFXpCA2SKkfqQd7ZCVAKAmcAGUXycrVQxTaYkqYkakMqXq98bioLgHrcZNKqtsFcDqw9mQ4Lbh2u",
  "key35": "sSSG4t6R9yW1Vx36JjvkwVWkNYCbwd93fmyxZQe1NA9Znxovo51sKseJzq1uBmhzTFGUK4QEBhSNF13uKRJRCwP",
  "key36": "4LtbmDZExn3xmiwAEJjyS26b2iSNSKCgxwUhx9PrzLrAZi8yinywcBAEM5MygmSnh9oiBSGY4NWe2XRii4JuYApZ",
  "key37": "XsRQLpLHxtVphuMKynZiGjc7KQeL7uSouL8fec9PLWpRLaAyYD5ktacse1wmP8kfbRrecvUN3GBkVhpn7J8D3WF",
  "key38": "21rMjCucHbVTUHQAiRWjK3ryjgkG5ztEoo3TtfH95CYCPMdF84K41aP7TfDc9StWh1Whzvp3Cy4TyTq1EBcU63bf",
  "key39": "5cSy6u2TA4EuqBAmAb7JAu6NA1829wNjGpaoCqvMPWwJqFqc8QLkUKhMzYMMryxXqKZy1m81bRBPqnthkzqycntq",
  "key40": "2pdcMFbMEis1fDjQg8pgN2g1vdKgfxHQRCV5w8NTDvpsPHEjw2cYXYQZRyMgexNCqNX2q8ZJeG2R8bF3zsccajnz",
  "key41": "2iYzArzjYHM11vZ5r87AFjPbfWu9r7qxFEG4HAF2jpFkG5HjT7UvSMXx4wrCMwYPDpUPTFHAY8RawyQMwB4KcfkP"
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
