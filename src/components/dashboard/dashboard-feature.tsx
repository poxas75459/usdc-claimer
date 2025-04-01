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
    "59gr3kztspNJeKyq8U7GECwxmTAqq6VPtFsP6dEEJAP1PC1F1e3WMBPv2pcjJB6zwC6CYpLEkHN49pMYczaju6bS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fEVcRdDBCh7DLQpfFC62M7346p8N647AJH6p96JXMneQX3pmzpQDzNFry4ZpZfynkw5eBW4JWprfP9uSmmNxeVV",
  "key1": "8Zwudqqew1fpvGD87STYpH1GjPm5TkyYpNke2bs1UD291bQ6jS9hcW4SuNxwACtzu6MMsz5Ba6AeDa6tRtJUMgc",
  "key2": "26iqsuYUTE8UdtrWQeWjpX3ewMNefiM1SeRqVHeNC1A7JMeAK4y4MgJqLCLXDevVD4obr8KR1j83NTmAWmCi8P3n",
  "key3": "2TUDH6ReQjdsHY6X6o2QkdqzzRVQjS1AxTuzUJgEjLo1y35tG1XrDmgC1tQWuK9vA9mRybzUkPaqJgzet2NpZWxX",
  "key4": "585ooVtYNXVFZQGz8zhNpSxLjfwJcpD87hdWmG2v1Y3MqKKEaQvLCXgYGAVoQZvQBUQvX8aBx2obbDHQCcN29JYe",
  "key5": "5oEfY1ZHPrvapAnpF3XX6t99SiKMm2jcLymcGL95FMSUxcMugpSnW6SqR4kyo5xHBoMAJ6Gx5YSiUterh1yH94Ay",
  "key6": "32AifuYZ7Av8ddtdknUDyjEFDLTtCYCSMKueUkraAKDc5p2VeiPE8XhoTEczwbkGT4eTi2ZC6AWALvVfU2xzAeLQ",
  "key7": "2PGCBGLyyvyVwweqmTcPkBv6mdsqktgGv2SqRH13hjgxJh9JDMahg1ezqcqdfyim13Zczhigeeh8xz2FrPje5XD7",
  "key8": "3aB4E6hj66S61Zr3fdtwasqFzJRGHkXK7PDuKahs2QekGzhG43bxj4YDe6P11kLsue1F67X1FmzwxDDDKAMEqFeg",
  "key9": "3aC8KK2m3C7oZEsmLKPwQVHk2zgFbirEK9wgZ9NL1ME5NA7o5N45ihNb47aJehpJr3cf5uo9NfB9KCMJEHXhqoL2",
  "key10": "9ycNn8PiZuo7c28BsavTSQFf8wCMDWj2Tji7jGxTLN7iZUK1zkAQpKUxnVLPRVRm7LgQ1Q2MaucQzXyTjSVsDvu",
  "key11": "3R1wdcosSXzAcqjAMJfZ38qVmRYzHqsA4XGHXJT1tW4U4WLiQ4rFD9iuutPb4Avpppe9M5tuH52XAsSMyxc5ZgW8",
  "key12": "g4Y76hiT3cGL7w94bMejKwHPAKPZKZCsQN5svgq5SyfQHBLqMVjpdpevRTJMXHvWcrYcDRUwDQz4NAPJbP87HD4",
  "key13": "2wBae4c7FEsDVHzki8fHKuWv93fsHrfFWMi73FRBQB4jabmTWPB57wWosXSrgw1QWr29VYfN9EiGjqkb9nfeFBk3",
  "key14": "2GYtmdZEeaZLSKpQ2mym42La5zUDCrCjAs8kf1bqsPspz6xj8C9e8vVZLnCumjZe1nFQiakEKnDiauPDFa4ka96F",
  "key15": "4x16BNEw6VRmjTUBuP7aiwrD4zthKu226pWRzZCe1ZRG5sXZWc3BzQruF2heSLAcvLEqp63bE1zAfm6HH6Gmcavi",
  "key16": "5wrB4wrZbHvRzgXeSdugJJJWZ1B5TBqow79zAj3tZqUCgXPE3xqJMbTdXYoWskHMV4oN7UemBTzt6TbyVpTGnjLG",
  "key17": "2ndLcTfvjNS74ncf3twP8VkGCdhxAxhfRZ5p4r1rA9Twmy6YLT65h57QbqLhdfKmEJNhX16d8xExj1gZfovnDNJG",
  "key18": "2WxnyurZToBQHU66w2RmUJzmva6GvDU3naqPQvyYRYZ3ovChneJkhGYRC2nMPJdq3sqCmRbvUdMDdpkfrnuzsaFv",
  "key19": "48fJwwhXoWBJSLFwRDXwacGLkXJn4vco8RYyT5QFodBKzaje641tioGw3oxKXq1ki3hD5LEWod2dZthuB9W3hDh1",
  "key20": "3Dinyy2L2HXAaPaQwfvdhY3G4WCEcMi8ri4NgeXJX6UXLJs9sjEjBnWujunBUH6t2pwJVX34ica6XKS3yK36xc2w",
  "key21": "4Zeym5xVAGj325YpHQo79qh8CbTMVU6me1atFy6VDzJaENYw4nFZAd9G6siBAqeZz5djC41heXwXYcniGRt7HsVK",
  "key22": "3ZBRXLFc5NrUagPhiDEc3hupfDN334RhWnTcVZkt1Mznd4xHdTtcCADkFNBiAzS5yYvSxB5DsT7ifdwXQLhSkZqT",
  "key23": "2gABo1B5YNWA5A4phnhij7Z4bZ7xwyazhN16t4UPH6N2iAqiV6ezeUjM5KSb2dcGCFqNoYzwunPT9Jnqr5gLqaj4",
  "key24": "4ENJhK1tsLsugh143C5Rd7U3v6HW99XfUP1MTWZcLzwFppsaPBPNDXuJPrWzP14Z361V3qefqEVA4aBPqRdpWLr9",
  "key25": "3X3pr2wJY2doDijCYFwQ76mFDjYBuRsiPYwxjiKuJfarTxozaKpjC5JutQ5vtoEa9nW9QZ5M1vXH88q9hivNb6Pb",
  "key26": "5iWrL8tnCvRda43cSbomyg1zevkeZHnf3Jey7vdF9gTRujXGZcXsRzaUk1uevfKLJFXinaXuHdETxy2GDHTcq4rr",
  "key27": "3bTUepRZeUnP6MBFZCrko79cXjsJs9D3hqhH2hS3UZybsax7NpYg2VMoBuWd81FWbpRgMhq1Y5LoXzYev1kaN8ju",
  "key28": "5pjzY2Kmes5RcaTipRVCCYpcocg4R1wJ4KBcG1zeCdYso9o4FUmtML3WmQUTN7NAowbsxYGtZjv66rZfGHHuPH6C",
  "key29": "3gJzHjg5fCfFwhkzbLL7CaoukoVBVPHCU46d1hVt4EMxXKyaLMfw694mQrCGLhjfLVD5wkEcaDwb2cBauaJzpoGR",
  "key30": "5rKrKSD7jvTdjHK83eX4bt2HY1XtWmVab1Tdsq9ZZakJHD32mKWCXbSoxHoWZDVKfETUKJXPmMaWvrGnThcGDK4Z",
  "key31": "pBjMLnrHujBKpVoubdwQ7qZjyYt9RBNsUPYbqJA4us8NorWFrs8cfTBw9zvDBARNmdAQD3nTbycM9oyJc5N8yHi",
  "key32": "5zHNroKxUhyGwjA4WSPjePdB86pN9K3WVPSWvawn2jaqC62njqmG8VYfC6kFMc4jgr9wfqfN2sGMCLhp7hsNzWhZ",
  "key33": "2HoihawNkr345Ut76U3vTyeZ582iApLkiaqHDTAE28cJxePt92CcToCFDkaHPxydn5xYzRYr2gxTrezArtuPgDT",
  "key34": "2Y6xTNgaEGrBRXY9XJyVHNvCeX4NtADwMK5Xuq9VjU6QG97tMnVRzAMidZrp9fDSpeRewznwtdy6Adqbq7b1wy92",
  "key35": "3BXWr6QoK4jDevHZw58Q6dZbunm7KTLwicg3RqMQSkGoh1Y4uUJ5fmYoKpvVK2gnXVWNRVNt2pFkBnWvgGbfNzaT",
  "key36": "2by871sUFNyUfSGE6CR4BEdcj5HwzBpDASg1bKX468MA4SmApBcWDvJFReiWxSgYGwBN85jREsKsLMS9KtqCoGRA",
  "key37": "3abvKX1UY6hzjUkeHF8D951KmBmqByVvYuirWdPTpT8c4PonWYKgmrZ9PZ2MEF3SzWAW2vAeeQVa1z6nSQk3ych",
  "key38": "5k3emjrF6UPTugLqiizssG5vfTL2L1575WPC7jG8vmPdQ8AEcdN8nryy8vhYUakTbD32UiX2k9cKQGBGgNRt1v6f",
  "key39": "4ahQw7yZi4tocH62jnPd1Uwiu7pR6d8dDdwzHzzNzBYkMdXDW71T1tmGcpG7JdK2qVBtXKfzVNFPP3qgyrEF6ucn",
  "key40": "5WK99AZhRFwXXmzWfkhevchMFYyDgAaaj7qVnRSgUSaiTWajJzQUEhRGedmupLsaN2Q5ACAQ7VSUJQYtz6h4KNBQ",
  "key41": "5DVuGZquSxeYgxuuFsNGhok7FhEAPCJcVzTtWnVeXxjY8i9tq8jBajRUyBHGXwa14UxeZcj5ae2TF2oQSgmbHz1A",
  "key42": "2sFBCP33kMNUMjLTNsSLUuub1JmcyssJ6Yf9agd3TtUU1zH5kXi7mfsEGohKdLkSfssLzyeTTFX3V3HHH9bLirpL",
  "key43": "2FvNMBZbWjU95Xb5w8CFMYoCKvNykr8rZ6gCmfDiKTzMHLx2qXu7wu8oRPREpAexonizw34tLcdmxzCzzy9w63Hu",
  "key44": "Wn6DTuxe5C3rzFVZHZYi9B3FFuMoqt3Rd2cXXAaxycZyKMJjJKh6hL7BnQ6XqWUeGxGwC1LwrooUABzZPRJGiMV",
  "key45": "567hJShNa9RDEPQ6iheCFi1xuVKXg52nCarVG3hdXyNwzmR9eS5Yb2sny7W7EKC1iCCvssEg2N72wa7sKT5Q3Hju",
  "key46": "3pxuRCGQcCy3jn8DWsNqffEBBtCWQY6qfCrsXx74GLNjQRGZ9RRjaT6ncGKeN9NPSX38KiqZSYf4rEE6QQ4XVKT3",
  "key47": "4yzmLB5etYPaa8vLG6JpNfkVMecoed9fGrkmkQpdBCoDLgx9HVVZV7BwEh32iQcK4Kg2e3hDiDXz5oqc8rEjPqwB"
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
