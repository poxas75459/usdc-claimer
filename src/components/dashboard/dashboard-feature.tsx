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
    "3J82ABWv43gKqPnbZDN3zYJQMS7Sv4GJ55y6MkkvXKEMsRRqGAvKNpHnfwvURnEDquxuRNTXtPaU3aYNg1Arxk7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a2ENcddpFutWcDFD7pxv7iRhLC9Xp5VcmSL9qqPXvrD3gQUbUPh8nQpvwn8DZgMyhsFRoiMN2gSZQnna7ucnXJp",
  "key1": "3R9BdZtJAJ3wrfQXaF4cy51561HpiF2S8e28w5rfgemmMuTQRPVRd7saRFZEAvdi3WKhEUnMtSyzojFm7YoZLss5",
  "key2": "3B9WY9Lck7QSkfAEHGFxFweFL5JF2vPhsDWogicF5smyYsVDLTwDxnKFWV7WqRBQBxfhfDvW5tomoQ8tPL3Fj7Uc",
  "key3": "2gKsYoTQWBwh3BTzXtfb7MtbMdZUBobHozUMFfWM3geLczixX9bHHEDnjCVqz71fLKxL7AwGWuUD7hVrnQKYig6e",
  "key4": "54LnxWLB6Pg7J51LDi7rfgoYqACfA3kvdgR4inFz9KRPT7Xyv35mCSmBJt7znZ6AAuGPXVSCAaiFkq7eqW3Am13s",
  "key5": "5fr3zzJUfv5LUa4KDuhJALCyADd1iDAfMPgHdmHbwjPR5vxmp92gAaqk5Ch2rWbNtU57Ywhpji8GodvaoWhMDRL8",
  "key6": "4spZd6iF6LsW4f8TWFVN3jcnB99qv7a4iyGxHv3cE6Zdnanajz6ovx15ZnSEPkJ4dnrXni6kthK8httNWyGncQaJ",
  "key7": "5vi7Mzzi65rrahLnmgd3ySZ6ZtfSwiTmUv9GMndpXCxcFbcXoAegf9bWFW36RnpSg8UXMBHJ5NZTFj9kZarovjwN",
  "key8": "kA2rWU9vHXg1EmQrL7kn8L1Mn7ZZnHnV2LDL6iChoACLvuNXTUccAs2ZMHixSP9ABA34ABQddUJhDnRH6pCfdn5",
  "key9": "5yH8R7S9YVcUPo4KayWkhZTgnnC8MGu2Q6yx9eavXezA4KxnwTNrX1yyXv2omudes6xMuVmvuAhSifcMDLjD9vHW",
  "key10": "5tFmNqD1wMBBvbsr4FE9TGcWGkm1sjnYrY7sDjhuwB4xwLWURaeHonm2PJoa3qgh9jVkKgwnjpXTuJjYpWCHf5Br",
  "key11": "3QN5CRzE74ECxNy8ZU31U5KuYL1GMmMQbkEm4QxVgRfHCrCinJ7rpobQsC8X3FFu57THg1937qyQVKZEydMRLiyE",
  "key12": "3YrdzGQN2cJ9UVH3tZaA3Kg9W2eGnNxrCgv5oN3R3NPjavAVzeVZU5t2HUnZGBBAignS3UtZZFfivdQCJAht5ntW",
  "key13": "5KuNHTnUVqBfQdgphkKnprCDu8WoEViGBRoC49qLkoQzxuuWPyCgiQ2qYK5Pk5EqXZ6YgEcDFB69KDxNf9FLKAkN",
  "key14": "3Bvcye1RVKNXmGuhXNwwKc8PBKwYrzk9kXr5AwjSaqdrVM4pc1mQc876sqsLkJGX66NiV2qPVeXdw8XK9YRKB4Yd",
  "key15": "5UJ9C8zniRoUrs8AUoxETysHbf72YaFsVJBj4Rt47J31atNCpKyMGyf2vYVf64XBA7JAa3yqLRALff1SqchJkE8V",
  "key16": "3wPyqvfWqM8kfcQjL3MyfRBDKJXpPDodFrt3wMAtFkPAmcCyhpu6fTKGG5hpDcUti5ZxXRTo3dEaoqWKWyBA2SL6",
  "key17": "5Eu1WZJxMZdqZu4iCoQeuwGMwgzfF7jbXzk25GLCBfkmbEJrDgH4UXexvpTJtSMo7JQ79D6d2tyQNRTE8HKWX7yh",
  "key18": "VhtV4g6yxsEnHXAyNq69ewvNHiFLKavo3QzkbPZMq2f3WaPnq42tyBTdwxpFYHEC9fUAteSGTALrwpMMjxdnCGu",
  "key19": "H3Gw7os3VJxGq239Nd5hQEYPCVELqv7iiV5e3ZUMu55ZCUo57hmqpoSSxstF1KvW7kfr1HjW79M2wBpRJs3kS1D",
  "key20": "4Avjoy7WcaTQRMXuwEL3Mm8m72YtwFWZCvuc8us1NrTQoQszwP84PixSpG1hrS48uW3cd6DenLeiRbrG5GmuxhnS",
  "key21": "2QP9c64VnVCSPJPgStsx2byZkC6yNffhgrQQdHQm8CHsf35kty1iCgvTjyX1Pimkj8ryPRmXmDVUgN8E5NHRoxBu",
  "key22": "329wHqbYwGkugNkREL5CjXMtPJ9Mv2bPFRcRyiTQaMtdatcRmzFn2B3T2sHpKHvNKmR5xZJahMaHJskT2yxJNaRr",
  "key23": "58mt1KhaMCdNCp74P6cyJPPqUYf1Ua1AHRadMt5BpQTe8askb1ZbwRDdJdj8wduArQVTwi3KT4f3vPhzCPGLMpdT",
  "key24": "3cqqiPdGpoHaGLGAERDWDuhF7oRzZ1QVTo8HgFxFvw6uHXASyK4KwipYKQfHZQwBsN7RGzpcxHivdC9gMCAjbFjr",
  "key25": "4Jj8DM5EJqBzbCYeh3qCL8eHZdcbebpYj5UyNGUMGsYYYjdkqwJnE8Jm5gpQRTHA7pJ8joUpZAnefFsyLdwvxhsZ",
  "key26": "Yg956Kq8o2Uaq9WbdRKWPVR9kcMfNTB4cSj8Wtd8KMv1XmmqoMkvzuZN2vrfWfzL3Wt31LeW8xrZFzf7MJTfwHi",
  "key27": "5qyvR179e6u1LsVseDMx4c89rdCq84x8NwYftkAK8knqyPDf3nnTbjLS59LmdNuxj3pnZiezAHFfKg3odBkXA3td",
  "key28": "4qsBt1yu3nMWVK6zAzpo3ntAB85RVkp4JPESejrhFvNLC4bSMRa3rSUw16n2tNKHXhVSzTxagVgsW4nHayZYRSiA",
  "key29": "5JNmr3prvK56wpRVidjrPjk17TxZiemfAKiANrdV3AJrBYFXoxPTQQxdkTLqukPHGar6Xz79A7V7qcaKZUsrBuPq",
  "key30": "5taXWzLXm6K4auxZfycee8qwYywURxQdx4dRKrfUDWueaW49BpqZFuouUWxVuFLoriiC7CWQWqn2hxqvpx3d476V",
  "key31": "2YE4Uzqf7HSnevnf6YxPGqxS7XyArGgQbd21b9Z2SgZCj7jAz7A5sCswG8K1ZgxFvxhuNtefe8Rb4GZFKHdwgJaJ",
  "key32": "5UWjhsKtUQu1iJb9wb4AbkMyPGn8SyA6FCdVekVbrTMhCfE1UL5rzAUafG1Z3gCryKufpYXoT3RGxqgznbs3YpEm",
  "key33": "31hT4gLskqSgB3zSPnUZ8MWxQxgHSWsTnFjifTmKvtLf2JsRn1ATBymYGrNyNCE33N1hCbTQbfQRQHT2oqPxQGhJ",
  "key34": "3vvdVpjjKiXrjcdVYd4C6HcDihoyo54NJWGigEJVaRkr9z9Tkxp2KxVKUUJubQvFAYugLS36J93MgkDBwhoh2987",
  "key35": "5UCPjkVc66XnEvusN4GA4JnPZhSd4QCgjr78Vt4pMUcdpibyPa3sSf9whLU3UNCPKjBETFL52MQnhQbuEwPqmyCt",
  "key36": "snku73n8EVKzPrCkUFxvKcxRg9E26dw6NrXTXq3bpyTnB8SiDe6EiEWwPDwUynxZSkky7VRKrsNYKoM6Ywt3JHr",
  "key37": "4UCYMCwFby6Mwg9oJQQhtZxwwBcghNrDAn5jm85CYz9vzJxbiptZo22XFK4y63SvWjsdvPWP1wu7kqUVKaVNgF2a",
  "key38": "3GDXXwHNakNAHP5ibLDzV3QGfochYz9oWQvgequz54kuKX4XUA6r4y6fKrFX91XgsheZzFKQXmHwSKKG7cRtSs3Q",
  "key39": "4pzciJDjjfGDMPidG9MVVtLmdqqLLwNGjbBoSz7gRoY9GxDZBdktvbyvjg3ZJxSt1iMxoYaMk5UtcSV8HKubdHHh",
  "key40": "ab66vHrQfzhNMaQV4zyTFEdDdEcy9h9wpWFr9TKP6rYHE1ixj6YTL7SaZwZVy1m6eQZJcRpgiLhQkigKB6XAAqZ",
  "key41": "LFdhaUZQPmTTKSmg7fX7dWXx4qWXpVWKea3sdVJEXmt1BiaPwbFYvCg2MTq8JGuz3tP8fiRNaH3iibiaQdaNUFq",
  "key42": "3BYBNJscwby95E4HvH5XHAWD55zMqiVkH5NBBGeVqogSsa27h5jQDc1mRhn9yDcU5vKqj9Lj3JGFtNa4FMthFbQR",
  "key43": "4WjLX4TvEouCreP3nHtCYQQP6fLkc8wpjWRFs8xYD1m6nrbf9LqsaEkDoLXyxstTzdnXQXvnJ8jrpfcnn8zXzcco",
  "key44": "3kZLvLFosAA4d7syozCyzsRNLxo1JidKhmWD9Yjb4nLF2w3d2UZEoVSvCEkMt8r4XtnY1FrnbpHC5Q61w5kAuj6M",
  "key45": "4QN2CrTztMBbKGyZq1DRWtjGqDfhLGXPzSkPUNhTBQ73hahZARkUtcNwEiHB5ddkRMPC2bV9ocsg4g9UnztB1sJw",
  "key46": "5KAQCAjDEQ2cgiA9Pwqn5xRFiBGCvibDo91jag8EKppR5h23fbTXX5dNWc1kPGmpazcLf1r355oCxWo8ewA3z1WL",
  "key47": "hRSLL3JPmLAiE8THjpqKQz46sZ84WFNL73wFLGKQsL1sw1vd4iFzJNWeYGmr9CBAv5mDU4o2TwrK6THTbsmyhUG"
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
