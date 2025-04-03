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
    "2avERw4p56CWn7tCBte1gr4S736XZDEkLDYSSJW1GqcjBqyDA3XEESreNegnz7nMBdXip2i8TfcdNGD6BeyjSfXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KeEfKA3JZ1fPTQW4TV5BAqfqKDJaTen3JgjZvpSvSS4jmrzbYwiqu9Sa1fxhEvCUBj7RM7UrYFQxCjw9wgBkVHW",
  "key1": "3WehzN4Lwu7JpFKovbx5XB1GigZhHhfZE1xaBkNy9jZXVXwjXwSM4xtPkqcCWWbActFBAiCJDYn3icaYYFBjQuhZ",
  "key2": "e2PJoudaeatfVYP9VmHW2uPWtxJ32p1AP17hULc2MWb5Ufu9zokDDP7wPu1nxQMMBSJMnh7LgmYxX4kPcNbXVuB",
  "key3": "Fj9KtQb35aNz7GwEtL4jgt2rW2vq2rrqqqXBkr7AwvhAUy7bvgTb6j9PhiAZV3Z7qmCmsiCWnjsPJrd4sYMNrd1",
  "key4": "4dAWeom4KA7FjQrAmLJyRjg2Qy912nkP6724CEzp4enGpXgYYJHJDkPxUSFHW24EiwZqfVrUsQKzH34B6VsCRLym",
  "key5": "4g2H4jASNKM4z6Nmwd5wfNPQbKcduNXBad6kSuxA9ux5uSyyhC7XY8vGrJa8KKrpPDxc121HM4JNLj6QQfeBGyUv",
  "key6": "knA9RLYvVeLLrzrq6tzM2GEcuaTJL78gGhCvzz5Bo5UNsY5Jdo52kyao4y4wkaZqCgmPoYCRKT7RKkVYfXmJuWu",
  "key7": "3iZAfJ43gkGGN4o2Maxu7JLCXb37S5gNtgNExH27eE4T4juFbSWujRTkZA8GoJQnfh35wvAT4hehXLzMhDStFMFx",
  "key8": "4cDvdFYe9dyzoeDdV6TwjjscRgT5HYTCnfLHjjj6kBs7ThZz5HPz7NwJceJGFHnrMChrGpwF9KddboDDtEyngrWE",
  "key9": "5BqSQWDyiiN7GhbfshWZn59DuMSf2itaF63sCAVcRjshMREf55S7TWWQKYsiiRFASCuKKqp6uGo2KJhD94SQWWMX",
  "key10": "61C4NiAvrBx9wbZ46VeTSy222UHNwCRoxsWwBBbDMZNTLZpSBxMz3JvPxcBA4kkocgE1qxBR2Yn4d9G8JQLgHLqX",
  "key11": "3hSuUo74sF6pLnpize5UaR5khjDQ25fjzsaEsrSt43kja8EDKRPWnCRsLyCzFF6EhiLnEsiK4KLaBkKf1tun3kh8",
  "key12": "3Guw75v3j5JjZ3r4XsKsfgBr6qEd6QzyYKnnVGpJqrVwdjKJHR8vhxkDjHCrN2E5FPyic6TnhvYM2yrwkTYBijLr",
  "key13": "2LbDyoCmLJ8CX2Xs4UM8DBXeUb4krKdxi8udooFy8gTZsUUqnYj4GHuCHW6u9MTXJGkSbvxGv5b3bMACxYmzCqr9",
  "key14": "49HSQQZtjMgmwLC5r6VgBWVKhZwUtVFdgDgkryyzERNeETgmx4WVUbfekfdRdcfiY8oMdYQM6EGMkzsn4FGy1f4b",
  "key15": "4kRiDrP3eQf2nyVVWnNNGeJcYiKkP2gLAqJYu4EAvwjUH2hv5RXTsFrr3etzEyktTVnxLXpGCmPm1srRhWwfcRvf",
  "key16": "CrP1Eyu8z3ywK2w1ozuiuWvCkYvYrFsrUyTxWZhPYhJEL5cxPrRzTZRxyx6UGyx3jWS8y5DWZzr9v9Lk2738Mcs",
  "key17": "3ahavvgmhXP5VyDJaftorgDJuwdwtAnEdvDxgJoV5qi5KQSAfBd7uSnkzeXSmC2bsffRQe8byK7GySMz75pZASZK",
  "key18": "3DFXRb3tpLQKfkMRikzynfPGnMdRGLZYqjfiQZEz8hTG7ARxBbyC7xF58x2YqRNyRV9bpvVf1t18PojkPdR2EBKd",
  "key19": "4nfEZAQKa6NX6pcZxeNtmaDij56mv3qjt9MQwQEtZo42asSKy8GWGQ9DUhgWcEpKjakf2CswYajqR5aoT5NDc8Dy",
  "key20": "23YTf5LYsbr3FkHweeQbeofDjVX3N9HwK6X1w4KppUasHhL3PnXc98pK7pVRi3v1Fjm9E9KgEyDJSVG9Sbv4HmWe",
  "key21": "2hKUB8FBNVGrS91u3ztj37Lxyd6q7A92zNPAUQgfkb9wc9E1LWKcYvNJfMLdWK3cFBnkEkT6vmW93eisUSCN39QB",
  "key22": "2cqYYJc3fzFbDCX5kk9U6j9BCUoe2QstmHg6ZfeJJ1F45PKfU9SrRoP3TVoYELbf9Lr29ruw6bkjQ3aSnj8cpstV",
  "key23": "5YG7qC8kzzNyGuK2eq8FwvTpPH55BqArcZCBVyHFBb2uVrH67WjH1qmGV2Ro7i2gZuiP9umWhzTnCbMxxr77quJc",
  "key24": "3aFja5GNGaXuvzZ5BrP7htRGTgM8ZT39t1TKrvqrVYw8pVUEZXX9CQHpzGrUqgf3n4DeB3JW2WohYSeJLYpb3YEg",
  "key25": "SL324hiJQQvJQrv1sw5Zzg86VjktdXVqRtMZqpACFG4e2RKMWfYwKsfQ3JWWFJU1RGE9ZodbQvgqrUvW9sB4gju",
  "key26": "5UC4GVMWAgPCGGpYjS4VAnuc2D5qq37UzcfdQfnviuvxg3pNSED1LrBTwdV4HxgR247rKeRk49pnF5eFnjnFt4M9",
  "key27": "4rcxcdd9JnCpi2wgeXCMoHzCeq83f9MwZKP7qAk8oP88ESvL6b4qwaDzB3YkRDc3Rs5w771soSAZADB9JSfDvLMM",
  "key28": "1dJac9v7GW7qyVckqnWbymK34qg2J3aEaEoXtp7fAmVB5JjNwfE4CkdZG7xpNZvcZM6nZkF3iXxxPHfT6VJxdtB",
  "key29": "2jRFWJsrijFdMQFVyPDNaVj5EutpdVM2XkxDVXzsUvAZUeF1Suk6Dv4irwGG79MTnQCpTr3vFUZKvexUMNzYQCPp"
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
