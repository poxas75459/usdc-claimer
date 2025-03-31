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
    "44X6L4g3X8NU9MysYFHCfvXoHvCwxC25dRzw2eBpq5aRQwGJEXzVMx5Ki9Pfqo3NHHz6eKitZM44GHybwt6tDmnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ELer7iNAecd8xE6N39ECnwVHFk54KFbjNjVwFJYG1v63wE1rf4CUjG7hhynrRksVotuHXYK1xcSLf2ZzemHPeTy",
  "key1": "2Nmqom5FHUiaURrngxb55puvtoxBpg71maXKuJHv6Cmsxi4GvCDofmLW1KniFcERJguhT2vU5QvTt765kQpZjxwr",
  "key2": "2XNyVP3XSWCc3X6VwdDuaUAX4rqzYgcw8JAAMGHBPXZ3Z1YnApLjziotKUGUCdjTQwhBmHxZfyWioWztMpXnJdNQ",
  "key3": "4sj8DjQmxFGB2oCiFm98XKssGk3gM9f6v1YpxkB87qgYS7m45CVXVG3Yb2gyxnyNksRWscxi8GLRnqy8NogKQ7so",
  "key4": "B4KLYc5SDsUcqkKEaZ5gVKzmUPE9SMa6fAgezDw8RSs9gP7u1Rj6raNdSYoZnr7oxDBdfetKJ2bvakfn58KkQqT",
  "key5": "2jt8DfprBwzCgNPqXeXmN7vYsV5gw5CetiiD84N9SFVmhVGUm3iGFmrpfr6Gu3Pcxe6aCd7VV6YWQ2gkMfX1oz1a",
  "key6": "2KUZL2tc7wv56ki2XtrvnqufpKzLmyL53pvpAD1jmGWpr2ikSF34PAZfRce8wBad5r5s5syNDPhhTBrz5o3EmZFs",
  "key7": "64m7TVmBHNgBNko9enE2631LjLnFfBetS2rYAUvC8oMdcu9f9mD3nYr3UPGuCmAzFWcXvyBacrECHTLe6avPsXuZ",
  "key8": "5shAbUrEEhrxQKJ9fKzHmcJzXnHvixzqrMQSVUxNBNLRLqQkqnXPmxsT5HB2U9kLqx4AEiZwysw5AgUaN5voAiDu",
  "key9": "3atiaKsAu1j2AKGZk9sk13W5pkeEqZAk5jH9ptW1BcqgMyRRANv4we4TSr6odu2iBL12kNMt3dJ5qo4a9aqMdfuR",
  "key10": "3V585Qjsdjnut9YhwZF8gZiTHi8SZyharm8dTriwMNZEokNgaSEmN4CwkmXYvPjmzwxa3Xcq6FyRamDqiZq1sBge",
  "key11": "5eNLoLXG1AQJFNABvtbmmNkJAtzjAudQJs6fYDdzWjVgNsU6Ti4viPTu69Jg71hJnV6EBUKs3cNmLTAcngAYt1FZ",
  "key12": "25G29jFXee1JKCzVdZphBYmt7ZtCkEBHdVFnzCZfY2uq9A1fY4oErGqDsRGc24V1ddz9LMmsNwVyofcdSXWCmV6m",
  "key13": "4vXw921yJkdKgt4CojPcg3Z7GpAM2BzPTChMoAFZnZUYVXL18DbQi24Sf5Fp2RyT3BKT75g3g3xvgR4p6ai4A4BG",
  "key14": "2kzQgRvJ4q4PidnSHv8ADERt3oSShiR3hc99DRPASK7qg1iLTQWLpPFYB4PFLaF1RVjTkfpw8yBbpMJb5QF75NLG",
  "key15": "M4nKu9Zn7W9z8DsY2qdXbcZRcdbjjjDBVC8rZz3aMNXFjNqSMWirVSNWzBn6CR9FHVrt7yJp71BSB1yfB1uUb1Q",
  "key16": "H7Sf4CSNvFaySfu4JS1VbPrymNxLcngMqN23TuDwfcH15Fsa7ZUPxCTzuVJteXTabyGxQhytMLBecrKyVF3juxu",
  "key17": "3nD1L7RvUurZ1sFz2ikAKA1yyscqJmSnU1DqxD1Xgj2mYqvW8PFfDorayJa7MsLREpG5aB9fxzSaevuYpQs3gsit",
  "key18": "3jaRsav3WtgVxG4koqR4U1uE7CmqS96kYUXKFh2NFR7HXwZWcX43aFooXwuYqGcb3RhUDhKq5FKj9hWLMz549FR",
  "key19": "5CdNrrNMwDvDxaw4rPyGGw57Qm7kYK7HpeKf4NqsEugdM9MWZCiEemzSpL9tZAu2ZM5BLNBW29WJonW3Uhhspj9h",
  "key20": "29AnpcV7BuTSY8r31n3rHAxZ3Y8fxff5UdMML1LyGgmmVomfwSTxqxtaudZ1gYwx2SP5ZjXt6fK3ZxAcou1f7fQH",
  "key21": "uvwu7x65oUKRno9KrfnRpqJMJXTZ1d4qpqrmd8apXigbqJmQCCbfEKuGKNnwLBCREgp6k7BBHqbrrEZmXgaaiQM",
  "key22": "5sB4XhGLamZRzrtbYpkArGpZ8FMY7emZ9AhKNsYeHUncLBtNHhfjuRp3ee1ek5etyqt9Ma4BdtZK2xwwufVXyDQs",
  "key23": "3MetuQLZuKo2h7W8sgS4LkxpmyPkbVLprVL6LuvSA1NDpULJDAFoUZHnUC54sQgV5ESzxinzShBQh63uoV6PPPZQ",
  "key24": "4eJX7Ywjs8pBtLGPdGm8uRLxoPoA5uFJ4YGAM6kok2k339oZSdEfaKw31cSuXDxWgUEoMsYyqR6G7n97FuwiVZjF",
  "key25": "3L9xPXZ7BWCFe5iQR7S8ynSfVXVhKB9Vctk2Sx6o1M8gqk2Kqxr8Br8Wf2PA5S7TiRCJkiERTFFwdrpweKAL1yZt",
  "key26": "5DX3mQitCA6dgibRgGocMYd7FoBRyyeFSxHrXAwJ7KMGPeiCQZSpjeby8jYaCW8UUExGEKAf1hBVRQcjarV5oLFm",
  "key27": "5Nw3LbXbgZft3KFrQwVtCegNUhwEBRqkv1jGWB9YTt95TPhX9c48q6Txynvd5ASt1oxgnuL2zHzJWUywNhyL3ueb",
  "key28": "JyALZtzceqbHXCssR3iAMpzPb7PTCF9ZufHrtA3oLrj2S6K8GpLfFw43bZhNKtbM4MHMAnDfWYzfZFdDGUz9ivY",
  "key29": "4x7tg93XSnJZW3H4QUyt1JbZaUte9s3Qoaz1LheoNZuFmbdpaFdezc2kQ39ohdAHRLN3gjx2HrFTaF5WGLG48DB",
  "key30": "4kZxjmPNKRKFh1EU664M43arDwRJ8rHZcve9oLvEKsoVWciEStHB7NyNM3VwRkto9h2xkEkNYz7u9yaqucsux8Gv",
  "key31": "67FyWhM8EwfVJwwLsDHMpjhAbbVhQr8kziV3mASPFPXeGfhF9SNewn4S3KznTcVujhZxshDKf1UzWzrrbYkqiShK",
  "key32": "NSat6je2fC8umgtUBtekQFPWuZ2c3fmXRiDSHLozuecxQn728jFmby1bTvMAgiQHM3ButYMtTtf389fcTPdK7fs",
  "key33": "4GGBnVxduVX7LoJtr62RXthkdgkQkwULtRrY7bRAqjCKLW49ZgMuVJrzWABtseb24r99SLicNb6w1NoViAQkMss3",
  "key34": "3vNn84aLYbWmHksdsxj6BurS72utHkVQnE2JaoMBCNd825B8GwzcfQ6F1VMKR2R7cNKn9i7RyKzax1Wq79AWDy4q",
  "key35": "2rxp2utmDmqcpr4ZVAkKnwAViyrKyS3i5uMjWZd7vhhNhvQprE6xhvMSq4KoRkXrf2vDqeSyJ3mNz6oGNqbDPcqq",
  "key36": "PbbnkmvHtCJTuos9ZReo4GSfUKytYdDoQAG9CQx13Xz98RbnhEprESbmrj3WWtWNv445AndrMXbyVA68SfvUc3x",
  "key37": "5LWsqDNN1xNBkkEcjatqhxmyYW8pVgw7pLyXCgaZWT8nkkFaRYdKtjEWoRNEELa81akvrr9CJLDgPpNBtSFRBkJm",
  "key38": "2Tvbg2ioxJLt4TEj51vuTpphgUeob5sY6JQazb1ghFB11qthEwXKkcR2HVtkC364mFb4pyTMzBobnu4YUkCnTyxR",
  "key39": "4GEv7MfDh9HaVeJzQjaz6rpGnkwJiUFHfrvcunn1fYvzTxBYMm2Kqk1kZkJMf4sHpQTSmu7x9SVeuAr89zRPsMez",
  "key40": "61o9DxWg4HyKzUQdXgG9QdVwnDh1CSjEQUkt2FF6z8sR26ZNSrVPHhJ5oD8J1PE99EkZdbc5ZFvwBd6VjPbazT7z",
  "key41": "2FZ4cNp7bVXPP2UJz4qWKNsKARUCjq4NMa8aYbSn6FqpHk94D57DGLRT3zbZDGdhv3N52G1KDooXkTjAcdEk914N",
  "key42": "51FrUUENxQVqobmxryxSNzthKvPb35vCjyEUGka4GuPwMaETAbfUaSXmNGwNoPBjxWZbeSTpjaEZzaLJTo5UwbSo",
  "key43": "3Db6kJZdGPQ9BeqpckrHZvb58Mnyh8Vzi9FdfVTHkD6Hq9MZqXTevRbTKKhwSuuF8xqKnTm1BN49jbVKAfEUP5zy",
  "key44": "Bp1LT8py4aMd8sqDxXruoySxLBgBFn22hxMaDqMv9gLRXdKjZ5BisMeMD9sycfAyWYez43XJ6P73MYQmbCdtrob",
  "key45": "2uyLFvEXJeP97HtXd2v4rfjFAw9CgunTo4Dky2DDyEjrgxiezhr36KiSuaHj7ESaRVERwHdTZ59PzKGgS1SqWuV3",
  "key46": "5PCeXQYWsv7pmPVLeizjMP1PBovMMCUdA7y3Vsf5sEHQWjVFi57o47AGfCRqwMB6xYqPhYSb8Lt2RsYze9FDowHN",
  "key47": "2pYdzUTYAJkDTsa9ReUEmcvBaobsWihfH5hf5cS3JLz6Kr6CKTYDJ6TnP7tfQAMELSuU1GaY5VWs3WMfwTTU3NbL"
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
