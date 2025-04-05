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
    "TBLwLWFx7LKWZX4wyicRduL5HyfvdfSRhzymK1kLJeShx7HsvMBsGG1VqvV8V8QSsGGWSFYoqDEuUUJavKZQ2gc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cDhL2Whr4wvjyNUmriJmDDa1Ko8TCf8LoVk6FCQn1DXpaGn5n7NBnZBTtJVwS2ssKacMmDievefGDMkkT9XzUkL",
  "key1": "57CamJVxeq4eVzc5gjqW86RXqHGNwvfmaL8GfHL2WgdgRkLstPUDaGK85CuScXeEHo6veqSMVZRDZrERn22yawUY",
  "key2": "2bMTZohhbt2kDtEteqbE3cXiSNuD9aRNMWMwTYozTaEAokExBcDDZW6wPgam86VJJ9fcK37gj2ukrDc1W2Z4Lcn6",
  "key3": "3DTqEf6FpAmFLbBD2cFMwf8ADjW85xd42tWbexpKsqwRdiC58pTKdDJZ4q6DVukF3qbdou7m7VQmPmfFcyqFTqhJ",
  "key4": "2rcDvLcsSBL1Doa4NY6GuiezDvWVCDso9C8enL9yzfmzC5auZkYtA1CqEazkeVz68btTHDR4SmMdFsMYtFQNyUC9",
  "key5": "3EhLs7ZXfeS9yAcCizSDuehvSoiMDQY4G79pD7XWHVh4c6Fsd8gDgAF4uqzvwDoQuv71RzTAaffT2sZqD3ubqT3b",
  "key6": "3xdK4ihskAxknn7R9d7oJ8MDHQ1p9wDj4Wje155pfCfQ6oKDzfBBc6MdNdpBTDP9bCerBWEjZgVj3XDRMXD7hPii",
  "key7": "uinmVDmQntNQkxBZeLB5p1Be598kjwWVvTV3EpNJ2GMDAEyTeWVBHa1ns8F5sHzajwcNxouhFFjyJ13uGyHiWs2",
  "key8": "5FHnY1paYXewC1QLi5XtespxUws9ThPXsjrNeoEhCUNrBnDJWnV43WEQmFnJCie4XzGfnp8uQ1gfh9ugyKf6Bv3w",
  "key9": "2wbdbzubqXd3DWRxXcxkb3zZVkERjunqZ9mXhsGnPPWn8qArAq2NATcb2YF1eiNBAUyX8FwRanQdWZyjyQJBb1Lx",
  "key10": "HuNDK33tEoRLX2Dk6FPgDGyZZk3NNPWPMeWm5g8CRckDHn5n9PzeGCy8hctYqcqFMhkRJ4ENpyb8ovK3SqJptmd",
  "key11": "5CRZPbU5kCA4j6fuLB5VZnBYZPEnqrmCZurhGLgTbVBiJ9JmHQ3Vfd4UB8Rvppu4vksKAp2GnDf9xV8JkBboY2Pp",
  "key12": "rn3hoNDmjMNr2bHb3EiPoS7vmqDn6bpqmwtHBLyRfEMEk1UdQGssqhiaPCX6MQtubCTevfSoSUf65waRguEKb3s",
  "key13": "5Ds25FP4y8o2hSZVDfNbdjvhcB22YXjdvAekbXGufZ4fHzxNseq6HEaK3cf6HqLFryyg5nUTpVTWUQsgtmjVAkgv",
  "key14": "5a9xGoafB9xVZJmn2a2ASD79zGnA9HroEKy3wABjhtRhk1F81UxB9d5dzgXxUMmUHYHi7PMATj6kH8oNd26aEhqK",
  "key15": "4tYCX38GufofM759rZmziHpkcKuhYdpqobaXH8zGPUZQCxrYdxrnaN1AMzhwNziccXPotNGVhKqvW3mLpkBC2cbu",
  "key16": "3VzpwgRSFiygxZezFFR1BCQFSpYkQsEdgyhfDMVH4f2hjuEF3S6C8qJt3CEz4s2Q2oprkP65dyYY5cNEBShvdPug",
  "key17": "4XYQEkhMTLVPPJAmgPb5sLpNhzAyLMwFzeBgXuTbaQRDWkNffFNPtnZAUf5dvuyMXTSKzAL31Rkdpqdhi4L3ccVM",
  "key18": "37xXg4q2JBBn67JPHTrctgQtBSJeihMBE3GabwqqGJYf2pXHij42byZcTAJRWEp8R5ZgU1ZJ8tazQ9F1vh8z9aMC",
  "key19": "4HPBnDnpmVYuRuaadJRCsQ6QvvTTsmNrvyCNzwzcEbWhg3uh1vJtDP8MVY1MvApP2P7GtDjV5AdV8PEr31jZcW1r",
  "key20": "46gDgHVmH4vEkcTiT5pArsBLo2AjyfVw2JtYzfCupF3nTrHKcL7MA8exLhBpUgMNJmsWDnAWnAZUhmHELLy9PBpn",
  "key21": "64SjUqq5Evy4w4i79HLdsSewvE7Qhtb8uHgMJd9nvPnE2iEZ6W4x8sC3x22WHGwnJVsQ2Zu85wSt7xaM1nSnXu45",
  "key22": "2uE4pM1DR5JHnmAxnW69URWuHLTyAayWWnaxAVJDBjGnrgfb1CUGdwXJxqNA3VreVjHJtmQKgG9hWjamb1Ki4Z8A",
  "key23": "X5t6TNV7cCXqkabLaDvisidGENDpUdC5gUSVWooZKt6MichR21TD7feS9ZvApTm4YXDhG9JErA4fieSSXXrZawb",
  "key24": "3s2ZoC2ZSsacXMADCGNMhHakVdua97oYjkRDmtK7uWeAXaBnFHZeszsXBzGqzr2z2VteJgeb7RRKrDLGYMmiCoCm",
  "key25": "uGViBZ94CjFfQq5nPTP2rqd2HaCdyQMNvdxj8y7SUPM8UKT3HFEvSMYQrjH4UfDZzL8g7tr8beRGccJkcwi5EXJ",
  "key26": "p6iASzarHW3HwWcw5qZL4Gd691vW7bnX548bvwKSJBfBjDHqkTALS3KiSK8mbYvHy4MNPpqFyfzXSvDW6vdAURr",
  "key27": "4duqRcDWn3K5S2LzcixhJ14JmT4s8CXYXEwje94Lw2F6pW1yqByXzN7yd16L6dkvuhFJ4hKXsaxxXEQGYoKHmTrL",
  "key28": "59xwwLTeaPYTe2uRtX91qdwKm5VFSn4c8JqkQZjqN6bUNEK3DahJgYvtrGCXLpRyh7YZyjjtH6dUFNC48GYJRvcf",
  "key29": "5y2KbsMY8YXR9BH2ybJxFePN54NNJgdai2Ns6tV3U2ACW4QjYDKmwRTLr7qViMEXTzuVsGC91HyrnQZzz1jn9wxp",
  "key30": "57ncz98ZAZUkEa9bEvVYZrZzf7WZznGZtxZHcgqoYbFnG36MEGz9Fism4JDm4xXpLKwvfjxoWgWx3vZHfM8wT68p",
  "key31": "31P3zv5sXEyrvadXYexemUTbrCFtScuKP3LxzoZbzqBpwA1QyUKNyrs2EpU3BdGioZTpA929CchhQ6gmJusc5DSA",
  "key32": "5wZ3e4u54ivQPYDvtyGKfohkoaGczozrnUHwDQUaPMfsq9FRrwMvMSNKJpznZwAWJcRffRCsL84VEVe2GgVC8xya",
  "key33": "AEZkUEn8d4t5buEYD9Lwzh4GrTrWzXYh6BzSmXbRuP6Bo1cpLX7CdSKbPUuPcJk6qT4h8eyxjk6puV8PtDas75f",
  "key34": "3WVZeLmi1TsMk96UcX1aoJDY75RZa8PtjZv6BttC1E46fYVYow3NbRREB6UB4tmLWxP6XpfY3MNUCB14xRhwbskc",
  "key35": "51qoDoohMjR4Yv7Y9omHWmWpwNYuQABV3JCjoxQeXq6Jj2zkMj25PPxqL3UJDJaTErpPBUeAVGNBdYTsJogG5gty",
  "key36": "5BCvhrMuPjLKTGWAstsnE5NoxChLbxgwMGkt6ZM6TT52BLonijnJJYMHpSkqwqYscmzZJ6NqDFzJuFRm9oS88pAi",
  "key37": "61tRPDvC155AYFfLYVqv2AWcekmeXkf82vm67rPZ6fmqZR2LvCP3x5LFRRjTETvxWwPgv4WjT6AEWKebyUxUAhg2",
  "key38": "2zBEgy32GG6cCWZvn2svtXCBSWZdgDWoV1kGnrqBJiMVTKogFyzf4fGFH4jFGQg2yKHR32KE4g9ixXnAhRR1rzv7",
  "key39": "SyaywZcdm2AKLDTGLqRPapj477ZRjZEgwX9AJqSnde4eMQZU86ZUnYCj2J5mVXHF3hnvRhSeJTKLCDbZiy2hVdf"
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
