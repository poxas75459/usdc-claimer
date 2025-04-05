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
    "cX15RMVcZYMV5B45SqMu1LEU3EfohXp6CmhYswUdgp7Y77ccrMBBQDc7ZPVc46xfywgkd5g1vHg5ny2FyorwGYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31tr35BZs7Psp6GnSevwrKLypzi2FEmWFKxTFPpj8nBwwKwf9KPmwE66Qij7bhxwdEifhx9VAMGg6KA8nkDGaUEW",
  "key1": "2xE2iDk4YfDdKGM66QXBycG2z5gzcYUoUDjvRrnSHyRrdRy2tDrWdeKRB6zfUtf4myvHy1nRY1aAx4jb782f3EE5",
  "key2": "4boS3PAfLA5d4rNarT42rgCbY2sjgpbJ2WhUUKLaPNCh4PNvsSCxZCoDfH1wvNG9FCbjVidp3mkLW2NpCxDn5gP3",
  "key3": "2GwUc33y75NgENkCdEvNJqokxDL3s7mqpPHmVmJeoaYNHZpF7yP9rcbuUuss6eYMYU6ZH8C8h7kdeAuUUCo4Ze2S",
  "key4": "4NZXS4aSiMnADKMUe6tPjH5WYsPYWefSUjYbiaEc5uotVTrMzpBDHqat9x9JfyPwt61btrR8piXdkKbEYU14zuRv",
  "key5": "rWYmF76VCtNAjAVBNVrGpjYGU2J2mbgUVF3a9bFkNCeY1AvWnwYyhN2yV9t55AhPdxnQvfGHug88owxhxFegPBc",
  "key6": "53mqXf81AMfyP21y2E1ae2pZXnLLswtf2gqn34VAYwwpsmSv8o4i6kVFnGndD8581HqM2wkNntevAZmCD3A4NoJ4",
  "key7": "5H1R3qzjVAJEh5uE8Mp51itFs2Grgig6KPG3QsD66TorK72pkpe7noyjXCQ76U9e7JBkYwNVGxxANiP8ZiTatBky",
  "key8": "FAcxC4jnpAGrGd23G8dC5gCMMfcdhzvV7iBkg5ZQ1hScsyqvHeVDYEffYQmL88mJPXhxuT9E9K25zeD1WwzTEUi",
  "key9": "2ykq3ETQ2CFSDMHfdKpJorxMbkG5MqYL3jmas4rgCRCiDSvvJ3A1173VWkMup9jkuUa3MNAY7nmtfjg4T5ZWVJkS",
  "key10": "3aB3M4LD2zikP76jiPRh2ExxYUDbdXDpcjvfJgZYh48iZu3Fxj8DcWdEQJB3ZwsrFCkYhnuqAMV8rmrJWfm6wMmJ",
  "key11": "KvvK7Gfdy6VzYniFstv5dnqgCf8V8pgd4gAiPeZa5yUvT2fZ4BmpFQh8LRhL9sxXxiG22m43S6auBHuKy1nTR22",
  "key12": "2csuN35p1ivTyqJ3w7roW9tBxtUxtxDmxoQgSnfNe4U8ePWRGuGvk8FApTpBBEk8siGsaqds89AS9K5bDR52ong7",
  "key13": "2czvwcfuBdHhBpwaHQxRu9hxptwMaXSNKX7w4tYGH5bzgJu8NWD5bf7sShogY3HdD9kQjWpSRZrBfd4yX5uTawwh",
  "key14": "2gMoorRTCcH5Wo6yWqCD4MPU4X7YzRTXc7S7TpHMHK5UrS7mnWGxbspe2JR4jyTtG35dhXTuXY41konjarVuL75B",
  "key15": "M6V7zyHqmdNtt3W6tZdwjNhBN7fupc1Tr1ECuBHQmhEjuZvLVveG7SGGHjwVPKoNT2QYb3QqSK6SnJPbD3G2g1M",
  "key16": "5u1be4qsyZ9ktxQXb9dcZhj8VJ8CEzNc3c4XEc1HGXBfqE849FMMTRM8VoRmWzShRiCrRRBMhQ248duPdC1srCCN",
  "key17": "4ua7ZdXwtLzNQkthkxFzAaVfG1azQk6VWsDMWtcbCCuQhmP1m6GCSpbGA7UKR4Nn4TSeERVpmkbFLCYVg7PCS13c",
  "key18": "LH9PpCBfoMgXaHCUMkmxFfhnet3PSW575dZcZkxTL8P5P2vjZwk9xTPmB2ssuiJFgrrskUcDyCFebUpYxMEpjjc",
  "key19": "wHPq8R4DDk8bq7GkroLZv8F2FdXw3uh1SR4u9gLMihnekhFzLggf1xAKVtxTMsmedUvD51BZv25dgfF8yw5irPR",
  "key20": "4sA38UYaBfbGXMce3RyuNmecCmYLy4QUKti6dZj5mUjPAC7C3HSXmRD6yfnEK6C4RvmYTW8ZeaYXL78EJXyBvZBt",
  "key21": "5a5pErWYc5W3kWum7eb38xjdwZjVCA5DyFgi9WCrJkGKNGKpRK1ztTMsrGx4qU1X2rgfZ27Jrq21C27gzEcTFQmo",
  "key22": "2crWpjBPpwcF3ZLwbxuAXuC4Z8k3JmdVRFBzLSVmLAtNTEFEvX4u9bDq6cB3PUNxUqNq3w5vSv87Qe5qVcvmyTQE",
  "key23": "3SB5MjvdyNPSAuov8PJpRSb5W49Ku28jz7sBaEMh4HNRbUYt7LqHDJHov3HP7cyD4zmt19aTgw9TiKPunbxUF6EV",
  "key24": "3dPPnGT72sazSE9rPFCQ6mDvdEQEieg6Zk8cs843cvgQCGmdKTe5zR2itXEwofCobBn5XUKDG1Z87RcSfHptdnwK",
  "key25": "397dwryvbsswmZM45vbsX9kHgcUwDw7vvatY83oQcpbE1dpHPihK5juw67d7RPHiydbbj1yoYGx11WuPjztq8W3N",
  "key26": "3jQ96MsvRuBbCkzN2yMu4H2G312eQ1fD5AiiC8PeX4CCQSzbZh5BnzahsYy8nbc8SWJzXGbfRsujHyRsBi3ngxn6",
  "key27": "hXziFLbgkkdMKqig9su5Ng733A2mFLtracG7XBubo8koWFiSUETnU53PG363E8PM4Jn7jayLPELH3CRPVgU3yYW",
  "key28": "kJ4KqpzzuGm7YQLSY1HNnp3so19JmD2Q7THZ6TF6Bp46nqEsbCpjXrFxeUXPJ1t2hXP6U8CR6vKbj6JNPpiw4Yx",
  "key29": "31HBE91TeidsLrkoMokKJK36M2CH9komYjVb56vD5a9qKjdoZBYHp1hcZR2GvtgG821YbxPixP1GxypxBkGNhh6e",
  "key30": "48X3zwqp9hQHuMaCPFqbGViRWDhG6f61ZnWaB3Mc7crQHTywjdqbZ2RDwAuZCjm7u6MpSmLFYzkvrdiyF1RKh9xP",
  "key31": "tALxBi9BRw8bJDwqcC2boakNhGRdFik1Yvmzr7MDDGsxQsCgaeQ6xk9s4Gkgbys9djds6gwAYMP6TLTuzkiXejG"
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
