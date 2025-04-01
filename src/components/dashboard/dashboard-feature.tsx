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
    "61M3BZMeoKch5icjQ8NZZj9Lhf4juLvtuiZyseA8Vegcxi5dYCRKxBHZTVYMBratYJNaoZzNnx5zitP8xVGK2DF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k98jwyo67vZNdzXf86iziGfnezQRmQooiENhvN8XgzXyYJ7ySPgUDahpN9MfWgfT7sjV4FSt67gTENezVMDPYaJ",
  "key1": "4dB28NyzkzS496HmYAQyY5YMd6estBEe9oKcqrVuHdPA4ixbrWxUtT7ECmCe9PxbLSsRTyQ94txAF5mvPJfaYhpj",
  "key2": "35yERipHR6BdnECtQdXeFuYNbLmvhCmMK9NTgUoyzhYxZa3tEqewH3NJmKSH8crL3jFeAzeTUJFxADaD12JVvas",
  "key3": "2RkmWckFFhjvN4nSsheTH8G3dPE9uWU2NBer6JaC5ZpctSM64tTo4tzL3UzLK8DctPWymMAmuFUDESuGfYtfnRJf",
  "key4": "5juuSJvr9dvpPxigCpTJtwdvveJs3X3qAHS525SmKpMYFgc8P9wL5U16TCWum1yACrUq8UCpVu64FWnovVMNQsnv",
  "key5": "3YSemyi7rBNq6vZzFuXQhubkpXrMm1SHVoHxHQ4NnFqEpxovgZnQXGT8rhFQaxV8pNjTCQg3Y1PVHcptCxs64mVf",
  "key6": "5YGf86BmsdMTuQdGCqsN4TEaKQwgKaugxJdonA8ayutFxbgDXptS617GcyiVApuhiWP9vAfnHsE24bDTpozQf9y4",
  "key7": "65SnJa8K3fvktt7AAra6A3Ph2XrqdxQNxdSQehrPnEs29fxnbS5fP2KqxhR5dvR6X9xKQMKMtgPWQZkNo3oDGbL8",
  "key8": "4CYMP4A69HLEuPU9w1t4SfCre2Dg9v8etvrasbxJruxMqYh9WeoAiEMZvc9MPro5tbTgyTdaaz2i4vKQTxEVGvbm",
  "key9": "RWK43FVY9s7Z6daLQjALZ1hXvRmbSoZHVLV4hGh8mV52F98hfxkHQ2LN8hi35QcTD4ncoEE6iXTwVBA1pKMvEUG",
  "key10": "5PGEaVfxuDvjjdoVfLRVyZhQ1Fis8uMq47AowMpzE3ZEyWSue2eX6wxtAGFRhbD7BaNDPmPDfW2RFTFX3zJ44MZP",
  "key11": "67XcjBZx8giarrBpWLenZuXq8DPHksAqibyB7sdmfiETPwhFgrLKzuBJGe6GXsamSYoXgBGioaJ39HB6VAa3gk5u",
  "key12": "5hCfz4nppsn1nwt6dpGer5YXkGT7JNY9c3gYUzKW4FNN5rQX5uy6CAskXHtnL4gubakUsjG3GQHCZRDZJdjnBpnU",
  "key13": "4guPEBGBQMaQuti5A2Rg5DcpQNBMWf5XCyPFpT93oc74nxjHiMAeXC1e5Y2xbBX6uiCuZmfyUGnWBagGrnFFrkhr",
  "key14": "fMwUQX5E94SxXisSoe7bZNPMg7qfFDbTpEMrqepNZY4oMiqgH43yYte8U2havcaAMB4Y84YoXGLey5gtischMQJ",
  "key15": "3neLWzKtUbsA8RYAvEduzXpWxWZSo7uyJNcnF4pb73nNhqsKgGUkQ126WqTv2mfBc5cMj1fjRyhX47wMbfj1HW2R",
  "key16": "5fSmdxF6PXp79qLURCLooJyCWSxkJd93eLUSmtWAaetmaAQ6fbnMWjrGwSm15RhodNXmLuaQYs36fRdtnuLYRAiF",
  "key17": "4zYLFH4dHSpxYA47Bhfod4WeXXtDQxjy6vTkbUn2PtcXZH7vkAGkh83JZTSzvHjs72H15avDxYpnApw41frKVTS2",
  "key18": "c7dA4tnaj3zWAnsRNr7EkQ1f3d1bVr2GxRmPYxtKLKAV1Gg5xo347ja2NcSmz8QD4D7KgNJHYTQxWXEh1YskuMd",
  "key19": "4bSjLMZ2hDvpXkEV5uv75L6gUwvf1DCsHQ27tozL2ajEK4cbR9XreKukpdLSkCeW2HZtHYJ8UzsQ3gQvraeTicn2",
  "key20": "2r4EZ85FuSNyeAMVHKhb1QGiiVSmZDVotajq2yM1oZzaXMnVGrSfKQbE5ga3kdFEiCAsRV88FMVy5jpUKT4hCFHu",
  "key21": "5BWkzg7p9v4UjroKWb9A6ShsmnUePzsRohkTgAKk6uVr5ebE7FURzGyHQL6buXomUdtRLRGBrxdT7WBC4kXSyMwd",
  "key22": "571VjC6YJKcVpnouYfvsdhpVwwxbVf1VbB4ot9oVaxTYo77BoZfnpAJ2b5PKEwhT8NY3NkjFsGamz2aJ9jSfo1e4",
  "key23": "63pn5p9xwaL8tFbz6NKkbevenLcXgn7AksJqjPPTkpSTYfLVBcQQHCQ1g3cFdNNRHQmJHuKAuu5jXuAEMPdXAUUZ",
  "key24": "5gBSAah8beLp3QRcMUwtPJBqDmnnomdqzXVvugsqC5GGXVWbTgRyBYCSxab1aMkMdJLxf1THDXkRaaGKej13JCzq",
  "key25": "2tQLpKGoyeEtjoxgJwt3ZaDqhWsNn4XnZPzThHwbdJH21h93bgwJC3PYn9bYqJp4auvpVLU7QTn81bVhS6hGUKmt",
  "key26": "gNieBFCtL8KbL9LWnmZbVRMTcRDLBKFPmmU2seNSKC5jsL67GjAhvU7C2aspCPaRzbsbJc915Qy6VywBRo83d2X"
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
