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
    "4ZiJkp1s5RB78nojcQ4fDjBkDZipA844DxCrcWy2PqJwf6XZBPR9sz3VAb7TUwF3sbYNYquKiQpa6ruZrVfBcpA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UmwygAWUQJrodeV9FdVofW3xp8rNbsvAFqsCenTwRXSYsvqUgf3JQEsWqb1zCeMEveiwi685Ee4VjDrcJSp1xHt",
  "key1": "3gbvhx3uJagGYX53TGAYAKHqwxK2v5bmaN1n6EUCLqsAJPLxhwqKxWxFRDNSE43XZYLJg6WM9bDdWvri16QZ9Mc6",
  "key2": "3U9NxhmWFbzaxyL26droN91aNVC1Y6NuqADeDKF9AodG1u82bvqEEMnHkiTf1Z3RGvuNmzcSJYW2Q6DsFLJkHtca",
  "key3": "5y6sqoKjtcjPVA4Rps6xpk5uivxhuSTxycV4XTRCbUsgSmWh3SYVo92Jqs2rjgQsoR7KiJ841xPDms8XWWA5Ci7J",
  "key4": "Z685ZemimccxTD2vxioVJZhdvrEHUJSDHB35v95WbKKpbqDxaToiRXwSZfSCVAHzmsZYgshZNh4TpervB7sn3uL",
  "key5": "4DZ4pBzfQfS9H4dtfQhEPZbg2iReEfTkXFTyuid41HuwVHpMnmduNt3LiqpvJgPthxzjKQtL1rrw2Fxa5FCcruEc",
  "key6": "3wxAwpFuitqttFXTf71gQ2jVpDPEZUieL4TjEe1nj5maRUQc38nQmMuzE8qD4iXg4R4v46ysTUTYgfErXgjzTWDu",
  "key7": "3yQtq9QrbSZs6oFewqUThj43Re88QG24X2J5dJFJnxThwHs5WPYBCTTf45CmPgEqXFciqgG4Zn7NDXYD5ZLAuqcX",
  "key8": "5su3WnsGPdvjaQpA21p5oT6AFKh3fJF1isLUUbatk9XLkmasATv4uJ6h5fU2qtusdJ15DvcMWWEXN3SCEHFmVTZi",
  "key9": "5ki3RLWsc6QPzRtudx1p62N8FowK64MuqXvjcau3G6hMfRsiXR4FQj29Wfc8asH6814uduwg95L1Q5iggm7RYy8d",
  "key10": "2u9VuiZUZfsqHXELzFGdBhQwC28SgKmnaobsjTb4QHJwv99p5sSDiAPppMQ9QstTW4V7eivMgaUJpNN38ecQw16m",
  "key11": "38toLFqEv6RVZnA6SRhcbWNVTvxj5ubEHPeFRKDDGvpVYcYJJV7fo2DDWPy12pJP6Kc2Hc8N4TDskvcgb7QDNt2y",
  "key12": "3v7iaMShQmLTNfBKTirRc5VspYGLvPh9RwpCjPxPZ8MBU3Bs1f25eXr8qikmn7EtpjefD5aQMavbEsgBdRRyQs3i",
  "key13": "5dpp6tCXGuW6B2A5sndeDQuMwDe7SCZqyv4AAKhUZP9Fb7GZgopcJYQaFUo2ZHyXRry7LA4Gna6R9cRHCEYYY2Pf",
  "key14": "mpAvvpWZg4iHdeWxBunFx4GfYV18FQYc3JNSPK62TvYqJYi8jhDJC28xtH54t7HjjuNeDRmexMvRi7WyasGD6aW",
  "key15": "4pah9eAPsw1yxS5Lnz3fcmEyERZ7eTmzgbdoKbkb8HAoMwJMCcQuEW26gHg2EBm5nMr5JMGpFqyeUjjfBFdX79sr",
  "key16": "76pymmt9kkPThku4BjumeSmYZ7j8GJYy44vfoTFsMriXFs6hcWhiTBNQTij6VRtWe3GbRtuw64Gus4R7Q4364wK",
  "key17": "rHrFHih5Tb77d6J5LdXLYo8Tu6ijVSQfvEzm4xgoYJFQi8ZSiWQHeFh5ChnoRUcxRBwj4bTNrF7LsZffmt7goTz",
  "key18": "2ZQW6MR8rW5fzDBgf4hRFEirHD6R58ZEJGmFUAcevvE4CcjFo7tVgyJ7TxpQESFJnobrZpozAnZsqhb5bWkyBFL5",
  "key19": "5gC3HBWGaky24pjoY7BAxSSTrpFmiHFVUTR5P4EoZJeyY4Azv6huuDt2ia7fppgKU2kMZbLDpw2aAxsCbxrP9m93",
  "key20": "55qDiedbH67kzMYHDGDzAWX11GJmQPFgwjoJ9WckReXT9taUsgHt9CSk52qiZToEztnK3wjkPoAWMvhvbSVP2egM",
  "key21": "4MJLnPsPVYjpT9afN47wJyGDrKcgD4uwiYiSNQBGFDzbBVPkwdoWctZAnDQtPEPXwHGi5Jc17dVQs6SJu2UJnSR8",
  "key22": "4NDUXb5CH21AeAXxKD9kDXzRQU2v5wPffApuq1kaitykfkokYQt7iLyniRBsSQqyzfZR1mP5QwriuyGvSJ9SU4aQ",
  "key23": "jja19iFGMLvarLtiyAV4cmPxXWgyPCiwfDS7bz1NWd9gv92E7Ae6aMPJPee6uhUGF3ABHv2Spy4U1gvXFFBYudC",
  "key24": "2XpU5DSELZKPiXTib1kYgiNigBZLkgHJ7Rf5sBTvH3bBNiAw5wq5GtichCb42eLd9x1cmKv7jCFwsLyMsV6pVsvi",
  "key25": "MZ675MwtLb4YkRUcuc5UtU8efb613JDvFYcarATWiVfJPVKgvQ2Yg2xAGAU1onz2wqQAAonpBobQMWZTTpgZi4w",
  "key26": "2M3R8G56hFXwP3xYVGuFjZR48PKxwpQMAgBiqYB48H78nLWzf4aLjNUM7yhVEyKXNQMzsbvdgotY47kSCUCYLP1f",
  "key27": "2GxFsKNdw925ejExTjgGHzU1rZVJ6GYPXGmUYxRZhR6KKMXcuNbZq8BiACGBnHCpVkZffMyPSCfRgcr4V77wW3Zc",
  "key28": "5CEf9RVsFLCJu6hfoX4Jgu6om838gMvpNAAugX2JwFH7cRsFZsU3EBRWcNcTfTkQ35U2fUL8uwby7Zhs44errxgu",
  "key29": "3MAyxUQcUh1RcSKUc3EzUg1FBkdMYujd5nJk2VX1uTPfRr4oeX1bxTBtEE4BQSijYSDHVqV1URwM46T15G2s2Fm1",
  "key30": "4PQnEHjTyLrVwhKmHnUW1fdazDJYm3Xbr6ZxbGxAbHMLLp34EG7kY6jMoHQjAzSLmZptrXjVV4Jdpp2DmYkHdu4A",
  "key31": "coDDF6Ec9QNRDTfVCTLsFbscNasD4PuKeAERzmVS3zw3rj9n4TDcbtboqnVXctu5ujsbNwwNXZF6hrq8YinR2cg",
  "key32": "2fQHetjkakom121yXQPwCpyyRbD5pHLQmoA8CEMmyaTibi9JDNarfHApRY2znAJP35a1oYVZrTJ7yB1uUSqMsgQV",
  "key33": "5XxzWupsNqk7kSUAHPvhZvhzAEFXsMM3TCLhwLMFyKqBaXZ8omcbeEKZj3eidKi822KJ5DrxYwmR9P7q3kZeXK5s",
  "key34": "4scy8hRFrdx12qnMDyrJtDCvyZV9quxkzMFvaeWCwUsFByZheDU5R7XmVggYqKgseSYxPc1cYrcHa6oUvJVwbouJ",
  "key35": "4Vrsfy9p3Xrn7EsuUcnpTzNG6D7pcwj6g91ognf54aVNAxDHsnCeCiCbUVVmMeWHqibnmVJj5eoDwsYVgCgR7jNm",
  "key36": "55gky2mjqXZ9B7zHE9SASX2w3TaouuYzuzgVnmkujmVffSUUWfqTmmE9mtLGYeH3AZL9NM8SS1uoN6SwjVTuAuYz",
  "key37": "4kQF3zKJLy3QY466r8i2qU93yfFPRj1aBUSitgaAnYiL11AZM3uTCsEivwdw1fLVAo3XkkME1Hbjzh3DX9bwMdpj",
  "key38": "HtHuauryUBz6U7872DhDz1yK9bMphuUbChoc9HMT1pR7yqFxZacd8SMx2xiS6WTiQA4S7LjwnL1BHDGu6pUUnfb",
  "key39": "5ajVE4jUNtfmD1SACQwYcbchXfzGEPHwWXD3b4T3NG1k75L6h4s33dPFNC4jgKV2erF3qKDPCEEztCS2LmxExFNk",
  "key40": "3DxUFmQZnzkkUeCXhgBaidRUP2aJrLLdQnWS8QkAHdCYXfzHxGCoT3ze8KrespxcMZXCbwkNyjjrbcqRddgTeGsH",
  "key41": "4m6ot23wzBAtgGoh2W7oDJK7KnwFXVu8H1y2x52Ew3kiiQyhTeyD6KnvezD8ZfTxRPsahR5y5GvajV3jbUAYacac",
  "key42": "4ZX578Xi9Wnr27fU2y5iuaW93qpkF7B1gCjdmoMBy5jFxLwJviAingA1NhCSrKxU3TRpfM3N7FiN1vPyPGLfJJoG",
  "key43": "2vdFQyNjoRnrmaZE4KRfseoRQ4oSszDL8ihZLHVuw6A1qvzoEgwQ9CUfdyXyo3ebbiKKazCMfzc9o3rrVCr8kLub",
  "key44": "MCxScLATbs6mAetkJBCj1Cg1JJj3udUsHD5DKAYxKmCfuWdtnzeHLtJMcfWdN9ATQxVvN7Kg2jjWJ9cii2zKqph",
  "key45": "2FNGWm7wbHTeMQRkbtMEMFXQVzbi7sAgp5PsUaWhMAWQtaRi3cutJijfaGtoxiwzPi1G6Jn1uHjUPJDxP3m4bYs4",
  "key46": "3v8bSXdq1bY188uLJWS4JatxnnJTZ3T9LECRZKxZGgEcWEoY8L3qMairwSmyhodd3rZDetuutUqjuGLGdruNDLmC",
  "key47": "4Z895A8t1LdmUgnVVXkaDgZYu7ZLeaBH8YD8DWmGqgRvX8a5L4gnKf4Rb4Z4tfhotGYBoBngQnbMtevhAKuUdMU2",
  "key48": "4dX8ZKAK4Ug33hRKzALrvDCTb4SB1xbBtToBi1b4u7JFJvWPDAk6MKnwTu9T9Wp47NhXb2KxNnjK7xkMHahXWVLS",
  "key49": "5yQKjpfA3Y8RkNL1PBCoFhsjbCNLmgo5exrmTMRY3vdap57tjKR6XEaiKRhovGeE86didKcdwuYpW4QwLNoTqkXC"
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
