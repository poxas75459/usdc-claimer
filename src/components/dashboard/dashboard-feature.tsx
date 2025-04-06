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
    "4kcURp7v9aL66f77yPL1quH3JFDqJFqFjuBkaBJRsSGtEF86bptNkeuasSF6KaJK7DNF12xZXqrmzY4bQXitUXaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kvQV8cCUjETkVUnftySwhjL1YAX5ycrhn5gJzx6MzSakoB7xqsT1vW5PWWpbQ4gbqfo6GzE8jruiPwVqbTq9n7w",
  "key1": "3Ur6Nq99kwFBpspgHqFag4URkqJHjfuDCc1v2UNwYMT7tZU4NKZdtSfwFp9L6emS7Muk21KF1ghdynK1xnm9B6TS",
  "key2": "z6cbKmtCmP677cvH43fQ26h2Tjfp9PHm38gsRSFxQNiqeGc3N7uXztAT4JDsTcAGCdCsFCq77LLsAFmpjorvfNP",
  "key3": "4ER9kPhFndZ37UrGeYhju56Lo9cKrMp3NCR6ZAQez6v39vwRFs9zbtKoXRSyLegFhtxcfFzrsPaKb7WC4now2UW3",
  "key4": "2uy6Yo5hGY7WjX9dDep9xJ95Zax6Er7jTJegPWuHoj92H3EGTdqumbhvnr173r7GB4xTxpK6q3Z9BrJtziTN1jH2",
  "key5": "5tdw1ugv76gNeLkqAHLpLermdUxysZa9JSHYT4QWEgmGPYCdJBZn3f72i2XQvpJsETUxfWJNEtLjrFr65zd9rYm5",
  "key6": "4ALP9VLYXjzEzjRrtU7D7Mwu1ZivzknpegcYktiN2jvHvQgdDuN7jKrD2aVdYj4rcY5rouYPTwQJ2JiXd9x8XjEn",
  "key7": "55RobtTAoVGCYWtQ4J6kFGFfYPtK6ASNssdGGB4y2c5y8E1Lkdctt8rLHsBXqYspoXLnWnbtzHam6He5ZwSYfa7T",
  "key8": "4UaspKNot241dpK5tgaY2YqUPhRqHLQTtdv1Mu4E7kAhxaX64WpZUXWNjthHhULptdyZ1PbAwegnpnru7PJruMjm",
  "key9": "2rGdHxkonPPPLbLWRC1i63HZFqHaJSxwopdS9KEFEvvQqDYwgW2Qg7WXiDHzCAtwUEUxamekvTnKB3QUAUGWKqWr",
  "key10": "5kBWnrRyPztZFo2fkVMMVxFVASDzmJg2JpiM37Lk9GDjdSKur7ooKBtpQWXKfUbSTGCWdKAZHb1QZG5z1HxyRZXK",
  "key11": "5daMGCXhihPTM1dXpsPtvpDnqPX1zfmy9Zb83rLVJeS5EZJPY7ca4Lng77Guvrdw4j3id8fkLWhqnXGRxZoc6ks",
  "key12": "3XVaALevW81QJJbfGB8dDWWURQbB5QDWrpt54VBufa5AUGYkSe9N4T4o172egwjNVnj3FSYS17JXj17bhquEra3Y",
  "key13": "L1aseQZQANrmHBeAyy1aW9t5WNXpbdaCVNQSJMenWJinTLNSgqU3K8kXjXWi6g86ABwXJHRDDSwkuK8HeASKbJd",
  "key14": "2YFebug3VyMysQGLU9bFxpJXr5NTyxGUyBAe4pVLuoDm5JqC374gAtjXUVjGfQRAWNzBNd4W71uXLRXrPx66MoWz",
  "key15": "5LPYsQ1cZ14CmpC4PNFhiSwwyk82VcJguQUtwBEigd2dcFM2EWWihgZ89pCHCKrLXNod3e8guSet2gJswZJ243G6",
  "key16": "2WARM4btPvAHhgNhdRZcSmskDmVoHXyzmr8u2r6DGvLiKCeovcxNGX7sLKTv3zA11jLPfT7hjGhkBdm7WAeAsRUi",
  "key17": "44ng6PDRoroyB5YcDgpWzvCore8K5Dk4WwgBJRWQycp9hDCgG8aN1FwS99qqnNanU5YY2uuzm3so8TfkR9uDkmwu",
  "key18": "cHciq956ST2BmHYyoaXNa6JgLQ6yMF7qzDmeFBgGDbJ4WN9XnZ9Cj25ze2dHSN8oahi2PNby1f6nAJUXqJze7qt",
  "key19": "4GgnGGVD9zC6uMYRrZ3urhGpy6Pg6fMa8s5YgsWLMrrSko3ked55WqUJnJprQVMA69TtNLX6FoA8ATpY4nQTcz3p",
  "key20": "3E54Shdjc3JHLtaEaXVhqQGMbW4xPJpSnqUmHUupKhLGN6GKYNa7364rQPXCdPJYxLDVy8iwkTSJjwyZBR8JC2jn",
  "key21": "55yGxs545FAxVEXyte5YcM8mqj833BoJJcjPbVvBw6gKoyaz1vY5Qy77smfpuD4MKmVQebfbmaoH23FUo8qe1ySe",
  "key22": "2Kr5rMBnVi93cxJ8crG4UjTZM2s8LYEbJaDTBxYcc6MyczhvCqroBYxcNdXyWMFMGA6arfHqrGuPp5hjZ399iisa",
  "key23": "2Kk6qArXvoWfNQqmyxdVyak8nBJqaKMSSqrcMw5654U2CkMg8caxsEQUNj3QXWvQHSvQLwFvpQEqqWdxuJAwoPuZ",
  "key24": "4r48mJSBXqXi2NacDUQZfiqBCPLRFS87xeQRJw1wzNDpdDLyAgCzy7GSwLxLjUuhJJB2ZMdxRTb637sNTcVNjPZL",
  "key25": "5wD4ypUS7Biq9FX9qzxd5mCNdBaQJgVWJsD37cNWYeNLPDLBB2HWVLybRuToRjWTyjYWuwjBJmwJv6K3R7cU4awg",
  "key26": "5Rfyrz64rUHDxtfaniVGok4B5qDVwap81vCw98Kj45Qpjm99dsVyhH3DPWKkDBou3AwCpPbseLp7jSDrZA6TVPBi",
  "key27": "YMAQ4EA1oFXFD3jDLS3yzBgtjHJWxTZKhvKijeRnLUkqYXMSuUNDumAvE15H4FatAsMna7jxHcpy61kPe5vY4Ab",
  "key28": "2E6wsdhRsB3vr9n4jjyMcMKyDbPEA1YMqKD1nKUJadDNZ91fYwMF77wvSQ7oNVwYUcpqTQEx8dNd6GuTtDBY2Ttc",
  "key29": "2hm5NXMaxoachuoPvBMdx1YzNiFrUSv4ZVjFyEHCm9YK2Qq2Rvuh8xtZuB2bTAdiv8HM3NwKE7w1ttaafVZsLqPt",
  "key30": "5AGEMVhxbi4k6U41FVzYwcXMo44Xsc8PzXzS13QSBU8D2hLJYfFWgLk2NrZCb2keSkoCwu2EXuHZDwUw2RwmZYAF",
  "key31": "3CFB2av3yJCAreGDBtX8Ffjc8kmPvqBZVsSozSfadxjCnTYZ6To6YQQTpFL7cTUFnKXnT7T8mZBoTruwyXRQcJUa",
  "key32": "3dE9yB1vay1GXmCunQUqdt2pEDuhLSDXoLmKp9GZwE8UrVMpA8FTGny9vG4qa85CJXFHyXdKuJCsTYcJJ8euXtHo",
  "key33": "5W25XGZP3RXT3rzy6UjteVeBNYAT5STU4aGsX4Lt3VFU26pGjqSHLc1DNtBUqCvgbZCviDN3LCuo3HPnMFwDZnnb",
  "key34": "QfydNQqoJ2oupR5r5B1rMtA2LnQxrjkfLGHKkTbUtS1sKfpMJKtNDyGUBMN5UtkfpQNQtJEAGLYQ5XVMutAbEEi",
  "key35": "4oQ9VPvkfEkyucBCjtWfP5V2SJHZE3yEAbv5qLK5zgnDSz17dLrq15gFR1JHmkUgbcVWrDkqAqLYMUxcxcSyAt4G",
  "key36": "2Jw7kvcNWV6xQ6VpHVmKiyhvQ4LGEmADr9G8VYPpG7tuarHNHSaZ5FMQjDyBGXnq8ULbrB3sFQrGiSsaxfTjSanh",
  "key37": "yxHJpCVVxfP1dcXkqB3QKFhEETwGQQQm4fyVbiwfgfTGA63BsN4W4kwT4sumVywukDYVnD4JQaVK9zRJmDcAimn",
  "key38": "2G1b13r7PyoXVUejzUDskhTo4efP1uvEBg1jvmyGJckg1KCeXvc7hdkUyeCMrRwuCazp19QyK9UNohMdQ6UM4bUB",
  "key39": "26eKgB963pWq6TM2qgUt7DYr6NsxFPPxVjoXt3UkSFrxouWbmzFTq53seFKato2oBF1WUATTFdi6DPTnwictoXb2",
  "key40": "vDGu5u8MBwWWurQMJ7b4iSPCARzevXgJxr1U7pYy4SfEcxt5oJPL6chRZd8NwbY33iuL7fEsSTnPpoepWDcgeHo",
  "key41": "2b96DY8MzKbrfFCVyamd5VN1Tz5KjKyk4AgY8TDmXa6ehy3uxYtBWGWZcyUq993pCHL96m78CVqvgz4kwFaJm1PL",
  "key42": "4nVhMue3b9gWTFcy5Sur2Un1YHEk8N2bmvLyumQR2n3BeozmpkQ6TbS51GeoRfzYv738um9dwMETiqCMooVUVsNb",
  "key43": "57aFYc54tsf4m3BV6StSrWV1TyNyQNXWfxAyHnwS12bemp8UeDKLpFERQGuKrsz4L6CuLHqoLBZbv3sDMEZzTjs8",
  "key44": "3QCZPSEzzwzZW899gx14rNcjHJXHq9NWDbjA1Y7prKfhCKbYbfQAXgXBuirHjNM5ByQQJuaw1Ac3k3nmuXjUrNr"
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
