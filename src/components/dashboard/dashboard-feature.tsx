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
    "2MffQcayrdps1sZPQjeGwWnBb24v8XjD7Wd6v8GezgeVWP1P5BkxztmWPfdro2b6HSEhLVoEgCLAo4ESiQ4WFDbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5te2tvJNHUqvapg7n2vYSZKdj1BLG48BMdCyoF6SXXbEKkTf52LQExbTCTjtCb97SHhGoCAXcf4eTJkUbEmmCRNM",
  "key1": "4HjiFdGLphqvt8vc4AhVxHxhweKPhiUAsNHCMvZDr4si5vCD9dUmssMw7ZSBVPqbVo44B36VQHKD1HZSipuhtwYs",
  "key2": "5EYjWxuGuWPVyu8zX6BzMe7VRqEJfNVEJTA1np1bjH2pJBruVW968LhvWuFtva4L7RcFDZWK6Q3AHXq5SvdM42Ge",
  "key3": "3xeuLZqZjT6QsTV2BtE94TBB9mMm4PLNKnTQfMoBkonXEwHvP9rxnzuZSZZwHSm1jEyPXNDK5daDNCUWF7cEnBHz",
  "key4": "3ndz9rp1ELPmsBBN7RQeTmqVGqDriGu1E6ozHf4SuCfXYpkM5fBDTkAW9vM5CLHHnHWbiUZmZssLvZCfsUrk5vUw",
  "key5": "3y1RxwjrqiUGB1LAQSca8jH3WZqKkG1zXFMBs68KXRSQtPd5PrCgEr1Q2rZJEunUVHYuUB8tLo4F1PkPnRa9nq9u",
  "key6": "rUVK4GtB7xBBWtKA3hCcuSjaoogYbSFwv3w9Nd49JuoVEEMnDVcawtKnVCU7C9FZHineV9BnAQDvAWEk1nVgsyo",
  "key7": "2ysh1BAKRZBUqNb6jQ7uGiJF7vcdNgWcoBY4xGn2ECWqJPtnRsaxJdU4rFLn4xtLZfoGEcDivbuKJFDDu27WdN4X",
  "key8": "arCujNs4tGvExieRERkRic4CdLLchjnvZNG2moda7727fVRigLRWA7KNrqzXffysNMeyEF39yf765g7WLVqPjJt",
  "key9": "9vtuRaYtR7qi5HWkTiv4cCbCug5cf65V6sNYpWY2WnofcZEqUuubhfTbU2SrVdEPvfTEdeTmMSGTe64zJu5tNS7",
  "key10": "MjLxqFTm9ZRZzmkQvMuBhAuLBHqV8KYcBRD9gFY7wUshmVvAXuzB2m4vvenmjRbAsMnPiYo7j2GsCSU9H8A8agc",
  "key11": "4a3ZkxT28gdBM8sN8BQECq9qrq6uABePLNFzsGZju23vax9L1RBXXS1ZXN7rzTpZqhU4y27itAr44u5RbYWnAsSM",
  "key12": "4jwqQ5R2KGEyzuW4JbrGpdUaHcQZhfvm4P5aFvzXsPR4dv5tpQivtku358EyViXZc9hHHFPuubE6PBv67tUQDg4R",
  "key13": "55zK3S7ZWP7eBQFqyetL6oMS1NDx6UADEANYX8JsJhFbKjKhYPsPH7ymzzS1sZE493PoEvUd1Pi9vRgAKBx1rZRv",
  "key14": "3ng3ZM8wvAXdiVjygGcPCpjMUcjJH1fVEnFsnjyzzDEjLoYM55w48iPYqRk3oo9xb2SgbyxDWUfMVeV3vjvKoqbj",
  "key15": "3tCLr3MUj9L8dNdXoYx4Q8DpWqJQoM9JPF3hn5YmGc1koyHcoR9PhaGZdp9FgRiho84rjpN4BP1neS2hetMiuqGU",
  "key16": "26C2JzSHqVQC4xoep3hWbApx47xsxDoEyh1evSYGagLf6JWcN9FHZSXMtTvR35ievki6Ud3jdF1mXNCnYcLLQaju",
  "key17": "4JUndNwekc59RAWeEhegg5s7BqHQUrxqpF8gB8CQQrqAyRKxANUpR3xBMwVLP2epLXayLTdygVno4aN7YBfJHLb7",
  "key18": "22sdwoPv7GiH9DjPm9ttS4EWfbRocG556UKiCT6s2RcBbTxKJcAcd67KULcNL6Uxa9Fiio6shAvWtDSsNjJU1B38",
  "key19": "629SYv7tLNTy3tU1JdvWaPfaUcEWj327apLTcAWL2KCL12pQqFBQgrsXt5c2r3bBjH5QQrkRzmrpdhZxK8nuR1fC",
  "key20": "4YZd9j1a1CTY9VjcpvwYnYZie5YBnFgcpe9n81rgdHy747M91Ttg7mUEwmNjfcJVuD2ktHJh8vE6GwAS5TahKPcL",
  "key21": "4y17mgW6hGttBJPC9LaRPhpiyFSvrEMjGha7Dgp2GW1Ef8LkJfn1RTPkxRC3LLDG9Wdkxe2nskTReB74YRv1fbHq",
  "key22": "2dMzgm7Ymz25j7pp8nu8UPqnKNgMGb9PG4pi4oYrHcbcXKQ6uwvbipcPbRKR7gBWHmm4W5BhqybbtdK5wphMCdRT",
  "key23": "2wyLKTqhs36M9nTfic7dWCBcJHtJ1YKFC7va4TyvkjnZdjERia7FWSC4GRHZFTJqwtgLtZU5qD5z9HHvsNHRacoU",
  "key24": "3qvjz1jpZ15ze22TSeeqjaXA57VAjxCmWybiULMtRYzvekwsBu3MTf3kHN5TnYryY6srD8RqoMbnwDwf2yXdXm7H",
  "key25": "4psyZvCPSw7qczgHgGj94RpXZxw8TLFp8uVFp7BJJC36VgrUqTdCT82RVJn463r9pCb4uGFmXT5X9KYApUTpjx1K",
  "key26": "5tyDs5bBWBFqsunK8kei96Z8cWuHm8ufqTq2PUjiKxbFMc53Wt3nsjthrYm1SuEQJH2sWSjGQUgASZQ17D4dt4wr",
  "key27": "P6esiGXmiAZRTt3j3jxe7osw8odnE2E2YqkVycDSHfhQViuQ1utynBjq13ATxznh93SgNwjCagqMGCZrWAQvHib",
  "key28": "5xzzQV8fJqq2KA5iLVFmKxyKnabPRkAPwus2Xv2gJRiB7sdeBvD4NV9NsiuEiMer8PGRVVU1crptMPvot7z6JYtH",
  "key29": "4R53qEv9LxwJ8q8uaLBG91DFwajerRiMUHPdrRwr9vh3Uz67K7ZQwdbws38mSua4nX7mtsfM1GwFSzdxNmBkEZJs",
  "key30": "5R1AVXD4tGf8VYNpQUQwufLW5jGs12px7YycAJndkeFQqHoTy9AjRtZbn78AK4PSFeMArKnqwtX7A9iAHshRtMz4",
  "key31": "3MrhwSmBEGUDmG622cbyBJoEQjxNqr7DqEcT1CP5bNhTQ3r2u57Li55RcR86kSdpFmKfxN5gr6KDzYV1pQZisw3p",
  "key32": "29P9J4PSgAeezhLWKKV2erDtJb4gX7WyeNY5CRNorTr9RAmjPzELz5CWCzZKBRLz6tob96zs8N8zBkqrpJvavqgu",
  "key33": "LW2GU5YjMnEoSHJQS4pBrYYZSeqBTqwui1QttkLBP66tksanNs9GVGBmowzQwmuUzqA7fQvPJMce5M9ESpqD1Wh",
  "key34": "5yN8rLXa7mgyJYKPW8cBRXYLDXsX6mkCCvZhtcrfx8JZ3uNbHKZPAzgkBqfJTmRLTtezVU9rrn6s7gqibjh8kVWj",
  "key35": "4dN1wcTJD8hSfDknyFcPQmfi5PiTQ65TAyfwComFaegcDzybZV9YAsebpc849CUZvrk9knVEAZvNwEqdUE3p9oDv",
  "key36": "3yJsHjtXRErPM8Q4pZnviTFWMpRS7SQGtXKm8Ymaax8pkeSifyrwnxkdJXLnUQbpvtjP8mj2eRDDRcbYMqdXFE3A",
  "key37": "31wQ8AHaEVuu5xmGtyHXmjJr8jAeo3JPbSezaeyYoP5JmKGUUyweAK8swk6UQvCtudoCnnvfwtEAU3m7esgwkyrt",
  "key38": "49kBtSP8GiNXzPpTkfijBa9DXkFY8gyHmNTiMKNyagLsyLpr3CGjEnk9BdvuUiSUHEhet28bUxeNBMEutofdsf15",
  "key39": "srqksUPA1UF29CvSdV6jZ2JG3Vx5pd7umqVMyfVendvwGhQMzxUWuns1c7xrz8EuUmY3UeTCq5fgwRm5DhbYDvM",
  "key40": "5dmw7gmNhZS65YGUEMo37eR8XrpqdgghK6CkcsGToGs7znU8EpJTZxW798SVRyH6Jsg5TubfFhUiT7Ccc2r9PDHa",
  "key41": "3uK8dSQA9uYyc9NnDwzDED5aeQyD4AmDSxHNMoSxk8bfCaNhVXHEopH9DSim8A9TeZhyLkd6RgLahKaqsQ8KpYQi",
  "key42": "3ZnbQ8U8LacWiwoQ6gXdqpbcGKFJhZ4trh5rEM5XSqbAVGHwCmxcRxhimz89qDVXpzLRDNKhV4mkFoCbTe6Rsuto",
  "key43": "2yGJmyuhh2qoXADR7hgSjUEayWMDvKrS1cisB5ucvtvAx8YgJv9oFs2i8Emm7DBfdikJkNwXPKSDVtGnTFkJAGdq",
  "key44": "bs5EBbxdGkZabcRhCAyCproU3TTkpCWAtj1cSCWrpTgR9amyrR2kirqNWunkVL7gVSC1i3bP17m64fGADgK2kUi",
  "key45": "4aAdUVr3d9q1FzHvogXi6tQYAWEm4zaja5x76ks7Luw5xorGkoVNhHCBGAhBnqSe7Yp7RFj7Uvz9e4nAMiGyWFFr",
  "key46": "zy5JSngbfWq5UtpLiBXC4mX66a6iLXW1uXM1d3daZoqZq2fmX2A8hz9Y1yRJqW9RnJiDXQ72FuxkkkzcN4xJZZu",
  "key47": "pzLcqjTmabrJZ9db2obt9qFQJEuRVBpErH4sjJvzYAeHzJtePzBxu71Hw1D4QgYmPzzZzC9FbDNd2Qnz7SRJZyG",
  "key48": "27uS5NuwsgEXc5uv3kity7XhjP2xEwCPbowW9UXATSvTJVx9ZB6P4LmXmobpJvjq9aPqSiQaXWcVPHiCr4ffBxKA"
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
