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
    "2MTLHG9TdwMiU1XcXGQcxiS7LxBZxhLsxn5XzMAm45eu8cE7NjXKAhicpGBUx3R98WYKkwiR1TfrhaBaJKYjTsrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59uPMntN2AcjsMZUTPKrjAXd6GFYSNwgo3g4hiNrwDn4pPc4xBPehiJygZ2x56GTFykvAob5TbfbQz8fhG2o3iQQ",
  "key1": "48LbyQqz7YwS66furguNrk2MY4S5mrbur7muNXPEYX386LvHeiHFDfyQzvgobyDaGpPUan9RLQWFYkpt32VKnouv",
  "key2": "Q1mEhLVPz14KKbVJeedk4RZmaSvrNifegftaDNRjRkMJgvBoEZXt74vb3ayfsfoufWpbaQiTS8yiwXJLE8c6Cma",
  "key3": "5Rkewwhhpkr2UM8pmvmfManpCAswEmx5TuWGAzqihtpUFs6uKUM75jyYYUX93Cp58NQ6EGKHTLJ54FoSevNBSfgV",
  "key4": "3TFwRiCtJLpbcmSbsbSw2iVJGehYFTxdGU97axRjeRgEnd1BUNvPc45EBKbiLU24C5CRE8wCDudK7wxqPt3xNMYY",
  "key5": "3ZruNe7gEip8mfNkozx8VH9yKPWrXQD1VBkAHCmVsLyvzc7qcXSJNMFFiBnzKfSxLC2vc1uBASV5pkMbvwEcJvcC",
  "key6": "5799iqUYGq7Ao8W129EkvuAjwHZCLhsQxQ7i5hZA4pf9pDaaV7KXpL6kNueDqHU22fZ7Ex67DP9GpsdPahuFrCgT",
  "key7": "5kgnc1SY4V5yq6UYjR2a7a9eug2FPfWp969NGs2sBwQffc3tYWzqhFqnMWAgkJSZrjJVpKQQHnSPeKFCdkmn8uDc",
  "key8": "2skC2JCwnpfz6cCkDQSHRkBCDVdc5b4n2ofL9oxY1VfcFb7TRAQhnYjnan4rG1A8kTvVJAQ4hjSAgFMXwpm1vQcP",
  "key9": "5WPoZAR8PdAAgAAWghxG2unKY7oUMANtR5ow6fgZBVZi7oVwrXm66oZMD7ni3tNsmAsrbGDiyBM419cpkp84Lmtd",
  "key10": "B8gLm6rpes3HLvxxTNr35hWsrUCxWzGKN5zy4FvUbh2ahk4d2JRgQyk1cmSW2CsztSAg8EUh1dBnGiHcTjfpQa6",
  "key11": "4jVob4mffv4EoDT751rLm5j6D2ApMoy3DwRAfxnr1oBeaTviVBj1AvHFdqacMzjyzo2fmq4SqFVpNwsSpQpnhPZe",
  "key12": "2pnf8pcefxnGiaVdfwrmFkGKN1JaxPBkctGX21QefW1VUfMsXLYUbRpkqEAHNdkwjZ1oQVKaZsdaEA4GUPjieouB",
  "key13": "2GZX4s2QvrBGPaVNzVqi7RAjXDwnz8VcoLdivva4wzZnz9Jpt4hCGi4Uce1truP5honGy2YTU5nf9bPx1GRcuBQW",
  "key14": "21rJvbG5LZ8hfombEhL9bZnZQr869pPDiqbnSUsecgqtaJLnWSSGozEYYBjHPngpG2XohuhbDoRVz9bdVGMxGTeN",
  "key15": "37zZ56YJVK8p8rHbtRQZxwciREtb8TBctb4yMbWtBFrAjRGAeVsSyGTDEnMR2jCt7RLbV5iW5AM5G8YvsVP92wPq",
  "key16": "2KpRi2hJEtk9iJTCsL3CH7dHSuKXGuxWKqs8ZTtMtaxCCCme3AFmhUFwnKqQDuF1uVSvYoNoUuBaG32krYdyu1g5",
  "key17": "24KkK4GdTEh4bf4srAY9zrahtJvb8iEkosaraEo55TgvwnRijx8QE5wuMgnE511KQp1ub6mgN31AA5vukFMzPXRr",
  "key18": "Mbx1AR6R1BRwq4zPNAEcbiTuhKShqdBUMBcynSmaTSofNKakQaTm3btKDzuQecJRZdSXG6VyRzPc4NszjDW4Nsq",
  "key19": "aEDzFv3Bv3kdJ4ZFAHfn69QWegA9bu1ZBoMdTCJKsJUhS49b4AaioahY9KubPnSjgCmzAAPzGNErHu1kgegkBhT",
  "key20": "3DC6f5nLLEjPHtTg6TEyGxmeZiKo1RJQ4CcXTCHyBsNtNZz2bds392jJ2uHx5Ge8GugDXUZFa2XeH4gjGyMNS939",
  "key21": "4NoPeHurorsn8jzEDU2Rfw4ZgZXtLTJywzJrhEfim1FWfzZyxoJ8PrYb4RQV8aEGCLMU2fop4TpiKomd8gHoFgmc",
  "key22": "2LrJgv5wke1dDCtF5qWjHXCuQ4Ei4vXyoM1N6eDTqgvfKJc7h1TDKpu8CzQyr441PqvFegAcEkt11X9x4GMXFasS",
  "key23": "X8PUx694XjRpRZVgRQwAiiCmCSy7u6SZU7nQWhEuejPJnPs3eWrXNCH2GeURGwiN9Lp5xyX3qopeZfhKdFxKdJj",
  "key24": "4Xt6ZE24pGso6WmwriMSVvCgJitQ18KAeUrSPaUSBN2AK2YgcUqdxtRPu5h18Fr7LP3rtBLhaRbgy7EqjqgeqUAR",
  "key25": "3mT7uZ4eGMnKYknXVpzb8wXiLKpYeEfEfQwUgUD1aE17gycePrx3hvztnDduxV5JsEYMLmzo3DDoaRVYXL3XfWRz",
  "key26": "5HW5AWsWFkU3KLQSrYcedQDyC6ZJZTRRbcJdicVi3HpMNVfn4fUvpd2eJ1TGcTf4gGQbXDA7oEakLgoVaV8NVUfi",
  "key27": "5qYbCQMu2r3TyHdqAP6fE96oH2UAhBXvfcJ17XTSCGEbWtpT7eCG5R7kDEuRSnThHNo9Pm3MvMDjUuQaDKHTr2VT",
  "key28": "2P8Te4TQKrBY4FUdWpWkzmPJK7DLsFAbcRLE9rEpqQdoVhJa3aevqJwcziFP8HeD4VM8fkptmNkJ7n3P9MTYH5WR",
  "key29": "2frK1v5RuvYtM31FrJroXVfW6k3eg3GptSab9ks9nwsCVp8D3Lafv9GeU4ThkkNHKn989woGVYaKkxfhoQWt15Nj",
  "key30": "3mc4ntmUeDeiFLC27dDk9YibjutRaXKu7sg17fqki5qYyxg1zu1WD83X6HidQjKDkH39X8wtoZ9Hn2YYaKgppVw9",
  "key31": "Nt36ViUdZAHVQJ2vXcnxGp9LwtUs91qTjE2fhk9HPy68Q1uwUJRQtTn8MqTA5Rd5BrFNp87uL45b2UyjAkgzncy",
  "key32": "46frHjs1cc3HCgVo5pgshmCt7N3tWb8ut74Zcps1zRghF4qEuhZqgQmKNmUrSUwccVXzeRQGQN8X9fChuMvt5jxP",
  "key33": "KLqn5yWUScDTqqpKrRpvmaaDTPUbTL9cwC8QcW86xBLzqQQY32Wp3TDAGrz5Hk2vb5iaXVi49f43gna75fkLWkj",
  "key34": "3XEyU8DzY5R2j4NxUdpGCbAznGKCMJmDsiRDJ3dHnAAUjjeqJ7yknQndFKfAgEt9XNPZk3v77ixBfsTCdKEvpMZ9",
  "key35": "5TuYcSksHm37YJ8yTxqj55zvEjUitBfKivWXXKKdmmQNjTNTUk1yKNyznS9zcnoMNjhFfovGvxCFKC7MLM4yeycB",
  "key36": "4uMGogam9ED2yMfexC6p4W5GiJztY33vJxZNxkNviGTabPic2zWJ7HqND9md9sHqXYiT91gcMzaD66FyHSNyuCiZ",
  "key37": "3eM3gbDVmtGN5TuLxBZRViwj1EJ1f3Fg6uyYxm9vREivg7RkGghFin9KLKRwMp2RBcgNwLiBYBwjgeWdw1jfe638",
  "key38": "21FJFj7fL1ifjyqUzVoRPzYeRsepZBc3ABamkdXGHuraCL5fQfvKtPhqCXGTuAY2fdbp1ayp5ALBJu8nVPePeDwu",
  "key39": "5CkruLftXjY2HtBMV2BKD1gzoJJSrwt2H1QbH6NQirQwXMWWuP8rXGs9GVtvSDmSfNY2pRjP9qRWX9DH7HgdLAT1"
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
