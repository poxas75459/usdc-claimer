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
    "4TGD96fbyqHD2vXthQcHKaDBnDWDv2PK7sH5WEPA2hi2MgCu7pWrokmy58js4GrsMYGcsVhdiZ1WcyKxuqU3L87B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mu7aw6iw4tUT2iEYbtdNHeD19NXhLvHxDMbzYW8ThUjuPAm1cZ8cSngduoaVFYdKGT7Lm8ugoA5DuqtBqRUWVU",
  "key1": "2EH8uh2TzY6if962yPwAwvRpYzLDejU7FAAySW9YtpjBkkRhMgKWpqBfAV2tZRaYUAgrL4oYSeXUC5oD4PJqLzRG",
  "key2": "2hijgQP2cWj6JJQdsaCsAkn92ER9skAz1Fo66Dn48kbJvniAJhbKbXyW2iZnE8nujFTKwEdEJuk5t7QB1eWpuya6",
  "key3": "2s3q31vttGdfnUBD48UkmpsQw1qhrvyVKkQSgmomJSudHWqMCbsabxV78z6Bd6z1YTXWWg7HTzarxEcCMAnBhuzt",
  "key4": "4K5KcYHr3G8pSgDyJYBfoizB7VrESynM9mjEGJp7NscnY21JWDDcyXeUdpYJGtWLeBuGFE67B9GNW2Pr4ZcMNi4k",
  "key5": "nhG77ooAcDvPYCwge2G9y8AY5SFQUDqdkL3mQxnBVgpPDy4JcFRXNSCjyhKNmLpUwcDEPZUms71U6EN5EzMBHVB",
  "key6": "5bcbkphJFYqVLR6X6WknYaEvYXqgUqLLGA3sMYnktaSwczJjwGWLpVH5RAMp8iLHbWeEeuHKjL6eaxodiWJXMoVM",
  "key7": "4D8Dgii7fuXogRE1Kec1TRM2ZNQoYsyqufMy1AfdqDa4v3iA6NsWSub7Gp81LPQX8jU6isw6dbpLzYcZ4PqomCHn",
  "key8": "4CxudZmtgxEzZnqCRe5Pmwdy9VXYkuSjW15JU7S7JGA3kg5Xug3MfL4E8JxcigP7KnfQBMnNUvojbMw2vu47CeYf",
  "key9": "3k7aUUqdmq3xHh7Z5mnPmrtP6aJfX9yixshkFJWoextrHPMZaPf9YcqA2mHp8pyojcvu4vG3AG6jJ1zrnaZ8ZmD5",
  "key10": "zh7dHyjPUoUWM2fwGPQtn8zu3E54nonPXnox3CKpvZRnZQ9j2fySgg8Aoyq2AVj29XocFhj7GNpeVBufPLupMKr",
  "key11": "sfComChMcWZmFSTwsEPCbhzfiYnspTsgZfNqL7sCTz2EdhfqpMqTmSEcDU2yD6u8o6G21aCAYFWXkfTyskF5fWk",
  "key12": "3LA3J3KkFaX6mg6MvjJsaWzpNJxBRCfz6sR8ri72nqXo2eJzdAhkcpYpJtonhYAtE3SiJFSiesE17rCaPoRANtyp",
  "key13": "5jUVdegKbRM7tExetaY9nveoxynZjL4v3DZ6eAkDsPzne1UxU8UztVxuZcveBCwhmNgNHEUGymppF776fpfMrqd9",
  "key14": "2SG2grbAUXYMtLoGQoato3QyLfRMuEC17qvGPzyx5m7YMHBThE5M45EKN9eiRzkyFZsMVb4kzgwfQ1JWCxMpa5Vr",
  "key15": "4cKo9jfvWx56pfEUMqGqVynF1KVU279Aby3NpbPYJNXoX6zqb4fUfdAr3Zf5d2AnfG2aS7XhyaEpSpvB4bE63Wpu",
  "key16": "Bg9DTWNa8eDkakKnyTz1dmmoRr92qRbLhL5ZqdAKZyyNbew943hmBunsizuKvG2G1Lv8Ky2wXqrKeCyvP42TQdy",
  "key17": "9WCtTsebah8CyzEVYx51WyjvCwGaC5Ska1mTUtPsCGWHvcMMDd3Ui2MfTCjhnzAUtmxRuKMMRBxqV6KokWrrvQA",
  "key18": "2yFKqCXc6opHurgbUtYBQchc5nAWvu9XSPoraHpfhgcA4izYy89CqbvNrxLghXaNVV3AEkEVqHmCgjD8qoQ9sved",
  "key19": "26SQJhwbbrurTgSv9ZhUZ6GPgpwQewppBtzPWcgQGZvto7X3zBB9zWX9EPLfFMXtH5db6HaDqKJsW3WPBsTRwoHg",
  "key20": "3mhREXH8cpKoYsrcbxxGtBasZVSfQNdAwqZqSfi5vqCV6HYJBym37vKrM6HA3cw9DuVK3Jc9mWQEcdMpy8LLrafL",
  "key21": "avK3engzBZcZCxgpHTu9HhXfXtEBuNpsPEWTpCNQg34Dq5fw5RQZwX38j3E3SpgpJ5nPUhVdrx26VVT8SF3jKDw",
  "key22": "S6RMd3i8bwfbmBNXnF5Y7x6sSGXZz3QhNX8FMHVriHA3yNCDdMVg359TiUPABnxtQYJMvQPkZJh4xGHorE7g4s7",
  "key23": "3xDHdNDTEPq3BgLHXasMpydsedZbRwgEVNFvGRvRskawV7goVZcrUVgEYDDTJd2zc6V4pkziDjM8sDtfrZt6nYQP",
  "key24": "3ci75kd97tWSFLy6aYLmMr6p3dkrHNg4dfHDtFwFqpM5FoQZn4iCyaAvxMCW3y73kbosHhB2ei3atX7DD7j4QKWq",
  "key25": "uxSuQyeDWQStW8M5rt1KZuHxS3xdWQfR57ydR7LnNYSGJuS9bQc9JTR94AjCKNPd2ztbs1Us9MDfaBrNjPvWFu5",
  "key26": "2RBym7ffPeNEj529gyGDjYcmoJ4fTNqM397NyfRvfDC9pEDKhEt7tmtjC4vULu7jZDgvKkdbXi3YozToPQSaKvPr",
  "key27": "57dQMk8aH9frJcyPRTndbS9CZobR1fJ96kTte26Td68np8c9MYm5ZdDMHBhL5vqu1LfPq3Bm4wWRxCLoac9pQVhX",
  "key28": "TMzQYM6g5A6bc5JYX4xXN7JkaKNBC76RdAZcfMbYgDxU55yBfDwpgtbuXAuxmPCz1zJpeYvsioHWPGb3XX5mNXv",
  "key29": "3YnKvpQ1p7xJSfQVPG8pJpR6sUkJLb9jLhjzZfDT66p1BSHMzjSX6AfLWGH7A7zoTrN8iYkVVzFsZwqeB7XRn7Qn"
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
