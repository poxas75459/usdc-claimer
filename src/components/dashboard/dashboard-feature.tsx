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
    "3bJNBJt4Koq4MZ9oX2yhxgDjthimqoCjnpV1YLQgeYvce3T61u3it7gUHs2d8uMY9wV8BqFxyXR5WrEEzGDS7YsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4de1KYSCtFuFaqtyLKRRqfwE1CoxzhNWaCy6Cu5dTXvEbysGiBge7W8scmVZoTA22ikhnjizqHy3XTMxBp6XFQPZ",
  "key1": "66azt6RAwdQVgZb4cJMSWo96L75r1G92HcnbMi4P3WY1A594v8pQpSkPFdfCKWVQi4DMFz9QazYNiHTBHNQQupax",
  "key2": "61bgddhepsmCYtangwuHTHu8JiCeb8S4FHUWiJSfVYHdvbn261SeRLuVNhLzA4xw4yQhiuHQwuWNa3A1PDCsWekR",
  "key3": "2wWHeeYEvBDzzeRFbYeoicXb3GbwrPoUT1qGiF7Ta5j6fmdvq9GXRcsYa9w3XbNeJJtrNoYgCq1pbSZFRmWKW97Y",
  "key4": "FnLiM5R4zdEgDA3v78HcFwEgeZhMk5tZetQzRdWhQM2oK2XNwuBJKDz5L7HqzviyYAXrqBMQp7Zwsd5SXzNsgto",
  "key5": "3nVKAKS8SioM5icE9UUeCSAnmG24TfS2e11NG2dKFHMQaLYkaB3jQ61S8kxb61z7kRBo1BQvNGTEBU7qwvvUwXPb",
  "key6": "4ZeGerPMAcH7E9q1jRPWCo5uNhi39k9tnwf8eBsF8yotsFjzgEEh832x8Q742ypzu15WMaCnYK9VbYhfbv2WEDKK",
  "key7": "4HowwfdBxvRR6hyRtrfiymSLLR4KxQfXdTXF5GPzA2nBsWsrdyc5waUigzbUjT1vvZAxjE9G638B5o2VuP3ZMg8r",
  "key8": "52yK9fmSnfpjBQJf64FGpNHF7GXzw4dWq4nMUNpNtCKo1vboSJQmXxuRsgVDuhTWgau4cVMResnQtNSiJLfq6rCY",
  "key9": "3RsLWSCW9oVFDTryGQamuCWSeoYtT2yH1wjTEMhXq2BTVUqCXfSr4YRLaqiQd44wMZ8C9gwXou5ggoB3o6oPd6jb",
  "key10": "3UhPBrpSnf1mG6E8qvwHreEQzBpQZkpo2uLYX2QP1pvGve3BNJBNwicTRSthKsQ3JwQuvh6hjk3GZ9iFS5etn1fK",
  "key11": "46mC8pKNknnteLwvexvKdvp4gh1dSreUsLD58wU1bGjmmN9QLjuW4moMGGAfMkhHiUPUvKv2BZZ2ToDtRtuuk2Jp",
  "key12": "uKQWikGGLeWH4Meyd3nTDsYTXZu8VF7KJ4FaVCnhZauQGQXBViSv6kPJ51DcLZ225JghftbhG1BTnEk1FsZStm7",
  "key13": "3jW2jsQAGrg4ULt95RG4RXppi4xRa6CvkZCgCm1maspJB4GB48yT8tqNrJMxWpQvT3xpj2uQvoZZB4RNs9oLq569",
  "key14": "2emYtmEWVNtvdeqRkW2Usii5Vwkh4e5wFFE2GeVGpfKAC2b9EKjL4iL3DPTQSKMgFAL5GSxACyyjQfpmtQbgNshE",
  "key15": "2EcVht1UxGSCvm5cK3Kk2e3Biv4rEQXG5DVL9ngpKnKAzu8YHXfvunAq4tLwTWBFFeCna5siSZJk32r5VZgJaH8Q",
  "key16": "5MwQatYGVfUXeYBFTJ5KAYXtcrD4PTuqU6xWnYSSv1eny4os3kRzkQDgUkStc1y5L5WKQ52Pa4p2c3MpRTuvvjXi",
  "key17": "5wyaNC1oKUAnErXZt8u8akYQWyzYS4QVRyJaHGprxA24DTVCN9WJWxSQ8V13jMrV33hdoTqM8v3xP4mS4ctMHNue",
  "key18": "329mBU1kVaZ3zNw6sf6y6qG9sQPiX3HN7iAK8kCgL2AnaazXWSH6dJpM5nmBWTX4XgfYkDwRwoHpAB9tGm5nruro",
  "key19": "3TuVGN6aJtwjTM9rTks4rzKC6v3sAAJA92yBT7wuEu5PzuQsfyutSCTVYsCo5T8Q8nZLFKuu9pf1GFp3SawMxUiC",
  "key20": "4tyDxP6o5WGzXEiUY3cKRavK27gve36si8W6xxDDgJhcj9aN7ERN1RKmB83qpAHEodmoaFdJwvJ24822CkCBu8Hi",
  "key21": "2BQwAY1YKwXFFXxE5ET6mqXQA84JD4t9RjVGBYy7s9HiPM6NnkDHBZzaRBm1kCNUoYVgq8K9QeVNcDCCi3xejF5i",
  "key22": "3dtqXjfbsiQqJfTcQMut2wLnt4SRkyP2N998tsaAJtBQM92ZbVG5dW9GJQQG1spuQAonXy5MSYKoTm5tS6xEg9Q2",
  "key23": "43MKyF8tpyje5no9svNKKyYfKh62TuEhb4TKgnubSsjUhUfQGE7XAiaz7yZrp61wBXJ3hHXtmbEM2PwFaFqxd2by",
  "key24": "45p9nc3gfNfGoQ4iCMwsiFn84q8KMYTU3YTMWaQz6rUfgqxL7JUExX8V3xd7raRSWNSZHTWaxNqxhL3ozJiNHr6w",
  "key25": "2cdiRpN8vqPXDrR8fXsUQX96UUnDg839Ejd3MwwUTECaaRssPFz1hLYm1oEVdnAe8B9SAWacaBNR9bmyocfDoB4B",
  "key26": "3ZmD5eKyzLnYqQ95jkPXrCKuxdaEEuLC9qntaLegzWoZEAwFXwmjMhVo4tZ4ZesQiiGRQTikv5qoECh4cR3u8z8v",
  "key27": "2FVX43tFAyHt3Msya9qfiwz4PCNyiWHTY57WuXwXY3CjMTQFQNrAq8etbxNgihGEMq8hM9M4w5pjndQTCuTAgr1t",
  "key28": "37H9XTbkpUXFhN2QgX2YvnjkGXv6u4UwUJceuvho9yvaipzx68Hb3qB7qkATiLNWfqVEZsvgHaQ4MHeoUM7EoYZF",
  "key29": "uYPmUNiNKLSAYZbMzuHiskKeKSDXBfJNthTr7Sh3j2PoBSFjWyAPnbyE342gWWGuchrXTS6XMQK1wtDpCe4D6RN",
  "key30": "5cyeARCb8uA4WRptdwyKPoinV75CDQrR6jCgeJwkNNFrFwCFaNvxYE3WUpHNm2ZpbzfvsBbur3eU1YVzpBiUTQgo",
  "key31": "5dGuj7ysfhWecwXeAufdtWPcGvNmvm9mTMX4WQArV1Ujsf9JgqibCFWmwheCHL9SDP1dnRVzQnP8iwBhHSAhHjwH",
  "key32": "2G8AtThpiD9AaE8S2Gs76d9EB1BxRZTG34eYPLyJYVxsm1fcXmihxBBtVZMmL9cCBMBNmH5z31fqiqbbczv4T8pz",
  "key33": "Tdqwa3fKUVBvTuuMNiRyQAgiAF2o67ubCMiQ15kzF9Au9CiJtWVQ8gbxkPMVMgKQ6VusAUKqjUthmyJWrRhdgcM",
  "key34": "3PgyhdG2fePLX94ZXQh9mFMaV5gLzaFM6oX2bxPwGsg386sGiz8Jb4pWR8itxujmPZa6q4R8BiY1q2drcre8ee2j"
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
