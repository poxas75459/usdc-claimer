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
    "4gLrmYLSM9mZPgb7AuheUk8FBXYxp4qatWKiyBhCCtwqnvCxi6GE69zMKopcq3QUQr35XxSVin6TBaArDXzaa7ac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dkKNC4WBvNuKqhFFWnc1GGc2cfiYZyuCgHPYdtF6VcaFG4cZDPWaXf4hCvWshsHEie9DMFiHDFnYEVKVGN1pGoq",
  "key1": "63wSf4GbCCvUxDEaauMR4uBCHm2DseTH1HHkL1hNkgjeqcKe4m4UbH6n9FM72ya6AyJvp8BZUZDsYreeftcZLx8N",
  "key2": "4mYHHiWCjxPVPa5HxeNaWtZ1Dgt5DZqhkX1P9htRAj2EX7i6AbnSvLSKJVbUGzHecPDLkamZRk4CGuP4brdfgPBs",
  "key3": "4PXM1CmtqLTpgn29YkSZHx1Dz1N8XvaCefckswdU1b4HkgZqYFXpAqzevUrj4c1ikYLktupXQfC57vaaSA6VaQsZ",
  "key4": "4Agw2JcjXQViEaE7fPSEcEiFpCG7AHWVcdAkQtbdoiN5EHMURFRxdWDuKTETKkcE8kDU33KnYRWDka6kit1Dj6sC",
  "key5": "e2J639C8eVTLUSUkH4NRsrQ11nVBNvmC8dULkxTKcqLSHAWT6vCnvLSyDbhKwJNkYvaxHfah6N4P9iFzdn1X1Lq",
  "key6": "2qnVrPyZD5hANvsWQVXEwEpWKYKrZP9BcVDbGJu5NvHQriVnqyfo1U9XCnDFagbbzL4tyoE23WvrPiWmbSGuDrof",
  "key7": "4gGTkAx1BhZPfkv8NM3g1QLpDkrAUNVpKh57NwqssYqQYribTVjMJ5SJrTpoZFeDqPvBg9dgoF8sEkfPJ6HiP2qi",
  "key8": "4KpPzwAKHoZx83vAuPn3FaL9ohnKXtVcZec95rTrhK2bGyCxriYotkV8wPoJgNuXLGWkdKiVUMAGBzSQq47zgqBw",
  "key9": "31oqcL31yCpP9zmgv4UBBHaUH8aKNu22JeuLhU9G6TYwEVQpiaHNJVcSi4D5g2HscvPfwFgbdaxSzG6GbHojARUK",
  "key10": "37ooZjHwbLN1FeoTA9meL58U1dwdqFjwQyoV75vdDnPMc4GqSLDwrrKnUgWSm778zf3GVweueKL9K8ciQZAtjQav",
  "key11": "53VNYjAVeW57167HezQTAyeMKKY2bKX2w2foehR6sy8ZxvMSWb1eRsJgGCbKRFX4Dn2gf2k6oGWM4oT4QeyexSQ1",
  "key12": "5Nini8Svid2iU4MkA6T1R28TrpsrBDkcNjM7rGXwjydVE3anwyVAaoafqKKHAkBd4TtNvgUeZuGkhtoWRx6LyAsm",
  "key13": "63tHe3tn84eRr8eyLetdypsn19yBrL7nzJmnkvHpVSEWvPGMrwLxjdEipDUpWsPKeHUyXfNCwo5vFSgqTQae3NsE",
  "key14": "3SWaMz14ocw1GYdzHvUoMgKaYfGDztADikjk3A6Qs218C8SBiWUbL5SKrDhtQK6KL6TMMUJXbr59PVqkY3uqpukc",
  "key15": "5Ya4qayQptGKC56fSzvvdub9QM3DH1VXwA3avuXDy7j2ETD8KfsbFnkSEHJyTMs9cmczwykUTK31GAo6Y3Js6ZJ3",
  "key16": "3Y3TXjJBf9mkXf5dtQ93fx4TWX5vs4XiNkgEPCyMYMqttvWxHMjkTJ4ssRPeYJr8cS6BJFRWt1CrjGjHFKpvu2yH",
  "key17": "j2DKh4fP4fGJBVyErcQniZEck9a5n7XQKbLxXWZKsLF4njDWkyq39U2o5DfNGMakeWX62yK7zfrdarJvx8Wekd8",
  "key18": "uiB1rgai8qti529q7Nr7qvgU2nNBczmexeGHMJnFseQRSbjnR6r2PZVDs81WoNeZd8noPgd9q4RNpSv17MKGHxu",
  "key19": "3oGyX5sPucSXm6xVH6huNCRVJzvbkqVGexvUZPtkwE7JnaU4HXtcNKMaeFTEiyzwd32EqVPmypTHJAjtEKuR8nwv",
  "key20": "2ch8aoa1z42QL2fGKQUEitLT6sMxK5Uc18HiqyAUWJVdHtygg5ccTUK72uKdUmigJ7JaSWcXr7wMTatn7qrEaoxS",
  "key21": "5TCR5KXyNrzxvamQu5YzvuRCgkbDYmLCMbG2i6sAVQtvdo6oauJJadf1tHAQpxAVgVQbo3xAoRQu7eF89wsou3H2",
  "key22": "3ZW3PWVgT4CCVT6H9FDG6tiQ2yHbGv93LAXoErNjDPWr3nK62QkhyZSr35YTMcPmAo1EWpDmUKBGREjirt9bjWy1",
  "key23": "PeqpPyvuTDUJtAU3eHh71d4k7UPVEZkcGoGxfTM94qEGt6g8ydhExxjkMzsyapCvFSbQLvKjd1P5MtkTGsFksRm",
  "key24": "2wr3z93tZFZTcKR9dGABcM3wV3P6eGEipYzeA5ZVQHPzAFg71R5jmTZ5sU8PWBBG3QrgHgnmYd7JLFDfK1pMdR79",
  "key25": "tnrakYkWyTcyMhDspLj5622waZ4DqDzA5qZjm3TNtdbs1E3VsAm1paW9vfxJkR8vLncMTbKnwzW6A8sB7vksmDq",
  "key26": "5ojZBu9xWG8gerMmDBcE8HtnyzbtdnfpmhC5DJ5Ve4zDwVZXBUKwh4vAVkoBDmJGLxEsYvwxiSJVhi9emc3XRoBR",
  "key27": "25dDPGwA1hrhcQivhJsm437YTkVmd4YR4R2FTSY6kCYeb9cJN6JzpNY4jq1tpWcZhCQH5JB3jscbB4tHd7zeDxDP",
  "key28": "4p4TCKU4mi1LJbKrb6QB9wMVZmL3r1o2ZjEgErEkzzvCdvQyLUY2uzfDfRHbW5FYRzTnxiyfFLJYPCLcvnrWpQBy",
  "key29": "43DLDTjzQTod4jxb94exEMiT97AQTWXiE9g2jc49yp75K8fV7k3iFu7jWQvDHpWtSsvX42n9a1eCTQY1EBbBayoj",
  "key30": "2zeL3bCxAbpSnJUkqTfwy2gLU6k5BJzzvjPBWFCJGXLaVzbgVokSvBJ7nE4W4JXyqLvzV24A1R9HcHfBMyJQBxeT",
  "key31": "2Y83JgQww3xGuNjhqu15nCev9NdemZNKgKDmQAz5Tn1Z4VU7aWwFHjRxgARG2CaqxzQ9jRtWp1DMc3WaXdMbNukk",
  "key32": "4ntHannp4KGkn4yiGxTYjs7n9bTJD1GdPADujA7oUtjHEg3y9uCavqWxyDyq9utVQBxMyXaAVvC9H3MeSCvsX2UU",
  "key33": "3EAfEVKXJ2T2zuHr3xdhdvGNHrvgRf8nNYWbLjygiZfTnYgCoZyUpR5r2rDt71iroPgUos3E5mrcoBQuidSRoGsc",
  "key34": "vnXHwH2xaAJFcBdK8kPAxFKbvUAyhbEnpZmMNJW715F54qRseMtRBzvraYfXCC4bgrTqy77J7YzAKptYyiJprEr",
  "key35": "63NZAgyUh1hPw3UhQtYEG33QrM6YxEcK7SVx8tThFquw89KEuQT19SLjMrZYN1HsWUWSzyGBrhjfvfev4mNMrj8Q",
  "key36": "589KwhjXz5VLTkJVUZ4vRS9q1kdr1qVxDSeDkgQXDLdoEFgVMHkYugTM8JHAByg5Ptef4V79fgHEPRR81c8foR7e",
  "key37": "3PVuWbeguTrYNnoZtrVKuqfVH4NjVvLFmmeWAV2Vd8WUn5rpT2eupEhikXiL6WNnemdQpq7WUFqWKxHQHRSTU5N8",
  "key38": "2V2qqiFGD3XMRAxVfSrQ8Wv4yjWz7xp6cjqti8E75RKLQseQGQdebkf4yyHnfKpprcNYWvtpDvVs5bg6qx3gRU1V",
  "key39": "34AXJWTfMAC9rLyWzj26YtFu6zYeaVv5tmgm4aXHDkTv45euiiKqCwKfaZcbFH4APATUUnd6tC9SjwNeXT6ceqgq"
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
