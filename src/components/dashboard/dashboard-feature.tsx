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
    "4d3yUe2DKGe5KVwWuDuAAYb15L9qv61YvHdGk9y7D6AbHnn9DrbHyAq3ZJ7YjZqdeynFCLdgPNmoU2LHb8QFm3Nh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MvvU629P1ZBZYwmfw3xe9CS2Bh7WV1pDvafAzFQsDdcFfakEnMGetBZ6mvMdAV6ntNoP5RpYvvcQuqQcq7UFDcg",
  "key1": "3umPAPNHHTRDjJfoq9EcHcU9R7jf6rGPAXwVUvYjzyeQifWjc4mfuP5CLGDkeaegtANVMQrxs3YobTopU8MszABY",
  "key2": "5XetZLGCbkHJbtCBoJeMJLUn1cmHwcfTnadgYtPWk6vSEKd7eU2fyxaoovVsmprTYvHmPApq1rY8scUyPcMsEC5f",
  "key3": "3J4zeSurWHXcrPP2oCx36c1Jmfw1BKvqeDWha3bKBVexyvijTSSU6qBpiAxYWpBquFEJa4eRS3yDRVVMcBwBT7Kb",
  "key4": "51deMQyfhRyzgwb45aXeJDUeyUjJ6AirT1QYQF51MEksRt91EatVfKkWq5Pa7z64WuFLU3goFJ88Nqbw2ANQrudn",
  "key5": "4nZhWajov6VkzsAoLXVSyy37bfeXyQWkgMhPpSbw65y6cjUKHb25T54vN4fMY4UQiUQUKGuqWXPLZhsvrxp96MLP",
  "key6": "5tPAgVgdeqMhweWpbe6nUFdWnqUzSX5aNp6MkBPwUFdhUcN2ZjuQKsaeg6joqAqu9sARCVjnyFDjCicR53xPDo1V",
  "key7": "4NVkrZovQ6upGjuZuSjSABPp4tx7Bic5A7XrrKFBGUyrygETkb4EB4fUQEy7RBq5zhQFxPZ67Gs7Hr6EwWTchDmd",
  "key8": "5ag13sCPGpKpnfjNCBFAgq9AXWrHC9xQSZSQi9KrnvYWKbF2Fnhn6bASnuVRvbbztKXxeycMRbSdwGUywfYbUfKn",
  "key9": "34cGE9FTeaFX8eCzugKeWfPULeu6oUVHGgaBhjxDW1mGZyMP9vzS22ieSA5CV3dNzy2KkVut1j5RJ83SAta3ksrx",
  "key10": "2R2NbAUWnVPNMxUHWg3X8eqfc6jWGcDcsApydmq5zU9WkESgZDWKWyn6PpXDhGXXVWkhimESgXcPB3ZwDTWfhJ26",
  "key11": "3925D9QYFbQHgqZvU8ZHGtrN2GmXbUiYXwSbdpqLJAGiUvDzMtjgFDCXZMJ4mysaGpZMEwQG73rqJ9LWZuXVDeTR",
  "key12": "2HNVNdUpUsXCR2wCXRk4B4g8KEeMhPNxP9Yb78a5bmokiPf1b2dE4c5WUfmrn6ovxoAEd76PpSTmjvznYCKguT9q",
  "key13": "4hGZsgtTzFChfL5yQzy8Tpxj7FtFhfZpUaR7PzpGQTifFrbqL8oaQiEKa9GfuhhZk4vaTszUuDqbdpRZc36b5fKf",
  "key14": "vQJTSmxwLEPHkckoKVrakafPZjah1DWSFycUguzJqw3jMM9zhYGNokJC8TM1jStowgAUqDsdJxf4cpWHp2mT3e8",
  "key15": "2DJCeg1gJWjPfoev8EhVB7pnZrG5QEZcK7fgUkgUKSxTqpzMwXSogV2zSpCPDJRrN6hHg4bFxRq6b3M3Fyw2o2rN",
  "key16": "5BFRqHuEpHrPZBw8EdTVLcxRbSwALVG1Ln4AkpugMAUkr7Z84UboAL9i8gTBiL29w68vHAyU9ep9ecqN6taxpzLM",
  "key17": "wpUAFYJsGzGy5xqXfhK6EmYo9hXwYXUTbfWNaHq7RsYJznir4WYqYMXWen75vgKyE6dF4hNpp98cToPHBQrF3eq",
  "key18": "3E8kJymS4moHafPJ48YqV3hfhL4VnUv56gxKV3GHhNZ6Zh2Ka3uyZDJAenFpeUgMKKQjC2F3VoXg9YHB4KsELb6S",
  "key19": "5DhRk38CzFmJvEr1mkASDqkS7aihSvGfG5mUhxfQjgH5jj8tzaQv6gZdh2tsuxD4ZrKB1L4wzDwhUTmhFNJK3yG3",
  "key20": "qZU6ouQV3bnWVC59syBuLrr9w5xJKnHiKXWWmG4Qes32ZAfP8aLBvhkuN2aTGetDDcUqFUFSzXbbZu2TmvpM3ki",
  "key21": "64GNXhXj8UPXQvYvt1eVLi9jTiRBhbxy6ffv7GG1rKR65FDeUSVuXUDkiwJwmKNZY6hVyxqhEPs4fwWjzuvzCrHR",
  "key22": "3Pz9bDp4txco3oX5cF7FKFevbCdsppyB7ZQMavkputSVuN46tq5QCbea5amVUwDFPZ28aKyc5uAWiCx9d6S8KkLg",
  "key23": "2MPiWmhKcTYtgCggPqE2fqHTp2GTtv7NU6FxeEEfu8iWTucF5192qgotYt9DzVMofDm6aRqoKTUDy5vtQBKtqfQ8",
  "key24": "2Uo7625YSurRasoXARtnQMqj6mLePrkVCZLMHAWxDHxXV5FrpdH9vV7vyNQungtjVhcXJjZg4j3HHgLeqGUcYuEE",
  "key25": "hq5F1HT89vSUeBomLFB3hdezfKDAjwZuiyhdwD9WHkyu9x78S4LdGuBKQ8rMHLrhhFrFEU1dymQhvmKhV5xHyJn",
  "key26": "Mj6eDLU27ATWwWoe33tHaWfMF6kgQiA1B726RSR75ieCDtojU9kEvZhfFy4m3VTvhqyT8vcq7qDSM31RHFyRnp9",
  "key27": "2R6yq4TpZCojzqtonnYRu7RRKz3Y6pRD9viWgot4nFtcntm76pzQVaSioWYjEG1GbsCvHms2WTsP8UaZGGPjYFd2",
  "key28": "5JTjDbzi4k92NtHWocx5UMouVZW3Hay8aeVHA4wmoVTC6bQWFWjYTLFRLBaqfz9bevUokvXkFvAAKGoox8akjQsF",
  "key29": "36fPjtowBsyrs6Fw922gcNVhJg4YaVZyMyAJAxmepMARvbJdUExTJXKEQBWQvZ2PAhFgX8bSTMBdNBsmePQpqJJC",
  "key30": "5ifjmGupm5RdAm9hPxNM3mmtKjkSXotWK6GJ7Yhznf9yv6abQTZn94iF7wJAmGS6UvXLoG57sBodGPaGPGadUrV8",
  "key31": "C8SXtQfZN6onJEHoETkCYWVfoPdLdzLgrpe7qHvwFhz8AKEnic2d3QEdEoVCv4bb6q2inAKu3FKQabZMgLBahG9",
  "key32": "vWkSLR3GSDr7qbSLj7EFcjvtSe4UjPr7wx2HgpNwqmyzXjtyXYsAFzA8EupkgQHGSoFuWkprNjQmwtfAHawNWe1",
  "key33": "3FYyAVmnAA4XvVKjokAPQV9qbGxoEGwnztFF7PB17a5hkFPJgLH61znKnLDk7rttWcwk4PFKggx78Cisf8jVuwmK",
  "key34": "5UQyKAU6YC67xCHHtb25itPBQVnAxMkD6gafCZyJu9kizLKimVLuP5TejUMWnCWfBXzYRU3RuR6j2sRoennBrFbs"
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
