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
    "5BkW3Hd2gJG6pJjE5oB9yd3nYvxn93jDcNmoz87UjzjvEHwwHStJpsvjr5eML7ksPgFTFeUNAjifgwmKc9J6ZTjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EU8mhrdNfAUbZMoubcyM6qTwMRkSp9wohPhaHTmGgzavcmqWWYLyvfxAhgpu4psWHtWTanDF51RhGEB4aNqVNNS",
  "key1": "5hG5xsVDHA1c6e4zh9uJAeMN3Gix8LbqdKU2GBNBt8mgL4vfCjSXBkG8Q2pv1KZ3xMJNpFdZpN6z4tT53RCgxNds",
  "key2": "5CB1CkjJy3Vkxd8SuMjMvrbs3z8iGQfMc5f3oozfLbetvCFdDExdDSYRNjdMXbkx4EnrJMmGg5ScPGkfZHshctRA",
  "key3": "38XabYfcQRijYYn5DSYeyAqWgkvizohsU4tpdZaCfbUaSxyTQSW4yLo7EKYDmnry5sP8CFYoL8FJ9YHpGxczEZ76",
  "key4": "2MiaHMWefQb47o1uYiAAeqvK5R6DSKq3SX2qmsL2DhCfXUiP1zL1YQTcqX11aNi98KZxLX1Zsd1486YS4zqv1z1n",
  "key5": "3wic9zakKNQDnFwnj3YndoxoTYerkhWsZMKhSoDviw6MoPqBMkZX3nHjEXhdmeog9jiwc1fzVFHfr1oTArmNEsun",
  "key6": "4r6mW7obUG8cVQyuE4otZMq9QuFGhKtEiwcYx6iaWFuSfP14PHVVrLPCY5UAx1E4pqvm7VqsTWyPAsxGrLiSfH5B",
  "key7": "ikSggcVyUvULj93Qz5boP14tiKzpNPAEzS2NfbsQbM6j2rXLhFS12CE4g2Y3QNKAkumLoY7PJ2cyMtgivSqQwC9",
  "key8": "3pe9iZAutF9FEoeK3ZJdKtUKkMzV3nb8HX5g5x1yr1t4CugRSx8fAneURvEvjLxmjKAMPCU9pdEPrak7W1fqvPu6",
  "key9": "22Er6GXa4Q9XW58V57PPDTZNmJLrQWpnj8S4yFiBSMGZdP53TC8y9K4QYRXsmwvPBmx4idQ4DEc3xSt5jzFBifkv",
  "key10": "2pYUo2burQsNRBm3VPnkErsuaiUkGUNSmZn25MUGAXRSyGdazR44evbA2DifcGnjTbL9Dk13np7DMRPdDpuACuFo",
  "key11": "4KfYyES4kTcr2g4YPD469xEEJaJuLB1xPsC55CzWMxTYjZHJqRDAHryqxxHu8RQDUFFq1tXTH16wi8TnvzwnGy2G",
  "key12": "3GAtvJkEsFcD7jwmekvCxLHzfjd57GEHjtxFs5ehfu1rzH2HdxPGbDr1sQxtF3zuUsaZubpdoJ5NLk9poZKV6q9s",
  "key13": "2ZNYkpVzBBdXSHAnr8yYTdUUZY62gpmiATADVojjhgNRA46EmLkGiZFi6kBtPy5BcbcjF4T7zG19Pe76U5fWzycv",
  "key14": "38RRHX8a8tdDCJ6wcSWXiTT3hkxUtWfb3hCmh7pDXqP8FM6VN6v7LPF2Lpw5iApxf1u4Qpmv8FRWc41uZ3CYoky9",
  "key15": "2pZ6ZrTuPZUGkptJvht74k8KUDmURdQPzqkNNPs4vFJFWWB4zaSZfjW1kdP4tA5Mu3vR1ATzogG195WhF4ggTEea",
  "key16": "3cXaFMgKrPDsBEuquRkBFrNShKerZ5CjWeLNotZbEPwwzuDrtytbsK3fkDFypUyeXXBww6pga8WDaxbuphb9gujM",
  "key17": "VHhJP1oNCHKmy1YYiXs83kafa9WrZ5y5bgJX2bRjUuBUCMEitLtZ9S1ob3Umt8KxuHL9DxMwzUrRt44xuDP6dcp",
  "key18": "4RWrg6Q5K1LB2MEENLMtPU8jA2sQ7ZgqQAbWLUY8Ug3Cb6waP4PoWCscTjeTJPjw4W8jyHxhv6bTDwaZULn9TTYq",
  "key19": "3HQbu96bm5dHEsYeT3RNKLKoan3KmL2oAvfrGw5fb4tff4ZVYKheHH3QFCTpaReYbRkWNBkWqRqEYP85yvVXWHZr",
  "key20": "4eJFEGToLWZcZbqu7vW6V4SWHJgpp4GCbpFCZBm9SfGLLwK7iGbPgwA44syoVwxPAE98uibBaUPkf2sGL8azA1w",
  "key21": "kdBCnWaFiZXkKo3MTyZQUa1UGGWryhP4uRC3ZB9aJ4nfgpuR7mGdLCzeGrjkkEj7jFh1pctdv4RErJKss2dxWZ6",
  "key22": "j5ae8HtRcedzuVztvYsUHUW8Hki9fC94mAnCo3qfYfZYejnXQAqJja2Kd7i9GbBeLLazrJv5BtzkASYubNUHSxK",
  "key23": "3diAqCtJP652yC7DzwKFUD44UsFLKpfdu1zXJZ2Xz1SGVhrrcKRGEt6nHuXuM5hZyNYjod258yLpKx4hzvpTcLQ4",
  "key24": "5NYDQZhjcfK6Vrc9vxDzcV9uwk74Nc5CxPYVtr7P1529CEkfV1eUhCgB1CW6mLBCughbeyppiP4LAr5XTcHQScLe",
  "key25": "3EJjpE54wcumYkG4NQWPaD2LZbKb1v6ChVxoPKXcpy8oozZFiXMMH5rRVVc1pF5bZuNjgu4jpYvL42BxEngQXhEd",
  "key26": "2hvFAGRWkay1UeVYR2SfTmFoY3ugCjSQCDywAQeajtG3SmVMr9dV3d6u2gHdWJbzsyD4pnE2KK3XfP31eqwDHvi2",
  "key27": "532iL4D1WS6KjamWWz9tSac6n9RGfsQhDh2N7QN6pFmekE3AaFLcPhLtUE6FZLjLA9P4hcq8uitRR5Th5H3vk2gV",
  "key28": "5WASJWncQ7jrtWoNWGMDGZGPs7ZuPNcAkwnWwbF3Auq7wf1w5YHGe4yK5aP9EykFNE3uev8SVuTsusrtSWJHbp3o",
  "key29": "32mf31fRsHrqMG5pnF8acHNES8nByB19i3C1V8vtvAsJM6pRF5EQ7NvDkFjZg9cfHsemQtNjMk4GTwbWGrYxpT9V",
  "key30": "5Sw48U7pkhfUcyHBuzdm3JW7du8W2cFRso3VnnZCffvtpzaB4WoBriAmpys1E46cPmGDE4xJQpYhoqU1ov9iBQcq",
  "key31": "y9Nkqp2Fq4TLxdh9HCXy47PBzNKwhaakLgDuhmsCJekfHvYRMK2xUbskrqDaGDbZ34oDKdJGumqmNZsMfv72RnE",
  "key32": "4Th5fFkRMB2u8uiJDPcgcowrbe1TJmuv476D4KUu7oKkoogE2nsWthvYeSfokxVcvfobuVbKYb8rMyPr8TUVQioL",
  "key33": "hxmj2te7PVuo7HHvtXgeCHyEKvk6TVPv3kFSogATU6JFDGS51EWF4DUCgwNEsF7GEJgns2F5xt8pzg5k9CWmKmT",
  "key34": "kBnhSdtrtAPEPyhmDz7Z9Bh5hwTMdTjz3ddqowicWW5WmrgjdsB1kkgZkNUrqn1roZZrBJR1QgqarsfRhi6dPHH",
  "key35": "59Wfw9cBXPHo21hBeDobJBcw6kPLzxTDgJdG3b2zuMnHeT6SFF4gPWpatyiydT4QVy7rrKRb9UnDupGEkYLyGotp",
  "key36": "FCm2vUKooPQbYiD6C7EH8nUvHk48WurWBK6P2xjtT11atB4eJt1686FEyPhfcBRe1ELoPjHX51Sc4V7z73SacUq",
  "key37": "4LKMXR66vzGF8E2h9vbWozaY9MZtCwhNodE3DZpz2odGwV9nbkpgCncf89XSeD2ju3vpUprgqt8Wi7o2spg87qJM",
  "key38": "5T3U6aM8JCtts4NaKX59wUs8V4fsaaAyeGDHH4nKHsW4XopD7XqLhHYVRxBNVarDNZJdS5WToG3T8pBWnr9EkCZB"
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
