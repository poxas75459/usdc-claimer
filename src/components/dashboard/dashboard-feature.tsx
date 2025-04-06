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
    "56a7k1aoNYX9QzbCbCYre9QjwEGnmYMNY9tAgpoM1edcPUkM8D47dxvDxERpaKUqpxYpMbcKLrsjg5SDocWBV5WJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43bKVcgWMwjniHLcAzhmEVD7LtobJgk3Wmz1E2tB1Rar3TR4UPotRBRNijvcxeB9BK9JzMja9AQZKPZk9Ckoobyr",
  "key1": "4WpRho6Lk7cuHQh768pbDf3gKc43vhaf1zgBtiNTgGGDgPRK6dkSCoRx4XvEjz2jjBidsbrCxDHQR2TDuGUPD5B5",
  "key2": "44QqhPfhHqcU2p927xL453WY7E9MJyf1rdaUMzPPhH5bcxD7XHFfC6M5AYTPkgPSFZJw5HwmjQwuTxQbBkQ8Enbc",
  "key3": "JrWBCJinfn61xqi7PP77TpoqJ8eMAsa9rS2Lj8bS7yxTTAKJcDpuqTQpvrkk36Af94qWMKUTCBwNaHqtSrBCvzY",
  "key4": "vkqdYiM5nUkezzsU6h8T6do9a4JmF4P1Ye8UkiE7sofiwkU72uVFhrJK1wn6uVBddH9BqbEGjMrURZN86Whe437",
  "key5": "3RRnhdXheMDZmtSDfZZGtSQpKkxBQVH8GSsyh2jPGTUzkt1cptq1LCnZKZtrwiuWcR54YLxhFsCntupqHA1fEvTz",
  "key6": "5cAKSAKxfwtXsBnFsnrVd4JZFnAazA8PAcp3T3ot5bK8XUJPwNFzHum3UsraB21o3Rd8XK6diYQwCniyRe5Q8x67",
  "key7": "4aBLz2spUasZUHHyBca7NjmW9nt9DncU2R2jZDvTLqmgpMwPxvzD8GUryBSLbWGnKVfQFrr6UH7aTaCfApT7PuE4",
  "key8": "wDbjxfMhLYKEKEZxkrmvCYef6GG5ykmmFTnFFthRYwoqdWQ2URxNLvyo1FnYTGBLvYButDNoiy76qDCL154iZi7",
  "key9": "2WuC8LZRpYYdSPBKeGEoY8kLFeXoaVHfuXiYoz9afYfdDuFxx3D4UZqYcrmf56uoPZVqTWQdzMfjtHzKzs3SoHhn",
  "key10": "JheRrpaXNa6ccSvtp4XDPRgPek1ekEBKDfACAyDNY2obKsMNmqXtTAwtWFdWcrxAJrFwjZfQVwxdfviBTdFcLWN",
  "key11": "1828p6eJiYLFwxCcWzZ3bJ7JJ9hCzp5pfsp34KhnXKGgGvSoJnrwiRtmaKv1HxCZBRnfstBtZuAxJTa5pueSAvW",
  "key12": "akmxWtgopdgGXDmha9S9SAFvV3H8HK2GbXUgkS7wSuuNxHK211LrUFqGZqqE3cdAJ3mSjptMyoxW9RsG9ma6WjX",
  "key13": "5yBW3zfh6YP6CEocQ7ZVnRJ6jVRSDrHDjHWsKikgQNuYYLKFc64K5v6gJ6crsHAEW5cQmTEY6ZG7i5KyigkZQ3WY",
  "key14": "FCSmwo9C8Q4HD4t8kR9EiLde3SuTquWrCA7QMTEN9tMq7sDHcxDYuCk4B7pB7VBdH2Ag83hcjVo16Q4SexGJ7ZW",
  "key15": "3D9zrXpgHsKLY7tUDgMk2aRtEucV7r1DhTtBHeUT89EGufAZqBdrouXQVRHJ5NiJZfo2ZVkWGxBiF4KUkMCp7bWB",
  "key16": "4mJVnhTHEL1VXHmh9oNJeBVy8Xyj66ovsrufrWUyJYMZ2iewJLETQV6o7fKL5e74qkDW5ZYcAofQBpgi894SdQCc",
  "key17": "SydzQ4VnhG66ufGhj75LxWyRkBfQ6GqPrC4ZmFhY5wWdDbknqmVSEU5mPXhWTSWTEtnEej2dk748C3JmD2p3g5V",
  "key18": "3ocxC7TDZWDmDoYsGe1LzJKPGqUVdaPf38VF35BQdqKc9Gc1zLXLAoBzKASEEpqt9tbJo22aaBjBdq2eTxR6xHyc",
  "key19": "4SjQGZ9M341HjaD9tUKYopcMDYx8mjZkqvKaCfs97TYwTaSv7NkYyhKVYRuFk1xc6ukn8TUzJpoQaKtwAszgSTAX",
  "key20": "cjUWmSvsWK2bYtFaWqKQGZooXeBKQwtXZFzRLiqM6XrbkL8ECnFu99gDQapDWc6HaoPHY2HvJFonBgduRXpu2jg",
  "key21": "2pah1UmESwXzWyjSa9b8qcRMC1LBNJbrMWTCQBnP8obu2vDjMEex52tLA6836RsDioo4CBwZRxaBboQY1rfTm5nD",
  "key22": "4YyGWV1eQjRV86iSCnYEWDJqBnfU1rpr2cdyj9wo4RmV6ccXYGXRdcLnkpG5aYCNsprBjRNrY5cTy2GanBh9XgYF",
  "key23": "46TNs2vCWcjXiiDo9eqsKGFTqvW9RTJkjRnxrHqpk3NXS76QsV3qRLEKrExC9K8rgECi8BEdueH9nywjZTGriwJC",
  "key24": "4CsiuFzPJ6gAZ9a9nQUQzhunC4sp9T3sLaTKm4BfS5kZ2XFaK488cLiMpB4eWKjvkpCQZKdfEacj5sQkk7FZfvdr",
  "key25": "2qFDAJ5XJEqtYrq2Xn2LPyWHLHP9Hx2iu1UA2nximBodCPux6PYCduDUsDK3uenbQPgaMgP3uQLhwuE9jVKdQCwr",
  "key26": "4Dj3RdP35Jpnkbxc1Rz46meo4fYVnbkNyUcjGmj24xiexc6HwPp9Sxg5bdu9NcACKczL5HKpxoNHE4gpA9UHYR5e",
  "key27": "2yqGgRTuLvU769Wg2Q3CLcqRyGbwMmSkSg3Nsn4FeGomyS3wD39LoigWyNuX4TUKUa7bRKskcseD26vD2Ruahzcr",
  "key28": "3RsYavE9AERt78GJCunAXw4H8DMdujC7Vp2sffvCZt4bXaq2t7QdXgrsZ2woF4Jbgjbq1aCfVWQNdZQpCbsvTuVm",
  "key29": "4EBi9c8MzJEv5ok5rKbDC3oLVUB4NES6V98SdZs5NBBHH4q1qeVjQbb3JkFN8hu9x4cF8EUkjKP7kKwGaSnQ9t7y",
  "key30": "JKP3vUTUoQFeJfaS9SFkMDm1dQLgzSoVjFy3tXMdgTqhjGyHzd6W8SfjP73Z7opp2TfTXwpTMyR8fLLNqo7wKCC",
  "key31": "KzP2Rp8xmj2ub4GFmWpihgwcq3C5yuwu79z7dvhN1x75b3nE5Rkq7P8i9eyyEJNV2roTrJicTAbA6L8z2KRhvbN",
  "key32": "58Z8bgeU1BeWv1ttB4U4h3RzuKgx9WBVX8S4YZ3Jq9zzcb63fD8nTw7BVdf6emyWdi63hxy1nNqeTokwesssdthg",
  "key33": "3Yq1j8H875ebtSYu4piC2hWD6nJm5jJ6Ht4F6bpj2S72cNVEvbtoYd5XJB2ZE63n4yrQdVTNtYVqZDHs1qGY3wjY",
  "key34": "4YwhhyDGDaoy1KL2jDLGUZC533agRz56sLCHGYFjYmMjPSBfZ1BnULNyAruoSQqvVVGmW2Xc5HYU1ezatkDYxx8v",
  "key35": "4xS1QGw1d5KY7cK4UJ1H4aYneUSsvYxZ9wncbmbM6iBbod97GR4PpyCWspvEqs9EPE92CS5VAeYutiB3HyQa6R3S"
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
