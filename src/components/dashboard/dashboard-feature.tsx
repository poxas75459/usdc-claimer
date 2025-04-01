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
    "3craMA5EJJ5krNksM8EfDMeUyTNgdjFxghiCwLnPFk8ehQxDrQt4V3FPm1wZF63S48HDSXP9cGfiEXw58HtgBkJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4knFUvsz4AUnkdaosX5qCAHqfrGNnjezkRhxR7L9LhGeMXawPnP1BfwZ8pEue1ye837exyBn9UsbQfJTdu5JgaUt",
  "key1": "VoUYMU1PALbmkAYsRqnxYzvYKeg7wAbK8wjQyhmPc69VzYaw7FTfiXCQempMutUBeNPVJa4aGyMKoeX2RweH48F",
  "key2": "2pv2fyT3cVbv6wLUadM1RnboBuERNZLvz8Gdqu5xHsyKr5bjAFddSwCVStySJsV8q66pJYU5Nqcep7ywMP4pah8X",
  "key3": "3xgZqtkj2So3e7uB1nogKDCUycjrQcdLXXw3zCXKqXXttAT2jgK7vuPZESFnwPEd6PYTcmvPcFBLXXD8k9xLBuGo",
  "key4": "2xdqpKgF2TKVuHRDtttJFWuGZn9PSG22wqYKvnVwu5bCv5qDknzRbVfrQ3m9QJkbMntU6ZkmUBqHxMaZ3JCcPLiZ",
  "key5": "4ux5BdmQaVUbr1nb7wyRzvCf5C6KXgaW5mGjwYsXgtSczJMN3JHcMaV8tWB6ZvewTaLBUGsBNWr2wime1ZjogK4F",
  "key6": "4JkKuKrvYdVWnpH3pfniaKm8sreivRLj1t3YmVQ2pzM9syeHAVkno3xABj5kyv8ALVxHhh4kN34bTav4XbZZQLxv",
  "key7": "5rS7vciXy945D8XCeHLbxCvboNRhSVD1RPBEviU5F2BLPA1jsJcK7i29YLcJzf32cs6mDWTmWFhukqiW9ZZF553g",
  "key8": "4LdCbfptjykkWhC3ipoZDyL7dpJXAu39wZjhJHFpk4L8Y7J1ScNqMyWuLgxNFtVSawhZnN7rvEnybkKrLQJuqMS7",
  "key9": "37onNYHFHUkWsL2sqvkBSQwBjTYZ8o5sUxbWodBhPpMGYHD8jgZ2nrEmiP4PcZvvwQgHkdm77NtRpqoE5Q9uDsf8",
  "key10": "4xxC6DJN6pzQHMGvrWVHhrVkTHSZ9i4aDM6Q83WvUeVYvV86iyo93i8mMaCcFhmp4eLfEtEwXMsv2gYiHGevqNKp",
  "key11": "28N4GJCQUN9mjxuEURLX1UBf9vqdTq2Q3o69BSnNNUutAvmcDXGsAbFUrB763Z8N5HsakKPFBvMo871Fs6jLLj8s",
  "key12": "RHN8BCaXURVaBQNt8jBkwaZ9BESzVjXdoYQCR8KDpNiGWNtytUcMVJavjXvKYtTyry3qrG8Qmjzfqt22x9eB8cs",
  "key13": "5TZvtoLMRYJM8dZczwGY6MrsAH6Q387KzqqpeVfLND9KfgnWnDtLSkSeAcqo3k7xXMUqawyzrz2QuWT6ohRDt72y",
  "key14": "36X6GN1faFJC54HV77zgxPJYKzg2U8H4sVvkwF9eVL4455FQNX7kyueaucjoiJnfexkXccPFsfL4rfqVFMeVSKMp",
  "key15": "HhEJErYEEqYjg1vxjvXEAYZvtxpavjetZqd5darHKP87kaA67Unu3uGz1jM27TcdzKjnAfTHKXmg2YoXJqX1uFv",
  "key16": "SE2HLiyhM7sUeVWSUgDVa1VUiGmmpDrSK67PP3Par54pfyBK2gYgiBhdtuWHxJpahjvarKhmoNqNbgRuyxaKaeW",
  "key17": "4X68jEtm52hvbBmRaeaeKsAQVAtUAKwPF53Ga9KGj8n1MkjLwxtpLUMUPzh5iEARMJftx1QxzYT5kwPevNvCnq4A",
  "key18": "4f3ojWMjXgJ8YE7cR6yj5muT1CLuJi8aRbTKbpE2tdb4JXqgergEk1X8T5nfZ3YmN7QV7LJCh2CSUHhWb2JKoWR2",
  "key19": "31958hkctsfMAvjEohjM7QNQjbNCNgAydg4hZweQwoZhbKd3k6m2KuSCJqXTMAYLMaQ3NWaYv2g2LQVgsc6utgLy",
  "key20": "5GhUjaYvbG2y6cXcRtQxuwZL4r7hQnWjgUM57RhZd9J7WHYAVRZ5ybGJ3pp5HzDX7xK1w8C4NYAn1vPsTnTywdTi",
  "key21": "2pCBnLbLK3ovEZPBkFk4JkWtuHXmhTYW4oCnw2T7znevmWSWb5TRDvxpF19VhfAQg34D4Ld5Cp9ZBqnqB3k11xJW",
  "key22": "2dByqXN79rMAFw9tKBREEpjrePe7if62UyfqBjj98X2cjqr5CTkqnEoPBxznidho6YKLahcs6eTZr55osT4JSoCB",
  "key23": "4ZQCo8uGdB6dSgciAMiiqwm44QiYzTySQ8UnRq82FfvFpUe8Gxu1qrb7sXUAJJhp6Rn5FaNyoZoeV8k8stL5WxNN",
  "key24": "4FdH4qsTFYvGBgJcnrSmRE7bgjN7eWJ8iS4TyxyJW295jtPtXQibDtk7j6YZ7oqEC4rxKAwPGVH4mKg1cfsjGD4Y",
  "key25": "j5NH1UMM91YVPdXpBEfWUTC3uydWmzNYcsf5tQzgUCj5oPi1ascZj1eYxrZvu1g9G712HFYhQ9nKtMAdN1gFckp",
  "key26": "eHd2rLuCinzmKHfYVxpEdGbohsYwW1YHR9qYaqHjKBiKK9tKKu7vjTpE5GiSs3fKxoFtFkFJkNTdxKMZSkyP5CL",
  "key27": "65bJiQkTZg8QQwbL5Ez2424j3rrFpuu3zMhnmVsx9dVvcZEVQ5Wthauy2q7j4TwTbuxK72FyRqYG5vEZX2cvrMMH",
  "key28": "2Hai8hW6YbCT2H1Pn7xRvne9p6Do2Jxqvb9p4nZbX21Nyo83L4cK2UntukWRGVirWVZTjoDeQWB2Ke7X4C7uxwdY",
  "key29": "2UrjABpWcfUcgZDTExu3SMUiRpu46FsEQeSDgyy8W1LCJN4iBddeKEyXSqyxpmFdrCcud8asp8A22UV53MiYVc7F",
  "key30": "32REyUtobMdnFVb3kv9B6pNZ4B88T5b35QSZ7hbnd3g8cS5hTVtvyMeP6fb3MKS19qYqT8tpYXh16CgwPziJdmTU",
  "key31": "4pMSAJHJGTiXvXALi2NCMhfjdrgWwioGAa1BwB4H6WJdGs4aCNxN6ghRq3PSAmmpVSgHMBKHt61mCF6wiE1NorcF",
  "key32": "349x4NTj1j7ahn1xRmgHpqSdLaV7QkPwMNHP4i9wgR9pYWEZ8D3oFWkaMsPGXSsSNaK7MMKkT78n4rqB8tJfQHEg",
  "key33": "V1dTpnnfzMTgxkyGpU9CXZxN7ubnELcq3jZhFLXPBvTPCkoPXLCADm5mm7jrxHTsJpzwMxN1GKP1jgPggPA4Tw6",
  "key34": "2SdUC4RDV38ruEGqxXj7YKSQ6U9hi8PDDrLHuUrcCSbS7eqKv5jqkESau1WtyWvGskp29jFrVpXNpW4DpefvRduY",
  "key35": "28QJP6GiVarGzZA2HKBpG5AG7nwEsn1V77ehEC1z1E1Krcsdrk5cY3ng9GrZnzASUakjE4wa54scuSrPAonYc7Ce",
  "key36": "5aZULLA1v9BJcgBZLSDf2CwuGC3u9LSDqWWeXcUYK7Azp7kvdDetxqfg6cV5jxcrQaZQrDXVEptTkcQJpJLjA19F",
  "key37": "27Y6z9xrwK3Raf5WksaH4BmuupgiiSNmexMq32NsuUXzK51nf9EfXBrNs9CbExstb5YfK5vwC1kQP74vuVnHjpGF",
  "key38": "5PVw4epFYAyoVAJBjsKpJmMg347pyf4YVTAs8tnzk9zZwzkBPjcEPwDW1zP4NVE99HKrY9e82B7ATwsWo5TL7gwq"
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
