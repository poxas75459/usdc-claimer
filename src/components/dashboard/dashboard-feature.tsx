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
    "3hPyyiTAa2JSp4GSNpvw86Tk7mqXUsiaDDE37uvu647zDYWyfW22qsU4TPr3LoJYGWJv7wRUPtPqj3dkhD4anAqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xNS6XFZZ5i9dK3hF2HFKbuoZcCrMr58W1D3eyAidrUeipor1ci5UX4TKpBZVi9QGz9TWvGDDP3hEq5DemcvA38",
  "key1": "5jL6kWgJvXi87GxhCkYG4tAj79C12Yh4hssWFDvB4p4QXCPyEDKSSPRvoXGyNU2buKhAyK9cTY2JMjaWShVRyheH",
  "key2": "24vKRCd4dDmX3tjSqsBXog4K9BXGD2sHV1fWuLt5hRTDDfqM6g9gVMKgpirAmPdewSQAvqBGbeWwrNS4RBLBGQcY",
  "key3": "35dUWga9Y5M5QWp8T82AmSyaKZw8YaNyWtzKu9nGQP62ix6EanUtBt5nqv7cb9ZGvejPbMMmvb7opLaAisUznaBh",
  "key4": "2fzkBDPJPTTobRGvNfMihJUZ19LGCbKveVCkdohU4HTP5XJKNAqts5NiqKDH2MLcpePmbkvbJCQo8y4q3iBRx8mY",
  "key5": "4iCwkdeMojon2tvMgpMMRagtGQwQp72JatGHyxFuyjNpJDyupTGvRUPJdZWse8eEEh9geLuATUVqA2HWbc4oe5E3",
  "key6": "UAg3RC96Hvq3vJNqYSeC6ENTrnjraxHN69rWDoULKzALvJYjBds38Qhzx19TekgLvXSD3s757NJzLNpZCw2TZcc",
  "key7": "3FRDZmzUB5bBaSpgN2v8eeQye5QDAibQxTojgWfb4VmeYU11T3sCiUxsoKpbzwS2k4T5YHxsAUnntC1JbcKfGK84",
  "key8": "5Q3TGaoUdzKeyPGBg88LEyXeM2tKhmWcEDn2u5sPe9zzYTR9ziN8FENcD44vMJYVdqXTRY7WcqB3WMT2epaF2QBa",
  "key9": "5AcUCRUYGzdzQQQqESRd6pxYuQanUmL8LBXx9nip9ZenM2GY5FQptyiQsYacZYwLULG69Tq5uy7PocFaXepeTEzT",
  "key10": "5EyLrnkF9T2W3cUwTH2rLAkeGUZXn4Jg67pdn3v6T1kbDhHuptmQBNSPvRbYco7NQAHSiUjFUJ8fcbiaMs5UcEwn",
  "key11": "GdbQRi87nAkuXmo1sKbSKt6rqWiwCNQLMSs3spnZFr2yVQTm9cDUd1QSapq3uRpz24eENtYMXAYvAc2WMfR4Rou",
  "key12": "52Staek24ZbtPw2QqmZS34sY5CFPXhwu1XsS67Ny2W2Z1aDUzm3f3aqBG97UrWaioSY4P1CjUa1ErR17ig89Cqoo",
  "key13": "h1kPnPVikLT2H25fahpM5o2gJx3L3MmTsjfyvPgNwmYTQEPtHw5tdBUgbeqSHYcUqupU3HbNp1bUydrzPsysqen",
  "key14": "54rLMga389sKhUtfj33f7uWBFp1SKNnvXsM339UBtGUSg5f9xRjLfTTHv9KPkdy1LGbMnigYq2RkefWbUdgTS2j",
  "key15": "5F1qs8uHUBSqYYS4QEox1kVB9YfaS4TjtLP6MgW3jwGRqBvtxMLgwGrYzjURX9ASuzUSTpAREeJtmkR2sNd36rA9",
  "key16": "3cGyZnYHyeta7Jm7Vpc68orHV6PGEVAHFqopD6X2pZX1iuKyqcts4Muv2jCA8YFQeWJjoJkNgxbgfD2nLDAj6ErV",
  "key17": "267yhFzSRGvFqVJWU1zdDQhXm1oJukcvJTWSs76EQu322PAydkiPHzAXG8LZmgjAB9E11JQCzTnHsKMJt9BkdKeq",
  "key18": "366dTNpJX28kjLJDXMD6om9DRH3PL2gEV44WWMUK56nDdG59bHjMq3wHdgFd3CsKiRvkkHt56gsWZg7n4Hw41WKi",
  "key19": "5w19RmtFHDb9gjJi1SBWPkvng8wkYwMwF4rFq4FmkmFWP9BaQFkjMZPfQ67LVbmMQijBZExwF861YtVQrdaZgB2g",
  "key20": "27uouMczUYsuaodn8UzDxqQHJzqcyp3njhCUmjLwSDj7LjUFj1S3bThqgMCL1jBcHQshHbQRJgtqkwmu4PmMeUGV",
  "key21": "5hzwWpwdNeGLVcRzxru1qL5Q4amVj9Ad7xbjWf1FW8BkMKVujkJuwLEtMCunYS7JLtsPGejAmyd8936uS2pgD2Q",
  "key22": "4K6jW5MUpEUknABoC5KxximPui2M9KrbCb1NWNnhpurFu1Jj1uaxTgDJEY5A2ZcdcS8hm5DWmpbTgQuA11M2GeTe",
  "key23": "5uqeKrDvDDMpNhXasNKc555DEUkAXVbx1721QaQLU6TNHriy5d3NSrzJci8aYKzdmHUisr68uVG1Nk8i6Wb27wAB",
  "key24": "4tfoYLNep91d8irgm6MzDinYNivkiuyGonkpP9igBnqKw3fve1rUeNSb134SYETPtiA5zqAVug6YDvQVMS64pLqC",
  "key25": "uAYgVvmrqfPif9YdrHVFstnVaVYi3RToyAVoGdeCiQBoa6MoS27Q1pU2tCH85RQGoB7c5tUbwE5oAWUvhasLxCC",
  "key26": "4dZ624mDsd4zg1ktiadwL8q9pAu2W1MBBEGdUy1yjaQEuFSXypY2A3SFSzPcoF6a8ZaGqo6C3eb5QF2qbrm5rXtR",
  "key27": "2vcipfBsax1xxmu8rPXb9z8ty81PiFd192UGzapLZFEBP7ecxZKj8Pz8vnmFxedrPt9urQT7qexn1MzNQEAmNnvV",
  "key28": "2mDNqEWk8Tehs25VCfxC1ewy43CZA3SosiFCX1k6QrqNCJCS9vDoHQEfnpYQqh5zay2K74shnt2WzQofuzVHNEE5",
  "key29": "zrPUMpiZJa6XYUH7z4og8JQuyyhbSnitboszG9aZie93JedMLSFwhtXgakiWYhskCMgNEakodswPk3kUqHPy93h",
  "key30": "3VsoPhihautd71rMRVUL1jtVYxUXiqLEbf37wRihmHMMKbHVFaVYiKuLwvXPi4kkctrigUdk1iKvmQztd28SJNue",
  "key31": "2gPG8p7n47tvZubqdHvHKSMoYtJmrg8eqYtRkVfqgwhRxvwKes8j6VLhDwbCCbPcLMTzFtzJBBZmYgCkGUCxRBd9",
  "key32": "46jZNkMkS4GoMZW7LhLFzbR1u63TNuB4JKGMJnsazhMC4hG3T1o2bSbB5KfuwubJBFqB5c2q3Uu6HcA4iiNg3MnT",
  "key33": "3R4i2qHCA2AzHuLBY9UuksZULzHVLMNU95t6vHyZN1qhBxhxPvUpoePiJF2LseExyuTfqB3tLmND5NHjvmTmGmDR",
  "key34": "kSd4kj2QkyfF1s41iokRJPR4npcPhDXVi5aUUMGYBmHYJSJTCy32CMY5tqRmnwzUz1JFauygqL2J4pRgHrrf8gs",
  "key35": "2Pi1SXLkTm2jsqoypztnrbBgFKFFzYtNkKpkdyF4AhNVKy3wmxTHoxx48ks9tMXmHLaTaGw8tMSCzuaP3kDqjgfF",
  "key36": "8MxoUwmcFiPPjsh3WsaUJny6wPZ7ef2fAAXgjZKoAX4nPFKTFA9HB7aEZuynBFJDhUX4LEWgBT44L6tJPqXRXFe",
  "key37": "4r17CoEv45b4Mvdh2jWhgXEZWQUsX4MQtbFT9JccR1S1aQiQ5jQycirduaWJ7R8uFoDe97p4oXJL7JT7DPpfgd5f",
  "key38": "64tdkgJspd6Sck3urwo4375qQ8WwmdNe3H6hXqcsabHhkj1DxwcfhkXwY24fUvN6ji4g3DpmZhPnWVL6E8unZpt4",
  "key39": "FJseoiFR5wASrcfq1gg9f3zPQb61v9qB2wVX9qW1fJBNeVtK6yWHMv8xSTVMifyFQ7yRjB8Gvadu9h3tsFMvi2G",
  "key40": "TYVFAWujkLq3tgsqTvdrf1gSs9vKEwmefFcyE3cpavKVHAaBYGcaDRu2XtMk9DKEfAApqPE3XzXhVkJ7xEGQoGy",
  "key41": "5VxmNcwJGkwPzL9FNTYxdbLvw1VHAiCo6vmWTmGwyU4XKqW7aTNjSU5oaifS1NLJ6dEkhkbCwnX5J47whYABcw6P",
  "key42": "5LJp3D51U4xPyQot3f9Mh3yeLCD1dMccWFMLNhpsC3hEpMGgx8faPDPn2VKNYhV7Hr9SmQzmVXsSRDFpnKCiufC3",
  "key43": "5WntrbbCR7wWZjQmmdvV3bekcAF7RukHsw1YD6RTMm4Jox5z4BPXRJ64SRSYg1iU4tVEgT3dFejPhVfURmbt6rNk",
  "key44": "5EtogMLWxpZhXaMsPHwoVUa9ogKi2o5g4v3Np1sRHqXAkjvHvsDTNm9AyMs6g2B6NcUVo24bYwHWbbjzUxzze9JB",
  "key45": "23Xi9bd97355YJREcG74b9p8UTgg9GF4NcNcNPgLGcYELDmNswSMRuH8kn2Cyu1Nwv82zVgH7kiWCY9yEpMGhi4a",
  "key46": "5px2YGsgXEPDWdYH2idDbq5HaXKdF7SytgVi7A3M8d4QqK2wKV2LdwejSFwdg8sNLqqgvsrXi1MNbUF2u1dW1uXd",
  "key47": "5VjArGEZGn52JnZmbA2f7bq8Ccz59rnchqvDR28ZVrGtUwF2y44usshXBqCYZYF7Bn3bBnDwMCApvgqqPAbZiyt3"
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
