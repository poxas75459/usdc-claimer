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
    "4aJ2RqC7mGmUJywUwL2ELALN6TgdMM5F162HMHsiF6pMd1PPtMaNyVn8cwuGSrabXUMD54zgym4TjLZkoXG937KE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dEDAUdNLz7UtBiSNzDnnSf4zDtcGuGy5eUMEuCxTewiULT3DnM4AgE4SnjvB3117ne4xgyiEcbEAFLCpKSq81fR",
  "key1": "Dq2LM94BiXm3QBVAJfNduFKXwJtJ9WemeA2AA3ZCFhq4d7KBbBCQ1e8CE7pRNLvApSvDvkuAYR1FDrj72QNoH25",
  "key2": "iHhkR36UuZSXttWyq4EXkus44sjnbzyHzov9DFMV9NxrBiUVVESagy5yU5z62EbZYKQruScHXwDWwj6uRfcVL6s",
  "key3": "6t8aMfangVk41HKSgMnuc7qDcec2eNUzo4pssC9G4gwf8PyJCMgvrepn7u21TH1etsaF9TSNtBvZyHCzT2URLmJ",
  "key4": "UJhVHgppHszXc7ZN8GgMuThw4y1RgdsxEEJuaQ9rEw6rNN7cjfBMs496NnwLFYgg7qWGieCDs4BwASMuoSv7faa",
  "key5": "26MMdJQTYdsSWcV48pVk4aYZ36cQyKVPQM5P7jWMKDzyaw6TUtbtVKwtLoTDVSmvsXYWN7i8k8S1hZPdAxFTMR4a",
  "key6": "WndikxdBMo9togjjQ3WmWhyT7vfEChSh4mB37vAqEZHSyQkembPaF8YHaNHW8FhBaRjYTjFwwyapB869x1m3Q22",
  "key7": "5vNDddoF4utVZ989oreocxtDKF5uD7yGCyqVoNgz6TTKG2a3cZUPnAsdEGurybVKyu9DWuGZKnoZ28XxiaN4DmFZ",
  "key8": "5mtyykwwnm6TkhsaXdmuR5brLDNX8rVV43PhHSVpoBh6U4dMqaUp2Eq9RuMzAh78rj9imagj7aAHyGdcn2FdADw8",
  "key9": "2h4oAJUqG4SmJ3513w2xV4MTUb3rD9DgUT2HbwxKwxLazpsfpj5pHGydKAGZjEJ7H9d2K5yPXVFntwFivJn57eox",
  "key10": "3LJCxioYSg2Yzine6Bc3xMnrxmzx2EhHK8dkZKLbfwepystVUWuyFCJ74D17Cm8a2VAtKhf5eKCUpXhG6JVWRHPn",
  "key11": "HujWbbDLwEC3yiT1a6cqu25Kw3Wv399Vz5cXCaULUJW51UGis5AC9AGBN736SfTn8yEV8p1bUKMfTdU6FdL8LWP",
  "key12": "2RCD2Egz3rstkemZDnxAFunejJbEphT88S2N7kA8HPvfEVsW8hsznhf2kpdSFvhbhH93cmSAaSL3uaCuegNJsBw3",
  "key13": "PkY2h1EwTXHg3eeFfHgPp3PMq3sRsevuYhBPv6UqRMzzb6BWGfCiWWUrSSfwq2PqzUfZZhheo3QBsgkKwcGQK2u",
  "key14": "VJaGGaRg2LFSaHG9BxfivKBMd581vmY5aMjRpsQnN8CWu4WNdB2j78gKLrXBF6moHJBXhe3DCymwVCrL8gZrf1g",
  "key15": "enP2xYFeBHX2o6UB15M558U9V21ZgFKQ1mndRiEYePAUa3zxFQqAQ3tRqgrrmaHGRzj99WukJVh1NeetQoSLWxm",
  "key16": "3HmJ7WM1ryB5g4cyVvYitxN3azP78m8j38z4MGQziP8P5QtKWPLsEgqD1MH6qAhfDWyG7mHztRf18ifaWgAeysub",
  "key17": "3kpBAzrq5dS71tG7Z2v2i7xEU4VeBPgDaBVrtRfCPc5G92Mv2KC8gTRnorxH87dmodsvnqhMwHPN4cRUBLHDdbKv",
  "key18": "cVdfrgq4yWyHSBADNHVNWeLxKpmcvL3THJkXAq3mwuQuJ7QVer8qY7FEhXV4p18WRjupQYtL42h2PZuorMAqyCH",
  "key19": "52WRQTiJqr52o5JvKLx4EWy8o9F1PbRNZcrdCVm1FhNHVGtTH2KJ33vUbtTyVwtFm8KsLmBzouZtP6VtoSWL9hob",
  "key20": "41Huq5AYaChro8SKPCEUARh1YSxAiQ4xxDnJ666ZUnbyZUPvQmD6m9FkthpN7hxSHPY3L2VymtShx5My5SuQx88e",
  "key21": "jQmQWthZ3Y17TZPNoj8qnpqQtBUyLXvDayxPRxzXpe877pUYeYDZgyeDxxLoi1EQH4CYH41F7y8rJYZ1GqQW4mX",
  "key22": "4WFVcAMfuseqnxir5XcCKA65nUJXXjYAd2Yb4jiFx5xnH14BoqmshaRDDbm97d2JcG3mKJEQ7wmmNmvF34XSbPcE",
  "key23": "4iGuT4UBuuhnExjbStvpiQBiQbcPDqeH7KBP8ULfWKT43y5SN8jk1tFWmvQMy8832vwphJKYkWBDb2RUDQ6oRcH7",
  "key24": "3rWYQJEYJjDcmRSTtQEJvXntebZ8vznoJ9BUt6ZErTm8x6sSthJ9AozPAqn1coBHPAN5ko1AcGdh6Bf1tZBXRxbH",
  "key25": "25FXWXvJTpLDciRNFDHaPvoVf4KTu9FDGweNAd6F3RqNdh4tynwVhX1RBFEvuLGi6SERm3kGMgJTjidUruJU1fyA",
  "key26": "3UEvxq76XsftmfNG49fop51J1ficzfNvtTxTRbuardjLQuKcj38P9KPTZCQ5ktFVPhaxFPpABARs4opSQrGF1kvT",
  "key27": "SwdqABCd6GufL3rFT6hJq7KJoJLudNSLA2fhtrN9Fy3FryhkC5w7Q24hDYg9w9AgkVUXXDFVHER6YC9vhUyGMCz",
  "key28": "4CPJupDek1f3FRtbVAuoggCZcJ7g6MB9X1Yoca3tZA1jdA9DQbGsVuLwM689WyLn2icJUatAjNEYiBUMWRrTq5Ad",
  "key29": "5J1LPfa3YaUcBoT2b2dii24cbV9a3EkBMyhkdHro3aechVSAudhLshLyVXgW34tqPvUvi3K4xLnt85UPcEk6a7tE",
  "key30": "4DpKtS92frHcZzEzeTN5Wwpom77ZMQYj93we3oL1UMmMNs3xRWABUhcPdwXA3E2qZyixsaKY1iFaqpfzCgKj5b1R",
  "key31": "37xCKYwYsma7LvWuPhWvciYhJ9CpswF8zZjiUesJmwUxmUsPfMviQj2HADsjSwUGutVj1GfnmazVWjCdYdiiKSwy",
  "key32": "T3WWyqo1kBcBg9RB4Qs8MqfXKN9dem2nzPbeeqaPXKs6S79kxxiSEj2tJ995dBw9GC77AUoKrTWZCFVq1HVgQxB",
  "key33": "4fkwbM9zdRKq9sKdwtnAbmrCgoHKwwvkysGXHF6KF89HKTqC7xRnA8zFERV5htzwY76tYdSoSJyDiXeRf5rEikEf",
  "key34": "5HzApLCYpT52Rije3ZgKLE9rccNAURF3VJW6sD5ACmwTFXdeUe54Lg33p7hRy9cqLrY9fqwLP5ijnHB4Nvxqoncj",
  "key35": "5Ndymp8QaZLGQeSTwUrnXr7YXC8igspd7hdJaEB8p2H76nU9nVWeAfSTZfM5mnePuB7GU3crtwRiTghYne4zBDjN",
  "key36": "3B7qJwUwg4UuNy85MwRY446cELqt2DVXccEXVL6AxESp5Vi3TW7bWXCDpEzh4BfmDZ5baNGkFgEUyKQqUDeiQ3dF",
  "key37": "4q7LwCCEGJe2fLcNZEENE5AWn6hparRPECPjpasjtVXaCXgmg7L492RakxdcSDnUb6FRcfowgbeiMhYa3oD3ceSY",
  "key38": "3rpkB8ztgw36CZw5GhJBWnaYehGiycmqKyKQcGh1gXS8hJRMbiyNQ2mKdzYwyZhaxLRiUcjocuw248PGCtTQf9kw",
  "key39": "3vWRBLKrgosgbKky77bXEdJQhFTPng7Eadjf1T95BCLmCTGDWVZHcfak2Eg6anehNEZhtoD8pqtAHpwBwmspS6Jy",
  "key40": "4Y1T3FSJAVRZfpixyAbMstCKqXnaFqnuw9e4GtmeLgqMNhEoWq7KsCwXpqDA7B5Uo7G7jjhHxnHz6GEbSnwhzJCQ",
  "key41": "3nXcGVwzjrbELzPvhQhCudr9eoAxqxW8JBYetjjpZtbJDAZTM3dsFnQd7TRSGm5QB2xqxv5JzX3JqvgaySGL6E5j",
  "key42": "3VxoLxh9GdemypnY6rXHyXXRfGRLyhmoXV1ntUgoPc3NAZqPmSReALbevN5xvkZFHNNQHnKt36oVA5zxFiBPk51y",
  "key43": "5LUHHexBLf9jQ8PTNRvSGHujHY3BESUVsrc5LxuFwQVBy9bcHY31SGwdSupTBSRPU1xWZoL8MkAGJkVKKof3Zyo2",
  "key44": "5i8Qk2KYg1Dv86TdgeTdh3wrWJ7YYmg2VDVkLq9yXn1N291QMG3y2H2KgAfFjTHThULXxCy6jMH7MAeD4QAHwMP"
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
