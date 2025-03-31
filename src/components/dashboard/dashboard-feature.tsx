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
    "48vU6a4JgFxegsdnk49DyCjUrVP1xCCF5AVUGSNkme7vQN9ZQrPsFKAyTTR4efPu36htKUX8ZxxJrok4mH8R4dTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Py8yfvfwT7pR2E98VnrHCYYovZQzYjHGijiQuQc9xKyhQiuLuRiuPYUUwwt2MHsFqBgSYFDfaU5sM17pm5N4ZZK",
  "key1": "49tP7Ge77MFDgchCwgQLH5rghAu8XX54A7YZqWAd9qD42kAr88wXsGtuXbzA4FBrcC4Vsb2QafMLkPgKrLSVCJs2",
  "key2": "54DLEN1jJDZYZVs9jQQZeMF21TirJ7UVbrRZuqjKUUWBu2gNrtkob14gTs7aJYTwRzyDyoMxLhuSf1T9Ze2nt6WF",
  "key3": "cbykDg7SsFiXtTnpXyKJdsvmeRz7o31Gk5getmuCpxXUTDHbwSAt4TmopsUaheh1ELKTKvq93Rj47L5ykpXgaSr",
  "key4": "3mL84vKwioreNqrnb1W6wUtiDVTSiHFyRmgB7Jkj5Z9R2n37QduvsbcS1nKbBs52BSNPqDGeWN5YWti58NUWF4Q9",
  "key5": "4w1H9aem3RncquCzDjhT9bhHnZSjHUtfT45P5gRtizWjRFsm3eP1nJ3NroqJHbivDX9fW3WPjKcrTwnL6NpUwWqa",
  "key6": "YBHSsZhAP6HUFfE1MQdpCA6qKj8gFqWrDfrYNJboARQqg5eDeg1mxExnktMdff4ZSvZM9ghU1pFvNVWz8cAvjVK",
  "key7": "4zqRRDDanYEoacTWcgPgNbShm9KnHm4rXg3bH4pkiU78rVQ6nVCquS52JJMZne7Drua3nERrSVMmJ4XwPRAbo9bo",
  "key8": "2KqDW3RCDiPBKXQZemcbGZrK67htVFJnVLGytefCmwJF2rARcmFfiYv5mwci9gNALH2nkwhCELnJe9EmNAb8ah4V",
  "key9": "5mSJQS1UNt4tJDBjuLpPqZkbiXKX41WsoqupEinMKHuLksHzcssyX25Yg3uVEMYMJg1Za5KkDcRUCR4htaRy36jk",
  "key10": "8xyUpqp3vyir2sjvcSSdxkXtUXHjcBxWho3Ve2Cvptf43TKJc5BkYi68izQwKGGtcz9gYRPeHCisq8KA7rPRkeH",
  "key11": "4xF4V7Wj7KanDThkrgXDME8j5ddBJCBbhYfy1QTHKCDU1k2ttDL2TnbEboG7G2L15DroJg3s94ZxT9yjrqxDSW8v",
  "key12": "4TXcbuFT9QhzStDbQcayq6VLHpQf57ZMjt8LH5pN9dZCnEyRG9kLfndCpy472v68qfVr63sEb5NAcojvkpBEZ2CR",
  "key13": "3DgJiqVAxCrtv8kH3wCaHWDy6jXhohAkaSM2SZ5vpqqbb9bnfz16RUfQvbQfB9avG6mtL1pRG3RFNoMGdrs6uvLb",
  "key14": "QuD9qczqXk7UMcWZ1XKBAgWPKrTcKBHhJsgUAYKe9gG8QNyecPzz3nBEcEW6hp3PAH5AdWWXemeipfjmBVGDq5K",
  "key15": "4kQEdCU8UDWuqir6nQ26jBiodBkqHDWa9SEVzvhvv7MyxHpFvkXePr65j3bFALUMY4DxTmoJJ1o57WHTyqoqwLfv",
  "key16": "635RuC7RRCVaUU4eKPgnDXyH4WTU5a1QteiqDgE7Z9Lqh3KZC3S8K3Ca2CaJMBmCjHK3NdiZst2nCJioYicvM63C",
  "key17": "3KrGCvrE59K8r17Qz8XqvrTFGvWA7uFviauYj8qmNd1eZtCCNNbTkyBwxVdqB9Y8s6pB25ApnWv5HP68aKeC4zWB",
  "key18": "VGFrJqwNggNBciWJ8YJe9Vjb9H72KwY8ZXHHsM9pCTj2eaigemU9qUS9k6tXU9sPANf1eKG4je5spF6DRuCsAwM",
  "key19": "5hUZd2fuaz4cydhUMTxkYarQLCFXZMtLin4kaGS81EZ3ZCqrAg22bwTU9XdZTzo17revkM9YkEjyZSUsVCmsiEoD",
  "key20": "5qGf3M6Z47XvJAQZgD6aVi1mYJ5Ro89zK49ne71T1irkrkyXJ1qi9SmjT7vrNmgFtvxRgkReaq9hLCvcdgygdN7b",
  "key21": "5bunc4MpUaarj7kyA7xcDoEDk9zwA7MY7ybzJLJk7s8nEsTTMXuVJyKPuCqWrKyFJE2Z7fuqNQ8kyrANjHjvcx2",
  "key22": "4nvRUva9nzM9LPnuqpA29iYNHcfjTjfd5t5GiPtxUxeDC4fyocqeje1ktpSn6LnZgq8d5znqSvq57hW6pxy4ZvEf",
  "key23": "3vZDdo91TQV4qfuNhLsarQQA1zukh76K1s81y44MyoRRh3zfCEr8R5gatdaTsb7FZTwu6gZuwPGZyi6bXrjc41y7",
  "key24": "4gS9mtmht7CKTaGMWA4vzcdtxwNaoxEoPM1BSnbvRfndZTXrRx8Noj9GdXPXeEih1DvjyCTNjdPtUsD4kG6RL4hT",
  "key25": "2XuVtZWmxihw15XrJsabUgGh9YBkt11XLFrhMCErcq4nftxenr2CgrBD2Xa9byoWmNH2iAg1AsCzyH6gEhS6zGq7",
  "key26": "9Sfuf1nQm2SfF3LFzT2Hfb2Bp3QjfP9P2jzU6d5Nf2CTXY9NweyVDnCFiWiJ91WQn6kDXoWVxfaNWec3GQpYNtN",
  "key27": "24TMyYUahEnmXvFVYmiQ7NNY5rVHh14mqxsSXEuRNEknb6MRdbiJukUfKZYkiutU1hrq5ZxnjMwu92mExfxPcDgS",
  "key28": "49me5NNsLJNYcCnLiW7XUTy254vqHxNQ2ShuEAF9HNGeybhUNSkLU4PBsakN2uAV6Hb7DgDNckACd9abmNoCzHA2",
  "key29": "46acBUvAyqvFFjKugDquKyt9cxE5rCnvJ1dzFjz3RvZizFSkCpuSUVMR83s4RihjTsW3HsoywuKMsJsXoppVYXJf",
  "key30": "3primUGoPKfR9fh61k3iCwtRCq7k6GaDBi3Xmsf6Fbyxq7t3FFtQxqpybVEbgdNXQNbJZahhkxyceywWFyEesLUh",
  "key31": "4amGMcm8oXGe2TNUAn7CFZ2k39bAmnqxGNYF6xydAHQiSy5QFm6rzumahPV56YJLm73YfvZiMx3caUJQN5SXHtWJ",
  "key32": "66db6smTdGTBLrc23um8iRL34FDvxNFVLDRrnoBKgdKev86Kbph5m9KV5TH74imn3wzrMHDyvKA3uGNi4d3R3jpL",
  "key33": "2UbtvVF4LkaCzLHpny8P8vPDHuUVRP7nKLSCWBooGpzBPUEQuwXCZqHagwMubKhxeejtRCMSC245QiEEYJJbXFSD",
  "key34": "y2pvjBeNPcM2wQ8xTaFkQZTSu8JuUJUonKb6GnyKZqTD5zDd4smfhNDo1r1m1STx3EFMC6FqNk8ESGePwJQVpaT",
  "key35": "5vG5HChhvQtBVag37Z5abkP7AfPcaiw9DEB7eMbksetTEpgi1wrv1oT3vMKqoowcwseKXKHT82mHXFyvGTRypvrw",
  "key36": "gBdB3h8QrquHznZ4893rHaHLHYH6PD28dbQajcUovecJSctXoohvmeRrsxjXq73hsYaRdYKJXfSsb78aBSSUykn",
  "key37": "4g7JTs2dyDK1q5gECeopcUPEiFvd1YyBEUXg1WwEj6qDaYdT7WJZuhYFkjSw93WfKdyicQvUNiyAWy1RsFF1G2aT",
  "key38": "td5GMhq484XoCbDUNf9LQfF9pdh57Fd2qBvAK1HgtPWP64888pj7WgfNk5F5UyrYWHh232M8zjYLQ3Cpox2Xjwk",
  "key39": "2nvLKAD2xvJfzFA9RVxKxwZKzDvxYXpEeEiDUydi2NmMszZc6bzP2eNFu8JmVMkHkQN8VjTrWR2BnaPYQCM3Ypme",
  "key40": "yLybTDcZemnibUee9aqw3nyAFx8RthWzs2NgpdDksdtWHNGpop2gJ56Nmf9CpvxUw4e31BmxdragWCtRNHcSQrj",
  "key41": "4kidVmDqeN3QBKKGMFdPkAy7CkQ9g2vJk4FZB3JyiRkg4wvxt6AnECP3tbYPARvGEj8FExVxjFApUhp8sihErypw",
  "key42": "3b9BaceS9QaufiT3rJqVEQjZjrQghqqh3GH7QoBs423Rs4NCSPbrYojyM1gnSkbsTSdyc74QLGFfdKMj1Bs4465W",
  "key43": "2Wmm193LBVbciqqfhUTNSLLNtsab9CG5G6HWeA3mrn1jJd24WoJLkGaaU5nUHyz5er8fKjfjQLRk9i9n8qpJxy8M",
  "key44": "4xiBxXWvDNrpn2cRwaxkSYMcmfB8zcKYUBzy1VemXWQfFkJrY71rH1v8LxNzK74JewTXNwaUm1GfbEQpCm1qdFZ3",
  "key45": "pftp7fEiLpkNoFyCjvjmn8cF6hcZvFpQb1H2wdAC7e8ipQW1ms3p9MKoqzzE7a2mFeDHYSmMv4JJPkwqqX6B7ga",
  "key46": "2hzde9B4c8X4R9vhyFjhs8rddfe4y5YvTTJKzrcHN66LMguLBenNDf9iPCe24wRs5rni8NJFkjAijrCnu8xoRhLQ",
  "key47": "5PVuEGpX9gY1w2HaXYv3TYeYRciq5G4wVv16ae6dQ7keEWn2zyWzcnWnagtvNUzax4DWz4DMfReDQifgUXpewvLi"
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
