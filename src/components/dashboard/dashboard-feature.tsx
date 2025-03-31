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
    "4d5XfU75JTDwDHpC6Xpshf8ypKposQmx6AVX9DDxUwugGdA5JWZXx2fm6EH9HoiwtiR6mwRNrHWo5dLVG8jGBJsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eKuMcccTH8DicmXzMJGGWSK6tT64NtT4re2rWP1zzba9nbqgo6um7tPrQQZ99WtycTYCi9jYHh34Ww9FHKr2RNw",
  "key1": "qMiLG34QD8bS3BXrYVv3hHYbmsvzu95zqXR8iwptKW83dfmGufth7WTs3pK1oKbecKjbyzgadSckHFdjgSnPsM7",
  "key2": "HQNecrzxedmw5U752WehDdep2R6FC9QU4JpQuXCAyapLMDpkkAiErakmEe7rmrAuVpD1Hqh6EcMtsU9ygfK3aZt",
  "key3": "5w7FSw7u3dX2Po5HidNq55iAXUKuxttUxVmhns4ihPLzBuWsmNuYhYEysBRvHnoSusWbn4Qjcup68ASTBDLPZXw6",
  "key4": "5LEseDMFVi7uacP6bNy3ecMpVK9cFbjsTvtJfSMYeJXs5A1dyWQUwDJUoYFpwUasCJyJ7mX253eqmmhsT8h1Wcpm",
  "key5": "4YAHgwrGRhZuCfkiwaoMPrvAJzEQ38A7YLuSLd6gWyxMpjkou7kni49C2UKCKFDTLk8oJ2jiqdjuGZfdvo3cdx1K",
  "key6": "2pZ2R7tieWd7smBRQTC1zSZ5MkJRPCnFGJoSpWNsqS3r7yw7QXEykYtzXk9XyebFmLdPxmg3aEfhAysuYhcfJEKm",
  "key7": "5cZ5fXojS1AQXeFMGD1SHKa628BGpbZuJVYHgtEFuG6AYqcJNL8hg1bwQf5X7NzzY9C7x8VEHAr22RA4BbAQbTRg",
  "key8": "2JswkUBi9A2F7gbiTh5iFoSqPz1y533szxPJwbFyfmZm2yBonguDdbsnF78PP1BTm2wFbnZiHDYvqNZL8yoQJ6Wc",
  "key9": "3AZgrJtRzGoAmQBTA89paB5WnKvxJHSnJLXVaVp6UyrTaHmrFDAG9rhW2CYyb16nHm65DYBSfXSbvwozB8XcLJJN",
  "key10": "48LkGj9fY8kJG4v54PyUnd3NdDZGnBvS9siD5h62t8fdFNMFenTdRe3QkmMb9jvt46pHcBUpYsRdTMsgArT9ouBT",
  "key11": "4YFhZuETd6jZq6F9wLjG3tt7TBtSVVJ2JrUg6vKe3ZPcv1TmtxKrpqws2qcDT6nWWMgG25GUq2gZuNQDgF5sjq2L",
  "key12": "4UwzqtgrxKSLiwKJWhNvs1YtL2nynHb956bQuBwonSx99wijwBwgh8qWmAgyDWCnru44y11Gae6Lhje7DhqZgQmV",
  "key13": "4aZgUYXZxeN5UjGSJ67DrHkrSu15U5mWrDmUQGegAE5qFt9zxmHAvYhUHX2g4i3AnHaNoFgExiY3mfqkAm9hi3LR",
  "key14": "53494uoMiEVVtaHCXSPyaCJJjFCojS1YmAjx6GWPmjhUQ73o3eEp95V74VfwKnd8vdX3UZehEtthfLQQAmowirrh",
  "key15": "5ZxNMxnJtNowroHNQiGfCW3L5o8D7ckFYeTBHtN7fiSZW2RJVtTVCG3Z8mEAAuW2EqECH8ryw8sNygq6AUb4dH1C",
  "key16": "3GF2tEb3BRBhcav4zuWofZKp35D7vGSNe5zPdFrfXNFPiDWMJ8dWhxKQCeKLYwf1i73GyGXdwc2xQcoYw6PyEyTx",
  "key17": "5g6FpuqRPbX3S29KWwXKU2wMJmwsKdM3sB1KiX7VLJkyJ4RBcBKrDf5e6cMnRgxvm4rzU2XogUY8nDPvh5Q8unt4",
  "key18": "4wWVtv3B2an8CkxUwMphHP4P5p94HurmWEvyfBcWy6o9Z2GhGNu5U9CHoTNaGSsbyHwhAojSBMYGXXeBRa6RQcmz",
  "key19": "2dKKJU1fQHcZmF4JUptJ2S1jDu2Lc9Si6dGU5pma5QXANBdfUptYXekQ9X4csoi6WNqvt8hiMFWRPEp5zT25GRuF",
  "key20": "39JVj6fjZvL1udtfixaavnj9ZHRGwXGLUeP9wsYPu78t6YWPXDaNY9Jx5sRtxH5BfpHqBnrxzARWwCwaKW5Wh6eM",
  "key21": "51cJqdjjhAgsRkUXw3sNxKNR6WaKzQqQcG2Tvnm8D8K2mjhhrxqLJYacTojNwkNx183JidrfVRLXhAfcJfibkSS3",
  "key22": "3dYPfQXyUuCcmcUUv6Xyo22nkKMa9A14D5SyJZk15MQLmK5HEjDHkM7LU8Ccq637iwudJZEToWzd7GovPrEHaMxf",
  "key23": "4J2nrTGVP1h4Uvcyj2Xi7grZSycfx6uBFCYmi6ajfgDjyrkB5sP5mqTdpMRx8SGdK4sGfZGWN53RpYdsLNC7zh5r",
  "key24": "2N6geASnr9XYjHseD4m6mpJ8wAdHcQGyuubJEqcFD7McbCzN59ZWhDt5Q1aSamGU1dRo3BqAUbmdJa4hwndARi3w",
  "key25": "5de4No4jz5FPkGrRuxcA1UaggpC12L5Cz2adWjmk5LxB47bCRnN3UVUM3UwWT6XB7pVtZ5tRDhiqXZAJzsoRhAA1",
  "key26": "5CZ2VTtyqPodxKA5qdgF3du2cf7fqMNvP7hisjbBVZunnBAB3xy6CMh8ZZD9JjocjiE9WHaVnCb2bzqiJN9VGWp8",
  "key27": "2AUH37Puf246QWDQvBLH7K12p3kaLknZYe9dyxcgzs8UtmNFiW6ocByTae6jCxASyoBKA3aDTtnpoo2S7aUButHC",
  "key28": "5uMbLRESMAdtFxb4GWNfZgCGojtR5cGF3GC6Jao8tMowMBSb8sn6EamHR4SQdSQa3vZheZpW5jaswnckhvGZWrSr",
  "key29": "2n7d2DmALXKd4Fpjf3jAxa7fFX33YetFhgcbjBTPprCsE9Kbv6yQZFvykscH5fuWGkAiRNSpeCMEuYvT7tQTF8ba",
  "key30": "5MJ9p9qHw7eKnESHtH8UJRUtuL8tbHzHxhDpMCyDDjJYVzeSvLBXY33rzB1NWdmJJwQam1UoRxpVtwYC2JETAg7C",
  "key31": "2Kbd54oEojovXgN18JEWn4TkLnnJMgyAKbgk28J154sFeRMvfy5c6Ezwiq75aysFZQjw5Bgs34QpWsFf8uWZv6pH",
  "key32": "3xk4RgLrEtCJ5tgdzgXDAXR95WpV34uMTTo4bFbknbvWvc5McrC93WxuzwTHv3ysRRU3w3fHk8G6yc8tVRLafgcn",
  "key33": "4DFHq1FvJ4umV9x632jNw31L68R8neFGy4vGVnie84zd7EneSbq4pGjbbDZnPSPbogsfEnptS5GLtPusip5cAMh6",
  "key34": "3CEUjKNdaEGDM71RwBd2ADM7vyH1uYDrJwZZNhyHPV3mZkknLvTon7AztpojdtQLMdR13WBMxvLR6nDy2vyXwe2U",
  "key35": "5iqLH2jvgZBZvDtiuJLC4vgQqkzWi4tWpGPU5RU4DFBZTNX4JNg5ynSYaiKDvQCZAZvi8zHfFgLWpTdFVNX9MYpn",
  "key36": "6ijv4FD9ke9tT9Yy7QkJXohV9rAYEXE79Y2wWTkPAqati6FP6b5ZLwBw7yQZ8xeJQR7wPPUtYApF514heayXLpS",
  "key37": "434M3L2CwvT9u59qyyyDAoUESLrZWeCCMeg95eNd6ZeKdWwQcpJpgT4gBA1X3BKgv9NKP9GZepEN7YvP9Z56iB7d",
  "key38": "4CspMMa1tz8NV6jHCk8fXLqstPfE6QsYcQSC6xuy1ABD3cA92Pw8PW5GhydQpNombQbAfCdGE1EFyfC9nYGbRRzR"
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
