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
    "4YeNNncCn58cWnQdA9KK41BM1yVhy81NaLJyXgs7UmKXyxqhyMc329UtJ2S73znYJSH4qxPCaev1PRCkzpm4hmLw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n9ycSQfP4a7uGMoMMWVV5P8PLi35DYXqudVjsmWVRxkrpKeWbhuMiYfnGr3tsBy2MWCE5U78Dogpgvc84qpkgsT",
  "key1": "5pXwvQjrxLwGbxH4GHrPNkfNWGrqqsxcGc27S34qyNAMCECwKARgEfE16uMRyGSwAFRQqHJns8L1ZnaEU4kxvutV",
  "key2": "4CGLJDbc27FQdFgtTMCkzoeXWqkW7gEPrcm9fRiy2gpT2E3irQHzY6TS49AdUJJBvs7ZuT2YBz7Ct9aKKMfqXXt1",
  "key3": "3Vxvnu5D6AtbBL4cPTGze8neVyUypexQq3cUcKL2QsyjjZEtcW9bAxrHyJ5PPzpYKysTe3pmFgagTL57gZt7xS1E",
  "key4": "3C9R4Vh1eLd2rUMiviGA4pmaMjJqprFXTDamj5syYFK47JyVtdRByhKpthLHuY764M8AXMbkt4hevbwJZvdXAUQc",
  "key5": "2g2eHEPziitUKmt5RAmPv31hEnvoZf8MckEVkNfk1jpvJVz7FtHCEQPW6YckZNPRhDz18Br9LtTC5m1z5coc655Y",
  "key6": "2Za1XzUcVtuku8CZefUPpJxLc6hCaZhre6t6Vd1NW3bb5xaUinmuu6f7i2F1vfrPVpXP4QfPzTnfsHrTv6WA3vkD",
  "key7": "3FrmrakS9GS8w8AuPLYaGMnceDbU6MXgLMXtHePjNfmsRCFkrQDpm9wwP1iK9AWjxVoyPJoW4oiPtQiUamjra4JW",
  "key8": "3es2ohyQSaQjzePtjt9e3hhoWkKMLmR4Urv8EqpxnXUkZQFXUBC3tUrpW37BRwSsvJuqUUoBVatBzGRiKBSvhQPN",
  "key9": "4TCp16WzhT8Zfc3Lz2forEE5WEijFhSxS6pSRsVPzUE9Mm2nXwuRyxqWJM5qGV5SuctzSm77QoyTMsnJHmvybA3b",
  "key10": "43AC7LTdLXA9xq9jkyxABMVSeThJvsNNzrHdGtPZJWxtu5ASV6C7f1o4yRwEHvFeRZu1JPjt9CyX7iFzLpZj3tnf",
  "key11": "b53eF76HF2eJ6Tgtpy1ThkJ1WSSUFYTBSMavvkkNoH53fswdZgjENh8vk3QkT89btp2TzCZLSAzCi5wqj8FMvSa",
  "key12": "3Ly2XVu7qz7NXCo4cp1zPXKm8cQJYDH7NScqYbUuGfAQipBia6m8bMZks6FXSYzZK4FcQv1dznY62BZqZbbdpo69",
  "key13": "3zfYoMWz981rWSSvETC1yzbQnFVy68gsG78XQaBmBy21u6MDwL3iSgYe4mWqjBdt1Kxpxo8qgzwXXtafS6dxbgMs",
  "key14": "43dYVqethBckZYFdoA2f8iZn8eUd3pK98Q6uQYftysBjUDGs82DAJmUnW2qQzVpxkitBQh618CXofFsKLbt4Tb6w",
  "key15": "3L4y5iGyzfDUPXuNAHUBiu9BCyA4StbizBb344sMx78th2mGNMqWWaiQxQwaDpuKNTcvodjd4baNCTDst1Nd7oxL",
  "key16": "NGn5ziYwAoazap1aiodYZpnkwGnqMrfshdvRsFsDHAVigXmoPRrUnfgshmurJUPpQyA1Pv8gaq9BeMMJb5VKa35",
  "key17": "5zuTBfuLT1ZJ1numKoHdV7z8uT9zm1bxpMERoD4WuhLpyu4NbURtyc7stsZu74BqDfSC39ggqwkXxiaZRbg9mLWL",
  "key18": "5iVeTZoVvcigsBtpyu2bnu4dFMUzNtqvJ64N4rh2sW1jwACzyBsqq8E3STEf6EKTmRn3qjxw7FPdyiEpUPHbtSvY",
  "key19": "3RPPL6z5m2MuCDs39sVMNP4hirh8cHPxhvES8TkFuZYzNQXfRigAbBGyt2Ucqh6CxUJw9f9MFQ5JFi7Kb4ivefmP",
  "key20": "4LqujhYQLZzbzA1ttCkx63AtsCNgAgFPhr7Cvnbf28817Ka3LoaHiYxecck9KoVPJUNzpkEpAuiWqzgTKGe5MN9n",
  "key21": "49UYtU2GW2dEMPu87scxmPTW6TNSdqmb4cHsXAVpAPPAat92sPnDqYYcwop9UehernZqDtX25fur7iVGTqwKR3Jn",
  "key22": "Jb7E9hG7W2Td4vJ8j5xEzM1k2u3LWYeHVVnYuQAtHfjvuUaQmmcaKRcZ7V8QMJtjuQg9kh6ttk3qsBCXBQBo55S",
  "key23": "4Tf6MTuuE8QpNHWCcRPSvDFqEbVEmLS4WuMFnmhCp5Xh4Bx2zVNsCFEY7jsJ8FS6of4xQRa1MnXfJWAGVkMXmoJn",
  "key24": "RWy7FXya83wVER2MiJsaiDwGxwpdCbvmU9gPBYgK5QLuRBiyxL5vvPxLCMwNbvKXAvB8uukS9jk7413wqRofQbb",
  "key25": "2ganTi9YVZXf4KEyGFv75uGUTDu3WiFGD2ABoehdUoqs74iYVTeA8g9VdVx599iatwN1nVWWtUMMFdDq9b14gXm6",
  "key26": "57kU2sbTtibqvwRjTVDcPhMsHJnmBetmtFHEwhxxnaD6kZmUEsmgHp3sipGKjsqLFdeTGTkfC49BmckihECuq2nm",
  "key27": "4FGdkqPPncdLRn2Nu7ojyRpnzddmt8a9z5YTaKkUvHByuLMwJLuvttUY3Pk5rZTwKroQoWxE9zKMsf6KiL5r9bxG",
  "key28": "3ojRzQEX4x7TPb2CmaC6rahYZ9xpESo1Z9fjB6QZpLsFTU4oqcAuyuuaqfhJSgyssuLgRGD1UtPBb2uR3PiNpfkQ",
  "key29": "2JHW9ywkvgVZhxN2URzmyEhAZtc2N7Ut6yFFrQN5UxRcxeLkuBzGQLHYSs6mPRi8whh2huQ1iTSBKzLq1Z1C1SXS",
  "key30": "2ViKicMWZEN1xTXeyMdENLSrJceYkAy22fNxA8jpRXYXgFFHobn3psdRSJ8WU3Ya2oAgYvoA7tHtkcYLwTbM29Ne",
  "key31": "4MM6vzKe9QWtKwD4v4xfyNE9aGfERWqdN2eL35yVHSZb8HbsYzXCQjMYKFkNGpG7MYsZnMLPrG3DRFmNUGN9RTtn",
  "key32": "5Tdejqw31o3rDiqwKW6e5wBwLkKPKxGLGsVSyT2uhBZRgzXxpf7xx2pBGJ2gskHDmATCLfFFeV2bWVcsVPVQhokv",
  "key33": "3iCCgxYiH2HrLHxRuaYVr8JgXwAJ45nwtAqR4fVQHmd4ktAmKkcnvaZtsbdmSA7xwNZcsz3Lda18Qa1tbYMhkiMA",
  "key34": "28eHmuZ3LYDPBmNLrgqwRK5oNj5VtBEKCghZxMdx6FoyotDau8EEvV4MhgmmRhheVbMhmk84mmpznWeydDNvhdJj",
  "key35": "3uo8aNAC4qXRgqYKPAC52XJBnzqWBRmLyPd6njL24Z5KFMqKMXm5vzeuFaWWpkL5z3ZtcZTgCRTYzgGFENg19U8i",
  "key36": "5fb6UERD9hzvqZsFn5ufwSFYtTbCvrHrNbuqiZ7VqxD4d3CGviDBsZDVhyG7uN8qxP8gXL1JuohEi3SxLiufP8gD"
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
