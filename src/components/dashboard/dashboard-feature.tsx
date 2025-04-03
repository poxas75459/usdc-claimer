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
    "3isVjZg1iyM5VcYvetwRKE3hnDCeF37gNqzZq9WwbWzJBSdoFaKMDzPByHTSh4bNcCTTgH8k6RyWgVFcXfZehtPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nheYsLDSZa8rHhnMah3d9WSJRweuoWyttKh8N84NAXtcVektVfAGE6wp3DkLKjmRqxSfJadwf4BwRoNkUx4g2iU",
  "key1": "3D4dE1wbeXvqrAXXuafsMgFfFDtVyuQAEXZNwpC9287nhpMPRyRTJwUSXVVrAPMsGgvNakcsKxKqeoSby4EHPpAW",
  "key2": "5XLTq5DFUg6AJdEyLZLkvgHQ3rY2Yx6K8M3UzkLLywoX3eoWC9EK2MkZbmmSs1r2aki7jST9d2FvxmdhWN6UPLvh",
  "key3": "5PWZmiiezjrQbrjTqSsj6TY2KtHUZBsEUQF5S5Ra9F258w1jPfj2WLatGsiWnNKVDiSa4vwqSoYXfj1S8sxn6FQ1",
  "key4": "4VSFn7hxe5nrnthcvBrFNGfBU1HDfCZuWdb7GzbFnuRZLgPMXKnBY75pnC8zycF1K7Zgacxz7yoeKm1xpKbQAfjj",
  "key5": "2zBUp3pePKZQ1wULYu1Wz6pLUB7rEN1pxf43hrQhn5HvRiqZL4ai5NDtHLb8QG4UXioLtY2oxAsj7CEpwGDVN8nM",
  "key6": "4QS7qcLhLJMTDXfPedZvwEHwt3B6HECjHkDT274GrDvZ5VYsPBgv8FC966RUBTStutcKyUXNq8WW2Qw9JhtmArkJ",
  "key7": "4BeGHa1oUL19gp8CGRcoVwUfK8c7ghFuK86sGkbCyt9bLwhShBNGDDrGfCmvuwNfBVZK6ezdzx6Vd5ezU2xdVtu9",
  "key8": "4KT1wdzwLpPuyiBVQGaeeNTV88ZLgMtSHsMU1HW6n2uSGJ4HWXCEbU9bgsVkh2HMC6BtFgsrQZg84eLqxU5wtvER",
  "key9": "2LwjDAQ2WXrrtV55SZvZwci5M1NHHFBSpAPuXCCe3LSmS65KQBARCukW9HaXtWH4EJyyjNVS9oM3ECwtnfUDCZao",
  "key10": "4Z9xpdfkyBCPdeaugiZ8DfRCZfonWYcBKN8KQeiopikt5mrP43R7mTxor9WZSVHzSyW5nizyRut2Z1fnYbmQqtjs",
  "key11": "5XqpZxkD6DpVjmW9dzz5pmMSyqEwUn8RWd4R7qi3VdbLh1pcJb9GjSJ5Lx4P244kWAMuM1ugozr6cHG3WjALnAa1",
  "key12": "ZSYX6wqg5t4WFViytzGaKaGLYEF1n4JSD8NZGAmY7x3ZLMfW4QZbe23ruvWJC6s7g9Yad1WsRdu4rjD7KR832px",
  "key13": "2nYCHJHZ7Fu8vDv7aN1HpLPqJrAdSL22MdWPBRnPyseCh2o9oan8QS67uYv9rB2m89q1Ar3cLJDjELRM6vDSWfb1",
  "key14": "5QbdnMsqCwB4NzUUTo4R1ePgGfygr7jg3HWwceX12HpvgH8ygZTEiu8eYsXXSGGRETeER2gAqsY8gdfLFcbKVFpc",
  "key15": "4kNXZTda6LAtbrZNNupW7juVcndGbJHf6nad5aQtedKDrpEEKF4JZnBxgVvNf5xJceoxV6cTZXnyapRoBcdMXFfN",
  "key16": "52LjoHAedywvoWpjPhxprzuxRXbaWnQQcS8M2HARUgNoMEv1NTBU6dyaJ6G2kvheUgcZuaNL38zc6T3pA6oqhakN",
  "key17": "ro6frBESALiuYJHRK6qqYT4ayY6aJL9tuyzjvUtxrJniDUaQsd9YBTf99iuczhPPn1Ps3CsvWKMVbkqZXgFozkW",
  "key18": "2eaThWEUQrtw8NHU57SrBhrSuJ2j2XHMVDBmPtn1ZDaZ3hkro4g5DbEKfinw8AyQuACJHBakaNud78mYteGzvr24",
  "key19": "5tYMKszmrtFEtdkF28nxmG3v4AEzMdDk228kvBmq1tMfGYdtDFmzu74XpscgHYpVHaove8D55g7Ynnc7RCP33AJ2",
  "key20": "2AfQB3HMwMdubF7DFqSa3x6NKhVcWm63Nf1m86TMNmyULPLGKBGCniXxL8TZYo4oY5H3b4MAhUhjTCk3Zs3BKsGP",
  "key21": "UzuWFTKu1TWgKtuABq8mCRdMY6c8aLYwXQKxqrXemusdi3gAG7r4UCYZTiTQ5E8KbFh11isapWyBgi9jB8TPUJw",
  "key22": "2f3b795HeAwQJRGNhomQKfTikfMKMF6AN25d4MdWLVD3b1QC9jVTJoEro9GCcc7eA9WgPPX2kGbyvxd1YPQdQCs2",
  "key23": "3ahPyNXaZSZkX7dbNwCwCGsgwUYJ9SHdPfmRheU4dWC5ShEPerZPbF4pmnwhVujbu8ZLcy2uMWA2hoAMdJyBgpKf",
  "key24": "5MF7jpoq63itf2Vb8PYPXfT7DKLxLXxHPwdzh89xMvQCVKvovwGzzSCApV3kYUgDtnvPRNm1696c9YEErVtsaUao",
  "key25": "2h9sDveAvqFUWjerp11f9Jk6aPbP2aSHj5Kv9pnWRtjVAiU6k6TxswJSArWy4ERotvTaoSTcvsW8J5tXwMbEkqxc",
  "key26": "65Nmx5QNM6havakdh2kXgnKbFJXFsMKPj1K85TkmK8ofMWHoqq7BfnUPBtiZpKm29nznT6fcd7B9x43d9Bgjiyn2",
  "key27": "62y2MqJhUda7XeSpYdwUzr9wBeVBUn73tCjZdZB9cReekh4WR4SaEk1xrKWhhC5L3G3USxDBgm8ow6AD9Heha6do",
  "key28": "5LGLj9MEVQze678TQxtSaSnBXVLhTYJVnf6po18xsEqXXuyqxxJytp6xG5ohxbmdGVYHW3xAdtPzkFS8iZFgDNaf",
  "key29": "3tzwqdeWfCemkHGRfv3JLhMVTEuVtLPAozsw6ciRxKZeKEr44h3yvDVnCU7zyaviJE89xSoFf5hJmEZMwZ7XwQ1K",
  "key30": "2xFNxoXjhu1Zjc682Y8Sxa4Xa4iUN3C3bbspcJ8ZudsiF9MvsRppa78fK9XzW6AazU8ymqar7LSFVk3sXxaSCmqr",
  "key31": "5JpxEcuNFNhzAfhZpnY6N5JjWxXHc9vrMKweBNupffVq9aa8Spv9CAcZkUeBMBnoBN3WAJH3EkvBUjztypxHZXC4",
  "key32": "2yeZn7iBv264ztP3YgixCgzp84a81AdbnBpA1dpVc4ht8o6tFp3KbrDDRjQHXrHbYBf84uC57oEvWHRSouSixuFg",
  "key33": "NC7rqWe5jvwuzpEvanQvKPDxfdBqXjrWh8Fiy9gZJ5d5HtPEzGXHVRpHpTvVqwniY7djNqtByepvFcXrPwNhQ8J",
  "key34": "3giFiJptNPBHHP4QRGfnkvERiFi8qMDSv6Syng2Yerqwif3dQmYh11aUjPUtfESfDHRzrvxkNTpvV12fJ6AkGqHk",
  "key35": "4YR8xZPzeYxsvQQq512tgznbRQvTH7HjJyS67eRVSnNUR1dhPD4WLVjdiDuDPnae1Q9kpdctQ4fNxWrtSUKVeqQx",
  "key36": "5WPqVFRxYnFrzuDLqiuQgvHa7dhSPkDZcfgnSfxn6vFtaBdG6LnGT8qavJixEAGr1nAYtkmvn7Kazh7LdDpBhKn2",
  "key37": "5GincFPsoNisEBztrCTN42vKFCUpcctAa7mMfPf6ght4KU7m3VrjZCKwck4EaPsUpYFKRaUnCeUyNkdJsSJeL1ks",
  "key38": "mZQZEFJyqjy3xpEaB7rHAgiAX7WCWvArMSzZ2bFm7PNgP5Zjb1eLn5gU6EEaHYYHBJvJNrMMfJgK4F2QjfSZNHE",
  "key39": "2XrNF2SqwnQqHnd2csKcGDmWHfhWm65PF6GQNDLeMYf2NCwcNtNQUDtXUKVTQzWSCeqLhGozoLRPAhb4FeLAcbvM",
  "key40": "2uwVrCBs4SZNTzwx87fh2fyYA1Kqi8rJxJ4Wz5eYfzVEw1Bp4C787q4UVZzLEYYYFkxKaPAYUANpShmpBuv9Jb9S",
  "key41": "3bUHmo9NPrnLn1Pa4gqNU5QQJJqusUH3sJBdowjZPeXk7WAo6ugTKEVpX5wx89VSvamjNu2mcchQ9qMHCy31E9sF",
  "key42": "5Yg5NyVNGKLBZvjf8Mw79mKwJuu2v1Dk9FmRhD8qfeMzZ769JdtBgFrd4JAggCJTqPgXKXo46XtQ2eatoax8n6dy",
  "key43": "5fJVFi5cydW9fWYpBTd8be6EbhGkUjtAg8J52GxUbJPeRxgRD27vLKGE4BQLqWzinyck8jzNuKHLVjDwEyvQFnUi",
  "key44": "2wXMuoqgEL4dxYsGqafeRF5gJbGHZcoFvRvbYpctc8ZdhnhrSf2YYjkVrn7o4Vc15gdgUUJYWyxrCrGEhFjBL59a",
  "key45": "kZyGR6MyBhxnjv47DXAjtAvj5FUJBox3GNUsgLUqDmxBzGJda4sHcqjHFpwFhV8gveY2J11hp12XoKxD6AEC1aw",
  "key46": "5brTb4qRFF8A4qhaNBZJAqPusJ9QfbyPF2fKyXc3SAkgdWS3tii4owaR74QU8G4CiYeu8awym86yCNQfrPkxk4t9",
  "key47": "3q6xn7bGN6eKwQcx3h1r1A1GAWGxot57ChMBnnom8imSm8Cu6D1RWmpRuQF9RaYxTq1Xfqhi7Xzozuaxn4c2mRS7",
  "key48": "6bRjHUT7oYLy1Sq3E3UqWEYtnufxpSRXpzLFi2CJy17DH9ieiZhPsDLQuKYrgbeKTaMkb4T8SzCNhoffwAm3c1Q",
  "key49": "3BfaksLEf3STZUN3XUnnEbZEhQxxKdZGkqUCbsziFCaGyZKosBkgXLJyiE2ZFBcMDswTEbyR2MAnuRzHtA2x1JAt"
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
