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
    "3cPmYy6WW7xLQ7vyg38aYcnbthy72jpThgHYZX78jpPGcV8AN6idn8ptDGHdGCKSvYE4jtwg8UYAocrFJcCXXPDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BFo22wsfBrWTe842LCVm2YjDQk4TAQmXsW1XAL6YXpYZu4UwzfZfRLLX584vyf8Z1Pqppif1yJGQyw9HvCFEp45",
  "key1": "2kVREi2RmeWdp9uptTNuB4TJin13udwESAENDXou8Q3rqg2kha5EALMViK5uHLX8b2A3RmRUnQaBTJwXbrprERSV",
  "key2": "5E5HTbywYvu5Yh7qKqqSNdWxd2Fki3cajWu3TtticDXPTpWUjw48ybxoCbnjW3NNXTG9Ezz7pL2DnwMzU9xbCWFJ",
  "key3": "3hJwN8xZGsrtjWzu7YvFHzgqq1GLfHXVCRbk9XwYcrDwBGuu8KH3JMFNm5fxqpEHBtf7GDLRdGY3fgzpYn5gomLJ",
  "key4": "3zU6CQUKsAtnGpajTZSZBjP7bRqJotXUnSoYRjAspj3atD1Z9CfUhJgDQxvqgNc8S2XTKpsYq5cBB53wW3u6rKKX",
  "key5": "4GUGz9ob9RenPh3dWCH3SpJEKjLyC9RrPCEdjLeoTmCtXkvzeZeGvPoDmzYMsuDgrfuz6R4YAaruFjHuPWPRLp78",
  "key6": "YfoGEzPJpFgh15PvGfhDcA8xPDYHPxbAmuspFdCH7ar4BND8jJidouwuMZzFM7fpxJiNP7SCKg8XLJNM83ZpG3Y",
  "key7": "5sPmAPhbHuYTH7iDnFH6UnpcTBGJXCxfJoUYPnA2mzKvVwp9HXoj75PFkC4EgBMeBkxCTFBhf9b9uhuXmPZ6Q2ZV",
  "key8": "2vJQXt9yTgZgd4RmPxksu9v1iNivuCPMfdN57ErHGjax1DFGwQLo4SDZdzez7gvAQ7NDPTBQuW3K2JnzkxfTu3He",
  "key9": "5upsGiWyUtgjnGoCJHAvHds7rfjkMYyywVe8PbYcjBapkepDfb13AhyqwvByhHsXmD7dBcVVKUS4uY77Y1Xd2Xwv",
  "key10": "2vZzFHoUj3qnR2fad7aXaxjc13m6m3aMgavWqcbgT3zw2pz9E3SnT9gpiDa3wnNhf6PeawFtVm61qCasn4Jj9XX",
  "key11": "5a48LwRCeBZZ8VJdRah9txNTW9W2bphK1sLdRoLmtV7PSa1okgLsSErbu9szyy5Wc3n3iC67cVztuu2yP3A28W14",
  "key12": "49X4u17SvLUDjskHUaNBihxjZVgpbRNyMnUkMEstG7kCMvqFdYrW9nVfWQqbsgb8nkciXpLY45DTw78RxJQZnhPK",
  "key13": "4XLj9qs3e2jUt1o7tqyREbQiBcBGWzh5tuGgks2DEcJ2DUYHrgePy2PdakFMTg23hQh8LcPwcAxs7joWfSK9tJWW",
  "key14": "6584phrtHDmc7UQBbR2RXvcYFw2m4SSwpyiLZFwG87sWA5myx1CCBE857egazPz99kNjQgnWgw5QA98qjEtum7RG",
  "key15": "2CuZGpDQLRrcMJz6BFvfWgV3JnSR2REYJKxWLojzsZGiVNiBMATV1VxxNowPQYD19ecoDDFxNALxw4ZXv9of8zex",
  "key16": "4wUtE9K2AbGGWk6HWFT4Ea9WXLaumeyTTAJWBD8m5AfuhGRPwE6bVPqjupBGQs9WpeGwscrXaKhbcbw8hCewcpvL",
  "key17": "5txAKRGjZyMMao1nEN85ZJnmgNTU26qTuZQ8kvyjgqEPPaVdLwwaHiZ2ExX9tM2utGYAmS832fPWUsfPmG8QYTXE",
  "key18": "55wfY7NW2NU7uAXGFA5qxXJtYo8npoteLLm76JvfCx4CmkeQVN9Vwt87cpDff7S32LEJTtiy31E3WaSyhpcpYYHt",
  "key19": "3rF6tfZ5xxdEtRsa9ZUDQmpZsqjDVGJSBY7LHMGmM8pz1GEdkg7PL1UFvCuXZbSt7ebDFNHxPriGaeN2zMf1CMgh",
  "key20": "3waWkRw9Zp4gHbbAcFXUAtMgKC8UE95gg5xdfkyLD3iyzuva5c6BWZSgFL2ENewC2gdc233NECvmSen3xBW2mua3",
  "key21": "4cuLijMpuBLkfc3GuTv1EBr6P6R4JhVwUAR2kbFjrmnYtZAZCmeMYmvq8EiEuLJCQrry3XL72krTw4ZFbpgXJdAR",
  "key22": "4A1aiYhXx754pAzcGm16vaCPDD7UvcgY6zbP5GNTs5Br5pbGFBTF4XGr6KDBs9T9L7HBDDMk5ehTXMRdjuwLzaz2",
  "key23": "4je3kYS359qfDNSmDcUd4D8Hk33QxFzA4t6pnnwEdT3zpaMTF5rRx7usyQxFZZZJZfEBMJDXFEKpkkVR48TX96HM",
  "key24": "36YRisvF6wj8MRoDVLuUanfJmVXHmHBYvFFdXQQvZvw7ZgwYv2oHsZW83HGkKPvunUHUCfqgzpbMHJorGp9GAvU5",
  "key25": "4k4rowZTdeCNW8kHMqKhk6tjQAta41A56hKGKnKXkKVT5VYA5tZudHzPfee79Svsdb2JnH1EvDKvAFoQEbjRSApF",
  "key26": "2VXf6kjdk7Mwy85o5cLVt1RzZcte7kzieCSrPX627ytuvhjQHvXToRxhQ9dSbhP2YTvCAMqZAmgHiXFXDXfVgmQr",
  "key27": "81xyXd3fJyuZNc48quL2VhYdwcmQFe9RcpB4UK1bcpWXjAx5kNC74n8YEJRoSWRwHAR5vrSuKaDUhXLwrfpMojd",
  "key28": "3YnSmx96ti4sga1kQezHLQQiTsTWYmCrryE6mSaiwvrbECrWnXnYWK3jm62kp4RdRNq6UQCJtNoyibwequcoXzSC",
  "key29": "3hfRzZYLvgEWTJgNnPBYTD2626Q3TnqaYqeyXi4XNKqJVGwtxBkbpG1fFk3P5hehEkaRuE89Xfh88hdM9KEY2CCc",
  "key30": "2s7T9YHLYFHcornpieBV8Bg2saLKXK5gSo3bhtXM8XhBF4ooYN4jYZXmChKcL9cq8t7izVxZWzLJvYQ7kAiDJHjb",
  "key31": "4LVHesruRrLwrLyVGFCwsSmd7tgDKPArfKE7o2JN9eSvKxUQWbyya6UgkwQMb7hbaR6ZikqzDtLWnwBFRdtNDQkS",
  "key32": "3r85wF3FCscN6X7gGMUSkghZrbfwRmFaxLTKTRKMyvsW4vxqfDhhW7S9AULsDLyZdMi1SHy99CjwUAajCMf88L2F",
  "key33": "3Kdxk3BHq2XGXSTUvkwU1GLeb3qGu4qmQtbqJZnKvJ4sWp2trHKSeYk3gwcz2LFjE3ouTMYcmYBuSgyopRechLug",
  "key34": "5e8Fmv86pWqCjTFWWuJz1owkG1dDPsMuJtsmRJ4USoHX2Nv2XDMKtyJbCXeN8XPB8n2HPgxzAL9YknbA4YV85a34",
  "key35": "4myP5SDycLxk1pw7WZTZ2KADaWu7ZMNEMd5Du97RADx29q6cfiB9z4zQHpNLWas8wcjZx8x2NncBUzBvFCKpUNqd",
  "key36": "4wDXz5EA4SVJ4hm8fKnxJc7o3SgVpiTrJHEcFdCgfAy6YyW8Pe1cntq7Y4WWe32kcWfm6QTfN7HyjpkQDoomKnCn",
  "key37": "4NXexv3TVzzid4XjSUJUCgozdJMMJ93QAzn7z34dYP56xZvor2RvebrCfojpRuxzJdX4wo9DR3j3CrUGZ8BhatBZ",
  "key38": "3EYrZv86tFcxQauukCV4aBs252DjES25U1DmZM8CDEzppJaqJhhxnfigbUJWJG1oPUA6qodapMW2jFj3Z25YntWc",
  "key39": "5Z7iXFEww78EVKzFEH2ZRHf6NgwdgeVwJrUm44ByUReg7zGy2GDs1oYVmCkji2VAUMFz3P4HwQwZxWaNRxQhfys5",
  "key40": "522haZ2zw2N1Wu6X9RGrGLTYcC5n4ytbnPfSenjL6jCof37SHs3efSPcBMD8Bsn3pf5uDTvStYHYNR1efECNdNi",
  "key41": "4LjZzmmWdHGHNGm4r6vQRy3DdNZkaykmkXX5mohGZ2BiDSSRRCs8NsN4YwAA8ahRuenbkacyLqiWAkVHJ3C339J4",
  "key42": "4GUf9QFezg1PCZxE4nJpNwNkuSgS3VdE1RcwF8unt3brAeEQQWGE6kf95TppPh9qWAkmoZSrThSCp7BxXFd5qRyg",
  "key43": "2LwUwS1fUQVcMoYooLKyC7hDby5ttquZctrcAN5vhMexh4YjN66uW2ZAmTtrZjLGonuV2ZdDz5VqPK86zCDJSHxW"
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
