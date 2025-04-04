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
    "3rKJ6efKPk5cUonf8Xa4sbpwAyLwHLCTNbhD4ayrfFW9EGs3gGcTfCgd1etjgFwWeGYXUgGxWa8pruGmr9gmZtN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23EGpWVtJM17i9G3FxHZyvtcjidoHetH4WbZbiMuVhZFatdKHYQLD1tgYRbURBQs3M9qfmdm2CJBTx5sW3931YRK",
  "key1": "3DzWn1NQ1tJ8tD7rEmZGJAd7n5DYQLZ9cXQaG8obxEzvjNGpuLBB6BXsfdsatXo4rtyEyEgChWXqts73bMJ1dDWp",
  "key2": "2gJKPdgT1g4H2UhcVYaysBJM7awAdAwWXE7BttGbkJKWGNLKWjP1pwwJV4Bwr1kLzuoCt1jzuogFR9iBg3D451q4",
  "key3": "4ZMU9mVTQjsbxMjCqgmKKurQxHkC7mUbMkF8Y73GtpDSjiBWUeGMWwtrtZJUkfJBVKd1p3YYWVDTNHNiRnF8zDSs",
  "key4": "5wsTMZzyQBzcGJsFYHbnE9vgxmBJpR4GG8XRT6bXtMdaFu997iYaAoscJN4Nra9EcuVo3qt9kF3m93MenwYV49fr",
  "key5": "2rrpmSrBMPh5phaK2SBvKqGguq9QJbBp8zvNNNpUeqaujUAGLjB6u7xXirguTR3oDVfTmfR377nSHWEUNwRqbifJ",
  "key6": "5itAMvWQ9idJX1yP45wzM6y6USpPstuZUAW9hRG6MrtLiPzhHsLn4afqpABDzgE4xkyUamtYfkhnus6gphrdArMx",
  "key7": "5s27h3QHhu7kWiawJCgWGE6W84mphCQacyenwiVsES5LmSKsTLZk9cBLE2r9B8AY7SpyjSWN8y4LWXFoKfXyFBAh",
  "key8": "5T4NLduhWdMJb7TCL9DBbEmUw8q5xBrcgu2zJ62Ae5LCfytKaV1xxLJ1FUj9Z56FCG8stYfBuxtcGW7CDUVHxjUP",
  "key9": "5ECB61t7XprUyy3MdXa3iVyVY9ZNYvb2vvv8hJScX7kuD5ddWWZ13ED5Ah8yfPsPTh6iL4tSHNjkxQsosVVKDvxM",
  "key10": "G4sY26hhD6Z2ynE4AwjogaeDtzifEHLdUfYBxQYx3WE87Cbagm4yHwhznZKGEQJu51j5E6JFmNDnSRu1QMiUZaY",
  "key11": "4cbwPZgvNsBAuC7hkWx1sb4Ckn6R8g9ptba1jfdj71b84ivvUGCZGsWt1CmYho5dpj9vtJPoj4sxtKJU6a9G5AyE",
  "key12": "4aDpGh7A3xy78fC38goW1PVMz6sLA9xfCbmgCJhLTUtGamwRN15XAYBY4MDcrPsmUNABTPL4ZX3C7UEhZN2ZLNhN",
  "key13": "5HQWRppYDED8LweE43ii3LzxJNmFx6CmbgYiqEowCe2fftjae4MgJFyhv1WHynxbRsRp5GjF6PHeiJCr4ogqGPMF",
  "key14": "5X3qJPmTfodZMxyJDMHhZonppW1RArjvc5r6GxX42eQg1MuEH5YbX9GLgcdJXRzC41Ra5vcfcaTJ1Q865ZKST2Dq",
  "key15": "5yszksPBQ1L1ZjQLGj6LXPFifBrWiecWgUhThHwCqEKTpwVSuz3ULENzQ97KjkrenjCsXwUQ8r2Gs4S5qnLcXtRY",
  "key16": "66mvmxFXyVMXLUqMDuHkdurg4NvYu4PHNMuNYpwDCV786ZNQ7DtEuv8rwoRdNdj8p2vbd2QqSKPptRjjnNqsm1KZ",
  "key17": "65NZRJHNjomfCizKmmTE98PM7w9VuwLX9Wkd8romSsaUJXd3N4E2C9MuzsndVii37cT78DePT1ggDzccRLPGfnU6",
  "key18": "5gGmoEt3CVCtsByz6Gj3Su4w5pRAT3yYLeFSiqhA2Lsf5tYKbQGfcs3YD3UEXu9q1DHTbYzgVHcCVeRwbBrddRxc",
  "key19": "3cbb3uXwdTAM9sfHSoj3tcz6ax5a5UcPLBnyFGTRxh4gUYQkTakwJrnduBU3v1dXt1EJpBWfDYXQu9BauHKfYExr",
  "key20": "3dPfsgccgDDgVxA84vf8tchWcYUuxSLSfCXi5jUoCq5H1tayu9XqbbHa8rhyq48EdrjoxUYansXec88sMeAhQQcb",
  "key21": "3oCPHRFL1qSkZcHdsqRhEQrbRrFSUJbVq7MNxfK1U1p4Bqy25zLxf4J9t22tVexBEDtaCzxEK19MiF6Ks32cwPmz",
  "key22": "zNXHbbi9DRRtVVMMGPezHPf3SHqtDzoUfF8T2pxiRdbtrUcAYDTVAhouTzYs8Bj33p2dCJRu4yZY37TbdgzDt2P",
  "key23": "2NiKku5bh6YebCkR92VJP19JvavFZS8YAHEdDZZdokv4it2F3ASRCYtvP7nrkruEtkvnuSug645SBqAPLR2PtCJM",
  "key24": "24pNzQpwDAiLDhJAyddb9LDoTgEJiv8kqXzYRDz7u4iTvgcxgnJ5Uo7XzNFEypyngcG6rvTdUZ7qWmPaL7GPi7Ar",
  "key25": "22RmGUjTWRLDVESBVLySTrH1gdX9kKwnktdfPvuvrM3ggt6zXAQQBVb21HafKtZ8TtBEosREhKLVD3t1sND2A4iE",
  "key26": "iV1bHHqH5zyEgjyG8Ltt1a52dqceHNVYbeRH8RtuVe5Y4LauJDFb1A9SVpC8XWb5ESJg4jBdY7prdTQ3MsZj6gw",
  "key27": "63vo2B1Ve4VAFsjtxgXt9puJTUMPrJEHHZ1P9orUU6zjF1mjE9csgpwJVm7UZwx4Fn2fK6Wq2kZ5vDy54uzAQB84",
  "key28": "4kQxWqQGhXoKVJAGVirAGofewPrS3Ygc9NqNCgbVZpCkocGqX1svmSRX9uACkh8hsq9zHjYMBLC9s7TQcL4iLxKb",
  "key29": "Nt1Efd6e127baRKuoYt3ThJJVhboFKzxnBFM9E1NT73XAmuHS55UUWADS4ywGozwarMZTgn8XHuSR6gpTJfsdFH",
  "key30": "LPXgd2QqTGEGXEaCGyurqshxh9TdbWrdmWMQZofoAgi1Ks44E3kAkBBFUB5j8o6A5TjQjdWUiAcgD2rb72jQJLT",
  "key31": "4jqHbiQpLX5EPQi1herZ9UKBNuVR2Z3wBuHfJVAau4jv83hqRc6B8HAFqFGYBHp1XBHnjjCpVinqZydbVvggHUq6",
  "key32": "2hdDzsTwLKZ1mYwxgeG5FJn47H8ZV2jmpd4GFRAB7yyUa4Ai8KpU2E6ikFCMMx74a6WKnvexg9Ym7A1h7iVdMFHf",
  "key33": "2zcZbGNTeAs9stetoCEj2Qdwc8c9VxR5KMbPuo6VV3LfQSp1Yz182QyLXv6CAAm2aFbSKGz3UwaDsMwkbo4hVAWf",
  "key34": "3VTeLu9QYpcHKv6UMVsTXB5Tk3yQH1AR1LGhhA7cuW4m8QPZy5ZzxEKbBXqkuAj65mx68L5DcMXf9y2gvxoXED83",
  "key35": "2Hr3kX2F4Qnc3Rsg41Mmf6jAa8ecBSvheYhtzp6gVUa1dMyyfhw8oLXHViaXRRnxzkwTBZiUnmC5N7hWg9YwxQzk",
  "key36": "3Mv5KSxAZBDR2MYFmVFWt8c2jKpDmcUk82ay6BXETetd3vwPJn9EoUMGv7D4vsWCnWJuJzdA5ujcBkPC56vBeEd5",
  "key37": "2r9b9zo1mcoa4fQADHP4tKJ2ZmQfwfyYBwob1jVXBPgCfwMxRUMjF8NMDCu2kt98NbbvdUw1eKap93mp2EK7A2HX",
  "key38": "5eWiWpoLGKJZAyVC7tzDFcCmBH4Dyxdxpth85Cvp8hWokPudTsHsR8rsGoJjzXa7BTnMf6PzWUD1WHjEAtzfSyap",
  "key39": "5zqkhmWS4HS1wL43DbWs8jUGnUwEcdHUFB2qFBNd4Gs4nUaEQ8U8uEbbZ6LfuU5CSFL5M36FjQF7RTVwhEwBddv8",
  "key40": "2C51o8nqtVz3HefbjAj2jZ3VC3wgbgqSBPU4feXo4VtdiCB6TXaNgX7Zjy4aicDjtYKQCN6VG4wy5h7zEv4czWyP",
  "key41": "4zZh7XQtYxi1iSrGVzHW8C3CJySiY3UBsY3RnqL4REURvV3hJreAPp44UTyydDr9TbPE4qaagLdot9PKmj6SbAGn",
  "key42": "41g3w6pt2UNHKoXoB6aJB3e459jw29nsgMqCnQFS8VQvgfwDGBphAiLcf1KLogGNXrSSNNnbZizr2yTnMCcb4i3k",
  "key43": "4xFTNWnmpSZqDRAHGeK8tgfQ2fP1xCmbWobMLkokK2dem8FHCSYfdjSqBgVGi592seA5hyYhhxWNQywknztdeVtU",
  "key44": "5a5qzokN3dX4ZCreEuojhoC99gKyS2n7F3HrduPHHgz3Lsg6PVRjogjyEMN182cykbZMFL8VY2Uie2SNd3wC6pX5",
  "key45": "5fKUiePQJYaUPU5CX8xcP55XzxghADE76rHYcdEEVnqUf9nnh4PcfTKzmYfzzPcZLVFzpYaPk2ibC767bCxuXpTz",
  "key46": "4jRbg28CwY1zUq5fXRvNcubU7ugBTLQLbCCZpdRnJamrohR95jxmdDmvkVFytyQeKaJHkKDxwtjRTN4Ex5LirFBX"
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
