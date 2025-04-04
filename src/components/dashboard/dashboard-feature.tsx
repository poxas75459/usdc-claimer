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
    "uTSQfoBkwfQuJSfqq6KMeRMdq3Vo17jCf3BpvXo8AWMKkgPXrAChvES525R5QrYLhWxxoCRjHgccVxBA4Tvy5Ch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n2CV2BbdkURGZ1usKtnijvFER1YbGtsmqJitQre85qPdg8kf1TNHCt4FiLvi7gETDWjmEEzUqiGaogCx4bAHtub",
  "key1": "5r3gTydLb7kggUyeCxfjfbTwguLJsqqN24oJn2cDJWzeDYcWk8X7XKB69tptTbkJgXsgKgspGcwF5WxC5wZmFEvP",
  "key2": "41FBJKCUPm3JNVstbmNcAQsNwTPorSfC9a6bzbzMFwBWpNfvP5wfrTCybW98Bkbx33NwST7V29hNVU7KN28b5oEo",
  "key3": "642kFmtZ5ZTA47ux7BNGViCLzgr4USYXPrpkA7WnhybGdQLL66dMqb3QpLG1e39LhJ2Twp2TLxodNPXHFdg39DFa",
  "key4": "3tWMrxCmJZYQhJwKxJhGgEyrKeoEhQnuD96soNoZ22e17Pu4WwpkcytdW1v1jzEXxBKEVBvJYGoav6xLDbZgbC5t",
  "key5": "4dLiCaXq1ZAPmhxmzCFtm5SjLR6GtFkbGhHQXN8uNbTHqsHbsvNiPsWfiANTMGwoLYsKsFdXizVDXqudg392N7Xb",
  "key6": "4WYDC8y2sSnmUadVWxncf5qfKvRH4ouPmHwLmKz2htjADY38qmwfu1HWXNBXxB6FuhmHVGbjGA6Mn2ZbSnopkNdv",
  "key7": "4frSu7DMvo4p36WCBkR9tjDUEfAhE5YkhvgxcFi4Ujv9fEn3xGphUqz9ajAtzN9kpVkuFuMN2sXtXq4NZFfGacjm",
  "key8": "kxYtCswKyKXtdgUFWzQziCZdyx49fSiBaGzU1w4779G6oD921gFLvnZ8c6DyibpFBTCjkt7tZiZqK7c4PD87GXm",
  "key9": "2KRS82aScB7dzMcHf52iSvZHjjSEZnfudKFpHbkkKBpkhRUmfZ882YCU3DSZXUMK9yDwRfnFDNVuNS8YqpP26zfy",
  "key10": "4u49srwn5dYBh9GUxC7GfDRWh96f5BiYeg7rinGu2W8NQgk5iKhFzupYiYmPNCf3xbSUXv6QEU7G7LevQTHKSzHN",
  "key11": "33G7qrJ7mHonSNZh6abbFNdrmPp2uahUVsKvdZud1Bk9rHa1A6aLGc6X1S5ktg3YWjQr1pmHi4dqwQUm6JsqfaMq",
  "key12": "582Kbfb69f3aLBUkokTezMLXEKhkXn8646hWAypXhJmJj78GNk8hK6Ze9Q1NpUUAHdGQJYgcxD3FszNcD8kQV4eD",
  "key13": "5Pe83cVs9wSyz9qggKT94x1QR42oFW3dBymj5ccvpu66weW2E47CRFx6M9M2NeZuBK5uMJGDyyEjvTwU2rBXEpPV",
  "key14": "HnYQWCMiVDCtr3pNZFyTwQXsquwXTPhDwLNif1JT76JUDHF7pMohyYLRKuuEEtNV1A4JEGdy8Krmrobyjz7u36E",
  "key15": "4hv3iJnkgKxMXD8Qh1fcxsjvqSFJCoU3bvRMsHYMEbQNsyjB6UY2Mh3drWQVgwQHtPKPgi1N1zyZiCqbL3oEfKQg",
  "key16": "2K93R9ajkZ8hWLRGp3poR2tNFfsJzWR7A9kiYmKFGXJqejwngx2mgUq2kZ47prYbLN2FUVLk7MV2xcZz9kJPuEaN",
  "key17": "3boq8j4hRt637Dp8BhYXPi1yytsjtcBKX6UhiKDHRaK4r7j7BVS33xB2hWumQ2e6T6Z2YKamJbrZPzMT65YZVGKt",
  "key18": "3kzXLCJXzv4qKvPwAQugatTLjVaXZMAWLATadUiypULtGPBzvDAA3wrJpShgxxnwf63aUdDy3r621iu4dEpfg7oG",
  "key19": "4swfq4bnQhFfTKrfcsxYhrcZhY8VG4NnnxT7cnF2Jr9wQZLky6DNPcWJ1y5JdVqB5DgJZJQqoFeQ644zwQLvHMbh",
  "key20": "PsiETARjVtPqQNahVYdJQggBpEHEJfA7nD9g3BCwuBuiNALE7azGprdUqcJPVV8zEemattfsjhLdKuTVmuZYSUV",
  "key21": "2JvftSAQyqyRAzqoxeoYH3bwwWENqobyscfosJodXcSFiDcsruSpjYYbkjz9YC2oywQd94o9FL45cwcsJUVc9eec",
  "key22": "Ejv2ncPBawG34TM16dsBCnp6GFSDNm841qrJR945Cv9GPyxgkbHeCZEeSV3HUhdV4zJcbdaByLqYxnFeEwXXwsz",
  "key23": "Lfjt7QPErknUPXzEJfMLVwFPqzyNaaHTmiZrBpcmrUztQ7xbXZtBcfQ9x2WxmB6ka2UehmCbLMBGuBpHkaRYLRi",
  "key24": "5P1khpzrk3V625hkoJw7nP5g6ogQ6YFaRQcym7SXiQKxhQuyyjHDgbvY8g46ZPDQUHgpGNHEjnjCFT3v32T1USyG",
  "key25": "5aUjxPxLh3wuMHdcE2ZUKnNut6rGAGDuq7aRQAre6FnAox5aRTkPRWYknoFWmXiWteLLL8zEH3SMbvhG8yPdwyCW",
  "key26": "2x35x2QLsQ4nu2woG8fKnH6CgRqYtZDJVhwj4hgD5y27TcKfBNfymyGRuSVxDEpdoyQnKFh7b7xuKohwjeyTzfRJ",
  "key27": "ToqvZfesbVdcBnqutW2ev6GxXUdQkwdVMczk2gLoLDixXCZDPfw7Wh8d6KdGXQmsimfEifR2zBhMDtrpAaFy2U8",
  "key28": "5APr1peoBLL784TTdBeKWZMhyHDAfbJDRinBKQCZzMCfxkX99nZBdnLoMbimeVofZ9rTfNKzWrwoXurntGCkWBvg",
  "key29": "85NDGHoB3UFhgLfsd34zqH9sYr7usK4UBvTr245JwNBXuo2YPJdJUtATqu1XhwKnBL52gmcMGNEt43uFL34axck",
  "key30": "2zaRDDjm7fYFg5xnB3yWhXiNsAcfjFV1KmzaZNtMbYDPGttx21rT9XMAH6yCh9vcEgGWp5o4abXV6qH3FVPkbERe"
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
