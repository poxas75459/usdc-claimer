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
    "4tJ1i53GUNtmYWgkpnXj1N4Dku9Tt13QpbMwVkYHUNRcZoKvj6Ky4zHa4kd9EsKPmA4vjgkz2Jy1EaLzjYvjMdTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rcesHHMU15JrgJBsGQjmqUra3L55YfmM8gCc3hFKY8NkMgmmYtmjjJUGwGZadDr4eWHBnLzM7NJjHTm6u99aRmr",
  "key1": "4VNek4Wwm74qQkK6ik7UXCqrJwxaiarzGaBGTYvw4uwGd8qwh7qCwmsjxRGEdDK9WuuVuzTQTtT51KN4ER5wFj5p",
  "key2": "3EMGgazcG5eiXexbheYofN3Q6HzA8zQ5wcjhscTUhWNKSkZAKds3CnFbmuN1XofLyeqGYknppNA543Eiv4rifFhN",
  "key3": "2z43v146pDrTGPLpQCuJ6UwHKKs76hfR8vYLkqPFCnx2qu6n6wykZtYWf5fJYGFid4R369zaXgZv6zm72WCPvYg1",
  "key4": "49PuPBjKbSAki7sg8nG7xWPTm58NveJdRBNib2w7HSaUB8JMu6MbXxVE9uj3QDrY7n58FGgY3rcH9APXCixWUrZr",
  "key5": "47E2ATdN6yPeuyphfUtihcKJ39Gs6XPW5zFaKgqV1hznBogd3KdPtAe89wFjuwxC9TndsoUNn15y9iYWrSQrekc6",
  "key6": "5pXDJa1sQr4VM7v8NKyobdQczmFoChPD8gHNkkQGbXtKfBowSKHyYaVKGePWX7pWdNzDqdqVMdFiuH4T234wZAXW",
  "key7": "21HvBdmYw6dCnk8B33V3b4Y7WVVwSSP41BRHEUjtpcGzMwrxzR1CxqMWY5E5D1WZDXDLUP8Hw4dJjf8UuyunfZK5",
  "key8": "31j46xteJUHM4jDMbjRNLxQdnEA87bx4Ph3Qx6xfTr48hYrahXuzdUBcqdGsgWnMp5R14ozXS7nqqiJt8ji5utrg",
  "key9": "JjUmcY6eTvaYN19gm7fXm5394JyVc2m8TXoKMFqoEe6pQhNT7Qa2QX4KcyFvaTcUfxKKdxnGh9aNyc4cT4XE3XX",
  "key10": "MpmCwjQfyJJn3DWjaG2YhNNSm1GddC2DbBT9xp4QAkmCpiifXpNQuFYfwwiKdQwAC6dp6UhFEcTi1FpkKzpxwiX",
  "key11": "YBSviUrzsPGtE9pj3snwxaJ3jdhYn1NgTBzh5fRrkEWUKvXoDhwD1N7XXFfUgv3fU7SszPRZ3FYuHZhuwD8avwv",
  "key12": "3phEwGi13wUyRNov6GzJGu4JEcfqDnjGAVtjLKecAMCdt16CZPnhABaoEFrz6bcvEzAstXXbBFpYAKNbLojak5Aa",
  "key13": "5HEuuP7w8zDT3oFwKqdYCFfcsDGk87bR8pdEJh38TojYXwf7Q5jGDjACHuPhuzjGiR91WXfHJnr4XhcYwD13CmZg",
  "key14": "WGKDEpjvmH8wgsQUnXYqf3yzZuoY2MtvEghzXm5amNfYhnWtTyKfsVyySPMTFTPpyyw1YuarUoTiZ814yUbxv9r",
  "key15": "24VLWxxRpBsTaWvRkZ1gLecP3ghWt9Wqj4yGQ1tEQtxFSbfSZQRHdqgGGEbyZ4boDxMiuGEADsFMcrnr6Rj16aqw",
  "key16": "2ibd29ewfUFXD7BitL4Mpv7b59ZLMHi2bAE3X17R9a1AAdEhsLBU8inUSRoBymZj41bbGsq9RZxNMDFfgk53r4BX",
  "key17": "2JTAmN7s5UtCUNDgN8i9JSWFSptw5gwb8xemJKzFjojVzygNXtxuheDKaijQQcJ8arLAFAgEn2DcXXgCJA1LBqpu",
  "key18": "3XBxSk7zatTVaANRksdfr98qJ3QiwNWoh7oG8ZxTgzPcsc9pLrvXNKP5HuJvztagDhWdEUtoqZ9tGfAqUZ9y5kso",
  "key19": "4eR2W2s4v8PsnXeqgKQA5hXfKhhE5ecBczJ7cVcW9gLGrNKN3aEAxL7wGsMp22UHJQTYDxLs4DE4AtgQrfgdr7Mq",
  "key20": "55McMV6j4bDKzUzHCKUxGLhMNEXpjHb961kJUZ4hKkmakf7dZWAQjExAfUL9aMZXvuPJJXEowcYTesLCqfgLbmm9",
  "key21": "5sH8xiohd9AMwJpLuq8iqTCJy1NGMaWV5wXgsv1LmU4F7MA9xbbuKTwJ4A4BvwVFD8ARjva4atEpib7ggAjQZ285",
  "key22": "2bwrJkdF5f6kgfVX2tFMWS6Nu7WKstX1z4TL9cHb3H7zH3skK2AU1wX1vi11QNzGqQMpmPkYMFFE13PJUw5tNrLs",
  "key23": "2VmUZPyBo7C1n54cKBEHZoiyZypbYQ56E5KWViEPdwtkKmkd8obaRFejrCk5YJ7uE2H78bn4m8ztndcuB8Y4Mo3q",
  "key24": "4HSwoBQToEgAJuV3qJ16mvM7ZVJrngoNu8njU9rJSgrD4XN7T1JjmfTpyghPJXk5WVs2WC6p3HcBUbG9fFUqfhaF",
  "key25": "3LKQmoikaWA5fzCgyZdNNFJZ2pCUPcGKBmT8ef3a6irmb3gwpD2wFigfdmsBWV1tzUTKddZTbiuNzMRRFn4hc6pn"
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
