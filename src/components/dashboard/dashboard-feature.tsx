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
    "28bhqcaiCXju3DFP67MXsJZoziXcZcz4FNQUDqGNHqwQ12Tq4soeNBuLwa9YQBiFaLQagx4stLD4rRcxptgDkToe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32MbLRdc89obj7JDHFkQUNJEppp5uxJnYa6xwQqWSumZ7yQ2Y7eAkoXBbpv9QgR9QXePRMLTUMcBFyhtU9rRors2",
  "key1": "5PcJSQSCGntGtyCK6MFRKXjxfU87mFenG9iSqGKGKzeT2nfFrXZ21BKYomPG6pdF13TWYtqnoL5qNQeTVMUU35M7",
  "key2": "64MrrHNKjL56KEsEJqRRaVSh3Jw2cYmwcTUj8HRMf5NkMLi5be9YviyaAG2eAG1vvagjeaTDz1dLkkF8o3vH1wpu",
  "key3": "2DieHouw2Pz8MVJXdhcBha6hrnxdshDwTNKcCgMvtZ5nPdZrurLFijfrnBHnNUw1K7PKoYsDSkaTTAgyRG8znXvU",
  "key4": "244vKw2HohTizK8qDo6d6XVBaNocbtu5TteVVVRUj6hZWDWGo6y2EfGoET7JoJmpLZYDHjgnd76YQTXFqbfTSQNy",
  "key5": "576cZEg4kQ7r6TeYWQrna7ZZwfyx9Kuk5ZA9RtmvfjEDL1o8hNdyYeP4qTJjB91nRFrS9m8nqADq8oEGifTz4WLG",
  "key6": "3RTXUUnhwH38gDVBqcuG2xwHQfwWt61U24CSmBzwReKPZiTdod9B9ds99HjPgkVGzpXDMHcg5AemYXekbR5uQSYQ",
  "key7": "Fz5x1ScTtwJqJCGaS9D1TufMPUxamZGs641hw7MdBHbVvWtCJKSZRD64RXbC634kkQACeaaigYcZ9KwLvVHpfLv",
  "key8": "2xxaRqTBH74zdA14NiUDQoXJAucTrxn4ZUL4bf76uc6NpxQV7crGwHBdyScTMp3ekCRymUHatEDvoce25LXyZWyU",
  "key9": "59AdjGhWSs5NTuSf15UKG6w91PRJ5gtEdiJn84yA8utNdwoPdeJUhyLGedGfsSyXR7DjNAeDBwQY9dFfhe7skL8x",
  "key10": "3Lg2VE8WFCcfMLF34RwGCThnPkuTjMpuLHxAuZzUK9CqFHsczy6aBucKQwRTLxgft3RqTtnFyi2TtVsEpWCsgx6R",
  "key11": "2NdxthKGiTJDENUCA2xRcqzmBVgym15sZtD12tceJHfqAvYa4E2qhpXWQhYjSKq7XKRK9gA5cqdUWPKGzuUtyiYP",
  "key12": "4YqapoWdQcFF7QeLtk6LKbPEKq7UZ7rZ1G3wYVSL8Xb9CBvaiyGJipsoUMcQxy4nmeTpmDWmRhtTAqPRnp4m2pEY",
  "key13": "5NGXMMhpE5AmPeFYGrKhoi5kpsKn7sfRvuwakXQ1TncWyYbyNSjGFQ4usJhDm7GysNxz3mR25bFuSsKHKfuKUERA",
  "key14": "2yHCCZKWE9UK1Gd1LxMxCc2D63AyZ7r8Ex6Ux73vvvy8yV278ZJfRb3Pz596BUCZsNu7uCUQuxKRiDAYKesdtBaC",
  "key15": "3EgaEwyQ9gDLSgkFETNodnSq8TSy86huwpALnhPC2U3gCGLZu7LZEi8RPXQ5uMiFYziraiRMKQPhT1hWos6sG29Q",
  "key16": "3qLc7iKLMKH4TgrVMx4cm2WQ86Wn1P2ptajVETCABtZMw5MDcdCmYWBRTD6NUHTxMNuUGYY91GhQmemgo7MvMaad",
  "key17": "xWnNuvY5gqos1qKtcWL2WaVz92jrdkB6gq7D8PmXK3aQFQxxm9QZsHCKGHj1ECfdqcWFs471FnAJyAj4sAvzjjy",
  "key18": "3NqWx1p1A2XRrsKeJngM7b9JnprqT1BnogiT4nQCbJ6hTh8sJYGxDEFaAhwouH8bPyFbu9me4nBVgQAFJ7kEhpvS",
  "key19": "3U5W68zVV2Mx2sh82GVXuV2Hort2LxLbrkxkpG21cv5chU53S9V3PmkNmSsfTHeyJxEft8scvqbYokioPUCvB1vz",
  "key20": "48NNNatKTpb8jY6kxYGNYf7NdKJTgZzV4ih3Q3J98pYYevRUNChvPnVe8n87TSq1eRwK6dSKmWcuGLimxS19AHSg",
  "key21": "23ePvHy9SqkTa7MJ1mN3KX9eHhAmH2bfGAshVMhFCdMdEdSRJo8NHifsu4MBbhakL8J4aC7zRgr9E9By2B4cq1xD",
  "key22": "49imToUnUZ1cmTzNwNT9JqfdAixJtkTnuFLRdPpZ2mqGBsjaAfC2b4z3JGmiFSvH5s9VpzBPgXyAoXXGpRJidwDc",
  "key23": "2unpFCFbWXEGLAQTbqtn6z3CBha8mvyRiL8n9isAuHAALLvmNkXHz7q9z3WFqM32VW9XFUam7LGKZiyetSLXS7xA",
  "key24": "5Y5r41s5gZzwrVnoi4MhPp2WKfttZx1f4PPQCZcK7HsjQLov9BgRzNFQM7sfyoNnZhPpC5Wdyo4ZunhRVmP1gBzN",
  "key25": "5AVbCktWZXTWz2DSYupxajgERG9CFPchWzrnEYSqeqDEgNV99NMtxV9s9rH36U5KZpiJpvGDL1KQ7LtThGC75ccs",
  "key26": "5tG62n6GkwQCDEKBL4nsTTd1EpGtMmfX8JWegp6wjKuioa3BytzYVnHZPWZHMrPUcJRxLQc9KMYoe5RBuRaV5syu",
  "key27": "5hwJLRQpvJi7tQNjUyz2vSEc4CSzoxGzdm8nxtKAJL7MRmv2ThJNiiS2kAJVD3zdASnCstqrcK6mpzsh86X2DbuL",
  "key28": "3q23md8HhuLHZ9Lyp1t2YkBP4WgKTqkuuyDyJuthtYYJjxg9WPterT17XLorDYtnMovvyeCtiVenysJbMSXv7x1D",
  "key29": "2CFhNba9ZuLoQFPQ9boNaJfp4C5fw8i4GtTGv15ibwWfvvrAFGJQv5iWykEiZzRoqXEGmf14CeFYZksiz2Loiiwx",
  "key30": "3pmBAuPgVDNprnhNzUjv6e19oJ4ZD9E6hLxXtVfb8dXCLfHGkWRr4MiwsR64ejXf3bzSz8ZHFGbj1NwW7iDRL8Q3"
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
