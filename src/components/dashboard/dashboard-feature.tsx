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
    "4NkU5MqEv9th2rxS25mofvn9h3JbBHuNfWx6BrP26b6R33caH5nVTUgYRdZcM4PTDW22gpweayNecT4KzBLgDt83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iEUvULk3LP1DHbPdLcys5RfLGW2zMcgUhFPqgjPaaGTdDotL8rfWjwuWtifmtrQEGhzqj7UZWsz3M5RJfAcHU4F",
  "key1": "44cyb5zQ7LZcFN7MXKZT5ZFHguiQZwbg1fdvXtiTn7dcJ44nUCHMePuttjTvp9WCka5krpjqAnYKzDD1VCTPKHKN",
  "key2": "2R9grT51E7SGhe5A8bMSGmw42K56WPZxZbzFHkoLCt7jHwoSTxkKh8cLmWENN2aRK5s6NnYXmUMWLCJEZEYfarLf",
  "key3": "3JQA79PoEngV5RRWKBYPrJ7txw6ekK45vkc6hCqMCUvs9LpodzUt6aeQ4AjvtERokTV7fYKtfKjir5fcuJvjYBc8",
  "key4": "24yXxqwke8kTeBjtdQKTya1md1qfoCMUeFNhEjPSN1rcwKUwHYL9zMA6ULb5EqCqo1RvMTof5xAMSkwo5HrWqyUr",
  "key5": "4Zj7ZnejHab1X4CxomXgRzvpbMQRXNLogLg1HFNEkr1sqrRbV6jDyFZWNhRB6o5Afjt5FxczDunS78cYw6JMsu6g",
  "key6": "5FrbC1ZTR8NrNovSTiyBx153xBTt8A2S8QGxCy9s2ymbHsWxH9fDrZcg1DHxyjP5aegieUzRzmePeGM25xyUhZ5D",
  "key7": "5MCMVEZcL4TSc5yXAGLokCvnTKDjwrL86mSzX78owV5RBGjBCGNZT9B98hgyvLwnXiLiEkyatr5mKhijjncjcyz3",
  "key8": "2yHyrwNaab6F32PHEagWJHNBPBgg9H7sDfCHuU9xfYFh5GmyNEyRAng6opGtEKor3xEFu1Ex1wpLWfA4s4xCUsyR",
  "key9": "3x3gAQeCbY4mCxqrqL4rfFbNQRQQFTUWgxoHiFEoGCXTX85pLMwQzES2UcGi8uwUtfu1NuzyWYJi88NLxxnEvEyo",
  "key10": "5tF3yAAKKs24iXfJF3ff55pbEQ1sRTTdyxwXtGNvEgyFwDn3VV765c2U6GJPWeW4ByjS2fxGDMDb2ZoxTvDkD2XG",
  "key11": "5EQRpFAa6PgnYDLSb1SuWAwik7fCwcFdtYZXZ6Gjau65vSNTsMkWqDgFcRGBrpDMvEsCvTd5cMbaQp6ZEmJTSSKj",
  "key12": "61SQ5A1msuupW7N2zSC4dgpZ6mEKkP4V7Ba6nTzGu2cPuNG1xhR3CpiMtg9XGUJmWY2JsJ94SmXucMPCjeyAcDXr",
  "key13": "59YBQDnYKtFkgBxqx1EgS6UVhLm4RHomUgrthn97CDqzTCMQjzS8wEf9UxRwbkCLaXTBoHcNHkiwSwFJWBpPiEbG",
  "key14": "uWGt4jopC4qxyiyCi8XDzdhX7J2exKCZWUedbAWsbUjqMeySeRZ4K4rRTZTXBGzBpkwbnKEnjYjFJX8LVRuQK2C",
  "key15": "5GVCq3VaZBiwAH6ugJ3R6h4RDUrpmUkv83jBog3xppx1kCUWCmpnbKuzgucAMdcorLQXv4D42Vy9SfUCfA2Q8oJU",
  "key16": "4G1gG9dLXZdYxs3qvcVhvf62uSiCihUjr5QPA23JRG9FeawHarAjo9PLrnCPSzAVBGhqB9ASQDn3BPLR4DiAp4Nm",
  "key17": "3AGiiWpLgSVS55otAfDVQdmRyWn2YX5186qzTdh5LSnNcsKYy6o1RjsfjiiVNBs3b9caqQ9fKZSA486oRvTN6Mpy",
  "key18": "4XEXCFhTNMQvUg6PVJcbEguabp4gYu997V4NCfGxUVunWXFPo1gi5sGC1xbKg7Yizy3m3AWjaCyewRZ3dLG9hekF",
  "key19": "C5cN7jSDfrgRggfK658Hv5TerHZ5ytQVb4bVdF8VWNgKiuprHUJ2hKPTNRcx4RjwNMyVzEjh9jTeCfPkiUxQfnB",
  "key20": "5nFemuBwWLeZKijb77x1jtCY6DXYJJGy22f1gnMfawr1rZDzkD4zYncGQFGspeqEEkq1CjJsVkdgjmGGWdrHwFcN",
  "key21": "4xYzZ8B8vwWjqpboWzPebJwejZ2ar4FQze1k3xzQQd967Gi677N8tgKKn31vbU2BzEhbDBpxnkTfQcmy78M5t5U5",
  "key22": "5feNJdVa3zW9AgPGuwCNSTjfZVMMBn2SjgeLDxaBZDgipjD3rWooTo1j1nBhErGsNsYGn1Cc6iKiZjT8Hqzgp4v7",
  "key23": "2fXsSnLBe1qhY5eC6veuBqybMcLtbbm5P6qHjFW8kGuGr93QTUpSZN87cvY3LxniGqNqdKr77zzdRbEesJTLL75Y",
  "key24": "d44f8LAMZ2Hi1h1m9XRHae2kvdoGJYHAyav4Lu9XCqKJ8MkUfEwB97G33WuLdsWGia5CYmfqmdDLNpyMw62ZkkJ",
  "key25": "36ue6i3Het3njCWPWeACVXSpryhpuy5umAS5NNFCi2aT79UPHz9DrSwW9XGLt4WCyn6JbmzW9Se28wQrjUJPyRQf",
  "key26": "43NeNPUJx7qjaY8yvHgYGeRFP93zbPoybBK3Gs3gRcgMgjx31BtMABgfWRTiDwo8G7TiPdzmAoEhbSZHVwfGKJov",
  "key27": "2pjt3AK9F499xB65e36BdGARZ3bHKaQcqeyAwx3BPzBcvgytYPTDWVGoKRbbvAxkTP41BKDBYVaoePkHwwuCfcPT",
  "key28": "5prNQWkN54EDbSHuPbGMUsz7KYmJUC6jrDKRJWtTS7L4yKy9LQiuA5XMCyg9qCDsC8FHza6VnTnLWAjtwCZJPv3x",
  "key29": "3ki5iZRxPNHNNEymYvjJ3FmwXiD4xkPtcWUDnhucDBZCtg3DHB6yZ1cfZuytSZS6H1GNg8G8GpNs7dFP3gn3W5Q9",
  "key30": "54mxMKTW5sy42y9RRhqqVb2qkr1wsr2Ca5bj1VYDHW6zDqdVKY4iJUZhsiq2s8c6hR1QQdZRVe5be9nefNSsDjxu",
  "key31": "5NpKvNkmBabhmoyVLhVZzb3h5zEnycJFYavToAAP4ALmWvNr855dMzPfxnbyzP31kJ2Ki6kBp66xaQN8uYM5fRv5",
  "key32": "2ghJZCWEoXgH15ntYcWd597NTF6s9YyDdFRbiWK33uTC32EHnTCqmEcJUhPjqbo5ZgAeTJZjncKkLjqG6E4WV5Ta",
  "key33": "2DZvoenteXC7QtMozZ5coZkTeJk45BKbNxQEBNs2BZ9dgggVXadEnuDzQ6jzoe7S5v6iheqtoMahaiMQqduQ86LL",
  "key34": "2ZgpcMGSzAJPzF5zBD1Es2b1ZoCSSf6EeFUwT3fe2MxKUvnGEX4UK2LVhZXHqietm457XbMcWgSsjnhJaisF99xk",
  "key35": "22CFRZuZUJvzP6gW4uMuMQmvKTneWvzrvrLV1xnbTzyjPiXSsuM5XeETLg7swbZbLAahWz2EvTjmszVfYR5HXna4",
  "key36": "3XwrYGsrCFQq4bycsUEk5MWfSgRA5zbFQ6P5y4JU1qQ9uKpHHWaAThdqxY1fo9xLXi7HDxhzFYYuJxy1MV7KVmcL",
  "key37": "3rSnGk1nv4JcX92iVFwK4E6y1iFP4qo9k4kJukYZbK5qpYTLiPybvcefJPr47xEX8d9BZa5S3m8MsDfqJ8aDLNv2",
  "key38": "63vT7BHTQzfpoLnnBeKUKaAYn4ShgHe7KDhA1SZRzufdKsp3D2Mx4iRW3J3rTbfyBXXcKmBiMmfwev2V4fruQDEG"
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
