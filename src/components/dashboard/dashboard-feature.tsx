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
    "312MaVCfu9VEUFaYzLG9ZPW1dW7QZe65Bv1wdxQ77rtLRwqCfr4qxo8LMFLEe4w1oxGxkLyHxckC5H4nuo5h317q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51znA8Hh9wgPebgZSMPNR5WZnVBSuvM5Crwy2Ew3ZqqSx1Qgm3PoCk9KvVurvyBGf6vue2dqU15V4CzspUT1tKkA",
  "key1": "3pP5952wmVacxG8qvYLw1Zbxnva3hrHZcfSuxqfUBVrd8dvLRLym8PcM11o61JPZPGTS8BL1rGcQameHB3A4FFBi",
  "key2": "3AvMKe8gmcLrYJ2JP2hJG9UikHZ2qFrZnRdPmKNANauMHe7uyoeHxJdufxthF3gsb8xPWK7VdWRzTaWCyV4jPW6o",
  "key3": "4fGyx6GwLiKxyHakYYw74yUZRqmm5xjRjRZp62sdJpb7JjCLnCgY5GXHdZhbZ5tSayo2XR2REqhaqemnN6rrZHK3",
  "key4": "4cJbQsYnHwSqUU2g9jEbrT8qf1JaRyTKsj1pMiit6cANVhqFCeyjH9PSexp3ro1E1ZthobDvRJfWsYpJKDij5coR",
  "key5": "HaGtuBd46fR4xS9BJc4bmE139nEQywaAqmEaeLA67x3TKRHaTnHPDegjgwHgYoUrcnYw1epRf6mSC6Ss7vjFBVY",
  "key6": "UZrScFTm39QNoMYvjAYHintKWL7Cov2Qpe2equ92gDgJkNhG7Xt6v4c4vrFyn8ogYUL7jJXMavDLzn5vNmAeiTj",
  "key7": "2rMBGpR44GMMQJYqEPEQQ5Mope3MqVKTh1KGWQTFv2wpZjwdcKeGZXzZpdewx9jwi2V6aNbqLDzDDjDRd2NmqEWm",
  "key8": "U29fojsevgvaxPdNAGUde4qVKFeuXNh48r1i7spUe61dqP2qtTXUT3QqFauegmHGqHBQ2hfUpsPSbafgo6gvSnF",
  "key9": "2rPNQrMH9LAeAyAeJJQWzHCpxnzd6LdV2PyoVMEFA731uoVMwkTKTGH6cdAjG6LNLpdk3aYxMM77TUMa6ujzTeRA",
  "key10": "2hrYehnhZgG5qzNzeF91HQ4pzQqnkdCVUGE5sqCJuSFzENeFJbDxqpRYPMiSKuBXxqgzLWn3YKReT8TJ7aPBRRUo",
  "key11": "3T1EPDE8G9TCYGitKuvBpKCkRsjAauX6FMFoJmE5QknjLQjVnKaYF6PcvdR8P1y22i9QuFf76GmndWDsrhyh4Zss",
  "key12": "2KAfLvEyFJbWUq3tCBewA7qasqFpC21WjNLQt4jHebFQSTVWncU9cVQW4bAogBJR2HDcEk6QQa6wq9u4g4xKgGeQ",
  "key13": "2nJzq2T8sh4qd3hhoJLCvgMGuQmHNxkwjevxzUDVGX9cWtwgEfge4JevhxvVaZbYKMjxBaeuzmhjsnZ4ck1uSWcf",
  "key14": "iXzY1u87E7ZpeCeYZHLWWM9iiKf5jiNUVAoD3sW9pexVCUDKT5ekoWh3JiH7GeZYxqSjvTmZrZJU3g36tQyMett",
  "key15": "27wpL5VfTLB3RXNHhCtbBmikHsBdUUXRUZaGniJsiPHPhU1upQEiAtxkFi1hFQrWHnTB84SJfiLfkJ1Y9S4EkHKV",
  "key16": "4oAys9zrUoym7m4AFzCNqaPxyNetpuhSJRbebktTubMhWFZBeogSk5EWby1VM59KaCkwZUvyJPGR7mxciJCbeYHJ",
  "key17": "XGsZbeU6PEsZtKuu7LxQvtziZ549fNWuwkejhTdce4bMhmxHDN9Sciv3CPVkRJNqAQNDJ1qT21DqHAXsYSpb5Sw",
  "key18": "PVHehHaoEEWqZWQm7Uh5YvKo195JrR8fseycqgpfpBm1spEZLUymoByH56hpuCJBnMUgcZih19HGWv3jeWcukBT",
  "key19": "wfd5aUoyLv9K2WjYxX5DkjDV3QLb5JcBc5ZotJ5QcJdcebDPHMh5LJ12tyLNnX8Cn8YpNk3awB18AytcC8ZrWvi",
  "key20": "4JmYSwA34wRrXmv8zEoRJLvqWQ12cPV7fWfB3f2nwdXvkX8yMpTYniQw18PrkicBa4yjetw9zRihU3xUgWa2hxY",
  "key21": "JWKxifxG6i4aYC7rQzA2mEhhbNF2xdBWsWmg9WjHfa224YowfQJaVBp42tqais47TsEmvmpTbL8wDdqytDXdb1o",
  "key22": "5gPSJ2FtqTU7Vxre3xayJgLVptL5nh1uCtq12SPY5PGJqg7SsE3BBM1Qo5v3Vijcgef8fXJ6aCu2HLbaxPJrW7tm",
  "key23": "62wydxj52S1AHG5DeC6mQUj44ztk2yCB3s9dubo9DZJYu6HTdGTK4ZUfYBtmRwUF33SHHcYF1csDg962wD96FG2f",
  "key24": "vBb7BgNHp8VGdQFMEBECGDeCYvFgtG5DqcxQGhmpJEwrXDFd1jiJsTPpGFcCok3Z7899VGPnKdcxyUm2y6okTpE",
  "key25": "55NzVWWeVZAnC2cYSpvNbgAHJzUnFaREU79GVdT3E5fTDq8kQi1JmtZX2Y4khoUui6K4xiD5oFjNPyc49DD3yA25",
  "key26": "Wna1uGNNmdcyzT1JKPNZ96PXQiBHFZ9TmwECw9pqjx59SnFLfgBKGPQPwBRonz3gaEcNoi4gscHduXcqbxwQ3pb",
  "key27": "8mSnG1emEtcE9V6ehGyy6YaiweEtMUVtYiwT9nL4rEfLdNLCfAmktt9w27SWrxwV8kQb8bsEKUc1qcVKNcBuqDR",
  "key28": "4Tqt23mYsHxEN78sN1Aucp7z7WqstpkeJKB6Ki1oYtF7ac18ERAkF1peoVxxmdJQva2J28VyjafGHNYjfMovpU9t"
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
