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
    "2KZ5TxSAJ8dhFevuuerzak2GHDQmkcuqfQi17bzjPp6ViTTRiEMKxveNLrUGDzXSH68SoNpHJp4jWdwYE2zz7V6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67HadDC4T235WCkWN6SqRQESXubPHxm4Wfym1k5ZQwiEbH2PHCAkDnKKhXDGrfkiRsMuUtpu2g6xaNtnQbSEm18b",
  "key1": "4sSXckcFyBowHKdBGpXKoJf4mhJjKK7deMd5bPP8ZoNaZEJiKBimrYMd7kSZnHgYKxBEqT69a8LKpmnnphzeikdh",
  "key2": "2NdNjgd5qSc6W33pt3hPvpJEnqqG9ZiF7BVqxyQ1s9bZHfCkJbqmfiRsxrYBcynsQ9koBxhS4nBWAXM48C32nhun",
  "key3": "21zz4LsYC7KXu5U5aDTtkAq9vqSYVUYfNtq3VNdsx9YZdzdvZSfTuNFfF5KSr2Ngn4Gjrm6yMfjvhktHbuiNN55b",
  "key4": "4ayjw9BWd1tsMnuHFk8TiGP2WuV28d2ePV8aVXTkNGCjGf2mYuKyB9vosqT8PpNEw8Et6en8HGb2ks8tUWAnG4Xz",
  "key5": "4rDzusHkBekbpzg65tNGZDEkwpQgAtstztikA23vTT45PsUDQiGWhSUndqxGjbpCRMCTKurHWKVEGdVYW2Ub3TbF",
  "key6": "4tTXPBFB3yagj3vo56zikc2vSS8v7a3KHRQyEXdP2mgHix9uir3RMFZgSBcfUSn3PmwktbKMBYWKyTA6kTMhPduR",
  "key7": "4okogaPvjCiq27AMqajomKc944KzAx9Ysop2y8vEHHSYS5PyGddvgbsop1e9iZqb79kASoJnvDzbFKjrjpZNktvz",
  "key8": "snhRgwvjEcggPvmd8PWKNttWsnkHomaTfm4Focovq4JiqdMZJkgorvdmpXgHLZmdnpeuxZvhuRwVfgASdHKuqTQ",
  "key9": "EgDajFumkFE7EazEpb41RNktrnb1wvQdAT1YeraDxYWUzXPmFgpyAMTe2JC4qgB4jLUd8vMEBubdJREgAggc7Wy",
  "key10": "5V5q5MEf4mawfkM9LCuyaSucCeSLi6FXukrNhZVJZbGUZEYDoi38hj6cCrRSb8ci6QTmrYhCtGLagrwqB4KHyskx",
  "key11": "rD36sgUGJTt6m2NPums9FuLzQ6yiUQZNZ6CJfXcrBXRnvQAkPg9HQhtX5CiDgD5SxB9DtX35J8YXasf1ePxbvDR",
  "key12": "2Ptir2Y6AfERCwf7dGxEhy5qGqP9z63CKLi6B3yT7rzRVCJ4BwuMGkaExnjR1w32nzJXKEC8wQWYwyz5xMHqEhRX",
  "key13": "3GWwGCYXP7aqicfdK8Jzyzqo5esk7bGNPtS6p5PnR5GUjKRMaLTVEacLVwuHSUnKVkom89wYFe9VEVhwxGk8xpvo",
  "key14": "398qYgF3ci55nCfk9xHko5o3SghGFWfEkWGhj1rupovYegKwmxV3xEpmvBYU1jtGneS9LwRfkTjCoS2rFB6w9Q3D",
  "key15": "PqjsnWxDXXq6pLUHd5g1KuMKu23CbyQKcq5Qmz6QET7aha56B94YpbydGxFX3rUubkBdNzNFCSLHhuLWfWqaycL",
  "key16": "58puFMoBowY1Bc5SFFkEyEGg6xpfrBRdLgX5TANiqrMhShHp5rcSSpH2q5ZEJoaZq7ZwtQyj3W6Y5udfaTw61zAh",
  "key17": "5FRbxLCF2aJSHxpqMJkVtHR2ba3n5FYK4Qn7yUN5RNZEf2WJfsUhJ8aWd9uwEWDsigEFatn44ZEdzoMNZk8vS9Vc",
  "key18": "2tvQ419Dx1cArxJ62NNp4aHcp7c4gEgEtwFR4Jsdewgfg7YKzma5AmYNaDiMfcmg83ZUhrWg6jqY1NUq7R7B8R3K",
  "key19": "Pu8j4YRTqp44YjEm2ZHCTh3cHkJr1p7ERkc2gS354eEtgbn5VAc2iz33JHUCUGkkPwNBf16WtdzLaA9Q2AFmGeb",
  "key20": "67DXwLQ35nFuDP7U6azKhhRsrrHfM1EH3zqV7FgDj6zcyQdXj6yMWPyvMw7WK8X9WYw4YgYTJSxQU34Xxsmf56Cd",
  "key21": "4fzuP3xaQRG5FbFycQSVFNzG8gunZh9zyBb8nBn6tM6DJ58BRfeNBWUU2veqmqJCi7rdM1q3WG1XfQ2ef2Cm6oAj",
  "key22": "4dhTuq9JGQ4Mece6xF52KUkdiNhHkfZkny3gMSbqSd3QvnjEE8KzNnnVZiWTPDqFeqwgmbQTiRZESEfpGVhfWwGX",
  "key23": "62UeZuG4BDabceHkg4KQyuL9fSrLhzJCrzR47rnBrCR2hdVYg6tyzujFkrVcEUrMB6AEaCUNe2nHLSyEeABE54Ja",
  "key24": "4Yh7QspiuhWy9JTF7Pk7LXVvWUosSzX7trCFJPegXr7kkUADnjtDWTheuQmJNi9qHsX3HSfCD9k813Mi1qHfar7C",
  "key25": "3bhHbozXAJka3d4n1mxWjRdB9Xi6m88hH7Pv7o3G9oCxbNrose5KBUMjfBH1wrXRAGSaBQFSQs6sN7NUSNko8Gdq",
  "key26": "2DwgypJugNZDtEa1ZD3WUhSinHVoAfCpxyypPpRqbqkPgdpeZvWcYpWN1K86rvAAqXHZi1NcqDrjZQQwvE2iKU67",
  "key27": "29GmjToVjoC7KGR4Y3uKB3HUmayqra288jbLfBxWHg71YC33gtZgMv8qV68f23GUzdiuH6UY7o9KXs7J9smDw3co",
  "key28": "3dCCAR9yPgX7MfVF3q9uz8R4Trm2Wcz8eSYdtCakTrn1ZYMErjVrDMN8CcYe89uo3DwPVDt2LsBhcm7m8NdVJ2xY",
  "key29": "5f9KQEHpc1Hs2fGo9inEzDCaWd8YsUwFz7urRohmU2V6GB4CuaRdB1935ncG3NRfuR9vgV8KMmdEDhi44vXAfrbP",
  "key30": "4EaNdYLWZEteQt5x3Zj95BZYC2umk8qsNjbEDz3HizqqbkneYVCJ7D6jeUH8K5LNySvH89NHe2LtDoPBYoCgLgxe",
  "key31": "5kUquJVYkEUip9SqJygmFhHEcgFD5Fx976K3RbHVpnkkHYHxdYKBu5M4wb291gJvCZMr29D21z1KCHPeeSmH4tzA",
  "key32": "4korYu7acqbT8UiN1BhEtjwo98zn7ezWq2xhSHWbkGbirnmoKRXgsvqmHCJPW51HLFnuRGZyqNgVTVDrweR43X8N",
  "key33": "pTjCKujfsfsFKpYQwCkan2FdzNsdWi5Lhhk2rBtKBKVsDLYURjeGUNdKYCsxMKcDGMWgAkHmzYqnvssqWsXs1vF",
  "key34": "2ZYABmB14bJqYKLNTbyBnKxegmzqE6DELzBNVaiEG3sEtfSGJxZcxqvDVx2yksNe66VD3UPxMh6TeWGzH5pGjH1z",
  "key35": "bUvNo8c4u5vNyFtjUTT5wJdchXt3qwsqhteUVB6JYyAZFPCrvBvuuvNJavLdFUwjSzWYutvPe8W96tgKV7pW1QQ",
  "key36": "3maEjezTgvzhCF9moUkroDoSYcr2LnPRxGmFHVNX3z2WmiTpEte7NjYBZAVXEF8E7brkdTAJ1zDEkTEnLC6nPdp4",
  "key37": "3T45jML4GyLXvgdkS7hx5fV5x2UrM8SwLtCokKadfbYpa9tUitpAc9qNK9NLvTjYhhKTGVEbBmNDr7eGBcnNQG4L",
  "key38": "3apCo6gNt9GM7cW4ipSDoaZv4j2Fr9arfCb47TdNK2zBUfHzzMrS6yEjqGPLzTsDEPrAgQzbD9jt1kHe61BwXTuD",
  "key39": "3PrzcreEx3N98bvX4iAP8eATbFpaxhEaqD83YhXvvpqADgjE2nk6CmPWAKchz4w4hMuXfb8tcDzeh2a6EJmBuNks",
  "key40": "3VEDBWVBteKqgnY3RUigY537ryxCjvwSpBFmR698JdBnpL52ZHmLwmKmJNSghdTieBwRcK6kLwwBZ71jutSdGZcP"
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
