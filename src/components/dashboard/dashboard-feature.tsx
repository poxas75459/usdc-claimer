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
    "3d6dtDJ6EN5ZhoqdhK5ZJQUofMj4xf5oAF8Pki4V5xtaPaDBrqRjTCKeTF3hUe86cDge6FzRWfKnNvf42wMPDK4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R1xjhWN2bkxLkpHNacC3Ai6Nk66xeGVi3Wg7PWm195ySx1r1SqEQLAp5NqRi5Rm3KF15TjLSqjjZ4vsp1thMMyv",
  "key1": "4Bc8N3i8CXthquwA6HtQVxyFBcCiR7hnJHRph4BCvMLCc3xqZcFngmMTrC9fYz5VT594ZfkHpDK5yVwYHyLqMdfo",
  "key2": "zMk1ZFSFegdtpJ7mXxoByRnigkxkf1dePnGmfKWpyvjiJTcmuDWefJYHm8eBscDRhmnWkCF52ViyxH1u4LP2D4g",
  "key3": "4s49F1N7NKDgX3kYUxbNnoi6UwqxGdL3DrrgGNLAYDvZWe16vwxdpK1cGf3ocwtCVwFspKpuEWV3rZNgDmaSAXhj",
  "key4": "Fi4q9MXHChCnsPgJwHcZYjzj4ZivbPBpEjeLAEV4C86kUbMYN9zxSh9EQD2Hwheu8k2huPEoMk9nvutEyKNifHz",
  "key5": "3BLCLRLbHsjhEx3XqSmB7zWbSTmErbbsRWQT93fBUjuDBfSMhK2vzZUWE7Cj6PpZd1knVed7cqTeLsefsgGAWnCG",
  "key6": "55nPgcLPC6ENvJYjhd9riztday5ctSyxZnkccNpNeFVCvTAeDvquAHSdwCmP8wVs7Jp3mgi8E3ZvZ5GP8fuGHki8",
  "key7": "4aLfm3CpiPZbiYtmE1wkLQftkkmNJP2KHzLQCvBNtv7mXQW2spcoHgNiTBLZMW5w6w5TFDTkohFdoxTEjGpAskQj",
  "key8": "3qiwFdiRkFavNFcsbySzAb9XYggGoWwBQNTXFhTxvFu5kEiTCt42MbjWjtUQib8xEpD9cK1r86dbqEW7WtoUmxmb",
  "key9": "4CN63A6YYsDhuvrBZmmQeaTQi6F1j6PT2wqs32w5go5h4zrpZUL6nQ3yeiZu91JmvaoZdaoYSpxf4nDnysNCtdtd",
  "key10": "2SgffB8B7ZFZwjLhdaKbZh1C1RjP4YRnmY5KEp7gkGEHxjaCGdH5BVoiiwcScHnV88sSRTvZb3bSWTAdCKwbSKdT",
  "key11": "47DCEBxZLbFQDKYGLyWK5FFN5M4oHLTHbGujW2XopjhTcXRzEw17Jk28UmQkTGVVmNTLNb3pTL47wt5476M8wxMD",
  "key12": "4BcWZ2MvnSWtxf2D79Gs5f3QrMf7xDqGNq5o5ZNsUqoZJACARcpRiYKbEFmC1UtfpoB7zNt9PETxqTJFgrpj6eLJ",
  "key13": "5ykD7QZZznte8LAzbRZ93sXToq5JUNpS5CYUQ5CeCNtWr1kqeapSAWgdPQE6hXWiBefnijjFGuytq7SN12iMaK37",
  "key14": "2ZrbVd5of4hpApH6oez3GKRrXzdDoJrKasjYaCu3Cr7VSpTuqZy6SoKqTp2YRbunNb3j4UPKv7idD8tGvTHaGma3",
  "key15": "5JoZLMiLtzSVcHr5FjJYvrsXbY9V3Vr82YT7F6kavqGE1XXzxwbRzmdMQ5urZjqinpfMVDctMpmtwV34ssm3Fkhp",
  "key16": "3yFzaJVQEaiJnAZjnnTA224WKgjG6rRFG1SsZDXsgT5QqYR59c9jcntpPm3DRhFysXBzVnyT45nNusFkoxS4Fwk",
  "key17": "ubLgG2GXwMcUUSC82mw6nULLmU2fqDJyY5T3ordFo9orcfrwtKo8N5VrTeGDiDBjFYfZH8BVrWtfcxRYL1Ex7YS",
  "key18": "4zDEC43YW3Mq93sJpki5SFSsMCk7XWAdPbbpSkw7LCv6WjXXdZBShDj7rK8sZo7bGpyngnhdrBxCBAZTn9v7AGL8",
  "key19": "3wb9V7ap1KnefKqPAZLPuR9bC6qs758akG1UbbMfovBo1g46dmoo9jYY5ES8XY4CT79n8muQt3C7is5MURDx2gQZ",
  "key20": "4Es4iFoXYSEwuaKWwtyJxCSSfM2WBKDGx51rWGbYVSuGp2MGVUysGiDKnAMJ1H3QV4GFkvGbsPqa43riZkZZvGfo",
  "key21": "3ba6WTBSwMrfHTW7YcLrgsXvQTjLuEGemDqMpNnpv4CmuGsdLo7jJWXSMpgoVCe8mVdKwGGzB5atEdTNUu8t7ZEJ",
  "key22": "9bQ9uDYiMMY6nixmSFvrX7fCe5x8SCvbG2ZFmZdTBJioSzvyzzC4AYSH61TDJW6vwLMvmjJKm1ob663XEooRz3U",
  "key23": "HN6ep1o2FAqaSWVNupmbr4ou9GCd8Shzz5zV8om5WiDg4mQgNSnk7kuPws5XAr9ididJRQbrkCfDGkm4wqX5jjL",
  "key24": "jiTC4rBWSPpiZ7BsbG3TYpUp9NJJ47B68PR7C1koDdzbcKrw16vcu7J4fA1nmbhsrVoL1NmN1SdWatE5FNnv4nQ",
  "key25": "4DtJsxUb2zb4jFg4wBYSwZShQxxW2TBPxQBN5KC7gwt6xqTwULrHrdhsRJz8uHs27TM1cHGAv4ZRkEESvuU5y8sF",
  "key26": "tQJzqhyyTvA2XVMbobmwCmeqzvz11v87eVzGvfSCtPTsV2HFnwRPSt5ACv5BBUzhKzW3eu28k8NrcnioNLgSVhq",
  "key27": "3fnN5Mwdq5M4pQWqRnRU2RjFLoEPFkipCZk37pjJDCE6cxYJcd9bkLkQL1Xg4UFX6jfGKCXyBLQinEX7vdKUYE8g",
  "key28": "3v5PciJNxsJX5BWJe8EuM58B7Hd74fzxsE23TuKjx58D2eefLLab8U1Jp39LujWroVAwpUhjeLBUDSK4qsMaLG21",
  "key29": "5B6PrFBiUJubvqV7YNiT8zubLZ79coWf5xUZeVmmp8oFBsNmd4gLijXeaKRax6y7GTGWqWrT4vWC32dvDzD5fXY",
  "key30": "3dWLpKnjyf41uBUPX44uPZEeUo2XrwMTiUCza5sqAqvwHj8xi8inYiPPqEXwQs7XVgxBypB6wg21YNjjbeZVDb2h"
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
