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
    "5nocoiMRLo71h41xSRH6FLF9G2KXgpy5A7rTZhgGP4zJUbJ5wGbvT1zFaG5cnGHXAb2HatNe3KBHi8ViG9YrmfSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yf8Z3QsYeb6HQN4TT4Ww6LnEmoANHJvtzE1DnwJTTAbEL97p4kZ3Tx45PqYNKyXAhgjfFTRSm8Hfxg49CGU7YWy",
  "key1": "jGiQhNKLZxLFf3VPgatTFdbzsbSydZ2MW8KiNNBdcDEQRrxj7YdNKrSye5sdc4gKaC6Yf3t5CJuVCCHnRcm775h",
  "key2": "2tvpyeM3hV5PKMM8HtGig6vtLLYw2DeAoKcK2UoMNjQbankxH1DRBuvYNLNwXPG5wW8P4wcReASB5YEBMoGHQXXy",
  "key3": "66Qq4ikZgBTLNjTsRDX1DB6v1guq4u7do7fxxGw2bQH5Xvm3kQdgMHLHWjj2wRbMsnVLzHHd7kpwJfdgg2kLuRYc",
  "key4": "5sjjUBFgxWgqqdqEcHCpne4rnVxWQhdwfsLfTkz5rp8SkeXELyUEGHT9FHcKVFhaRimp4vUxutZ6PkipQgFZoocD",
  "key5": "5z8GVioCWJsVdjnzDiZsM1JM4XxETA7jSmN2hi7UkNwyjoJ5kVybJocrrZDNwj38YXFKwvqaSrGTQS5A77TyVDFA",
  "key6": "3rjCS4oEeovH1CbxiHdXpvmRTqxoxhQN9SU9LX6HeZkfVUwLVaCPDPU6wHKfbgwtgK7wXf8Kc6PNkjzGAF17V49E",
  "key7": "23D7eBXMBBrw5AHxJNPPNVMynmrQdP4MCBK2nRv7mGay5dGR4sPV2rAoSU2L5SCQewPqduXRGGiMLvy4Mhur7qCd",
  "key8": "2tz1BEB9hdnuZTQ7LrJjvdbfErge1eUB8fdhp8VshgDXJ3TXWacXFo8GyYfLDjnLy58cbVu2JNYvQgYU1KK5oTzH",
  "key9": "36BpCA3p5o77uJceftF73waqjZwxM2yxqZnJVH7tAZ2mYmY1yajK7jvkhKxxhrUGUEiPvmjDwD9QatDQexufmU3K",
  "key10": "58PDnU1zBW53b5MUZSv8ATokNMvsjQEhDJn5jfZJZBM4mb6AGSzUWh86mz29ucHGKcfjG8UUpjQerHXRFoVTEZDp",
  "key11": "sBewePUNDivuANFzLQCcJ9fe2vmeLc8DuHX3XFiu4XPTUKZVgyHYE9p3FshwKb2s6u3stWsUWVVTqRkjdAc9Dhe",
  "key12": "3FKD8DkQgaujQqJ2DjVYa44znsKZQGHJXsSwme7d1DccgvtHeFytvdjGx5UoopaCZwMeQiMApxgd6CYxXBXwYhPa",
  "key13": "33R3v8uyiHDTAx51TUSJGgYgc6brdhZXz69HEpJ6Znpv1waLHtprj8vQqkV4CfKbE64Suj5juQ9sJvRtZJjsRVph",
  "key14": "3NFqWaihkPSPdV3Z6DASkPKGeN2hagTsF5Uqf1kDL3tuzZ4MqtFptg8gsmrdmAwJKLQocPNdTDq9W9389XzKdC7s",
  "key15": "YpEJbjixK6i1PfHDJhQYLE4r4etLNBQYm1dtgce3Utxicc8mHeGRh38i8gD6TTEmBn4HLF29s4WN1YBkbBZNWg2",
  "key16": "4DvV82pNoWwo3ULFzQUdb3PTFG5tcH9wxAu1dRsgF9rMXUevcZ1adYk2KE7DGCgdLYYsfKG5RzRivwku661AiJLD",
  "key17": "2WPvumXqEiW15L5GDbsJEiuCh8xxYCdZhRCLqgJRupu9tvZxxuzyLv4pGo5PiJHXT2Rmm4cuNEX3KPEhvhYLLTiQ",
  "key18": "FWzybUYXKKHVKor7P6tvrcC4bVXSCL5sUyPqZEXjTrCbMW8XG4SSyeKxy7qCA8QUg4p4MdfS6P8UZxzP6nEgge8",
  "key19": "25Z5PPGEoxmfzkipXrJDq4pw1K28FrTjc1pHZsNe6jP75iTVrmnafnRFr8VhtyRnQibkMvxhATbuM4hJfQKcg8h9",
  "key20": "4rLvfGWjKFyZ6ZGgXZ3EKEvu83S4gr56rEUfaHmqkqBoe3hJ2L5Fz8Ed3LGLADAv5es7PQZyvdVcJrBdhQ4L2cMo",
  "key21": "22y18RpQGBJATmxd5j4PVnLgR22AwVzissx8sDpdQnkM3VWnMZKekDFLAwjFYQSis87fMKZ18Tfs42FofqWjKjyg",
  "key22": "5vAUbemir74eF9aWo3x3qQ5C7EzTQoEDbpNq6CcEFYAR81zwb7tRbxWrTK7HYiLdg8SQa3488FnGqLJA6WfD6Cge",
  "key23": "5rW1xadzKhVmvZMXDXWCnvjqsisfvbFduYyBFLNg7JcznQHt8yb4myNskeczDms6L6fYccPxfxLwk65LhMbNceDn",
  "key24": "35GGsTjZK9k92TgE6e4rn9HpHspaH59a6dYep52j1Ky14sA8LPoPf78kQR7u6tFsah83E1AoGGpycCZqQSJYs8VR",
  "key25": "r1AinDFUNqTXh33DDWkmoZGLGLKudnAESfZZF3NxqScfZFzd6oc5pGZNgKzSLAoPmjruuB4kja9KBRiiDpVGqe2",
  "key26": "5e2xPxMQHC9YkDLZUr2G6tfUXYzD13MFDQt6iVF81GDgXoH5JZC6aFb9GbWtqxePg83LooueeypSXj3PwTHUs5DS",
  "key27": "2b1YXWC3QwJ2GYtsiXBzBUvj2k47eEVXXK4Z9wcrTWyVgw2tNPtqbCNRxTjnNsTRLcPDLvvf9aUEzHQ7V2HcKr6F",
  "key28": "4LVmGT3Rm8YALzY7eV2PH13L9yY8tPxAcZuE91N2jbGPQU4sZ7fA2yzPHrgtfJZ3qZpNbg1YQcGGv7qi8qYwsRaC",
  "key29": "3qSHAtyauzgi6uZu32BRAUBLiho7g3nsfcDP6fFbWx1HDTWzmtnbwZ7CqBCovkycG1H18Vauy1GZxr5bii7SAepX",
  "key30": "46UZ6kJrm7ryi8XrMbm1b4aonMT8fXszWA6G8p4dZBFUkp5yf3L5PBQKzn5eqaBGmxMLaDJZmouLJhxEgxPUbSna",
  "key31": "5fxCVKQEVVbkpChycng5geJHhB88532yEzfaAeKQ1gAkJV2JYAKFDHDBZ1bMfAArKgKrV5f8YYRFA4VaEm3ekjPe",
  "key32": "2s5hgBy27E2MiqD9t3QwT4BW9zgre3mLp215zHFz4hHvKnVZ4rB8AjwvhS76Srv9SK4QHMoYjh1JrJgPnVSdyXe7",
  "key33": "58tNHd7Kup51gv42cdFzpW4rDNzTgr9UcNf7sBEnejXFiVqVeFiPDGP6HzqaqAkvsWTV63uzkyh1wwDGbtU3Noen",
  "key34": "4wYPXP1NeGwoL9qzMeMcwbfBwjdwCuA3p1RGT5zwMnUJBzgAyaDR16XXchmdtHo5DpzinxRtunyq2EGLbGnq9uje",
  "key35": "3LoHJzx6KAXhqUehPCeBkYE4gz7EqbasE13QNzDVmFm1ZVqHMDEBKBQqmQVk4iP59Ln2wSxS98rGER4BZq1rb4p7",
  "key36": "w43fP6uJE3ofB97sJdkU1xEmRrZMUtEvQWZMt5UFxPiPuM2hEH4NZ9h9cwGC3C2tjfVqMMYjnqN29awAPcLWxHn",
  "key37": "4MuiR81spvnV9yBW53k9icfWLc4wqGXdo5z5KEU2NqbrYBrTJBRGT6kJCaM113SNaWXn9trrmV5jAghjC1M1L2VX",
  "key38": "oboD2T6WPiHMT4tqLVrMc6dtzRhiM5ZXvDuAkruG69ycQAEQqLohGTidptmhXJLf7ZEYc7exHj1QgQgD7tmLR69",
  "key39": "4xLTZWbMKNhpw2hdLVjzA7gqrmLiTmXvnWgFfjMyQFXDvQzr2wZ8mLkkaQ3JXLRWT9n5s4AwUoEE1cjDVFhM1xWp",
  "key40": "3UC9vvjgqk3MN66CxxGyYAWkZdYfe8XYg4gAQp3HuagW5um71XosLoJSwWJDfRbjdidRzzqorLu1Mi4PgDtYo3Nt",
  "key41": "jHk6BGDLscA3QaNWqqJxg5tHPBr8NqHfeUrAYwtWyd8bkrTag2mET8MDynWoHBXiCMTiSBG2WQ2FzGhmoR28DHj",
  "key42": "2uSiewbPutPo8i7tbPV2gdDr9NxtqSDFhENpstGYFTLboQ6EvcXb44jKJ9Y63SKZFFNjSmAqqsk9h21fXgoAgysA",
  "key43": "4LcUSMkudAFYVHiGV1g6qz1GY2XQjx3YQVC8S2Ei4gmy3KQj8WH1jTsB4xkWdp9pG1y5umAzw5Nu3yLjoGpjQ3QZ",
  "key44": "cefVHbA8zCg3fLarfJGBX8eRRitDQwceoRLgNhAFdpEPMgxbVhztF7z5aSpemxszFDbxEeWVw6HWDzzhAoWS7iR",
  "key45": "65APYEVzCQE1pAEdkfPZrUqUAq6BpbkBu49rXKntWwySV4MHnGcDM7veSQfcYAX69mSJGkiRLdg2FdkJ5sqyX8AU"
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
