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
    "3KFcgjrNMvbkrzho9XgDYWy2wrUWTnC2Aq18otVC1nngXQyLvbBVffKju9TCbyQzjn32urtoKkVCYvRLDcUYn51v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UA939EdBMk12U8z6t4MBLg14Ydqe5egjKU9TXpTtxtgHVsMneYw9kyeoQPW2af9yzqZt6AUv9vsm9GvbvfH8kjC",
  "key1": "3gvexYuMXngF2Mce6kSbcdFEHQvKtXFRF42MLGtmbGJgFgoYKbPemLop4GrDW3DBZg8SPLynUkxGVK1BKPuL1C6a",
  "key2": "2PDxm7w7pA3BeQaQ3b4hDUdA5uuibUnaZw86xo7sMdKGkqq8nHHt6s3CMPxwr3TytbknJbaDKmNojMFnSmD21nai",
  "key3": "2cFSRKDU9Fi3xcjfVNKBXWkgdxfgR4nzd5NiwyaTjqvXCyjuDohazopgQ9Pfiq4JFDsWU4fK5HgMbEunBHc3D6JY",
  "key4": "4Ekogg8xMVBxrBaMWvW11dCmUgkcHoH2zMqSE5HTDhxH8zEHqUXr5xNWdhLWu6U14wsuL1JVyMBMrqJLTbXpAkgD",
  "key5": "2TCUgsHMtn3SvxL4RKfSryQ1ttHmTkptVEXXV7XfnroTxBxavYD9XaX2NzDg8WaWxMPo88XqsmBosyMMpq86cphS",
  "key6": "3G7CQmuLuMSdbAdss3uRCGvFAo9jccXi6awnfaGeuMQjRznWshqn4uD1Zb9RgUWMeuC6uP92JoAk9Mz3FFREDuQ8",
  "key7": "2cCjyhJwEAP2HTi3nxeA9B2BgYjxSXozyUP9eePmKEpdzwt2aFsDM4yo5c9GWxJmoCoQ6HkGczAhWwSWwzu7SBnd",
  "key8": "2YV8dgcFJ5D7bXQ5ouPTMUHAgwLZTYavgBPLHTP3RECUoVwPUmKam2J2fRuRDprXMdhu1vYwWBHtgtw3JBCG6Aw7",
  "key9": "1NYAGd1FNL2bvHuQ3wARVASK82RWrJ8VdcLBd482q1r1qpEuw3Kb49cUSLEjyVQ9UWqYXvaUJ9cB9W1wpvSk4EF",
  "key10": "2wD2Etp42eMiM8soBW9kKaq1PaFpTiQ8czVvg8jz6ZLGhFRnGZpfb4oSmwaVutHguumBZchWFA6sDUuS8xHprTyu",
  "key11": "4WaSVF88xU1DGHH7L566dYP1dUdYPjA5gLpUT82MywgKJopgY6pe5qcBe3ZMJ5Uxx1VMfQrRX9M7WB9movaioQgg",
  "key12": "41ZYvQFbGkkSE5nDoqJqkdXDbUVUZgpeygMMnDz3agnurC6dL3eZ2d4oDYDqiUXShhbUwMUnMNoU45BjHHSiKtE6",
  "key13": "678VJtCAdvBND4XB7VzoGFA5MTPC2N3PqASuFgrp8m6kvqd4sayyb2omugb57fys79NZromBY3EAYghM4hwvmkR7",
  "key14": "67e5SxqWdMjeZ4fHg32Nh1TBCsNuaRZFmL3ycmE5i68q1p5tRG73okvsbapbfYnCYNZE7jJdX8uGAo4kuTjwEoND",
  "key15": "4hY3155cFtA2gLT1xcgBtuU6KwTcbaYVREj8eRwC6UsDS2vgD9uPFbhkU5HiimTzEfPFCiSwNvNg7gFbAEYeh2QP",
  "key16": "5NEEQWmhqHTU2oqJSv7niFrxQ4Q9ddtas4hd1AmU6ir7zsc2Z4266FZCjn57cCjkPMKg6d2n6nVXuot8FYtSE5DE",
  "key17": "25LfAPAdD5K2cvds93SgbEvUqvuhuuCdMrowPGp1Fi39ZrBioT48yrjuoGupHQanE6yfPhHMVewBY6C6QrJWwbw9",
  "key18": "4TxPpqHFDTW2Dr9gpTLMSW5ZwN1dFy7mZJ7Nq6rtphb2HqV4xfcKNLdzEgbKuUeJcf4hmziaeScqbzWWfgM9HM97",
  "key19": "5a4UMVwXmgEWDYXWk8QWBR9eUv24JXFhQCRSZpk7oA9WHVR1hrJXSWcwYHkJQBbiYWWwBApbnnR36EAzKwV8NapJ",
  "key20": "2NZ8BAbfZ1gMjUkq5EXPr3RvSLbgoUC7k3yFVXj9h1q4PwKEAPEgeRjNHc9vEsrTD2mPGtPtDZpiGoBBarsVoAk1",
  "key21": "5Aifd2inwH2EyKebQbtsebhB3Vk3ntmXC5RB35BdWSyvz4zHZ8KGRwQ8hRwSWLrWaNbp6uN89kd5nBnH8SRt6EBZ",
  "key22": "CcYouTbzi5B5zUvTEygSThD6A7A7PJAHr8HLn9fJZnWJLvqZEhYugTZGwWZnj8Y1m3dsKApE7TQ3SwmjrMmSHKN",
  "key23": "3vT4KMD96KwYbXRSDSY7PkH2ZcJgJ13FZeFPDULqA4K8s69WRTL1SqRdmoaMW2VTSxmReSF6GYztxSqvvG7gW7Ab",
  "key24": "2JWtPsGqEkMhTQJ6mDkakNgsZdeGBsTaYLvecPMgJCJrUtC4fZmZJdG3fNwRMC9DeEfE3ePcsPG8cbyMhoiGzYAq",
  "key25": "5mAVdEuEjCv66RNfT8PNrLYpBVjTLU9vy6iYcyr9TSLkvmyJCLGbhvBQCsMLVB5pqEYE12UZePCEjLKvNuQ6hiH2",
  "key26": "4Bucnzd8W4aoqERhEGw8jak3HENpKehTtCiWeNCqdj3Vso1vtFfW89ryj1JbAhZmVz7FfNWbUZFmEF3Uw1hHxkT4",
  "key27": "37TBQrG45QhrsDX9VBKtqvdUkEnmUpDjmp9z1vCatKsiPrmdxRtnknbrpzh8NVt45EzeSRhYduWgsWphU9EMhcCk",
  "key28": "2XVj8v4ms6BQH8qx3BjYKq2p9nMcutAhq2xpky4viKTPqmQDFkL5TftNfQP1YKkHFRxymb6DDxytyGkxgv9aAxyx",
  "key29": "5RF8CoHUWVvzonvCDP3ofA6p2snQQdcsg2Fiqqft4eruFJL1a7TMTeXajnaJeGHNoJMegsf33JUkpw72rKjnzj7n",
  "key30": "47WrtQWQ6PUzU1rTh8otUSU9BvkGFJUVj9oZPAm5MWn5K4YND1LU32EcCsULLZirqN9Q7JwU2kTZbz1jmWdFEgqQ",
  "key31": "3LVZnHBGcpgSJp9aDCQvx8B3FbBHtWydr5U1BRAwuB2rF8GE8rqkdxwP4dytGj3cGpSYRDzNQ2rEaSdvsNftnKPK",
  "key32": "3XK2vbrsWa4wv1RP4NG7QrLCqbJKvBVTPJaCobrhSoV1TR3CM7xnMrmesWeBhBVXtyq2UW1qPXbpyx5ejjfQpMhc",
  "key33": "2q7aZcRAyax9aiKq3ZBJckQRCZJt7t8Mzw5unNa42hqYfdCyzH7UD6LFrZ27A4afda8MtdTCJoj2sBsqb5LHMVdS",
  "key34": "2MJRVo4JJLBRHt3Vu9R9ohLioxaLPGKGZvZXYA7VuR6Lxjg2CrcKxFJb1KWG1uGaTvcJvUoqqD6TU1TgsmNM1ech",
  "key35": "38VekodP1emLKDozmy4gNAzGpuo8KJpyp5BRViSvE8yNvZTaT6Ng2SXkv2SpeWU81nAZ5isDkbo3LWabkTos2XRF",
  "key36": "5pFmQPHNHUbJs6QkLZR2rMoXFF8Q3Ng5Zr75tvP2AZTwuEuYE5YXHvAMSsSCTMEzrbr3MtgaLxwPnG8erTAkRV38",
  "key37": "3XWHpjQUWUmk49XzwhjVqtvCMQfsbzQzAUkzgHugbX2vzTNNm6FunB1T55YEyFhPu1nSXMrLop6eQMucpppUTjgw",
  "key38": "3JpWt3y4v9CuS7iRtQuoqZQEvuB9WSnKcJMMRcVCSHE3Vq8SG9uF7xDUiVvSd1EgmADqUifqUy3QJos31NKXCaST",
  "key39": "2B7Ma52GJ5mEQRus5YEFWGXKqz6XU9VeEam97sM2fYEqdEpruiTx7qdJ1Xy74Qb6k9PCLDq9GMgyEAqEad8jgL6d",
  "key40": "5Ss4osCvvZENFAsJdVcHGACVKoNqyEaDbQiwQLJbU4rEys3KfnqQfPoyCfBaUtGPdDHQUyLUhhidMAQ2m8XGhkkE",
  "key41": "hwzYafCi8eo8SKoLkG58ijdEmsoymaXn3ER9BjViZL7bzcfn77Z1o9XM17va1HFwyZpo9qofD4Va8iDgTigFHc7"
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
