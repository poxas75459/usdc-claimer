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
    "2NCtxPYNZ7oEbbtYn1VGpPjc11oFg1WkmYS1rmacRVoGcmkYimA1LFLVo5W6BeY2zBCxNmv3WrpaAFUK8NpKGQUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n3mTcqmorBCP5sHuZTMy71p62ysDjbJiUyvvXMXpifqfXz9tgFTAL57nFDWHkZk63wzRbM291mrShM9JDqDRNbb",
  "key1": "mbjtupHpU7aVNK62TuMKdQVUcnAYPTgASFwieAPC5qyUSgoHvTCTEwvWFZAmijU1wYJM4hAPEsn3fe3nVhWiYZc",
  "key2": "3V7aAyLsWLWaPVTjCC85aHrU6iadbTVGv8KFkTYRe29NisMomuDEBchNryzUdYyWmxqCQQJ27CTyeB2Wg5apC2B8",
  "key3": "nj2TXduw3qeAiUyYxAU53pTZAC83c81D75oe37vkQHEjZuH8VXRgDVsLYbXrRkeGFLRJPAZ7vbkuK5KVsutEmmE",
  "key4": "3w5hYoKM1sYyDC9Zcqqqc2vuiSZbWVFnEXQUz6TkpHNkPa4zms4Y4HciavYHMGNV47nc9xV11vjsztbDoJhRFzz4",
  "key5": "4BemAHamDcu5eBPhyMqT8pfm6RpBhwvLfdm5sD6XceCSVvsdwfYntLQWNpQC6gbeKABZvkJYYR3ca9Ktorm9re7M",
  "key6": "2GifyzR1X5tps3keVwVez4TZhMpJFStPDmw9ifUszFMkPsprUdVBqQW76Y2wNC3JZAMuHnwRfNuhP9Jhj2gLazJS",
  "key7": "2okD9d1ua5MYHHaFhwS9TjQ9nKTXJJiYpJCrhtmWPhnXN4VCg9Y4pfgBhw8kvefXEVY53r6wQ3cAK63saVh7wwTk",
  "key8": "4hp8DnbKgRhuKWrxxx3oXV2SPuucvqSMbS5wYYwZ6CC238mNgKHK9E8WybJf9MHgUoM4UNpoAnrsA553tK2x38Vu",
  "key9": "xWnjpxDcgmCPaMcqSzg43vhy6uSPMSQY2Kd7fbyPNRxGytHBCAdLW3w6HxDZCRhvpuutN9vEyneGMdgXCtrsspM",
  "key10": "3cuvS5dRoV5hhmQpdbECJTTdd9uzss9WQKkjBThvSiKFmfZ8j2bQPozWw1Tjv17tNHT58VnXszA8Y3Z2jiHsk9j7",
  "key11": "295jf7Hs2XME1jiLQ1jvYCvaYYX9gRM8mEfCRJB34n4VGn7dephVBajTDZTHPtA6rrTZF8WALh2CZ7Wf5BBGZHKb",
  "key12": "3XzPUBK5WSr8JgeHEdQhMTCPBnBDRYFzjA7enmUSxvjeFtqFuxT2FTcroeN3KnDvdzuCaezKkDd16Cw2F6qaw3ah",
  "key13": "35rebZShivDXUBoDRrdP41exCg5uicU14qXjbracJa9aoTKtiuQ85cfVUSZVkzSyo2tDGZEKvAM2iZjcje2KYZMz",
  "key14": "5ek9gKYgtsEgPxBbTkZH42uJ7k4UUYkynS3D9bqNQScfUqcyRsvehMF9EeDRDUkE9UqQ2wgujoF67Ahb9LtvLB2G",
  "key15": "5at5sJ3gXpBcy3LvqyTLVaRdBqUR16Yd3R5DNmpcLTKSzaNw1DAWZQDapQBpWRfUQUKYiaS9WxdmHr4CxSVVXLEJ",
  "key16": "4BuHbjnf3my2EbFEpiMcVS2sXxzrjNvckDKnJms3viHiX67Pvp4dZcjRoLibdGkeiga1QSVV5JA6bXz6o6ucVQ2r",
  "key17": "2KUcHJCQNAmAi39EpQHQZxeu9d7PADUNHoWP9AxVLGPdAYqHEsiybFBcngsvZz26XbskPiGNJnq3VFLJdW2PZCZy",
  "key18": "2NQG7yaQrQuc6MDnyhgBhej6f88UntMhwfwDq8MwyEjuSZpKJFXanhQzjFUzaBBR7P6YyP1ZiKHCgUyc55npa9Sx",
  "key19": "5VZG4363V1y4Ev7ruWiCtr2Fn6ZTJyauJVUjJeFe9WC4RLbtPLkeGu76UoaB4jGdzMd5cDUScEzHwUff8w1p5oo8",
  "key20": "cWdQZx8fj32g1vjDAEvEhAonh9MRMDde85xLatj9Dx7sGEWCqwrdvL5CoDZwQGcmCowyEbqzopLuZT1SqrRTrP9",
  "key21": "3RyApqYjwQmHoGmUvVz6b29YzwrHXxXQiNsga89sd5eCFAH7pDmYoWwUScdyBdyNBWU4JWA7t5aMm1Jc8xG9kHDX",
  "key22": "hm51xDcgdoog4tkGYNaad45s4ANC3aGXhDSTHsNRtm573w9TMALficyBt9quzKyqp1Zxy6fnQ1A2ioqmZWwfhXd",
  "key23": "27RMrfhqZp9nbVBHQZWdU62ZG61dx5nVBwkk8iRtuQjBL2pZ4tMc1m1ieFHhhzWDZuXbe7xeKSLZkp3KjZMXpWMW",
  "key24": "4N9zjQALLsz4wDq91Z9YSshEUsmYg5tdsuZQoWUEgkfbqHyjUa1U6Q6sXnureLHFPiWkXD4kT94Trej1Ut7meBwk",
  "key25": "xk1poaGU2a17c36Pe3gHpMyo6yQmXcYatXXvVTiJa5ZKRrRPa92rRpXXgkNnqcZMPgomfJaSDt8UkxoQ4QxJuGS",
  "key26": "2bQGGP8uru6c8SVB2XrPznbi5Xe8XuFpAPqiEmmhV3gw4gzJnDpuNfVD8jMGWFRMJdpHw7NKM7tTzxQiopu8cugS",
  "key27": "2sd5Je37EfmuY7rBo4xxFLsThwgvtrpDPFZwfpHYidndD5RYQvjz748sHoUwrWZuUpp4Zievj5vyU5Cj86H7xN6q",
  "key28": "3Hg5XTeFcUL5GVkKW58s52yXp1YP3i18hu8SQnLCH48nKvpJ4AdEyjBhWiq3zaoU1doqvNKKu3fnbQ1FFQ4MxTUx",
  "key29": "RRtwWKKeZmn5QAPYa69q5RmXNiUrUggEzN8tZkPsJNhSSN79fLpzA5ARY6hWJjhBRtSSEVNRbkB5YiuMnoBD3gi",
  "key30": "2sF6CQfoeDRDrjQK4Ty9ZLSJ5guMAauNsUWVENHjnwYGeRJxYNejYWYC7wbdURNK1xTfToe32GfLATJuHqaSDyKg",
  "key31": "2VG48nRZ6UNQcLpeSUqqGTEYGZuitMmCY3qZw7cYUvvvrsEW232Jy3LfAFMHv6uFnZgLAdrRttkoVGWUN4Z2L4Q1",
  "key32": "4zcMYS5B8g3noJT41wTkxCz4rX1EFPrgY5udhETTrgznLnRgKCU4cqZ6K9MW7YVgFPpQBwojVNNQrgNhkK3ciXEY",
  "key33": "2vJa4cDsitns17CA3xWhjzJk4H1zH95i7rt9j55jkfTr16CzVp6L9Vo69yry5FWDpZyyHLaJxhCgJmN15DnLdxHT",
  "key34": "2X2wD7QCxSBUVRN21PgqjELwk1sxkVJ6YuS46e9gsyukkiwu4rWmkx8g4ghhBecLvV4xXNvPPZ85WjeePUdGao9W",
  "key35": "PooEZrm24mbmwNr25hosCr5SmeunwkuDp2tFhE9YFj9ugni6uaXSnqNn4gNc8TE8d6ii3w8CoyqcGDZWVdeT1ig",
  "key36": "gzyYmcuBytmCLbzgyDi6XJnq5xwJWwAXFG6FWFEEswgR5P1E66pT3HduoSusVb9BceTSNEB6dYr9f3EwNkMvh64",
  "key37": "3n7mBcJZvGwrZXdoZn5RnwAZwLA4EidFicSPijQ2WXXeLrL7XbYfChrbWvxnJZmo6e6MKgJnvquUu51kgCUQLBWH",
  "key38": "3EkMcQs6tXDKv7bZYimZHUZ45rVQVX7P7ggwRytQZrvafkE7HeU5bYxAhHT3oAPPjEnaVrZGn39LqoZLGQJy9XsR",
  "key39": "2uLecGc6USWWrfkRDQjGGBfv5SLVjENFc4FzNDtswWDeDMaBKHcheCgUGpJBCQsybiwsp6Jn49BHR3WsecqpfXba"
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
