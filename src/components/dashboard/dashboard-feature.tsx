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
    "3jFhTz22WuszALumu5JdgVQiZjhheCuEmjJuA9GcYXSDNDzCzboLwkcx4fDcJzExPvxTSuYnrb5dLNiabR7wNLwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jZ6oydpdhHT3TrnL9AzM46UenyZozWeuUsbbbZzK9wsekuWnVxud6vkdUxJWBYJQjNPZh6Uw97ZfAScMtZ9LPqr",
  "key1": "28U6oGFXHvDvgpxQRNLPJoMc7bpJHZt5CRQM18oYxBxGM3huK3jvDp1KytricPcAuZhi1qVFe8iVHM34JLXUMNcz",
  "key2": "RR3NWJ5KwxvWPq4hcgNoysAdFejekYuSLLnSgfwtqq8bGBxHFf4aSYXSbmGFxq3GahCgUnu46WNxCUbiuZ12ysJ",
  "key3": "4zaAVzN81BoxMqLRejgYew1Q3ruFRMtFggw9ZCNGtMWw88BC7cP8nUoZKZQzHj9tijHVpKcNxcc7HKfYiyRqqTB9",
  "key4": "4yU2dgMnaD82MCJSLNW4QQx8GxfgHywrx85kxmDUBUjDFHgxN8kesVPvsGgSt5JAMTP1T7a3rXSDvobMFQeQcmry",
  "key5": "399Qr7wdsm6L7o1vD2jJUUbGKm4HWGdySgGgug6a8ounZkSsUqLPccVwRgznzC6id5NRAXT3PhH2as81o5uPNsTV",
  "key6": "21w1HBmfqVGXbtXoTwMTZ21V4gz84e5KbL5ETx3iEG88axEPcREuiHcQSegoqCp2uxRaytT7c9vFWY8ALTpMgx12",
  "key7": "3FYWaqFtgCC3LmdaFjYRNmFXfq39LgtWy1ykERH6EARAAxCM7Skm54km7tqKVwhR5Y3bKrUjoWvZVo6b4rf78hYs",
  "key8": "4W3DNKveZuJsufLnVE8QGu1wwJb46zfxniTET8sHewi8trrMVu4vPcR1rCiNqHb2G3RZUcbcxGk2VAccWx6fGE27",
  "key9": "4B4UmrcEuqZA8RESRGzZpS7CgwZPNhE3yHKn2fgfXnagXKQ5XaoyDPUmLjEesHigEZYMDYX1cgnPBBVeXRssvEhr",
  "key10": "32Euru7VrhvUeHQ2RXpdV6FA8N1ZwwWGF6it5Mv6voRtw7LVQUS1yLzdHsyMpc8dLc2QiKo8xMEY93bj1V4vBQry",
  "key11": "4wqvTSNEVqp3gfMqYy9VyjMLCTFCgVcJx1LTZf6ZeeThxTRK6NycJpssc1CyKeF7z9FZH7jm4dx44P3yA8fF4vYN",
  "key12": "5xidrh1udzYaYzYzBithTAnSSgvdjzBNmo6SjdV33GGRgfLW7zgoCoNeC2vJV2d3Dwgjd5LJbSAZbpuiYdtV7KaT",
  "key13": "4kxtnsvVg52LJHqnCyWiRwc1qsuMZ4rCYCNu4GrPjoiveqtMLzQHW5s1TyRd4ey44zbxbxfesyDrrguFqi3a6dzu",
  "key14": "EV6oJJM3ajpKKJXtGX9G3Fbn4147KqWH6mxCoHKj6kDAZdbaxgQ7DTm646REeREt1hZvM5CTNKkEq1mrDTyfMm3",
  "key15": "5P5Ue3K4k4mBJDuqBHhGyzFME3P1za1qDhWeHtcqyAMxn31xTEgDgdtGYsNcJ7xeAEiXrPfmbx38S14mw5NexxxQ",
  "key16": "33gxrmJui77uwtfDryxaookba1DCiCbowXjpuYHWpEtAfpu7y4ExE6z1V6aRaYioa6au1btBfZeK8oLHm2bV2r3",
  "key17": "4fTyFSmfWvo7N8ERqxTXkLGuLX2hvd6DBixu2tHmxSHK9ccPdVqKhUEBgBcE2TMefqR6YQ1z3dSeSTMwj3w2nzzV",
  "key18": "4LccVTAxtsCrssZVaQWyNZGeiBYFKLu9eferco6XuDEqBYGeaP7bJR229PHakpVe7ftT5qyHFAxauueDHYdXKCV3",
  "key19": "4EqxBiu2XDPGUGB6U7vAWZ6pq8MzbTfe5yz7gdcfWsqqXurzoCoALMRu5gnac2Ucqr4cgMmcUyMPGS3XeBsrBSmn",
  "key20": "5CArAoj7KycbmHzANG5p1sa1vWvFveMGMDrumKbDeigGiNw7EQ3XJk1qJJ9rbkQ6xTS3KhGFMRZcsdNZTrwvCQhS",
  "key21": "2QvPHv9cJaV3AF9DWUoCRk6funmATC3NLQaCrSFKvjVpF4u11QNDgwdHCunn5HXe9TqPfkCCupgP86byMgVvAzPE",
  "key22": "gfBGqsd6rkR4tB9RAQddFdhQZmZCepHMuhV3UqfLkrPGvs64KmNthAYJdaChd7zJKDtXCjcax6xtk7mdqSZScXa",
  "key23": "2xfqFmYxS8eEjKtaQo7F4mwBps6o7kzmkafB9c9MtMrdyKoKUoEVLLp2Jp2UFWgzwtDJ53CgYS5vNjuG9zWXkKQG",
  "key24": "5WasgVp9dwK7spoTcRMJcVmc7FvQyD1E1dvfUi2shanvQJmd4JfaY2JrUveja72tXaTzpLEpo5o6pC8RtqNRp2LS",
  "key25": "4BY6JsUBbmuaJATzSnBdoGhD9bYjuchCaCcUxLT6i2VnsZs9wgKLkKb1b5JiH9kSzpvqQcMvqcpSv7S53VXQEsqY",
  "key26": "4Q7AVupgPqpHgeV262JKp5WH8yoD9Z6MTBzuouHvUNBHAWfNdUUi8qeCtRp3mMLzcwpYvHgGBhFibi6DYoKjQMGC",
  "key27": "4PrfvMbrBgQCcHG7mb3ZNd5xzvPAMjw949rPNtLCWGeG3BF93Dbvvf1bGej7UxCcr88ggh9TtMSMYTJN3nvSsVbY",
  "key28": "5uEhqFQi3D6ahTVp2n7kfb89uuSsMaJA9NxEd1M36Qv8vCY9VPk6yJ8oqzReuYVcJpwxTznpszDRJxMbzNGBWMss",
  "key29": "4Ef4ExDqzc5cB5heY87TyRffzqpXtnrBTQgDzozYsdy6XEhzFkp2NfMd4v27ndLWXx32LWsqeaecYYG6K7S2fyum"
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
