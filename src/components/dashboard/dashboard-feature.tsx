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
    "2gABXxJmaxUgoG8VwbgoswvHfNXcCp4XByf5Gm2zERv5z7MMLZs2av6kCsqfQx8U4KfxSrDBd9QAeEE6WxTbKnwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5snswK4YmbaytFQU9c6pjpJan3F3sCK5Qo4CLnbpLp1eacHQ9k8xhPUibhifYAusWe4qzi34eJNYbppFLZd6jHuA",
  "key1": "3eKSawovoareVT6FBoB4M4WQuTy46wrEYWtbQLQ9ZD5g4amrzvT9ti2RTCxApZAiYVDeK6x7udjbKCZ1PBvuLdMC",
  "key2": "cLQBR9SyZMuo26jYw1VXxkzNP8fFDGHXx8MK59P7PeF5G37kEnycZKd5P1CRz7VHTosBDs3T2UJD4TUBMCzWgFM",
  "key3": "2KA7mNJKLF15dver62kFLgv42LwhQQ5cX9SiJjAH6isCa4XCCFaRwFSPscqwyFGpjwYqHjZwnAMpjahvHyikvtWo",
  "key4": "usrSBQg36RFdg87wqy2bAecS4rZCMscarLgzjdZXUKfFXVhGLYEk1yQjhgu3mUmCrR4ywMDfmRcC9b36hz88sEs",
  "key5": "pWiVL1Giv46gvRGAj3qEdhUMYw9FEh1QKefhADrEGD6DazsBV67d42enB9HeiGRQWKh8k8nXh6GcEM3wUyd5MGa",
  "key6": "5hCvBu86LWevRT8La6hJkb2AtcNuGd925xRDpkPWzv8E1EkG8eZWKyHFKaHruZKn9zBJwWpe15WbSCu8hbyZ66SC",
  "key7": "kcS8psVt2jQeYRCZAzwVVgR6e55eYzki26L1xxGrMfUmNGUB8DRgKdX4uKCTefzwJLayYECttvVKZdpxr6XivVf",
  "key8": "4R4ij9U27soaRn9YrAFLtxa6JE3xPjFXzwVXLBvJ2EwKpygcWH1JsvgsxRsUmcwvAqiHpYQThKhC8rbbZLxrSk8d",
  "key9": "3EHBTv4gcHeZmWaYsPyTZmiXX2ZCCpAj6GGT1hyNGu7LYvxkc1jAWnwALVrrtru5ELwPxcBpAqtV9Ss99An1xiS5",
  "key10": "4mVamNMqtRsn6MGu9Jjc7dbimS8qfaNofxVrLivfDsiPxQeHJr9qWJdvp2otciRxEQwBCeme1HK7e8yZcEhNgzW5",
  "key11": "2dghBd44SNTzB8SbnEzwB9EwvNkmXnqokZ6R4sqSgFf48DQ4n5HQTGnfDHHH4mzMg1EMaEBYAfMFU2W6ddWUbvpx",
  "key12": "2JPSJWwhqYkG41X7XjyZhgj6as9Ghu8dd3WkzurFTqnstVY9LnT57UfVNeccrqHKPYKrkmmHuqV66JxpLkDzqXgL",
  "key13": "3DSCBrEwGF7KSAowyyyWEcHs2xyMKwA3DrZaEwn7WYJycV4gnLbGm7EBSzHvpQDBJ1YeBT5hyEFZWBJMPoJjJbNq",
  "key14": "4KMxQyjEeoiTFDCJzFEh3gGmDN1vyRAQCDg2g4VtMftxJktDFJJkPwKzpvQpz5vg5maenUmg4zgunXeaJdJwNp8M",
  "key15": "jPFbiWrLw3eTNWTpHLurej6QQceDo9jbz8Ushqh5F63AjrQCEtnHJd1TqrGGAenJu8DsGunvM4c1CFBN26EbXLd",
  "key16": "BjhyDj3bREJuejRisC7Vzf7t1KdgGpqZuCp87WT6UT3uUEgdpLh5xQWJhv8qS6h78T1MNhfog4hBu6svSgj2fB2",
  "key17": "3rUs4rbvNVJduPV9NqgYEx6UCqdyqRKefN2XxQozP5aYg2sTAqGbmnv5iJUGjMZFiKA9S7Xn16LmsUFmPHC1gFDd",
  "key18": "3bAC7qjag8XYWoqQzzU7NBe2z873k3bKayCLnb2KRyT74a8ZhEXxCTBLbc2mxZKCQsHQ4kbujKRTH8ZbasNEDdHu",
  "key19": "63WkQCePzTrCD6XLG7KR9NC5JBPhfkQSZnpB3DnK1kv6w1Cn4UWxFXiQ1fPApQ1UqSBEZzaFjHGVL47jfA2zGJua",
  "key20": "5dCoXC8PJdpR8rUVSFAcvpnhdnzydqMojQJKD5nWDpWQo53pFrCQchTJH2sg1m2GVQeSft5UTMoBwBnwaLwuETuN",
  "key21": "2foi1asCF22K48xBRvLQYotC1rWdy9V2MG2MMwxQg9Q24dQ4a8LxyAAzhWbVUTz3YD6cdQj7nsPAhB916dc36jsB",
  "key22": "oan69A1bzkG7bHxa5zh8aTxh9CsU23kHGFWdnBaVaoYeXbirC26oYkAM2xbLigxMoB1BdBFTiYXmjiFHfUL6MPX",
  "key23": "45moGM6xeLWnqrPhkyUC2Qu7P8VnBMH8sqyXkZgYy42pf7k8w522dgZJBkRZiDgTsBJbmyShkptdtryEHbUyZvmE",
  "key24": "2XFHcttLcggTiT8FhVA7UBoweZ5XgdqqMFdFLXc8EyfiMLqbfpix6LTDWBZiAWw2fauPCHbZRJEt23ixAitzNRDp",
  "key25": "3qAjPKSVJqoPpmxfMKvu1hYQnnYX4gBrUTC31PFMFzuwEMF8ffrZcaBEkpUuYiZRUwQtqeGuayC85ZFE8tMpvXWP",
  "key26": "3f3MThrKRraKEPiQ3LP2u3FhbYwHdCKdRShFYN3qR6CBpWKtc395ahWfJf9quK4y3TZbGMX2PB63JEaw6u2YXAt9",
  "key27": "2DAeBTJ2uzEGztBgYXstDTh7GraefQGjiEYNEbDZNjZ6DaS1UygyoQp291HGxBQjBaogJyWGNVJzSx2N9dmBgXKh",
  "key28": "2pcBzx7RqCL6MFoxxkSXuNffi17fN7JE7xyyGtTdSy4XCAmPXfASgxmm4MzRomE5PU2ocQj2L6QHdbm6kaeCke2c",
  "key29": "5aPQFCoXQGL1yto9puqCbtEMAyunpoPpr9kk7ZQMjcukMoAkxnP5eYq5SqYGV9SEHjzg7nXVM4c3gY3AE1UbE67z",
  "key30": "3iAQcsfQWs3ui4wQVs3RXbAsqBCbDA7E5Na7jtrLi7CZ7o1GLYbF8acvJdjt1ZnRMLZNQHbFFdALzyr7EpF3YZJR",
  "key31": "5LYEKuf9eRoCTRPEqEG8RpaKwe2Ag5QnR6EaPRnv7GZhDRRnRr5ap9wdrug6WeZ4NV3SFcPkoHm5ETeBWPw5AC28",
  "key32": "3EjoTEZ1UtiexXcaQxMa74LyXDJMj5dbeLv867UKmq7Rm7vV4jy9uS2W4XxF43tQp6y4HwXUjasTAoFZ5KGrmnsr",
  "key33": "uTufyPhtqiRRqhDv8qS2ce1tVz5btB9T89Ebt68kchVmpg4CzBAMtQP6ud9EsQub5CX6yqAaYDTA5jrAY6isXd3",
  "key34": "2UpJYviiBYuYsdtrBMLTLs8yfh3wWZ8n6QiYmg4mUtYPL1oWDSXF8D9Ap19dGKCLjhL5xG8baRJqQNWZVVTevL1d",
  "key35": "59bDTfSrz9fLoEDGwbpfpvzSnEwjsmyAbhufL7FyHwLCeXsQEbJePYkdhuGXYKrugPk4JQWKiZ3xKmeep1EN1SkF",
  "key36": "62rUDwTehNQ7JcZaRKArqMta2zdf6nHVmMzqMdxK58WiRtRrhbpfiWmeRR7HHPYwLRHcQFnLBvCsM2tXDjDStZrP",
  "key37": "5Rdk8JPSPFLD7itKSsUMNmxeW7UG5D3KotENprFRh4fJmqoNwf7fhCHJnYWntHnNttmsnf37V6QJwmtNAWj57fB7"
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
