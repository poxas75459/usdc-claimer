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
    "3vCapa2ndhciiuqBBssqnJFKgWe79mrYR9inynHUUPKHtL3nAqNHourskXbHAD6125RAkgW2jePZjHphnjj2Xd4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rfNgKThRjcWcsbGVjaf5ztvNJJXQaUWzKja7yg6NtX8S53bcNc1bBC4UJWyTDzBLu9DrqfzMwpHbhBJtJHvg27P",
  "key1": "7v53WdDhQyZtMnMihdqomFdC247tc3n28mqE4yJjQGUJWnBnQsgzjxpY1EL65eFBrKCL6eDhZHAXwFNeTM7pxU8",
  "key2": "2kEps7HhMyHembVYVGroUGDqKnuEu3BSZuXd7SRam3XkHhy4ijtdKzVkpDSEyqRSYGy7DXPCQxXbE5ib6jvyKSDr",
  "key3": "2dmg9ZQRkgE2fJ2XjoU1HJPFGEyTxwMqvoBtru1oW3VBsmbJu1jw93ZRPeWvPcoSv7Zv65PMHQpj3DM85Ubg8FnF",
  "key4": "4zKLjsnKR6FkMVMrjuwSuVSjYLEofWszZyWYouPHeTzKv4DbZbQWkrrNvTyvisoE1XARoeSLm9ejnzCXuNLwi7HM",
  "key5": "3c6AeinPj8oCRqD53FSTXbYQpBAW6AidSHWtd29x6yzuTxSRs4yjup8kL6v2qYgaayd6iLFr5fYnQvdYJaBfafMx",
  "key6": "3T67kVSGeQZWy3J4LiCA8eAhrjA8kZY2XLrPf89EGJQTFZ9P2Pi59yMDVYsf9pSpKRd246mKLNPaGQTk6AaUieLS",
  "key7": "CZCrpH3U7SYLEAMjwJbLGq6q2CZseY1dHHpmEVkYUiMKPQMvy5DuacwsvFzRVpaKaHrrxQLGX2poZm7v9N93tqh",
  "key8": "3QJ6yo7sJZ4qYLYtuf433zQLDGag24mwawojct46vbxVnrmHg2S6YqaAh8Td7rfyVFCHc3UQDF6dbKxNdxhSAjM1",
  "key9": "4VT3ahCSQxKq5L7T8BMyawDJQKua9BQ5fkkSYMZsy52fNwvLn2uZxXpJkcPTuJxFjL8Qfk1kgR7f67ojwevx1jfh",
  "key10": "pXqVdjVY6HmVfbQRhqducQJpyrybsUH8uMPG9Y2uqMJUnGF9wjgWiAEUuzbn9nwqTtqRnKEiXm67PzJuEFeAm9g",
  "key11": "4ediaXviQquurH2tqvr15mYyXBL5kGxQ8dCYxtPWNcBuCgdiFkWWikvoB4Ats1gPm7steaJZHSPhbxjfbp3P22kS",
  "key12": "gcn3rWhCEzkiPxTjj4cFgcZZejjecv1cbWTHxFhxrAsqHjiSV3T3JvUk1mKh3T8sTnMdKRYFnG1CE47C2JYGNYV",
  "key13": "4wZctbv2D3wdDHuS9jFbQBriauzBSMnBFWDMKyPoqzRBfNYkvNTwZcipVNrWbL7iKpBXqZHRr4RkedNdgLDsWJZ",
  "key14": "2CxaF3o4srnYi68RYNy4KFfLm8CkV1qCXU9qGXTdgTmMRXf38MhsBhHQw4GCGMst82MNZTpnFqu74NX3wawmnaD5",
  "key15": "dNvRc2rGeJMxfkXsyMHsTiUDwu33WK81uyxeRVzJG96baJ68FHxeLunmhNDEgNw8SF49FBMTmnuRPW2mmxvZtVk",
  "key16": "572KCtisMMf9TGFaTdm99VTMvhuHmKKYPTgNaYEuNgLMCd4ErZYhXtfmtup7bL9L7cJ3fMMWFtMxvEtp8d3idGjm",
  "key17": "g7wMEGeyekgptHTdWZ8X3bRtJQny31jxRvxGDEfjteMhTkdmEzdY8igtSf1rmXszCKF6UvVUBT6BPSsJMfXCZTM",
  "key18": "5LuU3m9AJtqz8jcwjedZKA7QikthBwd7uqFLchfBUoNDZXFCz7JH5HMihJkFB3JK6ZCMpHBYRSvBeW9xaegR94Mw",
  "key19": "4iD4hq39LVXAoauiw4cwF8EDX4LuGNPcRjVRe5tH6det7gTFHBpmdHYo1ti7mcs4BduHMUaWDKU1d2aQaZJjj6JM",
  "key20": "3SvQJ7UJQSQtWjQJ7NQs7LpviuLUpw21PBaGoB7xDbNhYVhv7JVLcsVbLA8vEvhfY43n7Gscegqy4tZTXFJAsX3K",
  "key21": "3uCzdL9oPic2m2Q84Q5rS5N1zsQxeqEr9JQbAnjVMVT6gbPiGgXkABE2ab3FTJtStohFaMnQ1eFYnU4GjLw4ZcHp",
  "key22": "5Qij9mh2BZPv7gJFoeMZP1YVffqpLpwQQF5QYDLw39arCQYjnsYSydxBoLyiHBTxopGNA3QsbeBLT7sXLM7b6T9B",
  "key23": "4L25eXg5Qk7ECRSwu2sgd7EykWbtzFJh2ifh6nX8kggv8CfHA1dY1tYN26ZDZ86iDHqwXmuLKjn2bWwdrYzU2H47",
  "key24": "4Y64uUFsXfDBYDSq9tiSxUBtY9KGYSokibeFbfRC3BL3N99sY3K73wMNaNaXxQnfMcT6QuUfPZusi9t9Lv46BGWJ",
  "key25": "dS3ma43WdYS3e9X5CN4iQn8LS76QPUHtf7TYoykGvBXPVf2UAZUusktsqn5Q6BVUsxCkz9KPCKsUF3TechgnEPo",
  "key26": "2moE7wi39a9VVCFrWiCCMYazbTLwE7PndCtadPFQzJ36ativ2jHwUsotogxX6oRdoJUBNQMTN9DCATg3tbTHzpws",
  "key27": "41JmJgzn2VzdhaDKTgzsHAHXqRNb6BGSLm8cbx4jMaNQWYDDJoX1iwLYeMtUZhzLnd9KSpraF7cozbBpejJWmCM2",
  "key28": "2yKZpMd99w2q7qL7QXprRfwGAzPLi3RTXhQazCWnRoZQ7VtStYu3jzV8j5GrtftrtfEtrwrY83SstV2gmbzrKUNS",
  "key29": "5zTzFKU6HKkoypbgcgzNuPEFAE5HTP2mNBRwqaeUaDTJ4c6N8RKyHuw7Liyin5xmBAhejqsbcutV9QSMiTmx2aBA",
  "key30": "3L7gznkZ22kZRYz4kT6Sws2Ta6q2uZTsfRpZyranViWYaF4ksXSuE247kW1bBh1g5SzfYFtospTYXaFu3ZTV37hm",
  "key31": "34DAonmHsGbZZrZes8TZtz3mrzLXvseDimvAm9FMpmbAmRT2bBuBUx9w4qDQK1qRuMFKXRaGhvE4zr6Wtn2c9Dq1",
  "key32": "4b765QbDATbSdfFxzbg4W5BMApDFucfEvheX9VbUJf7wEfe9yNBgAHjzhfUzpk24r6PSLw842jTGHzm6MpBgYE3K",
  "key33": "2z1cCD3Bd1b7pG5tN8wJ3TepiAtkDc4dPP3Sht6gCDafh78Cr9e6SZ7JnUvfedpHMHo5m7yhUHnNK9wjdtxzKFTH",
  "key34": "5QwtxrysJ7zABVTorDfe7dHhrMdtdgtqCPkFQmH33uepZXBJEKsiz7y2jzf7p45SUoq1JDuSMei3UEjKUNZ4UxpU",
  "key35": "4m5JAaAaoqYh4PWwaZgtRWDPCowwxpHbN5gSohrQwyyVeZbc1mAPKpNibtkjw5HuNF5UZktBv1GyYXaDtjPPEakR",
  "key36": "CoAnKsHzkYEghqWJS81uudPuo7tTL4qwbELrbup3qbYVT8r55P2wJGvJWbcygpc5Hj3QnsDeuotrTdE5aneRnKG",
  "key37": "4ASiYw4b7fkUoRFf1N5VZTJSMntA2v5PyoS3e9VhWE9bbpurK1UzXqaDQ1PkY1HntiB7pZ5axFxwTfrcwZAHranq",
  "key38": "2BDi3aeRfLfDJfPtrUzbnDF1Tc9owsPTJDezes3BEdAoCFDCfr4FN8ginPsaWrZrntMzyJNJcfGc9fVGKF8fZrDe"
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
