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
    "5C2jxzw8AnnSYmB99sfrZX57xKw8wYyuvBNiazhUJeRBr8gdcuPwXsg8dvdCPQBEsE2BdtqiVM2a6kjU7MKRiNo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gEdYWvZvf8aku56v3s9dbMSRRmt2deZyCdokBEpcD1jRpJQivRaGHF26TF1uNcQk4aiwZJeGJKZsP7cteM9xhz2",
  "key1": "5oVCj3o1YyfvGbCyrjUaA89KHYdbtDrxWZm81HeLePk2iz4sv4TaZrs58xtTFJVQefPtKwXirAMWxvYZBNdfMXx9",
  "key2": "59y2iGoKvzZiD3HxA5VvKrtt5XM9i5J8EKAF64aEZbed4RauiGzNk2RrBw7ownPndgjfah3F5F7MayU6nM1Uej62",
  "key3": "4JgJk7MRo1woamLVFivWVFWbYR6HwEK7GJvoLPw1pbQTb8yN3wa2GwHRQkceFyZBzy5P8mLmQDYwSFArzEKySDSJ",
  "key4": "594gcPQm8azbSGfUxxhxmHuza1UzGGPNKML8SNnzbuFstdHwsMS64Z3C9pJnjvXsneA721ueiwiYL7nV9zuu5jCf",
  "key5": "4U7hKb3oHfmMcnRoDQfjiGHj3xQcEMLYro7azPnfZhXodEWVh4QR9HENmf7pjtNvmAHkxCXXWeLZSxbREDXTbCXK",
  "key6": "4PhjigsUysfDiHa2JyKERu5pL9NPLW5gipvy8TxEpSCibCum5ohGHJRWzMA2BLxAMxbEAM4VpLmbRQiMCi6dNwtX",
  "key7": "NmTbGaiwzG6ixeerCfSR9xZmBgnn1WnJkwkATX8bQuiHLbaDrCaQqJt2mrToiybh94KyQgCwtuVkH9wRS26oKFm",
  "key8": "4gsVXiTCcteFHGkCF5p8WkHDr6XaLW8reajvqEgb8rVewJhCD8RxFHZBZRDmm5oqkuwpz7JYijEgF5uBYAs94VtF",
  "key9": "3j5a9FdFECXRA7YvxokaJNFNW7rch75oUWDeLqQUM6vR9gMzzP5rfXTCMVpsJxUS8gZ9o7AtUz61uM7XGK5n5AGW",
  "key10": "4RUPKDR2RXwHADfuihU8o6rjfp1jdwu8tJncRzxz4sia2ep7buvCrD52x4qWvNGTQ3MebwDXj8prDJbNkYPwuHjn",
  "key11": "3QDCz9uJvrtZ5ZiAd6yAmDTq6uJ5YLp8PqABtdjHkB24hVR92fGCe6eRW7j99u1cWSyE9L2M6KGu3fvtiMkkiXJZ",
  "key12": "4TyWZrhMmrzcpyeD8CNVGVkZfQDaFf87gH6kM7XYVbgSKEJp7VxLNQu57Sh551dcksoPjPp2HvAwfwhP8C1mUiYA",
  "key13": "4SuHR4VC9xk3w5hUG7yCh7hgHgvXjE2ZLPkejXZfP2waGVXhnMKfVC39W3VJScJCb1NHWBA983gcQNfJBbTJap3R",
  "key14": "2HJrbmv5Z2KPwPqsPUuQS4TgBDDQKcPvai9MjzNg1RkAFX173ggBzzjBKYKx2Cs15W3JpVU5Bnyt3ApwTVdWjzH",
  "key15": "2gixWJeCD5yoW7Eb4RqpFFqaZWd9TXZsfMa6FRztD3VWT7VnJNtPsWRCCGPXe6NrkbXjWghZjhGivJ3wcPaxBNST",
  "key16": "3TjXiWksr5u9DGSqvmwJN1v4gVG77538JCaXbXa8B1w7GKiyJqk61EdvTVhLK3z2RTSDNxsJxUi8sXEw1fggdNEd",
  "key17": "3JA9cos8HUi74u6NGdQ1tv8k3pfSQ6tuivxbRVgebg1B1zu7ZrcRLZKMr9A3gv1LtSKdEWqdkpoqUo1K18CFFgpw",
  "key18": "5bRnypL3bNriupWhLt2opcmT3S7xnfFiju43ZbRaS56hSJwN47JNRdcjspztvnpwXMr8ZGud93Vp6rCs27zpo8e",
  "key19": "4Zwd6JNjquf2Xj76jCyp3Q2P9XH6mLzP8RVGNtyBDLQwcANHG1zXAtBf6Jdhkd7pXW3VUb4hj7q5HYcRymEmqZnL",
  "key20": "3xZHA6gzV5bjcZGL1g8QB2W5a36H2szJ4VaS362XZ2nsRJdFjybDhnyfNmSkJ53dkv17a7Pt6TLc2sMcEJi8Q4oB",
  "key21": "2Wska9vq4uf3LgFmmus6sZCfZQRNGbTibgtnAJ69gLQy4baFMyTHt2bV6nC4JXFm2XLWqPw8dM9UD68BL8cZ8TeL",
  "key22": "3wNcFdTBU9q3UKB4KfB5xuSUyx3Uut7AYwiPxRqGxuzxdotVqvtCoFsoGXqw2kRNmfrmBX199ijvRdBb7bQpBWCL",
  "key23": "2KXfTH6YEje9u8wuj16fW49F3CkkJgBXPXTRLmgh3VxsLcbQuSEicHg1FZn5q5eRauofmgee2oeG94DWPF4ECyxo",
  "key24": "2U48rCTKUg5JQsxP1KeFprd49cpEaQ9PhVBdG54B2dGvCVgZcg1ZyeMYtgqhBC7nUAjvY2Pv4WJ76Y8YHnANtcmd",
  "key25": "dLMVgJ9fijUSMfbRENZwsPVZCLSBqmGKYaguwdMPpGpNHG95w6dMDP5mjnJDpqKF3M7hbAoi4oZumsCXws9hXWk",
  "key26": "3kDqT65pcLdFHVADVMrb4Tv3FpFNP6VH6eSDZiNh1JDMXatg5ftD5zYMW1bm4Mcibza1r2JKn9Jz3TuUKgSLFWxh",
  "key27": "3PzzZUuSVK2DfiRjmbBzvDgs9dSejt8Et1iQQVa5FeAPKneYQsGPvxnbJrEspaCHcSJDVseSiz7EohzHjqm1Kvgw",
  "key28": "4BL6tMdc92Heq4Tf5mEgfGELmVgmP7P16t84grZWbKbENVkAua37rSn9qxGTUa8H7bVxbwVHvtkGYBJN6R9w63fv",
  "key29": "5d6nomHgkd3PdtrYnkyWcRdUCinJMf3MUtUCLxcQmrJCHTh3n2jAYSEoKV6wssdCeF6DrxUdxerjhGowHvj4rqsv",
  "key30": "2EJV9TehnQYtNFcZjEGxX7D57JrSD6qdx667YZxMV2RLekPH74m9H8c17BbtgyCTTSYJCrfwCCk7XLBP4SFYezpT",
  "key31": "5By6y6r1THJbQXhiV6kH4KL5VPXc7LpcpEsDZtekjJ6kJ6SLv7MooVxexmhd5R4w7VDQ7VVLWC2SGwZeUqGFE7hZ",
  "key32": "5851gHs5DxX7E76USCiFbgVqZtR9ohxTuwoXKDbDiVgP8Npv8ahEFj82dp8uavuFBR6H9FjU3G9Xz34nTWJ87ot5",
  "key33": "5EQeHf4DJQ5mv8HMj16k9jdkQTW39XSFZz9fATZNYaJ9YhY3dZnnqLXmNF7NJ9UkkG18UjPvJHRvjMkJmWs1dtoB",
  "key34": "4QtP15Hk76ZbCGobDFRF7CrafwcGKdY8q81jFFcDEhNi64gDpM9zpovYzuGvaDjkgvEztcVZYgYCaMKFT6PuLiZ1",
  "key35": "4b97fypPicMAyiFhZbCrpKq2PjqPesczX5D8XNXQCCW7myuHKn7otDxC8WNy9foS3zN21nxHb8Jh6b1VAJfRAaYn",
  "key36": "2paVsUZP7LJQpS4Pa95wmiWUip7VxLayzLJf8DKHnbkwmpxGLCYvpNwmVNTrgfak24n2mEQY7dp8B6i6jQViFVGr",
  "key37": "5Hufpdy5CQfYrdsfSNwX8B1AkYx2KKMn3bThAMTAufFMmiWcYpddq6UzwX7UwRPu5P73gD5PuAHxrMrxNJRFLQr",
  "key38": "1huZrJTcbjNRUEWDNsjh8bp7U49DUjwBNFtquDpPtnDLY33TbNpoWmhBuLDDq8DGrVe4t4QP997mdDEweBFTEGY",
  "key39": "3F1NxExCB1muaBnVrMGcQFf4rWhNeLL7KC9JsUMkqEGBFDESkdao2tpaDnjv542KmUyV6fgewFRxZuntaVn1Hqch",
  "key40": "46VnCpGXHss9mWu5YbxaLGxRPGESbQgfvbBFVAyU5Sjr1PmhPzZGnA2eyky2hE6egjLwxqHU697tgN3hCSQqDBbE",
  "key41": "3LPhEVAvwVzPZEmcsZGUpmDZzGMKvdtNS23V5DybkYqrrJ6kNV3LAX4wJaRZMeVheNQo3Xqr99pB3yhPMFn1igj5",
  "key42": "2u7DCyj7PMs44QePh4rNq2YgAfw8aVwnzZ6ohTQvkFe4TpoW3fu78CMMVZn2fG1wsXFBCh3MENugEDx8YRAzD2bB",
  "key43": "4th2ToRkx27kdPZLN2GuTaP2iYM3ESmdYqtRWFrafqUc39zMssduWHE32oWVdWHvix71iNvk3FABmLr1Wnzgi7Ay",
  "key44": "27rhL2bSgQrHwXqUaaFd68dbYmdaR1iJEohUZkGYu5ys7A2ikpE7nh3P9MJvdXeGRqwKfBjpzP87qaNXJ3d3Mpsp"
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
