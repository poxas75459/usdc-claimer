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
    "4g4fH92NVExDWFviYF4Ky7pD9QnhsfUECc1SSS5yg5o6tLhwKuKYvUMHgNYnu9QP69hqWTUibgYRUqhMRP7ttGnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nVjYBzVAeXKnLEpQfcuYVjARHFfUmayKPV4AVPUS8rNAauUmop3o1q8EnYGWFQXuJMhRUxvFSrCgtXWsGSueN55",
  "key1": "4H1JveMWbQwF9MwktNV6A6CXTBVentLB2tqeRY2L2xZxfLDd6pBvQNeZAmwAt9pPG7Ez3HLKF8uwwGZJ9ugEQfvh",
  "key2": "2dQSVz8ofpGZ797FWESchoHs6U6TDPWXDMHygZaj1SyrwzYDViJc46HDXMAtaXvpyQzJK114aVCaaQTQxurRJqr6",
  "key3": "3i6JQS83xWVjJBWLWCLPGrPCVncmCmcTwdAbdgNCbZUtLWe1tRES4uakbaK6YjWkeWo7brL6Pf3eXK6pEFA5bLxM",
  "key4": "iv6UnMwbTEgrFxMimdJHHAgQBW7Rqky1Z7dJDKsWnenM61K1RsYqqeKp7ZafiSqeeCBuiyGxNXuXeDGsVSmMXx5",
  "key5": "7fUgmwRSVc1cRd3tvRn6hV3ECXtk3es83VrnG47nGFwEj53A5XApoNcUX6pduNrMbVUFHee6rSHrZ674VdAhSzv",
  "key6": "2VaDqQfREXrbGHeE121ARcNoQVnNQQ1mmtSrxRnMMnukuxZ2cxCzpQNn9NHSLxSzMSPwWndLZVL8VoqAYHpADDdJ",
  "key7": "55ytqSAjwRNL5rGfTMez7uTZrTQSe2BK9Qp8qn48RtibRxiZGEUDbt5nScvTtXKmWDCnAxsvshLwMHRUybJP1RbR",
  "key8": "639tcZvHPntQVJ2h8PtcVWviYKVjfHfcWEaso3XFckD75GzjWRjnf1vozBdhPZ5q26pz2JMPeeruttJ6gy4wVSg9",
  "key9": "5zr3BF41YRNbqzNSBEptfwoeD9rKw4iVdqi5rT6seXeTvu1qcRm8iuBYb8AYaM3FtUWbfHjeYZxUnctR7rmiRb21",
  "key10": "dGPbonjtkuteheJTJZ9Uykftci9UuJP6D3nwa4q1EB52aanEmL3brqZpjqVUquwTfcPvKXkwQutau9KjR8Ur4Lg",
  "key11": "3eq2RDxR6if3mP5eXeQrEKwneozNQw5y6ixHeSTKaFVLuSScPG8gafjt8KLMajFQWSwfem76vJo5wJd5qggrFwj6",
  "key12": "2KEuJkHuVko4eLnhVLfHHHbUNvUCFWTPesR6ZJssJ53TFrV5QUBvwhP5FHnk97uaT4ZbuXos6q2z4ejpviJMsms8",
  "key13": "5NM1HQHhZ4yg3Zf4TuzQMLGqeXVvDtYEbEUs5HSrBpDsatJiuMWsaHySzUmjzavNs1fyS1WyVBuKhW6fuyFNnkB5",
  "key14": "3cJJDawhSzwh8fkVjwzGsts1SRxfvW79L95q3Mc4XH1djkVpkbcsoDfQGoyLLMcRwxHSNnCYyFSCc47wVY4eMyLf",
  "key15": "dHG7JVu6eRkBsKj4QQBJ6WKYzeuCsiHcFpBwuHtTSNMxsU6S4H5qAo4PAjWQu1Pcq2EBLjXyL742Crjwcg9MeLs",
  "key16": "57LVVUFZsgnXAa9Xxmgz2SLz1rQYgr7zEbnH2fAfpYv1fxbkdkS515nHsMJZNfdDDavPzCXoduEavNZzK6NwDMpL",
  "key17": "5dBkYMzp8A5RKJQiFFvxhGihjPHbBLayDuHfLcA2Yocqyx7YHJaFG7cQtqhMM7yTiVSLExKckwj9Auepq76fikCi",
  "key18": "NvtNyUDDaBg1MyCpXj6V8ZvYrQzcuR9RbUNg4QXNxnEayDe1WEKPGKKaRd1pSnZQLDUdvpatHSrZYi1VoPLpRZc",
  "key19": "3WNRua1Py289Y9bTTgejnNL5JMQ475TUoDYsZ9ohbrhvC8koMFZBvbft8qYdwoDfB4pHGYzTbTTbENn81hHnUHZr",
  "key20": "62ZTXuxR52zZnUv1ys24QnXmyLBDvj6Dv2kSd22Q8erjB6r93N8N6sZF9zHWGYPzcB5hwQF7oEKw6ExBHiyQm8Z2",
  "key21": "615XC7up5jyRimwASKTaiFPPqY7ZzzgngsaNNQSEJEmQwYic4KjKDBSoDDpLNE68Lmgc4QR6k1Ff96TKMNs5jryF",
  "key22": "5sqbddJjXF2ixKgHS5PMCShwaCB61WHJ8WCyNYWd8M3mHQW4iQP1wQvuSWjeuSFMraxxFXPUgsC9ybRvpb8U2d8S",
  "key23": "22MDisc4aBT5V2h6aBF2CLiVYFwCURaaNS2YrSwbXQvxxqfGAf4zFVezwhkBg7uKsYWpcxgYc3CFNkHLbyXSj5f7",
  "key24": "6398z7cjmiBPFhPrKN1FK5kUfuQ4WxpyUT7Eps8aXKStjxLrpanw515XasgJJuhtuFuo8ZEGLVmUnZxPX9p8uop6",
  "key25": "51yi14mUpaME6erFG9nouKwqudkFxkaGE6MShoitbchhKS1EhonZDZh7XcZJXUAUsgoTKQumRQg1fqf2Qiy9Q9uG",
  "key26": "5iveioLNA6fZ3L1tA7DBDBYRQbZG48SryoZr1LzjxdD9LEUcrjs6eyQoGTtU3iWb8q8zkGmM8iBqDkNbzHfRvh7R",
  "key27": "3ziKqk38qBtt8NQiEjo9zm9yzbMFR9ujXYnBayCYvLmFTaEE8ejcDxVgCQff3q3uqysdXNa3pP6H5iciPUGVaS8k",
  "key28": "3ZDVUJ6AyUypkbGkeRgfxRRU3kmyQ6JDH46wBb7vZ6QB6L3jMWPrGwLAVTV2DnaPe6T3fH3PvJ2bDzyvQdG8Gq4i",
  "key29": "3LHWi4wTbQ3KxrXpfWnHQ9At81TJxNaLGqotYWWuuSqg1PFQje4aBwg3wrnQ1HaqQTz5kzk5JnMDRpTqQsfRHEDo",
  "key30": "4M6PYxt6oTXteTLprVF9Z4UQqawsgYzBcwyFHCXsaEYtnRSFDWKERQcs2XV9GYVSp8b9YjExYsde5pMWtFCHgrpo",
  "key31": "4Qk7fVayRNMWgvi14Ym6BtSLqWQY6BBqJDde1CXRJrBuZvmnhktMWMRLLsf7Qs6fyVk1J4hxkoFQ7a5VieSQdgfp",
  "key32": "5EzBi3YaF3QPNKttF3HofyCQVKDrgfHNJsrSEB8UvFwt7EdctJGoC6ZRVrcZG5QSHah43so3jKMhJYRbEtMdivb2",
  "key33": "2oy5inZ2kAHBR3tCfzSTYuvKWqNJ6YkngWkkaX7LuFCs7tHueTAQ4LaUr8mSv2Lgo1Y3fWs13uoqQuQD6u28dpa6",
  "key34": "uwd1inHjSxQnsuvS9epsXmKSfGc5RcKUP2rtkfAHW2An1TPkhywHzm3gFPKu2rFWXka5e4zxT7NEvvoFaSvzMF8"
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
