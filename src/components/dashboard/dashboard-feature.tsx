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
    "2FMmCpKjK8D8gjyi5aHxFMVH8yHxTmS5NJTxMjGGtwq7W4k7GaWiKC4METsR6tUFbmj71TtcBMQ5oUAbNiSG6RN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jvGFt7srC9Jrjn22hbnK1N6EhXdQtf3qp7G7JcdkE8SjT3An4nqJHMkf2nS5Kp77mS6M1qLBRqEn9pr1yv6iQei",
  "key1": "5reWsg2NNQBZQRGwoPFSUrUPQ4K5eGC4xy16ksEzenaQLbb3okGWYN3fXBVxJYPB4tNWehKUU17PiJzq6p2hU3n5",
  "key2": "36pk9rCcXk7kvTGG1CZMESa9d5y7dRGa9xtPQchAeEw9jXdK72Bnh2NRRwsE3M7QsgDQ9rzs2SwQRNwFG9aPatYy",
  "key3": "2XNtSg78RdXJgeNUKb4p7Has8N2srEBFJQgc5F41QMc76wCWryMqFwcjsA2Ar5usbGFPLzGAqBsHTjf5xMB5sibL",
  "key4": "5UMkKGRpYDLF2noxYFkrWPDpbnbrsuLJYTu4HA4uBUDBDWqwevdTC2rBBrbpr82r8NHUKehXyVH1ZPogCePnwMmZ",
  "key5": "3X7bSRRzC64oHYVLojU1gQZHC8KRsr4EW5XAjeuTiVmAEBtSWbuH7zLw9M5sWQZYLoZo3p1PBMUAjohN4RvZZa75",
  "key6": "62LEciYyiREQsrjpnsvKEucRMnQrHmtk4syUefEGuwwBJaoUg3CjuE1PLo94jq69qzUyLmH4cmxF9zxsvg7YiLK8",
  "key7": "5JgTbpHXpg2FnLXnACidsnCRLkUZXN5ZTZa24QDwD1U4vNpgzkKo7VpVW3zkWacWzH4uixWupHy1ztqVgNAoNbWo",
  "key8": "2ZhxZJHY6gJjVLNwVUrifFTZsfPntQse4JrJrzH69FpMt3bbGsoMckmbRxYxbxmDJLxY8xk8G1xAsvn2M3NtoE3T",
  "key9": "cMVeJ1B63M74bDo3oDyUReGhvHjmk92KrnUdBFTKcp8b119r7E1Fc1Li6bmdADKP3Fy6fMWqnUrYeuch7TTgima",
  "key10": "3YHRWuNGZdoL7RjySUrAMwJkTD5F55AZ3zyn8tgMRihiPTRVrjP6ktFtttznJCQyPJdugvYN3yXxhyaJnFXqQL3g",
  "key11": "5scqrH69EkjDAY9K4KRAoFiFpMhnfLNzvgpuR8j8MbWRpVfmu1AUeYQdMxo8SnRs4Fp2PbftgWJ6C9wySvvuCiXP",
  "key12": "gvoKttZYiWaSMsd3PzNYqpJjA41xmMBGtEBieipnX9aZ3H3uyCfystqMvRHdX7iN1Go6b4s3jugiHvWuCbuHSd4",
  "key13": "5u5eMAx6aGdxEPgCaLviMLYkGzgevTe9GpagZcMuGUbBMdqLDpAUFbeZjQ9HKvt5mEsk75vyjkff1QG65UeQ3LTj",
  "key14": "4XLUcY9C3iJJqqXCqqBKuBJUw3BHzyk6iBurufzm6qrZkHecdDzWtkzqW5xgGFEy2bL3oveRpWmo2J8o3XyqpJ3C",
  "key15": "5s3qX6p9JWkvnCvhnfb5fnXmCbuosnmGgsT5TKBF9sj2Jz8wSm5a8GFJzTt3GEW5iEYJ9YHVjMAT67h97tqkrkTJ",
  "key16": "kssHCaje24REqewxwaFp1K35E2sWSr3G4F2yWczG7YSd5pMjRF6Uk7pgKjW8fon92tpdJyeFwfvqmjz7mAfzMEH",
  "key17": "gaZqgEhwPx6PSkiB5dhEaFmykb4xM6eLdYiku8TXqK5mP5pEJhhEeYCXXRTjqhiEBjuX5tfNCsV4YLDAemqfDLf",
  "key18": "5aa689fsA8FSevp9ae5PEqfrt2QRVNUbqvyoizGbAks7eYb7hk8GKnxEnPypP73Dw6dbzKJvFgCa1fMDZb8ScZ6H",
  "key19": "RiT2g3diE9NfMaFtfbg4P4JjXBdsFnBrUyBL3twfgdJb5xKiypTNKJ6TuNXQSjWCUNce6KVwi1vYU9FVFLNZUmo",
  "key20": "4sroHivQiP7GSsoZPCtsMv9x9yF3XycVGyJtLYyXeqao3JvmKqppnptpzzizXRMdbTTnTqQaBtLm5UtPjkzpjZdD",
  "key21": "5mM52hADCqUuAhAYmgmJVZnc9c8e8KjJz1Mk519kGDGmM47tJRKmEDEDGwkcPCvicY5UjEnMT9ptKxBSTYVb21Cp",
  "key22": "3vvxfWaf89KkMFm9dmq4V98dCYALX5hpwBLbH8xdn91A2iNNwenfsjY4x9BTGmPcrSUMw31taDgJEwfQbAREj8cM",
  "key23": "2s7wXpDdJifgXDQm9s3kD1a2LRyShaBap1pujnraTVgJJbY6dQ6QHP4nXrGMAWa3wZy1jUUQJxRCS24RmvRFAcyy",
  "key24": "3L7jC6f8WdVw95ik7Yf3i6orq3Y1A7q742ucNiWC5BeiQCC9boef8QpH9XU7YHW7VzCafZwA4iXRvWBLeLjdmnVT",
  "key25": "2Z8dzeouY9muJY98gNrM6USLEXuEkSmWyWFF6XTwZQCzTkTwuezsgP9wC4fuAqhWhVaeSoNh7AjZG4H5MJ3VGbxX",
  "key26": "5T7THHgmEWeFiEWzPpSwbpme3kjw6aXphGVYzPMAa5PJ8niS1ei3r5ZT3MSvxBzXUZyFjEjs9woDarjaCnqAhSxn",
  "key27": "yxVeoSei584AsC8jMianNqyfASbAkwVpB3Y6MrgHvNJF8UVfHnrdaZGVfRmeDiZJFtuFM4KvLWQmFbZiLXvaKTb",
  "key28": "LvdNfwhR7fkbtNzwa4RhBV6SkCq2EbdCdzopqCVu3NLDV2ij6ukT16n3uQnaLo64TBQ2JV3No9FAqWo6krvY8qv",
  "key29": "4hhm4HQ926JSXZxFPiDUZygtbgf4rgQ8T1jpYiQufkefHJ8kdusr9mP95nqM7yFY45Syp1d2u7fJoUfnoAy275V8",
  "key30": "3W8d3q8HgiCMNWQf4H9ATmPxvZxE4cuNcwBAaQWydneH1TvB7HF9JcpTSFpXxWgQE8dMhobbNabvDT1nCKGvTok8",
  "key31": "5SYJYGmFDP9onDGDoHwtwc26dLKNW9ET6XZKsPFQVbdewXVmBgXqqigASsfbX4nwFL7R4JxPiyNvjp4YUtkV6XkL",
  "key32": "4Zi4YSfaDvwrv6nbGK1D8aqFxFufSfV3rBn4Xjnuw2xZNM6BodVCSnDkvEQjZWnUpguwt4v9Kk6TCRSSxbSeVzUC",
  "key33": "uU6U5D1pusz3WPtfiZSjWzie5GexwKhUKUSdN4eGXPsuX7arHfJdN1CF6q1wJGgdeFTQxv6S9nBPQFaKMG3rLmV",
  "key34": "3qVG9EoegGFGJLs5AWbqK8H5XaoEYzLdo8sVGL5ZHh1BZysbFyczjUPknrTwJdLyPkiVSZ6x3H9mxuDXnT8uk35X",
  "key35": "5pUhcRrQR2RdeTmjHe9UczyQTX9zCJqhQmVCgy9E7xSKrQ9gNRyMQh95XTMpVgpTRev7JzAm8HDswhtJiYr1T3Pv",
  "key36": "2bRGhTZD2E2tXDCCUAsTGUKi7vMbw196zcoGUbo1XDema4qiQvEQzvBNjqq4qHFWessvRgUvpLCedWDvWgsSg59r",
  "key37": "EDCvsSoF7tEN2jxRtv3jeMubSDsfThZepiPfQAQ1ByH2qFjPD7g8o3EtcTmNFa5hzkoVjfZj6RnSoE6AWuT6b6z",
  "key38": "4UKN4tt9oQkET7Cpn7YjcEicmqHepgN5UYLe2dq4U3a7mLcLYx6L398gDw1M7U8vWsTMraTNVnFM3iuqimbpBhsm",
  "key39": "45J9i2fWGxD3vBch2BBND9WSvErKxzKDTyQxn5XLzT9h3jeisgmUp3CcujFefip2A6HaEwPdpEEJ96HYoDYBRaup",
  "key40": "2uBcgJ9ZS1YKsvVYw3kVDbccx3Zvj4MaDEFh4Q22MbiVVHzL2rarPCeRpmYJAnpWAi9CX3WtH8DwBGYyaVhBagDa"
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
