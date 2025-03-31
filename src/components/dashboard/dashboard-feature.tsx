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
    "5qcsvXSVunF3tjKT4LWLY4xsp7vXgNwin2xP22h2s3xrFu7UGwK1uTt5tPargApNT5BGYDwUv3ZdgBEfDYRjLvZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q2YHDu1ZJ99yJ1xhLdc77DRvrDR5mkoPGnvSfu8D2JkK3CQZs2PUWndcxbeB7GHEdHvjUdppzZXLjw2F5YCMs1q",
  "key1": "59UocMMHgnyNVeCYmFyz1dTwvVfsN1kvCmFmkrLYLjDnChXpSq72ZZgEYFkoAXDpu2twv9gwFC5Vrkc1tCDjhSez",
  "key2": "3X9KtfxHUagdmmRvJtP5KaeqXaVMKgJDTvbwUey6YAFvhhJnCMUQ4pcVi1PfazC8JPxbMVFR1oMSLq73CP32re1a",
  "key3": "4EWM3hSEWcSvHa3CTUcTLPRakKsnVyzgNJDjUfbwjeTimtrWggnbd9yd2seVMzS5EhaJF7tDAFEgEm6nY3Xes6pj",
  "key4": "2B1Pr8qLcM8rdmYvRJobBnryZ3New1ZeiLrQtGooTvM424MowEfAc7xWfdVYgPMuAqaGh4MKGcjLowErYUbg3VHy",
  "key5": "5EmSte4uBjqembH8Em3eLEv4EVoWnF7RhX3eGyAzE6wmex5vJXkiMiCLgakrud9dRznWn7UTWAercFUZEVeaDEgR",
  "key6": "4sGDeydHgvXCcsQf2SJQbFhmzQfKtYLgNp4oASXt3yFnQHmN8Wyb4urcUJAc1FC1NXCR3sjbdmF6WrP4Zhpi66yR",
  "key7": "65FJBARp6hkzqwc47mJb72RMpPG37pRtd8jimgSzjc5mhcgsvekoc6eyPLwCWfvdrcGBK23HBtXEuqVHjm2c7r3E",
  "key8": "27ZZhRFVb2DAptSJX2hR7tNm693SKxB9VijJt1tsTd9fdC4TWGPWPF1ki11jw66vU1dA1KmGFXbDiLb4bXrTVi8E",
  "key9": "4PKEcZBXgxDgNUPvwrZUT9RjwvJBQsUF2eWraAbSvgMeR1Jy9BiQ9V4sB5iwhunhaJDJCgWiw8uRdnJ7SNsy5vEu",
  "key10": "57XczBKP4xgzxQrFx3Q8asyo8qRegPGh3GP3ReugmKsEF5h12PjPCBNM6B3zfuXBiC1QFn3ruEXoyHgqLVoLbf3m",
  "key11": "519ZwEEN3adVtz1C7DtWQoBEQgMkRyLFw9GnBK3ruznVTRUVntvRu5M4YupFB5xT3RGPPwuB5fR9iJV42bj453C8",
  "key12": "KguUm4CLP8mYUDzAFaxJksiGsv64c5kE48qxc52pG3ChS8LjFh3nMtYz9id2ZacZnATc5TMkrwMFwGAamYNmy7F",
  "key13": "5JbSQjWKb4wmt1QF3oAuFUQuDUGGUBHX212asw88QpDULLQjm5dUB7CgBZ9jEXxUMvBhC6GVkD8jCDD69oRkux73",
  "key14": "hUKVeAiRzdvLT5Bgv74AefX1XDHnQWZLkJPahFaWXpWNoJxyQQk4dXxMZYa4m4YXthknYoE3aWDGzPvz2sALnmc",
  "key15": "5319WXeC6RQWknr2homA47Zk2Lgr5jeS9LVoNe73aauYq3Hock5yfqqsnfumgiGq6Qgfho11Zr4q9wA9T6AtqT8P",
  "key16": "5N6q3oZGk8oQRmmCzctQgBy4fn77oLSymVbPFsMjLGFLCunYAvtYMdf5P1zQ65za1oPasgxHNfj5jigfCRjA7wUM",
  "key17": "SRqwrbejGogfc34PrucvgtieJ8PET12ikaaKhXQXmfLKWNDhVYF7FPTP9dAsNG3NLaQvLi1JGsZp114vDRoLHy5",
  "key18": "3F2QvYC8PioqTNVFJ4DdusEnmf2eKkS3pq4uVkstTTRZdF2z3gjZ1Wvb6GbD9WeDHdMVzt8TbZAkPjRpSen8Kka9",
  "key19": "2rv5jZaKXB4H3igKJrabzDTuyTQaNKJJBUpnPdFVEUX8jDuePR2dgc3jSPEEkk3GTsbYaCeywe9s7GdoyX5sXLC3",
  "key20": "2T2JbzAx8TPHFEmgSLCMHytsj4gRKEtp4sJ2mXxh2aE3RidfpWVfBjQigT6kdhY6uiAH5GgAYHNjKqvQZQXw5sRR",
  "key21": "4XzFA5AUtmeop2sWSXcZXh43iFnMezC3Z4d6P8a3M1s7NCprWmixJPU4s7c5gP89JKPSLA8RxWKkdNV1j8en8ybu",
  "key22": "362DuTyVb3387Jms4ZQHRjkky2xUgBr3Y1EKf5QDgtcR7yWYzEe7VAxnk9HnybRaXToR1LrKqyWzTq2rdfnLHgBd",
  "key23": "3dy5ArHBsteXe5rfas815qda92pNDxWQYz21LFHWUemWcTwcaoWE8RhTzFsC87PPoAfz36497LwrXyjLxeraCUm4",
  "key24": "4nbd117N8SadUGuuiAE12tQkeUGKR2t297PEnxvaR759vUYLgck1bGadkJinfMyJ47zmb8KDG1WpknGg8W3QfKdg",
  "key25": "57AYWPjUNXGCcCtK6jjagJd1WjfY2y9BBcT4gd2V5znELhsZpaT24MAFtZ86sme6EV372P8hU5KkQqp1LD9nRuxo",
  "key26": "26YKRtzezry1Wj4emYso2C4wnWCtYqsFNw5GfyzczzXC4sYWS4KeceLuBpz6C7oxtC3JtAxjm37uJoSLqxiN7kUs",
  "key27": "5JBx62XuzuKAV967widKJY5jBSnTJQD86gxqth5es35X1VF1JE4X4z2XmzZ1rcbuQBNae31rGrn3rcnvXsVYCL2u",
  "key28": "5p4GEnzHWLkGqbAFAyiGKkFpLb26qpT7ZMJyb4f2biUPTbCtXWi1Tm6tBiSy89yN4gQ2WmTxdsxkRTgoWFqFq1bR",
  "key29": "48TBt65TkSEz4DFHxAaBkCQvrLoU3M3ooFwwmZgner7e22bLydXB7TgYt5Q817NY26kLJRvgoojB8cKfxBaDGgnf",
  "key30": "5bebzDsstjQJQs1wEesrK92wZrFKWTeTxofkg37b5H9AEtFFrxkmLjYjMSSD7woWx2FgU6wSQFwuyS25BHV7T3sF",
  "key31": "2y3iiBgDtGjiVe5yqovn5PHRcPmsws795M9MoejxfTDCtxunMnSF8DHjwki93wwDXDzm4Xu3jTF3CKVGU2WEN6DT",
  "key32": "2VKheFBDEcuAKv3T8iwmqmzDoM5EZAmd23YPYZ5k239xRGGurtN8cLixqzuycw6nwCWecpx3WhuqfQtGa51yTC6h",
  "key33": "4csgJ8Cbw1s6NdwXVnTGcUjakZC9o2sDPXDVZA1P9NuCXx3NQkuEKyXD9PWkBVEFfQgo7MyvnpKbLGfc8zDo6jUQ",
  "key34": "2fjwLVEHbhhJhKu5Qjim3cNXfdNeguM45QAdz4yV38uEBkv5nJrfFEn5VfcoZgxh8Atrh5k6KrhMGM1t1DBhUGz9",
  "key35": "7iQKCqCYJq4Ayv3PdYA3ksgbmjiwt7h76G8GzaSWnrZReFX3QXyQvBFWL1bzhLjVsE2ncvMCniG3XjHf1aHbjrR"
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
