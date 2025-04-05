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
    "2mbD4KFTEkwFjAHaV9B7pZHb8ndZ3hoorvysbSLxYHexCeuFMn9ceT2hTKgZJga1rmWgAVgyQPsE9BAqjNW79asn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wgYuZCXLwsFZ3q5khYBjjTiaQbEpqJ4Nfyotq5YgGwXt7fPGDzScSsBjR87ji7CcbFhMsN1c3HYYiRtU3LzxkAX",
  "key1": "25eP8zMzdj5dMEuUAT4GETwn6gY5vcPDgy5mkd9QbRbemTj6Cz8rMbUsPNwJBRxYmNYWq7f3pVE7Cd37t94En77F",
  "key2": "412pC8Yor3aSsUTrANfDiUU3NkmNMQwBjmzdQk7xAZ2TCsuM6pefLd6rGtfsS6zLMQgSQaWAMVmu7FFm6681y4Cr",
  "key3": "PFhat4X1V8p7qhUSateLUaG4gEfu3ENwaxNzTFKtXbSmzn2HhiJpZKvTAxKUiF9KcT3SwNeawB5ydoaXfSLPCN7",
  "key4": "2UAUqA5Thg72QgQvDcmMjWZV4f577wZZ8HkBLQcpVHnZkvtnrfUaJWgnw7sUbWibEnbsbKttFTZmboe8rWi26j8h",
  "key5": "458Vb1mDcSsxJfh6ju8HdimQixzRhuBPgoR4yYPQtimNYPqqBUmBwiBPzb4jhzgaJQxd4FxZ9G1C8s7AH1K2omtm",
  "key6": "JvzVBCDTWw66c1dzUW4B5xAsgLkUE32rCeYwBzsxBnjVNjVkUdEWCQ2rWENZWUmnk63wtGQd8J6MYLQJkMJeVwf",
  "key7": "2Eiep7Fdap57on3ygXkgHCdyd7gmQxF3PixsaxMT6sjLHWBbgbAVRJXkaSZUuEafDqgxXZhNBn37XyEzG2bKbArp",
  "key8": "45SNkZVSHyL8Z1uK4ogqEQNeUvq8jpVWNUEBTQhhPtpbw7kKBYafsK4c3uFF1DRWE1CcJrg9GdthczqpNA497hrV",
  "key9": "2QRkvodAwHqBuWUwUDPf8sf4ejKksyZCWAHT4b8HomAvgBxEiGHUWxcW5Bnz4GMxxCCJ35feKgc52zMsH5RZgC6k",
  "key10": "1bArDJVWisPDDBEbf8Eq95RFBi84w8Q5vUrLpZt6LEBzQWSUHt9bBuuKPDT4XzQ7ciK5qdyaKi5pT4kS5jtbwrc",
  "key11": "2SwDbRM9kZWQPJYVqa9pkWRd6C1pChavrv49B1ac2MC49ecyTdczczGoZ2mGDDyU7rMeQGNVVW57qkjiK7LVeeb9",
  "key12": "3DdyYhpqP8vNSioa5qvoTUULbCXmZFUeL4ZsY4Q7j8PWWjGaHfv5nievMGPJtKRDWnNJuCEjwsHYBV9PbBmCFNNT",
  "key13": "4yyfmcv7Fsbem2WBNQKwH3xYA51DThUqgUW3oogUnqhsnRvC8TbpEZHuqKyVF4wdG1qsP2V8p5Sf8g3ELNU5fMVs",
  "key14": "5cBuuniGHYUh22iyWMwHpLCHXZS6mjzd4y7JsgUMReUVQaUgAAJxDLx3ZPBFpT49wuGsRa3WES6Xfqw4aoKqvE9K",
  "key15": "43Jr3cDgMRRaHWbqG9CEPsJxEzckjEprSxEDLpJLbeLWw84M3T2G46CA2QMaWRsbGdyQ485RGZ61dDxBETbNjVTP",
  "key16": "kyLjj5nfdd8piJfbQgSxYFE2yNc89rJUTkKhE4yWcsQgx5hTAgLJcFbNMevHk2m9MnjNpGRBJkuFEQohSAfi3cx",
  "key17": "4BFxwjV57JRjBiW1BTxnGNsvApPzwKGF7J4C31bJm6BE8Ha84NHeospMZPMKHUrFNhY2czrc5JQ31DoTdkaj1Wsb",
  "key18": "5NRDupRTcwFyhkksYLZw1ktoHFKNBfx46BVnfKwfkWLP5qtWxZE1XyskJiTzn1KoF2dGuxs38fuYkSzz9K6X8KxH",
  "key19": "3bNBZBMDbApxJ2HkGtmUM94d388xcqvYytW964FoFyt1Fn1V9T3CT4qeSjab8Tgz9CGeoSsK7BYA4MjvmQAs5xhU",
  "key20": "2GPgGWkDCMqoczx99gxXhZ16LNeMt85mo9FhmF8N5tf6EnumN9zqYKtNWQhgSUhjiPWoqCKNUjQmVrNCwiUwHVYn",
  "key21": "5SXyxTVxMy1mZJPW8FSZrWTTrvfHCmYb2TdRB8KRzYzpGDc5JDrBysqtxgbn7VCeV4qukZW6hZZNJXapBL31p4W6",
  "key22": "4g1KJRgFJcPAEhgbpqJfPkwTaM23sfjXocrwF6YxCBzqKziBVC3XDamEyBgY3SD4rUwzYB2MrRcb9BTr9egtLVyv",
  "key23": "1S3mJG3YQMhLeQGNhzZPodLSdMv8MWtBGy2u7zzs55VM8zwYLgASpvAo18D71idDC8CH8w5DcDtDg5CeqJQCcAm",
  "key24": "3nnXaSy7UBZfvWJYYmLjG8ojCkwFuq54s2SGKnR3JJFaxX4hvgsyLigFa3HM5ADRYEqyg95s52jdrkxoznpvojCX",
  "key25": "2gFF8vYvmbVHSUcgkMr58joXpBzm4vNZK3j3gvEpEHrC9bUUAJ84xWfoYWMyx7TdSzHcfREWUfjkdpKQJFc24JS6",
  "key26": "hjRiUJL7Pf11CCEtnRasdmmdQBf4g2faBHvQTRyqnpjQaMo7JJh1DQTXiTfB3myuUfnCa4zpuDkFoYpMpimY9Qn",
  "key27": "3A28hiBQchCYYYjPxag9osUcHfHTpSZRMcnYiJBYc5fTJXfxwGiQ1eHzgvJLoa4ukcoFq2opVKfmdTe4o6TNBWLa",
  "key28": "4x1oSqkyf6LCDjtNtcm2vKJjq2iPLp7HxSz4kdT8AJZMoYZEnyx8JcXL1bM8FMuDVu3krPsyLSn1Ry2bUJ46tQPg",
  "key29": "4ZsRUuvocz72M5fXEGLP7h8caq7GZK6CcVf9Zgapx5it3DzrWES4MaeVcXc44Rd4CZPUDmzdHkSwoVx5DKHrkEgP",
  "key30": "2SVXzNoQehL5gJPudpJpwZopDjz7FLjqbcjZnJQVPK8LZRVDJVKSJk7jwMPdzSaXi5xRqfqwX65RVhcUHmiguiE",
  "key31": "9UQHGqC9ZHHJG4LpTyPZcbHMZTrK99MQeCRRCg6tNSjmxMWFkuwiTQ6n9H1sJUUTya8AokU4gaCRC4mPnAtGN4z",
  "key32": "326NYjKsH7u7fL478bYG5yrQqgPPFeBM52WAbzjrGj54kqn45oGsjgVyXdTmNR6VcA3tepe5ECqnv2QbKS3i1gSj",
  "key33": "5At97ELsUaRmbycUz2nxvL5b2EMjKsJTnpJoPFUUjSaqioag57snd3YuT3wPqz25gtVA5VrSJAV9KXajQ9SV9hkT",
  "key34": "3Y48ZRmewamsgD9pgsebVCpdgaSUC8rSkf5i1AXvTNMQzumJu5zoQfrfWPS8xcWnMw3piag3WeYhcNJWTsqUVrt6",
  "key35": "2f1ALN6nREYqp7grgBXGL59Ph2y7piR8bsnFf8WTvcSFHtHxSu4BqWDM751VXsntSiv82Jjbh3bCw69yqdzuwkkh",
  "key36": "2srvJCMkxxhmAc1WXKRGiK7jgxaWEXXSV2rW8wg7QUwSSPzjTXmJyad5KGcoFvj3kvez4bZFk9UfXnPsGjQmYaAM",
  "key37": "58N5PxPyjdvpoJKr1Ez6xESGtyeGBtMj6bLqi5vPNJBchVN5Q6hYZ2YxE54gTXPPoscwcEH91WgCKBPxPXDHd4yw",
  "key38": "3f5BJPz8J7xpxhxeczwVSwrYDTiJkr2LjfDNywscuwHsKkVpjrWS9VBhgeWAMsxR5FGQiMsbr81z2KCSJpLXqg1Z",
  "key39": "bbLnn77sXyUNXyXkLkcGCYfvGD5EhK23BNbcaT7T9pFiiA3F33KvZsvt9TG7CUyPWHSieQX8sa9bYkevy6HA6fQ",
  "key40": "Jqq4vzSFAL12t1gPovuWM6pSA8mTPkWKNHruveWYZGNEq5Df7bHL6M4yRWkciav2g2KSUN8GQyvWKRWoUsEWN8K"
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
