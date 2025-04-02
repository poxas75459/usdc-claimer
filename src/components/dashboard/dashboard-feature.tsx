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
    "3w88So9s9nGdDVbiEMbbLBAh1wqLfVhUKYbJ93M2VNzT7RcurCeMpDDJH4eBsSBxVgnimcrwN2jVVPEZ2ypyqj1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21JTjeoPbELPUCZW3uMXDvPA9HjgJ9EjELY8641dSTpT8SsYi1JAdfgPZ8TnuzTVzmoZdcCh11pQRRyVdrU9N664",
  "key1": "2iDqXYZqvFNxTCk2J5jkeRJ3TbLz9LUo78xpbFqzWDbSMiVjZt1wTeA6qmFdtRCqKom7rXhzswCEGHXxvYimJYC6",
  "key2": "KN6ja2wjxGARnhkXFG8jcZDiEYtarNYThTZwiguzpwxmUJdjrremzKBHikPcHzUgGNEaQbtKt2krDwzEw1JXFLA",
  "key3": "4qs6CyViqDcnvVaBhQ1tpBrts3SdtZPZdnusTSsVDkNE3RgbJKtRFHJJVRSRdUykJvXLzMQkGuYatVDqb4bBcCkJ",
  "key4": "5D2BQwFnMAFG43rVTkhjeB23q7f5HcmPAugUBtMG93ZhjWeHMK6KvfSxPBr7ijyMBkgtfUdKawHpHVf7kBhCFpzZ",
  "key5": "2AcZ4XGY6QbqpJ4BuYssBhA1vYMyTTvZRTGkqQzi8hBo9vBgG1co7YfFfGN1uP4QbjAgTTVD8XhCJz2kMX2seo1R",
  "key6": "Zxb8UkyvdjrC48zqNUB9bKoo3BD2qXASDeQvtii1oWQtJNzstJGCEd7Yfr15zRTK5qrXacJka9Yf1HQ86opRchF",
  "key7": "3ENrKZLcFuWbnDhHteoCLucdJUZGoY1W8Xz5MU8KeCpXkvzMdHpE8EBr8GAEcJ7qBiHFN3MWBA75VoNKDE4FQhjj",
  "key8": "5AuuxtuBU65LYGCFDKBrA4aGZCUPNHFFbj2mVzYZdCeX6dYZ733YmnkRBLHUETTW6kiFF5gMf3m2A5Vuks4tTmoK",
  "key9": "WSWVsgMU13sAc3jiSJNyoiGGWQVBPTDMo6Nxs4DBqvMs8basgt4kWV6svx1eFChx745YJDBHt8KBxe5zNqACt4v",
  "key10": "3fSNaCJfA2BwoYWDXib9VgxLfR4EnPYTVK1Q7LJw7ibL2hxPVJec7Mie3qhJuEh31QcPoV5CL6HkRpzpeR4mUhbp",
  "key11": "5mGdvK79xnnDwJLGzshGUASKUtZ6huRhizxmFBRB8JtHJcvbtdEXG1wWrcczjmGknnxogQQfsyeTby9GJHYyZeRY",
  "key12": "2JWmTo7kRvybfzpJ92cZTLgWiZvSMMjhcm2HoPNwPDuzGSZV1r4NsN6S84epdsGaoZKo1LZ7SDXKgEjFgCzohEfR",
  "key13": "58ruHcd8Xv8nK6BnNMjZ2fJUteKBcsi4zube7nEX2hqKL2L4jd9Rdvs2jUw516KKnUPy3WE1VSVrUQMDhikcA9rE",
  "key14": "37P4UZG83R1xe9pn5Ge8nFpJjR2tAYKHaP9RLYJV9SK6yRP6SSncEvnos9abpWrhYVjMhUrSfEAwFQfPy5Tc4oFU",
  "key15": "zRYxVjAFmW9FkSJoQ4Y6ZagHrCboSjKyyjUsLy1avLgVrHDDT2XJAPVjPmzqHZQAmHuKpq9Ux3XEeF1SCVeuwuV",
  "key16": "5fTyYiX23aJUhQYX1LGrqDzKeRXXye68rYSMqrTPfSC9BUTNTzHyehyAv9QY6CKNv2C6zxmikYSvk2F1bvL3JpRA",
  "key17": "NBhzd2An9TW19CwLPoseSFCZdKEJiXF6tYpJzwL4VuVAiAjbBf4wj8gb7d1mF95QGSqQm61gKB1SxV4VR1VnXwo",
  "key18": "5ERapvni6ucAbn3nt7JpRHWY6GmX9jkeqXNmuHpberEDDJ8v2DSBDhCugCkhXmzLP5RKhA4ybtfA9ZCAVuNgtTGx",
  "key19": "4j792LoxEtziKirFfRykBfTwkgkQ1bt99sipdxcUzB7AAS1bAgedD7fhXZimDbjz5SPed4HXCh5KEkHv6vEexbDJ",
  "key20": "4ZqzgFwYpW12qubmdocHoiWanRhjNzvJe5egTTsJujsS3t1F9qAEau3E8edoqg5RAutFkceK2ptQtqMk1wSeQY38",
  "key21": "2A3o36riv2ayZfvJXwEqqomc1H21iuKxMFSt5CU1sSxDNe4dZn5b7Gze7EcQyNmJDQTLAJzr3ntyEXz6bF28FVft",
  "key22": "2F9arUYWkeEuWxZezWXSFKym1ux71mCrzULZCcDXahp4wck5RP8vPNdgi1RCy768HMicxjxJ21zv67DKqPkCtagZ",
  "key23": "5iYLaRkuC6hiJkLZYGEA1CXxexo44kP2jVJif1F5BmKEfv7cmqogd2sQAnz4X9Jbp9jcF2osfE1A5X2GPpp4iY4n",
  "key24": "31RHGqjEqhnHyK9knYQxzn2oYyy7hhK46BiMoEoDCBdpwBY8QxaRwAQ8mgpyKYBoG8zKZHS2nzkUi4dU5UFos9yX",
  "key25": "4xovWeGWWaB5SVAJYQ7aV1Wit8srnHttm25q48MQmpXRe9TN6c8zVqWymwbN48PDmRZqWRiWNLB1sFwqRPpwyDJV",
  "key26": "65VyYv53AyEj8SEiTvMBDH1tNCuWF1VL64G7moMjv7EKAvUc1SmZCmUpVyVfUgpfd3NswT4iF1R7QtF2UtwVK8E8",
  "key27": "5uZfJ5rgGUzfwgsqDmw8ehDLRSENuLQZXYdpAdNDeP8gzp9Ys3bmoxXGN99pdzgFe9CAhgqY8PxB44C8Gyxm2hpv",
  "key28": "JEMWpRq1L5nfzrTp4Ny16Rw1fQMHBNHJnHGX33LTWC3hbmNcgsMF3NGJo2F8QM2iNMC5emnHPgzM2pMgL5DhAwk",
  "key29": "4Maft64SGn1Tty9nr3ZWyEzNJzZh31C5k4ubd5DEahbWSiNb3us4YssHqfhTJk2QDj3Rxsrmg8dwN5WJirBKR9oJ",
  "key30": "52fjWDeHn9mtXj1FAuVXdEUZ3hR8t7q2TRW4utr2VGpH59WUSj17uavnizoWypimjazyqgKHvYRC3D4XEq8eWrQ3",
  "key31": "5aGVPSwzjUifpHYaW1HNZRME9MNySwJ933gTvRYN5Uhf5Enz9ayQJZ7HhATkWKT8G3x86zcagH6pCtQAXPRsfKUN",
  "key32": "2ceCxBMSd9NbQKVHUXCY58W4cwbTTzdDsAgDo2uaqqfN4s5LSAks9AMbuu43CNVHhTnksfXnNyj6b1LDfwhiGCuw",
  "key33": "5RsBtKPWkA5kpPYKeXQWw4coKHtWFw5hEi6sNJGmvAzq6tW1mA89MhT4on3XQCqgFoCqypZeajM9dCxzfB5qjbhJ",
  "key34": "T8Zsou7o7x9C4dKznphdocTuaazReXbmSWS4nDNmDBPmuDzq9U6akNim21EWtQ1TgZf6Es3inNvrZNcULdVvpT2",
  "key35": "2xxCD8ZHR8z6qtxFsYcq14H636buEYoccknNPjR4N58NsbbSvmKKpz2sEJwrQoFBBSQHNLSDPQtFLyV42AdJAhVB",
  "key36": "3wQfS2nypCr2ou1KYphFU7HwNeJnE3cJ1Lm28t3uvRzH2UDo8xWQuqrG5H6xe3N3Wyzde5y7VR7tm8eTEYbM6FTV",
  "key37": "52YkUajz5GM39XaSbAspXDKNpdPRyjX6ZZ3FAvKUjdkkbo7m4TtHnPNMVa6WsFNqFe24E34gPJwoZB9fpuL3GcDr"
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
