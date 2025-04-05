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
    "65S5Y47YJ2bz7n7dLLvCLPHH2XnDhzZibsvgehSYVK6Yi99YcVGpk5T1rK89584bdfLBpg4wsSMywomKr3t1y47E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a9rgp8N7LQk2b1zHmWYeGwmqXp7CTEM1NNV4xuKeXuL8zePeCiFTzsS7vBiE6haMovkQ2k6abwK7ombfWbHh78o",
  "key1": "5QmdtraaywE6i2FptyBWu1fDngSwbeVohPkDErUX3Yusr2Ajo1pXexFFfEKCwhz1uia8BdgzwCDPRSUCkqKymYyD",
  "key2": "4BPaaXHAv4sE4ybyBccJqUDz7Hk1HPAtFVDs8fWGsmnLzR7nSdQJUmUn5fTnwuSnXP2wAYzx6fvD8HjfnjBg8b2y",
  "key3": "5zgTqZVJBGppz8JRNzBQ5VT313RQsM92khdsDN8GocQyYimBFqChytDDPzL1Fm1PpAzfGnfFRhj2xR6AJS2CvJvw",
  "key4": "3RPpj1HcnxHHZASccApFr8yGyHF1tzC6tUrwU1kELj8UJCWCR7MUghkKwryDTXY2UmQBc4nYynujmT16AsGr2ZaE",
  "key5": "3XVweJTBDK2Peui9HZBaXYCfkqhoe5L4fxQY3yJZaDWRvba9zCAXGFLw3zzjJyaaVTBPoNRvAWyUyUNxHH1Wh1Gm",
  "key6": "5EkyLsXPARvrTNHHF8NrcHrp8LxuJUGGEw5CDTozpnzioVuqj7w5su8AJDkkDdQkWTPG8PUeZFYzbPdEQrVbrnJE",
  "key7": "soirrTBbXNwC1rsW81hRq4HFCFZQbnAGPqY8HtgRnY4TB6GJfu7RSKR75jjckYb6EBbBxb1gHGXDTE57SKunCKM",
  "key8": "3NzHwA12fyerHuy2MTeD7uBNRkZWNbvY5jHFtzW5CeUbghzxWohhys67va8Fp12C5zpCAEtEx3ULY1kn3ithtesr",
  "key9": "2z5cf5HSkqfR6wW1KETGdhvRUkG1SMjPhzosxjfA9Jec1sTVm1ztqnfpDZcsLc3V8V7HMEDkyuv6EGKepxMXk3no",
  "key10": "5U264E53qDpeUptw9CghASX6Fir8GuJcazkfpzgqWpvBswYkAT24KWgppHf1s6cZErwuwtc5fkY4Sa9wCa4LKLwK",
  "key11": "3syBvH6GNwmum7sSNfFmujYprYC3AWRX6ZsGT48zBzQvnMBhC9bgh7Fb9EZW88DCeMB543JgkVPNjvMpe7nUWicL",
  "key12": "662jASKR5dArUQQyAG5MZC643rxyNFKRQRxTpgzouNueBKjiA9QM2WdaafdL4wtCHhB5ff6yzxey9LMvp6JUroPb",
  "key13": "32HDXkBc37jEVW9J7iuSUa9yRHthanEqpBDM3QYiBcaP9264TmktLZDwCRDNLSZRkB5W57E8okr4eojHLx2Kr4nh",
  "key14": "YmMB7KbnbDGoxbPA6asZtLwNqQ6WJknvUxEtJQWzBjWPje8XwE4cJjtdcQv3UqSM52sPer56jTrKPseUhbuR7Ha",
  "key15": "2cpw644uUFT33hJRCBe8QYZYbfuENFLGs6Lzg4LJdbYLmeg7gCscQBZqTtdg9hueTiMra3jzaoxqkNZiRJCNoufF",
  "key16": "2FgVfyCd1CdsJJMpHBJZH92FNHnDFBu63Uc9FXy1XS2p3fwBgPrejkkyhzGNH2NHX9r8HpNs14gMi6rn9Cen5TLx",
  "key17": "jeNoMq1fcBzrf2w7XKfm535v3gFnSjZAsHsGWuApkcjmnc1PN4dEErN2UVF3wZPRBPrszW6BEScB7SuP9r7Qp1h",
  "key18": "3FTFAsLqzijnCzTWGoVpztaNRpgLb8TjDYnVVfL7JwqEJEzQmzGDBm56ENLiMKtQ45wtEMCPqreKxfDeq17py7Cs",
  "key19": "X5ov344j5jDrfMtUwFmtuRFXirQKsPFPTawxxacDDYFKHb7GNdeZjx9mr4rYZreP3rLoqpmoagbNWkAcU5TgFwC",
  "key20": "335hRww5csbihRSbRFZqAy82V7n7XZpycG5ZY4dNWZQJgsXwRYd8L28hSwkK86eBiGtbbus8GKbeP7C4snjweVqi",
  "key21": "54FEmifUNPPLpaG4ob83uPQD4t6A8QfWsG1tcoyXqMDRoZxVoGAoeEXQA4qqVokTE2BPzH5yLzHML6S2Xpj2agUH",
  "key22": "2VvzxzydoNAiGy9dyU6B8Ywdsnk6keJ5fhFHyhjM3Cw1vAPMEM82qMPS2nUqajd6SRFwewwBMd7jBYF7pSFrU4nV",
  "key23": "3JKvhRccF7c9Df9bZvtRmtYUnSFMdVodXpt8HZH1KEJSKfW16Q2R2R668DfJaTBeh2mCpQAtzWDsSEBwajUY2P6f",
  "key24": "4B9WYyCwbm24sLuysH1CUhqfxdUeLSmq5QDSW3UGNSDHrwuiQsiGMKyujnCxb2o3kwCEWu2rEVuGZL29fbRde11u",
  "key25": "ckNjiQ4i1qDK3kqAQ81DVsMqGnu4Ds9RJUusRWwVHDfq7C3TNJQcah6muEzfvxYTH56RVjz6NUec4jgos3P8RZq",
  "key26": "2LdagDHWLx34cnYwjXXGAdsMfpdtwubA5qKLTQ3wymwfHCN4EVitLAVeZBVwBHtKkB3SLp6GSC4Jg5Kd5ibXwn2Y",
  "key27": "4WHiL1ogp8TrP76Eq4eUM5b4HVAt8q9zm768nS62NNt5VqyBN4hdTVYRV8X5v2JewWYKyefxfNL5X5Pp22iWNR4k"
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
