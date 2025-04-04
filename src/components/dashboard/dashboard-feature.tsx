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
    "3fcYiRo2HADQZrU3V2WgQPyU7TZQk11v9kz4VEZfSHEF17b1VGyy2qugYQ75jZ4pAoSaFy8MGvVsH6UdgCq6gUJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RQe4seYH61hGLXQWQPLrFrXTFt1SnrgPjj3vWWup4Rz3FM8ZGHeSaUiu8DgTNdKDLXAEygNvdYDNLD3aoDRa1c3",
  "key1": "4Kj3ZpJwdzpefKLnWWadhw8KGFoH82E6jiLry1cqLqxm4ZpuCfkCbskTJVQaJFxaouYBxwNKS3aJrJ18eE9U8KVy",
  "key2": "334dnfH4tJjjCKn7caA9tBWhztniwCYaLRQAa8oiUkPq6nj4FGGGcHLwxwSN6iiRZw7RWmi6dh8kVxEbpqNou3Le",
  "key3": "3QFipxdifWJ9zjHP7NGD3eR3j2SSat2m3UZgMYkGeBXbPY8RYWYce7ftyzwnu1NS9mxuJapEuY55vXwdPEc7ahGy",
  "key4": "5kUvMuyg7gCTrzhRnKFrbznPhg38PKxBz2EbCntVVf3CfnwR5xVxWHNmK6gAzJwEgnV6KdTf1Scruevo5nhgQta5",
  "key5": "eKNEjrcLX1bXBZSdvaXoNjS55Neq23eEywqXDvaw2WYbHyLVdsSgAK82RtSqgqQHcC3rfUx8cJMQBx2JjwBKSJK",
  "key6": "5nAkNQgGKs7zzjL5JgYHmobdtJ2TFT8gz9ySAupQmwxbLpXuwBQe3YU8vXD9eocTiaAH4MUWreQDB62NV5BuRRAs",
  "key7": "4AFcTU4wrHx7qBP6d2n6VmfbMpSNL1Ap3cuDVdWzCNnNSMUf1PgR6A8nUc29V3SH4kNiB3V2pAAPB6eDQnMsJURo",
  "key8": "EeYxFsyctySa5LEE1MxvjrRocrhPA6kMs4Ybr5CK72uubZFfHP9LkecJ1h9TC7bmGmRzpzeBnYNgMgcVAMiJAS6",
  "key9": "5tHtASCUAg1WH6sJ8kRxwuoTjPo1G8Vmzwk8X2SVVApo3zzL87Q3oQoE6wCXmxKCZ2QQkvg3JUzw2e4Rzm1x3hSv",
  "key10": "2MiGpq8TteCZdoGbvXoRgsdGgXPn71mvK2rsB3SuYGuXXVJkXMwAEN25oCaxrwRnsY3nfr6MU4peT6dE3PZRABpC",
  "key11": "4nk4GEpQ8KQ8bGHVvJHvSevZK1bXTptTuvpcYW4hwCBkGi1gUijft8QkbGt5CX91ce5riA7XAqAaMiM2BchUyn2x",
  "key12": "4UJ1roDUtq1X76owjUfvEUG3XfMThd5SjKXG8XUDppCVgi9aQHGStBME6CkpDwfi9fbJrYUkngJYaQ1Xw93ei2Fk",
  "key13": "5KmC8mRYGDNxphaQU5HMvhhxg2MGpAjuv5rv6Xj3JjxgN2uYrYRLWvCMrGGgDKYh88YGGEMdFaf4cx8SnPegGo7A",
  "key14": "3JtPXVpSS1yYREhHqTgrJy41iGUH55APcCPZzrX3LkYSEZhgXwNqu4NdcrwCSQNnNViioc747gZWV3XRcuQ2FaZ8",
  "key15": "5jQi1HFaS7HuEWThTVAwHx2eigVuLg6ehYM6NGtNX9h3AKVWM13LLCNGf2MsfFSwpbjwMiX7kKQdUuFgnAhTHYLy",
  "key16": "Tt3mWnr18WFMftuxiVAZyyGLYu8GPx5vvbZMVFTmhjgFReZXWUfYQ5mczsXD3zNsMKXdXRiBPD8an4UvCxUqMiZ",
  "key17": "owGpJwqjoQSh5Svt9RFZmmh9n4aUfqt5dFsg81Hi66po2Rn1qe7UHJ15tsEWr3ANLTCtZZR8g8n8ccjSDQbzERj",
  "key18": "5uEZVm1TbQxXZZJAyoqXMgVQTBU5orWrwB2EZ598H7nrQTB2i8bwqcbxFXLcS4CdH8MyQukMQ9rSY5718F37UixR",
  "key19": "4gjzPnBH9CvM4oiZehbnEbfojDCdd6i1Grcboe76K5G5ofckPQ61QwMmkshHPKWhnd7g75Rdv97PMmfcgETqxS1v",
  "key20": "2mvhoovt8vpKLLfo68ds27iYPJMkjbd2nXueLpXMbywtHKj54LUMB41P8LytuPR6rvwp3AD4KwPTCqNArrZQ6Gqp",
  "key21": "37ELqinPTMpzCPRmcEd3Q1fij2DHGgfaxWs1YJteQdAjbSC47uFx5zSLC3eD6RoxbAkmrip59HJGnKNNaT4fMkVo",
  "key22": "4yspggCMF1wvQriiX4vDpEWzznLgcQx9hb2T6pA9So4T8EhDbXb3Dj1U8CEx6mmzCxJZD6XiSV4gcajUMRr7vbUo",
  "key23": "Zkza3inDpzbhfA2BgXXTDqo5Nci4NbYMZxwLgW4SDKajs9hurr5m9MVrh4dGEK4zNyRJd45fafRm6ghjZfyFc6q",
  "key24": "kKjCtsbHYWC4wAnM9fKrETpaecPhytbgeHkJAaFQj4QySdcjNrDBSyN2m2LkNtv3hUBFjQ1KwTTWTBirRRxWTkw",
  "key25": "32WWLoTZKoRmAJ1s5U6RP3p57L7BGj2FjxV6XXGFQmrcdax9UaKh1AEaReHLLMB4iDyvSRmgzFxwn2PW4ugmZ6ez"
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
