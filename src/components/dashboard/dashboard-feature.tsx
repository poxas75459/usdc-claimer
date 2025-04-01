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
    "4rZ7yP8WpbNVz1B2ntEr3hNwso4fjhqfBrStp795kKpA14ge2xcf8pQaxLg3V6rnjycGCSUmEseJ8Yc7k1aiLws5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41cyNFdex4smQueFkKvpNmXAAkrK7SXcYLBQCNb5tvN9N6C3yKmDFjmqVkfX9MLLAbs8hUKXK56bVoueTSAtS7fX",
  "key1": "581Pxx182axXrZaoAUVoB7amXuDPzEMqrgnGp8HknhJr2VJHzVMFCnBCJdNeVfiy5nMfTaGs8R2EbQYu49DD6xTb",
  "key2": "5jeiuKeDwG4vPjSrpRQoztZAtSDaJDmT4sDM1wwcF2dFUGxfL5K2TCJeHVEYxrt4HpXMbYK8hPqQLdoPsc2xKzeK",
  "key3": "5Hu2SKVk2iYGAHvfH6QCsSsCTvhMEJdrULLhKrucvxV9eqBjx3mPRrCbvm4QLMY7LShTbGXbC7oYKwmqvHfjNUtN",
  "key4": "3BWfjiw6EzrE3VfRZSgs4oiWRLSn6u9nE9RxiY6SRig2roDs9wbPhCX5kCNpEPAtXc3qrxpFcrWxSZovwWku9eDK",
  "key5": "2WrGF8bE7nbJCD27uLPZJ1MfVQtZx2RnJqeA4DCdo1k5ur8aMDupz8Boe1K2XQj2SuDiiGGgJvXzZXmcLAzbUE3y",
  "key6": "2MqphrDnxZXDV9z4xErbgerwKmFYyRwXSd9cZrJC3XP6gc8EPmpzcNa2Z82A8zoWjENPfNGJ4ttK44e1cRpVZvzD",
  "key7": "4dV2X3YLzfUoAyPWx6uYawwWBAXugggGDSSf7TargUrb2B8fb6wjMRHHqBf8Dt5qgENUchDvNDd9TDCa5hSQajiJ",
  "key8": "4mL5JnpBP4ePpdyCN1GHirHUdZG4t6EnZcFYc8LhixUx9SMEsZFDPH7eXy1aCmxtH2QWJ6fPuw4hB59DPyWWhaSK",
  "key9": "5nCYeaauAehMfvBt7XtuKGYEWrz26bZXanLRJnuM56Yr2LMjpN2sCdnQLvd36BMtsGBAzBKLmaKZMkSbhRLyXvsX",
  "key10": "54V7nju5gBxKXtn3ozdiNkVy4Rb5xWcSdSUFmyy93xLp1MfAnWJgReRayXt2uhydkgF4D6oWEUCXghZH8p5cX8rn",
  "key11": "5R8gi7gYiDuRDaHS1XFQHSxY9VVeJtsqjGQGKf7PvMse6Hn1khU9hLzyUL8zQRAE8ztpHAFaXXSwwFUJ9ns6Lci",
  "key12": "4qci2LVtfQqWunfRswEAzFiADPXqm9MAXN53K5z6rVBMABYHTszvePWwazwvprmFoY3bnUNMtW731AKPwpByeAGA",
  "key13": "3sDTYNM9Tbm2xSgJEdHGkyiBdm8sZCXHHdiQZC4nSioQz7pofUbXvg5BbCJiaJNEkAah8Bk4tzmdTQGTLZoi3LEk",
  "key14": "2NYiPhScvd2FTfPSwnhNGR4GaUXRee7MHBweneRbgDUV3EJCkENsuUM2ekLrFBtBbfLoP3xp1BwjQhEM6iJ4yHWN",
  "key15": "5LDP2PhzEJurtoy1yc5e3f7UCRevRXLtFDaGYSfqmdZTqFQms7magPxt3n5wukRBa5qt4HrN3DBwH7w46JymeKP3",
  "key16": "5SQkBXDo9MRgx4gnSaKz4Kd7tZHxL68xynxkijNfhWjDinigTegSgXhE9teiDLZ4t3jtxLaU7fVzZk9z2MDqFGtH",
  "key17": "Lhx95ZjZrskFRJzWV4U8tUhwpiaLrffgmrwBAuLga1Tx7tzfUHyRvmiR8Cfi1DiukjZHPfXSY8Q42R6eGZqijPB",
  "key18": "rYPQxRDeGZD3YXpWyDnUuC2cJChDDcUJ65uiJeNwMb9E718ppVLFmzf7gL84nbyvK3YSC6GGW47ekzjTkNYnWVH",
  "key19": "2Fkba4iKFpEM1tpayQMw3fQLPg5jZes9z6LhHgEk9az8xQPdTs3iNWN17bn2TEDRD1kDwNnqw17fAsQwGmCR8Ah8",
  "key20": "2ya7sHwWNJF2rBBXT7JnPp49UyEXJnk3hwRuQgQQTKPSPrfQFq5v5Ao1xThCfBtiaCrV6c5V35bbuwdTm71YCK2M",
  "key21": "p4WhGSq9MXAgNNMxhcmLZsNjytHaQv8ZZQjfTEJSUa2MxJ1nPMjSKKACZ2eiWX8ddWfeJufw2q5fqPbbnHgBRNV",
  "key22": "N9LH6tNAzy3MHw65KxK3K93X4nmJSnamm5F53AqcearbrGGYG5BtWfDSxmydVvDuzfPRHMpbiSEGfEWjJ6iy5YD",
  "key23": "NA8L2eGSXh3fxCeAnS5VATVfiZa2XxdTKjpFdiYSWJNFhH34UsskCZf9Kj5v58puC8n7WS3AxyMK5kHdcy1vvir",
  "key24": "4RPndZAHxq2G4PWn3kNo2q4deQuvRLeqfaix5sinxAvS27TzyTm29bUNkV24cdaAKXkD3TL8mreNiYrejJzMZqpq",
  "key25": "3PJZa61koJVgmCA7fUDWQijJupdJNK6A77vMjEubHdARzGDrJv4tMSvun563j48tEjm3xaY9stUjvuGVc3hYusCz",
  "key26": "RBwLTWTd3NX3jVvAZ2mbxkmYqjrZdm2nA2BQpLR79WXLNDJNh9crom6X8H47hhBdLTYKCuox3NJcpXY2Xmucsj7",
  "key27": "5edAcoSs1jUC3MzD1Ngk6T5b4EZxgRvbaySxHj4cfQkkVL2NsmyVMmpEGXbFCebLM4JAusuip2jH8gqftVoctGgM",
  "key28": "5EpNhKmcscgXMB9EmUeeTDuocANAvyh844ZsyPrMEWfw4UAjpsmKghpcKJ4PnFVMka6LKbW9BCpcUgr9yGgr5Wz6",
  "key29": "HwwqgHfddeptnpNFyTcy23GyLDMaWnFamrzkLfANGwfzvdgdXcwAskX2FesAbz7DZ9sLbQSHcMbPrsesE7fEuUK",
  "key30": "4SanKAkxX9higi8KNUmqZEb2crCMyHAywwjfunAf3ajhad2aP5WbJeYCZKiR7NUAh1Sy4HEKxNL7HfbSWokvnr4F",
  "key31": "5igki2cF2NVsGwJ2PkUQjRV7S719oknD7Gxyt3XWeeQc7C7WYfBvDibf1AS9BgjnUBCHEc7pJFWoyTERM3yuq2f3",
  "key32": "5oK6iEK7hnao4KJAP9uaPU5iou1BYjKZnAf2rbvc7r6pT4QPTWtRujAhVPSZnH5RieX7h8eq9Hv2KE9R65cQz3Sa",
  "key33": "3NFJrDopTtC1aQPpL87JtiPcHKHNzHUJCoQ74W7bsGvPyX43rnx3fCiCWoWtYbvpNgrzqoKk6rRFZ1SZPoiDGjii",
  "key34": "HtxAsvcT1MiZJDeYysWnjUWb3w98Efs7ZCTMGthawMsAhsveVm8t2aUhLTpzJVzZATy9KNaTAx1GJiKjsLiLT7y",
  "key35": "4Y4cRgihq4mfeDDJ9x7YAQYrDxEQKphnnZJUnoDoQNBTq7bK5bUBWrh4nHnvj3zv5d1YkNmddarQcnZK4r2t2SVV"
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
