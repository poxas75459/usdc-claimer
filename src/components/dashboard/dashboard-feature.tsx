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
    "h8QNWTkVC6jNFUPtX4q3rBuUuDGj2HDEXWmwcmjq6PUq6K2HC1tW2oZahS8vm3fvfxwCPjcLBHB4264JBfWxB5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dHGpjVog1vYMFpVpa3R5yps4kui6oZg7xbrfbCbm9NgXSSQMC1nJTgQH6h29kW6xUAaxUqw6p5mwc7XJa8aLrir",
  "key1": "4Xs3FqSNjUDqCf9LE7beFDoxZmTA8fNe6h7Hn5D3oV5b1Tt78EWqJMXEEabB9pqqZdXch8FJEpaDFJ9ZUf11uJN",
  "key2": "oH4hksYF66ehwGMi4Qy6Q2rCcSnQcvhQ7kxriqyp2dtFgLMXC8YbGkEzL3tozSwmrMA33zpBicP7N9HG8yFB6nM",
  "key3": "4H5JoxoBf8ZMAeEvsNFxv7wMjwXqcbPfiEYUWKt1oNQzbzYXpLFLJk3ohbZ7na3XhEDuGtRirtV5Jf85jwsY912v",
  "key4": "2bKgMvyj6c58wvhZwpqjY8KtWdLzVni4cWS1x4hFJLxMqMiztZ9ay2u6xNEe3D7rVGwAmJgP8WtATBnzzS5MB8G5",
  "key5": "42sJ2wfYxQdCHxdk6NA28AXQU6HmWfV42NW6uH6MP4sgUEahaNxtSdebkNkpvmJYe3zD5zsu6bHDMePpyZFTxiCk",
  "key6": "556P98wbRiKdn3PexZ1atzMfWXShjcKbmkciwoVobKo1P3p6Q4MwWwtmLXWLVjMhjAR9q8nX7QwAmxAigo45BUCg",
  "key7": "56uoewPZuCtPMCDMNTsJgeSjZyd4H3NzcKSEyPxMRNLCLwwUDMriLydRg9K9dAsG9DxpLmgiD19X57Xj3UwwXSE5",
  "key8": "3JpcDpMPWVFSJVsjdBatUCgugbZmJCyEkVgCCefuGxGqDB7BeGJNams2TzsJCnY8vFYCENtArBDjZyCqyL72KeeY",
  "key9": "Hjd71pKkApAdY5EQXrjz4mAsFDg3EVgcqi1mt542iYtcm79rhA1UJTVNBeAKYxrvvCuYo2ThphutevzVLmFq5iE",
  "key10": "4EtvDv7k8CRjVZwZGcQ4B9oaUeBBCNPgEw6UCN7YZ8mj9TmWmrbmVEyAjP6guvnxtrHQbcfqpdRj9tCRYCxRrMLp",
  "key11": "3UDSyuQGj5ZVmmrRJuFg1bXWhdzNaW5ZtKFStsLT2GbayPgBH7kDqbupkZC2aT18txkzjJeovWghvz9m1Hu8HdW1",
  "key12": "5TVSMBCeRYnZddRBHjf4ASiDGaQvPgedRrMdDsMP3v3EkV7Bs39e7w6GwNWH2zHknyxeuAVS2cKJoWtoZpcNvaKs",
  "key13": "4UXnUEeWK4Thda8jWdduaz1isUVqSt2ausDXHRLfDfiJAdWVYpVY1a6w13hwfTZEbwydCds6dLtiJqm8CXaLPnBa",
  "key14": "44Gsf8tKRPQsqkh6ZqWRtJ7pX6kHo5qCVPEMVBicaYwcYvxBfFmDEFwMxXABC2yQ1XNWiEd3ZMesWcYNx18HYDLE",
  "key15": "5ktXvaRA9kYtYVA2HBwrDEfQk3cMH4cgmn2XNr6d9S6FYm6d6TgCgdqf1UWuKueDEhfFS32hEnjvhD78TmSn6VZF",
  "key16": "2oRiqWaVwAwUiZSVVZryJwS4qP3rDq2DXpYfkbzre9gxq5Kag9zPTCQQyUysLL2WdikoaeUjidYi1oY84TeiMA9k",
  "key17": "3oZepV1gZpeyxB3uNptcWUF2KzgQStbEVwNjd1TEjvvWdpzTDch3atPrwPaz78bAMLxNSMc8JJETahHdeW74sZC6",
  "key18": "oxEb33dSPPXG9ZG7aEQrNWjKfvDwghBFnDVQ9EZtWshGBkWWNMmZcUCTXXcjBHPbQAoovs6dfJTEXLMqvXcTd62",
  "key19": "2qsZ3xq6qbzLcUfctwwAe5kHCGiaWGyjjXTm4KG7CkHNdxtkBoK4yJEsvoae12XAhvu8NFCLLsW2rQ5jc7xMccTQ",
  "key20": "5b8MrfvAATDwqyqSugYCozc2tawHPEzQ6phvDJ9B6BoRGTaQkVTT7mhdRKunNPfG8ViuocXyNaU3fMHp6diwfnti",
  "key21": "3SZDfT1WoALKiyxabaHTNJiDYf7tn2pgykPFQeW3wWczA41nxHgKpkY5mF45GmjEFbYz7hmvcK2DmBnk6aaohZFn",
  "key22": "b719CrvLMyDnce1ArqrdSKCQd2ANuuQJuxNEZ7xZ27eXgjuuoo4Q1ZCZmxP7s9T85TsHtach19PQNGJsoTL1AqD",
  "key23": "kHdUP42ttXXv6xYW1BU7prgeZyjRNRDCvnatKjNDpECMvBxh1FgbGVZ1oW5rzZKe3i2Yv9py1DqdKUTtvM6Z61X",
  "key24": "2CNbLUvyLehir2aSjkUuofqzbEQ5VcPG8ffrNBmhthqA3SdiNYReihfFXhp7UEmnZyfQGF1Qt2gtwattyqKbeKVN",
  "key25": "4Nn3VQEZ5tjLA4Yt7HTqaEWu2xrnf1yG8FmgBSNayAH1V6DzSzfYe8Guh4GWMGf65Q7MxJthToNQ2LhpMoooWr9L",
  "key26": "2X5c6RFapCZt8nUEB27AY7HXti5HmaiwvG73ZPDddXhKSkffhVYVPEEDLEvafbhXoAJEqLQx9W4hcifqzhJihBVF",
  "key27": "jQHtuM2e6x5E9KV25J7n3n2dxaNUML3HM27LtXZQ8BvP8LjSe9BLjhVr4ypFzSvcQsHUC6hCSKrUUa7iU486Vm3",
  "key28": "5XdT371mMfR335wWXLMN4NoaTyqupKCGwS8m7DtDZkTgCxTfceNgwTT9ECg3mBqPE4VQyobgeSgu2KvKvrSYuPU",
  "key29": "4tdjcFHmcdrnbwFBfSAZJ6WJpeMTVVbrmCGQirYDLXWwo3r8DjjSWqh67gyvkgaC5XsypYFNCX2RajSNGHyfKRVN",
  "key30": "5hq5KKphSfgyUZu2sZHSde717PcNSxVfDd1BbQTBArL6rt1kpWzen5Ky8bRF5nbjLRywB9fqhALMbfh6a2uySnLF",
  "key31": "5j6YrJ1FhFH9XHPwdsTsGg4GWj8GtUZYcjnt6MjCcsbb8DaT6HBSx9gAXTERgQMbyXLDtovNXPT2hqfQN5oURuN2",
  "key32": "5Tt3xw3h3gDPTmDuJmqUF8XFoK37xdrXZVyoqVf4fjSR4sdFaXsZ5Dda5ytNZhtTsB7TvCkgtkwYTXTFpBt1UPJt",
  "key33": "2Tsmp8iwPn6VoSjyPmFqo7dVFqkocyoHjMwqwh3Awnwgo4HsTYJQrvuTTXkjLjBDLn6WoK4qw21Z55m2wMcwEZgF",
  "key34": "vTuBTRpMxLWeYeFRKeqLWt4SX2act7AooGdTdrPraoXnHnmnrJypbBLqDLaLxEJRDKQgJwDr5zdBvXZqwF5jSqj",
  "key35": "3bvvamxRdJUXsWE3XgZu4MiWEj6UtUpgP4M3xJtFMdZx65LN29s3HAndcP2pUfL6eHXCw694TMfVh6b6F5EXizw9",
  "key36": "4u6J5nwxDrGNNRFcKKYJWJkezMp8AqS1S5cNjPYeRNB3xJ36zDsSKscRf2T7DzbGmr8zspQB4qF28YU3XScGXQFG",
  "key37": "25QDEYXqFTjPUW7Ta6HDMAxvs7RnYnyfGLse1j7SXzQQghgB4Ce7xTo3CQzJptYXeSV4EQ6zzpZVeB339VT8ra2o",
  "key38": "3SwQkrybx5vrNaF5Nb8V4P68ja1LpxJai2LS7vqCqMEhWRJEXiFauhhDwFP9vKt8kUZGy5NSoFH5Qrereqne79jM",
  "key39": "3eLW56ibBuD1sTT5RhxCC4Lz82PpKHPQsTeLQimz4cfNbzWzVasV7n91VWP7deZk5ouinaSqvDsBLAJ55FCkQeEF",
  "key40": "ygbVrR9T77nyTwzjXS72XWPjuVrxVZMEK73ST2wAFMcmxUhTkMqQM2K8sj4XV4QRegRd6PRntchTCa6JdA2yYnY",
  "key41": "3kvbhLetkuEYsp7KXZF9mqoCW6L1rpnbJnhs6UgLvrivQQn6iFsYL1ZfNbQVham5woo8LV8o49exQ6yunY69kNFc"
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
