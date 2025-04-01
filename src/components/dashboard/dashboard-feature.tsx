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
    "5oPcuGRGy6EVr5zX4yTgAWDX2CqLbDd3XyPJYVUv7ahi7GjpwxmE8pBt1SyCh6RbjWXnvpfjcp84swBdGMbr1397"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kmD3VMzMQJ4pwiM4L7HUzuC5TWpbJeTTgxNDyAxbduogWtr5WXFxp5UoHFaxrBsP6eBmPpiHcMACHx7HuLZRjCv",
  "key1": "3MJYQWH9dTiwFLAbZMM7UEpstT7hRwz3NJMCz58Qh7t5x83Na2XPxXpMtmsWpUew3ViiBde17zi8r7cKFGMZRVqo",
  "key2": "4KuYQ7GJLLyxYLA6ogqdCikn5U9dXUoAVCjUviKRzH8GaVw797DSXA4ZbuYnXcmp7GqUWkvv1QAdtMaZycuRQN6u",
  "key3": "31DdvRnmmPDHQ3A1tN7Y58wGrr767pHGkhiVDktxtxgkcY24yoHuJzqUXqMzCgCRbXsiD1Ce6XyAfzhWs79EaFEE",
  "key4": "2CMJVubnL1XRAq9ztq8RbgWYvB68FwKa7vwH3Lh14f9sdNLjcPACeBvgvCP5wKMdqhaAKPzyfmXkUvRP4WjENGDU",
  "key5": "4CzG4BqmhumfdvgYmf8ztkZfYhzYjnvLX1KQhuFofcTDpknTuFQ1AP4rRx88A6y99WXYr35iJEKeWDMQ76p5FCVZ",
  "key6": "5ExTxCowfBWVfvqQouT5JpEb9Hmwzc151MHHDjuUkwEyUCMpVujSTCuBt1EQhYZVVT5PPiKpoe23Bh61RQJx77cu",
  "key7": "YqrsdNBdVkddG8Syxr3Zjk1CPATGNCGhisSiciMBqDM1FaS1L2mFRtM1PCUJKBGEftWwFNoK3FrJUq5kD1DAirT",
  "key8": "3X51B7cZ6gFjkJvUgeL3qvQr4Un6vqj36XNUq1Ymv7c1axfoBbAqtbbRuk6Bxb59WtwAZVfLQxMQ9tgnjxkkUMph",
  "key9": "5eePUGxeX2pXAy2FrhTCHqHXzhrcUwEP21WyVhs18hobCQJDrVy4sqCwRHZk1rj9vB6NAHKFe8ddfw4YcJjHbYcy",
  "key10": "2rDWATCotw9vFgBbcjMphNbuYKnpih2cXUfscSBRFX4RLygt6sMZXEirSMLr91AZuTCkeAcRoEBsGxgLb5gKpBA1",
  "key11": "5ZYsyPgtLNk1fVsxeJbGQNXcXUJQAPCqtfe7u4TLTQcqmsvxYanPL88prqjpPeu7e1CVcEFzr9DLCa7uVdvtdraV",
  "key12": "C18JEXaS3sgKC62MZ21ZSgQa4qVLeb9GqRbfLVkKvi9Htxv5DgUCU8RHJxHvbSDSNGjiikF45Zgocy8RhiGkCXo",
  "key13": "3kkBETdZHqf2c1r6iTfLdEJ6NZ8QdYX3MZArJnc2vUkyZsYfEipCcncqHMKFcvqhCGk8snMh5JUbvHsnq9bk2Zca",
  "key14": "2nzfsZ6jbFwRUSzfnm6pHYKHtBxLnDCcPs8PyNt6DnnM1B7FxshuUHaXxTMtuEDhucxLgG4d9vtGyAbusHV1KVbS",
  "key15": "3VKyNFxJZ7591QAE5wehMwMCnjwXZV71BCAgrYo1LVtAFNRgjJtCJ4NyEihjK429Gs3UFgWdZGCo8vQuZLKPGU41",
  "key16": "62QYxXcn4E6CWKdQitCF5r5d1abHmoVZKUoqDgh5D5ZxuNZQzhWqEGRtkA1gFAJU2eUK3gxnTi8xSP1mqM5gVDaf",
  "key17": "671Xcre2RG2NbBbN3oaZArWvADDCcENxti78btqn7XUjP68VhVKY7dajbMnbs3JmhrjhRxm5c4zB6nDkbTMDh7E1",
  "key18": "2gaGHuviCUE3Ek2xAk3fxYjYjeP4iTV3GWxLNBQA4r7ZPA9sFkRvqCpgDttYjtCjXKF1LTqGRroA1bhtkj3ZRwpt",
  "key19": "4JW34M8aA7wGJzJbhzs2TdAcPvk3DHik6f8rnD1dVvfLpdmvwzRL6eojG6uDFYXMBCXydgofztYUd5LpF3zKQwNy",
  "key20": "S1i2Yr2GYaZ9FX85GYB5FnAmn5zxooEggGqXj6JGY3vqy7ViCzd6iQyMkeewtsfnLbV8r5YqfTGm95JTL2FvTq7",
  "key21": "4Lbynk7wNV1q6fAcQ4uGudSRjTu89iHUWJbKDh1Tr4Rt4VDDPzr8MRc4SNP7QKenejTVK4Fhv8sjTvMdHaNaYrYm",
  "key22": "2YYiEY4NoXQbRpgYhyUvVyL1qY7yDJ4tQJFTidMBtM5j4NMiaHaZbLAuitAFK8QcEgrhCiNBvpBWKyhW9B6mD8r6",
  "key23": "3XLkXzrLVoNdSB8TbEyYKhdT5bzu65BZsXdxTGA6GYny5dbEa55PhbNjSkiu4R2MPXkvK592PbqfMoykSpMQkprv",
  "key24": "5vyJLyiKTTGwuaf48xQr1Ea46RsS1SniQhXtkfuwuBd72w3fBtFMiJCZefmsE1c86GJ6eiB2MeNXFd6yaMPKcDeo",
  "key25": "5KJKjGfkBURz4d6K785cRugrfLupGM3gmLDoMwehxpAarELGjyeKbc3kLJLbBUFDQBqy9PZ3ApvfzFHxCFGSNQkz",
  "key26": "2LLF9zXZRYNfj7vnfFwk3aTLFTkwpgkvHGqDR2xNvsVFcYPiMxQ52gpR3gMDQvX88MBA7wZoh4oMphJcMcKwMsbg",
  "key27": "5LeK4ELR9uAKSL9wUsKAziLKdWW9GBbS4JHWq6VwwitiYEUY3am8idYFJS6eZ5Dn4AHKx89yVvVmRa3xNfDQLenX",
  "key28": "sk3pCtFrxgJvn1LB4uy32EGqucqmjVXU5MtcFcfibP7w23vGLhqrLwiKwhJACv1dUowB6YuhhKUjGa5W68Y18g1",
  "key29": "2v3gDaCzxYS7YZhWYfTUFLD4rBaZaxwTDS34FsH6j6iCGKpe61uPcunWEcaCWiXtw8X7TfDh3MiXDhqsGvpS5LHp",
  "key30": "5T4M5GJbNeCKPHA5z8HH7sYkhAoPaCyPNjimBF2K7EW4NU1f7gN55Ro5Sn4yXAw2t1VvATstTtz3pCLgWhsfPuCx",
  "key31": "GvtRf8cZTHR9Y53BsCWJqEfsk7274NrSxnL3B2TjAiCN3U3tyYBm4FqEtS2MUovrvbANUUipEaJymzcWDG666pA",
  "key32": "2FaPXKkSjrMkom1Bnee8vGUfzRnaZySP8Dhuo9PYmgUfE5np58wVUwE2MWssZho2PiFHXJUKBQ7kp33KUqKaHFLi",
  "key33": "3XfJ9nawYUqyYN5tLy3V8bhbfpRc75NqafaL8no64fCNYzDiDRp8gXrPFspZaS7Wog2R7GFHSHZimRFbtth9TZvb",
  "key34": "63sd9aRnk6iUKATfeKf8B6LuzrFMf2hBj7ccBY4PQ1Rvc8ayc3GRYjiq2yKkmzfM6vYEmqLoe752BcMDyc5gU4YL",
  "key35": "2v3x73TqE93iX9F15M2CduyufD5Mua9e4fP6Vt51dJumRCUYFGaszSnw24JMhemzoFu4GZN3kFSG9DJq8xcYsCEM",
  "key36": "QCPeCVruzoJPXqs8KF5MMdMjfGeAnn9rcLUmchEBust1yAX5PBoqBNPcYdPHzePuXsbRAc3VszL4qsjLxkdaBpX",
  "key37": "3tUZMQ5JZ6FHYH6martJsTU1TWQVWoGwyAeUgYo1dmnuLRE8kjDWxpkS1GVPexGuLqsBYdsjgRMKT6gH5GHiCEr2",
  "key38": "2JWaM2wzHEwKfyQCzi75NShvqddezedLQQcFijcsUwnRt6kUFM8GDbmghijYvfGvxGV8MAJiVv9TEfw3WhvZ1uaM",
  "key39": "3MMxDcH3vakPAvnRALJhCUj7mok4Wr9ropAEhW2BLDK8nug4SAZuarcq6eZf7BEToZ4RGFgYPHEAMegLmAVSybU3",
  "key40": "3taKjaZdaaUZidwL1ErDh1dXidYKHEb1mk63qHTd5z2HUgVdavD1o5RMTNbsx5hRaWr4MUKCUxzo2z5WYqMr3QeP",
  "key41": "5CMAqtHAy3b4irnFbWCCa47rUbvcnZDsq7CQkmsMEcQfvV5vNieVzn6FMaAFrqAWgSqt9hSinxQAHK2Ct6hmsfGV"
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
