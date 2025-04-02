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
    "5YLeSvMiceVrFBPkT9DRFRGQG2bFqyonUkEmRyUaieFfAofewb9UfsYkmkKQ1d9iiUSCtF2VCqWtZ75dmG2buRrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v7s89Hsj78NnkNsd2ivEe4RbdajMprEkdEhnU4P82H5c6c9biJzFvKVQyJqN2Dnmw6EqZ3x6GQLTp2kwDQS92HV",
  "key1": "RYY1EE8NbT9SBLGm8WJLU3hoso8wF3ReefAuB2zh7o9hqDCfV8KBhyyRE2ij96M2wbUDzHzn2sqnnBf21P9rwcz",
  "key2": "5gazo7RsWekqgVxARecaFXomei57txVUoBd3sh2uShEnRHzdTLNUfiZpCfjW7XeC9oqDBf63cYcAaizzsmv7pntz",
  "key3": "2ZTjKdb3bqDvDaSzzCC8E5Vgy8S66jMNsc82SGAiFR3Xj8z7Uw42mpmppQLzZs3qQdmgJJYgNwx99vE5Gr4ZydbY",
  "key4": "2c3KpNgvJuygJbrU8pjoCfHimNttFb4fz1h158VQHt6MzjMSps7jiHgyg1nEMJSXkoStZfCYUtEyt6R6yiieYsAB",
  "key5": "469yUoFU3ex4aMMtaQwurFKa8GgnarX47xKeWmVzkPsqGYD3Ee2CysV2HJRoXBMDTNtjRme1KjbNGXCGTAHH6yQy",
  "key6": "52yKZP8hnr6T9HhxmZAekYgrqEm4rf71ARz7BXTEAcV8Q2cky6C9WYNayfgnLweuM1YYGuTz1bMuxVDLLZpN5Avv",
  "key7": "5bngUHaedRPChRA2A693hbZs9k1E6z3F4YPB2PF3T73YfWqha178MdqeTtxyNGqixAbpq9p7Tda9UU4eqBHaXsBa",
  "key8": "5VAECGURp7FW8KxHM1T2pmfZqQ76rpzsZJtNFifQPtJFhCzbpJFZyRJ6mkobPi6FX4MDV2WQ7qQGzt3BbBq2oaKC",
  "key9": "3mrGx7pdKC5ie2jy7qtXbmUjqLkLqBBiLRPVFXkoUyB8KpcokTpFGtJYwpeiQKQxWBwExBe8Lg29FfxYuDWo8KGu",
  "key10": "2fvBhrY1swZD9DiYs8CsXeT8o4GneodYq3dnmDDsJQW6QiQHqEBh58i21yNe5XbD9iK7ZYJCySC97Lvqwi8VaxKA",
  "key11": "R2wVqS35mpRdfrcSya58C3v7Byd3y3CQNbjxiVrjfyh1PqGDcd58wV5cA3NFCbAYHb7yANBAcp1BdWeBZdk4qLb",
  "key12": "2gvwMRjCGDJbsthMwt2PQMdUE6NsfShyobdscH8CEowMEEvscZZkTJdr9Gq6wbnHFZifu8tiFoFFo9bSYBxyH6rX",
  "key13": "4oL9KTXJB8MXvN8QmbKECDd2a2YS6yc3ytnr9a8tvSezTLkjSykfvGX2iaoJkdh9FXtoqkGiABKvtrsUHAZQUCCA",
  "key14": "XKTLGMPc4rYyRwWX9AtMhmqJj8jnyDRV7dDnqwrgykJKThoAn2XMhuoagFeyB3wTNh4oY3q8pSqcbHXjgK2LpHW",
  "key15": "rWS6eDeUbLTudiLDZPVYkTCyjenHZKUnjdkeSN9zX3XyYjo7M8QtCVSz2PfMfw39pfT9VtmaZ6XaiHvsavnKmz3",
  "key16": "3MSUuPwu2ZGMZy1zR7QhqHWgJumhu7iqppE6xRjHvf3fY2kdz5gkiognPfgamCWMJUDLGKykQhbEi5bU1rhHAf4T",
  "key17": "4W6uvfAiNya3yNiHJWf2hU49HhRHeL6NaDA6jEXasKR7m5Uegw2vNH3AmQD9ZPUCRFPwHV3MS4g2eUyKvx9bmVeS",
  "key18": "2SENSo85rUCGD5BbfUJmggbVaLVgmFAi6TxVcFgJ2xRTbX31kLGeDNrNFJtKE4Hxxt1cnCYyU1bexWwm3Tq6PVGD",
  "key19": "4oMqjpujymdrA6WWtgJRXpwXUDsKCfjtm89zVChRofo9V2qG57WHUKgUFExLUGJkgKPrxaGXMgsW5W6JYdRP9fPg",
  "key20": "5sfnVn8JTxfwa6YpLErcJzYaKfXGZJnGYEtbvK3QiGR4FHEy317vb9NFbvQXinYhAeScQmEAZztSVKa89siwBqb1",
  "key21": "3vqJbjLrhx7pnn3seGS9KPszt9iFcB8XRGUVVyxb7RXACvFe2ETNyQeBx3vk11NWnXrKRu7pExpwAWbiCjsdAgC",
  "key22": "HPjp8BNfM2QxG6JzKcpZkZxvbm1oPePkKvZCqzdzE9HpBKJTzR4aihzyA5x2YbgTdFfogLjtR39v2iLT9pZ46QU",
  "key23": "2XmLmsNpZpCgePeCZFpaLzkd2xauK937Wx1ZYPs2sgETzh3ZRCPkj6d3UQdwEu2AitqhiYMoE5arjkEJ78fFFed2",
  "key24": "2zQi4mxdHJJegUh96kHcWUpgngAZ8VXwptyjk3GrWAW55HmS6K3wbogQS5wD3Sd4bSUWHbES9gtyVMoqzbqoe8WV",
  "key25": "46yMcq7PCpGQwiYqaELrLrGPKxYDk6j88RspzZxCDWeaiB6kgTqPkkoZacK7XsiRcVMs7puUujXriSiMsaWmVqnp",
  "key26": "dqfrYKYUMmoduwue2PJqSVfLhHoVeebFJUrhLuZKEt6NqwzxhVqrCUcqorMYe5mEup4eneerEMr7yjLCKurVpxj",
  "key27": "4BEAxG5RPDSWH5vDixvzm5oW1NPCSpER8jLCgPiNBLmnWGVEX8MZCxNitWfypsy9knCxknTtb3MtcjoVgmsiKxRZ",
  "key28": "3cfG9EpeD2EaGiLT51arzfLYSLmX6LFUYX6XWEhSbi42k1fC2BnjxJ3WPM9FheR5dFuzkRPmuMTA6CnK6LRdJY8W",
  "key29": "3enoKMUjYWSs1VXrVpDLHszqaKSHwSHuHw35MpgbWfH5uhJbsFgyRwCLD1AECDPa6feJxvxGzsYKsw2oaSxzmUPU",
  "key30": "3CjHa6UfJVZbbaTNXmzETe3EXr7LFXgtYZSNFgxtRPZwLqMkfMSZ8Kt1arevRSTTWYVL4PJaxMCZyrKBo1saKERH",
  "key31": "jjma4bhsLnTPGnm4UF5DAfwQHsrCUX4LrkRc1J8HZEDChawxwks1vfxPe7uKoExpvpdSUyw7ZXe6JbHrrF6PNCX",
  "key32": "5xQi8tTvP7LQd9vcePhpBYREwhkWGYCzVKgD3o573mB51YENETGwc5shteAJLAcWsz6fz9WHLPQKH7KoW8PVji7T",
  "key33": "4RctUAyMWC3a6W74rZxH67C4SL17rHRH4qZfWQgwwDZCwgB44TwHYJZEE9jzsbA9wT75kLVJbB7qEM63C86UygPz",
  "key34": "5Dcd7X39p1KBMAtgochevmxRfsoJZ9xnRXHV2p7ko9M4dNU1JedqeD15KhkEQnDHU72YYdRfPssYQvcqczbAJXf1",
  "key35": "5qrxrQfYYhPQjny8PKnNTuVJZqV7EgGCHxVeEsoQsMV4igoWLVj7LJZ1cmvHxwnUQXtU7H6e9kRpAjc7crdnL18a",
  "key36": "4wytjTduk4iFWm3BLvZ8LuR47dPT1SMTRQCsG4xwwXRDs3CHCr3aDfjMgU1SGSs5kw4nUWBqamw8qMRTyeuFMJxT",
  "key37": "2gWjJZWKNSoDba6qZYVrbPfRFnnwDPNyss8ZwWyjoa5Ujw8iqE1vfKVLHE9qwZMEvhMTn1RxMbp7uwjDdjutZ1fc",
  "key38": "5dLYcq1UTgAyt2f29hT8nLHosYbFwFTVEdi9Y37AHtvfU8KtPJFTi4UVqPB2pngZM1aHvyBrvyoGWY6LeSh4rfkc",
  "key39": "4kTwqPWk5UrnzeJTZjb9YUsLuefdxSNNnkxBsp8AMEQ8zabw7xZmf5zgPoK9RDLr8GyVddGSKJhQJmAXn3sh3rSV",
  "key40": "34Rwt2UDKD87yw527KL7y5g8AatoC13F9MfPjaYx9mgVnNUj5veRZUzEjjbTMR573UEuS2NW2HMB91pBE3hM6UUx",
  "key41": "4LK5SDdRf74wANipnCG8VU1hwqXL2vwdmXuUJerE4rvZ3NMWM1FuoyP9mpqpxcabFE1JaXaog6XcVznMGmXyzD49",
  "key42": "4CuC5KutWrQobvzT4sHvrTkaHqUDTG9kkr1aXGWfY4XnwW9yzCxZqJh5QZ5VHsCRcFcy9ixNj9qH3fWrFPz8DKAs",
  "key43": "2mLJkB4ZdVsBQmhWEGe1mYndA4gR4iSHBy7fuTdxzVMsAuy7hiQnTzFcREjMhBmtPh7jTe2fyBFhpcVEXWVRP8KV"
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
