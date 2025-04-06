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
    "4tiqrd4drtrVyDuaBPStzZVpu3QCYR6APNvZdCmTbQvagoYqyzjBWC5QjHZTjvEpZKydX1Srxuycsq37gQCKZcS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22WDLzo7ncpYTtZALB2WS644NJmxzCxv1Cp7SPZ6UTySTE2BAsotmG4UbkvXTGEWbXuwxDYHRpwTF59KqWnCb6NP",
  "key1": "48FxfxNLQPbaRxxuEf5qoBwRH5qgKzbbdEzBdc3dy72fj9wXmDYrLtNB3RKi4miZPpjmWDr9FDbvYxLyhSmM2Knd",
  "key2": "5JvfogubqjRztq4xxJzmXQDkMamyi1xsJFDQJjSpE3TGjCpHfhCbw55JvfLMTGGivMAGyeZ3B4Atn33bXDSjhkd3",
  "key3": "4qP8jTaEFLtStoCGbW5MZ5usGyRWFsDPwqdTr1pFeJPh8TPZ2Ufai6uwC4925dDWUKEYevabZtkCVc5pZaF7szvc",
  "key4": "5iMRZFqgGjJrnYgwYiGFWjciCQ3szomHjzv5bUyWgwdYygpaKfydz1i9TtrcsmpCBWg9Sw6uWaizTwmUjboZ2gcV",
  "key5": "2YLsiinhr3czvxmtfffJYtu9bCN9aXQvQepRdbwyU1XuDZhMPBdZZFuHTBLokrN5V1gEgfGcHVo4AbUX3qMnpxjT",
  "key6": "3hh2mMyo8RviHP1iqWFFU3e5r5eeK2fubmzVVm2eQZfpPWiuFLDpR2txar2TkKdKsbGPera53xipNY5Pqv1ztoAs",
  "key7": "NY9czV5TgJfNpVNQkvetb9AocrxjS5BaQMWDacrFHpnjppbvdtBmqDfgB5KxG8zWPy6u79MeYv6234BY1vVgtua",
  "key8": "2nKArp7G5qerHU8HwQN8g1dhDVJ33HJketRfhcSPYu5vNLqcoTkcFTjzbyTtV49dUYAiq6brt23AHiW6i5z5uCR6",
  "key9": "2tViXbu2MfCxjX8scV8KxEMTfskiGf1fd1sdJCvo8FwPfxNRHn2Qk9ybwSdPUQNbqcpY2gg9sw2XvYgfcQ3YQaHD",
  "key10": "5HLsAZek2y3Wra13FNrf4ZuiJudWSUWY51co8WDYLDKeGPZjhKic97JsuJm5CTkKJcFNkZ6uSfrRHUXWCYL2TWFE",
  "key11": "4dohXXFVZfgtFPzpAErn9tZqiLbgZBfas93m2YdfTm1LWe1rvGPbMzwW7UX3sNp1iJg9p6DGjy9moRNooxTNExUm",
  "key12": "BAq7zzimW8ASQV8JMgHD5VMLGa3J53Kmoe461dUbydyENZxFyM11A2ggmcEGnkQdfUi4bomqdApyoKwRNXUKR6H",
  "key13": "JrChgNCtX237XyLD1CiPicXFk247n8gkUJznRwM4QimEqyM8SUt6CnQD8k3Yvg3NEmFeQYRm2a8Nz5eopJeKfoG",
  "key14": "3myVpqHArUCtV3kSpq5Azx63adUSWg7yYMpezsxPZYXpiWV32mn2hJDquwjW1M5zFT3xcQMBNJLVVoGibxMg57ES",
  "key15": "k4QdRxaeRBRxiPrCPNr8Qi57PrPoThkGgCAA7Ls2M1YJuMef8r2NaSCeRHNweSAhcQVhNzFrpYkbCNwDhDH7Leo",
  "key16": "2eRjaU9z6Avi1ADZD6TnYSKnhueEENjrZFHLqpbTtMSDHsFJ8z7EEa7p3sVgAJchanxRoGGAQDdUjGDQe8CYLZqn",
  "key17": "54ztB3P35zdeJZY8z5yEUs44tZ7PrHxMPSkXwoKKbFft82uwyZN2MkZp7KPc9ZktMZcfbC6ejiTNzSp5xfUCAESN",
  "key18": "3EoLKfwGQrGKyFaaMetTD2KeHnjLq5HTkVkttqjDu8NDaEtziwJQZ6tqwasBw6j6iRzHEbeUpbcNqhwDsjUmX4jo",
  "key19": "5rYos1k9SkDZcQNs8LXS2sqZ68hKxfPHJA1MkJGSeEcGZz3v7c9VkGi3NqAxESUsnSU8hjmrs5oaodmnVi5eDco9",
  "key20": "dM14ScUyL5PpBKjaBu8XvMxBtk5TuU1A1CBFUqW6rypz9cnCmQqcQR3W3fZ9cq9oytDt6LoWWjFCL6Aa4z3QkXu",
  "key21": "27JZhGEnAe4xG7jsHynaJYBzu3qSuyD3hqN6hTvkFsJkj5zbhgKLfzAMoecW9FRAdiLUp6MYeATi2EpjmTiYKYBg",
  "key22": "7sV5tft8oc5wuAxqbeG9mr8qHLkboV563xkoFGMvNHHtE4teUrzQxd62xT2QiuaEBPWNnzWnX3mXSLNR3eF1RtA",
  "key23": "b8oghzeSjqvMeYqRAcFsRbkR7bib7dxL1EaKVZURuigYoCmSNiBoR8idXudNpZniaKWfWk8J2DkZ6h5aUyt38Qw",
  "key24": "4mT73h4PmojcKYWZoA73iRjJg6tFvMphjwpMYBuKiyhoX66eSfpYNBMQEKKH9ppA4sK4BHNE2GjJ7BgjLxudazzn",
  "key25": "3doLfRuQsV12ESnDy2ygLRX4yHkh1xcoav8N72y387iQoUzcwcTjRvzMtwLFgi4kzFWKC3eZZ4bCU1WsL69hQgDu",
  "key26": "GzivR1Z9chqwvnTwUvxDPdEvndMk7FG98uHMm3hdDko9jhCMc13TLom7KB824DgwYVjXbDR2EJ1Wo7todRVtBvc",
  "key27": "4wDWAv3RxP8Ps2ycL12euK4Jb8VshfY9x2n3D77Wdf6kzvQ7J2opydU7LNjpMYGejp7hWn876L8B7e6HwckWdR4w",
  "key28": "5VST6HoofajY6cjBNavMLSNVs3VRJfyigDzpqcLYzot6PfnekB6E6sXq2FZv4W162m6dFhnWPnxBupCvfNmAXjkB",
  "key29": "4sFPXYdk5xd3WuKFSAsNt82Uuk4iqkoFcEVniFona5uJJDzKBttvBPYEabX7vhBMdqd8Njxifn4kp5N1uumVacDT",
  "key30": "Tt9Rb6xBuvKzPiZhMBTPdAtxTk3Bec2tzJpFnRLS8xmZ5wGLwaT29qfpEZV9DLwcfRPvaorG2iWD4uymMiA13Bv",
  "key31": "4p8ZjoAg7dw6obXiiRMQqrgGWfggQ2NdekhxKrztEThMW2s8trPptvbiBT5Ddq4G4yTcuTUpYBCoLudQtRvnFDqR",
  "key32": "GdCpWZM6FrSrSFw28PVqH9NudjfJmwm68dbchjWXPjPPsgxTr2Wf9fMA6rV8eBqmZLUiHGnVEYVXiYNJMR7Vt1e",
  "key33": "4rvfbBDmhUgUfTdP45BSMSaYHPLLFMSwGxJqs47JkpUaepdPVhaYHyfKChGhTFMAjkd2go9Ln1N4mHC4PuFZcHxK",
  "key34": "3vPVv1L9ReZcq97HXKTHSyuZqxyh8aUA8zK3jdPKSfsNc4r7GyizCmWYXGa6fgadW3BDFHH9zHRusTQv8hqddG8B",
  "key35": "4axn9Vy2s1axRi5da36DvHUSNPYBDhKwmaRqAqMMJxZWbYb7ERL6ZbjLWkZcC4d3pGrP6N9hJ1LmZEor9CHqCido",
  "key36": "2StBodYL1esACg3GZJFEamHQP5YyroiVWiRyfKPmZi9jL9VP5x2SEzuC6PVWsB5GawurjZuwXuEjjnbxAbJZ36T",
  "key37": "58T1uPQ8eyqSAXyej52d953wva2JNLVfitsaona3xoSMKs5ehiUV4LbA1RRGuDCsJA7LrgqfeXJ5L6ydnvcWuv1T",
  "key38": "5bPdde6nG7XW8PHQUf4PX4cp3yg6BfZckXz3mpxeuFJ9u3QSb85TAxVBTHnuQX5JnMoJWUP7b5ecNrRygHTojXdj",
  "key39": "33nBUMb3ksYSmtz3A6bHcL1vZ8auKo3QF8E6ZLm9SwG5Da5NMhTQxs5STewWRmdCJs9PjxSj7oGnBsimoqNyWxjK",
  "key40": "5ByYEJa6xPCS7U3wMjWizuGXweSPWXJ3uN8AekkSHTWijuP23aCaEFAEb4qdr9yr2vKTV4WdBr5oqKtq8g4ESxrz",
  "key41": "2d9bbnKemAjZHdPNYWTqgpDWu75296WPJAVaAyU5UeTRAjUFn2X7tiWtxhHGaN9nnH1FCh7zSx3GLGtfk2cSoBoj",
  "key42": "2zLfYMYyqk5enhStUJycUBzPTjedPGzBN4uCvHqfK9swUNuf1cEsNaWs9ePTpAzidDvSsUKPYt4LURaEvvbXLMVe",
  "key43": "4pj2Gi6kbtjR8UVYcoVBH1cHsChdhjbTJTqygB7cdKLruWeMgKC2opBUsdxctjAEVjBYeM6qEkbzScGP9S8EDhRf",
  "key44": "4rG8iy7B8rGzY1TgXiAPWFyS86VLktvMvj8ni7UuunMGVgvYoGekWGKqHL4RB8wZWqwByfaM3Jm3LRe22uYVnobr"
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
