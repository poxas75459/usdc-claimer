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
    "5ij2EBVCBbgGyCcakRs5z5a7vEjPvDE3feNNiAbRRX2Lkf9Ta9dEQykCoYMNhyeofAFNxkkP887XZAdVXih9g8tQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AxXLdhCDo142dSrEPAQ6hHUxjYoAighawj6DSixppVUD4kbevexLKDAFZcCrLxX4Q8rvnpGSQikRrHzkxe8jAXA",
  "key1": "25JNfAgmuVhhuPgbwnJKog5UQc448wTUo81bYUm3BpKbTTYPEC63t2PkqkcpYnDV6FwbTPc3sjF5Rp6sVzHU3HG4",
  "key2": "4kNwhqh8kMLN7WPkQZwk81LpBe3w32RirAUoQCafYnf7cFPeV5PkbYKWAzMHgvJY1nFwv79RK1LT1Co2N4iqhX4V",
  "key3": "V8D49nC6HNQmmmXcDYPRBM9Gq1N634pe1Eqbs12BawR2jsm8JqwZijrqdRiXiLisXbJYyUuhPtJiMjmPB8pMYVA",
  "key4": "3AXbbwwAwAat7FHNK22Wpt61jspfeAPUz52tK4kGNAWegALcZi1cwppexfnEKRRUehqKCv2iTVR9RM5MV36Fihdr",
  "key5": "4g6JeTXd58RijZ9ZXtftCpWAY8e4R9DhYve8yHfQT4rF2WzF73fJcCLrwHHPo8u4UQXDQbXjybVUSGS7acYoRLth",
  "key6": "2xWZSP1xHqx4ttW2j6UMBj1kx5KJLdWDtKhERNVVkWANENghLPxjwEaUiUbKVzkCQRbrActaPVPC4toXzSoe45xr",
  "key7": "V67YpDrWFNCXCGdRU9TSztc9Sw5iTitZnGe23Wqrn3Bvx1qhs1u1ANDMBRRFD2nt1anpLkNa4krN2jARrwZqPds",
  "key8": "5rX9fJpntxevfzNxqW2sKp2E6bZtqeW8EPQ1NrDX7FJeknKrxpBpY3XdCN3bGLvvpJirBQnkzRi5Chie8RbzKPb3",
  "key9": "3DofqJooSc2kisViZjmYQftbeaSoWExa3dtLJbWFBfVxDfy53WAZGQ9b8TGkPv5au6ZDMQUAMiLUKDDeAQakyxNq",
  "key10": "5NeKzwht9VeBTgB2efXDFpKo1nRPEbo2rXkwMQT4HPftLQFqAFRYGEM1HZ5p3QoGZMXJNgxbGudWpeVE7EFFMmGB",
  "key11": "2jMa1EHtVexxpP5A1gnx5mcZKr7B6izKPhCQyFS8a1b5bQsQtqrEcTCSLCCBV5j3WRKM6AdQ5m3RVuXsi153sRNG",
  "key12": "kHtJb5Zo9bmGXJHysQWWzfK9zSZW5FsAx8sCSN8td2EVRuDAg97XT6QqEEGDkYtQQK7vQpKemLqmpktWmVTKhCa",
  "key13": "517BC6abHCNW6aE9bv6zVbMtdtqwuYKy3Km7WAWwnPMMhSNQU5JmwNCx4T4Q3E7ytq7QoGuqnxBi81N6PyTihygq",
  "key14": "3coqZMNEtkY7yXWvRCiyiPSiKJcoPxom3DzY56Jo71j9PpAY5vDNXdDJ7PtByNX2jisP9wbWz4MKGmbAxrQ6B8Ra",
  "key15": "53cYGfjprEoGEYfvDpR1GbTEqqBJjHuLYQ9GA6eNE53w9PkB7F8CFCXP4FG9Qrhyjr6PLCcYYU6kcSMxVTbFmpf7",
  "key16": "fGpxUxE9d47rbfWvREqT2cfkS2tpwP2gvTqjK78diwp3LewPQ98DyUBpnzQzDsArsF9Rq7Gv6vxKkfoL42ezbxh",
  "key17": "4oCseeGc7xMnmKYgcrRzSua9mv7FaguxkfLzEcEt8K2bKxpMqGbwNQCBZpTWW4nmSVxBQajjrAqG7F6vsCGw6zr5",
  "key18": "31T4RWRSPAd6RHurnqeR8u2BXoi6Cp6LbFQJBrzUvnVAiEWibUTiwkse8pKE9XGPgyzgy8jZC3FES7GAu9osKJP1",
  "key19": "36h2TZHsVR59NCXjiX3raQFoFEqyjNiroSPrZZ8wFtTKxi9d2X6Fx6Yijb15zFkdFdTS3bcYxxfcMBr6WaPSeVmd",
  "key20": "2nFCfCtfcAaNuYAty3gzG7MVTTUfzRHqM67wqjdHputr26zQ7Trkr6fGFWd9Zv3x3oqVbfW6YpKC6GqS2vkGXAYj",
  "key21": "2eqkyhU4d1Q66HHpZ92Lwaiddy1QvguDWjbGaVKhfmVnaPu8pMwdQs6X2JSBtjyL6nxNs4GXWHJw4eeMoob8xX8o",
  "key22": "2vTfefMbjhgyrkrt1iZ6FZn47gVyjGoqD41KDQ6eX4iKcY563hRB4nWyE7Zb2EGhuSyYesKY9U23cS1x5t7nyXUz",
  "key23": "3gyvWhv4oDJmCLCXsgjXWSNbAo82ARAWYjv24QJGszNPkiLJSjEPzWHeG4drrCAvkNkaeqrGYH4DVfv1jpf2nhTV",
  "key24": "4po5RB1mPeBNjLMq6WfMq7Gb36HnbMdwi45JRDc7RHyQAEYQdUciTib1fMygiPHSgAb7EZ7KW5bKT5HxNBVuYJNq",
  "key25": "5nkjAST5dsXdvzcrQJVnYE7zMXgmY4jDdgtbwMSYkqGX6nw6DnY6mQ8QkiSCtegnaMuHk6822Lcw4c3UWGncSpbR",
  "key26": "4QPeVtYEeAfqzLPpmkj4w7iHbBLfHTr5yU1eCDrqGQxxEm2QLvPZb4rqty3LdfawBMzrn6vqPUdzzUcg4cSR3ZP",
  "key27": "42QrpWy7GtF4oFhMyySTA5A9YiMVhiZ4f2E75XuP7Ja5mhb436otFZNkyUQPPTiwFsTghYA3xBXNynGUf5q3Prna",
  "key28": "NgUQ3nU4kV8aYStkTQjAyb3ohDwPLq7VACi9ShmoC8XQxY3NQti76Yyc8CLR26hD6p3e3zmUZuJk2jbwojg9uWR",
  "key29": "4jUzjzxLT6o4H4Nde5BgFwnfoQCFpA9Sy6dUv7AeSz7kytQJ855cqTi1b8ebmBitRLBawHMdEozUF1u1Jvgqbv9J",
  "key30": "4ejmPNugNWG967mkAfFS2SW5Pr9r6CvG41g4x6YvBshnMvxggxEwUj2Nsq3e1mDGk3aaPtPeEWLoyxoxEGLPtNMR",
  "key31": "3f5BtCHiwwxoHRcPms8YuiL7MAjDWcvS8FXp7gdyFsvdtT1b7uoVfm6KMKtW6BooiprXcdVefJzXjNXhmPqGEG7h"
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
