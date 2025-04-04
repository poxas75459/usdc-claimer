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
    "572hVMEYdbStuALoEmGFyuHm8sdcyiuZmuH9abJMFEj8uN7CaZKugyxeY8TTXmJaVFL1yNDdJZcHmrdPNYUDMuPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZWsnp4uVfPGBNjrezcUqfQGC1MQUewKv8EFHsbkSLxrN8wb1ufuUbqbF5MQn6QAogXu8QBVbB3xPLSbq2HkrF1o",
  "key1": "2GG3sBegTCriryi7EM6R8bzp782msbp1EfVSjUuv29mc4Y2hmTfRuYurvnTQpBnsxJUm5VzZVkkf5B9ASZdsdjSy",
  "key2": "5msCYq3Jg94DFRLbtnygCtsEPcY6qCHzyLZbQ3EaKkKuqQ11px23MKXXxE1yx8n1V6FVD8ipTRhdpSnsHL543Dmo",
  "key3": "2dJgMTiRdGSWDE7smYGizkZ453rRUb5xQmzYRTTdf6Q3hAg3gjdw8RU92ZpnChKjYogM49wwDHbSQZLjucfwG1fH",
  "key4": "4uXXB7SBXMVag7dFVfFXB3UUSFgZmDmBMpHxYLvPaeKu1Q51sTQcLxW9PhF6UtMnW5qkyxpeuLUndz4wG7aJYGsP",
  "key5": "vgzf9gEAA7STmYzhCKmYgYM9qUZeGtdmGzKL2chK5Foa9m3q9FBxft268tEtZvoJb46JMck2QB251K1Ax5Ww3fd",
  "key6": "441mNF53NTQ5B2TVNtB2fVAYRWaxBa9idPbSXPnsJTpr7c5agyoo1ZuQz1BBc8Y7naF4q29736xxwS2aPvr8CCTN",
  "key7": "3hShBuN9YL5MLUvnc4T8PP1FsLFN9E7VjP63ASWZNHK8CAMhJXA4yhQoYHcGbtCZmz98iDPj1jkBH31vXSSSjnM4",
  "key8": "384544WQsrLvJKr2DSqpwrLydGQn3mPA2xYz62VpKuzQCSYgHvKh4xSHDc44Ts4yPCYw1RsyTnd6Q1QWBLZXJrFL",
  "key9": "5nDJWFEwHcS9ETZmXZHBJXWBKJvpjsFtFjG4a39e7ajs2sXwokMMdueu2xHEce2gP5M2D7Zcv7rPzTmLTJdMzw4g",
  "key10": "2TK1JmSWpKeFHRNG68yB3T4sXdHdgXqP1nmfiVgmS6iGrK7KRTz2a2LRsSNx1MyrNC8M2vPjNzxor2mLCQja6P2f",
  "key11": "2vJnRLKDBA7FP7QsJ2iAdFZQzHcwj9aFCqZyDJBx2B41mBdTq8LTQJqT2Hdf4E8BCkR4C8o78Hxprh46Zy1YGi7Q",
  "key12": "MxBUEgkgUxUSyx9LEQ5EvMLJRKujPDrZLjAGHgwctoTytZcDEZyhbTpacLy9qRpS3goU7GY61yUcFPXBoRq2Jy5",
  "key13": "2QVBQGTNA96soHSno9KnFLSnRnL6chrViHVJ97mNvKgkjzFQkth2vhwKmJnmLAevDw8urbXUx3d24pgMppbeHrJ6",
  "key14": "4bdHaZ93ZFB84LWhgyZBCTjYXabXruskc55DHB4ij6Ls1928qvgwzF8drpkhAt9vToYZ9phgq7zoeDUYK4GsrTx4",
  "key15": "5Sz2w2QwBwmBEEPzWzKrE7hQY5Dsyo4EwDpZnTT9S7ED1f4ougvUteeTqDXfBtsSFGUftBRhd2uEw1gcpNmXCLkP",
  "key16": "x2dJvMgb1TXeXuZh7AVYjU4pQaN8meYPvGY9sqwa1jKqYxSVEq76oV7Ad9G3wxC5P1Wxt3YaLSHDX4vC6wqNwYt",
  "key17": "2Qrhv8PosThTYLtDeGufFeS8wzWn1zycisWu383PeW39jnU8bU6FTnFavu73wAGf1p6c4iTWbNYwpDEbCCx6eyQ2",
  "key18": "3eJAhZahM1HVvpZz6uVizLNqMYsAPv8mmynmytGxh64M9S7bBY6NAWRKrxdVsB7pVBG1NtaRJ1kVZ8JrsJ5h5NAj",
  "key19": "2ozEsU7UfLDg8eQEEWwrMrfN4dUVRDAZEQpA6wEfEng2FsRzYE8iuEBiKnN7MCH3Qimfn8vd1akT5vQfj3oDt375",
  "key20": "3KonUtTjGLBQvovzpX1JkgPRNVB1jhyZJa6Ws5aFSDKMJJ7UvDdS3iMNqjb4FQiFLnk3rWxxHtUJcPUJ3LHhutSs",
  "key21": "2yqPQk7Jmxiq8KFu99zimfnqE3w3BR4vxXd3qYqqKRw3goxEDEDwZQcoaABcgXb5MdBg8qmMpLXddFpPbiM4GMF4",
  "key22": "2CaNk5wcW7z7PBGRE1XuXEWH5Xid9CXtxS49NrPfMJVnhX2aZUs7FgEJFLeEC1EgwkzAPvWRCtCQixwg6K7pfNLN",
  "key23": "RKwHf2uJbrEeiBAq31rBPHPDq1UeqwiCF9aydKUg9jhwDeYNBmuVA5r8oPQNxMxv3iykGi1x4NFY6UTkfAiWJCm",
  "key24": "44ziQgN6b5gFzNJeY1HW3bctXUFunLigxAJpDum4q2kuZufV6nhmPLBfPuFLMa3F3PzgPW6kn2PgYkhMQHLTt4hZ",
  "key25": "5iJqdagjzLkze3XwzRiYaZoCFVHj3Fy4WgmnY4nTjdMN4aYF9zHg67aAMVjfdVpVXUNGtBYk172NoA192BPGSZqP",
  "key26": "ALFho6yH8LaxRpe4YnvHgDsDEek3MwAZYH5ckg887DmPiLdgqT1dacYFRBZDVitqmEjmCnCy9fQjshjAM4aDnfQ",
  "key27": "3gmfxvwmy7VLU5svi9xWshqakBpqPCZAkKQf6BajRNFnB1twyTAsyF43KxneYthasj6To76NBawEiWBTqNcdGofR",
  "key28": "2xxREdRBZy9VfKimANheNnTyPayaJtSdgKSeR53t5hkaDMS5i4Q6YpN6yRQG7Kkt3rSpN4teGJCs9Md2W12WHsp2",
  "key29": "vUjB7hTNrMsxBG2cfbRhPjz9x3Amr1kt9EPRkbpqmZQxFh97t2aMYmiPtqc5YhYcSXdiQraNFA896ZKRrmLgEm2",
  "key30": "2x38StzJzRqMzuLoBzCxpHDBe35MBo6aES9x5kykKLe4dasMxBc2nLJWTsETmjCdVqTNwzaAGqQKD2fdAHiypxHu",
  "key31": "2wukiamMSVFhXCjrmbnxgBHXwKaXSLHSBeqVQJz3vxMUVBRr6BFBKNCFhcmtae7d7hJxY577eBgjG4Lp1EjdvSKr",
  "key32": "2fjCN4zt5g9jryNGmmWDmaYZQyZKTra9KuLtvgC3RGNogfANEc5M3WBTB8SSw9xRzKZRrUGyT8nJ8Y7dToKPvdXM",
  "key33": "QjPPBAfpq9gA9YmdLhfPt4svqjsGuFpALZydHsxoTxHPvfpAkREjTpDn7m6jk6TXhdKw4G5hJUnmAG3iN8Aui4S",
  "key34": "53orqiuBQHH1RZz58S7jZU1QJ9xLRaeiLccxya524atmdGNDjqAcNYNEqDpgzTCsgm4neYCs1aaK3ZhbzRUX1mUw",
  "key35": "4XgF7SckEc6x4pw3MgmtMWYYBBd9qahtkHC95ZhdXDZmNew6KLdSHkd7wnreYQzxh2vqYsKdENQrQnrieK1p3FG8",
  "key36": "2yW7G6o1AfVUF4P7pA9EuSzHsnbqEEZ7eZhj8nCARGEFsTWmYxQMRygZM8eVF7fXB9m23se9f32pU5fcxT5bRnWX",
  "key37": "24wdXYeNKHS1dXRVommJ6ateHHXpX4yVR5yC1pTjuyupQ4PXdqda2tn762g2QnVje5rgsySZ54iCsgHZg1RvRCRA",
  "key38": "3A9EwmroTSNDwtrhhsTctTaSAoxnEp8DU6Nn2wrSpqPsxzaFUFDPbkiQd4EGoQNanHehNxnT2rQypYnYdj633dX5",
  "key39": "39SRDdHAi83vBsd1HFEJ5VTLw7ouZgwvpbmtw9fTvWEQnmqgZSZAjKRGQ4NB8njSp9E1AsY9ZfEFWGy6KB94H2o",
  "key40": "FoLxQKjyksimeqcdDpHATgPtwYiZCbGrQeRKrjdYuo2dTUgD49GCHB6ZszauhFwwKkuQgKKgc4id3oDygksRtBk",
  "key41": "5eQMHTT7wawoQyFciFkYAD24hJJygsJVqMtDjTs6zGLuXss6ienS9ZivMLSAdJe7vA8thk29h3ss4vgEyq9TRMbK",
  "key42": "3YzKjDZ91PtgQGFkW4Sz58pVdbPcvm1Rh9ypjzytcZGuta5tUmw9er2hXoBxejY1mD7PsiTaJTEU1WEyk6bb6r7U",
  "key43": "sWx5addPEvAuRQg3gwworsFW9KSkWzc1kU2uhgKeV1PQzv8suTUbsmcMQiL57G2mghkukvqLL98FrWGpT9uwWTo",
  "key44": "4ncMZ8FkhmyfnxKLwTv844EPTR4HpojF1SSCjfUFLj2VhDTs6o2mauNT4XGRcYhzrCZVDVPvSuRq2XeJYYDhqotQ",
  "key45": "2gMy63zZBaxUFtmYheR6C6dgKAe7cAPkDVq4dJMAV73jVx7vujo8d7omdRagYsZLhzHhZJcLs7QXLMphULLDorwD",
  "key46": "5R7ES8pZJ7suwCwsJe2ZZ28PcoTQpw4vqr2RRBwTJxgCkmja7HFZijVHXC8QKHv83ZgRorXLv8ttgzC44bgutSTB",
  "key47": "5tfLouf18JZ2rG3quMnv7eGXmrmQXEE2i4ChwGVa6L49KUAmXEi5rdENtgYjYGqEeD2Lyt512QyHDazYSvk9fwqH"
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
