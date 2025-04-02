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
    "5LwNQSjeEdqQxoadSgAVnvvutjZKQgejESRJK44CNKqWns8TKHMgyTJUXaGRyxvyRmC1vhCrHd4tPYexfyRVGjMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7wfqu3GzvkFZjVTYovXceZCBL1FQAvgGKXrmNcgGJrzhwL9y6hmyyZkHx9BLjXQS7v3x69Kyekqkxr1wVMZfsa1",
  "key1": "3n96o4vdxpYkTq5qKE9rjChGBMuZ6UtnmKY1P7B64YyiJdkaaoRGuwhkJUPtPiRXrcsycLguXz9nQ4EqMtJtRkW3",
  "key2": "5zKhbh6zRgC97APxvtaNFnSN6HuHEjp5weFHJ2FesBYdfUovib4mBDmfbved5T4DRLAh47ajrAw6rEkWEjWEg3Zw",
  "key3": "5hq8sBwoGc2ThQMQqeq2ztxNPQQUNxfn1w1noD7seE94oJVmJWBNxkvkphwNKgKSEd8xtDKkkvDNJJuo2zJi4eMS",
  "key4": "4JWc5WDomGD3uCYedBSC3upfrP4bTvsKbtPxXsQGeovCqKU5qsd9ga1rLRQgGfiBHzSJ4RLPAgJnBXSyvW8NKk2h",
  "key5": "3Z15W5kAfGqYvkKfi83k7awcYRk586bpCWm1gpUw7M9JabVQrSThUvZNQ5XW5jDtfANSSujegFS7sKYoymc6nzsX",
  "key6": "Axi8NeMcqTQgWwZ6i59cnT4eCGE1QGS56rSUtNV8qRBBbq9Ef2Lr1Y3prX5Mxh6W355ufpd7cCT8QtxeuVjPzPu",
  "key7": "cwvKY9qc4ubcmoX5C6b2kxc8urWa6dJY8eU8E6JcNZr7CxTwW2xcaWSdmJZ69kzGA3pr9w33wJDUaoQ5ukajLbU",
  "key8": "xZMfoSRZfaawSUoKBXapRozHwxkTxniWpDM6FVvvRnkAfTSaZnS5WbmuRE1DGA9zW5pq5hssLj3gGA3bUjfCJba",
  "key9": "2AGxj8Yuo5AT8FsKf2oW3dfQ8LqqmW45BR9xh6hDFyrm7oVL2mkxaVTNdvgTsPtZduqiukgP6SSiCZ47mshKPAwy",
  "key10": "356PGSqb6vJY6MsB1ndebom6Ydmukma9LETJKVUddfSr2ZWm27jq4omPTTNuXE3C8WW3u7NdfwAZ5V7P9BQWZ7cj",
  "key11": "2i68hkkowKiMPHHAX1d6XXWYeUZC8nzDXUWs6Zv3emQE7N7tU3GTkCFnRVhMGe4j1oviSfLGDYDLe4eK6YguWuuH",
  "key12": "5bLnKhuq4qVJvyHfUGdFs4n8S5onXQKar3Gy7TRnavMYMTZfQVZxtGa8jdYJU9K8LB3xiSYptPNqT6SgyDWX1RrL",
  "key13": "4izevmqyQS4ZC3qSfEAC56FGWW8Tkt9W22Cj6QvhqbEfb1HfCnF3SBR8oQiW8RnTJjiXbZ149XypdKptGSfdhVSY",
  "key14": "4qeL2vkEB8TRiaog8oESdfNMr6v1NtQaW9imquvjDydjzUtU9vpo3ZaLBig135o5br3EYKVyg29CJnKSorbRxpoN",
  "key15": "HoR9p5nMgZNqiDEduezesUXRFBdeiBChvexM6rGh2VjwxSPisRm1bsAvkG8AT6zYJrmKZVYaAQ3k6h5u7y4DK3A",
  "key16": "2hQYMgCRJjVmwpSpP4fTYdsxJn6giiCg4XuBbaVUZFYQSMfs6a5jaYHrChifQtS4QVpoB8Tc7hgDugPasZo1M4p3",
  "key17": "4AFfQrsjDuVxuZyFKsF661P1T6T43iYPZ95MzhB2vdSDWqemLY92o9cFR1RU1dgggQ4GazEyiWEUXWGHqdUB9Gui",
  "key18": "5yRTj6JoeB2tDhpAQ9mLmPz93RPU4eqoi8ydzvEq5s5r9YkGt4PS6jB5D1hk4a57Pju5CNpKzKmFXkibM5FtVzhf",
  "key19": "2ZRKiJSdTMMrZYma1DvKDMamkAo6q5WtGZ9beAAyiZ6TYhEK3T72GkpsEJkUytvgwTZY4SdQEpGB3zG7UYeq6xX7",
  "key20": "4iVuy2BLzNx167E22hEKGQ8Z3KgkBT7eaDHHVdzBDJe21cPz8XLLef96yjivLZmCyjC2adPR42YF7CsMoeAXorNR",
  "key21": "597ayRf9YBW3n1TBr9WBvCaXj8KGHf48ttEmUdvb2RJTCgvUNc3FyQPxJUGEMRTm7uc2Kd3tz5agkW71cxNvTu9M",
  "key22": "3rSf7TtabCZt6nurKPPZYguWWcEQCCxw4KWjYLz4YnrTaVJ33eVka6fQEQQE1Ecu8K1sgXKo1JP3e3evuKtjHXv3",
  "key23": "3z9r9RfEDm3yDP2pavaAnBsTQhNpKNdUF4biwRm7W3zS6kkQoA3GARWxqobCb9eUjJbxs3aszeGdh5SWgtFsYuij",
  "key24": "66mYW62gM3oh4ZiyRZ9ScBuW2kkubzXknXwPN9oGvh7AudPn5oYeJ7FAVfnZ7X13GHuJNuQLWWX1dq7WjGt4RDca",
  "key25": "3QJLgBsGD7x84r3YKZPozRYMBDwcjCm1o9CJADGcHu59qn6RzzwCTgiYnyeNQtJdz6d5vc8a3r4bJ43e4vuSK6g6",
  "key26": "3kazKSsZHnJdGSyuNtWSGX2Bwef6oSNmPdKzevoDzV4wqyUx3KtVBHLkwoZ2LH22Up4ZM73gdVZWA9xAU7QtfQWw",
  "key27": "xCk8qy1C4RZyZPHoST2rjdwzMKkfVXye9gLiaTK7AW9gteGAYaoXcNHTASe9hsTfo3Sdk1ZvPcTHCaN1622NKdn",
  "key28": "3xuQFmRVHjpK9s39iSYQ1cPwCV3R5Wfq6EFHShv1hVfYSpvBwSwMje7qQdW3iyExNGnz2ftTwwesrhn9QNBDijES",
  "key29": "5Q2KbJHbH5rMZuHaEwafChXDQHsgrFaY1EBiYfovkSCQxzAYNeumjhWtsEkczRntzRje79VHsaRnwFwn9bE64TWm",
  "key30": "4oeVMCnnp5cYB9pLXa252uDptTsyCde8Nw5imSVaiPkiYLMLC6qZ15ecbqK2uvp6rnw3BMNGEdkTMvuGaFtk6CZd",
  "key31": "6826smUpre51QYUAmpAFwJMZnWGNDZwf7zw2bfRi9swFDTmaJjQwq3vJR1f8rZSPFv5QnX86c1YUYdY5uDLrZ6H",
  "key32": "4SEe6qXx3Ak4vs4ezTMSZ79te69UYwnL31yFebri7D9XdfyYS8wbHLecBZ2yusHsF94qMc3MYTWo1TjSumEVyotz",
  "key33": "5obvrbVNbWUaxbFyL7fAiGxCNLzvgwgUj7Nh5X34TXTsrAi2wzKSeCAB9cCVWqGPhqEPTPoktcByQ4aFkP44q5SS",
  "key34": "2kZtA7xXxBPFPpL42iXvMbWYzp3eYYc99GV97MWdd1PBME7wsbpMhevj7J5Pmq9TBgpSZy7K4FjFoycbPy5cRodA",
  "key35": "2gyMKnp6E6HzojLRdcQBzTZfc2wKDxbZN4UoN5rEsNhdpAumsbNZKWGETnps1mQHZxDCcHRaXK293wnHzimNMaSd",
  "key36": "3e1thjd7boieHGRPy37V6aXyHY8KJQjZZqnYz8cBjiiNhmFoYWG6kMFpVHMHUA8AJLUZoQYVd18XfxqUo4PBzttg",
  "key37": "2obUsEV5VJ4ibXLrFdFUrtJz16uaC3t7bNaDoTmNUwtpPt4QWd6SH3ZD3Ntuq3wkDhCDxWUQgrT41Uu6hpu9isfH",
  "key38": "LgRBxLhhytgDXKnjrLGgAkZ5idPzNeXEy4MbgpTiGsCiQQvhVu6hvSkMQopgJ14JqCL81P2E4oHQH3WDNmSvMDb",
  "key39": "4rj77rNEQHHiR6r4ZzN1gG58QjMYD1Giv6Fc9i7ahmodd3wogbgQUvLkKwH371QJ7cTHpzau6tb5wup5cbKG2pns",
  "key40": "5WJadoDcuj63JAQgqQjytZujMb4NKXcgPzftD8JwACfhjeS1KZZQ1Haux7LyTJbh1TqriYNgd4Bo2Jutg7gYHbZU",
  "key41": "2rn6Rm99MskRz9MC1oY4p1f2Uo9fVBLUBi2voj8ZWXSvTVGiyjvu2rwo47YXLCv6qDYUBneiUSCHXAB3KYc9h4JR",
  "key42": "iTk67Ac6i5JhGustYVTxdtkMwtLFA6WATJvpesgj9zW2pXEMjWcpepmkrV8L275oDV8zsvqJMn5W9xBXwuYhuaX",
  "key43": "gB5RzmkWknNZ5Db919qZHMic9Qb6TKtaKWo9xT1N68pjRsViL9pAKwP1JjMufdTVfYefUSdGrp9uzgQv76J2rPC",
  "key44": "5QZCsVPN472zyKuCofiwvRDW5rX3oDmzbhQvTjgUXGvkLorTWxRdTUz2whpnqaHbiCkWogdfBL7CSUjLpoLqDGeA",
  "key45": "3cMhAnj67qLKDMu3dgBrw8367g38CgREsn6YPYcspUwjeJMyhxYrV8t9EmqDbngr8HjnexpggAzyzeo2nTMT34nq"
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
