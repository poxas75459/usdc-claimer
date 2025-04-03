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
    "4y8Hn2hMMjLnHDUZ4gBN2caNRPVETdEVx26bJcBhu3y4Mf8sf2nbXnpCmvwugZPmTAK8BNZvUtNyDNvNfXh2XpxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eaXV3cYYuGoFvNeG8UEQyM2aKTvrBoHxJr1s3pcmt8ANmvr8T9vzzgamkUGf1rLnqeChiTULskh3oqkLjeudX7H",
  "key1": "4AuhrugbBq8osjQF6cAwqZ9EBmDSwJdDZRA73cTt2H8gw6V1ZPRUxFkBYbmh51YseKr9SZjQY9gnTetTSaBC9XRk",
  "key2": "3iuymEJJCRiKNqgRZiFe9qkpY73Miq1BgSjX9HzD6D6gPTEH3Z8Shv12bTXaKArZdUNKznA3yKDqiQ98vr7Gghcx",
  "key3": "2xqosMtmtQZMAsuwBNQAreRieD7kzZoU5P8MEAJJtZXdFF8co3c2pu3M2sJmyv68wJaxRcKLwniyCrnyUUcNESkq",
  "key4": "3DxZzGzYMmmZNph27QAgPnfXbMje8vfAzLyejG5jdUQhkJ4dpoxD3Gm1VrPyudHuxe4czjfmxSvZsBamu4Zi1tcT",
  "key5": "1Rww3EQ8wsXcykLzRECxnLb5DisJifx24sbZMUBGU3jcibsn3A5C29RwsWBpY1dX8XKX9VojK3cUCAHY2wdxACC",
  "key6": "2wTc88g2Rxeg7RuGyiQYLSyJ4tDxf8AzBQ6wZSKBJebxSFNejmiZvvKqCms7ES4sjuvJLNzutQEgU3G7C7Ncjeku",
  "key7": "9F6YCmguSWTvjDLeJGMg2ovNPnaEHAu4PEj1sUQVscRxVm2EFdSigQV2fVneKjaQqhRYckWLDJ6AxgeJgxqfDjT",
  "key8": "35snGewSsAa8pFpZtmUJcRSFdLz1rLBJuLFpDCCsXxQauoSMbWAVv8zohd1QM6ZUmGMCUPZJh1Z7o9YrREhUfvsT",
  "key9": "4oQod8eVd5LSaZPQdwE49swYN7uXGK37Kded35dH5YJCg9LZQNdWkpxQoN8VU8vRLdwxAg5qTEZ4PygcNKUvfkFq",
  "key10": "5dQTwouEKczrciiUJkD4ug9GB5MVQstM7nkedw6WVBps4qpLGZrHtT9PPfa5jGZYMhLeBW5CFs7WTZqdwJsp6eK5",
  "key11": "38YnH8TcMHJJQ8HPRoHt7sME3NSHaMjd38LEbY7Nx5kfMdHBihPjUzgAA5Jf9qwLvisfuVFSEpsxreeL1GwrnkDJ",
  "key12": "2s247PPtMkh6PMm4nHyJ53w83iwWWAEuRsjg2ReXgxyRqCqnnToaAQUYiCBSmgKNB6d5vdAY9d2KSsvgefdPp4oF",
  "key13": "5r9TkjByi8XiYnxvMZ8wKSM5vfTjPqJ28qz21vHAtcq8T71AqGTaJb2kmttAaDhMMB3cVRyW4mGRuPzpmEC4psHB",
  "key14": "UaLXoZv71yzNjG5eGHu5se9wRfJGdBTKTsznnWKKoZk46U1awnP8Vi7ui7s8xFmHSPaEtRuqqf5k6Xnv9LZ1Cm5",
  "key15": "TV4zNyvXXY2wMcHgoZa7FwpvnbFDeqMog4N6pEPRov5cUoRoQmzAhpgvhetfmU2uK8cd3EJUdbrxiELY9qbrHHP",
  "key16": "33pjVPNag5aQQdSWzq4MZSawKd7eWgzf5j5FDmyeU2xHptV1S45QLKfCiuPvApcgLvK2SzyRK9ARrsD8DSPsPLsJ",
  "key17": "3T66vC3z8rq71ur7f38FyHNmRK8VS1itTqY2mLERGSDi44kp8m7JGbQUtzH7yA1E41MLE2nghmKw97Y9oF9zyz4B",
  "key18": "4iMpR6BsRctyxXxfn44ujXE3GFTthL8PERHikAXB1orC9szCV9UYneEVKFC6YAR2DemhXzVxGz76exNpoiRoxgRG",
  "key19": "5xTbwfsjEMSoMMBeFsJVcerTvXYBAtXGTmfqJZsMxhbMKxgD8si3xohnCy47rUinLJmFgUYeKUaZJE6G1UHixaTg",
  "key20": "677wiNY4qoyeypaDJuz2pAXYZ33fvgJbGGHynnFEKi6KKoqjRuTDafHQJ3zD4EBaqoUwPnJuadXR4y69Mck7JayR",
  "key21": "3JdUGPEW9nhSKzE1iZGNuWo1mguMgeSohkq7Kg64J1iEq9Ui5cw7d44sJNEKZunscJZbv3qrpPgVdMZZGM3ckQ9M",
  "key22": "d6yPmc4o4pn7wuorMUdLcjEgwf9Ho8B99cbdRK56MXv4zGXZrDtniDvnxBsk6W3kjqjMfWWWwXPuRQU2V7LpTnZ",
  "key23": "3uxEtJgtBDKvLU86Rk9ZVfBZ9U8fzbofRqvPWnUBEeiVxwYe1xq4w2Fntcf5iMi5fEfZ8dvEoYWuRCZxb9k4zvZ7",
  "key24": "47Yt3kE9A5dEsGbopqMhXLJkF1QWpU7TH99NURfrwDQrivvEe755uXVj9VHxTHw97Ay6YCeWMhxPXmzWNcNHvoPc",
  "key25": "e6yZd6ZU2T4VzTuMz3GT3BTQM4YTybztA3eZbfspsscrHQbGPzcjxZYYEdxV3q4bx6wtKkVhsNE1c4sTdmZqXCD",
  "key26": "3UWbXtFFavWH3cdqxBtTYzvM4wnDLWNdPgo2mBsoJKDA3BmKE5hpwAS2vkEYWdbuR1kUfJToyq5rbX4bBjEFovSC",
  "key27": "2rQYGdzHRRBUapXNorux3JtDh8NGcmjWbC9UXPJhoZgAyLdAZTHSmacg7aZyiJK2js9ebgfMzdnBrEAiCZsjpX3o",
  "key28": "3mUhyyWiu7ertsmUpRmCrdKo4rf4U5Z1WxbF8mo6VLA1xRVFc9QipNhCFGTxeM8TUeifHhqK897Mi7rHFyvQ83sz",
  "key29": "1mrLX6y6jM5GMkPt6sFNuHgqEL9z7b9g2hggWvnp5PRxomYbUXnzmyEi3rzLWXizWTrTkEe5WXbgMuGBgVWFTzi",
  "key30": "2P2E3Y1e9XAVQekuWtH15eKHEByKbcEfdkENpamkSsDFMEq6md2UifrXBqNi5D3KJAf8WQD2Bf2gNxW8cCmYRuGe",
  "key31": "4yPSwp8NHGnynPv1ZGN7XAE8LShTz15L8FtqCfAPn81YKr2EQnhWqydGY3Shw7MEtLCqRBRq8TQVa1bbqna6PMf8",
  "key32": "SraLx4nUAJcK3hYE75AGRDc9SzV2aGxQZdxLTwHYnguFa5YsPuSyvr4GQY8MZiWcoCNdT4BxcuqrhTGNmMuyviG",
  "key33": "2Bz4rBjL7jfD2jc8s65HRMvWBkdtiN89xWQsRPDDtAb1CScbkp9pZjYRWPofxpT1pmDEsSUqtt7MkhNmsDpAAHp2",
  "key34": "4xpVLxPY7DT2BCMYR8HssJJ42U66JQUrLTmMNAcT7aRCmc5zXVmYx3r9Tpxk2p1RcSocTgJ59pQwvVuRGJgnSLZh",
  "key35": "4XEGEA43zj9hiV2BXySKEJ8chgYZC59jByrzNJcwPiQb3eWLdmeFt44D8YpNELRuQCkPaPiXsyCTorAyuBy7jry6",
  "key36": "wm3ZEZ6ujvFoLBrcFyLPQKjhThDdjkhnXNRU9haABvu1nWJ7kdvqw3nvhA8wSnvt5hTLvdmcg2AUjkJf7R9tn1C",
  "key37": "5F6QAgzsYwpKPcNBQEq3pSwCVAw2i8D5cuonPZZC5qb3rLDSBztttRTb2XC4aJzLjWaQHUdsPGxh1Qsz6uf822rQ",
  "key38": "3AWdMfGTte4mp7QrVha9nMvbVNrzan9L9i38oe5Wj1xdZZ5kqnR6HuPPym2NFatgbHfSd1MiWxLn1dLcgcWrg2s2",
  "key39": "2cpUynHDJY18hsB4KZkpQEDV73tYco6sSgmrrrwXrF7afYsMczcwsdtSSCeGtwVLitFXySmFUSmszZiawtQp7dvm"
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
