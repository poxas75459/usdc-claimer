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
    "4EFzkxfA9q9kVBm8pbAYCwaYEMG6oPXVPBSiTanR7SVL6bMKvGKCVFmbSr9GsyQwq9H8dGpQDkrQGg13iVkYei1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GADpkMxGbyRgQMBXBeAq6fkkwWJr1mw4VGqNUfnt3eappexFf5ncUjFNSwiBoAaCcpwwWjZcBCzCRHRgnV6qDNC",
  "key1": "2rxwMdmeuDRy1ujYTpKgMRSsnogedt3uarPs81GY5Z89VvxnSv8ApYWC3CrXFSo7Pc3G7CU7Cj9BwUuABhEGceyN",
  "key2": "4uRB46ifsM4foEqoKMmFgiTbCdAYgSwQHEeBbEEbKdVJ8bPG6Xhsbcq1jLvaWPbM3Mq1uEAdgZLQtYK6z29Yr2Ps",
  "key3": "4wK7knZYpZmUKT6hhP9LoWuZMB3QJW1yY5KL548SG2XcRKw5K6gdrn3DKdyaYczQmnw3WxioaPpkaeYiY9BT6VaA",
  "key4": "47CX84yRHRtE4bgP7QiB3D3hM4sEqEU4qUJ1Bfr781HUPm3hDDevkxkJ9PomRUhRkBjzqC2WXniYqKR4PytAbGFB",
  "key5": "5Y6ZMRVSSfKo8qqEDEdEtydeyDSGryd1NLMJrAwAkm7h21J865XFrhnyfGCmqhwXrMY8B8VJiV6g81m3qfjcNp5m",
  "key6": "5E5iPmffNuWeGAevL3sZLA4qTSTdkiUsjAj2SR1D9qnqNg3mSV9YZcEt1M4nospGE2YeZ76PeGPwz17ZUowgiAEX",
  "key7": "2cEJP3VAgv3uovpQ2JNi8265eiZnEBK31M1aES7UPsUa38zRTQ7i9fp4UDCaJj4NQdbJ7TWXa1Wg9tcmXcpp5zh3",
  "key8": "2qTESByMER9tTK9WeaPgET43sYey628CiJbix13hRWpavkMz5VqSKBiLf484hZdQFsBk5xidzGS6rixNayYm4N3V",
  "key9": "4SsZFGwJ616HUoCiMfcnVcrZg23Lb6XdJysdJAEQ8WFX9eoaHsyd4uEeTGoqXHstUzPuByNMQizpGGVGQhA5D4kM",
  "key10": "Bj5Hv6uLgQ16A7E9Umoi5rC2M39XXKjLabtDcNN11ETEzkHKcUCdRsWwDnWCHeF15N8WybXjrvDTnTrcmPiSbdy",
  "key11": "2fQLPivDVE6YoVKEivef7mBdcr55vuq2YXFFBe1GdAJLvTAsrXLpXJdoS43bYvpHQSqu29GcoR9HCHQwe5QxujPD",
  "key12": "5S6Ghvq8rL7TjBzrixv7JSjudkztU53qs879ejrvky35yQQKbyeu4LMCw9rQA1raZAaBfYjSiSaZhs7H7ukfGJh3",
  "key13": "5UxxX7MFfBQoj8z97R9jwrK9bmdnaezM7RJXyHAep48CxPko2e6kiWNhmoxzKLzXruemuzHQxh3B4xWkgRVVxjuZ",
  "key14": "5EN7vhMVCCA5iYrXmnHrKtqN5wj4Br2dMk9gAb94rXtYBewgpQN3RMSREKuiqtPSkyGpJuJfkqvBKFhx5FQaM6Ab",
  "key15": "6AyH3r33GHDgje547QF4uu7rFBtaNqY9TFwEj6uvLD1FiJmrcZfmwjsuGPcgfaFo9sjsP1a5RZ8RUoYVhJnuKnB",
  "key16": "oBLhryKXAFYKopvQtSJ56Z9cCNP2RNQPeSpTQ3u5gGQiTxL4T4XTtL7tTDnXnzPeoh2HEykv5iNbZd28KZzGmQc",
  "key17": "659At6e54iwYeVibc2WjT93tFcWavhWhsimsVAg635xyMQ3Toa9GPPFJ84Unzju25wWckc3vmxQGVgCF9pLVW8qj",
  "key18": "3HAB99aJybtr7egXVxhoLTspgCw6R1utzSXQQ2myA9e1ET7KBUnw4zzzpV9sF9u7Bo7Xeg7Px3HgYcojhUUrJoqv",
  "key19": "ZNbYDuCoEZvUJfXmGVMppWyBAJFjFyKdTmZdZQqaQ1BjYpezHCJygYSuXd3zTRjBcs4GZUS7cpH79tWr16cTi5V",
  "key20": "4YrsTX4aHLttUp24ncQYQbgZMSsyuPzPcYuoqrqzdfHZE83egYMDfucBE7WLP3ffBtJr2K8nYZrgsCethPkbSvGE",
  "key21": "DixBvRjtGjsgr7j5ZEaNgKYF3cVu4D8EwrMmnF8HVq9iiptGdhHv5EwSM4m3C44eJczBewLBjXThuRAGXSRjq8g",
  "key22": "43XcCyBsMcP8N8HCG9163Btn4CsQuwQQsM4JrGay5aBnQTc3Gatw5us1mZwaYobdPoJ175xk1b5jsA4TsaecY5Wv",
  "key23": "4mHPkFnj7vuZ3a19RREWRHFkxRk3QcSex4MMfKqqXktgzYfLUvkzcJ5EqSPh9sFUuTzZCkMnQPjU7MALvHqvLT52",
  "key24": "28gp6DJh6RorrhsGidT66NiVXkvaciXgKKUmyBRopGmJ7KKkERAEDsvgqCzasMiV1CHtfLRkTpq7QoPJWRbHddAg",
  "key25": "3q7RDdnGNu57w3A1isdAfUBJ2mzqfaa9LVd9iTPzPnajkFgWNGWoN8kFGvNugmF2X6yTPqDK7Hr5Zsb84mmXpc2j",
  "key26": "3TeGD1SS6VSTQYiSLkSWN4j5UjaUd1ALLRKe6SXwFw65K8NrHKbSueTRYmG56Xn1nqyRqzqUPCVTZLuzRqJHws9t",
  "key27": "3ntK5ELaw8Le5rLnqqVFysd87dVzhXiPL4Sd4V9MzWwD11B9Mse4qncFAZbzuKwYiMxHBNQQ5t6X7rGjLjEwyEG7",
  "key28": "4wDWxCZ5frvaeGvd6WyUi9RHHWvGhyxVEbCm1jH6gtnofLPAaUkHZ4i43E1LyXeHLbmXtbrNKaRPiDUQDx3saY84",
  "key29": "22x6JKRuWU6HKCeiiDDMhD5TqFcEgVjF9xC5u4yKUz4HsHADomrbhEY8p5S7XLsLNuZvAnUBJNAThjRpozGiQYop",
  "key30": "5E33TRtjmX7KNc5Lpo4vEtW1MJ6Yr6KCR7nDee1TWKC9FAhfCECX4ZATiyYwz3JLS4n4JCKXXRnxxZRPSCWp92xS",
  "key31": "joFMqwFPqe7L9F4HWLDdBv4MyZTe6nVqgidvTU2pcwr1nWnZbB3BLWkZum6xRpD7PR3mcRaRonazJFffcFRrvrR",
  "key32": "2Gmks3v6VFCnwDkNQB2Rin2Q62TfXCGf4JDFxHacm76iVoCU5hePuHfobjww8Uxh7w3VQqUAVAmc4kYTz3fgg16f",
  "key33": "2Lz46ya8xQVjnjaLqHZG4MNstnXzrKqLPrMBxJm4iqoCqG5LVwCrJPgsq6ZCARbFNrvxg6183VkehYHHqCyNspaP",
  "key34": "5gEYkA6UL8pjCkRZewYZipAKGs1uqjtUp9RswGzN9MoizuJhWomEYD7kCfq71i1s3NgQnW3tp8ebDUCHHThtGj1z",
  "key35": "qoztu8jqtPt6XNmtANEBNpGmiyn6ZYz3ibEpiEuZeFMxACJv3d1kc9okQinG7HmcbdKeVmckX4g2kcmPkCqGkqu",
  "key36": "4cA82XGT22mos3Je9krvRmUPRJT9b4ULs8jF7e6VF6DjfdLSjSNdD1mo5KZ6whd9vMLRDLDPJRzPWeVRrHWm4fGw",
  "key37": "5n4rneC179fqE8hyVA5KqV8cbemEHhDRFAmk6d6tvbHkmEodPoB9Tmwm6TVgqQM1ATime4JhxR9GULVZEYndLBB3",
  "key38": "QGmB1xuipeKuwbwsdAnabXsbNKdBdBccw57iXMJ6D5boU9WTrwdp1yxAoYWon9wpsoD9U3BQSH72x7MDUwcT8Wj",
  "key39": "5dMAL3dX3vga8uVZcVg5onAUcFmqidbgoH8BjciQ5TP2a1MZfKCxScBWk7AuqB8ttKiBRQ6B89G3BK9Hwt9tTacL",
  "key40": "2rBvzxr4wbg1UjCJ7Lc4SRaobvPb5cDwSFNv682kBtJXLaMCRZoJPBfVezVp4jts3ZawrB25brd7ccJak3stFNmj",
  "key41": "4wVWowMQCwjp3MSPc2MJxaDxsDmquXu3X1etk95K1RWs5xPoVCFkMCxHCcocq4qph7YtgnFPCNAXjoUJLzz7J3yR",
  "key42": "2GMfktQwWaw52N5XXf91HScKa2zbdhGrwpRHP5GtfzLrUVjB8XasPMVL7BDiB3QKX4HoPwNDoCHY5cGfxPBXf58D",
  "key43": "3raj8igrcUwaj5JuDuHeU3M5mazS9iPtcd1VGQoEWWbayzVQ3m2HTSm4JLQUxpp56jU4dR79nEQAAscL2UN7v1zR",
  "key44": "3Ex2j6seERZGLNvqaPwUicASm2pWEJ3QNVuABYrN4nvqxvc4nhc4yRB2C9wqhNQqJNFpxK68TDYT66EfEhNtPyyf",
  "key45": "5dPJJYL3QdtcA8f6zox1Y6epXnkSp24mJ3zeJaeciW73i8ZHAviTEmg1MK5xt4YbwLFSfTFNreAJXTCyoawrLD32"
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
