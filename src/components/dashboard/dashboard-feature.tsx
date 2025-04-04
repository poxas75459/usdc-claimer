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
    "2iamVY4hspGYdhyB7wcNgTd7RiFVSq5STctQzZ66LAtz9cKegQBtJu2bjJxdqyTi4Zqu84pRWYLTVT4CP613o2gg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RJhEiKFsfSbLf2HdEN8GuBUWNw9Jyn7G8fxh4ymkbcqBPa4LJdS1HKSbuCSNhSyeek1gXwFZsAUEXM7oM2yNVSN",
  "key1": "Bp2HaF4TtpqZn1YMLtd5YsNbNMKk6R17sNzM24Bx62uChM7tAoMqqtBXfiYPsNdPjpGBP1HPNcJUCadmvcWvoe6",
  "key2": "52askx7JqDbVDcA595YCoezbFJfCLpDa7XxtBpDFi5oqxvw6HYL1swvQ52kDF7YzPFDbb9nNf98y9DcjNVBDKJK8",
  "key3": "3Y4XNPWLWSz2gioxuGumPsM8m3r88zZRi6b9MFiiBoyLdQfbhFAGSPYqh3Cg4zo6D7bNF5jbSMhK8GUYKM26VtwP",
  "key4": "49rZwePj1a9aX5WUCtBKW3wvncPmfB7FgfrvnwmYtJTYME8cp6x2jytJigcW6F9Yokt6Qp5xFiyWHdcnLXkfH4wt",
  "key5": "2pbtrwrDY6y2rjXiWwTKB8ohrbCZWrRtqxHS8gfDqQTRtYJvNv4BX8VaYMzWWsPVd7kBEfw15dMMt3rgD5fHsH5L",
  "key6": "4Q8V881THAuM6Kj7wtggbQnTUWTKz21U1kT8chvz88xhxEbtLqpGxpZNWu8VUGRt9EJZJfapYVnq2MEdD4w27rYR",
  "key7": "5Tai6iNkyTEJcFYPsPKFFV8aiH7GmZp872pxqkJVix6wJXDZBmo1C8TdxR1BVpuFW7RXwf1G79ViN1guyxXt4wpw",
  "key8": "4YbL6YNt14HbJcARfpCJV5SySyLvnHv2ya43dMUqQ1if4Jxwh486ExZXYQx7KmxdMTWuWGMtBjJkgMs3dweEj3yt",
  "key9": "4MGtXxkapFcBWnnZKA9AhgvJtfy7fZ5cpu2iJh3om9hKz6FyQ1Hn1wgG8ngarRHV6jtoa6aQdQn9REUiDvg2xRHi",
  "key10": "5MyBehPBGfAHqcMe8oKrASsbsVUqGNwM3G5PnGoy9TXFGjsirTvF5Z6SzC2W5o993btfPiC1a6JYSf82MLahazQg",
  "key11": "61tyapQTiLmoHHiPNgAhkVU28mSYtLbZSVBCskEZzMgX1QZ5ahC7g4uit9p2YvEK7NWfFw9wFeXWbyPb9jL8Sfje",
  "key12": "5FeMrJKRptrxHC96Cg2DNLHabRMGZpUcSWujQUvbiw2iSMDxFiX7kYbUbgz9Gf4npsJzgLjjma5A9vQ2cKguN3zn",
  "key13": "2W3SqiBPcp392ACA9DWwJNF6NfmFmYeogAh6xENn3hwmztqpQhdRM3PxR94NB8Y5qFe736sf17tT3Li6V2uFxDVw",
  "key14": "3yyPWWMNbDUhTiutCuoeyLo2XEzaTptZXnGS6FWzXFVeFnFS1YH9VMxuSbsGH5o6R4NRU2nXFUeZCCMUmNKDSeXc",
  "key15": "37CCLWCzZ4BsjG83MdzowfxwGHhpkfpTC2jfDzKa8x9fvS5qMpgx6AMa5w8kYMLorYYCk27AN3LWPdeuUfTRVFJL",
  "key16": "gdxaBQSNbKjQcn7cKTrHgcAX8Q7Kk7jNCr8rENmednjmYiyJbF8RysQWfFS7x66UK8ZP6DmFQ1wnUHvGgu1otug",
  "key17": "ods9x7NQjENK8pm9YZeQaqM9U3nWabVN5hJPPfFfzpTyKnKQp37KHs3JHXY851H87KfbKcGe86xc782nmugYfHq",
  "key18": "32FDxYWZcxYwyFZW2ExwPJGWyKsiEyzUXS8xzgN5Z11XJ3mb4op2Zv6VJGqmTWgY4RwuvmMZgPYqa2iidoXKZ5zY",
  "key19": "2bCers4vJN4vYhwGya6Y8sheL8oLGT7oLgLaMxSAgSmd5sk7GyWgF57sBMwjCst7ftcHYGqBMoowrkQVBeeEX6UL",
  "key20": "5vZMqMD9V4mHVnX9jvYMqngHyde41oYzm7pnhViqufySGxLzYZLEWRLpgmVBXFLGnu2acKyZQQTUFXptgJdV4Zw6",
  "key21": "4Ej9tpSJXedNhWTjyjhRuqDu361ufdAvH3dJwM1Lh57pxEUF8H3iCwXcNxjh24Z99W1Rz7sF51cBdv2A7N9A6GsA",
  "key22": "3YpzrMNypJquq2YNDswCxqW1ZL4sEh9TCjC2qcYBoJeWEZNoLLWyGJh9cYqNhuSSwAdG2JKK3cqgjNJMpodPjnsq",
  "key23": "2W35WtCiZ13e4L6tgsG7gtrEzsSg8cmQox8ixMZkT8G62V1RBypoPqbjDiRwuzUfvcoKyuP6dgKKzwdFYknoqWNC",
  "key24": "3VsGibhPuha1TLXwn3L2tufJtCyDx6WdsjVqC6Au7zR66LMYVcHvmXepKXEiYuCF9xutkDLLDbbYAV9tnLqVv1Cd",
  "key25": "5bkxAoTTXwKzcPmVuqWf6ZXYEUGbEXjCQPMazkVhwvftULTcy8wspGyqKxxQYjreSs8maJxu6F2LfTc3iGv5s9HE",
  "key26": "4BEX7cSt943afFSYEuhJKsccqjbeivT8ophbe8g3VydHXFMq7hNdVaqnYeSdCYWTNgVvcpfdKvXfrSkfhbbWdnoJ",
  "key27": "3A5S2vnawqitxiVBJqK42dQyMP2X5pDwDR64dCPwwmWrxkGhcxb6YykzEUWumRwA7wEHzdHPjBp2F1SKiSv7XVZX",
  "key28": "2AMiiQsCgT3pxpD52pSCHaQ6gNR9D7hBeyzvVBat4yonMf7bd4RSKznb9wTbvhfwa4mAs3GKT3tDhdsckCQSx6pt",
  "key29": "4VhFxZriyK39oo4NKEyuut3cX45kxrWXuUa6Qb2NyE1M2Nq1A9cxLfV8mV417hG6e9kbGK7HgryJq5VLLZK4PwfJ",
  "key30": "2mEjbbabKSZBUz7WVd9wgXB1nxV8iyJzWw9P4p7TbawnrmUv1zF4QCPeF49F8TMS8FhvYb7xvMjnkRwzcRPTzJ6J",
  "key31": "5E89mfLdzG5tGkLt4HYUpyQmZwbbzXrNtUBTHZPvGHjVsP6xhEcCqQRTpDbqoQvqtLFoJ2RaJiBfaGy1vNtfYB7t",
  "key32": "3R9wyV9A4e1zA8UAdHUtqazpG1DdZVzJTZn1Tutkw2uEeaGtxDsz9fzwcMXjS5KDhWyLkpocd9rFQBPLLLfJU8PC",
  "key33": "52pRBvHe1QJX5URCrVR4Kys4Jmu2gq6TvZFCkRXmGbP2HMmzzygSdVPDyyh2bABiFAquamqLSf4NX7bkoqqB1pxB",
  "key34": "23BQpH94cQGK2KaBkdn4HQ2fKfnVdeAQFZMb8aCYYPxByLTHYJPiGxX5vDXTC3SkJ9UUPsdZvbhAraAagmwbiiWZ",
  "key35": "2Vgx1XwJk7Qwy6vdeCEsC3YYnb9dA9uUx64bH4NniERnBW1euNG1rD8XPC67cebxKtd22NzE4zfzKJCNnQM9caSq",
  "key36": "2zHc9hMtksp5gLUvpHjQ1tTKVX23FcK8cpiRMRunJkDiqMEJdvP135X5uuxrA8rR1sc8iXMpM5Jbg5BkN61cGTrn",
  "key37": "4E29Z7HmRLGsEyhVni6aT9i4xTfSUGNVU1dTBQQUKttSxE4xyWrAdK8UYWXdfKh4MVxav4WZ53TeLykpG4gY91qQ",
  "key38": "yT6uUSTmRJfV25mj4PrtYHRJUAbPD2Q37coffm7ew6mNG3GeyxJYwVBSfWGXSFRuuwqizZZAva7322wtgGx9Mv5"
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
