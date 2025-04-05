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
    "3hKoVK8XEDqp4EYGwUDVcE3jLv1yX9Ao7yUNP9oasmBxanJ22wTMQNJ7NpNsczd8sZ1fASaqzjx8y6B2nnCZES7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v5Z7ymkEV1hmqssgZ47iRruXRoCLLz6sR4wvrjKEHyZTvf354eeVTxqCa6YeKY7uWSG7UjnSejD5BZcqMCPDy85",
  "key1": "4BU3bcBeYwyqCLQ3DoSDcScuTsK9WBtbmHECQEVS81znQ7vSNvadQSVa3DqMA1jjAC86LJYqsYq5LQR9X4uEGK57",
  "key2": "4Z3oDH9t59uB3tKF3eda71oGAey5TewiuSvEasbkbHtZEE545fpEJQ6np5NvxUoJCAyMMjD5943e1RkacqxocJwQ",
  "key3": "3yq6BKPiGsW5STwoHqKVzbF5QyaVZpAWbLt8EKbxc9cSHePFkw6zwgMd5mHVriaKYcSHB4TDBdmdesrD2tLbsuPv",
  "key4": "2DS3gaG4iMSoivaBbjWWiCZYd2ebBp8axP4cK5BMUuW32sjcVxucuEjDqFzJxtxgpvQEvsYnYsnRW3vTtxVtzgy",
  "key5": "5rHXewENmkSU9ZWqWzBN1AUtJ5TFBqQdVCa7Wnqr5nRcWKSGcoQifkSVZpU3zNn4JSJvheC6VuN5ycLfEzx2G6eM",
  "key6": "2Me3xEsj16ktNjY2fwXkrAfLoj3Kfvyyq1GWSuujqQrNuviLoyY7YJgzd3yf7X3mcCfHCHeDrhmrbLx5jb9knAab",
  "key7": "4B7MDQvgKJgD8JjKo3CGZtdxuE4ASc3c2FSWdGtYf8bPmBbcUegYua8MTZFavWeysT4SHgB57695UJZ9gxe7gRiy",
  "key8": "MbN11jusp81d1XxuZ4uYx4mHBGuVaZK77XUitSW5hnNDnXjiVQ7JviL6g5kn2JcqQgYrQrF9rV2WRwydgzBrcsK",
  "key9": "5auyqfKhPUdH3zdkuTWKXXFNmtYgrZvgXEBiZDdhpvqTLRBXdJP7sR8oUCXVftDpnVmkFihb42SyKy3aDLUmVbYE",
  "key10": "5tW4afE5UjhvbBuigWRRZPaAGnogx9q9WzL5Xcwamba5C5AutApgyRLWG56Yx5iKNfG1weJEnhXU4mpFS6kGKTjf",
  "key11": "4egpBYcTjr4GuJqNhwtZK7GoG9wjC5VLVP8q7SPiQDuE9Q81G7gjpEsfJo4CSkW2BUcUemWyjrmrd17boLczNQur",
  "key12": "VjvPjNvHZPg3RBH3nUQvj69gKAsJFrMVrLuCue2TGrGNjTkEcdLkPoqtx4bsi9G7biU2vdLmjGrjdJZ4tfqsrcy",
  "key13": "489jLMP8CPrbS5yump72vixKbuvj7naS4746annzxa6m5qBBJvfMYz4yPDDgbuViTPAVAgnV5RzCKWwbrMJ3xDUC",
  "key14": "2PqAojiZst5wC7D8M1Jc63S9ahTVot6R3CWradVurYSvHyKcMZEbFELwgynr2QZNkBDUN6NxJSCNdbHL1dqrRHyk",
  "key15": "4KrYtb28ZNy83MU1ZwEVjgdm2eAsUMDbrQyfTs9J9dFdjKthGQDQkjLhuE34XKG6Nw3F7qSF8xWUjZvKrUynnV4X",
  "key16": "2r1PFNjwYoNpDrfKTVux8Noym1WW33mXSy691ws8Aa5bCK1EE3DdkXw9qYyjNvj2JrCBZ6KdDmi4x745jhzjiWHM",
  "key17": "3oSGLadGBptfCuVkkFW7fWBfKsw5tsBDyBRCoJxQAAvct4J9Gag158WuE3qfAn1dUCuVuhsYeCQjf5CN6kxQS8vd",
  "key18": "3rXKuj458qMqUTzi5PjCJqCTisP1ZnbYvU9eCWyw19dK42hDhZzk6sCtEiiTaPLvXGMZoW9yJs516wLWSQAukEX9",
  "key19": "3qrS4cbfNG9MAqvmrZmsJurv6aPCGnHfcnwwovtrXMFPfykWxrvsSFTSQJRp2NzQ7aG3XeZ2B8Yunv8Bo1FBrF64",
  "key20": "A6XY2zE8zkat4umoYGPVGhaMfFqWsXM46xppoJWommdi6R3fsBfv6C7oSX1Le7Cz6dUKFztqJabDMGvEKnP8P74",
  "key21": "4yZvptUMrPXy55FuEnPyKLqPDDR5k6ryHg3w9oyHjAPJbTvYeMgSk4gZ2rfCKAuAMJfgSfPMQyJbp7bL1hKU1yot",
  "key22": "3J3ZMGGpcPiRuDpzur5zbKc6JyuHUVXotP9JB9xHGVYL9KZ6C8nS2JH1eVnNfEkhujrJqHDk6WFqmuUXqQqUXAfD",
  "key23": "3fidqqCtvbpFZVn8SBuV4WSFitXvzd7e2ccNNuMDmr6x3fJEsqMHy1dZ9HJYFqaJfUUicBbmVExS6ST6EsPUWgp6",
  "key24": "5zwWzjhptGES1rXWgQazmtDEXEjza9D9L1r2EX1HeeKmBBEjSCRfd75YmpZmQRAhYL5uubmy4coF437CLUD3pdtB",
  "key25": "2ho48x3PEBdYBeJdqCsjsTiDctBm2AaNWbEZauKu4GM3U48qP8NXNRKWFC2vGNoAib2dc1W43Gds7QyZEnwRjmGQ",
  "key26": "E6fuzSkuX6Er3dFY4L4SgJmKq2JQG434HGnKLG4AFL55nEY7JoUQryUaBzDPKSsybHc1TP15mzokStndNa3s6oa",
  "key27": "3oYboFvJ9nsr8dCEGkYftCzd5Q7JiM4hTTVuVzbPnHNBQT1eneJGDgoVzWASRUh9oSDobB6GMcM5FmZdK2ou1tMW",
  "key28": "jCcAsbL5WgeckDFAFtkTwvVSa8PJArPjEkLFau55gaXAGQf1b5uFfYWRRZ7c2h8dUtZhQvTezeTVfh5VAsmmDfW",
  "key29": "3JG81Pn4Ub3gjpPsw3xpafFo275FUvge9TkLzyweT7Nt5tdFzp7RbA1uTN7mSQQVToRLQHSoC6vujqGrfrNq4LWB",
  "key30": "4iApVKLmf116f2P4PteTCcdw5RMFUD4GGj2YQifUtLn3fPadFLgMUPYMZNcWwEd4UKcw79QeBGXKGtTHYPqt6thh",
  "key31": "3Ruhq9xMSrUYpcfXoGFX232d5qP9g5KDAEqeDAYkGx7oJgSHdDTVBUBHMxCt7zkTJy99fmNwrhFstgkT1pyrWtz9",
  "key32": "3KkN1e6eXZDvuxYqoXfZB2KbP8TPTaLt1sQt8A9K25Umi1jhj9XUo6SUENht5BLkH3iQJWhppTsLoxKi4rdrLTzZ",
  "key33": "3LDNXUJ3jNF48LcuaTA55j2gJsRaDb3mCdHVbPc3gmgRg8pYdLSXab6YNFK3egbgB93R7NGMSAxkktx2QFJptvE2",
  "key34": "5Qc5WyuafVjaPuoxon7qwEore5b5N1rYfimAU5TYNj7cuQCWjGrARB8N9BbLHB5HjB9ap1DBsijUFeg3Dqbg8jbR",
  "key35": "56YnxkVmyymmwLxHU1uy5oZJw7jWdE5jZ7cY3h4Q4i4VPenW1h9T3n3qPZ3WNBak1wLj75FUqhVNacDSSbPL21tK",
  "key36": "2eFi4fgbB6F55kFdLXQczrwbmX2KsxcNrnQxfqNtXYoy2fmz6Ru5oDhxuzYuUcU3P3mdUUtGU3epPupwZ6pBAajc",
  "key37": "3Tenp9rBvmBcyMUsfB3ShpfjQDZDoTr3kWHaHNwP1NQD5dMyeQiwi5HfJTvFmMdrBgMrsppfy6GKwMCrqVLjx8b8",
  "key38": "5iW9bv4Rb3yUoPBNz9wDUYQj1Qdj2YU3KLq7aho2UGsdZbHZeyscpxvU1KsuagaJvWBQjXuNMTJbaXzbAiMRRiJ",
  "key39": "5X3ZA2d9tHrqzLKQFuroLfEMughJwvfC7RjZkjG75vvmfT6k912ce1qTY8AxWhA9esJnwXYjtJFdERQkVUfJ7K9g",
  "key40": "JnLvQ8ypXuxV8RZPXcCiUAhT3DVXZMwbt1nfphTrnS3xt2swsJL3UM4e2yX16B9YjDfPpPyt8Wz1zXkgV3ou9ju",
  "key41": "2EUcUURZG9vUhBB8vc72yEzvpxH75heVwydqezY5M453t3viZHdNFouEbYfBdyiYXWv6dB4qeiD77X74Ji13Yqvr"
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
