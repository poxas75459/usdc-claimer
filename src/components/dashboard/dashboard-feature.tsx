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
    "3jTPRyBAJ6uiovqTmrQF13a4eXadFgjzw3W4T3rmbfGcvxKiVNBocvo2EsRnFEmqj4eRVvsrT769mkkPvvYS3Q7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D9PJUHqzde2MxGUfCcBxxgsiZ8fpPkgoxD8MtAVsyfwiE1nb4RWQH6juLXF3Gt8Av2XQXm9AxeNpieChbcgqQKX",
  "key1": "5NpJbVUveSwN2jJvz7TZYQz1hJCb9AJvGziQkgVgBtfyv3bZKTrCRxtUbRAovrjZiY5mfzxfoCH7GbckK6yNEBWf",
  "key2": "5r6nxanpiEoQH2gytPC88zDh3RcoqS4bp5vav8TvLrGA963gjBPfLUK44TbewdQ6YE5fe5SAyLAgM4m9EtzBsUF2",
  "key3": "2BWWanJ1SkhXJm95UCwNfvy83yoiZqZfJp5yTcPtdRs1L57kK4PJVEBCP9JS3ukEPm6pmysi6uaL1ZkiccoSBvXD",
  "key4": "5n2264wrZ85u2GgJpqNUeWSh7tkwACbtKPgfsf8WGJozupqf4P5R6MQkfYCtEL7HGa6VmxDdoMfRQLmS8cSn1vG4",
  "key5": "5LFhcQA7DML2tAbXzUdDKZGFSynq8BPTMTkKbQErPMkz417f3pmyyEQM9Mcq2U7UKFMe6WYGhZvLtruFsajzEtiz",
  "key6": "57LRPf5DQpBNysyaKJpwYbGrmJTwoJb1qHqh8VUTQTSYtCKNegqR1Kb1TVwtQUAJHbqxVxD9P93rUd2NFLEZ9djs",
  "key7": "2kPF3tYr4oRgtKBuJBbkgdDApLQhYV5mAgBsA3pQ8ArQaCNrJiWzJ1XedkEeWP9HVRB2YUfFBaVssqdWpE6rcw4M",
  "key8": "466rmNhLUauQTinZYYQYrdw7siMwT4KS9Q4zcsUe5ZWcXY572FZYxcKS9Xvnmp6kj3Z9p5EDoJ8TzMokzkHPbsVR",
  "key9": "3KaGC6YwAsUNvybEmsoLTo5UAtknwZ1Y1a1UGdKdchRufaFziqcukBGzveDeJaz5SqAqKHwWn69ceGbYrMsCvfs7",
  "key10": "3nmrfBzicnsMkMYk4n2XAQCp2TaFQPoufJzRgRaQb2puB6KxxXpGB9pWc7KQRQYjH8JUKyXaSCznHEejP7SXYSNv",
  "key11": "4hDv3ZhUacZkGH66sbd2rQbQj2jFiD9g52SNK2rPtKD8JJpuYjNGWRDtRnqfdmMuiodxafLNHC9w8mZhsubXMw6T",
  "key12": "5fHtiRf5zPkDHxLZgutRqFJwCrXU99zAbAS2ZE7GmcDkoe1APw3QPtvppcyyDJq4KGe5CGu7nHEayv34Go8mPGvh",
  "key13": "37kpKzhwkqdYnz2PNZJ9RMbTpSTdUnS4DkHzKGrjF29WP1C1Qcr2pG8MzG2dJUMy6gcDQ7sxoZtYYqLUoAU4uUzb",
  "key14": "3aRNvU8U5P78BZPrcyyGdjmX5FBDHwNDA7CXkxz4XsmN3cjV8WzhWcf1tbWkSkaAzhmNwn6AHdxYkkUYAqwM4H6K",
  "key15": "3D5spdZmAAihHTQ47t2pk6qtmEd4WQ9BgrfB9t3pRkVsZq8PXeVmnsMj5cDThXahunx6XxKpN39PRndHgGtAxiT3",
  "key16": "5A5awRAvs9zZFtUNCoeFga4AHAqXwMTgJsRkagABoHxLajLESdmft4Cs3L96oHHmmRxGPoeQUT42hutR8aNxt6jy",
  "key17": "2WoDFbauFMniuDka641npJDbY5eaADuGsCwJTce6TLy2QNJWtyfFhnKHM8Kj6XoThCowoaXmrGQwGR52d8mrxzoW",
  "key18": "BGYrvA5Eyznej9fJ1oDMUHSYAD2ARu3rU23XAHhRGVXezoJcw1eEM7oVHHTxMVhte9DJJG2LT9bo8zuvxK8FTAA",
  "key19": "2zMJqpsNW7bbL7RBLaTQXGpyoNcig3PKfVdv7MUZQTqHibgCjmdFbhwDDa2AAseBqCHyAFCE4dEWr1Yo8R4AZC9r",
  "key20": "582r3jmQdQ2cgxw5yqa54PD9uxTdbEs1J4izpTMYkKE83DTbBFK2XvnoV7TqFahd43DdzY5XSaFo3JoQZTb1Sg7t",
  "key21": "4NG5YG4EU7S3Ge3AjgkmJQndDeDeEkwg4guNgZHA11RxhmU2wquvKSNENSN6AjMJ21jy3RW3bfHo3AZykv4SvHNS",
  "key22": "4i7sfQiAaQF9ypF3TGpszMPKRQHiKkrXWQ8VWt7wCSDa33Uq3NmWZWzA4y5D461vhdXKWrK2Bt8HbZjFdiz8HP6D",
  "key23": "2qSu3RoCCSobfRGacFqaRRMnajtum7ACi5tboq3cE1YWRYKuJ5VWD3ZcxTBW9R1JasEhzGQveqqHBxqKxf7148CY",
  "key24": "5bLq4TRbCPvgnBHearGz2VXic9eJnJwxjdDuL9cGWDbapPAPpLbyXXitHfoK3PgsqCAq8JcBWxZhGvHuXk5v3yqK",
  "key25": "2fzNgu1UFaM7KijLuyuEJU8gnmkytnyTgaxcNoR9emq6dikTampZfdrqLvH8E9girX4JWQnepmf42szzU4djrVBX",
  "key26": "3ZUw8KGR8X2V3u9hYKR8r15MzdRrTc9iV3S1bGDsorGzKcGKp7Bf7h1NLLoxkNdkpCLPrccUrkiMXuQKW9UFSHH5",
  "key27": "4bHudZPVj3KozDn18rwhC2sjxBtQ9ZfCRNxjpVeiPABuKch1v56b1uzbhaJ2zZHjsrkaErvosiZTNUyUJM8hbHnk",
  "key28": "5PLdWm7Yn3MeDoS9DtxJz4x7xZjYeYUwRz5qtaqBT4zPi2xz7orL424WD84vS4yvaJRtFpNh4ipxCKWqLhoNcA2A",
  "key29": "2wdxr58oBWiumxbJN1anJP2pgPCQvszJarpG7xaEWwMdx3H7t1tKBbMfQAPXB5ydy7sH5Y62xc6dEKFgLYjTAXkG",
  "key30": "kojou5FrCf9xj5nU9neXvSAhqbRG4z47CVNJmuVtnxEYcAxg5rJFbQyjsvFkQyGf2iCqWV1PQasyktGAgPK7S3V",
  "key31": "599FwdxTd99XVybwFAowC4ttE3YPWubsEz2aC29oJV95kSi2S7TCPND5dpnFsTep6tmJjQEzWExVGEXb4HfyQfSi",
  "key32": "3VFSiEwjySH2CYwviCSbkye7hEZjfLgipw6UudMzb8aJXGYaT3VaiL32XuSJ1LQBpgEtkYJwXtEpS9QZoWZXns4V",
  "key33": "4DdoTH6TagKDY6cLoK4xiMJmVa8N6RG8n8sobubpNMNW2WJKhZRR4ypXpzCWZPemE2o8R4C6aBdgxNDTFECgaNpB",
  "key34": "6egnoHnGGXyRkSof21FNDZuURx8Z3rAmjwGcjMWTXdZfYXR4nz5AGVpjofbefdfHMrpnWPbfhzB16wigp4U5Ykz",
  "key35": "BVt2xXvaXdwvGY9GU2zG2HpQ3c21wBXDfaTLPuFKGW6HySgeXsM3tupxmzbmfmuzmBGT3mqueg36ajzFJbs7iGQ",
  "key36": "4mu56qVTMTTE36LCsD2wvyJ3Pcgw92uMStfYKj3EeKJv3nmgnasodVDwJUzre1Y8avZ4dqvK7pueK1Yq3fcomY7H",
  "key37": "5LVnVZUjiNViCo4jFh7u9j671orCnnKV8sRXDSZGB6uhzBt9H22w6yYKs1E9ufM2UnyFutwqBbnemMTadADWTsG",
  "key38": "4Lst8zWzEtdJTc2bfQEVgYZj1jVjXxWU4K4pknoRSBMLZqVq1ZYNiec7dk4Byg4KQForR9wTghbZjZVBy4McQDpD",
  "key39": "4hbYAnpWLuJ1LAJ43tzLwoDS3gXYAGAeijYjT7GV6Y5KhU2coqLrWpzZjn2C9ejDL68CgDvsivnWtDdRMtVHvNMF",
  "key40": "2mE2NacDsFSvcVifYSYNJCJjcLTcBY2H3KuUsDGzBsXYPjvFghxJdLmXwHS872WeebAWs1qyx3W4KVJ3aPPqHhnY",
  "key41": "43e6NBmVbVc5EVUCVzir48AQF9RpaDxyC8ybjLMFpg1UpqQPowL3ZrWqw8EYuKhzgaYBKqqc3PXFjkG8djKikU7B",
  "key42": "45A9k67jTpUuajfm5LWAjzgzvUsvWBFNiepG4gXkHwRZSg1Joq1UMAd27T8NcsiA34Mthj4Y45w3QNL9Qrd8ZdZy",
  "key43": "5JYJ7v1d9irZcppZZyVz1ZhthqdQ4P8RAWnWqmvEciVBcsteCEoB7bW5KtCNeb4jUjnDfnAgpuZhwzazsXBF7fbm",
  "key44": "HYXbkoQ5h1VzPAEF74E1J4ZzP4cDZLEAtonhF64zqtKCqrDF7vPTzioA5aqNRZH3iRk72VoXiPpv5DV2uTWDQwh"
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
