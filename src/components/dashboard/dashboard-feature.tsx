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
    "2MiTxaWwMc7KvxTN99qbrZdHkZwxvzV2g8PzzU9SrMFjpnj2QnJk7hcgk4HLLGGhi3Q36nkAgmw9bZiMS3k88d8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Vxe46eti5s4Z7RcWkBM2NzLZPFA4UJpqBUJyYFwvEbnwJo1sKfKsdwZ4pkp2vMfnoYvva3qmMSUJSuBa3NUPpY",
  "key1": "41cRibJJfxkAJv3usPACBvLdJQdW1JHyFTTwWq2jLPsmFNKpUxKDZjCGbVLVTYMzgKPCw7PwJVLxcRq81PxxGUm3",
  "key2": "2qXqFuoyqBspaHPLS7HRGKdvBs4UCcUtZfH97VrG5De4DRCy7N3XmZAecbibAbgQc65khJ3Pd4d4BzNw6j14LbWq",
  "key3": "wVZie5EvJ3NBduTxyLLe79yaqwp88oEHJJD8euDxshNYhEd9YVH5YFjNQdRxXkseXES5j4PqELqmw6VUYSLF5bk",
  "key4": "WgLVQ7mYUrbWAZJfokhsveC5j6yLJtDnetYUuWLoJgK3WqxeEqwi2M4QtrB5hTrDvwhQb8Gw4MmQj9dimNap1VL",
  "key5": "3aSyWxTQz7KdgfdkJgNVZGDYwQEhjJGE8iV1mJKDg2onDVqxKomb6BSmHJTAr8CnXunFXFc8DckVCKCYtcGoEDiM",
  "key6": "65cnTniN8ijjvRvpbCGh4c92dNLkwbMJbdtb7Ygh4emAmSnX7DD49MbQwPM6CpkUB9Z7d51ye6wHq5dDEYEVFiFA",
  "key7": "2xxnvvirVu6nFhYqTn2qgNFSTm1jaEPo76nwn7XDNxXfTN6Ym8Btou3pqoUzKycBErduMsyJ39rVE9SgNsFeV5x6",
  "key8": "61kjeUiv2RoAQKVtDVSWdMnVSnbULmXL6VEGAeBmUNieEG5hL3E2VnxUt9osuURZ2rncFf3B8v7mtFrtRzcWSDbq",
  "key9": "3SSjiYUkDKKnfSQZvtYwsAYA7HWDBKZ8Y8GVk1VPiqpT4wPebVECGPtzGuG8bMXVod5A8HwiC25yrxuTqRSySyfq",
  "key10": "ziYRZp2YoxpX5A1Xk6XyQT7sgboXWkHuxSHoeGr8xwesJ7DLzYb1hEbN5dw4rqk5LLsbPWYPbfM5TyLRsu8Vsn1",
  "key11": "3cHgSN2Lfo4mJQbzhSVmDjAguH7BLeCZqBRaBycjbCSkkBzRfj23LB57hawZHr6UceCGaRdVK1Yw7x89RQMUEQWY",
  "key12": "pVG7F1eEGwB7siw5izYrcboxLbdt6WbvED7CqQmyRQJnr1ZBMRKRKtWo4p1EHiWjycPvzeasrLGNXfxJ8QrnJon",
  "key13": "2E9hU1vtqWpn5V51LHHBaJnDiXgYkfKAXhU7gVdj92kpHCbzSVKQu22smbzBPKEnkCVpXsk4zGuNjna3HDUB7pQK",
  "key14": "2cx8p8w4k1xJQUPWt72kk32wGFUNrbYjjnHNkqxzfdEYikRuhk1EPoLWyNYDxsBcCdPWbDoMpstTiqTkv3s5LNuH",
  "key15": "21UEPzQfBqDoDLHDJAY9RTdusWX9f6BrBorBcWbqoR7EEKVky8odoM3VG8J6TRrR1MTmxy3RcoqwBVigSUrs4YC3",
  "key16": "28aDEJF8rVvNtfYBVt5p8wCNKYencG6NRWNZSNyXofYad4nxtr8hyBErN3Q4xHoce9kSXhQ1QY53GSxgiuKcNz8A",
  "key17": "4TMstgM6Kie7rTHGKay3yxVS5Z2LM7YzvnKy23ALSndigj5rZVbURAtktfLzWXgNVDCQX5taDwiBC7btdL6gDAbk",
  "key18": "3tYUhBB9SUdg2AxRMSLcvRHiYNseRdGkWcz4KnnptcGc4meNtndA6dqkPqqYEkPPfBH5XgaXfkWYauo8M7sSgry5",
  "key19": "xT957eFC3Hg6vxJiCan5ofMD3RLs5ZWVpE7dgGXSFGASnrWVRLZ7dV6DRSMW5wfaaVJC8ewMkN7t22e9Hx3get6",
  "key20": "5YgKJQna37rmMCU8Jv8urboV9oJ3heURMDtg8U4gHis1ZUnCR2xE3bQE4uenAnCQBRNS1y7RK4FRh1meCcAnmUXe",
  "key21": "6q9VMEE6cSC1nxAL8goMA4Q1yeuGJjPCrRGZHE2Cva4355JwcPLFrJht5oKgP1Htpc6Cms9EMxoora8pBS6xkvQ",
  "key22": "5LUrvcxMk12ULzqivxTwFeoPTnMb8r8KFVLAtdvgUPe3oWjddacsC4c6sBKiKJ3gxzKeV8bnsQFPS3KNQEvp33sY",
  "key23": "crrsnpJjJptxcW3DzNJnmFxXX11rCZtca2Fb3qNLywRuUs9g9CRDoxyRWxXXPRVsdSYnnAAsJtmSxssZWMso2qH",
  "key24": "3snWemzRqWKnQfziiAM99aHGpzoFyuyfHj26RLVeUQ7tyvfKsdgGAcFwUzCPJ8w1SaXkuz1YzAaXifCBKK4TDVL8",
  "key25": "4sgm3haybEYJCAg3W94BVMtw9D5jT8WnQpmKB4Nx3s5wfiNcVWMqBdvXUcdGv5cgXR9LarEA4w2Qdp2RYU6pKVy7",
  "key26": "5L39ULvd64PVLhXkUchZjwnRpwvK2CZPkYa5JJRdvxxT7GCP8e9zNLyPeEvjmBEwzb8LXMWf6hLPhvofQsnXxSq5",
  "key27": "4SKkEqoYPQMUqExL1V5X5AFdG4ggMLz6XBW6ZkoScwwYDbvuF6a4iyWKfBimxvgFjMxFe5qJJrkj8vqQBpLHfTB3",
  "key28": "55DMAfz2QfdX4vZDehedx5txXyM6whdArBaZQ6oK7BNqrLFNvdzJwjHCc9yXodECuBFCjWDezVoEAxsfxXa4y6LH",
  "key29": "2wgFk7knVLZ6kR96Nkyycy3as51W3x8LWiVCRUMPJ1SDFgDEkWyvRxbw2aXVaC7atc3hzcCEn67ym9RKah1G2eKh",
  "key30": "JHnAxgPnec4kodr4AvLoji6HzFTWQqn4d4kBS1JL4MXfAxAggWPv76Lwj7N59K9b2zNcXP28ep5DMs8gcw4oLYb",
  "key31": "4pBh1sXUuBRwPo1hkhSaDsEfzfpyagiGyy1c2bxEgoUhzypHmbPP5qn6WoEQQnaa7bG8PjjYtAWk9eCofpJebt2r",
  "key32": "4YR6FdA4q6C6nqKVzD4ph96xQLFnE1hcVwiTRp7Dd5MV8eSYTRqjUV93S9r5Ci3VMLoCGsawztswNu2s11CmiCdv",
  "key33": "HF8ZPEqhJpmvr1Wx8ACBpbSwP1QnJhY7QwkQYgxLPL1F4mUo3m5K5oMfg8QasGQwjXpz3HEznptgz5RpzL72oWH",
  "key34": "2pEakv65tb2pyPXicRakajTBJsD3KKqGi2oS4nTyAH9XrpD9eLfFtkRJhaGH69egTbKR1QLA8V7TQEhY31kgct1G",
  "key35": "5ckiCSYdmqBudXV4ZMbPoFRBvPeMkXAbvu4yzBd95eeW8fpxeTezbQvYrQBR1wZSj2WSsNkLPHUJMAXCd5q4hWxJ",
  "key36": "4gYMDzDwscRcSDCmxgvrRLyVfRzkQszy8EeWamc5Bk2Epx4uCd3JyG9XeWK6eipgstHYDJddsVQLn41CSZxMDiEt",
  "key37": "4UW2ZVcxuGvub61iwLaupdjLUKbiaMg44yamX3G5bPK3UFtLxdYrncMXpHARf7yaCBjbJ41VGYn3DGB9MWuMydWU",
  "key38": "g3uqUuZbg5S9t9qBGnf4xDfKUuePLMmomaZFYKPQ8Yz9JYhNw4tBPj739gsj5e3nL6q8REPwndntLknSfobJ9Xk",
  "key39": "5hzkLfRTFFew1vTwsJvfwCpAq24vwSkidi2x9dGiajgaujp1jxvoFqfFfYkVM6xDBdThuRXoeUTK2dR16TWYmh61"
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
