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
    "8cVtG7CgEy3oFVY2ByXt1UW5NgXxSwufTDqJR4NSXxVUEf73Hg9K272vNQ5UhNcRasC7SZFgV9rGmzT6yXeFUVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2optuh5PcXS2Le5G1iwtnTvECfiFMSCfu9h22CvtB1VzBMtXRzraw5kbfPkSWvQACyWwsiNWpM5h59SpExAsCzv4",
  "key1": "5KFwjcekRBzHyqFktgviHJ57MaZY8fveMec2pZhZZY6yWt6to7yWGGcNmfmUTtexykPthDQ9EPQbv2zNKyNMi6H1",
  "key2": "4nEdkUQaiu6hxCzFEnTPRRkvNBsKPhS4Lj3Zs3QYsHWh8FhRFXfMV2TxEWxkauyiPZo9vSvcDwB5ghUThoyTXnnx",
  "key3": "4P38F9FkxzYmT3RXituB45hohqdMdLKM5YmP39zr5ps9SBa4cc1AFEFRcA1UXedyjuTXpeDQd87CRjSVYwHY5j5Q",
  "key4": "5jrq7xMutHPXfuZHm5UWEn4Ae3JG88t9f3uSPQ8xKWkY6jbGtCDwzyyqCxZ7CWGcwK99eWG1EMdKChZfBUfMPiQa",
  "key5": "5Ecks8RDRQWz2MGudhruJPpmczymYDDS8ySLzZgw1HGPn5hxAiC5U6evc13krA7BMJ1sfvX2ZzkLHn91frUE17au",
  "key6": "5Rp9vgy6arSY5AJqqp81Y6FatNqMeh4WFpATHD9FunaMBkr5nd6FihreFeFJXjLLMgwC4wdFzW648pJbcakgxebP",
  "key7": "4n16bQzxQuReHdEbQpwrUD9VQAmXrfZavfic5mqAyH8bg5ppu8scohz8SaPZ9mKLR1S7JkXbzNR2a7UjPfoohmMV",
  "key8": "4Jit5yVCztcijLG9gqayXLefLKskGzjfFQebMHHLGTb7VHHz1yxPAeiignahNuKfavEE9JxGMZcdnkPFi4hREn3R",
  "key9": "5kA9LN21k2qeerK6NyUdzL96385D95FeQ5Q3vmZi1DqYBdD1TkSeqRqscWzE97njFB5xTj7vtQfVXKSreYsgju2P",
  "key10": "5jMZR6Jw2xU4cMtdE33SLKNKFNfbnL4ZdERdhUYWtnF5q98nt2kNd2mh8vkaw2dBYdECruajEKcbFKPGkJmUZA3T",
  "key11": "5zb4RDABsGsbhdYce1cHeh3C6QZaLf4JUWnZa8mgMUimSwY1j36bdK4R2W7JDaNFeRHuapzVunEjQ5iWeQsMQ4Pn",
  "key12": "4H27xyExiCdQZ3CJaK4aLhyNYNVhEgw9HMCBRHxPCbydYnoFzryiueUVS8NwaewPZeK31LXjvGeCsckERHB5Tfg9",
  "key13": "3ihK85HCfJZUQPxg4qg8LJtUYe5K88kJ1bybsVvFT6bs129o4FGAPLDZJo2BNgLd93V6QCvh8MBTFmM1KnzYAnza",
  "key14": "64FisYVfig6X3fSNXcEieFbAdzn8fA9aVfpmDKhND4qkm5R2NaU25FRBcjqozx7VsPmfiCeMFPC3JJJ9jGgBweNw",
  "key15": "1qvdxPUHBzzfWDgqtaoUujyW9YhvpGzL92srSfvG6gaUGJ6YG4dJjcKAGy2pgH38YYpimTawHPNsTMG6YaMDkDc",
  "key16": "4JHcbg7U4THztq9bXNaowY618xY1Vb9y5DEwL7RZUcF6hc6NF2B6mCH6utTAeM6p4t7ukCmVt1iHBUZwakS2e5bK",
  "key17": "3oRTynvB3MkUGwEEka91BBjZi6f3YCYkHXbBeWZoF7GQfpbmEjNkb5qNxDtQiV4SNDZ1sDpfE1577EJPJkrnPjub",
  "key18": "57sm4CV9sU2YD7ym6MkBU7snBXTL2PvFeKpGfURAQ4XeSEaoYhvobgp7NBGFQGDZpB57PzbjdKok58HmEerYN6Xr",
  "key19": "4xutjeACwTJHHsoVamhH2kPsYq4Luz8BHuuCk2ndr4YNtbwvZQa3p5QPppGjTZhBrf7vj6fmLh2pefwEv3L5rWgE",
  "key20": "2roJ4mLomw9iLSgivsRmtrqxKpzcqedjvsCbHxFYk7T6ifiD9wwtdiy43PiMArUc2DtHG2L7EBtCUCoahqYFGYkp",
  "key21": "4Hm5tubyWtv1aV3Tza35R2BWbCTUyHQzLqMqudY6uUDDHba6CWsncP9YN8Vr4HJNDsbSnqBSQ6ykMjFMH5AMqArS",
  "key22": "65zsWhUzhejH5wGM1U95tssNdhzuzbAd9fFzyFSiA1sUMbmkQTf8gQnfuTciaEXLtxbZuBf61d99EJxuF63DuAn7",
  "key23": "3SkHbr6gykhx6C3WMPYQs6LLQG3BGMEEKDGfdBdoiFoobLaPKD1U7zBJpSP8SeVoPrDdX58zu2EmvYgD1YriFLfU",
  "key24": "38akpDixX87jQiH7qgxnMv6XLrnWj96pC6mVCFDQwo99v5GKTmHrRhDt8HnhDyjpvzhEVCqriHEFos5wuRZMm6Sh",
  "key25": "23WxoMCRQ969qq2aWD8TfW14s6jTEFz7qUyFqScDufpiCb5QAsKUW5yNoPDjVkBYK4uYtqAR5njgJiL3SShKXWKg",
  "key26": "4UXncM1TMAtSJLVyTa7c8Ety5fxVAW8niY6Sdby2SztDNqxr1DqTAQZ86yFPHs5Hk64Dc2cmF8VkAX1okNophxMU",
  "key27": "43akH1BN3SYBDsPuYoH6HxMVjb2wJgTdk3DHNfxHkTYkp96r8Hi7TT6pVmvEJqjypvsW2j9k76MfntPQQrky8vPv",
  "key28": "2LMbAgB9NhbCMgNjFC3SSGmMUyR2QqnwFBk1458raCfKhMuWg8ao9fawekAjD2XAR7y1LSCBALLxj418Z6XJ1HhL",
  "key29": "2pwECiPZV8MbLzzFifYNNzs2kYqep4GURnER4gfZCbdbWsVd7Jf3NGgDC6YzbabntJXSMuNbiStaiphXQFJiQ3ec",
  "key30": "5FTJVXNnr3cqd8fFpJfhv8QN7EPThZysJTTwSaudjuZL8MAwgVECSvXL3QaxepqkGeLr42CkajkBGTZx9bvBJc9t"
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
