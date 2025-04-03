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
    "5sMagvkd8f2xmu3K5Fm9iwhJS7EGwGYvakGTzwhMTxVYEVPeM7sRbNqRKe4irJzDYiK11N1SKNVMaFzwHdi6opgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TE3w18b6zsf6Db26hw5TrvHYXLF3xN3PMg3F89XtbtdirptV7ZoY1Z2tT1c7rd6mAouTXuH9fdFZQ9j7CH2hXAK",
  "key1": "24jFWMLWMnEFot4qTM836dmyzBvCb9qZETnVQE2dRfNguKR9NVj3gfeR8GHaPX51zEb5W2yGkymm6w8bAnn8zAde",
  "key2": "5WTUmgbF8NxupcArtCfmVpNVkNUDYFzS9j5r7BmpN1eSozZT5fY5rfZnZYUw7x4owCE7b7aToH7MhbaZd9TKQwzZ",
  "key3": "4AyK9JP5bvUWDb9ttV37KdBefgqWrxnjMBQax8ymHmuFnA3i1RcULyK3rtecoVjr1dsenNxny5CxMsJvdeJ1DEQE",
  "key4": "4k12L2TLbi8U2ruMxVscz8hqy59dBJVJKrzTHUT34gTJYQdJRqVBR3PE2Kzsk2xeKcq9s2pvuzNkv7TtERwAYa1e",
  "key5": "3yPNDFC4Ado6VWiEmadM3px7DJjeBioWGXBXGt3ntDwSZ8gdHmEqnCj9bq4zainLFBbRCitSicuXwboR1VgbZ9Sy",
  "key6": "9ni7vqi5GnNpmd2HNPV5cG4DKqg1qFEgxsatFHEQ3HeQ5Yvpw2xKad3crXK7deFbiTeQss5uWUcLyuNnXBLQphv",
  "key7": "2UobyDWCdktoGNWYoJu1fXNZWjidcfpVAA9b43mRKTQ7wZqbcYrjPSe6sLVDmQjS4u8CJRH51Aia5wxyWFtGbDN2",
  "key8": "gMUYx48TLN56RVNYJX3w1fUD5PJgLbNg1HZB8rCECGEZPtMG7EiSxEdgfPW3vXy8DVDPocoL59zfHC4kD35GBg4",
  "key9": "65GRESFzS1jL1fCRW1Cp6ECYYTzpJ4Mj7TBSXve7x3exaF8kTdvPf2U1fjKDDmjEExMcTUyqdUU4Wgm8yKu93Tvv",
  "key10": "5MjYAhCquowg1mdcgEH3q75Nd8ks3qtd4sBYy9eT7xpjxM6a8BY3mm7GCLYPeHDTdhjG1mN5ELrz3aA5ep7in7d",
  "key11": "4DBwdxeqUvuDDJoj3UbSfnSpPpW2sqRvvyGojgHzcowg17mA31xKh5Qs9CXUoCsqFPxHW8Zd6iQAhEn2wjg85nUU",
  "key12": "3W3udLMGhcTF5fkN8kFnGakzSFqLRg7zvjX21p1JtfCMiLPKuGecHdJEBiJcwGuEvoYU37ZAUbzbFxci2NnapCX1",
  "key13": "5hKLQE1MPQHDy4uMZnAsMS9VtwZkyYSyuSunJcun9QRkPz28MuXS8UwNGsrkVKUierjMN4zjB4x8cUVTu2PDckCX",
  "key14": "2nAnJBAFgBqfxFh12wicaVpfUH5g1qPGXZdxsfeQQH7nfa6xDQdqcSPHEd7UfDAYuN7DVTrfqNFCD2y6pZWTDpWA",
  "key15": "fenxBiBRF5TRkmpRGcYPtW8mCFUBYSo1LWVnT3xZqcTysxbHpPWA9jzrbCk2cK1wCG8nR2uM3CxUXqHFG5tqR7F",
  "key16": "3hqxDcMbCTkmUonhfP1MkYmZ5Ck2DxrfG4YKAo7gUPBeFvw78bWYMBypX7J7PVN8AWYXQcUTrPiFoZnmBUpJEQuS",
  "key17": "2KihDutZZxzVcC1uxyL5gjsPjtTKwYuN88Jtf5QSrS236sv3XTxWUZrZiiFasNhSMghbSrjhvdkmmzo51FZk1N2H",
  "key18": "epoFVu59DUMpsTpWooCgE9BsduMMbgBSKgYygaKK8xW9i6fttQ1dj8CbPYqLvAeYAq4poq3vMfP9yzbLAK4KJkj",
  "key19": "4Wko57oWjqMZhdniyd9k1oTSTW6w5oqmdHvUKYbun6nAkKAiq7ouDKUiS3jeFxtHaSUPTXFCiL3W8WGRpADQ97QM",
  "key20": "5fFVHmoDgN46iz6hn8zDQ49P41YgZQ5jofKBFtKYkjrfus9EHYfiL8RWSBUVDfUeVPA941X3gvvnyrgBVjFpscEA",
  "key21": "2723vhRxwTf66haptcPry6iBz56D4sSXwcu8iA1pJBxJyuz6K7gCjUtEDRyP92DnQLPhULLpwCag485UPdEJwAUX",
  "key22": "T6rcgBMW5d4hS1J9sakCkKG3zvYRrm5sTVhnvU3wPXTSJvXdYdYMxs1J77m8gFgSVgFof9ZZu9UHaKouYFqr2GL",
  "key23": "1LZmL85yNfDsGokFfFjjYMGSAbaxey6gK7kWvkAW2aTJbLnrueJSLkMys19gtM94LZTtzzi99LbpJBqHrEBhwmy",
  "key24": "2op2YrsVJ6UuCDpJyH15bPfU34oZErKfhURk6ggtYpPCSwYpYgtMNAPbWGUWc5RQLBYjxLLBu5ZjFG5vvWus9i9Y",
  "key25": "bFfG28NTh4XAFGmiqnbDVdr3RdLmNugPE2dgPytyPfZYZjtnHoNgU1D1DpxbeRfx6Aqor8W4gHyrmwMLbN8J3Gm",
  "key26": "4eksVNJgtit7YSTHHzS1WQmyqamvUGLdEKw7vTbxNkPQNvqva7i1SHrfiLcwutsvKtV2AvYQU2oNAY7dhJJbFFiF",
  "key27": "3M18PMMcQN7TRjBEdXHjPZeg6dgJVEjvQDKHMEujKNq38WEysnYDgp5yoqUBQt4wiRomw5c6ViM6U6aiUrsVAahu",
  "key28": "1gcqCtNciVjQm87yxqhckrJuzNEAqiK3gQJeriP9bouy74b4NhXc6iDgZUUxGrpkzUfaC2TggJJDtHgdWjnvqmY",
  "key29": "7EUt8bAda55tXPMvGncfHusjPnhv8rw8Sibh4UBUEL6LzszNNBrqwosqUKvr6Viem92HFELMH4AZPgg12eosC7a",
  "key30": "2tUDkqXt8g3mg35e3nEYqx6j5pFNsddMpr1uRCBzMxZZGz3DvRtLY986LrYSktDKYQURYtzPaMZERpMi5eqcpMTL",
  "key31": "2vKZccc1LnR4XmjUFhLiE4QJBWG81j4a14mkTfQnwft8nzgrADrarCPYDEFqMMKfBTSrUtD2VTdFFHdNxY6FCUgk",
  "key32": "44cPybMdVthnAm7nvQHvXk3dwvDbY9ogCWrnnyrvgovAZ5wX1wi98NRP99oj2gT5Fa2oG74yPsYwKzf9w4wcibK6"
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
