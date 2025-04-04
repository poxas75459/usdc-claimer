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
    "cYb8qcEDgM6b5XqZrmdwyw9DXNENWdyPMTEDJQMar2eshyfj5SPiMyu5TVfdgqsRHKMqPsiHqig1NtPpuzT2KoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4isw8MqmYPbr9qo4ZVsoFXFZzcZL9uAcn9KzENjQZZU5Qp1EWUA33WzaMFczL9RmDbQxXjHQdr1J3uHEz4wH3tjg",
  "key1": "3L4ctboHW1XBtLjSGwYZhDra64uNh6Bms46dvVSbyXcXPGe3dC4JcugoK1af9X77FD4f8nzYVgfVpkXUR4Syequn",
  "key2": "iVy9gGdARCJCNb9FG4Yo3WDHGLtLcypkHSVnq19HLF7xgba3pQspgEY8bb2YkyCun7jsBQMB3X38GLU7oZcWF6N",
  "key3": "2i8B1J2UAcEjLxzro5AJRVBzabgWnVPLPDhTbN4oE6SjZQwyMSkhFEUepQdWq5scK7aEy5YACWv5gE6xe1pmi5zF",
  "key4": "2dzQSKmBf4VpZLKNaJFnqY4whRf53vaxnfHW9S93GitgxNsHC9gVWwvPKfSuHc9MuzgV5YBaLooEvkQqtc9tMA2J",
  "key5": "5UK8pUhREBHmNFvWwHRMtzt1J5hE2wPpRmP17KtRLeAwH64LvqCA9CEabSfFUyWdwfRReSqGsJxawnpjFqe4RUzm",
  "key6": "5kyvQNuN5Rne5ivCyMQ7HgjFpSr6pe9NtZgp2Su1AbkdgqQCoZRH4VA2LyMi9FuKtoUqmCJ52b5wVb2LZVJNX6pn",
  "key7": "65pG4bUESKxxiNQY32dHgirkNkjvhFw2Dpc827st5uv1Y9DKtota3XJF9uvUSgaeukTEsawcQaDcTnMMcHn1HpdR",
  "key8": "2E4f5ew4dgJHYnR8XU1EE2vrcm8DkV2w6ycruj4yU2seGNkdtrZgogS7WFAoQKqJsjRqBqkuedHPP6sRsVMzgLPt",
  "key9": "3aCFJ1NVMTAy3gKw16dieJHPjhmw3SW7iq639dsZuMHQa2xscqE2JjfPwpRwp57sUDwsRhG9hY69CCNZ6oGpByn3",
  "key10": "2MqN5Vdiptq9zaJ3R72YzsrseRTD3R8oweattjUprJ6cSKyYtTug9f16MD6uhfLyxvrHBcGo6nQeAPiyN1Rh9k2c",
  "key11": "3Med2ngk7gxwSNzkJA1TKfc2E53NRoEyVwuEFkRe4Pota3R5HCc4wXSBa6Ej36NDobuqSRdEi1HdnD99TYkCXwpA",
  "key12": "2DNM513DYqePDdDak2znm8wp7E6j9FqbtTvkeqnnCo25A81WFSzgN9DaU2PpHnZxGLud395AyTsLVAbqY1YerLuR",
  "key13": "3ypDC16x7u2XY1aWYxPCnYcFmbcXZqWh6HK2fafU3cZhJ5sUasCfprpu2mYUaokFZjEsEPRrcmSmkwxm9orPSRyW",
  "key14": "3VLQDXGgP9S1KZ3cQJcu75bjKq5Z2dWR2nHiyBxpPT8879J53HDLAyPePpeX5WBw52uiNnmQ1PyzM4oMHkZfVe4k",
  "key15": "rWUGknpBhFriDuTK2Q5L78vzwRU8FC5MPAchEa1P8YCKkJifmVAk65ahSUi3Y9rQrQwmv7xKDhUd2CNc8anvLuG",
  "key16": "4KjGkGyA1ouMe6Lf6z5NDMkLX2XWWz5L4osUAbRCyEVGQXB7zh7QgCJJDeNJSFZtSsL8BFv4S8tbS5CgqJg2gr7T",
  "key17": "3z4HehNTgDQ6es7kRwkjjganGkLEdE2XXqzeiLQYDVF7mndhSFL6cbHxR19rahnn7p1aQBXcCvhqza6ERDcLHQHG",
  "key18": "N96TGadVHRCXKLogpqqfAgRQG4hRMYnatKQLPqiLyUbCXbR94aU92FV1xL7dyaJrhqkq4imzk45n9xU2m47yn61",
  "key19": "4ZRQqome3sRGD3XE5n3cq8sAcF2Zfvgq7pzxKAhu7hKCTX38JLyRLkbJpYBpJZ5nd5zenUebtyGHoqX3wTrFKdLV",
  "key20": "5tQQS7AyA4v641tQnDjCNawwfSH7jTEfQuTMS8gq3qHigLfNL9BGbsF41M4EzmEfFju3hGvjooMHW6kHgS3wijtd",
  "key21": "GG3dTmq2bAsqDqy1RUXsLbgczdb7F6brj8juFumTQY1eF5eX8YV1p8i9vYYP5shDrjY1n9vEpGZg1REMJvoYxTg",
  "key22": "3Gb1uAJ4igaztyXocjpHNrnRkebPeQdB7agVbFHZXq2Am5fsAbv7AdnNx8X8e3HdThret6GPm6WKABBtSVwLUSuF",
  "key23": "6161ztZ3kcPLRBiwWVd8zsbikPkG12pUK1HaA3oCf9Vmq8FPYDs1gEahTrSuhUHeGGjDAXL7evE9vAfWJsUTJXWY",
  "key24": "QLWdD2xeW43Yfuqks67jE4qSbNKuA3z4q3AdNXrtDR1jNh9XNRwmSSksfiQ5e59R9KW4r4oyPbKXsCHpmZVm9F3",
  "key25": "emKcFD5hb79axwLdpvwnMjyX5QzBfBtrDEhd6txThTWAL8zBWTeh4L3Nr3zEoitanVZFYmqQGdCcZy5mKnpSw5D",
  "key26": "5zSRuyVN3y29NnJFDcBoKpnANaRPKVJZzg59igSf3UdVRn6sPoZQbQtZ66oZeKcY77BKHFEsvxQV96C7vCk8edcU",
  "key27": "2WF7GcoEZhiffiCkLpKzHTwAVjCN462aai2rPHKSYmi8qAPnnGDXNtUuMHgTL5gwAgAgxmBaRDs6sNY1b536ovix",
  "key28": "3SjWmqS4hDPxHroUdBAdtkfpAwaa2ZHFysPCVzAVxbcnYucZcfKYHwcpWqudDSfwPpmu5FU7y7Dep1KNBDuvNgM4",
  "key29": "4ADMqrMsJXQpZLsMV9cLdvg4L3PxBfE1gJZd7nBG2WbnEDhixaaMi4Sfp6WeTSPt53k7vdVPEoxXJn7GnxE6UyFy",
  "key30": "4SB436q22BscsRxBkSLBkgnxyUxuzHGzPiSQimAZhszqte455L4C9UswtjCek8AoZgtiTWn2auFRkMpaWpw1Pdhk",
  "key31": "4Kggg19DPkk6TwfSokZRSMeWFCwByjHRbijSCFmZuW4h6qmLPFNQJUjpWuiK7vHxZrCMBHyTbSPv5Af16z24Mtmz",
  "key32": "CXVjkmke2LzQFWFi6sktNfi1RzSK1udDiE5g2iUqZJyvWeBqy2Z7mvCB7rYt2yQjybrPWrQyXii2WkEMVtAQ2LY",
  "key33": "T3sWfCYx8WGZGSquYmpqvCwDVijNUzpz414E1yPVm76xSLda3FzHrCG2KogWW1J7fpf2wnr9XxYoCHpTBeKN286",
  "key34": "3NYXxESNdGUjQPZ3kHtxGvBj8fy5YWhtgrQz6mZFgQsQJ5eXJjPBPhgHF1xCqhmo2CmtdhQt6bWoRp3tnmM1Bf4P",
  "key35": "4EERTG8mgXNw4iCrYNkV4gUfFhNSm37BC4exw8Apqsq8jUJNLvKyEZTXqyALFfTCZfLBWcStYRavqtygGDcLSCbQ",
  "key36": "4JpSHNb2gQxp9c7kiDnS3kzkA74i41L5oDEbjaJ4Jxk4HrRYDUdkJqXpoiFMt8dHtg2uDmmeZm9YxvwmcF8DLWjJ",
  "key37": "2SuGx9mUVGpLfUJdKVhcV1nPagF4aheoA59hJE9oqypE63rUeygFguyfZqAtSKTPKUPSU6YAsWGenpZGbAYsGd2B",
  "key38": "4Ua3AhB9yfESJkyw7mn5rES9JnkJHiXSkfU3EwuXdHmtW7oZEpmw55QQ5XkE62Nkzo1AZNnaGPJjAs3EEmdz6byR",
  "key39": "23sgF89XLgmjFctAYrN8tUTgZrKL4iMmj5agGKeqar2Uv81NKFXEAvdfNNqHKhPUgxjnmH1iQCT1oQD4vkFXduq2",
  "key40": "2qvuFT1TpTV5Mnefqqr9m3ZyVYvVFPMFWSVNZYCML5S3NT1fzqAWQB9kHH4JZxQQEaep7cyDPKeYheDzKvae3mUy",
  "key41": "5t8uJms3XdEvmsgPkJpQL2VmW9Xia6GLHJVeH3bfXg4JAFxuta57BY2qbH5KEwZpaxggn81CKTwfsLe4WEJdbaJ7",
  "key42": "3ANQvSUNdRFgFxvB1LfEeEWNmCLUFvGmmYVBkTZ5e4pPnmWCMAkEAFut3RHTgzsQRjqkEvhkcHmANS8eqc6LwiN3",
  "key43": "4HRM1RoL6J3MtqfxkLzvvw2RbALKMWLFSivw4Ty8ZaH2qTAundhPBNCFTaAC1NuPnBEpUYxtSHMUBoXFdY7rDAtL",
  "key44": "21KXF82vm2XDFVL22pqX6VyRidm6316AoMgXUkraJCxGn19rzkHT3N9RtKaLsgz34PFTephPu5nkoCfyAnF5xjAz"
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
