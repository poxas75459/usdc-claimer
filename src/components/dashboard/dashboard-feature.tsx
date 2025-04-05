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
    "2p1TDMnaUkYfkkTEShjm8qsQpBYoUYS6pZzNVxkWbWeyHtktCVmrXf2atsnqQxAWwro9fTqFHEVi4bNv7LQGrGKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43H4wkusL74xSAa2R4KzhpysssHFGtTsJSTnFTns67jKruGFTCvXjMNZnbPuwQFCsUrJbb96cH7rcYPLVoP6AiYK",
  "key1": "5MdLmSWufyysMtQjpBGL4gd1rRC2SL6d54EP4NjMNu98Jn44H8Vh9Epcvu6y64dNnw7qd9yfws3GHbBEBUjjMThL",
  "key2": "3G7XAZycvA7eMpv6nhkjVQTtFbaWfXkgnEhLDgFfV1VHVEENyczKAKSCb3AU9SCEVkR5hogTbZ8YtHv8BWHGxmin",
  "key3": "4GKpAE26juQQvNLyvotMwRG7qGcsWba4VRXxmm3z1nM7Qt6KFycojXY6aTf91nFg6YDnHobLX3aFYAnpwSuZ4n6w",
  "key4": "3Kmp8Kx4upYi5XWK155ijm6CA2rJTWP721uKP8jnrh9zBLxpxpR3NoGeES9zqALX1H2m54E8xB44oMiW86SJMPWH",
  "key5": "3D2tYix9CXsF2BqunbXc9SE8JzjDsKjA7oZGQ6DbgPyvcMsuTkJqhTzFWLhzvwP7nvokgFvQHndmqUQXKs43kB28",
  "key6": "5rWzoVYrQE1usUMQhXMt65NTjd3TkR9GoXi6tdFH4bTwsgsxX5nDFoPMkyDdi1QLPYkRs2kgr9HxXPPQfyCW8po",
  "key7": "4XxnpSZp5LAXUhL8osegCH9ga9ompiLm7HKfwQT7JuGGzV1KCCTAgTbAnEHjTtQeVjPVAv93uffEp4n4nYsbUJAF",
  "key8": "2N9fbXv7i6oqDZPQ6kgrNXZngjywQ94NBRvxp1KUDGd3XeoPGdN9xZo4MZLyUDti3w7u9bjwHo4Vhs2gWpGSV9oE",
  "key9": "2UcJiG8hMuvbw8HEaKx2FFdmdxaZHmYzj5TmRcTK28m88RL5sZcCvTC3dBcFFWFoePuDaQBB8TsBQuGikMUdk218",
  "key10": "4TiXh4YXSamYh59EwBfmz4VMCfTZu8WW3GCchRAHkjgmqunZ37cpNpHtoRodhLVXZ9WhvtM65pSFEhPCy15YKWDr",
  "key11": "3poYqaTCMvSyPNwUZ722wrLQuahJXHVWHGm7BfNk2SCKJM1hq2BbJ442pPxHNPLJ3CogGW3sPWheKxsm3MnefNkN",
  "key12": "QPfhxp2qi7mjCdhnranuDoH7dtjn26CpQ6jSpbjE9LkGbyfvHzYxmThgsw8j2aT9X1EvYphdd2UTfhd5V2JvwyB",
  "key13": "9P2xYT9PL59q4JA9m179wyZPe6NVk6F3jK6uH1iHUpkigGog7fUnVbNhf8rZyohJ5qQtRRyF3raVANUsoqWqp1w",
  "key14": "4diydcpYToryTLwWhFYPNeL2wP7yv2T99DC2UtnYYpwSyhRoEuWNsk8npb7FweiP7dT5U8LxqeGQzKhbgseanVLc",
  "key15": "4wG36y2aGd3F3WUgiNRzYssPALxJ3F15U4JoagaQ9eyhmGsfKAR2FSVP2FxY6SFtNHZhwGJgZwkwTtYS9oggWFzS",
  "key16": "3RkwJPZCGznydiXBZ2NmSsbC8unY4GxM1UfvpfarAruuWfxrdRe7WXfbwRBTJq9cLozspQzhaVj1BWcB6qsGow1R",
  "key17": "3uQwu1aAtFXREVpDdmoecfoRVBcq22UqPCCTka1rVnN6CmdVoq4Jx6xXSp9WqJurh2BDPgHtkeyzk6CnEC8gLG9",
  "key18": "3mFAZWF2Y8N4u9EkWJSXDZwyv8wE2eZNwWmh89o1JMDpPr3zqYXYFroaEqkeN1wUUw9K9UBUYnwFZKf5j8CRumS6",
  "key19": "4ersFS4SVfRhUcjSDm4B5GhgcMaHcuyYB7p5ECY72m9yzCX7asT7qtynJmiFa3eREs3CKRckdc5iXE5SKopywRek",
  "key20": "3mtX7NHF1BgioNLNvpABnJMwnXQ1zMLaNjn5nbhDoBYkdAB7tzSw7NbUBp3JAoQqE8hgzAJbaEf7euYseSypTp7J",
  "key21": "4YD7Fzi1VyTEY6BHcutL7dfaL7j7wJzUFYNpoqzyfa4Tfn9givmCS8sW8ZJh3ifrdVh4t9giHVSZq2WeSDqhK5Rv",
  "key22": "2UUAjVQs8sfYFA9s7Hf1HFi1kgVW9wTU2mEAbCW7N2JEFqA443djXF2ZR8oos2r7F8qEHo1GzyfrocbbANBLqZvd",
  "key23": "WGSmM1ErcPjPsMdhs6BLTx81x8fm8u9qNm5ikVMc8RK6xvp3nsyVr6nbVHtP3WVjFVYKzyYu63QJTxhYwquj7T7",
  "key24": "4J43FYQHaU6zo9tcRQ7vR2Ys8BwixUsQHea1bxtDHaSnDii1ppPj2CYNukfM8t3vBwC9zYh7r14Pz3SmmUWpwY8H",
  "key25": "47vy4jxkaQKF4K9YyRt5Exm6J3hw2J1ifywbtbEtEaUGeAGGUxdwLMsdXjVN5r2u3dZAC9XPxdoXEN3BRW5k7FR2",
  "key26": "5983Wcah3Sr9aGz5qYCmUiGUUngfRrKrux5s3r6rVvFFKvGTgKCQicZbqhDiutE2Jckqy1mHe1qY9TnYEEzjJ2Mo",
  "key27": "5EcLwGY3Zpr2TkJmTWnPJdoRqCQDFYa6T44RXfWoPYwkAmRy9xrWiF2dcT5ZH4ojNyaxYSj5LfhSvyyoQhJd5obb",
  "key28": "gttvUJYLVmVCuBtZSqrzAry95rmsvfyjZtBQWTWSRCxDVJvo4hy2JY8m9mQ9GS6DCPVQKXWVtJyKZrLa3o6YuAi",
  "key29": "3vdFzsccZpbY4bCs9WJkM5ttbrKfjf5hALev6eRCzn9VKRuFCRrnkxzFHWNAT2iSSNqvV6tbtdHMyYTQuEYQmrTU",
  "key30": "3aFz5knQrtdv4fwpbtkzrWoVth64P2Q5eStocsySD43S9Uo2pWx1YCH9WAZVLxR8dMxzY4dQjsrJqzqKjyXpR644",
  "key31": "XttdYaMZJUJyeoQSS6AoBBf9BZLZqvb4jNCXc4abXRbm6rn5duH1joVAmVud8XTGB4E5pXx7sv9ZHDF7VyEPDY9",
  "key32": "5xcVqEPqp4TgoJFMURiYyVTanCMVdtZsb1zsKQ5177raq7fQwJmCo7zG9YZGBjqLpzUmgR5iPLiinMKvFvJZWQVm",
  "key33": "4XaWZ1mE288AkpQCSrbAVMBHQcQYhLhci7j6hNS6Ap76K16QfoBJd3yP2GxVazpaUVgAWJGhvHLDyRjEua2DX6bk",
  "key34": "37fch8T1wZLSRQa8RyR8tqcd7u5HFf4BgaaPf9e6k1A4LsB22wtxSt3mn6JjuMcYg9GxxQW195MnkK7p9gQCp6PN",
  "key35": "5dRZLmJ2PecJKYKd6BuMxEvWmy3YC94kJ9FRyyQSWoyqGaGERBvqposwdJJX5oadCY7yC5pgXvjKJdtb8Ndr4NCd",
  "key36": "59ZiCKBde1fvp5saf6h5vMwFVoXqTLH1qY34gX1aovXodXiip8Pou6YZW93WRRN7YxF4aWfksKakYXBBmEdFXaS3",
  "key37": "2CYSyuDP11vyA13wSVWKava95ZRvBpa2MRYqSgBqhGFpvXmLVCWaqpMZCh6oYCi7QFCct62q7j9cA9acuMY7CYGw"
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
