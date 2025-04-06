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
    "5JJra5SAZt6MJA4XZazNCCTpcug2S1YvU3zX9Z5vjkpLY2yrepv96C1Sw8eevw4EnjzxRcapvS6RaaNkHfaqsox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RagvE9omhgkV9PwDnY63pDqD3CxotfCnhRzZEZGQ3H2wdxHHk2rLo67qnjW4HGhoSafosCuQQt3MUfVjq72kscg",
  "key1": "4ehE3XjUDwD1yNC9YZo7RpieTwshzybS9v8NGgGHie9QKEExDbhconjeQNPXbc5FTSrmUvEkDQ6ataeSnqBbKGCP",
  "key2": "3qLz24NLJccLj6WS2iWo3iuZLApFQYNJp5ZPPNdUDkzuDdKesQe9WejGiMc82iqdjTQDEu9cqyxZS7npp7zRsRiX",
  "key3": "5nhqKYyPZQy5h5MJ66uLFH6k32uuPoTE4gvG4CsUnHKvCZ3T5jjDjQwoA7h3B1LYnhkbm7XBRQZ4sADeraoXWNR2",
  "key4": "3UcP6Sbn48U955W6Rbrq6m4pmnKqJoANC9mqSovNJYPjnpoywSjfSY12c2YwdERVcaWQ8XH3ErqtFwJiGrBH885R",
  "key5": "2f3Z4q8fxwivx5Pxr3Xo4hy1wm3XBb4yqpmsaHW2LYN7WpC7p7vuxVX77BELXM1YcGafYaKTY7k1ynAVTYwSYdXA",
  "key6": "2auUmMgwXi2y7doJJieHn8yC2bgTUPZDAz4t9HmYQuKoAUk3N2s14UWENhhe5LHC8ZJsDBHfSRByy1zjxcQhsft8",
  "key7": "1PnZwUQz5aee5nd5ZXdWGM433Dr4PmEeLsbsmDDoF2HsHg56afgf4LBANT7gQZsQDEvnWKsEqKnM1JbT3V6uyrd",
  "key8": "3KSKZ75YoABApWayxXdm3mfBY3ZVnRfTsqPGR1MCJBeXykSrV9ujUMBMDbPDwsBSRmta4G6zekc4uGLDRaamWq37",
  "key9": "2qtYLvDuvszpfyvk1U9fM72twnAHzXG9q4FrKzJFARydEyFNaUGLPe1vxu9KaQTZxAdit3i3SYuRCxjfcoNRgh2c",
  "key10": "3qTPzoMZEHpTz3CmjsYjn6uG2jN6pbCv3pCA3ZVu2BBUEMv1qyGmC8KxXKwMfDsimZcKuLjhSoN4fPtkJTM5zgwP",
  "key11": "268Z4dB5BbVzjaES1HSj6D6eH5A4sKL9to7oYmwDM3y5rtHzbiJgNLWoQi2Lmr3sVK8UasJL8BkSasXLpzcKuvtv",
  "key12": "uTZAVXeHzsKbKKraV3w74RKAJxRn19YCuUHP1uhKyANbcK1BGBCUT4ZhX2yWjEiFVtSxvpPE9iWStqUVPWm3hrz",
  "key13": "5PYGthrQMiEhDBR75SnPg4P8biDU7Nfc8zxj9oJuZ12G1dTP1JT4AfULp7JwabiHHKwpGs4zk1EX1mNeSDrDqi7a",
  "key14": "3tFRK9eBeG88vSJKpZRmT13PJgU9U1WVE3dMd66Y5gnnBdcuEwPVeKynkgA9172jN4yBUppqk1Gsjmc3KS8P851M",
  "key15": "3yxZg7d75BT8i2S2fXoLfxmiEoTmyHmepfu4dR67eNVuN9NSpvhssJc2zwu5PwfFvhemo1eVL1QuYTjJGoLBbLxJ",
  "key16": "1Fz7eJG62qaHf1FsNvSTdTcw4RcTwCGmMumvV6eDLnn6PmFuaqsJd5JY6gyEm439EUVS7GK389r4K7E7SVyyvmg",
  "key17": "5CKmV6rYm28Et8asbuGqd6xB52eJxkiLUPDEjY44nohw7TtxkZXDLn1RxSLqAwWKbhRgGwrNyGELPoNfqEGPkoar",
  "key18": "5gJnBDAzYx9P5h1DyjC5g2UmbNxFRjeLQJ5aLRqexLsKMq38WKCAwbWa6XAhPXdq1f9GTBf2BCDjhEbeqvyfYfJH",
  "key19": "51gwnRdA4xQiPoQV9yimRkNVjqhWaZx375eVXfdKDWUDFcpmcgDZA3ek2NJJekAKeojNU1GvVzS5ekRtubm4wS4f",
  "key20": "3b4EyqPKSpvZaumobQ3vPPGbhBFWJeio95a8T5uWuhqyfZVV39434p7VMbjscGAk1zzDSXZT3aN5turtPngcEXNE",
  "key21": "HZvM1o48moMS5uBv2VqiL5vbpQ4WWrPzoZjntcJFu2rNvsG7X82NEnEc8tR1GxTf3jDX6TBfgf9VRvyTZjdUXLc",
  "key22": "3sCVGN2QZsNm63UAwFuhQcw33rMH6eDkrehgtVGTUaSZszUVptrMP5XqPaj5KamjTgtpQexXQemubi4qUTYsh78B",
  "key23": "2ETwyP9ZZBDebwZRNYhHKzDc5hbj9eda5fLZvsmHpLyiGjQbv1HXYjjezTmDDNzJTMJc13tFpGkZ7ZjnCbj9aMGX",
  "key24": "26riatGo7LNz3TQirHXtwpq2pKDRcUkgbyVPnxVqKuhiV82nKBJebXb74tmdh9RUaC2SQz2m7bmapgjpzEZmyDgN",
  "key25": "2BjyNLaxmvR38rKXEqBKJYWMZ2zDQYpawFpaZJLyQ153zyX4n3zfDFtVyVWPSvhZEboi6U2b9RGb2puYAKgj8kAP",
  "key26": "9jCqfk9dWRpEGyJwQ94p4efJVJn76KjBeq6LKqcUNUkw9mmiPGDV7dq7udNnjbfhY1W4XwKmnnukB1kd1yAFA75",
  "key27": "MVvvZhttUG7M5SdC8sca2L5Xoy8AcrDoVs3vTFfR9pxo2FHBh6aZ6UAt8dbniLxGVmN9nkh6tjF98gPeScMbBtH",
  "key28": "5ht5ZgJZiYk9euiGRiCNcEfAVwQWTTkwc6hGWvkH8HZH74axyYX4cMy937qcuLvWUvDeSmW3k2XJy6u9QPkFjhzy",
  "key29": "3mkaid615YDHvYAarx6iG73FJdt3QVt1Nc7mgcGUEtMkcVXffxKxYZfv1wJqoDEJZ4NieYFUVcFApJGBjFWsVTwy",
  "key30": "2VGnffc7D4i3FEBG3ax4ay2HMD7Grvtd269STouYP2P2vkcfveJUpZWYiaJPFn9UZDwsC4UMkomiC7a4EoJL36J",
  "key31": "CgzKuDqrreeCQoU63uBjuVgCvmsQLBUue1GwVEHe9L42Hg7TNXymYMwk84rPQKVtUrzMMmc5nsXBvHKCJokwS9z",
  "key32": "yLMD2zuV9CXDPwwXu1dGRbaY8VyPopqxrmjBKgZAKMxTVbvYaHuuBrZUCvnv8svzGvxSCC6vvh4ZuvJtGuM4B7r",
  "key33": "5LeK2zixKbS9qyrHRpbrUQLvPqhkFSXK5j51ZRh1ctzshTaY5adLtPXW8wH78X8B9UKSFS6AHZg4dZuHRDdkE75c",
  "key34": "2G8LuXMCE6Ew9vjkAm3r1juPENSZNM1EZEH4SzEREoaXtYT5ygY9zrXFCq3hm84PN8KT6taaTXDSaLGCRVMV5EpQ",
  "key35": "3BL18BAQKBPRaJBEGtaJbQwEuwN3VUevq1abPMLMfytMNyDogqmVdmrgsgnGkAcknHevEUbY9zdWuPp94dGgReGo",
  "key36": "3DprM1SnNd6ZyBi7Q4ZkvkC7bFEm839tTdXHhJtiFhznoWoLgX38zw43DzP4NreGYEqZXtNu5gLwsbepELbc1oWU",
  "key37": "3K6bqeUNT3ZJqPHfXzLi55Bo8xZygkAfhDdcTw3Ga6WKAiWpgPC6uCpZMFDMG6thd5gZudovJJCToRWu3ZoMybyN",
  "key38": "2jnP15j5G6pV2dtPgwFweC4BrbKTvzNjcphENrX9Mh7Je8geYEfzbbDCru7Unp8wxPAoP4rmwYYdHy1kXGnrLg6m",
  "key39": "886ECnv6zzWtXt5dgwXxBZxDCVfJ5acefQ8NQYMpWVeuw4pz2asmvRkwaJmq9Ly9UXPBpKcdMDEiD7QgHSzFVnc",
  "key40": "56ZuEo3H1mkRLzuUZTuZz2bw6mp8cFat8ppS7PbcQjuDLtkga82LHQNpcvJpLwdfT25LBrC4T6DhZeqRPp8fxU3C",
  "key41": "5MnhEvzPmw1BXRWKYbuhJdFR479dmRZRdmeo4ZQ6Aj4532SUyEERCYxRF1iHkyKDKCwk3mWG9uepu33XM5qZTRfz"
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
