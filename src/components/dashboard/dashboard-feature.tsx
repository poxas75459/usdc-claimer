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
    "5GAL4o5wt3d3nVF4mZYTvsMrJd5MmUr8SZMjNSsSEqj1UsvYGcTyUucmhonssbu5upcB4ff6u4tUbPYibiaNutL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NP7f9xRpKt2ehgEzJookbJYdUFSKchf7o59rX2nzNY15DyA4UFP6tmsNCrnFU7Zec81kg9fqkDnwVKsBTsDpTDE",
  "key1": "3E79FGG3iycMWgofXTeSuamdsQFgVHtYLBDyrm3xkZiPixb1EtfQjt7SvNLRxtucf5eFK5SduvZi62d1esmZTJkf",
  "key2": "4hpkcpYyxcBgf6V5RfksMZmxQy5eEzsRiUs5S4qKeH7de7SVKni8EUnsPKHWgSmtnBzMtSN1HrwZvwH71jAG89Pe",
  "key3": "3MNYFPhezxc7EWSMVuoGTZZACvjLkKqQFqs5vkpVg8nYyB3Y3kRvSfKLTUNEHaFeurpsuvXeZsxUdZRbe9k73n9t",
  "key4": "48mgcjcf695GWuG2cYZ4j8EX77WzKd1aNT6G8vcavNbUvmeuzcYHDcZwLePAVVgJvunqB2sAnr2kBjqTZrxqps4T",
  "key5": "XJjQNfFkjsc2Gn23HNLXwBkoAKJinEmvNtDH1xhDQaCdaQ3HZdqSHbp7kfEwoYUBoZ9tz9u4P5eGvMHiLADX4zJ",
  "key6": "kqJmrGHYWW1jJKWmMYhUDqtuHJgnpjing8w7wAXzeh6Ps6HDUFRTnbPzCqmR9uwcjaDSrT66ms7C7uomHx2p3Vs",
  "key7": "2Kw91dZpfHTDqg2umCrsUaRrMDWJnZQC7RMfSAHVY7HqWFzTjKYmVAT2mq5DSozxvkuevDxN5NNfQxRrA5pQDmLR",
  "key8": "jUg4tA5BZRFegrJAiF5ae2BQepaHSWmoAGorAonK9HbDg6cmcbUnqoRtRxTLysn9nro46gsRpV9vqsgCJp87hd9",
  "key9": "qJaS5hNvsNRNz28g96EPPRJubim2Bk3H8Z4id7xgoRFGAfT5RgETznhEX4M76fiXukVpcqVfw5yQNTVK5Q4VHSD",
  "key10": "3HsAniSf5cKFN7V8SuEmU9wf3ncWjRsB5CEPZu8CnvUjNqSFBGxi48611EYKi1orCX4GFDkadfHkr3iqjqj3da5V",
  "key11": "JwZQ7VdAGDP3uQsRTQK4WzfP4tVqAiYviXfABVd6e28VVGwnDDm4C1b5SejkgpzsES3iTzRS6DLRv3sykmpJ3Z9",
  "key12": "3tvhPS9r3EWhHXbe1FqFnoKcFmxn4EzK9RHGZw9UNnBDnu7kjX5B2K5dyVn1FSMrLdacmX4hQizbCUcFfWM51Z4J",
  "key13": "23SMD9CZnoxbk6WP9oca1GoBtYCiYPj8zSnGnE9haJj8PPm4Ft8iLXmHq2pW9Hd9XGgrQDznh1a2Z23GRjEAewod",
  "key14": "2sbHyNBeZP5oXAaWigB73dJRcKNfM39Ym4MvYis8zQm4bofCaJFzPhbyHgd3Hhbsb6vEpNDcbtSLfyZqgvuqc82y",
  "key15": "4knvxoBdYMWRadT7qskggCYVTfoqjrTq115CC9rhWsPD1wGpH6MjM2ZFPhcy95q7WKvjqMGMwmR5eifyA42jKq8a",
  "key16": "22LrqmqCfftv59Cmzh7jpEW1PaPnPxE6nAHThfHkFcdggr7KQ3kjooTJS1H5WsT916evbrZHKf3sgM1e1s72gHNP",
  "key17": "2pNCss3yZnAQf9S8ybarPe6ZWpQZB7t6v4d3HZy8eeB76BnVuyPiFDHADL3sqTiCzkxrGp63v8hf2d3sJ8auTzPY",
  "key18": "2X7fgSJZKoUMwGXdHg7YBDGp8YrSPiKfWiMpjS7pKY9meNZAdWBNeNPZmjdHDRCJkSdkgdwX1wE4p7thyj3hydZ4",
  "key19": "2g2u1it7qnQC8SSuyGwfr3P1SdrKsayfuMhG51VViKihs4APG3yN1LzUnZba6CdhxaqhCzLpTqGyPRV5SwoEQPyS",
  "key20": "3sF6WeTSHpgktmMfzYaRYgSqUYrkJJvijFBwvDKdbAFj83T255xRbp2jJP54T8sCRqPc4ruKPEwdyhAmtPt9racr",
  "key21": "2EnVv6aDf5rsWgR6Gc773zQ8x1XtZeSCcNMjh6JEb5mNJBndkDQi9HVgsm4M75W7mJJScadpTNUFgCh8s8xjY63V",
  "key22": "Uzke7rkqcwLHT95p6rMbXFC7rec9EPCnHdQbt1vYouXF9B6uTKHPLF4gNpNKh1e1p5C2KbP6zN9WXg9s5MMPxpu",
  "key23": "2gk1YzgTrMif92m9E8goxKyTqD2Nf8Z2k6dhzXUGzhHTaTrNXznP4YLjDjjmjYm1audRoxwhJkmKr4K3121yr31s",
  "key24": "ZYL1au1VdxxJTeCBq86H9kxLQB1n3G3prDH2vMEXCUwW9NuvMuzM4bPps86JUcpdidpGnaE1cGBaQAxDjerR9rg",
  "key25": "4NXh4TmCmaf5zqKCLUyJu8bq2mGww6tFuc4guhAuZeGS6MCPMq2oNj2oBe4rjXwBvmiVDeiZi6M54DgECzaXtV5s",
  "key26": "5EQ7yWmfjtYPeiAdVMoET25JqZSfrkkYEEeKp7XocscFDnm2jRRKRVXFAMUnfcvf2HWNKCUQPvRk6gNqDSDtjkGD",
  "key27": "qpyouG3bhpqWYpe8JfabVUmHzz5V6mbigpaYpX3xg9skZbXrsc43whQct2nEhVgtFkYTwvKHw4E2rbzDTa1Hddh",
  "key28": "WdRkJzeA5CrkZvsk4E9H6LjSRmnUr31ogQ3ySDqN1FYoX388PuyfK76LbYDmn3TXguLDzFhckpRtRxCKwY8RpDT",
  "key29": "z14SoxRh1yCbMVkFVHPseW768MWyYpKfjgZyKoowhmJQ8bn55gB5rpThXosir67M14egP4J4SXfJcwZExH1UERu",
  "key30": "2xJAS2Y8wdXWEtsBNyZmGXMyj1mm1yopkeHKpSWbNuJKkAuvnsKiVVx6Nwi7CUiJ7CBEbSkYFfYRVjh8AGQctX7z",
  "key31": "4iFZhXdCu43q7qyiT19aQWfxTWNcQ8SDTASmp3TU3UNbmzVeCuQpBa7oWLk1eaj4a4W1odXH4XtyKWjUcxVUbhs8",
  "key32": "WpCE62snk1qi6kdkqZVhYBQJ5LEpMagvVc9jJgSNvCcFyhECLmykbPrdjM15t4uTtMD24vG94UZB362vi4QoMAF",
  "key33": "3exSwp3opee9sCzBcrj57Vo9ga52HEu4q8t5TwBn3aZJFzqzkcaFNvMeMRQ5Q2CV4RRoocqbiCJW3XaQdhUJVUUg",
  "key34": "4Z5Yy8s46dTJx7afU1MGJZiA4mRk9AifRXEQYSq5FzPWdYBMKnhXeeEJrBMJuKhesAR6sCYgXekNf6WruKkavWxY",
  "key35": "4DL2bNZbYbqDHBjzo9m2KFp8wptrL49NTExZobVLVti5dbeZLA5i63LxEt618xqjwhmedTQ5HRANnNTFkGb4iM2U",
  "key36": "4CHGu7f9Z9pwwyzkyEkxSqetTbJnpFdfFmhgsrrRPEFAuZGvpPEGKqoHBVQRLgfdB1P4iBBN9CtCbzhLnj8tZ2nS",
  "key37": "3FXRxzZ4pR9UGQpxJsciTVGACPZBYtN4roWe3gMd3BaMkZuWwqHWNyBSnMh2YvEkcGiQhzJe9r3uFJhaNdsYhn1c",
  "key38": "5vCRhHWFhw5zAhFKNqeQ3v7PzxR5b2dxWSQFWJe293pHjPzGmKSRVUNRv5qw4BDaZbdzcZ8on82KMv2zbwvwfiM1",
  "key39": "3nikRZrnYikbTGwDp22PEDinYEhUfMx2w3MdQcLYtqQPzx8BuhnxxXvEv2ygk5QLaRwxtBh8TGp513f11pRNdK6g",
  "key40": "4abyPYmdBKmSg3nNz3YgDt8Hnh8LTfu76MifeJ4z39nYsZwLFYdXYeYEJsjUhT7ynBcH8sBeeqzY289ySfPFqeR9"
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
