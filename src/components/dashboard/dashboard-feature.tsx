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
    "3uqxYUqPgYZFocrKXwtgGXCiemoU8pNE4HLEMhfKoggntGA12MNVbeoWm1dp56XEnijQVVaBDiUakCZn8RYCpxgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44XQvUn1gKhb64pQ7dsZFrVWsroX4LfSjdAYp9cv5E4JuF5nJeXV92u3zVpy2CEmZA3j1kYs6tFQpVn6vVz8jx5c",
  "key1": "pKD9u9ipJ2gAB54C225q769oTznE5ZMaMrHRbVHZnqNtTV7uDxYQaRK2hfn5H5iYkqSasjieYJGYhDRBVJrf6H2",
  "key2": "3k1TRwgwQSDDawvUUXneZndMXQa45hKadDevtAEXPJMvcjtesrw9SRtUfvUXHcmM1hiHeBG1eipPQkydVedAdgvo",
  "key3": "4b72Kvyi7LngPp4bJkMN45E9BdXiFZR1gjjF3eCot5ZLCpWGpfCkroVD91wez5CbfBPP2qeLDczA1a1e5RjNgg3G",
  "key4": "3nqQCHJEihURTzWFX3gg7HeLGpMp3wzbrUiJHyS66yqe6AxB9Zhpn7hTZeSxsRJY4zpH5RDdwrEaAQFiJiJDbso6",
  "key5": "4wZvfqjV2Fm3GqV7jtpinSfM8zPWZk5wjq2yDDhQ8FABh4kRXn1yJDcTEXvMFyt8VnxN6wJzFvvxW2xcnJ4W6V1H",
  "key6": "81zaJM1ybavrQyVa2oJ3uUTBNJGJWHc9ufr5i8iKVs7kjVRUMwdqMKj8KE29iA9LPZgZRkn9UtUn987Rrapiuru",
  "key7": "4yw8Fy59RWAT6swDcZPttbsQZzuoHCt4Cs1CWDDAPhhi4rBt1bZH6yG4VQvtP6NAr79w7oFz8kZECJjouZNY6hux",
  "key8": "24zKDkE1LUyw8A5pMrK4fXoBVtFa7uoJzq18sP8LqjTC12xdcWkHrqSTnCsE4pTv2sQdXcyFBBA8uckproLGbKHv",
  "key9": "5smscs67p5vUsv6mW9TiV9tE4ZFCkgJhhuCwZYGwHYVaCtH4j1spQRWy3y1cxQbh4ZRP6K2AWjFS6s2VdGitioth",
  "key10": "54FnvH8dq6Suhy6HvP7y4nEEbzYBa9f4e9BDfugewRTg4jwxoApoTNQcvKv6LrmoRGYsSNrTQ6TyuLsWqbhWEZsu",
  "key11": "xxaQfqwumVuibz9v5ckJ9PvvjdARTjE8nsJZomxmR6AD84chTsb54XTYZPzEVjVHsVWcVvcxAEkFRzWvev1H99f",
  "key12": "5Qyv1W1cLzJw23GVdv7wGjXMsDAptoXK6bGBFBN8Wqhndehm8KddiB5AtZ6XTzitoyc3tGXeqbXvpb2PnKS4cdJN",
  "key13": "5FyLcs5zHmrLLfEFQ1uaUbN4ZPBD2dPbXEuS1LtQmvQ8uw2bewSL1kKtc8cg8wsbRmjovhsPzjnuLLpvvUgviiRs",
  "key14": "5HawCDWn8KVbzHPVUPCH6TuuFZrZxR1BmYFZFNiNRpczucZavZPjpzoUbTyNXgEtCaY9DyF7mukSmXdYht27D8Wt",
  "key15": "47DCpwJnnMDh5ZrVBHW7NSLXdgoguVUMTi7hQLT1CVsipMbsiuiXoE8opiibfxzNtxRbtNrmncG4MEzJ7cCHDWCd",
  "key16": "3MdXa9PqyVaScjUkbtbxmNcwTbrqYAcWkdQq8m2ihLKnDaeFwmD87mU2whiYVS83oZX8iGsjY7o73HuJVsDKxBrE",
  "key17": "5AghxkApseqsUnYSHgGK7BLG2AMncbmEvF7PuLkXpYUH3u5gRhxhrh7vQRcsmdQsR8CwDPQsBk5paZc79Auq4Wuy",
  "key18": "nAAbQTrHWLU2K1QBExZLCQeUmoTaFN7wvSe2ET8jzbcCSgTv19wYSQ6XiL7ruFBTZrBPwBpfttsRdw98mkPUiSu",
  "key19": "3JYdQVwsxgYK9mRk1JsvYHjow9JKRudtudKzdAty3tn15hbyRw4Dser11sFzuwNL3szCATwECiaeBiu3eafgYoA",
  "key20": "3UVA7pTW2NGx2Rx7sE8XuyC7QpEncsaMQRNBdpEztNLJN2DTwS292ZFSMHBeabKXpoCrsax1Eo8QcEeiXmh2XpSW",
  "key21": "aDj46JBABysfxxtQDzYz31rgaQtyxBmtF4zcYosuxXMGhScL9d2ioXMDsHxciDb1TSkWnVymaHoNnaNrcyvjFcv",
  "key22": "3i3s5dE2jnth4FpfPX1uxXXNnHYW1HLx43W3vF6SRgVxGJ3mh1APyzPuLCcwb7zBKbw4LRoi4SDJ3d76aJH3HakY",
  "key23": "2ssipDWsjSKnVA7nc8xKbArH36etnir3ryjJhMaAQKktZmVzqRihPFAxeLTtiDP4e2n6dePrAZqZQ1xccS9cyvLM",
  "key24": "2LfT5qDBAroSbwtaY4CX1hzzNQ9qVh8cqJfpz3258qmEU1La6GiVtt83L52ZfFV34cwG3GD6oSgWd7W12KAvSPKv",
  "key25": "5FCjAa3qqMQYX62RJ9B4PR4TjVYkGzCcDoAhh6tZYxGEZYBDNR5JNzppm8Wb7xnCEG55ZKQJqdPTZKZkpWBGntxd",
  "key26": "2Dw1ZuT7L1nfsGB4DXZegfGwWgqrDJjmxY3PpM8xefk2C5B82jhGuWw5b8txF6NYY2hanZCyE2mm2M2gmDDY3Vfw",
  "key27": "2RvxBBtpTbyKGT4kkrb7hLMDmXPJ7dmkstyJQ29zcU4S4GpKsmRHaWgegaauZReyEVdsgSix7qWVcaiWg5fT9Md2",
  "key28": "4uyTxSw3YKoa9g3DT1CGyE3iykRzeMi6Ny3mToC7mfc1qH737mzZZCciKJekogC4JpVxhUJJZ8vRYzjvmWtxtz2k"
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
