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
    "36UDKcAa69WPdmt2RSHaL5vfxRJTvxEUVvLhMQ9UMzJpQejU46n1ZK9xRfrKpmmzwAtgUyxVLqpj2F9hqZJyC6cX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rKMjQuSTRqP1v11j7L6e5CTQ2Ayf6HdJcgg4ZCxGSVVxCY3wbPKAwnZJE1fRHMjACnrtNeLbSaM7WTkeEhEZASp",
  "key1": "3hhctYgbNdiHfZveGSJwtyX2mvKHzrsBDQK2nwVFBDrdzWCDwdYtYoC1qWmR2fDkqcXx8JsphVjv2CkxE6L8FFUN",
  "key2": "2HEUHohPmtxju7QS1hF7A1ga5i2bUxeRQABENUe1CMx2dNgbwEHmq73tbiqDagThcym2YX2g1TfqFLRKnSEw25eR",
  "key3": "5oGeEsfSLMuwF3M5k5yQW3h8UUQGS97u4uqcoCGDVA5CHjiQstoM4fhqVr2Eda4WED4LnAA6sU9S71hkufcbsLVH",
  "key4": "4nsvdWVY7S8o2b8LUnTaP6LjJbcRebc797cV2vAQKxszw85Yxbc8aPHJXCgR5egDTyQLwWdJSe2P24pDFNy5a3Q4",
  "key5": "4p5kTkJtjsk2jXXZ8ThwVhnxJq7wryQ1qkBfcaLjrRPupTuGLFDBNDVZbAdsQUuS5PSWySfbj2xftYiULW3MxYDB",
  "key6": "3weDNKU2T5JuAjdzBPtptuYwDxnwLJptyoSq7xoUXqBakbRx2svbjKnj9h2mtoRscp4jeCoWGovTzpxTURfZRgUh",
  "key7": "2ATUEuNEyiYVkanMeuqRhFRwro2QDXFNmCcUMY77aPvah7TXpFZudkPJvnDYnJnY7U4jVEgTYh6iNCV4nYyZhMCY",
  "key8": "2mKkcY1DGCJE6kGn6mgXQGZrg8XM26bF41g41yXVb13c14uYECMkd6WVqoztuivf17qPw88Y5AvcL6ZEWfAi58Ub",
  "key9": "3ZMToNph3uVBxGZw3GWWtMiYWE73KtBwR3KbBoUGPENCwENVvxmQTiZeXzrnquuszh1fwK1r9DDpfQjuEUCeQNT",
  "key10": "3AApTwPxf26JQqfKmJzedwtvHNEHc9m74HjgsKf8rrU2uKuth3j8NxdRuZ2GCFTHygg9ZxS9FQaAXESkYbMoAkMV",
  "key11": "5YmHfukgLmdkqAoHcLCKs5aSWVHbS3ERybV7wfYtP5Fe5dvueX1RZwMTUmn8ThZXnvuaeEUR5vuQg87QEFEqS2YA",
  "key12": "2vWvnWKQZWDVQ5nmo5urL5arNjMhYBhpYy1bY7FWLXJqB7sNYKicugWq8kTwPWViJoGcC4bh9UE6nx2Jjv3vM1QK",
  "key13": "5znAvHJXGCR7p3C1rBsuhMUXC9oaVBSHNmcJKuAf6givXvsXszu5yqbcJ6hH6zp2NoYVaBLzXqtFsHavVHrSYnTS",
  "key14": "4bNASBZDzSAo4pvCtpmKXYab13tYyY84QZ3pfbteyDNpSoxJiDB3j1rW8e1w5D6VUTey6UH6pARXeviXgDKx8LaQ",
  "key15": "2VYcnEAeR2MMxRxXyynQdHyPj2H5s2QNceXVssMvFoQYdnAsPHWSnc8iJzUasdBp4n7KSsWhft61WDzVctzmDPTU",
  "key16": "48oTb4vBgnxJEzjABhp2QqRoBx3Cbv1sfyE55tMKvvQswzwrpSqNzPSpuheaFmJPNfrnfnYfxvP4GCRj5GPbJCQW",
  "key17": "37EZtEhSMAWcALkhZ2iB338tuxXCCLE1iQuphbor19oqnqhbanXjedwxfQAFArDPZQR85AjbkGN5XXsSptA9wu14",
  "key18": "5geVKovstn6DobLHE6zfdqQuBKitAQCfe8EvvUED5LRGssFDycULqj6pJcwkzFvMFJSmYSR4Bo626LqJWV1B3qit",
  "key19": "fzWbqVBithujFy6mRhN4ndEnnJgGbj7Ljcdmn8867vyr1txm5cxDyLLUKpvDUFAWjN3mdLiDthH4XeZYMsFDZab",
  "key20": "fn4sxLpgdLrBovcdNhaNRJdFbvcUzFb5zMxMfkFfTNyN6mKXU6vHJstJBroqYUkmHTer9F7voB2PGggnNfGUMTC",
  "key21": "4X5a3PKwyS8CqN1DjdosQdfnXZ7om8K8uFAnmt8v7KK4pRXgiQmt9zDmYrunFCnEjXavHpZQHmqRXV8Me4FPeZVw",
  "key22": "2Wa7a4nJXJHLbQGVRJxowodFxejQDqoByXSnpkeAXHsGeZaAavCYTfkoHa533F5Tdn7MKuWpguoJ8e4qdVJDJC3J",
  "key23": "HzGMeTpkrnG9T3oHmp5GRBrK6L3ekCj7qe6aacutdhrmyCdzVyyPN7NZWxNcCKmqupMgbtsfcKxYPLBTmC8Ykd3",
  "key24": "DnCTmNUySYikbVgZGLpGGwj1ErhDL8kN2491YDJJbnXeBsVR7aPepgreDwQPTAGkmeg4zc51cDo1CvLAoNnHKcE",
  "key25": "pmw2Wu8gLYfFbyKFdYRHohwDh1VjQsfqCEaPqQjJjGoXEkza2Epy5og2EECcZkiW2Gp9v31WQ6YLgcXTnWaqpPq",
  "key26": "5ku22M1U1LevsLpbEStz2FH6N69HyF3wL9xaq9kBDYVqzN1AdX12yD7iPTxhJCasZ65HGPPodNhP9jgGgKnePZCo",
  "key27": "msSA5KYF2gcroXL5h5MdXeAZhqrVBHAZpBbrLhQQhgB7tkpZydyGW7ggFrHPfu1F3raJndYwxszHQDP7sXAxZZg",
  "key28": "2ApHeyVkYhmDX4WFm764JdHssvRm9EEzpPzA19vKNm2AT2maL8Z4w8WvSPxEiwKKyeifdr82ymk4Gbhk8YB7JgWZ",
  "key29": "5JeLCFtYyXyEjMRcsgugAqykW6xhwGXby6CxmRgM6qURo165dNEvv9ofBAXFiiHqgDgLZhQqo8ZbCLMqPgSQLate",
  "key30": "3kcJbPdHWVhmbckumjh8zwkfB1EvV7TAJUVb6CLvXhTWkUecqL9bVP4kwYPW6JrDPBUMabCi2ZH2Rw5zgT4gJoyF",
  "key31": "2xdgtw97nGJUYAeyBfWkr1E49cvnJ6nctFVumJAVeyutbzFGLVGbhtkCitPEHyq6jvqcuKXcm8dMrKQ8eDNyGVuZ",
  "key32": "5QGDyzkHobcrPzFQmMSafPcU3xHx3Q3MGFBxiiCoGcJFKyNTqC6TKDQqjbQ8ngXtPQHh5GLiHhpqiM7wB7SEf4RA",
  "key33": "3qUhAigSdV4iLsvTq8tbTrxwDffHAo6ue58CTuVMQKNsfWDq35XUaAiE5wcrEhgSazQXRTDatNzrMEMTkUi5NTwg",
  "key34": "SRTPcm4nvahQLs8zRCjQ4vkst6kY7Si87hsVmP9PSvKgw4kCXHMDtJXxvGX98DkY8FMsBE95VXNGR8mBUBNkNJM",
  "key35": "4YtoaazakbUxCWKM7rkjhN3RsxxFj2xVNrtAfmnd2MhAsrTxNtHTgQAEXdqsSsSPsBhQDxuPjwTi7kj6AEQ5Z4kJ",
  "key36": "64dLJvVGZcuixkFuEhcgvJ4xMwEqvZmFS6KLWdgvUTAyPZJKdEVP2kCPR5mesbhLtg2WWi5VkQ5Tyq6bacAKCrxx",
  "key37": "6uCdoaeiuW8zXcYJn2utRVi61eWCXgQp31TuErCsLJy5rm7vsu2UmQA2cB7KVpGNQwWN2E42wTs7gns2RkxM6Ux"
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
