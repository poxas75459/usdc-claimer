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
    "3Kv9sVg8USSAGAs2mx11ZA2CH1LzkhMBmetjiAYHhrV2RtEv97GD5wnYuD9FizEaF9w29XbgxA1H2to5juXr8pW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PLtjzzf5jYPwLFZmuBZKufR1TetDuP89xVwvn4y5uBEYvKsEpuQNKsXsgDDVjBXaap3yyfgQGyrvknhkjoTFFJA",
  "key1": "4iLTsyPnKMMa4YpiReh7T5ocC8aMNY3U1BP5ZEieFN2RuhhfPPw8oPaaenP4id3SZtBMrpCjreRUPMiJEtZjRRg2",
  "key2": "4CW2FZYaUgBYJwjYrW4A838mRJHQyKbNS5K3zQUSDfPYCMfLRxcEKMFVSfDsJNfnESvP9Bz2oTSsKGbMJwgxTcSQ",
  "key3": "5C3AWStaVRCBf6yQke7htjCQ6CxFL8CCy1t8HzNf8JLfk6G6ZGRW6jMbnXWwjEZed6vEicmjZCjv5uSGJHPYvqaP",
  "key4": "2wYQQ25j6do6NhCJX5hTYg9znXbzsm1RNKPoMjNaDeBJ5W29VBa7ubjRbPdcKg9DBQq7LPENknPRVdP9Y119bQC",
  "key5": "2sFLQHMx7AK8Q2M9uRzRsGvqPhKyYzbHa5sdXNUAhpfexFWCe22qTq3fFUafpLusdyfYDEGKGLMbBrPVXHt3oo26",
  "key6": "4jCtv5DH63nmQqwfzENuc2YG584srgwVacNzjqjqkkuW171PtNSokfY5bv6tAmBDYCR65FbMvUEzBqVpsaAqRfEt",
  "key7": "4k9AToRRZPpf2JBZV28w5De3qsG1QCMRBs9afiAk6wWjqy6g3BodzXgcMLrVFs45QwkmgVjZUBPwKdSsFkTYqGpU",
  "key8": "5v7vLmefaYfoU4tS6HSHdQnbLSc6UL4BxD9TkfCFWCsnfuRtezmNhf3XkpH2zQN5p7nBNeFby9Hjw1Aeq99t35in",
  "key9": "3AGeeKVjqSPym7kih82uwNW3264A3iPuQeG9cqq2LNn2hkmyxGosa1ArrbDhr8MKd6nTEoWgG4VZwVDoiDcvqVpZ",
  "key10": "qFKMcXReVZD6t3GXKYNEoJAzpspJ98Bc99DEv6PHc37ainrvuNxLkMENNQ4so1mtJz42UpmG5WfF6ux8JVwkSNv",
  "key11": "5hCdRUKNY17tv1abNSvkxwBYaRKRoeZCsavkGh9T7Z3AvwW99oW9Vk7RLqaXdT8c4k8ACVHaEDXComu5JD9fXmZa",
  "key12": "5UomYMm583WkirseDRxMrFeMZowHXqcJTDCswzNYXSLtWPeBSaovtVPGSpxgd1KKpdDzG8DBnLc7yeyK1qotRx41",
  "key13": "34WffLqbV87u47ow3yD74QwB4dRGTd9u4X5oiLVtDsV2yt6MhYWkh4XX1sv4HNhvbNqqGohZdLg3NQzFaTaFVZcs",
  "key14": "2u7Shb1HEaZnedHpDBMLSoMaJkyuWnL9g8x2Gf8teb2eEQyrnACsA5PscuKyz4E6L5vyLkRDqQVY4akdqw327nYd",
  "key15": "315tc3PwzEZXiW6wU2dfPRUw8f7n8Urqa2pahPNs1jzSaxiEzQ5523Yw6sVAqZSMoksSiWc11mr16B3GfLbUPTT",
  "key16": "39SaC2Da3FN6u8MZL58N97csJcRoXMMHFGx2BXR7NyG4tufkTNNVbnWbA6ykgH8nmVKCCfwq9Qc8N8HEetF7tsct",
  "key17": "3nMLv22ByGvbhgSJ3cjndDNeqGdMPLnygBZ9poUPXgoMmx5wWWZyiu5xARFHQZnZ1p2gQ5H6LX33xkrBnB5Q65zq",
  "key18": "3vd9qc8gmAnzFrAZqh6nQRzwLugRnMyXNfygc8ySypxG31eRfKTa2LkRdJC2GsaodtL83fPKuycspxUpizYYQ3gP",
  "key19": "RsMQY7vfaxhoUo6zaXvPyrrMHhArvRqND3RpSrKdQ3ya4HE2YBh9jXnDHifa2sYMwRRQrUD3SZ8GVSoVYhd4hMH",
  "key20": "2FzLQfNTui5QevccP3PMHUhKRtjSLA8cs25rDa3MsnpTtsYwciRuVpxJiQQJYJKJd9riP5FLSoR7wUWMv5sfyw2d",
  "key21": "4LsAsF1EauEYAB7Bet5e18t826FUP62vukfvo6rg3emx7Ta6cKpyagEPC31akYvY1M6Z8PadVU7Wb1mVKbGRHEA5",
  "key22": "7t96QigrSDxV8i6xc1Aa6DCGTbmfEYXJwy26MQ5DxL2LXstkKgtLQy2Zs9qAoKGjzaBDsqD7yh4uVssPdqw2NjC",
  "key23": "k4qFAWf8z7nKMdxNbhfBBDdsHyGoM9fxbwWEctKk1afA5kpmojTm9QMMadRUd2L2vKpxB6r3vDtss8QR2gcFS2H",
  "key24": "5vybHEmyzhs2kMPsKdeg9aF31yrVCwPDA6cRR7g3FDK2hoeHPNMjnoC89Cmq1vMCstWmqu4sKFDcAQnaCSXkxzDe",
  "key25": "5wDKLwj6F3uqBu9FVgCkJcHBVxdkXDbsfEWzhQLNq7jtYKYGMyHnbqemP8SezdmD7FSM6D83VHgn7HTN7ojawMm9",
  "key26": "5qTyGfvmXhG6fDf9xvMwuFfELpZKv54EHx6yUP7hM2xFV4t6ro3Lj75ikZMY7isUbUMX4gbQd64Kt3uXwa9EufzA",
  "key27": "5D95G1AWm4Sie3eFanFuowQKKyDo947xDBDXddig57a36vBg1t1DSAMnBaZQCHH6EvgFxz6vStTsKP5VUQWbKzXN",
  "key28": "5hCNE3itsJCGoAVqbALpyR2QVF5hBvqkb1wnjmGmqCypgmWaTLBHDG5oy6QoKh9NDR5qMA12CEHHHLbiHUwoLdpL",
  "key29": "unZXA2PSwuPX7UW2AdrQDQpYuyyMRFGq4TexxRgshFAcBqUZjzzntmG8ocqJy1Su7B8bBfhQR1mq3hukPQP4LyD",
  "key30": "4zaua2k27pjphCHcCBr4kHnoKqMjkUS9NKmxFVGAULbrCxFsMuvKTBm7WEFDyJQXR9q4M678J4rSXFZfjWmKSenH",
  "key31": "4CREcDx9Wwf1RCsfFpWwR7fjj4DHDfo7BdGHSZqATrqbkgyjT7LvPJE8knCWy2vcJFihZz1iHD8oMib9PRVDmVDa",
  "key32": "4PRSWWQubmTjC7GseFoTvttnTzLReSJA4ceXa2Fx3JYnRL2iGy3rngM4GZ6T9tNTiuPEWXWKMPXe1RxzsBynGB1s",
  "key33": "5BZJoquhPGStnQz9e4TecCL1bbcxLG11zf7MeMPDy5PKQqCEwbEvk8V7x4ciLMnXL3wrWSBESTfBJFKzpgPxGcSv",
  "key34": "MH4dtT4qYtEFXFAPpfGvMS4YjsGTeR52kdNFnTdNn7tagEXDb1kTYpbsoNHKbSudYDqhA1gFzuBixgEUoF5stKY",
  "key35": "4JMbjFtyBERVCtxMmQPGtkQj8RctEQkbvj8cEnwbuX5EAdjJ142Lt1AWRfNSe7oHVYf6yavN82VMRgKKx13p8QBT",
  "key36": "5MfM5fpvFngD5Zhjq8fxjs4AhjQYkTMHNFvbLjtqWQ1WZbEU4gwG9a5sWdoyKAhABZAVkpz8Hj31GBvHWgtxCb9D",
  "key37": "25dt5rJb2QVA18an9rDtJciBHtjjYR7W8BHhsMqQzjQSLc9bLsJa7QquXnEmRvQmnQg3S1KeD2HFERHqb4CFZamk",
  "key38": "4Taocm4gXTUD1izBK9aqHgPnZuJweAKfCfPAmNgcDKaUUeL4nC4HLShZGChsNrTXn9nSVWEyzebuTHmyCecLRFNg",
  "key39": "45stGRjDTmXzau7mhVnhVzCAq8sXJa6rf5RPuNtvp3zxEP4jnLQ5S3tunfhuXTjk7i7WKuYnXPCBKMeP3gSW45xq",
  "key40": "4VQNz2RmVaSwLRQCj1PvGi4w3XitTMbLXufp5eocwqoTvUiFV6Rteg9xjmWRuWHwXRrnt77opN8oMf6k6K25Hgrg",
  "key41": "3irHc1ERY6ryfnDgHuHYndtknj1hHaiRZ3ErETF2FrvjF5zWQd6XwgWjW9WAJz4pF7hiHQouvndbqbJrqjxAVqws"
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
