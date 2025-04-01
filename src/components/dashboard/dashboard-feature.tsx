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
    "4wk5oeDxJwjQGqqNtEZRvcBseB2Um25xwYcb5vHfK4Sj7RazLJWbM2uhg3yJLBdBgwMjfv2CkL86VXy9dP3WSgBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CexvatHp6ZipPXE7dS5KWJgJAf9mzvBBKiToPrigf9STm8LEfNH4peHyMfx2ier2hkEi15WtvdgTwg7hixFQgGo",
  "key1": "bowe2EBqFvraS96mVwP9Ah5LDcvi8dABUqVzbrYn4NMBLNyB3kdE7xukv9n1dGnocRCtiyrCpbLFZuWvfS1CteF",
  "key2": "2xoyeP2AaWVBQr35b7Wu2TcTvtovsrZeLUzB3Us3hU4zWfk94yp6sUpync7HYbuP6FEqfV6VXRKbDh1vsTMrem4p",
  "key3": "35TfeuarevE2dJU8XE6oXWedxQNuxuqnvLNSeb6fMo5G2aP2fPZjyQMHQgKt3a8rrbVn4ZpnhoGmnNTmnbvmmwCR",
  "key4": "2NZmYiRM5ouZ5AR35BVxeZxXyAp5P9r2GkUTpTuCNcYCnoaWYiEmNeZ5M88Pp3WCCXBgxYRbTQ2p7wsHoSw3e2d7",
  "key5": "5RpZwEYUraTqayECAJf6mEsDv58H7UsaogPbwkRPxuZPDbn2ipJHRRr4Q4dkLwasqVrjaYKPiP3NvzTKHQkoRzbc",
  "key6": "3QdHL5wrSVNbqBmzG2MeSV8Dc82PafAQ6vF78XiaLv4G1VrUAcp4HY9u37FZYvtk5ciwApeoHusvPfALqf8mL1iS",
  "key7": "2hPmMGzUXqNC7gYDax5oH8bM6RMmBvRfiVR2jdtqwWTdcFuUmKnfXmqgi5AzjAjwRWaomLnRzUuVX15S8bmKK1vH",
  "key8": "3V6YWa5PyDDmnuJDp4FGfYtaaMRcvVcxAoxMGnU2gyKGvhXnZ96PPcxzmmqMbwdrTEJsx1uenWaYmGxo1U9gqgAQ",
  "key9": "67EcADD3tHYqsv9uBJmQjotiCSysJP4ZK61Z2zuEFo7QZRAhXob6q2pBi8PecUVKGowjFQqu3DKFY55TFhxf3o8o",
  "key10": "2BJUmBcnea59ut27qVNrCHKCdTE8KVyGYaSQVyt85KAgJE4HHSxEnxRGPfLjtcs9yXQSYDz5sEVXtW97FpQkwV5m",
  "key11": "4NdNtrWREzVxzDSFqZ5ZiYaD8p5pU868d4rFnvAwksKLV2ZZxzJXmmxpuKUnYV4g8twCmkm2Xj8Wfd97qn1DJoku",
  "key12": "2XtawFMHVg9Yed6Q4WsCNkjrpVwqyWfTbsr9HVyuxnY8xa2FDM822VFEjXV9BsGrxdQFzEXitJQtfqXpDZrisPsc",
  "key13": "5tVj7ZJJmWVyJynNynGpaeJhVYGuj8q7JWqAPxtq75aKjnfVp3jyjjB5rzTbQjkMDKa3v8g2jwvT43ffKTzvXzcm",
  "key14": "4trmpnFiPphXiHjvp4JoDbBXGywXKeui75GRNu6Hccu2jsVdRoQMBhomSsG5H8ptCayQrsZtXgghtMdBbkz2Tt42",
  "key15": "3L6gZdzRkVpVWiYZX1cL5hovYoBjvhBtoHSZyxbusP9kSBPHp25NNhp9fuXjkWCK34TJSfnL7S1mG11Eb4V7KeQJ",
  "key16": "4BTAvb3MqZZEdcZuZkdhcF1hZLx6uhsJCCmd8S1rELGj1scfbpRUuuiN8ohc5HmfySHk5eJUuXh2MFLLeYXPgWWc",
  "key17": "3NUGPSLrVPgPoXaPrUnTwFgggEUvUr9PBsD8GudkeyiXaUBJrsZVYFm7Q29Q1cEb6D7JszzhX19gyac4nrNzqTDT",
  "key18": "21BNpJqHzSwHjpKCyoGp2coyEKdaUJT51gnCFXrrijgDdiyY3xgvkGR6FWePFji55sJfHKN51woSGM7LKr18JMtd",
  "key19": "1MY8dTJm6ZgbugTMWNg4TSHhcToZqwqBnM5BiGBYn7r9XZwDrHZQJPztyFMP2A3xNtgoJeJgy1b3PoXgh3s11bH",
  "key20": "ccVqv66nkJWhupEWgSdwXgwFnPK5jxDGngAKhNVyMgkPtZ7SgAzBzFUYN4RY2oE2nXdFk9JXTd2Agu8v5m4WS2k",
  "key21": "s2DXgRB7sbL9tvcd3X6VFNZtArDwa2oKirjtMkF8SXeYXUsYH25k7bEQ55jxHhxfzwfhMJEJTeVGxda3wYpNhLJ",
  "key22": "XioshXBfLEuBzsrU2Nwpb4MCUbEcGduCXakxVaWx1Qwj9F98a3YSdFXprkitQnndVmHbd4QhLh6RY9u2ehAyKgY",
  "key23": "4xPBUK8PxmReyPWWM6LUYYmKqueZhYFipw4o81VHfGpJpZL9Qf8upXenNUEp2mW5hZ7x7HA2XTrAh9SxbDN9eaXm",
  "key24": "3jpXUEqYLbTRup22mrCcrBUJENrS47am3PVfANg29BZqdKi4ZNCrszjkWdKBYx1EAij3Wdt8wN7Gnpwdf6snXLTQ",
  "key25": "28vAaMXS3Xn5vLFvCsLrPSYMA541K2ycvekgCMqj38v3xxng75opsvPHHjPpQW8jtmLjswQNScNZtxoFaiwemZgp",
  "key26": "4aBXSLR417RXuN5VTBkhFwNmr2QM2C4BNpuksmbPfSSjw2Y4MRT7hw8EVniMxU3dtUoqLEtm74pYj5eUhxRTjNUx",
  "key27": "3wfCk4Za2uTmPhFAQSwPoVe9DP7iezmU4TtKDYois9eUUhEqK8qpPAswRAvTXJcrrJ2M77HAzeEjaWkXU99yX5Dt",
  "key28": "dck4ASfYTQbaK9oMKS6Lnq4jYFsBp5q7TPVqqdJ3zxSByCUynYpHBbuQecLYf7wLeUhe8q7XxcHuk8xuT1SiNmL",
  "key29": "Vz6FYjBZ5M9VZzUk5gD75nLQLkgEN2ZRieA3GRNd7THW8kjwZTDfgVBdAvtB1fAHsYQKc32RaX2QWeWj7Xy8vWY",
  "key30": "4WbbFhyYxGg6a5TRei7hWQfPEsCJvMDSLEzENqG3bYnUfsMYwsqomDCHi9EpUjEtNdkiFxA4YRGYVBUJPyhbWESb",
  "key31": "3VgbAiGvZg5qTp88udVpUEXVDHyg8XDYv7R6WxSEHt4TmMhJQ1Yc8uvXoGTNMPVYCyRk9quvDpwEXycXHEhRDDDc",
  "key32": "45xzxgziJVzLBcPkvRAGocGibWuR3auYn479QEnEy9JPKTEDLyq18fBWFicniuRc9TpXchgbS36Aj4fN7kwJji5i",
  "key33": "2QPMsu1BfYmMCkz5upDdMnridSG7NK7ZHyAzTep2vxaFWZEteKZTtamJgwe2F8eU1Wx6F5dw3KRgUpKvBbEB9Wy7",
  "key34": "52UW3TZ76v54VLaEuvZEE8fiThe6MfthuT5T9MVpGHmKnhGQUdejJGX44yJdjsBWYDGuGUGj3pJi7riqVuu8C5h2",
  "key35": "5L3bbQACKsEuMPb9jfkwnvGNEFGQitBPZkWRY9oLZjeGg38qwSzj4fMV3f598kfUZ89HV4jUYYTjkukF5i6a7zQZ",
  "key36": "5dEsW1di3MZkhtZt6FPn267su31mAb8aBvyqvZJM2t23ynu6dNY9Juv9Lvs7hYNan21cKGfhw6LZ1CULqt7XVFrf",
  "key37": "2G1KYSLsbDYCLj7iGNU2f8s63vLjJny9PXYAf2LNGw9hFBJYaQrh6Dtx4qidtzYErnWAq1ZXV4CgpLuDoUjCvEzh",
  "key38": "33pSN2HqxmhtEGumMni7DrLAz8ZHjYi5WYa2D9jDSqSzdPYetGp6oyyJ2Ti7aQmixYbJ8YaBktYXs8xd1sD7hkNq",
  "key39": "WJCEwk8RRGMC9ArcEkaH5BeUVGu1MbuUy45Kx5KK7pQEVRaBbUEQgZAvRouK6e2HbD4Jn11os16222D9qy9GhcW"
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
