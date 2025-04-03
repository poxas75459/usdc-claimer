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
    "4xBfCf2KLnGPCtfT85U1kaDHaWmk62QzLA2Ea6FmT4Np4a4MRRj7GkxT7FGotQnef1Q9cApQmaYL9BX9AXK2PRiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nNgpuBmftmM6t18x4uZz5YD7CYUFZi3jnqVXwZZef7HQi3jB8QkAAhz731mXM6CWPZJ3GLtWLveGReeHNN4wJRE",
  "key1": "5iHqnjVERVUqP4acWcmBvHix8iMbcYuFTY3tYf9axMj5yVq7XaPDEZaKHNcdcX3tvkLHaN1RTEL3tehUGRihg5nM",
  "key2": "5GWhfvgVkF29Rh4nj1754nVJAmWGn29dWGsLdMu6nZVAFZNDu4i19b3oT3GWLTgYydmu71HmpjJRVV7wPs7361Xn",
  "key3": "4PEQQZkMVqBqhKcosRzo8curLkDm3moqgoCoHJYLg9xTGyNd97Z9ZGqk8BoK7quiSBx41Jtj5CBvGEEq6kzXzuHK",
  "key4": "3AabfWYCKz9SfGSNpDvDQnU5h4facY52CBA9SV5Z1AvugRieY54KcFeXrSkBkG659Li5ffktCSvg1bVAoLBWW8Z2",
  "key5": "3PJZfDZq5zR7NsnLxYHAddFPVkqpbt3yGpefjoB8eD1QAmogoXSe3jBofoXyZ5U79WN8zfVw7eJFEVji3U3LsVw2",
  "key6": "2dz7cAmuqbggQR73GkojmFJESoBurU4oQUYYhq5k9XjVLHB31wad3SqjwuKysrA3YaVknRd1QH1cPn69j3fVACdk",
  "key7": "5Z1stJzMPRVvScZHnWfVwDtVCM82pQpKwHpnY2QBywxiLEzsnrvCCPhWgRmk55yao43Lg3Rmq2rgV1MH73SPmCSA",
  "key8": "3u9ewUdUC73EsvmD6McBktTDufkM5GnXrnoq9XMCHufzezqnAEtnw7cT78K7iTHtgt1dLmiEeoY6FS8hvoHy5dvy",
  "key9": "31QbMwGyP3VpJFbXQb9Hk2JqsZTop2BZ5y1i3sYK12558rEzGh1znkr11e3AW4oQzYyFmVphSiSaXAAcsXqovPAx",
  "key10": "5AQweQxZE8bahupVFKrWQayM7rhiZ5DxnGqtJBcBz4jJ7QEAP5NDx3K8sVTxuepptWRg8fUqMEFqxL12rmJRFm7p",
  "key11": "2wP8Cdp35nwVRxfX3K98xSgCR7dvB9fHKuJX72Ef7mzsYWFvkURsn16HsKgK34cror1S3ccmgPVHdAZWUnBYT1f3",
  "key12": "637sJTcMmZVgaCRDbNuj8mHeyndeNjugai26yHdT75Cord4JKGdViCP2fxaU3q5hYq9LYSD6gdHWesXF7GzBTNUd",
  "key13": "ZaP3vd4qxxwfb7ft9UU73QuWs8kfDicvi1P2SmQxvp7MHDb1rXgvmyNmzeXjfZiPUzV7sBboopc8pBJJ57VgNFQ",
  "key14": "4egML7ZCc8r65E1q1eCbafNne9oNv4hK3gxkyPz8QHoUKcE1QRcdcVU78HnwMKZddmZT3xctuHuLxwCyqhDKz12P",
  "key15": "62jMeaZSyvKtEZj1EPJwAM4DMXENwopityqHwZ8EhQojrH5vMbo6EKSifw9ok88Jn7BcxL9Jtcw41uTP8eKoGgck",
  "key16": "4HNnSMPqiKuNW57rMcoXpws9JLALYe6Xpppqh6dc7yeiYsWMXS1L4xoiYVo9VoKktGn8yGAfj2GAUSeikW3t9Jij",
  "key17": "1B5DBCD7LtavcEZByNYkn4BrAiinWhMVU5puZPi8qLkVSZvVFEPg6UPBmSjsoUUKwoisQSTirwHDiA6DGPxmFc8",
  "key18": "gzRVQ5D9yiuZ7a8kZS9gQxdgDXe31Lu3TZp19i2QhRMsRtca7JXShWNuMBDfZcbbQGLGj4bRn1LvisgPrUehKYS",
  "key19": "4y3dZhjZok7H2j3P8nX5nHoCa42rfLT2JBNvTZUNNpp1cnH5Zf3JG3L8Ta4jN1GxunFsvzBy9dP8Ucms7LE5MP6z",
  "key20": "5cSN3qCS37QCawXsCBtrikAJ154VM5c1dUsZrsQ4uw5seeCy9n5PADXbiw3Pk1KUepv1sj37RQBy5nJh1tqNGg3Y",
  "key21": "56cspc5wJrhyjKh9jMsg3aPf3rKKFMDBRET79vYYpZRFWo6HMZheJcAYP16Hu6jeooBre8PXycJ1aj1PzjMzT86i",
  "key22": "49eXFiujxxpGRrddGVp2B4y3YFod9Hb2eERZDQzwF31s1ohrLUbFgv1ueHFN92EwSqgQq4UmGb38c2GGcFwouSdh",
  "key23": "3zK2Y5uFDU5ejujx2uR7VyVHo354Ji5xVRgAWJ77yW5dTmFjXcnvCT7Pmk1v9f2msKwiuMJNthH2pGwUWEmNcRr6",
  "key24": "3hkqn9JDa3j6cbQuJVboHD7VgkwagLEBtmMCxtgrLs4TbTryJcPmudXf6eAtDNd6ou7XCDkyZLH4PJV2hvMWkf4P",
  "key25": "5tyYNyTzWhuxba4xB9Zj45gmVdLiSGpCv6wuep57tx6JsdwtnD6scNCVYSxjsz42WKuF7TFGErbSb5kq9qpKWQQA",
  "key26": "UZzAAzHvcNcYuBiJSpQUV2KSYg28NrQevFEDaAgsSiicqpqhBx3ZZnrtB6HQcmY32kj6fUezidqfQ24pDDUTvki",
  "key27": "3FXYDMvf1PyvNgnKrmpb9z2J4XRjPhp2XH9TuMmUvTDzNHQSG9D6U4axSfYiSBcRQcG2awwt5oM5SD8u9eq5eB2Z",
  "key28": "NztBZ64PNDajBFXFM299xQ3CfwM4ankeomb5qMwNyDmt3XzRbLySmWuiyZZN9bL3CrX67yyGqSRaK9wbgHLosar",
  "key29": "oKLDFSmWAE8qdSQfr8bZA4uUt5ZTNK31g9Z1fDgi6a3czW73sP1eegLMsTYwyYs7H3hn3pvuafPQzVUBXETiqbf",
  "key30": "4vxyuTazRsNYw9VAvircSLAkNyRwxUrtY5MCDkvAR9vyNdKmC79k67cX7ae86noXsH9zuQdMSe2fn5eqYp6DEMxu",
  "key31": "2rLQ2hmiua6JRc7kWnxGMRmgcmrxBfq2esKWjHMTVeiUFUqQmZ2t1Aaf8JwZtgE929TZwhYbFTTrLB1Kwg2E4BRq",
  "key32": "3eQaaqZRrgTr19TCGF9kikHQaAqhZyJbFJFPhDfk7wfyJZRbNZjZRLqzGqU5KQUJeTnQV6mbWDoZG4GrHkpwdHNo",
  "key33": "4bpg9hHdTj1TqbVkW9MuQfvdSkhhwCPPksFY21YvwcDkmBcurEyj3V3ZJqUeo7Pt9nkEhcZNcJQcvt3dqM4MyXTw",
  "key34": "5CXguhdbEgZkoJLKXYDpCWGFAQwJBCTn9qAK2NQowpdLYAgMByzgzTXoGN7M8TY3CH1MjiNbzSvrwg12fKKAskS5",
  "key35": "3mcevBtnxAx4F2tFoLwHjETJx1j8UVW1KMXCZaExqYei8ExTsKFc6ufhDxsAJkE6kUfkZHs6YRfr1WkdJQFCRy9E",
  "key36": "2xyFHbPRJVzHsrqphWnV9p3sqpL33CLEd37VCSWVJYDWonw51rWy3WLCW8kVNChFd4YL5hYKiBK13d1yixw6GhaM",
  "key37": "5bzHNJMnk33fSFyddrj3oR1EMBbq9oWByVVe8jpZgyzLK1DKUP94RsT6quhJtBv2v8PErteudVXrn5KtWMbU2xSZ",
  "key38": "5TVq4V43bkPuhq5NZW7y9tep3WhtaqxqqSRJYjznnJAKoTA7mfJJ7GcLPWPqB9goVLVn61NecAZERysS6RgWnxVu",
  "key39": "46fpuQpLoKTdoB66pk7hjbFomnHGbPRHh2uu7CWfFYov3fSZmsB7UUsdcX9KjcGBxMZWNzTiT6sWELJHZ3AkZwEw",
  "key40": "5mUpzpZERCjyAv71uSrazrvn8y7L8YmhcbJDsFz4DG837YEjjoJYyJvSfCDk2a9hiERYyrTTHuK38Yzh27s9kZwX",
  "key41": "3bbBSQFtzovQQxwJbRvFLuMd2Km9JPvHdMCCegAfpY7m8X85XtkdKBVXNTwT7kDtxrc7zdmoJcvYVQTjz7NEh2ff",
  "key42": "2EEBxtDgvL5ui2eSiGriU7BHXY1i1AXDC6pxPkoqVVK61ep2DEF2uKs9hfGKkrXfoiFxeMtgv9jYBYNDRD3Aa9J4",
  "key43": "3zdrw36FzFNHY9M3nE5ZvZw7GgfafPnFxz4QD392zdv5QEGusdMbPSneSXURKEjaH7H5rUdYGqajUcvs2Rdn5EhJ",
  "key44": "4KFMZ6jJHWzNV2sW3TK27znrbPBKirSAsq7Byu4sWMVo4gPfx6wum5dd2zQjuMVfrG6wCT9N6mvNPVe8JLn3piyp",
  "key45": "5h1Kud68snyuzBC7gU9aL4NMqpx6xTaCcvYPsbS4etKUBwMyZ5ZcEZExrj8iEbdcoCgF5M7T6L8MxHm5uU6DEDvY",
  "key46": "5JE2TsyJVCqWn55j31ugjHtxHpL8eapNeA3oaRMBGJyguQ6uYp3Gs75d8v3qjjNPviHViMvABGUY5oBnZmfqyd9w"
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
