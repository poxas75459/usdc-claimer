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
    "3FwzefCEASfgPdZm4yNP57RtuQQjyGkqPEL3tdz4nTK3LhmmAyK9GAE87ESuZkJFhPdXPcVo2Ps8b3W8oyMmnU4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kcoWnR6CuiNWNk27Kwoqf829udakM1o7utH7fYaJ9g1wuFA2q9BJ2Kc7x2VhQTvn6gEPTUXX9Sh5qRLQkZCeyzg",
  "key1": "1LGLEZz3pH7LCD7qVNHdrbST8jTadfTXNHc6EF7Qi1fh3LeD7ndCZyLE1jsKjkaqpneh119ygvWhujoB7wgoCKN",
  "key2": "5Q18Pzt1ift8Fu64jzhLPhf457pgyzHZC4AWkYabQHoyXEYWMpTBccCAJ6oi1sdc3MDGxgf2YELS7DxYZqpVD4UN",
  "key3": "2Nh1BPVzYNbohYURrxd29LRWbAL8ZQyDLDoK8JPUS2tzv1fawbnJ5WpqWazY2RWA6eipnAAUX9DLrduMysXaU5bL",
  "key4": "5eg8ZyH8acNHpde1WMiozV5q5gLz7jYh82t8eaTDg8xEk3TkHJ5rvai82zyxqj2itC2eNEPL4gr9P8kb3y8DK56j",
  "key5": "3X3u9o1wmChX8CnJWBtHsKmQrk68FhbEM7Jr6iruY4eECgvfqhAVbPDRHapWFo89bMPkWxtFh2h9m2gXwLU9qoRL",
  "key6": "2D9XDEASqGxCerMmExRGbhnozruzmZkapxW7f5uArckYLG2WuJXKb97FGUupduikJAVCQ61AvARuUp7rCMA2JQmf",
  "key7": "5RdAGm1JvLfMAWooGqeDrPCGSNP8sNyM7jhyAfSfcmDMC4uVtxN8oSQCE584YMBzyg29paokxZSi7sHVTKaPkfNU",
  "key8": "fGp8gHzwRH5qdRB6noiTnMnP9A15nUEx3Ue6RenZ9ouosWURds5vkrSvPDEhiexhB8rFWtnu5vsKE2UTi9z1zib",
  "key9": "3BAY6JCq5pQBYppw1fB5LmB2E1mSV8g51dhA6yPKao2wFGF5kQXhpvYRHGAcYAVd8K8NNPRFznRQTZwhc57TBr7K",
  "key10": "2heFVeS79YRukhyTqGg6sXgRkM8PocSbBW2R5piFaEJUYm1ta7uJ5CR9VJGgNjeaFzs47Yde517mWoYjRqcfXH94",
  "key11": "3RHPR1wybP5juvb92THVHUQFfezrkRR7gqeDvgRWhPVCbxXjhPKkGGM6Py55jEXVXoaBjxUWTzSsDDszXAzZGAYd",
  "key12": "2Xyjt5wkJfkkkgB1GrpvFQXXH7B33YcUA8uJ64EHrFYR6SZJGCYDpZ3iQThkXTmb7RAHgLGseFx21LQfJRMfbBdL",
  "key13": "23Xqbjh1FsgUGnX4D1Mo9a23ny5WJ9cgV5BrKoRbnAFFTRreg4gaEanMnuMLChzH7SgUoTVJs6trMXaZiwQAP69o",
  "key14": "4iyHKcSAd8phS4BdSTUYhENiukJHBdooAoXsfiZJQs1RW9QThUF4W5K8h4rw7MZn4wG1hECC15VGUhNknCHN1aVh",
  "key15": "2i2pKi6mcANjcBSLpsinUDurv174qGVRMYXUmBkfQbQvKZugspAnM4MusUFrRicAGTBSefGxNjq65Nnutj64RFxt",
  "key16": "5GJL84bTRHzqu4U33CTj4gvv8CPnPwwdTjdwGMJXJXb8XTSmXYj9SgHDFDMRf7vdfKQtwEwP8qVE8ArxikxEGNvp",
  "key17": "WiEjgYrvURzg98hfWrghm3NWfiPCz8mxpzZw3nygDnSii7Hx8Tnv73V1viMLPUSLYVLaJW9goHEZ4fd4uej32PU",
  "key18": "4JkcSiomvxvECUjWxZsXJyMkpTdgaEDPAQ87JiqxzTciC6jrVscsFCxkdbTLQdPeSyUWU3Gf8BSYzxn8ym4MjrJa",
  "key19": "4ACfBc9tdfzxNLmr5Fc5kU6S3ueEP78EcULWfkPv5suETbR7J7tTUoyefdXRfDwX4CjD3wPpMN1dyf1iTAyjLE7k",
  "key20": "DnTdkF23SxVJUd2jWoEikmiZZqHfgJKMzMzEoM5jb9H6wZW42atybiejzeo9kyaUDqX4vguNRWx8Jx4ahDomHZU",
  "key21": "5CzkY77p5zxkuqdEx7qWdM2WdSEyfUiWZQXnrer46vprDGxGFLt1UgdqDX6hW3qw4czKtMTSYVYp85pRyVFxNUmc",
  "key22": "3GAgXJhuSN1uKLL6piCPPp5xHw711g5NhowWuyNXxH5ZSQYFTts7tNM8EbfwgCdCd12B5ow9BkqyoXpirLmWypGD",
  "key23": "5xmcnt3PEJYQ59w1aRpiFZyikFEz6vMnE4FeuAPSwYHqiqiDXi5Yn1bcf9estb3hCTiDKEeQQgaK6rd6bNQwC3uj",
  "key24": "e3s4aafhxyCwUeWK9tWHUaJ4ZpbK5huupVUbxUWNNWuMxYRjYnARPh7aEXz75wACqgNqqUFR2xAH6eKauQUXRFz",
  "key25": "4J5PU4LXSpcUQPyzh9UeroUKbEAYxmX9hywagtsCyeKpeZF5Sxb3rkpx13WJfLA5q8Lmy7J6QAWqSqC1iCEEqJiS",
  "key26": "44XeN6jQ6zqwoAztYr1UtJDhz9tYmZFt4HthXXdaE4BbUd5vtQujqrgK9fUj2Wyuy7i755WWGbZ8quWfHRZNHRsG",
  "key27": "3edA3uuDFpbxDGAg4Tq4sPTHBhBcyUAUPCTPRQse7Qw87ZmsEmRmLrWVJSVhymj3awYEaEbpuHdqZKUj55icKSyP",
  "key28": "UiJRqBnC31ZfLxJuPSJxrCY6VxiHvP1BB1Ac2ZCEWoQK2SkwrWm1w391r93qp571yQ1KkLf8Gcsg59rEYMRwUSb",
  "key29": "3bpV5e8dRYxLzw6jzbALtmGcp9m3Uatqk7AEUrF9Auqxnwahkg3jepm45h24Gn5k3quqnoJakN2cnfE9V2PVvJjh",
  "key30": "3DryRaeGGLDJsd9RL63GEMrfrZ5C5E543McsjxmFVVPBzTYMm2UPhduMtsDEKFWKfvW6aeP8ZYPhLjSP6GMFahH2",
  "key31": "5CG1eo2YWFYxGCHZ93AMPPS3UNNuQfCLtxrPbvRgVgHhvrbpWuTCpiENDt9pyrdK5Q2zNLbnA6ZdPRLQWMbLjwmv",
  "key32": "3heXkqn2cBELoY7RxXvpqarDzucz2hPEw8QdzftKrCNT35sv6GAE7nmPsbRFB5gJzgP7JVRS3xERLXAth3Ej9mHd"
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
