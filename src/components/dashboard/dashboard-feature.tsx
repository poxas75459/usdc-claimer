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
    "3Kc7EBEb2vFXtuWHSHcMBt1dWz4NgXSdr7nyXUeKDPD83RNQxSj5FsNRZAisaaoWKCQfCxhNBmpar7sQPHhNk6wB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2awRnskGMiB6DnJU31MM7wvgssuAfTEdHPVbHA1CBsf9nFTpePfCytFJHNsudJqccBxwZ82s8kEa1cXSkdMfjPrR",
  "key1": "5vS35dvc9Lq5h7P6hmBVJEzZ81LdgTtm7HXbnhkN51zXBt4d8reV1ptpbrD9W9wWjBZEJumZguxkPPQmsmXvBpSJ",
  "key2": "4B5L3LhSEsfMZBoCYUdB6gJ8FKynZANQevw9pjXPHuipcBVZhUDvajFXxyEDBjwYgqDxs2LJyw3H4TGqHN3hxuU8",
  "key3": "33dwo8cYLwrBqvsBB577WqAiBYHATKdZrVv7FsG7kq1y2E2umavycnoFah8GZC5yNHcsPQpYWowF4aHvGLWpUYD4",
  "key4": "3iintx6tJxkmCRTo43nAVGHMtFPF7nmddxwLnRBDwhPHkWbEkbznJ7S6fE4okepZvxSzyLZ4qLCSi4ZnnsxGFaT5",
  "key5": "zwTWydXEz46tfKex5dDB2QJQ1fG87SbTwxeGodw9uSpkc3TW8anS1nmjDYKJqhwbqDzWDqXPsQkNZ6oCMmx3VmG",
  "key6": "kXUhKGVSp6jETkq7c1f7qsXKeCYvpsAztPkv8HyfDL3U6qtbPgMvgwLfdbFjyRZ1J51SCRwsrs7AfQN8nAXMHZK",
  "key7": "ukVpri4adVEaBoNyABE1VJCL72veJMJLUXKrKcjrAnVDZfKDXMmBB4ue3koE7u6isX8ddw9kmJnvpAfuDj3RXK2",
  "key8": "2HiSXKfkZUijbxmTnpgp9PfsFWhA7wAginuaPdc6h56eYpLeusp5rGWE8TjatTm29DHeZWA1gCcN6w5vERLZBeqp",
  "key9": "3PKCt9akxaaapwXQZt8J7Y127HzKstRHGQDP8i86AyzzbyrDZhaj1y9KUzTB9tW6XaAkU7Ak8qmHN4ELVuBezfUL",
  "key10": "3Ezsg8BnvJ3kSkFRjegA9a8RRf5aYPB4piDziTKBNoKFbE2cjoz4dPwSsSux1sCmpqtYVMTEyDr8DhnVa7UEVzZp",
  "key11": "BmgyYkkdD7wG1oG1SuBTY6X4QAcNwdtjrwzNL5fQrjqFxfySDVN6ExSQRGu5UZHgtw6qnz5jZnBfNBBzxuDi1Kw",
  "key12": "3AnPMkc7AM4H2QWPTGtxEmA7E4bvdSs1WfNGfCUePh76HV5nRtsVQQutzdgJxTrWxbT3HrYtV5csqGs4SgC1VVbY",
  "key13": "5tUB4MJ2cvyBfizwoj3ttuQUdKorbZxp2H1ywvF1Pjfma7SMXfw32eKUTWCn5EFyyDmndxNQa3VCjuLPAWZaCgkE",
  "key14": "34YCi1Tndcr7PvRzskhsnWucgoCCui26CWWcaH82gxnwoxdwQ9po5bwZdQxjsnwELxCKMd1YPaWTkMBDfjJ7giCv",
  "key15": "5z5Wc95ACLpzkUFvb3pcX9HyStnsYt64XvzcDik78BGr2h8Gtx3zF7iv7BvUYP5EXmzMzKSkP9dtZQVeaxaFaMJf",
  "key16": "3PJWAcNzCgPSA78sBCReeyNWmWe99DQcq1jvs4NYogYBzZ83ei3jS732BtMWyxZmxGybQyhmir5WodUSsVHNF6V8",
  "key17": "3KdtXnr757XGyxfTDBj7Q8kDVQQfxjS8qg9rYcjuimTfei6EZLxCgm1rrwFiLNUnN1WQxht2Nr6nNUmUrf61hpuG",
  "key18": "5L7aRrEPxHAyLTzbdYY7h3PSHNa6PJiFejJ4GeuxNYfYqg5fQ6avV5X9Wy3MpRGJ3vtwTnFbnCaN5mYwwryGEEgi",
  "key19": "3tXUdhSGQiBdWRdFnQhM1u1A2ahqgNfMLUrVX6DZvPUwsr99gqLc7p9MnEU11TvE14tyPeoUvJ5qdcksQw9i9aKV",
  "key20": "4tgS9UuRBL2A13Gtr5Pqkk2tvHjYYwuU9jHGcqLV7442e6Jey6mtFg3gZpmuLWREMgRLFt4MgRrMjA2TZ4UUAHwG",
  "key21": "oZbkhZmQjA7Es2HGQAGSgP2Cnd2XB6xD3QV2StqmZ4JdzC4QhFssqXNK8iBMYTXZuSmQL7PCWKSW6A2FHpUCqZy",
  "key22": "4aW9ZrY7PvjhBQBEqfAhc2pg98yGriMumC3b6wKxR1K5R4wgZ2jxGyL1YXnc5yRPXD4M1Z1JWybYAzEdxs1aR6MD",
  "key23": "3sphbt42mVHSZtneNKpMZgWuJAjfwbSHPoxXDv7n4F7NmeFvTVNXs5Q9ECtdaSydgX63TtJR5HSN9p432jvuHjs7",
  "key24": "2KLiXanZnMB3mmVa5vzDuFvg6McNg4LjzVWGSdvBWTg494hfxbTAakKKbZZSZznRY6w15TSjXnvVi5YnMxjJ3aw1",
  "key25": "38BNnd7uJVh1tY9H9JeN8mKKVCsBmVfTmngmc7ccd1j4jBK5wByvbpoSY6ixyCW34LRY8on55ypwu2Krn4g3bGqB",
  "key26": "2DLSgDgfme9ctVmzNNSBgj3cb1YE4AK5oEcGgr46QQPCxSqMhp92AX9t3s31PFJqK77PTw5PvdQg63jAjb75WsrR",
  "key27": "2gXuWYuHY1ReZo5CxCNru7ZbdUNJD84G7cZvAmb38MYez5uAnoB8KX5hcFZBskfHBtZF6Vdny93syj2b7AX5UCUg",
  "key28": "Ph7B42hrXusqkpgELg87MCZDNVUnTrzXeZsvs2cXmhHyr5dzwnqQcoqfxoequpPKGeUt4WrX8bDmM4mFvbs5cGN",
  "key29": "3cZpDxGji7Qi1duoMrTYwtNeNjQrrqTAJvouWukdbKEip4dgHzZCdfFJeiTBFV5sQAivYxzyrjRqzoCGyYLjqgtF",
  "key30": "hBLbGWkcanbzc6ERw86xTNtNdkUhgadAx8Jn3xv4DEX7ecv6JXKcb2YkwnXBzegZgpJDRmLgvE9u2Gn9mgP36Yj",
  "key31": "3UMSGkNHGfGCT1dCGQnUiwhHNJHrnwJ8zCdavPD82QHkQELXpsKskDsnLvuPgnEDH1tVA5DxAvGe35PpdfDjT1Ty",
  "key32": "4tFQveciziSAZVzEtArw4KSmTkBnDVMmfZV3AiBqtsjJrj5kGn89KoRXjQBqciLP2g5vAL3mFyzzfwCsT4EXaTcX",
  "key33": "3AXMdUVs3hpeGiVGBSqPzdhjrPbfmpCPU1Wv5ny5R4LWDp8LARpU6ApsipPu8fPMsjxRLucR8fRAPnBiiztbqFQF",
  "key34": "35CwKsvMiicDbHnDPJd92vt7RTPBBNKCPT6noAQs8HHS4caoLe1f5XBwnvuTW8AAZEAx7XjyWXnhnzgJF2rZLq5Z",
  "key35": "4duAz5H4r7Dabyr8iXkgW7hTVRwk77X5WSMq8b9ghJYD8EA6xHJQUym24TozW42R3gonu8jWKFm5dnLjyFJxjKoW",
  "key36": "67Qr5JN8nub33GjD5gHTuU6xWXeYTfpw6zbsXk15x9ekdJ1oFYJnwMsdvTkQq5iv1q8bTpzWpb48dhd88CDMMpce",
  "key37": "4T3xhbVAZL12foU5gsheSRuGTXQbjDrdgULqhYJgB4eGRWvUreA46Lv2mtQ1rfc7uQdXKGfBHi6oJZSrHivnFCoK"
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
