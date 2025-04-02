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
    "5vsuEvHfucbpVSMSa2Fh8eeb8neHD6iHEEULtQYTLPCD9NGJ6QQ4moHUsdDTesJ1AamcuqupXawV4yTrWgz9BhaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NTqbcdqMB4SU4d95A63uLQc4VfQ9DGPcnCWhrZY6f95EywuDAVeuMK5BhQ7xxFkkhN2dCh1LANLU9XThU2gbVbk",
  "key1": "4bZ6s2gGoQUrvhcsfr2V2UtTWNjA25aWNSBL4o3yHXwbkpFKatLWSP62dHsrv1DPUhvfY3ewWXuHaLB8DNJTTxc1",
  "key2": "5x5YdgetyZbrNQjW6vgQyLiwKV5V9ziw712JVcSir2PuWhcszB5VusCpkFiHrjTnt273aDScph3jnr3qESmBqEHw",
  "key3": "2VWeLccXH5wmdUqZ1hQxGyoiQusR9WrA1gGYhMCBZZn8Aer7u1C4ewGMW3z7riTXd3HQsgXWR48SeW64XLQnD1xQ",
  "key4": "RuPEuUYDpXuAnLhmg7NL9TLhhUSKpwyVhY5qAze3oasyDWUzUQ3Lm1mtyDsrLQXRRxVY2wTYYSCdJtM6zEEBHzA",
  "key5": "5ptrdwEjJNK5Rqebv29HmPmNenDttK3ZfXWob6UzfmEu7yErpcYURWTg7pjsfzPZRYnL1iQGo26dLmcXhNG36nMq",
  "key6": "4HYkCSJCv5vgmY16FvG4TXddsrMcUizgn9uZs18AsysqiYYyD3Gj3kLgfgZSRXh2usv3SESELxsXjoz4bBKWheUP",
  "key7": "63MMkRinfHZjgP2uWPksCfjyjg3aKzEmoSCJSodjaM2fW2xQ91QVQa8rB1hV31xiUHrZHboaSHSk6tHrtpREgJUK",
  "key8": "4sAHztDgX8YQ8kFd65cxUddewySQWyxGcqx83xHcQfjdR7BZoDQoPEzv8pAAU2zVf6b2CtcvEUR98USyaRz9wu8X",
  "key9": "m4G3MVYLUc1FW4F5rzHshhPUNbx4Zw7SDAKHeHyUTbVnRHNNRdV9Jp1Jaw6X3WpZu4XXJWRhceW2kqF1QBGgGGu",
  "key10": "2EewpTuQ1ewAbDw2d55vAYrursx3L7KtjrpB6mGs3AJQznpK2MhvrMS9y43d6icCCSzRCfawmxj51P9XwPogUeiM",
  "key11": "4Gz8WQSPePJ3Vmp7fTttnrgwB5oj9oBNTjLvUsLXKs2vU7wDasijLoPiNqf3b4An2eZHhwZcAewcD8uSxKM1oiR7",
  "key12": "5J4vnjXt49ah92XX2f3yWqbQ4FBxjt7WmAyjYoeBSfnSkQSrjsTjL9YUeX3knhsFyV4aF5e7CtsqViZgMadVSj8q",
  "key13": "3z9itRLhAAea2ZZ9GgQcGyyogYxDzugcVQXg1CXRWgeXvp2Tuh5HDV8kmLkQP6wFhmywu4MRCtYWa6xDcfXqZpe7",
  "key14": "3Ja42v1bg8Cww38c3Fs1RRQKqah4gnS8DntWL4VQ5sMHrBU9cfkyTrVAow7odFitJsdUwwTYhRo3vo8rRLbsX8Uv",
  "key15": "53hNcamJ9yZDaLcBkuCqqSpGWgKU66h9QkfyLeEbtwat2EXegQ1CRHDj3sFnK1ATczCXsLpmUiBp491cQrnx2KZb",
  "key16": "3SMr1coyobC45W5yPY9UuhQjcWBLrsu7MVcy15mmV7XNxXrBLjQHDG8jhtWBZetMb6T8XSsJYJq9SwS22x5cNmio",
  "key17": "57YixXE676HafQRmE7AgR4bZeFV9LshiXUAyQyZQsAVSmpnr3Vo25M4Q3QE5Fkq4HVKeB1P1jC4cvCyjZjaz9kni",
  "key18": "45YYwNyZmdZrDcCQUowKVfzDVPD4m5BbfWXDtFedga769wMqD5nnDkHBu7f13ymPqJ5nL9ycZZg2HAiy9FanGCPv",
  "key19": "3F4Rg5Ye3M6LQWaTpzJNkEqKhJaAjfXxNS4q4CAzUUogax9h9D59WwXzswJnYeP7LDUQqgFB1B8acQtRmWxMQTKx",
  "key20": "u2zj1ptdvPTNDyLBAbeoppDgT4su6dVjRUrZ2NcRXzjA44kyRiLHfykTUUjyALLEjvwL3JU1xx8F3pQAy3hLTvX",
  "key21": "4bzLwz4JzLe1SxV2f3uMm36aNv7vdqvcDuDZJXD8q3B2xBjXgphKy6V4t4eJsnqo4aQhop8v97op5qx18S5ttpxp",
  "key22": "3PHd622zEArnz9iey6dRJQgyNDNYWqSYstPf6KWQeurtDL4crWYnA5YoLUh2NT4bMyodxv8Qz7VVaAfQ2cvws8xQ",
  "key23": "259HtYrsUiqT7oQ8tC41DFC5BGVU2tiv5xjqz33aqQbmTCGnx7Pqqk5X1XhBSTfNFFYmh9eVhYLA4FtjyqXEU7jK",
  "key24": "35BphEYgap8A2zKt9gy92w83RjcuqXLvVe1P2fmA9NSdGVfQ2qfSuSkcYXQd7ETsRM3tQen4TvrhFxomnBKj71bc",
  "key25": "1ZmQxJcjBdn2dWtSVGuRE5QBy2nXSF7SNXujsDxW3kTyas637S1Q1bNGoWTkFdzXSYkrz2admK9XrRERedD6N55",
  "key26": "61A4VwASZbEeeH1v8Q1hSXcZFynahhr3EoryiuowEiqgWEWzYhFMhPhXdq7gx1gCaGxQFRMjpdXbrCMchHD8jSFx",
  "key27": "CVwFnxXNAC4at2Hobs88p8wZbFJB9v3ut59yxhcQ9BAd3mAHttTeUZWDU1ExprLqVFMup7jNAQeUHZhGN6mhLZ2",
  "key28": "4TpStnxdd6hvPyDuWnhc8gZ6biz15ZxWf3NnHTMQ1VTHbpvBz6zUbfE4A5vGrhEXnjgzfxbaxVHv7yz338yLfzw5",
  "key29": "62HYMNfwNyBdGH6jm1sTeEyxpGspCM38KGS2J3DXw9GRoqJvPztBM2GNQtfWc945BgvBrHBsdYJpGqQcZ9tfWger",
  "key30": "7CcRmiFNAsHwTPpvEFtGDvhKyari7SRmYRpXFRvFJqzqgPqYUkZAxcD2yygqPGg6Qi47dTrLhwLP5XAPTd6Ccoh",
  "key31": "3sHvR4fSCWUt2Vi9SSRReuwuZNFwxjKSmzANRpi9JaNhTVf1VtzYHi1PfTfj3NiovdK2LuAfvwfTSzyeXJeik3Gp"
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
