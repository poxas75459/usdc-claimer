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
    "4buBw5yxsRKJxrYHyV4zpFbs5qQu2zpb6zemXiyW9MbpfmtSA1FnJJHYuqXPTsYbnjK4HMRShpnTsei5C1jwidW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "582fYSzGSMynozDg92KranarsjWAhUZbbVMJKPMTUuBTUdArmZEq9XtsBaW1b62xaw4bdixZCp51qyCFDpvexsmz",
  "key1": "4XR4gbeLtHATAPmPYGGHFkp6nJp7orckHPeoANcj5ty4dvUnyGRUa7xNLgHTthEWQhJhfc8DxraN1n5hq5BJeY6R",
  "key2": "5jb7YJUuPiwrhfFaUUfpDMA2CN9Q23ZaJmMZ8QReAyvR2yEtiU142LM3XAk6MS6KbjAwpDPR1hXURjs7h2QQoH8G",
  "key3": "28GsxkwHftj74asR5aQYwuamSbDh9VBwxuZZAtyuv9WdzDh17t4jmyh44ex2NupjGuRp9wUmZd1Siq6GTanykULr",
  "key4": "2xmPw5PbXmjk6zxaXsoEyt4bjV1bDVQ86bKWgCwEunmfMwhVnKf2h7GYnPzSuGZdsCd4AYjANRXgtbSUPBnzrwaZ",
  "key5": "3GMdvKFp9zkjh8QEn9aX8s7JkEq4B6xWpGXGnqyWX8aPMHrHfSeHFqh8N2Qu3ddBN6hYgo8WKt19xd1Qkax6Ftuz",
  "key6": "3KCsAXiXoXJoCXWAgzPCNThZ16hvKb8CcFyjqmFTeZ8VpgcSX5dPtBSmpZ7qhXYVmFjFztgHeqoJ55zoiqVyepfU",
  "key7": "55jji2jra24a1PKvNBg3c2C7BMPpYfd1YGANgy983khGEjgF2q2xdwqDrYFLRyDGWb4Hg5add9SDomtgQpMsSpdq",
  "key8": "4Dg7vwNGBtP3LZ5yfc6efP8DdzedxHe7eB8t1Rwk7DgmEK9kJt9jC5hv49QDHPLcQyYYtX4rt9FywQySLtkqNXPQ",
  "key9": "4C9DSQv8ypEY674tf1kZnyxUhYdDddL2vpAhf4AiB5ULddiossee4eaxLxQh39F82EayDphzm1o2n4Es2gz49PtU",
  "key10": "354d9Qt5pmXzrGyoygqEe6KDNyP65jdDp8TjJQaUACMCY2d8K7aywsxhAHh9AkWUkL4wghbzdHNGb8VF6E7MFdwj",
  "key11": "62pRadLrLXZ7Ndo9hQTBpbNZxVGjjTgXg1wsBerPR7N89DPKkgrxtSRCybkxMzJHHCW9Bnkne1JhhcBCsiJTVvVB",
  "key12": "4JyqKoRjjBoaidBCCN3xPnxm2JxngGAM1Q28u9d3HQKWRsaFW2E8SiebnZfuUZWBk4Ae7FCy3MSbAWT4rEnBYNMN",
  "key13": "55v3GMJkCgtBSiBrGBJcw9BZLkmnL3TM5zTA4CQUDohUEDLL5u3TXYMyEemY32bEsaFcnLK5BipPJbyacoxbL3vM",
  "key14": "2q87Dp2s9AfUxYFfHPXfPkdqGb7inwwohBZXSkGKVDotuo2GvuXtr4qNipGaQSgfjiRgbUA7KQikhvG8532rJukk",
  "key15": "2T5uctqZUc21aLTUJ9A1EhApJegioGsF7q2vr5TsqK2izdShwqwNAErbAtqiEr5pts6iYzjUWyxXBs7eVTaAtiW4",
  "key16": "2PM2FEEKvAimsS9c1zuaPmFtDHNWnPQeFXuaJMW6JptHTEFnHfehiby1eBv7B6mk2SQPCRNnwpT61T8DmBbacy9w",
  "key17": "nLu6x82TxcJUnH6VFKut4k9zYQEqJjcH5JtJmUNaCAoQq9TVFsMkVYPNfjNGmc8PrbRe7Zi1Rp9MWX3cMc6nkuZ",
  "key18": "3CKPHCtYo7kfP6PcSKEffJvffbhzFd4Nk6Nk38tVjXN3BzHb9FSVpvTqD1fUmYcEty2oiEq4uveW4EgVpvHu5Wsh",
  "key19": "5s9EXRqZWeLiwsQeYAtqh1YfG9faebeCxzDpUepxDeMVtcka8EMttL1T7PKhCCJKnXPdvZcUdYYvM1sfMc1d2YJF",
  "key20": "5W7UREyhC7QaktnJvhwEfYeAnVp6FyFxQpKEmBmm5pZwoFrk3fnL2Z4at2qA88tXxtxSD1Rm7URLKUjWxa7HQyrY",
  "key21": "5ZDBcD6RWRMKvJ5SQ66o4Bohqs3MzbbMYZ8GvpYknRXjnnr6hrXD8t3dkWL3tAMQGjXW3JGe1KcpiQ787y3H9TGS",
  "key22": "5mZLPLWjkjQgXtVaXotjGChsK6eNcMzH8nzpTLunTECyprmJNy2ExB7ed5vcdCqmP4UxbiscAAmvHhwEyFX1RHh3",
  "key23": "5PRGWXt1zq4dj7ThmgDu7qkhNXnhZXFSvLToez4JgTVpghqeemD51dY1kLx5qCPqTDMDAHTM62UNvrqripqg5g6U",
  "key24": "3ktdLjNM9iuR1LK8RLUxFNzwug6G5THUxJ9tH65ddJc9Fdz6tJWFGavX25vSoo6D3b8b4UwoMxvw6Mk8EE29bio",
  "key25": "54JkKbWgchkido5JKMEgcjtXJYpHVrb8wyXdHh5ZphWy63SX41uBniF1aDPUEUxvyy9Yh1fYuwbBTjG3rmLCv33C",
  "key26": "2A21tqEZzmpUQAHuP2QxfAkiYUgKqSpKEMqdVhNu7MJZH5d1S5DNzsAzp26utfU8eZnBUwhxkwRHiL3oMgSRvL7H",
  "key27": "2tF74sjVFWFFBBxgGPQRxhDksaTVykBuyqQsgaVW9jSTp9CV5sHynHxfNgKR47nzNZE6UG3aJj3dVho4z5T4NMVC",
  "key28": "vq4XPiYrX4DXsMKEHqNgXzDVz34k71ZDFVaNKs7MXpr1mn6A5MQLFTT94rsJieJTzc3JgWVva6VH9vZUx7eFX5V",
  "key29": "399PGAoN1Db4A55dveBmU45NSgtRm6MRNzDfTW7MRxYWLVTgCX84NQyuG8r3Rf2mPNuXagkDd7b2KDR76BV37bYw",
  "key30": "579oPd3EHsBiFbMMfsZ4BWVwL4k1YeGxfrCynYPiLfzRtnMRs2LeKxPhKqvBujm1Bp4XhnA38vz2fKZH3dyfaoWF",
  "key31": "p1WJuz9UM6JTVDzDurUuuoNgTB28vSaN5qmLTBNuy9wo9MebGxxhEThcbXd7BR4bEzD3m4TjUveh3hGE95eTT79",
  "key32": "54pAwzPMafRticocxyBZwvhsxqdBSrrXsZLvAfzmiAJntwJMFUNvYvFneGr3SqCtWXSqasdu6r7cwNXinQSSVA9N",
  "key33": "8qezU9jQ87LE2PP4Kxg8CzMhZf61YQ2Vid3ZakPBLkjunsbg9Z1iDV4s36gZKcTiC87eHC1BG3B2fGNJyeuZGkC",
  "key34": "3qKmRwMahAs3BrqJqDXdcqZqQxgtwSyhPMr43TCJwFqgfjUQaPmLUJXye1Qpb9k8vESAwY7ttoEVqPswhJknk7u5",
  "key35": "3JkyG8yxGnWPjjPo22TTnDLchLv323PoKWV8A1CzaDGhEhriPpdTjks8yAWdhJUSJRs6tzaREfmyZVbmdYnEBcrV",
  "key36": "3DyUsCfygUPh7JR5iCGa3vaaLTyPKmi1nF4nHqe46QE8HhSzS44GwY2BbssG1WU47dsx9KsXnF8ekBaBbGK1Kp5k",
  "key37": "GReeY32dXDYXsso8SGgq6CB9ZDzGKuasC3dSrGXxzsuqMUvSNfDkHi3KwEpAVZB3KLwXHrTSZjbxkSK5X4sgcgq",
  "key38": "MgenNdBWjinbffFRmkPJphQSvd1qxEuPyRKBWzbdETMS9SWNW84dFU2gai1CN3LG1xLmVoN1G6JdCANnJVdgMKu",
  "key39": "62EjXbwedgNdFJecqTfMUba2brhGBGcj2PmvG4MyUzbNx6tg7TgUEJNDeUrcBYw1C1EkA1f73iwN4rQjpyRo4SrL",
  "key40": "XbirMXn3TKJpSFshcjEeDNBHK93wTFn79r6YBtC6BoF23Q2nrvXqYQB9G41zNBuxZzibn7iKevBVuhebwocSfEA",
  "key41": "5WoygsXmB39fXUFSa5f1gYrQvkotDVcpppbKmG7ZaD9YqXJHUwydLQ61fZKf2EGM2qTpyA7JKbuQ8YdzFdsAsVw7",
  "key42": "3cYHBbPvpDpPs7xnW4kJWyUNSzXL8ETKJeUsBawDBHbxvkY4GjnVfTUW3wNdNwoHiSpkbwXKemGCd7s4GwKu8oZZ",
  "key43": "3uTGgViRf32EZNkTMJQysjFsuy6mWMX937Ptp3mSy6hDtJjwaUMTVZmWKB7rbU2yNuiVti1R62iYxyMhTA2gCMjb",
  "key44": "5JJPxNAbgXmZXP819WSBvYSnsyz52GGdYSFiEKKe1AFyt7fDMktL1bUCPwZ3CDpss1e6636TSyrTrUtEkLxrKvMY",
  "key45": "21VhVugEYwkSJrJHdonCcT5jiwXtaZUjuVAnYCmEZ3JPjdrZnGYEsnyXhCZxhqdFJN88TNGAWEpGYYDkCY4ZBE9E",
  "key46": "3nbJqhUFK1z4LaQhHyMqf3dZNaCrxxUzXQYeCP1Lc9XmT6XEXyqdZDyZc9aDCwJvyNSAFeKsCh4YAQxypvucjhmS",
  "key47": "2VjfydTPVncyvVHi1DV3gcU7678ABfRVGvSmjar39XWDFqptBTEfs4wsu5wWUfw6pmyJkRNuCLGNEpQYzTYLfQGS",
  "key48": "2EZnNYmxLuuCuiwtMewuagjHLsCgU1bx96HGFQRD5cpGZLZTCAUwk67aWsVzrz7x5y7YmhfhhvPjwHkEy7URB3fW",
  "key49": "qqSoHn1SxGmrPUjrZAJ849euhDr57P5FJdxbVtnPaU6USFKivRTFM3PBA9fLPc9yEan8gKHfdzA8GAvLNVqpWgb"
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
