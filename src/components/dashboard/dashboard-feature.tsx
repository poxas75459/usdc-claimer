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
    "63s1p71vHHuoLg2MwqzhnNFbJwqG9zmCSCFeqZEVJQ8h97Njb5htaPepnk5KwdHxaWzyByaYkLNCrY2JZtKbnjZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fd5pzpcaQgRwiiAVqt6bTbt897S3PsqsxyqUMc1yJRiZjCnWkMqdzzaX3WjhXeGAyBqBc27T3QvqY46isgEmjXJ",
  "key1": "25KMSuPhc8uEkETQuhDjhf26gGoC7W3xfF7QeVRVphqt17DriN2Y7r36MGRKmWJUbFCyyosH5JPgdNZmzS5naQWN",
  "key2": "2735v5GXfdTAE6eC8RTiiKij8nWzQ8EQQsYjC4HoSkjJcyWf2Wo1LRV4LruTfuqET6uqPYidEwCgh1gUPtsEHtSV",
  "key3": "5Ppi3cb4ohdumynZSqi4WYQwFxn42hKjrkAQGKKC5YjK8YPsREAL3maKrHEvPburUD6ss9TtZGmQJgigkbAvqTsZ",
  "key4": "2jfaXdZkMgLW7QzsXEZkek6Vm8befkJ7QsGq3m8VWyxUpyxRtXnUFouZ67CyjJ1VXESnqpRwSQndffv9cFRinmUR",
  "key5": "4GyvTPHu5mnxSBnBnXUb4t9JdgPoorW8SEVheoPuYR7x6DDGyqvPDiwaxYuoXGfDV25AXpz3vKouPWg8pADhUzsw",
  "key6": "64T9WRs1RH4SHBRFDCd2GniN6ZDLAgrcTekvE86cYYZcFqvFs8ad9RmkNATEqryhVVPPuxqoh8tZQGDn52tHFEB",
  "key7": "2LFUs7xCHaknmWz2szxzdZYF188zvbZYvVCyzMKyvCcRAo2Njdjrt4avXytNEjBdrnZYJHZp7WCqqS4boAy2X1Bh",
  "key8": "5rqn7L2bqABj4dxSSjSC96tKF6skNzH56xma2YX4AzcmhTXgRpAFyRPrWPR8YhKW9H6Rv3UPip11KxK21vfvwoyp",
  "key9": "4o6JePX4SumxDxPEEjXnEUUU1DTA5jz87r3JRKiCqm22qWQNh41uW24Jhcq9MKwEuS5sMBjbRkjtYo4mzyrvDwDE",
  "key10": "DLCaHxBJEdj5utnXDfRZa84XpQswDDNSo9L8KUP5Hhif4eh58o74wi5uZMg17wuovEBRXVCWakkrcmpTuYRrLWf",
  "key11": "xRy3nYVzaGRzfsoBfuzjaA6VvaPRyag4YaoY1rDAXjdFNGzscrczQVgVVPw54JAeQi9NeC3aoYfyk9xNDsqXaWu",
  "key12": "4n26VENi8E6Rsie3WYoRYcwN3BGs6MuynDGXfsS967G18EgnfSd1oa8C11ft6t4EHmkWJwbQ5wLA6daNQKXcF9F3",
  "key13": "3VUXHbacyw9cqpsSgbGySBzAhFbicndW5uL1KqAhKDQgwMiQQBydB3LkkSkJMPwHPgYT4VofK2pRWm6dn4m3FtWE",
  "key14": "65JrDarmwsCmq9r7i3pzKpvaisK13V4t54FZAaFvExK3hnsmYgsj4Q4Xcv5Asv6Xwk8bxEuycG2W9c2LyGNpXsvP",
  "key15": "4ZWFiGdL7NoY41Ghq94p7wDXzp7X28z4P3MzfaQVyv9EiGvLQond9vKggkymJD9wDLqzUKecPYWQaGKfXHLrTDbq",
  "key16": "gZwhWxj69LbjLQu8J6TmcdpFzN4qUTdTL3REY6fv2Qnsn2xyT7aAaBPkhhzG3aSMW6i5SKxb5njuKmFz6RWqzhe",
  "key17": "4MLAHADcXJeoNiVeUHWVXEtnfL4aHzL4fdZyETp3XNorbJ9yXuPXjUQB76EbGJvzVye3TB2MxPinMFLZcbiH98MR",
  "key18": "mqFJXLxbEqtzoCkozS4RWXz6qr5HrCmTH6S5S7D5ZdQTJUBSgZBgumTQ6PQbJUcAQsEtrsrMS7SiHm1p1SWTEEa",
  "key19": "2fgVoWmvvU1Ny5KEFGVF4KU6m2cWr4cmbjVGJhqV39423Tcu55CnspeX2aG4PohKQac5GfjEeDuv7SMzASyxfg5b",
  "key20": "55zraqvng76Eh18PpY8ieJRECR2YJMCQBGJpWW2uEYf4RxdjvuX4PAv98F5FUCaYyoThDZbAytc1Y7Xz6SipPdBE",
  "key21": "42wEb9ein5PfFyAy8acXmd7Uw7ychtsQwSfzfDi5zUCC8QQKrajeFaByQBnZdxR9Z4RcaT2K2XHVNGiJP5cWA5Lc",
  "key22": "33rFZ15Z5rrnQSdDnhrjSaqotbkDTdEP3pyD5poHTzdknekW37MZgNTtUf3URFzExzp67vfrR29NQqkeX72L3p8e",
  "key23": "2d1xNFi9cMQMEhfXBC3wPapDjRfnFhwEf4y7mH4QtWraxepCCFfgjkmRRjLXpQoyLzxJyMToZjP9v7oFjeCPkMZj",
  "key24": "2FVQRR1QF3svcAwoxAjNqQbrTgBHTzuLxefUgkTL6YgZbjCBuxp3csraYGbKfzjcNsiqWmnHjdtobg4WvWiSMZj3",
  "key25": "4mxN6tGm5SA9WDiQwG6RBjDwrupvD2p4CwkCnw6uxNrXpzcZ2aKcQxESuyZ5YSjwSRJfUNhB79BXusVo3LmKUtmB",
  "key26": "51b7tqHUfgjYfJoesmYr8fK84sy85g66p4grUCT9ijJrNjG9dnKRLmB5yXYcwFoKVqfsUAKHBUt6RPE4Tp7HQyxG",
  "key27": "mZ7TAZ85GpsH7qdr8VEEaiogugqrshufAx7btyqRhdZRJAkLhomGvnzNAi1hhiyRmshN4HeYBLQGmuFchVB3Grs",
  "key28": "4zDFj63qZRUdCF7PTqU1QGXRYf3gBGWZTZBLsiyM33WStVN3U33ogezBHTkPL4yWGuFepxjiD7RYFS9uzGHPQf9n",
  "key29": "3q8MMshQ72w4hfL4m9Run9jSGFcNaJeh8xMJjoHYnHLrsgGBD1Upy9Qb15QJoESmy2RT3cUhWSyZcvm1GUhJEkg4",
  "key30": "3NH33sPNuDRJgS4miWXDE5h2kbgGThqgygTHGE5YW8DwZ8DWD2RxMWkqK93ffvTdLTw39ppRun7iUBmUkwzE5v5i",
  "key31": "5ydoXvjPGVtuBADwYYmzAH9WNBjnfHozzGpFbsLseH9nmT7c9NLKomzbRSppfiYssdPtZo7Ma1fny1viZNJHqu25",
  "key32": "4nNkHZoeowdHJhrGgwJe1CU8PuAXez1475DA8PyyKTA8FXXchudunMqoovgc1Sq7ZrBnuNi9c8fJxDtVX73tU5R1",
  "key33": "2GLSWjdCRUM6KChEKFZk2qcrjRse2ugVUXUkWF33nFtHcNTSnXMAUjhX8EjpSKTU5Xy7GdtwU3gw1R6XVrrVBypp",
  "key34": "ak8kmqJghkxhKPe5hL4XKubWyGBYz9VNGMYJY3PSgfUSnSBKib3PUpMgfejgdoHwUF6s2LCrRMeZQbdLJGNJLdQ",
  "key35": "4xj8TVYx9WZjKiq9Js7mfr4uxPVMZ9R6Lw9wevPccHUPQLgtkZoBTP897ZZyJsvwVSmJTDnenE3e1YPCY6nvESCd",
  "key36": "3YNBxDTR4Zs1QWG8JEYKCGcVYtmRCcf3gzLkqtFFrvwLohiokDnBbj2YMmZDNCxD4GQMqEgotQMZPSMuy5gjstN6",
  "key37": "xV313AUmgUfrBjoF4jRM6Vhk3CJRWFhZdLNnWP9ktqADUEiVwZhGAQTwsqT7B16gLwDJ1Kd15zU12pJRB4xAWr4",
  "key38": "2gwczBMrx6WJ1LWujfP7n4jFpdKvuQpRCoiBMwzYYBr2Qh7AUM2raViUdXegme4UjdhphuqeVB27QCaoGVoBsw7e",
  "key39": "3GHewqKhgPhzrV7APAtSPR13UJEeWGMbH1TYXh1b1PczHheZcaQgm6SpiAgHdPhX477BML4vixxP2iZzbcWqfBeR"
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
