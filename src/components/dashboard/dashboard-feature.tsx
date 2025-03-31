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
    "dai73zdKRHcEcZPajpLmCWvUqaQpgDzLC1zMQH7jg7Nhfwfdw5jEns6C9XRDQJs4d21XKY9BVcWVdHRBNDDKb3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TVAEuMXMyv3Y7vnpnzUWbjXzeDBTVxWwzSRQy8bS9boR5qgTorQED2ZSDimnYZbFSjgpn2w8GzgwuBeEQmWZLQ7",
  "key1": "3UeUL2nv28i1rc9XMUsfUZkqeznUSC2YuvFbtA8qyRadMhRebKWxHpox1utCwZCiMd2k1WPppjxn4KKFfLB9kwhT",
  "key2": "2hNLBrMZi1EzaabQCFc9Wi2scG3Af6aucdiA91cAsaBjvRRJs6PXfw7aVqSuy4D9sDVuDGxCNtj3HiQXjJxADNPN",
  "key3": "5yV2b6WrW6WSV367ndznqidEDUzkXYKVaYDK5Ka4DAA1SK4WyP1C7tKveGnz4ErV3f9h3UFrDPjtfXgTsBpeF6H2",
  "key4": "528sW36wXCjXL1Jq8WpLHe7xvySs42BUUWkiWyi3oZTBDygi6wDEG3FYXUxFvTb61GVA9hNqQBUfh8RSAtYSfFrz",
  "key5": "5KbAJWm72LDTHu34ToFMHQ4vcopyx3zQcnUG8fwE7YWphzQYkKXwfo19SH88ogUKkeBArmDf8kKP1c8x9A6NyXr7",
  "key6": "2VTpMVzGkzW5EAnfHVCrmKV61AUzY2PHjZ9N2q7tNdqQQWMoafGSZkRffskeWmD6hJijmWUaoqZhCEFK5PpF2TxZ",
  "key7": "3wG9nsxxDwxigEjgGPCaqiatiG6adSND8dTkxSDGzkUiYMGv84ZhMC7yKnUTjWpHEEZCxkjm3Xg7C93MNRcUPafw",
  "key8": "2QaaquBDBGujSVTSp61SAiFzSPbokAnBQZiDY8hQpYUVhJVMdJcCb1vy84RTKyd5Sfk6VJW8hywoNnFi5st7YEav",
  "key9": "38JoddowRc73jku3aqB8UojdHr3Ko9WSBmgxiacPFrPfuBDt8uzLRod4edZN2uMDDoY8bhDvbQyDWStWtEiGAW7m",
  "key10": "596AqT1776SDi4N8vMjYoBQaQixS19fymdKDWaour4ay9AM6UtwPZDMeQmtkXXHY5rYNY65fjn2YHy64i1R9W9VW",
  "key11": "54EAdotn7hL7d4Bxfn9ujK3HCavcaUV4FyA8bSurwvqB59G1LED1qV1gtzAhKCpZBQQsuXFXaBNG5jkGzjNTY4Rk",
  "key12": "3XbYRvqYDacZFtcnfBqEHjr7fNmztxuXniFwzSguptQfFMQPpCeZ5PuqCwqcnj4RtEFQCbhKUe7oAA2Hba1Sm7pw",
  "key13": "2Gqtv5UZDqit496UW6orC6M4fpHP1Y6vNmq3SxYPzikACq5esF1iekbkQVX8A5bcyChsxvefwc6SwvHybkCBmDnd",
  "key14": "9xR55LUSSLUiMTugLSKSSiHSLe3o33F91uXSjNU4F9PhXqPjcuGjWdji18EA25FkeAz8F5CFn8zqfMo1DdMoj1x",
  "key15": "62NQLFNedFzBKQzBeFfCtgbERjfJWD2jyaysbsyG5SwZ2NxXbJCcKYurwUhETxk1zxPEgFGKtgLEVBZqJ3kdGXHk",
  "key16": "4Qb6i4uXjYc195GM96f2bqXFM3C45E8TatsinQ2nq28UmCu5Nft7XZCL8DejbKiT26ErQ2KZyWQyrDjVcz8bj31T",
  "key17": "5t38hiXg7kLmueMCjs2ECsbg7VTpHzAW76zq4fsqSrBWJ7hdHbrVTfRxoYiWjWd88EhvMb24scKQtdBfsjyTQ9u5",
  "key18": "4rBSGZfbjmdWZdCmtyQkb4T9N5cR2gCpNzqZesXjVPDVhf1EGfBve2DPDqeQKntoP2CPBJNXrSVRXoBbYSjXfH7E",
  "key19": "5YGU4mRt9YLKo13N2tYvfadx17v3HVj4Tz7wjZtrSPTZK2AusmTnCvqcxtrkutYFaZuU3Se6KPFNiv36NS1Cj1mv",
  "key20": "44CmwCmKPiNJQSzBtNFiXAZcKmYh9TzSYHigMnvXwbQdYQMeADGY5N1jTHnnkGEhR8AWCsskXkP2XNt4tFRk8rmy",
  "key21": "bywnRs6sbbyqEBJBvhUtYC6dDvBYtU6L5agZWjUUUg81BaVsAWg27gD3gUQzzbTvtqGuTpymeeSRpZi3BeVN3ZQ",
  "key22": "5BhfwREWBM6aSacLeGw2uzr2pETRtNtkiJ6u4YmxS5Za5HPiG7WjfsMtVfLiCSGGbVVvP9MVMrocvzU4KoN2jvJg",
  "key23": "3wckq8tz7cH8y39gzkUN87HHZ1nYfHEstRubvqiPzhJFyDRVkSDKPXhkum9HSWqvwp131t3oK94qUrxQd2iJAq7m",
  "key24": "2mfzYzRsTLecZvHbTJRta76o1dUjYoK37uvLYRSE4Uk53aU1zXDUhpXGGhMrHsSLsRdTp228HUgsVP3cuxpVEKjt",
  "key25": "rVkp1usxMdr7hm9o5TNtW4J5jftshzRYovX81LRQig2BwejQSyE8Ev6ghKNhNzzKueo6VdhjfvUDp3x1KM3REMz",
  "key26": "4QNMD8dQsDigRAaMCyaeE9misv98NrY1ESfY1v7afra4JNKkuHhc7PcKXuFBryhFvBNTcSMzSxU61JL8FGYY5vDC",
  "key27": "2sMmvo7qqAG56pQiwYM8Nqm2ocESjbaWCEeGKcaZXRgaHu8PfS5DppHioXjQnqyB32ZuJfiaiBYrDFV5FHqYYgvF",
  "key28": "gJD1qX5nSc8Vn1V3Kou3Wr59Q7goSzT9ZwgoKRbgHUWg3qnWCr4FR1LkZeQDZmBBLB6ueAptRUfXcwWsWyxSU22",
  "key29": "9iyr6YpYwtxmg4ZPUQZRtYGtT1toR18LGmZBHi92Hfk8EZv8N9M2zhKarRp1JBhHoDxaHeAERQ1FdmQcYkKN6ba",
  "key30": "2cdeTS3zmTqb5qDdsRC5MufHiM1CZBqQRdyGecQdrTjHCAZL9t8KQWvFF1NUmhFXe6NSdBEbrfvSBcm7LduBi49t",
  "key31": "442sT4225mvmFr66mJhdEmrXNQ8RdDTFm332CcWqf5DxgTAtHzKwVjvKgUwmAixYVRZxxSeuyuX84xowgwcyMBiQ",
  "key32": "4G8aByoRESNTdX2fdYWdpP9ZawYiNdcdjAN23NJFcJoT9xaXB2vQ4EbaMe4dfuqX3vXfXpGY5hQxN6tKBQb69RoY",
  "key33": "2xTXvoiKBBqrRsPYdLtJt8tgtkfsi9M2eDg219wZ9hLTc4VziqicfmW9Ub9GZyV1LqfnsJDRnoPUHejVLWVHNNWN"
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
