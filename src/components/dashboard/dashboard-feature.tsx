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
    "5KXa3NgTUa5YyQJVWtVDxzBYF1pwncQ42mvKvY6ULwF9rfTBzE4viMpNgXnXRzyMjmqnL5LbY1mTjJe2eGZyNcBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ekupqkzrYufcXU7AbKpfW4Y1wZTddHwwBpP7ba219YTDEtndipe5s9FXwFCY6Utn5b8HSHddK9AHEBQtFo11qxN",
  "key1": "2c8sC9y1xGQJXKXD6jDjw9u2XzPoS2FDZPh2CdMcqhaHuZR79QkPchgFVPKrntXth6zuKCVqx1znU2NBfuVmFhFn",
  "key2": "2mWowRy7mbazRkC8kLTKuxHRuCDR6xUyuwqWQWuvGSu5adFuns4kvaii3v1P974zfJ7GXqjHbW21gJsJaNWNm4aW",
  "key3": "4jsPG33LRRMXM5dy7EfbCr7fBxyKyUJCrmoXxnQCoAbgevei2k4bb5ytZ4EZ7stUQ1NvtZnwiqCrQ3ty4KJ6jegZ",
  "key4": "34ApfnizqUCKqiKb515qJrUn35F4FmX1vFv2bM3D4w1Gxf812y4VKcpkGwUm5iCN3GUHbN7g67dGjheJ1PqDRSfk",
  "key5": "2RP3KLegFFyinGCsmtxeCAvceY39KjLu1Z2zwSeVR9qeWZEvkFEq8V16pryBDgaq6gFc9v1Ce7AnVyXD5PTLiJu",
  "key6": "494jdLZk86ipop4gEmiqTvJhtJSHwJXBQE2PjXjfGjGfgnM3s3JybEWuwYGrMnscWYdcfE56PeZppyz97FiwPk2i",
  "key7": "51a5oPj6SPk56yT74v2F5wSDU9QDPKLo5iSw62NRPdCCpL5zoJ73MJxDCe2Fh1m1zVSPm2Agw35uYnwP26FAxC8h",
  "key8": "2L2FzTniE9SoGDS5pBqiYJWyiqs4hG3Sp5cVCajM9zd9pngtTHMtEEHsE7xJJ78ZJTgXcKpC64m87ZgKqfz9dYzp",
  "key9": "5i9BWLJwSCT26iEuR7Atq9LCwvCTdmhGGhC9tFe8W9NTk6iqcpnAgNvZMnKggchmkh5eC3VRd5Dr7bh7cehhxBH5",
  "key10": "2jvYZbuT4pZmb9ruZVdMmz6yUhY4dB51etEREPRKPhpd1bGBGNawRoFK3wBXdfxfpamzxNh6YLmqdwYrpa12JY8Q",
  "key11": "munvMzShi2BtW7drLGfGzmo9DmE17GjUauxwgYawSzHEU4DYfrt5uNp8xvCGXjAZ56VYdt4Kx7pJhf4p5xPparz",
  "key12": "24r9yt9e1NgaXSLUTVqdnh5ZNRd2dEE1HnA1LRVUGWsGEXjxhkSCQtgfhWA5VJ2W5cTFLRPJ3btvzt9H5mJa5BmS",
  "key13": "3ePzfi4LpD3gbyKJVJtBnybv85bN6onefMGtFkbwoJuRWzMN2gfPh2kik1z4bzoC8FV7oy9JoELayp39s61nBUQP",
  "key14": "n3MM73SjYhDYD1iHLdbHN6bVyjoyhSS1949PEBcvN9YB2P69LVCHuxAX2CLXqpoQSwADKi3VtNfEsRrs5vNNWcH",
  "key15": "5mSiDCJuRDuaS7hm6zMkEHFbLsdPMpJ3Y5Q1XDPmrVRrx6NJZ4Mkh3LnSM5bGUVJMHygKQd5c6D76c1k3sVssmN4",
  "key16": "4gMcuLxALXwaxGSiDTPLmvL6dThRW4bEAKv7WKJ5voBWJuNRzQu9FCKXfypJnA5ZskbVCPHq45hhBUrM1jN9teDm",
  "key17": "2xWuaiLyofzyNgaGRWsSyAjpCEDs9333aCQ6p9BEhWc49PamWqPDZaT1YEANVdpcgmNMPLcLWvbZPFGUVVnKpRer",
  "key18": "2VZGk6BtJU524ckBZtYnf1u1atk2WqXukFPMyR3oaCtTdiZSQhkFx5wSWoQsBc9VHHjRmLP6Z6jz2KYhyFTdArTk",
  "key19": "5siwYxNivpRoLnYGkjRuX2qP3CeUE2dHv6AbJW3s1nKkZpPYVrw9dtzX1Sg4B8RJfNUysRe1fatqcQf1Ze2qgksy",
  "key20": "5w4jMM5NZpuQ5gj28A6MVizdmmeiFi56gy6kTyamyrWFYo3J3zPL9JLNxTREHWN8MEtEkgCvJqy5QBwdMhtygFem",
  "key21": "451UhAH5oK4Rw89SwsWDeuGFGcxxPEbycQjyVvXt8uzVJ1sxWtGUYiiPbkArp5LLziamPoQT1NdPQr1GqFQbTLnJ",
  "key22": "66t6xiJRCZBSkmKaNBV7HcpGEG3Hypv9Wj5RZmamXrVzCvYaNRYzDYoLmhWqg6UJiupBs95mZPZRsEChLXTKyx5z",
  "key23": "4qhZ19AKC1D1RpQDr2gjLdojnkeV5YmQn8LagoTvcgYzT5dMPkhcJkrvDSqGDhS9CoqEdo5Nz4av3JLT7kkWFox9",
  "key24": "3y2TBnswRVF5ZXpMJuzaZuH3Mj6xAzqVAEX8umbzmZbJAzY7Ch1kNxietbvcdX5DzFBrYFdraG6KrXaUS9ZF7Aq4",
  "key25": "5CNmqt93j7NCDNBNqFP7Cm1gHJunPELpYAwupoDDLW9Y5H9DTsG7STGzWBCnBtN4XWntN3ZvDPncG5nb52NdPCm7",
  "key26": "4tY4H5JW3zf99yMZ9aYomRzyQ1urNXn2ufaa1sx2xV73ooHn4fjuqV4YZWabFsMja3j3MyeLu3P1upiAgxX7rJXZ",
  "key27": "3xYBLdiXALd5C1ibKM2b7Wb5sWphfom1tBqFTcnJPWRHHh7NtevBSF82izgnmXPD73YWvCMwPnkXcXZasH64SguF",
  "key28": "3nFhmdM7QzVQbGxtqAdzaA3bnqGWd3UJkcL8ywXpsZKM6FR3Tpae6ZiXpKJ6i1RQ4XevUG4YrX6HXqt19rvedbVw",
  "key29": "2egHSMswL4TRirQeyScCrHqqnsH5r5aqRrvjUjfzJcBeLUx1BYwob1tkSnmXpgFo3iYnnqTzdq4VaZ7pntztwTb",
  "key30": "3FdoYjvWGqH9cs8T9eUZKdsLYu1FmJsTyBFKoczCCt2CKsLs6Yjzds83DrJat1APXRnYYPRu7rHz5dweE7GQGVdN",
  "key31": "4Szd1qoLAbX2cQqCawo8XpuFzgPDVCmbNTiwfGPy2in7dytTTPFsVMi9bAijwuGsjHpUZhDzV8fBJKK4t9n3Pbfj",
  "key32": "7WgbNbuWVmWDA3B6AwL8oQXGbhiV1pprzniw3AdAjGZKLnn3K8JXw1qs7okFwJQhEnghxUJdkRXJbnfNRujbM55",
  "key33": "3J97JfH9kyorqjMFfrDyyZAWFfW31gvBGgXpGqgd4gjPAQmVUACX5huu31AwaKgEEZ81kDDNJZ7csichYc3E5Lua",
  "key34": "2NTiZtLto7EZiqp1ds4ujAZs2gc2Phum6ys9wXdy3ZBzWRMMKA3ybzqK7E5rGB7wmXhDbpLiJzbXQbnU7S6eCsVJ",
  "key35": "i7M7jJcDwQn2BLmSEAkBTM4qicbjm7949g6abrgKng8h9WpVmRxqqa434ZRrJwzrxDq3Bxr8gDSkzgJxsbpZXY6",
  "key36": "4yZjS6TKkWrwUsnRPwS91jCZNAxBnQtfSbjSWeuui8QHUY2GEo9z52NZGG1ucJKWsudjW4fApRX2quozEqySptKR",
  "key37": "4yK3U35viwm7NNK8TgaB1TdXCqx1GyrBCntv7BDS7kYnxjvzm137LuHTrJ2CmunNnKWgpjm2G6mbrMvEoXtz4Ap6",
  "key38": "5F1B23SzLWiWgdMD2wZ7KFbtBHj8VXrwWm1bs3nbGQJTpimRGwWzAXA5LqhiUENHf6VABERvixwaQUJ2EmBGUje4"
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
