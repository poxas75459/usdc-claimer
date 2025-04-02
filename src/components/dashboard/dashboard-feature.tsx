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
    "2kdhZgSUeubux4FSpqBugKv1P54FvqaPLhAMfqcUeymuWNAF4bmpfwZqbGN6XiBc1His9hTqbm9tNNkUfqZH7zgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uRc1GDxnsa3ewzzuGktYiGtNZJNYmcC51kqnRyR9KbtTNEEbERgGWiUfHuN3DNxhFJXGAM3o5ieCogSdWe2sw7t",
  "key1": "4vmPppMERr51byJKrQ6hZQaPkF24m8CEaFMoqt8jfdUing4FDz7oFr1m42dc56WjA6ZwCZnUnWYpTGqoBRvY4Qyo",
  "key2": "3DRghu4uVwURkXVtcrFZH3egXu9YsYxCtjbCzQ7TzuhkYmCieaY1ykaWkJqmsAmFB9ewGDV6cgLRFPwkLMUHnZWE",
  "key3": "3uKXKrnEexPkYWFjPf2UiZKhMuuvB4YWdAvU5EuWatdTPoL3yH97W7GsD7eVi1cqMDZDjqt4V9knBp1XxAJP2HNh",
  "key4": "3dvRSkiF4G9FuRXGDmHu2D87Hw3VdERGoaUnjw9Zx1cb6U9CNdzSiQ7aGgmsVUSivwTRpyevtD2atGPfS37f4V85",
  "key5": "4Cgcz8CTL4ybgN13Jt9fgAe3DHNDzPQEq8SUxwLuJk2JNFBMZyZcv98r4dPd2dH5Uqr7tTVAyxF5DfuX8GLPMVWC",
  "key6": "HJh9WYttkx3UjXobv79Rqx6AAwqY7Z9KYbpQvf7LXxfYqG8YKGcaTQfBoZzRFJCt63MmU6H7pR6miVupxLFNSTe",
  "key7": "38J34TGFdvCTBEhbtcMLjwKN6ZoMNLaPFAmZERiKg9Xq4SnDbMnGEx6cLmK2yUsvXi81cvarJadDo3LCM8d7DjaR",
  "key8": "9Zcui8pyNNh7eVfTgkVretxBjU5AEUeb7YqUJpR9f4G438asqQcWPuWpGspL3DqUGfp4i2ZhAdEHKcexHRHDv5Z",
  "key9": "31XpS7NzYAKgnGJWFoDjQDXPE9BJ1VmnG9WnmH8DH8svz7kW16EPRgfHmdtA9yZ3yKV3uoSsVWSQeHAMzDATCxsp",
  "key10": "sZRuznTF1fg8PLUuW7iPr4JGybmCHPQeen5faFnEdbT9LChApfKCsfoomSHC1HjcYspNSSTgjXqbNnUCCMdy5rF",
  "key11": "5LcCCC3YLXwNPkH8g4eU8FJYQbMbRj68RpwJKYynySEtuLXKcgEV3w6Gq142vbyfH73peMCR4FnyT2JF3DUo8XkL",
  "key12": "5R1YxsmaUbFyVjoWwtQBrpC9XdJoKnpAHgmk4MytRzhL4cJbxwD9UxCsLVZJyR47FaEsjTm4LKyfk9neR9NsjnD6",
  "key13": "2WmptNDpUw51dUgnW55HVDN2xPSGmZpr6zd7xWnJnCmi8sWUQhrGx2RfJ52aWXa86KYn1imenGcmR8cKhYiuAHCR",
  "key14": "54wqWfBD9KLqJ5JXRkin3oL91QBmczDxM51cU6Wax3JZXYXNRCrYdSx85ZwJ53n4eMsMMZM1rrM4C2swuUHJjum4",
  "key15": "4W6nehEWnGHUnowE2vJYCNmwtdJMSD7kPLWCHfv7mibASScfjSoTp6cVkUhdWvUmYpBRTYSScRkpiU9T19Nzocn6",
  "key16": "2NGz897DemyRpAFJHyUPo2V7sLVjSpBtceN6kp4UQJM1JE3TrXEiRXvqgkPKL1ejHrPrXkSgtLiikYVTnpAyAZq9",
  "key17": "resjS6KfoWr2JNv7FT5QNC5HPVCHHMjP7bQZb1oY31HA7gTLccpeSy8ecz6UPvSpyYFH6h1vwKiGhcynHofDAw9",
  "key18": "23RipbB1oSeEA4Qe7wXsFaGJCDK7wJVxkRKYAU3dFceEUUjV5sVJ7HwYkirvRdUQgLw7cFiKHQGA4r8NscyyQ5sg",
  "key19": "2NFf16PkHU1354uZg39TyTtAY7TQfRuvjComPjPrDbmX3Ri3DLB1yGsNotvWcV8FFa6r9THm81VeXXKWrxoDYHgg",
  "key20": "3pfeiQueECHEthw2M6kPhcGKynX72Po62GD3TNFsi2NF3fqzvzNqLsqVaYMFqFijKetbbokMwHysRFVqBtgWTttn",
  "key21": "5hNPmGNb4QyfyFvE6Bh7Ws3ZN6TvU43eBG6eWQ9UhsExK6saJbo8mFTNXwG1fdox1SxiXArUeH8Hu3wU8pwp34YJ",
  "key22": "4B4jTyPon39rxDAQNuWEJaey9RjFtzPmwsvNc97S7Po1oRysvQF22UnkkgU9TcV4aRo94x4E6muHFRdgBPxkCpJQ",
  "key23": "5nLt8qzkk1oPH2z1d4c9eP7aBWaFM9RYhpUoJggJ1ubqihnhrPZkq2DKhTi1hzwEFrTefKViicM6YVWwz43s69R5",
  "key24": "3EacoE91PEvvM7Lgy1bafoVmznDpFPgahKkkHPC5LYpobW1owkCbR5gmq5hsdU4AKtcvqKytehPzrX6o4LxnYLFp",
  "key25": "3zPyZJx6WaEYxxQi6Si4eNWqcF3cgursNgBqUsuWse8aJXFFYEaFxn4fKuJur4TPRWcVE2JQJWcS1mAMJUeVSd3N",
  "key26": "42yr5xXvJHLyWPQMTghDCY537vMHx232VX4AQpUCzHJGdoffbufvKWB9ZxEjt5HTUgfmKayKD836akQi5yHCkkXB",
  "key27": "5fVKAGZ3NPtHMdEw33HVwGHJJwQr9KAN2SPGoSVSvpGf8qwjKPke5uMVjJJzb5HfVnaJraQ1T9cUTuqQp8MVmgNV",
  "key28": "62jUNvTm9PGNtjsP6brA1udGta73yxbsBc4L1FrV3CiFp8MwwwYcbS2FN3z1sQXjepZJnjhCKkzbb6YZ3EyM1dd6",
  "key29": "2PLodeNVXu4kPYzf4hsZXyD7mVgaKLBHN57q1uCHhPcpqRvtMeZmeWdLExEgHtigEJGuZqM9HvYx5TyNQXUMrJrw"
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
