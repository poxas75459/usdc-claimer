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
    "4CpNGD8ghEPE2EaJp5bwqXFpTdVViyva8Ju2nRrDnN5wE98LKuydJBs6rXxt69PsTNKjMNFbsaHokrxdXcDn9dWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DDBvyrESnsfFiCwkQYEwkRikt71gxsAWCXTq4r1MH8Nbpu8HZxh8NBaCbHsSZGx183TGvcadjQh1L6ZonYFCD8M",
  "key1": "2MXutTyMaSCzcGTa3g77VihtgLehiVEn8e6Zmm9TQZXqsbaqSkDCMyMfQhF7a3ZeoX2PNV5kGsr6C8AMFydg94jn",
  "key2": "4XcXkCdeNhizBAtawVaLF4cFdjpX5Qnvx2JCu7WkXuU4971jnJfB5i6g7AsSyVpR26V4yuW5AnQvvwxKNTgUmf8o",
  "key3": "37CW6two1uWr8ppGMi2aMEiUAzawX4ufz5sqe2HzwjAeXPpc1zQwxHnHmYSnco9mtQujDtP73Mm42vzytzJHzWNa",
  "key4": "4WvaW2khqtb8xs62AT1PQPzayuKMVN4exWDT91PJ7b9C1QURC7kYDBvg3ortXn5rAHdiVvn8ePqXCh4nJWzwuw5S",
  "key5": "2x2VvLZo9GmoFS6B8rei7bvECrAVZGV8zc6cgbK9JDZwa2Sr4FkA5bnH5e4eUSp4ZsTSjC7nTxGvW8jHGCBNpUr8",
  "key6": "3yiRHcHgNR51Bzqq4vLuRjupLnyVYmrjdDnfpR2T5ggax28p2KyoAs3kfhkemhVujQQHQyHvprkYueepGcvK1TA7",
  "key7": "4GRNbQPMQ8EuUyeJvZmVdsXGLERnAJjQSfcnEatGrPfU9ihUTDVn9tZfeSizJd8Lz8AHL7Ta24TUQauXySkt9XzA",
  "key8": "oHQDNR7Tj7eubUqdd2hn3jkJFATc2h9dyZkrhJc1Lkhr6fAsbMqeSqtcJ8XeaeGBi9urcQJ1vkaV6wr5KydD4bU",
  "key9": "3s8HJ6L9EHPc6aK1miCE8AdE5oTgbZhgaXEprfj78V4m8TYdtZw6K8e8JnsCgkbjnBEa9dKqagK7z135E2EhC1r3",
  "key10": "Nc71tmsju3AEts9ifdRtYTLjmGqxV6syHpWZ1on66J4DQTZgK1YEM3YzsaoTVJTpZqthG238f4K4nNs1tm16btc",
  "key11": "FxLmEsMcYjMRGcRAJY45mn7Z2u9g5k68xW5g2XpBHTjWg1RCbejezNn2ZXfRbi6TQHaJxveGqGmP3dfozDCU4r7",
  "key12": "2pdeS6G7JeFS81Y5eTVNpV1gsE1Hrh2d2Ws6LYbjUphNf3MeZJ2mwFpmhLtdRho664AEBmtqeDMRm7d371wyMDF4",
  "key13": "2wYnRJwhPqCJxACipQALWrQMSAHReCTpSWUbGYirHcH8YYfTeLHfqtWyjnmVtetcMkrFSR3cMLwtLjA2v6njE5fn",
  "key14": "4vvVTxvpcHvUbu1FXJUF9otAPb7ttkPj7prrfQy2ZKiecRJ9AcnBjkKaEo1sqHwg3XK5wNpfYver31Rspkndztse",
  "key15": "59D5TAts3VgVn15SW9ojxVhtBeRrsxDrUYyxYxwapUhMNTfUd7Rr8JukuWCi5GmdgSMKtzCc8pUqEgRWZdFepyGs",
  "key16": "3S6Cz8VUL8nnT9VHnkwG9wPxxw9sTYRzw87bWJ63wqHe3GEfj5F2LVvNE4UCgp3Y63C91hUZQVoHcDMmyf7Vabhm",
  "key17": "4xEQ6gM2pSR64jLAVchtvHhfiZsMv6H5WnUBTj7wF7H9y2HqE8ExJRMBbBhNLpPMWHEuh13NsF7k3GPB4UQBEBvv",
  "key18": "4xZ8i73TLQhjPcLHoRfwQtiRUPUFGySNpXXDvtCPY9cdvobohV3FChMbfdUYktKqsMQdKV5EHHHK8fEHcndpwzK3",
  "key19": "27RTZdy9W5P9336tvD1mxyLDWkUu4CSN3k8atLYkZTKkeTHGhXSPYLFKwxMXAgDqUvCkbubdztFqdbRzNt1DAE8U",
  "key20": "312efncejictEk8VcN3rP9oY5GYKWqkMjSkyVRJ3owXnrf9go6NMsBX96h4pEMCgm3edm9QVWFmtisGepPZ5zZZQ",
  "key21": "2QoqQB5v57DaFdHXpjkNU6TVa63mmYTypbWYYxCojEY1WejZDQKuP9PhoT8juNGbEgaQnKYQK9qkNjK2zB9YK1aH",
  "key22": "4XiioHEDzXMgBktXkg1NfUJRCUfkz4PuqaVYZDsG7jBNgi8NaGBPPnmreHppAfEJZh41mhuJ3d8B1Tr21YufxBS1",
  "key23": "63ZEe4VhFqXVGNVfdQUJfDA3LqBk3VuqQJHynPjGw6t1ETcsMJ5sw3QoJJdDi3sDvn9AFLgcw9utRERmddcPRvL1",
  "key24": "3rYyqkAne1Y7SutjnrsqRGRDbTgyrxF1FwxC2wHoEb9G8Y1N3QYBGYydV1679AYLKK99Yzem8cdkYQJr85kbmWrf",
  "key25": "4Ztd5gJLr57uTsJU7y7sc6eL5WZTvv4yoXDTtVNCywwdUJ8UFxPwiJ7naRGc2EDZhcu4iecYzhrmh9p32sngg1CX",
  "key26": "2Ez9u6pz1R72fFb2VjFk4HS14dMKYCAhMT3wxNbhLEh3Bt2iYh93cC962pCsoCMeJ1yxZUD3xz8CRYMR4xa3ALXw",
  "key27": "3N55b75iJ7KHvfuk8kxsQwkha2ExYpimX7bTBVAg18tuTDLx7tJryy9BFtg8tQGCVQ1652mVwshPbrpL4ujtzHAa",
  "key28": "3uS8JdE3DGEbiCbULpZGhbr3R8cBPg2CARSPYfjyrqw3T4UeDrXn7RUS3hnLAzWHqB8mmwkJrVgGgYHWTa1C9QDY",
  "key29": "3RLyRQbJtGwnJLjzpk42v9FTuHFWqxVRV6oYDJ3Y1Zcc4ZHwmq4ND8P4cuJUJYpGvv99LRvcYtKDZU1ViLKyjkms",
  "key30": "2pZ2vHyMa4FPyLLBcaGPHV4yNZeeoGTo9DEViYAwSkJVfQNMXFQSBYEABRQGwFqaSmCiXkrTeX6NXYmh762bLo7V",
  "key31": "3qQmPqH3Uifd64KtweLRTxrjRx8kGdS8WB1gAidEYrMCRPf4HL1PZgeGNrNifwiizXjwXGZbyC2Z9dacc2QBgdwq",
  "key32": "4LVVHihB2AhHXGYR87Ck3mY57mpuKDFZVfUXdT8prbgdvaeMLhxmu4EP1TbzMjnBzcnMy3B4Gvuy1LuvkPC9mAPa",
  "key33": "3W2wkjQgpgL7hoasiRz4gkcTHf4dtvwkuuBKHTjS13bMnjxHHaJrSeV1qanee66LNieCB72qVhXRDtmJBxwZov4m",
  "key34": "5yCXLiodEfNu3WsFwNJxV9BKoAwDC1k8eJedQiLdh12Y4hFumFaioCL8Pr3sit5z1pxwmeieQ9JnBHTqeuKw2HoV",
  "key35": "5zSBZxnVPPeVxduwyJzaDfX8H6QgEvRy2tEeUTpvVwjRdprDnBmyEghuCPfXPB3JEWRYTDcqmLL3K898fJ5qWGhR",
  "key36": "EhsnVaoBfpV5rfdm6hvCoXKEMvScZCD4HCYQzfnviZKNrQLLMFM6fBAwsfJtpYbQP3bx85rrvJRXvbxhUy8Jj6T",
  "key37": "574ZbYs7fEGXH7CQymSMyNWwz3tBie2GpzwXuntBrLijFW5jZ4pmegLS4ZRhxaq3G3tomhmk5MCG8VTa9eBUEC3f",
  "key38": "5wN7r3YGJdRPGYwn9Y6CKreadTfZmgfPgk1K27Aa9tdHUT6DvZ9XP8yZrhw5Q1eevN5Wo4w3H8mwcJVHoEHA4WKx",
  "key39": "nLncbcPBA6AejtYimFJX9CaS2stEnxm816prSgqtmWriwdFYWP9aFgu1xeRuF24VT25PotpsyrBWMNthJ7vwUt4"
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
