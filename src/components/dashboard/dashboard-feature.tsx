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
    "5XWBf1xg8i9vkBrj5RTkQn51EWWzjKc9fsZmdQKBK9fGJGbzPhQ263y9UgfAmY2favo485nv4oXD6G1J88csM9EM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qv7ydyGC8WAJVXe7EyidGeU5SSd8sm9MQcDjX8C5b5jxS3fEfkCeF76fMF9w4JGdugx83MTNye3Tcdiv8SmQdDw",
  "key1": "3cJpJ5B4MchUTT6yDGhTN6q2wgXid9GCtakc3dbbHnq7vBMhjm489yoSwn7nHwoo6xtPPbsfyKCTDgxtwNUXPSzA",
  "key2": "oZrsJjXEmb1jTnEf5xiiqi56N5nZEZ34zdy97jLeWqn1d5jRDqHEKCjDJuQqDPWQwSam67wx36qqriRQ5uCvETY",
  "key3": "46DxxUnHxcfA82AuUTgfNprp6Kd1d1mM6sA26zb1h4faquJ4SH8sTdeuypgCruwxwPygDbN5Zi1GDsc5AwFPJkGy",
  "key4": "3ff1mwWWMbsDXPntMrpQMRH6qbhsMdVj6dgbW6ZJSb5pd9YJFu95erkYdU3hQC5EW2DqXabm3BrnJu6qB93ZZ8F1",
  "key5": "65jF3e1QCfkiT8zLKTrgGX1V7ZavgvSoZbTYp4KN3Zhv8QQnc8Ku3o4LNjrAXnsdvdrQWkZr29BeC815fBHkiAA9",
  "key6": "Jr6q116ANsB2bbK42h6qJpfZHzV7gkMiL6tTf7L547x68KUZ5vepdxQPbD4JCmqV3TDUneMxxuYkKm8RxQVWvAe",
  "key7": "2Xxw8sdqNrHzZTT2a4mTThLJ3CqaCNReut899QCtGXmW3D3jnrbwRKZJP6rNKjxybYNiLTq96t8m9fQsJ3ss42K4",
  "key8": "29Be3XphgZLByA7eyJFnzzxdShMeLHU7qp8KYgfKk1oFYjNem7u9DPY9pHAVDTf9Mw58KBmvLuAfxGUcpp44MxK7",
  "key9": "3V6Gsy8FHF2UwZPJ7hanzRAExaBtUevb2tJF57Fs4kFtSyJRSzBobbQBkhQuoP83Z1GMBAQ6pbJK3WW8hEa1XdLD",
  "key10": "3nVCoWMhUdWsyoEfwhgEmLty6Fo8xGhbKJezbJ7uV2cyUXSfGLdWQiWAcYRnmfKt1T7CUJ2Y9HCHvYzezfUkHR3r",
  "key11": "VRHkCW3Zp7xosMukiZ5jGF7iw64413UjyHzpdpDf8SWipPUfiFxFVgVA8i6eeyzeaGewd8smTqZUWdW9qjWx5eU",
  "key12": "3Wkpu9fRuYDu6MEf2HHftFADzrrLSFvbg8xpsyFfnwSjrHBH1B1Bb2JtubAM8YiJxKCQHg75JmqgxQ1tuLawRgwv",
  "key13": "3stLr9AXY1wc1MxFFW9A7G5t25tVxKSzUW8qC91yK6mNuyH9AxDdNVL2Uo5RKDxbjYjArRAcr8tg1PpoWBkUuQSx",
  "key14": "zeQgCh7a4Bdp1YBvazkPpfYs2vprAwTnz5jcENEEs7iE2VhokN7nFtvFMPdEVC4dEfWBZVBqRjpT8fn9RycTs9n",
  "key15": "5U5stF9NHWeXhgJBXw7hqG8uyP5MC1yWAwJbL8xGqTDXKBQwryZma4JN35J7SSG9wtbMVrdAZ51Mjkp5oVJpLgWy",
  "key16": "2qCMn9Sm6t65jSqFtT27f2oMxhEGeLewP5CU2UW4zSYjY4tJniswXEMJxqUUTeawDhwDM58ymQury4vAEGtAcSCx",
  "key17": "44SwbTFVcLN7wzMKciDk1ZLv5Jk3azvyYC8Xosoi5wm2UriRvGgriJcwf1RS6dEvaX97NQ2aUuEpPjNJNtdnLjBT",
  "key18": "41r4KDeNVQGAkM1J5BDvZnsZ4EWdgd3pArsbWQg3jJVXXgR5PzBSBE7x6n3Ejgzrm3bWMEnRNYs4673vdeKz7BuD",
  "key19": "4TwHVP4gPKmXeZDLJeN5Y8R4oYg2wL2aW3HSyAnjbT5MY49CgD4SaUgsLvEKhj1XQSsHX9QTEzSCE1pJzCYbAS8B",
  "key20": "3WoThC1cwrCCmdfs2APLMRBe3GhRaxVMJWY7BNT8zpdYLEszoLeRujbbpVm4fTVs4nJc11E67CsUtzDKKaxQdRRm",
  "key21": "2AsG4tohCDnAHdb5BsYeCBE173w9UfNV46r9hFAc2ToVVaX1x6A74WD3wgjLuiteDifTPjgwdMG45fiDqxWLPJ1q",
  "key22": "579UhqV58AAs5tHYq6zzVsXyDDNXdsuSTgkLAh8QYvnWfQ5XKKvawTamJMc2ZmQ7rwvazKnpQHaK6RhQum4YGDXd",
  "key23": "TXWrSmLa3d8CZQFw7MoiBGaMLWebxXmrRAmKQb59WBtwYUWST2WTcvdeEZQtypFh2Hef4jyRtS7arYM828uFcxS",
  "key24": "DCrYfh7YoGzgaqhTeuw9Sq1XV1FEzSEsGWyT3HV8g8xMVgi7k8bJR4R2577ahG7iw52roTyXiHcrCKiT7m8hueq",
  "key25": "5gYWt5k9gxSbbDLRFYmMM6hayj5dpygBSn7DyZADYy81QZLt3fWmEsnmJQDeukwnjsfJde6zbvtuyZoQipxNLtdH",
  "key26": "3QxiTMaojhU8pip5yoDeQ8FMJNXS2QKh2LxVPjtukLmjiXW42k1QyCHyEVqw7GR5V4hs61SAJrWZMMLE24N7VKoQ",
  "key27": "4FFeJLVp4LQ6nEjA37DbcVUXSxkGoJtfcNnq648C2ci6nDY12cHwj253HMaSypgjJjXf4Qaq4y7aBfcW29MFYXWW",
  "key28": "4U4vrrndRK7ysWoPo5CMytN8U3bUjQBcpvGut4mWQqFpDC69joDxCUs7VyjzjAjE9BSy2bAeRs9bTup9pj2YJHsj",
  "key29": "278b5JXSvhCbuecbvgJE46UVWSPYzrcuuB433JU6f4sAJzoKBwDaND8cjQUyDEsMBtNgeDx7vg5j1aWFwhFzRG83",
  "key30": "4vEjjcGRNaDwrXW79zomw8nqHGZkU68w1AV1qdvycGwmWY1Q15LN4ctDEhsPVJnk6ZAXm3p2kWcoXDbQBD65cfb4",
  "key31": "2KVQPFiTELHGmsdRGyAee5pYJ7KMfmnq1M3AognM9T4wVdYKqbcwQ45mQLxAfJLBPqs2zpDiLc2LXUnza7EdW9yo",
  "key32": "62BWwNqJ7LdWuV5wvaj7eBrZHABrYsCnTfJFCc1TLjGQ1wueRREiCjstdivTXVUPZzHQrs3JDkNcEn1Ccqk8gjgJ",
  "key33": "2JqWLj2SE5J8bAtAHR6wLsWzWNsftFp7pra6XoUvZCLBrfjhsUphnDrAe7xRZpWinvgiWi8rrARzsEW9KRoExvhz",
  "key34": "3m5cSgy734AxFaTeQ9ktnC9MsnJN8xrfBxSfrDC1ZxB1cMS6ZgnWBtjWNhXyhvkv4qKBku6QPk4WU1sygt2hexjL",
  "key35": "398qeoSHwZKKk9Wcxq7dcBZ8YmCniph2b9A3ALaEfm7LWJPVHkW3mYyk7bDFYHJW5YqGShDH28wXsQiLGZUNfFit",
  "key36": "2x7mdpdbUxM5mHSCyB9pfuTs8RfAxfvnt45G9frPZoGExVzvbVXiELmeB232vZtywaFXtZPATSrfnmAUSXKpYsac",
  "key37": "5wPcJgSk94TrPbXaH5k6P56LMnzm5s4RZ9tM7MWhbXddVmgnyHJViFRChT2GmAopH8X7Aheytfgm49nLKJvXnG2C",
  "key38": "i4VB9umSKPXuwiAQeo9uL9MLMSCfpr4R3mwmmh4ukFUFUp3G8eAqMqWwSm4QDUd8jDDvouCTcufLu6WsKggv9aQ",
  "key39": "zZFRRKQVdnZNceJzjmZjNhTxG2hq6SFdrvEkVsAJDXfoUHTJMnFVK2WzDqaFZFvKPETJhchpu4FYwK9BJywPwZj",
  "key40": "4CiHXVCBx7pupwNSzaoMuiM9i4MpbYuRDdA8hQtRJ4SJdnRDm2Pr4CpVhhJ5wpFs7672qHKUF5jWahFdrppe6fHw",
  "key41": "5RwRdMfkbYbBzQJJKhcB8HkqyV7Lt7KbyJjVNbRxL67xpZpCYVBVdoEgVSTyXhbp2b7tshBoJKcHY8HG51sg6yqu",
  "key42": "3U76M6Dy2vFm9vo3kvJhmw9c2SwofUndetkQ3Sbd1yBMVndZC9PsxqRCQ6sUbyD2jbbtwnmteSch2AUH7AcfPrcL",
  "key43": "2SWpCSJ8wY1o1sjgWtMe4KbUnpBNzcViAP47ppQKD9SZKvJFw7GYZEQvmVPQjjTkuqPUHpukrgecLQEovhaExrcv",
  "key44": "oAUxKzJYUdDwYivPKNEqhux2WkxhSqnqj55CfMZw1zbgxwVc2h8gCSwXxfXyW6JFE5naoN2Lm17WMZd2KoGVFyn",
  "key45": "3LpjhLXHLoUqbRjRT8yEjksdgDDJ4cXTEZsLoafamm3oHyDdSZ23AGDMXcb7JR3bpvoBwzpZ83ZURztRvzf7fet6",
  "key46": "29chVv1PpgUo1ysx7SpKmypaDPUpPBSGAFdh5prrLzUZo4GPz32YLKDkPefgmGcWgbT3bMeXvUZtf1f6TQcXZrNo"
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
