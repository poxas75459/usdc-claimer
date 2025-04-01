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
    "3Y4iNSQm4LBL9WAciMMn7MXZ1ZCjc6gJXu6JhWuo5rY3N22L9ZXX8EgNLMZX6oarobSi3M7Qo8NjoKJbBvAwcm6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uujuxJrmvXZo46sCnDK27DV9yw3LBtymyaSXtPYeiX2B5LWMfHKRVt5DCpnAeA75hrqGs9tbS1ESj74EtjNVrxZ",
  "key1": "46cFcGgrVjiUn3USadztUFgijAyaBhun3y18kACMMk6TvbL2eApbrinyuY74Rw8akbgtM99mc7uU1m5ED5FgrrZD",
  "key2": "5yjQVc6jNTfGHJHJwbsbme4r5S48cu4dSCauBvf6mg62eY5nViLj4pzz9ZtsCRvC9ooayfYnoKyWcMJaSyQVw3An",
  "key3": "49H9S7kc7cqZafvRa5hbobQfuMBbMK4EfCmUQto7LAnzespNzLK8NteCPDfa7NesJyXBXAyboSdtU3q8ncGn3NAs",
  "key4": "62Fiu5y3aBRX3Xvnwc24JhiuEArDQoEdEpHA2BrBVMLisx7suWbNc67QwzVqmepPMg5fZ4SQapiRfjq8fefE1fMH",
  "key5": "25s8JpyXKCeinMecr5Zp7rYj8TYUgCFnc5P5cP4hH7egArNVgxvRyukKi8VrNVAPKx18qSeYKL2qhCLZzmJK6mFU",
  "key6": "2xGSZpwJnBxhfWUMve5w4ixLWHCZ5kXF7NHekwEBEN6Bdg8Spn4exhkH5ybuhDdAtJNhdo4F9p3XJexTR4Nd3fjF",
  "key7": "4uC2cCjCoSh2CGeqmnS1RE4U4UbtaSrdQShnpxMrpzKUzFT4kQs7cwjzXF9Q39gYkAe2tHETPzpZ87Drkxg5UoYu",
  "key8": "23B5k579mKVbWKhnrmKPWAnd26cWux1uvbD2VJr1hBKFioEwJx1QYiTGfauKCqoLTapQaqhRpvnfvSBo1xP3v5ac",
  "key9": "2MX3xAgPw6C77VTAnsiS2A89Ywc8KEJLz5vVkFmUhtawi9TAnzo12Y9p4Ts4qBaej4thEiDaWRm3sK6wiE2YSpKF",
  "key10": "672ZZ4Mzo5Hbu8W7cc1RNQyQAdXjcLNxmeHWg5AZG44uPesiy4Bu4kY6aLGWaDNA7krn8X99binWuvmdQdLWsmp1",
  "key11": "Tzx7ocbjNiouo9B1jm3Zmvta596aVCzqzycbbD5BxLQyEcRM9DDKh6GCvx8M9ZRAkwUGGSPYuYmGwFaS4MmxduC",
  "key12": "4akNVrwAi5auuiRauwtpZtWziyqVa7yE2AUyQo78dBV7xY6iAUHQSHMqmdfzW7JPgB4YuJARAQqx1wZ4CG1TdME1",
  "key13": "vpzRjQKVHPDoZmK43td44WjXALQ2Np5a8GxtxDinKYjor9t6d98X6gHH6sj62Lgt1yHd8n1Z6TqP2TN7aa6qzW2",
  "key14": "65jMEtbwNqnWC5KuAYQnh9vEq1thzVqCt9P9fPydW9TafPtUpfGXrUYTBB6sxy9XgTmupvmHQ9p9zTU1RKu4yeR5",
  "key15": "3xdJf9uSx7owx6qGrwtWtrYjouG8vQwUr2X9yvV9hZyzBG5fZADUaDDXNr4M1sBspkHeo815T1EBbKLYJsCB9vVD",
  "key16": "m5pzQeYDkPpT9fJncHfSrRLzwC5ypHK1v1KdGQwD6gNL5RBWNeTRXfd6B55buPTL6eNB57Qp5HaCaufAe9Dqypk",
  "key17": "5Z87wqMeXmANTQmVfThn25kyVAVF8xjmLXvrBuxAdvV8pGAXp5PTp9KJdH3mUKui16vcPbR3Y3BgM3muyE7GQdX7",
  "key18": "5mYa3rdHcGuEWEmMET3fV6vsSnR8UTrfLYzFHYKnff6KPo1E513dzHsUqJwXLncx8uqJMqqNagZKvZUzBiJU3DC4",
  "key19": "3gR2xa2BUuzo9mNJcMFydnrUQLAQKwfeneQ8F4AbtG7nBDKPP82pG5eHp2L8T6TxNxs6Ekhp6QdbmmBe7bKCjf1a",
  "key20": "33U9tctzQoQEKuAcig3g5dmyyUCW8HLGxrm2G1ybMRAXx3untgXxrZVrryVrDo7j9wvYiZ1wMVfhkvpb8zLL3djL",
  "key21": "3N4DGEeugygzGEkHqGLZG3DM1n63dsLyAdLiB43ggHKQKNp5exJAfdjYkJpr3udBSxmVxtKc6SXKW1AYMhso6NMC",
  "key22": "3ED9vHFRCyTFzKqTACETKoKJVwVosasHk9p6dhzhWT5wxoHKjQ9WQLrzE2Yu3WqtMdadvW9m4X1Q2z1iNurcT1KA",
  "key23": "hij9NKMABVAZWRee8wDcaGbmYaHdYwbtv3M6MeWCYP7FkSacLA9bZABgw1qxzdrfZFqLyesKq28Sqf61wpJZmTN",
  "key24": "63xDMTjFv9aGV7iAuXKrXzS12HtTTebNsSPuZEWPsJvBW7N5gcReekzd7jX8XoGQtaiqLEUBHDaDrj8zqSL4abk5",
  "key25": "5WJ3QsCXvYtV7voQqG3AwaB3d7BbuVMZ9LmMX2xjBSa4oJUhzpRKLQ2WmgxAzedUcXJWgnWwKY9rquyXoA3VFsv8",
  "key26": "3xUSW9fT27jxFuJTc2p5SW3XeYM9Wx1LLmJjBRtKsUFuRU8feqYZqWKWfbQbzyo5rPGMcKwePrGSD5f212nAWiWE",
  "key27": "5bZEjYmfpYxR5HQqzotAQywyEYnRV4EJ8jZ1cbqQCPKbDenBxLcTKpyUrD6qt46t2umiA8atLHC6Qu5K9TvuP2mz",
  "key28": "54bCYXzWZ8TRoMnKpqivNvLkvEeG99HjG8AMWozQq8tXfJMxVo3TPAC8BvZmo31r1VwGznVXaDY6EuwAJTpHX25H",
  "key29": "5A9Sw3vXtXfgynmmhh8QubCtQmvRCnCyjyBobm6P25GJoKrgi6m4mvmpYSYVPG2vdZyf4owtSZfjLMXYrs2BqEBU",
  "key30": "3RRn2U74eQWwnnWxYxfrE7ecptYyRAKWRPy4oZBzDZHqgx4w5cFNzqXtqhnfjiPXMpRmP6uYdPt256QmKsZGVPCC",
  "key31": "58P1o4JoBVhHV6GuG8HqBnTjWgXxDRnRg5KKw1XA5X5L46JyNSvzLx3FyqQBLLFURBMtfMikwXrKVU4ntnDheAe5",
  "key32": "VwxE1kngRreKXSzCkincSuuyCc98UnkXZk55Lxbv1ptPVWYpKhz8SCEq4FcmLHLje2mktijsvB6dLm3yLUTXJZ8",
  "key33": "4aHSR9Q6Kp7y4WDg2iCyHdA3sK5ehWAGEtqXhMxtC37vw7p8F2vCFL1szuRUUSxFHQBYvQTkQ2MSyYq6sEdXQKAD",
  "key34": "43uM3X6VN88ktWWEzTDNcbgggvZQvn3HZkvKwA5ttgCvs3PecXzxD6gjF81TcrSkMuF8Pn3gWji2bJmFU1Uw367U",
  "key35": "49T25KAerBKVe3XVZ3Bphb5VVESrqC7BPorJrpx4onSU87MEBJ3AafdHFP7pRZHMnNMpjftbwTRQdpyFM3n2JSJ7",
  "key36": "5FBNgNWNWJgroUEUWrC4sdzuyT1vYFWmsY6KQw3dJkmocpUAM3Gy6RKqHdB2XX3T3cuaTBrYY79FW52nFQKjAEAT",
  "key37": "3KTKq3z4pyYCe7gGuuj4QEw8bYsKmiU8jrVpGBEQdFh4eLVjsUzSSkGg1Kov4JnQoYJvhmw5gi42ZS54557WoZtZ",
  "key38": "48Tr17uPowW69pruKuvWeKWikVtdF6BpihwbEG9UYeqddrVq4ma2GQwk21LLdBMBvfcySbiNkHVmtNZyedVLEDDL",
  "key39": "5qXS2ELAYFcZEf95rL5mHTeTXWP62j5kLm99GJxFxC9kUGBFk8aQiWGfYveFspKetaXfTLE8wXEVCs9beY1NSv6P",
  "key40": "3qpqeuZ6fYLpfcHEysohNj691pc56X5a9J6Yi7W67JRsjG9TnVDudt6uKkcVc6pGswHQHxPN1qAUHPQ6nvEDCWB1",
  "key41": "hDev9fP8M8YKP7pptnFsPGFBRNKWhZdHuWRXCvKzP8ENisUfVDtAzra4iVHNXJXhz3KfwtXQBogSU7nZ31XjdXK",
  "key42": "QsUFza9ZcYAewgxE3BFTiQiHgqNVXhHVrWZHi68jcDob6wHHaW2rDT2qaiJ7utTbqfuB1t6JqyzdXXWYfdd7qc8",
  "key43": "5grftPe7A1S6LCzDNziKnEt8JMZ1JStPpAg3juzPPJpAqEiFTGGMLTgrE194jBk8j6sPJYQJKqps3B2jxeekRBxV",
  "key44": "2h7joMxrWj93fcBaGaorVr2p2eB1Cu14Hzxvh7BnX2ibcLmqEafzBtHGvL2ogj9ymXxYJQDWDBn47yfhtYHBc17e",
  "key45": "4JiNBkRg1SyMM47wHbbCeJnGNcZjnfDUMTRrtkoY8Hfg8b5CVTK7UySPGhWPbsF8yM6atjns4rYHQy33Y8raBEQn",
  "key46": "33gTnaVYDCC9xrBk2XDo9XuwWYYcUpfFSy6Ur49PMh9Ncwj7uE6W853ez1P2dr3mwXFehQM6WCFb3PvT8LVfqWH6",
  "key47": "4rW636iHyAKd96p8X7GGhtRQ3KHPQTPFAFxpYXgUgaCL3jAkA7bxkN9Mnwy5keVx4UBnAiUgLa12oasVAStCned6",
  "key48": "dwg5YMb29faEb1a4Am7UgZ17aAZMqC5bW99RSJfnVDm7J5vzE3HgpZmSgUu4Z8Rnf1rAn6MPVedxA6tUbT8gQUv"
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
