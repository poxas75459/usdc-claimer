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
    "4cwGvnUDpWH8wFaVqaKiay6NksCh7bBPNezr9wc7qx5uXSLiwwtVp2W4dTuQTZWCXby7o1jgjLiX4XdVVwcG6ZM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YHYvWXuHYLRzHhLnA9sjr2cn3NnFLfzxq4Uy7uh7PMu8om7UsyKbPySJ2NUPptsGyN2z8SqPA2y5c46NxZkNZjU",
  "key1": "2Vyfyrtq4csSzzXrMPzMywg6UgReBHtqZxdKxbgaQnenH6fbdLLFwCCRihWmCZFAmdjSJRbM2cqKxyTbga85w8Ag",
  "key2": "5F6hcYAuGV5qAgDPv1ieLpUxt5EWrNuNEMXeJpwRcsETU8V2FUn6sujnKSyXnN9GaibeenH1zhJKP3LFwDkQ6Rm",
  "key3": "3QT5aQyefZHkBxYTuBUpSJ19AEYLaYh4kaZ56q4ESiZVW6wMepT3bht3YZhX6DjZzeWL3BKYV4SgHfsUrTUMCAtk",
  "key4": "7YT4KvSc7nZW1YpYvxzHicUx6ozRzRDUqESVARFBM5pphEvqAnt6sPxsTbgh3GyjibCWpeJm3DzHxRFHmJWj4zW",
  "key5": "CcrF5QgbiMnqMysGVpJm7hp2S2yDsPnssrNdMw7bDXAG2JG3rAe7XAa1TsXMFZSwYVL67GguqczNM1CWNnz22F3",
  "key6": "CAejoPFtkvMBCpY31psjYhYEtroKGgfgoA2TDfE5ttYbAE7yXz4SjF97FXFLC7Zb8mK3fvU2U1kAUA39jz1yRsY",
  "key7": "Aoer5KDesZYQW8yvG8HPy7T6X4NUiYpSjFqDV6fmPjFi73cj6rJPQc35Zp8w7m4qHfQzvQnXTfMrJHCn8QasZpo",
  "key8": "3LwUsF4Yui8px7XhiW8SumBTXi73RkHBDEpB8omVthhEYfejf7JudF8Br4ZqzPxVZXis8mV2RiuMBDKmRPSfhq6v",
  "key9": "4mqzXEmrJ6X8cL8PQA8jvmkiNij6N6bKsuYuC5jMkmfJfqtfFMgiDBJBgVdHBFZTu9UzvqUf95AMPoCvuiYdBAig",
  "key10": "1LAbTNjSTd1Ybfvnq18S7qab7zXAMHi7AZuF1opHDouHgj8wHkmVNNSeSxxteRcW31EGkjweA6hLTQUNx97dYvj",
  "key11": "4UYggtNuVqGMFCjiYQiqVg4YK9fPJn9gRTJopcjDyvSqGZq7s5BNFxB6KbQqwf6wtMnPdvaytwfzwnmemBqCixp8",
  "key12": "3LnsQeoYGCksG6vMRYPTsWSv4QgSuhfxMBmsnViU1PAyifwHbYwyqjzDveASXhqrWuHRFdPduiAAHcCED9g1bJVn",
  "key13": "5zhDt4YZaMkifHDXKwBKsigyShxoTZoQ5WQz2bSB9ayayEpcGtRKt9eDxcN8khSwUGy6MZzyfrUyYE7vxTi4rftc",
  "key14": "3WwQummKWyA7T5mkZXMBN3MoKJWRp6aQAeE1KQ67MxxBkynPegkJxRTjYLvE3bWy1Wtw9hVEtqru4QV7qgXzimj7",
  "key15": "dMWUCYQqfPakkPNqSKgpJnJvp6WiKWf3QP8VpNfDNsRfvmyhA9TLdTLHnSXu9756hU9PUs3nUC9WMrX45ToxFTW",
  "key16": "3YvosDwg2btuhH9vaZ6wqvwdhYh8UAF8ENRQZdFoQcf7U49tgAQCEku8XcVyFYHhcuTjAkBgJ79Buq9zQ8XzEN5b",
  "key17": "5xmnCbY2hffD6s4WxLMWmVutLwhEJNEW1Dgtnbx9pUUfwuQQwvUvdHa6jqGAKAzQTZ8nB4Za6vPA4X2wbnAhnRN3",
  "key18": "2yFSmQ9XsZkk7W5zHpfgtD4TcZhWhPW1riky8QJvu4nj32k8s2bceagCEsn8y2kqq73UxdW6L7YvXeu9y2KAHGXB",
  "key19": "3ojeEcs4KLcKSrGusL8hxny87iHrxHiRAq1aTSjCg1zCU51eMEyWqpmUbS5pqXhgBQLLpTCPV5jE2ib85N2uyMhy",
  "key20": "2GjH9hjKKWS89aDbEuLCpC2fQgrS7nYuV3vRDtpHJf7GmCHoMwbhuv6UH3yr8qLNPDPnMQz81UsbW3p9pLy5Lvac",
  "key21": "4EJq7PEpsEYFwmvnkhDsA5URGxdu3XRssuy5K24TL3bYEbnr9VP4uwcWmLPb8Bm9aCwKrLWgEfX8MHD26PQcWCfb",
  "key22": "34HcYivnVsFjvwZ5xzEHQV8kET23sMuFMfVgy4UVJHYK7MUJdxu6TEdY7N9KgzyxDuoXbZ8HinFhf2nRnn9iYPGG",
  "key23": "Q3qLvBd8Tzo529hVQoUxAmKfq2xmwxXrwsV92f2GwAqHfKKbtQTtbBJQ4XwdLJZCMcYsstBa46gc8BG29HyGMoh",
  "key24": "3ZPDsdvppeYsLqC2odyvazedFErqB4AGmcwtDrWtJEHFocS7EwqX8Biv4FK2Rf27pEccvqrQVGM8YEgE291LNqJZ",
  "key25": "1diExj8vFcZXGL9SWPrij45HcffmPipeXgpyhpZ4t7Dyghdf2gvnZFWa1mUkyvVwBPzEGGVxAdthAgeJDvM5vHF",
  "key26": "ZdvSqYtmTmet8vNz1G9MHyciWSZW21nUy7qrnFRdCkLCcN2PCvQnm475FDJsvhnRS9W5ubuTcyQxwYZ9p6CGNv2",
  "key27": "3ouPSjmmJ6U6677MSv5tu3mnghmtkg6Rei5Gbi4py9qYXdyiRcpw3nUaTsE9vko9uPgdwC8FxQphLaRZSooLdYkA",
  "key28": "3yUXue1hxq9v6EP4RHDQQBaCs2GUE4cGaqm8FRyvDfR3mMCwdBpHEhQfvxquTWoPecfv3Q6qKutCzb4KoPoc3Qbu",
  "key29": "4YvZqFyNV5kxeyuitKTYpNzcfkPqCAuuWrbLVPhnQviRYoEAgu1GGvXzm4nz89eLQtzUyGev94owJSY2ytDcup76",
  "key30": "3iuiFrP7GANZLnNhfnAboxDZqDQujMreLLs3h8V6Jiw5UWihCxtUVeSBVthHaVQuF4kXaCqF3btpmWFNJcvnowPk",
  "key31": "3L54ESGuXrT7WunGeZR6pextjiq4TUmABz57GTS3T4PzHkZZwYtpob3pWzf1burUyRimSek533emoJ1TWZL3sJYS",
  "key32": "26drhzJDGzHT8Z4EHpv5WtS3EX1PFUScCRbNMgfrZAMBmLNaUdNU8bYKpxDA9cQEApDSUgG5Rys98YoK1Jyjo6MP",
  "key33": "F2in1NzbS829n3PeLbYeb7EBhEfS6tENGhGigczgAHbo1BHA7pe9eNm9UBY32RpqNfAq9s5sEMoSHRXUiuf7r1c",
  "key34": "4bnaKPgqL5cSeXjAnRDwnadHAD9maDZfYNTdLgrwFCHwiaD9eedBwASaTjEQ5M55rdCbBRx6WJaC8peZZmq2obdW",
  "key35": "2scnQscJEPZPBsnyWbcwmbuRf2evEYmWRaNhjbUEwMq6RLPCAZbtUW5ZQhqAs3y5cxBe7oJsjhkm6cdMavLHANTS",
  "key36": "38MipWQgMVqPrPPeEposBvixrkS5ujhH8t9LJAqfSeBcz675gM8WYAEVmGvG4RPTLzJnxUiTwMnKjgnTrA4fVevV",
  "key37": "4AR8v8SR5L4dZgnGnefs2PoXdN7YJmRgQDDyUzoYBNgiA888khgAM47CQwreBzDVPf8bEqQ5CbVwRURWCQXfN7Ht",
  "key38": "24anu5DnRW3QfYfPa1MkX9JMafYRPkLrpTDTPqd6VYWaGKgaDRsgt9Tfh81zLhADT5cDdfsSqWNAoczxtqKz7ctE",
  "key39": "2JNRE1KnPVtPh5S3JQv1mAcnLQoaoikspCyWigciMUVwmgrwVz3meHdmP43WsUpms1HXjsCr7RzTwfb5CL6aadwi",
  "key40": "2NqXWkz4kSruUhcbmf5hVNZcRr45p5ahRTB1wFVCFc6W4zyj5UJfBGGbE7z4iYQHivHwhMsPaKKdG22s21Ks46br",
  "key41": "5P63mi3p4QnzmXdWqsxj1XVLnhqPY4xEtjwDaWXQzKjaS51P2xJdjy5MtAM5GA51kbRwwJkNf98d76SSpPw2VGPV",
  "key42": "4ZZR5pVkgcWp9y6Qym5YjnWK1NtY7isu4VaahSuuPMdjqRG4jo5yhZLMxf6MiGrfkkDKVz7MECBdEo3MJe3pkk53",
  "key43": "hCv8Z7DSYMBKsUyMYLKjToWELkKj68Kbpn5b2Gf6Goupix1AGbSJHzxJLixy1tZnAmAFLRgMznF7VNMAfWuGhtg",
  "key44": "37zEnmrGnbd2oDPDH34CSAq8c9VD28AY7uJjrUhSiacn8FufXhVxU4cdtQzrXSK41iJEZ2N2mkuvk12dmr6fZUfw",
  "key45": "23b4w1NHySyBpC6hj1fi3W1Qh3dGdPikJNp6CUGtGjy3nqyJTTbWK7YnkNtAYLxFCfaUMTsMxYaHmvezqWeFQ6uS",
  "key46": "2EtM1TjrFPGFQ2tEorpLLMhaMqo8YZ5oF776thSgnx28jH8pbTVNeh4Xecqah3ihCnkotg1uJVsoA5HkhZLKKsG"
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
