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
    "3hQYpZ5EYHY5rVEZQiB2ss4YsjzWFAxTofummfrSAG4s9pxTdj5rdFD5sK7n2pATa2zvhPumhjmPzgM69Tp6VMQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49MRCnWnXjqTUcK8wSBr3hJeR8dV5tK1unxyJ5cTC4eZ4fDufJfph1g9MeT9LWibXANf297jhzAwr9sKfyM7XA3",
  "key1": "4Me4onNoScksr8wDGPgFGcpgEQdKeaMQbNt1xqBqWeZ3AUULNf3Sr6XdMbwLbgF7cJSP1VSH2kADEaZgCiDU1HG7",
  "key2": "5zL2VmAyrR4A8qFRU6x7HiGdqkk9Tis5aYhBNHmG2SSPnEK7haav6TpjQsxLfeMqPBvqFELPjpSA13kj87WDgjqT",
  "key3": "JVAeLrf1uTCwpiozPgAiqoRXdrH1TmjuVkr9QmxapWGyawVg8uTmPGCU3QHSRdqaXJrfRbGYGs2NN6Vn6K6Y5ik",
  "key4": "3NptpysBvkDkkWSkzFf66sqSor1A63ZVbhYGyWZcGyi2HirbtCd3aFC9AXq5v5TVHpAxqtQNxciwZn5q8X4JQn8H",
  "key5": "4AygkUYh8uf2i1JEM6nMKRECiTDxtFYji5yaS5T5ntD9CT9LLMoUx24ZogY5sLDSnJwGVZ4ZQA4HxojmCwkBomYx",
  "key6": "5FfHrzfVteRja1kjeM8kEAzBu7oWzZUvxcHrtamqMCBpWwJUD4KkRu39cwTUSkzAVzWAsWR7XPWDK8CvNb9cGitc",
  "key7": "2ujQ5ZsY26dhiVsYqusaNH24ATeHcfcAQpQuobfT32Xt7yAmE46qhkhP85ZDccMV7Aati5SRbD91F9GCica31YVS",
  "key8": "3bJuR47cZJNr7Kdiivcs5qnFhqknMggriyax8mxcfGw2jfdnetvgTisgpGVAT32dGrAzeyfpUeZA1jUDNB58jEni",
  "key9": "26ePodKXMpRHHeB4UnCu198wd4kWV7vYNekWrwY6aGgo8GHmBkM2PkrH6HGJawyR2fBmXRQZvnDuMJ6sspau36Kj",
  "key10": "5KjdTrU9JAVuHJVR2ENAt6SozKMvZo28mbgrv59VdGaHHNYHrMnyoniXAA5m7wjEGyu94yvnXFsUuuyb36cn8Gn7",
  "key11": "3CxJgeJwZwRuxP8AMFPQrMP7Brdf1LnnboQgYXUWZBM12Ai9mznDQCYasXryJ7vgsDEipbuKGdhjqFaYH9G4HgD",
  "key12": "2SCpdfzeGqNjm4TsAdoQnThymUSXXYYNmLCwZem8p3ki8aLQasFqCQ7XaHVXuG8sRS5YTgcKz3uasS5RYsb2zedc",
  "key13": "41QrATL6MP34XLAJywkgbbANPLCGUvf6Upxthx8ydikecDTkk1m8RuDHVniJH8UTx5znNFfKS5ZReZK5HLnjeoDZ",
  "key14": "62XSq4sQKstGof5PorimHFoomR3BP757DHMaC71dyn5HoMjj3eiMjTZte1uoDJHhxaptuWcP9UQbBvyY6W9rPL1S",
  "key15": "5m6RyD2K24GVRfmMnxGY4K6TQxfBUjFo2hpiasBAsYNWph8VWffpMA5Qqnk8oGEcVwxBrfq5tVi4PysLABq66jwZ",
  "key16": "3cQsWMXioQ1s54xpo86yQRe2LWkiBPhe4tHQo2t3ktcTAYSEkKfgHR5h57hGzVKt8xKkmLksZNJm8Zt8A2WRYWZy",
  "key17": "YEoFJQzXbZc5ZtaHZHKH1ycD3AcmqbTjNiN5iH7hhNaZyVLo6BDsDpDbYfyxXwcrsYMmfph1ffGEUGiy4FBoCLp",
  "key18": "3XRAfUhPWW6CeeYYqbHXBHEsZXXTrijAAg6oE9mFjbwa6z8U3d2EUksz9ifDfWX1wyWBunULyY3ysT9uCJDu7ccy",
  "key19": "3MWMmaPS7aNev8evjTXZ9fL6jN2nmPSNsWbYVQziN4W2BZkUB8HK23sEfgX7U7UfVnNc4br4CLGxaEFN9fDSGiFu",
  "key20": "4W1XXLHBhNsYUYGdGB4pDrHBfc7hHA5c2nTFMqrDCpFs7ttLpN9xAuzLq9945i7dV8Si6hVWkQoYSL3rHeUMSjqF",
  "key21": "23w8D96xvRED5YWAuKpqgYUaQu87KQd5eqLBkNDFRkvFo69x762Tp2n5aDjU1FkeknTWJcVekbsaZ99XtHCHLTfN",
  "key22": "62SDfvoKmkzydXVQyJksdJKYCsbqr4aktDzjFxwg8N4ySckn2PJ9JTxpUPBrz5KQhEBYrfiWNEECZnEzYfWGvPG9",
  "key23": "2gi7HDYHBQTcQLmzPkNoWJY357mqYB2pVQhsTFTZfgfkPPb3uzzeN3z4u6fXXDPhm1RGWYuTz9J5M8rkciweqT6n",
  "key24": "2mDeJ8t46TQHVqAnyCHaLBy6RymEZ3AN6hQgcUoCrunXeVnBtVWPXvTtRPAHE9iyh4ZKxgFvhdZhRhiGv5iy5Uuq",
  "key25": "Pcrzm2Jt76tgM7JXR2yby1ZwHRCEPKkjyBtCL3AQYcUkXd9ro8BLC3QB4mjQWTQN1nLG7GdXtn15JfbVy2HrqLX",
  "key26": "gUnTmNhy71WFu9hw3pVPAUkg3jgeN4UdG7mEw9QDDw62k6cHpnmRY7asdmDGFSfahmAvAE1hXjXVKRcLDPtuARy",
  "key27": "2JTgtimcp7GeJHswc3SRd3ETU4g1o9ArBeS96PmepzR34J1pazFB8BGSP43jKyoKHCsfovQMCuPr3N5Z9GqfKCDD",
  "key28": "3xYnxeb1wVqK1sgSLymPQkkJYfn4t9bn8yZAZP2LgV1CZbQb6fr355P5nQvh5EjHqyX461KJaprPuwXsrFW2jK4k",
  "key29": "2E8w7QgshP2o2BDYmmdzDc7CkpBHQy7uChp2ips4fDnpxkSgi4vfExJskPhZQwHNYecDQAqGBN2Ww9pxPZWYoz7t",
  "key30": "66YX2QsuoS2eifgq15ahAuomwVGSxWzoVUrmKoMvsFffzehsr7NswT1zyvqap2TQ2R5wCxGxugKXCzLQNfgz64mY",
  "key31": "3mo4oRkpweVCaGSeJ8A2y9rgJ2ve95EpREre7rb9Dc59KsQF9nfP7XybNTEydXLsgxgKsa7naF3TytD9mFEJ8xLf",
  "key32": "3ydT9VhZGWotdgRQXKV66uyZUxWCTbf8MfJY1gWZHXHXpYzw5hFrsnqodR4nQm8vYh1JhvNsghpsqBoBQFRbeoVA",
  "key33": "3L7g5Q1pEhdA6uomt5Z5dJHmkGp51hLXd5gTHoMpDX3Rb7zXzAavQY9DikkcicR21AUccqqNDEVKnneAUoFHDL2D",
  "key34": "8i63EGfbNFVffTJHq7qwwhb2Ub9j51B5tWynAUi4dW2efQGVcpCi9Wf1JANGnhrxNJtizqToEHiCHgVwsG24Mtj",
  "key35": "3dvFJUQf7LwsLoAp6JfEsmeDR6HQ8QkQsULjRUrekfRw78Eo8YxmAn5WHwHVStJUntRDNxL9dup9ZA5qyQAotqw9",
  "key36": "57jwdXspZEtDaCNtsPqaYZpYatJFAuqcbgohBcNsCvs9CjqZhQPQwBNtMDZroJVAANuPkQugwVxoHHkbFfkF99zo",
  "key37": "3CmEkLtdyhBRWceL3YqiQV9MHxeZLSHW3KmhxS2fKm7mo2ZY4GhMJsvBv9gXfUc4JT2itXSfRYBomLqNMHQ3Q8CC",
  "key38": "CrdJsijA93p6fdbLy7eC9tmqmtX9PxKqkXiVmmRPu3UgSEQXbESJoCQ3V4K6VtVuXF7SPNWVhy2DJ5np2QRM5Au",
  "key39": "2NE4Nus62vg6QgsqCQrtm3sb2paoBF8XSaGcNs71j8G8sJkELBKoPMV6LXtk93pwG6615RJ2G28u7RNKCj2Uqydq",
  "key40": "2QJmfng9ZFqDFgE5iXuP5uTrDe4DbQGN2SqsHMz5wKSfEhDmsk74C7e45pMfebGERFyLF8MZ47FgUahib9egJDXK",
  "key41": "5387CYbLywYRCTxM16X9dmy6gQe56Jigfi7mCWYTUB6bEiJdAwg7xoCawLwc4oWmYZyU6KV4m7T9xvKLENid2rBL"
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
